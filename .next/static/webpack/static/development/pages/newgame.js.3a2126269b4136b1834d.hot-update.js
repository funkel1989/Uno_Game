webpackHotUpdate("static/development/pages/newgame.js",{

/***/ "./pages/newgame.js":
/*!**************************!*\
  !*** ./pages/newgame.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewGame; });
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/grichi/Desktop/Gri/react/uno-game/pages/newgame.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function NewGame() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("2"),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      name = _useState2[0],
      setName = _useState2[1];

  var onSubmit = function onSubmit(event) {
    alert("La cantidad de jugadores es: " + value + "Tu jugador es:" + name);
    event.preventDefault();
  };

  return __jsx(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "This is the New game Page"), __jsx("form", {
    onSubmit: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Cuantos jugadores van a jugar:", __jsx("select", {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("option", {
    value: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "2"), __jsx("option", {
    value: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "3"), __jsx("option", {
    value: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "4")), __jsx("input", {
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    placeholder: "Your name",
    type: "text",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  })), __jsx("input", {
    type: "submit",
    value: "Aceptar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=newgame.js.3a2126269b4136b1834d.hot-update.js.map