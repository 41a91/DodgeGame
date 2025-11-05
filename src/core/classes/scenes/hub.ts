import "phaser";
import config from "../../config";
import Player from "../characters/player.js";

class HubScene extends Phaser.Scene {
  #pixelHeight: number;
  #pixelWidth: number;
  constructor() {
    super({ key: "Hub" });
    this.#pixelHeight = 64;
    this.#pixelWidth = 64;
  }

  preload() {
    this.load.image("hub1", "/hub/Hub-01-scaled.png");
    this.load.image("blue", "/blue.png");
  }

  create() {
    for (let i = 0; i < config.width / this.#pixelWidth; i++) {
      for (let j = 0; j < config.height / this.#pixelHeight; j++) {
        this.add.image(
          this.#pixelWidth * i + this.#pixelWidth / 2,
          this.#pixelHeight * j + this.#pixelHeight / 2,
          "hub1",
        );
      }
    }

    const player1 = new Player(this, 50, 50, "blue");

    this.input.keyboard?.on("keydown", (event: KeyboardEvent) => {
      player1.movementStart(event);
    });

    this.input.keyboard?.on("keyup", (event: KeyboardEvent) => {
      player1.movementEnd(event);
    });
  }

  update(time: number, delta: number) {
    
  }
}

export default HubScene;
