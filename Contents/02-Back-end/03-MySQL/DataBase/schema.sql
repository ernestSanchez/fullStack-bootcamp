-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema aerolineasargentinas
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema aerolineasargentinas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `aerolineasargentinas` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `aerolineasargentinas` ;

-- -----------------------------------------------------
-- Table `aerolineasargentinas`.`Pasajeros(CLIENTES)`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolineasargentinas`.`Pasajeros(CLIENTES)` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(45) NULL,
  `SecondName` VARCHAR(45) NULL,
  `Email` VARCHAR(45) NULL,
  `TlfContacto` TINYINT UNSIGNED NULL,
  `FechaSalida` DATE NOT NULL,
  `FechaLlegada` DATE NULL,
  `AeropuertoSalida` VARCHAR(45) NOT NULL,
  `Destino` VARCHAR(45) NOT NULL,
  `TipoVuelo` ENUM("PrimeraClasse", "Turista") NULL,
  `PosicionAsiento` TINYINT UNSIGNED NOT NULL,
  `Alergias` VARCHAR(45) NOT NULL,
  `Edad` TINYINT UNSIGNED NOT NULL,
  `Sexo` ENUM("H", "M") NOT NULL,
  `DocumentId` ENUM("DNI", "PASSPORT") NOT NULL,
  `NumeroDocumentoId` VARCHAR(45) NOT NULL,
  `CodigoPromocional` VARCHAR(10) NOT NULL,
  `TipoDePago` ENUM("VISA", "PAYPAL") NOT NULL,
  `NumTargeta` TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `aerolineasargentinas`.`Personal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolineasargentinas`.`Personal` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `category` ENUM("Capitan", "Copiloto", "Azafata") NULL,
  `Activo` TINYINT(1) NOT NULL,
  `Estado` ENUM("alta", "baja") NOT NULL,
  `Salario` FLOAT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `aerolineasargentinas`.`Aviones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolineasargentinas`.`Aviones` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `FechaUltimaRevision` DATE NULL,
  `tamano` FLOAT UNSIGNED NULL,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE INDEX `Id_UNIQUE` (`Id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `aerolineasargentinas`.`Vuelos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolineasargentinas`.`Vuelos` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `TipoDeVuelo` ENUM("TransAtlantico", "Nacional", "Continental") NOT NULL,
  `Distancia` VARCHAR(45) NULL,
  `Escalas` TINYINT(1) NOT NULL DEFAULT 1,
  `AsientosDisponibles` TINYINT UNSIGNED NULL,
  `FechaSalida` DATE NOT NULL,
  `FechaLLegada` DATE NOT NULL,
  `lugarOrigen` VARCHAR(45) NOT NULL,
  `LugarLlegada` VARCHAR(45) NOT NULL,
  `Aviones_Id` INT NOT NULL,
  PRIMARY KEY (`Id`, `Aviones_Id`),
  UNIQUE INDEX `Id_UNIQUE` (`Id` ASC) VISIBLE,
  INDEX `fk_Vuelos_Aviones1_idx` (`Aviones_Id` ASC) VISIBLE,
  CONSTRAINT `fk_Vuelos_Aviones1`
    FOREIGN KEY (`Aviones_Id`)
    REFERENCES `aerolineasargentinas`.`Aviones` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `aerolineasargentinas`.`Reservas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolineasargentinas`.`Reservas` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  `FechaRealizada` DATE NOT NULL,
  `salida` DATE NOT NULL,
  `llegada` DATE NOT NULL,
  `Pasajeros(CLIENTES)_Id` INT NOT NULL,
  `Vuelos_Id` INT NOT NULL,
  `Vuelos_Aviones_Id` INT NOT NULL,
  PRIMARY KEY (`Id`, `Pasajeros(CLIENTES)_Id`, `Vuelos_Id`, `Vuelos_Aviones_Id`),
  INDEX `fk_Reservas_Pasajeros(CLIENTES)_idx` (`Pasajeros(CLIENTES)_Id` ASC) VISIBLE,
  INDEX `fk_Reservas_Vuelos1_idx` (`Vuelos_Id` ASC, `Vuelos_Aviones_Id` ASC) VISIBLE,
  CONSTRAINT `fk_Reservas_Pasajeros(CLIENTES)`
    FOREIGN KEY (`Pasajeros(CLIENTES)_Id`)
    REFERENCES `aerolineasargentinas`.`Pasajeros(CLIENTES)` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reservas_Vuelos1`
    FOREIGN KEY (`Vuelos_Id` , `Vuelos_Aviones_Id`)
    REFERENCES `aerolineasargentinas`.`Vuelos` (`Id` , `Aviones_Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `aerolineasargentinas`.`Personal_has_Vuelos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolineasargentinas`.`Personal_has_Vuelos` (
  `Personal_ID` INT NOT NULL,
  `Vuelos_Id` INT NOT NULL,
  `Vuelos_Aviones_Id` INT NOT NULL,
  PRIMARY KEY (`Personal_ID`, `Vuelos_Id`, `Vuelos_Aviones_Id`),
  INDEX `fk_Personal_has_Vuelos_Vuelos1_idx` (`Vuelos_Id` ASC, `Vuelos_Aviones_Id` ASC) VISIBLE,
  INDEX `fk_Personal_has_Vuelos_Personal1_idx` (`Personal_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Personal_has_Vuelos_Personal1`
    FOREIGN KEY (`Personal_ID`)
    REFERENCES `aerolineasargentinas`.`Personal` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Personal_has_Vuelos_Vuelos1`
    FOREIGN KEY (`Vuelos_Id` , `Vuelos_Aviones_Id`)
    REFERENCES `aerolineasargentinas`.`Vuelos` (`Id` , `Aviones_Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
