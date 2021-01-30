"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductCategoryService = void 0;
var core_1 = require("@angular/core");
var ProductCategoryService = /** @class */ (function () {
    function ProductCategoryService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'https://mearn-stack-backend-test.herokuapp.com/';
        this.productcategory = [
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
        ];
    }
    ProductCategoryService.prototype.getallcategorys = function () {
        return this.httpClient.get(this.baseUrl + "category");
    };
    ProductCategoryService = __decorate([
        core_1.Injectable()
    ], ProductCategoryService);
    return ProductCategoryService;
}());
exports.ProductCategoryService = ProductCategoryService;
