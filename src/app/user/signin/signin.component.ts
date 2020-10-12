import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  readonly rootUrl='https://to-do-meshil.herokuapp.com/';//api base url

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { }
  loginForms: FormGroup;
  login: object; //login variable
  MisMatch = false; //mismatch
  ngOnInit(): void {
    this.loginForms = this.fb.group({
      email: [null],
      password: [null],
    });
  }
  Login()
  {
    let sss = this.loginForms.value;
    let jsn = {
      "email": sss.email,
      "password": sss.password,    
    };
   

    console.log(jsn);
    return this.http.post(this.rootUrl + 'user/login/', jsn).subscribe(res => {
      console.log(res);
      this.login = res;
      sessionStorage.setItem("token", this.login["token"]); //set token
     
      // //------------------------------------------------
      if (this.login["token"] != null) {
        
        //  alert("inside login");
        this.router.navigate(['home']);
      }
      //-----------------------------------------------
    },
      err => {
        console.log(err.message);
       
      }
    );
  }

  
}
