import { detailComponent } from './details/detail.component';
import { ProductListComponent } from './products/product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "products", component: ProductListComponent},
  {path: "products/:id", component: detailComponent},
  {path: "", redirectTo:"products", pathMatch: "full"},
  {path: "**", redirectTo:"products", pathMatch: "full"}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
