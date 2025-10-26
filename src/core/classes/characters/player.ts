class Player extends Phaser.Physics.Arcade.Sprite {
  private speed: number;
  private keyDown: {
    up: boolean;
    down: boolean;
    right: boolean;
    left: boolean;
  };

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.speed = 200;
    this.keyDown = { up: false, down: false, right: false, left: false };
  }

  movementStart(event: KeyboardEvent) {
    switch (event.key) {
      case "w":
        if (!this.keyDown["up"] && !this.keyDown["down"]) {
          this.setVelocityY(-this.speed);
        }
        this.keyDown["up"] = true;
        break;
      case "s":
        if (!this.keyDown["down"] && !this.keyDown["up"]) {
          this.setVelocityY(this.speed);
        }
        this.keyDown["down"] = true;
        break;
      case "d":
        if (!this.keyDown["right"] && !this.keyDown["left"]) {
          this.setVelocityX(this.speed);
        }
        this.keyDown["right"] = true;
        break;
      case "a":
        if (!this.keyDown["left"] && !this.keyDown["right"]) {
          this.setVelocityX(-this.speed);
        }
        this.keyDown["left"] = true;
        break;
    }
  }

  movementEnd(event: KeyboardEvent) {
    switch (event.key) {
      case "w":
        if (this.keyDown["up"]) {
          this.setVelocityY(0);
          this.keyDown["up"] = false;
          if (this.keyDown["down"]) {
            this.setVelocityY(this.speed);
          }
        }
        break;
      case "s":
        if (this.keyDown["down"]) {
          this.setVelocityY(0);
          this.keyDown["down"] = false;
          if (this.keyDown["up"]) {
            this.setVelocityY(-this.speed);
          }
        }
        break;
      case "d":
        if (this.keyDown["right"]) {
          this.setVelocityX(0);
          this.keyDown["right"] = false;
          if (this.keyDown["left"]) {
            this.setVelocityX(-this.speed);
          }
        }
        break;
      case "a":
        if (this.keyDown["left"]) {
          this.setVelocityX(0);
          this.keyDown["left"] = false;
          if (this.keyDown["right"]) {
            this.setVelocityX(this.speed);
          }
        }
        break;
    }
  }
}

export default Player;
