const grid = document.querySelector('.grid');
const arrayGrid = Array.prototype.slice.call(document.querySelectorAll('.cell'));
let isPlayerOne = true;
let gameboard = [];
const result = document.querySelector('#result');


grid.addEventListener('click',(e)=>{
    const div = e.target;
    if(!div.textContent != ""){
        const index = arrayGrid.indexOf(div);
        if(isPlayerOne){
            div.textContent = "X";
            isPlayerOne = false;
            gameboard[index] = "x";
        }
        else{
            div.textContent = "O";
            isPlayerOne = true;
            gameboard[index] = "o";
        }
        if(endGame(gameboard)){
            if(div.textContent === "X"){
                result.textContent = "Player one has won";
            }else{
                result.textContent = "Player two has won";
            }
        }
    } 
})

function endGame(gameboard){
   return false;
}


