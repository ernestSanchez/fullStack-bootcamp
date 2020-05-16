
SELECT * FROM trekking.user;

INSERT INTO trekking.user
(username,password,dateInscription,email,age,weitgh,sex)
VALUES
("carlos","fdpjdsaofj",20200305,"los@moloo",18,5,"H");

UPDATE trekking.user
SET
username = "test",password="test", dateInscription = 20200605, email = "test@test" ,age = 20, weitgh= 10 ,sex= "m"
WHERE id = 5;

DELETE FROM trekking.user WHERE id = 1;

#WAlking

SELECT * FROM trekking.walking ;


INSERT INTO trekking.walking
(location,duration,dificultad,acompañado,user_id)
VALUES
("Alpes",98,10,1,3);

UPDATE  trekking.walking
SET
location = "chiclamna", duration = 20, dificultad = 5 ,acompañado = 0, user_id= 2
WHERE id = 2;

SELECT * FROM trekking.walking WHERE id=1;

DELETE FROM trekking.walking WHERE id = 1;