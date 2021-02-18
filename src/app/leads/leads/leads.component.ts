// import { Component, OnInit } from '@angular/core';
// import { AnalyticService } from '../../analytic.service';


// @Component({
//   selector: 'app-leads',
//   templateUrl: './leads.component.html',
//   styleUrls: ['./leads.component.css']
// })
// export class LeadsComponent implements OnInit {

//     isMaskWeared:boolean=true;
//     timer:any;

//     constructor(private analyticService:AnalyticService) { }

//   ngOnInit() {
//     this.analyticService.socketListener().subscribe(data=>{
         
//         // data = JSON.parse(data)
//          let notificationType = data.notificationType;

        
//          if(notificationType == 'onMaskDetects')
//          {
//           let data2 = data.data;
//           console.log(data2)
//          if(data2.isMaskWeared == 1)
//          {
//           clearTimeout(this.timer)
//           this.timer=  setTimeout(()=>{
//             this.isMaskWeared = true
//           },5000)
//           this.isMaskWeared = false
//          }
//          }

        
//    })
//   }

  

// }
