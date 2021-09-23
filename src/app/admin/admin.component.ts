import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  id1?:any;
  category1?:any;
  id?:any;
  category?:any;
  brand?:any;
  image?:any;
  price?:any;
  units?:any;

  constructor(private _interactionService:InteractionService) { }

  add_edit()
  {
    this._interactionService.add_edit(this.id, this.category,this.brand, this.image, this.price, this.units)
  }

  delete()
  {
    this._interactionService.delete(this.id1, this.category1);
  }
 

  ngOnInit(): void {
  }

}
