import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css']
})
export class LoginManagerComponent implements OnInit {
  Time!: Number;
  s: string = "";
  constructor(private service:ServiceService, private router:Router) { 
    this.Time = new Date().getHours();
    // this.s = this.Time.toString();
  }
  model: User = new User();


  ngOnInit(): void {
    console.log(this.s);
    console.log(this.Time);
    this.HelloTime();
  }
  HelloTime() {
    switch (this.Time) {
      case 20:
      case 21:
      case 22:
      case 23:
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        console.log("לילה טוב!");
        break;
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
        console.log("בוקר טוב!");
        break;
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        console.log("צהריים טובים!");
    }
  }

  onSubmit(loginForm: NgForm) {
    console.log(this.model)
    if(loginForm.valid) {
      this.service.setUserLoggedIn(true)
      this.router.navigate(['/Home-manager']);
      console.log('hi')
    }
  }
}
export class User {

  constructor(
    
  ) {  }

  public userName: string | undefined;
  public password: string | undefined;

}
