"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_home_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/App.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/App.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue */ "./resources/js/layouts/Header.vue");
/* harmony import */ var _AsideMenu_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsideMenu.vue */ "./resources/js/layouts/AsideMenu.vue");
/* harmony import */ var _FooterBar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterBar.vue */ "./resources/js/layouts/FooterBar.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AsideMenu: _AsideMenu_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    FooterBar: _FooterBar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Header: _Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/AsideMenu.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/AsideMenu.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stores_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stores/auth */ "./resources/js/stores/auth.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    var externalScript = document.createElement('script');
    externalScript.setAttribute('src', '/assets/js/app.js');
    document.head.appendChild(externalScript);
  },
  computed: _objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_1__.mapState)(_stores_auth__WEBPACK_IMPORTED_MODULE_0__.UseAuthStore, {
    company: 'company'
  })),
  methods: {
    routeExists: function routeExists(name) {
      return this.$router.resolve(name).name != '404';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Header.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Header.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _stores_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stores/auth */ "./resources/js/stores/auth.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {};
  },
  methods: _objectSpread(_objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_1__.mapActions)(_stores_auth__WEBPACK_IMPORTED_MODULE_0__.UseAuthStore, ['userLogout'])), {}, {
    logout: function logout() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('logout').then(function (response) {
        _this.userLogout();
        _this.$router.push({
          name: 'login'
        });
      })["catch"](function (error) {
        console.log('error..');
      });
    }
  }),
  computed: _objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_1__.mapState)(_stores_auth__WEBPACK_IMPORTED_MODULE_0__.UseAuthStore, {
    user: 'user'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/home/Home.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/home/Home.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/App.vue */ "./resources/js/layouts/App.vue");
/* harmony import */ var vue_countup_v3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-countup-v3 */ "./node_modules/vue-countup-v3/dist/vue-countup-v3.es.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    MyLayout: _layouts_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    VueCountUp: vue_countup_v3__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {},
  mounted: function mounted() {},
  data: function data() {
    return {
      totals: []
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;
      this.$axios.get('home').then(function (_ref) {
        var data = _ref.data;
        _this.totals = data.success;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/App.vue?vue&type=template&id=9087fe26":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/App.vue?vue&type=template&id=9087fe26 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "layout-wrapper",
  style: {
    "zoom": "100%"
  }
};
var _hoisted_2 = {
  "class": "main-content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Header");
  var _component_aside_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("aside-menu");
  var _component_footer_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("footer-bar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_aside_menu), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_footer_bar)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/AsideMenu.vue?vue&type=template&id=2eb4e783&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/AsideMenu.vue?vue&type=template&id=2eb4e783&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-2eb4e783"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "vertical-menu"
};
var _hoisted_2 = {
  key: 0,
  "class": "titlebar-brand-box"
};
var _hoisted_3 = {
  "class": "logo-lg row"
};
var _hoisted_4 = ["src"];
var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-fw fa-bars"
  })], -1 /* HOISTED */);
});
var _hoisted_6 = {
  "data-simplebar": "",
  "class": "sidebar-menu-scroll mt-0"
};
var _hoisted_7 = {
  id: "sidebar-menu"
};
var _hoisted_8 = {
  "class": "metismenu list-unstyled",
  id: "side-menu"
};
var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "menu-title"
  }, " Main List", -1 /* HOISTED */);
});
var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "uil-home-alt"
  }, null, -1 /* HOISTED */);
});
var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " blog posts ", -1 /* HOISTED */);
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" LOGO "), _ctx.company ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'home'
    },
    tag: "a",
    "class": "logo logo-dark"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: '\\assets\\img\\companies\\logo_' + _ctx.company.id + '.png',
        "class": "me-auto ms-auto w-50"
      }, null, 8 /* PROPS */, _hoisted_4)])];
    }),
    _: 1 /* STABLE */
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("- Sidemenu "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Left Menu Start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'home'
    },
    tag: "a",
    "class": "link-page"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), _hoisted_11];
    }),
    _: 1 /* STABLE */
  })])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Sidebar ")])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/FooterBar.vue?vue&type=template&id=2c28d0c4":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/FooterBar.vue?vue&type=template&id=2c28d0c4 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "footer"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"container-fluid\"><div class=\"row\"><div class=\"col-sm-6\"> 2023 © Demo Test. </div><div class=\"col-sm-6\"><div class=\"text-sm-end d-none d-sm-block\"> Created by <a href=\"#\" target=\"_blank\" class=\"text-reset\">Karim Mahmoud</a></div></div></div></div>", 1);
