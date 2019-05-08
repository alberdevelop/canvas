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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _card_type_card_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-type/card-type.component */ "./src/app/card-type/card-type.component.ts");
/* harmony import */ var _choose_card_choose_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./choose-card/choose-card.component */ "./src/app/choose-card/choose-card.component.ts");
/* harmony import */ var _fill_card_fill_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fill-card/fill-card.component */ "./src/app/fill-card/fill-card.component.ts");






var routes = [
    { path: 'cards-type', component: _card_type_card_type_component__WEBPACK_IMPORTED_MODULE_3__["CardTypeComponent"] },
    { path: 'choose-card/:category', component: _choose_card_choose_card_component__WEBPACK_IMPORTED_MODULE_4__["ChooseCardComponent"] },
    { path: 'fill-card/:card', component: _fill_card_fill_card_component__WEBPACK_IMPORTED_MODULE_5__["FillCardComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
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

module.exports = "<!-- <input type=\"text\"  id=\"to\" (input)=\"update()\">\n<input type=\"text\"  id=\"from\" (input)=\"update()\">\n\n\n<canvas id=\"myCanvas\" width=\"850\" height=\"850\" style=\"border: 1px solid black\" dir=\"rtl\">\n\n</canvas>\n\n<a id=\"download\" download=\"myImage.jpg\">Download to myImage.jpg</a> -->\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _card_type_card_type_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-type/card-type.component */ "./src/app/card-type/card-type.component.ts");
/* harmony import */ var _choose_card_choose_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./choose-card/choose-card.component */ "./src/app/choose-card/choose-card.component.ts");
/* harmony import */ var _fill_card_fill_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fill-card/fill-card.component */ "./src/app/fill-card/fill-card.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _card_type_card_type_component__WEBPACK_IMPORTED_MODULE_6__["CardTypeComponent"],
                _choose_card_choose_card_component__WEBPACK_IMPORTED_MODULE_7__["ChooseCardComponent"],
                _fill_card_fill_card_component__WEBPACK_IMPORTED_MODULE_8__["FillCardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card-type/card-type.component.css":
/*!***************************************************!*\
  !*** ./src/app/card-type/card-type.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\nmargin:0 auto;\r\nfont-family: Cairo;\r\nfont-weight: 700;\r\ntext-align: center\r\n}\r\n\r\n#header {\r\nmax-width: 100%;\r\nheight: auto;\r\nwidth: auto\\9; /* ie8 */\r\n}\r\n\r\n#fifa-logo {\r\nmax-width: 70%;\r\nheight: auto;\r\nwidth: auto\\9; /* ie8 */\r\n}\r\n\r\n#cards-list ul{\r\nmargin:0;\r\ntext-align:center;\r\nmargin:40px 0;\r\n}\r\n\r\n#cards-list li{\r\nlist-style: none;\r\nmargin:0 20px;\r\ndisplay:inline-block;\r\n}\r\n\r\n#categories ul{\r\nmax-width: 820px;\r\nmargin: 1em auto;\r\npadding:0;\r\ntext-align: center;\r\ndisplay: flex;\r\nflex-direction: row;\r\n}\r\n\r\n#categories ul li{\r\nlist-style: none;\r\nalign-self: flex-end;\r\nwidth:100%;\r\n}\r\n\r\n#categories ul li a{\r\ntext-decoration: none;\r\n}\r\n\r\nsvg{\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC10eXBlL2NhcmQtdHlwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZixZQUFZO0FBQ1osYUFBYSxFQUFFLFFBQVE7QUFDdkI7O0FBRUE7QUFDQSxjQUFjO0FBQ2QsWUFBWTtBQUNaLGFBQWEsRUFBRSxRQUFRO0FBQ3ZCOztBQUdBO0FBQ0EsUUFBUTtBQUNSLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLG9CQUFvQjtBQUNwQjs7QUFHQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsU0FBUztBQUNULGtCQUFrQjtBQUNsQixhQUFhO0FBQ2IsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQixVQUFVO0FBQ1Y7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2NhcmQtdHlwZS9jYXJkLXR5cGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG5tYXJnaW46MCBhdXRvO1xyXG5mb250LWZhbWlseTogQ2Fpcm87XHJcbmZvbnQtd2VpZ2h0OiA3MDA7XHJcbnRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4jaGVhZGVyIHtcclxubWF4LXdpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IGF1dG87XHJcbndpZHRoOiBhdXRvXFw5OyAvKiBpZTggKi9cclxufVxyXG5cclxuI2ZpZmEtbG9nbyB7XHJcbm1heC13aWR0aDogNzAlO1xyXG5oZWlnaHQ6IGF1dG87XHJcbndpZHRoOiBhdXRvXFw5OyAvKiBpZTggKi9cclxufVxyXG5cclxuXHJcbiNjYXJkcy1saXN0IHVse1xyXG5tYXJnaW46MDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbm1hcmdpbjo0MHB4IDA7XHJcbn1cclxuXHJcbiNjYXJkcy1saXN0IGxpe1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG5tYXJnaW46MCAyMHB4O1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuXHJcbiNjYXRlZ29yaWVzIHVse1xyXG5tYXgtd2lkdGg6IDgyMHB4O1xyXG5tYXJnaW46IDFlbSBhdXRvO1xyXG5wYWRkaW5nOjA7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuZGlzcGxheTogZmxleDtcclxuZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuI2NhdGVnb3JpZXMgdWwgbGl7XHJcbmxpc3Qtc3R5bGU6IG5vbmU7XHJcbmFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG53aWR0aDoxMDAlO1xyXG59XHJcblxyXG4jY2F0ZWdvcmllcyB1bCBsaSBhe1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbnN2Z3tcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/card-type/card-type.component.html":
/*!****************************************************!*\
  !*** ./src/app/card-type/card-type.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <header>\n    <img src=\"assets/header.png\" alt=\"\" id=\"header\">\n    <img src=\"assets/fifa.png\" alt=\"\" id=\"fifa-logo\">\n  </header>\n\n  <h5 style=\"width:60%;background:#00BCBC;border-radius:30px; margin: 5px auto;color:white;padding:3px;font-family: 'Droid Arabic Kufi'\">\n    اختر نوع الاهداء\n  </h5>  \n\n</div>\n\n<div id=\"categories\">\n\n  <ul>\n    \n    <li>\n      <a routerLink=\"/choose-card/graduate\">\n        <img src=\"assets/icons/graduate.svg\" alt=\"\">\n      </a>\n    </li>\n    \n    <li>\n      <a routerLink=\"/choose-card/zawaj\">\n        <img src=\"assets/icons/zawaj.svg\" alt=\"\">\n      </a>\n    </li>\n    \n    <li>\n      <a routerLink=\"/choose-card/engagment\">\n        <img src=\"assets/icons/engagment.svg\" alt=\"\">\n      </a>\n    </li>\n    \n  </ul>\n\n  <ul>\n    \n    <li>\n      <a routerLink=\"/choose-card/general\">\n        <img src=\"assets/icons/general.svg\" alt=\"\">\n      </a>\n    </li>\n    \n    <li>\n      <a routerLink=\"/choose-card/ramadan\">\n        <img src=\"assets/icons/ramadan.svg\" alt=\"\">\n      </a>\n    </li>\n    \n    <li>\n      <a routerLink=\"/choose-card/eid\">\n        <img src=\"assets/icons/eid.svg\" alt=\"\">\n      </a>\n    </li>\n    \n  </ul>\n\n  <ul>\n    \n    <li>\n      <a routerLink=\"/choose-card/baby\">\n        <img src=\"assets/icons/baby.svg\" alt=\"\">\n      </a>\n    </li>\n    \n    <li>\n    </li>\n    \n    <li>\n    </li>\n    \n  </ul>\n\n</div>"

/***/ }),

