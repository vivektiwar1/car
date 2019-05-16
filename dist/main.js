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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_resolvers/definition.resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/_resolvers/definition.resolver.ts ***!
  \***************************************************/
/*! exports provided: DefinitionResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionResolver", function() { return DefinitionResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/country.service */ "./src/app/_services/country.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DefinitionResolver = /** @class */ (function () {
    function DefinitionResolver(countryService, router, alertify) {
        this.countryService = countryService;
        this.router = router;
        this.alertify = alertify;
    }
    DefinitionResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.countryService.getCountryDataForAddForm().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    DefinitionResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], DefinitionResolver);
    return DefinitionResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/extramoduleprice.resolver.ts":
/*!*********************************************************!*\
  !*** ./src/app/_resolvers/extramoduleprice.resolver.ts ***!
  \*********************************************************/
/*! exports provided: ExtraModulePriceResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraModulePriceResolver", function() { return ExtraModulePriceResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_extramoduleprice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/extramoduleprice.service */ "./src/app/_services/extramoduleprice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExtraModulePriceResolver = /** @class */ (function () {
    function ExtraModulePriceResolver(extraModulePriceService, router, alertify) {
        this.extraModulePriceService = extraModulePriceService;
        this.router = router;
        this.alertify = alertify;
    }
    ExtraModulePriceResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.extraModulePriceService.getDataForForm().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    ExtraModulePriceResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_extramoduleprice_service__WEBPACK_IMPORTED_MODULE_5__["ExtramodulepriceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], ExtraModulePriceResolver);
    return ExtraModulePriceResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/lists.resolver.ts":
/*!**********************************************!*\
  !*** ./src/app/_resolvers/lists.resolver.ts ***!
  \**********************************************/
/*! exports provided: ListsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsResolver", function() { return ListsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListsResolver = /** @class */ (function () {
    function ListsResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.pageNumber = 1;
        this.pageSize = 5;
    }
    ListsResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers(this.pageNumber, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    ListsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], ListsResolver);
    return ListsResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/packageprice.resolver.ts":
/*!*****************************************************!*\
  !*** ./src/app/_resolvers/packageprice.resolver.ts ***!
  \*****************************************************/
/*! exports provided: PackagePlanPriceResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagePlanPriceResolver", function() { return PackagePlanPriceResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_packageplanprice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/packageplanprice.service */ "./src/app/_services/packageplanprice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PackagePlanPriceResolver = /** @class */ (function () {
    function PackagePlanPriceResolver(packagePlanPriceService, router, alertify) {
        this.packagePlanPriceService = packagePlanPriceService;
        this.router = router;
        this.alertify = alertify;
    }
    PackagePlanPriceResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.packagePlanPriceService.getDataForForm().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    PackagePlanPriceResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_packageplanprice_service__WEBPACK_IMPORTED_MODULE_5__["PackageplanpriceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], PackagePlanPriceResolver);
    return PackagePlanPriceResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/register.resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/_resolvers/register.resolver.ts ***!
  \*************************************************/
/*! exports provided: RegisterResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterResolver", function() { return RegisterResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/country.service */ "./src/app/_services/country.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterResolver = /** @class */ (function () {
    function RegisterResolver(countryService, router, alertify) {
        this.countryService = countryService;
        this.router = router;
        this.alertify = alertify;
    }
    RegisterResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.countryService.getCountries().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    RegisterResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], RegisterResolver);
    return RegisterResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/terms.resolver.ts":
/*!**********************************************!*\
  !*** ./src/app/_resolvers/terms.resolver.ts ***!
  \**********************************************/
/*! exports provided: TermsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsResolver", function() { return TermsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_termsandcondition_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/termsandcondition.service */ "./src/app/_services/termsandcondition.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TermsResolver = /** @class */ (function () {
    function TermsResolver(termsService, router, alertify) {
        this.termsService = termsService;
        this.router = router;
        this.alertify = alertify;
    }
    TermsResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.termsService.getFormData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    TermsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_termsandcondition_service__WEBPACK_IMPORTED_MODULE_5__["TermsandconditionService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], TermsResolver);
    return TermsResolver;
}());



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
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

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else { }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelperService) {
        this.http = http;
        this.jwtHelperService = jwtHelperService;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.photoUrl = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('../../assets/user.png');
        this.currentPhotoUrl = this.photoUrl.asObservable();
    }
    AuthService.prototype.changeMemberPhoto = function (photoUrl) {
        this.photoUrl.next(photoUrl);
    };
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseUrl + 'account/login', model, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]()
                .set('Content-Type', 'application/json') })
            .map(function (user) {
            if (user) {
                localStorage.setItem('token', user.accessToken);
                localStorage.setItem('refreshToken', user.refreshToken);
                localStorage.setItem('user', JSON.stringify(user.user));
                _this.decodedToken = _this.jwtHelperService.decodeToken(user.accessToken);
                _this.currentUser = user.user;
                _this.userToken = user.accessToken;
                if (_this.currentUser.photoUrl !== null) {
                    _this.changeMemberPhoto(_this.currentUser.photoUrl);
                }
                else {
                    _this.changeMemberPhoto('../../assets/user.png');
                }
            }
        });
    };
    AuthService.prototype.register = function (user) {
        var _formData = new FormData();
        _formData.append('Logo', user.logo);
        _formData.append('FirstName', user.name);
        _formData.append('LastName', user.lastName);
        _formData.append('UserName', user.userName);
        _formData.append('Email', user.email);
        _formData.append('Address', user.Address);
        _formData.append('Phone', user.phone);
        _formData.append('CompanyName', user.companyName);
        _formData.append('Password', user.password);
        _formData.append('CompanyEmail', user.companyEmail);
        _formData.append('CompanyPhone', user.companyPhone);
        _formData.append('CompanyAddress', user.companyAddress);
        _formData.append('PostalCode', user.postalCode);
        _formData.append('Country', user.country);
        _formData.append('City', user.city);
        _formData.append('Password', user.password);
        _formData.append('DOB', user.dOB.toLocaleString());
        return this.http.post(this.baseUrl + 'account/register', _formData);
    };
    AuthService.prototype.update = function (model) {
        return this.http.post(this.baseUrl + 'account/UpdateUserProfile', model, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]().set('Content-Type', 'application/json') });
    };
    AuthService.prototype.updatePassword = function (model) {
        return this.http.post(this.baseUrl + 'account/UpdateUserPassword', model, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]().set('Content-Type', 'application/json') });
    };
    AuthService.prototype.loggedIn = function () {
        var token = this.jwtHelperService.tokenGetter();
        if (!token) {
            return false;
        }
        return !this.jwtHelperService.isTokenExpired(token);
    };
    AuthService.prototype.getUserLanguage = function () {
        var token = this.jwtHelperService.tokenGetter();
        if (!token) {
            return 'en';
        }
        return this.decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/locality'];
    };
    AuthService.prototype.registerEmployee = function (user) {
        return this.http.post(this.baseUrl + 'Employee/', user);
    };
    AuthService.prototype.getEmployees = function () {
        return this.http.get(this.baseUrl + 'Employee');
    };
    AuthService.prototype.getEmployee = function (id) {
        return this.http.get(this.baseUrl + 'Employee/' + id);
    };
    AuthService.prototype.updateEmployee = function (item) {
        return this.http.put(this.baseUrl + 'Employee', item);
    };
    AuthService.prototype.deleteEmploee = function (id) {
        return this.http.delete(this.baseUrl + 'Employee/' + id);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/country.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/country.service.ts ***!
  \**********************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    CountryService.prototype.getCountries = function () {
        return this.http.get(this.baseUrl + 'Definition/countries');
    };
    CountryService.prototype.getCountriesSuperAdmin = function () {
        return this.http.get(this.baseUrl + 'Definition/countriesSuperAdmin');
    };
    CountryService.prototype.getCitiesByCountryId = function (countryId) {
        return this.http.get(this.baseUrl + 'Definition/GetCitiesByCountryId/' + countryId);
    };
    CountryService.prototype.getCountryDataForAddForm = function () {
        return this.http.get(this.baseUrl + 'Definition/countryaddupdateData');
    };
    CountryService.prototype.getCountry = function (countryId) {
        return this.http.get(this.baseUrl + 'Definition/GetCountry/' + countryId);
    };
    CountryService.prototype.create = function (model) {
        return this.http.post(this.baseUrl + 'Definition/addCountry', model, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json') });
    };
    CountryService.prototype.update = function (model) {
        return this.http.put(this.baseUrl + 'Definition/updateCountry', model, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json') });
    };
    CountryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/_services/currencysymbol.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/currencysymbol.service.ts ***!
  \*****************************************************/
/*! exports provided: CurrencysymbolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencysymbolService", function() { return CurrencysymbolService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrencysymbolService = /** @class */ (function () {
    function CurrencysymbolService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    CurrencysymbolService.prototype.getCurrencySymbols = function () {
        return this.http.get(this.baseUrl + 'Definition/getCurrencySymbols');
    };
    CurrencysymbolService.prototype.getCurrencySymbol = function (id) {
        return this.http.get(this.baseUrl + 'Definition/getCurrencySymbol/' + id);
    };
    CurrencysymbolService.prototype.create = function (language) {
        return this.http.post(this.baseUrl + 'Definition/addCurrencySymbol', language);
    };
    CurrencysymbolService.prototype.update = function (language) {
        return this.http.put(this.baseUrl + 'Definition/updateCurrencySymbol', language);
    };
    CurrencysymbolService.prototype.delete = function (id) {
        return this.http.delete(this.baseUrl + 'Definition/deleteCurrencySymbol/' + id);
    };
    CurrencysymbolService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CurrencysymbolService);
    return CurrencysymbolService;
}());



/***/ }),

/***/ "./src/app/_services/error.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/_services/error.interceptor.ts ***!
  \************************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).catch(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(applicationError);
                }
                var serverError = error.error;
                var modelStateErrors = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modelStateErrors += serverError[key] + '\n';
                        }
                    }
                }
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(modelStateErrors || serverError || 'Server error');
            }
        });
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_services/extramodule.service.ts":
/*!**************************************************!*\
  !*** ./src/app/_services/extramodule.service.ts ***!
  \**************************************************/
/*! exports provided: ExtramoduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtramoduleService", function() { return ExtramoduleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExtramoduleService = /** @class */ (function () {
    function ExtramoduleService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    ExtramoduleService.prototype.create = function (extramodule) {
        return this.http.post(this.baseUrl + 'Definition/addExtraModule', extramodule);
    };
    ExtramoduleService.prototype.getExtraModules = function () {
        return this.http.get(this.baseUrl + 'Definition/ExtraModules');
    };
    ExtramoduleService.prototype.getExtraModule = function (id) {
        return this.http.get(this.baseUrl + 'Definition/GetExtraModule/' + id);
    };
    ExtramoduleService.prototype.update = function (extramodule) {
        return this.http.put(this.baseUrl + 'Definition/updateExtraModule', extramodule);
    };
    ExtramoduleService.prototype.delete = function (id) {
        return this.http.delete(this.baseUrl + 'Definition/deletextraModule/' + id);
    };
    ExtramoduleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ExtramoduleService);
    return ExtramoduleService;
}());



/***/ }),

/***/ "./src/app/_services/extramoduleprice.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/_services/extramoduleprice.service.ts ***!
  \*******************************************************/
/*! exports provided: ExtramodulepriceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtramodulepriceService", function() { return ExtramodulepriceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExtramodulepriceService = /** @class */ (function () {
    function ExtramodulepriceService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    ExtramodulepriceService.prototype.create = function (extramoduleprice) {
        return this.http.post(this.baseUrl + 'Definition/extraModulePrice', extramoduleprice);
    };
    ExtramodulepriceService.prototype.getExtraModulePrices = function () {
        return this.http.get(this.baseUrl + 'Definition/extraModulePrice');
    };
    ExtramodulepriceService.prototype.getExtraModulePrice = function (id) {
        return this.http.get(this.baseUrl + 'Definition/extraModulePrice/' + id);
    };
    ExtramodulepriceService.prototype.update = function (extramoduleprice) {
        return this.http.put(this.baseUrl + 'Definition/extraModulePrice', extramoduleprice);
    };
    ExtramodulepriceService.prototype.delete = function (id) {
        return this.http.delete(this.baseUrl + 'Definition/extraModulePrice/' + id);
    };
    ExtramodulepriceService.prototype.getDataForForm = function () {
        return this.http.get(this.baseUrl + 'Definition/extraModulePrice/getformdata/');
    };
    ExtramodulepriceService.prototype.getByExtraModule = function (moduleId) {
        return this.http.get(this.baseUrl + 'Definition/extraModulePriceByModule/' + moduleId);
    };
    ExtramodulepriceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ExtramodulepriceService);
    return ExtramodulepriceService;
}());



/***/ }),

/***/ "./src/app/_services/language.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/language.service.ts ***!
  \***********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LanguageService = /** @class */ (function () {
    function LanguageService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    LanguageService.prototype.getLanguages = function () {
        return this.http.get(this.baseUrl + 'Definition/language');
    };
    LanguageService.prototype.getLanguage = function (id) {
        return this.http.get(this.baseUrl + 'Definition/language/' + id);
    };
    LanguageService.prototype.create = function (language) {
        return this.http.post(this.baseUrl + 'Definition/language', language);
    };
    LanguageService.prototype.update = function (language) {
        return this.http.put(this.baseUrl + 'Definition/language', language);
    };
    LanguageService.prototype.delete = function (id) {
        return this.http.delete(this.baseUrl + 'Definition/language/' + id);
    };
    LanguageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LanguageService);
    return LanguageService;
}());



/***/ }),

/***/ "./src/app/_services/packageplan.service.ts":
/*!**************************************************!*\
  !*** ./src/app/_services/packageplan.service.ts ***!
  \**************************************************/
/*! exports provided: PackageplanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageplanService", function() { return PackageplanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PackageplanService = /** @class */ (function () {
    function PackageplanService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    PackageplanService.prototype.createPackage = function (packagePlan) {
        return this.http.post(this.baseUrl + 'packageplan', packagePlan);
    };
    PackageplanService.prototype.getPackages = function () {
        return this.http.get(this.baseUrl + 'packageplan');
    };
    PackageplanService.prototype.getPackage = function (id) {
        return this.http.get(this.baseUrl + 'packageplan/' + id);
    };
    PackageplanService.prototype.updatePackate = function (packagePlan) {
        return this.http.put(this.baseUrl + 'packageplan', packagePlan);
    };
    PackageplanService.prototype.deleteObj = function (id) {
        return this.http.delete(this.baseUrl + 'packageplan/' + id);
    };
    PackageplanService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PackageplanService);
    return PackageplanService;
}());



/***/ }),

/***/ "./src/app/_services/packageplanprice.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/_services/packageplanprice.service.ts ***!
  \*******************************************************/
/*! exports provided: PackageplanpriceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageplanpriceService", function() { return PackageplanpriceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PackageplanpriceService = /** @class */ (function () {
    function PackageplanpriceService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    PackageplanpriceService.prototype.getAll = function () {
        return this.http.get(this.baseUrl + "packageplanprice");
    };
    PackageplanpriceService.prototype.getAllByPackagePlan = function (packagePlanId) {
        return this.http.get(this.baseUrl + "packageplanprice/GetAllByPackagePlan/" + packagePlanId);
    };
    PackageplanpriceService.prototype.getById = function (id) {
        return this.http.get(this.baseUrl + "packageplanprice/" + id);
    };
    PackageplanpriceService.prototype.create = function (model) {
        return this.http.post(this.baseUrl + "packageplanprice/", model, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json")
        });
    };
    PackageplanpriceService.prototype.update = function (model) {
        return this.http.put(this.baseUrl + "packageplanprice", model);
    };
    PackageplanpriceService.prototype.getDataForForm = function () {
        return this.http.get(this.baseUrl + "packageplanprice/getformdata");
    };
    PackageplanpriceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PackageplanpriceService);
    return PackageplanpriceService;
}());



/***/ }),

/***/ "./src/app/_services/termsandcondition.service.ts":
/*!********************************************************!*\
  !*** ./src/app/_services/termsandcondition.service.ts ***!
  \********************************************************/
/*! exports provided: TermsandconditionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsandconditionService", function() { return TermsandconditionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TermsandconditionService = /** @class */ (function () {
    function TermsandconditionService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    TermsandconditionService.prototype.create = function (item) {
        return this.http.post(this.baseUrl + 'Definition/termsandcondtions', item);
    };
    TermsandconditionService.prototype.getTermsAndConditions = function () {
        return this.http.get(this.baseUrl + 'Definition/termsandcondtions');
    };
    TermsandconditionService.prototype.getById = function (id) {
        return this.http.get(this.baseUrl + 'Definition/termsandcondtions/' + id);
    };
    TermsandconditionService.prototype.update = function (termsandcondtion) {
        return this.http.put(this.baseUrl + 'Definition/termsandcondtions', termsandcondtion);
    };
    TermsandconditionService.prototype.delete = function (id) {
        return this.http.delete(this.baseUrl + 'Definition/termsandcondtions/' + id);
    };
    TermsandconditionService.prototype.getFormData = function () {
        return this.http.get(this.baseUrl + 'Definition/termsandcondtions/getformdata');
    };
    TermsandconditionService.prototype.gerTermsByCountry = function (countryId) {
        return this.http.get(this.baseUrl + 'Definition/termsandcondtions/getbycountryid/' + countryId);
    };
    TermsandconditionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TermsandconditionService);
    return TermsandconditionService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function () {
    function UserService(authHttp) {
        this.authHttp = authHttp;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    UserService.prototype.getUsers = function (pageNumber, pageSize) {
        return this.authHttp
            .get(this.baseUrl + 'Account/GetUsers');
    };
    UserService.prototype.getUser = function (id) {
        return this.authHttp
            .get(this.baseUrl + 'Account/' + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/_services/vehicleCategory.service.ts":
/*!******************************************************!*\
  !*** ./src/app/_services/vehicleCategory.service.ts ***!
  \******************************************************/
/*! exports provided: VehicleCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleCategoryService", function() { return VehicleCategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehicleCategoryService = /** @class */ (function () {
    function VehicleCategoryService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    VehicleCategoryService.prototype.getVehicleCategories = function () {
        return this.http.get(this.baseUrl + 'Definition/vehiclecategories');
    };
    VehicleCategoryService.prototype.getVehicleCategory = function (vehicleCategoryId) {
        return this.http.get(this.baseUrl + 'Definition/GetVehicleCategory/' + vehicleCategoryId);
    };
    VehicleCategoryService.prototype.create = function (model) {
        return this.http.post(this.baseUrl + 'Definition/addVehicleCategory', model, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json') });
    };
    VehicleCategoryService.prototype.update = function (model) {
        return this.http.put(this.baseUrl + 'Definition/updateVehicleCategory', model, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json') });
    };
    VehicleCategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VehicleCategoryService);
    return VehicleCategoryService;
}());



/***/ }),

/***/ "./src/app/_services/vehicletype.service.ts":
/*!**************************************************!*\
  !*** ./src/app/_services/vehicletype.service.ts ***!
  \**************************************************/
/*! exports provided: VehicletypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicletypeService", function() { return VehicletypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehicletypeService = /** @class */ (function () {
    function VehicletypeService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    VehicletypeService.prototype.create = function (item) {
        return this.http.post(this.baseUrl + 'Definition/addVehicletype', item, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json') });
    };
    VehicletypeService.prototype.getVehicleTypes = function () {
        return this.http.get(this.baseUrl + 'Definition/vehicletype');
    };
    VehicletypeService.prototype.getById = function (id) {
        return this.http.get(this.baseUrl + 'Definition/vehicletype/' + id);
    };
    VehicletypeService.prototype.update = function (item) {
        return this.http.put(this.baseUrl + 'Definition/vehicletype', item);
    };
    VehicletypeService.prototype.delete = function (id) {
        return this.http.delete(this.baseUrl + 'Definition/vehicletype/' + id);
    };
    VehicletypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VehicletypeService);
    return VehicletypeService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-nav></app-nav> -->\r\n<app-main-nav-bar-component *ngIf=\"authService.loggedIn()\"></app-main-nav-bar-component>\r\n<app-left-nav-component *ngIf=\"authService.loggedIn()\"></app-left-nav-component>\r\n<router-outlet></router-outlet>\r\n "

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, jwtHelperService, translate) {
        this.authService = authService;
        this.jwtHelperService = jwtHelperService;
        this.translate = translate;
    }
    // tslint:disable-next-line:use-life-cycle-interface
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        var user = JSON.parse(localStorage.getItem('user'));
        if (token) {
            this.authService.decodedToken = this.jwtHelperService.decodeToken(token);
        }
        if (user) {
            this.authService.currentUser = user;
            if (this.authService.currentUser.photoUrl !== null) {
                this.authService.changeMemberPhoto(user.photoUrl);
            }
            else {
                this.authService.changeMemberPhoto('../assets/user.png');
            }
        }
        this.translate.setDefaultLang('en');
        this.translate.use(this.authService.getUserLanguage());
        this.translate.addLangs(['en', 'de']);
        // console.log(this.authService.loggedIn());
        // console.log(this.authService.decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/locality']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, getAccessToken, jwtConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccessToken", function() { return getAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtConfig", function() { return jwtConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_services/error.interceptor */ "./src/app/_services/error.interceptor.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _left_part_left_part_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./left-part/left-part.component */ "./src/app/left-part/left-part.component.ts");
/* harmony import */ var _resolvers_register_resolver__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_resolvers/register.resolver */ "./src/app/_resolvers/register.resolver.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_resolvers/lists.resolver */ "./src/app/_resolvers/lists.resolver.ts");
/* harmony import */ var _superadmin_packages_packageplan_packageplan_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./superadmin/packages/packageplan/packageplan.component */ "./src/app/superadmin/packages/packageplan/packageplan.component.ts");
/* harmony import */ var _superadmin_packages_createpackage_createpackage_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./superadmin/packages/createpackage/createpackage.component */ "./src/app/superadmin/packages/createpackage/createpackage.component.ts");
/* harmony import */ var _services_packageplan_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_services/packageplan.service */ "./src/app/_services/packageplan.service.ts");
/* harmony import */ var _superadmin_countries_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./superadmin/countries/country-list/country-list.component */ "./src/app/superadmin/countries/country-list/country-list.component.ts");
/* harmony import */ var _superadmin_countries_country_add_country_add_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./superadmin/countries/country-add/country-add.component */ "./src/app/superadmin/countries/country-add/country-add.component.ts");
/* harmony import */ var _resolvers_definition_resolver__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_resolvers/definition.resolver */ "./src/app/_resolvers/definition.resolver.ts");
/* harmony import */ var _superadmin_packages_packageplanprice_packageplanprice_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./superadmin/packages/packageplanprice/packageplanprice.component */ "./src/app/superadmin/packages/packageplanprice/packageplanprice.component.ts");
/* harmony import */ var _superadmin_packages_createpackageplanprice_createpackageplanprice_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./superadmin/packages/createpackageplanprice/createpackageplanprice.component */ "./src/app/superadmin/packages/createpackageplanprice/createpackageplanprice.component.ts");
/* harmony import */ var _services_packageplanprice_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./_services/packageplanprice.service */ "./src/app/_services/packageplanprice.service.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./_services/country.service */ "./src/app/_services/country.service.ts");
/* harmony import */ var _superadmin_VehicleCategories_vehiclecategory_list_vehiclecategory_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./superadmin/VehicleCategories/vehiclecategory-list/vehiclecategory-list.component */ "./src/app/superadmin/VehicleCategories/vehiclecategory-list/vehiclecategory-list.component.ts");
/* harmony import */ var _superadmin_VehicleCategories_vehicle_category_add_edit_vehicle_category_add_edit_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./superadmin/VehicleCategories/vehicle-category-add-edit/vehicle-category-add-edit.component */ "./src/app/superadmin/VehicleCategories/vehicle-category-add-edit/vehicle-category-add-edit.component.ts");
/* harmony import */ var _left_nav_component_left_nav_component_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./left-nav-component/left-nav-component.component */ "./src/app/left-nav-component/left-nav-component.component.ts");
/* harmony import */ var _main_nav_bar_component_main_nav_bar_component_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./main-nav-bar-component/main-nav-bar-component.component */ "./src/app/main-nav-bar-component/main-nav-bar-component.component.ts");
/* harmony import */ var _superadmin_extramodule_extramodule_extramodule_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./superadmin/extramodule/extramodule/extramodule.component */ "./src/app/superadmin/extramodule/extramodule/extramodule.component.ts");
/* harmony import */ var _superadmin_extramodule_extramoduleprice_extramoduleprice_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./superadmin/extramodule/extramoduleprice/extramoduleprice.component */ "./src/app/superadmin/extramodule/extramoduleprice/extramoduleprice.component.ts");
/* harmony import */ var _superadmin_extramodule_createextramodule_createextramodule_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./superadmin/extramodule/createextramodule/createextramodule.component */ "./src/app/superadmin/extramodule/createextramodule/createextramodule.component.ts");
/* harmony import */ var _superadmin_extramodule_createextramoduleprice_createextramoduleprice_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./superadmin/extramodule/createextramoduleprice/createextramoduleprice.component */ "./src/app/superadmin/extramodule/createextramoduleprice/createextramoduleprice.component.ts");
/* harmony import */ var _services_extramodule_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./_services/extramodule.service */ "./src/app/_services/extramodule.service.ts");
/* harmony import */ var _services_extramoduleprice_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./_services/extramoduleprice.service */ "./src/app/_services/extramoduleprice.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./_services/language.service */ "./src/app/_services/language.service.ts");
/* harmony import */ var _services_currencysymbol_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./_services/currencysymbol.service */ "./src/app/_services/currencysymbol.service.ts");
/* harmony import */ var _superadmin_language_language_language_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./superadmin/language/language/language.component */ "./src/app/superadmin/language/language/language.component.ts");
/* harmony import */ var _superadmin_language_createlanguage_createlanguage_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./superadmin/language/createlanguage/createlanguage.component */ "./src/app/superadmin/language/createlanguage/createlanguage.component.ts");
/* harmony import */ var _superadmin_currencysymbol_currencysymbol_currencysymbol_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./superadmin/currencysymbol/currencysymbol/currencysymbol.component */ "./src/app/superadmin/currencysymbol/currencysymbol/currencysymbol.component.ts");
/* harmony import */ var _superadmin_currencysymbol_createcurrencysymbol_createcurrencysymbol_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./superadmin/currencysymbol/createcurrencysymbol/createcurrencysymbol.component */ "./src/app/superadmin/currencysymbol/createcurrencysymbol/createcurrencysymbol.component.ts");
/* harmony import */ var _resolvers_packageprice_resolver__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./_resolvers/packageprice.resolver */ "./src/app/_resolvers/packageprice.resolver.ts");
/* harmony import */ var _resolvers_extramoduleprice_resolver__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./_resolvers/extramoduleprice.resolver */ "./src/app/_resolvers/extramoduleprice.resolver.ts");
/* harmony import */ var _superadmin_termsandconditions_termsandcondition_termsandcondition_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./superadmin/termsandconditions/termsandcondition/termsandcondition.component */ "./src/app/superadmin/termsandconditions/termsandcondition/termsandcondition.component.ts");
/* harmony import */ var _superadmin_termsandconditions_createtermsandcondition_createtermsandcondition_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./superadmin/termsandconditions/createtermsandcondition/createtermsandcondition.component */ "./src/app/superadmin/termsandconditions/createtermsandcondition/createtermsandcondition.component.ts");
/* harmony import */ var _services_termsandcondition_service__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./_services/termsandcondition.service */ "./src/app/_services/termsandcondition.service.ts");
/* harmony import */ var _resolvers_terms_resolver__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./_resolvers/terms.resolver */ "./src/app/_resolvers/terms.resolver.ts");
/* harmony import */ var _superadmin_countries_country_notify_settings_country_notify_settings_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./superadmin/countries/country-notify-settings/country-notify-settings.component */ "./src/app/superadmin/countries/country-notify-settings/country-notify-settings.component.ts");
/* harmony import */ var _superadmin_admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./superadmin/admindashboard/admindashboard.component */ "./src/app/superadmin/admindashboard/admindashboard.component.ts");
/* harmony import */ var _services_vehicletype_service__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./_services/vehicletype.service */ "./src/app/_services/vehicletype.service.ts");
/* harmony import */ var _localadmin_vehiclecategory_vehiclecategory_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./localadmin/vehiclecategory/vehiclecategory.component */ "./src/app/localadmin/vehiclecategory/vehiclecategory.component.ts");
/* harmony import */ var _localadmin_createvehiclecategory_createvehiclecategory_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./localadmin/createvehiclecategory/createvehiclecategory.component */ "./src/app/localadmin/createvehiclecategory/createvehiclecategory.component.ts");
/* harmony import */ var _localadmin_createemployee_createemployee_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./localadmin/createemployee/createemployee.component */ "./src/app/localadmin/createemployee/createemployee.component.ts");
/* harmony import */ var _localadmin_employee_employee_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./localadmin/employee/employee.component */ "./src/app/localadmin/employee/employee.component.ts");
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./editprofile/editprofile.component */ "./src/app/editprofile/editprofile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































































