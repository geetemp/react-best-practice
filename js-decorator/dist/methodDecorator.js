"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function log(name) {
  return function decorator(t, n, descriptor) {
    var original = descriptor.value;
    if (typeof original === "function") {
      descriptor.value = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        console.log("Arguments for " + name + ":" + args);
        try {
          var result = original.apply(this, args);
          console.log("Result from " + name + ": " + result);
          return result;
        } catch (e) {
          console.log("Error from " + name + ":" + e);
          throw e;
        }
      };
    }
    return descriptor;
  };
}

var Example = (_dec = log("some tag"), (_class = function () {
  function Example() {
    _classCallCheck(this, Example);
  }

  _createClass(Example, [{
    key: "sum",
    value: function sum(a, b) {
      return a + b;
    }
  }]);

  return Example;
}(), (_applyDecoratedDescriptor(_class.prototype, "sum", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "sum"), _class.prototype)), _class));


var e = new Example();
e.sum(1, 2);