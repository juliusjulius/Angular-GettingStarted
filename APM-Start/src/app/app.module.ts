import { CommonModule } from '@angular/common';
import { detailComponent } from './details/detail.component';
import { StarComponent } from './shared/star.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    detailComponent,
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, CommonModule, HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
