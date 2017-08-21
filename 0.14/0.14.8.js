(this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK: 0.14.8 Build 20160812');
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	__webpack_require__(1);
	
	/**
	 * register methods
	 */
	var methods = __webpack_require__(102);
	var _global = global;
	var registerMethods = _global.registerMethods;
	
	registerMethods(methods);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	__webpack_require__(2);
	
	var _runtime = __webpack_require__(75);
	
	var _runtime2 = _interopRequireDefault(_runtime);
	
	var _package = __webpack_require__(100);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var native = _package.subversion.native;
	var transformer = _package.subversion.transformer;
	
	var _loop = function _loop(methodName) {
	  global[methodName] = function () {
	    var ret = _runtime2.default[methodName].apply(_runtime2.default, arguments);
	    if (ret instanceof Error) {
	      console.error(ret.toString());
	    }
	    return ret;
	  };
	};
	
	for (var methodName in _runtime2.default) {
	  _loop(methodName);
	}
	
	Object.assign(global, {
	  frameworkVersion: native,
	  needTransformerVersion: transformer
	});
	
	/**
	 * register methods
	 */
	var methods = __webpack_require__(101);
	var _global = global;
	var registerMethods = _global.registerMethods;
	
	registerMethods(methods);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(3);
	
	__webpack_require__(41);
	
	__webpack_require__(42);
	
	__webpack_require__(74);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(5);
	module.exports = __webpack_require__(8).Object.assign;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(6);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(24) });

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(7),
	    core = __webpack_require__(8),
	    hide = __webpack_require__(9),
	    redefine = __webpack_require__(19),
	    ctx = __webpack_require__(22),
	    PROTOTYPE = 'prototype';
	
	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
	      key,
	      own,
	      out,
	      exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	$export.U = 64; // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(10),
	    createDesc = __webpack_require__(18);
	module.exports = __webpack_require__(14) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(11),
	    IE8_DOM_DEFINE = __webpack_require__(13),
	    toPrimitive = __webpack_require__(17),
	    dP = Object.defineProperty;
	
	exports.f = __webpack_require__(14) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(12);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = !__webpack_require__(14) && !__webpack_require__(15)(function () {
	  return Object.defineProperty(__webpack_require__(16)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(15)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(12),
	    document = __webpack_require__(7).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(12);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(7),
	    hide = __webpack_require__(9),
	    has = __webpack_require__(20),
	    SRC = __webpack_require__(21)('src'),
	    TO_STRING = 'toString',
	    $toString = Function[TO_STRING],
	    TPL = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(8).inspectSource = function (it) {
	  return $toString.call(it);
	};
	
	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else {
	    if (!safe) {
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if (O[key]) O[key] = val;else hide(O, key, val);
	    }
	  }
	  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// optional / simple context binding
	var aFunction = __webpack_require__(23);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	
	var getKeys = __webpack_require__(25),
	    gOPS = __webpack_require__(38),
	    pIE = __webpack_require__(39),
	    toObject = __webpack_require__(40),
	    IObject = __webpack_require__(28),
	    $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(15)(function () {
	  var A = {},
	      B = {},
	      S = Symbol(),
	      K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) {
	    B[k] = k;
	  });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  var T = toObject(target),
	      aLen = arguments.length,
	      index = 1,
	      getSymbols = gOPS.f,
	      isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]),
	        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
	        length = keys.length,
	        j = 0,
	        key;
	    while (length > j) {
	      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	    }
	  }return T;
	} : $assign;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(26),
	    enumBugKeys = __webpack_require__(37);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(20),
	    toIObject = __webpack_require__(27),
	    arrayIndexOf = __webpack_require__(31)(false),
	    IE_PROTO = __webpack_require__(35)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object),
	      i = 0,
	      result = [],
	      key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(28),
	    defined = __webpack_require__(30);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(29);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(27),
	    toLength = __webpack_require__(32),
	    toIndex = __webpack_require__(34);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this),
	        length = toLength(O.length),
	        index = toIndex(fromIndex, length),
	        value;
	    // Array#includes uses SameValueZero equality algorithm
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	      // Array#toIndex ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if (IS_INCLUDES || index in O) {
	        if (O[index] === el) return IS_INCLUDES || index || 0;
	      }
	    }return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(33),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(33),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var shared = __webpack_require__(36)('keys'),
	    uid = __webpack_require__(21);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(7),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(30);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _global = global;
	var setTimeout = _global.setTimeout;
	var setTimeoutNative = _global.setTimeoutNative;
	
	
	var MSG = 'Use "global.setTimeout"  is unexpected, ' + 'please use require("@weex-module").setTimeout instead.';
	
	// fix no setTimeout on Android V8
	/* istanbul ignore if */
	if (typeof setTimeout === 'undefined' && typeof setTimeoutNative === 'function') {
	  (function () {
	    var timeoutMap = {};
	    var timeoutId = 0;
	    global.setTimeout = function (cb, time) {
	      console.warn(MSG);
	      timeoutMap[++timeoutId] = cb;
	      setTimeoutNative(timeoutId.toString(), time);
	    };
	    global.setTimeoutCallback = function (id) {
	      if (typeof timeoutMap[id] === 'function') {
	        timeoutMap[id]();
	        delete timeoutMap[id];
	      }
	    };
	  })();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	// fix Promise Problem on JSContext of iOS7~8
	// @see https://bugs.webkit.org/show_bug.cgi?id=135866
	var _global = global;
	var WXEnvironment = _global.WXEnvironment;
	
	if (WXEnvironment && WXEnvironment.platform === 'iOS' && /^(7|8)\./.test(WXEnvironment.osVersion)) {
	  global.Promise = null;
	}
	__webpack_require__(43);
	__webpack_require__(46);
	__webpack_require__(57);
	__webpack_require__(61);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	
	var classof = __webpack_require__(44),
	    test = {};
	test[__webpack_require__(45)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(19)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(29),
	    TAG = __webpack_require__(45)('toStringTag')
	// ES3 wrong here
	,
	    ARG = cof(function () {
	  return arguments;
	}()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (e) {/* empty */}
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(36)('wks'),
	    uid = __webpack_require__(21),
	    _Symbol = __webpack_require__(7).Symbol,
	    USE_SYMBOL = typeof _Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $at = __webpack_require__(47)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(48)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(33),
	    defined = __webpack_require__(30);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(49),
	    $export = __webpack_require__(6),
	    redefine = __webpack_require__(19),
	    hide = __webpack_require__(9),
	    has = __webpack_require__(20),
	    Iterators = __webpack_require__(50),
	    $iterCreate = __webpack_require__(51),
	    setToStringTag = __webpack_require__(55),
	    getPrototypeOf = __webpack_require__(56),
	    ITERATOR = __webpack_require__(45)('iterator'),
	    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	,
	    FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';
	
	var returnThis = function returnThis() {
	  return this;
	};
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      DEF_VALUES = DEFAULT == VALUES,
	      VALUES_BUG = false,
	      proto = Base.prototype,
	      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      $default = $native || getMethod(DEFAULT),
	      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
	      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
	      methods,
	      key,
	      IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = false;

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var create = __webpack_require__(52),
	    descriptor = __webpack_require__(18),
	    setToStringTag = __webpack_require__(55),
	    IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(9)(IteratorPrototype, __webpack_require__(45)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(11),
	    dPs = __webpack_require__(53),
	    enumBugKeys = __webpack_require__(37),
	    IE_PROTO = __webpack_require__(35)('IE_PROTO'),
	    Empty = function Empty() {/* empty */},
	    PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(16)('iframe'),
	      i = enumBugKeys.length,
	      lt = '<',
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(54).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  _createDict = iframeDocument.F;
	  while (i--) {
	    delete _createDict[PROTOTYPE][enumBugKeys[i]];
	  }return _createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = _createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(10),
	    anObject = __webpack_require__(11),
	    getKeys = __webpack_require__(25);
	
	module.exports = __webpack_require__(14) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties),
	      length = keys.length,
	      i = 0,
	      P;
	  while (length > i) {
	    dP.f(O, P = keys[i++], Properties[P]);
	  }return O;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(7).document && document.documentElement;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(10).f,
	    has = __webpack_require__(20),
	    TAG = __webpack_require__(45)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(20),
	    toObject = __webpack_require__(40),
	    IE_PROTO = __webpack_require__(35)('IE_PROTO'),
	    ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $iterators = __webpack_require__(58),
	    redefine = __webpack_require__(19),
	    global = __webpack_require__(7),
	    hide = __webpack_require__(9),
	    Iterators = __webpack_require__(50),
	    wks = __webpack_require__(45),
	    ITERATOR = wks('iterator'),
	    TO_STRING_TAG = wks('toStringTag'),
	    ArrayValues = Iterators.Array;
	
	for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
	  var NAME = collections[i],
	      Collection = global[NAME],
	      proto = Collection && Collection.prototype,
	      key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for (key in $iterators) {
	      if (!proto[key]) redefine(proto, key, $iterators[key], true);
	    }
	  }
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var addToUnscopables = __webpack_require__(59),
	    step = __webpack_require__(60),
	    Iterators = __webpack_require__(50),
	    toIObject = __webpack_require__(27);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(48)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(45)('unscopables'),
	    ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(9)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(49),
	    global = __webpack_require__(7),
	    ctx = __webpack_require__(22),
	    classof = __webpack_require__(44),
	    $export = __webpack_require__(6),
	    isObject = __webpack_require__(12),
	    aFunction = __webpack_require__(23),
	    anInstance = __webpack_require__(62),
	    forOf = __webpack_require__(63),
	    speciesConstructor = __webpack_require__(67),
	    task = __webpack_require__(68).set,
	    microtask = __webpack_require__(70)(),
	    PROMISE = 'Promise',
	    TypeError = global.TypeError,
	    process = global.process,
	    $Promise = global[PROMISE],
	    process = global.process,
	    isNode = classof(process) == 'process',
	    empty = function empty() {/* empty */},
	    Internal,
	    GenericPromiseCapability,
	    Wrapper;
	
	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1),
	        FakePromise = (promise.constructor = {})[__webpack_require__(45)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) {/* empty */}
	}();
	
	// helpers
	var sameConstructor = function sameConstructor(a, b) {
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function isThenable(it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function newPromiseCapability(C) {
	  return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	};
	var perform = function perform(exec) {
	  try {
	    exec();
	  } catch (e) {
	    return { error: e };
	  }
	};
	var notify = function notify(promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v,
	        ok = promise._s == 1,
	        i = 0;
	    var run = function run(reaction) {
	      var handler = ok ? reaction.ok : reaction.fail,
	          resolve = reaction.resolve,
	          reject = reaction.reject,
	          domain = reaction.domain,
	          result,
	          then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) {
	      run(chain[i++]);
	    } // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function onUnhandled(promise) {
	  task.call(global, function () {
	    var value = promise._v,
	        abrupt,
	        handler,
	        console;
	    if (isUnhandled(promise)) {
	      abrupt = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    }promise._a = undefined;
	    if (abrupt) throw abrupt.error;
	  });
	};
	var isUnhandled = function isUnhandled(promise) {
	  if (promise._h == 1) return false;
	  var chain = promise._a || promise._c,
	      i = 0,
	      reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  }return true;
	};
	var onHandleUnhandled = function onHandleUnhandled(promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function $reject(value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function $resolve(value) {
	  var promise = this,
	      then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};
	
	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor) {
	    this._c = []; // <- awaiting reactions
	    this._a = undefined; // <- checked in isUnhandled reactions
	    this._s = 0; // <- state
	    this._d = false; // <- done
	    this._v = undefined; // <- value
	    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false; // <- notify
	  };
	  Internal.prototype = __webpack_require__(71)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function _catch(onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function PromiseCapability() {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(55)($Promise, PROMISE);
	__webpack_require__(72)(PROMISE);
	Wrapper = __webpack_require__(8)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this),
	        $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
	    var capability = newPromiseCapability(this),
	        $$resolve = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(73)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        resolve = capability.resolve,
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      var values = [],
	          index = 0,
	          remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++,
	            alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  }return it;
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(22),
	    call = __webpack_require__(64),
	    isArrayIter = __webpack_require__(65),
	    anObject = __webpack_require__(11),
	    toLength = __webpack_require__(32),
	    getIterFn = __webpack_require__(66),
	    BREAK = {},
	    RETURN = {};
	var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () {
	    return iterable;
	  } : getIterFn(iterable),
	      f = ctx(fn, that, entries ? 2 : 1),
	      index = 0,
	      length,
	      step,
	      iterator,
	      result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	_exports.BREAK = BREAK;
	_exports.RETURN = RETURN;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(11);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// check on default Array iterator
	var Iterators = __webpack_require__(50),
	    ITERATOR = __webpack_require__(45)('iterator'),
	    ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(44),
	    ITERATOR = __webpack_require__(45)('iterator'),
	    Iterators = __webpack_require__(50);
	module.exports = __webpack_require__(8).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(11),
	    aFunction = __webpack_require__(23),
	    SPECIES = __webpack_require__(45)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor,
	      S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(22),
	    invoke = __webpack_require__(69),
	    html = __webpack_require__(54),
	    cel = __webpack_require__(16),
	    global = __webpack_require__(7),
	    process = global.process,
	    setTask = global.setImmediate,
	    clearTask = global.clearImmediate,
	    MessageChannel = global.MessageChannel,
	    counter = 0,
	    queue = {},
	    ONREADYSTATECHANGE = 'onreadystatechange',
	    defer,
	    channel,
	    port;
	var run = function run() {
	  var id = +this;
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function listener(event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [],
	        i = 1;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }queue[++counter] = function () {
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(29)(process) == 'process') {
	    defer = function defer(id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	    // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	    // Browsers with postMessage, skip WebWorkers
	    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function defer(id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	    // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function defer(id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	    // Rest old browsers
	  } else {
	    defer = function defer(id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";
	
	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	                  var un = that === undefined;
	                  switch (args.length) {
	                                    case 0:
	                                                      return un ? fn() : fn.call(that);
	                                    case 1:
	                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
	                                    case 2:
	                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	                                    case 3:
	                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	                                    case 4:
	                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	                  }return fn.apply(that, args);
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(7),
	    macrotask = __webpack_require__(68).set,
	    Observer = global.MutationObserver || global.WebKitMutationObserver,
	    process = global.process,
	    Promise = global.Promise,
	    isNode = __webpack_require__(29)(process) == 'process';
	
	module.exports = function () {
	  var head, last, notify;
	
	  var flush = function flush() {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();else last = undefined;
	        throw e;
	      }
	    }last = undefined;
	    if (parent) parent.enter();
	  };
	
	  // Node.js
	  if (isNode) {
	    notify = function notify() {
	      process.nextTick(flush);
	    };
	    // browsers with MutationObserver
	  } else if (Observer) {
	    var toggle = true,
	        node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function notify() {
	      node.data = toggle = !toggle;
	    };
	    // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function notify() {
	      promise.then(flush);
	    };
	    // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessag
	    // - onreadystatechange
	    // - setTimeout
	  } else {
	    notify = function notify() {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    }last = task;
	  };
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var redefine = __webpack_require__(19);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    redefine(target, key, src[key], safe);
	  }return target;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(7),
	    dP = __webpack_require__(10),
	    DESCRIPTORS = __webpack_require__(14),
	    SPECIES = __webpack_require__(45)('species');
	
	module.exports = function (KEY) {
	  var C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ITERATOR = __webpack_require__(45)('iterator'),
	    SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  Array.from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[ITERATOR]();
	    iter.next = function () {
	      return { done: safe = true };
	    };
	    arr[ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var _global = global;
	var console = _global.console;
	var nativeLog = _global.nativeLog;
	
	var LEVELS = ['error', 'warn', 'info', 'log', 'debug'];
	var levelMap = {};
	
	generateLevelMap();
	
	/* istanbul ignore if */
	if (typeof console === 'undefined' || // Android
	global.WXEnvironment && global.WXEnvironment.platform === 'iOS' // iOS
	) {
	    global.console = {
	      debug: function debug() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        if (checkLevel('debug')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__DEBUG']));
	        }
	      },
	      log: function log() {
	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          args[_key2] = arguments[_key2];
	        }
	
	        if (checkLevel('log')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__LOG']));
	        }
	      },
	      info: function info() {
	        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	          args[_key3] = arguments[_key3];
	        }
	
	        if (checkLevel('info')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__INFO']));
	        }
	      },
	      warn: function warn() {
	        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	          args[_key4] = arguments[_key4];
	        }
	
	        if (checkLevel('warn')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__WARN']));
	        }
	      },
	      error: function error() {
	        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	          args[_key5] = arguments[_key5];
	        }
	
	        if (checkLevel('error')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__ERROR']));
	        }
	      }
	    };
	  } else {
	  // HTML5
	  var debug = console.debug;
	  var log = console.log;
	  var info = console.info;
	  var warn = console.warn;
	  var error = console.error;
	
	  console.__ori__ = { debug: debug, log: log, info: info, warn: warn, error: error };
	  console.debug = function () {
	    for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	      args[_key6] = arguments[_key6];
	    }
	
	    if (checkLevel('debug')) {
	      console.__ori__.debug.apply(console, args);
	    }
	  };
	  console.log = function () {
	    for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	      args[_key7] = arguments[_key7];
	    }
	
	    if (checkLevel('log')) {
	      console.__ori__.log.apply(console, args);
	    }
	  };
	  console.info = function () {
	    for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	      args[_key8] = arguments[_key8];
	    }
	
	    if (checkLevel('info')) {
	      console.__ori__.info.apply(console, args);
	    }
	  };
	  console.warn = function () {
	    for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	      args[_key9] = arguments[_key9];
	    }
	
	    if (checkLevel('warn')) {
	      console.__ori__.warn.apply(console, args);
	    }
	  };
	  console.error = function () {
	    for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
	      args[_key10] = arguments[_key10];
	    }
	
	    if (checkLevel('error')) {
	      console.__ori__.error.apply(console, args);
	    }
	  };
	}
	
	function generateLevelMap() {
	  LEVELS.forEach(function (level) {
	    var levelIndex = LEVELS.indexOf(level);
	    levelMap[level] = {};
	    LEVELS.forEach(function (type) {
	      var typeIndex = LEVELS.indexOf(type);
	      if (typeIndex <= levelIndex) {
	        levelMap[level][type] = true;
	      }
	    });
	  });
	}
	
	function normalize(v) {
	  var type = Object.prototype.toString.call(v);
	  if (type.toLowerCase() === '[object object]') {
	    v = JSON.stringify(v);
	  } else {
	    v = String(v);
	  }
	  return v;
	}
	
	function checkLevel(type) {
	  var logLevel = global.WXEnvironment && global.WXEnvironment.logLevel || 'log';
	  return levelMap[logLevel] && levelMap[logLevel][type];
	}
	
	function format(args) {
	  return args.map(function (v) {
	    return normalize(v);
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createInstance = createInstance;
	
	var _config = __webpack_require__(76);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _vdom = __webpack_require__(98);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var config = {
	  Document: _vdom.Document, Element: _vdom.Element, Comment: _vdom.Comment,
	  sendTasks: function sendTasks() {
	    var _global;
	
	    return (_global = global).callNative.apply(_global, arguments);
	  }
	};
	
	for (var name in _config2.default) {
	  var framework = _config2.default[name];
	  framework.init(config);
	}
	
	var versionRegExp = /^\/\/ *(\{[^\}]*\}) *\r?\n/;
	
	function checkVersion(code) {
	  var info = void 0;
	  var result = versionRegExp.exec(code);
	  if (result) {
	    try {
	      info = JSON.parse(result[1]);
	    } catch (e) {}
	  }
	  return info;
	}
	
	var instanceMap = {};
	
	function createInstance(id, code, config, data) {
	  var info = instanceMap[id];
	  if (!info) {
	    info = checkVersion(code) || {};
	    if (!_config2.default[info.framework]) {
	      info.framework = 'Weex';
	    }
	    instanceMap[id] = info;
	    config = config || {};
	    config.bundleVersion = info.version;
	    return _config2.default[info.framework].createInstance(id, code, config, data);
	  }
	  return new Error('invalid instance id "' + id + '"');
	}
	
	var methods = {
	  createInstance: createInstance
	};
	
	function genInit(methodName) {
	  methods[methodName] = function () {
	    for (var _name in _config2.default) {
	      var _framework = _config2.default[_name];
	      if (_framework && _framework[methodName]) {
	        _framework[methodName].apply(_framework, arguments);
	      }
	    }
	  };
	}
	
	['registerComponents', 'registerModules', 'registerMethods'].forEach(genInit);
	
	function genInstance(methodName) {
	  methods[methodName] = function () {
	    var id = arguments.length <= 0 ? undefined : arguments[0];
	    var info = instanceMap[id];
	    if (info && _config2.default[info.framework]) {
	      var _frameworks$info$fram;
	
	      return (_frameworks$info$fram = _config2.default[info.framework])[methodName].apply(_frameworks$info$fram, arguments);
	    }
	    return new Error('invalid instance id "' + id + '"');
	  };
	}
	
	['destroyInstance', 'refreshInstance', 'callJS', 'getRoot'].forEach(genInstance);
	
	methods.receiveTasks = methods.callJS;
	
	exports.default = methods;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _default = __webpack_require__(77);
	
	var Weex = _interopRequireWildcard(_default);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = {
	  Weex: Weex
	}; // built by npm run build:config

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * @fileOverview Main entry, instance manager
	                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                   * - createInstance(instanceId, code, options, data)
	                                                                                                                                                                                                                                                   * - refreshInstance(instanceId, data)
	                                                                                                                                                                                                                                                   * - destroyInstance(instanceId)
	                                                                                                                                                                                                                                                   * - registerComponents(components)
	                                                                                                                                                                                                                                                   * - registerModules(modules)
	                                                                                                                                                                                                                                                   * - getRoot(instanceId)
	                                                                                                                                                                                                                                                   * - instanceMap
	                                                                                                                                                                                                                                                   * - callJS(instanceId, tasks)
	                                                                                                                                                                                                                                                   *   - fireEvent(ref, type, data)
	                                                                                                                                                                                                                                                   *   - callback(funcId, data)
	                                                                                                                                                                                                                                                   */
	
	exports.init = init;
	exports.createInstance = createInstance;
	exports.refreshInstance = refreshInstance;
	exports.destroyInstance = destroyInstance;
	exports.registerComponents = registerComponents;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	exports.getRoot = getRoot;
	exports.callJS = callJS;
	
	var _config = __webpack_require__(78);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _app = __webpack_require__(79);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _vm = __webpack_require__(84);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var nativeComponentMap = _config2.default.nativeComponentMap;
	
	var instanceMap = {};
	
	function init(cfg) {
	  _config2.default.Document = cfg.Document;
	  _config2.default.Element = cfg.Element;
	  _config2.default.Comment = cfg.Comment;
	  _config2.default.sendTasks = cfg.sendTasks;
	}
	
	/**
	 * create a Weex instance
	 *
	 * @param  {string} instanceId
	 * @param  {string} code
	 * @param  {object} [options] option `HAS_LOG` enable print log
	 * @param  {object} [data]
	 */
	function createInstance(instanceId, code, options, data) {
	  var instance = instanceMap[instanceId];
	  options = options || {};
	
	  _config2.default.debug = options.debug;
	
	  var result = void 0;
	  if (!instance) {
	    instance = new _app2.default(instanceId, options);
	    instanceMap[instanceId] = instance;
	    result = instance.init(code, data);
	  } else {
	    result = new Error('invalid instance id "' + instanceId + '"');
	  }
	
	  return result;
	}
	
	/**
	 * refresh a Weex instance
	 *
	 * @param  {string} instanceId
	 * @param  {object} data
	 */
	function refreshInstance(instanceId, data) {
	  var instance = instanceMap[instanceId];
	  var result = void 0;
	  if (instance) {
	    result = instance.refreshData(data);
	  } else {
	    result = new Error('invalid instance id "' + instanceId + '"');
	  }
	  return result;
	}
	
	/**
	 * destroy a Weex instance
	 * @param  {string} instanceId
	 */
	function destroyInstance(instanceId) {
	  var instance = instanceMap[instanceId];
	  if (!instance) {
	    return new Error('invalid instance id "' + instanceId + '"');
	  }
	
	  instance.destroy();
	  delete instanceMap[instanceId];
	  return instanceMap;
	}
	
	/**
	 * register the name of each native component
	 * @param  {array} components array of name
	 */
	function registerComponents(components) {
	  if (Array.isArray(components)) {
	    components.forEach(function register(name) {
	      /* istanbul ignore if */
	      if (!name) {
	        return;
	      }
	      if (typeof name === 'string') {
	        nativeComponentMap[name] = true;
	      } else if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object' && typeof name.type === 'string') {
	        nativeComponentMap[name.type] = name;
	      }
	    });
	  }
	}
	
	/**
	 * register the name and methods of each module
	 * @param  {object} modules a object of modules
	 */
	function registerModules(modules) {
	  if ((typeof modules === 'undefined' ? 'undefined' : _typeof(modules)) === 'object') {
	    _vm2.default.registerModules(modules);
	  }
	}
	
	/**
	 * register the name and methods of each api
	 * @param  {object} apis a object of apis
	 */
	function registerMethods(apis) {
	  if ((typeof apis === 'undefined' ? 'undefined' : _typeof(apis)) === 'object') {
	    _vm2.default.registerMethods(apis);
	  }
	}
	
	/**
	 * get a whole element tree of an instance
	 * for debugging
	 * @param  {string} instanceId
	 * @return {object} a virtual dom tree
	 */
	function getRoot(instanceId) {
	  var instance = instanceMap[instanceId];
	  var result = void 0;
	  if (instance) {
	    result = instance.getRootElement();
	  } else {
	    result = new Error('invalid instance id "' + instanceId + '"');
	  }
	  return result;
	}
	
	var jsHandlers = {
	  fireEvent: function fireEvent(instanceId, ref, type, data, domChanges) {
	    var instance = instanceMap[instanceId];
	    return instance.fireEvent(ref, type, data, domChanges);
	  },
	
	  callback: function callback(instanceId, funcId, data, ifLast) {
	    var instance = instanceMap[instanceId];
	    return instance.callback(funcId, data, ifLast);
	  }
	};
	
	/**
	 * accept calls from native (event or callback)
	 *
	 * @param  {string} instanceId
	 * @param  {array} tasks list with `method` and `args`
	 */
	function callJS(instanceId, tasks) {
	  var instance = instanceMap[instanceId];
	  if (instance && Array.isArray(tasks)) {
	    var _ret = function () {
	      var results = [];
	      tasks.forEach(function (task) {
	        var handler = jsHandlers[task.method];
	        var args = [].concat(_toConsumableArray(task.args));
	        if (typeof handler === 'function') {
	          args.unshift(instanceId);
	          results.push(handler.apply(undefined, _toConsumableArray(args)));
	        }
	      });
	      return {
	        v: results
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	  return new Error('invalid instance id "' + instanceId + '" or tasks');
	}

/***/ },
/* 78 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  nativeComponentMap: {
	    text: true,
	    image: true,
	    container: true,
	    slider: {
	      type: 'slider',
	      append: 'tree'
	    },
	    cell: {
	      type: 'cell',
	      append: 'tree'
	    }
	  },
	  customComponentMap: {},
	  debug: false
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = AppInstance;
	
	var _util = __webpack_require__(80);
	
	var _bundle = __webpack_require__(81);
	
	var bundle = _interopRequireWildcard(_bundle);
	
	var _ctrl = __webpack_require__(96);
	
	var ctrl = _interopRequireWildcard(_ctrl);
	
	var _differ = __webpack_require__(97);
	
	var _differ2 = _interopRequireDefault(_differ);
	
	var _config = __webpack_require__(78);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _register = __webpack_require__(94);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * @fileOverview
	 * Weex instance constructor & definition
	 */
	
	function AppInstance(instanceId, options) {
	  this.id = instanceId;
	  this.options = options || {};
	  this.vm = null;
	  this.customComponentMap = {};
	  this.callbacks = {};
	  this.doc = new _config2.default.Document(instanceId, this.options.bundleUrl);
	  this.differ = new _differ2.default(instanceId);
	  this.uid = 0;
	}
	
	function normalize(app, v) {
	  var type = (0, _util.typof)(v);
	
	  switch (type) {
	    case 'undefined':
	    case 'null':
	      return '';
	    case 'regexp':
	      return v.toString();
	    case 'date':
	      return v.toISOString();
	    case 'number':
	    case 'string':
	    case 'boolean':
	    case 'array':
	    case 'object':
	      if (v instanceof _config2.default.Element) {
	        return v.ref;
	      }
	      return v;
	    case 'function':
	      app.callbacks[++app.uid] = v;
	      return app.uid.toString();
	    default:
	      return JSON.stringify(v);
	  }
	}
	
	AppInstance.prototype.callTasks = function (tasks) {
	  var _this = this;
	
	  if ((0, _util.typof)(tasks) !== 'array') {
	    tasks = [tasks];
	  }
	
	  tasks.forEach(function (task) {
	    task.args = task.args.map(function (arg) {
	      return normalize(_this, arg);
	    });
	  });
	
	  return _config2.default.sendTasks(this.id, tasks, '-1');
	};
	
	(0, _util.extend)(AppInstance.prototype, bundle, ctrl, {
	  registerComponent: _register.registerComponent,
	  requireComponent: _register.requireComponent,
	  requireModule: _register.requireModule
	});

/***/ },
/* 80 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.isReserved = isReserved;
	exports.def = def;
	exports.remove = remove;
	exports.hasOwn = hasOwn;
	exports.cached = cached;
	exports.bind = bind;
	exports.toArray = toArray;
	exports.extend = extend;
	exports.isObject = isObject;
	exports.isPlainObject = isPlainObject;
	exports.stringify = stringify;
	exports.typof = typof;
	exports.normalize = normalize;
	exports.error = error;
	exports.warn = warn;
	exports.info = info;
	exports.debug = debug;
	exports.log = log;
	/* global MutationObserver */
	
	// / lang.js
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	// / env.js
	
	// can we use __proto__?
	var hasProto = exports.hasProto = '__proto__' in {};
	
	// Browser environment sniffing
	var inBrowser = exports.inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	// detect devtools
	var devtools = exports.devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
	var isWechat = UA && UA.indexOf('micromessenger') > 0;
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	var nextTick = exports.nextTick = function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc = void 0;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined' && !(isWechat && isIos)) {
	    (function () {
	      var counter = 1;
	      var observer = new MutationObserver(nextTickHandler);
	      var textNode = document.createTextNode(counter);
	      observer.observe(textNode, {
	        characterData: true
	      });
	      timerFunc = function timerFunc() {
	        counter = (counter + 1) % 2;
	        textNode.data = counter;
	      };
	    })();
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	}();
	
	var _Set = void 0;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  exports._Set = _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  exports._Set = _Set = function _Set() {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}
	
	exports._Set = _Set;
	
	// / shared
	
	/**
	 * Remove an item from an array
	 *
	 * @param {Array} arr
	 * @param {*} item
	 */
	
	function remove(arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1);
	    }
	  }
	}
	
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Create a cached version of a pure function.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cached(fn) {
	  var cache = Object.create(null);
	  return function cachedFn(str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str));
	  };
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	var camelize = exports.camelize = cached(function (str) {
	  return str.replace(camelizeRE, toUpper);
	});
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	var hyphenate = exports.hyphenate = cached(function (str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	});
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(target) {
	  for (var _len = arguments.length, src = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    src[_key - 1] = arguments[_key];
	  }
	
	  if (typeof Object.assign === 'function') {
	    Object.assign.apply(Object, [target].concat(src));
	  } else {
	    var first = src.shift();
	    for (var key in first) {
	      target[key] = first[key];
	    }
	    if (src.length) {
	      extend.apply(undefined, [target].concat(src));
	    }
	  }
	  return target;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var isArray = exports.isArray = Array.isArray;
	
	// / other
	
	function stringify(x) {
	  return typeof x === 'undefined' || x === null || typeof x === 'function' ? '' : (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' ? x instanceof RegExp ? x.toString() : x instanceof Date ? JSON.parse(JSON.stringify(x)) : JSON.stringify(x) : x.toString();
	}
	
	function typof(v) {
	  var s = Object.prototype.toString.call(v);
	  return s.substring(8, s.length - 1).toLowerCase();
	}
	
	function normalize(v) {
	  var type = typof(v);
	
	  switch (type) {
	    case 'undefined':
	    case 'null':
	      return '';
	    case 'regexp':
	      return v.toString();
	    case 'date':
	      return v.toISOString();
	    case 'number':
	    case 'string':
	    case 'boolean':
	    case 'array':
	    case 'object':
	    case 'function':
	      return v;
	  }
	}
	
	var enableLog = typeof console !== 'undefined' && global.IS_PRODUCT !== true;
	
	/**
	 * @param {String} msg
	 */
	function error() {
	  var _console;
	
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  enableLog && console.error && (_console = console).error.apply(_console, ['[JS Framework]'].concat(args));
	}
	
	/**
	 * @param {String} msg
	 */
	function warn() {
	  var _console2;
	
	  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	    args[_key3] = arguments[_key3];
	  }
	
	  enableLog && console.warn && (_console2 = console).warn.apply(_console2, ['[JS Framework]'].concat(args));
	}
	
	/**
	 * @param {String} msg
	 */
	function info() {
	  var _console3;
	
	  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	    args[_key4] = arguments[_key4];
	  }
	
	  enableLog && console.info && (_console3 = console).info.apply(_console3, ['[JS Framework]'].concat(args));
	}
	
	/**
	 * @param {String} msg
	 */
	function debug() {
	  var _console4;
	
	  for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	    args[_key5] = arguments[_key5];
	  }
	
	  enableLog && console.debug && (_console4 = console).debug.apply(_console4, ['[JS Framework]'].concat(args));
	}
	
	/**
	 * @param {String} msg
	 */
	function log() {
	  var _console5;
	
	  for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	    args[_key6] = arguments[_key6];
	  }
	
	  enableLog && console.log && (_console5 = console).log.apply(_console5, ['[JS Framework]'].concat(args));
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.require = exports.define = undefined;
	exports.clearCommonModules = clearCommonModules;
	exports.bootstrap = bootstrap;
	exports.register = register;
	exports.render = render;
	
	var _semver = __webpack_require__(82);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _util = __webpack_require__(80);
	
	var _ = _interopRequireWildcard(_util);
	
	var _vm = __webpack_require__(84);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _downgrade = __webpack_require__(95);
	
	var downgrade = _interopRequireWildcard(_downgrade);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                   * @fileOverview
	                                                                                                                                                                                                                   * api that invoked by js bundle code
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * - define(name, factory): define a new composed component type
	                                                                                                                                                                                                                   * - bootstrap(type, config, data): require a certain type &
	                                                                                                                                                                                                                   *         render with (optional) data
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * deprecated:
	                                                                                                                                                                                                                   * - register(type, options): register a new composed component type
	                                                                                                                                                                                                                   * - render(type, data): render by a certain type with (optional) data
	                                                                                                                                                                                                                   * - require(type)(data): require a type then render with data
	                                                                                                                                                                                                                   */
	
	var WEEX_COMPONENT_REG = /^@weex-component\//;
	var WEEX_MODULE_REG = /^@weex-module\//;
	var NORMAL_MODULE_REG = /^\.{1,2}\//;
	var JS_SURFIX_REG = /\.js$/;
	
	var isWeexComponent = function isWeexComponent(name) {
	  return !!name.match(WEEX_COMPONENT_REG);
	};
	var isWeexModule = function isWeexModule(name) {
	  return !!name.match(WEEX_MODULE_REG);
	};
	var isNormalModule = function isNormalModule(name) {
	  return !!name.match(NORMAL_MODULE_REG);
	};
	var isNpmModule = function isNpmModule(name) {
	  return !isWeexComponent(name) && !isWeexModule(name) && !isNormalModule(name);
	};
	
	function removeWeexPrefix(str) {
	  return str.replace(WEEX_COMPONENT_REG, '').replace(WEEX_MODULE_REG, '');
	}
	
	function removeJSSurfix(str) {
	  return str.replace(JS_SURFIX_REG, '');
	}
	
	var commonModules = {};
	
	function clearCommonModules() {
	  commonModules = {};
	}
	
	// define(name, factory) for primary usage
	// or
	// define(name, deps, factory) for compatibility
	// Notice: DO NOT use function define() {},
	// it will cause error after builded by webpack
	var define = exports.define = function define(name, deps, factory) {
	  var _this = this;
	
	  _.debug('define a component', name);
	
	  if (_.typof(deps) === 'function') {
	    factory = deps;
	    deps = [];
	  }
	
	  var _require = function _require(name) {
	    var cleanName = void 0;
	
	    if (isWeexComponent(name)) {
	      cleanName = removeWeexPrefix(name);
	      return _this.requireComponent(cleanName);
	    }
	    if (isWeexModule(name)) {
	      cleanName = removeWeexPrefix(name);
	      return _this.requireModule(cleanName);
	    }
	    if (isNormalModule(name)) {
	      cleanName = removeJSSurfix(name);
	      return commonModules[name];
	    }
	    if (isNpmModule(name)) {
	      cleanName = removeJSSurfix(name);
	      return commonModules[name];
	    }
	  };
	  var _module = { exports: {} };
	
	  var cleanName = void 0;
	  if (isWeexComponent(name)) {
	    cleanName = removeWeexPrefix(name);
	
	    factory(_require, _module.exports, _module);
	
	    this.registerComponent(cleanName, _module.exports);
	  } else if (isWeexModule(name)) {
	    cleanName = removeWeexPrefix(name);
	
	    factory(_require, _module.exports, _module);
	
	    _vm2.default.registerModules(_defineProperty({}, cleanName, _module.exports));
	  } else if (isNormalModule(name)) {
	    cleanName = removeJSSurfix(name);
	
	    factory(_require, _module.exports, _module);
	
	    commonModules[cleanName] = _module.exports;
	  } else if (isNpmModule(name)) {
	    cleanName = removeJSSurfix(name);
	
	    factory(_require, _module.exports, _module);
	
	    var exports = _module.exports;
	    if (exports.template || exports.style || exports.methods) {
	      // downgrade to old define method (define('componentName', factory))
	      // the exports contain one key of template, style or methods
	      // but it has risk!!!
	      this.registerComponent(cleanName, exports);
	    } else {
	      commonModules[cleanName] = _module.exports;
	    }
	  }
	};
	
	function bootstrap(name, config, data) {
	  _.debug('bootstrap for ' + name);
	
	  var cleanName = void 0;
	
	  if (isWeexComponent(name)) {
	    cleanName = removeWeexPrefix(name);
	  } else if (isNpmModule(name)) {
	    cleanName = removeJSSurfix(name);
	    // check if define by old 'define' method
	    /* istanbul ignore if */
	    if (!this.customComponentMap[cleanName]) {
	      return new Error('It\'s not a component: ' + name);
	    }
	  } else {
	    return new Error('Wrong component name: ' + name);
	  }
	
	  config = _.isPlainObject(config) ? config : {};
	
	  if (typeof config.transformerVersion === 'string' && typeof global.needTransformerVersion === 'string' && !_semver2.default.satisfies(config.transformerVersion, global.needTransformerVersion)) {
	    return new Error('JS Bundle version: ' + config.transformerVersion + ' ' + ('not compatible with ' + global.needTransformerVersion));
	  }
	
	  var _checkDowngrade = downgrade.check(config.downgrade);
	  /* istanbul ignore if */
	  if (_checkDowngrade.isDowngrade) {
	    this.callTasks([{
	      module: 'instanceWrap',
	      method: 'error',
	      args: [_checkDowngrade.errorType, _checkDowngrade.code, _checkDowngrade.errorMessage]
	    }]);
	    return new Error('Downgrade[' + _checkDowngrade.code + ']: ' + _checkDowngrade.errorMessage);
	  }
	
	  this.vm = new _vm2.default(cleanName, null, { _app: this }, null, data);
	}
	
	/**
	 * @deprecated
	 */
	function register(type, options) {
	  _.warn('Register is deprecated, please install lastest transformer.');
	  this.registerComponent(type, options);
	}
	
	/**
	 * @deprecated
	 */
	function render(type, data) {
	  _.warn('Render is deprecated, please install lastest transformer.');
	  return this.bootstrap(type, {}, data);
	}
	
	/**
	 * @deprecated
	 */
	function _require2(type) {
	  var _this2 = this;
	
	  _.warn('Require is deprecated, please install lastest transformer.');
	  return function (data) {
	    return _this2.bootstrap(type, {}, data);
	  };
	}
	exports.require = _require2;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports = module.exports = SemVer;
	
	// The debug function is excluded entirely from the minified version.
	/* nomin */var debug;
	/* nomin */if ((typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' &&
	/* nomin */process.env &&
	/* nomin */process.env.NODE_DEBUG &&
	/* nomin *//\bsemver\b/i.test(process.env.NODE_DEBUG))
	  /* nomin */debug = function debug() {
	    /* nomin */var args = Array.prototype.slice.call(arguments, 0);
	    /* nomin */args.unshift('SEMVER');
	    /* nomin */console.log.apply(console, args);
	    /* nomin */
	  };
	  /* nomin */else
	  /* nomin */debug = function debug() {};
	
	// Note: this is the semver.org version of the spec that it implements
	// Not necessarily the package version of this code.
	exports.SEMVER_SPEC_VERSION = '2.0.0';
	
	var MAX_LENGTH = 256;
	var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
	
	// The actual regexps go on exports.re
	var re = exports.re = [];
	var src = exports.src = [];
	var R = 0;
	
	// The following Regular Expressions can be used for tokenizing,
	// validating, and parsing SemVer version strings.
	
	// ## Numeric Identifier
	// A single `0`, or a non-zero digit followed by zero or more digits.
	
	var NUMERICIDENTIFIER = R++;
	src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
	var NUMERICIDENTIFIERLOOSE = R++;
	src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';
	
	// ## Non-numeric Identifier
	// Zero or more digits, followed by a letter or hyphen, and then zero or
	// more letters, digits, or hyphens.
	
	var NONNUMERICIDENTIFIER = R++;
	src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
	
	// ## Main Version
	// Three dot-separated numeric identifiers.
	
	var MAINVERSION = R++;
	src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')';
	
	var MAINVERSIONLOOSE = R++;
	src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')';
	
	// ## Pre-release Version Identifier
	// A numeric identifier, or a non-numeric identifier.
	
	var PRERELEASEIDENTIFIER = R++;
	src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] + '|' + src[NONNUMERICIDENTIFIER] + ')';
	
	var PRERELEASEIDENTIFIERLOOSE = R++;
	src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] + '|' + src[NONNUMERICIDENTIFIER] + ')';
	
	// ## Pre-release Version
	// Hyphen, followed by one or more dot-separated pre-release version
	// identifiers.
	
	var PRERELEASE = R++;
	src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] + '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';
	
	var PRERELEASELOOSE = R++;
	src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';
	
	// ## Build Metadata Identifier
	// Any combination of digits, letters, or hyphens.
	
	var BUILDIDENTIFIER = R++;
	src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';
	
	// ## Build Metadata
	// Plus sign, followed by one or more period-separated build metadata
	// identifiers.
	
	var BUILD = R++;
	src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] + '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';
	
	// ## Full Version String
	// A main version, followed optionally by a pre-release version and
	// build metadata.
	
	// Note that the only major, minor, patch, and pre-release sections of
	// the version string are capturing groups.  The build metadata is not a
	// capturing group, because it should not ever be used in version
	// comparison.
	
	var FULL = R++;
	var FULLPLAIN = 'v?' + src[MAINVERSION] + src[PRERELEASE] + '?' + src[BUILD] + '?';
	
	src[FULL] = '^' + FULLPLAIN + '$';
	
	// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
	// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
	// common in the npm registry.
	var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] + src[PRERELEASELOOSE] + '?' + src[BUILD] + '?';
	
	var LOOSE = R++;
	src[LOOSE] = '^' + LOOSEPLAIN + '$';
	
	var GTLT = R++;
	src[GTLT] = '((?:<|>)?=?)';
	
	// Something like "2.*" or "1.2.x".
	// Note that "x.x" is a valid xRange identifer, meaning "any version"
	// Only the first item is strictly required.
	var XRANGEIDENTIFIERLOOSE = R++;
	src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
	var XRANGEIDENTIFIER = R++;
	src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';
	
	var XRANGEPLAIN = R++;
	src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:' + src[PRERELEASE] + ')?' + src[BUILD] + '?' + ')?)?';
	
	var XRANGEPLAINLOOSE = R++;
	src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:' + src[PRERELEASELOOSE] + ')?' + src[BUILD] + '?' + ')?)?';
	
	var XRANGE = R++;
	src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
	var XRANGELOOSE = R++;
	src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';
	
	// Tilde ranges.
	// Meaning is "reasonably at or greater than"
	var LONETILDE = R++;
	src[LONETILDE] = '(?:~>?)';
	
	var TILDETRIM = R++;
	src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
	re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
	var tildeTrimReplace = '$1~';
	
	var TILDE = R++;
	src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
	var TILDELOOSE = R++;
	src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';
	
	// Caret ranges.
	// Meaning is "at least and backwards compatible with"
	var LONECARET = R++;
	src[LONECARET] = '(?:\\^)';
	
	var CARETTRIM = R++;
	src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
	re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
	var caretTrimReplace = '$1^';
	
	var CARET = R++;
	src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
	var CARETLOOSE = R++;
	src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';
	
	// A simple gt/lt/eq thing, or just "" to indicate "any version"
	var COMPARATORLOOSE = R++;
	src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
	var COMPARATOR = R++;
	src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';
	
	// An expression to strip any whitespace between the gtlt and the thing
	// it modifies, so that `> 1.2.3` ==> `>1.2.3`
	var COMPARATORTRIM = R++;
	src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] + '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';
	
	// this one has to use the /g flag
	re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
	var comparatorTrimReplace = '$1$2$3';
	
	// Something like `1.2.3 - 1.2.4`
	// Note that these all use the loose form, because they'll be
	// checked against either the strict or loose comparator form
	// later.
	var HYPHENRANGE = R++;
	src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAIN] + ')' + '\\s*$';
	
	var HYPHENRANGELOOSE = R++;
	src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAINLOOSE] + ')' + '\\s*$';
	
	// Star ranges basically just allow anything at all.
	var STAR = R++;
	src[STAR] = '(<|>)?=?\\s*\\*';
	
	// Compile to actual regexp objects.
	// All are flag-free, unless they were created above with a flag.
	for (var i = 0; i < R; i++) {
	  debug(i, src[i]);
	  if (!re[i]) re[i] = new RegExp(src[i]);
	}
	
	exports.parse = parse;
	function parse(version, loose) {
	  if (version instanceof SemVer) return version;
	
	  if (typeof version !== 'string') return null;
	
	  if (version.length > MAX_LENGTH) return null;
	
	  var r = loose ? re[LOOSE] : re[FULL];
	  if (!r.test(version)) return null;
	
	  try {
	    return new SemVer(version, loose);
	  } catch (er) {
	    return null;
	  }
	}
	
	exports.valid = valid;
	function valid(version, loose) {
	  var v = parse(version, loose);
	  return v ? v.version : null;
	}
	
	exports.clean = clean;
	function clean(version, loose) {
	  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
	  return s ? s.version : null;
	}
	
	exports.SemVer = SemVer;
	
	function SemVer(version, loose) {
	  if (version instanceof SemVer) {
	    if (version.loose === loose) return version;else version = version.version;
	  } else if (typeof version !== 'string') {
	    throw new TypeError('Invalid Version: ' + version);
	  }
	
	  if (version.length > MAX_LENGTH) throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters');
	
	  if (!(this instanceof SemVer)) return new SemVer(version, loose);
	
	  debug('SemVer', version, loose);
	  this.loose = loose;
	  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);
	
	  if (!m) throw new TypeError('Invalid Version: ' + version);
	
	  this.raw = version;
	
	  // these are actually numbers
	  this.major = +m[1];
	  this.minor = +m[2];
	  this.patch = +m[3];
	
	  if (this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError('Invalid major version');
	
	  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError('Invalid minor version');
	
	  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError('Invalid patch version');
	
	  // numberify any prerelease numeric ids
	  if (!m[4]) this.prerelease = [];else this.prerelease = m[4].split('.').map(function (id) {
	    if (/^[0-9]+$/.test(id)) {
	      var num = +id;
	      if (num >= 0 && num < MAX_SAFE_INTEGER) return num;
	    }
	    return id;
	  });
	
	  this.build = m[5] ? m[5].split('.') : [];
	  this.format();
	}
	
	SemVer.prototype.format = function () {
	  this.version = this.major + '.' + this.minor + '.' + this.patch;
	  if (this.prerelease.length) this.version += '-' + this.prerelease.join('.');
	  return this.version;
	};
	
	SemVer.prototype.toString = function () {
	  return this.version;
	};
	
	SemVer.prototype.compare = function (other) {
	  debug('SemVer.compare', this.version, this.loose, other);
	  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
	
	  return this.compareMain(other) || this.comparePre(other);
	};
	
	SemVer.prototype.compareMain = function (other) {
	  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
	
	  return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
	};
	
	SemVer.prototype.comparePre = function (other) {
	  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
	
	  // NOT having a prerelease is > having one
	  if (this.prerelease.length && !other.prerelease.length) return -1;else if (!this.prerelease.length && other.prerelease.length) return 1;else if (!this.prerelease.length && !other.prerelease.length) return 0;
	
	  var i = 0;
	  do {
	    var a = this.prerelease[i];
	    var b = other.prerelease[i];
	    debug('prerelease compare', i, a, b);
	    if (a === undefined && b === undefined) return 0;else if (b === undefined) return 1;else if (a === undefined) return -1;else if (a === b) continue;else return compareIdentifiers(a, b);
	  } while (++i);
	};
	
	// preminor will bump the version up to the next minor release, and immediately
	// down to pre-release. premajor and prepatch work the same way.
	SemVer.prototype.inc = function (release, identifier) {
	  switch (release) {
	    case 'premajor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor = 0;
	      this.major++;
	      this.inc('pre', identifier);
	      break;
	    case 'preminor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor++;
	      this.inc('pre', identifier);
	      break;
	    case 'prepatch':
	      // If this is already a prerelease, it will bump to the next version
	      // drop any prereleases that might already exist, since they are not
	      // relevant at this point.
	      this.prerelease.length = 0;
	      this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	    // If the input is a non-prerelease version, this acts the same as
	    // prepatch.
	    case 'prerelease':
	      if (this.prerelease.length === 0) this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	
	    case 'major':
	      // If this is a pre-major version, bump up to the same major version.
	      // Otherwise increment major.
	      // 1.0.0-5 bumps to 1.0.0
	      // 1.1.0 bumps to 2.0.0
	      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
	      this.minor = 0;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'minor':
	      // If this is a pre-minor version, bump up to the same minor version.
	      // Otherwise increment minor.
	      // 1.2.0-5 bumps to 1.2.0
	      // 1.2.1 bumps to 1.3.0
	      if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'patch':
	      // If this is not a pre-release version, it will increment the patch.
	      // If it is a pre-release it will bump up to the same patch version.
	      // 1.2.0-5 patches to 1.2.0
	      // 1.2.0 patches to 1.2.1
	      if (this.prerelease.length === 0) this.patch++;
	      this.prerelease = [];
	      break;
	    // This probably shouldn't be used publicly.
	    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
	    case 'pre':
	      if (this.prerelease.length === 0) this.prerelease = [0];else {
	        var i = this.prerelease.length;
	        while (--i >= 0) {
	          if (typeof this.prerelease[i] === 'number') {
	            this.prerelease[i]++;
	            i = -2;
	          }
	        }
	        if (i === -1) // didn't increment anything
	          this.prerelease.push(0);
	      }
	      if (identifier) {
	        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
	        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
	        if (this.prerelease[0] === identifier) {
	          if (isNaN(this.prerelease[1])) this.prerelease = [identifier, 0];
	        } else this.prerelease = [identifier, 0];
	      }
	      break;
	
	    default:
	      throw new Error('invalid increment argument: ' + release);
	  }
	  this.format();
	  this.raw = this.version;
	  return this;
	};
	
	exports.inc = inc;
	function inc(version, release, loose, identifier) {
	  if (typeof loose === 'string') {
	    identifier = loose;
	    loose = undefined;
	  }
	
	  try {
	    return new SemVer(version, loose).inc(release, identifier).version;
	  } catch (er) {
	    return null;
	  }
	}
	
	exports.diff = diff;
	function diff(version1, version2) {
	  if (eq(version1, version2)) {
	    return null;
	  } else {
	    var v1 = parse(version1);
	    var v2 = parse(version2);
	    if (v1.prerelease.length || v2.prerelease.length) {
	      for (var key in v1) {
	        if (key === 'major' || key === 'minor' || key === 'patch') {
	          if (v1[key] !== v2[key]) {
	            return 'pre' + key;
	          }
	        }
	      }
	      return 'prerelease';
	    }
	    for (var key in v1) {
	      if (key === 'major' || key === 'minor' || key === 'patch') {
	        if (v1[key] !== v2[key]) {
	          return key;
	        }
	      }
	    }
	  }
	}
	
	exports.compareIdentifiers = compareIdentifiers;
	
	var numeric = /^[0-9]+$/;
	function compareIdentifiers(a, b) {
	  var anum = numeric.test(a);
	  var bnum = numeric.test(b);
	
	  if (anum && bnum) {
	    a = +a;
	    b = +b;
	  }
	
	  return anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : a > b ? 1 : 0;
	}
	
	exports.rcompareIdentifiers = rcompareIdentifiers;
	function rcompareIdentifiers(a, b) {
	  return compareIdentifiers(b, a);
	}
	
	exports.major = major;
	function major(a, loose) {
	  return new SemVer(a, loose).major;
	}
	
	exports.minor = minor;
	function minor(a, loose) {
	  return new SemVer(a, loose).minor;
	}
	
	exports.patch = patch;
	function patch(a, loose) {
	  return new SemVer(a, loose).patch;
	}
	
	exports.compare = compare;
	function compare(a, b, loose) {
	  return new SemVer(a, loose).compare(b);
	}
	
	exports.compareLoose = compareLoose;
	function compareLoose(a, b) {
	  return compare(a, b, true);
	}
	
	exports.rcompare = rcompare;
	function rcompare(a, b, loose) {
	  return compare(b, a, loose);
	}
	
	exports.sort = sort;
	function sort(list, loose) {
	  return list.sort(function (a, b) {
	    return exports.compare(a, b, loose);
	  });
	}
	
	exports.rsort = rsort;
	function rsort(list, loose) {
	  return list.sort(function (a, b) {
	    return exports.rcompare(a, b, loose);
	  });
	}
	
	exports.gt = gt;
	function gt(a, b, loose) {
	  return compare(a, b, loose) > 0;
	}
	
	exports.lt = lt;
	function lt(a, b, loose) {
	  return compare(a, b, loose) < 0;
	}
	
	exports.eq = eq;
	function eq(a, b, loose) {
	  return compare(a, b, loose) === 0;
	}
	
	exports.neq = neq;
	function neq(a, b, loose) {
	  return compare(a, b, loose) !== 0;
	}
	
	exports.gte = gte;
	function gte(a, b, loose) {
	  return compare(a, b, loose) >= 0;
	}
	
	exports.lte = lte;
	function lte(a, b, loose) {
	  return compare(a, b, loose) <= 0;
	}
	
	exports.cmp = cmp;
	function cmp(a, op, b, loose) {
	  var ret;
	  switch (op) {
	    case '===':
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') a = a.version;
	      if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') b = b.version;
	      ret = a === b;
	      break;
	    case '!==':
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') a = a.version;
	      if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') b = b.version;
	      ret = a !== b;
	      break;
	    case '':case '=':case '==':
	      ret = eq(a, b, loose);break;
	    case '!=':
	      ret = neq(a, b, loose);break;
	    case '>':
	      ret = gt(a, b, loose);break;
	    case '>=':
	      ret = gte(a, b, loose);break;
	    case '<':
	      ret = lt(a, b, loose);break;
	    case '<=':
	      ret = lte(a, b, loose);break;
	    default:
	      throw new TypeError('Invalid operator: ' + op);
	  }
	  return ret;
	}
	
	exports.Comparator = Comparator;
	function Comparator(comp, loose) {
	  if (comp instanceof Comparator) {
	    if (comp.loose === loose) return comp;else comp = comp.value;
	  }
	
	  if (!(this instanceof Comparator)) return new Comparator(comp, loose);
	
	  debug('comparator', comp, loose);
	  this.loose = loose;
	  this.parse(comp);
	
	  if (this.semver === ANY) this.value = '';else this.value = this.operator + this.semver.version;
	
	  debug('comp', this);
	}
	
	var ANY = {};
	Comparator.prototype.parse = function (comp) {
	  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var m = comp.match(r);
	
	  if (!m) throw new TypeError('Invalid comparator: ' + comp);
	
	  this.operator = m[1];
	  if (this.operator === '=') this.operator = '';
	
	  // if it literally is just '>' or '' then allow anything.
	  if (!m[2]) this.semver = ANY;else this.semver = new SemVer(m[2], this.loose);
	};
	
	Comparator.prototype.toString = function () {
	  return this.value;
	};
	
	Comparator.prototype.test = function (version) {
	  debug('Comparator.test', version, this.loose);
	
	  if (this.semver === ANY) return true;
	
	  if (typeof version === 'string') version = new SemVer(version, this.loose);
	
	  return cmp(version, this.operator, this.semver, this.loose);
	};
	
	exports.Range = Range;
	function Range(range, loose) {
	  if (range instanceof Range && range.loose === loose) return range;
	
	  if (!(this instanceof Range)) return new Range(range, loose);
	
	  this.loose = loose;
	
	  // First, split based on boolean or ||
	  this.raw = range;
	  this.set = range.split(/\s*\|\|\s*/).map(function (range) {
	    return this.parseRange(range.trim());
	  }, this).filter(function (c) {
	    // throw out any that are not relevant for whatever reason
	    return c.length;
	  });
	
	  if (!this.set.length) {
	    throw new TypeError('Invalid SemVer Range: ' + range);
	  }
	
	  this.format();
	}
	
	Range.prototype.format = function () {
	  this.range = this.set.map(function (comps) {
	    return comps.join(' ').trim();
	  }).join('||').trim();
	  return this.range;
	};
	
	Range.prototype.toString = function () {
	  return this.range;
	};
	
	Range.prototype.parseRange = function (range) {
	  var loose = this.loose;
	  range = range.trim();
	  debug('range', range, loose);
	  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
	  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
	  range = range.replace(hr, hyphenReplace);
	  debug('hyphen replace', range);
	  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
	  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
	  debug('comparator trim', range, re[COMPARATORTRIM]);
	
	  // `~ 1.2.3` => `~1.2.3`
	  range = range.replace(re[TILDETRIM], tildeTrimReplace);
	
	  // `^ 1.2.3` => `^1.2.3`
	  range = range.replace(re[CARETTRIM], caretTrimReplace);
	
	  // normalize spaces
	  range = range.split(/\s+/).join(' ');
	
	  // At this point, the range is completely trimmed and
	  // ready to be split into comparators.
	
	  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var set = range.split(' ').map(function (comp) {
	    return parseComparator(comp, loose);
	  }).join(' ').split(/\s+/);
	  if (this.loose) {
	    // in loose mode, throw out any that are not valid comparators
	    set = set.filter(function (comp) {
	      return !!comp.match(compRe);
	    });
	  }
	  set = set.map(function (comp) {
	    return new Comparator(comp, loose);
	  });
	
	  return set;
	};
	
	// Mostly just for testing and legacy API reasons
	exports.toComparators = toComparators;
	function toComparators(range, loose) {
	  return new Range(range, loose).set.map(function (comp) {
	    return comp.map(function (c) {
	      return c.value;
	    }).join(' ').trim().split(' ');
	  });
	}
	
	// comprised of xranges, tildes, stars, and gtlt's at this point.
	// already replaced the hyphen ranges
	// turn into a set of JUST comparators.
	function parseComparator(comp, loose) {
	  debug('comp', comp);
	  comp = replaceCarets(comp, loose);
	  debug('caret', comp);
	  comp = replaceTildes(comp, loose);
	  debug('tildes', comp);
	  comp = replaceXRanges(comp, loose);
	  debug('xrange', comp);
	  comp = replaceStars(comp, loose);
	  debug('stars', comp);
	  return comp;
	}
	
	function isX(id) {
	  return !id || id.toLowerCase() === 'x' || id === '*';
	}
	
	// ~, ~> --> * (any, kinda silly)
	// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
	// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
	// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
	// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
	// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
	function replaceTildes(comp, loose) {
	  return comp.trim().split(/\s+/).map(function (comp) {
	    return replaceTilde(comp, loose);
	  }).join(' ');
	}
	
	function replaceTilde(comp, loose) {
	  var r = loose ? re[TILDELOOSE] : re[TILDE];
	  return comp.replace(r, function (_, M, m, p, pr) {
	    debug('tilde', comp, _, M, m, p, pr);
	    var ret;
	
	    if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p))
	      // ~1.2 == >=1.2.0 <1.3.0
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else if (pr) {
	      debug('replaceTilde pr', pr);
	      if (pr.charAt(0) !== '-') pr = '-' + pr;
	      ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
	    } else
	      // ~1.2.3 == >=1.2.3 <1.3.0
	      ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
	
	    debug('tilde return', ret);
	    return ret;
	  });
	}
	
	// ^ --> * (any, kinda silly)
	// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
	// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
	// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
	// ^1.2.3 --> >=1.2.3 <2.0.0
	// ^1.2.0 --> >=1.2.0 <2.0.0
	function replaceCarets(comp, loose) {
	  return comp.trim().split(/\s+/).map(function (comp) {
	    return replaceCaret(comp, loose);
	  }).join(' ');
	}
	
	function replaceCaret(comp, loose) {
	  debug('caret', comp, loose);
	  var r = loose ? re[CARETLOOSE] : re[CARET];
	  return comp.replace(r, function (_, M, m, p, pr) {
	    debug('caret', comp, _, M, m, p, pr);
	    var ret;
	
	    if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p)) {
	      if (M === '0') ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
	    } else if (pr) {
	      debug('replaceCaret pr', pr);
	      if (pr.charAt(0) !== '-') pr = '-' + pr;
	      if (M === '0') {
	        if (m === '0') ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
	      } else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + (+M + 1) + '.0.0';
	    } else {
	      debug('no pr');
	      if (M === '0') {
	        if (m === '0') ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
	      } else ret = '>=' + M + '.' + m + '.' + p + ' <' + (+M + 1) + '.0.0';
	    }
	
	    debug('caret return', ret);
	    return ret;
	  });
	}
	
	function replaceXRanges(comp, loose) {
	  debug('replaceXRanges', comp, loose);
	  return comp.split(/\s+/).map(function (comp) {
	    return replaceXRange(comp, loose);
	  }).join(' ');
	}
	
	function replaceXRange(comp, loose) {
	  comp = comp.trim();
	  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
	  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
	    debug('xRange', comp, ret, gtlt, M, m, p, pr);
	    var xM = isX(M);
	    var xm = xM || isX(m);
	    var xp = xm || isX(p);
	    var anyX = xp;
	
	    if (gtlt === '=' && anyX) gtlt = '';
	
	    if (xM) {
	      if (gtlt === '>' || gtlt === '<') {
	        // nothing is allowed
	        ret = '<0.0.0';
	      } else {
	        // nothing is forbidden
	        ret = '*';
	      }
	    } else if (gtlt && anyX) {
	      // replace X with 0
	      if (xm) m = 0;
	      if (xp) p = 0;
	
	      if (gtlt === '>') {
	        // >1 => >=2.0.0
	        // >1.2 => >=1.3.0
	        // >1.2.3 => >= 1.2.4
	        gtlt = '>=';
	        if (xm) {
	          M = +M + 1;
	          m = 0;
	          p = 0;
	        } else if (xp) {
	          m = +m + 1;
	          p = 0;
	        }
	      } else if (gtlt === '<=') {
	        // <=0.7.x is actually <0.8.0, since any 0.7.x should
	        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
	        gtlt = '<';
	        if (xm) M = +M + 1;else m = +m + 1;
	      }
	
	      ret = gtlt + M + '.' + m + '.' + p;
	    } else if (xm) {
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    } else if (xp) {
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	    }
	
	    debug('xRange return', ret);
	
	    return ret;
	  });
	}
	
	// Because * is AND-ed with everything else in the comparator,
	// and '' means "any version", just remove the *s entirely.
	function replaceStars(comp, loose) {
	  debug('replaceStars', comp, loose);
	  // Looseness is ignored here.  star is always as loose as it gets!
	  return comp.trim().replace(re[STAR], '');
	}
	
	// This function is passed to string.replace(re[HYPHENRANGE])
	// M, m, patch, prerelease, build
	// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
	// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
	// 1.2 - 3.4 => >=1.2.0 <3.5.0
	function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
	
	  if (isX(fM)) from = '';else if (isX(fm)) from = '>=' + fM + '.0.0';else if (isX(fp)) from = '>=' + fM + '.' + fm + '.0';else from = '>=' + from;
	
	  if (isX(tM)) to = '';else if (isX(tm)) to = '<' + (+tM + 1) + '.0.0';else if (isX(tp)) to = '<' + tM + '.' + (+tm + 1) + '.0';else if (tpr) to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;else to = '<=' + to;
	
	  return (from + ' ' + to).trim();
	}
	
	// if ANY of the sets match ALL of its comparators, then pass
	Range.prototype.test = function (version) {
	  if (!version) return false;
	
	  if (typeof version === 'string') version = new SemVer(version, this.loose);
	
	  for (var i = 0; i < this.set.length; i++) {
	    if (testSet(this.set[i], version)) return true;
	  }
	  return false;
	};
	
	function testSet(set, version) {
	  for (var i = 0; i < set.length; i++) {
	    if (!set[i].test(version)) return false;
	  }
	
	  if (version.prerelease.length) {
	    // Find the set of versions that are allowed to have prereleases
	    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
	    // That should allow `1.2.3-pr.2` to pass.
	    // However, `1.2.4-alpha.notready` should NOT be allowed,
	    // even though it's within the range set by the comparators.
	    for (var i = 0; i < set.length; i++) {
	      debug(set[i].semver);
	      if (set[i].semver === ANY) continue;
	
	      if (set[i].semver.prerelease.length > 0) {
	        var allowed = set[i].semver;
	        if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) return true;
	      }
	    }
	
	    // Version has a -pre, but it's not one of the ones we like.
	    return false;
	  }
	
	  return true;
	}
	
	exports.satisfies = satisfies;
	function satisfies(version, range, loose) {
	  try {
	    range = new Range(range, loose);
	  } catch (er) {
	    return false;
	  }
	  return range.test(version);
	}
	
	exports.maxSatisfying = maxSatisfying;
	function maxSatisfying(versions, range, loose) {
	  return versions.filter(function (version) {
	    return satisfies(version, range, loose);
	  }).sort(function (a, b) {
	    return rcompare(a, b, loose);
	  })[0] || null;
	}
	
	exports.minSatisfying = minSatisfying;
	function minSatisfying(versions, range, loose) {
	  return versions.filter(function (version) {
	    return satisfies(version, range, loose);
	  }).sort(function (a, b) {
	    return compare(a, b, loose);
	  })[0] || null;
	}
	
	exports.validRange = validRange;
	function validRange(range, loose) {
	  try {
	    // Return '*' instead of '' so that truthiness works.
	    // This will throw if it's invalid anyway
	    return new Range(range, loose).range || '*';
	  } catch (er) {
	    return null;
	  }
	}
	
	// Determine if version is less than all the versions possible in the range
	exports.ltr = ltr;
	function ltr(version, range, loose) {
	  return outside(version, range, '<', loose);
	}
	
	// Determine if version is greater than all the versions possible in the range.
	exports.gtr = gtr;
	function gtr(version, range, loose) {
	  return outside(version, range, '>', loose);
	}
	
	exports.outside = outside;
	function outside(version, range, hilo, loose) {
	  version = new SemVer(version, loose);
	  range = new Range(range, loose);
	
	  var gtfn, ltefn, ltfn, comp, ecomp;
	  switch (hilo) {
	    case '>':
	      gtfn = gt;
	      ltefn = lte;
	      ltfn = lt;
	      comp = '>';
	      ecomp = '>=';
	      break;
	    case '<':
	      gtfn = lt;
	      ltefn = gte;
	      ltfn = gt;
	      comp = '<';
	      ecomp = '<=';
	      break;
	    default:
	      throw new TypeError('Must provide a hilo val of "<" or ">"');
	  }
	
	  // If it satisifes the range it is not outside
	  if (satisfies(version, range, loose)) {
	    return false;
	  }
	
	  // From now on, variable terms are as if we're in "gtr" mode.
	  // but note that everything is flipped for the "ltr" function.
	
	  for (var i = 0; i < range.set.length; ++i) {
	    var comparators = range.set[i];
	
	    var high = null;
	    var low = null;
	
	    comparators.forEach(function (comparator) {
	      if (comparator.semver === ANY) {
	        comparator = new Comparator('>=0.0.0');
	      }
	      high = high || comparator;
	      low = low || comparator;
	      if (gtfn(comparator.semver, high.semver, loose)) {
	        high = comparator;
	      } else if (ltfn(comparator.semver, low.semver, loose)) {
	        low = comparator;
	      }
	    });
	
	    // If the edge version comparator has a operator then our version
	    // isn't outside it
	    if (high.operator === comp || high.operator === ecomp) {
	      return false;
	    }
	
	    // If the lowest version comparator has an operator and our version
	    // is less than it then it isn't higher than the range
	    if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
	      return false;
	    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	exports.prerelease = prerelease;
	function prerelease(version, loose) {
	  var parsed = parse(version, loose);
	  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(83)))

/***/ },
/* 83 */
/***/ function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function cachedSetTimeout() {
	            throw new Error('setTimeout is not defined');
	        };
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function cachedClearTimeout() {
	            throw new Error('clearTimeout is not defined');
	        };
	    }
	})();
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Vm;
	
	var _util = __webpack_require__(80);
	
	var _ = _interopRequireWildcard(_util);
	
	var _state = __webpack_require__(85);
	
	var state = _interopRequireWildcard(_state);
	
	var _compiler = __webpack_require__(90);
	
	var compiler = _interopRequireWildcard(_compiler);
	
	var _directive = __webpack_require__(91);
	
	var directive = _interopRequireWildcard(_directive);
	
	var _domHelper = __webpack_require__(92);
	
	var domHelper = _interopRequireWildcard(_domHelper);
	
	var _events = __webpack_require__(93);
	
	var events = _interopRequireWildcard(_events);
	
	var _register = __webpack_require__(94);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function callOldReadyEntry(vm, component) {
	  if (component.methods && component.methods.ready) {
	    _.warn('"exports.methods.ready" is deprecated, ' + 'please use "exports.created" instead');
	    component.methods.ready.call(vm);
	  }
	}
	
	/**
	 * ViewModel constructor
	 *
	 * @param {string} type
	 * @param {object} options    component options
	 * @param {object} parentVm   which contains _app
	 * @param {object} parentEl   root element or frag block
	 * @param {object} mergedData external data
	 * @param {object} externalEvents external events
	 */
	/**
	 * @fileOverview
	 * ViewModel Constructor & definition
	 */
	
	function Vm(type, options, parentVm, parentEl, mergedData, externalEvents) {
	  this._parent = parentVm._realParent ? parentVm._realParent : parentVm;
	  this._app = parentVm._app;
	  parentVm._childrenVms && parentVm._childrenVms.push(this);
	
	  if (!options) {
	    options = this._app.customComponentMap[type] || {};
	  }
	  var data = options.data || {};
	
	  this._options = options;
	  this._methods = options.methods || {};
	  this._computed = options.computed || {};
	  this._css = options.style || {};
	  this._ids = {};
	  this._vmEvents = {};
	  this._childrenVms = [];
	  this._type = type;
	
	  // bind events and lifecycles
	  this._initEvents(externalEvents);
	
	  _.debug('"init" lifecycle in Vm(' + this._type + ')');
	  this.$emit('hook:init');
	  this._inited = true;
	  // proxy data and methods
	  // observe data and add this to vms
	  this._data = typeof data === 'function' ? data() : data;
	  if (mergedData) {
	    _.extend(this._data, mergedData);
	  }
	  this._initState();
	
	  _.debug('"created" lifecycle in Vm(' + this._type + ')');
	  this.$emit('hook:created');
	  this._created = true;
	  // backward old ready entry
	  callOldReadyEntry(this, options);
	
	  // if no parentElement then specify the documentElement
	  this._parentEl = parentEl || this._app.doc.documentElement;
	  this._build();
	}
	
	_.extend(Vm.prototype, state, compiler, directive, domHelper, events);
	_.extend(Vm, {
	  registerModules: _register.registerModules,
	  registerMethods: _register.registerMethods
	});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports._initState = _initState;
	exports._initData = _initData;
	exports._initComputed = _initComputed;
	exports._initMethods = _initMethods;
	
	var _watcher = __webpack_require__(86);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _dep = __webpack_require__(87);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _observer = __webpack_require__(88);
	
	var _util = __webpack_require__(80);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	
	function _initState() {
	  var vm = this;
	  vm._watchers = [];
	  vm._initData();
	  vm._initComputed();
	  vm._initMethods();
	}
	
	function _initData() {
	  var vm = this;
	  var data = vm._data;
	
	  if (!(0, _util.isPlainObject)(data)) {
	    data = {};
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var i = keys.length;
	  while (i--) {
	    (0, _observer.proxy)(vm, keys[i]);
	  }
	  // observe data
	  (0, _observer.observe)(data, vm);
	}
	
	function noop() {}
	
	function _initComputed() {
	  var vm = this;
	  var computed = vm._computed;
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key];
	      var def = {
	        enumerable: true,
	        configurable: true
	      };
	      if (typeof userDef === 'function') {
	        def.get = makeComputedGetter(userDef, vm);
	        def.set = noop;
	      } else {
	        def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, vm) : (0, _util.bind)(userDef.get, vm) : noop;
	        def.set = userDef.set ? (0, _util.bind)(userDef.set, vm) : noop;
	      }
	      Object.defineProperty(vm, key, def);
	    }
	  }
	}
	
	function makeComputedGetter(getter, owner) {
	  var watcher = new _watcher2.default(owner, getter, null, {
	    lazy: true
	  });
	  return function computedGetter() {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (_dep2.default.target) {
	      watcher.depend();
	    }
	    return watcher.value;
	  };
	}
	
	function _initMethods() {
	  var vm = this;
	  var methods = vm._methods;
	  if (methods) {
	    for (var key in methods) {
	      vm[key] = (0, _util.bind)(methods[key], vm);
	    }
	  }
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Watcher;
	
	var _dep = __webpack_require__(87);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _util = __webpack_require__(80);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	
	var uid = 0;
	// import { pushWatcher } from './batcher'
	
	var prevTarget = void 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    (0, _util.extend)(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _util._Set();
	  this.newDepIds = new _util._Set();
	  // parse expression for getter
	  if (isFn) {
	    this.getter = expOrFn;
	  } else {
	    this.getter = (0, _util.parsePath)(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      process.env.NODE_ENV !== 'production' && (0, _util.warn)('Failed watching path: ' + expOrFn + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
	    }
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  prevTarget = _dep2.default.target;
	  _dep2.default.target = this;
	};
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  _dep2.default.target = prevTarget;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else {
	    this.run();
	  }
	  // } else if (this.sync) {
	  //   this.run()
	  // } else {
	  //   // if queued, only overwrite shallow with non-shallow,
	  //   // but not the other way around.
	  //   this.shallow = this.queued
	  //     ? shallow
	  //       ? this.shallow
	  //       : false
	  //     : !!shallow
	  //   this.queued = true
	  //   pushWatcher(this)
	  // }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    ((0, _util.isObject)(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      this.cb.call(this.vm, value, oldValue);
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = _dep2.default.target;
	  this.value = this.get();
	  this.dirty = false;
	  _dep2.default.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      (0, _util.remove)(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 * @param {Set} seen
	 */
	
	var seenObjects = new _util._Set();
	function traverse(val, seen) {
	  var i = void 0,
	      keys = void 0,
	      isA = void 0,
	      isO = void 0;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  isA = (0, _util.isArray)(val);
	  isO = (0, _util.isObject)(val);
	  if (isA || isO) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) {
	        traverse(val[i], seen);
	      }
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) {
	        traverse(val[keys[i]], seen);
	      }
	    }
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(83)))

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Dep;
	
	var _util = __webpack_require__(80);
	
	var uid = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	
	/* eslint-disable */
	
	function Dep() {
	  this.id = uid++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  (0, _util.remove)(this.subs, sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Observer = Observer;
	exports.observe = observe;
	exports.defineReactive = defineReactive;
	exports.set = set;
	exports.del = del;
	exports.proxy = proxy;
	exports.unproxy = unproxy;
	
	var _dep = __webpack_require__(87);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _array = __webpack_require__(89);
	
	var _util = __webpack_require__(80);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var arrayKeys = Object.getOwnPropertyNames(_array.arrayMethods);
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	/* eslint-disable */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new _dep2.default();
	  (0, _util.def)(value, '__ob__', this);
	  if ((0, _util.isArray)(value)) {
	    var augment = _util.hasProto ? protoAugment : copyAugment;
	    augment(value, _array.arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  for (var key in obj) {
	    this.convert(key, obj[key]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  (0, _util.remove)(this.vms, vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */
	
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    (0, _util.def)(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!(0, _util.isObject)(value)) {
	    return;
	  }
	  var ob = void 0;
	  if ((0, _util.hasOwn)(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (((0, _util.isArray)(value) || (0, _util.isPlainObject)(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new _dep2.default();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (_dep2.default.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if ((0, _util.isArray)(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */
	
	function set(obj, key, val) {
	  if ((0, _util.isArray)(obj)) {
	    return obj.splice(key, 1, val);
	  }
	  if ((0, _util.hasOwn)(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      proxy(vm, key);
	      vm.$forceUpdate();
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!(0, _util.hasOwn)(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj.$forceUpdate();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      unproxy(vm, key);
	      vm.$forceUpdate();
	    }
	  }
	}
	
	var KEY_WORDS = ['$index', '$value', '$event'];
	function proxy(vm, key) {
	  if (KEY_WORDS.indexOf(key) > -1 || !(0, _util.isReserved)(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter() {
	        return vm._data[key];
	      },
	      set: function proxySetter(val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}
	
	function unproxy(vm, key) {
	  if (!(0, _util.isReserved)(key)) {
	    delete vm[key];
	  }
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.arrayMethods = undefined;
	
	var _util = __webpack_require__(80);
	
	var arrayProto = Array.prototype; /* eslint-disable */
	
	var arrayMethods = exports.arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  (0, _util.def)(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted = void 0;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	(0, _util.def)(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = index + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	(0, _util.def)(arrayProto, '$remove', function $remove(index) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  if (typeof index !== 'number') {
	    index = this.indexOf(index);
	  }
	  if (index > -1) {
	    this.splice(index, 1);
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * @fileOverview
	                                                                                                                                                                                                                                                   * ViewModel template parser & data-binding process
	                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                   * required:
	                                                                                                                                                                                                                                                   * index.js: Vm
	                                                                                                                                                                                                                                                   * dom-helper.js: _createElement, _createBlock
	                                                                                                                                                                                                                                                   * dom-helper.js: _attachTarget, _moveTarget, _removeTarget
	                                                                                                                                                                                                                                                   * directive.js: _bindElement, _bindSubVm, _watch
	                                                                                                                                                                                                                                                   * events.js: $on
	                                                                                                                                                                                                                                                   */
	
	exports._build = _build;
	exports._compile = _compile;
	exports._targetIsFragment = _targetIsFragment;
	exports._targetIsContent = _targetIsContent;
	exports._targetNeedCheckRepeat = _targetNeedCheckRepeat;
	exports._targetNeedCheckShown = _targetNeedCheckShown;
	exports._targetNeedCheckType = _targetNeedCheckType;
	exports._targetIsComposed = _targetIsComposed;
	exports._compileFragment = _compileFragment;
	exports._compileRepeat = _compileRepeat;
	exports._compileShown = _compileShown;
	exports._compileType = _compileType;
	exports._compileCustomComponent = _compileCustomComponent;
	exports._compileNativeComponent = _compileNativeComponent;
	exports._compileChildren = _compileChildren;
	exports._bindRepeat = _bindRepeat;
	exports._bindShown = _bindShown;
	exports._watchBlock = _watchBlock;
	exports._mergeContext = _mergeContext;
	
	var _util = __webpack_require__(80);
	
	var _ = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * build(externalDirs)
	 *   createVm()
	 *   merge(externalDirs, dirs)
	 *   compile(template, parentNode)
	 *     if (type is content) create contentNode
	 *     else if (dirs have v-for) foreach -> create context
	 *       -> compile(templateWithoutFor, parentNode): diff(list) onchange
	 *     else if (dirs have v-if) assert
	 *       -> compile(templateWithoutIf, parentNode): toggle(shown) onchange
	 *     else if (type is native)
	 *       set(dirs): update(id/attr/style/class) onchange
	 *       append(template, parentNode)
	 *       foreach childNodes -> compile(childNode, template)
	 *     else if (type is custom)
	 *       addChildVm(vm, parentVm)
	 *       build(externalDirs)
	 *       foreach childNodes -> compile(childNode, template)
	 */
	function _build() {
	  var opt = this._options || {};
	  var template = opt.template || {};
	
	  if (opt.replace) {
	    if (template.children && template.children.length === 1) {
	      this._compile(template.children[0], this._parentEl);
	    } else {
	      this._compile(template.children, this._parentEl);
	    }
	  } else {
	    this._compile(template, this._parentEl);
	  }
	
	  _.debug('"ready" lifecycle in Vm(' + this._type + ')');
	  this.$emit('hook:ready');
	  this._ready = true;
	}
	
	/**
	 * Generate elements by child or children and append to parent elements.
	 * Root element info would be merged if has. The first argument may be an array
	 * if the root element with options.replace has not only one child.
	 *
	 * @param {object|array} target
	 * @param {object}       dest
	 * @param {object}       meta
	 */
	function _compile(target, dest, meta) {
	  var app = this._app || {};
	
	  if (app.lastSignal === -1) {
	    return;
	  }
	
	  var context = this;
	  if (context._targetIsFragment(target)) {
	    context._compileFragment(target, dest, meta);
	    return;
	  }
	  meta = meta || {};
	  if (context._targetIsContent(target)) {
	    _.debug('compile "content" block by', target);
	    context._content = context._createBlock(dest);
	    return;
	  }
	
	  if (context._targetNeedCheckRepeat(target, meta)) {
	    _.debug('compile "repeat" logic by', target);
	    context._compileRepeat(target, dest);
	    return;
	  }
	  if (context._targetNeedCheckShown(target, meta)) {
	    _.debug('compile "if" logic by', target);
	    context._compileShown(target, dest, meta);
	    return;
	  }
	  var typeGetter = meta.type || target.type;
	  if (context._targetNeedCheckType(typeGetter, meta)) {
	    context._compileType(target, dest, typeGetter, meta);
	    return;
	  }
	  var type = typeGetter;
	  var component = context._targetIsComposed(target, type);
	  if (component) {
	    _.debug('compile composed component by', target);
	    context._compileCustomComponent(component, target, dest, type, meta);
	    return;
	  }
	  _.debug('compile native component by', target);
	  context._compileNativeComponent(target, dest, type);
	}
	
	/**
	 * Check if target is a fragment (an array).
	 *
	 * @param  {object}  target
	 * @return {boolean}
	 */
	function _targetIsFragment(target) {
	  return Array.isArray(target);
	}
	
	/**
	 * Check if target type is content/slot.
	 *
	 * @param  {object}  target
	 * @return {boolean}
	 */
	function _targetIsContent(target) {
	  return target.type === 'content' || target.type === 'slot';
	}
	
	/**
	 * Check if target need to compile by a list.
	 *
	 * @param  {object}  target
	 * @param  {object}  meta
	 * @return {boolean}
	 */
	function _targetNeedCheckRepeat(target, meta) {
	  return !meta.hasOwnProperty('repeat') && target.repeat;
	}
	
	/**
	 * Check if target need to compile by a boolean value.
	 *
	 * @param  {object}  target
	 * @param  {object}  meta
	 * @return {boolean}
	 */
	function _targetNeedCheckShown(target, meta) {
	  return !meta.hasOwnProperty('shown') && target.shown;
	}
	
	/**
	 * Check if target need to compile by a dynamic type.
	 *
	 * @param  {string|function} typeGetter
	 * @param  {object}          meta
	 * @return {boolean}
	 */
	function _targetNeedCheckType(typeGetter, meta) {
	  return typeof typeGetter === 'function' && !meta.hasOwnProperty('type');
	}
	
	/**
	 * Check if this kind of component is composed.
	 *
	 * @param  {string}  type
	 * @return {boolean}
	 */
	function _targetIsComposed(target, type) {
	  var component = void 0;
	  if (this._app && this._app.customComponentMap) {
	    component = this._app.customComponentMap[type];
	  }
	  if (this._options && this._options.components) {
	    component = this._options.components[type];
	  }
	  if (target.component) {
	    component = component || {};
	  }
	  return component;
	}
	
	/**
	 * Compile a list of targets.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {object} meta
	 */
	function _compileFragment(target, dest, meta) {
	  var _this = this;
	
	  var fragBlock = this._createBlock(dest);
	  target.forEach(function (child) {
	    _this._compile(child, fragBlock, meta);
	  });
	}
	
	/**
	 * Compile a target with repeat directive.
	 *
	 * @param {object} target
	 * @param {object} dest
	 */
	function _compileRepeat(target, dest) {
	  var repeat = target.repeat;
	  var oldStyle = typeof repeat === 'function';
	  var getter = repeat.getter || repeat.expression || repeat;
	  if (typeof getter !== 'function') {
	    getter = function getter() {
	      return [];
	    };
	  }
	  var key = repeat.key || '$index';
	  var value = repeat.value || '$value';
	  var trackBy = repeat.trackBy || target.trackBy || target.attr && target.attr.trackBy;
	
	  var fragBlock = this._createBlock(dest);
	  fragBlock.children = [];
	  fragBlock.data = [];
	  fragBlock.vms = [];
	
	  this._bindRepeat(target, fragBlock, { getter: getter, key: key, value: value, trackBy: trackBy, oldStyle: oldStyle });
	}
	
	/**
	 * Compile a target with if directive.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {object} meta
	 */
	function _compileShown(target, dest, meta) {
	  var newMeta = { shown: true };
	  var fragBlock = this._createBlock(dest);
	
	  if (dest.element && dest.children) {
	    dest.children.push(fragBlock);
	  }
	
	  if (meta.repeat) {
	    newMeta.repeat = meta.repeat;
	  }
	
	  this._bindShown(target, fragBlock, newMeta);
	}
	
	/**
	 * Compile a target with dynamic component type.
	 *
	 * @param {object}   target
	 * @param {object}   dest
	 * @param {function} typeGetter
	 */
	function _compileType(target, dest, typeGetter, meta) {
	  var _this2 = this;
	
	  var type = typeGetter.call(this);
	  var newMeta = Object.assign({ type: type }, meta);
	  var fragBlock = this._createBlock(dest);
	
	  if (dest.element && dest.children) {
	    dest.children.push(fragBlock);
	  }
	
	  this._watch(typeGetter, function (value) {
	    var newMeta = Object.assign({ type: value }, meta);
	    _this2._removeBlock(fragBlock, true);
	    _this2._compile(target, fragBlock, newMeta);
	  });
	
	  this._compile(target, fragBlock, newMeta);
	}
	
	/**
	 * Compile a composed component.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {string} type
	 */
	function _compileCustomComponent(component, target, dest, type, meta) {
	  var Vm = this.constructor;
	  var context = this;
	  var subVm = new Vm(type, component, context, dest, undefined, {
	    'hook:init': function hookInit() {
	      context._setId(target.id, null, this);
	      // bind template earlier because of lifecycle issues
	      this._externalBinding = {
	        parent: context,
	        template: target
	      };
	    },
	    'hook:created': function hookCreated() {
	      context._bindSubVm(this, target, meta.repeat);
	    },
	    'hook:ready': function hookReady() {
	      if (this._content) {
	        context._compileChildren(target, this._content);
	      }
	    }
	  });
	  this._bindSubVmAfterInitialized(subVm, target);
	}
	
	/**
	 * Generate element from template and attach to the dest if needed.
	 * The time to attach depends on whether the mode status is node or tree.
	 *
	 * @param {object} template
	 * @param {object} dest
	 * @param {string} type
	 */
	function _compileNativeComponent(template, dest, type) {
	  this._applyNaitveComponentOptions(template);
	
	  var element = void 0;
	  if (dest.ref === '_documentElement') {
	    // if its parent is documentElement then it's a body
	    _.debug('compile to create body for', type);
	    element = this._createBody(type);
	  } else {
	    _.debug('compile to create element for', type);
	    element = this._createElement(type);
	  }
	
	  if (!this._rootEl) {
	    this._rootEl = element;
	    // bind event earlier because of lifecycle issues
	    var binding = this._externalBinding || {};
	    var target = binding.template;
	    var vm = binding.parent;
	    if (target && target.events && vm && element) {
	      for (var _type in target.events) {
	        var handler = vm[target.events[_type]];
	        if (handler) {
	          element.addEvent(_type, _.bind(handler, vm));
	        }
	      }
	    }
	  }
	
	  this._bindElement(element, template);
	
	  if (template.attr && template.attr.append) {
	    // backward, append prop in attr
	    template.append = template.attr.append;
	  }
	
	  if (template.append) {
	    // give the append attribute for ios adaptation
	    element.attr = element.attr || {};
	    element.attr.append = template.append;
	  }
	
	  var treeMode = template.append === 'tree';
	  var app = this._app || {};
	  if (app.lastSignal !== -1 && !treeMode) {
	    _.debug('compile to append single node for', element);
	    app.lastSignal = this._attachTarget(element, dest);
	  }
	  if (app.lastSignal !== -1) {
	    this._compileChildren(template, element);
	  }
	  if (app.lastSignal !== -1 && treeMode) {
	    _.debug('compile to append whole tree for', element);
	    app.lastSignal = this._attachTarget(element, dest);
	  }
	}
	
	/**
	 * Set all children to a certain parent element.
	 *
	 * @param {object} template
	 * @param {object} dest
	 */
	function _compileChildren(template, dest) {
	  var _this3 = this;
	
	  var app = this._app || {};
	  var children = template.children;
	  if (children && children.length) {
	    children.every(function (child) {
	      _this3._compile(child, dest);
	      return app.lastSignal !== -1;
	    });
	  }
	}
	
	/**
	 * Watch the list update and refresh the changes.
	 *
	 * @param {object} target
	 * @param {object} fragBlock {vms, data, children}
	 * @param {object} info      {getter, key, value, trackBy, oldStyle}
	 */
	function _bindRepeat(target, fragBlock, info) {
	  var _this4 = this;
	
	  var vms = fragBlock.vms;
	  var children = fragBlock.children;
	  var getter = info.getter;
	  var trackBy = info.trackBy;
	  var oldStyle = info.oldStyle;
	
	  var keyName = info.key;
	  var valueName = info.value;
	
	  function compileItem(item, index, context) {
	    var mergedData = void 0;
	    if (oldStyle) {
	      mergedData = item;
	      if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
	        mergedData[keyName] = index;
	        if (!mergedData.hasOwnProperty('INDEX')) {
	          Object.defineProperty(mergedData, 'INDEX', {
	            value: function value() {
	              _.warn('"INDEX" in repeat is deprecated,' + ' please use "$index" instead');
	            }
	          });
	        }
	      }
	    } else {
	      mergedData = {};
	      mergedData[keyName] = index;
	      mergedData[valueName] = item;
	    }
	    context = context._mergeContext(mergedData);
	    vms.push(context);
	    context._compile(target, fragBlock, { repeat: item });
	  }
	
	  var list = this._watchBlock(fragBlock, getter, 'repeat', function (data) {
	    _.debug('the "repeat" item has changed', data);
	    if (!fragBlock) {
	      return;
	    }
	
	    var oldChildren = children.slice();
	    var oldVms = vms.slice();
	    var oldData = fragBlock.data.slice();
	    // 1. collect all new refs track by
	    var trackMap = {};
	    var reusedMap = {};
	    data.forEach(function (item, index) {
	      var key = trackBy ? item[trackBy] : oldStyle ? item[keyName] : index;
	      /* istanbul ignore if */
	      if (key == null || key === '') {
	        return;
	      }
	      trackMap[key] = item;
	    });
	
	    // 2. remove unused element foreach old item
	    var reusedList = [];
	    oldData.forEach(function (item, index) {
	      var key = trackBy ? item[trackBy] : oldStyle ? item[keyName] : index;
	      if (trackMap.hasOwnProperty(key)) {
	        reusedMap[key] = {
	          item: item, index: index, key: key,
	          target: oldChildren[index],
	          vm: oldVms[index]
	        };
	        reusedList.push(item);
	      } else {
	        _this4._removeTarget(oldChildren[index]);
	      }
	    });
	
	    // 3. create new element foreach new item
	    children.length = 0;
	    vms.length = 0;
	    fragBlock.data = data.slice();
	    fragBlock.updateMark = fragBlock.start;
	
	    data.forEach(function (item, index) {
	      var key = trackBy ? item[trackBy] : oldStyle ? item[keyName] : index;
	      var reused = reusedMap[key];
	      if (reused) {
	        if (reused.item === reusedList[0]) {
	          reusedList.shift();
	        } else {
	          reusedList.$remove(reused.item);
	          _this4._moveTarget(reused.target, fragBlock.updateMark, true);
	        }
	        children.push(reused.target);
	        vms.push(reused.vm);
	        reused.vm[keyName] = index;
	        fragBlock.updateMark = reused.target;
	      } else {
	        compileItem(item, index, _this4);
	      }
	    });
	
	    delete fragBlock.updateMark;
	  });
	
	  fragBlock.data = list.slice(0);
	  list.forEach(function (item, index) {
	    compileItem(item, index, _this4);
	  });
	}
	
	/**
	 * Watch the display update and add/remove the element.
	 *
	 * @param  {object} target
	 * @param  {object} fragBlock
	 * @param  {object} context
	 */
	function _bindShown(target, fragBlock, meta) {
	  var _this5 = this;
	
	  var display = this._watchBlock(fragBlock, target.shown, 'shown', function (display) {
	    _.debug('the "if" item was changed', display);
	
	    if (!fragBlock || !!fragBlock.display === !!display) {
	      return;
	    }
	    fragBlock.display = !!display;
	    if (display) {
	      _this5._compile(target, fragBlock, meta);
	    } else {
	      _this5._removeBlock(fragBlock, true);
	    }
	  });
	
	  fragBlock.display = !!display;
	  if (display) {
	    this._compile(target, fragBlock, meta);
	  }
	}
	
	/**
	 * Watch calc value changes and append certain type action to differ.
	 * It is used for if or repeat data-binding generator.
	 *
	 * @param  {object}   fragBlock
	 * @param  {function} calc
	 * @param  {string}   type
	 * @param  {function} handler
	 * @return {any}      init value of calc
	 */
	function _watchBlock(fragBlock, calc, type, handler) {
	  var differ = this && this._app && this._app.differ;
	  var config = {};
	  var depth = (fragBlock.element.depth || 0) + 1;
	
	  return this._watch(calc, function (value) {
	    config.latestValue = value;
	    if (differ && !config.recorded) {
	      differ.append(type, depth, fragBlock.blockId, function () {
	        var latestValue = config.latestValue;
	        handler(latestValue);
	        config.recorded = false;
	        config.latestValue = undefined;
	      });
	    }
	    config.recorded = true;
	  });
	}
	
	/**
	 * Clone a context and merge certain data.
	 *
	 * @param  {object} mergedData
	 * @return {object}
	 */
	function _mergeContext(mergedData) {
	  var context = Object.create(this);
	  context._data = mergedData;
	  context._initData();
	  context._initComputed();
	  context._realParent = this;
	  return context;
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * @fileOverview
	                                                                                                                                                                                                                                                   * Directive Parser
	                                                                                                                                                                                                                                                   */
	
	exports._applyNaitveComponentOptions = _applyNaitveComponentOptions;
	exports._bindElement = _bindElement;
	exports._bindSubVm = _bindSubVm;
	exports._bindSubVmAfterInitialized = _bindSubVmAfterInitialized;
	exports._setId = _setId;
	exports._setAttr = _setAttr;
	exports._setClass = _setClass;
	exports._setStyle = _setStyle;
	exports._setEvent = _setEvent;
	exports._bindEvents = _bindEvents;
	exports._bindDir = _bindDir;
	exports._bindKey = _bindKey;
	exports._watch = _watch;
	
	var _util = __webpack_require__(80);
	
	var _ = _interopRequireWildcard(_util);
	
	var _watcher = __webpack_require__(86);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _config = __webpack_require__(78);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var nativeComponentMap = _config2.default.nativeComponentMap;
	
	
	var SETTERS = {
	  attr: 'setAttr',
	  style: 'setStyle',
	  event: 'addEvent'
	};
	
	/**
	 * apply the native component's options(specified by template.type)
	 * to the template
	 */
	function _applyNaitveComponentOptions(template) {
	  var type = template.type;
	
	  var options = nativeComponentMap[type];
	
	  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	    for (var key in options) {
	      if (template[key] == null) {
	        template[key] = options[key];
	      } else if (_.typof(template[key]) === 'object' && _.typof(options[key]) === 'object') {
	        for (var subkey in options[key]) {
	          if (template[key][subkey] == null) {
	            template[key][subkey] = options[key][subkey];
	          }
	        }
	      }
	    }
	  }
	}
	
	/**
	 * bind all id, attr, classnames, style, events to an element
	 */
	function _bindElement(el, template) {
	  this._setId(template.id, el, this);
	  this._setAttr(el, template.attr);
	  this._setClass(el, template.classList);
	  this._setStyle(el, template.style);
	  this._bindEvents(el, template.events);
	}
	
	/**
	 * bind all props to sub vm and bind all style, events to the root element
	 * of the sub vm if it doesn't have a replaced multi-node fragment
	 */
	function _bindSubVm(subVm, template, repeatItem) {
	  subVm = subVm || {};
	  template = template || {};
	
	  var options = subVm._options || {};
	
	  // bind props
	  var props = options.props;
	
	  if (Array.isArray(props)) {
	    props = props.reduce(function (result, value) {
	      result[value] = true;
	      return result;
	    }, {});
	  }
	
	  mergeProps(repeatItem, props, this, subVm);
	  mergeProps(template.attr, props, this, subVm);
	}
	
	function _bindSubVmAfterInitialized(subVm, template) {
	  mergeClassStyle(template.classList, this, subVm);
	  mergeStyle(template.style, this, subVm);
	}
	
	function mergeProps(target, props, vm, subVm) {
	  if (!target) {
	    return;
	  }
	
	  var _loop = function _loop(key) {
	    if (!props || props[key]) {
	      var value = target[key];
	      if (typeof value === 'function') {
	        var returnValue = vm._watch(value, function (v) {
	          subVm[key] = v;
	        });
	        subVm[key] = returnValue;
	      } else {
	        subVm[key] = value;
	      }
	    }
	  };
	
	  for (var key in target) {
	    _loop(key);
	  }
	}
	
	function mergeStyle(target, vm, subVm) {
	  var _loop2 = function _loop2(key) {
	    var value = target[key];
	    if (typeof value === 'function') {
	      var returnValue = vm._watch(value, function (v) {
	        if (subVm._rootEl) {
	          subVm._rootEl.setStyle(key, v);
	        }
	      });
	      subVm._rootEl.setStyle(key, returnValue);
	    } else {
	      if (subVm._rootEl) {
	        subVm._rootEl.setStyle(key, value);
	      }
	    }
	  };
	
	  for (var key in target) {
	    _loop2(key);
	  }
	}
	
	function mergeClassStyle(target, vm, subVm) {
	  var css = vm._options && vm._options.style || {};
	
	  /* istanbul ignore if */
	  if (!subVm._rootEl) {
	    return;
	  }
	
	  if (typeof target === 'function') {
	    var _value = vm._watch(target, function (v) {
	      setClassStyle(subVm._rootEl, css, v);
	    });
	    setClassStyle(subVm._rootEl, css, _value);
	  } else if (target != null) {
	    setClassStyle(subVm._rootEl, css, target);
	  }
	}
	
	/**
	 * bind id to an element
	 * each id is unique in a whole vm
	 */
	function _setId(id, el, vm) {
	  var _this = this;
	
	  var map = Object.create(null);
	
	  Object.defineProperties(map, {
	    vm: {
	      value: vm,
	      writable: false,
	      configurable: false
	    },
	    el: {
	      get: function get() {
	        return el || vm._rootEl;
	      },
	      configurable: false
	    }
	  });
	
	  if (typeof id === 'function') {
	    var handler = id;
	    id = handler.call(this);
	    if (id) {
	      this._ids[id] = map;
	    }
	    this._watch(handler, function (newId) {
	      if (newId) {
	        _this._ids[newId] = map;
	      }
	    });
	  } else if (id && typeof id === 'string') {
	    this._ids[id] = map;
	  }
	}
	
	/**
	 * bind attr to an element
	 */
	function _setAttr(el, attr) {
	  this._bindDir(el, 'attr', attr);
	}
	
	function setClassStyle(el, css, classList) {
	  var classStyle = {};
	  var length = classList.length;
	
	  for (var i = 0; i < length; i++) {
	    var style = css[classList[i]];
	    if (style) {
	      for (var key in style) {
	        classStyle[key] = style[key];
	      }
	    }
	  }
	  el.setClassStyle(classStyle);
	}
	
	/**
	 * bind classnames to an element
	 */
	function _setClass(el, classList) {
	  if (typeof classList !== 'function' && !Array.isArray(classList)) {
	    return;
	  }
	  if (Array.isArray(classList) && !classList.length) {
	    el.setClassStyle({});
	    return;
	  }
	
	  var style = this._options && this._options.style || {};
	  if (typeof classList === 'function') {
	    var _value2 = this._watch(classList, function (v) {
	      setClassStyle(el, style, v);
	    });
	    setClassStyle(el, style, _value2);
	  } else {
	    setClassStyle(el, style, classList);
	  }
	}
	
	/**
	 * bind style to an element
	 */
	function _setStyle(el, style) {
	  this._bindDir(el, 'style', style);
	}
	
	/**
	 * add an event type and handler to an element and generate a dom update
	 */
	function _setEvent(el, type, handler) {
	  el.addEvent(type, _.bind(handler, this));
	}
	
	/**
	 * add all events of an element
	 */
	function _bindEvents(el, events) {
	  if (!events) {
	    return;
	  }
	  var keys = Object.keys(events);
	  var i = keys.length;
	  while (i--) {
	    var key = keys[i];
	    var handler = events[key];
	    if (typeof handler === 'string') {
	      handler = this[handler];
	      /* istanbul ignore if */
	      if (!handler) {
	        _.error('The method "' + handler + '" is not defined.');
	      }
	    }
	    this._setEvent(el, key, handler);
	  }
	}
	
	/**
	 * set a series of members as a kind of an element
	 * for example: style, attr, ...
	 * if the value is a function then bind the data changes
	 */
	function _bindDir(el, name, data) {
	  if (!data) {
	    return;
	  }
	  var keys = Object.keys(data);
	  var i = keys.length;
	  while (i--) {
	    var key = keys[i];
	    var _value3 = data[key];
	    if (typeof _value3 === 'function') {
	      this._bindKey(el, name, key, _value3);
	    } else {
	      el[SETTERS[name]](key, _value3);
	    }
	  }
	}
	
	/**
	 * bind data changes to a certain key to a name series in an element
	 */
	function _bindKey(el, name, key, calc) {
	  var _this2 = this;
	
	  var methodName = SETTERS[name];
	  // watch the calc, and returns a value by calc.call()
	  var value = this._watch(calc, function (value) {
	    function handler() {
	      el[methodName](key, value);
	    }
	    var differ = _this2 && _this2._app && _this2._app.differ;
	    if (differ) {
	      differ.append('element', el.depth, el.ref, handler);
	    } else {
	      handler();
	    }
	  });
	
	  el[methodName](key, value);
	}
	
	/**
	 * watch a calc function and callback if the calc value changes
	 */
	function _watch(calc, callback) {
	  var watcher = new _watcher2.default(this, calc, function (value, oldValue) {
	    /* istanbul ignore if */
	    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' && value === oldValue) {
	      return;
	    }
	    callback(value);
	  });
	
	  return watcher.value;
	}

/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports._createBody = _createBody;
	exports._createElement = _createElement;
	exports._createBlock = _createBlock;
	exports._createBlockStart = _createBlockStart;
	exports._createBlockEnd = _createBlockEnd;
	exports._attachTarget = _attachTarget;
	exports._moveTarget = _moveTarget;
	exports._moveElement = _moveElement;
	exports._moveBlock = _moveBlock;
	exports._removeTarget = _removeTarget;
	exports._removeElement = _removeElement;
	exports._removeBlock = _removeBlock;
	/**
	 * @fileOverview Document & Element Helpers.
	 *
	 * required:
	 * Document#: createElement, createComment, getRef
	 * Element#: appendChild, insertBefore, removeChild, nextSibling
	 */
	
	/**
	 * Create a body by type
	 * Using this._app.doc
	 *
	 * @param  {string} type
	 */
	function _createBody(type) {
	  var doc = this._app.doc;
	  return doc.createBody(type);
	}
	
	/**
	 * Create an element by type
	 * Using this._app.doc
	 *
	 * @param  {string} type
	 */
	function _createElement(type) {
	  var doc = this._app.doc;
	  return doc.createElement(type);
	}
	
	/**
	 * Create and return a frag block for an element.
	 * The frag block has a starter, ender and the element itself.
	 *
	 * @param  {object} element
	 */
	function _createBlock(element) {
	  var start = this._createBlockStart();
	  var end = this._createBlockEnd();
	  var blockId = lastestBlockId++;
	  if (element.element) {
	    var updateMark = element.updateMark;
	    if (updateMark) {
	      if (updateMark.element) {
	        updateMark = updateMark.end;
	      }
	      element.element.insertAfter(end, updateMark);
	      element.element.insertAfter(start, updateMark);
	      element.updateMark = end;
	    } else {
	      element.element.insertBefore(start, element.end);
	      element.element.insertBefore(end, element.end);
	    }
	    element = element.element;
	  } else {
	    element.appendChild(start);
	    element.appendChild(end);
	  }
	  return { start: start, end: end, element: element, blockId: blockId };
	}
	
	var lastestBlockId = 1;
	
	/**
	 * Create and return a block starter.
	 * Using this._app.doc
	 */
	function _createBlockStart() {
	  var doc = this._app.doc;
	  var anchor = doc.createComment('start');
	  return anchor;
	}
	
	/**
	 * Create and return a block ender.
	 * Using this._app.doc
	 */
	function _createBlockEnd() {
	  var doc = this._app.doc;
	  var anchor = doc.createComment('end');
	  return anchor;
	}
	
	/**
	 * Attach target to a certain dest using appendChild by default.
	 * If the dest is a frag block then insert before the ender.
	 * If the target is a frag block then attach the starter and ender in order.
	 *
	 * @param  {object} target
	 * @param  {object} dest
	 */
	function _attachTarget(target, dest) {
	  if (dest.element) {
	    var before = dest.end;
	    var after = dest.updateMark;
	    // push new target for watch list update later
	    if (dest.children) {
	      dest.children.push(target);
	    }
	    // for check repeat case
	    if (after) {
	      var signal = this._moveTarget(target, after);
	      dest.updateMark = target.element ? target.end : target;
	      return signal;
	    } else if (target.element) {
	      dest.element.insertBefore(target.start, before);
	      dest.element.insertBefore(target.end, before);
	    } else {
	      return dest.element.insertBefore(target, before);
	    }
	  } else {
	    if (target.element) {
	      dest.appendChild(target.start);
	      dest.appendChild(target.end);
	    } else {
	      return dest.appendChild(target);
	    }
	  }
	}
	
	/**
	 * Move target before a certain element. The target maybe block or element.
	 *
	 * @param  {object} target
	 * @param  {object} before
	 */
	function _moveTarget(target, after) {
	  if (target.element) {
	    return this._moveBlock(target, after);
	  }
	  return this._moveElement(target, after);
	}
	
	/**
	 * Move element before a certain element.
	 *
	 * @param  {object} element
	 * @param  {object} before
	 */
	function _moveElement(element, after) {
	  var parent = after.parentNode;
	  if (parent) {
	    return parent.insertAfter(element, after);
	  }
	}
	
	/**
	 * Move all elements of the block before a certain element.
	 *
	 * @param  {object} fragBlock
	 * @param  {object} before
	 */
	function _moveBlock(fragBlock, after) {
	  var parent = after.parentNode;
	
	  if (parent) {
	    var _ret = function () {
	      var el = fragBlock.start;
	      var signal = void 0;
	      var group = [el];
	
	      while (el && el !== fragBlock.end) {
	        el = el.nextSibling;
	        group.push(el);
	      }
	
	      var temp = after;
	      group.every(function (el) {
	        signal = parent.insertAfter(el, temp);
	        temp = el;
	        return signal !== -1;
	      });
	
	      return {
	        v: signal
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	}
	
	/**
	 * Remove target from DOM tree.
	 * If the target is a frag block then call _removeBlock
	 *
	 * @param  {object} target
	 */
	function _removeTarget(target) {
	  if (target.element) {
	    this._removeBlock(target);
	  } else {
	    this._removeElement(target);
	  }
	}
	
	/**
	 * Remove a certain element.
	 * Using this._app.doc
	 *
	 * @param  {object} target
	 */
	function _removeElement(target) {
	  var parent = target.parentNode;
	
	  if (parent) {
	    parent.removeChild(target);
	  }
	}
	
	/**
	 * Remove a frag block.
	 * The second param decides whether the block self should be removed too.
	 *
	 * @param  {object}  fragBlock
	 * @param  {Boolean} preserveBlock=false
	 */
	function _removeBlock(fragBlock) {
	  var _this = this;
	
	  var preserveBlock = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	  var result = [];
	  var el = fragBlock.start.nextSibling;
	
	  while (el && el !== fragBlock.end) {
	    result.push(el);
	    el = el.nextSibling;
	  }
	
	  if (!preserveBlock) {
	    this._removeElement(fragBlock.start);
	  }
	  result.forEach(function (el) {
	    _this._removeElement(el);
	  });
	  if (!preserveBlock) {
	    this._removeElement(fragBlock.end);
	  }
	}

/***/ },
/* 93 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$emit = $emit;
	exports.$dispatch = $dispatch;
	exports.$broadcast = $broadcast;
	exports.$on = $on;
	exports.$off = $off;
	exports._initEvents = _initEvents;
	function Evt(type, detail) {
	  if (detail instanceof Evt) {
	    return detail;
	  }
	
	  this.timestamp = Date.now();
	  this.detail = detail;
	  this.type = type;
	
	  var shouldStop = false;
	  this.stop = function () {
	    shouldStop = true;
	  };
	  this.hasStopped = function () {
	    return shouldStop;
	  };
	}
	
	function $emit(type, detail) {
	  var _this = this;
	
	  var events = this._vmEvents;
	  var handlerList = events[type];
	  if (handlerList) {
	    (function () {
	      var evt = new Evt(type, detail);
	      handlerList.forEach(function (handler) {
	        handler.call(_this, evt);
	      });
	    })();
	  }
	}
	
	function $dispatch(type, detail) {
	  var evt = new Evt(type, detail);
	  this.$emit(type, evt);
	
	  if (!evt.hasStopped() && this._parent && this._parent.$dispatch) {
	    this._parent.$dispatch(type, evt);
	  }
	}
	
	function $broadcast(type, detail) {
	  var evt = new Evt(type, detail);
	  this.$emit(type, evt);
	
	  if (!evt.hasStopped() && this._childrenVms) {
	    this._childrenVms.forEach(function (subVm) {
	      subVm.$broadcast(type, evt);
	    });
	  }
	}
	
	function $on(type, handler) {
	  if (!type || typeof handler !== 'function') {
	    return;
	  }
	  var events = this._vmEvents;
	  var handlerList = events[type] || [];
	  handlerList.push(handler);
	  events[type] = handlerList;
	
	  // fixed old version lifecycle design
	  if (type === 'hook:ready' && this._ready) {
	    this.$emit('hook:ready');
	  }
	}
	
	function $off(type, handler) {
	  if (!type) {
	    return;
	  }
	  var events = this._vmEvents;
	  if (!handler) {
	    delete events[type];
	    return;
	  }
	  var handlerList = events[type];
	  if (!handlerList) {
	    return;
	  }
	  handlerList.$remove(handler);
	}
	
	var LIFE_CYCLE_TYPES = ['init', 'created', 'ready'];
	
	function _initEvents(externalEvents) {
	  var _this2 = this;
	
	  var options = this._options || {};
	  var events = options.events || {};
	  for (var type1 in events) {
	    this.$on(type1, events[type1]);
	  }
	  for (var type2 in externalEvents) {
	    this.$on(type2, externalEvents[type2]);
	  }
	  LIFE_CYCLE_TYPES.forEach(function (type) {
	    _this2.$on('hook:' + type, options[type]);
	  });
	}

/***/ },
/* 94 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clearModules = clearModules;
	exports.getModule = getModule;
	exports.requireModule = requireModule;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	exports.requireComponent = requireComponent;
	exports.registerComponent = registerComponent;
	var nativeModules = {};
	
	function assignModules(modules, ifReplace) {
	  var _loop = function _loop(moduleName) {
	    // init `modules[moduleName][]`
	    var methods = nativeModules[moduleName];
	    if (!methods) {
	      methods = {};
	      nativeModules[moduleName] = methods;
	    }
	
	    // push each non-existed new method
	    modules[moduleName].forEach(function (method) {
	      if (typeof method === 'string') {
	        method = {
	          name: method
	        };
	      }
	
	      if (!methods[method.name] || ifReplace) {
	        methods[method.name] = method;
	      }
	    });
	  };
	
	  for (var moduleName in modules) {
	    _loop(moduleName);
	  }
	}
	
	function assignApis(Ctor, apis) {
	  var p = Ctor.prototype;
	
	  for (var apiName in apis) {
	    if (!p.hasOwnProperty(apiName)) {
	      p[apiName] = apis[apiName];
	    }
	  }
	}
	
	function clearModules() {
	  nativeModules = {};
	}
	
	function getModule(moduleName) {
	  return nativeModules[moduleName];
	}
	
	/**
	 * @context a instance of AppInstance
	 */
	function requireModule(moduleName) {
	  var _this = this;
	
	  var methods = nativeModules[moduleName];
	  var target = {};
	
	  var _loop2 = function _loop2(methodName) {
	    target[methodName] = function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _this.callTasks({
	        module: moduleName,
	        method: methodName,
	        args: args
	      });
	    };
	  };
	
	  for (var methodName in methods) {
	    _loop2(methodName);
	  }
	
	  return target;
	}
	
	/**
	 * @context Vm
	 */
	function registerModules(modules, ifReplace) {
	  assignModules(modules, ifReplace);
	}
	
	/**
	 * @context Vm
	 */
	function registerMethods(apis) {
	  assignApis(this, apis);
	}
	
	/**
	 * @context a instance of AppInstance
	 */
	function requireComponent(name) {
	  var customComponentMap = this.customComponentMap;
	
	  return customComponentMap[name];
	}
	
	/**
	 * @context a instance of AppInstance
	 */
	function registerComponent(name, exports) {
	  var customComponentMap = this.customComponentMap;
	
	
	  if (customComponentMap[name]) {
	    throw new Error('define a component(' + name + ') that already exists');
	  }
	
	  customComponentMap[name] = exports;
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.normalizeVersion = normalizeVersion;
	exports.getError = getError;
	exports.check = check;
	
	var _semver = __webpack_require__(82);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _util = __webpack_require__(80);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * [normalizeVersion description]
	 * @param  {String} Version. ie: 1, 1.0, 1.0.0
	 * @return {String} Version
	 */
	function normalizeVersion(v) {
	  var isValid = _semver2.default.valid(v);
	  if (isValid) {
	    return v;
	  }
	
	  v = typeof v === 'string' ? v : '';
	  var split = v.split('.');
	  var i = 0;
	  var result = [];
	
	  while (i < 3) {
	    var s = typeof split[i] === 'string' && split[i] ? split[i] : '0';
	    result.push(s);
	    i++;
	  }
	
	  return result.join('.');
	}
	
	function getError(key, val, criteria) {
	  var result = {
	    isDowngrade: true,
	    errorType: 1,
	    code: 1000
	  };
	  var getMsg = function getMsg(key, val, criteria) {
	    return 'Downgrade[' + key + '] :: deviceInfo ' + val + ' matched criteria ' + criteria;
	  };
	  var _key = key.toLowerCase();
	
	  result.errorMessage = getMsg(key, val, criteria);
	
	  if (_key.indexOf('osversion') >= 0) {
	    result.code = 1001;
	  } else if (_key.indexOf('appversion') >= 0) {
	    result.code = 1002;
	  } else if (_key.indexOf('weexversion') >= 0) {
	    result.code = 1003;
	  } else if (_key.indexOf('devicemodel') >= 0) {
	    result.code = 1004;
	  }
	
	  return result;
	}
	
	/**
	 * WEEX framework input(deviceInfo)
	 * {
	 *   platform: 'iOS' or 'android'
	 *   osVersion: '1.0.0' or '1.0' or '1'
	 *   appVersion: '1.0.0' or '1.0' or '1'
	 *   weexVersion: '1.0.0' or '1.0' or '1'
	 *   dDeviceModel: 'MODEL_NAME'
	 * }
	 *
	 * downgrade config(config)
	 * {
	 *   ios: {
	 *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     deviceModel: ['modelA', 'modelB', ...]
	 *   },
	 *   android: {
	 *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     deviceModel: ['modelA', 'modelB', ...]
	 *   }
	 * }
	 *
	 *
	 * @param  {object} deviceInfo Weex SDK framework input
	 * @param  {object} config     user input
	 * @return {Object}            { isDowngrade: true/false, errorMessage... }
	 */
	function check(config, deviceInfo) {
	  deviceInfo = deviceInfo || global.WXEnvironment;
	  deviceInfo = (0, _util.isPlainObject)(deviceInfo) ? deviceInfo : {};
	
	  var result = {
	    isDowngrade: false // defautl is pass
	  };
	
	  if ((0, _util.typof)(config) === 'function') {
	    var customDowngrade = config.call(this, deviceInfo, {
	      semver: _semver2.default,
	      normalizeVersion: this.normalizeVersion
	    });
	
	    customDowngrade = !!customDowngrade;
	
	    result = customDowngrade ? this.getError('custom', '', 'custom params') : result;
	  } else {
	    config = (0, _util.isPlainObject)(config) ? config : {};
	
	    var platform = deviceInfo.platform || 'unknow';
	    var dPlatform = platform.toLowerCase();
	    var cObj = config[dPlatform] || {};
	
	    for (var i in deviceInfo) {
	      var key = i;
	      var keyLower = key.toLowerCase();
	      var val = deviceInfo[i];
	      var isVersion = keyLower.indexOf('version') >= 0;
	      var isDeviceModel = keyLower.indexOf('devicemodel') >= 0;
	      var criteria = cObj[i];
	
	      if (criteria && isVersion) {
	        var c = this.normalizeVersion(criteria);
	        var d = this.normalizeVersion(deviceInfo[i]);
	
	        if (_semver2.default.satisfies(d, c)) {
	          result = this.getError(key, val, criteria);
	          break;
	        }
	      } else if (isDeviceModel) {
	        var _criteria = (0, _util.typof)(criteria) === 'array' ? criteria : [criteria];
	        if (_criteria.indexOf(val) >= 0) {
	          result = this.getError(key, val, criteria);
	          break;
	        }
	      }
	    }
	  }
	
	  return result;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateActions = updateActions;
	exports.init = init;
	exports.destroy = destroy;
	exports.getRootElement = getRootElement;
	exports.fireEvent = fireEvent;
	exports.callback = callback;
	exports.refreshData = refreshData;
	
	var _util = __webpack_require__(80);
	
	var _ = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @fileOverview
	                                                                                                                                                                                                     * instance controls from native
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * - init bundle
	                                                                                                                                                                                                     * - fire event
	                                                                                                                                                                                                     * - callback
	                                                                                                                                                                                                     * - destroy
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * corresponded with the API of instance manager (framework.js)
	                                                                                                                                                                                                     */
	
	function updateActions() {
	  this.differ.flush();
	  var tasks = [];
	  if (this.doc && this.doc.listener && this.doc.listener.updates.length) {
	    tasks.push.apply(tasks, _toConsumableArray(this.doc.listener.updates));
	    this.doc.listener.updates = [];
	  }
	  if (tasks.length) {
	    return this.callTasks(tasks);
	  }
	}
	
	function init(code, data) {
	  var _this = this;
	
	  _.debug('Intialize an instance with:\n', code, data);
	
	  var result = void 0;
	  // @see: lib/app/bundle.js
	  var define = _.bind(this.define, this);
	  var bootstrap = function bootstrap(name, config, _data) {
	    result = _this.bootstrap(name, config, _data || data);
	    _this.updateActions();
	    _this.doc.listener.createFinish();
	    _.debug('After intialized an instance(' + _this.id + ')');
	  };
	
	  // backward(register/render)
	  var register = _.bind(this.register, this);
	  var render = function render(name, _data) {
	    result = _this.bootstrap(name, {}, _data);
	  };
	
	  var require = function require(name) {
	    return function (_data) {
	      result = _this.bootstrap(name, {}, _data);
	    };
	  };
	
	  var document = this.doc;
	
	  var functionBody = void 0;
	  /* istanbul ignore if */
	  if (typeof code === 'function') {
	    // `function () {...}` -> `{...}`
	    // not very strict
	    functionBody = code.toString().substr(12);
	  } else if (code) {
	    functionBody = code.toString();
	  }
	
	  var _global = global;
	  var WXEnvironment = _global.WXEnvironment;
	
	  if (WXEnvironment && WXEnvironment.platform !== 'Web') {
	    (function () {
	      var timer = _this.requireModule('timer');
	      var timerAPIs = {
	        setTimeout: function setTimeout() {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }
	
	          var handler = function handler() {
	            args[0].apply(args, _toConsumableArray(args.slice(2)));
	          };
	          timer.setTimeout(handler, args[1]);
	          return _this.uid.toString();
	        },
	        setInterval: function setInterval() {
	          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	          }
	
	          var handler = function handler() {
	            args[0].apply(args, _toConsumableArray(args.slice(2)));
	          };
	          timer.setInterval(handler, args[1]);
	          return _this.uid.toString();
	        },
	        clearTimeout: function clearTimeout(n) {
	          timer.clearTimeout(n);
	        },
	        clearInterval: function clearInterval(n) {
	          timer.clearInterval(n);
	        }
	      };
	
	      var fn = new Function('define', 'require', 'document', 'bootstrap', 'register', 'render', '__weex_define__', // alias for define
	      '__weex_bootstrap__', // alias for bootstrap
	      'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval', functionBody);
	
	      fn(define, require, document, bootstrap, register, render, define, bootstrap, timerAPIs.setTimeout, timerAPIs.setInterval, timerAPIs.clearTimeout, timerAPIs.clearInterval);
	    })();
	  } else {
	    var _fn = new Function('define', 'require', 'document', 'bootstrap', 'register', 'render', '__weex_define__', // alias for define
	    '__weex_bootstrap__', // alias for bootstrap
	    functionBody);
	
	    _fn(define, require, document, bootstrap, register, render, define, bootstrap);
	  }
	
	  return result;
	}
	
	function destroy() {
	  _.debug('Destory an instance(' + this.id + ')');
	
	  this.id = '';
	  this.options = null;
	  this.blocks = null;
	  this.vm = null;
	  this.doc = null;
	  this.customComponentMap = null;
	  this.callbacks = null;
	}
	
	function getRootElement() {
	  var doc = this.doc || {};
	  var body = doc.body || {};
	  return body.toJSON ? body.toJSON() : {};
	}
	
	function fireEvent(ref, type, e, domChanges) {
	  var _this2 = this;
	
	  _.debug('Fire a "' + type + '" event on an element(' + ref + ') in instance(' + this.id + ')');
	  if (Array.isArray(ref)) {
	    ref.some(function (ref) {
	      return _this2.fireEvent(ref, type, e) !== false;
	    });
	    return;
	  }
	
	  var el = this.doc.getRef(ref);
	
	  if (el) {
	    this.doc.close();
	    var result = this.doc.fireEvent(el, type, e, domChanges);
	    this.updateActions();
	    this.doc.listener.updateFinish();
	    this.doc.open();
	    return result;
	  }
	
	  return new Error('invalid element reference "' + ref + '"');
	}
	
	function callback(callbackId, data, ifKeepAlive) {
	  _.debug('Invoke a callback(' + callbackId + ') with', data, 'in instance(' + this.id + ')');
	
	  var callback = this.callbacks[callbackId];
	
	  if (typeof callback === 'function') {
	    this.doc.close();
	    callback(data); // data is already a object, @see: lib/runtime/index.js
	
	    if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
	      this.callbacks[callbackId] = undefined;
	    }
	
	    this.updateActions();
	    this.doc.listener.updateFinish();
	    this.doc.open();
	    return;
	  }
	
	  return new Error('invalid callback id "' + callbackId + '"');
	}
	
	function refreshData(data) {
	  _.debug('Refresh with', data, 'in instance[' + this.id + ']');
	
	  var vm = this.vm;
	
	  if (vm && data) {
	    this.doc.close();
	    if (typeof vm.refreshData === 'function') {
	      vm.refreshData(data);
	    } else {
	      _.extend(vm, data);
	    }
	    this.updateActions();
	    this.doc.listener.refreshFinish();
	    this.doc.open();
	    return;
	  }
	
	  return new Error('invalid data "' + data + '"');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 97 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Differ = function () {
	  function Differ(id) {
	    _classCallCheck(this, Differ);
	
	    this.id = id;
	    this.map = [];
	    this.hooks = [];
	  }
	
	  _createClass(Differ, [{
	    key: 'isEmpty',
	    value: function isEmpty() {
	      return this.map.length === 0;
	    }
	  }, {
	    key: 'append',
	    value: function append(type, depth, ref, handler) {
	      var _this = this;
	
	      if (!this.hasTimer) {
	        this.hasTimer = true;
	        setTimeout(function () {
	          _this.hasTimer = false;
	          _this.flush(true);
	        }, 0);
	      }
	      var map = this.map;
	      if (!map[depth]) {
	        map[depth] = {};
	      }
	      var group = map[depth];
	      if (!group[type]) {
	        group[type] = {};
	      }
	      if (type === 'element') {
	        if (!group[type][ref]) {
	          group[type][ref] = [];
	        }
	        group[type][ref].push(handler);
	      } else {
	        group[type][ref] = handler;
	      }
	    }
	  }, {
	    key: 'flush',
	    value: function flush(isTimeout) {
	      var map = this.map.slice();
	      this.map.length = 0;
	      map.forEach(function (group) {
	        callTypeMap(group, 'repeat');
	        callTypeMap(group, 'shown');
	        callTypeList(group, 'element');
	      });
	
	      var hooks = this.hooks.slice();
	      this.hooks.length = 0;
	      hooks.forEach(function (fn) {
	        fn();
	      });
	
	      if (!this.isEmpty()) {
	        this.flush();
	      }
	    }
	  }, {
	    key: 'then',
	    value: function then(fn) {
	      this.hooks.push(fn);
	    }
	  }]);
	
	  return Differ;
	}();
	
	exports.default = Differ;
	
	
	function callTypeMap(group, type) {
	  var map = group[type];
	  for (var ref in map) {
	    map[ref]();
	  }
	}
	
	function callTypeList(group, type) {
	  var map = group[type];
	  for (var ref in map) {
	    var list = map[ref];
	    list.forEach(function (handler) {
	      handler();
	    });
	  }
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.instanceMap = undefined;
	exports.Document = Document;
	exports.Node = Node;
	exports.Element = Element;
	exports.Comment = Comment;
	
	var _listener4 = __webpack_require__(99);
	
	var _listener5 = _interopRequireDefault(_listener4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DEFAULT_TAG_NAME = 'div'; /**
	                               * @fileOverview
	                               * A simple virtual dom implementation
	                               */
	
	var instanceMap = exports.instanceMap = {};
	var nextNodeRef = 1;
	
	function Document(id, url, handler) {
	  id = id ? id.toString() : '';
	  this.id = id;
	  this.URL = url;
	
	  instanceMap[id] = this;
	  this.nodeMap = {};
	  this.listener = new _listener5.default(id, handler || genCallTasks(id));
	  this.createDocumentElement();
	}
	
	function genCallTasks(id) {
	  return function (tasks) {
	    if (!Array.isArray(tasks)) {
	      tasks = [tasks];
	    }
	    return callNative(id, tasks, '-1');
	  };
	}
	
	Document.prototype.destroy = function () {
	  delete this.listener;
	  delete this.nodeMap;
	  delete instanceMap[this.id];
	};
	
	Document.prototype.open = function () {
	  this.listener.batched = false;
	};
	
	Document.prototype.close = function () {
	  this.listener.batched = true;
	};
	
	Document.prototype.createDocumentElement = function () {
	  var _this = this;
	
	  if (!this.documentElement) {
	    var el = new Element('document');
	    el.docId = this.id;
	    el.ownerDocument = this;
	    el.role = 'documentElement';
	    el.depth = 0;
	    el.ref = '_documentElement';
	    this.nodeMap._documentElement = el;
	    this.documentElement = el;
	    el.appendChild = function (node) {
	      appendBody(_this, node);
	    };
	    el.insertBefore = function (node, before) {
	      appendBody(_this, node, before);
	    };
	  }
	
	  return this.documentElement;
	};
	
	function appendBody(doc, node, before) {
	  var documentElement = doc.documentElement;
	
	
	  if (documentElement.pureChildren.length > 0 || node.parentNode) {
	    return;
	  }
	  var children = documentElement.children;
	  var beforeIndex = children.indexOf(before);
	  if (beforeIndex < 0) {
	    children.push(node);
	  } else {
	    children.splice(beforeIndex, 0, node);
	  }
	
	  if (node.nodeType === 1) {
	    if (node.role === 'body') {
	      node.docId = doc.id;
	      node.ownerDocument = doc;
	      node.parentNode = documentElement;
	    } else {
	      node.children.forEach(function (child) {
	        child.parentNode = node;
	      });
	      setBody(doc, node);
	      node.docId = doc.id;
	      node.ownerDocument = doc;
	      linkParent(node, documentElement);
	      delete doc.nodeMap[node.nodeId];
	    }
	    documentElement.pureChildren.push(node);
	    doc.listener.createBody(node);
	  } else {
	    node.parentNode = documentElement;
	    doc.nodeMap[node.ref] = node;
	  }
	}
	
	function setBody(doc, el) {
	  el.role = 'body';
	  el.depth = 1;
	  delete doc.nodeMap[el.nodeId];
	  el.ref = '_root';
	  doc.nodeMap._root = el;
	  doc.body = el;
	}
	
	Document.prototype.createBody = function (type, props) {
	  if (!this.body) {
	    var el = new Element(type, props);
	    setBody(this, el);
	  }
	
	  return this.body;
	};
	
	Document.prototype.createElement = function (tagName, props) {
	  return new Element(tagName, props);
	};
	
	Document.prototype.createComment = function (text) {
	  return new Comment(text);
	};
	
	Document.prototype.fireEvent = function (el, type, e, domChanges) {
	  if (!el) {
	    return;
	  }
	  e = e || {};
	  e.type = type;
	  e.target = el;
	  e.timestamp = Date.now();
	  if (domChanges) {
	    updateElement(el, domChanges);
	  }
	  return el.fireEvent(type, e);
	};
	
	Document.prototype.getRef = function (ref) {
	  return this.nodeMap[ref];
	};
	
	function updateElement(el, changes) {
	  var attrs = changes.attrs || {};
	  for (var name in attrs) {
	    el.setAttr(name, attrs[name], true);
	  }
	  var style = changes.style || {};
	  for (var _name in style) {
	    el.setStyle(_name, style[_name], true);
	  }
	}
	
	function Node() {
	  this.nodeId = (nextNodeRef++).toString();
	  this.ref = this.nodeId;
	  this.children = [];
	  this.pureChildren = [];
	  this.parentNode = null;
	  this.nextSibling = null;
	  this.previousSibling = null;
	}
	
	Node.prototype.destroy = function () {
	  var doc = instanceMap[this.docId];
	  if (doc) {
	    delete this.docId;
	    delete doc.nodeMap[this.nodeId];
	  }
	  this.children.forEach(function (child) {
	    child.destroy();
	  });
	};
	
	function Element() {
	  var type = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_TAG_NAME : arguments[0];
	  var props = arguments[1];
	
	  props = props || {};
	  this.nodeType = 1;
	  this.nodeId = (nextNodeRef++).toString();
	  this.ref = this.nodeId;
	  this.type = type;
	  this.attr = props.attr || {};
	  this.classStyle = props.classStyle || {};
	  this.style = props.style || {};
	  this.event = {};
	  this.children = [];
	  this.pureChildren = [];
	}
	
	Element.prototype = new Node();
	
	Element.prototype.appendChild = function (node) {
	  if (node.parentNode && node.parentNode !== this) {
	    return;
	  }
	  if (!node.parentNode) {
	    linkParent(node, this);
	    insertIndex(node, this.children, this.children.length, true);
	    if (this.docId) {
	      registerNode(this.docId, node);
	    }
	    if (node.nodeType === 1) {
	      insertIndex(node, this.pureChildren, this.pureChildren.length);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        return listener.addElement(node, this.ref, -1);
	      }
	    }
	  } else {
	    moveIndex(node, this.children, this.children.length, true);
	    if (node.nodeType === 1) {
	      var index = moveIndex(node, this.pureChildren, this.pureChildren.length);
	      if (this.docId && index >= 0) {
	        var _listener = instanceMap[this.docId].listener;
	        return _listener.moveElement(node.ref, this.ref, index);
	      }
	    }
	  }
	};
	
	Element.prototype.insertBefore = function (node, before) {
	  if (node.parentNode && node.parentNode !== this) {
	    return;
	  }
	  if (node === before || node.nextSibling === before) {
	    return;
	  }
	  if (!node.parentNode) {
	    linkParent(node, this);
	    insertIndex(node, this.children, this.children.indexOf(before), true);
	    if (this.docId) {
	      registerNode(this.docId, node);
	    }
	    if (node.nodeType === 1) {
	      var pureBefore = nextElement(before);
	      var index = insertIndex(node, this.pureChildren, pureBefore ? this.pureChildren.indexOf(pureBefore) : this.pureChildren.length);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        return listener.addElement(node, this.ref, index);
	      }
	    }
	  } else {
	    moveIndex(node, this.children, this.children.indexOf(before), true);
	    if (node.nodeType === 1) {
	      var _pureBefore = nextElement(before);
	      var _index = moveIndex(node, this.pureChildren, _pureBefore ? this.pureChildren.indexOf(_pureBefore) : this.pureChildren.length);
	      if (this.docId && _index >= 0) {
	        var _listener2 = instanceMap[this.docId].listener;
	        return _listener2.moveElement(node.ref, this.ref, _index);
	      }
	    }
	  }
	};
	
	Element.prototype.insertAfter = function (node, after) {
	  if (node.parentNode && node.parentNode !== this) {
	    return;
	  }
	  if (node === after || node.previousSibling === after) {
	    return;
	  }
	  if (!node.parentNode) {
	    linkParent(node, this);
	    insertIndex(node, this.children, this.children.indexOf(after) + 1, true);
	    if (this.docId) {
	      registerNode(this.docId, node);
	    }
	    if (node.nodeType === 1) {
	      var index = insertIndex(node, this.pureChildren, this.pureChildren.indexOf(previousElement(after)) + 1);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        return listener.addElement(node, this.ref, index);
	      }
	    }
	  } else {
	    moveIndex(node, this.children, this.children.indexOf(after) + 1, true);
	    if (node.nodeType === 1) {
	      var _index2 = moveIndex(node, this.pureChildren, this.pureChildren.indexOf(previousElement(after)) + 1);
	      if (this.docId && _index2 >= 0) {
	        var _listener3 = instanceMap[this.docId].listener;
	        return _listener3.moveElement(node.ref, this.ref, _index2);
	      }
	    }
	  }
	};
	
	Element.prototype.removeChild = function (node, preserved) {
	  if (node.parentNode) {
	    removeIndex(node, this.children, true);
	    if (node.nodeType === 1) {
	      removeIndex(node, this.pureChildren);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        listener.removeElement(node.ref);
	      }
	    }
	  }
	  if (!preserved) {
	    node.destroy();
	  }
	};
	
	Element.prototype.clear = function () {
	  var _this2 = this;
	
	  if (this.docId) {
	    (function () {
	      var listener = instanceMap[_this2.docId].listener;
	      _this2.pureChildren.forEach(function (node) {
	        listener.removeElement(node.ref);
	      });
	    })();
	  }
	  this.children.forEach(function (node) {
	    node.destroy();
	  });
	  this.children.length = 0;
	  this.pureChildren.length = 0;
	};
	
	function nextElement(node) {
	  while (node) {
	    if (node.nodeType === 1) {
	      return node;
	    }
	    node = node.nextSibling;
	  }
	}
	
	function previousElement(node) {
	  while (node) {
	    if (node.nodeType === 1) {
	      return node;
	    }
	    node = node.previousSibling;
	  }
	}
	
	function linkParent(node, parent) {
	  node.parentNode = parent;
	  if (parent.docId) {
	    node.docId = parent.docId;
	    node.ownerDocument = parent.ownerDocument;
	    node.ownerDocument.nodeMap[node.nodeId] = node;
	    node.depth = parent.depth + 1;
	  }
	  node.children.forEach(function (child) {
	    linkParent(child, node);
	  });
	}
	
	function registerNode(docId, node) {
	  var doc = instanceMap[docId];
	  doc.nodeMap[node.nodeId] = node;
	}
	
	function insertIndex(target, list, newIndex, changeSibling) {
	  if (newIndex < 0) {
	    newIndex = 0;
	  }
	  var before = list[newIndex - 1];
	  var after = list[newIndex];
	  list.splice(newIndex, 0, target);
	  if (changeSibling) {
	    before && (before.nextSibling = target);
	    target.previousSibling = before;
	    target.nextSibling = after;
	    after && (after.previousSibling = target);
	  }
	  return newIndex;
	}
	
	function moveIndex(target, list, newIndex, changeSibling) {
	  var index = list.indexOf(target);
	  if (index < 0) {
	    return -1;
	  }
	  if (changeSibling) {
	    var before = list[index - 1];
	    var after = list[index + 1];
	    before && (before.nextSibling = after);
	    after && (after.previousSibling = before);
	  }
	  list.splice(index, 1);
	  var newIndexAfter = newIndex;
	  if (index <= newIndex) {
	    newIndexAfter = newIndex - 1;
	  }
	  var beforeNew = list[newIndexAfter - 1];
	  var afterNew = list[newIndexAfter];
	  list.splice(newIndexAfter, 0, target);
	  if (changeSibling) {
	    beforeNew && (beforeNew.nextSibling = target);
	    target.previousSibling = beforeNew;
	    target.nextSibling = afterNew;
	    afterNew && (afterNew.previousSibling = target);
	  }
	  if (index === newIndexAfter) {
	    return -1;
	  }
	  return newIndex;
	}
	
	function removeIndex(target, list, changeSibling) {
	  var index = list.indexOf(target);
	  if (index < 0) {
	    return;
	  }
	  if (changeSibling) {
	    var before = list[index - 1];
	    var after = list[index + 1];
	    before && (before.nextSibling = after);
	    after && (after.previousSibling = before);
	  }
	  list.splice(index, 1);
	}
	
	Element.prototype.setAttr = function (key, value, silent) {
	  if (this.attr[key] === value) {
	    return;
	  }
	  this.attr[key] = value;
	  if (!silent && this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setAttr(this.ref, key, value);
	  }
	};
	
	Element.prototype.setStyle = function (key, value, silent) {
	  if (this.style[key] === value) {
	    return;
	  }
	  this.style[key] = value;
	  if (!silent && this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setStyle(this.ref, key, value);
	  }
	};
	
	Element.prototype.setClassStyle = function (classStyle) {
	  this.classStyle = classStyle;
	  if (this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setStyles(this.ref, this.toStyle());
	  }
	};
	
	Element.prototype.addEvent = function (type, handler) {
	  if (!this.event[type]) {
	    this.event[type] = handler;
	    if (this.docId) {
	      var listener = instanceMap[this.docId].listener;
	      listener.addEvent(this.ref, type);
	    }
	  }
	};
	
	Element.prototype.removeEvent = function (type) {
	  if (this.event[type]) {
	    delete this.event[type];
	    if (this.docId) {
	      var listener = instanceMap[this.docId].listener;
	      listener.removeEvent(this.ref, type);
	    }
	  }
	};
	
	Element.prototype.fireEvent = function (type, e) {
	  var handler = this.event[type];
	  if (handler) {
	    return handler.call(this, e);
	  }
	};
	
	Element.prototype.toStyle = function () {
	  return Object.assign({}, this.classStyle, this.style);
	};
	
	Element.prototype.toJSON = function () {
	  var result = {
	    ref: this.ref.toString(),
	    type: this.type,
	    attr: this.attr,
	    style: this.toStyle()
	  };
	  var event = Object.keys(this.event);
	  if (event.length) {
	    result.event = event;
	  }
	  if (this.pureChildren.length) {
	    result.children = this.pureChildren.map(function (child) {
	      return child.toJSON();
	    });
	  }
	  return result;
	};
	
	Element.prototype.toString = function () {
	  return '<' + this.type + ' attr=' + JSON.stringify(this.attr) + ' style=' + JSON.stringify(this.toStyle()) + '>' + this.pureChildren.map(function (child) {
	    return child.toString();
	  }).join('') + '</' + this.type + '>';
	};
	
	function Comment(value) {
	  this.nodeType = 8;
	  this.nodeId = (nextNodeRef++).toString();
	  this.ref = this.nodeId;
	  this.type = 'comment';
	  this.value = value;
	  this.children = [];
	  this.pureChildren = [];
	}
	
	Comment.prototype = new Node();
	
	Comment.prototype.toString = function () {
	  return '<!-- ' + this.value + ' -->';
	};

/***/ },
/* 99 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Listener;
	exports.createAction = createAction;
	function Listener(id, handler) {
	  this.id = id;
	  this.batched = false;
	  this.updates = [];
	  if (typeof handler === 'function') {
	    this.handler = handler;
	  }
	}
	
	Listener.prototype.createFinish = function (callback) {
	  var handler = this.handler;
	  return handler([createAction('createFinish', [])], callback);
	};
	
	Listener.prototype.updateFinish = function (callback) {
	  var handler = this.handler;
	  return handler([createAction('updateFinish', [])], callback);
	};
	
	Listener.prototype.refreshFinish = function (callback) {
	  var handler = this.handler;
	  return handler([createAction('refreshFinish', [])], callback);
	};
	
	Listener.prototype.createBody = function (element) {
	  var body = element.toJSON();
	  var children = body.children;
	  delete body.children;
	  var actions = [createAction('createBody', [body])];
	  if (children) {
	    actions.push.apply(actions, children.map(function (child) {
	      return createAction('addElement', [body.ref, child, -1]);
	    }));
	  }
	  return this.addActions(actions);
	};
	
	Listener.prototype.addElement = function (element, ref, index) {
	  if (!(index >= 0)) {
	    index = -1;
	  }
	  return this.addActions(createAction('addElement', [ref, element.toJSON(), index]));
	};
	
	Listener.prototype.removeElement = function (ref) {
	  if (Array.isArray(ref)) {
	    var actions = ref.map(function (r) {
	      return createAction('removeElement', [r]);
	    });
	    return this.addActions(actions);
	  }
	  return this.addActions(createAction('removeElement', [ref]));
	};
	
	Listener.prototype.moveElement = function (targetRef, parentRef, index) {
	  return this.addActions(createAction('moveElement', [targetRef, parentRef, index]));
	};
	
	Listener.prototype.setAttr = function (ref, key, value) {
	  var result = {};
	  result[key] = value;
	  return this.addActions(createAction('updateAttrs', [ref, result]));
	};
	
	Listener.prototype.setStyle = function (ref, key, value) {
	  var result = {};
	  result[key] = value;
	  return this.addActions(createAction('updateStyle', [ref, result]));
	};
	
	Listener.prototype.setStyles = function (ref, style) {
	  return this.addActions(createAction('updateStyle', [ref, style]));
	};
	
	Listener.prototype.addEvent = function (ref, type) {
	  return this.addActions(createAction('addEvent', [ref, type]));
	};
	
	Listener.prototype.removeEvent = function (ref, type) {
	  return this.addActions(createAction('removeEvent', [ref, type]));
	};
	
	Listener.prototype.handler = function (actions, cb) {
	  return cb && cb();
	};
	
	Listener.prototype.addActions = function (actions) {
	  var updates = this.updates;
	  var handler = this.handler;
	
	  if (!Array.isArray(actions)) {
	    actions = [actions];
	  }
	
	  if (this.batched) {
	    updates.push.apply(updates, actions);
	  } else {
	    return handler(actions);
	  }
	};
	
	function createAction(name, args) {
	  return { module: 'dom', method: name, args: args };
	}

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = {
		"name": "weex",
		"version": "0.4.0",
		"description": "A framework for building Mobile cross-platform UI",
		"license": "Apache-2.0",
		"repository": {
			"type": "git",
			"url": "git@github.com:alibaba/weex.git"
		},
		"homepage": "http://alibaba.github.io/weex/",
		"bugs": {
			"url": "https://github.com/alibaba/weex/issues"
		},
		"private": "true",
		"keywords": [
			"weex",
			"hybrid",
			"webcomponent",
			"appframework",
			"mvvm",
			"javascript",
			"webkit",
			"v8",
			"jscore",
			"html5",
			"android",
			"ios",
			"yunos"
		],
		"engines": {
			"node": ">=4"
		},
		"scripts": {
			"postinstall": "bash ./bin/install-hooks.sh",
			"build:config": "node build/config.frameworks.js",
			"build:browser": "webpack --config build/webpack.browser.config.js",
			"build:native": "webpack --config build/webpack.native.config.js",
			"build:examples": "webpack --config build/webpack.examples.config.js",
			"build:test": "webpack --config build/webpack.test.config.js",
			"dist:browser": "npm run build:browser && bash ./bin/dist-browser.sh",
			"dist": "npm run dist:browser",
			"dev:browser": "webpack --watch --config build/webpack.browser.config.js",
			"dev:native": "webpack --watch --config build/webpack.native.config.js",
			"dev:examples": "webpack --watch --config build/webpack.examples.config.js",
			"dev:test": "webpack --watch --config build/webpack.test.config.js",
			"build": "npm run build:native && npm run build:browser && npm run build:examples && npm run build:test",
			"lint": "eslint html5",
			"test:unit": "mocha --compilers js:babel-core/register html5/test/unit/*/*.js html5/test/unit/*/*/*.js",
			"test:cover": "babel-node node_modules/isparta/bin/isparta cover --report text node_modules/mocha/bin/_mocha -- --reporter dot html5/test/unit/*/*.js html5/test/unit/*/*/*.js",
			"test:e2e": "node html5/test/e2e/runner.js",
			"test": "npm run build:config && npm run lint && npm run test:cover",
			"serve": "serve ./ -p 12580",
			"clean:examples": "echo \"\\033[36;1m[Clean]\\033[0m \\033[33mexamples\\033[0m\" && rm -vrf examples/build/*",
			"clean:test": "echo \"\\033[36;1m[Clean]\\033[0m \\033[33mtest\\033[0m\" && rm -vrf test/build/*",
			"clean": "npm run clean:examples && npm run clean:test",
			"copy:js": "cp -vf ./dist/native.js ./android/sdk/assets/main.js",
			"copy:examples": "rm -rf ./android/playground/app/src/main/assets/* && cp -vrf ./examples/build/* ./android/playground/app/src/main/assets/",
			"copy": "npm run copy:js && npm run copy:examples"
		},
		"subversion": {
			"browser": "0.2.23",
			"framework": "0.14.7",
			"transformer": ">=0.1.5 <0.4"
		},
		"dependencies": {
			"animationjs": "^0.1.5",
			"carrousel": "^0.1.11",
			"core-js": "^2.4.0",
			"cubicbezier": "^0.1.1",
			"envd": "^0.1.1",
			"fixedsticky": "^0.1.0",
			"httpurl": "^0.1.1",
			"kountdown": "^0.1.2",
			"lazyimg": "^0.1.2",
			"lie": "^3.0.4",
			"modals": "^0.1.5",
			"scroll-to": "0.0.2",
			"semver": "^5.1.0",
			"transitionize": "0.0.3",
			"weex-components": "^0.1.3"
		},
		"devDependencies": {
			"babel-cli": "~6.4.5",
			"babel-loader": "^6.2.4",
			"babel-preset-es2015": "^6.9.0",
			"chai": "^3.5.0",
			"chromedriver": "^2.21.2",
			"cross-spawn": "^4.0.0",
			"css-loader": "^0.23.1",
			"eslint": "^2.11.1",
			"http-server": "^0.9.0",
			"isparta": "^4.0.0",
			"istanbul": "^0.4.3",
			"json-loader": "^0.5.4",
			"mocha": "^2.5.3",
			"nightwatch": "^0.9.4",
			"phantomjs-prebuilt": "^2.1.7",
			"selenium-server": "^2.53.0",
			"serve": "^1.4.0",
			"sinon": "^1.17.4",
			"sinon-chai": "^2.8.0",
			"style-loader": "^0.13.1",
			"uglify-js": "^2.6.4",
			"webpack": "^1.13.1",
			"weex-loader": "^0.2.0"
		}
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$ = $;
	exports.$el = $el;
	exports.$vm = $vm;
	exports.$renderThen = $renderThen;
	exports.$scrollTo = $scrollTo;
	exports.$transition = $transition;
	exports.$getConfig = $getConfig;
	exports.$sendHttp = $sendHttp;
	exports.$openURL = $openURL;
	exports.$setTitle = $setTitle;
	exports.$call = $call;
	
	var _util = __webpack_require__(80);
	
	var _ = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * ==========================================================
	 * common
	 * ==========================================================
	 */
	
	/**
	 * @deprecated use $vm instead
	 * find the vm by id
	 * Note: there is only one id in whole component
	 * @param  {string} id
	 * @return {Vm}
	 */
	function $(id) {
	  _.warn('Vm#$ is deprecated, please use Vm#$vm instead');
	  var info = this._ids[id];
	  if (info) {
	    return info.vm;
	  }
	}
	
	/**
	 * find the element by id
	 * Note: there is only one id in whole component
	 * @param  {string} id
	 * @return {Element}
	 */
	/**
	 * @fileOverview The api for invoking with "$" prefix
	 */
	function $el(id) {
	  var info = this._ids[id];
	  if (info) {
	    return info.el;
	  }
	}
	
	/**
	 * find the vm of the custom component by id
	 * Note: there is only one id in whole component
	 * @param  {string} id
	 * @return {Vm}
	 */
	function $vm(id) {
	  var info = this._ids[id];
	  if (info) {
	    return info.vm;
	  }
	}
	
	/**
	 * Fire when differ rendering finished
	 *
	 * @param  {Function} fn
	 */
	function $renderThen(fn) {
	  var app = this._app;
	  var differ = app.differ;
	  return differ.then(function () {
	    fn();
	  });
	}
	
	/**
	 * scroll an element specified by id into view,
	 * moreover specify a number of offset optionally
	 * @param  {string} id
	 * @param  {number} offset
	 */
	function $scrollTo(id, offset) {
	  _.warn('Vm#$scrollTo is deprecated, ' + 'please use "require(\'@weex-module/dom\')' + '.scrollTo(el, options)" instead');
	  var el = this.$el(id);
	  if (el) {
	    var dom = this._app.requireModule('dom');
	    dom.scrollToElement(el.ref, { offset: offset });
	  }
	}
	
	/**
	 * perform transition animation on an element specified by id
	 * @param  {string}   id
	 * @param  {object}   options
	 * @param  {object}   options.styles
	 * @param  {object}   options.duration(ms)
	 * @param  {object}   [options.timingFunction]
	 * @param  {object}   [options.delay=0(ms)]
	 * @param  {Function} callback
	 */
	function $transition(id, options, callback) {
	  var _this = this;
	
	  var el = this.$el(id);
	  if (el && options && options.styles) {
	    var animation = this._app.requireModule('animation');
	    animation.transition(el.ref, options, function () {
	      _this._setStyle(el, options.styles);
	      callback && callback.apply(undefined, arguments);
	    });
	  }
	}
	
	/**
	 * get some config
	 * @return {object} some config for app instance
	 * @property {string} bundleUrl
	 * @property {boolean} debug
	 * @property {object} env
	 * @property {string} env.weexVersion(ex. 1.0.0)
	 * @property {string} env.appName(ex. TB/TM)
	 * @property {string} env.appVersion(ex. 5.0.0)
	 * @property {string} env.platform(ex. iOS/Android)
	 * @property {string} env.osVersion(ex. 7.0.0)
	 * @property {string} env.deviceModel **native only**
	 * @property {number} env.[deviceWidth=750]
	 * @property {number} env.deviceHeight
	 */
	function $getConfig(callback) {
	  var config = _.extend({
	    env: global.WXEnvironment || {}
	  }, this._app.options);
	  if (_.typof(callback) === 'function') {
	    _.warn('the callback of Vm#$getConfig(callback) is deprecated, ' + 'this api now can directly RETURN config info.');
	    callback(config);
	  }
	  return config;
	}
	
	/**
	 * @deprecated
	 * request network via http protocol
	 * @param  {object}   params
	 * @param  {Function} callback
	 */
	function $sendHttp(params, callback) {
	  _.warn('Vm#$sendHttp is deprecated, ' + 'please use "require(\'@weex-module/stream\')' + '.sendHttp(params, callback)" instead');
	  var stream = this._app.requireModule('stream');
	  stream.sendHttp(params, callback);
	}
	
	/**
	 * @deprecated
	 * open a url
	 * @param  {string} url
	 */
	function $openURL(url) {
	  _.warn('Vm#$openURL is deprecated, ' + 'please use "require(\'@weex-module/event\')' + '.openURL(url)" instead');
	  var event = this._app.requireModule('event');
	  event.openURL(url);
	}
	
	/**
	 * @deprecated
	 * set a title for page
	 * @param  {string} title
	 */
	function $setTitle(title) {
	  _.warn('Vm#$setTitle is deprecated, ' + 'please use "require(\'@weex-module/pageInfo\')' + '.setTitle(title)" instead');
	  var pageInfo = this._app.requireModule('pageInfo');
	  pageInfo.setTitle(title);
	}
	
	/**
	 * @deprecated use "require('@weex-module/moduleName') instead"
	 * invoke a native method by specifing the name of module and method
	 * @param  {string} moduleName
	 * @param  {string} methodName
	 * @param  {...*} the rest arguments
	 */
	function $call(moduleName, methodName) {
	  _.warn('Vm#$call is deprecated, ' + 'please use "require(\'@weex-module/moduleName\')" instead');
	  var module = this._app.requireModule(moduleName);
	  if (module && module[methodName]) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }
	
	    module[methodName].apply(module, args);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 102 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$userTrack = $userTrack;
	exports.$sendMtop = $sendMtop;
	exports.$callWindvane = $callWindvane;
	exports.$setSpm = $setSpm;
	exports.$getUserInfo = $getUserInfo;
	exports.$login = $login;
	exports.$logout = $logout;
	/**
	 * @fileOverview The api for invoking with "$" prefix
	 */
	
	/**
	 * ==========================================================
	 * private for ali
	 * ==========================================================
	 */
	
	/**
	 * invoke user-track on Taobao Moblie
	 * @param {string} type：enter, click, expose
	 * @param {string} name
	 * @param {string} comName
	 * @param {object} param
	*/
	function $userTrack(type, name, comName, param) {
	  var userTrack = this._app.requireModule('userTrack');
	  userTrack.commit(type, name, comName, param);
	}
	
	/**
	 * request a restfull api via the mtop gateway
	 * @param  {object}   params
	 * @param  {Function} callback
	 */
	function $sendMtop(params, callback) {
	  /* istanbul ignore else */
	  if (typeof window === 'undefined') {
	    // in native，use windvane
	    var windvane = this._app.requireModule('windvane');
	    windvane.call({
	      class: 'MtopWVPlugin',
	      method: 'send',
	      data: params
	    }, callback);
	  } else {
	    // in web brwoser，use stream.sendMtop
	    var stream = this._app.requireModule('stream');
	    stream.sendMtop(params, callback);
	  }
	}
	
	/**
	 * request a native api via windvane protocol
	 * @param  {object}   params
	 * @param  {Function} callback
	 */
	function $callWindvane(params, callback) {
	  var windvane = this._app.requireModule('windvane');
	  windvane.call(params, callback);
	}
	
	/**
	 * set spm for the page
	 * @param  {string} a
	 * @param  {string} b
	 */
	function $setSpm(a, b) {
	  var pageInfo = this._app.requireModule('pageInfo');
	  pageInfo.setSpm(a, b);
	}
	
	/**
	 * get the information of the current logined user
	 * @param  {Function} callback
	 */
	function $getUserInfo(callback) {
	  var user = this._app.requireModule('user');
	  user.getUserInfo(callback);
	}
	
	/**
	 * perform login
	 * @param  {Function} callback
	 */
	function $login(callback) {
	  var user = this._app.requireModule('user');
	  user.login(callback);
	}
	
	/**
	 * perform logout
	 * @param  {Function} callback
	 */
	function $logout(callback) {
	  var user = this._app.requireModule('user');
	  user.logout(callback);
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGU5ZWRlNDEzMTc0YWRjNTI0ZDciLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvaHRtbDUvbmF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L3NoYXJlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9zaGFyZWQvb2JqZWN0QXNzaWduLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9zaGFyZWQvc2V0VGltZW91dC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9zaGFyZWQvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvaHRtbDUvc2hhcmVkL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvaHRtbDUvcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9ydW50aW1lL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9kZWZhdWx0L2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L2RlZmF1bHQvY29uZmlnLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L2RlZmF1bHQvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L2RlZmF1bHQvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9kZWZhdWx0L2FwcC9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9zZW12ZXIvNS4zLjAvc2VtdmVyL3NlbXZlci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvaHRtbDUvZGVmYXVsdC92bS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9kZWZhdWx0L2NvcmUvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvaHRtbDUvZGVmYXVsdC9jb3JlL3dhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvaHRtbDUvZGVmYXVsdC9jb3JlL2RlcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9kZWZhdWx0L2NvcmUvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvaHRtbDUvZGVmYXVsdC9jb3JlL2FycmF5LmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L2RlZmF1bHQvdm0vY29tcGlsZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvaHRtbDUvZGVmYXVsdC92bS9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvaHRtbDUvZGVmYXVsdC92bS9kb20taGVscGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L2RlZmF1bHQvdm0vZXZlbnRzLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L2RlZmF1bHQvYXBwL3JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L2RlZmF1bHQvYXBwL2Rvd25ncmFkZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9kZWZhdWx0L2FwcC9jdHJsLmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L2RlZmF1bHQvYXBwL2RpZmZlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS92ZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L3Zkb20vbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvcGFja2FnZS5qc29uIiwid2VicGFjazovLy8vVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L2RlZmF1bHQvYXBpL21ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2FwaS9tZXRob2RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVBOzs7QUFHQSxLQUFNLFVBQVUsb0JBQVEsR0FBUixDQUFoQjtlQUMwQixNO0tBQW5CLGUsV0FBQSxlOztBQUNQLGlCQUFnQixPQUFoQixFOzs7Ozs7Ozs7QUNQQTs7QUFDQTs7OztBQUNBOzs7O0tBRVEsTSx1QkFBQSxNO0tBQVEsVyx1QkFBQSxXOzs0QkFFTCxVO0FBQ1QsVUFBTyxVQUFQLElBQXFCLFlBQW1CO0FBQ3RDLFNBQU0sTUFBTSxrQkFBUSxVQUFSLHFDQUFaO0FBQ0EsU0FBSSxlQUFlLEtBQW5CLEVBQTBCO0FBQ3hCLGVBQVEsS0FBUixDQUFjLElBQUksUUFBSixFQUFkO0FBQ0Q7QUFDRCxZQUFPLEdBQVA7QUFDRCxJQU5EOzs7QUFERixNQUFLLElBQU0sVUFBWCx1QkFBa0M7QUFBQSxTQUF2QixVQUF1QjtBQVFqQzs7QUFFRCxRQUFPLE1BQVAsQ0FBYyxNQUFkLEVBQXNCO0FBQ3BCLHFCQUFrQixNQURFO0FBRXBCLDJCQUF3QjtBQUZKLEVBQXRCOztB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LFFBQXhCO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7QUFLTyxVQUFTLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0IsUUFBL0IsRUFBeUM7QUFDOUMsT0FBTSxXQUFXLEtBQUssSUFBTCxDQUFVLGFBQVYsQ0FBd0IsVUFBeEIsQ0FBakI7QUFDQSxZQUFTLElBQVQsQ0FBYyxNQUFkLEVBQXNCLFFBQXRCO0FBQ0Q7O0FBRUQ7Ozs7O0FBS08sVUFBUyxPQUFULENBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCO0FBQzVCLE9BQU0sV0FBVyxLQUFLLElBQUwsQ0FBVSxhQUFWLENBQXdCLFVBQXhCLENBQWpCO0FBQ0EsWUFBUyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0Q7O0FBRUQ7Ozs7QUFJTyxVQUFTLFlBQVQsQ0FBc0IsUUFBdEIsRUFBZ0M7QUFDckMsT0FBTSxPQUFPLEtBQUssSUFBTCxDQUFVLGFBQVYsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBLFFBQUssV0FBTCxDQUFpQixRQUFqQjtBQUNEOztBQUVEOzs7O0FBSU8sVUFBUyxNQUFULENBQWdCLFFBQWhCLEVBQTBCO0FBQy9CLE9BQU0sT0FBTyxLQUFLLElBQUwsQ0FBVSxhQUFWLENBQXdCLE1BQXhCLENBQWI7QUFDQSxRQUFLLEtBQUwsQ0FBVyxRQUFYO0FBQ0Q7O0FBRUQ7Ozs7QUFJTyxVQUFTLE9BQVQsQ0FBaUIsUUFBakIsRUFBMkI7QUFDaEMsT0FBTSxPQUFPLEtBQUssSUFBTCxDQUFVLGFBQVYsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBLFFBQUssTUFBTCxDQUFZLFFBQVo7QUFDRCxFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAwZTllZGU0MTMxNzRhZGM1MjRkN1xuICoqLyIsImltcG9ydCAnd2VleC9odG1sNS9uYXRpdmUnXG5cbi8qKlxuICogcmVnaXN0ZXIgbWV0aG9kc1xuICovXG5jb25zdCBtZXRob2RzID0gcmVxdWlyZSgnLi9saWIvYXBpL21ldGhvZHMnKVxuY29uc3Qge3JlZ2lzdGVyTWV0aG9kc30gPSBnbG9iYWxcbnJlZ2lzdGVyTWV0aG9kcyhtZXRob2RzKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5qc1xuICoqLyIsImltcG9ydCAnLi4vc2hhcmVkJ1xuaW1wb3J0IHJ1bnRpbWUgZnJvbSAnLi4vcnVudGltZSdcbmltcG9ydCB7IHN1YnZlcnNpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5cbmNvbnN0IHsgbmF0aXZlLCB0cmFuc2Zvcm1lciB9ID0gc3VidmVyc2lvblxuXG5mb3IgKGNvbnN0IG1ldGhvZE5hbWUgaW4gcnVudGltZSkge1xuICBnbG9iYWxbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNvbnN0IHJldCA9IHJ1bnRpbWVbbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgICBpZiAocmV0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IocmV0LnRvU3RyaW5nKCkpXG4gICAgfVxuICAgIHJldHVybiByZXRcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKGdsb2JhbCwge1xuICBmcmFtZXdvcmtWZXJzaW9uOiBuYXRpdmUsXG4gIG5lZWRUcmFuc2Zvcm1lclZlcnNpb246IHRyYW5zZm9ybWVyXG59KVxuXG4vKipcbiAqIHJlZ2lzdGVyIG1ldGhvZHNcbiAqL1xuY29uc3QgbWV0aG9kcyA9IHJlcXVpcmUoJy4uL2RlZmF1bHQvYXBpL21ldGhvZHMnKVxuY29uc3QgeyByZWdpc3Rlck1ldGhvZHMgfSA9IGdsb2JhbFxucmVnaXN0ZXJNZXRob2RzKG1ldGhvZHMpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L25hdGl2ZS9pbmRleC5qc1xuICoqLyIsImltcG9ydCAnLi9vYmplY3RBc3NpZ24nXG5pbXBvcnQgJy4vc2V0VGltZW91dCdcbmltcG9ydCAnLi9wcm9taXNlJ1xuaW1wb3J0ICcuL2NvbnNvbGUnXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L3NoYXJlZC9pbmRleC5qc1xuICoqLyIsImltcG9ydCAnY29yZS1qcy9mbi9vYmplY3QvYXNzaWduJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9zaGFyZWQvb2JqZWN0QXNzaWduLmpzXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24uanNcbiAqKi8iLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZSAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSlcbiAgICAsIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZih0YXJnZXQpcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYoZXhwb3J0c1trZXldICE9IG91dCloaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZihJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dClleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qc1xuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qc1xuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanNcbiAqKi8iLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzXG4gKiovIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qc1xuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4gKiovIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanNcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4gKiovIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBTUkMgICAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJylcbiAgLCBUT19TVFJJTkcgPSAndG9TdHJpbmcnXG4gICwgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXVxuICAsIFRQTCAgICAgICA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBrZXksIHZhbCwgc2FmZSl7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYoT1trZXldID09PSB2YWwpcmV0dXJuO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZihPID09PSBnbG9iYWwpe1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBpZighc2FmZSl7XG4gICAgICBkZWxldGUgT1trZXldO1xuICAgICAgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKE9ba2V5XSlPW2tleV0gPSB2YWw7XG4gICAgICBlbHNlIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH1cbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qc1xuICoqLyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzXG4gKiovIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL191aWQuanNcbiAqKi8iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbiAqKi8iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4gKiovIiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbiAqKi8iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qc1xuICoqLyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19jb2YuanNcbiAqKi8iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzXG4gKiovIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbiAqKi8iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuICoqLyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanNcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanNcbiAqKi8iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzXG4gKiovIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4gKiovIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4gKiovIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4gKiovIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4gKiovIiwiY29uc3Qge1xuICBzZXRUaW1lb3V0LCBzZXRUaW1lb3V0TmF0aXZlXG59ID0gZ2xvYmFsXG5cbmNvbnN0IE1TRyA9ICdVc2UgXCJnbG9iYWwuc2V0VGltZW91dFwiICBpcyB1bmV4cGVjdGVkLCAnICtcbiAgICAgICAgICAgICAgJ3BsZWFzZSB1c2UgcmVxdWlyZShcIkB3ZWV4LW1vZHVsZVwiKS5zZXRUaW1lb3V0IGluc3RlYWQuJ1xuXG4vLyBmaXggbm8gc2V0VGltZW91dCBvbiBBbmRyb2lkIFY4XG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIHNldFRpbWVvdXROYXRpdmUgPT09ICdmdW5jdGlvbicpIHtcbiAgY29uc3QgdGltZW91dE1hcCA9IHt9XG4gIGxldCB0aW1lb3V0SWQgPSAwXG4gIGdsb2JhbC5zZXRUaW1lb3V0ID0gKGNiLCB0aW1lKSA9PiB7XG4gICAgY29uc29sZS53YXJuKE1TRylcbiAgICB0aW1lb3V0TWFwWysrdGltZW91dElkXSA9IGNiXG4gICAgc2V0VGltZW91dE5hdGl2ZSh0aW1lb3V0SWQudG9TdHJpbmcoKSwgdGltZSlcbiAgfVxuICBnbG9iYWwuc2V0VGltZW91dENhbGxiYWNrID0gKGlkKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aW1lb3V0TWFwW2lkXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGltZW91dE1hcFtpZF0oKVxuICAgICAgZGVsZXRlIHRpbWVvdXRNYXBbaWRdXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L3NoYXJlZC9zZXRUaW1lb3V0LmpzXG4gKiovIiwiLy8gZml4IFByb21pc2UgUHJvYmxlbSBvbiBKU0NvbnRleHQgb2YgaU9TN344XG4vLyBAc2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzU4NjZcbmNvbnN0IHsgV1hFbnZpcm9ubWVudCB9ID0gZ2xvYmFsXG5pZiAoV1hFbnZpcm9ubWVudCAmJiBXWEVudmlyb25tZW50LnBsYXRmb3JtID09PSAnaU9TJyAmJlxuICAvXig3fDgpXFwuLy50ZXN0KFdYRW52aXJvbm1lbnQub3NWZXJzaW9uKSkge1xuICBnbG9iYWwuUHJvbWlzZSA9IG51bGxcbn1cbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UnKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9zaGFyZWQvcHJvbWlzZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCB0ZXN0ICAgID0ge307XG50ZXN0W3JlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpe1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xuICB9LCB0cnVlKTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanNcbiAqKi8iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qc1xuICoqLyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4gKiovIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4gKiovIiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanNcbiAqKi8iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuICoqLyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4gKiovIiwidmFyICRpdGVyYXRvcnMgICAgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpXG4gICwgcmVkZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgd2tzICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgSVRFUkFUT1IgICAgICA9IHdrcygnaXRlcmF0b3InKVxuICAsIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJylcbiAgLCBBcnJheVZhbHVlcyAgID0gSXRlcmF0b3JzLkFycmF5O1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGVcbiAgICAsIGtleTtcbiAgaWYocHJvdG8pe1xuICAgIGlmKCFwcm90b1tJVEVSQVRPUl0paGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZighcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgZm9yKGtleSBpbiAkaXRlcmF0b3JzKWlmKCFwcm90b1trZXldKXJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuICoqLyIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpXG4gICwgQXJyYXlQcm90byAgPSBBcnJheS5wcm90b3R5cGU7XG5pZihBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbiAqKi8iLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qc1xuICoqLyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4gKiovIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbiAqKi8iLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4gKiovIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbiAqKi8iLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2h0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzXG4gKiovIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanNcbiAqKi8iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYylyZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4gKiovIiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4gKiovIiwiY29uc3QgeyBjb25zb2xlLCBuYXRpdmVMb2cgfSA9IGdsb2JhbFxuY29uc3QgTEVWRUxTID0gWydlcnJvcicsICd3YXJuJywgJ2luZm8nLCAnbG9nJywgJ2RlYnVnJ11cbmNvbnN0IGxldmVsTWFwID0ge31cblxuZ2VuZXJhdGVMZXZlbE1hcCgpXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKFxuICB0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcgfHwgLy8gQW5kcm9pZFxuICAoZ2xvYmFsLldYRW52aXJvbm1lbnQgJiYgZ2xvYmFsLldYRW52aXJvbm1lbnQucGxhdGZvcm0gPT09ICdpT1MnKSAvLyBpT1Ncbikge1xuICBnbG9iYWwuY29uc29sZSA9IHtcbiAgICBkZWJ1ZzogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdkZWJ1ZycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0RFQlVHJykgfVxuICAgIH0sXG4gICAgbG9nOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ2xvZycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0xPRycpIH1cbiAgICB9LFxuICAgIGluZm86ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnaW5mbycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0lORk8nKSB9XG4gICAgfSxcbiAgICB3YXJuOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ3dhcm4nKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19XQVJOJykgfVxuICAgIH0sXG4gICAgZXJyb3I6ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnZXJyb3InKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19FUlJPUicpIH1cbiAgICB9XG4gIH1cbn1cbmVsc2UgeyAvLyBIVE1MNVxuICBjb25zdCB7IGRlYnVnLCBsb2csIGluZm8sIHdhcm4sIGVycm9yIH0gPSBjb25zb2xlXG4gIGNvbnNvbGUuX19vcmlfXyA9IHsgZGVidWcsIGxvZywgaW5mbywgd2FybiwgZXJyb3IgfVxuICBjb25zb2xlLmRlYnVnID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnZGVidWcnKSkgeyBjb25zb2xlLl9fb3JpX18uZGVidWcuYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUubG9nID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnbG9nJykpIHsgY29uc29sZS5fX29yaV9fLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbiAgY29uc29sZS5pbmZvID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnaW5mbycpKSB7IGNvbnNvbGUuX19vcmlfXy5pbmZvLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxuICBjb25zb2xlLndhcm4gPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCd3YXJuJykpIHsgY29uc29sZS5fX29yaV9fLndhcm4uYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUuZXJyb3IgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdlcnJvcicpKSB7IGNvbnNvbGUuX19vcmlfXy5lcnJvci5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVMZXZlbE1hcCAoKSB7XG4gIExFVkVMUy5mb3JFYWNoKGxldmVsID0+IHtcbiAgICBjb25zdCBsZXZlbEluZGV4ID0gTEVWRUxTLmluZGV4T2YobGV2ZWwpXG4gICAgbGV2ZWxNYXBbbGV2ZWxdID0ge31cbiAgICBMRVZFTFMuZm9yRWFjaCh0eXBlID0+IHtcbiAgICAgIGNvbnN0IHR5cGVJbmRleCA9IExFVkVMUy5pbmRleE9mKHR5cGUpXG4gICAgICBpZiAodHlwZUluZGV4IDw9IGxldmVsSW5kZXgpIHtcbiAgICAgICAgbGV2ZWxNYXBbbGV2ZWxdW3R5cGVdID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZSAodikge1xuICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXG4gIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdbb2JqZWN0IG9iamVjdF0nKSB7XG4gICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpXG4gIH1cbiAgZWxzZSB7XG4gICAgdiA9IFN0cmluZyh2KVxuICB9XG4gIHJldHVybiB2XG59XG5cbmZ1bmN0aW9uIGNoZWNrTGV2ZWwgKHR5cGUpIHtcbiAgY29uc3QgbG9nTGV2ZWwgPSAoZ2xvYmFsLldYRW52aXJvbm1lbnQgJiYgZ2xvYmFsLldYRW52aXJvbm1lbnQubG9nTGV2ZWwpIHx8ICdsb2cnXG4gIHJldHVybiBsZXZlbE1hcFtsb2dMZXZlbF0gJiYgbGV2ZWxNYXBbbG9nTGV2ZWxdW3R5cGVdXG59XG5cbmZ1bmN0aW9uIGZvcm1hdCAoYXJncykge1xuICByZXR1cm4gYXJncy5tYXAodiA9PiBub3JtYWxpemUodikpXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L3NoYXJlZC9jb25zb2xlLmpzXG4gKiovIiwiaW1wb3J0IGZyYW1ld29ya3MgZnJvbSAnLi9jb25maWcnXG5cbmltcG9ydCB7IERvY3VtZW50LCBFbGVtZW50LCBDb21tZW50IH0gZnJvbSAnLi4vdmRvbSdcblxuY29uc3QgY29uZmlnID0ge1xuICBEb2N1bWVudCwgRWxlbWVudCwgQ29tbWVudCxcbiAgc2VuZFRhc2tzICguLi5hcmdzKSB7XG4gICAgcmV0dXJuIGdsb2JhbC5jYWxsTmF0aXZlKC4uLmFyZ3MpXG4gIH1cbn1cblxuZm9yIChjb25zdCBuYW1lIGluIGZyYW1ld29ya3MpIHtcbiAgY29uc3QgZnJhbWV3b3JrID0gZnJhbWV3b3Jrc1tuYW1lXVxuICBmcmFtZXdvcmsuaW5pdChjb25maWcpXG59XG5cbmNvbnN0IHZlcnNpb25SZWdFeHAgPSAvXlxcL1xcLyAqKFxce1teXFx9XSpcXH0pICpcXHI/XFxuL1xuXG5mdW5jdGlvbiBjaGVja1ZlcnNpb24gKGNvZGUpIHtcbiAgbGV0IGluZm9cbiAgY29uc3QgcmVzdWx0ID0gdmVyc2lvblJlZ0V4cC5leGVjKGNvZGUpXG4gIGlmIChyZXN1bHQpIHtcbiAgICB0cnkge1xuICAgICAgaW5mbyA9IEpTT04ucGFyc2UocmVzdWx0WzFdKVxuICAgIH1cbiAgICBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gaW5mb1xufVxuXG5jb25zdCBpbnN0YW5jZU1hcCA9IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZSAoaWQsIGNvZGUsIGNvbmZpZywgZGF0YSkge1xuICBsZXQgaW5mbyA9IGluc3RhbmNlTWFwW2lkXVxuICBpZiAoIWluZm8pIHtcbiAgICBpbmZvID0gY2hlY2tWZXJzaW9uKGNvZGUpIHx8IHt9XG4gICAgaWYgKCFmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXSkge1xuICAgICAgaW5mby5mcmFtZXdvcmsgPSAnV2VleCdcbiAgICB9XG4gICAgaW5zdGFuY2VNYXBbaWRdID0gaW5mb1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fVxuICAgIGNvbmZpZy5idW5kbGVWZXJzaW9uID0gaW5mby52ZXJzaW9uXG4gICAgcmV0dXJuIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdLmNyZWF0ZUluc3RhbmNlKGlkLCBjb2RlLCBjb25maWcsIGRhdGEpXG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxufVxuXG5jb25zdCBtZXRob2RzID0ge1xuICBjcmVhdGVJbnN0YW5jZVxufVxuXG5mdW5jdGlvbiBnZW5Jbml0IChtZXRob2ROYW1lKSB7XG4gIG1ldGhvZHNbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiBmcmFtZXdvcmtzKSB7XG4gICAgICBjb25zdCBmcmFtZXdvcmsgPSBmcmFtZXdvcmtzW25hbWVdXG4gICAgICBpZiAoZnJhbWV3b3JrICYmIGZyYW1ld29ya1ttZXRob2ROYW1lXSkge1xuICAgICAgICBmcmFtZXdvcmtbbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuWydyZWdpc3RlckNvbXBvbmVudHMnLCAncmVnaXN0ZXJNb2R1bGVzJywgJ3JlZ2lzdGVyTWV0aG9kcyddLmZvckVhY2goZ2VuSW5pdClcblxuZnVuY3Rpb24gZ2VuSW5zdGFuY2UgKG1ldGhvZE5hbWUpIHtcbiAgbWV0aG9kc1ttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgY29uc3QgaWQgPSBhcmdzWzBdXG4gICAgY29uc3QgaW5mbyA9IGluc3RhbmNlTWFwW2lkXVxuICAgIGlmIChpbmZvICYmIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdKSB7XG4gICAgICByZXR1cm4gZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya11bbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxuICB9XG59XG5cblsnZGVzdHJveUluc3RhbmNlJywgJ3JlZnJlc2hJbnN0YW5jZScsICdjYWxsSlMnLCAnZ2V0Um9vdCddLmZvckVhY2goZ2VuSW5zdGFuY2UpXG5cbm1ldGhvZHMucmVjZWl2ZVRhc2tzID0gbWV0aG9kcy5jYWxsSlNcblxuZXhwb3J0IGRlZmF1bHQgbWV0aG9kc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9ydW50aW1lL2luZGV4LmpzXG4gKiovIiwiLy8gYnVpbHQgYnkgbnBtIHJ1biBidWlsZDpjb25maWdcblxuaW1wb3J0ICogYXMgV2VleCBmcm9tICcuLi9kZWZhdWx0J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFdlZXhcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvaHRtbDUvcnVudGltZS9jb25maWcuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgTWFpbiBlbnRyeSwgaW5zdGFuY2UgbWFuYWdlclxuICpcbiAqIC0gY3JlYXRlSW5zdGFuY2UoaW5zdGFuY2VJZCwgY29kZSwgb3B0aW9ucywgZGF0YSlcbiAqIC0gcmVmcmVzaEluc3RhbmNlKGluc3RhbmNlSWQsIGRhdGEpXG4gKiAtIGRlc3Ryb3lJbnN0YW5jZShpbnN0YW5jZUlkKVxuICogLSByZWdpc3RlckNvbXBvbmVudHMoY29tcG9uZW50cylcbiAqIC0gcmVnaXN0ZXJNb2R1bGVzKG1vZHVsZXMpXG4gKiAtIGdldFJvb3QoaW5zdGFuY2VJZClcbiAqIC0gaW5zdGFuY2VNYXBcbiAqIC0gY2FsbEpTKGluc3RhbmNlSWQsIHRhc2tzKVxuICogICAtIGZpcmVFdmVudChyZWYsIHR5cGUsIGRhdGEpXG4gKiAgIC0gY2FsbGJhY2soZnVuY0lkLCBkYXRhKVxuICovXG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnXG5pbXBvcnQgQXBwSW5zdGFuY2UgZnJvbSAnLi9hcHAnXG5pbXBvcnQgVm0gZnJvbSAnLi92bSdcblxuY29uc3Qge1xuICBuYXRpdmVDb21wb25lbnRNYXBcbn0gPSBjb25maWdcbmNvbnN0IGluc3RhbmNlTWFwID0ge31cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQgKGNmZykge1xuICBjb25maWcuRG9jdW1lbnQgPSBjZmcuRG9jdW1lbnRcbiAgY29uZmlnLkVsZW1lbnQgPSBjZmcuRWxlbWVudFxuICBjb25maWcuQ29tbWVudCA9IGNmZy5Db21tZW50XG4gIGNvbmZpZy5zZW5kVGFza3MgPSBjZmcuc2VuZFRhc2tzXG59XG5cbi8qKlxuICogY3JlYXRlIGEgV2VleCBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaW5zdGFuY2VJZFxuICogQHBhcmFtICB7c3RyaW5nfSBjb2RlXG4gKiBAcGFyYW0gIHtvYmplY3R9IFtvcHRpb25zXSBvcHRpb24gYEhBU19MT0dgIGVuYWJsZSBwcmludCBsb2dcbiAqIEBwYXJhbSAge29iamVjdH0gW2RhdGFdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZSAoaW5zdGFuY2VJZCwgY29kZSwgb3B0aW9ucywgZGF0YSkge1xuICBsZXQgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIGNvbmZpZy5kZWJ1ZyA9IG9wdGlvbnMuZGVidWdcblxuICBsZXQgcmVzdWx0XG4gIGlmICghaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZSA9IG5ldyBBcHBJbnN0YW5jZShpbnN0YW5jZUlkLCBvcHRpb25zKVxuICAgIGluc3RhbmNlTWFwW2luc3RhbmNlSWRdID0gaW5zdGFuY2VcbiAgICByZXN1bHQgPSBpbnN0YW5jZS5pbml0KGNvZGUsIGRhdGEpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpbnN0YW5jZUlkfVwiYClcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiByZWZyZXNoIGEgV2VleCBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaW5zdGFuY2VJZFxuICogQHBhcmFtICB7b2JqZWN0fSBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoSW5zdGFuY2UgKGluc3RhbmNlSWQsIGRhdGEpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICBsZXQgcmVzdWx0XG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJlc3VsdCA9IGluc3RhbmNlLnJlZnJlc2hEYXRhKGRhdGEpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpbnN0YW5jZUlkfVwiYClcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogZGVzdHJveSBhIFdlZXggaW5zdGFuY2VcbiAqIEBwYXJhbSAge3N0cmluZ30gaW5zdGFuY2VJZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveUluc3RhbmNlIChpbnN0YW5jZUlkKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2luc3RhbmNlSWR9XCJgKVxuICB9XG5cbiAgaW5zdGFuY2UuZGVzdHJveSgpXG4gIGRlbGV0ZSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICByZXR1cm4gaW5zdGFuY2VNYXBcbn1cblxuLyoqXG4gKiByZWdpc3RlciB0aGUgbmFtZSBvZiBlYWNoIG5hdGl2ZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge2FycmF5fSBjb21wb25lbnRzIGFycmF5IG9mIG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ29tcG9uZW50cyAoY29tcG9uZW50cykge1xuICBpZiAoQXJyYXkuaXNBcnJheShjb21wb25lbnRzKSkge1xuICAgIGNvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiByZWdpc3RlciAobmFtZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hdGl2ZUNvbXBvbmVudE1hcFtuYW1lXSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbmFtZS50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYXRpdmVDb21wb25lbnRNYXBbbmFtZS50eXBlXSA9IG5hbWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogcmVnaXN0ZXIgdGhlIG5hbWUgYW5kIG1ldGhvZHMgb2YgZWFjaCBtb2R1bGVcbiAqIEBwYXJhbSAge29iamVjdH0gbW9kdWxlcyBhIG9iamVjdCBvZiBtb2R1bGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1vZHVsZXMgKG1vZHVsZXMpIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnb2JqZWN0Jykge1xuICAgIFZtLnJlZ2lzdGVyTW9kdWxlcyhtb2R1bGVzKVxuICB9XG59XG5cbi8qKlxuICogcmVnaXN0ZXIgdGhlIG5hbWUgYW5kIG1ldGhvZHMgb2YgZWFjaCBhcGlcbiAqIEBwYXJhbSAge29iamVjdH0gYXBpcyBhIG9iamVjdCBvZiBhcGlzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1ldGhvZHMgKGFwaXMpIHtcbiAgaWYgKHR5cGVvZiBhcGlzID09PSAnb2JqZWN0Jykge1xuICAgIFZtLnJlZ2lzdGVyTWV0aG9kcyhhcGlzKVxuICB9XG59XG5cbi8qKlxuICogZ2V0IGEgd2hvbGUgZWxlbWVudCB0cmVlIG9mIGFuIGluc3RhbmNlXG4gKiBmb3IgZGVidWdnaW5nXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGluc3RhbmNlSWRcbiAqIEByZXR1cm4ge29iamVjdH0gYSB2aXJ0dWFsIGRvbSB0cmVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290IChpbnN0YW5jZUlkKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgbGV0IHJlc3VsdFxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXN1bHQgPSBpbnN0YW5jZS5nZXRSb290RWxlbWVudCgpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpbnN0YW5jZUlkfVwiYClcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGpzSGFuZGxlcnMgPSB7XG4gIGZpcmVFdmVudDogZnVuY3Rpb24gZmlyZUV2ZW50IChpbnN0YW5jZUlkLCByZWYsIHR5cGUsIGRhdGEsIGRvbUNoYW5nZXMpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2luc3RhbmNlSWRdXG4gICAgcmV0dXJuIGluc3RhbmNlLmZpcmVFdmVudChyZWYsIHR5cGUsIGRhdGEsIGRvbUNoYW5nZXMpXG4gIH0sXG5cbiAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrIChpbnN0YW5jZUlkLCBmdW5jSWQsIGRhdGEsIGlmTGFzdCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgICByZXR1cm4gaW5zdGFuY2UuY2FsbGJhY2soZnVuY0lkLCBkYXRhLCBpZkxhc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBhY2NlcHQgY2FsbHMgZnJvbSBuYXRpdmUgKGV2ZW50IG9yIGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaW5zdGFuY2VJZFxuICogQHBhcmFtICB7YXJyYXl9IHRhc2tzIGxpc3Qgd2l0aCBgbWV0aG9kYCBhbmQgYGFyZ3NgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxsSlMgKGluc3RhbmNlSWQsIHRhc2tzKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgaWYgKGluc3RhbmNlICYmIEFycmF5LmlzQXJyYXkodGFza3MpKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlciA9IGpzSGFuZGxlcnNbdGFzay5tZXRob2RdXG4gICAgICBjb25zdCBhcmdzID0gWy4uLnRhc2suYXJnc11cbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhcmdzLnVuc2hpZnQoaW5zdGFuY2VJZClcbiAgICAgICAgcmVzdWx0cy5wdXNoKGhhbmRsZXIoLi4uYXJncykpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2luc3RhbmNlSWR9XCIgb3IgdGFza3NgKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9kZWZhdWx0L2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYXRpdmVDb21wb25lbnRNYXA6IHtcbiAgICB0ZXh0OiB0cnVlLFxuICAgIGltYWdlOiB0cnVlLFxuICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICBzbGlkZXI6IHtcbiAgICAgIHR5cGU6ICdzbGlkZXInLFxuICAgICAgYXBwZW5kOiAndHJlZSdcbiAgICB9LFxuICAgIGNlbGw6IHtcbiAgICAgIHR5cGU6ICdjZWxsJyxcbiAgICAgIGFwcGVuZDogJ3RyZWUnXG4gICAgfVxuICB9LFxuICBjdXN0b21Db21wb25lbnRNYXA6IHt9LFxuICBkZWJ1ZzogZmFsc2Vcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvaHRtbDUvZGVmYXVsdC9jb25maWcuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFdlZXggaW5zdGFuY2UgY29uc3RydWN0b3IgJiBkZWZpbml0aW9uXG4gKi9cblxuaW1wb3J0IHsgZXh0ZW5kLCB0eXBvZiB9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgKiBhcyBidW5kbGUgZnJvbSAnLi9idW5kbGUnXG5pbXBvcnQgKiBhcyBjdHJsIGZyb20gJy4vY3RybCdcbmltcG9ydCBEaWZmZXIgZnJvbSAnLi9kaWZmZXInXG5cbmltcG9ydCByZW5kZXJlciBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgeyByZWdpc3RlckNvbXBvbmVudCwgcmVxdWlyZUNvbXBvbmVudCwgcmVxdWlyZU1vZHVsZSB9IGZyb20gJy4vcmVnaXN0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcEluc3RhbmNlIChpbnN0YW5jZUlkLCBvcHRpb25zKSB7XG4gIHRoaXMuaWQgPSBpbnN0YW5jZUlkXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgdGhpcy52bSA9IG51bGxcbiAgdGhpcy5jdXN0b21Db21wb25lbnRNYXAgPSB7fVxuICB0aGlzLmNhbGxiYWNrcyA9IHt9XG4gIHRoaXMuZG9jID0gbmV3IHJlbmRlcmVyLkRvY3VtZW50KFxuICAgIGluc3RhbmNlSWQsXG4gICAgdGhpcy5vcHRpb25zLmJ1bmRsZVVybFxuICApXG4gIHRoaXMuZGlmZmVyID0gbmV3IERpZmZlcihpbnN0YW5jZUlkKVxuICB0aGlzLnVpZCA9IDBcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplIChhcHAsIHYpIHtcbiAgY29uc3QgdHlwZSA9IHR5cG9mKHYpXG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICBjYXNlICdudWxsJzpcbiAgICAgIHJldHVybiAnJ1xuICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICByZXR1cm4gdi50b1N0cmluZygpXG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICByZXR1cm4gdi50b0lTT1N0cmluZygpXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKHYgaW5zdGFuY2VvZiByZW5kZXJlci5FbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB2LnJlZlxuICAgICAgfVxuICAgICAgcmV0dXJuIHZcbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICBhcHAuY2FsbGJhY2tzWysrYXBwLnVpZF0gPSB2XG4gICAgICByZXR1cm4gYXBwLnVpZC50b1N0cmluZygpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KVxuICB9XG59XG5cbkFwcEluc3RhbmNlLnByb3RvdHlwZS5jYWxsVGFza3MgPSBmdW5jdGlvbiAodGFza3MpIHtcbiAgaWYgKHR5cG9mKHRhc2tzKSAhPT0gJ2FycmF5Jykge1xuICAgIHRhc2tzID0gW3Rhc2tzXVxuICB9XG5cbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2suYXJncyA9IHRhc2suYXJncy5tYXAoYXJnID0+IG5vcm1hbGl6ZSh0aGlzLCBhcmcpKVxuICB9KVxuXG4gIHJldHVybiByZW5kZXJlci5zZW5kVGFza3ModGhpcy5pZCwgdGFza3MsICctMScpXG59XG5cbmV4dGVuZChBcHBJbnN0YW5jZS5wcm90b3R5cGUsIGJ1bmRsZSwgY3RybCwge1xuICByZWdpc3RlckNvbXBvbmVudCxcbiAgcmVxdWlyZUNvbXBvbmVudCxcbiAgcmVxdWlyZU1vZHVsZVxufSlcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9kZWZhdWx0L2FwcC9pbmRleC5qc1xuICoqLyIsIi8qIGdsb2JhbCBNdXRhdGlvbk9ic2VydmVyICovXG5cbi8vIC8gbGFuZy5qc1xuXG4vKipcbiAqIENoZWNrIGlmIGEgc3RyaW5nIHN0YXJ0cyB3aXRoICQgb3IgX1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzZXJ2ZWQgKHN0cikge1xuICBjb25zdCBjID0gKHN0ciArICcnKS5jaGFyQ29kZUF0KDApXG4gIHJldHVybiBjID09PSAweDI0IHx8IGMgPT09IDB4NUZcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBbZW51bWVyYWJsZV1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmIChvYmosIGtleSwgdmFsLCBlbnVtZXJhYmxlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIHZhbHVlOiB2YWwsXG4gICAgZW51bWVyYWJsZTogISFlbnVtZXJhYmxlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufVxuXG4vLyAvIGVudi5qc1xuXG4vLyBjYW4gd2UgdXNlIF9fcHJvdG9fXz9cbmV4cG9ydCBjb25zdCBoYXNQcm90byA9ICdfX3Byb3RvX18nIGluIHt9XG5cbi8vIEJyb3dzZXIgZW52aXJvbm1lbnQgc25pZmZpbmdcbmV4cG9ydCBjb25zdCBpbkJyb3dzZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwod2luZG93KSAhPT0gJ1tvYmplY3QgT2JqZWN0XSdcblxuLy8gZGV0ZWN0IGRldnRvb2xzXG5leHBvcnQgY29uc3QgZGV2dG9vbHMgPSBpbkJyb3dzZXIgJiYgd2luZG93Ll9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX19cblxuLy8gVUEgc25pZmZpbmcgZm9yIHdvcmtpbmcgYXJvdW5kIGJyb3dzZXItc3BlY2lmaWMgcXVpcmtzXG5jb25zdCBVQSA9IGluQnJvd3NlciAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpXG5jb25zdCBpc0lvcyA9IFVBICYmIC8oaXBob25lfGlwYWR8aXBvZHxpb3MpL2kudGVzdChVQSlcbmNvbnN0IGlzV2VjaGF0ID0gVUEgJiYgVUEuaW5kZXhPZignbWljcm9tZXNzZW5nZXInKSA+IDBcblxuLyoqXG4gKiBEZWZlciBhIHRhc2sgdG8gZXhlY3V0ZSBpdCBhc3luY2hyb25vdXNseS4gSWRlYWxseSB0aGlzXG4gKiBzaG91bGQgYmUgZXhlY3V0ZWQgYXMgYSBtaWNyb3Rhc2ssIHNvIHdlIGxldmVyYWdlXG4gKiBNdXRhdGlvbk9ic2VydmVyIGlmIGl0J3MgYXZhaWxhYmxlLCBhbmQgZmFsbGJhY2sgdG9cbiAqIHNldFRpbWVvdXQoMCkuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHhcbiAqL1xuXG5leHBvcnQgY29uc3QgbmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgY2FsbGJhY2tzID0gW11cbiAgbGV0IHBlbmRpbmcgPSBmYWxzZVxuICBsZXQgdGltZXJGdW5jXG4gIGZ1bmN0aW9uIG5leHRUaWNrSGFuZGxlciAoKSB7XG4gICAgcGVuZGluZyA9IGZhbHNlXG4gICAgY29uc3QgY29waWVzID0gY2FsbGJhY2tzLnNsaWNlKDApXG4gICAgY2FsbGJhY2tzID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvcGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29waWVzW2ldKClcbiAgICB9XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJyAmJiAhKGlzV2VjaGF0ICYmIGlzSW9zKSkge1xuICAgIGxldCBjb3VudGVyID0gMVxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobmV4dFRpY2tIYW5kbGVyKVxuICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY291bnRlcilcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRleHROb2RlLCB7XG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gICAgfSlcbiAgICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb3VudGVyID0gKGNvdW50ZXIgKyAxKSAlIDJcbiAgICAgIHRleHROb2RlLmRhdGEgPSBjb3VudGVyXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIC8vIHdlYnBhY2sgYXR0ZW1wdHMgdG8gaW5qZWN0IGEgc2hpbSBmb3Igc2V0SW1tZWRpYXRlXG4gICAgLy8gaWYgaXQgaXMgdXNlZCBhcyBhIGdsb2JhbCwgc28gd2UgaGF2ZSB0byB3b3JrIGFyb3VuZCB0aGF0IHRvXG4gICAgLy8gYXZvaWQgYnVuZGxpbmcgdW5uZWNlc3NhcnkgY29kZS5cbiAgICBjb25zdCBjb250ZXh0ID0gaW5Ccm93c2VyXG4gICAgICA/IHdpbmRvd1xuICAgICAgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHt9XG4gICAgdGltZXJGdW5jID0gY29udGV4dC5zZXRJbW1lZGlhdGUgfHwgc2V0VGltZW91dFxuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoY2IsIGN0eCkge1xuICAgIGNvbnN0IGZ1bmMgPSBjdHhcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBjYi5jYWxsKGN0eCkgfVxuICAgICAgOiBjYlxuICAgIGNhbGxiYWNrcy5wdXNoKGZ1bmMpXG4gICAgaWYgKHBlbmRpbmcpIHJldHVyblxuICAgIHBlbmRpbmcgPSB0cnVlXG4gICAgdGltZXJGdW5jKG5leHRUaWNrSGFuZGxlciwgMClcbiAgfVxufSkoKVxuXG5sZXQgX1NldFxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAodHlwZW9mIFNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgU2V0LnRvU3RyaW5nKCkubWF0Y2goL25hdGl2ZSBjb2RlLykpIHtcbiAgLy8gdXNlIG5hdGl2ZSBTZXQgd2hlbiBhdmFpbGFibGUuXG4gIF9TZXQgPSBTZXRcbn1cbmVsc2Uge1xuICAvLyBhIG5vbi1zdGFuZGFyZCBTZXQgcG9seWZpbGwgdGhhdCBvbmx5IHdvcmtzIHdpdGggcHJpbWl0aXZlIGtleXMuXG4gIF9TZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIH1cbiAgX1NldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiB0aGlzLnNldFtrZXldICE9PSB1bmRlZmluZWRcbiAgfVxuICBfU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdGhpcy5zZXRba2V5XSA9IDFcbiAgfVxuICBfU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgfVxufVxuXG5leHBvcnQgeyBfU2V0IH1cblxuLy8gLyBzaGFyZWRcblxuLyoqXG4gKiBSZW1vdmUgYW4gaXRlbSBmcm9tIGFuIGFycmF5XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0geyp9IGl0ZW1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlIChhcnIsIGl0ZW0pIHtcbiAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuZXhwb3J0IGZ1bmN0aW9uIGhhc093biAob2JqLCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVkIChmbikge1xuICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuIChzdHIpIHtcbiAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdXG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXG4gIH1cbn1cblxuLyoqXG4gKiBDYW1lbGl6ZSBhIGh5cGhlbi1kZWxtaXRlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmNvbnN0IGNhbWVsaXplUkUgPSAvLShcXHcpL2dcbmV4cG9ydCBjb25zdCBjYW1lbGl6ZSA9IGNhY2hlZChzdHIgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgdG9VcHBlcilcbn0pXG5cbmZ1bmN0aW9uIHRvVXBwZXIgKF8sIGMpIHtcbiAgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJ1xufVxuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmNvbnN0IGh5cGhlbmF0ZVJFID0gLyhbYS16XFxkXSkoW0EtWl0pL2dcbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgIC50b0xvd2VyQ2FzZSgpXG59KVxuXG4vKipcbiAqIFNpbXBsZSBiaW5kLCBmYXN0ZXIgdGhhbiBuYXRpdmVcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtPYmplY3R9IGN0eFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmQgKGZuLCBjdHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgY29uc3QgbCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICByZXR1cm4gbFxuICAgICAgPyBsID4gMVxuICAgICAgICA/IGZuLmFwcGx5KGN0eCwgYXJndW1lbnRzKVxuICAgICAgICA6IGZuLmNhbGwoY3R4LCBhKVxuICAgICAgOiBmbi5jYWxsKGN0eClcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gQXJyYXktbGlrZSBvYmplY3QgdG8gYSByZWFsIEFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXktbGlrZX0gbGlzdFxuICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydF0gLSBzdGFydCBpbmRleFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXkgKGxpc3QsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgMFxuICBsZXQgaSA9IGxpc3QubGVuZ3RoIC0gc3RhcnRcbiAgY29uc3QgcmV0ID0gbmV3IEFycmF5KGkpXG4gIHdoaWxlIChpLS0pIHtcbiAgICByZXRbaV0gPSBsaXN0W2kgKyBzdGFydF1cbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0b1xuICogQHBhcmFtIHtPYmplY3R9IGZyb21cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kICh0YXJnZXQsIC4uLnNyYykge1xuICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc3JjKVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGZpcnN0ID0gc3JjLnNoaWZ0KClcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmaXJzdCkge1xuICAgICAgdGFyZ2V0W2tleV0gPSBmaXJzdFtrZXldXG4gICAgfVxuICAgIGlmIChzcmMubGVuZ3RoKSB7XG4gICAgICBleHRlbmQodGFyZ2V0LCAuLi5zcmMpXG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXRcbn1cblxuLyoqXG4gKiBRdWljayBvYmplY3QgY2hlY2sgLSB0aGlzIGlzIHByaW1hcmlseSB1c2VkIHRvIHRlbGxcbiAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAqIGlzIGEgSlNPTi1jb21wbGlhbnQgdHlwZS5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcbmNvbnN0IE9CSkVDVF9TVFJJTkcgPSAnW29iamVjdCBPYmplY3RdJ1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG9iaikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSBPQkpFQ1RfU1RSSU5HXG59XG5cbi8qKlxuICogQXJyYXkgdHlwZSBjaGVjay5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXlcblxuLy8gLyBvdGhlclxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5ICh4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcgfHwgeCA9PT0gbnVsbCB8fCB0eXBlb2YgKHgpID09PSAnZnVuY3Rpb24nXG4gICAgPyAnJ1xuICAgIDogdHlwZW9mIHggPT09ICdvYmplY3QnXG4gICAgICA/IHggaW5zdGFuY2VvZiBSZWdFeHBcbiAgICAgICAgPyB4LnRvU3RyaW5nKClcbiAgICAgICAgOiB4IGluc3RhbmNlb2YgRGF0ZVxuICAgICAgICAgID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh4KSlcbiAgICAgICAgICA6IEpTT04uc3RyaW5naWZ5KHgpXG4gICAgICA6IHgudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwb2YgKHYpIHtcbiAgY29uc3QgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxuICByZXR1cm4gcy5zdWJzdHJpbmcoOCwgcy5sZW5ndGggLSAxKS50b0xvd2VyQ2FzZSgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemUgKHYpIHtcbiAgY29uc3QgdHlwZSA9IHR5cG9mKHYpXG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICBjYXNlICdudWxsJzpcbiAgICAgIHJldHVybiAnJ1xuICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICByZXR1cm4gdi50b1N0cmluZygpXG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICByZXR1cm4gdi50b0lTT1N0cmluZygpXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICBjYXNlICdvYmplY3QnOlxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIHJldHVybiB2XG4gIH1cbn1cblxuY29uc3QgZW5hYmxlTG9nID0gdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5JU19QUk9EVUNUICE9PSB0cnVlXG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXJyb3IgKC4uLmFyZ3MpIHtcbiAgZW5hYmxlTG9nICYmIGNvbnNvbGUuZXJyb3IgJiYgY29uc29sZS5lcnJvcignW0pTIEZyYW1ld29ya10nLCAuLi5hcmdzKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhcm4gKC4uLmFyZ3MpIHtcbiAgZW5hYmxlTG9nICYmIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdJywgLi4uYXJncylcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gbXNnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmZvICguLi5hcmdzKSB7XG4gIGVuYWJsZUxvZyAmJiBjb25zb2xlLmluZm8gJiYgY29uc29sZS5pbmZvKCdbSlMgRnJhbWV3b3JrXScsIC4uLmFyZ3MpXG59XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGVidWcgKC4uLmFyZ3MpIHtcbiAgZW5hYmxlTG9nICYmIGNvbnNvbGUuZGVidWcgJiYgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10nLCAuLi5hcmdzKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvZyAoLi4uYXJncykge1xuICBlbmFibGVMb2cgJiYgY29uc29sZS5sb2cgJiYgY29uc29sZS5sb2coJ1tKUyBGcmFtZXdvcmtdJywgLi4uYXJncylcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvaHRtbDUvZGVmYXVsdC91dGlsL2luZGV4LmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBhcGkgdGhhdCBpbnZva2VkIGJ5IGpzIGJ1bmRsZSBjb2RlXG4gKlxuICogLSBkZWZpbmUobmFtZSwgZmFjdG9yeSk6IGRlZmluZSBhIG5ldyBjb21wb3NlZCBjb21wb25lbnQgdHlwZVxuICogLSBib290c3RyYXAodHlwZSwgY29uZmlnLCBkYXRhKTogcmVxdWlyZSBhIGNlcnRhaW4gdHlwZSAmXG4gKiAgICAgICAgIHJlbmRlciB3aXRoIChvcHRpb25hbCkgZGF0YVxuICpcbiAqIGRlcHJlY2F0ZWQ6XG4gKiAtIHJlZ2lzdGVyKHR5cGUsIG9wdGlvbnMpOiByZWdpc3RlciBhIG5ldyBjb21wb3NlZCBjb21wb25lbnQgdHlwZVxuICogLSByZW5kZXIodHlwZSwgZGF0YSk6IHJlbmRlciBieSBhIGNlcnRhaW4gdHlwZSB3aXRoIChvcHRpb25hbCkgZGF0YVxuICogLSByZXF1aXJlKHR5cGUpKGRhdGEpOiByZXF1aXJlIGEgdHlwZSB0aGVuIHJlbmRlciB3aXRoIGRhdGFcbiAqL1xuXG5pbXBvcnQgc2VtdmVyIGZyb20gJ3NlbXZlcidcbmltcG9ydCAqIGFzIF8gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCBWbSBmcm9tICcuLi92bSdcbmltcG9ydCAqIGFzIGRvd25ncmFkZSBmcm9tICcuL2Rvd25ncmFkZSdcblxuY29uc3QgV0VFWF9DT01QT05FTlRfUkVHID0gL15Ad2VleC1jb21wb25lbnRcXC8vXG5jb25zdCBXRUVYX01PRFVMRV9SRUcgPSAvXkB3ZWV4LW1vZHVsZVxcLy9cbmNvbnN0IE5PUk1BTF9NT0RVTEVfUkVHID0gL15cXC57MSwyfVxcLy9cbmNvbnN0IEpTX1NVUkZJWF9SRUcgPSAvXFwuanMkL1xuXG5jb25zdCBpc1dlZXhDb21wb25lbnQgPSBuYW1lID0+ICEhbmFtZS5tYXRjaChXRUVYX0NPTVBPTkVOVF9SRUcpXG5jb25zdCBpc1dlZXhNb2R1bGUgPSBuYW1lID0+ICEhbmFtZS5tYXRjaChXRUVYX01PRFVMRV9SRUcpXG5jb25zdCBpc05vcm1hbE1vZHVsZSA9IG5hbWUgPT4gISFuYW1lLm1hdGNoKE5PUk1BTF9NT0RVTEVfUkVHKVxuY29uc3QgaXNOcG1Nb2R1bGUgPSBuYW1lID0+ICFpc1dlZXhDb21wb25lbnQobmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc1dlZXhNb2R1bGUobmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc05vcm1hbE1vZHVsZShuYW1lKVxuXG5mdW5jdGlvbiByZW1vdmVXZWV4UHJlZml4IChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFdFRVhfQ09NUE9ORU5UX1JFRywgJycpXG4gICAgICAgICAgLnJlcGxhY2UoV0VFWF9NT0RVTEVfUkVHLCAnJylcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSlNTdXJmaXggKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoSlNfU1VSRklYX1JFRywgJycpXG59XG5cbmxldCBjb21tb25Nb2R1bGVzID0ge31cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ29tbW9uTW9kdWxlcyAoKSB7XG4gIGNvbW1vbk1vZHVsZXMgPSB7fVxufVxuXG4vLyBkZWZpbmUobmFtZSwgZmFjdG9yeSkgZm9yIHByaW1hcnkgdXNhZ2Vcbi8vIG9yXG4vLyBkZWZpbmUobmFtZSwgZGVwcywgZmFjdG9yeSkgZm9yIGNvbXBhdGliaWxpdHlcbi8vIE5vdGljZTogRE8gTk9UIHVzZSBmdW5jdGlvbiBkZWZpbmUoKSB7fSxcbi8vIGl0IHdpbGwgY2F1c2UgZXJyb3IgYWZ0ZXIgYnVpbGRlZCBieSB3ZWJwYWNrXG5leHBvcnQgY29uc3QgZGVmaW5lID0gZnVuY3Rpb24gKG5hbWUsIGRlcHMsIGZhY3RvcnkpIHtcbiAgXy5kZWJ1ZygnZGVmaW5lIGEgY29tcG9uZW50JywgbmFtZSlcblxuICBpZiAoXy50eXBvZihkZXBzKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZhY3RvcnkgPSBkZXBzXG4gICAgZGVwcyA9IFtdXG4gIH1cblxuICBjb25zdCBfcmVxdWlyZSA9IChuYW1lKSA9PiB7XG4gICAgbGV0IGNsZWFuTmFtZVxuXG4gICAgaWYgKGlzV2VleENvbXBvbmVudChuYW1lKSkge1xuICAgICAgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICAgICAgcmV0dXJuIHRoaXMucmVxdWlyZUNvbXBvbmVudChjbGVhbk5hbWUpXG4gICAgfVxuICAgIGlmIChpc1dlZXhNb2R1bGUobmFtZSkpIHtcbiAgICAgIGNsZWFuTmFtZSA9IHJlbW92ZVdlZXhQcmVmaXgobmFtZSlcbiAgICAgIHJldHVybiB0aGlzLnJlcXVpcmVNb2R1bGUoY2xlYW5OYW1lKVxuICAgIH1cbiAgICBpZiAoaXNOb3JtYWxNb2R1bGUobmFtZSkpIHtcbiAgICAgIGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG4gICAgICByZXR1cm4gY29tbW9uTW9kdWxlc1tuYW1lXVxuICAgIH1cbiAgICBpZiAoaXNOcG1Nb2R1bGUobmFtZSkpIHtcbiAgICAgIGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG4gICAgICByZXR1cm4gY29tbW9uTW9kdWxlc1tuYW1lXVxuICAgIH1cbiAgfVxuICBjb25zdCBfbW9kdWxlID0geyBleHBvcnRzOiB7fX1cblxuICBsZXQgY2xlYW5OYW1lXG4gIGlmIChpc1dlZXhDb21wb25lbnQobmFtZSkpIHtcbiAgICBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG5cbiAgICBmYWN0b3J5KF9yZXF1aXJlLCBfbW9kdWxlLmV4cG9ydHMsIF9tb2R1bGUpXG5cbiAgICB0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KGNsZWFuTmFtZSwgX21vZHVsZS5leHBvcnRzKVxuICB9XG4gIGVsc2UgaWYgKGlzV2VleE1vZHVsZShuYW1lKSkge1xuICAgIGNsZWFuTmFtZSA9IHJlbW92ZVdlZXhQcmVmaXgobmFtZSlcblxuICAgIGZhY3RvcnkoX3JlcXVpcmUsIF9tb2R1bGUuZXhwb3J0cywgX21vZHVsZSlcblxuICAgIFZtLnJlZ2lzdGVyTW9kdWxlcyh7XG4gICAgICBbY2xlYW5OYW1lXTogX21vZHVsZS5leHBvcnRzXG4gICAgfSlcbiAgfVxuICBlbHNlIGlmIChpc05vcm1hbE1vZHVsZShuYW1lKSkge1xuICAgIGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG5cbiAgICBmYWN0b3J5KF9yZXF1aXJlLCBfbW9kdWxlLmV4cG9ydHMsIF9tb2R1bGUpXG5cbiAgICBjb21tb25Nb2R1bGVzW2NsZWFuTmFtZV0gPSBfbW9kdWxlLmV4cG9ydHNcbiAgfVxuICBlbHNlIGlmIChpc05wbU1vZHVsZShuYW1lKSkge1xuICAgIGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG5cbiAgICBmYWN0b3J5KF9yZXF1aXJlLCBfbW9kdWxlLmV4cG9ydHMsIF9tb2R1bGUpXG5cbiAgICBjb25zdCBleHBvcnRzID0gX21vZHVsZS5leHBvcnRzXG4gICAgaWYgKGV4cG9ydHMudGVtcGxhdGUgfHxcbiAgICAgICAgZXhwb3J0cy5zdHlsZSB8fFxuICAgICAgICBleHBvcnRzLm1ldGhvZHMpIHtcbiAgICAgIC8vIGRvd25ncmFkZSB0byBvbGQgZGVmaW5lIG1ldGhvZCAoZGVmaW5lKCdjb21wb25lbnROYW1lJywgZmFjdG9yeSkpXG4gICAgICAvLyB0aGUgZXhwb3J0cyBjb250YWluIG9uZSBrZXkgb2YgdGVtcGxhdGUsIHN0eWxlIG9yIG1ldGhvZHNcbiAgICAgIC8vIGJ1dCBpdCBoYXMgcmlzayEhIVxuICAgICAgdGhpcy5yZWdpc3RlckNvbXBvbmVudChjbGVhbk5hbWUsIGV4cG9ydHMpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tbW9uTW9kdWxlc1tjbGVhbk5hbWVdID0gX21vZHVsZS5leHBvcnRzXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib290c3RyYXAgKG5hbWUsIGNvbmZpZywgZGF0YSkge1xuICBfLmRlYnVnKGBib290c3RyYXAgZm9yICR7bmFtZX1gKVxuXG4gIGxldCBjbGVhbk5hbWVcblxuICBpZiAoaXNXZWV4Q29tcG9uZW50KG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICB9XG4gIGVsc2UgaWYgKGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICAvLyBjaGVjayBpZiBkZWZpbmUgYnkgb2xkICdkZWZpbmUnIG1ldGhvZFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghdGhpcy5jdXN0b21Db21wb25lbnRNYXBbY2xlYW5OYW1lXSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihgSXQncyBub3QgYSBjb21wb25lbnQ6ICR7bmFtZX1gKVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKGBXcm9uZyBjb21wb25lbnQgbmFtZTogJHtuYW1lfWApXG4gIH1cblxuICBjb25maWcgPSBfLmlzUGxhaW5PYmplY3QoY29uZmlnKSA/IGNvbmZpZyA6IHt9XG5cbiAgaWYgKHR5cGVvZiBjb25maWcudHJhbnNmb3JtZXJWZXJzaW9uID09PSAnc3RyaW5nJyAmJlxuICAgIHR5cGVvZiBnbG9iYWwubmVlZFRyYW5zZm9ybWVyVmVyc2lvbiA9PT0gJ3N0cmluZycgJiZcbiAgICAhc2VtdmVyLnNhdGlzZmllcyhjb25maWcudHJhbnNmb3JtZXJWZXJzaW9uLFxuICAgICAgZ2xvYmFsLm5lZWRUcmFuc2Zvcm1lclZlcnNpb24pKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgSlMgQnVuZGxlIHZlcnNpb246ICR7Y29uZmlnLnRyYW5zZm9ybWVyVmVyc2lvbn0gYCArXG4gICAgICBgbm90IGNvbXBhdGlibGUgd2l0aCAke2dsb2JhbC5uZWVkVHJhbnNmb3JtZXJWZXJzaW9ufWApXG4gIH1cblxuICBjb25zdCBfY2hlY2tEb3duZ3JhZGUgPSBkb3duZ3JhZGUuY2hlY2soY29uZmlnLmRvd25ncmFkZSlcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChfY2hlY2tEb3duZ3JhZGUuaXNEb3duZ3JhZGUpIHtcbiAgICB0aGlzLmNhbGxUYXNrcyhbe1xuICAgICAgbW9kdWxlOiAnaW5zdGFuY2VXcmFwJyxcbiAgICAgIG1ldGhvZDogJ2Vycm9yJyxcbiAgICAgIGFyZ3M6IFtcbiAgICAgICAgX2NoZWNrRG93bmdyYWRlLmVycm9yVHlwZSxcbiAgICAgICAgX2NoZWNrRG93bmdyYWRlLmNvZGUsXG4gICAgICAgIF9jaGVja0Rvd25ncmFkZS5lcnJvck1lc3NhZ2VcbiAgICAgIF1cbiAgICB9XSlcbiAgICByZXR1cm4gbmV3IEVycm9yKGBEb3duZ3JhZGVbJHtfY2hlY2tEb3duZ3JhZGUuY29kZX1dOiAke19jaGVja0Rvd25ncmFkZS5lcnJvck1lc3NhZ2V9YClcbiAgfVxuXG4gIHRoaXMudm0gPSBuZXcgVm0oY2xlYW5OYW1lLCBudWxsLCB7IF9hcHA6IHRoaXMgfSwgbnVsbCwgZGF0YSlcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXIgKHR5cGUsIG9wdGlvbnMpIHtcbiAgXy53YXJuKCdSZWdpc3RlciBpcyBkZXByZWNhdGVkLCBwbGVhc2UgaW5zdGFsbCBsYXN0ZXN0IHRyYW5zZm9ybWVyLicpXG4gIHRoaXMucmVnaXN0ZXJDb21wb25lbnQodHlwZSwgb3B0aW9ucylcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyICh0eXBlLCBkYXRhKSB7XG4gIF8ud2FybignUmVuZGVyIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSBpbnN0YWxsIGxhc3Rlc3QgdHJhbnNmb3JtZXIuJylcbiAgcmV0dXJuIHRoaXMuYm9vdHN0cmFwKHR5cGUsIHt9LCBkYXRhKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlICh0eXBlKSB7XG4gIF8ud2FybignUmVxdWlyZSBpcyBkZXByZWNhdGVkLCBwbGVhc2UgaW5zdGFsbCBsYXN0ZXN0IHRyYW5zZm9ybWVyLicpXG4gIHJldHVybiAoZGF0YSkgPT4ge1xuICAgIHJldHVybiB0aGlzLmJvb3RzdHJhcCh0eXBlLCB7fSwgZGF0YSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9kZWZhdWx0L2FwcC9idW5kbGUuanNcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBTZW1WZXI7XG5cbi8vIFRoZSBkZWJ1ZyBmdW5jdGlvbiBpcyBleGNsdWRlZCBlbnRpcmVseSBmcm9tIHRoZSBtaW5pZmllZCB2ZXJzaW9uLlxuLyogbm9taW4gKi8gdmFyIGRlYnVnO1xuLyogbm9taW4gKi8gaWYgKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JyAmJlxuICAgIC8qIG5vbWluICovIHByb2Nlc3MuZW52ICYmXG4gICAgLyogbm9taW4gKi8gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyAmJlxuICAgIC8qIG5vbWluICovIC9cXGJzZW12ZXJcXGIvaS50ZXN0KHByb2Nlc3MuZW52Lk5PREVfREVCVUcpKVxuICAvKiBub21pbiAqLyBkZWJ1ZyA9IGZ1bmN0aW9uKCkge1xuICAgIC8qIG5vbWluICovIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAvKiBub21pbiAqLyBhcmdzLnVuc2hpZnQoJ1NFTVZFUicpO1xuICAgIC8qIG5vbWluICovIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgIC8qIG5vbWluICovIH07XG4vKiBub21pbiAqLyBlbHNlXG4gIC8qIG5vbWluICovIGRlYnVnID0gZnVuY3Rpb24oKSB7fTtcblxuLy8gTm90ZTogdGhpcyBpcyB0aGUgc2VtdmVyLm9yZyB2ZXJzaW9uIG9mIHRoZSBzcGVjIHRoYXQgaXQgaW1wbGVtZW50c1xuLy8gTm90IG5lY2Vzc2FyaWx5IHRoZSBwYWNrYWdlIHZlcnNpb24gb2YgdGhpcyBjb2RlLlxuZXhwb3J0cy5TRU1WRVJfU1BFQ19WRVJTSU9OID0gJzIuMC4wJztcblxudmFyIE1BWF9MRU5HVEggPSAyNTY7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8vIFRoZSBhY3R1YWwgcmVnZXhwcyBnbyBvbiBleHBvcnRzLnJlXG52YXIgcmUgPSBleHBvcnRzLnJlID0gW107XG52YXIgc3JjID0gZXhwb3J0cy5zcmMgPSBbXTtcbnZhciBSID0gMDtcblxuLy8gVGhlIGZvbGxvd2luZyBSZWd1bGFyIEV4cHJlc3Npb25zIGNhbiBiZSB1c2VkIGZvciB0b2tlbml6aW5nLFxuLy8gdmFsaWRhdGluZywgYW5kIHBhcnNpbmcgU2VtVmVyIHZlcnNpb24gc3RyaW5ncy5cblxuLy8gIyMgTnVtZXJpYyBJZGVudGlmaWVyXG4vLyBBIHNpbmdsZSBgMGAsIG9yIGEgbm9uLXplcm8gZGlnaXQgZm9sbG93ZWQgYnkgemVybyBvciBtb3JlIGRpZ2l0cy5cblxudmFyIE5VTUVSSUNJREVOVElGSUVSID0gUisrO1xuc3JjW05VTUVSSUNJREVOVElGSUVSXSA9ICcwfFsxLTldXFxcXGQqJztcbnZhciBOVU1FUklDSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdID0gJ1swLTldKyc7XG5cblxuLy8gIyMgTm9uLW51bWVyaWMgSWRlbnRpZmllclxuLy8gWmVybyBvciBtb3JlIGRpZ2l0cywgZm9sbG93ZWQgYnkgYSBsZXR0ZXIgb3IgaHlwaGVuLCBhbmQgdGhlbiB6ZXJvIG9yXG4vLyBtb3JlIGxldHRlcnMsIGRpZ2l0cywgb3IgaHlwaGVucy5cblxudmFyIE5PTk5VTUVSSUNJREVOVElGSUVSID0gUisrO1xuc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSA9ICdcXFxcZCpbYS16QS1aLV1bYS16QS1aMC05LV0qJztcblxuXG4vLyAjIyBNYWluIFZlcnNpb25cbi8vIFRocmVlIGRvdC1zZXBhcmF0ZWQgbnVtZXJpYyBpZGVudGlmaWVycy5cblxudmFyIE1BSU5WRVJTSU9OID0gUisrO1xuc3JjW01BSU5WRVJTSU9OXSA9ICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG52YXIgTUFJTlZFUlNJT05MT09TRSA9IFIrKztcbnNyY1tNQUlOVkVSU0lPTkxPT1NFXSA9ICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpJztcblxuLy8gIyMgUHJlLXJlbGVhc2UgVmVyc2lvbiBJZGVudGlmaWVyXG4vLyBBIG51bWVyaWMgaWRlbnRpZmllciwgb3IgYSBub24tbnVtZXJpYyBpZGVudGlmaWVyLlxuXG52YXIgUFJFUkVMRUFTRUlERU5USUZJRVIgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUlERU5USUZJRVJdID0gJyg/OicgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfCcgKyBzcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG52YXIgUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSA9ICcoPzonICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd8JyArIHNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cblxuLy8gIyMgUHJlLXJlbGVhc2UgVmVyc2lvblxuLy8gSHlwaGVuLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBkb3Qtc2VwYXJhdGVkIHByZS1yZWxlYXNlIHZlcnNpb25cbi8vIGlkZW50aWZpZXJzLlxuXG52YXIgUFJFUkVMRUFTRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFXSA9ICcoPzotKCcgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJdICtcbiAgICAgICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJdICsgJykqKSknO1xuXG52YXIgUFJFUkVMRUFTRUxPT1NFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VMT09TRV0gPSAnKD86LT8oJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSArXG4gICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gKyAnKSopKSc7XG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhIElkZW50aWZpZXJcbi8vIEFueSBjb21iaW5hdGlvbiBvZiBkaWdpdHMsIGxldHRlcnMsIG9yIGh5cGhlbnMuXG5cbnZhciBCVUlMRElERU5USUZJRVIgPSBSKys7XG5zcmNbQlVJTERJREVOVElGSUVSXSA9ICdbMC05QS1aYS16LV0rJztcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGFcbi8vIFBsdXMgc2lnbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgcGVyaW9kLXNlcGFyYXRlZCBidWlsZCBtZXRhZGF0YVxuLy8gaWRlbnRpZmllcnMuXG5cbnZhciBCVUlMRCA9IFIrKztcbnNyY1tCVUlMRF0gPSAnKD86XFxcXCsoJyArIHNyY1tCVUlMRElERU5USUZJRVJdICtcbiAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW0JVSUxESURFTlRJRklFUl0gKyAnKSopKSc7XG5cblxuLy8gIyMgRnVsbCBWZXJzaW9uIFN0cmluZ1xuLy8gQSBtYWluIHZlcnNpb24sIGZvbGxvd2VkIG9wdGlvbmFsbHkgYnkgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uIGFuZFxuLy8gYnVpbGQgbWV0YWRhdGEuXG5cbi8vIE5vdGUgdGhhdCB0aGUgb25seSBtYWpvciwgbWlub3IsIHBhdGNoLCBhbmQgcHJlLXJlbGVhc2Ugc2VjdGlvbnMgb2Zcbi8vIHRoZSB2ZXJzaW9uIHN0cmluZyBhcmUgY2FwdHVyaW5nIGdyb3Vwcy4gIFRoZSBidWlsZCBtZXRhZGF0YSBpcyBub3QgYVxuLy8gY2FwdHVyaW5nIGdyb3VwLCBiZWNhdXNlIGl0IHNob3VsZCBub3QgZXZlciBiZSB1c2VkIGluIHZlcnNpb25cbi8vIGNvbXBhcmlzb24uXG5cbnZhciBGVUxMID0gUisrO1xudmFyIEZVTExQTEFJTiA9ICd2PycgKyBzcmNbTUFJTlZFUlNJT05dICtcbiAgICAgICAgICAgICAgICBzcmNbUFJFUkVMRUFTRV0gKyAnPycgK1xuICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPyc7XG5cbnNyY1tGVUxMXSA9ICdeJyArIEZVTExQTEFJTiArICckJztcblxuLy8gbGlrZSBmdWxsLCBidXQgYWxsb3dzIHYxLjIuMyBhbmQgPTEuMi4zLCB3aGljaCBwZW9wbGUgZG8gc29tZXRpbWVzLlxuLy8gYWxzbywgMS4wLjBhbHBoYTEgKHByZXJlbGVhc2Ugd2l0aG91dCB0aGUgaHlwaGVuKSB3aGljaCBpcyBwcmV0dHlcbi8vIGNvbW1vbiBpbiB0aGUgbnBtIHJlZ2lzdHJ5LlxudmFyIExPT1NFUExBSU4gPSAnW3Y9XFxcXHNdKicgKyBzcmNbTUFJTlZFUlNJT05MT09TRV0gK1xuICAgICAgICAgICAgICAgICBzcmNbUFJFUkVMRUFTRUxPT1NFXSArICc/JyArXG4gICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPyc7XG5cbnZhciBMT09TRSA9IFIrKztcbnNyY1tMT09TRV0gPSAnXicgKyBMT09TRVBMQUlOICsgJyQnO1xuXG52YXIgR1RMVCA9IFIrKztcbnNyY1tHVExUXSA9ICcoKD86PHw+KT89PyknO1xuXG4vLyBTb21ldGhpbmcgbGlrZSBcIjIuKlwiIG9yIFwiMS4yLnhcIi5cbi8vIE5vdGUgdGhhdCBcIngueFwiIGlzIGEgdmFsaWQgeFJhbmdlIGlkZW50aWZlciwgbWVhbmluZyBcImFueSB2ZXJzaW9uXCJcbi8vIE9ubHkgdGhlIGZpcnN0IGl0ZW0gaXMgc3RyaWN0bHkgcmVxdWlyZWQuXG52YXIgWFJBTkdFSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gPSBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnfHh8WHxcXFxcKic7XG52YXIgWFJBTkdFSURFTlRJRklFUiA9IFIrKztcbnNyY1tYUkFOR0VJREVOVElGSUVSXSA9IHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnfHh8WHxcXFxcKic7XG5cbnZhciBYUkFOR0VQTEFJTiA9IFIrKztcbnNyY1tYUkFOR0VQTEFJTl0gPSAnW3Y9XFxcXHNdKignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzonICsgc3JjW1BSRVJFTEVBU0VdICsgJyk/JyArXG4gICAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JyArXG4gICAgICAgICAgICAgICAgICAgJyk/KT8nO1xuXG52YXIgWFJBTkdFUExBSU5MT09TRSA9IFIrKztcbnNyY1tYUkFOR0VQTEFJTkxPT1NFXSA9ICdbdj1cXFxcc10qKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OicgKyBzcmNbUFJFUkVMRUFTRUxPT1NFXSArICcpPycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKT8pPyc7XG5cbnZhciBYUkFOR0UgPSBSKys7XG5zcmNbWFJBTkdFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyonICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBYUkFOR0VMT09TRSA9IFIrKztcbnNyY1tYUkFOR0VMT09TRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gVGlsZGUgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcInJlYXNvbmFibHkgYXQgb3IgZ3JlYXRlciB0aGFuXCJcbnZhciBMT05FVElMREUgPSBSKys7XG5zcmNbTE9ORVRJTERFXSA9ICcoPzp+Pj8pJztcblxudmFyIFRJTERFVFJJTSA9IFIrKztcbnNyY1tUSUxERVRSSU1dID0gJyhcXFxccyopJyArIHNyY1tMT05FVElMREVdICsgJ1xcXFxzKyc7XG5yZVtUSUxERVRSSU1dID0gbmV3IFJlZ0V4cChzcmNbVElMREVUUklNXSwgJ2cnKTtcbnZhciB0aWxkZVRyaW1SZXBsYWNlID0gJyQxfic7XG5cbnZhciBUSUxERSA9IFIrKztcbnNyY1tUSUxERV0gPSAnXicgKyBzcmNbTE9ORVRJTERFXSArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgVElMREVMT09TRSA9IFIrKztcbnNyY1tUSUxERUxPT1NFXSA9ICdeJyArIHNyY1tMT05FVElMREVdICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBDYXJldCByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwiYXQgbGVhc3QgYW5kIGJhY2t3YXJkcyBjb21wYXRpYmxlIHdpdGhcIlxudmFyIExPTkVDQVJFVCA9IFIrKztcbnNyY1tMT05FQ0FSRVRdID0gJyg/OlxcXFxeKSc7XG5cbnZhciBDQVJFVFRSSU0gPSBSKys7XG5zcmNbQ0FSRVRUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbTE9ORUNBUkVUXSArICdcXFxccysnO1xucmVbQ0FSRVRUUklNXSA9IG5ldyBSZWdFeHAoc3JjW0NBUkVUVFJJTV0sICdnJyk7XG52YXIgY2FyZXRUcmltUmVwbGFjZSA9ICckMV4nO1xuXG52YXIgQ0FSRVQgPSBSKys7XG5zcmNbQ0FSRVRdID0gJ14nICsgc3JjW0xPTkVDQVJFVF0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIENBUkVUTE9PU0UgPSBSKys7XG5zcmNbQ0FSRVRMT09TRV0gPSAnXicgKyBzcmNbTE9ORUNBUkVUXSArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gQSBzaW1wbGUgZ3QvbHQvZXEgdGhpbmcsIG9yIGp1c3QgXCJcIiB0byBpbmRpY2F0ZSBcImFueSB2ZXJzaW9uXCJcbnZhciBDT01QQVJBVE9STE9PU0UgPSBSKys7XG5zcmNbQ09NUEFSQVRPUkxPT1NFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyooJyArIExPT1NFUExBSU4gKyAnKSR8XiQnO1xudmFyIENPTVBBUkFUT1IgPSBSKys7XG5zcmNbQ09NUEFSQVRPUl0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqKCcgKyBGVUxMUExBSU4gKyAnKSR8XiQnO1xuXG5cbi8vIEFuIGV4cHJlc3Npb24gdG8gc3RyaXAgYW55IHdoaXRlc3BhY2UgYmV0d2VlbiB0aGUgZ3RsdCBhbmQgdGhlIHRoaW5nXG4vLyBpdCBtb2RpZmllcywgc28gdGhhdCBgPiAxLjIuM2AgPT0+IGA+MS4yLjNgXG52YXIgQ09NUEFSQVRPUlRSSU0gPSBSKys7XG5zcmNbQ09NUEFSQVRPUlRSSU1dID0gJyhcXFxccyopJyArIHNyY1tHVExUXSArXG4gICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKignICsgTE9PU0VQTEFJTiArICd8JyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKSc7XG5cbi8vIHRoaXMgb25lIGhhcyB0byB1c2UgdGhlIC9nIGZsYWdcbnJlW0NPTVBBUkFUT1JUUklNXSA9IG5ldyBSZWdFeHAoc3JjW0NPTVBBUkFUT1JUUklNXSwgJ2cnKTtcbnZhciBjb21wYXJhdG9yVHJpbVJlcGxhY2UgPSAnJDEkMiQzJztcblxuXG4vLyBTb21ldGhpbmcgbGlrZSBgMS4yLjMgLSAxLjIuNGBcbi8vIE5vdGUgdGhhdCB0aGVzZSBhbGwgdXNlIHRoZSBsb29zZSBmb3JtLCBiZWNhdXNlIHRoZXknbGwgYmVcbi8vIGNoZWNrZWQgYWdhaW5zdCBlaXRoZXIgdGhlIHN0cmljdCBvciBsb29zZSBjb21wYXJhdG9yIGZvcm1cbi8vIGxhdGVyLlxudmFyIEhZUEhFTlJBTkdFID0gUisrO1xuc3JjW0hZUEhFTlJBTkdFXSA9ICdeXFxcXHMqKCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnXFxcXHMrLVxcXFxzKycgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICdcXFxccyokJztcblxudmFyIEhZUEhFTlJBTkdFTE9PU0UgPSBSKys7XG5zcmNbSFlQSEVOUkFOR0VMT09TRV0gPSAnXlxcXFxzKignICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxccystXFxcXHMrJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKiQnO1xuXG4vLyBTdGFyIHJhbmdlcyBiYXNpY2FsbHkganVzdCBhbGxvdyBhbnl0aGluZyBhdCBhbGwuXG52YXIgU1RBUiA9IFIrKztcbnNyY1tTVEFSXSA9ICcoPHw+KT89P1xcXFxzKlxcXFwqJztcblxuLy8gQ29tcGlsZSB0byBhY3R1YWwgcmVnZXhwIG9iamVjdHMuXG4vLyBBbGwgYXJlIGZsYWctZnJlZSwgdW5sZXNzIHRoZXkgd2VyZSBjcmVhdGVkIGFib3ZlIHdpdGggYSBmbGFnLlxuZm9yICh2YXIgaSA9IDA7IGkgPCBSOyBpKyspIHtcbiAgZGVidWcoaSwgc3JjW2ldKTtcbiAgaWYgKCFyZVtpXSlcbiAgICByZVtpXSA9IG5ldyBSZWdFeHAoc3JjW2ldKTtcbn1cblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuZnVuY3Rpb24gcGFyc2UodmVyc2lvbiwgbG9vc2UpIHtcbiAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpXG4gICAgcmV0dXJuIHZlcnNpb247XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJylcbiAgICByZXR1cm4gbnVsbDtcblxuICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHZhciByID0gbG9vc2UgPyByZVtMT09TRV0gOiByZVtGVUxMXTtcbiAgaWYgKCFyLnRlc3QodmVyc2lvbikpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy52YWxpZCA9IHZhbGlkO1xuZnVuY3Rpb24gdmFsaWQodmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHYgPSBwYXJzZSh2ZXJzaW9uLCBsb29zZSk7XG4gIHJldHVybiB2ID8gdi52ZXJzaW9uIDogbnVsbDtcbn1cblxuXG5leHBvcnRzLmNsZWFuID0gY2xlYW47XG5mdW5jdGlvbiBjbGVhbih2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgcyA9IHBhcnNlKHZlcnNpb24udHJpbSgpLnJlcGxhY2UoL15bPXZdKy8sICcnKSwgbG9vc2UpO1xuICByZXR1cm4gcyA/IHMudmVyc2lvbiA6IG51bGw7XG59XG5cbmV4cG9ydHMuU2VtVmVyID0gU2VtVmVyO1xuXG5mdW5jdGlvbiBTZW1WZXIodmVyc2lvbiwgbG9vc2UpIHtcbiAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpIHtcbiAgICBpZiAodmVyc2lvbi5sb29zZSA9PT0gbG9vc2UpXG4gICAgICByZXR1cm4gdmVyc2lvbjtcbiAgICBlbHNlXG4gICAgICB2ZXJzaW9uID0gdmVyc2lvbi52ZXJzaW9uO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgVmVyc2lvbjogJyArIHZlcnNpb24pO1xuICB9XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2ZXJzaW9uIGlzIGxvbmdlciB0aGFuICcgKyBNQVhfTEVOR1RIICsgJyBjaGFyYWN0ZXJzJylcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG5cbiAgZGVidWcoJ1NlbVZlcicsIHZlcnNpb24sIGxvb3NlKTtcbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuICB2YXIgbSA9IHZlcnNpb24udHJpbSgpLm1hdGNoKGxvb3NlID8gcmVbTE9PU0VdIDogcmVbRlVMTF0pO1xuXG4gIGlmICghbSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFZlcnNpb246ICcgKyB2ZXJzaW9uKTtcblxuICB0aGlzLnJhdyA9IHZlcnNpb247XG5cbiAgLy8gdGhlc2UgYXJlIGFjdHVhbGx5IG51bWJlcnNcbiAgdGhpcy5tYWpvciA9ICttWzFdO1xuICB0aGlzLm1pbm9yID0gK21bMl07XG4gIHRoaXMucGF0Y2ggPSArbVszXTtcblxuICBpZiAodGhpcy5tYWpvciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5tYWpvciA8IDApXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtYWpvciB2ZXJzaW9uJylcblxuICBpZiAodGhpcy5taW5vciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5taW5vciA8IDApXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtaW5vciB2ZXJzaW9uJylcblxuICBpZiAodGhpcy5wYXRjaCA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5wYXRjaCA8IDApXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBwYXRjaCB2ZXJzaW9uJylcblxuICAvLyBudW1iZXJpZnkgYW55IHByZXJlbGVhc2UgbnVtZXJpYyBpZHNcbiAgaWYgKCFtWzRdKVxuICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICBlbHNlXG4gICAgdGhpcy5wcmVyZWxlYXNlID0gbVs0XS5zcGxpdCgnLicpLm1hcChmdW5jdGlvbihpZCkge1xuICAgICAgaWYgKC9eWzAtOV0rJC8udGVzdChpZCkpIHtcbiAgICAgICAgdmFyIG51bSA9ICtpZDtcbiAgICAgICAgaWYgKG51bSA+PSAwICYmIG51bSA8IE1BWF9TQUZFX0lOVEVHRVIpXG4gICAgICAgICAgcmV0dXJuIG51bTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpZDtcbiAgICB9KTtcblxuICB0aGlzLmJ1aWxkID0gbVs1XSA/IG1bNV0uc3BsaXQoJy4nKSA6IFtdO1xuICB0aGlzLmZvcm1hdCgpO1xufVxuXG5TZW1WZXIucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnZlcnNpb24gPSB0aGlzLm1ham9yICsgJy4nICsgdGhpcy5taW5vciArICcuJyArIHRoaXMucGF0Y2g7XG4gIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHRoaXMudmVyc2lvbiArPSAnLScgKyB0aGlzLnByZXJlbGVhc2Uuam9pbignLicpO1xuICByZXR1cm4gdGhpcy52ZXJzaW9uO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy52ZXJzaW9uO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgZGVidWcoJ1NlbVZlci5jb21wYXJlJywgdGhpcy52ZXJzaW9uLCB0aGlzLmxvb3NlLCBvdGhlcik7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiB0aGlzLmNvbXBhcmVNYWluKG90aGVyKSB8fCB0aGlzLmNvbXBhcmVQcmUob3RoZXIpO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlTWFpbiA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnModGhpcy5tYWpvciwgb3RoZXIubWFqb3IpIHx8XG4gICAgICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5taW5vciwgb3RoZXIubWlub3IpIHx8XG4gICAgICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5wYXRjaCwgb3RoZXIucGF0Y2gpO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlUHJlID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgLy8gTk9UIGhhdmluZyBhIHByZXJlbGVhc2UgaXMgPiBoYXZpbmcgb25lXG4gIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gLTE7XG4gIGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmIG90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAxO1xuICBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIDA7XG5cbiAgdmFyIGkgPSAwO1xuICBkbyB7XG4gICAgdmFyIGEgPSB0aGlzLnByZXJlbGVhc2VbaV07XG4gICAgdmFyIGIgPSBvdGhlci5wcmVyZWxlYXNlW2ldO1xuICAgIGRlYnVnKCdwcmVyZWxlYXNlIGNvbXBhcmUnLCBpLCBhLCBiKTtcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkICYmIGIgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAwO1xuICAgIGVsc2UgaWYgKGIgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKGEgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAtMTtcbiAgICBlbHNlIGlmIChhID09PSBiKVxuICAgICAgY29udGludWU7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhhLCBiKTtcbiAgfSB3aGlsZSAoKytpKTtcbn07XG5cbi8vIHByZW1pbm9yIHdpbGwgYnVtcCB0aGUgdmVyc2lvbiB1cCB0byB0aGUgbmV4dCBtaW5vciByZWxlYXNlLCBhbmQgaW1tZWRpYXRlbHlcbi8vIGRvd24gdG8gcHJlLXJlbGVhc2UuIHByZW1ham9yIGFuZCBwcmVwYXRjaCB3b3JrIHRoZSBzYW1lIHdheS5cblNlbVZlci5wcm90b3R5cGUuaW5jID0gZnVuY3Rpb24ocmVsZWFzZSwgaWRlbnRpZmllcikge1xuICBzd2l0Y2ggKHJlbGVhc2UpIHtcbiAgICBjYXNlICdwcmVtYWpvcic6XG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5taW5vciA9IDA7XG4gICAgICB0aGlzLm1ham9yKys7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVtaW5vcic6XG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5taW5vcisrO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJlcGF0Y2gnOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhbHJlYWR5IGEgcHJlcmVsZWFzZSwgaXQgd2lsbCBidW1wIHRvIHRoZSBuZXh0IHZlcnNpb25cbiAgICAgIC8vIGRyb3AgYW55IHByZXJlbGVhc2VzIHRoYXQgbWlnaHQgYWxyZWFkeSBleGlzdCwgc2luY2UgdGhleSBhcmUgbm90XG4gICAgICAvLyByZWxldmFudCBhdCB0aGlzIHBvaW50LlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKTtcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIElmIHRoZSBpbnB1dCBpcyBhIG5vbi1wcmVyZWxlYXNlIHZlcnNpb24sIHRoaXMgYWN0cyB0aGUgc2FtZSBhc1xuICAgIC8vIHByZXBhdGNoLlxuICAgIGNhc2UgJ3ByZXJlbGVhc2UnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdtYWpvcic6XG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1ham9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWFqb3IgdmVyc2lvbi5cbiAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWFqb3IuXG4gICAgICAvLyAxLjAuMC01IGJ1bXBzIHRvIDEuMC4wXG4gICAgICAvLyAxLjEuMCBidW1wcyB0byAyLjAuMFxuICAgICAgaWYgKHRoaXMubWlub3IgIT09IDAgfHwgdGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLm1ham9yKys7XG4gICAgICB0aGlzLm1pbm9yID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaW5vcic6XG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1pbm9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWlub3IgdmVyc2lvbi5cbiAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWlub3IuXG4gICAgICAvLyAxLjIuMC01IGJ1bXBzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMSBidW1wcyB0byAxLjMuMFxuICAgICAgaWYgKHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5taW5vcisrO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3BhdGNoJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgbm90IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiwgaXQgd2lsbCBpbmNyZW1lbnQgdGhlIHBhdGNoLlxuICAgICAgLy8gSWYgaXQgaXMgYSBwcmUtcmVsZWFzZSBpdCB3aWxsIGJ1bXAgdXAgdG8gdGhlIHNhbWUgcGF0Y2ggdmVyc2lvbi5cbiAgICAgIC8vIDEuMi4wLTUgcGF0Y2hlcyB0byAxLjIuMFxuICAgICAgLy8gMS4yLjAgcGF0Y2hlcyB0byAxLjIuMVxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMucGF0Y2grKztcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgLy8gVGhpcyBwcm9iYWJseSBzaG91bGRuJ3QgYmUgdXNlZCBwdWJsaWNseS5cbiAgICAvLyAxLjAuMCBcInByZVwiIHdvdWxkIGJlY29tZSAxLjAuMC0wIHdoaWNoIGlzIHRoZSB3cm9uZyBkaXJlY3Rpb24uXG4gICAgY2FzZSAncHJlJzpcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbMF07XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnByZXJlbGVhc2UubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJlcmVsZWFzZVtpXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZVtpXSsrO1xuICAgICAgICAgICAgaSA9IC0yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gLTEpIC8vIGRpZG4ndCBpbmNyZW1lbnQgYW55dGhpbmdcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UucHVzaCgwKTtcbiAgICAgIH1cbiAgICAgIGlmIChpZGVudGlmaWVyKSB7XG4gICAgICAgIC8vIDEuMi4wLWJldGEuMSBidW1wcyB0byAxLjIuMC1iZXRhLjIsXG4gICAgICAgIC8vIDEuMi4wLWJldGEuZm9vYmx6IG9yIDEuMi4wLWJldGEgYnVtcHMgdG8gMS4yLjAtYmV0YS4wXG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2VbMF0gPT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgICBpZiAoaXNOYU4odGhpcy5wcmVyZWxlYXNlWzFdKSlcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGluY3JlbWVudCBhcmd1bWVudDogJyArIHJlbGVhc2UpO1xuICB9XG4gIHRoaXMuZm9ybWF0KCk7XG4gIHRoaXMucmF3ID0gdGhpcy52ZXJzaW9uO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmV4cG9ydHMuaW5jID0gaW5jO1xuZnVuY3Rpb24gaW5jKHZlcnNpb24sIHJlbGVhc2UsIGxvb3NlLCBpZGVudGlmaWVyKSB7XG4gIGlmICh0eXBlb2YobG9vc2UpID09PSAnc3RyaW5nJykge1xuICAgIGlkZW50aWZpZXIgPSBsb29zZTtcbiAgICBsb29zZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpLmluYyhyZWxlYXNlLCBpZGVudGlmaWVyKS52ZXJzaW9uO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMuZGlmZiA9IGRpZmY7XG5mdW5jdGlvbiBkaWZmKHZlcnNpb24xLCB2ZXJzaW9uMikge1xuICBpZiAoZXEodmVyc2lvbjEsIHZlcnNpb24yKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHZhciB2MSA9IHBhcnNlKHZlcnNpb24xKTtcbiAgICB2YXIgdjIgPSBwYXJzZSh2ZXJzaW9uMik7XG4gICAgaWYgKHYxLnByZXJlbGVhc2UubGVuZ3RoIHx8IHYyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdjEpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgICAgaWYgKHYxW2tleV0gIT09IHYyW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiAncHJlJytrZXk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJ3ByZXJlbGVhc2UnO1xuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gdjEpIHtcbiAgICAgIGlmIChrZXkgPT09ICdtYWpvcicgfHwga2V5ID09PSAnbWlub3InIHx8IGtleSA9PT0gJ3BhdGNoJykge1xuICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5jb21wYXJlSWRlbnRpZmllcnMgPSBjb21wYXJlSWRlbnRpZmllcnM7XG5cbnZhciBudW1lcmljID0gL15bMC05XSskLztcbmZ1bmN0aW9uIGNvbXBhcmVJZGVudGlmaWVycyhhLCBiKSB7XG4gIHZhciBhbnVtID0gbnVtZXJpYy50ZXN0KGEpO1xuICB2YXIgYm51bSA9IG51bWVyaWMudGVzdChiKTtcblxuICBpZiAoYW51bSAmJiBibnVtKSB7XG4gICAgYSA9ICthO1xuICAgIGIgPSArYjtcbiAgfVxuXG4gIHJldHVybiAoYW51bSAmJiAhYm51bSkgPyAtMSA6XG4gICAgICAgICAoYm51bSAmJiAhYW51bSkgPyAxIDpcbiAgICAgICAgIGEgPCBiID8gLTEgOlxuICAgICAgICAgYSA+IGIgPyAxIDpcbiAgICAgICAgIDA7XG59XG5cbmV4cG9ydHMucmNvbXBhcmVJZGVudGlmaWVycyA9IHJjb21wYXJlSWRlbnRpZmllcnM7XG5mdW5jdGlvbiByY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpIHtcbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhiLCBhKTtcbn1cblxuZXhwb3J0cy5tYWpvciA9IG1ham9yO1xuZnVuY3Rpb24gbWFqb3IoYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1ham9yO1xufVxuXG5leHBvcnRzLm1pbm9yID0gbWlub3I7XG5mdW5jdGlvbiBtaW5vcihhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWlub3I7XG59XG5cbmV4cG9ydHMucGF0Y2ggPSBwYXRjaDtcbmZ1bmN0aW9uIHBhdGNoKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5wYXRjaDtcbn1cblxuZXhwb3J0cy5jb21wYXJlID0gY29tcGFyZTtcbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLmNvbXBhcmUoYik7XG59XG5cbmV4cG9ydHMuY29tcGFyZUxvb3NlID0gY29tcGFyZUxvb3NlO1xuZnVuY3Rpb24gY29tcGFyZUxvb3NlKGEsIGIpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgdHJ1ZSk7XG59XG5cbmV4cG9ydHMucmNvbXBhcmUgPSByY29tcGFyZTtcbmZ1bmN0aW9uIHJjb21wYXJlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGIsIGEsIGxvb3NlKTtcbn1cblxuZXhwb3J0cy5zb3J0ID0gc29ydDtcbmZ1bmN0aW9uIHNvcnQobGlzdCwgbG9vc2UpIHtcbiAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pO1xufVxuXG5leHBvcnRzLnJzb3J0ID0gcnNvcnQ7XG5mdW5jdGlvbiByc29ydChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5yY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pO1xufVxuXG5leHBvcnRzLmd0ID0gZ3Q7XG5mdW5jdGlvbiBndChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPiAwO1xufVxuXG5leHBvcnRzLmx0ID0gbHQ7XG5mdW5jdGlvbiBsdChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPCAwO1xufVxuXG5leHBvcnRzLmVxID0gZXE7XG5mdW5jdGlvbiBlcShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPT09IDA7XG59XG5cbmV4cG9ydHMubmVxID0gbmVxO1xuZnVuY3Rpb24gbmVxKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSAhPT0gMDtcbn1cblxuZXhwb3J0cy5ndGUgPSBndGU7XG5mdW5jdGlvbiBndGUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID49IDA7XG59XG5cbmV4cG9ydHMubHRlID0gbHRlO1xuZnVuY3Rpb24gbHRlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8PSAwO1xufVxuXG5leHBvcnRzLmNtcCA9IGNtcDtcbmZ1bmN0aW9uIGNtcChhLCBvcCwgYiwgbG9vc2UpIHtcbiAgdmFyIHJldDtcbiAgc3dpdGNoIChvcCkge1xuICAgIGNhc2UgJz09PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSBhID0gYS52ZXJzaW9uO1xuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JykgYiA9IGIudmVyc2lvbjtcbiAgICAgIHJldCA9IGEgPT09IGI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICchPT0nOlxuICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0JykgYSA9IGEudmVyc2lvbjtcbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIGIgPSBiLnZlcnNpb247XG4gICAgICByZXQgPSBhICE9PSBiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnJzogY2FzZSAnPSc6IGNhc2UgJz09JzogcmV0ID0gZXEoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICchPSc6IHJldCA9IG5lcShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJz4nOiByZXQgPSBndChhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJz49JzogcmV0ID0gZ3RlKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPCc6IHJldCA9IGx0KGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPD0nOiByZXQgPSBsdGUoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBkZWZhdWx0OiB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG9wZXJhdG9yOiAnICsgb3ApO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydHMuQ29tcGFyYXRvciA9IENvbXBhcmF0b3I7XG5mdW5jdGlvbiBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKSB7XG4gIGlmIChjb21wIGluc3RhbmNlb2YgQ29tcGFyYXRvcikge1xuICAgIGlmIChjb21wLmxvb3NlID09PSBsb29zZSlcbiAgICAgIHJldHVybiBjb21wO1xuICAgIGVsc2VcbiAgICAgIGNvbXAgPSBjb21wLnZhbHVlO1xuICB9XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENvbXBhcmF0b3IpKVxuICAgIHJldHVybiBuZXcgQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG5cbiAgZGVidWcoJ2NvbXBhcmF0b3InLCBjb21wLCBsb29zZSk7XG4gIHRoaXMubG9vc2UgPSBsb29zZTtcbiAgdGhpcy5wYXJzZShjb21wKTtcblxuICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSlcbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gIGVsc2VcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5vcGVyYXRvciArIHRoaXMuc2VtdmVyLnZlcnNpb247XG5cbiAgZGVidWcoJ2NvbXAnLCB0aGlzKTtcbn1cblxudmFyIEFOWSA9IHt9O1xuQ29tcGFyYXRvci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbihjb21wKSB7XG4gIHZhciByID0gdGhpcy5sb29zZSA/IHJlW0NPTVBBUkFUT1JMT09TRV0gOiByZVtDT01QQVJBVE9SXTtcbiAgdmFyIG0gPSBjb21wLm1hdGNoKHIpO1xuXG4gIGlmICghbSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNvbXBhcmF0b3I6ICcgKyBjb21wKTtcblxuICB0aGlzLm9wZXJhdG9yID0gbVsxXTtcbiAgaWYgKHRoaXMub3BlcmF0b3IgPT09ICc9JylcbiAgICB0aGlzLm9wZXJhdG9yID0gJyc7XG5cbiAgLy8gaWYgaXQgbGl0ZXJhbGx5IGlzIGp1c3QgJz4nIG9yICcnIHRoZW4gYWxsb3cgYW55dGhpbmcuXG4gIGlmICghbVsyXSlcbiAgICB0aGlzLnNlbXZlciA9IEFOWTtcbiAgZWxzZVxuICAgIHRoaXMuc2VtdmVyID0gbmV3IFNlbVZlcihtWzJdLCB0aGlzLmxvb3NlKTtcbn07XG5cbkNvbXBhcmF0b3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZhbHVlO1xufTtcblxuQ29tcGFyYXRvci5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgZGVidWcoJ0NvbXBhcmF0b3IudGVzdCcsIHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKVxuICAgIHJldHVybiB0cnVlO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpXG4gICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIGNtcCh2ZXJzaW9uLCB0aGlzLm9wZXJhdG9yLCB0aGlzLnNlbXZlciwgdGhpcy5sb29zZSk7XG59O1xuXG5cbmV4cG9ydHMuUmFuZ2UgPSBSYW5nZTtcbmZ1bmN0aW9uIFJhbmdlKHJhbmdlLCBsb29zZSkge1xuICBpZiAoKHJhbmdlIGluc3RhbmNlb2YgUmFuZ2UpICYmIHJhbmdlLmxvb3NlID09PSBsb29zZSlcbiAgICByZXR1cm4gcmFuZ2U7XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJhbmdlKSlcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG5cbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuXG4gIC8vIEZpcnN0LCBzcGxpdCBiYXNlZCBvbiBib29sZWFuIG9yIHx8XG4gIHRoaXMucmF3ID0gcmFuZ2U7XG4gIHRoaXMuc2V0ID0gcmFuZ2Uuc3BsaXQoL1xccypcXHxcXHxcXHMqLykubWFwKGZ1bmN0aW9uKHJhbmdlKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VSYW5nZShyYW5nZS50cmltKCkpO1xuICB9LCB0aGlzKS5maWx0ZXIoZnVuY3Rpb24oYykge1xuICAgIC8vIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHJlbGV2YW50IGZvciB3aGF0ZXZlciByZWFzb25cbiAgICByZXR1cm4gYy5sZW5ndGg7XG4gIH0pO1xuXG4gIGlmICghdGhpcy5zZXQubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBTZW1WZXIgUmFuZ2U6ICcgKyByYW5nZSk7XG4gIH1cblxuICB0aGlzLmZvcm1hdCgpO1xufVxuXG5SYW5nZS5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmFuZ2UgPSB0aGlzLnNldC5tYXAoZnVuY3Rpb24oY29tcHMpIHtcbiAgICByZXR1cm4gY29tcHMuam9pbignICcpLnRyaW0oKTtcbiAgfSkuam9pbignfHwnKS50cmltKCk7XG4gIHJldHVybiB0aGlzLnJhbmdlO1xufTtcblxuUmFuZ2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnJhbmdlO1xufTtcblxuUmFuZ2UucHJvdG90eXBlLnBhcnNlUmFuZ2UgPSBmdW5jdGlvbihyYW5nZSkge1xuICB2YXIgbG9vc2UgPSB0aGlzLmxvb3NlO1xuICByYW5nZSA9IHJhbmdlLnRyaW0oKTtcbiAgZGVidWcoJ3JhbmdlJywgcmFuZ2UsIGxvb3NlKTtcbiAgLy8gYDEuMi4zIC0gMS4yLjRgID0+IGA+PTEuMi4zIDw9MS4yLjRgXG4gIHZhciBociA9IGxvb3NlID8gcmVbSFlQSEVOUkFOR0VMT09TRV0gOiByZVtIWVBIRU5SQU5HRV07XG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShociwgaHlwaGVuUmVwbGFjZSk7XG4gIGRlYnVnKCdoeXBoZW4gcmVwbGFjZScsIHJhbmdlKTtcbiAgLy8gYD4gMS4yLjMgPCAxLjIuNWAgPT4gYD4xLjIuMyA8MS4yLjVgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtDT01QQVJBVE9SVFJJTV0sIGNvbXBhcmF0b3JUcmltUmVwbGFjZSk7XG4gIGRlYnVnKCdjb21wYXJhdG9yIHRyaW0nLCByYW5nZSwgcmVbQ09NUEFSQVRPUlRSSU1dKTtcblxuICAvLyBgfiAxLjIuM2AgPT4gYH4xLjIuM2BcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW1RJTERFVFJJTV0sIHRpbGRlVHJpbVJlcGxhY2UpO1xuXG4gIC8vIGBeIDEuMi4zYCA9PiBgXjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbQ0FSRVRUUklNXSwgY2FyZXRUcmltUmVwbGFjZSk7XG5cbiAgLy8gbm9ybWFsaXplIHNwYWNlc1xuICByYW5nZSA9IHJhbmdlLnNwbGl0KC9cXHMrLykuam9pbignICcpO1xuXG4gIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSByYW5nZSBpcyBjb21wbGV0ZWx5IHRyaW1tZWQgYW5kXG4gIC8vIHJlYWR5IHRvIGJlIHNwbGl0IGludG8gY29tcGFyYXRvcnMuXG5cbiAgdmFyIGNvbXBSZSA9IGxvb3NlID8gcmVbQ09NUEFSQVRPUkxPT1NFXSA6IHJlW0NPTVBBUkFUT1JdO1xuICB2YXIgc2V0ID0gcmFuZ2Uuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBwYXJzZUNvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJykuc3BsaXQoL1xccysvKTtcbiAgaWYgKHRoaXMubG9vc2UpIHtcbiAgICAvLyBpbiBsb29zZSBtb2RlLCB0aHJvdyBvdXQgYW55IHRoYXQgYXJlIG5vdCB2YWxpZCBjb21wYXJhdG9yc1xuICAgIHNldCA9IHNldC5maWx0ZXIoZnVuY3Rpb24oY29tcCkge1xuICAgICAgcmV0dXJuICEhY29tcC5tYXRjaChjb21wUmUpO1xuICAgIH0pO1xuICB9XG4gIHNldCA9IHNldC5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBuZXcgQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG4gIH0pO1xuXG4gIHJldHVybiBzZXQ7XG59O1xuXG4vLyBNb3N0bHkganVzdCBmb3IgdGVzdGluZyBhbmQgbGVnYWN5IEFQSSByZWFzb25zXG5leHBvcnRzLnRvQ29tcGFyYXRvcnMgPSB0b0NvbXBhcmF0b3JzO1xuZnVuY3Rpb24gdG9Db21wYXJhdG9ycyhyYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpLnNldC5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBjb21wLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICByZXR1cm4gYy52YWx1ZTtcbiAgICB9KS5qb2luKCcgJykudHJpbSgpLnNwbGl0KCcgJyk7XG4gIH0pO1xufVxuXG4vLyBjb21wcmlzZWQgb2YgeHJhbmdlcywgdGlsZGVzLCBzdGFycywgYW5kIGd0bHQncyBhdCB0aGlzIHBvaW50LlxuLy8gYWxyZWFkeSByZXBsYWNlZCB0aGUgaHlwaGVuIHJhbmdlc1xuLy8gdHVybiBpbnRvIGEgc2V0IG9mIEpVU1QgY29tcGFyYXRvcnMuXG5mdW5jdGlvbiBwYXJzZUNvbXBhcmF0b3IoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ2NvbXAnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VDYXJldHMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygnY2FyZXQnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VUaWxkZXMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygndGlsZGVzJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlWFJhbmdlcyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCd4cmFuZ2UnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VTdGFycyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCdzdGFycycsIGNvbXApO1xuICByZXR1cm4gY29tcDtcbn1cblxuZnVuY3Rpb24gaXNYKGlkKSB7XG4gIHJldHVybiAhaWQgfHwgaWQudG9Mb3dlckNhc2UoKSA9PT0gJ3gnIHx8IGlkID09PSAnKic7XG59XG5cbi8vIH4sIH4+IC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gfjIsIH4yLngsIH4yLngueCwgfj4yLCB+PjIueCB+PjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gfjIuMCwgfjIuMC54LCB+PjIuMCwgfj4yLjAueCAtLT4gPj0yLjAuMCA8Mi4xLjBcbi8vIH4xLjIsIH4xLjIueCwgfj4xLjIsIH4+MS4yLnggLS0+ID49MS4yLjAgPDEuMy4wXG4vLyB+MS4yLjMsIH4+MS4yLjMgLS0+ID49MS4yLjMgPDEuMy4wXG4vLyB+MS4yLjAsIH4+MS4yLjAgLS0+ID49MS4yLjAgPDEuMy4wXG5mdW5jdGlvbiByZXBsYWNlVGlsZGVzKGNvbXAsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VUaWxkZShjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVRpbGRlKGNvbXAsIGxvb3NlKSB7XG4gIHZhciByID0gbG9vc2UgPyByZVtUSUxERUxPT1NFXSA6IHJlW1RJTERFXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihfLCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCd0aWxkZScsIGNvbXAsIF8sIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgcmV0O1xuXG4gICAgaWYgKGlzWChNKSlcbiAgICAgIHJldCA9ICcnO1xuICAgIGVsc2UgaWYgKGlzWChtKSlcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICBlbHNlIGlmIChpc1gocCkpXG4gICAgICAvLyB+MS4yID09ID49MS4yLjAgPDEuMy4wXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZVRpbGRlIHByJywgcHIpO1xuICAgICAgaWYgKHByLmNoYXJBdCgwKSAhPT0gJy0nKVxuICAgICAgICBwciA9ICctJyArIHByO1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIH0gZWxzZVxuICAgICAgLy8gfjEuMi4zID09ID49MS4yLjMgPDEuMy4wXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuXG4gICAgZGVidWcoJ3RpbGRlIHJldHVybicsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbi8vIF4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyBeMiwgXjIueCwgXjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjIuMCwgXjIuMC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjEuMiwgXjEuMi54IC0tPiA+PTEuMi4wIDwyLjAuMFxuLy8gXjEuMi4zIC0tPiA+PTEuMi4zIDwyLjAuMFxuLy8gXjEuMi4wIC0tPiA+PTEuMi4wIDwyLjAuMFxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0cyhjb21wLCBsb29zZSkge1xuICByZXR1cm4gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlQ2FyZXQoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDYXJldChjb21wLCBsb29zZSkge1xuICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBsb29zZSk7XG4gIHZhciByID0gbG9vc2UgPyByZVtDQVJFVExPT1NFXSA6IHJlW0NBUkVUXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihfLCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCdjYXJldCcsIGNvbXAsIF8sIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgcmV0O1xuXG4gICAgaWYgKGlzWChNKSlcbiAgICAgIHJldCA9ICcnO1xuICAgIGVsc2UgaWYgKGlzWChtKSlcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICBlbHNlIGlmIChpc1gocCkpIHtcbiAgICAgIGlmIChNID09PSAnMCcpXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlQ2FyZXQgcHInLCBwcik7XG4gICAgICBpZiAocHIuY2hhckF0KDApICE9PSAnLScpXG4gICAgICAgIHByID0gJy0nICsgcHI7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArIG0gKyAnLicgKyAoK3AgKyAxKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgJyA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Zygnbm8gcHInKTtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJylcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArIG0gKyAnLicgKyAoK3AgKyAxKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAnIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfVxuXG4gICAgZGVidWcoJ2NhcmV0IHJldHVybicsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VYUmFuZ2VzKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdyZXBsYWNlWFJhbmdlcycsIGNvbXAsIGxvb3NlKTtcbiAgcmV0dXJuIGNvbXAuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlWFJhbmdlKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlWFJhbmdlKGNvbXAsIGxvb3NlKSB7XG4gIGNvbXAgPSBjb21wLnRyaW0oKTtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW1hSQU5HRUxPT1NFXSA6IHJlW1hSQU5HRV07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24ocmV0LCBndGx0LCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCd4UmFuZ2UnLCBjb21wLCByZXQsIGd0bHQsIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgeE0gPSBpc1goTSk7XG4gICAgdmFyIHhtID0geE0gfHwgaXNYKG0pO1xuICAgIHZhciB4cCA9IHhtIHx8IGlzWChwKTtcbiAgICB2YXIgYW55WCA9IHhwO1xuXG4gICAgaWYgKGd0bHQgPT09ICc9JyAmJiBhbnlYKVxuICAgICAgZ3RsdCA9ICcnO1xuXG4gICAgaWYgKHhNKSB7XG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nIHx8IGd0bHQgPT09ICc8Jykge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGFsbG93ZWRcbiAgICAgICAgcmV0ID0gJzwwLjAuMCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGZvcmJpZGRlblxuICAgICAgICByZXQgPSAnKic7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChndGx0ICYmIGFueVgpIHtcbiAgICAgIC8vIHJlcGxhY2UgWCB3aXRoIDBcbiAgICAgIGlmICh4bSlcbiAgICAgICAgbSA9IDA7XG4gICAgICBpZiAoeHApXG4gICAgICAgIHAgPSAwO1xuXG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nKSB7XG4gICAgICAgIC8vID4xID0+ID49Mi4wLjBcbiAgICAgICAgLy8gPjEuMiA9PiA+PTEuMy4wXG4gICAgICAgIC8vID4xLjIuMyA9PiA+PSAxLjIuNFxuICAgICAgICBndGx0ID0gJz49JztcbiAgICAgICAgaWYgKHhtKSB7XG4gICAgICAgICAgTSA9ICtNICsgMTtcbiAgICAgICAgICBtID0gMDtcbiAgICAgICAgICBwID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgICAgIG0gPSArbSArIDE7XG4gICAgICAgICAgcCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ3RsdCA9PT0gJzw9Jykge1xuICAgICAgICAvLyA8PTAuNy54IGlzIGFjdHVhbGx5IDwwLjguMCwgc2luY2UgYW55IDAuNy54IHNob3VsZFxuICAgICAgICAvLyBwYXNzLiAgU2ltaWxhcmx5LCA8PTcueCBpcyBhY3R1YWxseSA8OC4wLjAsIGV0Yy5cbiAgICAgICAgZ3RsdCA9ICc8JztcbiAgICAgICAgaWYgKHhtKVxuICAgICAgICAgIE0gPSArTSArIDE7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBtID0gK20gKyAxO1xuICAgICAgfVxuXG4gICAgICByZXQgPSBndGx0ICsgTSArICcuJyArIG0gKyAnLicgKyBwO1xuICAgIH0gZWxzZSBpZiAoeG0pIHtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIH1cblxuICAgIGRlYnVnKCd4UmFuZ2UgcmV0dXJuJywgcmV0KTtcblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG4vLyBCZWNhdXNlICogaXMgQU5ELWVkIHdpdGggZXZlcnl0aGluZyBlbHNlIGluIHRoZSBjb21wYXJhdG9yLFxuLy8gYW5kICcnIG1lYW5zIFwiYW55IHZlcnNpb25cIiwganVzdCByZW1vdmUgdGhlICpzIGVudGlyZWx5LlxuZnVuY3Rpb24gcmVwbGFjZVN0YXJzKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdyZXBsYWNlU3RhcnMnLCBjb21wLCBsb29zZSk7XG4gIC8vIExvb3NlbmVzcyBpcyBpZ25vcmVkIGhlcmUuICBzdGFyIGlzIGFsd2F5cyBhcyBsb29zZSBhcyBpdCBnZXRzIVxuICByZXR1cm4gY29tcC50cmltKCkucmVwbGFjZShyZVtTVEFSXSwgJycpO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCB0byBzdHJpbmcucmVwbGFjZShyZVtIWVBIRU5SQU5HRV0pXG4vLyBNLCBtLCBwYXRjaCwgcHJlcmVsZWFzZSwgYnVpbGRcbi8vIDEuMiAtIDMuNC41ID0+ID49MS4yLjAgPD0zLjQuNVxuLy8gMS4yLjMgLSAzLjQgPT4gPj0xLjIuMCA8My41LjAgQW55IDMuNC54IHdpbGwgZG9cbi8vIDEuMiAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMFxuZnVuY3Rpb24gaHlwaGVuUmVwbGFjZSgkMCxcbiAgICAgICAgICAgICAgICAgICAgICAgZnJvbSwgZk0sIGZtLCBmcCwgZnByLCBmYixcbiAgICAgICAgICAgICAgICAgICAgICAgdG8sIHRNLCB0bSwgdHAsIHRwciwgdGIpIHtcblxuICBpZiAoaXNYKGZNKSlcbiAgICBmcm9tID0gJyc7XG4gIGVsc2UgaWYgKGlzWChmbSkpXG4gICAgZnJvbSA9ICc+PScgKyBmTSArICcuMC4wJztcbiAgZWxzZSBpZiAoaXNYKGZwKSlcbiAgICBmcm9tID0gJz49JyArIGZNICsgJy4nICsgZm0gKyAnLjAnO1xuICBlbHNlXG4gICAgZnJvbSA9ICc+PScgKyBmcm9tO1xuXG4gIGlmIChpc1godE0pKVxuICAgIHRvID0gJyc7XG4gIGVsc2UgaWYgKGlzWCh0bSkpXG4gICAgdG8gPSAnPCcgKyAoK3RNICsgMSkgKyAnLjAuMCc7XG4gIGVsc2UgaWYgKGlzWCh0cCkpXG4gICAgdG8gPSAnPCcgKyB0TSArICcuJyArICgrdG0gKyAxKSArICcuMCc7XG4gIGVsc2UgaWYgKHRwcilcbiAgICB0byA9ICc8PScgKyB0TSArICcuJyArIHRtICsgJy4nICsgdHAgKyAnLScgKyB0cHI7XG4gIGVsc2VcbiAgICB0byA9ICc8PScgKyB0bztcblxuICByZXR1cm4gKGZyb20gKyAnICcgKyB0bykudHJpbSgpO1xufVxuXG5cbi8vIGlmIEFOWSBvZiB0aGUgc2V0cyBtYXRjaCBBTEwgb2YgaXRzIGNvbXBhcmF0b3JzLCB0aGVuIHBhc3NcblJhbmdlLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24odmVyc2lvbikge1xuICBpZiAoIXZlcnNpb24pXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpXG4gICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0ZXN0U2V0KHRoaXMuc2V0W2ldLCB2ZXJzaW9uKSlcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmZ1bmN0aW9uIHRlc3RTZXQoc2V0LCB2ZXJzaW9uKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFzZXRbaV0udGVzdCh2ZXJzaW9uKSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgLy8gRmluZCB0aGUgc2V0IG9mIHZlcnNpb25zIHRoYXQgYXJlIGFsbG93ZWQgdG8gaGF2ZSBwcmVyZWxlYXNlc1xuICAgIC8vIEZvciBleGFtcGxlLCBeMS4yLjMtcHIuMSBkZXN1Z2FycyB0byA+PTEuMi4zLXByLjEgPDIuMC4wXG4gICAgLy8gVGhhdCBzaG91bGQgYWxsb3cgYDEuMi4zLXByLjJgIHRvIHBhc3MuXG4gICAgLy8gSG93ZXZlciwgYDEuMi40LWFscGhhLm5vdHJlYWR5YCBzaG91bGQgTk9UIGJlIGFsbG93ZWQsXG4gICAgLy8gZXZlbiB0aG91Z2ggaXQncyB3aXRoaW4gdGhlIHJhbmdlIHNldCBieSB0aGUgY29tcGFyYXRvcnMuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYnVnKHNldFtpXS5zZW12ZXIpO1xuICAgICAgaWYgKHNldFtpXS5zZW12ZXIgPT09IEFOWSlcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgYWxsb3dlZCA9IHNldFtpXS5zZW12ZXI7XG4gICAgICAgIGlmIChhbGxvd2VkLm1ham9yID09PSB2ZXJzaW9uLm1ham9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLm1pbm9yID09PSB2ZXJzaW9uLm1pbm9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLnBhdGNoID09PSB2ZXJzaW9uLnBhdGNoKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFZlcnNpb24gaGFzIGEgLXByZSwgYnV0IGl0J3Mgbm90IG9uZSBvZiB0aGUgb25lcyB3ZSBsaWtlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnRzLnNhdGlzZmllcyA9IHNhdGlzZmllcztcbmZ1bmN0aW9uIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgdHJ5IHtcbiAgICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gcmFuZ2UudGVzdCh2ZXJzaW9uKTtcbn1cblxuZXhwb3J0cy5tYXhTYXRpc2Z5aW5nID0gbWF4U2F0aXNmeWluZztcbmZ1bmN0aW9uIG1heFNhdGlzZnlpbmcodmVyc2lvbnMsIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gdmVyc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiByY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pWzBdIHx8IG51bGw7XG59XG5cbmV4cG9ydHMubWluU2F0aXNmeWluZyA9IG1pblNhdGlzZnlpbmc7XG5mdW5jdGlvbiBtaW5TYXRpc2Z5aW5nKHZlcnNpb25zLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIHZlcnNpb25zLmZpbHRlcihmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpO1xuICB9KS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pWzBdIHx8IG51bGw7XG59XG5cbmV4cG9ydHMudmFsaWRSYW5nZSA9IHZhbGlkUmFuZ2U7XG5mdW5jdGlvbiB2YWxpZFJhbmdlKHJhbmdlLCBsb29zZSkge1xuICB0cnkge1xuICAgIC8vIFJldHVybiAnKicgaW5zdGVhZCBvZiAnJyBzbyB0aGF0IHRydXRoaW5lc3Mgd29ya3MuXG4gICAgLy8gVGhpcyB3aWxsIHRocm93IGlmIGl0J3MgaW52YWxpZCBhbnl3YXlcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSkucmFuZ2UgfHwgJyonO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGxlc3MgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZVxuZXhwb3J0cy5sdHIgPSBsdHI7XG5mdW5jdGlvbiBsdHIodmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPCcsIGxvb3NlKTtcbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlLlxuZXhwb3J0cy5ndHIgPSBndHI7XG5mdW5jdGlvbiBndHIodmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPicsIGxvb3NlKTtcbn1cblxuZXhwb3J0cy5vdXRzaWRlID0gb3V0c2lkZTtcbmZ1bmN0aW9uIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsIGhpbG8sIGxvb3NlKSB7XG4gIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcbiAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB2YXIgZ3RmbiwgbHRlZm4sIGx0Zm4sIGNvbXAsIGVjb21wO1xuICBzd2l0Y2ggKGhpbG8pIHtcbiAgICBjYXNlICc+JzpcbiAgICAgIGd0Zm4gPSBndDtcbiAgICAgIGx0ZWZuID0gbHRlO1xuICAgICAgbHRmbiA9IGx0O1xuICAgICAgY29tcCA9ICc+JztcbiAgICAgIGVjb21wID0gJz49JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJzwnOlxuICAgICAgZ3RmbiA9IGx0O1xuICAgICAgbHRlZm4gPSBndGU7XG4gICAgICBsdGZuID0gZ3Q7XG4gICAgICBjb21wID0gJzwnO1xuICAgICAgZWNvbXAgPSAnPD0nO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3QgcHJvdmlkZSBhIGhpbG8gdmFsIG9mIFwiPFwiIG9yIFwiPlwiJyk7XG4gIH1cblxuICAvLyBJZiBpdCBzYXRpc2lmZXMgdGhlIHJhbmdlIGl0IGlzIG5vdCBvdXRzaWRlXG4gIGlmIChzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEZyb20gbm93IG9uLCB2YXJpYWJsZSB0ZXJtcyBhcmUgYXMgaWYgd2UncmUgaW4gXCJndHJcIiBtb2RlLlxuICAvLyBidXQgbm90ZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgZmxpcHBlZCBmb3IgdGhlIFwibHRyXCIgZnVuY3Rpb24uXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByYW5nZS5zZXQubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgY29tcGFyYXRvcnMgPSByYW5nZS5zZXRbaV07XG5cbiAgICB2YXIgaGlnaCA9IG51bGw7XG4gICAgdmFyIGxvdyA9IG51bGw7XG5cbiAgICBjb21wYXJhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBhcmF0b3IpIHtcbiAgICAgIGlmIChjb21wYXJhdG9yLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgICAgIGNvbXBhcmF0b3IgPSBuZXcgQ29tcGFyYXRvcignPj0wLjAuMCcpXG4gICAgICB9XG4gICAgICBoaWdoID0gaGlnaCB8fCBjb21wYXJhdG9yO1xuICAgICAgbG93ID0gbG93IHx8IGNvbXBhcmF0b3I7XG4gICAgICBpZiAoZ3Rmbihjb21wYXJhdG9yLnNlbXZlciwgaGlnaC5zZW12ZXIsIGxvb3NlKSkge1xuICAgICAgICBoaWdoID0gY29tcGFyYXRvcjtcbiAgICAgIH0gZWxzZSBpZiAobHRmbihjb21wYXJhdG9yLnNlbXZlciwgbG93LnNlbXZlciwgbG9vc2UpKSB7XG4gICAgICAgIGxvdyA9IGNvbXBhcmF0b3I7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGUgZWRnZSB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGEgb3BlcmF0b3IgdGhlbiBvdXIgdmVyc2lvblxuICAgIC8vIGlzbid0IG91dHNpZGUgaXRcbiAgICBpZiAoaGlnaC5vcGVyYXRvciA9PT0gY29tcCB8fCBoaWdoLm9wZXJhdG9yID09PSBlY29tcCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBsb3dlc3QgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhbiBvcGVyYXRvciBhbmQgb3VyIHZlcnNpb25cbiAgICAvLyBpcyBsZXNzIHRoYW4gaXQgdGhlbiBpdCBpc24ndCBoaWdoZXIgdGhhbiB0aGUgcmFuZ2VcbiAgICBpZiAoKCFsb3cub3BlcmF0b3IgfHwgbG93Lm9wZXJhdG9yID09PSBjb21wKSAmJlxuICAgICAgICBsdGVmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAobG93Lm9wZXJhdG9yID09PSBlY29tcCAmJiBsdGZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnRzLnByZXJlbGVhc2UgPSBwcmVyZWxlYXNlO1xuZnVuY3Rpb24gcHJlcmVsZWFzZSh2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgcGFyc2VkID0gcGFyc2UodmVyc2lvbiwgbG9vc2UpO1xuICByZXR1cm4gKHBhcnNlZCAmJiBwYXJzZWQucHJlcmVsZWFzZS5sZW5ndGgpID8gcGFyc2VkLnByZXJlbGVhc2UgOiBudWxsO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9+Ly5ucG1pbnN0YWxsL3NlbXZlci81LjMuMC9zZW12ZXIvc2VtdmVyLmpzXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG4gIH1cbiAgdHJ5IHtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cbiAgfVxufSAoKSlcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IGNhY2hlZFNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNhY2hlZENsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAod2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogVmlld01vZGVsIENvbnN0cnVjdG9yICYgZGVmaW5pdGlvblxuICovXG5cbmltcG9ydCAqIGFzIF8gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCAqIGFzIHN0YXRlIGZyb20gJy4uL2NvcmUvc3RhdGUnXG5pbXBvcnQgKiBhcyBjb21waWxlciBmcm9tICcuL2NvbXBpbGVyJ1xuaW1wb3J0ICogYXMgZGlyZWN0aXZlIGZyb20gJy4vZGlyZWN0aXZlJ1xuaW1wb3J0ICogYXMgZG9tSGVscGVyIGZyb20gJy4vZG9tLWhlbHBlcidcbmltcG9ydCAqIGFzIGV2ZW50cyBmcm9tICcuL2V2ZW50cydcblxuaW1wb3J0IHsgcmVnaXN0ZXJNb2R1bGVzLCByZWdpc3Rlck1ldGhvZHMgfSBmcm9tICcuLi9hcHAvcmVnaXN0ZXInXG5cbmZ1bmN0aW9uIGNhbGxPbGRSZWFkeUVudHJ5ICh2bSwgY29tcG9uZW50KSB7XG4gIGlmIChjb21wb25lbnQubWV0aG9kcyAmJlxuICAgICAgY29tcG9uZW50Lm1ldGhvZHMucmVhZHkpIHtcbiAgICBfLndhcm4oJ1wiZXhwb3J0cy5tZXRob2RzLnJlYWR5XCIgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAncGxlYXNlIHVzZSBcImV4cG9ydHMuY3JlYXRlZFwiIGluc3RlYWQnKVxuICAgIGNvbXBvbmVudC5tZXRob2RzLnJlYWR5LmNhbGwodm0pXG4gIH1cbn1cblxuLyoqXG4gKiBWaWV3TW9kZWwgY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgICAgY29tcG9uZW50IG9wdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJlbnRWbSAgIHdoaWNoIGNvbnRhaW5zIF9hcHBcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJlbnRFbCAgIHJvb3QgZWxlbWVudCBvciBmcmFnIGJsb2NrXG4gKiBAcGFyYW0ge29iamVjdH0gbWVyZ2VkRGF0YSBleHRlcm5hbCBkYXRhXG4gKiBAcGFyYW0ge29iamVjdH0gZXh0ZXJuYWxFdmVudHMgZXh0ZXJuYWwgZXZlbnRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZtIChcbiAgdHlwZSxcbiAgb3B0aW9ucyxcbiAgcGFyZW50Vm0sXG4gIHBhcmVudEVsLFxuICBtZXJnZWREYXRhLFxuICBleHRlcm5hbEV2ZW50c1xuKSB7XG4gIHRoaXMuX3BhcmVudCA9IHBhcmVudFZtLl9yZWFsUGFyZW50ID8gcGFyZW50Vm0uX3JlYWxQYXJlbnQgOiBwYXJlbnRWbVxuICB0aGlzLl9hcHAgPSBwYXJlbnRWbS5fYXBwXG4gIHBhcmVudFZtLl9jaGlsZHJlblZtcyAmJiBwYXJlbnRWbS5fY2hpbGRyZW5WbXMucHVzaCh0aGlzKVxuXG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB0aGlzLl9hcHAuY3VzdG9tQ29tcG9uZW50TWFwW3R5cGVdIHx8IHt9XG4gIH1cbiAgY29uc3QgZGF0YSA9IG9wdGlvbnMuZGF0YSB8fCB7fVxuXG4gIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zXG4gIHRoaXMuX21ldGhvZHMgPSBvcHRpb25zLm1ldGhvZHMgfHwge31cbiAgdGhpcy5fY29tcHV0ZWQgPSBvcHRpb25zLmNvbXB1dGVkIHx8IHt9XG4gIHRoaXMuX2NzcyA9IG9wdGlvbnMuc3R5bGUgfHwge31cbiAgdGhpcy5faWRzID0ge31cbiAgdGhpcy5fdm1FdmVudHMgPSB7fVxuICB0aGlzLl9jaGlsZHJlblZtcyA9IFtdXG4gIHRoaXMuX3R5cGUgPSB0eXBlXG5cbiAgLy8gYmluZCBldmVudHMgYW5kIGxpZmVjeWNsZXNcbiAgdGhpcy5faW5pdEV2ZW50cyhleHRlcm5hbEV2ZW50cylcblxuICBfLmRlYnVnKGBcImluaXRcIiBsaWZlY3ljbGUgaW4gVm0oJHt0aGlzLl90eXBlfSlgKVxuICB0aGlzLiRlbWl0KCdob29rOmluaXQnKVxuICB0aGlzLl9pbml0ZWQgPSB0cnVlXG4gIC8vIHByb3h5IGRhdGEgYW5kIG1ldGhvZHNcbiAgLy8gb2JzZXJ2ZSBkYXRhIGFuZCBhZGQgdGhpcyB0byB2bXNcbiAgdGhpcy5fZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nID8gZGF0YSgpIDogZGF0YVxuICBpZiAobWVyZ2VkRGF0YSkge1xuICAgIF8uZXh0ZW5kKHRoaXMuX2RhdGEsIG1lcmdlZERhdGEpXG4gIH1cbiAgdGhpcy5faW5pdFN0YXRlKClcblxuICBfLmRlYnVnKGBcImNyZWF0ZWRcIiBsaWZlY3ljbGUgaW4gVm0oJHt0aGlzLl90eXBlfSlgKVxuICB0aGlzLiRlbWl0KCdob29rOmNyZWF0ZWQnKVxuICB0aGlzLl9jcmVhdGVkID0gdHJ1ZVxuICAvLyBiYWNrd2FyZCBvbGQgcmVhZHkgZW50cnlcbiAgY2FsbE9sZFJlYWR5RW50cnkodGhpcywgb3B0aW9ucylcblxuICAvLyBpZiBubyBwYXJlbnRFbGVtZW50IHRoZW4gc3BlY2lmeSB0aGUgZG9jdW1lbnRFbGVtZW50XG4gIHRoaXMuX3BhcmVudEVsID0gcGFyZW50RWwgfHwgdGhpcy5fYXBwLmRvYy5kb2N1bWVudEVsZW1lbnRcbiAgdGhpcy5fYnVpbGQoKVxufVxuXG5fLmV4dGVuZChWbS5wcm90b3R5cGUsIHN0YXRlLCBjb21waWxlciwgZGlyZWN0aXZlLCBkb21IZWxwZXIsIGV2ZW50cylcbl8uZXh0ZW5kKFZtLCB7XG4gIHJlZ2lzdGVyTW9kdWxlcyxcbiAgcmVnaXN0ZXJNZXRob2RzXG59KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9kZWZhdWx0L3ZtL2luZGV4LmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IFdhdGNoZXIgZnJvbSAnLi93YXRjaGVyJ1xuaW1wb3J0IERlcCBmcm9tICcuL2RlcCdcbmltcG9ydCB7XG4gIG9ic2VydmUsXG4gIHByb3h5LFxuICB1bnByb3h5XG59IGZyb20gJy4vb2JzZXJ2ZXInXG5pbXBvcnQge1xuICBpc0FycmF5LFxuICBpc1BsYWluT2JqZWN0LFxuICBiaW5kXG59IGZyb20gJy4uL3V0aWwnXG5cbmV4cG9ydCBmdW5jdGlvbiBfaW5pdFN0YXRlICgpIHtcbiAgY29uc3Qgdm0gPSB0aGlzXG4gIHZtLl93YXRjaGVycyA9IFtdXG4gIHZtLl9pbml0RGF0YSgpXG4gIHZtLl9pbml0Q29tcHV0ZWQoKVxuICB2bS5faW5pdE1ldGhvZHMoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2luaXREYXRhICgpIHtcbiAgY29uc3Qgdm0gPSB0aGlzXG4gIGxldCBkYXRhID0gdm0uX2RhdGFcblxuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICBkYXRhID0ge31cbiAgfVxuICAvLyBwcm94eSBkYXRhIG9uIGluc3RhbmNlXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKVxuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBwcm94eSh2bSwga2V5c1tpXSlcbiAgfVxuICAvLyBvYnNlcnZlIGRhdGFcbiAgb2JzZXJ2ZShkYXRhLCB2bSlcbn1cblxuZnVuY3Rpb24gbm9vcCAoKSB7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaW5pdENvbXB1dGVkICgpIHtcbiAgY29uc3Qgdm0gPSB0aGlzXG4gIGNvbnN0IGNvbXB1dGVkID0gdm0uX2NvbXB1dGVkXG4gIGlmIChjb21wdXRlZCkge1xuICAgIGZvciAobGV0IGtleSBpbiBjb21wdXRlZCkge1xuICAgICAgY29uc3QgdXNlckRlZiA9IGNvbXB1dGVkW2tleV1cbiAgICAgIGNvbnN0IGRlZiA9IHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGVmLmdldCA9IG1ha2VDb21wdXRlZEdldHRlcih1c2VyRGVmLCB2bSlcbiAgICAgICAgZGVmLnNldCA9IG5vb3BcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZi5nZXQgPSB1c2VyRGVmLmdldFxuICAgICAgICAgID8gdXNlckRlZi5jYWNoZSAhPT0gZmFsc2VcbiAgICAgICAgICAgID8gbWFrZUNvbXB1dGVkR2V0dGVyKHVzZXJEZWYuZ2V0LCB2bSlcbiAgICAgICAgICAgIDogYmluZCh1c2VyRGVmLmdldCwgdm0pXG4gICAgICAgICAgOiBub29wXG4gICAgICAgIGRlZi5zZXQgPSB1c2VyRGVmLnNldFxuICAgICAgICAgID8gYmluZCh1c2VyRGVmLnNldCwgdm0pXG4gICAgICAgICAgOiBub29wXG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodm0sIGtleSwgZGVmKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlQ29tcHV0ZWRHZXR0ZXIgKGdldHRlciwgb3duZXIpIHtcbiAgY29uc3Qgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKG93bmVyLCBnZXR0ZXIsIG51bGwsIHtcbiAgICBsYXp5OiB0cnVlXG4gIH0pXG4gIHJldHVybiBmdW5jdGlvbiBjb21wdXRlZEdldHRlciAoKSB7XG4gICAgaWYgKHdhdGNoZXIuZGlydHkpIHtcbiAgICAgIHdhdGNoZXIuZXZhbHVhdGUoKVxuICAgIH1cbiAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgd2F0Y2hlci5kZXBlbmQoKVxuICAgIH1cbiAgICByZXR1cm4gd2F0Y2hlci52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaW5pdE1ldGhvZHMgKCkge1xuICBjb25zdCB2bSA9IHRoaXNcbiAgY29uc3QgbWV0aG9kcyA9IHZtLl9tZXRob2RzXG4gIGlmIChtZXRob2RzKSB7XG4gICAgZm9yIChsZXQga2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIHZtW2tleV0gPSBiaW5kKG1ldGhvZHNba2V5XSwgdm0pXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L2RlZmF1bHQvY29yZS9zdGF0ZS5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCBEZXAgZnJvbSAnLi9kZXAnXG4vLyBpbXBvcnQgeyBwdXNoV2F0Y2hlciB9IGZyb20gJy4vYmF0Y2hlcidcbmltcG9ydCB7XG4gIHdhcm4sXG4gIHJlbW92ZSxcbiAgZXh0ZW5kLFxuICBpc0FycmF5LFxuICBpc09iamVjdCxcbiAgcGFyc2VQYXRoLFxuICBfU2V0IGFzIFNldFxufSBmcm9tICcuLi91dGlsJ1xuXG5sZXQgdWlkID0gMFxubGV0IHByZXZUYXJnZXRcblxuLyoqXG4gKiBBIHdhdGNoZXIgcGFyc2VzIGFuIGV4cHJlc3Npb24sIGNvbGxlY3RzIGRlcGVuZGVuY2llcyxcbiAqIGFuZCBmaXJlcyBjYWxsYmFjayB3aGVuIHRoZSBleHByZXNzaW9uIHZhbHVlIGNoYW5nZXMuXG4gKiBUaGlzIGlzIHVzZWQgZm9yIGJvdGggdGhlICR3YXRjaCgpIGFwaSBhbmQgZGlyZWN0aXZlcy5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBleHBPckZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqICAgICAgICAgICAgICAgICAtIHtBcnJheX0gZmlsdGVyc1xuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHR3b1dheVxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IGRlZXBcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSB1c2VyXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gc3luY1xuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IGxhenlcbiAqICAgICAgICAgICAgICAgICAtIHtGdW5jdGlvbn0gW3ByZVByb2Nlc3NdXG4gKiAgICAgICAgICAgICAgICAgLSB7RnVuY3Rpb259IFtwb3N0UHJvY2Vzc11cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhdGNoZXIgKHZtLCBleHBPckZuLCBjYiwgb3B0aW9ucykge1xuICAvLyBtaXggaW4gb3B0aW9uc1xuICBpZiAob3B0aW9ucykge1xuICAgIGV4dGVuZCh0aGlzLCBvcHRpb25zKVxuICB9XG4gIGNvbnN0IGlzRm4gPSB0eXBlb2YgZXhwT3JGbiA9PT0gJ2Z1bmN0aW9uJ1xuICB0aGlzLnZtID0gdm1cbiAgdm0uX3dhdGNoZXJzLnB1c2godGhpcylcbiAgdGhpcy5leHByZXNzaW9uID0gZXhwT3JGblxuICB0aGlzLmNiID0gY2JcbiAgdGhpcy5pZCA9ICsrdWlkIC8vIHVpZCBmb3IgYmF0Y2hpbmdcbiAgdGhpcy5hY3RpdmUgPSB0cnVlXG4gIHRoaXMuZGlydHkgPSB0aGlzLmxhenkgLy8gZm9yIGxhenkgd2F0Y2hlcnNcbiAgdGhpcy5kZXBzID0gW11cbiAgdGhpcy5uZXdEZXBzID0gW11cbiAgdGhpcy5kZXBJZHMgPSBuZXcgU2V0KClcbiAgdGhpcy5uZXdEZXBJZHMgPSBuZXcgU2V0KClcbiAgLy8gcGFyc2UgZXhwcmVzc2lvbiBmb3IgZ2V0dGVyXG4gIGlmIChpc0ZuKSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBleHBPckZuXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBwYXJzZVBhdGgoZXhwT3JGbilcbiAgICBpZiAoIXRoaXMuZ2V0dGVyKSB7XG4gICAgICB0aGlzLmdldHRlciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICdGYWlsZWQgd2F0Y2hpbmcgcGF0aDogJyArIGV4cE9yRm4gK1xuICAgICAgICAnV2F0Y2hlciBvbmx5IGFjY2VwdHMgc2ltcGxlIGRvdC1kZWxpbWl0ZWQgcGF0aHMuICcgK1xuICAgICAgICAnRm9yIGZ1bGwgY29udHJvbCwgdXNlIGEgZnVuY3Rpb24gaW5zdGVhZC4nLFxuICAgICAgICB2bVxuICAgICAgKVxuICAgIH1cbiAgfVxuICB0aGlzLnZhbHVlID0gdGhpcy5sYXp5XG4gICAgPyB1bmRlZmluZWRcbiAgICA6IHRoaXMuZ2V0KClcbiAgLy8gc3RhdGUgZm9yIGF2b2lkaW5nIGZhbHNlIHRyaWdnZXJzIGZvciBkZWVwIGFuZCBBcnJheVxuICAvLyB3YXRjaGVycyBkdXJpbmcgdm0uX2RpZ2VzdCgpXG4gIHRoaXMucXVldWVkID0gdGhpcy5zaGFsbG93ID0gZmFsc2Vcbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgZ2V0dGVyLCBhbmQgcmUtY29sbGVjdCBkZXBlbmRlbmNpZXMuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmJlZm9yZUdldCgpXG4gIGNvbnN0IHZhbHVlID0gdGhpcy5nZXR0ZXIuY2FsbCh0aGlzLnZtLCB0aGlzLnZtKVxuICAvLyBcInRvdWNoXCIgZXZlcnkgcHJvcGVydHkgc28gdGhleSBhcmUgYWxsIHRyYWNrZWQgYXNcbiAgLy8gZGVwZW5kZW5jaWVzIGZvciBkZWVwIHdhdGNoaW5nXG4gIGlmICh0aGlzLmRlZXApIHtcbiAgICB0cmF2ZXJzZSh2YWx1ZSlcbiAgfVxuICB0aGlzLmFmdGVyR2V0KClcbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogUHJlcGFyZSBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmJlZm9yZUdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcHJldlRhcmdldCA9IERlcC50YXJnZXRcbiAgRGVwLnRhcmdldCA9IHRoaXNcbn1cblxuLyoqXG4gKiBBZGQgYSBkZXBlbmRlbmN5IHRvIHRoaXMgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7RGVwfSBkZXBcbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5hZGREZXAgPSBmdW5jdGlvbiAoZGVwKSB7XG4gIGNvbnN0IGlkID0gZGVwLmlkXG4gIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGlkKSkge1xuICAgIHRoaXMubmV3RGVwSWRzLmFkZChpZClcbiAgICB0aGlzLm5ld0RlcHMucHVzaChkZXApXG4gICAgaWYgKCF0aGlzLmRlcElkcy5oYXMoaWQpKSB7XG4gICAgICBkZXAuYWRkU3ViKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2xlYW4gdXAgZm9yIGRlcGVuZGVuY3kgY29sbGVjdGlvbi5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5hZnRlckdldCA9IGZ1bmN0aW9uICgpIHtcbiAgRGVwLnRhcmdldCA9IHByZXZUYXJnZXRcbiAgbGV0IGkgPSB0aGlzLmRlcHMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBjb25zdCBkZXAgPSB0aGlzLmRlcHNbaV1cbiAgICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhkZXAuaWQpKSB7XG4gICAgICBkZXAucmVtb3ZlU3ViKHRoaXMpXG4gICAgfVxuICB9XG4gIGxldCB0bXAgPSB0aGlzLmRlcElkc1xuICB0aGlzLmRlcElkcyA9IHRoaXMubmV3RGVwSWRzXG4gIHRoaXMubmV3RGVwSWRzID0gdG1wXG4gIHRoaXMubmV3RGVwSWRzLmNsZWFyKClcbiAgdG1wID0gdGhpcy5kZXBzXG4gIHRoaXMuZGVwcyA9IHRoaXMubmV3RGVwc1xuICB0aGlzLm5ld0RlcHMgPSB0bXBcbiAgdGhpcy5uZXdEZXBzLmxlbmd0aCA9IDBcbn1cblxuLyoqXG4gKiBTdWJzY3JpYmVyIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gYSBkZXBlbmRlbmN5IGNoYW5nZXMuXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBzaGFsbG93XG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHNoYWxsb3cpIHtcbiAgaWYgKHRoaXMubGF6eSkge1xuICAgIHRoaXMuZGlydHkgPSB0cnVlXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5ydW4oKVxuICB9XG4gIC8vIH0gZWxzZSBpZiAodGhpcy5zeW5jKSB7XG4gIC8vICAgdGhpcy5ydW4oKVxuICAvLyB9IGVsc2Uge1xuICAvLyAgIC8vIGlmIHF1ZXVlZCwgb25seSBvdmVyd3JpdGUgc2hhbGxvdyB3aXRoIG5vbi1zaGFsbG93LFxuICAvLyAgIC8vIGJ1dCBub3QgdGhlIG90aGVyIHdheSBhcm91bmQuXG4gIC8vICAgdGhpcy5zaGFsbG93ID0gdGhpcy5xdWV1ZWRcbiAgLy8gICAgID8gc2hhbGxvd1xuICAvLyAgICAgICA/IHRoaXMuc2hhbGxvd1xuICAvLyAgICAgICA6IGZhbHNlXG4gIC8vICAgICA6ICEhc2hhbGxvd1xuICAvLyAgIHRoaXMucXVldWVkID0gdHJ1ZVxuICAvLyAgIHB1c2hXYXRjaGVyKHRoaXMpXG4gIC8vIH1cbn1cblxuLyoqXG4gKiBCYXRjaGVyIGpvYiBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgYmF0Y2hlci5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXQoKVxuICAgIGlmIChcbiAgICAgIHZhbHVlICE9PSB0aGlzLnZhbHVlIHx8XG4gICAgICAvLyBEZWVwIHdhdGNoZXJzIGFuZCB3YXRjaGVycyBvbiBPYmplY3QvQXJyYXlzIHNob3VsZCBmaXJlIGV2ZW5cbiAgICAgIC8vIHdoZW4gdGhlIHZhbHVlIGlzIHRoZSBzYW1lLCBiZWNhdXNlIHRoZSB2YWx1ZSBtYXlcbiAgICAgIC8vIGhhdmUgbXV0YXRlZDsgYnV0IG9ubHkgZG8gc28gaWYgdGhpcyBpcyBhXG4gICAgICAvLyBub24tc2hhbGxvdyB1cGRhdGUgKGNhdXNlZCBieSBhIHZtIGRpZ2VzdCkuXG4gICAgICAoKGlzT2JqZWN0KHZhbHVlKSB8fCB0aGlzLmRlZXApICYmICF0aGlzLnNoYWxsb3cpXG4gICAgKSB7XG4gICAgICAvLyBzZXQgbmV3IHZhbHVlXG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMudmFsdWVcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSlcbiAgICB9XG4gICAgdGhpcy5xdWV1ZWQgPSB0aGlzLnNoYWxsb3cgPSBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIHZhbHVlIG9mIHRoZSB3YXRjaGVyLlxuICogVGhpcyBvbmx5IGdldHMgY2FsbGVkIGZvciBsYXp5IHdhdGNoZXJzLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmV2YWx1YXRlID0gZnVuY3Rpb24gKCkge1xuICAvLyBhdm9pZCBvdmVyd3JpdGluZyBhbm90aGVyIHdhdGNoZXIgdGhhdCBpcyBiZWluZ1xuICAvLyBjb2xsZWN0ZWQuXG4gIGNvbnN0IGN1cnJlbnQgPSBEZXAudGFyZ2V0XG4gIHRoaXMudmFsdWUgPSB0aGlzLmdldCgpXG4gIHRoaXMuZGlydHkgPSBmYWxzZVxuICBEZXAudGFyZ2V0ID0gY3VycmVudFxufVxuXG4vKipcbiAqIERlcGVuZCBvbiBhbGwgZGVwcyBjb2xsZWN0ZWQgYnkgdGhpcyB3YXRjaGVyLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGkgPSB0aGlzLmRlcHMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICB0aGlzLmRlcHNbaV0uZGVwZW5kKClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBzZWxmIGZyb20gYWxsIGRlcGVuZGVuY2llcycgc3ViY3JpYmVyIGxpc3QuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gdm0ncyB3YXRjaGVyIGxpc3RcbiAgICAvLyB0aGlzIGlzIGEgc29tZXdoYXQgZXhwZW5zaXZlIG9wZXJhdGlvbiBzbyB3ZSBza2lwIGl0XG4gICAgLy8gaWYgdGhlIHZtIGlzIGJlaW5nIGRlc3Ryb3llZCBvciBpcyBwZXJmb3JtaW5nIGEgdi1mb3JcbiAgICAvLyByZS1yZW5kZXIgKHRoZSB3YXRjaGVyIGxpc3QgaXMgdGhlbiBmaWx0ZXJlZCBieSB2LWZvcikuXG4gICAgaWYgKCF0aGlzLnZtLl9pc0JlaW5nRGVzdHJveWVkICYmICF0aGlzLnZtLl92Rm9yUmVtb3ZpbmcpIHtcbiAgICAgIHJlbW92ZSh0aGlzLnZtLl93YXRjaGVycywgdGhpcylcbiAgICB9XG4gICAgbGV0IGkgPSB0aGlzLmRlcHMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5kZXBzW2ldLnJlbW92ZVN1Yih0aGlzKVxuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlXG4gICAgdGhpcy52bSA9IHRoaXMuY2IgPSB0aGlzLnZhbHVlID0gbnVsbFxuICB9XG59XG5cbi8qKlxuICogUmVjcnVzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcbiAqIGdldHRlcnMsIHNvIHRoYXQgZXZlcnkgbmVzdGVkIHByb3BlcnR5IGluc2lkZSB0aGUgb2JqZWN0XG4gKiBpcyBjb2xsZWN0ZWQgYXMgYSBcImRlZXBcIiBkZXBlbmRlbmN5LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcGFyYW0ge1NldH0gc2VlblxuICovXG5cbmNvbnN0IHNlZW5PYmplY3RzID0gbmV3IFNldCgpXG5mdW5jdGlvbiB0cmF2ZXJzZSAodmFsLCBzZWVuKSB7XG4gIGxldCBpLCBrZXlzLCBpc0EsIGlzT1xuICBpZiAoIXNlZW4pIHtcbiAgICBzZWVuID0gc2Vlbk9iamVjdHNcbiAgICBzZWVuLmNsZWFyKClcbiAgfVxuICBpc0EgPSBpc0FycmF5KHZhbClcbiAgaXNPID0gaXNPYmplY3QodmFsKVxuICBpZiAoaXNBIHx8IGlzTykge1xuICAgIGlmICh2YWwuX19vYl9fKSB7XG4gICAgICBjb25zdCBkZXBJZCA9IHZhbC5fX29iX18uZGVwLmlkXG4gICAgICBpZiAoc2Vlbi5oYXMoZGVwSWQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vlbi5hZGQoZGVwSWQpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0EpIHtcbiAgICAgIGkgPSB2YWwubGVuZ3RoXG4gICAgICB3aGlsZSAoaS0tKSB0cmF2ZXJzZSh2YWxbaV0sIHNlZW4pXG4gICAgfSBlbHNlIGlmIChpc08pIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpXG4gICAgICBpID0ga2V5cy5sZW5ndGhcbiAgICAgIHdoaWxlIChpLS0pIHRyYXZlcnNlKHZhbFtrZXlzW2ldXSwgc2VlbilcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvaHRtbDUvZGVmYXVsdC9jb3JlL3dhdGNoZXIuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgeyByZW1vdmUgfSBmcm9tICcuLi91dGlsJ1xuXG5sZXQgdWlkID0gMFxuXG4vKipcbiAqIEEgZGVwIGlzIGFuIG9ic2VydmFibGUgdGhhdCBjYW4gaGF2ZSBtdWx0aXBsZVxuICogZGlyZWN0aXZlcyBzdWJzY3JpYmluZyB0byBpdC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXAgKCkge1xuICB0aGlzLmlkID0gdWlkKytcbiAgdGhpcy5zdWJzID0gW11cbn1cblxuLy8gdGhlIGN1cnJlbnQgdGFyZ2V0IHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkLlxuLy8gdGhpcyBpcyBnbG9iYWxseSB1bmlxdWUgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvbmx5IG9uZVxuLy8gd2F0Y2hlciBiZWluZyBldmFsdWF0ZWQgYXQgYW55IHRpbWUuXG5EZXAudGFyZ2V0ID0gbnVsbFxuXG4vKipcbiAqIEFkZCBhIGRpcmVjdGl2ZSBzdWJzY3JpYmVyLlxuICpcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSBzdWJcbiAqL1xuXG5EZXAucHJvdG90eXBlLmFkZFN1YiA9IGZ1bmN0aW9uIChzdWIpIHtcbiAgdGhpcy5zdWJzLnB1c2goc3ViKVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGRpcmVjdGl2ZSBzdWJzY3JpYmVyLlxuICpcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSBzdWJcbiAqL1xuXG5EZXAucHJvdG90eXBlLnJlbW92ZVN1YiA9IGZ1bmN0aW9uIChzdWIpIHtcbiAgcmVtb3ZlKHRoaXMuc3Vicywgc3ViKVxufVxuXG4vKipcbiAqIEFkZCBzZWxmIGFzIGEgZGVwZW5kZW5jeSB0byB0aGUgdGFyZ2V0IHdhdGNoZXIuXG4gKi9cblxuRGVwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiAoKSB7XG4gIERlcC50YXJnZXQuYWRkRGVwKHRoaXMpXG59XG5cbi8qKlxuICogTm90aWZ5IGFsbCBzdWJzY3JpYmVycyBvZiBhIG5ldyB2YWx1ZS5cbiAqL1xuXG5EZXAucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gc3RhYmxpemUgdGhlIHN1YnNjcmliZXIgbGlzdCBmaXJzdFxuICBjb25zdCBzdWJzID0gdGhpcy5zdWJzLnNsaWNlKClcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdWJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHN1YnNbaV0udXBkYXRlKClcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9kZWZhdWx0L2NvcmUvZGVwLmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IERlcCBmcm9tICcuL2RlcCdcbmltcG9ydCB7IGFycmF5TWV0aG9kcyB9IGZyb20gJy4vYXJyYXknXG5pbXBvcnQge1xuICBkZWYsXG4gIHJlbW92ZSxcbiAgaXNBcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3QsXG4gIGhhc1Byb3RvLFxuICBoYXNPd24sXG4gIGlzUmVzZXJ2ZWRcbn0gZnJvbSAnLi4vdXRpbCdcblxuY29uc3QgYXJyYXlLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXJyYXlNZXRob2RzKVxuXG4vKipcbiAqIE9ic2VydmVyIGNsYXNzIHRoYXQgYXJlIGF0dGFjaGVkIHRvIGVhY2ggb2JzZXJ2ZWRcbiAqIG9iamVjdC4gT25jZSBhdHRhY2hlZCwgdGhlIG9ic2VydmVyIGNvbnZlcnRzIHRhcmdldFxuICogb2JqZWN0J3MgcHJvcGVydHkga2V5cyBpbnRvIGdldHRlci9zZXR0ZXJzIHRoYXRcbiAqIGNvbGxlY3QgZGVwZW5kZW5jaWVzIGFuZCBkaXNwYXRjaGVzIHVwZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IHZhbHVlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gT2JzZXJ2ZXIgKHZhbHVlKSB7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB0aGlzLmRlcCA9IG5ldyBEZXAoKVxuICBkZWYodmFsdWUsICdfX29iX18nLCB0aGlzKVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBjb25zdCBhdWdtZW50ID0gaGFzUHJvdG9cbiAgICAgID8gcHJvdG9BdWdtZW50XG4gICAgICA6IGNvcHlBdWdtZW50XG4gICAgYXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpXG4gICAgdGhpcy5vYnNlcnZlQXJyYXkodmFsdWUpXG4gIH0gZWxzZSB7XG4gICAgdGhpcy53YWxrKHZhbHVlKVxuICB9XG59XG5cbi8vIEluc3RhbmNlIG1ldGhvZHNcblxuLyoqXG4gKiBXYWxrIHRocm91Z2ggZWFjaCBwcm9wZXJ0eSBhbmQgY29udmVydCB0aGVtIGludG9cbiAqIGdldHRlci9zZXR0ZXJzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlblxuICogdmFsdWUgdHlwZSBpcyBPYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS53YWxrID0gZnVuY3Rpb24gKG9iaikge1xuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgdGhpcy5jb252ZXJ0KGtleSwgb2JqW2tleV0pXG4gIH1cbn1cblxuLyoqXG4gKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlQXJyYXkgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBvYnNlcnZlKGl0ZW1zW2ldKVxuICB9XG59XG5cbi8qKlxuICogQ29udmVydCBhIHByb3BlcnR5IGludG8gZ2V0dGVyL3NldHRlciBzbyB3ZSBjYW4gZW1pdFxuICogdGhlIGV2ZW50cyB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZC9jaGFuZ2VkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLmNvbnZlcnQgPSBmdW5jdGlvbiAoa2V5LCB2YWwpIHtcbiAgZGVmaW5lUmVhY3RpdmUodGhpcy52YWx1ZSwga2V5LCB2YWwpXG59XG5cbi8qKlxuICogQWRkIGFuIG93bmVyIHZtLCBzbyB0aGF0IHdoZW4gJHNldC8kZGVsZXRlIG11dGF0aW9uc1xuICogaGFwcGVuIHdlIGNhbiBub3RpZnkgb3duZXIgdm1zIHRvIHByb3h5IHRoZSBrZXlzIGFuZFxuICogZGlnZXN0IHRoZSB3YXRjaGVycy4gVGhpcyBpcyBvbmx5IGNhbGxlZCB3aGVuIHRoZSBvYmplY3RcbiAqIGlzIG9ic2VydmVkIGFzIGFuIGluc3RhbmNlJ3Mgcm9vdCAkZGF0YS5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUuYWRkVm0gPSBmdW5jdGlvbiAodm0pIHtcbiAgKHRoaXMudm1zIHx8ICh0aGlzLnZtcyA9IFtdKSkucHVzaCh2bSlcbn1cblxuLyoqXG4gKiBSZW1vdmUgYW4gb3duZXIgdm0uIFRoaXMgaXMgY2FsbGVkIHdoZW4gdGhlIG9iamVjdCBpc1xuICogc3dhcHBlZCBvdXQgYXMgYW4gaW5zdGFuY2UncyAkZGF0YSBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLnJlbW92ZVZtID0gZnVuY3Rpb24gKHZtKSB7XG4gIHJlbW92ZSh0aGlzLnZtcywgdm0pXG59XG5cbi8vIGhlbHBlcnNcblxuLyoqXG4gKiBBdWdtZW50IGFuIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgaW50ZXJjZXB0aW5nXG4gKiB0aGUgcHJvdG90eXBlIGNoYWluIHVzaW5nIF9fcHJvdG9fX1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSB0YXJnZXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzcmNcbiAqL1xuXG5mdW5jdGlvbiBwcm90b0F1Z21lbnQgKHRhcmdldCwgc3JjKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG4gIHRhcmdldC5fX3Byb3RvX18gPSBzcmNcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xufVxuXG4vKipcbiAqIEF1Z21lbnQgYW4gdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBkZWZpbmluZ1xuICogaGlkZGVuIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvXG4gKi9cblxuZnVuY3Rpb24gY29weUF1Z21lbnQgKHRhcmdldCwgc3JjLCBrZXlzKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgZGVmKHRhcmdldCwga2V5LCBzcmNba2V5XSlcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gY3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlIGZvciBhIHZhbHVlLFxuICogcmV0dXJucyB0aGUgbmV3IG9ic2VydmVyIGlmIHN1Y2Nlc3NmdWxseSBvYnNlcnZlZCxcbiAqIG9yIHRoZSBleGlzdGluZyBvYnNlcnZlciBpZiB0aGUgdmFsdWUgYWxyZWFkeSBoYXMgb25lLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7VnVlfSBbdm1dXG4gKiBAcmV0dXJuIHtPYnNlcnZlcnx1bmRlZmluZWR9XG4gKiBAc3RhdGljXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmUgKHZhbHVlLCB2bSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVyblxuICB9XG4gIGxldCBvYlxuICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICBvYiA9IHZhbHVlLl9fb2JfX1xuICB9IGVsc2UgaWYgKFxuICAgIChpc0FycmF5KHZhbHVlKSB8fCBpc1BsYWluT2JqZWN0KHZhbHVlKSkgJiZcbiAgICBPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKSAmJlxuICAgICF2YWx1ZS5faXNWdWVcbiAgKSB7XG4gICAgb2IgPSBuZXcgT2JzZXJ2ZXIodmFsdWUpXG4gIH1cbiAgaWYgKG9iICYmIHZtKSB7XG4gICAgb2IuYWRkVm0odm0pXG4gIH1cbiAgcmV0dXJuIG9iXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcmVhY3RpdmUgcHJvcGVydHkgb24gYW4gT2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZVJlYWN0aXZlIChvYmosIGtleSwgdmFsKSB7XG4gIGNvbnN0IGRlcCA9IG5ldyBEZXAoKVxuXG4gIGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSlcbiAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xuICBjb25zdCBnZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5nZXRcbiAgY29uc3Qgc2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuc2V0XG5cbiAgbGV0IGNoaWxkT2IgPSBvYnNlcnZlKHZhbClcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiByZWFjdGl2ZUdldHRlciAoKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWxcbiAgICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICAgIGRlcC5kZXBlbmQoKVxuICAgICAgICBpZiAoY2hpbGRPYikge1xuICAgICAgICAgIGNoaWxkT2IuZGVwLmRlcGVuZCgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgZm9yIChsZXQgZSwgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGUgPSB2YWx1ZVtpXVxuICAgICAgICAgICAgZSAmJiBlLl9fb2JfXyAmJiBlLl9fb2JfXy5kZXAuZGVwZW5kKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiByZWFjdGl2ZVNldHRlciAobmV3VmFsKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWxcbiAgICAgIGlmIChuZXdWYWwgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHNldHRlcikge1xuICAgICAgICBzZXR0ZXIuY2FsbChvYmosIG5ld1ZhbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IG5ld1ZhbFxuICAgICAgfVxuICAgICAgY2hpbGRPYiA9IG9ic2VydmUobmV3VmFsKVxuICAgICAgZGVwLm5vdGlmeSgpXG4gICAgfVxuICB9KVxufVxuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IG9uIGFuIG9iamVjdC4gQWRkcyB0aGUgbmV3IHByb3BlcnR5IGFuZFxuICogdHJpZ2dlcnMgY2hhbmdlIG5vdGlmaWNhdGlvbiBpZiB0aGUgcHJvcGVydHkgZG9lc24ndFxuICogYWxyZWFkeSBleGlzdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQgKG9iaiwga2V5LCB2YWwpIHtcbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmouc3BsaWNlKGtleSwgMSwgdmFsKVxuICB9XG4gIGlmIChoYXNPd24ob2JqLCBrZXkpKSB7XG4gICAgb2JqW2tleV0gPSB2YWxcbiAgICByZXR1cm5cbiAgfVxuICBpZiAob2JqLl9pc1Z1ZSkge1xuICAgIHNldChvYmouX2RhdGEsIGtleSwgdmFsKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IG9iID0gb2JqLl9fb2JfX1xuICBpZiAoIW9iKSB7XG4gICAgb2JqW2tleV0gPSB2YWxcbiAgICByZXR1cm5cbiAgfVxuICBvYi5jb252ZXJ0KGtleSwgdmFsKVxuICBvYi5kZXAubm90aWZ5KClcbiAgaWYgKG9iLnZtcykge1xuICAgIGxldCBpID0gb2Iudm1zLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNvbnN0IHZtID0gb2Iudm1zW2ldXG4gICAgICBwcm94eSh2bSwga2V5KVxuICAgICAgdm0uJGZvcmNlVXBkYXRlKClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG4vKipcbiAqIERlbGV0ZSBhIHByb3BlcnR5IGFuZCB0cmlnZ2VyIGNoYW5nZSBpZiBuZWNlc3NhcnkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWwgKG9iaiwga2V5KSB7XG4gIGlmICghaGFzT3duKG9iaiwga2V5KSkge1xuICAgIHJldHVyblxuICB9XG4gIGRlbGV0ZSBvYmpba2V5XVxuICBjb25zdCBvYiA9IG9iai5fX29iX19cblxuICBpZiAoIW9iKSB7XG4gICAgaWYgKG9iai5faXNWdWUpIHtcbiAgICAgIGRlbGV0ZSBvYmouX2RhdGFba2V5XVxuICAgICAgb2JqLiRmb3JjZVVwZGF0ZSgpXG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIG9iLmRlcC5ub3RpZnkoKVxuICBpZiAob2Iudm1zKSB7XG4gICAgbGV0IGkgPSBvYi52bXMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY29uc3Qgdm0gPSBvYi52bXNbaV1cbiAgICAgIHVucHJveHkodm0sIGtleSlcbiAgICAgIHZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IEtFWV9XT1JEUyA9IFsnJGluZGV4JywgJyR2YWx1ZScsICckZXZlbnQnXVxuZXhwb3J0IGZ1bmN0aW9uIHByb3h5ICh2bSwga2V5KSB7XG4gIGlmIChLRVlfV09SRFMuaW5kZXhPZihrZXkpID4gLTEgfHwgIWlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2bSwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBwcm94eUdldHRlciAoKSB7XG4gICAgICAgIHJldHVybiB2bS5fZGF0YVtrZXldXG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBwcm94eVNldHRlciAodmFsKSB7XG4gICAgICAgIHZtLl9kYXRhW2tleV0gPSB2YWxcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnByb3h5ICh2bSwga2V5KSB7XG4gIGlmICghaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgZGVsZXRlIHZtW2tleV1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9kZWZhdWx0L2NvcmUvb2JzZXJ2ZXIuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgeyBkZWYgfSBmcm9tICcuLi91dGlsJ1xuXG5jb25zdCBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlXG5leHBvcnQgY29uc3QgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKVxuXG4vKipcbiAqIEludGVyY2VwdCBtdXRhdGluZyBtZXRob2RzIGFuZCBlbWl0IGV2ZW50c1xuICovXG5cbjtbXG4gICdwdXNoJyxcbiAgJ3BvcCcsXG4gICdzaGlmdCcsXG4gICd1bnNoaWZ0JyxcbiAgJ3NwbGljZScsXG4gICdzb3J0JyxcbiAgJ3JldmVyc2UnXG5dXG4uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICBjb25zdCBvcmlnaW5hbCA9IGFycmF5UHJvdG9bbWV0aG9kXVxuICBkZWYoYXJyYXlNZXRob2RzLCBtZXRob2QsIGZ1bmN0aW9uIG11dGF0b3IgKCkge1xuICAgIC8vIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzOlxuICAgIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2Nsb3N1cmUtd2l0aC1hcmd1bWVudHNcbiAgICBsZXQgaSA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICBjb25zdCBhcmdzID0gbmV3IEFycmF5KGkpXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgIGNvbnN0IG9iID0gdGhpcy5fX29iX19cbiAgICBsZXQgaW5zZXJ0ZWRcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgIGluc2VydGVkID0gYXJnc1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgIGluc2VydGVkID0gYXJnc1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICAgIGlmIChpbnNlcnRlZCkgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKVxuICAgIC8vIG5vdGlmeSBjaGFuZ2VcbiAgICBvYi5kZXAubm90aWZ5KClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pXG59KVxuXG4vKipcbiAqIFN3YXAgdGhlIGVsZW1lbnQgYXQgdGhlIGdpdmVuIGluZGV4IHdpdGggYSBuZXcgdmFsdWVcbiAqIGFuZCBlbWl0cyBjb3JyZXNwb25kaW5nIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm4geyp9IC0gcmVwbGFjZWQgZWxlbWVudFxuICovXG5cbmRlZihcbiAgYXJyYXlQcm90byxcbiAgJyRzZXQnLFxuICBmdW5jdGlvbiAkc2V0IChpbmRleCwgdmFsKSB7XG4gICAgaWYgKGluZGV4ID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IGluZGV4ICsgMVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDEsIHZhbClbMF1cbiAgfVxuKVxuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCB0byByZW1vdmUgdGhlIGVsZW1lbnQgYXQgZ2l2ZW4gaW5kZXguXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbmRlZihcbiAgYXJyYXlQcm90byxcbiAgJyRyZW1vdmUnLFxuICBmdW5jdGlvbiAkcmVtb3ZlIChpbmRleCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICBpbmRleCA9IHRoaXMuaW5kZXhPZihpbmRleClcbiAgICB9XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9kZWZhdWx0L2NvcmUvYXJyYXkuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFZpZXdNb2RlbCB0ZW1wbGF0ZSBwYXJzZXIgJiBkYXRhLWJpbmRpbmcgcHJvY2Vzc1xuICpcbiAqIHJlcXVpcmVkOlxuICogaW5kZXguanM6IFZtXG4gKiBkb20taGVscGVyLmpzOiBfY3JlYXRlRWxlbWVudCwgX2NyZWF0ZUJsb2NrXG4gKiBkb20taGVscGVyLmpzOiBfYXR0YWNoVGFyZ2V0LCBfbW92ZVRhcmdldCwgX3JlbW92ZVRhcmdldFxuICogZGlyZWN0aXZlLmpzOiBfYmluZEVsZW1lbnQsIF9iaW5kU3ViVm0sIF93YXRjaFxuICogZXZlbnRzLmpzOiAkb25cbiAqL1xuXG5pbXBvcnQgKiBhcyBfIGZyb20gJy4uL3V0aWwnXG5cbi8qKlxuICogYnVpbGQoZXh0ZXJuYWxEaXJzKVxuICogICBjcmVhdGVWbSgpXG4gKiAgIG1lcmdlKGV4dGVybmFsRGlycywgZGlycylcbiAqICAgY29tcGlsZSh0ZW1wbGF0ZSwgcGFyZW50Tm9kZSlcbiAqICAgICBpZiAodHlwZSBpcyBjb250ZW50KSBjcmVhdGUgY29udGVudE5vZGVcbiAqICAgICBlbHNlIGlmIChkaXJzIGhhdmUgdi1mb3IpIGZvcmVhY2ggLT4gY3JlYXRlIGNvbnRleHRcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0Rm9yLCBwYXJlbnROb2RlKTogZGlmZihsaXN0KSBvbmNoYW5nZVxuICogICAgIGVsc2UgaWYgKGRpcnMgaGF2ZSB2LWlmKSBhc3NlcnRcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0SWYsIHBhcmVudE5vZGUpOiB0b2dnbGUoc2hvd24pIG9uY2hhbmdlXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBuYXRpdmUpXG4gKiAgICAgICBzZXQoZGlycyk6IHVwZGF0ZShpZC9hdHRyL3N0eWxlL2NsYXNzKSBvbmNoYW5nZVxuICogICAgICAgYXBwZW5kKHRlbXBsYXRlLCBwYXJlbnROb2RlKVxuICogICAgICAgZm9yZWFjaCBjaGlsZE5vZGVzIC0+IGNvbXBpbGUoY2hpbGROb2RlLCB0ZW1wbGF0ZSlcbiAqICAgICBlbHNlIGlmICh0eXBlIGlzIGN1c3RvbSlcbiAqICAgICAgIGFkZENoaWxkVm0odm0sIHBhcmVudFZtKVxuICogICAgICAgYnVpbGQoZXh0ZXJuYWxEaXJzKVxuICogICAgICAgZm9yZWFjaCBjaGlsZE5vZGVzIC0+IGNvbXBpbGUoY2hpbGROb2RlLCB0ZW1wbGF0ZSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9idWlsZCAoKSB7XG4gIGNvbnN0IG9wdCA9IHRoaXMuX29wdGlvbnMgfHwge31cbiAgY29uc3QgdGVtcGxhdGUgPSBvcHQudGVtcGxhdGUgfHwge31cblxuICBpZiAob3B0LnJlcGxhY2UpIHtcbiAgICBpZiAodGVtcGxhdGUuY2hpbGRyZW4gJiYgdGVtcGxhdGUuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLl9jb21waWxlKHRlbXBsYXRlLmNoaWxkcmVuWzBdLCB0aGlzLl9wYXJlbnRFbClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9jb21waWxlKHRlbXBsYXRlLmNoaWxkcmVuLCB0aGlzLl9wYXJlbnRFbClcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgdGhpcy5fY29tcGlsZSh0ZW1wbGF0ZSwgdGhpcy5fcGFyZW50RWwpXG4gIH1cblxuICBfLmRlYnVnKGBcInJlYWR5XCIgbGlmZWN5Y2xlIGluIFZtKCR7dGhpcy5fdHlwZX0pYClcbiAgdGhpcy4kZW1pdCgnaG9vazpyZWFkeScpXG4gIHRoaXMuX3JlYWR5ID0gdHJ1ZVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIGVsZW1lbnRzIGJ5IGNoaWxkIG9yIGNoaWxkcmVuIGFuZCBhcHBlbmQgdG8gcGFyZW50IGVsZW1lbnRzLlxuICogUm9vdCBlbGVtZW50IGluZm8gd291bGQgYmUgbWVyZ2VkIGlmIGhhcy4gVGhlIGZpcnN0IGFyZ3VtZW50IG1heSBiZSBhbiBhcnJheVxuICogaWYgdGhlIHJvb3QgZWxlbWVudCB3aXRoIG9wdGlvbnMucmVwbGFjZSBoYXMgbm90IG9ubHkgb25lIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSAgICAgICBkZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gICAgICAgbWV0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NvbXBpbGUgKHRhcmdldCwgZGVzdCwgbWV0YSkge1xuICBjb25zdCBhcHAgPSB0aGlzLl9hcHAgfHwge31cblxuICBpZiAoYXBwLmxhc3RTaWduYWwgPT09IC0xKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICBpZiAoY29udGV4dC5fdGFyZ2V0SXNGcmFnbWVudCh0YXJnZXQpKSB7XG4gICAgY29udGV4dC5fY29tcGlsZUZyYWdtZW50KHRhcmdldCwgZGVzdCwgbWV0YSlcbiAgICByZXR1cm5cbiAgfVxuICBtZXRhID0gbWV0YSB8fCB7fVxuICBpZiAoY29udGV4dC5fdGFyZ2V0SXNDb250ZW50KHRhcmdldCkpIHtcbiAgICBfLmRlYnVnKCdjb21waWxlIFwiY29udGVudFwiIGJsb2NrIGJ5JywgdGFyZ2V0KVxuICAgIGNvbnRleHQuX2NvbnRlbnQgPSBjb250ZXh0Ll9jcmVhdGVCbG9jayhkZXN0KVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKGNvbnRleHQuX3RhcmdldE5lZWRDaGVja1JlcGVhdCh0YXJnZXQsIG1ldGEpKSB7XG4gICAgXy5kZWJ1ZygnY29tcGlsZSBcInJlcGVhdFwiIGxvZ2ljIGJ5JywgdGFyZ2V0KVxuICAgIGNvbnRleHQuX2NvbXBpbGVSZXBlYXQodGFyZ2V0LCBkZXN0KVxuICAgIHJldHVyblxuICB9XG4gIGlmIChjb250ZXh0Ll90YXJnZXROZWVkQ2hlY2tTaG93bih0YXJnZXQsIG1ldGEpKSB7XG4gICAgXy5kZWJ1ZygnY29tcGlsZSBcImlmXCIgbG9naWMgYnknLCB0YXJnZXQpXG4gICAgY29udGV4dC5fY29tcGlsZVNob3duKHRhcmdldCwgZGVzdCwgbWV0YSlcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCB0eXBlR2V0dGVyID0gbWV0YS50eXBlIHx8IHRhcmdldC50eXBlXG4gIGlmIChjb250ZXh0Ll90YXJnZXROZWVkQ2hlY2tUeXBlKHR5cGVHZXR0ZXIsIG1ldGEpKSB7XG4gICAgY29udGV4dC5fY29tcGlsZVR5cGUodGFyZ2V0LCBkZXN0LCB0eXBlR2V0dGVyLCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHR5cGUgPSB0eXBlR2V0dGVyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGNvbnRleHQuX3RhcmdldElzQ29tcG9zZWQodGFyZ2V0LCB0eXBlKVxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgXy5kZWJ1ZygnY29tcGlsZSBjb21wb3NlZCBjb21wb25lbnQgYnknLCB0YXJnZXQpXG4gICAgY29udGV4dC5fY29tcGlsZUN1c3RvbUNvbXBvbmVudChjb21wb25lbnQsIHRhcmdldCwgZGVzdCwgdHlwZSwgbWV0YSlcbiAgICByZXR1cm5cbiAgfVxuICBfLmRlYnVnKCdjb21waWxlIG5hdGl2ZSBjb21wb25lbnQgYnknLCB0YXJnZXQpXG4gIGNvbnRleHQuX2NvbXBpbGVOYXRpdmVDb21wb25lbnQodGFyZ2V0LCBkZXN0LCB0eXBlKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBpcyBhIGZyYWdtZW50IChhbiBhcnJheSkuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gX3RhcmdldElzRnJhZ21lbnQgKHRhcmdldCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh0YXJnZXQpXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IHR5cGUgaXMgY29udGVudC9zbG90LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIHRhcmdldFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF90YXJnZXRJc0NvbnRlbnQgKHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0LnR5cGUgPT09ICdjb250ZW50JyB8fCB0YXJnZXQudHlwZSA9PT0gJ3Nsb3QnXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IG5lZWQgdG8gY29tcGlsZSBieSBhIGxpc3QuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9ICBtZXRhXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gX3RhcmdldE5lZWRDaGVja1JlcGVhdCAodGFyZ2V0LCBtZXRhKSB7XG4gIHJldHVybiAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgncmVwZWF0JykgJiYgdGFyZ2V0LnJlcGVhdFxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBuZWVkIHRvIGNvbXBpbGUgYnkgYSBib29sZWFuIHZhbHVlLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSAgbWV0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF90YXJnZXROZWVkQ2hlY2tTaG93biAodGFyZ2V0LCBtZXRhKSB7XG4gIHJldHVybiAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgnc2hvd24nKSAmJiB0YXJnZXQuc2hvd25cbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgbmVlZCB0byBjb21waWxlIGJ5IGEgZHluYW1pYyB0eXBlLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ3xmdW5jdGlvbn0gdHlwZUdldHRlclxuICogQHBhcmFtICB7b2JqZWN0fSAgICAgICAgICBtZXRhXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gX3RhcmdldE5lZWRDaGVja1R5cGUgKHR5cGVHZXR0ZXIsIG1ldGEpIHtcbiAgcmV0dXJuICh0eXBlb2YgdHlwZUdldHRlciA9PT0gJ2Z1bmN0aW9uJykgJiYgIW1ldGEuaGFzT3duUHJvcGVydHkoJ3R5cGUnKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoaXMga2luZCBvZiBjb21wb25lbnQgaXMgY29tcG9zZWQuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgdHlwZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF90YXJnZXRJc0NvbXBvc2VkICh0YXJnZXQsIHR5cGUpIHtcbiAgbGV0IGNvbXBvbmVudFxuICBpZiAodGhpcy5fYXBwICYmIHRoaXMuX2FwcC5jdXN0b21Db21wb25lbnRNYXApIHtcbiAgICBjb21wb25lbnQgPSB0aGlzLl9hcHAuY3VzdG9tQ29tcG9uZW50TWFwW3R5cGVdXG4gIH1cbiAgaWYgKHRoaXMuX29wdGlvbnMgJiYgdGhpcy5fb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgY29tcG9uZW50ID0gdGhpcy5fb3B0aW9ucy5jb21wb25lbnRzW3R5cGVdXG4gIH1cbiAgaWYgKHRhcmdldC5jb21wb25lbnQpIHtcbiAgICBjb21wb25lbnQgPSBjb21wb25lbnQgfHwge31cbiAgfVxuICByZXR1cm4gY29tcG9uZW50XG59XG5cbi8qKlxuICogQ29tcGlsZSBhIGxpc3Qgb2YgdGFyZ2V0cy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICogQHBhcmFtIHtvYmplY3R9IG1ldGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jb21waWxlRnJhZ21lbnQgKHRhcmdldCwgZGVzdCwgbWV0YSkge1xuICBjb25zdCBmcmFnQmxvY2sgPSB0aGlzLl9jcmVhdGVCbG9jayhkZXN0KVxuICB0YXJnZXQuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICB0aGlzLl9jb21waWxlKGNoaWxkLCBmcmFnQmxvY2ssIG1ldGEpXG4gIH0pXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHRhcmdldCB3aXRoIHJlcGVhdCBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jb21waWxlUmVwZWF0ICh0YXJnZXQsIGRlc3QpIHtcbiAgY29uc3QgcmVwZWF0ID0gdGFyZ2V0LnJlcGVhdFxuICBjb25zdCBvbGRTdHlsZSA9IHR5cGVvZiByZXBlYXQgPT09ICdmdW5jdGlvbidcbiAgbGV0IGdldHRlciA9IHJlcGVhdC5nZXR0ZXIgfHwgcmVwZWF0LmV4cHJlc3Npb24gfHwgcmVwZWF0XG4gIGlmICh0eXBlb2YgZ2V0dGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgZ2V0dGVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW10gfVxuICB9XG4gIGNvbnN0IGtleSA9IHJlcGVhdC5rZXkgfHwgJyRpbmRleCdcbiAgY29uc3QgdmFsdWUgPSByZXBlYXQudmFsdWUgfHwgJyR2YWx1ZSdcbiAgY29uc3QgdHJhY2tCeSA9IHJlcGVhdC50cmFja0J5IHx8IHRhcmdldC50cmFja0J5IHx8XG4gICAgKHRhcmdldC5hdHRyICYmIHRhcmdldC5hdHRyLnRyYWNrQnkpXG5cbiAgY29uc3QgZnJhZ0Jsb2NrID0gdGhpcy5fY3JlYXRlQmxvY2soZGVzdClcbiAgZnJhZ0Jsb2NrLmNoaWxkcmVuID0gW11cbiAgZnJhZ0Jsb2NrLmRhdGEgPSBbXVxuICBmcmFnQmxvY2sudm1zID0gW11cblxuICB0aGlzLl9iaW5kUmVwZWF0KHRhcmdldCwgZnJhZ0Jsb2NrLCB7IGdldHRlciwga2V5LCB2YWx1ZSwgdHJhY2tCeSwgb2xkU3R5bGUgfSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggaWYgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gbWV0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NvbXBpbGVTaG93biAodGFyZ2V0LCBkZXN0LCBtZXRhKSB7XG4gIGNvbnN0IG5ld01ldGEgPSB7IHNob3duOiB0cnVlIH1cbiAgY29uc3QgZnJhZ0Jsb2NrID0gdGhpcy5fY3JlYXRlQmxvY2soZGVzdClcblxuICBpZiAoZGVzdC5lbGVtZW50ICYmIGRlc3QuY2hpbGRyZW4pIHtcbiAgICBkZXN0LmNoaWxkcmVuLnB1c2goZnJhZ0Jsb2NrKVxuICB9XG5cbiAgaWYgKG1ldGEucmVwZWF0KSB7XG4gICAgbmV3TWV0YS5yZXBlYXQgPSBtZXRhLnJlcGVhdFxuICB9XG5cbiAgdGhpcy5fYmluZFNob3duKHRhcmdldCwgZnJhZ0Jsb2NrLCBuZXdNZXRhKVxufVxuXG4vKipcbiAqIENvbXBpbGUgYSB0YXJnZXQgd2l0aCBkeW5hbWljIGNvbXBvbmVudCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9ICAgZGVzdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gdHlwZUdldHRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NvbXBpbGVUeXBlICh0YXJnZXQsIGRlc3QsIHR5cGVHZXR0ZXIsIG1ldGEpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVHZXR0ZXIuY2FsbCh0aGlzKVxuICBjb25zdCBuZXdNZXRhID0gT2JqZWN0LmFzc2lnbih7IHR5cGUgfSwgbWV0YSlcbiAgY29uc3QgZnJhZ0Jsb2NrID0gdGhpcy5fY3JlYXRlQmxvY2soZGVzdClcblxuICBpZiAoZGVzdC5lbGVtZW50ICYmIGRlc3QuY2hpbGRyZW4pIHtcbiAgICBkZXN0LmNoaWxkcmVuLnB1c2goZnJhZ0Jsb2NrKVxuICB9XG5cbiAgdGhpcy5fd2F0Y2godHlwZUdldHRlciwgKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgbmV3TWV0YSA9IE9iamVjdC5hc3NpZ24oeyB0eXBlOiB2YWx1ZSB9LCBtZXRhKVxuICAgIHRoaXMuX3JlbW92ZUJsb2NrKGZyYWdCbG9jaywgdHJ1ZSlcbiAgICB0aGlzLl9jb21waWxlKHRhcmdldCwgZnJhZ0Jsb2NrLCBuZXdNZXRhKVxuICB9KVxuXG4gIHRoaXMuX2NvbXBpbGUodGFyZ2V0LCBmcmFnQmxvY2ssIG5ld01ldGEpXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIGNvbXBvc2VkIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jb21waWxlQ3VzdG9tQ29tcG9uZW50IChjb21wb25lbnQsIHRhcmdldCwgZGVzdCwgdHlwZSwgbWV0YSkge1xuICBjb25zdCBWbSA9IHRoaXMuY29uc3RydWN0b3JcbiAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgY29uc3Qgc3ViVm0gPSBuZXcgVm0odHlwZSwgY29tcG9uZW50LCBjb250ZXh0LCBkZXN0LCB1bmRlZmluZWQsIHtcbiAgICAnaG9vazppbml0JzogZnVuY3Rpb24gKCkge1xuICAgICAgY29udGV4dC5fc2V0SWQodGFyZ2V0LmlkLCBudWxsLCB0aGlzKVxuICAgICAgLy8gYmluZCB0ZW1wbGF0ZSBlYXJsaWVyIGJlY2F1c2Ugb2YgbGlmZWN5Y2xlIGlzc3Vlc1xuICAgICAgdGhpcy5fZXh0ZXJuYWxCaW5kaW5nID0ge1xuICAgICAgICBwYXJlbnQ6IGNvbnRleHQsXG4gICAgICAgIHRlbXBsYXRlOiB0YXJnZXRcbiAgICAgIH1cbiAgICB9LFxuICAgICdob29rOmNyZWF0ZWQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb250ZXh0Ll9iaW5kU3ViVm0odGhpcywgdGFyZ2V0LCBtZXRhLnJlcGVhdClcbiAgICB9LFxuICAgICdob29rOnJlYWR5JzogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuX2NvbnRlbnQpIHtcbiAgICAgICAgY29udGV4dC5fY29tcGlsZUNoaWxkcmVuKHRhcmdldCwgdGhpcy5fY29udGVudClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIHRoaXMuX2JpbmRTdWJWbUFmdGVySW5pdGlhbGl6ZWQoc3ViVm0sIHRhcmdldClcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBlbGVtZW50IGZyb20gdGVtcGxhdGUgYW5kIGF0dGFjaCB0byB0aGUgZGVzdCBpZiBuZWVkZWQuXG4gKiBUaGUgdGltZSB0byBhdHRhY2ggZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBtb2RlIHN0YXR1cyBpcyBub2RlIG9yIHRyZWUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jb21waWxlTmF0aXZlQ29tcG9uZW50ICh0ZW1wbGF0ZSwgZGVzdCwgdHlwZSkge1xuICB0aGlzLl9hcHBseU5haXR2ZUNvbXBvbmVudE9wdGlvbnModGVtcGxhdGUpXG5cbiAgbGV0IGVsZW1lbnRcbiAgaWYgKGRlc3QucmVmID09PSAnX2RvY3VtZW50RWxlbWVudCcpIHtcbiAgICAvLyBpZiBpdHMgcGFyZW50IGlzIGRvY3VtZW50RWxlbWVudCB0aGVuIGl0J3MgYSBib2R5XG4gICAgXy5kZWJ1ZygnY29tcGlsZSB0byBjcmVhdGUgYm9keSBmb3InLCB0eXBlKVxuICAgIGVsZW1lbnQgPSB0aGlzLl9jcmVhdGVCb2R5KHR5cGUpXG4gIH1cbiAgZWxzZSB7XG4gICAgXy5kZWJ1ZygnY29tcGlsZSB0byBjcmVhdGUgZWxlbWVudCBmb3InLCB0eXBlKVxuICAgIGVsZW1lbnQgPSB0aGlzLl9jcmVhdGVFbGVtZW50KHR5cGUpXG4gIH1cblxuICBpZiAoIXRoaXMuX3Jvb3RFbCkge1xuICAgIHRoaXMuX3Jvb3RFbCA9IGVsZW1lbnRcbiAgICAvLyBiaW5kIGV2ZW50IGVhcmxpZXIgYmVjYXVzZSBvZiBsaWZlY3ljbGUgaXNzdWVzXG4gICAgY29uc3QgYmluZGluZyA9IHRoaXMuX2V4dGVybmFsQmluZGluZyB8fCB7fVxuICAgIGNvbnN0IHRhcmdldCA9IGJpbmRpbmcudGVtcGxhdGVcbiAgICBjb25zdCB2bSA9IGJpbmRpbmcucGFyZW50XG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuZXZlbnRzICYmIHZtICYmIGVsZW1lbnQpIHtcbiAgICAgIGZvciAoY29uc3QgdHlwZSBpbiB0YXJnZXQuZXZlbnRzKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB2bVt0YXJnZXQuZXZlbnRzW3R5cGVdXVxuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnQodHlwZSwgXy5iaW5kKGhhbmRsZXIsIHZtKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuX2JpbmRFbGVtZW50KGVsZW1lbnQsIHRlbXBsYXRlKVxuXG4gIGlmICh0ZW1wbGF0ZS5hdHRyICYmIHRlbXBsYXRlLmF0dHIuYXBwZW5kKSB7IC8vIGJhY2t3YXJkLCBhcHBlbmQgcHJvcCBpbiBhdHRyXG4gICAgdGVtcGxhdGUuYXBwZW5kID0gdGVtcGxhdGUuYXR0ci5hcHBlbmRcbiAgfVxuXG4gIGlmICh0ZW1wbGF0ZS5hcHBlbmQpIHsgLy8gZ2l2ZSB0aGUgYXBwZW5kIGF0dHJpYnV0ZSBmb3IgaW9zIGFkYXB0YXRpb25cbiAgICBlbGVtZW50LmF0dHIgPSBlbGVtZW50LmF0dHIgfHwge31cbiAgICBlbGVtZW50LmF0dHIuYXBwZW5kID0gdGVtcGxhdGUuYXBwZW5kXG4gIH1cblxuICBjb25zdCB0cmVlTW9kZSA9IHRlbXBsYXRlLmFwcGVuZCA9PT0gJ3RyZWUnXG4gIGNvbnN0IGFwcCA9IHRoaXMuX2FwcCB8fCB7fVxuICBpZiAoYXBwLmxhc3RTaWduYWwgIT09IC0xICYmICF0cmVlTW9kZSkge1xuICAgIF8uZGVidWcoJ2NvbXBpbGUgdG8gYXBwZW5kIHNpbmdsZSBub2RlIGZvcicsIGVsZW1lbnQpXG4gICAgYXBwLmxhc3RTaWduYWwgPSB0aGlzLl9hdHRhY2hUYXJnZXQoZWxlbWVudCwgZGVzdClcbiAgfVxuICBpZiAoYXBwLmxhc3RTaWduYWwgIT09IC0xKSB7XG4gICAgdGhpcy5fY29tcGlsZUNoaWxkcmVuKHRlbXBsYXRlLCBlbGVtZW50KVxuICB9XG4gIGlmIChhcHAubGFzdFNpZ25hbCAhPT0gLTEgJiYgdHJlZU1vZGUpIHtcbiAgICBfLmRlYnVnKCdjb21waWxlIHRvIGFwcGVuZCB3aG9sZSB0cmVlIGZvcicsIGVsZW1lbnQpXG4gICAgYXBwLmxhc3RTaWduYWwgPSB0aGlzLl9hdHRhY2hUYXJnZXQoZWxlbWVudCwgZGVzdClcbiAgfVxufVxuXG4vKipcbiAqIFNldCBhbGwgY2hpbGRyZW4gdG8gYSBjZXJ0YWluIHBhcmVudCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0ZW1wbGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jb21waWxlQ2hpbGRyZW4gKHRlbXBsYXRlLCBkZXN0KSB7XG4gIGNvbnN0IGFwcCA9IHRoaXMuX2FwcCB8fCB7fVxuICBjb25zdCBjaGlsZHJlbiA9IHRlbXBsYXRlLmNoaWxkcmVuXG4gIGlmIChjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICBjaGlsZHJlbi5ldmVyeSgoY2hpbGQpID0+IHtcbiAgICAgIHRoaXMuX2NvbXBpbGUoY2hpbGQsIGRlc3QpXG4gICAgICByZXR1cm4gYXBwLmxhc3RTaWduYWwgIT09IC0xXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIFdhdGNoIHRoZSBsaXN0IHVwZGF0ZSBhbmQgcmVmcmVzaCB0aGUgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZnJhZ0Jsb2NrIHt2bXMsIGRhdGEsIGNoaWxkcmVufVxuICogQHBhcmFtIHtvYmplY3R9IGluZm8gICAgICB7Z2V0dGVyLCBrZXksIHZhbHVlLCB0cmFja0J5LCBvbGRTdHlsZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9iaW5kUmVwZWF0ICh0YXJnZXQsIGZyYWdCbG9jaywgaW5mbykge1xuICBjb25zdCB2bXMgPSBmcmFnQmxvY2sudm1zXG4gIGNvbnN0IGNoaWxkcmVuID0gZnJhZ0Jsb2NrLmNoaWxkcmVuXG4gIGNvbnN0IHsgZ2V0dGVyLCB0cmFja0J5LCBvbGRTdHlsZSB9ID0gaW5mb1xuICBjb25zdCBrZXlOYW1lID0gaW5mby5rZXlcbiAgY29uc3QgdmFsdWVOYW1lID0gaW5mby52YWx1ZVxuXG4gIGZ1bmN0aW9uIGNvbXBpbGVJdGVtIChpdGVtLCBpbmRleCwgY29udGV4dCkge1xuICAgIGxldCBtZXJnZWREYXRhXG4gICAgaWYgKG9sZFN0eWxlKSB7XG4gICAgICBtZXJnZWREYXRhID0gaXRlbVxuICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgICBtZXJnZWREYXRhW2tleU5hbWVdID0gaW5kZXhcbiAgICAgICAgaWYgKCFtZXJnZWREYXRhLmhhc093blByb3BlcnR5KCdJTkRFWCcpKSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lcmdlZERhdGEsICdJTkRFWCcsIHtcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgIF8ud2FybignXCJJTkRFWFwiIGluIHJlcGVhdCBpcyBkZXByZWNhdGVkLCcgK1xuICAgICAgICAgICAgICAgICcgcGxlYXNlIHVzZSBcIiRpbmRleFwiIGluc3RlYWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBtZXJnZWREYXRhID0ge31cbiAgICAgIG1lcmdlZERhdGFba2V5TmFtZV0gPSBpbmRleFxuICAgICAgbWVyZ2VkRGF0YVt2YWx1ZU5hbWVdID0gaXRlbVxuICAgIH1cbiAgICBjb250ZXh0ID0gY29udGV4dC5fbWVyZ2VDb250ZXh0KG1lcmdlZERhdGEpXG4gICAgdm1zLnB1c2goY29udGV4dClcbiAgICBjb250ZXh0Ll9jb21waWxlKHRhcmdldCwgZnJhZ0Jsb2NrLCB7IHJlcGVhdDogaXRlbSB9KVxuICB9XG5cbiAgY29uc3QgbGlzdCA9IHRoaXMuX3dhdGNoQmxvY2soZnJhZ0Jsb2NrLCBnZXR0ZXIsICdyZXBlYXQnLFxuICAgIChkYXRhKSA9PiB7XG4gICAgICBfLmRlYnVnKCd0aGUgXCJyZXBlYXRcIiBpdGVtIGhhcyBjaGFuZ2VkJywgZGF0YSlcbiAgICAgIGlmICghZnJhZ0Jsb2NrKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBvbGRDaGlsZHJlbiA9IGNoaWxkcmVuLnNsaWNlKClcbiAgICAgIGNvbnN0IG9sZFZtcyA9IHZtcy5zbGljZSgpXG4gICAgICBjb25zdCBvbGREYXRhID0gZnJhZ0Jsb2NrLmRhdGEuc2xpY2UoKVxuICAgICAgLy8gMS4gY29sbGVjdCBhbGwgbmV3IHJlZnMgdHJhY2sgYnlcbiAgICAgIGNvbnN0IHRyYWNrTWFwID0ge31cbiAgICAgIGNvbnN0IHJldXNlZE1hcCA9IHt9XG4gICAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRyYWNrQnkgPyBpdGVtW3RyYWNrQnldIDogKG9sZFN0eWxlID8gaXRlbVtrZXlOYW1lXSA6IGluZGV4KVxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGtleSA9PSBudWxsIHx8IGtleSA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0cmFja01hcFtrZXldID0gaXRlbVxuICAgICAgfSlcblxuICAgICAgLy8gMi4gcmVtb3ZlIHVudXNlZCBlbGVtZW50IGZvcmVhY2ggb2xkIGl0ZW1cbiAgICAgIGNvbnN0IHJldXNlZExpc3QgPSBbXVxuICAgICAgb2xkRGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSB0cmFja0J5ID8gaXRlbVt0cmFja0J5XSA6IChvbGRTdHlsZSA/IGl0ZW1ba2V5TmFtZV0gOiBpbmRleClcbiAgICAgICAgaWYgKHRyYWNrTWFwLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICByZXVzZWRNYXBba2V5XSA9IHtcbiAgICAgICAgICAgIGl0ZW0sIGluZGV4LCBrZXksXG4gICAgICAgICAgICB0YXJnZXQ6IG9sZENoaWxkcmVuW2luZGV4XSxcbiAgICAgICAgICAgIHZtOiBvbGRWbXNbaW5kZXhdXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldXNlZExpc3QucHVzaChpdGVtKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3JlbW92ZVRhcmdldChvbGRDaGlsZHJlbltpbmRleF0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIDMuIGNyZWF0ZSBuZXcgZWxlbWVudCBmb3JlYWNoIG5ldyBpdGVtXG4gICAgICBjaGlsZHJlbi5sZW5ndGggPSAwXG4gICAgICB2bXMubGVuZ3RoID0gMFxuICAgICAgZnJhZ0Jsb2NrLmRhdGEgPSBkYXRhLnNsaWNlKClcbiAgICAgIGZyYWdCbG9jay51cGRhdGVNYXJrID0gZnJhZ0Jsb2NrLnN0YXJ0XG5cbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHJhY2tCeSA/IGl0ZW1bdHJhY2tCeV0gOiAob2xkU3R5bGUgPyBpdGVtW2tleU5hbWVdIDogaW5kZXgpXG4gICAgICAgIGNvbnN0IHJldXNlZCA9IHJldXNlZE1hcFtrZXldXG4gICAgICAgIGlmIChyZXVzZWQpIHtcbiAgICAgICAgICBpZiAocmV1c2VkLml0ZW0gPT09IHJldXNlZExpc3RbMF0pIHtcbiAgICAgICAgICAgIHJldXNlZExpc3Quc2hpZnQoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldXNlZExpc3QuJHJlbW92ZShyZXVzZWQuaXRlbSlcbiAgICAgICAgICAgIHRoaXMuX21vdmVUYXJnZXQocmV1c2VkLnRhcmdldCwgZnJhZ0Jsb2NrLnVwZGF0ZU1hcmssIHRydWUpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNoaWxkcmVuLnB1c2gocmV1c2VkLnRhcmdldClcbiAgICAgICAgICB2bXMucHVzaChyZXVzZWQudm0pXG4gICAgICAgICAgcmV1c2VkLnZtW2tleU5hbWVdID0gaW5kZXhcbiAgICAgICAgICBmcmFnQmxvY2sudXBkYXRlTWFyayA9IHJldXNlZC50YXJnZXRcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb21waWxlSXRlbShpdGVtLCBpbmRleCwgdGhpcylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgZGVsZXRlIGZyYWdCbG9jay51cGRhdGVNYXJrXG4gICAgfVxuICApXG5cbiAgZnJhZ0Jsb2NrLmRhdGEgPSBsaXN0LnNsaWNlKDApXG4gIGxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBjb21waWxlSXRlbShpdGVtLCBpbmRleCwgdGhpcylcbiAgfSlcbn1cblxuLyoqXG4gKiBXYXRjaCB0aGUgZGlzcGxheSB1cGRhdGUgYW5kIGFkZC9yZW1vdmUgdGhlIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtvYmplY3R9IGNvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9iaW5kU2hvd24gKHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKSB7XG4gIGNvbnN0IGRpc3BsYXkgPSB0aGlzLl93YXRjaEJsb2NrKGZyYWdCbG9jaywgdGFyZ2V0LnNob3duLCAnc2hvd24nLFxuICAgIChkaXNwbGF5KSA9PiB7XG4gICAgICBfLmRlYnVnKCd0aGUgXCJpZlwiIGl0ZW0gd2FzIGNoYW5nZWQnLCBkaXNwbGF5KVxuXG4gICAgICBpZiAoIWZyYWdCbG9jayB8fCAhIWZyYWdCbG9jay5kaXNwbGF5ID09PSAhIWRpc3BsYXkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBmcmFnQmxvY2suZGlzcGxheSA9ICEhZGlzcGxheVxuICAgICAgaWYgKGRpc3BsYXkpIHtcbiAgICAgICAgdGhpcy5fY29tcGlsZSh0YXJnZXQsIGZyYWdCbG9jaywgbWV0YSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW1vdmVCbG9jayhmcmFnQmxvY2ssIHRydWUpXG4gICAgICB9XG4gICAgfVxuICApXG5cbiAgZnJhZ0Jsb2NrLmRpc3BsYXkgPSAhIWRpc3BsYXlcbiAgaWYgKGRpc3BsYXkpIHtcbiAgICB0aGlzLl9jb21waWxlKHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKVxuICB9XG59XG5cbi8qKlxuICogV2F0Y2ggY2FsYyB2YWx1ZSBjaGFuZ2VzIGFuZCBhcHBlbmQgY2VydGFpbiB0eXBlIGFjdGlvbiB0byBkaWZmZXIuXG4gKiBJdCBpcyB1c2VkIGZvciBpZiBvciByZXBlYXQgZGF0YS1iaW5kaW5nIGdlbmVyYXRvci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gY2FsY1xuICogQHBhcmFtICB7c3RyaW5nfSAgIHR5cGVcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBoYW5kbGVyXG4gKiBAcmV0dXJuIHthbnl9ICAgICAgaW5pdCB2YWx1ZSBvZiBjYWxjXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfd2F0Y2hCbG9jayAoZnJhZ0Jsb2NrLCBjYWxjLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGNvbnN0IGRpZmZlciA9IHRoaXMgJiYgdGhpcy5fYXBwICYmIHRoaXMuX2FwcC5kaWZmZXJcbiAgY29uc3QgY29uZmlnID0ge31cbiAgY29uc3QgZGVwdGggPSAoZnJhZ0Jsb2NrLmVsZW1lbnQuZGVwdGggfHwgMCkgKyAxXG5cbiAgcmV0dXJuIHRoaXMuX3dhdGNoKGNhbGMsICh2YWx1ZSkgPT4ge1xuICAgIGNvbmZpZy5sYXRlc3RWYWx1ZSA9IHZhbHVlXG4gICAgaWYgKGRpZmZlciAmJiAhY29uZmlnLnJlY29yZGVkKSB7XG4gICAgICBkaWZmZXIuYXBwZW5kKHR5cGUsIGRlcHRoLCBmcmFnQmxvY2suYmxvY2tJZCwgKCkgPT4ge1xuICAgICAgICBjb25zdCBsYXRlc3RWYWx1ZSA9IGNvbmZpZy5sYXRlc3RWYWx1ZVxuICAgICAgICBoYW5kbGVyKGxhdGVzdFZhbHVlKVxuICAgICAgICBjb25maWcucmVjb3JkZWQgPSBmYWxzZVxuICAgICAgICBjb25maWcubGF0ZXN0VmFsdWUgPSB1bmRlZmluZWRcbiAgICAgIH0pXG4gICAgfVxuICAgIGNvbmZpZy5yZWNvcmRlZCA9IHRydWVcbiAgfSlcbn1cblxuLyoqXG4gKiBDbG9uZSBhIGNvbnRleHQgYW5kIG1lcmdlIGNlcnRhaW4gZGF0YS5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IG1lcmdlZERhdGFcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9tZXJnZUNvbnRleHQgKG1lcmdlZERhdGEpIHtcbiAgY29uc3QgY29udGV4dCA9IE9iamVjdC5jcmVhdGUodGhpcylcbiAgY29udGV4dC5fZGF0YSA9IG1lcmdlZERhdGFcbiAgY29udGV4dC5faW5pdERhdGEoKVxuICBjb250ZXh0Ll9pbml0Q29tcHV0ZWQoKVxuICBjb250ZXh0Ll9yZWFsUGFyZW50ID0gdGhpc1xuICByZXR1cm4gY29udGV4dFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9kZWZhdWx0L3ZtL2NvbXBpbGVyLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBEaXJlY3RpdmUgUGFyc2VyXG4gKi9cblxuaW1wb3J0ICogYXMgXyBmcm9tICcuLi91dGlsJ1xuXG5pbXBvcnQgV2F0Y2hlciBmcm9tICcuLi9jb3JlL3dhdGNoZXInXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcblxuY29uc3QgeyBuYXRpdmVDb21wb25lbnRNYXAgfSA9IGNvbmZpZ1xuXG5jb25zdCBTRVRURVJTID0ge1xuICBhdHRyOiAnc2V0QXR0cicsXG4gIHN0eWxlOiAnc2V0U3R5bGUnLFxuICBldmVudDogJ2FkZEV2ZW50J1xufVxuXG4vKipcbiAqIGFwcGx5IHRoZSBuYXRpdmUgY29tcG9uZW50J3Mgb3B0aW9ucyhzcGVjaWZpZWQgYnkgdGVtcGxhdGUudHlwZSlcbiAqIHRvIHRoZSB0ZW1wbGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2FwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyAodGVtcGxhdGUpIHtcbiAgY29uc3QgeyB0eXBlIH0gPSB0ZW1wbGF0ZVxuICBjb25zdCBvcHRpb25zID0gbmF0aXZlQ29tcG9uZW50TWFwW3R5cGVdXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbnMpIHtcbiAgICAgIGlmICh0ZW1wbGF0ZVtrZXldID09IG51bGwpIHtcbiAgICAgICAgdGVtcGxhdGVba2V5XSA9IG9wdGlvbnNba2V5XVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXy50eXBvZih0ZW1wbGF0ZVtrZXldKSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgXy50eXBvZihvcHRpb25zW2tleV0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKGNvbnN0IHN1YmtleSBpbiBvcHRpb25zW2tleV0pIHtcbiAgICAgICAgICBpZiAodGVtcGxhdGVba2V5XVtzdWJrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlW2tleV1bc3Via2V5XSA9IG9wdGlvbnNba2V5XVtzdWJrZXldXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogYmluZCBhbGwgaWQsIGF0dHIsIGNsYXNzbmFtZXMsIHN0eWxlLCBldmVudHMgdG8gYW4gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2JpbmRFbGVtZW50IChlbCwgdGVtcGxhdGUpIHtcbiAgdGhpcy5fc2V0SWQodGVtcGxhdGUuaWQsIGVsLCB0aGlzKVxuICB0aGlzLl9zZXRBdHRyKGVsLCB0ZW1wbGF0ZS5hdHRyKVxuICB0aGlzLl9zZXRDbGFzcyhlbCwgdGVtcGxhdGUuY2xhc3NMaXN0KVxuICB0aGlzLl9zZXRTdHlsZShlbCwgdGVtcGxhdGUuc3R5bGUpXG4gIHRoaXMuX2JpbmRFdmVudHMoZWwsIHRlbXBsYXRlLmV2ZW50cylcbn1cblxuLyoqXG4gKiBiaW5kIGFsbCBwcm9wcyB0byBzdWIgdm0gYW5kIGJpbmQgYWxsIHN0eWxlLCBldmVudHMgdG8gdGhlIHJvb3QgZWxlbWVudFxuICogb2YgdGhlIHN1YiB2bSBpZiBpdCBkb2Vzbid0IGhhdmUgYSByZXBsYWNlZCBtdWx0aS1ub2RlIGZyYWdtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfYmluZFN1YlZtIChzdWJWbSwgdGVtcGxhdGUsIHJlcGVhdEl0ZW0pIHtcbiAgc3ViVm0gPSBzdWJWbSB8fCB7fVxuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlIHx8IHt9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHN1YlZtLl9vcHRpb25zIHx8IHt9XG5cbiAgLy8gYmluZCBwcm9wc1xuICBsZXQgcHJvcHMgPSBvcHRpb25zLnByb3BzXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgcHJvcHMgPSBwcm9wcy5yZWR1Y2UoKHJlc3VsdCwgdmFsdWUpID0+IHtcbiAgICAgIHJlc3VsdFt2YWx1ZV0gPSB0cnVlXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSwge30pXG4gIH1cblxuICBtZXJnZVByb3BzKHJlcGVhdEl0ZW0sIHByb3BzLCB0aGlzLCBzdWJWbSlcbiAgbWVyZ2VQcm9wcyh0ZW1wbGF0ZS5hdHRyLCBwcm9wcywgdGhpcywgc3ViVm0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCAoc3ViVm0sIHRlbXBsYXRlKSB7XG4gIG1lcmdlQ2xhc3NTdHlsZSh0ZW1wbGF0ZS5jbGFzc0xpc3QsIHRoaXMsIHN1YlZtKVxuICBtZXJnZVN0eWxlKHRlbXBsYXRlLnN0eWxlLCB0aGlzLCBzdWJWbSlcbn1cblxuZnVuY3Rpb24gbWVyZ2VQcm9wcyAodGFyZ2V0LCBwcm9wcywgdm0sIHN1YlZtKSB7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZm9yIChjb25zdCBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgaWYgKCFwcm9wcyB8fCBwcm9wc1trZXldKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldFtrZXldXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gdm0uX3dhdGNoKHZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgIHN1YlZtW2tleV0gPSB2XG4gICAgICAgIH0pXG4gICAgICAgIHN1YlZtW2tleV0gPSByZXR1cm5WYWx1ZVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN1YlZtW2tleV0gPSB2YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZVN0eWxlICh0YXJnZXQsIHZtLCBzdWJWbSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiB0YXJnZXQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldFtrZXldXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSB2bS5fd2F0Y2godmFsdWUsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlmIChzdWJWbS5fcm9vdEVsKSB7XG4gICAgICAgICAgc3ViVm0uX3Jvb3RFbC5zZXRTdHlsZShrZXksIHYpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBzdWJWbS5fcm9vdEVsLnNldFN0eWxlKGtleSwgcmV0dXJuVmFsdWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHN1YlZtLl9yb290RWwpIHtcbiAgICAgICAgc3ViVm0uX3Jvb3RFbC5zZXRTdHlsZShrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZUNsYXNzU3R5bGUgKHRhcmdldCwgdm0sIHN1YlZtKSB7XG4gIGNvbnN0IGNzcyA9IHZtLl9vcHRpb25zICYmIHZtLl9vcHRpb25zLnN0eWxlIHx8IHt9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghc3ViVm0uX3Jvb3RFbCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHZtLl93YXRjaCh0YXJnZXQsIHYgPT4ge1xuICAgICAgc2V0Q2xhc3NTdHlsZShzdWJWbS5fcm9vdEVsLCBjc3MsIHYpXG4gICAgfSlcbiAgICBzZXRDbGFzc1N0eWxlKHN1YlZtLl9yb290RWwsIGNzcywgdmFsdWUpXG4gIH1cbiAgZWxzZSBpZiAodGFyZ2V0ICE9IG51bGwpIHtcbiAgICBzZXRDbGFzc1N0eWxlKHN1YlZtLl9yb290RWwsIGNzcywgdGFyZ2V0KVxuICB9XG59XG5cbi8qKlxuICogYmluZCBpZCB0byBhbiBlbGVtZW50XG4gKiBlYWNoIGlkIGlzIHVuaXF1ZSBpbiBhIHdob2xlIHZtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfc2V0SWQgKGlkLCBlbCwgdm0pIHtcbiAgY29uc3QgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1hcCwge1xuICAgIHZtOiB7XG4gICAgICB2YWx1ZTogdm0sXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgfSxcbiAgICBlbDoge1xuICAgICAgZ2V0OiAoKSA9PiBlbCB8fCB2bS5fcm9vdEVsLFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgIH1cbiAgfSlcblxuICBpZiAodHlwZW9mIGlkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IGlkXG4gICAgaWQgPSBoYW5kbGVyLmNhbGwodGhpcylcbiAgICBpZiAoaWQpIHtcbiAgICAgIHRoaXMuX2lkc1tpZF0gPSBtYXBcbiAgICB9XG4gICAgdGhpcy5fd2F0Y2goaGFuZGxlciwgKG5ld0lkKSA9PiB7XG4gICAgICBpZiAobmV3SWQpIHtcbiAgICAgICAgdGhpcy5faWRzW25ld0lkXSA9IG1hcFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZWxzZSBpZiAoaWQgJiYgdHlwZW9mIGlkID09PSAnc3RyaW5nJykge1xuICAgIHRoaXMuX2lkc1tpZF0gPSBtYXBcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgYXR0ciB0byBhbiBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfc2V0QXR0ciAoZWwsIGF0dHIpIHtcbiAgdGhpcy5fYmluZERpcihlbCwgJ2F0dHInLCBhdHRyKVxufVxuXG5mdW5jdGlvbiBzZXRDbGFzc1N0eWxlIChlbCwgY3NzLCBjbGFzc0xpc3QpIHtcbiAgY29uc3QgY2xhc3NTdHlsZSA9IHt9XG4gIGNvbnN0IGxlbmd0aCA9IGNsYXNzTGlzdC5sZW5ndGhcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBjc3NbY2xhc3NMaXN0W2ldXVxuICAgIGlmIChzdHlsZSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICAgICAgY2xhc3NTdHlsZVtrZXldID0gc3R5bGVba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbC5zZXRDbGFzc1N0eWxlKGNsYXNzU3R5bGUpXG59XG5cbi8qKlxuICogYmluZCBjbGFzc25hbWVzIHRvIGFuIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9zZXRDbGFzcyAoZWwsIGNsYXNzTGlzdCkge1xuICBpZiAodHlwZW9mIGNsYXNzTGlzdCAhPT0gJ2Z1bmN0aW9uJyAmJiAhQXJyYXkuaXNBcnJheShjbGFzc0xpc3QpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NMaXN0KSAmJiAhY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgIGVsLnNldENsYXNzU3R5bGUoe30pXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBzdHlsZSA9IHRoaXMuX29wdGlvbnMgJiYgdGhpcy5fb3B0aW9ucy5zdHlsZSB8fCB7fVxuICBpZiAodHlwZW9mIGNsYXNzTGlzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fd2F0Y2goY2xhc3NMaXN0LCB2ID0+IHtcbiAgICAgIHNldENsYXNzU3R5bGUoZWwsIHN0eWxlLCB2KVxuICAgIH0pXG4gICAgc2V0Q2xhc3NTdHlsZShlbCwgc3R5bGUsIHZhbHVlKVxuICB9XG4gIGVsc2Uge1xuICAgIHNldENsYXNzU3R5bGUoZWwsIHN0eWxlLCBjbGFzc0xpc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIHN0eWxlIHRvIGFuIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9zZXRTdHlsZSAoZWwsIHN0eWxlKSB7XG4gIHRoaXMuX2JpbmREaXIoZWwsICdzdHlsZScsIHN0eWxlKVxufVxuXG4vKipcbiAqIGFkZCBhbiBldmVudCB0eXBlIGFuZCBoYW5kbGVyIHRvIGFuIGVsZW1lbnQgYW5kIGdlbmVyYXRlIGEgZG9tIHVwZGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX3NldEV2ZW50IChlbCwgdHlwZSwgaGFuZGxlcikge1xuICBlbC5hZGRFdmVudCh0eXBlLCBfLmJpbmQoaGFuZGxlciwgdGhpcykpXG59XG5cbi8qKlxuICogYWRkIGFsbCBldmVudHMgb2YgYW4gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2JpbmRFdmVudHMgKGVsLCBldmVudHMpIHtcbiAgaWYgKCFldmVudHMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKVxuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgbGV0IGhhbmRsZXIgPSBldmVudHNba2V5XVxuICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGhhbmRsZXIgPSB0aGlzW2hhbmRsZXJdXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICBfLmVycm9yKGBUaGUgbWV0aG9kIFwiJHtoYW5kbGVyfVwiIGlzIG5vdCBkZWZpbmVkLmApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3NldEV2ZW50KGVsLCBrZXksIGhhbmRsZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBzZXQgYSBzZXJpZXMgb2YgbWVtYmVycyBhcyBhIGtpbmQgb2YgYW4gZWxlbWVudFxuICogZm9yIGV4YW1wbGU6IHN0eWxlLCBhdHRyLCAuLi5cbiAqIGlmIHRoZSB2YWx1ZSBpcyBhIGZ1bmN0aW9uIHRoZW4gYmluZCB0aGUgZGF0YSBjaGFuZ2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfYmluZERpciAoZWwsIG5hbWUsIGRhdGEpIHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gIGxldCBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBjb25zdCB2YWx1ZSA9IGRhdGFba2V5XVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX2JpbmRLZXkoZWwsIG5hbWUsIGtleSwgdmFsdWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZWxbU0VUVEVSU1tuYW1lXV0oa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIGRhdGEgY2hhbmdlcyB0byBhIGNlcnRhaW4ga2V5IHRvIGEgbmFtZSBzZXJpZXMgaW4gYW4gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2JpbmRLZXkgKGVsLCBuYW1lLCBrZXksIGNhbGMpIHtcbiAgY29uc3QgbWV0aG9kTmFtZSA9IFNFVFRFUlNbbmFtZV1cbiAgLy8gd2F0Y2ggdGhlIGNhbGMsIGFuZCByZXR1cm5zIGEgdmFsdWUgYnkgY2FsYy5jYWxsKClcbiAgY29uc3QgdmFsdWUgPSB0aGlzLl93YXRjaChjYWxjLCAodmFsdWUpID0+IHtcbiAgICBmdW5jdGlvbiBoYW5kbGVyICgpIHtcbiAgICAgIGVsW21ldGhvZE5hbWVdKGtleSwgdmFsdWUpXG4gICAgfVxuICAgIGNvbnN0IGRpZmZlciA9IHRoaXMgJiYgdGhpcy5fYXBwICYmIHRoaXMuX2FwcC5kaWZmZXJcbiAgICBpZiAoZGlmZmVyKSB7XG4gICAgICBkaWZmZXIuYXBwZW5kKCdlbGVtZW50JywgZWwuZGVwdGgsIGVsLnJlZiwgaGFuZGxlcilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBoYW5kbGVyKClcbiAgICB9XG4gIH0pXG5cbiAgZWxbbWV0aG9kTmFtZV0oa2V5LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiB3YXRjaCBhIGNhbGMgZnVuY3Rpb24gYW5kIGNhbGxiYWNrIGlmIHRoZSBjYWxjIHZhbHVlIGNoYW5nZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF93YXRjaCAoY2FsYywgY2FsbGJhY2spIHtcbiAgY29uc3Qgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKHRoaXMsIGNhbGMsIGZ1bmN0aW9uICh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyAmJiB2YWx1ZSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjYWxsYmFjayh2YWx1ZSlcbiAgfSlcblxuICByZXR1cm4gd2F0Y2hlci52YWx1ZVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9kZWZhdWx0L3ZtL2RpcmVjdGl2ZS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlldyBEb2N1bWVudCAmIEVsZW1lbnQgSGVscGVycy5cbiAqXG4gKiByZXF1aXJlZDpcbiAqIERvY3VtZW50IzogY3JlYXRlRWxlbWVudCwgY3JlYXRlQ29tbWVudCwgZ2V0UmVmXG4gKiBFbGVtZW50IzogYXBwZW5kQ2hpbGQsIGluc2VydEJlZm9yZSwgcmVtb3ZlQ2hpbGQsIG5leHRTaWJsaW5nXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgYSBib2R5IGJ5IHR5cGVcbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jcmVhdGVCb2R5ICh0eXBlKSB7XG4gIGNvbnN0IGRvYyA9IHRoaXMuX2FwcC5kb2NcbiAgcmV0dXJuIGRvYy5jcmVhdGVCb2R5KHR5cGUpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGVsZW1lbnQgYnkgdHlwZVxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnQgKHR5cGUpIHtcbiAgY29uc3QgZG9jID0gdGhpcy5fYXBwLmRvY1xuICByZXR1cm4gZG9jLmNyZWF0ZUVsZW1lbnQodHlwZSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGZyYWcgYmxvY2sgZm9yIGFuIGVsZW1lbnQuXG4gKiBUaGUgZnJhZyBibG9jayBoYXMgYSBzdGFydGVyLCBlbmRlciBhbmQgdGhlIGVsZW1lbnQgaXRzZWxmLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NyZWF0ZUJsb2NrIChlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0ID0gdGhpcy5fY3JlYXRlQmxvY2tTdGFydCgpXG4gIGNvbnN0IGVuZCA9IHRoaXMuX2NyZWF0ZUJsb2NrRW5kKClcbiAgY29uc3QgYmxvY2tJZCA9IGxhc3Rlc3RCbG9ja0lkKytcbiAgaWYgKGVsZW1lbnQuZWxlbWVudCkge1xuICAgIGxldCB1cGRhdGVNYXJrID0gZWxlbWVudC51cGRhdGVNYXJrXG4gICAgaWYgKHVwZGF0ZU1hcmspIHtcbiAgICAgIGlmICh1cGRhdGVNYXJrLmVsZW1lbnQpIHtcbiAgICAgICAgdXBkYXRlTWFyayA9IHVwZGF0ZU1hcmsuZW5kXG4gICAgICB9XG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QWZ0ZXIoZW5kLCB1cGRhdGVNYXJrKVxuICAgICAgZWxlbWVudC5lbGVtZW50Lmluc2VydEFmdGVyKHN0YXJ0LCB1cGRhdGVNYXJrKVxuICAgICAgZWxlbWVudC51cGRhdGVNYXJrID0gZW5kXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZWxlbWVudC5lbGVtZW50Lmluc2VydEJlZm9yZShzdGFydCwgZWxlbWVudC5lbmQpXG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKGVuZCwgZWxlbWVudC5lbmQpXG4gICAgfVxuICAgIGVsZW1lbnQgPSBlbGVtZW50LmVsZW1lbnRcbiAgfVxuICBlbHNlIHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHN0YXJ0KVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZW5kKVxuICB9XG4gIHJldHVybiB7IHN0YXJ0LCBlbmQsIGVsZW1lbnQsIGJsb2NrSWQgfVxufVxuXG5sZXQgbGFzdGVzdEJsb2NrSWQgPSAxXG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBibG9jayBzdGFydGVyLlxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICovXG5leHBvcnQgZnVuY3Rpb24gX2NyZWF0ZUJsb2NrU3RhcnQgKCkge1xuICBjb25zdCBkb2MgPSB0aGlzLl9hcHAuZG9jXG4gIGNvbnN0IGFuY2hvciA9IGRvYy5jcmVhdGVDb21tZW50KCdzdGFydCcpXG4gIHJldHVybiBhbmNob3Jcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGJsb2NrIGVuZGVyLlxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICovXG5leHBvcnQgZnVuY3Rpb24gX2NyZWF0ZUJsb2NrRW5kICgpIHtcbiAgY29uc3QgZG9jID0gdGhpcy5fYXBwLmRvY1xuICBjb25zdCBhbmNob3IgPSBkb2MuY3JlYXRlQ29tbWVudCgnZW5kJylcbiAgcmV0dXJuIGFuY2hvclxufVxuXG4vKipcbiAqIEF0dGFjaCB0YXJnZXQgdG8gYSBjZXJ0YWluIGRlc3QgdXNpbmcgYXBwZW5kQ2hpbGQgYnkgZGVmYXVsdC5cbiAqIElmIHRoZSBkZXN0IGlzIGEgZnJhZyBibG9jayB0aGVuIGluc2VydCBiZWZvcmUgdGhlIGVuZGVyLlxuICogSWYgdGhlIHRhcmdldCBpcyBhIGZyYWcgYmxvY2sgdGhlbiBhdHRhY2ggdGhlIHN0YXJ0ZXIgYW5kIGVuZGVyIGluIG9yZGVyLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9IGRlc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9hdHRhY2hUYXJnZXQgKHRhcmdldCwgZGVzdCkge1xuICBpZiAoZGVzdC5lbGVtZW50KSB7XG4gICAgY29uc3QgYmVmb3JlID0gZGVzdC5lbmRcbiAgICBjb25zdCBhZnRlciA9IGRlc3QudXBkYXRlTWFya1xuICAgIC8vIHB1c2ggbmV3IHRhcmdldCBmb3Igd2F0Y2ggbGlzdCB1cGRhdGUgbGF0ZXJcbiAgICBpZiAoZGVzdC5jaGlsZHJlbikge1xuICAgICAgZGVzdC5jaGlsZHJlbi5wdXNoKHRhcmdldClcbiAgICB9XG4gICAgLy8gZm9yIGNoZWNrIHJlcGVhdCBjYXNlXG4gICAgaWYgKGFmdGVyKSB7XG4gICAgICBjb25zdCBzaWduYWwgPSB0aGlzLl9tb3ZlVGFyZ2V0KHRhcmdldCwgYWZ0ZXIpXG4gICAgICBkZXN0LnVwZGF0ZU1hcmsgPSB0YXJnZXQuZWxlbWVudCA/IHRhcmdldC5lbmQgOiB0YXJnZXRcbiAgICAgIHJldHVybiBzaWduYWxcbiAgICB9XG4gICAgZWxzZSBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICAgIGRlc3QuZWxlbWVudC5pbnNlcnRCZWZvcmUodGFyZ2V0LnN0YXJ0LCBiZWZvcmUpXG4gICAgICBkZXN0LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRhcmdldC5lbmQsIGJlZm9yZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZGVzdC5lbGVtZW50Lmluc2VydEJlZm9yZSh0YXJnZXQsIGJlZm9yZSlcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgaWYgKHRhcmdldC5lbGVtZW50KSB7XG4gICAgICBkZXN0LmFwcGVuZENoaWxkKHRhcmdldC5zdGFydClcbiAgICAgIGRlc3QuYXBwZW5kQ2hpbGQodGFyZ2V0LmVuZClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZGVzdC5hcHBlbmRDaGlsZCh0YXJnZXQpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogTW92ZSB0YXJnZXQgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LiBUaGUgdGFyZ2V0IG1heWJlIGJsb2NrIG9yIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gYmVmb3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfbW92ZVRhcmdldCAodGFyZ2V0LCBhZnRlcikge1xuICBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5fbW92ZUJsb2NrKHRhcmdldCwgYWZ0ZXIpXG4gIH1cbiAgcmV0dXJuIHRoaXMuX21vdmVFbGVtZW50KHRhcmdldCwgYWZ0ZXIpXG59XG5cbi8qKlxuICogTW92ZSBlbGVtZW50IGJlZm9yZSBhIGNlcnRhaW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSAge29iamVjdH0gYmVmb3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfbW92ZUVsZW1lbnQgKGVsZW1lbnQsIGFmdGVyKSB7XG4gIGNvbnN0IHBhcmVudCA9IGFmdGVyLnBhcmVudE5vZGVcbiAgaWYgKHBhcmVudCkge1xuICAgIHJldHVybiBwYXJlbnQuaW5zZXJ0QWZ0ZXIoZWxlbWVudCwgYWZ0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIGFsbCBlbGVtZW50cyBvZiB0aGUgYmxvY2sgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtvYmplY3R9IGJlZm9yZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX21vdmVCbG9jayAoZnJhZ0Jsb2NrLCBhZnRlcikge1xuICBjb25zdCBwYXJlbnQgPSBhZnRlci5wYXJlbnROb2RlXG5cbiAgaWYgKHBhcmVudCkge1xuICAgIGxldCBlbCA9IGZyYWdCbG9jay5zdGFydFxuICAgIGxldCBzaWduYWxcbiAgICBjb25zdCBncm91cCA9IFtlbF1cblxuICAgIHdoaWxlIChlbCAmJiBlbCAhPT0gZnJhZ0Jsb2NrLmVuZCkge1xuICAgICAgZWwgPSBlbC5uZXh0U2libGluZ1xuICAgICAgZ3JvdXAucHVzaChlbClcbiAgICB9XG5cbiAgICBsZXQgdGVtcCA9IGFmdGVyXG4gICAgZ3JvdXAuZXZlcnkoKGVsKSA9PiB7XG4gICAgICBzaWduYWwgPSBwYXJlbnQuaW5zZXJ0QWZ0ZXIoZWwsIHRlbXApXG4gICAgICB0ZW1wID0gZWxcbiAgICAgIHJldHVybiBzaWduYWwgIT09IC0xXG4gICAgfSlcblxuICAgIHJldHVybiBzaWduYWxcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSB0YXJnZXQgZnJvbSBET00gdHJlZS5cbiAqIElmIHRoZSB0YXJnZXQgaXMgYSBmcmFnIGJsb2NrIHRoZW4gY2FsbCBfcmVtb3ZlQmxvY2tcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICovXG5leHBvcnQgZnVuY3Rpb24gX3JlbW92ZVRhcmdldCAodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgIHRoaXMuX3JlbW92ZUJsb2NrKHRhcmdldClcbiAgfVxuICBlbHNlIHtcbiAgICB0aGlzLl9yZW1vdmVFbGVtZW50KHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGNlcnRhaW4gZWxlbWVudC5cbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICovXG5leHBvcnQgZnVuY3Rpb24gX3JlbW92ZUVsZW1lbnQgKHRhcmdldCkge1xuICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZVxuXG4gIGlmIChwYXJlbnQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodGFyZ2V0KVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgZnJhZyBibG9jay5cbiAqIFRoZSBzZWNvbmQgcGFyYW0gZGVjaWRlcyB3aGV0aGVyIHRoZSBibG9jayBzZWxmIHNob3VsZCBiZSByZW1vdmVkIHRvby5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICBmcmFnQmxvY2tcbiAqIEBwYXJhbSAge0Jvb2xlYW59IHByZXNlcnZlQmxvY2s9ZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9yZW1vdmVCbG9jayAoZnJhZ0Jsb2NrLCBwcmVzZXJ2ZUJsb2NrID0gZmFsc2UpIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgbGV0IGVsID0gZnJhZ0Jsb2NrLnN0YXJ0Lm5leHRTaWJsaW5nXG5cbiAgd2hpbGUgKGVsICYmIGVsICE9PSBmcmFnQmxvY2suZW5kKSB7XG4gICAgcmVzdWx0LnB1c2goZWwpXG4gICAgZWwgPSBlbC5uZXh0U2libGluZ1xuICB9XG5cbiAgaWYgKCFwcmVzZXJ2ZUJsb2NrKSB7XG4gICAgdGhpcy5fcmVtb3ZlRWxlbWVudChmcmFnQmxvY2suc3RhcnQpXG4gIH1cbiAgcmVzdWx0LmZvckVhY2goKGVsKSA9PiB7XG4gICAgdGhpcy5fcmVtb3ZlRWxlbWVudChlbClcbiAgfSlcbiAgaWYgKCFwcmVzZXJ2ZUJsb2NrKSB7XG4gICAgdGhpcy5fcmVtb3ZlRWxlbWVudChmcmFnQmxvY2suZW5kKVxuICB9XG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvaHRtbDUvZGVmYXVsdC92bS9kb20taGVscGVyLmpzXG4gKiovIiwiZnVuY3Rpb24gRXZ0ICh0eXBlLCBkZXRhaWwpIHtcbiAgaWYgKGRldGFpbCBpbnN0YW5jZW9mIEV2dCkge1xuICAgIHJldHVybiBkZXRhaWxcbiAgfVxuXG4gIHRoaXMudGltZXN0YW1wID0gRGF0ZS5ub3coKVxuICB0aGlzLmRldGFpbCA9IGRldGFpbFxuICB0aGlzLnR5cGUgPSB0eXBlXG5cbiAgbGV0IHNob3VsZFN0b3AgPSBmYWxzZVxuICB0aGlzLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2hvdWxkU3RvcCA9IHRydWVcbiAgfVxuICB0aGlzLmhhc1N0b3BwZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNob3VsZFN0b3BcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJGVtaXQgKHR5cGUsIGRldGFpbCkge1xuICBjb25zdCBldmVudHMgPSB0aGlzLl92bUV2ZW50c1xuICBjb25zdCBoYW5kbGVyTGlzdCA9IGV2ZW50c1t0eXBlXVxuICBpZiAoaGFuZGxlckxpc3QpIHtcbiAgICBjb25zdCBldnQgPSBuZXcgRXZ0KHR5cGUsIGRldGFpbClcbiAgICBoYW5kbGVyTGlzdC5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICBoYW5kbGVyLmNhbGwodGhpcywgZXZ0KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uICRkaXNwYXRjaCAodHlwZSwgZGV0YWlsKSB7XG4gIGNvbnN0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICB0aGlzLiRlbWl0KHR5cGUsIGV2dClcblxuICBpZiAoIWV2dC5oYXNTdG9wcGVkKCkgJiYgdGhpcy5fcGFyZW50ICYmIHRoaXMuX3BhcmVudC4kZGlzcGF0Y2gpIHtcbiAgICB0aGlzLl9wYXJlbnQuJGRpc3BhdGNoKHR5cGUsIGV2dClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJGJyb2FkY2FzdCAodHlwZSwgZGV0YWlsKSB7XG4gIGNvbnN0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICB0aGlzLiRlbWl0KHR5cGUsIGV2dClcblxuICBpZiAoIWV2dC5oYXNTdG9wcGVkKCkgJiYgdGhpcy5fY2hpbGRyZW5WbXMpIHtcbiAgICB0aGlzLl9jaGlsZHJlblZtcy5mb3JFYWNoKChzdWJWbSkgPT4ge1xuICAgICAgc3ViVm0uJGJyb2FkY2FzdCh0eXBlLCBldnQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJG9uICh0eXBlLCBoYW5kbGVyKSB7XG4gIGlmICghdHlwZSB8fCB0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGV2ZW50cyA9IHRoaXMuX3ZtRXZlbnRzXG4gIGNvbnN0IGhhbmRsZXJMaXN0ID0gZXZlbnRzW3R5cGVdIHx8IFtdXG4gIGhhbmRsZXJMaXN0LnB1c2goaGFuZGxlcilcbiAgZXZlbnRzW3R5cGVdID0gaGFuZGxlckxpc3RcblxuICAvLyBmaXhlZCBvbGQgdmVyc2lvbiBsaWZlY3ljbGUgZGVzaWduXG4gIGlmICh0eXBlID09PSAnaG9vazpyZWFkeScgJiYgdGhpcy5fcmVhZHkpIHtcbiAgICB0aGlzLiRlbWl0KCdob29rOnJlYWR5JylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJG9mZiAodHlwZSwgaGFuZGxlcikge1xuICBpZiAoIXR5cGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBldmVudHMgPSB0aGlzLl92bUV2ZW50c1xuICBpZiAoIWhhbmRsZXIpIHtcbiAgICBkZWxldGUgZXZlbnRzW3R5cGVdXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgaGFuZGxlckxpc3QgPSBldmVudHNbdHlwZV1cbiAgaWYgKCFoYW5kbGVyTGlzdCkge1xuICAgIHJldHVyblxuICB9XG4gIGhhbmRsZXJMaXN0LiRyZW1vdmUoaGFuZGxlcilcbn1cblxuY29uc3QgTElGRV9DWUNMRV9UWVBFUyA9IFsnaW5pdCcsICdjcmVhdGVkJywgJ3JlYWR5J11cblxuZXhwb3J0IGZ1bmN0aW9uIF9pbml0RXZlbnRzIChleHRlcm5hbEV2ZW50cykge1xuICBjb25zdCBvcHRpb25zID0gdGhpcy5fb3B0aW9ucyB8fCB7fVxuICBjb25zdCBldmVudHMgPSBvcHRpb25zLmV2ZW50cyB8fCB7fVxuICBmb3IgKGNvbnN0IHR5cGUxIGluIGV2ZW50cykge1xuICAgIHRoaXMuJG9uKHR5cGUxLCBldmVudHNbdHlwZTFdKVxuICB9XG4gIGZvciAoY29uc3QgdHlwZTIgaW4gZXh0ZXJuYWxFdmVudHMpIHtcbiAgICB0aGlzLiRvbih0eXBlMiwgZXh0ZXJuYWxFdmVudHNbdHlwZTJdKVxuICB9XG4gIExJRkVfQ1lDTEVfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgIHRoaXMuJG9uKGBob29rOiR7dHlwZX1gLCBvcHRpb25zW3R5cGVdKVxuICB9KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9kZWZhdWx0L3ZtL2V2ZW50cy5qc1xuICoqLyIsImxldCBuYXRpdmVNb2R1bGVzID0ge31cblxuZnVuY3Rpb24gYXNzaWduTW9kdWxlcyAobW9kdWxlcywgaWZSZXBsYWNlKSB7XG4gIGZvciAoY29uc3QgbW9kdWxlTmFtZSBpbiBtb2R1bGVzKSB7XG4gICAgLy8gaW5pdCBgbW9kdWxlc1ttb2R1bGVOYW1lXVtdYFxuICAgIGxldCBtZXRob2RzID0gbmF0aXZlTW9kdWxlc1ttb2R1bGVOYW1lXVxuICAgIGlmICghbWV0aG9kcykge1xuICAgICAgbWV0aG9kcyA9IHt9XG4gICAgICBuYXRpdmVNb2R1bGVzW21vZHVsZU5hbWVdID0gbWV0aG9kc1xuICAgIH1cblxuICAgIC8vIHB1c2ggZWFjaCBub24tZXhpc3RlZCBuZXcgbWV0aG9kXG4gICAgbW9kdWxlc1ttb2R1bGVOYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJykge1xuICAgICAgICBtZXRob2QgPSB7XG4gICAgICAgICAgbmFtZTogbWV0aG9kXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFtZXRob2RzW21ldGhvZC5uYW1lXSB8fCBpZlJlcGxhY2UpIHtcbiAgICAgICAgbWV0aG9kc1ttZXRob2QubmFtZV0gPSBtZXRob2RcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkFwaXMgKEN0b3IsIGFwaXMpIHtcbiAgY29uc3QgcCA9IEN0b3IucHJvdG90eXBlXG5cbiAgZm9yIChjb25zdCBhcGlOYW1lIGluIGFwaXMpIHtcbiAgICBpZiAoIXAuaGFzT3duUHJvcGVydHkoYXBpTmFtZSkpIHtcbiAgICAgIHBbYXBpTmFtZV0gPSBhcGlzW2FwaU5hbWVdXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhck1vZHVsZXMgKCkge1xuICBuYXRpdmVNb2R1bGVzID0ge31cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZHVsZSAobW9kdWxlTmFtZSkge1xuICByZXR1cm4gbmF0aXZlTW9kdWxlc1ttb2R1bGVOYW1lXVxufVxuXG4vKipcbiAqIEBjb250ZXh0IGEgaW5zdGFuY2Ugb2YgQXBwSW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVNb2R1bGUgKG1vZHVsZU5hbWUpIHtcbiAgY29uc3QgbWV0aG9kcyA9IG5hdGl2ZU1vZHVsZXNbbW9kdWxlTmFtZV1cbiAgY29uc3QgdGFyZ2V0ID0ge31cblxuICBmb3IgKGNvbnN0IG1ldGhvZE5hbWUgaW4gbWV0aG9kcykge1xuICAgIHRhcmdldFttZXRob2ROYW1lXSA9ICguLi5hcmdzKSA9PiB0aGlzLmNhbGxUYXNrcyh7XG4gICAgICBtb2R1bGU6IG1vZHVsZU5hbWUsXG4gICAgICBtZXRob2Q6IG1ldGhvZE5hbWUsXG4gICAgICBhcmdzOiBhcmdzXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB0YXJnZXRcbn1cblxuLyoqXG4gKiBAY29udGV4dCBWbVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJNb2R1bGVzIChtb2R1bGVzLCBpZlJlcGxhY2UpIHtcbiAgYXNzaWduTW9kdWxlcyhtb2R1bGVzLCBpZlJlcGxhY2UpXG59XG5cbi8qKlxuICogQGNvbnRleHQgVm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTWV0aG9kcyAoYXBpcykge1xuICBhc3NpZ25BcGlzKHRoaXMsIGFwaXMpXG59XG5cbi8qKlxuICogQGNvbnRleHQgYSBpbnN0YW5jZSBvZiBBcHBJbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZUNvbXBvbmVudCAobmFtZSkge1xuICBjb25zdCB7IGN1c3RvbUNvbXBvbmVudE1hcCB9ID0gdGhpc1xuICByZXR1cm4gY3VzdG9tQ29tcG9uZW50TWFwW25hbWVdXG59XG5cbi8qKlxuICogQGNvbnRleHQgYSBpbnN0YW5jZSBvZiBBcHBJbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnQgKG5hbWUsIGV4cG9ydHMpIHtcbiAgY29uc3QgeyBjdXN0b21Db21wb25lbnRNYXAgfSA9IHRoaXNcblxuICBpZiAoY3VzdG9tQ29tcG9uZW50TWFwW25hbWVdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBkZWZpbmUgYSBjb21wb25lbnQoJHtuYW1lfSkgdGhhdCBhbHJlYWR5IGV4aXN0c2ApXG4gIH1cblxuICBjdXN0b21Db21wb25lbnRNYXBbbmFtZV0gPSBleHBvcnRzXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L2RlZmF1bHQvYXBwL3JlZ2lzdGVyLmpzXG4gKiovIiwiaW1wb3J0IHNlbXZlciBmcm9tICdzZW12ZXInXG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0LCB0eXBvZiB9IGZyb20gJy4uL3V0aWwnXG5cbi8qKlxuICogW25vcm1hbGl6ZVZlcnNpb24gZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFZlcnNpb24uIGllOiAxLCAxLjAsIDEuMC4wXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFZlcnNpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVZlcnNpb24gKHYpIHtcbiAgY29uc3QgaXNWYWxpZCA9IHNlbXZlci52YWxpZCh2KVxuICBpZiAoaXNWYWxpZCkge1xuICAgIHJldHVybiB2XG4gIH1cblxuICB2ID0gdHlwZW9mICh2KSA9PT0gJ3N0cmluZycgPyB2IDogJydcbiAgY29uc3Qgc3BsaXQgPSB2LnNwbGl0KCcuJylcbiAgbGV0IGkgPSAwXG4gIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgd2hpbGUgKGkgPCAzKSB7XG4gICAgY29uc3QgcyA9IHR5cGVvZiAoc3BsaXRbaV0pID09PSAnc3RyaW5nJyAmJiBzcGxpdFtpXSA/IHNwbGl0W2ldIDogJzAnXG4gICAgcmVzdWx0LnB1c2gocylcbiAgICBpKytcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignLicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFcnJvciAoa2V5LCB2YWwsIGNyaXRlcmlhKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBpc0Rvd25ncmFkZTogdHJ1ZSxcbiAgICBlcnJvclR5cGU6IDEsXG4gICAgY29kZTogMTAwMFxuICB9XG4gIGNvbnN0IGdldE1zZyA9IGZ1bmN0aW9uIChrZXksIHZhbCwgY3JpdGVyaWEpIHtcbiAgICByZXR1cm4gJ0Rvd25ncmFkZVsnICsga2V5ICsgJ10gOjogZGV2aWNlSW5mbyAnXG4gICAgICArIHZhbCArICcgbWF0Y2hlZCBjcml0ZXJpYSAnICsgY3JpdGVyaWFcbiAgfVxuICBjb25zdCBfa2V5ID0ga2V5LnRvTG93ZXJDYXNlKClcblxuICByZXN1bHQuZXJyb3JNZXNzYWdlID0gZ2V0TXNnKGtleSwgdmFsLCBjcml0ZXJpYSlcblxuICBpZiAoX2tleS5pbmRleE9mKCdvc3ZlcnNpb24nKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDAxXG4gIH1cbiAgZWxzZSBpZiAoX2tleS5pbmRleE9mKCdhcHB2ZXJzaW9uJykgPj0gMCkge1xuICAgIHJlc3VsdC5jb2RlID0gMTAwMlxuICB9XG4gIGVsc2UgaWYgKF9rZXkuaW5kZXhPZignd2VleHZlcnNpb24nKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDAzXG4gIH1cbiAgZWxzZSBpZiAoX2tleS5pbmRleE9mKCdkZXZpY2Vtb2RlbCcpID49IDApIHtcbiAgICByZXN1bHQuY29kZSA9IDEwMDRcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBXRUVYIGZyYW1ld29yayBpbnB1dChkZXZpY2VJbmZvKVxuICoge1xuICogICBwbGF0Zm9ybTogJ2lPUycgb3IgJ2FuZHJvaWQnXG4gKiAgIG9zVmVyc2lvbjogJzEuMC4wJyBvciAnMS4wJyBvciAnMSdcbiAqICAgYXBwVmVyc2lvbjogJzEuMC4wJyBvciAnMS4wJyBvciAnMSdcbiAqICAgd2VleFZlcnNpb246ICcxLjAuMCcgb3IgJzEuMCcgb3IgJzEnXG4gKiAgIGREZXZpY2VNb2RlbDogJ01PREVMX05BTUUnXG4gKiB9XG4gKlxuICogZG93bmdyYWRlIGNvbmZpZyhjb25maWcpXG4gKiB7XG4gKiAgIGlvczoge1xuICogICAgIG9zVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgYXBwVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgd2VleFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGRldmljZU1vZGVsOiBbJ21vZGVsQScsICdtb2RlbEInLCAuLi5dXG4gKiAgIH0sXG4gKiAgIGFuZHJvaWQ6IHtcbiAqICAgICBvc1ZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGFwcFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIHdlZXhWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICBkZXZpY2VNb2RlbDogWydtb2RlbEEnLCAnbW9kZWxCJywgLi4uXVxuICogICB9XG4gKiB9XG4gKlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZGV2aWNlSW5mbyBXZWV4IFNESyBmcmFtZXdvcmsgaW5wdXRcbiAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnICAgICB1c2VyIGlucHV0XG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgeyBpc0Rvd25ncmFkZTogdHJ1ZS9mYWxzZSwgZXJyb3JNZXNzYWdlLi4uIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrIChjb25maWcsIGRldmljZUluZm8pIHtcbiAgZGV2aWNlSW5mbyA9IGRldmljZUluZm8gfHwgZ2xvYmFsLldYRW52aXJvbm1lbnRcbiAgZGV2aWNlSW5mbyA9IGlzUGxhaW5PYmplY3QoZGV2aWNlSW5mbykgPyBkZXZpY2VJbmZvIDoge31cblxuICBsZXQgcmVzdWx0ID0ge1xuICAgIGlzRG93bmdyYWRlOiBmYWxzZSAvLyBkZWZhdXRsIGlzIHBhc3NcbiAgfVxuXG4gIGlmICh0eXBvZihjb25maWcpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbGV0IGN1c3RvbURvd25ncmFkZSA9IGNvbmZpZy5jYWxsKHRoaXMsIGRldmljZUluZm8sIHtcbiAgICAgIHNlbXZlcjogc2VtdmVyLFxuICAgICAgbm9ybWFsaXplVmVyc2lvbjogdGhpcy5ub3JtYWxpemVWZXJzaW9uXG4gICAgfSlcblxuICAgIGN1c3RvbURvd25ncmFkZSA9ICEhY3VzdG9tRG93bmdyYWRlXG5cbiAgICByZXN1bHQgPSBjdXN0b21Eb3duZ3JhZGUgPyB0aGlzLmdldEVycm9yKCdjdXN0b20nLCAnJywgJ2N1c3RvbSBwYXJhbXMnKSA6IHJlc3VsdFxuICB9XG4gIGVsc2Uge1xuICAgIGNvbmZpZyA9IGlzUGxhaW5PYmplY3QoY29uZmlnKSA/IGNvbmZpZyA6IHt9XG5cbiAgICBjb25zdCBwbGF0Zm9ybSA9IGRldmljZUluZm8ucGxhdGZvcm0gfHwgJ3Vua25vdydcbiAgICBjb25zdCBkUGxhdGZvcm0gPSBwbGF0Zm9ybS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgY09iaiA9IGNvbmZpZ1tkUGxhdGZvcm1dIHx8IHt9XG5cbiAgICBmb3IgKGNvbnN0IGkgaW4gZGV2aWNlSW5mbykge1xuICAgICAgY29uc3Qga2V5ID0gaVxuICAgICAgY29uc3Qga2V5TG93ZXIgPSBrZXkudG9Mb3dlckNhc2UoKVxuICAgICAgY29uc3QgdmFsID0gZGV2aWNlSW5mb1tpXVxuICAgICAgY29uc3QgaXNWZXJzaW9uID0ga2V5TG93ZXIuaW5kZXhPZigndmVyc2lvbicpID49IDBcbiAgICAgIGNvbnN0IGlzRGV2aWNlTW9kZWwgPSBrZXlMb3dlci5pbmRleE9mKCdkZXZpY2Vtb2RlbCcpID49IDBcbiAgICAgIGNvbnN0IGNyaXRlcmlhID0gY09ialtpXVxuXG4gICAgICBpZiAoY3JpdGVyaWEgJiYgaXNWZXJzaW9uKSB7XG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLm5vcm1hbGl6ZVZlcnNpb24oY3JpdGVyaWEpXG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLm5vcm1hbGl6ZVZlcnNpb24oZGV2aWNlSW5mb1tpXSlcblxuICAgICAgICBpZiAoc2VtdmVyLnNhdGlzZmllcyhkLCBjKSkge1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZ2V0RXJyb3Ioa2V5LCB2YWwsIGNyaXRlcmlhKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzRGV2aWNlTW9kZWwpIHtcbiAgICAgICAgY29uc3QgX2NyaXRlcmlhID0gdHlwb2YoY3JpdGVyaWEpID09PSAnYXJyYXknID8gY3JpdGVyaWEgOiBbY3JpdGVyaWFdXG4gICAgICAgIGlmIChfY3JpdGVyaWEuaW5kZXhPZih2YWwpID49IDApIHtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLmdldEVycm9yKGtleSwgdmFsLCBjcml0ZXJpYSlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9kZWZhdWx0L2FwcC9kb3duZ3JhZGUuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIGluc3RhbmNlIGNvbnRyb2xzIGZyb20gbmF0aXZlXG4gKlxuICogLSBpbml0IGJ1bmRsZVxuICogLSBmaXJlIGV2ZW50XG4gKiAtIGNhbGxiYWNrXG4gKiAtIGRlc3Ryb3lcbiAqXG4gKiBjb3JyZXNwb25kZWQgd2l0aCB0aGUgQVBJIG9mIGluc3RhbmNlIG1hbmFnZXIgKGZyYW1ld29yay5qcylcbiAqL1xuXG5pbXBvcnQgKiBhcyBfIGZyb20gJy4uL3V0aWwnXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBY3Rpb25zICgpIHtcbiAgdGhpcy5kaWZmZXIuZmx1c2goKVxuICBjb25zdCB0YXNrcyA9IFtdXG4gIGlmICh0aGlzLmRvYyAmJiB0aGlzLmRvYy5saXN0ZW5lciAmJiB0aGlzLmRvYy5saXN0ZW5lci51cGRhdGVzLmxlbmd0aCkge1xuICAgIHRhc2tzLnB1c2goLi4udGhpcy5kb2MubGlzdGVuZXIudXBkYXRlcylcbiAgICB0aGlzLmRvYy5saXN0ZW5lci51cGRhdGVzID0gW11cbiAgfVxuICBpZiAodGFza3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbFRhc2tzKHRhc2tzKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0IChjb2RlLCBkYXRhKSB7XG4gIF8uZGVidWcoJ0ludGlhbGl6ZSBhbiBpbnN0YW5jZSB3aXRoOlxcbicsIGNvZGUsIGRhdGEpXG5cbiAgbGV0IHJlc3VsdFxuICAvLyBAc2VlOiBsaWIvYXBwL2J1bmRsZS5qc1xuICBjb25zdCBkZWZpbmUgPSBfLmJpbmQodGhpcy5kZWZpbmUsIHRoaXMpXG4gIGNvbnN0IGJvb3RzdHJhcCA9IChuYW1lLCBjb25maWcsIF9kYXRhKSA9PiB7XG4gICAgcmVzdWx0ID0gdGhpcy5ib290c3RyYXAobmFtZSwgY29uZmlnLCBfZGF0YSB8fCBkYXRhKVxuICAgIHRoaXMudXBkYXRlQWN0aW9ucygpXG4gICAgdGhpcy5kb2MubGlzdGVuZXIuY3JlYXRlRmluaXNoKClcbiAgICBfLmRlYnVnKGBBZnRlciBpbnRpYWxpemVkIGFuIGluc3RhbmNlKCR7dGhpcy5pZH0pYClcbiAgfVxuXG4gIC8vIGJhY2t3YXJkKHJlZ2lzdGVyL3JlbmRlcilcbiAgY29uc3QgcmVnaXN0ZXIgPSBfLmJpbmQodGhpcy5yZWdpc3RlciwgdGhpcylcbiAgY29uc3QgcmVuZGVyID0gKG5hbWUsIF9kYXRhKSA9PiB7XG4gICAgcmVzdWx0ID0gdGhpcy5ib290c3RyYXAobmFtZSwge30sIF9kYXRhKVxuICB9XG5cbiAgY29uc3QgcmVxdWlyZSA9IG5hbWUgPT4gX2RhdGEgPT4ge1xuICAgIHJlc3VsdCA9IHRoaXMuYm9vdHN0cmFwKG5hbWUsIHt9LCBfZGF0YSlcbiAgfVxuXG4gIGNvbnN0IGRvY3VtZW50ID0gdGhpcy5kb2NcblxuICBsZXQgZnVuY3Rpb25Cb2R5XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIGNvZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBgZnVuY3Rpb24gKCkgey4uLn1gIC0+IGB7Li4ufWBcbiAgICAvLyBub3QgdmVyeSBzdHJpY3RcbiAgICBmdW5jdGlvbkJvZHkgPSBjb2RlLnRvU3RyaW5nKCkuc3Vic3RyKDEyKVxuICB9XG4gIGVsc2UgaWYgKGNvZGUpIHtcbiAgICBmdW5jdGlvbkJvZHkgPSBjb2RlLnRvU3RyaW5nKClcbiAgfVxuXG4gIGNvbnN0IHsgV1hFbnZpcm9ubWVudCB9ID0gZ2xvYmFsXG4gIGlmIChXWEVudmlyb25tZW50ICYmIFdYRW52aXJvbm1lbnQucGxhdGZvcm0gIT09ICdXZWInKSB7XG4gICAgY29uc3QgdGltZXIgPSB0aGlzLnJlcXVpcmVNb2R1bGUoJ3RpbWVyJylcbiAgICBjb25zdCB0aW1lckFQSXMgPSB7XG4gICAgICBzZXRUaW1lb3V0OiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFyZ3NbMF0oLi4uYXJncy5zbGljZSgyKSlcbiAgICAgICAgfVxuICAgICAgICB0aW1lci5zZXRUaW1lb3V0KGhhbmRsZXIsIGFyZ3NbMV0pXG4gICAgICAgIHJldHVybiB0aGlzLnVpZC50b1N0cmluZygpXG4gICAgICB9LFxuICAgICAgc2V0SW50ZXJ2YWw6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYXJnc1swXSguLi5hcmdzLnNsaWNlKDIpKVxuICAgICAgICB9XG4gICAgICAgIHRpbWVyLnNldEludGVydmFsKGhhbmRsZXIsIGFyZ3NbMV0pXG4gICAgICAgIHJldHVybiB0aGlzLnVpZC50b1N0cmluZygpXG4gICAgICB9LFxuICAgICAgY2xlYXJUaW1lb3V0OiAobikgPT4ge1xuICAgICAgICB0aW1lci5jbGVhclRpbWVvdXQobilcbiAgICAgIH0sXG4gICAgICBjbGVhckludGVydmFsOiAobikgPT4ge1xuICAgICAgICB0aW1lci5jbGVhckludGVydmFsKG4pXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZm4gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAnZGVmaW5lJyxcbiAgICAgICdyZXF1aXJlJyxcbiAgICAgICdkb2N1bWVudCcsXG4gICAgICAnYm9vdHN0cmFwJyxcbiAgICAgICdyZWdpc3RlcicsXG4gICAgICAncmVuZGVyJyxcbiAgICAgICdfX3dlZXhfZGVmaW5lX18nLCAvLyBhbGlhcyBmb3IgZGVmaW5lXG4gICAgICAnX193ZWV4X2Jvb3RzdHJhcF9fJywgLy8gYWxpYXMgZm9yIGJvb3RzdHJhcFxuICAgICAgJ3NldFRpbWVvdXQnLFxuICAgICAgJ3NldEludGVydmFsJyxcbiAgICAgICdjbGVhclRpbWVvdXQnLFxuICAgICAgJ2NsZWFySW50ZXJ2YWwnLFxuICAgICAgZnVuY3Rpb25Cb2R5XG4gICAgKVxuXG4gICAgZm4oXG4gICAgICBkZWZpbmUsXG4gICAgICByZXF1aXJlLFxuICAgICAgZG9jdW1lbnQsXG4gICAgICBib290c3RyYXAsXG4gICAgICByZWdpc3RlcixcbiAgICAgIHJlbmRlcixcbiAgICAgIGRlZmluZSxcbiAgICAgIGJvb3RzdHJhcCxcbiAgICAgIHRpbWVyQVBJcy5zZXRUaW1lb3V0LFxuICAgICAgdGltZXJBUElzLnNldEludGVydmFsLFxuICAgICAgdGltZXJBUElzLmNsZWFyVGltZW91dCxcbiAgICAgIHRpbWVyQVBJcy5jbGVhckludGVydmFsKVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGZuID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgJ2RlZmluZScsXG4gICAgICAncmVxdWlyZScsXG4gICAgICAnZG9jdW1lbnQnLFxuICAgICAgJ2Jvb3RzdHJhcCcsXG4gICAgICAncmVnaXN0ZXInLFxuICAgICAgJ3JlbmRlcicsXG4gICAgICAnX193ZWV4X2RlZmluZV9fJywgLy8gYWxpYXMgZm9yIGRlZmluZVxuICAgICAgJ19fd2VleF9ib290c3RyYXBfXycsIC8vIGFsaWFzIGZvciBib290c3RyYXBcbiAgICAgIGZ1bmN0aW9uQm9keVxuICAgIClcblxuICAgIGZuKFxuICAgICAgZGVmaW5lLFxuICAgICAgcmVxdWlyZSxcbiAgICAgIGRvY3VtZW50LFxuICAgICAgYm9vdHN0cmFwLFxuICAgICAgcmVnaXN0ZXIsXG4gICAgICByZW5kZXIsXG4gICAgICBkZWZpbmUsXG4gICAgICBib290c3RyYXApXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgXy5kZWJ1ZyhgRGVzdG9yeSBhbiBpbnN0YW5jZSgke3RoaXMuaWR9KWApXG5cbiAgdGhpcy5pZCA9ICcnXG4gIHRoaXMub3B0aW9ucyA9IG51bGxcbiAgdGhpcy5ibG9ja3MgPSBudWxsXG4gIHRoaXMudm0gPSBudWxsXG4gIHRoaXMuZG9jID0gbnVsbFxuICB0aGlzLmN1c3RvbUNvbXBvbmVudE1hcCA9IG51bGxcbiAgdGhpcy5jYWxsYmFja3MgPSBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290RWxlbWVudCAoKSB7XG4gIGNvbnN0IGRvYyA9IHRoaXMuZG9jIHx8IHt9XG4gIGNvbnN0IGJvZHkgPSBkb2MuYm9keSB8fCB7fVxuICByZXR1cm4gYm9keS50b0pTT04gPyBib2R5LnRvSlNPTigpIDoge31cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpcmVFdmVudCAocmVmLCB0eXBlLCBlLCBkb21DaGFuZ2VzKSB7XG4gIF8uZGVidWcoYEZpcmUgYSBcIiR7dHlwZX1cIiBldmVudCBvbiBhbiBlbGVtZW50KCR7cmVmfSkgaW4gaW5zdGFuY2UoJHt0aGlzLmlkfSlgKVxuICBpZiAoQXJyYXkuaXNBcnJheShyZWYpKSB7XG4gICAgcmVmLnNvbWUoKHJlZikgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZmlyZUV2ZW50KHJlZiwgdHlwZSwgZSkgIT09IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGVsID0gdGhpcy5kb2MuZ2V0UmVmKHJlZilcblxuICBpZiAoZWwpIHtcbiAgICB0aGlzLmRvYy5jbG9zZSgpXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5kb2MuZmlyZUV2ZW50KGVsLCB0eXBlLCBlLCBkb21DaGFuZ2VzKVxuICAgIHRoaXMudXBkYXRlQWN0aW9ucygpXG4gICAgdGhpcy5kb2MubGlzdGVuZXIudXBkYXRlRmluaXNoKClcbiAgICB0aGlzLmRvYy5vcGVuKClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGVsZW1lbnQgcmVmZXJlbmNlIFwiJHtyZWZ9XCJgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbGJhY2sgKGNhbGxiYWNrSWQsIGRhdGEsIGlmS2VlcEFsaXZlKSB7XG4gIF8uZGVidWcoYEludm9rZSBhIGNhbGxiYWNrKCR7Y2FsbGJhY2tJZH0pIHdpdGhgLCBkYXRhLFxuICAgICAgICAgICAgYGluIGluc3RhbmNlKCR7dGhpcy5pZH0pYClcblxuICBjb25zdCBjYWxsYmFjayA9IHRoaXMuY2FsbGJhY2tzW2NhbGxiYWNrSWRdXG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuZG9jLmNsb3NlKClcbiAgICBjYWxsYmFjayhkYXRhKSAvLyBkYXRhIGlzIGFscmVhZHkgYSBvYmplY3QsIEBzZWU6IGxpYi9ydW50aW1lL2luZGV4LmpzXG5cbiAgICBpZiAodHlwZW9mIGlmS2VlcEFsaXZlID09PSAndW5kZWZpbmVkJyB8fCBpZktlZXBBbGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tzW2NhbGxiYWNrSWRdID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVBY3Rpb25zKClcbiAgICB0aGlzLmRvYy5saXN0ZW5lci51cGRhdGVGaW5pc2goKVxuICAgIHRoaXMuZG9jLm9wZW4oKVxuICAgIHJldHVyblxuICB9XG5cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBjYWxsYmFjayBpZCBcIiR7Y2FsbGJhY2tJZH1cImApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoRGF0YSAoZGF0YSkge1xuICBfLmRlYnVnKGBSZWZyZXNoIHdpdGhgLCBkYXRhLFxuICAgICAgICAgICAgYGluIGluc3RhbmNlWyR7dGhpcy5pZH1dYClcblxuICBjb25zdCB2bSA9IHRoaXMudm1cblxuICBpZiAodm0gJiYgZGF0YSkge1xuICAgIHRoaXMuZG9jLmNsb3NlKClcbiAgICBpZiAodHlwZW9mIHZtLnJlZnJlc2hEYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2bS5yZWZyZXNoRGF0YShkYXRhKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIF8uZXh0ZW5kKHZtLCBkYXRhKVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUFjdGlvbnMoKVxuICAgIHRoaXMuZG9jLmxpc3RlbmVyLnJlZnJlc2hGaW5pc2goKVxuICAgIHRoaXMuZG9jLm9wZW4oKVxuICAgIHJldHVyblxuICB9XG5cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBkYXRhIFwiJHtkYXRhfVwiYClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvaHRtbDUvZGVmYXVsdC9hcHAvY3RybC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpZmZlciB7XG4gIGNvbnN0cnVjdG9yIChpZCkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMubWFwID0gW11cbiAgICB0aGlzLmhvb2tzID0gW11cbiAgfVxuICBpc0VtcHR5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAubGVuZ3RoID09PSAwXG4gIH1cbiAgYXBwZW5kICh0eXBlLCBkZXB0aCwgcmVmLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLmhhc1RpbWVyKSB7XG4gICAgICB0aGlzLmhhc1RpbWVyID0gdHJ1ZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFzVGltZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLmZsdXNoKHRydWUpXG4gICAgICB9LCAwKVxuICAgIH1cbiAgICBjb25zdCBtYXAgPSB0aGlzLm1hcFxuICAgIGlmICghbWFwW2RlcHRoXSkge1xuICAgICAgbWFwW2RlcHRoXSA9IHt9XG4gICAgfVxuICAgIGNvbnN0IGdyb3VwID0gbWFwW2RlcHRoXVxuICAgIGlmICghZ3JvdXBbdHlwZV0pIHtcbiAgICAgIGdyb3VwW3R5cGVdID0ge31cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdlbGVtZW50Jykge1xuICAgICAgaWYgKCFncm91cFt0eXBlXVtyZWZdKSB7XG4gICAgICAgIGdyb3VwW3R5cGVdW3JlZl0gPSBbXVxuICAgICAgfVxuICAgICAgZ3JvdXBbdHlwZV1bcmVmXS5wdXNoKGhhbmRsZXIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZ3JvdXBbdHlwZV1bcmVmXSA9IGhhbmRsZXJcbiAgICB9XG4gIH1cbiAgZmx1c2ggKGlzVGltZW91dCkge1xuICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwLnNsaWNlKClcbiAgICB0aGlzLm1hcC5sZW5ndGggPSAwXG4gICAgbWFwLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICBjYWxsVHlwZU1hcChncm91cCwgJ3JlcGVhdCcpXG4gICAgICBjYWxsVHlwZU1hcChncm91cCwgJ3Nob3duJylcbiAgICAgIGNhbGxUeXBlTGlzdChncm91cCwgJ2VsZW1lbnQnKVxuICAgIH0pXG5cbiAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3Muc2xpY2UoKVxuICAgIHRoaXMuaG9va3MubGVuZ3RoID0gMFxuICAgIGhvb2tzLmZvckVhY2goKGZuKSA9PiB7XG4gICAgICBmbigpXG4gICAgfSlcblxuICAgIGlmICghdGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIHRoaXMuZmx1c2goKVxuICAgIH1cbiAgfVxuICB0aGVuIChmbikge1xuICAgIHRoaXMuaG9va3MucHVzaChmbilcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsVHlwZU1hcCAoZ3JvdXAsIHR5cGUpIHtcbiAgY29uc3QgbWFwID0gZ3JvdXBbdHlwZV1cbiAgZm9yIChjb25zdCByZWYgaW4gbWFwKSB7XG4gICAgbWFwW3JlZl0oKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGxUeXBlTGlzdCAoZ3JvdXAsIHR5cGUpIHtcbiAgY29uc3QgbWFwID0gZ3JvdXBbdHlwZV1cbiAgZm9yIChjb25zdCByZWYgaW4gbWFwKSB7XG4gICAgY29uc3QgbGlzdCA9IG1hcFtyZWZdXG4gICAgbGlzdC5mb3JFYWNoKChoYW5kbGVyKSA9PiB7IGhhbmRsZXIoKSB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L2RlZmF1bHQvYXBwL2RpZmZlci5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogQSBzaW1wbGUgdmlydHVhbCBkb20gaW1wbGVtZW50YXRpb25cbiAqL1xuXG5pbXBvcnQgTGlzdGVuZXIgZnJvbSAnLi9saXN0ZW5lcidcblxuY29uc3QgREVGQVVMVF9UQUdfTkFNRSA9ICdkaXYnXG5cbmV4cG9ydCBjb25zdCBpbnN0YW5jZU1hcCA9IHt9XG5sZXQgbmV4dE5vZGVSZWYgPSAxXG5cbmV4cG9ydCBmdW5jdGlvbiBEb2N1bWVudCAoaWQsIHVybCwgaGFuZGxlcikge1xuICBpZCA9IGlkID8gaWQudG9TdHJpbmcoKSA6ICcnXG4gIHRoaXMuaWQgPSBpZFxuICB0aGlzLlVSTCA9IHVybFxuXG4gIGluc3RhbmNlTWFwW2lkXSA9IHRoaXNcbiAgdGhpcy5ub2RlTWFwID0ge31cbiAgdGhpcy5saXN0ZW5lciA9IG5ldyBMaXN0ZW5lcihpZCwgaGFuZGxlciB8fCBnZW5DYWxsVGFza3MoaWQpKVxuICB0aGlzLmNyZWF0ZURvY3VtZW50RWxlbWVudCgpXG59XG5cbmZ1bmN0aW9uIGdlbkNhbGxUYXNrcyAoaWQpIHtcbiAgcmV0dXJuICh0YXNrcykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0YXNrcykpIHtcbiAgICAgIHRhc2tzID0gW3Rhc2tzXVxuICAgIH1cbiAgICByZXR1cm4gY2FsbE5hdGl2ZShpZCwgdGFza3MsICctMScpXG4gIH1cbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGRlbGV0ZSB0aGlzLmxpc3RlbmVyXG4gIGRlbGV0ZSB0aGlzLm5vZGVNYXBcbiAgZGVsZXRlIGluc3RhbmNlTWFwW3RoaXMuaWRdXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmxpc3RlbmVyLmJhdGNoZWQgPSBmYWxzZVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGlzdGVuZXIuYmF0Y2hlZCA9IHRydWVcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZURvY3VtZW50RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmRvY3VtZW50RWxlbWVudCkge1xuICAgIGNvbnN0IGVsID0gbmV3IEVsZW1lbnQoJ2RvY3VtZW50JylcbiAgICBlbC5kb2NJZCA9IHRoaXMuaWRcbiAgICBlbC5vd25lckRvY3VtZW50ID0gdGhpc1xuICAgIGVsLnJvbGUgPSAnZG9jdW1lbnRFbGVtZW50J1xuICAgIGVsLmRlcHRoID0gMFxuICAgIGVsLnJlZiA9ICdfZG9jdW1lbnRFbGVtZW50J1xuICAgIHRoaXMubm9kZU1hcC5fZG9jdW1lbnRFbGVtZW50ID0gZWxcbiAgICB0aGlzLmRvY3VtZW50RWxlbWVudCA9IGVsXG4gICAgZWwuYXBwZW5kQ2hpbGQgPSAobm9kZSkgPT4ge1xuICAgICAgYXBwZW5kQm9keSh0aGlzLCBub2RlKVxuICAgIH1cbiAgICBlbC5pbnNlcnRCZWZvcmUgPSAobm9kZSwgYmVmb3JlKSA9PiB7XG4gICAgICBhcHBlbmRCb2R5KHRoaXMsIG5vZGUsIGJlZm9yZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5kb2N1bWVudEVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYXBwZW5kQm9keSAoZG9jLCBub2RlLCBiZWZvcmUpIHtcbiAgY29uc3QgeyBkb2N1bWVudEVsZW1lbnQgfSA9IGRvY1xuXG4gIGlmIChkb2N1bWVudEVsZW1lbnQucHVyZUNoaWxkcmVuLmxlbmd0aCA+IDAgfHwgbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgY2hpbGRyZW4gPSBkb2N1bWVudEVsZW1lbnQuY2hpbGRyZW5cbiAgY29uc3QgYmVmb3JlSW5kZXggPSBjaGlsZHJlbi5pbmRleE9mKGJlZm9yZSlcbiAgaWYgKGJlZm9yZUluZGV4IDwgMCkge1xuICAgIGNoaWxkcmVuLnB1c2gobm9kZSlcbiAgfVxuICBlbHNlIHtcbiAgICBjaGlsZHJlbi5zcGxpY2UoYmVmb3JlSW5kZXgsIDAsIG5vZGUpXG4gIH1cblxuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgIGlmIChub2RlLnJvbGUgPT09ICdib2R5Jykge1xuICAgICAgbm9kZS5kb2NJZCA9IGRvYy5pZFxuICAgICAgbm9kZS5vd25lckRvY3VtZW50ID0gZG9jXG4gICAgICBub2RlLnBhcmVudE5vZGUgPSBkb2N1bWVudEVsZW1lbnRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gbm9kZVxuICAgICAgfSlcbiAgICAgIHNldEJvZHkoZG9jLCBub2RlKVxuICAgICAgbm9kZS5kb2NJZCA9IGRvYy5pZFxuICAgICAgbm9kZS5vd25lckRvY3VtZW50ID0gZG9jXG4gICAgICBsaW5rUGFyZW50KG5vZGUsIGRvY3VtZW50RWxlbWVudClcbiAgICAgIGRlbGV0ZSBkb2Mubm9kZU1hcFtub2RlLm5vZGVJZF1cbiAgICB9XG4gICAgZG9jdW1lbnRFbGVtZW50LnB1cmVDaGlsZHJlbi5wdXNoKG5vZGUpXG4gICAgZG9jLmxpc3RlbmVyLmNyZWF0ZUJvZHkobm9kZSlcbiAgfVxuICBlbHNlIHtcbiAgICBub2RlLnBhcmVudE5vZGUgPSBkb2N1bWVudEVsZW1lbnRcbiAgICBkb2Mubm9kZU1hcFtub2RlLnJlZl0gPSBub2RlXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Qm9keSAoZG9jLCBlbCkge1xuICBlbC5yb2xlID0gJ2JvZHknXG4gIGVsLmRlcHRoID0gMVxuICBkZWxldGUgZG9jLm5vZGVNYXBbZWwubm9kZUlkXVxuICBlbC5yZWYgPSAnX3Jvb3QnXG4gIGRvYy5ub2RlTWFwLl9yb290ID0gZWxcbiAgZG9jLmJvZHkgPSBlbFxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlQm9keSA9IGZ1bmN0aW9uICh0eXBlLCBwcm9wcykge1xuICBpZiAoIXRoaXMuYm9keSkge1xuICAgIGNvbnN0IGVsID0gbmV3IEVsZW1lbnQodHlwZSwgcHJvcHMpXG4gICAgc2V0Qm9keSh0aGlzLCBlbClcbiAgfVxuXG4gIHJldHVybiB0aGlzLmJvZHlcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnTmFtZSwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBFbGVtZW50KHRhZ05hbWUsIHByb3BzKVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlQ29tbWVudCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gIHJldHVybiBuZXcgQ29tbWVudCh0ZXh0KVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuZmlyZUV2ZW50ID0gZnVuY3Rpb24gKGVsLCB0eXBlLCBlLCBkb21DaGFuZ2VzKSB7XG4gIGlmICghZWwpIHtcbiAgICByZXR1cm5cbiAgfVxuICBlID0gZSB8fCB7fVxuICBlLnR5cGUgPSB0eXBlXG4gIGUudGFyZ2V0ID0gZWxcbiAgZS50aW1lc3RhbXAgPSBEYXRlLm5vdygpXG4gIGlmIChkb21DaGFuZ2VzKSB7XG4gICAgdXBkYXRlRWxlbWVudChlbCwgZG9tQ2hhbmdlcylcbiAgfVxuICByZXR1cm4gZWwuZmlyZUV2ZW50KHR5cGUsIGUpXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5nZXRSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gIHJldHVybiB0aGlzLm5vZGVNYXBbcmVmXVxufVxuXG5mdW5jdGlvbiB1cGRhdGVFbGVtZW50IChlbCwgY2hhbmdlcykge1xuICBjb25zdCBhdHRycyA9IGNoYW5nZXMuYXR0cnMgfHwge31cbiAgZm9yIChjb25zdCBuYW1lIGluIGF0dHJzKSB7XG4gICAgZWwuc2V0QXR0cihuYW1lLCBhdHRyc1tuYW1lXSwgdHJ1ZSlcbiAgfVxuICBjb25zdCBzdHlsZSA9IGNoYW5nZXMuc3R5bGUgfHwge31cbiAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlKSB7XG4gICAgZWwuc2V0U3R5bGUobmFtZSwgc3R5bGVbbmFtZV0sIHRydWUpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5vZGUgKCkge1xuICB0aGlzLm5vZGVJZCA9IChuZXh0Tm9kZVJlZisrKS50b1N0cmluZygpXG4gIHRoaXMucmVmID0gdGhpcy5ub2RlSWRcbiAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gIHRoaXMucHVyZUNoaWxkcmVuID0gW11cbiAgdGhpcy5wYXJlbnROb2RlID0gbnVsbFxuICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbFxuICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGxcbn1cblxuTm9kZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZG9jID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF1cbiAgaWYgKGRvYykge1xuICAgIGRlbGV0ZSB0aGlzLmRvY0lkXG4gICAgZGVsZXRlIGRvYy5ub2RlTWFwW3RoaXMubm9kZUlkXVxuICB9XG4gIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgY2hpbGQuZGVzdHJveSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFbGVtZW50ICh0eXBlID0gREVGQVVMVF9UQUdfTkFNRSwgcHJvcHMpIHtcbiAgcHJvcHMgPSBwcm9wcyB8fCB7fVxuICB0aGlzLm5vZGVUeXBlID0gMVxuICB0aGlzLm5vZGVJZCA9IChuZXh0Tm9kZVJlZisrKS50b1N0cmluZygpXG4gIHRoaXMucmVmID0gdGhpcy5ub2RlSWRcbiAgdGhpcy50eXBlID0gdHlwZVxuICB0aGlzLmF0dHIgPSBwcm9wcy5hdHRyIHx8IHt9XG4gIHRoaXMuY2xhc3NTdHlsZSA9IHByb3BzLmNsYXNzU3R5bGUgfHwge31cbiAgdGhpcy5zdHlsZSA9IHByb3BzLnN0eWxlIHx8IHt9XG4gIHRoaXMuZXZlbnQgPSB7fVxuICB0aGlzLmNoaWxkcmVuID0gW11cbiAgdGhpcy5wdXJlQ2hpbGRyZW4gPSBbXVxufVxuXG5FbGVtZW50LnByb3RvdHlwZSA9IG5ldyBOb2RlKClcblxuRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAobm9kZSkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZSAhPT0gdGhpcykge1xuICAgIHJldHVyblxuICB9XG4gIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgbGlua1BhcmVudChub2RlLCB0aGlzKVxuICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLCB0cnVlKVxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICByZWdpc3Rlck5vZGUodGhpcy5kb2NJZCwgbm9kZSlcbiAgICB9XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMucHVyZUNoaWxkcmVuLCB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGgpXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5hZGRFbGVtZW50KG5vZGUsIHRoaXMucmVmLCAtMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLCB0cnVlKVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG1vdmVJbmRleChub2RlLCB0aGlzLnB1cmVDaGlsZHJlbiwgdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgaWYgKHRoaXMuZG9jSWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5tb3ZlRWxlbWVudChub2RlLnJlZiwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRCZWZvcmUgPSBmdW5jdGlvbiAobm9kZSwgYmVmb3JlKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKG5vZGUgPT09IGJlZm9yZSB8fCBub2RlLm5leHRTaWJsaW5nID09PSBiZWZvcmUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgIGxpbmtQYXJlbnQobm9kZSwgdGhpcylcbiAgICBpbnNlcnRJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYmVmb3JlKSwgdHJ1ZSlcbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgcmVnaXN0ZXJOb2RlKHRoaXMuZG9jSWQsIG5vZGUpXG4gICAgfVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBwdXJlQmVmb3JlID0gbmV4dEVsZW1lbnQoYmVmb3JlKVxuICAgICAgY29uc3QgaW5kZXggPSBpbnNlcnRJbmRleChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4sXG4gICAgICAgIHB1cmVCZWZvcmVcbiAgICAgICAgICA/IHRoaXMucHVyZUNoaWxkcmVuLmluZGV4T2YocHVyZUJlZm9yZSlcbiAgICAgICAgICA6IHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aFxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIuYWRkRWxlbWVudChub2RlLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIG1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYmVmb3JlKSwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgcHVyZUJlZm9yZSA9IG5leHRFbGVtZW50KGJlZm9yZSlcbiAgICAgIGNvbnN0IGluZGV4ID0gbW92ZUluZGV4KFxuICAgICAgICBub2RlLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgcHVyZUJlZm9yZVxuICAgICAgICAgID8gdGhpcy5wdXJlQ2hpbGRyZW4uaW5kZXhPZihwdXJlQmVmb3JlKVxuICAgICAgICAgIDogdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoXG4gICAgICApXG4gICAgICBpZiAodGhpcy5kb2NJZCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLm1vdmVFbGVtZW50KG5vZGUucmVmLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmluc2VydEFmdGVyID0gZnVuY3Rpb24gKG5vZGUsIGFmdGVyKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKG5vZGUgPT09IGFmdGVyIHx8IG5vZGUucHJldmlvdXNTaWJsaW5nID09PSBhZnRlcikge1xuICAgIHJldHVyblxuICB9XG4gIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgbGlua1BhcmVudChub2RlLCB0aGlzKVxuICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihhZnRlcikgKyAxLCB0cnVlKVxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICByZWdpc3Rlck5vZGUodGhpcy5kb2NJZCwgbm9kZSlcbiAgICB9XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaW5zZXJ0SW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHByZXZpb3VzRWxlbWVudChhZnRlcikpICsgMVxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIuYWRkRWxlbWVudChub2RlLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIG1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYWZ0ZXIpICsgMSwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBtb3ZlSW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHByZXZpb3VzRWxlbWVudChhZnRlcikpICsgMVxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5tb3ZlRWxlbWVudChub2RlLnJlZiwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChub2RlLCBwcmVzZXJ2ZWQpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgIHJlbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRydWUpXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJlbW92ZUluZGV4KG5vZGUsIHRoaXMucHVyZUNoaWxkcmVuKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICBsaXN0ZW5lci5yZW1vdmVFbGVtZW50KG5vZGUucmVmKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIXByZXNlcnZlZCkge1xuICAgIG5vZGUuZGVzdHJveSgpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIHRoaXMucHVyZUNoaWxkcmVuLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBsaXN0ZW5lci5yZW1vdmVFbGVtZW50KG5vZGUucmVmKVxuICAgIH0pXG4gIH1cbiAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIG5vZGUuZGVzdHJveSgpXG4gIH0pXG4gIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID0gMFxuICB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGggPSAwXG59XG5cbmZ1bmN0aW9uIG5leHRFbGVtZW50IChub2RlKSB7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuICAgIG5vZGUgPSBub2RlLm5leHRTaWJsaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJldmlvdXNFbGVtZW50IChub2RlKSB7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnByZXZpb3VzU2libGluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIGxpbmtQYXJlbnQgKG5vZGUsIHBhcmVudCkge1xuICBub2RlLnBhcmVudE5vZGUgPSBwYXJlbnRcbiAgaWYgKHBhcmVudC5kb2NJZCkge1xuICAgIG5vZGUuZG9jSWQgPSBwYXJlbnQuZG9jSWRcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSBwYXJlbnQub3duZXJEb2N1bWVudFxuICAgIG5vZGUub3duZXJEb2N1bWVudC5ub2RlTWFwW25vZGUubm9kZUlkXSA9IG5vZGVcbiAgICBub2RlLmRlcHRoID0gcGFyZW50LmRlcHRoICsgMVxuICB9XG4gIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgbGlua1BhcmVudChjaGlsZCwgbm9kZSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJOb2RlIChkb2NJZCwgbm9kZSkge1xuICBjb25zdCBkb2MgPSBpbnN0YW5jZU1hcFtkb2NJZF1cbiAgZG9jLm5vZGVNYXBbbm9kZS5ub2RlSWRdID0gbm9kZVxufVxuXG5mdW5jdGlvbiBpbnNlcnRJbmRleCAodGFyZ2V0LCBsaXN0LCBuZXdJbmRleCwgY2hhbmdlU2libGluZykge1xuICBpZiAobmV3SW5kZXggPCAwKSB7XG4gICAgbmV3SW5kZXggPSAwXG4gIH1cbiAgY29uc3QgYmVmb3JlID0gbGlzdFtuZXdJbmRleCAtIDFdXG4gIGNvbnN0IGFmdGVyID0gbGlzdFtuZXdJbmRleF1cbiAgbGlzdC5zcGxpY2UobmV3SW5kZXgsIDAsIHRhcmdldClcbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBiZWZvcmUgJiYgKGJlZm9yZS5uZXh0U2libGluZyA9IHRhcmdldClcbiAgICB0YXJnZXQucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlXG4gICAgdGFyZ2V0Lm5leHRTaWJsaW5nID0gYWZ0ZXJcbiAgICBhZnRlciAmJiAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nID0gdGFyZ2V0KVxuICB9XG4gIHJldHVybiBuZXdJbmRleFxufVxuXG5mdW5jdGlvbiBtb3ZlSW5kZXggKHRhcmdldCwgbGlzdCwgbmV3SW5kZXgsIGNoYW5nZVNpYmxpbmcpIHtcbiAgY29uc3QgaW5kZXggPSBsaXN0LmluZGV4T2YodGFyZ2V0KVxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBjb25zdCBiZWZvcmUgPSBsaXN0W2luZGV4IC0gMV1cbiAgICBjb25zdCBhZnRlciA9IGxpc3RbaW5kZXggKyAxXVxuICAgIGJlZm9yZSAmJiAoYmVmb3JlLm5leHRTaWJsaW5nID0gYWZ0ZXIpXG4gICAgYWZ0ZXIgJiYgKGFmdGVyLnByZXZpb3VzU2libGluZyA9IGJlZm9yZSlcbiAgfVxuICBsaXN0LnNwbGljZShpbmRleCwgMSlcbiAgbGV0IG5ld0luZGV4QWZ0ZXIgPSBuZXdJbmRleFxuICBpZiAoaW5kZXggPD0gbmV3SW5kZXgpIHtcbiAgICBuZXdJbmRleEFmdGVyID0gbmV3SW5kZXggLSAxXG4gIH1cbiAgY29uc3QgYmVmb3JlTmV3ID0gbGlzdFtuZXdJbmRleEFmdGVyIC0gMV1cbiAgY29uc3QgYWZ0ZXJOZXcgPSBsaXN0W25ld0luZGV4QWZ0ZXJdXG4gIGxpc3Quc3BsaWNlKG5ld0luZGV4QWZ0ZXIsIDAsIHRhcmdldClcbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBiZWZvcmVOZXcgJiYgKGJlZm9yZU5ldy5uZXh0U2libGluZyA9IHRhcmdldClcbiAgICB0YXJnZXQucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlTmV3XG4gICAgdGFyZ2V0Lm5leHRTaWJsaW5nID0gYWZ0ZXJOZXdcbiAgICBhZnRlck5ldyAmJiAoYWZ0ZXJOZXcucHJldmlvdXNTaWJsaW5nID0gdGFyZ2V0KVxuICB9XG4gIGlmIChpbmRleCA9PT0gbmV3SW5kZXhBZnRlcikge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHJldHVybiBuZXdJbmRleFxufVxuXG5mdW5jdGlvbiByZW1vdmVJbmRleCAodGFyZ2V0LCBsaXN0LCBjaGFuZ2VTaWJsaW5nKSB7XG4gIGNvbnN0IGluZGV4ID0gbGlzdC5pbmRleE9mKHRhcmdldClcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgY29uc3QgYmVmb3JlID0gbGlzdFtpbmRleCAtIDFdXG4gICAgY29uc3QgYWZ0ZXIgPSBsaXN0W2luZGV4ICsgMV1cbiAgICBiZWZvcmUgJiYgKGJlZm9yZS5uZXh0U2libGluZyA9IGFmdGVyKVxuICAgIGFmdGVyICYmIChhZnRlci5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmUpXG4gIH1cbiAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpXG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgc2lsZW50KSB7XG4gIGlmICh0aGlzLmF0dHJba2V5XSA9PT0gdmFsdWUpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLmF0dHJba2V5XSA9IHZhbHVlXG4gIGlmICghc2lsZW50ICYmIHRoaXMuZG9jSWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgbGlzdGVuZXIuc2V0QXR0cih0aGlzLnJlZiwga2V5LCB2YWx1ZSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBzaWxlbnQpIHtcbiAgaWYgKHRoaXMuc3R5bGVba2V5XSA9PT0gdmFsdWUpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLnN0eWxlW2tleV0gPSB2YWx1ZVxuICBpZiAoIXNpbGVudCAmJiB0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldFN0eWxlKHRoaXMucmVmLCBrZXksIHZhbHVlKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldENsYXNzU3R5bGUgPSBmdW5jdGlvbiAoY2xhc3NTdHlsZSkge1xuICB0aGlzLmNsYXNzU3R5bGUgPSBjbGFzc1N0eWxlXG4gIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldFN0eWxlcyh0aGlzLnJlZiwgdGhpcy50b1N0eWxlKCkpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgaGFuZGxlcikge1xuICBpZiAoIXRoaXMuZXZlbnRbdHlwZV0pIHtcbiAgICB0aGlzLmV2ZW50W3R5cGVdID0gaGFuZGxlclxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICBsaXN0ZW5lci5hZGRFdmVudCh0aGlzLnJlZiwgdHlwZSlcbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAodHlwZSkge1xuICBpZiAodGhpcy5ldmVudFt0eXBlXSkge1xuICAgIGRlbGV0ZSB0aGlzLmV2ZW50W3R5cGVdXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgIGxpc3RlbmVyLnJlbW92ZUV2ZW50KHRoaXMucmVmLCB0eXBlKVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5maXJlRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgZSkge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5ldmVudFt0eXBlXVxuICBpZiAoaGFuZGxlcikge1xuICAgIHJldHVybiBoYW5kbGVyLmNhbGwodGhpcywgZSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS50b1N0eWxlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jbGFzc1N0eWxlLCB0aGlzLnN0eWxlKVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICByZWY6IHRoaXMucmVmLnRvU3RyaW5nKCksXG4gICAgdHlwZTogdGhpcy50eXBlLFxuICAgIGF0dHI6IHRoaXMuYXR0cixcbiAgICBzdHlsZTogdGhpcy50b1N0eWxlKClcbiAgfVxuICBjb25zdCBldmVudCA9IE9iamVjdC5rZXlzKHRoaXMuZXZlbnQpXG4gIGlmIChldmVudC5sZW5ndGgpIHtcbiAgICByZXN1bHQuZXZlbnQgPSBldmVudFxuICB9XG4gIGlmICh0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGgpIHtcbiAgICByZXN1bHQuY2hpbGRyZW4gPSB0aGlzLnB1cmVDaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZC50b0pTT04oKSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJzwnICsgdGhpcy50eXBlICtcbiAgICAnIGF0dHI9JyArIEpTT04uc3RyaW5naWZ5KHRoaXMuYXR0cikgK1xuICAgICcgc3R5bGU9JyArIEpTT04uc3RyaW5naWZ5KHRoaXMudG9TdHlsZSgpKSArICc+JyArXG4gICAgdGhpcy5wdXJlQ2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQudG9TdHJpbmcoKSkuam9pbignJykgK1xuICAgICc8LycgKyB0aGlzLnR5cGUgKyAnPidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbW1lbnQgKHZhbHVlKSB7XG4gIHRoaXMubm9kZVR5cGUgPSA4XG4gIHRoaXMubm9kZUlkID0gKG5leHROb2RlUmVmKyspLnRvU3RyaW5nKClcbiAgdGhpcy5yZWYgPSB0aGlzLm5vZGVJZFxuICB0aGlzLnR5cGUgPSAnY29tbWVudCdcbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIHRoaXMuY2hpbGRyZW4gPSBbXVxuICB0aGlzLnB1cmVDaGlsZHJlbiA9IFtdXG59XG5cbkNvbW1lbnQucHJvdG90eXBlID0gbmV3IE5vZGUoKVxuXG5Db21tZW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICc8IS0tICcgKyB0aGlzLnZhbHVlICsgJyAtLT4nXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L3Zkb20vaW5kZXguanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0ZW5lciAoaWQsIGhhbmRsZXIpIHtcbiAgdGhpcy5pZCA9IGlkXG4gIHRoaXMuYmF0Y2hlZCA9IGZhbHNlXG4gIHRoaXMudXBkYXRlcyA9IFtdXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXJcbiAgfVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuY3JlYXRlRmluaXNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXJcbiAgcmV0dXJuIGhhbmRsZXIoW2NyZWF0ZUFjdGlvbignY3JlYXRlRmluaXNoJywgW10pXSwgY2FsbGJhY2spXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS51cGRhdGVGaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICByZXR1cm4gaGFuZGxlcihbY3JlYXRlQWN0aW9uKCd1cGRhdGVGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnJlZnJlc2hGaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICByZXR1cm4gaGFuZGxlcihbY3JlYXRlQWN0aW9uKCdyZWZyZXNoRmluaXNoJywgW10pXSwgY2FsbGJhY2spXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5jcmVhdGVCb2R5ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgY29uc3QgYm9keSA9IGVsZW1lbnQudG9KU09OKClcbiAgY29uc3QgY2hpbGRyZW4gPSBib2R5LmNoaWxkcmVuXG4gIGRlbGV0ZSBib2R5LmNoaWxkcmVuXG4gIGNvbnN0IGFjdGlvbnMgPSBbY3JlYXRlQWN0aW9uKCdjcmVhdGVCb2R5JywgW2JvZHldKV1cbiAgaWYgKGNoaWxkcmVuKSB7XG4gICAgYWN0aW9ucy5wdXNoLmFwcGx5KGFjdGlvbnMsIGNoaWxkcmVuLm1hcChjaGlsZCA9PiB7XG4gICAgICByZXR1cm4gY3JlYXRlQWN0aW9uKCdhZGRFbGVtZW50JywgW2JvZHkucmVmLCBjaGlsZCwgLTFdKVxuICAgIH0pKVxuICB9XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoYWN0aW9ucylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmFkZEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcmVmLCBpbmRleCkge1xuICBpZiAoIShpbmRleCA+PSAwKSkge1xuICAgIGluZGV4ID0gLTFcbiAgfVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbignYWRkRWxlbWVudCcsIFtyZWYsIGVsZW1lbnQudG9KU09OKCksIGluZGV4XSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5yZW1vdmVFbGVtZW50ID0gZnVuY3Rpb24gKHJlZikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyZWYpKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IHJlZi5tYXAoKHIpID0+IGNyZWF0ZUFjdGlvbigncmVtb3ZlRWxlbWVudCcsIFtyXSkpXG4gICAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhhY3Rpb25zKVxuICB9XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdyZW1vdmVFbGVtZW50JywgW3JlZl0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUubW92ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFyZ2V0UmVmLCBwYXJlbnRSZWYsIGluZGV4KSB7XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdtb3ZlRWxlbWVudCcsIFt0YXJnZXRSZWYsIHBhcmVudFJlZiwgaW5kZXhdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnNldEF0dHIgPSBmdW5jdGlvbiAocmVmLCBrZXksIHZhbHVlKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9XG4gIHJlc3VsdFtrZXldID0gdmFsdWVcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3VwZGF0ZUF0dHJzJywgW3JlZiwgcmVzdWx0XSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIChyZWYsIGtleSwgdmFsdWUpIHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigndXBkYXRlU3R5bGUnLCBbcmVmLCByZXN1bHRdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnNldFN0eWxlcyA9IGZ1bmN0aW9uIChyZWYsIHN0eWxlKSB7XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCd1cGRhdGVTdHlsZScsIFtyZWYsIHN0eWxlXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5hZGRFdmVudCA9IGZ1bmN0aW9uIChyZWYsIHR5cGUpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ2FkZEV2ZW50JywgW3JlZiwgdHlwZV0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAocmVmLCB0eXBlKSB7XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdyZW1vdmVFdmVudCcsIFtyZWYsIHR5cGVdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmhhbmRsZXIgPSBmdW5jdGlvbiAoYWN0aW9ucywgY2IpIHtcbiAgcmV0dXJuIGNiICYmIGNiKClcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmFkZEFjdGlvbnMgPSBmdW5jdGlvbiAoYWN0aW9ucykge1xuICBjb25zdCB1cGRhdGVzID0gdGhpcy51cGRhdGVzXG4gIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXJcblxuICBpZiAoIUFycmF5LmlzQXJyYXkoYWN0aW9ucykpIHtcbiAgICBhY3Rpb25zID0gW2FjdGlvbnNdXG4gIH1cblxuICBpZiAodGhpcy5iYXRjaGVkKSB7XG4gICAgdXBkYXRlcy5wdXNoLmFwcGx5KHVwZGF0ZXMsIGFjdGlvbnMpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGhhbmRsZXIoYWN0aW9ucylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWN0aW9uIChuYW1lLCBhcmdzKSB7XG4gIHJldHVybiB7IG1vZHVsZTogJ2RvbScsIG1ldGhvZDogbmFtZSwgYXJnczogYXJncyB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvemhhb2ppbmppYW5nL1NpdGVzL3B1YmxpYy93ZWV4L2h0bWw1L3Zkb20vbGlzdGVuZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYW1lXCI6IFwid2VleFwiLFxuXHRcInZlcnNpb25cIjogXCIwLjQuMFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiQSBmcmFtZXdvcmsgZm9yIGJ1aWxkaW5nIE1vYmlsZSBjcm9zcy1wbGF0Zm9ybSBVSVwiLFxuXHRcImxpY2Vuc2VcIjogXCJBcGFjaGUtMi4wXCIsXG5cdFwicmVwb3NpdG9yeVwiOiB7XG5cdFx0XCJ0eXBlXCI6IFwiZ2l0XCIsXG5cdFx0XCJ1cmxcIjogXCJnaXRAZ2l0aHViLmNvbTphbGliYWJhL3dlZXguZ2l0XCJcblx0fSxcblx0XCJob21lcGFnZVwiOiBcImh0dHA6Ly9hbGliYWJhLmdpdGh1Yi5pby93ZWV4L1wiLFxuXHRcImJ1Z3NcIjoge1xuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FsaWJhYmEvd2VleC9pc3N1ZXNcIlxuXHR9LFxuXHRcInByaXZhdGVcIjogXCJ0cnVlXCIsXG5cdFwia2V5d29yZHNcIjogW1xuXHRcdFwid2VleFwiLFxuXHRcdFwiaHlicmlkXCIsXG5cdFx0XCJ3ZWJjb21wb25lbnRcIixcblx0XHRcImFwcGZyYW1ld29ya1wiLFxuXHRcdFwibXZ2bVwiLFxuXHRcdFwiamF2YXNjcmlwdFwiLFxuXHRcdFwid2Via2l0XCIsXG5cdFx0XCJ2OFwiLFxuXHRcdFwianNjb3JlXCIsXG5cdFx0XCJodG1sNVwiLFxuXHRcdFwiYW5kcm9pZFwiLFxuXHRcdFwiaW9zXCIsXG5cdFx0XCJ5dW5vc1wiXG5cdF0sXG5cdFwiZW5naW5lc1wiOiB7XG5cdFx0XCJub2RlXCI6IFwiPj00XCJcblx0fSxcblx0XCJzY3JpcHRzXCI6IHtcblx0XHRcInBvc3RpbnN0YWxsXCI6IFwiYmFzaCAuL2Jpbi9pbnN0YWxsLWhvb2tzLnNoXCIsXG5cdFx0XCJidWlsZDpjb25maWdcIjogXCJub2RlIGJ1aWxkL2NvbmZpZy5mcmFtZXdvcmtzLmpzXCIsXG5cdFx0XCJidWlsZDpicm93c2VyXCI6IFwid2VicGFjayAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLmJyb3dzZXIuY29uZmlnLmpzXCIsXG5cdFx0XCJidWlsZDpuYXRpdmVcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2submF0aXZlLmNvbmZpZy5qc1wiLFxuXHRcdFwiYnVpbGQ6ZXhhbXBsZXNcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2suZXhhbXBsZXMuY29uZmlnLmpzXCIsXG5cdFx0XCJidWlsZDp0ZXN0XCI6IFwid2VicGFjayAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLnRlc3QuY29uZmlnLmpzXCIsXG5cdFx0XCJkaXN0OmJyb3dzZXJcIjogXCJucG0gcnVuIGJ1aWxkOmJyb3dzZXIgJiYgYmFzaCAuL2Jpbi9kaXN0LWJyb3dzZXIuc2hcIixcblx0XHRcImRpc3RcIjogXCJucG0gcnVuIGRpc3Q6YnJvd3NlclwiLFxuXHRcdFwiZGV2OmJyb3dzZXJcIjogXCJ3ZWJwYWNrIC0td2F0Y2ggLS1jb25maWcgYnVpbGQvd2VicGFjay5icm93c2VyLmNvbmZpZy5qc1wiLFxuXHRcdFwiZGV2Om5hdGl2ZVwiOiBcIndlYnBhY2sgLS13YXRjaCAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLm5hdGl2ZS5jb25maWcuanNcIixcblx0XHRcImRldjpleGFtcGxlc1wiOiBcIndlYnBhY2sgLS13YXRjaCAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLmV4YW1wbGVzLmNvbmZpZy5qc1wiLFxuXHRcdFwiZGV2OnRlc3RcIjogXCJ3ZWJwYWNrIC0td2F0Y2ggLS1jb25maWcgYnVpbGQvd2VicGFjay50ZXN0LmNvbmZpZy5qc1wiLFxuXHRcdFwiYnVpbGRcIjogXCJucG0gcnVuIGJ1aWxkOm5hdGl2ZSAmJiBucG0gcnVuIGJ1aWxkOmJyb3dzZXIgJiYgbnBtIHJ1biBidWlsZDpleGFtcGxlcyAmJiBucG0gcnVuIGJ1aWxkOnRlc3RcIixcblx0XHRcImxpbnRcIjogXCJlc2xpbnQgaHRtbDVcIixcblx0XHRcInRlc3Q6dW5pdFwiOiBcIm1vY2hhIC0tY29tcGlsZXJzIGpzOmJhYmVsLWNvcmUvcmVnaXN0ZXIgaHRtbDUvdGVzdC91bml0LyovKi5qcyBodG1sNS90ZXN0L3VuaXQvKi8qLyouanNcIixcblx0XHRcInRlc3Q6Y292ZXJcIjogXCJiYWJlbC1ub2RlIG5vZGVfbW9kdWxlcy9pc3BhcnRhL2Jpbi9pc3BhcnRhIGNvdmVyIC0tcmVwb3J0IHRleHQgbm9kZV9tb2R1bGVzL21vY2hhL2Jpbi9fbW9jaGEgLS0gLS1yZXBvcnRlciBkb3QgaHRtbDUvdGVzdC91bml0LyovKi5qcyBodG1sNS90ZXN0L3VuaXQvKi8qLyouanNcIixcblx0XHRcInRlc3Q6ZTJlXCI6IFwibm9kZSBodG1sNS90ZXN0L2UyZS9ydW5uZXIuanNcIixcblx0XHRcInRlc3RcIjogXCJucG0gcnVuIGJ1aWxkOmNvbmZpZyAmJiBucG0gcnVuIGxpbnQgJiYgbnBtIHJ1biB0ZXN0OmNvdmVyXCIsXG5cdFx0XCJzZXJ2ZVwiOiBcInNlcnZlIC4vIC1wIDEyNTgwXCIsXG5cdFx0XCJjbGVhbjpleGFtcGxlc1wiOiBcImVjaG8gXFxcIlxcXFwwMzNbMzY7MW1bQ2xlYW5dXFxcXDAzM1swbSBcXFxcMDMzWzMzbWV4YW1wbGVzXFxcXDAzM1swbVxcXCIgJiYgcm0gLXZyZiBleGFtcGxlcy9idWlsZC8qXCIsXG5cdFx0XCJjbGVhbjp0ZXN0XCI6IFwiZWNobyBcXFwiXFxcXDAzM1szNjsxbVtDbGVhbl1cXFxcMDMzWzBtIFxcXFwwMzNbMzNtdGVzdFxcXFwwMzNbMG1cXFwiICYmIHJtIC12cmYgdGVzdC9idWlsZC8qXCIsXG5cdFx0XCJjbGVhblwiOiBcIm5wbSBydW4gY2xlYW46ZXhhbXBsZXMgJiYgbnBtIHJ1biBjbGVhbjp0ZXN0XCIsXG5cdFx0XCJjb3B5OmpzXCI6IFwiY3AgLXZmIC4vZGlzdC9uYXRpdmUuanMgLi9hbmRyb2lkL3Nkay9hc3NldHMvbWFpbi5qc1wiLFxuXHRcdFwiY29weTpleGFtcGxlc1wiOiBcInJtIC1yZiAuL2FuZHJvaWQvcGxheWdyb3VuZC9hcHAvc3JjL21haW4vYXNzZXRzLyogJiYgY3AgLXZyZiAuL2V4YW1wbGVzL2J1aWxkLyogLi9hbmRyb2lkL3BsYXlncm91bmQvYXBwL3NyYy9tYWluL2Fzc2V0cy9cIixcblx0XHRcImNvcHlcIjogXCJucG0gcnVuIGNvcHk6anMgJiYgbnBtIHJ1biBjb3B5OmV4YW1wbGVzXCJcblx0fSxcblx0XCJzdWJ2ZXJzaW9uXCI6IHtcblx0XHRcImJyb3dzZXJcIjogXCIwLjIuMjNcIixcblx0XHRcImZyYW1ld29ya1wiOiBcIjAuMTQuN1wiLFxuXHRcdFwidHJhbnNmb3JtZXJcIjogXCI+PTAuMS41IDwwLjRcIlxuXHR9LFxuXHRcImRlcGVuZGVuY2llc1wiOiB7XG5cdFx0XCJhbmltYXRpb25qc1wiOiBcIl4wLjEuNVwiLFxuXHRcdFwiY2Fycm91c2VsXCI6IFwiXjAuMS4xMVwiLFxuXHRcdFwiY29yZS1qc1wiOiBcIl4yLjQuMFwiLFxuXHRcdFwiY3ViaWNiZXppZXJcIjogXCJeMC4xLjFcIixcblx0XHRcImVudmRcIjogXCJeMC4xLjFcIixcblx0XHRcImZpeGVkc3RpY2t5XCI6IFwiXjAuMS4wXCIsXG5cdFx0XCJodHRwdXJsXCI6IFwiXjAuMS4xXCIsXG5cdFx0XCJrb3VudGRvd25cIjogXCJeMC4xLjJcIixcblx0XHRcImxhenlpbWdcIjogXCJeMC4xLjJcIixcblx0XHRcImxpZVwiOiBcIl4zLjAuNFwiLFxuXHRcdFwibW9kYWxzXCI6IFwiXjAuMS41XCIsXG5cdFx0XCJzY3JvbGwtdG9cIjogXCIwLjAuMlwiLFxuXHRcdFwic2VtdmVyXCI6IFwiXjUuMS4wXCIsXG5cdFx0XCJ0cmFuc2l0aW9uaXplXCI6IFwiMC4wLjNcIixcblx0XHRcIndlZXgtY29tcG9uZW50c1wiOiBcIl4wLjEuM1wiXG5cdH0sXG5cdFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcblx0XHRcImJhYmVsLWNsaVwiOiBcIn42LjQuNVwiLFxuXHRcdFwiYmFiZWwtbG9hZGVyXCI6IFwiXjYuMi40XCIsXG5cdFx0XCJiYWJlbC1wcmVzZXQtZXMyMDE1XCI6IFwiXjYuOS4wXCIsXG5cdFx0XCJjaGFpXCI6IFwiXjMuNS4wXCIsXG5cdFx0XCJjaHJvbWVkcml2ZXJcIjogXCJeMi4yMS4yXCIsXG5cdFx0XCJjcm9zcy1zcGF3blwiOiBcIl40LjAuMFwiLFxuXHRcdFwiY3NzLWxvYWRlclwiOiBcIl4wLjIzLjFcIixcblx0XHRcImVzbGludFwiOiBcIl4yLjExLjFcIixcblx0XHRcImh0dHAtc2VydmVyXCI6IFwiXjAuOS4wXCIsXG5cdFx0XCJpc3BhcnRhXCI6IFwiXjQuMC4wXCIsXG5cdFx0XCJpc3RhbmJ1bFwiOiBcIl4wLjQuM1wiLFxuXHRcdFwianNvbi1sb2FkZXJcIjogXCJeMC41LjRcIixcblx0XHRcIm1vY2hhXCI6IFwiXjIuNS4zXCIsXG5cdFx0XCJuaWdodHdhdGNoXCI6IFwiXjAuOS40XCIsXG5cdFx0XCJwaGFudG9tanMtcHJlYnVpbHRcIjogXCJeMi4xLjdcIixcblx0XHRcInNlbGVuaXVtLXNlcnZlclwiOiBcIl4yLjUzLjBcIixcblx0XHRcInNlcnZlXCI6IFwiXjEuNC4wXCIsXG5cdFx0XCJzaW5vblwiOiBcIl4xLjE3LjRcIixcblx0XHRcInNpbm9uLWNoYWlcIjogXCJeMi44LjBcIixcblx0XHRcInN0eWxlLWxvYWRlclwiOiBcIl4wLjEzLjFcIixcblx0XHRcInVnbGlmeS1qc1wiOiBcIl4yLjYuNFwiLFxuXHRcdFwid2VicGFja1wiOiBcIl4xLjEzLjFcIixcblx0XHRcIndlZXgtbG9hZGVyXCI6IFwiXjAuMi4wXCJcblx0fVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy96aGFvamluamlhbmcvU2l0ZXMvcHVibGljL3dlZXgvcGFja2FnZS5qc29uXG4gKiogbW9kdWxlIGlkID0gMTAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgVGhlIGFwaSBmb3IgaW52b2tpbmcgd2l0aCBcIiRcIiBwcmVmaXhcbiAqL1xuaW1wb3J0ICogYXMgXyBmcm9tICcuLi91dGlsJ1xuXG4vKipcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIGNvbW1vblxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgdXNlICR2bSBpbnN0ZWFkXG4gKiBmaW5kIHRoZSB2bSBieSBpZFxuICogTm90ZTogdGhlcmUgaXMgb25seSBvbmUgaWQgaW4gd2hvbGUgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtWbX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICQgKGlkKSB7XG4gIF8ud2FybignVm0jJCBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIFZtIyR2bSBpbnN0ZWFkJylcbiAgY29uc3QgaW5mbyA9IHRoaXMuX2lkc1tpZF1cbiAgaWYgKGluZm8pIHtcbiAgICByZXR1cm4gaW5mby52bVxuICB9XG59XG5cbi8qKlxuICogZmluZCB0aGUgZWxlbWVudCBieSBpZFxuICogTm90ZTogdGhlcmUgaXMgb25seSBvbmUgaWQgaW4gd2hvbGUgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gJGVsIChpZCkge1xuICBjb25zdCBpbmZvID0gdGhpcy5faWRzW2lkXVxuICBpZiAoaW5mbykge1xuICAgIHJldHVybiBpbmZvLmVsXG4gIH1cbn1cblxuLyoqXG4gKiBmaW5kIHRoZSB2bSBvZiB0aGUgY3VzdG9tIGNvbXBvbmVudCBieSBpZFxuICogTm90ZTogdGhlcmUgaXMgb25seSBvbmUgaWQgaW4gd2hvbGUgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtWbX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICR2bSAoaWQpIHtcbiAgY29uc3QgaW5mbyA9IHRoaXMuX2lkc1tpZF1cbiAgaWYgKGluZm8pIHtcbiAgICByZXR1cm4gaW5mby52bVxuICB9XG59XG5cbi8qKlxuICogRmlyZSB3aGVuIGRpZmZlciByZW5kZXJpbmcgZmluaXNoZWRcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRyZW5kZXJUaGVuIChmbikge1xuICBjb25zdCBhcHAgPSB0aGlzLl9hcHBcbiAgY29uc3QgZGlmZmVyID0gYXBwLmRpZmZlclxuICByZXR1cm4gZGlmZmVyLnRoZW4oKCkgPT4ge1xuICAgIGZuKClcbiAgfSlcbn1cblxuLyoqXG4gKiBzY3JvbGwgYW4gZWxlbWVudCBzcGVjaWZpZWQgYnkgaWQgaW50byB2aWV3LFxuICogbW9yZW92ZXIgc3BlY2lmeSBhIG51bWJlciBvZiBvZmZzZXQgb3B0aW9uYWxseVxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHBhcmFtICB7bnVtYmVyfSBvZmZzZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzY3JvbGxUbyAoaWQsIG9mZnNldCkge1xuICBfLndhcm4oJ1ZtIyRzY3JvbGxUbyBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL2RvbVxcJyknICtcbiAgICAgICAgICAnLnNjcm9sbFRvKGVsLCBvcHRpb25zKVwiIGluc3RlYWQnKVxuICBjb25zdCBlbCA9IHRoaXMuJGVsKGlkKVxuICBpZiAoZWwpIHtcbiAgICBjb25zdCBkb20gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnZG9tJylcbiAgICBkb20uc2Nyb2xsVG9FbGVtZW50KGVsLnJlZiwgeyBvZmZzZXQ6IG9mZnNldCB9KVxuICB9XG59XG5cbi8qKlxuICogcGVyZm9ybSB0cmFuc2l0aW9uIGFuaW1hdGlvbiBvbiBhbiBlbGVtZW50IHNwZWNpZmllZCBieSBpZFxuICogQHBhcmFtICB7c3RyaW5nfSAgIGlkXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgb3B0aW9uc1xuICogQHBhcmFtICB7b2JqZWN0fSAgIG9wdGlvbnMuc3R5bGVzXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgb3B0aW9ucy5kdXJhdGlvbihtcylcbiAqIEBwYXJhbSAge29iamVjdH0gICBbb3B0aW9ucy50aW1pbmdGdW5jdGlvbl1cbiAqIEBwYXJhbSAge29iamVjdH0gICBbb3B0aW9ucy5kZWxheT0wKG1zKV1cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJHRyYW5zaXRpb24gKGlkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBjb25zdCBlbCA9IHRoaXMuJGVsKGlkKVxuICBpZiAoZWwgJiYgb3B0aW9ucyAmJiBvcHRpb25zLnN0eWxlcykge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdhbmltYXRpb24nKVxuICAgIGFuaW1hdGlvbi50cmFuc2l0aW9uKGVsLnJlZiwgb3B0aW9ucywgKC4uLmFyZ3MpID0+IHtcbiAgICAgIHRoaXMuX3NldFN0eWxlKGVsLCBvcHRpb25zLnN0eWxlcylcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKC4uLmFyZ3MpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIGdldCBzb21lIGNvbmZpZ1xuICogQHJldHVybiB7b2JqZWN0fSBzb21lIGNvbmZpZyBmb3IgYXBwIGluc3RhbmNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gYnVuZGxlVXJsXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGRlYnVnXG4gKiBAcHJvcGVydHkge29iamVjdH0gZW52XG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LndlZXhWZXJzaW9uKGV4LiAxLjAuMClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYuYXBwTmFtZShleC4gVEIvVE0pXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LmFwcFZlcnNpb24oZXguIDUuMC4wKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5wbGF0Zm9ybShleC4gaU9TL0FuZHJvaWQpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52Lm9zVmVyc2lvbihleC4gNy4wLjApXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LmRldmljZU1vZGVsICoqbmF0aXZlIG9ubHkqKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVudi5bZGV2aWNlV2lkdGg9NzUwXVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVudi5kZXZpY2VIZWlnaHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRnZXRDb25maWcgKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGNvbmZpZyA9IF8uZXh0ZW5kKHtcbiAgICBlbnY6IGdsb2JhbC5XWEVudmlyb25tZW50IHx8IHt9XG4gIH0sIHRoaXMuX2FwcC5vcHRpb25zKVxuICBpZiAoXy50eXBvZihjYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIHtcbiAgICBfLndhcm4oJ3RoZSBjYWxsYmFjayBvZiBWbSMkZ2V0Q29uZmlnKGNhbGxiYWNrKSBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICd0aGlzIGFwaSBub3cgY2FuIGRpcmVjdGx5IFJFVFVSTiBjb25maWcgaW5mby4nKVxuICAgIGNhbGxiYWNrKGNvbmZpZylcbiAgfVxuICByZXR1cm4gY29uZmlnXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIHJlcXVlc3QgbmV0d29yayB2aWEgaHR0cCBwcm90b2NvbFxuICogQHBhcmFtICB7b2JqZWN0fSAgIHBhcmFtc1xuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkc2VuZEh0dHAgKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgXy53YXJuKCdWbSMkc2VuZEh0dHAgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9zdHJlYW1cXCcpJyArXG4gICAgICAgICAgJy5zZW5kSHR0cChwYXJhbXMsIGNhbGxiYWNrKVwiIGluc3RlYWQnKVxuICBjb25zdCBzdHJlYW0gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnc3RyZWFtJylcbiAgc3RyZWFtLnNlbmRIdHRwKHBhcmFtcywgY2FsbGJhY2spXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIG9wZW4gYSB1cmxcbiAqIEBwYXJhbSAge3N0cmluZ30gdXJsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkb3BlblVSTCAodXJsKSB7XG4gIF8ud2FybignVm0jJG9wZW5VUkwgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9ldmVudFxcJyknICtcbiAgICAgICAgICAnLm9wZW5VUkwodXJsKVwiIGluc3RlYWQnKVxuICBjb25zdCBldmVudCA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdldmVudCcpXG4gIGV2ZW50Lm9wZW5VUkwodXJsKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiBzZXQgYSB0aXRsZSBmb3IgcGFnZVxuICogQHBhcmFtICB7c3RyaW5nfSB0aXRsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gJHNldFRpdGxlICh0aXRsZSkge1xuICBfLndhcm4oJ1ZtIyRzZXRUaXRsZSBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3BhZ2VJbmZvXFwnKScgK1xuICAgICAgICAgICcuc2V0VGl0bGUodGl0bGUpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IHBhZ2VJbmZvID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3BhZ2VJbmZvJylcbiAgcGFnZUluZm8uc2V0VGl0bGUodGl0bGUpXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgdXNlIFwicmVxdWlyZSgnQHdlZXgtbW9kdWxlL21vZHVsZU5hbWUnKSBpbnN0ZWFkXCJcbiAqIGludm9rZSBhIG5hdGl2ZSBtZXRob2QgYnkgc3BlY2lmaW5nIHRoZSBuYW1lIG9mIG1vZHVsZSBhbmQgbWV0aG9kXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG1vZHVsZU5hbWVcbiAqIEBwYXJhbSAge3N0cmluZ30gbWV0aG9kTmFtZVxuICogQHBhcmFtICB7Li4uKn0gdGhlIHJlc3QgYXJndW1lbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkY2FsbCAobW9kdWxlTmFtZSwgbWV0aG9kTmFtZSwgLi4uYXJncykge1xuICBfLndhcm4oJ1ZtIyRjYWxsIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvbW9kdWxlTmFtZVxcJylcIiBpbnN0ZWFkJylcbiAgY29uc3QgbW9kdWxlID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUobW9kdWxlTmFtZSlcbiAgaWYgKG1vZHVsZSAmJiBtb2R1bGVbbWV0aG9kTmFtZV0pIHtcbiAgICBtb2R1bGVbbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3poYW9qaW5qaWFuZy9TaXRlcy9wdWJsaWMvd2VleC9odG1sNS9kZWZhdWx0L2FwaS9tZXRob2RzLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IFRoZSBhcGkgZm9yIGludm9raW5nIHdpdGggXCIkXCIgcHJlZml4XG4gKi9cblxuLyoqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBwcml2YXRlIGZvciBhbGlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIGludm9rZSB1c2VyLXRyYWNrIG9uIFRhb2JhbyBNb2JsaWVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBl77yaZW50ZXIsIGNsaWNrLCBleHBvc2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tTmFtZVxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtXG4qL1xuZXhwb3J0IGZ1bmN0aW9uICR1c2VyVHJhY2sodHlwZSwgbmFtZSwgY29tTmFtZSwgcGFyYW0pIHtcbiAgY29uc3QgdXNlclRyYWNrID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3VzZXJUcmFjaycpXG4gIHVzZXJUcmFjay5jb21taXQodHlwZSwgbmFtZSwgY29tTmFtZSwgcGFyYW0pXG59XG5cbi8qKlxuICogcmVxdWVzdCBhIHJlc3RmdWxsIGFwaSB2aWEgdGhlIG10b3AgZ2F0ZXdheVxuICogQHBhcmFtICB7b2JqZWN0fSAgIHBhcmFtc1xuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkc2VuZE10b3AocGFyYW1zLCBjYWxsYmFjaykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBpbiBuYXRpdmXvvIx1c2Ugd2luZHZhbmVcbiAgICBjb25zdCB3aW5kdmFuZSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCd3aW5kdmFuZScpXG4gICAgd2luZHZhbmUuY2FsbCh7XG4gICAgICBjbGFzczogJ010b3BXVlBsdWdpbicsXG4gICAgICBtZXRob2Q6ICdzZW5kJyxcbiAgICAgIGRhdGE6IHBhcmFtc1xuICAgIH0sIGNhbGxiYWNrKVxuICB9IGVsc2Uge1xuICAgIC8vIGluIHdlYiBicndvc2Vy77yMdXNlIHN0cmVhbS5zZW5kTXRvcFxuICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdzdHJlYW0nKVxuICAgIHN0cmVhbS5zZW5kTXRvcChwYXJhbXMsIGNhbGxiYWNrKVxuICB9XG59XG5cbi8qKlxuICogcmVxdWVzdCBhIG5hdGl2ZSBhcGkgdmlhIHdpbmR2YW5lIHByb3RvY29sXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgcGFyYW1zXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRjYWxsV2luZHZhbmUocGFyYW1zLCBjYWxsYmFjaykge1xuICBjb25zdCB3aW5kdmFuZSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCd3aW5kdmFuZScpXG4gIHdpbmR2YW5lLmNhbGwocGFyYW1zLCBjYWxsYmFjaylcbn1cblxuLyoqXG4gKiBzZXQgc3BtIGZvciB0aGUgcGFnZVxuICogQHBhcmFtICB7c3RyaW5nfSBhXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzZXRTcG0oYSwgYikge1xuICBjb25zdCBwYWdlSW5mbyA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdwYWdlSW5mbycpXG4gIHBhZ2VJbmZvLnNldFNwbShhLCBiKVxufVxuXG4vKipcbiAqIGdldCB0aGUgaW5mb3JtYXRpb24gb2YgdGhlIGN1cnJlbnQgbG9naW5lZCB1c2VyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRnZXRVc2VySW5mbyhjYWxsYmFjaykge1xuICBjb25zdCB1c2VyID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3VzZXInKVxuICB1c2VyLmdldFVzZXJJbmZvKGNhbGxiYWNrKVxufVxuXG4vKipcbiAqIHBlcmZvcm0gbG9naW5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJGxvZ2luKGNhbGxiYWNrKSB7XG4gIGNvbnN0IHVzZXIgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgndXNlcicpXG4gIHVzZXIubG9naW4oY2FsbGJhY2spXG59XG5cbi8qKlxuICogcGVyZm9ybSBsb2dvdXRcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJGxvZ291dChjYWxsYmFjaykge1xuICBjb25zdCB1c2VyID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3VzZXInKVxuICB1c2VyLmxvZ291dChjYWxsYmFjaylcbn1cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9hcGkvbWV0aG9kcy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=