/***/ "./src/app/card-type/card-type.component.ts":
/*!**************************************************!*\
  !*** ./src/app/card-type/card-type.component.ts ***!
  \**************************************************/
/*! exports provided: CardTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTypeComponent", function() { return CardTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardTypeComponent = /** @class */ (function () {
    function CardTypeComponent() {
    }
    CardTypeComponent.prototype.ngOnInit = function () {
    };
    CardTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-type',
            template: __webpack_require__(/*! ./card-type.component.html */ "./src/app/card-type/card-type.component.html"),
            styles: [__webpack_require__(/*! ./card-type.component.css */ "./src/app/card-type/card-type.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardTypeComponent);
    return CardTypeComponent;
}());



/***/ }),

/***/ "./src/app/choose-card/choose-card.component.css":
/*!*******************************************************!*\
  !*** ./src/app/choose-card/choose-card.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cards a{\r\ndisplay: none;\r\n}\r\n\r\nimg{\r\nmax-width: 100%;\r\nheight: auto;\r\nwidth: auto\\9; /* ie8 */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hvb3NlLWNhcmQvY2hvb3NlLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGVBQWU7QUFDZixZQUFZO0FBQ1osYUFBYSxFQUFFLFFBQVE7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jaG9vc2UtY2FyZC9jaG9vc2UtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhcmRzIGF7XHJcbmRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmltZ3tcclxubWF4LXdpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IGF1dG87XHJcbndpZHRoOiBhdXRvXFw5OyAvKiBpZTggKi9cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/choose-card/choose-card.component.html":
