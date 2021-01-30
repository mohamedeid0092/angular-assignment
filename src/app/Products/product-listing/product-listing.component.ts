import { Component, OnInit,EventEmitter, Output } from '@angular/core';

import { Product } from 'src/app/_model/Product';
import { ProductCategoryService } from 'src/app/_services/product-category.service';
import { Productservices } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})

export class ProductListingComponent implements OnInit {
  products:Product[]
  productcategory=[]
 // @Output() productadd = new EventEmitter<Product>()
  pagenumber:number[]=[];
  pagesize:number=9
  currentpg:number=0
  public selected
  constructor(private productservice:Productservices,private productcategoryservice:ProductCategoryService) {  
     
}

  ngOnInit(): void {
   this.productservice.getproducts().subscribe(
     (res)=>{this.products=res['product']
    ;
    this.pagecalculation(res['numberOfProducts'])},
     (err)=>{console.log(err)},
()=>{}
   )
    
    }
  
pagecalculation(length){
  this.pagenumber=[]
  for(let index=0;index<length/this.pagesize;index++){
    this.pagenumber.push(index+1)
}
}
subscribe(obj:Product):void{
this.productservice.productadd.emit(obj)
}
search(searchinput){
this.products= this.productservice.searchbyname(searchinput.value)
//this.pagecalculation()
}


select(value: string){
  switch(value) {
    case "2":
      this.products.sort(function(a, b){return a.price-b.price})
       break;
    case "3":
      this.products.sort(function(a, b){return b.price-a.price})
       break;
    case "4":
      this.products.sort((a, b) => a.data[0].name.localeCompare(b.data[0].name))
       break;
  }
}


// value(){
//   this.productcategoryservice.getallcategorys().subscribe(
//     (res)=>{if(res['name']=== this.selected){
      
//     }},
//     ()=>{},
//     ()=>{}
//   )
// }
 }
