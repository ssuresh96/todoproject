import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder) { }
  BtnName = "Add";
  todolist:object;
  viewTask:object;
  taskList=[];
  token = sessionStorage.getItem("token"); //token
  showModal: boolean;//for pop-up
  readonly rootUrl='https://to-do-meshil.herokuapp.com/';//api base url
  ngOnInit(): void {
    this.getList();
  }
  todoForm: FormGroup = this.fb.group({
    id: [null],
    description: [null],
  })

 

  getList() {
    this.http.get(this.rootUrl+ 'task/list/',{ headers: new HttpHeaders().set('Authorization','Token'+ ' '+ this.token) }).subscribe(
      response => {
        this.todolist = response["data"];
        
        console.log(this.todolist);
      }
    );
  }


  onSubmit()
  
  {
    let data = this.todoForm.value;
    let id=data.id;
    if(id==null)
    {
      let finaldata = {
        "title": data.description,
        "status": "TODO"
  
      };
      this.http.post(this.rootUrl+'task/create/', finaldata,{ headers: new HttpHeaders().set('Authorization','Token'+ ' '+ this.token) }).subscribe(response => {
        console.log(response)
        this.getList();
        this.BtnName="ADD";
      })
    }
    else
    {
      let finaldata = {
       
        "title": data.description,
        "status": "TODO"
      };
      console.log(finaldata);
      this.http.patch(this.rootUrl+'task/update/'+id+'/', finaldata,{ headers: new HttpHeaders().set('Authorization','Token'+ ' '+ this.token) }).subscribe(response => {
        console.log(response);
        this.getList();
        this.BtnName="ADD";
      })
    }
  
  }

  delete(id){

    this.http.delete(this.rootUrl+'task/delete/'+id+'/',{ headers: new HttpHeaders().set('Authorization','Token'+ ' '+ this.token) }).subscribe(res => {
      this.getList();
      console.log(res);
    });
     }

edit(task){
  console.log(task)
    this.BtnName = "Update";
    this.todoForm.patchValue({
      "id":task.id,
      "description": task.title,
    })
  
}
view(id){
  this.showModal=true;
    this.http.get(this.rootUrl+'task/view/'+id+'/',{ headers: new HttpHeaders().set('Authorization','Token'+ ' '+ this.token) }).subscribe
    (res => {
  // console.log(res);
  this.viewTask=res["data"];
  // console.log(this.viewTask);
  this.taskList.push(this.viewTask);
  console.log(this.taskList);
    });
}

close(){
  this.showModal = false;
}
}
