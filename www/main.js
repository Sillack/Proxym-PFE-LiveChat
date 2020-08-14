(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./projects/ngx-link-preview/src/lib/components/ngx-link-preview/ngx-link-preview-loading-spinner.ts":
/*!***********************************************************************************************************!*\
  !*** ./projects/ngx-link-preview/src/lib/components/ngx-link-preview/ngx-link-preview-loading-spinner.ts ***!
  \***********************************************************************************************************/
/*! exports provided: NgxLinkPreviewLoadingSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLinkPreviewLoadingSpinner", function() { return NgxLinkPreviewLoadingSpinner; });
/* tslint:disable:max-line-length */
var NgxLinkPreviewLoadingSpinner = "\n<svg class=\"lds-message\" width=\"60px\"  height=\"60px\"  xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\"><g transform=\"translate(20 50)\">\n<circle cx=\"0\" cy=\"0\" r=\"7\" fill=\"#1B364C\" transform=\"scale(0.99275 0.99275)\">\n  <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.375s\" calcMode=\"spline\" keySplines=\"0.3 0 0.7 1;0.3 0 0.7 1\" values=\"0;1;0\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\"></animateTransform>\n</circle>\n</g><g transform=\"translate(40 50)\">\n<circle cx=\"0\" cy=\"0\" r=\"7\" fill=\"#285072\" transform=\"scale(0.773605 0.773605)\">\n  <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.25s\" calcMode=\"spline\" keySplines=\"0.3 0 0.7 1;0.3 0 0.7 1\" values=\"0;1;0\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\"></animateTransform>\n</circle>\n</g><g transform=\"translate(60 50)\">\n<circle cx=\"0\" cy=\"0\" r=\"7\" fill=\"#346B99\" transform=\"scale(0.42525 0.42525)\">\n  <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.125s\" calcMode=\"spline\" keySplines=\"0.3 0 0.7 1;0.3 0 0.7 1\" values=\"0;1;0\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\"></animateTransform>\n</circle>\n</g><g transform=\"translate(80 50)\">\n<circle cx=\"0\" cy=\"0\" r=\"7\" fill=\"#999999\" transform=\"scale(0.113418 0.113418)\">\n  <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"0s\" calcMode=\"spline\" keySplines=\"0.3 0 0.7 1;0.3 0 0.7 1\" values=\"0;1;0\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\"></animateTransform>\n</circle>\n</g></svg>\n";


/***/ }),

/***/ "./projects/ngx-link-preview/src/lib/components/ngx-link-preview/ngx-link-preview.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./projects/ngx-link-preview/src/lib/components/ngx-link-preview/ngx-link-preview.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: NgxLinkPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLinkPreviewComponent", function() { return NgxLinkPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngx_link_preview_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-link-preview-loading-spinner */ "./projects/ngx-link-preview/src/lib/components/ngx-link-preview/ngx-link-preview-loading-spinner.ts");
/* harmony import */ var _services_ngx_link_preview_loading_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ngx-link-preview-loading.manager */ "./projects/ngx-link-preview/src/lib/services/ngx-link-preview-loading.manager.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _services_ngx_link_preview_cache_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ngx-link-preview-cache.service */ "./projects/ngx-link-preview/src/lib/services/ngx-link-preview-cache.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");









function NgxLinkPreviewComponent_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var p_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r147.getSanitizedImageUrl(p_r145), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NgxLinkPreviewComponent_ng_container_1_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var p_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", p_r145["og:site_name"], " ");
} }
function NgxLinkPreviewComponent_ng_container_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxLinkPreviewComponent_ng_container_1_div_1_div_5_div_1_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var p_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", p_r145["og:site_name"]);
} }
function NgxLinkPreviewComponent_ng_container_1_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var p_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", p_r145["og:title"] || p_r145.title, " ");
} }
function NgxLinkPreviewComponent_ng_container_1_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var p_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", p_r145["og:description"] || p_r145.description, " ");
} }
function NgxLinkPreviewComponent_ng_container_1_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var p_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", p_r145["og:url"] || p_r145.url, " ");
} }
var _c0 = function (a0) { return { backgroundImage: a0 }; };
function NgxLinkPreviewComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxLinkPreviewComponent_ng_container_1_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r161); var p_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r159.onLinkClick(p_r145.url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxLinkPreviewComponent_ng_container_1_div_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r161); var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r162.disableDefaultLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgxLinkPreviewComponent_ng_container_1_div_1_div_3_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NgxLinkPreviewComponent_ng_container_1_div_1_div_5_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NgxLinkPreviewComponent_ng_container_1_div_1_div_6_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NgxLinkPreviewComponent_ng_container_1_div_1_div_7_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NgxLinkPreviewComponent_ng_container_1_div_1_div_9_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var p_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", p_r145.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("target", ctx_r146.htmlLinkTarget);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, "url(" + ctx_r146.getSanitizedImageUrl(p_r145) + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r146.showImage && (p_r145["og:image"] || p_r145.image));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r146.showSiteName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r146.showTitle && (p_r145["og:title"] || p_r145.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r146.showDescription && (p_r145["og:description"] || p_r145.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r146.showLinkUrl && (p_r145["og:url"] || p_r145.url));
} }
function NgxLinkPreviewComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxLinkPreviewComponent_ng_container_1_div_1_Template, 10, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var p_r145 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", p_r145.url);
} }
function NgxLinkPreviewComponent_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r165.loadingSpinner, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function NgxLinkPreviewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NgxLinkPreviewComponent_div_2_ng_container_5_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r164.childNodes.length === 0);
} }
var _c1 = ["*"];
var NgxLinkPreviewComponent = /** @class */ (function () {
    function NgxLinkPreviewComponent(sanitizer, cacheSvc) {
        this.sanitizer = sanitizer;
        this.cacheSvc = cacheSvc;
        /** Plain links string array */
        this.links = [];
        /** Target url will be attached as encodeURI(btoa(url)), so it must be decoded on the server */
        this.queryParamName = 'url';
        /** boolean: show image in preview */
        this.showImage = true;
        /** boolean: show site name in preview */
        this.showSiteName = true;
        /** boolean: show title in preview */
        this.showTitle = true;
        /** boolean: show description in preview */
        this.showDescription = true;
        /** boolean: show link url in preview */
        this.showLinkUrl = false;
        /** boolean: use cache to display previews faster on next rendering */
        this.useCache = true;
        /** number: max age the data cache of a link preview should be used */
        this.maxCacheAgeMs = 1000 * 60 * 60 * 24 * 7; // 7 days
        /** boolean: show loading indicator */
        this.showLoadingIndicator = true;
        /**
         * boolean: whether the <a href="..."></a> link should be clickable.
         * This is a question of context security. Otherwise use (previewClick) event.
         */
        this.useHtmlLinkDefaultClickEvent = false;
        /**
         * HtmlLinkTarget: where the HTML link should be opened on click.
         * Only has an effect if [useHtmlLinkDefaultClickEvent]="true"
         */
        this.htmlLinkTarget = '_blank';
        /** Event emitter: on click to handle the click event, emits the clicked URL */
        this.previewClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Scanned links[] from @Input() links & @Input() parseForLinks */
        this.scannedLinks = [];
        /** Array of metadata objects where the preview is rendered from */
        this.previews = [];
        this.loadingMgr = new _services_ngx_link_preview_loading_manager__WEBPACK_IMPORTED_MODULE_3__["NgxLinkPreviewLoadingManager"]();
        this.loadingSpinner = this.sanitizer.bypassSecurityTrustHtml(_ngx_link_preview_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxLinkPreviewLoadingSpinner"]);
        this.showLoadingSpinner = false;
        this.subscriptions = [];
        this.subscribeLoadingMgrHasJobs();
    }
    NgxLinkPreviewComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeAll();
    };
    /**
     * Preview will be refreshed every time a change is recognized
     */
    NgxLinkPreviewComponent.prototype.ngOnChanges = function (changes) {
        this.init();
    };
    /**
     * Subscribe to loading manager has jobs stream
     */
    NgxLinkPreviewComponent.prototype.subscribeLoadingMgrHasJobs = function () {
        var _this = this;
        this.subscriptions.push(this.loadingMgr.hasPendingJobs$.subscribe(function (hasJobs) {
            _this.showLoadingSpinner = hasJobs;
        }));
    };
    /**
     * Unsubscribe all subscriptions
     */
    NgxLinkPreviewComponent.prototype.unsubscribeAll = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    /**
     * Init preview
     */
    NgxLinkPreviewComponent.prototype.init = function () {
        var e_1, _a;
        this.scannedLinks = [];
        this.previews = [];
        this.checkInputParameters();
        // Find links in string
        if (this.parseForLinksStr) {
            // Parse for links and push to links
            var links = this.parseStringForLinks(this.parseForLinksStr);
            this.scannedLinks = this.scannedLinks.concat(links);
        }
        // Add links passed as string[]
        if (this.links && this.links.length) {
            this.scannedLinks = this.scannedLinks.concat(this.links);
        }
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.scannedLinks), _c = _b.next(); !_c.done; _c = _b.next()) {
                var link = _c.value;
                this.loadCacheOrGet(link);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Load cache or get from api
     */
    NgxLinkPreviewComponent.prototype.loadCacheOrGet = function (link) {
        var _this = this;
        var encodedLink = this.encodeUrlSafe(link);
        var requestUrl = this.apiRoute + '?' + this.queryParamName + '=' + encodedLink;
        // Try to load from cache, use encodedLink as key
        var cacheItem = this.cacheSvc.getCacheItem(encodedLink);
        if (this.useCache && cacheItem && !this.isCacheOutdated(cacheItem)) {
            this.previews.push(cacheItem);
        }
        else {
            this.loadingMgr.addTask(encodedLink);
            this.getApiEndpoint$(requestUrl)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
                resp.timestampMs = new Date().valueOf();
                return resp;
            }))
                .subscribe(function (resp) {
                _this.cacheSvc.updateCacheItem(encodedLink, resp);
                _this.loadingMgr.removeTask(encodedLink);
                _this.previews.push(resp);
            });
        }
    };
    /**
     * Check if cache item is outdated by max-cache-age
     */
    NgxLinkPreviewComponent.prototype.isCacheOutdated = function (item) {
        var now = new Date().valueOf();
        var maxValidTimestamp = now - this.maxCacheAgeMs;
        return maxValidTimestamp > item.timestampMs;
    };
    /**
     * On link click emit to EventEmitter
     */
    NgxLinkPreviewComponent.prototype.onLinkClick = function (url) {
        this.previewClicked.emit(url);
    };
    NgxLinkPreviewComponent.prototype.disableDefaultLink = function (event) {
        if (!this.useHtmlLinkDefaultClickEvent) {
            event.preventDefault();
        }
    };
    /**
     * Encode string url safe
     */
    NgxLinkPreviewComponent.prototype.encodeUrlSafe = function (url) {
        return encodeURI(btoa(url));
    };
    /**
     * Check required input parameters
     */
    NgxLinkPreviewComponent.prototype.checkInputParameters = function () {
        if (!this.apiRoute) {
            throw new Error('<ngx-link-preview></ngx-link-preview> Missing [apiRoute] input parameter');
        }
        if (!this.getApiEndpoint$) {
            throw new Error('<ngx-link-preview></ngx-link-preview> Missing [getApiEndpoint$] input parameter');
        }
    };
    /**
     * Parse string for links
     */
    NgxLinkPreviewComponent.prototype.parseStringForLinks = function (msg) {
        var links = msg.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&\/=]*)/gim);
        if (links) {
            return links;
        }
        else {
            return [];
        }
    };
    /**
     * Get sanitized image url due data often contains url errors
     */
    NgxLinkPreviewComponent.prototype.getSanitizedImageUrl = function (p) {
        if (p['image'].startsWith('https')) {
            return p['image'];
        }
        else if (p['image'].startsWith('www')) {
            return p['image'];
        }
        else if (p['image'].startsWith('//www')) {
            return 'https://' + p['image'].slice(2);
        }
        else if (p['image'].startsWith('/yts/')) {
            return 'https://' + p.source + p['image'];
        }
    };
    NgxLinkPreviewComponent.ɵfac = function NgxLinkPreviewComponent_Factory(t) { return new (t || NgxLinkPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_ngx_link_preview_cache_service__WEBPACK_IMPORTED_MODULE_6__["NgxLinkPreviewCacheService"])); };
    NgxLinkPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxLinkPreviewComponent, selectors: [["ngx-link-preview"]], inputs: { links: "links", parseForLinksStr: "parseForLinksStr", getApiEndpoint$: "getApiEndpoint$", apiRoute: "apiRoute", queryParamName: "queryParamName", showImage: "showImage", showSiteName: "showSiteName", showTitle: "showTitle", showDescription: "showDescription", showLinkUrl: "showLinkUrl", useCache: "useCache", maxCacheAgeMs: "maxCacheAgeMs", showLoadingIndicator: "showLoadingIndicator", useHtmlLinkDefaultClickEvent: "useHtmlLinkDefaultClickEvent", htmlLinkTarget: "htmlLinkTarget" }, outputs: { previewClicked: "previewClicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()], ngContentSelectors: _c1, decls: 3, vars: 2, consts: [[1, "ngx-link-preview-container"], [4, "ngFor", "ngForOf"], ["class", "loading-spinner", 4, "ngIf"], ["class", "og-link-preview", 3, "click", 4, "ngIf"], [1, "og-link-preview", 3, "click"], [1, "row", 3, "href", "target", "click"], [1, "col", "preview-image", 3, "ngStyle"], ["class", "image", 4, "ngIf"], [1, "col", "text-data"], ["class", "header", 4, "ngIf"], ["class", "title", 4, "ngIf"], ["class", "description", 4, "ngIf"], [1, "footer"], ["class", "url", 4, "ngIf"], [1, "image"], ["alt", "", 3, "src"], [1, "header"], ["class", "site-name", 4, "ngIf"], [1, "site-name"], [1, "title"], [1, "description"], [1, "url"], [1, "loading-spinner"], [1, "wrapper-custom"], ["ngContentLoading", ""], [4, "ngIf"], [1, "wrapper-default", 3, "innerHTML"]], template: function NgxLinkPreviewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxLinkPreviewComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxLinkPreviewComponent_div_2_Template, 6, 1, "div", 2);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.previews);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLoadingIndicator && ctx.showLoadingSpinner);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"]], styles: [".ngx-link-preview-container[_ngcontent-%COMP%]   .og-link-preview[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: rgba(200, 200, 200, 0.25);\n}\n.ngx-link-preview-container[_ngcontent-%COMP%]   .og-link-preview[_ngcontent-%COMP%]:hover {\n  background-color: rgba(200, 200, 200, 0.4);\n}\n.ngx-link-preview-container[_ngcontent-%COMP%]   .og-link-preview[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  text-decoration: none;\n  color: unset;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.ngx-link-preview-container[_ngcontent-%COMP%]   .og-link-preview[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  background-position: -9999px;\n  background-repeat: no-repeat;\n}\n.ngx-link-preview-container[_ngcontent-%COMP%]   .og-link-preview[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.preview-image[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.ngx-link-preview-container[_ngcontent-%COMP%]   .og-link-preview[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n.ngx-link-preview-container[_ngcontent-%COMP%]   .og-link-preview[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 64px;\n  height: 13vw;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n.ngx-link-preview-container[_ngcontent-%COMP%]   .og-link-preview[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n}\n.ngx-link-preview-container[_ngcontent-%COMP%]   .og-link-preview[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  max-height: 40px;\n  font-size: 12px;\n  -webkit-filter: contrast(0.8);\n          filter: contrast(0.8);\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ngx-link-preview-container[_ngcontent-%COMP%]   .og-link-preview[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 4px;\n  font-size: 12px;\n  -webkit-filter: contrast(0.7);\n          filter: contrast(0.7);\n}\n.ngx-link-preview-container[_ngcontent-%COMP%]   .og-link-preview[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 12px;\n  -webkit-filter: contrast(0.7);\n          filter: contrast(0.7);\n  margin-top: 4px;\n}\n.loading-spinner[_ngcontent-%COMP%]   .wrapper-custom[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.loading-spinner[_ngcontent-%COMP%]   .wrapper-default[_ngcontent-%COMP%] {\n  height: 40px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.modern[_nghost-%COMP%]   .og-link-preview[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  -webkit-box-align: stretch;\n          align-items: stretch;\n}\n.modern[_nghost-%COMP%]   .og-link-preview[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n.modern[_nghost-%COMP%]   .og-link-preview[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.modern[_nghost-%COMP%]   .og-link-preview[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.modern[_nghost-%COMP%]   .og-link-preview[_ngcontent-%COMP%]   .col.preview-image[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center center !important;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaXMvQnVyZWF1L1Byb3h5bS1QRkUvcHJvamVjdHMvbmd4LWxpbmstcHJldmlldy9zcmMvbGliL2NvbXBvbmVudHMvbmd4LWxpbmstcHJldmlldy9uZ3gtbGluay1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmd4LWxpbmstcHJldmlldy9zcmMvbGliL2NvbXBvbmVudHMvbmd4LWxpbmstcHJldmlldy9uZ3gtbGluay1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNHO0VBQ0csa0JBQUE7RUFDQSwyQ0FBQTtBQ0FOO0FERU07RUFDRywwQ0FBQTtBQ0FUO0FER007RUFDRyxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUdBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDSFQ7QURLUztFQUNHLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0VBRUEsNEJBQUE7RUFDQSw0QkFBQTtBQ0paO0FETVk7RUFFRyxpQkFBQTtBQ0xmO0FEWVk7RUFDRyxrQkFBQTtBQ1ZmO0FEWWU7RUFDRyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDVmxCO0FEY1k7RUFDRyxnQkFBQTtFQUNBLGVBQUE7QUNaZjtBRGVZO0VBQ0csZUFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDZGY7QURpQlk7RUFDRyxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtBQ2ZmO0FEcUJZO0VBQ0csb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsZUFBQTtBQ25CZjtBRDhCRztFQUNHLGtCQUFBO0FDNUJOO0FEOEJHO0VBQ0csWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDNUJOO0FEbUNNO0VBQ0csMEJBQUE7VUFBQSxvQkFBQTtBQ2hDVDtBRG1DTTtFQUNHLG1DQUFBO1VBQUEsa0NBQUE7QUNqQ1Q7QURvQ007RUFDRyxZQUFBO0FDbENUO0FEcUNTO0VBQ0csVUFBQTtBQ25DWjtBRHVDTTtFQUNHLHNCQUFBO0VBQ0EsNkNBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0FDckNUIiwiZmlsZSI6InByb2plY3RzL25neC1saW5rLXByZXZpZXcvc3JjL2xpYi9jb21wb25lbnRzL25neC1saW5rLXByZXZpZXcvbmd4LWxpbmstcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZ3gtbGluay1wcmV2aWV3LWNvbnRhaW5lciB7XG4gICAub2ctbGluay1wcmV2aWV3IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yNSk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjQpO1xuICAgICAgfVxuXG4gICAgICAucm93IHtcbiAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAgICAgICAgLy8gUmVtb3ZlIGJyb3dzZXIgbGluayBkZWZhdWx0c1xuICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgY29sb3I6IHVuc2V0O1xuICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICAgICAgIC5jb2wge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIC8vIEhpZGUgYmcgaW4gbm9ybWFsIHRoZW1lXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTk5OXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgICAgICAgICAgJi5wcmV2aWV3LWltYWdlIHtcbiAgICAgICAgICAgICAgLy8gcGFkZGluZzogNXB4IDAgNXB4IDVweDtcbiAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLnRleHQtZGF0YSB7XG4gICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDZweCA2cHggNHB4IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxM3Z3O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgICAgICAgICAvL21heC1oZWlnaHQ6IDUycHg7IC8vIDQgbGluZXNcbiAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7IC8vIDMgbGluZXNcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgIGZpbHRlcjogY29udHJhc3QoMC44KTtcbiAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICBmaWx0ZXI6IGNvbnRyYXN0KDAuNyk7XG5cbiAgICAgICAgICAgICAgIC5zaXRlLW5hbWUge1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgIGZpbHRlcjogY29udHJhc3QoMC43KTtcbiAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcblxuICAgICAgICAgICAgICAgLnVybCB7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG59XG5cbi5sb2FkaW5nLXNwaW5uZXIge1xuICAgLndyYXBwZXItY3VzdG9tIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIH1cbiAgIC53cmFwcGVyLWRlZmF1bHQge1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIH1cbn1cblxuLy8gTW9kZXJuIHRoZW1lXG46aG9zdC5tb2Rlcm4ge1xuICAgLm9nLWxpbmstcHJldmlldyB7XG4gICAgICAucm93IHtcbiAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgfVxuXG4gICAgICAuY29sIHtcbiAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5pbWFnZSB7XG4gICAgICAgICB3aWR0aDogMTUwcHg7XG5cbiAgICAgICAgIC8vIEhpZGUgaW1nIGluIG1vZGVybiB0aGVtZSwgdXNlIGNvbC5wcmV2aWV3LWltYWdlIGJhY2tncm91bmQgaW5zdGVhZFxuICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jb2wucHJldmlldy1pbWFnZSB7XG4gICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICAgICAgfVxuICAgfVxufVxuIiwiLm5neC1saW5rLXByZXZpZXctY29udGFpbmVyIC5vZy1saW5rLXByZXZpZXcge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yNSk7XG59XG4ubmd4LWxpbmstcHJldmlldy1jb250YWluZXIgLm9nLWxpbmstcHJldmlldzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC40KTtcbn1cbi5uZ3gtbGluay1wcmV2aWV3LWNvbnRhaW5lciAub2ctbGluay1wcmV2aWV3IC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHVuc2V0O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5uZ3gtbGluay1wcmV2aWV3LWNvbnRhaW5lciAub2ctbGluay1wcmV2aWV3IC5yb3cgLmNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05OTk5cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4ubmd4LWxpbmstcHJldmlldy1jb250YWluZXIgLm9nLWxpbmstcHJldmlldyAucm93IC5jb2wucHJldmlldy1pbWFnZSB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuLm5neC1saW5rLXByZXZpZXctY29udGFpbmVyIC5vZy1saW5rLXByZXZpZXcgLnJvdyAuY29sIC5pbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5uZ3gtbGluay1wcmV2aWV3LWNvbnRhaW5lciAub2ctbGluay1wcmV2aWV3IC5yb3cgLmNvbCAuaW1hZ2UgaW1nIHtcbiAgbWF4LWhlaWdodDogNjRweDtcbiAgaGVpZ2h0OiAxM3Z3O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubmd4LWxpbmstcHJldmlldy1jb250YWluZXIgLm9nLWxpbmstcHJldmlldyAucm93IC5jb2wgLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm5neC1saW5rLXByZXZpZXctY29udGFpbmVyIC5vZy1saW5rLXByZXZpZXcgLnJvdyAuY29sIC5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmaWx0ZXI6IGNvbnRyYXN0KDAuOCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLm5neC1saW5rLXByZXZpZXctY29udGFpbmVyIC5vZy1saW5rLXByZXZpZXcgLnJvdyAuY29sIC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmlsdGVyOiBjb250cmFzdCgwLjcpO1xufVxuLm5neC1saW5rLXByZXZpZXctY29udGFpbmVyIC5vZy1saW5rLXByZXZpZXcgLnJvdyAuY29sIC5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZpbHRlcjogY29udHJhc3QoMC43KTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuLmxvYWRpbmctc3Bpbm5lciAud3JhcHBlci1jdXN0b20ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9hZGluZy1zcGlubmVyIC53cmFwcGVyLWRlZmF1bHQge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG46aG9zdC5tb2Rlcm4gLm9nLWxpbmstcHJldmlldyAucm93IHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG46aG9zdC5tb2Rlcm4gLm9nLWxpbmstcHJldmlldyAuY29sIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbjpob3N0Lm1vZGVybiAub2ctbGluay1wcmV2aWV3IC5pbWFnZSB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbjpob3N0Lm1vZGVybiAub2ctbGluay1wcmV2aWV3IC5pbWFnZSBpbWcge1xuICBvcGFjaXR5OiAwO1xufVxuOmhvc3QubW9kZXJuIC5vZy1saW5rLXByZXZpZXcgLmNvbC5wcmV2aWV3LWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbn0iXX0= */"] });
    return NgxLinkPreviewComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxLinkPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngx-link-preview',
                templateUrl: './ngx-link-preview.component.html',
                styleUrls: ['./ngx-link-preview.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }, { type: _services_ngx_link_preview_cache_service__WEBPACK_IMPORTED_MODULE_6__["NgxLinkPreviewCacheService"] }]; }, { links: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], parseForLinksStr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], getApiEndpoint$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], apiRoute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], queryParamName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showSiteName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showDescription: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showLinkUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], useCache: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxCacheAgeMs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showLoadingIndicator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], useHtmlLinkDefaultClickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], htmlLinkTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], previewClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./projects/ngx-link-preview/src/lib/ngx-link-preview.module.ts":
/*!**********************************************************************!*\
  !*** ./projects/ngx-link-preview/src/lib/ngx-link-preview.module.ts ***!
  \**********************************************************************/
/*! exports provided: NgxLinkPreviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLinkPreviewModule", function() { return NgxLinkPreviewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_ngx_link_preview_ngx_link_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ngx-link-preview/ngx-link-preview.component */ "./projects/ngx-link-preview/src/lib/components/ngx-link-preview/ngx-link-preview.component.ts");
/* harmony import */ var _services_ngx_link_preview_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/ngx-link-preview-cache.service */ "./projects/ngx-link-preview/src/lib/services/ngx-link-preview-cache.service.ts");





var NgxLinkPreviewModule = /** @class */ (function () {
    function NgxLinkPreviewModule() {
    }
    NgxLinkPreviewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxLinkPreviewModule });
    NgxLinkPreviewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxLinkPreviewModule_Factory(t) { return new (t || NgxLinkPreviewModule)(); }, providers: [_services_ngx_link_preview_cache_service__WEBPACK_IMPORTED_MODULE_3__["NgxLinkPreviewCacheService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
    return NgxLinkPreviewModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxLinkPreviewModule, { declarations: [_components_ngx_link_preview_ngx_link_preview_component__WEBPACK_IMPORTED_MODULE_2__["NgxLinkPreviewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_components_ngx_link_preview_ngx_link_preview_component__WEBPACK_IMPORTED_MODULE_2__["NgxLinkPreviewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxLinkPreviewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_ngx_link_preview_ngx_link_preview_component__WEBPACK_IMPORTED_MODULE_2__["NgxLinkPreviewComponent"]],
                exports: [_components_ngx_link_preview_ngx_link_preview_component__WEBPACK_IMPORTED_MODULE_2__["NgxLinkPreviewComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                providers: [_services_ngx_link_preview_cache_service__WEBPACK_IMPORTED_MODULE_3__["NgxLinkPreviewCacheService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./projects/ngx-link-preview/src/lib/services/ngx-link-preview-cache.service.ts":
/*!**************************************************************************************!*\
  !*** ./projects/ngx-link-preview/src/lib/services/ngx-link-preview-cache.service.ts ***!
  \**************************************************************************************/
/*! exports provided: NgxLinkPreviewCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLinkPreviewCacheService", function() { return NgxLinkPreviewCacheService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NgxLinkPreviewCacheService = /** @class */ (function () {
    function NgxLinkPreviewCacheService() {
        /** Holds the current cache state (RAM cache) */
        this.cache = {};
        /** localStorage cache key */
        this.localStorageKey = 'NgxLinkPreviewCache_q16qy4aOCzm2';
        this.loadCacheFromLocalStorage();
    }
    /**
     * Try to load the cache from localstorage
     */
    NgxLinkPreviewCacheService.prototype.loadCacheFromLocalStorage = function () {
        try {
            this.cache = JSON.parse(localStorage.getItem(this.localStorageKey));
        }
        catch (e) {
            this.cache = {};
        }
    };
    /**
     * Update item in RAM cache
     */
    NgxLinkPreviewCacheService.prototype.updateCacheItem = function (cacheKey, data) {
        if (!this.cache) {
            this.cache = {};
        }
        this.cache[cacheKey] = data;
        this.saveCache();
    };
    /**
     * Get item from cache
     */
    NgxLinkPreviewCacheService.prototype.getCacheItem = function (cacheKey) {
        var cacheData;
        try {
            cacheData = this.cache[cacheKey];
        }
        catch (e) {
            cacheData = undefined;
        }
        if (!cacheData) {
            cacheData = undefined;
        }
        return cacheData;
    };
    /**
     * Save whole cache to localStorage
     */
    NgxLinkPreviewCacheService.prototype.saveCache = function () {
        try {
            localStorage.setItem(this.localStorageKey, JSON.stringify(this.cache));
        }
        catch (e) {
            console.warn('Failed to save OgLinkPreviewCache in localStorage!', e);
        }
    };
    NgxLinkPreviewCacheService.ɵfac = function NgxLinkPreviewCacheService_Factory(t) { return new (t || NgxLinkPreviewCacheService)(); };
    NgxLinkPreviewCacheService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgxLinkPreviewCacheService, factory: NgxLinkPreviewCacheService.ɵfac });
    return NgxLinkPreviewCacheService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxLinkPreviewCacheService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./projects/ngx-link-preview/src/lib/services/ngx-link-preview-loading.manager.ts":
/*!****************************************************************************************!*\
  !*** ./projects/ngx-link-preview/src/lib/services/ngx-link-preview-loading.manager.ts ***!
  \****************************************************************************************/
/*! exports provided: NgxLinkPreviewLoadingManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLinkPreviewLoadingManager", function() { return NgxLinkPreviewLoadingManager; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var NgxLinkPreviewLoadingManager = /** @class */ (function () {
    function NgxLinkPreviewLoadingManager() {
        /** The loading stack, holding an item for each */
        this.loadingStack = [];
        /** Observable to retrieve if has pending jobs */
        this.hasPendingJobs$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
    /**
     * Add task to stack
     */
    NgxLinkPreviewLoadingManager.prototype.addTask = function (name) {
        name = this.getTaskName(name);
        this.loadingStack.push(name);
        this.emitHasPendingJobs();
    };
    /**
     * Remove task from stack
     */
    NgxLinkPreviewLoadingManager.prototype.removeTask = function (name) {
        name = this.getTaskName(name);
        if (this.loadingStack.length) {
            var taskIndex = this.loadingStack.indexOf(name);
            if (taskIndex !== -1) {
                this.loadingStack.splice(taskIndex, 1);
            }
            else {
                console.error("[NgxLinkPreviewLoadingManager] Task [" + name + "] not found and can't be removed.");
            }
        }
        else {
            console.error('[NgxLinkPreviewLoadingManager] No pending task available for remove');
        }
        this.emitHasPendingJobs();
    };
    /**
     * Get task name
     */
    NgxLinkPreviewLoadingManager.prototype.getTaskName = function (name) {
        return name ? name : 'UNKNOWN_TASK';
    };
    /**
     * Emit if has loading jobs
     */
    NgxLinkPreviewLoadingManager.prototype.emitHasPendingJobs = function () {
        if (this.loadingStack.length) {
            this.hasPendingJobs$.next(true);
        }
        else {
            this.hasPendingJobs$.next(false);
        }
    };
    return NgxLinkPreviewLoadingManager;
}());



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/components/chat-filedrop/file-drop.component.ts":
/*!******************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/components/chat-filedrop/file-drop.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FileDropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDropComponent", function() { return FileDropComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");



var _c0 = ["*"];
var FileDropComponent = /** @class */ (function () {
    function FileDropComponent() {
        this.fileUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.enabled = true;
        this.isDropTarget = false;
    }
    FileDropComponent.prototype.ngOnInit = function () {
    };
    FileDropComponent.prototype.onDragOver = function (event) {
        if (this.enabled) {
            event.preventDefault();
            event.stopPropagation();
            this.isDropTarget = true;
        }
    };
    FileDropComponent.prototype.onDragLeave = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.isDropTarget = false;
    };
    FileDropComponent.prototype.onDrop = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i, dataTransferItem;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.enabled) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.isDropTarget = false;
                    // tslint:disable-next-line:prefer-for-of
                    for (i = 0; i < event.dataTransfer.items.length; i++) {
                        dataTransferItem = event.dataTransfer.items[i];
                        if (dataTransferItem.kind === 'file') {
                            this.fileUpload.emit(dataTransferItem.getAsFile());
                        }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    FileDropComponent.ɵfac = function FileDropComponent_Factory(t) { return new (t || FileDropComponent)(); };
    FileDropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FileDropComponent, selectors: [["ngx-chat-filedrop"]], hostBindings: function FileDropComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragover", function FileDropComponent_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragenter", function FileDropComponent_dragenter_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function FileDropComponent_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("dragexit", function FileDropComponent_dragexit_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function FileDropComponent_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
        } }, inputs: { dropMessage: "dropMessage", enabled: "enabled" }, outputs: { fileUpload: "fileUpload" }, ngContentSelectors: _c0, decls: 5, vars: 3, consts: [[1, "drop-message"]], template: function FileDropComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("drop-message--visible", ctx.isDropTarget);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.dropMessage, " ");
        } }, styles: [".drop-message[_ngcontent-%COMP%] {\n  pointer-events: none;\n  display: none;\n}\n.drop-message--visible[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: center;\n  font-size: 1.5em;\n  z-index: 999;\n  background-color: rgba(255, 255, 255, 0.6);\n  padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaXMvQnVyZWF1L1Byb3h5bS1QRkUvcHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9jaGF0LWZpbGVkcm9wL2ZpbGUtZHJvcC5jb21wb25lbnQubGVzcyIsInByb2plY3RzL3Byb3h5bS9uZ3gtY2hhdC9zcmMvbGliL2NvbXBvbmVudHMvY2hhdC1maWxlZHJvcC9maWxlLWRyb3AuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLGFBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7QUNGRiIsImZpbGUiOiJwcm9qZWN0cy9wcm94eW0vbmd4LWNoYXQvc3JjL2xpYi9jb21wb25lbnRzL2NoYXQtZmlsZWRyb3AvZmlsZS1kcm9wLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3AtbWVzc2FnZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZHJvcC1tZXNzYWdlLS12aXNpYmxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBwYWRkaW5nOiAxZW07XG59XG4iLCIuZHJvcC1tZXNzYWdlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZHJvcC1tZXNzYWdlLS12aXNpYmxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIHBhZGRpbmc6IDFlbTtcbn1cbiJdfQ== */"] });
    return FileDropComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileDropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngx-chat-filedrop',
                templateUrl: './file-drop.component.html',
                styleUrls: ['./file-drop.component.less']
            }]
    }], function () { return []; }, { fileUpload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dropMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['dragover', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['dragenter', ['$event']]
        }], onDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['dragleave', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['dragexit', ['$event']]
        }], onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['drop', ['$event']]
        }] }); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/components/chat-message-input/chat-message-input.component.ts":
/*!********************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/components/chat-message-input/chat-message-input.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ChatMessageInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageInputComponent", function() { return ChatMessageInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_adapters_xmpp_plugins_multi_user_chat_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/adapters/xmpp/plugins/multi-user-chat.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/multi-user-chat.plugin.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chat-service */ "./projects/proxym/ngx-chat/src/lib/services/chat-service.ts");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/text-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");






var _c0 = ["chatInput"];
var ChatMessageInputComponent = /** @class */ (function () {
    function ChatMessageInputComponent(chatService) {
        this.chatService = chatService;
        this.message = '';
    }
    ChatMessageInputComponent.prototype.ngOnChanges = function () {
        this.message = this.message + this.emoji;
    };
    ChatMessageInputComponent.prototype.ngOnInit = function () {
    };
    ChatMessageInputComponent.prototype.onSendMessage = function () {
        if (this.message.trim().length > 0) {
            if (this.room) {
                this.chatService.getPlugin(_services_adapters_xmpp_plugins_multi_user_chat_plugin__WEBPACK_IMPORTED_MODULE_1__["MultiUserChatPlugin"]).sendMessage(this.room, this.message);
            }
            else {
                this.chatService.sendMessage(this.contact.jidBare.toString(), this.message);
            }
            this.message = '';
        }
        return false;
    };
    ChatMessageInputComponent.prototype.focus = function () {
        this.chatInput.nativeElement.focus();
    };
    ChatMessageInputComponent.ɵfac = function ChatMessageInputComponent_Factory(t) { return new (t || ChatMessageInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatServiceToken"])); };
    ChatMessageInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatMessageInputComponent, selectors: [["ngx-chat-message-input"]], viewQuery: function ChatMessageInputComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chatInput = _t.first);
        } }, inputs: { contact: "contact", room: "room", emoji: "emoji" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 2, vars: 2, consts: [["cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "5", 1, "chat-input", 3, "ngModel", "placeholder", "ngModelChange", "keydown.enter"], ["chatInput", ""]], template: function ChatMessageInputComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatMessageInputComponent_Template_textarea_ngModelChange_0_listener($event) { return ctx.message = $event; })("keydown.enter", function ChatMessageInputComponent_Template_textarea_keydown_enter_0_listener() { return ctx.onSendMessage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.chatService.translations.placeholder);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
        } }, directives: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_3__["CdkTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Helvetica\", \"Arial\", serif;\n}\n.chat-input[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  font-size: 0.8em;\n  padding: 0;\n  display: block;\n  resize: none;\n  overflow-x: hidden;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaXMvQnVyZWF1L1Byb3h5bS1QRkUvcHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9jaGF0LW1lc3NhZ2UtaW5wdXQvY2hhdC1tZXNzYWdlLWlucHV0LmNvbXBvbmVudC5sZXNzIiwicHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9jaGF0LW1lc3NhZ2UtaW5wdXQvY2hhdC1tZXNzYWdlLWlucHV0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0FDREY7QURJQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNGRiIsImZpbGUiOiJwcm9qZWN0cy9wcm94eW0vbmd4LWNoYXQvc3JjL2xpYi9jb21wb25lbnRzL2NoYXQtbWVzc2FnZS1pbnB1dC9jaGF0LW1lc3NhZ2UtaW5wdXQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zdHlsZSc7XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNlcmlmXG59XG5cbi5jaGF0LWlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdXRsaW5lOiBub25lO1xufVxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2VyaWY7XG59XG4uY2hhdC1pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICByZXNpemU6IG5vbmU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiJdfQ== */"] });
    return ChatMessageInputComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMessageInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-chat-message-input',
                templateUrl: './chat-message-input.component.html',
                styleUrls: ['./chat-message-input.component.less']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatServiceToken"]]
            }] }]; }, { contact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], room: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], chatInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chatInput']
        }], emoji: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/components/chat-message-link/chat-message-link.component.ts":
/*!******************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/components/chat-message-link/chat-message-link.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: LinkOpenerToken, ChatMessageLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkOpenerToken", function() { return LinkOpenerToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageLinkComponent", function() { return ChatMessageLinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _ngx_link_preview_src_lib_components_ngx_link_preview_ngx_link_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../ngx-link-preview/src/lib/components/ngx-link-preview/ngx-link-preview.component */ "./projects/ngx-link-preview/src/lib/components/ngx-link-preview/ngx-link-preview.component.ts");







function ChatMessageLinkComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-link-preview", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("links", ctx_r45.links)("getApiEndpoint$", ctx_r45.apiCallbackFn);
} }
function ChatMessageLinkComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatMessageLinkComponent_div_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.onClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r46.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r46.imgFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
/**
 * You can provide your own implementation for {@link LinkOpener} to override link opening e.g. when using Cordova.
 */
var LinkOpenerToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('pazznetworkNgxChatLinkOpener');
var ChatMessageLinkComponent = /** @class */ (function () {
    function ChatMessageLinkComponent(router, platformLocation, httpClient, linkOpener) {
        var _this = this;
        this.router = router;
        this.platformLocation = platformLocation;
        this.httpClient = httpClient;
        this.linkOpener = linkOpener;
        this.links = ['https://api.linkpreview.net/?key=171b4f88b0a3251101568e0f1ef7afb3&q=' +
                this.link];
        this.imgFile = __webpack_require__(/*! ../../../../../../../src/assets/file_attach.png */ "./src/assets/file_attach.png");
        this.colors2 = [
            '',
            'red',
            'pink',
            'purple',
            'deep-purple',
            'indigo',
            'blue',
            'light-blue',
            'cyan',
            'teal',
            'green',
            'light-green',
            'lime',
            'yellow',
            'amber',
            'orange',
            'deep-orange',
            'brown',
            'grey',
            'blue-grey'
        ];
        this.colors = [
            '',
            'blue',
            'amber',
            'teal'
        ];
        this.apiCallbackFn = function (route) {
            // return this.http.get(route);
            // Hard code for demo purposes:
            return _this.httpClient.get('https://api.linkpreview.net/?key=171b4f88b0a3251101568e0f1ef7afb3&q=' +
                _this.link).
                pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2500));
        };
    }
    ChatMessageLinkComponent.prototype.ngOnInit = function () {
        this.links = ['https://api.linkpreview.net/?key=171b4f88b0a3251101568e0f1ef7afb3&q=' +
                this.link];
    };
    ChatMessageLinkComponent.prototype.previewClick = function (link) {
        alert('Link:\n' + link + '\nwas clicked!');
    };
    ChatMessageLinkComponent.prototype.onClick = function ($event) {
        if (this.linkOpener) {
            $event.preventDefault();
            this.linkOpener.openLink(this.link);
        }
        else if (this.isInApp()) {
            $event.preventDefault();
            var linkParser = document.createElement('a');
            linkParser.href = this.link;
            this.router.navigateByUrl(linkParser.pathname);
        }
    };
    ChatMessageLinkComponent.prototype.isInApp = function () {
        return this.link.startsWith(this.appUrl());
    };
    ChatMessageLinkComponent.prototype.appUrl = function () {
        return window.location.protocol + '//' + window.location.host + this.platformLocation.getBaseHrefFromDOM();
    };
    ChatMessageLinkComponent.ɵfac = function ChatMessageLinkComponent_Factory(t) { return new (t || ChatMessageLinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LinkOpenerToken, 8)); };
    ChatMessageLinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatMessageLinkComponent, selectors: [["ngx-chat-message-link"]], decls: 4, vars: 4, consts: [["target", "_blank", "rel", "noopener", 3, "href", "click"], [4, "ngIf"], ["apiRoute", "demo", 3, "links", "getApiEndpoint$"], [2, "max-width", "73px", 3, "src"]], template: function ChatMessageLinkComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatMessageLinkComponent_Template_a_click_0_listener($event) { return ctx.onClick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatMessageLinkComponent_div_2_Template, 2, 2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatMessageLinkComponent_div_3_Template, 3, 2, "div", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.link.includes(".com") || ctx.link.includes(".fr")) && !ctx.link.includes("https://www.uib-net.com/#/app/public/offre/content"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.link.includes(".jpg") && !ctx.link.includes(".png") && !ctx.link.includes(".jpeg") && !ctx.link.includes(".com") && !ctx.link.includes(".fr") && !ctx.link.includes(".mp4"));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ngx_link_preview_src_lib_components_ngx_link_preview_ngx_link_preview_component__WEBPACK_IMPORTED_MODULE_5__["NgxLinkPreviewComponent"]], styles: ["a[_ngcontent-%COMP%] {\n  color: #198cff;\n  cursor: pointer;\n}\na[_ngcontent-%COMP%]:visited {\n  color: #9a46e8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaXMvQnVyZWF1L1Byb3h5bS1QRkUvcHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9jaGF0LW1lc3NhZ2UtbGluay9jaGF0LW1lc3NhZ2UtbGluay5jb21wb25lbnQubGVzcyIsInByb2plY3RzL3Byb3h5bS9uZ3gtY2hhdC9zcmMvbGliL2NvbXBvbmVudHMvY2hhdC1tZXNzYWdlLWxpbmsvY2hhdC1tZXNzYWdlLWxpbmsuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0NGO0FERUE7RUFDRSxjQUFBO0FDQUYiLCJmaWxlIjoicHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9jaGF0LW1lc3NhZ2UtbGluay9jaGF0LW1lc3NhZ2UtbGluay5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICBjb2xvcjogIzE5OGNmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hOnZpc2l0ZWQge1xuICBjb2xvcjogIzlhNDZlODtcbn1cbiIsImEge1xuICBjb2xvcjogIzE5OGNmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYTp2aXNpdGVkIHtcbiAgY29sb3I6ICM5YTQ2ZTg7XG59XG4iXX0= */"] });
    return ChatMessageLinkComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMessageLinkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-chat-message-link',
                templateUrl: './chat-message-link.component.html',
                styleUrls: ['./chat-message-link.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [LinkOpenerToken]
            }] }]; }, null); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/components/chat-message-list/chat-message-list.component.ts":
/*!******************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/components/chat-message-list/chat-message-list.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ChatMessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageListComponent", function() { return ChatMessageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/message */ "./projects/proxym/ngx-chat/src/lib/core/message.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chat-service */ "./projects/proxym/ngx-chat/src/lib/services/chat-service.ts");
/* harmony import */ var _services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/chat-list-state.service */ "./projects/proxym/ngx-chat/src/lib/services/chat-list-state.service.ts");
/* harmony import */ var _services_chat_message_list_registry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/chat-message-list-registry.service */ "./projects/proxym/ngx-chat/src/lib/services/chat-message-list-registry.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chat-message/chat-message.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-message/chat-message.component.ts");








var _c0 = ["messageArea"];
function ChatMessageListComponent_ng_container_2_ngx_chat_message_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-chat-message", 7);
} if (rf & 2) {
    var message_r55 = ctx.$implicit;
    var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nick", message_r55.direction === ctx_r54.Direction.in ? ctx_r54.contact.name : "")("avatar", ctx_r54.contact.avatar)("message", message_r55)("contact", ctx_r54.contact)("isRoom", false)("showAvatars", ctx_r54.showAvatars);
} }
function ChatMessageListComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatMessageListComponent_ng_container_2_ngx_chat_message_4_Template, 1, 6, "ngx-chat-message", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var dateMessagesGroup_r53 = ctx.$implicit;
    var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](3, 2, dateMessagesGroup_r53.date, ctx_r50.chatService.translations.dateFormat, undefined, ctx_r50.chatService.translations.locale));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", dateMessagesGroup_r53.messages);
} }
function ChatMessageListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r51.chatService.translations.noMessages, " ");
} }
function ChatMessageListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r52.chatService.addContact(ctx_r52.contact.jidBare.toString()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r52.chatService.translations.subscriptionRequestMessage, " ");
} }
var ChatMessageListComponent = /** @class */ (function () {
    function ChatMessageListComponent(chatListService, chatService, chatMessageListRegistry) {
        this.chatListService = chatListService;
        this.chatService = chatService;
        this.chatMessageListRegistry = chatMessageListRegistry;
        this.Direction = _core_message__WEBPACK_IMPORTED_MODULE_1__["Direction"];
    }
    ChatMessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSubscription = this.contact.messages$.subscribe(function () {
            _this.scheduleScrollToLastMessage();
        });
        this.chatMessageListRegistry.incrementOpenWindowCount(this.contact);
    };
    ChatMessageListComponent.prototype.ngOnChanges = function (changes) {
        var contact = changes.contact;
        if (contact && contact.previousValue && contact.currentValue) {
            this.chatMessageListRegistry.decrementOpenWindowCount(contact.previousValue);
            this.chatMessageListRegistry.incrementOpenWindowCount(contact.currentValue);
        }
        if (contact && contact.currentValue) {
            this.scheduleScrollToLastMessage();
        }
    };
    ChatMessageListComponent.prototype.ngOnDestroy = function () {
        this.messageSubscription.unsubscribe();
        this.chatMessageListRegistry.decrementOpenWindowCount(this.contact);
    };
    ChatMessageListComponent.prototype.acceptSubscriptionRequest = function (event) {
        event.preventDefault();
        this.chatService.addContact(this.contact.jidBare.toString());
    };
    ChatMessageListComponent.prototype.denySubscriptionRequest = function (event) {
        event.preventDefault();
        this.chatService.removeContact((this.contact.jidBare.toString()));
        this.chatListService.closeChat(this.contact);
    };
    ChatMessageListComponent.prototype.scheduleScrollToLastMessage = function () {
        var _this = this;
        setTimeout(function () { return _this.scrollToLastMessage(); }, 0);
    };
    ChatMessageListComponent.prototype.scrollToLastMessage = function () {
        if (this.chatMessageAreaElement) {
            this.chatMessageAreaElement.nativeElement.scrollTop = this.chatMessageAreaElement.nativeElement.scrollHeight;
        }
    };
    ChatMessageListComponent.ɵfac = function ChatMessageListComponent_Factory(t) { return new (t || ChatMessageListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_3__["ChatListStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatServiceToken"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_message_list_registry_service__WEBPACK_IMPORTED_MODULE_4__["ChatMessageListRegistryService"])); };
    ChatMessageListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatMessageListComponent, selectors: [["ngx-chat-message-list"]], viewQuery: function ChatMessageListComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chatMessageAreaElement = _t.first);
        } }, inputs: { contact: "contact", showAvatars: "showAvatars" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 6, vars: 5, consts: [[1, "chat-messages"], ["messageArea", ""], [4, "ngFor", "ngForOf"], ["class", "chat-messages-empty", 4, "ngIf"], ["class", "chat-message chat-message--in", 4, "ngIf"], [1, "chat-messages-date-group"], [3, "nick", "avatar", "message", "contact", "isRoom", "showAvatars", 4, "ngFor", "ngForOf"], [3, "nick", "avatar", "message", "contact", "isRoom", "showAvatars"], [1, "chat-messages-empty"], [1, "chat-message", "chat-message--in"], [1, "chat-message-text", "chat-message-text--no-avatar"]], template: function ChatMessageListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatMessageListComponent_ng_container_2_Template, 5, 7, "ng-container", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatMessageListComponent_div_3_Template, 2, 1, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatMessageListComponent_div_4_Template, 5, 2, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contact.dateMessagesGroups);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contact.messages.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx.contact.pendingIn$));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_6__["ChatMessageComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".chat-message-avatar[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n  padding: 0.5em;\n  \n}\n.chat-message-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n  border-radius: calc(2em/2);\n}\n.chat-message-text[_ngcontent-%COMP%] {\n  float: right;\n  width: calc(100% - (2em + 0.5em * 4));\n  padding: 0.5em 0.5em 0em 0.5em;\n  font-size: 14px;\n}\n.chat-message-text.chat-message-text--no-avatar[_ngcontent-%COMP%] {\n  width: calc(100%);\n}\n.received[_ngcontent-%COMP%] {\n  height: 65%;\n  width: 65%;\n}\n.chat-message[_ngcontent-%COMP%] {\n  max-width: 76%;\n  border-radius: 1.1em;\n  clear: both;\n  margin: calc(0.5em / 2);\n}\n.chat-message.chat-message--out[_ngcontent-%COMP%] {\n  color: black;\n  background-color: #DCF8C6;\n  float: right;\n  position: relative;\n}\n.chat-message.chat-message--in[_ngcontent-%COMP%] {\n  color: black;\n  background-color: white;\n  float: left;\n  position: relative;\n}\n.chat-message-image-wrapper[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  margin: 0.5em;\n}\n.chat-message-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.chat-message-footer[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n  text-align: right;\n  padding: 0.2em 1em 0em 2em;\n  clear: both;\n}\n.chat-message-datetime[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: text-top;\n  margin-top: -4px;\n  margin-left: 10px;\n  font-size: 11px;\n  margin-right: -11px;\n}\n.chat-message-name[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 9em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  vertical-align: text-top;\n  margin-left: 10px;\n  margin-right: -2px;\n  margin-top: -4px;\n}\n.progress[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.chat-messages[_ngcontent-%COMP%] {\n  min-height: 15em;\n  max-height: 20em;\n  overflow-y: scroll;\n  overflow-wrap: break-word;\n  -webkit-hyphens: none;\n      -ms-hyphens: none;\n          hyphens: none;\n}\n.chat-messages-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.5em;\n  color: #999;\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n.chat-presence-subscription-actions[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.chat-messages-date-group[_ngcontent-%COMP%] {\n  clear: both;\n  font-size: 0.7em;\n  font-style: italic;\n  margin: 0.5em 0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaXMvQnVyZWF1L1Byb3h5bS1QRkUvcHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9jaGF0LW1lc3NhZ2UvY2hhdC1tZXNzYWdlLmNvbXBvbmVudC5sZXNzIiwicHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9jaGF0LW1lc3NhZ2UtbGlzdC9jaGF0LW1lc3NhZ2UtbGlzdC5jb21wb25lbnQubGVzcyIsIi9ob21lL2FuaXMvQnVyZWF1L1Byb3h5bS1QRkUvcHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9jaGF0LW1lc3NhZ2UtbGlzdC9jaGF0LW1lc3NhZ2UtbGlzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQ0pBOzs7OztvQkFLa0I7QUFDcEI7QURMQTtFQVlJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNKSjtBRFFBO0VBQ0UsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDTkY7QURRRTtFQUNFLGlCQUFBO0FDTko7QURXQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDVEY7QURZQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ1ZGO0FEWUU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNWSjtBRGVFO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDYko7QURvQkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNsQkY7QURlQTtFQU1JLFdBQUE7QUNsQko7QURzQkE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBRUEsMEJBQUE7RUFDQSxXQUFBO0FDckJGO0FEd0JBO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUN0QkY7QUR5QkE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ3ZCRjtBRDJCQTtFQUNFLGtCQUFBO0FDekJGO0FDL0VBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEseUJBQUE7RUFDQSxxQkFBQTtNQUFBLGlCQUFBO1VBQUEsYUFBQTtBRGdGRjtBQzdFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEK0VGO0FDNUVBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBRDhFRjtBQzNFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FENkVGIiwiZmlsZSI6InByb2plY3RzL3Byb3h5bS9uZ3gtY2hhdC9zcmMvbGliL2NvbXBvbmVudHMvY2hhdC1tZXNzYWdlLWxpc3QvY2hhdC1tZXNzYWdlLWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbXNnLWF2YXRhci1zaXplOiAyZW07XG5AbXNnLWZ1bGwtc3BhY2luZzogMC41ZW07XG5AbXNnLWhhbGYtc3BhY2luZzogY2FsYyhAbXNnLWZ1bGwtc3BhY2luZyAvMik7XG5AbXNnLXNpZGUtc3BhY2luZzogMC41ZW07XG5cbi5jaGF0LW1lc3NhZ2UtYXZhdGFyIHtcbiAgd2lkdGg6IEBtc2ctYXZhdGFyLXNpemU7XG4gIGhlaWdodDogQG1zZy1hdmF0YXItc2l6ZTtcbiAgcGFkZGluZzogQG1zZy1mdWxsLXNwYWNpbmc7XG4gIC8qICAgd2lkdGg6IDJlbTtcbiAgaGVpZ2h0OiAyZW07XG4gICBwYWRkaW5nOiAwLjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4OyovXG5cbiAgaW1nIHtcbiAgICB3aWR0aDogQG1zZy1hdmF0YXItc2l6ZTtcbiAgICBoZWlnaHQ6IEBtc2ctYXZhdGFyLXNpemU7XG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyhAbXNnLWF2YXRhci1zaXplLzIpO1xuICB9XG59XG5cbi5jaGF0LW1lc3NhZ2UtdGV4dCB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIChAbXNnLWF2YXRhci1zaXplICsgQG1zZy1mdWxsLXNwYWNpbmcgKiA0KSk7XG4gIHBhZGRpbmc6IDAuNWVtIDAuNWVtIDBlbSAwLjVlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAvLyBwYWRkaW5nOiAxOHB4IDEwcHg7XG4gICYuY2hhdC1tZXNzYWdlLXRleHQtLW5vLWF2YXRhciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSk7XG5cbiAgfVxufVxuXG4ucmVjZWl2ZWQge1xuICBoZWlnaHQ6IDY1JTtcbiAgd2lkdGg6IDY1JTtcbn1cblxuLmNoYXQtbWVzc2FnZSB7XG4gIG1heC13aWR0aDogNzYlO1xuICBib3JkZXItcmFkaXVzOiAxLjFlbTtcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogQG1zZy1oYWxmLXNwYWNpbmc7XG5cbiAgJi5jaGF0LW1lc3NhZ2UtLW91dCB7XG4gICAgY29sb3I6ICBibGFjazsvLyM2OTY5Njk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RDRjhDNjsgLy8jRENGOEM2O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiBAbXNnLXNpZGUtc3BhY2luZztcblxuICB9XG5cbiAgJi5jaGF0LW1lc3NhZ2UtLWluIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8vIzI1RDM2NjsgLy8jNDJhNWY1O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyBtYXJnaW4tbGVmdDogQG1zZy1zaWRlLXNwYWNpbmc7XG4gICAgLy8gcGFkZGluZy1yaWdodDogMS42ZW07XG5cbiAgfVxufVxuXG4uY2hhdC1tZXNzYWdlLWltYWdlLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBAbXNnLWZ1bGwtc3BhY2luZztcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5jaGF0LW1lc3NhZ2UtZm9vdGVyIHtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICAvLyBjb2xvcjogIzk5OTtcbiAgcGFkZGluZzogMC4yZW0gMWVtIDBlbSAyZW07XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY2hhdC1tZXNzYWdlLWRhdGV0aW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi1yaWdodDogLTExcHg7XG59XG5cbi5jaGF0LW1lc3NhZ2UtbmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiA5ZW07XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0ycHg7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIC8vbWFyZ2luLXJpZ2h0OiBAbXNnLWZ1bGwtc3BhY2luZztcbn1cblxuLnByb2dyZXNzIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4iLCIuY2hhdC1tZXNzYWdlLWF2YXRhciB7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgLyogICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgIHBhZGRpbmc6IDAuNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7Ki9cbn1cbi5jaGF0LW1lc3NhZ2UtYXZhdGFyIGltZyB7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBib3JkZXItcmFkaXVzOiBjYWxjKDJlbS8yKTtcbn1cbi5jaGF0LW1lc3NhZ2UtdGV4dCB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtICgyZW0gKyAwLjVlbSAqIDQpKTtcbiAgcGFkZGluZzogMC41ZW0gMC41ZW0gMGVtIDAuNWVtO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2hhdC1tZXNzYWdlLXRleHQuY2hhdC1tZXNzYWdlLXRleHQtLW5vLWF2YXRhciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUpO1xufVxuLnJlY2VpdmVkIHtcbiAgaGVpZ2h0OiA2NSU7XG4gIHdpZHRoOiA2NSU7XG59XG4uY2hhdC1tZXNzYWdlIHtcbiAgbWF4LXdpZHRoOiA3NiU7XG4gIGJvcmRlci1yYWRpdXM6IDEuMWVtO1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiBjYWxjKDAuNWVtIC8gMik7XG59XG4uY2hhdC1tZXNzYWdlLmNoYXQtbWVzc2FnZS0tb3V0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRENGOEM2O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jaGF0LW1lc3NhZ2UuY2hhdC1tZXNzYWdlLS1pbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2hhdC1tZXNzYWdlLWltYWdlLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwLjVlbTtcbn1cbi5jaGF0LW1lc3NhZ2UtaW1hZ2Utd3JhcHBlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jaGF0LW1lc3NhZ2UtZm9vdGVyIHtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAwLjJlbSAxZW0gMGVtIDJlbTtcbiAgY2xlYXI6IGJvdGg7XG59XG4uY2hhdC1tZXNzYWdlLWRhdGV0aW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi1yaWdodDogLTExcHg7XG59XG4uY2hhdC1tZXNzYWdlLW5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogOWVtO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMnB4O1xuICBtYXJnaW4tdG9wOiAtNHB4O1xufVxuLnByb2dyZXNzIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmNoYXQtbWVzc2FnZXMge1xuICBtaW4taGVpZ2h0OiAxNWVtO1xuICBtYXgtaGVpZ2h0OiAyMGVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGh5cGhlbnM6IG5vbmU7XG59XG4uY2hhdC1tZXNzYWdlcy1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6ICM5OTk7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuLmNoYXQtcHJlc2VuY2Utc3Vic2NyaXB0aW9uLWFjdGlvbnMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uY2hhdC1tZXNzYWdlcy1kYXRlLWdyb3VwIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luOiAwLjVlbSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVcIjtcbkBpbXBvcnQgXCIuLi9jaGF0LW1lc3NhZ2UvY2hhdC1tZXNzYWdlLmNvbXBvbmVudC5sZXNzXCI7XG5cbi5jaGF0LW1lc3NhZ2VzIHtcbiAgbWluLWhlaWdodDogMTVlbTtcbiAgbWF4LWhlaWdodDogMjBlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGh5cGhlbnM6IG5vbmU7XG59XG5cbi5jaGF0LW1lc3NhZ2VzLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogQGdlbmVyYWwtbGlnaHQ7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4uY2hhdC1wcmVzZW5jZS1zdWJzY3JpcHRpb24tYWN0aW9ucyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNoYXQtbWVzc2FnZXMtZGF0ZS1ncm91cCB7XG4gIGNsZWFyOiBib3RoO1xuICBmb250LXNpemU6IDAuN2VtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbjogMC41ZW0gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"] });
    return ChatMessageListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMessageListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-chat-message-list',
                templateUrl: './chat-message-list.component.html',
                styleUrls: ['./chat-message-list.component.less']
            }]
    }], function () { return [{ type: _services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_3__["ChatListStateService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatServiceToken"]]
            }] }, { type: _services_chat_message_list_registry_service__WEBPACK_IMPORTED_MODULE_4__["ChatMessageListRegistryService"] }]; }, { contact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showAvatars: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], chatMessageAreaElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['messageArea']
        }] }); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/components/chat-message-text/chat-message-text.component.ts":
/*!******************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/components/chat-message-text/chat-message-text.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ChatMessageTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageTextComponent", function() { return ChatMessageTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



function ChatMessageTextComponent_span_0_br_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
} }
function ChatMessageTextComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatMessageTextComponent_span_0_br_2_Template, 1, 0, "br", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var line_r57 = ctx.$implicit;
    var isLast_r58 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](line_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r58);
} }
var ChatMessageTextComponent = /** @class */ (function () {
    function ChatMessageTextComponent() {
    }
    ChatMessageTextComponent.prototype.ngOnInit = function () {
        if (this.text) {
            this.lines = this.text.split('\n');
        }
    };
    ChatMessageTextComponent.ɵfac = function ChatMessageTextComponent_Factory(t) { return new (t || ChatMessageTextComponent)(); };
    ChatMessageTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatMessageTextComponent, selectors: [["ngx-chat-message-text"]], inputs: { text: "text" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function ChatMessageTextComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatMessageTextComponent_span_0_Template, 3, 2, "span", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lines);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], encapsulation: 2 });
    return ChatMessageTextComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMessageTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-chat-message-text',
                template: "<span *ngFor=\"let line of lines; last as isLast\">{{line}}<br *ngIf=\"!isLast\"/></span>"
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/components/chat-message/chat-message.component.ts":
/*!********************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/components/chat-message/chat-message.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MAX_IMAGE_SIZE, ChatMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_IMAGE_SIZE", function() { return MAX_IMAGE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageComponent", function() { return ChatMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/message */ "./projects/proxym/ngx-chat/src/lib/core/message.ts");
/* harmony import */ var _core_utils_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils-links */ "./projects/proxym/ngx-chat/src/lib/core/utils-links.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_message_state_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/adapters/xmpp/plugins/message-state.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message-state.plugin.ts");
/* harmony import */ var _services_adapters_xmpp_xmpp_chat_adapter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/adapters/xmpp/xmpp-chat-adapter.service */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/xmpp-chat-adapter.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/chat-service */ "./projects/proxym/ngx-chat/src/lib/services/chat-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _directives_links_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../directives/links.directive */ "./projects/proxym/ngx-chat/src/lib/directives/links.directive.ts");
/* harmony import */ var mat_video__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mat-video */ "./node_modules/mat-video/__ivy_ngcc__/fesm5/mat-video.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm5/angular-bootstrap-md.js");













function ChatMessageComponent_div_0_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r71.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ChatMessageComponent_div_0_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r72.chatService.userAvatar$), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ChatMessageComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatMessageComponent_div_0_div_1_img_1_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatMessageComponent_div_0_div_1_img_2_Template, 2, 3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.message.direction === "in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.message.direction === "out");
} }
var _c0 = function (a0) { return { "chat-message-text--no-avatar": a0 }; };
function ChatMessageComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, !ctx_r64.showAvatars));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxChatLinks", ctx_r64.message.body);
} }
function ChatMessageComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, !ctx_r65.showAvatars));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxChatLinks", ctx_r65.message.body);
} }
function ChatMessageComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-video", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, !ctx_r66.showAvatars));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxChatLinks", ctx_r66.message.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("overlay", true)("playsinline", false)("fullscreen", false)("src", ctx_r66.message.body);
} }
function ChatMessageComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mdb-carousel", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mdb-carousel-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Carte Platinum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Acc\u00E9dez \u00E0 la classe PLATINUM.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mdb-carousel-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Compte PLATINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "A la hauteur de vos ambitions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mdb-carousel-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Pack PLATINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "La cl\u00E9 de tous les privil\u00E8ges.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, !ctx_r67.showAvatars));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("animation", "fade");
} }
function ChatMessageComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r68.message.body, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r68.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ChatMessageComponent_div_0_small_11_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r74.imgSent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", ctx_r74.sentMessageTitle);
} }
function ChatMessageComponent_div_0_small_11_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r75.imgReceived, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", ctx_r75.receivedMessageTitle);
} }
function ChatMessageComponent_div_0_small_11_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r76.imgSeen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", ctx_r76.seenMessageTitle);
} }
function ChatMessageComponent_div_0_small_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatMessageComponent_div_0_small_11_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatMessageComponent_div_0_small_11_ng_container_1_ng_container_2_Template, 2, 2, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChatMessageComponent_div_0_small_11_ng_container_1_ng_container_3_Template, 3, 2, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r73.getMessageState());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r73.MessageState.SENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r73.MessageState.RECIPIENT_RECEIVED);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r73.MessageState.RECIPIENT_SEEN);
} }
function ChatMessageComponent_div_0_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatMessageComponent_div_0_small_11_ng_container_1_Template, 4, 4, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r69.nick);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r69.message.direction === "out");
} }
function ChatMessageComponent_div_0_small_12_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r78.imgSent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", ctx_r78.sentMessageTitle);
} }
function ChatMessageComponent_div_0_small_12_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r79.imgReceived, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", ctx_r79.receivedMessageTitle);
} }
function ChatMessageComponent_div_0_small_12_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r80.imgSeen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", ctx_r80.seenMessageTitle);
} }
function ChatMessageComponent_div_0_small_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatMessageComponent_div_0_small_12_ng_container_2_ng_container_1_Template, 2, 2, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatMessageComponent_div_0_small_12_ng_container_2_ng_container_2_Template, 2, 2, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChatMessageComponent_div_0_small_12_ng_container_2_ng_container_3_Template, 3, 2, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r77.getMessageState());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r77.MessageState.SENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r77.MessageState.RECIPIENT_RECEIVED);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r77.MessageState.RECIPIENT_SEEN);
} }
function ChatMessageComponent_div_0_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatMessageComponent_div_0_small_12_ng_container_2_Template, 4, 4, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r70.nick);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r70.nick, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r70.message.direction === "out");
} }
var _c1 = function (a0, a1) { return { "chat-message--in": a0, "chat-message--out": a1 }; };
function ChatMessageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatMessageComponent_div_0_div_1_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatMessageComponent_div_0_div_2_Template, 2, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChatMessageComponent_div_0_div_3_Template, 2, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ChatMessageComponent_div_0_div_4_Template, 3, 8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ChatMessageComponent_div_0_div_5_Template, 29, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ChatMessageComponent_div_0_div_6_Template, 3, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ChatMessageComponent_div_0_small_11_Template, 2, 2, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ChatMessageComponent_div_0_small_12_Template, 3, 3, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](13, _c1, ctx_r60.message.direction === "in", ctx_r60.message.direction === "out"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.showAvatars);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.isRoom == true && !ctx_r60.message.body.toString().includes("https://www.uib-net.com/#/app/public/offre/content"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.isRoom == false && !ctx_r60.imageLink && !ctx_r60.message.body.toString().includes(".mp4") && !ctx_r60.message.body.toString().includes("https://www.uib-net.com/#/app/public/offre/content"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.message.body.toString().includes(".mp4"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.message.body.toString().includes("https://www.uib-net.com/#/app/public/offre/content"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.imageLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 10, ctx_r60.message.datetime, ctx_r60.chatService.translations.timeFormat));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.isRoom == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.isRoom == true);
} }
function ChatMessageComponent_div_1_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r83.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ChatMessageComponent_div_1_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r84.chatService.userAvatar$), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ChatMessageComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatMessageComponent_div_1_div_1_img_1_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatMessageComponent_div_1_div_1_img_2_Template, 2, 3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r81.message.direction === "in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r81.message.direction === "out");
} }
function ChatMessageComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r82.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ChatMessageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatMessageComponent_div_1_div_1_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ChatMessageComponent_div_1_div_4_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, ctx_r61.message.direction === "in", ctx_r61.message.direction === "out"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r61.showAvatars);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, !ctx_r61.showAvatars));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxChatLinks", ctx_r61.message.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r61.imageLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 8, ctx_r61.message.datetime, ctx_r61.chatService.translations.timeFormat));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r61.imgDec, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r61.nick);
} }
function ChatMessageComponent_div_2_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r87.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ChatMessageComponent_div_2_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r88.chatService.userAvatar$), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ChatMessageComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatMessageComponent_div_2_div_1_img_1_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatMessageComponent_div_2_div_1_img_2_Template, 2, 3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r85.message.direction === "in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r85.message.direction === "out");
} }
function ChatMessageComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r86.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ChatMessageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatMessageComponent_div_2_div_1_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ChatMessageComponent_div_2_div_4_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, ctx_r62.message.direction === "in", ctx_r62.message.direction === "out"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r62.showAvatars);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, !ctx_r62.showAvatars));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxChatLinks", ctx_r62.message.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r62.imageLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 8, ctx_r62.message.datetime, ctx_r62.chatService.translations.timeFormat));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r62.imgAcc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r62.nick);
} }
var MAX_IMAGE_SIZE = 250 * 1024;
var ChatMessageComponent = /** @class */ (function () {
    function ChatMessageComponent(chatService, httpClient) {
        this.chatService = chatService;
        this.httpClient = httpClient;
        this.isRoom = false;
        // ✓✓
        this.MessageState = _core_message__WEBPACK_IMPORTED_MODULE_2__["MessageState"];
        this.imgReceived = __webpack_require__(/*! ../../../../../../../src/assets/received.png */ "./src/assets/received.png");
        this.imgSent = __webpack_require__(/*! ../../../../../../../src/assets/sent.png */ "./src/assets/sent.png");
        this.imgSeen = __webpack_require__(/*! ../../../../../../../src/assets/seen.png */ "./src/assets/seen.png");
        this.imgDec = __webpack_require__(/*! ../../../../../../../src/assets/decli.png */ "./src/assets/decli.png");
        this.imgAcc = __webpack_require__(/*! ../../../../../../../src/assets/accep.png */ "./src/assets/accep.png");
        this.messageStatePlugin = this.chatService.getPlugin(_services_adapters_xmpp_plugins_message_state_plugin__WEBPACK_IMPORTED_MODULE_4__["MessageStatePlugin"]);
        this.seenMessageTitle = 'SEEN BY RECIPIENT';
        this.sentMessageTitle = 'SENT';
        this.receivedMessageTitle = 'RECEIVED BY RECIPIENT';
    }
    ChatMessageComponent.prototype.ngOnInit = function () {
        this.tryFindImageLink();
    };
    ChatMessageComponent.prototype.tryFindImageLink = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, _b, url, headRequest, contentType, isImage, contentLength, e_1, e_2_1;
            var e_2, _c;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.chatService instanceof _services_adapters_xmpp_xmpp_chat_adapter_service__WEBPACK_IMPORTED_MODULE_5__["XmppChatAdapter"])) return [3 /*break*/, 10];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 8, 9, 10]);
                        _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object(_core_utils_links__WEBPACK_IMPORTED_MODULE_3__["extractUrls"])(this.message.body)), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 7];
                        url = _b.value;
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.httpClient.head(url, { observe: 'response' }).toPromise()];
                    case 4:
                        headRequest = _d.sent();
                        contentType = headRequest.headers.get('Content-Type');
                        isImage = contentType && contentType.startsWith('image');
                        contentLength = headRequest.headers.get('Content-Length');
                        if (isImage && parseInt(contentLength, 10) < MAX_IMAGE_SIZE) {
                            this.imageLink = url;
                            return [3 /*break*/, 7];
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _d.sent();
                        return [3 /*break*/, 6];
                    case 6:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    ChatMessageComponent.prototype.getMessageState = function () {
        if (this.message.state) {
            return this.message.state;
        }
        else if (this.messageStatePlugin && this.contact) {
            var date = this.message.datetime;
            var states = this.messageStatePlugin.getContactMessageState(this.contact.jidBare.toString());
            return this.getStateForDate(date, states);
        }
    };
    ChatMessageComponent.prototype.getStateForDate = function (date, states) {
        if (date <= states.lastRecipientSeen) {
            return _core_message__WEBPACK_IMPORTED_MODULE_2__["MessageState"].RECIPIENT_SEEN;
        }
        else if (date <= states.lastRecipientReceived) {
            return _core_message__WEBPACK_IMPORTED_MODULE_2__["MessageState"].RECIPIENT_RECEIVED;
        }
        else if (date <= states.lastSent) {
            return _core_message__WEBPACK_IMPORTED_MODULE_2__["MessageState"].SENT;
        }
    };
    ChatMessageComponent.ɵfac = function ChatMessageComponent_Factory(t) { return new (t || ChatMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatServiceToken"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"])); };
    ChatMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatMessageComponent, selectors: [["ngx-chat-message"]], inputs: { showAvatars: "showAvatars", avatar: "avatar", message: "message", nick: "nick", isRoom: "isRoom", contact: "contact" }, decls: 3, vars: 3, consts: [["class", "chat-message", "style", "margin-right: 0.6em;", 3, "ngClass", 4, "ngIf"], ["class", "chat-message", "style", "margin-left: 4.0em;margin-right: 4.6em;", 3, "ngClass", 4, "ngIf"], [1, "chat-message", 2, "margin-right", "0.6em", 3, "ngClass"], ["class", "chat-message-avatar", 4, "ngIf"], ["style", "margin-top: 10px;\n;\n  padding: 0.5em 0.5em 0em 0.5em;     margin-bottom: 10px;\n\n  font-size: 14px;", 3, "ngClass", 4, "ngIf"], ["class", "chat-message-text", 3, "ngClass", 4, "ngIf"], ["class", "chat-message-image-wrapper", 4, "ngIf"], [1, "chat-message-footer"], [1, "chat-message-datetime"], ["class", "chat-message-name", 3, "title", 4, "ngIf"], ["style", "  display: inline-block;\n  max-width: 9em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  vertical-align: text-top;\n  margin-left: 18px;\n  margin-right: -3px;\n  margin-top: -4px;", 3, "title", 4, "ngIf"], [1, "chat-message-avatar"], [3, "src", 4, "ngIf"], [3, "src"], [2, "margin-top", "10px", ";\n  padding", "0.5em 0.5em 0em 0.5em", "margin-bottom", "10px", "font-size", "14px", 3, "ngClass"], [3, "ngxChatLinks"], [1, "chat-message-text", 3, "ngClass"], [3, "overlay", "playsinline", "fullscreen", "src"], [1, "carousel", "slide", "carousel-fade", 3, "animation"], [1, "view", "w-100"], ["src", "https://net.uib.com.tn/UIB-OC-BO/uploads/offers/-Carte-Platinum-_list_436564861868214.jpg", "alt", "Carte Platinum", 1, "d-block", "w-100"], ["mdbWavesEffect", "", 1, "mask", "rgba-black-light", "waves-light"], [1, "carousel-caption"], [1, "h3-responsive"], [2, "margin-bottom", "-1px"], ["src", "https://net.uib.com.tn/UIB-OC-BO/uploads/offers/-Compte-PLATINE_list_435802979778582.jpg", "alt", "Compte PLATINE", 1, "d-block", "w-100"], ["mdbWavesEffect", "", 1, "mask", "rgba-black-strong", "waves-light"], ["src", "https://net.uib.com.tn/UIB-OC-BO/uploads/offers/Pack--PLATINE_list_435234346016342.jpg", "alt", "Pack  PLATINE", 1, "d-block", "w-100"], ["mdbWavesEffect", "", 1, "mask", "rgba-black-slight", "waves-light"], [1, "chat-message-image-wrapper"], [3, "href"], [1, "chat-message-image", 3, "src"], [1, "chat-message-name", 3, "title"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "received", 3, "src", "title"], [1, "state--seen"], [1, "received", "seen", 3, "src", "title"], [2, "display", "inline-block", "max-width", "9em", "text-overflow", "ellipsis", "white-space", "nowrap", "overflow", "hidden", "vertical-align", "text-top", "margin-left", "18px", "margin-right", "-3px", "margin-top", "-4px", 3, "title"], [1, "chat-message", 2, "margin-left", "4.0em", "margin-right", "4.6em", 3, "ngClass"], [1, "chat-message-avatar", 2, "width", "32%", "height", "32%", "margin-left", "18px", "margin-top", "-8px", 3, "src"]], template: function ChatMessageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ChatMessageComponent_div_0_Template, 13, 16, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatMessageComponent_div_1_Template, 11, 16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatMessageComponent_div_2_Template, 11, 16, "div", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.message.body.includes("Video Call:") && !ctx.message.body.includes("Audio Call:") && !ctx.message.body.includes("Video call:") && !ctx.message.body.includes("Audio call:"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message.body.includes("call"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message.body.substring(0, 1) == "A" || ctx.message.body.substring(0, 1) == "V");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _directives_links_directive__WEBPACK_IMPORTED_MODULE_9__["LinksDirective"], mat_video__WEBPACK_IMPORTED_MODULE_10__["ɵb"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["SlideComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".chat-message-avatar[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n  padding: 0.5em;\n  \n}\n.chat-message-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n  border-radius: calc(2em/2);\n}\n.chat-message-text[_ngcontent-%COMP%] {\n  float: right;\n  width: calc(100% - (2em + 0.5em * 4));\n  padding: 0.5em 0.5em 0em 0.5em;\n  font-size: 14px;\n}\n.chat-message-text.chat-message-text--no-avatar[_ngcontent-%COMP%] {\n  width: calc(100%);\n}\n.received[_ngcontent-%COMP%] {\n  height: 65%;\n  width: 65%;\n}\n.chat-message[_ngcontent-%COMP%] {\n  max-width: 76%;\n  border-radius: 1.1em;\n  clear: both;\n  margin: calc(0.5em / 2);\n}\n.chat-message.chat-message--out[_ngcontent-%COMP%] {\n  color: black;\n  background-color: #DCF8C6;\n  float: right;\n  position: relative;\n}\n.chat-message.chat-message--in[_ngcontent-%COMP%] {\n  color: black;\n  background-color: white;\n  float: left;\n  position: relative;\n}\n.chat-message-image-wrapper[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  margin: 0.5em;\n}\n.chat-message-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.chat-message-footer[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n  text-align: right;\n  padding: 0.2em 1em 0em 2em;\n  clear: both;\n}\n.chat-message-datetime[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: text-top;\n  margin-top: -4px;\n  margin-left: 10px;\n  font-size: 11px;\n  margin-right: -11px;\n}\n.chat-message-name[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 9em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  vertical-align: text-top;\n  margin-left: 10px;\n  margin-right: -2px;\n  margin-top: -4px;\n}\n.progress[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaXMvQnVyZWF1L1Byb3h5bS1QRkUvcHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9jaGF0LW1lc3NhZ2UvY2hhdC1tZXNzYWdlLmNvbXBvbmVudC5sZXNzIiwicHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9jaGF0LW1lc3NhZ2UvY2hhdC1tZXNzYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VDSkE7Ozs7O29CQUtrQjtBQUNwQjtBRExBO0VBWUksVUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ0pKO0FEUUE7RUFDRSxZQUFBO0VBQ0EscUNBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNORjtBRFFFO0VBQ0UsaUJBQUE7QUNOSjtBRFdBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNURjtBRFlBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDVkY7QURZRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1ZKO0FEZUU7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNiSjtBRG9CQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ2xCRjtBRGVBO0VBTUksV0FBQTtBQ2xCSjtBRHNCQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFFQSwwQkFBQTtFQUNBLFdBQUE7QUNyQkY7QUR3QkE7RUFDRSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDdkJGO0FEMkJBO0VBQ0Usa0JBQUE7QUN6QkYiLCJmaWxlIjoicHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9jaGF0LW1lc3NhZ2UvY2hhdC1tZXNzYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQG1zZy1hdmF0YXItc2l6ZTogMmVtO1xuQG1zZy1mdWxsLXNwYWNpbmc6IDAuNWVtO1xuQG1zZy1oYWxmLXNwYWNpbmc6IGNhbGMoQG1zZy1mdWxsLXNwYWNpbmcgLzIpO1xuQG1zZy1zaWRlLXNwYWNpbmc6IDAuNWVtO1xuXG4uY2hhdC1tZXNzYWdlLWF2YXRhciB7XG4gIHdpZHRoOiBAbXNnLWF2YXRhci1zaXplO1xuICBoZWlnaHQ6IEBtc2ctYXZhdGFyLXNpemU7XG4gIHBhZGRpbmc6IEBtc2ctZnVsbC1zcGFjaW5nO1xuICAvKiAgIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICAgcGFkZGluZzogMC41ZW07XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDsqL1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IEBtc2ctYXZhdGFyLXNpemU7XG4gICAgaGVpZ2h0OiBAbXNnLWF2YXRhci1zaXplO1xuICAgIGJvcmRlci1yYWRpdXM6IGNhbGMoQG1zZy1hdmF0YXItc2l6ZS8yKTtcbiAgfVxufVxuXG4uY2hhdC1tZXNzYWdlLXRleHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAoQG1zZy1hdmF0YXItc2l6ZSArIEBtc2ctZnVsbC1zcGFjaW5nICogNCkpO1xuICBwYWRkaW5nOiAwLjVlbSAwLjVlbSAwZW0gMC41ZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLy8gcGFkZGluZzogMThweCAxMHB4O1xuICAmLmNoYXQtbWVzc2FnZS10ZXh0LS1uby1hdmF0YXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUpO1xuXG4gIH1cbn1cblxuLnJlY2VpdmVkIHtcbiAgaGVpZ2h0OiA2NSU7XG4gIHdpZHRoOiA2NSU7XG59XG5cbi5jaGF0LW1lc3NhZ2Uge1xuICBtYXgtd2lkdGg6IDc2JTtcbiAgYm9yZGVyLXJhZGl1czogMS4xZW07XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IEBtc2ctaGFsZi1zcGFjaW5nO1xuXG4gICYuY2hhdC1tZXNzYWdlLS1vdXQge1xuICAgIGNvbG9yOiAgYmxhY2s7Ly8jNjk2OTY5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQ0Y4QzY7IC8vI0RDRjhDNjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIG1hcmdpbi1yaWdodDogQG1zZy1zaWRlLXNwYWNpbmc7XG5cbiAgfVxuXG4gICYuY2hhdC1tZXNzYWdlLS1pbiB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvLyMyNUQzNjY7IC8vIzQyYTVmNTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IEBtc2ctc2lkZS1zcGFjaW5nO1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDEuNmVtO1xuXG4gIH1cbn1cblxuLmNoYXQtbWVzc2FnZS1pbWFnZS13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogQG1zZy1mdWxsLXNwYWNpbmc7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uY2hhdC1tZXNzYWdlLWZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgLy8gY29sb3I6ICM5OTk7XG4gIHBhZGRpbmc6IDAuMmVtIDFlbSAwZW0gMmVtO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNoYXQtbWVzc2FnZS1kYXRldGltZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICBtYXJnaW4tdG9wOiAtNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xMXB4O1xufVxuXG4uY2hhdC1tZXNzYWdlLW5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogOWVtO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMnB4O1xuICBtYXJnaW4tdG9wOiAtNHB4O1xuICAvL21hcmdpbi1yaWdodDogQG1zZy1mdWxsLXNwYWNpbmc7XG59XG5cbi5wcm9ncmVzcyB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuIiwiLmNoYXQtbWVzc2FnZS1hdmF0YXIge1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIC8qICAgd2lkdGg6IDJlbTtcbiAgaGVpZ2h0OiAyZW07XG4gICBwYWRkaW5nOiAwLjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4OyovXG59XG4uY2hhdC1tZXNzYWdlLWF2YXRhciBpbWcge1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogY2FsYygyZW0vMik7XG59XG4uY2hhdC1tZXNzYWdlLXRleHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAoMmVtICsgMC41ZW0gKiA0KSk7XG4gIHBhZGRpbmc6IDAuNWVtIDAuNWVtIDBlbSAwLjVlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNoYXQtbWVzc2FnZS10ZXh0LmNoYXQtbWVzc2FnZS10ZXh0LS1uby1hdmF0YXIge1xuICB3aWR0aDogY2FsYygxMDAlKTtcbn1cbi5yZWNlaXZlZCB7XG4gIGhlaWdodDogNjUlO1xuICB3aWR0aDogNjUlO1xufVxuLmNoYXQtbWVzc2FnZSB7XG4gIG1heC13aWR0aDogNzYlO1xuICBib3JkZXItcmFkaXVzOiAxLjFlbTtcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogY2FsYygwLjVlbSAvIDIpO1xufVxuLmNoYXQtbWVzc2FnZS5jaGF0LW1lc3NhZ2UtLW91dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RDRjhDNjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2hhdC1tZXNzYWdlLmNoYXQtbWVzc2FnZS0taW4ge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNoYXQtbWVzc2FnZS1pbWFnZS13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMC41ZW07XG59XG4uY2hhdC1tZXNzYWdlLWltYWdlLXdyYXBwZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2hhdC1tZXNzYWdlLWZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMC4yZW0gMWVtIDBlbSAyZW07XG4gIGNsZWFyOiBib3RoO1xufVxuLmNoYXQtbWVzc2FnZS1kYXRldGltZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICBtYXJnaW4tdG9wOiAtNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xMXB4O1xufVxuLmNoYXQtbWVzc2FnZS1uYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDllbTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTJweDtcbiAgbWFyZ2luLXRvcDogLTRweDtcbn1cbi5wcm9ncmVzcyB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbiJdfQ== */"] });
    return ChatMessageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngx-chat-message',
                templateUrl: './chat-message.component.html',
                styleUrls: ['./chat-message.component.less']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatServiceToken"]]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }]; }, { showAvatars: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isRoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], contact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/components/chat-room-messages/chat-room-messages.component.ts":
/*!********************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/components/chat-room-messages/chat-room-messages.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ChatRoomMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomMessagesComponent", function() { return ChatRoomMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chat-service */ "./projects/proxym/ngx-chat/src/lib/services/chat-service.ts");
/* harmony import */ var _services_contact_factory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contact-factory.service */ "./projects/proxym/ngx-chat/src/lib/services/contact-factory.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chat-message/chat-message.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-message/chat-message.component.ts");






var _c0 = ["messageArea"];
function ChatRoomMessagesComponent_ngx_chat_message_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-chat-message", 4);
} if (rf & 2) {
    var message_r92 = ctx.$implicit;
    var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", message_r92)("avatar", ctx_r90.getOrCreateContactWithFullJid(message_r92.from).avatar)("showAvatars", true)("isRoom", true)("nick", ctx_r90.getOrCreateContactWithFullJid(message_r92.from).name);
} }
function ChatRoomMessagesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r91.chatService.translations.noMessages, " ");
} }
var ChatRoomMessagesComponent = /** @class */ (function () {
    function ChatRoomMessagesComponent(chatService, contactFactory) {
        this.chatService = chatService;
        this.contactFactory = contactFactory;
    }
    ChatRoomMessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSubscription = this.room.messages$.subscribe(function () {
            _this.scheduleScrollToLastMessage();
        });
        console.log("aniuys", this.room.messages);
    };
    ChatRoomMessagesComponent.prototype.ngOnChanges = function (changes) {
        var room = changes.room;
        if (room && room.currentValue) {
            this.scheduleScrollToLastMessage();
        }
    };
    ChatRoomMessagesComponent.prototype.ngOnDestroy = function () {
        this.messageSubscription.unsubscribe();
    };
    ChatRoomMessagesComponent.prototype.getOrCreateContactWithFullJid = function (fullJid) {
        var matchingContact = this.chatService.contacts$.getValue().find(function (contact) { return contact.jidFull.equals(fullJid); });
        if (!matchingContact) {
            matchingContact = this.contactFactory.createContact(fullJid.toString(), fullJid.resource);
            this.chatService.contacts$.next([matchingContact].concat(this.chatService.contacts$.getValue()));
        }
        return matchingContact;
    };
    ChatRoomMessagesComponent.prototype.scheduleScrollToLastMessage = function () {
        var _this = this;
        setTimeout(function () { return _this.scrollToLastMessage(); }, 0);
    };
    ChatRoomMessagesComponent.prototype.scrollToLastMessage = function () {
        if (this.chatMessageAreaElement) {
            this.chatMessageAreaElement.nativeElement.scrollTop = this.chatMessageAreaElement.nativeElement.scrollHeight;
        }
    };
    ChatRoomMessagesComponent.ɵfac = function ChatRoomMessagesComponent_Factory(t) { return new (t || ChatRoomMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatServiceToken"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_factory_service__WEBPACK_IMPORTED_MODULE_2__["ContactFactoryService"])); };
    ChatRoomMessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatRoomMessagesComponent, selectors: [["ngx-chat-room-messages"]], viewQuery: function ChatRoomMessagesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chatMessageAreaElement = _t.first);
        } }, inputs: { room: "room" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 4, vars: 2, consts: [[1, "chat-messages"], ["messageArea", ""], [3, "message", "avatar", "showAvatars", "isRoom", "nick", 4, "ngFor", "ngForOf"], ["class", "chat-messages-empty", 4, "ngIf"], [3, "message", "avatar", "showAvatars", "isRoom", "nick"], [1, "chat-messages-empty"]], template: function ChatRoomMessagesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatRoomMessagesComponent_ngx_chat_message_2_Template, 1, 5, "ngx-chat-message", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatRoomMessagesComponent_div_3_Template, 2, 1, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.room.messages);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.room.messages.length === 0);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_4__["ChatMessageComponent"]], styles: [".chat-messages[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  overflow-wrap: break-word;\n  -webkit-hyphens: none;\n      -ms-hyphens: none;\n          hyphens: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaXMvQnVyZWF1L1Byb3h5bS1QRkUvcHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9jaGF0LXJvb20tbWVzc2FnZXMvY2hhdC1yb29tLW1lc3NhZ2VzLmNvbXBvbmVudC5sZXNzIiwicHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9jaGF0LXJvb20tbWVzc2FnZXMvY2hhdC1yb29tLW1lc3NhZ2VzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSx5QkFBQTtFQUNBLHFCQUFBO01BQUEsaUJBQUE7VUFBQSxhQUFBO0FDQUYiLCJmaWxlIjoicHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9jaGF0LXJvb20tbWVzc2FnZXMvY2hhdC1yb29tLW1lc3NhZ2VzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtbWVzc2FnZXMge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgaHlwaGVuczogbm9uZTtcbn1cbiIsIi5jaGF0LW1lc3NhZ2VzIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICBoeXBoZW5zOiBub25lO1xufVxuIl19 */"] });
    return ChatRoomMessagesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatRoomMessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-chat-room-messages',
                templateUrl: './chat-room-messages.component.html',
                styleUrls: ['./chat-room-messages.component.less']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatServiceToken"]]
            }] }, { type: _services_contact_factory_service__WEBPACK_IMPORTED_MODULE_2__["ContactFactoryService"] }]; }, { room: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], chatMessageAreaElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['messageArea']
        }] }); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/components/chat-window-list/chat-window-list.component.ts":
/*!****************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/components/chat-window-list/chat-window-list.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ChatWindowListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWindowListComponent", function() { return ChatWindowListComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chat-list-state.service */ "./projects/proxym/ngx-chat/src/lib/services/chat-list-state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chat-window/chat-window.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-window/chat-window.component.ts");






function ChatWindowListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-chat-window", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var chatWindowState_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chatWindowState", chatWindowState_r94);
} }
var ChatWindowListComponent = /** @class */ (function () {
    function ChatWindowListComponent(chatListService) {
        this.chatListService = chatListService;
    }
    ChatWindowListComponent.ɵfac = function ChatWindowListComponent_Factory(t) { return new (t || ChatWindowListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_2__["ChatListStateService"])); };
    ChatWindowListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatWindowListComponent, selectors: [["ngx-chat-window-list"]], inputs: { rosterState: "rosterState" }, decls: 3, vars: 4, consts: [[1, "chat-list"], [4, "ngFor", "ngForOf"], [3, "chatWindowState"]], template: function ChatWindowListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatWindowListComponent_div_1_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rosterVisibility", ctx.rosterState);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx.chatListService.openChats$));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_4__["ChatWindowComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Helvetica\", \"Arial\", serif;\n}\n.chat-list[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  position: fixed;\n  bottom: 0;\n  right: 16em;\n  z-index: 5;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaXMvQnVyZWF1L1Byb3h5bS1QRkUvcHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9jaGF0LXdpbmRvdy1saXN0L2NoYXQtd2luZG93LWxpc3QuY29tcG9uZW50Lmxlc3MiLCJwcm9qZWN0cy9wcm94eW0vbmd4LWNoYXQvc3JjL2xpYi9jb21wb25lbnRzL2NoYXQtd2luZG93LWxpc3QvY2hhdC13aW5kb3ctbGlzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtBQ0NGO0FERUE7RUFFRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBRUEsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FDRkYiLCJmaWxlIjoicHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9jaGF0LXdpbmRvdy1saXN0L2NoYXQtd2luZG93LWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzZXJpZlxufVxuXG4uY2hhdC1saXN0IHtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDE2ZW07XG4gIHotaW5kZXg6IDU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG59XG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzZXJpZjtcbn1cbi5jaGF0LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAxNmVtO1xuICB6LWluZGV4OiA1O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbiJdfQ== */"], data: { animation: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('rosterVisibility', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        right: '1em',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        right: '15em',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hidden => shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('shown => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease'))
                ])
            ] } });
    return ChatWindowListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatWindowListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngx-chat-window-list',
                templateUrl: './chat-window-list.component.html',
                styleUrls: ['./chat-window-list.component.less'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('rosterVisibility', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            right: '1em',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            right: '15em',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hidden => shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('shown => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease'))
                    ])
                ]
            }]
    }], function () { return [{ type: _services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_2__["ChatListStateService"] }]; }, { rosterState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/components/chat-window-room/chat-window-room.component.ts":
/*!****************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/components/chat-window-room/chat-window-room.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ChatWindowRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWindowRoomComponent", function() { return ChatWindowRoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_presence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/presence */ "./projects/proxym/ngx-chat/src/lib/core/presence.ts");
/* harmony import */ var _chat_message_input_chat_message_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat-message-input/chat-message-input.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-message-input/chat-message-input.component.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_http_file_upload_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/adapters/xmpp/plugins/http-file-upload.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/http-file-upload.plugin.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/chat-service */ "./projects/proxym/ngx-chat/src/lib/services/chat-service.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_multi_user_chat_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/adapters/xmpp/plugins/multi-user-chat.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/multi-user-chat.plugin.ts");
/* harmony import */ var _services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/chat-list-state.service */ "./projects/proxym/ngx-chat/src/lib/services/chat-list-state.service.ts");
/* harmony import */ var _services_socket_io_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/socket.io.service */ "./projects/proxym/ngx-chat/src/lib/services/socket.io.service.ts");
/* harmony import */ var _services_adapters_xmpp_xmpp_chat_adapter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/adapters/xmpp/xmpp-chat-adapter.service */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/xmpp-chat-adapter.service.ts");
/* harmony import */ var _multi_user_chat_multi_user_chat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../multi-user-chat/multi-user-chat.component */ "./projects/proxym/ngx-chat/src/lib/components/multi-user-chat/multi-user-chat.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _chat_filedrop_file_drop_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../chat-filedrop/file-drop.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-filedrop/file-drop.component.ts");
/* harmony import */ var _chat_room_messages_chat_room_messages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../chat-room-messages/chat-room-messages.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-room-messages/chat-room-messages.component.ts");

















function ChatWindowRoomComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowRoomComponent_div_0_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r169); var ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r168.onFocus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-chat-room-messages", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ngx-chat-message-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("room", ctx_r167.selectedRoom);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("room", ctx_r167.selectedRoom);
} }
function ChatWindowRoomComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-chat-filedrop", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("fileUpload", function ChatWindowRoomComponent_div_0_Template_ngx_chat_filedrop_fileUpload_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r171); var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r170.uploadFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowRoomComponent_div_0_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r171); var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r172.onClickHeader(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowRoomComponent_div_0_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r171); var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r173.onClickHeader(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowRoomComponent_div_0_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r171); var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r174.onClickClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ChatWindowRoomComponent_div_0_div_10_Template, 4, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enabled", ctx_r166.httpFileUploadPlugin.fileUploadSupported)("dropMessage", ctx_r166.chatService.translations.dropMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r166.selectedRoom);
} }
var ChatWindowRoomComponent = /** @class */ (function () {
    function ChatWindowRoomComponent(chatService, chatListService, changeDetector, socketIOService, chatServicee, multiUserChatComponent) {
        this.chatService = chatService;
        this.chatListService = chatListService;
        this.changeDetector = changeDetector;
        this.socketIOService = socketIOService;
        this.chatServicee = chatServicee;
        this.multiUserChatComponent = multiUserChatComponent;
        this.presence = _core_presence__WEBPACK_IMPORTED_MODULE_2__["Presence"];
        this.allRooms = [];
        this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.imgSendMessage = __webpack_require__(/*! ../../../../../../../src/assets/click.png */ "./src/assets/click.png");
        this.imgFileMessage = __webpack_require__(/*! ../../../../../../../src/assets/file.png */ "./src/assets/file.png");
        this.today = new Date();
        this.jstoday = '';
        this.selectedRoom = null;
        this.multiUserChatPlugin = chatService.getPlugin(_services_adapters_xmpp_plugins_multi_user_chat_plugin__WEBPACK_IMPORTED_MODULE_7__["MultiUserChatPlugin"]);
        this.httpFileUploadPlugin = this.chatService.getPlugin(_services_adapters_xmpp_plugins_http_file_upload_plugin__WEBPACK_IMPORTED_MODULE_4__["HttpFileUploadPlugin"]);
    }
    ChatWindowRoomComponent.prototype.ngOnInit = function () {
        console.log("anioss", this.multiUserChatComponent.selectedRoom);
    };
    ChatWindowRoomComponent.prototype.ngOnDestroy = function () {
        this.ngDestroy.next();
        this.ngDestroy.complete();
    };
    ChatWindowRoomComponent.prototype.onClickHeader = function () {
        this.chatWindowState.isCollapsed = !this.chatWindowState.isCollapsed;
    };
    ChatWindowRoomComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    ChatWindowRoomComponent.prototype.onClickClose = function () {
        this.chatListService.closeChat(this.chatWindowState.contact);
    };
    ChatWindowRoomComponent.prototype.sendMessage = function () {
        this.messageInput.onSendMessage();
    };
    ChatWindowRoomComponent.prototype.uploadFile = function (file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var url;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpFileUploadPlugin.upload(file)];
                    case 1:
                        url = _a.sent();
                        this.chatService.sendMessage(this.chatWindowState.contact.jidBare.toString(), url);
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatWindowRoomComponent.prototype.onFocus = function () {
        this.messageInput.focus();
    };
    ChatWindowRoomComponent.prototype.onActionClick = function (chatAction) {
        chatAction.onClick({
            contact: this.chatWindowState.contact.jidBare.toString(),
            chatWindow: this,
        });
    };
    ChatWindowRoomComponent.ɵfac = function ChatWindowRoomComponent_Factory(t) { return new (t || ChatWindowRoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatServiceToken"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_8__["ChatListStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_socket_io_service__WEBPACK_IMPORTED_MODULE_9__["SocketIOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatServiceToken"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatServiceToken"])); };
    ChatWindowRoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatWindowRoomComponent, selectors: [["ngx-chat-window-room"]], viewQuery: function ChatWindowRoomComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_chat_message_input_chat_message_input_component__WEBPACK_IMPORTED_MODULE_3__["ChatMessageInputComponent"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.messageInput = _t.first);
        } }, inputs: { chatWindowState: "chatWindowState", selectedRoom: "selectedRoom" }, decls: 1, vars: 1, consts: [["class", "chat-window", 4, "ngIf"], [1, "chat-window"], [3, "enabled", "dropMessage", "fileUpload"], [1, "chat-contact-header", 3, "title"], [1, "chat-contact-avatar", 3, "click"], [1, "chat-contact-name", 2, "color", "white", 3, "click"], [1, "chat-video-audio-call"], ["aria-hidden", "true", 1, "ffa", "fa-video-camera"], ["aria-hidden", "true", 1, "fa", "fa-phone", 2, "margin-left", "15px", "margin-right", "10px"], [1, "chat-close", 2, "color", "white", 3, "click"], ["class", "chat-content", 3, "click", 4, "ngIf"], [1, "chat-content", 3, "click"], [3, "room"], [1, "chat-input-container"]], template: function ChatWindowRoomComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ChatWindowRoomComponent_div_0_Template, 11, 3, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedRoom);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _chat_filedrop_file_drop_component__WEBPACK_IMPORTED_MODULE_13__["FileDropComponent"], _chat_room_messages_chat_room_messages_component__WEBPACK_IMPORTED_MODULE_14__["ChatRoomMessagesComponent"], _chat_message_input_chat_message_input_component__WEBPACK_IMPORTED_MODULE_3__["ChatMessageInputComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-family: \"Helvetica\", \"Arial\", serif;\n}\n.chat-window[_ngcontent-%COMP%] {\n  border: 1px solid #e1e1e1;\n  border-bottom: none;\n  background: #128C7E;\n  margin-left: 1em;\n  width: 20em;\n  bottom: 0;\n  pointer-events: auto;\n  position: relative;\n  border-radius: 0.5em;\n}\n.chat-contact-header[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  cursor: pointer;\n  line-height: 3em;\n}\n.chat-contact-avatar[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n}\n.chat-contact-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n  margin-top: -1px;\n  margin-left: 10px;\n  border-radius: 1em;\n}\n.chat-contact-name[_ngcontent-%COMP%] {\n  padding: 0 0.5em;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  overflow: hidden;\n  font-weight: bold;\n  margin-left: 20px;\n  font-size: 13px;\n}\n.fa[_ngcontent-%COMP%] {\n  font: normal normal normal 20px/1 FontAwesome;\n  color: white;\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n.ffa[_ngcontent-%COMP%] {\n  font: normal normal normal 20px/1 FontAwesome;\n  color: white;\n  font-size: 17px;\n  margin-right: 10px;\n  cursor: pointer;\n  width: 30px;\n}\n.chat-close[_ngcontent-%COMP%] {\n  padding: 0 0.5em;\n  text-align: right;\n  font-size: 30px;\n  color: #42a5f5;\n  cursor: pointer;\n  margin-top: -2px;\n}\n.chat-content[_ngcontent-%COMP%] {\n  background-image: url(\"https://i.pinimg.com/originals/7b/1d/8e/7b1d8e865da2c11b788a21a0fb51d542.jpg\");\n  text-align: left;\n  padding: 0;\n  min-height: 5em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.chat-input-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  padding: 0.5em;\n  border-top: 1px solid #e1e1e1;\n  background: #fff;\n  cursor: text;\n}\n.chat-action[_ngcontent-%COMP%] {\n  cursor: pointer;\n  align-self: center;\n  text-align: center;\n}\n.chat-window-send[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #fff;\n  color: #000;\n  width: 1.5em;\n}\n.chat-window-send[_ngcontent-%COMP%]:active {\n  border: none;\n}\nngx-chat-message-input[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaXMvQnVyZWF1L1Byb3h5bS1QRkUvcHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9jaGF0LXdpbmRvdy1yb29tL2NoYXQtd2luZG93LXJvb20uY29tcG9uZW50Lmxlc3MiLCJwcm9qZWN0cy9wcm94eW0vbmd4LWNoYXQvc3JjL2xpYi9jb21wb25lbnRzL2NoYXQtd2luZG93LXJvb20vY2hhdC13aW5kb3ctcm9vbS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFBO0VBR0Esd0NBQUE7QUNISjtBRE1BO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0pKO0FET0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0FDTko7QURVQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDUko7QURNQTtFQUtJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDUko7QURZQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNWSjtBRGFBO0VBQ0ksNkNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDWEo7QURjQTtFQUNJLDZDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDWko7QURlQTtFQUVJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2RKO0FEa0JBO0VBRUsscUdBQUE7RUFDRCxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2pCSjtBRG9CQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ2xCSjtBRHFCQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDbkJKO0FEc0JBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDcEJKO0FEc0JBO0VBQ0ssWUFBQTtBQ3BCTDtBRHdCQTtFQUNJLG1CQUFBO1VBQUEsWUFBQTtBQ3RCSiIsImZpbGUiOiJwcm9qZWN0cy9wcm94eW0vbmd4LWNoYXQvc3JjL2xpYi9jb21wb25lbnRzL2NoYXQtd2luZG93LXJvb20vY2hhdC13aW5kb3ctcm9vbS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3N0eWxlJztcblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vbWFyZ2luOiAwO1xuLy9wYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNlcmlmXG59XG5cbi5jaGF0LXdpbmRvdyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgQGdlbmVyYWwtYm9yZGVyLWNvbG9yO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYmFja2dyb3VuZDogIzEyOEM3RTsgLy8jNDJhNWY1O1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgd2lkdGg6IDIwZW07XG4gICAgYm90dG9tOiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbn1cblxuLmNoYXQtY29udGFjdC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIEBnZW5lcmFsLWJvcmRlci1jb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDNlbTtcbn1cblxuXG4uY2hhdC1jb250YWN0LWF2YXRhciB7XG4gICAgd2lkdGg6IDJlbTtcbiAgICBoZWlnaHQ6IDJlbTtcblxuaW1nIHtcbiAgICB3aWR0aDogMmVtO1xuICAgIGhlaWdodDogMmVtO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xufVxufVxuXG4uY2hhdC1jb250YWN0LW5hbWUge1xuICAgIHBhZGRpbmc6IDAgMC41ZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5mYSB7XG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjBweC8xIEZvbnRBd2Vzb21lO1xuICAgIGNvbG9yOiB3aGl0ZTsvLyM0MmE1ZjU7IC8vICMxOThjZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mZmEge1xuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDIwcHgvMSBGb250QXdlc29tZTtcbiAgICBjb2xvcjogd2hpdGU7Ly8jNDJhNWY1O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAzMHB4O1xufVxuXG4uY2hhdC1jbG9zZSB7XG5cbiAgICBwYWRkaW5nOiAwIDAuNWVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzQyYTVmNTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTJweDtcblxufVxuXG4uY2hhdC1jb250ZW50IHtcbiAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNFQ0U1REQ7XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy83Yi8xZC84ZS83YjFkOGU4NjVkYTJjMTFiNzg4YTIxYTBmYjUxZDU0Mi5qcGdcIik7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jaGF0LWlucHV0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgQGdlbmVyYWwtYm9yZGVyLWNvbG9yO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY3Vyc29yOiB0ZXh0O1xufVxuXG4uY2hhdC1hY3Rpb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2hhdC13aW5kb3ctc2VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgd2lkdGg6IDEuNWVtO1xuXG4mOmFjdGl2ZSB7XG4gICAgIGJvcmRlcjogbm9uZTtcbiB9XG59XG5cbm5neC1jaGF0LW1lc3NhZ2UtaW5wdXQge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzZXJpZjtcbn1cbi5jaGF0LXdpbmRvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMxMjhDN0U7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIHdpZHRoOiAyMGVtO1xuICBib3R0b206IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xufVxuLmNoYXQtY29udGFjdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDNlbTtcbn1cbi5jaGF0LWNvbnRhY3QtYXZhdGFyIHtcbiAgd2lkdGg6IDJlbTtcbiAgaGVpZ2h0OiAyZW07XG59XG4uY2hhdC1jb250YWN0LWF2YXRhciBpbWcge1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbn1cbi5jaGF0LWNvbnRhY3QtbmFtZSB7XG4gIHBhZGRpbmc6IDAgMC41ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmbGV4LWdyb3c6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmZhIHtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjBweC8xIEZvbnRBd2Vzb21lO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5mZmEge1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyMHB4LzEgRm9udEF3ZXNvbWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDMwcHg7XG59XG4uY2hhdC1jbG9zZSB7XG4gIHBhZGRpbmc6IDAgMC41ZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjNDJhNWY1O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG4uY2hhdC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzdiLzFkLzhlLzdiMWQ4ZTg2NWRhMmMxMWI3ODhhMjFhMGZiNTFkNTQyLmpwZ1wiKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uY2hhdC1pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMWUxZTE7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGN1cnNvcjogdGV4dDtcbn1cbi5jaGF0LWFjdGlvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2hhdC13aW5kb3ctc2VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG4gIHdpZHRoOiAxLjVlbTtcbn1cbi5jaGF0LXdpbmRvdy1zZW5kOmFjdGl2ZSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbm5neC1jaGF0LW1lc3NhZ2UtaW5wdXQge1xuICBmbGV4LWdyb3c6IDE7XG59XG4iXX0= */"] });
    return ChatWindowRoomComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatWindowRoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngx-chat-window-room',
                templateUrl: './chat-window-room.component.html',
                styleUrls: ['./chat-window-room.component.less']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatServiceToken"]]
            }] }, { type: _services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_8__["ChatListStateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _services_socket_io_service__WEBPACK_IMPORTED_MODULE_9__["SocketIOService"] }, { type: _services_adapters_xmpp_xmpp_chat_adapter_service__WEBPACK_IMPORTED_MODULE_10__["XmppChatAdapter"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatServiceToken"]]
            }] }, { type: _multi_user_chat_multi_user_chat_component__WEBPACK_IMPORTED_MODULE_11__["MultiUserChatComponent"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatServiceToken"]]
            }] }]; }, { chatWindowState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], messageInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_chat_message_input_chat_message_input_component__WEBPACK_IMPORTED_MODULE_3__["ChatMessageInputComponent"]]
        }], selectedRoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/components/chat-window/chat-window.component.ts":
/*!******************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/components/chat-window/chat-window.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ChatWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWindowComponent", function() { return ChatWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/message */ "./projects/proxym/ngx-chat/src/lib/core/message.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_http_file_upload_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/adapters/xmpp/plugins/http-file-upload.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/http-file-upload.plugin.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/chat-service */ "./projects/proxym/ngx-chat/src/lib/services/chat-service.ts");
/* harmony import */ var _chat_message_input_chat_message_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../chat-message-input/chat-message-input.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-message-input/chat-message-input.component.ts");
/* harmony import */ var _core_presence__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/presence */ "./projects/proxym/ngx-chat/src/lib/core/presence.ts");
/* harmony import */ var ltx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ltx */ "./node_modules/ltx/index.js");
/* harmony import */ var ltx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ltx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/chat-list-state.service */ "./projects/proxym/ngx-chat/src/lib/services/chat-list-state.service.ts");
/* harmony import */ var _services_socket_io_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/socket.io.service */ "./projects/proxym/ngx-chat/src/lib/services/socket.io.service.ts");
/* harmony import */ var _services_adapters_xmpp_xmpp_chat_adapter_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/adapters/xmpp/xmpp-chat-adapter.service */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/xmpp-chat-adapter.service.ts");















function ChatWindowComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_div_7_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r7.VideoCall(); return ctx_r7.playRing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_div_7_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r9.AudioCall(); return ctx_r9.playRing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChatWindowComponent_div_10_emoji_mart_2_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "emoji-mart", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("emojiSelect", function ChatWindowComponent_div_10_emoji_mart_2_Template_emoji_mart_emojiSelect_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.addEmoji($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChatWindowComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.onFocus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-chat-message-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatWindowComponent_div_10_emoji_mart_2_Template, 1, 0, "emoji-mart", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("contact", ctx_r1.chatWindowState.contact)("showAvatars", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showEmojiPicker);
} }
function ChatWindowComponent_div_11_img_5_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_div_11_img_5_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); var action_r16 = ctx.$implicit; var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.onActionClick(action_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var action_r16 = ctx.$implicit;
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", action_r16.cssClass)("src", ctx_r15.imgSendMessage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ChatWindowComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-chat-message-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_div_11_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.toggleEmojiPicker(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i-feather", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ChatWindowComponent_div_11_img_5_Template, 1, 2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("emoji", ctx_r2.message)("contact", ctx_r2.chatWindowState.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.imgFileMessage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.chatService.chatActions);
} }
function ChatWindowComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r21.chatWindowState.contact.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r21.callingInfo.name.substring(0, 1).toUpperCase() + ctx_r21.callingInfo.name.substring(1) + " is ", "", ctx_r21.callingInfo.content, "");
} }
function ChatWindowComponent_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_div_12_div_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r24.RejectVideoCall(); return ctx_r24.sendStanzaVideoReject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r22.chatWindowState.contact.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r22.callingInfo.content);
} }
function ChatWindowComponent_div_12_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_div_12_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.AcceptVideoCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_div_12_div_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r28.RejectVideoCall(); return ctx_r28.sendStanzaVideoReject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChatWindowComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatWindowComponent_div_12_div_2_Template, 5, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChatWindowComponent_div_12_div_3_Template, 7, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ChatWindowComponent_div_12_div_4_Template, 5, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.callingInfo.type == "receiver");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.callingInfo.type == "dialer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.callingInfo.type == "receiver");
} }
function ChatWindowComponent_div_13_span_2_Template(rf, ctx) { if (rf & 1) {
    var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_div_13_span_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r33.RejectAudioCall(); return ctx_r33.sendStanzaAudioReject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChatWindowComponent_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r30.chatWindowState.contact.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r30.callingInfo.name.substring(0, 1).toUpperCase() + ctx_r30.callingInfo.name.substring(1) + " is ", "", ctx_r30.callingInfo.content, "");
} }
function ChatWindowComponent_div_13_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r31.chatWindowState.contact.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r31.callingInfo.content);
} }
function ChatWindowComponent_div_13_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_div_13_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r35.AcceptAudioCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_div_13_div_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r37.RejectAudioCall(); return ctx_r37.sendStanzaAudioReject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChatWindowComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatWindowComponent_div_13_span_2_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChatWindowComponent_div_13_div_3_Template, 5, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ChatWindowComponent_div_13_div_4_Template, 5, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ChatWindowComponent_div_13_div_5_Template, 5, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.callingInfo.type == "dialer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.callingInfo.type == "receiver");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.callingInfo.type == "dialer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.callingInfo.type == "receiver");
} }
function ChatWindowComponent_div_14_ngx_chat_video_call_2_Template(rf, ctx) { if (rf & 1) {
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-chat-video-call", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("callback", function ChatWindowComponent_div_14_ngx_chat_video_call_2_Template_ngx_chat_video_call_callback_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r39.CallBackVideo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("caller", ctx_r38.caller)("userType", ctx_r38.userType);
} }
function ChatWindowComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatWindowComponent_div_14_ngx_chat_video_call_2_Template, 2, 2, "ngx-chat-video-call", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.isVideoCallAccepted);
} }
function ChatWindowComponent_div_15_ngx_chat_audio_call_2_Template(rf, ctx) { if (rf & 1) {
    var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-chat-audio-call", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("callback", function ChatWindowComponent_div_15_ngx_chat_audio_call_2_Template_ngx_chat_audio_call_callback_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r42.CallBackAudio($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chatWindowState", ctx_r41.chatWindowState)("caller", ctx_r41.caller)("userType", ctx_r41.userType);
} }
function ChatWindowComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatWindowComponent_div_15_ngx_chat_audio_call_2_Template, 2, 3, "ngx-chat-audio-call", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.isAudioCallAccepted);
} }
var ChatWindowComponent = /** @class */ (function () {
    function ChatWindowComponent(chatService, chatListService, changeDetector, socketIOService, chatServicee) {
        this.chatService = chatService;
        this.chatListService = chatListService;
        this.changeDetector = changeDetector;
        this.socketIOService = socketIOService;
        this.chatServicee = chatServicee;
        this.isChat = false;
        this.isVideoCall = false;
        this.isAudioCall = false;
        this.liveUserList = [];
        this.callingInfo = { name: '', content: '', type: '' };
        this.isVideoCallAccepted = false;
        this.isAudioCallAccepted = false;
        this.loppRing = true;
        this.myAudio = new Audio('https://audio.jukehost.co.uk/waQVQiqBy7Jc6kBgtHVwQ9zO2OeF7rzm');
        this.message = '';
        this.presence = _core_presence__WEBPACK_IMPORTED_MODULE_8__["Presence"];
        this.busyy = false;
        this.showEmojiPicker = false;
        this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.imgSendMessage = __webpack_require__(/*! ../../../../../../../src/assets/click.png */ "./src/assets/click.png");
        this.imgFileMessage = __webpack_require__(/*! ../../../../../../../src/assets/file.png */ "./src/assets/file.png");
        this.today = new Date();
        this.jstoday = '';
        this.httpFileUploadPlugin = this.chatService.getPlugin(_services_adapters_xmpp_plugins_http_file_upload_plugin__WEBPACK_IMPORTED_MODULE_5__["HttpFileUploadPlugin"]);
        this.loggedUserName = sessionStorage.getItem('username');
    }
    ChatWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatWindowState.contact.messages$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (message) { return message.direction === _core_message__WEBPACK_IMPORTED_MODULE_4__["Direction"].in; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngDestroy))
            .subscribe(function () {
            _this.chatWindowState.isCollapsed = false;
        });
        this.GetLiveUsers();
        this.OnVideoCallRequest();
        this.OnVideoCallAccepted();
        this.GetBusyUsers();
        this.OnVideoCallRejected();
        this.OnAudioCallRequest();
        this.OnAudioCallAccepted();
        this.OnAudioCallRejected();
    };
    ChatWindowComponent.prototype.ngOnChanges = function () {
        this.message = '';
    };
    ChatWindowComponent.prototype.ngOnDestroy = function () {
        this.ngDestroy.next();
        this.ngDestroy.complete();
    };
    ChatWindowComponent.prototype.onClickHeader = function () {
        this.chatWindowState.isCollapsed = !this.chatWindowState.isCollapsed;
    };
    ChatWindowComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    ChatWindowComponent.prototype.onClickClose = function () {
        this.chatListService.closeChat(this.chatWindowState.contact);
    };
    ChatWindowComponent.prototype.sendMessage = function () {
        this.messageInput.onSendMessage();
    };
    ChatWindowComponent.prototype.uploadFile = function (file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var url;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpFileUploadPlugin.upload(file)];
                    case 1:
                        url = _a.sent();
                        this.chatService.sendMessage(this.chatWindowState.contact.jidBare.toString(), url);
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatWindowComponent.prototype.onFocus = function () {
        this.messageInput.focus();
    };
    ChatWindowComponent.prototype.onActionClick = function (chatAction) {
        chatAction.onClick({
            contact: this.chatWindowState.contact.jidBare.toString(),
            chatWindow: this,
        });
    };
    ChatWindowComponent.prototype.AddUser = function () {
        this.socketIOService.SetUserName(this.loggedUserName)
            .subscribe(function (data) {
            if (data.username) {
                // user added
            }
        });
    };
    ChatWindowComponent.prototype.GetLiveUsers = function () {
        var _this = this;
        this.socketIOService
            .GetConnectedUsers()
            .subscribe(function (data) {
            var users = data.filter(function (a) { return a.username !== _this.loggedUserName; });
            var count = 0;
            for (var i in users) {
                if (_this.liveUserList.indexOf(data[i]) === -1) {
                    count++;
                }
            }
            if (count !== _this.liveUserList.length) {
                _this.liveUserList = users;
                _this.socketIOService.connectedusers = users;
                _this.GetBusyUsers();
            }
        });
    };
    ChatWindowComponent.prototype.OnVideoCallRequest = function () {
        var _this = this;
        this.loppRing = true;
        this.socketIOService
            .OnVideoCallRequest()
            .subscribe(function (data) {
            _this.callingInfo.name = data.fromname;
            _this.callingInfo.content = 'Calling....';
            _this.callingInfo.type = 'receiver';
            _this.isVideoCall = true;
        });
    };
    ChatWindowComponent.prototype.toggleEmojiPicker = function () {
        this.showEmojiPicker = !this.showEmojiPicker;
    };
    ChatWindowComponent.prototype.addEmoji = function (event) {
        var message = this.message;
        var text = "" + event.emoji.native;
        this.message = text;
    };
    ChatWindowComponent.prototype.OnAudioCallRequest = function () {
        var _this = this;
        this.socketIOService
            .OnAudioCallRequest()
            .subscribe(function (data) {
            _this.callingInfo.name = data.fromname;
            _this.callingInfo.content = 'Calling....';
            _this.callingInfo.type = 'receiver';
            _this.isAudioCall = true;
        });
    };
    ChatWindowComponent.prototype.OnVideoCallAccepted = function () {
        var _this = this;
        this.myAudio.pause();
        this.socketIOService
            .OnVideoCallAccepted()
            .subscribe(function (data) {
            var calee = _this.liveUserList.find(function (a) { return a.username === _this.callingInfo.name; });
            _this.userType = 'dialer';
            _this.caller = calee.id;
            _this.isVideoCallAccepted = true;
            _this.socketIOService.BusyNow();
            _this.sendStanzaVideo();
            _this.CloseVideo();
        });
    };
    ChatWindowComponent.prototype.OnAudioCallAccepted = function () {
        var _this = this;
        this.myAudio.pause();
        this.socketIOService
            .OnAudioCallAccepted()
            .subscribe(function (data) {
            var calee = _this.liveUserList.find(function (a) { return a.username === _this.callingInfo.name; });
            _this.userType = 'dialer';
            _this.caller = calee.id;
            _this.isAudioCallAccepted = true;
            _this.socketIOService.BusyNow();
            _this.sendStanzaAudio();
            _this.CloseAudio();
        });
    };
    ChatWindowComponent.prototype.GetBusyUsers = function () {
        var _this = this;
        this.socketIOService
            .GetBusyUsers()
            .subscribe(function (data) {
            _this.liveUserList.forEach(function (a) { a.busy = false; });
            data.forEach(function (a) {
                var usr = _this.liveUserList.find(function (b) { return b.username === a.username; });
                if (usr) {
                    usr.busy = true;
                }
            });
        });
    };
    ChatWindowComponent.prototype.OnVideoCallRejected = function () {
        var _this = this;
        this.myAudio.pause();
        this.socketIOService
            .OnVideoCallRejected()
            .subscribe(function (data) {
            _this.callingInfo.content = 'Call Rejected ..';
            _this.loppRing = false;
            _this.myAudio.pause();
            setTimeout(function () {
                _this.CloseVideo();
            }, 1000);
        });
    };
    ChatWindowComponent.prototype.OnAudioCallRejected = function () {
        var _this = this;
        this.myAudio.pause();
        this.socketIOService
            .OnAudioCallRejected()
            .subscribe(function (data) {
            _this.callingInfo.content = 'Call Rejected ..';
            setTimeout(function () {
                _this.CloseAudio();
            }, 1000);
        });
    };
    ChatWindowComponent.prototype.Chat = function () {
        this.isChat = true;
    };
    ChatWindowComponent.prototype.VideoCall = function () {
        this.loppRing = true;
        this.GetLiveUsers();
        var mySubString = '';
        if (this.chatWindowState.contact.name.indexOf('@') > 0) {
            mySubString = this.chatWindowState.contact.name.substring(0, this.chatWindowState.contact.name.lastIndexOf('@'));
        }
        else {
            mySubString = this.chatWindowState.contact.name.substring(0, this.chatWindowState.contact.name.lastIndexOf(' '));
        }
        var callee = this.liveUserList.find(function (a) { return a.username === mySubString.toLowerCase(); });
        var calee = this.liveUserList.find(function (a) { return a.username === callee.username; });
        if (calee) {
            this.socketIOService.VideoCallRequest(this.loggedUserName, calee.id);
            /* setTimeout(() => {
                     this.changeDetector.detectChanges();
                     this.RejectVideoCall();
                     this.sendStanzaVideoReject();
                 }, 30000);*/
        }
        this.callee = callee;
        this.callingInfo.name = callee.username;
        this.callingInfo.content = 'Dialing....';
        this.callingInfo.type = 'dialer';
        this.isVideoCall = true;
        this.socketIOService.BusyNow();
        this.busyy = true;
    };
    ChatWindowComponent.prototype.changeLoop = function () {
        this.loppRing = false;
    };
    ChatWindowComponent.prototype.ChangeVideo = function () {
        this.video = true;
    };
    ChatWindowComponent.prototype.ChangeAudio = function () {
        this.video = false;
    };
    ChatWindowComponent.prototype.AcceptVideoCall = function () {
        var _this = this;
        this.myAudio.pause();
        var calee = this.liveUserList.find(function (a) { return a.username === _this.callingInfo.name; });
        if (calee) {
            this.socketIOService.VideoCallAccepted(this.loggedUserName, calee.id);
            this.userType = 'receiver';
            this.caller = calee.id;
            this.isVideoCallAccepted = true;
            this.socketIOService.BusyNow();
        }
        this.CloseVideo();
    };
    ChatWindowComponent.prototype.AcceptAudioCall = function () {
        var _this = this;
        this.myAudio.pause();
        var calee = this.liveUserList.find(function (a) { return a.username === _this.callingInfo.name; });
        if (calee) {
            this.socketIOService.AudioCallAccepted(this.loggedUserName, calee.id);
            this.userType = 'receiver';
            this.caller = calee.id;
            this.isAudioCallAccepted = true;
            this.socketIOService.BusyNow();
        }
        this.CloseAudio();
    };
    ChatWindowComponent.prototype.RejectVideoCall = function () {
        var _this = this;
        this.myAudio.pause();
        this.isVideoCall = false;
        var calee = this.liveUserList.find(function (a) { return a.username === _this.callingInfo.name; });
        if (calee) {
            this.socketIOService.VideoCallRejected(this.loggedUserName, calee.id);
            this.isVideoCallAccepted = false;
        }
        this.CloseVideo();
    };
    ChatWindowComponent.prototype.RejectAudioCall = function () {
        var _this = this;
        this.myAudio.pause();
        var calee = this.liveUserList.find(function (a) { return a.username === _this.callingInfo.name; });
        if (calee) {
            this.socketIOService.AudioCallRejected(this.loggedUserName, calee.id);
            this.isAudioCallAccepted = false;
        }
        this.CloseAudio();
    };
    ChatWindowComponent.prototype.AudioCall = function () {
        this.GetLiveUsers();
        var mySubString = '';
        if (this.chatWindowState.contact.name.indexOf('@') > 0) {
            mySubString = this.chatWindowState.contact.name.substring(0, this.chatWindowState.contact.name.lastIndexOf('@'));
        }
        else {
            mySubString = this.chatWindowState.contact.name.substring(0, this.chatWindowState.contact.name.lastIndexOf(' '));
        }
        var callee = this.liveUserList.find(function (a) { return a.username === mySubString.toLowerCase(); });
        var calee = this.liveUserList.find(function (a) { return a.username === callee.username; });
        if (calee) {
            this.socketIOService.AudioCallRequest(this.loggedUserName, calee.id);
            /* setTimeout(() => {
                 this.changeDetector.detectChanges();
                 this.RejectAudioCall();
                 this.sendStanzaAudioReject();
             }, 30000);*/
            //  console.log('calleeid', calee.id);
        }
        this.callee = callee;
        this.callingInfo.name = callee.username;
        this.callingInfo.content = 'Dialing....';
        this.callingInfo.type = 'dialer';
        this.isAudioCall = true;
    };
    ChatWindowComponent.prototype.CallBackVideo = function (event) {
        this.isChat = false;
        this.isVideoCall = false;
        this.isAudioCall = false;
        this.isVideoCallAccepted = false;
        this.changeDetector.detectChanges();
        // location.reload();
    };
    ChatWindowComponent.prototype.CallBackAudio = function (event) {
        this.isChat = false;
        this.isVideoCall = false;
        this.isAudioCall = false;
        this.isAudioCallAccepted = false;
        this.changeDetector.detectChanges();
        // location.reload();
    };
    ChatWindowComponent.prototype.CloseVideo = function () {
        this.myAudio.pause();
        this.isVideoCall = false;
        this.changeDetector.detectChanges();
    };
    ChatWindowComponent.prototype.CloseAudio = function () {
        this.myAudio.pause();
        this.isAudioCall = false;
        this.changeDetector.detectChanges();
    };
    ChatWindowComponent.prototype.playAudio = function () {
        var audio = new Audio();
        audio.src = '../../../../../../../src/assets/ringtone.wav';
        audio.load();
        audio.play();
    };
    ChatWindowComponent.prototype.Logout = function () {
        this.socketIOService.RemoveUser();
        sessionStorage.clear();
        location.reload();
    };
    ChatWindowComponent.prototype.sendStanzaAudio = function () {
        this.GetLiveUsers();
        this.jstoday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.today, 'dd-MM-yyyy', 'en-US', 'CET');
        var request = '<message xml:lang=\'en\' to=\'' + this.callingInfo.name + '@localhost\'' +
            // tslint:disable-next-line:max-line-length
            ' type=\'chat\' xmlns=\'jabber:client\'>' + '<origin-id xmlns=\'urn:xmpp:sid:0\' id=\'' + this.chatServicee.chatConnectionService.getNextIqId() + '\' /><body>' + 'Audio Call: ' + this.jstoday.toString() + '</body></message>';
        if (request) {
            this.chatServicee.chatConnectionService.send(Object(ltx__WEBPACK_IMPORTED_MODULE_9__["parse"])(request));
        }
    };
    ChatWindowComponent.prototype.sendStanzaVideo = function () {
        this.GetLiveUsers();
        this.jstoday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.today, 'dd-MM-yyyy', 'en-US', 'CET');
        var request = '<message xml:lang=\'en\' to=\'' + this.callingInfo.name + '@localhost\'' +
            // tslint:disable-next-line:max-line-length
            ' type=\'chat\' xmlns=\'jabber:client\'>' + '<origin-id xmlns=\'urn:xmpp:sid:0\' id=\'' + this.chatServicee.chatConnectionService.getNextIqId() + '\' /><body>' + 'Video Call: ' + this.jstoday.toString() + '</body></message>';
        if (request) {
            this.chatServicee.chatConnectionService.send(Object(ltx__WEBPACK_IMPORTED_MODULE_9__["parse"])(request));
        }
    };
    ChatWindowComponent.prototype.sendStanzaAudioReject = function () {
        this.jstoday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.today, 'dd-MM-yyyy', 'en-US', 'CET');
        var request = '<message xml:lang=\'en\' to=\'' + this.callingInfo.name + '@localhost\'' +
            // tslint:disable-next-line:max-line-length
            ' type=\'chat\' xmlns=\'jabber:client\'>' + '<origin-id xmlns=\'urn:xmpp:sid:0\' id=\'' + this.chatServicee.chatConnectionService.getNextIqId() + '\' /><body>' + ' Audio call: ' + this.jstoday.toString() + '</body></message>';
        if (request) {
            this.chatServicee.chatConnectionService.send(Object(ltx__WEBPACK_IMPORTED_MODULE_9__["parse"])(request));
        }
    };
    ChatWindowComponent.prototype.sendStanzaVideoReject = function () {
        this.jstoday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.today, 'dd-MM-yyyy', 'en-US', 'CET');
        var request = '<message xml:lang=\'en\' to=\'' + this.callingInfo.name + '@localhost\'' +
            // tslint:disable-next-line:max-line-length
            ' type=\'chat\' xmlns=\'jabber:client\'>' + '<origin-id xmlns=\'urn:xmpp:sid:0\' id=\'' + this.chatServicee.chatConnectionService.getNextIqId() + '\' /><body>' + ' Video call: ' + this.jstoday.toString() + '</body></message>';
        if (request) {
            this.chatServicee.chatConnectionService.send(Object(ltx__WEBPACK_IMPORTED_MODULE_9__["parse"])(request));
        }
    };
    ChatWindowComponent.prototype.playRing = function () {
        this.myAudio.load();
        this.myAudio.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
        this.myAudio.play();
    };
    ChatWindowComponent.ɵfac = function ChatWindowComponent_Factory(t) { return new (t || ChatWindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatServiceToken"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_11__["ChatListStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_socket_io_service__WEBPACK_IMPORTED_MODULE_12__["SocketIOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatServiceToken"])); };
    ChatWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatWindowComponent, selectors: [["ngx-chat-window"]], viewQuery: function ChatWindowComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_chat_message_input_chat_message_input_component__WEBPACK_IMPORTED_MODULE_7__["ChatMessageInputComponent"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.messageInput = _t.first);
        } }, inputs: { chatWindowState: "chatWindowState" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()], decls: 16, vars: 12, consts: [[1, "chat-window"], [3, "enabled", "dropMessage", "fileUpload"], [1, "chat-contact-header"], [1, "chat-contact-avatar", 3, "title", "click"], [3, "src"], [1, "chat-contact-name", 2, "color", "white", 3, "click"], ["class", "chat-video-audio-call", 4, "ngIf"], [1, "chat-close", 2, "color", "white", 3, "click"], ["class", "chat-content", 3, "click", 4, "ngIf"], ["class", "chat-input-container", 4, "ngIf"], ["class", "popup-box", 4, "ngIf"], [1, "chat-video-audio-call"], ["aria-hidden", "true", 1, "ffa", "fa-video-camera", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-phone", 2, "margin-left", "15px", "margin-right", "10px", 3, "click"], [1, "chat-content", 3, "click"], [3, "contact", "showAvatars"], ["class", "emoji-mart", "set", "emojione", "title", "", 3, "emojiSelect", 4, "ngIf"], ["set", "emojione", "title", "", 1, "emoji-mart", 3, "emojiSelect"], [1, "chat-input-container"], [3, "emoji", "contact"], ["type", "button", 1, "toggle-emoji", 2, "padding", "0", "margin-top", "-3px", "background-color", "white", "color", "gray", "border-color", "white", "size", "-4px", "font-size", "16px", "margin-right", "14px", 3, "click"], ["name", "smile"], [1, "chat-action", 2, "margin-right", "20px", 3, "src"], ["class", "chat-action", 3, "ngClass", "src", "click", 4, "ngFor", "ngForOf"], [1, "chat-action", 3, "ngClass", "src", "click"], [1, "popup-box"], [1, "popup-content"], ["class", "popup-header", 4, "ngIf"], ["style", "text-align: center;", 4, "ngIf"], [1, "popup-header"], [2, "max-width", "100%", "border-radius", "8em", 3, "src"], [1, "btn", "btn-sm", "btn-danger", "end-call-btn", 3, "click"], [1, "fa", "fa-phone"], [2, "text-align", "center"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], ["class", "popup-close", 3, "click", 4, "ngIf"], [1, "popup-close", 3, "click"], [3, "caller", "userType", "callback", 4, "ngIf"], [3, "caller", "userType", "callback"], [3, "chatWindowState", "caller", "userType", "callback", 4, "ngIf"], [3, "chatWindowState", "caller", "userType", "callback"]], template: function ChatWindowComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-chat-filedrop", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("fileUpload", function ChatWindowComponent_Template_ngx_chat_filedrop_fileUpload_1_listener($event) { return ctx.uploadFile($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_Template_div_click_3_listener() { return ctx.onClickHeader(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_Template_div_click_5_listener() { return ctx.onClickHeader(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ChatWindowComponent_div_7_Template, 3, 0, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_Template_div_click_8_listener() { return ctx.onClickClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " \u00D7 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ChatWindowComponent_div_10_Template, 3, 3, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ChatWindowComponent_div_11_Template, 6, 4, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ChatWindowComponent_div_12_Template, 5, 3, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ChatWindowComponent_div_13_Template, 6, 4, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ChatWindowComponent_div_14_Template, 3, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ChatWindowComponent_div_15_Template, 3, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enabled", ctx.httpFileUploadPlugin.fileUploadSupported)("dropMessage", ctx.chatService.translations.dropMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.chatWindowState.contact.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.chatWindowState.contact.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.chatWindowState.contact.name, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.chatWindowState.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.chatWindowState.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.chatWindowState.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isVideoCall && ctx.chatWindowState.contact.name.toLowerCase().includes(ctx.callingInfo.name.toString().toLowerCase()));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAudioCall && ctx.chatWindowState.contact.name.toLowerCase().includes(ctx.callingInfo.name.toString().toLowerCase()));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isVideoCallAccepted);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAudioCallAccepted);
        } }, styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-family: \"Helvetica\", \"Arial\", serif;\n}\n.emoji-mart[_ngcontent-%COMP%] {\n  width: 20em;\n  height: 9em;\n}\n.chat-window[_ngcontent-%COMP%] {\n  border: 1px solid #e1e1e1;\n  border-bottom: none;\n  background: #128C7E;\n  margin-left: 1em;\n  width: 20em;\n  bottom: 0;\n  pointer-events: auto;\n  position: relative;\n  border-radius: 0.5em;\n}\n.chat-contact-header[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  cursor: pointer;\n  line-height: 3em;\n}\n.chat-contact-avatar[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n}\n.chat-contact-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n  margin-top: -1px;\n  margin-left: 10px;\n  border-radius: 1em;\n}\n.chat-contact-name[_ngcontent-%COMP%] {\n  padding: 0 0.5em;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  overflow: hidden;\n  font-weight: bold;\n  margin-left: 20px;\n  font-size: 13px;\n}\n.fa[_ngcontent-%COMP%] {\n  font: normal normal normal 20px/1 FontAwesome;\n  color: white;\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n.ffa[_ngcontent-%COMP%] {\n  font: normal normal normal 20px/1 FontAwesome;\n  color: white;\n  font-size: 17px;\n  margin-right: 10px;\n  cursor: pointer;\n  width: 30px;\n}\n.chat-close[_ngcontent-%COMP%] {\n  padding: 0 0.5em;\n  text-align: right;\n  font-size: 30px;\n  color: #42a5f5;\n  cursor: pointer;\n  margin-top: -2px;\n}\n.chat-content[_ngcontent-%COMP%] {\n  background-image: url(\"https://i.pinimg.com/originals/7b/1d/8e/7b1d8e865da2c11b788a21a0fb51d542.jpg\");\n  text-align: left;\n  padding: 0;\n  min-height: 5em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.chat-input-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  padding: 0.5em;\n  border-top: 1px solid #e1e1e1;\n  background: #fff;\n  cursor: text;\n}\n.chat-action[_ngcontent-%COMP%] {\n  cursor: pointer;\n  align-self: center;\n  text-align: center;\n}\n.chat-window-send[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #fff;\n  color: #000;\n  width: 1.5em;\n}\n.chat-window-send[_ngcontent-%COMP%]:active {\n  border: none;\n}\nngx-chat-message-input[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.roster-presence[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-top: 0.5em;\n}\n.roster-presence.roster-presence--present[_ngcontent-%COMP%] {\n  color: #69ca48;\n  font-size: 20px;\n}\n.roster-presence.roster-presence--away[_ngcontent-%COMP%] {\n  color: #ffbe00;\n  font-size: 20px;\n}\n.roster-presence.roster-presence--dnd[_ngcontent-%COMP%] {\n  color: #ff5940;\n  font-size: 20px;\n}\n.roster-presence.roster-presence--unavailable[_ngcontent-%COMP%] {\n  color: #dadada;\n  font-size: 20px;\n}\n.roster-contact-status[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  margin-top: 5px;\n}\n.call-btn-div[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  right: 50%;\n}\n.end-call-btn[_ngcontent-%COMP%] {\n  color: white;\n  border-radius: 50%;\n  font-size: 24px;\n  height: 40px;\n  width: 40px;\n  margin-top: -8px;\n}\n.end-call-btn[_ngcontent-%COMP%]:hover, .end-call-btn[_ngcontent-%COMP%]:focus {\n  color: red;\n  text-decoration: none;\n  cursor: pointer;\n  background-color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaXMvQnVyZWF1L1Byb3h5bS1QRkUvcHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9jaGF0LXdpbmRvdy9jaGF0LXdpbmRvdy5jb21wb25lbnQubGVzcyIsInByb2plY3RzL3Byb3h5bS9uZ3gtY2hhdC9zcmMvbGliL2NvbXBvbmVudHMvY2hhdC13aW5kb3cvY2hhdC13aW5kb3cuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBQTtFQUdBLHdDQUFBO0FDSEY7QURNQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDSkY7QURPQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNMRjtBRFFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtBQ1BGO0FEV0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ1RGO0FET0E7RUFLSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1RKO0FEYUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDWEY7QURjQTtFQUNFLDZDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ1pGO0FEZUE7RUFDRSw2Q0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ2JGO0FEZ0JBO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDZkY7QURtQkE7RUFFRyxxR0FBQTtFQUNELGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDbEJGO0FEcUJBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDbkJGO0FEc0JBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNwQkY7QUR1QkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNyQkY7QUR1QkU7RUFDRSxZQUFBO0FDckJKO0FEeUJBO0VBQ0UsbUJBQUE7VUFBQSxZQUFBO0FDdkJGO0FEMEJBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ3hCRjtBRDJCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDekJKO0FENEJFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUMxQko7QUQ2QkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQzNCSjtBRDhCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDNUJKO0FEZ0NBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDOUJGO0FEaUNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQy9CRjtBRGtDQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDaENGO0FEbUNBOztFQUVFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ2pDRiIsImZpbGUiOiJwcm9qZWN0cy9wcm94eW0vbmd4LWNoYXQvc3JjL2xpYi9jb21wb25lbnRzL2NoYXQtd2luZG93L2NoYXQtd2luZG93LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc3R5bGUnO1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLy9tYXJnaW46IDA7XG4gIC8vcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2VyaWZcbn1cblxuLmVtb2ppLW1hcnQge1xuICB3aWR0aDogMjBlbTtcbiAgaGVpZ2h0OiA5ZW07XG59XG5cbi5jaGF0LXdpbmRvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIEBnZW5lcmFsLWJvcmRlci1jb2xvcjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzEyOEM3RTsgLy8jNDJhNWY1O1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICB3aWR0aDogMjBlbTtcbiAgYm90dG9tOiAwO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbn1cblxuLmNoYXQtY29udGFjdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBAZ2VuZXJhbC1ib3JkZXItY29sb3I7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDNlbTtcbn1cblxuXG4uY2hhdC1jb250YWN0LWF2YXRhciB7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDJlbTtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgfVxufVxuXG4uY2hhdC1jb250YWN0LW5hbWUge1xuICBwYWRkaW5nOiAwIDAuNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZmxleC1ncm93OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmZhIHtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjBweC8xIEZvbnRBd2Vzb21lO1xuICBjb2xvcjogd2hpdGU7Ly8jNDJhNWY1OyAvLyAjMTk4Y2ZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mZmEge1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyMHB4LzEgRm9udEF3ZXNvbWU7XG4gIGNvbG9yOiB3aGl0ZTsvLyM0MmE1ZjU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uY2hhdC1jbG9zZSB7XG5cbiAgcGFkZGluZzogMCAwLjVlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM0MmE1ZjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogLTJweDtcblxufVxuXG4uY2hhdC1jb250ZW50IHtcbiAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFNUREO1xuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzdiLzFkLzhlLzdiMWQ4ZTg2NWRhMmMxMWI3ODhhMjFhMGZiNTFkNTQyLmpwZ1wiKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jaGF0LWlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgQGdlbmVyYWwtYm9yZGVyLWNvbG9yO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjdXJzb3I6IHRleHQ7XG59XG5cbi5jaGF0LWFjdGlvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaGF0LXdpbmRvdy1zZW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbiAgd2lkdGg6IDEuNWVtO1xuXG4gICY6YWN0aXZlIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbn1cblxubmd4LWNoYXQtbWVzc2FnZS1pbnB1dCB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnJvc3Rlci1wcmVzZW5jZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xuICAvL21hcmdpbi1sZWZ0OiAwLjNlbTtcblxuICAmLnJvc3Rlci1wcmVzZW5jZS0tcHJlc2VudCB7XG4gICAgY29sb3I6IEBzdWNjZXNzO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gICYucm9zdGVyLXByZXNlbmNlLS1hd2F5IHtcbiAgICBjb2xvcjogQHdhcm5pbmc7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgJi5yb3N0ZXItcHJlc2VuY2UtLWRuZCB7XG4gICAgY29sb3I6IEBkYW5nZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgJi5yb3N0ZXItcHJlc2VuY2UtLXVuYXZhaWxhYmxlIHtcbiAgICBjb2xvcjogI2RhZGFkYTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cblxuLnJvc3Rlci1jb250YWN0LXN0YXR1cyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmNhbGwtYnRuLWRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogNTAlO1xufVxuXG4uZW5kLWNhbGwtYnRuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luLXRvcDogLThweDtcbn1cblxuLmVuZC1jYWxsLWJ0bjpob3Zlcixcbi5lbmQtY2FsbC1idG46Zm9jdXMge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzZXJpZjtcbn1cbi5lbW9qaS1tYXJ0IHtcbiAgd2lkdGg6IDIwZW07XG4gIGhlaWdodDogOWVtO1xufVxuLmNoYXQtd2luZG93IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzEyOEM3RTtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgd2lkdGg6IDIwZW07XG4gIGJvdHRvbTogMDtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG59XG4uY2hhdC1jb250YWN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogM2VtO1xufVxuLmNoYXQtY29udGFjdC1hdmF0YXIge1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbn1cbi5jaGF0LWNvbnRhY3QtYXZhdGFyIGltZyB7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xufVxuLmNoYXQtY29udGFjdC1uYW1lIHtcbiAgcGFkZGluZzogMCAwLjVlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZsZXgtZ3JvdzogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uZmEge1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyMHB4LzEgRm9udEF3ZXNvbWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmZmYSB7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDIwcHgvMSBGb250QXdlc29tZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMzBweDtcbn1cbi5jaGF0LWNsb3NlIHtcbiAgcGFkZGluZzogMCAwLjVlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM0MmE1ZjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cbi5jaGF0LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvN2IvMWQvOGUvN2IxZDhlODY1ZGEyYzExYjc4OGEyMWEwZmI1MWQ1NDIuanBnXCIpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwO1xuICBtaW4taGVpZ2h0OiA1ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5jaGF0LWlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UxZTFlMTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuLmNoYXQtYWN0aW9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jaGF0LXdpbmRvdy1zZW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbiAgd2lkdGg6IDEuNWVtO1xufVxuLmNoYXQtd2luZG93LXNlbmQ6YWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xufVxubmd4LWNoYXQtbWVzc2FnZS1pbnB1dCB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5yb3N0ZXItcHJlc2VuY2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbn1cbi5yb3N0ZXItcHJlc2VuY2Uucm9zdGVyLXByZXNlbmNlLS1wcmVzZW50IHtcbiAgY29sb3I6ICM2OWNhNDg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5yb3N0ZXItcHJlc2VuY2Uucm9zdGVyLXByZXNlbmNlLS1hd2F5IHtcbiAgY29sb3I6ICNmZmJlMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5yb3N0ZXItcHJlc2VuY2Uucm9zdGVyLXByZXNlbmNlLS1kbmQge1xuICBjb2xvcjogI2ZmNTk0MDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnJvc3Rlci1wcmVzZW5jZS5yb3N0ZXItcHJlc2VuY2UtLXVuYXZhaWxhYmxlIHtcbiAgY29sb3I6ICNkYWRhZGE7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5yb3N0ZXItY29udGFjdC1zdGF0dXMge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uY2FsbC1idG4tZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiA1MCU7XG59XG4uZW5kLWNhbGwtYnRuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luLXRvcDogLThweDtcbn1cbi5lbmQtY2FsbC1idG46aG92ZXIsXG4uZW5kLWNhbGwtYnRuOmZvY3VzIHtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG4iXX0= */"] });
    return ChatWindowComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatWindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngx-chat-window',
                templateUrl: './chat-window.component.html',
                styleUrls: ['./chat-window.component.less']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatServiceToken"]]
            }] }, { type: _services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_11__["ChatListStateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _services_socket_io_service__WEBPACK_IMPORTED_MODULE_12__["SocketIOService"] }, { type: _services_adapters_xmpp_xmpp_chat_adapter_service__WEBPACK_IMPORTED_MODULE_13__["XmppChatAdapter"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatServiceToken"]]
            }] }]; }, { chatWindowState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], messageInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_chat_message_input_chat_message_input_component__WEBPACK_IMPORTED_MODULE_7__["ChatMessageInputComponent"]]
        }] }); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/components/chat.component.ts":
/*!***********************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/components/chat.component.ts ***!
  \***********************************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chat-service */ "./projects/proxym/ngx-chat/src/lib/services/chat-service.ts");
/* harmony import */ var _components_roster_list_roster_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/roster-list/roster-list.component */ "./projects/proxym/ngx-chat/src/lib/components/roster-list/roster-list.component.ts");
/* harmony import */ var _multi_user_chat_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multi-user-chat/data.service */ "./projects/proxym/ngx-chat/src/lib/components/multi-user-chat/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _chat_window_list_chat_window_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-window-list/chat-window-list.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-window-list/chat-window-list.component.ts");
/* harmony import */ var _multi_user_chat_multi_user_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./multi-user-chat/multi-user-chat.component */ "./projects/proxym/ngx-chat/src/lib/components/multi-user-chat/multi-user-chat.component.ts");










function ChatComponent_ngx_chat_window_list_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-chat-window-list", 3);
} if (rf & 2) {
    var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rosterState", ctx_r123.rosterState);
} }
function ChatComponent_ngx_chat_multi_user_chat_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-chat-multi-user-chat", 4);
} if (rf & 2) {
    var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("openA", ctx_r124.isOpen)("name", ctx_r124.roomName)("selectedRoom", ctx_r124.selectedRoom);
} }
function ChatComponent_ngx_chat_roster_list_2_Template(rf, ctx) { if (rf & 1) {
    var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-chat-roster-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("voted", function ChatComponent_ngx_chat_roster_list_2_Template_ngx_chat_roster_list_voted_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r127); var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r126.onVoted($event); })("roomName", function ChatComponent_ngx_chat_roster_list_2_Template_ngx_chat_roster_list_roomName_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r127); var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r128.onVoted1($event); })("wind", function ChatComponent_ngx_chat_roster_list_2_Template_ngx_chat_roster_list_wind_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r127); var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r129.onVoted2($event); })("rosterStateChanged", function ChatComponent_ngx_chat_roster_list_2_Template_ngx_chat_roster_list_rosterStateChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r127); var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r130.onRosterStateChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rosterState", ctx_r125.rosterState)("contacts", ctx_r125.contacts)("contactRequestsReceived$", ctx_r125.contactRequestsReceived$)("contactRequestsSent$", ctx_r125.contactRequestsSent$)("contactsUnaffiliated$", ctx_r125.contactsUnaffiliated$);
} }
/**
 * The main UI component. Should be instantiated near the root of your application.
 *
 * ```html
 * <!-- plain usage, no configuration -->
 * <ngx-chat></ngx-chat>
 *
 * <!-- if supplied, translations contain an object with the structure of the Translations interface. -->
 * <ngx-chat translations="{'contacts': 'Kontakte', ...}"></ngx-chat>
 *
 * <!-- if supplied, the contacts input attribute takes an Observable<Contact[]> as source for your roster list -->
 * <ngx-chat contacts="..."></ngx-chat>
 *
 * <!-- if supplied, userAvatar$ contains an Obervable<string>, which is used as the src attribute of the img for the current user. -->
 * <ngx-chat userAvatar$="Observable.of('http://...')"></ngx-chat>
 * ```
 */
var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService, data) {
        this.chatService = chatService;
        this.data = data;
        /**
         * If supplied, translations contain an object with the structure of the Translations interface.
         */
        this.translations = {};
        this.showChatComponent = false;
        this.defaultTranslations = {
            chat: 'Chat',
            contacts: 'Contacts',
            contactRequestIn: 'Incoming contact requests',
            contactRequestOut: 'Outgoing contact requests',
            contactsUnaffiliated: 'Unknown',
            noContacts: 'No contacts',
            noMessages: 'No messages',
            placeholder: 'Type a message...',
            subscriptionRequestMessage: 'I want to add you',
            acceptSubscriptionRequest: 'Accept',
            denySubscriptionRequest: 'Deny',
            timeFormat: 'shortTime',
            dateFormat: 'EEEE, MM/dd/yyyy',
            locale: undefined,
            dropMessage: 'Drop your file to send it',
            chatRooms: 'Chat Rooms',
            addContact: 'Add Contact',
            profile: 'My Profile',
        };
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.state$.subscribe(function ($e) { return _this.onChatStateChange($e); });
        this.onRosterStateChanged(this.rosterState);
        if (this.userAvatar$) {
            this.userAvatar$.subscribe(function (avatar) { return _this.chatService.userAvatar$.next(avatar); });
        }
        // this.data.currentMessage.subscribe(message => this.selectedRoom = message);
        this.mergeAndSetTranslations();
    };
    ChatComponent.prototype.mergeAndSetTranslations = function () {
        this.chatService.translations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.defaultTranslations), this.translations);
    };
    ChatComponent.prototype.ngOnChanges = function (changes) {
        this.mergeAndSetTranslations();
        if (changes.rosterState) {
            this.onRosterStateChanged(changes.rosterState.currentValue);
        }
    };
    ChatComponent.prototype.countChangedHandler = function (selectedRoom) {
        this.selectedRoom = selectedRoom;
    };
    ChatComponent.prototype.onChatStateChange = function (state) {
        this.showChatComponent = state === 'online';
        this.updateBodyClass();
    };
    ChatComponent.prototype.onRosterStateChanged = function (state) {
        this.rosterState = state;
        this.updateBodyClass();
    };
    ChatComponent.prototype.updateBodyClass = function () {
        var rosterClass = 'has-roster';
        if (this.showChatComponent && this.rosterState !== 'hidden') {
            document.body.classList.add(rosterClass);
        }
        else {
            document.body.classList.remove(rosterClass);
        }
    };
    ChatComponent.prototype.onVoted = function ($event) {
        this.selectedRoom = $event;
    };
    ChatComponent.prototype.onVoted1 = function ($event) {
        this.roomName = $event;
    };
    ChatComponent.prototype.onVoted2 = function ($event) {
        this.isOpen = $event;
    };
    ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatServiceToken"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatServiceToken"])); };
    ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["ngx-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_components_roster_list_roster_list_component__WEBPACK_IMPORTED_MODULE_3__["RosterListComponent"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
        } }, inputs: { translations: "translations", contacts: "contacts", contactRequestsReceived$: "contactRequestsReceived$", contactRequestsSent$: "contactRequestsSent$", contactsUnaffiliated$: "contactsUnaffiliated$", userAvatar$: "userAvatar$", rosterState: "rosterState" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()], decls: 3, vars: 3, consts: [[3, "rosterState", 4, "ngIf"], [3, "openA", "name", "selectedRoom", 4, "ngIf"], [3, "rosterState", "contacts", "contactRequestsReceived$", "contactRequestsSent$", "contactsUnaffiliated$", "voted", "roomName", "wind", "rosterStateChanged", 4, "ngIf"], [3, "rosterState"], [3, "openA", "name", "selectedRoom"], [3, "rosterState", "contacts", "contactRequestsReceived$", "contactRequestsSent$", "contactsUnaffiliated$", "voted", "roomName", "wind", "rosterStateChanged"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ChatComponent_ngx_chat_window_list_0_Template, 1, 1, "ngx-chat-window-list", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatComponent_ngx_chat_multi_user_chat_1_Template, 1, 3, "ngx-chat-multi-user-chat", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatComponent_ngx_chat_roster_list_2_Template, 1, 5, "ngx-chat-roster-list", 2);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showChatComponent);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedRoom);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showChatComponent);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _chat_window_list_chat_window_list_component__WEBPACK_IMPORTED_MODULE_6__["ChatWindowListComponent"], _multi_user_chat_multi_user_chat_component__WEBPACK_IMPORTED_MODULE_7__["MultiUserChatComponent"], _components_roster_list_roster_list_component__WEBPACK_IMPORTED_MODULE_3__["RosterListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9wcm94eW0vbmd4LWNoYXQvc3JjL2xpYi9jb21wb25lbnRzL2NoYXQuY29tcG9uZW50Lmxlc3MifQ== */"] });
    return ChatComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngx-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.less']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatServiceToken"]]
            }] }, { type: _multi_user_chat_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatServiceToken"]]
            }] }]; }, { translations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], contacts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], contactRequestsReceived$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], contactRequestsSent$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], contactsUnaffiliated$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], userAvatar$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rosterState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], child: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_components_roster_list_roster_list_component__WEBPACK_IMPORTED_MODULE_3__["RosterListComponent"]]
        }] }); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/components/communication/audio.component.ts":
/*!**************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/components/communication/audio.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioComponent", function() { return AudioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chat-service */ "./projects/proxym/ngx-chat/src/lib/services/chat-service.ts");
/* harmony import */ var _services_socket_io_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/socket.io.service */ "./projects/proxym/ngx-chat/src/lib/services/socket.io.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");






var AudioComponent = /** @class */ (function () {
    function AudioComponent(chatService, socketIOService, router, changeDetector) {
        this.chatService = chatService;
        this.socketIOService = socketIOService;
        this.router = router;
        this.changeDetector = changeDetector;
        this.title = 'webrtc';
        this.offerOptions = {
            offerToReceiveAudio: true,
            offerToReceiveVideo: true
        };
        // tslint:disable-next-line:no-output-rename
        // tslint:disable-next-line:ban-types
        this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(AudioComponent.prototype, "setCaller", {
        set: function (caller) {
            this.changeDetector.detectChanges();
            this.caller = caller;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioComponent.prototype, "setUserType", {
        set: function (type) {
            var _this = this;
            this.ngOnInit();
            if (type === 'dialer') {
                setTimeout(function () {
                    _this.changeDetector.detectChanges();
                    _this.Call();
                }, 2000);
            }
        },
        enumerable: true,
        configurable: true
    });
    AudioComponent.prototype.SetConnection = function () {
        var _this = this;
        // on both side
        this.peerConnection = new RTCPeerConnection();
        var iceServerConfig = {
            iceServers: [{
                    urls: ['stun:bturn1.xirsys1221.com']
                }, {
                    username: '9hiaOVYRRn31s_Lv2sGS-iGgtEKg5_3SVWfeEZyO-4GWtKxUv0sCxQVNGkxlk-zBAAAAAF0sGiFhamF5cGF0aWw=',
                    credential: '04f626c0-a6c8-11e9-8ad1-26d3ed601a80',
                    urls: [
                        'turn:bturn1.xirsys.com:80?transport=udp',
                        'turn:bturn1.xirsys.com:3478?transport=udp',
                        'turn:bturn1.xirsys.com:80?transport=tcp',
                        'turn:bturn1.xirsys.com:3478?transport=tcp',
                        'turns:bturn1.xirsys.com:443?transport=tcp',
                        'turns:bturn1.xirsys.com:5349?transport=tcp'
                    ]
                }]
        };
        this.peerConnection.setConfiguration(iceServerConfig);
        this.localStream.getTracks().forEach(function (track) {
            _this.peerConnection.addTrack(track, _this.localStream);
        });
        // this.peerConnection.addStream(this.localStream);
        this.peerConnection.onicecandidate = function (e) {
            _this.OnIceCandidate(_this.peerConnection, e);
        };
        this.peerConnection.ontrack = function (event) {
            // don't set srcObject again if it is already set.
            // for (var stream of event.streams) {
            // console.log("Remote streams: " + stream.id);
            // }
            // getting first stream only
            // this is only for p2p call
            _this.GotRemoteStream(event.streams[0]);
        };
        this.peerConnection.oniceconnectionstatechange = function (e) {
            _this.OnIceStateChange(_this.peerConnection, e);
        };
    };
    AudioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.GetLocalStream();
        this.loggedUserName = sessionStorage.getItem('username');
        this.socketIOService
            .ReceiveCallRequest()
            .subscribe(function (data) {
            _this.OnCallRequestReceived(data.data);
        });
        this.OnCallEndedAudio();
        this.OnCallEndedVideo();
    };
    AudioComponent.prototype.OnCallRequestReceived = function (data) {
        // console.log("call received");
        // console.log(data);
        if (data.desc) {
            var descrip = new RTCSessionDescription(data.desc);
            if (descrip.type === 'offer') {
                this.SetConnection();
                this.OnCallOffer(descrip);
            }
            else if (descrip.type === 'answer') {
                this.OnCallAnswer(descrip);
            }
            else {
                // tslint:disable-next-line:no-console
                console.log('Unsupported SDP type!!');
            }
        }
        else if (data.candidate) {
            var candidate = new RTCIceCandidate(data.candidate);
            // tslint:disable-next-line:no-console
            this.peerConnection.addIceCandidate(candidate).catch(function (err) { return console.log(err); });
        }
    };
    AudioComponent.prototype.Call = function () {
        var _this = this;
        this.SetConnection();
        // tslint:disable-next-line:jsdoc-format
        /**Step 1: caller creates offer */
        this.peerConnection.onnegotiationneeded = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                try {
                    this.peerConnection.createOffer(this.offerOptions)
                        .then(this.OnCreateOfferSuccess.bind(this), this.OnCreateSessionDescriptionError.bind(this));
                }
                catch (err) {
                    // tslint:disable-next-line:no-console
                    console.error(err);
                }
                return [2 /*return*/];
            });
        }); };
    };
    AudioComponent.prototype.OnCreateOfferSuccess = function (event) {
        var _this = this;
        // tslint:disable-next-line:jsdoc-format
        /**Step 2: caller sets localDescription */
        this.peerConnection.setLocalDescription(new RTCSessionDescription(event)).then(function () {
            // tslint:disable-next-line:jsdoc-format
            /**Step 3: caller sends the description to the callee */
            _this.socketIOService.SendCallRequest(_this.peerConnection.localDescription, 'desc', _this.caller);
            _this.ShowSuccess('created offer /nlocal description set /n=>Success');
        }, this.OnSetSessionDescriptionError.bind(this));
    };
    AudioComponent.prototype.OnCallOffer = function (descrip) {
        var _this = this;
        // tslint:disable-next-line:jsdoc-format
        /**Step 4: callee receives the offer sets remote description */
        this.peerConnection.setRemoteDescription(descrip).then(function () {
            _this.OnSetRemoteSuccess(_this.peerConnection);
        }, this.OnSetSessionDescriptionError.bind(this));
    };
    AudioComponent.prototype.OnSetRemoteSuccess = function (val) {
        // tslint:disable-next-line:jsdoc-format
        /**Step 5: callee creates answer */
        this.peerConnection.createAnswer().then(this.OnCreateAnswerSuccess.bind(this), this.OnCreateSessionDescriptionError.bind(this));
    };
    AudioComponent.prototype.OnCreateAnswerSuccess = function (event) {
        var _this = this;
        // tslint:disable-next-line:jsdoc-format
        /**Step 6: callee sets local description */
        this.peerConnection.setLocalDescription(new RTCSessionDescription(event)).then(function () {
            // tslint:disable-next-line:jsdoc-format
            /**Step 7: callee send the description to caller */
            _this.socketIOService.SendCallRequest(_this.peerConnection.localDescription, 'desc', _this.caller);
            _this.ShowSuccess('create answer /n=>success');
        }, this.OnSetSessionDescriptionError.bind(this));
    };
    AudioComponent.prototype.OnCallAnswer = function (descrip) {
        var _this = this;
        // tslint:disable-next-line:jsdoc-format
        /**Step 8: caller receives the answer and sets remote description */
        this.peerConnection.setRemoteDescription(new RTCSessionDescription(descrip))
            // tslint:disable-next-line:no-console
            .then(function () { return _this.ShowSuccess('Succesfully set remote description'); }).catch(function (err) { console.log(err); });
    };
    // get local stream
    AudioComponent.prototype.GetLocalStream = function () {
        // navigator.mediaDevices.enumerateDevices()
        //     .then(this.GotDevices.bind(this))
        //     .catch(this.HandleDeviceError.bind(this));
        navigator.mediaDevices.getUserMedia({
            video: false,
            audio: true
        }).then(this.GotLocalStream.bind(this))
            .then(this.GotDevices.bind(this))
            .catch(this.HandleDeviceError.bind(this));
    };
    // got local stream
    AudioComponent.prototype.GotLocalStream = function (stream) {
        var lv = document.getElementById('local-video');
        lv.srcObject = stream;
        lv.controls = false;
        lv.muted = true;
        lv.volume = 0;
        this.localStream = stream;
        // tslint:disable-next-line:no-console
        console.log('local stream id => ' + stream.id);
        // this.SetConnection();
    };
    AudioComponent.prototype.OnIceCandidate = function (conn, event) {
        if (event.candidate) {
            // Send the candidate to the remote peer
            // console.log("Send the candidate to the remote peer");
            var candi = new RTCIceCandidate(event.candidate);
            this.socketIOService.SendCallRequest(candi, 'candidate', this.caller);
        }
        else {
            // All ICE candidates have been sent
            // console.log("All ICE candidates have been sent");
        }
    };
    AudioComponent.prototype.OnIceStateChange = function (peerConn, event) {
        if (peerConn) {
            // console.log('ICE state change event: ', event);
        }
    };
    AudioComponent.prototype.GotRemoteStream = function (stream) {
        // console.log("got remote stream");
        var lv = document.getElementById('remote-video');
        lv.srcObject = stream;
        // var remotevid=document.createElement("video") as HTMLVideoElement;
        // remotevid.srcObject=stream;
        // remotevid.autoplay = true;
        // remotevid.id=stream.id;
        // var lv = document.querySelector('#div-remote-video');
        // lv.appendChild(remotevid);
        // for (var stream of event.streams) {
        //     if (!lv.srcObject)
        //         lv.srcObject = stream;
        //     console.log("Remote streams: " + stream.id);
        // }
    };
    AudioComponent.prototype.OnCreateSessionDescriptionError = function (event) {
        // console.log("OnCreateSessionDescriptionError");
        // this.peerConnection.setRemoteDescription(event).then(
        //     () => {
        //         this.OnSetRemoteSuccess(this.peerConnection);
        //     },
        //     this.OnSetSessionDescriptionError.bind(this)
        // );
    };
    AudioComponent.prototype.ShowSuccess = function (message) {
        // tslint:disable-next-line:no-console
        console.log(message);
    };
    AudioComponent.prototype.OnSetSessionDescriptionError = function (val) {
        // console.log("error " + val);
    };
    AudioComponent.prototype.GotDevices = function (deviceInfos) {
        // Handles being called several times to update labels. Preserve values.
        // const values = this.selectors.map(select => select.value);
        // selectors.forEach(select => {
        //   while (select.firstChild) {
        //     select.removeChild(select.firstChild);
        //   }
        // });
        var flagMic = false;
        var flagSpeaker = false;
        var flagWebCam = false;
        for (var i = 0; i !== deviceInfos.length; ++i) {
            var deviceInfo = deviceInfos[i];
            // console.log(i + 1, deviceInfo.label);
            if (deviceInfo.kind === 'audioinput') {
                flagMic = true;
            }
            if (deviceInfo.kind === 'audiooutput') {
                flagSpeaker = true;
            }
            if (deviceInfo.kind === 'videoinput') {
                flagWebCam = true;
            }
            //   const option = document.createElement('option');
            //   option.value = deviceInfo.deviceId;
            //   if (deviceInfo.kind === 'audioinput') {
            //     option.text = deviceInfo.label || `microphone ${audioInputSelect.length + 1}`;
            //     audioInputSelect.appendChild(option);
            //   } else if (deviceInfo.kind === 'audiooutput') {
            //     option.text = deviceInfo.label || `speaker ${audioOutputSelect.length + 1}`;
            //     audioOutputSelect.appendChild(option);
            //   } else if (deviceInfo.kind === 'videoinput') {
            //     option.text = deviceInfo.label || `camera ${videoSelect.length + 1}`;
            //     videoSelect.appendChild(option);
            //   } else {
            //     console.log('Some other kind of source/device: ', deviceInfo);
            //   }
        }
        var msg = '';
        if (!flagMic) {
            msg += 'microphone ';
        }
        if (!flagSpeaker) {
            msg += 'speaker ';
        }
        if (!flagWebCam) {
            msg += 'webcam ';
        }
        if (msg !== '') {
            alert(msg + 'not found!');
        }
        // selectors.forEach((select, selectorIndex) => {
        //   if (Array.prototype.slice.call(select.childNodes).some(n => n.value === values[selectorIndex])) {
        //     select.value = values[selectorIndex];
        //   }
        // });
    };
    AudioComponent.prototype.HandleDeviceError = function (error) {
        if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
            alert('webcam or mic not connected to your system');
        }
        else if (error.name === 'NotReadableError' || error.name === 'TrackStartError') {
            alert('webcam or mic already in use by another application');
        }
        else if (error.name === 'OverconstrainedError' || error.name === 'ConstraintNotSatisfiedError') {
            alert('webcam or mic not supported!');
        }
        else if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
            alert('Access denied for accessing webcam or mic!');
        }
        else if (error.name === 'MediaStreamError' || error.name === 'TypeError') {
            // empty constraints object
            // alert("Unable to get media!");
            // tslint:disable-next-line:no-console
            console.log('empty constraints object');
        }
        else if (error.name === 'PermissionDismissedError') {
            alert('Permission is dismissed for access webcam or mic');
        }
        // tslint:disable-next-line:no-console
        console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
    };
    AudioComponent.prototype.EndCallVideo = function () {
        var _this = this;
        var caller = this.socketIOService.connectedusers.find(function (a) { return a.id === _this.caller; });
        this.socketIOService.EndVideoCall(this.loggedUserName, this.caller, caller.username);
        this.CallBack();
    };
    AudioComponent.prototype.EndCallAudio = function () {
        var _this = this;
        var caller = this.socketIOService.connectedusers.find(function (a) { return a.id === _this.caller; });
        this.socketIOService.EndAudioCall(this.loggedUserName, this.caller, caller.username);
        this.CallBack();
    };
    AudioComponent.prototype.OnCallEndedVideo = function () {
        var _this = this;
        this.socketIOService
            .OnVideoCallEnded()
            .subscribe(function (data) {
            if (data) {
                _this.socketIOService.GetBusyUsers();
                _this.CallBack();
            }
        });
    };
    AudioComponent.prototype.OnCallEndedAudio = function () {
        var _this = this;
        this.socketIOService
            .OnAudioCallEnded()
            .subscribe(function (data) {
            if (data) {
                _this.socketIOService.GetBusyUsers();
                _this.CallBack();
            }
        });
    };
    AudioComponent.prototype.CallBack = function () {
        var _this = this;
        var senders = this.peerConnection.getSenders();
        senders.forEach(function (s) {
            _this.peerConnection.removeTrack(s);
        });
        // stop both video and audio
        /*this.localStream.getTracks().forEach((track) => {
          track.stop();
        });*/
        // stop only audio
        this.localStream.getAudioTracks()[0].stop();
        // stop only audio
        // this.localStream.getVideoTracks()[0].stop();
        this.peerConnection.close();
        this.peerConnection = new RTCPeerConnection();
        this.callback.emit({ status: 'ended' });
    };
    AudioComponent.ɵfac = function AudioComponent_Factory(t) { return new (t || AudioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatServiceToken"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_socket_io_service__WEBPACK_IMPORTED_MODULE_3__["SocketIOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
    AudioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AudioComponent, selectors: [["ngx-chat-audio-call"]], inputs: { setCaller: ["caller", "setCaller"], chatWindowState: "chatWindowState", setUserType: ["userType", "setUserType"] }, outputs: { callback: "callback" }, decls: 10, vars: 1, consts: [[1, "row", 2, "height", "100%", "width", "100%", "overflow", "hidden"], [1, "col-lg-12", 2, "text-align", "center"], [2, "max-width", "100%", "border-radius", "8em", 3, "src"], ["id", "remote-video", "controls", "", "autoplay", "", 1, "remoteaudio", 2, "width", "100%", "margin-top", "-58px"], ["id", "local-video", "controls", "", "autoplay", "", "muted", "", 1, "localaudion", 2, "margin-top", "-128px"], [1, "btn", "btn-sm", "btn-danger", "end-call-btn", 2, "border-radius", "50%", "font-size", "24px", "height", "40px", "width", "40px", 3, "click"], [1, "fa", "fa-phone"], [1, "row", "callaudio-btn-div"]], template: function AudioComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "video", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "video", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AudioComponent_Template_button_click_7_listener() { return ctx.EndCallAudio(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 7);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.chatWindowState.contact.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9wcm94eW0vbmd4LWNoYXQvc3JjL2xpYi9jb21wb25lbnRzL2NvbW11bmljYXRpb24vYXVkaW8uY29tcG9uZW50LmNzcyJ9 */"] });
    return AudioComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AudioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngx-chat-audio-call',
                templateUrl: './audio.component.html',
                styleUrls: ['./audio.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatServiceToken"]]
            }] }, { type: _services_socket_io_service__WEBPACK_IMPORTED_MODULE_3__["SocketIOService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { setCaller: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['caller']
        }], chatWindowState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], setUserType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['userType']
        }], callback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['callback']
        }] }); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/components/communication/video.component.ts":
/*!**************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/components/communication/video.component.ts ***!
  \**************************************************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_socket_io_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/socket.io.service */ "./projects/proxym/ngx-chat/src/lib/services/socket.io.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





/**
Step 1: caller creates offer

Step 2: caller sets localDescription

Step 3: caller sends the description to the callee

//------------------------------------------------------//

Step 4: callee receives the offer sets remote description

Step 5: callee creates answer

Step 6: callee sets local description

Step 7: callee send the description to caller

//------------------------------------------------------//

Step 8: caller receives the answer and sets remote description
 */
var VideoComponent = /** @class */ (function () {
    function VideoComponent(socketIOService, router, changeDetector) {
        this.socketIOService = socketIOService;
        this.router = router;
        this.changeDetector = changeDetector;
        this.title = 'webrtc';
        this.offerOptions = {
            offerToReceiveAudio: true,
            offerToReceiveVideo: true
        };
        this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(VideoComponent.prototype, "setCaller", {
        set: function (_caller) {
            this.changeDetector.detectChanges();
            this.caller = _caller;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VideoComponent.prototype, "setUserType", {
        set: function (_type) {
            var _this = this;
            this.ngOnInit();
            if (_type == 'dialer') {
                setTimeout(function () {
                    _this.changeDetector.detectChanges();
                    _this.Call();
                }, 2000);
            }
        },
        enumerable: true,
        configurable: true
    });
    VideoComponent.prototype.SetConnection = function () {
        var _this = this;
        //on both side
        this.peerConnection = new RTCPeerConnection();
        var iceServerConfig = {
            iceServers: [{
                    urls: ["stun:bturn1.xirsys1221.com"]
                }, {
                    username: "9hiaOVYRRn31s_Lv2sGS-iGgtEKg5_3SVWfeEZyO-4GWtKxUv0sCxQVNGkxlk-zBAAAAAF0sGiFhamF5cGF0aWw=",
                    credential: "04f626c0-a6c8-11e9-8ad1-26d3ed601a80",
                    urls: [
                        "turn:bturn1.xirsys.com:80?transport=udp",
                        "turn:bturn1.xirsys.com:3478?transport=udp",
                        "turn:bturn1.xirsys.com:80?transport=tcp",
                        "turn:bturn1.xirsys.com:3478?transport=tcp",
                        "turns:bturn1.xirsys.com:443?transport=tcp",
                        "turns:bturn1.xirsys.com:5349?transport=tcp"
                    ]
                }]
        };
        this.peerConnection.setConfiguration(iceServerConfig);
        this.localStream.getTracks().forEach(function (track) {
            _this.peerConnection.addTrack(track, _this.localStream);
        });
        //this.peerConnection.addStream(this.localStream);
        this.peerConnection.onicecandidate = function (e) {
            _this.OnIceCandidate(_this.peerConnection, e);
        };
        this.peerConnection.ontrack = function (event) {
            // don't set srcObject again if it is already set.
            //for (var stream of event.streams) {
            //console.log("Remote streams: " + stream.id);
            //}
            //getting first stream only
            //this is only for p2p call
            _this.GotRemoteStream(event.streams[0]);
        };
        this.peerConnection.oniceconnectionstatechange = function (e) {
            _this.OnIceStateChange(_this.peerConnection, e);
        };
    };
    VideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.GetLocalStream();
        this.loggedUserName = sessionStorage.getItem("username");
        this.socketIOService
            .ReceiveCallRequest()
            .subscribe(function (data) {
            _this.OnCallRequestReceived(data.data);
        });
        this.OnCallEnded();
    };
    VideoComponent.prototype.OnCallRequestReceived = function (data) {
        //console.log("call received");
        //console.log(data);
        if (data.desc) {
            var descrip = new RTCSessionDescription(data.desc);
            if (descrip.type == "offer") {
                this.SetConnection();
                this.OnCallOffer(descrip);
            }
            else if (descrip.type == "answer") {
                this.OnCallAnswer(descrip);
            }
            else {
                console.log("Unsupported SDP type!!");
            }
        }
        else if (data.candidate) {
            var candidate = new RTCIceCandidate(data.candidate);
            this.peerConnection.addIceCandidate(candidate).catch(function (err) { return console.log(err); });
        }
    };
    VideoComponent.prototype.Call = function () {
        var _this = this;
        this.SetConnection();
        /**Step 1: caller creates offer */
        this.peerConnection.onnegotiationneeded = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                try {
                    this.peerConnection.createOffer(this.offerOptions)
                        .then(this.OnCreateOfferSuccess.bind(this), this.OnCreateSessionDescriptionError.bind(this));
                }
                catch (err) {
                    console.error(err);
                }
                return [2 /*return*/];
            });
        }); };
    };
    VideoComponent.prototype.OnCreateOfferSuccess = function (event) {
        var _this = this;
        /**Step 2: caller sets localDescription */
        this.peerConnection.setLocalDescription(new RTCSessionDescription(event)).then(function () {
            /**Step 3: caller sends the description to the callee */
            _this.socketIOService.SendCallRequest(_this.peerConnection.localDescription, 'desc', _this.caller);
            _this.ShowSuccess('created offer /nlocal description set /n=>Success');
        }, this.OnSetSessionDescriptionError.bind(this));
    };
    VideoComponent.prototype.OnCallOffer = function (descrip) {
        var _this = this;
        /**Step 4: callee receives the offer sets remote description */
        this.peerConnection.setRemoteDescription(descrip).then(function () {
            _this.OnSetRemoteSuccess(_this.peerConnection);
        }, this.OnSetSessionDescriptionError.bind(this));
    };
    VideoComponent.prototype.OnSetRemoteSuccess = function (val) {
        /**Step 5: callee creates answer */
        this.peerConnection.createAnswer().then(this.OnCreateAnswerSuccess.bind(this), this.OnCreateSessionDescriptionError.bind(this));
    };
    VideoComponent.prototype.OnCreateAnswerSuccess = function (event) {
        var _this = this;
        /**Step 6: callee sets local description */
        this.peerConnection.setLocalDescription(new RTCSessionDescription(event)).then(function () {
            /**Step 7: callee send the description to caller */
            _this.socketIOService.SendCallRequest(_this.peerConnection.localDescription, 'desc', _this.caller);
            _this.ShowSuccess("create answer /n=>success");
        }, this.OnSetSessionDescriptionError.bind(this));
    };
    VideoComponent.prototype.OnCallAnswer = function (descrip) {
        var _this = this;
        /**Step 8: caller receives the answer and sets remote description */
        this.peerConnection.setRemoteDescription(new RTCSessionDescription(descrip))
            .then(function () { return _this.ShowSuccess('Succesfully set remote description'); }).catch(function (err) { console.log(err); });
    };
    //get local stream
    VideoComponent.prototype.GetLocalStream = function () {
        // navigator.mediaDevices.enumerateDevices()
        //     .then(this.GotDevices.bind(this))
        //     .catch(this.HandleDeviceError.bind(this));
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(this.GotLocalStream.bind(this))
            .then(this.GotDevices.bind(this))
            .catch(this.HandleDeviceError.bind(this));
    };
    //got local stream
    VideoComponent.prototype.GotLocalStream = function (stream) {
        var lv = document.getElementById('local-video');
        lv.srcObject = stream;
        lv.controls = false;
        lv.muted = true;
        lv.volume = 0;
        this.localStream = stream;
        console.log("local stream id => " + stream.id);
        //this.SetConnection();
    };
    VideoComponent.prototype.OnIceCandidate = function (conn, event) {
        if (event.candidate) {
            // Send the candidate to the remote peer
            //console.log("Send the candidate to the remote peer");
            var candi = new RTCIceCandidate(event.candidate);
            this.socketIOService.SendCallRequest(candi, 'candidate', this.caller);
        }
        else {
            // All ICE candidates have been sent
            //console.log("All ICE candidates have been sent");
        }
    };
    VideoComponent.prototype.OnIceStateChange = function (peerConn, event) {
        if (peerConn) {
            //console.log('ICE state change event: ', event);
        }
    };
    VideoComponent.prototype.GotRemoteStream = function (stream) {
        //console.log("got remote stream");
        var lv = document.getElementById('remote-video');
        lv.srcObject = stream;
        // var remotevid=document.createElement("video") as HTMLVideoElement;
        // remotevid.srcObject=stream;
        // remotevid.autoplay = true;
        // remotevid.id=stream.id;
        // var lv = document.querySelector('#div-remote-video');
        // lv.appendChild(remotevid);
        // for (var stream of event.streams) {
        //     if (!lv.srcObject)
        //         lv.srcObject = stream;
        //     console.log("Remote streams: " + stream.id);
        // }
    };
    VideoComponent.prototype.OnCreateSessionDescriptionError = function (event) {
        //console.log("OnCreateSessionDescriptionError");
        // this.peerConnection.setRemoteDescription(event).then(
        //     () => {
        //         this.OnSetRemoteSuccess(this.peerConnection);
        //     },
        //     this.OnSetSessionDescriptionError.bind(this)
        // );
    };
    VideoComponent.prototype.ShowSuccess = function (message) {
        console.log(message);
    };
    VideoComponent.prototype.OnSetSessionDescriptionError = function (val) {
        //console.log("error " + val);
    };
    VideoComponent.prototype.GotDevices = function (deviceInfos) {
        // Handles being called several times to update labels. Preserve values.
        // const values = this.selectors.map(select => select.value);
        // selectors.forEach(select => {
        //   while (select.firstChild) {
        //     select.removeChild(select.firstChild);
        //   }
        // });
        var flagMic = false;
        var flagSpeaker = false;
        var flagWebCam = false;
        for (var i = 0; i !== deviceInfos.length; ++i) {
            var deviceInfo = deviceInfos[i];
            //console.log(i + 1, deviceInfo.label);
            if (deviceInfo.kind == 'audioinput') {
                flagMic = true;
            }
            if (deviceInfo.kind == 'audiooutput') {
                flagSpeaker = true;
            }
            if (deviceInfo.kind == 'videoinput') {
                flagWebCam = true;
            }
            //   const option = document.createElement('option');
            //   option.value = deviceInfo.deviceId;
            //   if (deviceInfo.kind === 'audioinput') {
            //     option.text = deviceInfo.label || `microphone ${audioInputSelect.length + 1}`;
            //     audioInputSelect.appendChild(option);
            //   } else if (deviceInfo.kind === 'audiooutput') {
            //     option.text = deviceInfo.label || `speaker ${audioOutputSelect.length + 1}`;
            //     audioOutputSelect.appendChild(option);
            //   } else if (deviceInfo.kind === 'videoinput') {
            //     option.text = deviceInfo.label || `camera ${videoSelect.length + 1}`;
            //     videoSelect.appendChild(option);
            //   } else {
            //     console.log('Some other kind of source/device: ', deviceInfo);
            //   }
        }
        var msg = '';
        if (!flagMic) {
            msg += 'microphone ';
        }
        if (!flagSpeaker) {
            msg += 'speaker ';
        }
        if (!flagWebCam) {
            msg += 'webcam ';
        }
        if (msg != '') {
            alert(msg + "not found!");
        }
        // selectors.forEach((select, selectorIndex) => {
        //   if (Array.prototype.slice.call(select.childNodes).some(n => n.value === values[selectorIndex])) {
        //     select.value = values[selectorIndex];
        //   }
        // });
    };
    VideoComponent.prototype.HandleDeviceError = function (error) {
        if (error.name == "NotFoundError" || error.name == "DevicesNotFoundError") {
            alert("webcam or mic not connected to your system");
        }
        else if (error.name == "NotReadableError" || error.name == "TrackStartError") {
            alert("webcam or mic already in use by another application");
        }
        else if (error.name == "OverconstrainedError" || error.name == "ConstraintNotSatisfiedError") {
            alert("webcam or mic not supported!");
        }
        else if (error.name == "NotAllowedError" || error.name == "PermissionDeniedError") {
            alert("Access denied for accessing webcam or mic!");
        }
        else if (error.name == "MediaStreamError" || error.name == "TypeError") {
            //empty constraints object
            //alert("Unable to get media!");
            console.log("empty constraints object");
        }
        else if (error.name == "PermissionDismissedError") {
            alert("Permission is dismissed for access webcam or mic");
        }
        console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
    };
    VideoComponent.prototype.EndCall = function () {
        var _this = this;
        var caller = this.socketIOService.connectedusers.find(function (a) { return a.id == _this.caller; });
        this.socketIOService.EndVideoCall(this.loggedUserName, this.caller, caller.username);
        this.CallBack();
    };
    VideoComponent.prototype.OnCallEnded = function () {
        var _this = this;
        this.socketIOService
            .OnVideoCallEnded()
            .subscribe(function (data) {
            if (data) {
                _this.socketIOService.GetBusyUsers();
                _this.CallBack();
            }
        });
    };
    VideoComponent.prototype.CallBack = function () {
        var _this = this;
        var senders = this.peerConnection.getSenders();
        senders.forEach(function (s) {
            _this.peerConnection.removeTrack(s);
        });
        // stop both video and audio
        /* this.localStream.getTracks().forEach((track) => {
             track.stop();
         });*/
        // stop only audio
        // this.localStream.getAudioTracks()[0].stop();
        //stop only audio
        this.localStream.getVideoTracks()[0].stop();
        // this.peerConnection.close();
        this.peerConnection = new RTCPeerConnection();
        this.callback.emit({ status: "ended" });
    };
    VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_socket_io_service__WEBPACK_IMPORTED_MODULE_2__["SocketIOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
    VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["ngx-chat-video-call"]], inputs: { setCaller: ["caller", "setCaller"], setUserType: ["userType", "setUserType"] }, outputs: { callback: "callback" }, decls: 6, vars: 0, consts: [[1, "row", 2, "height", "100%", "width", "100%", "overflow", "hidden"], [1, "col-lg-12", 2, "height", "100%", "margin-left", "17px", "text-align", "center"], ["id", "remote-video", "controls", "", "autoplay", "", 1, "remotevideo"], ["id", "local-video", "controls", "", "autoplay", "", "muted", "", 1, "localvideo"], [1, "btn", "btn-sm", "btn-danger", "end-call-btn", 3, "click"], [1, "fa", "fa-phone"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "video", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "video", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoComponent_Template_button_click_4_listener() { return ctx.EndCall(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, styles: [".localvideo[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 20%;\n    width: 20%;\n\n    right: 15px;\n    border-radius: 10px;\n}\n\n.remotevideo[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n\n.video[_ngcontent-%COMP%]:first-child {\n    display: none;\n}\n\n.call-btn-div[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 10px;\n    right: 50%;\n}\n\n.end-call-btn[_ngcontent-%COMP%] {\n    color: white;\n    border-radius: 50%;\n    font-size: 24px;\n    height: 40px;\n    width: 40px;\n}\n\n.end-call-btn[_ngcontent-%COMP%]:hover, .end-call-btn[_ngcontent-%COMP%]:focus {\n    color: red;\n    text-decoration: none;\n    cursor: pointer;\n    background-color: gray;\n}\n\n.localaudio[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 20%;\n    width: 20%;\n\n    right: 15px;\n    border-radius: 10px;\n}\n\n.remoteaudio[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n\n.callaudio-btn-div[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 10px;\n    right: 50%;\n}\n\n.endaudio-call-btn[_ngcontent-%COMP%] {\n    color: white;\n    border-radius: 50%;\n    font-size: 25px;\n    height: 40px;\n    width: 40px;\n}\n\n.endaudio-call-btn[_ngcontent-%COMP%]:hover, .endaudio-call-btn[_ngcontent-%COMP%]:focus {\n    color: red;\n    text-decoration: none;\n    cursor: pointer;\n    background-color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3Byb3h5bS9uZ3gtY2hhdC9zcmMvbGliL2NvbXBvbmVudHMvY29tbXVuaWNhdGlvbi9jb21tdW5pY2F0aW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTs7SUFFVixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTs7SUFFVixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCIiwiZmlsZSI6InByb2plY3RzL3Byb3h5bS9uZ3gtY2hhdC9zcmMvbGliL2NvbXBvbmVudHMvY29tbXVuaWNhdGlvbi9jb21tdW5pY2F0aW9uLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2NhbHZpZGVvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgd2lkdGg6IDIwJTtcblxuICAgIHJpZ2h0OiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5yZW1vdGV2aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udmlkZW86Zmlyc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jYWxsLWJ0bi1kaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgcmlnaHQ6IDUwJTtcbn1cblxuLmVuZC1jYWxsLWJ0biB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG4uZW5kLWNhbGwtYnRuOmhvdmVyLFxuLmVuZC1jYWxsLWJ0bjpmb2N1cyB7XG4gICAgY29sb3I6IHJlZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5cblxuLmxvY2FsYXVkaW8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgICB3aWR0aDogMjAlO1xuXG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnJlbW90ZWF1ZGlvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYWxsYXVkaW8tYnRuLWRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICByaWdodDogNTAlO1xufVxuXG4uZW5kYXVkaW8tY2FsbC1idG4ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbn1cblxuLmVuZGF1ZGlvLWNhbGwtYnRuOmhvdmVyLFxuLmVuZGF1ZGlvLWNhbGwtYnRuOmZvY3VzIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cblxuIl19 */"] });
    return VideoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngx-chat-video-call',
                templateUrl: './video.component.html',
                styleUrls: ['./communication.css']
            }]
    }], function () { return [{ type: _services_socket_io_service__WEBPACK_IMPORTED_MODULE_2__["SocketIOService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { setCaller: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['caller']
        }], setUserType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ["userType"]
        }], callback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["callback"]
        }] }); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/components/icons/icons.module.ts":
/*!***************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/components/icons/icons.module.ts ***!
  \***************************************************************************/
/*! exports provided: IconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsModule", function() { return IconsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/__ivy_ngcc__/fesm5/angular-feather.js");
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather/icons */ "./node_modules/angular-feather/__ivy_ngcc__/fesm5/angular-feather-icons.js");






var icons = {
    Camera: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Camera"],
    Smile: angular_feather_icons__WEBPACK_IMPORTED_MODULE_3__["Smile"]
};
var IconsModule = /** @class */ (function () {
    function IconsModule() {
    }
    IconsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IconsModule });
    IconsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IconsModule_Factory(t) { return new (t || IconsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_feather__WEBPACK_IMPORTED_MODULE_2__["FeatherModule"].pick(icons),
            ],
            angular_feather__WEBPACK_IMPORTED_MODULE_2__["FeatherModule"]] });
    return IconsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_feather__WEBPACK_IMPORTED_MODULE_2__["FeatherModule"]], exports: [angular_feather__WEBPACK_IMPORTED_MODULE_2__["FeatherModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_feather__WEBPACK_IMPORTED_MODULE_2__["FeatherModule"].pick(icons),
                ],
                exports: [
                    angular_feather__WEBPACK_IMPORTED_MODULE_2__["FeatherModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/components/multi-user-chat/data.service.ts":
/*!*************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/components/multi-user-chat/data.service.ts ***!
  \*************************************************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var DataService = /** @class */ (function () {
    function DataService() {
        this.currentMessage = this.messageSource.asObservable();
    }
    DataService.prototype.changeMessage = function (room) {
        this.messageSource.next(room);
    };
    DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
    return DataService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/components/multi-user-chat/multi-user-chat.component.ts":
/*!**************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/components/multi-user-chat/multi-user-chat.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: MultiUserChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiUserChatComponent", function() { return MultiUserChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chat-service */ "./projects/proxym/ngx-chat/src/lib/services/chat-service.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_http_file_upload_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/adapters/xmpp/plugins/http-file-upload.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/http-file-upload.plugin.ts");
/* harmony import */ var _chat_message_input_chat_message_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chat-message-input/chat-message-input.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-message-input/chat-message-input.component.ts");
/* harmony import */ var _services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/chat-list-state.service */ "./projects/proxym/ngx-chat/src/lib/services/chat-list-state.service.ts");
/* harmony import */ var _services_socket_io_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/socket.io.service */ "./projects/proxym/ngx-chat/src/lib/services/socket.io.service.ts");
/* harmony import */ var _services_adapters_xmpp_xmpp_chat_adapter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/adapters/xmpp/xmpp-chat-adapter.service */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/xmpp-chat-adapter.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _chat_filedrop_file_drop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../chat-filedrop/file-drop.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-filedrop/file-drop.component.ts");
/* harmony import */ var _chat_room_messages_chat_room_messages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../chat-room-messages/chat-room-messages.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-room-messages/chat-room-messages.component.ts");













function MultiUserChatComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-chat-room-messages", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ngx-chat-message-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("room", ctx_r137.selectedRoom);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("room", ctx_r137.selectedRoom);
} }
function MultiUserChatComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-chat-filedrop", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("fileUpload", function MultiUserChatComponent_div_0_Template_ngx_chat_filedrop_fileUpload_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r139); var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r138.uploadFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiUserChatComponent_div_0_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r139); var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r140.onClickHeader(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiUserChatComponent_div_0_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r139); var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r141.onClickHeader(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiUserChatComponent_div_0_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r139); var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r142.onClickClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MultiUserChatComponent_div_0_div_11_Template, 4, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enabled", ctx_r136.httpFileUploadPlugin.fileUploadSupported)("dropMessage", ctx_r136.chatService.translations.dropMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r136.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r136.selectedRoom);
} }
var MultiUserChatComponent = /** @class */ (function () {
    function MultiUserChatComponent(chatService, chatListService, changeDetector, socketIOService, chatServicee) {
        this.chatService = chatService;
        this.chatListService = chatListService;
        this.changeDetector = changeDetector;
        this.socketIOService = socketIOService;
        this.chatServicee = chatServicee;
        this.openA = 1;
        this.allRooms = [];
        this.httpFileUploadPlugin = this.chatService.getPlugin(_services_adapters_xmpp_plugins_http_file_upload_plugin__WEBPACK_IMPORTED_MODULE_3__["HttpFileUploadPlugin"]);
    }
    MultiUserChatComponent.prototype.ngOnInit = function () {
        console.log('pffff', this.openA);
    };
    MultiUserChatComponent.prototype.queryAllRooms = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.multiUserChatPlugin.queryAllRooms()];
                    case 1:
                        _a.allRooms = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /* ngOnDestroy() {
         this.ngDestroy.next();
         this.ngDestroy.complete();
     }*/
    MultiUserChatComponent.prototype.onClickHeader = function () {
        this.chatWindowState.isCollapsed = !this.chatWindowState.isCollapsed;
    };
    MultiUserChatComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    MultiUserChatComponent.prototype.onClickClose = function () {
        this.openA = 0;
    };
    MultiUserChatComponent.prototype.sendMessage = function () {
        this.messageInput.onSendMessage();
    };
    MultiUserChatComponent.prototype.uploadFile = function (file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var url;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpFileUploadPlugin.upload(file)];
                    case 1:
                        url = _a.sent();
                        this.chatService.sendMessage(sessionStorage.getItem('username') + '@localhost', url);
                        return [2 /*return*/];
                }
            });
        });
    };
    MultiUserChatComponent.prototype.onFocus = function () {
        this.messageInput.focus();
    };
    MultiUserChatComponent.prototype.onActionClick = function (chatAction) {
        chatAction.onClick({
            contact: this.chatWindowState.contact.jidBare.toString(),
            chatWindow: this,
        });
    };
    MultiUserChatComponent.ɵfac = function MultiUserChatComponent_Factory(t) { return new (t || MultiUserChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatServiceToken"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_5__["ChatListStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_socket_io_service__WEBPACK_IMPORTED_MODULE_6__["SocketIOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatServiceToken"])); };
    MultiUserChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MultiUserChatComponent, selectors: [["ngx-chat-multi-user-chat"]], viewQuery: function MultiUserChatComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_chat_message_input_chat_message_input_component__WEBPACK_IMPORTED_MODULE_4__["ChatMessageInputComponent"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.messageInput = _t.first);
        } }, inputs: { chatWindowState: "chatWindowState", selectedRoom: "selectedRoom", openA: "openA", name: "name" }, decls: 1, vars: 1, consts: [["class", "chat-window", 4, "ngIf"], [1, "chat-window"], [3, "enabled", "dropMessage", "fileUpload"], [1, "chat-contact-header", 3, "title"], [1, "chat-contact-avatar", 3, "click"], [2, "color", "white", "padding", "0 0.5em", "white-space", "nowrap", "text-overflow", "ellipsis", "-webkit-box-flex", "1", "flex-grow", "1", "overflow", "hidden", "font-weight", "bold", "margin-left", "-24px", "font-size", "13px", 3, "click"], [1, "chat-video-audio-call"], ["aria-hidden", "true", 1, "ffa", "fa-video-camera"], ["aria-hidden", "true", 1, "fa", "fa-phone", 2, "margin-left", "15px", "margin-right", "10px"], [1, "chat-close", 2, "color", "white", 3, "click"], ["class", "chat-content", 4, "ngIf"], [1, "chat-content"], [3, "room"], [1, "chat-input-container"]], template: function MultiUserChatComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MultiUserChatComponent_div_0_Template, 12, 4, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedRoom && ctx.openA == 1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _chat_filedrop_file_drop_component__WEBPACK_IMPORTED_MODULE_9__["FileDropComponent"], _chat_room_messages_chat_room_messages_component__WEBPACK_IMPORTED_MODULE_10__["ChatRoomMessagesComponent"], _chat_message_input_chat_message_input_component__WEBPACK_IMPORTED_MODULE_4__["ChatMessageInputComponent"]], styles: ["ngx-chat-message-input[_ngcontent-%COMP%] {\n  display: block;\n  border: 1px solid #dadada;\n  width: 100%;\n  padding: 0.5em;\n}\n.join-room[_ngcontent-%COMP%] {\n  padding: 0em 1em 0em 1em;\n  margin-left: 162px;\n}\n.room-room[_ngcontent-%COMP%] {\n  display: block;\n}\n.all-room[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  margin-bottom: 40px;\n  margin-top: 10px;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-family: \"Helvetica\", \"Arial\", serif;\n}\n.chat-window[_ngcontent-%COMP%] {\n  border: 1px solid #e1e1e1;\n  border-bottom: none;\n  background: #128C7E;\n  margin-left: 1em;\n  width: 20em;\n  bottom: 0;\n  pointer-events: auto;\n  position: absolute;\n  border-radius: 0.5em;\n}\n.chat-contact-header[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  cursor: pointer;\n  line-height: 3em;\n}\n.chat-contact-avatar[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n}\n.chat-contact-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n  margin-top: -1px;\n  margin-left: 10px;\n  border-radius: 1em;\n}\n.chat-contact-name[_ngcontent-%COMP%] {\n  padding: 0 0.5em;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  overflow: hidden;\n  font-weight: bold;\n  margin-left: 20px;\n  font-size: 13px;\n}\n.fa[_ngcontent-%COMP%] {\n  font: normal normal normal 20px/1 FontAwesome;\n  color: white;\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n.ffa[_ngcontent-%COMP%] {\n  font: normal normal normal 20px/1 FontAwesome;\n  color: white;\n  font-size: 17px;\n  margin-right: 10px;\n  cursor: pointer;\n  width: 30px;\n}\n.chat-close[_ngcontent-%COMP%] {\n  padding: 0 0.5em;\n  text-align: right;\n  font-size: 30px;\n  color: #42a5f5;\n  cursor: pointer;\n  margin-top: -2px;\n}\n.chat-content[_ngcontent-%COMP%] {\n  background-image: url(\"https://i.pinimg.com/originals/7b/1d/8e/7b1d8e865da2c11b788a21a0fb51d542.jpg\");\n  text-align: left;\n  padding: 0;\n  min-height: 5em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.chat-input-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  padding: 0.5em;\n  border-top: 1px solid #e1e1e1;\n  background: #fff;\n  cursor: text;\n}\n.chat-action[_ngcontent-%COMP%] {\n  cursor: pointer;\n  align-self: center;\n  text-align: center;\n}\n.chat-window-send[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #fff;\n  color: #000;\n  width: 1.5em;\n}\n.chat-window-send[_ngcontent-%COMP%]:active {\n  border: none;\n}\nngx-chat-message-input[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaXMvQnVyZWF1L1Byb3h5bS1QRkUvcHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9tdWx0aS11c2VyLWNoYXQvbXVsdGktdXNlci1jaGF0LmNvbXBvbmVudC5sZXNzIiwicHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9tdWx0aS11c2VyLWNoYXQvbXVsdGktdXNlci1jaGF0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDSjtBREVBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtBQ0FKO0FESUE7RUFDSSxjQUFBO0FDRko7QURNQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0pKO0FEVUE7RUFDSSxzQkFBQTtFQUdBLHdDQUFBO0FDVko7QURhQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNYSjtBRGNBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtBQ2JKO0FEaUJBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNmSjtBRGFBO0VBS1EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNmUjtBRG1CQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNqQko7QURvQkE7RUFDSSw2Q0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNsQko7QURxQkE7RUFDSSw2Q0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ25CSjtBRHNCQTtFQUVJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3JCSjtBRHlCQTtFQUVJLHFHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUN4Qko7QUQyQkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUN6Qko7QUQ0QkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQzFCSjtBRDZCQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQzNCSjtBRDZCSTtFQUNJLFlBQUE7QUMzQlI7QUQrQkE7RUFDSSxtQkFBQTtVQUFBLFlBQUE7QUM3QkoiLCJmaWxlIjoicHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9tdWx0aS11c2VyLWNoYXQvbXVsdGktdXNlci1jaGF0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsibmd4LWNoYXQtbWVzc2FnZS1pbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLmpvaW4tcm9vbSB7XG4gICAgcGFkZGluZzogMGVtIDFlbSAwZW0gMWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxNjJweDtcblxufVxuXG4ucm9vbS1yb29tIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4uYWxsLXJvb217XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5cbkBpbXBvcnQgJy4uLy4uL3N0eWxlJztcblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAvL21hcmdpbjogMDtcbiAgICAvL3BhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2VyaWZcbn1cblxuLmNoYXQtd2luZG93IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBAZ2VuZXJhbC1ib3JkZXItY29sb3I7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjMTI4QzdFOyAvLyM0MmE1ZjU7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICB3aWR0aDogMjBlbTtcbiAgICBib3R0b206IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xufVxuXG4uY2hhdC1jb250YWN0LWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIEBnZW5lcmFsLWJvcmRlci1jb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDNlbTtcbn1cblxuXG4uY2hhdC1jb250YWN0LWF2YXRhciB7XG4gICAgd2lkdGg6IDJlbTtcbiAgICBoZWlnaHQ6IDJlbTtcblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAyZW07XG4gICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIH1cbn1cblxuLmNoYXQtY29udGFjdC1uYW1lIHtcbiAgICBwYWRkaW5nOiAwIDAuNWVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZmEge1xuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDIwcHgvMSBGb250QXdlc29tZTtcbiAgICBjb2xvcjogd2hpdGU7Ly8jNDJhNWY1OyAvLyAjMTk4Y2ZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZmZhIHtcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyMHB4LzEgRm9udEF3ZXNvbWU7XG4gICAgY29sb3I6IHdoaXRlOy8vIzQyYTVmNTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMzBweDtcbn1cblxuLmNoYXQtY2xvc2Uge1xuXG4gICAgcGFkZGluZzogMCAwLjVlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICM0MmE1ZjU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi10b3A6IC0ycHg7XG5cbn1cblxuLmNoYXQtY29udGVudCB7XG4gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFNUREO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy83Yi8xZC84ZS83YjFkOGU4NjVkYTJjMTFiNzg4YTIxYTBmYjUxZDU0Mi5qcGdcIik7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jaGF0LWlucHV0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgQGdlbmVyYWwtYm9yZGVyLWNvbG9yO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY3Vyc29yOiB0ZXh0O1xufVxuXG4uY2hhdC1hY3Rpb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2hhdC13aW5kb3ctc2VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgd2lkdGg6IDEuNWVtO1xuXG4gICAgJjphY3RpdmUge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxufVxuXG5uZ3gtY2hhdC1tZXNzYWdlLWlucHV0IHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG4iLCJuZ3gtY2hhdC1tZXNzYWdlLWlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cbi5qb2luLXJvb20ge1xuICBwYWRkaW5nOiAwZW0gMWVtIDBlbSAxZW07XG4gIG1hcmdpbi1sZWZ0OiAxNjJweDtcbn1cbi5yb29tLXJvb20ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5hbGwtcm9vbSB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNlcmlmO1xufVxuLmNoYXQtd2luZG93IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzEyOEM3RTtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgd2lkdGg6IDIwZW07XG4gIGJvdHRvbTogMDtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG59XG4uY2hhdC1jb250YWN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogM2VtO1xufVxuLmNoYXQtY29udGFjdC1hdmF0YXIge1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbn1cbi5jaGF0LWNvbnRhY3QtYXZhdGFyIGltZyB7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xufVxuLmNoYXQtY29udGFjdC1uYW1lIHtcbiAgcGFkZGluZzogMCAwLjVlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZsZXgtZ3JvdzogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uZmEge1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyMHB4LzEgRm9udEF3ZXNvbWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmZmYSB7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDIwcHgvMSBGb250QXdlc29tZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMzBweDtcbn1cbi5jaGF0LWNsb3NlIHtcbiAgcGFkZGluZzogMCAwLjVlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM0MmE1ZjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cbi5jaGF0LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvN2IvMWQvOGUvN2IxZDhlODY1ZGEyYzExYjc4OGEyMWEwZmI1MWQ1NDIuanBnXCIpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwO1xuICBtaW4taGVpZ2h0OiA1ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5jaGF0LWlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UxZTFlMTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuLmNoYXQtYWN0aW9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jaGF0LXdpbmRvdy1zZW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbiAgd2lkdGg6IDEuNWVtO1xufVxuLmNoYXQtd2luZG93LXNlbmQ6YWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xufVxubmd4LWNoYXQtbWVzc2FnZS1pbnB1dCB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbiJdfQ== */"] });
    MultiUserChatComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MultiUserChatComponent, factory: MultiUserChatComponent.ɵfac });
    return MultiUserChatComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MultiUserChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngx-chat-multi-user-chat',
                templateUrl: './multi-user-chat.component.html',
                styleUrls: ['./multi-user-chat.component.less']
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatServiceToken"]]
            }] }, { type: _services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_5__["ChatListStateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _services_socket_io_service__WEBPACK_IMPORTED_MODULE_6__["SocketIOService"] }, { type: _services_adapters_xmpp_xmpp_chat_adapter_service__WEBPACK_IMPORTED_MODULE_7__["XmppChatAdapter"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatServiceToken"]]
            }] }]; }, { chatWindowState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectedRoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], openA: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], messageInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_chat_message_input_chat_message_input_component__WEBPACK_IMPORTED_MODULE_4__["ChatMessageInputComponent"]]
        }] }); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/components/roster-contact/roster-contact.component.ts":
/*!************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/components/roster-contact/roster-contact.component.ts ***!
  \************************************************************************************************/
/*! exports provided: RosterContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterContactComponent", function() { return RosterContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_presence__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/presence */ "./projects/proxym/ngx-chat/src/lib/core/presence.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_unread_message_count_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/adapters/xmpp/plugins/unread-message-count.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/unread-message-count.plugin.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/chat-service */ "./projects/proxym/ngx-chat/src/lib/services/chat-service.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_roster_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/adapters/xmpp/plugins/roster.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/roster.plugin.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");









function RosterContactComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u25CF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "roster-presence--" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r131.contact.presence$));
} }
function RosterContactComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u25CF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "roster-presence--" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r132.contact.presence$));
} }
function RosterContactComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u25CF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "roster-presence--" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r133.contact.presence$));
} }
function RosterContactComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u25CF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "roster-presence--" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r134.contact.presence$));
} }
function RosterContactComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r135.unreadCount);
} }
var RosterContactComponent = /** @class */ (function () {
    function RosterContactComponent(chatService) {
        var _this = this;
        this.chatService = chatService;
        this.presence = _core_presence__WEBPACK_IMPORTED_MODULE_3__["Presence"];
        this.unreadCount = 0;
        this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.chatService.getPlugin(_services_adapters_xmpp_plugins_unread_message_count_plugin__WEBPACK_IMPORTED_MODULE_4__["UnreadMessageCountPlugin"]).jidToUnreadCount$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (jidToUnreadCount) { return jidToUnreadCount[_this.contact.jidBare.toString()] || 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngDestroy)).subscribe(function (unreadCount) { return _this.unreadCount = unreadCount; });
        this.chatService.getPlugin(_services_adapters_xmpp_plugins_unread_message_count_plugin__WEBPACK_IMPORTED_MODULE_4__["UnreadMessageCountPlugin"]).onBeforeOnline();
        this.chatService.getPlugin(_services_adapters_xmpp_plugins_roster_plugin__WEBPACK_IMPORTED_MODULE_6__["RosterPlugin"]).getRosterContacts();
    }
    RosterContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.getPlugin(_services_adapters_xmpp_plugins_unread_message_count_plugin__WEBPACK_IMPORTED_MODULE_4__["UnreadMessageCountPlugin"]).jidToUnreadCount$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (jidToUnreadCount) { return jidToUnreadCount[_this.contact.jidBare.toString()] || 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngDestroy)).subscribe(function (unreadCount) { return _this.unreadCount = unreadCount; });
        this.chatService.getPlugin(_services_adapters_xmpp_plugins_unread_message_count_plugin__WEBPACK_IMPORTED_MODULE_4__["UnreadMessageCountPlugin"]).onBeforeOnline();
        this.chatService.getPlugin(_services_adapters_xmpp_plugins_roster_plugin__WEBPACK_IMPORTED_MODULE_6__["RosterPlugin"]).getRosterContacts();
        this.me = sessionStorage.getItem('username');
        console.log('prtty', this.me);
    };
    RosterContactComponent.prototype.ngOnDestroy = function () {
        this.ngDestroy.next();
        this.ngDestroy.complete();
    };
    RosterContactComponent.ɵfac = function RosterContactComponent_Factory(t) { return new (t || RosterContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatServiceToken"])); };
    RosterContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RosterContactComponent, selectors: [["ngx-chat-roster-contact"]], inputs: { contact: "contact" }, decls: 15, vars: 15, consts: [[1, "roster-contact"], [1, "roster-contact-avatar"], [3, "src"], [1, "roster-contact-status"], ["class", "roster-presence", 3, "ngClass", 4, "ngIf"], [1, "roster-contact-name"], ["class", "unread-message-badge", 4, "ngIf"], [1, "roster-presence", 3, "ngClass"], [1, "unread-message-badge"]], template: function RosterContactComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RosterContactComponent_div_4_Template, 3, 3, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RosterContactComponent_div_6_Template, 3, 3, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RosterContactComponent_div_8_Template, 3, 3, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RosterContactComponent_div_10_Template, 3, 3, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RosterContactComponent_div_14_Template, 2, 1, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.contact.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx.contact.presence$) == ctx.presence.present);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, ctx.contact.presence$) == ctx.presence.unavailable);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 11, ctx.contact.presence$) == ctx.presence.away);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 13, ctx.contact.presence$) == ctx.presence.dnd);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contact.name, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unreadCount);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Helvetica\", \"Arial\", serif;\n}\n.roster-contact[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.roster-contact-avatar[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n}\n.roster-contact-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n  border-radius: 1em;\n}\n.roster-contact-name[_ngcontent-%COMP%] {\n  padding-left: 0.5em;\n  padding-top: 0.5em;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.roster-contact-status[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  margin-top: 5px;\n}\n.roster-presence[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-top: 0.5em;\n}\n.roster-presence.roster-presence--present[_ngcontent-%COMP%] {\n  color: #69ca48;\n  font-size: 20px;\n}\n.roster-presence.roster-presence--away[_ngcontent-%COMP%] {\n  color: #ffbe00;\n  font-size: 20px;\n}\n.roster-presence.roster-presence--dnd[_ngcontent-%COMP%] {\n  color: #ff5940;\n  font-size: 20px;\n}\n.roster-presence.roster-presence--unavailable[_ngcontent-%COMP%] {\n  color: #dadada;\n  font-size: 20px;\n}\n.unread-message-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: #ff5940;\n  color: #fff;\n  border-radius: 50%;\n  align-self: center;\n  margin-top: -5px;\n  width: 1.5em;\n  height: 1.5em;\n  text-align: center;\n  margin-right: -6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaXMvQnVyZWF1L1Byb3h5bS1QRkUvcHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9yb3N0ZXItY29udGFjdC9yb3N0ZXItY29udGFjdC5jb21wb25lbnQubGVzcyIsInByb2plY3RzL3Byb3h5bS9uZ3gtY2hhdC9zcmMvbGliL2NvbXBvbmVudHMvcm9zdGVyLWNvbnRhY3Qvcm9zdGVyLWNvbnRhY3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7QUNERjtBRElBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0ZGO0FES0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ0hGO0FEQ0E7RUFLSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDSEo7QURPQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7QUNMRjtBRFFBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDTkY7QURTQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNQRjtBRFVFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNSSjtBRFdFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNUSjtBRFlFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNWSjtBRGFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNYSjtBRGVBO0VBQ0UscUJBQUE7RUFFQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNkRiIsImZpbGUiOiJwcm9qZWN0cy9wcm94eW0vbmd4LWNoYXQvc3JjL2xpYi9jb21wb25lbnRzL3Jvc3Rlci1jb250YWN0L3Jvc3Rlci1jb250YWN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc3R5bGUnO1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzZXJpZlxufVxuXG4ucm9zdGVyLWNvbnRhY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5yb3N0ZXItY29udGFjdC1hdmF0YXIge1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAyZW07XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICB9XG59XG5cbi5yb3N0ZXItY29udGFjdC1uYW1lIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4ucm9zdGVyLWNvbnRhY3Qtc3RhdHVzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ucm9zdGVyLXByZXNlbmNlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXRvcDogMC41ZW07XG4gIC8vbWFyZ2luLWxlZnQ6IDAuM2VtO1xuXG4gICYucm9zdGVyLXByZXNlbmNlLS1wcmVzZW50IHtcbiAgICBjb2xvcjogQHN1Y2Nlc3M7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgJi5yb3N0ZXItcHJlc2VuY2UtLWF3YXkge1xuICAgIGNvbG9yOiBAd2FybmluZztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAmLnJvc3Rlci1wcmVzZW5jZS0tZG5kIHtcbiAgICBjb2xvcjogQGRhbmdlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAmLnJvc3Rlci1wcmVzZW5jZS0tdW5hdmFpbGFibGUge1xuICAgIGNvbG9yOiAjZGFkYWRhO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuXG4udW5yZWFkLW1lc3NhZ2UtYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8vIHBhZGRpbmctdG9wOiAwLjJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogQGRhbmdlcjsgLy8jZmY1OTQwO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIHdpZHRoOiAxLjVlbTtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IC02cHg7XG59XG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzZXJpZjtcbn1cbi5yb3N0ZXItY29udGFjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5yb3N0ZXItY29udGFjdC1hdmF0YXIge1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbn1cbi5yb3N0ZXItY29udGFjdC1hdmF0YXIgaW1nIHtcbiAgd2lkdGg6IDJlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbn1cbi5yb3N0ZXItY29udGFjdC1uYW1lIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleC1ncm93OiAxO1xufVxuLnJvc3Rlci1jb250YWN0LXN0YXR1cyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5yb3N0ZXItcHJlc2VuY2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbn1cbi5yb3N0ZXItcHJlc2VuY2Uucm9zdGVyLXByZXNlbmNlLS1wcmVzZW50IHtcbiAgY29sb3I6ICM2OWNhNDg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5yb3N0ZXItcHJlc2VuY2Uucm9zdGVyLXByZXNlbmNlLS1hd2F5IHtcbiAgY29sb3I6ICNmZmJlMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5yb3N0ZXItcHJlc2VuY2Uucm9zdGVyLXByZXNlbmNlLS1kbmQge1xuICBjb2xvcjogI2ZmNTk0MDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnJvc3Rlci1wcmVzZW5jZS5yb3N0ZXItcHJlc2VuY2UtLXVuYXZhaWxhYmxlIHtcbiAgY29sb3I6ICNkYWRhZGE7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi51bnJlYWQtbWVzc2FnZS1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTk0MDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICB3aWR0aDogMS41ZW07XG4gIGhlaWdodDogMS41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAtNnB4O1xufVxuIl19 */"] });
    return RosterContactComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RosterContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-chat-roster-contact',
                templateUrl: './roster-contact.component.html',
                styleUrls: ['./roster-contact.component.less']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatServiceToken"]]
            }] }]; }, { contact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/components/roster-list/roster-list.component.ts":
/*!******************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/components/roster-list/roster-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RosterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterListComponent", function() { return RosterListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/chat-service */ "./projects/proxym/ngx-chat/src/lib/services/chat-service.ts");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ltx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ltx */ "./node_modules/ltx/index.js");
/* harmony import */ var ltx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ltx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_adapters_xmpp_plugins_multi_user_chat_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/adapters/xmpp/plugins/multi-user-chat.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/multi-user-chat.plugin.ts");
/* harmony import */ var _core_contact_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/contact-avatar */ "./projects/proxym/ngx-chat/src/lib/core/contact-avatar.ts");
/* harmony import */ var _services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/chat-list-state.service */ "./projects/proxym/ngx-chat/src/lib/services/chat-list-state.service.ts");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/log.service */ "./projects/proxym/ngx-chat/src/lib/services/log.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _services_adapters_xmpp_xmpp_chat_adapter_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/adapters/xmpp/xmpp-chat-adapter.service */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/xmpp-chat-adapter.service.ts");
/* harmony import */ var _multi_user_chat_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../multi-user-chat/data.service */ "./projects/proxym/ngx-chat/src/lib/components/multi-user-chat/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/radio.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _roster_contact_roster_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../roster-contact/roster-contact.component */ "./projects/proxym/ngx-chat/src/lib/components/roster-contact/roster-contact.component.ts");




















function RosterListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RosterListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RosterListComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RosterListComponent_ng_container_20_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r104); var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r103.otherJid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RosterListComponent_ng_container_20_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r104); var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r105.onAddContact(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Add contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RosterListComponent_ng_container_20_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r104); var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r106.onRemoveContact(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Remove contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r97.chatService.translations.addContact);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r97.otherJid);
} }
function RosterListComponent_ng_container_21_ngx_chat_roster_contact_4_Template(rf, ctx) { if (rf & 1) {
    var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-chat-roster-contact", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RosterListComponent_ng_container_21_ngx_chat_roster_contact_4_Template_ngx_chat_roster_contact_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r110); var contact_r108 = ctx.$implicit; var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r109.onClickContact(contact_r108); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var contact_r108 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("contact", contact_r108);
} }
function RosterListComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RosterListComponent_ng_container_21_ngx_chat_roster_contact_4_Template, 1, 1, "ngx-chat-roster-contact", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r98.chatService.translations.contacts);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, ctx_r98.contacts));
} }
function RosterListComponent_ng_container_23_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RosterListComponent_ng_container_23_div_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r114); var room_r112 = ctx.$implicit; var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); ctx_r113.getName(room_r112.name); return ctx_r113.joinRoom(room_r112.jid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "join");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var room_r112 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", room_r112.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", room_r112.name, " ");
} }
function RosterListComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RosterListComponent_ng_container_23_div_3_Template, 6, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r99.chatService.translations.chatRooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r99.allRooms);
} }
function RosterListComponent_ng_container_24_ngx_chat_roster_contact_4_Template(rf, ctx) { if (rf & 1) {
    var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-chat-roster-contact", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RosterListComponent_ng_container_24_ngx_chat_roster_contact_4_Template_ngx_chat_roster_contact_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r118); var contact_r116 = ctx.$implicit; var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r117.onClickContact(contact_r116); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var contact_r116 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("contact", contact_r116);
} }
function RosterListComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RosterListComponent_ng_container_24_ngx_chat_roster_contact_4_Template, 1, 1, "ngx-chat-roster-contact", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r100.chatService.translations.contactRequestIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, ctx_r100.contactRequestsReceived$));
} }
function RosterListComponent_ng_container_26_ngx_chat_roster_contact_4_Template(rf, ctx) { if (rf & 1) {
    var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-chat-roster-contact", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RosterListComponent_ng_container_26_ngx_chat_roster_contact_4_Template_ngx_chat_roster_contact_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r122); var contact_r120 = ctx.$implicit; var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r121.onClickContact(contact_r120); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var contact_r120 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("contact", contact_r120);
} }
function RosterListComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RosterListComponent_ng_container_26_ngx_chat_roster_contact_4_Template, 1, 1, "ngx-chat-roster-contact", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r101.chatService.translations.contactRequestOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, ctx_r101.contactRequestsSent$));
} }
function RosterListComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r102.chatService.translations.noContacts, " ");
} }
var RosterListComponent = /** @class */ (function () {
    function RosterListComponent(chatService, chatListService, logService, chatServices, data, domSanitizer) {
        this.chatService = chatService;
        this.chatListService = chatListService;
        this.logService = logService;
        this.chatServices = chatServices;
        this.data = data;
        this.domSanitizer = domSanitizer;
        this.rosterStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.statusColor = '#69ca48';
        this.countChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.voted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.roomName = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.wind = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.allRooms = [];
        this.isOpen = 1;
        this.imgAway = __webpack_require__(/*! ../../../../../../../src/assets/away.png */ "./src/assets/away.png");
        this.imgAvailable = __webpack_require__(/*! ../../../../../../../src/assets/available.png */ "./src/assets/available.png");
        this.imgDnd = __webpack_require__(/*! ../../../../../../../src/assets/dnd.png */ "./src/assets/dnd.png");
        this.multiUserChatPlugin = chatService.getPlugin(_services_adapters_xmpp_plugins_multi_user_chat_plugin__WEBPACK_IMPORTED_MODULE_8__["MultiUserChatPlugin"]);
    }
    RosterListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.contacts) {
            this.contacts = this.chatService.contactsSubscribed$;
        }
        if (!this.contactRequestsReceived$) {
            this.contactRequestsReceived$ = this.chatService.contactRequestsReceived$;
        }
        if (!this.contactRequestsSent$) {
            this.contactRequestsSent$ = this.chatService.contactRequestsSent$;
        }
        if (!this.contactsUnaffiliated$) {
            this.contactsUnaffiliated$ = this.chatService.contactsUnaffiliated$;
        }
        this.hasNoContacts$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.contacts,
            this.contactRequestsReceived$,
            this.contactRequestsSent$,
            this.contactsUnaffiliated$,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 4), contacts = _b[0], received = _b[1], sent = _b[2], unaffiliated = _b[3];
            return contacts.length + received.length + sent.length + unaffiliated.length === 0;
        }));
        this.queryAllRooms();
        this.me = sessionStorage.getItem('username');
        this.sendIqq(this.me + '@localhost').then(function (data) {
            var itemChild = data.toString();
            var mySubString = itemChild.match(new RegExp('<PHOTO><BINVAL>' + '(.*)' + '</BINVAL><TYPE>'));
            var nick = itemChild.match(new RegExp('<NICKNAME>' + '(.*)' + '</NICKNAME>'));
            if (mySubString !== null) {
                var mySubb = mySubString.toString().substring(mySubString.toString().lastIndexOf(',') + 1, mySubString.toString().lastIndexOf('=') + 1);
                _this.nickname = nick.toString().substring(nick.toString().lastIndexOf(',') + 1);
                _this.getImage('data:image/jpeg;base64,' + mySubb);
            }
            else {
                _this.getImage(_core_contact_avatar__WEBPACK_IMPORTED_MODULE_9__["dummyAvatar"]);
            }
        });
    };
    RosterListComponent.prototype.modo = function (value) {
        switch (value) {
            case '1':
                this.sendStanzaChat();
                this.statusColor = '#69ca48';
                break;
            case '2':
                this.sendStanzaAway();
                this.statusColor = '#ffbe00';
                break;
        }
    };
    RosterListComponent.prototype.joinRoom = function (roomJid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var occupantJid, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        occupantJid = Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_6__["jid"])(roomJid);
                        _a = this;
                        return [4 /*yield*/, this.multiUserChatPlugin.joinRoom(occupantJid)];
                    case 1:
                        _a.selectedRoom = _b.sent();
                        this.queryAllRooms();
                        this.voted.emit(this.selectedRoom);
                        this.roomName.emit(this.nameR);
                        this.wind.emit(this.isOpen);
                        return [2 /*return*/];
                }
            });
        });
    };
    RosterListComponent.prototype.queryAllRooms = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.multiUserChatPlugin.queryAllRooms()];
                    case 1:
                        _a.allRooms = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RosterListComponent.prototype.onAddContact = function () {
        if (this.otherJid) {
            this.chatService.addContact(this.otherJid + '@localhost');
        }
    };
    RosterListComponent.prototype.onRemoveContact = function () {
        this.chatService.removeContact(this.otherJid + '@localhost');
    };
    RosterListComponent.prototype.onClickContact = function (contact) {
        this.chatListService.openChat(contact);
    };
    RosterListComponent.prototype.send = function (content) {
        this.logService.debug('>>>', content);
        try {
            return this.client.send(content);
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    RosterListComponent.prototype.sendStanzaAway = function () {
        var request = Object(ltx__WEBPACK_IMPORTED_MODULE_7__["parse"])('<presence><show>away</show></presence>');
        if (request) {
            return this.chatServices.chatConnectionService.send(request);
        }
    };
    RosterListComponent.prototype.sendStanzaDnd = function () {
        var request = Object(ltx__WEBPACK_IMPORTED_MODULE_7__["parse"])('<presence><show>dnd</show></presence>');
        if (request) {
            return this.chatServices.chatConnectionService.send(request);
        }
    };
    RosterListComponent.prototype.sendStanzaChat = function () {
        var request = Object(ltx__WEBPACK_IMPORTED_MODULE_7__["parse"])('<presence><show>chat</show></presence>');
        if (request) {
            return this.chatServices.chatConnectionService.send(request);
        }
    };
    RosterListComponent.prototype.getName = function (name) {
        this.nameR = name;
    };
    RosterListComponent.prototype.toggleVisibility = function () {
        var newState = this.rosterState === 'shown' ? 'hidden' : 'shown';
        this.rosterStateChanged.emit(newState);
    };
    RosterListComponent.prototype.sanatizeUrl = function (generatedImageUrl) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(generatedImageUrl);
    };
    /* Method to fetch image from Url */
    RosterListComponent.prototype.getBase64ImageFromURL = function (url) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            // create an image object
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = url;
            if (!img.complete) {
                // This will call another method that will create image from url
                img.onload = function () {
                    observer.next(_this.getBase64Image(img));
                    observer.complete();
                };
                img.onerror = function (err) {
                    observer.error(err);
                };
            }
            else {
                observer.next(_this.getBase64Image(img));
                observer.complete();
            }
        });
    };
    /* Method to create base64Data Url from fetched image */
    RosterListComponent.prototype.getBase64Image = function (img) {
        // We create a HTML canvas object that will create a 2d image
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext('2d');
        // This will draw image
        ctx.drawImage(img, 0, 0);
        // Convert the drawn image to Data URL
        var dataURL = canvas.toDataURL('image/png');
        this.base64DefaultURL = dataURL;
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
    };
    RosterListComponent.prototype.getImage = function (imageUrl) {
        var _this = this;
        this.windowOPen = true;
        this.getBase64ImageFromURL(imageUrl).subscribe(function (base64Data) {
            _this.base64TrimmedURL = base64Data;
            _this.createBlobImageFileAndShow();
        });
    };
    RosterListComponent.prototype.getImageWithoutWindowOpen = function (imageUrl) {
        var _this = this;
        this.windowOPen = false;
        this.getBase64ImageFromURL(imageUrl).subscribe(function (base64Data) {
            _this.base64TrimmedURL = base64Data;
            _this.createBlobImageFileAndShow();
        });
    };
    /* Method that will create Blob and show in new window */
    RosterListComponent.prototype.createBlobImageFileAndShow = function () {
        var _this = this;
        this.dataURItoBlob(this.base64TrimmedURL).subscribe(function (blob) {
            var imageBlob = blob;
            var imageName = _this.generateName();
            var imageFile = new File([imageBlob], imageName, {
                type: 'image/jpeg'
            });
            _this.generatedImage = window.URL.createObjectURL(imageFile);
            // on demo image not open window
            /*  if (this.windowOPen) {
                  window.open(this.generatedImage);
              }*/
        });
    };
    /**Method to Generate a Name for the Image */
    RosterListComponent.prototype.generateName = function () {
        var date = new Date().valueOf();
        var text = '';
        var possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            text += possibleText.charAt(Math.floor(Math.random() * possibleText.length));
        }
        // Replace extension according to your media type like this
        return date + '.' + text + '.jpeg';
    };
    /* Method to convert Base64Data Url as Image Blob */
    RosterListComponent.prototype.dataURItoBlob = function (dataURI) {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            var byteString = window.atob(dataURI);
            var arrayBuffer = new ArrayBuffer(byteString.length);
            var int8Array = new Uint8Array(arrayBuffer);
            for (var i = 0; i < byteString.length; i++) {
                int8Array[i] = byteString.charCodeAt(i);
            }
            var blob = new Blob([int8Array], { type: 'image/jpeg' });
            observer.next(blob);
            observer.complete();
        });
    };
    RosterListComponent.prototype.sendIq = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var request, response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = Object(ltx__WEBPACK_IMPORTED_MODULE_7__["parse"])('');
                        if (!request) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.chatServices.chatConnectionService.sendIq(request)];
                    case 1:
                        response = _a.sent();
                        this.iqResponse = Object(ltx__WEBPACK_IMPORTED_MODULE_7__["stringify"])(response, 4, 1);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    RosterListComponent.prototype.sendIqq = function (jid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.chatServices.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_6__["xml"])('iq', { type: 'get', to: jid, id: this.chatServices.chatConnectionService.getNextIqId() }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_6__["xml"])('vCard', { xmlns: 'vcard-temp' })))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    RosterListComponent.ɵfac = function RosterListComponent_Factory(t) { return new (t || RosterListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatServiceToken"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_10__["ChatListStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_log_service__WEBPACK_IMPORTED_MODULE_11__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatServiceToken"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatServiceToken"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"])); };
    RosterListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RosterListComponent, selectors: [["ngx-chat-roster-list"]], inputs: { color: "color", rosterState: "rosterState", contacts: "contacts", contactRequestsReceived$: "contactRequestsReceived$", contactRequestsSent$: "contactRequestsSent$", contactsUnaffiliated$: "contactsUnaffiliated$", statusColor: "statusColor" }, outputs: { rosterStateChanged: "rosterStateChanged", countChanged: "countChanged", voted: "voted", roomName: "roomName", wind: "wind" }, decls: 31, vars: 29, consts: [[1, "roster-drawer", 3, "click"], ["class", "roster-drawer__button", 4, "ngIf"], [1, "roster-list"], [1, "roster-header"], [1, "roster-group-header"], [2, "max-width", "50%", "border-radius", "8em", "align-self", "center", 3, "src"], [2, "text-align", "center", "color", "#128C7E"], ["aria-label", "Select an option", 1, "mat-radio-group"], ["value", "1", 2, "color", "#69ca48", 3, "checked", "click"], [2, "margin-right", "31px", "margin-bottom", "10px", 3, "src"], ["value", "2", 2, "color", "#ffbe00", 3, "click"], [2, "margin-bottom", "12px", 3, "src"], [4, "ngIf"], ["class", "roster-list__empty", 4, "ngIf"], [1, "roster-footer"], [1, "roster-drawer__button"], [1, "add-contacts"], ["placeholder", "  username", "type", "text", 3, "ngModel", "ngModelChange"], [1, "btn-a-r"], [1, "btn-add", 3, "click"], [1, "btn-remove", 3, "click"], [1, "contact-list-wrapper"], [3, "contact", "click", 4, "ngFor", "ngForOf"], [3, "contact", "click"], ["class", "room-room", 4, "ngFor", "ngForOf"], [1, "room-room"], [1, "roster-contact", 3, "title"], [1, "roster-contact-name"], [1, "join-room", 3, "click"], [1, "roster-list__empty"]], template: function RosterListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RosterListComponent_Template_div_click_0_listener() { return ctx.toggleVisibility(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RosterListComponent_div_1_Template, 2, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RosterListComponent_div_2_Template, 2, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h3", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-radio-group", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-radio-button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RosterListComponent_Template_mat_radio_button_click_14_listener() { return ctx.sendStanzaChat(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-radio-button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RosterListComponent_Template_mat_radio_button_click_16_listener() { return ctx.sendStanzaAway(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-radio-button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RosterListComponent_Template_mat_radio_button_click_18_listener() { return ctx.sendStanzaDnd(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, RosterListComponent_ng_container_20_Template, 10, 2, "ng-container", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, RosterListComponent_ng_container_21_Template, 6, 4, "ng-container", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, RosterListComponent_ng_container_23_Template, 4, 2, "ng-container", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, RosterListComponent_ng_container_24_Template, 6, 4, "ng-container", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, RosterListComponent_ng_container_26_Template, 6, 4, "ng-container", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, RosterListComponent_div_28_Template, 2, 1, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@drawerVisibility", ctx.rosterState);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.rosterState === "shown");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.rosterState === "hidden");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@rosterVisibility", ctx.rosterState);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-ngx-chat-state", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 19, ctx.chatService.state$));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.chatService.translations.chat, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.chatService.translations.profile);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.sanatizeUrl(ctx.generatedImage), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.nickname);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.imgAvailable, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.imgAway, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.imgDnd, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.me != "anis" && ctx.me != "amani" && ctx.me != "maha");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 21, ctx.contacts).length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.me != "anis" && ctx.me != "amani" && ctx.me != "maha");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 23, ctx.contactRequestsReceived$).length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 25, ctx.contactRequestsSent$).length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 27, ctx.hasNoContacts$));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _roster_contact_roster_contact_component__WEBPACK_IMPORTED_MODULE_18__["RosterContactComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  font-family: \"Helvetica\", \"Arial\", serif;\n}\n.add-contacts[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5em;\n  margin-top: 13px;\n}\n.add-contacts[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8;\n  cursor: pointer;\n}\n[_nghost-%COMP%]     .mat-radio-outer-circle {\n  border-style: hidden;\n}\n.mat-radio-group[_ngcontent-%COMP%] {\n  margin-top: 13px;\n  align-self: center;\n}\n.btn-a-r[_ngcontent-%COMP%] {\n  align-self: center;\n  padding: 0em 0em 0em 1em;\n}\n.roster-list[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 14em;\n  overflow-y: auto;\n  border-left: 1px solid #e1e1e1;\n  z-index: 80;\n  margin-left: 10px;\n  background-color: #f5f5f5;\n  text-align: left;\n  padding: 0.5em 0.5em 0 0.5em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.roster-list[_ngcontent-%COMP%]   .roster-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1em;\n}\n.roster-list[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 160px;\n  align-self: center;\n  border-radius: 50px;\n}\n.roster-list[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 160px;\n  align-self: center;\n  margin-bottom: 20px;\n  border-radius: 50px;\n}\n.roster-list[_ngcontent-%COMP%]   .select-status[_ngcontent-%COMP%] {\n  width: 113px;\n  margin-top: 13px;\n  margin-bottom: 20px;\n  align-self: center;\n}\n.roster-list[_ngcontent-%COMP%]   .roster-group-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e1e1e1;\n  padding-bottom: 0.5em;\n}\n.roster-list[_ngcontent-%COMP%]   .roster-group-headerr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e1e1e1;\n  padding-bottom: 0.5em;\n}\n.roster-list[_ngcontent-%COMP%]   .roster-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #e1e1e1;\n  width: 14em;\n  padding-top: 0.5em;\n}\n.roster-list[_ngcontent-%COMP%]   .contact-list-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n.roster-list[_ngcontent-%COMP%]   ngx-chat-roster-contact[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5em;\n}\n.roster-list[_ngcontent-%COMP%]   ngx-chat-roster-contact[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8;\n  cursor: pointer;\n}\n.roster-list__empty[_ngcontent-%COMP%] {\n  color: #999;\n  text-align: center;\n  margin-top: 0.5em;\n  font-size: 1.5em;\n}\n.roster-drawer[_ngcontent-%COMP%] {\n  top: 0;\n  bottom: 0;\n  right: 14em;\n  width: 1em;\n  position: fixed;\n  z-index: 80;\n  cursor: pointer;\n}\n.roster-drawer[_ngcontent-%COMP%]:hover {\n  background-color: rgba(30, 30, 30, 0.2);\n}\n.roster-drawer__button[_ngcontent-%COMP%] {\n  top: 50%;\n  color: transparent;\n  background-color: transparent;\n  position: fixed;\n  margin-left: 0.4rem;\n}\n.roster-drawer[_ngcontent-%COMP%]:hover   .roster-drawer__button[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.roster-contact[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.roster-contact-avatar[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n}\n.roster-contact-name[_ngcontent-%COMP%] {\n  padding-left: 0.5em;\n  padding-top: 0.5em;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaXMvQnVyZWF1L1Byb3h5bS1QRkUvcHJvamVjdHMvcHJveHltL25neC1jaGF0L3NyYy9saWIvY29tcG9uZW50cy9yb3N0ZXItbGlzdC9yb3N0ZXItbGlzdC5jb21wb25lbnQubGVzcyIsInByb2plY3RzL3Byb3h5bS9uZ3gtY2hhdC9zcmMvbGliL2NvbXBvbmVudHMvcm9zdGVyLWxpc3Qvcm9zdGVyLWxpc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFFQSx3Q0FBQTtBQ0pGO0FET0E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTEY7QURRRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ05KO0FEV0E7RUFDRSxvQkFBQTtBQ1RGO0FEWUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDVkY7QURhQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7QUNYRjtBRGNBO0VBRUUsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDYkY7QURGQTtFQWtCSSxrQkFBQTtFQUNBLGtCQUFBO0FDYko7QUROQTtFQXVCSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDZEo7QURaQTtFQThCSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNmSjtBRG5CQTtFQXVDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDakJKO0FEekJBO0VBOENJLGdDQUFBO0VBQ0EscUJBQUE7QUNsQko7QUQ3QkE7RUFtREksZ0NBQUE7RUFDQSxxQkFBQTtBQ25CSjtBRGpDQTtFQXdESSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ3BCSjtBRHRDQTtFQThESSxrQkFBQTtBQ3JCSjtBRHpDQTtFQWtFSSxjQUFBO0VBQ0EsY0FBQTtBQ3RCSjtBRHdCSTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ3RCTjtBRDRCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUMxQkY7QUQ2QkE7RUFDRSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDM0JGO0FENkJFO0VBQ0UsdUNBQUE7QUMzQko7QUQrQkE7RUFDRSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQzdCRjtBRGdDQTtFQUNFLFdBQUE7QUM5QkY7QURpQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDL0JGO0FEa0NBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNoQ0Y7QURtQ0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0FDakNGIiwiZmlsZSI6InByb2plY3RzL3Byb3h5bS9uZ3gtY2hhdC9zcmMvbGliL2NvbXBvbmVudHMvcm9zdGVyLWxpc3Qvcm9zdGVyLWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zdHlsZSc7XG5cbkByb3N0ZXItd2lkdGg6IDE0ZW07IC8vMTRcblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgLy8gcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2VyaWZcbn1cblxuLmFkZC1jb250YWN0cyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgbWFyZ2luLXRvcDogMTNweDtcblxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbihAcm9zdGVyLWJhY2tncm91bmQtY29sb3IsIDUlKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItc3R5bGU6IGhpZGRlbjtcbn1cblxuLm1hdC1yYWRpby1ncm91cCB7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmJ0bi1hLXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBlbSAwZW0gMGVtIDFlbTtcbn1cblxuLnJvc3Rlci1saXN0IHtcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiXCIpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IEByb3N0ZXItd2lkdGg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgQGdlbmVyYWwtYm9yZGVyLWNvbG9yO1xuICB6LWluZGV4OiA4MDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IEByb3N0ZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMC41ZW0gMC41ZW0gMCAwLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAucm9zdGVyLWhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuXG4gIC5idG4tYWRkIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgfVxuXG4gIC5idG4tcmVtb3ZlIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cblxuICAuc2VsZWN0LXN0YXR1cyB7XG4gICAgd2lkdGg6IDExM3B4O1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cblxuICAucm9zdGVyLWdyb3VwLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIEBnZW5lcmFsLWJvcmRlci1jb2xvcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIH1cblxuICAucm9zdGVyLWdyb3VwLWhlYWRlcnIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBAZ2VuZXJhbC1ib3JkZXItY29sb3I7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICB9XG5cbiAgLnJvc3Rlci1mb290ZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBAZ2VuZXJhbC1ib3JkZXItY29sb3I7XG4gICAgd2lkdGg6IEByb3N0ZXItd2lkdGg7XG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xuICB9XG5cbiAgLmNvbnRhY3QtbGlzdC13cmFwcGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cblxuICBuZ3gtY2hhdC1yb3N0ZXItY29udGFjdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMC41ZW07XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbihAcm9zdGVyLWJhY2tncm91bmQtY29sb3IsIDUlKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxufVxuXG4ucm9zdGVyLWxpc3RfX2VtcHR5IHtcbiAgY29sb3I6IEBnZW5lcmFsLWxpZ2h0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4ucm9zdGVyLWRyYXdlciB7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMTRlbTtcbiAgd2lkdGg6IDFlbTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA4MDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDMwLCAzMCwgMC4yKTtcbiAgfVxufVxuXG4ucm9zdGVyLWRyYXdlcl9fYnV0dG9uIHtcbiAgdG9wOiA1MCU7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luLWxlZnQ6IDAuNHJlbTtcbn1cblxuLnJvc3Rlci1kcmF3ZXI6aG92ZXIgLnJvc3Rlci1kcmF3ZXJfX2J1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucm9zdGVyLWNvbnRhY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5yb3N0ZXItY29udGFjdC1hdmF0YXIge1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbn1cblxuLnJvc3Rlci1jb250YWN0LW5hbWUge1xuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuICBwYWRkaW5nLXRvcDogMC41ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4LWdyb3c6IDE7XG59XG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzZXJpZjtcbn1cbi5hZGQtY29udGFjdHMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC41ZW07XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG4uYWRkLWNvbnRhY3RzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG59XG4ubWF0LXJhZGlvLWdyb3VwIHtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmJ0bi1hLXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBlbSAwZW0gMGVtIDFlbTtcbn1cbi5yb3N0ZXItbGlzdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTRlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTFlMWUxO1xuICB6LWluZGV4OiA4MDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDAuNWVtIDAuNWVtIDAgMC41ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm9zdGVyLWxpc3QgLnJvc3Rlci1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbi5yb3N0ZXItbGlzdCAuYnRuLWFkZCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAxNjBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuLnJvc3Rlci1saXN0IC5idG4tcmVtb3ZlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDE2MHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4ucm9zdGVyLWxpc3QgLnNlbGVjdC1zdGF0dXMge1xuICB3aWR0aDogMTEzcHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5yb3N0ZXItbGlzdCAucm9zdGVyLWdyb3VwLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG59XG4ucm9zdGVyLWxpc3QgLnJvc3Rlci1ncm91cC1oZWFkZXJyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbn1cbi5yb3N0ZXItbGlzdCAucm9zdGVyLWZvb3RlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTFlMWUxO1xuICB3aWR0aDogMTRlbTtcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xufVxuLnJvc3Rlci1saXN0IC5jb250YWN0LWxpc3Qtd3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbi5yb3N0ZXItbGlzdCBuZ3gtY2hhdC1yb3N0ZXItY29udGFjdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cbi5yb3N0ZXItbGlzdCBuZ3gtY2hhdC1yb3N0ZXItY29udGFjdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yb3N0ZXItbGlzdF9fZW1wdHkge1xuICBjb2xvcjogIzk5OTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbi5yb3N0ZXItZHJhd2VyIHtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAxNGVtO1xuICB3aWR0aDogMWVtO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDgwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucm9zdGVyLWRyYXdlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDMwLCAzMCwgMC4yKTtcbn1cbi5yb3N0ZXItZHJhd2VyX19idXR0b24ge1xuICB0b3A6IDUwJTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW4tbGVmdDogMC40cmVtO1xufVxuLnJvc3Rlci1kcmF3ZXI6aG92ZXIgLnJvc3Rlci1kcmF3ZXJfX2J1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnJvc3Rlci1jb250YWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnJvc3Rlci1jb250YWN0LWF2YXRhciB7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xufVxuLnJvc3Rlci1jb250YWN0LW5hbWUge1xuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuICBwYWRkaW5nLXRvcDogMC41ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4LWdyb3c6IDE7XG59XG4iXX0= */"], data: { animation: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rosterVisibility', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        right: '-14em',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        right: '0em',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('shown => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('drawerVisibility', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        right: '0em',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        right: '14em',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('shown => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease'))
                ])
            ] } });
    return RosterListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RosterListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'ngx-chat-roster-list',
                templateUrl: './roster-list.component.html',
                styleUrls: ['./roster-list.component.less'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rosterVisibility', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            right: '-14em',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            right: '0em',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('shown => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease'))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('drawerVisibility', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            right: '0em',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            right: '14em',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('shown => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease'))
                    ])
                ]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatServiceToken"]]
            }] }, { type: _services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_10__["ChatListStateService"] }, { type: _services_log_service__WEBPACK_IMPORTED_MODULE_11__["LogService"] }, { type: _services_adapters_xmpp_xmpp_chat_adapter_service__WEBPACK_IMPORTED_MODULE_13__["XmppChatAdapter"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatServiceToken"]]
            }] }, { type: _multi_user_chat_data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatServiceToken"]]
            }] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"] }]; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], rosterState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], contacts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], contactRequestsReceived$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], contactRequestsSent$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], contactsUnaffiliated$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], rosterStateChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], statusColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], countChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], voted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], roomName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], wind: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }] }); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/core/contact-avatar.ts":
/*!*****************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/core/contact-avatar.ts ***!
  \*****************************************************************/
/*! exports provided: dummyAvatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyAvatar", function() { return dummyAvatar; });
// tslint:disable
var dummyAvatar = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAKACAIAAACDr150AAA63klEQVR42u3d61oa2Rbu8dz/PewP+4MgQlEHjiIoAVQQEREkgAiIHOrsvoQ9q9B00un0SiceiuK/nt+Tp1c6h46Behlzjjnmp8VqDQAA3tknvgQAABDAAAAQwAAAgAAGAIAABgAABDAAAAQwAAAggAEAIIABAAABDAAAAQwAAAEMAAAIYAAACGAAAEAAAwBAAAMAAAIYAAACGAAAEMAAABDAAAAQwAAAgAAGAIAABgAABDAAAAQwAAAggAEAIIABAAABDAAAAQwAAAEMAAAIYAAACGAAAEAAAwBAAAMAAAIYAAACGAAAEMAAABDAAAAQwAAAgAAGAIAABgAABDAAAAQwAAAggAEAIIABAAABDAAAAQwAAAEMAAAIYAAACGAAAEAAAwBAAAMAAAIYAAACGAAAEMAAABDAAAAQwAAAgAAGAIAABgAABDAAAAQwAAAggAEAIIABAAABDAAAAQwAAAEMAAAIYAAACGAAAEAAAwBAAAMAAAIYAAACGAAAEMAAABDAAAAQwAAAgAAGAIAABgAABDAAAAQwAAAggAEAIIABAAABDAAAAQwAAAHMVwEAAAIYAAACGAAAEMAAABDAAACAAAYAgAAGAAAEMAAABDAAACCAAQAggAEAIIABAAABDAAAAQwAAAhgAAAIYAAAQAADAEAAAwAAAhgAAAIYAAACGAAAEMAAABDAAACAAAYAgAAGAAAEMAAABDAAACCAAQAggAEAIIABAAABDAAAAQwAAAhgAAAIYAAAQAADAEAAAwAAAhgAAAIYAAACGAAAEMAAABDAAACAAAYAgAAGAAAEMBAyc2Gx/C/4ogEEMIBfTNlvEnTzPcv1eqUba8PQTcuwbNN2LJ/9Tzb/SvwY07LFj18bpvi5ws9+cQAEMLDTifvo/7NISpGaIj5tR/zPtRzHsESIGsvV+uFxOZ7OBqPx7WDY/TK46fXb3durTrfZ7lxcXYtvW51u+6Z33et3+4PeYNgf3d1NprP5QvyyXngbpmmLgHYFkdDeL/sSzJTLAAEM7FDifh+3XtbqpjlfrkRq9r4Mm1fXlfPG4fHn9GFJzh4mtOyBkorJqaikRBLyXkLZk55FXnz9HvFvxY+JSup+Uj1Q0olUWsnkU4VivlQ+qZ01Wu2bfn90P3lYLEUwi1QWSS++Ef8l3+Yxf00AAQyELXQ3lajluCL/prMHEbdnl1fFk6qaO4yrGZGakYSfqUl1X9ZE7ia0jJBM5zaU7OGvkF9+/Oane/mtpLxf3E/o/aT3K4tgzh+Xa/ULUTffTWbLlW56pbcrviWMAQIY2O7cfVyuvNC1bNsVoWs/rtaD0bh+eXV4XBb5F5M1Ua1G/Go17iXl3yP2a+7+uR9/WRHMoqoWSS/qZvEfIKWzueKxyOPeYCj+y03L+lsY8xcKEMBA0HN3U+x6jVHu02qtb0I3XyonUtmov2IsqttNXSti+NWz9r+k8l+/u5fHipfH4jOBqMUzR89hvFiuRL1uu94y9XNZzN8yQAADQctd3TREVonEmi9WN/3+cfU0mcn5e7eKKDefQ/fjEvd/5LH/aUDO5BPp3MFLGCfUTKFcubrpzeYLb8fadb8mMX/pAAEMBGCd2Ra56zw8Llud7uFxWRSREW+3Vf0mdPMBDN2fhrH/3+yFsebtTO9JyoGsibK40WpPpg9+Enur048kMUAAAx9S8m6aqpa6ftMfFMpVUTj6W6reCrPsF5RbFLr/sn8s/izJTVnsf6rIFY/F54yHxVJ85vD3idfz5YqXBEAAA29rU/KKElBkz/BuXD6rS+ncJplESoUmd38kZ3KbP9rmc4ao8oufq70vw7X31XjSRUG8XD0ueYUABDDwyrnrRa/u9Qe7q7Xe7t6mj0pR6XmdWeTupkzcBZs/bCKV889NyXL2sNFqzxfLrzvEjxTEAAEMvErJK9JXRIuo86bz+WmzJUIoIimiENys0O5I7v5j35ZI4gMts+mdLtfORvdT0/ZGZhLDAAEMvEr0OuPp7Lh66h/e/Vry5nY2en+siaVU1psfklTzpXJ/eGf6c76IYYAABn5nwdnvbXZHk2npc23fTxfJDxsS92cxLL7dV7ypmbnicW8wNCyvS21JDAMEMPCLha+/1+uM7ieFcnUTvUmi99d3iJ9bpuX0Yan75YthedUwLVoAAQz8W/R6Pb2OO53NS5XapseK6P29lmlve9iP4ezR8WA0Fl9V8bGGUhgggIG/R+9yrdvu02K5qtYvYrJG9L5CDPtfwM2idPFzdTJ7EDG89g8s8ZIDAcxXAXje7tVN8+LqOpHKRiRVSmWJ3lfeG06qsaRaPW+Ir7btuuLjDjEMAhjY7e1ewxSF72B0p+ULe5Ky6XAmNd+qUzohJ7Ts1U1PfOIxWJEGAQzsJn/N2RUZcFI7i/rneoned4hh8REn4rVJn4ynM8efakIMgwAGdqrP2RRFWLvb824JTKqyv2FJQL5bDO/LqZisnTaaa/8qCzIYBDCwE+lrOe7scZkvlffiSdacP3JFWlLU7OHwbuI8sSsMAhgI9ykjwxTpe929jWupfVH4Er0fHcMHajqaVE+bLcOyDYtdYRDAQCgLX9t5XK1LlVokocQpfANzVEmUwnsJJV0ojacPjuOVwrxcQQAD4em3Ek/228FISvs7vkRv8ErhmOLtCjfbHctx14ZJKQwCGAjDsrNpu+fNVtS7xTZN+gZ5V3jPG9lR8/7ObJsMBgEMbHH6mv6y82GpvJeQxfOdnAt+DEeSqpo9HE9mNsvRIICBbV12dt3h/UTyxzBR+G5TZ5a/HN3u9mz3ie5oEMDA9hS+z0M2ni6vuyJ6WXbe0s6sSEKunNVNy2JLGAQwsEWbvk61fhHxl52ZsLG9pfBeQsmXyqu1blpsCYMABoKdvoYpCiajUK6IZzeFbwgyOJpU1dzh7GFhMTALBDAQ5Jarh8UylS9y1ihUJ5TkVFzNDMdjy3HJYBDAQODS13ac8WSW0LL7skb6hiyD42o6klSve7eO8//IYBDAQKDS1xUV0oGSOqDlKtSzo1udruNyPAkEMBCM9HXcp9vBKCbT8Bxym9boRqu9OZ7Eix8EMPCh6eu4N71+VFJpeN6RDN5LKKeNJmM6QAADH5y+Vze9SEJhytVuHU+KJytnDYsMBgEMfEz6Prntbi/CjMkdzWC5ci4ymLVoEMDAe+/7ute926hE7bvDGSwptfqFvx/MmwIEMPBe6du9HZC+ZLDIYG8/2H3ifQECGHjz9LUct/dluOm6IoR2PYP9nqyzi0vHfeJ8MAhg4C3P+9rOl/F4P0n64tuR0fLF1bXDnCwQwMAbpa9pO5PZQ1xJeed9yR58fz640+/b1MEggIFXT1/DtObLlZzJxZQU0zbwYwbvJ9XheGxzZwMIYOD10ne9Nsy1YaTyxf0kc57xz1cIx9V0XEndzx64uxAEMPA6lmvdsK3D43KEO47w7/cmKalkJj9frnTTIoNBAAN/3HjlPlXOG5GETPrif2bwflLLHh0bls2ADhDAwJ8e+W17wyZJX/xqBkcSSvmsTkMWCGDgj9qeR/dTDh3hNw4meRcXcjAJBDDwG+nrb+OtpXTugLZn/GZT9MSkKRoEMPBfG69My8oVT/ZpvMJvFcFxNS2ls15DlmGSwSCAgV/e+nXc00ZzL6GQvviDhiw1XyqLIpiGLBDAwC+lr2U7/eEddy3gVW4tbLTazhMNWSCAgX9P35U3c0N8K6WzzJvEq2wGR5Pq8I7NYBDAwP/a+rUct1CusPWL1yqCD9R0MpNfrXXx2Y63GAhg4Kdbv812Z09i6xevmcGiCD6u1GxOJYEABv4pfb2+58lsHpM1tn7xBtM5/OuSHBaiQQADP547sh3v3JHMdQt4fXE1k9Cyi9WKhWgQwMB3i8+2y+Iz3rgITqqlSk280iiCQQADz53PumnN5vMDJcXiM956Ibp7O+DOYBDAwF+Lz/lSmcVnvMNCtJTOLr3TbgZvPRDA2PnFZ8e774ihV3inIlhSy7Uz7koCAYxdt9INUY5IWjahZYgHvMtojtx+Uh3dT0zbIoNBAGOHD/66bvW8IYoSyl+8UxGczsWUVPbo2LCYEQ0CGLt68Nc0rbvJjOt+8QEzoiWlfdNjNAcIYOxm79Xa670qnuxz3S/eXULLSJrXjbXS6cYCAYwdW3y2bOe6148kZNIXH9SNpVTPLxyKYBDA2LWjR2vdULOH3qB88gAfdFFSTNam87luWrwlQQBjZ44euW6LuVf46CJ4P6keV085kgQCGDt09Gi11iV/H44YwEcWwWnvSNLdZGqaHEkCAYxdOHrkuPXLqwjlL4JRBBfKFctxFysCGAQwwl7+zpcr/2oayl8E47ZgSRmM7kwGRIMARujL31qjSfmLABXBSipfOjFtm3coCGCEufxdLFcJyl8EsQgeUwSDAAa7v8DH7AQTwCCAEc7yd6nT/IyA8m5ooB0aBDDCefbXcZuc/UWAi+BShTPBIIARxvJ3rRtKNk/5i8CKydpk+sBgLBDACI/5Ymn7k5/3EpS/CPB06KRaOW8wHRoEMELFtJ1c8fjAu/iIZz2Ce0VSQssuuCIJBDBCUv4uV6Zpje6n+0mVRzyCf09wq9OxHWdOEQwCGGFov3Ldk1o9klQV1p8RbAdKKpUvGqbJOxcEMMLQfjVfMHsS21IE5yKS2h96kykpgkEAY7vXn23Hvbi65vQRtug80tHnqu0wFQsEMLacYdmpfPFASfFwxxYtRM8eF5xHAgGM7T19tDJtazieRJMaz3RsVytWs+23Yi2WvJFBAGMr268cx62eN2i/wjYFsF8BZ49KpkUFDAIYW9t+tVqbSYY/YztHQ99NZrppzZe8l0EAY9umX1m20/syjCRk2q+wXRR/KtZpo8lULBDA2M7jv45z9LkmKgkle8gzHVs3FUvNHq51Y8XbGQQwtm79ebFcxdU068/YUlFJGYz8A8G0YoEAxnatP9/0B9y+gG1dhc4eRpJqtX7hOC4TOUAAY6vWn13nuHrK+jO2+jSwlivojKUEAYxt63/WJfqfEYZe6Knh9UJTBIMAxjasP5u20x+OIgmV9Wds9yq0pNQvr2xWoUEAYzsC2J+/UTnzrz/KEsDY7okc6aOSwUQOEMDYjvXn1XqtG2r2kPVnhEBM1qazOXOhQQAj+OXvWjyqxtPZflLl2Y0QTOTYk5R299bmMBIIYAR/A1g8qlrtjnhs0f+MEGwDi4+Sx9VT2+V6YBDACPoBpLU/AKvKASSEZiSWeCWvDWOl8wYHAYzAH0DiAgaE7zCSdzHDgvc4CGAEdf3ZsGwuAEbIVqG5HhgEMLZhA9hxG612hA1ghGsb+OikajnOI29zEMAILPGQKpQ/7yc1Ahih2gbO5P1tYIP3OAhgBHQDWDykxKOKDWCE7zTwZPrgbQPzTgcBjAASjyfxkBKPKp7XCN9p4Jte3+I0MAhgBHMD2LuCsNf3TgAzAhrhu5rwvOFdTUgAgwBGAANYPJ6q9YsIJ4ARtgrYGwqdK56YtsM7HQQwgkg8nsRDSjyqxAOLpzZC1oeV0LJLv9GBdzoIYASuA0s8niQtSwcWwjqOY3Q/8e4GZhUaBDACtP68er6DISaneFIjrOM4rrmVAQQwgtmB1f0y2EvQgYXQ9mGdNpr0YYEABjOwgPedhyVrhbI3D4v3OwhgBCyA3afjyimXICGs4mpayxV00+T9DgIYwWJYVvqodKCwB4zQNkLH1cx8saIRGgQwgtYCrdMCjbA3Qms0QoMARrDopjmZMYQSYW+ETiidPgMpQQAjSBvApmUPRuOopPCYRpgboSXl4uqai4FBACNYZ5CuN1Og6cBCqE8iVZgIDQIYnEEC3vskUlIrnlS9Cpg3PghgBCSARU1QOatzDQNCTE57VzJkjkqGZfGuBwGMoLAct1Cu7MsaAYxwn0RSMvm1YXASCQQwgnQI+JBDwAh9AOf8o8BLAhgEMAJhudbXuiFn8xwCRujFZG0ye9BNVqFBACMgUzh0PcEUDjCLAyCA8c4B/LBYxtWMxAMaIW+EzkcSan84MpnFAQIYwRiDZTEGC7tzK/ANw7BAACMgZ5AM0xrdT/eTBDB2IoBbna5NAIMARhAC2LTt/vAuIqlKhmc0wj+Nsn55ZTMMCwQwghDAlu10v3zZSzAGCzsxjbJWv2AaJQhgBCWAGQSNHRoHfcY4aBDACEYA27bT7vYIYOxCAEeTarlWJ4BBACMoAXzV6RLA2JEAPq6eOi4BDAIYwQjgZrvDVUjYjQuR1FKlZrtPBDAIYAQggB3n4uqaAMaOBPDRZxHAHEMCAYxABDCXAWNnAljWiuWqxZXAIIARkACuX14RwNiRAD48/iwCmPc+CGAEI4CpgLEzAVzwK2De+yCAwR4w8J57wNrR5yp7wCCAQRc0QBc0CGDscAC3OAcMzgEDBDA+YBLWDZOwsCsBfFI7YxIWCGAEIoD9WdC3BDB2JIArZ4yiBAGMwARwp9/nNiTsyGUM1XMuYwABjGAEsGk7/eEoklCVbJ5nNMJ+H7DKfcAggBGUADZMa3Q/2U9qPKCxAwGsNNsd2+YYEghgBIBuWpPpQ0wmgBH+AN6TlOte3yKAQQAjCNa68fC4jCspHtAIfwWckG8HI5MABgGMIFjpxnK1TmjZhJbhGY1wiya14XhiWDYBDAIYgQjgtWEomTwBjNCLyanxdKabFrchgQBGMLaBDTOVLx4oaR7QCLcDJfXwuBCfOHnXgwBGIFi2fXhcjskaR4ERYgktI6Vz4gPnSieAQQAjGCeRHMc9qZ1FkyoBjFCXv+l0oWhYNu96EMAISgB7VwJfXkUkAhihvwy4Yjku73oQwAhMANtOu8t9DAj/IOgyg6BBACNQAWzadn94502jzDCNEmEeg9VotZlDCQIYgQlgfxjWeDqLycziQNjHYHVvGYMFAhjBOgq8WK4SapqjwAjzFA5JGYzGTOEAAYyAHQU2/aPAKkeBEe5DwEsOAYMARpBWoZcr23GOPlf3OYmE8B4CVrOHIn2XvOVBACNoJ5HOm60IAYyQbgDHZO3wuGzZHAIGAYyABbBlOze9PieRENoW6KRaPW9wBgkEMAIXwIZpjSbT/aTKwxphbYG+uunatECDAEYwG6HjNEKDFmiAAMY7MywrXSgdKJwGRgg7sOJqZr5YcQ0DCGAEcRXacdxyrc6VDAjlASTx4ZJrGEAAI6iN0LZzdcNEaIR0CnTtjA4sEMAIbh/WHX1YCG0HVo8OLBDACG4f1nKlS/6GGU9thIn4WHl3PxUfMQlgEMAIKNO286WTmJLiWiSEqQNLfKxcblr9eZuDAEZg52GdNpoRiXsJEZb150xefKDMl8omM7BAACPIAWzaTn84EgEsE8AI0TXA9csrrgEGAYzAj+NYrRKpLNvACNMIjuF4YjKCAwQwAs6y3XypHJNTSpYiGGHYABbfrtY6G8AggLEF28CNVjvinQYmgLH168/7SbVYrtqO88gbHAQwgn4a2LKH40k0qfH4RjhOADfbHRHArD+DAMYWbAOv1pwGRohOAE+mumnNl7y7QQAj2B6XK9t2SpXaPkOhsf0joLVcQTdN3tcggLEl28C2c9Pv7yUUDiNhuw8gJdVa/cIbAb1c8dYGAYztWIWee3cDZ1iFRgjuADZtDiCBAMYWHUZy3EK5wio0tvsAUia/NgwOIIEAxpatQm+uJmQVGtt7BeFJ7cxxWX8GAYytopvW7HFxoKR4lGMbiQ+OkYTc+zI0uYIQBDC2jn8zUnmfm5GwxTcgMQALBDC2cxW6zSo0trb/uXxWdxz3kfVnEMDY0l7ohJqR6IXGtvY/s/4MAhhbOpHDfdpM5JDphQbzNwACGO+2Ci0KiNvBKJKQWYXG9qw/5yOSct68ZP0ZBDC22FI31oahZPJM5MBWzX/WJtMHb/4z72IQwNjeVWhRRtQazYikUgRjK04f7SupfOnEtG3evyCAsfUHgiezh5jM7YTYluO/Sqc/sGm/AgGMEPDHUla9ViyKYAT++K/C+EkQwAhbKxar0Ah++SspZxeXNtcfgQBGiBaiTS1fYDIlgkxK5Q6U9Gy+0E2L9ywIYITlQLDjNtsdpmIh0O1XSbVUqdmOw+kjEMAI1VSsx+U6oWU5j4TABnBUUr5spl8RwCCAEbLzSKfeeSSKYAQxfQ+eTx85vFtBACN028C68bBYxtWUlMryxEfwTh+pt4ORCGDWn0EAI5xFcPW8EeE8EgKVvv7w5/RRybTpvQIBjPAO5ZjO5zFZk1I89xGs4Rvd/oDyFwQwQt0O7T4dV08ZyoFA3X2Uyhd0016ueZOCAEaoi+DNZEp2ghGc8vem16f8BQGMXSiC3fJZPUoRjGCUv+lCybBE+avz9gQBjNAXwebD41I8+CiCEYDZkzQ/gwAGZ4KBD7h5sGxx8yAIYOyOzVUziRSDsfCB8lFJHY4nlL8ggLFjO8GO22i19xIUwfiwyc9Hn6tMfgYBjJ2zXOu6aam5wwMlTR7g3S8+ysaU9HQ+5+IjEMDYxSLYvyd4GEnQDo33P3oknzdbjuNS/oIAxk5m8GptOW7xc5W5HHhPcTWtZPJrw9j0IgAEMHZ0Lsd0Pj9gLgfet/zt3g5seq9AAIMjSWcXLfFMpAjGu/ReaYfHZcvh6BEIYNCNtdbXpuF1Y6l0Y+Hte69k7X72QO8VCGDguRtrOB5HJYWFaLxp+bsXVy6urum9AgEMfHMs2HWr5xfMxsLbpW9MSWWPjg3LYuwzCGDgLyvdWBuGkj2MsxCNN1t8Hk8fDNOi/AUBDPx9Ibo/vIuwEI23WHxOKI1Wm8VnEMDATxeiK+eNCPMp8bqLz0k1e8SdgyCAgX/tiNZNM5UvxpQUGYzXWnw+8KdOsvgMAhj4tyLYsKzJ9CHGaA683tiN696tzeIzCGDgf4/mcN1Wp8tFSXiF9JXUk+qZ7T6RviCAgV/I4LW+mREdZUY0/iB9D5SUmj1cG16DPW8rEMDAL1kb5mqtK/4zlAzG7239ig9wd5OpadmUvyCAgf9yKsmyxdOTzWD89tZvu3tru2z9ggAGfudU0tN1r889DfiNU7/V8wZbvyCAgT9qyKrVm3uMqMR/uO9IzRVPTNvh1C8IYOCPTgaLJ+nhcXmfhiz8WuOVlM49+ldNU/6CAAb+qAheG6aIYTl7GJNpyMK/iavewGcar0AAA684ncOePS4SqfSBmiaD8dO2Z0npDYbM3AABDLxmBlu2M7r3mqJFlUPY4B/bnq86XeeJxisQwMAbNEWL+ibKdUn4se1ZUs4vWg6HjkAAA2/WFP0kqhxR6yRZiMY3te9J7cxyXdqeQQADb1oHu41W25sUTR1M+vrpW/xc5dARCGDg7flr0efNlnc4mAze9bsWlEK5Ylj22jB5a4AABt6DyODTBgM6dv2mo8PjMukLAhh45wEdXgbX6hd7cQZV7mL6RiU1VzrRTZP0BQEMvH8Ge7cWVs8be/EkGbxrK8+54nP6PvJeAAEMfEgG24572mztJTibtEPpe3hceU7fJe8CEMDAx2Ww4z41Wu1IQiaDd+CaI7lUqRm246cvR35BAAMfXge7bqvTjfgzOmSyKqzpG1fKZ3XL8U4csfIMAhgIyvlg58n1Lg+W1DjzosM451nUvrVG03KYtgECGAhgBjvuYDSOq5mYwr1J4Sl8xSeqqKQ02x3bfSJ9QQADAc1gy3am87maPeT+4NDc73sgp28HI4c7jkAAAwHPYNOyRZ2UL51EEhwR3u70FZ+ikpncePrADYMggIHtyOC1YRqWXa7V9+JJWqO3dsizkjk69j5R2TbpCwIY2JoM9lujn1qdrqiiDhTasrYpesVnpkhCrpw3xKconeNGIICBLT0iPLqfKpl8lC3hLUnfmJKKKenrbn/TckX6ggAGtnZL2LaXul4oV/fi/ilhYjjYU660XGEye7DY9AUBDIRjS9iyvVuE/eVoTigF8qyRlokk5JPq2Vr3/rZIXxDAQIiWox337n4qCiy/O5rOrGB1OyfUzE3fW3ZeGwbpCwIYCN9ytKObVvX8IiopDMwKSL/VXlwpHFceFkuWnUEAA2HO4NXasF23PxwlM7lIQmVX+GML3wNZa3W6InrpdgYBDOxEDNu2s1jrlbN6VGJX+MN2fA+PK9P53Ga8MwhgYLdKYd1wXHc4nqQKxb24TCn8jmd8VSmdven1vcLXtCh8QQADO7orbFj2xdW1qIMjSXUTEiTl253xjSbVylljuVrbrrP0/gp4HYIABnY1gzcN0rPHx1LlVMRDLMmK9JvcqRBJyLmj4+H9ve26a51WZxDAAPwY1k3Ltp3h/STn3+LAxvBrRW9Cy+wlZDV32OkPTNsxLdacAQIY+HFF2nRESHS/DLRcYS+uxLUMMfwn0RuRFEnLNq874vONZTvL9Zr0BQhg4Ccr0qu1f1zYvOp01eyhiOEDTgz/VvQmUtnz5uXjcm07THUGCGDglzeGbceb2tG+6amiGpaUzaI0SfyLVW/98mqxXFmOu2K7FyCAgd84qmT7w7Ouu7epfDGSkPeVlEgahRj+PnfFt16blYjedK7Rai9Xa4foBQhg4BWqYX9RuvdleHhc3k+qkaSa8LeHZc71pnPiCxKVlHShdHXTW3grB0QvQAADrxnD3t6w5bjj6axy3kho2ai/Lu0VxNndKoiV7OFzyZsQXwGtVKn1R2PDssXHFKIXIICB1zdfLMW33oElx12sVq1OJ3NU8grihF8Qi4rQT6YQ5+5ml3dT8qq5wtnFpTdL0n0ybcv7+hC9AAEMvGU1/LI97HpnlsaT2WmjqeYORSbt+0vTX2vE8OWuKHklLVuu1QejsW6KP/3zLMn5gugFCGDg3Qtix3HXptUf3p3UzpKZvEhiURO/rE4fbmMYK9n85j/b62r2cldOpLJHn6udfn+p67briuyl5AUIYOBDY3hTEPunh0VFuDYMUR2e1i+0fHFTMu4nta9lcZDDWMn8Fboxf39XfJIQSSzq3d6XofiTWuIP+LLLu/nwAYAABgJREG+Wpk0RU45rWPZ4Oru4ui6UKyLVopIW+XaN2k+7j83jb/8bnkNXUqOSmlAz+dLJ2cXlcDwRnyfEpwpzk7svRT8AAhgIaBJ/067lNU6LfxzdT/wwriYzuZisifoyklS/Fsdf62N/w/WttnKf+cd2nxM3qe49fyzIitCtX1z2h3cL/5IoL3ctm3oXIICBrVyd3kSXiDHD2oSxs1obk9lDtz84b7ZEcSxn8wdKOiopIgj9SPY2j0U6fhPM+b+y87/Y/PSEn7Xi19wcX97z96fFJwApnROJW61fXHdv7yZTfwCn/bXY/fZjBAACGAhDWSziTVTGmxJTFMdr3Zg9LAajsQjCs2bruFLLFU/kTD6upkUwb844eam54YeoEPXtv/zD1++PSIKf5QlZlNciaONqJpnKpY9KR59rtUbzqtPtD0fiE4BXn/tL5eIbw7QIXYAABnYgjL/LY31tmJspFiKS/TO1ztowFsvVdD4fTab94d1Nr99sd+qXV6fNVq1+UTlvlGv14+ppqVIT35ZrZ+J7xPefNppnl1cXV9ciy28Ho9H9RASt+F1Eze3V366ziVv/qonvEpfQBQhgYKfr469ZuFzrXqEsgtmrle1N+7EXz45I0Reul9bi26/fs/kBtv+DTb+u3QTtS9auiFuAAAbwn4P5N/AFBAhgAABAAAMAQAADAEAAA/jgnd1/+YnLTX+W36L1bK0vff/62/3r78jfCEAAA6EM16//SuTl2vAOAXu9zZbt3S783N7sfG1vtt0ny5uG4f1bw7J8tm6aPkv8dGFlGH4G+0nsf89a/Mpez7P/wwz7+Sf6p43Fb2R754++a5O2fOJ3ET/M/2XNr83S//5HAEAAAwEK2m/y9ZuDQy+xanlzoUXIWcuV/vC4mEwfRvfTwWh8Oxjd9PpXN72Lq+vzi8tq/eKkdlaq1A6PK/nSSa54kjk6Th+V0oVSKl/UcgU1d6huBklmcpI33yorvk2mvJHOcjYv/q34MVq+mCoUxU/JHh1nisfiF8kfl4ufqyfV08p547TRbLTarU73unvb/TLsD+9G48l4OpvOn08L697HAts73fQS1ZvPAd8fZ/o2m3klAAQw8I5Bq/sl7NezuSK0ROkpImw2X9x9HZ1xdS0CT2RqoVwRcSiyU0TmgZKKydrmQvtIQt7bTK3yPM+3Ev9qX9ZiSurgL+kDNR33ZDYjKv9RXFAz3vwsb4TW88+Neb9daj+p/TUty/8dPQnvN/WnZXm/RUJNiyBPFY7ypbL4EFA9b4iobt/0eoPhcOwP9PAT2h/o8fS3gR4/BjMvG4AABn43bv2bbr0Zzi9jI/1LcJ+DVgRSf3TX7t7WL69ExIoqU1Sffr5+Pzxyk6myJrIw/s1457/fjvCjjHclg/wHVy+Inyt+Bf++o5+Pkv7m1odNim8ye/+bqP52pKX41URRXvJHWooyWlTw4tOG+Fp5wWz+FcyGZa9FKq+YtAUQwMDP4vb76cebuH0ZCSnKO1OEi8iYbn/gBW31JWhTWRFIUWmTsl7NKorITXn60+sTgnoH8L9dmvS3Sx20Hy91ENmsPgdz8VjUzd6s6ZveYDR+eFyIVP46a1r8w2abmUgGCGCQuH9dirDZphVxK6re0f3kutc/bbaKn6upfDGRyvgVrbK5yvfboJW/y6p8cnsiNvlnhfXfsvnH25aiknKgpMXXRHxeqZw1Wt71D3ez+SaSna9VMnkMAhjYxcQVNdlqrY+ns5t+/7TRLJQrorQV4bqf1L65FjC9ydodDNr/HMyZ3A8Vc0Z8Xnmulf1ITmbyueJJuXYmInk4noiPO94VFC55DAIYCNk+7nK18q7c86/h/TZxe/1avZkvlUVIeAmR8OPW2+P8e9wSq3+8mv28FC9nXiJZSUVfqmTxcSddODrx8rgzHI//JY95SYMABoIeut/t47repX6T6cO1l7gXInGldG5fJK5f4IrofY7bTJ64fb9I/uar/XXh+rs8rp412yKPJ8vV2m8zF5+cHMIYBDAQ3ND1M9fbyhVl7uh+2mp3SpWamj2Myc9LyqL2+j5xWUwOUM/Xj3mc0LL50sl5s3U7HIm/ZcOy/GUMvzNutX5cEsYggIGP2NN93ITuc4Vki+8fjMaNVrtQrohH+eYhLr79LnEzJO6W5bH4zOQdj054jdbZo+Pq+UW3P5g9LnTzuTIWLwEqYxDAwJsXu4/+wVz9+ZiQs1zpg9HdafMyVzxJpLJRadOorH27j0uebf96dV7O5BPpnCiOI347+oGSTuWL5Vr9ptcXYbw5ou1t8OvG4yaMeb+AAAb+OHRXf60w+89Z3TQnDw+tTrdYrkrpnD9M6pu1ZUI3xGHs//3K/jLG85Enr7M6lTk6Pm9eDkZj8YHMm/3pD+fy16hXlMUggIHfyN2XYtd1LccW/7f75UvlrKHlCn9fXmY3d1dXqr+GsfgQJj6KiQ9kxc9V8eFMfEQTH9S+dm+RxCCAgV9aZF6t1qbttdsYln03mTVa7VzpJK5mIgk54h3MTVHp4sfzx5s9468fzrR8QXxcux0Ml7puu0/2N33UvNFAAAPf5+7LIvPaMIbjyWmjKZ6hmxFUmxVm2W+kIm/wKw1cLxvGsiiLjyu1m35/vlxZm/GiL31bvPVAAIPcdUSNslrr/eGoct5QsvnNzu5LsZtnhRm/vUa9KYvFx7i4mimUq+2b3sPj0nwe9G2RxCCAsWP7u9/k7uNq3f0yOKmeiifm5j6++MvOLhGC109iv28rVzpptjvT2dx/EYqamNVpEMAIe8krvjX9cQprw7gdjI6rpwktK6qTTUeVTO7iXfq2YkpqT1JispYrHrc63YfFUrwo6dgCAYxw5q7Xz+z3VY3uJ9XzCyWT39xkx+YuPuZ48UsH9Z5fExfK1ZvewDvI5Pq90+J1u1xtLoQGCGBs6xav7Xq1xWT2UL+8SuWLUUmJkrsISgd1flMTb1anJS17UjvrD+/WhuH14bNJDAIYW7fL6y01e7tr7sNi1ep0c8XjmKz5M4xS7O8isEm82SeOSqqaPazVm3eTqfcy/ro0TUEMAhjBL3kNyx6MxifVs7ia2UvIsZd+Zh70CHoSZw9l/0hxJOFdCJ0pHre7veVq7Y31oCAGAYwgl7yiSmi1O6mCt9Tsb/Fm5Zf9NmC7bjL2lqa92yC8GVuV88ZzQexSEIMARgB8W/IOx+OT2nPJe0DJi3AtTW8K4lzx5Lp7uymI2SEGAYyPKHmXKxG9m8Zm8Q+tTjddKD2XvKmsTL2LsBfEVa8gnln+uOnNO4LHAghgvHn0eqvN3h0JT5PZvFq/SGjpqPTSXUX0YkcK4qRXEB8el28HI8OyvzZq8YgAAYw3WW1ertfiQSM+8g/Hk9LnmtfY/HKgiEczdu0k8XNBnJBT+eLVTW9l6N51mX4MP/LEAAGMV93ofdJNs9sf5Ionm9XmTUHAsxg7XhAf+OvS4v/WL68eFkv/1mqLdWkQwHiF6HUcd7nSW52ulitEXhqsiF7g2yT21qUlOa5mKmf18dTfHqZLCwQwfj96n9z5YnXevJS07GZin/+Rnwcu8M8xLKWym+3hQrkyHI//6tJaUA2DAMYvV73ikXHaaIpP9BFJYaMX+PUY3sy2jErK4fEmhu1NDNOlBQIYP41e/bnqXW6iN0r0Aq8Qw+XBeGzaxDAIYPw8eh8Wy1r9Iq6kohLtzcBrxnC+VB6MiGEQwPhhr/fh0Yter5+Tk0XAqzdL/xXDJ4PR3SaGvQxe8hQigLGj53q9208XyxXRC7xvDJeH44ntOLppUQoTwNi96LWdtWFcXF0nUlm/zYoRksA7HR32Y1grVWqT2dx23DVTtAhg7EL0Lvxri0zbvu7dqtnDvYRM1Qt81N5wTNaq5xeL5cp23dVaJ4YJYIQ2fU3Tshy3P7xLH5UiCeVAJXqBjz43LKkJNd1otVeGYTvOkhgmgBGy6F2L97brjqezQrkSkZR9f6QGT0AgEFO0Utm9hJLM5NvdnmG99Gfx7CKAEYpOq6f5clWu1fe9GT3aZheKBx8QqBiOe8MslVT+qD+880ev059FAGOr15xtx7CsVqeb8CfkSVzWCwQ7hg+8U/jKcfV0c68DK9IEMLZ0zflpOJ6kC6U9BloBW7Qx7PdnxdVU8+paN01WpAlgbNnp3vly9blWj77coMBzDdi6jeGotyJdHIzGrEgTwNiKNWfbsOwrf805ypozsP0r0nuSclI9nbMiTQAjyBMlxftzdH+fPmLNGQhNBudeVqQzzXbHsCyDUpgARtCardamVas39yWVNWcghCvSWnYvrmSPSuPpg0MpTAAjIIWveDcOx2M1V4hICmvOQIhjOKakYrLWaLUNyxbVMBlMAONDC1/dqNUvopJG4QvsyPCsPUlJF0p3kxmlMAGMDyp8XXcwEoXv4XPhy+MJ2KVSeD+p1i+vvMlZlk0GE8B4v8J3ZRjV84Z/yihN4QvsaCmcUFKF4t1kSoM0AYz3OOPrPLlfxmMl+1z48iQCdvyckiiFzy4uRSnMWWECGG+VvuLdZVpO/eIy6rU6U/gC+GtXOHd0PHtciFKYDCaA8crpa7vOw+Njrniyx44vgB9i2DsrrKVuen3bfVrrBjFMAOM1pjrr3lTnTn8QVzObu4x43AD4MYPjWjaSkMu1s7VhmDadWQQw/ni0pAjgcq0u3ldxhlsB+F8xHEkoaq7w9ZASD1ICGP+Z12/luOPpTMsVxDuK6AXwXzqztOZVx3LctWFSChPA+G/LzpbjtDrd/SSjJQH8VmdWXCmUP3vtmyxHE8D4xfQ1TEs3zZPq2V6C0ZIAfj+Go0lVyeTH05nt0h1NAON/pa9lOw+LZbpQikosOwP44+Vo1RsffdO7td0nb1gHT1oCGP+Yvs6T2x/dxdWMeMOQvgBeazk6kpBr9QtvejxbwgQw/r7paxiW415eXYvCN64yZAPAa/LnVsr50mdRAYsYJoMJYHy36XtcPd1juiSAtxzWkczkvNnR7hMZTACTvt7NCg+Py1S+yKYvgDcf1qGm95Nau3tru5wSJoB3fcCkO7qfJlLZfTZ9AbzjlvB589Jy3CVDKwngHW25ctzel2FM1tj0BfDOMbwXV06qZ4Zl05ZFAO/clCvbfWq1O1FJkVQGTAL4mKGV+dKJ3wLKPYYE8G4Uvsu11/B8Wm9GEjItVwA+dlKHlis8LJa0RhPA4U9f3TANyy5VanuMdwYQgAyOyZqUzo4nM+4SJoBDfdzIsldrPVc85nIFAAGalqWkRQzfDkYOEysJ4LCm73yxVLOH+0mV9AUQrONJqWxUUq67PYc6mAAO32Hf2eMimclx3AhAYKdlRSSl1ek6HBEmgMOUvtP5XErnYjIXCwIIdgYn5IurazKYAA7FqA3bmUwfEqlsTCV9AWxBBu8l5Ppl2/FvT+IxTgBvbfo6zt1kGlczB4zaALBNGaycN1s2GUwAb236uqP7yYGSYtAVgG3cD67VL7xxlWQwAbxd6StetYPRmDGTALa3NXovLlfOG2QwAbxlK89fRuMo6QsgBBl8Vrcc1qIJ4K2ofW1v3/dASXvpy3sYwNZncLJWb9ru04LzwQRwwE8cTWYPcTXj1768ewGEIoMTSv3yynGfmNFBAAd31tXscZHQsgcKJ44AhCyD5Wa7w5wsAjiY6WvNl6ukN9mc9AUQQpGE3L5hViUBHLT0Na3lSlezhzEmTQII79mkqKR0+gPubCCAg5K+a8NcG0aqUOSWBQChz2DxoLsdjCzqYAL4wy3XumnZ+dJJlPQFsAO8e5NkbXQ/NW2bDCaAPzJ9bffppHYWkbjfF8CuNGQdqGlJyz4sloZpkcEE8McsPjuO22i190hfADuWwfuylsoX14axNsxHEoEAfv9Rz53+IJKQpVSWNySAXcvgSFItlKu27TAkiwB+54Eb9uh+Kj4Dkr4AdnlAR/W8YTOggwB+z0NHD4/LRCrLJYMAyGBvQMcTTdEE8Jun73ptmCvD0PJFjvwCwOZwcI+DSQTwO7Q9W7ZTKH+OcOgIAF4OJh0oqfvZg2FxMIkAfsu25/rl1V5cJn0B4OtCdExJabnC2rDWNGQRwG90z2B/dBeVFBqvAODvTdGSclw9tb0plWQwAfyq6aub3l0LiVQ2TuMVAPykIavV6XJbAwH82vMmbSdXPNlP0ngFAD9tyNpPqqPJVDwwyWAC+JW2fl33tNFk4hUA/HsRfKCklEx+tdZ1wySDCeBXmHjV+zKMJET6svULAP8jg6P+hCzLcZmQRQD/4davOXt8jKupOI1XAPCLm8GS0mi1uTaYAH6VrV9O/QLAf9wMvp+aFpvBBPDvbv1eXF2z9QsAv7EZrOUKummyEE0A/87A58n0IcZ1CwDwuyeDa40mp5II4P+8+GxYdrpQiikpyl8A+L2F6KikDMdjTiURwP9l8fnJHznJ4jMA/HYRnM55k4uyh2vDWOkG4UIA/9Jdv3eT6X5SZfEZAP70VJKkVLw7g1mIJoB/YfFZN00tXzxg8RkA/jyD/YXo/nDEQjQB/L/vOzpttCIsPgPAK4mr6aQ/HouFaAL4J+krXh2mNZ7OWHwGgNfviK5f0BFNAP9s8Xlt2U6+VN6XWXwGgFfuiI4lNVHhiDrnkcQhgH+87vem148kZNIXAF69CN6XNVHhiCetqHYIHQL4LyvdWK31ZDrv7VXwbgGAt1iITsjXvb5NNxYB/Lfeq1q9Se8VALxlN1ZGfEs3FgH8996rWJKpkwDwHt1YNt1YBLDXe7Vam8+9VxrlLwC8dTfWflIVNY9hWo9LAnjX5145nVt6rwDgXbuxTNumAmbulanlCgdKijcGALxXN5ZyO9j12Vifdrz8tR3n6qbHpQsA8H4BnM6Jmid7dGxYO30kaacDeKUba8NQsvlNYx4A4D2PJHX7g10ugj/tdvnrNtsdyl8AeH+iCE7li4ZlLtc6Abxz5e9ypUvpXEKj/AWADyiCRf3T7t7u7FyOTztb/jquW7+8YvIGAHxYEaym1eyhrhsrXSeAd6j8nS9XiVSG8hcAPrYIbnU6uzmX49OOlr+Oe3rB4EkA+GBeFeRdFWzs4HDKT7u6+7tOaFnKXwAIQhF8ddPbwZ3gTzQ/AwA+vB1aN80lFXDoR1+tTUvNHR4olL8AEJQzwb3B0LSd+S4VwZ92rfwVf8E3/UEkQfkLAEEJ4H0llS+VLdtZEMAhJgI4Uzw+UFJyhtc9AARDJh9NqqP7iWlau1ME71AAz5dLkb6D0TjK7i8ABK0ITqrHlVPbfXokgMO4/ry2Haf4uSr+mglgAAgUKZ09kNPT+Vw3LQI4bMRf6mT6EJU1XugAEMRWLEmt1ZvOzgzl+LQ77Vfe8I1GU/wFK5S/ABA8m9kMolzakaEcuxLAy5ebBxm+AQABPo+kdPsDy3bmiyUBHIr2q4XXfnU7GInyl91fAAhyK1ahXLUchwo4TNOvnFKlRvsVAATcgZKaPS52oRVrJwLYu/tosYyrGUnL8uIGgGC3YikXV9e244Z+FfrTDqw/r2zbaXW6DH8GgK2ogFOFkmHZVMDhmH5lZY/86Ve8uAEg8KJJzZuKZVmigiKAt3f6lXf8924y3U+qvKYBIPiUTD6SVCvnjdAfCA59AC//Ov6bPeSVDQDbcSA4k18ZRrgPBId/Cdqw7FSheKCkeE0DwNasQkvKYHRnhvpAcJgDeP4yfjImk74AsD2r0NnDSFKt1S8cxw3x5UihDuDF0nacZvt6T1IYPwkA29ULreWLummyBL29/c92vlTeV1IEMABsl/2kej+Z6d4NwQTw1l1/pBsP/vwNXscAsH290JLSaLVDPJHjU5jXn23nutdn/gYAbGMAx5RUrnhi2g5L0Fs4/9l9nv/MASQA2NKd4BDPhQ5tAK90Y7nSpZcLJgEA20XO5PckpX3Ts0N6GOlTWNefDcsejsdRSeFFDABbehhpP6keV09tN5yHkT6F+ADSxdV1RFJYfwaAbV2CVjNarhDWw0jhDODH1dpynOJJlQ1gANhqMVmbzuah3Ab+FNYN4JVhKJk8G8AAsNW90HuSctPrW2HcBv4UxvVnbwLl/WTGDUgAsO3bwF9vRiKAt+YE8NVNb48NYADY/pNI6cOSYbEEvR1XEK5s1z2unrIBDAAhEFczD4vlOnRXE4ZzD1g3TS1XOFDSvHABYNtPA0ck9XYwCt/VhCEMYN0wp/NFjAuAASAc28CScnZxGb6h0J/CtwFs2vbtcBRJqNyABAAhCOD9pFr8XLUc53HJEnTgO7Ca7Q4jOAAgJH1YajqUdwOHMIAdxy3X6lE6sAAgFBJaJq5m5svVKlx9WCHcAzZtJ1c8OVBSLEEDQDjsJ9XR/dQwrTBtA4ctgDczsJIZLkECgPBsA+9JynWvH7JrkT6FsAV6NucAEgCEqhE6qZ42WiGbh/UpdC3QzqYFWmb9GQDC0witFct+IzR7wLRAAwDetxE6bPcSfgphC/TZeYQWaAAIWyN0ehGuRuhwBfDmGuBydV/WCGAACJOYrE1mD2EqgsPWhGVYVvbo2DuDxOsVAEIkmtSG44lh2aHpwwpbAIsEVrOHcc4gAUDITiIl5N6XoRWik0ihCuCVbixX64SW5RAwAITvKHCr07UJ4KCWv+ZsvuAQMACE8ijweTNUdyJ9ClMLtGFao/vpflLlxQoAoQrgTF4EcLlWdwjgIE/hEAGsZg8VAEA4ZPJqrnCgpPxZHC5d0EEMYMufwvF/IjGRwXsJBQAQDhFJ+b+xhJzOcQwpuE1Y4+nsunvb/TLo9gEA4dG57fe+fGEQR4AvYzBNy7JN27EAAOFiWPaSUZQBX4sGAIQSs6ABAAABDAAAAQwAAAhgAAAIYAAAQAADAEAAAwBAAAMAAAIYAAACGAAAEMAAABDAAACAAAYAgAAGAAAEMAAABDAAAAQwAAAggAEAIIABAAABDAAAAQwAAAhgAAAIYAAAQAADAEAAAwBAAAMAAAIYAAACGAAAEMAAABDAAACAAAYAgAAGAAAEMAAABDAAAAQwAAAggAEAIIABAAABDAAAAQwAAAhgAAAIYAAAQAADAEAAAwBAAAMAAAIYAAACGAAAEMAAABDAAACAAAYAgAAGAAAEMAAABDAAAAQwAAAggAEAIIABAAABDAAAAQwAAH7D/wd0WllIUZLg4gAAAABJRU5ErkJggg==';
// export const dummyAvatar = 'data:image/png;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/7QCcUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAIAcAmcAFDhNZC13ajI2c1hqYUZUZUxHTlNkHAIoAGJGQk1EMDEwMDBhYzAwMzAwMDA5MjA1MDAwMDkzMDgwMDAwMzAwOTAwMDBlNDA5MDAwMDc2MGQwMDAwZTAxMTAwMDA1ZDEyMDAwMDAzMTMwMDAwYjMxMzAwMDBmZTFhMDAwMP/iAhxJQ0NfUFJPRklMRQABAQAAAgxsY21zAhAAAG1udHJSR0IgWFlaIAfcAAEAGQADACkAOWFjc3BBUFBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmRlc2MAAAD8AAAAXmNwcnQAAAFcAAAAC3d0cHQAAAFoAAAAFGJrcHQAAAF8AAAAFHJYWVoAAAGQAAAAFGdYWVoAAAGkAAAAFGJYWVoAAAG4AAAAFHJUUkMAAAHMAAAAQGdUUkMAAAHMAAAAQGJUUkMAAAHMAAAAQGRlc2MAAAAAAAAAA2MyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRleHQAAAAARkIAAFhZWiAAAAAAAAD21gABAAAAANMtWFlaIAAAAAAAAAMWAAADMwAAAqRYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9jdXJ2AAAAAAAAABoAAADLAckDYwWSCGsL9hA/FVEbNCHxKZAyGDuSRgVRd13ta3B6BYmxmnysab9908PpMP///9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8IAEQgAoACgAwAiAAERAQIRAf/EABsAAAEFAQEAAAAAAAAAAAAAAAMAAQQFBgIH/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/9oADAMAAAERAhEAAAEzGb2vHCioYWMmBRUEeNHBzddyodjvziRWcjREMb9uA37dEtjtMgY7AFjpgEZBABNy3D6Wpfuv1wmMdunlCjIYXKkCRXCajrIjo7MA0hCjgn5dVkfRvLfWub0M1nLOma9FLV3fTwgaQzkCOwwo6TnLt8bGxUwSK4g+d+lebq6PW0Wrz6c/R+g4UNLr/N/TtOeOj81mFFQxIiA6iLPSW8ToJbRuRTKmQnPl9oehno2mX2WA1w3E/wA62eemkrK6wTtXgNeU9V6GRP0nx0/YcP3nJL9qrmat8xDuGQlR3GkZ/Y2YpbyK+FNaFocq83TJloirh7w9kdmWvqXSCjRomfZpRmqctKTdefbXr5AjvM7lrXS9RXpwYN+RgVndTU5WZPrh2Nph4gtNocJHithHi9J6DLCKil1Ga22+NlTTzc+4BVV8yhuunChnQJzLjmOaGTI6wdLF2Ok7awXHoZE8pYSqMKHS5PazVPNvXFUU+pC1nuLWczLa3rlOZzwRCPwhkcfQuxuBM/IEFd1OYEh9NOzdD4JGkI44OBn/xAAqEAABBAICAQIGAgMAAAAAAAACAAEDEQQFEhMhECAUFSMwMUEiMgYkNP/aAAgBAAABBQL20qVIqFmnid/tUqVKlSr12MLyC2IHRhXwVfYpUqVKlSpUp2Hr1s8cYuL9tKlSpUqVKlSpUqVKlSpUsgwih17t37Qyx8fGywnVKlSpUq9KVKlSpUqVKeQYYp8mTIkwMCI8TbTcgp4ziLsipUqVKlSpUqVKlSpUt+XHHb866Uflmd/c1qS5QUqVKlSpUqVKlSpUqW/k5ZpxdawXqLZWxELkOgNUqVKvSlX2P8hicczZm0h6euO/jchemLXjLFnqlXt8rz7L9NnitmY0o8FhZZg2V2ygTM7fTy4MXKtuwVPNP2N/X1tWrVq3XmvK8rdAzTRfiSnxiJyNidn1/wBaFnL4gTNpO2RdpruJd7q1atWrVpyFkMgEjAJFt4gBxyGbD2OYxoBIzw4JQYGGKcW9rxrqTRsutk4xMLzSZJjrYiR6jHdhyJ8U8kYhweHjH15yqHHGFpZCuQYxdtgAKGcJlT+vG1xXFUtjcuRHCMYcVMQxNHiMTSQDK+Kfbm9TI+RvkuOFiQYJmGJihznxIJV2T4KikjlB2b24/wDLcOtllvjQYeTIUseX528/VNrS4yhM2amFhHbs7u7UqpwkE3duTN/oZlMhzJxQbKRkGyjdQ5EUyndsXauYsM8b5MWvh6X6o1/1bLXN9fXBxyVtonlw4pWmhyGNwwICjdluQ5YWCXbiZGE0hSYRKSGUFannLJx4MgoihyRFuwe6fLORte7QCH8cuLKiKMZgNWhL5dN67qXjia4XDC8J/DLY43A8OGOWSXTgbFqJxXS4PjfCC2VK0bHw+PxoCaH4IglAk9kwx5mG/wA2FkW3Z1FjTZMwysTSAZEKtW98RTMTLiqR4sMqyNb1iDv34b/TZ/D+SkEDT4sakwYZHhiaIHT+G/Srkq9X8Ij4tVu7+MnHimWGHSPpSe7dvLPY8V5XF+a/CdMv3dJyQlTXb/pfsfCYk/ljid2Zm9PPL//EACMRAAICAQMEAwEAAAAAAAAAAAABAhESAxMhBBAgMSIwQWH/2gAIAQIRAT8B8NHp9yOROOLr6ejlxidTB7jfjRRRGNuiHHofJJU68KMTE01yRGakObKKKLiXEbj+GRL1aNNy5Iyr4y9E8IS+Jki0bbNtm0zZ/otORRTHFtGLRXhSIUvZppWzEooxOTJl99L2/JqzFFdo6arJFFfb/8QAIhEAAwACAQQDAQEAAAAAAAAAAAERAhIDEyAhMQQQQTBR/9oACAEBEQE/Aezl59HDHLZXtpSlPlY3yfGzXTSKUpSlKPIz8i8ehZFKUpSjYxCy/ClKTImQkyGP+McMsP1GFyXk1ZqzdG6OojqG6PXs2FlGVF+qylZybP0cjahsbGxvC4s0T9GpCHN6XZ+fScHmzY8GfJlViUpUX+f/xAA4EAACAQIDBQUHAgUFAAAAAAABAgADERIhMRAiQVFhBBMgMoEjMDNCUpGhQHEkNFNy0UNigqLB/9oACAEAAAY/AvcXY2Eyf9GpxWVdRO8XfUam8IN8tP0V6i4lGdo9Mpa8a/T9EzVfLFarfDeU66AMl8MA8r/T+gao+gmKqfTlKDMPkuc5ToJ8JTuiG+TCK/Me/pp9TX2ADVadjsHWFfpPv8HBFlG/zrigF4LesJuN0XlRPX3+Pg6zszrkO5WA3H7RGAy5iAuLr837RVXzKfv7nTxYB5xmpi03HkuJhpWX/cZaq5M6aGLotZfK9rGKvaNyqeEOemsTuED0/mtBfXw67NZrNZ5jPOZfmL3gmPpeEnKamNTrHUZNyipUUErz+brN1RPJ+Z8P8z4f5nwz9/HmQJusp9YO8UNbnKboFW+RAgQnNt30hSiFw8XtrAFFzMLbtphxE4xnczp4cn+4nnH2nmWfEWEtWUCFezbtP6jPa9oLTcrYTGp1HFRB1/8AY5qP7SoL5jjymZswNs4C26mo5z2aW6zBSzbieURWbeJv1/eYamLEONp7NgfcU+y0/wC5oFTQbMxc6KvON3oBd/N/iVWq5U75TS634iaCYKGXN4XGoyHUxq9ck1mFxEqMAxK5XEzphW+pcp7QmrR+risxC59Zl4e0E8NmJBiYm2ekao+B2GWbW+0XGlhfXWU6SEWsSRMR9YRRNqXzGWQWnZFa2E1M9hXkcSxuFoQRumYP9Gpp02ZVDN5VM3kZfzNxwTygqN5Ko/MDFhh5zAjKKd77wlSgxRihuotwnkHpDQpfAC7xteYW52lYqLIMrDYSnnpnGJTqpo4vN0jGPLGarfvG1mYmPihuJTbpMSEL0tMlPobzNG+2wUalieD8Z3faCV6y3f8A/SGphU4vnz/M7rs6Mah5MYVKb51JqYTKg03jxgOY57s3Kqn12FW/k6puG/pn/HgKnVpSB1tfwYqa7h1hRxcnSblQ/wDIT2bXHQwL2pq4EPcV2pHrFx0xWU8RC1IWQ8OUOFwb3uIGRMl4BpnTenzIyhXvVqKeDi8/hhjo/wBO97S1WlUR5alTJM77tlwo0XnOUXAww8VI12nd/M8gvOk5HpsOOkt4W7M7gjhee1Od87zXEdinlN9AZkCv9pm93nq0CpoOezy3HTaBn4c5ivlsu673MQqr3U9NupnTw3xN+2223OdP3htx3tmkOUsIbyxFoRwihcrETLb/AP/EACkQAQACAgEDAwQDAQEBAAAAAAEAESExQVFhcYGRoRAgsdEw4fDB8UD/2gAIAQAAAT8hqVKlSvsCSQNqwQA32lSpUqVKlSpUr7wKlTOcP7Ias6Famdbiw8DK+ipUqVKlSv4QArYuwYbJvbz2YZzs/b/v/wAQAAHwqtVy9iUE2M9OGOowY7cWIwpKfy+fvAr+EA0Md+XpANg0DQZiOIVixTgLvy95Tg5niVF1v5wADCHUeP8A2afMSjiWddQexlrF7ZWc76vD/OAAJsUD1cx+q+Wv6ico4ncmGBsAu81j3gN9WgftCvsKlSpUqVMLY1PcwyltMBwlifEzwnhF/EwpRowwskGh3c+kEI3baB/ZK+pUqVKlUupXUhfRmejAUWtblJcUID3uvSNerWY4ePe4ayBTkZeBawXX4gBpEFnXnzAOUAA0NX2iGhFFajTh8moTFBVkzmrRnFfZR5IDj5Q6H5gzS95kXbzFdL+8r+3P9SWnd3u6YVSj8r2gANnB0mOF6w5UuNz3kadEaNir9eYjKekHA7/c7H6J6n1AfP6CKQENsjqtRL2cMrltspqNDLAVfeW1qx25RZBrQtdDt3ihn0BMoXVvrfSVCxTjcmZiKKGu/f64mJlw+oQ/9aWv3QNz88BIN7xMBF5mAq67qy4Eu693GsGj0nU6I/8AQWpeQDiIsZwEEhVMGVKz3lLX1iMS2uD+8wQyOerDmUzPZydGF+iXmUcM4+leqPnASrzGtUOX8Qqg7EqPFMvNnibfSJOL6GA6JbJhUemqljbKhuQ6xRvZ2lm9NE68fuXq6G9k8eXhB20GoJxXj8TK2K6bE/0qOe0H0CcRYyTzKzqUSpU62YHtCcjNAY3Q94rH+BXEcyCCmHuXLwQuE6DjcWhB5HtK3KGJcipUOY6wVUKS16D29/zCKlbj16SkNDN8wp7Zv+Us0E3i85n4K6nvkEeuAYfaOGGy9GGF2LIncvSGxzXB1O8Om4Q2LcWKTvoqCpxdgcKwveY1HJfmowyZqVWcH5lw7LJ6e/iI1qPPJ7x27BYvM5FoTW9y6aXtmCw1ElgFuE+Pt/iH/Ej80zhJ5y43kSGiRtmgy8qqg5x2vE4o96LKcQ6Sh8UcSoROZXzCh3Ww3apevuUbc3CCAl0VDzqFWR4fRkqVQXfx5SjDYiWI2Nys48k8+8LeujxN6KHlGWTJi/WZ2UXTQxkwLq1MAp0s+ilhBPaEVxeh6/eUm8qGoBhkbdmYaBqxY54/xB5XQLPuTjetpJJWAukmHpUSU33b2nMcXrietO5gAlrXD+hClPRTipWKDf5BMCimuaojw3NZia6pmtHi8xLjoIXV80XSDV2lhXrHBi83ipuytP2wimTtuNAdj0RQPJEb8yk2wetkLOvWe8F4QTvDgKnEatzMu/aJoVbvEaHWALxLMkdLC5nBzRTtmsfYcwqUxTUnTZzkQw15nEHjiXvFXRnRRRdvHtDw6+ZtvMcsVLtF41OYNIrO7czehF4bjJfsHkxWMhZOs8TKwlSupnc2DRi8CzcfqI+18rms0piEOC9EJfH3JealkGK6z//aAAwDAAABEQIRAAAQOq4p3gHOorA+Ytmmd4mZjsbnhz0REyrU5VunJloNV9ND9sbZB4KgHrejh9FhigD4Iopl82833/zTEg587ktAYHifOKpQx8Yq5ki0/8QAIhEAAwAABgIDAQAAAAAAAAAAAAERECAhMUFhcYEwUaHw/9oACAECEQE/EFkQyhj34LkmKH1HJe1o2TGZJLHhQdtWVxCEySFjtrUUZ0vCsPrZ5SDd/exS7B9GlSqmRxrfguoVDc7krT8JDtIVPQbXEhba4HvEUREX0RD2ITPgMQW0ISwruayKQ3Er2KirYSesmPI0oISCQtSeBppFfcwMJPkSIdE+D//EAB8RAQEBAAICAwEBAAAAAAAAAAEAESExQWEQIFFxMP/aAAgBAREBPxDbbbZTzEI82222/UC7ZYu/8A+BtsYwOE0B++ehk85npsX0f3F/C085PvDV8EGHETz4kNnCC+QaZz+XKe5w7EPmJB8w3T8Nb2So7Nkgd4pL3DW1fx8B2iTcpZ3K6hHM9z9w4z+lts2d6SHS35hTy2qdFtjM+ElNttvzm/Qv/8QAKBABAAICAQMDBAMBAQAAAAAAAQARITFBUWFxgZGhECCxwdHh8DDx/9oACAEAAAE/EH7PfsjPg6mCdTJLUeWoWBKRyI3f/ITsMP1D9HxhRNIvK6HcgQNVQuLBo3M3UEFvgZ4x/wAr+www9n2gGfVKU1Y+sLGCs4Ls6kLYWBGxsVXYaHj6X/gAMPb9gfoeMyfwxlUqjlgkQiiydpuoiNgUsQDsIncjRWNJo+KUvaM+M8J4Twnh9JHjPH7B4zxjb1hrp4h3XEAHnKpLIfy5xBUqlB233Cq7MRA3YtBgTnL9RdxADhS4gVTA+zz83PGeP3Q8PvHpNZlwA69/hMoqWfWAr+Ga8xltcEVlVyjdGoJrgK3hv8jPGPb/AMYD0fZxGM8OthPc9o9cVsbwADzUFiwAbbjOxWmXHA+v4gVWqyEeRwx0hFTnTLWEPcY9kfqPH6lH2nWVgVkeI2ND316JDmJDSwC84UR5LiX74XKz1LY+R7kd6CpkCkd9jxCqRY7PRd2WdbiXWuIwjp9v4ltOmIg4HSFkt02awQTurxAkg5sVCFestYfSg1V2T5qZTPDmLfI+SHYQAgeLwfMGyEFY12E5L2pRKBfZ+IAmJhJoA3h6cS2OzJNY5wruzGYVbb1gPWuA7svR7IA8U3vkxmWsoB4jXP0uXOYlYzBcHWoGgGjUGoQd5/7ll1grNt4SdJqs/eVaHxb9SuIeR/EQWipK5g48BKMQu7OsTi6D2zJl14FyqdIAMTspUS5NaWkwjyQBthvqIUKo5QbIilsVh05V37xDa+P6xHY9P6SvZ6H+JTv0RKcqMpz8JXlgVfvMWydWRWf5RA95SkOjHxNXAN9v9xEkMB1bKnqX4lgEgXmLPasQqwszdUpjq5cR091bLLAYUt0GkdMjnEryBdjCuxaVl8QhDA0qrOWke4RSeXxET/UJ0mj+Eg3TQm/6pgHXuv4TTBy7nxCSvaSg5uXRMRxh17eDMWjlWB8LmCu4TF34jZluyjepYtdXitw3XRiUKxgYxjlgRFcaXjGeBzuDAQWIeA4Nbm7zgH5VIl3oHzeezjnpDOmWqatDZWGXrRLp7R2Vc0OciMOq7nGD0uOU0eGHlPFztj2gWJQNmrg147St/K5XpAArbhfYt9SDtCgAq9e8w1JDgw3s95aQmhN3D9vBcNOtBnG7J12xZ+BBcDyYJlVsRvEP2rNRlkZUUmCDVRXUdbx0cdrglVgOlfXlfEZPq5zYxfUTFcSxmaFsB4EtZAlTUK9s1DCRuAvaBzGfcDTi9cR1u2IYXDZeC4cl/mDFo/ULWtZ6TC3xYAlMqHVDfmyWnEmNq7crcCY3FUNRJU5aKG1bvrHDh0y3qDvlI+9bwGml85lmyqrq021DaWRcO5rWjvz4mhqLGL4vtBlKkhqA71S4mQNlFGvQgpSzhzcjqCcdIICGh1s2OtP6YdAIOAXhvibGTZdrz6eJWFAlj1mjLoS/uR+hetn8MwjnVB+ooDjtvq/UCmXiKKPOmu8KJIOKOShhm9TkJWAmRduNXKYLEhcacpaZdXWoiI5pk+0sVDjOCgpaDcpIpU8jkv5mNvBavj2B6E6xHAxDoRNvF8vaBVBpgP2gJDZU2J6HikuJ812Lyx6ri61Ubl7E0w4YMqhQ0XTAGeV5r/E6sY1D9ci/WCWN4fbFD5lqhDtyfFSmCphGkYMXVCLSq1rD1iJmxFvCyoPPWCis60jjhMecxdGaTcwVgxwV2liZL8u30dvaAG3TD6FhmvLClbCgqNGeUEzzLFTO5d1HW8ssmpdDc5xuCMtJ7jACZAjtI/xXUlyJAOJoibx+Y05OXXOY3Zl1P5RkgMNt0d9yGWlgJq9fFRbh7JRpeQoy5mZDvo48SrKsJu3nBq9+8twxHqmXXbqOpnluJT1K/EtGk6d+zUABFCt9KvHzDjIAGfWhSeuJReMxw7ZLeIFIQ28CE6iOsQmRwRHJvjhihOtlobHA+sBRf3JeNKZ8ROYgzehbPzGNdpFedD0+Zagml8Pr/EHU8opa+MEJeRIysFNHUv2iuQWp2RxUchGooZvBE4xrEFloqQvQ8QcLjxDIaWQPjx6ssDFgaE9LMxil8C1E62ywRXnw+escFkvksJkkqr1OAkR8hVRPRUz2ZviJW5Di3GCJDSYUiWpfi6vdBAoQxnvFhWREba35ywSBykvbjzGjDbyfzLaafCPq3USCCily29zILuMI8QQEOw0S0lVtYzGzKjgFFRZodmr7ONQQtOLlYIQwzhhenOHEFbWsHWApSwfoDweWGZQKNfV/u0zGLLETE3mDNfjnh9ZYbgqSoMoOtkvIEnDW2LMVCyurwYR3feJ1LZ9mADg3AvLr/XWUJrwdQUSXRdmL9JkC7Lc/+TaThgPxb7yrXPWp286G2C60Lo1XrNwaOa/EsoVXEBJtVYzcFAcXiNDfqa6TcGTmRTDuSu1ANmx57ksoEsiukO1QVKiDgKf9iHamxS81X/koBKKpo1AIlzVtRe7PwxCgPSVVjAXtRwGhOuu8q7waabJa2DXxMUq/Uvb/ADP/2Q==';


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/core/contact.ts":
/*!**********************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/core/contact.ts ***!
  \**********************************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _contact_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-avatar */ "./projects/proxym/ngx-chat/src/lib/core/contact-avatar.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message */ "./projects/proxym/ngx-chat/src/lib/core/message.ts");
/* harmony import */ var _message_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message-store */ "./projects/proxym/ngx-chat/src/lib/core/message-store.ts");
/* harmony import */ var _presence__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presence */ "./projects/proxym/ngx-chat/src/lib/core/presence.ts");
/* harmony import */ var _subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscription */ "./projects/proxym/ngx-chat/src/lib/core/subscription.ts");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils-array */ "./projects/proxym/ngx-chat/src/lib/core/utils-array.ts");








var Contact = /** @class */ (function () {
    /**
     * Do not call directly, use {@link ContactFactoryService#createContact} instead.
     */
    function Contact(jidPlain, name, logService, avatar) {
        this.name = name;
        this.avatar = _contact_avatar__WEBPACK_IMPORTED_MODULE_2__["dummyAvatar"];
        this.metadata = {};
        this.presence$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_presence__WEBPACK_IMPORTED_MODULE_5__["Presence"].unavailable);
        this.subscription$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_subscription__WEBPACK_IMPORTED_MODULE_6__["ContactSubscription"].none);
        this.pendingOut$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.pendingIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.resources$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        if (avatar) {
            this.avatar = avatar;
        }
        var jid = Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_0__["jid"])(jidPlain);
        this.jidFull = jid;
        this.jidBare = jid.bare();
        this.messageStore = new _message_store__WEBPACK_IMPORTED_MODULE_4__["MessageStore"](logService);
    }
    Object.defineProperty(Contact.prototype, "messages$", {
        get: function () {
            return this.messageStore.messages$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "messages", {
        get: function () {
            return this.messageStore.messages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "dateMessagesGroups", {
        get: function () {
            return this.messageStore.dateMessageGroups;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "mostRecentMessage", {
        get: function () {
            return this.messageStore.messages[this.messageStore.messages.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "mostRecentMessageReceived", {
        get: function () {
            return Object(_utils_array__WEBPACK_IMPORTED_MODULE_7__["findLast"])(this.messageStore.messages, function (msg) { return msg.direction === _message__WEBPACK_IMPORTED_MODULE_3__["Direction"].in; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "mostRecentMessageSent", {
        get: function () {
            return Object(_utils_array__WEBPACK_IMPORTED_MODULE_7__["findLast"])(this.messageStore.messages, function (msg) { return msg.direction === _message__WEBPACK_IMPORTED_MODULE_3__["Direction"].out; });
        },
        enumerable: true,
        configurable: true
    });
    Contact.prototype.addMessage = function (message) {
        this.messageStore.addMessage(message);
    };
    Contact.prototype.equalsBareJid = function (other) {
        var otherJid = other instanceof Contact ? other.jidBare : other.bare();
        return this.jidBare.equals(otherJid);
    };
    Contact.prototype.isSubscribed = function () {
        var subscription = this.subscription$.getValue();
        return subscription === _subscription__WEBPACK_IMPORTED_MODULE_6__["ContactSubscription"].both || subscription === _subscription__WEBPACK_IMPORTED_MODULE_6__["ContactSubscription"].to;
    };
    Contact.prototype.isUnaffiliated = function () {
        return !this.isSubscribed() && !this.pendingIn$.getValue() && !this.pendingOut$.getValue();
    };
    Contact.prototype.updateResourcePresence = function (jid, presence) {
        var resources = this.resources$.getValue();
        resources[jid] = presence;
        this.presence$.next(this.reducePresences(resources));
        this.resources$.next(resources);
    };
    Contact.prototype.getMessageById = function (id) {
        return this.messageStore.messageIdToMessage[id];
    };
    Contact.prototype.reducePresences = function (jidToPresence) {
        var result = _presence__WEBPACK_IMPORTED_MODULE_5__["Presence"].unavailable;
        for (var jid in jidToPresence) {
            if (jidToPresence.hasOwnProperty(jid)) {
                var presence = jidToPresence[jid];
                if (presence === _presence__WEBPACK_IMPORTED_MODULE_5__["Presence"].present) {
                    result = _presence__WEBPACK_IMPORTED_MODULE_5__["Presence"].present;
                }
                else if (presence === _presence__WEBPACK_IMPORTED_MODULE_5__["Presence"].away) {
                    result = _presence__WEBPACK_IMPORTED_MODULE_5__["Presence"].away;
                }
                else if (presence === _presence__WEBPACK_IMPORTED_MODULE_5__["Presence"].dnd) {
                    result = _presence__WEBPACK_IMPORTED_MODULE_5__["Presence"].dnd;
                }
            }
        }
        return result;
    };
    return Contact;
}());



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/core/get-domain.ts":
/*!*************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/core/get-domain.ts ***!
  \*************************************************************/
/*! exports provided: getDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDomain", function() { return getDomain; });
function getDomain(service) {
    var domain = service.split('://')[1] || service;
    return domain.split(':')[0].split('/')[0];
}


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/core/id-generator.ts":
/*!***************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/core/id-generator.ts ***!
  \***************************************************************/
/*! exports provided: id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id", function() { return id; });
function id() {
    var i;
    while (!i) {
        i = Math.random()
            .toString(36)
            .substr(2, 12);
    }
    return i;
}


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/core/message-store.ts":
/*!****************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/core/message-store.ts ***!
  \****************************************************************/
/*! exports provided: MessageStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageStore", function() { return MessageStore; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-array */ "./projects/proxym/ngx-chat/src/lib/core/utils-array.ts");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils-date */ "./projects/proxym/ngx-chat/src/lib/core/utils-date.ts");



var MessageStore = /** @class */ (function () {
    function MessageStore(logService) {
        this.logService = logService;
        this.messages = [];
        this.dateMessageGroups = [];
        this.messageIdToMessage = {};
        this.messages$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    MessageStore.prototype.addMessage = function (message) {
        if (message.id && this.messageIdToMessage[message.id]) {
            if (this.logService) {
                this.logService.warn("message with id " + message.id + " already exists");
            }
            return false;
        }
        Object(_utils_array__WEBPACK_IMPORTED_MODULE_1__["insertSortedLast"])(message, this.messages, function (m) { return m.datetime; });
        this.addToDateMessageGroups(message);
        this.messageIdToMessage[message.id] = message;
        this.messages$.next(message);
        return true;
    };
    MessageStore.prototype.addToDateMessageGroups = function (message) {
        var dateString = Object(_utils_date__WEBPACK_IMPORTED_MODULE_2__["extractDateStringFromDate"])(message.datetime);
        var groupIndex = Object(_utils_array__WEBPACK_IMPORTED_MODULE_1__["findSortedIndex"])(dateString, this.dateMessageGroups, function (group) { return Object(_utils_date__WEBPACK_IMPORTED_MODULE_2__["extractDateStringFromDate"])(group.date); });
        if (groupIndex !== -1) {
            Object(_utils_array__WEBPACK_IMPORTED_MODULE_1__["insertSortedLast"])(message, this.dateMessageGroups[groupIndex].messages, function (m) { return m.datetime; });
        }
        else {
            var groupToInsert = {
                date: message.datetime,
                messages: [message]
            };
            var insertIndex = Object(_utils_array__WEBPACK_IMPORTED_MODULE_1__["findSortedInsertionIndexLast"])(dateString, this.dateMessageGroups, function (group) { return Object(_utils_date__WEBPACK_IMPORTED_MODULE_2__["extractDateStringFromDate"])(group.date); });
            this.dateMessageGroups.splice(insertIndex, 0, groupToInsert);
        }
    };
    return MessageStore;
}());



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/core/message.ts":
/*!**********************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/core/message.ts ***!
  \**********************************************************/
/*! exports provided: MessageState, Direction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageState", function() { return MessageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
var MessageState;
(function (MessageState) {
    /**
     * Not yet sent
     */
    MessageState["SENDING"] = "sending";
    /**
     * Sent, but neither received nor seen by the recipient
     */
    MessageState["SENT"] = "sent";
    /**
     * The recipient client has received the message but the recipient has not seen it yet
     */
    MessageState["RECIPIENT_RECEIVED"] = "recipientReceived";
    /**
     * The message has been seen by the recipient
     */
    MessageState["RECIPIENT_SEEN"] = "recipientSeen";
})(MessageState || (MessageState = {}));
var Direction;
(function (Direction) {
    Direction["in"] = "in";
    Direction["out"] = "out";
})(Direction || (Direction = {}));


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/core/presence.ts":
/*!***********************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/core/presence.ts ***!
  \***********************************************************/
/*! exports provided: Presence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Presence", function() { return Presence; });
var Presence;
(function (Presence) {
    Presence["present"] = "present";
    Presence["unavailable"] = "unavailable";
    Presence["away"] = "away";
    Presence["dnd"] = "dnd";
})(Presence || (Presence = {}));


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/core/subscription.ts":
/*!***************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/core/subscription.ts ***!
  \***************************************************************/
/*! exports provided: ContactSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSubscription", function() { return ContactSubscription; });
var ContactSubscription;
(function (ContactSubscription) {
    ContactSubscription["to"] = "to";
    ContactSubscription["from"] = "from";
    ContactSubscription["both"] = "both";
    ContactSubscription["none"] = "none";
})(ContactSubscription || (ContactSubscription = {}));


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/core/utils-array.ts":
/*!**************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/core/utils-array.ts ***!
  \**************************************************************/
/*! exports provided: identity, toString, insertSortedLast, findSortedInsertionIndexLast, findSortedIndex, findLastIndex, findLast, removeDuplicates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertSortedLast", function() { return insertSortedLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findSortedInsertionIndexLast", function() { return findSortedInsertionIndexLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findSortedIndex", function() { return findSortedIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return findLastIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLast", function() { return findLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDuplicates", function() { return removeDuplicates; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var identity = function (elem) { return elem; };
var toString = function (elem) { return elem.toString(); };
/**
 * given a sorted list, insert the given item in place after the last matching item.
 * @param elemToInsert the item to insert
 * @param list the list in which the element should be inserted
 * @param keyExtractor an optional element mapper, defaults to toString
 */
function insertSortedLast(elemToInsert, list, keyExtractor) {
    if (keyExtractor === void 0) { keyExtractor = toString; }
    list.splice(findSortedInsertionIndexLast(keyExtractor(elemToInsert), list, keyExtractor), 0, elemToInsert);
}
/**
 * Find the highest possible index where the given element should be inserted so that the order of the list is preserved.
 * @param needle the needle to find
 * @param haystack the pre sorted list
 * @param keyExtractor an optional needle mapper, defaults to toString
 */
function findSortedInsertionIndexLast(needle, haystack, keyExtractor) {
    if (keyExtractor === void 0) { keyExtractor = toString; }
    var low = 0;
    var high = haystack.length;
    while (low !== high) {
        var cur = Math.floor(low + (high - low) / 2);
        if (needle < keyExtractor(haystack[cur])) {
            high = cur;
        }
        else {
            low = cur + 1;
        }
    }
    return low;
}
/**
 * Find the index of an element in a sorted list. If list contains no matching element, return -1.
 */
function findSortedIndex(needle, haystack, keyExtractor) {
    if (keyExtractor === void 0) { keyExtractor = toString; }
    var low = 0;
    var high = haystack.length;
    while (low !== high) {
        var cur = Math.floor(low + (high - low) / 2);
        var extractedKey = keyExtractor(haystack[cur]);
        if (needle < extractedKey) {
            high = cur;
        }
        else if (needle > extractedKey) {
            low = cur + 1;
        }
        else {
            return cur;
        }
    }
    return -1;
}
/**
 * Like {@link Array.prototype.findIndex} but finds the last index instead.
 */
function findLastIndex(arr, predicate) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (predicate(arr[i])) {
            return i;
        }
    }
    return -1;
}
/**
 * Like {@link Array.prototype.find} but finds the last matching element instead.
 */
function findLast(arr, predicate) {
    return arr[findLastIndex(arr, predicate)];
}
/**
 * Return a new array, where all elements from the original array occur exactly once.
 */
function removeDuplicates(arr, eq) {
    var e_1, _a, e_2, _b;
    if (eq === void 0) { eq = function (x, y) { return x === y; }; }
    var results = [];
    try {
        for (var arr_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
            var arrElement = arr_1_1.value;
            var duplicateFound = false;
            try {
                for (var results_1 = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(results)), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
                    var resultElement = results_1_1.value;
                    if (eq(arrElement, resultElement)) {
                        duplicateFound = true;
                        break;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (results_1_1 && !results_1_1.done && (_b = results_1.return)) _b.call(results_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            if (!duplicateFound) {
                results.push(arrElement);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return results;
}


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/core/utils-date.ts":
/*!*************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/core/utils-date.ts ***!
  \*************************************************************/
/*! exports provided: extractDateStringFromDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractDateStringFromDate", function() { return extractDateStringFromDate; });
/**
 * converts date objects to date strings like '2011-10-05'
 */
function extractDateStringFromDate(date) {
    var isoString = date.toISOString();
    return isoString.slice(0, isoString.indexOf('T'));
}


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/core/utils-links.ts":
/*!**************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/core/utils-links.ts ***!
  \**************************************************************/
/*! exports provided: urlRegex, extractUrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlRegex", function() { return urlRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractUrls", function() { return extractUrls; });
var urlRegex = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
function extractUrls(message) {
    return message.match(urlRegex) || [];
}


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/core/utils-object.ts":
/*!***************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/core/utils-object.ts ***!
  \***************************************************************/
/*! exports provided: extractValues, sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractValues", function() { return extractValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/**
 * Object.values replacement => return list of values for each key in obj
 */
function extractValues(obj) {
    var result = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(obj[key]);
        }
    }
    return result;
}
function sum(arr) {
    return arr.reduce(function (a, b) { return a + b; }, 0);
}


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/core/utils-timeout.ts":
/*!****************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/core/utils-timeout.ts ***!
  \****************************************************************/
/*! exports provided: TimeoutError, delay, timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return TimeoutError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return timeout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var TimeoutError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TimeoutError, _super);
    function TimeoutError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'TimeoutError';
        return _this;
    }
    return TimeoutError;
}(Error));

function delay(ms) {
    var localDelay;
    var promise = new Promise(function (resolve) {
        localDelay = setTimeout(resolve, ms);
    });
    promise.timeout = localDelay;
    return promise;
}
function timeout(promise, ms) {
    var promiseDelay = delay(ms);
    // eslint-disable-next-line unicorn/consistent-function-scoping
    function cancelDelay() {
        clearTimeout(promiseDelay.timeout);
    }
    return Promise.race([
        promise.finally(cancelDelay),
        promiseDelay.then(function () {
            throw new TimeoutError();
        }),
    ]);
}


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/directives/links.directive.ts":
/*!************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/directives/links.directive.ts ***!
  \************************************************************************/
/*! exports provided: LinksDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksDirective", function() { return LinksDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _components_chat_message_link_chat_message_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/chat-message-link/chat-message-link.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-message-link/chat-message-link.component.ts");
/* harmony import */ var _components_chat_message_text_chat_message_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/chat-message-text/chat-message-text.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-message-text/chat-message-text.component.ts");
/* harmony import */ var _core_utils_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utils-links */ "./projects/proxym/ngx-chat/src/lib/core/utils-links.ts");






var LinksDirective = /** @class */ (function () {
    function LinksDirective(resolver, viewContainerRef) {
        this.resolver = resolver;
        this.viewContainerRef = viewContainerRef;
    }
    LinksDirective.prototype.transform = function () {
        var e_1, _a;
        var message = this.ngxChatLinks;
        if (message) {
            var links = Object(_core_utils_links__WEBPACK_IMPORTED_MODULE_4__["extractUrls"])(message);
            var chatMessageTextFactory = this.resolver.resolveComponentFactory(_components_chat_message_text_chat_message_text_component__WEBPACK_IMPORTED_MODULE_3__["ChatMessageTextComponent"]);
            var chatMessageLinkFactory = this.resolver.resolveComponentFactory(_components_chat_message_link_chat_message_link_component__WEBPACK_IMPORTED_MODULE_2__["ChatMessageLinkComponent"]);
            var lastIndex = 0;
            try {
                for (var links_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(links), links_1_1 = links_1.next(); !links_1_1.done; links_1_1 = links_1.next()) {
                    var link = links_1_1.value;
                    var currentIndex = message.indexOf(link, lastIndex);
                    var textBeforeLink = this.viewContainerRef.createComponent(chatMessageTextFactory);
                    textBeforeLink.instance.text = message.substring(lastIndex, currentIndex);
                    var linkRef = this.viewContainerRef.createComponent(chatMessageLinkFactory);
                    linkRef.instance.link = link;
                    linkRef.instance.text = this.shorten(link);
                    lastIndex = currentIndex + link.length;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (links_1_1 && !links_1_1.done && (_a = links_1.return)) _a.call(links_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var textAfterLastLinkSpan = this.viewContainerRef.createComponent(chatMessageTextFactory);
            textAfterLastLinkSpan.instance.text = message.substring(lastIndex);
        }
    };
    LinksDirective.prototype.shorten = function (url) {
        var parser = document.createElement('a');
        parser.href = url;
        var shortenedPathname = parser.pathname;
        if (shortenedPathname.length > 17) {
            shortenedPathname = shortenedPathname.substring(0, 5) + '...' + shortenedPathname.substring(shortenedPathname.length - 10);
        }
        return parser.protocol + '//' + parser.host + shortenedPathname;
    };
    LinksDirective.prototype.ngOnChanges = function () {
        this.transform();
    };
    LinksDirective.ɵfac = function LinksDirective_Factory(t) { return new (t || LinksDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])); };
    LinksDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: LinksDirective, selectors: [["", "ngxChatLinks", ""]], inputs: { ngxChatLinks: "ngxChatLinks" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()] });
    return LinksDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LinksDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[ngxChatLinks]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }]; }, { ngxChatLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['ngxChatLinks']
        }] }); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/ngx-chat.module.ts":
/*!*************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/ngx-chat.module.ts ***!
  \*************************************************************/
/*! exports provided: NgxChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatModule", function() { return NgxChatModule; });
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/text-field.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _components_chat_filedrop_file_drop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/chat-filedrop/file-drop.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-filedrop/file-drop.component.ts");
/* harmony import */ var _components_chat_message_input_chat_message_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/chat-message-input/chat-message-input.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-message-input/chat-message-input.component.ts");
/* harmony import */ var _components_chat_message_link_chat_message_link_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/chat-message-link/chat-message-link.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-message-link/chat-message-link.component.ts");
/* harmony import */ var _components_chat_message_list_chat_message_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/chat-message-list/chat-message-list.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-message-list/chat-message-list.component.ts");
/* harmony import */ var _components_chat_message_text_chat_message_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/chat-message-text/chat-message-text.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-message-text/chat-message-text.component.ts");
/* harmony import */ var _components_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/chat-message/chat-message.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-message/chat-message.component.ts");
/* harmony import */ var _components_chat_room_messages_chat_room_messages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/chat-room-messages/chat-room-messages.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-room-messages/chat-room-messages.component.ts");
/* harmony import */ var _components_chat_window_list_chat_window_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/chat-window-list/chat-window-list.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-window-list/chat-window-list.component.ts");
/* harmony import */ var _components_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/chat-window/chat-window.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-window/chat-window.component.ts");
/* harmony import */ var _components_chat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/chat.component */ "./projects/proxym/ngx-chat/src/lib/components/chat.component.ts");
/* harmony import */ var _components_roster_contact_roster_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/roster-contact/roster-contact.component */ "./projects/proxym/ngx-chat/src/lib/components/roster-contact/roster-contact.component.ts");
/* harmony import */ var _components_roster_list_roster_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/roster-list/roster-list.component */ "./projects/proxym/ngx-chat/src/lib/components/roster-list/roster-list.component.ts");
/* harmony import */ var _directives_links_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/links.directive */ "./projects/proxym/ngx-chat/src/lib/directives/links.directive.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_bookmark_plugin__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/adapters/xmpp/plugins/bookmark.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/bookmark.plugin.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_http_file_upload_plugin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/adapters/xmpp/plugins/http-file-upload.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/http-file-upload.plugin.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_message_archive_plugin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/adapters/xmpp/plugins/message-archive.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message-archive.plugin.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_message_carbons_plugin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/adapters/xmpp/plugins/message-carbons.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message-carbons.plugin.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_message_state_plugin__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/adapters/xmpp/plugins/message-state.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message-state.plugin.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_message_uuid_plugin__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/adapters/xmpp/plugins/message-uuid.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message-uuid.plugin.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_message_plugin__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/adapters/xmpp/plugins/message.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message.plugin.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_muc_sub_plugin__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/adapters/xmpp/plugins/muc-sub.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/muc-sub.plugin.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_multi_user_chat_plugin__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/adapters/xmpp/plugins/multi-user-chat.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/multi-user-chat.plugin.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_ping_plugin__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/adapters/xmpp/plugins/ping.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/ping.plugin.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_publish_subscribe_plugin__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/adapters/xmpp/plugins/publish-subscribe.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/publish-subscribe.plugin.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_push_plugin__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/adapters/xmpp/plugins/push.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/push.plugin.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_registration_plugin__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/adapters/xmpp/plugins/registration.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/registration.plugin.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_roster_plugin__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/adapters/xmpp/plugins/roster.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/roster.plugin.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_service_discovery_plugin__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/adapters/xmpp/plugins/service-discovery.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/service-discovery.plugin.ts");
/* harmony import */ var _services_adapters_xmpp_plugins_unread_message_count_plugin__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/adapters/xmpp/plugins/unread-message-count.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/unread-message-count.plugin.ts");
/* harmony import */ var _services_adapters_xmpp_xmpp_chat_adapter_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/adapters/xmpp/xmpp-chat-adapter.service */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/xmpp-chat-adapter.service.ts");
/* harmony import */ var _services_adapters_xmpp_xmpp_chat_connection_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/adapters/xmpp/xmpp-chat-connection.service */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/xmpp-chat-connection.service.ts");
/* harmony import */ var _services_adapters_xmpp_xmpp_client_factory_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/adapters/xmpp/xmpp-client-factory.service */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/xmpp-client-factory.service.ts");
/* harmony import */ var _services_chat_background_notification_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/chat-background-notification.service */ "./projects/proxym/ngx-chat/src/lib/services/chat-background-notification.service.ts");
/* harmony import */ var _services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/chat-list-state.service */ "./projects/proxym/ngx-chat/src/lib/services/chat-list-state.service.ts");
/* harmony import */ var _services_chat_message_list_registry_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/chat-message-list-registry.service */ "./projects/proxym/ngx-chat/src/lib/services/chat-message-list-registry.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/chat-service */ "./projects/proxym/ngx-chat/src/lib/services/chat-service.ts");
/* harmony import */ var _services_contact_factory_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/contact-factory.service */ "./projects/proxym/ngx-chat/src/lib/services/contact-factory.service.ts");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/log.service */ "./projects/proxym/ngx-chat/src/lib/services/log.service.ts");
/* harmony import */ var _components_multi_user_chat_multi_user_chat_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/multi-user-chat/multi-user-chat.component */ "./projects/proxym/ngx-chat/src/lib/components/multi-user-chat/multi-user-chat.component.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_communication_video_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/communication/video.component */ "./projects/proxym/ngx-chat/src/lib/components/communication/video.component.ts");
/* harmony import */ var _services_socket_io_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./services/socket.io.service */ "./projects/proxym/ngx-chat/src/lib/services/socket.io.service.ts");
/* harmony import */ var _components_communication_audio_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/communication/audio.component */ "./projects/proxym/ngx-chat/src/lib/components/communication/audio.component.ts");
/* harmony import */ var _ngx_link_preview_src_lib_ngx_link_preview_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../../../ngx-link-preview/src/lib/ngx-link-preview.module */ "./projects/ngx-link-preview/src/lib/ngx-link-preview.module.ts");
/* harmony import */ var _components_chat_window_room_chat_window_room_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/chat-window-room/chat-window-room.component */ "./projects/proxym/ngx-chat/src/lib/components/chat-window-room/chat-window-room.component.ts");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @ngmodule/material-carousel */ "./node_modules/@ngmodule/material-carousel/__ivy_ngcc__/fesm5/ngmodule-material-carousel.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _proxym_ngx_chat_src_lib_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../../../../proxym/ngx-chat/src/lib/components/icons/icons.module */ "./projects/proxym/ngx-chat/src/lib/components/icons/icons.module.ts");
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ "./node_modules/@ctrl/ngx-emoji-mart/__ivy_ngcc__/fesm5/ctrl-ngx-emoji-mart.js");
/* harmony import */ var mat_video__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! mat-video */ "./node_modules/mat-video/__ivy_ngcc__/fesm5/mat-video.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/bidi.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngx_link_preview_src_lib_components_ngx_link_preview_ngx_link_preview_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../../../../ngx-link-preview/src/lib/components/ngx-link-preview/ngx-link-preview.component */ "./projects/ngx-link-preview/src/lib/components/ngx-link-preview/ngx-link-preview.component.ts");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/__ivy_ngcc__/fesm5/angular-feather.js");













































































var NgxChatModule = /** @class */ (function () {
    function NgxChatModule() {
    }
    NgxChatModule.forRoot = function () {
        return {
            ngModule: NgxChatModule,
            providers: [
                _services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_38__["ChatListStateService"],
                _services_log_service__WEBPACK_IMPORTED_MODULE_42__["LogService"],
                _services_contact_factory_service__WEBPACK_IMPORTED_MODULE_41__["ContactFactoryService"],
                _services_chat_background_notification_service__WEBPACK_IMPORTED_MODULE_37__["ChatBackgroundNotificationService"],
                _services_adapters_xmpp_xmpp_chat_connection_service__WEBPACK_IMPORTED_MODULE_35__["XmppChatConnectionService"],
                _services_adapters_xmpp_xmpp_client_factory_service__WEBPACK_IMPORTED_MODULE_36__["XmppClientFactoryService"],
                _services_socket_io_service__WEBPACK_IMPORTED_MODULE_48__["SocketIOService"],
                _components_roster_contact_roster_contact_component__WEBPACK_IMPORTED_MODULE_15__["RosterContactComponent"],
                {
                    provide: _services_chat_service__WEBPACK_IMPORTED_MODULE_40__["ChatServiceToken"],
                    deps: [_services_adapters_xmpp_xmpp_chat_connection_service__WEBPACK_IMPORTED_MODULE_35__["XmppChatConnectionService"], _services_log_service__WEBPACK_IMPORTED_MODULE_42__["LogService"], _services_contact_factory_service__WEBPACK_IMPORTED_MODULE_41__["ContactFactoryService"]],
                    useFactory: NgxChatModule.xmppChatAdapter
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"],
                    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]],
                    useFactory: NgxChatModule.initializePlugins,
                    multi: true,
                }
            ],
        };
    };
    NgxChatModule.xmppChatAdapter = function (chatConnectionService, logService, contactFactory) {
        return new _services_adapters_xmpp_xmpp_chat_adapter_service__WEBPACK_IMPORTED_MODULE_34__["XmppChatAdapter"](chatConnectionService, logService, contactFactory);
    };
    NgxChatModule.initializePlugins = function (injector) {
        // noinspection UnnecessaryLocalVariableJS
        var initializer = function () {
            var logService = injector.get(_services_log_service__WEBPACK_IMPORTED_MODULE_42__["LogService"]);
            var ngZone = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]);
            var xmppChatAdapter = injector.get(_services_chat_service__WEBPACK_IMPORTED_MODULE_40__["ChatServiceToken"]);
            var serviceDiscoveryPlugin = new _services_adapters_xmpp_plugins_service_discovery_plugin__WEBPACK_IMPORTED_MODULE_32__["ServiceDiscoveryPlugin"](xmppChatAdapter);
            var publishSubscribePlugin = new _services_adapters_xmpp_plugins_publish_subscribe_plugin__WEBPACK_IMPORTED_MODULE_28__["PublishSubscribePlugin"](xmppChatAdapter, serviceDiscoveryPlugin);
            var chatMessageListRegistryService = injector.get(_services_chat_message_list_registry_service__WEBPACK_IMPORTED_MODULE_39__["ChatMessageListRegistryService"]);
            var unreadMessageCountPlugin = new _services_adapters_xmpp_plugins_unread_message_count_plugin__WEBPACK_IMPORTED_MODULE_33__["UnreadMessageCountPlugin"](xmppChatAdapter, chatMessageListRegistryService, publishSubscribePlugin);
            xmppChatAdapter.addPlugins([
                new _services_adapters_xmpp_plugins_bookmark_plugin__WEBPACK_IMPORTED_MODULE_18__["BookmarkPlugin"](publishSubscribePlugin),
                new _services_adapters_xmpp_plugins_message_archive_plugin__WEBPACK_IMPORTED_MODULE_20__["MessageArchivePlugin"](xmppChatAdapter, serviceDiscoveryPlugin, logService),
                new _services_adapters_xmpp_plugins_message_plugin__WEBPACK_IMPORTED_MODULE_24__["MessagePlugin"](xmppChatAdapter, logService),
                new _services_adapters_xmpp_plugins_message_uuid_plugin__WEBPACK_IMPORTED_MODULE_23__["MessageUuidPlugin"](),
                new _services_adapters_xmpp_plugins_multi_user_chat_plugin__WEBPACK_IMPORTED_MODULE_26__["MultiUserChatPlugin"](xmppChatAdapter, logService, serviceDiscoveryPlugin),
                publishSubscribePlugin,
                new _services_adapters_xmpp_plugins_roster_plugin__WEBPACK_IMPORTED_MODULE_31__["RosterPlugin"](xmppChatAdapter, logService),
                serviceDiscoveryPlugin,
                new _services_adapters_xmpp_plugins_push_plugin__WEBPACK_IMPORTED_MODULE_29__["PushPlugin"](xmppChatAdapter, serviceDiscoveryPlugin),
                new _services_adapters_xmpp_plugins_ping_plugin__WEBPACK_IMPORTED_MODULE_27__["PingPlugin"](xmppChatAdapter, logService, ngZone),
                new _services_adapters_xmpp_plugins_registration_plugin__WEBPACK_IMPORTED_MODULE_30__["RegistrationPlugin"](logService, ngZone),
                new _services_adapters_xmpp_plugins_message_carbons_plugin__WEBPACK_IMPORTED_MODULE_21__["MessageCarbonsPlugin"](xmppChatAdapter),
                unreadMessageCountPlugin,
                new _services_adapters_xmpp_plugins_http_file_upload_plugin__WEBPACK_IMPORTED_MODULE_19__["HttpFileUploadPlugin"](injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), serviceDiscoveryPlugin, xmppChatAdapter, logService),
                new _services_adapters_xmpp_plugins_message_state_plugin__WEBPACK_IMPORTED_MODULE_22__["MessageStatePlugin"](publishSubscribePlugin, xmppChatAdapter, chatMessageListRegistryService, logService),
                new _services_adapters_xmpp_plugins_muc_sub_plugin__WEBPACK_IMPORTED_MODULE_25__["MucSubPlugin"](xmppChatAdapter, serviceDiscoveryPlugin),
            ]);
        };
        return initializer;
    };
    NgxChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NgxChatModule, bootstrap: [_components_roster_list_roster_list_component__WEBPACK_IMPORTED_MODULE_16__["RosterListComponent"]] });
    NgxChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function NgxChatModule_Factory(t) { return new (t || NgxChatModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_44__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_45__["MatSelectModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbModule"],
                _ngx_link_preview_src_lib_ngx_link_preview_module__WEBPACK_IMPORTED_MODULE_50__["NgxLinkPreviewModule"],
                _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_52__["MatCarouselModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_53__["BrowserAnimationsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_54__["MatCardModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_55__["BrowserModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_56__["CarouselModule"],
                _proxym_ngx_chat_src_lib_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_57__["IconsModule"],
                _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_58__["PickerModule"],
                mat_video__WEBPACK_IMPORTED_MODULE_59__["MatVideoModule"]
            ]] });
    return NgxChatModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NgxChatModule, { declarations: [_components_chat_component__WEBPACK_IMPORTED_MODULE_14__["ChatComponent"],
        _components_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_10__["ChatMessageComponent"],
        _components_chat_message_input_chat_message_input_component__WEBPACK_IMPORTED_MODULE_6__["ChatMessageInputComponent"],
        _components_chat_message_link_chat_message_link_component__WEBPACK_IMPORTED_MODULE_7__["ChatMessageLinkComponent"],
        _components_chat_message_list_chat_message_list_component__WEBPACK_IMPORTED_MODULE_8__["ChatMessageListComponent"],
        _components_chat_message_text_chat_message_text_component__WEBPACK_IMPORTED_MODULE_9__["ChatMessageTextComponent"],
        _components_chat_room_messages_chat_room_messages_component__WEBPACK_IMPORTED_MODULE_11__["ChatRoomMessagesComponent"],
        _components_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_13__["ChatWindowComponent"],
        _components_chat_window_list_chat_window_list_component__WEBPACK_IMPORTED_MODULE_12__["ChatWindowListComponent"],
        _directives_links_directive__WEBPACK_IMPORTED_MODULE_17__["LinksDirective"],
        _components_roster_contact_roster_contact_component__WEBPACK_IMPORTED_MODULE_15__["RosterContactComponent"],
        _components_roster_list_roster_list_component__WEBPACK_IMPORTED_MODULE_16__["RosterListComponent"],
        _components_chat_filedrop_file_drop_component__WEBPACK_IMPORTED_MODULE_5__["FileDropComponent"],
        _components_multi_user_chat_multi_user_chat_component__WEBPACK_IMPORTED_MODULE_43__["MultiUserChatComponent"],
        _components_communication_video_component__WEBPACK_IMPORTED_MODULE_47__["VideoComponent"],
        _components_communication_audio_component__WEBPACK_IMPORTED_MODULE_49__["AudioComponent"],
        _components_chat_window_room_chat_window_room_component__WEBPACK_IMPORTED_MODULE_51__["ChatWindowRoomComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_44__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_45__["MatSelectModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbModule"],
        _ngx_link_preview_src_lib_ngx_link_preview_module__WEBPACK_IMPORTED_MODULE_50__["NgxLinkPreviewModule"],
        _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_52__["MatCarouselModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_53__["BrowserAnimationsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_54__["MatCardModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_55__["BrowserModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_56__["CarouselModule"],
        _proxym_ngx_chat_src_lib_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_57__["IconsModule"],
        _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_58__["PickerModule"],
        mat_video__WEBPACK_IMPORTED_MODULE_59__["MatVideoModule"]], exports: [_components_chat_component__WEBPACK_IMPORTED_MODULE_14__["ChatComponent"],
        _components_chat_message_input_chat_message_input_component__WEBPACK_IMPORTED_MODULE_6__["ChatMessageInputComponent"],
        _components_chat_message_list_chat_message_list_component__WEBPACK_IMPORTED_MODULE_8__["ChatMessageListComponent"],
        _components_chat_room_messages_chat_room_messages_component__WEBPACK_IMPORTED_MODULE_11__["ChatRoomMessagesComponent"],
        _components_chat_filedrop_file_drop_component__WEBPACK_IMPORTED_MODULE_5__["FileDropComponent"],
        _directives_links_directive__WEBPACK_IMPORTED_MODULE_17__["LinksDirective"],
        _components_roster_list_roster_list_component__WEBPACK_IMPORTED_MODULE_16__["RosterListComponent"],
        _components_communication_video_component__WEBPACK_IMPORTED_MODULE_47__["VideoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NgxChatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_44__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_45__["MatSelectModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbModule"],
                    _ngx_link_preview_src_lib_ngx_link_preview_module__WEBPACK_IMPORTED_MODULE_50__["NgxLinkPreviewModule"],
                    _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_52__["MatCarouselModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_53__["BrowserAnimationsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_54__["MatCardModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_55__["BrowserModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_56__["CarouselModule"],
                    _proxym_ngx_chat_src_lib_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_57__["IconsModule"],
                    _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_58__["PickerModule"],
                    mat_video__WEBPACK_IMPORTED_MODULE_59__["MatVideoModule"]
                ],
                declarations: [
                    _components_chat_component__WEBPACK_IMPORTED_MODULE_14__["ChatComponent"],
                    _components_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_10__["ChatMessageComponent"],
                    _components_chat_message_input_chat_message_input_component__WEBPACK_IMPORTED_MODULE_6__["ChatMessageInputComponent"],
                    _components_chat_message_link_chat_message_link_component__WEBPACK_IMPORTED_MODULE_7__["ChatMessageLinkComponent"],
                    _components_chat_message_list_chat_message_list_component__WEBPACK_IMPORTED_MODULE_8__["ChatMessageListComponent"],
                    _components_chat_message_text_chat_message_text_component__WEBPACK_IMPORTED_MODULE_9__["ChatMessageTextComponent"],
                    _components_chat_room_messages_chat_room_messages_component__WEBPACK_IMPORTED_MODULE_11__["ChatRoomMessagesComponent"],
                    _components_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_13__["ChatWindowComponent"],
                    _components_chat_window_list_chat_window_list_component__WEBPACK_IMPORTED_MODULE_12__["ChatWindowListComponent"],
                    _directives_links_directive__WEBPACK_IMPORTED_MODULE_17__["LinksDirective"],
                    _components_roster_contact_roster_contact_component__WEBPACK_IMPORTED_MODULE_15__["RosterContactComponent"],
                    _components_roster_list_roster_list_component__WEBPACK_IMPORTED_MODULE_16__["RosterListComponent"],
                    _components_chat_filedrop_file_drop_component__WEBPACK_IMPORTED_MODULE_5__["FileDropComponent"],
                    _components_multi_user_chat_multi_user_chat_component__WEBPACK_IMPORTED_MODULE_43__["MultiUserChatComponent"],
                    _components_communication_video_component__WEBPACK_IMPORTED_MODULE_47__["VideoComponent"],
                    _components_communication_audio_component__WEBPACK_IMPORTED_MODULE_49__["AudioComponent"],
                    _components_chat_window_room_chat_window_room_component__WEBPACK_IMPORTED_MODULE_51__["ChatWindowRoomComponent"],
                ],
                exports: [
                    _components_chat_component__WEBPACK_IMPORTED_MODULE_14__["ChatComponent"],
                    _components_chat_message_input_chat_message_input_component__WEBPACK_IMPORTED_MODULE_6__["ChatMessageInputComponent"],
                    _components_chat_message_list_chat_message_list_component__WEBPACK_IMPORTED_MODULE_8__["ChatMessageListComponent"],
                    _components_chat_room_messages_chat_room_messages_component__WEBPACK_IMPORTED_MODULE_11__["ChatRoomMessagesComponent"],
                    _components_chat_filedrop_file_drop_component__WEBPACK_IMPORTED_MODULE_5__["FileDropComponent"],
                    _directives_links_directive__WEBPACK_IMPORTED_MODULE_17__["LinksDirective"],
                    _components_roster_list_roster_list_component__WEBPACK_IMPORTED_MODULE_16__["RosterListComponent"],
                    _components_communication_video_component__WEBPACK_IMPORTED_MODULE_47__["VideoComponent"],
                ],
                entryComponents: [
                    _components_chat_message_link_chat_message_link_component__WEBPACK_IMPORTED_MODULE_7__["ChatMessageLinkComponent"],
                    _components_chat_message_text_chat_message_text_component__WEBPACK_IMPORTED_MODULE_9__["ChatMessageTextComponent"],
                ],
                bootstrap: [_components_roster_list_roster_list_component__WEBPACK_IMPORTED_MODULE_16__["RosterListComponent"]],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetComponentScope"](_components_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_13__["ChatWindowComponent"], [_components_chat_component__WEBPACK_IMPORTED_MODULE_14__["ChatComponent"],
    _components_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_10__["ChatMessageComponent"],
    _components_chat_message_input_chat_message_input_component__WEBPACK_IMPORTED_MODULE_6__["ChatMessageInputComponent"],
    _components_chat_message_link_chat_message_link_component__WEBPACK_IMPORTED_MODULE_7__["ChatMessageLinkComponent"],
    _components_chat_message_list_chat_message_list_component__WEBPACK_IMPORTED_MODULE_8__["ChatMessageListComponent"],
    _components_chat_message_text_chat_message_text_component__WEBPACK_IMPORTED_MODULE_9__["ChatMessageTextComponent"],
    _components_chat_room_messages_chat_room_messages_component__WEBPACK_IMPORTED_MODULE_11__["ChatRoomMessagesComponent"],
    _components_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_13__["ChatWindowComponent"],
    _components_chat_window_list_chat_window_list_component__WEBPACK_IMPORTED_MODULE_12__["ChatWindowListComponent"],
    _directives_links_directive__WEBPACK_IMPORTED_MODULE_17__["LinksDirective"],
    _components_roster_contact_roster_contact_component__WEBPACK_IMPORTED_MODULE_15__["RosterContactComponent"],
    _components_roster_list_roster_list_component__WEBPACK_IMPORTED_MODULE_16__["RosterListComponent"],
    _components_chat_filedrop_file_drop_component__WEBPACK_IMPORTED_MODULE_5__["FileDropComponent"],
    _components_multi_user_chat_multi_user_chat_component__WEBPACK_IMPORTED_MODULE_43__["MultiUserChatComponent"],
    _components_communication_video_component__WEBPACK_IMPORTED_MODULE_47__["VideoComponent"],
    _components_communication_audio_component__WEBPACK_IMPORTED_MODULE_49__["AudioComponent"],
    _components_chat_window_room_chat_window_room_component__WEBPACK_IMPORTED_MODULE_51__["ChatWindowRoomComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPluralCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["CdkTextareaAutosize"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_44__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_44__["MatRadioButton"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_60__["Dir"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_61__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_61__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_61__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_61__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_61__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_61__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_61__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_45__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_45__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_62__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_62__["MatOptgroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbPanelTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbPanelContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbPanelHeader"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbPanelToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbAlert"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbButtonLabel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbCheckBox"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbRadio"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbSlide"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbCollapse"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbDatepickerContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbInputDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbDatepickerMonth"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbDropdownAnchor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbDropdownItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbNavOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbPagination"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbPaginationEllipsis"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbPaginationFirst"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbPaginationLast"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbPaginationNext"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbPaginationNumber"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbPaginationPrevious"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbPopover"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbProgressbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbRating"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbTimepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbToast"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbToastHeader"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbTypeahead"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbHighlight"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbTabContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbTabTitle"], _ngx_link_preview_src_lib_components_ngx_link_preview_ngx_link_preview_component__WEBPACK_IMPORTED_MODULE_63__["NgxLinkPreviewComponent"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_52__["MatCarouselComponent"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_52__["MatCarouselSlideComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_54__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_54__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_54__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_54__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_54__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_54__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_54__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_54__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_54__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_54__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_54__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_54__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_54__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_54__["MatCardAvatar"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_56__["SlideComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_56__["CarouselComponent"], angular_feather__WEBPACK_IMPORTED_MODULE_64__["FeatherComponent"], _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_58__["PickerComponent"], _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_58__["AnchorsComponent"], _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_58__["CategoryComponent"], _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_58__["SearchComponent"], _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_58__["PreviewComponent"], _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_58__["SkinComponent"], mat_video__WEBPACK_IMPORTED_MODULE_59__["ɵb"], mat_video__WEBPACK_IMPORTED_MODULE_59__["ɵn"], mat_video__WEBPACK_IMPORTED_MODULE_59__["ɵo"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]]);


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/abstract-stanza-builder.ts":
/*!********************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/abstract-stanza-builder.ts ***!
  \********************************************************************************************/
/*! exports provided: AbstractStanzaBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractStanzaBuilder", function() { return AbstractStanzaBuilder; });
var AbstractStanzaBuilder = /** @class */ (function () {
    function AbstractStanzaBuilder() {
    }
    return AbstractStanzaBuilder;
}());



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/abstract-xmpp-plugin.ts":
/*!*************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/abstract-xmpp-plugin.ts ***!
  \*************************************************************************************************/
/*! exports provided: AbstractXmppPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractXmppPlugin", function() { return AbstractXmppPlugin; });
var AbstractXmppPlugin = /** @class */ (function () {
    function AbstractXmppPlugin() {
    }
    AbstractXmppPlugin.prototype.onBeforeOnline = function () {
        return Promise.resolve();
    };
    AbstractXmppPlugin.prototype.onOffline = function () {
    };
    AbstractXmppPlugin.prototype.afterSendMessage = function (message, messageStanza) {
        return;
    };
    AbstractXmppPlugin.prototype.beforeSendMessage = function (messageStanza, message) {
        return;
    };
    AbstractXmppPlugin.prototype.handleStanza = function (stanza) {
        return false;
    };
    AbstractXmppPlugin.prototype.afterReceiveMessage = function (message, messageStanza, messageReceivedEvent) {
        return;
    };
    return AbstractXmppPlugin;
}());



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/bookmark.plugin.ts":
/*!********************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/bookmark.plugin.ts ***!
  \********************************************************************************************/
/*! exports provided: STORAGE_BOOKMARKS, BookmarkPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_BOOKMARKS", function() { return STORAGE_BOOKMARKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkPlugin", function() { return BookmarkPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_utils_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/utils-array */ "./projects/proxym/ngx-chat/src/lib/core/utils-array.ts");
/* harmony import */ var _abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract-xmpp-plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/abstract-xmpp-plugin.ts");




var STORAGE_BOOKMARKS = 'storage:bookmarks';
/**
 * XEP-0048
 */
var BookmarkPlugin = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BookmarkPlugin, _super);
    function BookmarkPlugin(publishSubscribePlugin) {
        var _this = _super.call(this) || this;
        _this.publishSubscribePlugin = publishSubscribePlugin;
        return _this;
    }
    BookmarkPlugin.prototype.onOffline = function () {
        this.pendingAddConference = null;
    };
    BookmarkPlugin.prototype.retrieveMultiUserChatRooms = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var itemNode, storageNode, conferenceNodes;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.publishSubscribePlugin.retrieveNodeItems(STORAGE_BOOKMARKS)];
                    case 1:
                        itemNode = _a.sent();
                        storageNode = itemNode && itemNode[0] && itemNode[0].getChild('storage', STORAGE_BOOKMARKS);
                        conferenceNodes = itemNode && storageNode.getChildren('conference');
                        if (!conferenceNodes) {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/, conferenceNodes.map(function (c) { return _this.convertElementToSavedConference(c); })];
                }
            });
        });
    };
    BookmarkPlugin.prototype.convertElementToSavedConference = function (conferenceNode) {
        return {
            name: conferenceNode.attrs.name,
            jid: conferenceNode.attrs.jid,
            autojoin: conferenceNode.attrs.autojoin === 'true',
        };
    };
    BookmarkPlugin.prototype.saveConferences = function (conferences) {
        var _this = this;
        var deduplicatedConferences = Object(_core_utils_array__WEBPACK_IMPORTED_MODULE_2__["removeDuplicates"])(conferences, function (x, y) { return x.jid === y.jid; });
        return this.publishSubscribePlugin.storePrivatePayloadPersistent(STORAGE_BOOKMARKS, null, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('storage', { xmlns: STORAGE_BOOKMARKS }, deduplicatedConferences.map(function (c) { return _this.convertSavedConferenceToElement(c); })));
    };
    BookmarkPlugin.prototype.addConference = function (conferenceToSave) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.pendingAddConference) return [3 /*break*/, 5];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.pendingAddConference];
                    case 2:
                        _b.sent(); // serialize the writes, so that in case of multiple conference adds all get added
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 0];
                    case 5: return [2 /*return*/, this.pendingAddConference = new Promise(function (resolve, reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var savedConferences, conferences, response;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieveMultiUserChatRooms()];
                                    case 1:
                                        savedConferences = _a.sent();
                                        conferences = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(savedConferences, [conferenceToSave]);
                                        _a.label = 2;
                                    case 2:
                                        _a.trys.push([2, , 4, 5]);
                                        return [4 /*yield*/, this.saveConferences(conferences)];
                                    case 3:
                                        response = _a.sent();
                                        return [3 /*break*/, 5];
                                    case 4:
                                        this.pendingAddConference = null;
                                        return [7 /*endfinally*/];
                                    case 5:
                                        if (response) {
                                            resolve(response);
                                        }
                                        else {
                                            reject();
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                }
            });
        });
    };
    BookmarkPlugin.prototype.convertSavedConferenceToElement = function (savedConference) {
        var name = savedConference.name, autojoin = savedConference.autojoin, jid = savedConference.jid;
        return Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('conference', { name: name, jid: jid, autojoin: autojoin.toString() });
    };
    return BookmarkPlugin;
}(_abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_3__["AbstractXmppPlugin"]));



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/http-file-upload.plugin.ts":
/*!****************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/http-file-upload.plugin.ts ***!
  \****************************************************************************************************/
/*! exports provided: HttpFileUploadPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpFileUploadPlugin", function() { return HttpFileUploadPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-xmpp-plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/abstract-xmpp-plugin.ts");



/**
 * XEP-0363 http file upload
 */
var HttpFileUploadPlugin = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpFileUploadPlugin, _super);
    function HttpFileUploadPlugin(httpClient, serviceDiscoveryPlugin, xmppChatAdapter, logService) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.serviceDiscoveryPlugin = serviceDiscoveryPlugin;
        _this.xmppChatAdapter = xmppChatAdapter;
        _this.logService = logService;
        return _this;
    }
    HttpFileUploadPlugin.prototype.onBeforeOnline = function () {
        var _this = this;
        this.uploadService = this.serviceDiscoveryPlugin.findService('store', 'file');
        this.uploadService.then(function () {
            _this.fileUploadSupported = true;
        }, function () {
            _this.fileUploadSupported = false;
            _this.logService.info('http file upload not supported');
        });
        return Promise.resolve();
    };
    HttpFileUploadPlugin.prototype.onOffline = function () {
        this.uploadService = null;
        this.fileUploadSupported = false;
    };
    HttpFileUploadPlugin.prototype.upload = function (file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var name, size, type, slotUrl;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uploadService];
                    case 1:
                        _a.sent();
                        name = file.name, size = file.size, type = file.type;
                        return [4 /*yield*/, this.requestSlot(name, size.toString(), type)];
                    case 2:
                        slotUrl = _a.sent();
                        slotUrl = 'https' + slotUrl.toString().substring(4);
                        console.log('slotyy', slotUrl.toString().substring(4));
                        return [2 /*return*/, this.uploadToSlot(slotUrl, file)];
                }
            });
        });
    };
    HttpFileUploadPlugin.prototype.requestSlot = function (filename, size, contentType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var to, slotResponse;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uploadService];
                    case 1:
                        to = (_a.sent()).jid;
                        return [4 /*yield*/, this.xmppChatAdapter.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { to: to, type: 'get' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('request', { xmlns: 'urn:xmpp:http:upload:0', filename: filename, size: size, 'content-type': contentType })))];
                    case 2:
                        slotResponse = _a.sent();
                        return [2 /*return*/, slotResponse.getChild('slot').getChild('put').attrs.url];
                }
            });
        });
    };
    HttpFileUploadPlugin.prototype.uploadToSlot = function (slot, file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.put(slot, file, { responseType: 'blob' }).toPromise()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, slot];
                }
            });
        });
    };
    return HttpFileUploadPlugin;
}(_abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_2__["AbstractXmppPlugin"]));



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message-archive.plugin.ts":
/*!***************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message-archive.plugin.ts ***!
  \***************************************************************************************************/
/*! exports provided: MessageArchivePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageArchivePlugin", function() { return MessageArchivePlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/message */ "./projects/proxym/ngx-chat/src/lib/core/message.ts");
/* harmony import */ var _abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abstract-xmpp-plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/abstract-xmpp-plugin.ts");
/* harmony import */ var _message_uuid_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message-uuid.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message-uuid.plugin.ts");






/**
 * https://xmpp.org/extensions/xep-0313.html
 * Message Archive Management
 */
var MessageArchivePlugin = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MessageArchivePlugin, _super);
    function MessageArchivePlugin(chatService, serviceDiscoveryPlugin, logService) {
        var _this = _super.call(this) || this;
        _this.chatService = chatService;
        _this.serviceDiscoveryPlugin = serviceDiscoveryPlugin;
        _this.logService = logService;
        _this.chatService.state$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (state) { return state === 'online'; }))
            .subscribe(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.supportsMessageArchiveManagement()];
                    case 1:
                        if (_a.sent()) {
                            this.requestNewestMessages();
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        return _this;
    }
    MessageArchivePlugin.prototype.requestNewestMessages = function () {
        this.chatService.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'set', to: this.chatService.chatConnectionService.userJid.bare().toString() }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('query', { xmlns: 'urn:xmpp:mam:2' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('set', { xmlns: 'http://jabber.org/protocol/rsm' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('max', {}, 250), Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('before')))));
    };
    MessageArchivePlugin.prototype.loadAllMessages = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var lastMamResponse, lastReceivedMessageId;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.supportsMessageArchiveManagement()];
                    case 1:
                        if (!(_a.sent())) {
                            throw new Error('message archive management not suppported');
                        }
                        return [4 /*yield*/, this.chatService.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'set' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('query', { xmlns: 'urn:xmpp:mam:2' })))];
                    case 2:
                        lastMamResponse = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!(lastMamResponse.getChild('fin').attrs.complete !== 'true')) return [3 /*break*/, 5];
                        lastReceivedMessageId = lastMamResponse.getChild('fin').getChild('set').getChildText('last');
                        return [4 /*yield*/, this.chatService.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'set' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('query', { xmlns: 'urn:xmpp:mam:2' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('set', { xmlns: 'http://jabber.org/protocol/rsm' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('max', {}, 250), Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('after', {}, lastReceivedMessageId)))))];
                    case 4:
                        lastMamResponse = _a.sent();
                        return [3 /*break*/, 3];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MessageArchivePlugin.prototype.supportsMessageArchiveManagement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var supportsMessageArchiveManagement;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.serviceDiscoveryPlugin.supportsFeature(this.chatService.chatConnectionService.userJid.bare().toString(), 'urn:xmpp:mam:2')];
                    case 1:
                        supportsMessageArchiveManagement = _a.sent();
                        if (!supportsMessageArchiveManagement) {
                            this.logService.info('server doesnt support MAM');
                        }
                        return [2 /*return*/, supportsMessageArchiveManagement];
                }
            });
        });
    };
    MessageArchivePlugin.prototype.handleStanza = function (stanza) {
        if (this.isMamMessageStanza(stanza)) {
            this.handleMamMessageStanza(stanza);
            return true;
        }
        return false;
    };
    MessageArchivePlugin.prototype.isMamMessageStanza = function (stanza) {
        var result = stanza.getChild('result');
        return stanza.name === 'message' && result && result.attrs.xmlns === 'urn:xmpp:mam:2';
    };
    MessageArchivePlugin.prototype.handleMamMessageStanza = function (stanza) {
        var messageElement = stanza.getChild('result').getChild('forwarded').getChild('message');
        var isAddressedToMe = this.chatService.chatConnectionService.userJid.bare()
            .equals(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["jid"])(messageElement.attrs.to).bare());
        var messageBody = messageElement.getChildText('body');
        if (messageBody && messageBody.trim()) {
            var contactJid = isAddressedToMe ? messageElement.attrs.from : messageElement.attrs.to;
            var contact = this.chatService.getOrCreateContactById(contactJid);
            var datetime = new Date(stanza.getChild('result').getChild('forwarded').getChild('delay').attrs.stamp);
            var direction = isAddressedToMe ? _core_message__WEBPACK_IMPORTED_MODULE_3__["Direction"].in : _core_message__WEBPACK_IMPORTED_MODULE_3__["Direction"].out;
            contact.addMessage({
                direction: direction,
                datetime: datetime,
                body: messageBody,
                id: _message_uuid_plugin__WEBPACK_IMPORTED_MODULE_5__["MessageUuidPlugin"].extractIdFromStanza(messageElement),
                delayed: true,
            });
        }
    };
    return MessageArchivePlugin;
}(_abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_4__["AbstractXmppPlugin"]));



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message-carbons.plugin.ts":
/*!***************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message-carbons.plugin.ts ***!
  \***************************************************************************************************/
/*! exports provided: MessageCarbonsPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageCarbonsPlugin", function() { return MessageCarbonsPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/message */ "./projects/proxym/ngx-chat/src/lib/core/message.ts");
/* harmony import */ var _abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract-xmpp-plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/abstract-xmpp-plugin.ts");
/* harmony import */ var _message_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message.plugin.ts");





/**
 * XEP-0280 Message Carbons
 */
var MessageCarbonsPlugin = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MessageCarbonsPlugin, _super);
    function MessageCarbonsPlugin(xmppChatAdapter) {
        var _this = _super.call(this) || this;
        _this.xmppChatAdapter = xmppChatAdapter;
        return _this;
    }
    MessageCarbonsPlugin.prototype.onBeforeOnline = function () {
        return this.xmppChatAdapter.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'set' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('enable', { xmlns: 'urn:xmpp:carbons:2' })));
    };
    MessageCarbonsPlugin.prototype.handleStanza = function (stanza) {
        var receivedOrSentElement = stanza.getChildByAttr('xmlns', 'urn:xmpp:carbons:2');
        var forwarded = receivedOrSentElement && receivedOrSentElement.getChild('forwarded', 'urn:xmpp:forward:0');
        var messageElement = forwarded && forwarded.getChild('message', 'jabber:client');
        var carbonFrom = stanza.attrs.from;
        var userJid = this.xmppChatAdapter.chatConnectionService.userJid;
        if (stanza.is('message') && receivedOrSentElement && forwarded && messageElement && userJid
            && userJid.bare().toString() === carbonFrom) {
            return this.handleCarbonMessageStanza(messageElement, receivedOrSentElement);
        }
        return false;
    };
    MessageCarbonsPlugin.prototype.handleCarbonMessageStanza = function (messageElement, receivedOrSent) {
        var direction = receivedOrSent.is('received') ? _core_message__WEBPACK_IMPORTED_MODULE_2__["Direction"].in : _core_message__WEBPACK_IMPORTED_MODULE_2__["Direction"].out;
        var message = {
            body: messageElement.getChildText('body'),
            direction: direction,
            datetime: new Date(),
            delayed: false,
        };
        var messageReceivedEvent = new _message_plugin__WEBPACK_IMPORTED_MODULE_4__["MessageReceivedEvent"]();
        this.xmppChatAdapter.plugins.forEach(function (plugin) { return plugin.afterReceiveMessage(message, messageElement, messageReceivedEvent); });
        if (!messageReceivedEvent.discard) {
            var _a = messageElement.attrs, from = _a.from, to = _a.to;
            var contactJid = direction === _core_message__WEBPACK_IMPORTED_MODULE_2__["Direction"].in ? from : to;
            var contact = this.xmppChatAdapter.getOrCreateContactById(contactJid);
            contact.addMessage(message);
            if (direction === _core_message__WEBPACK_IMPORTED_MODULE_2__["Direction"].in) {
                this.xmppChatAdapter.message$.next(contact);
            }
        }
        return true;
    };
    return MessageCarbonsPlugin;
}(_abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_3__["AbstractXmppPlugin"]));



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message-state.plugin.ts":
/*!*************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message-state.plugin.ts ***!
  \*************************************************************************************************/
/*! exports provided: MessageStatePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageStatePlugin", function() { return MessageStatePlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/message */ "./projects/proxym/ngx-chat/src/lib/core/message.ts");
/* harmony import */ var _abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abstract-xmpp-plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/abstract-xmpp-plugin.ts");
/* harmony import */ var _message_uuid_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message-uuid.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message-uuid.plugin.ts");






var NGX_CHAT_MESSAGESENT = 'ngxchat:messagesent';
var STORAGE_NGX_CHAT_CONTACT_MESSAGE_STATES = 'ngxchat:contactmessagestates';
var wrapperNodeName = 'entries';
var nodeName = 'contact-message-state';
/**
 * Plugin using PubSub to persist message read states.
 */
var MessageStatePlugin = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MessageStatePlugin, _super);
    function MessageStatePlugin(publishSubscribePlugin, xmppChatAdapter, chatMessageListRegistry, logService) {
        var _this = _super.call(this) || this;
        _this.publishSubscribePlugin = publishSubscribePlugin;
        _this.xmppChatAdapter = xmppChatAdapter;
        _this.chatMessageListRegistry = chatMessageListRegistry;
        _this.logService = logService;
        _this.jidToMessageStateDate = {};
        _this.chatMessageListRegistry.openChats$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function () { return xmppChatAdapter.state$.getValue() === 'online'; }))
            .subscribe(function (contacts) {
            contacts.forEach(function (contact) {
                if (contact.mostRecentMessageReceived) {
                    _this.sendMessageStateNotification(contact.jidBare, contact.mostRecentMessageReceived.id, _core_message__WEBPACK_IMPORTED_MODULE_3__["MessageState"].RECIPIENT_SEEN);
                }
            });
        });
        _this.publishSubscribePlugin.publish$
            .subscribe(function (event) { return _this.handlePubSubEvent(event); });
        return _this;
    }
    MessageStatePlugin.prototype.onBeforeOnline = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.parseContactMessageStates().catch(function (err) { return _this.logService.error('error parsing contact message states', err); });
                return [2 /*return*/];
            });
        });
    };
    MessageStatePlugin.prototype.parseContactMessageStates = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var itemElement;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.publishSubscribePlugin.retrieveNodeItems(STORAGE_NGX_CHAT_CONTACT_MESSAGE_STATES)];
                    case 1:
                        itemElement = _a.sent();
                        this.processPubSub(itemElement);
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageStatePlugin.prototype.processPubSub = function (itemElement) {
        var e_1, _a;
        var results = {};
        if (itemElement.length === 1) {
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(itemElement[0].getChild(wrapperNodeName).getChildren(nodeName)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var lastReadEntry = _c.value;
                    var _d = lastReadEntry.attrs, lastRecipientReceived = _d.lastRecipientReceived, lastRecipientSeen = _d.lastRecipientSeen, lastSent = _d.lastSent, jid = _d.jid;
                    results[jid] = {
                        lastRecipientSeen: new Date(+lastRecipientSeen || 0),
                        lastRecipientReceived: new Date(+lastRecipientReceived || 0),
                        lastSent: new Date(+lastSent || 0),
                    };
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        this.jidToMessageStateDate = results;
    };
    MessageStatePlugin.prototype.persistContactMessageStates = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var wrapperNode, jid, stateDates;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wrapperNode = Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])(wrapperNodeName);
                        for (jid in this.jidToMessageStateDate) {
                            if (this.jidToMessageStateDate.hasOwnProperty(jid)) {
                                stateDates = this.jidToMessageStateDate[jid];
                                wrapperNode.c(nodeName, {
                                    jid: jid,
                                    lastRecipientReceived: stateDates.lastRecipientReceived && stateDates.lastRecipientReceived.getTime(),
                                    lastRecipientSeen: stateDates.lastRecipientSeen && stateDates.lastRecipientSeen.getTime(),
                                    lastSent: stateDates.lastSent && stateDates.lastSent.getTime(),
                                });
                            }
                        }
                        return [4 /*yield*/, this.publishSubscribePlugin.storePrivatePayloadPersistent(STORAGE_NGX_CHAT_CONTACT_MESSAGE_STATES, 'current', wrapperNode)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageStatePlugin.prototype.onOffline = function () {
        this.jidToMessageStateDate = {};
    };
    MessageStatePlugin.prototype.beforeSendMessage = function (messageStanza, message) {
        var type = messageStanza.attrs.type;
        if (type === 'chat' && message) {
            message.state = _core_message__WEBPACK_IMPORTED_MODULE_3__["MessageState"].SENDING;
        }
    };
    MessageStatePlugin.prototype.afterSendMessage = function (message, messageStanza) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, type, to;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = messageStanza.attrs, type = _a.type, to = _a.to;
                        if (!(type === 'chat')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.publishSubscribePlugin.privateNotify(NGX_CHAT_MESSAGESENT)];
                    case 1:
                        _b.sent();
                        this.updateContactMessageState(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["jid"])(to).bare().toString(), _core_message__WEBPACK_IMPORTED_MODULE_3__["MessageState"].SENT, new Date());
                        delete message.state;
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MessageStatePlugin.prototype.afterReceiveMessage = function (messageReceived, stanza, messageReceivedEvent) {
        var messageStateElement = stanza.getChild('message-state', STORAGE_NGX_CHAT_CONTACT_MESSAGE_STATES);
        if (messageStateElement) {
            // we received a message state or a message via carbon from another resource, discard it
            messageReceivedEvent.discard = true;
        }
        else if (messageReceived.direction === _core_message__WEBPACK_IMPORTED_MODULE_3__["Direction"].in && stanza.attrs.type !== 'groupchat') {
            this.acknowledgeReceivedMessage(stanza);
        }
    };
    MessageStatePlugin.prototype.acknowledgeReceivedMessage = function (stanza) {
        var from = stanza.attrs.from;
        var isChatWithContactOpen = this.chatMessageListRegistry.isChatOpen(this.xmppChatAdapter.getOrCreateContactById(from));
        var state = isChatWithContactOpen ? _core_message__WEBPACK_IMPORTED_MODULE_3__["MessageState"].RECIPIENT_SEEN : _core_message__WEBPACK_IMPORTED_MODULE_3__["MessageState"].RECIPIENT_RECEIVED;
        var messageId = _message_uuid_plugin__WEBPACK_IMPORTED_MODULE_5__["MessageUuidPlugin"].extractIdFromStanza(stanza);
        this.sendMessageStateNotification(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["jid"])(from), messageId, state);
    };
    MessageStatePlugin.prototype.sendMessageStateNotification = function (recipient, messageId, state) {
        var messageStateResponse = Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('message', {
            to: recipient.bare().toString(),
            from: this.xmppChatAdapter.chatConnectionService.userJid.toString(),
            type: 'chat'
        }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('message-state', {
            xmlns: STORAGE_NGX_CHAT_CONTACT_MESSAGE_STATES,
            messageId: messageId,
            date: new Date().toISOString(),
            state: state
        }));
        this.xmppChatAdapter.chatConnectionService.send(messageStateResponse);
    };
    MessageStatePlugin.prototype.handleStanza = function (stanza) {
        var _a = stanza.attrs, type = _a.type, from = _a.from;
        var stateElement = stanza.getChild('message-state', STORAGE_NGX_CHAT_CONTACT_MESSAGE_STATES);
        if (type === 'chat' && stateElement) {
            this.handleStateNotificationStanza(stateElement, from);
            return true;
        }
    };
    MessageStatePlugin.prototype.handleStateNotificationStanza = function (stateElement, from) {
        var _a = stateElement.attrs, state = _a.state, date = _a.date;
        var contact = this.xmppChatAdapter.getOrCreateContactById(from);
        var stateDate = new Date(date);
        this.updateContactMessageState(contact.jidBare.toString(), state, stateDate);
    };
    MessageStatePlugin.prototype.updateContactMessageState = function (contactJid, state, stateDate) {
        var _this = this;
        var current = this.getContactMessageState(contactJid);
        var changed = false;
        if (state === _core_message__WEBPACK_IMPORTED_MODULE_3__["MessageState"].RECIPIENT_RECEIVED && current.lastRecipientReceived < stateDate) {
            current.lastRecipientReceived = stateDate;
            changed = true;
        }
        else if (state === _core_message__WEBPACK_IMPORTED_MODULE_3__["MessageState"].RECIPIENT_SEEN && current.lastRecipientSeen < stateDate) {
            current.lastRecipientReceived = stateDate;
            current.lastRecipientSeen = stateDate;
            changed = true;
        }
        else if (state === _core_message__WEBPACK_IMPORTED_MODULE_3__["MessageState"].SENT && current.lastSent < stateDate) {
            current.lastSent = stateDate;
            changed = true;
        }
        if (changed) {
            this.persistContactMessageStates().catch(function (err) { return _this.logService.error('error persisting contact message states', err); });
        }
    };
    MessageStatePlugin.prototype.getContactMessageState = function (contactJid) {
        if (!this.jidToMessageStateDate[contactJid]) {
            this.jidToMessageStateDate[contactJid] = {
                lastRecipientReceived: null,
                lastRecipientSeen: null,
                lastSent: null,
            };
        }
        return this.jidToMessageStateDate[contactJid];
    };
    MessageStatePlugin.prototype.handlePubSubEvent = function (event) {
        var items = event.getChild('items');
        var itemsNode = items && items.attrs.node;
        var item = items && items.getChildren('item');
        if (itemsNode === STORAGE_NGX_CHAT_CONTACT_MESSAGE_STATES && item) {
            this.processPubSub(item);
        }
    };
    return MessageStatePlugin;
}(_abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_4__["AbstractXmppPlugin"]));



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message-uuid.plugin.ts":
/*!************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message-uuid.plugin.ts ***!
  \************************************************************************************************/
/*! exports provided: MessageUuidPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageUuidPlugin", function() { return MessageUuidPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_id_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/id-generator */ "./projects/proxym/ngx-chat/src/lib/core/id-generator.ts");
/* harmony import */ var _abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract-xmpp-plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/abstract-xmpp-plugin.ts");




/**
 * https://xmpp.org/extensions/xep-0359.html
 */
var MessageUuidPlugin = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MessageUuidPlugin, _super);
    function MessageUuidPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageUuidPlugin.extractIdFromStanza = function (messageStanza) {
        var originIdElement = messageStanza.getChild('origin-id');
        var stanzaIdElement = messageStanza.getChild('stanza-id');
        return messageStanza.attrs.id || (originIdElement && originIdElement.attrs.id) || (stanzaIdElement && stanzaIdElement.attrs.id);
    };
    MessageUuidPlugin.prototype.beforeSendMessage = function (messageStanza, message) {
        var generatedId = Object(_core_id_generator__WEBPACK_IMPORTED_MODULE_2__["id"])();
        messageStanza.children.push(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('origin-id', { xmlns: 'urn:xmpp:sid:0', id: generatedId }));
        if (message) {
            message.id = generatedId;
        }
    };
    MessageUuidPlugin.prototype.afterSendMessage = function (message, messageStanza) {
        message.id = MessageUuidPlugin.extractIdFromStanza(messageStanza);
    };
    MessageUuidPlugin.prototype.afterReceiveMessage = function (message, messageStanza) {
        message.id = MessageUuidPlugin.extractIdFromStanza(messageStanza);
    };
    return MessageUuidPlugin;
}(_abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_3__["AbstractXmppPlugin"]));



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message.plugin.ts":
/*!*******************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message.plugin.ts ***!
  \*******************************************************************************************/
/*! exports provided: MessageReceivedEvent, MessagePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageReceivedEvent", function() { return MessageReceivedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePlugin", function() { return MessagePlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/message */ "./projects/proxym/ngx-chat/src/lib/core/message.ts");
/* harmony import */ var _abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract-xmpp-plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/abstract-xmpp-plugin.ts");




var MessageReceivedEvent = /** @class */ (function () {
    function MessageReceivedEvent() {
        this.discard = false;
    }
    return MessageReceivedEvent;
}());

var MessagePlugin = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MessagePlugin, _super);
    function MessagePlugin(xmppChatAdapter, logService) {
        var _this = _super.call(this) || this;
        _this.xmppChatAdapter = xmppChatAdapter;
        _this.logService = logService;
        return _this;
    }
    MessagePlugin.prototype.handleStanza = function (stanza) {
        if (this.isMessageStanza(stanza)) {
            this.handleMessageStanza(stanza);
            return true;
        }
        return false;
    };
    MessagePlugin.prototype.isMessageStanza = function (stanza) {
        return stanza.name === 'message'
            && stanza.attrs.type !== 'groupchat'
            && stanza.attrs.type !== 'error'
            && !!stanza.getChildText('body');
    };
    MessagePlugin.prototype.handleMessageStanza = function (messageStanza) {
        this.logService.debug('message received <=', messageStanza.getChildText('body'));
        var message = {
            body: messageStanza.getChildText('body'),
            direction: _core_message__WEBPACK_IMPORTED_MODULE_2__["Direction"].in,
            datetime: new Date(),
            delayed: !!messageStanza.getChild('delay')
        };
        var messageReceivedEvent = new MessageReceivedEvent();
        this.xmppChatAdapter.plugins.forEach(function (plugin) { return plugin.afterReceiveMessage(message, messageStanza, messageReceivedEvent); });
        if (!messageReceivedEvent.discard) {
            var contact = this.xmppChatAdapter.getOrCreateContactById(messageStanza.attrs.from);
            contact.addMessage(message);
            this.xmppChatAdapter.message$.next(contact);
        }
    };
    MessagePlugin.prototype.sendMessage = function (jid, body) {
        var _this = this;
        var messageStanza = Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('message', { to: jid, from: this.xmppChatAdapter.chatConnectionService.userJid.toString(), type: 'chat' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('body', {}, body));
        var message = {
            direction: _core_message__WEBPACK_IMPORTED_MODULE_2__["Direction"].out,
            body: body,
            datetime: new Date(),
            delayed: false
        };
        this.xmppChatAdapter.plugins.forEach(function (plugin) { return plugin.beforeSendMessage(messageStanza, message); });
        var contact = this.xmppChatAdapter.getOrCreateContactById(jid);
        contact.addMessage(message);
        // TODO: on rejection mark message that it was not sent successfully
        this.xmppChatAdapter.chatConnectionService.send(messageStanza).then(function () {
            _this.xmppChatAdapter.plugins.forEach(function (plugin) { return plugin.afterSendMessage(message, messageStanza); });
        }, function (rej) {
            _this.logService.error('rejected message ' + message.id, rej);
        });
    };
    return MessagePlugin;
}(_abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_3__["AbstractXmppPlugin"]));



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/muc-sub.plugin.ts":
/*!*******************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/muc-sub.plugin.ts ***!
  \*******************************************************************************************/
/*! exports provided: MucSubPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MucSubPlugin", function() { return MucSubPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract-xmpp-plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/abstract-xmpp-plugin.ts");




/**
 * support for https://docs.ejabberd.im/developer/xmpp-clients-bots/extensions/muc-sub/
 */
var MucSubPlugin = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MucSubPlugin, _super);
    function MucSubPlugin(xmppChatAdapter, serviceDiscoveryPlugin) {
        var _this = _super.call(this) || this;
        _this.xmppChatAdapter = xmppChatAdapter;
        _this.serviceDiscoveryPlugin = serviceDiscoveryPlugin;
        _this.supportsMucSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('unknown');
        return _this;
    }
    MucSubPlugin.prototype.onBeforeOnline = function () {
        return this.determineSupportForMucSub();
    };
    MucSubPlugin.prototype.determineSupportForMucSub = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isSupported, service, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.serviceDiscoveryPlugin.findService('conference', 'text')];
                    case 1:
                        service = _a.sent();
                        isSupported = service.features.indexOf('urn:xmpp:mucsub:0') > -1;
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        isSupported = false;
                        return [3 /*break*/, 3];
                    case 3:
                        this.supportsMucSub.next(isSupported);
                        return [2 /*return*/];
                }
            });
        });
    };
    MucSubPlugin.prototype.onOffline = function () {
        this.supportsMucSub.next('unknown');
    };
    MucSubPlugin.prototype.subscribeRoom = function (roomJid) {
        var nick = this.xmppChatAdapter.chatConnectionService.userJid.local;
        this.xmppChatAdapter.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'set', to: roomJid }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('subscribe', { xmlns: 'urn:xmpp:mucsub:0', nick: nick })));
    };
    return MucSubPlugin;
}(_abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_3__["AbstractXmppPlugin"]));



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/multi-user-chat.plugin.ts":
/*!***************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/multi-user-chat.plugin.ts ***!
  \***************************************************************************************************/
/*! exports provided: Room, Affiliation, MultiUserChatPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Affiliation", function() { return Affiliation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiUserChatPlugin", function() { return MultiUserChatPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/message */ "./projects/proxym/ngx-chat/src/lib/core/message.ts");
/* harmony import */ var _core_message_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/message-store */ "./projects/proxym/ngx-chat/src/lib/core/message-store.ts");
/* harmony import */ var _abstract_stanza_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract-stanza-builder */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/abstract-stanza-builder.ts");
/* harmony import */ var _abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./abstract-xmpp-plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/abstract-xmpp-plugin.ts");
/* harmony import */ var _message_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message.plugin.ts");
/* harmony import */ var _service_discovery_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service-discovery.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/service-discovery.plugin.ts");









var Room = /** @class */ (function () {
    function Room(occupantJid, logService) {
        this.roomJid = occupantJid.bare();
        this.occupantJid = occupantJid;
        this.messageStore = new _core_message_store__WEBPACK_IMPORTED_MODULE_4__["MessageStore"](logService);
    }
    Object.defineProperty(Room.prototype, "messages", {
        get: function () {
            return this.messageStore.messages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "messages$", {
        get: function () {
            return this.messageStore.messages$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "mostRecentMessage", {
        get: function () {
            return this.messageStore.messages[this.messageStore.messages.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    Room.prototype.addMessage = function (message) {
        this.messageStore.addMessage(message);
    };
    return Room;
}());

var RoomMessageStanzaBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RoomMessageStanzaBuilder, _super);
    function RoomMessageStanzaBuilder(roomJid, from, body, thread) {
        var _this = _super.call(this) || this;
        _this.roomJid = roomJid;
        _this.from = from;
        _this.body = body;
        _this.thread = thread;
        return _this;
    }
    RoomMessageStanzaBuilder.prototype.toStanza = function () {
        var messageStanza = Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('message', { from: this.from, to: this.roomJid, type: 'groupchat' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('body', {}, this.body));
        if (this.thread) {
            messageStanza.children.push(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('thread', {}, this.thread));
        }
        return messageStanza;
    };
    return RoomMessageStanzaBuilder;
}(_abstract_stanza_builder__WEBPACK_IMPORTED_MODULE_5__["AbstractStanzaBuilder"]));
var Affiliation;
(function (Affiliation) {
    Affiliation[Affiliation["none"] = 0] = "none";
    Affiliation[Affiliation["member"] = 1] = "member";
    Affiliation[Affiliation["admin"] = 2] = "admin";
    Affiliation[Affiliation["owner"] = 3] = "owner";
    Affiliation[Affiliation["outcast"] = 4] = "outcast";
})(Affiliation || (Affiliation = {}));
var QueryMemberListStanzaBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QueryMemberListStanzaBuilder, _super);
    function QueryMemberListStanzaBuilder(roomJid, affiliation) {
        var _this = _super.call(this) || this;
        _this.roomJid = roomJid;
        _this.affiliation = affiliation;
        return _this;
    }
    QueryMemberListStanzaBuilder.build = function (roomJid, affiliation) {
        return new QueryMemberListStanzaBuilder(roomJid, affiliation).toStanza();
    };
    QueryMemberListStanzaBuilder.prototype.toStanza = function () {
        return Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'get', to: this.roomJid }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('query', { xmlns: 'http://jabber.org/protocol/muc#admin' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('item', { affiliation: this.affiliation })));
    };
    return QueryMemberListStanzaBuilder;
}(_abstract_stanza_builder__WEBPACK_IMPORTED_MODULE_5__["AbstractStanzaBuilder"]));
var ModifyMemberListStanzaBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ModifyMemberListStanzaBuilder, _super);
    function ModifyMemberListStanzaBuilder(roomJid, modifications) {
        var _this = _super.call(this) || this;
        _this.roomJid = roomJid;
        _this.modifications = modifications;
        return _this;
    }
    ModifyMemberListStanzaBuilder.build = function (roomJid, modifications) {
        return new ModifyMemberListStanzaBuilder(roomJid, modifications).toStanza();
    };
    ModifyMemberListStanzaBuilder.prototype.toStanza = function () {
        var _this = this;
        return Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { to: this.roomJid, type: 'set' }, _xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(['query', { xmlns: 'http://jabber.org/protocol/muc#admin' }], this.modifications.map(function (modification) { return _this.buildItem(modification); }))));
    };
    ModifyMemberListStanzaBuilder.prototype.buildItem = function (modification) {
        var item = Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('item', { jid: modification.jid, affiliation: Affiliation[modification.affiliation] });
        if (modification.nick) {
            item.attrs.nick = modification.nick;
        }
        return item;
    };
    return ModifyMemberListStanzaBuilder;
}(_abstract_stanza_builder__WEBPACK_IMPORTED_MODULE_5__["AbstractStanzaBuilder"]));
/**
 * @see https://xmpp.org/extensions/xep-0045.html
 */
var MultiUserChatPlugin = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MultiUserChatPlugin, _super);
    function MultiUserChatPlugin(xmppChatAdapter, logService, serviceDiscoveryPlugin) {
        var _this = _super.call(this) || this;
        _this.xmppChatAdapter = xmppChatAdapter;
        _this.logService = logService;
        _this.serviceDiscoveryPlugin = serviceDiscoveryPlugin;
        _this.rooms$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        _this.message$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this.roomJoinPromises = {};
        return _this;
    }
    MultiUserChatPlugin.prototype.onOffline = function () {
        this.roomJoinPromises = {};
        this.rooms$.next([]);
    };
    MultiUserChatPlugin.prototype.handleStanza = function (stanza) {
        if (this.isRoomPresenceStanza(stanza)) {
            return this.handleRoomPresenceStanza(stanza);
        }
        else if (this.isRoomMessageStanza(stanza)) {
            return this.handleRoomMessageStanza(stanza);
        }
        return false;
    };
    MultiUserChatPlugin.prototype.isRoomPresenceStanza = function (stanza) {
        return stanza.name === 'presence' && (stanza.getChild('x', 'http://jabber.org/protocol/muc')
            || stanza.getChild('x', 'http://jabber.org/protocol/muc#user'));
    };
    MultiUserChatPlugin.prototype.handleRoomPresenceStanza = function (stanza) {
        var roomJoinPromises = this.roomJoinPromises[stanza.attrs.from];
        if (roomJoinPromises) {
            delete this.roomJoinPromises[stanza.attrs.from];
            roomJoinPromises(stanza);
            return true;
        }
        return false;
    };
    /**
     * Resolves if room could be configured as requested, rejects if room did exist or server did not accept configuration.
     */
    MultiUserChatPlugin.prototype.createRoom = function (request) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var roomId, service, occupantJid, _a, presenceResponse, room, itemElement, configurationForm, configurationListElement, configurationKeyValuePair, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        roomId = request.roomId;
                        return [4 /*yield*/, this.serviceDiscoveryPlugin.findService('conference', 'text')];
                    case 1:
                        service = _b.sent();
                        occupantJid = Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["jid"])(roomId, service.jid, request.nick);
                        return [4 /*yield*/, this.joinRoomInternal(occupantJid, request.name)];
                    case 2:
                        _a = _b.sent(), presenceResponse = _a.presenceResponse, room = _a.room;
                        itemElement = presenceResponse.getChild('x').getChild('item');
                        if (itemElement.attrs.affiliation !== 'owner') {
                            throw new Error('error creating room, user is not owner: ' + presenceResponse.toString());
                        }
                        return [4 /*yield*/, this.xmppChatAdapter.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'get', to: room.roomJid.toString() }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('query', { xmlns: 'http://jabber.org/protocol/muc#owner' })))];
                    case 3:
                        configurationForm = _b.sent();
                        configurationListElement = configurationForm.getChild('query').getChild('x');
                        if (!configurationListElement) {
                            throw new Error('room not configurable');
                        }
                        configurationKeyValuePair = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.extractDefaultConfiguration(configurationListElement.getChildren('field'))), this.extractRoomCreationRequestConfiguration(request));
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.xmppChatAdapter.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'set', to: room.roomJid.toString() }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('query', { xmlns: 'http://jabber.org/protocol/muc#owner' }, _xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(['x', { xmlns: 'jabber:x:data', type: 'submit' },
                                Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('field', { var: 'FORM_TYPE' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('value', {}, 'http://jabber.org/protocol/muc#roomconfig'))], this.convertConfiguration(configurationKeyValuePair))))))];
                    case 5:
                        _b.sent();
                        return [2 /*return*/, room];
                    case 6:
                        e_1 = _b.sent();
                        throw new Error('room configuration rejected: ' + e_1.toString());
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    MultiUserChatPlugin.prototype.destroyRoom = function (roomJid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var roomDestroyedResponse, child, allRoomsWithoutDestroyedRoom;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.xmppChatAdapter.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'set', to: roomJid.toString() }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('query', { xmlns: 'http://jabber.org/protocol/muc#owner' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('destroy'))))];
                    case 1:
                        roomDestroyedResponse = _a.sent();
                        child = roomDestroyedResponse.getChild('error');
                        if (child) {
                            throw new Error('error destroying room:' + child.attrs.type);
                        }
                        allRoomsWithoutDestroyedRoom = this.rooms$.getValue().filter(function (room) { return !room.roomJid.equals(roomJid); });
                        this.rooms$.next(allRoomsWithoutDestroyedRoom);
                        return [2 /*return*/, roomDestroyedResponse];
                }
            });
        });
    };
    MultiUserChatPlugin.prototype.joinRoomInternal = function (roomJid, name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var userJid, occupantJid, roomJoinedPromise, presenceResponse, room;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userJid = this.xmppChatAdapter.chatConnectionService.userJid;
                        occupantJid = Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["jid"])(roomJid.local, roomJid.domain, roomJid.resource || userJid.local);
                        roomJoinedPromise = new Promise(function (resolve) { return _this.roomJoinPromises[occupantJid.toString()] = resolve; });
                        return [4 /*yield*/, this.xmppChatAdapter.chatConnectionService.send(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('presence', { from: userJid.toString(), to: occupantJid.toString() }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('x', { xmlns: 'http://jabber.org/protocol/muc' })))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, roomJoinedPromise];
                    case 2:
                        presenceResponse = _a.sent();
                        if (presenceResponse.getChild('error')) {
                            throw new Error('error joining room: ' + presenceResponse.toString());
                        }
                        try {
                            room = this.getRoomByJid(roomJid);
                        }
                        catch (_b) {
                            room = new Room(occupantJid, this.logService);
                            room.name = name;
                            this.rooms$.next([room].concat(this.rooms$.getValue()));
                        }
                        return [2 /*return*/, { presenceResponse: presenceResponse, room: room }];
                }
            });
        });
    };
    MultiUserChatPlugin.prototype.joinRoom = function (occupantJid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.joinRoomInternal(occupantJid)];
                    case 1: return [2 /*return*/, (_a.sent()).room];
                }
            });
        });
    };
    MultiUserChatPlugin.prototype.queryAllRooms = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var conferenceServer, result, roomResponse, fin, lastReceivedRoom, _a, _b, _c;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.serviceDiscoveryPlugin.findService('conference', 'text')];
                    case 1:
                        conferenceServer = _d.sent();
                        result = [];
                        return [4 /*yield*/, this.xmppChatAdapter.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'get', to: conferenceServer.jid.toString() }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('query', { xmlns: _service_discovery_plugin__WEBPACK_IMPORTED_MODULE_8__["ServiceDiscoveryPlugin"].DISCO_ITEMS })))];
                    case 2:
                        roomResponse = _d.sent();
                        result.push.apply(result, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.convertRoomQueryResponse(roomResponse)));
                        fin = roomResponse.getChild('fin');
                        _d.label = 3;
                    case 3:
                        if (!(fin && fin.attrs.complete !== 'true')) return [3 /*break*/, 6];
                        lastReceivedRoom = fin.getChild('set').getChildText('last');
                        return [4 /*yield*/, this.xmppChatAdapter.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'get', to: conferenceServer.jid.toString() }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('query', { xmlns: 'urn:xmpp:mam:2' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('set', { xmlns: _service_discovery_plugin__WEBPACK_IMPORTED_MODULE_8__["ServiceDiscoveryPlugin"].DISCO_ITEMS }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('max', {}, 250), Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('after', {}, lastReceivedRoom)))))];
                    case 4:
                        roomResponse = _d.sent();
                        _b = (_a = result.push).apply;
                        _c = [result];
                        return [4 /*yield*/, this.convertRoomQueryResponse(roomResponse)];
                    case 5:
                        _b.apply(_a, _c.concat([tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"].apply(void 0, [_d.sent()])]));
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, result];
                }
            });
        });
    };
    MultiUserChatPlugin.prototype.convertRoomQueryResponse = function (iq) {
        var queryElement = iq.getChild('query', _service_discovery_plugin__WEBPACK_IMPORTED_MODULE_8__["ServiceDiscoveryPlugin"].DISCO_ITEMS);
        var roomElements = queryElement && queryElement.getChildren('item');
        return roomElements.map(function (room) { return room.attrs; });
    };
    MultiUserChatPlugin.prototype.queryMemberList = function (room) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var responsePromises, memberQueryResponses, members, memberQueryResponses_1, memberQueryResponses_1_1, memberQueryResponse, membersFromQueryResponse;
            var e_2, _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        responsePromises = [
                            this.xmppChatAdapter.chatConnectionService.sendIq(QueryMemberListStanzaBuilder.build(room.roomJid.toString(), 'admin')),
                            this.xmppChatAdapter.chatConnectionService.sendIq(QueryMemberListStanzaBuilder.build(room.roomJid.toString(), 'member')),
                            this.xmppChatAdapter.chatConnectionService.sendIq(QueryMemberListStanzaBuilder.build(room.roomJid.toString(), 'owner')),
                            this.xmppChatAdapter.chatConnectionService.sendIq(QueryMemberListStanzaBuilder.build(room.roomJid.toString(), 'outcast')),
                        ];
                        return [4 /*yield*/, Promise.all(responsePromises)];
                    case 1:
                        memberQueryResponses = _b.sent();
                        members = [];
                        try {
                            for (memberQueryResponses_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(memberQueryResponses), memberQueryResponses_1_1 = memberQueryResponses_1.next(); !memberQueryResponses_1_1.done; memberQueryResponses_1_1 = memberQueryResponses_1.next()) {
                                memberQueryResponse = memberQueryResponses_1_1.value;
                                membersFromQueryResponse = memberQueryResponse.getChild('query').getChildren('item')
                                    .map(function (memberItem) { return ({
                                    jid: memberItem.attrs.jid,
                                    nick: memberItem.attrs.nick,
                                    affiliation: _this.reverseMapAffiliation(memberItem.attrs.affiliation),
                                }); });
                                members = members.concat(membersFromQueryResponse);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (memberQueryResponses_1_1 && !memberQueryResponses_1_1.done && (_a = memberQueryResponses_1.return)) _a.call(memberQueryResponses_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return [2 /*return*/, members];
                }
            });
        });
    };
    MultiUserChatPlugin.prototype.reverseMapAffiliation = function (value) {
        if (!value || value === 'none') {
            return Affiliation.none;
        }
        else if (value === 'member') {
            return Affiliation.member;
        }
        else if (value === 'admin') {
            return Affiliation.admin;
        }
        else if (value === 'owner') {
            return Affiliation.owner;
        }
        else if (value === 'outcast') {
            return Affiliation.outcast;
        }
        else {
            var message = 'unexpected affilation: ' + value;
            this.logService.error(message);
            throw new Error(message);
        }
    };
    MultiUserChatPlugin.prototype.modifyMemberList = function (roomJid, jid, affiliation, nick) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.xmppChatAdapter.chatConnectionService.sendIq(ModifyMemberListStanzaBuilder.build(roomJid, [{ jid: jid, affiliation: affiliation, nick: nick }]))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MultiUserChatPlugin.prototype.sendMessage = function (room, body, thread) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var from, roomMessageStanza, _a, _b, plugin;
            var e_3, _c;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                from = this.xmppChatAdapter.chatConnectionService.userJid;
                roomMessageStanza = new RoomMessageStanzaBuilder(room.roomJid.toString(), from.toString(), body, thread)
                    .toStanza();
                try {
                    for (_a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.xmppChatAdapter.plugins), _b = _a.next(); !_b.done; _b = _a.next()) {
                        plugin = _b.value;
                        plugin.beforeSendMessage(roomMessageStanza);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                return [2 /*return*/, this.xmppChatAdapter.chatConnectionService.send(roomMessageStanza)];
            });
        });
    };
    MultiUserChatPlugin.prototype.convertConfiguration = function (configurationKeyValuePair) {
        var configurationFields = [];
        for (var configurationKey in configurationKeyValuePair) {
            if (configurationKeyValuePair.hasOwnProperty(configurationKey)) {
                var configurationValues = configurationKeyValuePair[configurationKey].map(function (value) { return Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('value', {}, value); });
                configurationFields.push(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(['field', { var: configurationKey }], configurationValues)));
            }
        }
        return configurationFields;
    };
    MultiUserChatPlugin.prototype.extractDefaultConfiguration = function (fields) {
        var e_4, _a;
        var configuration = {};
        try {
            for (var fields_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                var field = fields_1_1.value;
                configuration[field.attrs.var] = field.getChildren('value').map(function (value) { return value.getText(); });
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return configuration;
    };
    MultiUserChatPlugin.prototype.extractRoomCreationRequestConfiguration = function (request) {
        var configuration = {};
        configuration['muc#roomconfig_whois'] = [request.nonAnonymous ? 'anyone' : 'moderators'];
        configuration['muc#roomconfig_publicroom'] = [request.public ? '1' : '0'];
        configuration['muc#roomconfig_membersonly'] = [request.membersOnly ? '1' : '0'];
        configuration['muc#roomconfig_persistentroom'] = [request.persistentRoom ? '1' : '0'];
        if (request.allowSubscription !== undefined) {
            // tslint:disable-next-line:no-string-literal
            configuration['allow_subscription'] = [request.allowSubscription === true ? '1' : '0'];
        }
        return configuration;
    };
    MultiUserChatPlugin.prototype.isRoomMessageStanza = function (stanza) {
        return stanza.name === 'message' && stanza.attrs.type === 'groupchat' && !!stanza.getChildText('body');
    };
    MultiUserChatPlugin.prototype.handleRoomMessageStanza = function (stanza) {
        var e_5, _a;
        var datetime;
        var delay = stanza.getChild('delay');
        if (delay && delay.attrs.stamp) {
            datetime = new Date(delay.attrs.stamp);
        }
        else {
            datetime = new Date();
        }
        var from = Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["jid"])(stanza.attrs.from);
        var room = this.getRoomByJid(from.bare());
        var message = {
            body: stanza.getChildText('body'),
            datetime: datetime,
            id: stanza.attrs.id,
            from: from,
            direction: from.equals(room.occupantJid) ? _core_message__WEBPACK_IMPORTED_MODULE_3__["Direction"].out : _core_message__WEBPACK_IMPORTED_MODULE_3__["Direction"].in,
            delayed: !!stanza.getChild('delay')
        };
        var messageReceivedEvent = new _message_plugin__WEBPACK_IMPORTED_MODULE_7__["MessageReceivedEvent"]();
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.xmppChatAdapter.plugins), _c = _b.next(); !_c.done; _c = _b.next()) {
                var plugin = _c.value;
                plugin.afterReceiveMessage(message, stanza, messageReceivedEvent);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        if (!messageReceivedEvent.discard) {
            room.addMessage(message);
        }
        if (!message.delayed) {
            this.message$.next(room);
        }
        return true;
    };
    MultiUserChatPlugin.prototype.getRoomByJid = function (jid) {
        var e_6, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.rooms$.getValue()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var room = _c.value;
                if (room.roomJid.equals(jid)) {
                    return room;
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        throw new Error('no room with given jid found: ' + jid.toString());
    };
    return MultiUserChatPlugin;
}(_abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_6__["AbstractXmppPlugin"]));



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/ping.plugin.ts":
/*!****************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/ping.plugin.ts ***!
  \****************************************************************************************/
/*! exports provided: PingPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PingPlugin", function() { return PingPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_utils_timeout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/utils-timeout */ "./projects/proxym/ngx-chat/src/lib/core/utils-timeout.ts");
/* harmony import */ var _abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abstract-xmpp-plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/abstract-xmpp-plugin.ts");





/**
 * xep-0199
 */
var PingPlugin = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PingPlugin, _super);
    function PingPlugin(xmppChatAdapter, logService, ngZone) {
        var _this = _super.call(this) || this;
        _this.xmppChatAdapter = xmppChatAdapter;
        _this.logService = logService;
        _this.ngZone = ngZone;
        _this.pingInterval = 60000;
        _this.xmppChatAdapter.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (newState) { return newState === 'online'; })).subscribe(function () {
            _this.schedulePings();
        });
        _this.xmppChatAdapter.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (newState) { return newState === 'disconnected'; })).subscribe(function () {
            _this.unschedulePings();
        });
        return _this;
    }
    PingPlugin.prototype.schedulePings = function () {
        var _this = this;
        this.unschedulePings();
        this.ngZone.runOutsideAngular(function () {
            _this.timeoutHandle = window.setInterval(function () { return _this.ping(); }, _this.pingInterval);
        });
    };
    PingPlugin.prototype.ping = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logService.debug('ping...');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Object(_core_utils_timeout__WEBPACK_IMPORTED_MODULE_3__["timeout"])(this.sendPing(), 10000)];
                    case 2:
                        _a.sent();
                        this.logService.debug('... pong');
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        if (this.xmppChatAdapter.state$.getValue() === 'online'
                            && this.xmppChatAdapter.chatConnectionService.state$.getValue() === 'online') {
                            this.logService.error('... pong errored,  connection should be online, waiting for browser websocket timeout');
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PingPlugin.prototype.sendPing = function () {
        try {
            return this.xmppChatAdapter.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'get' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('ping', { xmlns: 'urn:xmpp:ping' })));
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    PingPlugin.prototype.unschedulePings = function () {
        window.clearInterval(this.timeoutHandle);
    };
    return PingPlugin;
}(_abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_4__["AbstractXmppPlugin"]));



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/publish-subscribe.plugin.ts":
/*!*****************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/publish-subscribe.plugin.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PUBSUB_EVENT_XMLNS, PublishSubscribePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBSUB_EVENT_XMLNS", function() { return PUBSUB_EVENT_XMLNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishSubscribePlugin", function() { return PublishSubscribePlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _abstract_stanza_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract-stanza-builder */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/abstract-stanza-builder.ts");
/* harmony import */ var _abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./abstract-xmpp-plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/abstract-xmpp-plugin.ts");






var PUBSUB_EVENT_XMLNS = 'http://jabber.org/protocol/pubsub#event';
var PublishStanzaBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PublishStanzaBuilder, _super);
    function PublishStanzaBuilder(options) {
        var _this = _super.call(this) || this;
        _this.publishOptions = {
            persistItems: false,
        };
        if (options) {
            _this.publishOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.publishOptions), options);
        }
        return _this;
    }
    PublishStanzaBuilder.prototype.toStanza = function () {
        var _a = this.publishOptions, node = _a.node, id = _a.id, persistItems = _a.persistItems;
        // necessary as a 'event-only' publish is currently broken in ejabberd, see
        // https://github.com/processone/ejabberd/issues/2799
        var data = this.publishOptions.data || Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('data');
        return Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'set' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('pubsub', { xmlns: 'http://jabber.org/protocol/pubsub' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('publish', { node: node }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('item', { id: id }, data)), Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('publish-options', {}, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('x', { xmlns: 'jabber:x:data', type: 'submit' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('field', { var: 'FORM_TYPE', type: 'hidden' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('value', {}, 'http://jabber.org/protocol/pubsub#publish-options')), Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('field', { var: 'pubsub#persist_items' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('value', {}, persistItems ? 1 : 0)), Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('field', { var: 'pubsub#access_model' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('value', {}, 'whitelist'))))));
    };
    return PublishStanzaBuilder;
}(_abstract_stanza_builder__WEBPACK_IMPORTED_MODULE_4__["AbstractStanzaBuilder"]));
var RetrieveDataStanzaBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RetrieveDataStanzaBuilder, _super);
    function RetrieveDataStanzaBuilder(node) {
        var _this = _super.call(this) || this;
        _this.node = node;
        return _this;
    }
    RetrieveDataStanzaBuilder.prototype.toStanza = function () {
        return Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'get' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('pubsub', { xmlns: 'http://jabber.org/protocol/pubsub' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('items', { node: this.node })));
    };
    return RetrieveDataStanzaBuilder;
}(_abstract_stanza_builder__WEBPACK_IMPORTED_MODULE_4__["AbstractStanzaBuilder"]));
/**
 * XEP-0060 Publish Subscribe
 * XEP-0223 Persistent Storage of Private Data via PubSub
 */
var PublishSubscribePlugin = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PublishSubscribePlugin, _super);
    function PublishSubscribePlugin(xmppChatAdapter, serviceDiscoveryPlugin) {
        var _this = _super.call(this) || this;
        _this.xmppChatAdapter = xmppChatAdapter;
        _this.serviceDiscoveryPlugin = serviceDiscoveryPlugin;
        _this.publish$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this.supportsPrivatePublish = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('unknown');
        return _this;
    }
    PublishSubscribePlugin.prototype.onBeforeOnline = function () {
        return this.determineSupportForPrivatePublish();
    };
    PublishSubscribePlugin.prototype.onOffline = function () {
        this.supportsPrivatePublish.next('unknown');
    };
    PublishSubscribePlugin.prototype.storePrivatePayloadPersistent = function (node, id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.supportsPrivatePublish
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (support) { return support !== 'unknown'; }))
                .subscribe(function (support) {
                if (!support) {
                    reject('does not support private publish subscribe');
                }
                else {
                    resolve(_this.xmppChatAdapter.chatConnectionService.sendIq(new PublishStanzaBuilder({ node: node, id: id, data: data, persistItems: true }).toStanza()));
                }
            });
        });
    };
    PublishSubscribePlugin.prototype.privateNotify = function (node, data, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.supportsPrivatePublish
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (support) { return support !== 'unknown'; }))
                .subscribe(function (support) {
                if (!support) {
                    reject('does not support private publish subscribe');
                }
                else {
                    resolve(_this.xmppChatAdapter.chatConnectionService.sendIq(new PublishStanzaBuilder({ node: node, id: id, data: data, persistItems: false }).toStanza()));
                }
            });
        });
    };
    PublishSubscribePlugin.prototype.handleStanza = function (stanza) {
        var eventElement = stanza.getChild('event', PUBSUB_EVENT_XMLNS);
        if (stanza.is('message') && eventElement) {
            this.publish$.next(eventElement);
            return true;
        }
        return false;
    };
    PublishSubscribePlugin.prototype.retrieveNodeItems = function (node) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var iqResponseStanza, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.xmppChatAdapter.chatConnectionService.sendIq(new RetrieveDataStanzaBuilder(node).toStanza())];
                    case 1:
                        iqResponseStanza = _a.sent();
                        return [2 /*return*/, iqResponseStanza.getChild('pubsub').getChild('items').getChildren('item')];
                    case 2:
                        e_1 = _a.sent();
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PublishSubscribePlugin.prototype.determineSupportForPrivatePublish = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isSupported, service, e_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.serviceDiscoveryPlugin.findService('pubsub', 'pep')];
                    case 1:
                        service = _a.sent();
                        isSupported = service.features.indexOf('http://jabber.org/protocol/pubsub#publish-options') > -1;
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        isSupported = false;
                        return [3 /*break*/, 3];
                    case 3:
                        this.supportsPrivatePublish.next(isSupported);
                        return [2 /*return*/];
                }
            });
        });
    };
    return PublishSubscribePlugin;
}(_abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_5__["AbstractXmppPlugin"]));



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/push.plugin.ts":
/*!****************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/push.plugin.ts ***!
  \****************************************************************************************/
/*! exports provided: PushPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushPlugin", function() { return PushPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-xmpp-plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/abstract-xmpp-plugin.ts");



/**
 * xep-0357
 */
var PushPlugin = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PushPlugin, _super);
    function PushPlugin(xmppChatAdapter, serviceDiscoveryPlugin) {
        var _this = _super.call(this) || this;
        _this.xmppChatAdapter = xmppChatAdapter;
        _this.serviceDiscoveryPlugin = serviceDiscoveryPlugin;
        return _this;
    }
    PushPlugin.prototype.register = function (node, jid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var service;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!jid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getPushServiceComponent()];
                    case 1:
                        service = _a.sent();
                        jid = service.jid;
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.xmppChatAdapter.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'set' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('enable', { xmlns: 'urn:xmpp:push:0', jid: jid, node: node })))];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PushPlugin.prototype.getPushServiceComponent = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.serviceDiscoveryPlugin.findService('pubsub', 'push')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PushPlugin.prototype.unregister = function (node, jid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var service;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!jid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getPushServiceComponent()];
                    case 1:
                        service = _a.sent();
                        jid = service.jid;
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.xmppChatAdapter.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'set' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('disable', { xmlns: 'urn:xmpp:push:0', jid: jid, node: node })))];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return PushPlugin;
}(_abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_2__["AbstractXmppPlugin"]));



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/registration.plugin.ts":
/*!************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/registration.plugin.ts ***!
  \************************************************************************************************/
/*! exports provided: RegistrationPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPlugin", function() { return RegistrationPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_get_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/get-domain */ "./projects/proxym/ngx-chat/src/lib/core/get-domain.ts");
/* harmony import */ var _core_utils_timeout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/utils-timeout */ "./projects/proxym/ngx-chat/src/lib/core/utils-timeout.ts");
/* harmony import */ var _abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./abstract-xmpp-plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/abstract-xmpp-plugin.ts");







/**
 * xep-0077
 */
var RegistrationPlugin = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RegistrationPlugin, _super);
    function RegistrationPlugin(logService, ngZone) {
        var _this = _super.call(this) || this;
        _this.logService = logService;
        _this.ngZone = ngZone;
        _this.registered$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this.cleanUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this.loggedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this.registrationTimeout = 5000;
        return _this;
    }
    /**
     * Promise resolves if user account is registered successfully,
     * rejects if an error happens while registering, e.g. the username is already taken.
     */
    RegistrationPlugin.prototype.register = function (username, password, service, domain) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ngZone.runOutsideAngular(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var e_1;
                            var _this = this;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, 3, 5]);
                                        return [4 /*yield*/, Object(_core_utils_timeout__WEBPACK_IMPORTED_MODULE_5__["timeout"])((function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            domain = domain || Object(_core_get_domain__WEBPACK_IMPORTED_MODULE_4__["getDomain"])(service);
                                                            this.logService.debug('registration plugin', 'connecting...');
                                                            return [4 /*yield*/, this.connect(username, password, service, domain)];
                                                        case 1:
                                                            _a.sent();
                                                            this.logService.debug('registration plugin', 'connection established, starting registration');
                                                            return [4 /*yield*/, this.client.iqCaller.request(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'get', to: domain }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('query', { xmlns: 'jabber:iq:register' })))];
                                                        case 2:
                                                            _a.sent();
                                                            this.logService.debug('registration plugin', 'server acknowledged registration request, sending credentials');
                                                            return [4 /*yield*/, this.client.iqCaller.request(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'set' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('query', { xmlns: 'jabber:iq:register' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('username', {}, username), Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('password', {}, password))))];
                                                        case 3:
                                                            _a.sent();
                                                            this.registered$.next();
                                                            return [4 /*yield*/, this.loggedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.cleanUp), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).toPromise()];
                                                        case 4:
                                                            _a.sent();
                                                            this.logService.debug('registration plugin', 'registration successful');
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })(), this.registrationTimeout)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 5];
                                    case 2:
                                        e_1 = _a.sent();
                                        this.logService.warn('error registering', e_1);
                                        throw e_1;
                                    case 3:
                                        this.cleanUp.next();
                                        this.logService.debug('registration plugin', 'cleaning up');
                                        return [4 /*yield*/, this.client.stop()];
                                    case 4:
                                        _a.sent();
                                        return [7 /*endfinally*/];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrationPlugin.prototype.connect = function (username, password, service, domain) {
        var _this = this;
        return new Promise(function (resolveConnectionEstablished) {
            _this.client = Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["client"])({
                domain: domain || Object(_core_get_domain__WEBPACK_IMPORTED_MODULE_4__["getDomain"])(service),
                service: service,
                credentials: function (authenticationCallback) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                resolveConnectionEstablished();
                                return [4 /*yield*/, this.registered$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.cleanUp), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).toPromise()];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, authenticationCallback({ username: username, password: password })];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }
            });
            _this.client.reconnect.stop();
            _this.client.timeout = _this.registrationTimeout;
            _this.client.on('online', function () {
                _this.logService.debug('registration plugin', 'online event');
                _this.loggedIn$.next();
            });
            _this.client.on('error', function (err) {
                _this.logService.error('registration plugin', err);
            });
            _this.client.on('offline', function () {
                _this.logService.debug('registration plugin', 'offline event');
            });
            return _this.client.start();
        });
    };
    return RegistrationPlugin;
}(_abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_6__["AbstractXmppPlugin"]));



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/roster.plugin.ts":
/*!******************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/roster.plugin.ts ***!
  \******************************************************************************************/
/*! exports provided: RosterPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterPlugin", function() { return RosterPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_presence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/presence */ "./projects/proxym/ngx-chat/src/lib/core/presence.ts");
/* harmony import */ var _core_subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/subscription */ "./projects/proxym/ngx-chat/src/lib/core/subscription.ts");
/* harmony import */ var _abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abstract-xmpp-plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/abstract-xmpp-plugin.ts");
/* harmony import */ var _core_contact_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/contact-avatar */ "./projects/proxym/ngx-chat/src/lib/core/contact-avatar.ts");






/**
 * https://xmpp.org/rfcs/rfc6121.html#roster-add-success
 */
var RosterPlugin = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RosterPlugin, _super);
    function RosterPlugin(chatService, logService) {
        var _this = _super.call(this) || this;
        _this.chatService = chatService;
        _this.logService = logService;
        _this.mySub = '';
        _this.self = _this;
        return _this;
    }
    RosterPlugin.prototype.handleStanza = function (stanza) {
        /*     if (this.isAvatar(stanza)) {
                 return this.handleAvatarStanza(stanza);
                 console.log('repo3', stanza);
         }*/
        if (this.isRosterPushStanza(stanza)) {
            //  console.log('repo1', (stanza));
            return this.handleRosterPushStanza(stanza);
        }
        else if (this.isPresenceStanza(stanza)) {
            //   console.log('repo2', (stanza));
            return this.handlePresenceStanza(stanza);
        }
        return false;
    };
    RosterPlugin.prototype.isRosterPushStanza = function (stanza) {
        return stanza.name === 'iq'
            && stanza.attrs.type === 'set'
            && stanza.getChild('query', 'jabber:iq:roster');
    };
    RosterPlugin.prototype.handleAvatarStanza = function (stanza) {
        var itemChild = stanza.toString();
        var mySubString = itemChild.match(new RegExp('<BINVAL>' + '(.*)' + '</BINVAL>'));
        // this.chatService.userAvatar$.next(itemChild.toString());
        if (mySubString !== null) {
            var mySubb = mySubString.toString().substring(mySubString.toString().lastIndexOf(',') + 1, mySubString.toString().lastIndexOf('=') + 1);
            console.log('anios');
            this.self.mySub = mySubb;
            return mySubb;
        }
        // this.avatarr = mySub ;
        // this.chatService.userAvatar$.next(itemChild.toString());
        //  console.log('repo33', this.chatService.userAvatar$.next(itemChild.toString()));
        // console.log('rrr2');
        // console.log('rrr4', this.self.mySub);
        return '';
    };
    RosterPlugin.prototype.handleRosterPushStanza = function (stanza) {
        // TODO:
        // Security Warning: Traditionally, a roster push included no 'from' address, with the result that all roster pushes were sent
        // implicitly from the bare JID of the account itself. However, this specification allows entities other than the user's server
        // to maintain roster information, which means that a roster push might include a 'from' address other than the bare JID of the
        // user's account. Therefore, the client MUST check the 'from' address to verify that the sender of the roster push is authorized
        // to update the roster. If the client receives a roster push from an unauthorized entity, it MUST NOT process the pushed data; in
        // addition, the client can either return a stanza error of <service-unavailable/> error or refuse to return a stanza error at all
        // (the latter behavior overrides a MUST-level requirement from [XMPP‑CORE] for the purpose of preventing a presence leak).
        var itemChild = stanza.getChild('query').getChild('item');
        var contact = this.chatService.getOrCreateContactById(itemChild.attrs.jid, itemChild.attrs.name || itemChild.attrs.jid);
        contact.pendingOut$.next(itemChild.attrs.ask === 'subscribe');
        var subscriptionStatus = itemChild.attrs.subscription || 'none';
        this.chatService.chatConnectionService.sendIqAckResult(stanza.attrs.id);
        var handled = false;
        if (subscriptionStatus === 'remove') {
            contact.pendingOut$.next(false);
            contact.subscription$.next(_core_subscription__WEBPACK_IMPORTED_MODULE_3__["ContactSubscription"].none);
            handled = true;
        }
        else if (subscriptionStatus === 'none') {
            contact.subscription$.next(_core_subscription__WEBPACK_IMPORTED_MODULE_3__["ContactSubscription"].none);
            handled = true;
        }
        else if (subscriptionStatus === 'to') {
            contact.subscription$.next(_core_subscription__WEBPACK_IMPORTED_MODULE_3__["ContactSubscription"].to);
            handled = true;
        }
        else if (subscriptionStatus === 'from') {
            contact.subscription$.next(_core_subscription__WEBPACK_IMPORTED_MODULE_3__["ContactSubscription"].from);
            handled = true;
        }
        else if (subscriptionStatus === 'both') {
            contact.subscription$.next(_core_subscription__WEBPACK_IMPORTED_MODULE_3__["ContactSubscription"].both);
            handled = true;
        }
        if (handled) {
            var existingContacts = this.chatService.contacts$.getValue();
            this.chatService.contacts$.next(existingContacts);
        }
        return handled;
    };
    RosterPlugin.prototype.getRosterContacts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return _this.chatService.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'get' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('query', { xmlns: 'jabber:iq:roster' }))).then(function (responseStanza) {
                resolve(_this.convertToContacts(responseStanza));
                console.log('rrr1', responseStanza);
                // console.log('anso', this.self.mySub);
            }, function (responseStanza) {
                _this.logService.error('error converting roster contact push', responseStanza.toString());
                resolve([]);
            });
        });
    };
    RosterPlugin.prototype.isPresenceStanza = function (stanza) {
        return stanza.name === 'presence' && !stanza.getChild('x', 'http://jabber.org/protocol/muc#user');
    };
    RosterPlugin.prototype.getRosterAvatar = function (jid) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this.chatService.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'get', to: jid, id: _this.chatService.chatConnectionService.getNextIqId() }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('vCard', { xmlns: 'vcard-temp' }))).then(function (responseStanza) {
                // this.aA = 'anis';
                // const avata = this.handleAvatarStanza(responseStanza) ;
                //  console.log('rrr3', this.self.mySub);
                resolve(_this.handleAvatarStanza(responseStanza));
            }, function (responseStanza) {
                _this.logService.error('error converting roster contact push', responseStanza.toString());
                resolve('');
            });
        });
    };
    RosterPlugin.prototype.transitionSubscriptionRequestReceivedAccepted = function (subscription) {
        switch (subscription) {
            case _core_subscription__WEBPACK_IMPORTED_MODULE_3__["ContactSubscription"].none:
                return _core_subscription__WEBPACK_IMPORTED_MODULE_3__["ContactSubscription"].from;
            case _core_subscription__WEBPACK_IMPORTED_MODULE_3__["ContactSubscription"].to:
                return _core_subscription__WEBPACK_IMPORTED_MODULE_3__["ContactSubscription"].both;
            default:
                return subscription;
        }
    };
    RosterPlugin.prototype.transitionSubscriptionRequestSentAccepted = function (subscription) {
        switch (subscription) {
            case _core_subscription__WEBPACK_IMPORTED_MODULE_3__["ContactSubscription"].none:
                return _core_subscription__WEBPACK_IMPORTED_MODULE_3__["ContactSubscription"].to;
            case _core_subscription__WEBPACK_IMPORTED_MODULE_3__["ContactSubscription"].from:
                return _core_subscription__WEBPACK_IMPORTED_MODULE_3__["ContactSubscription"].both;
            default:
                return subscription;
        }
    };
    RosterPlugin.prototype.sendAcceptPresenceSubscriptionRequest = function (jid) {
        var contact = this.chatService.getOrCreateContactById(jid);
        contact.pendingIn$.next(false);
        this.chatService.chatConnectionService.send(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('presence', { to: jid, type: 'subscribed', id: this.chatService.chatConnectionService.getNextIqId() }));
    };
    RosterPlugin.prototype.onBeforeOnline = function () {
        return this.refreshRosterContacts();
    };
    RosterPlugin.prototype.sendIqq = function (jid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.chatService.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'get', to: jid, id: this.chatService.chatConnectionService.getNextIqId() }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('vCard', { xmlns: 'vcard-temp' })))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    RosterPlugin.prototype.convertToContacts = function (responseStanza) {
        var _this = this;
        return responseStanza.getChild('query').getChildElements()
            .map(function (rosterElement) {
            var contact = _this.chatService.getOrCreateContactById(rosterElement.attrs.jid, rosterElement.attrs.name || rosterElement.attrs.jid);
            contact.subscription$.next(_this.parseSubscription(rosterElement.attrs.subscription));
            contact.pendingOut$.next(rosterElement.attrs.ask === 'subscribe');
            _this.sendIqq(rosterElement.attrs.jid).then(function (data) {
                var itemChild = data.toString();
                var mySubString = itemChild.match(new RegExp('<PHOTO><BINVAL>' + '(.*)' + '</BINVAL><TYPE>'));
                if (mySubString !== null) {
                    var mySubb = mySubString.toString().substring(mySubString.toString().lastIndexOf(',') + 1, mySubString.toString().lastIndexOf('=') + 1);
                    contact.avatar = 'data:image/jpeg;base64,' + mySubb;
                }
                else {
                    contact.avatar = _core_contact_avatar__WEBPACK_IMPORTED_MODULE_5__["dummyAvatar"];
                }
            });
            return contact;
        });
    };
    RosterPlugin.prototype.addRosterContact = function (jid) {
        // this.getRosterAvatar(jid);
        this.sendAddToRoster(jid);
        this.sendSubscribeToPresence(jid);
        this.sendAcceptPresenceSubscriptionRequest(jid);
    };
    RosterPlugin.prototype.handlePresenceStanza = function (stanza) {
        var fromAsContact = this.chatService.getOrCreateContactById(stanza.attrs.from);
        var isAddressedToMe = this.chatService.chatConnectionService.userJid.bare().equals(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["jid"])(stanza.attrs.to).bare());
        if (isAddressedToMe) {
            if (!stanza.attrs.type) {
                // https://xmpp.org/rfcs/rfc3921.html#stanzas-presence-children-show
                var show = stanza.getChildText('show');
                var presenceMapping = {
                    chat: _core_presence__WEBPACK_IMPORTED_MODULE_2__["Presence"].present,
                    null: _core_presence__WEBPACK_IMPORTED_MODULE_2__["Presence"].present,
                    away: _core_presence__WEBPACK_IMPORTED_MODULE_2__["Presence"].away,
                    dnd: _core_presence__WEBPACK_IMPORTED_MODULE_2__["Presence"].dnd,
                    xa: _core_presence__WEBPACK_IMPORTED_MODULE_2__["Presence"].away,
                };
                var presence = presenceMapping[show];
                if (presence) {
                    fromAsContact.updateResourcePresence(stanza.attrs.from, presence);
                }
                else {
                    this.logService.error('illegal presence:', stanza.attrs.from, show);
                }
                return true;
            }
            else if (stanza.attrs.type === 'unavailable') {
                fromAsContact.updateResourcePresence(stanza.attrs.from, _core_presence__WEBPACK_IMPORTED_MODULE_2__["Presence"].unavailable);
                return true;
            }
            else if (stanza.attrs.type === 'subscribe') {
                if (fromAsContact.isSubscribed() || fromAsContact.pendingOut$.getValue()) {
                    // subscriber is already a contact of us, approve subscription
                    fromAsContact.pendingIn$.next(false);
                    this.sendAcceptPresenceSubscriptionRequest(stanza.attrs.from);
                    fromAsContact.subscription$.next(this.transitionSubscriptionRequestReceivedAccepted(fromAsContact.subscription$.getValue()));
                    this.chatService.contacts$.next(this.chatService.contacts$.getValue());
                    return true;
                }
                else if (fromAsContact) {
                    // subscriber is known but not subscribed or pending
                    fromAsContact.pendingIn$.next(true);
                    this.chatService.contacts$.next(this.chatService.contacts$.getValue());
                    return true;
                }
            }
            else if (stanza.attrs.type === 'subscribed') {
                fromAsContact.pendingOut$.next(false);
                fromAsContact.subscription$.next(this.transitionSubscriptionRequestSentAccepted(fromAsContact.subscription$.getValue()));
                this.chatService.contacts$.next(this.chatService.contacts$.getValue());
                return true;
            }
            else if (stanza.attrs.type === 'unsubscribed') {
                // TODO: handle unsubscribed
            }
            else if (stanza.attrs.type === 'unsubscribe') {
                // TODO: handle unsubscribe
            }
        }
        return false;
    };
    RosterPlugin.prototype.parseSubscription = function (subscription) {
        switch (subscription) {
            case 'to':
                return _core_subscription__WEBPACK_IMPORTED_MODULE_3__["ContactSubscription"].to;
            case 'from':
                return _core_subscription__WEBPACK_IMPORTED_MODULE_3__["ContactSubscription"].from;
            case 'both':
                return _core_subscription__WEBPACK_IMPORTED_MODULE_3__["ContactSubscription"].both;
            case 'none':
            default:
                return _core_subscription__WEBPACK_IMPORTED_MODULE_3__["ContactSubscription"].none;
        }
    };
    RosterPlugin.prototype.isAvatar = function (stanza) {
        return stanza.name === 'iq'
            && stanza.attrs.type === 'result'
            && stanza.getChild('vCard', 'vcard-temp');
    };
    RosterPlugin.prototype.sendAddToRoster = function (jid) {
        return this.chatService.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'set' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('query', { xmlns: 'jabber:iq:roster' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('item', { jid: jid }))));
    };
    RosterPlugin.prototype.sendSubscribeToPresence = function (jid) {
        this.chatService.chatConnectionService.send(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('presence', { id: this.chatService.chatConnectionService.getNextIqId(), to: jid, type: 'subscribe' }));
    };
    RosterPlugin.prototype.removeRosterContact = function (jid) {
        var contact = this.chatService.getContactById(jid);
        if (contact) {
            contact.subscription$.next(_core_subscription__WEBPACK_IMPORTED_MODULE_3__["ContactSubscription"].none);
            contact.pendingOut$.next(false);
            contact.pendingIn$.next(false);
            this.sendRemoveFromRoster(jid);
            this.sendWithdrawPresenceSubscription(jid);
        }
    };
    RosterPlugin.prototype.sendRemoveFromRoster = function (jid) {
        this.chatService.chatConnectionService.sendIq(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', { type: 'set' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('query', { xmlns: 'jabber:iq:roster' }, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('item', { jid: jid, subscription: 'remove' }))));
    };
    RosterPlugin.prototype.sendWithdrawPresenceSubscription = function (jid) {
        this.chatService.chatConnectionService.send(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('presence', { id: this.chatService.chatConnectionService.getNextIqId(), to: jid, type: 'unsubscribed' }));
    };
    RosterPlugin.prototype.refreshRosterContacts = function () {
        return this.getRosterContacts();
    };
    return RosterPlugin;
}(_abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_4__["AbstractXmppPlugin"]));



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/service-discovery.plugin.ts":
/*!*****************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/service-discovery.plugin.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ServiceDiscoveryPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDiscoveryPlugin", function() { return ServiceDiscoveryPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _abstract_stanza_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract-stanza-builder */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/abstract-stanza-builder.ts");
/* harmony import */ var _abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./abstract-xmpp-plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/abstract-xmpp-plugin.ts");






var QueryStanzaBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QueryStanzaBuilder, _super);
    function QueryStanzaBuilder(xmlns, to) {
        var _this = _super.call(this) || this;
        _this.xmlns = xmlns;
        _this.to = to;
        return _this;
    }
    QueryStanzaBuilder.prototype.toStanza = function () {
        var attrs = { type: 'get' };
        if (this.to) {
            attrs.to = this.to;
        }
        return Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('iq', attrs, Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])('query', { xmlns: this.xmlns }));
    };
    return QueryStanzaBuilder;
}(_abstract_stanza_builder__WEBPACK_IMPORTED_MODULE_4__["AbstractStanzaBuilder"]));
/**
 * see XEP-0030 Service Discovery
 */
var ServiceDiscoveryPlugin = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ServiceDiscoveryPlugin, _super);
    function ServiceDiscoveryPlugin(chatAdapter) {
        var _this = _super.call(this) || this;
        _this.chatAdapter = chatAdapter;
        _this.servicesInitialized$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        _this.hostedServices = [];
        _this.resourceCache = {};
        return _this;
    }
    ServiceDiscoveryPlugin.prototype.onBeforeOnline = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var services;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.discoverServices(this.chatAdapter.chatConnectionService.userJid.domain)];
                    case 1:
                        services = _a.sent();
                        this.servicesInitialized$.next(true);
                        return [2 /*return*/, services];
                }
            });
        });
    };
    ServiceDiscoveryPlugin.prototype.onOffline = function () {
        this.servicesInitialized$.next(false);
        this.hostedServices = [];
        this.resourceCache = {};
    };
    ServiceDiscoveryPlugin.prototype.supportsFeature = function (jid, feature) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.servicesInitialized$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(function (value) { return !!value; })).subscribe(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var service, _a, results, e_1;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 3, , 4]);
                            _a = this.resourceCache[jid];
                            if (_a) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.discoverServiceInformation(jid)];
                        case 1:
                            _a = (_b.sent());
                            _b.label = 2;
                        case 2:
                            service = _a;
                            if (!service) {
                                reject(new Error('no service found for jid ' + jid));
                            }
                            results = this.resourceCache[jid].features.filter(function (resource) { return resource.indexOf(feature) >= 0; });
                            resolve(results.length > 0);
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _b.sent();
                            reject(e_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    ServiceDiscoveryPlugin.prototype.findService = function (category, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.servicesInitialized$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(function (value) { return !!value; })).subscribe(function () {
                var results = _this.hostedServices.filter(function (service) {
                    return service.identities.filter(function (identity) { return identity.category === category && identity.type === type; }).length > 0;
                });
                if (results.length === 0) {
                    reject("no service matching category " + category + " and type " + type + " found!");
                }
                else if (results.length > 1) {
                    reject("multiple services matching category " + category + " and type " + type + " found! " + JSON.stringify(results));
                }
                else {
                    return resolve(results[0]);
                }
            });
        });
    };
    ServiceDiscoveryPlugin.prototype.discoverServices = function (mainDomain) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var serviceListResponse, serviceDomains, distinctServiceDomains, discoveredServices;
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.chatAdapter.chatConnectionService.sendIq(new QueryStanzaBuilder(ServiceDiscoveryPlugin.DISCO_ITEMS, this.chatAdapter.chatConnectionService.userJid.domain).toStanza())];
                    case 1:
                        serviceListResponse = _b.sent();
                        serviceDomains = serviceListResponse
                            .getChild('query')
                            .getChildren('item')
                            .map(function (itemNode) { return itemNode.attrs.jid; });
                        serviceDomains.push(mainDomain);
                        distinctServiceDomains = Object.keys(serviceDomains.reduce(function (previousValue, currentValue) {
                            previousValue[currentValue] = true;
                            return previousValue;
                        }, {}));
                        return [4 /*yield*/, Promise.all(distinctServiceDomains.map(function (serviceDomain) { return _this.discoverServiceInformation(serviceDomain); }))];
                    case 2:
                        discoveredServices = _b.sent();
                        (_a = this.hostedServices).push.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(discoveredServices));
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiceDiscoveryPlugin.prototype.discoverServiceInformation = function (serviceDomain) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var serviceInformationResponse, queryNode, features, serviceInformation;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.chatAdapter.chatConnectionService.sendIq(new QueryStanzaBuilder(ServiceDiscoveryPlugin.DISCO_INFO, serviceDomain).toStanza())];
                    case 1:
                        serviceInformationResponse = _a.sent();
                        queryNode = serviceInformationResponse.getChild('query');
                        features = queryNode.getChildren('feature').map(function (featureNode) { return featureNode.attrs.var; });
                        serviceInformation = {
                            identities: queryNode.getChildren('identity').map(function (identityNode) { return identityNode.attrs; }),
                            features: features,
                            jid: serviceInformationResponse.attrs.from
                        };
                        this.resourceCache[serviceInformationResponse.attrs.from] = serviceInformation;
                        return [2 /*return*/, serviceInformation];
                }
            });
        });
    };
    ServiceDiscoveryPlugin.DISCO_INFO = 'http://jabber.org/protocol/disco#info';
    ServiceDiscoveryPlugin.DISCO_ITEMS = 'http://jabber.org/protocol/disco#items';
    return ServiceDiscoveryPlugin;
}(_abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_5__["AbstractXmppPlugin"]));



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/unread-message-count.plugin.ts":
/*!********************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/unread-message-count.plugin.ts ***!
  \********************************************************************************************************/
/*! exports provided: UnreadMessageCountPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnreadMessageCountPlugin", function() { return UnreadMessageCountPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/message */ "./projects/proxym/ngx-chat/src/lib/core/message.ts");
/* harmony import */ var _core_utils_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/utils-array */ "./projects/proxym/ngx-chat/src/lib/core/utils-array.ts");
/* harmony import */ var _core_utils_object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/utils-object */ "./projects/proxym/ngx-chat/src/lib/core/utils-object.ts");
/* harmony import */ var _abstract_stanza_builder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../abstract-stanza-builder */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/abstract-stanza-builder.ts");
/* harmony import */ var _abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./abstract-xmpp-plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/abstract-xmpp-plugin.ts");









var STORAGE_NGX_CHAT_LAST_READ_DATE = 'ngxchat:unreadmessagedate';
var wrapperNodeName = 'entries';
var nodeName = 'last-read';
var LastReadEntriesNodeBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LastReadEntriesNodeBuilder, _super);
    function LastReadEntriesNodeBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lastReadNodes = [];
        return _this;
    }
    LastReadEntriesNodeBuilder.prototype.addLastReadNode = function (jid, date) {
        this.lastReadNodes.push(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])(nodeName, { jid: jid, date: date }));
    };
    LastReadEntriesNodeBuilder.prototype.toStanza = function () {
        return Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["xml"])(wrapperNodeName, {}, this.lastReadNodes);
    };
    return LastReadEntriesNodeBuilder;
}(_abstract_stanza_builder__WEBPACK_IMPORTED_MODULE_7__["AbstractStanzaBuilder"]));
/**
 * Unofficial plugin using XEP-0163 / PubSub to track count of unread messages per contact
 *
 * It publishes entries to a private PubSub-Node 'ngxchat:unreadmessagedate'
 * The stored elements look like this:
 * <item id="current">
 *     <entries>
 *         <last-read jid="user1@host1.tld" date="1546419050584"/>
 *         <last-read jid="user2@host1.tld" date="1546419050000"/>
 *     </entries>
 * </item>
 */
var UnreadMessageCountPlugin = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UnreadMessageCountPlugin, _super);
    function UnreadMessageCountPlugin(chatService, chatMessageListRegistry, publishSubscribePlugin) {
        var _this = _super.call(this) || this;
        _this.chatService = chatService;
        _this.chatMessageListRegistry = chatMessageListRegistry;
        _this.publishSubscribePlugin = publishSubscribePlugin;
        /**
         * emits as soon as the unread message count changes, you might want to debounce it with e.g. half a a second, as
         * new messages might be acknowledged in another session.
         */
        _this.jidToUnreadCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        _this.jidToLastReadDate = {};
        _this.chatMessageListRegistry.openChats$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return _this.chatService.state$.getValue() === 'online'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(0))
            .subscribe(function (contacts) {
            contacts.forEach(function (contact) {
                _this.jidToLastReadDate[contact.jidBare.toString()] = new Date();
                _this.updateContactUnreadMessageState(contact);
            });
            _this.persistLastSeenDates();
        });
        _this.chatService.message$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return _this.chatService.state$.getValue() === 'online'; }))
            .subscribe(function (contact) {
            if (_this.chatMessageListRegistry.isChatOpen(contact)) {
                _this.jidToLastReadDate[contact.jidBare.toString()] = new Date();
                _this.persistLastSeenDates();
            }
            _this.updateContactUnreadMessageState(contact);
        });
        _this.publishSubscribePlugin.publish$
            .subscribe(function (event) { return _this.handlePubSubEvent(event); });
        _this.unreadMessageCountSum$ = _this.jidToUnreadCount$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (jidToCount) { return Object(_core_utils_object__WEBPACK_IMPORTED_MODULE_6__["sum"])(Object(_core_utils_object__WEBPACK_IMPORTED_MODULE_6__["extractValues"])(jidToCount)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        return _this;
    }
    UnreadMessageCountPlugin.prototype.onBeforeOnline = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, _b, _c, jid, contact;
            var e_1, _d;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.fetchLastSeenDates()];
                    case 1:
                        _a.jidToLastReadDate = _e.sent();
                        try {
                            for (_b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(this.jidToLastReadDate)), _c = _b.next(); !_c.done; _c = _b.next()) {
                                jid = _c.value;
                                contact = this.chatService.getOrCreateContactById(jid);
                                this.updateContactUnreadMessageState(contact);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UnreadMessageCountPlugin.prototype.fetchLastSeenDates = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var entries;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.publishSubscribePlugin.retrieveNodeItems(STORAGE_NGX_CHAT_LAST_READ_DATE)];
                    case 1:
                        entries = _a.sent();
                        return [2 /*return*/, this.parseLastSeenDates(entries)];
                }
            });
        });
    };
    UnreadMessageCountPlugin.prototype.parseLastSeenDates = function (itemElement) {
        var e_2, _a;
        var result = {};
        if (itemElement.length === 1) {
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(itemElement[0].getChild(wrapperNodeName).getChildren(nodeName)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var lastReadEntry = _c.value;
                    var _d = lastReadEntry.attrs, jid = _d.jid, date = _d.date;
                    var parsedDate = new Date(+date);
                    if (!isNaN(parsedDate.getTime())) {
                        result[jid] = parsedDate;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return result;
    };
    UnreadMessageCountPlugin.prototype.onOffline = function () {
        this.jidToUnreadCount$.next({});
    };
    UnreadMessageCountPlugin.prototype.updateContactUnreadMessageState = function (contact) {
        var contactJid = contact.jidBare.toString();
        var date = this.jidToLastReadDate[contactJid] || new Date(0);
        var contactUnreadMessageCount = this.calculateUnreadMessageCount(contact, date);
        var jidToCount = this.jidToUnreadCount$.getValue();
        if (jidToCount[contactJid] !== contactUnreadMessageCount) {
            jidToCount[contactJid] = contactUnreadMessageCount;
            this.jidToUnreadCount$.next(jidToCount);
        }
    };
    UnreadMessageCountPlugin.prototype.calculateUnreadMessageCount = function (contact, date) {
        var firstUnreadMessageIndex = Object(_core_utils_array__WEBPACK_IMPORTED_MODULE_5__["findSortedInsertionIndexLast"])(date, contact.messages, function (message) { return message.datetime; });
        return contact.messages.slice(firstUnreadMessageIndex)
            .filter(function (message) { return message.direction === _core_message__WEBPACK_IMPORTED_MODULE_4__["Direction"].in; })
            .length;
    };
    UnreadMessageCountPlugin.prototype.persistLastSeenDates = function () {
        var lastReadNodeBuilder = new LastReadEntriesNodeBuilder();
        for (var jid in this.jidToLastReadDate) {
            if (this.jidToLastReadDate.hasOwnProperty(jid)) {
                var date = this.jidToLastReadDate[jid].getTime().toString();
                lastReadNodeBuilder.addLastReadNode(jid, date);
            }
        }
        this.publishSubscribePlugin.storePrivatePayloadPersistent(STORAGE_NGX_CHAT_LAST_READ_DATE, 'current', lastReadNodeBuilder.toStanza());
    };
    UnreadMessageCountPlugin.prototype.handlePubSubEvent = function (event) {
        var items = event.getChild('items');
        var itemsNode = items && items.attrs.node;
        var item = items && items.getChildren('item');
        if (itemsNode === STORAGE_NGX_CHAT_LAST_READ_DATE && item) {
            var publishedLastJidToDate = this.parseLastSeenDates(item);
            this.mergeJidToDates(publishedLastJidToDate);
        }
    };
    UnreadMessageCountPlugin.prototype.mergeJidToDates = function (newJidToDate) {
        for (var jid in newJidToDate) {
            if (!this.jidToLastReadDate[jid] || this.jidToLastReadDate[jid] < newJidToDate[jid]) {
                this.jidToLastReadDate[jid] = newJidToDate[jid];
                this.updateContactUnreadMessageState(this.chatService.getOrCreateContactById(jid));
            }
        }
    };
    return UnreadMessageCountPlugin;
}(_abstract_xmpp_plugin__WEBPACK_IMPORTED_MODULE_8__["AbstractXmppPlugin"]));



/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/xmpp-chat-adapter.service.ts":
/*!**********************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/xmpp-chat-adapter.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: XmppChatAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmppChatAdapter", function() { return XmppChatAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_contact_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/contact-avatar */ "./projects/proxym/ngx-chat/src/lib/core/contact-avatar.ts");
/* harmony import */ var _plugins_message_archive_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/message-archive.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message-archive.plugin.ts");
/* harmony import */ var _plugins_message_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugins/message.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/message.plugin.ts");
/* harmony import */ var _plugins_roster_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/roster.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/roster.plugin.ts");
/* harmony import */ var _xmpp_chat_connection_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./xmpp-chat-connection.service */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/xmpp-chat-connection.service.ts");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../log.service */ "./projects/proxym/ngx-chat/src/lib/services/log.service.ts");
/* harmony import */ var _contact_factory_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../contact-factory.service */ "./projects/proxym/ngx-chat/src/lib/services/contact-factory.service.ts");













var XmppChatAdapter = /** @class */ (function () {
    function XmppChatAdapter(chatConnectionService, logService, contactFactory) {
        var _this = this;
        this.chatConnectionService = chatConnectionService;
        this.logService = logService;
        this.contactFactory = contactFactory;
        this.message$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.messageSent$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.contacts$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.contactsSubscribed$ = this.contacts$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (contacts) { return contacts.filter(function (contact) { return contact.isSubscribed(); }); }));
        this.contactRequestsReceived$ = this.contacts$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (contacts) { return contacts.filter(function (contact) { return contact.pendingIn$.getValue(); }); }));
        this.contactRequestsSent$ = this.contacts$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (contacts) { return contacts.filter(function (contact) { return contact.pendingOut$.getValue(); }); }));
        this.contactsUnaffiliated$ = this.contacts$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (contacts) { return contacts.filter(function (contact) { return contact.isUnaffiliated() && contact.messages.length > 0; }); }));
        this.state$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('disconnected');
        this.plugins = [];
        this.enableDebugging = false;
        this.userAvatar$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](_core_contact_avatar__WEBPACK_IMPORTED_MODULE_5__["dummyAvatar"]);
        this.chatActions = [{
                id: 'sendMessage',
                cssClass: 'chat-window-send',
                html: '&raquo;',
                onClick: function (chatActionContext) {
                    chatActionContext.chatWindow.sendMessage();
                },
            }];
        this.state$.subscribe(function (state) { return _this.logService.info('state changed to:', state); });
        chatConnectionService.state$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (nextState) { return nextState !== _this.state$.getValue(); }))
            .subscribe(function (nextState) {
            _this.handleInternalStateChange(nextState);
        });
        this.chatConnectionService.stanzaUnknown$.subscribe(function (stanza) { return _this.onUnknownStanza(stanza); });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.messageSent$, this.message$).subscribe(function () {
            // re-emit contacts when sending or receiving a message to refresh contcat groups
            // if the sending contact was in 'other', he still is in other now, but passes the 'messages.length > 0' predicate, so that
            // he should be seen now.
            _this.contacts$.next(_this.contacts$.getValue());
        });
    }
    XmppChatAdapter.prototype.handleInternalStateChange = function (internalState) {
        var _this = this;
        if (internalState === 'online') {
            this.state$.next('connecting');
            Promise.all(this.plugins.map(function (plugin) { return plugin.onBeforeOnline(); }))
                .then(function () { return _this.announceAvailability(); }, function (e) {
                _this.logService.error('error while connecting', e);
                _this.announceAvailability();
            });
        }
        else {
            if (this.state$.getValue() === 'online') {
                // clear data the first time we transition to a not-online state
                this.onOffline();
            }
            this.state$.next('disconnected');
        }
    };
    XmppChatAdapter.prototype.onOffline = function () {
        var _this = this;
        this.contacts$.next([]);
        this.plugins.forEach(function (plugin) {
            try {
                plugin.onOffline();
            }
            catch (e) {
                _this.logService.error('error while handling offline in ', plugin);
            }
        });
    };
    XmppChatAdapter.prototype.announceAvailability = function () {
        this.logService.info('announcing availability');
        this.chatConnectionService.sendPresence();
        this.state$.next('online');
    };
    XmppChatAdapter.prototype.addPlugins = function (plugins) {
        var _this = this;
        plugins.forEach(function (plugin) {
            _this.plugins.push(plugin);
        });
    };
    XmppChatAdapter.prototype.reloadContacts = function () {
        this.getPlugin(_plugins_roster_plugin__WEBPACK_IMPORTED_MODULE_8__["RosterPlugin"]).refreshRosterContacts();
    };
    XmppChatAdapter.prototype.getContactById = function (jidPlain) {
        var bareJidToFind = Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_2__["jid"])(jidPlain).bare();
        return this.contacts$.getValue().find(function (contact) { return contact.jidBare.equals(bareJidToFind); });
    };
    XmppChatAdapter.prototype.getOrCreateContactById = function (jidPlain, name) {
        var contact = this.getContactById(jidPlain);
        if (!contact) {
            contact = this.contactFactory.createContact(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_2__["jid"])(jidPlain).bare().toString(), name);
            this.contacts$.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([contact], this.contacts$.getValue()));
        }
        return contact;
    };
    XmppChatAdapter.prototype.addContact = function (identifier) {
        this.getPlugin(_plugins_roster_plugin__WEBPACK_IMPORTED_MODULE_8__["RosterPlugin"]).addRosterContact(identifier);
    };
    XmppChatAdapter.prototype.removeContact = function (identifier) {
        this.getPlugin(_plugins_roster_plugin__WEBPACK_IMPORTED_MODULE_8__["RosterPlugin"]).removeRosterContact(identifier);
    };
    XmppChatAdapter.prototype.logIn = function (logInRequest) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.lastLogInRequest = logInRequest;
                        if (!(this.state$.getValue() === 'disconnected')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.chatConnectionService.logIn(logInRequest)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    XmppChatAdapter.prototype.logOut = function () {
        return this.chatConnectionService.logOut();
    };
    XmppChatAdapter.prototype.sendMessage = function (jid, body) {
        this.getPlugin(_plugins_message_plugin__WEBPACK_IMPORTED_MODULE_7__["MessagePlugin"]).sendMessage(jid, body);
        this.messageSent$.next(this.getOrCreateContactById(jid));
    };
    XmppChatAdapter.prototype.loadCompleteHistory = function () {
        return this.getPlugin(_plugins_message_archive_plugin__WEBPACK_IMPORTED_MODULE_6__["MessageArchivePlugin"]).loadAllMessages();
    };
    XmppChatAdapter.prototype.getPlugin = function (constructor) {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.plugins), _c = _b.next(); !_c.done; _c = _b.next()) {
                var plugin = _c.value;
                if (plugin.constructor === constructor) {
                    return plugin;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        throw new Error('plugin not found: ' + constructor);
    };
    XmppChatAdapter.prototype.onUnknownStanza = function (stanza) {
        var e_2, _a;
        var handled = false;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.plugins), _c = _b.next(); !_c.done; _c = _b.next()) {
                var plugin = _c.value;
                try {
                    if (plugin.handleStanza(stanza)) {
                        this.logService.debug(plugin.constructor.name, 'handled', stanza.toString());
                        handled = true;
                    }
                }
                catch (e) {
                    this.logService.error('error handling stanza in ', plugin.constructor.name, e);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (!handled) {
            this.logService.warn('unknown stanza <=', stanza.toString());
        }
    };
    XmppChatAdapter.prototype.reconnectSilently = function () {
        this.chatConnectionService.reconnectSilently();
    };
    XmppChatAdapter.prototype.reconnect = function () {
        return this.logIn(this.lastLogInRequest);
    };
    XmppChatAdapter.ɵfac = function XmppChatAdapter_Factory(t) { return new (t || XmppChatAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_xmpp_chat_connection_service__WEBPACK_IMPORTED_MODULE_9__["XmppChatConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_log_service__WEBPACK_IMPORTED_MODULE_10__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_contact_factory_service__WEBPACK_IMPORTED_MODULE_11__["ContactFactoryService"])); };
    XmppChatAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: XmppChatAdapter, factory: XmppChatAdapter.ɵfac });
    return XmppChatAdapter;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](XmppChatAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _xmpp_chat_connection_service__WEBPACK_IMPORTED_MODULE_9__["XmppChatConnectionService"] }, { type: _log_service__WEBPACK_IMPORTED_MODULE_10__["LogService"] }, { type: _contact_factory_service__WEBPACK_IMPORTED_MODULE_11__["ContactFactoryService"] }]; }, null); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/xmpp-chat-connection.service.ts":
/*!*************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/xmpp-chat-connection.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: XmppChatConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmppChatConnectionService", function() { return XmppChatConnectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../log.service */ "./projects/proxym/ngx-chat/src/lib/services/log.service.ts");
/* harmony import */ var _xmpp_client_factory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xmpp-client-factory.service */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/xmpp-client-factory.service.ts");







/**
 * Implementation of the XMPP specification according to RFC 6121.
 * @see https://xmpp.org/rfcs/rfc6121.html
 * @see https://xmpp.org/rfcs/rfc3920.html
 * @see https://xmpp.org/rfcs/rfc3921.html
 */
var XmppChatConnectionService = /** @class */ (function () {
    function XmppChatConnectionService(logService, ngZone, xmppClientFactoryService) {
        this.logService = logService;
        this.ngZone = ngZone;
        this.xmppClientFactoryService = xmppClientFactoryService;
        this.state$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('disconnected');
        this.stanzaUnknown$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.iqId = new Date().getTime();
        this.iqStanzaResponseCallbacks = {};
    }
    XmppChatConnectionService.prototype.onOnline = function (jid) {
        this.logService.info('online =', 'online as', jid.toString());
        this.userJid = jid;
        this.state$.next('online');
    };
    XmppChatConnectionService.prototype.sendPresence = function () {
        this.send(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_2__["xml"])('presence'));
    };
    XmppChatConnectionService.prototype.send = function (content) {
        this.logService.debug('>>>', content);
        try {
            return this.client.send(content);
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    XmppChatConnectionService.prototype.sendIq = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            request.attrs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: _this.getNextIqId(), from: _this.userJid.toString() }, request.attrs);
            var id = request.attrs.id;
            if (!request.attrs.type) {
                throw new Error('iq stanza without type: ' + request.toString());
            }
            _this.iqStanzaResponseCallbacks[id] = function (response) {
                if (response.attrs.type === 'result') {
                    resolve(response);
                }
                else {
                    reject(response);
                }
            };
            _this.send(request).then(function () { }, function (e) {
                _this.logService.error('error sending iq', e);
                delete _this.iqStanzaResponseCallbacks[id];
                reject(e);
            });
        });
    };
    XmppChatConnectionService.prototype.sendIqAckResult = function (id) {
        this.send(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_2__["xml"])('iq', { from: this.userJid.toString(), id: id, type: 'result' }));
    };
    XmppChatConnectionService.prototype.onStanzaReceived = function (stanza) {
        var handled = false;
        if (this.isIqStanzaResponse(stanza)) {
            var iqResponseCallback = this.iqStanzaResponseCallbacks[stanza.attrs.id];
            if (iqResponseCallback) {
                this.logService.debug('<<<', stanza.toString(), 'handled by callback', iqResponseCallback);
                delete this.iqStanzaResponseCallbacks[stanza.attrs.id];
                iqResponseCallback(stanza);
                handled = true;
            }
        }
        if (!handled) {
            this.stanzaUnknown$.next(stanza);
        }
    };
    XmppChatConnectionService.prototype.isIqStanzaResponse = function (stanza) {
        var stanzaType = stanza.attrs.type;
        return stanza.name === 'iq' && (stanzaType === 'result' || stanzaType === 'error');
    };
    XmppChatConnectionService.prototype.logIn = function (logInRequest) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ngZone.runOutsideAngular(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var _this = this;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (logInRequest.username.indexOf('@') >= 0) {
                                            this.logService.warn('username should not contain domain, only local part, this can lead to errors!');
                                        }
                                        this.client = this.xmppClientFactoryService.client(logInRequest);
                                        this.client.on('error', function (err) {
                                            _this.ngZone.run(function () {
                                                _this.logService.error('chat service error =>', err.toString(), err);
                                            });
                                        });
                                        this.client.on('status', function (status, value) {
                                            _this.ngZone.run(function () {
                                                _this.logService.info('status update =', status, value ? JSON.stringify(value) : '');
                                                if (status === 'offline') {
                                                    _this.state$.next('disconnected');
                                                }
                                            });
                                        });
                                        this.client.on('online', function (jid) {
                                            return _this.ngZone.run(function () {
                                                return _this.onOnline(jid);
                                            });
                                        });
                                        this.client.on('stanza', function (stanza) {
                                            _this.ngZone.run(function () {
                                                _this.onStanzaReceived(stanza);
                                            });
                                        });
                                        this.client.on('disconnect', function (stanza) {
                                            _this.ngZone.run(function () {
                                                _this.state$.next('reconnecting');
                                            });
                                        });
                                        return [4 /*yield*/, this.client.start()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    XmppChatConnectionService.prototype.logOut = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // TODO: move this to a presence plugin in a handler
                        this.logService.debug('logging out');
                        if (!this.client) return [3 /*break*/, 5];
                        this.client.reconnect.stop();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, this.send(Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_2__["xml"])('presence', { type: 'unavailable' }))];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _a.sent();
                        this.logService.error('error sending presence unavailable');
                        return [3 /*break*/, 5];
                    case 4:
                        this.client.stop();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    XmppChatConnectionService.prototype.getNextIqId = function () {
        return '' + this.iqId++;
    };
    XmppChatConnectionService.prototype.reconnectSilently = function () {
        this.logService.warn('hard reconnect...');
        this.state$.next('disconnected');
    };
    XmppChatConnectionService.ɵfac = function XmppChatConnectionService_Factory(t) { return new (t || XmppChatConnectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_xmpp_client_factory_service__WEBPACK_IMPORTED_MODULE_5__["XmppClientFactoryService"])); };
    XmppChatConnectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: XmppChatConnectionService, factory: XmppChatConnectionService.ɵfac });
    return XmppChatConnectionService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](XmppChatConnectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _xmpp_client_factory_service__WEBPACK_IMPORTED_MODULE_5__["XmppClientFactoryService"] }]; }, null); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/xmpp-client-factory.service.ts":
/*!************************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/xmpp-client-factory.service.ts ***!
  \************************************************************************************************/
/*! exports provided: XmppClientFactoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmppClientFactoryService", function() { return XmppClientFactoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xmpp/client */ "./node_modules/@xmpp/client/browser.js");
/* harmony import */ var _xmpp_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__);



var XmppClientFactoryService = /** @class */ (function () {
    function XmppClientFactoryService() {
    }
    XmppClientFactoryService.prototype.client = function (logInRequest) {
        return Object(_xmpp_client__WEBPACK_IMPORTED_MODULE_1__["client"])(logInRequest);
    };
    XmppClientFactoryService.ɵfac = function XmppClientFactoryService_Factory(t) { return new (t || XmppClientFactoryService)(); };
    XmppClientFactoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: XmppClientFactoryService, factory: XmppClientFactoryService.ɵfac });
    return XmppClientFactoryService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XmppClientFactoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/chat-background-notification.service.ts":
/*!*******************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/chat-background-notification.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: ChatBackgroundNotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBackgroundNotificationService", function() { return ChatBackgroundNotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _adapters_xmpp_plugins_multi_user_chat_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adapters/xmpp/plugins/multi-user-chat.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/multi-user-chat.plugin.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-service */ "./projects/proxym/ngx-chat/src/lib/services/chat-service.ts");





var ChatBackgroundNotificationService = /** @class */ (function () {
    function ChatBackgroundNotificationService(chatService) {
        var _this = this;
        this.chatService = chatService;
        this.enabled = false;
        chatService.message$.subscribe(function (msg) {
            _this.receivedDirectMessage(msg);
        });
        chatService.getPlugin(_adapters_xmpp_plugins_multi_user_chat_plugin__WEBPACK_IMPORTED_MODULE_2__["MultiUserChatPlugin"]).message$.subscribe(function (room) {
            _this.receivedGroupMessage(room);
        });
    }
    ChatBackgroundNotificationService.prototype.enable = function () {
        if (this.supportsNotification()) {
            this.requestNotificationPermission();
            this.enabled = true;
        }
    };
    ChatBackgroundNotificationService.prototype.disable = function () {
        this.enabled = false;
    };
    ChatBackgroundNotificationService.prototype.requestNotificationPermission = function () {
        var notification = Notification;
        notification.requestPermission();
    };
    ChatBackgroundNotificationService.prototype.receivedDirectMessage = function (contact) {
        if (this.shouldDisplayNotification()) {
            var notification_1 = new Notification(contact.name, { body: contact.mostRecentMessage.body, icon: contact.avatar });
            notification_1.addEventListener('click', function () {
                window.focus();
                notification_1.close();
            });
        }
    };
    ChatBackgroundNotificationService.prototype.receivedGroupMessage = function (room) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var message, sender, options, notification_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.shouldDisplayNotification()) return [3 /*break*/, 2];
                        message = room.mostRecentMessage.body;
                        sender = room.mostRecentMessage.from;
                        return [4 /*yield*/, this.customizeGroupMessage(sender, message, room)];
                    case 1:
                        options = _a.sent();
                        notification_2 = new Notification(room.name, options);
                        notification_2.addEventListener('click', function () {
                            window.focus();
                            notification_2.close();
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ChatBackgroundNotificationService.prototype.customizeGroupMessage = function (sender, message, room) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, { body: sender + ": " + message }];
            });
        });
    };
    ChatBackgroundNotificationService.prototype.shouldDisplayNotification = function () {
        var notification = Notification;
        return this.enabled
            && document.visibilityState === 'hidden'
            && this.supportsNotification()
            && notification.permission === 'granted';
    };
    ChatBackgroundNotificationService.prototype.supportsNotification = function () {
        return 'Notification' in window;
    };
    ChatBackgroundNotificationService.ɵfac = function ChatBackgroundNotificationService_Factory(t) { return new (t || ChatBackgroundNotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatServiceToken"])); };
    ChatBackgroundNotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChatBackgroundNotificationService, factory: ChatBackgroundNotificationService.ɵfac });
    return ChatBackgroundNotificationService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatBackgroundNotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatServiceToken"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/chat-list-state.service.ts":
/*!******************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/chat-list-state.service.ts ***!
  \******************************************************************************/
/*! exports provided: ChatWindowState, ChatListStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWindowState", function() { return ChatWindowState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListStateService", function() { return ChatListStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-service */ "./projects/proxym/ngx-chat/src/lib/services/chat-service.ts");






var ChatWindowState = /** @class */ (function () {
    function ChatWindowState(contact, isCollapsed) {
        this.contact = contact;
        this.isCollapsed = isCollapsed;
    }
    return ChatWindowState;
}());

/**
 * Used to open chat windows programmatically.
 */
var ChatListStateService = /** @class */ (function () {
    function ChatListStateService(chatService) {
        var _this = this;
        this.chatService = chatService;
        this.openChats$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.chatService.state$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (newState) { return newState === 'disconnected'; }))
            .subscribe(function () {
            _this.openChats$.next([]);
        });
        this.chatService.contactRequestsReceived$.subscribe(function (contacts) {
            var e_1, _a;
            try {
                for (var contacts_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(contacts), contacts_1_1 = contacts_1.next(); !contacts_1_1.done; contacts_1_1 = contacts_1.next()) {
                    var contact = contacts_1_1.value;
                    _this.openChat(contact);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (contacts_1_1 && !contacts_1_1.done && (_a = contacts_1.return)) _a.call(contacts_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }
    ChatListStateService.prototype.openChatCollapsed = function (contact) {
        if (!this.isChatWithContactOpen(contact)) {
            var openChats = this.openChats$.getValue();
            var chatWindow = new ChatWindowState(contact, true);
            var copyWithNewContact = [chatWindow].concat(openChats);
            this.openChats$.next(copyWithNewContact);
        }
    };
    ChatListStateService.prototype.openChat = function (contact) {
        this.openChatCollapsed(contact);
        this.findChatWindowStateByContact(contact).isCollapsed = false;
    };
    ChatListStateService.prototype.closeChat = function (contactToClose) {
        var openChats = this.openChats$.getValue();
        var index = this.findChatWindowStateIndexByContact(contactToClose);
        if (index >= 0) {
            var copyWithoutContact = openChats.slice();
            copyWithoutContact.splice(index, 1);
            this.openChats$.next(copyWithoutContact);
        }
    };
    ChatListStateService.prototype.isChatWithContactOpen = function (contact) {
        return this.findChatWindowStateIndexByContact(contact) >= 0;
    };
    ChatListStateService.prototype.findChatWindowStateIndexByContact = function (contact) {
        return this.openChats$.getValue()
            .findIndex(function (chatWindowState) { return chatWindowState.contact.equalsBareJid(contact); });
    };
    ChatListStateService.prototype.findChatWindowStateByContact = function (contact) {
        return this.openChats$.getValue()
            .find(function (chatWindowState) { return chatWindowState.contact.equalsBareJid(contact); });
    };
    ChatListStateService.ɵfac = function ChatListStateService_Factory(t) { return new (t || ChatListStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatServiceToken"])); };
    ChatListStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChatListStateService, factory: ChatListStateService.ɵfac });
    return ChatListStateService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatListStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatServiceToken"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/chat-message-list-registry.service.ts":
/*!*****************************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/chat-message-list-registry.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: ChatMessageListRegistryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageListRegistryService", function() { return ChatMessageListRegistryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



/**
 * Used to determine if a message component for a given contact is open.
 */
var ChatMessageListRegistryService = /** @class */ (function () {
    function ChatMessageListRegistryService() {
        this.openChats$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Set());
        this.contactToOpenMessageListCount = new Map();
    }
    ChatMessageListRegistryService.prototype.isChatOpen = function (contact) {
        return this.getOrDefault(contact, 0) > 0;
    };
    ChatMessageListRegistryService.prototype.incrementOpenWindowCount = function (contact) {
        this.contactToOpenMessageListCount.set(contact, this.getOrDefault(contact, 0) + 1);
        var openWindowSet = this.openChats$.getValue();
        openWindowSet.add(contact);
        this.openChats$.next(openWindowSet);
    };
    ChatMessageListRegistryService.prototype.decrementOpenWindowCount = function (contact) {
        var newValue = this.getOrDefault(contact, 0) - 1;
        if (newValue <= 0) {
            this.contactToOpenMessageListCount.set(contact, 0);
            var openWindowSet = this.openChats$.getValue();
            openWindowSet.delete(contact);
            this.openChats$.next(openWindowSet);
        }
        else {
            this.contactToOpenMessageListCount.set(contact, newValue);
        }
    };
    ChatMessageListRegistryService.prototype.getOrDefault = function (contact, defaultValue) {
        return this.contactToOpenMessageListCount.get(contact) || defaultValue;
    };
    ChatMessageListRegistryService.ɵfac = function ChatMessageListRegistryService_Factory(t) { return new (t || ChatMessageListRegistryService)(); };
    ChatMessageListRegistryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatMessageListRegistryService, factory: ChatMessageListRegistryService.ɵfac, providedIn: 'root' });
    return ChatMessageListRegistryService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMessageListRegistryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/chat-service.ts":
/*!*******************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/chat-service.ts ***!
  \*******************************************************************/
/*! exports provided: ChatServiceToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatServiceToken", function() { return ChatServiceToken; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");

var ChatServiceToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('pazznetworkNgxChatService');


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/contact-factory.service.ts":
/*!******************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/contact-factory.service.ts ***!
  \******************************************************************************/
/*! exports provided: ContactFactoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFactoryService", function() { return ContactFactoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/contact */ "./projects/proxym/ngx-chat/src/lib/core/contact.ts");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log.service */ "./projects/proxym/ngx-chat/src/lib/services/log.service.ts");




var ContactFactoryService = /** @class */ (function () {
    function ContactFactoryService(logService) {
        this.logService = logService;
    }
    ContactFactoryService.prototype.createContact = function (jidPlain, name, avatar) {
        if (!name) {
            name = jidPlain;
        }
        return new _core_contact__WEBPACK_IMPORTED_MODULE_1__["Contact"](jidPlain, name, this.logService, avatar);
    };
    ContactFactoryService.ɵfac = function ContactFactoryService_Factory(t) { return new (t || ContactFactoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"])); };
    ContactFactoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactFactoryService, factory: ContactFactoryService.ɵfac });
    return ContactFactoryService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactFactoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"] }]; }, null); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/log.service.ts":
/*!******************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/log.service.ts ***!
  \******************************************************************/
/*! exports provided: LogLevel, LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");



var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Disabled"] = 0] = "Disabled";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Warn"] = 2] = "Warn";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
var LogService = /** @class */ (function () {
    function LogService() {
        this.logLevel = LogLevel.Info;
        this.writer = console;
        this.messagePrefix = function () { return 'ChatService:'; };
    }
    LogService.prototype.error = function () {
        var _a;
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        if (this.logLevel >= LogLevel.Error) {
            (_a = this.writer).error.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([this.messagePrefix()], messages));
        }
    };
    LogService.prototype.warn = function () {
        var _a;
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        if (this.logLevel >= LogLevel.Warn) {
            (_a = this.writer).warn.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([this.messagePrefix()], messages));
        }
    };
    LogService.prototype.info = function () {
        var _a;
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        if (this.logLevel >= LogLevel.Info) {
            (_a = this.writer).info.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([this.messagePrefix()], messages));
        }
    };
    LogService.prototype.debug = function () {
        var _a;
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        if (this.logLevel >= LogLevel.Debug) {
            (_a = this.writer).log.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([this.messagePrefix()], messages));
        }
    };
    LogService.ɵfac = function LogService_Factory(t) { return new (t || LogService)(); };
    LogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LogService, factory: LogService.ɵfac });
    return LogService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./projects/proxym/ngx-chat/src/lib/services/socket.io.service.ts":
/*!************************************************************************!*\
  !*** ./projects/proxym/ngx-chat/src/lib/services/socket.io.service.ts ***!
  \************************************************************************/
/*! exports provided: SocketIOService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketIOService", function() { return SocketIOService; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var SocketIOService = /** @class */ (function () {
    function SocketIOService() {
        this.url = '/';
        this.connected = false;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0__(this.url);
    }
    SocketIOService.prototype.SetUserName = function (username) {
        var _this = this;
        this.socket.emit('add user', username);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on('logged-user', function (data) {
                _this.connected = true;
                observer.next(data);
            });
        });
    };
    SocketIOService.prototype.RemoveUser = function () {
        this.socket.emit('disconnect');
    };
    SocketIOService.prototype.BroadCastMessage = function (message) {
        this.socket.emit('new-broadcast-message', message);
    };
    SocketIOService.prototype.SendMessage = function (message, from, to) {
        //this.socket.emit('new-message', message);
        this.socket.emit('new-message', {
            toid: to,
            message: message,
            fromname: from
        });
    };
    SocketIOService.prototype.GetMessages = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on('new-message', function (message) {
                observer.next(message);
            });
        });
    };
    SocketIOService.prototype.GetConnectedUsers = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on('client-list', function (data) {
                observer.next(data);
            });
        });
    };
    /***
     * Section Video call
     * following requests are used for video call
     */
    SocketIOService.prototype.VideoCallRequest = function (from, to) {
        this.socket.emit('video-call', {
            fromname: from,
            toid: to
        });
    };
    SocketIOService.prototype.AudioCallRequest = function (from, to) {
        this.socket.emit('audio-call', {
            fromname: from,
            toid: to
        });
    };
    SocketIOService.prototype.OnVideoCallRequest = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on('video-call', function (data) {
                observer.next(data);
            });
        });
    };
    SocketIOService.prototype.OnAudioCallRequest = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on('audio-call', function (data) {
                observer.next(data);
            });
        });
    };
    SocketIOService.prototype.VideoCallAccepted = function (from, to) {
        this.socket.emit('video-call-accept', {
            fromname: from,
            toid: to
        });
    };
    SocketIOService.prototype.AudioCallAccepted = function (from, to) {
        this.socket.emit('audio-call-accept', {
            fromname: from,
            toid: to
        });
    };
    SocketIOService.prototype.OnVideoCallAccepted = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on('video-call-accept', function (data) {
                observer.next(data);
            });
        });
    };
    SocketIOService.prototype.OnAudioCallAccepted = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on('audio-call-accept', function (data) {
                observer.next(data);
            });
        });
    };
    SocketIOService.prototype.BusyNow = function () {
        this.socket.emit('busy-user');
    };
    SocketIOService.prototype.GetBusyUsers = function () {
        var _this = this;
        this.socket.emit('get-busy-user');
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on('get-busy-user', function (data) {
                observer.next(data);
            });
        });
    };
    SocketIOService.prototype.EndVideoCall = function (from, to, toname) {
        this.socket.emit('end-video-call', {
            fromname: from,
            toid: to,
            toname: toname
        });
    };
    SocketIOService.prototype.EndAudioCall = function (from, to, toname) {
        this.socket.emit('end-audio-call', {
            fromname: from,
            toid: to,
            toname: toname
        });
    };
    SocketIOService.prototype.OnVideoCallEnded = function () {
        var _this = this;
        this.socket.emit('get-busy-user');
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on('video-call-ended', function (data) {
                observer.next(data);
            });
        });
    };
    SocketIOService.prototype.OnAudioCallEnded = function () {
        var _this = this;
        this.socket.emit('get-busy-user');
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on('audio-call-ended', function (data) {
                observer.next(data);
            });
        });
    };
    SocketIOService.prototype.VideoCallRejected = function (from, to) {
        this.socket.emit('video-call-reject', {
            fromname: from,
            toid: to
        });
    };
    SocketIOService.prototype.OnVideoCallRejected = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on('video-call-reject', function (data) {
                observer.next(data);
            });
        });
    };
    SocketIOService.prototype.AudioCallRejected = function (from, to) {
        this.socket.emit('audio-call-reject', {
            fromname: from,
            toid: to
        });
    };
    SocketIOService.prototype.OnAudioCallRejected = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on('audio-call-reject', function (data) {
                observer.next(data);
            });
        });
    };
    /**
     *
     * @param candidate or @param description for video call
     * need to send remote user id
     */
    SocketIOService.prototype.SendCallRequest = function (val, type, uid) {
        var data;
        if (type == 'desc') {
            data = {
                toid: uid,
                desc: val
            };
        }
        else {
            data = {
                toid: uid,
                candidate: val
            };
        }
        this.socket.emit('call-request', data);
    };
    SocketIOService.prototype.ReceiveCallRequest = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on('call-request', function (data) {
                observer.next(data);
            });
        });
    };
    return SocketIOService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _projects_proxym_ngx_chat_src_lib_services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects/proxym/ngx-chat/src/lib/services/chat-service */ "./projects/proxym/ngx-chat/src/lib/services/chat-service.ts");
/* harmony import */ var _projects_proxym_ngx_chat_src_lib_services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projects/proxym/ngx-chat/src/lib/services/log.service */ "./projects/proxym/ngx-chat/src/lib/services/log.service.ts");
/* harmony import */ var _projects_proxym_ngx_chat_src_lib_services_adapters_xmpp_plugins_multi_user_chat_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/multi-user-chat.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/multi-user-chat.plugin.ts");
/* harmony import */ var _projects_proxym_ngx_chat_src_lib_services_adapters_xmpp_plugins_registration_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/registration.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/registration.plugin.ts");
/* harmony import */ var _projects_proxym_ngx_chat_src_lib_services_adapters_xmpp_plugins_unread_message_count_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/unread-message-count.plugin */ "./projects/proxym/ngx-chat/src/lib/services/adapters/xmpp/plugins/unread-message-count.plugin.ts");
/* harmony import */ var _projects_proxym_ngx_chat_src_lib_services_contact_factory_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../projects/proxym/ngx-chat/src/lib/services/contact-factory.service */ "./projects/proxym/ngx-chat/src/lib/services/contact-factory.service.ts");
/* harmony import */ var _projects_proxym_ngx_chat_src_lib_services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../projects/proxym/ngx-chat/src/lib/services/chat-list-state.service */ "./projects/proxym/ngx-chat/src/lib/services/chat-list-state.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");
/* harmony import */ var projects_proxym_ngx_chat_src_lib_services_socket_io_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! projects/proxym/ngx-chat/src/lib/services/socket.io.service */ "./projects/proxym/ngx-chat/src/lib/services/socket.io.service.ts");
/* harmony import */ var _projects_proxym_ngx_chat_src_lib_services_chat_background_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../projects/proxym/ngx-chat/src/lib/services/chat-background-notification.service */ "./projects/proxym/ngx-chat/src/lib/services/chat-background-notification.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _projects_proxym_ngx_chat_src_lib_components_chat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../projects/proxym/ngx-chat/src/lib/components/chat.component */ "./projects/proxym/ngx-chat/src/lib/components/chat.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");

















function AppComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "This page will be replaced by your application login page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "This page will be replaced by your application home page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_div_3_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r181); var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r180.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_div_3_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r181); var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r182.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r177.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r177.password);
} }
function AppComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r184); var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r183.onLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r186 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r186); var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r185.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(chatService, contactFactory, logService, chatListStateService, snackBar, socketIOService, chatBackgroundNotificationService) {
        var _this = this;
        this.chatService = chatService;
        this.contactFactory = contactFactory;
        this.logService = logService;
        this.chatListStateService = chatListStateService;
        this.snackBar = snackBar;
        this.socketIOService = socketIOService;
        this.slidesList = new Array(5);
        this.showContent = false;
        // public listKeyManager: ListKeyManager<any>;
        this.timings = '300ms ease-in';
        this.autoplay = true;
        this.interval = 4000;
        this.loop = true;
        this.hideArrows = true;
        this.hideIndicators = false;
        // public color: ThemePalette = 'accent';
        this.maxWidth = 'auto';
        this.proportion = 10;
        this.logi = false;
        this.hide = true;
        this.images = [
            {
                image: 'assets/video_call.png',
            }
        ];
        this.slides = this.chunk(this.images, 3);
        this.hideOverlay = false;
        this.useKeyboard = true;
        this.useMouseWheel = false;
        this.orientation = 'ltr';
        this.log = [];
        var contactData = JSON.parse(localStorage.getItem('data')) || {};
        this.logService.logLevel = _projects_proxym_ngx_chat_src_lib_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Debug;
        this.domain = contactData.domain;
        this.service = contactData.service;
        this.password = contactData.password;
        this.username = contactData.username;
        this.chatService.state$.subscribe(function (state) { return _this.stateChanged(state); });
        this.multiUserChatPlugin = this.chatService.getPlugin(_projects_proxym_ngx_chat_src_lib_services_adapters_xmpp_plugins_multi_user_chat_plugin__WEBPACK_IMPORTED_MODULE_4__["MultiUserChatPlugin"]);
        this.unreadMessageCountPlugin = this.chatService.getPlugin(_projects_proxym_ngx_chat_src_lib_services_adapters_xmpp_plugins_unread_message_count_plugin__WEBPACK_IMPORTED_MODULE_6__["UnreadMessageCountPlugin"]);
        chatBackgroundNotificationService.enable();
        // @ts-ignore
        window.chatService = chatService;
    }
    AppComponent.prototype.onChange = function (index) {
        this.log.push("MatCarousel#change emitted with index " + index);
    };
    /* public get currentIndex(): number {
         if (this.listKeyManager) {
             return this.listKeyManager.activeItemIndex;
         }

         return 0;
     }*/
    AppComponent.prototype.chunk = function (arr, chunkSize) {
        var R = [];
        for (var i = 0, len = arr.length; i < len; i += chunkSize) {
            R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    };
    AppComponent.prototype.AddUser = function () {
        this.socketIOService.SetUserName(this.loggedUserName)
            .subscribe(function (data) {
            if (data.username) {
                // user added
            }
        });
    };
    AppComponent.prototype.onLogin = function () {
        var logInRequest = {
            domain: 'localhost',
            service: 'wss://192.168.43.120:5280/xmpp',
            password: this.password,
            username: this.username,
        };
        localStorage.clear();
        sessionStorage.clear();
        localStorage.setItem('data', JSON.stringify(logInRequest));
        sessionStorage.setItem('username', this.username);
        this.chatService.logIn(logInRequest);
        this.loggedUserName = sessionStorage.getItem('username');
        this.AddUser();
        this.logi = true;
    };
    AppComponent.prototype.onLogout = function () {
        this.chatService.logOut();
        this.socketIOService.RemoveUser();
        sessionStorage.clear();
        localStorage.clear();
        this.logi = false;
        //location.reload();
    };
    AppComponent.prototype.Logout = function () {
        this.socketIOService.RemoveUser();
        sessionStorage.clear();
        localStorage.clear();
        location.reload();
    };
    AppComponent.prototype.onRegister = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.registrationMessage = 'registering ...';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.chatService.getPlugin(_projects_proxym_ngx_chat_src_lib_services_adapters_xmpp_plugins_registration_plugin__WEBPACK_IMPORTED_MODULE_5__["RegistrationPlugin"]).register(this.username, this.password, this.service, this.domain)];
                    case 2:
                        _a.sent();
                        this.registrationMessage = 'registration successful';
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.registrationMessage = 'registration failed: ' + e_1.toString();
                        throw e_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.onAddContact = function () {
        this.chatService.addContact(this.otherJid);
    };
    AppComponent.prototype.onRemoveContact = function () {
        this.chatService.removeContact(this.otherJid);
    };
    AppComponent.prototype.onOpenChat = function () {
        this.chatListStateService.openChat(this.chatService.getOrCreateContactById(this.otherJid));
    };
    AppComponent.prototype.stateChanged = function (state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                console.log('state changed!', state);
                return [2 /*return*/];
            });
        });
    };
    AppComponent.prototype.onReconnect = function () {
        this.chatService.reconnect();
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_projects_proxym_ngx_chat_src_lib_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatServiceToken"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_projects_proxym_ngx_chat_src_lib_services_contact_factory_service__WEBPACK_IMPORTED_MODULE_7__["ContactFactoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_projects_proxym_ngx_chat_src_lib_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_projects_proxym_ngx_chat_src_lib_services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_8__["ChatListStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](projects_proxym_ngx_chat_src_lib_services_socket_io_service__WEBPACK_IMPORTED_MODULE_10__["SocketIOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_projects_proxym_ngx_chat_src_lib_services_chat_background_notification_service__WEBPACK_IMPORTED_MODULE_11__["ChatBackgroundNotificationService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 5, consts: [[1, "container"], [4, "ngIf"], ["name", "login", 3, "click", 4, "ngIf"], ["name", "logout", 3, "click", 4, "ngIf"], ["rosterState", "shown"], [1, "form-group"], ["name", "username", "placeholder", "username", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "password", "type", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "login", 3, "click"], ["name", "logout", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_p_1_Template, 2, 0, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_p_2_Template, 2, 0, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_div_3_Template, 11, 2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_button_5_Template, 2, 0, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_button_6_Template, 2, 0, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ngx-chat", 4);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.logi == false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.logi);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.logi == false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.logi == false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.logi);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _projects_proxym_ngx_chat_src_lib_components_chat_component__WEBPACK_IMPORTED_MODULE_13__["ChatComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_projects_proxym_ngx_chat_src_lib_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatServiceToken"]]
            }] }, { type: _projects_proxym_ngx_chat_src_lib_services_contact_factory_service__WEBPACK_IMPORTED_MODULE_7__["ContactFactoryService"] }, { type: _projects_proxym_ngx_chat_src_lib_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"] }, { type: _projects_proxym_ngx_chat_src_lib_services_chat_list_state_service__WEBPACK_IMPORTED_MODULE_8__["ChatListStateService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }, { type: projects_proxym_ngx_chat_src_lib_services_socket_io_service__WEBPACK_IMPORTED_MODULE_10__["SocketIOService"] }, { type: _projects_proxym_ngx_chat_src_lib_services_chat_background_notification_service__WEBPACK_IMPORTED_MODULE_11__["ChatBackgroundNotificationService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _projects_proxym_ngx_chat_src_lib_ngx_chat_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projects/proxym/ngx-chat/src/lib/ngx-chat.module */ "./projects/proxym/ngx-chat/src/lib/ngx-chat.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngmodule/material-carousel */ "./node_modules/@ngmodule/material-carousel/__ivy_ngcc__/fesm5/ngmodule-material-carousel.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _projects_proxym_ngx_chat_src_lib_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../projects/proxym/ngx-chat/src/lib/components/icons/icons.module */ "./projects/proxym/ngx-chat/src/lib/components/icons/icons.module.ts");
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ "./node_modules/@ctrl/ngx-emoji-mart/__ivy_ngcc__/fesm5/ctrl-ngx-emoji-mart.js");
/* harmony import */ var mat_video__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! mat-video */ "./node_modules/mat-video/__ivy_ngcc__/fesm5/mat-video.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _projects_proxym_ngx_chat_src_lib_ngx_chat_module__WEBPACK_IMPORTED_MODULE_5__["NgxChatModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([]),
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_10__["MatCarouselModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["WavesModule"],
                _projects_proxym_ngx_chat_src_lib_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_12__["IconsModule"],
                _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_13__["PickerModule"],
                mat_video__WEBPACK_IMPORTED_MODULE_14__["MatVideoModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _projects_proxym_ngx_chat_src_lib_ngx_chat_module__WEBPACK_IMPORTED_MODULE_5__["NgxChatModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_10__["MatCarouselModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["WavesModule"],
        _projects_proxym_ngx_chat_src_lib_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_12__["IconsModule"],
        _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_13__["PickerModule"],
        mat_video__WEBPACK_IMPORTED_MODULE_14__["MatVideoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _projects_proxym_ngx_chat_src_lib_ngx_chat_module__WEBPACK_IMPORTED_MODULE_5__["NgxChatModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([]),
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                    _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_10__["MatCarouselModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["WavesModule"],
                    _projects_proxym_ngx_chat_src_lib_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_12__["IconsModule"],
                    _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_13__["PickerModule"],
                    mat_video__WEBPACK_IMPORTED_MODULE_14__["MatVideoModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/assets/accep.png":
/*!******************************!*\
  !*** ./src/assets/accep.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "accep.png";

/***/ }),

/***/ "./src/assets/available.png":
/*!**********************************!*\
  !*** ./src/assets/available.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "available.png";

/***/ }),

/***/ "./src/assets/away.png":
/*!*****************************!*\
  !*** ./src/assets/away.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "away.png";

/***/ }),

/***/ "./src/assets/click.png":
/*!******************************!*\
  !*** ./src/assets/click.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "click.png";

/***/ }),

/***/ "./src/assets/decli.png":
/*!******************************!*\
  !*** ./src/assets/decli.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "decli.png";

/***/ }),

/***/ "./src/assets/dnd.png":
/*!****************************!*\
  !*** ./src/assets/dnd.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dnd.png";

/***/ }),

/***/ "./src/assets/file.png":
/*!*****************************!*\
  !*** ./src/assets/file.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "file.png";

/***/ }),

/***/ "./src/assets/file_attach.png":
/*!************************************!*\
  !*** ./src/assets/file_attach.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "file_attach.png";

/***/ }),

/***/ "./src/assets/received.png":
/*!*********************************!*\
  !*** ./src/assets/received.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "received.png";

/***/ }),

/***/ "./src/assets/seen.png":
/*!*****************************!*\
  !*** ./src/assets/seen.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "seen.png";

/***/ }),

/***/ "./src/assets/sent.png":
/*!*****************************!*\
  !*** ./src/assets/sent.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sent.png";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/anis/Bureau/Proxym-PFE/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!***************************!*\
  !*** ./lib/dns (ignored) ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map