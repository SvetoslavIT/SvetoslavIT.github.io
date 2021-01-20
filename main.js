(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DoomRider\Desktop\za vuicho\psychology-app\src\main.ts */"zUnb");


/***/ }),

/***/ "2ZvQ":
/*!********************************************!*\
  !*** ./src/app/videos/videos.component.ts ***!
  \********************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/video.service */ "nE/I");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation/navigation.component */ "k5x5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");







function VideosComponent_iframe_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 4);
} if (rf & 2) {
    const url_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.generateUrl(url_r1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
const _c0 = function (a1) { return { itemsPerPage: 3, currentPage: a1 }; };
class VideosComponent {
    constructor(videos, sanitizer) {
        this.videos = videos;
        this.sanitizer = sanitizer;
        this.page = 1;
    }
    ngOnInit() {
        this.videos.all().subscribe(videos => {
            this.currentVideos = videos;
        });
    }
    generateUrl(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${url}`);
    }
}
VideosComponent.ɵfac = function VideosComponent_Factory(t) { return new (t || VideosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
VideosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideosComponent, selectors: [["app-videos"]], decls: 6, vars: 6, consts: [[1, "nav-background"], [1, "content"], ["frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src", 4, "ngFor", "ngForOf"], [3, "pageChange"], ["frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"]], template: function VideosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VideosComponent_iframe_3_Template, 1, 1, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "pagination-controls", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function VideosComponent_Template_pagination_controls_pageChange_5_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx.currentVideos, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.page)));
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]], styles: [".nav-background[_ngcontent-%COMP%] {\r\n    background-color: rgb(183, 219, 231);\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    padding: 20px 40px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\niframe[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n    height: 500px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    iframe[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoidmlkZW9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MywgMjE5LCAyMzEpO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuaWZyYW1lIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICBpZnJhbWUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-videos',
                templateUrl: './videos.component.html',
                styleUrls: ['./videos.component.css']
            }]
    }], function () { return [{ type: _services_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/navigation.component */ "k5x5");



class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 30, vars: 0, consts: [[1, "nav-background"], [1, "container"], [1, "context"], [1, "bold"], [1, "image-wapper"], ["src", "./assets/images/photo.jpg", "alt", "photo", 1, "photo-img"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041A\u0430\u0437\u0432\u0430\u043C \u0441\u0435 \u0410\u0441\u0435\u043D \u0410\u043D\u0433\u0435\u043B\u043E\u0432 \u0438 \u0441\u044A\u043C \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433. \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043B \u0441\u044A\u043C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0431\u0438\u0437\u043D\u0435\u0441 \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u044F, \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u0447\u043D\u043E \u043A\u043E\u043D\u0441\u0443\u043B\u0442\u0438\u0440\u0430\u043D\u0435 \u0438 \u0442\u0435\u0440\u0430\u043F\u0438\u044F. \u041A\u043E\u0433\u043D\u0438\u0442\u0438\u0432\u043D\u043E-\u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0447\u0435\u0441\u043A\u0430 \u0438 \u0441\u0445\u0435\u043C\u0430 \u0442\u0435\u0440\u0430\u043F\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0441\u0430 \u043C\u0435\u0442\u043E\u0434\u0438\u043A\u0438\u0442\u0435, \u0441 \u043A\u043E\u0438\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044F. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0423\u0447\u0430\u0441\u0442\u0432\u0430\u043B \u0441\u044A\u043C \u0432 \u0440\u0435\u0434\u0438\u0446\u0430 \u0441\u0435\u043C\u0438\u043D\u0430\u0440\u0438 \u0438 \u043A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u0438 \u043D\u0430 \u0432\u0441\u0438\u0447\u043A\u0438 \u043D\u0438\u0432\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041A\u043E\u0443\u0447\u0438\u043D\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0420\u0435\u0448\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0413\u0440\u0443\u043F\u043E\u0432\u0430 \u0434\u0438\u043D\u0430\u043C\u0438\u043A\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u041A\u0440\u0438\u0437\u0438 \u0432 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435\u0442\u043E \u043D\u0430 \u0434\u0435\u0446\u0430\u0442\u0430 \u0438 \u0437\u0440\u0435\u043B\u0438\u0442\u0435 \u0445\u043E\u0440\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u0434\u0435\u0446\u0430 \u0441 \u043C\u0435\u043D\u0442\u0430\u043B\u043D\u0438 \u0437\u0430\u0442\u0440\u0443\u0434\u043D\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0417\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438, \u0434\u0435\u043F\u0440\u0435\u0441\u0438\u0438, \u0441\u0435\u043C\u0435\u0439\u043D\u0430 \u0442\u0435\u0440\u0430\u043F\u0438\u044F \u0438 \u0434\u0440.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B \u043F\u043E \u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u041A\u044A\u043C \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u0438\u043C\u0430\u043C \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u0447\u043D\u0438 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0438 \u0432 \u041F\u043B\u043E\u0432\u0434\u0438\u0432 \u0438 \u0410\u0441\u0435\u043D\u043E\u0432\u0433\u0440\u0430\u0434.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"]], styles: [".nav-background[_ngcontent-%COMP%] {\r\n    background-color: rgb(183, 219, 231);\r\n}\r\n\r\n.bold[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    padding: 30px 50px 0 50px;\r\n}\r\n\r\n.context[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    padding-left: 20px;\r\n}\r\n\r\n.context[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\nli[_ngcontent-%COMP%]::marker {\r\n    color: lightblue;\r\n    font-size: 30px;\r\n    padding: 0;\r\n}\r\n\r\n.image-wapper[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n}\r\n\r\n.photo-img[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n    }\r\n    .image-wapper[_ngcontent-%COMP%] {\r\n        order: -1;\r\n        width: 100%;\r\n    }\r\n    .photo-img[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksU0FBUztRQUNULFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgzLCAyMTksIDIzMSk7XHJcbn1cclxuXHJcbi5ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHBhZGRpbmc6IDMwcHggNTBweCAwIDUwcHg7XHJcbn1cclxuXHJcbi5jb250ZXh0IHVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLmNvbnRleHQgdWwgbGkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5saTo6bWFya2VyIHtcclxuICAgIGNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaW1hZ2Utd2FwcGVyIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5waG90by1pbWcge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLmltYWdlLXdhcHBlciB7XHJcbiAgICAgICAgb3JkZXI6IC0xO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnBob3RvLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/navigation.component */ "k5x5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 46, vars: 0, consts: [["src", "./assets/images/start-office.jpg", "alt", "welcome", 1, "header-img"], [1, "content"], [1, "phone-call"], ["href", "tel:+359876974572", 1, "real-phone"], ["href", "tel:+359876974572"], ["src", "https://www.flaticon.com/svg/static/icons/svg/217/217887.svg", "alt", "phone-icon", 1, "phone-img"], [1, "resume"], [1, "image-wapper"], ["src", "./assets/images/photo.jpg", "alt", "photo"], ["routerLink", "/about"], [1, "info"], [1, "bold"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0435\u0432\u0442\u0438\u0447\u0435\u043D \u043A\u0430\u0431\u0438\u043D\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0410\u0441\u0435\u043D \u0410\u043D\u0433\u0435\u043B\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041F\u0441\u0438\u0445\u043E\u043B\u043E\u0433 \u0441\u044A\u0441 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0442\u0430 \u043D\u0430 \u0431\u0438\u0437\u043D\u0435\u0441 \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u044F, \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u0447\u043D\u043E \u043A\u043E\u043D\u0441\u0443\u043B\u0442\u0438\u0440\u0430\u043D\u0435 \u0438 \u0442\u0435\u0440\u0430\u043F\u0438\u044F.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0417\u0430\u043F\u0430\u0437\u0438 \u0447\u0430\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "+359876974572");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0414\u043E\u0431\u0440\u0435 \u0434\u043E\u0448\u043B\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u041A\u0430\u0437\u0432\u0430\u043C \u0441\u0435 \u0410\u0441\u0435\u043D \u0410\u043D\u0433\u0435\u043B\u043E\u0432 \u0438 \u0441\u044A\u043C \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433. \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043B \u0441\u044A\u043C \u0431\u0438\u0437\u043D\u0435\u0441 \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u044F, \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u0447\u043D\u043E \u043A\u043E\u043D\u0441\u0443\u043B\u0442\u0438\u0440\u0430\u043D\u0435 \u0438 \u0442\u0435\u0440\u0430\u043F\u0438\u044F. \u041A\u043E\u0433\u043D\u0438\u0442\u0438\u0432\u043D\u043E-\u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0447\u0435\u0441\u043A\u0430 \u0438 \u0441\u0445\u0435\u043C\u0430 \u0442\u0435\u0440\u0430\u043F\u0438\u044F \u0441\u0430 \u043C\u0435\u0442\u043E\u0434\u0438\u043A\u0438\u0442\u0435, \u0441 \u043A\u043E\u0438\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044F. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u041D\u0430\u0443\u0447\u0435\u0442\u0435 \u043F\u043E\u0432\u0435\u0447\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0417\u0430\u0449\u043E \u0441\u044A\u043C \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u0412\u044F\u0440\u0432\u0430\u043C, \u0447\u0435 \u0445\u043E\u0440\u0430\u0442\u0430 \u043C\u043E\u0433\u0430\u0442 \u0434\u0430 \u043F\u043E\u0441\u0442\u0438\u0433\u043D\u0430\u0442 \u0438\u0441\u0442\u0438\u043D\u0441\u043A\u0438\u044F \u0441\u0438 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u0438 \u0434\u0430 \u0441\u0435 \u0447\u0443\u0432\u0441\u0442\u0432\u0430\u0442 \u0434\u043E\u0431\u0440\u0435 \u0432 \u043A\u043E\u0436\u0430\u0442\u0430 \u0441\u0438, \u0441\u0442\u0438\u0433\u0430 \u0434\u0430 \u0437\u043D\u0430\u044F\u0442 \u043A\u0430\u043A. \u041C\u043D\u043E\u0433\u043E \u0447\u0435\u0441\u0442\u043E \u0441\u0435 \u0441\u043B\u0443\u0447\u0432\u0430 \u0434\u0430 \u043C\u0438\u0441\u043B\u0438\u043C, \u0447\u0435 \u0442\u043E\u0432\u0430, \u0432 \u043A\u043E\u0435\u0442\u043E \u0432\u044F\u0440\u0432\u0430\u043C\u0435 \u0435 \u0438\u0441\u0442\u0438\u043D\u0430, \u0437\u0430\u0449\u043E\u0442\u043E \u0432\u044F\u0440\u0432\u0430\u043C\u0435 \u0432 \u043D\u0435\u0433\u043E. \u0422\u043E\u0432\u0430 \u0435 \u0435\u0434\u043D\u043E \u043E\u0442 \u043A\u043E\u0433\u043D\u0438\u0442\u0438\u0432\u043D\u0438\u0442\u0435 \u0438\u0437\u043A\u0440\u0438\u0432\u044F\u0432\u0430\u043D\u0438\u044F, \u043A\u043E\u0438\u0442\u043E \u043D\u0438 \u043F\u0440\u0435\u0447\u0430\u0442 \u0434\u0430 \u043F\u043E\u0441\u0442\u0438\u0433\u0430\u043C\u0435 \u0446\u0435\u043B\u0438\u0442\u0435 \u0441\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u0412\u044F\u0440\u0432\u0430\u043C, \u0447\u0435 \u043A\u043E\u0433\u0430\u0442\u043E \u0447\u043E\u0432\u0435\u043A \u0432\u0438\u0436\u0434\u0430 \u043D\u0435\u0449\u0430\u0442\u0430 \u044F\u0441\u043D\u043E \u043C\u043E\u0436\u0435 \u0434\u0430 \u0441\u0442\u0438\u0433\u043D\u0435 \u0442\u0430\u043C, \u043A\u044A\u0434\u0435\u0442\u043E \u0438\u0441\u043A\u0430, \u0434\u0430 \u0431\u044A\u0434\u0435 \u0449\u0430\u0441\u0442\u043B\u0438\u0432 \u0438 \u0434\u0430 \u043F\u0440\u0430\u0432\u0438 \u0441\u0432\u0435\u0442\u0430 \u043F\u043E-\u0434\u043E\u0431\u044A\u0440. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u041A\u0430\u043A \u043C\u043E\u0433\u0430 \u0434\u0430 \u043F\u043E\u043C\u043E\u0433\u043D\u0430?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u041A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0438\u0438\u0442\u0435 \u043C\u0438 \u0441\u0430 \u0434\u0430 \u0441\u043B\u0443\u0448\u0430\u043C \u0438 \u0447\u0443\u0432\u0430\u043C \u0442\u043E\u0432\u0430, \u043A\u043E\u0435\u0442\u043E \u043D\u0435 \u0441\u0435 \u043A\u0430\u0437\u0432\u0430, \u0434\u0430 \u043D\u0430\u043C\u0438\u0440\u0430\u043C \u0441\u043A\u0440\u0438\u0442\u0438\u0442\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438 \u0438 \u0434\u0430 \u0433\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0432\u0430\u043C\u0435 \u0437\u0430\u0435\u0434\u043D\u043E \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0438\u0442\u0435 \u043C\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u041A\u0430\u043A\u0432\u043E \u043F\u0440\u0430\u0432\u044F?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u041A\u043E\u0433\u0430\u0442\u043E \u0447\u043E\u0432\u0435\u043A \u0438\u043C\u0430 \u043F\u0440\u043E\u0431\u043B\u0435\u043C, \u043D\u0438\u0449\u043E \u0434\u0440\u0443\u0433\u043E \u043D\u0435 \u0432\u044A\u0440\u0432\u0438 \u0434\u043E\u0431\u0440\u0435. \u041A\u0430\u043A\u0442\u043E \u0438\u043C\u0430 \u043B\u0435\u043A\u0430\u0440\u0438, \u043A\u043E\u0438\u0442\u043E \u043F\u043E\u043C\u0430\u0433\u0430\u0442 \u043D\u0430 \u0445\u043E\u0440\u0430\u0442\u0430 \u043F\u0440\u0438 \u0444\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u0447\u043D\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, \u0442\u0430\u043A\u0430 \u0438 \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0437\u0438\u0442\u0435 \u043F\u043E\u043C\u0430\u0433\u0430\u0442 \u0434\u0430 \u0441\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0442 \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u0447\u043D\u0438 \u0442\u0430\u043A\u0438\u0432\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0417\u0430\u0449\u043E \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0435 \u0442\u0440\u0443\u0434\u043D\u043E, \u043A\u043E\u0433\u0430\u0442\u043E \u043C\u043E\u0436\u0435 \u0434\u0430 \u0435 \u043B\u0435\u0441\u043D\u043E?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n}\r\n\r\n.header-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    z-index: -1;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    margin: 12vh 50px 20px 50px;\r\n    max-width: 40%;\r\n    background-color: rgba(255, 255, 255, 0.7);\r\n    border-radius: 5px;\r\n    padding: 0 10px;\r\n    color: black;\r\n    word-break: keep-all;\r\n    height: auto;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-weight: 500;\r\n}\r\n\r\n.phone-img[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n}\r\n\r\n.phone-call[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n    align-self: flex-end;\r\n    margin: 0 50px;\r\n    margin-right: 35px;\r\n    padding: 30px;\r\n    background-color: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n.phone-call[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    font-size: 23px;\r\n    font-weight: 800;\r\n}\r\n\r\n.phone-call[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    margin-top: -20px;\r\n    margin-left: -192px;\r\n}\r\n\r\n.real-phone[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n}\r\n\r\n.resume[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    padding: 50px 0 0 50px;\r\n}\r\n\r\n.resume[_ngcontent-%COMP%]   div.image-wapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    border-radius: 15%;\r\n}\r\n\r\n.resume[_ngcontent-%COMP%]   div.image-wapper[_ngcontent-%COMP%] {\r\n    margin-right: 50px;\r\n}\r\n\r\n.resume[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    margin-top: 0;\r\n}\r\n\r\n.resume[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n}\r\n\r\n.resume[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: darkblue;\r\n    font-size: 18px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n    padding: 0 30px;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n}\r\n\r\nli[_ngcontent-%COMP%]::marker {\r\n    color: lightblue;\r\n    font-size: 30px;\r\n    padding: 0;\r\n}\r\n\r\nspan.bold[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n}\r\n\r\n@media (max-width: 750px) {\r\n    header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n    }\r\n\r\n    .phone-call[_ngcontent-%COMP%] {\r\n        width: auto;\r\n        align-self: auto;\r\n        max-width: 100%;\r\n    }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    .resume[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .resume[_ngcontent-%COMP%]   div.image-wapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media (max-width: 420px) {\r\n    header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 20px;\r\n    }\r\n\r\n    header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 15px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmhlYWRlci1pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG5oZWFkZXIgLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAxMnZoIDUwcHggMjBweCA1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuaGVhZGVyIC5jb250ZW50IHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnBob25lLWltZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLnBob25lLWNhbGwge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW46IDAgNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzVweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbn1cclxuXHJcbi5waG9uZS1jYWxsIGRpdiB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4ucGhvbmUtY2FsbCBhIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTkycHg7XHJcbn1cclxuXHJcbi5yZWFsLXBob25lIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ucmVzdW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDAgMCA1MHB4O1xyXG59XHJcblxyXG4ucmVzdW1lIGRpdi5pbWFnZS13YXBwZXIgaW1nIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcclxufVxyXG5cclxuLnJlc3VtZSBkaXYuaW1hZ2Utd2FwcGVyIHtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG5cclxuLnJlc3VtZSBoMiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4ucmVzdW1lIHAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLnJlc3VtZSBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbmxpOjptYXJrZXIge1xyXG4gICAgY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbnNwYW4uYm9sZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICBoZWFkZXIgLmNvbnRlbnQge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAucGhvbmUtY2FsbCB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgYWxpZ24tc2VsZjogYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLnJlc3VtZSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAucmVzdW1lIGRpdi5pbWFnZS13YXBwZXIgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICBoZWFkZXIgLmNvbnRlbnQgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIgLmNvbnRlbnQgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");




class AppComponent {
    constructor() {
        this.title = 'psychology-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contacts/contacts.component */ "iZNs");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./videos/videos.component */ "2ZvQ");
/* harmony import */ var _services_video_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/video.service */ "nE/I");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "oOf3");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_video_service__WEBPACK_IMPORTED_MODULE_11__["VideoService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
        _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__["ContactsComponent"],
        _videos_videos_component__WEBPACK_IMPORTED_MODULE_10__["VideosComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                    _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__["ContactsComponent"],
                    _videos_videos_component__WEBPACK_IMPORTED_MODULE_10__["VideosComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"]
                ],
                providers: [_services_video_service__WEBPACK_IMPORTED_MODULE_11__["VideoService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 37, vars: 0, consts: [[1, "left-part"], ["routerLink", "/about"], ["routerLink", "/posts"], ["routerLink", "/contacts"], [1, "right-part"], ["href", "tel:+359876974572", 1, "real-phone"], [1, "fas", "fa-phone-square"], ["href", "mailto:a-angelov@abv.bg"], [1, "fas", "fa-envelope"], ["href", "https://www.facebook.com/profile.php?id=100059777914366", "target", "_blank"], [1, "fab", "fa-facebook-square"], ["href", "https://www.linkedin.com/in/asen-angelov-b4514b145/", "target", "_blank"], [1, "fab", "fa-linkedin"], ["href", "https://www.youtube.com/channel/UCi6LlUVlO4GOJyTAgpWbAJw", "target", "_blank"], [1, "fab", "fa-youtube"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041B\u0438\u043D\u043A\u043E\u0432\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0417\u0430 \u043C\u0435\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041F\u043E\u0441\u0442\u043E\u0432\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " +359 876 974 572 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " a-angelov@abv.bg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " LinkedIn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " YouTube ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["footer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    background-color: rgb(183, 219, 231);\r\n    padding: 25px 0;\r\n    margin-top: 40px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n    list-style: none;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 1.5px 0;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: rgb(85, 85, 85);\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 2px;\r\n    margin-top: 2px;\r\n    color: rgb(85, 85, 85);\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 23px;\r\n    color: black;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    footer[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        justify-content: auto;\r\n        padding-left: 50px;\r\n    }\r\n\r\n    footer[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%] {\r\n        margin-left: 0;\r\n        margin-right: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MywgMjE5LCAyMzEpO1xyXG4gICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuZm9vdGVyIC5sZWZ0LXBhcnQgdWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuZm9vdGVyIC5sZWZ0LXBhcnQgdWwgbGkge1xyXG4gICAgcGFkZGluZzogMS41cHggMDtcclxufVxyXG5cclxuZm9vdGVyIC5sZWZ0LXBhcnQgdWwgYSB7XHJcbiAgICBjb2xvcjogcmdiKDg1LCA4NSwgODUpO1xyXG59XHJcblxyXG5mb290ZXIgLnJpZ2h0LXBhcnQgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBjb2xvcjogcmdiKDg1LCA4NSwgODUpO1xyXG59XHJcblxyXG5mb290ZXIgLnJpZ2h0LXBhcnQgcCBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICBmb290ZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICBmb290ZXIgLmxlZnQtcGFydCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iZNs":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/navigation.component */ "k5x5");



class ContactsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 23, vars: 0, consts: [[1, "info"], [1, "contacts"], [1, "contact"], ["href", "mailto:a-angelov@abv.bg"], [1, "fas", "fa-envelope"], ["href", "tel:+359876974572", 1, "real-phone"], [1, "fas", "fa-phone-square"], ["href", "https://www.facebook.com/profile.php?id=100059777914366", "target", "_blank"], [1, "fab", "fa-facebook-square"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0422\u043E\u0432\u0430 \u0441\u0430 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0438\u0442\u0435, \u0441 \u043A\u043E\u0438\u0442\u043E \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0430 \u0441\u0435 \u0441\u0432\u044A\u0440\u0436\u0435\u0442\u0435 \u0441 \u043C\u0435\u043D:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "article", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " a-angelov@abv.bg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "article", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " +359876974572 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "article", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"]], styles: ["header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 50vh;\r\n    background-image: url('/assets/images/small-carpet.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    align-self: center;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n    padding: 0 30px;\r\n}\r\n\r\n.contacts[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.contact[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n    margin: 0 30px;\r\n    padding: 30px;\r\n    border-radius: 10px;\r\n}\r\n\r\ni[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n}\r\n\r\n.fa-envelope[_ngcontent-%COMP%] {\r\n    color: darkmagenta;\r\n}\r\n\r\n.fa-phone-square[_ngcontent-%COMP%], .fa-facebook-square[_ngcontent-%COMP%] {\r\n    color: blue;\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n    .contacts[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n    }\r\n    .contact[_ngcontent-%COMP%] {\r\n        margin: 10px 30px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix3REFBd0Q7SUFDeEQsc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvc21hbGwtY2FycGV0LmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG59XHJcblxyXG4uY29udGFjdHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmNvbnRhY3Qge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW46IDAgMzBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5pIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmZhLWVudmVsb3BlIHtcclxuICAgIGNvbG9yOiBkYXJrbWFnZW50YTtcclxufVxyXG5cclxuLmZhLXBob25lLXNxdWFyZSwgLmZhLWZhY2Vib29rLXNxdWFyZSB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgLmNvbnRhY3RzIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3Qge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAzMHB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacts',
                templateUrl: './contacts.component.html',
                styleUrls: ['./contacts.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "k5x5":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavigationComponent {
    constructor() {
        this.isVisible = false;
    }
    ngOnInit() {
    }
    toggleNavbar(event) {
        const icon = event.target;
        const ul = icon.nextElementSibling;
        const nav = icon.parentElement;
        if (!this.isVisible) {
            ul.style.display = 'flex';
            nav.style.padding = '0 35px 0 0';
            this.isVisible = true;
        }
        else {
            ul.style.display = 'none';
            nav.style.padding = '0 35px';
            this.isVisible = false;
        }
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 17, vars: 0, consts: [["routerLink", ""], ["src", "./assets/images/logo.png", "alt", "logo"], [1, "fas", "fa-bars", 3, "click"], [1, "nav-links"], ["routerLink", "/about"], ["routerLink", "/videos"], ["routerLink", "/contacts"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_i_click_3_listener($event) { return ctx.toggleNavbar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041D\u0430\u0447\u0430\u043B\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0417\u0430 \u043C\u0435\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0412\u0438\u0434\u0435\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["nav[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: transparent;\r\n    padding: 0 35px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n}\r\n\r\n.fa-bars[_ngcontent-%COMP%] {\r\n    display: none;\r\n    cursor: pointer;\r\n    font-size: 30px;\r\n}\r\n\r\n.nav-links[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: flex;\r\n    background-color: rgba(255, 255, 255, 0.7);\r\n    border-radius: 5px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n}\r\n\r\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\r\n    padding: 10px 10px 10px 0;\r\n}\r\n\r\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: black;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n}\r\n\r\n@media (max-width: 750px) {    \r\n    .fa-bars[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .nav-links[_ngcontent-%COMP%] {\r\n        display: none;\r\n        width: 70%;\r\n        flex-direction: column;\r\n        position: absolute;\r\n        margin: 0;\r\n        height: 100vh;\r\n    }\r\n\r\n    .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        padding: 10px 8px 10px 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFVBQVU7UUFDVixzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0oiLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDAgMzVweDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4uZmEtYmFycyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4ubmF2LWxpbmtzIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ubmF2LWxpbmtzIGxpIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxufVxyXG5cclxuLm5hdi1saW5rcyBsaTpudGgtY2hpbGQoMSkge1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMDtcclxufVxyXG5cclxuLm5hdi1saW5rcyBsaSBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHsgICAgXHJcbiAgICAuZmEtYmFycyB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1saW5rcyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtbGlua3MgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggOHB4IDEwcHggMDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nE/I":
/*!*******************************************!*\
  !*** ./src/app/services/video.service.ts ***!
  \*******************************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class VideoService {
    constructor(http) {
        this.http = http;
    }
    all() {
        return this.http.get('../../assets/videos.json');
    }
}
VideoService.ɵfac = function VideoService_Factory(t) { return new (t || VideoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
VideoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VideoService, factory: VideoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts/contacts.component */ "iZNs");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videos/videos.component */ "2ZvQ");








const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'contacts', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"] },
    { path: 'videos', component: _videos_videos_component__WEBPACK_IMPORTED_MODULE_5__["VideosComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map