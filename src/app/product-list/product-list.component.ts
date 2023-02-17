import { Component, OnInit } from '@angular/core';
import {ProductService} from "./../services/product.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Product} from './../types/products';
import {CartService} from './../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private selectedCatList :Product[];


  constructor( private route: ActivatedRoute,
  private router: Router,
  private productService: ProductService,
  private cartService:CartService) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.selectedCatList = this.productService.getCategoryItems(parseInt(id));
  }

  private addToCart(product:Product) : void{
     this.cartService.add(product);
  }

}