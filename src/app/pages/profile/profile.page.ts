import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
logout(){
  console.log("logout");
  this.authService.logoutUser();
}
}
