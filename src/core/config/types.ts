import { type Scene } from "phaser";

export default interface Config {
  type: number;
  width: number;
  height: number;
  scene: Scene | null;
  physics: {
    default: string;
  };
}
