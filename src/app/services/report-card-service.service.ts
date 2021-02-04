import { ReportCard } from 'src/app/classes/report-card';
import { Injectable } from '@angular/core';
import {​​​​​​​​ HttpClient, HttpErrorResponse, HttpHeaders }​​​​​​​​ from"@angular/common/http";
import {​​​​​​​​ Observable, throwError }​​​​​​​​ from'rxjs';
import {​​​​​​​​ catchError }​​​​​​​​ from'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ReportCardServiceService {

  constructor(private httpClient: HttpClient) { }
  private apiServer = "http://localhost:51403/api";
  httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
   })
   }
   ReportCard(User_id): Observable<ReportCard[]> {
    return this.httpClient.get<ReportCard[]>(this.apiServer + '/Report_card/'+User_id);
   }
  }

