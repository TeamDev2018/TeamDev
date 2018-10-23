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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _team_overview_team_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team-overview/team-overview.component */ "./src/app/team-overview/team-overview.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/user-detail/user-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'team-overview', component: _team_overview_team_overview_component__WEBPACK_IMPORTED_MODULE_2__["TeamOverviewComponent"] },
    { path: 'team', component: _team_team_component__WEBPACK_IMPORTED_MODULE_3__["TeamComponent"] },
    { path: 'user-detail/:id', component: _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailComponent"] },
    { path: '', redirectTo: '/team-overview', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "h1 {\r\n    font-size: 4em;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-toolbar {\r\n    padding: 15px;\r\n    margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <mat-toolbar-row>\r\n    <h1>{{ title }}</h1>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
        this.title = 'TeamDev';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm5/ngx-avatar.js");
/* harmony import */ var _new_user_dialog_new_user_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./new-user-dialog/new-user-dialog.component */ "./src/app/new-user-dialog/new-user-dialog.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _team_overview_team_overview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./team-overview/team-overview.component */ "./src/app/team-overview/team-overview.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/user-detail/user-detail.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _new_user_dialog_new_user_dialog_component__WEBPACK_IMPORTED_MODULE_12__["NewUserDialogComponent"],
                _team_overview_team_overview_component__WEBPACK_IMPORTED_MODULE_15__["TeamOverviewComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_16__["TeamComponent"],
                _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_18__["UserDetailComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                ngx_avatar__WEBPACK_IMPORTED_MODULE_11__["AvatarModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"]
            ],
            entryComponents: [
                _new_user_dialog_new_user_dialog_component__WEBPACK_IMPORTED_MODULE_12__["NewUserDialogComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/new-user-dialog/new-user-dialog.component.css":
/*!***************************************************************!*\
  !*** ./src/app/new-user-dialog/new-user-dialog.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\nbutton {\r\n    width: 50%;\r\n    margin-top: 1em;\r\n}\r\n\r\nh1 {\r\n    font-size: 3em;\r\n    text-align: center;\r\n    margin-bottom: 1em;\r\n}"

/***/ }),

/***/ "./src/app/new-user-dialog/new-user-dialog.component.html":
/*!****************************************************************!*\
  !*** ./src/app/new-user-dialog/new-user-dialog.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Team verstärken</h1>\r\n<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <form (ngSubmit)=\"onSubmit()\" #form=\"ngForm\" novalidate>\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label for=\"firstname\">Vorname</mat-label>\r\n      <input [(ngModel)]=\"user.FirstName\" id=\"firstname\" name=\"firstname\" required matInput>\r\n      <mat-icon matSuffix>accessibility_new</mat-icon>\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label for=\"lastname\">Nachname</mat-label>\r\n      <input [(ngModel)]=\"user.LastName\" id=\"lastname\" name=\"lastname\" required matInput>\r\n      <mat-icon matSuffix>accessibility_new</mat-icon>\r\n    </mat-form-field>\r\n    <br>\r\n    <button type=\"submit\" [disabled]=\"!form.form.valid\" mat-raised-button color=\"primary\">Mitglied hinzufügen</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/new-user-dialog/new-user-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/new-user-dialog/new-user-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: NewUserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserDialogComponent", function() { return NewUserDialogComponent; });
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/user */ "./src/model/user.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NewUserDialogComponent = /** @class */ (function () {
    function NewUserDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_0__["User"]('Sarah', 'Mey');
    }
    NewUserDialogComponent.prototype.ngOnInit = function () {
    };
    NewUserDialogComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    NewUserDialogComponent.prototype.onSubmit = function () {
        this.dialogRef.close(this.user);
    };
    NewUserDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-user-dialog',
            template: __webpack_require__(/*! ./new-user-dialog.component.html */ "./src/app/new-user-dialog/new-user-dialog.component.html"),
            styles: [__webpack_require__(/*! ./new-user-dialog.component.css */ "./src/app/new-user-dialog/new-user-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], NewUserDialogComponent);
    return NewUserDialogComponent;
}());



/***/ }),

/***/ "./src/app/team-overview/team-overview.component.css":
/*!***********************************************************!*\
  !*** ./src/app/team-overview/team-overview.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container > .item {\r\n    margin-top: 5px;\r\n}\r\n\r\na#start {\r\n    padding: 15px;\r\n    font-size: 3em;\r\n}"

/***/ }),

