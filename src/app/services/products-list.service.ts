import { Injectable } from '@angular/core';
import { Product } from '../domain/product';

@Injectable()
export class ProductsListService {

  data: Product[] = [
        { code: 'P1000', nom: 'From Service -Café', prixUnitaire: 1500.5 },
        { code: 'P2000', nom: 'Thé', prixUnitaire: 1000.5 },
        { code: 'P3 000', nom: 'Coca Cola', prixUnitaire: 2000.5 }
    ];
  constructor() { }

  getAllProducts(): Product[] {
    return this.data;
  }

}
