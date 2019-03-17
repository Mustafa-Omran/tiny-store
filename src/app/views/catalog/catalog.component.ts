import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductsDataService } from './../../services/products-data.service';
import { Product } from './../../models/Product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})

export class CatalogComponent implements OnInit {


  products: Product[] = [];

  constructor(private productsDataService: ProductsDataService) { }

  ngOnInit() {
    this.productsDataService.currentMessage.subscribe(products => {
      this.products = [];
      this.products.push(...products);
    });
  }

}
