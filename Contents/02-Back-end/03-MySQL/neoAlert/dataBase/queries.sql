
# manipular los tipos de alerta

INSERT INTO neoalert.tipoalerta
(nombre,gravedad)
VALUES
('asesinato',10);

# visualizar tipos 
SELECT * FROM neoalert.tipoalerta;
TRUNCATE TABLE neoalert.tipoalerta;
#queries de barrio

INSERT INTO neoalert.barrio
(nombre,ciudad,cp)
VALUES
('Gracia','Barcelona',08012);

SELECT * FROM neoalert.barrio;

UPDATE neoalert.barrio 
SET
nombre = "test", ciudad = "Barcelona", cp = 08012
WHERE id = 1;

DELETE FROM neoalert.barrio WHERE id = 1;

# Queries ciudadano

INSERT INTO neoalert.ciudadano 
(username,password,email)
VALUES
("paco","pil","pastillas@coche");

SELECT * FROM neoalert.ciudadano ;

UPDATE neoalert.ciudadano 
SET username = "text2",password = "test2",email= "test2@masil"
WHERE id = 1;

DELETE FROM neoalert.ciudadano WHERE id = 1;

#QUERIES aLERTA

INSERT INTO neoalert.alerta 
(fecha,atendida,descripcion,ciudadano_id,barrio_id,tipoAlerta_ID)
VALUES
(20200305,0,"test1",2,4,1);

SELECT * FROM neoalert.alerta;

UPDATE neoalert.alerta
SET
fecha = 20200506,
atendida = 1 ,
descripcion = "test2"
WHERE id = 1;

DELETE FROM neoalert.alerta WHERE id = 1;