function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http);
}
function getAccessToken() {
    return localStorage.getItem('token');
}
var jwtConfig = {
    tokenGetter: getAccessToken
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_15__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _left_part_left_part_component__WEBPACK_IMPORTED_MODULE_20__["LeftPartComponent"],
                _superadmin_packages_packageplan_packageplan_component__WEBPACK_IMPORTED_MODULE_24__["PackageplanComponent"],
                _superadmin_packages_createpackage_createpackage_component__WEBPACK_IMPORTED_MODULE_25__["CreatepackageComponent"],
                _superadmin_countries_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_27__["CountryListComponent"],
                _superadmin_packages_packageplanprice_packageplanprice_component__WEBPACK_IMPORTED_MODULE_30__["PackageplanpriceComponent"],
                _superadmin_packages_createpackageplanprice_createpackageplanprice_component__WEBPACK_IMPORTED_MODULE_31__["CreatepackageplanpriceComponent"],
                _superadmin_countries_country_add_country_add_component__WEBPACK_IMPORTED_MODULE_28__["CountryAddComponent"],
                _superadmin_extramodule_extramodule_extramodule_component__WEBPACK_IMPORTED_MODULE_38__["ExtramoduleComponent"],
                _superadmin_extramodule_extramoduleprice_extramoduleprice_component__WEBPACK_IMPORTED_MODULE_39__["ExtramodulepriceComponent"],
                _superadmin_extramodule_createextramodule_createextramodule_component__WEBPACK_IMPORTED_MODULE_40__["CreateextramoduleComponent"],
                _superadmin_extramodule_createextramoduleprice_createextramoduleprice_component__WEBPACK_IMPORTED_MODULE_41__["CreateextramodulepriceComponent"],
                _superadmin_language_language_language_component__WEBPACK_IMPORTED_MODULE_46__["LanguageComponent"],
                _superadmin_language_createlanguage_createlanguage_component__WEBPACK_IMPORTED_MODULE_47__["CreatelanguageComponent"],
                _superadmin_currencysymbol_currencysymbol_currencysymbol_component__WEBPACK_IMPORTED_MODULE_48__["CurrencysymbolComponent"],
                _superadmin_currencysymbol_createcurrencysymbol_createcurrencysymbol_component__WEBPACK_IMPORTED_MODULE_49__["CreatecurrencysymbolComponent"],
                _left_nav_component_left_nav_component_component__WEBPACK_IMPORTED_MODULE_36__["LeftNavComponentComponent"],
                _main_nav_bar_component_main_nav_bar_component_component__WEBPACK_IMPORTED_MODULE_37__["MainNavBarComponentComponent"],
                _superadmin_VehicleCategories_vehicle_category_add_edit_vehicle_category_add_edit_component__WEBPACK_IMPORTED_MODULE_35__["VehicleCategoryAddEditComponent"],
                _superadmin_VehicleCategories_vehiclecategory_list_vehiclecategory_list_component__WEBPACK_IMPORTED_MODULE_34__["VehiclecategoryListComponent"],
                _superadmin_termsandconditions_termsandcondition_termsandcondition_component__WEBPACK_IMPORTED_MODULE_52__["TermsandconditionComponent"],
                _superadmin_termsandconditions_createtermsandcondition_createtermsandcondition_component__WEBPACK_IMPORTED_MODULE_53__["CreatetermsandconditionComponent"],
                _superadmin_countries_country_notify_settings_country_notify_settings_component__WEBPACK_IMPORTED_MODULE_56__["CountryNotifySettingsComponent"],
                _superadmin_admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_57__["AdmindashboardComponent"],
                _localadmin_vehiclecategory_vehiclecategory_component__WEBPACK_IMPORTED_MODULE_59__["VehiclecategoryComponent"],
                _localadmin_createvehiclecategory_createvehiclecategory_component__WEBPACK_IMPORTED_MODULE_60__["CreatevehiclecategoryComponent"],
                _localadmin_createemployee_createemployee_component__WEBPACK_IMPORTED_MODULE_61__["CreateemployeeComponent"],
                _localadmin_employee_employee_component__WEBPACK_IMPORTED_MODULE_62__["EmployeeComponent"],
                _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_63__["EditprofileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_2__["appRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ButtonsModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot(),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: getAccessToken,
                        whitelistedDomains: ['localhost:51209'],
                        blacklistedRoutes: ['localhost:51209/api/account', 'localhost:51209/api/login', 'localhost:51209/api/register', 'localhost:51209/api/refreshToken']
                    }
                })
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
                _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"],
                _services_error_interceptor__WEBPACK_IMPORTED_MODULE_18__["ErrorInterceptorProvider"],
                _resolvers_register_resolver__WEBPACK_IMPORTED_MODULE_21__["RegisterResolver"],
                _angular_common__WEBPACK_IMPORTED_MODULE_22__["DatePipe"],
                _resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_23__["ListsResolver"],
                _services_packageplan_service__WEBPACK_IMPORTED_MODULE_26__["PackageplanService"],
                _services_packageplanprice_service__WEBPACK_IMPORTED_MODULE_32__["PackageplanpriceService"],
                _services_country_service__WEBPACK_IMPORTED_MODULE_33__["CountryService"],
                _resolvers_definition_resolver__WEBPACK_IMPORTED_MODULE_29__["DefinitionResolver"],
                _services_extramodule_service__WEBPACK_IMPORTED_MODULE_42__["ExtramoduleService"],
                _services_extramoduleprice_service__WEBPACK_IMPORTED_MODULE_43__["ExtramodulepriceService"],
                _services_language_service__WEBPACK_IMPORTED_MODULE_44__["LanguageService"],
                _services_currencysymbol_service__WEBPACK_IMPORTED_MODULE_45__["CurrencysymbolService"],
                _resolvers_packageprice_resolver__WEBPACK_IMPORTED_MODULE_50__["PackagePlanPriceResolver"],
                _resolvers_extramoduleprice_resolver__WEBPACK_IMPORTED_MODULE_51__["ExtraModulePriceResolver"],
                _services_termsandcondition_service__WEBPACK_IMPORTED_MODULE_54__["TermsandconditionService"],
                _resolvers_terms_resolver__WEBPACK_IMPORTED_MODULE_55__["TermsResolver"],
                _services_vehicletype_service__WEBPACK_IMPORTED_MODULE_58__["VehicletypeService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/editprofile/editprofile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRwcm9maWxlL2VkaXRwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/editprofile/editprofile.component.html":
/*!********************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\" style=\"margin-left: 200px;\">\n  <form [formGroup]=\"registerForm\" style=\"width: 100%;\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <h5>Personal Information</h5>\n        <div class=\"form-group\">\n          <label for=\"FirstName\">First Name:</label>\n          <input\n            (blur)=\"checkIsEmpty($event)\"\n            (focus)=\"onFocusField($event)\"\n            [ngClass]=\"{\n              'is-invalid':\n                registerForm.get('FirstName').errors &&\n                registerForm.get('FirstName').touched\n            }\"\n            class=\"form-control active-form\"\n            formControlName=\"FirstName\"\n            id=\"FirstName\"\n            placeholder=\"First Name\"\n            type=\"text\"\n            [(ngModel)]=\"currentUser.name\"\n          />\n          <!-- <div class=\"invalid-feedback\">Please choose a First Name</div> -->\n        </div>\n        <div class=\"form-group\">\n          <label for=\"LastName\">Last Name:</label>\n          <input\n            (blur)=\"checkIsEmpty($event)\"\n            (focus)=\"onFocusField($event)\"\n            [ngClass]=\"{\n              'is-invalid':\n                registerForm.get('LastName').errors &&\n                registerForm.get('LastName').touched\n            }\"\n            class=\"form-control active-form\"\n            formControlName=\"LastName\"\n            id=\"LastName\"\n            placeholder=\"Last Name\"\n            type=\"text\"\n            [(ngModel)]=\"currentUser.lastName\"\n          />\n          <!-- <div class=\"invalid-feedback\">Please choose a Last Name</div> -->\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Email\">Email:</label>\n          <input\n            (blur)=\"checkIsEmpty($event)\"\n            (focus)=\"onFocusField($event)\"\n            [ngClass]=\"{\n              'is-invalid':\n                registerForm.get('Email').errors &&\n                registerForm.get('Email').touched\n            }\"\n            class=\"form-control  active-form\"\n            formControlName=\"Email\"\n            id=\"Email\"\n            placeholder=\"Email\"\n            type=\"text\"\n            [(ngModel)]=\"currentUser.email\"\n          />\n          <!-- <div class=\"invalid-feedback\">Please write an email</div> -->\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Address\">Address:</label>\n          <input\n            (blur)=\"checkIsEmpty($event)\"\n            (focus)=\"onFocusField($event)\"\n            class=\"form-control  active-form\"\n            formControlName=\"Address\"\n            id=\"Address\"\n            placeholder=\"Address\"\n            type=\"text\"\n            [(ngModel)]=\"currentUser.Address\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Phone\">Phone:</label>\n          <input\n            (blur)=\"checkIsEmpty($event)\"\n            (focus)=\"onFocusField($event)\"\n            class=\"form-control  active-form\"\n            formControlName=\"Phone\"\n            id=\"Phone\"\n            placeholder=\"Phone\"\n            type=\"number\"\n            [(ngModel)]=\"currentUser.phone\"\n          />\n        </div>\n        <div class=\"options-forms\">\n          <label for=\"\">Date Of Birth</label>\n          <div class=\"options-form-wrapper form-inline\">\n            <div class=\"form-group date-form\">\n              <select\n                (blur)=\"checkIsEmpty($event)\"\n                (focus)=\"onFocusField($event)\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    registerForm.get('Date').errors &&\n                    registerForm.get('Date').touched\n                }\"\n                class=\"form-control active-form\"\n                formControlName=\"Date\"\n                id=\"date\"\n                value=\"Date\"\n                [(ngModel)]=\"currentDay\"\n              >\n                <option\n                  (blur)=\"checkIsEmpty($event)\"\n                  (focus)=\"onFocusField($event)\"\n                  *ngFor=\"let day of days\"\n                  [value]=\"day\"\n                  class=\"option-control\"\n                  >{{ day }}</option\n                >\n              </select>\n              <!-- <div class=\"invalid-feedback\">Please select a date</div> -->\n            </div>\n            <div class=\"form-group month-form\">\n              <select\n                (blur)=\"checkIsEmpty($event)\"\n                (focus)=\"onFocusField($event)\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    registerForm.get('Month').errors &&\n                    registerForm.get('Month').touched\n                }\"\n                class=\"form-control  active-form\"\n                formControlName=\"Month\"\n                id=\"Month\"\n                [(ngModel)]=\"currentMonth\"\n              >\n                <option\n                  *ngFor=\"let month of months\"\n                  [value]=\"month\"\n                  class=\"option-control\"\n                  >{{ month }}</option\n                >\n              </select>\n              <!-- <div class=\"invalid-feedback\">Please select a month</div> -->\n            </div>\n            <div class=\"form-group year-form\">\n              <select\n                (blur)=\"checkIsEmpty($event)\"\n                (focus)=\"onFocusField($event)\"\n                [ngClass]=\"{\n                  'is-invalid':\n                    registerForm.get('Year').errors &&\n                    registerForm.get('Year').touched\n                }\"\n                class=\"form-control  active-form\"\n                formControlName=\"Year\"\n                id=\"Year\"\n                [(ngModel)]=\"currentYear\"\n              >\n                <option\n                  *ngFor=\"let year of years\"\n                  [value]=\"year\"\n                  class=\"option-control\"\n                  >{{ year }}</option\n                >\n              </select>\n              <!-- <div class=\"invalid-feedback\">Please select a Year</div> -->\n            </div>\n          </div>\n        </div>\n        <!-- <button class=\"btn btn-default\" type=\"button\">Next</button> -->\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/editprofile/editprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.ts ***!
  \******************************************************/
/*! exports provided: EditprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofileComponent", function() { return EditprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_services/language.service */ "./src/app/_services/language.service.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../_services/country.service */ "./src/app/_services/country.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditprofileComponent = /** @class */ (function () {
    function EditprofileComponent(userService, route, languageService, countryService, fb) {
        this.userService = userService;
        this.route = route;
        this.languageService = languageService;
        this.countryService = countryService;
        this.fb = fb;
        this.currentUser = {};
        this.currentMonth = 1;
        this.currentDay = 1;
        this.currentYear = 1;
        this.languages = [];
        this.cities = [];
        this.countries = [];
    }
    EditprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getLanguages();
        this.days = this.arrayThree(31, 1);
        this.months = this.arrayThree(12, 1);
        this.years = this.arrayThree((new Date().getFullYear() - 16) - 1950, 1950);
        this.createRegisterForm();
        this.route.paramMap.subscribe(function (param) {
            _this.userService.getUser(param.get("id")).subscribe(function (response) {
                _this.currentUser = response;
                var dt = new Date(_this.currentUser.dateOfBirth);
                _this.currentDay = dt.getDate();
                _this.currentMonth = dt.getMonth() + 1;
                _this.currentYear = dt.getFullYear();
            });
        });
    };
    EditprofileComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.fb.group({
            FirstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            LastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            Email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            Date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            Month: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            Year: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            Address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            Phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            UserName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            Password: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(8)]
            ],
            PostalCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            Country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            City: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    EditprofileComponent.prototype.getLanguages = function () {
        var _this = this;
        this.languageService.getLanguages().subscribe(function (_languages) {
            _this.languages = _languages;
        });
    };
    EditprofileComponent.prototype.getCities = function (countryId) {
        var _this = this;
        this.countryService.getCitiesByCountryId(countryId).subscribe(function (data) {
            _this.cities = data;
        });
    };
    EditprofileComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryService.getCountries().subscribe(function (data) {
            _this.countries = data; //data['countries'];
        });
    };
    EditprofileComponent.prototype.arrayThree = function (n, startFrom) {
        return new Array(n).fill(1).map(function (x, i) { return i + startFrom; });
    };
    EditprofileComponent.prototype.checkIsEmpty = function (event) {
        var control = document.getElementById(event.target.id);
        if (control.value.length > 0) {
            control.classList.add("active-form");
        }
        else {
            control.classList.remove("active-form");
        }
    };
    EditprofileComponent.prototype.onFocusField = function (event) {
        document.getElementById(event.target.id).classList.add("active-form");
    };
    EditprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-editprofile",
            template: __webpack_require__(/*! ./editprofile.component.html */ "./src/app/editprofile/editprofile.component.html"),
            styles: [__webpack_require__(/*! ./editprofile.component.css */ "./src/app/editprofile/editprofile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_4__["CountryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], EditprofileComponent);
    return EditprofileComponent;
}());



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Home works</h2>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
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
    function HomeComponent(authService) {
        this.authService = authService;
        this.registerMode = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/left-nav-component/left-nav-component.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/left-nav-component/left-nav-component.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.sidebar {\r\n    height: 100%;\r\n    width: 250;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top:80px;\r\n    left: 0;\r\n    background-color: #fafafa;\r\n    overflow: hidden;\r\n    transition: 0.5s;\r\n  }\r\n  \r\n  #SideBarContent{\r\n     opacity: 1;\r\n  }\r\n  \r\n  .sideBarItem {\r\n    line-height: 2.67;\r\n    font-size: 18px;\r\n    margin-right: 20px;\r\n    color: #667788;\r\n  }\r\n  \r\n  .sidebar a {\r\n    padding-left: 20px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    display: block;\r\n    transition: 0.3s;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVmdC1uYXYtY29tcG9uZW50L2xlZnQtbmF2LWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxTQUFTO0lBQ1QsUUFBUTtJQUNSLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsaUJBQWlCO0dBQ2xCOztFQUVEO0tBQ0csV0FBVztHQUNiOztFQUVEO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7R0FDbEIiLCJmaWxlIjoic3JjL2FwcC9sZWZ0LW5hdi1jb21wb25lbnQvbGVmdC1uYXYtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNpZGViYXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDI1MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6ODBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gICNTaWRlQmFyQ29udGVudHtcclxuICAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAuc2lkZUJhckl0ZW0ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNjc7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzY2Nzc4ODtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXIgYSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/left-nav-component/left-nav-component.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/left-nav-component/left-nav-component.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mySidebar\" class=\"sidebar\">\r\n  <div id=\"SideBarContent\">\r\n    <a [routerLink]=\"['/dashboard/superadmin/']\" routerLinkActive=\"router-link-active\">\r\n      <div style=\"display: flex;justify-content: flex-start\">\r\n        <i class=\"fa fa-tachometer sideBarItem\" aria-hidden=\"true\"></i>\r\n        <div class=\"sideBarItem\">Dashbord</div>\r\n      </div>\r\n    </a>\r\n\r\n    <a style=\"cursor: pointer;\" (click)=\"subMenuDefinition()\">\r\n      <div style=\"display: flex;justify-content: flex-start\">\r\n        <i class=\"fa fa-list-ul sideBarItem\" aria-hidden=\"true\"></i>\r\n        <div class=\"sideBarItem\">Definitions</div>\r\n      </div>\r\n    </a>\r\n\r\n    <a\r\n      [routerLink]=\"['/countries']\"\r\n      routerLinkActive=\"router-link-active\"\r\n      style=\"cursor: pointer;\"\r\n      *ngIf=\"expaned\"\r\n    >\r\n      <div style=\"display: flex;justify-content: flex-start\">\r\n        <i class=\"sideBarItem\" aria-hidden=\"true\"></i>\r\n        <div class=\"sideBarItem\">Countries</div>\r\n      </div>\r\n    </a>\r\n\r\n    <a\r\n      [routerLink]=\"['/currencysymbols']\"\r\n      routerLinkActive=\"router-link-active\"\r\n      style=\"cursor: pointer;\"\r\n      *ngIf=\"expaned\"\r\n    >\r\n      <div style=\"display: flex;justify-content: flex-start\">\r\n        <i class=\"sideBarItem\" aria-hidden=\"true\"></i>\r\n        <div class=\"sideBarItem\">Currency symbols</div>\r\n      </div>\r\n    </a>\r\n\r\n    <a\r\n      [routerLink]=\"['/extramodule']\"\r\n      routerLinkActive=\"router-link-active\"\r\n      style=\"cursor: pointer;\"\r\n      *ngIf=\"expaned\"\r\n    >\r\n      <div style=\"display: flex;justify-content: flex-start\">\r\n        <i class=\"sideBarItem\" aria-hidden=\"true\"></i>\r\n        <div class=\"sideBarItem\">Extra modules</div>\r\n      </div>\r\n    </a>\r\n\r\n    <a\r\n      [routerLink]=\"['/languages']\"\r\n      routerLinkActive=\"router-link-active\"\r\n      style=\"cursor: pointer;\"\r\n      *ngIf=\"expaned\"\r\n    >\r\n      <div style=\"display: flex;justify-content: flex-start\">\r\n        <i class=\"sideBarItem\" aria-hidden=\"true\"></i>\r\n        <div class=\"sideBarItem\">Languages</div>\r\n      </div>\r\n    </a>\r\n\r\n    <a\r\n      [routerLink]=\"['/packages']\"\r\n      routerLinkActive=\"router-link-active\"\r\n      style=\"cursor: pointer;\"\r\n      *ngIf=\"expaned\"\r\n    >\r\n      <div style=\"display: flex;justify-content: flex-start\">\r\n        <i class=\"sideBarItem\" aria-hidden=\"true\"></i>\r\n        <div class=\"sideBarItem\">Packages</div>\r\n      </div>\r\n    </a>\r\n\r\n    <a\r\n      [routerLink]=\"['/vehiclecategories']\"\r\n      routerLinkActive=\"router-link-active\"\r\n      style=\"cursor: pointer;\"\r\n      *ngIf=\"expaned\"\r\n    >\r\n      <div style=\"display: flex;justify-content: flex-start\">\r\n        <i class=\"sideBarItem\" aria-hidden=\"true\"></i>\r\n        <div class=\"sideBarItem\">Vehicle categories</div>\r\n      </div>\r\n    </a>\r\n\r\n    <a href=\"#\">\r\n      <div style=\"display: flex;justify-content: flex-start\">\r\n        <i class=\"fa fa-bar-chart sideBarItem\" aria-hidden=\"true\"></i>\r\n        <div class=\"sideBarItem\">Statistics</div>\r\n      </div>\r\n    </a>\r\n\r\n    <a href=\"#\">\r\n      <div style=\"display: flex;justify-content: flex-start\">\r\n        <i class=\"fa fa-users sideBarItem\" aria-hidden=\"true\"></i>\r\n        <div class=\"sideBarItem\">Clients</div>\r\n      </div>\r\n    </a>\r\n    <a href=\"#\">\r\n      <div style=\"display: flex;justify-content: flex-start\">\r\n        <i class=\"fa fa-calendar sideBarItem\" aria-hidden=\"true\"></i>\r\n        <div class=\"sideBarItem\">Protocols</div>\r\n      </div>\r\n    </a>\r\n    <a href=\"#\">\r\n      <div style=\"display: flex;justify-content: flex-start\">\r\n        <i class=\"fa fa-cc-mastercard sideBarItem\" aria-hidden=\"true\"></i>\r\n        <div class=\"sideBarItem\">Invoices</div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/left-nav-component/left-nav-component.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/left-nav-component/left-nav-component.component.ts ***!
  \********************************************************************/
/*! exports provided: LeftNavComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftNavComponentComponent", function() { return LeftNavComponentComponent; });
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

var LeftNavComponentComponent = /** @class */ (function () {
    function LeftNavComponentComponent() {
        this.expaned = false;
    }
    LeftNavComponentComponent.prototype.ngOnInit = function () { };
    LeftNavComponentComponent.prototype.subMenuDefinition = function () {
        this.expaned = !this.expaned;
    };
    LeftNavComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-left-nav-component",
            template: __webpack_require__(/*! ./left-nav-component.component.html */ "./src/app/left-nav-component/left-nav-component.component.html"),
            styles: [__webpack_require__(/*! ./left-nav-component.component.css */ "./src/app/left-nav-component/left-nav-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftNavComponentComponent);
    return LeftNavComponentComponent;
}());



/***/ }),

/***/ "./src/app/left-part/left-part.component.html":
/*!****************************************************!*\
  !*** ./src/app/left-part/left-part.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"left-part-wrapper\">\r\n  <div class=\"content\">\r\n    <h3 class=\"logo\">carTab</h3>\r\n    <div class=\"Loginitem\" (click)=\"clickEvent('login')\" [ngClass]=\"status == 'login' ? 'active' : ''\">\r\n      <div style=\"background-color: white;\">\r\n        <div class=\"corner-top\"></div>\r\n      </div>\r\n      <div [routerLink]=\"['/login']\" class=\"link\" [ngClass]=\"status == 'login' ? 'active' : ''\">\r\n        <i class=\"fa fa-user-plus\" style=\"margin-right: 5px;padding-top: 3px;\"></i>\r\n        <div>Login</div>\r\n      </div>\r\n      <div style=\"background-color: white;\">\r\n        <div class=\"corner-bottom\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"Registeritem\" (click)=\"clickEvent('register')\" [ngClass]=\"status == 'register' ? 'active' : ''\">\r\n      <div style=\"background-color: white;\">\r\n        <div class=\"corner-top\"></div>\r\n      </div>\r\n      <div [routerLink]=\"['/register']\" class=\"link\" [ngClass]=\"status == 'register' ? 'active' : ''\">\r\n        <i class=\"fa fa-user-plus\" style=\"margin-right: 5px;padding-top: 3px;\"></i>\r\n        <div>Register</div>\r\n      </div>\r\n      <div style=\"background-color: white;\">\r\n        <div class=\"corner-bottom\"></div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n//ToDo: add style in separate file\r\n<style>\r\n  .corner-top {\r\n    height: 25px;\r\n    background-color:#5082A5;\r\n  }\r\n  .corner-bottom {\r\n    height: 25px;\r\n    background-color:#5082A5;\r\n  }\r\n  .Loginitem {\r\n    color:white;\r\n    position: relative;\r\n  }\r\n\r\n .Registeritem {\r\n    color:white;\r\n    position: relative;\r\n  }\r\n\r\n  .link{\r\n      display: flex;\r\n      justify-content: flex-start;\r\n      padding: 20px;\r\n      cursor: pointer;\r\n  }\r\n  .Loginitem:hover .link {\r\n    background-color: white;\r\n    border-top-left-radius: 15px;\r\n    border-bottom-left-radius: 15px;\r\n    color:#5082a5;\r\n    \r\n  }\r\n\r\n  .Loginitem .active {\r\n    background-color: white;\r\n    border-top-left-radius: 15px;\r\n    border-bottom-left-radius: 15px;\r\n    color:#5082a5;\r\n    \r\n  }\r\n\r\n  .Loginitem:hover .corner-top {\r\n    border-bottom-right-radius: 27px;\r\n  }\r\n \r\n   .Loginitem:hover .corner-top-end {\r\n    background-color: white;\r\n  }\r\n\r\n  .Loginitem:hover .corner-bottom {\r\n    border-top-right-radius: 27px;\r\n  }\r\n  \r\n\r\n\r\n.Registeritem:hover .link {\r\n    background-color: white;\r\n    border-top-left-radius: 15px;\r\n    border-bottom-left-radius: 15px;\r\n    color:#5082a5;\r\n  }\r\n\r\n.Registeritem .active {\r\n    background-color: white;\r\n    border-top-left-radius: 15px;\r\n    border-bottom-left-radius: 15px;\r\n    color:#5082a5;\r\n  }\r\n\r\n  .Registeritem:hover .corner-top {\r\n    border-bottom-right-radius: 27px;\r\n  }\r\n\r\n   .Registeritem:hover .corner-top-end {\r\n    background-color: white;\r\n  }\r\n\r\n  .Registeritem:hover .corner-bottom {\r\n    border-top-right-radius: 27px;\r\n  }\r\n\r\n \r\n</style>\r\n"

/***/ }),

