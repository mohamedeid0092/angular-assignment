import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productcategory } from '../_model/product-category';

@Injectable()
export class ProductCategoryService {
  baseUrl = 'https://mearn-stack-backend-test.herokuapp.com/'
  productcategory:Productcategory[]=[
    
   // {id:2,name:"Automotive"},
    //{id:3,name:"Baby"},
    //{id:4,name:"Books"},
    //{id:5,name:"Eletronics"},
    //{id:6,name:"Women's Fashion"},
    //{id:7,name:"Men's Fashion"},
    //{id:8,name:"Health & Household"},
    //{id:9,name:"Home & Kitchen"},
    //{id:10,name:"Military Accessories"},
    //{id:11,name:"Movies & Television"},
    //{id:12,name:"Sports & Outdoors"},
    //{id:13,name:"Tools & Home Improvement"},
    //{id:14,name:"Toys & Games"},
  ]
  
  constructor(private httpClient: HttpClient) { }
  getallcategorys(){
    return this.httpClient.get(`${this.baseUrl}category`)
    }
}
