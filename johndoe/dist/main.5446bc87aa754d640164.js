/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public_html/assets/scss/johndoe.scss":
/*!**********************************************!*\
  !*** ./public_html/assets/scss/johndoe.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://John_Doe/./public_html/assets/scss/johndoe.scss?");

/***/ }),

/***/ "./public_html/assets/js/johndoe.js":
/*!******************************************!*\
  !*** ./public_html/assets/js/johndoe.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_johndoe_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/johndoe.scss */ \"./public_html/assets/scss/johndoe.scss\");\n/*!\n=========================================================\n* JohnDoe Landing page\n=========================================================\n\n* Copyright: 2019 DevCRUD (https://devcrud.com)\n* Licensed: (https://devcrud.com/licenses)\n* Coded by www.devcrud.com\n\n=========================================================\n\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n*/\n\n// smooth scroll\n$(document).ready(function(){\n    $(\".navbar .nav-link\").on('click', function(event) {\n\n        if (this.hash !== \"\") {\n\n            event.preventDefault();\n\n            var hash = this.hash;\n\n            $('html, body').animate({\n                scrollTop: $(hash).offset().top\n            }, 700, function(){\n                window.location.hash = hash;\n            });\n        }\n    });\n});\n\n// protfolio filters\n$(window).on(\"load\", function() {\n    var t = $(\".portfolio-container\");\n    t.isotope({\n        filter: \".new\",\n        animationOptions: {\n            duration: 750,\n            easing: \"linear\",\n            queue: !1\n        }\n    }), $(\".filters a\").click(function() {\n        $(\".filters .active\").removeClass(\"active\"), $(this).addClass(\"active\");\n        var i = $(this).attr(\"data-filter\");\n        return t.isotope({\n            filter: i,\n            animationOptions: {\n                duration: 750,\n                easing: \"linear\",\n                queue: !1\n            }\n        }), !1\n    });\n});\n\n\n// google maps\nfunction initMap() {\n// Styles a map in night mode.\n    var map = new google.maps.Map(document.getElementById('map'), {\n        center: {lat: 40.674, lng: -73.945},\n        zoom: 12,\n        scrollwheel:  false,\n        navigationControl: false,\n        mapTypeControl: false,\n        scaleControl: false,\n      styles: [\n        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},\n        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},\n        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},\n        {\n          featureType: 'administrative.locality',\n          elementType: 'labels.text.fill',\n          stylers: [{color: '#d59563'}]\n        },\n        {\n          featureType: 'poi',\n          elementType: 'labels.text.fill',\n          stylers: [{color: '#d59563'}]\n        },\n        {\n          featureType: 'poi.park',\n          elementType: 'geometry',\n          stylers: [{color: '#263c3f'}]\n        },\n        {\n          featureType: 'poi.park',\n          elementType: 'labels.text.fill',\n          stylers: [{color: '#6b9a76'}]\n        },\n        {\n          featureType: 'road',\n          elementType: 'geometry',\n          stylers: [{color: '#38414e'}]\n        },\n        {\n          featureType: 'road',\n          elementType: 'geometry.stroke',\n          stylers: [{color: '#212a37'}]\n        },\n        {\n          featureType: 'road',\n          elementType: 'labels.text.fill',\n          stylers: [{color: '#9ca5b3'}]\n        },\n        {\n          featureType: 'road.highway',\n          elementType: 'geometry',\n          stylers: [{color: '#746855'}]\n        },\n        {\n          featureType: 'road.highway',\n          elementType: 'geometry.stroke',\n          stylers: [{color: '#1f2835'}]\n        },\n        {\n          featureType: 'road.highway',\n          elementType: 'labels.text.fill',\n          stylers: [{color: '#f3d19c'}]\n        },\n        {\n          featureType: 'transit',\n          elementType: 'geometry',\n          stylers: [{color: '#2f3948'}]\n        },\n        {\n          featureType: 'transit.station',\n          elementType: 'labels.text.fill',\n          stylers: [{color: '#d59563'}]\n        },\n        {\n          featureType: 'water',\n          elementType: 'geometry',\n          stylers: [{color: '#17263c'}]\n        },\n        {\n          featureType: 'water',\n          elementType: 'labels.text.fill',\n          stylers: [{color: '#515c6d'}]\n        },\n        {\n          featureType: 'water',\n          elementType: 'labels.text.stroke',\n          stylers: [{color: '#17263c'}]\n        }\n      ]\n    });\n}\n\n\n//# sourceURL=webpack://John_Doe/./public_html/assets/js/johndoe.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public_html/assets/js/johndoe.js");
/******/ 	
/******/ })()
;