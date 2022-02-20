import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  constructor(private logger: LogService) { }

  ngOnInit(): void {
  }

  name:string = "Sarah";
  title: string = "Welcome to my e-Store";
  isDisabled = true;
  item: string = "item";
  searchItem: string ="";
  numItems = 0;

  searchItems(): void{
    this.numItems = 5;
    this.searchItem = this.item;
  }

greet():void {
   this.logger.log("Testing");
}
}