/***/ "./src/app/left-part/left-part.component.scss":
/*!****************************************************!*\
  !*** ./src/app/left-part/left-part.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/left-part/left-part.component.ts":
/*!**************************************************!*\
  !*** ./src/app/left-part/left-part.component.ts ***!
  \**************************************************/
/*! exports provided: LeftPartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftPartComponent", function() { return LeftPartComponent; });
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

var LeftPartComponent = /** @class */ (function () {
    function LeftPartComponent() {
        this.status = '';
    }
    LeftPartComponent.prototype.ngOnInit = function () {
    };
    LeftPartComponent.prototype.clickEvent = function (status) {
        this.status = status;
    };
    LeftPartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-part',
            template: __webpack_require__(/*! ./left-part.component.html */ "./src/app/left-part/left-part.component.html"),
            styles: [__webpack_require__(/*! ./left-part.component.scss */ "./src/app/left-part/left-part.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftPartComponent);
    return LeftPartComponent;
}());



/***/ }),

/***/ "./src/app/localadmin/createemployee/createemployee.component.css":
/*!************************************************************************!*\
  !*** ./src/app/localadmin/createemployee/createemployee.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2FsYWRtaW4vY3JlYXRlZW1wbG95ZWUvY3JlYXRlZW1wbG95ZWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/localadmin/createemployee/createemployee.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/localadmin/createemployee/createemployee.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"employeeForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"usr\">First Name:</label>\r\n        <input [ngClass]=\"{'is-invalid': employeeForm.get('FirstName').errors\r\n          && employeeForm.get('FirstName').touched}\" class=\"form-control\"\r\n              formControlName=\"FirstName\" id=\"FirstName\" placeholder=\"First Name\" type=\"text\">\r\n        <div class=\"invalid-feedback\">Please choose a First Name</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"usr\">Last Name:</label>\r\n        <input [ngClass]=\"{'is-invalid': employeeForm.get('LastName').errors\r\n          && employeeForm.get('LastName').touched}\" class=\"form-control\" formControlName=\"LastName\" id=\"LastName\" placeholder=\"Last Name\"\r\n              type=\"text\">\r\n        <div class=\"invalid-feedback\">Please choose a Last Name</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"pass\">User Name:</label>\r\n          <input class=\"form-control\" formControlName=\"UserName\" id=\"UserName\" placeholder=\"UserName\" type=\"text\" [ngClass]=\"{'is-invalid': employeeForm.get('UserName').errors\r\n          && employeeForm.get('UserName').touched}\">\r\n          <div class=\"invalid-feedback\">Please choose a User Name</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"usr\">Email:</label>\r\n        <input [ngClass]=\"{'is-invalid': employeeForm.get('Email').errors\r\n          && employeeForm.get('Email').touched}\" class=\"form-control\" formControlName=\"Email\" id=\"Email\" placeholder=\"Email\" type=\"text\">\r\n        <div class=\"invalid-feedback\">Please write an email</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"pass\">Address:</label>\r\n        <input class=\"form-control\" formControlName=\"Address\" id=\"Address\" placeholder=\"Address\" type=\"text\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"pass\">Phone:</label>\r\n        <input class=\"form-control\" formControlName=\"Phone\" id=\"Phone\" placeholder=\"Phone\" type=\"number\">\r\n      </div>\r\n      <div class=\"radio row\">\r\n        <label class=\"col-sm-1\">Role</label>\r\n        <div class=\"col-sm-6\">\r\n        <label for=\"\" *ngFor=\"let role of roles\">\r\n          <input type=\"radio\"  name=\"Role\" id=\"Role\" (click)=\"assignValue(role)\"> {{role}} <br />\r\n        </label>\r\n      </div>\r\n      </div>\r\n      <br/>\r\n      <div class=\"form-group\">\r\n          <button class=\"btn btn-primary\" [hidden]=\"!addBtn\">Add</button>\r\n          <button class=\"btn btn-primary\" [hidden]=\"addBtn\">Update</button>\r\n      </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/localadmin/createemployee/createemployee.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/localadmin/createemployee/createemployee.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateemployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateemployeeComponent", function() { return CreateemployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateemployeeComponent = /** @class */ (function () {
    function CreateemployeeComponent(fb, authService, alertify, route) {
        this.fb = fb;
        this.authService = authService;
        this.alertify = alertify;
        this.route = route;
    }
    CreateemployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = ['LocalAdmin', 'Employee'];
        this.createEmployeeForm();
        this.route.paramMap.subscribe(function (param) {
            var id = param.get('id');
            if (id.toString() !== '0') {
                _this.editEmployee(id.toString());
            }
        });
    };
    CreateemployeeComponent.prototype.createEmployeeForm = function () {
        this.addBtn = true;
        this.employeeForm = this.fb.group({
            Id: [''],
            FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Role: ['']
        });
    };
    CreateemployeeComponent.prototype.editEmployee = function (id) {
        var _this = this;
        this.authService.getEmployee(id).subscribe(function (data) {
            console.log(data);
            _this.employeeForm.setValue({
                Id: data.id,
                FirstName: data.firstName,
                LastName: data.lastName,
                Email: data.email,
                Address: data.address,
                Phone: data.phone,
                UserName: data.userName,
                Role: ''
            });
        });
    };
    CreateemployeeComponent.prototype.assignValue = function (role) {
        this.employeeForm.patchValue({
            Role: role
        });
    };
    CreateemployeeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.employee = Object.assign({}, this.employeeForm.value);
        if (this.employee.Role === '') {
            this.alertify.error('Choose Role');
        }
        else {
            if (this.employee.id === '') {
                this.employee.id = '00000000-0000-0000-0000-000000000000';
                this.authService.registerEmployee(this.employee).subscribe(function () {
                    _this.alertify.success('Employee registered successfully');
                }, function (error) {
                    _this.alertify.error(error);
                });
            }
            else {
                this.authService.updateEmployee(this.employee).subscribe(function () {
                    _this.alertify.success('Updated successfully');
                }, function (error) {
                    console.log(error);
                    _this.alertify.error(error);
                });
            }
        }
    };
    CreateemployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createemployee',
            template: __webpack_require__(/*! ./createemployee.component.html */ "./src/app/localadmin/createemployee/createemployee.component.html"),
            styles: [__webpack_require__(/*! ./createemployee.component.css */ "./src/app/localadmin/createemployee/createemployee.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CreateemployeeComponent);
    return CreateemployeeComponent;
}());



/***/ }),

/***/ "./src/app/localadmin/createvehiclecategory/createvehiclecategory.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/localadmin/createvehiclecategory/createvehiclecategory.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2FsYWRtaW4vY3JlYXRldmVoaWNsZWNhdGVnb3J5L2NyZWF0ZXZlaGljbGVjYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/localadmin/createvehiclecategory/createvehiclecategory.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/localadmin/createvehiclecategory/createvehiclecategory.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"vehicleTypeForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n          <label>Name</label>\r\n          <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{'is-invalid': vehicleTypeForm.get('name').errors \r\n          && vehicleTypeForm.get('name').touched}\"  />\r\n          <div class=\"invalid-feedback\">Please choose a name</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label>Company</label>\r\n          <select formControlName=\"companyId\" class=\"form-control\" class=\"form-control\" [ngClass]=\"{'is-invalid': vehicleTypeForm.get('companyId').errors \r\n        && vehicleTypeForm.get('companyId').touched}\">\r\n          <option *ngFor=\"let company of companies\" [value]=\"company.id\">\r\n                  {{company?.name}}\r\n          </option>\r\n        </select>\r\n        <div class=\"invalid-feedback\">Please choose the country</div>\r\n          \r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Description</label>\r\n        <input type=\"text\" formControlName=\"description\" class=\"form-control\"  />\r\n    </div>\r\n      <div class=\"form-group\">\r\n          <button class=\"btn btn-primary\" [hidden]=\"!addBtn\">Add</button>\r\n          <button class=\"btn btn-primary\" [hidden]=\"addBtn\">Update</button>\r\n      </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/localadmin/createvehiclecategory/createvehiclecategory.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/localadmin/createvehiclecategory/createvehiclecategory.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CreatevehiclecategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatevehiclecategoryComponent", function() { return CreatevehiclecategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_vehicletype_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/vehicletype.service */ "./src/app/_services/vehicletype.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatevehiclecategoryComponent = /** @class */ (function () {
    function CreatevehiclecategoryComponent(vehicleTypeService, alertify, route, router, fb) {
        this.vehicleTypeService = vehicleTypeService;
        this.alertify = alertify;
        this.route = route;
        this.router = router;
        this.fb = fb;
    }
    CreatevehiclecategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // dummydata
        this.companies = [{ id: 1, name: 'Company1' }, { id: 1, name: 'Company2' }];
        this.route.paramMap.subscribe(function (param) {
            var id = param.get('id');
            _this.addBtn = true;
            _this.vehicleTypeForm = _this.fb.group({
                id: [''],
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                companyId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                description: ['']
            });
            if (id.toString() !== '0') {
                _this.addBtn = false;
                _this.vehicleTypeService.getById(id).subscribe(function (data) {
                    _this.vehicleTypeForm.setValue({
                        id: data.id,
                        name: data.name,
                        companyId: data.companyId,
                        description: data.description
                    });
                }, function (error) {
                    _this.alertify.error('Could not retrieve data');
                });
            }
        });
    };
    CreatevehiclecategoryComponent.prototype.onSubmit = function () {
        var _this = this;
        this.vehicleType = Object.assign({}, this.vehicleTypeForm.value);
        if (this.vehicleType.id === '') {
            this.vehicleType.id = '00000000-0000-0000-0000-000000000000';
            this.vehicleType.companyId = null;
            this.vehicleTypeService.create(this.vehicleType).subscribe(function () {
                _this.alertify.success('Created successfully');
                _this.router.navigate(['/vehicletypes']);
            }, function (error) {
                console.log(error);
                _this.alertify.error(error);
            });
        }
        else {
            this.vehicleTypeService.update(this.vehicleType).subscribe(function () {
                _this.router.navigate(['/vehicletypes']);
            }, function (error) {
                _this.alertify.error(error);
            });
        }
    };
    CreatevehiclecategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createvehiclecategory',
            template: __webpack_require__(/*! ./createvehiclecategory.component.html */ "./src/app/localadmin/createvehiclecategory/createvehiclecategory.component.html"),
            styles: [__webpack_require__(/*! ./createvehiclecategory.component.css */ "./src/app/localadmin/createvehiclecategory/createvehiclecategory.component.css")]
        }),
        __metadata("design:paramtypes", [_services_vehicletype_service__WEBPACK_IMPORTED_MODULE_1__["VehicletypeService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CreatevehiclecategoryComponent);
    return CreatevehiclecategoryComponent;
}());



/***/ }),

/***/ "./src/app/localadmin/employee/employee.component.css":
/*!************************************************************!*\
  !*** ./src/app/localadmin/employee/employee.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2FsYWRtaW4vZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/localadmin/employee/employee.component.html":
/*!*************************************************************!*\
  !*** ./src/app/localadmin/employee/employee.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <button class=\"btn btn-primary mb-2\" [routerLink]=\"['/editemployee/0']\" routerLinkActive=\"router-link-active\" >Add new</button>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th >First Name</th>\r\n          <th >LastName</th>\r\n          <th>User Name</th>\r\n          <th>Email Address</th>\r\n          <th>Address</th>\r\n          <th>Phone</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let employee of employees\">\r\n          <td>{{employee.firstName}}</td>\r\n          <td>{{employee.lastName}}</td>\r\n          <td>{{employee.userName}}</td>\r\n          <td>{{employee.email}}</td>\r\n          <td>{{employee.address}}</td>\r\n          <td>{{employee.phone}}</td>\r\n          <td><button (click)=\"editemployee(employee.id)\" class=\"btn btn-link\">Edit</button>\r\n            <button (click)=\"deleteEmployee(employee.id)\" class=\"btn btn-link\">Delete</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>"

/***/ }),

