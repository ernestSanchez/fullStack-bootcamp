
// 1. Vamos a hacer un pequeño sistemas de registro de películas o series.
// El programa debe iniciar preguntando al usuario el número de películas o
// series que desea insertar .
// El sistema debe entonces presentar, para cada película o serie, tres
// preguntas al usuario.
// Artículo 1 - Nombre
// Artículo 1 - Película o Série ? Respuesta: P o S
// Artículo 1 - Valoración (1 a 5)
// El programa debe grabar los datos en un array de objetos. Cada artículo
// debe ser un objeto con las tres propiedades y sus valores de acuerdo con las respuestas
// del usuario. Utilizar nombres claros para las claves del objeto y demás variables, en
// minúsculas, sin espacios, sin acentos.
// El programa debe entonces:
// a) Imprimir el array resultante en la consola.
// b) Imprimir en pantalla un título “Séries” y una lista con los
// nombres y valoraciones de las series, en formato HTML.
// c) Imprimir en pantalla un título “Películas” y una lista con los
// nombres y valoraciones de las películas, en formato HTML.
// Ejemplo: NOMBRE - X estrellas
// d) Imprimir en pantalla:
// Mejor película: NOMBRE - X estrellas
// Mejor serie: NOMBRE - X estrellas
// e) Si el nombre de la serie es Breaking Bad, su nombre debe
// aparecer en verde.
// f) Si el nombre de la película es Pulp Fiction, su nombre debe
// aparecer en rojo.
// g) Si la valoración de la película es 5, la valoración debe
// aparecer en negrita.


let articulos = [];

let cantidadArticulos = prompt("cuantos articulos deseas: ")
cantidadArticulos = parseInt(cantidadArticulos)


for (let i = 1; i <= cantidadArticulos; i++) {

    let nombreArticulo = prompt("titulo " + i + ": ")
    let tipoArticulo = prompt("Película o Série ? introduzca P o S: ")
    let valoracionArticulo = prompt("Valoración: ")




    let resultado = { "titulo": nombreArticulo, "peliculaoserie": tipoArticulo, "valoracion": valoracionArticulo }

    articulos.push(resultado)
    console.log(articulos)

}





let mejorValoradoSerie = undefined;
let mejorValoradoPelicula = undefined;

document.write("<h1>Series<br>")
for (let articulo of articulos) {
    if (articulo.peliculaoserie === "S") {
        document.write("<br>"+articulo.titulo + " : " + articulo.valoracion+"&#9734;");
        if (!mejorValoradoSerie || articulo.valoracion > mejorValoradoSerie.valoracion) {
            mejorValoradoSerie = articulo;
        }
    }
}


let color = '#00f';
if (mejorValoradoSerie.titulo === 'breaking bad') {
    color = '#0f0';
}
document.write('<div style="color: ' + color + '">')
document.write("Serie mejor valorada: " + mejorValoradoSerie.titulo+" "+mejorValoradoSerie.valoracion+"&#9734;");
document.write('</div>')

document.write("<h1>Peliculas<br>")
for (let articulo of articulos) {
    if (articulo.peliculaoserie === "P") {
        document.write("<br>"+articulo.titulo + " : " + articulo.valoracion+"&#9734;")
        if (!mejorValoradoPelicula || articulo.valoracion > mejorValoradoPelicula.valoracion) {
            mejorValoradoPelicula = articulo;
        }
    }
    
}
document.write("<br />Pelicula mejor valorada: " + mejorValoradoPelicula.titulo+" "+mejorValoradoPelicula.valoracion+"&#9734;")


