"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.file2Base64 = void 0;

var file2Base64 = function file2Base64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
};

exports.file2Base64 = file2Base64;