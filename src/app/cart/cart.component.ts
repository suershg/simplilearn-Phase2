import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit} from '@angular/core';
import { InteractionService } from '../interaction.service';
import { description } from '../models/description';
import { TotalBreakoutService } from '../total-breakout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

 // cartItems:description[] = []
  cartItems:any = {}
  totalPrice:number=0;
  payment?:string;
  constructor(private _interactionService: InteractionService, public _totalBreakoutService:TotalBreakoutService) {
       
   }

  pay()
  {
      this.payment= "your order placed successfully";
  }

  ngOnInit(): void {

        this._interactionService.teacherMessage$.subscribe(
            message => { 
              var item = <description> message;
              this.cartItems[item.id] = item;
              this.payment = "";
            }
        )

        
  }

}
