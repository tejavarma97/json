// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { AnalyticService } from '../analytic.service';

// @Component({
//   selector: 'app-devicelog',
//   templateUrl: './devicelog.component.html',
//   styleUrls: ['./devicelog.component.css']
// })
// export class DevicelogComponent implements OnInit {
//   RoomName:any=[];
//   devicelogData:FormGroup;
//   selectedData:any;
//   getTableData:any=[];
//   constructor(private analytics:AnalyticService,private fb: FormBuilder,) { }

//   ngOnInit() {
//     this.bindControls();
//     this.getdevicelogData();
//     this.selectedData = {}
//     this.selectedData.limit = parseInt(this.devicelogData.controls.limit.value);
//     this.selectedData.macAddress = this.devicelogData.controls.macAddress.value;
//     this.getData(this.selectedData)
//   }

//   getdevicelogData(){
//     this.analytics.getRoomAccessDetailsAPI().subscribe(res=>{
//       console.log(res)
//       this.RoomName=res['Result'];
    
//     })
//    }

//    bindControls() {
//     this.devicelogData = this.fb.group({
//       limit:[10],
//       macAddress:[''],      
//     })
//   }

//   sendData(){
//     this.selectedData = {}
//     this.selectedData.limit = parseInt(this.devicelogData.controls.limit.value);
//     this.selectedData.macAddress = this.devicelogData.controls.macAddress.value;
//     console.log(this.selectedData);
//     this.getData(this.selectedData)
   
//   }

//   getData(data){
//     this.analytics.getdevicelogAPI(data).subscribe(res=>{
//       console.log(res)
//       this.getTableData = res['Result']
//       console.log(this.getTableData)
//       this.getTableData.filter(data=>{
//         data.time=new Date(data.time);
//       })
//     })
//   }
// }
