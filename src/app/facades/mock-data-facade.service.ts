import { Injectable, Injector } from '@angular/core';
import { CatalogMockDataService } from './../services/catalog-mock-data.service';
import { ProductsDataService } from './../services/products-data.service';
@Injectable({
  providedIn: 'root'
})

export class MockDataFacadeService {

  private catalogMockDataService: CatalogMockDataService;
  private productsDataService: ProductsDataService;

  constructor(private injector: Injector) {

  }




  /**
   * mock data service
   * 
   * 
   */
  public get catalogService(): CatalogMockDataService {
    if (!this.catalogMockDataService) {
      this.catalogMockDataService = this.injector.get(CatalogMockDataService);
    }
    return this.catalogMockDataService;
  }

  /**
 * products data service
 * 
 * 
 */
  public get productsService(): ProductsDataService {
    if (!this.catalogMockDataService) {
      this.productsDataService = this.injector.get(ProductsDataService);
    }
    return this.productsDataService;
  }

}
