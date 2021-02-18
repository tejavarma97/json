// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AnalyticService } from 'src/app/analytic.service';

// @Component({
//   selector: 'app-login-page',
//   templateUrl: './login-page.component.html',
//   styleUrls: ['./login-page.component.css']
// })
// export class LoginPageComponent implements OnInit {
//   logindetails:any;
//   logincredentials:FormGroup;
//   loginsavebutton:any;

//   constructor(private analytics:AnalyticService,private fb: FormBuilder,private router:Router) { }

//   ngOnInit() {
//     this.bindControls();
//   }

//   bindControls() {
//     this.logindetails = this.fb.group({
//       email:[''],
//       password:['']     
//     })
//   }

//   loginbutton(){
//   this.loginsavebutton = this.logindetails.value
//   console.log(this.loginsavebutton)
//   this.analytics.getLoginDetailsAPI(this.loginsavebutton).subscribe(res=>{
//        console.log(res)
//        if(res.Success){
//          localStorage.setItem('token',res.token)
//         this.router.navigate(['/dashboard'])

//        }
//     })
//   }

// }
