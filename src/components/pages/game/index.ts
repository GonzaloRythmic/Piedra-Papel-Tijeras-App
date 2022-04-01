import { state } from "../../../state";

export function initPlay(param){
    const div = document.createElement("div");
    div.className = "container";

    const rock = require("url:../../../src/images/piedra.jpg")
    const sisors = require("url:../../../src/images/tijera. jpg")
    const paper = require("url:../../../src/images/papel. jpg")

    div.innerHTML = `
    <div class = countdown-container>
        <div class = countdown id="countdown"></div>
    </div>

    <div class= img-container>
        <div play = "rock">
            <div class = zoom ><img class = "rock" src="${rock}" /></div>
        </div>
        <div play = "scissors">
            <div class = zoom><img class = "sisors" src="${sisors}" /></div>
        </div>
        <div play = "paper">
            <div class = zoom><img class = "paper" src="${paper}" /></div>
        </div>
    </div>
    <div class = text-container>
        <h3 class = text>Elige rápido!</h3>
    </div>
    `
    var timeleft = 5;
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            param.goTo("/instructions/")
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft --;
    }, 1000);
    
    const imgContainer = div.querySelector(".img-container").children;
    for (const hand of imgContainer) { 
        hand.addEventListener("click", () => {  
            const type = hand.getAttribute("play");

            setTimeout(() => {
                clearInterval(downloadTimer);
                param.goTo("/results");
            }, 1300);
            console.log(type);
     
            if (type === "scissors") {
            state.setMove("scissors");
            console.log(type);
            } else if (type === "rock") {
                state.setMove("rock");
            } else if (type === "paper") {
                state.setMove("paper");
            }
        });
    }

    const style = document.createElement("style");
    style.innerHTML =`
    .countdown{
        font-family: 'Freckle Face', cursive;
        font-size: 40px;
    }
    .countdown-container{
        margin-top: 25px:
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    .img-container{
        margin-top: 300px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .zoom {
        padding: 10px;
        transition: transform .2s; /* Animation */
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
      }
      .zoom:hover {
        transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
      }
      .img {
        width: 100px:
        height: 100px;
      }
      .text-container {
        display: flex;
        justify-content: center;
      }
      .text {
        font-size: 50px;
        font-family: "IM Fell English SC"
      }
    `

    div.appendChild(style);
    return div;
}