
////////////////////////////exercise 02



const memes = ["http://devhumor.com/content/uploads/images/March2019/developers_projects.jpg",
    "http://devhumor.com/content/uploads/images/February2019/valentine's-day.png",
    "http://devhumor.com/content/uploads/images/February2019/dev_code.jpg",
    "http://devhumor.com/content/uploads/images/February2019/department_standards.jpg",
    "http://devhumor.com/content/uploads/images/February2019/aD12jbK_460s.jpg",
    "http://devhumor.com/content/uploads/images/January2019/race-car.png",
    "http://devhumor.com/content/uploads/images/January2019/code_fix.jpg",
    "http://devhumor.com/content/uploads/images/January2019/parachute.png",
    "http://devhumor.com/content/uploads/images/December2018/code_mess.jpg",
    "http://devhumor.com/content/uploads/images/December2018/code_push.jpg",
    "http://devhumor.com/content/uploads/images/December2018/css.png",
    "http://devhumor.com/content/uploads/images/December2018/surprise.png",
    "http://devhumor.com/content/uploads/images/November2018/javascript.jpg",
    "http://devhumor.com/content/uploads/images/November2018/revert-commit.jpg",
    "http://devhumor.com/content/uploads/images/October2018/if.png",
    "http://devhumor.com/content/uploads/images/October2018/names.png",
    "http://devhumor.com/content/uploads/images/October2018/developer_stress.png",
    "http://devhumor.com/content/uploads/images/October2018/git.jpg"]






function random() {

    let rounded = memes[Math.round(Math.random() * (memes.length)) - 1];
    return rounded;

}

function addedImg() {

    let addImg = document.querySelector("body > div");

    let rounded = random();

    
    addImg.innerHTML = `<img src="${rounded}"></img>`;
}




document.querySelector("body > nav > form > button").addEventListener("click", addedImg);