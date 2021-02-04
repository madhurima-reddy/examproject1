import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {Icourse} from 'src/app/classes/icourse';
import { QuestionService} from 'src/app/services/question.service';

import {IUser} from 'src/app/classes/iuser';
import {UserserviceService} from 'src/app/services/userservice.service';
import {Report} from 'src/app/classes/report';

@Component({
  selector: 'app-searchreports',
  templateUrl: './searchreports.component.html',
  styleUrls: ['./searchreports.component.css']
})
export class SearchreportsComponent implements OnInit {
  courses : Icourse[] = [];
  Courseid: number;
  Userid:number;
  State:String;
  City:String;
  Minimum_marks:string;
  studentFound: boolean = false;
  users:IUser[]=[];
  
  Reports :Report ={
    State:null,
    City:null,
    Course_name:null,
    Minimum_marks:null,
}

state=new Array("TamilNadu","Kerala","Karnataka","Andhra","Arunachal Pradesh","	Assam","	Bihar","Chhattisgarh",
    "Goa","Gujarat","Haryana","Himachal Pradesh","	Jharkhand","	Madhya Pradesh","Maharashtra","	Meghalaya",	"Manipur","	Nagaland",
    "West Bengal","Uttarakhand","	Uttar Pradesh","Tripura","	Telangana","	Sikkim","Rajasthan","	Odisha","	Punjab","Mizoram");
constructor(private route: Router,private router:ActivatedRoute,private questionserv:QuestionService,
  private userserv:UserserviceService) { }

  
  students:any = []; 
  ViewResult(Repo:Report)
  {
    this.questionserv.ViewResult(Repo).subscribe((data)=>{
            if(data)
            {
          this.studentFound=true;
              
              console.log(data);
              this.students = data;                                   
            }
          });
  }


  
  ngOnInit(): void {
    this.questionserv.getcourses().subscribe((data: Icourse[])=>{
      
        this.courses = data;
    })  
    this.userserv.getUsers().subscribe((data: IUser[])=>{
    
        this.users = data;
    }) 
  }


}