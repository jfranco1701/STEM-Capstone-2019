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
/* harmony import */ var _components_layout_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout/notfound/notfound.component */ "./src/app/components/layout/notfound/notfound.component.ts");
/* harmony import */ var _components_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/layout/layout.component */ "./src/app/components/layout/layout/layout.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/guards/auth-guard.service */ "./src/app/services/guards/auth-guard.service.ts");
/* harmony import */ var _components_layout_notauthorized_notauthorized_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/layout/notauthorized/notauthorized.component */ "./src/app/components/layout/notauthorized/notauthorized.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");












var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '',
        component: _components_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
        children: [
            { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
            { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
            { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
            { path: 'notauthorized', component: _components_layout_notauthorized_notauthorized_component__WEBPACK_IMPORTED_MODULE_9__["NotauthorizedComponent"] },
            { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"], canActivate: [_services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
            { path: 'users', component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_11__["UsersComponent"] },
        ] },
    { path: '**', component: _components_layout_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__["NotfoundComponent"] },
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'stem-portal';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_layout_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/layout/notfound/notfound.component */ "./src/app/components/layout/notfound/notfound.component.ts");
/* harmony import */ var _components_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/layout/layout/layout.component */ "./src/app/components/layout/layout/layout.component.ts");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_layout_notauthorized_notauthorized_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/layout/notauthorized/notauthorized.component */ "./src/app/components/layout/notauthorized/notauthorized.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_event_event_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/event/event.component */ "./src/app/components/event/event.component.ts");
/* harmony import */ var _components_register_registerterms_registerterms_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/register/registerterms/registerterms.component */ "./src/app/components/register/registerterms/registerterms.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var ngrx_json_api__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngrx-json-api */ "./node_modules/ngrx-json-api/FESM/ngrx-json-api.es5.js");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");































 // add this
