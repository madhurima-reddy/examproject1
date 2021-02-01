import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {Icourse} from 'src/app/icourse';
import {IQuestion} from './iquestion';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  url='http://localhost:51403/api/Questions';
  url2='http://localhost:51403/api';
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})

};
    constructor(private http:HttpClient) { }

    getAll():Observable<IQuestion[]>{

      return this.http.get<IQuestion[]>(this.url);
      
      
    }
    GetQuestion(id:number,level:number):Observable<IQuestion[]>
    {
      return this.http.get<IQuestion[]>(this.url+"getquestion?id="+id +"&level="+level);
    }
    deleteQuestion(id:number):Observable<IQuestion>{
      return this.http.delete<IQuestion>(this.url+"?id="+id);
      
      
    }
    getcourses():Observable<Icourse[]>{
      return this.http.get<Icourse[]>(this.url2 +"/courses");
    }​​​​

    AddQuestion(que:IQuestion):Observable<IQuestion>{
      return this.http.post<IQuestion>(this.url+"/postquestion",que,this.httpOptions);
  }

  }