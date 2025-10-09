import "./style.css";
import config from "./core/config";
import Game from "./core/classes/game.js";

window.addEventListener("load", () => {
  window._game = new Game({
    width: config.width,
    height: config.height,
    type: config.type,
    physics: config.physics,
  });
});
