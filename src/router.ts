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

function isGithubPages() {
  return location.host.includes("github.io");
}

export function initRouter(container: Element) {
  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  function handleRoute(route) {
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

    //Compara cada path con la collection y si alguna coincide
    //ejecuta la función que acompaña
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el = r.component({ goTo: goTo }) as any;

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  if (location.pathname == "/" || location.pathname == "/cap5-FinalChallange/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = () => {
    handleRoute(location.pathname);
  };
}