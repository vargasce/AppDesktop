import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public OnLogin( event: Event ){
    console.log('login');
    console.log(event);
  }

  public OnRegister( event: Event ){
    console.log('register');
    console.log(event);
  }

}
