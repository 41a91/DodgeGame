
class Player extends Phaser.Physics.Arcade.Sprite {
  private speed: number;
  private rotationSpeed: number;
  private currentRotation: number;
  private currentDelta: number;
  private keyDown: {
    up: boolean;
    down: boolean;
    right: boolean;
    left: boolean;
  };
  private camera: Phaser.Cameras.Scene2D.Camera;

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.camera = scene.cameras.main as Phaser.Cameras.Scene2D.Camera;
    this.camera.startFollow(this);
    this.camera.setOrigin(0.5,0.75);

    this.speed = 200;
    this.rotationSpeed = 0.05; //Radians per ms
    this.currentRotation = 0; //Radians
    this.keyDown = { up: false, down: false, right: false, left: false };

    this.currentDelta = 0;
  }

  movementStart(event: KeyboardEvent) {
    switch (event.key) {
      case "w":
        if (!this.keyDown["up"] && !this.keyDown["down"]) {
          //this.setVelocityY(-this.speed);
          console.log("ran");
          this.setVelocity(Math.sin(-this.currentRotation) * this.speed, -Math.cos(-this.currentRotation) * this.speed);
        }
        //this.keyDown["up"] = true;
        break;
      case "s":
        if (!this.keyDown["down"] && !this.keyDown["up"]) {
          //this.setVelocityY(this.speed);
          this.setVelocity(-Math.sin(this.rotation) * this.speed, Math.cos(this.rotation) * this.speed);
        }
        this.keyDown["down"] = true;
        break;
      case "d":
        if (!this.keyDown["right"] && !this.keyDown["left"]) {
          //this.setVelocityX(this.speed);
          this.setVelocity(Math.cos(this.rotation) * this.speed, Math.sin(this.rotation) * this.speed);
        }
        this.keyDown["right"] = true;
        break;
      case "a":
        if (!this.keyDown["left"] && !this.keyDown["right"]) {
          //this.setVelocityX(-this.speed);
          this.setVelocity(-Math.cos(this.rotation) * this.speed, -Math.sin(this.rotation) * this.speed);
        }
        this.keyDown["left"] = true;
        break;
      case "e":
        this.currentRotation -= this.rotationSpeed;
        this.camera.setRotation(this.currentRotation);
        //this.rotation += this.rotationSpeed;
        this.setRotation(-this.currentRotation);
        break;
      case "q":
        this.currentRotation += this.rotationSpeed;
        this.camera.setRotation(this.currentRotation);
        //this.rotation += this.rotationSpeed;
        this.setRotation(-this.currentRotation);
        break;
    }
  }

  movementEnd(event: KeyboardEvent) {
    switch (event.key) {
      case "w":
        if (this.keyDown["up"]) {
          //this.setVelocityY(0);
          this.setVelocity(0,0);
          this.keyDown["up"] = false;
          if (this.keyDown["down"]) {
            //this.setVelocityY(this.speed);
            console.log(this.currentRotation);
            this.setVelocity(Math.sin(-this.currentRotation) * this.speed, -Math.cos(-this.currentRotation) * this.speed);
          }
        }
        break;
      case "s":
        if (this.keyDown["down"]) {
          //this.setVelocityY(0);
          this.setVelocity(0,0);
          this.keyDown["down"] = false;
          if (this.keyDown["up"]) {
            //this.setVelocityY(-this.speed);
            this.setVelocity(-Math.sin(this.rotation) * this.speed, Math.cos(this.rotation) * this.speed);
          }
        }
        break;
      case "d":
        if (this.keyDown["right"]) {
          //this.setVelocityX(0);
          this.setVelocity(0,0);
          this.keyDown["right"] = false;
          if (this.keyDown["left"]) {
            //this.setVelocityX(-this.speed);
            this.setVelocity(Math.cos(this.rotation) * this.speed, Math.sin(this.rotation) * this.speed);
          }
        }
        break;
      case "a":
        if (this.keyDown["left"]) {
          //this.setVelocityX(0);
          this.setVelocity(0,0);
          this.keyDown["left"] = false;
          if (this.keyDown["right"]) {
            //this.setVelocityX(this.speed);
            this.setVelocity(-Math.cos(this.rotation) * this.speed, -Math.sin(this.rotation) * this.speed);
          }
        }
        break;
    }
  }

  update(delta: number) {
    this.currentDelta = delta;
  }
}

export default Player;
