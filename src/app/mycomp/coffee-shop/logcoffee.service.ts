import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogcoffeeService {

  constructor() { }
  logcoffee(msg:string){
    console.log(msg + new Date())
  }
}
