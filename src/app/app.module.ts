import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { IntroComponent } from './components/intro/intro.component';
import ROUTING from './app.route';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SellerInfoComponent } from './components/product/seller-info/seller-info.component';
import { DescriptionComponent } from './components/product/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    IntroComponent,
    NotFoundComponent,
    SellerInfoComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    ROUTING
  ],
  providers: [
    {
      provide: LocationStrategy, useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
