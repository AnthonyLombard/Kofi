import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/user/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm : FormGroup;
  public loading: HTMLIonLoadingElement;
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
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router
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
  async loginUser(loginForm: FormGroup): Promise<void> {
      this.loading = await this.loadingCtrl.create();
      await this.loading.present();
  
      const email = <string>loginForm.value.email;
      const password = <string>loginForm.value.password;
      this.authService.loginFirebase(email, password).then(
        () => {
          this.loading.dismiss().then(() => {
            this.router.navigateByUrl('home');
          });
        },
        error => {
          this.loading.dismiss().then(async () => {
            const alert = await this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: 'Ok', role: 'cancel' }],
            });
            await alert.present();
          });
        }
      );  
  }
}
