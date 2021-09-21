import { Component, Input, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';
import { description } from 'src/app/models/description';
import { TotalBreakoutService } from 'src/app/total-breakout.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

    @Input() item?:any;

    constructor(private _interactionService: InteractionService, private _totalBreakOutService:TotalBreakoutService){}
    addToCart()
    {
        this._interactionService.sendMessage(this.item);
    }

  

  ngOnInit(): void {
  }

}
