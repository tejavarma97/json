
import { PlaceType } from './placeType.model'
import { People } from './people.model'

export class Room{

    _id:string;
    name:string;
    placeType:PlaceType;
    pirSensor:string =  "0";
    soundSensor:string = "0";
    temperatureSensor:string = "0";
    inPeopleCount:number =0;
    outPeopleCount:number = 0;
    inPeople:Array<People>;
    maxPeopleAllowed:number;
}


