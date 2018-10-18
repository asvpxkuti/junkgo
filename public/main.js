(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/routes */ "./src/app/routes/routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_management_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/management/management.component */ "./src/app/pages/management/management.component.ts");
/* harmony import */ var _pages_residents_residents_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/residents/residents.component */ "./src/app/pages/residents/residents.component.ts");
/* harmony import */ var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/contact-us/contact-us.component */ "./src/app/pages/contact-us/contact-us.component.ts");
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/header/header.component */ "./src/app/pages/header/header.component.ts");
/* harmony import */ var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/footer/footer.component */ "./src/app/pages/footer/footer.component.ts");
/* harmony import */ var _pages_service_service_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/service/service.component */ "./src/app/pages/service/service.component.ts");
/* harmony import */ var _pages_success_success_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/success/success.component */ "./src/app/pages/success/success.component.ts");
/* harmony import */ var _filters_phone_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./filters/phone.pipe */ "./src/app/filters/phone.pipe.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _directives_phone_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/phone.directive */ "./src/app/directives/phone.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _pages_management_management_component__WEBPACK_IMPORTED_MODULE_8__["ManagementComponent"],
                _pages_residents_residents_component__WEBPACK_IMPORTED_MODULE_9__["ResidentsComponent"],
                _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__["ContactUsComponent"],
                _pages_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _pages_service_service_component__WEBPACK_IMPORTED_MODULE_13__["ServiceComponent"],
                _pages_success_success_component__WEBPACK_IMPORTED_MODULE_14__["SuccessComponent"],
                _filters_phone_pipe__WEBPACK_IMPORTED_MODULE_15__["PhonePipe"],
                _directives_phone_directive__WEBPACK_IMPORTED_MODULE_18__["PhoneDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes_routes__WEBPACK_IMPORTED_MODULE_5__["routes"])
            ],
            providers: [_filters_phone_pipe__WEBPACK_IMPORTED_MODULE_15__["PhonePipe"], _services_customer_service__WEBPACK_IMPORTED_MODULE_16__["CustomerService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_17__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/phone.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/directives/phone.directive.ts ***!
  \***********************************************/
/*! exports provided: PhoneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneDirective", function() { return PhoneDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _filters_phone_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filters/phone.pipe */ "./src/app/filters/phone.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhoneDirective = /** @class */ (function () {
    function PhoneDirective(el, phonePipe, ngModel) {
        this.el = el;
        this.phonePipe = phonePipe;
        this.ngModel = ngModel;
        if (!this.ngModel.options) {
            this.ngModel.options = {};
        }
        this.elem = el.nativeElement;
    }
    PhoneDirective.prototype.onBlur = function (value) {
        if (value == '') {
            this.ngModel.reset();
            //this.elem.value= '';
        }
        else if (this.el.nativeElement.id == "contactPhone") {
            this.elem.value = this.formatPhoneNumber(value);
        }
    };
    PhoneDirective.prototype.onFocus = function () {
        if (this.el.nativeElement.id == "contactPhone") {
            this.ngModel.reset();
        }
    };
    PhoneDirective.prototype.formatPhoneNumber = function (input) {
        if (input.length === 10) {
            return input.substring(0, 3) + '-' + input.substring(3, 6) + '-' + input.substring(6, 10);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("blur", ["$event.target.value"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PhoneDirective.prototype, "onBlur", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("focus", ["$event.target.value"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PhoneDirective.prototype, "onFocus", null);
    PhoneDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ngModel][apPhone]',
            providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _filters_phone_pipe__WEBPACK_IMPORTED_MODULE_2__["PhonePipe"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]])
    ], PhoneDirective);
    return PhoneDirective;
}());



/***/ }),

/***/ "./src/app/filters/phone.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/filters/phone.pipe.ts ***!
  \***************************************/
