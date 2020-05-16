-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema neoalert
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema neoalert
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `neoalert` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `neoalert` ;

-- -----------------------------------------------------
-- Table `neoalert`.`ciudadano`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `neoalert`.`ciudadano` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(30) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(250) NOT NULL,
  `firstname` VARCHAR(45) NULL,
  `secondname` VARCHAR(45) NULL,
  `age` TINYINT UNSIGNED NULL,
  `genero` ENUM("masculino", "femenino", "otros") NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `neoalert`.`barrio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `neoalert`.`barrio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `ciudad` VARCHAR(55) NOT NULL,
  `cp` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `neoalert`.`tipoAlerta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `neoalert`.`tipoAlerta` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `gravedad` TINYINT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) VISIBLE,
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `neoalert`.`alerta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `neoalert`.`alerta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha` TIMESTAMP NOT NULL,
  `atendida` TINYINT(1) NULL DEFAULT 0,
  `descripcion` VARCHAR(255) NULL,
  `ciudadano_id` INT NOT NULL,
  `barrio_id` INT NOT NULL,
  `tipoAlerta_ID` INT NOT NULL,
  PRIMARY KEY (`id`, `ciudadano_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_alerta_ciudadano1_idx` (`ciudadano_id` ASC) VISIBLE,
  INDEX `fk_alerta_barrio1_idx` (`barrio_id` ASC) VISIBLE,
  INDEX `fk_alerta_tipoAlerta1_idx` (`tipoAlerta_ID` ASC) VISIBLE,
  CONSTRAINT `fk_alerta_ciudadano1`
    FOREIGN KEY (`ciudadano_id`)
    REFERENCES `neoalert`.`ciudadano` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_alerta_barrio1`
    FOREIGN KEY (`barrio_id`)
    REFERENCES `neoalert`.`barrio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_alerta_tipoAlerta1`
    FOREIGN KEY (`tipoAlerta_ID`)
    REFERENCES `neoalert`.`tipoAlerta` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
