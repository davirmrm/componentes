"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validaDDD = exports.validaPhone = void 0;

var validaPhone = function validaPhone(e) {
  if (e === undefined) {
    return false;
  }

  var phone = e.replace(/[^\d]/g, '');

  if (phone.length === 10) {
    return true;
  }

  if (phone.length > 10) {
    return phone.substring(2, 3) === '9';
  }

  return false;
};

exports.validaPhone = validaPhone;

var validaDDD = function validaDDD(e) {
  if (e === undefined) {
    return false;
  }

  var phone = e.replace(/[^\d]/g, '');

  if (phone.length > 2) {
    return checkDDD(phone.substring(0, 2));
  }

  return true;
};

exports.validaDDD = validaDDD;

var checkDDD = function checkDDD(ddd) {
  return !!ddds.find(function (e) {
    return e === ddd;
  });
};

var ddds = ['11', '12', '13', '14', '15', '16', '17', '18', '19', '21', '22', '24', '27', '28', '31', '32', '33', '34', '35', '37', '38', '41', '42', '43', '44', '45', '46', '47', '48', '49', '51', '53', '54', '55', '61', '62', '63', '64', '65', '66', '67', '68', '69', '71', '73', '74', '75', '77', '79', '81', '82', '83', '84', '85', '86', '87', '88', '89', '91', '92', '93', '94', '95', '96', '97', '98', '99'];