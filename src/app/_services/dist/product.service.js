"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Productservices = void 0;
var core_1 = require("@angular/core");
var Productservices = /** @class */ (function () {
    function Productservices(httpClient) {
        this.httpClient = httpClient;
        this.productadd = new core_1.EventEmitter();
        this.baseUrl = 'https://mearn-stack-backend-test.herokuapp.com/';
    }
    ;
    Productservices.prototype.getproducts = function () {
        return this.httpClient.get(this.baseUrl + "product");
        //return this.products.slice();
    };
    Productservices.prototype.getproductbyId = function (id) {
        return this.httpClient.get(this.baseUrl + "product/" + id);
    };
    Productservices.prototype.addproduct = function (product) {
        // const id = this.products.length;
        // const prod : Product={id,data:product.data,price:product.price,discount:product.discount,imagesUrls:product.imagesUrls,category:product.category,paymentTypes:product.paymentTypes
        //,tags:product.tags}
        // this.products.push(prod);
        var body = {
            discount: product.discount,
            price: product.price,
            imagesUrls: product.imagesUrls,
            data: product.data,
            categoryId: product.category[0]._id
        };
        //    const token = localStorage.getItem('token')
        //    const headers = new HttpHeaders({
        //        authorization:token
        //    })
        return this.httpClient.post(this.baseUrl + "product/add", body);
    };
    Productservices.prototype.updateproduct = function (product) {
        var i = this.products.findIndex(function (p) { return p.id === product.id; });
        this.products[i] = { _id: product._id, id: product.id, data: product.data, price: product.price, discount: product.discount, imagesUrls: product.imagesUrls, category: product.category, paymentTypes: product.paymentTypes,
            tags: product.tags };
    };
    Productservices.prototype.deleteproduct = function (id) {
        var index = this.products.findIndex(function (p) { return p.id == id; });
        this.products.slice(index, 1);
    };
    Productservices.prototype.searchbyname = function (pro) {
        return this.products.filter(function (p) { return p.data[0].name.toLowerCase().includes(pro.toLowerCase()); });
    };
    Productservices.prototype.selectprice = function () {
        return this.products.filter(function (p) { return p.price; });
    };
    Productservices = __decorate([
        core_1.Injectable()
    ], Productservices);
    return Productservices;
}());
exports.Productservices = Productservices;
