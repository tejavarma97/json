import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subscriber } from 'rxjs';
// import {AppModule,routes } from 'src/app/app.module'
// //import { async } from '@angular/core/testing';
// import { Router, ActivatedRoute, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router'

// import { retry } from 'rxjs-compat/operator/retry';
// import { retryWhen, delay, take } from 'rxjs/operators'
// import { HttpClientModule } from '@angular/common/http';
// import { People } from 'src/app/models/people.model';

// import * as io from 'socket.io-client';
// import { Body } from '@angular/http/src/body';
// import { data } from 'jquery';

// const TOKEN_CACHE_NAME = "ANTAR_ANALYTICS_TOKEN"

// const baserURL:String = "http://13.232.144.40:3000";

// //const websocketURI:String = "http://localhost:3001";
// const websocketURI:String = "http://3.6.161.135:3001";

// const authId = "1c9cbe86a4e84dcd84f1944c3d0ba96c";

// @Injectable({
//   providedIn: 'root'
// })
// export class AnalyticService {
//   headerConfig: any;
//   imagepath:any;
//   userData:People;
//   socket=null;
//   private functionPtr =(msg:String)=>{console.log('On Default'+msg)}  
  
  
//   constructor(private http: HttpClient,private router: Router) {
//     this.headerConfig = {
//       'Content-Type': 'application/json',
//       'x-api-key': "mTE7w1BJDA9uwLYUDZAPx34nswZ7em1GaTG20Ozl",
//     };
    
//    this.getUserData().subscribe(data=>{
     
//     if(data.Success)
//     {
//       this.userData=data.Result
//       console.log(this.userData)
//       this.socket = io(websocketURI);

//       this.socket.on(authId, (data: any) => {
//         this.functionPtr(data)
//       });
      
      
//     }
    
//    })
    
    
//   }

//   getAllConferenceRooms(){

//     let body = {
//       authId : authId
//     }

//     return this.http.post<any>(`${baserURL}/get-all-conference-rooms`, body, { headers: this.headerConfig });
//   }

//   getUserData(){
//     let body = {
//       authId : authId
//     }

//     return this.http.post<any>(`${baserURL}/get-user-data`, body, { headers: this.headerConfig });
//   }

//   findUser(name=null,email=null,)
//   {
//     let body = {
//       authId : authId,
//       name:name,
//       email:email
//     }

//     return this.http.post<any>(`${baserURL}/find-people`, body, { headers: this.headerConfig });
//   }
  
//   getAllRooms(){
//     let body = {
//       authId : authId
//     }

//     return this.http.post<any>(`${baserURL}/get-all-rooms`, body, { headers: this.headerConfig });
//   }
  
//   getAllPlaces(){
//     let body = {
//       authId : authId
//     }

//     return this.http.post<any>(`${baserURL}/get-all-places`, body, { headers: this.headerConfig });
//   }

//   addMeeting(data){
//     data.authId=authId
//     data.email=null;
 
//     return this.http.post<any>(`${baserURL}/schedule-meeting`, data, { headers: this.headerConfig });
//   }

//   socketListener():Observable<any>{
//    return new Observable((observer) => { 
//     this.functionPtr = (msg)=>{
//       observer.next(msg);
      
//     }


//     })
//   }

//   GetdefaultImage(){
//     return this.imagepath="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC"
//   }

//   syncFunctionAPI(){
//     let body={};
//    return this.http.post<any>(`${baserURL}/sync-all-devices`, body, { headers: this.headerConfig });
  
//   }


  
//   uploadImagesAPI(file: File): Observable<Object>{
//     console.log(file.name);
//     const formData: FormData = new FormData();
//     formData.append('photo', file, file["filename"]);
//     let tempHeader = this.headerConfig;
   
//     tempHeader["Content-Type"] = false;
//     tempHeader["mimeType"] = "multipart/form-data";
//     return this.http.post<any>(`${baserURL}/get-photo-code`,formData,{ headers: tempHeader});
//   }


//   uploadImagesAPI_test(file ):Observable<Object>{
//     // console.log(file);
//     // debugger

// // const imageName = 'name.png';
// // const imageBlob = this.dataURItoBlob(file._imageAsDataUrl);
// // const imageFile = new File([imageBlob], imageName, { type: 'image/png' });

// //var imageBase64 = "image base64 data";
// var blob = new Blob([file._imageAsDataUrl], {type: "image/jpeg"});
// var imageFile = new File([blob], 'imageFileName.jpeg')
// var filedata=imageFile

// filedata["filename"]='C:/fakepath/imageFileName.jpeg';
// //filedata["type"]='C:/fakepath/imageFileName.jpeg';
//   //  const files = this.dataURItoBlob(file._imageAsDataUrl)
// const formData = new FormData();
// formData.append('photo', filedata, filedata['filename']) 
//     console.log(imageFile)
//     let tempHeader = this.headerConfig;
   
//     tempHeader["Content-Type"] = false;
//     tempHeader["mimeType"] = "multipart/form-data";
//    return this.http.post<any>(`${baserURL}/get-photo-code`,filedata, { headers: tempHeader});
//   }

 
//   dataURItoBlob(dataURI) {
//     const byteString = window.atob(dataURI);
//     const arrayBuffer = new ArrayBuffer(byteString.length);
//     const int8Array = new Uint8Array(arrayBuffer);
//     for (let i = 0; i < byteString.length; i++) {
//       int8Array[i] = byteString.charCodeAt(i);
//     }
//     const blob = new Blob([int8Array], { type: 'image/jpeg' });    
//     return blob;
//  }

 

//   addemployeeAPI(data){
//   return  this.http.post<any>(`${baserURL}/create-people`,data, {headers: this.headerConfig});
//   }
//   editemployeeAPI(data){
//     return this.http.post<any>(`${baserURL}/edit-people`,data, {headers: this.headerConfig})
//   }

//   getRoomAccessDetailsAPI(){
    
//       return  this.http.post<any>(`${baserURL}/get-all-device`,"", {headers: this.headerConfig});
      
//   }

//   getattendenceAPI(from,to){
//     let data={
//       "from" :from,
//       "to":to
//   }
//     return this.http.post<any[]>(`${baserURL}/get-attendence-data`,data)
//   }
//    getAllUserDetailsAPI(){
//     return  this.http.post<any>(`${baserURL}/get-all-people`,"", {headers: this.headerConfig}); 
//    }

//   deleteEmployeeAPI(empId){
//     let data= {
//       empId:empId
//     }
//     return this.http.post<any>(`${baserURL}/delete-people`,data,{headers: this.headerConfig});
//   }
 
//   deleteEmployeepicsAPI(data){
 
//     return this.http.post<any>(`${baserURL}/delete-photo`,data,{headers: this.headerConfig});
//   }

//  getdevicelogAPI(data){
//    return this.http.post<any>(`${baserURL}/get-device-log`,data,{headers: this.headerConfig});
//  }
//  getLoginDetailsAPI(data){
//    return this.http.post<any>(`${baserURL}/login`,data,{headers:this.headerConfig});
//  }

//   getBaseUrl(){
//     return baserURL
//   }


// }

