"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductListingComponent = void 0;
var core_1 = require("@angular/core");
var ProductListingComponent = /** @class */ (function () {
    function ProductListingComponent(productservice, productcategoryservice) {
        this.productservice = productservice;
        this.productcategoryservice = productcategoryservice;
        this.productcategory = [];
        // @Output() productadd = new EventEmitter<Product>()
        this.pagenumber = [];
        this.pagesize = 9;
        this.currentpg = 0;
    }
    ProductListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productservice.getproducts().subscribe(function (res) {
            _this.products = res['product'];
            _this.pagecalculation(res['numberOfProducts']);
        }, function (err) { console.log(err); }, function () { });
    };
    ProductListingComponent.prototype.pagecalculation = function (length) {
        this.pagenumber = [];
        for (var index = 0; index < length / this.pagesize; index++) {
            this.pagenumber.push(index + 1);
        }
    };
    ProductListingComponent.prototype.subscribe = function (obj) {
        this.productservice.productadd.emit(obj);
    };
    ProductListingComponent.prototype.search = function (searchinput) {
        this.products = this.productservice.searchbyname(searchinput.value);
        //this.pagecalculation()
    };
    ProductListingComponent.prototype.select = function (value) {
        switch (value) {
            case "2":
                this.products.sort(function (a, b) { return a.price - b.price; });
                break;
            case "3":
                this.products.sort(function (a, b) { return b.price - a.price; });
                break;
            case "4":
                this.products.sort(function (a, b) { return a.data[0].name.localeCompare(b.data[0].name); });
                break;
        }
    };
    ProductListingComponent = __decorate([
        core_1.Component({
            selector: 'app-product-listing',
            templateUrl: './product-listing.component.html',
            styleUrls: ['./product-listing.component.scss']
        })
    ], ProductListingComponent);
    return ProductListingComponent;
}());
exports.ProductListingComponent = ProductListingComponent;
