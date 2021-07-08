/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Food.ts":
/*!*****************************!*\
  !*** ./src/modules/Food.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Food)
/* harmony export */ });
/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snake */ "./src/modules/Snake.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Food = /*#__PURE__*/function () {
  function Food() {
    _classCallCheck(this, Food);

    this.element = document.getElementById("food");
    this.snake = new _Snake__WEBPACK_IMPORTED_MODULE_0__.default();
  }

  _createClass(Food, [{
    key: "change",
    value: function change() {
      var X = Math.round(Math.random() * 29) * 10;
      var Y = Math.round(Math.random() * 29) * 10;
      this.element.style.left = X + 'px';
      this.element.style.top = Y + 'px';
    }
  }]);

  return Food;
}();



/***/ }),

/***/ "./src/modules/GameControl.ts":
/*!************************************!*\
  !*** ./src/modules/GameControl.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameControl)
/* harmony export */ });
/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Food */ "./src/modules/Food.ts");
/* harmony import */ var _ScorePanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScorePanel */ "./src/modules/ScorePanel.ts");
/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Snake */ "./src/modules/Snake.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var GameControl = /*#__PURE__*/function () {
  function GameControl() {
    var initSpeed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
    var subSpeed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
    var inputScore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
    var limitScore = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

    _classCallCheck(this, GameControl);

    //保存方向
    this.direction = ''; //控制移动开关

    this.isMove = true;
    this.food = new _Food__WEBPACK_IMPORTED_MODULE_0__.default();
    this.scorePanel = new _ScorePanel__WEBPACK_IMPORTED_MODULE_1__.default(inputScore, limitScore);
    this.snake = new _Snake__WEBPACK_IMPORTED_MODULE_2__.default();
    this.tipMsg = document.getElementById('tipMsg');
    this.scoreMsg = document.getElementById('scoreMsg'); //初始化数度，递减速度

    this.initSpeed = initSpeed;
    this.subSpeed = subSpeed;
    this.init();
  } //初始化游戏，调用事件监听


  _createClass(GameControl, [{
    key: "init",
    value: function init() {
      document.addEventListener("keydown", this.keydownHandler.bind(this));
      this.run();
      this.food.change();
    } //键盘点击时获取移动方向

  }, {
    key: "keydownHandler",
    value: function keydownHandler(event) {
      //禁止相反方向点击
      switch (this.direction) {
        case "ArrowUp":
        case "up":
          {
            if (event.key === 'ArrowDown' && this.snake.body.length > 1 || event.key === "down" && this.snake.body.length > 1) {
              return event.returnValue = false;
            }

            break;
          }

        case "ArrowDown":
        case "down":
          {
            if (event.key === 'ArrowUp' && this.snake.body.length > 1 || event.key === "up" && this.snake.body.length > 1) {
              return event.returnValue = false;
            }

            break;
          }

        case "ArrowLeft":
        case "left":
          {
            if (event.key === 'ArrowRight' && this.snake.body.length > 1 || event.key === "right" && this.snake.body.length > 1) {
              return event.returnValue = false;
            }

            break;
          }

        case "ArrowRight":
        case "right":
          {
            if (event.key === 'ArrowLeft' && this.snake.body.length > 1 || event.key === "left" && this.snake.body.length > 1) {
              return event.returnValue = false;
            }

            break;
          }
      } //传入方向


      if (event.key === 'ArrowUp' || event.key === 'up' || event.key === 'ArrowDown' || event.key === 'down' || event.key === 'ArrowLeft' || event.key === 'left' || event.key === 'ArrowRight' || event.key === 'right') this.direction = event.key;
    }
  }, {
    key: "run",
    value: function run() {
      var _this = this;

      var X = this.snake.X;
      var Y = this.snake.Y;

      switch (this.direction) {
        case "ArrowUp":
        case "up":
          {
            Y -= 10;
            break;
          }

        case "ArrowDown":
        case "down":
          {
            Y += 10;
            break;
          }

        case "ArrowLeft":
        case "Left":
          {
            X -= 10;
            break;
          }

        case "ArrowRight":
        case "Right":
          {
            X += 10;
          }
      }

      this.snake.X = X;
      this.snake.Y = Y;

      if (this.isMove) {
        setTimeout(function () {
          _this.run();

          _this.eatFood();

          _this.isMove = _this.snake.eatBody();
        }, this.initSpeed - (this.scorePanel.i - 1) * this.subSpeed);
      } else {
        this.tipMsg.innerText = "\u6E38\u620F\u7ED3\u675F,\u60A8\u7684\u5206\u6570\u4E3A";
        this.scoreMsg.innerText = "".concat(this.scorePanel.s);
      }
    } //判断食物和蛇头是否重合,并且加分

  }, {
    key: "eatFood",
    value: function eatFood() {
      if (this.food.element.offsetLeft === this.snake.X && this.food.element.offsetTop === this.snake.Y) {
        this.food.change();
        this.scorePanel.AddScore();
        this.snake.addBody();
      }
    }
  }]);

  return GameControl;
}();



