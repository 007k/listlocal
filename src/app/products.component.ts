import { Component, OnInit } from '@angular/core';
import { ProductdataService } from './productdata.service';
import { Product } from './product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
  
})
export class ProductsComponent implements OnInit {
allProduct:Product[]=[];
  constructor(private _data:ProductdataService) { }
  ngOnInit() {
    this._data.getAllProduct().subscribe(
      (data:Product[])=>{
        this.allProduct=data;
      }
    );
  }
}