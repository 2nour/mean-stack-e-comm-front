import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/eComm/home/home.component';
import { SubscribeComponent } from './components/eComm/subscribe/subscribe.component';
import { ConnectComponent } from './components/eComm/connect/connect.component';
import { ProductListComponent } from './components/seller/product-list/product-list.component';
import { ProductAddComponent } from './components/seller/product-add/product-add.component';
import { ProductUpdateComponent } from './components/seller/product-update/product-update.component';
import { CategoryListComponent } from './components/admin/category-list/category-list.component';
import { CategoryAddComponent } from './components/admin/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/admin/category-update/category-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubscribeComponent,
    ConnectComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
