import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { description } from './models/description';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _teacherMessageSource =  new Subject<description>();
  teacherMessage$ = this._teacherMessageSource.asObservable();

  items?:any;

  constructor() {
    this.items = {
      "fruits" : [new description(101, "fruits", "Apple", "../assets/images/apple.jpg", 10, "1pcs",30),
                  new description(102, "fruits", "Guava", "../assets/images/guava.jpg", 8, "1pcs", 40),
                  new description(103, "fruits", "Orange", "assets/images/orange.jpg", 5, "1pcs",50),
                  new description(104, "fruits", "PineApple", "assets/images/pineapple.jpg", 15, "1pcs",20)],

      "vegetables" : [new description(106, "vegetables", "Beetroot", "assets/images/beetroot.jpg", 30, "1KG",30),
                  new description(107, "vegetables", "Potato", "assets/images/potato.png", 20, "1KG",30),
                  new description(108, "vegetables", "carrot", "assets/images/carrot.jpg", 30, "1KG",30),
                  new description(109, "vegetables", "greenchilli", "assets/images/greenchilli.jpg", 15, "1KG",30),
                  new description(110, "vegetables", "redchilli", "assets/images/redchilli.jpg", 15, "1KG",30)],

      "bread"  : [ new description(112, "bread", "Allinson", "assets/images/bread.jpg", 15, "400gm", 30),
                 new description(113, "bread", "Britania Brown", "assets/images/bread2.jpg", 17, "400gm",30),
                 new description(114, "bread", "FarmHouse", "assets/images/bread1.jpg", 16, "400gm",30),
                 new description(115, "bread", "Fresho", "assets/images/bread3.jpg", 16, "400gm",30),
                 new description(116, "bread", "DailyBread", "assets/images/bread4.jpg", 15, "400gm",30)],

      "rice"  : [ new description(117, "rice", "Rice", "assets/images/rice.jpeg", 300, "5kg",30),
                new description(118, "rice", "India gate(Basmati Tiberg)", "assets/images/rice1.jpg", 280, "5kg", 30),
                new description(119, "rice", "India gate(Basmati Super)", "assets/images/rice2.jpg", 320, "5kg",30),
                new description(120, "rice", "Kisan sakti(Basmati)", "assets/images/rice3.jpg", 350, "5kg",30),
                new description(121, "rice", "Mama sezz(Brown Rice)", "assets/images/rice4.jpg", 400, "5kg",30),],
              
      "sugar" : [new description(122, "sugar", "icing sugar", "assets/images/sugar.jpg", 40, "1kg",30),
                new description(123, "sugar", "Madhur blue", "assets/images/sugar1.jpg", 45, "1kg",30),
                new description(124, "sugar", "Madhur green", "assets/images/sugar2.png", 43,"1kg", 30)]

    } 
   }

  add_edit(id:number, category:string, brand:string, image:string, price:number, units:string)
  {
    for(let item of this.items[category])
    {
        console.log(item.id);
    }
      
  }
  sendMessage(message: description){
    
    this._teacherMessageSource.next(message);

  }
}
