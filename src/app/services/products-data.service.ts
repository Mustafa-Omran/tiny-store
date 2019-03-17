import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './../models/Product';
@Injectable({
  providedIn: 'root'
})

export class ProductsDataService {

  private messageSource: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  /**
   * 
   * @param products 
   */
  changeMessage(products:Product[]) {    
    this.messageSource.next(products);
  }

}