/*! exports provided: PhonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePipe", function() { return PhonePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PhonePipe = /** @class */ (function () {
    function PhonePipe() {
    }
    PhonePipe.prototype.transform = function (value, args) {
        if (typeof value == 'undefined') {
            return;
        }
        else if (value && typeof value == 'string') {
            this.format(value);
        }
        return this.formattedPhoneNum;
    };
    PhonePipe.prototype.format = function (input) {
        if (input.length === 10) {
            this.formattedPhoneNum = input.substring(0, 3) + '-' + input.substring(3, 6) + '-' + input.substring(6, 10);
        }
    };
    PhonePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'phone'
        })
    ], PhonePipe);
    return PhonePipe;
}());



/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid content-font\">\n  <div class=\"row text-center\">\n    <div class=\"col-md-12 content-padding\">\n      <h1>Contact Us</h1>\n    </div>\n  </div>\n  <div class=\"row text-center\">\n    <div class=\"col-md-6\">\n      <p>Email:</p>\n      <p>junkgobutler@gmail.com</p>\n    </div>\n    <div class=\"col-md-6\">\n      <p>Call:</p>\n      <p>(647) 818-7972</p>\n    </div>\n  </div>\n  <form #contactForm=\"ngForm\" novalidate>\n    <div class=\"row text-center\">\n        <div class=\"col-md-6\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" #contactName=\"ngModel\" appUpdateOnblur [(ngModel)]=\"contactInfo.name\"   id=\"contactName\" name=\"contactName\" size=\"30\" placeholder=\"Your name\" required>\n                <div class=\"alert alert-warning\" *ngIf=\"contactName.errors?.required && contactName.touched\">\n                  Name is required.\n                </div>\n                <div class=\"alert alert-warning\" *ngIf=\"contactName.errors?.pattern && contactName.touched\">\n                  Name cannot be a letter.\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <input type=\"tel\" class=\"form-control\" #contactPhone=\"ngModel\" [(ngModel)]=\"contactInfo.phoneNumber\"   id=\"contactPhone\" name=\"contactPhone\" size=\"13\" minlength=\"10\" placeholder=\"123-456-7890\" [pattern]=\"phonePattern\" required>\n                <div class=\"alert alert-warning\" *ngIf=\"contactPhone.errors?.required && contactPhone.touched\">\n                  Phone number is required.\n                </div>\n                <div class=\"alert alert-warning\" *ngIf=\"contactPhone.errors?.pattern && contactPhone.touched\">\n                  Invalid Entry.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" #contactEmail=\"ngModel\" appUpdateOnblur [(ngModel)]=\"contactInfo.email\"   id=\"contactEmail\" name=\"contactEmail\"  placeholder=\"Enter Email address\" required>\n                <div class=\"alert alert-warning\" *ngIf=\"contactEmail.errors?.required && contactEmail.touched\">\n                  Email is required.\n                </div>\n                <div class=\"alert alert-warning\" *ngIf=\"contactEmail.errors?.pattern && contactEmail.touched\">\n                  Invalid email.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <textarea #contactMessage=\"ngModel\" [(ngModel)]=\"contactInfo.message\"  class=\"form-control\" name=\"contactMessage\" id=\"contactMessage\" cols=\"30\" rows=\"10\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <button [disabled]=\"contactForm.invalid\" type=\"submit\" (click)=\"bookService()\" class=\"btn button-brown btn-block\">Book a meeting</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <img class=\"img-fluid\" src=\"../../../assets/pexels-photo-544117.jpeg\" alt=\"book appointment image\">\n        </div>\n    </div>\n  </form>\n  <div class=\"row content-padding\">\n    <div class=\"col-md-4 contact-us-green\">\n      <h2>Let Us</h2>\n    </div>\n    <div class=\"col-md-8 contact-us-grey\">\n      <p>Haul your garbage down the stairs</p>\n      <p>Deal with the yucky on site dumpster</p>\n      <p>Take late night trips to the dumpster</p>\n      <p>Take your trash, Rain or shine</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(_http, router, cookieService, customerService) {
        this._http = _http;
        this.router = router;
        this.cookieService = cookieService;
        this.customerService = customerService;
        this.emailPattern = '([a-zA-Z0-9]+)([\\_\\.\\-{1}])?([a-zA-Z0-9]+)\\@([a-zA-Z0-9]+)([\\.])([a-zA-Z\\.]+)';
        this.namePattern = '^[a-zA-ZùûüÿàâæçéèêëïîôÙÛÜÀÂÆÇÉÈÊËÏÎÔ \'-]+$';
        this.phonePattern = '[0-9]{3}-[0-9]{3}-[0-9]{4}';
        this.contactInfo = {
            email: '',
            name: '',
            message: '',
            phoneNumber: ''
        };
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent.prototype.disableEnterKey = function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            return false;
        }
    };
    ContactUsComponent.prototype.bookService = function () {
        var _this = this;
        this.data_ = {
            'name': this.contactInfo.name,
            'email': this.contactInfo['email'].substring(0, this.contactInfo['email'].indexOf('@')) + '*******',
            'message': this.contactInfo.message,
            'phone': this.contactInfo.phoneNumber
        };
        this.dataOriginal = {
            'name': this.contactInfo.name,
            'email': this.contactInfo.email,
            'phone': this.contactInfo.phoneNumber,
            'message': this.contactInfo.message
        };
        this.customerData = JSON.stringify(this.data_);
        this.customerService.saveClient(this.dataOriginal).subscribe(function (data) {
            console.log('saving data:' + data);
        });
        this.customerService.sendClientData(this.data_).subscribe(function (data) {
            console.log(_this.data_);
            if (data) {
                console.log("successfully sent email");
                _this.router.navigate(['success']);
            }
            else {
                console.log("opps something went wrong");
            }
        });
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/pages/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/pages/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"], _services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/pages/footer/footer.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/footer/footer.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/footer/footer.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/footer/footer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/pages/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/pages/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/header/header.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-white\">\n    <a class=\"navbar-brand\" href=\"/home\">\n      <img class=\"img-fluid\" src=\"../../../assets/junkgologo.png\" alt=\"Logo\" style=\"width:100px;\">\n    </a>\n    <button class=\"navbar-toggler custom-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseNavbar\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div  class=\"collapse navbar-collapse\" id=\"collapseNavbar\">\n      <ul class=\"navbar-nav w-100 justify-content-center\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/home\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/services\">Service</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/contact\">Contact Us</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/resident\">Residents</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"  href=\"/management\">Management</a>\n        </li>\n      </ul>\n    </div>\n</nav>\n\n\n"

/***/ }),

