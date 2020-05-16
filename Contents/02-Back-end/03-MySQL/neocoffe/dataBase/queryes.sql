# CRUD

SELECT * FROM accounts WHERE username = ? AND password = ?;
# CREATE 

INSERT INTO neocoffe.user (username,password,firstname,secondname,fechainscripcion,email)
VALUES
('test','hola','test','test',20200304,'test@test.com');

# obtener usuarios
SELECT * FROM neocoffe.user;
SELECT * FROM neocoffe.user WHERE id=1;

# MODIFICAR
UPDATE neocoffe.user
SET username = 'Test 2' ,password = 'password 2',
firstname = 'nombre 2', secondname = 'test 2',
fechainscripcion = '20200302' , email = 'test2@test2.com'
WHERE id = 1;

# ELIMINAR 
DELETE FROM neocoffe.user WHERE id = 1;