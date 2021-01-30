import { PaymentType } from "./payment-type";
import { Productcategory } from "./product-category";
import { Productlang } from "./product-lang";
import { Tag } from "./tags";

export interface Product{
    _id:string;
    id?:number;
   data: Productlang[];
    price?:number;
    discount?:number;
    imagesUrls?:string[];
paymentTypes?:PaymentType[];
category?:Productcategory[];
tags?:Tag[];
}