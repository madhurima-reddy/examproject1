import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';


import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddquestionComponent } from './admin/addquestion/addquestion.component';
import { RemovequestionComponent } from './admin/removequestion/removequestion.component';
import { DisplayquestionComponent } from './admin/displayquestion/displayquestion.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminpageComponent } from './admin/adminpage/adminpage.component';

import { SearchreportsComponent } from './admin/searchreports/searchreports.component';
import { RegisteruserComponent } from './user/registeruser/registeruser.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import {StarttestComponent} from './user/starttest/starttest.component';
import {TestComponent} from './user/test/test.component';
import {CoursesComponent} from './courses/courses.component';
import {CoursesInfoComponent} from './courses-info/courses-info.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {ReportCardComponent} from './report-card/report-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AddquestionComponent,
    RemovequestionComponent,
    DisplayquestionComponent,
    HomepageComponent,
    AboutusComponent,
    AdminloginComponent,
    AdminpageComponent,
    StarttestComponent,
    TestComponent,
    CoursesComponent,
    CoursesInfoComponent,
    
    SearchreportsComponent,
    RegisteruserComponent,
    UserloginComponent,
    HomeComponent,
    ContactComponent,
    ReportCardComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
