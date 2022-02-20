import { NgModule } from '@angular/core';
import { MyFormComponent } from './mycomp/my-form/my-form.component';
import { DirectivetestComponent } from './mycomp/directivetest/directivetest.component';
import { RouterModule , Routes } from '@angular/router';
import { GreetComponent } from './mycomp/greet/greet.component';
import { FriendsComponent } from './mycomp/friends/friends.component';
import { CoffeeShopComponent } from './mycomp/coffee-shop/coffee-shop.component';

const routes: Routes = [
  { path: 'MyForm' , component: MyFormComponent},
  { path: 'Directive' , component: DirectivetestComponent},
  { path: 'Friend' , component: FriendsComponent},
  { path: 'Greet' , component: GreetComponent},
  { path: "CoffeeShop" , component: CoffeeShopComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
