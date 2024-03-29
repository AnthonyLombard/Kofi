import { Injectable } from '@angular/core';
import 'firebase/auth';
import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http';
import { Prod } from 'src/app/services/models/product.model';
import { Observable } from 'rxjs';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ProductManagerService {

  constructor(private http: HttpClient) { 
    //user = firebase.auth().currentUser.uid
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }


  getAllProducts(){
  var  url = "http://localhost:3121/getproducts"
  var products = this.http.get(url);
  return products
  }

  addProduct (Product: Prod){
    
    console.log(user)
    var  url = "http://localhost:3121/addtocart"
    var ass =  this.http.post<Prod>(url, Product).subscribe()
  }
}
