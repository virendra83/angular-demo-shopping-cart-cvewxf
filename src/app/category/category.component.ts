import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categories:{id:number,name:string}[] =[
    {name: 'Men Accessories', id: 1},
    {name: 'Woman Accessories', id: 2},
    {name: 'Kids Accessories', id: 3},
    {name: 'Sports Accessories', id: 4}
  ]


  constructor() { 


  }

  ngOnInit() {
  }
  

}
