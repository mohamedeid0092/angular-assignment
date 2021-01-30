"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./layouts/header/header.component");
var footer_component_1 = require("./layouts/footer/footer.component");
var menu_component_1 = require("./layouts/menu/menu.component");
var product_service_1 = require("./_services/product.service");
var login_component_1 = require("./auth/login/login.component");
var register_component_1 = require("./auth/register/register.component");
var forms_1 = require("@angular/forms");
var payment_type_service_1 = require("./_services/payment-type.service");
var product_category_service_1 = require("./_services/product-category.service");
var http_1 = require("@angular/common/http");
var shared_module_1 = require("./shared/dropdown/shared.module");
var home_component_1 = require("./home/home.component");
var my_interceptor_service_1 = require("./_services/my-interceptor.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                menu_component_1.MenuComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                home_component_1.HomeComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                shared_module_1.SharedModule
            ],
            providers: [product_service_1.Productservices, payment_type_service_1.PaymentTypeService, product_category_service_1.ProductCategoryService, { provide: http_1.HTTP_INTERCEPTORS, useClass: my_interceptor_service_1.MyInterceptorService, multi: true }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
