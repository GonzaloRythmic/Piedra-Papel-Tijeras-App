function n(n,t,e,i){Object.defineProperty(n,t,{get:e,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},o=t.parcelRequire46e4;null==o&&((o=function(n){if(n in e)return e[n].exports;if(n in i){var t=i[n];delete i[n];var o={id:n,exports:{}};return e[n]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(n,t){i[n]=t},t.parcelRequire46e4=o),o.register("27Lyk",(function(t,e){var i,o;n(t.exports,"register",(()=>i),(n=>i=n)),n(t.exports,"resolve",(()=>o),(n=>o=n));var r={};i=function(n){for(var t=Object.keys(n),e=0;e<t.length;e++)r[t[e]]=n[t[e]]},o=function(n){var t=r[n];if(null==t)throw new Error("Could not resolve bundle with id "+n);return t}})),o.register("03li1",(function(n,t){n.exports=new URL(o("27Lyk").resolve("dntGO"),import.meta.url).toString()})),o.register("9yk4f",(function(n,t){n.exports=new URL(o("27Lyk").resolve("gsBsd"),import.meta.url).toString()})),o.register("4Lmrj",(function(n,t){n.exports=new URL(o("27Lyk").resolve("1W2Fw"),import.meta.url).toString()})),o.register("bSOyk",(function(n,t){n.exports=new URL(o("27Lyk").resolve("kXfTu"),import.meta.url).toString()})),o.register("1oLHr",(function(n,t){n.exports=new URL(o("27Lyk").resolve("1VGpF"),import.meta.url).toString()})),o.register("3kKb0",(function(n,t){n.exports=new URL(o("27Lyk").resolve("EoffP"),import.meta.url).toString()})),o.register("37V4p",(function(n,t){n.exports=new URL(o("27Lyk").resolve("kJuCr"),import.meta.url).toString()})),o.register("69nt8",(function(n,t){n.exports=new URL(o("27Lyk").resolve("g59fW"),import.meta.url).toString()})),o.register("5m4k2",(function(n,t){n.exports=new URL(o("27Lyk").resolve("5TUsM"),import.meta.url).toString()})),o("27Lyk").register(JSON.parse('{"dZpbI":"index.4ad3407d.js","dntGO":"piedra.9b8a8f86.png","gsBsd":"tijera.50df3149.png","1W2Fw":"papel.d5a759d6.png","kXfTu":"boton.c8a334d8.png","1VGpF":"jugarBoton.ef1e7edb.png","EoffP":"empate.6586eb87.png","kJuCr":"win.bbfce0b4.png","g59fW":"lose.b18c6366.png","5TUsM":"volverAJugar.e35857f2.png"}'));const r={data:{currentGame:{computerPlay:"",myPlay:""},history:{myScore:0,computerScore:0}},listeners:[],getStorage(){const n=JSON.parse(localStorage.getItem("data"));if(localStorage.getItem("data"))return this.data.history=n},getState(){return this.data},setState(n){this.data=n;for(const n of this.listeners)n();console.log("Soy el state, he cambiado",this.data),this.savedData()},suscribe(n){this.listeners.push(n)},setScore(){const n=this.getState(),t=this.getState().currentGame.myPlay,e=this.getState().currentGame.computerPlay,i=this.whoWins(t,e),o=n.history.myScore,r=n.history.computerScore;return"wins"===i?this.setState({...n,history:{myScore:o+1,computerScore:r}}):"loss"===i?this.setState({...n,history:{myScore:o,computerScore:r+1}}):void 0},whoWins(n,t){if(["paper"==n&&"paper"==t,"rock"==n&&"rock"==t,"scissors"==n&&"scissors"==t].includes(!0))return"tie";return["paper"==n&&"rock"==t,"rock"==n&&"scissors"==t,"scissors"==n&&"paper"==t].includes(!0)?"wins":"loss"},setMove(n){const t=this.getState();t.currentGame.myPlay=n;t.currentGame.computerPlay=["scissors","rock","paper"][Math.floor(3*Math.random())],this.setScore()},savedData(){const n=this.getState().history;localStorage.setItem("data",JSON.stringify(n))}};const s={tie:o("3kKb0"),win:o("37V4p"),loss:o("69nt8")};s.tie.innerHTML="\n<h2>Hola</h2>";const a=[{path:/\/welcome/,component:function(n){const t=document.createElement("div");t.className="container";const e=document.createElement("style");e.innerHTML='\n      .home-title-container{\n        width: 100%;\n        height: auto;\n        text-align: center;\n        display: flex;\n        justify-content: center;\n      }\n      .home-title{\n        font-family: "Permanent Marker";\n        font-size: 80px;\n      }\n      .home-button-container{\n        width: 100%;\n        height: auto;\n        display: flex;\n        justify-content: center;\n        margin-top: 75px;\n        text-align: center; \n      }\n      .home-button{\n        background-color: black;\n      }\n      .img-containter-container{\n        width: 100%;\n        display: flex;\n        justify-content: center;\n      }\n      .img-container{\n        width: 100%;\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        column-gap: 50px;\n        position: absolute; bottom: 0;\n      }\n      .img-mini-container{\n        display: flex;\n        justify-content: center;\n      }\n      @media (min-width: 600px){\n        .img-container{\n          width: 322px;\n          height: 180px\n        }\n      }\n      .img{\n        width: 56px;\n        height: 128px;\n      }\n      @media (min-width: 600px){\n        .img{\n          width: 45px;\n          height: 100px\n        }\n      }\n    ';const i=o("03li1"),r=o("9yk4f"),s=o("4Lmrj"),a=o("bSOyk");return t.innerHTML=`\n      <div class = home-title-container>\n        <h2 class = home-title>Piedra Papel o Tijeras</h2>\n      </div>\n      <div class = home-button-container>\n        <img class = home-button src="${a}">\n      </div>\n      <div class = img-containter-container>\n        <div class = img-container>\n          <div class = img-mini-container>\n            <img class = img src="${i}">\n          </div>\n          <div class = img-mini-container>\n            <img class = img src="${r}">\n          </div>  \n          <div class = img-mini-container>\n            <img class = img src="${s}">\n          </div>\n      </div>\n      `,t.appendChild(e),t.querySelector(".home-button").addEventListener("click",(()=>n.goTo("/instructions"))),t}},{path:/\/instructions/,component:function(n){const t=document.createElement("div");t.className="container";const e=o("03li1"),i=o("9yk4f"),r=o("4Lmrj"),s=o("1oLHr");t.innerHTML=`\n      <div class = home-title-container>\n        <h2 class = home-title> \n          Presioná jugar\n          y elegí: piedra, papel o tijera antes de que pasen los 5 segundos.\n        </h2>\n      </div>\n      <div class = button-container>\n        <img class = home-button src="${s}">\n      </div>\n      <div class = img-container>\n        <div class = img-mini-container>\n          <img class = img src="${e}">\n        </div>\n        <div class = img-mini-container>\n          <img class = img src="${i}">\n        </div>\n        <div class = img-mini-container>\n          <img class = img src="${r}">\n        </div>\n      </div>\n  `;const a=document.createElement("style");return a.innerHTML='\n        .home-title-container{\n          width: 100%;\n          height: auto;\n          text-align: center;\n          display: flex;\n          justify-content: center;\n        }\n        .home-title{\n          font-family: "Permanent Marker";\n          font-size: 40px;\n        }\n        .button-container{\n          width: 100%;\n          display: flex;\n          justify-content: center;\n          margin-top: 50px;\n        }\n        .home-button-container{\n          width: 100%;\n          height: auto;\n          display: flex;\n          justify-content: center;\n          margin-top: 75px;\n        }\n        .home-button{\n          background-color: black;\n        }\n        .img-container{\n          width: 100%;\n          display: grid;\n          grid-template-columns: 1fr 1fr 1fr;\n          column-gap: 50px;\n          position: absolute; bottom: 0;\n        }\n        .img-mini-container{\n          display: flex;\n          justify-content: center;\n        }\n        .img{\n          width: 56px;\n          height: 100px;\n        }\n  ',t.appendChild(a),t.querySelector(".home-button").addEventListener("click",(()=>n.goTo("/game"))),t}},{path:/\/game/,component:function(n){const t=document.createElement("div");t.className="container";const e=o("03li1"),i=o("9yk4f"),s=o("4Lmrj");t.innerHTML=`\n    <div class = countdown-container>\n        <div class = countdown id="countdown"></div>\n    </div>\n\n    <div class= img-container>\n        <div play = "rock">\n            <div class = zoom ><img class = "rock" src="${e}" /></div>\n        </div>\n        <div play = "scissors">\n            <div class = zoom><img class = "sisors" src="${i}" /></div>\n        </div>\n        <div play = "paper">\n            <div class = zoom><img class = "paper" src="${s}" /></div>\n        </div>\n    </div>\n    <div class = text-container>\n        <h3 class = text>Elige rápido!</h3>\n    </div>\n    `;var a=5,c=setInterval((function(){a<=0?(clearInterval(c),n.goTo("/instructions/")):document.getElementById("countdown").innerHTML=a+" seconds remaining",a--}),1e3);const l=t.querySelector(".img-container").children;for(const t of l)t.addEventListener("click",(()=>{const e=t.getAttribute("play");setTimeout((()=>{clearInterval(c),n.goTo("/results")}),1300),console.log(e),"scissors"===e?(r.setMove("scissors"),console.log(e)):"rock"===e?r.setMove("rock"):"paper"===e&&r.setMove("paper")}));const d=document.createElement("style");return d.innerHTML="\n    .countdown{\n        font-family: 'Freckle Face', cursive;\n        font-size: 40px;\n    }\n    .countdown-container{\n        margin-top: 25px:\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        margin-top: 20px;\n    }\n    .img-container{\n        margin-top: 300px;\n        width: 100%;\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n    }\n    .zoom {\n        padding: 10px;\n        transition: transform .2s; /* Animation */\n        width: 100%;\n        margin: 0 auto;\n        display: flex;\n        justify-content: center;\n      }\n      .zoom:hover {\n        transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */\n      }\n      .img {\n        width: 100px:\n        height: 100px;\n      }\n      .text-container {\n        display: flex;\n        justify-content: center;\n      }\n      .text {\n        font-size: 50px;\n        font-family: \"IM Fell English SC\"\n      }\n    ",t.appendChild(d),t}},{path:/\/results/,component:function(n){const t=document.createElement("div");t.className="container__results";const e=r.getState(),i=e.currentGame,a=i.myPlay,c=i.computerPlay,l=r.whoWins(a,c);let d,m;"wins"===l?(m=s.win,d="rgba(136, 137, 73, 0.6)"):"loss"===l?(m=s.loss,d="rgba(137, 73, 73, 0.6)"):(m=s.tie,d="rgba(106, 112, 101, 0.6)");const p=o("5m4k2"),g=document.createElement("style");return t.innerHTML=`\n    <div>\n      <img class="img__result" src="${m}">\n    </div>\n    <div class="board">\n      <div>\n        <h3>Score</h3>\n      </div>\n        <text-comp>Vos: ${e.history.myScore}</text-comp>\n        <text-comp>Máquina: ${e.history.computerScore}</text-comp>\n    </div>\n      <img class = home-button src="${p}">\n    </div>\n  `,t.querySelector(".home-button").addEventListener("click",(()=>{n.goTo("./game")})),g.innerHTML=`\n    .container__results {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n    justify-content: center;\n    padding-top: 40px;\n    background-color: ${d};\n    }\n    .img__result {\n    height: 180px;\n    }\n    .board {\n    height: 190px;\n    width: 230px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    border: 10px solid #000;\n    border-radius: 10px;\n    margin: 5px 0;\n    background-color: #fff;\n    }\n    .board  h3 {\n    text-align: center;\n    font-size: 40px;\n    font-weight: 700;\n    height: 100%;\n    }\n    .board > text-comp {\n    align-self: flex-end;\n    }\n    .back {\n    margin-top: 10px;\n    }\n  `,t.appendChild(g),t}}];function c(){return location.host.includes("github.io")}!function(){r.getStorage();!function(n){function t(n){const t=c()?"/cap5-FinalChallange"+n:n;history.pushState({},"",t),e(t)}function e(e){const i=c()?e.replace("/cap5-FinalChallange",""):e;for(const e of a)if(e.path.test(i)){const i=e.component({goTo:t});n.firstChild&&n.firstChild.remove(),n.appendChild(i)}}"/"==location.pathname||"/cap5-FinalChallange/"==location.pathname?t("/welcome"):e(location.pathname),window.onpopstate=()=>{e(location.pathname)}}(document.querySelector(".root"))}();
//# sourceMappingURL=index.4ad3407d.js.map
