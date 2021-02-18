import { PlaceType } from './placeType.model'
import { People } from './people.model'

export class Place{

    _id:string;
    name:string;
    placeType:PlaceType;
    inPeopleCount:number =0;
    outPeopleCount:number = 0;
    inPeople:Array<People>;
    maxPeopleAllowed:number;
    multiSensorApplianceList:Array<MultiSensorAppliance>;
    
    temperatureAvg:number =0;
    humidityAvg:number =0;
    airQualityAvg:number =0;
    noiseAvg:number =0;
    pir:string = '0';

    parking:Parking;


}

class MultiSensorAppliance{
    deviceId:string ;
    temperature:number ;
    humidity:number ;
    airQuality:number ;
    noise:number ;
    pir:string;

}

class Parking{
        maxCarsAllowed:number;
        maxBikesAllowed:number;
        carCount:number;
        bikeCount:number;
        floorNumber:number;
        parkingCameraList:Array<ParkingCameraList>
     
}

class ParkingCameraList
{
    deviceId   : string;
    cameraType : string;
    carCount:number;
    bikeCount:number;
}