(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getData = function getData(num) {
    var data = [];
    for (var i = 0; i < num; i++) {
        data.push({
            id: i + 1,
            label: "label - " + (i + 1),
            name: "name - " + (i + 1),
            position: "position - " + (i + 1)
        });
    }
    return data;
};
var data = getData(1000);
exports.default = data;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var renderTable = function renderTable() {
    var tb = document.getElementById('table');
    var html = '';
    data_1.default.forEach(function (item) {
        html += "<div class=\"tb-row\">\n      <span class=\"tb-row-item\">" + item.id + "</span>\n      <span class=\"tb-row-item\">" + item.name + "</span>\n      <span class=\"tb-row-item\">" + item.label + "</span>\n      <span class=\"tb-row-item\">" + item.position + "</span>\n    </div>";
    });
    tb.innerHTML = html;
};
renderTable();

},{"./data":1}]},{},[2])

//# sourceMappingURL=bundle.js.map
