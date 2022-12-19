import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgIdleKeepaliveModule } from '@ng-idle/core'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
// import { MomentModule } from 'angular-moment';
import { Idle } from '@ng-idle/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginManagerComponent } from './login-manager/login-manager.component';
import { UpdatedComponent } from './updated/updated.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ClassNumComponent } from './class-num/class-num.component';
import { CycleComponent } from './cycle/cycle.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StudentsComponent } from './students/students.component';
import { ServiceService } from './service/service.service';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
//<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { HttpClient } from '@angular/common/http';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'ngx-moment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { JitCompiler } from '@angular/compiler';
import { ModalModule } from 'ngx-bootstrap/modal';
//=======
import { HomeManagerComponent } from './home-manager/home-manager.component';
//>>>>>>> 902ba151cba50e8e863f3fc080fe452ff9c74b88
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginManagerComponent,
    UpdatedComponent,
    SignUpComponent,
    ClassNumComponent,
    CycleComponent,
    HomePageComponent,
    StudentsComponent,
    NotFoundPageComponent,
    HomeManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // ServiceService,
    BrowserAnimationsModule,
    MomentModule,
    // MatDialogModule,
    ModalModule,
    NgIdleKeepaliveModule.forRoot(),
    BrowserModule, 
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [ ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
