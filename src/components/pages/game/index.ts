import { state } from "../../../state";

export function initPlay(param){
    const div = document.createElement("div");
    div.className = "container";

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
        margin-top: 500px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .zoom {
        padding: 10px;
        transition: transform .2s; /* Animation */
        width: 100%;
        margin: 0 auto;
      }
      .zoom:hover {
        transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
      }
      .img {
          width: 100px:
          height: 100px;
      }
      
      
    `
    const rock = require("url:../../../../images/piedra.png")
    const sisors = require("url:../../../../images/tijera.png")
    const paper = require("url:../../../../images/papel.png")

    div.innerHTML = `
    <div class = countdown-container>
        <div class = countdown id="countdown"></div>
    </div>

    <div class= img-container>
        <div>
            <div class = zoom><img class = img src="${rock}" /></div>
        </div>
        <div>
            <div class = zoom><img src="${sisors}" /></div>
        </div>
        <div>
            <div class = zoom><img src="${paper}" /></div>
        </div>
    </div>
    `
    
    var timeleft = 5;
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            param.goTo("/results/")
            clearInterval(timeleft);
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);
    div.appendChild(style);

    return div;
}