var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("footer", _hoisted_1, _hoisted_3);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Header.vue?vue&type=template&id=b947e51e":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Header.vue?vue&type=template&id=b947e51e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "page-topbar"
};
var _hoisted_2 = {
  "class": "navbar-header"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex\"><!-- LOGO --><button type=\"button\" class=\"btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn\"><i class=\"fa fa-fw fa-bars\"></i></button><!-- App Search--><form class=\"app-search d-none d-lg-block\"><div class=\"position-relative\"><input type=\"text\" class=\"form-control\" placeholder=\"Search\"><span class=\"uil-search\"></span></div></form></div>", 1);
var _hoisted_4 = {
  "class": "d-flex"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"dropdown d-inline-block d-lg-none ms-2\"><button type=\"button\" class=\"btn header-item noti-icon waves-effect\" id=\"page-header-search-dropdown\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"uil-search\"></i></button><div class=\"dropdown-menu dropdown-menu-lg dropdown-menu-end p-0\" aria-labelledby=\"page-header-search-dropdown\"><form class=\"p-3\"><div class=\"m-0\"><div class=\"input-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Search ...\" aria-label=\"Recipient&#39;s username\"><div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"submit\"><i class=\"mdi mdi-magnify\"></i></button></div></div></div></form></div></div><div class=\"dropdown d-none d-lg-inline-block ms-1\"><button type=\"button\" class=\"btn header-item noti-icon waves-effect\" data-bs-toggle=\"fullscreen\"><i class=\"uil-minus-path\"></i></button></div>", 2);
