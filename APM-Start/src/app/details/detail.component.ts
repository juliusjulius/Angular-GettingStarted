import { ProductService } from './../product.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IProduct } from "../products/product";
import { Location } from '@angular/common';

@Component({
  selector: 'pm-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class detailComponent implements OnInit{
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService, private location: Location){}


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.findProduct(id).subscribe((product) => {this.product = product;});
  }

  onBack(){
    this.location.back();
  }
}
