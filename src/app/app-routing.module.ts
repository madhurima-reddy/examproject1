import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemovequestionComponent } from './admin/removequestion/removequestion.component';
import{AddquestionComponent} from './admin/addquestion/addquestion.component';
import{DisplayquestionComponent} from './admin/displayquestion/displayquestion.component';
import{HomepageComponent} from './homepage/homepage.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import {AdminpageComponent } from './admin/adminpage/adminpage.component';
import {ViewQuestionsComponent} from './admin/view-questions/view-questions.component';
import { SearchreportsComponent } from './admin/searchreports/searchreports.component';
import { RegisteruserComponent } from './user/registeruser/registeruser.component';


const routes: Routes = [
  {path:'remove',component:RemovequestionComponent},
  {path:'add',component:AddquestionComponent},
  {path:'',component:RegisteruserComponent},
  {path:"AdminLogin",component:AdminloginComponent},
  {path:"AdminPage",component:AdminpageComponent},
  {path:"ViewQuestions",component:DisplayquestionComponent},
  {path:'display',component:DisplayquestionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RemovequestionComponent,AddquestionComponent,HomepageComponent,DisplayquestionComponent];
