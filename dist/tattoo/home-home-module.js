(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "cPhq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "CvY8":
/*!*******************************************************!*\
  !*** ./src/app/home/subscribe/subscribe.component.ts ***!
  \*******************************************************/
/*! exports provided: SubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeComponent", function() { return SubscribeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SubscribeComponent {
    constructor() { }
    ngOnInit() {
    }
}
SubscribeComponent.ɵfac = function SubscribeComponent_Factory(t) { return new (t || SubscribeComponent)(); };
SubscribeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubscribeComponent, selectors: [["app-subscribe"]], decls: 18, vars: 0, consts: [[1, "subscribe"], [1, "left"], [1, "right"], [1, "text"], ["type", "text", "placeholder", "FullName"], ["type", "text", "placeholder", "Email"]], template: function SubscribeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Be The First");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "To Know About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Available Bookings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Subscribe for Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap\");\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  background-color: #F4F4F2;\n}\n.subscribe[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.left[_ngcontent-%COMP%] {\n  background-color: #bbbfca;\n  height: 500px;\n  font-family: \"Josefin Sans\";\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.right[_ngcontent-%COMP%] {\n  background-color: #e8e8e8;\n  height: 500px;\n  text-align: center;\n  font-family: \"Josefin Sans\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n  border: none;\n  margin-bottom: 10px;\n  padding: 5px 10px;\n}\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px auto;\n  background-color: transparent;\n  font-family: \"Playfair Display\", sans-serif;\n  font-size: 20px;\n  border-radius: 10px;\n  padding: 10px;\n}\n@media screen and (max-width: 800px) {\n  .subscribe[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    display: block;\n  }\n\n  .left[_ngcontent-%COMP%] {\n    display: none;\n    height: -moz-fit-content !important;\n    height: fit-content !important;\n    margin-top: 30px;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  input[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdWJzY3JpYmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEscUZBQUE7QUFDQSxpRkFBQTtBQUdSO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQ0RKO0FBTEE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFRSjtBQU5BO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJETFM7RUNNVCxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFTSjtBQVBBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkRmUztFQ2dCVCxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVVKO0FBUkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQVdKO0FBVEE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJDRGhDUTtFQ2lDUixlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBWUo7QUFWQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxjQUFBO0VBYU47O0VBWEU7SUFDSSxhQUFBO0lBQ0EsbUNBQUE7SUFBQSw4QkFBQTtJQUNBLGdCQUFBO0VBY047O0VBWkU7SUFBUSxVQUFBO0VBZ0JWOztFQWZFO0lBQU8sVUFBQTtFQW1CVDtBQUNGIiwiZmlsZSI6InN1YnNjcmliZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXkmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnMmZGlzcGxheT1zd2FwJyk7XG4kbWFpbi1mb250OiAnUGxheWZhaXIgRGlzcGxheScsIHNhbnMtc2VyaWY7XG4kdGl0bGUtZm9udDogJ0pvc2VmaW4gU2Fucyc7XG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEYyO1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5JmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGMjtcbn1cblxuLnN1YnNjcmliZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbn1cblxuLmxlZnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiZmNhO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBmb250LWZhbWlseTogXCJKb3NlZmluIFNhbnNcIjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJKb3NlZmluIFNhbnNcIjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5zdWJzY3JpYmUge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAubGVmdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIGlucHV0IHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubscribeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subscribe',
                templateUrl: './subscribe.component.html',
                styleUrls: ['./subscribe.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IdXy":
/*!***********************************************!*\
  !*** ./src/app/home/intro/intro.component.ts ***!
  \***********************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class IntroComponent {
    constructor() { }
    ngOnInit() {
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], decls: 9, vars: 0, consts: [[1, "bg"], [1, "inner-bg"], [1, "text"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Modern & Minimalistic Tattoos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi lectus, faucibus ut tortor eu, eleifend suscipit ligula. Nulla at cursus odio. Curabitur tempor porttitor nisi eu sollicitudin.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap\");\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  background-color: #F4F4F2;\n}\n.bg[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #BBBFCA 90%, #F4F4F2 10%);\n  height: 500px;\n  margin: 0;\n  padding-bottom: 50px;\n}\n.inner-bg[_ngcontent-%COMP%] {\n  background-image: url('intro.jpg');\n  background-repeat: no-repeat;\n  width: auto;\n  height: 500px;\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n.text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Josefin Sans\";\n  font-size: 60px;\n}\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", sans-serif;\n  width: 80%;\n}\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  color: #fff;\n  background-color: #336D88;\n  border-radius: 5px;\n  padding: 5px 10px;\n  font-family: \"Josefin Sans\";\n  font-size: 18px;\n}\n@media screen and (max-width: 800px) {\n  .inner-bg[_ngcontent-%COMP%] {\n    background-image: none;\n  }\n\n  .text[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxpbnRyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxxRkFBQTtBQUNBLGlGQUFBO0FBR1I7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FDREo7QUFMQTtFQUNJLDZEQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtBQVFKO0FBTkE7RUFDSSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFTSjtBQVBBO0VBQU8sa0JBQUE7QUFXUDtBQVZBO0VBQ0ksMkJEaEJTO0VDaUJULGVBQUE7QUFhSjtBQVhBO0VBQ0ksMkNEckJRO0VDc0JSLFVBQUE7QUFjSjtBQVpBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkQ3QlM7RUM4QlQsZUFBQTtBQWVKO0FBWkE7RUFDSTtJQUFXLHNCQUFBO0VBZ0JiOztFQWZFO0lBQU8sY0FBQTtFQW1CVDs7RUFsQkU7SUFBVSxlQUFBO0VBc0JaO0FBQ0YiLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5JmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xuJG1haW4tZm9udDogJ1BsYXlmYWlyIERpc3BsYXknLCBzYW5zLXNlcmlmO1xuJHRpdGxlLWZvbnQ6ICdKb3NlZmluIFNhbnMnO1xuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGMjtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zJmRpc3BsYXk9c3dhcFwiKTtcbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjI7XG59XG5cbi5iZyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNCQkJGQ0EgOTAlLCAjRjRGNEYyIDEwJSk7XG4gIGhlaWdodDogNTAwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi5pbm5lci1iZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbnRyby5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRleHQge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG59XG5cbi50ZXh0IGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCI7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuLnRleHQgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDgwJTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzNkQ4ODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmlubmVyLWJnIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICB9XG5cbiAgLnRleHQge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG5cbiAgLnRleHQgaDEge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro',
                templateUrl: './intro.component.html',
                styleUrls: ['./intro.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Nl97":
/*!***************************************************!*\
  !*** ./src/app/home/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 11, vars: 0, consts: [[1, "contact"], [1, "copyright"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "06 123 456 789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Example@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "For Booking Inquiries Click Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A9 2021 by Oumaima Tiguint. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap\");\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  background-color: #F4F4F2;\n}\n.contact[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Playfair Display\", sans-serif;\n  margin-top: 100px;\n}\nh2[_ngcontent-%COMP%] {\n  font-family: \"Josefin Sans\";\n}\n.copyright[_ngcontent-%COMP%] {\n  background-color: #E8E8E8;\n  margin-top: 50px;\n  padding: 10px 50px;\n}\nbutton[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-family: \"Josefin Sans\";\n  background-color: transparent;\n  border-radius: 5px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHFGQUFBO0FBQ0EsaUZBQUE7QUFHUjtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNESjtBQUxBO0VBQ0ksa0JBQUE7RUFDQSwyQ0REUTtFQ0VSLGlCQUFBO0FBUUo7QUFOQTtFQUFJLDJCREhTO0FDYWI7QUFUQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVlKO0FBVkE7RUFDSSxhQUFBO0VBQ0EsMkJEWFM7RUNZVCw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWFKIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5JmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xuJG1haW4tZm9udDogJ1BsYXlmYWlyIERpc3BsYXknLCBzYW5zLXNlcmlmO1xuJHRpdGxlLWZvbnQ6ICdKb3NlZmluIFNhbnMnO1xuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGMjtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zJmRpc3BsYXk9c3dhcFwiKTtcbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjI7XG59XG5cbi5jb250YWN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIkpvc2VmaW4gU2Fuc1wiO1xufVxuXG4uY29weXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4RThFODtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgcGFkZGluZzogMTBweCA1MHB4O1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJKb3NlZmluIFNhbnNcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cPhq":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../intro/intro.component */ "IdXy");
