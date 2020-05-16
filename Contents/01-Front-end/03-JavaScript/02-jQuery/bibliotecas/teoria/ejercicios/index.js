
let items = []

function write() {
    $(`body > ul`).empty()
    for (let i = 0; i < items.length; i++) {
        $(`body > ul`).append(`<li>${items[i]}<button id="${i}"class="clear" type="button">removed</button></li>`);
    }
    let deleteButtons = $(`.clear`)
    
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", remove)
    }
}
function addItem() {
    let user = $(`body > div > input[type=text]`).val();
    items.push(user)
    write()
    clear()
}
function remove(event) {
    items.splice(event.target.id, 1);
    write();
}
function clear() {
    $(`body > div > input[type=text]`).val("");
}
$(`body > div > button`).click(addItem)





