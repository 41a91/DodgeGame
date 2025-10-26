class Player extends Phaser.Physics.Arcade.Sprite {
  private speed: number;

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.speed = 50;
  }

  movement(event: KeyboardEvent) {
    this.setVelocity(0, 0);
    switch (event.key) {
      case "w":
        console.log("Move Up");
        this.setVelocityY(-this.speed);
        break;
      case "s":
        console.log("Move Down");
        this.setVelocityY(this.speed);
        break;
      case "d":
        console.log("Move Right");
        this.setVelocityX(this.speed);
        break;
      case "a":
        console.log("Move Left");
        this.setVelocityX(-this.speed);
        break;
    }
  }
}

export default Player;
