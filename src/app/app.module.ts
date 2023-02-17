import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common'
import { CartListComponent } from './cart-list/cart-list.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';


@NgModule({
  imports:      [ BrowserModule,FormsModule,   AppRoutingModule ],
  declarations: [ AppComponent,CartListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ProductService, CartService]
})
export class AppModule { }
