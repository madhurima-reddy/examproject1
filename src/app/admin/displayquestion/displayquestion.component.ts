import { Component, OnInit } from '@angular/core';

import {IQuestion} from 'src/app/classes/iquestion';
import { QuestionService} from 'src/app/services/question.service';
import { ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-displayquestion',
  templateUrl: './displayquestion.component.html',
  styleUrls: ['./displayquestion.component.css']
})
export class DisplayquestionComponent implements OnInit {
 
  constructor(public service:QuestionService,private route: Router) { }
  Questions:any = []; 
  ngOnInit(): void {
    this.service.getAll().subscribe((data)=>{
      this.Questions = data;
      console.log(data);
  })  
  }
  deleteQuestion(Question_id){
      
    this.service.deleteQuestion(Question_id).subscribe(data=>{
              
        alert("Question deleted");
        this.route.navigate(['display']);
      
    });
  }
}

