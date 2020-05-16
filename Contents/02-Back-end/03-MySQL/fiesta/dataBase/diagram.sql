-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema fiesta
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema fiesta
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `fiesta` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `fiesta` ;

-- -----------------------------------------------------
-- Table `fiesta`.`asistente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fiesta`.`asistente` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NULL,
  `tlf` VARCHAR(20) NULL,
  `email` VARCHAR(100) NOT NULL,
  `nunacompanante` TINYINT UNSIGNED NULL,
  `entradapagagada` ENUM('SI', 'NO') NOT NULL,
  `fechareserva` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