/*!********************************************************!*\
  !*** ./src/app/choose-card/choose-card.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 0 auto;text-align: center\">\n\n  <h5 style=\"width:60%;background:#00BCBC;border-radius:30px; margin: 5px auto;color:white;padding:3px;font-family: 'Droid Arabic Kufi'\">\n    اختر البطاقة\n  </h5>  \n\n  <div id=\"cards\">\n\n    <a routerLink=\"/fill-card/0\" class=\"engagment\">\n      <img src=\"assets/cards/0.jpg\" alt=\"\">\n    </a>\n  \n    <a routerLink=\"/fill-card/1\" class=\"zawaj\">\n      <img src=\"assets/cards/1.jpg\" alt=\"\">\n    </a>\n  \n    <a routerLink=\"/fill-card/2\" class=\"graduate\">\n      <img src=\"assets/cards/2.jpg\" alt=\"\">\n    </a>\n  \n    <a routerLink=\"/fill-card/3\" class=\"eid\">\n      <img src=\"assets/cards/3.jpg\" alt=\"\">\n    </a>\n  \n    <a routerLink=\"/fill-card/4\" class=\"eid\">\n      <img src=\"assets/cards/4.jpg\" alt=\"\">\n    </a>\n  \n    <a routerLink=\"/fill-card/5\" class=\"general\">\n      <img src=\"assets/cards/5.jpg\" alt=\"\">\n    </a>\n  \n    <a routerLink=\"/fill-card/6\" class=\"general\">\n      <img src=\"assets/cards/6.jpg\" alt=\"\">\n    </a>\n  \n    <a routerLink=\"/fill-card/7\" class=\"general\">\n      <img src=\"assets/cards/7.jpg\" alt=\"\">\n    </a>\n  \n    <a routerLink=\"/fill-card/8\" class=\"ramadan\">\n      <img src=\"assets/cards/8.jpg\" alt=\"\">\n    </a>\n  \n    <a routerLink=\"/fill-card/9\" class=\"ramadan\">\n      <img src=\"assets/cards/9.jpg\" alt=\"\">\n    </a>\n  \n    <a routerLink=\"/fill-card/10\" class=\"baby\">\n      <img src=\"assets/cards/10.jpg\" alt=\"\">\n    </a>\n  \n    <a routerLink=\"/fill-card/11\" class=\"baby\">\n      <img src=\"assets/cards/11.jpg\" alt=\"\">\n    </a>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/choose-card/choose-card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/choose-card/choose-card.component.ts ***!
  \******************************************************/
/*! exports provided: ChooseCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseCardComponent", function() { return ChooseCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ChooseCardComponent = /** @class */ (function () {
    function ChooseCardComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (params) { _this.category = params.category; _this.ngOnInit(); });
    }
    ChooseCardComponent.prototype.ngOnInit = function () {
    };
    ChooseCardComponent.prototype.ngAfterViewInit = function () {
        var cards = document.getElementsByClassName(this.category);
        // if(cards.length==1){
        //   this.router.navigate(['/fill-card/' + 1])
        // }
        var i;
        for (i = 0; i < cards.length; i++) {
            cards[i].setAttribute("style", "display:block");
        }
    };
    ChooseCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choose-card',
            template: __webpack_require__(/*! ./choose-card.component.html */ "./src/app/choose-card/choose-card.component.html"),
            styles: [__webpack_require__(/*! ./choose-card.component.css */ "./src/app/choose-card/choose-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ChooseCardComponent);
    return ChooseCardComponent;
}());



/***/ }),

