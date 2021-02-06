import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'; 
import {Observable,of} from 'rxjs';
import {IQuestion} from 'src/app/classes/iquestion';
import { Icourse } from '../classes/icourse';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private apiServer = "http://localhost:65038/api";
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
};

  constructor(private http:HttpClient) { }
 
  // getAll(): Observable<Iquestions[]> {
  //   return this.httpClient.get<Iquestions[]>(this.apiServer + '/products/')
    
  // }
  // getquestions(user:Iquestions):Observable<Iquestions[]>{​​​​  
  //   return this.http.get<Iquestions[]>(this.apiServer + "questions/GetAll/",this.httpOptions);
  // }​​​​
  getById(Course_id,Level_id): Observable<IQuestion> {
    return this.http.get<IQuestion>(this.apiServer + 'question/GetByID/' + this.httpOptions);
  
  } 
  getcourses(courseid):Observable<Icourse[]>{
    return this.http.get<Icourse[]>(this.apiServer + "/Course/" + courseid, this.httpOptions);
  }​​​​
  getAllCourses():Observable<Icourse[]>{
    return this.http.get<Icourse[]>(this.apiServer + "/Course" );
  }​​​​
  // getcoursesById(Course_id): Observable<Iquestions> {
  //   return this.http.get<Iquestions>(this.apiServer + 'questions/GetByID/' + this.httpOptions);http://localhost:49965/api/questions?courseid=100&levelid=1
  // } 
  getQuestions(courseid,Level_id): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>
    (this.apiServer + '/question?courseid='+courseid+'&levelid='+ Level_id )
   }
   postreport(ReportCard):Observable<number>{
    return this.http.post<number>(this.apiServer + "/Report_card/", JSON.stringify(ReportCard),this.httpOptions);
  }​​​​
 
  }
  