var _hoisted_7 = {
  key: 0,
  "class": "dropdown d-inline-block"
};
var _hoisted_8 = {
  type: "button",
  "class": "btn header-item waves-effect",
  id: "page-header-user-dropdown",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
};
var _hoisted_9 = {
  "class": "header-profile-user bg-primary rounded-circle font-size-16 user-photo"
};
var _hoisted_10 = {
  "class": "d-none d-md-inline-block ms-1 fw-medium font-size-15"
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "uil-angle-down d-none d-xl-inline-block font-size-15"
}, null, -1 /* HOISTED */);
var _hoisted_12 = {
  "class": "dropdown-menu dropdown-menu-end"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "uil uil-user-circle font-size-18 align-middle text-muted me-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "align-middle"
}, "Edit Profile")], -1 /* HOISTED */);
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted"
}, null, -1 /* HOISTED */);
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "align-middle"
}, "Sign Out", -1 /* HOISTED */);
var _hoisted_16 = [_hoisted_14, _hoisted_15];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, _ctx.user ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.user.name.substring(0, 1).toUpperCase()), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.user.name), 1 /* TEXT */), _hoisted_11]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-item",
    href: "#",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.logout && $options.logout.apply($options, arguments);
    })
  }, _hoisted_16)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/home/Home.vue?vue&type=template&id=4c3f1cd4":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/home/Home.vue?vue&type=template&id=4c3f1cd4 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "page-content"
};
var _hoisted_2 = {
  "class": "container-fluid"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "page-title-box d-flex align-items-center justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-0"
}, "home page")])])], -1 /* HOISTED */);
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col-md-3 col-xl-4"
};
var _hoisted_6 = {
  "class": "card"
};
var _hoisted_7 = {
  "class": "card-body"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "float-end mt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <i :class=\"('totals.'+name+'.icon')\" class=\"fa-2x text-primary\"></i> ")], -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "mb-1 mt-1"
};
var _hoisted_10 = {
  "class": "text-muted mb-0"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_VueCountUp = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("VueCountUp");
  var _component_MyLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MyLayout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MyLayout, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" start page title "), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end page title "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.totals, function (total, name) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{total}} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_VueCountUp, {
          delay: 1000,
          endVal: total,
          options: {
            decimalPlaces: 0
          }
        }, null, 8 /* PROPS */, ["endVal"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(name), 1 /* TEXT */)])])])]);
      }), 256 /* UNKEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" container-fluid ")])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/AsideMenu.vue?vue&type=style&index=0&id=2eb4e783&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/AsideMenu.vue?vue&type=style&index=0&id=2eb4e783&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nimg[data-v-2eb4e783]{\r\n    max-height: 60px;\n}\nli i[data-v-2eb4e783]{\r\n    font-size: smaller!important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Header.vue?vue&type=style&index=0&id=b947e51e&scope=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Header.vue?vue&type=style&index=0&id=b947e51e&scope=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.user-photo{\r\n    display: inline-grid;\r\n    align-items: center;\r\n    font-weight: 500;\r\n    color: #fff;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/AsideMenu.vue?vue&type=style&index=0&id=2eb4e783&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/AsideMenu.vue?vue&type=style&index=0&id=2eb4e783&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AsideMenu_vue_vue_type_style_index_0_id_2eb4e783_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AsideMenu.vue?vue&type=style&index=0&id=2eb4e783&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/AsideMenu.vue?vue&type=style&index=0&id=2eb4e783&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AsideMenu_vue_vue_type_style_index_0_id_2eb4e783_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AsideMenu_vue_vue_type_style_index_0_id_2eb4e783_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Header.vue?vue&type=style&index=0&id=b947e51e&scope=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Header.vue?vue&type=style&index=0&id=b947e51e&scope=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_b947e51e_scope_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=style&index=0&id=b947e51e&scope=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Header.vue?vue&type=style&index=0&id=b947e51e&scope=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_b947e51e_scope_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_b947e51e_scope_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-countup-v3/dist/vue-countup-v3.es.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue-countup-v3/dist/vue-countup-v3.es.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _sfc_main)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

var __assign = globalThis && globalThis.__assign || function() {
  return (__assign = Object.assign || function(t) {
    for (var i, a = 1, n = arguments.length; a < n; a++)
      for (var s in i = arguments[a])
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    return t;
  }).apply(this, arguments);
}, CountUp = function() {
  function t(t2, i, a) {
    var n = this;
    this.endVal = i, this.options = a, this.version = "2.1.0", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: true, useGrouping: true, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", enableScrollSpy: false, scrollSpyDelay: 200 }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.count = function(t3) {
      n.startTime || (n.startTime = t3);
      var i2 = t3 - n.startTime;
      n.remaining = n.duration - i2, n.useEasing ? n.countDown ? n.frameVal = n.startVal - n.easingFn(i2, 0, n.startVal - n.endVal, n.duration) : n.frameVal = n.easingFn(i2, n.startVal, n.endVal - n.startVal, n.duration) : n.countDown ? n.frameVal = n.startVal - (n.startVal - n.endVal) * (i2 / n.duration) : n.frameVal = n.startVal + (n.endVal - n.startVal) * (i2 / n.duration), n.countDown ? n.frameVal = n.frameVal < n.endVal ? n.endVal : n.frameVal : n.frameVal = n.frameVal > n.endVal ? n.endVal : n.frameVal, n.frameVal = Number(n.frameVal.toFixed(n.options.decimalPlaces)), n.printValue(n.frameVal), i2 < n.duration ? n.rAF = requestAnimationFrame(n.count) : n.finalEndVal !== null ? n.update(n.finalEndVal) : n.callback && n.callback();
    }, this.formatNumber = function(t3) {
      var i2, a2, s, e, r = t3 < 0 ? "-" : "";
      i2 = Math.abs(t3).toFixed(n.options.decimalPlaces);
      var o = (i2 += "").split(".");
      if (a2 = o[0], s = o.length > 1 ? n.options.decimal + o[1] : "", n.options.useGrouping) {
        e = "";
        for (var l = 0, h = a2.length; l < h; ++l)
          l !== 0 && l % 3 == 0 && (e = n.options.separator + e), e = a2[h - l - 1] + e;
        a2 = e;
      }
      return n.options.numerals && n.options.numerals.length && (a2 = a2.replace(/[0-9]/g, function(t4) {
        return n.options.numerals[+t4];
      }), s = s.replace(/[0-9]/g, function(t4) {
        return n.options.numerals[+t4];
      })), r + n.options.prefix + a2 + s + n.options.suffix;
    }, this.easeOutExpo = function(t3, i2, a2, n2) {
      return a2 * (1 - Math.pow(2, -10 * t3 / n2)) * 1024 / 1023 + i2;
    }, this.options = __assign(__assign({}, this.defaults), a), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(i), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, this.options.separator === "" && (this.options.useGrouping = false), this.el = typeof t2 == "string" ? document.getElementById(t2) : t2, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", window !== void 0 && this.options.enableScrollSpy && (this.error ? console.error(this.error, t2) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
      return n.handleScroll(n);
    }), window.onscroll = function() {
      window.onScrollFns.forEach(function(t3) {
        return t3();
      });
    }, this.handleScroll(this)));
  }
  return t.prototype.handleScroll = function(t2) {
    if (t2 && window) {
      var i = window.innerHeight + window.scrollY, a = t2.el.offsetTop + t2.el.offsetHeight;
      a < i && a > window.scrollY && t2.paused ? (t2.paused = false, setTimeout(function() {
        return t2.start();
      }, t2.options.scrollSpyDelay)) : window.scrollY > a && !t2.paused && t2.reset();
    }
  }, t.prototype.determineDirectionAndSmartEasing = function() {
    var t2 = this.finalEndVal ? this.finalEndVal : this.endVal;
    this.countDown = this.startVal > t2;
    var i = t2 - this.startVal;
    if (Math.abs(i) > this.options.smartEasingThreshold) {
      this.finalEndVal = t2;
      var a = this.countDown ? 1 : -1;
      this.endVal = t2 + a * this.options.smartEasingAmount, this.duration = this.duration / 2;
    } else
      this.endVal = t2, this.finalEndVal = null;
    this.finalEndVal ? this.useEasing = false : this.useEasing = this.options.useEasing;
  }, t.prototype.start = function(t2) {
    this.error || (this.callback = t2, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
  }, t.prototype.pauseResume = function() {
    this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
  }, t.prototype.reset = function() {
    cancelAnimationFrame(this.rAF), this.paused = true, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
  }, t.prototype.update = function(t2) {
    cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t2), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal || this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
  }, t.prototype.printValue = function(t2) {
    var i = this.formattingFn(t2);
    this.el.tagName === "INPUT" ? this.el.value = i : this.el.tagName === "text" || this.el.tagName === "tspan" ? this.el.textContent = i : this.el.innerHTML = i;
  }, t.prototype.ensureNumber = function(t2) {
    return typeof t2 == "number" && !isNaN(t2);
  }, t.prototype.validateValue = function(t2) {
    var i = Number(t2);
    return this.ensureNumber(i) ? i : (this.error = "[CountUp] invalid start or end value: " + t2, null);
  }, t.prototype.resetDuration = function() {
    this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
  }, t;
}();
const _hoisted_1 = { class: "countup-wrap" };
const __default__ = {
  name: "CountUp"
};
const _sfc_main = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)(__spreadProps(__spreadValues({}, __default__), {
  props: {
    endVal: null,
    startVal: { default: 0 },
    duration: { default: 2.5 },
    decimalPlaces: { default: 0 },
    autoplay: { type: Boolean, default: true },
    loop: { type: [Boolean, Number, String], default: false },
    delay: { default: 0 },
    options: { default: void 0 }
  },
  emits: ["init", "finished"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    let elRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    let countUp = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    const initCountUp = () => {
      if (!elRef.value)
        return;
      const startVal = Number(props.startVal);
      const endVal = Number(props.endVal);
      const duration = Number(props.duration);
      countUp.value = new CountUp(elRef.value, endVal, __spreadValues({
        startVal,
        duration,
        decimalPlaces: props.decimalPlaces
      }, props.options));
      if (countUp.value.error) {
        console.error(countUp.value.error);
        return;
      }
      emits("init", countUp.value);
    };
    const startAnim = (cb) => {
      var _a;
      (_a = countUp.value) == null ? void 0 : _a.start(cb);
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.endVal, (value) => {
      var _a;
      if (props.autoplay) {
        (_a = countUp.value) == null ? void 0 : _a.update(value);
      }
    });
    const finished = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    let loopCount = 0;
    const loopAnim = () => {
      loopCount++;
      startAnim(() => {
        const isTruely = typeof props.loop === "boolean" && props.loop;
        if (isTruely || props.loop > loopCount) {
          delay(() => {
            var _a;
            (_a = countUp.value) == null ? void 0 : _a.reset();
            loopAnim();
          }, props.delay);
        } else {
          finished.value = true;
        }
      });
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(finished, (flag) => {
      if (flag) {
        emits("finished");
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      initCountUp();
      if (props.autoplay) {
        loopAnim();
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
      var _a;
      cancelAnimationFrame(dalayRafId);
      (_a = countUp.value) == null ? void 0 : _a.reset();
    });
    let dalayRafId;
    const delay = (cb, seconds = 1) => {
      let startTime;
      function count(timestamp) {
        if (!startTime)
          startTime = timestamp;
        const diff = timestamp - startTime;
        if (diff < seconds * 1e3) {
          dalayRafId = requestAnimationFrame(count);
        } else {
          cb();
        }
      }
      dalayRafId = requestAnimationFrame(count);
    };
    const restart = () => {
      initCountUp();
      startAnim();
    };
    expose({
      init: initCountUp,
      restart
    });
    return (_ctx, _cache) => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "prefix"),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          ref_key: "elRef",
          ref: elRef
        }, null, 512),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "suffix")
      ]);
    };
  }
}));



/***/ }),