/***/ }),

/***/ "./src/modules/ScorePanel.ts":
/*!***********************************!*\
  !*** ./src/modules/ScorePanel.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScorePanel)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ScorePanel = /*#__PURE__*/function () {
  function ScorePanel() {
    var inputLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    var limitLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    _classCallCheck(this, ScorePanel);

    this.s = 0;
    this.i = 1;
    this.score = document.getElementById('score');
    this.level = document.getElementById('level');
    this.inputLevel = inputLevel; //输入升级等级的限制

    this.limitLevel = limitLevel; //限制升级的最高级
  }

  _createClass(ScorePanel, [{
    key: "AddScore",
    value: function AddScore() {
      this.score.innerHTML = ++this.s + '';

      if (this.s % this.inputLevel === 0) {
        this.AddLevel();
      }
    }
  }, {
    key: "AddLevel",
    value: function AddLevel() {
      if (this.i < this.limitLevel) {
        this.level.innerHTML = ++this.i + '';
      }
    }
  }]);

  return ScorePanel;
}();



/***/ }),

/***/ "./src/modules/Snake.ts":
/*!******************************!*\
  !*** ./src/modules/Snake.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Snake)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Snake = /*#__PURE__*/function () {
  function Snake() {
    _classCallCheck(this, Snake);

    this.head = document.querySelector("#snake>div");
    this.element = document.getElementById("snake");
    this.body = this.element.getElementsByTagName('div');
  }

  _createClass(Snake, [{
    key: "X",
    get: function get() {
      return this.head.offsetLeft;
    },
    set: function set(Value) {
      this.moveBody();

      if (Value >= 300) {
        this.head.style.left = 0 + "px";
      } else if (Value < 0) {
        this.head.style.left = 290 + "px";
      } else {
        this.head.style.left = Value + "px";
      }
    }
  }, {
    key: "Y",
    get: function get() {
      return this.head.offsetTop;
    },
    set: function set(Value) {
      if (Value >= 300) {
        this.head.style.top = 0 + "px";
      } else if (Value < 0) {
        this.head.style.top = 290 + "px";
      } else {
        this.head.style.top = Value + "px";
      }
    }
  }, {
    key: "addBody",
    value: function addBody() {
      this.element.insertAdjacentHTML("beforeend", "<div></div>");
    } //获取每个身体移动的位置，并代替

  }, {
    key: "moveBody",
    value: function moveBody() {
      for (var i = this.body.length - 1; i > 0; i--) {
        var X = this.body[i - 1].offsetLeft;
        var Y = this.body[i - 1].offsetTop;
        this.body[i].style.left = X + 'px';
        this.body[i].style.top = Y + 'px';
      }
    } //检测身体碰撞

  }, {
    key: "eatBody",
    value: function eatBody() {
      var play = true;

      for (var i = this.body.length - 1; i > 0; i--) {
        var X = this.body[i].offsetLeft;
        var Y = this.body[i].offsetTop;

        if (this.head.offsetLeft === X && this.head.offsetTop === Y) {
          play = false;
        }
      }

      return play;
    }
  }]);

  return Snake;
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/assets/css/index.less":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/assets/css/index.less ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nbody {\n  font: bold 20px Courier;\n}\n#main {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 360px;\n  height: 460px;\n  margin: 50px auto;\n  border: 10px solid black;\n  border-radius: 20px;\n  background-color: #b7d4a8;\n}\n#stage {\n  position: relative;\n  width: 304px;\n  height: 304px;\n  border: 2px solid black;\n}\n#score_panel {\n  width: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n#snake > div {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background-color: black;\n  border: 1px solid #b7d4a8;\n}\n#food {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n  width: 10px;\n  height: 10px;\n}\n#food > div {\n  width: 4px;\n  height: 4px;\n  background-color: black;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n#tip {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  left: 120%;\n  width: 200px;\n  height: 250px;\n  margin: auto;\n  border-radius: 20px;\n  background-color: #b7d4a8;\n  border: 7px solid black;\n}\n#tip .tip_text {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 90%;\n  height: 70%;\n  padding: 10px;\n  border-radius: 10px;\n  border: 3px solid black;\n  font-size: 17px;\n}\n#tip .tip_text p {\n  text-align: center;\n  font-size: 65px;\n  color: red;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/css/index.less"],"names":[],"mappings":"AAGA;EACE,UAAA;EACA,SAAA;EACA,8BAAA;UAAA,sBAAA;AAFF;AAKA;EACE,uBAAA;AAHF;AAKA;EACE,kBAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,yBAAA;MAAA,6BAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,wBAAA;EACA,mBAAA;EACA,yBAAA;AAHF;AAKA;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;AAHF;AAKA;EACE,YAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,6BAAA;AAHF;AAME;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,yBAAA;AAJJ;AAOA;EACE,kBAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,mBAAA;MAAA,eAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,8BAAA;EACA,2BAAA;MAAA,4BAAA;EACA,WAAA;EACA,YAAA;AALF;AAME;EACE,UAAA;EACA,WAAA;EACA,uBAAA;EACA,gCAAA;UAAA,wBAAA;AAJJ;AAQA;EACE,kBAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,yBAAA;MAAA,6BAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,uBAAA;AANF;AANA;EAcI,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,yBAAA;MAAA,6BAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,UAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;AALJ;AAlBA;EAyBM,kBAAA;EACA,eAAA;EACA,UAAA;AAJN","sourcesContent":["\n@bc-color:#b7d4a8;\n\n*{\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody{\n  font: bold 20px Courier;\n}\n#main{\n  position: relative;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 360px;\n  height: 460px;\n  margin: 50px auto;\n  border: 10px solid black;\n  border-radius: 20px;\n  background-color:@bc-color;\n}\n#stage{\n  position: relative;\n  width: 304px;\n  height: 304px;\n  border: 2px solid black;\n}\n#score_panel{\n  width: 300px;\n  display: flex;\n  justify-content: space-around;\n}\n#snake{\n  &>div{\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    background-color: black;\n    border: 1px solid @bc-color;\n  }\n}\n#food{\n  position: absolute;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-content: space-between;\n  width: 10px;\n  height: 10px;\n  &>div{\n    width: 4px;\n    height: 4px;\n    background-color: black;\n    transform: rotate(45deg);\n  }\n}\n//Tip\n#tip{\n  position: absolute;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: space-around;\n  left: 120%;\n  width: 200px;\n  height: 250px;\n  margin: auto;\n  border-radius: 20px;\n  background-color: @bc-color;\n  border: 7px solid black;\n  .tip_text{\n    display: flex;\n    flex-flow: column;\n    justify-content: space-around;\n    align-items: center;\n    width: 90%;\n    height: 70%;\n    padding: 10px;\n    border-radius: 10px;\n    border: 3px solid black;\n    font-size: 17px;\n    p{\n      text-align: center;\n      font-size: 65px;\n      color: red;\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/index.less":
/*!***********************************!*\
  !*** ./src/assets/css/index.less ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/assets/css/index.less");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/index.less */ "./src/assets/css/index.less");
