import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase/app';

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(private platform: Platform) {
    this.initializeApp();
    var firebaseConfig = {
      apiKey: "AIzaSyC03ViKKt51H5amA6WKXveEw2zqikKF0cU",
      authDomain: "kofi-a0ba2.firebaseapp.com",
      databaseURL: "https://kofi-a0ba2.firebaseio.com",
      projectId: "kofi-a0ba2",
      storageBucket: "kofi-a0ba2.appspot.com",
      messagingSenderId: "625510210314",
      appId: "1:625510210314:web:e42058a7da6c47541878f3",
      measurementId: "G-Y2E297KS78"
    };
    firebase.initializeApp(firebaseConfig);
  }

  initializeApp() {
    SplashScreen.hide().catch(error => { 
      console.error(error);
    });

    StatusBar.hide().catch(error => {
      console.error(error);
    });
  }
}
