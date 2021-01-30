"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var string_pipe_pipe_1 = require("../pipes/string-pipe.pipe");
var auth_guard_service_1 = require("../_services/auth-guard.service");
var add_product_component_1 = require("./add-product/add-product.component");
var product_details_component_1 = require("./product-details/product-details.component");
var product_item_component_1 = require("./product-item/product-item.component");
var product_listing_component_1 = require("./product-listing/product-listing.component");
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            declarations: [
                product_item_component_1.ProductItemComponent,
                product_listing_component_1.ProductListingComponent,
                add_product_component_1.AddProductComponent,
                product_details_component_1.ProductDetailsComponent,
                string_pipe_pipe_1.StringPipePipe,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild([
                    { path: '', children: [
                            { path: '', component: product_listing_component_1.ProductListingComponent },
                            { path: "add", component: add_product_component_1.AddProductComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
                            { path: "edit/:id", component: add_product_component_1.AddProductComponent },
                            { path: "details/:id", component: product_details_component_1.ProductDetailsComponent },
                        ] },
                ])
            ],
            exports: [],
            providers: []
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
