import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import {Product} from 'src/app/_model/Product';
import { Productservices } from 'src/app/_services/product.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product ;
  //@Output() itemadd =new EventEmitter<Product>()
 
  constructor(private productservice: Productservices) { 
  
  }

  ngOnInit(): void {
  }
getprice():number{
  return this.product.discount? this.product.price-this.product.discount:this.product.price
}
addtocart():void{
this.productservice.productadd.emit(this.product)
}
}