/***/ "./resources/js/layouts/App.vue":
/*!**************************************!*\
  !*** ./resources/js/layouts/App.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_9087fe26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=9087fe26 */ "./resources/js/layouts/App.vue?vue&type=template&id=9087fe26");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./resources/js/layouts/App.vue?vue&type=script&lang=js");
/* harmony import */ var D_tasks_example_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_tasks_example_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_App_vue_vue_type_template_id_9087fe26__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/layouts/App.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/layouts/AsideMenu.vue":
/*!********************************************!*\
  !*** ./resources/js/layouts/AsideMenu.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AsideMenu_vue_vue_type_template_id_2eb4e783_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsideMenu.vue?vue&type=template&id=2eb4e783&scoped=true */ "./resources/js/layouts/AsideMenu.vue?vue&type=template&id=2eb4e783&scoped=true");
/* harmony import */ var _AsideMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsideMenu.vue?vue&type=script&lang=js */ "./resources/js/layouts/AsideMenu.vue?vue&type=script&lang=js");
/* harmony import */ var _AsideMenu_vue_vue_type_style_index_0_id_2eb4e783_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AsideMenu.vue?vue&type=style&index=0&id=2eb4e783&scoped=true&lang=css */ "./resources/js/layouts/AsideMenu.vue?vue&type=style&index=0&id=2eb4e783&scoped=true&lang=css");
/* harmony import */ var D_tasks_example_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_tasks_example_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AsideMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AsideMenu_vue_vue_type_template_id_2eb4e783_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-2eb4e783"],['__file',"resources/js/layouts/AsideMenu.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/layouts/FooterBar.vue":
/*!********************************************!*\
  !*** ./resources/js/layouts/FooterBar.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FooterBar_vue_vue_type_template_id_2c28d0c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterBar.vue?vue&type=template&id=2c28d0c4 */ "./resources/js/layouts/FooterBar.vue?vue&type=template&id=2c28d0c4");
