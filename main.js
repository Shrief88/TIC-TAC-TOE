const Gameboard = (()=>{
    let gameboard = [0,0,0,0,0,0,0,0,0];

    const setField = (index,sign)=>{
        gameboard[index]= sign;
    }

    const getGameboard = ()=>{
        return gameboard;
    }

    const reset = ()=>{
        for(let i=0;i<9;i++){
            gameboard[i] = 0;
        }
    }

    return{setField , getGameboard ,reset};
})()

const GameController = (()=>{
    let round = 0;
    const winningCombination = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]

    const updateRound = ()=>{
        round++;
    }

    const resetRound = ()=>{
        round = 0;
    }

    const endGame = ()=>{
        const gameboard = Gameboard.getGameboard();
        return winningCombination.some((combination)=>{
                return gameboard[combination[0]]==gameboard[combination[1]] &&
                gameboard[combination[0]] == gameboard[combination[2]] && 
                gameboard[combination[0]] !== 0 
        })
    }

    const getRoundNumber = ()=>{
        return round;
    }

    return{getRoundNumber,endGame,updateRound,resetRound};
})()

const displayController = (()=>{
    const grid = document.querySelector('.grid');
    const cells = document.querySelectorAll('.cell');
    const result = document.querySelector('#result');
    const restart = document.querySelector('#restart');
    let isPlayerOne = true;
    

    grid.addEventListener('click',(e)=>{
        const div = e.target;
        if(!div.textContent != "" && GameController.endGame() == false){
            GameController.updateRound();
            
            const arrayGrid = Array.prototype.slice.call(cells);
            const index = arrayGrid.indexOf(div);

            if(isPlayerOne){
                div.textContent = "X";
                isPlayerOne = false;
                Gameboard.setField(index,'x');
            }
            else{
                div.textContent = "O";
                isPlayerOne = true;
                Gameboard.setField(index,'o');
            }

            if(GameController.endGame()){
                if(div.textContent === "X"){
                    result.textContent = "Player one has won";
                }else{
                    result.textContent = "Player two has won";
                }
            }

            if(GameController.getRoundNumber() === 9 && !GameController.endGame()){
                result.textContent="It is a Tie";
            }
        } 
    })

    restart.addEventListener('click',()=>{
        Gameboard.reset();
        GameController.resetRound();
        cells.forEach(cell=>{
            cell.textContent = "";
        })
    })
})()









