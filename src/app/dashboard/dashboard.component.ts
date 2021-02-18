// import { Component, OnInit, AfterContentInit } from '@angular/core';
// import {IMyDpOptions} from 'mydatepicker';
// import { AppService } from '../app.service';
// import { AnalyticService } from '../analytic.service';
// import { Router, ActivatedRoute, Event, NavigationStart, NavigationEnd } from '@angular/router';
// import { Place } from 'src/app/models/place.model'
// import { Room } from 'src/app/models/room.model'
// import * as moment from 'moment';
// const inviteObj = {
//   'people_id':"",
//   'firstName':"",
//   'lastName':"",
//   'profilePicture':"",
//   'email':"",
//   'fullName':""
// }
// const addMeetingObj = {
//   'name':'',
//   '_id':'',
//   'startDateTime':'',
//   'endDateTime':'',
//   'inviteList': [],
//   'organizer':{
//           people_id:"",
//           firstName:"",
//           lastName : "",
//           profilePicture:"",
//           email:"",
//           fullName: ""
//   }
// };
// declare const $:any;

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit,AfterContentInit {
 
//   places:Array<Place>=[];
//   rooms:Array<Room>=[];

//   bookMeetingIndex_temp:number =-1;
 
//   addMeeting = addMeetingObj;
//   keyword = 'name';
//   results = [];
//   roomtemp:any;
//   rand:any;
//   idd:any;
//   placeconfrence =[];
//   placeconfrencefiltered =[];
//   members:any=0;
//   isCheckedtv : boolean =false;isCheckedac : boolean =false;isCheckedprojector : boolean =false;isCheckedwhiteboard : boolean =false;
  
//   selectEvent(item) {


//    for(let i=0;i< this.addMeeting.inviteList.length;i++)
//    {

//      if(this.addMeeting.inviteList[i].people_id == item.obj._id)
//      {
//       return
//      }
//    }
     
//    let invitee = inviteObj;
   
//    invitee.people_id = item.obj._id;
//    invitee.firstName = item.obj.firstName;
//    invitee.lastName = item.obj.lastName;
//    invitee.email = item.obj.email;
//    invitee.profilePicture = item.obj.profilePicture;
//    invitee.fullName = item.name;
//    this.addMeeting.inviteList.push(invitee);
   
//   }
 
//   onChangeSearch(val: string) {
       
//     this.analyticService.findUser(val).subscribe(data=>{
   
//       this.results=[];
//       for(let i=0;i<data.Result.length;i++)
//       {
//         let result = data.Result[i];
//         this.results.push({
//           id:result._id,
//           name :result.firstName+' '+result.lastName,
//           obj : result
//         })
//       }
//       console.log(this.results)
      
//     })
//   }
  
//   onFocused(e){
//     // do something when input is focused
//     console.log("onFocused")
//    console.log(e)
//   }

//   //public allProjects:boolean = true;
//   //public rows = [];
//   constructor(private analyticService:AnalyticService,private router: Router,private projectService:AppService) {

//    analyticService.getAllPlaces().subscribe(data=>{
//      if(data.Success)
//      { 
//       this.places = data.Result || [];
//      // console.log("places"+JSON.stringify(this.places))
//       this.placeconfrence=[];
//       this.placeconfrencefiltered=[];

//       for( var i=0;i<this.places.length;i++){
//         if(this.places[i].placeType.name=="Conference" ){
//           this.placeconfrence.push(this.places[i]);
//         }
        
//       }
//       this.placeconfrencefiltered = this.placeconfrence;

//      }
     
//    })
//   }
 
//   ngAfterContentInit() {
    
//   }

//   ngOnInit() {
//     this.rand=this.getRandomInt();
//     if(this.rand==1 || this.rand==0){
//       this.roomtemp="Confrence Room 1"
//       this.rand=0;
//       this.idd="5f098703b86e513634e5ebee"
//     }else if(this.rand==2){
//         this.rand=1;
//       this.roomtemp="Confrence Room 2"
//       this.idd="5f09a03e661f194712a33510"
//     }else if(this.rand==3){
//       this.rand=2;
//     this.roomtemp="Confrence Room 3"
//     this.idd="5f1279724743921ab4c25697"
//   }else if(this.rand==4){
//     this.rand=3;
//   this.roomtemp="Confrence Room 4"
//   this.idd="5f127ec74743921ab4c25698"
// }else if(this.rand==5){
//   this.rand=4;
// this.roomtemp="Confrence Room 5"
// this.idd="5f128125ddb55d1950ab2e24"
// }
      
//     console.log("room "+this.roomtemp);

//   this.analyticService.socketListener().subscribe(data=>{
         
//         // data = JSON.parse(data)
//          let notificationType = data.notificationType;

//          if(notificationType == 'place.multisensor')
//          {
//            let data2 = data.data;
//            for(let i=0;i<this.places.length;i++)
//            {
              
//               if(data2._id == this.places[i]._id)
//               {

//               console.log('Before :'+this.places[i].multiSensorApplianceList[0].noise)
//               this.places[i].multiSensorApplianceList = data2.multiSensorApplianceList;

//               for(let j=0;j<this.places[i].multiSensorApplianceList.length;j++)
//               {
//                 this.places[i].temperatureAvg= this.places[i].multiSensorApplianceList[j].temperature;
//                 this.places[i].humidityAvg = this.places[i].multiSensorApplianceList[j].humidity;
//                 this.places[i].airQualityAvg = this.places[i].multiSensorApplianceList[j].airQuality;
//                 this.places[i].noiseAvg = this.places[i].multiSensorApplianceList[j].noise;
//                 this.places[i].pir  = this.places[i].multiSensorApplianceList[j].pir.toString();
//               }
              
//               }
//            }

//          }
//          else if(notificationType == 'place.parking')
//          {
//           let data2 = data.data;
//           for(let i=0;i<this.places.length;i++)
//           {
             
//              if(data2._id == this.places[i]._id)
//              {
//               this.places[i].parking = data2.parking;
//              }
//           }
//          }

        
//    })
//   }

//   loadBookingModel(index:number)
//   {
// console.log("tv "+this.isCheckedtv);

//     this.addMeeting.organizer.people_id =  this.analyticService.userData._id;
//     this.addMeeting.organizer.firstName =  this.analyticService.userData.firstName;
//     this.addMeeting.organizer.lastName =  this.analyticService.userData.lastName;
//     this.addMeeting.organizer.email = this.analyticService.userData.email;
//     this.addMeeting.organizer.fullName = (this.analyticService.userData.firstName||'') + ' '+(this.analyticService.userData.lastName||'')
//     this.addMeeting.organizer.profilePicture = this.analyticService.userData.profilePicture || "https://antarsmarthomes-userfiles-mobilehub-681436504.s3.amazonaws.com/public/ic_placeholder.jpg"
    
//     this.addMeeting = addMeetingObj;
//     this.results = [];
//     console.log(this.results)
//     console.log(this.addMeeting)
//   }

//   bookMeeting(data)
//   {

//     this.addMeeting.name=data.name;
//     this.addMeeting.startDateTime=moment(data.startTime).format('YYYY-MM-DD HH:mm');
//     this.addMeeting.endDateTime=moment(data.endTime).format('YYYY-MM-DD HH:mm');
//     this.addMeeting._id=this.idd;
//     console.log("dddd "+JSON.stringify(this.addMeeting))
//     this.analyticService.addMeeting(this.addMeeting).subscribe(data=>{
//       if(data.Success)
//       { 
//        this.places = data.Result || [];
      
//        console.log(this.places)
       
//       }
      
//     })
//     $('#book_a_meeting').modal('hide');

//     console.log(data.name);
//    // console.log(startTime);

//   }
//   getRandomInt() {
//     return Math.floor(Math.random() * Math.floor(5));
//   }

//   removeTeamMember(people_id)
//   {
//     console.log(people_id)

//    for(let i=0;i< this.addMeeting.inviteList.length;i++)
//    {
//      if(this.addMeeting.inviteList[i].people_id == people_id)
//      {
//       this.addMeeting.inviteList.splice(i, 1)
//      }
//    }
//   }

//   filter(){

// this.placeconfrencefiltered=[];

// //console.log(" filter ischeck "+this.isChecked5);


// for( var i=0;i<this.placeconfrence.length;i++){

//   if(this.isCheckedtv){
  
//     if(this.placeconfrence[i].features.tv){
//     }else{
//       continue;
//     }

//   }
//   if(this.isCheckedac){
  
//     if(this.placeconfrence[i].features.ac){
//     }else{
//       continue;
//     }
  
//   }
//   if(this.isCheckedprojector){
  
//     if(this.placeconfrence[i].features.projector){
//     }else{
//       continue;
//     }
  
//   }
  
//   if(this.isCheckedwhiteboard){
//     if(this.placeconfrence[i].features.whiteBoard){
//     }else{
//       continue;
//     }
  
//     }
//     if(this.members!=0){
//         if(this.placeconfrence[i].maxPeopleAllowed>=this.members){

//         }else{
//           continue;
//         }
//     }

//     this.placeconfrencefiltered.push(this.placeconfrence[i]);

// }

//   }

//   radioClick(mem){
   
//     this.members=mem;
//     this.filter();

//   }

// }
