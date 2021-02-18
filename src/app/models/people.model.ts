

export class People{

    _id:string;
    firstName:string;
    lastName:string;
    peopleType:PeopleType;
    profilePicture: string ="https://antarsmarthomes-userfiles-mobilehub-681436504.s3.amazonaws.com/public/ic_placeholder.jpg";
    pirSensor:string =  "0";
    email:string;
    soundSensor:string = "0";
    temperatureSensor:string = "0";
    inPeopleCount:number =0;
    outPeopleCount:number = 0;
    role:Role;
    company:Company;
  
}

class Role{
    _id:string;
    name:string;
    role_id:string;
}

class Company{
    name: string;
    company_id: string;
}

class PeopleType{
    name:string;
    peopleType_id:string;
}