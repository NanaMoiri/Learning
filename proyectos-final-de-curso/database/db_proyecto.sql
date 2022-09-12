-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema fitnesdotcom
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `fitnesdotcom` ;

-- -----------------------------------------------------
-- Schema fitnesdotcom
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `fitnesdotcom` DEFAULT CHARACTER SET utf8 ;
USE `fitnesdotcom` ;

-- -----------------------------------------------------
-- Table `fitnesdotcom`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fitnesdotcom`.`usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `nombre_usuario` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `contrasena` VARCHAR(250) NOT NULL,
  `fecha de registro` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `reg_confirm` TINYINT NULL DEFAULT 0,
  `reg_token` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idusuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fitnesdotcom`.`perfil_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fitnesdotcom`.`perfil_usuario` (
  `id_perfil` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `apellidos` VARCHAR(100) NOT NULL,
  `edad` INT NOT NULL,
  `altura` FLOAT NOT NULL,
  `idusuario` INT NOT NULL,
  PRIMARY KEY (`id_perfil`, `idusuario`),
  CONSTRAINT `fk_perfil_usuario_usuario1`
    FOREIGN KEY (`idusuario`)
    REFERENCES `fitnesdotcom`.`usuario` (`idusuario`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fitnesdotcom`.`Datos_Calendario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fitnesdotcom`.`Datos_Calendario` (
  `id_Datos_Calendario` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NULL,
  `peso` FLOAT NULL,
  `IMC` FLOAT NULL,
  `BMR` INT NULL,
  `id_perfil` INT NOT NULL,
  `idusuario` INT NOT NULL,
  PRIMARY KEY (`id_Datos_Calendario`, `id_perfil`, `idusuario`),
  CONSTRAINT `fk_Datos_Calendario_perfil_usuario1`
    FOREIGN KEY (`id_perfil` , `idusuario`)
    REFERENCES `fitnesdotcom`.`perfil_usuario` (`id_perfil` , `idusuario`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fitnesdotcom`.`rutinas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fitnesdotcom`.`rutinas` (
  `id_rutina` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(255) NOT NULL,
  `duracion` INT NOT NULL,
  `tiempo_diario` TIME NOT NULL,
  PRIMARY KEY (`id_rutina`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fitnesdotcom`.`usuario_has_rutinas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fitnesdotcom`.`usuario_has_rutinas` (
  `idusuario` INT NOT NULL,
  `id_rutina` INT NOT NULL,
  `fecha_inicio` DATE NULL,
  `fecha_finalización` DATE NULL,
  PRIMARY KEY (`idusuario`, `id_rutina`),
  CONSTRAINT `fk_usuario_has_rutinas_usuario1`
    FOREIGN KEY (`idusuario`)
    REFERENCES `fitnesdotcom`.`usuario` (`idusuario`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_usuario_has_rutinas_rutinas1`
    FOREIGN KEY (`id_rutina`)
    REFERENCES `fitnesdotcom`.`rutinas` (`id_rutina`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fitnesdotcom`.`fotos_antes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fitnesdotcom`.`fotos_antes` (
  `idUpload` INT NOT NULL AUTO_INCREMENT,
  `fecha_antes` DATETIME NULL,
  `imagen_delante` VARCHAR(250) NULL,
  `imagen_detras` VARCHAR(250) NULL,
  `id_perfil` INT NOT NULL,
  `idusuario` INT NOT NULL,
  PRIMARY KEY (`idUpload`),
  CONSTRAINT `fk_fotos_antes_perfil_usuario1`
    FOREIGN KEY (`id_perfil` , `idusuario`)
    REFERENCES `fitnesdotcom`.`perfil_usuario` (`id_perfil` , `idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fitnesdotcom`.`fotos_despues`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fitnesdotcom`.`fotos_despues` (
  `idUpload` INT NOT NULL AUTO_INCREMENT,
  `fecha_despues` DATETIME NULL,
  `imagen_delante` VARCHAR(250) NULL,
  `imagen_detras` VARCHAR(250) NULL,
  `id_perfil` INT NOT NULL,
  `idusuario` INT NOT NULL,
  PRIMARY KEY (`idUpload`),
  CONSTRAINT `fk_fotos_despues_perfil_usuario1`
    FOREIGN KEY (`id_perfil` , `idusuario`)
    REFERENCES `fitnesdotcom`.`perfil_usuario` (`id_perfil` , `idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `fitnesdotcom`.`usuario`
-- -----------------------------------------------------
START TRANSACTION;
USE `fitnesdotcom`;
INSERT INTO `fitnesdotcom`.`usuario` (`idusuario`, `nombre_usuario`, `email`, `contrasena`, `fecha de registro`, `reg_confirm`, `reg_token`) VALUES (DEFAULT, 'usuario1', 'usuario1@asd.com', '123456', '2022/03/15 14:00:00', NULL, DEFAULT);
INSERT INTO `fitnesdotcom`.`usuario` (`idusuario`, `nombre_usuario`, `email`, `contrasena`, `fecha de registro`, `reg_confirm`, `reg_token`) VALUES (DEFAULT, 'usuario2', 'usuario2@asd.com', '456789', '2022/03/17 14:00:00', NULL, DEFAULT);
INSERT INTO `fitnesdotcom`.`usuario` (`idusuario`, `nombre_usuario`, `email`, `contrasena`, `fecha de registro`, `reg_confirm`, `reg_token`) VALUES (DEFAULT, 'usuario3', 'usuario3@asd.com', '789456', '2022/03/16 14:00:00', NULL, DEFAULT);

COMMIT;


-- -----------------------------------------------------
-- Data for table `fitnesdotcom`.`perfil_usuario`
-- -----------------------------------------------------
START TRANSACTION;
USE `fitnesdotcom`;
INSERT INTO `fitnesdotcom`.`perfil_usuario` (`id_perfil`, `nombre`, `apellidos`, `edad`, `altura`, `idusuario`) VALUES (DEFAULT, 'nombre 1', 'apellido 1', 28, 169, 1);
INSERT INTO `fitnesdotcom`.`perfil_usuario` (`id_perfil`, `nombre`, `apellidos`, `edad`, `altura`, `idusuario`) VALUES (DEFAULT, 'nombre 2', 'apellido 2', 50, 175, 2);
INSERT INTO `fitnesdotcom`.`perfil_usuario` (`id_perfil`, `nombre`, `apellidos`, `edad`, `altura`, `idusuario`) VALUES (DEFAULT, 'nombre 3', 'apellido 3', 33, 180, 3);

COMMIT;


-- -----------------------------------------------------
-- Data for table `fitnesdotcom`.`Datos_Calendario`
-- -----------------------------------------------------
START TRANSACTION;
USE `fitnesdotcom`;
INSERT INTO `fitnesdotcom`.`Datos_Calendario` (`id_Datos_Calendario`, `fecha`, `peso`, `IMC`, `BMR`, `id_perfil`, `idusuario`) VALUES (DEFAULT, '2022/03/27', 70, 25, 1450, 1, 1);
INSERT INTO `fitnesdotcom`.`Datos_Calendario` (`id_Datos_Calendario`, `fecha`, `peso`, `IMC`, `BMR`, `id_perfil`, `idusuario`) VALUES (DEFAULT, '2022/04/10', 68, 24.5, 1420, 2, 2);
INSERT INTO `fitnesdotcom`.`Datos_Calendario` (`id_Datos_Calendario`, `fecha`, `peso`, `IMC`, `BMR`, `id_perfil`, `idusuario`) VALUES (DEFAULT, '2022/03/15', 101, 40, 1700, 3, 3);
INSERT INTO `fitnesdotcom`.`Datos_Calendario` (`id_Datos_Calendario`, `fecha`, `peso`, `IMC`, `BMR`, `id_perfil`, `idusuario`) VALUES (DEFAULT, '2022/04/20', 96, 38, 1500, 1, 1);
INSERT INTO `fitnesdotcom`.`Datos_Calendario` (`id_Datos_Calendario`, `fecha`, `peso`, `IMC`, `BMR`, `id_perfil`, `idusuario`) VALUES (DEFAULT, '2022/03/17', 80, 30, 1500, 2, 2);
INSERT INTO `fitnesdotcom`.`Datos_Calendario` (`id_Datos_Calendario`, `fecha`, `peso`, `IMC`, `BMR`, `id_perfil`, `idusuario`) VALUES (DEFAULT, '2022/04/17', 78, 29, 1450, 3, 3);

COMMIT;


-- -----------------------------------------------------
-- Data for table `fitnesdotcom`.`rutinas`
-- -----------------------------------------------------
START TRANSACTION;
USE `fitnesdotcom`;
INSERT INTO `fitnesdotcom`.`rutinas` (`id_rutina`, `nombre`, `descripcion`, `duracion`, `tiempo_diario`) VALUES (DEFAULT, 'get shreded', 'cardio y musculación', 28, '00:30:00');
INSERT INTO `fitnesdotcom`.`rutinas` (`id_rutina`, `nombre`, `descripcion`, `duracion`, `tiempo_diario`) VALUES (DEFAULT, 'get fit', 'musculación', 21, '00:40:00');
INSERT INTO `fitnesdotcom`.`rutinas` (`id_rutina`, `nombre`, `descripcion`, `duracion`, `tiempo_diario`) VALUES (DEFAULT, 'hourglass', 'musculación y cardio', 28, '00:35:00');

COMMIT;


-- -----------------------------------------------------
-- Data for table `fitnesdotcom`.`usuario_has_rutinas`
-- -----------------------------------------------------
START TRANSACTION;
USE `fitnesdotcom`;
INSERT INTO `fitnesdotcom`.`usuario_has_rutinas` (`idusuario`, `id_rutina`, `fecha_inicio`, `fecha_finalización`) VALUES (1, 1, '2022/03/17', '2022/04/17');
INSERT INTO `fitnesdotcom`.`usuario_has_rutinas` (`idusuario`, `id_rutina`, `fecha_inicio`, `fecha_finalización`) VALUES (2, 2, '2022/03/15', NULL);
INSERT INTO `fitnesdotcom`.`usuario_has_rutinas` (`idusuario`, `id_rutina`, `fecha_inicio`, `fecha_finalización`) VALUES (3, 3, '2022/03/18', '2022/04/18');

COMMIT;

