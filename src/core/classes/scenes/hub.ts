import "phaser";
import config from '../../config';

class HubScene extends Phaser.Scene {
    #pixelHeight: number;
    #pixelWidth: number;
    constructor(){
        super({key: 'Hub'});
        this.#pixelHeight = 64;
        this.#pixelWidth = 64;
    }

    preload() {
        this.load.image('hub1','/hub/Hub-01-scaled.png');
    }

    create() {
        for(let i = 0; i < config.width/this.#pixelWidth; i++){
            for(let j = 0; j < config.height/this.#pixelHeight; j++){
                this.add.image(this.#pixelWidth * i + this.#pixelWidth/2, this.#pixelHeight * j + this.#pixelHeight/2, 'hub1');
            }
        }
    }

    update(time: number, delta: number) {
        console.log(`Time: ${time}, delta: ${delta}`);
    }
}

export default HubScene