import { SigninComponent } from './user/signin/signin.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
export const appRoutes :Routes=[
    {path:'home',component:HomeComponent},
    {
        path:'signup',component:UserComponent,
        children:[{path:'',component:SignupComponent}]
    },

    {
        path:'login',component:UserComponent,
        children:[{path:'',component:SigninComponent}]
    },
    
    {path:'',redirectTo:'/login',pathMatch:'full'}
        
    

];