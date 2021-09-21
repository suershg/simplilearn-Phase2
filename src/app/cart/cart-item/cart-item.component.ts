import { Component, Input, OnInit } from '@angular/core';
import { description } from 'src/app/models/description';
import { TotalBreakoutService } from 'src/app/total-breakout.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item?:any;
  quantity:number = 1;
  total?:number ;

  constructor(private _totalBreakoutService: TotalBreakoutService) { }

  onQuantityChange()
  {
    this.total = this.item.price * this.quantity;
    console.log(this.total);
    this._totalBreakoutService.addTotalOfAnItem(this.item.id, this.total);
  }

  ngOnInit(): void {
    this.total = this.item.price * this.quantity;
    this._totalBreakoutService.addTotalOfAnItem(this.item.id, this.total);
    console.log(this.total);
  }

}
