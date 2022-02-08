"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.round = void 0;

var round = function round(num) {
  var places = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  if (!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + places) + "e-" + places);
  } else {
    var arr = ("" + num).split("e");
    var sig = "";

    if (+arr[1] + places > 0) {
      sig = "+";
    }

    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + places)) + "e-" + places);
  }
};

exports.round = round;