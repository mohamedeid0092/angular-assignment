import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_model/Product';
import { Productservices } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
product
relatedproducts:Product[];
  constructor(private productservices : Productservices,private activetedroute:ActivatedRoute) { }

  ngOnInit(): void {
    let id;
   //this.relatedproducts= this.productservices.getproducts().slice(4,8)
   this.activetedroute.params.subscribe(
     (params)=>{
       id= params.id
       this.productservices.getproductbyId(id).subscribe(
        (res)=>{this.product=res
          this.productservices.getproducts().subscribe(
            (res)=>{this.relatedproducts=res['product'].slice(3,7)},
            ()=>{}
           )
        },
        ()=>{},
        ()=>{}

       )
       
     },
     ()=>{},
     ()=>{}
   )
  
   
  }

}
