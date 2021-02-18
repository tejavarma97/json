// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { id } from '@swimlane/ngx-datatable/release/utils';
// import { AnalyticService } from '../analytic.service';
// import {WebcamImage} from 'ngx-webcam';
// import {Subject, Observable} from 'rxjs';
// declare let $:any;

// @Component({
//   selector: 'app-addemployee',
//   templateUrl: './addemployee.component.html',
//   styleUrls: ['./addemployee.component.css']
// })

// export class AddemployeeComponent implements OnInit {
//   EmployeeForm: FormGroup;
//   imagepath: any;
//   addemployeedata:any;
//   disablesavebutton:any;
//   images: any = [];
//   MultipleImagesTobeSaved: any = [];
//   profilePicture: File = null;
//   encryptedimages:any=[];
//   photoResponse:any=[];
//   RoomAccess:any=[];
//   dropdownSettings:any;
//   webcamshowhide:any=false;
// // public myInput = document.getElementById('myFileInput');
   
//   photosArray:any=[];
//   constructor(private fb: FormBuilder, private _AnalyticService: AnalyticService,private router:Router) {
//     this.imagepath = this._AnalyticService.GetdefaultImage();
//   }

//   ngOnInit() {
//     this.bindControls();
//    //this.disablesavebutton=true;
//     this.getRoomAccessData(); 
//     this.dropdownSettings={
//       idField:'macAddress',
//       textField:'name'
//     }
//     // this.myInput.addEventListener('change', this.sendPic, false);
//   }


//  // latest snapshot
//  public webcamImage: WebcamImage = null;
//  // webcam snapshot trigger
//  private trigger: Subject<void> = new Subject<void>();
//  triggerSnapshot(): void {
//   this.trigger.next();
//  }
//  handleImage(webcamImage: WebcamImage): void {
//   //console.log( webcamImage);
//   this.webcamImage = webcamImage;
//   console.log(this.webcamImage);
//   this.MultipleImagesTobeSaved.push(this.webcamImage);
//   //console.log("photo" + JSON.stringify(this.photosArray))
//  }

//  public get triggerObservable(): Observable<void> {
//   return this.trigger.asObservable();
//  }  

//  click_Photo(){
//   $('#snapshot').modal("show");
//    this.webcamshowhide=true;
  
//  }
//  closeModal(){
//   this.webcamshowhide=false;
//   $('#snapshot').modal("hide");
//  }

//   getRoomAccessData(){
//    this._AnalyticService.getRoomAccessDetailsAPI().subscribe(res=>{
//      console.log(res)
//      this.RoomAccess=res['Result'];
//     //  for(var i=0;i<data.length;i++){
//     //   this.RoomAccess.push({id:i+1,text:data[i].name})
//     // }
     
     
//    })
//   }
//   bindControls() {
//     this.EmployeeForm = this.fb.group({
//       firstName: [''],
//       lastName: [''],
//       empId: [''],
//       email: [''],
//       multiplepics: [],
//       access:[],
//       password:[],
//       //phoneNumber: [''],
//       // address: [''],
//       // department: [''],
//       // jobrole: [''],
//       // bloodgroup: [''],
//       // dob: [''],
//      // profilepic: [''],
//     })
//   }

//   showPreview(event) {

//     var reader = new FileReader();

//     reader.readAsDataURL(event.target.files[0]); // read file as data url

//     reader.onload = (event) => { // called once readAsDataURL is completed
//       this.imagepath = event.target.result;
//     }
//     // this.EmployeeForm.controls.profilepic.setValue(event.target.files[0].name)
//     console.log(event.target.files[0]);
//     this.profilePicture = <File>event.target.files[0];



//   }

//   showMultiple(files: FileList,filename,even) {
//     let multipleImages = [];
//     //console.log(files)
//   //  var filename = document.getElementById('file-id').files[0].name
//     if (files) {
//       var filesAmount = files.length;
//       for (let i = 0; i < filesAmount; i++) {
//         files[i]["filename"]=filename
//         console.log(files[i])
//         this.MultipleImagesTobeSaved.push(files[i]);
//         multipleImages.push(files[i].name)
//         var reader = new FileReader();
//         let imagedata = {};
//         imagedata['name'] = files[i].name;
//         reader.onload = (event: any) => {
//         //  console.log(event)
//           imagedata['url'] = event.target.result;
//           this.images.push(imagedata);
         
//         }

//         reader.readAsDataURL(files[i]);
      
        
//       }
//       console.log(multipleImages)
//    //   this.EmployeeForm.controls.multiplepics.setValue(multipleImages);
//     }
//   }

//   saveEmployee() {
  
//   //   this.EmployeeForm.controls.multiplepics.setValue(this.encryptedimages);
//   //   this.addemployeedata = this.EmployeeForm.value
//   //   console.log(this.addemployeedata)
//   // this._AnalyticService.addemployeeAPI(this.addemployeedata).subscribe(res=>{
//   //   console.log(res)
//   //   if(res.Success){
//   //     confirm("Saved Successfully");
//   //     this.router.navigate(['/dashboard'])
//   //     this.bindControls()
//   //     this.images=[]
//   //     this.MultipleImagesTobeSaved=[];
//   //     $('#multipleselect').val("");
//   //   }
//   // })
   

//   }

//   removeSelectedImage(imagedata) {
//     if (confirm("Do you want to remove image ?")) {
//       for (let i = 0; i < this.images.length; i++) {
//         if (this.images[i].name == imagedata.name) {
//           this.images.splice(i, 1);
//         }
//         if(this.MultipleImagesTobeSaved[i].name == imagedata.name){
//           this.MultipleImagesTobeSaved.splice(i,1);
//         }
//       }
//     }
//   }

//   async uploadImages(){
   
//     $('#imageuploading').modal("show");
//     console.log(this.MultipleImagesTobeSaved)
//      for(let i=0;i<this.MultipleImagesTobeSaved.length;i++){
//        console.log(this.MultipleImagesTobeSaved[i])

//       let res= await this._AnalyticService.uploadImagesAPI_test(this.MultipleImagesTobeSaved[i]).toPromise()
 
//          console.log(res);
//          if(res['Success']){
//            let encrypteddata={};
//            encrypteddata['name']=this.MultipleImagesTobeSaved[i].name;
//            encrypteddata['photolocation']=res['Result'].photoLocation;
//            encrypteddata['photocode']=res['Result'].photocode;
//            this.encryptedimages.push(encrypteddata);
//            if(i==this.MultipleImagesTobeSaved.length-1){
//             $('#imageuploading').modal("hide");
//           }
//          }

      
       
//      }

//      console.log("All photo codes are recieved")
     
//      this.EmployeeForm.controls.multiplepics.setValue(this.encryptedimages);
//      this.addemployeedata = this.EmployeeForm.value
//      console.log(this.addemployeedata)
//    this._AnalyticService.addemployeeAPI(this.addemployeedata).subscribe(res=>{
//      console.log(res)
//      if(res.Success){
//       //  confirm("Saved Successfully");
//        this.router.navigate(['/employeelist'])
//        this.bindControls()
//        this.images=[]
//        this.MultipleImagesTobeSaved=[];
//        $('#multipleselect').val("");
//      }
//    })

//     }
  
//   //   sendPic() {
//   //     console.log?(this.myInput)
//   //    // let file = this.myInput.['files'][0];
  
//   //     // Send file here either by adding it to a `FormData` object 
//   //     // and sending that via XHR, or by simply passing the file into 
//   //     // the `send` method of an XHR instance.
     
//   // }
  
 
// }
