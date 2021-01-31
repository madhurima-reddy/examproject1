import { Adminlogin } from './adminlogin';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from"@angular/common/http";
import { Observable, throwError } from'rxjs';
import { catchError } from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private httpClient: HttpClient) { }
  private apiServer = "http://localhost:57196/api";
httpOptions = {
headers: new HttpHeaders({
'Content-Type': 'application/json'
 })
 }
 AdminLogin(logincredentials): Observable<number> {
  return this.httpClient.post<number>(this.apiServer + '/Admin_Module/',JSON.stringify(logincredentials),this.httpOptions);
 }
}