/***/ "./src/app/pages/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/pages/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/pages/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center content-font\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <img class=\"img-fluid\" src=\"../../../assets/pexels-photo-164338.jpeg\" alt=\"home image\">\n    </div>\n  </div>\n  <div class=\"row content-padding\">\n    <div class=\"col-md-12\">\n      <hr>\n      <h2 class=\"header-text-green\">Who we are</h2>\n      <hr>\n      <p>Junk-Go Butler offers doorstep trash collection amenity the adds value to multifamily\n        properties including townhomes, condominiums and senior living communities.</p>\n    </div>\n  </div>\n  <div class=\"row header-h1\">\n    <div class=\"col-md-12\">\n      <hr>\n      <h2 class=\"header-text-green\">How it works?</h2>\n      <hr>\n    </div>\n  </div>\n  <div class=\"row content-padding-grey\">\n    <div class=\"col-md-4\">\n      <p>Residents simply leave trash at their doorstep at designated time frame</p>\n    </div>\n    <div class=\"col-md-4\">\n      <p>A friendly uniformed butler picks up</p>\n    </div>\n    <div class=\"col-md-4\">\n      <p>Residents relax and have a peace of mind</p>\n    </div>\n  </div>\n  <div class=\"row header-basic\">\n    <div class=\"col-md-12  header-text-green\">\n      <h1 >Voted #1 amenity in North America</h1>\n    </div>\n  </div>\n  <div class=\"row content-green content-padding\">\n    <div class=\"col-md-4\">\n      <img class=\"icon-img-responsive\" src=\"../../../assets/icon2.png\" alt=\"reliable\">\n      <p>Convenient and Reliable</p>\n    </div>\n    <div class=\"col-md-4\">\n      <img class=\"icon-img-responsive\" src=\"../../../assets/icon6.png\" alt=\"\">\n      <p>Extra eyes=Extra security</p>\n    </div>\n    <div class=\"col-md-4\">\n      <img class=\"icon-img-responsive\" src=\"../../../assets/icon1.png\" alt=\"\">\n      <p>Clean property image</p>\n    </div>\n  </div>\n  <div class=\"row content-green content-padding\">\n    <div class=\"col-md-4\">\n      <img class=\"icon-img-responsive\" src=\"../../../assets/icon5.png\" alt=\"\">\n      <p>Guaranteed ancilliary income stream</p>\n    </div>\n    <div class=\"col-md-4\">\n      <img class=\"icon-img-responsive\" src=\"../../../assets/icon4.png\" alt=\"\">\n      <p>Easy to use recycle program</p>\n    </div>\n    <div class=\"col-md-4\">\n      <img class=\"icon-img-responsive\" src=\"../../../assets/icon4.png\" alt=\"\">\n      <p>Easy to use recycle program</p>\n    </div>\n  </div>\n  <div class=\"row content-grey-bg\">\n    <div class=\"col-md-12\">\n      <p>Junk-Go Butler services are offered to your property’s management company as an\n        amenity for your entire property or as a concierge service marketed directly to your\n        residents.</p>\n      <a href=\"/contact\"><button class=\"btn button-brown\">Sign up today and enjoy two weeks free trial</button></a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(customerService) {
        this.customerService = customerService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.customerService.fetchToken().subscribe();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/management/management.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/management/management.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/management/management.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/management/management.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center content-font\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <img class=\"img-fluid\" src=\"../../../assets/pexels-photo-243722.jpeg\" alt=\"management image\">\n    </div>\n  </div>\n  <div class=\"row content-padding content-darkgreen\">\n    <div class=\"col-md-12\">\n      <hr>\n      <h1>Junk-Go Butler Services</h1>\n      <hr>\n      <p>Our traditional model is offering door-to-door trash and recycling collection up to five\n        nights a week. Residents simple leave bagged waste in containers outside their doorstep\n        and our friendly uniformed butler picks it up to the on site dumpsters.</p>\n      <br>\n      <p>We also offer a unique and flexible trash collection model to fit property management needs.\n        Residents do not leave the trash outside of the door. Instead, we communicate via SMS text on\n        when their trash will be picked up on that day. We send text 20 – 30 minutes before arrival to\n        allow residents to prepare for our arrival. Our bulter will come to the door to collect their trash.</p>\n      <br>\n      <p>As part of our service, dumpster areas are cleaned nightly and also, litter patrols are conducted\n        to to keep the grounds and common areas clean and debris free.</p>\n      <br>\n      <p>We find that many complexes have their dumpsters emptied too regularly. By monitoring\n        these stations, Junk-Go can make operational suggestions to reduce costs to your complex.</p>\n      <br>\n      <p>Junk-Go is always willing to lend a hand to distribute monthly flyers or calendars to your\n        residents’ doors if you wish.</p>\n      <br>\n      <p>Junk-Go Butler makes sure you and your residents get the premium service you expect.</p>\n    </div>\n  </div>\n  <div class=\"row content-grey-bg\">\n    <div class=\"col-md-12\">\n      <hr>\n      <h1 class=\"header-text-green\">Why management love us</h1>\n      <hr>\n      <p>Quick and easy to implement\n        Cleaner community. property hence good image\n        Maintenance staff does not need to be picking up trash. Junk-Go Butler services allow them\n        to focus on big repairs, not a time-consuming task.</p>\n      <br>\n      <p>Crime deterrent. With our butlers on site, there's a set of extra eyes hence extra security.\n        Guaranteed ancillary income stream. brings positive cash-flow with zero upfront investment</p>\n      <a href=\"/contact\"><button class=\"btn button-brown btn-block\">Sign up today and enjoy two weeks free trial</button></a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/management/management.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/management/management.component.ts ***!
  \**********************************************************/
