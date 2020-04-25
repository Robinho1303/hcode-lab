webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Robson\\Projetos\\hcodelab\\components\\Menu.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var LinkItem = [{
  id: 1,
  link: '/',
  label: 'Home'
}, {
  id: 2,
  link: '/historia',
  label: 'Historia'
}, {
  id: 3,
  link: '/galeria',
  label: 'Galeria'
}, {
  id: 4,
  link: '/contato',
  label: 'Contato'
}];

var Linkmenu = function Linkmenu(itens) {
  return __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: itens.link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("a", {
    title: itens.label,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, " ", itens.label)));
};

function Menu() {
  var _this2 = this;

  return __jsx("ul", {
    className: "jsx-1030973358",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, LinkItem.map(function (item) {
    return __jsx("linkMenu", {
      key: item.id,
      link: item.link,
      label: item.label,
      className: "jsx-1030973358",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1030973358",
    __self: this
  }, "li{list-style:none;}@media (min-width:320px){li{width:100%;line-height:40px;background:rgba(230,228,224,0.85);display:block;padding-left:5%;}a{-webkit-text-decoration:none;text-decoration:none;color:#707070;font-size:1.5em;font-family:'Open Sans';}}@media (min-width:960px) a{{font-size:1em;}}li{display:inline-block;width:18%;line-height:75px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUm9ic29uXFxQcm9qZXRvc1xcaGNvZGVsYWJcXGNvbXBvbmVudHNcXE1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JrQyxBQUdxQyxBQUlELEFBT1MsQUFVVixBQUlPLFdBcEJBLEdBa0J6QixFQXRCQSxLQXlCYSxPQXBCK0IsR0FxQnZCLGlCQUNDLEVBaEJBLFlBTEEsRUFNRSxFQWdCeEIsVUFyQndCLElBTVEsWUFMNUIsWUFNQSIsImZpbGUiOiJDOlxcVXNlcnNcXFJvYnNvblxcUHJvamV0b3NcXGhjb2RlbGFiXFxjb21wb25lbnRzXFxNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgTGlua0l0ZW0gPSBbXHJcbiAgICB7aWQ6MSwgbGluazogJy8nICwgbGFiZWw6ICdIb21lJ30sXHJcbiAgICB7aWQ6MiwgbGluazonL2hpc3RvcmlhJywgbGFiZWw6J0hpc3RvcmlhJ30sXHJcbiAgICB7aWQ6MywgbGluazonL2dhbGVyaWEnLCBsYWJlbDonR2FsZXJpYSd9LFxyXG4gICAge2lkOjQsIGxpbms6Jy9jb250YXRvJywgbGFiZWw6J0NvbnRhdG8nfSxcclxuXVxyXG5cclxuY29uc3QgTGlua21lbnUgPSAoaXRlbnMpID0+IChcclxuICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPXtpdGVucy5saW5rfT5cclxuICAgICAgICAgICAgPGEgdGl0bGU9e2l0ZW5zLmxhYmVsfT4ge2l0ZW5zLmxhYmVsfTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7TGlua0l0ZW0ubWFwKChpdGVtKT0+IChcclxuICAgICAgICAgICAgICAgIDxsaW5rTWVudSBrZXk9e2l0ZW0uaWR9IGxpbms9e2l0ZW0ubGlua30gbGFiZWw9e2l0ZW0ubGFiZWx9IC8+XHJcblxyXG4gICAgICAgICAgICApKX08c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7ICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMjgsIDIyNCwwLjg1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpXHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTglO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+ICAgIFxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICBcclxuICAgIClcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Robson\\\\Projetos\\\\hcodelab\\\\components\\\\Menu.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.90514c47051aa1817223.hot-update.js.map