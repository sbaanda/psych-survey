(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Survey_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Survey.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Survey.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Survey',
  props: {
    survey: {
      type: Object,
      "default": {}
    }
  },
  data: function data() {
    return {
      next: 2
    };
  },
  methods: {
    first: function first() {
      var firstEl = document.getElementsByClassName("q_1");
      var secondEl = document.getElementsByClassName("q_2");

      if (firstEl[0].classList.contains("onSlidingReverse")) {
        firstEl[0].classList.remove("onSlidingReverse");
      }

      if (secondEl[0].classList.contains("nextSlidingReverse")) {
        secondEl[0].classList.remove("nextSlidingReverse");
      }

      firstEl[0].classList.add("onSliding");
      secondEl[0].classList.add("nextSliding");
    },
    second: function second() {
      var el = document.getElementsByClassName("q_" + this.next);
      var nextEl = document.getElementsByClassName("q_" + (this.next + 1));

      if (el[0].classList.contains("onSlidingReverse")) {
        el[0].classList.remove("onSlidingReverse");
      }

      if (nextEl[0].classList.contains("nextSlidingReverse")) {
        nextEl[0].classList.remove("nextSlidingReverse");
      }

      el[0].classList.remove('nextSliding');
      el[0].classList.add("onSliding");
      nextEl[0].classList.add("nextSliding");
      this.next++;
    },
    back: function back() {
      var firstEl = document.getElementsByClassName("q_" + (this.next - 1));
      var secondEl = document.getElementsByClassName("q_" + this.next);

      if (secondEl[0].classList.contains("nextSlidingReverse")) {
        secondEl[0].classList.remove("nextSlidingReverse");
      }

      firstEl[0].classList.add("onSlidingReverse");
      secondEl[0].classList.add("nextSlidingReverse");
      firstEl[0].classList.remove("onSliding");
      secondEl[0].classList.remove("nextSliding");

      if (this.next > 2) {
        this.next--;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Survey.vue?vue&type=style&index=0&id=52541885&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Survey.vue?vue&type=style&index=0&id=52541885&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.container[data-v-52541885] {\n    background-color: crimson;\n    min-height: calc(93vh + 2px);\n    position: relative;\n    overflow: hidden;\n}\n.q_1[data-v-52541885] { background: lightsalmon;\n}\n.q_2[data-v-52541885] { background: darkseagreen;\n}\n.q_3[data-v-52541885] { background: lightslategrey;\n}\n.q_4[data-v-52541885] { background: coral;\n}\n.toSlide[data-v-52541885] {\n    width: 90%;\n    min-height: 90%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    /* position the div in center */\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.nextSlide[data-v-52541885] {\n    width: 90%;\n    min-height: 90%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    /* position the div in center */\n    position: absolute;\n    top: 150%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.onSliding[data-v-52541885]{\n    -webkit-animation-name: onSlide-data-v-52541885;\n            animation-name: onSlide-data-v-52541885;\n    -webkit-animation-duration: .6s;\n            animation-duration: .6s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.nextSliding[data-v-52541885]{\n    -webkit-animation-name: nextSlide-data-v-52541885;\n            animation-name: nextSlide-data-v-52541885;\n    -webkit-animation-duration: .6s;\n            animation-duration: .6s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.onSlidingReverse[data-v-52541885]{\n    -webkit-animation-name: onSlideReverse-data-v-52541885;\n            animation-name: onSlideReverse-data-v-52541885;\n    -webkit-animation-duration: .6s;\n            animation-duration: .6s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.nextSlidingReverse[data-v-52541885]{\n    -webkit-animation-name: nextSlideReverse-data-v-52541885;\n            animation-name: nextSlideReverse-data-v-52541885;\n    -webkit-animation-duration: .6s;\n            animation-duration: .6s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n@-webkit-keyframes onSlide-data-v-52541885 {\nfrom {top: 50%;}\nto {top: -50%; bottom: initial; background-color: crimson;}\n}\n@keyframes onSlide-data-v-52541885 {\nfrom {top: 50%;}\nto {top: -50%; bottom: initial; background-color: crimson;}\n}\n@-webkit-keyframes nextSlide-data-v-52541885 {\nfrom {top: 150%; background-color: blue;}\nto {top: 50%;}\n}\n@keyframes nextSlide-data-v-52541885 {\nfrom {top: 150%; background-color: blue;}\nto {top: 50%;}\n}\n@-webkit-keyframes onSlideReverse-data-v-52541885 {\nfrom {top: -50%; bottom: initial; background-color: crimson;}\nto {top: 50%;}\n}\n@keyframes onSlideReverse-data-v-52541885 {\nfrom {top: -50%; bottom: initial; background-color: crimson;}\nto {top: 50%;}\n}\n@-webkit-keyframes nextSlideReverse-data-v-52541885 {\nfrom {top: 50%;}\nto {top: 150%; background-color: crimson;}\n}\n@keyframes nextSlideReverse-data-v-52541885 {\nfrom {top: 50%;}\nto {top: 150%; background-color: crimson;}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Survey.vue?vue&type=style&index=0&id=52541885&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Survey.vue?vue&type=style&index=0&id=52541885&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Survey_vue_vue_type_style_index_0_id_52541885_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Survey.vue?vue&type=style&index=0&id=52541885&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Survey.vue?vue&type=style&index=0&id=52541885&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Survey_vue_vue_type_style_index_0_id_52541885_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Survey_vue_vue_type_style_index_0_id_52541885_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/Survey.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Survey.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Survey_vue_vue_type_template_id_52541885_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Survey.vue?vue&type=template&id=52541885&scoped=true& */ "./resources/js/components/Survey.vue?vue&type=template&id=52541885&scoped=true&");
/* harmony import */ var _Survey_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Survey.vue?vue&type=script&lang=js& */ "./resources/js/components/Survey.vue?vue&type=script&lang=js&");
/* harmony import */ var _Survey_vue_vue_type_style_index_0_id_52541885_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Survey.vue?vue&type=style&index=0&id=52541885&scoped=true&lang=css& */ "./resources/js/components/Survey.vue?vue&type=style&index=0&id=52541885&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Survey_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Survey_vue_vue_type_template_id_52541885_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Survey_vue_vue_type_template_id_52541885_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "52541885",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Survey.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Survey.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Survey.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Survey_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Survey.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Survey.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Survey_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Survey.vue?vue&type=style&index=0&id=52541885&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Survey.vue?vue&type=style&index=0&id=52541885&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Survey_vue_vue_type_style_index_0_id_52541885_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Survey.vue?vue&type=style&index=0&id=52541885&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Survey.vue?vue&type=style&index=0&id=52541885&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Survey.vue?vue&type=template&id=52541885&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Survey.vue?vue&type=template&id=52541885&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Survey_vue_vue_type_template_id_52541885_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Survey_vue_vue_type_template_id_52541885_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Survey_vue_vue_type_template_id_52541885_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Survey.vue?vue&type=template&id=52541885&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Survey.vue?vue&type=template&id=52541885&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Survey.vue?vue&type=template&id=52541885&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Survey.vue?vue&type=template&id=52541885&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-container", { attrs: { fluid: "" } }, [
    _c(
      "div",
      { staticClass: "toSlide q_1" },
      [
        _c(
          "v-col",
          { attrs: { cols: "12" } },
          [
            _c(
              "v-row",
              { staticClass: "pa-4 text-center" },
              [
                _c("v-col", { attrs: { cols: "8", offset: "2" } }, [
                  _c("h3", [_vm._v("V-aţi simţit trist(ă) sau deprimat(ă)?")])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-row",
              { staticClass: "pa-4 text-center" },
              [
                _c(
                  "v-col",
                  { attrs: { cols: "6" } },
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "ma-4",
                        attrs: { outlined: "", color: "indigo", "x-large": "" },
                        on: { click: _vm.first }
                      },
                      [_vm._v("Da")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  { attrs: { cols: "6" } },
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "ma-4",
                        attrs: { outlined: "", color: "indigo", "x-large": "" },
                        on: { click: _vm.first }
                      },
                      [_vm._v("Nu")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "nextSlide q_2" },
      [
        _c(
          "v-row",
          [
            _c(
              "v-col",
              { attrs: { cols: "12" } },
              [
                _c(
                  "v-row",
                  { staticClass: "pa-4 text-center" },
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "2", offset: "1" } },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "ma-4",
                            attrs: {
                              outlined: "",
                              fab: "",
                              color: "indigo",
                              "x-large": ""
                            },
                            on: { click: _vm.back }
                          },
                          [
                            _c("v-icon", [
                              _vm._v(
                                "\n                                mdi-arrow-left\n                            "
                              )
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-col",
              { attrs: { cols: "12" } },
              [
                _c(
                  "v-row",
                  { staticClass: "pa-4 text-center" },
                  [
                    _c("v-col", { attrs: { cols: "8", offset: "2" } }, [
                      _c("h3", [
                        _vm._v(
                          "V-aţi simţit trist(ă) sau deprimat(ă) în cea mai mare parte a zilei, aproape în fiecare zi?"
                        )
                      ])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-row",
                  { staticClass: "pa-4 text-center" },
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "6" } },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "ma-4",
                            attrs: {
                              outlined: "",
                              color: "indigo",
                              "x-large": ""
                            },
                            on: { click: _vm.second }
                          },
                          [_vm._v("Da")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "6" } },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "ma-4",
                            attrs: {
                              outlined: "",
                              color: "indigo",
                              "x-large": ""
                            },
                            on: { click: _vm.second }
                          },
                          [_vm._v("Nu")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "nextSlide q_3" },
      [
        _c(
          "v-row",
          [
            _c(
              "v-col",
              { attrs: { cols: "12" } },
              [
                _c(
                  "v-row",
                  { staticClass: "pa-4 text-center" },
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "2", offset: "1" } },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "ma-4",
                            attrs: {
                              outlined: "",
                              fab: "",
                              color: "indigo",
                              "x-large": ""
                            },
                            on: { click: _vm.back }
                          },
                          [
                            _c("v-icon", [
                              _vm._v(
                                "\n                                mdi-arrow-left\n                            "
                              )
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-col",
              { attrs: { cols: "12" } },
              [
                _c(
                  "v-row",
                  { staticClass: "pa-4 text-center" },
                  [
                    _c("v-col", { attrs: { cols: "8", offset: "2" } }, [
                      _c("h3", [
                        _vm._v(
                          "V-aţi bucurat mai puţin de aproape toate lucrurile care înainte, în mod normal, vă făceau plăcere?"
                        )
                      ])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-row",
                  { staticClass: "pa-4 text-center" },
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "6" } },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "ma-4",
                            attrs: {
                              outlined: "",
                              color: "indigo",
                              "x-large": ""
                            },
                            on: { click: _vm.second }
                          },
                          [_vm._v("Da")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "6" } },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "ma-4",
                            attrs: {
                              outlined: "",
                              color: "indigo",
                              "x-large": ""
                            },
                            on: { click: _vm.second }
                          },
                          [_vm._v("Nu")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "nextSlide q_4" },
      [
        _c(
          "v-row",
          [
            _c(
              "v-col",
              { attrs: { cols: "12" } },
              [
                _c(
                  "v-row",
                  { staticClass: "pa-4 text-center" },
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "2", offset: "1" } },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "ma-4",
                            attrs: {
                              outlined: "",
                              fab: "",
                              color: "indigo",
                              "x-large": ""
                            },
                            on: { click: _vm.back }
                          },
                          [
                            _c("v-icon", [
                              _vm._v(
                                "\n                                mdi-arrow-left\n                            "
                              )
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-col",
              { attrs: { cols: "12" } },
              [
                _c(
                  "v-row",
                  { staticClass: "pa-4 text-center" },
                  [
                    _c("v-col", { attrs: { cols: "8", offset: "2" } }, [
                      _c("h3", [
                        _vm._v(
                          "V-aţi pierdut interesul pentru aproape toate activităţile de care, în mod normal, eraţi interesat(ă)?"
                        )
                      ])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-row",
                  { staticClass: "pa-4 text-center" },
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "6" } },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "ma-4",
                            attrs: {
                              outlined: "",
                              color: "indigo",
                              "x-large": ""
                            },
                            on: { click: _vm.second }
                          },
                          [_vm._v("Da")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "6" } },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "ma-4",
                            attrs: {
                              outlined: "",
                              color: "indigo",
                              "x-large": ""
                            },
                            on: { click: _vm.second }
                          },
                          [_vm._v("Nu")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ normalizeComponent
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);