/*! exports provided: ManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementComponent", function() { return ManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManagementComponent = /** @class */ (function () {
    function ManagementComponent() {
    }
    ManagementComponent.prototype.ngOnInit = function () {
    };
    ManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-management',
            template: __webpack_require__(/*! ./management.component.html */ "./src/app/pages/management/management.component.html"),
            styles: [__webpack_require__(/*! ./management.component.css */ "./src/app/pages/management/management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManagementComponent);
    return ManagementComponent;
}());



/***/ }),

/***/ "./src/app/pages/residents/residents.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/residents/residents.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/residents/residents.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/residents/residents.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid content-font text-center\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <img class=\"img-fluid\" src=\"../../../assets/pexels-photo-1073133.jpeg\" alt=\"residents image\">\n    </div>\n  </div>\n  <div class=\"row content-padding content-darkgreen\">\n    <div class=\"col-md-12 \">\n      <p>We enjoy our customers and offer you a variety of affordable subscription plans that benefit\n        your stay at your residential community!</p>\n    </div>\n  </div>\n <!-- <canvas id=\"myCanvas\" width=\"200\" height=\"200\"></canvas>-->\n  <div class=\"row content-padding\">\n\n    <div class=\"col-md-4\">\n      <div>\n        <h1>$34.99</h1>\n        <p>MONTH TO MONTH</p>\n      </div>\n      <br>\n      <p>Pick up 3 times a week</p>\n      <br>\n      <p>Can transfer services to new address</p>\n      <p>Can share one service request per month to a friend or a neighbour</p>\n      <p>Discounts for moving and bulk-item removed</p>\n    </div>\n    <div class=\"col-md-4\">\n      <div>\n        <h1>$29.99</h1>\n        <p>3 MONTH SUBSCRIPTION</p>\n      </div>\n\n      <br>\n      <p>Pick up 3 times a week</p>\n      <br>\n      <p>Can transfer services to new address</p>\n      <p>Can share one service request per month to a friend or a neighbour</p>\n      <p>Discounts for moving and bulk-item removed</p>\n    </div>\n    <div class=\"col-md-4\">\n      <div>\n        <h1>$24.99</h1>\n        <p>6 MONTH SUBSCRIPTION</p>\n      </div>\n      <br>\n      <p>Pick up 5 times a week</p>\n      <br>\n      <p>Can transfer services to new address</p>\n      <p>Can share one service request per month to a friend or a neighbour</p>\n      <p>Discounts for moving and bulk-item removed</p>\n    </div>\n  </div>\n  <div class=\"row content-padding\">\n    <div class=\"col-md-4\">\n      <p>Register and subscribe to our\n        service on our and schedule\n        your trash pick up</p>\n    </div>\n    <div class=\"col-md-4\">\n      <p>Residents will recieve a text\n        message 20-30 minutes before\n        arrival to prerpare for trash pick\n        up</p>\n    </div>\n    <div class=\"col-md-4\">\n      <p>Our friendly, uniforrmed\n        butler will come to your\n        door to collect your disposables</p>\n    </div>\n  </div>\n  <div class=\"row content-padding-grey\">\n    <div class=\"col-md-12\">\n      <hr>\n      <h1 class=\"content-green\">Why Residents love us</h1>\n      <hr>\n      <p>It is reliable and extremely convenient.</p>\n      <p>It is an easy to use recycle program.</p>\n      <p>Waste is removed rain or shine and on time.</p>\n      <p>Unlike the gym or pool, all residents take advantage of this service.</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/residents/residents.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/residents/residents.component.ts ***!
  \********************************************************/