/***/ "./src/app/team-overview/team-overview.component.html":
/*!************************************************************!*\
  !*** ./src/app/team-overview/team-overview.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"row\" id=\"p5play\">\r\n  \r\n</div>\r\n<div style=\"margin-top:50px\" class=\"container\" fxLayoutAlign=\"center\" fxLayout=\"row\">\r\n\r\n</div>\r\n<div class=\"container\" fxLayoutAlign=\"center\" fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n  <div class=\"container\" fxFlex=\"100\" fxLayout=\"column\">\r\n    <a routerLink=\"/team\" id=\"start\" mat-raised-button color=\"primary\">Let's go!</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/team-overview/team-overview.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/team-overview/team-overview.component.ts ***!
  \**********************************************************/
/*! exports provided: TeamOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamOverviewComponent", function() { return TeamOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _new_user_dialog_new_user_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../new-user-dialog/new-user-dialog.component */ "./src/app/new-user-dialog/new-user-dialog.component.ts");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_p5_play__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-p5-play */ "./node_modules/vue-p5-play/p5.play.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TeamOverviewComponent = /** @class */ (function () {
    function TeamOverviewComponent(dialog, router, userService) {
        this.dialog = dialog;
        this.router = router;
        this.userService = userService;
    }
    TeamOverviewComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    TeamOverviewComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
            _this.createCanvas();
        });
    };
    TeamOverviewComponent.prototype.createCanvas = function () {
        var _this = this;
        Object(vue_p5_play__WEBPACK_IMPORTED_MODULE_4__["default"])(p5__WEBPACK_IMPORTED_MODULE_3__);
        this.P5 = new p5__WEBPACK_IMPORTED_MODULE_3__(function (p) { _this.sketch(_this, p); });
    };
    TeamOverviewComponent.prototype.sketch = function (that, p) {
        var _this = this;
        p.users = that.users;
        p.circles = new p.Group();
        p.addRandomCircle = function () {
            var circle = p.createSprite(p.random(0, p.width), p.random(0, p.height));
            circle.setSpeed(p.random(2, 4) * p.zoomLevel, p.random(0, 360));
            circle.draw = function () {
                p.fill(this.shapeColor);
                p.ellipse(0, 0, 100, 100);
                if (this.text) {
                    p.fill('black');
                    p.textAlign(p.CENTER);
                    p.textSize(40);
                    p.text(this.text, 0, (p.constTextSize) / 2);
                }
            };
            circle.scale = p.random(0.7, 1) * p.zoomLevel;
            circle.setCollider('circle', 0, 0, 50);
            // mass determines the force exchange in case of bounce
            circle.mass = circle.scale;
            return circle;
        };
        p.windowResized = function () {
            p.resizeCanvas(p.windowWidth, p.windowHeight / 2);
            p.camera.position.x = p.width / 2;
            p.camera.position.y = p.height / 2;
        };
        p.setup = function () {
            p.textSize(40);
            p.constTextSize = p.textAscent();
            var canvas = p.createCanvas(p.windowWidth, p.windowHeight / 2);
            p.zoomLevel = Math.sqrt(p.windowWidth * p.windowHeight) / Math.sqrt(p.users.length) / 200;
            canvas.parent('p5play');
            var _loop_1 = function (i) {
                var circle = p.addRandomCircle();
                circle.text = p.users[i].FirstName[0] + p.users[i].LastName[0];
                circle.onMouseReleased = function () {
                    _this.router.navigate(['/user-detail', i]);
                };
                p.circles.add(circle);
            };
            for (var i = 0; i < p.users.length; i++) {
                _loop_1(i);
            }
            var addButton = p.addRandomCircle();
            addButton.text = '+';
            addButton.onMouseReleased = function () {
                that.addNewUser();
            };
            addButton.scale = 1.25 * p.zoomLevel;
            // mass determines the force exchange in case of bounce
            addButton.mass = addButton.scale;
            p.addButton = addButton;
        };
        p.draw = function () {
            p.background('#0000000');
            // all sprites bounce at the screen edges
            for (var i = 0; i < p.allSprites.length; i++) {
                var s = p.allSprites[i];
                s.update();
                var radius = s.scale * 50;
                if (s.position.x < radius) {
                    s.position.x = radius + 1;
                    s.velocity.x = p.abs(s.velocity.x);
                }
                if (s.position.x > p.width - radius) {
                    s.position.x = p.width - radius - 1;
                    s.velocity.x = -p.abs(s.velocity.x);
                }
                if (s.position.y < radius) {
                    s.position.y = radius + 1;
                    s.velocity.y = p.abs(s.velocity.y);
                }
                if (s.position.y > p.height - radius) {
                    s.position.y = p.height - radius - 1;
                    s.velocity.y = -p.abs(s.velocity.y);
                }
                // s.collider.draw();
            }
            p.drawSprites();
            p.addButton.mouseUpdate();
            // circles bounce against each others and against boxes
            p.allSprites.bounce(p.allSprites);
            // p.addButton.collider.draw();
        };
    };
    TeamOverviewComponent.prototype.addNewUser = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_new_user_dialog_new_user_dialog_component__WEBPACK_IMPORTED_MODULE_2__["NewUserDialogComponent"], {
            width: '40%'
        });
        dialogRef.beforeClose().subscribe(function (newUser) {
            if (newUser) {
                _this.users.push(newUser);
                var id_1 = _this.userService.createUser(newUser);
                var circle = _this.P5.addRandomCircle();
                circle.text = newUser.FirstName[0] + newUser.LastName[0];
                circle.onMouseReleased = function () {
                    _this.router.navigate(['/user-detail', id_1]);
                };
                _this.P5.circles.add(circle);
            }
        });
    };
    TeamOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-overview',
            template: __webpack_require__(/*! ./team-overview.component.html */ "./src/app/team-overview/team-overview.component.html"),
            styles: [__webpack_require__(/*! ./team-overview.component.css */ "./src/app/team-overview/team-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], TeamOverviewComponent);
    return TeamOverviewComponent;
}());