/* harmony import */ var D_tasks_example_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,D_tasks_example_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_FooterBar_vue_vue_type_template_id_2c28d0c4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/layouts/FooterBar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/layouts/Header.vue":
/*!*****************************************!*\
  !*** ./resources/js/layouts/Header.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_b947e51e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=b947e51e */ "./resources/js/layouts/Header.vue?vue&type=template&id=b947e51e");
/* harmony import */ var _Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js */ "./resources/js/layouts/Header.vue?vue&type=script&lang=js");
/* harmony import */ var _Header_vue_vue_type_style_index_0_id_b947e51e_scope_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.vue?vue&type=style&index=0&id=b947e51e&scope=true&lang=css */ "./resources/js/layouts/Header.vue?vue&type=style&index=0&id=b947e51e&scope=true&lang=css");
/* harmony import */ var D_tasks_example_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_tasks_example_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Header_vue_vue_type_template_id_b947e51e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/layouts/Header.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/home/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/home/Home.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_4c3f1cd4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=4c3f1cd4 */ "./resources/js/pages/home/Home.vue?vue&type=template&id=4c3f1cd4");
/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ "./resources/js/pages/home/Home.vue?vue&type=script&lang=js");
/* harmony import */ var D_tasks_example_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_tasks_example_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Home_vue_vue_type_template_id_4c3f1cd4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/home/Home.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/layouts/App.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./resources/js/layouts/App.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/App.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/layouts/AsideMenu.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/layouts/AsideMenu.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AsideMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AsideMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AsideMenu.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/AsideMenu.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/layouts/Header.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/layouts/Header.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Header.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/home/Home.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/pages/home/Home.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/home/Home.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/layouts/App.vue?vue&type=template&id=9087fe26":
/*!********************************************************************!*\
  !*** ./resources/js/layouts/App.vue?vue&type=template&id=9087fe26 ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_9087fe26__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_9087fe26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=9087fe26 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/App.vue?vue&type=template&id=9087fe26");


/***/ }),

