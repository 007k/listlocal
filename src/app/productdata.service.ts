import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProductdataService {
//url:string="/localservice/product.json";
  constructor(private _http:Http) { }

  getAllProduct(){
    return this._http.get('../assets/product.json')
    .map((res:Response)=>res.json());
  }
}