/* harmony import */ var _art_art_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../art/art.component */ "iSTt");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about/about.component */ "yMNI");
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subscribe/subscribe.component */ "CvY8");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contact/contact.component */ "Nl97");







class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-intro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-art");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-contact");
    } }, directives: [_intro_intro_component__WEBPACK_IMPORTED_MODULE_1__["IntroComponent"], _art_art_component__WEBPACK_IMPORTED_MODULE_2__["ArtComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_4__["SubscribeComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro/intro.component */ "IdXy");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "cPhq");
/* harmony import */ var _art_art_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./art/art.component */ "iSTt");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "yMNI");
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subscribe/subscribe.component */ "CvY8");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "Nl97");










class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__["HomeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _art_art_component__WEBPACK_IMPORTED_MODULE_5__["ArtComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_7__["SubscribeComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__["HomeRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _art_art_component__WEBPACK_IMPORTED_MODULE_5__["ArtComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_7__["SubscribeComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_0__["HomeRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "iSTt":
/*!*******************************************!*\
  !*** ./src/app/home/art/art.component.ts ***!
  \*******************************************/
/*! exports provided: ArtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtComponent", function() { return ArtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ArtComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", i_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ArtComponent {
    constructor() {
        this.images = [
            '../../../assets/1.jpg', '../../../assets/2.jpg', '../../../assets/3.jpg',
            '../../../assets/4.jpg', '../../../assets/5.jpg', '../../../assets/6.jpg',
            '../../../assets/7.jpg', '../../../assets/8.jpg', '../../../assets/9.jpg'
        ];
    }
    ngOnInit() {
    }
}
ArtComponent.ɵfac = function ArtComponent_Factory(t) { return new (t || ArtComponent)(); };
ArtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtComponent, selectors: [["app-art"]], decls: 5, vars: 1, consts: [[1, "art"], [1, "images"], [3, "src", 4, "ngFor", "ngForOf"], [3, "src"]], template: function ArtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Art");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ArtComponent_img_4_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap\");\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  background-color: #F4F4F2;\n}\nh2[_ngcontent-%COMP%] {\n  font-family: \"Josefin Sans\";\n  font-weight: 600;\n  text-align: center;\n  margin-top: 100px;\n}\n.images[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 80%;\n  margin: auto;\n}\nimg[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 30%;\n}\n@media screen and (max-width: 800px) {\n  img[_ngcontent-%COMP%] {\n    margin: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEscUZBQUE7QUFDQSxpRkFBQTtBQUdSO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQ0RKO0FBTEE7RUFDSSwyQkRDUztFQ0FULGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVFKO0FBTkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFTSjtBQU5BO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUFTSjtBQVBBO0VBQ0k7SUFBSyxXQUFBO0VBV1A7QUFDRiIsImZpbGUiOiJhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5JmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xuJG1haW4tZm9udDogJ1BsYXlmYWlyIERpc3BsYXknLCBzYW5zLXNlcmlmO1xuJHRpdGxlLWZvbnQ6ICdKb3NlZmluIFNhbnMnO1xuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGMjtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zJmRpc3BsYXk9c3dhcFwiKTtcbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjI7XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5pbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW1nIHtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogMzAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICBpbWcge1xuICAgIG1hcmdpbjogM3B4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-art',
                templateUrl: './art.component.html',
                styleUrls: ['./art.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "yMNI":
/*!***********************************************!*\
  !*** ./src/app/home/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 11, vars: 0, consts: [[1, "about"], [1, "content"], ["src", "../../../assets/about.jpg"], [1, "text"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum malesuada ipsum, sit amet imperdiet sem gravida quis. Nunc nec diam arcu. Aliquam vehicula odio tellus, eget aliquet lectus ultrices at. Vivamus condimentum, ligula sed mattis venenatis, diam diam efficitur mi, sit amet imperdiet sem est non nunc. Nulla suscipit sed tellus rhoncus porttitor. Sed quis felis ligula. Quisque dapibus, sapien ac malesuada luctus, orci velit dapibus dui, et interdum ipsum dui vitae ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Curabitur quis ipsum justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin condimentum, ex in porttitor varius, dolor leo fringilla ligula, commodo molestie purus odio vel elit. Morbi vel felis luctus, placerat ipsum nec, iaculis sapien.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap\");\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  background-color: #F4F4F2;\n}\n.content[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\nimg[_ngcontent-%COMP%] {\n  width: 80%;\n}\nh2[_ngcontent-%COMP%] {\n  font-family: \"Josefin Sans\";\n  text-align: center;\n}\np[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", sans-serif;\n  width: 70%;\n  margin: auto;\n  text-align: justify;\n}\n@media screen and (max-width: 800px) {\n  img[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  p[_ngcontent-%COMP%] {\n    text-align: left;\n    width: 80%;\n    margin: auto;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxxRkFBQTtBQUNBLGlGQUFBO0FBR1I7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FDREo7QUFMQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBUUo7QUFOQTtFQUFLLFVBQUE7QUFVTDtBQVRBO0VBQ0ksMkJETFM7RUNNVCxrQkFBQTtBQVlKO0FBVkE7RUFDSSwyQ0RWUTtFQ1dSLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFhSjtBQVhBO0VBQ0k7SUFBTSxhQUFBO0VBZVI7O0VBZEU7SUFDSSxnQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBaUJOOztFQWZFO0lBQ0ksY0FBQTtFQWtCTjtBQUNGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheSZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcbiRtYWluLWZvbnQ6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2Fucy1zZXJpZjtcbiR0aXRsZS1mb250OiAnSm9zZWZpbiBTYW5zJztcbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjI7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXkmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FucyZkaXNwbGF5PXN3YXBcIik7XG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEYyO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICBpbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map