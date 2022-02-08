"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Button: true
};
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _button.Button;
  }
});
var _buttonButton = {};
Object.keys(_buttonButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _buttonButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _buttonButton[key];
    }
  });
});

var _button = require("./components/button");