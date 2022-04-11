import { state } from "../../../state";

export function initShowHands(param): HTMLElement  {
    const div = document.createElement("div");
    div.className = "container";

    
    const rock = require("url:../../../images/piedra. jpg")
    const sisors = require("url:../../../images/tijera. jpg")
    const paper = require("url:../../../images/papel. jpg")
    const vs = require ("url:../../../images/vs(2).png");

    div.innerHTML= `
        <div class = img_container-machine>
            <img class = img-machine>
        </div>

        <div class = vs_container>
            <img class = vs_image src =${vs}>
        </div>

        <div class = img_container-you>
            <img class = img-you> 
        </div>
    `
    const style = document.createElement("style");
    style.innerHTML =`
        .img_container-machine{
            text-align: center;
        }
        .img_container-you {
            widht: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            text-align: center;
        }
        .img-you{
            position: absolute; bottom: 0;
        }
        .vs_container {
            width: 100%;
            height: 470px;
            display: flex;
            justify-content: center;
            align-items: center; 
            margin: 0 auto;

            animation-duration: 0.5s;
            animation-name: animate-fade;
            animation-delay: 0.5s;
            animation-fill-mode: backwards;
        }
        @keyframes animate-fade {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        }
        .vs_image{
            filter: brightness(1:1);
            mix-blend-mode: multiply;
            width: 150px;
            height: 150px;
        }
        .img-machine {
            transform:rotate(180deg);
            -ms-transform:rotate(180deg); /* IE 9 */
            -webkit-transform:rotate(180deg); /* Opera, Chrome, and Safari */
        }
    `
    const computer = state.data.currentGame.computerPlay;
    const my = state.data.currentGame.myPlay;

    //Verificamos jugadad de la máquina. 
    const imgElMachine = div.querySelector("img");
    console.log ("Etiqueta imagen jugada por la maquina es ", imgElMachine);

    if (computer == "scissors") {
        imgElMachine.src = sisors;
    } else if (computer == "rock") {
        imgElMachine.src = rock;
    } else if (computer == "paper") {
        imgElMachine.src = paper;
    }

     //Verificamos jugada del usuario.
    const imgElYou = div.querySelector(".img-you"); //ETIQUETA QUE QUIERO CAPTURAR.
    console.log ("Etiqueta imagen jugada usuario", imgElYou);   //AQUI ESTÁ EL ERROR. 

    if (my == "scissors" ) {
        imgElYou.src = sisors;
    } else if ( my == "rock") {
         imgElYou.src = rock;
    } else if ( my == "paper") {
         imgElYou.src = paper;
    }

    setTimeout(() => {
        param.goTo("/results");
    }, 3500);


    div.appendChild(style);
    return div;
}