/*! exports provided: ResidentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidentsComponent", function() { return ResidentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResidentsComponent = /** @class */ (function () {
    function ResidentsComponent() {
    }
    ResidentsComponent.prototype.ngOnInit = function () {
        /*this.draw();*/
    };
    ResidentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-residents',
            template: __webpack_require__(/*! ./residents.component.html */ "./src/app/pages/residents/residents.component.html"),
            styles: [__webpack_require__(/*! ./residents.component.css */ "./src/app/pages/residents/residents.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResidentsComponent);
    return ResidentsComponent;
}());



/***/ }),

/***/ "./src/app/pages/service/service.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/service/service.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/service/service.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/service/service.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <img class=\"img-fluid\" src=\"../../../assets/junko-web.jpg\" alt=\"Junk Go\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/service/service.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/service/service.component.ts ***!
  \****************************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    ServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/pages/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.css */ "./src/app/pages/service/service.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/pages/success/success.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/success/success.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mani-section {\r\n  padding: 90px;\r\n  background-color: #ffffff;\r\n}\r\n\r\n@media only screen and (max-width:375px){\r\n  .section{\r\n    padding: 0px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width:414px){\r\n  .section{\r\n    padding: 0px;\r\n  }\r\n}\r\n\r\n/*\r\n.details{\r\n    padding-left: 300px;\r\n}*/\r\n"

