"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Header = function () { return (react_1.default.createElement("header", null,
    react_1.default.createElement("nav", { className: "navbar", role: "navigation", "aria-label": "main navigation" },
        react_1.default.createElement("div", { className: "navbar-brand" },
            react_1.default.createElement("a", { className: "navbar-item", href: "/" }, "No Picture"))))); };
exports.default = Header;
