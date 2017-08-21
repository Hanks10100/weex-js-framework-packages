(this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK: 0.13.10 Build 20160602');
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
	var methods = __webpack_require__(70);
	var _global = global;
	var registerMethods = _global.registerMethods;
	
	registerMethods(methods);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	__webpack_require__(2);
	
	var _framework = __webpack_require__(44);
	
	var framework = _interopRequireWildcard(_framework);
	
	var _package = __webpack_require__(68);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var _loop = function _loop(methodName) {
	    global[methodName] = function () {
	        var ret = framework[methodName].apply(framework, arguments);
	        if (ret instanceof Error) {
	            console.error(ret.toString());
	        } else if (ret instanceof Array) {
	            ret.forEach(function (r) {
	                if (r instanceof Error) {
	                    console.error(r.toString());
	                }
	            });
	        }
	        return ret;
	    };
	};
	
	for (var methodName in framework) {
	    _loop(methodName);
	}
	
	Object.assign(global, {
	    frameworkVersion: _package.version,
	    needTransformerVersion: _package.optionalDependencies['weex-transformer']
	});
	
	/**
	 * register methods
	 */
	var methods = __webpack_require__(69);
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
	
	__webpack_require__(43);

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
	
	var core = module.exports = { version: '2.1.5' };
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
	          if (O[index] === el) return IS_INCLUDES || index;
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
	
	// fix no setTimeout on Android V8
	/* istanbul ignore if */
	
	if (typeof setTimeout === 'undefined' && typeof setTimeoutNative === 'function') {
	  (function () {
	    var timeoutMap = {};
	    var timeoutId = 0;
	    global.setTimeout = function (cb, time) {
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
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.printlog = printlog;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var _global = global;
	var console = _global.console;
	
	var logLevel = void 0;
	
	var LEVEL_MAP = {
	  __ERROR: 'error',
	  __WARN: 'warn',
	  __INFO: 'info',
	  __DEBUG: 'debug',
	  __VERBOSE: 'verbose'
	};
	
	var LEVELS = ['error', 'warn', 'info', 'debug', 'verbose', 'all'];
	
	function normalize(v) {
	  var type = Object.prototype.toString.call(v);
	  if (type.toLowerCase() === '[object object]') {
	    v = JSON.stringify(v);
	  } else {
	    v = String(v);
	  }
	  return v;
	}
	
	function printlog() {
	  var _global2 = global;
	  var WXEnvironment = _global2.WXEnvironment;
	  var nativeLog = _global2.nativeLog;
	
	
	  logLevel = WXEnvironment && WXEnvironment.logLevel || 'info';
	
	  if (typeof nativeLog === 'function') {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var level = args.pop();
	    if (LEVELS.indexOf(LEVEL_MAP[level]) <= LEVELS.indexOf(logLevel)) {
	      nativeLog.apply(undefined, _toConsumableArray(args.map(function (v) {
	        return normalize(v);
	      })).concat([level]));
	    }
	  }
	}
	
	/* istanbul ignore if */
	if (typeof console === 'undefined' ||
	// in jscore, it has `console` object without any keys.
	Object.keys(console).length === 0) {
	  global.console = {
	    log: function log() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      // __VERBOSE
	      printlog.apply(undefined, args.concat(['__VERBOSE']));
	    },
	    debug: function debug() {
	      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }
	
	      // __DEBUG
	      printlog.apply(undefined, args.concat(['__DEBUG']));
	    },
	    info: function info() {
	      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }
	
	      // __INFO
	      printlog.apply(undefined, args.concat(['__INFO']));
	    },
	    warn: function warn() {
	      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        args[_key5] = arguments[_key5];
	      }
	
	      // __WARN
	      printlog.apply(undefined, args.concat(['__WARN']));
	    },
	    error: function error() {
	      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        args[_key6] = arguments[_key6];
	      }
	
	      // __ERROR
	      printlog.apply(undefined, args.concat(['__ERROR']));
	    }
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 43 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var MSG = 'Using "Promise" is unexpected';
	
	var UnexpectedPromise = function UnexpectedPromise() {
	  console.warn(MSG);
	
	  this.then = function () {
	    console.warn(MSG);
	  };
	};
	
	UnexpectedPromise.all = UnexpectedPromise.race = UnexpectedPromise.resolve = UnexpectedPromise.reject = function () {
	  console.warn(MSG);
	};
	
	global.Promise = UnexpectedPromise;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 44 */
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
	
	exports.createInstance = createInstance;
	exports.refreshInstance = refreshInstance;
	exports.destroyInstance = destroyInstance;
	exports.registerComponents = registerComponents;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	exports.getRoot = getRoot;
	exports.callJS = callJS;
	
	var _config = __webpack_require__(45);
	
	var config = _interopRequireWildcard(_config);
	
	var _app = __webpack_require__(46);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _vm = __webpack_require__(51);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var nativeComponentMap = config.nativeComponentMap;
	
	var instanceMap = {};
	
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
	
	  config.debug = options.debug;
	
	  var result;
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
	  var result;
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
	  var result;
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
	    var result;
	    result = instance.fireEvent(ref, type, data, domChanges);
	    return result;
	  },
	
	  callback: function callback(instanceId, funcId, data, ifLast) {
	    var instance = instanceMap[instanceId];
	    var result;
	    result = instance.callback(funcId, data, ifLast);
	    return result;
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
	  var results = [];
	  if (instance && Array.isArray(tasks)) {
	    tasks.forEach(function (task) {
	      var handler = jsHandlers[task.method];
	      var args = [].concat(_toConsumableArray(task.args));
	      if (typeof handler === 'function') {
	        args.unshift(instanceId);
	        results.push(handler.apply(undefined, _toConsumableArray(args)));
	      }
	    });
	  } else {
	    results.push(new Error('invalid instance id "' + instanceId + '" or tasks'));
	  }
	
	  return results;
	}

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var nativeComponentMap = exports.nativeComponentMap = {
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
	};
	
	var customComponentMap = exports.customComponentMap = {};
	
	var debug = exports.debug = false;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = AppInstance;
	
	var _util = __webpack_require__(47);
	
	var _bundle = __webpack_require__(48);
	
	var bundle = _interopRequireWildcard(_bundle);
	
	var _ctrl = __webpack_require__(63);
	
	var ctrl = _interopRequireWildcard(_ctrl);
	
	var _differ = __webpack_require__(65);
	
	var _differ2 = _interopRequireDefault(_differ);
	
	var _event = __webpack_require__(66);
	
	var _event2 = _interopRequireDefault(_event);
	
	var _domListener = __webpack_require__(64);
	
	var _domListener2 = _interopRequireDefault(_domListener);
	
	var _dom = __webpack_require__(67);
	
	var _register = __webpack_require__(61);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * @fileOverview
	 * Weex instance constructor & definition
	 */
	
	function AppInstance(instanceId, options) {
	  var _this = this;
	
	  this.id = instanceId;
	  this.options = options || {};
	  this.vm = null;
	  this.doc = new _dom.Document(instanceId, this.options.bundleUrl);
	  this.customComponentMap = {};
	  this.callbacks = {};
	  this.differ = new _differ2.default(instanceId);
	  this.uid = 0;
	  this.rendered = false;
	  this.eventManager = new _event2.default();
	  this.listener = new _domListener2.default(this.id, function (tasks) {
	    _this.callTasks(tasks);
	  });
	  this.doc.setEventManager(this.eventManager);
	  this.doc.setListener(this.listener);
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
	      if (v instanceof _dom.Node) {
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
	  var _this2 = this;
	
	  if ((0, _util.typof)(tasks) !== 'array') {
	    tasks = [tasks];
	  }
	
	  tasks.forEach(function (task) {
	    task.args = task.args.map(function (arg) {
	      return normalize(_this2, arg);
	    });
	  });
	
	  callNative(this.id, tasks, '-1');
	};
	
	(0, _util.extend)(AppInstance.prototype, bundle, ctrl, {
	  registerComponent: _register.registerComponent,
	  requireComponent: _register.requireComponent,
	  requireModule: _register.requireModule
	});

/***/ },
/* 47 */
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
	/// lang.js
	
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
	
	/// env.js
	
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
	
	/// shared
	
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
	
	/// other
	
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
/* 48 */
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
	
	var _semver = __webpack_require__(49);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _util = __webpack_require__(47);
	
	var _ = _interopRequireWildcard(_util);
	
	var _config = __webpack_require__(45);
	
	var config = _interopRequireWildcard(_config);
	
	var _vm = __webpack_require__(51);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _downgrade = __webpack_require__(62);
	
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
	
	var WEEX_COMPONENT_REG = /^\@weex-component\//;
	var WEEX_MODULE_REG = /^\@weex-module\//;
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
	    return new Error('Downgrade: ' + config.downgrade);
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
/* 49 */
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
	      // ~1.2 == >=1.2.0- <1.3.0-
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
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
	    var timeout = setTimeout(cleanUpNextTick);
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
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Vm;
	
	var _index = __webpack_require__(47);
	
	var _ = _interopRequireWildcard(_index);
	
	var _state = __webpack_require__(52);
	
	var state = _interopRequireWildcard(_state);
	
	var _compiler = __webpack_require__(57);
	
	var compiler = _interopRequireWildcard(_compiler);
	
	var _directive = __webpack_require__(58);
	
	var directive = _interopRequireWildcard(_directive);
	
	var _domHelper = __webpack_require__(59);
	
	var domHelper = _interopRequireWildcard(_domHelper);
	
	var _events = __webpack_require__(60);
	
	var events = _interopRequireWildcard(_events);
	
	var _register = __webpack_require__(61);
	
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports._initState = _initState;
	exports._initData = _initData;
	exports._initComputed = _initComputed;
	exports._initMethods = _initMethods;
	
	var _watcher = __webpack_require__(53);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _dep = __webpack_require__(54);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _observer = __webpack_require__(55);
	
	var _index = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	  if (!(0, _index.isPlainObject)(data)) {
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
	        def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, vm) : (0, _index.bind)(userDef.get, vm) : noop;
	        def.set = userDef.set ? (0, _index.bind)(userDef.set, vm) : noop;
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
	      vm[key] = (0, _index.bind)(methods[key], vm);
	    }
	  }
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Watcher;
	
	var _dep = __webpack_require__(54);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _index = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	    (0, _index.extend)(this, options);
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
	  this.depIds = new _index._Set();
	  this.newDepIds = new _index._Set();
	  // parse expression for getter
	  if (isFn) {
	    this.getter = expOrFn;
	  } else {
	    this.getter = (0, _index.parsePath)(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      process.env.NODE_ENV !== 'production' && (0, _index.warn)('Failed watching path: ' + expOrFn + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
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
	    ((0, _index.isObject)(value) || this.deep) && !this.shallow) {
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
	      (0, _index.remove)(this.vm._watchers, this);
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
	
	var seenObjects = new _index._Set();
	function traverse(val, seen) {
	  var i = void 0,
	      keys = void 0,
	      isA = void 0,
	      isO = void 0;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  isA = (0, _index.isArray)(val);
	  isO = (0, _index.isObject)(val);
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Dep;
	
	var _index = __webpack_require__(47);
	
	var uid = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	
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
	  (0, _index.remove)(this.subs, sub);
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
/* 55 */
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
	
	var _dep = __webpack_require__(54);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _array = __webpack_require__(56);
	
	var _index = __webpack_require__(47);
	
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
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new _dep2.default();
	  (0, _index.def)(value, '__ob__', this);
	  if ((0, _index.isArray)(value)) {
	    var augment = _index.hasProto ? protoAugment : copyAugment;
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
	  (0, _index.remove)(this.vms, vm);
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
	    (0, _index.def)(target, key, src[key]);
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
	  if (!(0, _index.isObject)(value)) {
	    return;
	  }
	  var ob = void 0;
	  if ((0, _index.hasOwn)(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (((0, _index.isArray)(value) || (0, _index.isPlainObject)(value)) && Object.isExtensible(value) && !value._isVue) {
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
	        if ((0, _index.isArray)(value)) {
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
	  if ((0, _index.isArray)(obj)) {
	    return obj.splice(key, 1, val);
	  }
	  if ((0, _index.hasOwn)(obj, key)) {
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
	  if (!(0, _index.hasOwn)(obj, key)) {
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
	  if (KEY_WORDS.indexOf(key) > -1 || !(0, _index.isReserved)(key)) {
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
	  if (!(0, _index.isReserved)(key)) {
	    delete vm[key];
	  }
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.arrayMethods = undefined;
	
	var _index = __webpack_require__(47);
	
	var arrayProto = Array.prototype;
	var arrayMethods = exports.arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  (0, _index.def)(arrayMethods, method, function mutator() {
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
	
	(0, _index.def)(arrayProto, '$set', function $set(index, val) {
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
	
	(0, _index.def)(arrayProto, '$remove', function $remove(index) {
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
/* 57 */
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
	
	var _index = __webpack_require__(47);
	
	var _ = _interopRequireWildcard(_index);
	
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
	  var trackBy = repeat.trackBy || target.trackBy || target.attr && target.attr.trackBy || key;
	
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
	  // TODO it was a root element when not in a fragment
	  if (!this._rootEl) {
	    this._rootEl = element;
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
	  if (!treeMode) {
	    _.debug('compile to append single node for', element);
	    this._attachTarget(element, dest);
	  }
	  this._compileChildren(template, element);
	  if (treeMode) {
	    _.debug('compile to append whole tree for', element);
	    this._attachTarget(element, dest);
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
	
	  var children = template.children;
	  if (children && children.length) {
	    children.forEach(function (child) {
	      _this3._compile(child, dest);
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
	      var key = trackBy ? item[trackBy] : index;
	      /* istanbul ignore if */
	      if (key == null || key === '') {
	        return;
	      }
	      trackMap[key] = item;
	    });
	
	    // 2. remove unused element foreach old item
	    var reusedList = [];
	    oldData.forEach(function (item, index) {
	      var key = trackBy ? item[trackBy] : index;
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
	      var key = trackBy ? item[trackBy] : index;
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
/* 58 */
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
	
	var _index = __webpack_require__(47);
	
	var _ = _interopRequireWildcard(_index);
	
	var _watcher = __webpack_require__(53);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _config = __webpack_require__(45);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	
	  var options = _config.nativeComponentMap[type];
	
	  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	    _.extend(template, options);
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
	  mergeEvent(template.events, this, subVm);
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
	
	function mergeEvent(target, vm, subVm) {
	  if (target && subVm._rootEl) {
	    for (var type in target) {
	      var handler = vm[target[type]];
	      if (handler) {
	        subVm._rootEl.addEvent(type, _.bind(handler, vm));
	      }
	    }
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
	  var obj = el[name];
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
/* 59 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	    element.element.insertBefore(start, element.end);
	    element.element.insertBefore(end, element.end);
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
	      this._moveTarget(target, after);
	      dest.updateMark = target.element ? target.end : target;
	    } else if (target.element) {
	      dest.element.insertBefore(target.start, before);
	      dest.element.insertBefore(target.end, before);
	    } else {
	      dest.element.insertBefore(target, before);
	    }
	  } else {
	    if (target.element) {
	      dest.appendChild(target.start);
	      dest.appendChild(target.end);
	    } else {
	      dest.appendChild(target);
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
	    this._moveBlock(target, after);
	  } else {
	    this._moveElement(target, after);
	  }
	}
	
	/**
	 * Move element before a certain element.
	 *
	 * @param  {object} element
	 * @param  {object} before
	 */
	function _moveElement(element, after) {
	  var doc = this._app.doc;
	  var parent = doc.getRef(after.parentRef);
	
	  if (parent) {
	    parent.insertAfter(element, after);
	  }
	}
	
	/**
	 * Move all elements of the block before a certain element.
	 *
	 * @param  {object} fragBlock
	 * @param  {object} before
	 */
	function _moveBlock(fragBlock, after) {
	  var doc = this._app.doc;
	  var parent = doc.getRef(after.parentRef);
	
	  if (parent) {
	    (function () {
	      var el = fragBlock.start;
	      var group = [el];
	
	      while (el && el !== fragBlock.end) {
	        el = el.next();
	        group.push(el);
	      }
	
	      var temp = after;
	      group.forEach(function (el) {
	        parent.insertAfter(el, temp);
	        temp = el;
	      });
	    })();
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
	  var doc = this._app.doc;
	  var parent = doc.getRef(target.parentRef);
	
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
	  var el = fragBlock.start.next();
	
	  while (el && el !== fragBlock.end) {
	    result.push(el);
	    el = el.next();
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
/* 60 */
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
/* 61 */
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.normalizeVersion = normalizeVersion;
	exports.getError = getError;
	exports.check = check;
	
	var _semver = __webpack_require__(49);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _util = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * [normalizeVersion description]
	 * @param  {String} Version. ie: 1, 1.0, 1.0.0
	 * @return {String} Version
	 */
	function normalizeVersion(v) {
	  var isValid = _semver2.default.valid(v) ? true : false;
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
	  config = (0, _util.isPlainObject)(config) ? config : {};
	  var platform = deviceInfo.platform || 'unknow';
	  var dPlatform = platform.toLowerCase();
	  var cObj = config[dPlatform] || {};
	
	  var result = {
	    isDowngrade: false // defautl is pass
	  };
	
	  for (var i in deviceInfo) {
	    var key = i;
	    var keyLower = key.toLowerCase();
	    var val = deviceInfo[i];
	    var isVersion = keyLower.indexOf('version') >= 0 ? true : false;
	    var isDeviceModel = keyLower.indexOf('devicemodel') >= 0 ? true : false;
	    var criteria = cObj[i];
	
	    if (criteria && isVersion) {
	      var c = this.normalizeVersion(criteria);
	      var d = this.normalizeVersion(deviceInfo[i]);
	
	      if (_semver2.default.satisfies(d, c)) {
	        result = (0, _util.extend)(this.getError(key, val, criteria));
	        break;
	      }
	    } else if (isDeviceModel) {
	      var _criteria = (0, _util.typof)(criteria) === 'array' ? criteria : [criteria];
	      if (_criteria.indexOf(val) >= 0) {
	        result = (0, _util.extend)(this.getError(key, val, criteria));
	        break;
	      }
	    }
	  }
	
	  return result;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
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
	
	var _util = __webpack_require__(47);
	
	var _ = _interopRequireWildcard(_util);
	
	var _domListener = __webpack_require__(64);
	
	var _domListener2 = _interopRequireDefault(_domListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	  if (this.listener && this.listener.updates.length) {
	    tasks.push.apply(tasks, _toConsumableArray(this.listener.updates));
	    this.listener.updates = [];
	  }
	  if (tasks.length) {
	    this.callTasks(tasks);
	  }
	}
	
	function init(code, data) {
	  var _this = this;
	
	  _.debug('Intialize an instance with:\n', code, data);
	
	  var result;
	  // @see: lib/app/bundle.js
	  var define = _.bind(this.define, this);
	  var bootstrap = function bootstrap(name, config, _data) {
	    result = _this.bootstrap(name, config, _data || data);
	    _this.updateActions();
	    _this.doc.listener.createFinish();
	    _this.doc.close();
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
	
	  var fn = new Function('define', 'require', 'document', 'bootstrap', 'register', 'render', '__weex_define__', // alias for define
	  '__weex_bootstrap__', // alias for bootstrap
	  functionBody);
	
	  fn(define, require, document, bootstrap, register, render, define, bootstrap);
	
	  return result;
	}
	
	function destroy() {
	  _.debug('Destory an instance(' + this.id + ')');
	
	  this.id = '';
	  this.eventManager = null;
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
	
	  _.debug('Fire a "' + type + '" event on an element(' + ref + ')', 'in instance(' + this.id + ')');
	
	  if (Array.isArray(ref)) {
	    ref.some(function (ref) {
	      return _this2.fireEvent(ref, type, e) !== false;
	    });
	    return;
	  }
	
	  var el = this.doc.getRef(ref);
	
	  if (el) {
	    e = e || {};
	    e.type = type;
	    e.target = el;
	    e.timestamp = Date.now();
	    if (domChanges) {
	      updateElement(el, domChanges);
	    }
	    var result = this.eventManager.fire(el, type, e);
	    this.updateActions();
	    this.doc.listener.updateFinish();
	    return result;
	  }
	
	  return new Error('invalid element reference "' + ref + '"');
	}
	
	function callback(callbackId, data, ifKeepAlive) {
	  _.debug('Invoke a callback(' + callbackId + ') with', data, 'in instance(' + this.id + ')');
	
	  var callback = this.callbacks[callbackId];
	
	  if (typeof callback === 'function') {
	    callback(data); // data is already a object, @see: lib/framework.js
	
	    if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
	      this.callbacks[callbackId] = undefined;
	    }
	
	    this.updateActions();
	    this.doc.listener.updateFinish();
	    return;
	  }
	
	  return new Error('invalid callback id "' + callbackId + '"');
	}
	
	function refreshData(data) {
	  _.debug('Refresh with', data, 'in instance[' + this.id + ']');
	
	  var vm = this.vm;
	
	  if (vm && data) {
	    if (typeof vm.refreshData === 'function') {
	      vm.refreshData(data);
	    } else {
	      _.extend(vm, data);
	    }
	    this.updateActions();
	    this.doc.listener.refreshFinish();
	    return;
	  }
	
	  return new Error('invalid data "' + data + '"');
	}
	
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

/***/ },
/* 64 */
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
	  handler([createAction('createFinish', [])], callback);
	};
	
	Listener.prototype.updateFinish = function (callback) {
	  var handler = this.handler;
	  handler([createAction('updateFinish', [])], callback);
	};
	
	Listener.prototype.refreshFinish = function (callback) {
	  var handler = this.handler;
	  handler([createAction('refreshFinish', [])], callback);
	};
	
	Listener.prototype.createBody = function (element, ref) {
	  var actions = [createAction('createBody', [element.toJSON()])];
	  this.addActions(actions);
	};
	
	Listener.prototype.addElement = function (element, ref, index) {
	  if (!(index >= 0)) {
	    index = -1;
	  }
	  this.addActions(createAction('addElement', [ref, element.toJSON(), index]));
	};
	
	Listener.prototype.removeElement = function (ref) {
	  if (Array.isArray(ref)) {
	    var actions = ref.map(function (r) {
	      return createAction('removeElement', [r]);
	    });
	    this.addActions(actions);
	  } else {
	    this.addActions(createAction('removeElement', [ref]));
	  }
	};
	
	Listener.prototype.moveElement = function (targetRef, parentRef, index) {
	  this.addActions(createAction('moveElement', [targetRef, parentRef, index]));
	};
	
	Listener.prototype.setAttr = function (ref, key, value) {
	  var result = {};
	  result[key] = value;
	  this.addActions(createAction('updateAttrs', [ref, result]));
	};
	
	Listener.prototype.setStyle = function (ref, key, value) {
	  var result = {};
	  result[key] = value;
	  this.addActions(createAction('updateStyle', [ref, result]));
	};
	
	Listener.prototype.setStyles = function (ref, style) {
	  this.addActions(createAction('updateStyle', [ref, style]));
	};
	
	Listener.prototype.addEvent = function (ref, type) {
	  this.addActions(createAction('addEvent', [ref, type]));
	};
	
	Listener.prototype.removeEvent = function (ref, type) {
	  this.addActions(createAction('removeEvent', [ref, type]));
	};
	
	Listener.prototype.handler = function (actions, cb) {
	  cb && cb();
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
	    handler(actions);
	  }
	};
	
	function createAction(name, args) {
	  return { module: 'dom', method: name, args: args };
	}

/***/ },
/* 65 */
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
	    value: function flush() {
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * @fileOverview event manager
	                                                                                                                                                                                                                                                   */
	
	exports.default = EventManager;
	
	var _util = __webpack_require__(47);
	
	var _ = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function EventManager() {
	  this.els = [];
	  this.targets = [];
	}
	
	EventManager.prototype._get = function (el, force) {
	  var index = this.els.indexOf(el);
	  var target;
	  if (index >= 0) {
	    target = this.targets[index];
	  } else if (force) {
	    target = { el: el, events: {} };
	    this.els.push(el);
	    this.targets.push(target);
	  }
	  return target;
	};
	
	EventManager.prototype.add = function (el, type, handler) {
	  if ((typeof el === 'undefined' ? 'undefined' : _typeof(el)) !== 'object' || !el || typeof type !== 'string' || !type || typeof handler !== 'function') {
	    return;
	  }
	  var target = this._get(el, true);
	  target.events[type] = handler;
	};
	
	EventManager.prototype.remove = function (el, type) {
	  if ((typeof el === 'undefined' ? 'undefined' : _typeof(el)) !== 'object' || !el || typeof type !== 'string' || !type) {
	    return;
	  }
	  var target = this._get(el);
	  if (target) {
	    delete target.events[type];
	  }
	};
	
	EventManager.prototype.fire = function (el, type, e) {
	  var target = this._get(el);
	  var handler, el;
	  if (target) {
	    el = target.el;
	    handler = target.events[type];
	    if (typeof handler === 'function') {
	      return handler.call(el, e);
	    }
	  }
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Document = Document;
	exports.destroyDocument = destroyDocument;
	exports.Node = Node;
	exports.Element = Element;
	exports.Comment = Comment;
	/**
	 * @fileOverview
	 * A simple virtual dom implementation
	 */
	
	var DEFAULT_TAG_NAME = 'div';
	
	var instanceMap = exports.instanceMap = {};
	
	function Document(id, url) {
	  id = id ? id.toString() : '';
	  this.id = id;
	  this.URL = url;
	  this.nextRef = 1;
	  this.nodeMap = {};
	  this.listener = null;
	  this.eventManager = null;
	  this.closed = false;
	  instanceMap[id] = this;
	
	  this.createDocumentElement();
	}
	
	function destroyDocument(id) {
	  delete instanceMap[id];
	}
	
	Document.prototype.open = function () {
	  this.closed = false;
	  if (this.listener) {
	    this.listener.batched = false;
	  }
	};
	Document.prototype.close = function () {
	  this.closed = true;
	  if (this.listener) {
	    this.listener.batched = true;
	  }
	};
	
	Document.prototype.setEventManager = function (eventManager) {
	  this.eventManager = eventManager;
	};
	
	Document.prototype.setListener = function (listener) {
	  this.listener = listener;
	  listener.batched = !!this.closed;
	};
	
	Document.prototype.addRef = function (el) {
	  el.ref = this.nextRef.toString();
	  this.nodeMap[el.ref] = el;
	  this.nextRef++;
	};
	
	Document.prototype.getRef = function (ref) {
	  return this.nodeMap[ref];
	};
	
	Document.prototype.removeRef = function (ref) {
	  delete this.nodeMap[ref];
	};
	
	Document.prototype.createDocumentElement = function (type, props) {
	  if (!this.documentElement) {
	    this.documentElement = new Element(type, props, this);
	    this.nodeMap._documentElement = this.documentElement;
	    this.documentElement.ref = '_documentElement';
	    this.documentElement.attached = true;
	  }
	
	  return this.documentElement;
	};
	
	Document.prototype.createBody = function (type, props) {
	  if (!this.body) {
	    this.body = new Element(type, props, this);
	    this.nodeMap._root = this.body;
	    this.body.ref = '_root';
	    this.body.depth = 1;
	  }
	
	  return this.body;
	};
	
	Document.prototype.createElement = function (tagName, props) {
	  return new Element(tagName, props, this);
	};
	
	Document.prototype.createComment = function (text) {
	  return new Comment(text, this);
	};
	
	function Node() {}
	
	Node.prototype.create = function (instanceId) {
	  this.parentRef = null;
	  this.attached = false;
	  if (instanceId) {
	    this.instanceId = instanceId;
	    var doc = instanceMap[instanceId];
	    doc.addRef(this);
	  }
	};
	
	Node.prototype.destroy = function () {
	  var ref = this.ref;
	  var instanceId = this.instanceId;
	  if (instanceId) {
	    var doc = instanceMap[instanceId];
	    doc.removeRef(ref);
	  }
	
	  var children = this.children || [];
	  var length = children.length;
	  for (var i = 0; i < length; i++) {
	    children[i].destroy();
	  }
	};
	
	Node.prototype.getRenderer = function () {
	  var doc = instanceMap[this.instanceId];
	  return doc.listener;
	};
	
	Node.prototype.next = function () {
	  var instanceId = this.instanceId;
	  var doc = instanceMap[instanceId];
	  var parent = doc.getRef(this.parentRef);
	  if (parent) {
	    return parent.children[parent.children.indexOf(this) + 1];
	  }
	};
	
	Node.prototype.prev = function () {
	  var instanceId = this.instanceId;
	  var doc = instanceMap[instanceId];
	  var parent = doc.getRef(this.parentRef);
	  if (parent) {
	    return parent.children[parent.children.indexOf(this) - 1];
	  }
	};
	
	function Element() {
	  var type = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_TAG_NAME : arguments[0];
	  var props = arguments[1];
	  var ownerDocument = arguments[2];
	
	  props = props || {};
	  this.create(ownerDocument.id);
	  this.ownerDocument = ownerDocument;
	  this.type = type;
	  this.attr = props.attr || {};
	  this.classStyle = props.classStyle || {};
	  this.style = props.style || {};
	  this.event = [];
	  this.children = [];
	  this.pureChildren = [];
	}
	
	Element.prototype = new Node();
	
	Element.prototype.appendChild = function (node) {
	
	  removeIfExisted(node);
	  node.parentRef = this.ref;
	  this.children.push(node);
	
	  if (this.attached) {
	    setAttached(node, this.depth);
	  } else {
	    setDetached(node);
	  }
	
	  if (node instanceof Element) {
	    this.pureChildren.push(node);
	
	    if (this.attached) {
	      var renderer = this.getRenderer();
	      if (renderer) {
	        if (this.ref === '_documentElement') {
	          // if its parent is documentElement then it's a body
	          renderer.createBody(node, this.ref);
	        } else {
	          renderer.addElement(node, this.ref);
	        }
	      }
	    }
	  }
	};
	
	Element.prototype.insertBefore = function (node, before) {
	
	  if (node.parentRef === this.ref) {
	    moveBefore(node, before, this.children);
	    if (node instanceof Element) {
	      var pureBeforeIndex = movePureBefore(node, before, this.pureChildren);
	      if (pureBeforeIndex >= 0 && this.attached) {
	        var renderer = this.getRenderer();
	        if (renderer) {
	          renderer.moveElement(node.ref, this.ref, pureBeforeIndex);
	        }
	      }
	    }
	    return;
	  }
	
	  removeIfExisted(node);
	
	  var children = this.children;
	  var index = children.indexOf(before);
	
	  node.parentRef = this.ref;
	  if (this.attached) {
	    setAttached(node, this.depth);
	  } else {
	    setDetached(node);
	  }
	  children.splice(index, 0, node);
	
	  if (node instanceof Element) {
	    var pureChildren = this.pureChildren;
	    var pureIndex = getPureAfter(before, pureChildren);
	
	    pureChildren.splice(pureIndex, 0, node);
	
	    if (this.attached) {
	      var _renderer = this.getRenderer();
	      if (_renderer) {
	        _renderer.addElement(node, this.ref, pureIndex);
	      }
	    }
	  }
	};
	
	Element.prototype.insertAfter = function (node, after) {
	
	  if (node.parentRef === this.ref) {
	    moveAfter(node, after, this.children);
	    if (node instanceof Element) {
	      var pureAfterIndex = movePureAfter(node, after, this.pureChildren);
	      if (pureAfterIndex >= 0 && this.attached) {
	        var renderer = this.getRenderer();
	        if (renderer) {
	          renderer.moveElement(node.ref, this.ref, pureAfterIndex);
	        }
	      }
	    }
	    return;
	  }
	
	  removeIfExisted(node);
	
	  var children = this.children;
	  var index = children.indexOf(after);
	
	  node.parentRef = this.ref;
	  if (this.attached) {
	    setAttached(node, this.depth);
	  } else {
	    /* istanbul ignore next */
	    setDetached(node);
	  }
	  children.splice(index + 1, 0, node);
	
	  if (node instanceof Element) {
	    var pureChildren = this.pureChildren;
	    var pureIndex = getPureBefore(after, pureChildren);
	
	    pureChildren.splice(pureIndex + 1, 0, node);
	
	    if (this.attached) {
	      var _renderer2 = this.getRenderer();
	      if (_renderer2) {
	        _renderer2.addElement(node, this.ref, pureIndex + 1);
	      }
	    }
	  }
	};
	
	Element.prototype.removeChild = function (node, preserved) {
	  var children = this.children;
	  var index = children.indexOf(node);
	
	  setDetached(node);
	
	  if (index >= 0) {
	    node.parentRef = null;
	    children.splice(index, 1);
	    if (!preserved) {
	      node.destroy();
	    }
	  }
	
	  if (node instanceof Element) {
	    this.pureChildren.$remove(node);
	    if (this.attached) {
	      var renderer = this.getRenderer();
	      if (renderer) {
	        renderer.removeElement(node.ref);
	      }
	    }
	  }
	};
	
	Element.prototype.clear = function () {
	  var children = this.children;
	  var length = children.length;
	  for (var i = 0; i < length; i++) {
	    var child = children[i];
	    child.parentRef = null;
	    setDetached(child);
	    child.destroy();
	  }
	  children.length = 0;
	
	  if (this.attached) {
	    var refs = this.pureChildren.map(function (child) {
	      return child.ref;
	    });
	    this.pureChildren.length = 0;
	    var renderer = this.getRenderer();
	    if (renderer) {
	      renderer.removeElement(refs);
	    }
	  }
	};
	
	function moveBefore(node, before, children) {
	  var targetIndex = children.indexOf(node);
	  var beforeIndex = children.indexOf(before);
	
	  /* istanbul ignore next */
	  if (targetIndex === beforeIndex || targetIndex + 1 === beforeIndex) {
	    return -1;
	  }
	
	  var newIndex = targetIndex < beforeIndex ? beforeIndex - 1 : beforeIndex;
	  children.splice(targetIndex, 1);
	  children.splice(newIndex, 0, node);
	
	  return beforeIndex;
	}
	
	function movePureBefore(node, before, pureChildren) {
	  var pureTargetIndex = pureChildren.indexOf(node);
	  var pureBeforeIndex = getPureAfter(before, pureChildren);
	
	  /* istanbul ignore next */
	  if (pureTargetIndex === pureBeforeIndex || pureTargetIndex + 1 === pureBeforeIndex) {
	    return -1;
	  }
	
	  var pureNewIndex = pureTargetIndex < pureBeforeIndex ? pureBeforeIndex - 1 : pureBeforeIndex;
	
	  pureChildren.splice(pureTargetIndex, 1);
	  pureChildren.splice(pureNewIndex, 0, node);
	
	  return pureBeforeIndex;
	}
	
	function getPureAfter(node, pureChildren) {
	  var pureIndex = pureChildren.indexOf(node);
	  while (node && pureIndex < 0) {
	    node = node.next();
	    pureIndex = pureChildren.indexOf(node);
	  }
	  if (pureIndex < 0) {
	    pureIndex = pureChildren.length;
	  }
	  return pureIndex;
	}
	
	function moveAfter(node, after, children) {
	  var targetIndex = children.indexOf(node);
	  var afterIndex = children.indexOf(after);
	
	  /* istanbul ignore next */
	  if (targetIndex === afterIndex || targetIndex === afterIndex + 1) {
	    return -1;
	  }
	
	  var newIndex = targetIndex < afterIndex ? afterIndex : afterIndex + 1;
	  children.splice(targetIndex, 1);
	  children.splice(newIndex, 0, node);
	
	  return afterIndex;
	}
	
	function movePureAfter(node, after, pureChildren) {
	  var pureTargetIndex = pureChildren.indexOf(node);
	  var pureAfterIndex = getPureBefore(after, pureChildren);
	
	  /* istanbul ignore next */
	  if (pureTargetIndex === pureAfterIndex || pureTargetIndex === pureAfterIndex + 1) {
	    return -1;
	  }
	
	  var pureNewIndex = pureTargetIndex < pureAfterIndex ? pureAfterIndex : pureAfterIndex + 1;
	
	  pureChildren.splice(pureTargetIndex, 1);
	  pureChildren.splice(pureNewIndex, 0, node);
	
	  return pureAfterIndex + 1;
	}
	
	function getPureBefore(node, pureChildren) {
	  var pureIndex = pureChildren.indexOf(node);
	  while (node && pureIndex < 0) {
	    node = node.prev();
	    pureIndex = pureChildren.indexOf(node);
	  }
	  /* istanbul ignore next */
	  if (pureIndex < 0) {
	    pureIndex = -1;
	  }
	  return pureIndex;
	}
	
	function setAttached(node, depth) {
	  if (node.ref === '_root') {
	    depth = 1;
	  } else {
	    depth = depth > 0 ? depth + 1 : 0;
	  }
	  node.attached = true;
	  node.depth = depth;
	  if (node.children) {
	    node.children.forEach(function (sub) {
	      setAttached(sub, depth);
	    });
	  }
	}
	
	function setDetached(node) {
	  node.attached = false;
	  node.depth = 0;
	  if (node.children) {
	    node.children.forEach(function (sub) {
	      setDetached(sub);
	    });
	  }
	}
	
	function removeIfExisted(node) {
	  var doc = instanceMap[node.instanceId];
	  if (doc) {
	    var existedNode = doc.getRef(node.ref);
	    if (existedNode) {
	      var existedParent = doc.getRef(existedNode.parentRef);
	      if (existedParent && existedParent.removeChild) {
	        existedParent.removeChild(existedNode, true);
	      }
	    }
	  }
	}
	
	Element.prototype.setAttr = function (key, value, silent) {
	  if (this.attr[key] === value) {
	    return;
	  }
	  this.attr[key] = value;
	  if (!silent && this.attached) {
	    var renderer = this.getRenderer();
	    if (renderer) {
	      renderer.setAttr(this.ref, key, value);
	    }
	  }
	};
	
	Element.prototype.setStyle = function (key, value, silent) {
	  /* istanbul ignore if */
	  if (this.style[key] === value) {
	    return;
	  }
	  this.style[key] = value;
	  if (!silent && this.attached) {
	    var renderer = this.getRenderer();
	    if (renderer) {
	      renderer.setStyle(this.ref, key, value);
	    }
	  }
	};
	
	Element.prototype.setClassStyle = function (classStyle) {
	  this.classStyle = classStyle;
	  if (this.attached) {
	    var renderer = this.getRenderer();
	    if (renderer) {
	      renderer.setStyles(this.ref, this.toStyle());
	    }
	  }
	};
	
	Element.prototype.addEvent = function (type, handler) {
	  var index = this.event.indexOf(type);
	
	  if (index < 0) {
	    this.event.push(type);
	    var eventManager = this.ownerDocument.eventManager;
	    eventManager.add(this, type, handler);
	
	    if (this.attached) {
	      var renderer = this.getRenderer();
	      if (renderer) {
	        renderer.addEvent(this.ref, type);
	      }
	    }
	  }
	};
	
	Element.prototype.removeEvent = function (type) {
	  var index = this.event.indexOf(type);
	
	  if (index >= 0) {
	    this.event.splice(index, 1);
	    var eventManager = this.ownerDocument.eventManager;
	    eventManager.remove(this, type);
	
	    if (this.attached) {
	      var renderer = this.getRenderer();
	      if (renderer) {
	        renderer.removeEvent(this.ref, type);
	      }
	    }
	  }
	};
	
	Element.prototype.toStyle = function () {
	  var result = {};
	  var classStyle = this.classStyle;
	  var style = this.style;
	  for (var name in classStyle) {
	    result[name] = classStyle[name];
	  }
	  for (var _name in style) {
	    result[_name] = style[_name];
	  }
	  return result;
	};
	
	Element.prototype.toJSON = function () {
	  var result = {
	    ref: this.ref.toString(),
	    type: this.type,
	    attr: this.attr,
	    style: this.toStyle()
	  };
	
	  if (this.event && this.event.length) {
	    result.event = this.event;
	  }
	  if (this.pureChildren && this.pureChildren.length) {
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
	
	function Comment(value, ownerDocument) {
	  this.create(ownerDocument.id);
	  this.type = 'comment';
	  this.value = value;
	}
	
	Comment.prototype = new Node();
	
	Comment.prototype.toString = function () {
	  return '<!-- ' + this.value + ' -->';
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = {
		"name": "weex-jsframework",
		"version": "0.13.10",
		"description": "JS Framework for Weex solution which is a extendable cross-platform solution for dynamic programming and publishing projects",
		"main": "index.js",
		"scripts": {
			"dev": "webpack --watch --config ./webpack.config.js",
			"build": "webpack --config ./webpack.config.js",
			"compress": "uglifyjs dist/index.js -o dist/index.min.js",
			"lint": "jscs --config .jscsrc polyfill/*.js polyfill/__test__/*.js lib/*.js lib/__test__/*.js lib/app/*.js lib/app/__test__/*.js lib/vm/*.js lib/vm/__test__/*.js",
			"test": "mocha --compilers js:babel-core/register polyfill/__test__/*.js lib/__test__/*.js lib/**/__test__/*.js",
			"cover": "babel-node node_modules/isparta/bin/isparta cover --report text node_modules/mocha/bin/_mocha -- --reporter dot polyfill/__test__/*.js lib/__test__/*.js lib/**/__test__/*.js",
			"ci": "npm run lint && npm run cover"
		},
		"repository": {
			"type": "git",
			"url": "git@github.com:alibaba/weex.git"
		},
		"author": [
			{
				"name": "jinjiang",
				"email": "zhaojinjiang@me.com"
			},
			{
				"name": "Terry King",
				"email": "terrykingcha@gmail.com"
			}
		],
		"contributors": [
			{
				"name": "pushiming",
				"email": "pushiming@gmail.com"
			},
			{
				"name": "iskenhuang",
				"email": "iskenhuang@gmail.com"
			},
			{
				"name": "yuanyan",
				"email": "yuanyan.cao@gmail.com"
			}
		],
		"keywords": [
			"weex",
			"mvvm",
			"browser",
			"hybrid",
			"framework"
		],
		"license": "Apache-2.0",
		"dependencies": {
			"semver": "~5.1.0",
			"core-js": "~2.1.1"
		},
		"devDependencies": {
			"babel-cli": "~6.4.5",
			"babel-core": "~6.4.5",
			"babel-loader": "~6.2.1",
			"babel-preset-es2015": "~6.3.13",
			"chai": "~3.2.0",
			"isparta": "~4.0.0",
			"istanbul": "~0.4.2",
			"jscs": "~2.9.0",
			"json-loader": "^0.5.4",
			"mocha": "~2.3.4",
			"sinon": "~1.17.2",
			"sinon-chai": "~2.8.0",
			"uglify-js": "^2.6.2",
			"watch-cli": "~0.2.1",
			"webpack": "~1.12.12"
		},
		"optionalDependencies": {
			"weex-transformer": ">=0.1.5 <0.4"
		}
	};

/***/ },
/* 69 */
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
	
	var _util = __webpack_require__(47);
	
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
/* 70 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjY5MDk5NDEwZWIyMmYwZTFlMGIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvcG9seWZpbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvcG9seWZpbGwvb2JqZWN0QXNzaWduLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3RvLWluZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvcG9seWZpbGwvc2V0VGltZW91dC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9wb2x5ZmlsbC9jb25zb2xlbG9nLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL3BvbHlmaWxsL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvbGliL2ZyYW1ld29yay5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9saWIvY29uZmlnLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL2xpYi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvbGliL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvbGliL2FwcC9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9zZW12ZXIvc2VtdmVyLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL2xpYi92bS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9saWIvdm0vY29yZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9saWIvdm0vY29yZS93YXRjaGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL2xpYi92bS9jb3JlL2RlcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9saWIvdm0vY29yZS9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9saWIvdm0vY29yZS9hcnJheS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9saWIvdm0vY29tcGlsZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvbGliL3ZtL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9saWIvdm0vZG9tLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9saWIvdm0vZXZlbnRzLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL2xpYi9hcHAvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvbGliL2FwcC9kb3duZ3JhZGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvbGliL2FwcC9jdHJsLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL2xpYi9hcHAvZG9tLWxpc3RlbmVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL2xpYi9hcHAvZGlmZmVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL2xpYi9hcHAvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvbGliL2FwcC9kb20uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvcGFja2FnZS5qc29uIiwid2VicGFjazovLy8vVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL2xpYi9hcGkvbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvYXBpL21ldGhvZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7O0FBS0EsS0FBTSxVQUFVLG9CQUFRLEVBQVIsQ0FBVjtlQUNvQjtLQUFuQjs7QUFDUCxpQkFBZ0IsT0FBaEIsRTs7Ozs7Ozs7O0FDUEE7O0FBQ0E7O0tBQVk7O0FBQ1o7Ozs7NEJBRVM7QUFDTCxZQUFPLFVBQVAsSUFBcUIsWUFBbUI7QUFDcEMsYUFBTSxNQUFNLFVBQVUsV0FBViw0QkFBTixDQUQ4QjtBQUVwQyxhQUFJLGVBQWUsS0FBZixFQUFzQjtBQUN0QixxQkFBUSxLQUFSLENBQWMsSUFBSSxRQUFKLEVBQWQsRUFEc0I7VUFBMUIsTUFFTyxJQUFJLGVBQWUsS0FBZixFQUFzQjtBQUM3QixpQkFBSSxPQUFKLENBQVksYUFBSztBQUNiLHFCQUFJLGFBQWEsS0FBYixFQUFvQjtBQUNwQiw2QkFBUSxLQUFSLENBQWMsRUFBRSxRQUFGLEVBQWQsRUFEb0I7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QyxZQUFTLElBQVQsQ0FBYyxNQUFkLEVBQXNCLFFBQXRCLEVBRjhDO0VBQXpDOzs7Ozs7O0FBVUEsVUFBUyxPQUFULENBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCO0FBQzVCLE9BQU0sV0FBVyxLQUFLLElBQUwsQ0FBVSxhQUFWLENBQXdCLFVBQXhCLENBQVgsQ0FEc0I7QUFFNUIsWUFBUyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBRjRCO0VBQXZCOzs7Ozs7QUFTQSxVQUFTLFlBQVQsQ0FBc0IsUUFBdEIsRUFBZ0M7QUFDckMsT0FBTSxPQUFPLEtBQUssSUFBTCxDQUFVLGFBQVYsQ0FBd0IsTUFBeEIsQ0FBUCxDQUQrQjtBQUVyQyxRQUFLLFdBQUwsQ0FBaUIsUUFBakIsRUFGcUM7RUFBaEM7Ozs7OztBQVNBLFVBQVMsTUFBVCxDQUFnQixRQUFoQixFQUEwQjtBQUMvQixPQUFNLE9BQU8sS0FBSyxJQUFMLENBQVUsYUFBVixDQUF3QixNQUF4QixDQUFQLENBRHlCO0FBRS9CLFFBQUssS0FBTCxDQUFXLFFBQVgsRUFGK0I7RUFBMUI7Ozs7OztBQVNBLFVBQVMsT0FBVCxDQUFpQixRQUFqQixFQUEyQjtBQUNoQyxPQUFNLE9BQU8sS0FBSyxJQUFMLENBQVUsYUFBVixDQUF3QixNQUF4QixDQUFQLENBRDBCO0FBRWhDLFFBQUssTUFBTCxDQUFZLFFBQVosRUFGZ0MiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGI2OTA5OTQxMGViMjJmMGUxZTBiXG4gKiovIiwiaW1wb3J0ICd3ZWV4LWpzZnJhbWV3b3JrJ1xuXG4vKipcbiAqIHJlZ2lzdGVyIG1ldGhvZHNcbiAqL1xuY29uc3QgbWV0aG9kcyA9IHJlcXVpcmUoJy4vbGliL2FwaS9tZXRob2RzJylcbmNvbnN0IHtyZWdpc3Rlck1ldGhvZHN9ID0gZ2xvYmFsXG5yZWdpc3Rlck1ldGhvZHMobWV0aG9kcylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJy4vcG9seWZpbGwnXG5pbXBvcnQgKiBhcyBmcmFtZXdvcmsgZnJvbSAnLi9saWIvZnJhbWV3b3JrJ1xuaW1wb3J0IHt2ZXJzaW9uLCBvcHRpb25hbERlcGVuZGVuY2llc30gZnJvbSAnLi9wYWNrYWdlLmpzb24nXG5cbmZvciAobGV0IG1ldGhvZE5hbWUgaW4gZnJhbWV3b3JrKSB7XG4gICAgZ2xvYmFsW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gZnJhbWV3b3JrW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gICAgICAgIGlmIChyZXQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXQudG9TdHJpbmcoKSlcbiAgICAgICAgfSBlbHNlIGlmIChyZXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcmV0LmZvckVhY2gociA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHIudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG59XG5cbk9iamVjdC5hc3NpZ24oZ2xvYmFsLCB7XG4gICAgZnJhbWV3b3JrVmVyc2lvbjogdmVyc2lvbixcbiAgICBuZWVkVHJhbnNmb3JtZXJWZXJzaW9uOiBvcHRpb25hbERlcGVuZGVuY2llc1snd2VleC10cmFuc2Zvcm1lciddXG59KVxuXG4vKipcbiAqIHJlZ2lzdGVyIG1ldGhvZHNcbiAqL1xuY29uc3QgbWV0aG9kcyA9IHJlcXVpcmUoJy4vbGliL2FwaS9tZXRob2RzJylcbmNvbnN0IHtyZWdpc3Rlck1ldGhvZHN9ID0gZ2xvYmFsXG5yZWdpc3Rlck1ldGhvZHMobWV0aG9kcylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJy4vb2JqZWN0QXNzaWduJ1xuaW1wb3J0ICcuL3NldFRpbWVvdXQnXG5pbXBvcnQgJy4vY29uc29sZWxvZydcbmltcG9ydCAnLi9wcm9taXNlJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9wb2x5ZmlsbC9pbmRleC5qc1xuICoqLyIsImltcG9ydCAnY29yZS1qcy9mbi9vYmplY3QvYXNzaWduJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9wb2x5ZmlsbC9vYmplY3RBc3NpZ24uanNcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24uanNcbiAqKi8iLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgcmVkZWZpbmUgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pXG4gICAgLCBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYodGFyZ2V0KXJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmKGV4cG9ydHNba2V5XSAhPSBvdXQpaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qc1xuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuMS41J307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzXG4gKiovIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanNcbiAqKi8iLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qc1xuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xyXG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuICoqLyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanNcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuICoqLyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBTUkMgICAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJylcbiAgLCBUT19TVFJJTkcgPSAndG9TdHJpbmcnXG4gICwgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXVxuICAsIFRQTCAgICAgICA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBrZXksIHZhbCwgc2FmZSl7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYoT1trZXldID09PSB2YWwpcmV0dXJuO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZihPID09PSBnbG9iYWwpe1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBpZighc2FmZSl7XG4gICAgICBkZWxldGUgT1trZXldO1xuICAgICAgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKE9ba2V5XSlPW2tleV0gPSB2YWw7XG4gICAgICBlbHNlIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH1cbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanNcbiAqKi8iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19oYXMuanNcbiAqKi8iLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL191aWQuanNcbiAqKi8iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2N0eC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbiAqKi8iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcclxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxyXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XHJcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuICoqLyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxyXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXHJcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxyXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcclxuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcclxuICAgICwgaSAgICAgID0gMFxyXG4gICAgLCByZXN1bHQgPSBbXVxyXG4gICAgLCBrZXk7XHJcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xyXG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcclxuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XHJcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4gKiovIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4gKiovIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qc1xuICoqLyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fY29mLmpzXG4gKiovIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanNcbiAqKi8iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4gKiovIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4gKiovIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanNcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3RvLWluZGV4LmpzXG4gKiovIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcclxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XHJcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4gKiovIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanNcbiAqKi8iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXHJcbm1vZHVsZS5leHBvcnRzID0gKFxyXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXHJcbikuc3BsaXQoJywnKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4gKiovIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuICoqLyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanNcbiAqKi8iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4gKiovIiwiY29uc3Qge1xuICBzZXRUaW1lb3V0LCBzZXRUaW1lb3V0TmF0aXZlXG59ID0gZ2xvYmFsXG5cbi8vIGZpeCBubyBzZXRUaW1lb3V0IG9uIEFuZHJvaWQgVjhcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2Ygc2V0VGltZW91dE5hdGl2ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICBjb25zdCB0aW1lb3V0TWFwID0ge31cbiAgbGV0IHRpbWVvdXRJZCA9IDBcbiAgZ2xvYmFsLnNldFRpbWVvdXQgPSAoY2IsIHRpbWUpID0+IHtcbiAgICB0aW1lb3V0TWFwWysrdGltZW91dElkXSA9IGNiXG4gICAgc2V0VGltZW91dE5hdGl2ZSh0aW1lb3V0SWQudG9TdHJpbmcoKSwgdGltZSlcbiAgfVxuICBnbG9iYWwuc2V0VGltZW91dENhbGxiYWNrID0gKGlkKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aW1lb3V0TWFwW2lkXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGltZW91dE1hcFtpZF0oKVxuICAgICAgZGVsZXRlIHRpbWVvdXRNYXBbaWRdXG4gICAgfVxuICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9wb2x5ZmlsbC9zZXRUaW1lb3V0LmpzXG4gKiovIiwiY29uc3Qge2NvbnNvbGV9ID0gZ2xvYmFsXG5sZXQgbG9nTGV2ZWxcblxuY29uc3QgTEVWRUxfTUFQID0ge1xuICBfX0VSUk9SOiAnZXJyb3InLFxuICBfX1dBUk46ICd3YXJuJyxcbiAgX19JTkZPOiAnaW5mbycsXG4gIF9fREVCVUc6ICdkZWJ1ZycsXG4gIF9fVkVSQk9TRTogJ3ZlcmJvc2UnXG59XG5cbmNvbnN0IExFVkVMUyA9IFsnZXJyb3InLCAnd2FybicsICdpbmZvJywgJ2RlYnVnJywgJ3ZlcmJvc2UnLCAnYWxsJ11cblxuZnVuY3Rpb24gbm9ybWFsaXplICh2KSB7XG4gIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXG4gIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdbb2JqZWN0IG9iamVjdF0nKSB7XG4gICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpXG4gIH0gZWxzZSB7XG4gICAgdiA9IFN0cmluZyh2KVxuICB9XG4gIHJldHVybiB2XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludGxvZyguLi5hcmdzKSB7XG4gIGNvbnN0IHtXWEVudmlyb25tZW50LCBuYXRpdmVMb2d9ID0gZ2xvYmFsXG5cbiAgbG9nTGV2ZWwgPSAoV1hFbnZpcm9ubWVudCAmJlxuICAgICAgICAgICAgICAgIFdYRW52aXJvbm1lbnQubG9nTGV2ZWwpIHx8XG4gICAgICAgICAgICAgICAgJ2luZm8nXG5cbiAgaWYgKHR5cGVvZiBuYXRpdmVMb2cgPT09ICdmdW5jdGlvbicpIHtcbiAgICBsZXQgbGV2ZWwgPSBhcmdzLnBvcCgpXG4gICAgaWYgKExFVkVMUy5pbmRleE9mKExFVkVMX01BUFtsZXZlbF0pIDw9XG4gICAgICAgICAgTEVWRUxTLmluZGV4T2YobG9nTGV2ZWwpKSB7XG4gICAgICBuYXRpdmVMb2coLi4uYXJncy5tYXAodiA9PiBub3JtYWxpemUodikpLCBsZXZlbClcbiAgICB9XG4gIH1cbn1cblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAodHlwZW9mIGNvbnNvbGUgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgLy8gaW4ganNjb3JlLCBpdCBoYXMgYGNvbnNvbGVgIG9iamVjdCB3aXRob3V0IGFueSBrZXlzLlxuICAgIE9iamVjdC5rZXlzKGNvbnNvbGUpLmxlbmd0aCA9PT0gMCkge1xuICBnbG9iYWwuY29uc29sZSA9IHtcbiAgICBsb2c6ICguLi5hcmdzKSA9PiB7IC8vIF9fVkVSQk9TRVxuICAgICAgcHJpbnRsb2coLi4uYXJncywgJ19fVkVSQk9TRScpXG4gICAgfSxcbiAgICBkZWJ1ZzogKC4uLmFyZ3MpID0+IHsgLy8gX19ERUJVR1xuICAgICAgcHJpbnRsb2coLi4uYXJncywgJ19fREVCVUcnKVxuICAgIH0sXG4gICAgaW5mbzogKC4uLmFyZ3MpID0+IHsgLy8gX19JTkZPXG4gICAgICBwcmludGxvZyguLi5hcmdzLCAnX19JTkZPJylcbiAgICB9LFxuICAgIHdhcm46ICguLi5hcmdzKSA9PiB7IC8vIF9fV0FSTlxuICAgICAgcHJpbnRsb2coLi4uYXJncywgJ19fV0FSTicpXG4gICAgfSxcbiAgICBlcnJvcjogKC4uLmFyZ3MpID0+IHsgLy8gX19FUlJPUlxuICAgICAgcHJpbnRsb2coLi4uYXJncywgJ19fRVJST1InKVxuICAgIH1cbiAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvcG9seWZpbGwvY29uc29sZWxvZy5qc1xuICoqLyIsImNvbnN0IE1TRyA9ICdVc2luZyBcIlByb21pc2VcIiBpcyB1bmV4cGVjdGVkJ1xuXG5jb25zdCBVbmV4cGVjdGVkUHJvbWlzZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS53YXJuKE1TRylcblxuICB0aGlzLnRoZW4gPSAoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKE1TRylcbiAgfVxufVxuXG5VbmV4cGVjdGVkUHJvbWlzZS5hbGwgPVxuICBVbmV4cGVjdGVkUHJvbWlzZS5yYWNlID1cbiAgVW5leHBlY3RlZFByb21pc2UucmVzb2x2ZSA9XG4gIFVuZXhwZWN0ZWRQcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLndhcm4oTVNHKVxuICB9XG5cbmdsb2JhbC5Qcm9taXNlID0gVW5leHBlY3RlZFByb21pc2VcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL3BvbHlmaWxsL3Byb21pc2UuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgTWFpbiBlbnRyeSwgaW5zdGFuY2UgbWFuYWdlclxuICpcbiAqIC0gY3JlYXRlSW5zdGFuY2UoaW5zdGFuY2VJZCwgY29kZSwgb3B0aW9ucywgZGF0YSlcbiAqIC0gcmVmcmVzaEluc3RhbmNlKGluc3RhbmNlSWQsIGRhdGEpXG4gKiAtIGRlc3Ryb3lJbnN0YW5jZShpbnN0YW5jZUlkKVxuICogLSByZWdpc3RlckNvbXBvbmVudHMoY29tcG9uZW50cylcbiAqIC0gcmVnaXN0ZXJNb2R1bGVzKG1vZHVsZXMpXG4gKiAtIGdldFJvb3QoaW5zdGFuY2VJZClcbiAqIC0gaW5zdGFuY2VNYXBcbiAqIC0gY2FsbEpTKGluc3RhbmNlSWQsIHRhc2tzKVxuICogICAtIGZpcmVFdmVudChyZWYsIHR5cGUsIGRhdGEpXG4gKiAgIC0gY2FsbGJhY2soZnVuY0lkLCBkYXRhKVxuICovXG5cbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICcuL2NvbmZpZydcbmltcG9ydCBBcHBJbnN0YW5jZSBmcm9tICcuL2FwcCdcbmltcG9ydCBWbSBmcm9tICcuL3ZtJ1xuXG52YXIge1xuICBuYXRpdmVDb21wb25lbnRNYXBcbn0gPSBjb25maWdcbnZhciBpbnN0YW5jZU1hcCA9IHt9XG5cbi8qKlxuICogY3JlYXRlIGEgV2VleCBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaW5zdGFuY2VJZFxuICogQHBhcmFtICB7c3RyaW5nfSBjb2RlXG4gKiBAcGFyYW0gIHtvYmplY3R9IFtvcHRpb25zXSBvcHRpb24gYEhBU19MT0dgIGVuYWJsZSBwcmludCBsb2dcbiAqIEBwYXJhbSAge29iamVjdH0gW2RhdGFdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShpbnN0YW5jZUlkLCBjb2RlLCBvcHRpb25zLCBkYXRhKSB7XG4gIHZhciBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2luc3RhbmNlSWRdXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgY29uZmlnLmRlYnVnID0gb3B0aW9ucy5kZWJ1Z1xuXG4gIHZhciByZXN1bHRcbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlID0gbmV3IEFwcEluc3RhbmNlKGluc3RhbmNlSWQsIG9wdGlvbnMpXG4gICAgaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF0gPSBpbnN0YW5jZVxuICAgIHJlc3VsdCA9IGluc3RhbmNlLmluaXQoY29kZSwgZGF0YSlcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2luc3RhbmNlSWR9XCJgKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIHJlZnJlc2ggYSBXZWV4IGluc3RhbmNlXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBpbnN0YW5jZUlkXG4gKiBAcGFyYW0gIHtvYmplY3R9IGRhdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hJbnN0YW5jZShpbnN0YW5jZUlkLCBkYXRhKSB7XG4gIHZhciBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2luc3RhbmNlSWRdXG4gIHZhciByZXN1bHRcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmVzdWx0ID0gaW5zdGFuY2UucmVmcmVzaERhdGEoZGF0YSlcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2luc3RhbmNlSWR9XCJgKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBkZXN0cm95IGEgV2VleCBpbnN0YW5jZVxuICogQHBhcmFtICB7c3RyaW5nfSBpbnN0YW5jZUlkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95SW5zdGFuY2UoaW5zdGFuY2VJZCkge1xuICB2YXIgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICBpZiAoIWluc3RhbmNlKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aW5zdGFuY2VJZH1cImApXG4gIH1cblxuICBpbnN0YW5jZS5kZXN0cm95KClcbiAgZGVsZXRlIGluc3RhbmNlTWFwW2luc3RhbmNlSWRdXG4gIHJldHVybiBpbnN0YW5jZU1hcFxufVxuXG4vKipcbiAqIHJlZ2lzdGVyIHRoZSBuYW1lIG9mIGVhY2ggbmF0aXZlIGNvbXBvbmVudFxuICogQHBhcmFtICB7YXJyYXl9IGNvbXBvbmVudHMgYXJyYXkgb2YgbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29tcG9uZW50cykpIHtcbiAgICBjb21wb25lbnRzLmZvckVhY2goZnVuY3Rpb24gcmVnaXN0ZXIobmFtZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hdGl2ZUNvbXBvbmVudE1hcFtuYW1lXSA9IHRydWVcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBuYW1lLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hdGl2ZUNvbXBvbmVudE1hcFtuYW1lLnR5cGVdID0gbmFtZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiByZWdpc3RlciB0aGUgbmFtZSBhbmQgbWV0aG9kcyBvZiBlYWNoIG1vZHVsZVxuICogQHBhcmFtICB7b2JqZWN0fSBtb2R1bGVzIGEgb2JqZWN0IG9mIG1vZHVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTW9kdWxlcyhtb2R1bGVzKSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ29iamVjdCcpIHtcbiAgICBWbS5yZWdpc3Rlck1vZHVsZXMobW9kdWxlcylcbiAgfVxufVxuXG4vKipcbiAqIHJlZ2lzdGVyIHRoZSBuYW1lIGFuZCBtZXRob2RzIG9mIGVhY2ggYXBpXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwaXMgYSBvYmplY3Qgb2YgYXBpc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJNZXRob2RzKGFwaXMpIHtcbiAgaWYgKHR5cGVvZiBhcGlzID09PSAnb2JqZWN0Jykge1xuICAgIFZtLnJlZ2lzdGVyTWV0aG9kcyhhcGlzKVxuICB9XG59XG5cbi8qKlxuICogZ2V0IGEgd2hvbGUgZWxlbWVudCB0cmVlIG9mIGFuIGluc3RhbmNlXG4gKiBmb3IgZGVidWdnaW5nXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGluc3RhbmNlSWRcbiAqIEByZXR1cm4ge29iamVjdH0gYSB2aXJ0dWFsIGRvbSB0cmVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290KGluc3RhbmNlSWQpIHtcbiAgdmFyIGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgdmFyIHJlc3VsdFxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXN1bHQgPSBpbnN0YW5jZS5nZXRSb290RWxlbWVudCgpXG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpbnN0YW5jZUlkfVwiYClcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbnZhciBqc0hhbmRsZXJzID0ge1xuICBmaXJlRXZlbnQ6IGZ1bmN0aW9uIGZpcmVFdmVudChpbnN0YW5jZUlkLCByZWYsIHR5cGUsIGRhdGEsIGRvbUNoYW5nZXMpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICAgIHZhciByZXN1bHRcbiAgICByZXN1bHQgPSBpbnN0YW5jZS5maXJlRXZlbnQocmVmLCB0eXBlLCBkYXRhLCBkb21DaGFuZ2VzKVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcblxuICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2soaW5zdGFuY2VJZCwgZnVuY0lkLCBkYXRhLCBpZkxhc3QpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICAgIHZhciByZXN1bHRcbiAgICByZXN1bHQgPSBpbnN0YW5jZS5jYWxsYmFjayhmdW5jSWQsIGRhdGEsIGlmTGFzdClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuLyoqXG4gKiBhY2NlcHQgY2FsbHMgZnJvbSBuYXRpdmUgKGV2ZW50IG9yIGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaW5zdGFuY2VJZFxuICogQHBhcmFtICB7YXJyYXl9IHRhc2tzIGxpc3Qgd2l0aCBgbWV0aG9kYCBhbmQgYGFyZ3NgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxsSlMoaW5zdGFuY2VJZCwgdGFza3MpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICBsZXQgcmVzdWx0cyA9IFtdXG4gIGlmIChpbnN0YW5jZSAmJiBBcnJheS5pc0FycmF5KHRhc2tzKSkge1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBqc0hhbmRsZXJzW3Rhc2subWV0aG9kXVxuICAgICAgY29uc3QgYXJncyA9IFsuLi50YXNrLmFyZ3NdXG4gICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYXJncy51bnNoaWZ0KGluc3RhbmNlSWQpXG4gICAgICAgIHJlc3VsdHMucHVzaChoYW5kbGVyKC4uLmFyZ3MpKVxuICAgICAgfVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0cy5wdXNoKG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aW5zdGFuY2VJZH1cIiBvciB0YXNrc2ApKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHNcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvbGliL2ZyYW1ld29yay5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBuYXRpdmVDb21wb25lbnRNYXAgPSB7XG4gIHRleHQ6IHRydWUsXG4gIGltYWdlOiB0cnVlLFxuICBjb250YWluZXI6IHRydWUsXG4gIHNsaWRlcjoge1xuICAgIHR5cGU6ICdzbGlkZXInLFxuICAgIGFwcGVuZDogJ3RyZWUnXG4gIH0sXG4gIGNlbGw6IHtcbiAgICB0eXBlOiAnY2VsbCcsXG4gICAgYXBwZW5kOiAndHJlZSdcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tQ29tcG9uZW50TWFwID0ge31cblxuZXhwb3J0IHZhciBkZWJ1ZyA9IGZhbHNlXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvbGliL2NvbmZpZy5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogV2VleCBpbnN0YW5jZSBjb25zdHJ1Y3RvciAmIGRlZmluaXRpb25cbiAqL1xuXG5pbXBvcnQge3R5cG9mLCBleHRlbmR9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgKiBhcyBidW5kbGUgZnJvbSAnLi9idW5kbGUnXG5pbXBvcnQgKiBhcyBjdHJsIGZyb20gJy4vY3RybCdcbmltcG9ydCBEaWZmZXIgZnJvbSAnLi9kaWZmZXInXG5cbmltcG9ydCBFdmVudE1hbmFnZXIgZnJvbSAnLi9ldmVudCdcbmltcG9ydCBMaXN0ZW5lciBmcm9tICcuL2RvbS1saXN0ZW5lcidcbmltcG9ydCB7RG9jdW1lbnQsIE5vZGV9IGZyb20gJy4vZG9tJ1xuaW1wb3J0IHtyZWdpc3RlckNvbXBvbmVudCwgcmVxdWlyZUNvbXBvbmVudCwgcmVxdWlyZU1vZHVsZX0gZnJvbSAnLi9yZWdpc3RlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwSW5zdGFuY2UoaW5zdGFuY2VJZCwgb3B0aW9ucykge1xuICB0aGlzLmlkID0gaW5zdGFuY2VJZFxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHRoaXMudm0gPSBudWxsXG4gIHRoaXMuZG9jID0gbmV3IERvY3VtZW50KGluc3RhbmNlSWQsIHRoaXMub3B0aW9ucy5idW5kbGVVcmwpXG4gIHRoaXMuY3VzdG9tQ29tcG9uZW50TWFwID0ge31cbiAgdGhpcy5jYWxsYmFja3MgPSB7fVxuICB0aGlzLmRpZmZlciA9IG5ldyBEaWZmZXIoaW5zdGFuY2VJZClcbiAgdGhpcy51aWQgPSAwXG4gIHRoaXMucmVuZGVyZWQgPSBmYWxzZVxuICB0aGlzLmV2ZW50TWFuYWdlciA9IG5ldyBFdmVudE1hbmFnZXIoKVxuICB0aGlzLmxpc3RlbmVyID0gbmV3IExpc3RlbmVyKHRoaXMuaWQsICh0YXNrcykgPT4ge1xuICAgIHRoaXMuY2FsbFRhc2tzKHRhc2tzKVxuICB9KVxuICB0aGlzLmRvYy5zZXRFdmVudE1hbmFnZXIodGhpcy5ldmVudE1hbmFnZXIpXG4gIHRoaXMuZG9jLnNldExpc3RlbmVyKHRoaXMubGlzdGVuZXIpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZShhcHAsIHYpIHtcbiAgdmFyIHR5cGUgPSB0eXBvZih2KVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgY2FzZSAnbnVsbCc6XG4gICAgICByZXR1cm4gJydcbiAgICBjYXNlICdyZWdleHAnOlxuICAgICAgcmV0dXJuIHYudG9TdHJpbmcoKVxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIHYudG9JU09TdHJpbmcoKVxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBjYXNlICdhcnJheSc6XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmICh2IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICByZXR1cm4gdi5yZWZcbiAgICAgIH1cbiAgICAgIHJldHVybiB2XG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgYXBwLmNhbGxiYWNrc1srK2FwcC51aWRdID0gdlxuICAgICAgcmV0dXJuIGFwcC51aWQudG9TdHJpbmcoKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodilcbiAgfVxufVxuXG5BcHBJbnN0YW5jZS5wcm90b3R5cGUuY2FsbFRhc2tzID0gZnVuY3Rpb24gKHRhc2tzKSB7XG4gIGlmICh0eXBvZih0YXNrcykgIT09ICdhcnJheScpIHtcbiAgICB0YXNrcyA9IFt0YXNrc11cbiAgfVxuXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrLmFyZ3MgPSB0YXNrLmFyZ3MubWFwKGFyZyA9PiBub3JtYWxpemUodGhpcywgYXJnKSlcbiAgfSlcblxuICBjYWxsTmF0aXZlKHRoaXMuaWQsIHRhc2tzLCAnLTEnKVxufVxuXG5leHRlbmQoQXBwSW5zdGFuY2UucHJvdG90eXBlLCBidW5kbGUsIGN0cmwsIHtcbiAgcmVnaXN0ZXJDb21wb25lbnQsXG4gIHJlcXVpcmVDb21wb25lbnQsXG4gIHJlcXVpcmVNb2R1bGVcbn0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL2xpYi9hcHAvaW5kZXguanNcbiAqKi8iLCIvLy8gbGFuZy5qc1xuXG4vKipcbiAqIENoZWNrIGlmIGEgc3RyaW5nIHN0YXJ0cyB3aXRoICQgb3IgX1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzZXJ2ZWQgKHN0cikge1xuICBjb25zdCBjID0gKHN0ciArICcnKS5jaGFyQ29kZUF0KDApXG4gIHJldHVybiBjID09PSAweDI0IHx8IGMgPT09IDB4NUZcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBbZW51bWVyYWJsZV1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmIChvYmosIGtleSwgdmFsLCBlbnVtZXJhYmxlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIHZhbHVlOiB2YWwsXG4gICAgZW51bWVyYWJsZTogISFlbnVtZXJhYmxlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufVxuXG4vLy8gZW52LmpzXG5cbi8vIGNhbiB3ZSB1c2UgX19wcm90b19fP1xuZXhwb3J0IGNvbnN0IGhhc1Byb3RvID0gJ19fcHJvdG9fXycgaW4ge31cblxuLy8gQnJvd3NlciBlbnZpcm9ubWVudCBzbmlmZmluZ1xuZXhwb3J0IGNvbnN0IGluQnJvd3NlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3aW5kb3cpICE9PSAnW29iamVjdCBPYmplY3RdJ1xuXG4vLyBkZXRlY3QgZGV2dG9vbHNcbmV4cG9ydCBjb25zdCBkZXZ0b29scyA9IGluQnJvd3NlciAmJiB3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfX1xuXG4vLyBVQSBzbmlmZmluZyBmb3Igd29ya2luZyBhcm91bmQgYnJvd3Nlci1zcGVjaWZpYyBxdWlya3NcbmNvbnN0IFVBID0gaW5Ccm93c2VyICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKClcbmNvbnN0IGlzSW9zID0gVUEgJiYgLyhpcGhvbmV8aXBhZHxpcG9kfGlvcykvaS50ZXN0KFVBKVxuY29uc3QgaXNXZWNoYXQgPSBVQSAmJiBVQS5pbmRleE9mKCdtaWNyb21lc3NlbmdlcicpID4gMFxuXG4vKipcbiAqIERlZmVyIGEgdGFzayB0byBleGVjdXRlIGl0IGFzeW5jaHJvbm91c2x5LiBJZGVhbGx5IHRoaXNcbiAqIHNob3VsZCBiZSBleGVjdXRlZCBhcyBhIG1pY3JvdGFzaywgc28gd2UgbGV2ZXJhZ2VcbiAqIE11dGF0aW9uT2JzZXJ2ZXIgaWYgaXQncyBhdmFpbGFibGUsIGFuZCBmYWxsYmFjayB0b1xuICogc2V0VGltZW91dCgwKS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IGN0eFxuICovXG5cbmV4cG9ydCBjb25zdCBuZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBjYWxsYmFja3MgPSBbXVxuICBsZXQgcGVuZGluZyA9IGZhbHNlXG4gIGxldCB0aW1lckZ1bmNcbiAgZnVuY3Rpb24gbmV4dFRpY2tIYW5kbGVyICgpIHtcbiAgICBwZW5kaW5nID0gZmFsc2VcbiAgICBjb25zdCBjb3BpZXMgPSBjYWxsYmFja3Muc2xpY2UoMClcbiAgICBjYWxsYmFja3MgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29waWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb3BpZXNbaV0oKVxuICAgIH1cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnICYmICEoaXNXZWNoYXQgJiYgaXNJb3MpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAxXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihuZXh0VGlja0hhbmRsZXIpXG4gICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb3VudGVyKVxuICAgIG9ic2VydmVyLm9ic2VydmUodGV4dE5vZGUsIHtcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgICB9KVxuICAgIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvdW50ZXIgPSAoY291bnRlciArIDEpICUgMlxuICAgICAgdGV4dE5vZGUuZGF0YSA9IGNvdW50ZXJcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gd2VicGFjayBhdHRlbXB0cyB0byBpbmplY3QgYSBzaGltIGZvciBzZXRJbW1lZGlhdGVcbiAgICAvLyBpZiBpdCBpcyB1c2VkIGFzIGEgZ2xvYmFsLCBzbyB3ZSBoYXZlIHRvIHdvcmsgYXJvdW5kIHRoYXQgdG9cbiAgICAvLyBhdm9pZCBidW5kbGluZyB1bm5lY2Vzc2FyeSBjb2RlLlxuICAgIGNvbnN0IGNvbnRleHQgPSBpbkJyb3dzZXJcbiAgICAgID8gd2luZG93XG4gICAgICA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDoge31cbiAgICB0aW1lckZ1bmMgPSBjb250ZXh0LnNldEltbWVkaWF0ZSB8fCBzZXRUaW1lb3V0XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIChjYiwgY3R4KSB7XG4gICAgY29uc3QgZnVuYyA9IGN0eFxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGNiLmNhbGwoY3R4KSB9XG4gICAgICA6IGNiXG4gICAgY2FsbGJhY2tzLnB1c2goZnVuYylcbiAgICBpZiAocGVuZGluZykgcmV0dXJuXG4gICAgcGVuZGluZyA9IHRydWVcbiAgICB0aW1lckZ1bmMobmV4dFRpY2tIYW5kbGVyLCAwKVxuICB9XG59KSgpXG5cbmxldCBfU2V0XG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICh0eXBlb2YgU2V0ICE9PSAndW5kZWZpbmVkJyAmJiBTZXQudG9TdHJpbmcoKS5tYXRjaCgvbmF0aXZlIGNvZGUvKSkge1xuICAvLyB1c2UgbmF0aXZlIFNldCB3aGVuIGF2YWlsYWJsZS5cbiAgX1NldCA9IFNldFxufSBlbHNlIHtcbiAgLy8gYSBub24tc3RhbmRhcmQgU2V0IHBvbHlmaWxsIHRoYXQgb25seSB3b3JrcyB3aXRoIHByaW1pdGl2ZSBrZXlzLlxuICBfU2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB9XG4gIF9TZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRba2V5XSAhPT0gdW5kZWZpbmVkXG4gIH1cbiAgX1NldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHRoaXMuc2V0W2tleV0gPSAxXG4gIH1cbiAgX1NldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIH1cbn1cblxuZXhwb3J0IHsgX1NldCB9XG5cbi8vLyBzaGFyZWRcblxuLyoqXG4gKiBSZW1vdmUgYW4gaXRlbSBmcm9tIGFuIGFycmF5XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0geyp9IGl0ZW1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlIChhcnIsIGl0ZW0pIHtcbiAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuZXhwb3J0IGZ1bmN0aW9uIGhhc093biAob2JqLCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVkIChmbikge1xuICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuIChzdHIpIHtcbiAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdXG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXG4gIH1cbn1cblxuLyoqXG4gKiBDYW1lbGl6ZSBhIGh5cGhlbi1kZWxtaXRlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmNvbnN0IGNhbWVsaXplUkUgPSAvLShcXHcpL2dcbmV4cG9ydCBjb25zdCBjYW1lbGl6ZSA9IGNhY2hlZChzdHIgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgdG9VcHBlcilcbn0pXG5cbmZ1bmN0aW9uIHRvVXBwZXIgKF8sIGMpIHtcbiAgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJ1xufVxuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmNvbnN0IGh5cGhlbmF0ZVJFID0gLyhbYS16XFxkXSkoW0EtWl0pL2dcbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgIC50b0xvd2VyQ2FzZSgpXG59KVxuXG4vKipcbiAqIFNpbXBsZSBiaW5kLCBmYXN0ZXIgdGhhbiBuYXRpdmVcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtPYmplY3R9IGN0eFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmQgKGZuLCBjdHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgY29uc3QgbCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICByZXR1cm4gbFxuICAgICAgPyBsID4gMVxuICAgICAgICA/IGZuLmFwcGx5KGN0eCwgYXJndW1lbnRzKVxuICAgICAgICA6IGZuLmNhbGwoY3R4LCBhKVxuICAgICAgOiBmbi5jYWxsKGN0eClcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gQXJyYXktbGlrZSBvYmplY3QgdG8gYSByZWFsIEFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXktbGlrZX0gbGlzdFxuICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydF0gLSBzdGFydCBpbmRleFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXkgKGxpc3QsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgMFxuICBsZXQgaSA9IGxpc3QubGVuZ3RoIC0gc3RhcnRcbiAgY29uc3QgcmV0ID0gbmV3IEFycmF5KGkpXG4gIHdoaWxlIChpLS0pIHtcbiAgICByZXRbaV0gPSBsaXN0W2kgKyBzdGFydF1cbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0b1xuICogQHBhcmFtIHtPYmplY3R9IGZyb21cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kICh0YXJnZXQsIC4uLnNyYykge1xuICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc3JjKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGZpcnN0ID0gc3JjLnNoaWZ0KClcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmaXJzdCkge1xuICAgICAgdGFyZ2V0W2tleV0gPSBmaXJzdFtrZXldXG4gICAgfVxuICAgIGlmIChzcmMubGVuZ3RoKSB7XG4gICAgICBleHRlbmQodGFyZ2V0LCAuLi5zcmMpXG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXRcbn1cblxuLyoqXG4gKiBRdWljayBvYmplY3QgY2hlY2sgLSB0aGlzIGlzIHByaW1hcmlseSB1c2VkIHRvIHRlbGxcbiAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAqIGlzIGEgSlNPTi1jb21wbGlhbnQgdHlwZS5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcbmNvbnN0IE9CSkVDVF9TVFJJTkcgPSAnW29iamVjdCBPYmplY3RdJ1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG9iaikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSBPQkpFQ1RfU1RSSU5HXG59XG5cbi8qKlxuICogQXJyYXkgdHlwZSBjaGVjay5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXlcblxuLy8vIG90aGVyXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkgKHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJyB8fCB4ID09PSBudWxsIHx8IHR5cGVvZih4KSA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gJydcbiAgICA6IHR5cGVvZiB4ID09PSAnb2JqZWN0J1xuICAgICAgPyB4IGluc3RhbmNlb2YgUmVnRXhwXG4gICAgICAgID8geC50b1N0cmluZygpXG4gICAgICAgIDogeCBpbnN0YW5jZW9mIERhdGVcbiAgICAgICAgICA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoeCkpXG4gICAgICAgICAgOiBKU09OLnN0cmluZ2lmeSh4KVxuICAgICAgOiB4LnRvU3RyaW5nKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cG9mICh2KSB7XG4gIGxldCBzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXG4gIHJldHVybiBzLnN1YnN0cmluZyg4LCBzLmxlbmd0aCAtIDEpLnRvTG93ZXJDYXNlKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZSAodikge1xuICBsZXQgdHlwZSA9IHR5cG9mKHYpXG5cbiAgc3dpdGNoKHR5cGUpIHtcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgIGNhc2UgJ251bGwnOlxuICAgICAgcmV0dXJuICcnXG4gICAgY2FzZSAncmVnZXhwJzpcbiAgICAgIHJldHVybiB2LnRvU3RyaW5nKClcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIHJldHVybiB2LnRvSVNPU3RyaW5nKClcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgY2FzZSAnYXJyYXknOlxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgcmV0dXJuIHZcbiAgfVxufVxuXG5jb25zdCBlbmFibGVMb2cgPSB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLklTX1BST0RVQ1QgIT09IHRydWVcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gbXNnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcnJvciAoLi4uYXJncykge1xuICBlbmFibGVMb2cgJiYgY29uc29sZS5lcnJvciAmJiBjb25zb2xlLmVycm9yKCdbSlMgRnJhbWV3b3JrXScsIC4uLmFyZ3MpXG59XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gd2FybiAoLi4uYXJncykge1xuICBlbmFibGVMb2cgJiYgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10nLCAuLi5hcmdzKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZm8gKC4uLmFyZ3MpIHtcbiAgZW5hYmxlTG9nICYmIGNvbnNvbGUuaW5mbyAmJiBjb25zb2xlLmluZm8oJ1tKUyBGcmFtZXdvcmtdJywgLi4uYXJncylcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gbXNnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWJ1ZyAoLi4uYXJncykge1xuICBlbmFibGVMb2cgJiYgY29uc29sZS5kZWJ1ZyAmJiBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXScsIC4uLmFyZ3MpXG59XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gbG9nICguLi5hcmdzKSB7XG4gIGVuYWJsZUxvZyAmJiBjb25zb2xlLmxvZyAmJiBjb25zb2xlLmxvZygnW0pTIEZyYW1ld29ya10nLCAuLi5hcmdzKVxufVxuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvbGliL3V0aWwvaW5kZXguanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIGFwaSB0aGF0IGludm9rZWQgYnkganMgYnVuZGxlIGNvZGVcbiAqXG4gKiAtIGRlZmluZShuYW1lLCBmYWN0b3J5KTogZGVmaW5lIGEgbmV3IGNvbXBvc2VkIGNvbXBvbmVudCB0eXBlXG4gKiAtIGJvb3RzdHJhcCh0eXBlLCBjb25maWcsIGRhdGEpOiByZXF1aXJlIGEgY2VydGFpbiB0eXBlICZcbiAqICAgICAgICAgcmVuZGVyIHdpdGggKG9wdGlvbmFsKSBkYXRhXG4gKlxuICogZGVwcmVjYXRlZDpcbiAqIC0gcmVnaXN0ZXIodHlwZSwgb3B0aW9ucyk6IHJlZ2lzdGVyIGEgbmV3IGNvbXBvc2VkIGNvbXBvbmVudCB0eXBlXG4gKiAtIHJlbmRlcih0eXBlLCBkYXRhKTogcmVuZGVyIGJ5IGEgY2VydGFpbiB0eXBlIHdpdGggKG9wdGlvbmFsKSBkYXRhXG4gKiAtIHJlcXVpcmUodHlwZSkoZGF0YSk6IHJlcXVpcmUgYSB0eXBlIHRoZW4gcmVuZGVyIHdpdGggZGF0YVxuICovXG5cbmltcG9ydCBzZW12ZXIgZnJvbSAnc2VtdmVyJ1xuaW1wb3J0ICogYXMgXyBmcm9tICcuLi91dGlsJ1xuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBWbSBmcm9tICcuLi92bSdcbmltcG9ydCAqIGFzIGRvd25ncmFkZSBmcm9tICcuL2Rvd25ncmFkZSdcblxuY29uc3QgV0VFWF9DT01QT05FTlRfUkVHID0gL15cXEB3ZWV4LWNvbXBvbmVudFxcLy9cbmNvbnN0IFdFRVhfTU9EVUxFX1JFRyA9IC9eXFxAd2VleC1tb2R1bGVcXC8vXG5jb25zdCBOT1JNQUxfTU9EVUxFX1JFRyA9IC9eXFwuezEsMn1cXC8vXG5jb25zdCBKU19TVVJGSVhfUkVHID0gL1xcLmpzJC9cblxuY29uc3QgaXNXZWV4Q29tcG9uZW50ID0gbmFtZSA9PiAhIW5hbWUubWF0Y2goV0VFWF9DT01QT05FTlRfUkVHKVxuY29uc3QgaXNXZWV4TW9kdWxlID0gbmFtZSA9PiAhIW5hbWUubWF0Y2goV0VFWF9NT0RVTEVfUkVHKVxuY29uc3QgaXNOb3JtYWxNb2R1bGUgPSBuYW1lID0+ICEhbmFtZS5tYXRjaChOT1JNQUxfTU9EVUxFX1JFRylcbmNvbnN0IGlzTnBtTW9kdWxlID0gbmFtZSA9PiAhaXNXZWV4Q29tcG9uZW50KG5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNXZWV4TW9kdWxlKG5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNOb3JtYWxNb2R1bGUobmFtZSlcblxuZnVuY3Rpb24gcmVtb3ZlV2VleFByZWZpeChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFdFRVhfQ09NUE9ORU5UX1JFRywgJycpXG4gICAgICAgICAgLnJlcGxhY2UoV0VFWF9NT0RVTEVfUkVHLCAnJylcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSlNTdXJmaXgoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShKU19TVVJGSVhfUkVHLCAnJylcbn1cblxubGV0IGNvbW1vbk1vZHVsZXMgPSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDb21tb25Nb2R1bGVzKCkge1xuICBjb21tb25Nb2R1bGVzID0ge31cbn1cblxuLy8gZGVmaW5lKG5hbWUsIGZhY3RvcnkpIGZvciBwcmltYXJ5IHVzYWdlXG4vLyBvclxuLy8gZGVmaW5lKG5hbWUsIGRlcHMsIGZhY3RvcnkpIGZvciBjb21wYXRpYmlsaXR5XG4vLyBOb3RpY2U6IERPIE5PVCB1c2UgZnVuY3Rpb24gZGVmaW5lKCkge30sXG4vLyBpdCB3aWxsIGNhdXNlIGVycm9yIGFmdGVyIGJ1aWxkZWQgYnkgd2VicGFja1xuZXhwb3J0IHZhciBkZWZpbmUgPSBmdW5jdGlvbiAobmFtZSwgZGVwcywgZmFjdG9yeSkge1xuICBfLmRlYnVnKCdkZWZpbmUgYSBjb21wb25lbnQnLCBuYW1lKVxuXG4gIGlmIChfLnR5cG9mKGRlcHMpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZmFjdG9yeSA9IGRlcHNcbiAgICBkZXBzID0gW11cbiAgfVxuXG4gIGxldCBfcmVxdWlyZSA9IChuYW1lKSA9PiB7XG4gICAgbGV0IGNsZWFuTmFtZVxuXG4gICAgaWYgKGlzV2VleENvbXBvbmVudChuYW1lKSkge1xuICAgICAgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICAgICAgcmV0dXJuIHRoaXMucmVxdWlyZUNvbXBvbmVudChjbGVhbk5hbWUpXG4gICAgfVxuICAgIGlmIChpc1dlZXhNb2R1bGUobmFtZSkpIHtcbiAgICAgIGNsZWFuTmFtZSA9IHJlbW92ZVdlZXhQcmVmaXgobmFtZSlcbiAgICAgIHJldHVybiB0aGlzLnJlcXVpcmVNb2R1bGUoY2xlYW5OYW1lKVxuICAgIH1cbiAgICBpZiAoaXNOb3JtYWxNb2R1bGUobmFtZSkpIHtcbiAgICAgIGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG4gICAgICByZXR1cm4gY29tbW9uTW9kdWxlc1tuYW1lXVxuICAgIH1cbiAgICBpZiAoaXNOcG1Nb2R1bGUobmFtZSkpIHtcbiAgICAgIGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG4gICAgICByZXR1cm4gY29tbW9uTW9kdWxlc1tuYW1lXVxuICAgIH1cbiAgfVxuICBsZXQgX21vZHVsZSA9IHtleHBvcnRzOiB7fX1cblxuICBsZXQgY2xlYW5OYW1lXG4gIGlmIChpc1dlZXhDb21wb25lbnQobmFtZSkpIHtcbiAgICBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG5cbiAgICBmYWN0b3J5KF9yZXF1aXJlLCBfbW9kdWxlLmV4cG9ydHMsIF9tb2R1bGUpXG5cbiAgICB0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KGNsZWFuTmFtZSwgX21vZHVsZS5leHBvcnRzKVxuICB9IGVsc2UgaWYgKGlzV2VleE1vZHVsZShuYW1lKSkge1xuICAgIGNsZWFuTmFtZSA9IHJlbW92ZVdlZXhQcmVmaXgobmFtZSlcblxuICAgIGZhY3RvcnkoX3JlcXVpcmUsIF9tb2R1bGUuZXhwb3J0cywgX21vZHVsZSlcblxuICAgIFZtLnJlZ2lzdGVyTW9kdWxlcyh7XG4gICAgICBbY2xlYW5OYW1lXTogX21vZHVsZS5leHBvcnRzXG4gICAgfSlcbiAgfSBlbHNlIGlmIChpc05vcm1hbE1vZHVsZShuYW1lKSkge1xuICAgIGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG5cbiAgICBmYWN0b3J5KF9yZXF1aXJlLCBfbW9kdWxlLmV4cG9ydHMsIF9tb2R1bGUpXG5cbiAgICBjb21tb25Nb2R1bGVzW2NsZWFuTmFtZV0gPSBfbW9kdWxlLmV4cG9ydHNcbiAgfSBlbHNlIGlmIChpc05wbU1vZHVsZShuYW1lKSkge1xuICAgIGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG5cbiAgICBmYWN0b3J5KF9yZXF1aXJlLCBfbW9kdWxlLmV4cG9ydHMsIF9tb2R1bGUpXG5cbiAgICBsZXQgZXhwb3J0cyA9IF9tb2R1bGUuZXhwb3J0c1xuICAgIGlmIChleHBvcnRzLnRlbXBsYXRlIHx8XG4gICAgICAgIGV4cG9ydHMuc3R5bGUgfHxcbiAgICAgICAgZXhwb3J0cy5tZXRob2RzKSB7XG4gICAgICAvLyBkb3duZ3JhZGUgdG8gb2xkIGRlZmluZSBtZXRob2QgKGRlZmluZSgnY29tcG9uZW50TmFtZScsIGZhY3RvcnkpKVxuICAgICAgLy8gdGhlIGV4cG9ydHMgY29udGFpbiBvbmUga2V5IG9mIHRlbXBsYXRlLCBzdHlsZSBvciBtZXRob2RzXG4gICAgICAvLyBidXQgaXQgaGFzIHJpc2shISFcbiAgICAgIHRoaXMucmVnaXN0ZXJDb21wb25lbnQoY2xlYW5OYW1lLCBleHBvcnRzKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21tb25Nb2R1bGVzW2NsZWFuTmFtZV0gPSBfbW9kdWxlLmV4cG9ydHNcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvb3RzdHJhcChuYW1lLCBjb25maWcsIGRhdGEpIHtcbiAgXy5kZWJ1ZyhgYm9vdHN0cmFwIGZvciAke25hbWV9YClcblxuICBsZXQgY2xlYW5OYW1lXG5cbiAgaWYgKGlzV2VleENvbXBvbmVudChuYW1lKSkge1xuICAgIGNsZWFuTmFtZSA9IHJlbW92ZVdlZXhQcmVmaXgobmFtZSlcbiAgfSBlbHNlIGlmIChpc05wbU1vZHVsZShuYW1lKSkge1xuICAgIGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG4gICAgLy8gY2hlY2sgaWYgZGVmaW5lIGJ5IG9sZCAnZGVmaW5lJyBtZXRob2RcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXRoaXMuY3VzdG9tQ29tcG9uZW50TWFwW2NsZWFuTmFtZV0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoYEl0J3Mgbm90IGEgY29tcG9uZW50OiAke25hbWV9YClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgV3JvbmcgY29tcG9uZW50IG5hbWU6ICR7bmFtZX1gKVxuICB9XG5cbiAgY29uZmlnID0gXy5pc1BsYWluT2JqZWN0KGNvbmZpZykgPyBjb25maWcgOiB7fVxuXG4gIGlmICh0eXBlb2YgY29uZmlnLnRyYW5zZm9ybWVyVmVyc2lvbiA9PT0gJ3N0cmluZycgJiZcbiAgICB0eXBlb2YgZ2xvYmFsLm5lZWRUcmFuc2Zvcm1lclZlcnNpb24gPT09ICdzdHJpbmcnICYmXG4gICAgIXNlbXZlci5zYXRpc2ZpZXMoY29uZmlnLnRyYW5zZm9ybWVyVmVyc2lvbixcbiAgICAgIGdsb2JhbC5uZWVkVHJhbnNmb3JtZXJWZXJzaW9uKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYEpTIEJ1bmRsZSB2ZXJzaW9uOiAke2NvbmZpZy50cmFuc2Zvcm1lclZlcnNpb259IGAgK1xuICAgICAgYG5vdCBjb21wYXRpYmxlIHdpdGggJHtnbG9iYWwubmVlZFRyYW5zZm9ybWVyVmVyc2lvbn1gKVxuICB9XG5cbiAgbGV0IF9jaGVja0Rvd25ncmFkZSA9IGRvd25ncmFkZS5jaGVjayhjb25maWcuZG93bmdyYWRlKVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKF9jaGVja0Rvd25ncmFkZS5pc0Rvd25ncmFkZSkge1xuICAgIHRoaXMuY2FsbFRhc2tzKFt7XG4gICAgICBtb2R1bGU6ICdpbnN0YW5jZVdyYXAnLFxuICAgICAgbWV0aG9kOiAnZXJyb3InLFxuICAgICAgYXJnczogW1xuICAgICAgICBfY2hlY2tEb3duZ3JhZGUuZXJyb3JUeXBlLFxuICAgICAgICBfY2hlY2tEb3duZ3JhZGUuY29kZSxcbiAgICAgICAgX2NoZWNrRG93bmdyYWRlLmVycm9yTWVzc2FnZVxuICAgICAgXVxuICAgIH1dKVxuICAgIHJldHVybiBuZXcgRXJyb3IoYERvd25ncmFkZTogJHtjb25maWcuZG93bmdyYWRlfWApXG4gIH1cblxuICB0aGlzLnZtID0gbmV3IFZtKGNsZWFuTmFtZSwgbnVsbCwge19hcHA6IHRoaXN9LCBudWxsLCBkYXRhKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlcih0eXBlLCBvcHRpb25zKSB7XG4gIF8ud2FybignUmVnaXN0ZXIgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIGluc3RhbGwgbGFzdGVzdCB0cmFuc2Zvcm1lci4nKVxuICB0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KHR5cGUsIG9wdGlvbnMpXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcih0eXBlLCBkYXRhKSB7XG4gIF8ud2FybignUmVuZGVyIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSBpbnN0YWxsIGxhc3Rlc3QgdHJhbnNmb3JtZXIuJylcbiAgcmV0dXJuIHRoaXMuYm9vdHN0cmFwKHR5cGUsIHt9LCBkYXRhKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlKHR5cGUpIHtcbiAgXy53YXJuKCdSZXF1aXJlIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSBpbnN0YWxsIGxhc3Rlc3QgdHJhbnNmb3JtZXIuJylcbiAgcmV0dXJuIChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuYm9vdHN0cmFwKHR5cGUsIHt9LCBkYXRhKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL2xpYi9hcHAvYnVuZGxlLmpzXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gU2VtVmVyO1xuXG4vLyBUaGUgZGVidWcgZnVuY3Rpb24gaXMgZXhjbHVkZWQgZW50aXJlbHkgZnJvbSB0aGUgbWluaWZpZWQgdmVyc2lvbi5cbi8qIG5vbWluICovIHZhciBkZWJ1Zztcbi8qIG5vbWluICovIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudiAmJlxuICAgIC8qIG5vbWluICovIHByb2Nlc3MuZW52Lk5PREVfREVCVUcgJiZcbiAgICAvKiBub21pbiAqLyAvXFxic2VtdmVyXFxiL2kudGVzdChwcm9jZXNzLmVudi5OT0RFX0RFQlVHKSlcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHtcbiAgICAvKiBub21pbiAqLyB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgLyogbm9taW4gKi8gYXJncy51bnNoaWZ0KCdTRU1WRVInKTtcbiAgICAvKiBub21pbiAqLyBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICAvKiBub21pbiAqLyB9O1xuLyogbm9taW4gKi8gZWxzZVxuICAvKiBub21pbiAqLyBkZWJ1ZyA9IGZ1bmN0aW9uKCkge307XG5cbi8vIE5vdGU6IHRoaXMgaXMgdGhlIHNlbXZlci5vcmcgdmVyc2lvbiBvZiB0aGUgc3BlYyB0aGF0IGl0IGltcGxlbWVudHNcbi8vIE5vdCBuZWNlc3NhcmlseSB0aGUgcGFja2FnZSB2ZXJzaW9uIG9mIHRoaXMgY29kZS5cbmV4cG9ydHMuU0VNVkVSX1NQRUNfVkVSU0lPTiA9ICcyLjAuMCc7XG5cbnZhciBNQVhfTEVOR1RIID0gMjU2O1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fCA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vLyBUaGUgYWN0dWFsIHJlZ2V4cHMgZ28gb24gZXhwb3J0cy5yZVxudmFyIHJlID0gZXhwb3J0cy5yZSA9IFtdO1xudmFyIHNyYyA9IGV4cG9ydHMuc3JjID0gW107XG52YXIgUiA9IDA7XG5cbi8vIFRoZSBmb2xsb3dpbmcgUmVndWxhciBFeHByZXNzaW9ucyBjYW4gYmUgdXNlZCBmb3IgdG9rZW5pemluZyxcbi8vIHZhbGlkYXRpbmcsIGFuZCBwYXJzaW5nIFNlbVZlciB2ZXJzaW9uIHN0cmluZ3MuXG5cbi8vICMjIE51bWVyaWMgSWRlbnRpZmllclxuLy8gQSBzaW5nbGUgYDBgLCBvciBhIG5vbi16ZXJvIGRpZ2l0IGZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBkaWdpdHMuXG5cbnZhciBOVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUl0gPSAnMHxbMS05XVxcXFxkKic7XG52YXIgTlVNRVJJQ0lERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSA9ICdbMC05XSsnO1xuXG5cbi8vICMjIE5vbi1udW1lcmljIElkZW50aWZpZXJcbi8vIFplcm8gb3IgbW9yZSBkaWdpdHMsIGZvbGxvd2VkIGJ5IGEgbGV0dGVyIG9yIGh5cGhlbiwgYW5kIHRoZW4gemVybyBvclxuLy8gbW9yZSBsZXR0ZXJzLCBkaWdpdHMsIG9yIGh5cGhlbnMuXG5cbnZhciBOT05OVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gPSAnXFxcXGQqW2EtekEtWi1dW2EtekEtWjAtOS1dKic7XG5cblxuLy8gIyMgTWFpbiBWZXJzaW9uXG4vLyBUaHJlZSBkb3Qtc2VwYXJhdGVkIG51bWVyaWMgaWRlbnRpZmllcnMuXG5cbnZhciBNQUlOVkVSU0lPTiA9IFIrKztcbnNyY1tNQUlOVkVSU0lPTl0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIE1BSU5WRVJTSU9OTE9PU0UgPSBSKys7XG5zcmNbTUFJTlZFUlNJT05MT09TRV0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKSc7XG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb24gSWRlbnRpZmllclxuLy8gQSBudW1lcmljIGlkZW50aWZpZXIsIG9yIGEgbm9uLW51bWVyaWMgaWRlbnRpZmllci5cblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSA9ICcoPzonICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfCcgKyBzcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb25cbi8vIEh5cGhlbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgZG90LXNlcGFyYXRlZCBwcmUtcmVsZWFzZSB2ZXJzaW9uXG4vLyBpZGVudGlmaWVycy5cblxudmFyIFBSRVJFTEVBU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRV0gPSAnKD86LSgnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArICcpKikpJztcblxudmFyIFBSRVJFTEVBU0VMT09TRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFTE9PU0VdID0gJyg/Oi0/KCcgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICsgJykqKSknO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YSBJZGVudGlmaWVyXG4vLyBBbnkgY29tYmluYXRpb24gb2YgZGlnaXRzLCBsZXR0ZXJzLCBvciBoeXBoZW5zLlxuXG52YXIgQlVJTERJREVOVElGSUVSID0gUisrO1xuc3JjW0JVSUxESURFTlRJRklFUl0gPSAnWzAtOUEtWmEtei1dKyc7XG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhXG4vLyBQbHVzIHNpZ24sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIHBlcmlvZC1zZXBhcmF0ZWQgYnVpbGQgbWV0YWRhdGFcbi8vIGlkZW50aWZpZXJzLlxuXG52YXIgQlVJTEQgPSBSKys7XG5zcmNbQlVJTERdID0gJyg/OlxcXFwrKCcgKyBzcmNbQlVJTERJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tCVUlMRElERU5USUZJRVJdICsgJykqKSknO1xuXG5cbi8vICMjIEZ1bGwgVmVyc2lvbiBTdHJpbmdcbi8vIEEgbWFpbiB2ZXJzaW9uLCBmb2xsb3dlZCBvcHRpb25hbGx5IGJ5IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiBhbmRcbi8vIGJ1aWxkIG1ldGFkYXRhLlxuXG4vLyBOb3RlIHRoYXQgdGhlIG9ubHkgbWFqb3IsIG1pbm9yLCBwYXRjaCwgYW5kIHByZS1yZWxlYXNlIHNlY3Rpb25zIG9mXG4vLyB0aGUgdmVyc2lvbiBzdHJpbmcgYXJlIGNhcHR1cmluZyBncm91cHMuICBUaGUgYnVpbGQgbWV0YWRhdGEgaXMgbm90IGFcbi8vIGNhcHR1cmluZyBncm91cCwgYmVjYXVzZSBpdCBzaG91bGQgbm90IGV2ZXIgYmUgdXNlZCBpbiB2ZXJzaW9uXG4vLyBjb21wYXJpc29uLlxuXG52YXIgRlVMTCA9IFIrKztcbnZhciBGVUxMUExBSU4gPSAndj8nICsgc3JjW01BSU5WRVJTSU9OXSArXG4gICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG5zcmNbRlVMTF0gPSAnXicgKyBGVUxMUExBSU4gKyAnJCc7XG5cbi8vIGxpa2UgZnVsbCwgYnV0IGFsbG93cyB2MS4yLjMgYW5kID0xLjIuMywgd2hpY2ggcGVvcGxlIGRvIHNvbWV0aW1lcy5cbi8vIGFsc28sIDEuMC4wYWxwaGExIChwcmVyZWxlYXNlIHdpdGhvdXQgdGhlIGh5cGhlbikgd2hpY2ggaXMgcHJldHR5XG4vLyBjb21tb24gaW4gdGhlIG5wbSByZWdpc3RyeS5cbnZhciBMT09TRVBMQUlOID0gJ1t2PVxcXFxzXSonICsgc3JjW01BSU5WRVJTSU9OTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnPycgK1xuICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG52YXIgTE9PU0UgPSBSKys7XG5zcmNbTE9PU0VdID0gJ14nICsgTE9PU0VQTEFJTiArICckJztcblxudmFyIEdUTFQgPSBSKys7XG5zcmNbR1RMVF0gPSAnKCg/Ojx8Pik/PT8pJztcblxuLy8gU29tZXRoaW5nIGxpa2UgXCIyLipcIiBvciBcIjEuMi54XCIuXG4vLyBOb3RlIHRoYXQgXCJ4LnhcIiBpcyBhIHZhbGlkIHhSYW5nZSBpZGVudGlmZXIsIG1lYW5pbmcgXCJhbnkgdmVyc2lvblwiXG4vLyBPbmx5IHRoZSBmaXJzdCBpdGVtIGlzIHN0cmljdGx5IHJlcXVpcmVkLlxudmFyIFhSQU5HRUlERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdID0gc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJ3x4fFh8XFxcXConO1xudmFyIFhSQU5HRUlERU5USUZJRVIgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUl0gPSBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJ3x4fFh8XFxcXConO1xuXG52YXIgWFJBTkdFUExBSU4gPSBSKys7XG5zcmNbWFJBTkdFUExBSU5dID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFXSArICcpPycgK1xuICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRVBMQUlOTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFUExBSU5MT09TRV0gPSAnW3Y9XFxcXHNdKignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzonICsgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyk/KT8nO1xuXG52YXIgWFJBTkdFID0gUisrO1xuc3JjW1hSQU5HRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgWFJBTkdFTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFTE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIFRpbGRlIHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJyZWFzb25hYmx5IGF0IG9yIGdyZWF0ZXIgdGhhblwiXG52YXIgTE9ORVRJTERFID0gUisrO1xuc3JjW0xPTkVUSUxERV0gPSAnKD86fj4/KSc7XG5cbnZhciBUSUxERVRSSU0gPSBSKys7XG5zcmNbVElMREVUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbTE9ORVRJTERFXSArICdcXFxccysnO1xucmVbVElMREVUUklNXSA9IG5ldyBSZWdFeHAoc3JjW1RJTERFVFJJTV0sICdnJyk7XG52YXIgdGlsZGVUcmltUmVwbGFjZSA9ICckMX4nO1xuXG52YXIgVElMREUgPSBSKys7XG5zcmNbVElMREVdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFRJTERFTE9PU0UgPSBSKys7XG5zcmNbVElMREVMT09TRV0gPSAnXicgKyBzcmNbTE9ORVRJTERFXSArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gQ2FyZXQgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcImF0IGxlYXN0IGFuZCBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoXCJcbnZhciBMT05FQ0FSRVQgPSBSKys7XG5zcmNbTE9ORUNBUkVUXSA9ICcoPzpcXFxcXiknO1xuXG52YXIgQ0FSRVRUUklNID0gUisrO1xuc3JjW0NBUkVUVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVDQVJFVF0gKyAnXFxcXHMrJztcbnJlW0NBUkVUVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDQVJFVFRSSU1dLCAnZycpO1xudmFyIGNhcmV0VHJpbVJlcGxhY2UgPSAnJDFeJztcblxudmFyIENBUkVUID0gUisrO1xuc3JjW0NBUkVUXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBDQVJFVExPT1NFID0gUisrO1xuc3JjW0NBUkVUTE9PU0VdID0gJ14nICsgc3JjW0xPTkVDQVJFVF0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIEEgc2ltcGxlIGd0L2x0L2VxIHRoaW5nLCBvciBqdXN0IFwiXCIgdG8gaW5kaWNhdGUgXCJhbnkgdmVyc2lvblwiXG52YXIgQ09NUEFSQVRPUkxPT1NFID0gUisrO1xuc3JjW0NPTVBBUkFUT1JMT09TRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJykkfF4kJztcbnZhciBDT01QQVJBVE9SID0gUisrO1xuc3JjW0NPTVBBUkFUT1JdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgRlVMTFBMQUlOICsgJykkfF4kJztcblxuXG4vLyBBbiBleHByZXNzaW9uIHRvIHN0cmlwIGFueSB3aGl0ZXNwYWNlIGJldHdlZW4gdGhlIGd0bHQgYW5kIHRoZSB0aGluZ1xuLy8gaXQgbW9kaWZpZXMsIHNvIHRoYXQgYD4gMS4yLjNgID09PiBgPjEuMi4zYFxudmFyIENPTVBBUkFUT1JUUklNID0gUisrO1xuc3JjW0NPTVBBUkFUT1JUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbR1RMVF0gK1xuICAgICAgICAgICAgICAgICAgICAgICdcXFxccyooJyArIExPT1NFUExBSU4gKyAnfCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknO1xuXG4vLyB0aGlzIG9uZSBoYXMgdG8gdXNlIHRoZSAvZyBmbGFnXG5yZVtDT01QQVJBVE9SVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDT01QQVJBVE9SVFJJTV0sICdnJyk7XG52YXIgY29tcGFyYXRvclRyaW1SZXBsYWNlID0gJyQxJDIkMyc7XG5cblxuLy8gU29tZXRoaW5nIGxpa2UgYDEuMi4zIC0gMS4yLjRgXG4vLyBOb3RlIHRoYXQgdGhlc2UgYWxsIHVzZSB0aGUgbG9vc2UgZm9ybSwgYmVjYXVzZSB0aGV5J2xsIGJlXG4vLyBjaGVja2VkIGFnYWluc3QgZWl0aGVyIHRoZSBzdHJpY3Qgb3IgbG9vc2UgY29tcGFyYXRvciBmb3JtXG4vLyBsYXRlci5cbnZhciBIWVBIRU5SQU5HRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRV0gPSAnXlxcXFxzKignICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbnZhciBIWVBIRU5SQU5HRUxPT1NFID0gUisrO1xuc3JjW0hZUEhFTlJBTkdFTE9PU0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMrLVxcXFxzKycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxccyokJztcblxuLy8gU3RhciByYW5nZXMgYmFzaWNhbGx5IGp1c3QgYWxsb3cgYW55dGhpbmcgYXQgYWxsLlxudmFyIFNUQVIgPSBSKys7XG5zcmNbU1RBUl0gPSAnKDx8Pik/PT9cXFxccypcXFxcKic7XG5cbi8vIENvbXBpbGUgdG8gYWN0dWFsIHJlZ2V4cCBvYmplY3RzLlxuLy8gQWxsIGFyZSBmbGFnLWZyZWUsIHVubGVzcyB0aGV5IHdlcmUgY3JlYXRlZCBhYm92ZSB3aXRoIGEgZmxhZy5cbmZvciAodmFyIGkgPSAwOyBpIDwgUjsgaSsrKSB7XG4gIGRlYnVnKGksIHNyY1tpXSk7XG4gIGlmICghcmVbaV0pXG4gICAgcmVbaV0gPSBuZXcgUmVnRXhwKHNyY1tpXSk7XG59XG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmZ1bmN0aW9uIHBhcnNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKVxuICAgIHJldHVybiB2ZXJzaW9uO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSClcbiAgICByZXR1cm4gbnVsbDtcblxuICB2YXIgciA9IGxvb3NlID8gcmVbTE9PU0VdIDogcmVbRlVMTF07XG4gIGlmICghci50ZXN0KHZlcnNpb24pKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMudmFsaWQgPSB2YWxpZDtcbmZ1bmN0aW9uIHZhbGlkKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciB2ID0gcGFyc2UodmVyc2lvbiwgbG9vc2UpO1xuICByZXR1cm4gdiA/IHYudmVyc2lvbiA6IG51bGw7XG59XG5cblxuZXhwb3J0cy5jbGVhbiA9IGNsZWFuO1xuZnVuY3Rpb24gY2xlYW4odmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHMgPSBwYXJzZSh2ZXJzaW9uLnRyaW0oKS5yZXBsYWNlKC9eWz12XSsvLCAnJyksIGxvb3NlKTtcbiAgcmV0dXJuIHMgPyBzLnZlcnNpb24gOiBudWxsO1xufVxuXG5leHBvcnRzLlNlbVZlciA9IFNlbVZlcjtcblxuZnVuY3Rpb24gU2VtVmVyKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgaWYgKHZlcnNpb24ubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgZWxzZVxuICAgICAgdmVyc2lvbiA9IHZlcnNpb24udmVyc2lvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFZlcnNpb246ICcgKyB2ZXJzaW9uKTtcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmVyc2lvbiBpcyBsb25nZXIgdGhhbiAnICsgTUFYX0xFTkdUSCArICcgY2hhcmFjdGVycycpXG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuXG4gIGRlYnVnKCdTZW1WZXInLCB2ZXJzaW9uLCBsb29zZSk7XG4gIHRoaXMubG9vc2UgPSBsb29zZTtcbiAgdmFyIG0gPSB2ZXJzaW9uLnRyaW0oKS5tYXRjaChsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdKTtcblxuICBpZiAoIW0pXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG5cbiAgdGhpcy5yYXcgPSB2ZXJzaW9uO1xuXG4gIC8vIHRoZXNlIGFyZSBhY3R1YWxseSBudW1iZXJzXG4gIHRoaXMubWFqb3IgPSArbVsxXTtcbiAgdGhpcy5taW5vciA9ICttWzJdO1xuICB0aGlzLnBhdGNoID0gK21bM107XG5cbiAgaWYgKHRoaXMubWFqb3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWFqb3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWFqb3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMubWlub3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWlub3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWlub3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMucGF0Y2ggPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMucGF0Y2ggPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgcGF0Y2ggdmVyc2lvbicpXG5cbiAgLy8gbnVtYmVyaWZ5IGFueSBwcmVyZWxlYXNlIG51bWVyaWMgaWRzXG4gIGlmICghbVs0XSlcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgZWxzZVxuICAgIHRoaXMucHJlcmVsZWFzZSA9IG1bNF0uc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24oaWQpIHtcbiAgICAgIGlmICgvXlswLTldKyQvLnRlc3QoaWQpKSB7XG4gICAgICAgIHZhciBudW0gPSAraWRcbiAgICAgICAgaWYgKG51bSA+PSAwICYmIG51bSA8IE1BWF9TQUZFX0lOVEVHRVIpXG4gICAgICAgICAgcmV0dXJuIG51bVxuICAgICAgfVxuICAgICAgcmV0dXJuIGlkO1xuICAgIH0pO1xuXG4gIHRoaXMuYnVpbGQgPSBtWzVdID8gbVs1XS5zcGxpdCgnLicpIDogW107XG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblNlbVZlci5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudmVyc2lvbiA9IHRoaXMubWFqb3IgKyAnLicgKyB0aGlzLm1pbm9yICsgJy4nICsgdGhpcy5wYXRjaDtcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgdGhpcy52ZXJzaW9uICs9ICctJyArIHRoaXMucHJlcmVsZWFzZS5qb2luKCcuJyk7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBkZWJ1ZygnU2VtVmVyLmNvbXBhcmUnLCB0aGlzLnZlcnNpb24sIHRoaXMubG9vc2UsIG90aGVyKTtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIHRoaXMuY29tcGFyZU1haW4ob3RoZXIpIHx8IHRoaXMuY29tcGFyZVByZShvdGhlcik7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVNYWluID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1ham9yLCBvdGhlci5tYWpvcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1pbm9yLCBvdGhlci5taW5vcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLnBhdGNoLCBvdGhlci5wYXRjaCk7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVQcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICAvLyBOT1QgaGF2aW5nIGEgcHJlcmVsZWFzZSBpcyA+IGhhdmluZyBvbmVcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAtMTtcbiAgZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIDE7XG4gIGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gMDtcblxuICB2YXIgaSA9IDA7XG4gIGRvIHtcbiAgICB2YXIgYSA9IHRoaXMucHJlcmVsZWFzZVtpXTtcbiAgICB2YXIgYiA9IG90aGVyLnByZXJlbGVhc2VbaV07XG4gICAgZGVidWcoJ3ByZXJlbGVhc2UgY29tcGFyZScsIGksIGEsIGIpO1xuICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDA7XG4gICAgZWxzZSBpZiAoYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIC0xO1xuICAgIGVsc2UgaWYgKGEgPT09IGIpXG4gICAgICBjb250aW51ZTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpO1xuICB9IHdoaWxlICgrK2kpO1xufTtcblxuLy8gcHJlbWlub3Igd2lsbCBidW1wIHRoZSB2ZXJzaW9uIHVwIHRvIHRoZSBuZXh0IG1pbm9yIHJlbGVhc2UsIGFuZCBpbW1lZGlhdGVseVxuLy8gZG93biB0byBwcmUtcmVsZWFzZS4gcHJlbWFqb3IgYW5kIHByZXBhdGNoIHdvcmsgdGhlIHNhbWUgd2F5LlxuU2VtVmVyLnByb3RvdHlwZS5pbmMgPSBmdW5jdGlvbihyZWxlYXNlLCBpZGVudGlmaWVyKSB7XG4gIHN3aXRjaCAocmVsZWFzZSkge1xuICAgIGNhc2UgJ3ByZW1ham9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yID0gMDtcbiAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZW1pbm9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIGFscmVhZHkgYSBwcmVyZWxlYXNlLCBpdCB3aWxsIGJ1bXAgdG8gdGhlIG5leHQgdmVyc2lvblxuICAgICAgLy8gZHJvcCBhbnkgcHJlcmVsZWFzZXMgdGhhdCBtaWdodCBhbHJlYWR5IGV4aXN0LCBzaW5jZSB0aGV5IGFyZSBub3RcbiAgICAgIC8vIHJlbGV2YW50IGF0IHRoaXMgcG9pbnQuXG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgLy8gSWYgdGhlIGlucHV0IGlzIGEgbm9uLXByZXJlbGVhc2UgdmVyc2lvbiwgdGhpcyBhY3RzIHRoZSBzYW1lIGFzXG4gICAgLy8gcHJlcGF0Y2guXG4gICAgY2FzZSAncHJlcmVsZWFzZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcik7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ21ham9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWFqb3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtYWpvciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtYWpvci5cbiAgICAgIC8vIDEuMC4wLTUgYnVtcHMgdG8gMS4wLjBcbiAgICAgIC8vIDEuMS4wIGJ1bXBzIHRvIDIuMC4wXG4gICAgICBpZiAodGhpcy5taW5vciAhPT0gMCB8fCB0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMubWlub3IgPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21pbm9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWlub3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtaW5vciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtaW5vci5cbiAgICAgIC8vIDEuMi4wLTUgYnVtcHMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4xIGJ1bXBzIHRvIDEuMy4wXG4gICAgICBpZiAodGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGF0Y2gnOlxuICAgICAgLy8gSWYgdGhpcyBpcyBub3QgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uLCBpdCB3aWxsIGluY3JlbWVudCB0aGUgcGF0Y2guXG4gICAgICAvLyBJZiBpdCBpcyBhIHByZS1yZWxlYXNlIGl0IHdpbGwgYnVtcCB1cCB0byB0aGUgc2FtZSBwYXRjaCB2ZXJzaW9uLlxuICAgICAgLy8gMS4yLjAtNSBwYXRjaGVzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMCBwYXRjaGVzIHRvIDEuMi4xXG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5wYXRjaCsrO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICAvLyBUaGlzIHByb2JhYmx5IHNob3VsZG4ndCBiZSB1c2VkIHB1YmxpY2x5LlxuICAgIC8vIDEuMC4wIFwicHJlXCIgd291bGQgYmVjb21lIDEuMC4wLTAgd2hpY2ggaXMgdGhlIHdyb25nIGRpcmVjdGlvbi5cbiAgICBjYXNlICdwcmUnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFswXTtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgaSA9IHRoaXMucHJlcmVsZWFzZS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVyZWxlYXNlW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlW2ldKys7XG4gICAgICAgICAgICBpID0gLTI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpID09PSAtMSkgLy8gZGlkbid0IGluY3JlbWVudCBhbnl0aGluZ1xuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZS5wdXNoKDApO1xuICAgICAgfVxuICAgICAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICAgICAgLy8gMS4yLjAtYmV0YS4xIGJ1bXBzIHRvIDEuMi4wLWJldGEuMixcbiAgICAgICAgLy8gMS4yLjAtYmV0YS5mb29ibHogb3IgMS4yLjAtYmV0YSBidW1wcyB0byAxLjIuMC1iZXRhLjBcbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZVswXSA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgIGlmIChpc05hTih0aGlzLnByZXJlbGVhc2VbMV0pKVxuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF07XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW5jcmVtZW50IGFyZ3VtZW50OiAnICsgcmVsZWFzZSk7XG4gIH1cbiAgdGhpcy5mb3JtYXQoKTtcbiAgdGhpcy5yYXcgPSB0aGlzLnZlcnNpb247XG4gIHJldHVybiB0aGlzO1xufTtcblxuZXhwb3J0cy5pbmMgPSBpbmM7XG5mdW5jdGlvbiBpbmModmVyc2lvbiwgcmVsZWFzZSwgbG9vc2UsIGlkZW50aWZpZXIpIHtcbiAgaWYgKHR5cGVvZihsb29zZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgaWRlbnRpZmllciA9IGxvb3NlO1xuICAgIGxvb3NlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSkuaW5jKHJlbGVhc2UsIGlkZW50aWZpZXIpLnZlcnNpb247XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy5kaWZmID0gZGlmZjtcbmZ1bmN0aW9uIGRpZmYodmVyc2lvbjEsIHZlcnNpb24yKSB7XG4gIGlmIChlcSh2ZXJzaW9uMSwgdmVyc2lvbjIpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHYxID0gcGFyc2UodmVyc2lvbjEpO1xuICAgIHZhciB2MiA9IHBhcnNlKHZlcnNpb24yKTtcbiAgICBpZiAodjEucHJlcmVsZWFzZS5sZW5ndGggfHwgdjIucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuICdwcmUnK2tleTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAncHJlcmVsZWFzZSc7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLmNvbXBhcmVJZGVudGlmaWVycyA9IGNvbXBhcmVJZGVudGlmaWVycztcblxudmFyIG51bWVyaWMgPSAvXlswLTldKyQvO1xuZnVuY3Rpb24gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpIHtcbiAgdmFyIGFudW0gPSBudW1lcmljLnRlc3QoYSk7XG4gIHZhciBibnVtID0gbnVtZXJpYy50ZXN0KGIpO1xuXG4gIGlmIChhbnVtICYmIGJudW0pIHtcbiAgICBhID0gK2E7XG4gICAgYiA9ICtiO1xuICB9XG5cbiAgcmV0dXJuIChhbnVtICYmICFibnVtKSA/IC0xIDpcbiAgICAgICAgIChibnVtICYmICFhbnVtKSA/IDEgOlxuICAgICAgICAgYSA8IGIgPyAtMSA6XG4gICAgICAgICBhID4gYiA/IDEgOlxuICAgICAgICAgMDtcbn1cblxuZXhwb3J0cy5yY29tcGFyZUlkZW50aWZpZXJzID0gcmNvbXBhcmVJZGVudGlmaWVycztcbmZ1bmN0aW9uIHJjb21wYXJlSWRlbnRpZmllcnMoYSwgYikge1xuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGIsIGEpO1xufVxuXG5leHBvcnRzLm1ham9yID0gbWFqb3I7XG5mdW5jdGlvbiBtYWpvcihhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWFqb3I7XG59XG5cbmV4cG9ydHMubWlub3IgPSBtaW5vcjtcbmZ1bmN0aW9uIG1pbm9yKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5taW5vcjtcbn1cblxuZXhwb3J0cy5wYXRjaCA9IHBhdGNoO1xuZnVuY3Rpb24gcGF0Y2goYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLnBhdGNoO1xufVxuXG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlO1xuZnVuY3Rpb24gY29tcGFyZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkuY29tcGFyZShiKTtcbn1cblxuZXhwb3J0cy5jb21wYXJlTG9vc2UgPSBjb21wYXJlTG9vc2U7XG5mdW5jdGlvbiBjb21wYXJlTG9vc2UoYSwgYikge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCB0cnVlKTtcbn1cblxuZXhwb3J0cy5yY29tcGFyZSA9IHJjb21wYXJlO1xuZnVuY3Rpb24gcmNvbXBhcmUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYiwgYSwgbG9vc2UpO1xufVxuXG5leHBvcnRzLnNvcnQgPSBzb3J0O1xuZnVuY3Rpb24gc29ydChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5jb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMucnNvcnQgPSByc29ydDtcbmZ1bmN0aW9uIHJzb3J0KGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLnJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMuZ3QgPSBndDtcbmZ1bmN0aW9uIGd0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+IDA7XG59XG5cbmV4cG9ydHMubHQgPSBsdDtcbmZ1bmN0aW9uIGx0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8IDA7XG59XG5cbmV4cG9ydHMuZXEgPSBlcTtcbmZ1bmN0aW9uIGVxKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA9PT0gMDtcbn1cblxuZXhwb3J0cy5uZXEgPSBuZXE7XG5mdW5jdGlvbiBuZXEoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpICE9PSAwO1xufVxuXG5leHBvcnRzLmd0ZSA9IGd0ZTtcbmZ1bmN0aW9uIGd0ZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPj0gMDtcbn1cblxuZXhwb3J0cy5sdGUgPSBsdGU7XG5mdW5jdGlvbiBsdGUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDw9IDA7XG59XG5cbmV4cG9ydHMuY21wID0gY21wO1xuZnVuY3Rpb24gY21wKGEsIG9wLCBiLCBsb29zZSkge1xuICB2YXIgcmV0O1xuICBzd2l0Y2ggKG9wKSB7XG4gICAgY2FzZSAnPT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIGEgPSBhLnZlcnNpb247XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSBiID0gYi52ZXJzaW9uO1xuICAgICAgcmV0ID0gYSA9PT0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyE9PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSBhID0gYS52ZXJzaW9uO1xuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JykgYiA9IGIudmVyc2lvbjtcbiAgICAgIHJldCA9IGEgIT09IGI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcnOiBjYXNlICc9JzogY2FzZSAnPT0nOiByZXQgPSBlcShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJyE9JzogcmV0ID0gbmVxKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPic6IHJldCA9IGd0KGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPj0nOiByZXQgPSBndGUoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8JzogcmV0ID0gbHQoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8PSc6IHJldCA9IGx0ZShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgb3BlcmF0b3I6ICcgKyBvcCk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0cy5Db21wYXJhdG9yID0gQ29tcGFyYXRvcjtcbmZ1bmN0aW9uIENvbXBhcmF0b3IoY29tcCwgbG9vc2UpIHtcbiAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgaWYgKGNvbXAubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIGNvbXA7XG4gICAgZWxzZVxuICAgICAgY29tcCA9IGNvbXAudmFsdWU7XG4gIH1cblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29tcGFyYXRvcikpXG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcblxuICBkZWJ1ZygnY29tcGFyYXRvcicsIGNvbXAsIGxvb3NlKTtcbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuICB0aGlzLnBhcnNlKGNvbXApO1xuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKVxuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgZWxzZVxuICAgIHRoaXMudmFsdWUgPSB0aGlzLm9wZXJhdG9yICsgdGhpcy5zZW12ZXIudmVyc2lvbjtcblxuICBkZWJ1ZygnY29tcCcsIHRoaXMpO1xufVxuXG52YXIgQU5ZID0ge307XG5Db21wYXJhdG9yLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKGNvbXApIHtcbiAgdmFyIHIgPSB0aGlzLmxvb3NlID8gcmVbQ09NUEFSQVRPUkxPT1NFXSA6IHJlW0NPTVBBUkFUT1JdO1xuICB2YXIgbSA9IGNvbXAubWF0Y2gocik7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY29tcGFyYXRvcjogJyArIGNvbXApO1xuXG4gIHRoaXMub3BlcmF0b3IgPSBtWzFdO1xuICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJz0nKVxuICAgIHRoaXMub3BlcmF0b3IgPSAnJztcblxuICAvLyBpZiBpdCBsaXRlcmFsbHkgaXMganVzdCAnPicgb3IgJycgdGhlbiBhbGxvdyBhbnl0aGluZy5cbiAgaWYgKCFtWzJdKVxuICAgIHRoaXMuc2VtdmVyID0gQU5ZO1xuICBlbHNlXG4gICAgdGhpcy5zZW12ZXIgPSBuZXcgU2VtVmVyKG1bMl0sIHRoaXMubG9vc2UpO1xufTtcblxuQ29tcGFyYXRvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24odmVyc2lvbikge1xuICBkZWJ1ZygnQ29tcGFyYXRvci50ZXN0JywgdmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpXG4gICAgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY21wKHZlcnNpb24sIHRoaXMub3BlcmF0b3IsIHRoaXMuc2VtdmVyLCB0aGlzLmxvb3NlKTtcbn07XG5cblxuZXhwb3J0cy5SYW5nZSA9IFJhbmdlO1xuZnVuY3Rpb24gUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIGlmICgocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkgJiYgcmFuZ2UubG9vc2UgPT09IGxvb3NlKVxuICAgIHJldHVybiByYW5nZTtcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmFuZ2UpKVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB0aGlzLmxvb3NlID0gbG9vc2U7XG5cbiAgLy8gRmlyc3QsIHNwbGl0IGJhc2VkIG9uIGJvb2xlYW4gb3IgfHxcbiAgdGhpcy5yYXcgPSByYW5nZTtcbiAgdGhpcy5zZXQgPSByYW5nZS5zcGxpdCgvXFxzKlxcfFxcfFxccyovKS5tYXAoZnVuY3Rpb24ocmFuZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVJhbmdlKHJhbmdlLnRyaW0oKSk7XG4gIH0sIHRoaXMpLmZpbHRlcihmdW5jdGlvbihjKSB7XG4gICAgLy8gdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgcmVsZXZhbnQgZm9yIHdoYXRldmVyIHJlYXNvblxuICAgIHJldHVybiBjLmxlbmd0aDtcbiAgfSk7XG5cbiAgaWYgKCF0aGlzLnNldC5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFNlbVZlciBSYW5nZTogJyArIHJhbmdlKTtcbiAgfVxuXG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblJhbmdlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yYW5nZSA9IHRoaXMuc2V0Lm1hcChmdW5jdGlvbihjb21wcykge1xuICAgIHJldHVybiBjb21wcy5qb2luKCcgJykudHJpbSgpO1xuICB9KS5qb2luKCd8fCcpLnRyaW0oKTtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUucGFyc2VSYW5nZSA9IGZ1bmN0aW9uKHJhbmdlKSB7XG4gIHZhciBsb29zZSA9IHRoaXMubG9vc2U7XG4gIHJhbmdlID0gcmFuZ2UudHJpbSgpO1xuICBkZWJ1ZygncmFuZ2UnLCByYW5nZSwgbG9vc2UpO1xuICAvLyBgMS4yLjMgLSAxLjIuNGAgPT4gYD49MS4yLjMgPD0xLjIuNGBcbiAgdmFyIGhyID0gbG9vc2UgPyByZVtIWVBIRU5SQU5HRUxPT1NFXSA6IHJlW0hZUEhFTlJBTkdFXTtcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKGhyLCBoeXBoZW5SZXBsYWNlKTtcbiAgZGVidWcoJ2h5cGhlbiByZXBsYWNlJywgcmFuZ2UpO1xuICAvLyBgPiAxLjIuMyA8IDEuMi41YCA9PiBgPjEuMi4zIDwxLjIuNWBcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NPTVBBUkFUT1JUUklNXSwgY29tcGFyYXRvclRyaW1SZXBsYWNlKTtcbiAgZGVidWcoJ2NvbXBhcmF0b3IgdHJpbScsIHJhbmdlLCByZVtDT01QQVJBVE9SVFJJTV0pO1xuXG4gIC8vIGB+IDEuMi4zYCA9PiBgfjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbVElMREVUUklNXSwgdGlsZGVUcmltUmVwbGFjZSk7XG5cbiAgLy8gYF4gMS4yLjNgID0+IGBeMS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtDQVJFVFRSSU1dLCBjYXJldFRyaW1SZXBsYWNlKTtcblxuICAvLyBub3JtYWxpemUgc3BhY2VzXG4gIHJhbmdlID0gcmFuZ2Uuc3BsaXQoL1xccysvKS5qb2luKCcgJyk7XG5cbiAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgdHJpbW1lZCBhbmRcbiAgLy8gcmVhZHkgdG8gYmUgc3BsaXQgaW50byBjb21wYXJhdG9ycy5cblxuICB2YXIgY29tcFJlID0gbG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl07XG4gIHZhciBzZXQgPSByYW5nZS5zcGxpdCgnICcpLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKS5zcGxpdCgvXFxzKy8pO1xuICBpZiAodGhpcy5sb29zZSkge1xuICAgIC8vIGluIGxvb3NlIG1vZGUsIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHZhbGlkIGNvbXBhcmF0b3JzXG4gICAgc2V0ID0gc2V0LmZpbHRlcihmdW5jdGlvbihjb21wKSB7XG4gICAgICByZXR1cm4gISFjb21wLm1hdGNoKGNvbXBSZSk7XG4gICAgfSk7XG4gIH1cbiAgc2V0ID0gc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNldDtcbn07XG5cbi8vIE1vc3RseSBqdXN0IGZvciB0ZXN0aW5nIGFuZCBsZWdhY3kgQVBJIHJlYXNvbnNcbmV4cG9ydHMudG9Db21wYXJhdG9ycyA9IHRvQ29tcGFyYXRvcnM7XG5mdW5jdGlvbiB0b0NvbXBhcmF0b3JzKHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSkuc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIGNvbXAubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgIHJldHVybiBjLnZhbHVlO1xuICAgIH0pLmpvaW4oJyAnKS50cmltKCkuc3BsaXQoJyAnKTtcbiAgfSk7XG59XG5cbi8vIGNvbXByaXNlZCBvZiB4cmFuZ2VzLCB0aWxkZXMsIHN0YXJzLCBhbmQgZ3RsdCdzIGF0IHRoaXMgcG9pbnQuXG4vLyBhbHJlYWR5IHJlcGxhY2VkIHRoZSBoeXBoZW4gcmFuZ2VzXG4vLyB0dXJuIGludG8gYSBzZXQgb2YgSlVTVCBjb21wYXJhdG9ycy5cbmZ1bmN0aW9uIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSkge1xuICBkZWJ1ZygnY29tcCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZUNhcmV0cyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVRpbGRlcyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCd0aWxkZXMnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VYUmFuZ2VzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3hyYW5nZScsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVN0YXJzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3N0YXJzJywgY29tcCk7XG4gIHJldHVybiBjb21wO1xufVxuXG5mdW5jdGlvbiBpc1goaWQpIHtcbiAgcmV0dXJuICFpZCB8fCBpZC50b0xvd2VyQ2FzZSgpID09PSAneCcgfHwgaWQgPT09ICcqJztcbn1cblxuLy8gfiwgfj4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyB+MiwgfjIueCwgfjIueC54LCB+PjIsIH4+Mi54IH4+Mi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyB+Mi4wLCB+Mi4wLngsIH4+Mi4wLCB+PjIuMC54IC0tPiA+PTIuMC4wIDwyLjEuMFxuLy8gfjEuMiwgfjEuMi54LCB+PjEuMiwgfj4xLjIueCAtLT4gPj0xLjIuMCA8MS4zLjBcbi8vIH4xLjIuMywgfj4xLjIuMyAtLT4gPj0xLjIuMyA8MS4zLjBcbi8vIH4xLjIuMCwgfj4xLjIuMCAtLT4gPj0xLjIuMCA8MS4zLjBcbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZXMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVRpbGRlKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVGlsZGUoY29tcCwgbG9vc2UpIHtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW1RJTERFTE9PU0VdIDogcmVbVElMREVdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3RpbGRlJywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSlcbiAgICAgIC8vIH4xLjIgPT0gPj0xLjIuMC0gPDEuMy4wLVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VUaWxkZSBwcicsIHByKTtcbiAgICAgIGlmIChwci5jaGFyQXQoMCkgIT09ICctJylcbiAgICAgICAgcHIgPSAnLScgKyBwcjtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICB9IGVsc2VcbiAgICAgIC8vIH4xLjIuMyA9PSA+PTEuMi4zIDwxLjMuMFxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcblxuICAgIGRlYnVnKCd0aWxkZSByZXR1cm4nLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG4vLyBeIC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gXjIsIF4yLngsIF4yLngueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIF4yLjAsIF4yLjAueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIF4xLjIsIF4xLjIueCAtLT4gPj0xLjIuMCA8Mi4wLjBcbi8vIF4xLjIuMyAtLT4gPj0xLjIuMyA8Mi4wLjBcbi8vIF4xLjIuMCAtLT4gPj0xLjIuMCA8Mi4wLjBcbmZ1bmN0aW9uIHJlcGxhY2VDYXJldHMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZUNhcmV0KGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXQoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCwgbG9vc2UpO1xuICB2YXIgciA9IGxvb3NlID8gcmVbQ0FSRVRMT09TRV0gOiByZVtDQVJFVF07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24oXywgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBfLCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHJldDtcblxuICAgIGlmIChpc1goTSkpXG4gICAgICByZXQgPSAnJztcbiAgICBlbHNlIGlmIChpc1gobSkpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgZWxzZSBpZiAoaXNYKHApKSB7XG4gICAgICBpZiAoTSA9PT0gJzAnKVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZUNhcmV0IHByJywgcHIpO1xuICAgICAgaWYgKHByLmNoYXJBdCgwKSAhPT0gJy0nKVxuICAgICAgICBwciA9ICctJyArIHByO1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ25vIHByJyk7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgJyA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH1cblxuICAgIGRlYnVnKCdjYXJldCByZXR1cm4nLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlWFJhbmdlcyhjb21wLCBsb29zZSkge1xuICBkZWJ1ZygncmVwbGFjZVhSYW5nZXMnLCBjb21wLCBsb29zZSk7XG4gIHJldHVybiBjb21wLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVhSYW5nZShjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZShjb21wLCBsb29zZSkge1xuICBjb21wID0gY29tcC50cmltKCk7XG4gIHZhciByID0gbG9vc2UgPyByZVtYUkFOR0VMT09TRV0gOiByZVtYUkFOR0VdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygneFJhbmdlJywgY29tcCwgcmV0LCBndGx0LCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHhNID0gaXNYKE0pO1xuICAgIHZhciB4bSA9IHhNIHx8IGlzWChtKTtcbiAgICB2YXIgeHAgPSB4bSB8fCBpc1gocCk7XG4gICAgdmFyIGFueVggPSB4cDtcblxuICAgIGlmIChndGx0ID09PSAnPScgJiYgYW55WClcbiAgICAgIGd0bHQgPSAnJztcblxuICAgIGlmICh4TSkge1xuICAgICAgaWYgKGd0bHQgPT09ICc+JyB8fCBndGx0ID09PSAnPCcpIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBhbGxvd2VkXG4gICAgICAgIHJldCA9ICc8MC4wLjAnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBmb3JiaWRkZW5cbiAgICAgICAgcmV0ID0gJyonO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ3RsdCAmJiBhbnlYKSB7XG4gICAgICAvLyByZXBsYWNlIFggd2l0aCAwXG4gICAgICBpZiAoeG0pXG4gICAgICAgIG0gPSAwO1xuICAgICAgaWYgKHhwKVxuICAgICAgICBwID0gMDtcblxuICAgICAgaWYgKGd0bHQgPT09ICc+Jykge1xuICAgICAgICAvLyA+MSA9PiA+PTIuMC4wXG4gICAgICAgIC8vID4xLjIgPT4gPj0xLjMuMFxuICAgICAgICAvLyA+MS4yLjMgPT4gPj0gMS4yLjRcbiAgICAgICAgZ3RsdCA9ICc+PSc7XG4gICAgICAgIGlmICh4bSkge1xuICAgICAgICAgIE0gPSArTSArIDE7XG4gICAgICAgICAgbSA9IDA7XG4gICAgICAgICAgcCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgICAgICBtID0gK20gKyAxO1xuICAgICAgICAgIHAgPSAwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGd0bHQgPT09ICc8PScpIHtcbiAgICAgICAgLy8gPD0wLjcueCBpcyBhY3R1YWxseSA8MC44LjAsIHNpbmNlIGFueSAwLjcueCBzaG91bGRcbiAgICAgICAgLy8gcGFzcy4gIFNpbWlsYXJseSwgPD03LnggaXMgYWN0dWFsbHkgPDguMC4wLCBldGMuXG4gICAgICAgIGd0bHQgPSAnPCdcbiAgICAgICAgaWYgKHhtKVxuICAgICAgICAgIE0gPSArTSArIDFcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG0gPSArbSArIDFcbiAgICAgIH1cblxuICAgICAgcmV0ID0gZ3RsdCArIE0gKyAnLicgKyBtICsgJy4nICsgcDtcbiAgICB9IGVsc2UgaWYgKHhtKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICB9XG5cbiAgICBkZWJ1ZygneFJhbmdlIHJldHVybicsIHJldCk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuLy8gQmVjYXVzZSAqIGlzIEFORC1lZCB3aXRoIGV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgY29tcGFyYXRvcixcbi8vIGFuZCAnJyBtZWFucyBcImFueSB2ZXJzaW9uXCIsIGp1c3QgcmVtb3ZlIHRoZSAqcyBlbnRpcmVseS5cbmZ1bmN0aW9uIHJlcGxhY2VTdGFycyhjb21wLCBsb29zZSkge1xuICBkZWJ1ZygncmVwbGFjZVN0YXJzJywgY29tcCwgbG9vc2UpO1xuICAvLyBMb29zZW5lc3MgaXMgaWdub3JlZCBoZXJlLiAgc3RhciBpcyBhbHdheXMgYXMgbG9vc2UgYXMgaXQgZ2V0cyFcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnJlcGxhY2UocmVbU1RBUl0sICcnKTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgdG8gc3RyaW5nLnJlcGxhY2UocmVbSFlQSEVOUkFOR0VdKVxuLy8gTSwgbSwgcGF0Y2gsIHByZXJlbGVhc2UsIGJ1aWxkXG4vLyAxLjIgLSAzLjQuNSA9PiA+PTEuMi4wIDw9My40LjVcbi8vIDEuMi4zIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wIEFueSAzLjQueCB3aWxsIGRvXG4vLyAxLjIgLSAzLjQgPT4gPj0xLjIuMCA8My41LjBcbmZ1bmN0aW9uIGh5cGhlblJlcGxhY2UoJDAsXG4gICAgICAgICAgICAgICAgICAgICAgIGZyb20sIGZNLCBmbSwgZnAsIGZwciwgZmIsXG4gICAgICAgICAgICAgICAgICAgICAgIHRvLCB0TSwgdG0sIHRwLCB0cHIsIHRiKSB7XG5cbiAgaWYgKGlzWChmTSkpXG4gICAgZnJvbSA9ICcnO1xuICBlbHNlIGlmIChpc1goZm0pKVxuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLjAuMCc7XG4gIGVsc2UgaWYgKGlzWChmcCkpXG4gICAgZnJvbSA9ICc+PScgKyBmTSArICcuJyArIGZtICsgJy4wJztcbiAgZWxzZVxuICAgIGZyb20gPSAnPj0nICsgZnJvbTtcblxuICBpZiAoaXNYKHRNKSlcbiAgICB0byA9ICcnO1xuICBlbHNlIGlmIChpc1godG0pKVxuICAgIHRvID0gJzwnICsgKCt0TSArIDEpICsgJy4wLjAnO1xuICBlbHNlIGlmIChpc1godHApKVxuICAgIHRvID0gJzwnICsgdE0gKyAnLicgKyAoK3RtICsgMSkgKyAnLjAnO1xuICBlbHNlIGlmICh0cHIpXG4gICAgdG8gPSAnPD0nICsgdE0gKyAnLicgKyB0bSArICcuJyArIHRwICsgJy0nICsgdHByO1xuICBlbHNlXG4gICAgdG8gPSAnPD0nICsgdG87XG5cbiAgcmV0dXJuIChmcm9tICsgJyAnICsgdG8pLnRyaW0oKTtcbn1cblxuXG4vLyBpZiBBTlkgb2YgdGhlIHNldHMgbWF0Y2ggQUxMIG9mIGl0cyBjb21wYXJhdG9ycywgdGhlbiBwYXNzXG5SYW5nZS5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgaWYgKCF2ZXJzaW9uKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKVxuICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGVzdFNldCh0aGlzLnNldFtpXSwgdmVyc2lvbikpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5mdW5jdGlvbiB0ZXN0U2V0KHNldCwgdmVyc2lvbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICghc2V0W2ldLnRlc3QodmVyc2lvbikpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodmVyc2lvbi5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgIC8vIEZpbmQgdGhlIHNldCBvZiB2ZXJzaW9ucyB0aGF0IGFyZSBhbGxvd2VkIHRvIGhhdmUgcHJlcmVsZWFzZXNcbiAgICAvLyBGb3IgZXhhbXBsZSwgXjEuMi4zLXByLjEgZGVzdWdhcnMgdG8gPj0xLjIuMy1wci4xIDwyLjAuMFxuICAgIC8vIFRoYXQgc2hvdWxkIGFsbG93IGAxLjIuMy1wci4yYCB0byBwYXNzLlxuICAgIC8vIEhvd2V2ZXIsIGAxLjIuNC1hbHBoYS5ub3RyZWFkeWAgc2hvdWxkIE5PVCBiZSBhbGxvd2VkLFxuICAgIC8vIGV2ZW4gdGhvdWdoIGl0J3Mgd2l0aGluIHRoZSByYW5nZSBzZXQgYnkgdGhlIGNvbXBhcmF0b3JzLlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWJ1ZyhzZXRbaV0uc2VtdmVyKTtcbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyID09PSBBTlkpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoc2V0W2ldLnNlbXZlci5wcmVyZWxlYXNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGFsbG93ZWQgPSBzZXRbaV0uc2VtdmVyO1xuICAgICAgICBpZiAoYWxsb3dlZC5tYWpvciA9PT0gdmVyc2lvbi5tYWpvciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5taW5vciA9PT0gdmVyc2lvbi5taW5vciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5wYXRjaCA9PT0gdmVyc2lvbi5wYXRjaClcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBWZXJzaW9uIGhhcyBhIC1wcmUsIGJ1dCBpdCdzIG5vdCBvbmUgb2YgdGhlIG9uZXMgd2UgbGlrZS5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0cy5zYXRpc2ZpZXMgPSBzYXRpc2ZpZXM7XG5mdW5jdGlvbiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHRyeSB7XG4gICAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHJhbmdlLnRlc3QodmVyc2lvbik7XG59XG5cbmV4cG9ydHMubWF4U2F0aXNmeWluZyA9IG1heFNhdGlzZnlpbmc7XG5mdW5jdGlvbiBtYXhTYXRpc2Z5aW5nKHZlcnNpb25zLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIHZlcnNpb25zLmZpbHRlcihmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpO1xuICB9KS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gcmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KVswXSB8fCBudWxsO1xufVxuXG5leHBvcnRzLnZhbGlkUmFuZ2UgPSB2YWxpZFJhbmdlO1xuZnVuY3Rpb24gdmFsaWRSYW5nZShyYW5nZSwgbG9vc2UpIHtcbiAgdHJ5IHtcbiAgICAvLyBSZXR1cm4gJyonIGluc3RlYWQgb2YgJycgc28gdGhhdCB0cnV0aGluZXNzIHdvcmtzLlxuICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBpZiBpdCdzIGludmFsaWQgYW55d2F5XG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpLnJhbmdlIHx8ICcqJztcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBsZXNzIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2VcbmV4cG9ydHMubHRyID0gbHRyO1xuZnVuY3Rpb24gbHRyKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJzwnLCBsb29zZSk7XG59XG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGdyZWF0ZXIgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZS5cbmV4cG9ydHMuZ3RyID0gZ3RyO1xuZnVuY3Rpb24gZ3RyKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJz4nLCBsb29zZSk7XG59XG5cbmV4cG9ydHMub3V0c2lkZSA9IG91dHNpZGU7XG5mdW5jdGlvbiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCBoaWxvLCBsb29zZSkge1xuICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG4gIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG5cbiAgdmFyIGd0Zm4sIGx0ZWZuLCBsdGZuLCBjb21wLCBlY29tcDtcbiAgc3dpdGNoIChoaWxvKSB7XG4gICAgY2FzZSAnPic6XG4gICAgICBndGZuID0gZ3Q7XG4gICAgICBsdGVmbiA9IGx0ZTtcbiAgICAgIGx0Zm4gPSBsdDtcbiAgICAgIGNvbXAgPSAnPic7XG4gICAgICBlY29tcCA9ICc+PSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICc8JzpcbiAgICAgIGd0Zm4gPSBsdDtcbiAgICAgIGx0ZWZuID0gZ3RlO1xuICAgICAgbHRmbiA9IGd0O1xuICAgICAgY29tcCA9ICc8JztcbiAgICAgIGVjb21wID0gJzw9JztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IHByb3ZpZGUgYSBoaWxvIHZhbCBvZiBcIjxcIiBvciBcIj5cIicpO1xuICB9XG5cbiAgLy8gSWYgaXQgc2F0aXNpZmVzIHRoZSByYW5nZSBpdCBpcyBub3Qgb3V0c2lkZVxuICBpZiAoc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBGcm9tIG5vdyBvbiwgdmFyaWFibGUgdGVybXMgYXJlIGFzIGlmIHdlJ3JlIGluIFwiZ3RyXCIgbW9kZS5cbiAgLy8gYnV0IG5vdGUgdGhhdCBldmVyeXRoaW5nIGlzIGZsaXBwZWQgZm9yIHRoZSBcImx0clwiIGZ1bmN0aW9uLlxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmFuZ2Uuc2V0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGNvbXBhcmF0b3JzID0gcmFuZ2Uuc2V0W2ldO1xuXG4gICAgdmFyIGhpZ2ggPSBudWxsO1xuICAgIHZhciBsb3cgPSBudWxsO1xuXG4gICAgY29tcGFyYXRvcnMuZm9yRWFjaChmdW5jdGlvbihjb21wYXJhdG9yKSB7XG4gICAgICBpZiAoY29tcGFyYXRvci5zZW12ZXIgPT09IEFOWSkge1xuICAgICAgICBjb21wYXJhdG9yID0gbmV3IENvbXBhcmF0b3IoJz49MC4wLjAnKVxuICAgICAgfVxuICAgICAgaGlnaCA9IGhpZ2ggfHwgY29tcGFyYXRvcjtcbiAgICAgIGxvdyA9IGxvdyB8fCBjb21wYXJhdG9yO1xuICAgICAgaWYgKGd0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGhpZ2guc2VtdmVyLCBsb29zZSkpIHtcbiAgICAgICAgaGlnaCA9IGNvbXBhcmF0b3I7XG4gICAgICB9IGVsc2UgaWYgKGx0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGxvdy5zZW12ZXIsIGxvb3NlKSkge1xuICAgICAgICBsb3cgPSBjb21wYXJhdG9yO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSWYgdGhlIGVkZ2UgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhIG9wZXJhdG9yIHRoZW4gb3VyIHZlcnNpb25cbiAgICAvLyBpc24ndCBvdXRzaWRlIGl0XG4gICAgaWYgKGhpZ2gub3BlcmF0b3IgPT09IGNvbXAgfHwgaGlnaC5vcGVyYXRvciA9PT0gZWNvbXApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgbG93ZXN0IHZlcnNpb24gY29tcGFyYXRvciBoYXMgYW4gb3BlcmF0b3IgYW5kIG91ciB2ZXJzaW9uXG4gICAgLy8gaXMgbGVzcyB0aGFuIGl0IHRoZW4gaXQgaXNuJ3QgaGlnaGVyIHRoYW4gdGhlIHJhbmdlXG4gICAgaWYgKCghbG93Lm9wZXJhdG9yIHx8IGxvdy5vcGVyYXRvciA9PT0gY29tcCkgJiZcbiAgICAgICAgbHRlZm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGxvdy5vcGVyYXRvciA9PT0gZWNvbXAgJiYgbHRmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvfi9zZW12ZXIvc2VtdmVyLmpzXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBWaWV3TW9kZWwgQ29uc3RydWN0b3IgJiBkZWZpbml0aW9uXG4gKi9cblxuaW1wb3J0ICogYXMgXyBmcm9tICcuLi91dGlsL2luZGV4J1xuaW1wb3J0ICogYXMgc3RhdGUgZnJvbSAnLi9jb3JlL3N0YXRlJ1xuaW1wb3J0ICogYXMgY29tcGlsZXIgZnJvbSAnLi9jb21waWxlcidcbmltcG9ydCAqIGFzIGRpcmVjdGl2ZSBmcm9tICcuL2RpcmVjdGl2ZSdcbmltcG9ydCAqIGFzIGRvbUhlbHBlciBmcm9tICcuL2RvbS1oZWxwZXInXG5pbXBvcnQgKiBhcyBldmVudHMgZnJvbSAnLi9ldmVudHMnXG5cbmltcG9ydCB7cmVnaXN0ZXJNb2R1bGVzLCByZWdpc3Rlck1ldGhvZHN9IGZyb20gJy4uL2FwcC9yZWdpc3RlcidcblxuZnVuY3Rpb24gY2FsbE9sZFJlYWR5RW50cnkodm0sIGNvbXBvbmVudCkge1xuICBpZiAoY29tcG9uZW50Lm1ldGhvZHMgJiZcbiAgICAgIGNvbXBvbmVudC5tZXRob2RzLnJlYWR5KSB7XG4gICAgXy53YXJuKCdcImV4cG9ydHMubWV0aG9kcy5yZWFkeVwiIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgJ3BsZWFzZSB1c2UgXCJleHBvcnRzLmNyZWF0ZWRcIiBpbnN0ZWFkJylcbiAgICBjb21wb25lbnQubWV0aG9kcy5yZWFkeS5jYWxsKHZtKVxuICB9XG59XG5cbi8qKlxuICogVmlld01vZGVsIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zICAgIGNvbXBvbmVudCBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyZW50Vm0gICB3aGljaCBjb250YWlucyBfYXBwXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyZW50RWwgICByb290IGVsZW1lbnQgb3IgZnJhZyBibG9ja1xuICogQHBhcmFtIHtvYmplY3R9IG1lcmdlZERhdGEgZXh0ZXJuYWwgZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IGV4dGVybmFsRXZlbnRzIGV4dGVybmFsIGV2ZW50c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWbShcbiAgdHlwZSxcbiAgb3B0aW9ucyxcbiAgcGFyZW50Vm0sXG4gIHBhcmVudEVsLFxuICBtZXJnZWREYXRhLFxuICBleHRlcm5hbEV2ZW50c1xuKSB7XG4gIHRoaXMuX3BhcmVudCA9IHBhcmVudFZtLl9yZWFsUGFyZW50ID8gcGFyZW50Vm0uX3JlYWxQYXJlbnQgOiBwYXJlbnRWbVxuICB0aGlzLl9hcHAgPSBwYXJlbnRWbS5fYXBwXG4gIHBhcmVudFZtLl9jaGlsZHJlblZtcyAmJiBwYXJlbnRWbS5fY2hpbGRyZW5WbXMucHVzaCh0aGlzKVxuXG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB0aGlzLl9hcHAuY3VzdG9tQ29tcG9uZW50TWFwW3R5cGVdIHx8IHt9XG4gIH1cbiAgY29uc3QgZGF0YSA9IG9wdGlvbnMuZGF0YSB8fCB7fVxuXG4gIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zXG4gIHRoaXMuX21ldGhvZHMgPSBvcHRpb25zLm1ldGhvZHMgfHwge31cbiAgdGhpcy5fY29tcHV0ZWQgPSBvcHRpb25zLmNvbXB1dGVkIHx8IHt9XG4gIHRoaXMuX2NzcyA9IG9wdGlvbnMuc3R5bGUgfHwge31cbiAgdGhpcy5faWRzID0ge31cbiAgdGhpcy5fdm1FdmVudHMgPSB7fVxuICB0aGlzLl9jaGlsZHJlblZtcyA9IFtdXG4gIHRoaXMuX3R5cGUgPSB0eXBlXG5cbiAgLy8gYmluZCBldmVudHMgYW5kIGxpZmVjeWNsZXNcbiAgdGhpcy5faW5pdEV2ZW50cyhleHRlcm5hbEV2ZW50cylcblxuICBfLmRlYnVnKGBcImluaXRcIiBsaWZlY3ljbGUgaW4gVm0oJHt0aGlzLl90eXBlfSlgKVxuICB0aGlzLiRlbWl0KCdob29rOmluaXQnKVxuICB0aGlzLl9pbml0ZWQgPSB0cnVlXG4gIC8vIHByb3h5IGRhdGEgYW5kIG1ldGhvZHNcbiAgLy8gb2JzZXJ2ZSBkYXRhIGFuZCBhZGQgdGhpcyB0byB2bXNcbiAgdGhpcy5fZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nID8gZGF0YSgpIDogZGF0YVxuICBpZiAobWVyZ2VkRGF0YSkge1xuICAgIF8uZXh0ZW5kKHRoaXMuX2RhdGEsIG1lcmdlZERhdGEpXG4gIH1cbiAgdGhpcy5faW5pdFN0YXRlKClcblxuICBfLmRlYnVnKGBcImNyZWF0ZWRcIiBsaWZlY3ljbGUgaW4gVm0oJHt0aGlzLl90eXBlfSlgKVxuICB0aGlzLiRlbWl0KCdob29rOmNyZWF0ZWQnKVxuICB0aGlzLl9jcmVhdGVkID0gdHJ1ZVxuICAvLyBiYWNrd2FyZCBvbGQgcmVhZHkgZW50cnlcbiAgY2FsbE9sZFJlYWR5RW50cnkodGhpcywgb3B0aW9ucylcblxuICAvLyBpZiBubyBwYXJlbnRFbGVtZW50IHRoZW4gc3BlY2lmeSB0aGUgZG9jdW1lbnRFbGVtZW50XG4gIHRoaXMuX3BhcmVudEVsID0gcGFyZW50RWwgfHwgdGhpcy5fYXBwLmRvYy5kb2N1bWVudEVsZW1lbnRcbiAgdGhpcy5fYnVpbGQoKVxufVxuXG5fLmV4dGVuZChWbS5wcm90b3R5cGUsIHN0YXRlLCBjb21waWxlciwgZGlyZWN0aXZlLCBkb21IZWxwZXIsIGV2ZW50cylcbl8uZXh0ZW5kKFZtLCB7XG4gIHJlZ2lzdGVyTW9kdWxlcyxcbiAgcmVnaXN0ZXJNZXRob2RzXG59KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9saWIvdm0vaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgV2F0Y2hlciBmcm9tICcuL3dhdGNoZXInXG5pbXBvcnQgRGVwIGZyb20gJy4vZGVwJ1xuaW1wb3J0IHtcbiAgb2JzZXJ2ZSxcbiAgcHJveHksXG4gIHVucHJveHlcbn0gZnJvbSAnLi9vYnNlcnZlcidcbmltcG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzUGxhaW5PYmplY3QsXG4gIGJpbmRcbn0gZnJvbSAnLi4vLi4vdXRpbC9pbmRleCdcblxuZXhwb3J0IGZ1bmN0aW9uIF9pbml0U3RhdGUgKCkge1xuICBjb25zdCB2bSA9IHRoaXNcbiAgdm0uX3dhdGNoZXJzID0gW11cbiAgdm0uX2luaXREYXRhKClcbiAgdm0uX2luaXRDb21wdXRlZCgpXG4gIHZtLl9pbml0TWV0aG9kcygpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaW5pdERhdGEgKCkge1xuICBjb25zdCB2bSA9IHRoaXNcbiAgbGV0IGRhdGEgPSB2bS5fZGF0YVxuXG4gIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgIGRhdGEgPSB7fVxuICB9XG4gIC8vIHByb3h5IGRhdGEgb24gaW5zdGFuY2VcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gIGxldCBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIHByb3h5KHZtLCBrZXlzW2ldKVxuICB9XG4gIC8vIG9ic2VydmUgZGF0YVxuICBvYnNlcnZlKGRhdGEsIHZtKVxufVxuXG5mdW5jdGlvbiBub29wICgpIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pbml0Q29tcHV0ZWQgKCkge1xuICBjb25zdCB2bSA9IHRoaXNcbiAgY29uc3QgY29tcHV0ZWQgPSB2bS5fY29tcHV0ZWRcbiAgaWYgKGNvbXB1dGVkKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgICBjb25zdCB1c2VyRGVmID0gY29tcHV0ZWRba2V5XVxuICAgICAgY29uc3QgZGVmID0ge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdXNlckRlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkZWYuZ2V0ID0gbWFrZUNvbXB1dGVkR2V0dGVyKHVzZXJEZWYsIHZtKVxuICAgICAgICBkZWYuc2V0ID0gbm9vcFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmLmdldCA9IHVzZXJEZWYuZ2V0XG4gICAgICAgICAgPyB1c2VyRGVmLmNhY2hlICE9PSBmYWxzZVxuICAgICAgICAgICAgPyBtYWtlQ29tcHV0ZWRHZXR0ZXIodXNlckRlZi5nZXQsIHZtKVxuICAgICAgICAgICAgOiBiaW5kKHVzZXJEZWYuZ2V0LCB2bSlcbiAgICAgICAgICA6IG5vb3BcbiAgICAgICAgZGVmLnNldCA9IHVzZXJEZWYuc2V0XG4gICAgICAgICAgPyBiaW5kKHVzZXJEZWYuc2V0LCB2bSlcbiAgICAgICAgICA6IG5vb3BcbiAgICAgIH1cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2bSwga2V5LCBkZWYpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VDb21wdXRlZEdldHRlciAoZ2V0dGVyLCBvd25lcikge1xuICBjb25zdCB3YXRjaGVyID0gbmV3IFdhdGNoZXIob3duZXIsIGdldHRlciwgbnVsbCwge1xuICAgIGxhenk6IHRydWVcbiAgfSlcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXB1dGVkR2V0dGVyICgpIHtcbiAgICBpZiAod2F0Y2hlci5kaXJ0eSkge1xuICAgICAgd2F0Y2hlci5ldmFsdWF0ZSgpXG4gICAgfVxuICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICB3YXRjaGVyLmRlcGVuZCgpXG4gICAgfVxuICAgIHJldHVybiB3YXRjaGVyLnZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pbml0TWV0aG9kcyAoKSB7XG4gIGNvbnN0IHZtID0gdGhpc1xuICBjb25zdCBtZXRob2RzID0gdm0uX21ldGhvZHNcbiAgaWYgKG1ldGhvZHMpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gbWV0aG9kcykge1xuICAgICAgdm1ba2V5XSA9IGJpbmQobWV0aG9kc1trZXldLCB2bSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvbGliL3ZtL2NvcmUvc3RhdGUuanNcbiAqKi8iLCJpbXBvcnQgRGVwIGZyb20gJy4vZGVwJ1xuLy8gaW1wb3J0IHsgcHVzaFdhdGNoZXIgfSBmcm9tICcuL2JhdGNoZXInXG5pbXBvcnQge1xuICB3YXJuLFxuICByZW1vdmUsXG4gIGV4dGVuZCxcbiAgaXNBcnJheSxcbiAgaXNPYmplY3QsXG4gIHBhcnNlUGF0aCxcbiAgX1NldCBhcyBTZXRcbn0gZnJvbSAnLi4vLi4vdXRpbC9pbmRleCdcblxubGV0IHVpZCA9IDBcbmxldCBwcmV2VGFyZ2V0XG5cbi8qKlxuICogQSB3YXRjaGVyIHBhcnNlcyBhbiBleHByZXNzaW9uLCBjb2xsZWN0cyBkZXBlbmRlbmNpZXMsXG4gKiBhbmQgZmlyZXMgY2FsbGJhY2sgd2hlbiB0aGUgZXhwcmVzc2lvbiB2YWx1ZSBjaGFuZ2VzLlxuICogVGhpcyBpcyB1c2VkIGZvciBib3RoIHRoZSAkd2F0Y2goKSBhcGkgYW5kIGRpcmVjdGl2ZXMuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gZXhwT3JGblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiAgICAgICAgICAgICAgICAgLSB7QXJyYXl9IGZpbHRlcnNcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSB0d29XYXlcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBkZWVwXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gdXNlclxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHN5bmNcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBsYXp5XG4gKiAgICAgICAgICAgICAgICAgLSB7RnVuY3Rpb259IFtwcmVQcm9jZXNzXVxuICogICAgICAgICAgICAgICAgIC0ge0Z1bmN0aW9ufSBbcG9zdFByb2Nlc3NdXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYXRjaGVyICh2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpIHtcbiAgLy8gbWl4IGluIG9wdGlvbnNcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBleHRlbmQodGhpcywgb3B0aW9ucylcbiAgfVxuICBjb25zdCBpc0ZuID0gdHlwZW9mIGV4cE9yRm4gPT09ICdmdW5jdGlvbidcbiAgdGhpcy52bSA9IHZtXG4gIHZtLl93YXRjaGVycy5wdXNoKHRoaXMpXG4gIHRoaXMuZXhwcmVzc2lvbiA9IGV4cE9yRm5cbiAgdGhpcy5jYiA9IGNiXG4gIHRoaXMuaWQgPSArK3VpZCAvLyB1aWQgZm9yIGJhdGNoaW5nXG4gIHRoaXMuYWN0aXZlID0gdHJ1ZVxuICB0aGlzLmRpcnR5ID0gdGhpcy5sYXp5IC8vIGZvciBsYXp5IHdhdGNoZXJzXG4gIHRoaXMuZGVwcyA9IFtdXG4gIHRoaXMubmV3RGVwcyA9IFtdXG4gIHRoaXMuZGVwSWRzID0gbmV3IFNldCgpXG4gIHRoaXMubmV3RGVwSWRzID0gbmV3IFNldCgpXG4gIC8vIHBhcnNlIGV4cHJlc3Npb24gZm9yIGdldHRlclxuICBpZiAoaXNGbikge1xuICAgIHRoaXMuZ2V0dGVyID0gZXhwT3JGblxuICB9IGVsc2Uge1xuICAgIHRoaXMuZ2V0dGVyID0gcGFyc2VQYXRoKGV4cE9yRm4pXG4gICAgaWYgKCF0aGlzLmdldHRlcikge1xuICAgICAgdGhpcy5nZXR0ZXIgPSBmdW5jdGlvbiAoKSB7fVxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAnRmFpbGVkIHdhdGNoaW5nIHBhdGg6ICcgKyBleHBPckZuICtcbiAgICAgICAgJ1dhdGNoZXIgb25seSBhY2NlcHRzIHNpbXBsZSBkb3QtZGVsaW1pdGVkIHBhdGhzLiAnICtcbiAgICAgICAgJ0ZvciBmdWxsIGNvbnRyb2wsIHVzZSBhIGZ1bmN0aW9uIGluc3RlYWQuJyxcbiAgICAgICAgdm1cbiAgICAgIClcbiAgICB9XG4gIH1cbiAgdGhpcy52YWx1ZSA9IHRoaXMubGF6eVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiB0aGlzLmdldCgpXG4gIC8vIHN0YXRlIGZvciBhdm9pZGluZyBmYWxzZSB0cmlnZ2VycyBmb3IgZGVlcCBhbmQgQXJyYXlcbiAgLy8gd2F0Y2hlcnMgZHVyaW5nIHZtLl9kaWdlc3QoKVxuICB0aGlzLnF1ZXVlZCA9IHRoaXMuc2hhbGxvdyA9IGZhbHNlXG59XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIGdldHRlciwgYW5kIHJlLWNvbGxlY3QgZGVwZW5kZW5jaWVzLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5iZWZvcmVHZXQoKVxuICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0dGVyLmNhbGwodGhpcy52bSwgdGhpcy52bSlcbiAgLy8gXCJ0b3VjaFwiIGV2ZXJ5IHByb3BlcnR5IHNvIHRoZXkgYXJlIGFsbCB0cmFja2VkIGFzXG4gIC8vIGRlcGVuZGVuY2llcyBmb3IgZGVlcCB3YXRjaGluZ1xuICBpZiAodGhpcy5kZWVwKSB7XG4gICAgdHJhdmVyc2UodmFsdWUpXG4gIH1cbiAgdGhpcy5hZnRlckdldCgpXG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKipcbiAqIFByZXBhcmUgZm9yIGRlcGVuZGVuY3kgY29sbGVjdGlvbi5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5iZWZvcmVHZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHByZXZUYXJnZXQgPSBEZXAudGFyZ2V0XG4gIERlcC50YXJnZXQgPSB0aGlzXG59XG5cbi8qKlxuICogQWRkIGEgZGVwZW5kZW5jeSB0byB0aGlzIGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge0RlcH0gZGVwXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuYWRkRGVwID0gZnVuY3Rpb24gKGRlcCkge1xuICBjb25zdCBpZCA9IGRlcC5pZFxuICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhpZCkpIHtcbiAgICB0aGlzLm5ld0RlcElkcy5hZGQoaWQpXG4gICAgdGhpcy5uZXdEZXBzLnB1c2goZGVwKVxuICAgIGlmICghdGhpcy5kZXBJZHMuaGFzKGlkKSkge1xuICAgICAgZGVwLmFkZFN1Yih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENsZWFuIHVwIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuYWZ0ZXJHZXQgPSBmdW5jdGlvbiAoKSB7XG4gIERlcC50YXJnZXQgPSBwcmV2VGFyZ2V0XG4gIGxldCBpID0gdGhpcy5kZXBzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgY29uc3QgZGVwID0gdGhpcy5kZXBzW2ldXG4gICAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoZGVwLmlkKSkge1xuICAgICAgZGVwLnJlbW92ZVN1Yih0aGlzKVxuICAgIH1cbiAgfVxuICBsZXQgdG1wID0gdGhpcy5kZXBJZHNcbiAgdGhpcy5kZXBJZHMgPSB0aGlzLm5ld0RlcElkc1xuICB0aGlzLm5ld0RlcElkcyA9IHRtcFxuICB0aGlzLm5ld0RlcElkcy5jbGVhcigpXG4gIHRtcCA9IHRoaXMuZGVwc1xuICB0aGlzLmRlcHMgPSB0aGlzLm5ld0RlcHNcbiAgdGhpcy5uZXdEZXBzID0gdG1wXG4gIHRoaXMubmV3RGVwcy5sZW5ndGggPSAwXG59XG5cbi8qKlxuICogU3Vic2NyaWJlciBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCB3aGVuIGEgZGVwZW5kZW5jeSBjaGFuZ2VzLlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc2hhbGxvd1xuICovXG5cbldhdGNoZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChzaGFsbG93KSB7XG4gIGlmICh0aGlzLmxhenkpIHtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIHRoaXMucnVuKClcbiAgfVxuICAvLyB9IGVsc2UgaWYgKHRoaXMuc3luYykge1xuICAvLyAgIHRoaXMucnVuKClcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICAvLyBpZiBxdWV1ZWQsIG9ubHkgb3ZlcndyaXRlIHNoYWxsb3cgd2l0aCBub24tc2hhbGxvdyxcbiAgLy8gICAvLyBidXQgbm90IHRoZSBvdGhlciB3YXkgYXJvdW5kLlxuICAvLyAgIHRoaXMuc2hhbGxvdyA9IHRoaXMucXVldWVkXG4gIC8vICAgICA/IHNoYWxsb3dcbiAgLy8gICAgICAgPyB0aGlzLnNoYWxsb3dcbiAgLy8gICAgICAgOiBmYWxzZVxuICAvLyAgICAgOiAhIXNoYWxsb3dcbiAgLy8gICB0aGlzLnF1ZXVlZCA9IHRydWVcbiAgLy8gICBwdXNoV2F0Y2hlcih0aGlzKVxuICAvLyB9XG59XG5cbi8qKlxuICogQmF0Y2hlciBqb2IgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgYnkgdGhlIGJhdGNoZXIuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KClcbiAgICBpZiAoXG4gICAgICB2YWx1ZSAhPT0gdGhpcy52YWx1ZSB8fFxuICAgICAgLy8gRGVlcCB3YXRjaGVycyBhbmQgd2F0Y2hlcnMgb24gT2JqZWN0L0FycmF5cyBzaG91bGQgZmlyZSBldmVuXG4gICAgICAvLyB3aGVuIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZSwgYmVjYXVzZSB0aGUgdmFsdWUgbWF5XG4gICAgICAvLyBoYXZlIG11dGF0ZWQ7IGJ1dCBvbmx5IGRvIHNvIGlmIHRoaXMgaXMgYVxuICAgICAgLy8gbm9uLXNoYWxsb3cgdXBkYXRlIChjYXVzZWQgYnkgYSB2bSBkaWdlc3QpLlxuICAgICAgKChpc09iamVjdCh2YWx1ZSkgfHwgdGhpcy5kZWVwKSAmJiAhdGhpcy5zaGFsbG93KVxuICAgICkge1xuICAgICAgLy8gc2V0IG5ldyB2YWx1ZVxuICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnZhbHVlXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpXG4gICAgfVxuICAgIHRoaXMucXVldWVkID0gdGhpcy5zaGFsbG93ID0gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSB2YWx1ZSBvZiB0aGUgd2F0Y2hlci5cbiAqIFRoaXMgb25seSBnZXRzIGNhbGxlZCBmb3IgbGF6eSB3YXRjaGVycy5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5ldmFsdWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gYXZvaWQgb3ZlcndyaXRpbmcgYW5vdGhlciB3YXRjaGVyIHRoYXQgaXMgYmVpbmdcbiAgLy8gY29sbGVjdGVkLlxuICBjb25zdCBjdXJyZW50ID0gRGVwLnRhcmdldFxuICB0aGlzLnZhbHVlID0gdGhpcy5nZXQoKVxuICB0aGlzLmRpcnR5ID0gZmFsc2VcbiAgRGVwLnRhcmdldCA9IGN1cnJlbnRcbn1cblxuLyoqXG4gKiBEZXBlbmQgb24gYWxsIGRlcHMgY29sbGVjdGVkIGJ5IHRoaXMgd2F0Y2hlci5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBpID0gdGhpcy5kZXBzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgdGhpcy5kZXBzW2ldLmRlcGVuZCgpXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgc2VsZiBmcm9tIGFsbCBkZXBlbmRlbmNpZXMnIHN1YmNyaWJlciBsaXN0LlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLnRlYXJkb3duID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAvLyByZW1vdmUgc2VsZiBmcm9tIHZtJ3Mgd2F0Y2hlciBsaXN0XG4gICAgLy8gdGhpcyBpcyBhIHNvbWV3aGF0IGV4cGVuc2l2ZSBvcGVyYXRpb24gc28gd2Ugc2tpcCBpdFxuICAgIC8vIGlmIHRoZSB2bSBpcyBiZWluZyBkZXN0cm95ZWQgb3IgaXMgcGVyZm9ybWluZyBhIHYtZm9yXG4gICAgLy8gcmUtcmVuZGVyICh0aGUgd2F0Y2hlciBsaXN0IGlzIHRoZW4gZmlsdGVyZWQgYnkgdi1mb3IpLlxuICAgIGlmICghdGhpcy52bS5faXNCZWluZ0Rlc3Ryb3llZCAmJiAhdGhpcy52bS5fdkZvclJlbW92aW5nKSB7XG4gICAgICByZW1vdmUodGhpcy52bS5fd2F0Y2hlcnMsIHRoaXMpXG4gICAgfVxuICAgIGxldCBpID0gdGhpcy5kZXBzLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMuZGVwc1tpXS5yZW1vdmVTdWIodGhpcylcbiAgICB9XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZVxuICAgIHRoaXMudm0gPSB0aGlzLmNiID0gdGhpcy52YWx1ZSA9IG51bGxcbiAgfVxufVxuXG4vKipcbiAqIFJlY3J1c2l2ZWx5IHRyYXZlcnNlIGFuIG9iamVjdCB0byBldm9rZSBhbGwgY29udmVydGVkXG4gKiBnZXR0ZXJzLCBzbyB0aGF0IGV2ZXJ5IG5lc3RlZCBwcm9wZXJ0eSBpbnNpZGUgdGhlIG9iamVjdFxuICogaXMgY29sbGVjdGVkIGFzIGEgXCJkZWVwXCIgZGVwZW5kZW5jeS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHBhcmFtIHtTZXR9IHNlZW5cbiAqL1xuXG5jb25zdCBzZWVuT2JqZWN0cyA9IG5ldyBTZXQoKVxuZnVuY3Rpb24gdHJhdmVyc2UgKHZhbCwgc2Vlbikge1xuICBsZXQgaSwga2V5cywgaXNBLCBpc09cbiAgaWYgKCFzZWVuKSB7XG4gICAgc2VlbiA9IHNlZW5PYmplY3RzXG4gICAgc2Vlbi5jbGVhcigpXG4gIH1cbiAgaXNBID0gaXNBcnJheSh2YWwpXG4gIGlzTyA9IGlzT2JqZWN0KHZhbClcbiAgaWYgKGlzQSB8fCBpc08pIHtcbiAgICBpZiAodmFsLl9fb2JfXykge1xuICAgICAgY29uc3QgZGVwSWQgPSB2YWwuX19vYl9fLmRlcC5pZFxuICAgICAgaWYgKHNlZW4uaGFzKGRlcElkKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlZW4uYWRkKGRlcElkKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNBKSB7XG4gICAgICBpID0gdmFsLmxlbmd0aFxuICAgICAgd2hpbGUgKGktLSkgdHJhdmVyc2UodmFsW2ldLCBzZWVuKVxuICAgIH0gZWxzZSBpZiAoaXNPKSB7XG4gICAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKVxuICAgICAgaSA9IGtleXMubGVuZ3RoXG4gICAgICB3aGlsZSAoaS0tKSB0cmF2ZXJzZSh2YWxba2V5c1tpXV0sIHNlZW4pXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL2xpYi92bS9jb3JlL3dhdGNoZXIuanNcbiAqKi8iLCJpbXBvcnQgeyByZW1vdmUgfSBmcm9tICcuLi8uLi91dGlsL2luZGV4J1xuXG5sZXQgdWlkID0gMFxuXG4vKipcbiAqIEEgZGVwIGlzIGFuIG9ic2VydmFibGUgdGhhdCBjYW4gaGF2ZSBtdWx0aXBsZVxuICogZGlyZWN0aXZlcyBzdWJzY3JpYmluZyB0byBpdC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXAgKCkge1xuICB0aGlzLmlkID0gdWlkKytcbiAgdGhpcy5zdWJzID0gW11cbn1cblxuLy8gdGhlIGN1cnJlbnQgdGFyZ2V0IHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkLlxuLy8gdGhpcyBpcyBnbG9iYWxseSB1bmlxdWUgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvbmx5IG9uZVxuLy8gd2F0Y2hlciBiZWluZyBldmFsdWF0ZWQgYXQgYW55IHRpbWUuXG5EZXAudGFyZ2V0ID0gbnVsbFxuXG4vKipcbiAqIEFkZCBhIGRpcmVjdGl2ZSBzdWJzY3JpYmVyLlxuICpcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSBzdWJcbiAqL1xuXG5EZXAucHJvdG90eXBlLmFkZFN1YiA9IGZ1bmN0aW9uIChzdWIpIHtcbiAgdGhpcy5zdWJzLnB1c2goc3ViKVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGRpcmVjdGl2ZSBzdWJzY3JpYmVyLlxuICpcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSBzdWJcbiAqL1xuXG5EZXAucHJvdG90eXBlLnJlbW92ZVN1YiA9IGZ1bmN0aW9uIChzdWIpIHtcbiAgcmVtb3ZlKHRoaXMuc3Vicywgc3ViKVxufVxuXG4vKipcbiAqIEFkZCBzZWxmIGFzIGEgZGVwZW5kZW5jeSB0byB0aGUgdGFyZ2V0IHdhdGNoZXIuXG4gKi9cblxuRGVwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiAoKSB7XG4gIERlcC50YXJnZXQuYWRkRGVwKHRoaXMpXG59XG5cbi8qKlxuICogTm90aWZ5IGFsbCBzdWJzY3JpYmVycyBvZiBhIG5ldyB2YWx1ZS5cbiAqL1xuXG5EZXAucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gc3RhYmxpemUgdGhlIHN1YnNjcmliZXIgbGlzdCBmaXJzdFxuICBjb25zdCBzdWJzID0gdGhpcy5zdWJzLnNsaWNlKClcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdWJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHN1YnNbaV0udXBkYXRlKClcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9saWIvdm0vY29yZS9kZXAuanNcbiAqKi8iLCJpbXBvcnQgRGVwIGZyb20gJy4vZGVwJ1xuaW1wb3J0IHsgYXJyYXlNZXRob2RzIH0gZnJvbSAnLi9hcnJheSdcbmltcG9ydCB7XG4gIGRlZixcbiAgcmVtb3ZlLFxuICBpc0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdCxcbiAgaGFzUHJvdG8sXG4gIGhhc093bixcbiAgaXNSZXNlcnZlZFxufSBmcm9tICcuLi8uLi91dGlsL2luZGV4J1xuXG5jb25zdCBhcnJheUtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhcnJheU1ldGhvZHMpXG5cbi8qKlxuICogT2JzZXJ2ZXIgY2xhc3MgdGhhdCBhcmUgYXR0YWNoZWQgdG8gZWFjaCBvYnNlcnZlZFxuICogb2JqZWN0LiBPbmNlIGF0dGFjaGVkLCB0aGUgb2JzZXJ2ZXIgY29udmVydHMgdGFyZ2V0XG4gKiBvYmplY3QncyBwcm9wZXJ0eSBrZXlzIGludG8gZ2V0dGVyL3NldHRlcnMgdGhhdFxuICogY29sbGVjdCBkZXBlbmRlbmNpZXMgYW5kIGRpc3BhdGNoZXMgdXBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gdmFsdWVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBPYnNlcnZlciAodmFsdWUpIHtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIHRoaXMuZGVwID0gbmV3IERlcCgpXG4gIGRlZih2YWx1ZSwgJ19fb2JfXycsIHRoaXMpXG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGNvbnN0IGF1Z21lbnQgPSBoYXNQcm90b1xuICAgICAgPyBwcm90b0F1Z21lbnRcbiAgICAgIDogY29weUF1Z21lbnRcbiAgICBhdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cylcbiAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSlcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhbGsodmFsdWUpXG4gIH1cbn1cblxuLy8gSW5zdGFuY2UgbWV0aG9kc1xuXG4vKipcbiAqIFdhbGsgdGhyb3VnaCBlYWNoIHByb3BlcnR5IGFuZCBjb252ZXJ0IHRoZW0gaW50b1xuICogZ2V0dGVyL3NldHRlcnMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuXG4gKiB2YWx1ZSB0eXBlIGlzIE9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLndhbGsgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICB0aGlzLmNvbnZlcnQoa2V5LCBvYmpba2V5XSlcbiAgfVxufVxuXG4vKipcbiAqIE9ic2VydmUgYSBsaXN0IG9mIEFycmF5IGl0ZW1zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmVBcnJheSA9IGZ1bmN0aW9uIChpdGVtcykge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIG9ic2VydmUoaXRlbXNbaV0pXG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgcHJvcGVydHkgaW50byBnZXR0ZXIvc2V0dGVyIHNvIHdlIGNhbiBlbWl0XG4gKiB0aGUgZXZlbnRzIHdoZW4gdGhlIHByb3BlcnR5IGlzIGFjY2Vzc2VkL2NoYW5nZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uIChrZXksIHZhbCkge1xuICBkZWZpbmVSZWFjdGl2ZSh0aGlzLnZhbHVlLCBrZXksIHZhbClcbn1cblxuLyoqXG4gKiBBZGQgYW4gb3duZXIgdm0sIHNvIHRoYXQgd2hlbiAkc2V0LyRkZWxldGUgbXV0YXRpb25zXG4gKiBoYXBwZW4gd2UgY2FuIG5vdGlmeSBvd25lciB2bXMgdG8gcHJveHkgdGhlIGtleXMgYW5kXG4gKiBkaWdlc3QgdGhlIHdhdGNoZXJzLiBUaGlzIGlzIG9ubHkgY2FsbGVkIHdoZW4gdGhlIG9iamVjdFxuICogaXMgb2JzZXJ2ZWQgYXMgYW4gaW5zdGFuY2UncyByb290ICRkYXRhLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5hZGRWbSA9IGZ1bmN0aW9uICh2bSkge1xuICAodGhpcy52bXMgfHwgKHRoaXMudm1zID0gW10pKS5wdXNoKHZtKVxufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBvd25lciB2bS4gVGhpcyBpcyBjYWxsZWQgd2hlbiB0aGUgb2JqZWN0IGlzXG4gKiBzd2FwcGVkIG91dCBhcyBhbiBpbnN0YW5jZSdzICRkYXRhIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUucmVtb3ZlVm0gPSBmdW5jdGlvbiAodm0pIHtcbiAgcmVtb3ZlKHRoaXMudm1zLCB2bSlcbn1cblxuLy8gaGVscGVyc1xuXG4vKipcbiAqIEF1Z21lbnQgYW4gdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBpbnRlcmNlcHRpbmdcbiAqIHRoZSBwcm90b3R5cGUgY2hhaW4gdXNpbmcgX19wcm90b19fXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3R9IHNyY1xuICovXG5cbmZ1bmN0aW9uIHByb3RvQXVnbWVudCAodGFyZ2V0LCBzcmMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgdGFyZ2V0Ll9fcHJvdG9fXyA9IHNyY1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXByb3RvICovXG59XG5cbi8qKlxuICogQXVnbWVudCBhbiB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGRlZmluaW5nXG4gKiBoaWRkZW4gcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gdGFyZ2V0XG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG9cbiAqL1xuXG5mdW5jdGlvbiBjb3B5QXVnbWVudCAodGFyZ2V0LCBzcmMsIGtleXMpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBkZWYodGFyZ2V0LCBrZXksIHNyY1trZXldKVxuICB9XG59XG5cbi8qKlxuICogQXR0ZW1wdCB0byBjcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgZm9yIGEgdmFsdWUsXG4gKiByZXR1cm5zIHRoZSBuZXcgb2JzZXJ2ZXIgaWYgc3VjY2Vzc2Z1bGx5IG9ic2VydmVkLFxuICogb3IgdGhlIGV4aXN0aW5nIG9ic2VydmVyIGlmIHRoZSB2YWx1ZSBhbHJlYWR5IGhhcyBvbmUuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtWdWV9IFt2bV1cbiAqIEByZXR1cm4ge09ic2VydmVyfHVuZGVmaW5lZH1cbiAqIEBzdGF0aWNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZSAodmFsdWUsIHZtKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgbGV0IG9iXG4gIGlmIChoYXNPd24odmFsdWUsICdfX29iX18nKSAmJiB2YWx1ZS5fX29iX18gaW5zdGFuY2VvZiBPYnNlcnZlcikge1xuICAgIG9iID0gdmFsdWUuX19vYl9fXG4gIH0gZWxzZSBpZiAoXG4gICAgKGlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKSAmJlxuICAgIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpICYmXG4gICAgIXZhbHVlLl9pc1Z1ZVxuICApIHtcbiAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSlcbiAgfVxuICBpZiAob2IgJiYgdm0pIHtcbiAgICBvYi5hZGRWbSh2bSlcbiAgfVxuICByZXR1cm4gb2Jcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiBhbiBPYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lUmVhY3RpdmUgKG9iaiwga2V5LCB2YWwpIHtcbiAgY29uc3QgZGVwID0gbmV3IERlcCgpXG5cbiAgY29uc3QgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KVxuICBpZiAocHJvcGVydHkgJiYgcHJvcGVydHkuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gY2F0ZXIgZm9yIHByZS1kZWZpbmVkIGdldHRlci9zZXR0ZXJzXG4gIGNvbnN0IGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldFxuICBjb25zdCBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXRcblxuICBsZXQgY2hpbGRPYiA9IG9ic2VydmUodmFsKVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlR2V0dGVyICgpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbFxuICAgICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgICAgZGVwLmRlcGVuZCgpXG4gICAgICAgIGlmIChjaGlsZE9iKSB7XG4gICAgICAgICAgY2hpbGRPYi5kZXAuZGVwZW5kKClcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBmb3IgKGxldCBlLCBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgZSA9IHZhbHVlW2ldXG4gICAgICAgICAgICBlICYmIGUuX19vYl9fICYmIGUuX19vYl9fLmRlcC5kZXBlbmQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlU2V0dGVyIChuZXdWYWwpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbFxuICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gbmV3VmFsXG4gICAgICB9XG4gICAgICBjaGlsZE9iID0gb2JzZXJ2ZShuZXdWYWwpXG4gICAgICBkZXAubm90aWZ5KClcbiAgICB9XG4gIH0pXG59XG5cbi8qKlxuICogU2V0IGEgcHJvcGVydHkgb24gYW4gb2JqZWN0LiBBZGRzIHRoZSBuZXcgcHJvcGVydHkgYW5kXG4gKiB0cmlnZ2VycyBjaGFuZ2Ugbm90aWZpY2F0aW9uIGlmIHRoZSBwcm9wZXJ0eSBkb2Vzbid0XG4gKiBhbHJlYWR5IGV4aXN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcHVibGljXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldCAob2JqLCBrZXksIHZhbCkge1xuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iai5zcGxpY2Uoa2V5LCAxLCB2YWwpXG4gIH1cbiAgaWYgKGhhc093bihvYmosIGtleSkpIHtcbiAgICBvYmpba2V5XSA9IHZhbFxuICAgIHJldHVyblxuICB9XG4gIGlmIChvYmouX2lzVnVlKSB7XG4gICAgc2V0KG9iai5fZGF0YSwga2V5LCB2YWwpXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qgb2IgPSBvYmouX19vYl9fXG4gIGlmICghb2IpIHtcbiAgICBvYmpba2V5XSA9IHZhbFxuICAgIHJldHVyblxuICB9XG4gIG9iLmNvbnZlcnQoa2V5LCB2YWwpXG4gIG9iLmRlcC5ub3RpZnkoKVxuICBpZiAob2Iudm1zKSB7XG4gICAgbGV0IGkgPSBvYi52bXMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY29uc3Qgdm0gPSBvYi52bXNbaV1cbiAgICAgIHByb3h5KHZtLCBrZXkpXG4gICAgICB2bS4kZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbi8qKlxuICogRGVsZXRlIGEgcHJvcGVydHkgYW5kIHRyaWdnZXIgY2hhbmdlIGlmIG5lY2Vzc2FyeS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbCAob2JqLCBrZXkpIHtcbiAgaWYgKCFoYXNPd24ob2JqLCBrZXkpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZGVsZXRlIG9ialtrZXldXG4gIGNvbnN0IG9iID0gb2JqLl9fb2JfX1xuXG4gIGlmICghb2IpIHtcbiAgICBpZiAob2JqLl9pc1Z1ZSkge1xuICAgICAgZGVsZXRlIG9iai5fZGF0YVtrZXldXG4gICAgICBvYmouJGZvcmNlVXBkYXRlKClcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgb2IuZGVwLm5vdGlmeSgpXG4gIGlmIChvYi52bXMpIHtcbiAgICBsZXQgaSA9IG9iLnZtcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjb25zdCB2bSA9IG9iLnZtc1tpXVxuICAgICAgdW5wcm94eSh2bSwga2V5KVxuICAgICAgdm0uJGZvcmNlVXBkYXRlKClcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgS0VZX1dPUkRTID0gWyckaW5kZXgnLCAnJHZhbHVlJywgJyRldmVudCddXG5leHBvcnQgZnVuY3Rpb24gcHJveHkgKHZtLCBrZXkpIHtcbiAgaWYgKEtFWV9XT1JEUy5pbmRleE9mKGtleSkgPiAtMSB8fCAhaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZtLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIHByb3h5R2V0dGVyICgpIHtcbiAgICAgICAgcmV0dXJuIHZtLl9kYXRhW2tleV1cbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHByb3h5U2V0dGVyICh2YWwpIHtcbiAgICAgICAgdm0uX2RhdGFba2V5XSA9IHZhbFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucHJveHkgKHZtLCBrZXkpIHtcbiAgaWYgKCFpc1Jlc2VydmVkKGtleSkpIHtcbiAgICBkZWxldGUgdm1ba2V5XVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL2xpYi92bS9jb3JlL29ic2VydmVyLmpzXG4gKiovIiwiaW1wb3J0IHsgZGVmIH0gZnJvbSAnLi4vLi4vdXRpbC9pbmRleCdcblxuY29uc3QgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZVxuZXhwb3J0IGNvbnN0IGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90bylcblxuLyoqXG4gKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAqL1xuXG47W1xuICAncHVzaCcsXG4gICdwb3AnLFxuICAnc2hpZnQnLFxuICAndW5zaGlmdCcsXG4gICdzcGxpY2UnLFxuICAnc29ydCcsXG4gICdyZXZlcnNlJ1xuXVxuLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgY29uc3Qgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF1cbiAgZGVmKGFycmF5TWV0aG9kcywgbWV0aG9kLCBmdW5jdGlvbiBtdXRhdG9yICgpIHtcbiAgICAvLyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50czpcbiAgICAvLyBodHRwOi8vanNwZXJmLmNvbS9jbG9zdXJlLXdpdGgtYXJndW1lbnRzXG4gICAgbGV0IGkgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgY29uc3QgYXJncyA9IG5ldyBBcnJheShpKVxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV1cbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncylcbiAgICBjb25zdCBvYiA9IHRoaXMuX19vYl9fXG4gICAgbGV0IGluc2VydGVkXG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3NcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3Vuc2hpZnQnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3NcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKVxuICAgICAgICBicmVha1xuICAgIH1cbiAgICBpZiAoaW5zZXJ0ZWQpIG9iLm9ic2VydmVBcnJheShpbnNlcnRlZClcbiAgICAvLyBub3RpZnkgY2hhbmdlXG4gICAgb2IuZGVwLm5vdGlmeSgpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KVxufSlcblxuLyoqXG4gKiBTd2FwIHRoZSBlbGVtZW50IGF0IHRoZSBnaXZlbiBpbmRleCB3aXRoIGEgbmV3IHZhbHVlXG4gKiBhbmQgZW1pdHMgY29ycmVzcG9uZGluZyBldmVudC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJuIHsqfSAtIHJlcGxhY2VkIGVsZW1lbnRcbiAqL1xuXG5kZWYoXG4gIGFycmF5UHJvdG8sXG4gICckc2V0JyxcbiAgZnVuY3Rpb24gJHNldCAoaW5kZXgsIHZhbCkge1xuICAgIGlmIChpbmRleCA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5sZW5ndGggPSBpbmRleCArIDFcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3BsaWNlKGluZGV4LCAxLCB2YWwpWzBdXG4gIH1cbilcblxuLyoqXG4gKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gcmVtb3ZlIHRoZSBlbGVtZW50IGF0IGdpdmVuIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5kZWYoXG4gIGFycmF5UHJvdG8sXG4gICckcmVtb3ZlJyxcbiAgZnVuY3Rpb24gJHJlbW92ZSAoaW5kZXgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm5cbiAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgaW5kZXggPSB0aGlzLmluZGV4T2YoaW5kZXgpXG4gICAgfVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cbilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvbGliL3ZtL2NvcmUvYXJyYXkuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFZpZXdNb2RlbCB0ZW1wbGF0ZSBwYXJzZXIgJiBkYXRhLWJpbmRpbmcgcHJvY2Vzc1xuICpcbiAqIHJlcXVpcmVkOlxuICogaW5kZXguanM6IFZtXG4gKiBkb20taGVscGVyLmpzOiBfY3JlYXRlRWxlbWVudCwgX2NyZWF0ZUJsb2NrXG4gKiBkb20taGVscGVyLmpzOiBfYXR0YWNoVGFyZ2V0LCBfbW92ZVRhcmdldCwgX3JlbW92ZVRhcmdldFxuICogZGlyZWN0aXZlLmpzOiBfYmluZEVsZW1lbnQsIF9iaW5kU3ViVm0sIF93YXRjaFxuICogZXZlbnRzLmpzOiAkb25cbiAqL1xuXG5pbXBvcnQgKiBhcyBfIGZyb20gJy4uL3V0aWwvaW5kZXgnXG5cbi8qKlxuICogYnVpbGQoZXh0ZXJuYWxEaXJzKVxuICogICBjcmVhdGVWbSgpXG4gKiAgIG1lcmdlKGV4dGVybmFsRGlycywgZGlycylcbiAqICAgY29tcGlsZSh0ZW1wbGF0ZSwgcGFyZW50Tm9kZSlcbiAqICAgICBpZiAodHlwZSBpcyBjb250ZW50KSBjcmVhdGUgY29udGVudE5vZGVcbiAqICAgICBlbHNlIGlmIChkaXJzIGhhdmUgdi1mb3IpIGZvcmVhY2ggLT4gY3JlYXRlIGNvbnRleHRcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0Rm9yLCBwYXJlbnROb2RlKTogZGlmZihsaXN0KSBvbmNoYW5nZVxuICogICAgIGVsc2UgaWYgKGRpcnMgaGF2ZSB2LWlmKSBhc3NlcnRcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0SWYsIHBhcmVudE5vZGUpOiB0b2dnbGUoc2hvd24pIG9uY2hhbmdlXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBuYXRpdmUpXG4gKiAgICAgICBzZXQoZGlycyk6IHVwZGF0ZShpZC9hdHRyL3N0eWxlL2NsYXNzKSBvbmNoYW5nZVxuICogICAgICAgYXBwZW5kKHRlbXBsYXRlLCBwYXJlbnROb2RlKVxuICogICAgICAgZm9yZWFjaCBjaGlsZE5vZGVzIC0+IGNvbXBpbGUoY2hpbGROb2RlLCB0ZW1wbGF0ZSlcbiAqICAgICBlbHNlIGlmICh0eXBlIGlzIGN1c3RvbSlcbiAqICAgICAgIGFkZENoaWxkVm0odm0sIHBhcmVudFZtKVxuICogICAgICAgYnVpbGQoZXh0ZXJuYWxEaXJzKVxuICogICAgICAgZm9yZWFjaCBjaGlsZE5vZGVzIC0+IGNvbXBpbGUoY2hpbGROb2RlLCB0ZW1wbGF0ZSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9idWlsZCgpIHtcbiAgY29uc3Qgb3B0ID0gdGhpcy5fb3B0aW9ucyB8fCB7fVxuICBjb25zdCB0ZW1wbGF0ZSA9IG9wdC50ZW1wbGF0ZSB8fCB7fVxuXG4gIGlmIChvcHQucmVwbGFjZSkge1xuICAgIGlmICh0ZW1wbGF0ZS5jaGlsZHJlbiAmJiB0ZW1wbGF0ZS5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuX2NvbXBpbGUodGVtcGxhdGUuY2hpbGRyZW5bMF0sIHRoaXMuX3BhcmVudEVsKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbXBpbGUodGVtcGxhdGUuY2hpbGRyZW4sIHRoaXMuX3BhcmVudEVsKVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICB0aGlzLl9jb21waWxlKHRlbXBsYXRlLCB0aGlzLl9wYXJlbnRFbClcbiAgfVxuXG4gIF8uZGVidWcoYFwicmVhZHlcIiBsaWZlY3ljbGUgaW4gVm0oJHt0aGlzLl90eXBlfSlgKVxuICB0aGlzLiRlbWl0KCdob29rOnJlYWR5JylcbiAgdGhpcy5fcmVhZHkgPSB0cnVlXG59XG5cbi8qKlxuICogR2VuZXJhdGUgZWxlbWVudHMgYnkgY2hpbGQgb3IgY2hpbGRyZW4gYW5kIGFwcGVuZCB0byBwYXJlbnQgZWxlbWVudHMuXG4gKiBSb290IGVsZW1lbnQgaW5mbyB3b3VsZCBiZSBtZXJnZWQgaWYgaGFzLiBUaGUgZmlyc3QgYXJndW1lbnQgbWF5IGJlIGFuIGFycmF5XG4gKiBpZiB0aGUgcm9vdCBlbGVtZW50IHdpdGggb3B0aW9ucy5yZXBsYWNlIGhhcyBub3Qgb25seSBvbmUgY2hpbGQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9ICAgICAgIGRlc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSAgICAgICBtZXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfY29tcGlsZSh0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgbGV0IGNvbnRleHQgPSB0aGlzXG4gIGlmIChjb250ZXh0Ll90YXJnZXRJc0ZyYWdtZW50KHRhcmdldCkpIHtcbiAgICBjb250ZXh0Ll9jb21waWxlRnJhZ21lbnQodGFyZ2V0LCBkZXN0LCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIG1ldGEgPSBtZXRhIHx8IHt9XG4gIGlmIChjb250ZXh0Ll90YXJnZXRJc0NvbnRlbnQodGFyZ2V0KSkge1xuICAgIF8uZGVidWcoJ2NvbXBpbGUgXCJjb250ZW50XCIgYmxvY2sgYnknLCB0YXJnZXQpXG4gICAgY29udGV4dC5fY29udGVudCA9IGNvbnRleHQuX2NyZWF0ZUJsb2NrKGRlc3QpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoY29udGV4dC5fdGFyZ2V0TmVlZENoZWNrUmVwZWF0KHRhcmdldCwgbWV0YSkpIHtcbiAgICBfLmRlYnVnKCdjb21waWxlIFwicmVwZWF0XCIgbG9naWMgYnknLCB0YXJnZXQpXG4gICAgY29udGV4dC5fY29tcGlsZVJlcGVhdCh0YXJnZXQsIGRlc3QpXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKGNvbnRleHQuX3RhcmdldE5lZWRDaGVja1Nob3duKHRhcmdldCwgbWV0YSkpIHtcbiAgICBfLmRlYnVnKCdjb21waWxlIFwiaWZcIiBsb2dpYyBieScsIHRhcmdldClcbiAgICBjb250ZXh0Ll9jb21waWxlU2hvd24odGFyZ2V0LCBkZXN0LCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHR5cGVHZXR0ZXIgPSBtZXRhLnR5cGUgfHwgdGFyZ2V0LnR5cGVcbiAgaWYgKGNvbnRleHQuX3RhcmdldE5lZWRDaGVja1R5cGUodHlwZUdldHRlciwgbWV0YSkpIHtcbiAgICBjb250ZXh0Ll9jb21waWxlVHlwZSh0YXJnZXQsIGRlc3QsIHR5cGVHZXR0ZXIsIG1ldGEpXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgdHlwZSA9IHR5cGVHZXR0ZXJcbiAgY29uc3QgY29tcG9uZW50ID0gY29udGV4dC5fdGFyZ2V0SXNDb21wb3NlZCh0YXJnZXQsIHR5cGUpXG4gIGlmIChjb21wb25lbnQpIHtcbiAgICBfLmRlYnVnKCdjb21waWxlIGNvbXBvc2VkIGNvbXBvbmVudCBieScsIHRhcmdldClcbiAgICBjb250ZXh0Ll9jb21waWxlQ3VzdG9tQ29tcG9uZW50KGNvbXBvbmVudCwgdGFyZ2V0LCBkZXN0LCB0eXBlLCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIF8uZGVidWcoJ2NvbXBpbGUgbmF0aXZlIGNvbXBvbmVudCBieScsIHRhcmdldClcbiAgY29udGV4dC5fY29tcGlsZU5hdGl2ZUNvbXBvbmVudCh0YXJnZXQsIGRlc3QsIHR5cGUpXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IGlzIGEgZnJhZ21lbnQgKGFuIGFycmF5KS5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfdGFyZ2V0SXNGcmFnbWVudCh0YXJnZXQpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCB0eXBlIGlzIGNvbnRlbnQvc2xvdC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfdGFyZ2V0SXNDb250ZW50KHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0LnR5cGUgPT09ICdjb250ZW50JyB8fCB0YXJnZXQudHlwZSA9PT0gJ3Nsb3QnXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IG5lZWQgdG8gY29tcGlsZSBieSBhIGxpc3QuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9ICBtZXRhXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gX3RhcmdldE5lZWRDaGVja1JlcGVhdCh0YXJnZXQsIG1ldGEpIHtcbiAgcmV0dXJuICFtZXRhLmhhc093blByb3BlcnR5KCdyZXBlYXQnKSAmJiB0YXJnZXQucmVwZWF0XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IG5lZWQgdG8gY29tcGlsZSBieSBhIGJvb2xlYW4gdmFsdWUuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9ICBtZXRhXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gX3RhcmdldE5lZWRDaGVja1Nob3duKHRhcmdldCwgbWV0YSkge1xuICByZXR1cm4gIW1ldGEuaGFzT3duUHJvcGVydHkoJ3Nob3duJykgJiYgdGFyZ2V0LnNob3duXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IG5lZWQgdG8gY29tcGlsZSBieSBhIGR5bmFtaWMgdHlwZS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd8ZnVuY3Rpb259IHR5cGVHZXR0ZXJcbiAqIEBwYXJhbSAge29iamVjdH0gICAgICAgICAgbWV0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF90YXJnZXROZWVkQ2hlY2tUeXBlKHR5cGVHZXR0ZXIsIG1ldGEpIHtcbiAgcmV0dXJuICh0eXBlb2YgdHlwZUdldHRlciA9PT0gJ2Z1bmN0aW9uJykgJiYgIW1ldGEuaGFzT3duUHJvcGVydHkoJ3R5cGUnKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoaXMga2luZCBvZiBjb21wb25lbnQgaXMgY29tcG9zZWQuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgdHlwZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF90YXJnZXRJc0NvbXBvc2VkKHRhcmdldCwgdHlwZSkge1xuICBsZXQgY29tcG9uZW50XG4gIGlmICh0aGlzLl9hcHAgJiYgdGhpcy5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcCkge1xuICAgIGNvbXBvbmVudCA9IHRoaXMuX2FwcC5jdXN0b21Db21wb25lbnRNYXBbdHlwZV1cbiAgfVxuICBpZiAodGhpcy5fb3B0aW9ucyAmJiB0aGlzLl9vcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICBjb21wb25lbnQgPSB0aGlzLl9vcHRpb25zLmNvbXBvbmVudHNbdHlwZV1cbiAgfVxuICBpZiAodGFyZ2V0LmNvbXBvbmVudCkge1xuICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudCB8fCB7fVxuICB9XG4gIHJldHVybiBjb21wb25lbnRcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgbGlzdCBvZiB0YXJnZXRzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gbWV0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NvbXBpbGVGcmFnbWVudCh0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgY29uc3QgZnJhZ0Jsb2NrID0gdGhpcy5fY3JlYXRlQmxvY2soZGVzdClcbiAgdGFyZ2V0LmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgdGhpcy5fY29tcGlsZShjaGlsZCwgZnJhZ0Jsb2NrLCBtZXRhKVxuICB9KVxufVxuXG4vKipcbiAqIENvbXBpbGUgYSB0YXJnZXQgd2l0aCByZXBlYXQgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfY29tcGlsZVJlcGVhdCh0YXJnZXQsIGRlc3QpIHtcbiAgY29uc3QgcmVwZWF0ID0gdGFyZ2V0LnJlcGVhdFxuICBjb25zdCBvbGRTdHlsZSA9IHR5cGVvZiByZXBlYXQgPT09ICdmdW5jdGlvbidcbiAgbGV0IGdldHRlciA9IHJlcGVhdC5nZXR0ZXIgfHwgcmVwZWF0LmV4cHJlc3Npb24gfHwgcmVwZWF0XG4gIGlmICh0eXBlb2YgZ2V0dGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgZ2V0dGVyID0gZnVuY3Rpb24gKCkge3JldHVybiBbXX1cbiAgfVxuICBjb25zdCBrZXkgPSByZXBlYXQua2V5IHx8ICckaW5kZXgnXG4gIGNvbnN0IHZhbHVlID0gcmVwZWF0LnZhbHVlIHx8ICckdmFsdWUnXG4gIGNvbnN0IHRyYWNrQnkgPSByZXBlYXQudHJhY2tCeSB8fCB0YXJnZXQudHJhY2tCeSB8fFxuICAgICh0YXJnZXQuYXR0ciAmJiB0YXJnZXQuYXR0ci50cmFja0J5KSB8fCBrZXlcblxuICBjb25zdCBmcmFnQmxvY2sgPSB0aGlzLl9jcmVhdGVCbG9jayhkZXN0KVxuICBmcmFnQmxvY2suY2hpbGRyZW4gPSBbXVxuICBmcmFnQmxvY2suZGF0YSA9IFtdXG4gIGZyYWdCbG9jay52bXMgPSBbXVxuXG4gIHRoaXMuX2JpbmRSZXBlYXQodGFyZ2V0LCBmcmFnQmxvY2ssIHtnZXR0ZXIsIGtleSwgdmFsdWUsIHRyYWNrQnksIG9sZFN0eWxlfSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggaWYgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gbWV0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NvbXBpbGVTaG93bih0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgY29uc3QgbmV3TWV0YSA9IHtzaG93bjogdHJ1ZX1cbiAgY29uc3QgZnJhZ0Jsb2NrID0gdGhpcy5fY3JlYXRlQmxvY2soZGVzdClcblxuICBpZiAoZGVzdC5lbGVtZW50ICYmIGRlc3QuY2hpbGRyZW4pIHtcbiAgICBkZXN0LmNoaWxkcmVuLnB1c2goZnJhZ0Jsb2NrKVxuICB9XG5cbiAgaWYgKG1ldGEucmVwZWF0KSB7XG4gICAgbmV3TWV0YS5yZXBlYXQgPSBtZXRhLnJlcGVhdFxuICB9XG5cbiAgdGhpcy5fYmluZFNob3duKHRhcmdldCwgZnJhZ0Jsb2NrLCBuZXdNZXRhKVxufVxuXG4vKipcbiAqIENvbXBpbGUgYSB0YXJnZXQgd2l0aCBkeW5hbWljIGNvbXBvbmVudCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9ICAgZGVzdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gdHlwZUdldHRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NvbXBpbGVUeXBlKHRhcmdldCwgZGVzdCwgdHlwZUdldHRlciwgbWV0YSkge1xuICBjb25zdCB0eXBlID0gdHlwZUdldHRlci5jYWxsKHRoaXMpXG4gIGNvbnN0IG5ld01ldGEgPSBPYmplY3QuYXNzaWduKHt0eXBlfSwgbWV0YSlcbiAgY29uc3QgZnJhZ0Jsb2NrID0gdGhpcy5fY3JlYXRlQmxvY2soZGVzdClcblxuICBpZiAoZGVzdC5lbGVtZW50ICYmIGRlc3QuY2hpbGRyZW4pIHtcbiAgICBkZXN0LmNoaWxkcmVuLnB1c2goZnJhZ0Jsb2NrKVxuICB9XG5cbiAgdGhpcy5fd2F0Y2godHlwZUdldHRlciwgKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgbmV3TWV0YSA9IE9iamVjdC5hc3NpZ24oe3R5cGU6IHZhbHVlfSwgbWV0YSlcbiAgICB0aGlzLl9yZW1vdmVCbG9jayhmcmFnQmxvY2ssIHRydWUpXG4gICAgdGhpcy5fY29tcGlsZSh0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbiAgfSlcblxuICB0aGlzLl9jb21waWxlKHRhcmdldCwgZnJhZ0Jsb2NrLCBuZXdNZXRhKVxufVxuXG4vKipcbiAqIENvbXBpbGUgYSBjb21wb3NlZCBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfY29tcGlsZUN1c3RvbUNvbXBvbmVudChjb21wb25lbnQsIHRhcmdldCwgZGVzdCwgdHlwZSwgbWV0YSkge1xuICBjb25zdCBWbSA9IHRoaXMuY29uc3RydWN0b3JcbiAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgY29uc3Qgc3ViVm0gPSBuZXcgVm0odHlwZSwgY29tcG9uZW50LCBjb250ZXh0LCBkZXN0LCB1bmRlZmluZWQsIHtcbiAgICAnaG9vazppbml0JzogZnVuY3Rpb24gKCkge1xuICAgICAgY29udGV4dC5fc2V0SWQodGFyZ2V0LmlkLCBudWxsLCB0aGlzKVxuICAgIH0sXG4gICAgJ2hvb2s6Y3JlYXRlZCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnRleHQuX2JpbmRTdWJWbSh0aGlzLCB0YXJnZXQsIG1ldGEucmVwZWF0KVxuICAgIH0sXG4gICAgJ2hvb2s6cmVhZHknOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5fY29udGVudCkge1xuICAgICAgICBjb250ZXh0Ll9jb21waWxlQ2hpbGRyZW4odGFyZ2V0LCB0aGlzLl9jb250ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgdGhpcy5fYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZChzdWJWbSwgdGFyZ2V0KVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIGVsZW1lbnQgZnJvbSB0ZW1wbGF0ZSBhbmQgYXR0YWNoIHRvIHRoZSBkZXN0IGlmIG5lZWRlZC5cbiAqIFRoZSB0aW1lIHRvIGF0dGFjaCBkZXBlbmRzIG9uIHdoZXRoZXIgdGhlIG1vZGUgc3RhdHVzIGlzIG5vZGUgb3IgdHJlZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGVtcGxhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NvbXBpbGVOYXRpdmVDb21wb25lbnQodGVtcGxhdGUsIGRlc3QsIHR5cGUpIHtcblxuICB0aGlzLl9hcHBseU5haXR2ZUNvbXBvbmVudE9wdGlvbnModGVtcGxhdGUpXG5cbiAgbGV0IGVsZW1lbnRcbiAgaWYgKGRlc3QucmVmID09PSAnX2RvY3VtZW50RWxlbWVudCcpIHtcbiAgICAvLyBpZiBpdHMgcGFyZW50IGlzIGRvY3VtZW50RWxlbWVudCB0aGVuIGl0J3MgYSBib2R5XG4gICAgXy5kZWJ1ZygnY29tcGlsZSB0byBjcmVhdGUgYm9keSBmb3InLCB0eXBlKVxuICAgIGVsZW1lbnQgPSB0aGlzLl9jcmVhdGVCb2R5KHR5cGUpXG4gIH0gZWxzZSB7XG4gICAgXy5kZWJ1ZygnY29tcGlsZSB0byBjcmVhdGUgZWxlbWVudCBmb3InLCB0eXBlKVxuICAgIGVsZW1lbnQgPSB0aGlzLl9jcmVhdGVFbGVtZW50KHR5cGUpXG4gIH1cbiAgLy8gVE9ETyBpdCB3YXMgYSByb290IGVsZW1lbnQgd2hlbiBub3QgaW4gYSBmcmFnbWVudFxuICBpZiAoIXRoaXMuX3Jvb3RFbCkge1xuICAgIHRoaXMuX3Jvb3RFbCA9IGVsZW1lbnRcbiAgfVxuXG4gIHRoaXMuX2JpbmRFbGVtZW50KGVsZW1lbnQsIHRlbXBsYXRlKVxuXG4gIGlmICh0ZW1wbGF0ZS5hdHRyICYmIHRlbXBsYXRlLmF0dHIuYXBwZW5kKSB7IC8vIGJhY2t3YXJkLCBhcHBlbmQgcHJvcCBpbiBhdHRyXG4gICAgdGVtcGxhdGUuYXBwZW5kID0gdGVtcGxhdGUuYXR0ci5hcHBlbmRcbiAgfVxuXG4gIGlmICh0ZW1wbGF0ZS5hcHBlbmQpIHsgLy8gZ2l2ZSB0aGUgYXBwZW5kIGF0dHJpYnV0ZSBmb3IgaW9zIGFkYXB0YXRpb25cbiAgICBlbGVtZW50LmF0dHIgPSBlbGVtZW50LmF0dHIgfHwge31cbiAgICBlbGVtZW50LmF0dHIuYXBwZW5kID0gdGVtcGxhdGUuYXBwZW5kXG4gIH1cblxuICBjb25zdCB0cmVlTW9kZSA9IHRlbXBsYXRlLmFwcGVuZCA9PT0gJ3RyZWUnXG4gIGlmICghdHJlZU1vZGUpIHtcbiAgICBfLmRlYnVnKCdjb21waWxlIHRvIGFwcGVuZCBzaW5nbGUgbm9kZSBmb3InLCBlbGVtZW50KVxuICAgIHRoaXMuX2F0dGFjaFRhcmdldChlbGVtZW50LCBkZXN0KVxuICB9XG4gIHRoaXMuX2NvbXBpbGVDaGlsZHJlbih0ZW1wbGF0ZSwgZWxlbWVudClcbiAgaWYgKHRyZWVNb2RlKSB7XG4gICAgXy5kZWJ1ZygnY29tcGlsZSB0byBhcHBlbmQgd2hvbGUgdHJlZSBmb3InLCBlbGVtZW50KVxuICAgIHRoaXMuX2F0dGFjaFRhcmdldChlbGVtZW50LCBkZXN0KVxuICB9XG59XG5cbi8qKlxuICogU2V0IGFsbCBjaGlsZHJlbiB0byBhIGNlcnRhaW4gcGFyZW50IGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NvbXBpbGVDaGlsZHJlbih0ZW1wbGF0ZSwgZGVzdCkge1xuICBjb25zdCBjaGlsZHJlbiA9IHRlbXBsYXRlLmNoaWxkcmVuXG4gIGlmIChjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdGhpcy5fY29tcGlsZShjaGlsZCwgZGVzdClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogV2F0Y2ggdGhlIGxpc3QgdXBkYXRlIGFuZCByZWZyZXNoIHRoZSBjaGFuZ2VzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmcmFnQmxvY2sge3ZtcywgZGF0YSwgY2hpbGRyZW59XG4gKiBAcGFyYW0ge29iamVjdH0gaW5mbyAgICAgIHtnZXR0ZXIsIGtleSwgdmFsdWUsIHRyYWNrQnksIG9sZFN0eWxlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2JpbmRSZXBlYXQodGFyZ2V0LCBmcmFnQmxvY2ssIGluZm8pIHtcbiAgY29uc3Qgdm1zID0gZnJhZ0Jsb2NrLnZtc1xuICBjb25zdCBjaGlsZHJlbiA9IGZyYWdCbG9jay5jaGlsZHJlblxuICBjb25zdCB7Z2V0dGVyLCB0cmFja0J5LCBvbGRTdHlsZX0gPSBpbmZvXG4gIGNvbnN0IGtleU5hbWUgPSBpbmZvLmtleVxuICBjb25zdCB2YWx1ZU5hbWUgPSBpbmZvLnZhbHVlXG5cbiAgZnVuY3Rpb24gY29tcGlsZUl0ZW0oaXRlbSwgaW5kZXgsIGNvbnRleHQpIHtcbiAgICBsZXQgbWVyZ2VkRGF0YVxuICAgIGlmIChvbGRTdHlsZSkge1xuICAgICAgbWVyZ2VkRGF0YSA9IGl0ZW1cbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbWVyZ2VkRGF0YVtrZXlOYW1lXSA9IGluZGV4XG4gICAgICAgIGlmICghbWVyZ2VkRGF0YS5oYXNPd25Qcm9wZXJ0eSgnSU5ERVgnKSkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZXJnZWREYXRhLCAnSU5ERVgnLCB7XG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICBfLndhcm4oJ1wiSU5ERVhcIiBpbiByZXBlYXQgaXMgZGVwcmVjYXRlZCwnICtcbiAgICAgICAgICAgICAgICAnIHBsZWFzZSB1c2UgXCIkaW5kZXhcIiBpbnN0ZWFkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbWVyZ2VkRGF0YSA9IHt9XG4gICAgICBtZXJnZWREYXRhW2tleU5hbWVdID0gaW5kZXhcbiAgICAgIG1lcmdlZERhdGFbdmFsdWVOYW1lXSA9IGl0ZW1cbiAgICB9XG4gICAgY29udGV4dCA9IGNvbnRleHQuX21lcmdlQ29udGV4dChtZXJnZWREYXRhKVxuICAgIHZtcy5wdXNoKGNvbnRleHQpXG4gICAgY29udGV4dC5fY29tcGlsZSh0YXJnZXQsIGZyYWdCbG9jaywge3JlcGVhdDogaXRlbX0pXG4gIH1cblxuICBjb25zdCBsaXN0ID0gdGhpcy5fd2F0Y2hCbG9jayhmcmFnQmxvY2ssIGdldHRlciwgJ3JlcGVhdCcsXG4gICAgKGRhdGEpID0+IHtcbiAgICAgIF8uZGVidWcoJ3RoZSBcInJlcGVhdFwiIGl0ZW0gaGFzIGNoYW5nZWQnLCBkYXRhKVxuXG4gICAgICBpZiAoIWZyYWdCbG9jaykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2xkQ2hpbGRyZW4gPSBjaGlsZHJlbi5zbGljZSgpXG4gICAgICBjb25zdCBvbGRWbXMgPSB2bXMuc2xpY2UoKVxuICAgICAgY29uc3Qgb2xkRGF0YSA9IGZyYWdCbG9jay5kYXRhLnNsaWNlKClcbiAgICAgIC8vIDEuIGNvbGxlY3QgYWxsIG5ldyByZWZzIHRyYWNrIGJ5XG4gICAgICBjb25zdCB0cmFja01hcCA9IHt9XG4gICAgICBjb25zdCByZXVzZWRNYXAgPSB7fVxuICAgICAgZGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSB0cmFja0J5ID8gaXRlbVt0cmFja0J5XSA6IGluZGV4XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoa2V5ID09IG51bGwgfHwga2V5ID09PSAnJykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRyYWNrTWFwW2tleV0gPSBpdGVtXG4gICAgICB9KVxuXG4gICAgICAvLyAyLiByZW1vdmUgdW51c2VkIGVsZW1lbnQgZm9yZWFjaCBvbGQgaXRlbVxuICAgICAgY29uc3QgcmV1c2VkTGlzdCA9IFtdXG4gICAgICBvbGREYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRyYWNrQnkgPyBpdGVtW3RyYWNrQnldIDogaW5kZXhcbiAgICAgICAgaWYgKHRyYWNrTWFwLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICByZXVzZWRNYXBba2V5XSA9IHtcbiAgICAgICAgICAgIGl0ZW0sIGluZGV4LCBrZXksXG4gICAgICAgICAgICB0YXJnZXQ6IG9sZENoaWxkcmVuW2luZGV4XSxcbiAgICAgICAgICAgIHZtOiBvbGRWbXNbaW5kZXhdXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldXNlZExpc3QucHVzaChpdGVtKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3JlbW92ZVRhcmdldChvbGRDaGlsZHJlbltpbmRleF0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIDMuIGNyZWF0ZSBuZXcgZWxlbWVudCBmb3JlYWNoIG5ldyBpdGVtXG4gICAgICBjaGlsZHJlbi5sZW5ndGggPSAwXG4gICAgICB2bXMubGVuZ3RoID0gMFxuICAgICAgZnJhZ0Jsb2NrLmRhdGEgPSBkYXRhLnNsaWNlKClcbiAgICAgIGZyYWdCbG9jay51cGRhdGVNYXJrID0gZnJhZ0Jsb2NrLnN0YXJ0XG5cbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHJhY2tCeSA/IGl0ZW1bdHJhY2tCeV0gOiBpbmRleFxuICAgICAgICBjb25zdCByZXVzZWQgPSByZXVzZWRNYXBba2V5XVxuICAgICAgICBpZiAocmV1c2VkKSB7XG4gICAgICAgICAgaWYgKHJldXNlZC5pdGVtID09PSByZXVzZWRMaXN0WzBdKSB7XG4gICAgICAgICAgICByZXVzZWRMaXN0LnNoaWZ0KClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV1c2VkTGlzdC4kcmVtb3ZlKHJldXNlZC5pdGVtKVxuICAgICAgICAgICAgdGhpcy5fbW92ZVRhcmdldChyZXVzZWQudGFyZ2V0LCBmcmFnQmxvY2sudXBkYXRlTWFyaywgdHJ1ZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChyZXVzZWQudGFyZ2V0KVxuICAgICAgICAgIHZtcy5wdXNoKHJldXNlZC52bSlcbiAgICAgICAgICByZXVzZWQudm1ba2V5TmFtZV0gPSBpbmRleFxuICAgICAgICAgIGZyYWdCbG9jay51cGRhdGVNYXJrID0gcmV1c2VkLnRhcmdldFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbXBpbGVJdGVtKGl0ZW0sIGluZGV4LCB0aGlzKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBkZWxldGUgZnJhZ0Jsb2NrLnVwZGF0ZU1hcmtcbiAgICB9XG4gIClcblxuICBmcmFnQmxvY2suZGF0YSA9IGxpc3Quc2xpY2UoMClcbiAgbGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGNvbXBpbGVJdGVtKGl0ZW0sIGluZGV4LCB0aGlzKVxuICB9KVxufVxuXG4vKipcbiAqIFdhdGNoIHRoZSBkaXNwbGF5IHVwZGF0ZSBhbmQgYWRkL3JlbW92ZSB0aGUgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBmcmFnQmxvY2tcbiAqIEBwYXJhbSAge29iamVjdH0gY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2JpbmRTaG93bih0YXJnZXQsIGZyYWdCbG9jaywgbWV0YSkge1xuICBjb25zdCBkaXNwbGF5ID0gdGhpcy5fd2F0Y2hCbG9jayhmcmFnQmxvY2ssIHRhcmdldC5zaG93biwgJ3Nob3duJyxcbiAgICAoZGlzcGxheSkgPT4ge1xuICAgICAgXy5kZWJ1ZygndGhlIFwiaWZcIiBpdGVtIHdhcyBjaGFuZ2VkJywgZGlzcGxheSlcblxuICAgICAgaWYgKCFmcmFnQmxvY2sgfHwgISFmcmFnQmxvY2suZGlzcGxheSA9PT0gISFkaXNwbGF5KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZnJhZ0Jsb2NrLmRpc3BsYXkgPSAhIWRpc3BsYXlcbiAgICAgIGlmIChkaXNwbGF5KSB7XG4gICAgICAgIHRoaXMuX2NvbXBpbGUodGFyZ2V0LCBmcmFnQmxvY2ssIG1ldGEpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQmxvY2soZnJhZ0Jsb2NrLCB0cnVlKVxuICAgICAgfVxuICAgIH1cbiAgKVxuXG4gIGZyYWdCbG9jay5kaXNwbGF5ID0gISFkaXNwbGF5XG4gIGlmIChkaXNwbGF5KSB7XG4gICAgdGhpcy5fY29tcGlsZSh0YXJnZXQsIGZyYWdCbG9jaywgbWV0YSlcbiAgfVxufVxuXG4vKipcbiAqIFdhdGNoIGNhbGMgdmFsdWUgY2hhbmdlcyBhbmQgYXBwZW5kIGNlcnRhaW4gdHlwZSBhY3Rpb24gdG8gZGlmZmVyLlxuICogSXQgaXMgdXNlZCBmb3IgaWYgb3IgcmVwZWF0IGRhdGEtYmluZGluZyBnZW5lcmF0b3IuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgIGZyYWdCbG9ja1xuICogQHBhcmFtICB7ZnVuY3Rpb259IGNhbGNcbiAqIEBwYXJhbSAge3N0cmluZ30gICB0eXBlXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gaGFuZGxlclxuICogQHJldHVybiB7YW55fSAgICAgIGluaXQgdmFsdWUgb2YgY2FsY1xuICovXG5leHBvcnQgZnVuY3Rpb24gX3dhdGNoQmxvY2soZnJhZ0Jsb2NrLCBjYWxjLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGNvbnN0IGRpZmZlciA9IHRoaXMgJiYgdGhpcy5fYXBwICYmIHRoaXMuX2FwcC5kaWZmZXJcbiAgY29uc3QgY29uZmlnID0ge31cbiAgY29uc3QgZGVwdGggPSAoZnJhZ0Jsb2NrLmVsZW1lbnQuZGVwdGggfHwgMCkgKyAxXG5cbiAgcmV0dXJuIHRoaXMuX3dhdGNoKGNhbGMsICh2YWx1ZSkgPT4ge1xuICAgIGNvbmZpZy5sYXRlc3RWYWx1ZSA9IHZhbHVlXG4gICAgaWYgKGRpZmZlciAmJiAhY29uZmlnLnJlY29yZGVkKSB7XG4gICAgICBkaWZmZXIuYXBwZW5kKHR5cGUsIGRlcHRoLCBmcmFnQmxvY2suYmxvY2tJZCwgKCkgPT4ge1xuICAgICAgICBjb25zdCBsYXRlc3RWYWx1ZSA9IGNvbmZpZy5sYXRlc3RWYWx1ZVxuICAgICAgICBoYW5kbGVyKGxhdGVzdFZhbHVlKVxuICAgICAgICBjb25maWcucmVjb3JkZWQgPSBmYWxzZVxuICAgICAgICBjb25maWcubGF0ZXN0VmFsdWUgPSB1bmRlZmluZWRcbiAgICAgIH0pXG4gICAgfVxuICAgIGNvbmZpZy5yZWNvcmRlZCA9IHRydWVcbiAgfSlcbn1cblxuLyoqXG4gKiBDbG9uZSBhIGNvbnRleHQgYW5kIG1lcmdlIGNlcnRhaW4gZGF0YS5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IG1lcmdlZERhdGFcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9tZXJnZUNvbnRleHQobWVyZ2VkRGF0YSkge1xuICBjb25zdCBjb250ZXh0ID0gT2JqZWN0LmNyZWF0ZSh0aGlzKVxuICBjb250ZXh0Ll9kYXRhID0gbWVyZ2VkRGF0YVxuICBjb250ZXh0Ll9pbml0RGF0YSgpXG4gIGNvbnRleHQuX2luaXRDb21wdXRlZCgpXG4gIGNvbnRleHQuX3JlYWxQYXJlbnQgPSB0aGlzXG4gIHJldHVybiBjb250ZXh0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL2xpYi92bS9jb21waWxlci5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogRGlyZWN0aXZlIFBhcnNlclxuICovXG5cbmltcG9ydCAqIGFzIF8gZnJvbSAnLi4vdXRpbC9pbmRleCdcblxuaW1wb3J0IFdhdGNoZXIgZnJvbSAnLi9jb3JlL3dhdGNoZXInXG5pbXBvcnQge25hdGl2ZUNvbXBvbmVudE1hcH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5jb25zdCBTRVRURVJTID0ge1xuICBhdHRyOiAnc2V0QXR0cicsXG4gIHN0eWxlOiAnc2V0U3R5bGUnLFxuICBldmVudDogJ2FkZEV2ZW50J1xufVxuXG4vKipcbiAqIGFwcGx5IHRoZSBuYXRpdmUgY29tcG9uZW50J3Mgb3B0aW9ucyhzcGVjaWZpZWQgYnkgdGVtcGxhdGUudHlwZSlcbiAqIHRvIHRoZSB0ZW1wbGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2FwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyh0ZW1wbGF0ZSkge1xuICBjb25zdCB7dHlwZX0gPSB0ZW1wbGF0ZVxuICBjb25zdCBvcHRpb25zID0gbmF0aXZlQ29tcG9uZW50TWFwW3R5cGVdXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgIF8uZXh0ZW5kKHRlbXBsYXRlLCBvcHRpb25zKVxuICB9XG59XG5cbi8qKlxuICogYmluZCBhbGwgaWQsIGF0dHIsIGNsYXNzbmFtZXMsIHN0eWxlLCBldmVudHMgdG8gYW4gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2JpbmRFbGVtZW50KGVsLCB0ZW1wbGF0ZSkge1xuICB0aGlzLl9zZXRJZCh0ZW1wbGF0ZS5pZCwgZWwsIHRoaXMpXG4gIHRoaXMuX3NldEF0dHIoZWwsIHRlbXBsYXRlLmF0dHIpXG4gIHRoaXMuX3NldENsYXNzKGVsLCB0ZW1wbGF0ZS5jbGFzc0xpc3QpXG4gIHRoaXMuX3NldFN0eWxlKGVsLCB0ZW1wbGF0ZS5zdHlsZSlcbiAgdGhpcy5fYmluZEV2ZW50cyhlbCwgdGVtcGxhdGUuZXZlbnRzKVxufVxuXG4vKipcbiAqIGJpbmQgYWxsIHByb3BzIHRvIHN1YiB2bSBhbmQgYmluZCBhbGwgc3R5bGUsIGV2ZW50cyB0byB0aGUgcm9vdCBlbGVtZW50XG4gKiBvZiB0aGUgc3ViIHZtIGlmIGl0IGRvZXNuJ3QgaGF2ZSBhIHJlcGxhY2VkIG11bHRpLW5vZGUgZnJhZ21lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9iaW5kU3ViVm0oc3ViVm0sIHRlbXBsYXRlLCByZXBlYXRJdGVtKSB7XG4gIHN1YlZtID0gc3ViVm0gfHwge31cbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZSB8fCB7fVxuXG4gIGNvbnN0IG9wdGlvbnMgPSBzdWJWbS5fb3B0aW9ucyB8fCB7fVxuXG4gIC8vIGJpbmQgcHJvcHNcbiAgbGV0IHByb3BzID0gb3B0aW9ucy5wcm9wc1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BzKSkge1xuICAgIHByb3BzID0gcHJvcHMucmVkdWNlKChyZXN1bHQsIHZhbHVlKSA9PiB7XG4gICAgICByZXN1bHRbdmFsdWVdID0gdHJ1ZVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0sIHt9KVxuICB9XG5cbiAgbWVyZ2VQcm9wcyhyZXBlYXRJdGVtLCBwcm9wcywgdGhpcywgc3ViVm0pXG4gIG1lcmdlUHJvcHModGVtcGxhdGUuYXR0ciwgcHJvcHMsIHRoaXMsIHN1YlZtKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2JpbmRTdWJWbUFmdGVySW5pdGlhbGl6ZWQoc3ViVm0sIHRlbXBsYXRlKSB7XG4gIG1lcmdlQ2xhc3NTdHlsZSh0ZW1wbGF0ZS5jbGFzc0xpc3QsIHRoaXMsIHN1YlZtKVxuICBtZXJnZVN0eWxlKHRlbXBsYXRlLnN0eWxlLCB0aGlzLCBzdWJWbSlcbiAgbWVyZ2VFdmVudCh0ZW1wbGF0ZS5ldmVudHMsIHRoaXMsIHN1YlZtKVxufVxuXG5mdW5jdGlvbiBtZXJnZVByb3BzKHRhcmdldCwgcHJvcHMsIHZtLCBzdWJWbSkge1xuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVyblxuICB9XG4gIGZvciAoY29uc3Qga2V5IGluIHRhcmdldCkge1xuICAgIGlmICghcHJvcHMgfHwgcHJvcHNba2V5XSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXRba2V5XVxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHZtLl93YXRjaCh2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBzdWJWbVtrZXldID0gdlxuICAgICAgICB9KVxuICAgICAgICBzdWJWbVtrZXldID0gcmV0dXJuVmFsdWVcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdWJWbVtrZXldID0gdmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VTdHlsZSh0YXJnZXQsIHZtLCBzdWJWbSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiB0YXJnZXQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldFtrZXldXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSB2bS5fd2F0Y2godmFsdWUsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlmIChzdWJWbS5fcm9vdEVsKSB7XG4gICAgICAgICAgc3ViVm0uX3Jvb3RFbC5zZXRTdHlsZShrZXksIHYpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBzdWJWbS5fcm9vdEVsLnNldFN0eWxlKGtleSwgcmV0dXJuVmFsdWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHN1YlZtLl9yb290RWwpIHtcbiAgICAgICAgc3ViVm0uX3Jvb3RFbC5zZXRTdHlsZShrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZUNsYXNzU3R5bGUodGFyZ2V0LCB2bSwgc3ViVm0pIHtcbiAgdmFyIGNzcyA9IHZtLl9vcHRpb25zICYmIHZtLl9vcHRpb25zLnN0eWxlIHx8IHt9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghc3ViVm0uX3Jvb3RFbCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHZtLl93YXRjaCh0YXJnZXQsICB2ID0+IHtcbiAgICAgIHNldENsYXNzU3R5bGUoc3ViVm0uX3Jvb3RFbCwgY3NzLCB2KVxuICAgIH0pXG4gICAgc2V0Q2xhc3NTdHlsZShzdWJWbS5fcm9vdEVsLCBjc3MsIHZhbHVlKVxuICB9IGVsc2UgaWYgKHRhcmdldCAhPSBudWxsKSB7XG4gICAgc2V0Q2xhc3NTdHlsZShzdWJWbS5fcm9vdEVsLCBjc3MsIHRhcmdldClcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZUV2ZW50KHRhcmdldCwgdm0sIHN1YlZtKSB7XG4gIGlmICh0YXJnZXQgJiYgc3ViVm0uX3Jvb3RFbCkge1xuICAgIGZvciAoY29uc3QgdHlwZSBpbiB0YXJnZXQpIHtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSB2bVt0YXJnZXRbdHlwZV1dXG4gICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICBzdWJWbS5fcm9vdEVsLmFkZEV2ZW50KHR5cGUsIF8uYmluZChoYW5kbGVyLCB2bSkpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogYmluZCBpZCB0byBhbiBlbGVtZW50XG4gKiBlYWNoIGlkIGlzIHVuaXF1ZSBpbiBhIHdob2xlIHZtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfc2V0SWQoaWQsIGVsLCB2bSkge1xuICBjb25zdCBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobWFwLCB7XG4gICAgdm06IHtcbiAgICAgIHZhbHVlOiB2bSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICB9LFxuICAgIGVsOiB7XG4gICAgICBnZXQ6ICgpID0+IGVsIHx8IHZtLl9yb290RWwsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgfVxuICB9KVxuXG4gIGlmICh0eXBlb2YgaWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gaWRcbiAgICBpZCA9IGhhbmRsZXIuY2FsbCh0aGlzKVxuICAgIGlmIChpZCkge1xuICAgICAgdGhpcy5faWRzW2lkXSA9IG1hcFxuICAgIH1cbiAgICB0aGlzLl93YXRjaChoYW5kbGVyLCAobmV3SWQpID0+IHtcbiAgICAgIGlmIChuZXdJZCkge1xuICAgICAgICB0aGlzLl9pZHNbbmV3SWRdID0gbWFwXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBlbHNlIGlmIChpZCAmJiB0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgdGhpcy5faWRzW2lkXSA9IG1hcFxuICB9XG59XG5cbi8qKlxuICogYmluZCBhdHRyIHRvIGFuIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9zZXRBdHRyKGVsLCBhdHRyKSB7XG4gIHRoaXMuX2JpbmREaXIoZWwsICdhdHRyJywgYXR0cilcbn1cblxuZnVuY3Rpb24gc2V0Q2xhc3NTdHlsZShlbCwgY3NzLCBjbGFzc0xpc3QpIHtcbiAgY29uc3QgY2xhc3NTdHlsZSA9IHt9XG4gIGNvbnN0IGxlbmd0aCA9IGNsYXNzTGlzdC5sZW5ndGhcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBjc3NbY2xhc3NMaXN0W2ldXVxuICAgIGlmIChzdHlsZSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICAgICAgY2xhc3NTdHlsZVtrZXldID0gc3R5bGVba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbC5zZXRDbGFzc1N0eWxlKGNsYXNzU3R5bGUpXG59XG5cbi8qKlxuICogYmluZCBjbGFzc25hbWVzIHRvIGFuIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9zZXRDbGFzcyhlbCwgY2xhc3NMaXN0KSB7XG5cbiAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgIT09ICdmdW5jdGlvbicgJiYgIUFycmF5LmlzQXJyYXkoY2xhc3NMaXN0KSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTGlzdCkgJiYgIWNsYXNzTGlzdC5sZW5ndGgpIHtcbiAgICBlbC5zZXRDbGFzc1N0eWxlKHt9KVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3Qgc3R5bGUgPSB0aGlzLl9vcHRpb25zICYmIHRoaXMuX29wdGlvbnMuc3R5bGUgfHwge31cbiAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX3dhdGNoKGNsYXNzTGlzdCwgIHYgPT4ge1xuICAgICAgc2V0Q2xhc3NTdHlsZShlbCwgc3R5bGUsIHYpXG4gICAgfSlcbiAgICBzZXRDbGFzc1N0eWxlKGVsLCBzdHlsZSwgdmFsdWUpXG4gIH1cbiAgZWxzZSB7XG4gICAgc2V0Q2xhc3NTdHlsZShlbCwgc3R5bGUsIGNsYXNzTGlzdClcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgc3R5bGUgdG8gYW4gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gX3NldFN0eWxlKGVsLCBzdHlsZSkge1xuICB0aGlzLl9iaW5kRGlyKGVsLCAnc3R5bGUnLCBzdHlsZSlcbn1cblxuLyoqXG4gKiBhZGQgYW4gZXZlbnQgdHlwZSBhbmQgaGFuZGxlciB0byBhbiBlbGVtZW50IGFuZCBnZW5lcmF0ZSBhIGRvbSB1cGRhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9zZXRFdmVudChlbCwgdHlwZSwgaGFuZGxlcikge1xuICBlbC5hZGRFdmVudCh0eXBlLCBfLmJpbmQoaGFuZGxlciwgdGhpcykpXG59XG5cbi8qKlxuICogYWRkIGFsbCBldmVudHMgb2YgYW4gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2JpbmRFdmVudHMoZWwsIGV2ZW50cykge1xuICBpZiAoIWV2ZW50cykge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpXG4gIGxldCBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBsZXQgaGFuZGxlciA9IGV2ZW50c1trZXldXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgaGFuZGxlciA9IHRoaXNbaGFuZGxlcl1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICAgIF8uZXJyb3IoYFRoZSBtZXRob2QgXCIke2hhbmRsZXJ9XCIgaXMgbm90IGRlZmluZWQuYClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2V0RXZlbnQoZWwsIGtleSwgaGFuZGxlcilcbiAgfVxufVxuXG4vKipcbiAqIHNldCBhIHNlcmllcyBvZiBtZW1iZXJzIGFzIGEga2luZCBvZiBhbiBlbGVtZW50XG4gKiBmb3IgZXhhbXBsZTogc3R5bGUsIGF0dHIsIC4uLlxuICogaWYgdGhlIHZhbHVlIGlzIGEgZnVuY3Rpb24gdGhlbiBiaW5kIHRoZSBkYXRhIGNoYW5nZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9iaW5kRGlyKGVsLCBuYW1lLCBkYXRhKSB7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKVxuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgY29uc3QgdmFsdWUgPSBkYXRhW2tleV1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl9iaW5kS2V5KGVsLCBuYW1lLCBrZXksIHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbFtTRVRURVJTW25hbWVdXShrZXksIHZhbHVlKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgZGF0YSBjaGFuZ2VzIHRvIGEgY2VydGFpbiBrZXkgdG8gYSBuYW1lIHNlcmllcyBpbiBhbiBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfYmluZEtleShlbCwgbmFtZSwga2V5LCBjYWxjKSB7XG4gIGNvbnN0IG1ldGhvZE5hbWUgPSBTRVRURVJTW25hbWVdXG4gIGNvbnN0IG9iaiA9IGVsW25hbWVdXG4gIC8vIHdhdGNoIHRoZSBjYWxjLCBhbmQgcmV0dXJucyBhIHZhbHVlIGJ5IGNhbGMuY2FsbCgpXG4gIGNvbnN0IHZhbHVlID0gdGhpcy5fd2F0Y2goY2FsYywgKHZhbHVlKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgIGVsW21ldGhvZE5hbWVdKGtleSwgdmFsdWUpXG4gICAgfVxuICAgIGNvbnN0IGRpZmZlciA9IHRoaXMgJiYgdGhpcy5fYXBwICYmIHRoaXMuX2FwcC5kaWZmZXJcbiAgICBpZiAoZGlmZmVyKSB7XG4gICAgICBkaWZmZXIuYXBwZW5kKCdlbGVtZW50JywgZWwuZGVwdGgsIGVsLnJlZiwgaGFuZGxlcilcbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZGxlcigpXG4gICAgfVxuICB9KVxuXG4gIGVsW21ldGhvZE5hbWVdKGtleSwgdmFsdWUpXG59XG5cbi8qKlxuICogd2F0Y2ggYSBjYWxjIGZ1bmN0aW9uIGFuZCBjYWxsYmFjayBpZiB0aGUgY2FsYyB2YWx1ZSBjaGFuZ2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfd2F0Y2goY2FsYywgY2FsbGJhY2spIHtcbiAgY29uc3Qgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKHRoaXMsIGNhbGMsIGZ1bmN0aW9uICh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyAmJiB2YWx1ZSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjYWxsYmFjayh2YWx1ZSlcbiAgfSlcblxuICByZXR1cm4gd2F0Y2hlci52YWx1ZVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9saWIvdm0vZGlyZWN0aXZlLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IERvY3VtZW50ICYgRWxlbWVudCBIZWxwZXJzLlxuICpcbiAqIHJlcXVpcmVkOlxuICogRG9jdW1lbnQjOiBjcmVhdGVFbGVtZW50LCBjcmVhdGVDb21tZW50LCBnZXRSZWZcbiAqIEVsZW1lbnQjOiBhcHBlbmRDaGlsZCwgaW5zZXJ0QmVmb3JlLCByZW1vdmVDaGlsZCwgbmV4dFNpYmxpbmdcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIGJvZHkgYnkgdHlwZVxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NyZWF0ZUJvZHkodHlwZSkge1xuICBjb25zdCBkb2MgPSB0aGlzLl9hcHAuZG9jXG4gIHJldHVybiBkb2MuY3JlYXRlQm9keSh0eXBlKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBlbGVtZW50IGJ5IHR5cGVcbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jcmVhdGVFbGVtZW50KHR5cGUpIHtcbiAgY29uc3QgZG9jID0gdGhpcy5fYXBwLmRvY1xuICByZXR1cm4gZG9jLmNyZWF0ZUVsZW1lbnQodHlwZSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGZyYWcgYmxvY2sgZm9yIGFuIGVsZW1lbnQuXG4gKiBUaGUgZnJhZyBibG9jayBoYXMgYSBzdGFydGVyLCBlbmRlciBhbmQgdGhlIGVsZW1lbnQgaXRzZWxmLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NyZWF0ZUJsb2NrKGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnQgPSB0aGlzLl9jcmVhdGVCbG9ja1N0YXJ0KClcbiAgY29uc3QgZW5kID0gdGhpcy5fY3JlYXRlQmxvY2tFbmQoKVxuICBjb25zdCBibG9ja0lkID0gbGFzdGVzdEJsb2NrSWQrK1xuICBpZiAoZWxlbWVudC5lbGVtZW50KSB7XG4gICAgZWxlbWVudC5lbGVtZW50Lmluc2VydEJlZm9yZShzdGFydCwgZWxlbWVudC5lbmQpXG4gICAgZWxlbWVudC5lbGVtZW50Lmluc2VydEJlZm9yZShlbmQsIGVsZW1lbnQuZW5kKVxuICAgIGVsZW1lbnQgPSBlbGVtZW50LmVsZW1lbnRcbiAgfVxuICBlbHNlIHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHN0YXJ0KVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZW5kKVxuICB9XG4gIHJldHVybiB7c3RhcnQsIGVuZCwgZWxlbWVudCwgYmxvY2tJZH1cbn1cblxubGV0IGxhc3Rlc3RCbG9ja0lkID0gMVxuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgYmxvY2sgc3RhcnRlci5cbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jcmVhdGVCbG9ja1N0YXJ0KCkge1xuICBjb25zdCBkb2MgPSB0aGlzLl9hcHAuZG9jXG4gIGNvbnN0IGFuY2hvciA9IGRvYy5jcmVhdGVDb21tZW50KCdzdGFydCcpXG4gIHJldHVybiBhbmNob3Jcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGJsb2NrIGVuZGVyLlxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICovXG5leHBvcnQgZnVuY3Rpb24gX2NyZWF0ZUJsb2NrRW5kKCkge1xuICBjb25zdCBkb2MgPSB0aGlzLl9hcHAuZG9jXG4gIGNvbnN0IGFuY2hvciA9IGRvYy5jcmVhdGVDb21tZW50KCdlbmQnKVxuICByZXR1cm4gYW5jaG9yXG59XG5cbi8qKlxuICogQXR0YWNoIHRhcmdldCB0byBhIGNlcnRhaW4gZGVzdCB1c2luZyBhcHBlbmRDaGlsZCBieSBkZWZhdWx0LlxuICogSWYgdGhlIGRlc3QgaXMgYSBmcmFnIGJsb2NrIHRoZW4gaW5zZXJ0IGJlZm9yZSB0aGUgZW5kZXIuXG4gKiBJZiB0aGUgdGFyZ2V0IGlzIGEgZnJhZyBibG9jayB0aGVuIGF0dGFjaCB0aGUgc3RhcnRlciBhbmQgZW5kZXIgaW4gb3JkZXIuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gZGVzdFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2F0dGFjaFRhcmdldCh0YXJnZXQsIGRlc3QpIHtcblxuICBpZiAoZGVzdC5lbGVtZW50KSB7XG4gICAgY29uc3QgYmVmb3JlID0gZGVzdC5lbmRcbiAgICBjb25zdCBhZnRlciA9IGRlc3QudXBkYXRlTWFya1xuICAgIC8vIHB1c2ggbmV3IHRhcmdldCBmb3Igd2F0Y2ggbGlzdCB1cGRhdGUgbGF0ZXJcbiAgICBpZiAoZGVzdC5jaGlsZHJlbikge1xuICAgICAgZGVzdC5jaGlsZHJlbi5wdXNoKHRhcmdldClcbiAgICB9XG4gICAgLy8gZm9yIGNoZWNrIHJlcGVhdCBjYXNlXG4gICAgaWYgKGFmdGVyKSB7XG4gICAgICB0aGlzLl9tb3ZlVGFyZ2V0KHRhcmdldCwgYWZ0ZXIpXG4gICAgICBkZXN0LnVwZGF0ZU1hcmsgPSB0YXJnZXQuZWxlbWVudCA/IHRhcmdldC5lbmQgOiB0YXJnZXRcbiAgICB9XG4gICAgZWxzZSBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICAgIGRlc3QuZWxlbWVudC5pbnNlcnRCZWZvcmUodGFyZ2V0LnN0YXJ0LCBiZWZvcmUpXG4gICAgICBkZXN0LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRhcmdldC5lbmQsIGJlZm9yZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkZXN0LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRhcmdldCwgYmVmb3JlKVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICAgIGRlc3QuYXBwZW5kQ2hpbGQodGFyZ2V0LnN0YXJ0KVxuICAgICAgZGVzdC5hcHBlbmRDaGlsZCh0YXJnZXQuZW5kKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRlc3QuYXBwZW5kQ2hpbGQodGFyZ2V0KVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIE1vdmUgdGFyZ2V0IGJlZm9yZSBhIGNlcnRhaW4gZWxlbWVudC4gVGhlIHRhcmdldCBtYXliZSBibG9jayBvciBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9IGJlZm9yZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX21vdmVUYXJnZXQodGFyZ2V0LCBhZnRlcikge1xuICBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICB0aGlzLl9tb3ZlQmxvY2sodGFyZ2V0LCBhZnRlcilcbiAgfVxuICBlbHNlIHtcbiAgICB0aGlzLl9tb3ZlRWxlbWVudCh0YXJnZXQsIGFmdGVyKVxuICB9XG59XG5cbi8qKlxuICogTW92ZSBlbGVtZW50IGJlZm9yZSBhIGNlcnRhaW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSAge29iamVjdH0gYmVmb3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfbW92ZUVsZW1lbnQoZWxlbWVudCwgYWZ0ZXIpIHtcbiAgY29uc3QgZG9jID0gdGhpcy5fYXBwLmRvY1xuICBjb25zdCBwYXJlbnQgPSBkb2MuZ2V0UmVmKGFmdGVyLnBhcmVudFJlZilcblxuICBpZiAocGFyZW50KSB7XG4gICAgcGFyZW50Lmluc2VydEFmdGVyKGVsZW1lbnQsIGFmdGVyKVxuICB9XG59XG5cbi8qKlxuICogTW92ZSBhbGwgZWxlbWVudHMgb2YgdGhlIGJsb2NrIGJlZm9yZSBhIGNlcnRhaW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGZyYWdCbG9ja1xuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9tb3ZlQmxvY2soZnJhZ0Jsb2NrLCBhZnRlcikge1xuICBjb25zdCBkb2MgPSB0aGlzLl9hcHAuZG9jXG4gIGNvbnN0IHBhcmVudCA9IGRvYy5nZXRSZWYoYWZ0ZXIucGFyZW50UmVmKVxuXG4gIGlmIChwYXJlbnQpIHtcbiAgICBsZXQgZWwgPSBmcmFnQmxvY2suc3RhcnRcbiAgICBjb25zdCBncm91cCA9IFtlbF1cblxuICAgIHdoaWxlIChlbCAmJiBlbCAhPT0gZnJhZ0Jsb2NrLmVuZCkge1xuICAgICAgZWwgPSBlbC5uZXh0KClcbiAgICAgIGdyb3VwLnB1c2goZWwpXG4gICAgfVxuXG4gICAgbGV0IHRlbXAgPSBhZnRlclxuICAgIGdyb3VwLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QWZ0ZXIoZWwsIHRlbXApXG4gICAgICB0ZW1wID0gZWxcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIHRhcmdldCBmcm9tIERPTSB0cmVlLlxuICogSWYgdGhlIHRhcmdldCBpcyBhIGZyYWcgYmxvY2sgdGhlbiBjYWxsIF9yZW1vdmVCbG9ja1xuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfcmVtb3ZlVGFyZ2V0KHRhcmdldCkge1xuXG4gIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgIHRoaXMuX3JlbW92ZUJsb2NrKHRhcmdldClcbiAgfVxuICBlbHNlIHtcbiAgICB0aGlzLl9yZW1vdmVFbGVtZW50KHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGNlcnRhaW4gZWxlbWVudC5cbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICovXG5leHBvcnQgZnVuY3Rpb24gX3JlbW92ZUVsZW1lbnQodGFyZ2V0KSB7XG4gIGNvbnN0IGRvYyA9IHRoaXMuX2FwcC5kb2NcbiAgY29uc3QgcGFyZW50ID0gZG9jLmdldFJlZih0YXJnZXQucGFyZW50UmVmKVxuXG4gIGlmIChwYXJlbnQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodGFyZ2V0KVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgZnJhZyBibG9jay5cbiAqIFRoZSBzZWNvbmQgcGFyYW0gZGVjaWRlcyB3aGV0aGVyIHRoZSBibG9jayBzZWxmIHNob3VsZCBiZSByZW1vdmVkIHRvby5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICBmcmFnQmxvY2tcbiAqIEBwYXJhbSAge0Jvb2xlYW59IHByZXNlcnZlQmxvY2s9ZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9yZW1vdmVCbG9jayhmcmFnQmxvY2ssIHByZXNlcnZlQmxvY2sgPSBmYWxzZSkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBsZXQgZWwgPSBmcmFnQmxvY2suc3RhcnQubmV4dCgpXG5cbiAgd2hpbGUgKGVsICYmIGVsICE9PSBmcmFnQmxvY2suZW5kKSB7XG4gICAgcmVzdWx0LnB1c2goZWwpXG4gICAgZWwgPSBlbC5uZXh0KClcbiAgfVxuXG4gIGlmICghcHJlc2VydmVCbG9jaykge1xuICAgIHRoaXMuX3JlbW92ZUVsZW1lbnQoZnJhZ0Jsb2NrLnN0YXJ0KVxuICB9XG4gIHJlc3VsdC5mb3JFYWNoKChlbCkgPT4ge1xuICAgIHRoaXMuX3JlbW92ZUVsZW1lbnQoZWwpXG4gIH0pXG4gIGlmICghcHJlc2VydmVCbG9jaykge1xuICAgIHRoaXMuX3JlbW92ZUVsZW1lbnQoZnJhZ0Jsb2NrLmVuZClcbiAgfVxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL2xpYi92bS9kb20taGVscGVyLmpzXG4gKiovIiwiZnVuY3Rpb24gRXZ0KHR5cGUsIGRldGFpbCkge1xuICBpZiAoZGV0YWlsIGluc3RhbmNlb2YgRXZ0KSB7XG4gICAgcmV0dXJuIGRldGFpbFxuICB9XG5cbiAgdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpXG4gIHRoaXMuZGV0YWlsID0gZGV0YWlsXG4gIHRoaXMudHlwZSA9IHR5cGVcblxuICBsZXQgc2hvdWxkU3RvcCA9IGZhbHNlXG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzaG91bGRTdG9wID0gdHJ1ZVxuICB9XG4gIHRoaXMuaGFzU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2hvdWxkU3RvcFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkZW1pdCh0eXBlLCBkZXRhaWwpIHtcbiAgY29uc3QgZXZlbnRzID0gdGhpcy5fdm1FdmVudHNcbiAgY29uc3QgaGFuZGxlckxpc3QgPSBldmVudHNbdHlwZV1cbiAgaWYgKGhhbmRsZXJMaXN0KSB7XG4gICAgbGV0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICAgIGhhbmRsZXJMaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBldnQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJGRpc3BhdGNoKHR5cGUsIGRldGFpbCkge1xuICBjb25zdCBldnQgPSBuZXcgRXZ0KHR5cGUsIGRldGFpbClcbiAgdGhpcy4kZW1pdCh0eXBlLCBldnQpXG5cbiAgaWYgKCFldnQuaGFzU3RvcHBlZCgpICYmIHRoaXMuX3BhcmVudCAmJiB0aGlzLl9wYXJlbnQuJGRpc3BhdGNoKSB7XG4gICAgdGhpcy5fcGFyZW50LiRkaXNwYXRjaCh0eXBlLCBldnQpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uICRicm9hZGNhc3QodHlwZSwgZGV0YWlsKSB7XG4gIGNvbnN0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICB0aGlzLiRlbWl0KHR5cGUsIGV2dClcblxuICBpZiAoIWV2dC5oYXNTdG9wcGVkKCkgJiYgdGhpcy5fY2hpbGRyZW5WbXMpIHtcbiAgICB0aGlzLl9jaGlsZHJlblZtcy5mb3JFYWNoKChzdWJWbSkgPT4ge1xuICAgICAgc3ViVm0uJGJyb2FkY2FzdCh0eXBlLCBldnQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgaWYgKCF0eXBlIHx8IHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgZXZlbnRzID0gdGhpcy5fdm1FdmVudHNcbiAgY29uc3QgaGFuZGxlckxpc3QgPSBldmVudHNbdHlwZV0gfHwgW11cbiAgaGFuZGxlckxpc3QucHVzaChoYW5kbGVyKVxuICBldmVudHNbdHlwZV0gPSBoYW5kbGVyTGlzdFxuXG4gIC8vIGZpeGVkIG9sZCB2ZXJzaW9uIGxpZmVjeWNsZSBkZXNpZ25cbiAgaWYgKHR5cGUgPT09ICdob29rOnJlYWR5JyAmJiB0aGlzLl9yZWFkeSkge1xuICAgIHRoaXMuJGVtaXQoJ2hvb2s6cmVhZHknKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgaWYgKCF0eXBlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgZXZlbnRzID0gdGhpcy5fdm1FdmVudHNcbiAgaWYgKCFoYW5kbGVyKSB7XG4gICAgZGVsZXRlIGV2ZW50c1t0eXBlXVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGhhbmRsZXJMaXN0ID0gZXZlbnRzW3R5cGVdXG4gIGlmICghaGFuZGxlckxpc3QpIHtcbiAgICByZXR1cm5cbiAgfVxuICBoYW5kbGVyTGlzdC4kcmVtb3ZlKGhhbmRsZXIpXG59XG5cbmNvbnN0IExJRkVfQ1lDTEVfVFlQRVMgPSBbJ2luaXQnLCAnY3JlYXRlZCcsICdyZWFkeSddXG5cbmV4cG9ydCBmdW5jdGlvbiBfaW5pdEV2ZW50cyhleHRlcm5hbEV2ZW50cykge1xuICBjb25zdCBvcHRpb25zID0gdGhpcy5fb3B0aW9ucyB8fCB7fVxuICBjb25zdCBldmVudHMgPSBvcHRpb25zLmV2ZW50cyB8fCB7fVxuICBmb3IgKGNvbnN0IHR5cGUxIGluIGV2ZW50cykge1xuICAgIHRoaXMuJG9uKHR5cGUxLCBldmVudHNbdHlwZTFdKVxuICB9XG4gIGZvciAoY29uc3QgdHlwZTIgaW4gZXh0ZXJuYWxFdmVudHMpIHtcbiAgICB0aGlzLiRvbih0eXBlMiwgZXh0ZXJuYWxFdmVudHNbdHlwZTJdKVxuICB9XG4gIExJRkVfQ1lDTEVfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgIHRoaXMuJG9uKGBob29rOiR7dHlwZX1gLCBvcHRpb25zW3R5cGVdKVxuICB9KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9saWIvdm0vZXZlbnRzLmpzXG4gKiovIiwibGV0IG5hdGl2ZU1vZHVsZXMgPSB7fVxuXG5mdW5jdGlvbiBhc3NpZ25Nb2R1bGVzKG1vZHVsZXMsIGlmUmVwbGFjZSkge1xuXG4gIGZvciAoY29uc3QgbW9kdWxlTmFtZSBpbiBtb2R1bGVzKSB7XG5cbiAgICAvLyBpbml0IGBtb2R1bGVzW21vZHVsZU5hbWVdW11gXG4gICAgbGV0IG1ldGhvZHMgPSBuYXRpdmVNb2R1bGVzW21vZHVsZU5hbWVdXG4gICAgaWYgKCFtZXRob2RzKSB7XG4gICAgICBtZXRob2RzID0ge31cbiAgICAgIG5hdGl2ZU1vZHVsZXNbbW9kdWxlTmFtZV0gPSBtZXRob2RzXG4gICAgfVxuXG4gICAgLy8gcHVzaCBlYWNoIG5vbi1leGlzdGVkIG5ldyBtZXRob2RcbiAgICBtb2R1bGVzW21vZHVsZU5hbWVdLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG1ldGhvZCA9IHtcbiAgICAgICAgICBuYW1lOiBtZXRob2RcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIW1ldGhvZHNbbWV0aG9kLm5hbWVdIHx8IGlmUmVwbGFjZSkge1xuICAgICAgICBtZXRob2RzW21ldGhvZC5uYW1lXSA9IG1ldGhvZFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzaWduQXBpcyhDdG9yLCBhcGlzKSB7XG4gIGNvbnN0IHAgPSBDdG9yLnByb3RvdHlwZVxuXG4gIGZvciAoY29uc3QgYXBpTmFtZSBpbiBhcGlzKSB7XG4gICAgaWYgKCFwLmhhc093blByb3BlcnR5KGFwaU5hbWUpKSB7XG4gICAgICBwW2FwaU5hbWVdID0gYXBpc1thcGlOYW1lXVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJNb2R1bGVzKCkge1xuICBuYXRpdmVNb2R1bGVzID0ge31cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZHVsZShtb2R1bGVOYW1lKSB7XG4gIHJldHVybiBuYXRpdmVNb2R1bGVzW21vZHVsZU5hbWVdXG59XG5cbi8qKlxuICogQGNvbnRleHQgYSBpbnN0YW5jZSBvZiBBcHBJbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZU1vZHVsZShtb2R1bGVOYW1lKSB7XG4gIGNvbnN0IG1ldGhvZHMgPSBuYXRpdmVNb2R1bGVzW21vZHVsZU5hbWVdXG4gIGNvbnN0IHRhcmdldCA9IHt9XG5cbiAgZm9yIChjb25zdCBtZXRob2ROYW1lIGluIG1ldGhvZHMpIHtcbiAgICB0YXJnZXRbbWV0aG9kTmFtZV0gPSAoLi4uYXJncykgPT4gdGhpcy5jYWxsVGFza3Moe1xuICAgICAgbW9kdWxlOiBtb2R1bGVOYW1lLFxuICAgICAgbWV0aG9kOiBtZXRob2ROYW1lLFxuICAgICAgYXJnczogYXJnc1xuICAgIH0pXG4gIH1cblxuICByZXR1cm4gdGFyZ2V0XG59XG5cbi8qKlxuICogQGNvbnRleHQgVm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTW9kdWxlcyhtb2R1bGVzLCBpZlJlcGxhY2UpIHtcbiAgYXNzaWduTW9kdWxlcyhtb2R1bGVzLCBpZlJlcGxhY2UpXG59XG5cbi8qKlxuICogQGNvbnRleHQgVm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTWV0aG9kcyhhcGlzKSB7XG4gIGFzc2lnbkFwaXModGhpcywgYXBpcylcbn1cblxuLyoqXG4gKiBAY29udGV4dCBhIGluc3RhbmNlIG9mIEFwcEluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlQ29tcG9uZW50KG5hbWUpIHtcbiAgY29uc3Qge2N1c3RvbUNvbXBvbmVudE1hcH0gPSB0aGlzXG4gIHJldHVybiBjdXN0b21Db21wb25lbnRNYXBbbmFtZV1cbn1cblxuLyoqXG4gKiBAY29udGV4dCBhIGluc3RhbmNlIG9mIEFwcEluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckNvbXBvbmVudChuYW1lLCBleHBvcnRzKSB7XG4gIGNvbnN0IHtjdXN0b21Db21wb25lbnRNYXB9ID0gdGhpc1xuXG4gIGlmIChjdXN0b21Db21wb25lbnRNYXBbbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGRlZmluZSBhIGNvbXBvbmVudCgke25hbWV9KSB0aGF0IGFscmVhZHkgZXhpc3RzYClcbiAgfVxuXG4gIGN1c3RvbUNvbXBvbmVudE1hcFtuYW1lXSA9IGV4cG9ydHNcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL2xpYi9hcHAvcmVnaXN0ZXIuanNcbiAqKi8iLCJpbXBvcnQgc2VtdmVyIGZyb20gJ3NlbXZlcidcbmltcG9ydCB7ZXh0ZW5kLCBpc1BsYWluT2JqZWN0LCB0eXBvZn0gIGZyb20gJy4uL3V0aWwnXG5cbi8qKlxuICogW25vcm1hbGl6ZVZlcnNpb24gZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFZlcnNpb24uIGllOiAxLCAxLjAsIDEuMC4wXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFZlcnNpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVZlcnNpb24gKHYpIHtcbiAgY29uc3QgaXNWYWxpZCA9IHNlbXZlci52YWxpZCh2KSA/IHRydWUgOiBmYWxzZVxuICBpZiAoaXNWYWxpZCkge1xuICAgIHJldHVybiB2XG4gIH1cblxuICB2ID0gdHlwZW9mICh2KSA9PT0gJ3N0cmluZycgPyB2IDogJydcbiAgY29uc3Qgc3BsaXQgPSB2LnNwbGl0KCcuJylcbiAgbGV0IGkgPSAwXG4gIGxldCByZXN1bHQgPSBbXVxuXG4gIHdoaWxlIChpIDwgMykge1xuICAgIGNvbnN0IHMgPSB0eXBlb2YgKHNwbGl0W2ldKSA9PT0gJ3N0cmluZycgJiYgc3BsaXRbaV0gPyBzcGxpdFtpXSA6ICcwJ1xuICAgIHJlc3VsdC5wdXNoKHMpXG4gICAgaSsrXG4gIH1cblxuICByZXR1cm4gcmVzdWx0LmpvaW4oJy4nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3IgKGtleSwgdmFsLCBjcml0ZXJpYSkge1xuICBsZXQgcmVzdWx0ID0ge1xuICAgIGlzRG93bmdyYWRlOiB0cnVlLFxuICAgIGVycm9yVHlwZTogMSxcbiAgICBjb2RlOiAxMDAwXG4gIH1cbiAgbGV0IGdldE1zZyA9IGZ1bmN0aW9uIChrZXksIHZhbCwgY3JpdGVyaWEpIHtcbiAgICByZXR1cm4gJ0Rvd25ncmFkZVsnICsga2V5ICsgJ10gOjogZGV2aWNlSW5mbyAnXG4gICAgICArIHZhbCArICcgbWF0Y2hlZCBjcml0ZXJpYSAnICsgY3JpdGVyaWFcbiAgfVxuICBjb25zdCBfa2V5ID0ga2V5LnRvTG93ZXJDYXNlKClcblxuICByZXN1bHQuZXJyb3JNZXNzYWdlID0gZ2V0TXNnKGtleSwgdmFsLCBjcml0ZXJpYSlcblxuICBpZiAoX2tleS5pbmRleE9mKCdvc3ZlcnNpb24nKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDAxXG4gIH1lbHNlIGlmIChfa2V5LmluZGV4T2YoJ2FwcHZlcnNpb24nKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDAyXG4gIH1lbHNlIGlmIChfa2V5LmluZGV4T2YoJ3dlZXh2ZXJzaW9uJykgPj0gMCkge1xuICAgIHJlc3VsdC5jb2RlID0gMTAwM1xuICB9ZWxzZSBpZiAoX2tleS5pbmRleE9mKCdkZXZpY2Vtb2RlbCcpID49IDApIHtcbiAgICByZXN1bHQuY29kZSA9IDEwMDRcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBXRUVYIGZyYW1ld29yayBpbnB1dChkZXZpY2VJbmZvKVxuICoge1xuICogICBwbGF0Zm9ybTogJ2lPUycgb3IgJ2FuZHJvaWQnXG4gKiAgIG9zVmVyc2lvbjogJzEuMC4wJyBvciAnMS4wJyBvciAnMSdcbiAqICAgYXBwVmVyc2lvbjogJzEuMC4wJyBvciAnMS4wJyBvciAnMSdcbiAqICAgd2VleFZlcnNpb246ICcxLjAuMCcgb3IgJzEuMCcgb3IgJzEnXG4gKiAgIGREZXZpY2VNb2RlbDogJ01PREVMX05BTUUnXG4gKiB9XG4gKlxuICogZG93bmdyYWRlIGNvbmZpZyhjb25maWcpXG4gKiB7XG4gKiAgIGlvczoge1xuICogICAgIG9zVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgYXBwVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgd2VleFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGRldmljZU1vZGVsOiBbJ21vZGVsQScsICdtb2RlbEInLCAuLi5dXG4gKiAgIH0sXG4gKiAgIGFuZHJvaWQ6IHtcbiAqICAgICBvc1ZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGFwcFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIHdlZXhWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICBkZXZpY2VNb2RlbDogWydtb2RlbEEnLCAnbW9kZWxCJywgLi4uXVxuICogICB9XG4gKiB9XG4gKlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZGV2aWNlSW5mbyBXZWV4IFNESyBmcmFtZXdvcmsgaW5wdXRcbiAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnICAgICB1c2VyIGlucHV0XG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgeyBpc0Rvd25ncmFkZTogdHJ1ZS9mYWxzZSwgZXJyb3JNZXNzYWdlLi4uIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrIChjb25maWcsIGRldmljZUluZm8pIHtcbiAgZGV2aWNlSW5mbyA9IGRldmljZUluZm8gfHwgZ2xvYmFsLldYRW52aXJvbm1lbnRcbiAgZGV2aWNlSW5mbyA9IGlzUGxhaW5PYmplY3QoZGV2aWNlSW5mbykgPyBkZXZpY2VJbmZvIDoge31cbiAgY29uZmlnID0gaXNQbGFpbk9iamVjdChjb25maWcpID8gY29uZmlnIDoge31cbiAgY29uc3QgcGxhdGZvcm0gPSBkZXZpY2VJbmZvLnBsYXRmb3JtIHx8ICd1bmtub3cnXG4gIGNvbnN0IGRQbGF0Zm9ybSA9IHBsYXRmb3JtLnRvTG93ZXJDYXNlKClcbiAgY29uc3QgY09iaiA9IGNvbmZpZ1tkUGxhdGZvcm1dIHx8IHt9XG5cbiAgbGV0IHJlc3VsdCA9IHtcbiAgICBpc0Rvd25ncmFkZTogZmFsc2UgLy8gZGVmYXV0bCBpcyBwYXNzXG4gIH1cblxuICBmb3IgKGxldCBpIGluIGRldmljZUluZm8pIHtcbiAgICBjb25zdCBrZXkgPSBpXG4gICAgY29uc3Qga2V5TG93ZXIgPSBrZXkudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IHZhbCA9IGRldmljZUluZm9baV1cbiAgICBjb25zdCBpc1ZlcnNpb24gPSBrZXlMb3dlci5pbmRleE9mKCd2ZXJzaW9uJykgPj0gMCA/IHRydWUgOiBmYWxzZVxuICAgIGNvbnN0IGlzRGV2aWNlTW9kZWwgPSBrZXlMb3dlci5pbmRleE9mKCdkZXZpY2Vtb2RlbCcpID49IDAgPyB0cnVlIDogZmFsc2VcbiAgICBjb25zdCBjcml0ZXJpYSA9IGNPYmpbaV1cblxuICAgIGlmIChjcml0ZXJpYSAmJiBpc1ZlcnNpb24pIHtcbiAgICAgIGNvbnN0IGMgPSB0aGlzLm5vcm1hbGl6ZVZlcnNpb24oY3JpdGVyaWEpXG4gICAgICBjb25zdCBkID0gdGhpcy5ub3JtYWxpemVWZXJzaW9uKGRldmljZUluZm9baV0pXG5cbiAgICAgIGlmIChzZW12ZXIuc2F0aXNmaWVzKGQsIGMpKSB7XG4gICAgICAgIHJlc3VsdCA9IGV4dGVuZCh0aGlzLmdldEVycm9yKGtleSwgdmFsLCBjcml0ZXJpYSkpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfWVsc2UgaWYgKGlzRGV2aWNlTW9kZWwpIHtcbiAgICAgIGNvbnN0IF9jcml0ZXJpYSA9IHR5cG9mKGNyaXRlcmlhKSA9PT0gJ2FycmF5JyA/IGNyaXRlcmlhIDogW2NyaXRlcmlhXVxuICAgICAgaWYgKF9jcml0ZXJpYS5pbmRleE9mKHZhbCkgPj0gMCkge1xuICAgICAgICByZXN1bHQgPSBleHRlbmQodGhpcy5nZXRFcnJvcihrZXksIHZhbCwgY3JpdGVyaWEpKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL2xpYi9hcHAvZG93bmdyYWRlLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBpbnN0YW5jZSBjb250cm9scyBmcm9tIG5hdGl2ZVxuICpcbiAqIC0gaW5pdCBidW5kbGVcbiAqIC0gZmlyZSBldmVudFxuICogLSBjYWxsYmFja1xuICogLSBkZXN0cm95XG4gKlxuICogY29ycmVzcG9uZGVkIHdpdGggdGhlIEFQSSBvZiBpbnN0YW5jZSBtYW5hZ2VyIChmcmFtZXdvcmsuanMpXG4gKi9cblxuaW1wb3J0ICogYXMgXyBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IExpc3RlbmVyIGZyb20gJy4vZG9tLWxpc3RlbmVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQWN0aW9ucygpIHtcbiAgdGhpcy5kaWZmZXIuZmx1c2goKVxuICBjb25zdCB0YXNrcyA9IFtdXG4gIGlmICh0aGlzLmxpc3RlbmVyICYmIHRoaXMubGlzdGVuZXIudXBkYXRlcy5sZW5ndGgpIHtcbiAgICB0YXNrcy5wdXNoKC4uLnRoaXMubGlzdGVuZXIudXBkYXRlcylcbiAgICB0aGlzLmxpc3RlbmVyLnVwZGF0ZXMgPSBbXVxuICB9XG4gIGlmICh0YXNrcy5sZW5ndGgpIHtcbiAgICB0aGlzLmNhbGxUYXNrcyh0YXNrcylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdChjb2RlLCBkYXRhKSB7XG4gIF8uZGVidWcoJ0ludGlhbGl6ZSBhbiBpbnN0YW5jZSB3aXRoOlxcbicsIGNvZGUsIGRhdGEpXG5cbiAgdmFyIHJlc3VsdFxuICAvLyBAc2VlOiBsaWIvYXBwL2J1bmRsZS5qc1xuICBjb25zdCBkZWZpbmUgPSBfLmJpbmQodGhpcy5kZWZpbmUsIHRoaXMpXG4gIGNvbnN0IGJvb3RzdHJhcCA9IChuYW1lLCBjb25maWcsIF9kYXRhKSA9PiB7XG4gICAgcmVzdWx0ID0gdGhpcy5ib290c3RyYXAobmFtZSwgY29uZmlnLCBfZGF0YSB8fCBkYXRhKVxuICAgIHRoaXMudXBkYXRlQWN0aW9ucygpXG4gICAgdGhpcy5kb2MubGlzdGVuZXIuY3JlYXRlRmluaXNoKClcbiAgICB0aGlzLmRvYy5jbG9zZSgpXG4gICAgXy5kZWJ1ZyhgQWZ0ZXIgaW50aWFsaXplZCBhbiBpbnN0YW5jZSgke3RoaXMuaWR9KWApXG4gIH1cblxuICAvLyBiYWNrd2FyZChyZWdpc3Rlci9yZW5kZXIpXG4gIGNvbnN0IHJlZ2lzdGVyID0gXy5iaW5kKHRoaXMucmVnaXN0ZXIsIHRoaXMpXG4gIGNvbnN0IHJlbmRlciA9IChuYW1lLCBfZGF0YSkgPT4ge1xuICAgIHJlc3VsdCA9IHRoaXMuYm9vdHN0cmFwKG5hbWUsIHt9LCBfZGF0YSlcbiAgfVxuXG4gIGNvbnN0IHJlcXVpcmUgPSBuYW1lID0+IF9kYXRhID0+IHtcbiAgICByZXN1bHQgPSB0aGlzLmJvb3RzdHJhcChuYW1lLCB7fSwgX2RhdGEpXG4gIH1cblxuICBjb25zdCBkb2N1bWVudCA9IHRoaXMuZG9jXG5cbiAgbGV0IGZ1bmN0aW9uQm9keVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiBjb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gYGZ1bmN0aW9uICgpIHsuLi59YCAtPiBgey4uLn1gXG4gICAgLy8gbm90IHZlcnkgc3RyaWN0XG4gICAgZnVuY3Rpb25Cb2R5ID0gY29kZS50b1N0cmluZygpLnN1YnN0cigxMilcbiAgfSBlbHNlIGlmIChjb2RlKSB7XG4gICAgZnVuY3Rpb25Cb2R5ID0gY29kZS50b1N0cmluZygpXG4gIH1cblxuICBsZXQgZm4gPSBuZXcgRnVuY3Rpb24oXG4gICAgJ2RlZmluZScsXG4gICAgJ3JlcXVpcmUnLFxuICAgICdkb2N1bWVudCcsXG4gICAgJ2Jvb3RzdHJhcCcsXG4gICAgJ3JlZ2lzdGVyJyxcbiAgICAncmVuZGVyJyxcbiAgICAnX193ZWV4X2RlZmluZV9fJywgLy8gYWxpYXMgZm9yIGRlZmluZVxuICAgICdfX3dlZXhfYm9vdHN0cmFwX18nLCAvLyBhbGlhcyBmb3IgYm9vdHN0cmFwXG4gICAgZnVuY3Rpb25Cb2R5XG4gIClcblxuICBmbihcbiAgICBkZWZpbmUsXG4gICAgcmVxdWlyZSxcbiAgICBkb2N1bWVudCxcbiAgICBib290c3RyYXAsXG4gICAgcmVnaXN0ZXIsXG4gICAgcmVuZGVyLFxuICAgIGRlZmluZSxcbiAgICBib290c3RyYXApXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgXy5kZWJ1ZyhgRGVzdG9yeSBhbiBpbnN0YW5jZSgke3RoaXMuaWR9KWApXG5cbiAgdGhpcy5pZCA9ICcnXG4gIHRoaXMuZXZlbnRNYW5hZ2VyID0gbnVsbFxuICB0aGlzLm9wdGlvbnMgPSBudWxsXG4gIHRoaXMuYmxvY2tzID0gbnVsbFxuICB0aGlzLnZtID0gbnVsbFxuICB0aGlzLmRvYyA9IG51bGxcbiAgdGhpcy5jdXN0b21Db21wb25lbnRNYXAgPSBudWxsXG4gIHRoaXMuY2FsbGJhY2tzID0gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vdEVsZW1lbnQoKSB7XG4gIGNvbnN0IGRvYyA9IHRoaXMuZG9jIHx8IHt9XG4gIGNvbnN0IGJvZHkgPSBkb2MuYm9keSB8fCB7fVxuICByZXR1cm4gYm9keS50b0pTT04gPyBib2R5LnRvSlNPTigpIDoge31cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpcmVFdmVudChyZWYsIHR5cGUsIGUsIGRvbUNoYW5nZXMpIHtcbiAgXy5kZWJ1ZyhgRmlyZSBhIFwiJHt0eXBlfVwiIGV2ZW50IG9uIGFuIGVsZW1lbnQoJHtyZWZ9KWAsXG4gICAgICAgICAgICBgaW4gaW5zdGFuY2UoJHt0aGlzLmlkfSlgKVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHJlZikpIHtcbiAgICByZWYuc29tZSgocmVmKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5maXJlRXZlbnQocmVmLCB0eXBlLCBlKSAhPT0gZmFsc2VcbiAgICB9KVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZWwgPSB0aGlzLmRvYy5nZXRSZWYocmVmKVxuXG4gIGlmIChlbCkge1xuICAgIGUgPSBlIHx8IHt9XG4gICAgZS50eXBlID0gdHlwZVxuICAgIGUudGFyZ2V0ID0gZWxcbiAgICBlLnRpbWVzdGFtcCA9IERhdGUubm93KClcbiAgICBpZiAoZG9tQ2hhbmdlcykge1xuICAgICAgdXBkYXRlRWxlbWVudChlbCwgZG9tQ2hhbmdlcylcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5ldmVudE1hbmFnZXIuZmlyZShlbCwgdHlwZSwgZSlcbiAgICB0aGlzLnVwZGF0ZUFjdGlvbnMoKVxuICAgIHRoaXMuZG9jLmxpc3RlbmVyLnVwZGF0ZUZpbmlzaCgpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBlbGVtZW50IHJlZmVyZW5jZSBcIiR7cmVmfVwiYClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxiYWNrKGNhbGxiYWNrSWQsIGRhdGEsIGlmS2VlcEFsaXZlKSB7XG4gIF8uZGVidWcoYEludm9rZSBhIGNhbGxiYWNrKCR7Y2FsbGJhY2tJZH0pIHdpdGhgLCBkYXRhLFxuICAgICAgICAgICAgYGluIGluc3RhbmNlKCR7dGhpcy5pZH0pYClcblxuICBjb25zdCBjYWxsYmFjayA9IHRoaXMuY2FsbGJhY2tzW2NhbGxiYWNrSWRdXG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrKGRhdGEpIC8vIGRhdGEgaXMgYWxyZWFkeSBhIG9iamVjdCwgQHNlZTogbGliL2ZyYW1ld29yay5qc1xuXG4gICAgaWYgKHR5cGVvZiBpZktlZXBBbGl2ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgaWZLZWVwQWxpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrc1tjYWxsYmFja0lkXSA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlQWN0aW9ucygpXG4gICAgdGhpcy5kb2MubGlzdGVuZXIudXBkYXRlRmluaXNoKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgY2FsbGJhY2sgaWQgXCIke2NhbGxiYWNrSWR9XCJgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaERhdGEoZGF0YSkge1xuICBfLmRlYnVnKGBSZWZyZXNoIHdpdGhgLCBkYXRhLFxuICAgICAgICAgICAgYGluIGluc3RhbmNlWyR7dGhpcy5pZH1dYClcblxuICBjb25zdCB2bSA9IHRoaXMudm1cblxuICBpZiAodm0gJiYgZGF0YSkge1xuICAgIGlmICh0eXBlb2Ygdm0ucmVmcmVzaERhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZtLnJlZnJlc2hEYXRhKGRhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIF8uZXh0ZW5kKHZtLCBkYXRhKVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUFjdGlvbnMoKVxuICAgIHRoaXMuZG9jLmxpc3RlbmVyLnJlZnJlc2hGaW5pc2goKVxuICAgIHJldHVyblxuICB9XG5cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBkYXRhIFwiJHtkYXRhfVwiYClcbn1cblxuZnVuY3Rpb24gdXBkYXRlRWxlbWVudChlbCwgY2hhbmdlcykge1xuICBjb25zdCBhdHRycyA9IGNoYW5nZXMuYXR0cnMgfHwge31cbiAgZm9yIChjb25zdCBuYW1lIGluIGF0dHJzKSB7XG4gICAgZWwuc2V0QXR0cihuYW1lLCBhdHRyc1tuYW1lXSwgdHJ1ZSlcbiAgfVxuICBjb25zdCBzdHlsZSA9IGNoYW5nZXMuc3R5bGUgfHwge31cbiAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlKSB7XG4gICAgZWwuc2V0U3R5bGUobmFtZSwgc3R5bGVbbmFtZV0sIHRydWUpXG4gIH1cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9saWIvYXBwL2N0cmwuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0ZW5lcihpZCwgaGFuZGxlcikge1xuICB0aGlzLmlkID0gaWRcbiAgdGhpcy5iYXRjaGVkID0gZmFsc2VcbiAgdGhpcy51cGRhdGVzID0gW11cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlclxuICB9XG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5jcmVhdGVGaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ2NyZWF0ZUZpbmlzaCcsIFtdKV0sIGNhbGxiYWNrKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUudXBkYXRlRmluaXNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXJcbiAgaGFuZGxlcihbY3JlYXRlQWN0aW9uKCd1cGRhdGVGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnJlZnJlc2hGaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ3JlZnJlc2hGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmNyZWF0ZUJvZHkgPSBmdW5jdGlvbiAoZWxlbWVudCwgcmVmKSB7XG4gIGNvbnN0IGFjdGlvbnMgPSBbY3JlYXRlQWN0aW9uKCdjcmVhdGVCb2R5JywgW2VsZW1lbnQudG9KU09OKCldKV1cbiAgdGhpcy5hZGRBY3Rpb25zKGFjdGlvbnMpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5hZGRFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHJlZiwgaW5kZXgpIHtcbiAgaWYgKCEoaW5kZXggPj0gMCkpIHtcbiAgICBpbmRleCA9IC0xXG4gIH1cbiAgdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbignYWRkRWxlbWVudCcsIFtyZWYsIGVsZW1lbnQudG9KU09OKCksIGluZGV4XSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5yZW1vdmVFbGVtZW50ID0gZnVuY3Rpb24gKHJlZikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyZWYpKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IHJlZi5tYXAoKHIpID0+IGNyZWF0ZUFjdGlvbigncmVtb3ZlRWxlbWVudCcsIFtyXSkpXG4gICAgdGhpcy5hZGRBY3Rpb25zKGFjdGlvbnMpXG4gIH1cbiAgZWxzZSB7XG4gICAgdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigncmVtb3ZlRWxlbWVudCcsIFtyZWZdKSlcbiAgfVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUubW92ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFyZ2V0UmVmLCBwYXJlbnRSZWYsIGluZGV4KSB7XG4gIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ21vdmVFbGVtZW50JywgW3RhcmdldFJlZiwgcGFyZW50UmVmLCBpbmRleF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuc2V0QXR0ciA9IGZ1bmN0aW9uIChyZWYsIGtleSwgdmFsdWUpIHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCd1cGRhdGVBdHRycycsIFtyZWYsIHJlc3VsdF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuc2V0U3R5bGUgPSBmdW5jdGlvbiAocmVmLCBrZXksIHZhbHVlKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9XG4gIHJlc3VsdFtrZXldID0gdmFsdWVcbiAgdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigndXBkYXRlU3R5bGUnLCBbcmVmLCByZXN1bHRdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnNldFN0eWxlcyA9IGZ1bmN0aW9uIChyZWYsIHN0eWxlKSB7XG4gIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3VwZGF0ZVN0eWxlJywgW3JlZiwgc3R5bGVdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24gKHJlZiwgdHlwZSkge1xuICB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdhZGRFdmVudCcsIFtyZWYsIHR5cGVdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKHJlZiwgdHlwZSkge1xuICB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdyZW1vdmVFdmVudCcsIFtyZWYsIHR5cGVdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmhhbmRsZXIgPSBmdW5jdGlvbiAoYWN0aW9ucywgY2IpIHtcbiAgY2IgJiYgY2IoKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuYWRkQWN0aW9ucyA9IGZ1bmN0aW9uIChhY3Rpb25zKSB7XG4gIGNvbnN0IHVwZGF0ZXMgPSB0aGlzLnVwZGF0ZXNcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuXG4gIGlmICghQXJyYXkuaXNBcnJheShhY3Rpb25zKSkge1xuICAgIGFjdGlvbnMgPSBbYWN0aW9uc11cbiAgfVxuXG4gIGlmICh0aGlzLmJhdGNoZWQpIHtcbiAgICB1cGRhdGVzLnB1c2guYXBwbHkodXBkYXRlcywgYWN0aW9ucylcbiAgfVxuICBlbHNlIHtcbiAgICBoYW5kbGVyKGFjdGlvbnMpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFjdGlvbihuYW1lLCBhcmdzKSB7XG4gIHJldHVybiB7bW9kdWxlOiAnZG9tJywgbWV0aG9kOiBuYW1lLCBhcmdzOiBhcmdzfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9saWIvYXBwL2RvbS1saXN0ZW5lci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpZmZlciB7XG4gIGNvbnN0cnVjdG9yIChpZCkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMubWFwID0gW11cbiAgICB0aGlzLmhvb2tzID0gW11cbiAgfVxuICBpc0VtcHR5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAubGVuZ3RoID09PSAwXG4gIH1cbiAgYXBwZW5kICh0eXBlLCBkZXB0aCwgcmVmLCBoYW5kbGVyKSB7XG4gICAgY29uc3QgbWFwID0gdGhpcy5tYXBcbiAgICBpZiAoIW1hcFtkZXB0aF0pIHtcbiAgICAgIG1hcFtkZXB0aF0gPSB7fVxuICAgIH1cbiAgICBjb25zdCBncm91cCA9IG1hcFtkZXB0aF1cbiAgICBpZiAoIWdyb3VwW3R5cGVdKSB7XG4gICAgICBncm91cFt0eXBlXSA9IHt9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnZWxlbWVudCcpIHtcbiAgICAgIGlmICghZ3JvdXBbdHlwZV1bcmVmXSkge1xuICAgICAgICBncm91cFt0eXBlXVtyZWZdID0gW11cbiAgICAgIH1cbiAgICAgIGdyb3VwW3R5cGVdW3JlZl0ucHVzaChoYW5kbGVyKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGdyb3VwW3R5cGVdW3JlZl0gPSBoYW5kbGVyXG4gICAgfVxuICB9XG4gIGZsdXNoICgpIHtcbiAgICBjb25zdCBtYXAgPSB0aGlzLm1hcC5zbGljZSgpXG4gICAgdGhpcy5tYXAubGVuZ3RoID0gMFxuICAgIG1hcC5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgY2FsbFR5cGVNYXAoZ3JvdXAsICdyZXBlYXQnKVxuICAgICAgY2FsbFR5cGVNYXAoZ3JvdXAsICdzaG93bicpXG4gICAgICBjYWxsVHlwZUxpc3QoZ3JvdXAsICdlbGVtZW50JylcbiAgICB9KVxuXG4gICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLnNsaWNlKClcbiAgICB0aGlzLmhvb2tzLmxlbmd0aCA9IDBcbiAgICBob29rcy5mb3JFYWNoKChmbikgPT4ge1xuICAgICAgZm4oKVxuICAgIH0pXG5cbiAgICBpZiAoIXRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICB0aGlzLmZsdXNoKClcbiAgICB9XG4gIH1cbiAgdGhlbiAoZm4pIHtcbiAgICB0aGlzLmhvb2tzLnB1c2goZm4pXG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbFR5cGVNYXAoZ3JvdXAsIHR5cGUpIHtcbiAgY29uc3QgbWFwID0gZ3JvdXBbdHlwZV1cbiAgZm9yIChjb25zdCByZWYgaW4gbWFwKSB7XG4gICAgbWFwW3JlZl0oKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGxUeXBlTGlzdChncm91cCwgdHlwZSkge1xuICBjb25zdCBtYXAgPSBncm91cFt0eXBlXVxuICBmb3IgKGNvbnN0IHJlZiBpbiBtYXApIHtcbiAgICBjb25zdCBsaXN0ID0gbWFwW3JlZl1cbiAgICBsaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHtoYW5kbGVyKCl9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL2xpYi9hcHAvZGlmZmVyLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGV2ZW50IG1hbmFnZXJcbiAqL1xuXG5pbXBvcnQgKiBhcyBfIGZyb20gJy4uL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50TWFuYWdlcigpIHtcbiAgdGhpcy5lbHMgPSBbXVxuICB0aGlzLnRhcmdldHMgPSBbXVxufVxuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLl9nZXQgPSBmdW5jdGlvbiAoZWwsIGZvcmNlKSB7XG4gIHZhciBpbmRleCA9IHRoaXMuZWxzLmluZGV4T2YoZWwpXG4gIHZhciB0YXJnZXRcbiAgaWYgKGluZGV4ID49IDApIHtcbiAgICB0YXJnZXQgPSB0aGlzLnRhcmdldHNbaW5kZXhdXG4gIH1cbiAgZWxzZSBpZiAoZm9yY2UpIHtcbiAgICB0YXJnZXQgPSB7ZWw6IGVsLCBldmVudHM6IHt9fVxuICAgIHRoaXMuZWxzLnB1c2goZWwpXG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG4gIHJldHVybiB0YXJnZXRcbn1cblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZWwsIHR5cGUsIGhhbmRsZXIpIHtcbiAgaWYgKHR5cGVvZiBlbCAhPT0gJ29iamVjdCcgfHwgIWVsIHx8XG4gICAgdHlwZW9mIHR5cGUgIT09ICdzdHJpbmcnIHx8ICF0eXBlIHx8XG4gICAgdHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgdGFyZ2V0ID0gdGhpcy5fZ2V0KGVsLCB0cnVlKVxuICB0YXJnZXQuZXZlbnRzW3R5cGVdID0gaGFuZGxlclxufVxuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChlbCwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVsICE9PSAnb2JqZWN0JyB8fCAhZWwgfHxcbiAgICB0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycgfHwgIXR5cGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgdGFyZ2V0ID0gdGhpcy5fZ2V0KGVsKVxuICBpZiAodGFyZ2V0KSB7XG4gICAgZGVsZXRlIHRhcmdldC5ldmVudHNbdHlwZV1cbiAgfVxufVxuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbiAoZWwsIHR5cGUsIGUpIHtcbiAgdmFyIHRhcmdldCA9IHRoaXMuX2dldChlbClcbiAgdmFyIGhhbmRsZXIsIGVsXG4gIGlmICh0YXJnZXQpIHtcbiAgICBlbCA9IHRhcmdldC5lbFxuICAgIGhhbmRsZXIgPSB0YXJnZXQuZXZlbnRzW3R5cGVdXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaGFuZGxlci5jYWxsKGVsLCBlKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9saWIvYXBwL2V2ZW50LmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBBIHNpbXBsZSB2aXJ0dWFsIGRvbSBpbXBsZW1lbnRhdGlvblxuICovXG5cbmNvbnN0IERFRkFVTFRfVEFHX05BTUUgPSAnZGl2J1xuXG5leHBvcnQgY29uc3QgaW5zdGFuY2VNYXAgPSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gRG9jdW1lbnQoaWQsIHVybCkge1xuICBpZCA9IGlkID8gaWQudG9TdHJpbmcoKSA6ICcnXG4gIHRoaXMuaWQgPSBpZFxuICB0aGlzLlVSTCA9IHVybFxuICB0aGlzLm5leHRSZWYgPSAxXG4gIHRoaXMubm9kZU1hcCA9IHt9XG4gIHRoaXMubGlzdGVuZXIgPSBudWxsXG4gIHRoaXMuZXZlbnRNYW5hZ2VyID0gbnVsbFxuICB0aGlzLmNsb3NlZCA9IGZhbHNlXG4gIGluc3RhbmNlTWFwW2lkXSA9IHRoaXNcblxuICB0aGlzLmNyZWF0ZURvY3VtZW50RWxlbWVudCgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95RG9jdW1lbnQoaWQpIHtcbiAgZGVsZXRlIGluc3RhbmNlTWFwW2lkXVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jbG9zZWQgPSBmYWxzZVxuICBpZiAodGhpcy5saXN0ZW5lcikge1xuICAgIHRoaXMubGlzdGVuZXIuYmF0Y2hlZCA9IGZhbHNlXG4gIH1cbn1cbkRvY3VtZW50LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jbG9zZWQgPSB0cnVlXG4gIGlmICh0aGlzLmxpc3RlbmVyKSB7XG4gICAgdGhpcy5saXN0ZW5lci5iYXRjaGVkID0gdHJ1ZVxuICB9XG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5zZXRFdmVudE1hbmFnZXIgPSBmdW5jdGlvbiAoZXZlbnRNYW5hZ2VyKSB7XG4gIHRoaXMuZXZlbnRNYW5hZ2VyID0gZXZlbnRNYW5hZ2VyXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5zZXRMaXN0ZW5lciA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICB0aGlzLmxpc3RlbmVyID0gbGlzdGVuZXJcbiAgbGlzdGVuZXIuYmF0Y2hlZCA9ICEhdGhpcy5jbG9zZWRcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmFkZFJlZiA9IGZ1bmN0aW9uIChlbCkge1xuICBlbC5yZWYgPSB0aGlzLm5leHRSZWYudG9TdHJpbmcoKVxuICB0aGlzLm5vZGVNYXBbZWwucmVmXSA9IGVsXG4gIHRoaXMubmV4dFJlZisrXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5nZXRSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gIHJldHVybiB0aGlzLm5vZGVNYXBbcmVmXVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUucmVtb3ZlUmVmID0gZnVuY3Rpb24gKHJlZikge1xuICBkZWxldGUgdGhpcy5ub2RlTWFwW3JlZl1cbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZURvY3VtZW50RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBwcm9wcykge1xuICBpZiAoIXRoaXMuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgdGhpcy5kb2N1bWVudEVsZW1lbnQgPSBuZXcgRWxlbWVudCh0eXBlLCBwcm9wcywgdGhpcylcbiAgICB0aGlzLm5vZGVNYXAuX2RvY3VtZW50RWxlbWVudCA9IHRoaXMuZG9jdW1lbnRFbGVtZW50XG4gICAgdGhpcy5kb2N1bWVudEVsZW1lbnQucmVmID0gJ19kb2N1bWVudEVsZW1lbnQnXG4gICAgdGhpcy5kb2N1bWVudEVsZW1lbnQuYXR0YWNoZWQgPSB0cnVlXG4gIH1cblxuICByZXR1cm4gdGhpcy5kb2N1bWVudEVsZW1lbnRcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUJvZHkgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMpIHtcbiAgaWYgKCF0aGlzLmJvZHkpIHtcbiAgICB0aGlzLmJvZHkgPSBuZXcgRWxlbWVudCh0eXBlLCBwcm9wcywgdGhpcylcbiAgICB0aGlzLm5vZGVNYXAuX3Jvb3QgPSB0aGlzLmJvZHlcbiAgICB0aGlzLmJvZHkucmVmID0gJ19yb290J1xuICAgIHRoaXMuYm9keS5kZXB0aCA9IDFcbiAgfVxuXG4gIHJldHVybiB0aGlzLmJvZHlcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnTmFtZSwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBFbGVtZW50KHRhZ05hbWUsIHByb3BzLCB0aGlzKVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlQ29tbWVudCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gIHJldHVybiBuZXcgQ29tbWVudCh0ZXh0LCB0aGlzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTm9kZSgpIHtcbn1cblxuTm9kZS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKGluc3RhbmNlSWQpIHtcbiAgdGhpcy5wYXJlbnRSZWYgPSBudWxsXG4gIHRoaXMuYXR0YWNoZWQgPSBmYWxzZVxuICBpZiAoaW5zdGFuY2VJZCkge1xuICAgIHRoaXMuaW5zdGFuY2VJZCA9IGluc3RhbmNlSWRcbiAgICBjb25zdCBkb2MgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICAgIGRvYy5hZGRSZWYodGhpcylcbiAgfVxufVxuXG5Ob2RlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCByZWYgPSB0aGlzLnJlZlxuICBjb25zdCBpbnN0YW5jZUlkID0gdGhpcy5pbnN0YW5jZUlkXG4gIGlmIChpbnN0YW5jZUlkKSB7XG4gICAgY29uc3QgZG9jID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgICBkb2MucmVtb3ZlUmVmKHJlZilcbiAgfVxuXG4gIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbiB8fCBbXVxuICBjb25zdCBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGhcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNoaWxkcmVuW2ldLmRlc3Ryb3koKVxuICB9XG59XG5cbk5vZGUucHJvdG90eXBlLmdldFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBkb2MgPSBpbnN0YW5jZU1hcFt0aGlzLmluc3RhbmNlSWRdXG4gIHJldHVybiBkb2MubGlzdGVuZXJcbn1cblxuTm9kZS5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaW5zdGFuY2VJZCA9IHRoaXMuaW5zdGFuY2VJZFxuICBjb25zdCBkb2MgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICBjb25zdCBwYXJlbnQgPSBkb2MuZ2V0UmVmKHRoaXMucGFyZW50UmVmKVxuICBpZiAocGFyZW50KSB7XG4gICAgcmV0dXJuIHBhcmVudC5jaGlsZHJlbltwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKSArIDFdXG4gIH1cbn1cblxuTm9kZS5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaW5zdGFuY2VJZCA9IHRoaXMuaW5zdGFuY2VJZFxuICBjb25zdCBkb2MgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICBjb25zdCBwYXJlbnQgPSBkb2MuZ2V0UmVmKHRoaXMucGFyZW50UmVmKVxuICBpZiAocGFyZW50KSB7XG4gICAgcmV0dXJuIHBhcmVudC5jaGlsZHJlbltwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKSAtIDFdXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVsZW1lbnQodHlwZT1ERUZBVUxUX1RBR19OQU1FLCBwcm9wcywgb3duZXJEb2N1bWVudCkge1xuICBwcm9wcyA9IHByb3BzIHx8IHt9XG4gIHRoaXMuY3JlYXRlKG93bmVyRG9jdW1lbnQuaWQpXG4gIHRoaXMub3duZXJEb2N1bWVudCA9IG93bmVyRG9jdW1lbnRcbiAgdGhpcy50eXBlID0gdHlwZVxuICB0aGlzLmF0dHIgPSBwcm9wcy5hdHRyIHx8IHt9XG4gIHRoaXMuY2xhc3NTdHlsZSA9IHByb3BzLmNsYXNzU3R5bGUgfHwge31cbiAgdGhpcy5zdHlsZSA9IHByb3BzLnN0eWxlIHx8IHt9XG4gIHRoaXMuZXZlbnQgPSBbXVxuICB0aGlzLmNoaWxkcmVuID0gW11cbiAgdGhpcy5wdXJlQ2hpbGRyZW4gPSBbXVxufVxuXG5FbGVtZW50LnByb3RvdHlwZSA9IG5ldyBOb2RlKClcblxuRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAobm9kZSkge1xuXG4gIHJlbW92ZUlmRXhpc3RlZChub2RlKVxuICBub2RlLnBhcmVudFJlZiA9IHRoaXMucmVmXG4gIHRoaXMuY2hpbGRyZW4ucHVzaChub2RlKVxuXG4gIGlmICh0aGlzLmF0dGFjaGVkKSB7XG4gICAgc2V0QXR0YWNoZWQobm9kZSwgdGhpcy5kZXB0aClcbiAgfVxuICBlbHNlIHtcbiAgICBzZXREZXRhY2hlZChub2RlKVxuICB9XG5cbiAgaWYgKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgdGhpcy5wdXJlQ2hpbGRyZW4ucHVzaChub2RlKVxuXG4gICAgaWYgKHRoaXMuYXR0YWNoZWQpIHtcbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5nZXRSZW5kZXJlcigpXG4gICAgICBpZiAocmVuZGVyZXIpIHtcbiAgICAgICAgaWYgKHRoaXMucmVmID09PSAnX2RvY3VtZW50RWxlbWVudCcpIHtcbiAgICAgICAgICAvLyBpZiBpdHMgcGFyZW50IGlzIGRvY3VtZW50RWxlbWVudCB0aGVuIGl0J3MgYSBib2R5XG4gICAgICAgICAgcmVuZGVyZXIuY3JlYXRlQm9keShub2RlLCB0aGlzLnJlZilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZW5kZXJlci5hZGRFbGVtZW50KG5vZGUsIHRoaXMucmVmKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmluc2VydEJlZm9yZSA9IGZ1bmN0aW9uIChub2RlLCBiZWZvcmUpIHtcblxuICBpZiAobm9kZS5wYXJlbnRSZWYgPT09IHRoaXMucmVmKSB7XG4gICAgbW92ZUJlZm9yZShub2RlLCBiZWZvcmUsIHRoaXMuY2hpbGRyZW4pXG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICBjb25zdCBwdXJlQmVmb3JlSW5kZXggPSBtb3ZlUHVyZUJlZm9yZShub2RlLCBiZWZvcmUsIHRoaXMucHVyZUNoaWxkcmVuKVxuICAgICAgaWYgKHB1cmVCZWZvcmVJbmRleCA+PSAwICYmIHRoaXMuYXR0YWNoZWQpIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLmdldFJlbmRlcmVyKClcbiAgICAgICAgaWYgKHJlbmRlcmVyKSB7XG4gICAgICAgICAgcmVuZGVyZXIubW92ZUVsZW1lbnQobm9kZS5yZWYsIHRoaXMucmVmLCBwdXJlQmVmb3JlSW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICByZW1vdmVJZkV4aXN0ZWQobm9kZSlcblxuICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW5cbiAgY29uc3QgaW5kZXggPSBjaGlsZHJlbi5pbmRleE9mKGJlZm9yZSlcblxuICBub2RlLnBhcmVudFJlZiA9IHRoaXMucmVmXG4gIGlmICh0aGlzLmF0dGFjaGVkKSB7XG4gICAgc2V0QXR0YWNoZWQobm9kZSwgdGhpcy5kZXB0aClcbiAgfVxuICBlbHNlIHtcbiAgICBzZXREZXRhY2hlZChub2RlKVxuICB9XG4gIGNoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgbm9kZSlcblxuICBpZiAobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICBjb25zdCBwdXJlQ2hpbGRyZW4gPSB0aGlzLnB1cmVDaGlsZHJlblxuICAgIGNvbnN0IHB1cmVJbmRleCA9IGdldFB1cmVBZnRlcihiZWZvcmUsIHB1cmVDaGlsZHJlbilcblxuICAgIHB1cmVDaGlsZHJlbi5zcGxpY2UocHVyZUluZGV4LCAwLCBub2RlKVxuXG4gICAgaWYgKHRoaXMuYXR0YWNoZWQpIHtcbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5nZXRSZW5kZXJlcigpXG4gICAgICBpZiAocmVuZGVyZXIpIHtcbiAgICAgICAgcmVuZGVyZXIuYWRkRWxlbWVudChub2RlLCB0aGlzLnJlZiwgcHVyZUluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZnRlciA9IGZ1bmN0aW9uIChub2RlLCBhZnRlcikge1xuXG4gIGlmIChub2RlLnBhcmVudFJlZiA9PT0gdGhpcy5yZWYpIHtcbiAgICBtb3ZlQWZ0ZXIobm9kZSwgYWZ0ZXIsIHRoaXMuY2hpbGRyZW4pXG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICBjb25zdCBwdXJlQWZ0ZXJJbmRleCA9IG1vdmVQdXJlQWZ0ZXIobm9kZSwgYWZ0ZXIsIHRoaXMucHVyZUNoaWxkcmVuKVxuICAgICAgaWYgKHB1cmVBZnRlckluZGV4ID49IDAgJiYgdGhpcy5hdHRhY2hlZCkge1xuICAgICAgICBjb25zdCByZW5kZXJlciA9IHRoaXMuZ2V0UmVuZGVyZXIoKVxuICAgICAgICBpZiAocmVuZGVyZXIpIHtcbiAgICAgICAgICByZW5kZXJlci5tb3ZlRWxlbWVudChub2RlLnJlZiwgdGhpcy5yZWYsIHB1cmVBZnRlckluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgcmVtb3ZlSWZFeGlzdGVkKG5vZGUpXG5cbiAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuXG4gIGNvbnN0IGluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZihhZnRlcilcblxuICBub2RlLnBhcmVudFJlZiA9IHRoaXMucmVmXG4gIGlmICh0aGlzLmF0dGFjaGVkKSB7XG4gICAgc2V0QXR0YWNoZWQobm9kZSwgdGhpcy5kZXB0aClcbiAgfSBlbHNlIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHNldERldGFjaGVkKG5vZGUpXG4gIH1cbiAgY2hpbGRyZW4uc3BsaWNlKGluZGV4ICsgMSwgMCwgbm9kZSlcblxuICBpZiAobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICBjb25zdCBwdXJlQ2hpbGRyZW4gPSB0aGlzLnB1cmVDaGlsZHJlblxuICAgIGNvbnN0IHB1cmVJbmRleCA9IGdldFB1cmVCZWZvcmUoYWZ0ZXIsIHB1cmVDaGlsZHJlbilcblxuICAgIHB1cmVDaGlsZHJlbi5zcGxpY2UocHVyZUluZGV4ICsgMSwgMCwgbm9kZSlcblxuICAgIGlmICh0aGlzLmF0dGFjaGVkKSB7XG4gICAgICBjb25zdCByZW5kZXJlciA9IHRoaXMuZ2V0UmVuZGVyZXIoKVxuICAgICAgaWYgKHJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLmFkZEVsZW1lbnQobm9kZSwgdGhpcy5yZWYsIHB1cmVJbmRleCArIDEpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUNoaWxkID0gZnVuY3Rpb24gKG5vZGUsIHByZXNlcnZlZCkge1xuICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW5cbiAgY29uc3QgaW5kZXggPSBjaGlsZHJlbi5pbmRleE9mKG5vZGUpXG5cbiAgc2V0RGV0YWNoZWQobm9kZSlcblxuICBpZiAoaW5kZXggPj0gMCkge1xuICAgIG5vZGUucGFyZW50UmVmID0gbnVsbFxuICAgIGNoaWxkcmVuLnNwbGljZShpbmRleCwgMSlcbiAgICBpZiAoIXByZXNlcnZlZCkge1xuICAgICAgbm9kZS5kZXN0cm95KClcbiAgICB9XG4gIH1cblxuICBpZiAobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICB0aGlzLnB1cmVDaGlsZHJlbi4kcmVtb3ZlKG5vZGUpXG4gICAgaWYgKHRoaXMuYXR0YWNoZWQpIHtcbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5nZXRSZW5kZXJlcigpXG4gICAgICBpZiAocmVuZGVyZXIpIHtcbiAgICAgICAgcmVuZGVyZXIucmVtb3ZlRWxlbWVudChub2RlLnJlZilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlblxuICBjb25zdCBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGhcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICBjaGlsZC5wYXJlbnRSZWYgPSBudWxsXG4gICAgc2V0RGV0YWNoZWQoY2hpbGQpXG4gICAgY2hpbGQuZGVzdHJveSgpXG4gIH1cbiAgY2hpbGRyZW4ubGVuZ3RoID0gMFxuXG4gIGlmICh0aGlzLmF0dGFjaGVkKSB7XG4gICAgY29uc3QgcmVmcyA9IHRoaXMucHVyZUNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLnJlZilcbiAgICB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGggPSAwXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLmdldFJlbmRlcmVyKClcbiAgICBpZiAocmVuZGVyZXIpIHtcbiAgICAgIHJlbmRlcmVyLnJlbW92ZUVsZW1lbnQocmVmcylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbW92ZUJlZm9yZShub2RlLCBiZWZvcmUsIGNoaWxkcmVuKSB7XG4gIGNvbnN0IHRhcmdldEluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZihub2RlKVxuICBjb25zdCBiZWZvcmVJbmRleCA9IGNoaWxkcmVuLmluZGV4T2YoYmVmb3JlKVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmICh0YXJnZXRJbmRleCA9PT0gYmVmb3JlSW5kZXggfHwgdGFyZ2V0SW5kZXggKyAxID09PSBiZWZvcmVJbmRleCkge1xuICAgIHJldHVybiAtMVxuICB9XG5cbiAgY29uc3QgbmV3SW5kZXggPSB0YXJnZXRJbmRleCA8IGJlZm9yZUluZGV4ID8gYmVmb3JlSW5kZXggLSAxIDogYmVmb3JlSW5kZXhcbiAgY2hpbGRyZW4uc3BsaWNlKHRhcmdldEluZGV4LCAxKVxuICBjaGlsZHJlbi5zcGxpY2UobmV3SW5kZXgsIDAsIG5vZGUpXG5cbiAgcmV0dXJuIGJlZm9yZUluZGV4XG59XG5cbmZ1bmN0aW9uIG1vdmVQdXJlQmVmb3JlKG5vZGUsIGJlZm9yZSwgcHVyZUNoaWxkcmVuKSB7XG4gIGNvbnN0IHB1cmVUYXJnZXRJbmRleCA9IHB1cmVDaGlsZHJlbi5pbmRleE9mKG5vZGUpXG4gIGNvbnN0IHB1cmVCZWZvcmVJbmRleCA9IGdldFB1cmVBZnRlcihiZWZvcmUsIHB1cmVDaGlsZHJlbilcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAocHVyZVRhcmdldEluZGV4ID09PSBwdXJlQmVmb3JlSW5kZXggfHxcbiAgICBwdXJlVGFyZ2V0SW5kZXggKyAxID09PSBwdXJlQmVmb3JlSW5kZXgpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuXG4gIGNvbnN0IHB1cmVOZXdJbmRleCA9IHB1cmVUYXJnZXRJbmRleCA8IHB1cmVCZWZvcmVJbmRleFxuICAgID8gcHVyZUJlZm9yZUluZGV4IC0gMVxuICAgIDogcHVyZUJlZm9yZUluZGV4XG5cbiAgcHVyZUNoaWxkcmVuLnNwbGljZShwdXJlVGFyZ2V0SW5kZXgsIDEpXG4gIHB1cmVDaGlsZHJlbi5zcGxpY2UocHVyZU5ld0luZGV4LCAwLCBub2RlKVxuXG4gIHJldHVybiBwdXJlQmVmb3JlSW5kZXhcbn1cblxuZnVuY3Rpb24gZ2V0UHVyZUFmdGVyKG5vZGUsIHB1cmVDaGlsZHJlbikge1xuICBsZXQgcHVyZUluZGV4ID0gcHVyZUNoaWxkcmVuLmluZGV4T2Yobm9kZSlcbiAgd2hpbGUgKG5vZGUgJiYgcHVyZUluZGV4IDwgMCkge1xuICAgIG5vZGUgPSBub2RlLm5leHQoKVxuICAgIHB1cmVJbmRleCA9IHB1cmVDaGlsZHJlbi5pbmRleE9mKG5vZGUpXG4gIH1cbiAgaWYgKHB1cmVJbmRleCA8IDApIHtcbiAgICBwdXJlSW5kZXggPSBwdXJlQ2hpbGRyZW4ubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIHB1cmVJbmRleFxufVxuXG5mdW5jdGlvbiBtb3ZlQWZ0ZXIobm9kZSwgYWZ0ZXIsIGNoaWxkcmVuKSB7XG4gIGNvbnN0IHRhcmdldEluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZihub2RlKVxuICBjb25zdCBhZnRlckluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZihhZnRlcilcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAodGFyZ2V0SW5kZXggPT09IGFmdGVySW5kZXggfHwgdGFyZ2V0SW5kZXggPT09IGFmdGVySW5kZXggKyAxKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cblxuICBjb25zdCBuZXdJbmRleCA9IHRhcmdldEluZGV4IDwgYWZ0ZXJJbmRleCA/IGFmdGVySW5kZXggOiBhZnRlckluZGV4ICsgMVxuICBjaGlsZHJlbi5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpXG4gIGNoaWxkcmVuLnNwbGljZShuZXdJbmRleCwgMCwgbm9kZSlcblxuICByZXR1cm4gYWZ0ZXJJbmRleFxufVxuXG5mdW5jdGlvbiBtb3ZlUHVyZUFmdGVyKG5vZGUsIGFmdGVyLCBwdXJlQ2hpbGRyZW4pIHtcbiAgY29uc3QgcHVyZVRhcmdldEluZGV4ID0gcHVyZUNoaWxkcmVuLmluZGV4T2Yobm9kZSlcbiAgY29uc3QgcHVyZUFmdGVySW5kZXggPSBnZXRQdXJlQmVmb3JlKGFmdGVyLCBwdXJlQ2hpbGRyZW4pXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKHB1cmVUYXJnZXRJbmRleCA9PT0gcHVyZUFmdGVySW5kZXggfHxcbiAgICBwdXJlVGFyZ2V0SW5kZXggPT09IHB1cmVBZnRlckluZGV4ICsgMSkge1xuICAgIHJldHVybiAtMVxuICB9XG5cbiAgY29uc3QgcHVyZU5ld0luZGV4ID0gcHVyZVRhcmdldEluZGV4IDwgcHVyZUFmdGVySW5kZXhcbiAgICA/IHB1cmVBZnRlckluZGV4XG4gICAgOiBwdXJlQWZ0ZXJJbmRleCArIDFcblxuICBwdXJlQ2hpbGRyZW4uc3BsaWNlKHB1cmVUYXJnZXRJbmRleCwgMSlcbiAgcHVyZUNoaWxkcmVuLnNwbGljZShwdXJlTmV3SW5kZXgsIDAsIG5vZGUpXG5cbiAgcmV0dXJuIHB1cmVBZnRlckluZGV4ICsgMVxufVxuXG5mdW5jdGlvbiBnZXRQdXJlQmVmb3JlKG5vZGUsIHB1cmVDaGlsZHJlbikge1xuICBsZXQgcHVyZUluZGV4ID0gcHVyZUNoaWxkcmVuLmluZGV4T2Yobm9kZSlcbiAgd2hpbGUgKG5vZGUgJiYgcHVyZUluZGV4IDwgMCkge1xuICAgIG5vZGUgPSBub2RlLnByZXYoKVxuICAgIHB1cmVJbmRleCA9IHB1cmVDaGlsZHJlbi5pbmRleE9mKG5vZGUpXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKHB1cmVJbmRleCA8IDApIHtcbiAgICBwdXJlSW5kZXggPSAtMVxuICB9XG4gIHJldHVybiBwdXJlSW5kZXhcbn1cblxuZnVuY3Rpb24gc2V0QXR0YWNoZWQobm9kZSwgZGVwdGgpIHtcbiAgaWYgKG5vZGUucmVmID09PSAnX3Jvb3QnKSB7XG4gICAgZGVwdGggPSAxXG4gIH1cbiAgZWxzZSB7XG4gICAgZGVwdGggPSBkZXB0aCA+IDAgPyBkZXB0aCArIDEgOiAwXG4gIH1cbiAgbm9kZS5hdHRhY2hlZCA9IHRydWVcbiAgbm9kZS5kZXB0aCA9IGRlcHRoXG4gIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChzdWIpID0+IHtcbiAgICAgIHNldEF0dGFjaGVkKHN1YiwgZGVwdGgpXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXREZXRhY2hlZChub2RlKSB7XG4gIG5vZGUuYXR0YWNoZWQgPSBmYWxzZVxuICBub2RlLmRlcHRoID0gMFxuICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoc3ViKSA9PiB7XG4gICAgICBzZXREZXRhY2hlZChzdWIpXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVJZkV4aXN0ZWQobm9kZSkge1xuICBjb25zdCBkb2MgPSBpbnN0YW5jZU1hcFtub2RlLmluc3RhbmNlSWRdXG4gIGlmIChkb2MpIHtcbiAgICBjb25zdCBleGlzdGVkTm9kZSA9IGRvYy5nZXRSZWYobm9kZS5yZWYpXG4gICAgaWYgKGV4aXN0ZWROb2RlKSB7XG4gICAgICBjb25zdCBleGlzdGVkUGFyZW50ID0gZG9jLmdldFJlZihleGlzdGVkTm9kZS5wYXJlbnRSZWYpXG4gICAgICBpZiAoZXhpc3RlZFBhcmVudCAmJiBleGlzdGVkUGFyZW50LnJlbW92ZUNoaWxkKSB7XG4gICAgICAgIGV4aXN0ZWRQYXJlbnQucmVtb3ZlQ2hpbGQoZXhpc3RlZE5vZGUsIHRydWUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgc2lsZW50KSB7XG4gIGlmICh0aGlzLmF0dHJba2V5XSA9PT0gdmFsdWUpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLmF0dHJba2V5XSA9IHZhbHVlXG4gIGlmICghc2lsZW50ICYmIHRoaXMuYXR0YWNoZWQpIHtcbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXMuZ2V0UmVuZGVyZXIoKVxuICAgIGlmIChyZW5kZXJlcikge1xuICAgICAgcmVuZGVyZXIuc2V0QXR0cih0aGlzLnJlZiwga2V5LCB2YWx1ZSlcbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuc2V0U3R5bGUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgc2lsZW50KSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodGhpcy5zdHlsZVtrZXldID09PSB2YWx1ZSkge1xuICAgIHJldHVyblxuICB9XG4gIHRoaXMuc3R5bGVba2V5XSA9IHZhbHVlXG4gIGlmICghc2lsZW50ICYmIHRoaXMuYXR0YWNoZWQpIHtcbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXMuZ2V0UmVuZGVyZXIoKVxuICAgIGlmIChyZW5kZXJlcikge1xuICAgICAgcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5yZWYsIGtleSwgdmFsdWUpXG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldENsYXNzU3R5bGUgPSBmdW5jdGlvbiAoY2xhc3NTdHlsZSkge1xuICB0aGlzLmNsYXNzU3R5bGUgPSBjbGFzc1N0eWxlXG4gIGlmICh0aGlzLmF0dGFjaGVkKSB7XG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLmdldFJlbmRlcmVyKClcbiAgICBpZiAocmVuZGVyZXIpIHtcbiAgICAgIHJlbmRlcmVyLnNldFN0eWxlcyh0aGlzLnJlZiwgdGhpcy50b1N0eWxlKCkpXG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24gKHR5cGUsIGhhbmRsZXIpIHtcbiAgY29uc3QgaW5kZXggPSB0aGlzLmV2ZW50LmluZGV4T2YodHlwZSlcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgdGhpcy5ldmVudC5wdXNoKHR5cGUpXG4gICAgbGV0IGV2ZW50TWFuYWdlciA9IHRoaXMub3duZXJEb2N1bWVudC5ldmVudE1hbmFnZXJcbiAgICBldmVudE1hbmFnZXIuYWRkKHRoaXMsIHR5cGUsIGhhbmRsZXIpXG5cbiAgICBpZiAodGhpcy5hdHRhY2hlZCkge1xuICAgICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLmdldFJlbmRlcmVyKClcbiAgICAgIGlmIChyZW5kZXJlcikge1xuICAgICAgICByZW5kZXJlci5hZGRFdmVudCh0aGlzLnJlZiwgdHlwZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAodHlwZSkge1xuICBjb25zdCBpbmRleCA9IHRoaXMuZXZlbnQuaW5kZXhPZih0eXBlKVxuXG4gIGlmIChpbmRleCA+PSAwKSB7XG4gICAgdGhpcy5ldmVudC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgbGV0IGV2ZW50TWFuYWdlciA9IHRoaXMub3duZXJEb2N1bWVudC5ldmVudE1hbmFnZXJcbiAgICBldmVudE1hbmFnZXIucmVtb3ZlKHRoaXMsIHR5cGUpXG5cbiAgICBpZiAodGhpcy5hdHRhY2hlZCkge1xuICAgICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLmdldFJlbmRlcmVyKClcbiAgICAgIGlmIChyZW5kZXJlcikge1xuICAgICAgICByZW5kZXJlci5yZW1vdmVFdmVudCh0aGlzLnJlZiwgdHlwZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUudG9TdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgY29uc3QgY2xhc3NTdHlsZSA9IHRoaXMuY2xhc3NTdHlsZVxuICBjb25zdCBzdHlsZSA9IHRoaXMuc3R5bGVcbiAgZm9yIChjb25zdCBuYW1lIGluIGNsYXNzU3R5bGUpIHtcbiAgICByZXN1bHRbbmFtZV0gPSBjbGFzc1N0eWxlW25hbWVdXG4gIH1cbiAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlKSB7XG4gICAgcmVzdWx0W25hbWVdID0gc3R5bGVbbmFtZV1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHJlZjogdGhpcy5yZWYudG9TdHJpbmcoKSxcbiAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgYXR0cjogdGhpcy5hdHRyLFxuICAgIHN0eWxlOiB0aGlzLnRvU3R5bGUoKVxuICB9XG5cbiAgaWYgKHRoaXMuZXZlbnQgJiYgdGhpcy5ldmVudC5sZW5ndGgpIHtcbiAgICByZXN1bHQuZXZlbnQgPSB0aGlzLmV2ZW50XG4gIH1cbiAgaWYgKHRoaXMucHVyZUNoaWxkcmVuICYmIHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aCkge1xuICAgIHJlc3VsdC5jaGlsZHJlbiA9IHRoaXMucHVyZUNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLnRvSlNPTigpKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5FbGVtZW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICc8JyArIHRoaXMudHlwZSArXG4gICAgJyBhdHRyPScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmF0dHIpICtcbiAgICAnIHN0eWxlPScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnRvU3R5bGUoKSkgKyAnPicgK1xuICAgIHRoaXMucHVyZUNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLnRvU3RyaW5nKCkpLmpvaW4oJycpICtcbiAgICAnPC8nICsgdGhpcy50eXBlICsgJz4nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb21tZW50KHZhbHVlLCBvd25lckRvY3VtZW50KSB7XG4gIHRoaXMuY3JlYXRlKG93bmVyRG9jdW1lbnQuaWQpXG4gIHRoaXMudHlwZSA9ICdjb21tZW50J1xuICB0aGlzLnZhbHVlID0gdmFsdWVcbn1cblxuQ29tbWVudC5wcm90b3R5cGUgPSBuZXcgTm9kZSgpXG5cbkNvbW1lbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJzwhLS0gJyArIHRoaXMudmFsdWUgKyAnIC0tPidcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy90ZXJyeSAxL0RldmVsb3AvSDUvd2VleC93ZWV4LW9zL3NyYy9qcy1mcmFtZXdvcmsvbGliL2FwcC9kb20uanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYW1lXCI6IFwid2VleC1qc2ZyYW1ld29ya1wiLFxuXHRcInZlcnNpb25cIjogXCIwLjEzLjEwXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJKUyBGcmFtZXdvcmsgZm9yIFdlZXggc29sdXRpb24gd2hpY2ggaXMgYSBleHRlbmRhYmxlIGNyb3NzLXBsYXRmb3JtIHNvbHV0aW9uIGZvciBkeW5hbWljIHByb2dyYW1taW5nIGFuZCBwdWJsaXNoaW5nIHByb2plY3RzXCIsXG5cdFwibWFpblwiOiBcImluZGV4LmpzXCIsXG5cdFwic2NyaXB0c1wiOiB7XG5cdFx0XCJkZXZcIjogXCJ3ZWJwYWNrIC0td2F0Y2ggLS1jb25maWcgLi93ZWJwYWNrLmNvbmZpZy5qc1wiLFxuXHRcdFwiYnVpbGRcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIC4vd2VicGFjay5jb25maWcuanNcIixcblx0XHRcImNvbXByZXNzXCI6IFwidWdsaWZ5anMgZGlzdC9pbmRleC5qcyAtbyBkaXN0L2luZGV4Lm1pbi5qc1wiLFxuXHRcdFwibGludFwiOiBcImpzY3MgLS1jb25maWcgLmpzY3NyYyBwb2x5ZmlsbC8qLmpzIHBvbHlmaWxsL19fdGVzdF9fLyouanMgbGliLyouanMgbGliL19fdGVzdF9fLyouanMgbGliL2FwcC8qLmpzIGxpYi9hcHAvX190ZXN0X18vKi5qcyBsaWIvdm0vKi5qcyBsaWIvdm0vX190ZXN0X18vKi5qc1wiLFxuXHRcdFwidGVzdFwiOiBcIm1vY2hhIC0tY29tcGlsZXJzIGpzOmJhYmVsLWNvcmUvcmVnaXN0ZXIgcG9seWZpbGwvX190ZXN0X18vKi5qcyBsaWIvX190ZXN0X18vKi5qcyBsaWIvKiovX190ZXN0X18vKi5qc1wiLFxuXHRcdFwiY292ZXJcIjogXCJiYWJlbC1ub2RlIG5vZGVfbW9kdWxlcy9pc3BhcnRhL2Jpbi9pc3BhcnRhIGNvdmVyIC0tcmVwb3J0IHRleHQgbm9kZV9tb2R1bGVzL21vY2hhL2Jpbi9fbW9jaGEgLS0gLS1yZXBvcnRlciBkb3QgcG9seWZpbGwvX190ZXN0X18vKi5qcyBsaWIvX190ZXN0X18vKi5qcyBsaWIvKiovX190ZXN0X18vKi5qc1wiLFxuXHRcdFwiY2lcIjogXCJucG0gcnVuIGxpbnQgJiYgbnBtIHJ1biBjb3ZlclwiXG5cdH0sXG5cdFwicmVwb3NpdG9yeVwiOiB7XG5cdFx0XCJ0eXBlXCI6IFwiZ2l0XCIsXG5cdFx0XCJ1cmxcIjogXCJnaXRAZ2l0aHViLmNvbTphbGliYWJhL3dlZXguZ2l0XCJcblx0fSxcblx0XCJhdXRob3JcIjogW1xuXHRcdHtcblx0XHRcdFwibmFtZVwiOiBcImppbmppYW5nXCIsXG5cdFx0XHRcImVtYWlsXCI6IFwiemhhb2ppbmppYW5nQG1lLmNvbVwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcIm5hbWVcIjogXCJUZXJyeSBLaW5nXCIsXG5cdFx0XHRcImVtYWlsXCI6IFwidGVycnlraW5nY2hhQGdtYWlsLmNvbVwiXG5cdFx0fVxuXHRdLFxuXHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0e1xuXHRcdFx0XCJuYW1lXCI6IFwicHVzaGltaW5nXCIsXG5cdFx0XHRcImVtYWlsXCI6IFwicHVzaGltaW5nQGdtYWlsLmNvbVwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcIm5hbWVcIjogXCJpc2tlbmh1YW5nXCIsXG5cdFx0XHRcImVtYWlsXCI6IFwiaXNrZW5odWFuZ0BnbWFpbC5jb21cIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJuYW1lXCI6IFwieXVhbnlhblwiLFxuXHRcdFx0XCJlbWFpbFwiOiBcInl1YW55YW4uY2FvQGdtYWlsLmNvbVwiXG5cdFx0fVxuXHRdLFxuXHRcImtleXdvcmRzXCI6IFtcblx0XHRcIndlZXhcIixcblx0XHRcIm12dm1cIixcblx0XHRcImJyb3dzZXJcIixcblx0XHRcImh5YnJpZFwiLFxuXHRcdFwiZnJhbWV3b3JrXCJcblx0XSxcblx0XCJsaWNlbnNlXCI6IFwiQXBhY2hlLTIuMFwiLFxuXHRcImRlcGVuZGVuY2llc1wiOiB7XG5cdFx0XCJzZW12ZXJcIjogXCJ+NS4xLjBcIixcblx0XHRcImNvcmUtanNcIjogXCJ+Mi4xLjFcIlxuXHR9LFxuXHRcImRldkRlcGVuZGVuY2llc1wiOiB7XG5cdFx0XCJiYWJlbC1jbGlcIjogXCJ+Ni40LjVcIixcblx0XHRcImJhYmVsLWNvcmVcIjogXCJ+Ni40LjVcIixcblx0XHRcImJhYmVsLWxvYWRlclwiOiBcIn42LjIuMVwiLFxuXHRcdFwiYmFiZWwtcHJlc2V0LWVzMjAxNVwiOiBcIn42LjMuMTNcIixcblx0XHRcImNoYWlcIjogXCJ+My4yLjBcIixcblx0XHRcImlzcGFydGFcIjogXCJ+NC4wLjBcIixcblx0XHRcImlzdGFuYnVsXCI6IFwifjAuNC4yXCIsXG5cdFx0XCJqc2NzXCI6IFwifjIuOS4wXCIsXG5cdFx0XCJqc29uLWxvYWRlclwiOiBcIl4wLjUuNFwiLFxuXHRcdFwibW9jaGFcIjogXCJ+Mi4zLjRcIixcblx0XHRcInNpbm9uXCI6IFwifjEuMTcuMlwiLFxuXHRcdFwic2lub24tY2hhaVwiOiBcIn4yLjguMFwiLFxuXHRcdFwidWdsaWZ5LWpzXCI6IFwiXjIuNi4yXCIsXG5cdFx0XCJ3YXRjaC1jbGlcIjogXCJ+MC4yLjFcIixcblx0XHRcIndlYnBhY2tcIjogXCJ+MS4xMi4xMlwiXG5cdH0sXG5cdFwib3B0aW9uYWxEZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwid2VleC10cmFuc2Zvcm1lclwiOiBcIj49MC4xLjUgPDAuNFwiXG5cdH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvdGVycnkgMS9EZXZlbG9wL0g1L3dlZXgvd2VleC1vcy9zcmMvanMtZnJhbWV3b3JrL3BhY2thZ2UuanNvblxuICoqIG1vZHVsZSBpZCA9IDY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgVGhlIGFwaSBmb3IgaW52b2tpbmcgd2l0aCBcIiRcIiBwcmVmaXhcbiAqL1xuaW1wb3J0ICogYXMgXyBmcm9tICcuLi91dGlsJ1xuXG4vKipcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIGNvbW1vblxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgdXNlICR2bSBpbnN0ZWFkXG4gKiBmaW5kIHRoZSB2bSBieSBpZFxuICogTm90ZTogdGhlcmUgaXMgb25seSBvbmUgaWQgaW4gd2hvbGUgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtWbX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICQoaWQpIHtcbiAgXy53YXJuKCdWbSMkIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgVm0jJHZtIGluc3RlYWQnKVxuICBjb25zdCBpbmZvID0gdGhpcy5faWRzW2lkXVxuICBpZiAoaW5mbykge1xuICAgIHJldHVybiBpbmZvLnZtXG4gIH1cbn1cblxuLyoqXG4gKiBmaW5kIHRoZSBlbGVtZW50IGJ5IGlkXG4gKiBOb3RlOiB0aGVyZSBpcyBvbmx5IG9uZSBpZCBpbiB3aG9sZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkZWwoaWQpIHtcbiAgY29uc3QgaW5mbyA9IHRoaXMuX2lkc1tpZF1cbiAgaWYgKGluZm8pIHtcbiAgICByZXR1cm4gaW5mby5lbFxuICB9XG59XG5cbi8qKlxuICogZmluZCB0aGUgdm0gb2YgdGhlIGN1c3RvbSBjb21wb25lbnQgYnkgaWRcbiAqIE5vdGU6IHRoZXJlIGlzIG9ubHkgb25lIGlkIGluIHdob2xlIGNvbXBvbmVudFxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7Vm19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkdm0oaWQpIHtcbiAgY29uc3QgaW5mbyA9IHRoaXMuX2lkc1tpZF1cbiAgaWYgKGluZm8pIHtcbiAgICByZXR1cm4gaW5mby52bVxuICB9XG59XG5cbi8qKlxuICogRmlyZSB3aGVuIGRpZmZlciByZW5kZXJpbmcgZmluaXNoZWRcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRyZW5kZXJUaGVuKGZuKSB7XG4gIGNvbnN0IGFwcCA9IHRoaXMuX2FwcFxuICBjb25zdCBkaWZmZXIgPSBhcHAuZGlmZmVyXG4gIHJldHVybiBkaWZmZXIudGhlbigoKSA9PiB7XG4gICAgZm4oKVxuICB9KVxufVxuXG4vKipcbiAqIHNjcm9sbCBhbiBlbGVtZW50IHNwZWNpZmllZCBieSBpZCBpbnRvIHZpZXcsIFxuICogbW9yZW92ZXIgc3BlY2lmeSBhIG51bWJlciBvZiBvZmZzZXQgb3B0aW9uYWxseVxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHBhcmFtICB7bnVtYmVyfSBvZmZzZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzY3JvbGxUbyhpZCwgb2Zmc2V0KSB7XG4gIF8ud2FybignVm0jJHNjcm9sbFRvIGlzIGRlcHJlY2F0ZWQsICcrIFxuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvZG9tXFwnKScgKyBcbiAgICAgICAgICAnLnNjcm9sbFRvKGVsLCBvcHRpb25zKVwiIGluc3RlYWQnKVxuICBjb25zdCBlbCA9IHRoaXMuJGVsKGlkKVxuICBpZiAoZWwpIHtcbiAgICBjb25zdCBkb20gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnZG9tJylcbiAgICBkb20uc2Nyb2xsVG9FbGVtZW50KGVsLnJlZiwge29mZnNldDogb2Zmc2V0fSlcbiAgfVxufVxuXG4vKipcbiAqIHBlcmZvcm0gdHJhbnNpdGlvbiBhbmltYXRpb24gb24gYW4gZWxlbWVudCBzcGVjaWZpZWQgYnkgaWRcbiAqIEBwYXJhbSAge3N0cmluZ30gICBpZFxuICogQHBhcmFtICB7b2JqZWN0fSAgIG9wdGlvbnNcbiAqIEBwYXJhbSAge29iamVjdH0gICBvcHRpb25zLnN0eWxlc1xuICogQHBhcmFtICB7b2JqZWN0fSAgIG9wdGlvbnMuZHVyYXRpb24obXMpXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgW29wdGlvbnMudGltaW5nRnVuY3Rpb25dXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgW29wdGlvbnMuZGVsYXk9MChtcyldXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICR0cmFuc2l0aW9uKGlkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBjb25zdCBlbCA9IHRoaXMuJGVsKGlkKVxuICBpZiAoZWwgJiYgb3B0aW9ucyAmJiBvcHRpb25zLnN0eWxlcykge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdhbmltYXRpb24nKVxuICAgIGFuaW1hdGlvbi50cmFuc2l0aW9uKGVsLnJlZiwgb3B0aW9ucywgKC4uLmFyZ3MpID0+IHtcbiAgICAgIHRoaXMuX3NldFN0eWxlKGVsLCBvcHRpb25zLnN0eWxlcylcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKC4uLmFyZ3MpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIGdldCBzb21lIGNvbmZpZ1xuICogQHJldHVybiB7b2JqZWN0fSBzb21lIGNvbmZpZyBmb3IgYXBwIGluc3RhbmNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gYnVuZGxlVXJsXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGRlYnVnXG4gKiBAcHJvcGVydHkge29iamVjdH0gZW52XG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LndlZXhWZXJzaW9uKGV4LiAxLjAuMClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYuYXBwTmFtZShleC4gVEIvVE0pXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LmFwcFZlcnNpb24oZXguIDUuMC4wKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5wbGF0Zm9ybShleC4gaU9TL0FuZHJvaWQpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52Lm9zVmVyc2lvbihleC4gNy4wLjApXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LmRldmljZU1vZGVsICoqbmF0aXZlIG9ubHkqKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVudi5bZGV2aWNlV2lkdGg9NzUwXVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVudi5kZXZpY2VIZWlnaHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRnZXRDb25maWcoY2FsbGJhY2spIHtcbiAgY29uc3QgY29uZmlnID0gXy5leHRlbmQoe1xuICAgIGVudjogZ2xvYmFsLldYRW52aXJvbm1lbnQgfHwge31cbiAgfSwgdGhpcy5fYXBwLm9wdGlvbnMpXG4gIGlmIChfLnR5cG9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIF8ud2FybigndGhlIGNhbGxiYWNrIG9mIFZtIyRnZXRDb25maWcoY2FsbGJhY2spIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgJ3RoaXMgYXBpIG5vdyBjYW4gZGlyZWN0bHkgUkVUVVJOIGNvbmZpZyBpbmZvLicpXG4gICAgY2FsbGJhY2soY29uZmlnKVxuICB9XG4gIHJldHVybiBjb25maWdcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogcmVxdWVzdCBuZXR3b3JrIHZpYSBodHRwIHByb3RvY29sXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgcGFyYW1zXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzZW5kSHR0cChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gIF8ud2FybignVm0jJHNlbmRIdHRwIGlzIGRlcHJlY2F0ZWQsICcrIFxuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvc3RyZWFtXFwnKScgKyBcbiAgICAgICAgICAnLnNlbmRIdHRwKHBhcmFtcywgY2FsbGJhY2spXCIgaW5zdGVhZCcpXG4gIGNvbnN0IHN0cmVhbSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdzdHJlYW0nKVxuICBzdHJlYW0uc2VuZEh0dHAocGFyYW1zLCBjYWxsYmFjaylcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogb3BlbiBhIHVybFxuICogQHBhcmFtICB7c3RyaW5nfSB1cmxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRvcGVuVVJMKHVybCkge1xuICBfLndhcm4oJ1ZtIyRvcGVuVVJMIGlzIGRlcHJlY2F0ZWQsICcrIFxuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvZXZlbnRcXCcpJyArIFxuICAgICAgICAgICcub3BlblVSTCh1cmwpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IGV2ZW50ID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ2V2ZW50JylcbiAgZXZlbnQub3BlblVSTCh1cmwpXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgXG4gKiBzZXQgYSB0aXRsZSBmb3IgcGFnZVxuICogQHBhcmFtICB7c3RyaW5nfSB0aXRsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gJHNldFRpdGxlKHRpdGxlKSB7XG4gIF8ud2FybignVm0jJHNldFRpdGxlIGlzIGRlcHJlY2F0ZWQsICcrIFxuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvcGFnZUluZm9cXCcpJyArIFxuICAgICAgICAgICcuc2V0VGl0bGUodGl0bGUpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IHBhZ2VJbmZvID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3BhZ2VJbmZvJylcbiAgcGFnZUluZm8uc2V0VGl0bGUodGl0bGUpXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgdXNlIFwicmVxdWlyZSgnQHdlZXgtbW9kdWxlL21vZHVsZU5hbWUnKSBpbnN0ZWFkXCJcbiAqIGludm9rZSBhIG5hdGl2ZSBtZXRob2QgYnkgc3BlY2lmaW5nIHRoZSBuYW1lIG9mIG1vZHVsZSBhbmQgbWV0aG9kXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG1vZHVsZU5hbWVcbiAqIEBwYXJhbSAge3N0cmluZ30gbWV0aG9kTmFtZVxuICogQHBhcmFtICB7Li4uKn0gdGhlIHJlc3QgYXJndW1lbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkY2FsbChtb2R1bGVOYW1lLCBtZXRob2ROYW1lLCAuLi5hcmdzKSB7XG4gIF8ud2FybignVm0jJGNhbGwgaXMgZGVwcmVjYXRlZCwgJyArIFxuICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvbW9kdWxlTmFtZVxcJylcIiBpbnN0ZWFkJylcbiAgY29uc3QgbW9kdWxlID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUobW9kdWxlTmFtZSlcbiAgaWYgKG1vZHVsZSAmJiBtb2R1bGVbbWV0aG9kTmFtZV0pIHtcbiAgICBtb2R1bGVbbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL3RlcnJ5IDEvRGV2ZWxvcC9INS93ZWV4L3dlZXgtb3Mvc3JjL2pzLWZyYW1ld29yay9saWIvYXBpL21ldGhvZHMuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgVGhlIGFwaSBmb3IgaW52b2tpbmcgd2l0aCBcIiRcIiBwcmVmaXhcbiAqL1xuXG4vKipcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIHByaXZhdGUgZm9yIGFsaVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qKlxuICogaW52b2tlIHVzZXItdHJhY2sgb24gVGFvYmFvIE1vYmxpZVxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGXvvJplbnRlciwgY2xpY2ssIGV4cG9zZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21OYW1lXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1cbiovXG5leHBvcnQgZnVuY3Rpb24gJHVzZXJUcmFjayh0eXBlLCBuYW1lLCBjb21OYW1lLCBwYXJhbSkge1xuICBjb25zdCB1c2VyVHJhY2sgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgndXNlclRyYWNrJylcbiAgdXNlclRyYWNrLmNvbW1pdCh0eXBlLCBuYW1lLCBjb21OYW1lLCBwYXJhbSlcbn1cblxuLyoqXG4gKiByZXF1ZXN0IGEgcmVzdGZ1bGwgYXBpIHZpYSB0aGUgbXRvcCBnYXRld2F5XG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgcGFyYW1zXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzZW5kTXRvcChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIGluIG5hdGl2Ze+8jHVzZSB3aW5kdmFuZVxuICAgIGNvbnN0IHdpbmR2YW5lID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3dpbmR2YW5lJylcbiAgICB3aW5kdmFuZS5jYWxsKHtcbiAgICAgIGNsYXNzOiAnTXRvcFdWUGx1Z2luJyxcbiAgICAgIG1ldGhvZDogJ3NlbmQnLFxuICAgICAgZGF0YTogcGFyYW1zXG4gICAgfSwgY2FsbGJhY2spXG4gIH0gZWxzZSB7XG4gICAgLy8gaW4gd2ViIGJyd29zZXLvvIx1c2Ugc3RyZWFtLnNlbmRNdG9wXG4gICAgY29uc3Qgc3RyZWFtID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpXG4gICAgc3RyZWFtLnNlbmRNdG9wKHBhcmFtcywgY2FsbGJhY2spXG4gIH1cbn1cblxuLyoqXG4gKiByZXF1ZXN0IGEgbmF0aXZlIGFwaSB2aWEgd2luZHZhbmUgcHJvdG9jb2xcbiAqIEBwYXJhbSAge29iamVjdH0gICBwYXJhbXNcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJGNhbGxXaW5kdmFuZShwYXJhbXMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHdpbmR2YW5lID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3dpbmR2YW5lJylcbiAgd2luZHZhbmUuY2FsbChwYXJhbXMsIGNhbGxiYWNrKVxufVxuXG4vKipcbiAqIHNldCBzcG0gZm9yIHRoZSBwYWdlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGFcbiAqIEBwYXJhbSAge3N0cmluZ30gYlxuICovXG5leHBvcnQgZnVuY3Rpb24gJHNldFNwbShhLCBiKSB7XG4gIGNvbnN0IHBhZ2VJbmZvID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3BhZ2VJbmZvJylcbiAgcGFnZUluZm8uc2V0U3BtKGEsIGIpXG59XG5cbi8qKlxuICogZ2V0IHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgY3VycmVudCBsb2dpbmVkIHVzZXJcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJGdldFVzZXJJbmZvKGNhbGxiYWNrKSB7XG4gIGNvbnN0IHVzZXIgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgndXNlcicpXG4gIHVzZXIuZ2V0VXNlckluZm8oY2FsbGJhY2spXG59XG5cbi8qKlxuICogcGVyZm9ybSBsb2dpblxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkbG9naW4oY2FsbGJhY2spIHtcbiAgY29uc3QgdXNlciA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCd1c2VyJylcbiAgdXNlci5sb2dpbihjYWxsYmFjaylcbn1cblxuLyoqXG4gKiBwZXJmb3JtIGxvZ291dFxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkbG9nb3V0KGNhbGxiYWNrKSB7XG4gIGNvbnN0IHVzZXIgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgndXNlcicpXG4gIHVzZXIubG9nb3V0KGNhbGxiYWNrKVxufVxuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL2FwaS9tZXRob2RzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==