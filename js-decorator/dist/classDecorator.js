"use strict";

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function log(name) {
  return function decorator(Class) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      console.log("Arguments for " + name + ":args");
      return new (Function.prototype.bind.apply(Class, [null].concat(args)))();
    };
  };
}

var Example = (_dec = log("Demo"), _dec(_class = function Example(name, age) {
  _classCallCheck(this, Example);
}) || _class);


var e = new Example("Graham", 34);

console.log(e);