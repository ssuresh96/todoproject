import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
  import { from } from 'rxjs';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl='https://to-do-meshil.herokuapp.com/';//api base url

  constructor(private http:HttpClient) { }

  //Registration model class  functions and post methord
  registerUser(user: User){
    const body:User={
      "email":user.email,
      "username":user.username,
      "password":user.password,
    }
   
    let fdata=JSON.stringify(body);
    console.log(body);
    return this.http.post(this.rootUrl + 'user/register/',body).subscribe(response=>{
      console.log(response);      
      }) 
  }

  
 
}
