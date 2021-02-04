import { Adminlogin } from 'src/app/classes/adminlogin';
import { UserserviceService } from 'src/app/services/userservice.service';
import { Userlogin } from 'src/app/classes/userlogin';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { IUser } from 'src/app/classes/iuser';



@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  cred: IUser= new IUser();

  constructor(private regService : UserserviceService,private route: Router) { }

  ngOnInit(): void {
  }
  OnSubmit(){
    this.regService.Userlogin(this.cred).subscribe((data)=>{
      if(data!=null)
      {
        alert("Login Successful");
        this.cred=data;
        console.log(this.cred);
        sessionStorage.setItem('userid',this.cred.User_id.toString());
        console.log(sessionStorage.getItem('userid'));
        
        this.route.navigate(['/courses']);
        

        
      }
      else{
        alert("Invalid Login");
      }
    })

}
}