/***/ "./resources/js/layouts/AsideMenu.vue?vue&type=template&id=2eb4e783&scoped=true":
/*!**************************************************************************************!*\
  !*** ./resources/js/layouts/AsideMenu.vue?vue&type=template&id=2eb4e783&scoped=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AsideMenu_vue_vue_type_template_id_2eb4e783_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AsideMenu_vue_vue_type_template_id_2eb4e783_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AsideMenu.vue?vue&type=template&id=2eb4e783&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/AsideMenu.vue?vue&type=template&id=2eb4e783&scoped=true");


/***/ }),

/***/ "./resources/js/layouts/FooterBar.vue?vue&type=template&id=2c28d0c4":
/*!**************************************************************************!*\
  !*** ./resources/js/layouts/FooterBar.vue?vue&type=template&id=2c28d0c4 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FooterBar_vue_vue_type_template_id_2c28d0c4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FooterBar_vue_vue_type_template_id_2c28d0c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FooterBar.vue?vue&type=template&id=2c28d0c4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/FooterBar.vue?vue&type=template&id=2c28d0c4");


/***/ }),

/***/ "./resources/js/layouts/Header.vue?vue&type=template&id=b947e51e":
/*!***********************************************************************!*\
  !*** ./resources/js/layouts/Header.vue?vue&type=template&id=b947e51e ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_b947e51e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_b947e51e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=template&id=b947e51e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Header.vue?vue&type=template&id=b947e51e");


/***/ }),

/***/ "./resources/js/pages/home/Home.vue?vue&type=template&id=4c3f1cd4":
/*!************************************************************************!*\
  !*** ./resources/js/pages/home/Home.vue?vue&type=template&id=4c3f1cd4 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_4c3f1cd4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_4c3f1cd4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=template&id=4c3f1cd4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/home/Home.vue?vue&type=template&id=4c3f1cd4");


/***/ }),

/***/ "./resources/js/layouts/AsideMenu.vue?vue&type=style&index=0&id=2eb4e783&scoped=true&lang=css":
/*!****************************************************************************************************!*\
  !*** ./resources/js/layouts/AsideMenu.vue?vue&type=style&index=0&id=2eb4e783&scoped=true&lang=css ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AsideMenu_vue_vue_type_style_index_0_id_2eb4e783_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AsideMenu.vue?vue&type=style&index=0&id=2eb4e783&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/AsideMenu.vue?vue&type=style&index=0&id=2eb4e783&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/layouts/Header.vue?vue&type=style&index=0&id=b947e51e&scope=true&lang=css":
/*!************************************************************************************************!*\
  !*** ./resources/js/layouts/Header.vue?vue&type=style&index=0&id=b947e51e&scope=true&lang=css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_b947e51e_scope_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=style&index=0&id=b947e51e&scope=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Header.vue?vue&type=style&index=0&id=b947e51e&scope=true&lang=css");


/***/ })

}]);