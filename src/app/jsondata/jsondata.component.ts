import { Component,Renderer, Renderer2 , OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, CdkDragStart, CdkDragRelease} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-jsondata',
  templateUrl: './jsondata.component.html',
  styleUrls: ['./jsondata.component.css']
})
export class JsondataComponent implements OnInit {
  Data:FormGroup;
  importData:FormGroup;
  formData:any=[];
  columns:any=[];
  jsondatas:any=[];
  pos:any;
  release:boolean;
  hide:boolean=false;
  butonName:any="Add";
  constructor(private fb:FormBuilder,public renderer: Renderer,
    public renderer2: Renderer2) { }
  ngOnInit() {
    this.bindControls();
    this.bindControls1();
    this.columns = [
      {"field": "_id", "header": "id"},
      {"field": "from", "header": "from"},
      {"field": "to", "header": "to"},
      {"field": "delay", "header": "delay"},
      {"field": "payload", "header": "payload"},
      {"field": "event", "header": "event"},
      {"field": "schedule_sec", "header" : "schedule_sec"}
  ]
  }
  bindControls() {
    this.Data = this.fb.group({
      _id: [''],
      from: [''],
      to: [''],
      delay: [''],
      payload: [''],
      event: [''],
      schedule_sec:['']
    });
    this.butonName="Add";
  }

  bindControls1(){
this.importData = this.fb.group({
  importjson:[],
    })
  }
  
   importJsonData() {
     let jsondata=JSON.parse(this.importData.controls.importjson.value)
    for(let i=0;i<jsondata.length;i++){
      this.formData.push(jsondata[i])
    }
   
    console.log(this.formData);
// var b=JSON. stringify(this.jsondatas);
// let str = b. replace(/\\/g, '');
// console. log(str);
 // this.formData.push(JSON.parse(this.jsondatas[0].importjson))

  }
  delete_Click(data){
    //this.gridData.splice(index,1);
    for(let i=0;i<this.formData.length;i++){
      if(this.formData[i]._id==data._id){
        this.formData.splice(i,1);
      }
    } 
  }

  edit(data){

   this.butonName="Update";
   this.Data.patchValue(data);
   this.hide=true
  }

  printData(){
    console.log("tableData : "+JSON.stringify(this.formData))
  }
  savedata(){
    if(this.butonName=="Add"){
      this.formData.push(this.Data.value)
    }
   else{
     for(let i=0;i<this.formData.length;i++){
       if(this.formData[i]._id==this.Data.controls._id.value){
         this.formData[i]=this.Data.value;
       }
     }
    //  this.Data.get('_id').enable();
     this.hide= false
   }
    // console.log(JSON.stringify(this.formData))
    this.bindControls();
  }
 
  dropRow(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.formData, event.previousIndex, event.currentIndex);
  }
  dropCol(event: CdkDragDrop<string[]>) {
   
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
     console.log(this.columns, this.formData)
  }
  mouseDown(event,el:any=null){
    el=el || event.target
    this.pos={x:el.getBoundingClientRect().left-event.clientX+'px',
    y:el.getBoundingClientRect().top-event.clientY+'px',
    width:el.getBoundingClientRect().width+'px'
    }
  }
  onDragRelease(event: CdkDragRelease) {
    this.renderer2.setStyle(event.source.element.nativeElement,'margin-left','0px')
  }
}
