import { Component, OnInit } from '@angular/core';
import { MockDataFacadeService } from './../../facades/mock-data-facade.service';
import { ProductsDataService } from './../../services/products-data.service';
import { Category } from './../../models/Category';
import { Product } from './../../models/Product';
import { Router } from '@angular/router';
import { FilterPipe } from './../../pipes/filter.pipe';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [
    FilterPipe
  ]
})

export class HeaderComponent implements OnInit {

  keywords: string;
  status: boolean;
  categories: Category[] = [];
  products: Product[] = [];
  selectedCategory: number = 1;

  constructor(
    private mockDataFacadeService: MockDataFacadeService,
    private router: Router,
    private productsDataService: ProductsDataService,
    private filter: FilterPipe
  ) { }

  ngOnInit() {
    this.checkUser();
    this.fetchCategories();
  }

  /**
   * load caetegories
   * 
   * 
   */
  fetchCategories() {
    this.mockDataFacadeService.catalogService.getJSON().subscribe(res => {

      this.categories = res.categories;
      this.categories.push({ id: 1, name: 'All categories' });
      this.getProductsByCategory(1);
    });

    console.log(this.categories);

  }

  /**
   * get products by id
   * 
   * 
   * @param categoryId 
   */
  getProductsByCategory(categoryId: number) {
    this.products = [];

    if (categoryId === 1) {
      this.categories.forEach(category => {
        this.products.push(...category['items']);
      });
    } else {
      this.categories.forEach(category => {
        if (categoryId == category.id) {
          this.products.push(...category['items']);
        }
      });

    }

    this.selectedCategory = categoryId;

    this.router.navigate(['catalog']);
    this.productsDataService.changeMessage(this.products);
  }


  /**
   * check if user logged before or not 
   * 
   * 
   */
  checkUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return this.status = true;
    } else {
      return this.status = false;
    }
  }


  /**
   * clear user from local storage 
   * 
   * 
   */
  logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }

  /**
   * nav to login page
   * 
   * 
   */
  login() {
    this.router.navigate(['login']);
  }

  /**
   * filter products
   * 
   * 
   */
  filterUsingKeywords() {
    const products = this.filter.transform(this.products, { name: this.keywords }, false);
    this.productsDataService.changeMessage(products);
  }

}
