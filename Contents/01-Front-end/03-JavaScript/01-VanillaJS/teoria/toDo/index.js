

let tareas = [];

function write() {

        //guardo el html de la lista en una variable 

        let ul = document.querySelector(`body > ul`);

        //comienzo una plantilla para el nuevo html

        let nuevoHtml = `<ul>`;

        //por cada elemento de array tareas.
        //añado una etiqueta <li> a la planbtilla html

        for (let i = 0; i < tareas.length; i++) {

                nuevoHtml += `<li>${tareas[i]}</li><button id="${i}" class="btn-eliminar">delete</button>` 
                //abre el ul y añade li por los elementos que hay en el array
        }

        //cierro la etiqueta  <ul> de la plantilla 
        nuevoHtml += `</ul>`   //cuando acaba el bucle cierra la etiqueta ul.

        //reemplazo el html original con la plantilla nueva
        ul.innerHTML = nuevoHtml;

        //guardo en una variable todos lo botones que se estan creando seleccionandolos por su clase 
        let botonesEliminar = document.querySelectorAll(`.btn-eliminar`);

        //creo un for y añado un indice a los botones y un evento  remove
        for (let i = 0; i < botonesEliminar.length; i++) {
                botonesEliminar[i].addEventListener(`click`, remove)

        }


}


function add(event) {

        //cojo lo que el usuario haiga escrito en el input 
        let nuevaTarea = document.querySelector(`body > input`).value;

        //lo añado a la array
        tareas.push(nuevaTarea);

        //Re-escrito toda la lista con la array
        write(); 
        clear()

}

function remove(event) {

         tareas.splice(event.target.id, 1);
        
        write();
}

function clear() {
        
   document.querySelector(`body > input`).value = "";
}



document.querySelector(`body > button`).addEventListener(`click`, add)