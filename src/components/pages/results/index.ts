import { state } from "../../../state"; 

const resultImages = {
    tie: require("url:../../../images/empate. jpg"),
    win: require("url:../../../images/win. jpg"),
    loss: require("url:../../../images/lose. jpg"),
};

export function initResults(param){
  const div = document.createElement("div");
  div.className = "container__results";
  
  const currentState = state.getState();
  const currentGame = currentState.currentGame;
  const myPlay = currentGame.myPlay;
  const computerPlay = currentGame.computerPlay;
  const whoWins = state.whoWins(myPlay, computerPlay);
  
  //ADD STYLES TO THE BACKGROUND RESULT AND IMG
  let background;
  let imagen;
  if (whoWins === "wins") {
    imagen = resultImages.win; // empate buscar imagen 
    background = "rgba(136, 137, 73, 0.6)";
  } else if (whoWins === "loss") {
    imagen = resultImages.loss;
    background = "rgba(137, 73, 73, 0.6)";
  } else if (whoWins === "tie") {
    imagen = resultImages.tie;
    background = "rgba(106, 112, 101, 0.6)";
  }

  console.log("Soy la variable computerPlay", computerPlay)
  console.log("Soy la variable myPlay",myPlay )
    
  const button = require("url:../../../images/boton. jpg");
  const style = document.createElement("style");
  div.innerHTML = `
    <div>
      <img class="img__result" src="${imagen}">
    </div>
    <div class="board">
      <div>
        <h3>Score</h3>
      </div>
        <text-comp>Vos: ${currentState.history.myScore}</text-comp>
        <text-comp>Máquina: ${currentState.history.computerScore}</text-comp>
    </div>
      <img class = home-button src="${button}">
    </div>
  `;

  div.querySelector(".home-button").addEventListener("click", () => {
    param.goTo("./game");
  });
    

  style.innerHTML = `
    .container__results {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
    padding-top: 40px;
    background-color: ${background};
    }
    .img__result {
    height: 180px;
    }
    .board {
    height: 190px;
    width: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 10px solid #000;
    border-radius: 10px;
    margin: 5px 0;
    background-color: #fff;
    }
    .board  h3 {
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    height: 100%;
    }
    .board > text-comp {
    align-self: flex-end;
    }
    .back {
    margin-top: 10px;
    }
  `;

  div.appendChild(style);
  return div;
}