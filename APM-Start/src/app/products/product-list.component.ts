import { Observable, catchError, throwError } from 'rxjs';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  pageTitle: string = 'Product List';
  showImage: boolean = false;
  private _listFilter!: string;

  errorMessage: string | undefined;

  imageWidth: number = 50;
  imageMargin: number = 2;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
    console.log('In setter:', value);
  }

  filteredProducts: IProduct[] = [];

  products: IProduct[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2021',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl: 'assets/images/hammer.png',
    },
  ];

  products$: Observable<IProduct[]> | undefined;

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.listFilter = '';
      },
      error: (error) => {
        console.log(error);
        this.errorMessage = error.message;
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

   private handleError(err : HttpErrorResponse): Observable<never>{
    return throwError(() => new Error(err.message));
   }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  updateTitle(title: string) {
    this.pageTitle = title;
  }
}