/***/ "./src/app/localadmin/employee/employee.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/localadmin/employee/employee.component.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    EmployeeComponent.prototype.getEmployees = function () {
        var _this = this;
        this.authService.getEmployees().subscribe(function (_employees) {
            _this.employees = _employees;
            console.log(_employees);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    EmployeeComponent.prototype.editemployee = function (id) {
        this.router.navigate(['/editemployee', id]);
    };
    EmployeeComponent.prototype.deleteEmployee = function (id) {
        var _this = this;
        this.alertify.confirm('Are you sure you want to delete this', function () {
            _this.authService.deleteEmploee(id).subscribe(function () {
                _this.router.navigate(['/employees']);
            }, function (error) {
                console.log(error);
                _this.alertify.error(error);
            });
        });
    };
    EmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/localadmin/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/localadmin/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/localadmin/vehiclecategory/vehiclecategory.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/localadmin/vehiclecategory/vehiclecategory.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2FsYWRtaW4vdmVoaWNsZWNhdGVnb3J5L3ZlaGljbGVjYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/localadmin/vehiclecategory/vehiclecategory.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/localadmin/vehiclecategory/vehiclecategory.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <button class=\"btn btn-primary mb-2\" [routerLink]=\"['/editvehicletype/0']\" routerLinkActive=\"router-link-active\" >Add new</button>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th >Name</th>\r\n        <th >Company</th>\r\n        <th>Description</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let vehicletype of vehicleTypes\">\r\n        <td>{{vehicletype.name}}</td>\r\n        <td>{{vehicletype.company?.name}}</td>\r\n        <td>{{vehicletype.description}}</td>\r\n        <td><button (click)=\"editVehicleType(vehicletype.id)\" class=\"btn btn-link\">Edit</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/localadmin/vehiclecategory/vehiclecategory.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/localadmin/vehiclecategory/vehiclecategory.component.ts ***!
  \*************************************************************************/
/*! exports provided: VehiclecategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclecategoryComponent", function() { return VehiclecategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_vehicletype_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/vehicletype.service */ "./src/app/_services/vehicletype.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehiclecategoryComponent = /** @class */ (function () {
    function VehiclecategoryComponent(vehicleTypeService, router, alertify) {
        this.vehicleTypeService = vehicleTypeService;
        this.router = router;
        this.alertify = alertify;
    }
    VehiclecategoryComponent.prototype.ngOnInit = function () {
        this.getVehicleTypes();
    };
    VehiclecategoryComponent.prototype.getVehicleTypes = function () {
        var _this = this;
        this.vehicleTypeService.getVehicleTypes().subscribe(function (_vehicleTypes) {
            _this.vehicleTypes = _vehicleTypes;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    VehiclecategoryComponent.prototype.editVehicleType = function (id) {
        this.router.navigate(['/editvehicletype', id]);
    };
    VehiclecategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehiclecategory',
            template: __webpack_require__(/*! ./vehiclecategory.component.html */ "./src/app/localadmin/vehiclecategory/vehiclecategory.component.html"),
            styles: [__webpack_require__(/*! ./vehiclecategory.component.css */ "./src/app/localadmin/vehiclecategory/vehiclecategory.component.css")]
        }),
        __metadata("design:paramtypes", [_services_vehicletype_service__WEBPACK_IMPORTED_MODULE_1__["VehicletypeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], VehiclecategoryComponent);
    return VehiclecategoryComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" *ngIf=\"!authService.loggedIn()\">\r\n  <div class=\"left-part-wrapper\">\r\n    <div class=\"content\">\r\n      <img alt=\"\" class=\"logo\" src=\"../../assets/Icons/logo.svg\">\r\n      <a\r\n        (click)=\"setLoginMode('login')\"\r\n        class=\"navigation-link login {{ loginMode ? 'active' : '' }}\"\r\n      > Login</a\r\n      >\r\n      <a\r\n        (click)=\"setLoginMode('register')\"\r\n        class=\"navigation-link sign-up {{ loginMode ? '' : 'active' }}\"\r\n      >Register</a\r\n      >\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"loginMode\" class=\"login-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-wrapper\">\r\n          <form #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\r\n            <h5>You Can Login</h5>\r\n            <div class=\"forms\">\r\n              <div class=\"options-forms\">\r\n                <div class=\"form-group state-form\">\r\n                  <label for=\"country\">State</label>\r\n                  <select (focus)=\"onFocusField($event)\" [(ngModel)]=\"model.country\" class=\"form-control\" id=\"country\"\r\n                          name=\"country\">\r\n                      <option selected>...</option>\r\n                      <option *ngFor=\"let country of countries\" [value]=\"country.id\" class=\"option-control\">\r\n                          {{country.name}}\r\n                      </option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"form-group languange-form\">\r\n                  <label for=\"language\">Language</label>\r\n                  <select (focus)=\"onFocusField($event)\" class=\"form-control\" [(ngModel)]=\"model.language\"  id=\"language\" name=\"language\">\r\n                      <option selected>...</option>\r\n                      <option *ngFor=\"let language of languages\" [value]=\"language.code\" class=\"option-control\">{{language.name}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"username\">Name:</label>\r\n                <input\r\n                  (blur)=\"checkIsEmpty($event)\" (focus)=\"onFocusField($event)\"\r\n                  [(ngModel)]=\"model.Username\"\r\n                  class=\"form-control \"\r\n                  id=\"username\"\r\n                  name=\"Username\"\r\n                  placeholder=\"User\"\r\n                  type=\"text\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">Password:</label>\r\n                <input\r\n                  (blur)=\"checkIsEmpty($event)\"\r\n                  (focus)=\"onFocusField($event)\"\r\n                  [(ngModel)]=\"model.Password\"\r\n                  class=\"form-control\"\r\n                  id=\"password\"\r\n                  name=\"Password\"\r\n                  placeholder=\"Password\"\r\n                  type=\"password\"\r\n                />\r\n              </div>\r\n              <div class=\"text-part\">\r\n                <div class=\"form-check\">\r\n                  <div class=\"custom-control custom-checkbox\">\r\n                    <input\r\n                      class=\"custom-control-input \"\r\n                      id=\"remember-me\"\r\n                      type=\"checkbox\"\r\n                    />\r\n                    <label\r\n                      class=\"custom-control-label remember-me-label\"\r\n                      for=\"remember-me\"\r\n                    >Remember Me</label\r\n                    >\r\n                  </div>\r\n                </div>\r\n\r\n                <a class=\"forgot-password\" href=\"#\">Forgot Password ?</a>\r\n              </div>\r\n              <button [disabled]=\"!loginForm.valid\" class=\"btn btn-primary\" type=\"submit\">Login</button>\r\n            </div>\r\n            <!--<div class=\"term-of-use\">-->\r\n              <!--<div class=\"custom-control custom-checkbox\">-->\r\n                <!--<input-->\r\n                  <!--class=\"custom-control-input\"-->\r\n                  <!--id=\"customCheck1\"-->\r\n                  <!--type=\"checkbox\"-->\r\n                <!--/>-->\r\n                <!--<label class=\"custom-control-label\" for=\"customCheck1\"-->\r\n                <!--&gt;<p>-->\r\n                  <!--I agree to the <a class=\"terms\" href=\"#\">Terms of Use </a> and-->\r\n                  <!--our <a class=\"privacy-policy\" href=\"#\"> Privacy Policy.</a>-->\r\n                <!--</p></label-->\r\n                <!--&gt;-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"!loginMode\" class=\"register-wrapper\">\r\n\r\n    <form (submit)=\"register()\" [formGroup]=\"registerForm\" style=\"width: 100%;\">\r\n\r\n      <div class=\"form-wrapper\">\r\n        <div class=\"forms\">\r\n          <div *ngIf=\"!nextStep && !lastStep\">\r\n            <ul class=\"progressbar\">\r\n              <li class=\"active\"></li>\r\n              <li></li>\r\n              <li></li>\r\n            </ul>\r\n            <h5>Personal Information</h5>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-10\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"FirstName\">First Name:</label>\r\n                  <input (blur)=\"checkIsEmpty($event)\" (focus)=\"onFocusField($event)\"\r\n                         [ngClass]=\"{'is-invalid': registerForm.get('FirstName').errors\r\n                  && registerForm.get('FirstName').touched}\" class=\"form-control\" formControlName=\"FirstName\"\r\n                         id=\"FirstName\"\r\n                         placeholder=\"First Name\" type=\"text\"\r\n                  >\r\n                  <!-- <div class=\"invalid-feedback\">Please choose a First Name</div> -->\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"LastName\">Last Name:</label>\r\n                  <input (blur)=\"checkIsEmpty($event)\" (focus)=\"onFocusField($event)\" [ngClass]=\"{'is-invalid': registerForm.get('LastName').errors\r\n                  && registerForm.get('LastName').touched}\"\r\n                         class=\"form-control\"\r\n                         formControlName=\"LastName\" id=\"LastName\"\r\n                         placeholder=\"Last Name\" type=\"text\">\r\n                  <!-- <div class=\"invalid-feedback\">Please choose a Last Name</div> -->\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"Email\">Email:</label>\r\n                  <input (blur)=\"checkIsEmpty($event)\" (focus)=\"onFocusField($event)\" [ngClass]=\"{'is-invalid': registerForm.get('Email').errors\r\n                  && registerForm.get('Email').touched}\" class=\"form-control\"\r\n                         formControlName=\"Email\"\r\n                         id=\"Email\" placeholder=\"Email\"\r\n                         type=\"text\">\r\n                  <!-- <div class=\"invalid-feedback\">Please write an email</div> -->\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"Address\">Address:</label>\r\n                  <input (blur)=\"checkIsEmpty($event)\" (focus)=\"onFocusField($event)\" class=\"form-control\"\r\n                         formControlName=\"Address\" id=\"Address\"\r\n                         placeholder=\"Address\" type=\"text\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"Phone\">Phone:</label>\r\n                  <input (blur)=\"checkIsEmpty($event)\" (focus)=\"onFocusField($event)\" class=\"form-control\"\r\n                         formControlName=\"Phone\" id=\"Phone\"\r\n                         placeholder=\"Phone\" type=\"number\">\r\n                </div>\r\n                <div class=\"options-forms\">\r\n                  <label for=\"\">Date Of Birth</label>\r\n                  <div class=\"options-form-wrapper\">\r\n                    <div class=\"form-group date-form\">\r\n                      <select (blur)=\"checkIsEmpty($event)\" (focus)=\"onFocusField($event)\"\r\n                              [ngClass]=\"{'is-invalid': registerForm.get('Date').errors\r\n                        && registerForm.get('Date').touched}\" class=\"form-control\" formControlName=\"Date\"\r\n                              id=\"date\" value=\"Date\"\r\n                      >\r\n                        <option (blur)=\"checkIsEmpty($event)\" (focus)=\"onFocusField($event)\" *ngFor=\"let day of days\"\r\n                                [value]=\"day\"\r\n                                class=\"option-control\">{{day}}</option>\r\n                      </select>\r\n                      <!-- <div class=\"invalid-feedback\">Please select a date</div> -->\r\n                    </div>\r\n                    <div class=\"form-group month-form\">\r\n                      <select (blur)=\"checkIsEmpty($event)\" (focus)=\"onFocusField($event)\" [ngClass]=\"{'is-invalid': registerForm.get('Month').errors\r\n                        && registerForm.get('Month').touched}\" class=\"form-control\"\r\n                              formControlName=\"Month\" id=\"Month\">\r\n                        <option *ngFor=\"let month of months\" [value]=\"month\" class=\"option-control\">{{month}}</option>\r\n                      </select>\r\n                      <!-- <div class=\"invalid-feedback\">Please select a month</div> -->\r\n                    </div>\r\n                    <div class=\"form-group year-form\">\r\n                      <select (blur)=\"checkIsEmpty($event)\" (focus)=\"onFocusField($event)\" [ngClass]=\"{'is-invalid': registerForm.get('Year').errors\r\n                        && registerForm.get('Year').touched}\" class=\"form-control\"\r\n                              formControlName=\"Year\" id=\"Year\">\r\n                        <option *ngFor=\"let year of years\" [value]=\"year\" class=\"option-control\">{{year}}</option>\r\n                      </select>\r\n                      <!-- <div class=\"invalid-feedback\">Please select a Year</div> -->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <button (click)=\"changeNextStep()\" class=\"btn btn-default\" type=\"button\">Next</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngIf=\"nextStep && !lastStep\" class=\"next-step-info\">\r\n            <ul class=\"progressbar\">\r\n              <li class=\"active\"></li>\r\n              <li class=\"active\"></li>\r\n              <li></li>\r\n            </ul>\r\n            <h5>Company Information</h5>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"\">\r\n                  <div class=\"img-uploader\">\r\n                    <div class=\"box\">\r\n                      <input (change)=\"onFileChange($event)\" class=\"inputfile inputfile-4\"\r\n                             data-multiple-caption=\"{count} files selected\" id=\"file-5\" multiple\r\n                             name=\"file-5[]\" type=\"file\"/>\r\n                      <label for=\"file-5\">\r\n                        <figure><i class=\"fa  fa-camera-retro\"></i></figure>\r\n                        <span id=\"logoSpan\">Upload your Logo&hellip;</span></label>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"UserName\">Username:</label>\r\n                  <input (blur)=\"checkIsEmpty($event)\" (focus)=\"onFocusField($event)\"\r\n                         [ngClass]=\"{'is-invalid': registerForm.get('UserName').errors\r\n              && registerForm.get('UserName').touched}\" class=\"form-control\" formControlName=\"UserName\" id=\"UserName\"\r\n                         placeholder=\"UserName\" type=\"text\">\r\n                  <!-- <div class=\"invalid-feedback\">Please choose a username</div> -->\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"registerPassword\">Password:</label>\r\n                  <input (blur)=\"checkIsEmpty($event)\" (focus)=\"onFocusField($event)\"\r\n                         [ngClass]=\"{'is-invalid': registerForm.get('Password').errors\r\n                  && registerForm.get('Password').touched}\"\r\n                         class=\"form-control\"\r\n                         formControlName=\"Password\" id=\"registerPassword\"\r\n                         placeholder=\"Password\"\r\n                         type=\"password\">\r\n                  <div *ngIf=\"registerForm.get('Password').hasError('required')\r\n                    && registerForm.get('Password').touched\"\r\n                       class=\"invalid-feedback\">\r\n                    Password is required\r\n                  </div>\r\n                  <div *ngIf=\"registerForm.get('Password').hasError('minlength')\r\n                  && registerForm.get('Password').touched\"\r\n                       class=\"invalid-feedback\">\r\n                    Password must be at least 4 characters\r\n                  </div>\r\n                  <div *ngIf=\"registerForm.get('Password').hasError('maxlength')\r\n                && registerForm.get('Password').touched\"\r\n                       class=\"invalid-feedback\">\r\n                    Password cannot exceed 8 characters\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"registerConfirmPassword\">Confirm Password:</label>\r\n                  <input (blur)=\"checkIsEmpty($event)\"\r\n                         (focus)=\"onFocusField($event)\"\r\n                         [ngClass]=\"{'is-invalid': registerForm.get('confirmPassword').errors\r\n                  && registerForm.get('confirmPassword').touched\r\n                  || registerForm.get('confirmPassword').touched\r\n                  && registerForm.hasError('mismatch')}\"\r\n                         class=\"form-control\"\r\n                         formControlName=\"confirmPassword\"\r\n                         id=\"registerConfirmPassword\" placeholder=\"Confirm Password\"\r\n                         type=\"password\">\r\n                  <div *ngIf=\"registerForm.get('confirmPassword').hasError('required')\r\n                  && registerForm.get('confirmPassword').touched\"\r\n                       class=\"invalid-feedback\">\r\n                    Confirm Password is required\r\n                  </div>\r\n                  <div *ngIf=\"registerForm.hasError('mismatch')\r\n                && registerForm.get('confirmPassword').touched\"\r\n                       class=\"invalid-feedback\">\r\n                    Passwords must match\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"CompanyName\">CompanyName:</label>\r\n                  <input (blur)=\"checkIsEmpty($event)\" (focus)=\"onFocusField($event)\"\r\n                         [ngClass]=\"{'is-invalid': registerForm.get('Email').errors\r\n              && registerForm.get('Email').touched}\" class=\"form-control\" formControlName=\"CompanyName\" id=\"CompanyName\"\r\n                         placeholder=\"CompanyName\" type=\"text\">\r\n                  <div class=\"invalid-feedback\">Please write a company name</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"CompanyEmail\">Company Email:</label>\r\n                  <input (blur)=\"checkIsEmpty($event)\" (focus)=\"onFocusField($event)\"\r\n                         [ngClass]=\"{'is-invalid': registerForm.get('Email').errors\r\n              && registerForm.get('Email').touched}\" class=\"form-control\" formControlName=\"CompanyEmail\"\r\n                         id=\"CompanyEmail\"\r\n                         placeholder=\"CompanyEmail\" type=\"text\">\r\n                  <div class=\"invalid-feedback\">Please write a company email</div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"CompanyPhone\">Company Phone:</label>\r\n                  <input (blur)=\"checkIsEmpty($event)\" (focus)=\"onFocusField($event)\" class=\"form-control\"\r\n                         formControlName=\"CompanyPhone\" id=\"CompanyPhone\"\r\n                         placeholder=\"CompanyPhone\" type=\"number\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"CompanyAddress\">Company Address:</label>\r\n                  <input (blur)=\"checkIsEmpty($event)\" (focus)=\"onFocusField($event)\" class=\"form-control\"\r\n                         formControlName=\"CompanyAddress\" id=\"CompanyAddress\"\r\n                         placeholder=\"CompanyAddress\" type=\"text\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"PostalCode\">Postal Code:</label>\r\n                  <input (blur)=\"checkIsEmpty($event)\" (focus)=\"onFocusField($event)\" class=\"form-control\"\r\n                         formControlName=\"PostalCode\"\r\n                         id=\"PostalCode\" placeholder=\"PostalCode\"\r\n                         type=\"number\">\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <label for=\"Country\">Country</label>\r\n                    <select (blur)=\"checkIsEmpty($event)\" (change)=\"getCities($event.target.value)\"\r\n                            (focus)=\"onFocusField($event)\"\r\n                            [ngClass]=\"{'is-invalid': registerForm.get('Country').errors\r\n                              && registerForm.get('Country').touched}\" class=\"form-control\" formControlName=\"Country\"\r\n                            id=\"Country\"\r\n                            value=\"Country\">\r\n                      <option selected>...</option>\r\n                      <option *ngFor=\"let country of countries\" [value]=\"country.id\"\r\n                              class=\"option-control\">{{country.name}}</option>\r\n                    </select>\r\n                    <!-- <div class=\"invalid-feedback\">Please select a country</div> -->\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <label for=\"City\">City</label>\r\n                    <select (blur)=\"checkIsEmpty($event)\" (focus)=\"onFocusField($event)\"\r\n                            [ngClass]=\"{'is-invalid': registerForm.get('City').errors\r\n                          && registerForm.get('City').touched}\" class=\"form-control\" formControlName=\"City\" id=\"City\"\r\n                            value=\"City\">\r\n                      <option selected>...</option>\r\n                      <option *ngFor=\"let city of cities\" [value]=\"city.id\"\r\n                              class=\"option-control\">{{city.name}}</option>\r\n                    </select>\r\n                    <!-- <div class=\"invalid-feedback\">Please select a city</div> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"term-of-use\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input\r\n                  class=\"custom-control-input\"\r\n                  id=\"customCheck2\"\r\n                  type=\"checkbox\"\r\n                />\r\n                <label class=\"custom-control-label\" for=\"customCheck2\"\r\n                ><p>\r\n                  I agree to the <a class=\"terms\" href=\"#\">Terms of Use </a> and\r\n                  our <a class=\"privacy-policy\" href=\"#\"> Privacy Policy.</a>\r\n                </p></label\r\n                >\r\n              </div>\r\n            </div>\r\n            <div class=\"button-wrapper\">\r\n              <button class=\"btn btn-default pull-left col-sm-5 mr-4\" type=\"submit\">Submit</button>\r\n              <button (click)=\"changeNextStep()\" class=\"btn btn-default pull-right col-sm-5\" type=\"button\">Back</button>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"lastStep\" class=\"successful\">\r\n            <ul class=\"progressbar\">\r\n              <li class=\"active\"></li>\r\n              <li class=\"active\"></li>\r\n              <li class=\"active\"></li>\r\n            </ul>\r\n            <br>\r\n            <h5 class=\"first-header\">Successful</h5>\r\n            <p>Check Your E-Mail for a booking confirmation.\r\n              We'll see you soon! Lorem Ipsum has been the industry's standard dummy </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/country.service */ "./src/app/_services/country.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/language.service */ "./src/app/_services/language.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, alertify, router, fb, route, countryService, languageService) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.countryService = countryService;
        this.languageService = languageService;
        this.model = {};
        this.loginMode = true;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-inferrable-types
        this.nextStep = false;
        this.hasBaseDropZoneOver = false;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.lastStep = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.lastStep = false;
        this.createRegisterForm();
        this.getCountries();
        this.getLanguages();
        this.days = this.arrayThree(31, 1);
        this.months = this.arrayThree(12, 1);
        this.years = this.arrayThree(20, 2000);
        //  Script for styling the upload photo
        var inputs = document.querySelectorAll(".inputfile");
        Array.prototype.forEach.call(inputs, function (input) {
            var label = input.nextElementSibling, labelVal = label.innerHTML;
            input.addEventListener("change", function (e) {
                var fileName = "";
                if (this.files && this.files.length > 1) {
                    fileName = (this.getAttribute("data-multiple-caption") || "").replace("{count}", this.files.length);
                }
                else {
                    fileName = e.target.value.split("\\").pop();
                }
                if (fileName) {
                    label.querySelector("span").innerHTML = fileName;
                }
                else {
                    label.innerHTML = labelVal;
                }
            });
        });
    };
    LoginComponent.prototype.getLanguages = function () {
        var _this = this;
        this.languageService.getLanguages().subscribe(function (_languages) {
            _this.languages = _languages;
        });
    };
    LoginComponent.prototype.getCities = function (countryId) {
        var _this = this;
        this.countryService.getCitiesByCountryId(countryId).subscribe(function (data) {
            _this.cities = data;
        });
    };
    LoginComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryService.getCountries().subscribe(function (data) {
            _this.countries = data; //data['countries'];
        });
    };
    LoginComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.fb.group({
            FirstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            LastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Month: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Year: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            CompanyName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            UserName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Password: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(8)
                ]
            ],
            CompanyEmail: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            CompanyPhone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            CompanyAddress: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            PostalCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            City: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Logo: [""]
        }, { validator: this.passwordMatchValidator });
    };
    // registerData() {
    //   this.registerForm = this.fb.group({
    //     name: ['', Validators.required]
    //   });
    // }
    LoginComponent.prototype.submitRegisterForm = function () {
        console.log(this.registerForm.value);
        // this.nextStep();
    };
    LoginComponent.prototype.passwordMatchValidator = function (g) {
        return g.get("Password").value === g.get("confirmPassword").value
            ? null
            : { mismatch: true };
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            var year = this.registerForm.get("Year").value;
            var month = this.registerForm.get("Month").value;
            var day = this.registerForm.get("Date").value;
            this.user.dOB = new Date(year, month, day, 0, 0, 0);
            this.authService.register(this.user).subscribe(function () {
                _this.lastStep = true;
                //this.alertify.success("Registration successful");
            }, function (error) {
                _this.alertify.error(error);
            }, function () {
                // this.authService.login(this.user).subscribe(() => {
                //   this.router.navigate(["/members"]);
                // });
            });
        }
    };
    LoginComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    LoginComponent.prototype.changeNextStep = function () {
        this.nextStep = !this.nextStep;
    };
    LoginComponent.prototype.onFileChange = function (event) {
        var fileToUpload = event.target.files[0];
        this.registerForm.patchValue({
            Logo: fileToUpload
        });
        //  var tmppath = URL.createObjectURL(event.target.files[0]);
        document.getElementById("logoSpan").innerHTML = event.target.files[0].name;
    };
    LoginComponent.prototype.arrayThree = function (n, startFrom) {
        return new Array(n).fill(1).map(function (x, i) { return i + startFrom; });
    };
    LoginComponent.prototype.setLoginMode = function (part) {
        this.loginMode = part == "login";
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.model);
        this.authService.login(this.model).subscribe(function (next) {
            _this.router.navigate(["/home"]);
            //this.alertify.success("Logged in successfully");
        }, function (error) {
            _this.alertify.error(error.message);
        });
    };
    LoginComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    LoginComponent.prototype.logout = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("refreshToken");
        this.authService.decodedToken = null;
        this.authService.currentUser = null;
        this.alertify.message("logged out");
        this.router.navigate(["/home"]);
    };
    LoginComponent.prototype.checkIsEmpty = function (event) {
        var control = document.getElementById(event.target.id);
        if (control.value.length > 0) {
            control.classList.add("active-form");
        }
        else {
            control.classList.remove("active-form");
        }
    };
    LoginComponent.prototype.onFocusField = function (event) {
        document.getElementById(event.target.id).classList.add("active-form");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "valuesFromHome", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "cancelRegister", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_6__["CountryService"],
            _services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-nav-bar-component/main-nav-bar-component.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/main-nav-bar-component/main-nav-bar-component.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.navMenu {\r\n    width: 100%;\r\n    display: flex; \r\n    justify-content:space-between\r\n}\r\n.burgerMenu{\r\n    display:flex; \r\n    justify-content:space-around;\r\n    padding:20px;\r\n    width: 200px;\r\n}\r\n.notify-menu{\r\n    display: flex; \r\n    justify-content: \r\n    flex-start;\r\n    padding:20px; \r\n    width: 300px;\r\n}\r\n.notify-item {\r\n    margin-right:20px;\r\n}\r\n.notify-badge {\r\n    position:relative;\r\n}\r\n.notify-badge[data-badge]:after {\r\n    content:attr(data-badge);\r\n    position:absolute;\r\n    top:-10px;\r\n    right:-10px;\r\n    font-size:.7em;\r\n    background:#ff6e6e;\r\n    color:white;\r\n    width:18px;height:18px;\r\n    text-align:center;\r\n    line-height:18px;\r\n    border-radius:50%;\r\n    box-shadow:0 0 1px #333;\r\n}\r\n.mail-badge {\r\n    position:relative;\r\n}\r\n.mail-badge[data-badge]:after {\r\n    content: attr(data-badge);\r\n    position: absolute;\r\n    top: 0px;\r\n    right: -10px;\r\n    font-size: .7em;\r\n    background: #ffe96e;\r\n    color: white;\r\n    width: 10px;\r\n    height: 10px;\r\n    text-align: center;\r\n    line-height: 18px;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 1px #333;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1uYXYtYmFyLWNvbXBvbmVudC9tYWluLW5hdi1iYXItY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCw2QkFBNkI7Q0FDaEM7QUFDRDtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLGNBQWM7SUFDZDtlQUNXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVyxZQUFZO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtDQUMzQjtBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7Q0FDNUIiLCJmaWxlIjoic3JjL2FwcC9tYWluLW5hdi1iYXItY29tcG9uZW50L21haW4tbmF2LWJhci1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubmF2TWVudSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW5cclxufVxyXG4uYnVyZ2VyTWVudXtcclxuICAgIGRpc3BsYXk6ZmxleDsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4ubm90aWZ5LW1lbnV7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGp1c3RpZnktY29udGVudDogXHJcbiAgICBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzoyMHB4OyBcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLm5vdGlmeS1pdGVtIHtcclxuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xyXG59XHJcbi5ub3RpZnktYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuLm5vdGlmeS1iYWRnZVtkYXRhLWJhZGdlXTphZnRlciB7XHJcbiAgICBjb250ZW50OmF0dHIoZGF0YS1iYWRnZSk7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDotMTBweDtcclxuICAgIHJpZ2h0Oi0xMHB4O1xyXG4gICAgZm9udC1zaXplOi43ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiNmZjZlNmU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHdpZHRoOjE4cHg7aGVpZ2h0OjE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OjE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIGJveC1zaGFkb3c6MCAwIDFweCAjMzMzO1xyXG59XHJcblxyXG4ubWFpbC1iYWRnZSB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4ubWFpbC1iYWRnZVtkYXRhLWJhZGdlXTphZnRlciB7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtYmFkZ2UpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogLTEwcHg7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZlOTZlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzMzMztcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/main-nav-bar-component/main-nav-bar-component.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/main-nav-bar-component/main-nav-bar-component.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav  class=\"navbar navbar-expand-lg navbar-light bg-light navMenu\">\r\n    <div class=\"burgerMenu\"> \r\n        <div> \r\n            <a [routerLink]=\"['/']\"  routerLinkActive=\"router-link-active\" >\r\n               \r\n                CarTab </a>\r\n           </div>\r\n        <div>  <i style=\"cursor: pointer;\" class=\"fa fa-bars\" aria-hidden=\"true\" (click)=\"clickEvent()\"></i> </div>\r\n    </div>\r\n  <div class=\"notify-menu\">\r\n        <div class=\"notify-item\"> \r\n            <div class=\"mail-badge\" data-badge=\"\" style=\"width: 21px;height: 24px;\"> \r\n              <i style=\"font-size: 24px\" class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i></div>\r\n         </div>\r\n        <div class=\"notify-item\"> \r\n            <div class=\"notify-badge\" data-badge=\"7\" style=\"width: 21px;height: 24px;\"> \r\n              <i style=\"font-size: 24px;\" class=\"fa fa-bell-o\" aria-hidden=\"true\"></i></div>\r\n        </div>\r\n         \r\n        \r\n            <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n                <ul class=\"navbar-nav\">\r\n                 \r\n                  <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                      {{authService.currentUser?.name}} {{authService.currentUser?.lastname}} \r\n                    </a>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                      <a class=\"dropdown-item\" >{{authService.company?.name}}</a>\r\n                      <a class=\"dropdown-item\" [routerLink]=\"['/editprofile',authService.currentUser.id]\" routerLinkActive=\"router-link-active\" >Edit profile</a>\r\n                      <hr>\r\n                      <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"logout()\" >Sing out</a>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n          \r\n       \r\n        <!-- <div class=\"notify-item\"> carTab</div> -->\r\n        <!-- <div class=\"notify-item\">\r\n           <button *ngFor=\"let lang of translate.getLangs()\" (click)=\"translate.use(lang)\">{{ lang }} </button>\r\n        </div> -->\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/main-nav-bar-component/main-nav-bar-component.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main-nav-bar-component/main-nav-bar-component.component.ts ***!
  \****************************************************************************/
/*! exports provided: MainNavBarComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavBarComponentComponent", function() { return MainNavBarComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainNavBarComponentComponent = /** @class */ (function () {
    function MainNavBarComponentComponent(translate, authService, router) {
        this.translate = translate;
        this.authService = authService;
        this.router = router;
    }
    MainNavBarComponentComponent.prototype.ngOnInit = function () { };
    MainNavBarComponentComponent.prototype.clickEvent = function () {
        // //ToDo: This could be done better, but for the beginning it is enough - arlindi
        // let element = document.getElementById("mySidebar");
        // let eleContent = document.getElementById("SideBarContent");
        // if (element.style.width == "0px" || element.style.width == "") {
        //   element.style.width = "250px";
        //   setTimeout(function() {
        //     eleContent.style.opacity = "1";
        //   }, 300);
        // } else {
        //   //Reset
        //   element.style.width = "0px";
        //   eleContent.style.opacity = "0";
        // }
    };
    MainNavBarComponentComponent.prototype.logout = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("refreshToken");
        this.authService.decodedToken = null;
        this.authService.currentUser = null;
        this.router.navigate(["/home"]);
    };
    MainNavBarComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-main-nav-bar-component",
            template: __webpack_require__(/*! ./main-nav-bar-component.component.html */ "./src/app/main-nav-bar-component/main-nav-bar-component.component.html"),
            styles: [__webpack_require__(/*! ./main-nav-bar-component.component.css */ "./src/app/main-nav-bar-component/main-nav-bar-component.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MainNavBarComponentComponent);
    return MainNavBarComponentComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu li, .dropdown-toggle {\r\n    cursor: pointer;\r\n}\r\n\r\nimg {\r\n    max-height: 50px;\r\n    border: 2px solid white;\r\n    display: inline;\r\n}\r\n\r\n.notificationStyle {\r\n    padding-left: 5px; \r\n    padding-right: 5px; \r\n    border-radius: 50px; \r\n    font-size: 15px;\r\n    color: white;\r\n}\r\n\r\n.unSeenNotification{\r\n    background-color: #c5cdd6;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1tZW51IGxpLCAuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvblN0eWxlIHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4OyBcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4OyBcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnVuU2Vlbk5vdGlmaWNhdGlvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNWNkZDY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<style>\r\n\r\n\r\n</style>\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(route, authService, router) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.model = {};
        this.notifications = [];
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notifCounter = 11;
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (data) {
            if (_this.authService.loggedIn()) {
                // this.loadNotifications();
            }
        }, function (error) {
            _this.router.navigate(['/login']);
        });
    };
    NavComponent.prototype.logout = function () {
        this.authService.userToken = null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    };
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-wrapper\">\r\n  <app-left-part></app-left-part>\r\n\r\n  <form (submit)=\"register()\" [formGroup]=\"registerForm\" style=\"width: 100%;\">\r\n    <ul class=\"progressbar\">\r\n      <li class=\"active\"></li>\r\n      <li></li>\r\n      <li></li>\r\n    </ul>\r\n    <div class=\"form-wrapper\">\r\n      <h5>You Can Login</h5>\r\n      <div class=\"forms\">\r\n        <div *ngIf=\"!nextStep\">\r\n          <div class=\"form-group\">\r\n            <label for=\"usr\">First Name:</label>\r\n            <input [ngClass]=\"{'is-invalid': registerForm.get('FirstName').errors\r\n              && registerForm.get('FirstName').touched}\" class=\"form-control\"\r\n                   formControlName=\"FirstName\" id=\"FirstName\" placeholder=\"First Name\" type=\"text\">\r\n            <div class=\"invalid-feedback\">Please choose a First Name</div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"usr\">Last Name:</label>\r\n            <input [ngClass]=\"{'is-invalid': registerForm.get('LastName').errors\r\n              && registerForm.get('LastName').touched}\" class=\"form-control\" formControlName=\"LastName\" id=\"LastName\" placeholder=\"Last Name\"\r\n                   type=\"text\">\r\n            <div class=\"invalid-feedback\">Please choose a Last Name</div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"usr\">Email:</label>\r\n            <input [ngClass]=\"{'is-invalid': registerForm.get('Email').errors\r\n              && registerForm.get('Email').touched}\" class=\"form-control\" formControlName=\"Email\" id=\"Email\" placeholder=\"Email\" type=\"text\">\r\n            <div class=\"invalid-feedback\">Please write an email</div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"pass\">Address:</label>\r\n            <input class=\"form-control\" formControlName=\"Address\" id=\"Address\" placeholder=\"Address\" type=\"text\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"pass\">Phone:</label>\r\n            <input class=\"form-control\" formControlName=\"Phone\" id=\"Phone\" placeholder=\"Phone\" type=\"number\">\r\n          </div>\r\n          <div class=\"options-forms\">\r\n            <label for=\"\">Date Of Birth</label>\r\n            <div class=\"options-form-wrapper\">\r\n              <div class=\"form-group state-form\">\r\n                <select [ngClass]=\"{'is-invalid': registerForm.get('Date').errors\r\n                    && registerForm.get('Date').touched}\" class=\"form-control\"\r\n                        formControlName=\"Date\" id=\"date\" value=\"Date\">\r\n                  <option *ngFor=\"let day of days\" [value]=\"day\" class=\"option-control\">{{day}}</option>\r\n                </select>\r\n                <div class=\"invalid-feedback\">Please select a date</div>\r\n              </div>\r\n              <div class=\"form-group \">\r\n                <select [ngClass]=\"{'is-invalid': registerForm.get('Month').errors\r\n                    && registerForm.get('Month').touched}\" class=\"form-control\" formControlName=\"Month\" id=\"Month\">\r\n                  <option *ngFor=\"let month of months\" [value]=\"month\" class=\"option-control\">{{month}}</option>\r\n                </select>\r\n                <div class=\"invalid-feedback\">Please select a month</div>\r\n              </div>\r\n              <div class=\"form-group \">\r\n                <select [ngClass]=\"{'is-invalid': registerForm.get('Year').errors\r\n                    && registerForm.get('Year').touched}\" class=\"form-control\" formControlName=\"Year\" id=\"Year\">\r\n                  <option *ngFor=\"let year of years\" [value]=\"year\" class=\"option-control\">{{year}}</option>\r\n                </select>\r\n                <div class=\"invalid-feedback\">Please select a Year</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button (click)=\"changeNextStep()\" class=\"btn btn-default\" type=\"button\">Next</button>\r\n        </div>\r\n        <div *ngIf=\"nextStep\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"col-sm-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"Logo\">Logo:</label>\r\n                  <input (change)=\"onFileChange($event)\" class=\"form-control\" type=\"file\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"pass\">Username:</label>\r\n                <input [ngClass]=\"{'is-invalid': registerForm.get('UserName').errors\r\n          && registerForm.get('UserName').touched}\" class=\"form-control\"\r\n                       formControlName=\"UserName\" id=\"UserName\" placeholder=\"UserName\" type=\"text\">\r\n                <div class=\"invalid-feedback\">Please choose a username</div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Password\">Password:</label>\r\n                <input [ngClass]=\"{'is-invalid': registerForm.get('Password').errors\r\n              && registerForm.get('Password').touched}\" class=\"form-control\"\r\n                       class=\"form-control\"\r\n                       formControlName=\"Password\"\r\n                       placeholder=\"Password\"\r\n                       type=\"password\">\r\n                <div *ngIf=\"registerForm.get('Password').hasError('required')\r\n                && registerForm.get('Password').touched\"\r\n                     class=\"invalid-feedback\">\r\n                  Password is required\r\n                </div>\r\n                <div *ngIf=\"registerForm.get('Password').hasError('minlength')\r\n              && registerForm.get('Password').touched\"\r\n                     class=\"invalid-feedback\">\r\n                  Password must be at least 4 characters\r\n                </div>\r\n                <div *ngIf=\"registerForm.get('Password').hasError('maxlength')\r\n            && registerForm.get('Password').touched\"\r\n                     class=\"invalid-feedback\">\r\n                  Password cannot exceed 8 characters\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"confirmPassword\">Confirm Password:</label>\r\n                <input [ngClass]=\"{'is-invalid': registerForm.get('confirmPassword').errors\r\n              && registerForm.get('confirmPassword').touched\r\n              || registerForm.get('confirmPassword').touched\r\n              && registerForm.hasError('mismatch')}\"\r\n                       class=\"form-control\"\r\n                       class=\"form-control\"\r\n                       formControlName=\"confirmPassword\"\r\n                       placeholder=\"Confirm Password\"\r\n                       type=\"password\">\r\n                <div *ngIf=\"registerForm.get('confirmPassword').hasError('required')\r\n              && registerForm.get('confirmPassword').touched\"\r\n                     class=\"invalid-feedback\">\r\n                  Confirm Password is required\r\n                </div>\r\n                <div *ngIf=\"registerForm.hasError('mismatch')\r\n            && registerForm.get('confirmPassword').touched\"\r\n                     class=\"invalid-feedback\">\r\n                  Passwords must match\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"pass\">CompanyName:</label>\r\n                <input [ngClass]=\"{'is-invalid': registerForm.get('Email').errors\r\n          && registerForm.get('Email').touched}\" class=\"form-control\"\r\n                       formControlName=\"CompanyName\" id=\"CompanyName\" placeholder=\"CompanyName\" type=\"text\">\r\n                <div class=\"invalid-feedback\">Please write a company name</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"pass\">Company Email:</label>\r\n                <input [ngClass]=\"{'is-invalid': registerForm.get('Email').errors\r\n          && registerForm.get('Email').touched}\" class=\"form-control\"\r\n                       formControlName=\"CompanyEmail\" id=\"CompanyEmail\" placeholder=\"CompanyEmail\" type=\"text\">\r\n                <div class=\"invalid-feedback\">Please write a company email</div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"pass\">Company Phone:</label>\r\n                <input class=\"form-control\" formControlName=\"CompanyPhone\" id=\"CompanyPhone\" placeholder=\"CompanyPhone\"\r\n                       type=\"number\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"pass\">Company Address:</label>\r\n                <input class=\"form-control\" formControlName=\"CompanyAddress\" id=\"CompanyAddress\"\r\n                       placeholder=\"CompanyAddress\" type=\"text\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"pass\">Postal Code:</label>\r\n                <input class=\"form-control\" formControlName=\"PostalCode\" id=\"PostalCode\" placeholder=\"PostalCode\"\r\n                       type=\"number\">\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <label for=\"\">Country</label>\r\n                  <select (change)=\"getCities($event.target.value)\" [ngClass]=\"{'is-invalid': registerForm.get('Country').errors\r\n                          && registerForm.get('Country').touched}\" class=\"form-control\"\r\n                          formControlName=\"Country\" id=\"Country\" value=\"Country\">\r\n                    <option selected>...</option>\r\n                    <option *ngFor=\"let country of countries\" [value]=\"country.id\"\r\n                            class=\"option-control\">{{country.name}}</option>\r\n                  </select>\r\n                  <div class=\"invalid-feedback\">Please select a country</div>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <label for=\"\">City</label>\r\n                  <select [ngClass]=\"{'is-invalid': registerForm.get('City').errors\r\n                      && registerForm.get('City').touched}\" class=\"form-control\"\r\n                          formControlName=\"City\" id=\"City\" value=\"City\">\r\n                    <option selected>...</option>\r\n                    <option *ngFor=\"let city of cities\" [value]=\"city.id\" class=\"option-control\">{{city.name}}</option>\r\n                  </select>\r\n                  <div class=\"invalid-feedback\">Please select a city</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button class=\"btn btn-default pull-left col-sm-4 mr-4\" type=\"submit\">Submit</button>\r\n          <button (click)=\"changeNextStep()\" class=\"btn btn-default pull-left col-sm-4\" type=\"button\">Back</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<!-- <p>Form value: {{registerForm.value | json}}</p>\r\n<p>Form status: {{registerForm.status | json}}</p> -->\r\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/country.service */ "./src/app/_services/country.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, alertify, fb, router, route, countryService, datePipe) {
        this.authService = authService;
        this.alertify = alertify;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.countryService = countryService;
        this.datePipe = datePipe;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-inferrable-types
        this.nextStep = false;
        this.hasBaseDropZoneOver = false;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createRegisterForm();
        this.getCountries();
        this.days = this.arrayThree(31, 1);
        this.months = this.arrayThree(12, 1);
        this.years = this.arrayThree(20, 2000);
    };
    RegisterComponent.prototype.getCities = function (countryId) {
        var _this = this;
        this.countryService.getCitiesByCountryId(countryId).subscribe(function (data) {
            _this.cities = data;
        });
    };
    RegisterComponent.prototype.getCountries = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.countries = data['countries'];
        });
    };
    RegisterComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.fb.group({
            FirstName: ['Drilon', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            LastName: ['Jahiri', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Email: ['drilonj@cacttus.com', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Date: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Month: ['2', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Year: ['3', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Address: ['fdgfdgfdg', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Phone: ['454545', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            CompanyName: ['sdfsdf', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            UserName: ['drilli', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Password: ['password', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8)]],
            CompanyEmail: ['drilonj@cacttus.com', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            CompanyPhone: ['5656', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            CompanyAddress: ['sdfsdf', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PostalCode: ['10000', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Country: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            City: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ['password', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Logo: [null]
        }, { validator: this.passwordMatchValidator });
    };
    // registerData() {
    //   this.registerForm = this.fb.group({
    //     name: ['', Validators.required]
    //   });
    // }
    RegisterComponent.prototype.submitRegisterForm = function () {
        console.log(this.registerForm.value);
        // this.nextStep();
    };
    RegisterComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('Password').value === g.get('confirmPassword').value ? null : { mismatch: true };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            var year = this.registerForm.get('Year').value;
            var month = this.registerForm.get('Month').value;
            var day = this.registerForm.get('Date').value;
            this.user.dOB = new Date(year, month, day, 0, 0, 0);
            this.authService.register(this.user).subscribe(function () {
                _this.alertify.success('Registration successful');
            }, function (error) {
                _this.alertify.error(error);
            }, function () {
                _this.authService.login(_this.user).subscribe(function () {
                    _this.router.navigate(['/members']);
                });
            });
        }
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    RegisterComponent.prototype.changeNextStep = function () {
        this.nextStep = !this.nextStep;
    };
    RegisterComponent.prototype.onFileChange = function (event) {
        var fileToUpload = event.target.files[0];
        this.registerForm.patchValue({
            Logo: fileToUpload
        });
    };
    RegisterComponent.prototype.arrayThree = function (n, startFrom) {
        return new Array(n).fill(1).map(function (x, i) { return i + startFrom; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "valuesFromHome", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "cancelRegister", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_6__["CountryService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _superadmin_packages_packageplan_packageplan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./superadmin/packages/packageplan/packageplan.component */ "./src/app/superadmin/packages/packageplan/packageplan.component.ts");
/* harmony import */ var _superadmin_packages_createpackage_createpackage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./superadmin/packages/createpackage/createpackage.component */ "./src/app/superadmin/packages/createpackage/createpackage.component.ts");
/* harmony import */ var _superadmin_countries_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./superadmin/countries/country-list/country-list.component */ "./src/app/superadmin/countries/country-list/country-list.component.ts");
/* harmony import */ var _superadmin_countries_country_add_country_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./superadmin/countries/country-add/country-add.component */ "./src/app/superadmin/countries/country-add/country-add.component.ts");
/* harmony import */ var _resolvers_definition_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_resolvers/definition.resolver */ "./src/app/_resolvers/definition.resolver.ts");
/* harmony import */ var _resolvers_register_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_resolvers/register.resolver */ "./src/app/_resolvers/register.resolver.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _superadmin_packages_packageplanprice_packageplanprice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./superadmin/packages/packageplanprice/packageplanprice.component */ "./src/app/superadmin/packages/packageplanprice/packageplanprice.component.ts");
/* harmony import */ var _superadmin_packages_createpackageplanprice_createpackageplanprice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./superadmin/packages/createpackageplanprice/createpackageplanprice.component */ "./src/app/superadmin/packages/createpackageplanprice/createpackageplanprice.component.ts");
/* harmony import */ var _superadmin_extramodule_extramodule_extramodule_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./superadmin/extramodule/extramodule/extramodule.component */ "./src/app/superadmin/extramodule/extramodule/extramodule.component.ts");
/* harmony import */ var _superadmin_extramodule_extramoduleprice_extramoduleprice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./superadmin/extramodule/extramoduleprice/extramoduleprice.component */ "./src/app/superadmin/extramodule/extramoduleprice/extramoduleprice.component.ts");
/* harmony import */ var _superadmin_extramodule_createextramodule_createextramodule_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./superadmin/extramodule/createextramodule/createextramodule.component */ "./src/app/superadmin/extramodule/createextramodule/createextramodule.component.ts");
/* harmony import */ var _superadmin_extramodule_createextramoduleprice_createextramoduleprice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./superadmin/extramodule/createextramoduleprice/createextramoduleprice.component */ "./src/app/superadmin/extramodule/createextramoduleprice/createextramoduleprice.component.ts");
/* harmony import */ var _superadmin_language_language_language_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./superadmin/language/language/language.component */ "./src/app/superadmin/language/language/language.component.ts");
/* harmony import */ var _superadmin_currencysymbol_currencysymbol_currencysymbol_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./superadmin/currencysymbol/currencysymbol/currencysymbol.component */ "./src/app/superadmin/currencysymbol/currencysymbol/currencysymbol.component.ts");
/* harmony import */ var _superadmin_language_createlanguage_createlanguage_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./superadmin/language/createlanguage/createlanguage.component */ "./src/app/superadmin/language/createlanguage/createlanguage.component.ts");
/* harmony import */ var _superadmin_currencysymbol_createcurrencysymbol_createcurrencysymbol_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./superadmin/currencysymbol/createcurrencysymbol/createcurrencysymbol.component */ "./src/app/superadmin/currencysymbol/createcurrencysymbol/createcurrencysymbol.component.ts");
/* harmony import */ var _superadmin_VehicleCategories_vehiclecategory_list_vehiclecategory_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./superadmin/VehicleCategories/vehiclecategory-list/vehiclecategory-list.component */ "./src/app/superadmin/VehicleCategories/vehiclecategory-list/vehiclecategory-list.component.ts");
/* harmony import */ var _superadmin_VehicleCategories_vehicle_category_add_edit_vehicle_category_add_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./superadmin/VehicleCategories/vehicle-category-add-edit/vehicle-category-add-edit.component */ "./src/app/superadmin/VehicleCategories/vehicle-category-add-edit/vehicle-category-add-edit.component.ts");
/* harmony import */ var _resolvers_packageprice_resolver__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_resolvers/packageprice.resolver */ "./src/app/_resolvers/packageprice.resolver.ts");
/* harmony import */ var _resolvers_extramoduleprice_resolver__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_resolvers/extramoduleprice.resolver */ "./src/app/_resolvers/extramoduleprice.resolver.ts");
/* harmony import */ var _superadmin_termsandconditions_createtermsandcondition_createtermsandcondition_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./superadmin/termsandconditions/createtermsandcondition/createtermsandcondition.component */ "./src/app/superadmin/termsandconditions/createtermsandcondition/createtermsandcondition.component.ts");
/* harmony import */ var _superadmin_termsandconditions_termsandcondition_termsandcondition_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./superadmin/termsandconditions/termsandcondition/termsandcondition.component */ "./src/app/superadmin/termsandconditions/termsandcondition/termsandcondition.component.ts");
/* harmony import */ var _resolvers_terms_resolver__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_resolvers/terms.resolver */ "./src/app/_resolvers/terms.resolver.ts");
/* harmony import */ var _superadmin_countries_country_notify_settings_country_notify_settings_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./superadmin/countries/country-notify-settings/country-notify-settings.component */ "./src/app/superadmin/countries/country-notify-settings/country-notify-settings.component.ts");
/* harmony import */ var _superadmin_admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./superadmin/admindashboard/admindashboard.component */ "./src/app/superadmin/admindashboard/admindashboard.component.ts");
/* harmony import */ var _localadmin_vehiclecategory_vehiclecategory_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./localadmin/vehiclecategory/vehiclecategory.component */ "./src/app/localadmin/vehiclecategory/vehiclecategory.component.ts");
/* harmony import */ var _localadmin_createvehiclecategory_createvehiclecategory_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./localadmin/createvehiclecategory/createvehiclecategory.component */ "./src/app/localadmin/createvehiclecategory/createvehiclecategory.component.ts");
/* harmony import */ var _localadmin_createemployee_createemployee_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./localadmin/createemployee/createemployee.component */ "./src/app/localadmin/createemployee/createemployee.component.ts");
/* harmony import */ var _localadmin_employee_employee_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./localadmin/employee/employee.component */ "./src/app/localadmin/employee/employee.component.ts");
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./editprofile/editprofile.component */ "./src/app/editprofile/editprofile.component.ts");




















