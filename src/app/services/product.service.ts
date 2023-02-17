import { Injectable } from '@angular/core';
import {products} from './../product-items';
import {Product} from './../types/products';

@Injectable()
export class ProductService {

  constructor() { }

  getAll():Product[] {
    return products;
  }

  getCategoryItems(id:number): Product [] {
    return products.filter(item => item.categoryId == id );
  }

}