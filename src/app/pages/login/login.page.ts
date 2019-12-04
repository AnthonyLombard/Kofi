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
  errorMessages = {
    'email':[
      {type:'required', message:'Email is required...'},
      {type:'minLength', message:'Email length must be longer than or equal to 6 characters'},
      {type:'maxLength', message:'Email length must be no longer than 50 characters'},
      {type:'pattern', message:'Please enter a valid email address...'}
    ],
    'password':[
      {type:'required', message:'Password is required...'},
      {type:'minLength', message:'Password length must be longer than or equal to 6 characters'},
      {type:'maxLength', message:'Password length must be no longer than 50 characters'}
    ]
  }

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
  
  }
}