/***/ "./src/app/fill-card/fill-card.component.css":
/*!***************************************************!*\
  !*** ./src/app/fill-card/fill-card.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\r\nfont-family: Droid Arabic Kufi;\r\nsrc: url('Droid.Arabic.Kufi_DownloadSoftware.iR_.ttf') format(\"opentype\");\r\n}\r\n\r\n#wrapper{\r\nmargin: 0 auto;\r\ntext-align: center;\r\n}\r\n\r\nform{\r\nmargin:0 !important;\r\n}\r\n\r\nform input{\r\nwidth: 100%;\r\nheight:30px;\r\nfont-size: 28px;\r\npadding:10px;\r\nmargin:5px 0;\r\nborder: 1px solid black;\r\n}\r\n\r\n#download{\r\nbackground-color: #4CAF50;\r\nborder: none;\r\ncolor: white;\r\npadding: 5px 30px;\r\ntext-align: center;\r\ntext-decoration: none;\r\ndisplay: inline-block;\r\nfont-size: 16px;\r\nmargin: 15px 2px;\r\ncursor: pointer;\r\nfont-size: 28px;\r\nfont-weight: bold;\r\n}\r\n\r\ncanvas{\r\nwidth: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsbC1jYXJkL2ZpbGwtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsOEJBQThCO0FBQzlCLHlFQUEwRjtBQUMxRjs7QUFFQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYLGVBQWU7QUFDZixZQUFZO0FBQ1osWUFBWTtBQUNaLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1osWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZixlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsV0FBVztBQUNYIiwiZmlsZSI6InNyYy9hcHAvZmlsbC1jYXJkL2ZpbGwtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbmZvbnQtZmFtaWx5OiBEcm9pZCBBcmFiaWMgS3VmaTtcclxuc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL0Ryb2lkLkFyYWJpYy5LdWZpX0Rvd25sb2FkU29mdHdhcmUuaVJfLnR0ZikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbn1cclxuXHJcbiN3cmFwcGVye1xyXG5tYXJnaW46IDAgYXV0bztcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5mb3Jte1xyXG5tYXJnaW46MCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5mb3JtIGlucHV0e1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OjMwcHg7XHJcbmZvbnQtc2l6ZTogMjhweDtcclxucGFkZGluZzoxMHB4O1xyXG5tYXJnaW46NXB4IDA7XHJcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jZG93bmxvYWR7XHJcbmJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbmJvcmRlcjogbm9uZTtcclxuY29sb3I6IHdoaXRlO1xyXG5wYWRkaW5nOiA1cHggMzBweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuZm9udC1zaXplOiAxNnB4O1xyXG5tYXJnaW46IDE1cHggMnB4O1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbmZvbnQtc2l6ZTogMjhweDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmNhbnZhc3tcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/fill-card/fill-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/fill-card/fill-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='wrapper'>\n\n  <form [formGroup]=\"form\" dir=\"rtl\" style=\"margin:30px;\" autocomplete=\"off\">\n\n    <div class=\"form-row\">\n    \n      <div class=\"col-1\"></div>\n\n      <div class=\"form-group col-10\">\n        <input type=\"text\" id=\"to\" formControlName=\"to\" class=\"form-control\" (input)=\"update()\" placeholder=\"إهداء إلى\">\n      </div>\n\n    </div>\n\n    <div class=\"form-row\">\n      \n      <div class=\"col-1\"></div>\n\n      <div class=\"form-group col-10\">\n        <input type=\"text\" id=\"from\" formControlName=\"from\" class=\"form-control\" (input)=\"update()\" placeholder=\"إهداء من\">\n      </div>\n\n    </div>\n\n  </form>\n\n  <canvas id=\"myCanvas\" width=\"850\" height=\"850\" style=\"border: 1px solid black\" dir=\"rtl\">\n\n  </canvas>\n\n  <div>\n    <a type=\"button\" class=\"btn btn-success btn-lg\" id=\"download\" download=\"myImage.jpg\">حفظ</a>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/fill-card/fill-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/fill-card/fill-card.component.ts ***!
  \**************************************************/
/*! exports provided: FillCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillCardComponent", function() { return FillCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var FillCardComponent = /** @class */ (function () {
    function FillCardComponent(route, fb) {
        var _this = this;
        this.route = route;
        this.fb = fb;
        this.card = {};
        this.route.params.subscribe(function (params) { _this.card.no = params.card; _this.ngOnInit(); });
        this.form = fb.group({
            from: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            to: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    FillCardComponent.prototype.ngAfterViewInit = function () {
        if (this.card.no == '0') {
            this.card.to_x = 555;
            this.card.to_y = 415;
            this.card.from_x = 555;
            this.card.from_y = 700;
        }
        if (this.card.no == '1') {
            this.card.to_x = 700;
            this.card.to_y = 415;
            this.card.from_x = 700;
            this.card.from_y = 700;
        }
        this.update();
    };
    FillCardComponent.prototype.ngOnInit = function () {
    };
    FillCardComponent.prototype.update = function () {
        var toValue = document.getElementById("to").value;
        var fromValue = document.getElementById("from").value;
        this.myCanvas(toValue, fromValue);
    };
    FillCardComponent.prototype.myCanvas = function (to, from) {
        var _this = this;
        var canvas = document.getElementById('myCanvas');
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            ctx.font = "bold 32px 'Droid Arabic Kufi' ";
            ctx.fillText(to, _this.card.to_x, _this.card.to_y);
            ctx.fillText(from, _this.card.from_x, _this.card.from_y);
            ctx.font = '32px cairo';
            ctx.direction = 'rtl';
            document.getElementById("download").setAttribute("href", canvas.toDataURL());
        };
        img.src = "assets/cards/" + this.card.no + ".jpg";
    };
    FillCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fill-card',
            template: __webpack_require__(/*! ./fill-card.component.html */ "./src/app/fill-card/fill-card.component.html"),
            styles: [__webpack_require__(/*! ./fill-card.component.css */ "./src/app/fill-card/fill-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], FillCardComponent);
    return FillCardComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mmkk2\OneDrive\سطح المكتب\canvas\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map