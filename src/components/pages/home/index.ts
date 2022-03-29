export function initHome(param): HTMLElement {
    const div = document.createElement("div");
    div.className = "container";

    const style = document.createElement("style");

    style.innerHTML =`
      .home-title-container{
        width: 100%;
        height: auto;
        text-align: center;
        display: flex;
        justify-content: center;
      }
      .home-title{
        font-family: "Permanent Marker";
        font-size: 80px;
      }
      .home-button-container{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        margin-top: 75px;
        text-align: center; 
      }
      .home-button{
        background-color: black;
      }
      .img-containter-container{
        width: 100%;
        display: flex;
        justify-content: center;
      }
      .img-container{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 50px;
        position: absolute; bottom: 0;
      }
      .img-mini-container{
        display: flex;
        justify-content: center;
      }
      @media (min-width: 600px){
        .img-container{
          width: 322px;
          height: 180px
        }
      }
      .img{
        width: 56px;
        height: 128px;
      }
      @media (min-width: 600px){
        .img{
          width: 45px;
          height: 100px
        }
      }
    `

    const rock = require("url:../../../../images/piedra.png")
    const sisors = require("url:../../../../images/tijera.png")
    const paper = require("url:../../../../images/papel.png")
    const button = require("url:../../../../images/boton.png")
  
    div.innerHTML = `
      <div class = home-title-container>
        <h2 class = home-title>Piedra Papel o Tijeras</h2>
      </div>
      <div class = home-button-container>
        <img class = home-button src="${button}">
      </div>
      <div class = img-containter-container>
        <div class = img-container>
          <div class = img-mini-container>
            <img class = img src="${rock}">
          </div>
          <div class = img-mini-container>
            <img class = img src="${sisors}">
          </div>  
          <div class = img-mini-container>
            <img class = img src="${paper}">
          </div>
      </div>
      `;

    div.appendChild(style);
  
    div
      .querySelector(".home-button")
      .addEventListener("click", () => param.goTo("/instructions"));
  
    return div;
  }