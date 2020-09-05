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
// const restart = document.querySelector('.restart');
// const cells = document.querySelector('.cell');

// event Handlers
// const handleRestart = (e) => {
//     let buttons = document.querySelectorAll('.cell');
//     for(let i=0; i < buttons.length; i++) {
//         buttons[i].removeEventListener('click', something)
//     }
// }

// const handleCellClick = (e) => {
    // const location = e.tartget.classList[1]

    // console.log("location", location);
// }



// event listeners
// restart.addEventListener('click', handleRestart);

// for(const cell of cells) {
//     cells.addEventListener('click', handleCellClick);
// }



const context = {
    handCount: 0,
    cells: new Array(9),
    progress: true,
    isCircleTurn: true,
    circleElement: document.querySelector('.maru'),
    crossElement: document.querySelector('.batu'),
    cellsElements: document.querySelectorAll('.cell'),
    msgElement: document.querySelector('.message')
  }

  function onLoad() {
    context.cellsElements.forEach(ele => {
      ele.addEventListener('click', onClickCell)
    })
    return
  }

//   function deleteEverything() {
//       const restartBtn = document.querySelector('.restart');
//       restartBtn.forEach(ele => {
//         ele.addEventListener('click', onClickDelete)
//       })
//       return
//   }


    document.querySelector('.restart').addEventListener('click', function(){
        context.progress = false
        delete context.cells
    });

    

    //   const index2 = context.cells;
    //   delete index2;
  
//   onClickDelete()

  function onClickCell(e) {
    const index = e.target.getAttribute('data-key')
    const { isCircleTurn, cells, msgElement } = context
    if (cells[index-1]) {
      return
    }

    const char = isCircleTurn ? '○' : '×'
    cells[index-1] = char
    e.target.innerText = char
    console.log('handCount', context.handCount)
    console.log('index', index)
    console.log('isCircleTurn', isCircleTurn)
    console.log('cells', cells)
    context.isCircleTurn = !isCircleTurn
    context.handCount++

    const cellsIndex = context.cells;
    if (context.handCount >= 9) {
      context.progress = false
      msgElement.innerText = 'draw'
    } else if (cellsIndex[0] == "○" && cellsIndex[1] == "○" && cellsIndex[2] == "○") {
        context.progress = false
        msgElement.innerText = '○　win!!!'
    } else if(cellsIndex[0] == "○" && cellsIndex[3] == "○" && cellsIndex[6] == "○") {
        context.progress = false
        msgElement.innerText = '○　win!!!'
    } else if(cellsIndex[0] == "○" && cellsIndex[4] == "○" && cellsIndex[8] == "○") {
        context.progress = false
        msgElement.innerText = '○　win!!!'
    } else if(cellsIndex[1] == "○" && cellsIndex[4] == "○" && cellsIndex[7] == "○") {
        context.progress = false
        msgElement.innerText = '○　win!!!'
    } else if(cellsIndex[2] == "○" && cellsIndex[5] == "○" && cellsIndex[8] == "○") {
        context.progress = false
        msgElement.innerText = '○　win!!!'
    } else if (cellsIndex[2] == "○" && cellsIndex[4] == "○" && cellsIndex[6] == "○") {
        context.progress = false
        msgElement.innerText = '○　win!!!'
    } else if (cellsIndex[3] == "○" && cellsIndex[4] == "○" && cellsIndex[5] == "○") {
        context.progress = false
        msgElement.innerText = '○　win!!!'
    } else if(cellsIndex[6] == "○" && cellsIndex[7] == "○" && cellsIndex[8] == "○") {
        context.progress = false
        msgElement.innerText = '○　win!!!'
    } else if(cellsIndex[0] == "×" && cellsIndex[1] == "×" && cellsIndex[2] == "×") { 
        context.progress = false
        msgElement.innerText = '×　win!!!'
    } else if(cellsIndex[0] == "×" && cellsIndex[3] == "×" && cellsIndex[6] == "×") {
        context.progress = false
        msgElement.innerText = '×　win!!!'
    } else if(cellsIndex[0] == "×" && cellsIndex[4] == "×" && cellsIndex[8] == "×") {
        context.progress = false
        msgElement.innerText = '×　win!!!'
    } else if(cellsIndex[1] == "×" && cellsIndex[4] == "×" && cellsIndex[7] == "×") {
        context.progress = false
        msgElement.innerText = '×　win!!!'
    } else if(cellsIndex[2] == "×" && cellsIndex[5] == "×" && cellsIndex[8] == "×") {
        context.progress = false
        msgElement.innerText = '×　win!!!'
    } else if(cellsIndex[2] == "×" && cellsIndex[4] == "×" && cellsIndex[6] == "×") {
        context.progress = false
        msgElement.innerText = '×　win!!!'
    }else if (cellsIndex[3] == "×" && cellsIndex[4] == "×" && cellsIndex[5] == "×") {
        context.progress = false
        msgElement.innerText = '×　win!!!'
    } else if (cellsIndex[6] == "×" && cellsIndex[7] == "×" && cellsIndex[8] == "×") {
        context.progress = false
        msgElement.innerText = '×　win!!!'
    }
  }
  onLoad()
//   deleteEverything()

//  function winTheGame() {
//      const indexNum = context.cells.index;
//      console.log(indexNum)
//  }
//  winTheGame()