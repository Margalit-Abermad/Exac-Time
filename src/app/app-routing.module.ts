import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClassNumComponent } from './class-num/class-num.component';
import { CycleComponent } from './cycle/cycle.component';
import { HomeManagerComponent } from './home-manager/home-manager.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginManagerComponent } from './login-manager/login-manager.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StudentsComponent } from './students/students.component';
import { UpdatedComponent } from './updated/updated.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'LoginManager', component: LoginManagerComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'Updated', component: UpdatedComponent },
  {
    path: 'Home',
    component: HomePageComponent,
    children: [
      { path: 'Cycle', component: CycleComponent },
      { path: 'Class-num', component: ClassNumComponent },
      { path: 'Students', component: StudentsComponent },
      {path:'**',component:NotFoundPageComponent}
    ],
  },
  {path:'Home-manager',component:HomeManagerComponent},
  {path:'**',component:NotFoundPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