// tslint:disable-next-line:max-line-length













var appRoutes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], resolve: { countries: _resolvers_register_resolver__WEBPACK_IMPORTED_MODULE_7__["RegisterResolver"] } },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
        children: [
            { path: 'packages', component: _superadmin_packages_packageplan_packageplan_component__WEBPACK_IMPORTED_MODULE_2__["PackageplanComponent"], },
            { path: 'editpackage/:id', component: _superadmin_packages_createpackage_createpackage_component__WEBPACK_IMPORTED_MODULE_3__["CreatepackageComponent"] },
            { path: 'countries', component: _superadmin_countries_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_4__["CountryListComponent"] },
            { path: 'createcountry/:id', component: _superadmin_countries_country_add_country_add_component__WEBPACK_IMPORTED_MODULE_5__["CountryAddComponent"], resolve: { coyntrydataaddupdate: _resolvers_definition_resolver__WEBPACK_IMPORTED_MODULE_6__["DefinitionResolver"] } },
            { path: 'countries/notifysettings/:id', component: _superadmin_countries_country_notify_settings_country_notify_settings_component__WEBPACK_IMPORTED_MODULE_26__["CountryNotifySettingsComponent"] },
            { path: 'packageplanprices/:id', component: _superadmin_packages_packageplanprice_packageplanprice_component__WEBPACK_IMPORTED_MODULE_9__["PackageplanpriceComponent"] },
            {
                path: 'editpackageplanprice/:id/:packageid', component: _superadmin_packages_createpackageplanprice_createpackageplanprice_component__WEBPACK_IMPORTED_MODULE_10__["CreatepackageplanpriceComponent"],
                resolve: { packageplanpricedata: _resolvers_packageprice_resolver__WEBPACK_IMPORTED_MODULE_21__["PackagePlanPriceResolver"] }
            },
            { path: 'vehiclecategories', component: _superadmin_VehicleCategories_vehiclecategory_list_vehiclecategory_list_component__WEBPACK_IMPORTED_MODULE_19__["VehiclecategoryListComponent"] },
            { path: 'editvehiclecategory/:id', component: _superadmin_VehicleCategories_vehicle_category_add_edit_vehicle_category_add_edit_component__WEBPACK_IMPORTED_MODULE_20__["VehicleCategoryAddEditComponent"],
                resolve: { coyntrydataaddupdate: _resolvers_definition_resolver__WEBPACK_IMPORTED_MODULE_6__["DefinitionResolver"] } },
            { path: 'extramodule', component: _superadmin_extramodule_extramodule_extramodule_component__WEBPACK_IMPORTED_MODULE_11__["ExtramoduleComponent"] },
            { path: 'extramoduleprice/:id', component: _superadmin_extramodule_extramoduleprice_extramoduleprice_component__WEBPACK_IMPORTED_MODULE_12__["ExtramodulepriceComponent"] },
            { path: 'editextramodule/:id', component: _superadmin_extramodule_createextramodule_createextramodule_component__WEBPACK_IMPORTED_MODULE_13__["CreateextramoduleComponent"] },
            {
                path: 'editextramoduleprice/:id/:extramoduleid', component: _superadmin_extramodule_createextramoduleprice_createextramoduleprice_component__WEBPACK_IMPORTED_MODULE_14__["CreateextramodulepriceComponent"],
                resolve: { extramodulepricedata: _resolvers_extramoduleprice_resolver__WEBPACK_IMPORTED_MODULE_22__["ExtraModulePriceResolver"] }
            },
            { path: 'languages', component: _superadmin_language_language_language_component__WEBPACK_IMPORTED_MODULE_15__["LanguageComponent"] },
            { path: 'editlanguage/:id', component: _superadmin_language_createlanguage_createlanguage_component__WEBPACK_IMPORTED_MODULE_17__["CreatelanguageComponent"] },
            { path: 'currencysymbols', component: _superadmin_currencysymbol_currencysymbol_currencysymbol_component__WEBPACK_IMPORTED_MODULE_16__["CurrencysymbolComponent"] },
            { path: 'editcurrencysymbol/:id', component: _superadmin_currencysymbol_createcurrencysymbol_createcurrencysymbol_component__WEBPACK_IMPORTED_MODULE_18__["CreatecurrencysymbolComponent"] },
            { path: 'countries/editterm/:id/:countryid', component: _superadmin_termsandconditions_createtermsandcondition_createtermsandcondition_component__WEBPACK_IMPORTED_MODULE_23__["CreatetermsandconditionComponent"],
                resolve: { termsdata: _resolvers_terms_resolver__WEBPACK_IMPORTED_MODULE_25__["TermsResolver"] } },
            { path: 'countries/termsandconditions/:id', component: _superadmin_termsandconditions_termsandcondition_termsandcondition_component__WEBPACK_IMPORTED_MODULE_24__["TermsandconditionComponent"] },
            { path: 'dashboard/superadmin', component: _superadmin_admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_27__["AdmindashboardComponent"] },
            { path: 'vehicletypes', component: _localadmin_vehiclecategory_vehiclecategory_component__WEBPACK_IMPORTED_MODULE_28__["VehiclecategoryComponent"] },
            { path: 'editvehicletype/:id', component: _localadmin_createvehiclecategory_createvehiclecategory_component__WEBPACK_IMPORTED_MODULE_29__["CreatevehiclecategoryComponent"] },
            { path: 'editemployee/:id', component: _localadmin_createemployee_createemployee_component__WEBPACK_IMPORTED_MODULE_30__["CreateemployeeComponent"] },
            { path: 'employees', component: _localadmin_employee_employee_component__WEBPACK_IMPORTED_MODULE_31__["EmployeeComponent"] },
            { path: 'editprofile/:id', component: _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_32__["EditprofileComponent"] }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];


/***/ }),

/***/ "./src/app/superadmin/VehicleCategories/vehicle-category-add-edit/vehicle-category-add-edit.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/superadmin/VehicleCategories/vehicle-category-add-edit/vehicle-category-add-edit.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vVmVoaWNsZUNhdGVnb3JpZXMvdmVoaWNsZS1jYXRlZ29yeS1hZGQtZWRpdC92ZWhpY2xlLWNhdGVnb3J5LWFkZC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/superadmin/VehicleCategories/vehicle-category-add-edit/vehicle-category-add-edit.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/superadmin/VehicleCategories/vehicle-category-add-edit/vehicle-category-add-edit.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\" style=\"margin-left: 200px;\" >\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"vehicleCategoryForm\" (submit)=\"create()\">\r\n                <div class=\"form-wrapper\">\r\n                  <h5>Add a new Vehicle Category</h5>\r\n                  <div class=\"forms\">          \r\n                        <div class=\"form-group\">\r\n                            <label for=\"usr\">Name:</label>\r\n                            <input  class=\"form-control\" [ngClass]=\"{'is-invalid': vehicleCategoryForm.get('name').errors \r\n                            && vehicleCategoryForm.get('name').touched}\" \r\n                             id=\"name\" placeholder=\"Vehicle Category name\"  formControlName=\"name\" type=\"text\">\r\n                             <div class=\"invalid-feedback\">Please choose a Name</div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"usr\">Description:</label>\r\n                            <input  class=\"form-control\"  id=\"description\" placeholder=\"Vehicle Category description\" formControlName=\"description\"  type=\"text\">\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                              <label><input type=\"checkbox\" formControlName=\"isDeleted\">Deleted</label>\r\n                          </div>                          \r\n                    </div>\r\n                      </div>            \r\n              <button class=\"btn btn-primary mr-3\" [disabled]=\"!vehicleCategoryForm.valid\" type=\"submit\">Submit</button> \r\n              <button class=\"btn btn-primary\" type=\"button\" [routerLink]=\"['/vehiclecategories']\" routerLinkActive=\"router-link-active\" >Cancel</button>  \r\n            </form> \r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <!-- \r\n      <p>Form value: {{vehicleCategoryForm.value | json}}</p>\r\n      <p>Form status: {{vehicleCategoryForm.status | json}}</p> -->"

/***/ }),

/***/ "./src/app/superadmin/VehicleCategories/vehicle-category-add-edit/vehicle-category-add-edit.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/superadmin/VehicleCategories/vehicle-category-add-edit/vehicle-category-add-edit.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: VehicleCategoryAddEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleCategoryAddEditComponent", function() { return VehicleCategoryAddEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_vehicleCategory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/vehicleCategory.service */ "./src/app/_services/vehicleCategory.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VehicleCategoryAddEditComponent = /** @class */ (function () {
    function VehicleCategoryAddEditComponent(vehicleCategoryService, alertify, fb, route, router, _route) {
        this.vehicleCategoryService = vehicleCategoryService;
        this.alertify = alertify;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this._route = _route;
    }
    VehicleCategoryAddEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vehicleCategoryForm = this.fb.group({
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            isDeleted: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this._route.paramMap.subscribe(function (param) {
            var id = param.get('id');
            if (id.toString() === '0') {
                _this.createAddForm();
            }
            else {
                _this.createEditForm(id.toString());
            }
        });
    };
    VehicleCategoryAddEditComponent.prototype.createAddForm = function () {
        this.vehicleCategoryForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [''],
            isDeleted: [false]
        });
    };
    VehicleCategoryAddEditComponent.prototype.createEditForm = function (id) {
        var _this = this;
        this.vehicleCategoryService.getVehicleCategory(id).subscribe(function (data) {
            _this.vehicleCategoryForm = _this.fb.group({
                id: [data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                name: [data.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                description: [data.description],
                isDeleted: [data.isDeleted]
            });
        });
    };
    VehicleCategoryAddEditComponent.prototype.create = function () {
        if (this.vehicleCategoryForm.valid) {
            this.vehicleCategory = Object.assign({}, this.vehicleCategoryForm.value);
            if (this.vehicleCategory.id) {
                this.editVehicleCategory();
            }
            else {
                this.createNewVehicleCategory();
            }
        }
    };
    VehicleCategoryAddEditComponent.prototype.createNewVehicleCategory = function () {
        var _this = this;
        this.vehicleCategoryService.create(this.vehicleCategory).subscribe(function () {
            _this.alertify.success('Vehicle Category created successfully');
            _this.router.navigate(['/vehiclecategories']);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    VehicleCategoryAddEditComponent.prototype.editVehicleCategory = function () {
        var _this = this;
        this.vehicleCategoryService.update(this.vehicleCategory).subscribe(function () {
            _this.alertify.success('Vehicle Category updated successfully');
            _this.router.navigate(['/vehiclecategories']);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    VehicleCategoryAddEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicle-category-add-edit',
            template: __webpack_require__(/*! ./vehicle-category-add-edit.component.html */ "./src/app/superadmin/VehicleCategories/vehicle-category-add-edit/vehicle-category-add-edit.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-category-add-edit.component.css */ "./src/app/superadmin/VehicleCategories/vehicle-category-add-edit/vehicle-category-add-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_vehicleCategory_service__WEBPACK_IMPORTED_MODULE_2__["VehicleCategoryService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], VehicleCategoryAddEditComponent);
    return VehicleCategoryAddEditComponent;
}());



/***/ }),

/***/ "./src/app/superadmin/VehicleCategories/vehiclecategory-list/vehiclecategory-list.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/superadmin/VehicleCategories/vehiclecategory-list/vehiclecategory-list.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tblHeader {\r\n    width: 137px;\r\n    height: 14px;\r\n    font-family: Roboto;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 2.11;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #5082a5;\r\n  }\r\n  \r\n  .tblBody {\r\n    width: 73px;\r\n    height: 11px;\r\n    font-family: Roboto;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 2.11;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #9daab3;\r\n  }\r\n  \r\n  tr:hover {\r\n    background-color: #f7f9fa;\r\n  }\r\n  \r\n  .AddButton {\r\n    padding:5px 20px;\r\n    background-color:#ffffff;\r\n    border-top-right-radius: 45px;\r\n    border-bottom-right-radius: 45px;\r\n    border-top-left-radius: 45px;\r\n    border-bottom-left-radius: 45px;\r\n    border: 1px solid #ebebeb;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .AddButton:hover {\r\n    color:white;\r\n    background-color: #5082a5;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJhZG1pbi9WZWhpY2xlQ2F0ZWdvcmllcy92ZWhpY2xlY2F0ZWdvcnktbGlzdC92ZWhpY2xlY2F0ZWdvcnktbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlO0dBQ2hCOztFQUVBO0lBQ0MsMEJBQTBCO0dBQzNCOztFQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLFlBQVk7SUFDWiwwQkFBMEI7R0FDM0IiLCJmaWxlIjoic3JjL2FwcC9zdXBlcmFkbWluL1ZlaGljbGVDYXRlZ29yaWVzL3ZlaGljbGVjYXRlZ29yeS1saXN0L3ZlaGljbGVjYXRlZ29yeS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGJsSGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMzdweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjExO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzUwODJhNTtcclxuICB9XHJcbiAgXHJcbiAgLnRibEJvZHkge1xyXG4gICAgd2lkdGg6IDczcHg7XHJcbiAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuMTE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjOWRhYWIzO1xyXG4gIH1cclxuICBcclxuICAgdHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYTtcclxuICB9XHJcbiAgXHJcbiAgLkFkZEJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOjVweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQ1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNDVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQ1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0NXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLkFkZEJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDgyYTU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/superadmin/VehicleCategories/vehiclecategory-list/vehiclecategory-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/superadmin/VehicleCategories/vehiclecategory-list/vehiclecategory-list.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"container mt-5\" style=\"margin-left: 200px;\" >\r\n      <div style=\"display: flex; justify-content: flex-end; margin-bottom:20px;border-radius: 5%;\"> \r\n          <div class=\"AddButton\"  [routerLink]=\"['/editvehiclecategory/0']\" routerLinkActive=\"router-link-active\" >Add new</div> \r\n      </div>\r\n        <div class=\"card\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th scope=\"col\" class=\"tblHeader\">Name</th>\r\n                    <th scope=\"col\" class=\"tblHeader\" >Description</th>\r\n                    <th scope=\"col\" class=\"tblHeader\">Deleted</th>          \r\n                    <th scope=\"col\" class=\"tblHeader\">Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody class=\"tblBody\">\r\n                  <tr *ngFor=\"let vehicleCategory of vehicleCategories\">\r\n                    <td>{{vehicleCategory.name}}</td>\r\n                    <td>{{vehicleCategory.description}}</td>\r\n                    <td>\r\n                      <i class=\"fa fa-check\" aria-hidden=\"true\" [hidden]=\"!vehicleCategory.isDeleted\"></i>\r\n                      <i class=\"fa fa-times\" aria-hidden=\"true\" [hidden]=\"vehicleCategory.isDeleted\"></i>\r\n                    </td>\r\n                    <td>\r\n                        <button (click)=\"editVehicleCategory(vehicleCategory.id)\" class=\"btn btn-link\">Edit</button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n          </div>\r\n        </div>\r\n"

/***/ }),

/***/ "./src/app/superadmin/VehicleCategories/vehiclecategory-list/vehiclecategory-list.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/superadmin/VehicleCategories/vehiclecategory-list/vehiclecategory-list.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: VehiclecategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclecategoryListComponent", function() { return VehiclecategoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_vehicleCategory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/vehicleCategory.service */ "./src/app/_services/vehicleCategory.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehiclecategoryListComponent = /** @class */ (function () {
    function VehiclecategoryListComponent(vehicleCategoryService, router) {
        this.vehicleCategoryService = vehicleCategoryService;
        this.router = router;
    }
    VehiclecategoryListComponent.prototype.ngOnInit = function () {
        this.getVehicleCategories();
    };
    VehiclecategoryListComponent.prototype.getVehicleCategories = function () {
        var _this = this;
        this.vehicleCategoryService.getVehicleCategories().subscribe(function (data) {
            _this.vehicleCategories = data;
        });
    };
    VehiclecategoryListComponent.prototype.editVehicleCategory = function (id) {
        this.router.navigate(['/editvehiclecategory', id]);
    };
    VehiclecategoryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehiclecategory-list',
            template: __webpack_require__(/*! ./vehiclecategory-list.component.html */ "./src/app/superadmin/VehicleCategories/vehiclecategory-list/vehiclecategory-list.component.html"),
            styles: [__webpack_require__(/*! ./vehiclecategory-list.component.css */ "./src/app/superadmin/VehicleCategories/vehiclecategory-list/vehiclecategory-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_vehicleCategory_service__WEBPACK_IMPORTED_MODULE_1__["VehicleCategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VehiclecategoryListComponent);
    return VehiclecategoryListComponent;
}());



/***/ }),

/***/ "./src/app/superadmin/admindashboard/admindashboard.component.css":
/*!************************************************************************!*\
  !*** ./src/app/superadmin/admindashboard/admindashboard.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vYWRtaW5kYXNoYm9hcmQvYWRtaW5kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/superadmin/admindashboard/admindashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/superadmin/admindashboard/admindashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\" style=\"margin-left: 200px;\" >\r\n      <div id=\"DashContainer\">\r\n              <div id=\"DashHeader\">\r\n                   <div>\r\n                     Local Admin\r\n                   </div>\r\n                   <div>\r\n                       <div> ora me icon</div>\r\n                       <div> Data me icon</div>\r\n                   </div>\r\n              </div>\r\n\r\n              <div style=\"display: flex; flex-wrap: wrap; width:100%; position: relative;\">\r\n                  <div class=\"flexChild\"> \r\n                      <div class=\"carDiv\"> <i style=\"padding:10px\" class=\"fa fa-car\" aria-hidden=\"true\"></i></div>\r\n                      <div style=\"display: flex; justify-content: space-between;width: 100%; margin-top: 15px;\">\r\n                            <div class=\"widgetTxt\">Total Vehicle</div>\r\n                            <div class=\"number\"> 45</div>\r\n                      </div>\r\n                 </div>\r\n                 <div class=\"flexChild\" > \r\n                    <div class=\"carDiv\"> <i style=\"padding:10px\" class=\"fa fa-car\" aria-hidden=\"true\"></i></div>\r\n                    <div style=\"display: flex; justify-content: space-between;width: 100%; margin-top: 15px;\">\r\n                        <div class=\"widgetTxt\">Draft</div>\r\n                        <div class=\"number\"> 45</div>\r\n                    </div>\r\n               </div>\r\n                   <div class=\"flexChild\"> \r\n                      <div class=\"carDiv\"> <i style=\"padding:10px\" class=\"fa fa-car\" aria-hidden=\"true\"></i></div>\r\n                      <div style=\"display: flex; justify-content: space-between;width: 100%; margin-top: 15px;\">\r\n                            <div class=\"widgetTxt\">Cars Soon Available</div> \r\n                            <div class=\"number\"> 45</div>\r\n                      </div>\r\n                 </div>\r\n                 <div class=\"flexChild\"> \r\n                    <div class=\"carDiv\"> <i style=\"padding:10px\" class=\"fa fa-car\" aria-hidden=\"true\"></i></div>\r\n                    <div style=\"display: flex; justify-content: space-between;width: 100%; margin-top: 15px;\">\r\n                          <div class=\"widgetTxt\">Vehciles Already rented</div>\r\n                          <div class=\"number\"> 45</div>\r\n                    </div>\r\n               </div>\r\n                 <div class=\"flexChild\"> \r\n                    <div class=\"carDiv\"> <i style=\"padding:10px\" class=\"fa fa-car\" aria-hidden=\"true\"></i></div>\r\n                    <div style=\"display: flex; justify-content: space-between;width: 100%; margin-top: 15px;\">\r\n                          <div class=\"widgetTxt\">Available Vehciles</div>\r\n                          <div class=\"number\"> 45</div>\r\n                    </div>\r\n               </div>\r\n              \r\n               <div class=\"flexChild\"> \r\n                  <div class=\"carDiv\"> <i style=\"padding:10px\" class=\"fa fa-car\" aria-hidden=\"true\"></i></div>\r\n                  <div style=\"display: flex; justify-content: space-between;width: 100%; margin-top: 15px;\">\r\n                      <div class=\"widgetTxt\" >Total Rents</div>\r\n                      <div class=\"number\"> 45</div>\r\n                  </div>\r\n             </div>\r\n              </div>\r\n              \r\n      </div>\r\n  </div>\r\n\r\n  <style>\r\n    #Widgetcontainer {\r\n      background-color: #ffffff;\r\n      width: 100%;\r\n    }\r\n\r\n   #DashHeader {\r\n     display: flex;\r\n     justify-content: space-between;\r\n     width: 100%\r\n   }\r\n\r\n   .flexChild {\r\n     position: relative;\r\n     color:#c0c0c0;\r\n     margin: 20px;\r\n     height: 100px;\r\n     width: 300px;\r\n     font-size: 18px;\r\n     padding:20px;\r\n     box-shadow: 0 0 18px 0 rgba(148, 148, 148, 0.1);\r\n     background-color: #ffffff;\r\n    \r\n   }\r\n   .carDiv {\r\n    box-shadow: 0 0 18px 0 rgba(148, 148, 148, 0.1);\r\n    background-color: #ffffff;\r\n    position: absolute;\r\n    top:-20px; \r\n    height: 50px;\r\n    width: 50px;\r\n    padding: 5px;\r\n   }\r\n    \r\n   .widgetTxt {\r\n    width: 50%;\r\n    opacity: 0.6;\r\n    font-family: Roboto;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 1.35;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n   }\r\n   .number {\r\n    width: 50%;\r\n    text-align: right;\r\n    position: absolute;\r\n    right: 20px;\r\n    bottom: 10px;\r\n    font-family: Roboto;\r\n    font-size: 48px;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 0.98;\r\n    letter-spacing: normal;\r\n   }\r\n  </style>"

/***/ }),

