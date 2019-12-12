import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { log } from 'util';
import { ProductManagerService } from 'src/app/services/shop/product-manager.service';
import { Prod } from 'src/app/services/models/product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  Products;

  constructor(public productService: ProductManagerService) {
    const prods = productService.getAllProducts().subscribe((products : Prod[]) =>{
      this.Products = products
      console.log('====================================');
      console.log(this.Products);
      console.log('====================================');
    });
  }

  ngOnInit() {
  }

  addCart(product){
    this.productService.addProduct(product);
  }
}
