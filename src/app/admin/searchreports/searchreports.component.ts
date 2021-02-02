import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {Icourse} from 'src/app/icourse';
import { QuestionService} from 'src/app/question.service';
import {ISearch } from 'src/app/isearch';
import {IReport} from 'src/app/ireport';
import {IUser} from 'src/app/iuser';
import {UserserviceService} from 'src/app/userservice.service';

@Component({
  selector: 'app-searchreports',
  templateUrl: './searchreports.component.html',
  styleUrls: ['./searchreports.component.css']
})
export class SearchreportsComponent implements OnInit {

  courses : Icourse[] = [];
  Courseid: number;

  users:IUser[]=[];
  Userid:number;
  
  


constructor(private route: Router,private router:ActivatedRoute,private questionserv:QuestionService,
  private userserv:UserserviceService) { }


  
  ngOnInit(): void {
    this.questionserv.getcourses().subscribe((data: Icourse[])=>{
      console.log(data);
        this.courses = data;
    })  
    this.userserv.getUsers().subscribe((data: IUser[])=>{
      console.log(data);
        this.users = data;
    }) 
  }

}
