import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFormComponent } from './mycomp/my-form/my-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivetestComponent } from './mycomp/directivetest/directivetest.component';
import { AppRoutingModule } from './app-routing.module';
import { GreetComponent } from './mycomp/greet/greet.component';
import { FriendsComponent } from './mycomp/friends/friends.component';
import { CoffeeShopComponent } from './mycomp/coffee-shop/coffee-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    DirectivetestComponent,
    GreetComponent,
    FriendsComponent,
    CoffeeShopComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
