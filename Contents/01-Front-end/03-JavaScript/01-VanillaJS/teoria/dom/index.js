
//DOM:es la representacion interna que tiene el navegador de la estructura de pag web.dom = document object model
//(interpretacion interna del codigo o estructura que has creado de una pag web)


//-alterar elementos existentes

        // document
        // #document
        // document.querySelector("#t3_eubjfc > div._1poyrkZ7g36PawDueRza-J._2uazWzYzM0Qndpz5tFu3EX > article > div._32pB7ODBwG3OSx1u_17g58 > div._2FCtq-QzlfuN-SwVMUZMM3._2wImphGg_1LcEF5MiErvRx.t3_eubjfc > div.y8HYJ-y_lTUHkQIc1mdCq._2INHSNB8V5eaWp4P0rY_mE > a > div > h3").textContent
        // "Kobe Bryant killed in helicopter crash in California" /para seleccionar y te devuelva el texto 
        //document.querySelector("#t3_eubjfc > div._1poyrkZ7g36PawDueRza-J._2uazWzYzM0Qndpz5tFu3EX > article > div._32pB7ODBwG3OSx1u_17g58 > div._2FCtq-QzlfuN-SwVMUZMM3._2wImphGg_1LcEF5MiErvRx.t3_eubjfc > div.y8HYJ-y_lTUHkQIc1mdCq._2INHSNB8V5eaWp4P0rY_mE > a > div > h3").textContent = "Ernest lo peta"
        //"Ernest lo peta" para modificarel texto original


                    //document.querySelector()sirve para cualquier tipo de elemento


                    // textContent: solo para elementos de texo

                    //siempre que se manipule el dom empezaremos con un document.querySelector("")dentro siempre comillas.comillas.
                    
                    //.value: para ver el contenido del input, siempre se usa luego el .value para que te  devuelva lo que el usuario pone en el input.

                    //document.querySelectorAll("")te tevuelve todo los resutados en vez de solo uno ej:
                    
                    //document.querySelectorAll("div") te devolvera todos los que hay en la pagina. te lo devuelve con un array. 

        //document.getElemntarById("ID-DEL-ELEMENTO")te devuelve un elemento del dom solo en base de su IDBCursor.(este sirve solo para los que tienen id)

        //ejemplo para sacar todas las url de una web de fondos de escritorio.(en la consola )

        let imagenes = document.querySelectorAll('#rowCustom-5e2eb325a73fe > div > div > div > div > div > div > div > div > a.overlay-background')
​
for(let i=0; i < imagenes.length; i++){
    console.log(imagenes[i].href)
}

        //.className  para cambiar o ponber elementos css.  para agregar css sera += "spacio nombreSelectorCss"

        //.innerHtml para extraer html de la seleccion realizada con un selector. de un elemento
                //ejemplo:
                
                document.querySelector("body > div.container > div > div:nth-child(1)").innerHTML = `
                                                                                                    <ul>
                                                                                                    <li>tarea 1</li>
                                                                                                    <li>tarea 2</li>
                                                                                                    </ul>`
                
              


//-eliminar elementos 







///-inyectar elelmentos nuevos




