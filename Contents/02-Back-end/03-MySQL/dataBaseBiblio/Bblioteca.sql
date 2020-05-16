-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema biblioteca
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema biblioteca
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `biblioteca` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `biblioteca` ;

-- -----------------------------------------------------
-- Table `biblioteca`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`usuarios` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(35) NOT NULL,
  `SecondName` VARCHAR(35) NOT NULL,
  `Activo` TINYINT(1) NOT NULL DEFAULT '1',
  `FechaDeAlta` TIMESTAMP NOT NULL,
  `Direccion` VARCHAR(100) NOT NULL,
  `TlfContacto` VARCHAR(15) NOT NULL,
  `Email` VARCHAR(35) NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `biblioteca`.`trabajadores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`trabajadores` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Activo` TINYINT(1) NOT NULL,
  `FirstNme` VARCHAR(45) NOT NULL,
  `Salary` FLOAT NULL DEFAULT NULL,
  `FechaContratacion` TIMESTAMP NULL DEFAULT NULL,
  `Departamento` VARCHAR(30) NULL DEFAULT NULL,
  `Tipo` ENUM('ett', 'fijo', 'practicas') NOT NULL,
  `Estado` ENUM('alta', 'baja') NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `biblioteca`.`prestamos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`prestamos` (
  `ID` INT NOT NULL,
  `Cliente` VARCHAR(45) NULL DEFAULT NULL,
  `CopiasDisponibles` TINYINT UNSIGNED NULL DEFAULT NULL,
  `TrabajadorRealizadoPedido` VARCHAR(45) NULL DEFAULT NULL,
  `FechaRalizadoPedido` DATE NOT NULL,
  `PrecioDia` FLOAT UNSIGNED NOT NULL,
  `Usuarios_ID` INT NOT NULL,
  `trabajadores_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `Usuarios_ID`, `trabajadores_ID`),
  UNIQUE INDEX `Cliente_UNIQUE` (`Cliente` ASC) VISIBLE,
  INDEX `fk_Prestamos_Usuarios_idx` (`Usuarios_ID` ASC) VISIBLE,
  INDEX `fk_prestamos_trabajadores1_idx` (`trabajadores_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Prestamos_Usuarios`
    FOREIGN KEY (`Usuarios_ID`)
    REFERENCES `biblioteca`.`usuarios` (`ID`),
  CONSTRAINT `fk_prestamos_trabajadores1`
    FOREIGN KEY (`trabajadores_ID`)
    REFERENCES `biblioteca`.`trabajadores` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `biblioteca`.`libros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`libros` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Genero` VARCHAR(45) NULL DEFAULT NULL,
  `FechaPublicado` DATE NOT NULL,
  `TituloLibro` VARCHAR(45) NOT NULL,
  `Autor` VARCHAR(45) NOT NULL,
  `edicion` VARCHAR(45) NOT NULL,
  `Lenguaje` VARCHAR(10) NOT NULL,
  `CopiasDisponibles` TINYINT UNSIGNED NOT NULL,
  `CodigoLibroAlmacen` VARCHAR(100) NOT NULL,
  `ClienteEnPosesion` VARCHAR(45) NOT NULL,
  `TiempoTranscurridoAlquilado` TIMESTAMP NOT NULL,
  `Prestamos_ID` INT NOT NULL,
  `Prestamos_Usuarios_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `Prestamos_ID`, `Prestamos_Usuarios_ID`),
  INDEX `fk_Libros_Prestamos1_idx` (`Prestamos_ID` ASC, `Prestamos_Usuarios_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Libros_Prestamos1`
    FOREIGN KEY (`Prestamos_ID` , `Prestamos_Usuarios_ID`)
    REFERENCES `biblioteca`.`prestamos` (`ID` , `Usuarios_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
