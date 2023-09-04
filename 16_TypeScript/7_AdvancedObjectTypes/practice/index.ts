import getObstacleEvents from './computer-vision'

interface AutonomousCar {
    isRunning?: boolean;
    respond: (events: Events) => void;
    
}

interface AutonomousCarProps {
    isRunning: boolean;
    steeringControl: Steering;
}

interface Events {
    [text: string]: boolean;
}

interface Control {
    execute: (command: string) => void;
}

interface Steering extends Control {
    turn: (direction: string) => void;
}


class SteeringControl implements Steering {
    execute(command: string){
        console.log(`Executing: ${command}`);
        
    }
    turn(direction: string){
       this.execute(`turn ${direction}`)
        
    }
}
class Car implements AutonomousCar {
    
    isRunning;
    steeringControl;

    constructor(props: AutonomousCarProps){
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }

    respond(events: Events){
        if(!this.isRunning){
            console.log('The car is off')
        } 
        Object.keys(events).forEach((eventKey) => {
            if(events.eventKey == false) return
            if('ObstacleLeft' == eventKey){
                this.steeringControl.turn('right')
            } else if ('ObstacleRight' == eventKey ){
                this.steeringControl.turn('left')
            }
        })
        
    }
}

const steering = new SteeringControl();
const autonomousCar = new Car({isRunning: true, steeringControl: steering})

// console.log(autonomousCar.isRunning);
autonomousCar.respond(getObstacleEvents());

