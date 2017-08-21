(this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK: 0.15.10 Build 20161010');(this.getJSFMVersion = function(){return "0.15.10"});
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
	var methods = __webpack_require__(116);
	var _global = global;
	var registerMethods = _global.registerMethods;
	
	registerMethods(methods);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	__webpack_require__(3);
	
	var _runtime = __webpack_require__(77);
	
	var _runtime2 = _interopRequireDefault(_runtime);
	
	var _package = __webpack_require__(114);
	
	var _methods = __webpack_require__(115);
	
	var methods = _interopRequireWildcard(_methods);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var native = _package.subversion.native;
	var transformer = _package.subversion.transformer;
	
	// register instance management APIs
	
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
	
	// register framework meta info
	global.frameworkVersion = native;
	global.transformerVersion = transformer;
	
	// register special methods for Weex framework
	global.registerMethods(methods);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isPlainObject = exports.isObject = exports.toArray = exports.bind = exports.hasOwn = exports.remove = exports.def = exports.extend = undefined;
	
	var _utils = __webpack_require__(4);
	
	Object.defineProperty(exports, 'extend', {
	  enumerable: true,
	  get: function get() {
	    return _utils.extend;
	  }
	});
	Object.defineProperty(exports, 'def', {
	  enumerable: true,
	  get: function get() {
	    return _utils.def;
	  }
	});
	Object.defineProperty(exports, 'remove', {
	  enumerable: true,
	  get: function get() {
	    return _utils.remove;
	  }
	});
	Object.defineProperty(exports, 'hasOwn', {
	  enumerable: true,
	  get: function get() {
	    return _utils.hasOwn;
	  }
	});
	Object.defineProperty(exports, 'bind', {
	  enumerable: true,
	  get: function get() {
	    return _utils.bind;
	  }
	});
	Object.defineProperty(exports, 'toArray', {
	  enumerable: true,
	  get: function get() {
	    return _utils.toArray;
	  }
	});
	Object.defineProperty(exports, 'isObject', {
	  enumerable: true,
	  get: function get() {
	    return _utils.isObject;
	  }
	});
	Object.defineProperty(exports, 'isPlainObject', {
	  enumerable: true,
	  get: function get() {
	    return _utils.isPlainObject;
	  }
	});
	
	__webpack_require__(5);
	
	__webpack_require__(6);
	
	__webpack_require__(70);
	
	__webpack_require__(71);

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.extend = extend;
	exports.def = def;
	exports.remove = remove;
	exports.hasOwn = hasOwn;
	exports.bind = bind;
	exports.toArray = toArray;
	exports.isObject = isObject;
	exports.isPlainObject = isPlainObject;
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

/***/ },
/* 5 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * @fileOverview
	 * Polyfill `setTimeout` on Android V8 using native method
	 * `setTimeoutNative(callbackId, time)` and JS method
	 * `setTimeoutCallback(callbackId)`.
	 * This polyfill is only used in virtual-DOM diff & flush agorithm. Not
	 * accessed by JS Bundle code (The timer APIs polyfill for JS Bundle is in
	 * `html5/default/app/ctrl.js`).
	 */
	
	var _global = global;
	var setTimeout = _global.setTimeout;
	var setTimeoutNative = _global.setTimeoutNative;
	
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	// fix Promise Problem on JSContext of iOS7~8
	// @see https://bugs.webkit.org/show_bug.cgi?id=135866
	var _global = global;
	var WXEnvironment = _global.WXEnvironment;
	
	if (WXEnvironment && WXEnvironment.platform === 'iOS') {
	  global.Promise = null;
	}
	__webpack_require__(7);
	__webpack_require__(27);
	__webpack_require__(53);
	__webpack_require__(57);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	
	var classof = __webpack_require__(8),
	    test = {};
	test[__webpack_require__(10)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(14)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(9),
	    TAG = __webpack_require__(10)('toStringTag')
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
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(11)('wks'),
	    uid = __webpack_require__(13),
	    _Symbol = __webpack_require__(12).Symbol,
	    USE_SYMBOL = typeof _Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(12),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(12),
	    hide = __webpack_require__(15),
	    has = __webpack_require__(25),
	    SRC = __webpack_require__(13)('src'),
	    TO_STRING = 'toString',
	    $toString = Function[TO_STRING],
	    TPL = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(26).inspectSource = function (it) {
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(16),
	    createDesc = __webpack_require__(24);
	module.exports = __webpack_require__(20) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(17),
	    IE8_DOM_DEFINE = __webpack_require__(19),
	    toPrimitive = __webpack_require__(23),
	    dP = Object.defineProperty;
	
	exports.f = __webpack_require__(20) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(18);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = !__webpack_require__(20) && !__webpack_require__(21)(function () {
	  return Object.defineProperty(__webpack_require__(22)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(21)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(18),
	    document = __webpack_require__(12).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(18);
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
/* 24 */
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
/* 25 */
/***/ function(module, exports) {

	"use strict";
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $at = __webpack_require__(28)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(31)(String, 'String', function (iterated) {
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(29),
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
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
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
	
	var LIBRARY = __webpack_require__(32),
	    $export = __webpack_require__(33),
	    redefine = __webpack_require__(14),
	    hide = __webpack_require__(15),
	    has = __webpack_require__(25),
	    Iterators = __webpack_require__(36),
	    $iterCreate = __webpack_require__(37),
	    setToStringTag = __webpack_require__(50),
	    getPrototypeOf = __webpack_require__(51),
	    ITERATOR = __webpack_require__(10)('iterator'),
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
/* 32 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = false;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(12),
	    core = __webpack_require__(26),
	    hide = __webpack_require__(15),
	    redefine = __webpack_require__(14),
	    ctx = __webpack_require__(34),
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// optional / simple context binding
	var aFunction = __webpack_require__(35);
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
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var create = __webpack_require__(38),
	    descriptor = __webpack_require__(24),
	    setToStringTag = __webpack_require__(50),
	    IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(15)(IteratorPrototype, __webpack_require__(10)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(17),
	    dPs = __webpack_require__(39),
	    enumBugKeys = __webpack_require__(48),
	    IE_PROTO = __webpack_require__(47)('IE_PROTO'),
	    Empty = function Empty() {/* empty */},
	    PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(22)('iframe'),
	      i = enumBugKeys.length,
	      lt = '<',
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(49).appendChild(iframe);
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(16),
	    anObject = __webpack_require__(17),
	    getKeys = __webpack_require__(40);
	
	module.exports = __webpack_require__(20) ? Object.defineProperties : function defineProperties(O, Properties) {
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(41),
	    enumBugKeys = __webpack_require__(48);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(25),
	    toIObject = __webpack_require__(42),
	    arrayIndexOf = __webpack_require__(44)(false),
	    IE_PROTO = __webpack_require__(47)('IE_PROTO');
	
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(43),
	    defined = __webpack_require__(30);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(9);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(42),
	    toLength = __webpack_require__(45),
	    toIndex = __webpack_require__(46);
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(29),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(29),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var shared = __webpack_require__(11)('keys'),
	    uid = __webpack_require__(13);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';
	
	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(12).document && document.documentElement;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(16).f,
	    has = __webpack_require__(25),
	    TAG = __webpack_require__(10)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(25),
	    toObject = __webpack_require__(52),
	    IE_PROTO = __webpack_require__(47)('IE_PROTO'),
	    ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(30);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $iterators = __webpack_require__(54),
	    redefine = __webpack_require__(14),
	    global = __webpack_require__(12),
	    hide = __webpack_require__(15),
	    Iterators = __webpack_require__(36),
	    wks = __webpack_require__(10),
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var addToUnscopables = __webpack_require__(55),
	    step = __webpack_require__(56),
	    Iterators = __webpack_require__(36),
	    toIObject = __webpack_require__(42);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(31)(Array, 'Array', function (iterated, kind) {
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(10)('unscopables'),
	    ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(15)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(32),
	    global = __webpack_require__(12),
	    ctx = __webpack_require__(34),
	    classof = __webpack_require__(8),
	    $export = __webpack_require__(33),
	    isObject = __webpack_require__(18),
	    aFunction = __webpack_require__(35),
	    anInstance = __webpack_require__(58),
	    forOf = __webpack_require__(59),
	    speciesConstructor = __webpack_require__(63),
	    task = __webpack_require__(64).set,
	    microtask = __webpack_require__(66)(),
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
	        FakePromise = (promise.constructor = {})[__webpack_require__(10)('species')] = function (exec) {
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
	  Internal.prototype = __webpack_require__(67)($Promise.prototype, {
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
	__webpack_require__(50)($Promise, PROMISE);
	__webpack_require__(68)(PROMISE);
	Wrapper = __webpack_require__(26)[PROMISE];
	
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
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(69)(function (iter) {
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
/* 58 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  }return it;
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(34),
	    call = __webpack_require__(60),
	    isArrayIter = __webpack_require__(61),
	    anObject = __webpack_require__(17),
	    toLength = __webpack_require__(45),
	    getIterFn = __webpack_require__(62),
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(17);
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// check on default Array iterator
	var Iterators = __webpack_require__(36),
	    ITERATOR = __webpack_require__(10)('iterator'),
	    ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(8),
	    ITERATOR = __webpack_require__(10)('iterator'),
	    Iterators = __webpack_require__(36);
	module.exports = __webpack_require__(26).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(17),
	    aFunction = __webpack_require__(35),
	    SPECIES = __webpack_require__(10)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor,
	      S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(34),
	    invoke = __webpack_require__(65),
	    html = __webpack_require__(49),
	    cel = __webpack_require__(22),
	    global = __webpack_require__(12),
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
	  if (__webpack_require__(9)(process) == 'process') {
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
/* 65 */
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(12),
	    macrotask = __webpack_require__(64).set,
	    Observer = global.MutationObserver || global.WebKitMutationObserver,
	    process = global.process,
	    Promise = global.Promise,
	    isNode = __webpack_require__(9)(process) == 'process';
	
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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var redefine = __webpack_require__(14);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    redefine(target, key, src[key], safe);
	  }return target;
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(12),
	    dP = __webpack_require__(16),
	    DESCRIPTORS = __webpack_require__(20),
	    SPECIES = __webpack_require__(10)('species');
	
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ITERATOR = __webpack_require__(10)('iterator'),
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
/* 70 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * @fileOverview
	 * This file will hack `console` methods by `WXEnvironment.logLevel`.
	 * So we can control how many and which messages will be sent by change the log level.
	 * Additionally in native platform the message content must be primitive values and
	 * using `nativeLog(...args, logLevelMark)` so we create a new `console` object in
	 * global add a format process for its methods.
	 */
	
	var _global = global;
	var console = _global.console;
	var nativeLog = _global.nativeLog;
	
	var LEVELS = ['off', 'error', 'warn', 'info', 'log', 'debug'];
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
	
	/**
	 * Generate map for which types of message will be sent in a certain message level
	 * as the order of LEVELS.
	 */
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
	
	/**
	 * Check if a certain type of message will be sent in current log level of env.
	 * @param  {string} type
	 * @return {boolean}
	 */
	function checkLevel(type) {
	  var logLevel = global.WXEnvironment && global.WXEnvironment.logLevel || 'log';
	  return levelMap[logLevel] && levelMap[logLevel][type];
	}
	
	/**
	 * Convert all log arguments into primitive values.
	 * @param  {array} args
	 * @return {array}
	 */
	function format(args) {
	  return args.map(function (v) {
	    var type = Object.prototype.toString.call(v);
	    if (type.toLowerCase() === '[object object]') {
	      v = JSON.stringify(v);
	    } else {
	      v = String(v);
	    }
	    return v;
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(72);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(73);
	module.exports = __webpack_require__(26).Object.assign;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(33);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(74) });

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	
	var getKeys = __webpack_require__(40),
	    gOPS = __webpack_require__(75),
	    pIE = __webpack_require__(76),
	    toObject = __webpack_require__(52),
	    IObject = __webpack_require__(43),
	    $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(21)(function () {
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
/* 75 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 76 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vdom = __webpack_require__(78);
	
	var _listener = __webpack_require__(79);
	
	var _listener2 = _interopRequireDefault(_listener);
	
	var _config = __webpack_require__(80);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _init = __webpack_require__(113);
	
	var _init2 = _interopRequireDefault(_init);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @fileOverview
	 * Register framework(s) in JS runtime. Weex supply two layers for 3rd-party
	 * framework(s): one is the instance management layer, another is the
	 * virtual-DOM layer.
	 */
	
	// This config is generated by `npm run build:config`.
	// It will collect all `runtime/framework-*.js` files and import each of them.
	// The filename is also the framework name.
	var config = {
	  Document: _vdom.Document, Element: _vdom.Element, Comment: _vdom.Comment, Listener: _listener2.default, frameworks: _config2.default,
	  sendTasks: function sendTasks() {
	    var _global;
	
	    return (_global = global).callNative.apply(_global, arguments);
	  }
	};
	
	var methods = (0, _init2.default)(config);
	
	exports.default = methods;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.instanceMap = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @fileOverview
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * A simple virtual dom implementation
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */
	// import { extend } from '../shared'
	
	
	exports.Document = Document;
	exports.Node = Node;
	exports.Element = Element;
	exports.Comment = Comment;
	
	var _utils = __webpack_require__(4);
	
	var DEFAULT_TAG_NAME = 'div';
	
	var instanceMap = exports.instanceMap = {};
	var nextNodeRef = 1;
	
	function Document(id, url, handler, Listener) {
	  id = id ? id.toString() : '';
	  this.id = id;
	  this.URL = url;
	
	  instanceMap[id] = this;
	  this.nodeMap = {};
	  Listener && (this.listener = new Listener(id, handler || genCallTasks(id)));
	  this.createDocumentElement();
	}
	
	function genCallTasks(id) {
	  return function (tasks) {
	    if (!Array.isArray(tasks)) {
	      tasks = [tasks];
	    }
	    for (var i = 0; i < tasks.length; i++) {
	      var task = tasks[i];
	      var returnValue = void 0;
	      if (task.module === 'dom' && task.method === 'addElement') {
	        var _task$args = _slicedToArray(task.args, 3);
	
	        var ref = _task$args[0];
	        var json = _task$args[1];
	        var index = _task$args[2];
	
	        returnValue = callAddElement(id, ref, json, index, '-1');
	      } else {
	        returnValue = callNative(id, [task], '-1');
	      }
	      if (returnValue === -1) {
	        return returnValue;
	      }
	    }
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
	  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_TAG_NAME;
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
	
	Element.prototype.resetClassStyle = function () {
	  for (var key in this.classStyle) {
	    this.classStyle[key] = '';
	  }
	};
	
	Element.prototype.setClassStyle = function (classStyle) {
	  this.resetClassStyle();
	  (0, _utils.extend)(this.classStyle, classStyle);
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
	  return (0, _utils.extend)({}, this.classStyle, this.style);
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
/* 79 */
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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _default = __webpack_require__(81);
	
	var Weex = _interopRequireWildcard(_default);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = {
	  Weex: Weex
	}; // built by npm run build:config

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _create = __webpack_require__(82);
	
	Object.defineProperty(exports, 'createInstance', {
	  enumerable: true,
	  get: function get() {
	    return _create.createInstance;
	  }
	});
	
	var _life = __webpack_require__(109);
	
	Object.defineProperty(exports, 'init', {
	  enumerable: true,
	  get: function get() {
	    return _life.init;
	  }
	});
	Object.defineProperty(exports, 'refreshInstance', {
	  enumerable: true,
	  get: function get() {
	    return _life.refreshInstance;
	  }
	});
	Object.defineProperty(exports, 'destroyInstance', {
	  enumerable: true,
	  get: function get() {
	    return _life.destroyInstance;
	  }
	});
	
	var _register = __webpack_require__(110);
	
	Object.defineProperty(exports, 'registerComponents', {
	  enumerable: true,
	  get: function get() {
	    return _register.registerComponents;
	  }
	});
	Object.defineProperty(exports, 'registerModules', {
	  enumerable: true,
	  get: function get() {
	    return _register.registerModules;
	  }
	});
	Object.defineProperty(exports, 'registerMethods', {
	  enumerable: true,
	  get: function get() {
	    return _register.registerMethods;
	  }
	});
	
	var _bridge = __webpack_require__(111);
	
	Object.defineProperty(exports, 'receiveTasks', {
	  enumerable: true,
	  get: function get() {
	    return _bridge.receiveTasks;
	  }
	});
	
	var _misc = __webpack_require__(112);
	
	Object.defineProperty(exports, 'getRoot', {
	  enumerable: true,
	  get: function get() {
	    return _misc.getRoot;
	  }
	});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createInstance = createInstance;
	
	var _app = __webpack_require__(83);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _map = __webpack_require__(108);
	
	var _ctrl = __webpack_require__(85);
	
	var _dep = __webpack_require__(95);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Create a Weex instance.
	 *
	 * @param  {string} id
	 * @param  {string} code
	 * @param  {object} [options] option `HAS_LOG` enable print log
	 * @param  {object} [data]
	 */
	function createInstance(id, code, options, data) {
	  (0, _dep.resetTarget)();
	  var instance = _map.instanceMap[id];
	  options = options || {};
	  var result = void 0;
	  if (!instance) {
	    instance = new _app2.default(id, options);
	    _map.instanceMap[id] = instance;
	    result = (0, _ctrl.init)(instance, code, data);
	  } else {
	    result = new Error('invalid instance id "' + id + '"');
	  }
	  return result;
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _register = __webpack_require__(84);
	
	var _ctrl = __webpack_require__(85);
	
	var _instance = __webpack_require__(106);
	
	var _instance2 = _interopRequireDefault(_instance);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @deprecated
	 */
	_instance2.default.prototype.requireModule = function (name) {
	  return (0, _register.requireModule)(this, name);
	};
	
	/**
	 * @deprecated
	 */
	/**
	 * @fileOverview
	 * Weex instance constructor & definition
	 */
	
	_instance2.default.prototype.updateActions = function () {
	  (0, _ctrl.updateActions)(this);
	};
	
	/**
	 * @deprecated
	 */
	_instance2.default.prototype.callTasks = function (tasks) {
	  (0, _ctrl.callTasks)(this, tasks);
	};
	
	exports.default = _instance2.default;

/***/ },
/* 84 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getModule = getModule;
	exports.clearModules = clearModules;
	exports.initModules = initModules;
	exports.initMethods = initMethods;
	exports.requireModule = requireModule;
	exports.requireCustomComponent = requireCustomComponent;
	exports.registerCustomComponent = registerCustomComponent;
	var nativeModules = {};
	
	// for testing
	
	/**
	 * for testing
	 */
	function getModule(moduleName) {
	  return nativeModules[moduleName];
	}
	
	/**
	 * for testing
	 */
	function clearModules() {
	  nativeModules = {};
	}
	
	// for framework
	
	/**
	 * init modules for an app instance
	 * the second param determines whether to replace an existed method
	 */
	function initModules(modules, ifReplace) {
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
	
	/**
	 * init app methods
	 */
	function initMethods(Vm, apis) {
	  var p = Vm.prototype;
	
	  for (var apiName in apis) {
	    if (!p.hasOwnProperty(apiName)) {
	      p[apiName] = apis[apiName];
	    }
	  }
	}
	
	// for app
	
	/**
	 * get a module of methods for an app instance
	 */
	function requireModule(app, name) {
	  var methods = nativeModules[name];
	  var target = {};
	
	  var _loop2 = function _loop2(methodName) {
	    target[methodName] = function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return app.callTasks({
	        module: name,
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
	 * get a custom component options
	 */
	function requireCustomComponent(app, name) {
	  var customComponentMap = app.customComponentMap;
	
	  return customComponentMap[name];
	}
	
	/**
	 * register a custom component options
	 */
	function registerCustomComponent(app, name, def) {
	  var customComponentMap = app.customComponentMap;
	
	
	  if (customComponentMap[name]) {
	    console.error('[JS Framework] define a component(' + name + ') that already exists');
	    return;
	  }
	
	  customComponentMap[name] = def;
	}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _init = __webpack_require__(86);
	
	Object.defineProperty(exports, 'init', {
	  enumerable: true,
	  get: function get() {
	    return _init.init;
	  }
	});
	
	var _misc = __webpack_require__(105);
	
	Object.defineProperty(exports, 'refresh', {
	  enumerable: true,
	  get: function get() {
	    return _misc.refresh;
	  }
	});
	Object.defineProperty(exports, 'destroy', {
	  enumerable: true,
	  get: function get() {
	    return _misc.destroy;
	  }
	});
	Object.defineProperty(exports, 'getRootElement', {
	  enumerable: true,
	  get: function get() {
	    return _misc.getRootElement;
	  }
	});
	Object.defineProperty(exports, 'fireEvent', {
	  enumerable: true,
	  get: function get() {
	    return _misc.fireEvent;
	  }
	});
	Object.defineProperty(exports, 'callback', {
	  enumerable: true,
	  get: function get() {
	    return _misc.callback;
	  }
	});
	Object.defineProperty(exports, 'updateActions', {
	  enumerable: true,
	  get: function get() {
	    return _misc.updateActions;
	  }
	});
	Object.defineProperty(exports, 'callTasks', {
	  enumerable: true,
	  get: function get() {
	    return _misc.callTasks;
	  }
	});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = init;
	
	var _util = __webpack_require__(87);
	
	var _bundle = __webpack_require__(88);
	
	var _misc = __webpack_require__(105);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @fileOverview
	                                                                                                                                                                                                     * instance controls from native
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * - init bundle
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * corresponded with the API of instance manager (framework.js)
	                                                                                                                                                                                                     */
	
	/**
	 * Init an app by run code witgh data
	 * @param  {object} app
	 * @param  {string} code
	 * @param  {object} data
	 */
	function init(app, code, data) {
	  console.debug('[JS Framework] Intialize an instance with:\n', data);
	  var result = void 0;
	
	  // prepare app env methods
	  var bundleDefine = function bundleDefine() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _bundle.defineFn.apply(undefined, [app].concat(args));
	  };
	  var bundleBootstrap = function bundleBootstrap(name, config, _data) {
	    result = (0, _bundle.bootstrap)(app, name, config, _data || data);
	    (0, _misc.updateActions)(app);
	    app.doc.listener.createFinish();
	    console.debug('[JS Framework] After intialized an instance(' + app.id + ')');
	  };
	  var bundleRegister = function bundleRegister() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    return _bundle.register.apply(undefined, [app].concat(args));
	  };
	  var bundleRender = function bundleRender(name, _data) {
	    result = (0, _bundle.bootstrap)(app, name, {}, _data);
	  };
	  var bundleRequire = function bundleRequire(name) {
	    return function (_data) {
	      result = (0, _bundle.bootstrap)(app, name, {}, _data);
	    };
	  };
	  var bundleDocument = app.doc;
	  var bundleRequireModule = function bundleRequireModule(name) {
	    return app.requireModule((0, _util.removeWeexPrefix)(name));
	  };
	
	  // prepare code
	  var functionBody = void 0;
	  /* istanbul ignore if */
	  if (typeof code === 'function') {
	    // `function () {...}` -> `{...}`
	    // not very strict
	    functionBody = code.toString().substr(12);
	  } else if (code) {
	    functionBody = code.toString();
	  }
	
	  // run code and get result
	  var _global = global;
	  var WXEnvironment = _global.WXEnvironment;
	
	  if (WXEnvironment && WXEnvironment.platform !== 'Web') {
	    (function () {
	      // timer APIs polyfill in native
	      var timer = app.requireModule('timer');
	      var timerAPIs = {
	        setTimeout: function setTimeout() {
	          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	            args[_key3] = arguments[_key3];
	          }
	
	          var handler = function handler() {
	            args[0].apply(args, _toConsumableArray(args.slice(2)));
	          };
	          timer.setTimeout(handler, args[1]);
	          return app.uid.toString();
	        },
	        setInterval: function setInterval() {
	          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	            args[_key4] = arguments[_key4];
	          }
	
	          var handler = function handler() {
	            args[0].apply(args, _toConsumableArray(args.slice(2)));
	          };
	          timer.setInterval(handler, args[1]);
	          return app.uid.toString();
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
	      '__weex_document__', // alias for bootstrap
	      '__weex_require__', 'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval', functionBody);
	
	      fn(bundleDefine, bundleRequire, bundleDocument, bundleBootstrap, bundleRegister, bundleRender, bundleDefine, bundleBootstrap, bundleDocument, bundleRequireModule, timerAPIs.setTimeout, timerAPIs.setInterval, timerAPIs.clearTimeout, timerAPIs.clearInterval);
	    })();
	  } else {
	    var _fn = new Function('define', 'require', 'document', 'bootstrap', 'register', 'render', '__weex_define__', // alias for define
	    '__weex_bootstrap__', // alias for bootstrap
	    '__weex_document__', // alias for bootstrap
	    '__weex_require__', functionBody);
	
	    _fn(bundleDefine, bundleRequire, bundleDocument, bundleBootstrap, bundleRegister, bundleRender, bundleDefine, bundleBootstrap, bundleDocument, bundleRequireModule);
	  }
	
	  return result;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _utils = __webpack_require__(4);
	
	Object.defineProperty(exports, 'extend', {
	  enumerable: true,
	  get: function get() {
	    return _utils.extend;
	  }
	});
	Object.defineProperty(exports, 'def', {
	  enumerable: true,
	  get: function get() {
	    return _utils.def;
	  }
	});
	Object.defineProperty(exports, 'remove', {
	  enumerable: true,
	  get: function get() {
	    return _utils.remove;
	  }
	});
	Object.defineProperty(exports, 'hasOwn', {
	  enumerable: true,
	  get: function get() {
	    return _utils.hasOwn;
	  }
	});
	Object.defineProperty(exports, 'bind', {
	  enumerable: true,
	  get: function get() {
	    return _utils.bind;
	  }
	});
	Object.defineProperty(exports, 'toArray', {
	  enumerable: true,
	  get: function get() {
	    return _utils.toArray;
	  }
	});
	Object.defineProperty(exports, 'isObject', {
	  enumerable: true,
	  get: function get() {
	    return _utils.isObject;
	  }
	});
	Object.defineProperty(exports, 'isPlainObject', {
	  enumerable: true,
	  get: function get() {
	    return _utils.isPlainObject;
	  }
	});
	exports.isReserved = isReserved;
	exports.createNewSet = createNewSet;
	exports.cached = cached;
	exports.typof = typof;
	exports.removeWeexPrefix = removeWeexPrefix;
	exports.removeJSSurfix = removeJSSurfix;
	
	
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
	
	// can we use __proto__?
	var hasProto = exports.hasProto = '__proto__' in {};
	
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
	
	/**
	 * Polyfill in iOS7 by native because the JavaScript polyfill has memory problem.
	 * @return {object}
	 */
	
	function createNewSet() {
	  /* eslint-disable */
	  if ((typeof nativeSet === 'undefined' ? 'undefined' : _typeof(nativeSet)) === 'object') {
	    return nativeSet.create();
	  }
	  /* eslint-enable */
	  return new _Set();
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
	
	function typof(v) {
	  var s = Object.prototype.toString.call(v);
	  return s.substring(8, s.length - 1).toLowerCase();
	}
	
	// weex name rules
	
	var WEEX_COMPONENT_REG = /^@weex-component\//;
	var WEEX_MODULE_REG = /^@weex-module\//;
	var NORMAL_MODULE_REG = /^\.{1,2}\//;
	var JS_SURFIX_REG = /\.js$/;
	
	var isWeexComponent = exports.isWeexComponent = function isWeexComponent(name) {
	  return !!name.match(WEEX_COMPONENT_REG);
	};
	var isWeexModule = exports.isWeexModule = function isWeexModule(name) {
	  return !!name.match(WEEX_MODULE_REG);
	};
	var isNormalModule = exports.isNormalModule = function isNormalModule(name) {
	  return !!name.match(NORMAL_MODULE_REG);
	};
	var isNpmModule = exports.isNpmModule = function isNpmModule(name) {
	  return !isWeexComponent(name) && !isWeexModule(name) && !isNormalModule(name);
	};
	
	function removeWeexPrefix(str) {
	  var result = str.replace(WEEX_COMPONENT_REG, '').replace(WEEX_MODULE_REG, '');
	  return result;
	}
	
	function removeJSSurfix(str) {
	  return str.replace(JS_SURFIX_REG, '');
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _bootstrap = __webpack_require__(89);
	
	Object.defineProperty(exports, 'bootstrap', {
	  enumerable: true,
	  get: function get() {
	    return _bootstrap.bootstrap;
	  }
	});
	
	var _define = __webpack_require__(104);
	
	Object.defineProperty(exports, 'defineFn', {
	  enumerable: true,
	  get: function get() {
	    return _define.defineFn;
	  }
	});
	Object.defineProperty(exports, 'register', {
	  enumerable: true,
	  get: function get() {
	    return _define.register;
	  }
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bootstrap = bootstrap;
	
	var _semver = __webpack_require__(90);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _vm = __webpack_require__(92);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _downgrade = __webpack_require__(103);
	
	var downgrade = _interopRequireWildcard(_downgrade);
	
	var _register = __webpack_require__(84);
	
	var _util = __webpack_require__(87);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * bootstrap app from a certain custom component with config & data
	 */
	function bootstrap(app, name, config, data) {
	  console.debug('[JS Framework] bootstrap for ' + name);
	
	  // 1. validate custom component name first
	  var cleanName = void 0;
	  if ((0, _util.isWeexComponent)(name)) {
	    cleanName = (0, _util.removeWeexPrefix)(name);
	  } else if ((0, _util.isNpmModule)(name)) {
	    cleanName = (0, _util.removeJSSurfix)(name);
	    // check if define by old 'define' method
	    /* istanbul ignore if */
	    if (!(0, _register.requireCustomComponent)(app, cleanName)) {
	      return new Error('It\'s not a component: ' + name);
	    }
	  } else {
	    return new Error('Wrong component name: ' + name);
	  }
	
	  // 2. validate configuration
	  config = (0, _util.isPlainObject)(config) ? config : {};
	  // 2.1 transformer version check
	  if (typeof config.transformerVersion === 'string' && typeof global.transformerVersion === 'string' && !_semver2.default.satisfies(config.transformerVersion, global.transformerVersion)) {
	    return new Error('JS Bundle version: ' + config.transformerVersion + ' ' + ('not compatible with ' + global.transformerVersion));
	  }
	  // 2.2 downgrade version check
	  var downgradeResult = downgrade.check(config.downgrade);
	  /* istanbul ignore if */
	  if (downgradeResult.isDowngrade) {
	    app.callTasks([{
	      module: 'instanceWrap',
	      method: 'error',
	      args: [downgradeResult.errorType, downgradeResult.code, downgradeResult.errorMessage]
	    }]);
	    return new Error('Downgrade[' + downgradeResult.code + ']: ' + downgradeResult.errorMessage);
	  }
	
	  // 3. create a new Vm with custom component name and data
	  app.vm = new _vm2.default(cleanName, null, { _app: app }, null, data);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(91)))

/***/ },
/* 91 */
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
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
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
	    var timeout = runTimeout(cleanUpNextTick);
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
	    runClearTimeout(timeout);
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
	        runTimeout(drainQueue);
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
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Vm;
	
	var _util = __webpack_require__(87);
	
	var _state = __webpack_require__(93);
	
	var _compiler = __webpack_require__(98);
	
	var _events = __webpack_require__(102);
	
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
	  (0, _events.initEvents)(this, externalEvents);
	
	  console.debug('[JS Framework] "init" lifecycle in Vm(' + this._type + ')');
	  this.$emit('hook:init');
	  this._inited = true;
	
	  // proxy data and methods
	  // observe data and add this to vms
	  this._data = typeof data === 'function' ? data() : data;
	  if (mergedData) {
	    (0, _util.extend)(this._data, mergedData);
	  }
	  (0, _state.initState)(this);
	
	  console.debug('[JS Framework] "created" lifecycle in Vm(' + this._type + ')');
	  this.$emit('hook:created');
	  this._created = true;
	
	  // backward old ready entry
	  if (options.methods && options.methods.ready) {
	    console.warn('"exports.methods.ready" is deprecated, ' + 'please use "exports.created" instead');
	    options.methods.ready.call(this);
	  }
	
	  // if no parentElement then specify the documentElement
	  this._parentEl = parentEl || this._app.doc.documentElement;
	  (0, _compiler.build)(this);
	}
	
	(0, _events.mixinEvents)(Vm.prototype);

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initState = initState;
	exports.initData = initData;
	exports.initComputed = initComputed;
	exports.initMethods = initMethods;
	
	var _watcher = __webpack_require__(94);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _dep = __webpack_require__(95);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _observer = __webpack_require__(96);
	
	var _util = __webpack_require__(87);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	
	function initState(vm) {
	  vm._watchers = [];
	  initData(vm);
	  initComputed(vm);
	  initMethods(vm);
	}
	
	function initData(vm) {
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
	
	function initComputed(vm) {
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
	
	function initMethods(vm) {
	  var methods = vm._methods;
	  if (methods) {
	    for (var key in methods) {
	      vm[key] = methods[key];
	    }
	  }
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Watcher;
	
	var _dep = __webpack_require__(95);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _util = __webpack_require__(87);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	
	var uid = 0;
	
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
	
	// import { pushWatcher } from './batcher'
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
	  this.depIds = (0, _util.createNewSet)(); // new Set()
	  this.newDepIds = (0, _util.createNewSet)(); // new Set()
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
	  (0, _dep.pushTarget)(this);
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  (0, _dep.popTarget)();
	  this.cleanupDeps();
	  return value;
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
	
	Watcher.prototype.cleanupDeps = function () {
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
	  this.value = this.get();
	  this.dirty = false;
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
	
	var seenObjects = (0, _util.createNewSet)(); // new Set()
	function traverse(val, seen) {
	  var i = void 0,
	      keys = void 0,
	      isA = void 0,
	      isO = void 0;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  isA = Array.isArray(val);
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(91)))

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Dep;
	exports.pushTarget = pushTarget;
	exports.popTarget = popTarget;
	exports.resetTarget = resetTarget;
	
	var _util = __webpack_require__(87);
	
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
	var targetStack = [];
	
	function pushTarget(_target) {
	  if (Dep.target) targetStack.push(Dep.target);
	  Dep.target = _target;
	}
	
	function popTarget() {
	  Dep.target = targetStack.pop();
	}
	
	function resetTarget() {
	  Dep.target = null;
	  targetStack = [];
	}
	
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
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
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
/* 96 */
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
	
	var _dep = __webpack_require__(95);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _array = __webpack_require__(97);
	
	var _util = __webpack_require__(87);
	
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
	  if (Array.isArray(value)) {
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
	  } else if ((Array.isArray(value) || (0, _util.isPlainObject)(value)) && Object.isExtensible(value) && !value._isVue) {
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
	        if (Array.isArray(value)) {
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
	  if (Array.isArray(obj)) {
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
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.arrayMethods = undefined;
	
	var _util = __webpack_require__(87);
	
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
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.build = build;
	
	var _util = __webpack_require__(87);
	
	var _state = __webpack_require__(93);
	
	var _directive = __webpack_require__(99);
	
	var _domHelper = __webpack_require__(101);
	
	/**
	 * build()
	 *   compile(template, parentNode)
	 *     if (type is content) create contentNode
	 *     else if (dirs have v-for) foreach -> create context
	 *       -> compile(templateWithoutFor, parentNode): diff(list) onchange
	 *     else if (dirs have v-if) assert
	 *       -> compile(templateWithoutIf, parentNode): toggle(shown) onchange
	 *     else if (type is dynamic)
	 *       -> compile(templateWithoutDynamicType, parentNode): watch(type) onchange
	 *     else if (type is custom)
	 *       addChildVm(vm, parentVm)
	 *       build(externalDirs)
	 *       foreach childNodes -> compile(childNode, template)
	 *     else if (type is native)
	 *       set(dirs): update(id/attr/style/class) onchange
	 *       append(template, parentNode)
	 *       foreach childNodes -> compile(childNode, template)
	 */
	/**
	 * @fileOverview
	 * ViewModel template parser & data-binding process
	 */
	
	function build(vm) {
	  var opt = vm._options || {};
	  var template = opt.template || {};
	
	  if (opt.replace) {
	    if (template.children && template.children.length === 1) {
	      compile(vm, template.children[0], vm._parentEl);
	    } else {
	      compile(vm, template.children, vm._parentEl);
	    }
	  } else {
	    compile(vm, template, vm._parentEl);
	  }
	
	  console.debug('[JS Framework] "ready" lifecycle in Vm(' + vm._type + ')');
	  vm.$emit('hook:ready');
	  vm._ready = true;
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
	function compile(vm, target, dest, meta) {
	  var app = vm._app || {};
	
	  if (app.lastSignal === -1) {
	    return;
	  }
	
	  if (targetIsFragment(target)) {
	    compileFragment(vm, target, dest, meta);
	    return;
	  }
	  meta = meta || {};
	  if (targetIsContent(target)) {
	    console.debug('[JS Framework] compile "content" block by', target);
	    vm._content = (0, _domHelper.createBlock)(vm, dest);
	    return;
	  }
	
	  if (targetNeedCheckRepeat(target, meta)) {
	    console.debug('[JS Framework] compile "repeat" logic by', target);
	    if (dest.type === 'document') {
	      console.warn('[JS Framework] The root element does\'t support `repeat` directive!');
	    } else {
	      compileRepeat(vm, target, dest);
	    }
	    return;
	  }
	  if (targetNeedCheckShown(target, meta)) {
	    console.debug('[JS Framework] compile "if" logic by', target);
	    if (dest.type === 'document') {
	      console.warn('[JS Framework] The root element does\'t support `if` directive!');
	    } else {
	      compileShown(vm, target, dest, meta);
	    }
	    return;
	  }
	  var typeGetter = meta.type || target.type;
	  if (targetNeedCheckType(typeGetter, meta)) {
	    compileType(vm, target, dest, typeGetter, meta);
	    return;
	  }
	  var type = typeGetter;
	  var component = targetIsComposed(vm, target, type);
	  if (component) {
	    console.debug('[JS Framework] compile composed component by', target);
	    compileCustomComponent(vm, component, target, dest, type, meta);
	    return;
	  }
	  console.debug('[JS Framework] compile native component by', target);
	  compileNativeComponent(vm, target, dest, type);
	}
	
	/**
	 * Check if target is a fragment (an array).
	 *
	 * @param  {object}  target
	 * @return {boolean}
	 */
	function targetIsFragment(target) {
	  return Array.isArray(target);
	}
	
	/**
	 * Check if target type is content/slot.
	 *
	 * @param  {object}  target
	 * @return {boolean}
	 */
	function targetIsContent(target) {
	  return target.type === 'content' || target.type === 'slot';
	}
	
	/**
	 * Check if target need to compile by a list.
	 *
	 * @param  {object}  target
	 * @param  {object}  meta
	 * @return {boolean}
	 */
	function targetNeedCheckRepeat(target, meta) {
	  return !meta.hasOwnProperty('repeat') && target.repeat;
	}
	
	/**
	 * Check if target need to compile by a boolean value.
	 *
	 * @param  {object}  target
	 * @param  {object}  meta
	 * @return {boolean}
	 */
	function targetNeedCheckShown(target, meta) {
	  return !meta.hasOwnProperty('shown') && target.shown;
	}
	
	/**
	 * Check if target need to compile by a dynamic type.
	 *
	 * @param  {string|function} typeGetter
	 * @param  {object}          meta
	 * @return {boolean}
	 */
	function targetNeedCheckType(typeGetter, meta) {
	  return typeof typeGetter === 'function' && !meta.hasOwnProperty('type');
	}
	
	/**
	 * Check if this kind of component is composed.
	 *
	 * @param  {string}  type
	 * @return {boolean}
	 */
	function targetIsComposed(vm, target, type) {
	  var component = void 0;
	  if (vm._app && vm._app.customComponentMap) {
	    component = vm._app.customComponentMap[type];
	  }
	  if (vm._options && vm._options.components) {
	    component = vm._options.components[type];
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
	function compileFragment(vm, target, dest, meta) {
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	  target.forEach(function (child) {
	    compile(vm, child, fragBlock, meta);
	  });
	}
	
	/**
	 * Compile a target with repeat directive.
	 *
	 * @param {object} target
	 * @param {object} dest
	 */
	function compileRepeat(vm, target, dest) {
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
	
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	  fragBlock.children = [];
	  fragBlock.data = [];
	  fragBlock.vms = [];
	
	  bindRepeat(vm, target, fragBlock, { getter: getter, key: key, value: value, trackBy: trackBy, oldStyle: oldStyle });
	}
	
	/**
	 * Compile a target with if directive.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {object} meta
	 */
	function compileShown(vm, target, dest, meta) {
	  var newMeta = { shown: true };
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	
	  if (dest.element && dest.children) {
	    dest.children.push(fragBlock);
	  }
	
	  if (meta.repeat) {
	    newMeta.repeat = meta.repeat;
	  }
	
	  bindShown(vm, target, fragBlock, newMeta);
	}
	
	/**
	 * Compile a target with dynamic component type.
	 *
	 * @param {object}   target
	 * @param {object}   dest
	 * @param {function} typeGetter
	 */
	function compileType(vm, target, dest, typeGetter, meta) {
	  var type = typeGetter.call(vm);
	  var newMeta = (0, _util.extend)({ type: type }, meta);
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	
	  if (dest.element && dest.children) {
	    dest.children.push(fragBlock);
	  }
	
	  (0, _directive.watch)(vm, typeGetter, function (value) {
	    var newMeta = (0, _util.extend)({ type: value }, meta);
	    (0, _domHelper.removeTarget)(vm, fragBlock, true);
	    compile(vm, target, fragBlock, newMeta);
	  });
	
	  compile(vm, target, fragBlock, newMeta);
	}
	
	/**
	 * Compile a composed component.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {string} type
	 */
	function compileCustomComponent(vm, component, target, dest, type, meta) {
	  var Ctor = vm.constructor;
	  var subVm = new Ctor(type, component, vm, dest, undefined, {
	    'hook:init': function hookInit() {
	      (0, _directive.setId)(vm, null, target.id, this);
	      // bind template earlier because of lifecycle issues
	      this._externalBinding = {
	        parent: vm,
	        template: target
	      };
	    },
	    'hook:created': function hookCreated() {
	      (0, _directive.bindSubVm)(vm, this, target, meta.repeat);
	    },
	    'hook:ready': function hookReady() {
	      if (this._content) {
	        compileChildren(vm, target, this._content);
	      }
	    }
	  });
	  (0, _directive.bindSubVmAfterInitialized)(vm, subVm, target);
	}
	
	/**
	 * Generate element from template and attach to the dest if needed.
	 * The time to attach depends on whether the mode status is node or tree.
	 *
	 * @param {object} template
	 * @param {object} dest
	 * @param {string} type
	 */
	function compileNativeComponent(vm, template, dest, type) {
	  (0, _directive.applyNaitveComponentOptions)(template);
	
	  var element = void 0;
	  if (dest.ref === '_documentElement') {
	    // if its parent is documentElement then it's a body
	    console.debug('[JS Framework] compile to create body for ' + type);
	    element = (0, _domHelper.createBody)(vm, type);
	  } else {
	    console.debug('[JS Framework] compile to create element for ' + type);
	    element = (0, _domHelper.createElement)(vm, type);
	  }
	
	  if (!vm._rootEl) {
	    vm._rootEl = element;
	    // bind event earlier because of lifecycle issues
	    var binding = vm._externalBinding || {};
	    var target = binding.template;
	    var parentVm = binding.parent;
	    if (target && target.events && parentVm && element) {
	      for (var _type in target.events) {
	        var handler = parentVm[target.events[_type]];
	        if (handler) {
	          element.addEvent(_type, (0, _util.bind)(handler, parentVm));
	        }
	      }
	    }
	  }
	
	  (0, _directive.bindElement)(vm, element, template);
	
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
	  var app = vm._app || {};
	  if (app.lastSignal !== -1 && !treeMode) {
	    console.debug('[JS Framework] compile to append single node for', element);
	    app.lastSignal = (0, _domHelper.attachTarget)(vm, element, dest);
	  }
	  if (app.lastSignal !== -1) {
	    compileChildren(vm, template, element);
	  }
	  if (app.lastSignal !== -1 && treeMode) {
	    console.debug('[JS Framework] compile to append whole tree for', element);
	    app.lastSignal = (0, _domHelper.attachTarget)(vm, element, dest);
	  }
	}
	
	/**
	 * Set all children to a certain parent element.
	 *
	 * @param {object} template
	 * @param {object} dest
	 */
	function compileChildren(vm, template, dest) {
	  var app = vm._app || {};
	  var children = template.children;
	  if (children && children.length) {
	    children.every(function (child) {
	      compile(vm, child, dest);
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
	function bindRepeat(vm, target, fragBlock, info) {
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
	      if ((0, _util.isObject)(item)) {
	        mergedData[keyName] = index;
	        if (!mergedData.hasOwnProperty('INDEX')) {
	          Object.defineProperty(mergedData, 'INDEX', {
	            value: function value() {
	              console.warn('[JS Framework] "INDEX" in repeat is deprecated, ' + 'please use "$index" instead');
	            }
	          });
	        }
	      } else {
	        console.warn('[JS Framework] Each list item must be an object in old-style repeat, ' + 'please use `repeat={{v in list}}` instead.');
	        mergedData = {};
	        mergedData[keyName] = index;
	        mergedData[valueName] = item;
	      }
	    } else {
	      mergedData = {};
	      mergedData[keyName] = index;
	      mergedData[valueName] = item;
	    }
	    var newContext = mergeContext(context, mergedData);
	    vms.push(newContext);
	    compile(newContext, target, fragBlock, { repeat: item });
	  }
	
	  var list = watchBlock(vm, fragBlock, getter, 'repeat', function (data) {
	    console.debug('[JS Framework] the "repeat" item has changed', data);
	    if (!fragBlock || !data) {
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
	        (0, _domHelper.removeTarget)(vm, oldChildren[index]);
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
	          (0, _domHelper.moveTarget)(vm, reused.target, fragBlock.updateMark, true);
	        }
	        children.push(reused.target);
	        vms.push(reused.vm);
	        if (oldStyle) {
	          reused.vm = item;
	        } else {
	          reused.vm[valueName] = item;
	        }
	        reused.vm[keyName] = index;
	        fragBlock.updateMark = reused.target;
	      } else {
	        compileItem(item, index, vm);
	      }
	    });
	
	    delete fragBlock.updateMark;
	  });
	
	  fragBlock.data = list.slice(0);
	  list.forEach(function (item, index) {
	    compileItem(item, index, vm);
	  });
	}
	
	/**
	 * Watch the display update and add/remove the element.
	 *
	 * @param  {object} target
	 * @param  {object} fragBlock
	 * @param  {object} context
	 */
	function bindShown(vm, target, fragBlock, meta) {
	  var display = watchBlock(vm, fragBlock, target.shown, 'shown', function (display) {
	    console.debug('[JS Framework] the "if" item was changed', display);
	
	    if (!fragBlock || !!fragBlock.display === !!display) {
	      return;
	    }
	    fragBlock.display = !!display;
	    if (display) {
	      compile(vm, target, fragBlock, meta);
	    } else {
	      (0, _domHelper.removeTarget)(vm, fragBlock, true);
	    }
	  });
	
	  fragBlock.display = !!display;
	  if (display) {
	    compile(vm, target, fragBlock, meta);
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
	function watchBlock(vm, fragBlock, calc, type, handler) {
	  var differ = vm && vm._app && vm._app.differ;
	  var config = {};
	  var depth = (fragBlock.element.depth || 0) + 1;
	
	  return (0, _directive.watch)(vm, calc, function (value) {
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
	function mergeContext(context, mergedData) {
	  var newContext = Object.create(context);
	  newContext._data = mergedData;
	  (0, _state.initData)(newContext);
	  (0, _state.initComputed)(newContext);
	  newContext._realParent = context;
	  return newContext;
	}

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * @fileOverview
	                                                                                                                                                                                                                                                                               * Directive Parser
	                                                                                                                                                                                                                                                                               */
	
	exports.applyNaitveComponentOptions = applyNaitveComponentOptions;
	exports.bindElement = bindElement;
	exports.bindSubVm = bindSubVm;
	exports.bindSubVmAfterInitialized = bindSubVmAfterInitialized;
	exports.setId = setId;
	exports.watch = watch;
	
	var _util = __webpack_require__(87);
	
	var _watcher = __webpack_require__(94);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _config = __webpack_require__(100);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	function applyNaitveComponentOptions(template) {
	  var type = template.type;
	
	  var options = nativeComponentMap[type];
	
	  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	    for (var key in options) {
	      if (template[key] == null) {
	        template[key] = options[key];
	      } else if ((0, _util.typof)(template[key]) === 'object' && (0, _util.typof)(options[key]) === 'object') {
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
	function bindElement(vm, el, template) {
	  setId(vm, el, template.id, vm);
	  setAttr(vm, el, template.attr);
	  setClass(vm, el, template.classList);
	  setStyle(vm, el, template.style);
	  bindEvents(vm, el, template.events);
	}
	
	/**
	 * bind all props to sub vm and bind all style, events to the root element
	 * of the sub vm if it doesn't have a replaced multi-node fragment
	 */
	function bindSubVm(vm, subVm, template, repeatItem) {
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
	
	  mergeProps(repeatItem, props, vm, subVm);
	  mergeProps(template.attr, props, vm, subVm);
	}
	
	/**
	 * merge class and styles from vm to sub vm.
	 */
	function bindSubVmAfterInitialized(vm, subVm, template) {
	  mergeClassStyle(template.classList, vm, subVm);
	  mergeStyle(template.style, vm, subVm);
	}
	
	/**
	 * Bind props from vm to sub vm and watch their updates.
	 */
	function mergeProps(target, props, vm, subVm) {
	  if (!target) {
	    return;
	  }
	
	  var _loop = function _loop(key) {
	    if (!props || props[key]) {
	      var value = target[key];
	      if (typeof value === 'function') {
	        var returnValue = watch(vm, value, function (v) {
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
	
	/**
	 * Bind style from vm to sub vm and watch their updates.
	 */
	function mergeStyle(target, vm, subVm) {
	  var _loop2 = function _loop2(key) {
	    var value = target[key];
	    if (typeof value === 'function') {
	      var returnValue = watch(vm, value, function (v) {
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
	
	/**
	 * Bind class & style from vm to sub vm and watch their updates.
	 */
	function mergeClassStyle(target, vm, subVm) {
	  var css = vm._options && vm._options.style || {};
	
	  /* istanbul ignore if */
	  if (!subVm._rootEl) {
	    return;
	  }
	
	  var className = '@originalRootEl';
	  css[className] = subVm._rootEl.classStyle;
	
	  function addClassName(list, name) {
	    if ((0, _util.typof)(list) === 'array') {
	      list.unshift(name);
	    }
	  }
	
	  if (typeof target === 'function') {
	    var _value = watch(vm, target, function (v) {
	      addClassName(v, className);
	      setClassStyle(subVm._rootEl, css, v);
	    });
	    addClassName(_value, className);
	    setClassStyle(subVm._rootEl, css, _value);
	  } else if (target != null) {
	    addClassName(target, className);
	    setClassStyle(subVm._rootEl, css, target);
	  }
	}
	
	/**
	 * bind id to an element
	 * each id is unique in a whole vm
	 */
	function setId(vm, el, id, target) {
	  var map = Object.create(null);
	
	  Object.defineProperties(map, {
	    vm: {
	      value: target,
	      writable: false,
	      configurable: false
	    },
	    el: {
	      get: function get() {
	        return el || target._rootEl;
	      },
	      configurable: false
	    }
	  });
	
	  if (typeof id === 'function') {
	    var handler = id;
	    id = handler.call(vm);
	    if (id) {
	      vm._ids[id] = map;
	    }
	    watch(vm, handler, function (newId) {
	      if (newId) {
	        vm._ids[newId] = map;
	      }
	    });
	  } else if (id && typeof id === 'string') {
	    vm._ids[id] = map;
	  }
	}
	
	/**
	 * bind attr to an element
	 */
	function setAttr(vm, el, attr) {
	  bindDir(vm, el, 'attr', attr);
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
	function setClass(vm, el, classList) {
	  if (typeof classList !== 'function' && !Array.isArray(classList)) {
	    return;
	  }
	  if (Array.isArray(classList) && !classList.length) {
	    el.setClassStyle({});
	    return;
	  }
	
	  var style = vm._options && vm._options.style || {};
	  if (typeof classList === 'function') {
	    var _value2 = watch(vm, classList, function (v) {
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
	function setStyle(vm, el, style) {
	  bindDir(vm, el, 'style', style);
	}
	
	/**
	 * add an event type and handler to an element and generate a dom update
	 */
	function setEvent(vm, el, type, handler) {
	  el.addEvent(type, (0, _util.bind)(handler, vm));
	}
	
	/**
	 * add all events of an element
	 */
	function bindEvents(vm, el, events) {
	  if (!events) {
	    return;
	  }
	  var keys = Object.keys(events);
	  var i = keys.length;
	  while (i--) {
	    var key = keys[i];
	    var handler = events[key];
	    if (typeof handler === 'string') {
	      handler = vm[handler];
	      /* istanbul ignore if */
	      if (!handler) {
	        console.debug('[JS Framework] The method "' + handler + '" is not defined.');
	      }
	    }
	    setEvent(vm, el, key, handler);
	  }
	}
	
	/**
	 * set a series of members as a kind of an element
	 * for example: style, attr, ...
	 * if the value is a function then bind the data changes
	 */
	function bindDir(vm, el, name, data) {
	  if (!data) {
	    return;
	  }
	  var keys = Object.keys(data);
	  var i = keys.length;
	  while (i--) {
	    var key = keys[i];
	    var _value3 = data[key];
	    if (typeof _value3 === 'function') {
	      bindKey(vm, el, name, key, _value3);
	    } else {
	      el[SETTERS[name]](key, _value3);
	    }
	  }
	}
	
	/**
	 * bind data changes to a certain key to a name series in an element
	 */
	function bindKey(vm, el, name, key, calc) {
	  var methodName = SETTERS[name];
	  // watch the calc, and returns a value by calc.call()
	  var value = watch(vm, calc, function (value) {
	    function handler() {
	      el[methodName](key, value);
	    }
	    var differ = vm && vm._app && vm._app.differ;
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
	function watch(vm, calc, callback) {
	  var watcher = new _watcher2.default(vm, calc, function (value, oldValue) {
	    /* istanbul ignore if */
	    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' && value === oldValue) {
	      return;
	    }
	    callback(value);
	  });
	
	  return watcher.value;
	}

/***/ },
/* 100 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// @todo: It should be registered by native from `registerComponents()`.
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
	  }
	};

/***/ },
/* 101 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.createBody = createBody;
	exports.createElement = createElement;
	exports.createBlock = createBlock;
	exports.attachTarget = attachTarget;
	exports.moveTarget = moveTarget;
	exports.removeTarget = removeTarget;
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
	function createBody(vm, type) {
	  var doc = vm._app.doc;
	  return doc.createBody(type);
	}
	
	/**
	 * Create an element by type
	 * Using this._app.doc
	 *
	 * @param  {string} type
	 */
	function createElement(vm, type) {
	  var doc = vm._app.doc;
	  return doc.createElement(type);
	}
	
	/**
	 * Create and return a frag block for an element.
	 * The frag block has a starter, ender and the element itself.
	 *
	 * @param  {object} element
	 */
	function createBlock(vm, element) {
	  var start = createBlockStart(vm);
	  var end = createBlockEnd(vm);
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
	function createBlockStart(vm) {
	  var doc = vm._app.doc;
	  var anchor = doc.createComment('start');
	  return anchor;
	}
	
	/**
	 * Create and return a block ender.
	 * Using this._app.doc
	 */
	function createBlockEnd(vm) {
	  var doc = vm._app.doc;
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
	function attachTarget(vm, target, dest) {
	  if (dest.element) {
	    var before = dest.end;
	    var after = dest.updateMark;
	    // push new target for watch list update later
	    if (dest.children) {
	      dest.children.push(target);
	    }
	    // for check repeat case
	    if (after) {
	      var signal = moveTarget(vm, target, after);
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
	function moveTarget(vm, target, after) {
	  if (target.element) {
	    return moveBlock(target, after);
	  }
	  return moveElement(target, after);
	}
	
	/**
	 * Move element before a certain element.
	 *
	 * @param  {object} element
	 * @param  {object} before
	 */
	function moveElement(element, after) {
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
	function moveBlock(fragBlock, after) {
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
	function removeTarget(vm, target) {
	  var preserveBlock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	  if (target.element) {
	    removeBlock(target, preserveBlock);
	  } else {
	    removeElement(target);
	  }
	}
	
	/**
	 * Remove a certain element.
	 * Using this._app.doc
	 *
	 * @param  {object} target
	 */
	function removeElement(target) {
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
	function removeBlock(fragBlock) {
	  var preserveBlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	  var result = [];
	  var el = fragBlock.start.nextSibling;
	
	  while (el && el !== fragBlock.end) {
	    result.push(el);
	    el = el.nextSibling;
	  }
	
	  if (!preserveBlock) {
	    removeElement(fragBlock.start);
	  }
	  result.forEach(function (el) {
	    removeElement(el);
	  });
	  if (!preserveBlock) {
	    removeElement(fragBlock.end);
	  }
	}

/***/ },
/* 102 */
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
	exports.initEvents = initEvents;
	exports.mixinEvents = mixinEvents;
	/**
	 * @fileOverview
	 * Everything about component event which includes event object, event listener,
	 * event emitter and lifecycle hooks.
	 */
	
	/**
	 * Event object definition. An event object has `type`, `timestamp` and
	 * `detail` from which a component emit. The event object could be dispatched to
	 * parents or broadcasted to children except `this.stop()` is called.
	 * @param {string} type
	 * @param {any}    detail
	 */
	function Evt(type, detail) {
	  if (detail instanceof Evt) {
	    return detail;
	  }
	
	  this.timestamp = Date.now();
	  this.detail = detail;
	  this.type = type;
	
	  var shouldStop = false;
	
	  /**
	   * stop dispatch and broadcast
	   */
	  this.stop = function () {
	    shouldStop = true;
	  };
	
	  /**
	   * check if it can't be dispatched or broadcasted
	   */
	  this.hasStopped = function () {
	    return shouldStop;
	  };
	}
	
	/**
	 * Emit an event but not broadcast down or dispatch up.
	 * @param  {string} type
	 * @param  {any}    detail
	 */
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
	
	/**
	 * Emit an event and dispatch it up.
	 * @param  {string} type
	 * @param  {any}    detail
	 */
	function $dispatch(type, detail) {
	  var evt = new Evt(type, detail);
	  this.$emit(type, evt);
	
	  if (!evt.hasStopped() && this._parent && this._parent.$dispatch) {
	    this._parent.$dispatch(type, evt);
	  }
	}
	
	/**
	 * Emit an event and broadcast it down.
	 * @param  {string} type
	 * @param  {any}    detail
	 */
	function $broadcast(type, detail) {
	  var evt = new Evt(type, detail);
	  this.$emit(type, evt);
	
	  if (!evt.hasStopped() && this._childrenVms) {
	    this._childrenVms.forEach(function (subVm) {
	      subVm.$broadcast(type, evt);
	    });
	  }
	}
	
	/**
	 * Add event listener.
	 * @param  {string}   type
	 * @param  {function} handler
	 */
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
	
	/**
	 * Remove event listener.
	 * @param  {string}   type
	 * @param  {function} handler
	 */
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
	
	var LIFE_CYCLE_TYPES = ['init', 'created', 'ready', 'destroyed'];
	
	/**
	 * Init events:
	 * 1. listen `events` in component options & `externalEvents`.
	 * 2. bind lifecycle hooks.
	 * @param  {Vm}     vm
	 * @param  {object} externalEvents
	 */
	function initEvents(vm, externalEvents) {
	  var options = vm._options || {};
	  var events = options.events || {};
	  for (var type1 in events) {
	    vm.$on(type1, events[type1]);
	  }
	  for (var type2 in externalEvents) {
	    vm.$on(type2, externalEvents[type2]);
	  }
	  LIFE_CYCLE_TYPES.forEach(function (type) {
	    vm.$on('hook:' + type, options[type]);
	  });
	}
	
	/**
	 * Bind event related methods to ViewModel instance.
	 * @param  {Vm} vm
	 */
	function mixinEvents(vm) {
	  vm.$emit = $emit;
	  vm.$dispatch = $dispatch;
	  vm.$broadcast = $broadcast;
	  vm.$on = $on;
	  vm.$off = $off;
	}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.normalizeVersion = normalizeVersion;
	exports.getError = getError;
	exports.check = check;
	
	var _semver = __webpack_require__(90);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _util = __webpack_require__(87);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Normalize a version string.
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
	
	/**
	 * Get informations from different error key. Like:
	 * - code
	 * - errorMessage
	 * - errorType
	 * - isDowngrade
	 * @param  {string} key
	 * @param  {string} val
	 * @param  {string} criteria
	 * @return {object}
	 */
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
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defineFn = undefined;
	exports.register = register;
	
	var _util = __webpack_require__(87);
	
	var _register = __webpack_require__(84);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * define(name, factory) for primary usage
	 * or
	 * define(name, deps, factory) for compatibility
	 * Notice: DO NOT use function define() {},
	 * it will cause error after builded by webpack
	 */
	var defineFn = exports.defineFn = function defineFn(app, name) {
	  console.debug('[JS Framework] define a component ' + name);
	
	  // adapt args:
	  // 1. name, deps[], factory()
	  // 2. name, factory()
	  // 3. name, definition{}
	  var factory = void 0,
	      definition = void 0;
	  if ((arguments.length <= 2 ? 0 : arguments.length - 2) > 1) {
	    definition = arguments.length <= 3 ? undefined : arguments[3];
	  } else {
	    definition = arguments.length <= 2 ? undefined : arguments[2];
	  }
	  if (typeof definition === 'function') {
	    factory = definition;
	    definition = null;
	  }
	
	  // resolve definition from factory
	  if (factory) {
	    var r = function r(name) {
	      if ((0, _util.isWeexComponent)(name)) {
	        var cleanName = (0, _util.removeWeexPrefix)(name);
	        return (0, _register.requireCustomComponent)(app, cleanName);
	      }
	      if ((0, _util.isWeexModule)(name)) {
	        var _cleanName = (0, _util.removeWeexPrefix)(name);
	        return app.requireModule(_cleanName);
	      }
	      if ((0, _util.isNormalModule)(name) || (0, _util.isNpmModule)(name)) {
	        var _cleanName2 = (0, _util.removeJSSurfix)(name);
	        return app.commonModules[_cleanName2];
	      }
	    };
	    var m = { exports: {} };
	    factory(r, m.exports, m);
	    definition = m.exports;
	  }
	
	  // apply definition
	  if ((0, _util.isWeexComponent)(name)) {
	    var cleanName = (0, _util.removeWeexPrefix)(name);
	    (0, _register.registerCustomComponent)(app, cleanName, definition);
	  } else if ((0, _util.isWeexModule)(name)) {
	    var _cleanName3 = (0, _util.removeWeexPrefix)(name);
	    (0, _register.initModules)(_defineProperty({}, _cleanName3, definition));
	  } else if ((0, _util.isNormalModule)(name)) {
	    var _cleanName4 = (0, _util.removeJSSurfix)(name);
	    app.commonModules[_cleanName4] = definition;
	  } else if ((0, _util.isNpmModule)(name)) {
	    var _cleanName5 = (0, _util.removeJSSurfix)(name);
	    if (definition.template || definition.style || definition.methods) {
	      // downgrade to old define method (define('componentName', factory))
	      // the exports contain one key of template, style or methods
	      // but it has risk!!!
	      (0, _register.registerCustomComponent)(app, _cleanName5, definition);
	    } else {
	      app.commonModules[_cleanName5] = definition;
	    }
	  }
	};
	
	/**
	 * @deprecated
	 */
	function register(app, type, options) {
	  console.warn('[JS Framework] Register is deprecated, please install lastest transformer.');
	  (0, _register.registerCustomComponent)(app, type, options);
	}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.refresh = refresh;
	exports.destroy = destroy;
	exports.destroyVm = destroyVm;
	exports.getRootElement = getRootElement;
	exports.fireEvent = fireEvent;
	exports.callback = callback;
	exports.updateActions = updateActions;
	exports.callTasks = callTasks;
	
	var _util = __webpack_require__(87);
	
	var _config = __webpack_require__(100);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @fileOverview
	                                                                                                                                                                                                     * instance controls from native
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * - fire event
	                                                                                                                                                                                                     * - callback
	                                                                                                                                                                                                     * - refresh
	                                                                                                                                                                                                     * - destroy
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * corresponded with the API of instance manager (framework.js)
	                                                                                                                                                                                                     */
	
	
	/**
	 * Refresh an app with data to its root component options.
	 * @param  {object} app
	 * @param  {any}    data
	 */
	function refresh(app, data) {
	  console.debug('[JS Framework] Refresh with', data, 'in instance[' + app.id + ']');
	  var vm = app.vm;
	  if (vm && data) {
	    // app.doc.close()
	    if (typeof vm.refreshData === 'function') {
	      vm.refreshData(data);
	    } else {
	      (0, _util.extend)(vm, data);
	    }
	    updateActions(app);
	    app.doc.listener.refreshFinish();
	    // app.doc.open()
	    return;
	  }
	  return new Error('invalid data "' + data + '"');
	}
	
	/**
	 * Destroy an app.
	 * @param  {object} app
	 */
	function destroy(app) {
	  console.debug('[JS Framework] Destory an instance(' + app.id + ')');
	
	  if (app.vm) {
	    destroyVm(app.vm);
	  }
	
	  app.id = '';
	  app.options = null;
	  app.blocks = null;
	  app.vm = null;
	  app.doc.destroy();
	  app.doc = null;
	  app.customComponentMap = null;
	  app.commonModules = null;
	  app.callbacks = null;
	}
	
	/**
	 * Destroy an Vm.
	 * @param {object} vm
	 */
	function destroyVm(vm) {
	  delete vm._app;
	  delete vm._computed;
	  delete vm._css;
	  delete vm._data;
	  delete vm._ids;
	  delete vm._methods;
	  delete vm._options;
	  delete vm._parent;
	  delete vm._parentEl;
	  delete vm._rootEl;
	
	  // remove all watchers
	  if (vm._watchers) {
	    var watcherCount = vm._watchers.length;
	    while (watcherCount--) {
	      vm._watchers[watcherCount].teardown();
	    }
	    delete vm._watchers;
	  }
	
	  // destroy child vms recursively
	  if (vm._childrenVms) {
	    var vmCount = vm._childrenVms.length;
	    while (vmCount--) {
	      destroyVm(vm._childrenVms[vmCount]);
	    }
	    delete vm._childrenVms;
	  }
	
	  console.debug('[JS Framework] "destroyed" lifecycle in Vm(' + vm._type + ')');
	  vm.$emit('hook:destroyed');
	
	  delete vm._type;
	  delete vm._vmEvents;
	}
	
	/**
	 * Get a JSON object to describe the document body.
	 * @param  {object} app
	 * @return {object}
	 */
	function getRootElement(app) {
	  var doc = app.doc || {};
	  var body = doc.body || {};
	  return body.toJSON ? body.toJSON() : {};
	}
	
	/**
	 * Fire an event from renderer. The event has type, an event object and an
	 * element ref. If the event comes with some virtual-DOM changes, it should
	 * have one more parameter to describe the changes.
	 * @param  {object} app
	 * @param  {string} ref
	 * @param  {type}   type
	 * @param  {object} e
	 * @param  {object} domChanges
	 */
	function fireEvent(app, ref, type, e, domChanges) {
	  console.debug('[JS Framework] Fire a "' + type + '" event on an element(' + ref + ') in instance(' + app.id + ')');
	  if (Array.isArray(ref)) {
	    ref.some(function (ref) {
	      return app.fireEvent(ref, type, e) !== false;
	    });
	    return;
	  }
	  var el = app.doc.getRef(ref);
	  if (el) {
	    // app.doc.close()
	    var result = app.doc.fireEvent(el, type, e, domChanges);
	    updateActions(app);
	    app.doc.listener.updateFinish();
	    // app.doc.open()
	    return result;
	  }
	  return new Error('invalid element reference "' + ref + '"');
	}
	
	/**
	 * Make a callback for a certain app.
	 * @param  {object}   app
	 * @param  {number}   callbackId
	 * @param  {any}      data
	 * @param  {boolean}  ifKeepAlive
	 */
	function callback(app, callbackId, data, ifKeepAlive) {
	  console.debug('[JS Framework] Invoke a callback(' + callbackId + ') with', data, 'in instance(' + app.id + ')');
	  var callback = app.callbacks[callbackId];
	  if (typeof callback === 'function') {
	    // app.doc.close()
	    callback(data);
	    if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
	      app.callbacks[callbackId] = undefined;
	    }
	    updateActions(app);
	    app.doc.listener.updateFinish();
	    // app.doc.open()
	    return;
	  }
	  return new Error('invalid callback id "' + callbackId + '"');
	}
	
	/**
	 * Collect all virtual-DOM mutations together and send them to renderer.
	 * @param  {object} app
	 */
	function updateActions(app) {
	  app.differ.flush();
	  var tasks = [];
	  if (app.doc && app.doc.listener && app.doc.listener.updates.length) {
	    tasks.push.apply(tasks, _toConsumableArray(app.doc.listener.updates));
	    app.doc.listener.updates = [];
	  }
	  if (tasks.length) {
	    return callTasks(app, tasks);
	  }
	}
	
	/**
	 * Call all tasks from an app to renderer (native).
	 * @param  {object} app
	 * @param  {array}  tasks
	 */
	function callTasks(app, tasks) {
	  if ((0, _util.typof)(tasks) !== 'array') {
	    tasks = [tasks];
	  }
	
	  tasks.forEach(function (task) {
	    task.args = task.args.map(function (arg) {
	      return normalize(arg, app);
	    });
	  });
	
	  return _config2.default.sendTasks(app.id, tasks, '-1');
	}
	
	/**
	 * Normalize a value. Specially, if the value is a function, then generate a function id
	 * and save it to `app.callbacks`, at last return the function id.
	 * @param  {any}        v
	 * @param  {object}     app
	 * @return {primitive}
	 */
	function normalize(v, app) {
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

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = App;
	
	var _differ = __webpack_require__(107);
	
	var _differ2 = _interopRequireDefault(_differ);
	
	var _config = __webpack_require__(100);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * App constructor for Weex framework.
	 * @param {string} id
	 * @param {object} options
	 */
	/**
	 * @fileOverview
	 * Weex App constructor & definition
	 */
	
	function App(id, options) {
	  this.id = id;
	  this.options = options || {};
	  this.vm = null;
	  this.customComponentMap = {};
	  this.commonModules = {};
	  this.callbacks = {};
	  this.doc = new _config2.default.Document(id, this.options.bundleUrl, null, _config2.default.Listener);
	  this.differ = new _differ2.default(id);
	  this.uid = 0;
	}

/***/ },
/* 107 */
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
/* 108 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var instanceMap = exports.instanceMap = {};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = init;
	exports.refreshInstance = refreshInstance;
	exports.destroyInstance = destroyInstance;
	
	var _config = __webpack_require__(100);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _ctrl = __webpack_require__(85);
	
	var _map = __webpack_require__(108);
	
	var _dep = __webpack_require__(95);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Init config informations for Weex framework
	 * @param  {object} cfg
	 */
	function init(cfg) {
	  _config2.default.Document = cfg.Document;
	  _config2.default.Element = cfg.Element;
	  _config2.default.Comment = cfg.Comment;
	  _config2.default.sendTasks = cfg.sendTasks;
	  _config2.default.Listener = cfg.Listener;
	}
	
	/**
	 * Refresh a Weex instance with data.
	 *
	 * @param  {string} id
	 * @param  {object} data
	 */
	function refreshInstance(id, data) {
	  var instance = _map.instanceMap[id];
	  var result = void 0;
	  if (instance) {
	    result = (0, _ctrl.refresh)(instance, data);
	  } else {
	    result = new Error('invalid instance id "' + id + '"');
	  }
	  return result;
	}
	
	/**
	 * Destroy a Weex instance.
	 * @param  {string} id
	 */
	function destroyInstance(id) {
	  (0, _dep.resetTarget)();
	  var instance = _map.instanceMap[id];
	  if (!instance) {
	    return new Error('invalid instance id "' + id + '"');
	  }
	  (0, _ctrl.destroy)(instance);
	  delete _map.instanceMap[id];
	  return _map.instanceMap;
	}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.registerComponents = registerComponents;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	
	var _vm = __webpack_require__(92);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _config = __webpack_require__(100);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _register = __webpack_require__(84);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var nativeComponentMap = _config2.default.nativeComponentMap;
	
	/**
	 * Register the name of each native component.
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
	 * Register the name and methods of each module.
	 * @param  {object} modules a object of modules
	 */
	function registerModules(modules) {
	  if ((typeof modules === 'undefined' ? 'undefined' : _typeof(modules)) === 'object') {
	    (0, _register.initModules)(modules);
	  }
	}
	
	/**
	 * Register the name and methods of each api.
	 * @param  {object} apis a object of apis
	 */
	function registerMethods(methods) {
	  if ((typeof methods === 'undefined' ? 'undefined' : _typeof(methods)) === 'object') {
	    (0, _register.initMethods)(_vm2.default, methods);
	  }
	}
	
	// @todo: Hack for this framework only. Will be re-designed or removed later.
	global.registerMethods = registerMethods;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.receiveTasks = receiveTasks;
	
	var _map = __webpack_require__(108);
	
	var _ctrl = __webpack_require__(85);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var jsHandlers = {
	  fireEvent: function fireEvent(id) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    return _ctrl.fireEvent.apply(undefined, [_map.instanceMap[id]].concat(args));
	  },
	  callback: function callback(id) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      args[_key2 - 1] = arguments[_key2];
	    }
	
	    return _ctrl.callback.apply(undefined, [_map.instanceMap[id]].concat(args));
	  }
	};
	
	/**
	 * Accept calls from native (event or callback).
	 *
	 * @param  {string} id
	 * @param  {array} tasks list with `method` and `args`
	 */
	function receiveTasks(id, tasks) {
	  var instance = _map.instanceMap[id];
	  if (instance && Array.isArray(tasks)) {
	    var _ret = function () {
	      var results = [];
	      tasks.forEach(function (task) {
	        var handler = jsHandlers[task.method];
	        var args = [].concat(_toConsumableArray(task.args));
	        if (typeof handler === 'function') {
	          args.unshift(id);
	          results.push(handler.apply(undefined, _toConsumableArray(args)));
	        }
	      });
	      return {
	        v: results
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	  return new Error('invalid instance id "' + id + '" or tasks');
	}

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRoot = getRoot;
	
	var _map = __webpack_require__(108);
	
	var _ctrl = __webpack_require__(85);
	
	/**
	 * Get a whole element tree of an instance for debugging.
	 * @param  {string} id
	 * @return {object} a virtual dom tree
	 */
	function getRoot(id) {
	  var instance = _map.instanceMap[id];
	  var result = void 0;
	  if (instance) {
	    result = (0, _ctrl.getRootElement)(instance);
	  } else {
	    result = new Error('invalid instance id "' + id + '"');
	  }
	  return result;
	}

/***/ },
/* 113 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = init;
	var frameworks = void 0;
	
	var versionRegExp = /^\/\/ *(\{[^\}]*\}) *\r?\n/;
	
	/**
	 * Detect a JS Bundle code and make sure which framework it's based to. Each JS
	 * Bundle should make sure that it starts with a line of JSON comment and is
	 * more that one line.
	 * @param  {string} code
	 * @return {object}
	 */
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
	
	/**
	 * Check which framework a certain JS Bundle code based to. And create instance
	 * by this framework.
	 * @param {string} id
	 * @param {string} code
	 * @param {object} config
	 * @param {object} data
	 */
	function createInstance(id, code, config, data) {
	  var info = instanceMap[id];
	  if (!info) {
	    info = checkVersion(code) || {};
	    if (!frameworks[info.framework]) {
	      info.framework = 'Weex';
	    }
	    instanceMap[id] = info;
	    config = config || {};
	    config.bundleVersion = info.version;
	    console.debug('[JS Framework] create an ' + info.framework + '@' + config.bundleVersion + ' instance from ' + config.bundleVersion);
	    return frameworks[info.framework].createInstance(id, code, config, data);
	  }
	  return new Error('invalid instance id "' + id + '"');
	}
	
	var methods = {
	  createInstance: createInstance
	};
	
	/**
	 * Register methods which init each frameworks.
	 * @param {string} methodName
	 */
	function genInit(methodName) {
	  methods[methodName] = function () {
	    for (var name in frameworks) {
	      var framework = frameworks[name];
	      if (framework && framework[methodName]) {
	        framework[methodName].apply(framework, arguments);
	      }
	    }
	  };
	}
	
	/**
	 * Register methods which will be called for each instance.
	 * @param {string} methodName
	 */
	function genInstance(methodName) {
	  methods[methodName] = function () {
	    var id = arguments.length <= 0 ? undefined : arguments[0];
	    var info = instanceMap[id];
	    if (info && frameworks[info.framework]) {
	      var _frameworks$info$fram;
	
	      return (_frameworks$info$fram = frameworks[info.framework])[methodName].apply(_frameworks$info$fram, arguments);
	    }
	    return new Error('invalid instance id "' + id + '"');
	  };
	}
	
	/**
	 * Adapt some legacy method(s) which will be called for each instance. These
	 * methods should be deprecated and removed later.
	 * @param {string} methodName
	 * @param {string} nativeMethodName
	 */
	function adaptInstance(methodName, nativeMethodName) {
	  methods[nativeMethodName] = function () {
	    var id = arguments.length <= 0 ? undefined : arguments[0];
	    var info = instanceMap[id];
	    if (info && frameworks[info.framework]) {
	      var _frameworks$info$fram2;
	
	      return (_frameworks$info$fram2 = frameworks[info.framework])[methodName].apply(_frameworks$info$fram2, arguments);
	    }
	    return new Error('invalid instance id "' + id + '"');
	  };
	}
	
	function init(config) {
	  frameworks = config.frameworks || {};
	
	  // Init each framework by `init` method and `config` which contains three
	  // virtual-DOM Class: `Document`, `Element` & `Comment`, and a JS bridge method:
	  // `sendTasks(...args)`.
	  for (var name in frameworks) {
	    var framework = frameworks[name];
	    framework.init(config);
	  }
	
	  // @todo: The method `registerMethods` will be re-designed or removed later.
	  ;['registerComponents', 'registerModules', 'registerMethods'].forEach(genInit);['destroyInstance', 'refreshInstance', 'receiveTasks', 'getRoot'].forEach(genInstance);
	
	  adaptInstance('receiveTasks', 'callJS');
	
	  return methods;
	}

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = {
		"name": "weex-js-framework",
		"version": "0.15.10",
		"subversion": {
			"framework": "0.15.10",
			"transformer": ">=0.1.5 <0.4"
		},
		"description": "Weex JS Framework",
		"keywords": [
			"weex",
			"mvvm",
			"javascript",
			"html5"
		],
		"homepage": "https://alibaba.github.io/weex",
		"bugs": {
			"url": "https://github.com/alibaba/weex/issues"
		},
		"license": "Apache-2.0",
		"author": "Jinjiang <zhaojinjiang@me.com>",
		"maintainers": [
			"terrykingcha <terrykingcha@gmail.com>",
			"IskenHuang <iskenhuang@gmail.com>",
			"yuanyan <yuanyan.cao@gmail.com>"
		],
		"main": "index.js",
		"repository": {
			"type": "git",
			"url": "git@github.com:alibaba/weex.git"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"dependencies": {
			"core-js": "^2.4.0",
			"semver": "^5.1.0"
		}
	};

/***/ },
/* 115 */
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
	
	var _util = __webpack_require__(87);
	
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
	  console.warn('[JS Framework] Vm#$ is deprecated, please use Vm#$vm instead');
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
	  console.warn('[JS Framework] Vm#$scrollTo is deprecated, ' + 'please use "require(\'@weex-module/dom\')' + '.scrollTo(el, options)" instead');
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
	  var config = (0, _util.extend)({
	    env: global.WXEnvironment || {}
	  }, this._app.options);
	  if ((0, _util.typof)(callback) === 'function') {
	    console.warn('[JS Framework] the callback of Vm#$getConfig(callback) is deprecated, ' + 'this api now can directly RETURN config info.');
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
	  console.warn('[JS Framework] Vm#$sendHttp is deprecated, ' + 'please use "require(\'@weex-module/stream\')' + '.sendHttp(params, callback)" instead');
	  var stream = this._app.requireModule('stream');
	  stream.sendHttp(params, callback);
	}
	
	/**
	 * @deprecated
	 * open a url
	 * @param  {string} url
	 */
	function $openURL(url) {
	  console.warn('[JS Framework] Vm#$openURL is deprecated, ' + 'please use "require(\'@weex-module/event\')' + '.openURL(url)" instead');
	  var event = this._app.requireModule('event');
	  event.openURL(url);
	}
	
	/**
	 * @deprecated
	 * set a title for page
	 * @param  {string} title
	 */
	function $setTitle(title) {
	  console.warn('[JS Framework] Vm#$setTitle is deprecated, ' + 'please use "require(\'@weex-module/pageInfo\')' + '.setTitle(title)" instead');
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
	  console.warn('[JS Framework] Vm#$call is deprecated, ' + 'please use "require(\'@weex-module/moduleName\')" instead');
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
/* 116 */
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
	  console.warn('[JS Framework] Vm#$userTrack is deprecated, ' + 'please use "require(\'@weex-module/userTrack\')' + '.commit(type, name, comName, param)" instead');
	  var userTrack = this._app.requireModule('userTrack');
	  userTrack.commit(type, name, comName, param);
	}
	
	/**
	 * request a restfull api via the mtop gateway
	 * @param  {object}   params
	 * @param  {Function} callback
	 */
	function $sendMtop(params, callback) {
	  console.warn('[JS Framework] Vm#$sendMtop is deprecated, ' + 'please use "require(\'@weex-module/stream\')' + '.sendMtop(params, callback)" instead');
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
	  console.warn('[JS Framework] Vm#$callWindvane is deprecated, ' + 'please use "require(\'@weex-module/windvane\')' + '.call(params, callback)" instead');
	  var windvane = this._app.requireModule('windvane');
	  windvane.call(params, callback);
	}
	
	/**
	 * set spm for the page
	 * @param  {string} a
	 * @param  {string} b
	 */
	function $setSpm(a, b) {
	  console.warn('[JS Framework] Vm#$setSpm is deprecated, ' + 'please use "require(\'@weex-module/pageInfo\')' + '.setSpm(a, b)" instead');
	  var pageInfo = this._app.requireModule('pageInfo');
	  pageInfo.setSpm(a, b);
	}
	
	/**
	 * get the information of the current logined user
	 * @param  {Function} callback
	 */
	function $getUserInfo(callback) {
	  console.warn('[JS Framework] Vm#$getUserInfo is deprecated, ' + 'please use "require(\'@weex-module/user\')' + '.getUserInfo(callback)" instead');
	  var user = this._app.requireModule('user');
	  user.getUserInfo(callback);
	}
	
	/**
	 * perform login
	 * @param  {Function} callback
	 */
	function $login(callback) {
	  console.warn('[JS Framework] Vm#$login is deprecated, ' + 'please use "require(\'@weex-module/user\')' + '.login(callback)" instead');
	  var user = this._app.requireModule('user');
	  user.login(callback);
	}
	
	/**
	 * perform logout
	 * @param  {Function} callback
	 */
	function $logout(callback) {
	  console.warn('[JS Framework] Vm#$logout is deprecated, ' + 'please use "require(\'@weex-module/user\')' + '.logout(callback)" instead');
	  var user = this._app.requireModule('user');
	  user.logout(callback);
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDEwNWMxMDgyODI2YWZhNDliNDYiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvbmF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL3NldFRpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9zaGFyZWQvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL3NoYXJlZC9jb25zb2xlLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL29iamVjdEFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL3J1bnRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy92ZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvdmRvbS9saXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL3J1bnRpbWUvY29uZmlnLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvc3RhdGljL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9jdHJsL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvY3RybC9pbml0LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC91dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvYnVuZGxlL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvYnVuZGxlL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9zZW12ZXIvc2VtdmVyLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvcHJvY2Vzcy8wLjExLjkvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC92bS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS93YXRjaGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9jb3JlL2RlcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS9hcnJheS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvdm0vY29tcGlsZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3ZtL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29uZmlnLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC92bS9kb20taGVscGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC92bS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9kb3duZ3JhZGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9idW5kbGUvZGVmaW5lLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvY3RybC9taXNjLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9kaWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9saWZlLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9zdGF0aWMvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9icmlkZ2UuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9taXNjLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvcnVudGltZS9pbml0LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9wYWNrYWdlLmpzb24iLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwaS9tZXRob2RzLmpzIiwid2VicGFjazovLy8uL2xpYi9hcGkvbWV0aG9kcy5qcyJdLCJuYW1lcyI6WyJtZXRob2RzIiwicmVxdWlyZSIsImdsb2JhbCIsInJlZ2lzdGVyTWV0aG9kcyIsIm5hdGl2ZSIsInRyYW5zZm9ybWVyIiwibWV0aG9kTmFtZSIsInJldCIsIkVycm9yIiwiY29uc29sZSIsImVycm9yIiwidG9TdHJpbmciLCJmcmFtZXdvcmtWZXJzaW9uIiwidHJhbnNmb3JtZXJWZXJzaW9uIiwiZXh0ZW5kIiwiZGVmIiwicmVtb3ZlIiwiaGFzT3duIiwiYmluZCIsInRvQXJyYXkiLCJpc09iamVjdCIsImlzUGxhaW5PYmplY3QiLCJ0YXJnZXQiLCJzcmMiLCJPYmplY3QiLCJhc3NpZ24iLCJmaXJzdCIsInNoaWZ0Iiwia2V5IiwibGVuZ3RoIiwib2JqIiwidmFsIiwiZW51bWVyYWJsZSIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImFyciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3RvdHlwZSIsImNhbGwiLCJmbiIsImN0eCIsImEiLCJsIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJsaXN0Iiwic3RhcnQiLCJpIiwiQXJyYXkiLCJPQkpFQ1RfU1RSSU5HIiwic2V0VGltZW91dCIsInNldFRpbWVvdXROYXRpdmUiLCJ0aW1lb3V0TWFwIiwidGltZW91dElkIiwiY2IiLCJ0aW1lIiwic2V0VGltZW91dENhbGxiYWNrIiwiaWQiLCJXWEVudmlyb25tZW50IiwicGxhdGZvcm0iLCJQcm9taXNlIiwiY2xhc3NvZiIsInRlc3QiLCJjb2YiLCJUQUciLCJBUkciLCJ0cnlHZXQiLCJpdCIsImUiLCJtb2R1bGUiLCJleHBvcnRzIiwiTyIsIlQiLCJCIiwidW5kZWZpbmVkIiwiY2FsbGVlIiwic2xpY2UiLCJzdG9yZSIsInVpZCIsIlN5bWJvbCIsIlVTRV9TWU1CT0wiLCIkZXhwb3J0cyIsIm5hbWUiLCJTSEFSRUQiLCJ3aW5kb3ciLCJNYXRoIiwic2VsZiIsIkZ1bmN0aW9uIiwiX19nIiwicHgiLCJyYW5kb20iLCJjb25jYXQiLCJoaWRlIiwiaGFzIiwiU1JDIiwiVE9fU1RSSU5HIiwiJHRvU3RyaW5nIiwiVFBMIiwic3BsaXQiLCJpbnNwZWN0U291cmNlIiwic2FmZSIsImlzRnVuY3Rpb24iLCJqb2luIiwiU3RyaW5nIiwiZFAiLCJjcmVhdGVEZXNjIiwib2JqZWN0IiwiZiIsImFuT2JqZWN0IiwiSUU4X0RPTV9ERUZJTkUiLCJ0b1ByaW1pdGl2ZSIsIlAiLCJBdHRyaWJ1dGVzIiwiVHlwZUVycm9yIiwiZ2V0IiwiZXhlYyIsImRvY3VtZW50IiwiaXMiLCJjcmVhdGVFbGVtZW50IiwiUyIsInZhbHVlT2YiLCJiaXRtYXAiLCJjb3JlIiwidmVyc2lvbiIsIl9fZSIsIiRhdCIsIml0ZXJhdGVkIiwiX3QiLCJfaSIsInBvaW50IiwiZG9uZSIsInRvSW50ZWdlciIsImRlZmluZWQiLCJ0aGF0IiwicG9zIiwicyIsImIiLCJjaGFyQ29kZUF0IiwiY2hhckF0IiwiY2VpbCIsImZsb29yIiwiaXNOYU4iLCJMSUJSQVJZIiwiJGV4cG9ydCIsInJlZGVmaW5lIiwiSXRlcmF0b3JzIiwiJGl0ZXJDcmVhdGUiLCJzZXRUb1N0cmluZ1RhZyIsImdldFByb3RvdHlwZU9mIiwiSVRFUkFUT1IiLCJCVUdHWSIsImtleXMiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiQmFzZSIsIk5BTUUiLCJDb25zdHJ1Y3RvciIsIm5leHQiLCJERUZBVUxUIiwiSVNfU0VUIiwiRk9SQ0VEIiwiZ2V0TWV0aG9kIiwia2luZCIsInByb3RvIiwidmFsdWVzIiwiZW50cmllcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJGIiwiUFJPVE9UWVBFIiwidHlwZSIsInNvdXJjZSIsIklTX0ZPUkNFRCIsIklTX0dMT0JBTCIsIkciLCJJU19TVEFUSUMiLCJJU19QUk9UTyIsIklTX0JJTkQiLCJleHBQcm90byIsIm93biIsIm91dCIsImV4cCIsIlUiLCJXIiwiUiIsImFGdW5jdGlvbiIsImMiLCJjcmVhdGUiLCJkZXNjcmlwdG9yIiwiZFBzIiwiZW51bUJ1Z0tleXMiLCJJRV9QUk9UTyIsIkVtcHR5IiwiY3JlYXRlRGljdCIsImlmcmFtZSIsImx0IiwiZ3QiLCJpZnJhbWVEb2N1bWVudCIsInN0eWxlIiwiZGlzcGxheSIsImFwcGVuZENoaWxkIiwiY29udGVudFdpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiUHJvcGVydGllcyIsInJlc3VsdCIsImdldEtleXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiJGtleXMiLCJ0b0lPYmplY3QiLCJhcnJheUluZGV4T2YiLCJuYW1lcyIsInB1c2giLCJJT2JqZWN0IiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ0b0xlbmd0aCIsInRvSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJtaW4iLCJtYXgiLCJzaGFyZWQiLCJkb2N1bWVudEVsZW1lbnQiLCJ0YWciLCJzdGF0IiwidG9PYmplY3QiLCJPYmplY3RQcm90byIsImNvbnN0cnVjdG9yIiwiJGl0ZXJhdG9ycyIsIndrcyIsIlRPX1NUUklOR19UQUciLCJBcnJheVZhbHVlcyIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbiIsImFkZFRvVW5zY29wYWJsZXMiLCJzdGVwIiwiX2siLCJBcmd1bWVudHMiLCJVTlNDT1BBQkxFUyIsIkFycmF5UHJvdG8iLCJhbkluc3RhbmNlIiwiZm9yT2YiLCJzcGVjaWVzQ29uc3RydWN0b3IiLCJ0YXNrIiwic2V0IiwibWljcm90YXNrIiwiUFJPTUlTRSIsInByb2Nlc3MiLCIkUHJvbWlzZSIsImlzTm9kZSIsImVtcHR5IiwiSW50ZXJuYWwiLCJHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkiLCJXcmFwcGVyIiwiVVNFX05BVElWRSIsInByb21pc2UiLCJyZXNvbHZlIiwiRmFrZVByb21pc2UiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJ0aGVuIiwic2FtZUNvbnN0cnVjdG9yIiwiaXNUaGVuYWJsZSIsIm5ld1Byb21pc2VDYXBhYmlsaXR5IiwiQyIsIlByb21pc2VDYXBhYmlsaXR5IiwicmVqZWN0IiwiJCRyZXNvbHZlIiwiJCRyZWplY3QiLCJwZXJmb3JtIiwibm90aWZ5IiwiaXNSZWplY3QiLCJfbiIsImNoYWluIiwiX2MiLCJfdiIsIm9rIiwiX3MiLCJydW4iLCJyZWFjdGlvbiIsImhhbmRsZXIiLCJmYWlsIiwiZG9tYWluIiwiX2giLCJvbkhhbmRsZVVuaGFuZGxlZCIsImVudGVyIiwiZXhpdCIsIm9uVW5oYW5kbGVkIiwiYWJydXB0IiwiaXNVbmhhbmRsZWQiLCJlbWl0Iiwib251bmhhbmRsZWRyZWplY3Rpb24iLCJyZWFzb24iLCJfYSIsIm9ucmVqZWN0aW9uaGFuZGxlZCIsIiRyZWplY3QiLCJfZCIsIl93IiwiJHJlc29sdmUiLCJ3cmFwcGVyIiwiZXhlY3V0b3IiLCJlcnIiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJyIiwiY2FwYWJpbGl0eSIsIngiLCJpdGVyIiwiYWxsIiwiaXRlcmFibGUiLCJyZW1haW5pbmciLCIkaW5kZXgiLCJhbHJlYWR5Q2FsbGVkIiwicmFjZSIsImZvcmJpZGRlbkZpZWxkIiwiaXNBcnJheUl0ZXIiLCJnZXRJdGVyRm4iLCJCUkVBSyIsIlJFVFVSTiIsIml0ZXJGbiIsIml0ZXJhdG9yIiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJTUEVDSUVTIiwiRCIsImludm9rZSIsImh0bWwiLCJjZWwiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsImNvdW50ZXIiLCJxdWV1ZSIsIk9OUkVBRFlTVEFURUNIQU5HRSIsImRlZmVyIiwiY2hhbm5lbCIsInBvcnQiLCJsaXN0ZW5lciIsImV2ZW50IiwiZGF0YSIsImFyZ3MiLCJuZXh0VGljayIsInBvcnQyIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbXBvcnRTY3JpcHRzIiwicmVtb3ZlQ2hpbGQiLCJjbGVhciIsInVuIiwibWFjcm90YXNrIiwiT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiV2ViS2l0TXV0YXRpb25PYnNlcnZlciIsImhlYWQiLCJsYXN0IiwiZmx1c2giLCJwYXJlbnQiLCJ0b2dnbGUiLCJub2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJvYnNlcnZlIiwiY2hhcmFjdGVyRGF0YSIsIkRFU0NSSVBUT1JTIiwiS0VZIiwiU0FGRV9DTE9TSU5HIiwicml0ZXIiLCJmcm9tIiwic2tpcENsb3NpbmciLCJuYXRpdmVMb2ciLCJMRVZFTFMiLCJsZXZlbE1hcCIsImdlbmVyYXRlTGV2ZWxNYXAiLCJkZWJ1ZyIsImNoZWNrTGV2ZWwiLCJmb3JtYXQiLCJsb2ciLCJpbmZvIiwid2FybiIsIl9fb3JpX18iLCJmb3JFYWNoIiwibGV2ZWxJbmRleCIsImxldmVsIiwidHlwZUluZGV4IiwibG9nTGV2ZWwiLCJtYXAiLCJ2IiwidG9Mb3dlckNhc2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZ09QUyIsInBJRSIsIiRhc3NpZ24iLCJBIiwiSyIsImsiLCJhTGVuIiwiZ2V0U3ltYm9scyIsImlzRW51bSIsImoiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25maWciLCJEb2N1bWVudCIsIkVsZW1lbnQiLCJDb21tZW50IiwiTGlzdGVuZXIiLCJmcmFtZXdvcmtzIiwic2VuZFRhc2tzIiwiY2FsbE5hdGl2ZSIsIk5vZGUiLCJERUZBVUxUX1RBR19OQU1FIiwiaW5zdGFuY2VNYXAiLCJuZXh0Tm9kZVJlZiIsInVybCIsIlVSTCIsIm5vZGVNYXAiLCJnZW5DYWxsVGFza3MiLCJjcmVhdGVEb2N1bWVudEVsZW1lbnQiLCJ0YXNrcyIsImlzQXJyYXkiLCJyZXR1cm5WYWx1ZSIsIm1ldGhvZCIsInJlZiIsImpzb24iLCJjYWxsQWRkRWxlbWVudCIsImRlc3Ryb3kiLCJiYXRjaGVkIiwiZG9jSWQiLCJvd25lckRvY3VtZW50Iiwicm9sZSIsImRlcHRoIiwiX2RvY3VtZW50RWxlbWVudCIsImFwcGVuZEJvZHkiLCJpbnNlcnRCZWZvcmUiLCJiZWZvcmUiLCJkb2MiLCJwdXJlQ2hpbGRyZW4iLCJwYXJlbnROb2RlIiwiY2hpbGRyZW4iLCJiZWZvcmVJbmRleCIsIm5vZGVUeXBlIiwiY2hpbGQiLCJzZXRCb2R5IiwibGlua1BhcmVudCIsIm5vZGVJZCIsImNyZWF0ZUJvZHkiLCJfcm9vdCIsImJvZHkiLCJwcm9wcyIsInRhZ05hbWUiLCJjcmVhdGVDb21tZW50IiwidGV4dCIsImZpcmVFdmVudCIsImRvbUNoYW5nZXMiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwidXBkYXRlRWxlbWVudCIsImdldFJlZiIsImNoYW5nZXMiLCJhdHRycyIsInNldEF0dHIiLCJzZXRTdHlsZSIsIm5leHRTaWJsaW5nIiwicHJldmlvdXNTaWJsaW5nIiwiYXR0ciIsImNsYXNzU3R5bGUiLCJpbnNlcnRJbmRleCIsInJlZ2lzdGVyTm9kZSIsImFkZEVsZW1lbnQiLCJtb3ZlSW5kZXgiLCJtb3ZlRWxlbWVudCIsInB1cmVCZWZvcmUiLCJuZXh0RWxlbWVudCIsImluc2VydEFmdGVyIiwiYWZ0ZXIiLCJwcmV2aW91c0VsZW1lbnQiLCJwcmVzZXJ2ZWQiLCJyZW1vdmVJbmRleCIsInJlbW92ZUVsZW1lbnQiLCJuZXdJbmRleCIsImNoYW5nZVNpYmxpbmciLCJuZXdJbmRleEFmdGVyIiwiYmVmb3JlTmV3IiwiYWZ0ZXJOZXciLCJzaWxlbnQiLCJyZXNldENsYXNzU3R5bGUiLCJzZXRDbGFzc1N0eWxlIiwic2V0U3R5bGVzIiwidG9TdHlsZSIsImFkZEV2ZW50IiwicmVtb3ZlRXZlbnQiLCJ0b0pTT04iLCJjcmVhdGVBY3Rpb24iLCJ1cGRhdGVzIiwiY3JlYXRlRmluaXNoIiwiY2FsbGJhY2siLCJ1cGRhdGVGaW5pc2giLCJyZWZyZXNoRmluaXNoIiwiZWxlbWVudCIsImFjdGlvbnMiLCJhZGRBY3Rpb25zIiwidGFyZ2V0UmVmIiwicGFyZW50UmVmIiwiV2VleCIsImNyZWF0ZUluc3RhbmNlIiwiaW5pdCIsInJlZnJlc2hJbnN0YW5jZSIsImRlc3Ryb3lJbnN0YW5jZSIsInJlZ2lzdGVyQ29tcG9uZW50cyIsInJlZ2lzdGVyTW9kdWxlcyIsInJlY2VpdmVUYXNrcyIsImdldFJvb3QiLCJjb2RlIiwib3B0aW9ucyIsImluc3RhbmNlIiwicmVxdWlyZU1vZHVsZSIsInVwZGF0ZUFjdGlvbnMiLCJjYWxsVGFza3MiLCJnZXRNb2R1bGUiLCJjbGVhck1vZHVsZXMiLCJpbml0TW9kdWxlcyIsImluaXRNZXRob2RzIiwicmVxdWlyZUN1c3RvbUNvbXBvbmVudCIsInJlZ2lzdGVyQ3VzdG9tQ29tcG9uZW50IiwibmF0aXZlTW9kdWxlcyIsIm1vZHVsZU5hbWUiLCJtb2R1bGVzIiwiaWZSZXBsYWNlIiwiVm0iLCJhcGlzIiwicCIsImFwaU5hbWUiLCJhcHAiLCJjdXN0b21Db21wb25lbnRNYXAiLCJyZWZyZXNoIiwiZ2V0Um9vdEVsZW1lbnQiLCJidW5kbGVEZWZpbmUiLCJidW5kbGVCb290c3RyYXAiLCJfZGF0YSIsImJ1bmRsZVJlZ2lzdGVyIiwiYnVuZGxlUmVuZGVyIiwiYnVuZGxlUmVxdWlyZSIsImJ1bmRsZURvY3VtZW50IiwiYnVuZGxlUmVxdWlyZU1vZHVsZSIsImZ1bmN0aW9uQm9keSIsInN1YnN0ciIsInRpbWVyIiwidGltZXJBUElzIiwic2V0SW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJuIiwiY2xlYXJJbnRlcnZhbCIsImlzUmVzZXJ2ZWQiLCJjcmVhdGVOZXdTZXQiLCJjYWNoZWQiLCJ0eXBvZiIsInJlbW92ZVdlZXhQcmVmaXgiLCJyZW1vdmVKU1N1cmZpeCIsInN0ciIsImhhc1Byb3RvIiwiX1NldCIsIlNldCIsIm1hdGNoIiwiYWRkIiwibmF0aXZlU2V0IiwiY2FjaGUiLCJjYWNoZWRGbiIsImhpdCIsImNhbWVsaXplUkUiLCJjYW1lbGl6ZSIsInJlcGxhY2UiLCJ0b1VwcGVyIiwiXyIsInRvVXBwZXJDYXNlIiwiaHlwaGVuYXRlUkUiLCJoeXBoZW5hdGUiLCJzdWJzdHJpbmciLCJXRUVYX0NPTVBPTkVOVF9SRUciLCJXRUVYX01PRFVMRV9SRUciLCJOT1JNQUxfTU9EVUxFX1JFRyIsIkpTX1NVUkZJWF9SRUciLCJpc1dlZXhDb21wb25lbnQiLCJpc1dlZXhNb2R1bGUiLCJpc05vcm1hbE1vZHVsZSIsImlzTnBtTW9kdWxlIiwiYm9vdHN0cmFwIiwiZGVmaW5lRm4iLCJyZWdpc3RlciIsImRvd25ncmFkZSIsImNsZWFuTmFtZSIsInNhdGlzZmllcyIsImRvd25ncmFkZVJlc3VsdCIsImNoZWNrIiwiaXNEb3duZ3JhZGUiLCJlcnJvclR5cGUiLCJlcnJvck1lc3NhZ2UiLCJ2bSIsIl9hcHAiLCJTZW1WZXIiLCJlbnYiLCJOT0RFX0RFQlVHIiwidW5zaGlmdCIsIlNFTVZFUl9TUEVDX1ZFUlNJT04iLCJNQVhfTEVOR1RIIiwiTUFYX1NBRkVfSU5URUdFUiIsIk51bWJlciIsInJlIiwiTlVNRVJJQ0lERU5USUZJRVIiLCJOVU1FUklDSURFTlRJRklFUkxPT1NFIiwiTk9OTlVNRVJJQ0lERU5USUZJRVIiLCJNQUlOVkVSU0lPTiIsIk1BSU5WRVJTSU9OTE9PU0UiLCJQUkVSRUxFQVNFSURFTlRJRklFUiIsIlBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0UiLCJQUkVSRUxFQVNFIiwiUFJFUkVMRUFTRUxPT1NFIiwiQlVJTERJREVOVElGSUVSIiwiQlVJTEQiLCJGVUxMIiwiRlVMTFBMQUlOIiwiTE9PU0VQTEFJTiIsIkxPT1NFIiwiR1RMVCIsIlhSQU5HRUlERU5USUZJRVJMT09TRSIsIlhSQU5HRUlERU5USUZJRVIiLCJYUkFOR0VQTEFJTiIsIlhSQU5HRVBMQUlOTE9PU0UiLCJYUkFOR0UiLCJYUkFOR0VMT09TRSIsIkxPTkVUSUxERSIsIlRJTERFVFJJTSIsIlJlZ0V4cCIsInRpbGRlVHJpbVJlcGxhY2UiLCJUSUxERSIsIlRJTERFTE9PU0UiLCJMT05FQ0FSRVQiLCJDQVJFVFRSSU0iLCJjYXJldFRyaW1SZXBsYWNlIiwiQ0FSRVQiLCJDQVJFVExPT1NFIiwiQ09NUEFSQVRPUkxPT1NFIiwiQ09NUEFSQVRPUiIsIkNPTVBBUkFUT1JUUklNIiwiY29tcGFyYXRvclRyaW1SZXBsYWNlIiwiSFlQSEVOUkFOR0UiLCJIWVBIRU5SQU5HRUxPT1NFIiwiU1RBUiIsInBhcnNlIiwibG9vc2UiLCJlciIsInZhbGlkIiwiY2xlYW4iLCJ0cmltIiwibSIsInJhdyIsIm1ham9yIiwibWlub3IiLCJwYXRjaCIsInByZXJlbGVhc2UiLCJudW0iLCJidWlsZCIsImNvbXBhcmUiLCJvdGhlciIsImNvbXBhcmVNYWluIiwiY29tcGFyZVByZSIsImNvbXBhcmVJZGVudGlmaWVycyIsImluYyIsInJlbGVhc2UiLCJpZGVudGlmaWVyIiwiZGlmZiIsInZlcnNpb24xIiwidmVyc2lvbjIiLCJlcSIsInYxIiwidjIiLCJudW1lcmljIiwiYW51bSIsImJudW0iLCJyY29tcGFyZUlkZW50aWZpZXJzIiwiY29tcGFyZUxvb3NlIiwicmNvbXBhcmUiLCJzb3J0IiwicnNvcnQiLCJuZXEiLCJndGUiLCJsdGUiLCJjbXAiLCJvcCIsIkNvbXBhcmF0b3IiLCJjb21wIiwic2VtdmVyIiwiQU5ZIiwib3BlcmF0b3IiLCJSYW5nZSIsInJhbmdlIiwicGFyc2VSYW5nZSIsImZpbHRlciIsImNvbXBzIiwiaHIiLCJoeXBoZW5SZXBsYWNlIiwiY29tcFJlIiwicGFyc2VDb21wYXJhdG9yIiwidG9Db21wYXJhdG9ycyIsInJlcGxhY2VDYXJldHMiLCJyZXBsYWNlVGlsZGVzIiwicmVwbGFjZVhSYW5nZXMiLCJyZXBsYWNlU3RhcnMiLCJpc1giLCJyZXBsYWNlVGlsZGUiLCJNIiwicHIiLCJyZXBsYWNlQ2FyZXQiLCJyZXBsYWNlWFJhbmdlIiwiZ3RsdCIsInhNIiwieG0iLCJ4cCIsImFueVgiLCIkMCIsImZNIiwiZm0iLCJmcCIsImZwciIsImZiIiwidG8iLCJ0TSIsInRtIiwidHAiLCJ0cHIiLCJ0YiIsInRlc3RTZXQiLCJhbGxvd2VkIiwibWF4U2F0aXNmeWluZyIsInZlcnNpb25zIiwibWluU2F0aXNmeWluZyIsInZhbGlkUmFuZ2UiLCJsdHIiLCJvdXRzaWRlIiwiZ3RyIiwiaGlsbyIsImd0Zm4iLCJsdGVmbiIsImx0Zm4iLCJlY29tcCIsImNvbXBhcmF0b3JzIiwiaGlnaCIsImxvdyIsImNvbXBhcmF0b3IiLCJwYXJzZWQiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwicnVuQ2xlYXJUaW1lb3V0IiwibWFya2VyIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJJdGVtIiwiYXJyYXkiLCJ0aXRsZSIsImJyb3dzZXIiLCJhcmd2Iiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsInBhcmVudFZtIiwicGFyZW50RWwiLCJtZXJnZWREYXRhIiwiZXh0ZXJuYWxFdmVudHMiLCJfcGFyZW50IiwiX3JlYWxQYXJlbnQiLCJfY2hpbGRyZW5WbXMiLCJfb3B0aW9ucyIsIl9tZXRob2RzIiwiX2NvbXB1dGVkIiwiY29tcHV0ZWQiLCJfY3NzIiwiX2lkcyIsIl92bUV2ZW50cyIsIl90eXBlIiwiJGVtaXQiLCJfaW5pdGVkIiwiX2NyZWF0ZWQiLCJyZWFkeSIsIl9wYXJlbnRFbCIsImluaXRTdGF0ZSIsImluaXREYXRhIiwiaW5pdENvbXB1dGVkIiwiX3dhdGNoZXJzIiwidXNlckRlZiIsIm1ha2VDb21wdXRlZEdldHRlciIsImdldHRlciIsIm93bmVyIiwid2F0Y2hlciIsImxhenkiLCJjb21wdXRlZEdldHRlciIsImRpcnR5IiwiZXZhbHVhdGUiLCJkZXBlbmQiLCJXYXRjaGVyIiwiZXhwT3JGbiIsImlzRm4iLCJleHByZXNzaW9uIiwiYWN0aXZlIiwiZGVwcyIsIm5ld0RlcHMiLCJkZXBJZHMiLCJuZXdEZXBJZHMiLCJOT0RFX0VOViIsInF1ZXVlZCIsInNoYWxsb3ciLCJkZWVwIiwidHJhdmVyc2UiLCJjbGVhbnVwRGVwcyIsImFkZERlcCIsImRlcCIsImFkZFN1YiIsInJlbW92ZVN1YiIsInRtcCIsInVwZGF0ZSIsIm9sZFZhbHVlIiwidGVhcmRvd24iLCJfaXNCZWluZ0Rlc3Ryb3llZCIsIl92Rm9yUmVtb3ZpbmciLCJzZWVuT2JqZWN0cyIsInNlZW4iLCJpc0EiLCJpc08iLCJfX29iX18iLCJkZXBJZCIsIkRlcCIsInB1c2hUYXJnZXQiLCJwb3BUYXJnZXQiLCJyZXNldFRhcmdldCIsInN1YnMiLCJ0YXJnZXRTdGFjayIsIl90YXJnZXQiLCJwb3AiLCJzdWIiLCJkZWZpbmVSZWFjdGl2ZSIsImRlbCIsInByb3h5IiwidW5wcm94eSIsImFycmF5S2V5cyIsImdldE93blByb3BlcnR5TmFtZXMiLCJhdWdtZW50IiwicHJvdG9BdWdtZW50IiwiY29weUF1Z21lbnQiLCJvYnNlcnZlQXJyYXkiLCJ3YWxrIiwiY29udmVydCIsIml0ZW1zIiwiYWRkVm0iLCJ2bXMiLCJyZW1vdmVWbSIsIl9fcHJvdG9fXyIsIm9iIiwiaXNFeHRlbnNpYmxlIiwiX2lzVnVlIiwicHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJzZXR0ZXIiLCJjaGlsZE9iIiwicmVhY3RpdmVHZXR0ZXIiLCJyZWFjdGl2ZVNldHRlciIsIm5ld1ZhbCIsIiRmb3JjZVVwZGF0ZSIsIktFWV9XT1JEUyIsInByb3h5R2V0dGVyIiwicHJveHlTZXR0ZXIiLCJhcnJheVByb3RvIiwiYXJyYXlNZXRob2RzIiwib3JpZ2luYWwiLCJtdXRhdG9yIiwiaW5zZXJ0ZWQiLCIkc2V0IiwiJHJlbW92ZSIsIm9wdCIsInRlbXBsYXRlIiwiY29tcGlsZSIsIl9yZWFkeSIsImRlc3QiLCJtZXRhIiwibGFzdFNpZ25hbCIsInRhcmdldElzRnJhZ21lbnQiLCJjb21waWxlRnJhZ21lbnQiLCJ0YXJnZXRJc0NvbnRlbnQiLCJfY29udGVudCIsInRhcmdldE5lZWRDaGVja1JlcGVhdCIsImNvbXBpbGVSZXBlYXQiLCJ0YXJnZXROZWVkQ2hlY2tTaG93biIsImNvbXBpbGVTaG93biIsInR5cGVHZXR0ZXIiLCJ0YXJnZXROZWVkQ2hlY2tUeXBlIiwiY29tcGlsZVR5cGUiLCJjb21wb25lbnQiLCJ0YXJnZXRJc0NvbXBvc2VkIiwiY29tcGlsZUN1c3RvbUNvbXBvbmVudCIsImNvbXBpbGVOYXRpdmVDb21wb25lbnQiLCJyZXBlYXQiLCJzaG93biIsImNvbXBvbmVudHMiLCJmcmFnQmxvY2siLCJvbGRTdHlsZSIsInRyYWNrQnkiLCJiaW5kUmVwZWF0IiwibmV3TWV0YSIsImJpbmRTaG93biIsIkN0b3IiLCJzdWJWbSIsIl9leHRlcm5hbEJpbmRpbmciLCJjb21waWxlQ2hpbGRyZW4iLCJfcm9vdEVsIiwiZXZlbnRzIiwiYXBwZW5kIiwidHJlZU1vZGUiLCJldmVyeSIsImtleU5hbWUiLCJ2YWx1ZU5hbWUiLCJjb21waWxlSXRlbSIsImNvbnRleHQiLCJuZXdDb250ZXh0IiwibWVyZ2VDb250ZXh0Iiwid2F0Y2hCbG9jayIsIm9sZENoaWxkcmVuIiwib2xkVm1zIiwib2xkRGF0YSIsInRyYWNrTWFwIiwicmV1c2VkTWFwIiwicmV1c2VkTGlzdCIsInVwZGF0ZU1hcmsiLCJyZXVzZWQiLCJjYWxjIiwiZGlmZmVyIiwibGF0ZXN0VmFsdWUiLCJyZWNvcmRlZCIsImJsb2NrSWQiLCJhcHBseU5haXR2ZUNvbXBvbmVudE9wdGlvbnMiLCJiaW5kRWxlbWVudCIsImJpbmRTdWJWbSIsImJpbmRTdWJWbUFmdGVySW5pdGlhbGl6ZWQiLCJzZXRJZCIsIndhdGNoIiwibmF0aXZlQ29tcG9uZW50TWFwIiwiU0VUVEVSUyIsInN1YmtleSIsInNldENsYXNzIiwiY2xhc3NMaXN0IiwiYmluZEV2ZW50cyIsInJlcGVhdEl0ZW0iLCJyZWR1Y2UiLCJtZXJnZVByb3BzIiwibWVyZ2VDbGFzc1N0eWxlIiwibWVyZ2VTdHlsZSIsImNzcyIsImNsYXNzTmFtZSIsImFkZENsYXNzTmFtZSIsIm5ld0lkIiwiYmluZERpciIsInNldEV2ZW50IiwiYmluZEtleSIsImltYWdlIiwiY29udGFpbmVyIiwic2xpZGVyIiwiY2VsbCIsImNyZWF0ZUJsb2NrIiwiYXR0YWNoVGFyZ2V0IiwibW92ZVRhcmdldCIsInJlbW92ZVRhcmdldCIsImNyZWF0ZUJsb2NrU3RhcnQiLCJlbmQiLCJjcmVhdGVCbG9ja0VuZCIsImxhc3Rlc3RCbG9ja0lkIiwiYW5jaG9yIiwic2lnbmFsIiwibW92ZUJsb2NrIiwiZ3JvdXAiLCJ0ZW1wIiwicHJlc2VydmVCbG9jayIsInJlbW92ZUJsb2NrIiwiJGRpc3BhdGNoIiwiJGJyb2FkY2FzdCIsIiRvbiIsIiRvZmYiLCJpbml0RXZlbnRzIiwibWl4aW5FdmVudHMiLCJFdnQiLCJkZXRhaWwiLCJzaG91bGRTdG9wIiwic3RvcCIsImhhc1N0b3BwZWQiLCJoYW5kbGVyTGlzdCIsImV2dCIsIkxJRkVfQ1lDTEVfVFlQRVMiLCJ0eXBlMSIsInR5cGUyIiwibm9ybWFsaXplVmVyc2lvbiIsImdldEVycm9yIiwiaXNWYWxpZCIsImNyaXRlcmlhIiwiZ2V0TXNnIiwiX2tleSIsImRldmljZUluZm8iLCJjdXN0b21Eb3duZ3JhZGUiLCJkUGxhdGZvcm0iLCJjT2JqIiwia2V5TG93ZXIiLCJpc1ZlcnNpb24iLCJpc0RldmljZU1vZGVsIiwiZCIsIl9jcml0ZXJpYSIsImZhY3RvcnkiLCJkZWZpbml0aW9uIiwiY29tbW9uTW9kdWxlcyIsImRlc3Ryb3lWbSIsInJlZnJlc2hEYXRhIiwiYmxvY2tzIiwiY2FsbGJhY2tzIiwid2F0Y2hlckNvdW50Iiwidm1Db3VudCIsInNvbWUiLCJjYWxsYmFja0lkIiwiaWZLZWVwQWxpdmUiLCJub3JtYWxpemUiLCJhcmciLCJ0b0lTT1N0cmluZyIsIkFwcCIsImJ1bmRsZVVybCIsIkRpZmZlciIsImhvb2tzIiwiaGFzVGltZXIiLCJpc1RpbWVvdXQiLCJjYWxsVHlwZU1hcCIsImNhbGxUeXBlTGlzdCIsImlzRW1wdHkiLCJjZmciLCJqc0hhbmRsZXJzIiwicmVzdWx0cyIsInZlcnNpb25SZWdFeHAiLCJjaGVja1ZlcnNpb24iLCJmcmFtZXdvcmsiLCJidW5kbGVWZXJzaW9uIiwiZ2VuSW5pdCIsImdlbkluc3RhbmNlIiwiYWRhcHRJbnN0YW5jZSIsIm5hdGl2ZU1ldGhvZE5hbWUiLCIkIiwiJGVsIiwiJHZtIiwiJHJlbmRlclRoZW4iLCIkc2Nyb2xsVG8iLCIkdHJhbnNpdGlvbiIsIiRnZXRDb25maWciLCIkc2VuZEh0dHAiLCIkb3BlblVSTCIsIiRzZXRUaXRsZSIsIiRjYWxsIiwib2Zmc2V0IiwiZG9tIiwic2Nyb2xsVG9FbGVtZW50Iiwic3R5bGVzIiwiYW5pbWF0aW9uIiwidHJhbnNpdGlvbiIsIl9zZXRTdHlsZSIsInBhcmFtcyIsInN0cmVhbSIsInNlbmRIdHRwIiwib3BlblVSTCIsInBhZ2VJbmZvIiwic2V0VGl0bGUiLCIkdXNlclRyYWNrIiwiJHNlbmRNdG9wIiwiJGNhbGxXaW5kdmFuZSIsIiRzZXRTcG0iLCIkZ2V0VXNlckluZm8iLCIkbG9naW4iLCIkbG9nb3V0IiwiY29tTmFtZSIsInBhcmFtIiwidXNlclRyYWNrIiwiY29tbWl0Iiwid2luZHZhbmUiLCJjbGFzcyIsInNlbmRNdG9wIiwic2V0U3BtIiwidXNlciIsImdldFVzZXJJbmZvIiwibG9naW4iLCJsb2dvdXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVBOzs7QUFHQSxLQUFNQSxVQUFVLG1CQUFBQyxDQUFRLEdBQVIsQ0FBaEI7ZUFDMEJDLE07S0FBbkJDLGUsV0FBQUEsZTs7QUFDUEEsaUJBQWdCSCxPQUFoQixFOzs7Ozs7Ozs7QUNQQSx3Qjs7Ozs7Ozs7QUNBQTs7QUFDQTs7OztBQUNBOztBQUNBOztLQUFZQSxPOzs7Ozs7S0FFSkksTSx1QkFBQUEsTTtLQUFRQyxXLHVCQUFBQSxXOztBQUVoQjs7NEJBQ1dDLFU7QUFDVEosVUFBT0ksVUFBUCxJQUFxQixZQUFhO0FBQ2hDLFNBQU1DLE1BQU0sa0JBQVFELFVBQVIscUNBQVo7QUFDQSxTQUFJQyxlQUFlQyxLQUFuQixFQUEwQjtBQUN4QkMsZUFBUUMsS0FBUixDQUFjSCxJQUFJSSxRQUFKLEVBQWQ7QUFDRDtBQUNELFlBQU9KLEdBQVA7QUFDRCxJQU5EOzs7QUFERixNQUFLLElBQU1ELFVBQVgsdUJBQWtDO0FBQUEsU0FBdkJBLFVBQXVCO0FBUWpDOztBQUVEO0FBQ0FKLFFBQU9VLGdCQUFQLEdBQTBCUixNQUExQjtBQUNBRixRQUFPVyxrQkFBUCxHQUE0QlIsV0FBNUI7O0FBRUE7QUFDQUgsUUFBT0MsZUFBUCxDQUF1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ZixJQUFMLENBQVVsRixhQUFWLENBQXdCLE1BQXhCLENBQWI7QUFDQTBrQixRQUFLQyxXQUFMLENBQWlCL2xCLFFBQWpCO0FBQ0Q7O0FBRUQ7Ozs7QUFJTyxVQUFTb2xCLE1BQVQsQ0FBZ0JwbEIsUUFBaEIsRUFBMEI7QUFDL0J4ZixXQUFRa1ksSUFBUixDQUFhLDZDQUNMLDRDQURLLEdBRUwsMkJBRlI7QUFHQSxPQUFNb3RCLE9BQU8sS0FBS3hmLElBQUwsQ0FBVWxGLGFBQVYsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBMGtCLFFBQUtFLEtBQUwsQ0FBV2htQixRQUFYO0FBQ0Q7O0FBRUQ7Ozs7QUFJTyxVQUFTcWxCLE9BQVQsQ0FBaUJybEIsUUFBakIsRUFBMkI7QUFDaEN4ZixXQUFRa1ksSUFBUixDQUFhLDhDQUNMLDRDQURLLEdBRUwsNEJBRlI7QUFHQSxPQUFNb3RCLE9BQU8sS0FBS3hmLElBQUwsQ0FBVWxGLGFBQVYsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBMGtCLFFBQUtHLE1BQUwsQ0FBWWptQixRQUFaO0FBQ0QsRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNDEwNWMxMDgyODI2YWZhNDliNDZcbiAqKi8iLCJpbXBvcnQgJ3dlZXgtanMtZnJhbWV3b3JrJ1xuXG4vKipcbiAqIHJlZ2lzdGVyIG1ldGhvZHNcbiAqL1xuY29uc3QgbWV0aG9kcyA9IHJlcXVpcmUoJy4vbGliL2FwaS9tZXRob2RzJylcbmNvbnN0IHtyZWdpc3Rlck1ldGhvZHN9ID0gZ2xvYmFsXG5yZWdpc3Rlck1ldGhvZHMobWV0aG9kcylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJy4vc3JjL25hdGl2ZSdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0ICcuLi9zaGFyZWQnXG5pbXBvcnQgcnVudGltZSBmcm9tICcuLi9ydW50aW1lJ1xuaW1wb3J0IHsgc3VidmVyc2lvbiB9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcbmltcG9ydCAqIGFzIG1ldGhvZHMgZnJvbSAnLi4vZGVmYXVsdC9hcGkvbWV0aG9kcydcblxuY29uc3QgeyBuYXRpdmUsIHRyYW5zZm9ybWVyIH0gPSBzdWJ2ZXJzaW9uXG5cbi8vIHJlZ2lzdGVyIGluc3RhbmNlIG1hbmFnZW1lbnQgQVBJc1xuZm9yIChjb25zdCBtZXRob2ROYW1lIGluIHJ1bnRpbWUpIHtcbiAgZ2xvYmFsW21ldGhvZE5hbWVdID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCByZXQgPSBydW50aW1lW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gICAgaWYgKHJldCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHJldC50b1N0cmluZygpKVxuICAgIH1cbiAgICByZXR1cm4gcmV0XG4gIH1cbn1cblxuLy8gcmVnaXN0ZXIgZnJhbWV3b3JrIG1ldGEgaW5mb1xuZ2xvYmFsLmZyYW1ld29ya1ZlcnNpb24gPSBuYXRpdmVcbmdsb2JhbC50cmFuc2Zvcm1lclZlcnNpb24gPSB0cmFuc2Zvcm1lclxuXG4vLyByZWdpc3RlciBzcGVjaWFsIG1ldGhvZHMgZm9yIFdlZXggZnJhbWV3b3JrXG5nbG9iYWwucmVnaXN0ZXJNZXRob2RzKG1ldGhvZHMpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvbmF0aXZlL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0ICcuL3NldFRpbWVvdXQnXG5pbXBvcnQgJy4vcHJvbWlzZSdcbmltcG9ydCAnLi9jb25zb2xlJ1xuaW1wb3J0ICcuL29iamVjdEFzc2lnbidcblxuZXhwb3J0IHtcbiAgZXh0ZW5kLFxuICBkZWYsXG4gIHJlbW92ZSxcbiAgaGFzT3duLFxuICBiaW5kLFxuICB0b0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdFxufSBmcm9tICcuL3V0aWxzJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL3NoYXJlZC9pbmRleC5qc1xuICoqLyIsIi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0b1xuICogQHBhcmFtIHtPYmplY3R9IGZyb21cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kICh0YXJnZXQsIC4uLnNyYykge1xuICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc3JjKVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGZpcnN0ID0gc3JjLnNoaWZ0KClcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmaXJzdCkge1xuICAgICAgdGFyZ2V0W2tleV0gPSBmaXJzdFtrZXldXG4gICAgfVxuICAgIGlmIChzcmMubGVuZ3RoKSB7XG4gICAgICBleHRlbmQodGFyZ2V0LCAuLi5zcmMpXG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXRcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBbZW51bWVyYWJsZV1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmIChvYmosIGtleSwgdmFsLCBlbnVtZXJhYmxlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIHZhbHVlOiB2YWwsXG4gICAgZW51bWVyYWJsZTogISFlbnVtZXJhYmxlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBpdGVtIGZyb20gYW4gYXJyYXlcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Kn0gaXRlbVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUgKGFyciwgaXRlbSkge1xuICBpZiAoYXJyLmxlbmd0aCkge1xuICAgIGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSlcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGhhcyB0aGUgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5leHBvcnQgZnVuY3Rpb24gaGFzT3duIChvYmosIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuLyoqXG4gKiBTaW1wbGUgYmluZCwgZmFzdGVyIHRoYW4gbmF0aXZlXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHhcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kIChmbiwgY3R4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgIGNvbnN0IGwgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgcmV0dXJuIGxcbiAgICAgID8gbCA+IDFcbiAgICAgICAgPyBmbi5hcHBseShjdHgsIGFyZ3VtZW50cylcbiAgICAgICAgOiBmbi5jYWxsKGN0eCwgYSlcbiAgICAgIDogZm4uY2FsbChjdHgpXG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIEFycmF5LWxpa2Ugb2JqZWN0IHRvIGEgcmVhbCBBcnJheS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5LWxpa2V9IGxpc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnRdIC0gc3RhcnQgaW5kZXhcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5IChsaXN0LCBzdGFydCkge1xuICBzdGFydCA9IHN0YXJ0IHx8IDBcbiAgbGV0IGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0XG4gIGNvbnN0IHJldCA9IG5ldyBBcnJheShpKVxuICB3aGlsZSAoaS0tKSB7XG4gICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuLyoqXG4gKiBTdHJpY3Qgb2JqZWN0IHR5cGUgY2hlY2suIE9ubHkgcmV0dXJucyB0cnVlXG4gKiBmb3IgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuY29uc3QgT0JKRUNUX1NUUklORyA9ICdbb2JqZWN0IE9iamVjdF0nXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09IE9CSkVDVF9TVFJJTkdcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9zaGFyZWQvdXRpbHMuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFBvbHlmaWxsIGBzZXRUaW1lb3V0YCBvbiBBbmRyb2lkIFY4IHVzaW5nIG5hdGl2ZSBtZXRob2RcbiAqIGBzZXRUaW1lb3V0TmF0aXZlKGNhbGxiYWNrSWQsIHRpbWUpYCBhbmQgSlMgbWV0aG9kXG4gKiBgc2V0VGltZW91dENhbGxiYWNrKGNhbGxiYWNrSWQpYC5cbiAqIFRoaXMgcG9seWZpbGwgaXMgb25seSB1c2VkIGluIHZpcnR1YWwtRE9NIGRpZmYgJiBmbHVzaCBhZ29yaXRobS4gTm90XG4gKiBhY2Nlc3NlZCBieSBKUyBCdW5kbGUgY29kZSAoVGhlIHRpbWVyIEFQSXMgcG9seWZpbGwgZm9yIEpTIEJ1bmRsZSBpcyBpblxuICogYGh0bWw1L2RlZmF1bHQvYXBwL2N0cmwuanNgKS5cbiAqL1xuXG5jb25zdCB7XG4gIHNldFRpbWVvdXQsXG4gIHNldFRpbWVvdXROYXRpdmVcbn0gPSBnbG9iYWxcblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBzZXRUaW1lb3V0TmF0aXZlID09PSAnZnVuY3Rpb24nKSB7XG4gIGNvbnN0IHRpbWVvdXRNYXAgPSB7fVxuICBsZXQgdGltZW91dElkID0gMFxuXG4gIGdsb2JhbC5zZXRUaW1lb3V0ID0gKGNiLCB0aW1lKSA9PiB7XG4gICAgdGltZW91dE1hcFsrK3RpbWVvdXRJZF0gPSBjYlxuICAgIHNldFRpbWVvdXROYXRpdmUodGltZW91dElkLnRvU3RyaW5nKCksIHRpbWUpXG4gIH1cblxuICBnbG9iYWwuc2V0VGltZW91dENhbGxiYWNrID0gKGlkKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aW1lb3V0TWFwW2lkXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGltZW91dE1hcFtpZF0oKVxuICAgICAgZGVsZXRlIHRpbWVvdXRNYXBbaWRdXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL3NldFRpbWVvdXQuanNcbiAqKi8iLCIvLyBmaXggUHJvbWlzZSBQcm9ibGVtIG9uIEpTQ29udGV4dCBvZiBpT1M3fjhcbi8vIEBzZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNTg2NlxuY29uc3QgeyBXWEVudmlyb25tZW50IH0gPSBnbG9iYWxcbmlmIChXWEVudmlyb25tZW50ICYmIFdYRW52aXJvbm1lbnQucGxhdGZvcm0gPT09ICdpT1MnKSB7XG4gIGdsb2JhbC5Qcm9taXNlID0gbnVsbFxufVxucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJylcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJylcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJylcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZScpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL3Byb21pc2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgdGVzdCAgICA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZih0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKXtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanNcbiAqKi8iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzXG4gKiovIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fY29mLmpzXG4gKiovIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3drcy5qc1xuICoqLyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qc1xuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzXG4gKiovIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3VpZC5qc1xuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgU1JDICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpXG4gICwgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJ1xuICAsICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR11cbiAgLCBUUEwgICAgICAgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywga2V5LCB2YWwsIHNhZmUpe1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmKE9ba2V5XSA9PT0gdmFsKXJldHVybjtcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYoTyA9PT0gZ2xvYmFsKXtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaWYoIXNhZmUpe1xuICAgICAgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihPW2tleV0pT1trZXldID0gdmFsO1xuICAgICAgZWxzZSBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qc1xuICoqLyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faGlkZS5qc1xuICoqLyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qc1xuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4gKiovIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4gKiovIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuICoqLyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19oYXMuanNcbiAqKi8iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4gKiovIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4gKiovIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZSAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSlcbiAgICAsIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZih0YXJnZXQpcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYoZXhwb3J0c1trZXldICE9IG91dCloaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZihJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dClleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzXG4gKiovIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbiAqKi8iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuICoqLyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanNcbiAqKi8iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbiAqKi8iLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4gKiovIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzXG4gKiovIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuICoqLyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanNcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190by1pbmRleC5qc1xuICoqLyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4gKiovIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faHRtbC5qc1xuICoqLyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbiAqKi8iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4gKiovIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanNcbiAqKi8iLCJ2YXIgJGl0ZXJhdG9ycyAgICA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJylcbiAgLCByZWRlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB3a3MgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCBJVEVSQVRPUiAgICAgID0gd2tzKCdpdGVyYXRvcicpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKVxuICAsIEFycmF5VmFsdWVzICAgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZVxuICAgICwga2V5O1xuICBpZihwcm90byl7XG4gICAgaWYoIXByb3RvW0lURVJBVE9SXSloaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmKCFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBmb3Ioa2V5IGluICRpdGVyYXRvcnMpaWYoIXByb3RvW2tleV0pcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuICoqLyIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpXG4gICwgQXJyYXlQcm90byAgPSBBcnJheS5wcm90b3R5cGU7XG5pZihBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuICoqLyIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanNcbiAqKi8iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4gKiovIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuICoqLyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuICoqLyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbiAqKi8iLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2h0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3Rhc2suanNcbiAqKi8iLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2ludm9rZS5qc1xuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanNcbiAqKi8iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYylyZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuICoqLyIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBUaGlzIGZpbGUgd2lsbCBoYWNrIGBjb25zb2xlYCBtZXRob2RzIGJ5IGBXWEVudmlyb25tZW50LmxvZ0xldmVsYC5cbiAqIFNvIHdlIGNhbiBjb250cm9sIGhvdyBtYW55IGFuZCB3aGljaCBtZXNzYWdlcyB3aWxsIGJlIHNlbnQgYnkgY2hhbmdlIHRoZSBsb2cgbGV2ZWwuXG4gKiBBZGRpdGlvbmFsbHkgaW4gbmF0aXZlIHBsYXRmb3JtIHRoZSBtZXNzYWdlIGNvbnRlbnQgbXVzdCBiZSBwcmltaXRpdmUgdmFsdWVzIGFuZFxuICogdXNpbmcgYG5hdGl2ZUxvZyguLi5hcmdzLCBsb2dMZXZlbE1hcmspYCBzbyB3ZSBjcmVhdGUgYSBuZXcgYGNvbnNvbGVgIG9iamVjdCBpblxuICogZ2xvYmFsIGFkZCBhIGZvcm1hdCBwcm9jZXNzIGZvciBpdHMgbWV0aG9kcy5cbiAqL1xuXG5jb25zdCB7IGNvbnNvbGUsIG5hdGl2ZUxvZyB9ID0gZ2xvYmFsXG5jb25zdCBMRVZFTFMgPSBbJ29mZicsICdlcnJvcicsICd3YXJuJywgJ2luZm8nLCAnbG9nJywgJ2RlYnVnJ11cbmNvbnN0IGxldmVsTWFwID0ge31cblxuZ2VuZXJhdGVMZXZlbE1hcCgpXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKFxuICB0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcgfHwgLy8gQW5kcm9pZFxuICAoZ2xvYmFsLldYRW52aXJvbm1lbnQgJiYgZ2xvYmFsLldYRW52aXJvbm1lbnQucGxhdGZvcm0gPT09ICdpT1MnKSAvLyBpT1Ncbikge1xuICBnbG9iYWwuY29uc29sZSA9IHtcbiAgICBkZWJ1ZzogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdkZWJ1ZycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0RFQlVHJykgfVxuICAgIH0sXG4gICAgbG9nOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ2xvZycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0xPRycpIH1cbiAgICB9LFxuICAgIGluZm86ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnaW5mbycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0lORk8nKSB9XG4gICAgfSxcbiAgICB3YXJuOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ3dhcm4nKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19XQVJOJykgfVxuICAgIH0sXG4gICAgZXJyb3I6ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnZXJyb3InKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19FUlJPUicpIH1cbiAgICB9XG4gIH1cbn1cbmVsc2UgeyAvLyBIVE1MNVxuICBjb25zdCB7IGRlYnVnLCBsb2csIGluZm8sIHdhcm4sIGVycm9yIH0gPSBjb25zb2xlXG4gIGNvbnNvbGUuX19vcmlfXyA9IHsgZGVidWcsIGxvZywgaW5mbywgd2FybiwgZXJyb3IgfVxuICBjb25zb2xlLmRlYnVnID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnZGVidWcnKSkgeyBjb25zb2xlLl9fb3JpX18uZGVidWcuYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUubG9nID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnbG9nJykpIHsgY29uc29sZS5fX29yaV9fLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbiAgY29uc29sZS5pbmZvID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnaW5mbycpKSB7IGNvbnNvbGUuX19vcmlfXy5pbmZvLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxuICBjb25zb2xlLndhcm4gPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCd3YXJuJykpIHsgY29uc29sZS5fX29yaV9fLndhcm4uYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUuZXJyb3IgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdlcnJvcicpKSB7IGNvbnNvbGUuX19vcmlfXy5lcnJvci5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBtYXAgZm9yIHdoaWNoIHR5cGVzIG9mIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IGluIGEgY2VydGFpbiBtZXNzYWdlIGxldmVsXG4gKiBhcyB0aGUgb3JkZXIgb2YgTEVWRUxTLlxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZUxldmVsTWFwICgpIHtcbiAgTEVWRUxTLmZvckVhY2gobGV2ZWwgPT4ge1xuICAgIGNvbnN0IGxldmVsSW5kZXggPSBMRVZFTFMuaW5kZXhPZihsZXZlbClcbiAgICBsZXZlbE1hcFtsZXZlbF0gPSB7fVxuICAgIExFVkVMUy5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICAgY29uc3QgdHlwZUluZGV4ID0gTEVWRUxTLmluZGV4T2YodHlwZSlcbiAgICAgIGlmICh0eXBlSW5kZXggPD0gbGV2ZWxJbmRleCkge1xuICAgICAgICBsZXZlbE1hcFtsZXZlbF1bdHlwZV0gPSB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGNlcnRhaW4gdHlwZSBvZiBtZXNzYWdlIHdpbGwgYmUgc2VudCBpbiBjdXJyZW50IGxvZyBsZXZlbCBvZiBlbnYuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNoZWNrTGV2ZWwgKHR5cGUpIHtcbiAgY29uc3QgbG9nTGV2ZWwgPSAoZ2xvYmFsLldYRW52aXJvbm1lbnQgJiYgZ2xvYmFsLldYRW52aXJvbm1lbnQubG9nTGV2ZWwpIHx8ICdsb2cnXG4gIHJldHVybiBsZXZlbE1hcFtsb2dMZXZlbF0gJiYgbGV2ZWxNYXBbbG9nTGV2ZWxdW3R5cGVdXG59XG5cbi8qKlxuICogQ29udmVydCBhbGwgbG9nIGFyZ3VtZW50cyBpbnRvIHByaW1pdGl2ZSB2YWx1ZXMuXG4gKiBAcGFyYW0gIHthcnJheX0gYXJnc1xuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGZvcm1hdCAoYXJncykge1xuICByZXR1cm4gYXJncy5tYXAoKHYpID0+IHtcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXG4gICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ1tvYmplY3Qgb2JqZWN0XScpIHtcbiAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHYgPSBTdHJpbmcodilcbiAgICB9XG4gICAgcmV0dXJuIHZcbiAgfSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9zaGFyZWQvY29uc29sZS5qc1xuICoqLyIsImltcG9ydCAnY29yZS1qcy9mbi9vYmplY3QvYXNzaWduJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL3NoYXJlZC9vYmplY3RBc3NpZ24uanNcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9mbi9vYmplY3QvYXNzaWduLmpzXG4gKiovIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4gKiovIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbiAqKi8iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogUmVnaXN0ZXIgZnJhbWV3b3JrKHMpIGluIEpTIHJ1bnRpbWUuIFdlZXggc3VwcGx5IHR3byBsYXllcnMgZm9yIDNyZC1wYXJ0eVxuICogZnJhbWV3b3JrKHMpOiBvbmUgaXMgdGhlIGluc3RhbmNlIG1hbmFnZW1lbnQgbGF5ZXIsIGFub3RoZXIgaXMgdGhlXG4gKiB2aXJ0dWFsLURPTSBsYXllci5cbiAqL1xuXG4vLyBUaGlzIGNvbmZpZyBpcyBnZW5lcmF0ZWQgYnkgYG5wbSBydW4gYnVpbGQ6Y29uZmlnYC5cbi8vIEl0IHdpbGwgY29sbGVjdCBhbGwgYHJ1bnRpbWUvZnJhbWV3b3JrLSouanNgIGZpbGVzIGFuZCBpbXBvcnQgZWFjaCBvZiB0aGVtLlxuLy8gVGhlIGZpbGVuYW1lIGlzIGFsc28gdGhlIGZyYW1ld29yayBuYW1lLlxuaW1wb3J0IHsgRG9jdW1lbnQsIEVsZW1lbnQsIENvbW1lbnQgfSBmcm9tICcuLi92ZG9tJ1xuaW1wb3J0IExpc3RlbmVyIGZyb20gJy4uL3Zkb20vbGlzdGVuZXInXG5pbXBvcnQgZnJhbWV3b3JrcyBmcm9tICcuL2NvbmZpZydcblxuaW1wb3J0IGluaXQgZnJvbSAnLi9pbml0J1xuXG5jb25zdCBjb25maWcgPSB7XG4gIERvY3VtZW50LCBFbGVtZW50LCBDb21tZW50LCBMaXN0ZW5lciwgZnJhbWV3b3JrcyxcbiAgc2VuZFRhc2tzICguLi5hcmdzKSB7XG4gICAgcmV0dXJuIGdsb2JhbC5jYWxsTmF0aXZlKC4uLmFyZ3MpXG4gIH1cbn1cblxuY29uc3QgbWV0aG9kcyA9IGluaXQoY29uZmlnKVxuXG5leHBvcnQgZGVmYXVsdCBtZXRob2RzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvcnVudGltZS9pbmRleC5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogQSBzaW1wbGUgdmlydHVhbCBkb20gaW1wbGVtZW50YXRpb25cbiAqL1xuLy8gaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vc2hhcmVkJ1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzJ1xuXG5jb25zdCBERUZBVUxUX1RBR19OQU1FID0gJ2RpdidcblxuZXhwb3J0IGNvbnN0IGluc3RhbmNlTWFwID0ge31cbmxldCBuZXh0Tm9kZVJlZiA9IDFcblxuZXhwb3J0IGZ1bmN0aW9uIERvY3VtZW50IChpZCwgdXJsLCBoYW5kbGVyLCBMaXN0ZW5lcikge1xuICBpZCA9IGlkID8gaWQudG9TdHJpbmcoKSA6ICcnXG4gIHRoaXMuaWQgPSBpZFxuICB0aGlzLlVSTCA9IHVybFxuXG4gIGluc3RhbmNlTWFwW2lkXSA9IHRoaXNcbiAgdGhpcy5ub2RlTWFwID0ge31cbiAgTGlzdGVuZXIgJiYgKHRoaXMubGlzdGVuZXIgPSBuZXcgTGlzdGVuZXIoaWQsIGhhbmRsZXIgfHwgZ2VuQ2FsbFRhc2tzKGlkKSkpXG4gIHRoaXMuY3JlYXRlRG9jdW1lbnRFbGVtZW50KClcbn1cblxuZnVuY3Rpb24gZ2VuQ2FsbFRhc2tzIChpZCkge1xuICByZXR1cm4gKHRhc2tzKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRhc2tzKSkge1xuICAgICAgdGFza3MgPSBbdGFza3NdXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhc2sgPSB0YXNrc1tpXVxuICAgICAgbGV0IHJldHVyblZhbHVlXG4gICAgICBpZiAodGFzay5tb2R1bGUgPT09ICdkb20nICYmIHRhc2subWV0aG9kID09PSAnYWRkRWxlbWVudCcpIHtcbiAgICAgICAgY29uc3QgW3JlZiwganNvbiwgaW5kZXhdID0gdGFzay5hcmdzXG4gICAgICAgIHJldHVyblZhbHVlID0gY2FsbEFkZEVsZW1lbnQoaWQsIHJlZiwganNvbiwgaW5kZXgsICctMScpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxsTmF0aXZlKGlkLCBbdGFza10sICctMScpXG4gICAgICB9XG4gICAgICBpZiAocmV0dXJuVmFsdWUgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgZGVsZXRlIHRoaXMubGlzdGVuZXJcbiAgZGVsZXRlIHRoaXMubm9kZU1hcFxuICBkZWxldGUgaW5zdGFuY2VNYXBbdGhpcy5pZF1cbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGlzdGVuZXIuYmF0Y2hlZCA9IGZhbHNlXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5saXN0ZW5lci5iYXRjaGVkID0gdHJ1ZVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRG9jdW1lbnRFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgY29uc3QgZWwgPSBuZXcgRWxlbWVudCgnZG9jdW1lbnQnKVxuICAgIGVsLmRvY0lkID0gdGhpcy5pZFxuICAgIGVsLm93bmVyRG9jdW1lbnQgPSB0aGlzXG4gICAgZWwucm9sZSA9ICdkb2N1bWVudEVsZW1lbnQnXG4gICAgZWwuZGVwdGggPSAwXG4gICAgZWwucmVmID0gJ19kb2N1bWVudEVsZW1lbnQnXG4gICAgdGhpcy5ub2RlTWFwLl9kb2N1bWVudEVsZW1lbnQgPSBlbFxuICAgIHRoaXMuZG9jdW1lbnRFbGVtZW50ID0gZWxcbiAgICBlbC5hcHBlbmRDaGlsZCA9IChub2RlKSA9PiB7XG4gICAgICBhcHBlbmRCb2R5KHRoaXMsIG5vZGUpXG4gICAgfVxuICAgIGVsLmluc2VydEJlZm9yZSA9IChub2RlLCBiZWZvcmUpID0+IHtcbiAgICAgIGFwcGVuZEJvZHkodGhpcywgbm9kZSwgYmVmb3JlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLmRvY3VtZW50RWxlbWVudFxufVxuXG5mdW5jdGlvbiBhcHBlbmRCb2R5IChkb2MsIG5vZGUsIGJlZm9yZSkge1xuICBjb25zdCB7IGRvY3VtZW50RWxlbWVudCB9ID0gZG9jXG5cbiAgaWYgKGRvY3VtZW50RWxlbWVudC5wdXJlQ2hpbGRyZW4ubGVuZ3RoID4gMCB8fCBub2RlLnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBjaGlsZHJlbiA9IGRvY3VtZW50RWxlbWVudC5jaGlsZHJlblxuICBjb25zdCBiZWZvcmVJbmRleCA9IGNoaWxkcmVuLmluZGV4T2YoYmVmb3JlKVxuICBpZiAoYmVmb3JlSW5kZXggPCAwKSB7XG4gICAgY2hpbGRyZW4ucHVzaChub2RlKVxuICB9XG4gIGVsc2Uge1xuICAgIGNoaWxkcmVuLnNwbGljZShiZWZvcmVJbmRleCwgMCwgbm9kZSlcbiAgfVxuXG4gIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgaWYgKG5vZGUucm9sZSA9PT0gJ2JvZHknKSB7XG4gICAgICBub2RlLmRvY0lkID0gZG9jLmlkXG4gICAgICBub2RlLm93bmVyRG9jdW1lbnQgPSBkb2NcbiAgICAgIG5vZGUucGFyZW50Tm9kZSA9IGRvY3VtZW50RWxlbWVudFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSBub2RlXG4gICAgICB9KVxuICAgICAgc2V0Qm9keShkb2MsIG5vZGUpXG4gICAgICBub2RlLmRvY0lkID0gZG9jLmlkXG4gICAgICBub2RlLm93bmVyRG9jdW1lbnQgPSBkb2NcbiAgICAgIGxpbmtQYXJlbnQobm9kZSwgZG9jdW1lbnRFbGVtZW50KVxuICAgICAgZGVsZXRlIGRvYy5ub2RlTWFwW25vZGUubm9kZUlkXVxuICAgIH1cbiAgICBkb2N1bWVudEVsZW1lbnQucHVyZUNoaWxkcmVuLnB1c2gobm9kZSlcbiAgICBkb2MubGlzdGVuZXIuY3JlYXRlQm9keShub2RlKVxuICB9XG4gIGVsc2Uge1xuICAgIG5vZGUucGFyZW50Tm9kZSA9IGRvY3VtZW50RWxlbWVudFxuICAgIGRvYy5ub2RlTWFwW25vZGUucmVmXSA9IG5vZGVcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRCb2R5IChkb2MsIGVsKSB7XG4gIGVsLnJvbGUgPSAnYm9keSdcbiAgZWwuZGVwdGggPSAxXG4gIGRlbGV0ZSBkb2Mubm9kZU1hcFtlbC5ub2RlSWRdXG4gIGVsLnJlZiA9ICdfcm9vdCdcbiAgZG9jLm5vZGVNYXAuX3Jvb3QgPSBlbFxuICBkb2MuYm9keSA9IGVsXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVCb2R5ID0gZnVuY3Rpb24gKHR5cGUsIHByb3BzKSB7XG4gIGlmICghdGhpcy5ib2R5KSB7XG4gICAgY29uc3QgZWwgPSBuZXcgRWxlbWVudCh0eXBlLCBwcm9wcylcbiAgICBzZXRCb2R5KHRoaXMsIGVsKVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuYm9keVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWdOYW1lLCBwcm9wcykge1xuICByZXR1cm4gbmV3IEVsZW1lbnQodGFnTmFtZSwgcHJvcHMpXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVDb21tZW50ID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgcmV0dXJuIG5ldyBDb21tZW50KHRleHQpXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5maXJlRXZlbnQgPSBmdW5jdGlvbiAoZWwsIHR5cGUsIGUsIGRvbUNoYW5nZXMpIHtcbiAgaWYgKCFlbCkge1xuICAgIHJldHVyblxuICB9XG4gIGUgPSBlIHx8IHt9XG4gIGUudHlwZSA9IHR5cGVcbiAgZS50YXJnZXQgPSBlbFxuICBlLnRpbWVzdGFtcCA9IERhdGUubm93KClcbiAgaWYgKGRvbUNoYW5nZXMpIHtcbiAgICB1cGRhdGVFbGVtZW50KGVsLCBkb21DaGFuZ2VzKVxuICB9XG4gIHJldHVybiBlbC5maXJlRXZlbnQodHlwZSwgZSlcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmdldFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgcmV0dXJuIHRoaXMubm9kZU1hcFtyZWZdXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQgKGVsLCBjaGFuZ2VzKSB7XG4gIGNvbnN0IGF0dHJzID0gY2hhbmdlcy5hdHRycyB8fCB7fVxuICBmb3IgKGNvbnN0IG5hbWUgaW4gYXR0cnMpIHtcbiAgICBlbC5zZXRBdHRyKG5hbWUsIGF0dHJzW25hbWVdLCB0cnVlKVxuICB9XG4gIGNvbnN0IHN0eWxlID0gY2hhbmdlcy5zdHlsZSB8fCB7fVxuICBmb3IgKGNvbnN0IG5hbWUgaW4gc3R5bGUpIHtcbiAgICBlbC5zZXRTdHlsZShuYW1lLCBzdHlsZVtuYW1lXSwgdHJ1ZSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTm9kZSAoKSB7XG4gIHRoaXMubm9kZUlkID0gKG5leHROb2RlUmVmKyspLnRvU3RyaW5nKClcbiAgdGhpcy5yZWYgPSB0aGlzLm5vZGVJZFxuICB0aGlzLmNoaWxkcmVuID0gW11cbiAgdGhpcy5wdXJlQ2hpbGRyZW4gPSBbXVxuICB0aGlzLnBhcmVudE5vZGUgPSBudWxsXG4gIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsXG4gIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbFxufVxuXG5Ob2RlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBkb2MgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXVxuICBpZiAoZG9jKSB7XG4gICAgZGVsZXRlIHRoaXMuZG9jSWRcbiAgICBkZWxldGUgZG9jLm5vZGVNYXBbdGhpcy5ub2RlSWRdXG4gIH1cbiAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICBjaGlsZC5kZXN0cm95KClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVsZW1lbnQgKHR5cGUgPSBERUZBVUxUX1RBR19OQU1FLCBwcm9wcykge1xuICBwcm9wcyA9IHByb3BzIHx8IHt9XG4gIHRoaXMubm9kZVR5cGUgPSAxXG4gIHRoaXMubm9kZUlkID0gKG5leHROb2RlUmVmKyspLnRvU3RyaW5nKClcbiAgdGhpcy5yZWYgPSB0aGlzLm5vZGVJZFxuICB0aGlzLnR5cGUgPSB0eXBlXG4gIHRoaXMuYXR0ciA9IHByb3BzLmF0dHIgfHwge31cbiAgdGhpcy5jbGFzc1N0eWxlID0gcHJvcHMuY2xhc3NTdHlsZSB8fCB7fVxuICB0aGlzLnN0eWxlID0gcHJvcHMuc3R5bGUgfHwge31cbiAgdGhpcy5ldmVudCA9IHt9XG4gIHRoaXMuY2hpbGRyZW4gPSBbXVxuICB0aGlzLnB1cmVDaGlsZHJlbiA9IFtdXG59XG5cbkVsZW1lbnQucHJvdG90eXBlID0gbmV3IE5vZGUoKVxuXG5FbGVtZW50LnByb3RvdHlwZS5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICBsaW5rUGFyZW50KG5vZGUsIHRoaXMpXG4gICAgaW5zZXJ0SW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5sZW5ndGgsIHRydWUpXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIHJlZ2lzdGVyTm9kZSh0aGlzLmRvY0lkLCBub2RlKVxuICAgIH1cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgaW5zZXJ0SW5kZXgobm9kZSwgdGhpcy5wdXJlQ2hpbGRyZW4sIHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aClcbiAgICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmFkZEVsZW1lbnQobm9kZSwgdGhpcy5yZWYsIC0xKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBtb3ZlSW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5sZW5ndGgsIHRydWUpXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gbW92ZUluZGV4KG5vZGUsIHRoaXMucHVyZUNoaWxkcmVuLCB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGgpXG4gICAgICBpZiAodGhpcy5kb2NJZCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLm1vdmVFbGVtZW50KG5vZGUucmVmLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmluc2VydEJlZm9yZSA9IGZ1bmN0aW9uIChub2RlLCBiZWZvcmUpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUgIT09IHRoaXMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAobm9kZSA9PT0gYmVmb3JlIHx8IG5vZGUubmV4dFNpYmxpbmcgPT09IGJlZm9yZSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgbGlua1BhcmVudChub2RlLCB0aGlzKVxuICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihiZWZvcmUpLCB0cnVlKVxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICByZWdpc3Rlck5vZGUodGhpcy5kb2NJZCwgbm9kZSlcbiAgICB9XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IHB1cmVCZWZvcmUgPSBuZXh0RWxlbWVudChiZWZvcmUpXG4gICAgICBjb25zdCBpbmRleCA9IGluc2VydEluZGV4KFxuICAgICAgICBub2RlLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgcHVyZUJlZm9yZVxuICAgICAgICAgID8gdGhpcy5wdXJlQ2hpbGRyZW4uaW5kZXhPZihwdXJlQmVmb3JlKVxuICAgICAgICAgIDogdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoXG4gICAgICApXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5hZGRFbGVtZW50KG5vZGUsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihiZWZvcmUpLCB0cnVlKVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBwdXJlQmVmb3JlID0gbmV4dEVsZW1lbnQoYmVmb3JlKVxuICAgICAgY29uc3QgaW5kZXggPSBtb3ZlSW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICBwdXJlQmVmb3JlXG4gICAgICAgICAgPyB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHB1cmVCZWZvcmUpXG4gICAgICAgICAgOiB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGhcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLmRvY0lkICYmIGluZGV4ID49IDApIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIubW92ZUVsZW1lbnQobm9kZS5yZWYsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWZ0ZXIgPSBmdW5jdGlvbiAobm9kZSwgYWZ0ZXIpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUgIT09IHRoaXMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAobm9kZSA9PT0gYWZ0ZXIgfHwgbm9kZS5wcmV2aW91c1NpYmxpbmcgPT09IGFmdGVyKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICBsaW5rUGFyZW50KG5vZGUsIHRoaXMpXG4gICAgaW5zZXJ0SW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5pbmRleE9mKGFmdGVyKSArIDEsIHRydWUpXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIHJlZ2lzdGVyTm9kZSh0aGlzLmRvY0lkLCBub2RlKVxuICAgIH1cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBpbnNlcnRJbmRleChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4sXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLmluZGV4T2YocHJldmlvdXNFbGVtZW50KGFmdGVyKSkgKyAxXG4gICAgICApXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5hZGRFbGVtZW50KG5vZGUsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihhZnRlcikgKyAxLCB0cnVlKVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG1vdmVJbmRleChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4sXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLmluZGV4T2YocHJldmlvdXNFbGVtZW50KGFmdGVyKSkgKyAxXG4gICAgICApXG4gICAgICBpZiAodGhpcy5kb2NJZCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLm1vdmVFbGVtZW50KG5vZGUucmVmLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUNoaWxkID0gZnVuY3Rpb24gKG5vZGUsIHByZXNlcnZlZCkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgcmVtb3ZlSW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgcmVtb3ZlSW5kZXgobm9kZSwgdGhpcy5wdXJlQ2hpbGRyZW4pXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIGxpc3RlbmVyLnJlbW92ZUVsZW1lbnQobm9kZS5yZWYpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghcHJlc2VydmVkKSB7XG4gICAgbm9kZS5kZXN0cm95KClcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgdGhpcy5wdXJlQ2hpbGRyZW4uZm9yRWFjaChub2RlID0+IHtcbiAgICAgIGxpc3RlbmVyLnJlbW92ZUVsZW1lbnQobm9kZS5yZWYpXG4gICAgfSlcbiAgfVxuICB0aGlzLmNoaWxkcmVuLmZvckVhY2gobm9kZSA9PiB7XG4gICAgbm9kZS5kZXN0cm95KClcbiAgfSlcbiAgdGhpcy5jaGlsZHJlbi5sZW5ndGggPSAwXG4gIHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aCA9IDBcbn1cblxuZnVuY3Rpb24gbmV4dEVsZW1lbnQgKG5vZGUpIHtcbiAgd2hpbGUgKG5vZGUpIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIG5vZGVcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmV2aW91c0VsZW1lbnQgKG5vZGUpIHtcbiAgd2hpbGUgKG5vZGUpIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIG5vZGVcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucHJldmlvdXNTaWJsaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gbGlua1BhcmVudCAobm9kZSwgcGFyZW50KSB7XG4gIG5vZGUucGFyZW50Tm9kZSA9IHBhcmVudFxuICBpZiAocGFyZW50LmRvY0lkKSB7XG4gICAgbm9kZS5kb2NJZCA9IHBhcmVudC5kb2NJZFxuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHBhcmVudC5vd25lckRvY3VtZW50XG4gICAgbm9kZS5vd25lckRvY3VtZW50Lm5vZGVNYXBbbm9kZS5ub2RlSWRdID0gbm9kZVxuICAgIG5vZGUuZGVwdGggPSBwYXJlbnQuZGVwdGggKyAxXG4gIH1cbiAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICBsaW5rUGFyZW50KGNoaWxkLCBub2RlKVxuICB9KVxufVxuXG5mdW5jdGlvbiByZWdpc3Rlck5vZGUgKGRvY0lkLCBub2RlKSB7XG4gIGNvbnN0IGRvYyA9IGluc3RhbmNlTWFwW2RvY0lkXVxuICBkb2Mubm9kZU1hcFtub2RlLm5vZGVJZF0gPSBub2RlXG59XG5cbmZ1bmN0aW9uIGluc2VydEluZGV4ICh0YXJnZXQsIGxpc3QsIG5ld0luZGV4LCBjaGFuZ2VTaWJsaW5nKSB7XG4gIGlmIChuZXdJbmRleCA8IDApIHtcbiAgICBuZXdJbmRleCA9IDBcbiAgfVxuICBjb25zdCBiZWZvcmUgPSBsaXN0W25ld0luZGV4IC0gMV1cbiAgY29uc3QgYWZ0ZXIgPSBsaXN0W25ld0luZGV4XVxuICBsaXN0LnNwbGljZShuZXdJbmRleCwgMCwgdGFyZ2V0KVxuICBpZiAoY2hhbmdlU2libGluZykge1xuICAgIGJlZm9yZSAmJiAoYmVmb3JlLm5leHRTaWJsaW5nID0gdGFyZ2V0KVxuICAgIHRhcmdldC5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmVcbiAgICB0YXJnZXQubmV4dFNpYmxpbmcgPSBhZnRlclxuICAgIGFmdGVyICYmIChhZnRlci5wcmV2aW91c1NpYmxpbmcgPSB0YXJnZXQpXG4gIH1cbiAgcmV0dXJuIG5ld0luZGV4XG59XG5cbmZ1bmN0aW9uIG1vdmVJbmRleCAodGFyZ2V0LCBsaXN0LCBuZXdJbmRleCwgY2hhbmdlU2libGluZykge1xuICBjb25zdCBpbmRleCA9IGxpc3QuaW5kZXhPZih0YXJnZXQpXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoY2hhbmdlU2libGluZykge1xuICAgIGNvbnN0IGJlZm9yZSA9IGxpc3RbaW5kZXggLSAxXVxuICAgIGNvbnN0IGFmdGVyID0gbGlzdFtpbmRleCArIDFdXG4gICAgYmVmb3JlICYmIChiZWZvcmUubmV4dFNpYmxpbmcgPSBhZnRlcilcbiAgICBhZnRlciAmJiAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlKVxuICB9XG4gIGxpc3Quc3BsaWNlKGluZGV4LCAxKVxuICBsZXQgbmV3SW5kZXhBZnRlciA9IG5ld0luZGV4XG4gIGlmIChpbmRleCA8PSBuZXdJbmRleCkge1xuICAgIG5ld0luZGV4QWZ0ZXIgPSBuZXdJbmRleCAtIDFcbiAgfVxuICBjb25zdCBiZWZvcmVOZXcgPSBsaXN0W25ld0luZGV4QWZ0ZXIgLSAxXVxuICBjb25zdCBhZnRlck5ldyA9IGxpc3RbbmV3SW5kZXhBZnRlcl1cbiAgbGlzdC5zcGxpY2UobmV3SW5kZXhBZnRlciwgMCwgdGFyZ2V0KVxuICBpZiAoY2hhbmdlU2libGluZykge1xuICAgIGJlZm9yZU5ldyAmJiAoYmVmb3JlTmV3Lm5leHRTaWJsaW5nID0gdGFyZ2V0KVxuICAgIHRhcmdldC5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmVOZXdcbiAgICB0YXJnZXQubmV4dFNpYmxpbmcgPSBhZnRlck5ld1xuICAgIGFmdGVyTmV3ICYmIChhZnRlck5ldy5wcmV2aW91c1NpYmxpbmcgPSB0YXJnZXQpXG4gIH1cbiAgaWYgKGluZGV4ID09PSBuZXdJbmRleEFmdGVyKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIG5ld0luZGV4XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUluZGV4ICh0YXJnZXQsIGxpc3QsIGNoYW5nZVNpYmxpbmcpIHtcbiAgY29uc3QgaW5kZXggPSBsaXN0LmluZGV4T2YodGFyZ2V0KVxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBjb25zdCBiZWZvcmUgPSBsaXN0W2luZGV4IC0gMV1cbiAgICBjb25zdCBhZnRlciA9IGxpc3RbaW5kZXggKyAxXVxuICAgIGJlZm9yZSAmJiAoYmVmb3JlLm5leHRTaWJsaW5nID0gYWZ0ZXIpXG4gICAgYWZ0ZXIgJiYgKGFmdGVyLnByZXZpb3VzU2libGluZyA9IGJlZm9yZSlcbiAgfVxuICBsaXN0LnNwbGljZShpbmRleCwgMSlcbn1cblxuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0ciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBzaWxlbnQpIHtcbiAgaWYgKHRoaXMuYXR0cltrZXldID09PSB2YWx1ZSkge1xuICAgIHJldHVyblxuICB9XG4gIHRoaXMuYXR0cltrZXldID0gdmFsdWVcbiAgaWYgKCFzaWxlbnQgJiYgdGhpcy5kb2NJZCkge1xuICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICBsaXN0ZW5lci5zZXRBdHRyKHRoaXMucmVmLCBrZXksIHZhbHVlKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldFN0eWxlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIHNpbGVudCkge1xuICBpZiAodGhpcy5zdHlsZVtrZXldID09PSB2YWx1ZSkge1xuICAgIHJldHVyblxuICB9XG4gIHRoaXMuc3R5bGVba2V5XSA9IHZhbHVlXG4gIGlmICghc2lsZW50ICYmIHRoaXMuZG9jSWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgbGlzdGVuZXIuc2V0U3R5bGUodGhpcy5yZWYsIGtleSwgdmFsdWUpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUucmVzZXRDbGFzc1N0eWxlID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNsYXNzU3R5bGUpIHtcbiAgICB0aGlzLmNsYXNzU3R5bGVba2V5XSA9ICcnXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuc2V0Q2xhc3NTdHlsZSA9IGZ1bmN0aW9uIChjbGFzc1N0eWxlKSB7XG4gIHRoaXMucmVzZXRDbGFzc1N0eWxlKClcbiAgZXh0ZW5kKHRoaXMuY2xhc3NTdHlsZSwgY2xhc3NTdHlsZSlcbiAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgbGlzdGVuZXIuc2V0U3R5bGVzKHRoaXMucmVmLCB0aGlzLnRvU3R5bGUoKSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudCA9IGZ1bmN0aW9uICh0eXBlLCBoYW5kbGVyKSB7XG4gIGlmICghdGhpcy5ldmVudFt0eXBlXSkge1xuICAgIHRoaXMuZXZlbnRbdHlwZV0gPSBoYW5kbGVyXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgIGxpc3RlbmVyLmFkZEV2ZW50KHRoaXMucmVmLCB0eXBlKVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIGlmICh0aGlzLmV2ZW50W3R5cGVdKSB7XG4gICAgZGVsZXRlIHRoaXMuZXZlbnRbdHlwZV1cbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgbGlzdGVuZXIucmVtb3ZlRXZlbnQodGhpcy5yZWYsIHR5cGUpXG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmZpcmVFdmVudCA9IGZ1bmN0aW9uICh0eXBlLCBlKSB7XG4gIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmV2ZW50W3R5cGVdXG4gIGlmIChoYW5kbGVyKSB7XG4gICAgcmV0dXJuIGhhbmRsZXIuY2FsbCh0aGlzLCBlKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnRvU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBleHRlbmQoe30sIHRoaXMuY2xhc3NTdHlsZSwgdGhpcy5zdHlsZSlcbn1cblxuRWxlbWVudC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgcmVmOiB0aGlzLnJlZi50b1N0cmluZygpLFxuICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICBhdHRyOiB0aGlzLmF0dHIsXG4gICAgc3R5bGU6IHRoaXMudG9TdHlsZSgpXG4gIH1cbiAgY29uc3QgZXZlbnQgPSBPYmplY3Qua2V5cyh0aGlzLmV2ZW50KVxuICBpZiAoZXZlbnQubGVuZ3RoKSB7XG4gICAgcmVzdWx0LmV2ZW50ID0gZXZlbnRcbiAgfVxuICBpZiAodGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgcmVzdWx0LmNoaWxkcmVuID0gdGhpcy5wdXJlQ2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQudG9KU09OKCkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5FbGVtZW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICc8JyArIHRoaXMudHlwZSArXG4gICAgJyBhdHRyPScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmF0dHIpICtcbiAgICAnIHN0eWxlPScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnRvU3R5bGUoKSkgKyAnPicgK1xuICAgIHRoaXMucHVyZUNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLnRvU3RyaW5nKCkpLmpvaW4oJycpICtcbiAgICAnPC8nICsgdGhpcy50eXBlICsgJz4nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb21tZW50ICh2YWx1ZSkge1xuICB0aGlzLm5vZGVUeXBlID0gOFxuICB0aGlzLm5vZGVJZCA9IChuZXh0Tm9kZVJlZisrKS50b1N0cmluZygpXG4gIHRoaXMucmVmID0gdGhpcy5ub2RlSWRcbiAgdGhpcy50eXBlID0gJ2NvbW1lbnQnXG4gIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB0aGlzLmNoaWxkcmVuID0gW11cbiAgdGhpcy5wdXJlQ2hpbGRyZW4gPSBbXVxufVxuXG5Db21tZW50LnByb3RvdHlwZSA9IG5ldyBOb2RlKClcblxuQ29tbWVudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnPCEtLSAnICsgdGhpcy52YWx1ZSArICcgLS0+J1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL3Zkb20vaW5kZXguanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0ZW5lciAoaWQsIGhhbmRsZXIpIHtcbiAgdGhpcy5pZCA9IGlkXG4gIHRoaXMuYmF0Y2hlZCA9IGZhbHNlXG4gIHRoaXMudXBkYXRlcyA9IFtdXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXJcbiAgfVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuY3JlYXRlRmluaXNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXJcbiAgcmV0dXJuIGhhbmRsZXIoW2NyZWF0ZUFjdGlvbignY3JlYXRlRmluaXNoJywgW10pXSwgY2FsbGJhY2spXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS51cGRhdGVGaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICByZXR1cm4gaGFuZGxlcihbY3JlYXRlQWN0aW9uKCd1cGRhdGVGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnJlZnJlc2hGaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICByZXR1cm4gaGFuZGxlcihbY3JlYXRlQWN0aW9uKCdyZWZyZXNoRmluaXNoJywgW10pXSwgY2FsbGJhY2spXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5jcmVhdGVCb2R5ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgY29uc3QgYm9keSA9IGVsZW1lbnQudG9KU09OKClcbiAgY29uc3QgY2hpbGRyZW4gPSBib2R5LmNoaWxkcmVuXG4gIGRlbGV0ZSBib2R5LmNoaWxkcmVuXG4gIGNvbnN0IGFjdGlvbnMgPSBbY3JlYXRlQWN0aW9uKCdjcmVhdGVCb2R5JywgW2JvZHldKV1cbiAgaWYgKGNoaWxkcmVuKSB7XG4gICAgYWN0aW9ucy5wdXNoLmFwcGx5KGFjdGlvbnMsIGNoaWxkcmVuLm1hcChjaGlsZCA9PiB7XG4gICAgICByZXR1cm4gY3JlYXRlQWN0aW9uKCdhZGRFbGVtZW50JywgW2JvZHkucmVmLCBjaGlsZCwgLTFdKVxuICAgIH0pKVxuICB9XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoYWN0aW9ucylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmFkZEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcmVmLCBpbmRleCkge1xuICBpZiAoIShpbmRleCA+PSAwKSkge1xuICAgIGluZGV4ID0gLTFcbiAgfVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbignYWRkRWxlbWVudCcsIFtyZWYsIGVsZW1lbnQudG9KU09OKCksIGluZGV4XSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5yZW1vdmVFbGVtZW50ID0gZnVuY3Rpb24gKHJlZikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyZWYpKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IHJlZi5tYXAoKHIpID0+IGNyZWF0ZUFjdGlvbigncmVtb3ZlRWxlbWVudCcsIFtyXSkpXG4gICAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhhY3Rpb25zKVxuICB9XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdyZW1vdmVFbGVtZW50JywgW3JlZl0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUubW92ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFyZ2V0UmVmLCBwYXJlbnRSZWYsIGluZGV4KSB7XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdtb3ZlRWxlbWVudCcsIFt0YXJnZXRSZWYsIHBhcmVudFJlZiwgaW5kZXhdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnNldEF0dHIgPSBmdW5jdGlvbiAocmVmLCBrZXksIHZhbHVlKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9XG4gIHJlc3VsdFtrZXldID0gdmFsdWVcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3VwZGF0ZUF0dHJzJywgW3JlZiwgcmVzdWx0XSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIChyZWYsIGtleSwgdmFsdWUpIHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigndXBkYXRlU3R5bGUnLCBbcmVmLCByZXN1bHRdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnNldFN0eWxlcyA9IGZ1bmN0aW9uIChyZWYsIHN0eWxlKSB7XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCd1cGRhdGVTdHlsZScsIFtyZWYsIHN0eWxlXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5hZGRFdmVudCA9IGZ1bmN0aW9uIChyZWYsIHR5cGUpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ2FkZEV2ZW50JywgW3JlZiwgdHlwZV0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAocmVmLCB0eXBlKSB7XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdyZW1vdmVFdmVudCcsIFtyZWYsIHR5cGVdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmhhbmRsZXIgPSBmdW5jdGlvbiAoYWN0aW9ucywgY2IpIHtcbiAgcmV0dXJuIGNiICYmIGNiKClcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmFkZEFjdGlvbnMgPSBmdW5jdGlvbiAoYWN0aW9ucykge1xuICBjb25zdCB1cGRhdGVzID0gdGhpcy51cGRhdGVzXG4gIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXJcblxuICBpZiAoIUFycmF5LmlzQXJyYXkoYWN0aW9ucykpIHtcbiAgICBhY3Rpb25zID0gW2FjdGlvbnNdXG4gIH1cblxuICBpZiAodGhpcy5iYXRjaGVkKSB7XG4gICAgdXBkYXRlcy5wdXNoLmFwcGx5KHVwZGF0ZXMsIGFjdGlvbnMpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGhhbmRsZXIoYWN0aW9ucylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWN0aW9uIChuYW1lLCBhcmdzKSB7XG4gIHJldHVybiB7IG1vZHVsZTogJ2RvbScsIG1ldGhvZDogbmFtZSwgYXJnczogYXJncyB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvdmRvbS9saXN0ZW5lci5qc1xuICoqLyIsIi8vIGJ1aWx0IGJ5IG5wbSBydW4gYnVpbGQ6Y29uZmlnXG5cbmltcG9ydCAqIGFzIFdlZXggZnJvbSAnLi4vZGVmYXVsdCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBXZWV4XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvcnVudGltZS9jb25maWcuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgV2VleCBmcmFtZXdvcmsgZW50cnkuXG4gKi9cblxuZXhwb3J0IHsgY3JlYXRlSW5zdGFuY2UgfSBmcm9tICcuL3N0YXRpYy9jcmVhdGUnXG5leHBvcnQgeyBpbml0LCByZWZyZXNoSW5zdGFuY2UsIGRlc3Ryb3lJbnN0YW5jZSB9IGZyb20gJy4vc3RhdGljL2xpZmUnXG5leHBvcnQgeyByZWdpc3RlckNvbXBvbmVudHMsIHJlZ2lzdGVyTW9kdWxlcywgcmVnaXN0ZXJNZXRob2RzIH0gZnJvbSAnLi9zdGF0aWMvcmVnaXN0ZXInXG5leHBvcnQgeyByZWNlaXZlVGFza3MgfSBmcm9tICcuL3N0YXRpYy9icmlkZ2UnXG5leHBvcnQgeyBnZXRSb290IH0gZnJvbSAnLi9zdGF0aWMvbWlzYydcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IEFwcCBmcm9tICcuLi9hcHAnXG5pbXBvcnQgeyBpbnN0YW5jZU1hcCB9IGZyb20gJy4vbWFwJ1xuaW1wb3J0IHsgaW5pdCBhcyBpbml0QXBwIH0gZnJvbSAnLi4vYXBwL2N0cmwnXG5pbXBvcnQgeyByZXNldFRhcmdldCB9IGZyb20gJy4uL2NvcmUvZGVwJ1xuXG4vKipcbiAqIENyZWF0ZSBhIFdlZXggaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHBhcmFtICB7c3RyaW5nfSBjb2RlXG4gKiBAcGFyYW0gIHtvYmplY3R9IFtvcHRpb25zXSBvcHRpb24gYEhBU19MT0dgIGVuYWJsZSBwcmludCBsb2dcbiAqIEBwYXJhbSAge29iamVjdH0gW2RhdGFdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZSAoaWQsIGNvZGUsIG9wdGlvbnMsIGRhdGEpIHtcbiAgcmVzZXRUYXJnZXQoKVxuICBsZXQgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpZF1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgbGV0IHJlc3VsdFxuICBpZiAoIWluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UgPSBuZXcgQXBwKGlkLCBvcHRpb25zKVxuICAgIGluc3RhbmNlTWFwW2lkXSA9IGluc3RhbmNlXG4gICAgcmVzdWx0ID0gaW5pdEFwcChpbnN0YW5jZSwgY29kZSwgZGF0YSlcbiAgfVxuICBlbHNlIHtcbiAgICByZXN1bHQgPSBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9zdGF0aWMvY3JlYXRlLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBXZWV4IGluc3RhbmNlIGNvbnN0cnVjdG9yICYgZGVmaW5pdGlvblxuICovXG5cbmltcG9ydCB7IHJlcXVpcmVNb2R1bGUgfSBmcm9tICcuL3JlZ2lzdGVyJ1xuaW1wb3J0IHsgdXBkYXRlQWN0aW9ucywgY2FsbFRhc2tzIH0gZnJvbSAnLi9jdHJsJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2luc3RhbmNlJ1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkFwcC5wcm90b3R5cGUucmVxdWlyZU1vZHVsZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiByZXF1aXJlTW9kdWxlKHRoaXMsIG5hbWUpXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuQXBwLnByb3RvdHlwZS51cGRhdGVBY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICB1cGRhdGVBY3Rpb25zKHRoaXMpXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuQXBwLnByb3RvdHlwZS5jYWxsVGFza3MgPSBmdW5jdGlvbiAodGFza3MpIHtcbiAgY2FsbFRhc2tzKHRoaXMsIHRhc2tzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9pbmRleC5qc1xuICoqLyIsImxldCBuYXRpdmVNb2R1bGVzID0ge31cblxuLy8gZm9yIHRlc3RpbmdcblxuLyoqXG4gKiBmb3IgdGVzdGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kdWxlIChtb2R1bGVOYW1lKSB7XG4gIHJldHVybiBuYXRpdmVNb2R1bGVzW21vZHVsZU5hbWVdXG59XG5cbi8qKlxuICogZm9yIHRlc3RpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyTW9kdWxlcyAoKSB7XG4gIG5hdGl2ZU1vZHVsZXMgPSB7fVxufVxuXG4vLyBmb3IgZnJhbWV3b3JrXG5cbi8qKlxuICogaW5pdCBtb2R1bGVzIGZvciBhbiBhcHAgaW5zdGFuY2VcbiAqIHRoZSBzZWNvbmQgcGFyYW0gZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHJlcGxhY2UgYW4gZXhpc3RlZCBtZXRob2RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRNb2R1bGVzIChtb2R1bGVzLCBpZlJlcGxhY2UpIHtcbiAgZm9yIChjb25zdCBtb2R1bGVOYW1lIGluIG1vZHVsZXMpIHtcbiAgICAvLyBpbml0IGBtb2R1bGVzW21vZHVsZU5hbWVdW11gXG4gICAgbGV0IG1ldGhvZHMgPSBuYXRpdmVNb2R1bGVzW21vZHVsZU5hbWVdXG4gICAgaWYgKCFtZXRob2RzKSB7XG4gICAgICBtZXRob2RzID0ge31cbiAgICAgIG5hdGl2ZU1vZHVsZXNbbW9kdWxlTmFtZV0gPSBtZXRob2RzXG4gICAgfVxuXG4gICAgLy8gcHVzaCBlYWNoIG5vbi1leGlzdGVkIG5ldyBtZXRob2RcbiAgICBtb2R1bGVzW21vZHVsZU5hbWVdLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG1ldGhvZCA9IHtcbiAgICAgICAgICBuYW1lOiBtZXRob2RcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIW1ldGhvZHNbbWV0aG9kLm5hbWVdIHx8IGlmUmVwbGFjZSkge1xuICAgICAgICBtZXRob2RzW21ldGhvZC5uYW1lXSA9IG1ldGhvZFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBpbml0IGFwcCBtZXRob2RzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0TWV0aG9kcyAoVm0sIGFwaXMpIHtcbiAgY29uc3QgcCA9IFZtLnByb3RvdHlwZVxuXG4gIGZvciAoY29uc3QgYXBpTmFtZSBpbiBhcGlzKSB7XG4gICAgaWYgKCFwLmhhc093blByb3BlcnR5KGFwaU5hbWUpKSB7XG4gICAgICBwW2FwaU5hbWVdID0gYXBpc1thcGlOYW1lXVxuICAgIH1cbiAgfVxufVxuXG4vLyBmb3IgYXBwXG5cbi8qKlxuICogZ2V0IGEgbW9kdWxlIG9mIG1ldGhvZHMgZm9yIGFuIGFwcCBpbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZU1vZHVsZSAoYXBwLCBuYW1lKSB7XG4gIGNvbnN0IG1ldGhvZHMgPSBuYXRpdmVNb2R1bGVzW25hbWVdXG4gIGNvbnN0IHRhcmdldCA9IHt9XG4gIGZvciAoY29uc3QgbWV0aG9kTmFtZSBpbiBtZXRob2RzKSB7XG4gICAgdGFyZ2V0W21ldGhvZE5hbWVdID0gKC4uLmFyZ3MpID0+IGFwcC5jYWxsVGFza3Moe1xuICAgICAgbW9kdWxlOiBuYW1lLFxuICAgICAgbWV0aG9kOiBtZXRob2ROYW1lLFxuICAgICAgYXJnczogYXJnc1xuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHRhcmdldFxufVxuXG4vKipcbiAqIGdldCBhIGN1c3RvbSBjb21wb25lbnQgb3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZUN1c3RvbUNvbXBvbmVudCAoYXBwLCBuYW1lKSB7XG4gIGNvbnN0IHsgY3VzdG9tQ29tcG9uZW50TWFwIH0gPSBhcHBcbiAgcmV0dXJuIGN1c3RvbUNvbXBvbmVudE1hcFtuYW1lXVxufVxuXG4vKipcbiAqIHJlZ2lzdGVyIGEgY3VzdG9tIGNvbXBvbmVudCBvcHRpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckN1c3RvbUNvbXBvbmVudCAoYXBwLCBuYW1lLCBkZWYpIHtcbiAgY29uc3QgeyBjdXN0b21Db21wb25lbnRNYXAgfSA9IGFwcFxuXG4gIGlmIChjdXN0b21Db21wb25lbnRNYXBbbmFtZV0pIHtcbiAgICBjb25zb2xlLmVycm9yKGBbSlMgRnJhbWV3b3JrXSBkZWZpbmUgYSBjb21wb25lbnQoJHtuYW1lfSkgdGhhdCBhbHJlYWR5IGV4aXN0c2ApXG4gICAgcmV0dXJuXG4gIH1cblxuICBjdXN0b21Db21wb25lbnRNYXBbbmFtZV0gPSBkZWZcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9yZWdpc3Rlci5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogaW5zdGFuY2UgY29udHJvbHMgZnJvbSBuYXRpdmVcbiAqXG4gKiAtIGluaXQgYnVuZGxlXG4gKiAtIGZpcmUgZXZlbnRcbiAqIC0gY2FsbGJhY2tcbiAqIC0gZGVzdHJveVxuICpcbiAqIGNvcnJlc3BvbmRlZCB3aXRoIHRoZSBBUEkgb2YgaW5zdGFuY2UgbWFuYWdlciAoZnJhbWV3b3JrLmpzKVxuICovXG5leHBvcnQgeyBpbml0IH0gZnJvbSAnLi9pbml0J1xuXG5leHBvcnQge1xuXHRyZWZyZXNoLFxuICBkZXN0cm95LFxuICBnZXRSb290RWxlbWVudCxcbiAgZmlyZUV2ZW50LFxuICBjYWxsYmFjayxcbiAgdXBkYXRlQWN0aW9ucyxcblx0Y2FsbFRhc2tzXG59IGZyb20gJy4vbWlzYydcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9jdHJsL2luZGV4LmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBpbnN0YW5jZSBjb250cm9scyBmcm9tIG5hdGl2ZVxuICpcbiAqIC0gaW5pdCBidW5kbGVcbiAqXG4gKiBjb3JyZXNwb25kZWQgd2l0aCB0aGUgQVBJIG9mIGluc3RhbmNlIG1hbmFnZXIgKGZyYW1ld29yay5qcylcbiAqL1xuXG5pbXBvcnQgeyByZW1vdmVXZWV4UHJlZml4IH0gZnJvbSAnLi4vLi4vdXRpbCdcbmltcG9ydCB7XG4gIGRlZmluZUZuLFxuICBib290c3RyYXAsXG4gIHJlZ2lzdGVyXG59IGZyb20gJy4uL2J1bmRsZSdcbmltcG9ydCB7IHVwZGF0ZUFjdGlvbnMgfSBmcm9tICcuL21pc2MnXG5cbi8qKlxuICogSW5pdCBhbiBhcHAgYnkgcnVuIGNvZGUgd2l0Z2ggZGF0YVxuICogQHBhcmFtICB7b2JqZWN0fSBhcHBcbiAqIEBwYXJhbSAge3N0cmluZ30gY29kZVxuICogQHBhcmFtICB7b2JqZWN0fSBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0IChhcHAsIGNvZGUsIGRhdGEpIHtcbiAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gSW50aWFsaXplIGFuIGluc3RhbmNlIHdpdGg6XFxuJywgZGF0YSlcbiAgbGV0IHJlc3VsdFxuXG4gIC8vIHByZXBhcmUgYXBwIGVudiBtZXRob2RzXG4gIGNvbnN0IGJ1bmRsZURlZmluZSA9ICguLi5hcmdzKSA9PiBkZWZpbmVGbihhcHAsIC4uLmFyZ3MpXG4gIGNvbnN0IGJ1bmRsZUJvb3RzdHJhcCA9IChuYW1lLCBjb25maWcsIF9kYXRhKSA9PiB7XG4gICAgcmVzdWx0ID0gYm9vdHN0cmFwKGFwcCwgbmFtZSwgY29uZmlnLCBfZGF0YSB8fCBkYXRhKVxuICAgIHVwZGF0ZUFjdGlvbnMoYXBwKVxuICAgIGFwcC5kb2MubGlzdGVuZXIuY3JlYXRlRmluaXNoKClcbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBBZnRlciBpbnRpYWxpemVkIGFuIGluc3RhbmNlKCR7YXBwLmlkfSlgKVxuICB9XG4gIGNvbnN0IGJ1bmRsZVJlZ2lzdGVyID0gKC4uLmFyZ3MpID0+IHJlZ2lzdGVyKGFwcCwgLi4uYXJncylcbiAgY29uc3QgYnVuZGxlUmVuZGVyID0gKG5hbWUsIF9kYXRhKSA9PiB7XG4gICAgcmVzdWx0ID0gYm9vdHN0cmFwKGFwcCwgbmFtZSwge30sIF9kYXRhKVxuICB9XG4gIGNvbnN0IGJ1bmRsZVJlcXVpcmUgPSBuYW1lID0+IF9kYXRhID0+IHtcbiAgICByZXN1bHQgPSBib290c3RyYXAoYXBwLCBuYW1lLCB7fSwgX2RhdGEpXG4gIH1cbiAgY29uc3QgYnVuZGxlRG9jdW1lbnQgPSBhcHAuZG9jXG4gIGNvbnN0IGJ1bmRsZVJlcXVpcmVNb2R1bGUgPSBuYW1lID0+IGFwcC5yZXF1aXJlTW9kdWxlKHJlbW92ZVdlZXhQcmVmaXgobmFtZSkpXG5cbiAgLy8gcHJlcGFyZSBjb2RlXG4gIGxldCBmdW5jdGlvbkJvZHlcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2YgY29kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGBmdW5jdGlvbiAoKSB7Li4ufWAgLT4gYHsuLi59YFxuICAgIC8vIG5vdCB2ZXJ5IHN0cmljdFxuICAgIGZ1bmN0aW9uQm9keSA9IGNvZGUudG9TdHJpbmcoKS5zdWJzdHIoMTIpXG4gIH1cbiAgZWxzZSBpZiAoY29kZSkge1xuICAgIGZ1bmN0aW9uQm9keSA9IGNvZGUudG9TdHJpbmcoKVxuICB9XG5cbiAgLy8gcnVuIGNvZGUgYW5kIGdldCByZXN1bHRcbiAgY29uc3QgeyBXWEVudmlyb25tZW50IH0gPSBnbG9iYWxcbiAgaWYgKFdYRW52aXJvbm1lbnQgJiYgV1hFbnZpcm9ubWVudC5wbGF0Zm9ybSAhPT0gJ1dlYicpIHtcbiAgICAvLyB0aW1lciBBUElzIHBvbHlmaWxsIGluIG5hdGl2ZVxuICAgIGNvbnN0IHRpbWVyID0gYXBwLnJlcXVpcmVNb2R1bGUoJ3RpbWVyJylcbiAgICBjb25zdCB0aW1lckFQSXMgPSB7XG4gICAgICBzZXRUaW1lb3V0OiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFyZ3NbMF0oLi4uYXJncy5zbGljZSgyKSlcbiAgICAgICAgfVxuICAgICAgICB0aW1lci5zZXRUaW1lb3V0KGhhbmRsZXIsIGFyZ3NbMV0pXG4gICAgICAgIHJldHVybiBhcHAudWlkLnRvU3RyaW5nKClcbiAgICAgIH0sXG4gICAgICBzZXRJbnRlcnZhbDogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhcmdzWzBdKC4uLmFyZ3Muc2xpY2UoMikpXG4gICAgICAgIH1cbiAgICAgICAgdGltZXIuc2V0SW50ZXJ2YWwoaGFuZGxlciwgYXJnc1sxXSlcbiAgICAgICAgcmV0dXJuIGFwcC51aWQudG9TdHJpbmcoKVxuICAgICAgfSxcbiAgICAgIGNsZWFyVGltZW91dDogKG4pID0+IHtcbiAgICAgICAgdGltZXIuY2xlYXJUaW1lb3V0KG4pXG4gICAgICB9LFxuICAgICAgY2xlYXJJbnRlcnZhbDogKG4pID0+IHtcbiAgICAgICAgdGltZXIuY2xlYXJJbnRlcnZhbChuKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZuID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgJ2RlZmluZScsXG4gICAgICAncmVxdWlyZScsXG4gICAgICAnZG9jdW1lbnQnLFxuICAgICAgJ2Jvb3RzdHJhcCcsXG4gICAgICAncmVnaXN0ZXInLFxuICAgICAgJ3JlbmRlcicsXG4gICAgICAnX193ZWV4X2RlZmluZV9fJywgLy8gYWxpYXMgZm9yIGRlZmluZVxuICAgICAgJ19fd2VleF9ib290c3RyYXBfXycsIC8vIGFsaWFzIGZvciBib290c3RyYXBcbiAgICAgICdfX3dlZXhfZG9jdW1lbnRfXycsIC8vIGFsaWFzIGZvciBib290c3RyYXBcbiAgICAgICdfX3dlZXhfcmVxdWlyZV9fJyxcbiAgICAgICdzZXRUaW1lb3V0JyxcbiAgICAgICdzZXRJbnRlcnZhbCcsXG4gICAgICAnY2xlYXJUaW1lb3V0JyxcbiAgICAgICdjbGVhckludGVydmFsJyxcbiAgICAgIGZ1bmN0aW9uQm9keVxuICAgIClcblxuICAgIGZuKFxuICAgICAgYnVuZGxlRGVmaW5lLFxuICAgICAgYnVuZGxlUmVxdWlyZSxcbiAgICAgIGJ1bmRsZURvY3VtZW50LFxuICAgICAgYnVuZGxlQm9vdHN0cmFwLFxuICAgICAgYnVuZGxlUmVnaXN0ZXIsXG4gICAgICBidW5kbGVSZW5kZXIsXG4gICAgICBidW5kbGVEZWZpbmUsXG4gICAgICBidW5kbGVCb290c3RyYXAsXG4gICAgICBidW5kbGVEb2N1bWVudCxcbiAgICAgIGJ1bmRsZVJlcXVpcmVNb2R1bGUsXG4gICAgICB0aW1lckFQSXMuc2V0VGltZW91dCxcbiAgICAgIHRpbWVyQVBJcy5zZXRJbnRlcnZhbCxcbiAgICAgIHRpbWVyQVBJcy5jbGVhclRpbWVvdXQsXG4gICAgICB0aW1lckFQSXMuY2xlYXJJbnRlcnZhbClcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBmbiA9IG5ldyBGdW5jdGlvbihcbiAgICAgICdkZWZpbmUnLFxuICAgICAgJ3JlcXVpcmUnLFxuICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICdib290c3RyYXAnLFxuICAgICAgJ3JlZ2lzdGVyJyxcbiAgICAgICdyZW5kZXInLFxuICAgICAgJ19fd2VleF9kZWZpbmVfXycsIC8vIGFsaWFzIGZvciBkZWZpbmVcbiAgICAgICdfX3dlZXhfYm9vdHN0cmFwX18nLCAvLyBhbGlhcyBmb3IgYm9vdHN0cmFwXG4gICAgICAnX193ZWV4X2RvY3VtZW50X18nLCAvLyBhbGlhcyBmb3IgYm9vdHN0cmFwXG4gICAgICAnX193ZWV4X3JlcXVpcmVfXycsXG4gICAgICBmdW5jdGlvbkJvZHlcbiAgICApXG5cbiAgICBmbihcbiAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgIGJ1bmRsZVJlcXVpcmUsXG4gICAgICBidW5kbGVEb2N1bWVudCxcbiAgICAgIGJ1bmRsZUJvb3RzdHJhcCxcbiAgICAgIGJ1bmRsZVJlZ2lzdGVyLFxuICAgICAgYnVuZGxlUmVuZGVyLFxuICAgICAgYnVuZGxlRGVmaW5lLFxuICAgICAgYnVuZGxlQm9vdHN0cmFwLFxuICAgICAgYnVuZGxlRG9jdW1lbnQsXG4gICAgICBidW5kbGVSZXF1aXJlTW9kdWxlKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2N0cmwvaW5pdC5qc1xuICoqLyIsImV4cG9ydCB7XG4gIGV4dGVuZCxcbiAgZGVmLFxuICByZW1vdmUsXG4gIGhhc093bixcbiAgYmluZCxcbiAgdG9BcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3Rcbn0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzJ1xuXG4vKipcbiAqIENoZWNrIGlmIGEgc3RyaW5nIHN0YXJ0cyB3aXRoICQgb3IgX1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzZXJ2ZWQgKHN0cikge1xuICBjb25zdCBjID0gKHN0ciArICcnKS5jaGFyQ29kZUF0KDApXG4gIHJldHVybiBjID09PSAweDI0IHx8IGMgPT09IDB4NUZcbn1cblxuLy8gY2FuIHdlIHVzZSBfX3Byb3RvX18/XG5leHBvcnQgY29uc3QgaGFzUHJvdG8gPSAnX19wcm90b19fJyBpbiB7fVxuXG5sZXQgX1NldFxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAodHlwZW9mIFNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgU2V0LnRvU3RyaW5nKCkubWF0Y2goL25hdGl2ZSBjb2RlLykpIHtcbiAgLy8gdXNlIG5hdGl2ZSBTZXQgd2hlbiBhdmFpbGFibGUuXG4gIF9TZXQgPSBTZXRcbn1cbmVsc2Uge1xuICAvLyBhIG5vbi1zdGFuZGFyZCBTZXQgcG9seWZpbGwgdGhhdCBvbmx5IHdvcmtzIHdpdGggcHJpbWl0aXZlIGtleXMuXG4gIF9TZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIH1cbiAgX1NldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiB0aGlzLnNldFtrZXldICE9PSB1bmRlZmluZWRcbiAgfVxuICBfU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdGhpcy5zZXRba2V5XSA9IDFcbiAgfVxuICBfU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgfVxufVxuXG5leHBvcnQgeyBfU2V0IH1cblxuLyoqXG4gKiBQb2x5ZmlsbCBpbiBpT1M3IGJ5IG5hdGl2ZSBiZWNhdXNlIHRoZSBKYXZhU2NyaXB0IHBvbHlmaWxsIGhhcyBtZW1vcnkgcHJvYmxlbS5cbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3U2V0ICgpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgaWYgKHR5cGVvZiBuYXRpdmVTZXQgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG5hdGl2ZVNldC5jcmVhdGUoKVxuICB9XG4gIC8qIGVzbGludC1lbmFibGUgKi9cbiAgcmV0dXJuIG5ldyBfU2V0KClcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZWQgKGZuKSB7XG4gIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4gKHN0cikge1xuICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl1cbiAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSlcbiAgfVxufVxuXG4vKipcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbG1pdGVkIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuY29uc3QgY2FtZWxpemVSRSA9IC8tKFxcdykvZ1xuZXhwb3J0IGNvbnN0IGNhbWVsaXplID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCB0b1VwcGVyKVxufSlcblxuZnVuY3Rpb24gdG9VcHBlciAoXywgYykge1xuICByZXR1cm4gYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnXG59XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuY29uc3QgaHlwaGVuYXRlUkUgPSAvKFthLXpcXGRdKShbQS1aXSkvZ1xuZXhwb3J0IGNvbnN0IGh5cGhlbmF0ZSA9IGNhY2hlZChzdHIgPT4ge1xuICByZXR1cm4gc3RyXG4gICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgLnRvTG93ZXJDYXNlKClcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBvZiAodikge1xuICBjb25zdCBzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXG4gIHJldHVybiBzLnN1YnN0cmluZyg4LCBzLmxlbmd0aCAtIDEpLnRvTG93ZXJDYXNlKClcbn1cblxuLy8gd2VleCBuYW1lIHJ1bGVzXG5cbmNvbnN0IFdFRVhfQ09NUE9ORU5UX1JFRyA9IC9eQHdlZXgtY29tcG9uZW50XFwvL1xuY29uc3QgV0VFWF9NT0RVTEVfUkVHID0gL15Ad2VleC1tb2R1bGVcXC8vXG5jb25zdCBOT1JNQUxfTU9EVUxFX1JFRyA9IC9eXFwuezEsMn1cXC8vXG5jb25zdCBKU19TVVJGSVhfUkVHID0gL1xcLmpzJC9cblxuZXhwb3J0IGNvbnN0IGlzV2VleENvbXBvbmVudCA9IG5hbWUgPT4gISFuYW1lLm1hdGNoKFdFRVhfQ09NUE9ORU5UX1JFRylcbmV4cG9ydCBjb25zdCBpc1dlZXhNb2R1bGUgPSBuYW1lID0+ICEhbmFtZS5tYXRjaChXRUVYX01PRFVMRV9SRUcpXG5leHBvcnQgY29uc3QgaXNOb3JtYWxNb2R1bGUgPSBuYW1lID0+ICEhbmFtZS5tYXRjaChOT1JNQUxfTU9EVUxFX1JFRylcbmV4cG9ydCBjb25zdCBpc05wbU1vZHVsZSA9IG5hbWUgPT4gIWlzV2VleENvbXBvbmVudChuYW1lKSAmJiAhaXNXZWV4TW9kdWxlKG5hbWUpICYmICFpc05vcm1hbE1vZHVsZShuYW1lKVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlV2VleFByZWZpeCAoc3RyKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHN0ci5yZXBsYWNlKFdFRVhfQ09NUE9ORU5UX1JFRywgJycpLnJlcGxhY2UoV0VFWF9NT0RVTEVfUkVHLCAnJylcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSlNTdXJmaXggKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoSlNfU1VSRklYX1JFRywgJycpXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC91dGlsL2luZGV4LmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBhcGkgdGhhdCBpbnZva2VkIGJ5IGpzIGJ1bmRsZSBjb2RlXG4gKlxuICogLSBkZWZpbmUobmFtZSwgZmFjdG9yeSk6IGRlZmluZSBhIG5ldyBjb21wb3NlZCBjb21wb25lbnQgdHlwZVxuICogLSBib290c3RyYXAodHlwZSwgY29uZmlnLCBkYXRhKTogcmVxdWlyZSBhIGNlcnRhaW4gdHlwZSAmXG4gKiAgICAgICAgIHJlbmRlciB3aXRoIChvcHRpb25hbCkgZGF0YVxuICpcbiAqIGRlcHJlY2F0ZWQ6XG4gKiAtIHJlZ2lzdGVyKHR5cGUsIG9wdGlvbnMpOiByZWdpc3RlciBhIG5ldyBjb21wb3NlZCBjb21wb25lbnQgdHlwZVxuICogLSByZW5kZXIodHlwZSwgZGF0YSk6IHJlbmRlciBieSBhIGNlcnRhaW4gdHlwZSB3aXRoIChvcHRpb25hbCkgZGF0YVxuICogLSByZXF1aXJlKHR5cGUpKGRhdGEpOiByZXF1aXJlIGEgdHlwZSB0aGVuIHJlbmRlciB3aXRoIGRhdGFcbiAqL1xuXG5leHBvcnQgeyBib290c3RyYXAgfSBmcm9tICcuL2Jvb3RzdHJhcCdcbmV4cG9ydCB7IGRlZmluZUZuLCByZWdpc3RlciB9IGZyb20gJy4vZGVmaW5lJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2J1bmRsZS9pbmRleC5qc1xuICoqLyIsImltcG9ydCBzZW12ZXIgZnJvbSAnc2VtdmVyJ1xuaW1wb3J0IFZtIGZyb20gJy4uLy4uL3ZtJ1xuaW1wb3J0ICogYXMgZG93bmdyYWRlIGZyb20gJy4uL2Rvd25ncmFkZSdcbmltcG9ydCB7XG4gIHJlcXVpcmVDdXN0b21Db21wb25lbnRcbn0gZnJvbSAnLi4vcmVnaXN0ZXInXG5pbXBvcnQge1xuICBpc1BsYWluT2JqZWN0LFxuICBpc1dlZXhDb21wb25lbnQsXG4gIGlzTnBtTW9kdWxlLFxuICByZW1vdmVXZWV4UHJlZml4LFxuICByZW1vdmVKU1N1cmZpeFxufSBmcm9tICcuLi8uLi91dGlsJ1xuXG4vKipcbiAqIGJvb3RzdHJhcCBhcHAgZnJvbSBhIGNlcnRhaW4gY3VzdG9tIGNvbXBvbmVudCB3aXRoIGNvbmZpZyAmIGRhdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJvb3RzdHJhcCAoYXBwLCBuYW1lLCBjb25maWcsIGRhdGEpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gYm9vdHN0cmFwIGZvciAke25hbWV9YClcblxuICAvLyAxLiB2YWxpZGF0ZSBjdXN0b20gY29tcG9uZW50IG5hbWUgZmlyc3RcbiAgbGV0IGNsZWFuTmFtZVxuICBpZiAoaXNXZWV4Q29tcG9uZW50KG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICB9XG4gIGVsc2UgaWYgKGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICAvLyBjaGVjayBpZiBkZWZpbmUgYnkgb2xkICdkZWZpbmUnIG1ldGhvZFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghcmVxdWlyZUN1c3RvbUNvbXBvbmVudChhcHAsIGNsZWFuTmFtZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoYEl0J3Mgbm90IGEgY29tcG9uZW50OiAke25hbWV9YClcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgV3JvbmcgY29tcG9uZW50IG5hbWU6ICR7bmFtZX1gKVxuICB9XG5cbiAgLy8gMi4gdmFsaWRhdGUgY29uZmlndXJhdGlvblxuICBjb25maWcgPSBpc1BsYWluT2JqZWN0KGNvbmZpZykgPyBjb25maWcgOiB7fVxuICAvLyAyLjEgdHJhbnNmb3JtZXIgdmVyc2lvbiBjaGVja1xuICBpZiAodHlwZW9mIGNvbmZpZy50cmFuc2Zvcm1lclZlcnNpb24gPT09ICdzdHJpbmcnICYmXG4gICAgdHlwZW9mIGdsb2JhbC50cmFuc2Zvcm1lclZlcnNpb24gPT09ICdzdHJpbmcnICYmXG4gICAgIXNlbXZlci5zYXRpc2ZpZXMoY29uZmlnLnRyYW5zZm9ybWVyVmVyc2lvbixcbiAgICAgIGdsb2JhbC50cmFuc2Zvcm1lclZlcnNpb24pKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgSlMgQnVuZGxlIHZlcnNpb246ICR7Y29uZmlnLnRyYW5zZm9ybWVyVmVyc2lvbn0gYCArXG4gICAgICBgbm90IGNvbXBhdGlibGUgd2l0aCAke2dsb2JhbC50cmFuc2Zvcm1lclZlcnNpb259YClcbiAgfVxuICAvLyAyLjIgZG93bmdyYWRlIHZlcnNpb24gY2hlY2tcbiAgY29uc3QgZG93bmdyYWRlUmVzdWx0ID0gZG93bmdyYWRlLmNoZWNrKGNvbmZpZy5kb3duZ3JhZGUpXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoZG93bmdyYWRlUmVzdWx0LmlzRG93bmdyYWRlKSB7XG4gICAgYXBwLmNhbGxUYXNrcyhbe1xuICAgICAgbW9kdWxlOiAnaW5zdGFuY2VXcmFwJyxcbiAgICAgIG1ldGhvZDogJ2Vycm9yJyxcbiAgICAgIGFyZ3M6IFtcbiAgICAgICAgZG93bmdyYWRlUmVzdWx0LmVycm9yVHlwZSxcbiAgICAgICAgZG93bmdyYWRlUmVzdWx0LmNvZGUsXG4gICAgICAgIGRvd25ncmFkZVJlc3VsdC5lcnJvck1lc3NhZ2VcbiAgICAgIF1cbiAgICB9XSlcbiAgICByZXR1cm4gbmV3IEVycm9yKGBEb3duZ3JhZGVbJHtkb3duZ3JhZGVSZXN1bHQuY29kZX1dOiAke2Rvd25ncmFkZVJlc3VsdC5lcnJvck1lc3NhZ2V9YClcbiAgfVxuXG4gIC8vIDMuIGNyZWF0ZSBhIG5ldyBWbSB3aXRoIGN1c3RvbSBjb21wb25lbnQgbmFtZSBhbmQgZGF0YVxuICBhcHAudm0gPSBuZXcgVm0oY2xlYW5OYW1lLCBudWxsLCB7IF9hcHA6IGFwcCB9LCBudWxsLCBkYXRhKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2J1bmRsZS9ib290c3RyYXAuanNcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBTZW1WZXI7XG5cbi8vIFRoZSBkZWJ1ZyBmdW5jdGlvbiBpcyBleGNsdWRlZCBlbnRpcmVseSBmcm9tIHRoZSBtaW5pZmllZCB2ZXJzaW9uLlxuLyogbm9taW4gKi8gdmFyIGRlYnVnO1xuLyogbm9taW4gKi8gaWYgKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JyAmJlxuICAgIC8qIG5vbWluICovIHByb2Nlc3MuZW52ICYmXG4gICAgLyogbm9taW4gKi8gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyAmJlxuICAgIC8qIG5vbWluICovIC9cXGJzZW12ZXJcXGIvaS50ZXN0KHByb2Nlc3MuZW52Lk5PREVfREVCVUcpKVxuICAvKiBub21pbiAqLyBkZWJ1ZyA9IGZ1bmN0aW9uKCkge1xuICAgIC8qIG5vbWluICovIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAvKiBub21pbiAqLyBhcmdzLnVuc2hpZnQoJ1NFTVZFUicpO1xuICAgIC8qIG5vbWluICovIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgIC8qIG5vbWluICovIH07XG4vKiBub21pbiAqLyBlbHNlXG4gIC8qIG5vbWluICovIGRlYnVnID0gZnVuY3Rpb24oKSB7fTtcblxuLy8gTm90ZTogdGhpcyBpcyB0aGUgc2VtdmVyLm9yZyB2ZXJzaW9uIG9mIHRoZSBzcGVjIHRoYXQgaXQgaW1wbGVtZW50c1xuLy8gTm90IG5lY2Vzc2FyaWx5IHRoZSBwYWNrYWdlIHZlcnNpb24gb2YgdGhpcyBjb2RlLlxuZXhwb3J0cy5TRU1WRVJfU1BFQ19WRVJTSU9OID0gJzIuMC4wJztcblxudmFyIE1BWF9MRU5HVEggPSAyNTY7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8vIFRoZSBhY3R1YWwgcmVnZXhwcyBnbyBvbiBleHBvcnRzLnJlXG52YXIgcmUgPSBleHBvcnRzLnJlID0gW107XG52YXIgc3JjID0gZXhwb3J0cy5zcmMgPSBbXTtcbnZhciBSID0gMDtcblxuLy8gVGhlIGZvbGxvd2luZyBSZWd1bGFyIEV4cHJlc3Npb25zIGNhbiBiZSB1c2VkIGZvciB0b2tlbml6aW5nLFxuLy8gdmFsaWRhdGluZywgYW5kIHBhcnNpbmcgU2VtVmVyIHZlcnNpb24gc3RyaW5ncy5cblxuLy8gIyMgTnVtZXJpYyBJZGVudGlmaWVyXG4vLyBBIHNpbmdsZSBgMGAsIG9yIGEgbm9uLXplcm8gZGlnaXQgZm9sbG93ZWQgYnkgemVybyBvciBtb3JlIGRpZ2l0cy5cblxudmFyIE5VTUVSSUNJREVOVElGSUVSID0gUisrO1xuc3JjW05VTUVSSUNJREVOVElGSUVSXSA9ICcwfFsxLTldXFxcXGQqJztcbnZhciBOVU1FUklDSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdID0gJ1swLTldKyc7XG5cblxuLy8gIyMgTm9uLW51bWVyaWMgSWRlbnRpZmllclxuLy8gWmVybyBvciBtb3JlIGRpZ2l0cywgZm9sbG93ZWQgYnkgYSBsZXR0ZXIgb3IgaHlwaGVuLCBhbmQgdGhlbiB6ZXJvIG9yXG4vLyBtb3JlIGxldHRlcnMsIGRpZ2l0cywgb3IgaHlwaGVucy5cblxudmFyIE5PTk5VTUVSSUNJREVOVElGSUVSID0gUisrO1xuc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSA9ICdcXFxcZCpbYS16QS1aLV1bYS16QS1aMC05LV0qJztcblxuXG4vLyAjIyBNYWluIFZlcnNpb25cbi8vIFRocmVlIGRvdC1zZXBhcmF0ZWQgbnVtZXJpYyBpZGVudGlmaWVycy5cblxudmFyIE1BSU5WRVJTSU9OID0gUisrO1xuc3JjW01BSU5WRVJTSU9OXSA9ICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG52YXIgTUFJTlZFUlNJT05MT09TRSA9IFIrKztcbnNyY1tNQUlOVkVSU0lPTkxPT1NFXSA9ICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpJztcblxuLy8gIyMgUHJlLXJlbGVhc2UgVmVyc2lvbiBJZGVudGlmaWVyXG4vLyBBIG51bWVyaWMgaWRlbnRpZmllciwgb3IgYSBub24tbnVtZXJpYyBpZGVudGlmaWVyLlxuXG52YXIgUFJFUkVMRUFTRUlERU5USUZJRVIgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUlERU5USUZJRVJdID0gJyg/OicgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfCcgKyBzcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG52YXIgUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSA9ICcoPzonICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd8JyArIHNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cblxuLy8gIyMgUHJlLXJlbGVhc2UgVmVyc2lvblxuLy8gSHlwaGVuLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBkb3Qtc2VwYXJhdGVkIHByZS1yZWxlYXNlIHZlcnNpb25cbi8vIGlkZW50aWZpZXJzLlxuXG52YXIgUFJFUkVMRUFTRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFXSA9ICcoPzotKCcgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJdICtcbiAgICAgICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJdICsgJykqKSknO1xuXG52YXIgUFJFUkVMRUFTRUxPT1NFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VMT09TRV0gPSAnKD86LT8oJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSArXG4gICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gKyAnKSopKSc7XG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhIElkZW50aWZpZXJcbi8vIEFueSBjb21iaW5hdGlvbiBvZiBkaWdpdHMsIGxldHRlcnMsIG9yIGh5cGhlbnMuXG5cbnZhciBCVUlMRElERU5USUZJRVIgPSBSKys7XG5zcmNbQlVJTERJREVOVElGSUVSXSA9ICdbMC05QS1aYS16LV0rJztcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGFcbi8vIFBsdXMgc2lnbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgcGVyaW9kLXNlcGFyYXRlZCBidWlsZCBtZXRhZGF0YVxuLy8gaWRlbnRpZmllcnMuXG5cbnZhciBCVUlMRCA9IFIrKztcbnNyY1tCVUlMRF0gPSAnKD86XFxcXCsoJyArIHNyY1tCVUlMRElERU5USUZJRVJdICtcbiAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW0JVSUxESURFTlRJRklFUl0gKyAnKSopKSc7XG5cblxuLy8gIyMgRnVsbCBWZXJzaW9uIFN0cmluZ1xuLy8gQSBtYWluIHZlcnNpb24sIGZvbGxvd2VkIG9wdGlvbmFsbHkgYnkgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uIGFuZFxuLy8gYnVpbGQgbWV0YWRhdGEuXG5cbi8vIE5vdGUgdGhhdCB0aGUgb25seSBtYWpvciwgbWlub3IsIHBhdGNoLCBhbmQgcHJlLXJlbGVhc2Ugc2VjdGlvbnMgb2Zcbi8vIHRoZSB2ZXJzaW9uIHN0cmluZyBhcmUgY2FwdHVyaW5nIGdyb3Vwcy4gIFRoZSBidWlsZCBtZXRhZGF0YSBpcyBub3QgYVxuLy8gY2FwdHVyaW5nIGdyb3VwLCBiZWNhdXNlIGl0IHNob3VsZCBub3QgZXZlciBiZSB1c2VkIGluIHZlcnNpb25cbi8vIGNvbXBhcmlzb24uXG5cbnZhciBGVUxMID0gUisrO1xudmFyIEZVTExQTEFJTiA9ICd2PycgKyBzcmNbTUFJTlZFUlNJT05dICtcbiAgICAgICAgICAgICAgICBzcmNbUFJFUkVMRUFTRV0gKyAnPycgK1xuICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPyc7XG5cbnNyY1tGVUxMXSA9ICdeJyArIEZVTExQTEFJTiArICckJztcblxuLy8gbGlrZSBmdWxsLCBidXQgYWxsb3dzIHYxLjIuMyBhbmQgPTEuMi4zLCB3aGljaCBwZW9wbGUgZG8gc29tZXRpbWVzLlxuLy8gYWxzbywgMS4wLjBhbHBoYTEgKHByZXJlbGVhc2Ugd2l0aG91dCB0aGUgaHlwaGVuKSB3aGljaCBpcyBwcmV0dHlcbi8vIGNvbW1vbiBpbiB0aGUgbnBtIHJlZ2lzdHJ5LlxudmFyIExPT1NFUExBSU4gPSAnW3Y9XFxcXHNdKicgKyBzcmNbTUFJTlZFUlNJT05MT09TRV0gK1xuICAgICAgICAgICAgICAgICBzcmNbUFJFUkVMRUFTRUxPT1NFXSArICc/JyArXG4gICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPyc7XG5cbnZhciBMT09TRSA9IFIrKztcbnNyY1tMT09TRV0gPSAnXicgKyBMT09TRVBMQUlOICsgJyQnO1xuXG52YXIgR1RMVCA9IFIrKztcbnNyY1tHVExUXSA9ICcoKD86PHw+KT89PyknO1xuXG4vLyBTb21ldGhpbmcgbGlrZSBcIjIuKlwiIG9yIFwiMS4yLnhcIi5cbi8vIE5vdGUgdGhhdCBcIngueFwiIGlzIGEgdmFsaWQgeFJhbmdlIGlkZW50aWZlciwgbWVhbmluZyBcImFueSB2ZXJzaW9uXCJcbi8vIE9ubHkgdGhlIGZpcnN0IGl0ZW0gaXMgc3RyaWN0bHkgcmVxdWlyZWQuXG52YXIgWFJBTkdFSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gPSBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnfHh8WHxcXFxcKic7XG52YXIgWFJBTkdFSURFTlRJRklFUiA9IFIrKztcbnNyY1tYUkFOR0VJREVOVElGSUVSXSA9IHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnfHh8WHxcXFxcKic7XG5cbnZhciBYUkFOR0VQTEFJTiA9IFIrKztcbnNyY1tYUkFOR0VQTEFJTl0gPSAnW3Y9XFxcXHNdKignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzonICsgc3JjW1BSRVJFTEVBU0VdICsgJyk/JyArXG4gICAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JyArXG4gICAgICAgICAgICAgICAgICAgJyk/KT8nO1xuXG52YXIgWFJBTkdFUExBSU5MT09TRSA9IFIrKztcbnNyY1tYUkFOR0VQTEFJTkxPT1NFXSA9ICdbdj1cXFxcc10qKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OicgKyBzcmNbUFJFUkVMRUFTRUxPT1NFXSArICcpPycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKT8pPyc7XG5cbnZhciBYUkFOR0UgPSBSKys7XG5zcmNbWFJBTkdFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyonICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBYUkFOR0VMT09TRSA9IFIrKztcbnNyY1tYUkFOR0VMT09TRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gVGlsZGUgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcInJlYXNvbmFibHkgYXQgb3IgZ3JlYXRlciB0aGFuXCJcbnZhciBMT05FVElMREUgPSBSKys7XG5zcmNbTE9ORVRJTERFXSA9ICcoPzp+Pj8pJztcblxudmFyIFRJTERFVFJJTSA9IFIrKztcbnNyY1tUSUxERVRSSU1dID0gJyhcXFxccyopJyArIHNyY1tMT05FVElMREVdICsgJ1xcXFxzKyc7XG5yZVtUSUxERVRSSU1dID0gbmV3IFJlZ0V4cChzcmNbVElMREVUUklNXSwgJ2cnKTtcbnZhciB0aWxkZVRyaW1SZXBsYWNlID0gJyQxfic7XG5cbnZhciBUSUxERSA9IFIrKztcbnNyY1tUSUxERV0gPSAnXicgKyBzcmNbTE9ORVRJTERFXSArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgVElMREVMT09TRSA9IFIrKztcbnNyY1tUSUxERUxPT1NFXSA9ICdeJyArIHNyY1tMT05FVElMREVdICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBDYXJldCByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwiYXQgbGVhc3QgYW5kIGJhY2t3YXJkcyBjb21wYXRpYmxlIHdpdGhcIlxudmFyIExPTkVDQVJFVCA9IFIrKztcbnNyY1tMT05FQ0FSRVRdID0gJyg/OlxcXFxeKSc7XG5cbnZhciBDQVJFVFRSSU0gPSBSKys7XG5zcmNbQ0FSRVRUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbTE9ORUNBUkVUXSArICdcXFxccysnO1xucmVbQ0FSRVRUUklNXSA9IG5ldyBSZWdFeHAoc3JjW0NBUkVUVFJJTV0sICdnJyk7XG52YXIgY2FyZXRUcmltUmVwbGFjZSA9ICckMV4nO1xuXG52YXIgQ0FSRVQgPSBSKys7XG5zcmNbQ0FSRVRdID0gJ14nICsgc3JjW0xPTkVDQVJFVF0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIENBUkVUTE9PU0UgPSBSKys7XG5zcmNbQ0FSRVRMT09TRV0gPSAnXicgKyBzcmNbTE9ORUNBUkVUXSArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gQSBzaW1wbGUgZ3QvbHQvZXEgdGhpbmcsIG9yIGp1c3QgXCJcIiB0byBpbmRpY2F0ZSBcImFueSB2ZXJzaW9uXCJcbnZhciBDT01QQVJBVE9STE9PU0UgPSBSKys7XG5zcmNbQ09NUEFSQVRPUkxPT1NFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyooJyArIExPT1NFUExBSU4gKyAnKSR8XiQnO1xudmFyIENPTVBBUkFUT1IgPSBSKys7XG5zcmNbQ09NUEFSQVRPUl0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqKCcgKyBGVUxMUExBSU4gKyAnKSR8XiQnO1xuXG5cbi8vIEFuIGV4cHJlc3Npb24gdG8gc3RyaXAgYW55IHdoaXRlc3BhY2UgYmV0d2VlbiB0aGUgZ3RsdCBhbmQgdGhlIHRoaW5nXG4vLyBpdCBtb2RpZmllcywgc28gdGhhdCBgPiAxLjIuM2AgPT0+IGA+MS4yLjNgXG52YXIgQ09NUEFSQVRPUlRSSU0gPSBSKys7XG5zcmNbQ09NUEFSQVRPUlRSSU1dID0gJyhcXFxccyopJyArIHNyY1tHVExUXSArXG4gICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKignICsgTE9PU0VQTEFJTiArICd8JyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKSc7XG5cbi8vIHRoaXMgb25lIGhhcyB0byB1c2UgdGhlIC9nIGZsYWdcbnJlW0NPTVBBUkFUT1JUUklNXSA9IG5ldyBSZWdFeHAoc3JjW0NPTVBBUkFUT1JUUklNXSwgJ2cnKTtcbnZhciBjb21wYXJhdG9yVHJpbVJlcGxhY2UgPSAnJDEkMiQzJztcblxuXG4vLyBTb21ldGhpbmcgbGlrZSBgMS4yLjMgLSAxLjIuNGBcbi8vIE5vdGUgdGhhdCB0aGVzZSBhbGwgdXNlIHRoZSBsb29zZSBmb3JtLCBiZWNhdXNlIHRoZXknbGwgYmVcbi8vIGNoZWNrZWQgYWdhaW5zdCBlaXRoZXIgdGhlIHN0cmljdCBvciBsb29zZSBjb21wYXJhdG9yIGZvcm1cbi8vIGxhdGVyLlxudmFyIEhZUEhFTlJBTkdFID0gUisrO1xuc3JjW0hZUEhFTlJBTkdFXSA9ICdeXFxcXHMqKCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnXFxcXHMrLVxcXFxzKycgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICdcXFxccyokJztcblxudmFyIEhZUEhFTlJBTkdFTE9PU0UgPSBSKys7XG5zcmNbSFlQSEVOUkFOR0VMT09TRV0gPSAnXlxcXFxzKignICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxccystXFxcXHMrJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKiQnO1xuXG4vLyBTdGFyIHJhbmdlcyBiYXNpY2FsbHkganVzdCBhbGxvdyBhbnl0aGluZyBhdCBhbGwuXG52YXIgU1RBUiA9IFIrKztcbnNyY1tTVEFSXSA9ICcoPHw+KT89P1xcXFxzKlxcXFwqJztcblxuLy8gQ29tcGlsZSB0byBhY3R1YWwgcmVnZXhwIG9iamVjdHMuXG4vLyBBbGwgYXJlIGZsYWctZnJlZSwgdW5sZXNzIHRoZXkgd2VyZSBjcmVhdGVkIGFib3ZlIHdpdGggYSBmbGFnLlxuZm9yICh2YXIgaSA9IDA7IGkgPCBSOyBpKyspIHtcbiAgZGVidWcoaSwgc3JjW2ldKTtcbiAgaWYgKCFyZVtpXSlcbiAgICByZVtpXSA9IG5ldyBSZWdFeHAoc3JjW2ldKTtcbn1cblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuZnVuY3Rpb24gcGFyc2UodmVyc2lvbiwgbG9vc2UpIHtcbiAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpXG4gICAgcmV0dXJuIHZlcnNpb247XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJylcbiAgICByZXR1cm4gbnVsbDtcblxuICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHZhciByID0gbG9vc2UgPyByZVtMT09TRV0gOiByZVtGVUxMXTtcbiAgaWYgKCFyLnRlc3QodmVyc2lvbikpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy52YWxpZCA9IHZhbGlkO1xuZnVuY3Rpb24gdmFsaWQodmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHYgPSBwYXJzZSh2ZXJzaW9uLCBsb29zZSk7XG4gIHJldHVybiB2ID8gdi52ZXJzaW9uIDogbnVsbDtcbn1cblxuXG5leHBvcnRzLmNsZWFuID0gY2xlYW47XG5mdW5jdGlvbiBjbGVhbih2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgcyA9IHBhcnNlKHZlcnNpb24udHJpbSgpLnJlcGxhY2UoL15bPXZdKy8sICcnKSwgbG9vc2UpO1xuICByZXR1cm4gcyA/IHMudmVyc2lvbiA6IG51bGw7XG59XG5cbmV4cG9ydHMuU2VtVmVyID0gU2VtVmVyO1xuXG5mdW5jdGlvbiBTZW1WZXIodmVyc2lvbiwgbG9vc2UpIHtcbiAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpIHtcbiAgICBpZiAodmVyc2lvbi5sb29zZSA9PT0gbG9vc2UpXG4gICAgICByZXR1cm4gdmVyc2lvbjtcbiAgICBlbHNlXG4gICAgICB2ZXJzaW9uID0gdmVyc2lvbi52ZXJzaW9uO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgVmVyc2lvbjogJyArIHZlcnNpb24pO1xuICB9XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2ZXJzaW9uIGlzIGxvbmdlciB0aGFuICcgKyBNQVhfTEVOR1RIICsgJyBjaGFyYWN0ZXJzJylcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG5cbiAgZGVidWcoJ1NlbVZlcicsIHZlcnNpb24sIGxvb3NlKTtcbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuICB2YXIgbSA9IHZlcnNpb24udHJpbSgpLm1hdGNoKGxvb3NlID8gcmVbTE9PU0VdIDogcmVbRlVMTF0pO1xuXG4gIGlmICghbSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFZlcnNpb246ICcgKyB2ZXJzaW9uKTtcblxuICB0aGlzLnJhdyA9IHZlcnNpb247XG5cbiAgLy8gdGhlc2UgYXJlIGFjdHVhbGx5IG51bWJlcnNcbiAgdGhpcy5tYWpvciA9ICttWzFdO1xuICB0aGlzLm1pbm9yID0gK21bMl07XG4gIHRoaXMucGF0Y2ggPSArbVszXTtcblxuICBpZiAodGhpcy5tYWpvciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5tYWpvciA8IDApXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtYWpvciB2ZXJzaW9uJylcblxuICBpZiAodGhpcy5taW5vciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5taW5vciA8IDApXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtaW5vciB2ZXJzaW9uJylcblxuICBpZiAodGhpcy5wYXRjaCA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5wYXRjaCA8IDApXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBwYXRjaCB2ZXJzaW9uJylcblxuICAvLyBudW1iZXJpZnkgYW55IHByZXJlbGVhc2UgbnVtZXJpYyBpZHNcbiAgaWYgKCFtWzRdKVxuICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICBlbHNlXG4gICAgdGhpcy5wcmVyZWxlYXNlID0gbVs0XS5zcGxpdCgnLicpLm1hcChmdW5jdGlvbihpZCkge1xuICAgICAgaWYgKC9eWzAtOV0rJC8udGVzdChpZCkpIHtcbiAgICAgICAgdmFyIG51bSA9ICtpZDtcbiAgICAgICAgaWYgKG51bSA+PSAwICYmIG51bSA8IE1BWF9TQUZFX0lOVEVHRVIpXG4gICAgICAgICAgcmV0dXJuIG51bTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpZDtcbiAgICB9KTtcblxuICB0aGlzLmJ1aWxkID0gbVs1XSA/IG1bNV0uc3BsaXQoJy4nKSA6IFtdO1xuICB0aGlzLmZvcm1hdCgpO1xufVxuXG5TZW1WZXIucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnZlcnNpb24gPSB0aGlzLm1ham9yICsgJy4nICsgdGhpcy5taW5vciArICcuJyArIHRoaXMucGF0Y2g7XG4gIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHRoaXMudmVyc2lvbiArPSAnLScgKyB0aGlzLnByZXJlbGVhc2Uuam9pbignLicpO1xuICByZXR1cm4gdGhpcy52ZXJzaW9uO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy52ZXJzaW9uO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgZGVidWcoJ1NlbVZlci5jb21wYXJlJywgdGhpcy52ZXJzaW9uLCB0aGlzLmxvb3NlLCBvdGhlcik7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiB0aGlzLmNvbXBhcmVNYWluKG90aGVyKSB8fCB0aGlzLmNvbXBhcmVQcmUob3RoZXIpO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlTWFpbiA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnModGhpcy5tYWpvciwgb3RoZXIubWFqb3IpIHx8XG4gICAgICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5taW5vciwgb3RoZXIubWlub3IpIHx8XG4gICAgICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5wYXRjaCwgb3RoZXIucGF0Y2gpO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlUHJlID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgLy8gTk9UIGhhdmluZyBhIHByZXJlbGVhc2UgaXMgPiBoYXZpbmcgb25lXG4gIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gLTE7XG4gIGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmIG90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAxO1xuICBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIDA7XG5cbiAgdmFyIGkgPSAwO1xuICBkbyB7XG4gICAgdmFyIGEgPSB0aGlzLnByZXJlbGVhc2VbaV07XG4gICAgdmFyIGIgPSBvdGhlci5wcmVyZWxlYXNlW2ldO1xuICAgIGRlYnVnKCdwcmVyZWxlYXNlIGNvbXBhcmUnLCBpLCBhLCBiKTtcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkICYmIGIgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAwO1xuICAgIGVsc2UgaWYgKGIgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKGEgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAtMTtcbiAgICBlbHNlIGlmIChhID09PSBiKVxuICAgICAgY29udGludWU7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhhLCBiKTtcbiAgfSB3aGlsZSAoKytpKTtcbn07XG5cbi8vIHByZW1pbm9yIHdpbGwgYnVtcCB0aGUgdmVyc2lvbiB1cCB0byB0aGUgbmV4dCBtaW5vciByZWxlYXNlLCBhbmQgaW1tZWRpYXRlbHlcbi8vIGRvd24gdG8gcHJlLXJlbGVhc2UuIHByZW1ham9yIGFuZCBwcmVwYXRjaCB3b3JrIHRoZSBzYW1lIHdheS5cblNlbVZlci5wcm90b3R5cGUuaW5jID0gZnVuY3Rpb24ocmVsZWFzZSwgaWRlbnRpZmllcikge1xuICBzd2l0Y2ggKHJlbGVhc2UpIHtcbiAgICBjYXNlICdwcmVtYWpvcic6XG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5taW5vciA9IDA7XG4gICAgICB0aGlzLm1ham9yKys7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVtaW5vcic6XG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5taW5vcisrO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJlcGF0Y2gnOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhbHJlYWR5IGEgcHJlcmVsZWFzZSwgaXQgd2lsbCBidW1wIHRvIHRoZSBuZXh0IHZlcnNpb25cbiAgICAgIC8vIGRyb3AgYW55IHByZXJlbGVhc2VzIHRoYXQgbWlnaHQgYWxyZWFkeSBleGlzdCwgc2luY2UgdGhleSBhcmUgbm90XG4gICAgICAvLyByZWxldmFudCBhdCB0aGlzIHBvaW50LlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKTtcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIElmIHRoZSBpbnB1dCBpcyBhIG5vbi1wcmVyZWxlYXNlIHZlcnNpb24sIHRoaXMgYWN0cyB0aGUgc2FtZSBhc1xuICAgIC8vIHByZXBhdGNoLlxuICAgIGNhc2UgJ3ByZXJlbGVhc2UnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdtYWpvcic6XG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1ham9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWFqb3IgdmVyc2lvbi5cbiAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWFqb3IuXG4gICAgICAvLyAxLjAuMC01IGJ1bXBzIHRvIDEuMC4wXG4gICAgICAvLyAxLjEuMCBidW1wcyB0byAyLjAuMFxuICAgICAgaWYgKHRoaXMubWlub3IgIT09IDAgfHwgdGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLm1ham9yKys7XG4gICAgICB0aGlzLm1pbm9yID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaW5vcic6XG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1pbm9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWlub3IgdmVyc2lvbi5cbiAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWlub3IuXG4gICAgICAvLyAxLjIuMC01IGJ1bXBzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMSBidW1wcyB0byAxLjMuMFxuICAgICAgaWYgKHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5taW5vcisrO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3BhdGNoJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgbm90IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiwgaXQgd2lsbCBpbmNyZW1lbnQgdGhlIHBhdGNoLlxuICAgICAgLy8gSWYgaXQgaXMgYSBwcmUtcmVsZWFzZSBpdCB3aWxsIGJ1bXAgdXAgdG8gdGhlIHNhbWUgcGF0Y2ggdmVyc2lvbi5cbiAgICAgIC8vIDEuMi4wLTUgcGF0Y2hlcyB0byAxLjIuMFxuICAgICAgLy8gMS4yLjAgcGF0Y2hlcyB0byAxLjIuMVxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMucGF0Y2grKztcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgLy8gVGhpcyBwcm9iYWJseSBzaG91bGRuJ3QgYmUgdXNlZCBwdWJsaWNseS5cbiAgICAvLyAxLjAuMCBcInByZVwiIHdvdWxkIGJlY29tZSAxLjAuMC0wIHdoaWNoIGlzIHRoZSB3cm9uZyBkaXJlY3Rpb24uXG4gICAgY2FzZSAncHJlJzpcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbMF07XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnByZXJlbGVhc2UubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJlcmVsZWFzZVtpXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZVtpXSsrO1xuICAgICAgICAgICAgaSA9IC0yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gLTEpIC8vIGRpZG4ndCBpbmNyZW1lbnQgYW55dGhpbmdcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UucHVzaCgwKTtcbiAgICAgIH1cbiAgICAgIGlmIChpZGVudGlmaWVyKSB7XG4gICAgICAgIC8vIDEuMi4wLWJldGEuMSBidW1wcyB0byAxLjIuMC1iZXRhLjIsXG4gICAgICAgIC8vIDEuMi4wLWJldGEuZm9vYmx6IG9yIDEuMi4wLWJldGEgYnVtcHMgdG8gMS4yLjAtYmV0YS4wXG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2VbMF0gPT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgICBpZiAoaXNOYU4odGhpcy5wcmVyZWxlYXNlWzFdKSlcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGluY3JlbWVudCBhcmd1bWVudDogJyArIHJlbGVhc2UpO1xuICB9XG4gIHRoaXMuZm9ybWF0KCk7XG4gIHRoaXMucmF3ID0gdGhpcy52ZXJzaW9uO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmV4cG9ydHMuaW5jID0gaW5jO1xuZnVuY3Rpb24gaW5jKHZlcnNpb24sIHJlbGVhc2UsIGxvb3NlLCBpZGVudGlmaWVyKSB7XG4gIGlmICh0eXBlb2YobG9vc2UpID09PSAnc3RyaW5nJykge1xuICAgIGlkZW50aWZpZXIgPSBsb29zZTtcbiAgICBsb29zZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpLmluYyhyZWxlYXNlLCBpZGVudGlmaWVyKS52ZXJzaW9uO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMuZGlmZiA9IGRpZmY7XG5mdW5jdGlvbiBkaWZmKHZlcnNpb24xLCB2ZXJzaW9uMikge1xuICBpZiAoZXEodmVyc2lvbjEsIHZlcnNpb24yKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHZhciB2MSA9IHBhcnNlKHZlcnNpb24xKTtcbiAgICB2YXIgdjIgPSBwYXJzZSh2ZXJzaW9uMik7XG4gICAgaWYgKHYxLnByZXJlbGVhc2UubGVuZ3RoIHx8IHYyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdjEpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgICAgaWYgKHYxW2tleV0gIT09IHYyW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiAncHJlJytrZXk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJ3ByZXJlbGVhc2UnO1xuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gdjEpIHtcbiAgICAgIGlmIChrZXkgPT09ICdtYWpvcicgfHwga2V5ID09PSAnbWlub3InIHx8IGtleSA9PT0gJ3BhdGNoJykge1xuICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5jb21wYXJlSWRlbnRpZmllcnMgPSBjb21wYXJlSWRlbnRpZmllcnM7XG5cbnZhciBudW1lcmljID0gL15bMC05XSskLztcbmZ1bmN0aW9uIGNvbXBhcmVJZGVudGlmaWVycyhhLCBiKSB7XG4gIHZhciBhbnVtID0gbnVtZXJpYy50ZXN0KGEpO1xuICB2YXIgYm51bSA9IG51bWVyaWMudGVzdChiKTtcblxuICBpZiAoYW51bSAmJiBibnVtKSB7XG4gICAgYSA9ICthO1xuICAgIGIgPSArYjtcbiAgfVxuXG4gIHJldHVybiAoYW51bSAmJiAhYm51bSkgPyAtMSA6XG4gICAgICAgICAoYm51bSAmJiAhYW51bSkgPyAxIDpcbiAgICAgICAgIGEgPCBiID8gLTEgOlxuICAgICAgICAgYSA+IGIgPyAxIDpcbiAgICAgICAgIDA7XG59XG5cbmV4cG9ydHMucmNvbXBhcmVJZGVudGlmaWVycyA9IHJjb21wYXJlSWRlbnRpZmllcnM7XG5mdW5jdGlvbiByY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpIHtcbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhiLCBhKTtcbn1cblxuZXhwb3J0cy5tYWpvciA9IG1ham9yO1xuZnVuY3Rpb24gbWFqb3IoYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1ham9yO1xufVxuXG5leHBvcnRzLm1pbm9yID0gbWlub3I7XG5mdW5jdGlvbiBtaW5vcihhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWlub3I7XG59XG5cbmV4cG9ydHMucGF0Y2ggPSBwYXRjaDtcbmZ1bmN0aW9uIHBhdGNoKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5wYXRjaDtcbn1cblxuZXhwb3J0cy5jb21wYXJlID0gY29tcGFyZTtcbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLmNvbXBhcmUoYik7XG59XG5cbmV4cG9ydHMuY29tcGFyZUxvb3NlID0gY29tcGFyZUxvb3NlO1xuZnVuY3Rpb24gY29tcGFyZUxvb3NlKGEsIGIpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgdHJ1ZSk7XG59XG5cbmV4cG9ydHMucmNvbXBhcmUgPSByY29tcGFyZTtcbmZ1bmN0aW9uIHJjb21wYXJlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGIsIGEsIGxvb3NlKTtcbn1cblxuZXhwb3J0cy5zb3J0ID0gc29ydDtcbmZ1bmN0aW9uIHNvcnQobGlzdCwgbG9vc2UpIHtcbiAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pO1xufVxuXG5leHBvcnRzLnJzb3J0ID0gcnNvcnQ7XG5mdW5jdGlvbiByc29ydChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5yY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pO1xufVxuXG5leHBvcnRzLmd0ID0gZ3Q7XG5mdW5jdGlvbiBndChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPiAwO1xufVxuXG5leHBvcnRzLmx0ID0gbHQ7XG5mdW5jdGlvbiBsdChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPCAwO1xufVxuXG5leHBvcnRzLmVxID0gZXE7XG5mdW5jdGlvbiBlcShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPT09IDA7XG59XG5cbmV4cG9ydHMubmVxID0gbmVxO1xuZnVuY3Rpb24gbmVxKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSAhPT0gMDtcbn1cblxuZXhwb3J0cy5ndGUgPSBndGU7XG5mdW5jdGlvbiBndGUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID49IDA7XG59XG5cbmV4cG9ydHMubHRlID0gbHRlO1xuZnVuY3Rpb24gbHRlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8PSAwO1xufVxuXG5leHBvcnRzLmNtcCA9IGNtcDtcbmZ1bmN0aW9uIGNtcChhLCBvcCwgYiwgbG9vc2UpIHtcbiAgdmFyIHJldDtcbiAgc3dpdGNoIChvcCkge1xuICAgIGNhc2UgJz09PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSBhID0gYS52ZXJzaW9uO1xuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JykgYiA9IGIudmVyc2lvbjtcbiAgICAgIHJldCA9IGEgPT09IGI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICchPT0nOlxuICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0JykgYSA9IGEudmVyc2lvbjtcbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIGIgPSBiLnZlcnNpb247XG4gICAgICByZXQgPSBhICE9PSBiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnJzogY2FzZSAnPSc6IGNhc2UgJz09JzogcmV0ID0gZXEoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICchPSc6IHJldCA9IG5lcShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJz4nOiByZXQgPSBndChhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJz49JzogcmV0ID0gZ3RlKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPCc6IHJldCA9IGx0KGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPD0nOiByZXQgPSBsdGUoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBkZWZhdWx0OiB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG9wZXJhdG9yOiAnICsgb3ApO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydHMuQ29tcGFyYXRvciA9IENvbXBhcmF0b3I7XG5mdW5jdGlvbiBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKSB7XG4gIGlmIChjb21wIGluc3RhbmNlb2YgQ29tcGFyYXRvcikge1xuICAgIGlmIChjb21wLmxvb3NlID09PSBsb29zZSlcbiAgICAgIHJldHVybiBjb21wO1xuICAgIGVsc2VcbiAgICAgIGNvbXAgPSBjb21wLnZhbHVlO1xuICB9XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENvbXBhcmF0b3IpKVxuICAgIHJldHVybiBuZXcgQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG5cbiAgZGVidWcoJ2NvbXBhcmF0b3InLCBjb21wLCBsb29zZSk7XG4gIHRoaXMubG9vc2UgPSBsb29zZTtcbiAgdGhpcy5wYXJzZShjb21wKTtcblxuICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSlcbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gIGVsc2VcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5vcGVyYXRvciArIHRoaXMuc2VtdmVyLnZlcnNpb247XG5cbiAgZGVidWcoJ2NvbXAnLCB0aGlzKTtcbn1cblxudmFyIEFOWSA9IHt9O1xuQ29tcGFyYXRvci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbihjb21wKSB7XG4gIHZhciByID0gdGhpcy5sb29zZSA/IHJlW0NPTVBBUkFUT1JMT09TRV0gOiByZVtDT01QQVJBVE9SXTtcbiAgdmFyIG0gPSBjb21wLm1hdGNoKHIpO1xuXG4gIGlmICghbSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNvbXBhcmF0b3I6ICcgKyBjb21wKTtcblxuICB0aGlzLm9wZXJhdG9yID0gbVsxXTtcbiAgaWYgKHRoaXMub3BlcmF0b3IgPT09ICc9JylcbiAgICB0aGlzLm9wZXJhdG9yID0gJyc7XG5cbiAgLy8gaWYgaXQgbGl0ZXJhbGx5IGlzIGp1c3QgJz4nIG9yICcnIHRoZW4gYWxsb3cgYW55dGhpbmcuXG4gIGlmICghbVsyXSlcbiAgICB0aGlzLnNlbXZlciA9IEFOWTtcbiAgZWxzZVxuICAgIHRoaXMuc2VtdmVyID0gbmV3IFNlbVZlcihtWzJdLCB0aGlzLmxvb3NlKTtcbn07XG5cbkNvbXBhcmF0b3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZhbHVlO1xufTtcblxuQ29tcGFyYXRvci5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgZGVidWcoJ0NvbXBhcmF0b3IudGVzdCcsIHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKVxuICAgIHJldHVybiB0cnVlO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpXG4gICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIGNtcCh2ZXJzaW9uLCB0aGlzLm9wZXJhdG9yLCB0aGlzLnNlbXZlciwgdGhpcy5sb29zZSk7XG59O1xuXG5cbmV4cG9ydHMuUmFuZ2UgPSBSYW5nZTtcbmZ1bmN0aW9uIFJhbmdlKHJhbmdlLCBsb29zZSkge1xuICBpZiAoKHJhbmdlIGluc3RhbmNlb2YgUmFuZ2UpICYmIHJhbmdlLmxvb3NlID09PSBsb29zZSlcbiAgICByZXR1cm4gcmFuZ2U7XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJhbmdlKSlcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG5cbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuXG4gIC8vIEZpcnN0LCBzcGxpdCBiYXNlZCBvbiBib29sZWFuIG9yIHx8XG4gIHRoaXMucmF3ID0gcmFuZ2U7XG4gIHRoaXMuc2V0ID0gcmFuZ2Uuc3BsaXQoL1xccypcXHxcXHxcXHMqLykubWFwKGZ1bmN0aW9uKHJhbmdlKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VSYW5nZShyYW5nZS50cmltKCkpO1xuICB9LCB0aGlzKS5maWx0ZXIoZnVuY3Rpb24oYykge1xuICAgIC8vIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHJlbGV2YW50IGZvciB3aGF0ZXZlciByZWFzb25cbiAgICByZXR1cm4gYy5sZW5ndGg7XG4gIH0pO1xuXG4gIGlmICghdGhpcy5zZXQubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBTZW1WZXIgUmFuZ2U6ICcgKyByYW5nZSk7XG4gIH1cblxuICB0aGlzLmZvcm1hdCgpO1xufVxuXG5SYW5nZS5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmFuZ2UgPSB0aGlzLnNldC5tYXAoZnVuY3Rpb24oY29tcHMpIHtcbiAgICByZXR1cm4gY29tcHMuam9pbignICcpLnRyaW0oKTtcbiAgfSkuam9pbignfHwnKS50cmltKCk7XG4gIHJldHVybiB0aGlzLnJhbmdlO1xufTtcblxuUmFuZ2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnJhbmdlO1xufTtcblxuUmFuZ2UucHJvdG90eXBlLnBhcnNlUmFuZ2UgPSBmdW5jdGlvbihyYW5nZSkge1xuICB2YXIgbG9vc2UgPSB0aGlzLmxvb3NlO1xuICByYW5nZSA9IHJhbmdlLnRyaW0oKTtcbiAgZGVidWcoJ3JhbmdlJywgcmFuZ2UsIGxvb3NlKTtcbiAgLy8gYDEuMi4zIC0gMS4yLjRgID0+IGA+PTEuMi4zIDw9MS4yLjRgXG4gIHZhciBociA9IGxvb3NlID8gcmVbSFlQSEVOUkFOR0VMT09TRV0gOiByZVtIWVBIRU5SQU5HRV07XG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShociwgaHlwaGVuUmVwbGFjZSk7XG4gIGRlYnVnKCdoeXBoZW4gcmVwbGFjZScsIHJhbmdlKTtcbiAgLy8gYD4gMS4yLjMgPCAxLjIuNWAgPT4gYD4xLjIuMyA8MS4yLjVgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtDT01QQVJBVE9SVFJJTV0sIGNvbXBhcmF0b3JUcmltUmVwbGFjZSk7XG4gIGRlYnVnKCdjb21wYXJhdG9yIHRyaW0nLCByYW5nZSwgcmVbQ09NUEFSQVRPUlRSSU1dKTtcblxuICAvLyBgfiAxLjIuM2AgPT4gYH4xLjIuM2BcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW1RJTERFVFJJTV0sIHRpbGRlVHJpbVJlcGxhY2UpO1xuXG4gIC8vIGBeIDEuMi4zYCA9PiBgXjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbQ0FSRVRUUklNXSwgY2FyZXRUcmltUmVwbGFjZSk7XG5cbiAgLy8gbm9ybWFsaXplIHNwYWNlc1xuICByYW5nZSA9IHJhbmdlLnNwbGl0KC9cXHMrLykuam9pbignICcpO1xuXG4gIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSByYW5nZSBpcyBjb21wbGV0ZWx5IHRyaW1tZWQgYW5kXG4gIC8vIHJlYWR5IHRvIGJlIHNwbGl0IGludG8gY29tcGFyYXRvcnMuXG5cbiAgdmFyIGNvbXBSZSA9IGxvb3NlID8gcmVbQ09NUEFSQVRPUkxPT1NFXSA6IHJlW0NPTVBBUkFUT1JdO1xuICB2YXIgc2V0ID0gcmFuZ2Uuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBwYXJzZUNvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJykuc3BsaXQoL1xccysvKTtcbiAgaWYgKHRoaXMubG9vc2UpIHtcbiAgICAvLyBpbiBsb29zZSBtb2RlLCB0aHJvdyBvdXQgYW55IHRoYXQgYXJlIG5vdCB2YWxpZCBjb21wYXJhdG9yc1xuICAgIHNldCA9IHNldC5maWx0ZXIoZnVuY3Rpb24oY29tcCkge1xuICAgICAgcmV0dXJuICEhY29tcC5tYXRjaChjb21wUmUpO1xuICAgIH0pO1xuICB9XG4gIHNldCA9IHNldC5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBuZXcgQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG4gIH0pO1xuXG4gIHJldHVybiBzZXQ7XG59O1xuXG4vLyBNb3N0bHkganVzdCBmb3IgdGVzdGluZyBhbmQgbGVnYWN5IEFQSSByZWFzb25zXG5leHBvcnRzLnRvQ29tcGFyYXRvcnMgPSB0b0NvbXBhcmF0b3JzO1xuZnVuY3Rpb24gdG9Db21wYXJhdG9ycyhyYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpLnNldC5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBjb21wLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICByZXR1cm4gYy52YWx1ZTtcbiAgICB9KS5qb2luKCcgJykudHJpbSgpLnNwbGl0KCcgJyk7XG4gIH0pO1xufVxuXG4vLyBjb21wcmlzZWQgb2YgeHJhbmdlcywgdGlsZGVzLCBzdGFycywgYW5kIGd0bHQncyBhdCB0aGlzIHBvaW50LlxuLy8gYWxyZWFkeSByZXBsYWNlZCB0aGUgaHlwaGVuIHJhbmdlc1xuLy8gdHVybiBpbnRvIGEgc2V0IG9mIEpVU1QgY29tcGFyYXRvcnMuXG5mdW5jdGlvbiBwYXJzZUNvbXBhcmF0b3IoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ2NvbXAnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VDYXJldHMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygnY2FyZXQnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VUaWxkZXMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygndGlsZGVzJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlWFJhbmdlcyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCd4cmFuZ2UnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VTdGFycyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCdzdGFycycsIGNvbXApO1xuICByZXR1cm4gY29tcDtcbn1cblxuZnVuY3Rpb24gaXNYKGlkKSB7XG4gIHJldHVybiAhaWQgfHwgaWQudG9Mb3dlckNhc2UoKSA9PT0gJ3gnIHx8IGlkID09PSAnKic7XG59XG5cbi8vIH4sIH4+IC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gfjIsIH4yLngsIH4yLngueCwgfj4yLCB+PjIueCB+PjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gfjIuMCwgfjIuMC54LCB+PjIuMCwgfj4yLjAueCAtLT4gPj0yLjAuMCA8Mi4xLjBcbi8vIH4xLjIsIH4xLjIueCwgfj4xLjIsIH4+MS4yLnggLS0+ID49MS4yLjAgPDEuMy4wXG4vLyB+MS4yLjMsIH4+MS4yLjMgLS0+ID49MS4yLjMgPDEuMy4wXG4vLyB+MS4yLjAsIH4+MS4yLjAgLS0+ID49MS4yLjAgPDEuMy4wXG5mdW5jdGlvbiByZXBsYWNlVGlsZGVzKGNvbXAsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VUaWxkZShjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVRpbGRlKGNvbXAsIGxvb3NlKSB7XG4gIHZhciByID0gbG9vc2UgPyByZVtUSUxERUxPT1NFXSA6IHJlW1RJTERFXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihfLCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCd0aWxkZScsIGNvbXAsIF8sIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgcmV0O1xuXG4gICAgaWYgKGlzWChNKSlcbiAgICAgIHJldCA9ICcnO1xuICAgIGVsc2UgaWYgKGlzWChtKSlcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICBlbHNlIGlmIChpc1gocCkpXG4gICAgICAvLyB+MS4yID09ID49MS4yLjAgPDEuMy4wXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZVRpbGRlIHByJywgcHIpO1xuICAgICAgaWYgKHByLmNoYXJBdCgwKSAhPT0gJy0nKVxuICAgICAgICBwciA9ICctJyArIHByO1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIH0gZWxzZVxuICAgICAgLy8gfjEuMi4zID09ID49MS4yLjMgPDEuMy4wXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuXG4gICAgZGVidWcoJ3RpbGRlIHJldHVybicsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbi8vIF4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyBeMiwgXjIueCwgXjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjIuMCwgXjIuMC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjEuMiwgXjEuMi54IC0tPiA+PTEuMi4wIDwyLjAuMFxuLy8gXjEuMi4zIC0tPiA+PTEuMi4zIDwyLjAuMFxuLy8gXjEuMi4wIC0tPiA+PTEuMi4wIDwyLjAuMFxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0cyhjb21wLCBsb29zZSkge1xuICByZXR1cm4gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlQ2FyZXQoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDYXJldChjb21wLCBsb29zZSkge1xuICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBsb29zZSk7XG4gIHZhciByID0gbG9vc2UgPyByZVtDQVJFVExPT1NFXSA6IHJlW0NBUkVUXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihfLCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCdjYXJldCcsIGNvbXAsIF8sIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgcmV0O1xuXG4gICAgaWYgKGlzWChNKSlcbiAgICAgIHJldCA9ICcnO1xuICAgIGVsc2UgaWYgKGlzWChtKSlcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICBlbHNlIGlmIChpc1gocCkpIHtcbiAgICAgIGlmIChNID09PSAnMCcpXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlQ2FyZXQgcHInLCBwcik7XG4gICAgICBpZiAocHIuY2hhckF0KDApICE9PSAnLScpXG4gICAgICAgIHByID0gJy0nICsgcHI7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArIG0gKyAnLicgKyAoK3AgKyAxKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgJyA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Zygnbm8gcHInKTtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJylcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArIG0gKyAnLicgKyAoK3AgKyAxKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAnIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfVxuXG4gICAgZGVidWcoJ2NhcmV0IHJldHVybicsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VYUmFuZ2VzKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdyZXBsYWNlWFJhbmdlcycsIGNvbXAsIGxvb3NlKTtcbiAgcmV0dXJuIGNvbXAuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlWFJhbmdlKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlWFJhbmdlKGNvbXAsIGxvb3NlKSB7XG4gIGNvbXAgPSBjb21wLnRyaW0oKTtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW1hSQU5HRUxPT1NFXSA6IHJlW1hSQU5HRV07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24ocmV0LCBndGx0LCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCd4UmFuZ2UnLCBjb21wLCByZXQsIGd0bHQsIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgeE0gPSBpc1goTSk7XG4gICAgdmFyIHhtID0geE0gfHwgaXNYKG0pO1xuICAgIHZhciB4cCA9IHhtIHx8IGlzWChwKTtcbiAgICB2YXIgYW55WCA9IHhwO1xuXG4gICAgaWYgKGd0bHQgPT09ICc9JyAmJiBhbnlYKVxuICAgICAgZ3RsdCA9ICcnO1xuXG4gICAgaWYgKHhNKSB7XG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nIHx8IGd0bHQgPT09ICc8Jykge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGFsbG93ZWRcbiAgICAgICAgcmV0ID0gJzwwLjAuMCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGZvcmJpZGRlblxuICAgICAgICByZXQgPSAnKic7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChndGx0ICYmIGFueVgpIHtcbiAgICAgIC8vIHJlcGxhY2UgWCB3aXRoIDBcbiAgICAgIGlmICh4bSlcbiAgICAgICAgbSA9IDA7XG4gICAgICBpZiAoeHApXG4gICAgICAgIHAgPSAwO1xuXG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nKSB7XG4gICAgICAgIC8vID4xID0+ID49Mi4wLjBcbiAgICAgICAgLy8gPjEuMiA9PiA+PTEuMy4wXG4gICAgICAgIC8vID4xLjIuMyA9PiA+PSAxLjIuNFxuICAgICAgICBndGx0ID0gJz49JztcbiAgICAgICAgaWYgKHhtKSB7XG4gICAgICAgICAgTSA9ICtNICsgMTtcbiAgICAgICAgICBtID0gMDtcbiAgICAgICAgICBwID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgICAgIG0gPSArbSArIDE7XG4gICAgICAgICAgcCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ3RsdCA9PT0gJzw9Jykge1xuICAgICAgICAvLyA8PTAuNy54IGlzIGFjdHVhbGx5IDwwLjguMCwgc2luY2UgYW55IDAuNy54IHNob3VsZFxuICAgICAgICAvLyBwYXNzLiAgU2ltaWxhcmx5LCA8PTcueCBpcyBhY3R1YWxseSA8OC4wLjAsIGV0Yy5cbiAgICAgICAgZ3RsdCA9ICc8JztcbiAgICAgICAgaWYgKHhtKVxuICAgICAgICAgIE0gPSArTSArIDE7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBtID0gK20gKyAxO1xuICAgICAgfVxuXG4gICAgICByZXQgPSBndGx0ICsgTSArICcuJyArIG0gKyAnLicgKyBwO1xuICAgIH0gZWxzZSBpZiAoeG0pIHtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIH1cblxuICAgIGRlYnVnKCd4UmFuZ2UgcmV0dXJuJywgcmV0KTtcblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG4vLyBCZWNhdXNlICogaXMgQU5ELWVkIHdpdGggZXZlcnl0aGluZyBlbHNlIGluIHRoZSBjb21wYXJhdG9yLFxuLy8gYW5kICcnIG1lYW5zIFwiYW55IHZlcnNpb25cIiwganVzdCByZW1vdmUgdGhlICpzIGVudGlyZWx5LlxuZnVuY3Rpb24gcmVwbGFjZVN0YXJzKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdyZXBsYWNlU3RhcnMnLCBjb21wLCBsb29zZSk7XG4gIC8vIExvb3NlbmVzcyBpcyBpZ25vcmVkIGhlcmUuICBzdGFyIGlzIGFsd2F5cyBhcyBsb29zZSBhcyBpdCBnZXRzIVxuICByZXR1cm4gY29tcC50cmltKCkucmVwbGFjZShyZVtTVEFSXSwgJycpO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCB0byBzdHJpbmcucmVwbGFjZShyZVtIWVBIRU5SQU5HRV0pXG4vLyBNLCBtLCBwYXRjaCwgcHJlcmVsZWFzZSwgYnVpbGRcbi8vIDEuMiAtIDMuNC41ID0+ID49MS4yLjAgPD0zLjQuNVxuLy8gMS4yLjMgLSAzLjQgPT4gPj0xLjIuMCA8My41LjAgQW55IDMuNC54IHdpbGwgZG9cbi8vIDEuMiAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMFxuZnVuY3Rpb24gaHlwaGVuUmVwbGFjZSgkMCxcbiAgICAgICAgICAgICAgICAgICAgICAgZnJvbSwgZk0sIGZtLCBmcCwgZnByLCBmYixcbiAgICAgICAgICAgICAgICAgICAgICAgdG8sIHRNLCB0bSwgdHAsIHRwciwgdGIpIHtcblxuICBpZiAoaXNYKGZNKSlcbiAgICBmcm9tID0gJyc7XG4gIGVsc2UgaWYgKGlzWChmbSkpXG4gICAgZnJvbSA9ICc+PScgKyBmTSArICcuMC4wJztcbiAgZWxzZSBpZiAoaXNYKGZwKSlcbiAgICBmcm9tID0gJz49JyArIGZNICsgJy4nICsgZm0gKyAnLjAnO1xuICBlbHNlXG4gICAgZnJvbSA9ICc+PScgKyBmcm9tO1xuXG4gIGlmIChpc1godE0pKVxuICAgIHRvID0gJyc7XG4gIGVsc2UgaWYgKGlzWCh0bSkpXG4gICAgdG8gPSAnPCcgKyAoK3RNICsgMSkgKyAnLjAuMCc7XG4gIGVsc2UgaWYgKGlzWCh0cCkpXG4gICAgdG8gPSAnPCcgKyB0TSArICcuJyArICgrdG0gKyAxKSArICcuMCc7XG4gIGVsc2UgaWYgKHRwcilcbiAgICB0byA9ICc8PScgKyB0TSArICcuJyArIHRtICsgJy4nICsgdHAgKyAnLScgKyB0cHI7XG4gIGVsc2VcbiAgICB0byA9ICc8PScgKyB0bztcblxuICByZXR1cm4gKGZyb20gKyAnICcgKyB0bykudHJpbSgpO1xufVxuXG5cbi8vIGlmIEFOWSBvZiB0aGUgc2V0cyBtYXRjaCBBTEwgb2YgaXRzIGNvbXBhcmF0b3JzLCB0aGVuIHBhc3NcblJhbmdlLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24odmVyc2lvbikge1xuICBpZiAoIXZlcnNpb24pXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpXG4gICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0ZXN0U2V0KHRoaXMuc2V0W2ldLCB2ZXJzaW9uKSlcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmZ1bmN0aW9uIHRlc3RTZXQoc2V0LCB2ZXJzaW9uKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFzZXRbaV0udGVzdCh2ZXJzaW9uKSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgLy8gRmluZCB0aGUgc2V0IG9mIHZlcnNpb25zIHRoYXQgYXJlIGFsbG93ZWQgdG8gaGF2ZSBwcmVyZWxlYXNlc1xuICAgIC8vIEZvciBleGFtcGxlLCBeMS4yLjMtcHIuMSBkZXN1Z2FycyB0byA+PTEuMi4zLXByLjEgPDIuMC4wXG4gICAgLy8gVGhhdCBzaG91bGQgYWxsb3cgYDEuMi4zLXByLjJgIHRvIHBhc3MuXG4gICAgLy8gSG93ZXZlciwgYDEuMi40LWFscGhhLm5vdHJlYWR5YCBzaG91bGQgTk9UIGJlIGFsbG93ZWQsXG4gICAgLy8gZXZlbiB0aG91Z2ggaXQncyB3aXRoaW4gdGhlIHJhbmdlIHNldCBieSB0aGUgY29tcGFyYXRvcnMuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYnVnKHNldFtpXS5zZW12ZXIpO1xuICAgICAgaWYgKHNldFtpXS5zZW12ZXIgPT09IEFOWSlcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgYWxsb3dlZCA9IHNldFtpXS5zZW12ZXI7XG4gICAgICAgIGlmIChhbGxvd2VkLm1ham9yID09PSB2ZXJzaW9uLm1ham9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLm1pbm9yID09PSB2ZXJzaW9uLm1pbm9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLnBhdGNoID09PSB2ZXJzaW9uLnBhdGNoKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFZlcnNpb24gaGFzIGEgLXByZSwgYnV0IGl0J3Mgbm90IG9uZSBvZiB0aGUgb25lcyB3ZSBsaWtlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnRzLnNhdGlzZmllcyA9IHNhdGlzZmllcztcbmZ1bmN0aW9uIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgdHJ5IHtcbiAgICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gcmFuZ2UudGVzdCh2ZXJzaW9uKTtcbn1cblxuZXhwb3J0cy5tYXhTYXRpc2Z5aW5nID0gbWF4U2F0aXNmeWluZztcbmZ1bmN0aW9uIG1heFNhdGlzZnlpbmcodmVyc2lvbnMsIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gdmVyc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiByY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pWzBdIHx8IG51bGw7XG59XG5cbmV4cG9ydHMubWluU2F0aXNmeWluZyA9IG1pblNhdGlzZnlpbmc7XG5mdW5jdGlvbiBtaW5TYXRpc2Z5aW5nKHZlcnNpb25zLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIHZlcnNpb25zLmZpbHRlcihmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpO1xuICB9KS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pWzBdIHx8IG51bGw7XG59XG5cbmV4cG9ydHMudmFsaWRSYW5nZSA9IHZhbGlkUmFuZ2U7XG5mdW5jdGlvbiB2YWxpZFJhbmdlKHJhbmdlLCBsb29zZSkge1xuICB0cnkge1xuICAgIC8vIFJldHVybiAnKicgaW5zdGVhZCBvZiAnJyBzbyB0aGF0IHRydXRoaW5lc3Mgd29ya3MuXG4gICAgLy8gVGhpcyB3aWxsIHRocm93IGlmIGl0J3MgaW52YWxpZCBhbnl3YXlcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSkucmFuZ2UgfHwgJyonO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGxlc3MgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZVxuZXhwb3J0cy5sdHIgPSBsdHI7XG5mdW5jdGlvbiBsdHIodmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPCcsIGxvb3NlKTtcbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlLlxuZXhwb3J0cy5ndHIgPSBndHI7XG5mdW5jdGlvbiBndHIodmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPicsIGxvb3NlKTtcbn1cblxuZXhwb3J0cy5vdXRzaWRlID0gb3V0c2lkZTtcbmZ1bmN0aW9uIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsIGhpbG8sIGxvb3NlKSB7XG4gIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcbiAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB2YXIgZ3RmbiwgbHRlZm4sIGx0Zm4sIGNvbXAsIGVjb21wO1xuICBzd2l0Y2ggKGhpbG8pIHtcbiAgICBjYXNlICc+JzpcbiAgICAgIGd0Zm4gPSBndDtcbiAgICAgIGx0ZWZuID0gbHRlO1xuICAgICAgbHRmbiA9IGx0O1xuICAgICAgY29tcCA9ICc+JztcbiAgICAgIGVjb21wID0gJz49JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJzwnOlxuICAgICAgZ3RmbiA9IGx0O1xuICAgICAgbHRlZm4gPSBndGU7XG4gICAgICBsdGZuID0gZ3Q7XG4gICAgICBjb21wID0gJzwnO1xuICAgICAgZWNvbXAgPSAnPD0nO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3QgcHJvdmlkZSBhIGhpbG8gdmFsIG9mIFwiPFwiIG9yIFwiPlwiJyk7XG4gIH1cblxuICAvLyBJZiBpdCBzYXRpc2lmZXMgdGhlIHJhbmdlIGl0IGlzIG5vdCBvdXRzaWRlXG4gIGlmIChzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEZyb20gbm93IG9uLCB2YXJpYWJsZSB0ZXJtcyBhcmUgYXMgaWYgd2UncmUgaW4gXCJndHJcIiBtb2RlLlxuICAvLyBidXQgbm90ZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgZmxpcHBlZCBmb3IgdGhlIFwibHRyXCIgZnVuY3Rpb24uXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByYW5nZS5zZXQubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgY29tcGFyYXRvcnMgPSByYW5nZS5zZXRbaV07XG5cbiAgICB2YXIgaGlnaCA9IG51bGw7XG4gICAgdmFyIGxvdyA9IG51bGw7XG5cbiAgICBjb21wYXJhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBhcmF0b3IpIHtcbiAgICAgIGlmIChjb21wYXJhdG9yLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgICAgIGNvbXBhcmF0b3IgPSBuZXcgQ29tcGFyYXRvcignPj0wLjAuMCcpXG4gICAgICB9XG4gICAgICBoaWdoID0gaGlnaCB8fCBjb21wYXJhdG9yO1xuICAgICAgbG93ID0gbG93IHx8IGNvbXBhcmF0b3I7XG4gICAgICBpZiAoZ3Rmbihjb21wYXJhdG9yLnNlbXZlciwgaGlnaC5zZW12ZXIsIGxvb3NlKSkge1xuICAgICAgICBoaWdoID0gY29tcGFyYXRvcjtcbiAgICAgIH0gZWxzZSBpZiAobHRmbihjb21wYXJhdG9yLnNlbXZlciwgbG93LnNlbXZlciwgbG9vc2UpKSB7XG4gICAgICAgIGxvdyA9IGNvbXBhcmF0b3I7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGUgZWRnZSB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGEgb3BlcmF0b3IgdGhlbiBvdXIgdmVyc2lvblxuICAgIC8vIGlzbid0IG91dHNpZGUgaXRcbiAgICBpZiAoaGlnaC5vcGVyYXRvciA9PT0gY29tcCB8fCBoaWdoLm9wZXJhdG9yID09PSBlY29tcCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBsb3dlc3QgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhbiBvcGVyYXRvciBhbmQgb3VyIHZlcnNpb25cbiAgICAvLyBpcyBsZXNzIHRoYW4gaXQgdGhlbiBpdCBpc24ndCBoaWdoZXIgdGhhbiB0aGUgcmFuZ2VcbiAgICBpZiAoKCFsb3cub3BlcmF0b3IgfHwgbG93Lm9wZXJhdG9yID09PSBjb21wKSAmJlxuICAgICAgICBsdGVmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAobG93Lm9wZXJhdG9yID09PSBlY29tcCAmJiBsdGZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnRzLnByZXJlbGVhc2UgPSBwcmVyZWxlYXNlO1xuZnVuY3Rpb24gcHJlcmVsZWFzZSh2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgcGFyc2VkID0gcGFyc2UodmVyc2lvbiwgbG9vc2UpO1xuICByZXR1cm4gKHBhcnNlZCAmJiBwYXJzZWQucHJlcmVsZWFzZS5sZW5ndGgpID8gcGFyc2VkLnByZXJlbGVhc2UgOiBudWxsO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9zZW12ZXIvc2VtdmVyLmpzXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9wcm9jZXNzLzAuMTEuOS9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFZpZXdNb2RlbCBDb25zdHJ1Y3RvciAmIGRlZmluaXRpb25cbiAqL1xuXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtcbiAgaW5pdFN0YXRlXG59IGZyb20gJy4uL2NvcmUvc3RhdGUnXG5pbXBvcnQge1xuICBidWlsZFxufSBmcm9tICcuL2NvbXBpbGVyJ1xuaW1wb3J0IHtcbiAgaW5pdEV2ZW50cyxcbiAgbWl4aW5FdmVudHNcbn0gZnJvbSAnLi9ldmVudHMnXG5cbi8qKlxuICogVmlld01vZGVsIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zICAgIGNvbXBvbmVudCBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyZW50Vm0gICB3aGljaCBjb250YWlucyBfYXBwXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyZW50RWwgICByb290IGVsZW1lbnQgb3IgZnJhZyBibG9ja1xuICogQHBhcmFtIHtvYmplY3R9IG1lcmdlZERhdGEgZXh0ZXJuYWwgZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IGV4dGVybmFsRXZlbnRzIGV4dGVybmFsIGV2ZW50c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWbSAoXG4gIHR5cGUsXG4gIG9wdGlvbnMsXG4gIHBhcmVudFZtLFxuICBwYXJlbnRFbCxcbiAgbWVyZ2VkRGF0YSxcbiAgZXh0ZXJuYWxFdmVudHNcbikge1xuICB0aGlzLl9wYXJlbnQgPSBwYXJlbnRWbS5fcmVhbFBhcmVudCA/IHBhcmVudFZtLl9yZWFsUGFyZW50IDogcGFyZW50Vm1cbiAgdGhpcy5fYXBwID0gcGFyZW50Vm0uX2FwcFxuICBwYXJlbnRWbS5fY2hpbGRyZW5WbXMgJiYgcGFyZW50Vm0uX2NoaWxkcmVuVm1zLnB1c2godGhpcylcblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gdGhpcy5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcFt0eXBlXSB8fCB7fVxuICB9XG4gIGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGEgfHwge31cblxuICB0aGlzLl9vcHRpb25zID0gb3B0aW9uc1xuICB0aGlzLl9tZXRob2RzID0gb3B0aW9ucy5tZXRob2RzIHx8IHt9XG4gIHRoaXMuX2NvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCB7fVxuICB0aGlzLl9jc3MgPSBvcHRpb25zLnN0eWxlIHx8IHt9XG4gIHRoaXMuX2lkcyA9IHt9XG4gIHRoaXMuX3ZtRXZlbnRzID0ge31cbiAgdGhpcy5fY2hpbGRyZW5WbXMgPSBbXVxuICB0aGlzLl90eXBlID0gdHlwZVxuXG4gIC8vIGJpbmQgZXZlbnRzIGFuZCBsaWZlY3ljbGVzXG4gIGluaXRFdmVudHModGhpcywgZXh0ZXJuYWxFdmVudHMpXG5cbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gXCJpbml0XCIgbGlmZWN5Y2xlIGluIFZtKCR7dGhpcy5fdHlwZX0pYClcbiAgdGhpcy4kZW1pdCgnaG9vazppbml0JylcbiAgdGhpcy5faW5pdGVkID0gdHJ1ZVxuXG4gIC8vIHByb3h5IGRhdGEgYW5kIG1ldGhvZHNcbiAgLy8gb2JzZXJ2ZSBkYXRhIGFuZCBhZGQgdGhpcyB0byB2bXNcbiAgdGhpcy5fZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nID8gZGF0YSgpIDogZGF0YVxuICBpZiAobWVyZ2VkRGF0YSkge1xuICAgIGV4dGVuZCh0aGlzLl9kYXRhLCBtZXJnZWREYXRhKVxuICB9XG4gIGluaXRTdGF0ZSh0aGlzKVxuXG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFwiY3JlYXRlZFwiIGxpZmVjeWNsZSBpbiBWbSgke3RoaXMuX3R5cGV9KWApXG4gIHRoaXMuJGVtaXQoJ2hvb2s6Y3JlYXRlZCcpXG4gIHRoaXMuX2NyZWF0ZWQgPSB0cnVlXG5cbiAgLy8gYmFja3dhcmQgb2xkIHJlYWR5IGVudHJ5XG4gIGlmIChvcHRpb25zLm1ldGhvZHMgJiYgb3B0aW9ucy5tZXRob2RzLnJlYWR5KSB7XG4gICAgY29uc29sZS53YXJuKCdcImV4cG9ydHMubWV0aG9kcy5yZWFkeVwiIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgJ3BsZWFzZSB1c2UgXCJleHBvcnRzLmNyZWF0ZWRcIiBpbnN0ZWFkJylcbiAgICBvcHRpb25zLm1ldGhvZHMucmVhZHkuY2FsbCh0aGlzKVxuICB9XG5cbiAgLy8gaWYgbm8gcGFyZW50RWxlbWVudCB0aGVuIHNwZWNpZnkgdGhlIGRvY3VtZW50RWxlbWVudFxuICB0aGlzLl9wYXJlbnRFbCA9IHBhcmVudEVsIHx8IHRoaXMuX2FwcC5kb2MuZG9jdW1lbnRFbGVtZW50XG4gIGJ1aWxkKHRoaXMpXG59XG5cbm1peGluRXZlbnRzKFZtLnByb3RvdHlwZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3ZtL2luZGV4LmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IFdhdGNoZXIgZnJvbSAnLi93YXRjaGVyJ1xuaW1wb3J0IERlcCBmcm9tICcuL2RlcCdcbmltcG9ydCB7XG4gIG9ic2VydmUsXG4gIHByb3h5LFxuICB1bnByb3h5XG59IGZyb20gJy4vb2JzZXJ2ZXInXG5pbXBvcnQge1xuICBpc1BsYWluT2JqZWN0LFxuICBiaW5kXG59IGZyb20gJy4uL3V0aWwnXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RhdGUgKHZtKSB7XG4gIHZtLl93YXRjaGVycyA9IFtdXG4gIGluaXREYXRhKHZtKVxuICBpbml0Q29tcHV0ZWQodm0pXG4gIGluaXRNZXRob2RzKHZtKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdERhdGEgKHZtKSB7XG4gIGxldCBkYXRhID0gdm0uX2RhdGFcblxuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICBkYXRhID0ge31cbiAgfVxuICAvLyBwcm94eSBkYXRhIG9uIGluc3RhbmNlXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKVxuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBwcm94eSh2bSwga2V5c1tpXSlcbiAgfVxuICAvLyBvYnNlcnZlIGRhdGFcbiAgb2JzZXJ2ZShkYXRhLCB2bSlcbn1cblxuZnVuY3Rpb24gbm9vcCAoKSB7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Q29tcHV0ZWQgKHZtKSB7XG4gIGNvbnN0IGNvbXB1dGVkID0gdm0uX2NvbXB1dGVkXG4gIGlmIChjb21wdXRlZCkge1xuICAgIGZvciAobGV0IGtleSBpbiBjb21wdXRlZCkge1xuICAgICAgY29uc3QgdXNlckRlZiA9IGNvbXB1dGVkW2tleV1cbiAgICAgIGNvbnN0IGRlZiA9IHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGVmLmdldCA9IG1ha2VDb21wdXRlZEdldHRlcih1c2VyRGVmLCB2bSlcbiAgICAgICAgZGVmLnNldCA9IG5vb3BcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZi5nZXQgPSB1c2VyRGVmLmdldFxuICAgICAgICAgID8gdXNlckRlZi5jYWNoZSAhPT0gZmFsc2VcbiAgICAgICAgICAgID8gbWFrZUNvbXB1dGVkR2V0dGVyKHVzZXJEZWYuZ2V0LCB2bSlcbiAgICAgICAgICAgIDogYmluZCh1c2VyRGVmLmdldCwgdm0pXG4gICAgICAgICAgOiBub29wXG4gICAgICAgIGRlZi5zZXQgPSB1c2VyRGVmLnNldFxuICAgICAgICAgID8gYmluZCh1c2VyRGVmLnNldCwgdm0pXG4gICAgICAgICAgOiBub29wXG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodm0sIGtleSwgZGVmKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlQ29tcHV0ZWRHZXR0ZXIgKGdldHRlciwgb3duZXIpIHtcbiAgY29uc3Qgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKG93bmVyLCBnZXR0ZXIsIG51bGwsIHtcbiAgICBsYXp5OiB0cnVlXG4gIH0pXG4gIHJldHVybiBmdW5jdGlvbiBjb21wdXRlZEdldHRlciAoKSB7XG4gICAgaWYgKHdhdGNoZXIuZGlydHkpIHtcbiAgICAgIHdhdGNoZXIuZXZhbHVhdGUoKVxuICAgIH1cbiAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgd2F0Y2hlci5kZXBlbmQoKVxuICAgIH1cbiAgICByZXR1cm4gd2F0Y2hlci52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0TWV0aG9kcyAodm0pIHtcbiAgY29uc3QgbWV0aG9kcyA9IHZtLl9tZXRob2RzXG4gIGlmIChtZXRob2RzKSB7XG4gICAgZm9yIChsZXQga2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIHZtW2tleV0gPSBtZXRob2RzW2tleV1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2NvcmUvc3RhdGUuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgRGVwLCB7IHB1c2hUYXJnZXQsIHBvcFRhcmdldCB9IGZyb20gJy4vZGVwJ1xuLy8gaW1wb3J0IHsgcHVzaFdhdGNoZXIgfSBmcm9tICcuL2JhdGNoZXInXG5pbXBvcnQge1xuICB3YXJuLFxuICByZW1vdmUsXG4gIGV4dGVuZCxcbiAgaXNPYmplY3QsXG4gIHBhcnNlUGF0aCxcbiAgY3JlYXRlTmV3U2V0XG4gIC8vIF9TZXQgYXMgU2V0XG59IGZyb20gJy4uL3V0aWwnXG5cbmxldCB1aWQgPSAwXG5cbi8qKlxuICogQSB3YXRjaGVyIHBhcnNlcyBhbiBleHByZXNzaW9uLCBjb2xsZWN0cyBkZXBlbmRlbmNpZXMsXG4gKiBhbmQgZmlyZXMgY2FsbGJhY2sgd2hlbiB0aGUgZXhwcmVzc2lvbiB2YWx1ZSBjaGFuZ2VzLlxuICogVGhpcyBpcyB1c2VkIGZvciBib3RoIHRoZSAkd2F0Y2goKSBhcGkgYW5kIGRpcmVjdGl2ZXMuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gZXhwT3JGblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiAgICAgICAgICAgICAgICAgLSB7QXJyYXl9IGZpbHRlcnNcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSB0d29XYXlcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBkZWVwXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gdXNlclxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHN5bmNcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBsYXp5XG4gKiAgICAgICAgICAgICAgICAgLSB7RnVuY3Rpb259IFtwcmVQcm9jZXNzXVxuICogICAgICAgICAgICAgICAgIC0ge0Z1bmN0aW9ufSBbcG9zdFByb2Nlc3NdXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYXRjaGVyICh2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpIHtcbiAgLy8gbWl4IGluIG9wdGlvbnNcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBleHRlbmQodGhpcywgb3B0aW9ucylcbiAgfVxuICBjb25zdCBpc0ZuID0gdHlwZW9mIGV4cE9yRm4gPT09ICdmdW5jdGlvbidcbiAgdGhpcy52bSA9IHZtXG4gIHZtLl93YXRjaGVycy5wdXNoKHRoaXMpXG4gIHRoaXMuZXhwcmVzc2lvbiA9IGV4cE9yRm5cbiAgdGhpcy5jYiA9IGNiXG4gIHRoaXMuaWQgPSArK3VpZCAvLyB1aWQgZm9yIGJhdGNoaW5nXG4gIHRoaXMuYWN0aXZlID0gdHJ1ZVxuICB0aGlzLmRpcnR5ID0gdGhpcy5sYXp5IC8vIGZvciBsYXp5IHdhdGNoZXJzXG4gIHRoaXMuZGVwcyA9IFtdXG4gIHRoaXMubmV3RGVwcyA9IFtdXG4gIHRoaXMuZGVwSWRzID0gY3JlYXRlTmV3U2V0KCkgLy8gbmV3IFNldCgpXG4gIHRoaXMubmV3RGVwSWRzID0gY3JlYXRlTmV3U2V0KCkgLy8gbmV3IFNldCgpXG4gIC8vIHBhcnNlIGV4cHJlc3Npb24gZm9yIGdldHRlclxuICBpZiAoaXNGbikge1xuICAgIHRoaXMuZ2V0dGVyID0gZXhwT3JGblxuICB9IGVsc2Uge1xuICAgIHRoaXMuZ2V0dGVyID0gcGFyc2VQYXRoKGV4cE9yRm4pXG4gICAgaWYgKCF0aGlzLmdldHRlcikge1xuICAgICAgdGhpcy5nZXR0ZXIgPSBmdW5jdGlvbiAoKSB7fVxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAnRmFpbGVkIHdhdGNoaW5nIHBhdGg6ICcgKyBleHBPckZuICtcbiAgICAgICAgJ1dhdGNoZXIgb25seSBhY2NlcHRzIHNpbXBsZSBkb3QtZGVsaW1pdGVkIHBhdGhzLiAnICtcbiAgICAgICAgJ0ZvciBmdWxsIGNvbnRyb2wsIHVzZSBhIGZ1bmN0aW9uIGluc3RlYWQuJyxcbiAgICAgICAgdm1cbiAgICAgIClcbiAgICB9XG4gIH1cbiAgdGhpcy52YWx1ZSA9IHRoaXMubGF6eVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiB0aGlzLmdldCgpXG4gIC8vIHN0YXRlIGZvciBhdm9pZGluZyBmYWxzZSB0cmlnZ2VycyBmb3IgZGVlcCBhbmQgQXJyYXlcbiAgLy8gd2F0Y2hlcnMgZHVyaW5nIHZtLl9kaWdlc3QoKVxuICB0aGlzLnF1ZXVlZCA9IHRoaXMuc2hhbGxvdyA9IGZhbHNlXG59XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIGdldHRlciwgYW5kIHJlLWNvbGxlY3QgZGVwZW5kZW5jaWVzLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcHVzaFRhcmdldCh0aGlzKVxuICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0dGVyLmNhbGwodGhpcy52bSwgdGhpcy52bSlcbiAgLy8gXCJ0b3VjaFwiIGV2ZXJ5IHByb3BlcnR5IHNvIHRoZXkgYXJlIGFsbCB0cmFja2VkIGFzXG4gIC8vIGRlcGVuZGVuY2llcyBmb3IgZGVlcCB3YXRjaGluZ1xuICBpZiAodGhpcy5kZWVwKSB7XG4gICAgdHJhdmVyc2UodmFsdWUpXG4gIH1cbiAgcG9wVGFyZ2V0KClcbiAgdGhpcy5jbGVhbnVwRGVwcygpXG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKipcbiAqIEFkZCBhIGRlcGVuZGVuY3kgdG8gdGhpcyBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtEZXB9IGRlcFxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmFkZERlcCA9IGZ1bmN0aW9uIChkZXApIHtcbiAgY29uc3QgaWQgPSBkZXAuaWRcbiAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoaWQpKSB7XG4gICAgdGhpcy5uZXdEZXBJZHMuYWRkKGlkKVxuICAgIHRoaXMubmV3RGVwcy5wdXNoKGRlcClcbiAgICBpZiAoIXRoaXMuZGVwSWRzLmhhcyhpZCkpIHtcbiAgICAgIGRlcC5hZGRTdWIodGhpcylcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDbGVhbiB1cCBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmNsZWFudXBEZXBzID0gZnVuY3Rpb24gKCkge1xuICBsZXQgaSA9IHRoaXMuZGVwcy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGRlcCA9IHRoaXMuZGVwc1tpXVxuICAgIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGRlcC5pZCkpIHtcbiAgICAgIGRlcC5yZW1vdmVTdWIodGhpcylcbiAgICB9XG4gIH1cbiAgbGV0IHRtcCA9IHRoaXMuZGVwSWRzXG4gIHRoaXMuZGVwSWRzID0gdGhpcy5uZXdEZXBJZHNcbiAgdGhpcy5uZXdEZXBJZHMgPSB0bXBcbiAgdGhpcy5uZXdEZXBJZHMuY2xlYXIoKVxuICB0bXAgPSB0aGlzLmRlcHNcbiAgdGhpcy5kZXBzID0gdGhpcy5uZXdEZXBzXG4gIHRoaXMubmV3RGVwcyA9IHRtcFxuICB0aGlzLm5ld0RlcHMubGVuZ3RoID0gMFxufVxuXG4vKipcbiAqIFN1YnNjcmliZXIgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgd2hlbiBhIGRlcGVuZGVuY3kgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNoYWxsb3dcbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoc2hhbGxvdykge1xuICBpZiAodGhpcy5sYXp5KSB7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWVcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJ1bigpXG4gIH1cbiAgLy8gfSBlbHNlIGlmICh0aGlzLnN5bmMpIHtcbiAgLy8gICB0aGlzLnJ1bigpXG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgLy8gaWYgcXVldWVkLCBvbmx5IG92ZXJ3cml0ZSBzaGFsbG93IHdpdGggbm9uLXNoYWxsb3csXG4gIC8vICAgLy8gYnV0IG5vdCB0aGUgb3RoZXIgd2F5IGFyb3VuZC5cbiAgLy8gICB0aGlzLnNoYWxsb3cgPSB0aGlzLnF1ZXVlZFxuICAvLyAgICAgPyBzaGFsbG93XG4gIC8vICAgICAgID8gdGhpcy5zaGFsbG93XG4gIC8vICAgICAgIDogZmFsc2VcbiAgLy8gICAgIDogISFzaGFsbG93XG4gIC8vICAgdGhpcy5xdWV1ZWQgPSB0cnVlXG4gIC8vICAgcHVzaFdhdGNoZXIodGhpcylcbiAgLy8gfVxufVxuXG4vKipcbiAqIEJhdGNoZXIgam9iIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBiYXRjaGVyLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldCgpXG4gICAgaWYgKFxuICAgICAgdmFsdWUgIT09IHRoaXMudmFsdWUgfHxcbiAgICAgIC8vIERlZXAgd2F0Y2hlcnMgYW5kIHdhdGNoZXJzIG9uIE9iamVjdC9BcnJheXMgc2hvdWxkIGZpcmUgZXZlblxuICAgICAgLy8gd2hlbiB0aGUgdmFsdWUgaXMgdGhlIHNhbWUsIGJlY2F1c2UgdGhlIHZhbHVlIG1heVxuICAgICAgLy8gaGF2ZSBtdXRhdGVkOyBidXQgb25seSBkbyBzbyBpZiB0aGlzIGlzIGFcbiAgICAgIC8vIG5vbi1zaGFsbG93IHVwZGF0ZSAoY2F1c2VkIGJ5IGEgdm0gZGlnZXN0KS5cbiAgICAgICgoaXNPYmplY3QodmFsdWUpIHx8IHRoaXMuZGVlcCkgJiYgIXRoaXMuc2hhbGxvdylcbiAgICApIHtcbiAgICAgIC8vIHNldCBuZXcgdmFsdWVcbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy52YWx1ZVxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKVxuICAgIH1cbiAgICB0aGlzLnF1ZXVlZCA9IHRoaXMuc2hhbGxvdyA9IGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdmFsdWUgb2YgdGhlIHdhdGNoZXIuXG4gKiBUaGlzIG9ubHkgZ2V0cyBjYWxsZWQgZm9yIGxhenkgd2F0Y2hlcnMuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZXZhbHVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMudmFsdWUgPSB0aGlzLmdldCgpXG4gIHRoaXMuZGlydHkgPSBmYWxzZVxufVxuXG4vKipcbiAqIERlcGVuZCBvbiBhbGwgZGVwcyBjb2xsZWN0ZWQgYnkgdGhpcyB3YXRjaGVyLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGkgPSB0aGlzLmRlcHMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICB0aGlzLmRlcHNbaV0uZGVwZW5kKClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBzZWxmIGZyb20gYWxsIGRlcGVuZGVuY2llcycgc3ViY3JpYmVyIGxpc3QuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gdm0ncyB3YXRjaGVyIGxpc3RcbiAgICAvLyB0aGlzIGlzIGEgc29tZXdoYXQgZXhwZW5zaXZlIG9wZXJhdGlvbiBzbyB3ZSBza2lwIGl0XG4gICAgLy8gaWYgdGhlIHZtIGlzIGJlaW5nIGRlc3Ryb3llZCBvciBpcyBwZXJmb3JtaW5nIGEgdi1mb3JcbiAgICAvLyByZS1yZW5kZXIgKHRoZSB3YXRjaGVyIGxpc3QgaXMgdGhlbiBmaWx0ZXJlZCBieSB2LWZvcikuXG4gICAgaWYgKCF0aGlzLnZtLl9pc0JlaW5nRGVzdHJveWVkICYmICF0aGlzLnZtLl92Rm9yUmVtb3ZpbmcpIHtcbiAgICAgIHJlbW92ZSh0aGlzLnZtLl93YXRjaGVycywgdGhpcylcbiAgICB9XG4gICAgbGV0IGkgPSB0aGlzLmRlcHMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5kZXBzW2ldLnJlbW92ZVN1Yih0aGlzKVxuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlXG4gICAgdGhpcy52bSA9IHRoaXMuY2IgPSB0aGlzLnZhbHVlID0gbnVsbFxuICB9XG59XG5cbi8qKlxuICogUmVjcnVzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcbiAqIGdldHRlcnMsIHNvIHRoYXQgZXZlcnkgbmVzdGVkIHByb3BlcnR5IGluc2lkZSB0aGUgb2JqZWN0XG4gKiBpcyBjb2xsZWN0ZWQgYXMgYSBcImRlZXBcIiBkZXBlbmRlbmN5LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcGFyYW0ge1NldH0gc2VlblxuICovXG5cbmNvbnN0IHNlZW5PYmplY3RzID0gY3JlYXRlTmV3U2V0KCkgLy8gbmV3IFNldCgpXG5mdW5jdGlvbiB0cmF2ZXJzZSAodmFsLCBzZWVuKSB7XG4gIGxldCBpLCBrZXlzLCBpc0EsIGlzT1xuICBpZiAoIXNlZW4pIHtcbiAgICBzZWVuID0gc2Vlbk9iamVjdHNcbiAgICBzZWVuLmNsZWFyKClcbiAgfVxuICBpc0EgPSBBcnJheS5pc0FycmF5KHZhbClcbiAgaXNPID0gaXNPYmplY3QodmFsKVxuICBpZiAoaXNBIHx8IGlzTykge1xuICAgIGlmICh2YWwuX19vYl9fKSB7XG4gICAgICBjb25zdCBkZXBJZCA9IHZhbC5fX29iX18uZGVwLmlkXG4gICAgICBpZiAoc2Vlbi5oYXMoZGVwSWQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vlbi5hZGQoZGVwSWQpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0EpIHtcbiAgICAgIGkgPSB2YWwubGVuZ3RoXG4gICAgICB3aGlsZSAoaS0tKSB0cmF2ZXJzZSh2YWxbaV0sIHNlZW4pXG4gICAgfSBlbHNlIGlmIChpc08pIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpXG4gICAgICBpID0ga2V5cy5sZW5ndGhcbiAgICAgIHdoaWxlIChpLS0pIHRyYXZlcnNlKHZhbFtrZXlzW2ldXSwgc2VlbilcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2NvcmUvd2F0Y2hlci5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IHJlbW92ZSB9IGZyb20gJy4uL3V0aWwnXG5cbmxldCB1aWQgPSAwXG5cbi8qKlxuICogQSBkZXAgaXMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNhbiBoYXZlIG11bHRpcGxlXG4gKiBkaXJlY3RpdmVzIHN1YnNjcmliaW5nIHRvIGl0LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlcCAoKSB7XG4gIHRoaXMuaWQgPSB1aWQrK1xuICB0aGlzLnN1YnMgPSBbXVxufVxuXG4vLyB0aGUgY3VycmVudCB0YXJnZXQgd2F0Y2hlciBiZWluZyBldmFsdWF0ZWQuXG4vLyB0aGlzIGlzIGdsb2JhbGx5IHVuaXF1ZSBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG9ubHkgb25lXG4vLyB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZCBhdCBhbnkgdGltZS5cbkRlcC50YXJnZXQgPSBudWxsXG5sZXQgdGFyZ2V0U3RhY2sgPSBbXVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaFRhcmdldCAoX3RhcmdldCkge1xuICBpZiAoRGVwLnRhcmdldCkgdGFyZ2V0U3RhY2sucHVzaChEZXAudGFyZ2V0KVxuICBEZXAudGFyZ2V0ID0gX3RhcmdldFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wVGFyZ2V0ICgpIHtcbiAgRGVwLnRhcmdldCA9IHRhcmdldFN0YWNrLnBvcCgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFRhcmdldCAoKSB7XG4gIERlcC50YXJnZXQgPSBudWxsXG4gIHRhcmdldFN0YWNrID0gW11cbn1cblxuLyoqXG4gKiBBZGQgYSBkaXJlY3RpdmUgc3Vic2NyaWJlci5cbiAqXG4gKiBAcGFyYW0ge0RpcmVjdGl2ZX0gc3ViXG4gKi9cblxuRGVwLnByb3RvdHlwZS5hZGRTdWIgPSBmdW5jdGlvbiAoc3ViKSB7XG4gIHRoaXMuc3Vicy5wdXNoKHN1Yilcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBkaXJlY3RpdmUgc3Vic2NyaWJlci5cbiAqXG4gKiBAcGFyYW0ge0RpcmVjdGl2ZX0gc3ViXG4gKi9cblxuRGVwLnByb3RvdHlwZS5yZW1vdmVTdWIgPSBmdW5jdGlvbiAoc3ViKSB7XG4gIHJlbW92ZSh0aGlzLnN1YnMsIHN1Yilcbn1cblxuLyoqXG4gKiBBZGQgc2VsZiBhcyBhIGRlcGVuZGVuY3kgdG8gdGhlIHRhcmdldCB3YXRjaGVyLlxuICovXG5cbkRlcC5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gKCkge1xuICBpZiAoRGVwLnRhcmdldCkge1xuICAgIERlcC50YXJnZXQuYWRkRGVwKHRoaXMpXG4gIH1cbn1cblxuLyoqXG4gKiBOb3RpZnkgYWxsIHN1YnNjcmliZXJzIG9mIGEgbmV3IHZhbHVlLlxuICovXG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAvLyBzdGFibGl6ZSB0aGUgc3Vic2NyaWJlciBsaXN0IGZpcnN0XG4gIGNvbnN0IHN1YnMgPSB0aGlzLnN1YnMuc2xpY2UoKVxuICBmb3IgKGxldCBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3Vic1tpXS51cGRhdGUoKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9jb3JlL2RlcC5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCBEZXAgZnJvbSAnLi9kZXAnXG5pbXBvcnQgeyBhcnJheU1ldGhvZHMgfSBmcm9tICcuL2FycmF5J1xuaW1wb3J0IHtcbiAgZGVmLFxuICByZW1vdmUsXG4gIGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0LFxuICBoYXNQcm90byxcbiAgaGFzT3duLFxuICBpc1Jlc2VydmVkXG59IGZyb20gJy4uL3V0aWwnXG5cbmNvbnN0IGFycmF5S2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFycmF5TWV0aG9kcylcblxuLyoqXG4gKiBPYnNlcnZlciBjbGFzcyB0aGF0IGFyZSBhdHRhY2hlZCB0byBlYWNoIG9ic2VydmVkXG4gKiBvYmplY3QuIE9uY2UgYXR0YWNoZWQsIHRoZSBvYnNlcnZlciBjb252ZXJ0cyB0YXJnZXRcbiAqIG9iamVjdCdzIHByb3BlcnR5IGtleXMgaW50byBnZXR0ZXIvc2V0dGVycyB0aGF0XG4gKiBjb2xsZWN0IGRlcGVuZGVuY2llcyBhbmQgZGlzcGF0Y2hlcyB1cGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSB2YWx1ZVxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIE9ic2VydmVyICh2YWx1ZSkge1xuICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgdGhpcy5kZXAgPSBuZXcgRGVwKClcbiAgZGVmKHZhbHVlLCAnX19vYl9fJywgdGhpcylcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgY29uc3QgYXVnbWVudCA9IGhhc1Byb3RvXG4gICAgICA/IHByb3RvQXVnbWVudFxuICAgICAgOiBjb3B5QXVnbWVudFxuICAgIGF1Z21lbnQodmFsdWUsIGFycmF5TWV0aG9kcywgYXJyYXlLZXlzKVxuICAgIHRoaXMub2JzZXJ2ZUFycmF5KHZhbHVlKVxuICB9IGVsc2Uge1xuICAgIHRoaXMud2Fsayh2YWx1ZSlcbiAgfVxufVxuXG4vLyBJbnN0YW5jZSBtZXRob2RzXG5cbi8qKlxuICogV2FsayB0aHJvdWdoIGVhY2ggcHJvcGVydHkgYW5kIGNvbnZlcnQgdGhlbSBpbnRvXG4gKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cbiAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uIChvYmopIHtcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgIHRoaXMuY29udmVydChrZXksIG9ialtrZXldKVxuICB9XG59XG5cbi8qKlxuICogT2JzZXJ2ZSBhIGxpc3Qgb2YgQXJyYXkgaXRlbXMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZUFycmF5ID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gaXRlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgb2JzZXJ2ZShpdGVtc1tpXSlcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBwcm9wZXJ0eSBpbnRvIGdldHRlci9zZXR0ZXIgc28gd2UgY2FuIGVtaXRcbiAqIHRoZSBldmVudHMgd2hlbiB0aGUgcHJvcGVydHkgaXMgYWNjZXNzZWQvY2hhbmdlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5jb252ZXJ0ID0gZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gIGRlZmluZVJlYWN0aXZlKHRoaXMudmFsdWUsIGtleSwgdmFsKVxufVxuXG4vKipcbiAqIEFkZCBhbiBvd25lciB2bSwgc28gdGhhdCB3aGVuICRzZXQvJGRlbGV0ZSBtdXRhdGlvbnNcbiAqIGhhcHBlbiB3ZSBjYW4gbm90aWZ5IG93bmVyIHZtcyB0byBwcm94eSB0aGUga2V5cyBhbmRcbiAqIGRpZ2VzdCB0aGUgd2F0Y2hlcnMuIFRoaXMgaXMgb25seSBjYWxsZWQgd2hlbiB0aGUgb2JqZWN0XG4gKiBpcyBvYnNlcnZlZCBhcyBhbiBpbnN0YW5jZSdzIHJvb3QgJGRhdGEuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLmFkZFZtID0gZnVuY3Rpb24gKHZtKSB7XG4gICh0aGlzLnZtcyB8fCAodGhpcy52bXMgPSBbXSkpLnB1c2godm0pXG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIG93bmVyIHZtLiBUaGlzIGlzIGNhbGxlZCB3aGVuIHRoZSBvYmplY3QgaXNcbiAqIHN3YXBwZWQgb3V0IGFzIGFuIGluc3RhbmNlJ3MgJGRhdGEgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5yZW1vdmVWbSA9IGZ1bmN0aW9uICh2bSkge1xuICByZW1vdmUodGhpcy52bXMsIHZtKVxufVxuXG4vLyBoZWxwZXJzXG5cbi8qKlxuICogQXVnbWVudCBhbiB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGludGVyY2VwdGluZ1xuICogdGhlIHByb3RvdHlwZSBjaGFpbiB1c2luZyBfX3Byb3RvX19cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gdGFyZ2V0XG4gKiBAcGFyYW0ge09iamVjdH0gc3JjXG4gKi9cblxuZnVuY3Rpb24gcHJvdG9BdWdtZW50ICh0YXJnZXQsIHNyYykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuICB0YXJnZXQuX19wcm90b19fID0gc3JjXG4gIC8qIGVzbGludC1lbmFibGUgbm8tcHJvdG8gKi9cbn1cblxuLyoqXG4gKiBBdWdtZW50IGFuIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgZGVmaW5pbmdcbiAqIGhpZGRlbiBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSB0YXJnZXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90b1xuICovXG5cbmZ1bmN0aW9uIGNvcHlBdWdtZW50ICh0YXJnZXQsIHNyYywga2V5cykge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0ga2V5c1tpXVxuICAgIGRlZih0YXJnZXQsIGtleSwgc3JjW2tleV0pXG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0IHRvIGNyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBmb3IgYSB2YWx1ZSxcbiAqIHJldHVybnMgdGhlIG5ldyBvYnNlcnZlciBpZiBzdWNjZXNzZnVsbHkgb2JzZXJ2ZWQsXG4gKiBvciB0aGUgZXhpc3Rpbmcgb2JzZXJ2ZXIgaWYgdGhlIHZhbHVlIGFscmVhZHkgaGFzIG9uZS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge1Z1ZX0gW3ZtXVxuICogQHJldHVybiB7T2JzZXJ2ZXJ8dW5kZWZpbmVkfVxuICogQHN0YXRpY1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlICh2YWx1ZSwgdm0pIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBsZXQgb2JcbiAgaWYgKGhhc093bih2YWx1ZSwgJ19fb2JfXycpICYmIHZhbHVlLl9fb2JfXyBpbnN0YW5jZW9mIE9ic2VydmVyKSB7XG4gICAgb2IgPSB2YWx1ZS5fX29iX19cbiAgfSBlbHNlIGlmIChcbiAgICAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpICYmXG4gICAgT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSkgJiZcbiAgICAhdmFsdWUuX2lzVnVlXG4gICkge1xuICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlKVxuICB9XG4gIGlmIChvYiAmJiB2bSkge1xuICAgIG9iLmFkZFZtKHZtKVxuICB9XG4gIHJldHVybiBvYlxufVxuXG4vKipcbiAqIERlZmluZSBhIHJlYWN0aXZlIHByb3BlcnR5IG9uIGFuIE9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVSZWFjdGl2ZSAob2JqLCBrZXksIHZhbCkge1xuICBjb25zdCBkZXAgPSBuZXcgRGVwKClcblxuICBjb25zdCBwcm9wZXJ0eSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpXG4gIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBjYXRlciBmb3IgcHJlLWRlZmluZWQgZ2V0dGVyL3NldHRlcnNcbiAgY29uc3QgZ2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuZ2V0XG4gIGNvbnN0IHNldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LnNldFxuXG4gIGxldCBjaGlsZE9iID0gb2JzZXJ2ZSh2YWwpXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gcmVhY3RpdmVHZXR0ZXIgKCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsXG4gICAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgICBkZXAuZGVwZW5kKClcbiAgICAgICAgaWYgKGNoaWxkT2IpIHtcbiAgICAgICAgICBjaGlsZE9iLmRlcC5kZXBlbmQoKVxuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIGZvciAobGV0IGUsIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBlID0gdmFsdWVbaV1cbiAgICAgICAgICAgIGUgJiYgZS5fX29iX18gJiYgZS5fX29iX18uZGVwLmRlcGVuZCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gcmVhY3RpdmVTZXR0ZXIgKG5ld1ZhbCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsXG4gICAgICBpZiAobmV3VmFsID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgICAgc2V0dGVyLmNhbGwob2JqLCBuZXdWYWwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBuZXdWYWxcbiAgICAgIH1cbiAgICAgIGNoaWxkT2IgPSBvYnNlcnZlKG5ld1ZhbClcbiAgICAgIGRlcC5ub3RpZnkoKVxuICAgIH1cbiAgfSlcbn1cblxuLyoqXG4gKiBTZXQgYSBwcm9wZXJ0eSBvbiBhbiBvYmplY3QuIEFkZHMgdGhlIG5ldyBwcm9wZXJ0eSBhbmRcbiAqIHRyaWdnZXJzIGNoYW5nZSBub3RpZmljYXRpb24gaWYgdGhlIHByb3BlcnR5IGRvZXNuJ3RcbiAqIGFscmVhZHkgZXhpc3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEBwdWJsaWNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0IChvYmosIGtleSwgdmFsKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqLnNwbGljZShrZXksIDEsIHZhbClcbiAgfVxuICBpZiAoaGFzT3duKG9iaiwga2V5KSkge1xuICAgIG9ialtrZXldID0gdmFsXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKG9iai5faXNWdWUpIHtcbiAgICBzZXQob2JqLl9kYXRhLCBrZXksIHZhbClcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBvYiA9IG9iai5fX29iX19cbiAgaWYgKCFvYikge1xuICAgIG9ialtrZXldID0gdmFsXG4gICAgcmV0dXJuXG4gIH1cbiAgb2IuY29udmVydChrZXksIHZhbClcbiAgb2IuZGVwLm5vdGlmeSgpXG4gIGlmIChvYi52bXMpIHtcbiAgICBsZXQgaSA9IG9iLnZtcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjb25zdCB2bSA9IG9iLnZtc1tpXVxuICAgICAgcHJveHkodm0sIGtleSlcbiAgICAgIHZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuLyoqXG4gKiBEZWxldGUgYSBwcm9wZXJ0eSBhbmQgdHJpZ2dlciBjaGFuZ2UgaWYgbmVjZXNzYXJ5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsIChvYmosIGtleSkge1xuICBpZiAoIWhhc093bihvYmosIGtleSkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBkZWxldGUgb2JqW2tleV1cbiAgY29uc3Qgb2IgPSBvYmouX19vYl9fXG5cbiAgaWYgKCFvYikge1xuICAgIGlmIChvYmouX2lzVnVlKSB7XG4gICAgICBkZWxldGUgb2JqLl9kYXRhW2tleV1cbiAgICAgIG9iai4kZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBvYi5kZXAubm90aWZ5KClcbiAgaWYgKG9iLnZtcykge1xuICAgIGxldCBpID0gb2Iudm1zLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNvbnN0IHZtID0gb2Iudm1zW2ldXG4gICAgICB1bnByb3h5KHZtLCBrZXkpXG4gICAgICB2bS4kZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBLRVlfV09SRFMgPSBbJyRpbmRleCcsICckdmFsdWUnLCAnJGV2ZW50J11cbmV4cG9ydCBmdW5jdGlvbiBwcm94eSAodm0sIGtleSkge1xuICBpZiAoS0VZX1dPUkRTLmluZGV4T2Yoa2V5KSA+IC0xIHx8ICFpc1Jlc2VydmVkKGtleSkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodm0sIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gcHJveHlHZXR0ZXIgKCkge1xuICAgICAgICByZXR1cm4gdm0uX2RhdGFba2V5XVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gcHJveHlTZXR0ZXIgKHZhbCkge1xuICAgICAgICB2bS5fZGF0YVtrZXldID0gdmFsXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5wcm94eSAodm0sIGtleSkge1xuICBpZiAoIWlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgIGRlbGV0ZSB2bVtrZXldXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2NvcmUvb2JzZXJ2ZXIuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgeyBkZWYgfSBmcm9tICcuLi91dGlsJ1xuXG5jb25zdCBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlXG5leHBvcnQgY29uc3QgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKVxuXG4vKipcbiAqIEludGVyY2VwdCBtdXRhdGluZyBtZXRob2RzIGFuZCBlbWl0IGV2ZW50c1xuICovXG5cbjtbXG4gICdwdXNoJyxcbiAgJ3BvcCcsXG4gICdzaGlmdCcsXG4gICd1bnNoaWZ0JyxcbiAgJ3NwbGljZScsXG4gICdzb3J0JyxcbiAgJ3JldmVyc2UnXG5dXG4uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICBjb25zdCBvcmlnaW5hbCA9IGFycmF5UHJvdG9bbWV0aG9kXVxuICBkZWYoYXJyYXlNZXRob2RzLCBtZXRob2QsIGZ1bmN0aW9uIG11dGF0b3IgKCkge1xuICAgIC8vIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzOlxuICAgIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2Nsb3N1cmUtd2l0aC1hcmd1bWVudHNcbiAgICBsZXQgaSA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICBjb25zdCBhcmdzID0gbmV3IEFycmF5KGkpXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgIGNvbnN0IG9iID0gdGhpcy5fX29iX19cbiAgICBsZXQgaW5zZXJ0ZWRcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgIGluc2VydGVkID0gYXJnc1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgIGluc2VydGVkID0gYXJnc1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICAgIGlmIChpbnNlcnRlZCkgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKVxuICAgIC8vIG5vdGlmeSBjaGFuZ2VcbiAgICBvYi5kZXAubm90aWZ5KClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pXG59KVxuXG4vKipcbiAqIFN3YXAgdGhlIGVsZW1lbnQgYXQgdGhlIGdpdmVuIGluZGV4IHdpdGggYSBuZXcgdmFsdWVcbiAqIGFuZCBlbWl0cyBjb3JyZXNwb25kaW5nIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm4geyp9IC0gcmVwbGFjZWQgZWxlbWVudFxuICovXG5cbmRlZihcbiAgYXJyYXlQcm90byxcbiAgJyRzZXQnLFxuICBmdW5jdGlvbiAkc2V0IChpbmRleCwgdmFsKSB7XG4gICAgaWYgKGluZGV4ID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IGluZGV4ICsgMVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDEsIHZhbClbMF1cbiAgfVxuKVxuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCB0byByZW1vdmUgdGhlIGVsZW1lbnQgYXQgZ2l2ZW4gaW5kZXguXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbmRlZihcbiAgYXJyYXlQcm90byxcbiAgJyRyZW1vdmUnLFxuICBmdW5jdGlvbiAkcmVtb3ZlIChpbmRleCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICBpbmRleCA9IHRoaXMuaW5kZXhPZihpbmRleClcbiAgICB9XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS9hcnJheS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogVmlld01vZGVsIHRlbXBsYXRlIHBhcnNlciAmIGRhdGEtYmluZGluZyBwcm9jZXNzXG4gKi9cblxuaW1wb3J0IHtcbiAgZXh0ZW5kLFxuICBpc09iamVjdCxcbiAgYmluZFxufSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtcbiAgaW5pdERhdGEsXG4gIGluaXRDb21wdXRlZFxufSBmcm9tICcuLi9jb3JlL3N0YXRlJ1xuaW1wb3J0IHtcbiAgYmluZEVsZW1lbnQsXG4gIHNldElkLFxuICBiaW5kU3ViVm0sXG4gIGJpbmRTdWJWbUFmdGVySW5pdGlhbGl6ZWQsXG4gIGFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyxcbiAgd2F0Y2hcbn0gZnJvbSAnLi9kaXJlY3RpdmUnXG5pbXBvcnQge1xuICBjcmVhdGVCbG9jayxcbiAgY3JlYXRlQm9keSxcbiAgY3JlYXRlRWxlbWVudCxcbiAgYXR0YWNoVGFyZ2V0LFxuICBtb3ZlVGFyZ2V0LFxuICByZW1vdmVUYXJnZXRcbn0gZnJvbSAnLi9kb20taGVscGVyJ1xuXG4vKipcbiAqIGJ1aWxkKClcbiAqICAgY29tcGlsZSh0ZW1wbGF0ZSwgcGFyZW50Tm9kZSlcbiAqICAgICBpZiAodHlwZSBpcyBjb250ZW50KSBjcmVhdGUgY29udGVudE5vZGVcbiAqICAgICBlbHNlIGlmIChkaXJzIGhhdmUgdi1mb3IpIGZvcmVhY2ggLT4gY3JlYXRlIGNvbnRleHRcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0Rm9yLCBwYXJlbnROb2RlKTogZGlmZihsaXN0KSBvbmNoYW5nZVxuICogICAgIGVsc2UgaWYgKGRpcnMgaGF2ZSB2LWlmKSBhc3NlcnRcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0SWYsIHBhcmVudE5vZGUpOiB0b2dnbGUoc2hvd24pIG9uY2hhbmdlXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBkeW5hbWljKVxuICogICAgICAgLT4gY29tcGlsZSh0ZW1wbGF0ZVdpdGhvdXREeW5hbWljVHlwZSwgcGFyZW50Tm9kZSk6IHdhdGNoKHR5cGUpIG9uY2hhbmdlXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBjdXN0b20pXG4gKiAgICAgICBhZGRDaGlsZFZtKHZtLCBwYXJlbnRWbSlcbiAqICAgICAgIGJ1aWxkKGV4dGVybmFsRGlycylcbiAqICAgICAgIGZvcmVhY2ggY2hpbGROb2RlcyAtPiBjb21waWxlKGNoaWxkTm9kZSwgdGVtcGxhdGUpXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBuYXRpdmUpXG4gKiAgICAgICBzZXQoZGlycyk6IHVwZGF0ZShpZC9hdHRyL3N0eWxlL2NsYXNzKSBvbmNoYW5nZVxuICogICAgICAgYXBwZW5kKHRlbXBsYXRlLCBwYXJlbnROb2RlKVxuICogICAgICAgZm9yZWFjaCBjaGlsZE5vZGVzIC0+IGNvbXBpbGUoY2hpbGROb2RlLCB0ZW1wbGF0ZSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkICh2bSkge1xuICBjb25zdCBvcHQgPSB2bS5fb3B0aW9ucyB8fCB7fVxuICBjb25zdCB0ZW1wbGF0ZSA9IG9wdC50ZW1wbGF0ZSB8fCB7fVxuXG4gIGlmIChvcHQucmVwbGFjZSkge1xuICAgIGlmICh0ZW1wbGF0ZS5jaGlsZHJlbiAmJiB0ZW1wbGF0ZS5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbXBpbGUodm0sIHRlbXBsYXRlLmNoaWxkcmVuWzBdLCB2bS5fcGFyZW50RWwpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tcGlsZSh2bSwgdGVtcGxhdGUuY2hpbGRyZW4sIHZtLl9wYXJlbnRFbClcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgY29tcGlsZSh2bSwgdGVtcGxhdGUsIHZtLl9wYXJlbnRFbClcbiAgfVxuXG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFwicmVhZHlcIiBsaWZlY3ljbGUgaW4gVm0oJHt2bS5fdHlwZX0pYClcbiAgdm0uJGVtaXQoJ2hvb2s6cmVhZHknKVxuICB2bS5fcmVhZHkgPSB0cnVlXG59XG5cbi8qKlxuICogR2VuZXJhdGUgZWxlbWVudHMgYnkgY2hpbGQgb3IgY2hpbGRyZW4gYW5kIGFwcGVuZCB0byBwYXJlbnQgZWxlbWVudHMuXG4gKiBSb290IGVsZW1lbnQgaW5mbyB3b3VsZCBiZSBtZXJnZWQgaWYgaGFzLiBUaGUgZmlyc3QgYXJndW1lbnQgbWF5IGJlIGFuIGFycmF5XG4gKiBpZiB0aGUgcm9vdCBlbGVtZW50IHdpdGggb3B0aW9ucy5yZXBsYWNlIGhhcyBub3Qgb25seSBvbmUgY2hpbGQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9ICAgICAgIGRlc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSAgICAgICBtZXRhXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUgKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgY29uc3QgYXBwID0gdm0uX2FwcCB8fCB7fVxuXG4gIGlmIChhcHAubGFzdFNpZ25hbCA9PT0gLTEpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh0YXJnZXRJc0ZyYWdtZW50KHRhcmdldCkpIHtcbiAgICBjb21waWxlRnJhZ21lbnQodm0sIHRhcmdldCwgZGVzdCwgbWV0YSlcbiAgICByZXR1cm5cbiAgfVxuICBtZXRhID0gbWV0YSB8fCB7fVxuICBpZiAodGFyZ2V0SXNDb250ZW50KHRhcmdldCkpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIFwiY29udGVudFwiIGJsb2NrIGJ5JywgdGFyZ2V0KVxuICAgIHZtLl9jb250ZW50ID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodGFyZ2V0TmVlZENoZWNrUmVwZWF0KHRhcmdldCwgbWV0YSkpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIFwicmVwZWF0XCIgbG9naWMgYnknLCB0YXJnZXQpXG4gICAgaWYgKGRlc3QudHlwZSA9PT0gJ2RvY3VtZW50Jykge1xuICAgICAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBUaGUgcm9vdCBlbGVtZW50IGRvZXNcXCd0IHN1cHBvcnQgYHJlcGVhdGAgZGlyZWN0aXZlIScpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tcGlsZVJlcGVhdCh2bSwgdGFyZ2V0LCBkZXN0KVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBpZiAodGFyZ2V0TmVlZENoZWNrU2hvd24odGFyZ2V0LCBtZXRhKSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgXCJpZlwiIGxvZ2ljIGJ5JywgdGFyZ2V0KVxuICAgIGlmIChkZXN0LnR5cGUgPT09ICdkb2N1bWVudCcpIHtcbiAgICAgIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVGhlIHJvb3QgZWxlbWVudCBkb2VzXFwndCBzdXBwb3J0IGBpZmAgZGlyZWN0aXZlIScpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tcGlsZVNob3duKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpXG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHR5cGVHZXR0ZXIgPSBtZXRhLnR5cGUgfHwgdGFyZ2V0LnR5cGVcbiAgaWYgKHRhcmdldE5lZWRDaGVja1R5cGUodHlwZUdldHRlciwgbWV0YSkpIHtcbiAgICBjb21waWxlVHlwZSh2bSwgdGFyZ2V0LCBkZXN0LCB0eXBlR2V0dGVyLCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHR5cGUgPSB0eXBlR2V0dGVyXG4gIGNvbnN0IGNvbXBvbmVudCA9IHRhcmdldElzQ29tcG9zZWQodm0sIHRhcmdldCwgdHlwZSlcbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgY29tcG9zZWQgY29tcG9uZW50IGJ5JywgdGFyZ2V0KVxuICAgIGNvbXBpbGVDdXN0b21Db21wb25lbnQodm0sIGNvbXBvbmVudCwgdGFyZ2V0LCBkZXN0LCB0eXBlLCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgbmF0aXZlIGNvbXBvbmVudCBieScsIHRhcmdldClcbiAgY29tcGlsZU5hdGl2ZUNvbXBvbmVudCh2bSwgdGFyZ2V0LCBkZXN0LCB0eXBlKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBpcyBhIGZyYWdtZW50IChhbiBhcnJheSkuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXRJc0ZyYWdtZW50ICh0YXJnZXQpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCB0eXBlIGlzIGNvbnRlbnQvc2xvdC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldElzQ29udGVudCAodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQudHlwZSA9PT0gJ2NvbnRlbnQnIHx8IHRhcmdldC50eXBlID09PSAnc2xvdCdcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgbmVlZCB0byBjb21waWxlIGJ5IGEgbGlzdC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gIG1ldGFcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldE5lZWRDaGVja1JlcGVhdCAodGFyZ2V0LCBtZXRhKSB7XG4gIHJldHVybiAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgncmVwZWF0JykgJiYgdGFyZ2V0LnJlcGVhdFxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBuZWVkIHRvIGNvbXBpbGUgYnkgYSBib29sZWFuIHZhbHVlLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSAgbWV0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0TmVlZENoZWNrU2hvd24gKHRhcmdldCwgbWV0YSkge1xuICByZXR1cm4gIW1ldGEuaGFzT3duUHJvcGVydHkoJ3Nob3duJykgJiYgdGFyZ2V0LnNob3duXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IG5lZWQgdG8gY29tcGlsZSBieSBhIGR5bmFtaWMgdHlwZS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd8ZnVuY3Rpb259IHR5cGVHZXR0ZXJcbiAqIEBwYXJhbSAge29iamVjdH0gICAgICAgICAgbWV0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0TmVlZENoZWNrVHlwZSAodHlwZUdldHRlciwgbWV0YSkge1xuICByZXR1cm4gKHR5cGVvZiB0eXBlR2V0dGVyID09PSAnZnVuY3Rpb24nKSAmJiAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgndHlwZScpXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBraW5kIG9mIGNvbXBvbmVudCBpcyBjb21wb3NlZC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICB0eXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXRJc0NvbXBvc2VkICh2bSwgdGFyZ2V0LCB0eXBlKSB7XG4gIGxldCBjb21wb25lbnRcbiAgaWYgKHZtLl9hcHAgJiYgdm0uX2FwcC5jdXN0b21Db21wb25lbnRNYXApIHtcbiAgICBjb21wb25lbnQgPSB2bS5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcFt0eXBlXVxuICB9XG4gIGlmICh2bS5fb3B0aW9ucyAmJiB2bS5fb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgY29tcG9uZW50ID0gdm0uX29wdGlvbnMuY29tcG9uZW50c1t0eXBlXVxuICB9XG4gIGlmICh0YXJnZXQuY29tcG9uZW50KSB7XG4gICAgY29tcG9uZW50ID0gY29tcG9uZW50IHx8IHt9XG4gIH1cbiAgcmV0dXJuIGNvbXBvbmVudFxufVxuXG4vKipcbiAqIENvbXBpbGUgYSBsaXN0IG9mIHRhcmdldHMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVGcmFnbWVudCAodm0sIHRhcmdldCwgZGVzdCwgbWV0YSkge1xuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcbiAgdGFyZ2V0LmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgY29tcGlsZSh2bSwgY2hpbGQsIGZyYWdCbG9jaywgbWV0YSlcbiAgfSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggcmVwZWF0IGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICovXG5mdW5jdGlvbiBjb21waWxlUmVwZWF0ICh2bSwgdGFyZ2V0LCBkZXN0KSB7XG4gIGNvbnN0IHJlcGVhdCA9IHRhcmdldC5yZXBlYXRcbiAgY29uc3Qgb2xkU3R5bGUgPSB0eXBlb2YgcmVwZWF0ID09PSAnZnVuY3Rpb24nXG4gIGxldCBnZXR0ZXIgPSByZXBlYXQuZ2V0dGVyIHx8IHJlcGVhdC5leHByZXNzaW9uIHx8IHJlcGVhdFxuICBpZiAodHlwZW9mIGdldHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGdldHRlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdIH1cbiAgfVxuICBjb25zdCBrZXkgPSByZXBlYXQua2V5IHx8ICckaW5kZXgnXG4gIGNvbnN0IHZhbHVlID0gcmVwZWF0LnZhbHVlIHx8ICckdmFsdWUnXG4gIGNvbnN0IHRyYWNrQnkgPSByZXBlYXQudHJhY2tCeSB8fCB0YXJnZXQudHJhY2tCeSB8fFxuICAgICh0YXJnZXQuYXR0ciAmJiB0YXJnZXQuYXR0ci50cmFja0J5KVxuXG4gIGNvbnN0IGZyYWdCbG9jayA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuICBmcmFnQmxvY2suY2hpbGRyZW4gPSBbXVxuICBmcmFnQmxvY2suZGF0YSA9IFtdXG4gIGZyYWdCbG9jay52bXMgPSBbXVxuXG4gIGJpbmRSZXBlYXQodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCB7IGdldHRlciwga2V5LCB2YWx1ZSwgdHJhY2tCeSwgb2xkU3R5bGUgfSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggaWYgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gbWV0YVxuICovXG5mdW5jdGlvbiBjb21waWxlU2hvd24gKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgY29uc3QgbmV3TWV0YSA9IHsgc2hvd246IHRydWUgfVxuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcblxuICBpZiAoZGVzdC5lbGVtZW50ICYmIGRlc3QuY2hpbGRyZW4pIHtcbiAgICBkZXN0LmNoaWxkcmVuLnB1c2goZnJhZ0Jsb2NrKVxuICB9XG5cbiAgaWYgKG1ldGEucmVwZWF0KSB7XG4gICAgbmV3TWV0YS5yZXBlYXQgPSBtZXRhLnJlcGVhdFxuICB9XG5cbiAgYmluZFNob3duKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggZHluYW1pYyBjb21wb25lbnQgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gICB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIGRlc3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHR5cGVHZXR0ZXJcbiAqL1xuZnVuY3Rpb24gY29tcGlsZVR5cGUgKHZtLCB0YXJnZXQsIGRlc3QsIHR5cGVHZXR0ZXIsIG1ldGEpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVHZXR0ZXIuY2FsbCh2bSlcbiAgY29uc3QgbmV3TWV0YSA9IGV4dGVuZCh7IHR5cGUgfSwgbWV0YSlcbiAgY29uc3QgZnJhZ0Jsb2NrID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG5cbiAgaWYgKGRlc3QuZWxlbWVudCAmJiBkZXN0LmNoaWxkcmVuKSB7XG4gICAgZGVzdC5jaGlsZHJlbi5wdXNoKGZyYWdCbG9jaylcbiAgfVxuXG4gIHdhdGNoKHZtLCB0eXBlR2V0dGVyLCAodmFsdWUpID0+IHtcbiAgICBjb25zdCBuZXdNZXRhID0gZXh0ZW5kKHsgdHlwZTogdmFsdWUgfSwgbWV0YSlcbiAgICByZW1vdmVUYXJnZXQodm0sIGZyYWdCbG9jaywgdHJ1ZSlcbiAgICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbiAgfSlcblxuICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgY29tcG9zZWQgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICovXG5mdW5jdGlvbiBjb21waWxlQ3VzdG9tQ29tcG9uZW50ICh2bSwgY29tcG9uZW50LCB0YXJnZXQsIGRlc3QsIHR5cGUsIG1ldGEpIHtcbiAgY29uc3QgQ3RvciA9IHZtLmNvbnN0cnVjdG9yXG4gIGNvbnN0IHN1YlZtID0gbmV3IEN0b3IodHlwZSwgY29tcG9uZW50LCB2bSwgZGVzdCwgdW5kZWZpbmVkLCB7XG4gICAgJ2hvb2s6aW5pdCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldElkKHZtLCBudWxsLCB0YXJnZXQuaWQsIHRoaXMpXG4gICAgICAvLyBiaW5kIHRlbXBsYXRlIGVhcmxpZXIgYmVjYXVzZSBvZiBsaWZlY3ljbGUgaXNzdWVzXG4gICAgICB0aGlzLl9leHRlcm5hbEJpbmRpbmcgPSB7XG4gICAgICAgIHBhcmVudDogdm0sXG4gICAgICAgIHRlbXBsYXRlOiB0YXJnZXRcbiAgICAgIH1cbiAgICB9LFxuICAgICdob29rOmNyZWF0ZWQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICBiaW5kU3ViVm0odm0sIHRoaXMsIHRhcmdldCwgbWV0YS5yZXBlYXQpXG4gICAgfSxcbiAgICAnaG9vazpyZWFkeSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLl9jb250ZW50KSB7XG4gICAgICAgIGNvbXBpbGVDaGlsZHJlbih2bSwgdGFyZ2V0LCB0aGlzLl9jb250ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCh2bSwgc3ViVm0sIHRhcmdldClcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBlbGVtZW50IGZyb20gdGVtcGxhdGUgYW5kIGF0dGFjaCB0byB0aGUgZGVzdCBpZiBuZWVkZWQuXG4gKiBUaGUgdGltZSB0byBhdHRhY2ggZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBtb2RlIHN0YXR1cyBpcyBub2RlIG9yIHRyZWUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY29tcGlsZU5hdGl2ZUNvbXBvbmVudCAodm0sIHRlbXBsYXRlLCBkZXN0LCB0eXBlKSB7XG4gIGFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyh0ZW1wbGF0ZSlcblxuICBsZXQgZWxlbWVudFxuICBpZiAoZGVzdC5yZWYgPT09ICdfZG9jdW1lbnRFbGVtZW50Jykge1xuICAgIC8vIGlmIGl0cyBwYXJlbnQgaXMgZG9jdW1lbnRFbGVtZW50IHRoZW4gaXQncyBhIGJvZHlcbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGNyZWF0ZSBib2R5IGZvciAke3R5cGV9YClcbiAgICBlbGVtZW50ID0gY3JlYXRlQm9keSh2bSwgdHlwZSlcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGNyZWF0ZSBlbGVtZW50IGZvciAke3R5cGV9YClcbiAgICBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCh2bSwgdHlwZSlcbiAgfVxuXG4gIGlmICghdm0uX3Jvb3RFbCkge1xuICAgIHZtLl9yb290RWwgPSBlbGVtZW50XG4gICAgLy8gYmluZCBldmVudCBlYXJsaWVyIGJlY2F1c2Ugb2YgbGlmZWN5Y2xlIGlzc3Vlc1xuICAgIGNvbnN0IGJpbmRpbmcgPSB2bS5fZXh0ZXJuYWxCaW5kaW5nIHx8IHt9XG4gICAgY29uc3QgdGFyZ2V0ID0gYmluZGluZy50ZW1wbGF0ZVxuICAgIGNvbnN0IHBhcmVudFZtID0gYmluZGluZy5wYXJlbnRcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5ldmVudHMgJiYgcGFyZW50Vm0gJiYgZWxlbWVudCkge1xuICAgICAgZm9yIChjb25zdCB0eXBlIGluIHRhcmdldC5ldmVudHMpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHBhcmVudFZtW3RhcmdldC5ldmVudHNbdHlwZV1dXG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudCh0eXBlLCBiaW5kKGhhbmRsZXIsIHBhcmVudFZtKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJpbmRFbGVtZW50KHZtLCBlbGVtZW50LCB0ZW1wbGF0ZSlcblxuICBpZiAodGVtcGxhdGUuYXR0ciAmJiB0ZW1wbGF0ZS5hdHRyLmFwcGVuZCkgeyAvLyBiYWNrd2FyZCwgYXBwZW5kIHByb3AgaW4gYXR0clxuICAgIHRlbXBsYXRlLmFwcGVuZCA9IHRlbXBsYXRlLmF0dHIuYXBwZW5kXG4gIH1cblxuICBpZiAodGVtcGxhdGUuYXBwZW5kKSB7IC8vIGdpdmUgdGhlIGFwcGVuZCBhdHRyaWJ1dGUgZm9yIGlvcyBhZGFwdGF0aW9uXG4gICAgZWxlbWVudC5hdHRyID0gZWxlbWVudC5hdHRyIHx8IHt9XG4gICAgZWxlbWVudC5hdHRyLmFwcGVuZCA9IHRlbXBsYXRlLmFwcGVuZFxuICB9XG5cbiAgY29uc3QgdHJlZU1vZGUgPSB0ZW1wbGF0ZS5hcHBlbmQgPT09ICd0cmVlJ1xuICBjb25zdCBhcHAgPSB2bS5fYXBwIHx8IHt9XG4gIGlmIChhcHAubGFzdFNpZ25hbCAhPT0gLTEgJiYgIXRyZWVNb2RlKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBhcHBlbmQgc2luZ2xlIG5vZGUgZm9yJywgZWxlbWVudClcbiAgICBhcHAubGFzdFNpZ25hbCA9IGF0dGFjaFRhcmdldCh2bSwgZWxlbWVudCwgZGVzdClcbiAgfVxuICBpZiAoYXBwLmxhc3RTaWduYWwgIT09IC0xKSB7XG4gICAgY29tcGlsZUNoaWxkcmVuKHZtLCB0ZW1wbGF0ZSwgZWxlbWVudClcbiAgfVxuICBpZiAoYXBwLmxhc3RTaWduYWwgIT09IC0xICYmIHRyZWVNb2RlKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBhcHBlbmQgd2hvbGUgdHJlZSBmb3InLCBlbGVtZW50KVxuICAgIGFwcC5sYXN0U2lnbmFsID0gYXR0YWNoVGFyZ2V0KHZtLCBlbGVtZW50LCBkZXN0KVxuICB9XG59XG5cbi8qKlxuICogU2V0IGFsbCBjaGlsZHJlbiB0byBhIGNlcnRhaW4gcGFyZW50IGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICovXG5mdW5jdGlvbiBjb21waWxlQ2hpbGRyZW4gKHZtLCB0ZW1wbGF0ZSwgZGVzdCkge1xuICBjb25zdCBhcHAgPSB2bS5fYXBwIHx8IHt9XG4gIGNvbnN0IGNoaWxkcmVuID0gdGVtcGxhdGUuY2hpbGRyZW5cbiAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgIGNoaWxkcmVuLmV2ZXJ5KChjaGlsZCkgPT4ge1xuICAgICAgY29tcGlsZSh2bSwgY2hpbGQsIGRlc3QpXG4gICAgICByZXR1cm4gYXBwLmxhc3RTaWduYWwgIT09IC0xXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIFdhdGNoIHRoZSBsaXN0IHVwZGF0ZSBhbmQgcmVmcmVzaCB0aGUgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZnJhZ0Jsb2NrIHt2bXMsIGRhdGEsIGNoaWxkcmVufVxuICogQHBhcmFtIHtvYmplY3R9IGluZm8gICAgICB7Z2V0dGVyLCBrZXksIHZhbHVlLCB0cmFja0J5LCBvbGRTdHlsZX1cbiAqL1xuZnVuY3Rpb24gYmluZFJlcGVhdCAodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBpbmZvKSB7XG4gIGNvbnN0IHZtcyA9IGZyYWdCbG9jay52bXNcbiAgY29uc3QgY2hpbGRyZW4gPSBmcmFnQmxvY2suY2hpbGRyZW5cbiAgY29uc3QgeyBnZXR0ZXIsIHRyYWNrQnksIG9sZFN0eWxlIH0gPSBpbmZvXG4gIGNvbnN0IGtleU5hbWUgPSBpbmZvLmtleVxuICBjb25zdCB2YWx1ZU5hbWUgPSBpbmZvLnZhbHVlXG5cbiAgZnVuY3Rpb24gY29tcGlsZUl0ZW0gKGl0ZW0sIGluZGV4LCBjb250ZXh0KSB7XG4gICAgbGV0IG1lcmdlZERhdGFcbiAgICBpZiAob2xkU3R5bGUpIHtcbiAgICAgIG1lcmdlZERhdGEgPSBpdGVtXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgbWVyZ2VkRGF0YVtrZXlOYW1lXSA9IGluZGV4XG4gICAgICAgIGlmICghbWVyZ2VkRGF0YS5oYXNPd25Qcm9wZXJ0eSgnSU5ERVgnKSkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZXJnZWREYXRhLCAnSU5ERVgnLCB7XG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFwiSU5ERVhcIiBpbiByZXBlYXQgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgICAgICAgJ3BsZWFzZSB1c2UgXCIkaW5kZXhcIiBpbnN0ZWFkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBFYWNoIGxpc3QgaXRlbSBtdXN0IGJlIGFuIG9iamVjdCBpbiBvbGQtc3R5bGUgcmVwZWF0LCAnXG4gICAgICAgICAgKyAncGxlYXNlIHVzZSBgcmVwZWF0PXt7diBpbiBsaXN0fX1gIGluc3RlYWQuJylcbiAgICAgICAgbWVyZ2VkRGF0YSA9IHt9XG4gICAgICAgIG1lcmdlZERhdGFba2V5TmFtZV0gPSBpbmRleFxuICAgICAgICBtZXJnZWREYXRhW3ZhbHVlTmFtZV0gPSBpdGVtXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbWVyZ2VkRGF0YSA9IHt9XG4gICAgICBtZXJnZWREYXRhW2tleU5hbWVdID0gaW5kZXhcbiAgICAgIG1lcmdlZERhdGFbdmFsdWVOYW1lXSA9IGl0ZW1cbiAgICB9XG4gICAgY29uc3QgbmV3Q29udGV4dCA9IG1lcmdlQ29udGV4dChjb250ZXh0LCBtZXJnZWREYXRhKVxuICAgIHZtcy5wdXNoKG5ld0NvbnRleHQpXG4gICAgY29tcGlsZShuZXdDb250ZXh0LCB0YXJnZXQsIGZyYWdCbG9jaywgeyByZXBlYXQ6IGl0ZW0gfSlcbiAgfVxuXG4gIGNvbnN0IGxpc3QgPSB3YXRjaEJsb2NrKHZtLCBmcmFnQmxvY2ssIGdldHRlciwgJ3JlcGVhdCcsXG4gICAgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIHRoZSBcInJlcGVhdFwiIGl0ZW0gaGFzIGNoYW5nZWQnLCBkYXRhKVxuICAgICAgaWYgKCFmcmFnQmxvY2sgfHwgIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9sZENoaWxkcmVuID0gY2hpbGRyZW4uc2xpY2UoKVxuICAgICAgY29uc3Qgb2xkVm1zID0gdm1zLnNsaWNlKClcbiAgICAgIGNvbnN0IG9sZERhdGEgPSBmcmFnQmxvY2suZGF0YS5zbGljZSgpXG4gICAgICAvLyAxLiBjb2xsZWN0IGFsbCBuZXcgcmVmcyB0cmFjayBieVxuICAgICAgY29uc3QgdHJhY2tNYXAgPSB7fVxuICAgICAgY29uc3QgcmV1c2VkTWFwID0ge31cbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHJhY2tCeSA/IGl0ZW1bdHJhY2tCeV0gOiAob2xkU3R5bGUgPyBpdGVtW2tleU5hbWVdIDogaW5kZXgpXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoa2V5ID09IG51bGwgfHwga2V5ID09PSAnJykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRyYWNrTWFwW2tleV0gPSBpdGVtXG4gICAgICB9KVxuXG4gICAgICAvLyAyLiByZW1vdmUgdW51c2VkIGVsZW1lbnQgZm9yZWFjaCBvbGQgaXRlbVxuICAgICAgY29uc3QgcmV1c2VkTGlzdCA9IFtdXG4gICAgICBvbGREYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRyYWNrQnkgPyBpdGVtW3RyYWNrQnldIDogKG9sZFN0eWxlID8gaXRlbVtrZXlOYW1lXSA6IGluZGV4KVxuICAgICAgICBpZiAodHJhY2tNYXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHJldXNlZE1hcFtrZXldID0ge1xuICAgICAgICAgICAgaXRlbSwgaW5kZXgsIGtleSxcbiAgICAgICAgICAgIHRhcmdldDogb2xkQ2hpbGRyZW5baW5kZXhdLFxuICAgICAgICAgICAgdm06IG9sZFZtc1tpbmRleF1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV1c2VkTGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmVtb3ZlVGFyZ2V0KHZtLCBvbGRDaGlsZHJlbltpbmRleF0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIDMuIGNyZWF0ZSBuZXcgZWxlbWVudCBmb3JlYWNoIG5ldyBpdGVtXG4gICAgICBjaGlsZHJlbi5sZW5ndGggPSAwXG4gICAgICB2bXMubGVuZ3RoID0gMFxuICAgICAgZnJhZ0Jsb2NrLmRhdGEgPSBkYXRhLnNsaWNlKClcbiAgICAgIGZyYWdCbG9jay51cGRhdGVNYXJrID0gZnJhZ0Jsb2NrLnN0YXJ0XG5cbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHJhY2tCeSA/IGl0ZW1bdHJhY2tCeV0gOiAob2xkU3R5bGUgPyBpdGVtW2tleU5hbWVdIDogaW5kZXgpXG4gICAgICAgIGNvbnN0IHJldXNlZCA9IHJldXNlZE1hcFtrZXldXG4gICAgICAgIGlmIChyZXVzZWQpIHtcbiAgICAgICAgICBpZiAocmV1c2VkLml0ZW0gPT09IHJldXNlZExpc3RbMF0pIHtcbiAgICAgICAgICAgIHJldXNlZExpc3Quc2hpZnQoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldXNlZExpc3QuJHJlbW92ZShyZXVzZWQuaXRlbSlcbiAgICAgICAgICAgIG1vdmVUYXJnZXQodm0sIHJldXNlZC50YXJnZXQsIGZyYWdCbG9jay51cGRhdGVNYXJrLCB0cnVlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKHJldXNlZC50YXJnZXQpXG4gICAgICAgICAgdm1zLnB1c2gocmV1c2VkLnZtKVxuICAgICAgICAgIGlmIChvbGRTdHlsZSkge1xuICAgICAgICAgICAgcmV1c2VkLnZtID0gaXRlbVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldXNlZC52bVt2YWx1ZU5hbWVdID0gaXRlbVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXVzZWQudm1ba2V5TmFtZV0gPSBpbmRleFxuICAgICAgICAgIGZyYWdCbG9jay51cGRhdGVNYXJrID0gcmV1c2VkLnRhcmdldFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbXBpbGVJdGVtKGl0ZW0sIGluZGV4LCB2bSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgZGVsZXRlIGZyYWdCbG9jay51cGRhdGVNYXJrXG4gICAgfVxuICApXG5cbiAgZnJhZ0Jsb2NrLmRhdGEgPSBsaXN0LnNsaWNlKDApXG4gIGxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBjb21waWxlSXRlbShpdGVtLCBpbmRleCwgdm0pXG4gIH0pXG59XG5cbi8qKlxuICogV2F0Y2ggdGhlIGRpc3BsYXkgdXBkYXRlIGFuZCBhZGQvcmVtb3ZlIHRoZSBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9IGZyYWdCbG9ja1xuICogQHBhcmFtICB7b2JqZWN0fSBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGJpbmRTaG93biAodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKSB7XG4gIGNvbnN0IGRpc3BsYXkgPSB3YXRjaEJsb2NrKHZtLCBmcmFnQmxvY2ssIHRhcmdldC5zaG93biwgJ3Nob3duJyxcbiAgICAoZGlzcGxheSkgPT4ge1xuICAgICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gdGhlIFwiaWZcIiBpdGVtIHdhcyBjaGFuZ2VkJywgZGlzcGxheSlcblxuICAgICAgaWYgKCFmcmFnQmxvY2sgfHwgISFmcmFnQmxvY2suZGlzcGxheSA9PT0gISFkaXNwbGF5KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZnJhZ0Jsb2NrLmRpc3BsYXkgPSAhIWRpc3BsYXlcbiAgICAgIGlmIChkaXNwbGF5KSB7XG4gICAgICAgIGNvbXBpbGUodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlbW92ZVRhcmdldCh2bSwgZnJhZ0Jsb2NrLCB0cnVlKVxuICAgICAgfVxuICAgIH1cbiAgKVxuXG4gIGZyYWdCbG9jay5kaXNwbGF5ID0gISFkaXNwbGF5XG4gIGlmIChkaXNwbGF5KSB7XG4gICAgY29tcGlsZSh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG1ldGEpXG4gIH1cbn1cblxuLyoqXG4gKiBXYXRjaCBjYWxjIHZhbHVlIGNoYW5nZXMgYW5kIGFwcGVuZCBjZXJ0YWluIHR5cGUgYWN0aW9uIHRvIGRpZmZlci5cbiAqIEl0IGlzIHVzZWQgZm9yIGlmIG9yIHJlcGVhdCBkYXRhLWJpbmRpbmcgZ2VuZXJhdG9yLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gICBmcmFnQmxvY2tcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBjYWxjXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgdHlwZVxuICogQHBhcmFtICB7ZnVuY3Rpb259IGhhbmRsZXJcbiAqIEByZXR1cm4ge2FueX0gICAgICBpbml0IHZhbHVlIG9mIGNhbGNcbiAqL1xuZnVuY3Rpb24gd2F0Y2hCbG9jayAodm0sIGZyYWdCbG9jaywgY2FsYywgdHlwZSwgaGFuZGxlcikge1xuICBjb25zdCBkaWZmZXIgPSB2bSAmJiB2bS5fYXBwICYmIHZtLl9hcHAuZGlmZmVyXG4gIGNvbnN0IGNvbmZpZyA9IHt9XG4gIGNvbnN0IGRlcHRoID0gKGZyYWdCbG9jay5lbGVtZW50LmRlcHRoIHx8IDApICsgMVxuXG4gIHJldHVybiB3YXRjaCh2bSwgY2FsYywgKHZhbHVlKSA9PiB7XG4gICAgY29uZmlnLmxhdGVzdFZhbHVlID0gdmFsdWVcbiAgICBpZiAoZGlmZmVyICYmICFjb25maWcucmVjb3JkZWQpIHtcbiAgICAgIGRpZmZlci5hcHBlbmQodHlwZSwgZGVwdGgsIGZyYWdCbG9jay5ibG9ja0lkLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhdGVzdFZhbHVlID0gY29uZmlnLmxhdGVzdFZhbHVlXG4gICAgICAgIGhhbmRsZXIobGF0ZXN0VmFsdWUpXG4gICAgICAgIGNvbmZpZy5yZWNvcmRlZCA9IGZhbHNlXG4gICAgICAgIGNvbmZpZy5sYXRlc3RWYWx1ZSA9IHVuZGVmaW5lZFxuICAgICAgfSlcbiAgICB9XG4gICAgY29uZmlnLnJlY29yZGVkID0gdHJ1ZVxuICB9KVxufVxuXG4vKipcbiAqIENsb25lIGEgY29udGV4dCBhbmQgbWVyZ2UgY2VydGFpbiBkYXRhLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gbWVyZ2VkRGF0YVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5mdW5jdGlvbiBtZXJnZUNvbnRleHQgKGNvbnRleHQsIG1lcmdlZERhdGEpIHtcbiAgY29uc3QgbmV3Q29udGV4dCA9IE9iamVjdC5jcmVhdGUoY29udGV4dClcbiAgbmV3Q29udGV4dC5fZGF0YSA9IG1lcmdlZERhdGFcbiAgaW5pdERhdGEobmV3Q29udGV4dClcbiAgaW5pdENvbXB1dGVkKG5ld0NvbnRleHQpXG4gIG5ld0NvbnRleHQuX3JlYWxQYXJlbnQgPSBjb250ZXh0XG4gIHJldHVybiBuZXdDb250ZXh0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC92bS9jb21waWxlci5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogRGlyZWN0aXZlIFBhcnNlclxuICovXG5cbmltcG9ydCB7IGJpbmQsIHR5cG9mIH0gZnJvbSAnLi4vdXRpbCdcblxuaW1wb3J0IFdhdGNoZXIgZnJvbSAnLi4vY29yZS93YXRjaGVyJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5cbmNvbnN0IHsgbmF0aXZlQ29tcG9uZW50TWFwIH0gPSBjb25maWdcblxuY29uc3QgU0VUVEVSUyA9IHtcbiAgYXR0cjogJ3NldEF0dHInLFxuICBzdHlsZTogJ3NldFN0eWxlJyxcbiAgZXZlbnQ6ICdhZGRFdmVudCdcbn1cblxuLyoqXG4gKiBhcHBseSB0aGUgbmF0aXZlIGNvbXBvbmVudCdzIG9wdGlvbnMoc3BlY2lmaWVkIGJ5IHRlbXBsYXRlLnR5cGUpXG4gKiB0byB0aGUgdGVtcGxhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyAodGVtcGxhdGUpIHtcbiAgY29uc3QgeyB0eXBlIH0gPSB0ZW1wbGF0ZVxuICBjb25zdCBvcHRpb25zID0gbmF0aXZlQ29tcG9uZW50TWFwW3R5cGVdXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbnMpIHtcbiAgICAgIGlmICh0ZW1wbGF0ZVtrZXldID09IG51bGwpIHtcbiAgICAgICAgdGVtcGxhdGVba2V5XSA9IG9wdGlvbnNba2V5XVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwb2YodGVtcGxhdGVba2V5XSkgPT09ICdvYmplY3QnICYmXG4gICAgICAgIHR5cG9mKG9wdGlvbnNba2V5XSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAoY29uc3Qgc3Via2V5IGluIG9wdGlvbnNba2V5XSkge1xuICAgICAgICAgIGlmICh0ZW1wbGF0ZVtrZXldW3N1YmtleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgdGVtcGxhdGVba2V5XVtzdWJrZXldID0gb3B0aW9uc1trZXldW3N1YmtleV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIGFsbCBpZCwgYXR0ciwgY2xhc3NuYW1lcywgc3R5bGUsIGV2ZW50cyB0byBhbiBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kRWxlbWVudCAodm0sIGVsLCB0ZW1wbGF0ZSkge1xuICBzZXRJZCh2bSwgZWwsIHRlbXBsYXRlLmlkLCB2bSlcbiAgc2V0QXR0cih2bSwgZWwsIHRlbXBsYXRlLmF0dHIpXG4gIHNldENsYXNzKHZtLCBlbCwgdGVtcGxhdGUuY2xhc3NMaXN0KVxuICBzZXRTdHlsZSh2bSwgZWwsIHRlbXBsYXRlLnN0eWxlKVxuICBiaW5kRXZlbnRzKHZtLCBlbCwgdGVtcGxhdGUuZXZlbnRzKVxufVxuXG4vKipcbiAqIGJpbmQgYWxsIHByb3BzIHRvIHN1YiB2bSBhbmQgYmluZCBhbGwgc3R5bGUsIGV2ZW50cyB0byB0aGUgcm9vdCBlbGVtZW50XG4gKiBvZiB0aGUgc3ViIHZtIGlmIGl0IGRvZXNuJ3QgaGF2ZSBhIHJlcGxhY2VkIG11bHRpLW5vZGUgZnJhZ21lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmRTdWJWbSAodm0sIHN1YlZtLCB0ZW1wbGF0ZSwgcmVwZWF0SXRlbSkge1xuICBzdWJWbSA9IHN1YlZtIHx8IHt9XG4gIHRlbXBsYXRlID0gdGVtcGxhdGUgfHwge31cblxuICBjb25zdCBvcHRpb25zID0gc3ViVm0uX29wdGlvbnMgfHwge31cblxuICAvLyBiaW5kIHByb3BzXG4gIGxldCBwcm9wcyA9IG9wdGlvbnMucHJvcHNcblxuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wcykpIHtcbiAgICBwcm9wcyA9IHByb3BzLnJlZHVjZSgocmVzdWx0LCB2YWx1ZSkgPT4ge1xuICAgICAgcmVzdWx0W3ZhbHVlXSA9IHRydWVcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9LCB7fSlcbiAgfVxuXG4gIG1lcmdlUHJvcHMocmVwZWF0SXRlbSwgcHJvcHMsIHZtLCBzdWJWbSlcbiAgbWVyZ2VQcm9wcyh0ZW1wbGF0ZS5hdHRyLCBwcm9wcywgdm0sIHN1YlZtKVxufVxuXG4vKipcbiAqIG1lcmdlIGNsYXNzIGFuZCBzdHlsZXMgZnJvbSB2bSB0byBzdWIgdm0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kU3ViVm1BZnRlckluaXRpYWxpemVkICh2bSwgc3ViVm0sIHRlbXBsYXRlKSB7XG4gIG1lcmdlQ2xhc3NTdHlsZSh0ZW1wbGF0ZS5jbGFzc0xpc3QsIHZtLCBzdWJWbSlcbiAgbWVyZ2VTdHlsZSh0ZW1wbGF0ZS5zdHlsZSwgdm0sIHN1YlZtKVxufVxuXG4vKipcbiAqIEJpbmQgcHJvcHMgZnJvbSB2bSB0byBzdWIgdm0gYW5kIHdhdGNoIHRoZWlyIHVwZGF0ZXMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlUHJvcHMgKHRhcmdldCwgcHJvcHMsIHZtLCBzdWJWbSkge1xuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVyblxuICB9XG4gIGZvciAoY29uc3Qga2V5IGluIHRhcmdldCkge1xuICAgIGlmICghcHJvcHMgfHwgcHJvcHNba2V5XSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXRba2V5XVxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHdhdGNoKHZtLCB2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBzdWJWbVtrZXldID0gdlxuICAgICAgICB9KVxuICAgICAgICBzdWJWbVtrZXldID0gcmV0dXJuVmFsdWVcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdWJWbVtrZXldID0gdmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBCaW5kIHN0eWxlIGZyb20gdm0gdG8gc3ViIHZtIGFuZCB3YXRjaCB0aGVpciB1cGRhdGVzLlxuICovXG5mdW5jdGlvbiBtZXJnZVN0eWxlICh0YXJnZXQsIHZtLCBzdWJWbSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiB0YXJnZXQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldFtrZXldXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSB3YXRjaCh2bSwgdmFsdWUsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlmIChzdWJWbS5fcm9vdEVsKSB7XG4gICAgICAgICAgc3ViVm0uX3Jvb3RFbC5zZXRTdHlsZShrZXksIHYpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBzdWJWbS5fcm9vdEVsLnNldFN0eWxlKGtleSwgcmV0dXJuVmFsdWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHN1YlZtLl9yb290RWwpIHtcbiAgICAgICAgc3ViVm0uX3Jvb3RFbC5zZXRTdHlsZShrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEJpbmQgY2xhc3MgJiBzdHlsZSBmcm9tIHZtIHRvIHN1YiB2bSBhbmQgd2F0Y2ggdGhlaXIgdXBkYXRlcy5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VDbGFzc1N0eWxlICh0YXJnZXQsIHZtLCBzdWJWbSkge1xuICBjb25zdCBjc3MgPSB2bS5fb3B0aW9ucyAmJiB2bS5fb3B0aW9ucy5zdHlsZSB8fCB7fVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIXN1YlZtLl9yb290RWwpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGNsYXNzTmFtZSA9ICdAb3JpZ2luYWxSb290RWwnXG4gIGNzc1tjbGFzc05hbWVdID0gc3ViVm0uX3Jvb3RFbC5jbGFzc1N0eWxlXG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3NOYW1lIChsaXN0LCBuYW1lKSB7XG4gICAgaWYgKHR5cG9mKGxpc3QpID09PSAnYXJyYXknKSB7XG4gICAgICBsaXN0LnVuc2hpZnQobmFtZSlcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHZhbHVlID0gd2F0Y2godm0sIHRhcmdldCwgdiA9PiB7XG4gICAgICBhZGRDbGFzc05hbWUodiwgY2xhc3NOYW1lKVxuICAgICAgc2V0Q2xhc3NTdHlsZShzdWJWbS5fcm9vdEVsLCBjc3MsIHYpXG4gICAgfSlcbiAgICBhZGRDbGFzc05hbWUodmFsdWUsIGNsYXNzTmFtZSlcbiAgICBzZXRDbGFzc1N0eWxlKHN1YlZtLl9yb290RWwsIGNzcywgdmFsdWUpXG4gIH1cbiAgZWxzZSBpZiAodGFyZ2V0ICE9IG51bGwpIHtcbiAgICBhZGRDbGFzc05hbWUodGFyZ2V0LCBjbGFzc05hbWUpXG4gICAgc2V0Q2xhc3NTdHlsZShzdWJWbS5fcm9vdEVsLCBjc3MsIHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgaWQgdG8gYW4gZWxlbWVudFxuICogZWFjaCBpZCBpcyB1bmlxdWUgaW4gYSB3aG9sZSB2bVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0SWQgKHZtLCBlbCwgaWQsIHRhcmdldCkge1xuICBjb25zdCBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobWFwLCB7XG4gICAgdm06IHtcbiAgICAgIHZhbHVlOiB0YXJnZXQsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgfSxcbiAgICBlbDoge1xuICAgICAgZ2V0OiAoKSA9PiBlbCB8fCB0YXJnZXQuX3Jvb3RFbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICB9XG4gIH0pXG5cbiAgaWYgKHR5cGVvZiBpZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBpZFxuICAgIGlkID0gaGFuZGxlci5jYWxsKHZtKVxuICAgIGlmIChpZCkge1xuICAgICAgdm0uX2lkc1tpZF0gPSBtYXBcbiAgICB9XG4gICAgd2F0Y2godm0sIGhhbmRsZXIsIChuZXdJZCkgPT4ge1xuICAgICAgaWYgKG5ld0lkKSB7XG4gICAgICAgIHZtLl9pZHNbbmV3SWRdID0gbWFwXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBlbHNlIGlmIChpZCAmJiB0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgdm0uX2lkc1tpZF0gPSBtYXBcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgYXR0ciB0byBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHNldEF0dHIgKHZtLCBlbCwgYXR0cikge1xuICBiaW5kRGlyKHZtLCBlbCwgJ2F0dHInLCBhdHRyKVxufVxuXG5mdW5jdGlvbiBzZXRDbGFzc1N0eWxlIChlbCwgY3NzLCBjbGFzc0xpc3QpIHtcbiAgY29uc3QgY2xhc3NTdHlsZSA9IHt9XG4gIGNvbnN0IGxlbmd0aCA9IGNsYXNzTGlzdC5sZW5ndGhcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBjc3NbY2xhc3NMaXN0W2ldXVxuICAgIGlmIChzdHlsZSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICAgICAgY2xhc3NTdHlsZVtrZXldID0gc3R5bGVba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbC5zZXRDbGFzc1N0eWxlKGNsYXNzU3R5bGUpXG59XG5cbi8qKlxuICogYmluZCBjbGFzc25hbWVzIHRvIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0Q2xhc3MgKHZtLCBlbCwgY2xhc3NMaXN0KSB7XG4gIGlmICh0eXBlb2YgY2xhc3NMaXN0ICE9PSAnZnVuY3Rpb24nICYmICFBcnJheS5pc0FycmF5KGNsYXNzTGlzdCkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc0xpc3QpICYmICFjbGFzc0xpc3QubGVuZ3RoKSB7XG4gICAgZWwuc2V0Q2xhc3NTdHlsZSh7fSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHN0eWxlID0gdm0uX29wdGlvbnMgJiYgdm0uX29wdGlvbnMuc3R5bGUgfHwge31cbiAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHdhdGNoKHZtLCBjbGFzc0xpc3QsIHYgPT4ge1xuICAgICAgc2V0Q2xhc3NTdHlsZShlbCwgc3R5bGUsIHYpXG4gICAgfSlcbiAgICBzZXRDbGFzc1N0eWxlKGVsLCBzdHlsZSwgdmFsdWUpXG4gIH1cbiAgZWxzZSB7XG4gICAgc2V0Q2xhc3NTdHlsZShlbCwgc3R5bGUsIGNsYXNzTGlzdClcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgc3R5bGUgdG8gYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRTdHlsZSAodm0sIGVsLCBzdHlsZSkge1xuICBiaW5kRGlyKHZtLCBlbCwgJ3N0eWxlJywgc3R5bGUpXG59XG5cbi8qKlxuICogYWRkIGFuIGV2ZW50IHR5cGUgYW5kIGhhbmRsZXIgdG8gYW4gZWxlbWVudCBhbmQgZ2VuZXJhdGUgYSBkb20gdXBkYXRlXG4gKi9cbmZ1bmN0aW9uIHNldEV2ZW50ICh2bSwgZWwsIHR5cGUsIGhhbmRsZXIpIHtcbiAgZWwuYWRkRXZlbnQodHlwZSwgYmluZChoYW5kbGVyLCB2bSkpXG59XG5cbi8qKlxuICogYWRkIGFsbCBldmVudHMgb2YgYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBiaW5kRXZlbnRzICh2bSwgZWwsIGV2ZW50cykge1xuICBpZiAoIWV2ZW50cykge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpXG4gIGxldCBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBsZXQgaGFuZGxlciA9IGV2ZW50c1trZXldXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgaGFuZGxlciA9IHZtW2hhbmRsZXJdXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBUaGUgbWV0aG9kIFwiJHtoYW5kbGVyfVwiIGlzIG5vdCBkZWZpbmVkLmApXG4gICAgICB9XG4gICAgfVxuICAgIHNldEV2ZW50KHZtLCBlbCwga2V5LCBoYW5kbGVyKVxuICB9XG59XG5cbi8qKlxuICogc2V0IGEgc2VyaWVzIG9mIG1lbWJlcnMgYXMgYSBraW5kIG9mIGFuIGVsZW1lbnRcbiAqIGZvciBleGFtcGxlOiBzdHlsZSwgYXR0ciwgLi4uXG4gKiBpZiB0aGUgdmFsdWUgaXMgYSBmdW5jdGlvbiB0aGVuIGJpbmQgdGhlIGRhdGEgY2hhbmdlc1xuICovXG5mdW5jdGlvbiBiaW5kRGlyICh2bSwgZWwsIG5hbWUsIGRhdGEpIHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gIGxldCBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBjb25zdCB2YWx1ZSA9IGRhdGFba2V5XVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJpbmRLZXkodm0sIGVsLCBuYW1lLCBrZXksIHZhbHVlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVsW1NFVFRFUlNbbmFtZV1dKGtleSwgdmFsdWUpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogYmluZCBkYXRhIGNoYW5nZXMgdG8gYSBjZXJ0YWluIGtleSB0byBhIG5hbWUgc2VyaWVzIGluIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gYmluZEtleSAodm0sIGVsLCBuYW1lLCBrZXksIGNhbGMpIHtcbiAgY29uc3QgbWV0aG9kTmFtZSA9IFNFVFRFUlNbbmFtZV1cbiAgLy8gd2F0Y2ggdGhlIGNhbGMsIGFuZCByZXR1cm5zIGEgdmFsdWUgYnkgY2FsYy5jYWxsKClcbiAgY29uc3QgdmFsdWUgPSB3YXRjaCh2bSwgY2FsYywgKHZhbHVlKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlciAoKSB7XG4gICAgICBlbFttZXRob2ROYW1lXShrZXksIHZhbHVlKVxuICAgIH1cbiAgICBjb25zdCBkaWZmZXIgPSB2bSAmJiB2bS5fYXBwICYmIHZtLl9hcHAuZGlmZmVyXG4gICAgaWYgKGRpZmZlcikge1xuICAgICAgZGlmZmVyLmFwcGVuZCgnZWxlbWVudCcsIGVsLmRlcHRoLCBlbC5yZWYsIGhhbmRsZXIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaGFuZGxlcigpXG4gICAgfVxuICB9KVxuXG4gIGVsW21ldGhvZE5hbWVdKGtleSwgdmFsdWUpXG59XG5cbi8qKlxuICogd2F0Y2ggYSBjYWxjIGZ1bmN0aW9uIGFuZCBjYWxsYmFjayBpZiB0aGUgY2FsYyB2YWx1ZSBjaGFuZ2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXRjaCAodm0sIGNhbGMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgY2FsYywgZnVuY3Rpb24gKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnICYmIHZhbHVlID09PSBvbGRWYWx1ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNhbGxiYWNrKHZhbHVlKVxuICB9KVxuXG4gIHJldHVybiB3YXRjaGVyLnZhbHVlXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC92bS9kaXJlY3RpdmUuanNcbiAqKi8iLCIvLyBAdG9kbzogSXQgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgYnkgbmF0aXZlIGZyb20gYHJlZ2lzdGVyQ29tcG9uZW50cygpYC5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmF0aXZlQ29tcG9uZW50TWFwOiB7XG4gICAgdGV4dDogdHJ1ZSxcbiAgICBpbWFnZTogdHJ1ZSxcbiAgICBjb250YWluZXI6IHRydWUsXG4gICAgc2xpZGVyOiB7XG4gICAgICB0eXBlOiAnc2xpZGVyJyxcbiAgICAgIGFwcGVuZDogJ3RyZWUnXG4gICAgfSxcbiAgICBjZWxsOiB7XG4gICAgICB0eXBlOiAnY2VsbCcsXG4gICAgICBhcHBlbmQ6ICd0cmVlJ1xuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29uZmlnLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IERvY3VtZW50ICYgRWxlbWVudCBIZWxwZXJzLlxuICpcbiAqIHJlcXVpcmVkOlxuICogRG9jdW1lbnQjOiBjcmVhdGVFbGVtZW50LCBjcmVhdGVDb21tZW50LCBnZXRSZWZcbiAqIEVsZW1lbnQjOiBhcHBlbmRDaGlsZCwgaW5zZXJ0QmVmb3JlLCByZW1vdmVDaGlsZCwgbmV4dFNpYmxpbmdcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIGJvZHkgYnkgdHlwZVxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm9keSAodm0sIHR5cGUpIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgcmV0dXJuIGRvYy5jcmVhdGVCb2R5KHR5cGUpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGVsZW1lbnQgYnkgdHlwZVxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAodm0sIHR5cGUpIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgcmV0dXJuIGRvYy5jcmVhdGVFbGVtZW50KHR5cGUpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBmcmFnIGJsb2NrIGZvciBhbiBlbGVtZW50LlxuICogVGhlIGZyYWcgYmxvY2sgaGFzIGEgc3RhcnRlciwgZW5kZXIgYW5kIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJsb2NrICh2bSwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydCA9IGNyZWF0ZUJsb2NrU3RhcnQodm0pXG4gIGNvbnN0IGVuZCA9IGNyZWF0ZUJsb2NrRW5kKHZtKVxuICBjb25zdCBibG9ja0lkID0gbGFzdGVzdEJsb2NrSWQrK1xuICBpZiAoZWxlbWVudC5lbGVtZW50KSB7XG4gICAgbGV0IHVwZGF0ZU1hcmsgPSBlbGVtZW50LnVwZGF0ZU1hcmtcbiAgICBpZiAodXBkYXRlTWFyaykge1xuICAgICAgaWYgKHVwZGF0ZU1hcmsuZWxlbWVudCkge1xuICAgICAgICB1cGRhdGVNYXJrID0gdXBkYXRlTWFyay5lbmRcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRBZnRlcihlbmQsIHVwZGF0ZU1hcmspXG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QWZ0ZXIoc3RhcnQsIHVwZGF0ZU1hcmspXG4gICAgICBlbGVtZW50LnVwZGF0ZU1hcmsgPSBlbmRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHN0YXJ0LCBlbGVtZW50LmVuZClcbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRCZWZvcmUoZW5kLCBlbGVtZW50LmVuZClcbiAgICB9XG4gICAgZWxlbWVudCA9IGVsZW1lbnQuZWxlbWVudFxuICB9XG4gIGVsc2Uge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3RhcnQpXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbmQpXG4gIH1cbiAgcmV0dXJuIHsgc3RhcnQsIGVuZCwgZWxlbWVudCwgYmxvY2tJZCB9XG59XG5cbmxldCBsYXN0ZXN0QmxvY2tJZCA9IDFcblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGJsb2NrIHN0YXJ0ZXIuXG4gKiBVc2luZyB0aGlzLl9hcHAuZG9jXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrU3RhcnQgKHZtKSB7XG4gIGNvbnN0IGRvYyA9IHZtLl9hcHAuZG9jXG4gIGNvbnN0IGFuY2hvciA9IGRvYy5jcmVhdGVDb21tZW50KCdzdGFydCcpXG4gIHJldHVybiBhbmNob3Jcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGJsb2NrIGVuZGVyLlxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICovXG5mdW5jdGlvbiBjcmVhdGVCbG9ja0VuZCAodm0pIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgY29uc3QgYW5jaG9yID0gZG9jLmNyZWF0ZUNvbW1lbnQoJ2VuZCcpXG4gIHJldHVybiBhbmNob3Jcbn1cblxuLyoqXG4gKiBBdHRhY2ggdGFyZ2V0IHRvIGEgY2VydGFpbiBkZXN0IHVzaW5nIGFwcGVuZENoaWxkIGJ5IGRlZmF1bHQuXG4gKiBJZiB0aGUgZGVzdCBpcyBhIGZyYWcgYmxvY2sgdGhlbiBpbnNlcnQgYmVmb3JlIHRoZSBlbmRlci5cbiAqIElmIHRoZSB0YXJnZXQgaXMgYSBmcmFnIGJsb2NrIHRoZW4gYXR0YWNoIHRoZSBzdGFydGVyIGFuZCBlbmRlciBpbiBvcmRlci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBkZXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hUYXJnZXQgKHZtLCB0YXJnZXQsIGRlc3QpIHtcbiAgaWYgKGRlc3QuZWxlbWVudCkge1xuICAgIGNvbnN0IGJlZm9yZSA9IGRlc3QuZW5kXG4gICAgY29uc3QgYWZ0ZXIgPSBkZXN0LnVwZGF0ZU1hcmtcbiAgICAvLyBwdXNoIG5ldyB0YXJnZXQgZm9yIHdhdGNoIGxpc3QgdXBkYXRlIGxhdGVyXG4gICAgaWYgKGRlc3QuY2hpbGRyZW4pIHtcbiAgICAgIGRlc3QuY2hpbGRyZW4ucHVzaCh0YXJnZXQpXG4gICAgfVxuICAgIC8vIGZvciBjaGVjayByZXBlYXQgY2FzZVxuICAgIGlmIChhZnRlcikge1xuICAgICAgY29uc3Qgc2lnbmFsID0gbW92ZVRhcmdldCh2bSwgdGFyZ2V0LCBhZnRlcilcbiAgICAgIGRlc3QudXBkYXRlTWFyayA9IHRhcmdldC5lbGVtZW50ID8gdGFyZ2V0LmVuZCA6IHRhcmdldFxuICAgICAgcmV0dXJuIHNpZ25hbFxuICAgIH1cbiAgICBlbHNlIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgICAgZGVzdC5lbGVtZW50Lmluc2VydEJlZm9yZSh0YXJnZXQuc3RhcnQsIGJlZm9yZSlcbiAgICAgIGRlc3QuZWxlbWVudC5pbnNlcnRCZWZvcmUodGFyZ2V0LmVuZCwgYmVmb3JlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkZXN0LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRhcmdldCwgYmVmb3JlKVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICAgIGRlc3QuYXBwZW5kQ2hpbGQodGFyZ2V0LnN0YXJ0KVxuICAgICAgZGVzdC5hcHBlbmRDaGlsZCh0YXJnZXQuZW5kKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkZXN0LmFwcGVuZENoaWxkKHRhcmdldClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIHRhcmdldCBiZWZvcmUgYSBjZXJ0YWluIGVsZW1lbnQuIFRoZSB0YXJnZXQgbWF5YmUgYmxvY2sgb3IgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUYXJnZXQgKHZtLCB0YXJnZXQsIGFmdGVyKSB7XG4gIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgIHJldHVybiBtb3ZlQmxvY2sodGFyZ2V0LCBhZnRlcilcbiAgfVxuICByZXR1cm4gbW92ZUVsZW1lbnQodGFyZ2V0LCBhZnRlcilcbn1cblxuLyoqXG4gKiBNb3ZlIGVsZW1lbnQgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZnVuY3Rpb24gbW92ZUVsZW1lbnQgKGVsZW1lbnQsIGFmdGVyKSB7XG4gIGNvbnN0IHBhcmVudCA9IGFmdGVyLnBhcmVudE5vZGVcbiAgaWYgKHBhcmVudCkge1xuICAgIHJldHVybiBwYXJlbnQuaW5zZXJ0QWZ0ZXIoZWxlbWVudCwgYWZ0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIGFsbCBlbGVtZW50cyBvZiB0aGUgYmxvY2sgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtvYmplY3R9IGJlZm9yZVxuICovXG5mdW5jdGlvbiBtb3ZlQmxvY2sgKGZyYWdCbG9jaywgYWZ0ZXIpIHtcbiAgY29uc3QgcGFyZW50ID0gYWZ0ZXIucGFyZW50Tm9kZVxuXG4gIGlmIChwYXJlbnQpIHtcbiAgICBsZXQgZWwgPSBmcmFnQmxvY2suc3RhcnRcbiAgICBsZXQgc2lnbmFsXG4gICAgY29uc3QgZ3JvdXAgPSBbZWxdXG5cbiAgICB3aGlsZSAoZWwgJiYgZWwgIT09IGZyYWdCbG9jay5lbmQpIHtcbiAgICAgIGVsID0gZWwubmV4dFNpYmxpbmdcbiAgICAgIGdyb3VwLnB1c2goZWwpXG4gICAgfVxuXG4gICAgbGV0IHRlbXAgPSBhZnRlclxuICAgIGdyb3VwLmV2ZXJ5KChlbCkgPT4ge1xuICAgICAgc2lnbmFsID0gcGFyZW50Lmluc2VydEFmdGVyKGVsLCB0ZW1wKVxuICAgICAgdGVtcCA9IGVsXG4gICAgICByZXR1cm4gc2lnbmFsICE9PSAtMVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2lnbmFsXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGFyZ2V0IGZyb20gRE9NIHRyZWUuXG4gKiBJZiB0aGUgdGFyZ2V0IGlzIGEgZnJhZyBibG9jayB0aGVuIGNhbGwgX3JlbW92ZUJsb2NrXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhcmdldCAodm0sIHRhcmdldCwgcHJlc2VydmVCbG9jayA9IGZhbHNlKSB7XG4gIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgIHJlbW92ZUJsb2NrKHRhcmdldCwgcHJlc2VydmVCbG9jaylcbiAgfVxuICBlbHNlIHtcbiAgICByZW1vdmVFbGVtZW50KHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGNlcnRhaW4gZWxlbWVudC5cbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICovXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50ICh0YXJnZXQpIHtcbiAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGVcblxuICBpZiAocGFyZW50KSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGZyYWcgYmxvY2suXG4gKiBUaGUgc2Vjb25kIHBhcmFtIGRlY2lkZXMgd2hldGhlciB0aGUgYmxvY2sgc2VsZiBzaG91bGQgYmUgcmVtb3ZlZCB0b28uXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtCb29sZWFufSBwcmVzZXJ2ZUJsb2NrPWZhbHNlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUJsb2NrIChmcmFnQmxvY2ssIHByZXNlcnZlQmxvY2sgPSBmYWxzZSkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBsZXQgZWwgPSBmcmFnQmxvY2suc3RhcnQubmV4dFNpYmxpbmdcblxuICB3aGlsZSAoZWwgJiYgZWwgIT09IGZyYWdCbG9jay5lbmQpIHtcbiAgICByZXN1bHQucHVzaChlbClcbiAgICBlbCA9IGVsLm5leHRTaWJsaW5nXG4gIH1cblxuICBpZiAoIXByZXNlcnZlQmxvY2spIHtcbiAgICByZW1vdmVFbGVtZW50KGZyYWdCbG9jay5zdGFydClcbiAgfVxuICByZXN1bHQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICByZW1vdmVFbGVtZW50KGVsKVxuICB9KVxuICBpZiAoIXByZXNlcnZlQmxvY2spIHtcbiAgICByZW1vdmVFbGVtZW50KGZyYWdCbG9jay5lbmQpXG4gIH1cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvdm0vZG9tLWhlbHBlci5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogRXZlcnl0aGluZyBhYm91dCBjb21wb25lbnQgZXZlbnQgd2hpY2ggaW5jbHVkZXMgZXZlbnQgb2JqZWN0LCBldmVudCBsaXN0ZW5lcixcbiAqIGV2ZW50IGVtaXR0ZXIgYW5kIGxpZmVjeWNsZSBob29rcy5cbiAqL1xuXG4vKipcbiAqIEV2ZW50IG9iamVjdCBkZWZpbml0aW9uLiBBbiBldmVudCBvYmplY3QgaGFzIGB0eXBlYCwgYHRpbWVzdGFtcGAgYW5kXG4gKiBgZGV0YWlsYCBmcm9tIHdoaWNoIGEgY29tcG9uZW50IGVtaXQuIFRoZSBldmVudCBvYmplY3QgY291bGQgYmUgZGlzcGF0Y2hlZCB0b1xuICogcGFyZW50cyBvciBicm9hZGNhc3RlZCB0byBjaGlsZHJlbiBleGNlcHQgYHRoaXMuc3RvcCgpYCBpcyBjYWxsZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHthbnl9ICAgIGRldGFpbFxuICovXG5mdW5jdGlvbiBFdnQgKHR5cGUsIGRldGFpbCkge1xuICBpZiAoZGV0YWlsIGluc3RhbmNlb2YgRXZ0KSB7XG4gICAgcmV0dXJuIGRldGFpbFxuICB9XG5cbiAgdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpXG4gIHRoaXMuZGV0YWlsID0gZGV0YWlsXG4gIHRoaXMudHlwZSA9IHR5cGVcblxuICBsZXQgc2hvdWxkU3RvcCA9IGZhbHNlXG5cbiAgLyoqXG4gICAqIHN0b3AgZGlzcGF0Y2ggYW5kIGJyb2FkY2FzdFxuICAgKi9cbiAgdGhpcy5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHNob3VsZFN0b3AgPSB0cnVlXG4gIH1cblxuICAvKipcbiAgICogY2hlY2sgaWYgaXQgY2FuJ3QgYmUgZGlzcGF0Y2hlZCBvciBicm9hZGNhc3RlZFxuICAgKi9cbiAgdGhpcy5oYXNTdG9wcGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzaG91bGRTdG9wXG4gIH1cbn1cblxuLyoqXG4gKiBFbWl0IGFuIGV2ZW50IGJ1dCBub3QgYnJvYWRjYXN0IGRvd24gb3IgZGlzcGF0Y2ggdXAuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSAge2FueX0gICAgZGV0YWlsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkZW1pdCAodHlwZSwgZGV0YWlsKSB7XG4gIGNvbnN0IGV2ZW50cyA9IHRoaXMuX3ZtRXZlbnRzXG4gIGNvbnN0IGhhbmRsZXJMaXN0ID0gZXZlbnRzW3R5cGVdXG4gIGlmIChoYW5kbGVyTGlzdCkge1xuICAgIGNvbnN0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICAgIGhhbmRsZXJMaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBldnQpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIEVtaXQgYW4gZXZlbnQgYW5kIGRpc3BhdGNoIGl0IHVwLlxuICogQHBhcmFtICB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0gIHthbnl9ICAgIGRldGFpbFxuICovXG5leHBvcnQgZnVuY3Rpb24gJGRpc3BhdGNoICh0eXBlLCBkZXRhaWwpIHtcbiAgY29uc3QgZXZ0ID0gbmV3IEV2dCh0eXBlLCBkZXRhaWwpXG4gIHRoaXMuJGVtaXQodHlwZSwgZXZ0KVxuXG4gIGlmICghZXZ0Lmhhc1N0b3BwZWQoKSAmJiB0aGlzLl9wYXJlbnQgJiYgdGhpcy5fcGFyZW50LiRkaXNwYXRjaCkge1xuICAgIHRoaXMuX3BhcmVudC4kZGlzcGF0Y2godHlwZSwgZXZ0KVxuICB9XG59XG5cbi8qKlxuICogRW1pdCBhbiBldmVudCBhbmQgYnJvYWRjYXN0IGl0IGRvd24uXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSAge2FueX0gICAgZGV0YWlsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkYnJvYWRjYXN0ICh0eXBlLCBkZXRhaWwpIHtcbiAgY29uc3QgZXZ0ID0gbmV3IEV2dCh0eXBlLCBkZXRhaWwpXG4gIHRoaXMuJGVtaXQodHlwZSwgZXZ0KVxuXG4gIGlmICghZXZ0Lmhhc1N0b3BwZWQoKSAmJiB0aGlzLl9jaGlsZHJlblZtcykge1xuICAgIHRoaXMuX2NoaWxkcmVuVm1zLmZvckVhY2goKHN1YlZtKSA9PiB7XG4gICAgICBzdWJWbS4kYnJvYWRjYXN0KHR5cGUsIGV2dClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogQWRkIGV2ZW50IGxpc3RlbmVyLlxuICogQHBhcmFtICB7c3RyaW5nfSAgIHR5cGVcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBoYW5kbGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkb24gKHR5cGUsIGhhbmRsZXIpIHtcbiAgaWYgKCF0eXBlIHx8IHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgZXZlbnRzID0gdGhpcy5fdm1FdmVudHNcbiAgY29uc3QgaGFuZGxlckxpc3QgPSBldmVudHNbdHlwZV0gfHwgW11cbiAgaGFuZGxlckxpc3QucHVzaChoYW5kbGVyKVxuICBldmVudHNbdHlwZV0gPSBoYW5kbGVyTGlzdFxuXG4gIC8vIGZpeGVkIG9sZCB2ZXJzaW9uIGxpZmVjeWNsZSBkZXNpZ25cbiAgaWYgKHR5cGUgPT09ICdob29rOnJlYWR5JyAmJiB0aGlzLl9yZWFkeSkge1xuICAgIHRoaXMuJGVtaXQoJ2hvb2s6cmVhZHknKVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVyLlxuICogQHBhcmFtICB7c3RyaW5nfSAgIHR5cGVcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBoYW5kbGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkb2ZmICh0eXBlLCBoYW5kbGVyKSB7XG4gIGlmICghdHlwZSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGV2ZW50cyA9IHRoaXMuX3ZtRXZlbnRzXG4gIGlmICghaGFuZGxlcikge1xuICAgIGRlbGV0ZSBldmVudHNbdHlwZV1cbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBoYW5kbGVyTGlzdCA9IGV2ZW50c1t0eXBlXVxuICBpZiAoIWhhbmRsZXJMaXN0KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaGFuZGxlckxpc3QuJHJlbW92ZShoYW5kbGVyKVxufVxuXG5jb25zdCBMSUZFX0NZQ0xFX1RZUEVTID0gWydpbml0JywgJ2NyZWF0ZWQnLCAncmVhZHknLCAnZGVzdHJveWVkJ11cblxuLyoqXG4gKiBJbml0IGV2ZW50czpcbiAqIDEuIGxpc3RlbiBgZXZlbnRzYCBpbiBjb21wb25lbnQgb3B0aW9ucyAmIGBleHRlcm5hbEV2ZW50c2AuXG4gKiAyLiBiaW5kIGxpZmVjeWNsZSBob29rcy5cbiAqIEBwYXJhbSAge1ZtfSAgICAgdm1cbiAqIEBwYXJhbSAge29iamVjdH0gZXh0ZXJuYWxFdmVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRFdmVudHMgKHZtLCBleHRlcm5hbEV2ZW50cykge1xuICBjb25zdCBvcHRpb25zID0gdm0uX29wdGlvbnMgfHwge31cbiAgY29uc3QgZXZlbnRzID0gb3B0aW9ucy5ldmVudHMgfHwge31cbiAgZm9yIChjb25zdCB0eXBlMSBpbiBldmVudHMpIHtcbiAgICB2bS4kb24odHlwZTEsIGV2ZW50c1t0eXBlMV0pXG4gIH1cbiAgZm9yIChjb25zdCB0eXBlMiBpbiBleHRlcm5hbEV2ZW50cykge1xuICAgIHZtLiRvbih0eXBlMiwgZXh0ZXJuYWxFdmVudHNbdHlwZTJdKVxuICB9XG4gIExJRkVfQ1lDTEVfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgIHZtLiRvbihgaG9vazoke3R5cGV9YCwgb3B0aW9uc1t0eXBlXSlcbiAgfSlcbn1cblxuLyoqXG4gKiBCaW5kIGV2ZW50IHJlbGF0ZWQgbWV0aG9kcyB0byBWaWV3TW9kZWwgaW5zdGFuY2UuXG4gKiBAcGFyYW0gIHtWbX0gdm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1peGluRXZlbnRzICh2bSkge1xuICB2bS4kZW1pdCA9ICRlbWl0XG4gIHZtLiRkaXNwYXRjaCA9ICRkaXNwYXRjaFxuICB2bS4kYnJvYWRjYXN0ID0gJGJyb2FkY2FzdFxuICB2bS4kb24gPSAkb25cbiAgdm0uJG9mZiA9ICRvZmZcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3ZtL2V2ZW50cy5qc1xuICoqLyIsImltcG9ydCBzZW12ZXIgZnJvbSAnc2VtdmVyJ1xuaW1wb3J0IHsgaXNQbGFpbk9iamVjdCwgdHlwb2YgfSBmcm9tICcuLi91dGlsJ1xuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlcnNpb24gc3RyaW5nLlxuICogQHBhcmFtICB7U3RyaW5nfSBWZXJzaW9uLiBpZTogMSwgMS4wLCAxLjAuMFxuICogQHJldHVybiB7U3RyaW5nfSBWZXJzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVWZXJzaW9uICh2KSB7XG4gIGNvbnN0IGlzVmFsaWQgPSBzZW12ZXIudmFsaWQodilcbiAgaWYgKGlzVmFsaWQpIHtcbiAgICByZXR1cm4gdlxuICB9XG5cbiAgdiA9IHR5cGVvZiAodikgPT09ICdzdHJpbmcnID8gdiA6ICcnXG4gIGNvbnN0IHNwbGl0ID0gdi5zcGxpdCgnLicpXG4gIGxldCBpID0gMFxuICBjb25zdCByZXN1bHQgPSBbXVxuXG4gIHdoaWxlIChpIDwgMykge1xuICAgIGNvbnN0IHMgPSB0eXBlb2YgKHNwbGl0W2ldKSA9PT0gJ3N0cmluZycgJiYgc3BsaXRbaV0gPyBzcGxpdFtpXSA6ICcwJ1xuICAgIHJlc3VsdC5wdXNoKHMpXG4gICAgaSsrXG4gIH1cblxuICByZXR1cm4gcmVzdWx0LmpvaW4oJy4nKVxufVxuXG4vKipcbiAqIEdldCBpbmZvcm1hdGlvbnMgZnJvbSBkaWZmZXJlbnQgZXJyb3Iga2V5LiBMaWtlOlxuICogLSBjb2RlXG4gKiAtIGVycm9yTWVzc2FnZVxuICogLSBlcnJvclR5cGVcbiAqIC0gaXNEb3duZ3JhZGVcbiAqIEBwYXJhbSAge3N0cmluZ30ga2V5XG4gKiBAcGFyYW0gIHtzdHJpbmd9IHZhbFxuICogQHBhcmFtICB7c3RyaW5nfSBjcml0ZXJpYVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3IgKGtleSwgdmFsLCBjcml0ZXJpYSkge1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgaXNEb3duZ3JhZGU6IHRydWUsXG4gICAgZXJyb3JUeXBlOiAxLFxuICAgIGNvZGU6IDEwMDBcbiAgfVxuICBjb25zdCBnZXRNc2cgPSBmdW5jdGlvbiAoa2V5LCB2YWwsIGNyaXRlcmlhKSB7XG4gICAgcmV0dXJuICdEb3duZ3JhZGVbJyArIGtleSArICddIDo6IGRldmljZUluZm8gJ1xuICAgICAgKyB2YWwgKyAnIG1hdGNoZWQgY3JpdGVyaWEgJyArIGNyaXRlcmlhXG4gIH1cbiAgY29uc3QgX2tleSA9IGtleS50b0xvd2VyQ2FzZSgpXG5cbiAgcmVzdWx0LmVycm9yTWVzc2FnZSA9IGdldE1zZyhrZXksIHZhbCwgY3JpdGVyaWEpXG5cbiAgaWYgKF9rZXkuaW5kZXhPZignb3N2ZXJzaW9uJykgPj0gMCkge1xuICAgIHJlc3VsdC5jb2RlID0gMTAwMVxuICB9XG4gIGVsc2UgaWYgKF9rZXkuaW5kZXhPZignYXBwdmVyc2lvbicpID49IDApIHtcbiAgICByZXN1bHQuY29kZSA9IDEwMDJcbiAgfVxuICBlbHNlIGlmIChfa2V5LmluZGV4T2YoJ3dlZXh2ZXJzaW9uJykgPj0gMCkge1xuICAgIHJlc3VsdC5jb2RlID0gMTAwM1xuICB9XG4gIGVsc2UgaWYgKF9rZXkuaW5kZXhPZignZGV2aWNlbW9kZWwnKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDA0XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogV0VFWCBmcmFtZXdvcmsgaW5wdXQoZGV2aWNlSW5mbylcbiAqIHtcbiAqICAgcGxhdGZvcm06ICdpT1MnIG9yICdhbmRyb2lkJ1xuICogICBvc1ZlcnNpb246ICcxLjAuMCcgb3IgJzEuMCcgb3IgJzEnXG4gKiAgIGFwcFZlcnNpb246ICcxLjAuMCcgb3IgJzEuMCcgb3IgJzEnXG4gKiAgIHdlZXhWZXJzaW9uOiAnMS4wLjAnIG9yICcxLjAnIG9yICcxJ1xuICogICBkRGV2aWNlTW9kZWw6ICdNT0RFTF9OQU1FJ1xuICogfVxuICpcbiAqIGRvd25ncmFkZSBjb25maWcoY29uZmlnKVxuICoge1xuICogICBpb3M6IHtcbiAqICAgICBvc1ZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGFwcFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIHdlZXhWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICBkZXZpY2VNb2RlbDogWydtb2RlbEEnLCAnbW9kZWxCJywgLi4uXVxuICogICB9LFxuICogICBhbmRyb2lkOiB7XG4gKiAgICAgb3NWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICBhcHBWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICB3ZWV4VmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgZGV2aWNlTW9kZWw6IFsnbW9kZWxBJywgJ21vZGVsQicsIC4uLl1cbiAqICAgfVxuICogfVxuICpcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGRldmljZUluZm8gV2VleCBTREsgZnJhbWV3b3JrIGlucHV0XG4gKiBAcGFyYW0gIHtvYmplY3R9IGNvbmZpZyAgICAgdXNlciBpbnB1dFxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgIHsgaXNEb3duZ3JhZGU6IHRydWUvZmFsc2UsIGVycm9yTWVzc2FnZS4uLiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVjayAoY29uZmlnLCBkZXZpY2VJbmZvKSB7XG4gIGRldmljZUluZm8gPSBkZXZpY2VJbmZvIHx8IGdsb2JhbC5XWEVudmlyb25tZW50XG4gIGRldmljZUluZm8gPSBpc1BsYWluT2JqZWN0KGRldmljZUluZm8pID8gZGV2aWNlSW5mbyA6IHt9XG5cbiAgbGV0IHJlc3VsdCA9IHtcbiAgICBpc0Rvd25ncmFkZTogZmFsc2UgLy8gZGVmYXV0bCBpcyBwYXNzXG4gIH1cblxuICBpZiAodHlwb2YoY29uZmlnKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGxldCBjdXN0b21Eb3duZ3JhZGUgPSBjb25maWcuY2FsbCh0aGlzLCBkZXZpY2VJbmZvLCB7XG4gICAgICBzZW12ZXI6IHNlbXZlcixcbiAgICAgIG5vcm1hbGl6ZVZlcnNpb246IHRoaXMubm9ybWFsaXplVmVyc2lvblxuICAgIH0pXG5cbiAgICBjdXN0b21Eb3duZ3JhZGUgPSAhIWN1c3RvbURvd25ncmFkZVxuXG4gICAgcmVzdWx0ID0gY3VzdG9tRG93bmdyYWRlID8gdGhpcy5nZXRFcnJvcignY3VzdG9tJywgJycsICdjdXN0b20gcGFyYW1zJykgOiByZXN1bHRcbiAgfVxuICBlbHNlIHtcbiAgICBjb25maWcgPSBpc1BsYWluT2JqZWN0KGNvbmZpZykgPyBjb25maWcgOiB7fVxuXG4gICAgY29uc3QgcGxhdGZvcm0gPSBkZXZpY2VJbmZvLnBsYXRmb3JtIHx8ICd1bmtub3cnXG4gICAgY29uc3QgZFBsYXRmb3JtID0gcGxhdGZvcm0udG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGNPYmogPSBjb25maWdbZFBsYXRmb3JtXSB8fCB7fVxuXG4gICAgZm9yIChjb25zdCBpIGluIGRldmljZUluZm8pIHtcbiAgICAgIGNvbnN0IGtleSA9IGlcbiAgICAgIGNvbnN0IGtleUxvd2VyID0ga2V5LnRvTG93ZXJDYXNlKClcbiAgICAgIGNvbnN0IHZhbCA9IGRldmljZUluZm9baV1cbiAgICAgIGNvbnN0IGlzVmVyc2lvbiA9IGtleUxvd2VyLmluZGV4T2YoJ3ZlcnNpb24nKSA+PSAwXG4gICAgICBjb25zdCBpc0RldmljZU1vZGVsID0ga2V5TG93ZXIuaW5kZXhPZignZGV2aWNlbW9kZWwnKSA+PSAwXG4gICAgICBjb25zdCBjcml0ZXJpYSA9IGNPYmpbaV1cblxuICAgICAgaWYgKGNyaXRlcmlhICYmIGlzVmVyc2lvbikge1xuICAgICAgICBjb25zdCBjID0gdGhpcy5ub3JtYWxpemVWZXJzaW9uKGNyaXRlcmlhKVxuICAgICAgICBjb25zdCBkID0gdGhpcy5ub3JtYWxpemVWZXJzaW9uKGRldmljZUluZm9baV0pXG5cbiAgICAgICAgaWYgKHNlbXZlci5zYXRpc2ZpZXMoZCwgYykpIHtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLmdldEVycm9yKGtleSwgdmFsLCBjcml0ZXJpYSlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0RldmljZU1vZGVsKSB7XG4gICAgICAgIGNvbnN0IF9jcml0ZXJpYSA9IHR5cG9mKGNyaXRlcmlhKSA9PT0gJ2FycmF5JyA/IGNyaXRlcmlhIDogW2NyaXRlcmlhXVxuICAgICAgICBpZiAoX2NyaXRlcmlhLmluZGV4T2YodmFsKSA+PSAwKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5nZXRFcnJvcihrZXksIHZhbCwgY3JpdGVyaWEpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9kb3duZ3JhZGUuanNcbiAqKi8iLCJpbXBvcnQge1xuICBpc1dlZXhDb21wb25lbnQsXG4gIGlzV2VleE1vZHVsZSxcbiAgaXNOb3JtYWxNb2R1bGUsXG4gIGlzTnBtTW9kdWxlLFxuICByZW1vdmVXZWV4UHJlZml4LFxuICByZW1vdmVKU1N1cmZpeFxufSBmcm9tICcuLi8uLi91dGlsJ1xuaW1wb3J0IHtcbiAgcmVnaXN0ZXJDdXN0b21Db21wb25lbnQsXG4gIHJlcXVpcmVDdXN0b21Db21wb25lbnQsXG4gIGluaXRNb2R1bGVzXG59IGZyb20gJy4uL3JlZ2lzdGVyJ1xuXG4vKipcbiAqIGRlZmluZShuYW1lLCBmYWN0b3J5KSBmb3IgcHJpbWFyeSB1c2FnZVxuICogb3JcbiAqIGRlZmluZShuYW1lLCBkZXBzLCBmYWN0b3J5KSBmb3IgY29tcGF0aWJpbGl0eVxuICogTm90aWNlOiBETyBOT1QgdXNlIGZ1bmN0aW9uIGRlZmluZSgpIHt9LFxuICogaXQgd2lsbCBjYXVzZSBlcnJvciBhZnRlciBidWlsZGVkIGJ5IHdlYnBhY2tcbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmluZUZuID0gZnVuY3Rpb24gKGFwcCwgbmFtZSwgLi4uYXJncykge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBkZWZpbmUgYSBjb21wb25lbnQgJHtuYW1lfWApXG5cbiAgLy8gYWRhcHQgYXJnczpcbiAgLy8gMS4gbmFtZSwgZGVwc1tdLCBmYWN0b3J5KClcbiAgLy8gMi4gbmFtZSwgZmFjdG9yeSgpXG4gIC8vIDMuIG5hbWUsIGRlZmluaXRpb257fVxuICBsZXQgZmFjdG9yeSwgZGVmaW5pdGlvblxuICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XG4gICAgZGVmaW5pdGlvbiA9IGFyZ3NbMV1cbiAgfVxuICBlbHNlIHtcbiAgICBkZWZpbml0aW9uID0gYXJnc1swXVxuICB9XG4gIGlmICh0eXBlb2YgZGVmaW5pdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZhY3RvcnkgPSBkZWZpbml0aW9uXG4gICAgZGVmaW5pdGlvbiA9IG51bGxcbiAgfVxuXG4gIC8vIHJlc29sdmUgZGVmaW5pdGlvbiBmcm9tIGZhY3RvcnlcbiAgaWYgKGZhY3RvcnkpIHtcbiAgICBjb25zdCByID0gKG5hbWUpID0+IHtcbiAgICAgIGlmIChpc1dlZXhDb21wb25lbnQobmFtZSkpIHtcbiAgICAgICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICAgICAgICByZXR1cm4gcmVxdWlyZUN1c3RvbUNvbXBvbmVudChhcHAsIGNsZWFuTmFtZSlcbiAgICAgIH1cbiAgICAgIGlmIChpc1dlZXhNb2R1bGUobmFtZSkpIHtcbiAgICAgICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICAgICAgICByZXR1cm4gYXBwLnJlcXVpcmVNb2R1bGUoY2xlYW5OYW1lKVxuICAgICAgfVxuICAgICAgaWYgKGlzTm9ybWFsTW9kdWxlKG5hbWUpIHx8IGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgICAgIGNvbnN0IGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG4gICAgICAgIHJldHVybiBhcHAuY29tbW9uTW9kdWxlc1tjbGVhbk5hbWVdXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG0gPSB7IGV4cG9ydHM6IHt9fVxuICAgIGZhY3RvcnkociwgbS5leHBvcnRzLCBtKVxuICAgIGRlZmluaXRpb24gPSBtLmV4cG9ydHNcbiAgfVxuXG4gIC8vIGFwcGx5IGRlZmluaXRpb25cbiAgaWYgKGlzV2VleENvbXBvbmVudChuYW1lKSkge1xuICAgIGNvbnN0IGNsZWFuTmFtZSA9IHJlbW92ZVdlZXhQcmVmaXgobmFtZSlcbiAgICByZWdpc3RlckN1c3RvbUNvbXBvbmVudChhcHAsIGNsZWFuTmFtZSwgZGVmaW5pdGlvbilcbiAgfVxuICBlbHNlIGlmIChpc1dlZXhNb2R1bGUobmFtZSkpIHtcbiAgICBjb25zdCBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gICAgaW5pdE1vZHVsZXMoeyBbY2xlYW5OYW1lXTogZGVmaW5pdGlvbiB9KVxuICB9XG4gIGVsc2UgaWYgKGlzTm9ybWFsTW9kdWxlKG5hbWUpKSB7XG4gICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICBhcHAuY29tbW9uTW9kdWxlc1tjbGVhbk5hbWVdID0gZGVmaW5pdGlvblxuICB9XG4gIGVsc2UgaWYgKGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICBpZiAoZGVmaW5pdGlvbi50ZW1wbGF0ZSB8fFxuICAgICAgICBkZWZpbml0aW9uLnN0eWxlIHx8XG4gICAgICAgIGRlZmluaXRpb24ubWV0aG9kcykge1xuICAgICAgLy8gZG93bmdyYWRlIHRvIG9sZCBkZWZpbmUgbWV0aG9kIChkZWZpbmUoJ2NvbXBvbmVudE5hbWUnLCBmYWN0b3J5KSlcbiAgICAgIC8vIHRoZSBleHBvcnRzIGNvbnRhaW4gb25lIGtleSBvZiB0ZW1wbGF0ZSwgc3R5bGUgb3IgbWV0aG9kc1xuICAgICAgLy8gYnV0IGl0IGhhcyByaXNrISEhXG4gICAgICByZWdpc3RlckN1c3RvbUNvbXBvbmVudChhcHAsIGNsZWFuTmFtZSwgZGVmaW5pdGlvbilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBhcHAuY29tbW9uTW9kdWxlc1tjbGVhbk5hbWVdID0gZGVmaW5pdGlvblxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlciAoYXBwLCB0eXBlLCBvcHRpb25zKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gUmVnaXN0ZXIgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIGluc3RhbGwgbGFzdGVzdCB0cmFuc2Zvcm1lci4nKVxuICByZWdpc3RlckN1c3RvbUNvbXBvbmVudChhcHAsIHR5cGUsIG9wdGlvbnMpXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvYnVuZGxlL2RlZmluZS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogaW5zdGFuY2UgY29udHJvbHMgZnJvbSBuYXRpdmVcbiAqXG4gKiAtIGZpcmUgZXZlbnRcbiAqIC0gY2FsbGJhY2tcbiAqIC0gcmVmcmVzaFxuICogLSBkZXN0cm95XG4gKlxuICogY29ycmVzcG9uZGVkIHdpdGggdGhlIEFQSSBvZiBpbnN0YW5jZSBtYW5hZ2VyIChmcmFtZXdvcmsuanMpXG4gKi9cbmltcG9ydCB7IGV4dGVuZCwgdHlwb2YgfSBmcm9tICcuLi8uLi91dGlsJ1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4uLy4uL2NvbmZpZydcblxuLyoqXG4gKiBSZWZyZXNoIGFuIGFwcCB3aXRoIGRhdGEgdG8gaXRzIHJvb3QgY29tcG9uZW50IG9wdGlvbnMuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwcFxuICogQHBhcmFtICB7YW55fSAgICBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoIChhcHAsIGRhdGEpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gUmVmcmVzaCB3aXRoYCwgZGF0YSxcbiAgICAgICAgICAgIGBpbiBpbnN0YW5jZVske2FwcC5pZH1dYClcbiAgY29uc3Qgdm0gPSBhcHAudm1cbiAgaWYgKHZtICYmIGRhdGEpIHtcbiAgICAvLyBhcHAuZG9jLmNsb3NlKClcbiAgICBpZiAodHlwZW9mIHZtLnJlZnJlc2hEYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2bS5yZWZyZXNoRGF0YShkYXRhKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGV4dGVuZCh2bSwgZGF0YSlcbiAgICB9XG4gICAgdXBkYXRlQWN0aW9ucyhhcHApXG4gICAgYXBwLmRvYy5saXN0ZW5lci5yZWZyZXNoRmluaXNoKClcbiAgICAvLyBhcHAuZG9jLm9wZW4oKVxuICAgIHJldHVyblxuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgZGF0YSBcIiR7ZGF0YX1cImApXG59XG5cbi8qKlxuICogRGVzdHJveSBhbiBhcHAuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwcFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveSAoYXBwKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIERlc3RvcnkgYW4gaW5zdGFuY2UoJHthcHAuaWR9KWApXG5cbiAgaWYgKGFwcC52bSkge1xuICAgIGRlc3Ryb3lWbShhcHAudm0pXG4gIH1cblxuICBhcHAuaWQgPSAnJ1xuICBhcHAub3B0aW9ucyA9IG51bGxcbiAgYXBwLmJsb2NrcyA9IG51bGxcbiAgYXBwLnZtID0gbnVsbFxuICBhcHAuZG9jLmRlc3Ryb3koKVxuICBhcHAuZG9jID0gbnVsbFxuICBhcHAuY3VzdG9tQ29tcG9uZW50TWFwID0gbnVsbFxuICBhcHAuY29tbW9uTW9kdWxlcyA9IG51bGxcbiAgYXBwLmNhbGxiYWNrcyA9IG51bGxcbn1cblxuLyoqXG4gKiBEZXN0cm95IGFuIFZtLlxuICogQHBhcmFtIHtvYmplY3R9IHZtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95Vm0gKHZtKSB7XG4gIGRlbGV0ZSB2bS5fYXBwXG4gIGRlbGV0ZSB2bS5fY29tcHV0ZWRcbiAgZGVsZXRlIHZtLl9jc3NcbiAgZGVsZXRlIHZtLl9kYXRhXG4gIGRlbGV0ZSB2bS5faWRzXG4gIGRlbGV0ZSB2bS5fbWV0aG9kc1xuICBkZWxldGUgdm0uX29wdGlvbnNcbiAgZGVsZXRlIHZtLl9wYXJlbnRcbiAgZGVsZXRlIHZtLl9wYXJlbnRFbFxuICBkZWxldGUgdm0uX3Jvb3RFbFxuXG4gIC8vIHJlbW92ZSBhbGwgd2F0Y2hlcnNcbiAgaWYgKHZtLl93YXRjaGVycykge1xuICAgIGxldCB3YXRjaGVyQ291bnQgPSB2bS5fd2F0Y2hlcnMubGVuZ3RoXG4gICAgd2hpbGUgKHdhdGNoZXJDb3VudC0tKSB7XG4gICAgICB2bS5fd2F0Y2hlcnNbd2F0Y2hlckNvdW50XS50ZWFyZG93bigpXG4gICAgfVxuICAgIGRlbGV0ZSB2bS5fd2F0Y2hlcnNcbiAgfVxuXG4gIC8vIGRlc3Ryb3kgY2hpbGQgdm1zIHJlY3Vyc2l2ZWx5XG4gIGlmICh2bS5fY2hpbGRyZW5WbXMpIHtcbiAgICBsZXQgdm1Db3VudCA9IHZtLl9jaGlsZHJlblZtcy5sZW5ndGhcbiAgICB3aGlsZSAodm1Db3VudC0tKSB7XG4gICAgICBkZXN0cm95Vm0odm0uX2NoaWxkcmVuVm1zW3ZtQ291bnRdKVxuICAgIH1cbiAgICBkZWxldGUgdm0uX2NoaWxkcmVuVm1zXG4gIH1cblxuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBcImRlc3Ryb3llZFwiIGxpZmVjeWNsZSBpbiBWbSgke3ZtLl90eXBlfSlgKVxuICB2bS4kZW1pdCgnaG9vazpkZXN0cm95ZWQnKVxuXG4gIGRlbGV0ZSB2bS5fdHlwZVxuICBkZWxldGUgdm0uX3ZtRXZlbnRzXG59XG5cbi8qKlxuICogR2V0IGEgSlNPTiBvYmplY3QgdG8gZGVzY3JpYmUgdGhlIGRvY3VtZW50IGJvZHkuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwcFxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vdEVsZW1lbnQgKGFwcCkge1xuICBjb25zdCBkb2MgPSBhcHAuZG9jIHx8IHt9XG4gIGNvbnN0IGJvZHkgPSBkb2MuYm9keSB8fCB7fVxuICByZXR1cm4gYm9keS50b0pTT04gPyBib2R5LnRvSlNPTigpIDoge31cbn1cblxuLyoqXG4gKiBGaXJlIGFuIGV2ZW50IGZyb20gcmVuZGVyZXIuIFRoZSBldmVudCBoYXMgdHlwZSwgYW4gZXZlbnQgb2JqZWN0IGFuZCBhblxuICogZWxlbWVudCByZWYuIElmIHRoZSBldmVudCBjb21lcyB3aXRoIHNvbWUgdmlydHVhbC1ET00gY2hhbmdlcywgaXQgc2hvdWxkXG4gKiBoYXZlIG9uZSBtb3JlIHBhcmFtZXRlciB0byBkZXNjcmliZSB0aGUgY2hhbmdlcy5cbiAqIEBwYXJhbSAge29iamVjdH0gYXBwXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHJlZlxuICogQHBhcmFtICB7dHlwZX0gICB0eXBlXG4gKiBAcGFyYW0gIHtvYmplY3R9IGVcbiAqIEBwYXJhbSAge29iamVjdH0gZG9tQ2hhbmdlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZmlyZUV2ZW50IChhcHAsIHJlZiwgdHlwZSwgZSwgZG9tQ2hhbmdlcykge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBGaXJlIGEgXCIke3R5cGV9XCIgZXZlbnQgb24gYW4gZWxlbWVudCgke3JlZn0pIGluIGluc3RhbmNlKCR7YXBwLmlkfSlgKVxuICBpZiAoQXJyYXkuaXNBcnJheShyZWYpKSB7XG4gICAgcmVmLnNvbWUoKHJlZikgPT4ge1xuICAgICAgcmV0dXJuIGFwcC5maXJlRXZlbnQocmVmLCB0eXBlLCBlKSAhPT0gZmFsc2VcbiAgICB9KVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGVsID0gYXBwLmRvYy5nZXRSZWYocmVmKVxuICBpZiAoZWwpIHtcbiAgICAvLyBhcHAuZG9jLmNsb3NlKClcbiAgICBjb25zdCByZXN1bHQgPSBhcHAuZG9jLmZpcmVFdmVudChlbCwgdHlwZSwgZSwgZG9tQ2hhbmdlcylcbiAgICB1cGRhdGVBY3Rpb25zKGFwcClcbiAgICBhcHAuZG9jLmxpc3RlbmVyLnVwZGF0ZUZpbmlzaCgpXG4gICAgLy8gYXBwLmRvYy5vcGVuKClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBlbGVtZW50IHJlZmVyZW5jZSBcIiR7cmVmfVwiYClcbn1cblxuLyoqXG4gKiBNYWtlIGEgY2FsbGJhY2sgZm9yIGEgY2VydGFpbiBhcHAuXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgYXBwXG4gKiBAcGFyYW0gIHtudW1iZXJ9ICAgY2FsbGJhY2tJZFxuICogQHBhcmFtICB7YW55fSAgICAgIGRhdGFcbiAqIEBwYXJhbSAge2Jvb2xlYW59ICBpZktlZXBBbGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsbGJhY2sgKGFwcCwgY2FsbGJhY2tJZCwgZGF0YSwgaWZLZWVwQWxpdmUpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gSW52b2tlIGEgY2FsbGJhY2soJHtjYWxsYmFja0lkfSkgd2l0aGAsIGRhdGEsXG4gICAgICAgICAgICBgaW4gaW5zdGFuY2UoJHthcHAuaWR9KWApXG4gIGNvbnN0IGNhbGxiYWNrID0gYXBwLmNhbGxiYWNrc1tjYWxsYmFja0lkXVxuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gYXBwLmRvYy5jbG9zZSgpXG4gICAgY2FsbGJhY2soZGF0YSlcbiAgICBpZiAodHlwZW9mIGlmS2VlcEFsaXZlID09PSAndW5kZWZpbmVkJyB8fCBpZktlZXBBbGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIGFwcC5jYWxsYmFja3NbY2FsbGJhY2tJZF0gPSB1bmRlZmluZWRcbiAgICB9XG4gICAgdXBkYXRlQWN0aW9ucyhhcHApXG4gICAgYXBwLmRvYy5saXN0ZW5lci51cGRhdGVGaW5pc2goKVxuICAgIC8vIGFwcC5kb2Mub3BlbigpXG4gICAgcmV0dXJuXG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBjYWxsYmFjayBpZCBcIiR7Y2FsbGJhY2tJZH1cImApXG59XG5cbi8qKlxuICogQ29sbGVjdCBhbGwgdmlydHVhbC1ET00gbXV0YXRpb25zIHRvZ2V0aGVyIGFuZCBzZW5kIHRoZW0gdG8gcmVuZGVyZXIuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwcFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQWN0aW9ucyAoYXBwKSB7XG4gIGFwcC5kaWZmZXIuZmx1c2goKVxuICBjb25zdCB0YXNrcyA9IFtdXG4gIGlmIChhcHAuZG9jICYmIGFwcC5kb2MubGlzdGVuZXIgJiYgYXBwLmRvYy5saXN0ZW5lci51cGRhdGVzLmxlbmd0aCkge1xuICAgIHRhc2tzLnB1c2goLi4uYXBwLmRvYy5saXN0ZW5lci51cGRhdGVzKVxuICAgIGFwcC5kb2MubGlzdGVuZXIudXBkYXRlcyA9IFtdXG4gIH1cbiAgaWYgKHRhc2tzLmxlbmd0aCkge1xuICAgIHJldHVybiBjYWxsVGFza3MoYXBwLCB0YXNrcylcbiAgfVxufVxuXG4vKipcbiAqIENhbGwgYWxsIHRhc2tzIGZyb20gYW4gYXBwIHRvIHJlbmRlcmVyIChuYXRpdmUpLlxuICogQHBhcmFtICB7b2JqZWN0fSBhcHBcbiAqIEBwYXJhbSAge2FycmF5fSAgdGFza3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGxUYXNrcyAoYXBwLCB0YXNrcykge1xuICBpZiAodHlwb2YodGFza3MpICE9PSAnYXJyYXknKSB7XG4gICAgdGFza3MgPSBbdGFza3NdXG4gIH1cblxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFzay5hcmdzID0gdGFzay5hcmdzLm1hcChhcmcgPT4gbm9ybWFsaXplKGFyZywgYXBwKSlcbiAgfSlcblxuICByZXR1cm4gcmVuZGVyZXIuc2VuZFRhc2tzKGFwcC5pZCwgdGFza3MsICctMScpXG59XG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmFsdWUuIFNwZWNpYWxseSwgaWYgdGhlIHZhbHVlIGlzIGEgZnVuY3Rpb24sIHRoZW4gZ2VuZXJhdGUgYSBmdW5jdGlvbiBpZFxuICogYW5kIHNhdmUgaXQgdG8gYGFwcC5jYWxsYmFja3NgLCBhdCBsYXN0IHJldHVybiB0aGUgZnVuY3Rpb24gaWQuXG4gKiBAcGFyYW0gIHthbnl9ICAgICAgICB2XG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgICBhcHBcbiAqIEByZXR1cm4ge3ByaW1pdGl2ZX1cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplICh2LCBhcHApIHtcbiAgY29uc3QgdHlwZSA9IHR5cG9mKHYpXG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICBjYXNlICdudWxsJzpcbiAgICAgIHJldHVybiAnJ1xuICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICByZXR1cm4gdi50b1N0cmluZygpXG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICByZXR1cm4gdi50b0lTT1N0cmluZygpXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKHYgaW5zdGFuY2VvZiByZW5kZXJlci5FbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB2LnJlZlxuICAgICAgfVxuICAgICAgcmV0dXJuIHZcbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICBhcHAuY2FsbGJhY2tzWysrYXBwLnVpZF0gPSB2XG4gICAgICByZXR1cm4gYXBwLnVpZC50b1N0cmluZygpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvY3RybC9taXNjLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBXZWV4IEFwcCBjb25zdHJ1Y3RvciAmIGRlZmluaXRpb25cbiAqL1xuXG5pbXBvcnQgRGlmZmVyIGZyb20gJy4vZGlmZmVyJ1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4uL2NvbmZpZydcblxuLyoqXG4gKiBBcHAgY29uc3RydWN0b3IgZm9yIFdlZXggZnJhbWV3b3JrLlxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAgKGlkLCBvcHRpb25zKSB7XG4gIHRoaXMuaWQgPSBpZFxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHRoaXMudm0gPSBudWxsXG4gIHRoaXMuY3VzdG9tQ29tcG9uZW50TWFwID0ge31cbiAgdGhpcy5jb21tb25Nb2R1bGVzID0ge31cbiAgdGhpcy5jYWxsYmFja3MgPSB7fVxuICB0aGlzLmRvYyA9IG5ldyByZW5kZXJlci5Eb2N1bWVudChcbiAgICBpZCxcbiAgICB0aGlzLm9wdGlvbnMuYnVuZGxlVXJsLFxuICAgIG51bGwsXG4gICAgcmVuZGVyZXIuTGlzdGVuZXJcbiAgKVxuICB0aGlzLmRpZmZlciA9IG5ldyBEaWZmZXIoaWQpXG4gIHRoaXMudWlkID0gMFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2luc3RhbmNlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlmZmVyIHtcbiAgY29uc3RydWN0b3IgKGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5tYXAgPSBbXVxuICAgIHRoaXMuaG9va3MgPSBbXVxuICB9XG4gIGlzRW1wdHkgKCkge1xuICAgIHJldHVybiB0aGlzLm1hcC5sZW5ndGggPT09IDBcbiAgfVxuICBhcHBlbmQgKHR5cGUsIGRlcHRoLCByZWYsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuaGFzVGltZXIpIHtcbiAgICAgIHRoaXMuaGFzVGltZXIgPSB0cnVlXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oYXNUaW1lciA9IGZhbHNlXG4gICAgICAgIHRoaXMuZmx1c2godHJ1ZSlcbiAgICAgIH0sIDApXG4gICAgfVxuICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwXG4gICAgaWYgKCFtYXBbZGVwdGhdKSB7XG4gICAgICBtYXBbZGVwdGhdID0ge31cbiAgICB9XG4gICAgY29uc3QgZ3JvdXAgPSBtYXBbZGVwdGhdXG4gICAgaWYgKCFncm91cFt0eXBlXSkge1xuICAgICAgZ3JvdXBbdHlwZV0gPSB7fVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgICBpZiAoIWdyb3VwW3R5cGVdW3JlZl0pIHtcbiAgICAgICAgZ3JvdXBbdHlwZV1bcmVmXSA9IFtdXG4gICAgICB9XG4gICAgICBncm91cFt0eXBlXVtyZWZdLnB1c2goaGFuZGxlcilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBncm91cFt0eXBlXVtyZWZdID0gaGFuZGxlclxuICAgIH1cbiAgfVxuICBmbHVzaCAoaXNUaW1lb3V0KSB7XG4gICAgY29uc3QgbWFwID0gdGhpcy5tYXAuc2xpY2UoKVxuICAgIHRoaXMubWFwLmxlbmd0aCA9IDBcbiAgICBtYXAuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgIGNhbGxUeXBlTWFwKGdyb3VwLCAncmVwZWF0JylcbiAgICAgIGNhbGxUeXBlTWFwKGdyb3VwLCAnc2hvd24nKVxuICAgICAgY2FsbFR5cGVMaXN0KGdyb3VwLCAnZWxlbWVudCcpXG4gICAgfSlcblxuICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5zbGljZSgpXG4gICAgdGhpcy5ob29rcy5sZW5ndGggPSAwXG4gICAgaG9va3MuZm9yRWFjaCgoZm4pID0+IHtcbiAgICAgIGZuKClcbiAgICB9KVxuXG4gICAgaWYgKCF0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgdGhpcy5mbHVzaCgpXG4gICAgfVxuICB9XG4gIHRoZW4gKGZuKSB7XG4gICAgdGhpcy5ob29rcy5wdXNoKGZuKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGxUeXBlTWFwIChncm91cCwgdHlwZSkge1xuICBjb25zdCBtYXAgPSBncm91cFt0eXBlXVxuICBmb3IgKGNvbnN0IHJlZiBpbiBtYXApIHtcbiAgICBtYXBbcmVmXSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbFR5cGVMaXN0IChncm91cCwgdHlwZSkge1xuICBjb25zdCBtYXAgPSBncm91cFt0eXBlXVxuICBmb3IgKGNvbnN0IHJlZiBpbiBtYXApIHtcbiAgICBjb25zdCBsaXN0ID0gbWFwW3JlZl1cbiAgICBsaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHsgaGFuZGxlcigpIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9kaWZmZXIuanNcbiAqKi8iLCJleHBvcnQgY29uc3QgaW5zdGFuY2VNYXAgPSB7fVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvc3RhdGljL21hcC5qc1xuICoqLyIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHtcbiAgcmVmcmVzaCxcbiAgZGVzdHJveVxufSBmcm9tICcuLi9hcHAvY3RybCdcbmltcG9ydCB7IGluc3RhbmNlTWFwIH0gZnJvbSAnLi9tYXAnXG5pbXBvcnQgeyByZXNldFRhcmdldCB9IGZyb20gJy4uL2NvcmUvZGVwJ1xuXG4vKipcbiAqIEluaXQgY29uZmlnIGluZm9ybWF0aW9ucyBmb3IgV2VleCBmcmFtZXdvcmtcbiAqIEBwYXJhbSAge29iamVjdH0gY2ZnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0IChjZmcpIHtcbiAgY29uZmlnLkRvY3VtZW50ID0gY2ZnLkRvY3VtZW50XG4gIGNvbmZpZy5FbGVtZW50ID0gY2ZnLkVsZW1lbnRcbiAgY29uZmlnLkNvbW1lbnQgPSBjZmcuQ29tbWVudFxuICBjb25maWcuc2VuZFRhc2tzID0gY2ZnLnNlbmRUYXNrc1xuICBjb25maWcuTGlzdGVuZXIgPSBjZmcuTGlzdGVuZXJcbn1cblxuLyoqXG4gKiBSZWZyZXNoIGEgV2VleCBpbnN0YW5jZSB3aXRoIGRhdGEuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHBhcmFtICB7b2JqZWN0fSBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoSW5zdGFuY2UgKGlkLCBkYXRhKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaWRdXG4gIGxldCByZXN1bHRcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmVzdWx0ID0gcmVmcmVzaChpbnN0YW5jZSwgZGF0YSlcbiAgfVxuICBlbHNlIHtcbiAgICByZXN1bHQgPSBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogRGVzdHJveSBhIFdlZXggaW5zdGFuY2UuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95SW5zdGFuY2UgKGlkKSB7XG4gIHJlc2V0VGFyZ2V0KClcbiAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpZF1cbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxuICBkZXN0cm95KGluc3RhbmNlKVxuICBkZWxldGUgaW5zdGFuY2VNYXBbaWRdXG4gIHJldHVybiBpbnN0YW5jZU1hcFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvc3RhdGljL2xpZmUuanNcbiAqKi8iLCJpbXBvcnQgVm0gZnJvbSAnLi4vdm0nXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7XG4gIGluaXRNb2R1bGVzLFxuICBpbml0TWV0aG9kc1xufSBmcm9tICcuLi9hcHAvcmVnaXN0ZXInXG5cbmNvbnN0IHtcbiAgbmF0aXZlQ29tcG9uZW50TWFwXG59ID0gY29uZmlnXG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIG5hbWUgb2YgZWFjaCBuYXRpdmUgY29tcG9uZW50LlxuICogQHBhcmFtICB7YXJyYXl9IGNvbXBvbmVudHMgYXJyYXkgb2YgbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnRzIChjb21wb25lbnRzKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGNvbXBvbmVudHMpKSB7XG4gICAgY29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIHJlZ2lzdGVyIChuYW1lKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghbmFtZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbmF0aXZlQ29tcG9uZW50TWFwW25hbWVdID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBuYW1lLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hdGl2ZUNvbXBvbmVudE1hcFtuYW1lLnR5cGVdID0gbmFtZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgbmFtZSBhbmQgbWV0aG9kcyBvZiBlYWNoIG1vZHVsZS5cbiAqIEBwYXJhbSAge29iamVjdH0gbW9kdWxlcyBhIG9iamVjdCBvZiBtb2R1bGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1vZHVsZXMgKG1vZHVsZXMpIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnb2JqZWN0Jykge1xuICAgIGluaXRNb2R1bGVzKG1vZHVsZXMpXG4gIH1cbn1cblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgbmFtZSBhbmQgbWV0aG9kcyBvZiBlYWNoIGFwaS5cbiAqIEBwYXJhbSAge29iamVjdH0gYXBpcyBhIG9iamVjdCBvZiBhcGlzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1ldGhvZHMgKG1ldGhvZHMpIHtcbiAgaWYgKHR5cGVvZiBtZXRob2RzID09PSAnb2JqZWN0Jykge1xuICAgIGluaXRNZXRob2RzKFZtLCBtZXRob2RzKVxuICB9XG59XG5cbi8vIEB0b2RvOiBIYWNrIGZvciB0aGlzIGZyYW1ld29yayBvbmx5LiBXaWxsIGJlIHJlLWRlc2lnbmVkIG9yIHJlbW92ZWQgbGF0ZXIuXG5nbG9iYWwucmVnaXN0ZXJNZXRob2RzID0gcmVnaXN0ZXJNZXRob2RzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9zdGF0aWMvcmVnaXN0ZXIuanNcbiAqKi8iLCJpbXBvcnQgeyBpbnN0YW5jZU1hcCB9IGZyb20gJy4vbWFwJ1xuaW1wb3J0IHtcbiAgZmlyZUV2ZW50LFxuICBjYWxsYmFja1xufSBmcm9tICcuLi9hcHAvY3RybCdcblxuY29uc3QganNIYW5kbGVycyA9IHtcbiAgZmlyZUV2ZW50OiAoaWQsIC4uLmFyZ3MpID0+IHtcbiAgICByZXR1cm4gZmlyZUV2ZW50KGluc3RhbmNlTWFwW2lkXSwgLi4uYXJncylcbiAgfSxcbiAgY2FsbGJhY2s6IChpZCwgLi4uYXJncykgPT4ge1xuICAgIHJldHVybiBjYWxsYmFjayhpbnN0YW5jZU1hcFtpZF0sIC4uLmFyZ3MpXG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHQgY2FsbHMgZnJvbSBuYXRpdmUgKGV2ZW50IG9yIGNhbGxiYWNrKS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0gIHthcnJheX0gdGFza3MgbGlzdCB3aXRoIGBtZXRob2RgIGFuZCBgYXJnc2BcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlY2VpdmVUYXNrcyAoaWQsIHRhc2tzKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaWRdXG4gIGlmIChpbnN0YW5jZSAmJiBBcnJheS5pc0FycmF5KHRhc2tzKSkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXVxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBqc0hhbmRsZXJzW3Rhc2subWV0aG9kXVxuICAgICAgY29uc3QgYXJncyA9IFsuLi50YXNrLmFyZ3NdXG4gICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYXJncy51bnNoaWZ0KGlkKVxuICAgICAgICByZXN1bHRzLnB1c2goaGFuZGxlciguLi5hcmdzKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCIgb3IgdGFza3NgKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvc3RhdGljL2JyaWRnZS5qc1xuICoqLyIsImltcG9ydCB7IGluc3RhbmNlTWFwIH0gZnJvbSAnLi9tYXAnXG5pbXBvcnQge1xuICBnZXRSb290RWxlbWVudFxufSBmcm9tICcuLi9hcHAvY3RybCdcblxuLyoqXG4gKiBHZXQgYSB3aG9sZSBlbGVtZW50IHRyZWUgb2YgYW4gaW5zdGFuY2UgZm9yIGRlYnVnZ2luZy5cbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge29iamVjdH0gYSB2aXJ0dWFsIGRvbSB0cmVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290IChpZCkge1xuICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2lkXVxuICBsZXQgcmVzdWx0XG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJlc3VsdCA9IGdldFJvb3RFbGVtZW50KGluc3RhbmNlKVxuICB9XG4gIGVsc2Uge1xuICAgIHJlc3VsdCA9IG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9taXNjLmpzXG4gKiovIiwibGV0IGZyYW1ld29ya3NcblxuY29uc3QgdmVyc2lvblJlZ0V4cCA9IC9eXFwvXFwvICooXFx7W15cXH1dKlxcfSkgKlxccj9cXG4vXG5cbi8qKlxuICogRGV0ZWN0IGEgSlMgQnVuZGxlIGNvZGUgYW5kIG1ha2Ugc3VyZSB3aGljaCBmcmFtZXdvcmsgaXQncyBiYXNlZCB0by4gRWFjaCBKU1xuICogQnVuZGxlIHNob3VsZCBtYWtlIHN1cmUgdGhhdCBpdCBzdGFydHMgd2l0aCBhIGxpbmUgb2YgSlNPTiBjb21tZW50IGFuZCBpc1xuICogbW9yZSB0aGF0IG9uZSBsaW5lLlxuICogQHBhcmFtICB7c3RyaW5nfSBjb2RlXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGNoZWNrVmVyc2lvbiAoY29kZSkge1xuICBsZXQgaW5mb1xuICBjb25zdCByZXN1bHQgPSB2ZXJzaW9uUmVnRXhwLmV4ZWMoY29kZSlcbiAgaWYgKHJlc3VsdCkge1xuICAgIHRyeSB7XG4gICAgICBpbmZvID0gSlNPTi5wYXJzZShyZXN1bHRbMV0pXG4gICAgfVxuICAgIGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiBpbmZvXG59XG5cbmNvbnN0IGluc3RhbmNlTWFwID0ge31cblxuLyoqXG4gKiBDaGVjayB3aGljaCBmcmFtZXdvcmsgYSBjZXJ0YWluIEpTIEJ1bmRsZSBjb2RlIGJhc2VkIHRvLiBBbmQgY3JlYXRlIGluc3RhbmNlXG4gKiBieSB0aGlzIGZyYW1ld29yay5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHBhcmFtIHtzdHJpbmd9IGNvZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlIChpZCwgY29kZSwgY29uZmlnLCBkYXRhKSB7XG4gIGxldCBpbmZvID0gaW5zdGFuY2VNYXBbaWRdXG4gIGlmICghaW5mbykge1xuICAgIGluZm8gPSBjaGVja1ZlcnNpb24oY29kZSkgfHwge31cbiAgICBpZiAoIWZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdKSB7XG4gICAgICBpbmZvLmZyYW1ld29yayA9ICdXZWV4J1xuICAgIH1cbiAgICBpbnN0YW5jZU1hcFtpZF0gPSBpbmZvXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9XG4gICAgY29uZmlnLmJ1bmRsZVZlcnNpb24gPSBpbmZvLnZlcnNpb25cbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjcmVhdGUgYW4gJHtpbmZvLmZyYW1ld29ya31AJHtjb25maWcuYnVuZGxlVmVyc2lvbn0gaW5zdGFuY2UgZnJvbSAke2NvbmZpZy5idW5kbGVWZXJzaW9ufWApXG4gICAgcmV0dXJuIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdLmNyZWF0ZUluc3RhbmNlKGlkLCBjb2RlLCBjb25maWcsIGRhdGEpXG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxufVxuXG5jb25zdCBtZXRob2RzID0ge1xuICBjcmVhdGVJbnN0YW5jZVxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIG1ldGhvZHMgd2hpY2ggaW5pdCBlYWNoIGZyYW1ld29ya3MuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICovXG5mdW5jdGlvbiBnZW5Jbml0IChtZXRob2ROYW1lKSB7XG4gIG1ldGhvZHNbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiBmcmFtZXdvcmtzKSB7XG4gICAgICBjb25zdCBmcmFtZXdvcmsgPSBmcmFtZXdvcmtzW25hbWVdXG4gICAgICBpZiAoZnJhbWV3b3JrICYmIGZyYW1ld29ya1ttZXRob2ROYW1lXSkge1xuICAgICAgICBmcmFtZXdvcmtbbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZWdpc3RlciBtZXRob2RzIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGluc3RhbmNlLlxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAqL1xuZnVuY3Rpb24gZ2VuSW5zdGFuY2UgKG1ldGhvZE5hbWUpIHtcbiAgbWV0aG9kc1ttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgY29uc3QgaWQgPSBhcmdzWzBdXG4gICAgY29uc3QgaW5mbyA9IGluc3RhbmNlTWFwW2lkXVxuICAgIGlmIChpbmZvICYmIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdKSB7XG4gICAgICByZXR1cm4gZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya11bbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxuICB9XG59XG5cbi8qKlxuICogQWRhcHQgc29tZSBsZWdhY3kgbWV0aG9kKHMpIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGluc3RhbmNlLiBUaGVzZVxuICogbWV0aG9kcyBzaG91bGQgYmUgZGVwcmVjYXRlZCBhbmQgcmVtb3ZlZCBsYXRlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gbmF0aXZlTWV0aG9kTmFtZVxuICovXG5mdW5jdGlvbiBhZGFwdEluc3RhbmNlIChtZXRob2ROYW1lLCBuYXRpdmVNZXRob2ROYW1lKSB7XG4gIG1ldGhvZHNbbmF0aXZlTWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNvbnN0IGlkID0gYXJnc1swXVxuICAgIGNvbnN0IGluZm8gPSBpbnN0YW5jZU1hcFtpZF1cbiAgICBpZiAoaW5mbyAmJiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXSkge1xuICAgICAgcmV0dXJuIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0IChjb25maWcpIHtcbiAgZnJhbWV3b3JrcyA9IGNvbmZpZy5mcmFtZXdvcmtzIHx8IHt9XG5cbiAgLy8gSW5pdCBlYWNoIGZyYW1ld29yayBieSBgaW5pdGAgbWV0aG9kIGFuZCBgY29uZmlnYCB3aGljaCBjb250YWlucyB0aHJlZVxuICAvLyB2aXJ0dWFsLURPTSBDbGFzczogYERvY3VtZW50YCwgYEVsZW1lbnRgICYgYENvbW1lbnRgLCBhbmQgYSBKUyBicmlkZ2UgbWV0aG9kOlxuICAvLyBgc2VuZFRhc2tzKC4uLmFyZ3MpYC5cbiAgZm9yIChjb25zdCBuYW1lIGluIGZyYW1ld29ya3MpIHtcbiAgICBjb25zdCBmcmFtZXdvcmsgPSBmcmFtZXdvcmtzW25hbWVdXG4gICAgZnJhbWV3b3JrLmluaXQoY29uZmlnKVxuICB9XG5cbiAgLy8gQHRvZG86IFRoZSBtZXRob2QgYHJlZ2lzdGVyTWV0aG9kc2Agd2lsbCBiZSByZS1kZXNpZ25lZCBvciByZW1vdmVkIGxhdGVyLlxuICA7IFsncmVnaXN0ZXJDb21wb25lbnRzJywgJ3JlZ2lzdGVyTW9kdWxlcycsICdyZWdpc3Rlck1ldGhvZHMnXS5mb3JFYWNoKGdlbkluaXQpXG5cbiAgOyBbJ2Rlc3Ryb3lJbnN0YW5jZScsICdyZWZyZXNoSW5zdGFuY2UnLCAncmVjZWl2ZVRhc2tzJywgJ2dldFJvb3QnXS5mb3JFYWNoKGdlbkluc3RhbmNlKVxuXG4gIGFkYXB0SW5zdGFuY2UoJ3JlY2VpdmVUYXNrcycsICdjYWxsSlMnKVxuXG4gIHJldHVybiBtZXRob2RzXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvcnVudGltZS9pbml0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmFtZVwiOiBcIndlZXgtanMtZnJhbWV3b3JrXCIsXG5cdFwidmVyc2lvblwiOiBcIjAuMTUuMTBcIixcblx0XCJzdWJ2ZXJzaW9uXCI6IHtcblx0XHRcImZyYW1ld29ya1wiOiBcIjAuMTUuMTBcIixcblx0XHRcInRyYW5zZm9ybWVyXCI6IFwiPj0wLjEuNSA8MC40XCJcblx0fSxcblx0XCJkZXNjcmlwdGlvblwiOiBcIldlZXggSlMgRnJhbWV3b3JrXCIsXG5cdFwia2V5d29yZHNcIjogW1xuXHRcdFwid2VleFwiLFxuXHRcdFwibXZ2bVwiLFxuXHRcdFwiamF2YXNjcmlwdFwiLFxuXHRcdFwiaHRtbDVcIlxuXHRdLFxuXHRcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9hbGliYWJhLmdpdGh1Yi5pby93ZWV4XCIsXG5cdFwiYnVnc1wiOiB7XG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYWxpYmFiYS93ZWV4L2lzc3Vlc1wiXG5cdH0sXG5cdFwibGljZW5zZVwiOiBcIkFwYWNoZS0yLjBcIixcblx0XCJhdXRob3JcIjogXCJKaW5qaWFuZyA8emhhb2ppbmppYW5nQG1lLmNvbT5cIixcblx0XCJtYWludGFpbmVyc1wiOiBbXG5cdFx0XCJ0ZXJyeWtpbmdjaGEgPHRlcnJ5a2luZ2NoYUBnbWFpbC5jb20+XCIsXG5cdFx0XCJJc2tlbkh1YW5nIDxpc2tlbmh1YW5nQGdtYWlsLmNvbT5cIixcblx0XHRcInl1YW55YW4gPHl1YW55YW4uY2FvQGdtYWlsLmNvbT5cIlxuXHRdLFxuXHRcIm1haW5cIjogXCJpbmRleC5qc1wiLFxuXHRcInJlcG9zaXRvcnlcIjoge1xuXHRcdFwidHlwZVwiOiBcImdpdFwiLFxuXHRcdFwidXJsXCI6IFwiZ2l0QGdpdGh1Yi5jb206YWxpYmFiYS93ZWV4LmdpdFwiXG5cdH0sXG5cdFwic2NyaXB0c1wiOiB7XG5cdFx0XCJ0ZXN0XCI6IFwiZWNobyBcXFwiRXJyb3I6IG5vIHRlc3Qgc3BlY2lmaWVkXFxcIiAmJiBleGl0IDFcIlxuXHR9LFxuXHRcImRlcGVuZGVuY2llc1wiOiB7XG5cdFx0XCJjb3JlLWpzXCI6IFwiXjIuNC4wXCIsXG5cdFx0XCJzZW12ZXJcIjogXCJeNS4xLjBcIlxuXHR9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvcGFja2FnZS5qc29uXG4gKiogbW9kdWxlIGlkID0gMTE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgVGhlIGFwaSBmb3IgaW52b2tpbmcgd2l0aCBcIiRcIiBwcmVmaXhcbiAqL1xuaW1wb3J0IHsgZXh0ZW5kLCB0eXBvZiB9IGZyb20gJy4uL3V0aWwnXG5cbi8qKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogY29tbW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgJHZtIGluc3RlYWRcbiAqIGZpbmQgdGhlIHZtIGJ5IGlkXG4gKiBOb3RlOiB0aGVyZSBpcyBvbmx5IG9uZSBpZCBpbiB3aG9sZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge1ZtfVxuICovXG5leHBvcnQgZnVuY3Rpb24gJCAoaWQpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgVm0jJHZtIGluc3RlYWQnKVxuICBjb25zdCBpbmZvID0gdGhpcy5faWRzW2lkXVxuICBpZiAoaW5mbykge1xuICAgIHJldHVybiBpbmZvLnZtXG4gIH1cbn1cblxuLyoqXG4gKiBmaW5kIHRoZSBlbGVtZW50IGJ5IGlkXG4gKiBOb3RlOiB0aGVyZSBpcyBvbmx5IG9uZSBpZCBpbiB3aG9sZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkZWwgKGlkKSB7XG4gIGNvbnN0IGluZm8gPSB0aGlzLl9pZHNbaWRdXG4gIGlmIChpbmZvKSB7XG4gICAgcmV0dXJuIGluZm8uZWxcbiAgfVxufVxuXG4vKipcbiAqIGZpbmQgdGhlIHZtIG9mIHRoZSBjdXN0b20gY29tcG9uZW50IGJ5IGlkXG4gKiBOb3RlOiB0aGVyZSBpcyBvbmx5IG9uZSBpZCBpbiB3aG9sZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge1ZtfVxuICovXG5leHBvcnQgZnVuY3Rpb24gJHZtIChpZCkge1xuICBjb25zdCBpbmZvID0gdGhpcy5faWRzW2lkXVxuICBpZiAoaW5mbykge1xuICAgIHJldHVybiBpbmZvLnZtXG4gIH1cbn1cblxuLyoqXG4gKiBGaXJlIHdoZW4gZGlmZmVyIHJlbmRlcmluZyBmaW5pc2hlZFxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmblxuICovXG5leHBvcnQgZnVuY3Rpb24gJHJlbmRlclRoZW4gKGZuKSB7XG4gIGNvbnN0IGFwcCA9IHRoaXMuX2FwcFxuICBjb25zdCBkaWZmZXIgPSBhcHAuZGlmZmVyXG4gIHJldHVybiBkaWZmZXIudGhlbigoKSA9PiB7XG4gICAgZm4oKVxuICB9KVxufVxuXG4vKipcbiAqIHNjcm9sbCBhbiBlbGVtZW50IHNwZWNpZmllZCBieSBpZCBpbnRvIHZpZXcsXG4gKiBtb3Jlb3ZlciBzcGVjaWZ5IGEgbnVtYmVyIG9mIG9mZnNldCBvcHRpb25hbGx5XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG9mZnNldFxuICovXG5leHBvcnQgZnVuY3Rpb24gJHNjcm9sbFRvIChpZCwgb2Zmc2V0KSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJHNjcm9sbFRvIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvZG9tXFwnKScgK1xuICAgICAgICAgICcuc2Nyb2xsVG8oZWwsIG9wdGlvbnMpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IGVsID0gdGhpcy4kZWwoaWQpXG4gIGlmIChlbCkge1xuICAgIGNvbnN0IGRvbSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdkb20nKVxuICAgIGRvbS5zY3JvbGxUb0VsZW1lbnQoZWwucmVmLCB7IG9mZnNldDogb2Zmc2V0IH0pXG4gIH1cbn1cblxuLyoqXG4gKiBwZXJmb3JtIHRyYW5zaXRpb24gYW5pbWF0aW9uIG9uIGFuIGVsZW1lbnQgc3BlY2lmaWVkIGJ5IGlkXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgaWRcbiAqIEBwYXJhbSAge29iamVjdH0gICBvcHRpb25zXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgb3B0aW9ucy5zdHlsZXNcbiAqIEBwYXJhbSAge29iamVjdH0gICBvcHRpb25zLmR1cmF0aW9uKG1zKVxuICogQHBhcmFtICB7b2JqZWN0fSAgIFtvcHRpb25zLnRpbWluZ0Z1bmN0aW9uXVxuICogQHBhcmFtICB7b2JqZWN0fSAgIFtvcHRpb25zLmRlbGF5PTAobXMpXVxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkdHJhbnNpdGlvbiAoaWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGVsID0gdGhpcy4kZWwoaWQpXG4gIGlmIChlbCAmJiBvcHRpb25zICYmIG9wdGlvbnMuc3R5bGVzKSB7XG4gICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ2FuaW1hdGlvbicpXG4gICAgYW5pbWF0aW9uLnRyYW5zaXRpb24oZWwucmVmLCBvcHRpb25zLCAoLi4uYXJncykgPT4ge1xuICAgICAgdGhpcy5fc2V0U3R5bGUoZWwsIG9wdGlvbnMuc3R5bGVzKVxuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soLi4uYXJncylcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogZ2V0IHNvbWUgY29uZmlnXG4gKiBAcmV0dXJuIHtvYmplY3R9IHNvbWUgY29uZmlnIGZvciBhcHAgaW5zdGFuY2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBidW5kbGVVcmxcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGVidWdcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBlbnZcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYud2VleFZlcnNpb24oZXguIDEuMC4wKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5hcHBOYW1lKGV4LiBUQi9UTSlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYuYXBwVmVyc2lvbihleC4gNS4wLjApXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LnBsYXRmb3JtKGV4LiBpT1MvQW5kcm9pZClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYub3NWZXJzaW9uKGV4LiA3LjAuMClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYuZGV2aWNlTW9kZWwgKipuYXRpdmUgb25seSoqXG4gKiBAcHJvcGVydHkge251bWJlcn0gZW52LltkZXZpY2VXaWR0aD03NTBdXG4gKiBAcHJvcGVydHkge251bWJlcn0gZW52LmRldmljZUhlaWdodFxuICovXG5leHBvcnQgZnVuY3Rpb24gJGdldENvbmZpZyAoY2FsbGJhY2spIHtcbiAgY29uc3QgY29uZmlnID0gZXh0ZW5kKHtcbiAgICBlbnY6IGdsb2JhbC5XWEVudmlyb25tZW50IHx8IHt9XG4gIH0sIHRoaXMuX2FwcC5vcHRpb25zKVxuICBpZiAodHlwb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSB0aGUgY2FsbGJhY2sgb2YgVm0jJGdldENvbmZpZyhjYWxsYmFjaykgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAndGhpcyBhcGkgbm93IGNhbiBkaXJlY3RseSBSRVRVUk4gY29uZmlnIGluZm8uJylcbiAgICBjYWxsYmFjayhjb25maWcpXG4gIH1cbiAgcmV0dXJuIGNvbmZpZ1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiByZXF1ZXN0IG5ldHdvcmsgdmlhIGh0dHAgcHJvdG9jb2xcbiAqIEBwYXJhbSAge29iamVjdH0gICBwYXJhbXNcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJHNlbmRIdHRwIChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJHNlbmRIdHRwIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvc3RyZWFtXFwnKScgK1xuICAgICAgICAgICcuc2VuZEh0dHAocGFyYW1zLCBjYWxsYmFjaylcIiBpbnN0ZWFkJylcbiAgY29uc3Qgc3RyZWFtID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpXG4gIHN0cmVhbS5zZW5kSHR0cChwYXJhbXMsIGNhbGxiYWNrKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiBvcGVuIGEgdXJsXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVybFxuICovXG5leHBvcnQgZnVuY3Rpb24gJG9wZW5VUkwgKHVybCkge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRvcGVuVVJMIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvZXZlbnRcXCcpJyArXG4gICAgICAgICAgJy5vcGVuVVJMKHVybClcIiBpbnN0ZWFkJylcbiAgY29uc3QgZXZlbnQgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnZXZlbnQnKVxuICBldmVudC5vcGVuVVJMKHVybClcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogc2V0IGEgdGl0bGUgZm9yIHBhZ2VcbiAqIEBwYXJhbSAge3N0cmluZ30gdGl0bGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzZXRUaXRsZSAodGl0bGUpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkc2V0VGl0bGUgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9wYWdlSW5mb1xcJyknICtcbiAgICAgICAgICAnLnNldFRpdGxlKHRpdGxlKVwiIGluc3RlYWQnKVxuICBjb25zdCBwYWdlSW5mbyA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdwYWdlSW5mbycpXG4gIHBhZ2VJbmZvLnNldFRpdGxlKHRpdGxlKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIHVzZSBcInJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9tb2R1bGVOYW1lJykgaW5zdGVhZFwiXG4gKiBpbnZva2UgYSBuYXRpdmUgbWV0aG9kIGJ5IHNwZWNpZmluZyB0aGUgbmFtZSBvZiBtb2R1bGUgYW5kIG1ldGhvZFxuICogQHBhcmFtICB7c3RyaW5nfSBtb2R1bGVOYW1lXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAqIEBwYXJhbSAgey4uLip9IHRoZSByZXN0IGFyZ3VtZW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gJGNhbGwgKG1vZHVsZU5hbWUsIG1ldGhvZE5hbWUsIC4uLmFyZ3MpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkY2FsbCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL21vZHVsZU5hbWVcXCcpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IG1vZHVsZSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKG1vZHVsZU5hbWUpXG4gIGlmIChtb2R1bGUgJiYgbW9kdWxlW21ldGhvZE5hbWVdKSB7XG4gICAgbW9kdWxlW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwaS9tZXRob2RzLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IFRoZSBhcGkgZm9yIGludm9raW5nIHdpdGggXCIkXCIgcHJlZml4XG4gKi9cblxuLyoqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBwcml2YXRlIGZvciBhbGlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIGludm9rZSB1c2VyLXRyYWNrIG9uIFRhb2JhbyBNb2JsaWVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBl77yaZW50ZXIsIGNsaWNrLCBleHBvc2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tTmFtZVxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtXG4qL1xuZXhwb3J0IGZ1bmN0aW9uICR1c2VyVHJhY2sodHlwZSwgbmFtZSwgY29tTmFtZSwgcGFyYW0pIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkdXNlclRyYWNrIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvdXNlclRyYWNrXFwnKScgK1xuICAgICAgICAgICcuY29tbWl0KHR5cGUsIG5hbWUsIGNvbU5hbWUsIHBhcmFtKVwiIGluc3RlYWQnKVxuICBjb25zdCB1c2VyVHJhY2sgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgndXNlclRyYWNrJylcbiAgdXNlclRyYWNrLmNvbW1pdCh0eXBlLCBuYW1lLCBjb21OYW1lLCBwYXJhbSlcbn1cblxuLyoqXG4gKiByZXF1ZXN0IGEgcmVzdGZ1bGwgYXBpIHZpYSB0aGUgbXRvcCBnYXRld2F5XG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgcGFyYW1zXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzZW5kTXRvcChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJHNlbmRNdG9wIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvc3RyZWFtXFwnKScgK1xuICAgICAgICAgICcuc2VuZE10b3AocGFyYW1zLCBjYWxsYmFjaylcIiBpbnN0ZWFkJylcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gaW4gbmF0aXZl77yMdXNlIHdpbmR2YW5lXG4gICAgY29uc3Qgd2luZHZhbmUgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnd2luZHZhbmUnKVxuICAgIHdpbmR2YW5lLmNhbGwoe1xuICAgICAgY2xhc3M6ICdNdG9wV1ZQbHVnaW4nLFxuICAgICAgbWV0aG9kOiAnc2VuZCcsXG4gICAgICBkYXRhOiBwYXJhbXNcbiAgICB9LCBjYWxsYmFjaylcbiAgfSBlbHNlIHtcbiAgICAvLyBpbiB3ZWIgYnJ3b3Nlcu+8jHVzZSBzdHJlYW0uc2VuZE10b3BcbiAgICBjb25zdCBzdHJlYW0gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnc3RyZWFtJylcbiAgICBzdHJlYW0uc2VuZE10b3AocGFyYW1zLCBjYWxsYmFjaylcbiAgfVxufVxuXG4vKipcbiAqIHJlcXVlc3QgYSBuYXRpdmUgYXBpIHZpYSB3aW5kdmFuZSBwcm90b2NvbFxuICogQHBhcmFtICB7b2JqZWN0fSAgIHBhcmFtc1xuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkY2FsbFdpbmR2YW5lKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkY2FsbFdpbmR2YW5lIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvd2luZHZhbmVcXCcpJyArXG4gICAgICAgICAgJy5jYWxsKHBhcmFtcywgY2FsbGJhY2spXCIgaW5zdGVhZCcpXG4gIGNvbnN0IHdpbmR2YW5lID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3dpbmR2YW5lJylcbiAgd2luZHZhbmUuY2FsbChwYXJhbXMsIGNhbGxiYWNrKVxufVxuXG4vKipcbiAqIHNldCBzcG0gZm9yIHRoZSBwYWdlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGFcbiAqIEBwYXJhbSAge3N0cmluZ30gYlxuICovXG5leHBvcnQgZnVuY3Rpb24gJHNldFNwbShhLCBiKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJHNldFNwbSBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3BhZ2VJbmZvXFwnKScgK1xuICAgICAgICAgICcuc2V0U3BtKGEsIGIpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IHBhZ2VJbmZvID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3BhZ2VJbmZvJylcbiAgcGFnZUluZm8uc2V0U3BtKGEsIGIpXG59XG5cbi8qKlxuICogZ2V0IHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgY3VycmVudCBsb2dpbmVkIHVzZXJcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJGdldFVzZXJJbmZvKGNhbGxiYWNrKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJGdldFVzZXJJbmZvIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvdXNlclxcJyknICtcbiAgICAgICAgICAnLmdldFVzZXJJbmZvKGNhbGxiYWNrKVwiIGluc3RlYWQnKVxuICBjb25zdCB1c2VyID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3VzZXInKVxuICB1c2VyLmdldFVzZXJJbmZvKGNhbGxiYWNrKVxufVxuXG4vKipcbiAqIHBlcmZvcm0gbG9naW5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJGxvZ2luKGNhbGxiYWNrKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJGxvZ2luIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvdXNlclxcJyknICtcbiAgICAgICAgICAnLmxvZ2luKGNhbGxiYWNrKVwiIGluc3RlYWQnKVxuICBjb25zdCB1c2VyID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3VzZXInKVxuICB1c2VyLmxvZ2luKGNhbGxiYWNrKVxufVxuXG4vKipcbiAqIHBlcmZvcm0gbG9nb3V0XG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRsb2dvdXQoY2FsbGJhY2spIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkbG9nb3V0IGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvdXNlclxcJyknICtcbiAgICAgICAgICAnLmxvZ291dChjYWxsYmFjaylcIiBpbnN0ZWFkJylcbiAgY29uc3QgdXNlciA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCd1c2VyJylcbiAgdXNlci5sb2dvdXQoY2FsbGJhY2spXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9hcGkvbWV0aG9kcy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=