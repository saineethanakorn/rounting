import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
// import { Order } from './order';
// import { Injectable } from '@angular/core';


@Component({
  selector: 'app-coffee-shop',
  templateUrl: './coffee-shop.component.html',
  styleUrls: ['./coffee-shop.component.css']
})

// @Injectable({
//   providedIn: 'root'
// })

export class CoffeeShopComponent implements OnInit {
  // order: Order;
  orderForm: FormGroup;
  constructor(private fb:FormBuilder  ) {
    // this.order = new Order(" "," ",0," "," ",false)
    this.orderForm = this.fb.group({
      CustomerName: ['' , Validators.required] ,
      CustomerEmail: ['' , [ Validators.required , Validators.email]] ,
      CustomerPhone: ['' , [ Validators.required , Validators.minLength(9)]] ,
      OrderName: ['' , Validators.required] ,
      OrderTemp: ['' , Validators.required] ,
      SendText: [false] ,
      Date: ['']
    })
   }

  ngOnInit(): void {
  }

  show(){
    const message: HTMLElement = document.getElementById('showmessage') as HTMLElement
    message.innerHTML = "Your order is confirm"

    // const date = console.log(new Date())
    this.orderForm.value.Date = new Date()

  }

}

