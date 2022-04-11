import { state } from "../../../state";

export function initShowHands(param): HTMLElement  {
    const div = document.createElement("div");
    div.className = "container";

    
    const rock = require("url:../../../images/piedra. jpg")
    const sisors = require("url:../../../images/tijera. jpg")
    const paper = require("url:../../../images/papel. jpg")

    const computer = state.data.currentGame.computerPlay;
    const my = state.data.currentGame.myPlay;

    div.innerHTML= `
        <div class = img_container-machine>
            <img class = img>
        </div>
        <div class = img_container-you>
            <img id = img-you>
        </div>
    `
    const style = document.createElement("style");
    style.innerHTML =`

    `
    //Verificamos jugadad de la máquina. 
    const imgElMachine = div.querySelector("img");
    console.log ("Etiqueta imagen jugada por la maquina es ", imgElMachine);

    const imgElYou = div.querySelector("img-you");
    console.log ("Etiqueta imagen jugada usuario", imgElYou);   //AQUI ESTÁ EL ERROR. 


    if (computer == "scissors") {
        imgElMachine.src = sisors;
    } else if (computer == "rock") {
        imgElMachine.src = rock;
    } else if (computer == "paper") {
        imgElMachine.src = paper;
    }

    //Verificamos jugada del usuario.
    // const imgElYou = div.querySelector("img_container-you");
    // console.log ("Etiqueta imagen jugada usuario", imgElYou);
    // if (my =="scissors" ) {
    //     // imgElYou.src = sisors;
    // }


    return div;
}