/***/ }),

/***/ "./src/app/team/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/team/team.component.html":
/*!******************************************!*\
  !*** ./src/app/team/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  team works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
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

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/user-detail/user-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-detail/user-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n  <h2>{{user.FirstName}} {{user.LastName}} Details</h2>\r\n  <!--<div><span>id: </span>{{hero.id}}</div>-->\r\n  <div>\r\n    <label>FirstName:\r\n      <input [(ngModel)]=\"user.FirstName\" placeholder=\"name\"/>\r\n    </label>\r\n    <label>LastName:\r\n      <input [(ngModel)]=\"user.LastName\" placeholder=\"name\"/>\r\n    </label>\r\n  </div>\r\n  <button (click)=\"goBack()\">go back</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-detail/user-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.ts ***!
  \******************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(route, location, userService) {
        this.route = route;
        this.location = location;
        this.userService = userService;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.getUser(id);
    };
    UserDetailComponent.prototype.getUser = function (id) {
        var _this = this;
        this.userService.getUser(id)
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    UserDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.css */ "./src/app/user-detail/user-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/users */ "./src/data/users.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
    function UserService() {
        this._Users = _data_users__WEBPACK_IMPORTED_MODULE_1__["USERS"];
    }
    UserService.prototype.getUsers = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this._Users);
    };
    UserService.prototype.getUser = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this._Users[id]);
    };
    UserService.prototype.createUser = function (newUser) {
        this._Users.push(newUser);
        return this._Users.length - 1;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/data/users.ts":
/*!***************************!*\
  !*** ./src/data/users.ts ***!
  \***************************/
/*! exports provided: USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/user */ "./src/model/user.ts");

var USERS = new Array(new _model_user__WEBPACK_IMPORTED_MODULE_0__["User"]('Lukas', 'Anetsberger'), new _model_user__WEBPACK_IMPORTED_MODULE_0__["User"]('Simon', 'Berleb'), new _model_user__WEBPACK_IMPORTED_MODULE_0__["User"]('Sabrina', 'Englmeier'), new _model_user__WEBPACK_IMPORTED_MODULE_0__["User"]('Vanessa', 'Klein'), new _model_user__WEBPACK_IMPORTED_MODULE_0__["User"]('Martin', 'Wagner'), new _model_user__WEBPACK_IMPORTED_MODULE_0__["User"]('Kristina', 'Raith'), new _model_user__WEBPACK_IMPORTED_MODULE_0__["User"]('Rolf', 'Daniel'), new _model_user__WEBPACK_IMPORTED_MODULE_0__["User"]('Uwe', 'Daniel'), new _model_user__WEBPACK_IMPORTED_MODULE_0__["User"]('Marie', 'Klein'), new _model_user__WEBPACK_IMPORTED_MODULE_0__["User"]('Lukas', 'Klein'), new _model_user__WEBPACK_IMPORTED_MODULE_0__["User"]('Patrick', 'Schwarz'), new _model_user__WEBPACK_IMPORTED_MODULE_0__["User"]('Florian', 'Bauer'), new _model_user__WEBPACK_IMPORTED_MODULE_0__["User"]('Evi', 'Heuer'), new _model_user__WEBPACK_IMPORTED_MODULE_0__["User"]('Franziska', 'Dietl'), new _model_user__WEBPACK_IMPORTED_MODULE_0__["User"]('Carola', 'Vaitl'));


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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

/***/ "./src/model/user.ts":
/*!***************************!*\
  !*** ./src/model/user.ts ***!
  \***************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(FirstName, LastName) {
        this.FirstName = FirstName;
        this.LastName = LastName;
    }
    return User;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Benutzer\Martin\Documents\TeamDev\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map