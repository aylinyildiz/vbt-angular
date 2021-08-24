import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { ProductComponent } from './product/product.component';
import { CartService } from './cart/services/cart-service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    CartSummaryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: 'apiUrl',
      useValue: 'https://demodata.grapecity.com/northwind/odata/v1',
    },
    CartService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
