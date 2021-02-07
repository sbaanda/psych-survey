(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_SurveyResult_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HorizontalBarChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HorizontalBarChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'HorizontalBarChart',
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__.HorizontalBar,
  props: {
    barLabels: {
      type: Array,
      "default": []
    },
    barDatasets: {
      type: Array,
      "default": []
    }
  },
  mounted: function mounted() {
    this.renderChart({
      labels: this.barLabels,
      datasets: this.barDatasets
    }, {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true,
            precision: false
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: false,
            drawBorder: false
          }
        }]
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SurveyResult.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SurveyResult.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _HorizontalBarChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalBarChart */ "./resources/js/components/HorizontalBarChart.vue");
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
  name: 'SurveyResult',
  props: {
    result: {
      type: Object,
      "default": {}
    }
  },
  components: {
    HorizontalBarChart: _HorizontalBarChart__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      headers: [{
        text: 'Intrebare',
        align: 'start',
        value: 'name',
        groupable: false
      }, {
        text: 'Item',
        value: 'item',
        align: 'center'
      }, {
        text: 'Raspuns',
        value: 'answer',
        align: 'center'
      }],
      desserts: [{
        name: 'Frozen Yogurt',
        category: 'Ice cream',
        dairy: 'Yes'
      }, {
        name: 'Ice cream sandwich',
        category: 'Ice cream',
        dairy: 'Yes'
      }, {
        name: 'Eclair',
        category: 'Cookie',
        dairy: 'Yes'
      }, {
        name: 'Gingerbread',
        category: 'Cookie',
        dairy: 'No'
      }]
    };
  },
  mounted: function mounted() {
    console.log(this.result);
  }
});

/***/ }),

/***/ "./resources/js/components/HorizontalBarChart.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/HorizontalBarChart.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _HorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalBarChart.vue?vue&type=script&lang=js& */ "./resources/js/components/HorizontalBarChart.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  _HorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default,
  render,
  staticRenderFns,
  false,
  null,
  "9db0140c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/HorizontalBarChart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SurveyResult.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/SurveyResult.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _SurveyResult_vue_vue_type_template_id_13ad8082___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SurveyResult.vue?vue&type=template&id=13ad8082& */ "./resources/js/components/SurveyResult.vue?vue&type=template&id=13ad8082&");
/* harmony import */ var _SurveyResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SurveyResult.vue?vue&type=script&lang=js& */ "./resources/js/components/SurveyResult.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SurveyResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SurveyResult_vue_vue_type_template_id_13ad8082___WEBPACK_IMPORTED_MODULE_0__.render,
  _SurveyResult_vue_vue_type_template_id_13ad8082___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SurveyResult.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/HorizontalBarChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/HorizontalBarChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HorizontalBarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HorizontalBarChart.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/SurveyResult.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/SurveyResult.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SurveyResult.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SurveyResult.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/SurveyResult.vue?vue&type=template&id=13ad8082&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/SurveyResult.vue?vue&type=template&id=13ad8082& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyResult_vue_vue_type_template_id_13ad8082___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyResult_vue_vue_type_template_id_13ad8082___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyResult_vue_vue_type_template_id_13ad8082___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SurveyResult.vue?vue&type=template&id=13ad8082& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SurveyResult.vue?vue&type=template&id=13ad8082&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SurveyResult.vue?vue&type=template&id=13ad8082&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SurveyResult.vue?vue&type=template&id=13ad8082& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "v-row",
    [
      _c(
        "v-col",
        { attrs: { cols: "10", offset: "1" } },
        [
          _c(
            "v-card",
            { staticClass: "mt-5" },
            [
              _c("horizontal-bar-chart", {
                attrs: {
                  barLabels: _vm.result.barLabels,
                  barDatasets: _vm.result.barDatasets
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "10", offset: "1" } },
        [
          _c(
            "v-card",
            { staticClass: "mb-5" },
            [
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.result.datatable,
                  "items-per-page": 15,
                  "item-key": "name",
                  "sort-by": "name",
                  "group-by": "item",
                  "show-group-by": ""
                },
                scopedSlots: _vm._u([
                  {
                    key: "group.header",
                    fn: function(ref) {
                      var group = ref.group
                      var headers = ref.headers
                      var toggle = ref.toggle
                      var isOpen = ref.isOpen
                      return [
                        _c("td", { attrs: { colspan: headers.length } }, [
                          _c("span", { staticClass: "mx-5 font-weight-bold" }, [
                            _vm._v(
                              _vm._s(
                                typeof group === "boolean"
                                  ? group
                                    ? "Da"
                                    : "Nu"
                                  : group
                              )
                            )
                          ])
                        ])
                      ]
                    }
                  },
                  {
                    key: "item",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("tr", [
                          _c("td", [_vm._v(_vm._s(item.name))]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "text-center" },
                            [
                              _c(
                                "v-chip",
                                {
                                  attrs: {
                                    color: item.answer ? "green" : "red",
                                    dark: ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(item.answer ? "Da" : "Nu") +
                                      "\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
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