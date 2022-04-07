import { initHome } from "./components/pages/home";
import {initInstructions} from "./components/pages/intructions";
import {initPlay} from "./components/pages/game";
import {initResults} from "./components/pages/results";

const BASE_PATH = "/cap5-FinalChallange";

const routes = [
  {
    path: /\/welcome/,
    component: initHome,
  },
  {
    path: /\/instructions/,
    component: initInstructions,
  },
  {
    path: /\/game/,
    component: initPlay,
  },
  {
    path: /\/results/,
    component: initResults,
  },
];

export function initRouter(container: Element) {

  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
    console.log(path)
  }

  function handleRoute(route) {
    container.innerHTML = "";

    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        container.appendChild(el);
      }
    }
  }

  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  if (location.host.includes(".github.io")) {
    goTo("cap5-FinalChallenge/welcome");
  }

  window.onpopstate = () => {
    handleRoute(location.pathname);
  };
}