/***/ "./src/app/superadmin/admindashboard/admindashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/superadmin/admindashboard/admindashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdmindashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmindashboardComponent", function() { return AdmindashboardComponent; });
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

var AdmindashboardComponent = /** @class */ (function () {
    function AdmindashboardComponent() {
    }
    AdmindashboardComponent.prototype.ngOnInit = function () {
    };
    AdmindashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admindashboard',
            template: __webpack_require__(/*! ./admindashboard.component.html */ "./src/app/superadmin/admindashboard/admindashboard.component.html"),
            styles: [__webpack_require__(/*! ./admindashboard.component.css */ "./src/app/superadmin/admindashboard/admindashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdmindashboardComponent);
    return AdmindashboardComponent;
}());



/***/ }),

/***/ "./src/app/superadmin/countries/country-add/country-add.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/superadmin/countries/country-add/country-add.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vY291bnRyaWVzL2NvdW50cnktYWRkL2NvdW50cnktYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/superadmin/countries/country-add/country-add.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/superadmin/countries/country-add/country-add.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\" style=\"margin-left: 200px;\">\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <form [formGroup]=\"countryForm\" (submit)=\"create()\">\r\n            <div class=\"form-wrapper\">\r\n              <h5>Add a new country</h5>\r\n              <div class=\"forms\">          \r\n                    <div class=\"form-group\">\r\n                        <label for=\"usr\">Name:</label>\r\n                        <input  class=\"form-control\" [ngClass]=\"{'is-invalid': countryForm.get('name').errors \r\n                        && countryForm.get('name').touched}\" \r\n                         id=\"name\" placeholder=\"Country name\"  formControlName=\"name\" type=\"text\">\r\n                         <div class=\"invalid-feedback\">Please choose a Name</div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"usr\">Code:</label>\r\n                        <input  class=\"form-control\" [ngClass]=\"{'is-invalid': countryForm.get('code').errors \r\n                        && countryForm.get('code').touched}\"  id=\"code\" placeholder=\"Code\" formControlName=\"code\"  type=\"text\">\r\n                        <div class=\"invalid-feedback\">Please write a Code</div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"usr\">VAT:</label>\r\n                        <input class=\"form-control\"  [ngClass]=\"{'is-invalid': countryForm.get('vat').errors \r\n                        && countryForm.get('vat').touched}\" id=\"vat\" placeholder=\"VAT\" formControlName=\"vat\"  type=\"number\">\r\n                        <div class=\"invalid-feedback\">Please write a value</div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                          <label for=\"\">Language</label>\r\n                          <div class=\"form-group state-form\">\r\n                              <select class=\"form-control\"  [ngClass]=\"{'is-invalid': countryForm.get('languageId').errors \r\n                              && countryForm.get('languageId').touched}\" \r\n                              id=\"date\" value=\"languageId\" formControlName=\"languageId\" >\r\n                                <option class=\"option-control\" *ngFor=\"let lang of country.languages\" [value]=\"lang.id\" >{{lang.name}}</option>\r\n                              </select>\r\n                              <div class=\"invalid-feedback\">Please select a language</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\">Currency</label>\r\n                              <div class=\"form-group state-form\">\r\n                                <select class=\"form-control\"  [ngClass]=\"{'is-invalid': countryForm.get('currencySymbolId').errors \r\n                                && countryForm.get('currencySymbolId').touched}\" \r\n                                id=\"date\" value=\"currencySymbolId\" formControlName=\"currencySymbolId\" >\r\n                                  <option class=\"option-control\" *ngFor=\"let c of country.currencySymbols\" [value]=\"c.id\" >{{c.symbol}}</option>\r\n                                </select>\r\n                                <div class=\"invalid-feedback\">Please select a currency</div>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                              <label for=\"\">Currency Format</label>\r\n                              <div class=\"form-group state-form\">\r\n                                <select class=\"form-control\"  [ngClass]=\"{'is-invalid': countryForm.get('currencyFormatId').errors \r\n                                && countryForm.get('currencyFormatId').touched}\" \r\n                                id=\"date\" value=\"currencyFormatId\" formControlName=\"currencyFormatId\" >\r\n                                  <option class=\"option-control\" *ngFor=\"let curr of country.currencyFormats\" [value]=\"curr.id\" >{{curr.format}}</option>\r\n                                </select>\r\n                                <div class=\"invalid-feedback\">Please select a currency</div>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                              <label><input type=\"checkbox\" formControlName=\"isDeleted\">Deleted</label>\r\n                          </div>                          \r\n                </div>\r\n                  </div>            \r\n          <button class=\"btn btn-primary mr-3\" [disabled]=\"!countryForm.valid\" type=\"submit\">Submit</button> \r\n          <button class=\"btn btn-primary\" type=\"button\" [routerLink]=\"['/countries']\" routerLinkActive=\"router-link-active\" >Cancel</button>  \r\n        </form> \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- \r\n  <p>Form value: {{countryForm.value | json}}</p>\r\n  <p>Form status: {{countryForm.status | json}}</p> -->"

/***/ }),

/***/ "./src/app/superadmin/countries/country-add/country-add.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/superadmin/countries/country-add/country-add.component.ts ***!
  \***************************************************************************/
/*! exports provided: CountryAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryAddComponent", function() { return CountryAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_country_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/country.service */ "./src/app/_services/country.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CountryAddComponent = /** @class */ (function () {
    function CountryAddComponent(countryService, alertify, fb, router, _route) {
        this.countryService = countryService;
        this.alertify = alertify;
        this.fb = fb;
        this.router = router;
        this._route = _route;
    }
    CountryAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCountryDataForAddForm();
        this.countryForm = this.fb.group({
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            vat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            isDeleted: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            languageId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            currencySymbolId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            currencyFormatId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            notifyByEmail: [false],
            notifyBySMS: [false],
            otherNotify: [false]
        });
        this._route.paramMap.subscribe(function (param) {
            var id = param.get('id');
            if (id.toString() === '0') {
                _this.createCountryForm();
            }
            else {
                _this.createEditForm(id.toString());
            }
        });
    };
    CountryAddComponent.prototype.createCountryForm = function () {
        this.countryForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            vat: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            isDeleted: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            languageId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            currencySymbolId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            currencyFormatId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            notifyByEmail: [false],
            notifyBySMS: [false],
            otherNotify: [false]
        });
    };
    CountryAddComponent.prototype.createEditForm = function (id) {
        var _this = this;
        this.countryService.getCountry(id).subscribe(function (data) {
            _this.countryForm = _this.fb.group({
                id: [data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                name: [data.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                code: [data.code, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                vat: [data.vat, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                isDeleted: [data.isDeleted, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                languageId: [data.language.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                currencySymbolId: [data.currencySymbol.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                currencyFormatId: [data.currencyFormat.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                notifyByEmail: [data.notifyByEmail],
                notifyBySMS: [data.notifyBySMS],
                otherNotify: [data.otherNotify]
            });
        });
    };
    CountryAddComponent.prototype.getCountryDataForAddForm = function () {
        var _this = this;
        this._route.data.subscribe(function (data) {
            _this.country = data['coyntrydataaddupdate'];
        });
    };
    CountryAddComponent.prototype.create = function () {
        if (this.countryForm.valid) {
            this.country = Object.assign({}, this.countryForm.value);
            if (this.country.id) {
                this.editCountry();
            }
            else {
                this.createNewCountry();
            }
        }
    };
    CountryAddComponent.prototype.createNewCountry = function () {
        var _this = this;
        this.countryService.create(this.country).subscribe(function () {
            _this.alertify.success('Country created successfully');
            _this.router.navigate(['/countries']);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CountryAddComponent.prototype.editCountry = function () {
        var _this = this;
        this.countryService.update(this.country).subscribe(function () {
            _this.alertify.success('Country updated successfully');
            _this.router.navigate(['/countries']);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CountryAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country-add',
            template: __webpack_require__(/*! ./country-add.component.html */ "./src/app/superadmin/countries/country-add/country-add.component.html"),
            styles: [__webpack_require__(/*! ./country-add.component.css */ "./src/app/superadmin/countries/country-add/country-add.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_country_service__WEBPACK_IMPORTED_MODULE_4__["CountryService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CountryAddComponent);
    return CountryAddComponent;
}());



/***/ }),

/***/ "./src/app/superadmin/countries/country-list/country-list.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/superadmin/countries/country-list/country-list.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tblHeader {\r\n    width: 137px;\r\n    height: 14px;\r\n    font-family: Roboto;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 2.11;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #5082a5;\r\n  }\r\n  \r\n  .tblBody {\r\n    width: 73px;\r\n    height: 11px;\r\n    font-family: Roboto;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 2.11;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #9daab3;\r\n  }\r\n  \r\n  tr:hover {\r\n    background-color: #f7f9fa;\r\n  }\r\n  \r\n  .AddButton {\r\n    padding:5px 20px;\r\n    background-color:#ffffff;\r\n    border-top-right-radius: 45px;\r\n    border-bottom-right-radius: 45px;\r\n    border-top-left-radius: 45px;\r\n    border-bottom-left-radius: 45px;\r\n    border: 1px solid #ebebeb;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .AddButton:hover {\r\n    color:white;\r\n    background-color: #5082a5;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJhZG1pbi9jb3VudHJpZXMvY291bnRyeS1saXN0L2NvdW50cnktbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlO0dBQ2hCOztFQUVBO0lBQ0MsMEJBQTBCO0dBQzNCOztFQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLFlBQVk7SUFDWiwwQkFBMEI7R0FDM0IiLCJmaWxlIjoic3JjL2FwcC9zdXBlcmFkbWluL2NvdW50cmllcy9jb3VudHJ5LWxpc3QvY291bnRyeS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGJsSGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMzdweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjExO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzUwODJhNTtcclxuICB9XHJcbiAgXHJcbiAgLnRibEJvZHkge1xyXG4gICAgd2lkdGg6IDczcHg7XHJcbiAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuMTE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjOWRhYWIzO1xyXG4gIH1cclxuICBcclxuICAgdHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYTtcclxuICB9XHJcbiAgXHJcbiAgLkFkZEJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOjVweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQ1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNDVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQ1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0NXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLkFkZEJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDgyYTU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/superadmin/countries/country-list/country-list.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/superadmin/countries/country-list/country-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\" style=\"margin-left: 200px;\" >\r\n  <div style=\"display: flex; justify-content: flex-end; margin-bottom:20px;border-radius: 5%;\"> \r\n      <div class=\"AddButton\"  [routerLink]=\"['/createcountry/0']\" routerLinkActive=\"router-link-active\" >New Country <i class=\"fa fa-flag\" aria-hidden=\"true\"></i></div> \r\n  </div>\r\n    <div class=\"card\">\r\n        <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\" class=\"tblHeader\">Country</th>\r\n                <th scope=\"col\" class=\"tblHeader\" >Code</th>\r\n                <th scope=\"col\" class=\"tblHeader\">VAT</th>          \r\n                <th scope=\"col\" class=\"tblHeader\">Language</th>\r\n                <th scope=\"col\" class=\"tblHeader\">Currency</th>\r\n                <th scope=\"col\" class=\"tblHeader\">Currency Format</th>\r\n                <th scope=\"col\" class=\"tblHeader\">Deleted</th>\r\n                <th scope=\"col\" class=\"tblHeader\">Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody class=\"tblBody\">\r\n              <tr *ngFor=\"let country of countries\">\r\n                <td>{{country.name}}</td>\r\n                <td>{{country.code}}</td>\r\n                <td>{{country.vat | number : '1.2-2'}}</td>\r\n                <td>{{country.language.name}}</td>\r\n                <td>{{country.currencySymbol.symbol}}</td>\r\n                <td>{{country.currencyFormat.format}}</td>\r\n                <td>\r\n                  <i class=\"fa fa-check\" aria-hidden=\"true\" [hidden]=\"!country.isDeleted\"></i>\r\n                  <i class=\"fa fa-times\" aria-hidden=\"true\" [hidden]=\"country.isDeleted\"></i>\r\n                </td>\r\n                <td>\r\n                    <button (click)=\"editCountry(country.id)\" class=\"btn btn-link\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button>\r\n                </td>\r\n                <td style=\"min-width:200px;\">\r\n                    <div class=\"btn-group\" dropdown>\r\n                        <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle AddButton\"\r\n                                aria-controls=\"dropdown-basic\" style=\"\r\n                                margin-top: 0px;\r\n                                margin-bottom: 0px;\r\n                                padding-top: 5px;\r\n                            \">Action <span class=\"caret\"></span>\r\n                        </button>\r\n                        <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\"\r\n                            role=\"menu\" aria-labelledby=\"button-basic\">\r\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/countries/termsandconditions/' + country.id]\">Terms and Conditions</a></li>\r\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/countries/notifysettings/' + country.id]\">Notification Settings</a></li>\r\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Season Names</a></li>\r\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Email template</a></li>\r\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">SMS template</a></li>\r\n                        </ul>\r\n                      </div>\r\n                  <!-- <select>\r\n                    <option>Terms</option>\r\n                    <option>Notify Settings</option>\r\n                 </select> -->\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n      </div>\r\n    </div>\r\n    \r\n    <!-- \r\n      <p>Form value: {{countryForm.value | json}}</p>\r\n      <p>Form status: {{countryForm.status | json}}</p> -->\r\n"

/***/ }),

/***/ "./src/app/superadmin/countries/country-list/country-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/superadmin/countries/country-list/country-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CountryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryListComponent", function() { return CountryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_country_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/country.service */ "./src/app/_services/country.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryListComponent = /** @class */ (function () {
    function CountryListComponent(countryService, router) {
        this.countryService = countryService;
        this.router = router;
    }
    CountryListComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    CountryListComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryService.getCountriesSuperAdmin().subscribe(function (data) {
            _this.countries = data;
        });
    };
    CountryListComponent.prototype.editCountry = function (id) {
        this.router.navigate(['/createcountry', id]);
    };
    CountryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country-list',
            template: __webpack_require__(/*! ./country-list.component.html */ "./src/app/superadmin/countries/country-list/country-list.component.html"),
            styles: [__webpack_require__(/*! ./country-list.component.css */ "./src/app/superadmin/countries/country-list/country-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_country_service__WEBPACK_IMPORTED_MODULE_1__["CountryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CountryListComponent);
    return CountryListComponent;
}());



/***/ }),

/***/ "./src/app/superadmin/countries/country-notify-settings/country-notify-settings.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/superadmin/countries/country-notify-settings/country-notify-settings.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vY291bnRyaWVzL2NvdW50cnktbm90aWZ5LXNldHRpbmdzL2NvdW50cnktbm90aWZ5LXNldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/superadmin/countries/country-notify-settings/country-notify-settings.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/superadmin/countries/country-notify-settings/country-notify-settings.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n  <div class=\"card\">\r\n      <div class=\"card-body\">\r\n          <form [formGroup]=\"countryForm\" (submit)=\"editCountry()\">\r\n            <h5>Edit Notify Settings: {{country.name}}</h5>\r\n              <div class=\"forms\">          \r\n                  <div class=\"form-group\">\r\n                    <label><input type=\"checkbox\" formControlName=\"notifyByEmail\">Notify by Email</label>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label><input type=\"checkbox\" formControlName=\"notifyBySMS\">Notify by SMS</label>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label><input type=\"checkbox\" formControlName=\"otherNotify\">Other Notify</label>\r\n                  </div>                            \r\n              </div>            \r\n            <button class=\"btn btn-primary mr-3\" [disabled]=\"!countryForm.valid\" type=\"submit\">Submit</button> \r\n            <button class=\"btn btn-primary\" type=\"button\" [routerLink]=\"['/countries']\" routerLinkActive=\"router-link-active\">Cancel</button>  \r\n          </form> \r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <!-- \r\n    <p>Form value: {{countryForm.value | json}}</p>\r\n    <p>Form status: {{countryForm.status | json}}</p> -->"

/***/ }),

/***/ "./src/app/superadmin/countries/country-notify-settings/country-notify-settings.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/superadmin/countries/country-notify-settings/country-notify-settings.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: CountryNotifySettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryNotifySettingsComponent", function() { return CountryNotifySettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/country.service */ "./src/app/_services/country.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CountryNotifySettingsComponent = /** @class */ (function () {
    function CountryNotifySettingsComponent(countryService, alertify, fb, _route, router) {
        this.countryService = countryService;
        this.alertify = alertify;
        this.fb = fb;
        this._route = _route;
        this.router = router;
    }
    CountryNotifySettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countryForm = this.fb.group({
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            notifyByEmail: [false],
            notifyBySMS: [false],
            otherNotify: [false]
        });
        this._route.paramMap.subscribe(function (param) {
            var id = param.get('id');
            if (!id) {
                _this.alertify.success('Id is not defined');
                _this.router.navigate(['/countries']);
            }
            else {
                _this.createEditForm(id.toString());
            }
        });
    };
    CountryNotifySettingsComponent.prototype.createEditForm = function (id) {
        var _this = this;
        this.countryService.getCountry(id).subscribe(function (data) {
            _this.country = data;
            _this.countryForm = _this.fb.group({
                id: [data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                notifyByEmail: [data.notifyByEmail],
                notifyBySMS: [data.notifyBySMS],
                otherNotify: [data.otherNotify]
            });
        });
    };
    CountryNotifySettingsComponent.prototype.editCountry = function () {
        var _this = this;
        if (this.countryForm.valid) {
            this.country.notifyByEmail = this.countryForm.controls['notifyByEmail'].value;
            this.country.notifyBySMS = this.countryForm.controls['notifyBySMS'].value;
            this.country.otherNotify = this.countryForm.controls['otherNotify'].value;
            this.countryService.update(this.country).subscribe(function () {
                _this.alertify.success('Notify settings updated successfully');
                _this.router.navigate(['/countries']);
            }, function (error) {
                _this.alertify.error(error);
            });
        }
    };
    CountryNotifySettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country-notify-settings',
            template: __webpack_require__(/*! ./country-notify-settings.component.html */ "./src/app/superadmin/countries/country-notify-settings/country-notify-settings.component.html"),
            styles: [__webpack_require__(/*! ./country-notify-settings.component.css */ "./src/app/superadmin/countries/country-notify-settings/country-notify-settings.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_country_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CountryNotifySettingsComponent);
    return CountryNotifySettingsComponent;
}());



/***/ }),

/***/ "./src/app/superadmin/currencysymbol/createcurrencysymbol/createcurrencysymbol.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/superadmin/currencysymbol/createcurrencysymbol/createcurrencysymbol.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vY3VycmVuY3lzeW1ib2wvY3JlYXRlY3VycmVuY3lzeW1ib2wvY3JlYXRlY3VycmVuY3lzeW1ib2wuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/superadmin/currencysymbol/createcurrencysymbol/createcurrencysymbol.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/superadmin/currencysymbol/createcurrencysymbol/createcurrencysymbol.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\" style=\"margin-left: 200px;\" >\r\n  <form [formGroup]=\"currencySymbolForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n          <label>Symbol</label>\r\n          <input type=\"text\" formControlName=\"symbol\" class=\"form-control\" [ngClass]=\"{'is-invalid': currencySymbolForm.get('symbol').errors \r\n          && currencySymbolForm.get('symbol').touched}\"  />\r\n          <div class=\"invalid-feedback\">Please choose a symbol</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <button class=\"btn btn-primary\" [hidden]=\"!addBtn\">Add</button>\r\n          <button class=\"btn btn-primary\" [hidden]=\"addBtn\">Update</button>\r\n      </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/superadmin/currencysymbol/createcurrencysymbol/createcurrencysymbol.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/superadmin/currencysymbol/createcurrencysymbol/createcurrencysymbol.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CreatecurrencysymbolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatecurrencysymbolComponent", function() { return CreatecurrencysymbolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_currencysymbol_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/currencysymbol.service */ "./src/app/_services/currencysymbol.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatecurrencysymbolComponent = /** @class */ (function () {
    function CreatecurrencysymbolComponent(currencySymbolService, router, route, alertify, fb) {
        this.currencySymbolService = currencySymbolService;
        this.router = router;
        this.route = route;
        this.alertify = alertify;
        this.fb = fb;
    }
    CreatecurrencysymbolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (param) {
            _this.addBtn = true;
            var id = param.get('id');
            _this.currencySymbolForm = _this.fb.group({
                id: [''],
                symbol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
            if (id.toString() !== '0') {
                _this.addBtn = false;
                _this.currencySymbolService.getCurrencySymbol(id).subscribe(function (data) {
                    _this.currencySymbolForm.setValue({
                        id: data.id,
                        symbol: data.symbol
                    });
                });
            }
        });
    };
    CreatecurrencysymbolComponent.prototype.onSubmit = function () {
        var _this = this;
        this.currencySymbol = Object.assign({}, this.currencySymbolForm.value);
        if (this.currencySymbol.id === '') {
            this.currencySymbol.id = '00000000-0000-0000-0000-000000000000';
            this.currencySymbolService.create(this.currencySymbol).subscribe(function () {
                _this.alertify.success('Created successfully');
                _this.router.navigate(['/currencysymbols']);
            }, function (error) {
                _this.alertify.error(error);
            });
        }
        else {
            this.currencySymbolService.update(this.currencySymbol).subscribe(function () {
                _this.router.navigate(['/currencysymbols']);
            }, function (error) {
                _this.alertify.error(error);
            });
        }
    };
    CreatecurrencysymbolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createcurrencysymbol',
            template: __webpack_require__(/*! ./createcurrencysymbol.component.html */ "./src/app/superadmin/currencysymbol/createcurrencysymbol/createcurrencysymbol.component.html"),
            styles: [__webpack_require__(/*! ./createcurrencysymbol.component.css */ "./src/app/superadmin/currencysymbol/createcurrencysymbol/createcurrencysymbol.component.css")]
        }),
        __metadata("design:paramtypes", [_services_currencysymbol_service__WEBPACK_IMPORTED_MODULE_1__["CurrencysymbolService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CreatecurrencysymbolComponent);
    return CreatecurrencysymbolComponent;
}());



/***/ }),

/***/ "./src/app/superadmin/currencysymbol/currencysymbol/currencysymbol.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/superadmin/currencysymbol/currencysymbol/currencysymbol.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tblHeader {\r\n    width: 137px;\r\n    height: 14px;\r\n    font-family: Roboto;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 2.11;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #5082a5;\r\n  }\r\n  \r\n  .tblBody {\r\n    width: 73px;\r\n    height: 11px;\r\n    font-family: Roboto;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 2.11;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #9daab3;\r\n  }\r\n  \r\n  tr:hover {\r\n    background-color: #f7f9fa;\r\n  }\r\n  \r\n  .AddButton {\r\n    padding:5px 20px;\r\n    background-color:#ffffff;\r\n    border-top-right-radius: 45px;\r\n    border-bottom-right-radius: 45px;\r\n    border-top-left-radius: 45px;\r\n    border-bottom-left-radius: 45px;\r\n    border: 1px solid #ebebeb;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .AddButton:hover {\r\n    color:white;\r\n    background-color: #5082a5;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJhZG1pbi9jdXJyZW5jeXN5bWJvbC9jdXJyZW5jeXN5bWJvbC9jdXJyZW5jeXN5bWJvbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlO0dBQ2hCOztFQUVBO0lBQ0MsMEJBQTBCO0dBQzNCOztFQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLFlBQVk7SUFDWiwwQkFBMEI7R0FDM0IiLCJmaWxlIjoic3JjL2FwcC9zdXBlcmFkbWluL2N1cnJlbmN5c3ltYm9sL2N1cnJlbmN5c3ltYm9sL2N1cnJlbmN5c3ltYm9sLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGJsSGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMzdweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjExO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzUwODJhNTtcclxuICB9XHJcbiAgXHJcbiAgLnRibEJvZHkge1xyXG4gICAgd2lkdGg6IDczcHg7XHJcbiAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuMTE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjOWRhYWIzO1xyXG4gIH1cclxuICBcclxuICAgdHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYTtcclxuICB9XHJcbiAgXHJcbiAgLkFkZEJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOjVweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQ1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNDVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQ1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0NXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLkFkZEJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDgyYTU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/superadmin/currencysymbol/currencysymbol/currencysymbol.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/superadmin/currencysymbol/currencysymbol/currencysymbol.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container mt-5\" style=\"margin-left: 200px;\" >\r\n  <div style=\"display: flex; justify-content: flex-end; margin-bottom:20px;border-radius: 5%;\"> \r\n      <div class=\"AddButton\"  [routerLink]=\"['/editcurrencysymbol/0']\" routerLinkActive=\"router-link-active\" >Add new </div> \r\n  </div>\r\n    <div class=\"card\">\r\n        <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\" class=\"tblHeader\">Name</th>\r\n                <th scope=\"col\" class=\"tblHeader\" >Actions</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody class=\"tblBody\">\r\n              <tr *ngFor=\"let currencySymbol of currencySymbols\">\r\n                <td>{{currencySymbol.symbol}}</td>\r\n                <td><button (click)=\"editCurrencySymbol(currencySymbol.id)\" class=\"btn btn-link\">Edit</button> |\r\n                  <button (click)=\"deleteCurrencySymbol(currencySymbol.id)\" class=\"btn btn-link\">Delete</button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/superadmin/currencysymbol/currencysymbol/currencysymbol.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/superadmin/currencysymbol/currencysymbol/currencysymbol.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CurrencysymbolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencysymbolComponent", function() { return CurrencysymbolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_currencysymbol_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/currencysymbol.service */ "./src/app/_services/currencysymbol.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurrencysymbolComponent = /** @class */ (function () {
    function CurrencysymbolComponent(currencySymbolService, router, alertify) {
        this.currencySymbolService = currencySymbolService;
        this.router = router;
        this.alertify = alertify;
    }
    CurrencysymbolComponent.prototype.ngOnInit = function () {
        this.getCurrencySymbols();
    };
    CurrencysymbolComponent.prototype.getCurrencySymbols = function () {
        var _this = this;
        this.currencySymbolService.getCurrencySymbols().subscribe(function (_currencySymbols) {
            _this.currencySymbols = _currencySymbols;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CurrencysymbolComponent.prototype.editCurrencySymbol = function (id) {
        this.router.navigate(['/editcurrencysymbol', id]);
    };
    CurrencysymbolComponent.prototype.deleteLanguage = function (id) {
        var _this = this;
        this.currencySymbolService.delete(id).subscribe(function () {
            _this.getCurrencySymbols();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CurrencysymbolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-currencysymbol',
            template: __webpack_require__(/*! ./currencysymbol.component.html */ "./src/app/superadmin/currencysymbol/currencysymbol/currencysymbol.component.html"),
            styles: [__webpack_require__(/*! ./currencysymbol.component.css */ "./src/app/superadmin/currencysymbol/currencysymbol/currencysymbol.component.css")]
        }),
        __metadata("design:paramtypes", [_services_currencysymbol_service__WEBPACK_IMPORTED_MODULE_1__["CurrencysymbolService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], CurrencysymbolComponent);
    return CurrencysymbolComponent;
}());



/***/ }),

/***/ "./src/app/superadmin/extramodule/createextramodule/createextramodule.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/superadmin/extramodule/createextramodule/createextramodule.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vZXh0cmFtb2R1bGUvY3JlYXRlZXh0cmFtb2R1bGUvY3JlYXRlZXh0cmFtb2R1bGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/superadmin/extramodule/createextramodule/createextramodule.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/superadmin/extramodule/createextramodule/createextramodule.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\" style=\"margin-left: 200px;\" >\r\n  <form [formGroup]=\"extraModuleForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n          <label>Name</label>\r\n          <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{'is-invalid': extraModuleForm.get('name').errors \r\n          && extraModuleForm.get('name').touched}\"  />\r\n          <div class=\"invalid-feedback\">Please choose name</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label>Description</label>\r\n          <input type=\"text\" formControlName=\"description\" class=\"form-control\"  />\r\n          \r\n      </div>\r\n      <div class=\"form-group\">\r\n          <button class=\"btn btn-primary\" [hidden]=\"!addBtn\">Add</button>\r\n          <button class=\"btn btn-primary\" [hidden]=\"addBtn\">Update</button>\r\n      </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/superadmin/extramodule/createextramodule/createextramodule.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/superadmin/extramodule/createextramodule/createextramodule.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CreateextramoduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateextramoduleComponent", function() { return CreateextramoduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_extramodule_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/extramodule.service */ "./src/app/_services/extramodule.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateextramoduleComponent = /** @class */ (function () {
    function CreateextramoduleComponent(extraModuleService, fb, router, route, alertify) {
        this.extraModuleService = extraModuleService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.alertify = alertify;
    }
    CreateextramoduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (param) {
            var id = param.get('id');
            _this.addBtn = true;
            _this.extraModuleForm = _this.fb.group({
                id: [''],
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                description: [''],
            });
            if (id.toString() !== '0') {
                _this.extraModuleService.getExtraModule(id.toString()).subscribe(function (data) {
                    _this.addBtn = false;
                    _this.extraModuleForm.
                        setValue({ id: data.id,
                        name: data.name,
                        description: data.description
                    });
                });
            }
        });
    };
    CreateextramoduleComponent.prototype.onSubmit = function () {
        var _this = this;
        this.extraModule = Object.assign({}, this.extraModuleForm.value);
        if (this.extraModule.id === '') {
            this.extraModule.id = '00000000-0000-0000-0000-000000000000';
            this.extraModuleService.create(this.extraModule).subscribe(function () {
                _this.alertify.success('Created  successfully');
                _this.router.navigate(['/extramodule']);
            }, function (error) {
                _this.alertify.error(error);
            });
        }
        else {
            this.extraModuleService.update(this.extraModule).subscribe(function () {
                _this.router.navigate(['/extramodule']);
            });
        }
    };
    CreateextramoduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createextramodule',
            template: __webpack_require__(/*! ./createextramodule.component.html */ "./src/app/superadmin/extramodule/createextramodule/createextramodule.component.html"),
            styles: [__webpack_require__(/*! ./createextramodule.component.css */ "./src/app/superadmin/extramodule/createextramodule/createextramodule.component.css")]
        }),
        __metadata("design:paramtypes", [_services_extramodule_service__WEBPACK_IMPORTED_MODULE_1__["ExtramoduleService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], CreateextramoduleComponent);
    return CreateextramoduleComponent;
}());



/***/ }),

/***/ "./src/app/superadmin/extramodule/createextramoduleprice/createextramoduleprice.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/superadmin/extramodule/createextramoduleprice/createextramoduleprice.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vZXh0cmFtb2R1bGUvY3JlYXRlZXh0cmFtb2R1bGVwcmljZS9jcmVhdGVleHRyYW1vZHVsZXByaWNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/superadmin/extramodule/createextramoduleprice/createextramoduleprice.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/superadmin/extramodule/createextramoduleprice/createextramoduleprice.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"extraModulePriceForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n          <label>Currency</label>\r\n          <select formControlName=\"currencySymbolId\" class=\"form-control\">\r\n            <option *ngFor=\"let currency of extraModulePrice.currencies\" [value]=\"currency.id\">\r\n                    {{currency?.symbol}}\r\n            </option>\r\n          </select>\r\n          \r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label>Country</label>\r\n          <select formControlName=\"countryId\" class=\"form-control\">\r\n            <option *ngFor=\"let country of extraModulePrice.countries\" [value]=\"country.id\">\r\n                    {{country?.name}}\r\n            </option>\r\n          </select>\r\n          \r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Extra Module</label>\r\n        <select formControlName=\"extraModuleId\" class=\"form-control\" class=\"form-control\" [ngClass]=\"{'is-invalid': extraModulePriceForm.get('extraModuleId').errors \r\n        && extraModulePriceForm.get('extraModuleId').touched}\">\r\n          <option *ngFor=\"let extraModule of extraModulePrice.extraModules\" [value]=\"extraModule.id\">\r\n                  {{extraModule?.name}}\r\n          </option>\r\n        </select>\r\n        <div class=\"invalid-feedback\">Please choose extra module</div>\r\n        \r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Price</label>\r\n      <input type=\"text\" formControlName=\"price\" class=\"form-control\" [ngClass]=\"{'is-invalid': extraModulePriceForm.get('price').errors \r\n      && extraModulePriceForm.get('price').touched}\" />\r\n      <div class=\"invalid-feedback\">Please choose price</div>\r\n  </div>\r\n      <div class=\"form-group\">\r\n          <button class=\"btn btn-primary\" [hidden]=\"!addBtn\">Add</button>\r\n          <button class=\"btn btn-primary\" [hidden]=\"addBtn\">Update</button>\r\n      </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/superadmin/extramodule/createextramoduleprice/createextramoduleprice.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/superadmin/extramodule/createextramoduleprice/createextramoduleprice.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: CreateextramodulepriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateextramodulepriceComponent", function() { return CreateextramodulepriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_extramoduleprice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/extramoduleprice.service */ "./src/app/_services/extramoduleprice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_extramodule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/extramodule.service */ "./src/app/_services/extramodule.service.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/country.service */ "./src/app/_services/country.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateextramodulepriceComponent = /** @class */ (function () {
    function CreateextramodulepriceComponent(extraModulePriceService, route, router, fb, extraModuleService, countryService, alertify) {
        this.extraModulePriceService = extraModulePriceService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.extraModuleService = extraModuleService;
        this.countryService = countryService;
        this.alertify = alertify;
    }
    CreateextramodulepriceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getFormData();
        this.route.paramMap.subscribe(function (param) {
            var id = param.get('id');
            _this.extramoduleId = param.get('extramoduleid');
            _this.addBtn = true;
            _this.extraModulePriceForm = _this.fb.group({
                id: [''],
                currencySymbolId: [''],
                countryId: [''],
                price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                extraModuleId: [_this.extramoduleId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
            if (id.toString() !== '0') {
                _this.addBtn = false;
                _this.extraModulePriceService.getExtraModulePrice(id).subscribe(function (_extraModulePrice) {
                    _this.extraModulePriceForm.setValue({
                        id: _extraModulePrice.id,
                        currencySymbolId: _extraModulePrice.currencySymbolId,
                        countryId: _extraModulePrice.countryId,
                        price: _extraModulePrice.price,
                        extraModuleId: _extraModulePrice.extraModuleId
                    });
                });
            }
        });
    };
    CreateextramodulepriceComponent.prototype.getFormData = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            console.log(data);
            _this.extraModulePrice = data['extramodulepricedata'];
        });
    };
    CreateextramodulepriceComponent.prototype.onSubmit = function () {
        var _this = this;
        this.extraModulePrice = Object.assign({}, this.extraModulePriceForm.value);
        if (this.extraModulePrice.id === '') {
            this.extraModulePrice.id = '00000000-0000-0000-0000-000000000000';
            this.extraModulePriceService.create(this.extraModulePrice).subscribe(function () {
                _this.alertify.success('Created successfully');
                _this.router.navigate(['/extramoduleprice', _this.extramoduleId]);
            }, function (error) {
                _this.alertify.error(error);
            });
        }
        else {
            this.extraModulePriceService.update(this.extraModulePrice).subscribe(function () {
                _this.router.navigate(['/extramoduleprice', _this.extramoduleId]);
            });
        }
    };
    CreateextramodulepriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createextramoduleprice',
            template: __webpack_require__(/*! ./createextramoduleprice.component.html */ "./src/app/superadmin/extramodule/createextramoduleprice/createextramoduleprice.component.html"),
            styles: [__webpack_require__(/*! ./createextramoduleprice.component.css */ "./src/app/superadmin/extramodule/createextramoduleprice/createextramoduleprice.component.css")]
        }),
        __metadata("design:paramtypes", [_services_extramoduleprice_service__WEBPACK_IMPORTED_MODULE_1__["ExtramodulepriceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_extramodule_service__WEBPACK_IMPORTED_MODULE_4__["ExtramoduleService"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"]])
    ], CreateextramodulepriceComponent);
    return CreateextramodulepriceComponent;
}());



