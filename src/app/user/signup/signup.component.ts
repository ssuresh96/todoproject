

import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user : User;
  

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.resetForm();//calling the reset function
  }


resetForm(form ? :NgForm)//reset the form function
{
  if(form!=null)
  form.reset();
  this.user ={
  
    email:'',
    username:'',
    password:''
  }
}


OnSubmit(form:NgForm){
  this.userService.registerUser(form.value);
}
}
