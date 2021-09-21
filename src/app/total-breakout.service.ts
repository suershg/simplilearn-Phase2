import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalBreakoutService {

  totalForEachItem:any = {};
  totalPrice:number = 0;
  addTotalOfAnItem(id:number, total:number)
  {
      this.totalForEachItem[id] = total;
      let total_price=0
      for(var key of Object.keys(this.totalForEachItem))
      {
          total_price = total_price + this.totalForEachItem[key];
      }
      this.totalPrice = total_price;
  }

  constructor() { }
}
