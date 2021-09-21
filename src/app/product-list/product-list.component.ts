import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { description } from '../models/description';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  search:string = "";  
  public items?:any;
  public displayItems:description[] = [];
  getItems()
  {
    if(this.search in this.items)
       this.displayItems = this.items[this.search];
    else{
        this.displayItems = [];
        for(let property in this.items)
        {
           this.displayItems = [...this.displayItems, ...this.items[property]  ]
        }
    }
  }
  constructor(private _interactionservice:InteractionService) { 
    
    this.items = _interactionservice.items;
  }

} 
