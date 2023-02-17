import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common' ;

import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [ 
    CategoryComponent,ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: CategoryComponent },
      { path: 'category/:id', component: ProductListComponent },
     
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})
export class AppRoutingModule {}


