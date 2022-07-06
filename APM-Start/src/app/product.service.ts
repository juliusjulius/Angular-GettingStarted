import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IProduct } from './products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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

  constructor(private http: HttpClient) {}


  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('api/products/products.json');
  }

  findProduct(id: number): Observable<IProduct | undefined>  {
    return this.getProducts().pipe(map((products) => products.find((p) => p.productId === id)),
     catchError(this.handleError));
    }

    private handleError(err : HttpErrorResponse): Observable<never>{
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occured: ${err.error.message}`;
      } else {
        errorMessage = `Server returned code: ${err.status},
        error message os: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(()=> new Error(errorMessage));
    }
}
