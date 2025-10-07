import type Config from "./types";
import Phaser from "phaser";

const stagingConfig: Config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: null,
  physics: {
    default: "arcade",
  },
};

export default stagingConfig;
