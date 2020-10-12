import { RouterModule } from '@angular/router';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { UserService } from './shared/user.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    
  
   SigninComponent,
   SignupComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
