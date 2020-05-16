
let skill  = [];
 


function write() {

      let ul = document.querySelector("body > div > div > div > div.targetItems");
      let addHtml = `<ul class="list-group list-group-horizontal-lg">`;

        for (let i = 0; i < skill.length; i++) {

            addHtml += `<li class="list-group-item">${skill[i]}<button id="${i}" class="btn_1" >remove</button></li>`
            
        }

        addHtml += `</ul>`

        ul.innerHTML = addHtml;

         let deleteButtons = document.querySelectorAll(`.btn_1`)

         for (let i = 0; i < deleteButtons.length; i++) {
             deleteButtons[i].addEventListener("click",remove)
              }
        
}



function addedSkill() {
   
    let input = document.querySelector("body > div > div > div > div.input-group.mb-3 > input").value;
 

    
    if (input !== "")
        skill.push(input)
        write()
        clear()
}


function remove(event) {
    
        skill.splice(event.target.id, 1);

        write();

}


function clear() {
    
    document.querySelector("body > div > div > div > div.input-group.mb-3 > input").value = ""
}

document.querySelector("#button-addon2").addEventListener("click",addedSkill)