/***/ }),

/***/ "./src/app/superadmin/extramodule/extramodule/extramodule.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/superadmin/extramodule/extramodule/extramodule.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tblHeader {\r\n    width: 137px;\r\n    height: 14px;\r\n    font-family: Roboto;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 2.11;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #5082a5;\r\n  }\r\n  \r\n  .tblBody {\r\n    width: 73px;\r\n    height: 11px;\r\n    font-family: Roboto;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 2.11;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #9daab3;\r\n  }\r\n  \r\n  tr:hover {\r\n    background-color: #f7f9fa;\r\n  }\r\n  \r\n  .AddButton {\r\n    padding:5px 20px;\r\n    background-color:#ffffff;\r\n    border-top-right-radius: 45px;\r\n    border-bottom-right-radius: 45px;\r\n    border-top-left-radius: 45px;\r\n    border-bottom-left-radius: 45px;\r\n    border: 1px solid #ebebeb;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .AddButton:hover {\r\n    color:white;\r\n    background-color: #5082a5;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJhZG1pbi9leHRyYW1vZHVsZS9leHRyYW1vZHVsZS9leHRyYW1vZHVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlO0dBQ2hCOztFQUVBO0lBQ0MsMEJBQTBCO0dBQzNCOztFQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLFlBQVk7SUFDWiwwQkFBMEI7R0FDM0IiLCJmaWxlIjoic3JjL2FwcC9zdXBlcmFkbWluL2V4dHJhbW9kdWxlL2V4dHJhbW9kdWxlL2V4dHJhbW9kdWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGJsSGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMzdweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjExO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzUwODJhNTtcclxuICB9XHJcbiAgXHJcbiAgLnRibEJvZHkge1xyXG4gICAgd2lkdGg6IDczcHg7XHJcbiAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuMTE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjOWRhYWIzO1xyXG4gIH1cclxuICBcclxuICAgdHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYTtcclxuICB9XHJcbiAgXHJcbiAgLkFkZEJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOjVweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQ1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNDVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQ1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0NXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLkFkZEJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDgyYTU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/superadmin/extramodule/extramodule/extramodule.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/superadmin/extramodule/extramodule/extramodule.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container mt-5\" style=\"margin-left: 200px;\" >\r\n  <div style=\"display: flex; justify-content: flex-end; margin-bottom:20px;border-radius: 5%;\"> \r\n      <div class=\"AddButton\" [routerLink]=\"['/editextramodule/0']\" routerLinkActive=\"router-link-active\" >Add new</div> \r\n  </div>\r\n    <div class=\"card\">\r\n        <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\" class=\"tblHeader\">Name</th>\r\n                <th scope=\"col\" class=\"tblHeader\" >Description</th>\r\n                <th scope=\"col\" class=\"tblHeader\">Actions</th>          \r\n              </tr>\r\n            </thead>\r\n            <tbody class=\"tblBody\">\r\n              <tr *ngFor=\"let extramodule of extraModules\">\r\n                <td>{{extramodule.name}}</td>\r\n                <td>{{extramodule.description}}</td>\r\n                <td><button (click)=\"editExtraModule(extramodule.id)\" class=\"btn btn-link\">Edit</button> |\r\n                    <button (click)=\"deleteExtraModule(extramodule.id)\" class=\"btn btn-link\">Delete</button> |\r\n                  <button [routerLink]=\"['/extramoduleprice', extramodule.id]\">Prices</button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n      </div>\r\n    </div>\r\n  \r\n"

/***/ }),

/***/ "./src/app/superadmin/extramodule/extramodule/extramodule.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/superadmin/extramodule/extramodule/extramodule.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ExtramoduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtramoduleComponent", function() { return ExtramoduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_extramodule_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/extramodule.service */ "./src/app/_services/extramodule.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExtramoduleComponent = /** @class */ (function () {
    function ExtramoduleComponent(extraModuleService, alertify, router) {
        this.extraModuleService = extraModuleService;
        this.alertify = alertify;
        this.router = router;
    }
    ExtramoduleComponent.prototype.ngOnInit = function () {
        this.getExtraModules();
    };
    ExtramoduleComponent.prototype.editExtraModule = function (id) {
        this.router.navigate(['/editextramodule', id]); //
    };
    ExtramoduleComponent.prototype.getExtraModules = function () {
        var _this = this;
        this.extraModuleService.getExtraModules().subscribe(function (extraModules) {
            _this.extraModules = extraModules;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ExtramoduleComponent.prototype.deleteExtraModule = function (id) {
        var _this = this;
        this.alertify.confirm('Are you sure you want to delete this', function () {
            _this.extraModuleService.delete(id).subscribe(function () {
                _this.getExtraModules();
            }, function (error) {
                _this.alertify.error(error);
            });
        });
    };
    ExtramoduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-extramodule',
            template: __webpack_require__(/*! ./extramodule.component.html */ "./src/app/superadmin/extramodule/extramodule/extramodule.component.html"),
            styles: [__webpack_require__(/*! ./extramodule.component.css */ "./src/app/superadmin/extramodule/extramodule/extramodule.component.css")]
        }),
        __metadata("design:paramtypes", [_services_extramodule_service__WEBPACK_IMPORTED_MODULE_1__["ExtramoduleService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ExtramoduleComponent);
    return ExtramoduleComponent;
}());



/***/ }),

/***/ "./src/app/superadmin/extramodule/extramoduleprice/extramoduleprice.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/superadmin/extramodule/extramoduleprice/extramoduleprice.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vZXh0cmFtb2R1bGUvZXh0cmFtb2R1bGVwcmljZS9leHRyYW1vZHVsZXByaWNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/superadmin/extramodule/extramoduleprice/extramoduleprice.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/superadmin/extramodule/extramoduleprice/extramoduleprice.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <button class=\"btn btn-primary mb-2\" [routerLink]=\"['/editextramoduleprice/0', extramoduleid]\" routerLinkActive=\"router-link-active\" >Add new</button>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>Extra Module</th>\r\n        <th>Currency Symbol</th>\r\n        <th>Country</th>\r\n        <th>Price</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let extraModulePrice of extraModulePrices\">\r\n        <td>{{extraModulePrice.extraModule?.name}}</td>\r\n        <td>{{extraModulePrice.currencySymbol?.symbol}}</td>\r\n        <td>{{extraModulePrice.country?.name}}</td>\r\n        <td>{{extraModulePrice.price}}</td>\r\n        <td><button (click)=\"editExtraModulePrice(extraModulePrice.id)\" class=\"btn btn-link\">Edit</button> |\r\n            <button class=\"btn btn-link\" (click)=\"deleteExtraModulePrice(extraModulePrice.id)\">Delete</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/superadmin/extramodule/extramoduleprice/extramoduleprice.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/superadmin/extramodule/extramoduleprice/extramoduleprice.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ExtramodulepriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtramodulepriceComponent", function() { return ExtramodulepriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_extramoduleprice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/extramoduleprice.service */ "./src/app/_services/extramoduleprice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExtramodulepriceComponent = /** @class */ (function () {
    function ExtramodulepriceComponent(extraModulePriceService, router, route, alertify) {
        this.extraModulePriceService = extraModulePriceService;
        this.router = router;
        this.route = route;
        this.alertify = alertify;
    }
    ExtramodulepriceComponent.prototype.ngOnInit = function () {
        var params = this.route.snapshot.params;
        this.extramoduleid = params.id.toString();
        this.getByModule(this.extramoduleid);
    };
    /* getExtraModulePrices() {
      this.extraModulePriceService.getExtraModulePrices().subscribe((extraModulePrices: ExtraModulePrice[]) => {
        this.extraModulePrices = extraModulePrices;
      }, error => {
        this.alertify.error(error);
      });
    } */
    ExtramodulepriceComponent.prototype.getByModule = function (moduleId) {
        var _this = this;
        this.extraModulePriceService.getByExtraModule(moduleId).subscribe(function (_extraModulePrices) {
            _this.extraModulePrices = _extraModulePrices;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ExtramodulepriceComponent.prototype.editExtraModulePrice = function (id) {
        this.router.navigate(['/editextramoduleprice', id]);
    };
    ExtramodulepriceComponent.prototype.deleteExtraModulePrice = function (id) {
        var _this = this;
        this.extraModulePriceService.delete(id).subscribe(function () {
            _this.getByModule(_this.extramoduleid);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ExtramodulepriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-extramoduleprice',
            template: __webpack_require__(/*! ./extramoduleprice.component.html */ "./src/app/superadmin/extramodule/extramoduleprice/extramoduleprice.component.html"),
            styles: [__webpack_require__(/*! ./extramoduleprice.component.css */ "./src/app/superadmin/extramodule/extramoduleprice/extramoduleprice.component.css")]
        }),
        __metadata("design:paramtypes", [_services_extramoduleprice_service__WEBPACK_IMPORTED_MODULE_1__["ExtramodulepriceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], ExtramodulepriceComponent);
    return ExtramodulepriceComponent;
}());



/***/ }),

/***/ "./src/app/superadmin/language/createlanguage/createlanguage.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/superadmin/language/createlanguage/createlanguage.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vbGFuZ3VhZ2UvY3JlYXRlbGFuZ3VhZ2UvY3JlYXRlbGFuZ3VhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/superadmin/language/createlanguage/createlanguage.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/superadmin/language/createlanguage/createlanguage.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\" style=\"margin-left: 200px;\" >\r\n  <form [formGroup]=\"languageForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n          <label>Name</label>\r\n          <input type=\"text\" formControlName=\"name\" class=\"form-control\"  />\r\n      </div>\r\n      <div class=\"form-group\">\r\n            <label>Code</label>\r\n            <input type=\"text\" formControlName=\"code\" class=\"form-control\"  />\r\n        </div>\r\n      <div class=\"form-group\">\r\n          <button class=\"btn btn-primary\" [hidden]=\"!addBtn\">Add</button>\r\n          <button class=\"btn btn-primary\" [hidden]=\"addBtn\">Update</button>\r\n      </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/superadmin/language/createlanguage/createlanguage.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/superadmin/language/createlanguage/createlanguage.component.ts ***!
  \********************************************************************************/
/*! exports provided: CreatelanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatelanguageComponent", function() { return CreatelanguageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/language.service */ "./src/app/_services/language.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatelanguageComponent = /** @class */ (function () {
    function CreatelanguageComponent(languageService, router, route, alertify, fb) {
        this.languageService = languageService;
        this.router = router;
        this.route = route;
        this.alertify = alertify;
        this.fb = fb;
    }
    CreatelanguageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (param) {
            _this.addBtn = true;
            var id = param.get('id');
            _this.languageForm = _this.fb.group({
                id: [''],
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
            if (id.toString() !== '0') {
                _this.addBtn = false;
                _this.languageService.getLanguage(id).subscribe(function (data) {
                    _this.languageForm.setValue({
                        id: data.id,
                        name: data.name,
                        code: data.code
                    });
                });
            }
        });
    };
    CreatelanguageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.language = Object.assign({}, this.languageForm.value);
        if (this.language.id === '') {
            this.language.id = '00000000-0000-0000-0000-000000000000';
            this.languageService.create(this.language).subscribe(function () {
                _this.alertify.success('Created successfully');
                _this.router.navigate(['/languages']);
            }, function (error) {
                _this.alertify.error(error);
            });
        }
        else {
            this.languageService.update(this.language).subscribe(function () {
                _this.router.navigate(['/languages']);
            }, function (error) {
                _this.alertify.error(error);
            });
        }
    };
    CreatelanguageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createlanguage',
            template: __webpack_require__(/*! ./createlanguage.component.html */ "./src/app/superadmin/language/createlanguage/createlanguage.component.html"),
            styles: [__webpack_require__(/*! ./createlanguage.component.css */ "./src/app/superadmin/language/createlanguage/createlanguage.component.css")]
        }),
        __metadata("design:paramtypes", [_services_language_service__WEBPACK_IMPORTED_MODULE_1__["LanguageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CreatelanguageComponent);
    return CreatelanguageComponent;
}());



/***/ }),

/***/ "./src/app/superadmin/language/language/language.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/superadmin/language/language/language.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tblHeader {\r\n    width: 137px;\r\n    height: 14px;\r\n    font-family: Roboto;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 2.11;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #5082a5;\r\n  }\r\n  \r\n  .tblBody {\r\n    width: 73px;\r\n    height: 11px;\r\n    font-family: Roboto;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 2.11;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #9daab3;\r\n  }\r\n  \r\n  tr:hover {\r\n    background-color: #f7f9fa;\r\n  }\r\n  \r\n  .AddButton {\r\n    padding:5px 20px;\r\n    background-color:#ffffff;\r\n    border-top-right-radius: 45px;\r\n    border-bottom-right-radius: 45px;\r\n    border-top-left-radius: 45px;\r\n    border-bottom-left-radius: 45px;\r\n    border: 1px solid #ebebeb;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .AddButton:hover {\r\n    color:white;\r\n    background-color: #5082a5;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJhZG1pbi9sYW5ndWFnZS9sYW5ndWFnZS9sYW5ndWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlO0dBQ2hCOztFQUVBO0lBQ0MsMEJBQTBCO0dBQzNCOztFQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLFlBQVk7SUFDWiwwQkFBMEI7R0FDM0IiLCJmaWxlIjoic3JjL2FwcC9zdXBlcmFkbWluL2xhbmd1YWdlL2xhbmd1YWdlL2xhbmd1YWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGJsSGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMzdweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjExO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzUwODJhNTtcclxuICB9XHJcbiAgXHJcbiAgLnRibEJvZHkge1xyXG4gICAgd2lkdGg6IDczcHg7XHJcbiAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuMTE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjOWRhYWIzO1xyXG4gIH1cclxuICBcclxuICAgdHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYTtcclxuICB9XHJcbiAgXHJcbiAgLkFkZEJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOjVweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQ1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNDVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQ1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0NXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLkFkZEJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDgyYTU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/superadmin/language/language/language.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/superadmin/language/language/language.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container mt-5\" style=\"margin-left: 200px;\" >\r\n  <div style=\"display: flex; justify-content: flex-end; margin-bottom:20px;border-radius: 5%;\"> \r\n      <div class=\"AddButton\"  [routerLink]=\"['/editlanguage/0']\" routerLinkActive=\"router-link-active\" >Add new</div> \r\n  </div>\r\n    <div class=\"card\">\r\n        <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\" class=\"tblHeader\">Name</th>\r\n                <th scope=\"col\" class=\"tblHeader\" >Actions</th>\r\n                <th scope=\"col\" class=\"tblHeader\"></th>          \r\n              \r\n              </tr>\r\n            </thead>\r\n            <tbody class=\"tblBody\">\r\n              <tr *ngFor=\"let language of languages\">\r\n                <td>{{language.name}}</td>\r\n                <td>{{language.code}}</td>\r\n                <td><button (click)=\"editLanguage(language.id)\" class=\"btn btn-link\">Edit</button> |\r\n                  <button (click)=\"deleteLanguage(language.id)\" class=\"btn btn-link\">Delete</button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/superadmin/language/language/language.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/superadmin/language/language/language.component.ts ***!
  \********************************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/language.service */ "./src/app/_services/language.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LanguageComponent = /** @class */ (function () {
    function LanguageComponent(languageService, alertify, router) {
        this.languageService = languageService;
        this.alertify = alertify;
        this.router = router;
    }
    LanguageComponent.prototype.ngOnInit = function () {
        this.getLanguages();
    };
    LanguageComponent.prototype.getLanguages = function () {
        var _this = this;
        this.languageService.getLanguages().subscribe(function (_languages) {
            _this.languages = _languages;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    LanguageComponent.prototype.editLanguage = function (id) {
        this.router.navigate(['/editlanguage', id]);
    };
    LanguageComponent.prototype.deleteLanguage = function (id) {
        var _this = this;
        this.languageService.delete(id).subscribe(function () {
            _this.getLanguages();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    LanguageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-language',
            template: __webpack_require__(/*! ./language.component.html */ "./src/app/superadmin/language/language/language.component.html"),
            styles: [__webpack_require__(/*! ./language.component.css */ "./src/app/superadmin/language/language/language.component.css")]
        }),
        __metadata("design:paramtypes", [_services_language_service__WEBPACK_IMPORTED_MODULE_1__["LanguageService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LanguageComponent);
    return LanguageComponent;
}());



/***/ }),

/***/ "./src/app/superadmin/packages/createpackage/createpackage.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/superadmin/packages/createpackage/createpackage.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vcGFja2FnZXMvY3JlYXRlcGFja2FnZS9jcmVhdGVwYWNrYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/superadmin/packages/createpackage/createpackage.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/superadmin/packages/createpackage/createpackage.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-left:200px;\">\r\n  <form [formGroup]=\"packageForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n          <label>Name</label>\r\n          <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{'is-invalid': packageForm.get('name').errors \r\n          && packageForm.get('name').touched}\" />\r\n          <div class=\"invalid-feedback\">Please choose a Name</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label>Description</label>\r\n          <input type=\"text\" formControlName=\"description\" class=\"form-control\"  />\r\n          \r\n      </div>\r\n      <div class=\"form-group\" [hidden]=\"addBtn\">\r\n        <div class=\"form-check\">\r\n            <input type=\"checkbox\" formControlName=\"isDeleted\" class=\"form-check-input\"  />\r\n            <label class=\"form-check-label\">Disable</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <button class=\"btn btn-primary\" [hidden]=\"!addBtn\" [disabled]=\"!packageForm.valid\">Add</button>\r\n          <button class=\"btn btn-primary\" [hidden]=\"addBtn\" [disabled]=\"!packageForm.valid\">Update</button>\r\n      </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/superadmin/packages/createpackage/createpackage.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/superadmin/packages/createpackage/createpackage.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreatepackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatepackageComponent", function() { return CreatepackageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_packageplan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/packageplan.service */ "./src/app/_services/packageplan.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatepackageComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function CreatepackageComponent(packageService, alertify, fb, router, _route) {
        this.packageService = packageService;
        this.alertify = alertify;
        this.fb = fb;
        this.router = router;
        this._route = _route;
    }
    CreatepackageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (param) {
            _this.addBtn = true;
            var id = param.get('id');
            _this.packageForm = _this.fb.group({
                id: [''],
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                description: [''],
                isDeleted: [false]
            });
            if (id.toString() !== '0') {
                _this.packageService.getPackage(id.toString()).subscribe(function (data) {
                    _this.addBtn = false;
                    _this.packageForm.
                        setValue({ id: data.id,
                        name: data.name,
                        description: data.description,
                        isDeleted: data.isDeleted
                    });
                });
            }
        });
    };
    CreatepackageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.packageObj = Object.assign({}, this.packageForm.value);
        if (this.packageObj.id.toString() === '') {
            this.packageObj.id = '00000000-0000-0000-0000-000000000000';
            this.packageService.createPackage(this.packageObj).subscribe(function () {
                _this.router.navigate(['/packages']);
            }, function (error) {
                _this.alertify.error(error);
            });
        }
        else {
            this.packageService.updatePackate(this.packageObj).subscribe(function () {
                _this.router.navigate(['/packages']);
            });
        }
    };
    CreatepackageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createpackage',
            template: __webpack_require__(/*! ./createpackage.component.html */ "./src/app/superadmin/packages/createpackage/createpackage.component.html"),
            styles: [__webpack_require__(/*! ./createpackage.component.css */ "./src/app/superadmin/packages/createpackage/createpackage.component.css")]
        }),
        __metadata("design:paramtypes", [_services_packageplan_service__WEBPACK_IMPORTED_MODULE_1__["PackageplanService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CreatepackageComponent);
    return CreatepackageComponent;
}());



/***/ }),

