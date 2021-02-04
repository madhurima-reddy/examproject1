import { ReportCardServiceService } from 'src/app/services/report-card-service.service';
import { Component, OnInit } from '@angular/core';
import { ReportCard } from 'src/app/classes/report-card';



@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent implements OnInit {
  reports: ReportCard[]=[];
  session: string;

  constructor(private reportservice: ReportCardServiceService) { }

  ngOnInit(): void {
    this.session="1"
    //sessionStorage.getItem('userid')
  this.reportservice.ReportCard(1).subscribe(data=>{
    this.reports=data
    console.log(data)
  })


  }

}
