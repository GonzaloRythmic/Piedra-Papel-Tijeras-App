// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8wcER":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
// import "./components/buttons";
// import "./components/text";
// import "./components/hands";
var _router = require("./router");
var _state = require("./state");
(function() {
    _state.state.getStorage();
    const rootEl = document.querySelector(".root");
    _router.initRouter(rootEl);
})();

},{"./router":"4QFWt","./state":"1Yeju"}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _home = require("./components/pages/home");
var _intructions = require("./components/pages/intructions");
var _game = require("./components/pages/game");
var _results = require("./components/pages/results");
const BASE_PATH = "/cap5-FinalChallange";
const routes = [
    {
        path: /\/welcome/,
        component: _home.initHome
    },
    {
        path: /\/instructions/,
        component: _intructions.initInstructions
    },
    {
        path: /\/game/,
        component: _game.initPlay
    },
    {
        path: /\/results/,
        component: _results.initResults
    }, 
];
function isGithubPages() {
    return location.host.includes("github.io");
}
function initRouter(container) {
    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({
        }, "", completePath);
        handleRoute(completePath);
    }
    function handleRoute(route) {
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        //Compara cada path con la collection y si alguna coincide
        //ejecuta la función que acompaña
        for (const r of routes)if (r.path.test(newRoute)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    if (location.pathname == "/" || location.pathname == "/cap5-FinalChallange") goTo("/welcome");
    else handleRoute(location.pathname);
    window.onpopstate = ()=>{
        handleRoute(location.pathname);
    };
}

},{"./components/pages/home":"cg7zB","./components/pages/intructions":"dwVp9","./components/pages/game":"kjn0T","./components/pages/results":"c7XUN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cg7zB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHome", ()=>initHome
);
function initHome(param) {
    const div = document.createElement("div");
    div.className = "container";
    const style = document.createElement("style");
    style.innerHTML = `
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
    `;
    const rock = require("url:../../../../images/piedra.png");
    const sisors = require("url:../../../../images/tijera.png");
    const paper = require("url:../../../../images/papel.png");
    const button = require("url:../../../../images/boton.png");
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
    div.querySelector(".home-button").addEventListener("click", ()=>param.goTo("/instructions")
    );
    return div;
}

},{"url:../../../../images/piedra.png":"amxdg","url:../../../../images/tijera.png":"kDm5W","url:../../../../images/papel.png":"5tNYp","url:../../../../images/boton.png":"cyP7f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"amxdg":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7UhFu') + "piedra.f3e14d13.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"kDm5W":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7UhFu') + "tijera.80febae3.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5tNYp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7UhFu') + "papel.327d2f47.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cyP7f":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7UhFu') + "boton.9d40fc65.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dwVp9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInstructions", ()=>initInstructions
);
function initInstructions(param) {
    const div = document.createElement("div");
    div.className = "container";
    const rock = require("url:../../../../images/piedra.png");
    const sisors = require("url:../../../../images/tijera.png");
    const paper = require("url:../../../../images/papel.png");
    const playButton = require("url:../../../../images/jugarBoton.png");
    div.innerHTML = `
      <div class = home-title-container>
        <h2 class = home-title> 
          Presioná jugar
          y elegí: piedra, papel o tijera antes de que pasen los 5 segundos.
        </h2>
      </div>
      <div class = button-container>
        <img class = home-button src="${playButton}">
      </div>
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
    const style = document.createElement("style");
    style.innerHTML = `
        .home-title-container{
          width: 100%;
          height: auto;
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .home-title{
          font-family: "Permanent Marker";
          font-size: 40px;
        }
        .button-container{
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 50px;
        }
        .home-button-container{
          width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
          margin-top: 75px;
        }
        .home-button{
          background-color: black;
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
        .img{
          width: 56px;
          height: 100px;
        }
  `;
    div.appendChild(style);
    div.querySelector(".home-button").addEventListener("click", ()=>param.goTo("/game")
    );
    return div;
}

},{"url:../../../../images/piedra.png":"amxdg","url:../../../../images/tijera.png":"kDm5W","url:../../../../images/papel.png":"5tNYp","url:../../../../images/jugarBoton.png":"6tT5o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6tT5o":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7UhFu') + "jugarBoton.b6743743.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kjn0T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPlay", ()=>initPlay
);
var _state = require("../../../state");
function initPlay(param) {
    const div = document.createElement("div");
    div.className = "container";
    const rock = require("url:../../../../images/piedra.png");
    const sisors = require("url:../../../../images/tijera.png");
    const paper = require("url:../../../../images/papel.png");
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
    `;
    var timeleft = 5;
    var downloadTimer = setInterval(function() {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            param.goTo("/instructions/");
        } else document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        timeleft--;
    }, 1000);
    const imgContainer = div.querySelector(".img-container").children;
    for (const hand of imgContainer)hand.addEventListener("click", ()=>{
        const type = hand.getAttribute("play");
        setTimeout(()=>{
            clearInterval(downloadTimer);
            param.goTo("/results");
        }, 1300);
        console.log(type);
        if (type === "scissors") {
            _state.state.setMove("scissors");
            console.log(type);
        } else if (type === "rock") _state.state.setMove("rock");
        else if (type === "paper") _state.state.setMove("paper");
    });
    const style = document.createElement("style");
    style.innerHTML = `
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
    `;
    div.appendChild(style);
    return div;
}

},{"url:../../../../images/piedra.png":"amxdg","url:../../../../images/tijera.png":"kDm5W","url:../../../../images/papel.png":"5tNYp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../../state":"1Yeju"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: ""
        },
        history: {
            myScore: 0,
            computerScore: 0
        }
    },
    listeners: [],
    getStorage () {
        const local = JSON.parse(localStorage.getItem("data"));
        if (localStorage.getItem("data")) return this.data.history = local;
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        for (const cb of this.listeners)cb();
        console.log("Soy el state, he cambiado", this.data);
        this.savedData();
    },
    suscribe (callback) {
        this.listeners.push(callback);
    },
    //SAVE THE SCORE AND SUMMON SAVE DATA
    setScore () {
        const currentState = this.getState();
        const myPlay = this.getState().currentGame.myPlay;
        const computerPlay = this.getState().currentGame.computerPlay;
        const currentWhoWins = this.whoWins(myPlay, computerPlay);
        const myScore = currentState.history.myScore;
        const computerScore = currentState.history.computerScore;
        if (currentWhoWins === "wins") return this.setState({
            ...currentState,
            history: {
                myScore: myScore + 1,
                computerScore: computerScore
            }
        });
        else if (currentWhoWins === "loss") return this.setState({
            ...currentState,
            history: {
                myScore: myScore,
                computerScore: computerScore + 1
            }
        });
    },
    whoWins (myPlay, computerPlay) {
        const tieS = myPlay == "scissors" && computerPlay == "scissors";
        const tieR = myPlay == "rock" && computerPlay == "rock";
        const tieP = myPlay == "paper" && computerPlay == "paper";
        const tie = [
            tieP,
            tieR,
            tieS
        ].includes(true);
        if (tie) return "tie";
        const winS = myPlay == "scissors" && computerPlay == "paper";
        const winR = myPlay == "rock" && computerPlay == "scissors";
        const winP = myPlay == "paper" && computerPlay == "rock";
        const youWin = [
            winP,
            winR,
            winS
        ].includes(true);
        if (youWin) return "wins";
        else return "loss";
    },
    //SAVE THE MOVEMENT AND SUMMON THE SCORE
    setMove (move) {
        const currentState = this.getState();
        currentState.currentGame.myPlay = move;
        const machineMove = ()=>{
            const hands = [
                "scissors",
                "rock",
                "paper"
            ];
            return hands[Math.floor(Math.random() * 3)];
        };
        currentState.currentGame.computerPlay = machineMove();
        this.setScore();
    },
    savedData () {
        const currentHistory = this.getState().history;
        localStorage.setItem("data", JSON.stringify(currentHistory));
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c7XUN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResults", ()=>initResults
);
var _state = require("../../../state");
const resultImages = {
    tie: require("url:../../../../images/empate.png"),
    win: require("url:../../../../images/win.png"),
    loss: require("url:../../../../images/lose.png")
};
resultImages.tie.innerHTML = `
<h2>Hola</h2>`;
function initResults(param) {
    const div = document.createElement("div");
    div.className = "container__results";
    const currentState = _state.state.getState();
    const currentGame = currentState.currentGame;
    const myPlay = currentGame.myPlay;
    const computerPlay = currentGame.computerPlay;
    const whoWins = _state.state.whoWins(myPlay, computerPlay);
    //ADD STYLES TO THE BACKGROUND RESULT AND IMG
    let background;
    let imagen;
    if (whoWins === "wins") {
        imagen = resultImages.win; // empate buscar imagen 
        background = "rgba(136, 137, 73, 0.6)";
    } else if (whoWins === "loss") {
        imagen = resultImages.loss;
        background = "rgba(137, 73, 73, 0.6)";
    } else {
        imagen = resultImages.tie;
        background = "rgba(106, 112, 101, 0.6)";
    }
    const button = require("url:../../../../images/volverAJugar.png");
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
    div.querySelector(".home-button").addEventListener("click", ()=>{
        param.goTo("./game");
    });
    //div.querySelector(".back").addEventListener("click", () => {
    //     param.goTo("/welcome");
    // });
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

},{"url:../../../../images/lose.png":"8mAUT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../../state":"1Yeju","url:../../../../images/win.png":"39jBf","url:../../../../images/volverAJugar.png":"2sCs3","url:../../../../images/empate.png":"f2ur6"}],"8mAUT":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7UhFu') + "lose.32c2c1f0.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"39jBf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7UhFu') + "win.9ebadb8d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2sCs3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7UhFu') + "volverAJugar.f6fd4bd9.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"f2ur6":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7UhFu') + "empate.12d44ab5.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["8wcER","h7u1C"], "h7u1C", "parcelRequire46e4")

//# sourceMappingURL=index.b71e74eb.js.map
