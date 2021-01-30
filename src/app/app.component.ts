import { Component } from '@angular/core';
import { Product } from './_model/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productsarr: Product[]=[];
  addtoheader(pro:Product):void{
this.productsarr.push(pro)
  }
}
