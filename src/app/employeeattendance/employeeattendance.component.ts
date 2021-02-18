// import { Component, OnInit } from '@angular/core';
// import { DatePipe } from '@angular/common';
// import { AnalyticService } from '../analytic.service';

// declare const $:any;
// @Component({
//   selector: 'app-employeeattendance',
//   templateUrl: './employeeattendance.component.html',
//   styleUrls: ['./employeeattendance.component.css']
// })
// export class EmployeeattendanceComponent implements OnInit {
//   datesarraybool:boolean[]=[];
//   showLodaingIndicator = false;
//   keyss:any[];
//   mon:any;
//   dates:any=[];
//   presentdate: Date;
//   year: any;
//   monthname: any=['January','February','March','April','May','June','July','August','September','October','November','December'];
//   yearname: any=[2016,2017,2018,2019,2020,2021];
//   months=[31,28,31,30,31,30,31,31,30,31,30,31,29];
//   selectyear:any;

//   constructor(private datepipe:DatePipe, private _AnalyticService: AnalyticService) { }

//   ngOnInit() {
//     this.showLodaingIndicator = true;
//     // console.log("dd"+this.showLodaingIndicator);
//     this.datesarraybool=[];
//     //this.getdata('test');
//     this.presentdate=new Date();
//     // console.log(this.presentdate)
//     this.year= this.presentdate.getFullYear();
//     this.selectyear=this.year;
//     console.log(this.year)
//     this.mon = this.monthname[this.presentdate.getUTCMonth()];

//     this.getattend(this.presentdate.getFullYear()+'-'+(this.presentdate.getMonth()+1)+'-'+'01',this.datepipe.transform (this.presentdate,'yyyy-MM-dd'));  //presentdate,
    
//     var d=document.getElementById('months')

//     //$('#months').val(this.mon).attr('selected',true)
//     var i=this.monthname.indexOf(this.mon)
    
//     this.months[i]=this.presentdate.getUTCDate();

//     this.months[i]
    
//     for(var j=1;j<=this.months[i];j++){
//       this.dates.push(j)
//       this.datesarraybool.push(false)
//     }
//   }
//  changeMonth(e) {
//     this.showLodaingIndicator = true;
//     var i=this.monthname.indexOf(e.target.value)
//     if(i==1){
//       if(this.year%4==0){  i=12  }
//     }
//     this.dates=[];
//     this.keyss=[];
//     //console.log("dd "+this.months[i]);
//     this.datesarraybool=[];

    
//     for(var j=1;j<=this.months[i];j++){
//       this.dates.push(j)
//       this.datesarraybool.push(false)
//     }
//     if(this.presentdate.getMonth()==i){ //same month
//     this.getattend(this.presentdate.getFullYear()+'-'+(this.presentdate.getMonth()+1)+'-'+'01',this.datepipe.transform (this.presentdate,'yyyy-MM-dd'));  //presentdate,
//     }
//     //console.log(e.target.value)
//     else
//     {
//       this.getattend(this.presentdate.getUTCFullYear()+'-'+(i+1)+'-'+'01',this.presentdate.getUTCFullYear()+'-'+(i+1)+'-'+this.months[i])
//     }
//     // this.showLodaingIndicator = false;
//   }
//   changeYear(e){
//     this.showLodaingIndicator =true;
//     var i=this.yearname.indexOf(e.target.value)
//     this.selectyear = this.yearname[i] 
    
//   }
//   getattend(from,to){
//      console.log(from,to)
//    this._AnalyticService.getattendenceAPI(from,to).subscribe(val=>{
//      let x=val['Result'];
//      let keys = [];
//      console.log(val)
//    for(let j=0;j<x.length;j++){
//      let name=x[j]._id.name;
//     //  console.log(mac);
//      if(name==undefined){
//        continue;
//      }
//     let datesarrayboolClone=[];
//     Object.assign(datesarrayboolClone, this.datesarraybool);
//    for(let i=0;i<x[j].result.length;i++){
    
//     datesarrayboolClone[x[j].result[i].Day-1] =true;
//     //  console.log("Name"+x[j]._id.name)
//     //  console.log("Presented Day:"+ (x[j].result[i].Day-1).toString())
//     //  console.log("Presented Day:"+datesarrayboolClone);
//    }
   
//    keys.push({key: name, value:datesarrayboolClone});
   
//  }

//  console.log(keys)
//  this.keyss=keys;
//  //console.log(this.keyss)
//  this.showLodaingIndicator = false;
//    })
//  }

// }