/***/ "./src/app/superadmin/packages/createpackageplanprice/createpackageplanprice.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/superadmin/packages/createpackageplanprice/createpackageplanprice.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vcGFja2FnZXMvY3JlYXRlcGFja2FnZXBsYW5wcmljZS9jcmVhdGVwYWNrYWdlcGxhbnByaWNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/superadmin/packages/createpackageplanprice/createpackageplanprice.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/superadmin/packages/createpackageplanprice/createpackageplanprice.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-left:200px\">\r\n  <form [formGroup]=\"packagePlanPriceForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n          <label>Currency</label>\r\n          <select formControlName=\"currencySymbolId\" class=\"form-control\">\r\n            <option *ngFor=\"let currency of packagePlanPrice.currencies\" [value]=\"currency.id\">\r\n                    {{currency.symbol}}\r\n            </option>\r\n          </select>\r\n          \r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label>Country</label>\r\n          <select formControlName=\"countryId\" class=\"form-control\">\r\n            <option *ngFor=\"let country of packagePlanPrice.countries\" [value]=\"country.id\">\r\n                    {{country.name}}\r\n            </option>\r\n          </select>\r\n          \r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Package Plan</label>\r\n        <select formControlName=\"packagePlanId\" class=\"form-control\" [ngClass]=\"{'is-invalid': packagePlanPriceForm.get('packagePlanId').errors \r\n        && packagePlanPriceForm.get('packagePlanId').touched}\" >\r\n          <option *ngFor=\"let package of packagePlanPrice.packages\" [value]=\"package.id\" >\r\n                  {{package.name}}\r\n          </option>\r\n        </select>\r\n        <div class=\"invalid-feedback\">Please choose a Package</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Price</label>\r\n      <input type=\"text\" formControlName=\"price\" class=\"form-control\" [ngClass]=\"{'is-invalid': packagePlanPriceForm.get('price').errors \r\n      && packagePlanPriceForm.get('price').touched}\" />\r\n      <div class=\"invalid-feedback\">Please type the price</div>\r\n  </div>\r\n      <div class=\"form-group\">\r\n          <button class=\"btn btn-primary\" [hidden]=\"!addBtn\" [disabled]=\"!packagePlanPriceForm.valid\">Add</button>\r\n          <button class=\"btn btn-primary\" [hidden]=\"addBtn\" [disabled]=\"!packagePlanPriceForm.valid\">Update</button>\r\n      </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/superadmin/packages/createpackageplanprice/createpackageplanprice.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/superadmin/packages/createpackageplanprice/createpackageplanprice.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CreatepackageplanpriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatepackageplanpriceComponent", function() { return CreatepackageplanpriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/country.service */ "./src/app/_services/country.service.ts");
/* harmony import */ var _services_packageplan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/packageplan.service */ "./src/app/_services/packageplan.service.ts");
/* harmony import */ var _services_packageplanprice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/packageplanprice.service */ "./src/app/_services/packageplanprice.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreatepackageplanpriceComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function CreatepackageplanpriceComponent(fb, alertify, packagePlanPriceService, countryService, packagePlanService, _route, router) {
        this.fb = fb;
        this.alertify = alertify;
        this.packagePlanPriceService = packagePlanPriceService;
        this.countryService = countryService;
        this.packagePlanService = packagePlanService;
        this._route = _route;
        this.router = router;
    }
    CreatepackageplanpriceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getFormData();
        this._route.paramMap.subscribe(function (param) {
            var id = param.get('id');
            _this.packageId = param.get('packageid');
            _this.addBtn = true;
            _this.packagePlanPriceForm = _this.fb.group({
                id: [''],
                currencySymbolId: [''],
                countryId: [''],
                price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                packagePlanId: [_this.packageId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            if (id.toString() !== '0') {
                _this.addBtn = false;
                _this.packagePlanPriceService.getById(id).subscribe(function (_packagePlanPrice) {
                    _this.packagePlanPriceForm.setValue({
                        id: _packagePlanPrice.id,
                        currencySymbolId: _packagePlanPrice.currencySymbolId,
                        countryId: _packagePlanPrice.countryId,
                        price: _packagePlanPrice.price,
                        packagePlanId: _packagePlanPrice.packagePlanId
                    });
                });
            }
        });
    };
    CreatepackageplanpriceComponent.prototype.getFormData = function () {
        var _this = this;
        this._route.data.subscribe(function (data) {
            _this.packagePlanPrice = data['packageplanpricedata'];
        });
    };
    CreatepackageplanpriceComponent.prototype.onSubmit = function () {
        var _this = this;
        this.packagePlanPrice = Object.assign({}, this.packagePlanPriceForm.value);
        this.packagePlanPrice.id = '00000000-0000-0000-0000-0000000000aa';
        this.packagePlanPriceService.create(this.packagePlanPrice).subscribe(function () {
            _this.alertify.success('Created successfully');
            _this.router.navigate(['/packageplanprices', _this.packageId]);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CreatepackageplanpriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createpackageplanprice',
            template: __webpack_require__(/*! ./createpackageplanprice.component.html */ "./src/app/superadmin/packages/createpackageplanprice/createpackageplanprice.component.html"),
            styles: [__webpack_require__(/*! ./createpackageplanprice.component.css */ "./src/app/superadmin/packages/createpackageplanprice/createpackageplanprice.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"], _services_packageplanprice_service__WEBPACK_IMPORTED_MODULE_5__["PackageplanpriceService"], _services_country_service__WEBPACK_IMPORTED_MODULE_3__["CountryService"], _services_packageplan_service__WEBPACK_IMPORTED_MODULE_4__["PackageplanService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreatepackageplanpriceComponent);
    return CreatepackageplanpriceComponent;
}());



/***/ }),

/***/ "./src/app/superadmin/packages/packageplan/packageplan.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/superadmin/packages/packageplan/packageplan.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tblHeader {\r\n    width: 137px;\r\n    height: 14px;\r\n    font-family: Roboto;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 2.11;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #5082a5;\r\n  }\r\n  \r\n  .tblBody {\r\n    width: 73px;\r\n    height: 11px;\r\n    font-family: Roboto;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 2.11;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #9daab3;\r\n  }\r\n  \r\n  tr:hover {\r\n    background-color: #f7f9fa;\r\n  }\r\n  \r\n  .AddButton {\r\n    padding:5px 20px;\r\n    background-color:#ffffff;\r\n    border-top-right-radius: 45px;\r\n    border-bottom-right-radius: 45px;\r\n    border-top-left-radius: 45px;\r\n    border-bottom-left-radius: 45px;\r\n    border: 1px solid #ebebeb;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .AddButton:hover {\r\n    color:white;\r\n    background-color: #5082a5;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJhZG1pbi9wYWNrYWdlcy9wYWNrYWdlcGxhbi9wYWNrYWdlcGxhbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlO0dBQ2hCOztFQUVBO0lBQ0MsMEJBQTBCO0dBQzNCOztFQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLFlBQVk7SUFDWiwwQkFBMEI7R0FDM0IiLCJmaWxlIjoic3JjL2FwcC9zdXBlcmFkbWluL3BhY2thZ2VzL3BhY2thZ2VwbGFuL3BhY2thZ2VwbGFuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGJsSGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMzdweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjExO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzUwODJhNTtcclxuICB9XHJcbiAgXHJcbiAgLnRibEJvZHkge1xyXG4gICAgd2lkdGg6IDczcHg7XHJcbiAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuMTE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjOWRhYWIzO1xyXG4gIH1cclxuICBcclxuICAgdHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYTtcclxuICB9XHJcbiAgXHJcbiAgLkFkZEJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOjVweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQ1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNDVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQ1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0NXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLkFkZEJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDgyYTU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/superadmin/packages/packageplan/packageplan.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/superadmin/packages/packageplan/packageplan.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\" style=\"margin-left: 200px;\">\r\n  <div style=\"display: flex; justify-content: flex-end; margin-bottom:20px;margin-top:10px;border-radius: 5%;\"> \r\n    <div class=\"AddButton\"   [routerLink]=\"['/editpackage/0']\" routerLinkActive=\"router-link-active\">Add new</div> \r\n</div>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th class=\"tblHeader\" >Name</th>\r\n        <th class=\"tblHeader\" >Description</th>\r\n        <th class=\"tblHeader\">Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody class=\"tblBody\">\r\n      <tr *ngFor=\"let package of packages\">\r\n        <td>{{package.name}}</td>\r\n        <td>{{package.description}}</td>\r\n        <td><button (click)=\"editPackage(package.id)\" class=\"btn btn-link\">Edit</button> |\r\n            <button (click)=\"deletePackage(package.id)\" class=\"btn btn-link\">Disable</button>\r\n            <a [routerLink]=\"['/packageplanprices',package.id]\"   class=\"btn btn-link\" > Prices</a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/superadmin/packages/packageplan/packageplan.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/superadmin/packages/packageplan/packageplan.component.ts ***!
  \**************************************************************************/
/*! exports provided: PackageplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageplanComponent", function() { return PackageplanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_packageplan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/packageplan.service */ "./src/app/_services/packageplan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PackageplanComponent = /** @class */ (function () {
    function PackageplanComponent(packageService, router, alertify) {
        this.packageService = packageService;
        this.router = router;
        this.alertify = alertify;
    }
    PackageplanComponent.prototype.ngOnInit = function () {
        this.getPackages();
    };
    PackageplanComponent.prototype.getPackages = function () {
        var _this = this;
        this.packageService.getPackages().subscribe(function (packages) { _this.packages = packages; }, function (error) {
            _this.alertify.error(error);
        });
    };
    PackageplanComponent.prototype.editPackage = function (id) {
        this.router.navigate(['/editpackage', id]); //
    };
    PackageplanComponent.prototype.deletePackage = function (id) {
        var _this = this;
        this.packageService.deleteObj(id).subscribe(function () {
            _this.getPackages();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PackageplanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-packageplan',
            template: __webpack_require__(/*! ./packageplan.component.html */ "./src/app/superadmin/packages/packageplan/packageplan.component.html"),
            styles: [__webpack_require__(/*! ./packageplan.component.css */ "./src/app/superadmin/packages/packageplan/packageplan.component.css")]
        }),
        __metadata("design:paramtypes", [_services_packageplan_service__WEBPACK_IMPORTED_MODULE_1__["PackageplanService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], PackageplanComponent);
    return PackageplanComponent;
}());



/***/ }),

/***/ "./src/app/superadmin/packages/packageplanprice/packageplanprice.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/superadmin/packages/packageplanprice/packageplanprice.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vcGFja2FnZXMvcGFja2FnZXBsYW5wcmljZS9wYWNrYWdlcGxhbnByaWNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/superadmin/packages/packageplanprice/packageplanprice.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/superadmin/packages/packageplanprice/packageplanprice.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-left:200px;\">\r\n  <button\r\n    class=\"btn btn-primary mb-2\"\r\n    [routerLink]=\"['/editpackageplanprice/0',packageid]\"\r\n    routerLinkActive=\"router-link-active\"\r\n  >\r\n    Add new\r\n  </button>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>Package Plan</th>\r\n        <th>Currency Symbol</th>\r\n        <th>Country</th>\r\n        <th>Price</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let packageplanprice of packagePlanPrices\">\r\n        <td>\r\n          <a [routerLink]=\"['/packages']\">\r\n            {{ packageplanprice.packagePlan?.name }}\r\n          </a>\r\n        </td>\r\n        <td>{{ packageplanprice.currencySymbol?.symbol }}</td>\r\n        <td>{{ packageplanprice.country?.name }}</td>\r\n        <td>{{ packageplanprice?.price }}</td>\r\n        <td>\r\n          <button\r\n            (click)=\"editPackagePlanPrice(packageplanprice.id)\"\r\n            class=\"btn btn-link\"\r\n          >\r\n            Edit\r\n          </button>\r\n          | <a href=\"\">Disable</a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/superadmin/packages/packageplanprice/packageplanprice.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/superadmin/packages/packageplanprice/packageplanprice.component.ts ***!
  \************************************************************************************/
/*! exports provided: PackageplanpriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageplanpriceComponent", function() { return PackageplanpriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_packageplanprice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/packageplanprice.service */ "./src/app/_services/packageplanprice.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PackageplanpriceComponent = /** @class */ (function () {
    function PackageplanpriceComponent(packagePlanPriceService, alertify, router, route) {
        this.packagePlanPriceService = packagePlanPriceService;
        this.alertify = alertify;
        this.router = router;
        this.route = route;
    }
    PackageplanpriceComponent.prototype.ngOnInit = function () {
        var params = this.route.snapshot.params;
        this.packageid = params.id.toString();
        this.getPackagePlanPrices(this.packageid);
    };
    PackageplanpriceComponent.prototype.getPackagePlanPrices = function (packagePlanId) {
        var _this = this;
        this.packagePlanPriceService.getAllByPackagePlan(packagePlanId).subscribe(function (_packagePlanPrice) {
            _this.packagePlanPrices = _packagePlanPrice;
            console.log(_this.packagePlanPrices);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PackageplanpriceComponent.prototype.editPackagePlanPrice = function (id) {
        this.router.navigate(['/editpackageplanprice', id]);
    };
    PackageplanpriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-packageplanprice',
            template: __webpack_require__(/*! ./packageplanprice.component.html */ "./src/app/superadmin/packages/packageplanprice/packageplanprice.component.html"),
            styles: [__webpack_require__(/*! ./packageplanprice.component.css */ "./src/app/superadmin/packages/packageplanprice/packageplanprice.component.css")]
        }),
        __metadata("design:paramtypes", [_services_packageplanprice_service__WEBPACK_IMPORTED_MODULE_1__["PackageplanpriceService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PackageplanpriceComponent);
    return PackageplanpriceComponent;
}());



/***/ }),

/***/ "./src/app/superadmin/termsandconditions/createtermsandcondition/createtermsandcondition.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/superadmin/termsandconditions/createtermsandcondition/createtermsandcondition.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vdGVybXNhbmRjb25kaXRpb25zL2NyZWF0ZXRlcm1zYW5kY29uZGl0aW9uL2NyZWF0ZXRlcm1zYW5kY29uZGl0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/superadmin/termsandconditions/createtermsandcondition/createtermsandcondition.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/superadmin/termsandconditions/createtermsandcondition/createtermsandcondition.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"termsAndConditionForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n          <label>Name</label>\r\n          <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{'is-invalid': termsAndConditionForm.get('name').errors \r\n          && termsAndConditionForm.get('name').touched}\"  />\r\n          <div class=\"invalid-feedback\">Please choose a name</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label>Country</label>\r\n          <select formControlName=\"countryId\" class=\"form-control\" class=\"form-control\" [ngClass]=\"{'is-invalid': termsAndConditionForm.get('countryId').errors \r\n        && termsAndConditionForm.get('countryId').touched}\">\r\n          <option *ngFor=\"let country of termsAndCondition.countries\" [value]=\"country.id\">\r\n                  {{country?.name}}\r\n          </option>\r\n        </select>\r\n        <div class=\"invalid-feedback\">Please choose the country</div>\r\n          \r\n      </div>\r\n      <div class=\"form-group\" [hidden]=\"!addBtn\">\r\n        <label>Upload file</label>\r\n        <input type=\"file\" (change)=\"fileSelectedEvent($event)\"  name=\"fileupload\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <button class=\"btn btn-primary\" [hidden]=\"!addBtn\">Add</button>\r\n          <button class=\"btn btn-primary\" [hidden]=\"addBtn\">Update</button>\r\n      </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/superadmin/termsandconditions/createtermsandcondition/createtermsandcondition.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/superadmin/termsandconditions/createtermsandcondition/createtermsandcondition.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: CreatetermsandconditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatetermsandconditionComponent", function() { return CreatetermsandconditionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_termsandcondition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/termsandcondition.service */ "./src/app/_services/termsandcondition.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatetermsandconditionComponent = /** @class */ (function () {
    function CreatetermsandconditionComponent(termAndConditionService, alertify, route, router, fb) {
        this.termAndConditionService = termAndConditionService;
        this.alertify = alertify;
        this.route = route;
        this.router = router;
        this.fb = fb;
    }
    CreatetermsandconditionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getFormData();
        this.route.paramMap.subscribe(function (param) {
            var id = param.get('id');
            _this.countryid = param.get('countryid');
            _this.addBtn = true;
            _this.termsAndConditionForm = _this.fb.group({
                id: [''],
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                countryId: [_this.countryid, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                fileupload: [null]
            });
            if (id.toString() !== '0') {
                _this.addBtn = false;
                _this.termAndConditionService.getById(id).subscribe(function (data) {
                    _this.termsAndConditionForm.setValue({
                        id: data.id,
                        name: data.name,
                        countryId: data.countryId,
                        fileupload: null
                    });
                }, function (error) {
                    _this.alertify.error('Could not retrieve data');
                });
            }
        });
    };
    CreatetermsandconditionComponent.prototype.fileSelectedEvent = function (event) {
        this.termsAndConditionForm.get('fileupload').setValue(event.target.files[0]);
    };
    CreatetermsandconditionComponent.prototype.getFormData = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.termsAndCondition = data['termsdata'];
        });
    };
    CreatetermsandconditionComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('id', this.termsAndConditionForm.get('id').value);
        formData.append('name', this.termsAndConditionForm.get('name').value);
        formData.append('countryId', this.termsAndConditionForm.get('countryId').value);
        formData.append('file', this.termsAndConditionForm.get('fileupload').value);
        this.termsAndCondition = Object.assign({}, this.termsAndConditionForm.value);
        if (formData.get('id') === '') {
            formData.set('id', '00000000-0000-0000-0000-000000000000');
            this.termAndConditionService.create(formData).subscribe(function () {
                _this.alertify.success('Created successfully');
                _this.router.navigate(['/countries/termsandconditions', _this.countryid]);
            }, function (error) {
                _this.alertify.error(error);
            });
        }
        else {
            this.termAndConditionService.update(this.termsAndCondition).subscribe(function () {
                _this.router.navigate(['/termsandconditions']);
            }, function (error) {
                _this.alertify.error(error);
            });
        }
    };
    CreatetermsandconditionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createtermsandcondition',
            template: __webpack_require__(/*! ./createtermsandcondition.component.html */ "./src/app/superadmin/termsandconditions/createtermsandcondition/createtermsandcondition.component.html"),
            styles: [__webpack_require__(/*! ./createtermsandcondition.component.css */ "./src/app/superadmin/termsandconditions/createtermsandcondition/createtermsandcondition.component.css")]
        }),
        __metadata("design:paramtypes", [_services_termsandcondition_service__WEBPACK_IMPORTED_MODULE_1__["TermsandconditionService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CreatetermsandconditionComponent);
    return CreatetermsandconditionComponent;
}());



/***/ }),

/***/ "./src/app/superadmin/termsandconditions/termsandcondition/termsandcondition.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/superadmin/termsandconditions/termsandcondition/termsandcondition.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vdGVybXNhbmRjb25kaXRpb25zL3Rlcm1zYW5kY29uZGl0aW9uL3Rlcm1zYW5kY29uZGl0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/superadmin/termsandconditions/termsandcondition/termsandcondition.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/superadmin/termsandconditions/termsandcondition/termsandcondition.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <button class=\"btn btn-primary mb-2\" [routerLink]=\"['/countries/editterm/0', countryid]\" routerLinkActive=\"router-link-active\" >Add new</button>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th >Name</th>\r\n        <th >Country</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let term of termsAndConditions\">\r\n        <td>{{term.name}}</td>\r\n        <td>{{term.country.name}}</td>\r\n        <td><button (click)=\"editTerm(term.id)\" class=\"btn btn-link\">Edit</button>\r\n          <button (click)=\"deleteTerm(term.id)\" class=\"btn btn-link\">Delete</button>\r\n          <button (click)=\"downloadDocument(term.id)\" class=\"btn btn-link\">Download</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/superadmin/termsandconditions/termsandcondition/termsandcondition.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/superadmin/termsandconditions/termsandcondition/termsandcondition.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TermsandconditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsandconditionComponent", function() { return TermsandconditionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_termsandcondition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/termsandcondition.service */ "./src/app/_services/termsandcondition.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TermsandconditionComponent = /** @class */ (function () {
    function TermsandconditionComponent(termsAndConditionService, alertify, router, route) {
        this.termsAndConditionService = termsAndConditionService;
        this.alertify = alertify;
        this.router = router;
        this.route = route;
    }
    TermsandconditionComponent.prototype.ngOnInit = function () {
        var params = this.route.snapshot.params;
        this.countryid = params.id.toString();
        this.getTermsAndConditions(this.countryid);
    };
    TermsandconditionComponent.prototype.getTermsAndConditions = function (countryid) {
        var _this = this;
        this.termsAndConditionService.gerTermsByCountry(countryid).subscribe(function (_terms) {
            console.log(_terms);
            _this.termsAndConditions = _terms;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    TermsandconditionComponent.prototype.editTerm = function (id) {
        this.router.navigate(['/countries/editterm', id, this.countryid]);
    };
    TermsandconditionComponent.prototype.deleteTerm = function (id) {
        var _this = this;
        this.alertify.confirm('Are you sure you want to delete this', function () {
            _this.termsAndConditionService.delete(id).subscribe(function () {
                _this.alertify.success('Deleted successfully');
                _this.getTermsAndConditions(_this.countryid);
            }, function (error) {
                _this.alertify.error(error);
            });
        });
    };
    TermsandconditionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-termsandcondition',
            template: __webpack_require__(/*! ./termsandcondition.component.html */ "./src/app/superadmin/termsandconditions/termsandcondition/termsandcondition.component.html"),
            styles: [__webpack_require__(/*! ./termsandcondition.component.css */ "./src/app/superadmin/termsandconditions/termsandcondition/termsandcondition.component.css")]
        }),
        __metadata("design:paramtypes", [_services_termsandcondition_service__WEBPACK_IMPORTED_MODULE_1__["TermsandconditionService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TermsandconditionComponent);
    return TermsandconditionComponent;
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
    production: false,
    // apiUrl: 'http://localhost:51209/api/'
    apiUrl: ' http://localhost:51209/api/'
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

module.exports = __webpack_require__(/*! C:\Users\infra\Desktop\Project\Project\cartabspa\cartabspa\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map