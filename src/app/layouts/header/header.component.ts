import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/Product';
import { Productservices } from 'src/app/_services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
cartarray : Product[]=[]
//productservice= new Productservices()
  constructor(private productservice:Productservices) { }

  ngOnInit(): void {
    this.productservice.productadd.subscribe(
      (res)=>{
        this.cartarray.push(res)
      },
      (err)=>{
        console.log(err)
      },
      (completed)=>{
      alert("completed")
      }
    )
  }
totalamount():number{
  let total=0
for(let index =0;index<this.cartarray.length;index++){
  const product= this .cartarray[index];
  total+=product.discount?product.price-product.discount:product.discount;
}
return total
}
removeitem(tag){
  let index = this.cartarray.indexOf(tag.value)
  this.cartarray.splice(index,1)
}
}
