
export class description
{
    id:number = 100;
    category?:string;
    brand?:string;
    image?:string;
    price?:number;
    units?:string;
    qty_available?:number;

    constructor(id:number, category:string, brand:string, image:string,  price:number, units:string, qty_available:number)
    {
            this.id = id;
            this.category = category;
            this.brand = brand;
            this.image = image;
            this.units = units;
            this.price = price;
            this.qty_available = qty_available;
    }
    

}