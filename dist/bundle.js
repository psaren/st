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
var data = getData(100);
exports.data = data;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var ST = /** @class */function () {
    function ST(id, rowHeight) {
        this.id = id;
        this.el = document.getElementById(this.id);
        this.rowHeight = rowHeight || 34;
    }
    ST.prototype.init = function () {
        this.setContainerHeight();
        var num = this.visibleDataCount();
        this.renderTable(data_1.data.slice(0, num + 5));
        this.onScroll();
    };
    ST.prototype.renderTable = function (tableData) {
        var _this_1 = this;
        var html = '';
        tableData.forEach(function (item) {
            html += _this_1.getTemplate(item);
        });
        this.body.querySelector('.st-body-content').innerHTML = html;
    };
    ST.prototype.getTemplate = function (item) {
        return "<div class=\"tb-row\">\n    <div class=\"tb-row-item\">" + item.id + "</div>\n    <div class=\"tb-row-item\">" + item.name + "</div>\n    <div class=\"tb-row-item\">" + item.label + "</div>\n    <div class=\"tb-row-item\">" + item.position + "</div>\n  </div>";
    };
    ST.prototype.onScroll = function () {
        var _this = this;
        this.el.addEventListener('scroll', function (e) {
            var _scrollTop = e.target.scrollTop;
            var _content = _this.body.querySelector('.st-body-content');
            _content.style.top = _scrollTop + 'px';
            var _data = _this.getVisibleData(_scrollTop);
            _this.renderTable(_data);
        });
    };
    ST.prototype.getElement = function (cls, tag) {
        if (tag === void 0) {
            tag = 'div';
        }
        var _el = document.createElement(tag);
        if (cls !== '') {
            _el.className = cls;
        }
        return _el;
    };
    ST.prototype.setContainerHeight = function () {
        var _body = this.getElement('st-body');
        var _content = this.getElement('st-body-content');
        var fragment = document.createDocumentFragment();
        _body.style.height = data_1.data.length * 34 + 'px';
        fragment.appendChild(_content);
        _body.appendChild(fragment);
        this.el.appendChild(_body);
        this.body = this.el.querySelector('.st-body');
        this.topHolder = this.body.querySelector('.st-body-holder');
    };
    ST.prototype.visibleDataCount = function () {
        return Math.ceil(this.el.offsetHeight / this.rowHeight);
    };
    ST.prototype.getVisibleData = function (scrollTop) {
        console.log(scrollTop);
        var start = Math.floor(scrollTop / this.rowHeight);
        var end = Math.min(start + this.visibleDataCount() + 5, data_1.data.length);
        var _data = data_1.data.slice(start, end);
        return _data;
    };
    return ST;
}();
var st = new ST('table');
st.init();

},{"./data":1}]},{},[2])

//# sourceMappingURL=bundle.js.map
