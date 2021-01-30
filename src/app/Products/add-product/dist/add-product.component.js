"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddProductComponent = void 0;
var core_1 = require("@angular/core");
var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(activatedRoute, paymenttypeservice, productcategoryservice, productservice, router) {
        this.activatedRoute = activatedRoute;
        this.paymenttypeservice = paymenttypeservice;
        this.productcategoryservice = productcategoryservice;
        this.productservice = productservice;
        this.router = router;
        this.product = { _id: "", data: [{}], paymentTypes: [], tags: [], category: [] };
        this.paymentstype = [];
        this.editmode = false;
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editmode = this.activatedRoute.snapshot.url[1] && this.activatedRoute.snapshot.url[1].path === "edit" && true;
        if (this.editmode) {
            var id = this.activatedRoute.snapshot.params.id;
            this.product = this.productservice.getproductbyId(+id);
            console.log(this.product);
        }
        this.paymentstype = this.paymenttypeservice.getallpayments();
        this.productcategoryservice.getallcategorys().subscribe(function (res) { _this.productcategory = res; }, function () { }, function () { });
    };
    AddProductComponent.prototype.onsubmit = function (form) {
        var _this = this;
        // for(let i=0;i<this.paymentstype.length;i++){
        //  if(form.value['check_'+i])
        //  this.product.paymentTypes.push(this.paymentstype[i])
        //}
        this.productservice.addproduct(this.product).subscribe(function (res) {
            _this.router.navigate(['/product', 'listing']);
        }, function () { }, function () { });
    };
    AddProductComponent.prototype.tagadd = function (tag) {
        this.product.tags.push({ name: tag.value });
        tag.value = "";
    };
    AddProductComponent.prototype.tagremove = function (tag) {
        var index = this.product.tags.indexOf(tag.value);
        this.product.tags.splice(index, 1);
    };
    AddProductComponent = __decorate([
        core_1.Component({
            selector: 'app-add-product',
            templateUrl: './add-product.component.html',
            styleUrls: ['./add-product.component.scss']
        })
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;
//