/* harmony import */ var _modules_GameControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/GameControl */ "./src/modules/GameControl.ts");
//less样式导入
 //类导入

 //传入初始速度，递减速度，升级分段，最高等级

new _modules_GameControl__WEBPACK_IMPORTED_MODULE_1__.default(200, 15, 10, 10);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbmFrZV9lYXRpbmcvLi9zcmMvbW9kdWxlcy9Gb29kLnRzIiwid2VicGFjazovL3NuYWtlX2VhdGluZy8uL3NyYy9tb2R1bGVzL0dhbWVDb250cm9sLnRzIiwid2VicGFjazovL3NuYWtlX2VhdGluZy8uL3NyYy9tb2R1bGVzL1Njb3JlUGFuZWwudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZWF0aW5nLy4vc3JjL21vZHVsZXMvU25ha2UudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZWF0aW5nLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly9zbmFrZV9lYXRpbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NuYWtlX2VhdGluZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3NuYWtlX2VhdGluZy8uL3NyYy9hc3NldHMvY3NzL2luZGV4Lmxlc3M/MzljNSIsIndlYnBhY2s6Ly9zbmFrZV9lYXRpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vc25ha2VfZWF0aW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NuYWtlX2VhdGluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zbmFrZV9lYXRpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zbmFrZV9lYXRpbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc25ha2VfZWF0aW5nL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NuYWtlX2VhdGluZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc25ha2VfZWF0aW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc25ha2VfZWF0aW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc25ha2VfZWF0aW5nLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbIkZvb2QiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNuYWtlIiwiU25ha2UiLCJYIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiWSIsInN0eWxlIiwibGVmdCIsInRvcCIsIkdhbWVDb250cm9sIiwiaW5pdFNwZWVkIiwic3ViU3BlZWQiLCJpbnB1dFNjb3JlIiwibGltaXRTY29yZSIsImRpcmVjdGlvbiIsImlzTW92ZSIsImZvb2QiLCJzY29yZVBhbmVsIiwiU2NvcmVQYW5lbCIsInRpcE1zZyIsInNjb3JlTXNnIiwiaW5pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlkb3duSGFuZGxlciIsImJpbmQiLCJydW4iLCJjaGFuZ2UiLCJldmVudCIsImtleSIsImJvZHkiLCJsZW5ndGgiLCJyZXR1cm5WYWx1ZSIsInNldFRpbWVvdXQiLCJlYXRGb29kIiwiZWF0Qm9keSIsImkiLCJpbm5lclRleHQiLCJzIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsIkFkZFNjb3JlIiwiYWRkQm9keSIsImlucHV0TGV2ZWwiLCJsaW1pdExldmVsIiwic2NvcmUiLCJsZXZlbCIsImlubmVySFRNTCIsIkFkZExldmVsIiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIlZhbHVlIiwibW92ZUJvZHkiLCJpbnNlcnRBZGphY2VudEhU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QUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTkE7Q0FFQTs7Q0FFQTs7QUFDQSxJQUFJN0MseURBQUosQ0FBZ0IsR0FBaEIsRUFBcUIsRUFBckIsRUFBeUIsRUFBekIsRUFBNkIsRUFBN0IsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU25ha2UgZnJvbSBcIi4vU25ha2VcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb2Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb2RcIik7XG4gICAgICAgIHRoaXMuc25ha2UgPSBuZXcgU25ha2UoKTtcbiAgICB9XG4gICAgY2hhbmdlKCkge1xuICAgICAgICBsZXQgWCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDI5KSAqIDEwO1xuICAgICAgICBsZXQgWSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDI5KSAqIDEwO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IFggKyAncHgnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gWSArICdweCc7XG4gICAgfVxufVxuIiwiaW1wb3J0IEZvb2QgZnJvbSAnLi9Gb29kJztcbmltcG9ydCBTY29yZVBhbmVsIGZyb20gXCIuL1Njb3JlUGFuZWxcIjtcbmltcG9ydCBTbmFrZSBmcm9tIFwiLi9TbmFrZVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbnRyb2wge1xuICAgIGNvbnN0cnVjdG9yKGluaXRTcGVlZCA9IDMwMCwgc3ViU3BlZWQgPSAzMCwgaW5wdXRTY29yZSA9IDEwLCBsaW1pdFNjb3JlID0gMTApIHtcbiAgICAgICAgLy/kv53lrZjmlrnlkJFcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnJztcbiAgICAgICAgLy/mjqfliLbnp7vliqjlvIDlhbNcbiAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmZvb2QgPSBuZXcgRm9vZDtcbiAgICAgICAgdGhpcy5zY29yZVBhbmVsID0gbmV3IFNjb3JlUGFuZWwoaW5wdXRTY29yZSwgbGltaXRTY29yZSk7XG4gICAgICAgIHRoaXMuc25ha2UgPSBuZXcgU25ha2UoKTtcbiAgICAgICAgdGhpcy50aXBNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGlwTXNnJyk7XG4gICAgICAgIHRoaXMuc2NvcmVNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmVNc2cnKTtcbiAgICAgICAgLy/liJ3lp4vljJbmlbDluqbvvIzpgJLlh4/pgJ/luqZcbiAgICAgICAgdGhpcy5pbml0U3BlZWQgPSBpbml0U3BlZWQ7XG4gICAgICAgIHRoaXMuc3ViU3BlZWQgPSBzdWJTcGVlZDtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIC8v5Yid5aeL5YyW5ri45oiP77yM6LCD55So5LqL5Lu255uR5ZCsXG4gICAgaW5pdCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlkb3duSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ydW4oKTtcbiAgICAgICAgdGhpcy5mb29kLmNoYW5nZSgpO1xuICAgIH1cbiAgICAvL+mUruebmOeCueWHu+aXtuiOt+WPluenu+WKqOaWueWQkVxuICAgIGtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIC8v56aB5q2i55u45Y+N5pa55ZCR54K55Ye7XG4gICAgICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICBjYXNlIFwidXBcIjoge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nICYmIHRoaXMuc25ha2UuYm9keS5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50LmtleSA9PT0gXCJkb3duXCIgJiYgdGhpcy5zbmFrZS5ib2R5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgY2FzZSBcImRvd25cIjoge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJyAmJiB0aGlzLnNuYWtlLmJvZHkubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICB8fCBldmVudC5rZXkgPT09IFwidXBcIiAmJiB0aGlzLnNuYWtlLmJvZHkubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnICYmIHRoaXMuc25ha2UuYm9keS5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50LmtleSA9PT0gXCJyaWdodFwiICYmIHRoaXMuc25ha2UuYm9keS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjoge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnICYmIHRoaXMuc25ha2UuYm9keS5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50LmtleSA9PT0gXCJsZWZ0XCIgJiYgdGhpcy5zbmFrZS5ib2R5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v5Lyg5YWl5pa55ZCRXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJyB8fCBldmVudC5rZXkgPT09ICd1cCcgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldmVudC5rZXkgPT09ICdkb3duJ1xuICAgICAgICAgICAgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBldmVudC5rZXkgPT09ICdsZWZ0JyB8fCBldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0JyB8fCBldmVudC5rZXkgPT09ICdyaWdodCcpXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGV2ZW50LmtleTtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBsZXQgWCA9IHRoaXMuc25ha2UuWDtcbiAgICAgICAgbGV0IFkgPSB0aGlzLnNuYWtlLlk7XG4gICAgICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICBjYXNlIFwidXBcIjoge1xuICAgICAgICAgICAgICAgIFkgLT0gMTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICBjYXNlIFwiZG93blwiOiB7XG4gICAgICAgICAgICAgICAgWSArPSAxMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJMZWZ0XCI6IHtcbiAgICAgICAgICAgICAgICBYIC09IDEwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJSaWdodFwiOiB7XG4gICAgICAgICAgICAgICAgWCArPSAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNuYWtlLlggPSBYO1xuICAgICAgICB0aGlzLnNuYWtlLlkgPSBZO1xuICAgICAgICBpZiAodGhpcy5pc01vdmUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucnVuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lYXRGb29kKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmUgPSB0aGlzLnNuYWtlLmVhdEJvZHkoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuaW5pdFNwZWVkIC0gKHRoaXMuc2NvcmVQYW5lbC5pIC0gMSkgKiB0aGlzLnN1YlNwZWVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGlwTXNnLmlubmVyVGV4dCA9IGDmuLjmiI/nu5PmnZ8s5oKo55qE5YiG5pWw5Li6YDtcbiAgICAgICAgICAgIHRoaXMuc2NvcmVNc2cuaW5uZXJUZXh0ID0gYCR7dGhpcy5zY29yZVBhbmVsLnN9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+WIpOaWremjn+eJqeWSjOibh+WktOaYr+WQpumHjeWQiCzlubbkuJTliqDliIZcbiAgICBlYXRGb29kKCkge1xuICAgICAgICBpZiAodGhpcy5mb29kLmVsZW1lbnQub2Zmc2V0TGVmdCA9PT0gdGhpcy5zbmFrZS5YICYmIHRoaXMuZm9vZC5lbGVtZW50Lm9mZnNldFRvcCA9PT0gdGhpcy5zbmFrZS5ZKSB7XG4gICAgICAgICAgICB0aGlzLmZvb2QuY2hhbmdlKCk7XG4gICAgICAgICAgICB0aGlzLnNjb3JlUGFuZWwuQWRkU2NvcmUoKTtcbiAgICAgICAgICAgIHRoaXMuc25ha2UuYWRkQm9keSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVQYW5lbCB7XG4gICAgY29uc3RydWN0b3IoaW5wdXRMZXZlbCA9IDEwLCBsaW1pdExldmVsID0gMTApIHtcbiAgICAgICAgdGhpcy5zID0gMDtcbiAgICAgICAgdGhpcy5pID0gMTtcbiAgICAgICAgdGhpcy5zY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xuICAgICAgICB0aGlzLmxldmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsJyk7XG4gICAgICAgIHRoaXMuaW5wdXRMZXZlbCA9IGlucHV0TGV2ZWw7IC8v6L6T5YWl5Y2H57qn562J57qn55qE6ZmQ5Yi2XG4gICAgICAgIHRoaXMubGltaXRMZXZlbCA9IGxpbWl0TGV2ZWw7IC8v6ZmQ5Yi25Y2H57qn55qE5pyA6auY57qnXG4gICAgfVxuICAgIEFkZFNjb3JlKCkge1xuICAgICAgICB0aGlzLnNjb3JlLmlubmVySFRNTCA9ICsrdGhpcy5zICsgJyc7XG4gICAgICAgIGlmICh0aGlzLnMgJSB0aGlzLmlucHV0TGV2ZWwgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuQWRkTGV2ZWwoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBBZGRMZXZlbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaSA8IHRoaXMubGltaXRMZXZlbCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbC5pbm5lckhUTUwgPSArK3RoaXMuaSArICcnO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25ha2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NuYWtlPmRpdlwiKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbmFrZVwiKTtcbiAgICAgICAgdGhpcy5ib2R5ID0gdGhpcy5lbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkaXYnKTtcbiAgICB9XG4gICAgZ2V0IFgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWQub2Zmc2V0TGVmdDtcbiAgICB9XG4gICAgZ2V0IFkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWQub2Zmc2V0VG9wO1xuICAgIH1cbiAgICBzZXQgWChWYWx1ZSkge1xuICAgICAgICB0aGlzLm1vdmVCb2R5KCk7XG4gICAgICAgIGlmIChWYWx1ZSA+PSAzMDApIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZC5zdHlsZS5sZWZ0ID0gMCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChWYWx1ZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZC5zdHlsZS5sZWZ0ID0gMjkwICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oZWFkLnN0eWxlLmxlZnQgPSBWYWx1ZSArIFwicHhcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQgWShWYWx1ZSkge1xuICAgICAgICBpZiAoVmFsdWUgPj0gMzAwKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQuc3R5bGUudG9wID0gMCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChWYWx1ZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZC5zdHlsZS50b3AgPSAyOTAgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQuc3R5bGUudG9wID0gVmFsdWUgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkQm9keSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxkaXY+PC9kaXY+XCIpO1xuICAgIH1cbiAgICAvL+iOt+WPluavj+S4qui6q+S9k+enu+WKqOeahOS9jee9ru+8jOW5tuS7o+abv1xuICAgIG1vdmVCb2R5KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5ib2R5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBYID0gdGhpcy5ib2R5W2kgLSAxXS5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgbGV0IFkgPSB0aGlzLmJvZHlbaSAtIDFdLm9mZnNldFRvcDtcbiAgICAgICAgICAgIHRoaXMuYm9keVtpXS5zdHlsZS5sZWZ0ID0gWCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmJvZHlbaV0uc3R5bGUudG9wID0gWSArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/mo4DmtYvouqvkvZPnorDmkp5cbiAgICBlYXRCb2R5KCkge1xuICAgICAgICBsZXQgcGxheSA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmJvZHkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IFggPSB0aGlzLmJvZHlbaV0ub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIGxldCBZID0gdGhpcy5ib2R5W2ldLm9mZnNldFRvcDtcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWQub2Zmc2V0TGVmdCA9PT0gWCAmJiB0aGlzLmhlYWQub2Zmc2V0VG9wID09PSBZKSB7XG4gICAgICAgICAgICAgICAgcGxheSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwbGF5O1xuICAgIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gIGZvbnQ6IGJvbGQgMjBweCBDb3VyaWVyO1xcbn1cXG4jbWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzNjBweDtcXG4gIGhlaWdodDogNDYwcHg7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIGJvcmRlcjogMTBweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdkNGE4O1xcbn1cXG4jc3RhZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDMwNHB4O1xcbiAgaGVpZ2h0OiAzMDRweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG4jc2NvcmVfcGFuZWwge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4jc25ha2UgPiBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiN2Q0YTg7XFxufVxcbiNmb29kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC1tcy1mbGV4LWxpbmUtcGFjazoganVzdGlmeTtcXG4gICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcbiNmb29kID4gZGl2IHtcXG4gIHdpZHRoOiA0cHg7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuI3RpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGxlZnQ6IDEyMCU7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiN2Q0YTg7XFxuICBib3JkZXI6IDdweCBzb2xpZCBibGFjaztcXG59XFxuI3RpcCAudGlwX3RleHQge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG4jdGlwIC50aXBfdGV4dCBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNjVweDtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL2luZGV4Lmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUFGRjtBQUtBO0VBQ0UsdUJBQUE7QUFIRjtBQUtBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EseUJBQUE7TUFBQSw2QkFBQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFIRjtBQUtBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBSEY7QUFLQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO01BQUEsNkJBQUE7QUFIRjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFKSjtBQU9BO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO01BQUEsZUFBQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSw4QkFBQTtFQUNBLDJCQUFBO01BQUEsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUxGO0FBTUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQUpKO0FBUUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSx5QkFBQTtNQUFBLHNCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtNQUFBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQU5GO0FBTkE7RUFjSSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EseUJBQUE7TUFBQSw2QkFBQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBTEo7QUFsQkE7RUF5Qk0sa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUpOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBiYy1jb2xvcjojYjdkNGE4O1xcblxcbip7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gIGZvbnQ6IGJvbGQgMjBweCBDb3VyaWVyO1xcbn1cXG4jbWFpbntcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzNjBweDtcXG4gIGhlaWdodDogNDYwcHg7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIGJvcmRlcjogMTBweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOkBiYy1jb2xvcjtcXG59XFxuI3N0YWdle1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDMwNHB4O1xcbiAgaGVpZ2h0OiAzMDRweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG4jc2NvcmVfcGFuZWx7XFxuICB3aWR0aDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbiNzbmFrZXtcXG4gICY+ZGl2e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBAYmMtY29sb3I7XFxuICB9XFxufVxcbiNmb29ke1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gICY+ZGl2e1xcbiAgICB3aWR0aDogNHB4O1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG59XFxuLy9UaXBcXG4jdGlwe1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbGVmdDogMTIwJTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJjLWNvbG9yO1xcbiAgYm9yZGVyOiA3cHggc29saWQgYmxhY2s7XFxuICAudGlwX3RleHR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIHB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGZvbnQtc2l6ZTogNjVweDtcXG4gICAgICBjb2xvcjogcmVkO1xcbiAgICB9XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgZ2V0VGFyZ2V0IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhcmdldDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vbGVzc+agt+W8j+WvvOWFpVxuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4Lmxlc3NcIjtcbi8v57G75a+85YWlXG5pbXBvcnQgR2FtZUNvbnRyb2wgZnJvbSBcIi4vbW9kdWxlcy9HYW1lQ29udHJvbFwiO1xuLy/kvKDlhaXliJ3lp4vpgJ/luqbvvIzpgJLlh4/pgJ/luqbvvIzljYfnuqfliIbmrrXvvIzmnIDpq5jnrYnnuqdcbm5ldyBHYW1lQ29udHJvbCgyMDAsIDE1LCAxMCwgMTApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==