import {EventEmitter, Injectable}from '@angular/core'
import { Product } from "../_model/Product";
import{HttpClient, HttpHeaders}from "@angular/common/http";
@Injectable()
export class Productservices{
  private  products:Product[];

  ;
  productadd = new EventEmitter<Product>()
 baseUrl = 'https://mearn-stack-backend-test.herokuapp.com/'

 constructor(private httpClient: HttpClient){}
    getproducts(){
       return this.httpClient.get(`${this.baseUrl}product`)
//return this.products.slice();
    }
    getproductbyId(id){
        return this.httpClient.get(`${this.baseUrl}product/${id}`)
    }
    addproduct(product:Product){
       // const id = this.products.length;
       // const prod : Product={id,data:product.data,price:product.price,discount:product.discount,imagesUrls:product.imagesUrls,category:product.category,paymentTypes:product.paymentTypes
        //,tags:product.tags}
       // this.products.push(prod);
       let body={
           discount:product.discount,
           price :product.price,
           imagesUrls:product.imagesUrls,
           data:product.data,
           categoryId: product.category[0]._id,
       };
    //    const token = localStorage.getItem('token')
    //    const headers = new HttpHeaders({
    //        authorization:token
    //    })
      return this.httpClient.post(`${this.baseUrl}product/add`,body);
    }
    updateproduct(product:Product){
        const i =this.products.findIndex(p => p.id===product.id)
        
        this.products[i]={_id:product._id,id:product.id,data:product.data,price:product.price,discount:product.discount,imagesUrls:product.imagesUrls,category:product.category,paymentTypes:product.paymentTypes
           ,tags:product.tags}

    }
    deleteproduct(id:number){
        const index =this.products.findIndex(p=>p.id==id);
        this.products.slice(index,1)
    }
    searchbyname(pro :string){
    return this.products.filter(p=>p.data[0].name.toLowerCase().includes(pro.toLowerCase()))
    }
    selectprice(){
        return this.products.filter(p=>p.price)
    }
}