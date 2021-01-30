"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var HeaderComponent = /** @class */ (function () {
    //productservice= new Productservices()
    function HeaderComponent(productservice) {
        this.productservice = productservice;
        this.cartarray = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productservice.productadd.subscribe(function (res) {
            _this.cartarray.push(res);
        }, function (err) {
            console.log(err);
        }, function (completed) {
            alert("completed");
        });
    };
    HeaderComponent.prototype.totalamount = function () {
        var total = 0;
        for (var index = 0; index < this.cartarray.length; index++) {
            var product = this.cartarray[index];
            total += product.discount ? product.price - product.discount : product.discount;
        }
        return total;
    };
    HeaderComponent.prototype.removeitem = function (tag) {
        var index = this.cartarray.indexOf(tag.value);
        this.cartarray.splice(index, 1);
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
