import { Injectable } from '@angular/core';
import { PaymentType } from '../_model/payment-type';

@Injectable()
export class PaymentTypeService {
paymentstype:PaymentType[]=[
  {id:1,name:"Direct Bank Transfare"},
  {id:2,name:"Cheque Payment"},
  {id:3,name:"Paypal"},
  {id:4,name:"Visa"},
  {id:5,name:"Mastercard"},
  {id:6,name:"On Dilivery"},
]
getallpayments():PaymentType[]{
return this.paymentstype.slice()
}
  constructor() { }
}
