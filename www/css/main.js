webpackJsonp([131],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = /** @class */ (function () {
    function LoadingService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingService.prototype.show = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    LoadingService.prototype.hide = function () {
        this.loading.dismiss();
    };
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* LoadingController */]])
    ], LoadingService);
    return LoadingService;
}());

//# sourceMappingURL=loading-service.js.map

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/action-sheet/layout-1/action-sheet-layout-1.module": [
		472,
		41
	],
	"../components/action-sheet/layout-2/action-sheet-layout-2.module": [
		473,
		40
	],
	"../components/action-sheet/layout-3/action-sheet-layout-3.module": [
		474,
		130
	],
	"../components/alert/layout-1/alert-layout-1.module": [
		475,
		129
	],
	"../components/alert/layout-2/alert-layout-2.module": [
		476,
		128
	],
	"../components/alert/layout-3/alert-layout-3.module": [
		477,
		127
	],
	"../components/check-box/layout-1/check-box-layout-1.module": [
		478,
		126
	],
	"../components/check-box/layout-2/check-box-layout-2.module": [
		479,
		125
	],
	"../components/check-box/layout-3/check-box-layout-3.module": [
		480,
		124
	],
	"../components/comment/layout-1/comment-layout-1.module": [
		481,
		123
	],
	"../components/comment/layout-2/comment-layout-2.module": [
		482,
		122
	],
	"../components/forms/layout-1/form-layout-1.module": [
		483,
		121
	],
	"../components/forms/layout-2/form-layout-2.module": [
		484,
		120
	],
	"../components/forms/layout-3/form-layout-3.module": [
		485,
		119
	],
	"../components/forms/layout-4/form-layout-4.module": [
		486,
		118
	],
	"../components/full-screen-gallery/full-screen-gallery.module": [
		487,
		117
	],
	"../components/image-gallery/layout-1/image-gallery-layout-1.module": [
		488,
		116
	],
	"../components/image-gallery/layout-2/image-gallery-layout-2.module": [
		489,
		115
	],
	"../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module": [
		490,
		114
	],
	"../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2.module": [
		491,
		113
	],
	"../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module": [
		492,
		112
	],
	"../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module": [
		493,
		111
	],
	"../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module": [
		494,
		110
	],
	"../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module": [
		495,
		109
	],
	"../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module": [
		496,
		108
	],
	"../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module": [
		497,
		107
	],
	"../components/list-view/expandable/layout-1/expandable-layout-1.module": [
		498,
		106
	],
	"../components/list-view/expandable/layout-2/expandable-layout-2.module": [
		499,
		105
	],
	"../components/list-view/expandable/layout-3/expandable-layout-3.module": [
		500,
		104
	],
	"../components/list-view/google-card/layout-1/google-card-layout-1.module": [
		501,
		103
	],
	"../components/list-view/google-card/layout-2/google-card-layout-2.module": [
		502,
		102
	],
	"../components/list-view/google-card/layout-3/google-card-layout-3.module": [
		503,
		101
	],
	"../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module": [
		504,
		100
	],
	"../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module": [
		505,
		99
	],
	"../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module": [
		506,
		98
	],
	"../components/login/layout-1/login-layout-1.module": [
		507,
		97
	],
	"../components/login/layout-2/login-layout-2.module": [
		508,
		96
	],
	"../components/maps/layout-1/maps-layout-1.module": [
		509,
		2
	],
	"../components/maps/layout-2/maps-layout-2.module": [
		510,
		4
	],
	"../components/maps/layout-3/maps-layout-3.module": [
		511,
		3
	],
	"../components/parallax/layout-1/parallax-layout-1.module": [
		512,
		39
	],
	"../components/parallax/layout-2/parallax-layout-2.module": [
		513,
		38
	],
	"../components/parallax/layout-3/parallax-layout-3.module": [
		514,
		37
	],
	"../components/parallax/layout-4/parallax-layout-4.module": [
		515,
		36
	],
	"../components/payment/layout-1/payment-layout-1.module": [
		516,
		95
	],
	"../components/profile/layout-1/profile-layout-1.module": [
		517,
		94
	],
	"../components/profile/layout-2/profile-layout-2.module": [
		518,
		93
	],
	"../components/profile/layout-3/profile-layout-3.module": [
		519,
		92
	],
	"../components/profile/layout-4/profile-layout-4.module": [
		520,
		91
	],
	"../components/profile/layout-5/profile-layout-5.module": [
		521,
		90
	],
	"../components/qrcode/layout-1/qrcode-layout-1.module": [
		522,
		89
	],
	"../components/radio-button/layout-1/radio-button-layout-1.module": [
		523,
		88
	],
	"../components/radio-button/layout-2/radio-button-layout-2.module": [
		524,
		87
	],
	"../components/radio-button/layout-3/radio-button-layout-3.module": [
		525,
		86
	],
	"../components/range/layout-1/range-layout-1.module": [
		526,
		85
	],
	"../components/range/layout-2/range-layout-2.module": [
		527,
		84
	],
	"../components/range/layout-3/range-layout-3.module": [
		528,
		83
	],
	"../components/range/layout-4/range-layout-4.module": [
		529,
		82
	],
	"../components/register/layout-1/register-layout-1.module": [
		530,
		81
	],
	"../components/register/layout-2/register-layout-2.module": [
		531,
		80
	],
	"../components/search-bar/layout-1/search-bar-layout-1.module": [
		532,
		79
	],
	"../components/search-bar/layout-2/search-bar-layout-2.module": [
		533,
		78
	],
	"../components/search-bar/layout-3/search-bar-layout-3.module": [
		534,
		77
	],
	"../components/segment/layout-1/segment-layout-1.module": [
		535,
		76
	],
	"../components/segment/layout-2/segment-layout-2.module": [
		536,
		75
	],
	"../components/segment/layout-3/segment-layout-3.module": [
		537,
		74
	],
	"../components/select/layout-1/select-layout-1.module": [
		538,
		73
	],
	"../components/select/layout-2/select-layout-2.module": [
		539,
		72
	],
	"../components/select/layout-3/select-layout-3.module": [
		540,
		71
	],
	"../components/select/layout-4/select-layout-4.module": [
		541,
		70
	],
	"../components/select/layout-5/select-layout-5.module": [
		542,
		69
	],
	"../components/select/layout-6/select-layout-6.module": [
		543,
		68
	],
	"../components/spinner/spinner.module": [
		544,
		67
	],
	"../components/splash-screen/layout-1/splash-screen-layout-1.module": [
		545,
		66
	],
	"../components/splash-screen/layout-2/splash-screen-layout-2.module": [
		546,
		65
	],
	"../components/splash-screen/layout-3/splash-screen-layout-3.module": [
		547,
		64
	],
	"../components/sub-image-gallery/sub-image-gallery.module": [
		470,
		63
	],
	"../components/tabs/layout-1/tabs-layout-1.module": [
		548,
		62
	],
	"../components/tabs/layout-2/tabs-layout-2.module": [
		549,
		61
	],
	"../components/tabs/layout-3/tabs-layout-3.module": [
		550,
		60
	],
	"../components/time-line/layout-1/time-line-layout-1.module": [
		551,
		59
	],
	"../components/time-line/layout-2/time-line-layout-2.module": [
		552,
		58
	],
	"../components/time-line/layout-3/time-line-layout-3.module": [
		553,
		57
	],
	"../components/toggle/layout-1/toggle-layout-1.module": [
		554,
		56
	],
	"../components/toggle/layout-2/toggle-layout-2.module": [
		555,
		55
	],
	"../components/toggle/layout-3/toggle-layout-3.module": [
		556,
		54
	],
	"../components/wizard/layout-1/wizard-layout-1.module": [
		471,
		53
	],
	"../components/wizard/layout-2/wizard-layout-2.module": [
		557,
		52
	],
	"../components/wizard/layout-3/wizard-layout-3.module": [
		558,
		51
	],
	"../pages/home/home.module": [
		559,
		48
	],
	"../pages/intro-page/intro-page.module": [
		560,
		30
	],
	"../pages/item-details-action-sheet/item-details-action-sheet.module": [
		561,
		11
	],
	"../pages/item-details-alert/item-details-alert.module": [
		562,
		26
	],
	"../pages/item-details-appearance-animation/item-details-appearance-animation.module": [
		563,
		7
	],
	"../pages/item-details-check-box/item-details-check-box.module": [
		564,
		25
	],
	"../pages/item-details-comment/item-details-comment.module": [
		565,
		29
	],
	"../pages/item-details-drag-and-drop/item-details-drag-and-drop.module": [
		566,
		23
	],
	"../pages/item-details-expandable/item-details-expandable.module": [
		567,
		22
	],
	"../pages/item-details-form/item-details-form.module": [
		568,
		10
	],
	"../pages/item-details-full-screen-gallery/item-details-full-screen-gallery.module": [
		569,
		35
	],
	"../pages/item-details-google-card/item-details-google-card.module": [
		570,
		21
	],
	"../pages/item-details-image-gallery/item-details-image-gallery.module": [
		571,
		24
	],
	"../pages/item-details-login/item-details-login.module": [
		572,
		28
	],
	"../pages/item-details-maps/item-details-maps.module": [
		573,
		1
	],
	"../pages/item-details-parallax/item-details-parallax.module": [
		574,
		8
	],
	"../pages/item-details-payment/item-details-payment.module": [
		575,
		34
	],
	"../pages/item-details-profile/item-details-profile.module": [
		576,
		6
	],
	"../pages/item-details-qrcode/item-details-qrcode.module": [
		577,
		33
	],
	"../pages/item-details-radio-button/item-details-radio-button.module": [
		578,
		19
	],
	"../pages/item-details-range/item-details-range.module": [
		579,
		9
	],
	"../pages/item-details-register/item-details-register.module": [
		580,
		27
	],
	"../pages/item-details-search-bar/item-details-search-bar.module": [
		581,
		18
	],
	"../pages/item-details-segment/item-details-segment.module": [
		582,
		17
	],
	"../pages/item-details-select/item-details-select.module": [
		583,
		5
	],
	"../pages/item-details-spinner/item-details-spinner.module": [
		584,
		32
	],
	"../pages/item-details-splash-screen/item-details-splash-screen.module": [
		585,
		16
	],
	"../pages/item-details-sub-image-gallery/item-details-sub-image-gallery.module": [
		586,
		31
	],
	"../pages/item-details-swipe-to-dismiss/item-details-swipe-to-dismiss.module": [
		587,
		20
	],
	"../pages/item-details-tabs/item-details-tabs.module": [
		588,
		15
	],
	"../pages/item-details-text-view/item-details-text-view.module": [
		589,
		50
	],
	"../pages/item-details-time-line/item-details-time-line.module": [
		590,
		14
	],
	"../pages/item-details-toggle/item-details-toggle.module": [
		591,
		13
	],
	"../pages/item-details-wizard/item-details-wizard.module": [
		592,
		12
	],
	"../pages/item-details/item-details.module": [
		593,
		49
	],
	"../pages/items/items.module": [
		594,
		0
	],
	"../pages/tab-page-1/tab-page-1.module": [
		595,
		47
	],
	"../pages/tab-page-2/tab-page-2.module": [
		596,
		46
	],
	"../pages/tab-page-3/tab-page-3.module": [
		597,
		45
	],
	"../pages/tab-page-4/tab-page-4.module": [
		598,
		44
	],
	"../pages/tab-page-5/tab-page-5.module": [
		599,
		43
	],
	"../pages/tab-page-6/tab-page-6.module": [
		600,
		42
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 228;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.presentToast = function (message) {
        var toastItem = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].TOAST;
        toastItem["message"] = message;
        var toast = this.toastCtrl.create(toastItem);
        toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast-service.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(399);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_app_settings__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_toast_service__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_loading_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_10__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_11__services_loading_service__["a" /* LoadingService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicErrorHandler */] },
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__services_app_settings__["a" /* AppSettings */].FIREBASE_CONFIG),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../components/action-sheet/layout-1/action-sheet-layout-1.module#ActionSheetLayout1Module', name: 'ActionSheetLayout1', segment: 'action-sheet-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/action-sheet/layout-2/action-sheet-layout-2.module#ActionSheetLayout2Module', name: 'ActionSheetLayout2', segment: 'action-sheet-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/action-sheet/layout-3/action-sheet-layout-3.module#ActionSheetLayout3Module', name: 'ActionSheetLayout3', segment: 'action-sheet-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/alert/layout-1/alert-layout-1.module#AlertLayout1Module', name: 'AlertLayout1', segment: 'alert-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/alert/layout-2/alert-layout-2.module#AlertLayout2Module', name: 'AlertLayout2', segment: 'alert-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/alert/layout-3/alert-layout-3.module#AlertLayout3Module', name: 'AlertLayout3', segment: 'alert-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-1/check-box-layout-1.module#CheckBoxLayout1Module', name: 'CheckBoxLayout1', segment: 'check-box-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-2/check-box-layout-2.module#CheckBoxLayout2Module', name: 'CheckBoxLayout2', segment: 'check-box-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-3/check-box-layout-3.module#CheckBoxLayout3Module', name: 'CheckBoxLayout3', segment: 'check-box-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/comment/layout-1/comment-layout-1.module#CommentLayout1Module', name: 'CommentLayout1', segment: 'comment-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/comment/layout-2/comment-layout-2.module#CommentLayout2Module', name: 'CommentLayout2', segment: 'comment-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/forms/layout-1/form-layout-1.module#FormLayout1Module', name: 'FormLayout1', segment: 'form-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/forms/layout-2/form-layout-2.module#FormLayout2Module', name: 'FormLayout2', segment: 'form-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/forms/layout-3/form-layout-3.module#FormLayout3Module', name: 'FormLayout3', segment: 'form-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/forms/layout-4/form-layout-4.module#FormLayout4Module', name: 'FormLayout4', segment: 'form-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/full-screen-gallery/full-screen-gallery.module#FullScreenGalleryModule', name: 'FullScreenGallery', segment: 'full-screen-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/image-gallery/layout-1/image-gallery-layout-1.module#ImageGalleryLayout1Module', name: 'ImageGalleryLayout1', segment: 'image-gallery-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/image-gallery/layout-2/image-gallery-layout-2.module#ImageGalleryLayout2Module', name: 'ImageGalleryLayout2', segment: 'image-gallery-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module#AppearanceAnimationLayout1Module', name: 'AppearanceAnimationLayout1', segment: 'appearance-animation-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2.module#AppearanceAnimationLayout2Module', name: 'AppearanceAnimationLayout2', segment: 'appearance-animation-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module#AppearanceAnimationLayout3Module', name: 'AppearanceAnimationLayout3', segment: 'appearance-animation-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module#AppearanceAnimationLayout4Module', name: 'AppearanceAnimationLayout4', segment: 'appearance-animation-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module#AppearanceAnimationLayout5Module', name: 'AppearanceAnimationLayout5', segment: 'appearance-animation-layout-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module#DragAndDropLayout1Module', name: 'DragAndDropLayout1', segment: 'drag-and-drop-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module#DragAndDropLayout2Module', name: 'DragAndDropLayout2', segment: 'drag-and-drop-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module#DragAndDropLayout3Module', name: 'DragAndDropLayout3', segment: 'drag-and-drop-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-1/expandable-layout-1.module#ExpandableLayout1Module', name: 'ExpandableLayout1', segment: 'expandable-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-2/expandable-layout-2.module#ExpandableLayout2Module', name: 'ExpandableLayout2', segment: 'expandable-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-3/expandable-layout-3.module#ExpandableLayout3Module', name: 'ExpandableLayout3', segment: 'expandable-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-1/google-card-layout-1.module#GoogleCardLayout1Module', name: 'GoogleCardLayout1', segment: 'google-card-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-2/google-card-layout-2.module#GoogleCardLayout2Module', name: 'GoogleCardLayout2', segment: 'google-card-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-3/google-card-layout-3.module#GoogleCardLayout3Module', name: 'GoogleCardLayout3', segment: 'google-card-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module#SwipeToDismissLayout1Module', name: 'SwipeToDismissLayout1', segment: 'swipe-to-dismiss-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module#SwipeToDismissLayout2Module', name: 'SwipeToDismissLayout2', segment: 'swipe-to-dismiss-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module#SwipeToDismissLayout3Module', name: 'SwipeToDismissLayout3', segment: 'swipe-to-dismiss-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/layout-1/login-layout-1.module#LoginLayout1Module', name: 'LoginLayout1', segment: 'login-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/layout-2/login-layout-2.module#LoginLayout2Module', name: 'LoginLayout2', segment: 'login-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/maps/layout-1/maps-layout-1.module#MapsLayout1Module', name: 'MapsLayout1', segment: 'maps-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/maps/layout-2/maps-layout-2.module#MapsLayout2Module', name: 'MapsLayout2', segment: 'maps-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/maps/layout-3/maps-layout-3.module#MapsLayout3Module', name: 'MapsLayout3', segment: 'maps-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-1/parallax-layout-1.module#ParallaxLayout1Module', name: 'ParallaxLayout1', segment: 'parallax-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-2/parallax-layout-2.module#ParallaxLayout2Module', name: 'ParallaxLayout2', segment: 'parallax-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-3/parallax-layout-3.module#ParallaxLayout3Module', name: 'ParallaxLayout3', segment: 'parallax-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-4/parallax-layout-4.module#ParallaxLayout4Module', name: 'ParallaxLayout4', segment: 'parallax-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/payment/layout-1/payment-layout-1.module#PaymentLayout1Module', name: 'PaymentLayout1', segment: 'payment-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/profile/layout-1/profile-layout-1.module#ProfileLayout1Module', name: 'ProfileLayout1', segment: 'profile-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/profile/layout-2/profile-layout-2.module#ProfileLayout2Module', name: 'ProfileLayout2', segment: 'profile-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/profile/layout-3/profile-layout-3.module#ProfileLayout3Module', name: 'ProfileLayout3', segment: 'profile-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/profile/layout-4/profile-layout-4.module#ProfileLayout4Module', name: 'ProfileLayout4', segment: 'profile-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/profile/layout-5/profile-layout-5.module#ProfileLayout5Module', name: 'ProfileLayout5', segment: 'profile-layout-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/qrcode/layout-1/qrcode-layout-1.module#QRcodeLayout1Module', name: 'QRcodeLayout1', segment: 'qrcode-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-1/radio-button-layout-1.module#RadioButtonLayout1Module', name: 'RadioButtonLayout1', segment: 'radio-button-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-2/radio-button-layout-2.module#RadioButtonLayout2Module', name: 'RadioButtonLayout2', segment: 'radio-button-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-3/radio-button-layout-3.module#RadioButtonLayout3Module', name: 'RadioButtonLayout3', segment: 'radio-button-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-1/range-layout-1.module#RangeLayout1Module', name: 'RangeLayout1', segment: 'range-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-2/range-layout-2.module#RangeLayout2Module', name: 'RangeLayout2', segment: 'range-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-3/range-layout-3.module#RangeLayout3Module', name: 'RangeLayout3', segment: 'range-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-4/range-layout-4.module#RangeLayout4Module', name: 'RangeLayout4', segment: 'range-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/register/layout-1/register-layout-1.module#RegisterLayout1Module', name: 'RegisterLayout1', segment: 'register-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/register/layout-2/register-layout-2.module#RegisterLayout2Module', name: 'RegisterLayout2', segment: 'register-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-1/search-bar-layout-1.module#SearchBarLayout1Module', name: 'SearchBarLayout1', segment: 'search-bar-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-2/search-bar-layout-2.module#SearchBarLayout2Module', name: 'SearchBarLayout2', segment: 'search-bar-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-3/search-bar-layout-3.module#SearchBarLayout3Module', name: 'SearchBarLayout3', segment: 'search-bar-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/segment/layout-1/segment-layout-1.module#SegmentLayout1Module', name: 'SegmentLayout1', segment: 'segment-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/segment/layout-2/segment-layout-2.module#SegmentLayout2Module', name: 'SegmentLayout2', segment: 'segment-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/segment/layout-3/segment-layout-3.module#SegmentLayout3Module', name: 'SegmentLayout3', segment: 'segment-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-1/select-layout-1.module#SelectLayout1Module', name: 'SelectLayout1', segment: 'select-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-2/select-layout-2.module#SelectLayout2Module', name: 'SelectLayout2', segment: 'select-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-3/select-layout-3.module#SelectLayout3Module', name: 'SelectLayout3', segment: 'select-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-4/select-layout-4.module#SelectLayout4Module', name: 'SelectLayout4', segment: 'select-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-5/select-layout-5.module#SelectLayout5Module', name: 'SelectLayout5', segment: 'select-layout-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-6/select-layout-6.module#SelectLayout6Module', name: 'SelectLayout6', segment: 'select-layout-6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/spinner/spinner.module#SpinnerModule', name: 'Spinner', segment: 'spinner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-1/splash-screen-layout-1.module#SplashScreenLayout1Module', name: 'SplashScreenLayout1', segment: 'splash-screen-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-2/splash-screen-layout-2.module#SplashScreenLayout2Module', name: 'SplashScreenLayout2', segment: 'splash-screen-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-3/splash-screen-layout-3.module#SplashScreenLayout3Module', name: 'SplashScreenLayout3', segment: 'splash-screen-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/sub-image-gallery/sub-image-gallery.module#SubImageGalleryModule', name: 'SubImageGallery', segment: 'sub-image-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-1/tabs-layout-1.module#TabsLayout1Module', name: 'TabsLayout1', segment: 'tabs-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-2/tabs-layout-2.module#TabsLayout2Module', name: 'TabsLayout2', segment: 'tabs-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-3/tabs-layout-3.module#TabsLayout3Module', name: 'TabsLayout3', segment: 'tabs-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/time-line/layout-1/time-line-layout-1.module#TimeLineLayout1Module', name: 'TimeLineLayout1', segment: 'time-line-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/time-line/layout-2/time-line-layout-2.module#TimeLineLayout2Module', name: 'TimeLineLayout2', segment: 'time-line-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/time-line/layout-3/time-line-layout-3.module#TimeLineLayout3Module', name: 'TimeLineLayout3', segment: 'time-line-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-1/toggle-layout-1.module#ToggleLayout1Module', name: 'ToggleLayout1', segment: 'toggle-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-2/toggle-layout-2.module#ToggleLayout2Module', name: 'ToggleLayout2', segment: 'toggle-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-3/toggle-layout-3.module#ToggleLayout3Module', name: 'ToggleLayout3', segment: 'toggle-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-1/wizard-layout-1.module#WizardLayout1Module', name: 'WizardLayout1', segment: 'wizard-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-2/wizard-layout-2.module#WizardLayout2Module', name: 'WizardLayout2', segment: 'wizard-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-3/wizard-layout-3.module#WizardLayout3Module', name: 'WizardLayout3', segment: 'wizard-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro-page/intro-page.module#IntroPageModule', name: 'IntroPage', segment: 'intro-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-action-sheet/item-details-action-sheet.module#ItemDetailsPageActionSheetModule', name: 'ItemDetailsPageActionSheet', segment: 'item-details-action-sheet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-alert/item-details-alert.module#ItemDetailsPageAlertModule', name: 'ItemDetailsPageAlert', segment: 'item-details-alert', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-appearance-animation/item-details-appearance-animation.module#ItemDetailsPageAppearanceAnimationModule', name: 'ItemDetailsPageAppearanceAnimation', segment: 'item-details-appearance-animation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-check-box/item-details-check-box.module#ItemDetailsPageCheckBoxModule', name: 'ItemDetailsPageCheckBox', segment: 'item-details-check-box', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-comment/item-details-comment.module#ItemDetailsPageCommentModule', name: 'ItemDetailsPageComment', segment: 'item-details-comment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-drag-and-drop/item-details-drag-and-drop.module#ItemDetailsPageDragAndDropModule', name: 'ItemDetailsPageDragAndDrop', segment: 'item-details-drag-and-drop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-expandable/item-details-expandable.module#ItemDetailsPageExpandableModule', name: 'ItemDetailsPageExpandable', segment: 'item-details-expandable', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-form/item-details-form.module#ItemDetailsPageFormeModule', name: 'ItemDetailsPageForm', segment: 'item-details-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-full-screen-gallery/item-details-full-screen-gallery.module#ItemDetailsPageFullScreenGalleryModule', name: 'ItemDetailsPageFullScreenGallery', segment: 'item-details-full-screen-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-google-card/item-details-google-card.module#ItemDetailsPageGoogleCardModule', name: 'ItemDetailsPageGoogleCard', segment: 'item-details-google-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-image-gallery/item-details-image-gallery.module#ItemDetailsPageImageGalleryModule', name: 'ItemDetailsPageImageGallery', segment: 'item-details-image-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-login/item-details-login.module#ItemDetailsPageLoginModule', name: 'ItemDetailsPageLogin', segment: 'item-details-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-maps/item-details-maps.module#ItemDetailsPageMapsModule', name: 'ItemDetailsPageMaps', segment: 'item-details-maps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-parallax/item-details-parallax.module#ItemDetailsPageParallaxModule', name: 'ItemDetailsPageParallax', segment: 'item-details-parallax', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-payment/item-details-payment.module#ItemDetailsPagePaymentModule', name: 'ItemDetailsPagePayment', segment: 'item-details-payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-profile/item-details-profile.module#ItemDetailsPageProfileModule', name: 'ItemDetailsPageProfile', segment: 'item-details-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-qrcode/item-details-qrcode.module#ItemDetailsPageQRCodeModule', name: 'ItemDetailsPageQRCode', segment: 'item-details-qrcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-radio-button/item-details-radio-button.module#ItemDetailsPageRadioButtonModule', name: 'ItemDetailsPageRadioButton', segment: 'item-details-radio-button', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-range/item-details-range.module#ItemDetailsPageRangeModule', name: 'ItemDetailsPageRange', segment: 'item-details-range', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-register/item-details-register.module#ItemDetailsPageRegisterModule', name: 'ItemDetailsPageRegister', segment: 'item-details-register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-search-bar/item-details-search-bar.module#ItemDetailsPageSearchBarModule', name: 'ItemDetailsPageSearchBar', segment: 'item-details-search-bar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-segment/item-details-segment.module#ItemDetailsPageTimeLineModule', name: 'ItemDetailsPageSegment', segment: 'item-details-segment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-select/item-details-select.module#ItemDetailsPageSelectModule', name: 'ItemDetailsPageSelect', segment: 'item-details-select', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-spinner/item-details-spinner.module#ItemDetailsPageSpinnerModule', name: 'ItemDetailsPageSpinner', segment: 'item-details-spinner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-splash-screen/item-details-splash-screen.module#ItemDetailsPageSplashScreenModule', name: 'ItemDetailsPageSplashScreen', segment: 'item-details-splash-screen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-sub-image-gallery/item-details-sub-image-gallery.module#ItemDetailsPageSubImageGalleryModule', name: 'ItemDetailsPageSubImageGallery', segment: 'item-details-sub-image-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-swipe-to-dismiss/item-details-swipe-to-dismiss.module#ItemDetailsPageSwipeToDismissModule', name: 'ItemDetailsPageSwipeToDismiss', segment: 'item-details-swipe-to-dismiss', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-tabs/item-details-tabs.module#ItemDetailsPageTabsModule', name: 'ItemDetailsPageTabs', segment: 'item-details-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-text-view/item-details-text-view.module#ItemDetailsPageTextViewModule', name: 'ItemDetailsPageTextView', segment: 'item-details-text-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-time-line/item-details-time-line.module#ItemDetailsPageTimeLineModule', name: 'ItemDetailsPageTimeLine', segment: 'item-details-time-line', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-toggle/item-details-toggle.module#ItemDetailsPageToggleModule', name: 'ItemDetailsPageToggle', segment: 'item-details-toggle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-wizard/item-details-wizard.module#ItemDetailsPageWizardModule', name: 'ItemDetailsPageWizard', segment: 'item-details-wizard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details/item-details.module#ItemDetailsPageModule', name: 'ItemDetailsPage', segment: 'item-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/items/items.module#ItemsPageModule', name: 'ItemsPage', segment: 'items', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-1/tab-page-1.module#TabPage1Module', name: 'TabPage1', segment: 'tab-page-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-2/tab-page-2.module#TabPage2Module', name: 'TabPage2', segment: 'tab-page-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-3/tab-page-3.module#TabPage3Module', name: 'TabPage3', segment: 'tab-page-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-4/tab-page-4.module#TabPage4Module', name: 'TabPage4', segment: 'tab-page-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-5/tab-page-5.module#TabPage5Module', name: 'TabPage5', segment: 'tab-page-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-6/tab-page-6.module#TabPage6Module', name: 'TabPage6', segment: 'tab-page-6', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_menu_service__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_settings__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, splashScreen, statusBar, menu, menuService, modalCtrl) {
        var _this = this;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.menu = menu;
        this.menuService = menuService;
        this.modalCtrl = modalCtrl;
        this.rootPage = "HomePage";
        this.initializeApp();
        this.pages = menuService.getAllThemes();
        this.leftMenuTitle = menuService.getTitle();
        this.menuService.load(null).subscribe(function (snapshot) {
            _this.params = snapshot;
            if (__WEBPACK_IMPORTED_MODULE_5__services_app_settings__["a" /* AppSettings */].SHOW_START_WIZARD) {
                _this.presentProfileModal();
            }
        });
    }
    MyApp.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create("IntroPage");
        profileModal.present();
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            localStorage.setItem("mailChimpLocal", "true");
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        // navigate to the new page if it is not the current page
        if (page.singlePage) {
            this.menu.open();
            this.nav.push(this.getPageForOpen(page.theme), {
                service: this.getServiceForPage(page.theme),
                page: page,
                componentName: page.theme
            });
        }
        else {
            this.nav.setRoot("ItemsPage", {
                componentName: page.theme
            });
        }
    };
    MyApp.prototype.getPageForOpen = function (value) {
        return null;
    };
    MyApp.prototype.getServiceForPage = function (value) {
        return null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\PROJECT-IONIC\IONIC-3-BLUE\src\app\app.html"*/'<ion-split-pane when="md">\n\n  <!-- Menu Main Top  -->\n\n    <ion-menu [content]="content"  *ngIf="params != null">\n\n        <ion-header header-background-image [ngStyle]="{\'background-image\': \'url(\' + params.background + \')\'}">\n\n            <ion-thumbnail>\n\n                <img [src]="params.image">\n\n            </ion-thumbnail>\n\n            <h2 item-title text-center>{{params.title}}</h2>\n\n        </ion-header>\n\n        <!-- Menu Main List -->\n\n        <ion-content main-menu>\n\n            <ion-list no-margin no-padding>\n\n                <button menuClose ion-item paddinge-left no-lines item-title *ngFor="let p of pages" (click)="openPage(p)">\n\n                  <ion-icon icon-small item-left>\n\n                    <i class="icon {{p.icon}}"></i>\n\n                  </ion-icon>\n\n                  {{p.title}}\n\n                </button>\n\n            </ion-list>\n\n        </ion-content>\n\n    </ion-menu>\n\n    <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n    <ion-nav [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n\n</ion-split-pane>\n\n'/*ion-inline-end:"E:\PROJECT-IONIC\IONIC-3-BLUE\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__services_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_service__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuService = /** @class */ (function () {
    function MenuService(af, loadingService) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.getId = function () { return 'menu'; };
        this.getTitle = function () { return 'UIAppTemplate'; };
        this.getAllThemes = function () {
            return [
                { "title": "List Views", "theme": "listViews", "icon": "icon-format-align-justify", "listView": true, "component": "", "singlePage": false },
                { "title": "Parallax", "theme": "parallax", "icon": "icon-format-line-spacing", "listView": false, "component": "", "singlePage": false },
                { "title": "Login Pages", "theme": "login", "icon": "icon-lock-open-outline", "listView": false, "component": "", "singlePage": false },
                { "title": "Register Pages", "theme": "register", "icon": "icon-comment-account", "listView": false, "component": "", "singlePage": false },
                { "title": "Image Gallery", "theme": "imageGallery", "icon": "icon-apps", "listView": false, "component": "", "singlePage": false },
                { "title": "Splash Screen", "theme": "splashScreens", "icon": "icon-logout", "listView": false, "component": "", "singlePage": false },
                { "title": "Check Boxs", "theme": "checkBoxes", "icon": "icon-checkbox-marked", "listView": false, "component": "", "singlePage": false },
                { "title": "Search Bars", "theme": "searchBars", "icon": "icon-magnify", "listView": false, "component": "", "singlePage": false },
                { "title": "Typo + small components", "theme": "textViews", "icon": "icon-tumblr", "listView": false, "component": "", "singlePage": false },
                { "title": "Wizard", "theme": "wizard", "icon": "icon-cellphone-settings", "listView": false, "component": "", "singlePage": false },
                { "title": "Spinner", "theme": "spinner", "icon": "icon-image-filter-tilt-shift", "listView": false, "component": "", "singlePage": false },
                { "title": "Tabs", "theme": "tabs", "icon": "icon-view-array", "listView": false, "component": "", "singlePage": false },
                { "title": "Maps", "theme": "maps", "icon": "icon-google-maps", "listView": false, "component": "", "singlePage": false },
                { "title": "QRCode", "theme": "qrcode", "icon": "icon-qrcode", "listView": false, "component": "", "singlePage": false },
                { "title": "Timeline", "theme": "timeline", "icon": "icon-timer", "listView": false, "component": "", "singlePage": false },
                { "title": "Radio Button", "theme": "radioButton", "icon": "icon-radiobox-marked", "listView": false, "component": "", "singlePage": false },
                { "title": "Range", "theme": "range", "icon": "icon-toggle-switch-off", "listView": false, "component": "", "singlePage": false },
                { "title": "Forms", "theme": "form", "icon": "icon-content-paste", "listView": false, "component": "", "singlePage": false },
                { "title": "Toggle", "theme": "toggle", "icon": "icon-toggle-switch", "listView": false, "component": "", "singlePage": false },
                { "title": "Select", "theme": "select", "icon": "icon-menu-down", "listView": true, "component": "", "singlePage": false },
                { "title": "Profile", "theme": "profile", "icon": "icon-account-outline", "listView": false, "component": "", "singlePage": false },
                { "title": "Comments", "theme": "comment", "icon": "icon-comment-outline", "listView": false, "component": "", "singlePage": false },
                { "title": "Payment", "theme": "payment", "icon": "icon-cash", "listView": false, "component": "", "singlePage": false },
                { "title": "Segment", "theme": "segment", "icon": "icon-timelapse", "listView": false, "component": "", "singlePage": false },
                { "title": "Action Sheet", "theme": "actionSheet", "icon": "icon-dots-horizontal", "listView": false, "component": "", "singlePage": false },
                { "title": "Alert", "theme": "alert", "icon": "icon-alert", "listView": false, "component": "", "singlePage": false },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return {
                "background": "assets/images/background/16.jpg",
                "image": "assets/images/logo/login-3.png",
                "title": "Ionic3 UI Theme - Blue Light"
            };
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.prepareParams = function (item) {
            return {
                title: item.title,
                data: {},
                events: _this.getEventsForTheme(item)
            };
        };
    }
    MenuService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('menu')
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__loading_service__["a" /* LoadingService */]])
    ], MenuService);
    return MenuService;
}());

//# sourceMappingURL=menu-service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = {
    "IS_FIREBASE_ENABLED": false,
    "SHOW_START_WIZARD": false,
    "SUBSCRIBE": false,
    "BUY_BUTTON": false,
    "TOAST": {
        "duration": 1000,
        "position": "buttom"
    },
    "FIREBASE_CONFIG": {
        "apiKey": "AIzaSyCYOVrRscQ26G5lAmOSfwrBFncNidaCSOE",
        "authDomain": "ionic3-blue-light.firebaseapp.com",
        "databaseURL": "https://ionic3-blue-light.firebaseio.com",
        "projectId": "ionic3-blue-light",
        "storageBucket": "ionic3-blue-light.appspot.com",
        "messagingSenderId": "519928359775"
    },
    "MAP_KEY": {
        "apiKey": 'AIzaSyA4-GoZzOqYTvxMe52YQZch5JaCFN6ACLg'
    }
};
//# sourceMappingURL=app-settings.js.map

/***/ })

},[284]);
//# sourceMappingURL=main.js.map