import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm : FormGroup;
  constructor(
    public formBuilder: FormBuilder
  ){
    this.loginForm = this.formBuilder.group({
      password: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')
      ])
      )
    })
  }

  ngOnInit(): void {
    
  }
  LoginTrigger(){
    console.log("Submitted");
  }
}
