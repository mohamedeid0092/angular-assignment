import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentType } from 'src/app/_model/payment-type';
import { Product } from 'src/app/_model/Product';
import { Productcategory } from 'src/app/_model/product-category';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { ProductCategoryService } from 'src/app/_services/product-category.service';
import { Productservices } from 'src/app/_services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product:Product={_id:"",data:[{}],paymentTypes:[],tags:[],category:[]};
paymentstype:PaymentType[]=[]
productcategory
editmode:boolean =false
  constructor(private activatedRoute: ActivatedRoute,
    private paymenttypeservice:PaymentTypeService,
    private productcategoryservice:ProductCategoryService,private productservice:Productservices
    ,private router:Router) { }

  ngOnInit(): void {
    this.editmode = this.activatedRoute.snapshot.url[1]&& this.activatedRoute.snapshot.url[1].path ==="edit"&&true;
    if(this.editmode){
      const id = this.activatedRoute.snapshot.params.id;
      this.product=this.productservice.getproductbyId(+id)
    console.log(this.product)}
    this.paymentstype= this.paymenttypeservice.getallpayments()
    this.productcategoryservice.getallcategorys().subscribe(
      (res)=>{this.productcategory=res},
      ()=>{},
      ()=>{}
    )
  }
onsubmit(form){
 // for(let i=0;i<this.paymentstype.length;i++){
  //  if(form.value['check_'+i])
  //  this.product.paymentTypes.push(this.paymentstype[i])
  //}
  this.productservice.addproduct(this.product).subscribe(
    (res)=>{
      this.router.navigate(['/product','listing'])
    },
    ()=>{},
    ()=>{}
  )
}
tagadd(tag){
this.product.tags.push({name:tag.value})
tag.value="";
}
tagremove(tag){
  let index = this.product.tags.indexOf(tag.value)
  this.product.tags.splice(index,1)
}
}
//
