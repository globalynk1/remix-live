"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1383],{

/***/ 81383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// SPDX-License-Identifier: GPL-3.0\n\npragma solidity >=0.7.0 <0.9.0;\nimport \"remix_tests.sol\";\nimport \"../contracts/MyToken.sol\";\n\ncontract MyTokenTest {\n\n    MyToken s;\n    function beforeAll () public {\n        s = new MyToken();\n    }\n\n    function testSetURI () public {\n        string memory uri = \"https://testuri.io/token\";\n        s.setURI(uri);\n        Assert.equal(s.uri(1), uri, \"uri did not match\");\n    }\n}");

/***/ })

}]);
//# sourceMappingURL=1383.plugin-etherscan.1728572116224.js.map