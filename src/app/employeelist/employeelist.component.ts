// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { AnalyticService } from '../analytic.service';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { NgxSpinnerService } from "ngx-spinner";
// import { Router } from '@angular/router';
// declare let $:any;

// @Component({
//   selector: 'app-employeelist',
//   templateUrl: './employeelist.component.html',
//   styleUrls: ['./employeelist.component.css']
// })
// export class EmployeelistComponent implements OnInit {
// employeeList:any=[];
// EmployeeForm: FormGroup;
// RoomAccess:any=[];
// dropdownSettings:any;
// addemployeedata:any;
// images: any = [];
// imagepath: any;
// loadingMsg:string= "Please wait!";
// MultipleImagesTobeSaved: any = [];
// profilePicture: File = null;
// encryptedimages:any=[];
// photos:any=[];
//   constructor(private fb: FormBuilder,private analytics:AnalyticService,private router:Router,private spinner: NgxSpinnerService) { 
//     this.imagepath = this.analytics.GetdefaultImage();
//   }

//   ngOnInit() {
//     this.bindControls();
//     this.getEmployeelist();
//     this.getRoomAccessData(); 
//     this.dropdownSettings={
//       idField:'macAddress',
//       textField:'name'
//     }
//   }
//   bindControls() {
//     this.EmployeeForm = this.fb.group({
//       firstName: [''],
//       lastName: [''],
//       empId: [''],
//       email: [''],
//       multiplepics: [],
//       access:[],
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
//     console.log(files)
//   //  var filename = document.getElementById('file-id').files[0].name
//     if (files) {
//       var filesAmount = files.length;
//       for (let i = 0; i < filesAmount; i++) {
//         files[i]["filename"]=filename
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
//       //event.srcElement.value = null;
//       console.log(multipleImages)
//    //   this.EmployeeForm.controls.multiplepics.setValue(multipleImages);
//     }
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
//     this.loadingMsg = "Please wait, your Image is uploading";
//     this.spinner.show();
//     // debugger
//     console.log(this.MultipleImagesTobeSaved)
//     if(this.MultipleImagesTobeSaved.length==0){
//       this.spinner.hide();
//       // return;
//     }
//     this.encryptedimages=[];
//      for(let i=0;i<this.MultipleImagesTobeSaved.length;i++){
//        console.log(this.MultipleImagesTobeSaved[i])
//        let res= await this.analytics.uploadImagesAPI(this.MultipleImagesTobeSaved[i]).toPromise()
//          console.log(res);
//          if(res['Success']){
//            let encrypteddata={};
//            encrypteddata['name']=this.MultipleImagesTobeSaved[i].name;
//            encrypteddata['photolocation']=res['Result'].photoLocation;
//            encrypteddata['photocode']=res['Result'].photocode;
//            this.encryptedimages.push(encrypteddata);
//            if(i==this.MultipleImagesTobeSaved.length-1){
//             this.spinner.hide();
//           }
//          }
//      }
   
//      console.log("All photo codes are recieved")

//      let imagestobesaved=[];
//      imagestobesaved=this.photos;
     
//      for(let i=0;i<this.encryptedimages.length;i++){
//        imagestobesaved.push(this.encryptedimages[i])
//      }
    
//       this.EmployeeForm.controls.multiplepics.setValue(imagestobesaved);
//       this.addemployeedata = this.EmployeeForm.value
//       console.log(this.addemployeedata)
//     this.analytics.editemployeeAPI(this.addemployeedata).subscribe(res=>{
//       console.log(JSON.stringify(res))
//       if(res.Success){
//         this.MultipleImagesTobeSaved=[];
        
//       if(confirm("Saved Successfully")){
//         $("#editemployee").modal("hide")
//         this.getEmployeelist();
//       };
        
//         // this.bindControls();
//       }
//     })
//     }
     
//     updateEmployee() {
     
//     //  let imagestobesaved=[];
//     //  imagestobesaved=this.photos;
//     //  for(let i=0;i<this.encryptedimages.length;i++){
//     //    imagestobesaved.push(this.encryptedimages[i])
//     //  }
//     //   this.EmployeeForm.controls.multiplepics.setValue(imagestobesaved);
//     //   this.addemployeedata = this.EmployeeForm.value
//     //   console.log(this.addemployeedata)
//     // this.analytics.editemployeeAPI(this.addemployeedata).subscribe(res=>{
//     //   console.log(JSON.stringify(res))
//     //   if(res.Success){
//     //     this.getEmployeelist();
//     //   }
//     // })
     
  
//     }

//   deletefunction(data){
//     this.analytics.deleteEmployeeAPI(data.empId).subscribe(res=>{
//       console.log(res)
//       if(res.Success)
//       {
//         this.getEmployeelist()
//       }
//     })
//   }
//   syncFunction(){
    
//     this.analytics.syncFunctionAPI().subscribe(res=>{
//       console.log(res)
//     })
//   }

// getEmployeelist(){
//   this.analytics.getAllUserDetailsAPI().subscribe(res=>{
//     this.employeeList = res.Result;
//     console.log(this.employeeList)
//   })
// }

// getRoomAccessData(){
//   this.analytics.getRoomAccessDetailsAPI().subscribe(res=>{
//     console.log(res)
//     this.RoomAccess=res['Result'];
  
//   })
//  }
//  editemployeeFunction(data){
//     this.photos=[];
//    this.images=[];
//   //  this.EmployeeForm.reset()
//    $("#acceptimage").val("");
//    this.MultipleImagesTobeSaved=[];
//    //this.encryptedimages=[];
//   console.log(data)
//   this.EmployeeForm.controls.multiplepics.setValue([]);
//   this.EmployeeForm.controls.firstName.setValue(data.firstName);
//   this.EmployeeForm.controls.lastName.setValue(data.lastName);
//   this.EmployeeForm.controls.email.setValue(data.email);
//   this.EmployeeForm.controls.access.setValue(data.access);
//   this.EmployeeForm.controls.empId.setValue(data.empId);


//   this.pushPhotos(data)
//  }

//  removeUploadedImage(data){
//    let uploadedimagedata={};
//    if(confirm("Do you want to delete image ?")){
//    uploadedimagedata['empId']=this.EmployeeForm.controls.empId.value;
//    uploadedimagedata['id']=data._id;
//    this.analytics.deleteEmployeepicsAPI(uploadedimagedata).subscribe(res=>{
//      console.log(res);
//      this.pushPhotos(res.Result)
//     //  this.photos=;
//    })
//    }


//  }

//  pushPhotos(data){
//   this.photos=[];
//   data.photo.forEach(element => {
//     // element.photolocation = "http://13.232.144.40:3000/"
    
//     element["src"] = this.analytics.getBaseUrl()+"/" + element.photolocation
//     this.photos.push(element)
    
//     // this.EmployeeForm.controls.multiplepics.setValue(element.photolocation)
//   });
//  }

//  closeModal(){
//    this.getEmployeelist();
  
//  }
// }
