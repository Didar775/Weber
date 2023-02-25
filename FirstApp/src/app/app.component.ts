import { Component, OnInit } from '@angular/core';
import products from './products.json';
import { productss } from './products';

interface Product{
  id:number;
  name:string;
  price:string;
  link:string;
  image:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit{

  products:Product[] = products;
  ngOnInit(): void {
    console.log(productss)
    console.log(products)
  } 
}
