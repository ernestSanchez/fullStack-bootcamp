-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema trekking
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema trekking
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `trekking` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `trekking` ;

-- -----------------------------------------------------
-- Table `trekking`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trekking`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `dateInscription` TIMESTAMP NULL DEFAULT NULL,
  `email` VARCHAR(250) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `age` TINYINT UNSIGNED NULL DEFAULT NULL,
  `weitgh` TINYINT UNSIGNED NULL DEFAULT NULL,
  `sex` ENUM('h', 'm', 'otros') CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_as_ci;


-- -----------------------------------------------------
-- Table `trekking`.`walking`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trekking`.`walking` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `location` VARCHAR(60) NULL DEFAULT NULL,
  `duration` INT UNSIGNED NOT NULL,
  `dificultad` TINYINT UNSIGNED NULL DEFAULT NULL,
  `acompañado` TINYINT(1) NULL DEFAULT '0',
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_walking_user_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_walking_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `trekking`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
