const cellElements=document.querySelectorAll(".game-board .cell");
const player1=document.querySelector(".players .player1");
const player2=document.querySelector(".players .player2");
const palyerO="O";
const palyerX="X";
let toogleTurn=false;
cellElements.forEach(cell=>{
   cell.onclick=()=>{

    let currentPlayer=toogleTurn?palyerO:palyerX;
    cell.classList.add("disabled"); 
    addInCell(cell,currentPlayer);
    swapPlayer();
  }
});
function addInCell(cell,currentPlayer)
{
    cell.innerHTML=currentPlayer;
    cell.classList.add(currentPlayer);
}
function swapPlayer(){
    toogleTurn=!toogleTurn;
    if(toogleTurn){
        player1.classList.add("active")
        player2.classList.remove("active")
    }else{
        player2.classList.add("active")
        player1.classList.remove("active")
    }
}