// function maruBatu() {
//     const one = document.getElementById('one');

//     if(one.onclick()) {
//         one.firstChild.nodeValue = "○"
//     }
// }

// const el = document.getElementById("table");
// el.addEventListener("click", modifyText, false);

// document.addEventListener("click", function() {
//     document.getElementById("one").innerHTML = "○";
// })

// let circle = document.getElementById("maru");

// circle.addEventListener("click", myfunction);

// function myfunction() {
//     // if(){
//         document.getElementById('one').innerHTML = "○";
//     // }
    
//     // alert ("Hello World");
// }

// HTML elements
const restart = document.querySelector('.restart');
const cells = document.querySelector('.cell');

// event Handlers
const handleRestart = (e) => {
    let buttons = document.querySelectorAll('.cell');
    for(let i=0; i < buttons.length; i++) {
        buttons[i].removeEventListener('click', something)
    }
}

const handleCellClick = (e) => {
    // const location = e.tartget.classList[1]

    // console.log("location", location);
}



// event listeners
restart.addEventListener('click', handleRestart);

// for(const cell of cells) {
//     cells.addEventListener('click', handleCellClick);
// }