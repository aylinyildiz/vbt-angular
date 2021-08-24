export class Product {
    ProductId: number;
    CategoryId: number;
    ProductName: string;
    QuantityPerUnit: string;
    UnitPrice: number;
    UnitsInStock:number;

   constructor() {
       this.ProductId=0;
       this.CategoryId=0;
       this.ProductName='';
       this.QuantityPerUnit='';
       this.UnitPrice=0;
       this.UnitsInStock=0;
   }
}