

SELECT * FROM fiesta.asistente;
SELECT * FROM fiesta.asistente WHERE id=1;

INSERT fiesta.asistente (nombre,apellido,tlf,email,nunacompanante,entradapagagada,fechareserva)
VALUES
('toni','MontNA','658789153','FESF@gmail.com',50,'NO',20200304);

UPDATE fiesta.asistente
SET nombre = 'Test 2' ,apellido = 'password',
tlf = 'nombre', email = 'test',
nunacompanante = 2 , entradapagagada = 'NO', fechareserva= '20200302'
WHERE id = 4;

DELETE FROM fiesta.asistente WHERE id = 4;