import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLoggedIn$!: boolean; 
  isLoggedOut$!: boolean;

  title = 'VehicleManagementFrontEnd';
  email = "";
  password = "";
  constructor(private service: ApiserviceService, private router: Router) { }
  
  ngOnInit(): void {
    this.isLoggedOut$ = true;
    
    
  }

  doLogin(){
    var lgn = {
      email: this.email,
      password: this.password
    };
 
    this.service.login(lgn).subscribe(res => {
      if(res.login){
        this.isLoggedIn$ = res.login;
        this.isLoggedOut$ = false;
        this.router.navigate(['/VehicleManufacturer'])
      }
      alert(res.msg.toString());
    });
  }

  Logout(){
    this.isLoggedIn$ = false;
    this.isLoggedOut$ = true;
    this.router.navigate(['/'])
  }

}
