const grid = document.querySelector('.grid');
const arrayGrid = Array.prototype.slice.call(document.querySelectorAll('.cell'));
let isPlayerOne = true;
let gameboard = [0,0,0,0,0,0,0,0,0];
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
   for(let i=0;i<=2 ; i++){
    if(gameboard[0+i] === gameboard[3+i] && gameboard[0+i] === gameboard[6+i] && gameboard[i] !== 0)
        return true;
   }

   for(let i=0;i<=2 ; i++){
    if(gameboard[0+3*i] === gameboard[1+3*i] && gameboard[0+3*i] === gameboard[2+3*i] && gameboard[3*i] !== 0)
        return true;
   }

   if(gameboard[0] === gameboard[4] && gameboard[0] === gameboard[8] && gameboard[0] !== 0){
    return true;
   }

   if(gameboard[2] === gameboard[4] && gameboard[2] === gameboard[6] && gameboard[2] !== 0){
    return true;
   }

}



