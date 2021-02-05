import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemovequestionComponent } from './admin/removequestion/removequestion.component';
import{AddquestionComponent} from './admin/addquestion/addquestion.component';
import{DisplayquestionComponent} from './admin/displayquestion/displayquestion.component';
import{HomepageComponent} from './homepage/homepage.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import {AdminpageComponent } from './admin/adminpage/adminpage.component';

import { SearchreportsComponent } from './admin/searchreports/searchreports.component';
import { RegisteruserComponent } from './user/registeruser/registeruser.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';

import {TestComponent} from './user/test/test.component';
import {StarttestComponent} from './user/starttest/starttest.component';
import {CoursesComponent} from './courses/courses.component';
import {CoursesInfoComponent} from './courses-info/courses-info.component';
import { HomeComponent } from './home/home.component';
import {ReportCardComponent} from './report-card/report-card.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  {path:'remove',component:RemovequestionComponent},
  {path:'add',component:AddquestionComponent},
  {path:'',component:HomepageComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'about',component:AboutusComponent},
  {path:'contact',component:ContactComponent},
  {path:'searchreports',component:SearchreportsComponent},  
  {path:"AdminLogin",component:AdminloginComponent},
  {path:"AdminPage",component:AdminpageComponent},
  {path:"UserLogin",component:UserloginComponent},
  {path:"ViewQuestions",component:DisplayquestionComponent},
  {path:'display',component:DisplayquestionComponent},
  {path:'registeruser',component:RegisteruserComponent},
  {path:'test', component:TestComponent},
  {path:'startexam/:Course_id',component:StarttestComponent},
  {path:'courses/:Course_id',component:CoursesComponent},
  {path:'coursesinfo',component:CoursesInfoComponent},
  {path: 'test/:Course_id', component:TestComponent } ,
  {path:'courses',component:CoursesComponent},
  {path:'reports',component:ReportCardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RemovequestionComponent,AddquestionComponent,HomepageComponent,DisplayquestionComponent];
