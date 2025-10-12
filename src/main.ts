import "./style.css";
import config from "./core/config";
import "phaser";
import HubScene from "./core/classes/scenes/hub";

window.addEventListener("load", () => {
  window._game = new Phaser.Game({
    width: config.width,
    height: config.height,
    type: config.type,
    physics: config.physics,
    scene: [HubScene]
  });
});
