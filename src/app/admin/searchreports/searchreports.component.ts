import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {Icourse} from 'src/app/icourse';
import {ISearch } from 'src/app/isearch';
import {IReport} from 'src/app/ireport';
import {IUser} from 'src/app/iuser';

@Component({
  selector: 'app-searchreports',
  templateUrl: './searchreports.component.html',
  styleUrls: ['./searchreports.component.css']
})
export class SearchreportsComponent implements OnInit {

  
  UserId:number;
  AdminId:number;
 // user:IUser[];
  reportList:IReport[];
    course:Icourse={
  Course_id:null,
  Course_name:null,
  Minimum_marks:null,

}
search:ISearch={
  State:null,
  City:null,
  Level:null,
  Mark:null,
};
user: Array<IUser>= new Array();


marks=new Array(1,2,3,4,5,6,7,8,9,10,
  11,12,13,14,15,16,17,18,19,20,
  21,22,23,24,25,26,27,28,29,30,
  31,32,33,34,35,36,37,38,39,40,
  1.5,3,4.5,6,7.5,9,10.5,
  12,13.5,15,16.5,18,19.5,21);

numbers = new Array(1, 2, 3); 

city= new Array("Bangalore",	
	"Vishakhapatnam"	,
	"South Delhi",
	"North Delhi"	,
	"Lucknow",
	"Hyderabad"	,
"Mumbai"	,
	"Indore"	,
	"Amdavad"	,
	"Surat"	,
	"Jaipur",
	"Bhopal"	,
	"Aizawl"	,
	"Meerut"	,	
	"Chennai"	,
	"Warangal"	,
	"Greater Noida"	,
	"Prayagraj"	,
	"Pune"	,
	"Gandhinagar"	,
	"Asansol"	,
	"Vasai",
	"Gaya"		,
"Sambalpur");

state=new Array("TamilNadu","Kerala","Karnataka","Andhra Pradesh","Arunachal Pradesh","	Assam","	Bihar","Chhattisgarh",
"Goa","Gujarat","Haryana","Himachal Pradesh","	Jharkhand","	Madhya Pradesh","Maharashtra","	Meghalaya",	"Manipur","	Nagaland",
"West Bengal","Uttarakhand","	Uttar Pradesh","Tripura","	Telangana","	Sikkim","Rajasthan","	Odisha","	Punjab","Mizoram");

constructor(private route: Router,private router:ActivatedRoute) { }


  
  ngOnInit(): void {
  }

}
