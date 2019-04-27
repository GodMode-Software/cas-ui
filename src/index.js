"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var Header_1 = __importDefault(require("./components/layout_components/Header"));
var HelloMessage = /** @class */ (function (_super) {
    __extends(HelloMessage, _super);
    function HelloMessage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            cat: "Fluffeers"
        };
        return _this;
    }
    HelloMessage.prototype.render = function () {
        console.log('did u work');
        return react_1.default.createElement("div", null,
            react_1.default.createElement(Header_1.default, null),
            react_1.default.createElement("div", { className: "container" },
                react_1.default.createElement("h1", null,
                    "Hello ",
                    this.props.name),
                react_1.default.createElement("h2", null,
                    "My Cats Name is ",
                    this.state.cat)));
    };
    return HelloMessage;
}(react_1.default.Component));
var App = document.getElementById("CAS-UI-APP");
react_dom_1.default.render(react_1.default.createElement(HelloMessage, { name: "Yomi" }), App);