/***/ }),

/***/ "./src/app/pages/success/success.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/success/success.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center content-font\">\n  <div class=\"row content-padding\">\n    <div class=\"col-md-12\">\n      <h2>Congratulations Appointment Booked</h2>\n      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>\n      <span><a href=\"/home\">Click here to return to home page</a></span>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/success/success.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/success/success.component.ts ***!
  \****************************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuccessComponent = /** @class */ (function () {
    function SuccessComponent() {
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! ./success.component.html */ "./src/app/pages/success/success.component.html"),
            styles: [__webpack_require__(/*! ./success.component.css */ "./src/app/pages/success/success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/app/routes/routes.ts":
/*!**********************************!*\
  !*** ./src/app/routes/routes.ts ***!
  \**********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_management_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/management/management.component */ "./src/app/pages/management/management.component.ts");
/* harmony import */ var _pages_service_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/service/service.component */ "./src/app/pages/service/service.component.ts");
/* harmony import */ var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/contact-us/contact-us.component */ "./src/app/pages/contact-us/contact-us.component.ts");
/* harmony import */ var _pages_residents_residents_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/residents/residents.component */ "./src/app/pages/residents/residents.component.ts");
/* harmony import */ var _pages_success_success_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/success/success.component */ "./src/app/pages/success/success.component.ts");






var routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'management', component: _pages_management_management_component__WEBPACK_IMPORTED_MODULE_1__["ManagementComponent"] },
    { path: 'services', component: _pages_service_service_component__WEBPACK_IMPORTED_MODULE_2__["ServiceComponent"] },
    { path: 'contact', component: _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"] },
    { path: 'resident', component: _pages_residents_residents_component__WEBPACK_IMPORTED_MODULE_4__["ResidentsComponent"] },
    { path: 'success', component: _pages_success_success_component__WEBPACK_IMPORTED_MODULE_5__["SuccessComponent"] }
];


/***/ }),

/***/ "./src/app/services/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import 'rxjs/add/operator/map';
//import { tokenNotExpired } from 'angular2-jwt';

var CustomerService = /** @class */ (function () {
    function CustomerService(_http, cookieService) {
        this._http = _http;
        this.cookieService = cookieService;
        this.HEADERS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
    }
    CustomerService.prototype.fetchClients = function () {
        return this._http.get("/customer", { headers: this.HEADERS, observe: 'response' });
    };
    CustomerService.prototype.saveClient = function (data) {
        return this._http.post('/customer/save', data, { headers: this.HEADERS, observe: 'response' });
    };
    CustomerService.prototype.sendClientData = function (data) {
        return this._http.post('/customer/sendmail', data, { headers: this.HEADERS, observe: 'response' });
    };
    CustomerService.prototype.fetchToken = function () {
        return this._http.get("/customer/token", { headers: this.HEADERS, observe: 'response' });
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\angular projects-frontend\junkgo\junkgo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map