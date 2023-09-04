"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = __importDefault(require("./computer-vision"));
class SteeringControl {
    execute(command) {
        console.log(`Executing: ${command}`);
    }
    turn(direction) {
        this.execute(`turn ${direction}`);
    }
}
class Car {
    isRunning;
    steeringControl;
    constructor(props) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    respond(events) {
        if (!this.isRunning) {
            console.log('The car is off');
        }
        Object.keys(events).forEach((eventKey) => {
            if (events.eventKey == false)
                return;
            if ('ObstacleLeft' == eventKey) {
                this.steeringControl.turn('right');
            }
            else if ('ObstacleRight' == eventKey) {
                this.steeringControl.turn('left');
            }
        });
    }
}
const steering = new SteeringControl();
const autonomousCar = new Car({ isRunning: true, steeringControl: steering });
// console.log(autonomousCar.isRunning);
autonomousCar.respond((0, computer_vision_1.default)());