var resourceDefinitions = [
    { type: 'User', collectionPath: 'users' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _components_layout_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_16__["NotfoundComponent"],
                _components_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_17__["LayoutComponent"],
                _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _components_layout_notauthorized_notauthorized_component__WEBPACK_IMPORTED_MODULE_20__["NotauthorizedComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_19__["AdminComponent"],
                _components_event_event_component__WEBPACK_IMPORTED_MODULE_22__["EventComponent"],
                _components_register_registerterms_registerterms_component__WEBPACK_IMPORTED_MODULE_23__["RegistertermsComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_30__["UsersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_26__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_28__["reducers"], {}),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_27__["EffectsModule"].forRoot([]),
                ngrx_json_api__WEBPACK_IMPORTED_MODULE_29__["NgrxJsonApiModule"].configure({
                    apiUrl: 'http://localhost:8000/api/v1',
                    resourceDefinitions: resourceDefinitions
                }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
            entryComponents: [
                _components_register_registerterms_registerterms_component__WEBPACK_IMPORTED_MODULE_23__["RegistertermsComponent"],
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/components/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/event/event.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/event/event.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <mat-card class=\"eventCard\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n      <mat-card-title>{{ name }} </mat-card-title>\r\n      <mat-card-subtitle>{{ date }}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\r\n    <mat-card-content>\r\n      <p>\r\n        {{ event_type }}\r\n      </p>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button>LIKE</button>\r\n      <button mat-button>SHARE</button>\r\n    </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/event/event.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/event/event.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".eventCard {\n  margin: 10px;\n  width: 200px;\n  height: 350px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9DOlxcVXNlcnNcXE1vdW5pa2EgQWRkYWdhZGFcXERlc2t0b3BcXENBUFNUT05FXFxTVEVNLUNhcHN0b25lLTIwMTlcXHNyY1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGV2ZW50XFxldmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9ldmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ldmVudENhcmQge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/event/event.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/event/event.component.ts ***!
  \*****************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventComponent = /** @class */ (function () {
    function EventComponent() {
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EventComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EventComponent.prototype, "date", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EventComponent.prototype, "event_type", void 0);
    EventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/components/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.scss */ "./src/app/components/event/event.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\r\n     fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n  <div fxFlex class=\"event\" *ngFor=\"let event of events\">\r\n    <app-event [name]=\"event.name\" [date]=\"event.date\" [event_type]=\"event.event_type\"></app-event>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event-service.service */ "./src/app/services/event-service.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(eventService) {
        this.eventService = eventService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    HomeComponent.prototype.getEvents = function () {
        this.events = this.eventService.getEvents();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_event_service_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" class=\"header\">\r\n  <div class=\"container, nav\"\r\n       fxLayout=\"row\"\r\n       fxLayoutAlign=\"center center\"\r\n       fxLayoutGap=\"0px\"\r\n       fxFill>\r\n    <div class=\"itemleft\" fxFlex>\r\n      <a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\"><img src=\"assets/stemlogo.jpg\" /></a>\r\n    </div>\r\n    <div fxFlex=\"row\">\r\n      <div class=\"container\" fxLayout=\"row wrap\">\r\n        <a class=\"navbutton\" mat-stroked-button [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\">Home</a>\r\n        <a class=\"navbutton\" mat-stroked-button>About Us</a>\r\n        <a class=\"navbutton\" mat-stroked-button>Partners</a>\r\n        <a class=\"navbutton\" mat-stroked-button>Calendar</a>\r\n        <a class=\"navbutton\" mat-stroked-button>Get Involved</a>\r\n        <a class=\"navbutton\" mat-stroked-button>Etc</a>\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"row\">\r\n      <!-- Hide button if user is logged in  -->\r\n      <div fxFlex>\r\n        <button class=\"navbutton\" [routerLink]=\"['/register']\" routerLinkActive=\"router-link-active\" mat-stroked-button>Register</button>\r\n      </div>\r\n      <!-- Hide button if user is logged in  -->\r\n      <div fxFlex>\r\n        <button class=\"navbutton\" [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" mat-stroked-button>\r\n          Login\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbutton {\n  border: none;\n  border-radius: 0; }\n\n.header {\n  border-bottom: 2.5px solid gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL0M6XFxVc2Vyc1xcTW91bmlrYSBBZGRhZ2FkYVxcRGVza3RvcFxcQ0FQU1RPTkVcXFNURU0tQ2Fwc3RvbmUtMjAxOVxcc3JjXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbGF5b3V0XFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSwrQkFDRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZidXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAyLjVweCBzb2xpZCBncmF5XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/layout/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/layout/layout.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/layout/layout.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <app-header></app-header>\r\n  <router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/layout/layout/layout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/layout/layout.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/layout/layout/layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/layout/layout.component.ts ***!
  \**************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/components/layout/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/components/layout/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/notauthorized/notauthorized.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/layout/notauthorized/notauthorized.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n   NOT AUTHORIZED PAGE\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/layout/notauthorized/notauthorized.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/layout/notauthorized/notauthorized.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L25vdGF1dGhvcml6ZWQvbm90YXV0aG9yaXplZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/layout/notauthorized/notauthorized.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/layout/notauthorized/notauthorized.component.ts ***!
  \****************************************************************************/
/*! exports provided: NotauthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotauthorizedComponent", function() { return NotauthorizedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotauthorizedComponent = /** @class */ (function () {
    function NotauthorizedComponent() {
    }
    NotauthorizedComponent.prototype.ngOnInit = function () {
    };
    NotauthorizedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notauthorized',
            template: __webpack_require__(/*! ./notauthorized.component.html */ "./src/app/components/layout/notauthorized/notauthorized.component.html"),
            styles: [__webpack_require__(/*! ./notauthorized.component.scss */ "./src/app/components/layout/notauthorized/notauthorized.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotauthorizedComponent);
    return NotauthorizedComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/notfound/notfound.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/layout/notfound/notfound.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  404 Not Found!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/layout/notfound/notfound.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/layout/notfound/notfound.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/layout/notfound/notfound.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/layout/notfound/notfound.component.ts ***!
  \******************************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/components/layout/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.scss */ "./src/app/components/layout/notfound/notfound.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout fxLayoutAlign=\"center center\">\r\n  <div fxFlex=\"500px\">\r\n    <div>\r\n      <h3>Please enter your email and password to continue</h3><br>\r\n    </div>\r\n    <form novalidate (ngSubmit)=\"onSubmit()\" [formGroup]=\"loginForm\">\r\n      \r\n      <div\r\n          formGroupName=\"userGroup\"\r\n          novalidate\r\n          fxLayout=\"column\"\r\n          fxLayoutAlign=\"center stretch\"\r\n          fxLayoutGap=\"10px\"\r\n        >\r\n        <mat-form-field>\r\n        <input matInput placeholder=\"Email Address\" formControlName=\"email\" />\r\n        <mat-error *ngIf=\"loginForm.get('userGroup').get('email').invalid\">\r\n          {{ getErrorMessage('userGroup', 'email') }}\r\n        </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n        <div\r\n        formGroupName=\"passwordGroup\"\r\n        novalidate\r\n        fxLayout=\"column\"\r\n        fxLayoutAlign=\"center stretch\"\r\n        fxLayoutGap=\"10px\"\r\n      >\r\n        <mat-form-field>\r\n          <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" />\r\n          <mat-error *ngIf=\"loginForm.get('passwordGroup').get('password').invalid\">\r\n            {{ getErrorMessage('passwordGroup', 'password') }}\r\n          </mat-error>\r\n        </mat-form-field>\r\n        </div>\r\n        <div class=\"login\">\r\n          <button type=\"login\" mat-button >Login</button>\r\n      </div>\r\n      </form>\r\n      </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 25px; }\n\n.login {\n  text-align: center;\n  margin-top: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXE1vdW5pa2EgQWRkYWdhZGFcXERlc2t0b3BcXENBUFNUT05FXFxTVEVNLUNhcHN0b25lLTIwMTlcXHNyY1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOjI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOjI1cHg7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, _userService) {
        this.fb = fb;
        this._userService = _userService;
        this.errors = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            userGroup: this.fb.group({
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)]]
            }),
            passwordGroup: this.fb.group({
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]]
            })
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        this.login(this.loginForm.get('userGroup').get('email').value, this.loginForm.get('passwordGroup').get('password').value);
    };
    LoginComponent.prototype.login = function (emailAddress, password) {
        console.log('login: ' + emailAddress + ', ' + password);
        this._userService.login({ 'username': emailAddress, 'password': password });
        // Call login service here
    };
    LoginComponent.prototype.getErrorMessage = function (groupName, controlName) {
        return this.loginForm.get(groupName).get(controlName).hasError('required') ? 'You must enter a value' :
            this.loginForm.get(groupName).get(controlName).hasError('email') ? 'Not a valid email' :
                this.loginForm.get(groupName).get(controlName).hasError('notEqual') ? 'Passwords do not match' :
                    this.loginForm.get(groupName).get(controlName).hasError('minlength') ? 'Too short' :
                        this.loginForm.get(groupName).get(controlName).hasError('maxlength') ? 'Too long' :
                            '';
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n  <div fxFlex>\r\n    <div class=\"containerfor\">\r\n      <form [formGroup]=\"registerForm\">\r\n        <div class=\"formheader\">\r\n          <strong>Omaha STEM Ecosystem Parent Registration</strong>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\" formGroupName=\"userGroup\">\r\n          <mat-form-field fxFlex=\"48\" fxFlex.lt-sm=\"90\">\r\n            <input matInput placeholder=\"First Name\" formControlName=\"firstName\" />\r\n            <mat-error *ngIf=\"registerForm.get('userGroup').get('firstName').invalid\">\r\n              {{ getErrorMessage('userGroup', 'firstName') }}\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"48\" fxFlex.lt-sm=\"90\">\r\n            <input matInput placeholder=\"Last Name\" formControlName=\"lastName\" />\r\n            <mat-error *ngIf=\"registerForm.get('userGroup').get('lastName').invalid\">\r\n              {{ getErrorMessage('userGroup', 'lastName') }}\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"48\" fxFlex.lt-sm=\"90\">\r\n            <input matInput placeholder=\"Date of Birth\" formControlName=\"dob\" />\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"48\" fxFlex.lt-sm=\"90\">\r\n            <input matInput placeholder=\"Phone Number\" formControlName=\"phone\" />\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"100\" fxFlex.lt-sm=\"90\">\r\n            <input matInput placeholder=\"Email Address\" formControlName=\"email\" />\r\n            <mat-error *ngIf=\"registerForm.get('userGroup').get('email').invalid\">\r\n              {{ getErrorMessage('userGroup', 'email') }}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\" formGroupName=\"addressGroup\">\r\n          <mat-form-field fxFlex=\"100\" fxFlex.lt-sm=\"90\">\r\n            <input matInput placeholder=\"Address\" />\r\n          </mat-form-field>\r\n          <mat-form-field fxFlex=\"58\" fxFlex.lt-sm=\"90\">\r\n            <input matInput placeholder=\"City\" />\r\n          </mat-form-field>\r\n          <mat-form-field fxFlex=\"18\" fxFlex.lt-sm=\"90\">\r\n            <input matInput placeholder=\"State\" />\r\n          </mat-form-field>\r\n          <mat-form-field fxFlex=\"18\" fxFlex.lt-sm=\"90\">\r\n            <input matInput placeholder=\"Zip Code\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div\r\n          fxLayout=\"row wrap\"\r\n          fxLayoutAlign=\"space-between\"\r\n          formGroupName=\"loginGroup\"\r\n          style=\"margin-top:25px;\"\r\n        >\r\n          <mat-form-field fxFlex=\"60\" fxFlex.lt-sm=\"90\" >\r\n            <input matInput placeholder=\"Username\" formControlName=\"username\" />\r\n            <mat-error *ngIf=\"registerForm.get('loginGroup').get('username').invalid\">\r\n              {{ getErrorMessage('loginGroup', 'username') }}\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"48\" fxFlex.lt-sm=\"90\">\r\n            <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" />\r\n            <mat-error *ngIf=\"registerForm.get('loginGroup').get('password').invalid\">\r\n              {{ getErrorMessage('loginGroup', 'password') }}\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field fxFlex=\"48\"fxFlex.lt-sm=\"90\">\r\n            <input\r\n              matInput\r\n              type=\"password\"\r\n              placeholder=\"Confirm Password\"\r\n              formControlName=\"confirmPassword\"\r\n            />\r\n            <mat-error *ngIf=\"registerForm.get('loginGroup').get('confirmPassword').invalid\">\r\n              {{ getErrorMessage('loginGroup', 'confirmPassword') }}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div style=\"text-align: center; font-size: smaller; margin-top:20px;\">\r\n          By clicking the <b>complete registration</b> button, you are accepting our\r\n          <span class=\"terms\" (click)=\"openTermsDialog()\">terms of use policy</span>.\r\n        </div>\r\n        <div style=\"text-align: center; margin-top:20px; margin-bottom:20px;\">\r\n          <button mat-raised-button>Complete Registration</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <div fxFlex=\"30\">\r\n    <div class=\"containerstem\">\r\n      <img src=\"../../assets/images/OSE-Logo-for-Website--300x216.jpg\" />\r\n      <p><strong>Find Us</strong></p>\r\n      <p>\r\n        <strong>Address</strong>\r\n        <br />\r\n        3701 South 10th Street\r\n        <br />\r\n        Omaha, NE 68107\r\n      </p>\r\n      <a href=\"mailto:info@omahastem.com\">info@omahastem.com</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 25px; }\n\n.containerfor {\n  display: table;\n  margin: 0 auto;\n  width: 100%;\n  padding-left: 25px;\n  padding-right: 25px;\n  padding-top: 25px;\n  max-width: 650px;\n  min-width: 250px; }\n\n.containerstem {\n  display: table;\n  margin: 0 auto;\n  text-align: center; }\n\n.submit {\n  text-align: right;\n  margin-top: 20px; }\n\n.item {\n  margin-right: 50px; }\n\n.formheader {\n  text-align: center; }\n\n.mat-divider {\n  margin-top: 10px;\n  margin-bottom: 20px; }\n\n.terms {\n  text-decoration: underline;\n  color: blue; }\n\n.terms:hover {\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9DOlxcVXNlcnNcXE1vdW5pa2EgQWRkYWdhZGFcXERlc2t0b3BcXENBUFNUT05FXFxTVEVNLUNhcHN0b25lLTIwMTlcXHNyY1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdCQUFlLEVBQUE7O0FBR2pCO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFFZCxXQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWU7RUFDZixtQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVSxFQUFBOztBQUZaO0lBSUksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOjI1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXJmb3Ige1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6MjVweDtcclxuICBwYWRkaW5nLXJpZ2h0OjI1cHg7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgbWF4LXdpZHRoOiA2NTBweDtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyc3RlbSB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zdWJtaXQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6MjBweDtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG5cclxuLmZvcm1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1kaXZpZGVyIHtcclxuICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG59XHJcblxyXG4udGVybXMge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOmJsdWU7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _registerterms_registerterms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registerterms/registerterms.component */ "./src/app/components/register/registerterms/registerterms.component.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, dialog) {
        this.fb = fb;
        this.dialog = dialog;
        this.errors = [];
    }
    // Define the register form
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            userGroup: this.fb.group({
                firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
                lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)]],
                dob: [''],
                phone: [''],
            }),
            addressGroup: this.fb.group({
                address: [''],
                city: [''],
                state: [''],
                zip: [''],
            }),
            loginGroup: this.fb.group({
                username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
                confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]]
            }, {
                validator: this.checkPasswords('password', 'confirmPassword')
            }),
            acceptTerms: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]]
        });
    };
    // Validate the password and confirm password fields
    RegisterComponent.prototype.checkPasswords = function (passwordField, confirmPasswordField) {
        return function (group) {
            var password = group.controls[passwordField];
            var confirmPassword = group.controls[confirmPasswordField];
            if (password.value !== confirmPassword.value) {
                return confirmPassword.setErrors({ notEqual: true });
            }
            else {
                return confirmPassword.setErrors(null);
            }
        };
    };
    RegisterComponent.prototype.onSubmit = function () {
        this.register(this.registerForm.get('loginGroup').get('username').value, this.registerForm.get('userGroup').get('email').value, this.registerForm.get('loginGroup').get('password').value, this.registerForm.get('userGroup').get('firstName').value, this.registerForm.get('userGroup').get('lastName').value);
    };
    RegisterComponent.prototype.register = function (username, emailAddress, password, firstName, lastName) {
        console.log('Register: ' + emailAddress + ', ' + password + ', ' + firstName + ' ' + lastName);
        // Call registration service here
    };
    // Get validation error message
    RegisterComponent.prototype.getErrorMessage = function (groupName, controlName) {
        return this.registerForm.get(groupName).get(controlName).hasError('required') ? 'You must enter a value' :
            this.registerForm.get(groupName).get(controlName).hasError('email') ? 'Not a valid email' :
                this.registerForm.get(groupName).get(controlName).hasError('notEqual') ? 'Passwords do not match' :
                    this.registerForm.get(groupName).get(controlName).hasError('minlength') ? 'Too short' :
                        this.registerForm.get(groupName).get(controlName).hasError('maxlength') ? 'Too long' :
                            '';
    };
    RegisterComponent.prototype.openTermsDialog = function () {
        // Open the dialog that contants the terms of use policy
        var dialogRef = this.dialog.open(_registerterms_registerterms_component__WEBPACK_IMPORTED_MODULE_4__["RegistertermsComponent"]);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/register/registerterms/registerterms.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/register/registerterms/registerterms.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Omaha STEM Ecosystem Portal</h2>\r\n\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <h3>Terms of use policy</h3>\r\n  <p>This is where all the legal stuff goes.</p>\r\n\r\n  <p>\r\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida augue a sapien dictum\r\n    pharetra. Sed nec purus eu ante convallis eleifend in in massa. Curabitur pretium ligula in diam\r\n    fermentum euismod. Mauris vitae dolor leo. Praesent feugiat placerat fermentum. Nulla facilisi.\r\n    Quisque vestibulum, tortor eu vestibulum suscipit, odio est feugiat arcu, id venenatis orci\r\n    velit et erat. Phasellus et ligula quis eros dignissim auctor id quis tellus. Praesent maximus\r\n    imperdiet diam in tincidunt. Nunc id neque quam.\r\n  </p>\r\n\r\n  <p>\r\n    Aliquam ac luctus erat. Mauris vel maximus turpis. Mauris convallis risus quis lacus egestas,\r\n    vel imperdiet odio pharetra. Nam rhoncus cursus varius. Sed blandit, erat ac pretium eleifend,\r\n    ex erat pellentesque dolor, ac congue lacus eros sed risus. Pellentesque at odio justo.\r\n    Suspendisse ultricies lacus nec consectetur tincidunt. Vestibulum feugiat, ligula vitae\r\n    hendrerit placerat, ligula turpis vulputate massa, ut suscipit odio tortor id justo. Vestibulum\r\n    pulvinar nunc velit, sed iaculis justo finibus sit amet. Suspendisse fringilla lobortis\r\n    bibendum. Curabitur auctor sapien ac neque tincidunt pulvinar. Nunc consectetur nulla nec urna\r\n    aliquam convallis. Aliquam libero velit, pulvinar sed facilisis in, consectetur et eros. Integer\r\n    ornare, risus et consequat porttitor, diam ante iaculis lorem, eget maximus augue lacus sed\r\n    magna.\r\n  </p>\r\n\r\n  <p>\r\n    Integer et felis mattis, pretium dolor congue, rhoncus ante. Phasellus erat sem, fermentum eu\r\n    fringilla et, efficitur molestie metus. Donec augue dui, tincidunt nec odio vel, congue lobortis\r\n    libero. Duis lacinia, nibh non egestas sodales, lectus erat consequat purus, a dignissim dui\r\n    lorem hendrerit leo. Morbi pulvinar libero ipsum. Fusce non aliquam sapien. Nulla luctus nunc ac\r\n    sagittis dapibus. Phasellus et scelerisque nisl. Donec at lorem condimentum, ullamcorper nunc\r\n    sit amet, laoreet elit. Sed at nisi at elit iaculis semper id ac ex.\r\n  </p>\r\n\r\n  <p>\r\n    Nam vitae purus ornare nulla viverra pellentesque eget eget quam. Maecenas ut nibh in urna\r\n    semper sollicitudin. Duis nec tincidunt felis. Pellentesque et pulvinar lectus. Donec vel\r\n    volutpat magna, pulvinar viverra dolor. Aenean euismod consequat maximus. Maecenas dolor justo,\r\n    fringilla vel ex sit amet, pretium eleifend nibh. Phasellus vel varius lorem. Integer hendrerit\r\n    vulputate magna, sed fringilla tortor ultricies nec. Vivamus rhoncus augue eu mattis auctor.\r\n    Etiam mollis gravida accumsan.\r\n  </p>\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n  <button mat-button mat-dialog-close>Close</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/components/register/registerterms/registerterms.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/register/registerterms/registerterms.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXJ0ZXJtcy9yZWdpc3RlcnRlcm1zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/register/registerterms/registerterms.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/register/registerterms/registerterms.component.ts ***!
  \******************************************************************************/
/*! exports provided: RegistertermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistertermsComponent", function() { return RegistertermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegistertermsComponent = /** @class */ (function () {
    function RegistertermsComponent() {
    }
    RegistertermsComponent.prototype.ngOnInit = function () {
    };
    RegistertermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registerterms',
            template: __webpack_require__(/*! ./registerterms.component.html */ "./src/app/components/register/registerterms/registerterms.component.html"),
            styles: [__webpack_require__(/*! ./registerterms.component.scss */ "./src/app/components/register/registerterms/registerterms.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegistertermsComponent);
    return RegistertermsComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:20px;margin-bottom:20px;\"><button (click)=\"getUsers()\">Get Users</button></div>\r\n\r\n<div *ngFor=\"let result of results.data\">\r\n  <!-- {{queryResults | async | json}} -->\r\n\r\n\r\n  {{ result.attributes.last_name }}, {{ result.attributes.first_name }}\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/users/users.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngrx_json_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngrx-json-api */ "./node_modules/ngrx-json-api/FESM/ngrx-json-api.es5.js");



var UsersComponent = /** @class */ (function () {
    function UsersComponent(ngrxJsonApiService) {
        this.ngrxJsonApiService = ngrxJsonApiService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.results = [];
        this.resource = [];
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        // a zone represents an independent json-api instance
        var zone = this.ngrxJsonApiService.getZone(ngrx_json_api__WEBPACK_IMPORTED_MODULE_2__["NGRX_JSON_API_DEFAULT_ZONE"]);
        var query = {
            type: 'users',
            queryId: 'myQuery',
        };
        zone.putQuery({
            query: query,
            fromServer: true // you may also query locally from contents in the store, e.g. new resource
        });
        // select observable to query result holding the loading state and (future) results
        var denormalise = true;
        this.queryResults = this.ngrxJsonApiService.selectManyResults(query.queryId, denormalise);
        this.queryResults.subscribe(function (it) { return _this.results = it; });
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/components/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngrx_json_api__WEBPACK_IMPORTED_MODULE_2__["NgrxJsonApiService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/models/mock-events.ts":
/*!***************************************!*\
  !*** ./src/app/models/mock-events.ts ***!
  \***************************************/
/*! exports provided: EVENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS", function() { return EVENTS; });
var EVENTS = [
    { name: 'Office Party', date: '2019-07-11', e_type: 'Community', organizer: 2, attendees: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
    { name: 'Fundraiser', date: '2019-05-30', e_type: 'Community', organizer: 9, attendees: [3, 6, 7, 8, 13, 16] },
    { name: 'Fun Run', date: '2019-07-25', e_type: 'Community', organizer: 2, attendees: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
    { name: 'Paper Airplane Design', date: '2019-08-30', e_type: 'Camp', organizer: 5, attendees: [2, 3, 4, 6, 7, 8, 10, 13, 16] },
    { name: 'Pam\'s Painting', date: '2019-12-11', e_type: 'Camp', organizer: 3, attendees: [2, 6, 7, 13] },
    { name: 'Pretzel Day', date: '2019-09-10', e_type: 'Camp', organizer: 10, attendees: [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16] },
];


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

var reducers = {};
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/services/event-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/event-service.service.ts ***!
  \***************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_mock_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/mock-events */ "./src/app/models/mock-events.ts");



var EventService = /** @class */ (function () {
    function EventService() {
    }
    EventService.prototype.getEvents = function () {
        return _models_mock_events__WEBPACK_IMPORTED_MODULE_2__["EVENTS"];
    };
    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/guards/auth-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/guards/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        // if statement should be added here to determine if the user has the admin role.
        // If so, true should be returned
        // not admin user so redirect to landing page with the return url
        this.router.navigate(['/notauthorized']);
        return false;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        // error messages received from the login attempt
        this.errors = [];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/vnd.api+json' })
        };
    }
    // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
    UserService.prototype.login = function (user) {
        var _this = this;
        this.http.post('/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(function (data) {
            console.log('login success', data);
            _this.updateData(data['token']);
        }, function (err) {
            console.error('login error', err);
            _this.errors = err['error'];
        });
    };
    /**
     * Refreshes the JWT token, to extend the time the user is logged in
     */
    UserService.prototype.refreshToken = function () {
        var _this = this;
        this.http.post('/api-token-refresh/', JSON.stringify({ token: this.token }), this.httpOptions).subscribe(function (data) {
            console.log('refresh success', data);
            _this.updateData(data['token']);
        }, function (err) {
            console.error('refresh error', err);
            _this.errors = err['error'];
        });
    };
    UserService.prototype.logout = function () {
        this.token = null;
        this.token_expires = null;
        this.username = null;
    };
    UserService.prototype.updateData = function (token) {
        this.token = token;
        this.errors = [];
        // decode the token to read the username and expiration timestamp
        var token_parts = this.token.split(/\./);
        var token_decoded = JSON.parse(window.atob(token_parts[1]));
        this.token_expires = new Date(token_decoded.exp * 1000);
        this.username = token_decoded.username;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mounika Addagada\Desktop\CAPSTONE\STEM-Capstone-2019\src\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map