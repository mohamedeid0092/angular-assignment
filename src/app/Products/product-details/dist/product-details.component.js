"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductDetailsComponent = void 0;
var core_1 = require("@angular/core");
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(productservices, activetedroute) {
        this.productservices = productservices;
        this.activetedroute = activetedroute;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        //this.relatedproducts= this.productservices.getproducts().slice(4,8)
        this.activetedroute.params.subscribe(function (params) {
            id = params.id;
            _this.productservices.getproductbyId(id).subscribe(function (res) {
                _this.product = res;
                _this.productservices.getproducts().subscribe(function (res) { _this.relatedproducts = res['product'].slice(3, 7); }, function () { });
            }, function () { }, function () { });
        }, function () { }, function () { });
    };
    ProductDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-product-details',
            templateUrl: './product-details.component.html',
            styleUrls: ['./product-details.component.scss']
        })
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
