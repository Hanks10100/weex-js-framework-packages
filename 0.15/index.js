(this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK: 0.15.11 Build 20161010');(this.getJSFMVersion = function(){return "0.15.11"});
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
	  var value = {};
	  try {
	    value = this.getter.call(this.vm, this.vm);
	  } catch (e) {
	    console.log(e);
	  }
	
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
		"version": "0.15.11",
		"subversion": {
			"framework": "0.15.11",
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
		"author": {
			"name": "Jinjiang",
			"email": "zhaojinjiang@me.com"
		},
		"maintainers": [
			{
				"name": "fkysly",
				"email": "fkysly@gmail.com"
			},
			{
				"name": "hanks",
				"email": "zhanghan.me@gmail.com"
			},
			{
				"name": "jinjiang",
				"email": "zhaojinjiang@me.com"
			}
		],
		"main": "index.js",
		"repository": {
			"type": "git",
			"url": "git+ssh://git@github.com/alibaba/weex.git"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"dependencies": {
			"core-js": "^2.4.0",
			"semver": "^5.1.0"
		},
		"_id": "weex-js-framework@0.15.11",
		"_shasum": "ac04446458b950744bad8430402ea50599a015c7",
		"_from": "weex-js-framework@0.15.11",
		"_npmVersion": "3.8.6",
		"_nodeVersion": "6.0.0",
		"_npmUser": {
			"name": "fkysly",
			"email": "fkysly@gmail.com"
		},
		"dist": {
			"shasum": "ac04446458b950744bad8430402ea50599a015c7",
			"size": 37146,
			"noattachment": false,
			"key": "weex-js-framework/-/weex-js-framework-0.15.11.tgz",
			"tarball": "http://registry.npm.alibaba-inc.com/weex-js-framework/download/weex-js-framework-0.15.11.tgz"
		},
		"_npmOperationalInternal": {
			"host": "packages-16-east.internal.npmjs.com",
			"tmp": "tmp/weex-js-framework-0.15.11.tgz_1476121110041_0.029631946235895157"
		},
		"directories": {},
		"publish_time": 1476121111142,
		"_cnpm_publish_time": 1476121111142,
		"_resolved": "http://registry.npm.alibaba-inc.com/weex-js-framework/download/weex-js-framework-0.15.11.tgz",
		"readme": "ERROR: No README data found!"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTFkODc1MDNiZjRiODQzNWQyNzIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9uYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL3NoYXJlZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9zaGFyZWQvc2V0VGltZW91dC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9zaGFyZWQvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3RvLWluZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9zaGFyZWQvY29uc29sZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9zaGFyZWQvb2JqZWN0QXNzaWduLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy92ZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL3Zkb20vbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvcnVudGltZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvY3RybC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9jdHJsL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC91dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2J1bmRsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9idW5kbGUvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvfi9zZW12ZXIvc2VtdmVyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3ZtL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2NvcmUvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2NvcmUvZGVwLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2NvcmUvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC92bS9jb21waWxlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3ZtL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3ZtL2RvbS1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC92bS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvZG93bmdyYWRlLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2J1bmRsZS9kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvY3RybC9taXNjLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2luc3RhbmNlLmpzIiwid2VicGFjazovLy8uL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2RpZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9zdGF0aWMvbGlmZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9icmlkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9zdGF0aWMvbWlzYy5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9ydW50aW1lL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9wYWNrYWdlLmpzb24iLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcGkvbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvYXBpL21ldGhvZHMuanMiXSwibmFtZXMiOlsibWV0aG9kcyIsInJlcXVpcmUiLCJnbG9iYWwiLCJyZWdpc3Rlck1ldGhvZHMiLCJuYXRpdmUiLCJ0cmFuc2Zvcm1lciIsIm1ldGhvZE5hbWUiLCJyZXQiLCJFcnJvciIsImNvbnNvbGUiLCJlcnJvciIsInRvU3RyaW5nIiwiZnJhbWV3b3JrVmVyc2lvbiIsInRyYW5zZm9ybWVyVmVyc2lvbiIsImV4dGVuZCIsImRlZiIsInJlbW92ZSIsImhhc093biIsImJpbmQiLCJ0b0FycmF5IiwiaXNPYmplY3QiLCJpc1BsYWluT2JqZWN0IiwidGFyZ2V0Iiwic3JjIiwiT2JqZWN0IiwiYXNzaWduIiwiZmlyc3QiLCJzaGlmdCIsImtleSIsImxlbmd0aCIsIm9iaiIsInZhbCIsImVudW1lcmFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJhcnIiLCJpdGVtIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiaGFzT3duUHJvcGVydHkiLCJwcm90b3R5cGUiLCJjYWxsIiwiZm4iLCJjdHgiLCJhIiwibCIsImFyZ3VtZW50cyIsImFwcGx5IiwibGlzdCIsInN0YXJ0IiwiaSIsIkFycmF5IiwiT0JKRUNUX1NUUklORyIsInNldFRpbWVvdXQiLCJzZXRUaW1lb3V0TmF0aXZlIiwidGltZW91dE1hcCIsInRpbWVvdXRJZCIsImNiIiwidGltZSIsInNldFRpbWVvdXRDYWxsYmFjayIsImlkIiwiV1hFbnZpcm9ubWVudCIsInBsYXRmb3JtIiwiUHJvbWlzZSIsImNsYXNzb2YiLCJ0ZXN0IiwiY29mIiwiVEFHIiwiQVJHIiwidHJ5R2V0IiwiaXQiLCJlIiwibW9kdWxlIiwiZXhwb3J0cyIsIk8iLCJUIiwiQiIsInVuZGVmaW5lZCIsImNhbGxlZSIsInNsaWNlIiwic3RvcmUiLCJ1aWQiLCJTeW1ib2wiLCJVU0VfU1lNQk9MIiwiJGV4cG9ydHMiLCJuYW1lIiwiU0hBUkVEIiwid2luZG93IiwiTWF0aCIsInNlbGYiLCJGdW5jdGlvbiIsIl9fZyIsInB4IiwicmFuZG9tIiwiY29uY2F0IiwiaGlkZSIsImhhcyIsIlNSQyIsIlRPX1NUUklORyIsIiR0b1N0cmluZyIsIlRQTCIsInNwbGl0IiwiaW5zcGVjdFNvdXJjZSIsInNhZmUiLCJpc0Z1bmN0aW9uIiwiam9pbiIsIlN0cmluZyIsImRQIiwiY3JlYXRlRGVzYyIsIm9iamVjdCIsImYiLCJhbk9iamVjdCIsIklFOF9ET01fREVGSU5FIiwidG9QcmltaXRpdmUiLCJQIiwiQXR0cmlidXRlcyIsIlR5cGVFcnJvciIsImdldCIsImV4ZWMiLCJkb2N1bWVudCIsImlzIiwiY3JlYXRlRWxlbWVudCIsIlMiLCJ2YWx1ZU9mIiwiYml0bWFwIiwiY29yZSIsInZlcnNpb24iLCJfX2UiLCIkYXQiLCJpdGVyYXRlZCIsIl90IiwiX2kiLCJwb2ludCIsImRvbmUiLCJ0b0ludGVnZXIiLCJkZWZpbmVkIiwidGhhdCIsInBvcyIsInMiLCJiIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwiTElCUkFSWSIsIiRleHBvcnQiLCJyZWRlZmluZSIsIkl0ZXJhdG9ycyIsIiRpdGVyQ3JlYXRlIiwic2V0VG9TdHJpbmdUYWciLCJnZXRQcm90b3R5cGVPZiIsIklURVJBVE9SIiwiQlVHR1kiLCJrZXlzIiwiRkZfSVRFUkFUT1IiLCJLRVlTIiwiVkFMVUVTIiwicmV0dXJuVGhpcyIsIkJhc2UiLCJOQU1FIiwiQ29uc3RydWN0b3IiLCJuZXh0IiwiREVGQVVMVCIsIklTX1NFVCIsIkZPUkNFRCIsImdldE1ldGhvZCIsImtpbmQiLCJwcm90byIsInZhbHVlcyIsImVudHJpZXMiLCJERUZfVkFMVUVTIiwiVkFMVUVTX0JVRyIsIiRuYXRpdmUiLCIkZGVmYXVsdCIsIiRlbnRyaWVzIiwiJGFueU5hdGl2ZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiRiIsIlBST1RPVFlQRSIsInR5cGUiLCJzb3VyY2UiLCJJU19GT1JDRUQiLCJJU19HTE9CQUwiLCJHIiwiSVNfU1RBVElDIiwiSVNfUFJPVE8iLCJJU19CSU5EIiwiZXhwUHJvdG8iLCJvd24iLCJvdXQiLCJleHAiLCJVIiwiVyIsIlIiLCJhRnVuY3Rpb24iLCJjIiwiY3JlYXRlIiwiZGVzY3JpcHRvciIsImRQcyIsImVudW1CdWdLZXlzIiwiSUVfUFJPVE8iLCJFbXB0eSIsImNyZWF0ZURpY3QiLCJpZnJhbWUiLCJsdCIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsIlByb3BlcnRpZXMiLCJyZXN1bHQiLCJnZXRLZXlzIiwiZGVmaW5lUHJvcGVydGllcyIsIiRrZXlzIiwidG9JT2JqZWN0IiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCJwdXNoIiwiSU9iamVjdCIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9MZW5ndGgiLCJ0b0luZGV4IiwiSVNfSU5DTFVERVMiLCIkdGhpcyIsImVsIiwiZnJvbUluZGV4IiwibWluIiwibWF4Iiwic2hhcmVkIiwiZG9jdW1lbnRFbGVtZW50IiwidGFnIiwic3RhdCIsInRvT2JqZWN0IiwiT2JqZWN0UHJvdG8iLCJjb25zdHJ1Y3RvciIsIiRpdGVyYXRvcnMiLCJ3a3MiLCJUT19TVFJJTkdfVEFHIiwiQXJyYXlWYWx1ZXMiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb24iLCJhZGRUb1Vuc2NvcGFibGVzIiwic3RlcCIsIl9rIiwiQXJndW1lbnRzIiwiVU5TQ09QQUJMRVMiLCJBcnJheVByb3RvIiwiYW5JbnN0YW5jZSIsImZvck9mIiwic3BlY2llc0NvbnN0cnVjdG9yIiwidGFzayIsInNldCIsIm1pY3JvdGFzayIsIlBST01JU0UiLCJwcm9jZXNzIiwiJFByb21pc2UiLCJpc05vZGUiLCJlbXB0eSIsIkludGVybmFsIiwiR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5IiwiV3JhcHBlciIsIlVTRV9OQVRJVkUiLCJwcm9taXNlIiwicmVzb2x2ZSIsIkZha2VQcm9taXNlIiwiUHJvbWlzZVJlamVjdGlvbkV2ZW50IiwidGhlbiIsInNhbWVDb25zdHJ1Y3RvciIsImlzVGhlbmFibGUiLCJuZXdQcm9taXNlQ2FwYWJpbGl0eSIsIkMiLCJQcm9taXNlQ2FwYWJpbGl0eSIsInJlamVjdCIsIiQkcmVzb2x2ZSIsIiQkcmVqZWN0IiwicGVyZm9ybSIsIm5vdGlmeSIsImlzUmVqZWN0IiwiX24iLCJjaGFpbiIsIl9jIiwiX3YiLCJvayIsIl9zIiwicnVuIiwicmVhY3Rpb24iLCJoYW5kbGVyIiwiZmFpbCIsImRvbWFpbiIsIl9oIiwib25IYW5kbGVVbmhhbmRsZWQiLCJlbnRlciIsImV4aXQiLCJvblVuaGFuZGxlZCIsImFicnVwdCIsImlzVW5oYW5kbGVkIiwiZW1pdCIsIm9udW5oYW5kbGVkcmVqZWN0aW9uIiwicmVhc29uIiwiX2EiLCJvbnJlamVjdGlvbmhhbmRsZWQiLCIkcmVqZWN0IiwiX2QiLCJfdyIsIiRyZXNvbHZlIiwid3JhcHBlciIsImV4ZWN1dG9yIiwiZXJyIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwiciIsImNhcGFiaWxpdHkiLCJ4IiwiaXRlciIsImFsbCIsIml0ZXJhYmxlIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCJmb3JiaWRkZW5GaWVsZCIsImlzQXJyYXlJdGVyIiwiZ2V0SXRlckZuIiwiQlJFQUsiLCJSRVRVUk4iLCJpdGVyRm4iLCJpdGVyYXRvciIsImdldEl0ZXJhdG9yTWV0aG9kIiwiU1BFQ0lFUyIsIkQiLCJpbnZva2UiLCJodG1sIiwiY2VsIiwic2V0VGFzayIsInNldEltbWVkaWF0ZSIsImNsZWFyVGFzayIsImNsZWFySW1tZWRpYXRlIiwiTWVzc2FnZUNoYW5uZWwiLCJjb3VudGVyIiwicXVldWUiLCJPTlJFQURZU1RBVEVDSEFOR0UiLCJkZWZlciIsImNoYW5uZWwiLCJwb3J0IiwibGlzdGVuZXIiLCJldmVudCIsImRhdGEiLCJhcmdzIiwibmV4dFRpY2siLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiaW1wb3J0U2NyaXB0cyIsInJlbW92ZUNoaWxkIiwiY2xlYXIiLCJ1biIsIm1hY3JvdGFzayIsIk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYktpdE11dGF0aW9uT2JzZXJ2ZXIiLCJoZWFkIiwibGFzdCIsImZsdXNoIiwicGFyZW50IiwidG9nZ2xlIiwibm9kZSIsImNyZWF0ZVRleHROb2RlIiwib2JzZXJ2ZSIsImNoYXJhY3RlckRhdGEiLCJERVNDUklQVE9SUyIsIktFWSIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwibmF0aXZlTG9nIiwiTEVWRUxTIiwibGV2ZWxNYXAiLCJnZW5lcmF0ZUxldmVsTWFwIiwiZGVidWciLCJjaGVja0xldmVsIiwiZm9ybWF0IiwibG9nIiwiaW5mbyIsIndhcm4iLCJfX29yaV9fIiwiZm9yRWFjaCIsImxldmVsSW5kZXgiLCJsZXZlbCIsInR5cGVJbmRleCIsImxvZ0xldmVsIiwibWFwIiwidiIsInRvTG93ZXJDYXNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImdPUFMiLCJwSUUiLCIkYXNzaWduIiwiQSIsIksiLCJrIiwiYUxlbiIsImdldFN5bWJvbHMiLCJpc0VudW0iLCJqIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uZmlnIiwiRG9jdW1lbnQiLCJFbGVtZW50IiwiQ29tbWVudCIsIkxpc3RlbmVyIiwiZnJhbWV3b3JrcyIsInNlbmRUYXNrcyIsImNhbGxOYXRpdmUiLCJOb2RlIiwiREVGQVVMVF9UQUdfTkFNRSIsImluc3RhbmNlTWFwIiwibmV4dE5vZGVSZWYiLCJ1cmwiLCJVUkwiLCJub2RlTWFwIiwiZ2VuQ2FsbFRhc2tzIiwiY3JlYXRlRG9jdW1lbnRFbGVtZW50IiwidGFza3MiLCJpc0FycmF5IiwicmV0dXJuVmFsdWUiLCJtZXRob2QiLCJyZWYiLCJqc29uIiwiY2FsbEFkZEVsZW1lbnQiLCJkZXN0cm95IiwiYmF0Y2hlZCIsImRvY0lkIiwib3duZXJEb2N1bWVudCIsInJvbGUiLCJkZXB0aCIsIl9kb2N1bWVudEVsZW1lbnQiLCJhcHBlbmRCb2R5IiwiaW5zZXJ0QmVmb3JlIiwiYmVmb3JlIiwiZG9jIiwicHVyZUNoaWxkcmVuIiwicGFyZW50Tm9kZSIsImNoaWxkcmVuIiwiYmVmb3JlSW5kZXgiLCJub2RlVHlwZSIsImNoaWxkIiwic2V0Qm9keSIsImxpbmtQYXJlbnQiLCJub2RlSWQiLCJjcmVhdGVCb2R5IiwiX3Jvb3QiLCJib2R5IiwicHJvcHMiLCJ0YWdOYW1lIiwiY3JlYXRlQ29tbWVudCIsInRleHQiLCJmaXJlRXZlbnQiLCJkb21DaGFuZ2VzIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInVwZGF0ZUVsZW1lbnQiLCJnZXRSZWYiLCJjaGFuZ2VzIiwiYXR0cnMiLCJzZXRBdHRyIiwic2V0U3R5bGUiLCJuZXh0U2libGluZyIsInByZXZpb3VzU2libGluZyIsImF0dHIiLCJjbGFzc1N0eWxlIiwiaW5zZXJ0SW5kZXgiLCJyZWdpc3Rlck5vZGUiLCJhZGRFbGVtZW50IiwibW92ZUluZGV4IiwibW92ZUVsZW1lbnQiLCJwdXJlQmVmb3JlIiwibmV4dEVsZW1lbnQiLCJpbnNlcnRBZnRlciIsImFmdGVyIiwicHJldmlvdXNFbGVtZW50IiwicHJlc2VydmVkIiwicmVtb3ZlSW5kZXgiLCJyZW1vdmVFbGVtZW50IiwibmV3SW5kZXgiLCJjaGFuZ2VTaWJsaW5nIiwibmV3SW5kZXhBZnRlciIsImJlZm9yZU5ldyIsImFmdGVyTmV3Iiwic2lsZW50IiwicmVzZXRDbGFzc1N0eWxlIiwic2V0Q2xhc3NTdHlsZSIsInNldFN0eWxlcyIsInRvU3R5bGUiLCJhZGRFdmVudCIsInJlbW92ZUV2ZW50IiwidG9KU09OIiwiY3JlYXRlQWN0aW9uIiwidXBkYXRlcyIsImNyZWF0ZUZpbmlzaCIsImNhbGxiYWNrIiwidXBkYXRlRmluaXNoIiwicmVmcmVzaEZpbmlzaCIsImVsZW1lbnQiLCJhY3Rpb25zIiwiYWRkQWN0aW9ucyIsInRhcmdldFJlZiIsInBhcmVudFJlZiIsIldlZXgiLCJjcmVhdGVJbnN0YW5jZSIsImluaXQiLCJyZWZyZXNoSW5zdGFuY2UiLCJkZXN0cm95SW5zdGFuY2UiLCJyZWdpc3RlckNvbXBvbmVudHMiLCJyZWdpc3Rlck1vZHVsZXMiLCJyZWNlaXZlVGFza3MiLCJnZXRSb290IiwiY29kZSIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsInJlcXVpcmVNb2R1bGUiLCJ1cGRhdGVBY3Rpb25zIiwiY2FsbFRhc2tzIiwiZ2V0TW9kdWxlIiwiY2xlYXJNb2R1bGVzIiwiaW5pdE1vZHVsZXMiLCJpbml0TWV0aG9kcyIsInJlcXVpcmVDdXN0b21Db21wb25lbnQiLCJyZWdpc3RlckN1c3RvbUNvbXBvbmVudCIsIm5hdGl2ZU1vZHVsZXMiLCJtb2R1bGVOYW1lIiwibW9kdWxlcyIsImlmUmVwbGFjZSIsIlZtIiwiYXBpcyIsInAiLCJhcGlOYW1lIiwiYXBwIiwiY3VzdG9tQ29tcG9uZW50TWFwIiwicmVmcmVzaCIsImdldFJvb3RFbGVtZW50IiwiYnVuZGxlRGVmaW5lIiwiYnVuZGxlQm9vdHN0cmFwIiwiX2RhdGEiLCJidW5kbGVSZWdpc3RlciIsImJ1bmRsZVJlbmRlciIsImJ1bmRsZVJlcXVpcmUiLCJidW5kbGVEb2N1bWVudCIsImJ1bmRsZVJlcXVpcmVNb2R1bGUiLCJmdW5jdGlvbkJvZHkiLCJzdWJzdHIiLCJ0aW1lciIsInRpbWVyQVBJcyIsInNldEludGVydmFsIiwiY2xlYXJUaW1lb3V0IiwibiIsImNsZWFySW50ZXJ2YWwiLCJpc1Jlc2VydmVkIiwiY3JlYXRlTmV3U2V0IiwiY2FjaGVkIiwidHlwb2YiLCJyZW1vdmVXZWV4UHJlZml4IiwicmVtb3ZlSlNTdXJmaXgiLCJzdHIiLCJoYXNQcm90byIsIl9TZXQiLCJTZXQiLCJtYXRjaCIsImFkZCIsIm5hdGl2ZVNldCIsImNhY2hlIiwiY2FjaGVkRm4iLCJoaXQiLCJjYW1lbGl6ZVJFIiwiY2FtZWxpemUiLCJyZXBsYWNlIiwidG9VcHBlciIsIl8iLCJ0b1VwcGVyQ2FzZSIsImh5cGhlbmF0ZVJFIiwiaHlwaGVuYXRlIiwic3Vic3RyaW5nIiwiV0VFWF9DT01QT05FTlRfUkVHIiwiV0VFWF9NT0RVTEVfUkVHIiwiTk9STUFMX01PRFVMRV9SRUciLCJKU19TVVJGSVhfUkVHIiwiaXNXZWV4Q29tcG9uZW50IiwiaXNXZWV4TW9kdWxlIiwiaXNOb3JtYWxNb2R1bGUiLCJpc05wbU1vZHVsZSIsImJvb3RzdHJhcCIsImRlZmluZUZuIiwicmVnaXN0ZXIiLCJkb3duZ3JhZGUiLCJjbGVhbk5hbWUiLCJzYXRpc2ZpZXMiLCJkb3duZ3JhZGVSZXN1bHQiLCJjaGVjayIsImlzRG93bmdyYWRlIiwiZXJyb3JUeXBlIiwiZXJyb3JNZXNzYWdlIiwidm0iLCJfYXBwIiwiU2VtVmVyIiwiZW52IiwiTk9ERV9ERUJVRyIsInVuc2hpZnQiLCJTRU1WRVJfU1BFQ19WRVJTSU9OIiwiTUFYX0xFTkdUSCIsIk1BWF9TQUZFX0lOVEVHRVIiLCJOdW1iZXIiLCJyZSIsIk5VTUVSSUNJREVOVElGSUVSIiwiTlVNRVJJQ0lERU5USUZJRVJMT09TRSIsIk5PTk5VTUVSSUNJREVOVElGSUVSIiwiTUFJTlZFUlNJT04iLCJNQUlOVkVSU0lPTkxPT1NFIiwiUFJFUkVMRUFTRUlERU5USUZJRVIiLCJQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFIiwiUFJFUkVMRUFTRSIsIlBSRVJFTEVBU0VMT09TRSIsIkJVSUxESURFTlRJRklFUiIsIkJVSUxEIiwiRlVMTCIsIkZVTExQTEFJTiIsIkxPT1NFUExBSU4iLCJMT09TRSIsIkdUTFQiLCJYUkFOR0VJREVOVElGSUVSTE9PU0UiLCJYUkFOR0VJREVOVElGSUVSIiwiWFJBTkdFUExBSU4iLCJYUkFOR0VQTEFJTkxPT1NFIiwiWFJBTkdFIiwiWFJBTkdFTE9PU0UiLCJMT05FVElMREUiLCJUSUxERVRSSU0iLCJSZWdFeHAiLCJ0aWxkZVRyaW1SZXBsYWNlIiwiVElMREUiLCJUSUxERUxPT1NFIiwiTE9ORUNBUkVUIiwiQ0FSRVRUUklNIiwiY2FyZXRUcmltUmVwbGFjZSIsIkNBUkVUIiwiQ0FSRVRMT09TRSIsIkNPTVBBUkFUT1JMT09TRSIsIkNPTVBBUkFUT1IiLCJDT01QQVJBVE9SVFJJTSIsImNvbXBhcmF0b3JUcmltUmVwbGFjZSIsIkhZUEhFTlJBTkdFIiwiSFlQSEVOUkFOR0VMT09TRSIsIlNUQVIiLCJwYXJzZSIsImxvb3NlIiwiZXIiLCJ2YWxpZCIsImNsZWFuIiwidHJpbSIsIm0iLCJyYXciLCJtYWpvciIsIm1pbm9yIiwicGF0Y2giLCJwcmVyZWxlYXNlIiwibnVtIiwiYnVpbGQiLCJjb21wYXJlIiwib3RoZXIiLCJjb21wYXJlTWFpbiIsImNvbXBhcmVQcmUiLCJjb21wYXJlSWRlbnRpZmllcnMiLCJpbmMiLCJyZWxlYXNlIiwiaWRlbnRpZmllciIsImRpZmYiLCJ2ZXJzaW9uMSIsInZlcnNpb24yIiwiZXEiLCJ2MSIsInYyIiwibnVtZXJpYyIsImFudW0iLCJibnVtIiwicmNvbXBhcmVJZGVudGlmaWVycyIsImNvbXBhcmVMb29zZSIsInJjb21wYXJlIiwic29ydCIsInJzb3J0IiwibmVxIiwiZ3RlIiwibHRlIiwiY21wIiwib3AiLCJDb21wYXJhdG9yIiwiY29tcCIsInNlbXZlciIsIkFOWSIsIm9wZXJhdG9yIiwiUmFuZ2UiLCJyYW5nZSIsInBhcnNlUmFuZ2UiLCJmaWx0ZXIiLCJjb21wcyIsImhyIiwiaHlwaGVuUmVwbGFjZSIsImNvbXBSZSIsInBhcnNlQ29tcGFyYXRvciIsInRvQ29tcGFyYXRvcnMiLCJyZXBsYWNlQ2FyZXRzIiwicmVwbGFjZVRpbGRlcyIsInJlcGxhY2VYUmFuZ2VzIiwicmVwbGFjZVN0YXJzIiwiaXNYIiwicmVwbGFjZVRpbGRlIiwiTSIsInByIiwicmVwbGFjZUNhcmV0IiwicmVwbGFjZVhSYW5nZSIsImd0bHQiLCJ4TSIsInhtIiwieHAiLCJhbnlYIiwiJDAiLCJmTSIsImZtIiwiZnAiLCJmcHIiLCJmYiIsInRvIiwidE0iLCJ0bSIsInRwIiwidHByIiwidGIiLCJ0ZXN0U2V0IiwiYWxsb3dlZCIsIm1heFNhdGlzZnlpbmciLCJ2ZXJzaW9ucyIsIm1pblNhdGlzZnlpbmciLCJ2YWxpZFJhbmdlIiwibHRyIiwib3V0c2lkZSIsImd0ciIsImhpbG8iLCJndGZuIiwibHRlZm4iLCJsdGZuIiwiZWNvbXAiLCJjb21wYXJhdG9ycyIsImhpZ2giLCJsb3ciLCJjb21wYXJhdG9yIiwicGFyc2VkIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwiSXRlbSIsImFycmF5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJwYXJlbnRWbSIsInBhcmVudEVsIiwibWVyZ2VkRGF0YSIsImV4dGVybmFsRXZlbnRzIiwiX3BhcmVudCIsIl9yZWFsUGFyZW50IiwiX2NoaWxkcmVuVm1zIiwiX29wdGlvbnMiLCJfbWV0aG9kcyIsIl9jb21wdXRlZCIsImNvbXB1dGVkIiwiX2NzcyIsIl9pZHMiLCJfdm1FdmVudHMiLCJfdHlwZSIsIiRlbWl0IiwiX2luaXRlZCIsIl9jcmVhdGVkIiwicmVhZHkiLCJfcGFyZW50RWwiLCJpbml0U3RhdGUiLCJpbml0RGF0YSIsImluaXRDb21wdXRlZCIsIl93YXRjaGVycyIsInVzZXJEZWYiLCJtYWtlQ29tcHV0ZWRHZXR0ZXIiLCJnZXR0ZXIiLCJvd25lciIsIndhdGNoZXIiLCJsYXp5IiwiY29tcHV0ZWRHZXR0ZXIiLCJkaXJ0eSIsImV2YWx1YXRlIiwiZGVwZW5kIiwiV2F0Y2hlciIsImV4cE9yRm4iLCJpc0ZuIiwiZXhwcmVzc2lvbiIsImFjdGl2ZSIsImRlcHMiLCJuZXdEZXBzIiwiZGVwSWRzIiwibmV3RGVwSWRzIiwiTk9ERV9FTlYiLCJxdWV1ZWQiLCJzaGFsbG93IiwiZGVlcCIsInRyYXZlcnNlIiwiY2xlYW51cERlcHMiLCJhZGREZXAiLCJkZXAiLCJhZGRTdWIiLCJyZW1vdmVTdWIiLCJ0bXAiLCJ1cGRhdGUiLCJvbGRWYWx1ZSIsInRlYXJkb3duIiwiX2lzQmVpbmdEZXN0cm95ZWQiLCJfdkZvclJlbW92aW5nIiwic2Vlbk9iamVjdHMiLCJzZWVuIiwiaXNBIiwiaXNPIiwiX19vYl9fIiwiZGVwSWQiLCJEZXAiLCJwdXNoVGFyZ2V0IiwicG9wVGFyZ2V0Iiwic3VicyIsInRhcmdldFN0YWNrIiwiX3RhcmdldCIsInBvcCIsInN1YiIsImRlZmluZVJlYWN0aXZlIiwiZGVsIiwicHJveHkiLCJ1bnByb3h5IiwiYXJyYXlLZXlzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImF1Z21lbnQiLCJwcm90b0F1Z21lbnQiLCJjb3B5QXVnbWVudCIsIm9ic2VydmVBcnJheSIsIndhbGsiLCJjb252ZXJ0IiwiaXRlbXMiLCJhZGRWbSIsInZtcyIsInJlbW92ZVZtIiwiX19wcm90b19fIiwib2IiLCJpc0V4dGVuc2libGUiLCJfaXNWdWUiLCJwcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInNldHRlciIsImNoaWxkT2IiLCJyZWFjdGl2ZUdldHRlciIsInJlYWN0aXZlU2V0dGVyIiwibmV3VmFsIiwiJGZvcmNlVXBkYXRlIiwiS0VZX1dPUkRTIiwicHJveHlHZXR0ZXIiLCJwcm94eVNldHRlciIsImFycmF5UHJvdG8iLCJhcnJheU1ldGhvZHMiLCJvcmlnaW5hbCIsIm11dGF0b3IiLCJpbnNlcnRlZCIsIiRzZXQiLCIkcmVtb3ZlIiwib3B0IiwidGVtcGxhdGUiLCJjb21waWxlIiwiX3JlYWR5IiwiZGVzdCIsIm1ldGEiLCJsYXN0U2lnbmFsIiwidGFyZ2V0SXNGcmFnbWVudCIsImNvbXBpbGVGcmFnbWVudCIsInRhcmdldElzQ29udGVudCIsIl9jb250ZW50IiwidGFyZ2V0TmVlZENoZWNrUmVwZWF0IiwiY29tcGlsZVJlcGVhdCIsInRhcmdldE5lZWRDaGVja1Nob3duIiwiY29tcGlsZVNob3duIiwidHlwZUdldHRlciIsInRhcmdldE5lZWRDaGVja1R5cGUiLCJjb21waWxlVHlwZSIsImNvbXBvbmVudCIsInRhcmdldElzQ29tcG9zZWQiLCJjb21waWxlQ3VzdG9tQ29tcG9uZW50IiwiY29tcGlsZU5hdGl2ZUNvbXBvbmVudCIsInJlcGVhdCIsInNob3duIiwiY29tcG9uZW50cyIsImZyYWdCbG9jayIsIm9sZFN0eWxlIiwidHJhY2tCeSIsImJpbmRSZXBlYXQiLCJuZXdNZXRhIiwiYmluZFNob3duIiwiQ3RvciIsInN1YlZtIiwiX2V4dGVybmFsQmluZGluZyIsImNvbXBpbGVDaGlsZHJlbiIsIl9yb290RWwiLCJldmVudHMiLCJhcHBlbmQiLCJ0cmVlTW9kZSIsImV2ZXJ5Iiwia2V5TmFtZSIsInZhbHVlTmFtZSIsImNvbXBpbGVJdGVtIiwiY29udGV4dCIsIm5ld0NvbnRleHQiLCJtZXJnZUNvbnRleHQiLCJ3YXRjaEJsb2NrIiwib2xkQ2hpbGRyZW4iLCJvbGRWbXMiLCJvbGREYXRhIiwidHJhY2tNYXAiLCJyZXVzZWRNYXAiLCJyZXVzZWRMaXN0IiwidXBkYXRlTWFyayIsInJldXNlZCIsImNhbGMiLCJkaWZmZXIiLCJsYXRlc3RWYWx1ZSIsInJlY29yZGVkIiwiYmxvY2tJZCIsImFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyIsImJpbmRFbGVtZW50IiwiYmluZFN1YlZtIiwiYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCIsInNldElkIiwid2F0Y2giLCJuYXRpdmVDb21wb25lbnRNYXAiLCJTRVRURVJTIiwic3Via2V5Iiwic2V0Q2xhc3MiLCJjbGFzc0xpc3QiLCJiaW5kRXZlbnRzIiwicmVwZWF0SXRlbSIsInJlZHVjZSIsIm1lcmdlUHJvcHMiLCJtZXJnZUNsYXNzU3R5bGUiLCJtZXJnZVN0eWxlIiwiY3NzIiwiY2xhc3NOYW1lIiwiYWRkQ2xhc3NOYW1lIiwibmV3SWQiLCJiaW5kRGlyIiwic2V0RXZlbnQiLCJiaW5kS2V5IiwiaW1hZ2UiLCJjb250YWluZXIiLCJzbGlkZXIiLCJjZWxsIiwiY3JlYXRlQmxvY2siLCJhdHRhY2hUYXJnZXQiLCJtb3ZlVGFyZ2V0IiwicmVtb3ZlVGFyZ2V0IiwiY3JlYXRlQmxvY2tTdGFydCIsImVuZCIsImNyZWF0ZUJsb2NrRW5kIiwibGFzdGVzdEJsb2NrSWQiLCJhbmNob3IiLCJzaWduYWwiLCJtb3ZlQmxvY2siLCJncm91cCIsInRlbXAiLCJwcmVzZXJ2ZUJsb2NrIiwicmVtb3ZlQmxvY2siLCIkZGlzcGF0Y2giLCIkYnJvYWRjYXN0IiwiJG9uIiwiJG9mZiIsImluaXRFdmVudHMiLCJtaXhpbkV2ZW50cyIsIkV2dCIsImRldGFpbCIsInNob3VsZFN0b3AiLCJzdG9wIiwiaGFzU3RvcHBlZCIsImhhbmRsZXJMaXN0IiwiZXZ0IiwiTElGRV9DWUNMRV9UWVBFUyIsInR5cGUxIiwidHlwZTIiLCJub3JtYWxpemVWZXJzaW9uIiwiZ2V0RXJyb3IiLCJpc1ZhbGlkIiwiY3JpdGVyaWEiLCJnZXRNc2ciLCJfa2V5IiwiZGV2aWNlSW5mbyIsImN1c3RvbURvd25ncmFkZSIsImRQbGF0Zm9ybSIsImNPYmoiLCJrZXlMb3dlciIsImlzVmVyc2lvbiIsImlzRGV2aWNlTW9kZWwiLCJkIiwiX2NyaXRlcmlhIiwiZmFjdG9yeSIsImRlZmluaXRpb24iLCJjb21tb25Nb2R1bGVzIiwiZGVzdHJveVZtIiwicmVmcmVzaERhdGEiLCJibG9ja3MiLCJjYWxsYmFja3MiLCJ3YXRjaGVyQ291bnQiLCJ2bUNvdW50Iiwic29tZSIsImNhbGxiYWNrSWQiLCJpZktlZXBBbGl2ZSIsIm5vcm1hbGl6ZSIsImFyZyIsInRvSVNPU3RyaW5nIiwiQXBwIiwiYnVuZGxlVXJsIiwiRGlmZmVyIiwiaG9va3MiLCJoYXNUaW1lciIsImlzVGltZW91dCIsImNhbGxUeXBlTWFwIiwiY2FsbFR5cGVMaXN0IiwiaXNFbXB0eSIsImNmZyIsImpzSGFuZGxlcnMiLCJyZXN1bHRzIiwidmVyc2lvblJlZ0V4cCIsImNoZWNrVmVyc2lvbiIsImZyYW1ld29yayIsImJ1bmRsZVZlcnNpb24iLCJnZW5Jbml0IiwiZ2VuSW5zdGFuY2UiLCJhZGFwdEluc3RhbmNlIiwibmF0aXZlTWV0aG9kTmFtZSIsIiQiLCIkZWwiLCIkdm0iLCIkcmVuZGVyVGhlbiIsIiRzY3JvbGxUbyIsIiR0cmFuc2l0aW9uIiwiJGdldENvbmZpZyIsIiRzZW5kSHR0cCIsIiRvcGVuVVJMIiwiJHNldFRpdGxlIiwiJGNhbGwiLCJvZmZzZXQiLCJkb20iLCJzY3JvbGxUb0VsZW1lbnQiLCJzdHlsZXMiLCJhbmltYXRpb24iLCJ0cmFuc2l0aW9uIiwiX3NldFN0eWxlIiwicGFyYW1zIiwic3RyZWFtIiwic2VuZEh0dHAiLCJvcGVuVVJMIiwicGFnZUluZm8iLCJzZXRUaXRsZSIsIiR1c2VyVHJhY2siLCIkc2VuZE10b3AiLCIkY2FsbFdpbmR2YW5lIiwiJHNldFNwbSIsIiRnZXRVc2VySW5mbyIsIiRsb2dpbiIsIiRsb2dvdXQiLCJjb21OYW1lIiwicGFyYW0iLCJ1c2VyVHJhY2siLCJjb21taXQiLCJ3aW5kdmFuZSIsImNsYXNzIiwic2VuZE10b3AiLCJzZXRTcG0iLCJ1c2VyIiwiZ2V0VXNlckluZm8iLCJsb2dpbiIsImxvZ291dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7O0FBRUE7OztBQUdBLEtBQU1BLFVBQVUsbUJBQUFDLENBQVEsR0FBUixDQUFoQjtlQUMwQkMsTTtLQUFuQkMsZSxXQUFBQSxlOztBQUNQQSxpQkFBZ0JILE9BQWhCLEU7Ozs7Ozs7OztBQ1BBLHdCOzs7Ozs7OztBQ0FBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0tBQVlBLE87Ozs7OztLQUVKSSxNLHVCQUFBQSxNO0tBQVFDLFcsdUJBQUFBLFc7O0FBRWhCOzs0QkFDV0MsVTtBQUNUSixVQUFPSSxVQUFQLElBQXFCLFlBQWE7QUFDaEMsU0FBTUMsTUFBTSxrQkFBUUQsVUFBUixxQ0FBWjtBQUNBLFNBQUlDLGVBQWVDLEtBQW5CLEVBQTBCO0FBQ3hCQyxlQUFRQyxLQUFSLENBQWNILElBQUlJLFFBQUosRUFBZDtBQUNEO0FBQ0QsWUFBT0osR0FBUDtBQUNELElBTkQ7OztBQURGLE1BQUssSUFBTUQsVUFBWCx1QkFBa0M7QUFBQSxTQUF2QkEsVUFBdUI7QUFRakM7O0FBRUQ7QUFDQUosUUFBT1UsZ0JBQVAsR0FBMEJSLE1BQTFCO0FBQ0FGLFFBQU9XLGtCQUFQLEdBQTRCUixXQUE1Qjs7QUFFQTtBQUNBSCxRQUFPQyxlQUFQLENBQXVCSCxPQUF2QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQ2pCRWMsTTs7Ozs7O21CQUNBQyxHOzs7Ozs7bUJB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Z0I5aUMsQ0FBaEIsRUFBbUIrRixDQUFuQjtBQUNEOztBQUVEOzs7O0FBSU8sVUFBU3E4QixZQUFULENBQXNCbGxCLFFBQXRCLEVBQWdDO0FBQ3JDeGYsV0FBUWtZLElBQVIsQ0FBYSxtREFDTCw0Q0FESyxHQUVMLGlDQUZSO0FBR0EsT0FBTW10QixPQUFPLEtBQUt2ZixJQUFMLENBQVVsRixhQUFWLENBQXdCLE1BQXhCLENBQWI7QUFDQXlrQixRQUFLQyxXQUFMLENBQWlCOWxCLFFBQWpCO0FBQ0Q7O0FBRUQ7Ozs7QUFJTyxVQUFTbWxCLE1BQVQsQ0FBZ0JubEIsUUFBaEIsRUFBMEI7QUFDL0J4ZixXQUFRa1ksSUFBUixDQUFhLDZDQUNMLDRDQURLLEdBRUwsMkJBRlI7QUFHQSxPQUFNbXRCLE9BQU8sS0FBS3ZmLElBQUwsQ0FBVWxGLGFBQVYsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBeWtCLFFBQUtFLEtBQUwsQ0FBVy9sQixRQUFYO0FBQ0Q7O0FBRUQ7Ozs7QUFJTyxVQUFTb2xCLE9BQVQsQ0FBaUJwbEIsUUFBakIsRUFBMkI7QUFDaEN4ZixXQUFRa1ksSUFBUixDQUFhLDhDQUNMLDRDQURLLEdBRUwsNEJBRlI7QUFHQSxPQUFNbXRCLE9BQU8sS0FBS3ZmLElBQUwsQ0FBVWxGLGFBQVYsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBeWtCLFFBQUtHLE1BQUwsQ0FBWWhtQixRQUFaO0FBQ0QsRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgOTFkODc1MDNiZjRiODQzNWQyNzJcbiAqKi8iLCJpbXBvcnQgJ3dlZXgtanMtZnJhbWV3b3JrJ1xuXG4vKipcbiAqIHJlZ2lzdGVyIG1ldGhvZHNcbiAqL1xuY29uc3QgbWV0aG9kcyA9IHJlcXVpcmUoJy4vbGliL2FwaS9tZXRob2RzJylcbmNvbnN0IHtyZWdpc3Rlck1ldGhvZHN9ID0gZ2xvYmFsXG5yZWdpc3Rlck1ldGhvZHMobWV0aG9kcylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJy4vc3JjL25hdGl2ZSdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9pbmRleC5qc1xuICoqLyIsImltcG9ydCAnLi4vc2hhcmVkJ1xuaW1wb3J0IHJ1bnRpbWUgZnJvbSAnLi4vcnVudGltZSdcbmltcG9ydCB7IHN1YnZlcnNpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgKiBhcyBtZXRob2RzIGZyb20gJy4uL2RlZmF1bHQvYXBpL21ldGhvZHMnXG5cbmNvbnN0IHsgbmF0aXZlLCB0cmFuc2Zvcm1lciB9ID0gc3VidmVyc2lvblxuXG4vLyByZWdpc3RlciBpbnN0YW5jZSBtYW5hZ2VtZW50IEFQSXNcbmZvciAoY29uc3QgbWV0aG9kTmFtZSBpbiBydW50aW1lKSB7XG4gIGdsb2JhbFttZXRob2ROYW1lXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgcmV0ID0gcnVudGltZVttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgIGlmIChyZXQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihyZXQudG9TdHJpbmcoKSlcbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9XG59XG5cbi8vIHJlZ2lzdGVyIGZyYW1ld29yayBtZXRhIGluZm9cbmdsb2JhbC5mcmFtZXdvcmtWZXJzaW9uID0gbmF0aXZlXG5nbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uID0gdHJhbnNmb3JtZXJcblxuLy8gcmVnaXN0ZXIgc3BlY2lhbCBtZXRob2RzIGZvciBXZWV4IGZyYW1ld29ya1xuZ2xvYmFsLnJlZ2lzdGVyTWV0aG9kcyhtZXRob2RzKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9uYXRpdmUvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJy4vc2V0VGltZW91dCdcbmltcG9ydCAnLi9wcm9taXNlJ1xuaW1wb3J0ICcuL2NvbnNvbGUnXG5pbXBvcnQgJy4vb2JqZWN0QXNzaWduJ1xuXG5leHBvcnQge1xuICBleHRlbmQsXG4gIGRlZixcbiAgcmVtb3ZlLFxuICBoYXNPd24sXG4gIGJpbmQsXG4gIHRvQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0XG59IGZyb20gJy4vdXRpbHMnXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL3NoYXJlZC9pbmRleC5qc1xuICoqLyIsIi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0b1xuICogQHBhcmFtIHtPYmplY3R9IGZyb21cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kICh0YXJnZXQsIC4uLnNyYykge1xuICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc3JjKVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGZpcnN0ID0gc3JjLnNoaWZ0KClcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmaXJzdCkge1xuICAgICAgdGFyZ2V0W2tleV0gPSBmaXJzdFtrZXldXG4gICAgfVxuICAgIGlmIChzcmMubGVuZ3RoKSB7XG4gICAgICBleHRlbmQodGFyZ2V0LCAuLi5zcmMpXG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXRcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBbZW51bWVyYWJsZV1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmIChvYmosIGtleSwgdmFsLCBlbnVtZXJhYmxlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIHZhbHVlOiB2YWwsXG4gICAgZW51bWVyYWJsZTogISFlbnVtZXJhYmxlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBpdGVtIGZyb20gYW4gYXJyYXlcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Kn0gaXRlbVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUgKGFyciwgaXRlbSkge1xuICBpZiAoYXJyLmxlbmd0aCkge1xuICAgIGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSlcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGhhcyB0aGUgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5leHBvcnQgZnVuY3Rpb24gaGFzT3duIChvYmosIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuLyoqXG4gKiBTaW1wbGUgYmluZCwgZmFzdGVyIHRoYW4gbmF0aXZlXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHhcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kIChmbiwgY3R4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgIGNvbnN0IGwgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgcmV0dXJuIGxcbiAgICAgID8gbCA+IDFcbiAgICAgICAgPyBmbi5hcHBseShjdHgsIGFyZ3VtZW50cylcbiAgICAgICAgOiBmbi5jYWxsKGN0eCwgYSlcbiAgICAgIDogZm4uY2FsbChjdHgpXG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIEFycmF5LWxpa2Ugb2JqZWN0IHRvIGEgcmVhbCBBcnJheS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5LWxpa2V9IGxpc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnRdIC0gc3RhcnQgaW5kZXhcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5IChsaXN0LCBzdGFydCkge1xuICBzdGFydCA9IHN0YXJ0IHx8IDBcbiAgbGV0IGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0XG4gIGNvbnN0IHJldCA9IG5ldyBBcnJheShpKVxuICB3aGlsZSAoaS0tKSB7XG4gICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuLyoqXG4gKiBTdHJpY3Qgb2JqZWN0IHR5cGUgY2hlY2suIE9ubHkgcmV0dXJucyB0cnVlXG4gKiBmb3IgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuY29uc3QgT0JKRUNUX1NUUklORyA9ICdbb2JqZWN0IE9iamVjdF0nXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09IE9CSkVDVF9TVFJJTkdcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL3V0aWxzLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBQb2x5ZmlsbCBgc2V0VGltZW91dGAgb24gQW5kcm9pZCBWOCB1c2luZyBuYXRpdmUgbWV0aG9kXG4gKiBgc2V0VGltZW91dE5hdGl2ZShjYWxsYmFja0lkLCB0aW1lKWAgYW5kIEpTIG1ldGhvZFxuICogYHNldFRpbWVvdXRDYWxsYmFjayhjYWxsYmFja0lkKWAuXG4gKiBUaGlzIHBvbHlmaWxsIGlzIG9ubHkgdXNlZCBpbiB2aXJ0dWFsLURPTSBkaWZmICYgZmx1c2ggYWdvcml0aG0uIE5vdFxuICogYWNjZXNzZWQgYnkgSlMgQnVuZGxlIGNvZGUgKFRoZSB0aW1lciBBUElzIHBvbHlmaWxsIGZvciBKUyBCdW5kbGUgaXMgaW5cbiAqIGBodG1sNS9kZWZhdWx0L2FwcC9jdHJsLmpzYCkuXG4gKi9cblxuY29uc3Qge1xuICBzZXRUaW1lb3V0LFxuICBzZXRUaW1lb3V0TmF0aXZlXG59ID0gZ2xvYmFsXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2Ygc2V0VGltZW91dE5hdGl2ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICBjb25zdCB0aW1lb3V0TWFwID0ge31cbiAgbGV0IHRpbWVvdXRJZCA9IDBcblxuICBnbG9iYWwuc2V0VGltZW91dCA9IChjYiwgdGltZSkgPT4ge1xuICAgIHRpbWVvdXRNYXBbKyt0aW1lb3V0SWRdID0gY2JcbiAgICBzZXRUaW1lb3V0TmF0aXZlKHRpbWVvdXRJZC50b1N0cmluZygpLCB0aW1lKVxuICB9XG5cbiAgZ2xvYmFsLnNldFRpbWVvdXRDYWxsYmFjayA9IChpZCkgPT4ge1xuICAgIGlmICh0eXBlb2YgdGltZW91dE1hcFtpZF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRpbWVvdXRNYXBbaWRdKClcbiAgICAgIGRlbGV0ZSB0aW1lb3V0TWFwW2lkXVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9zaGFyZWQvc2V0VGltZW91dC5qc1xuICoqLyIsIi8vIGZpeCBQcm9taXNlIFByb2JsZW0gb24gSlNDb250ZXh0IG9mIGlPUzd+OFxuLy8gQHNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM1ODY2XG5jb25zdCB7IFdYRW52aXJvbm1lbnQgfSA9IGdsb2JhbFxuaWYgKFdYRW52aXJvbm1lbnQgJiYgV1hFbnZpcm9ubWVudC5wbGF0Zm9ybSA9PT0gJ2lPUycpIHtcbiAgZ2xvYmFsLlByb21pc2UgPSBudWxsXG59XG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKVxucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKVxucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKVxucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlJylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL3Byb21pc2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgdGVzdCAgICA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZih0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKXtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzXG4gKiovIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanNcbiAqKi8iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fY29mLmpzXG4gKiovIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL193a3MuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzXG4gKiovIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL191aWQuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFNSQyAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKVxuICAsIFRPX1NUUklORyA9ICd0b1N0cmluZydcbiAgLCAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddXG4gICwgVFBMICAgICAgID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIGtleSwgdmFsLCBzYWZlKXtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZihPW2tleV0gPT09IHZhbClyZXR1cm47XG4gIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmKE8gPT09IGdsb2JhbCl7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGlmKCFzYWZlKXtcbiAgICAgIGRlbGV0ZSBPW2tleV07XG4gICAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoT1trZXldKU9ba2V5XSA9IHZhbDtcbiAgICAgIGVsc2UgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfVxuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzXG4gKiovIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faGlkZS5qc1xuICoqLyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanNcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuICoqLyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuICoqLyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuICoqLyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faGFzLmpzXG4gKiovIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fY29yZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qc1xuICoqLyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanNcbiAqKi8iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qc1xuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIHJlZGVmaW5lICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KVxuICAgICwga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmKHRhcmdldClyZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZihleHBvcnRzW2tleV0gIT0gb3V0KWhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KWV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzXG4gKiovIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2N0eC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4gKiovIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4gKiovIiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanNcbiAqKi8iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4gKiovIiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbiAqKi8iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qc1xuICoqLyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4gKiovIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanNcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanNcbiAqKi8iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbiAqKi8iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanNcbiAqKi8iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuICoqLyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4gKiovIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4gKiovIiwidmFyICRpdGVyYXRvcnMgICAgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpXG4gICwgcmVkZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgd2tzICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgSVRFUkFUT1IgICAgICA9IHdrcygnaXRlcmF0b3InKVxuICAsIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJylcbiAgLCBBcnJheVZhbHVlcyAgID0gSXRlcmF0b3JzLkFycmF5O1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGVcbiAgICAsIGtleTtcbiAgaWYocHJvdG8pe1xuICAgIGlmKCFwcm90b1tJVEVSQVRPUl0paGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZighcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgZm9yKGtleSBpbiAkaXRlcmF0b3JzKWlmKCFwcm90b1trZXldKXJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuICoqLyIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpXG4gICwgQXJyYXlQcm90byAgPSBBcnJheS5wcm90b3R5cGU7XG5pZihBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbiAqKi8iLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qc1xuICoqLyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4gKiovIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbiAqKi8iLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4gKiovIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbiAqKi8iLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2h0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190YXNrLmpzXG4gKiovIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanNcbiAqKi8iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYylyZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4gKiovIiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBUaGlzIGZpbGUgd2lsbCBoYWNrIGBjb25zb2xlYCBtZXRob2RzIGJ5IGBXWEVudmlyb25tZW50LmxvZ0xldmVsYC5cbiAqIFNvIHdlIGNhbiBjb250cm9sIGhvdyBtYW55IGFuZCB3aGljaCBtZXNzYWdlcyB3aWxsIGJlIHNlbnQgYnkgY2hhbmdlIHRoZSBsb2cgbGV2ZWwuXG4gKiBBZGRpdGlvbmFsbHkgaW4gbmF0aXZlIHBsYXRmb3JtIHRoZSBtZXNzYWdlIGNvbnRlbnQgbXVzdCBiZSBwcmltaXRpdmUgdmFsdWVzIGFuZFxuICogdXNpbmcgYG5hdGl2ZUxvZyguLi5hcmdzLCBsb2dMZXZlbE1hcmspYCBzbyB3ZSBjcmVhdGUgYSBuZXcgYGNvbnNvbGVgIG9iamVjdCBpblxuICogZ2xvYmFsIGFkZCBhIGZvcm1hdCBwcm9jZXNzIGZvciBpdHMgbWV0aG9kcy5cbiAqL1xuXG5jb25zdCB7IGNvbnNvbGUsIG5hdGl2ZUxvZyB9ID0gZ2xvYmFsXG5jb25zdCBMRVZFTFMgPSBbJ29mZicsICdlcnJvcicsICd3YXJuJywgJ2luZm8nLCAnbG9nJywgJ2RlYnVnJ11cbmNvbnN0IGxldmVsTWFwID0ge31cblxuZ2VuZXJhdGVMZXZlbE1hcCgpXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKFxuICB0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcgfHwgLy8gQW5kcm9pZFxuICAoZ2xvYmFsLldYRW52aXJvbm1lbnQgJiYgZ2xvYmFsLldYRW52aXJvbm1lbnQucGxhdGZvcm0gPT09ICdpT1MnKSAvLyBpT1Ncbikge1xuICBnbG9iYWwuY29uc29sZSA9IHtcbiAgICBkZWJ1ZzogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdkZWJ1ZycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0RFQlVHJykgfVxuICAgIH0sXG4gICAgbG9nOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ2xvZycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0xPRycpIH1cbiAgICB9LFxuICAgIGluZm86ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnaW5mbycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0lORk8nKSB9XG4gICAgfSxcbiAgICB3YXJuOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ3dhcm4nKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19XQVJOJykgfVxuICAgIH0sXG4gICAgZXJyb3I6ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnZXJyb3InKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19FUlJPUicpIH1cbiAgICB9XG4gIH1cbn1cbmVsc2UgeyAvLyBIVE1MNVxuICBjb25zdCB7IGRlYnVnLCBsb2csIGluZm8sIHdhcm4sIGVycm9yIH0gPSBjb25zb2xlXG4gIGNvbnNvbGUuX19vcmlfXyA9IHsgZGVidWcsIGxvZywgaW5mbywgd2FybiwgZXJyb3IgfVxuICBjb25zb2xlLmRlYnVnID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnZGVidWcnKSkgeyBjb25zb2xlLl9fb3JpX18uZGVidWcuYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUubG9nID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnbG9nJykpIHsgY29uc29sZS5fX29yaV9fLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbiAgY29uc29sZS5pbmZvID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnaW5mbycpKSB7IGNvbnNvbGUuX19vcmlfXy5pbmZvLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxuICBjb25zb2xlLndhcm4gPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCd3YXJuJykpIHsgY29uc29sZS5fX29yaV9fLndhcm4uYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUuZXJyb3IgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdlcnJvcicpKSB7IGNvbnNvbGUuX19vcmlfXy5lcnJvci5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBtYXAgZm9yIHdoaWNoIHR5cGVzIG9mIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IGluIGEgY2VydGFpbiBtZXNzYWdlIGxldmVsXG4gKiBhcyB0aGUgb3JkZXIgb2YgTEVWRUxTLlxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZUxldmVsTWFwICgpIHtcbiAgTEVWRUxTLmZvckVhY2gobGV2ZWwgPT4ge1xuICAgIGNvbnN0IGxldmVsSW5kZXggPSBMRVZFTFMuaW5kZXhPZihsZXZlbClcbiAgICBsZXZlbE1hcFtsZXZlbF0gPSB7fVxuICAgIExFVkVMUy5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICAgY29uc3QgdHlwZUluZGV4ID0gTEVWRUxTLmluZGV4T2YodHlwZSlcbiAgICAgIGlmICh0eXBlSW5kZXggPD0gbGV2ZWxJbmRleCkge1xuICAgICAgICBsZXZlbE1hcFtsZXZlbF1bdHlwZV0gPSB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGNlcnRhaW4gdHlwZSBvZiBtZXNzYWdlIHdpbGwgYmUgc2VudCBpbiBjdXJyZW50IGxvZyBsZXZlbCBvZiBlbnYuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNoZWNrTGV2ZWwgKHR5cGUpIHtcbiAgY29uc3QgbG9nTGV2ZWwgPSAoZ2xvYmFsLldYRW52aXJvbm1lbnQgJiYgZ2xvYmFsLldYRW52aXJvbm1lbnQubG9nTGV2ZWwpIHx8ICdsb2cnXG4gIHJldHVybiBsZXZlbE1hcFtsb2dMZXZlbF0gJiYgbGV2ZWxNYXBbbG9nTGV2ZWxdW3R5cGVdXG59XG5cbi8qKlxuICogQ29udmVydCBhbGwgbG9nIGFyZ3VtZW50cyBpbnRvIHByaW1pdGl2ZSB2YWx1ZXMuXG4gKiBAcGFyYW0gIHthcnJheX0gYXJnc1xuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGZvcm1hdCAoYXJncykge1xuICByZXR1cm4gYXJncy5tYXAoKHYpID0+IHtcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXG4gICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ1tvYmplY3Qgb2JqZWN0XScpIHtcbiAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHYgPSBTdHJpbmcodilcbiAgICB9XG4gICAgcmV0dXJuIHZcbiAgfSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL2NvbnNvbGUuanNcbiAqKi8iLCJpbXBvcnQgJ2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbidcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL29iamVjdEFzc2lnbi5qc1xuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9mbi9vYmplY3QvYXNzaWduLmpzXG4gKiovIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbiAqKi8iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbiAqKi8iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFJlZ2lzdGVyIGZyYW1ld29yayhzKSBpbiBKUyBydW50aW1lLiBXZWV4IHN1cHBseSB0d28gbGF5ZXJzIGZvciAzcmQtcGFydHlcbiAqIGZyYW1ld29yayhzKTogb25lIGlzIHRoZSBpbnN0YW5jZSBtYW5hZ2VtZW50IGxheWVyLCBhbm90aGVyIGlzIHRoZVxuICogdmlydHVhbC1ET00gbGF5ZXIuXG4gKi9cblxuLy8gVGhpcyBjb25maWcgaXMgZ2VuZXJhdGVkIGJ5IGBucG0gcnVuIGJ1aWxkOmNvbmZpZ2AuXG4vLyBJdCB3aWxsIGNvbGxlY3QgYWxsIGBydW50aW1lL2ZyYW1ld29yay0qLmpzYCBmaWxlcyBhbmQgaW1wb3J0IGVhY2ggb2YgdGhlbS5cbi8vIFRoZSBmaWxlbmFtZSBpcyBhbHNvIHRoZSBmcmFtZXdvcmsgbmFtZS5cbmltcG9ydCB7IERvY3VtZW50LCBFbGVtZW50LCBDb21tZW50IH0gZnJvbSAnLi4vdmRvbSdcbmltcG9ydCBMaXN0ZW5lciBmcm9tICcuLi92ZG9tL2xpc3RlbmVyJ1xuaW1wb3J0IGZyYW1ld29ya3MgZnJvbSAnLi9jb25maWcnXG5cbmltcG9ydCBpbml0IGZyb20gJy4vaW5pdCdcblxuY29uc3QgY29uZmlnID0ge1xuICBEb2N1bWVudCwgRWxlbWVudCwgQ29tbWVudCwgTGlzdGVuZXIsIGZyYW1ld29ya3MsXG4gIHNlbmRUYXNrcyAoLi4uYXJncykge1xuICAgIHJldHVybiBnbG9iYWwuY2FsbE5hdGl2ZSguLi5hcmdzKVxuICB9XG59XG5cbmNvbnN0IG1ldGhvZHMgPSBpbml0KGNvbmZpZylcblxuZXhwb3J0IGRlZmF1bHQgbWV0aG9kc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9ydW50aW1lL2luZGV4LmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBBIHNpbXBsZSB2aXJ0dWFsIGRvbSBpbXBsZW1lbnRhdGlvblxuICovXG4vLyBpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi9zaGFyZWQnXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMnXG5cbmNvbnN0IERFRkFVTFRfVEFHX05BTUUgPSAnZGl2J1xuXG5leHBvcnQgY29uc3QgaW5zdGFuY2VNYXAgPSB7fVxubGV0IG5leHROb2RlUmVmID0gMVxuXG5leHBvcnQgZnVuY3Rpb24gRG9jdW1lbnQgKGlkLCB1cmwsIGhhbmRsZXIsIExpc3RlbmVyKSB7XG4gIGlkID0gaWQgPyBpZC50b1N0cmluZygpIDogJydcbiAgdGhpcy5pZCA9IGlkXG4gIHRoaXMuVVJMID0gdXJsXG5cbiAgaW5zdGFuY2VNYXBbaWRdID0gdGhpc1xuICB0aGlzLm5vZGVNYXAgPSB7fVxuICBMaXN0ZW5lciAmJiAodGhpcy5saXN0ZW5lciA9IG5ldyBMaXN0ZW5lcihpZCwgaGFuZGxlciB8fCBnZW5DYWxsVGFza3MoaWQpKSlcbiAgdGhpcy5jcmVhdGVEb2N1bWVudEVsZW1lbnQoKVxufVxuXG5mdW5jdGlvbiBnZW5DYWxsVGFza3MgKGlkKSB7XG4gIHJldHVybiAodGFza3MpID0+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGFza3MpKSB7XG4gICAgICB0YXNrcyA9IFt0YXNrc11cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFzayA9IHRhc2tzW2ldXG4gICAgICBsZXQgcmV0dXJuVmFsdWVcbiAgICAgIGlmICh0YXNrLm1vZHVsZSA9PT0gJ2RvbScgJiYgdGFzay5tZXRob2QgPT09ICdhZGRFbGVtZW50Jykge1xuICAgICAgICBjb25zdCBbcmVmLCBqc29uLCBpbmRleF0gPSB0YXNrLmFyZ3NcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxsQWRkRWxlbWVudChpZCwgcmVmLCBqc29uLCBpbmRleCwgJy0xJylcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm5WYWx1ZSA9IGNhbGxOYXRpdmUoaWQsIFt0YXNrXSwgJy0xJylcbiAgICAgIH1cbiAgICAgIGlmIChyZXR1cm5WYWx1ZSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICBkZWxldGUgdGhpcy5saXN0ZW5lclxuICBkZWxldGUgdGhpcy5ub2RlTWFwXG4gIGRlbGV0ZSBpbnN0YW5jZU1hcFt0aGlzLmlkXVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5saXN0ZW5lci5iYXRjaGVkID0gZmFsc2Vcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmxpc3RlbmVyLmJhdGNoZWQgPSB0cnVlXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVEb2N1bWVudEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBlbCA9IG5ldyBFbGVtZW50KCdkb2N1bWVudCcpXG4gICAgZWwuZG9jSWQgPSB0aGlzLmlkXG4gICAgZWwub3duZXJEb2N1bWVudCA9IHRoaXNcbiAgICBlbC5yb2xlID0gJ2RvY3VtZW50RWxlbWVudCdcbiAgICBlbC5kZXB0aCA9IDBcbiAgICBlbC5yZWYgPSAnX2RvY3VtZW50RWxlbWVudCdcbiAgICB0aGlzLm5vZGVNYXAuX2RvY3VtZW50RWxlbWVudCA9IGVsXG4gICAgdGhpcy5kb2N1bWVudEVsZW1lbnQgPSBlbFxuICAgIGVsLmFwcGVuZENoaWxkID0gKG5vZGUpID0+IHtcbiAgICAgIGFwcGVuZEJvZHkodGhpcywgbm9kZSlcbiAgICB9XG4gICAgZWwuaW5zZXJ0QmVmb3JlID0gKG5vZGUsIGJlZm9yZSkgPT4ge1xuICAgICAgYXBwZW5kQm9keSh0aGlzLCBub2RlLCBiZWZvcmUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuZG9jdW1lbnRFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEJvZHkgKGRvYywgbm9kZSwgYmVmb3JlKSB7XG4gIGNvbnN0IHsgZG9jdW1lbnRFbGVtZW50IH0gPSBkb2NcblxuICBpZiAoZG9jdW1lbnRFbGVtZW50LnB1cmVDaGlsZHJlbi5sZW5ndGggPiAwIHx8IG5vZGUucGFyZW50Tm9kZSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGNoaWxkcmVuID0gZG9jdW1lbnRFbGVtZW50LmNoaWxkcmVuXG4gIGNvbnN0IGJlZm9yZUluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZihiZWZvcmUpXG4gIGlmIChiZWZvcmVJbmRleCA8IDApIHtcbiAgICBjaGlsZHJlbi5wdXNoKG5vZGUpXG4gIH1cbiAgZWxzZSB7XG4gICAgY2hpbGRyZW4uc3BsaWNlKGJlZm9yZUluZGV4LCAwLCBub2RlKVxuICB9XG5cbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICBpZiAobm9kZS5yb2xlID09PSAnYm9keScpIHtcbiAgICAgIG5vZGUuZG9jSWQgPSBkb2MuaWRcbiAgICAgIG5vZGUub3duZXJEb2N1bWVudCA9IGRvY1xuICAgICAgbm9kZS5wYXJlbnROb2RlID0gZG9jdW1lbnRFbGVtZW50XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IG5vZGVcbiAgICAgIH0pXG4gICAgICBzZXRCb2R5KGRvYywgbm9kZSlcbiAgICAgIG5vZGUuZG9jSWQgPSBkb2MuaWRcbiAgICAgIG5vZGUub3duZXJEb2N1bWVudCA9IGRvY1xuICAgICAgbGlua1BhcmVudChub2RlLCBkb2N1bWVudEVsZW1lbnQpXG4gICAgICBkZWxldGUgZG9jLm5vZGVNYXBbbm9kZS5ub2RlSWRdXG4gICAgfVxuICAgIGRvY3VtZW50RWxlbWVudC5wdXJlQ2hpbGRyZW4ucHVzaChub2RlKVxuICAgIGRvYy5saXN0ZW5lci5jcmVhdGVCb2R5KG5vZGUpXG4gIH1cbiAgZWxzZSB7XG4gICAgbm9kZS5wYXJlbnROb2RlID0gZG9jdW1lbnRFbGVtZW50XG4gICAgZG9jLm5vZGVNYXBbbm9kZS5yZWZdID0gbm9kZVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEJvZHkgKGRvYywgZWwpIHtcbiAgZWwucm9sZSA9ICdib2R5J1xuICBlbC5kZXB0aCA9IDFcbiAgZGVsZXRlIGRvYy5ub2RlTWFwW2VsLm5vZGVJZF1cbiAgZWwucmVmID0gJ19yb290J1xuICBkb2Mubm9kZU1hcC5fcm9vdCA9IGVsXG4gIGRvYy5ib2R5ID0gZWxcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUJvZHkgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMpIHtcbiAgaWYgKCF0aGlzLmJvZHkpIHtcbiAgICBjb25zdCBlbCA9IG5ldyBFbGVtZW50KHR5cGUsIHByb3BzKVxuICAgIHNldEJvZHkodGhpcywgZWwpXG4gIH1cblxuICByZXR1cm4gdGhpcy5ib2R5XG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZ05hbWUsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgRWxlbWVudCh0YWdOYW1lLCBwcm9wcylcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUNvbW1lbnQgPSBmdW5jdGlvbiAodGV4dCkge1xuICByZXR1cm4gbmV3IENvbW1lbnQodGV4dClcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmZpcmVFdmVudCA9IGZ1bmN0aW9uIChlbCwgdHlwZSwgZSwgZG9tQ2hhbmdlcykge1xuICBpZiAoIWVsKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZSA9IGUgfHwge31cbiAgZS50eXBlID0gdHlwZVxuICBlLnRhcmdldCA9IGVsXG4gIGUudGltZXN0YW1wID0gRGF0ZS5ub3coKVxuICBpZiAoZG9tQ2hhbmdlcykge1xuICAgIHVwZGF0ZUVsZW1lbnQoZWwsIGRvbUNoYW5nZXMpXG4gIH1cbiAgcmV0dXJuIGVsLmZpcmVFdmVudCh0eXBlLCBlKVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuZ2V0UmVmID0gZnVuY3Rpb24gKHJlZikge1xuICByZXR1cm4gdGhpcy5ub2RlTWFwW3JlZl1cbn1cblxuZnVuY3Rpb24gdXBkYXRlRWxlbWVudCAoZWwsIGNoYW5nZXMpIHtcbiAgY29uc3QgYXR0cnMgPSBjaGFuZ2VzLmF0dHJzIHx8IHt9XG4gIGZvciAoY29uc3QgbmFtZSBpbiBhdHRycykge1xuICAgIGVsLnNldEF0dHIobmFtZSwgYXR0cnNbbmFtZV0sIHRydWUpXG4gIH1cbiAgY29uc3Qgc3R5bGUgPSBjaGFuZ2VzLnN0eWxlIHx8IHt9XG4gIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZSkge1xuICAgIGVsLnNldFN0eWxlKG5hbWUsIHN0eWxlW25hbWVdLCB0cnVlKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOb2RlICgpIHtcbiAgdGhpcy5ub2RlSWQgPSAobmV4dE5vZGVSZWYrKykudG9TdHJpbmcoKVxuICB0aGlzLnJlZiA9IHRoaXMubm9kZUlkXG4gIHRoaXMuY2hpbGRyZW4gPSBbXVxuICB0aGlzLnB1cmVDaGlsZHJlbiA9IFtdXG4gIHRoaXMucGFyZW50Tm9kZSA9IG51bGxcbiAgdGhpcy5uZXh0U2libGluZyA9IG51bGxcbiAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsXG59XG5cbk5vZGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRvYyA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdXG4gIGlmIChkb2MpIHtcbiAgICBkZWxldGUgdGhpcy5kb2NJZFxuICAgIGRlbGV0ZSBkb2Mubm9kZU1hcFt0aGlzLm5vZGVJZF1cbiAgfVxuICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgIGNoaWxkLmRlc3Ryb3koKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRWxlbWVudCAodHlwZSA9IERFRkFVTFRfVEFHX05BTUUsIHByb3BzKSB7XG4gIHByb3BzID0gcHJvcHMgfHwge31cbiAgdGhpcy5ub2RlVHlwZSA9IDFcbiAgdGhpcy5ub2RlSWQgPSAobmV4dE5vZGVSZWYrKykudG9TdHJpbmcoKVxuICB0aGlzLnJlZiA9IHRoaXMubm9kZUlkXG4gIHRoaXMudHlwZSA9IHR5cGVcbiAgdGhpcy5hdHRyID0gcHJvcHMuYXR0ciB8fCB7fVxuICB0aGlzLmNsYXNzU3R5bGUgPSBwcm9wcy5jbGFzc1N0eWxlIHx8IHt9XG4gIHRoaXMuc3R5bGUgPSBwcm9wcy5zdHlsZSB8fCB7fVxuICB0aGlzLmV2ZW50ID0ge31cbiAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gIHRoaXMucHVyZUNoaWxkcmVuID0gW11cbn1cblxuRWxlbWVudC5wcm90b3R5cGUgPSBuZXcgTm9kZSgpXG5cbkVsZW1lbnQucHJvdG90eXBlLmFwcGVuZENoaWxkID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUgIT09IHRoaXMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgIGxpbmtQYXJlbnQobm9kZSwgdGhpcylcbiAgICBpbnNlcnRJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmxlbmd0aCwgdHJ1ZSlcbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgcmVnaXN0ZXJOb2RlKHRoaXMuZG9jSWQsIG5vZGUpXG4gICAgfVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBpbnNlcnRJbmRleChub2RlLCB0aGlzLnB1cmVDaGlsZHJlbiwgdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIuYWRkRWxlbWVudChub2RlLCB0aGlzLnJlZiwgLTEpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIG1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmxlbmd0aCwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBtb3ZlSW5kZXgobm9kZSwgdGhpcy5wdXJlQ2hpbGRyZW4sIHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aClcbiAgICAgIGlmICh0aGlzLmRvY0lkICYmIGluZGV4ID49IDApIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIubW92ZUVsZW1lbnQobm9kZS5yZWYsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlID0gZnVuY3Rpb24gKG5vZGUsIGJlZm9yZSkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZSAhPT0gdGhpcykge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChub2RlID09PSBiZWZvcmUgfHwgbm9kZS5uZXh0U2libGluZyA9PT0gYmVmb3JlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICBsaW5rUGFyZW50KG5vZGUsIHRoaXMpXG4gICAgaW5zZXJ0SW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5pbmRleE9mKGJlZm9yZSksIHRydWUpXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIHJlZ2lzdGVyTm9kZSh0aGlzLmRvY0lkLCBub2RlKVxuICAgIH1cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgcHVyZUJlZm9yZSA9IG5leHRFbGVtZW50KGJlZm9yZSlcbiAgICAgIGNvbnN0IGluZGV4ID0gaW5zZXJ0SW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICBwdXJlQmVmb3JlXG4gICAgICAgICAgPyB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHB1cmVCZWZvcmUpXG4gICAgICAgICAgOiB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGhcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmFkZEVsZW1lbnQobm9kZSwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBtb3ZlSW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5pbmRleE9mKGJlZm9yZSksIHRydWUpXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IHB1cmVCZWZvcmUgPSBuZXh0RWxlbWVudChiZWZvcmUpXG4gICAgICBjb25zdCBpbmRleCA9IG1vdmVJbmRleChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4sXG4gICAgICAgIHB1cmVCZWZvcmVcbiAgICAgICAgICA/IHRoaXMucHVyZUNoaWxkcmVuLmluZGV4T2YocHVyZUJlZm9yZSlcbiAgICAgICAgICA6IHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aFxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5tb3ZlRWxlbWVudChub2RlLnJlZiwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZnRlciA9IGZ1bmN0aW9uIChub2RlLCBhZnRlcikge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZSAhPT0gdGhpcykge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChub2RlID09PSBhZnRlciB8fCBub2RlLnByZXZpb3VzU2libGluZyA9PT0gYWZ0ZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgIGxpbmtQYXJlbnQobm9kZSwgdGhpcylcbiAgICBpbnNlcnRJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYWZ0ZXIpICsgMSwgdHJ1ZSlcbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgcmVnaXN0ZXJOb2RlKHRoaXMuZG9jSWQsIG5vZGUpXG4gICAgfVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGluc2VydEluZGV4KFxuICAgICAgICBub2RlLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4uaW5kZXhPZihwcmV2aW91c0VsZW1lbnQoYWZ0ZXIpKSArIDFcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmFkZEVsZW1lbnQobm9kZSwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBtb3ZlSW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5pbmRleE9mKGFmdGVyKSArIDEsIHRydWUpXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gbW92ZUluZGV4KFxuICAgICAgICBub2RlLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4uaW5kZXhPZihwcmV2aW91c0VsZW1lbnQoYWZ0ZXIpKSArIDFcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLmRvY0lkICYmIGluZGV4ID49IDApIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIubW92ZUVsZW1lbnQobm9kZS5yZWYsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQ2hpbGQgPSBmdW5jdGlvbiAobm9kZSwgcHJlc2VydmVkKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICByZW1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0cnVlKVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICByZW1vdmVJbmRleChub2RlLCB0aGlzLnB1cmVDaGlsZHJlbilcbiAgICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgbGlzdGVuZXIucmVtb3ZlRWxlbWVudChub2RlLnJlZilcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCFwcmVzZXJ2ZWQpIHtcbiAgICBub2RlLmRlc3Ryb3koKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5kb2NJZCkge1xuICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICB0aGlzLnB1cmVDaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgbGlzdGVuZXIucmVtb3ZlRWxlbWVudChub2RlLnJlZilcbiAgICB9KVxuICB9XG4gIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChub2RlID0+IHtcbiAgICBub2RlLmRlc3Ryb3koKVxuICB9KVxuICB0aGlzLmNoaWxkcmVuLmxlbmd0aCA9IDBcbiAgdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoID0gMFxufVxuXG5mdW5jdGlvbiBuZXh0RWxlbWVudCAobm9kZSkge1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICByZXR1cm4gbm9kZVxuICAgIH1cbiAgICBub2RlID0gbm9kZS5uZXh0U2libGluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHByZXZpb3VzRWxlbWVudCAobm9kZSkge1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICByZXR1cm4gbm9kZVxuICAgIH1cbiAgICBub2RlID0gbm9kZS5wcmV2aW91c1NpYmxpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBsaW5rUGFyZW50IChub2RlLCBwYXJlbnQpIHtcbiAgbm9kZS5wYXJlbnROb2RlID0gcGFyZW50XG4gIGlmIChwYXJlbnQuZG9jSWQpIHtcbiAgICBub2RlLmRvY0lkID0gcGFyZW50LmRvY0lkXG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gcGFyZW50Lm93bmVyRG9jdW1lbnRcbiAgICBub2RlLm93bmVyRG9jdW1lbnQubm9kZU1hcFtub2RlLm5vZGVJZF0gPSBub2RlXG4gICAgbm9kZS5kZXB0aCA9IHBhcmVudC5kZXB0aCArIDFcbiAgfVxuICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgIGxpbmtQYXJlbnQoY2hpbGQsIG5vZGUpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTm9kZSAoZG9jSWQsIG5vZGUpIHtcbiAgY29uc3QgZG9jID0gaW5zdGFuY2VNYXBbZG9jSWRdXG4gIGRvYy5ub2RlTWFwW25vZGUubm9kZUlkXSA9IG5vZGVcbn1cblxuZnVuY3Rpb24gaW5zZXJ0SW5kZXggKHRhcmdldCwgbGlzdCwgbmV3SW5kZXgsIGNoYW5nZVNpYmxpbmcpIHtcbiAgaWYgKG5ld0luZGV4IDwgMCkge1xuICAgIG5ld0luZGV4ID0gMFxuICB9XG4gIGNvbnN0IGJlZm9yZSA9IGxpc3RbbmV3SW5kZXggLSAxXVxuICBjb25zdCBhZnRlciA9IGxpc3RbbmV3SW5kZXhdXG4gIGxpc3Quc3BsaWNlKG5ld0luZGV4LCAwLCB0YXJnZXQpXG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgYmVmb3JlICYmIChiZWZvcmUubmV4dFNpYmxpbmcgPSB0YXJnZXQpXG4gICAgdGFyZ2V0LnByZXZpb3VzU2libGluZyA9IGJlZm9yZVxuICAgIHRhcmdldC5uZXh0U2libGluZyA9IGFmdGVyXG4gICAgYWZ0ZXIgJiYgKGFmdGVyLnByZXZpb3VzU2libGluZyA9IHRhcmdldClcbiAgfVxuICByZXR1cm4gbmV3SW5kZXhcbn1cblxuZnVuY3Rpb24gbW92ZUluZGV4ICh0YXJnZXQsIGxpc3QsIG5ld0luZGV4LCBjaGFuZ2VTaWJsaW5nKSB7XG4gIGNvbnN0IGluZGV4ID0gbGlzdC5pbmRleE9mKHRhcmdldClcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgY29uc3QgYmVmb3JlID0gbGlzdFtpbmRleCAtIDFdXG4gICAgY29uc3QgYWZ0ZXIgPSBsaXN0W2luZGV4ICsgMV1cbiAgICBiZWZvcmUgJiYgKGJlZm9yZS5uZXh0U2libGluZyA9IGFmdGVyKVxuICAgIGFmdGVyICYmIChhZnRlci5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmUpXG4gIH1cbiAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gIGxldCBuZXdJbmRleEFmdGVyID0gbmV3SW5kZXhcbiAgaWYgKGluZGV4IDw9IG5ld0luZGV4KSB7XG4gICAgbmV3SW5kZXhBZnRlciA9IG5ld0luZGV4IC0gMVxuICB9XG4gIGNvbnN0IGJlZm9yZU5ldyA9IGxpc3RbbmV3SW5kZXhBZnRlciAtIDFdXG4gIGNvbnN0IGFmdGVyTmV3ID0gbGlzdFtuZXdJbmRleEFmdGVyXVxuICBsaXN0LnNwbGljZShuZXdJbmRleEFmdGVyLCAwLCB0YXJnZXQpXG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgYmVmb3JlTmV3ICYmIChiZWZvcmVOZXcubmV4dFNpYmxpbmcgPSB0YXJnZXQpXG4gICAgdGFyZ2V0LnByZXZpb3VzU2libGluZyA9IGJlZm9yZU5ld1xuICAgIHRhcmdldC5uZXh0U2libGluZyA9IGFmdGVyTmV3XG4gICAgYWZ0ZXJOZXcgJiYgKGFmdGVyTmV3LnByZXZpb3VzU2libGluZyA9IHRhcmdldClcbiAgfVxuICBpZiAoaW5kZXggPT09IG5ld0luZGV4QWZ0ZXIpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gbmV3SW5kZXhcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSW5kZXggKHRhcmdldCwgbGlzdCwgY2hhbmdlU2libGluZykge1xuICBjb25zdCBpbmRleCA9IGxpc3QuaW5kZXhPZih0YXJnZXQpXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoY2hhbmdlU2libGluZykge1xuICAgIGNvbnN0IGJlZm9yZSA9IGxpc3RbaW5kZXggLSAxXVxuICAgIGNvbnN0IGFmdGVyID0gbGlzdFtpbmRleCArIDFdXG4gICAgYmVmb3JlICYmIChiZWZvcmUubmV4dFNpYmxpbmcgPSBhZnRlcilcbiAgICBhZnRlciAmJiAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlKVxuICB9XG4gIGxpc3Quc3BsaWNlKGluZGV4LCAxKVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIHNpbGVudCkge1xuICBpZiAodGhpcy5hdHRyW2tleV0gPT09IHZhbHVlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdGhpcy5hdHRyW2tleV0gPSB2YWx1ZVxuICBpZiAoIXNpbGVudCAmJiB0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldEF0dHIodGhpcy5yZWYsIGtleSwgdmFsdWUpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuc2V0U3R5bGUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgc2lsZW50KSB7XG4gIGlmICh0aGlzLnN0eWxlW2tleV0gPT09IHZhbHVlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdGhpcy5zdHlsZVtrZXldID0gdmFsdWVcbiAgaWYgKCFzaWxlbnQgJiYgdGhpcy5kb2NJZCkge1xuICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICBsaXN0ZW5lci5zZXRTdHlsZSh0aGlzLnJlZiwga2V5LCB2YWx1ZSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5yZXNldENsYXNzU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY2xhc3NTdHlsZSkge1xuICAgIHRoaXMuY2xhc3NTdHlsZVtrZXldID0gJydcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5zZXRDbGFzc1N0eWxlID0gZnVuY3Rpb24gKGNsYXNzU3R5bGUpIHtcbiAgdGhpcy5yZXNldENsYXNzU3R5bGUoKVxuICBleHRlbmQodGhpcy5jbGFzc1N0eWxlLCBjbGFzc1N0eWxlKVxuICBpZiAodGhpcy5kb2NJZCkge1xuICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICBsaXN0ZW5lci5zZXRTdHlsZXModGhpcy5yZWYsIHRoaXMudG9TdHlsZSgpKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24gKHR5cGUsIGhhbmRsZXIpIHtcbiAgaWYgKCF0aGlzLmV2ZW50W3R5cGVdKSB7XG4gICAgdGhpcy5ldmVudFt0eXBlXSA9IGhhbmRsZXJcbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgbGlzdGVuZXIuYWRkRXZlbnQodGhpcy5yZWYsIHR5cGUpXG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgaWYgKHRoaXMuZXZlbnRbdHlwZV0pIHtcbiAgICBkZWxldGUgdGhpcy5ldmVudFt0eXBlXVxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICBsaXN0ZW5lci5yZW1vdmVFdmVudCh0aGlzLnJlZiwgdHlwZSlcbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuZmlyZUV2ZW50ID0gZnVuY3Rpb24gKHR5cGUsIGUpIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuZXZlbnRbdHlwZV1cbiAgaWYgKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gaGFuZGxlci5jYWxsKHRoaXMsIGUpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUudG9TdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGV4dGVuZCh7fSwgdGhpcy5jbGFzc1N0eWxlLCB0aGlzLnN0eWxlKVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICByZWY6IHRoaXMucmVmLnRvU3RyaW5nKCksXG4gICAgdHlwZTogdGhpcy50eXBlLFxuICAgIGF0dHI6IHRoaXMuYXR0cixcbiAgICBzdHlsZTogdGhpcy50b1N0eWxlKClcbiAgfVxuICBjb25zdCBldmVudCA9IE9iamVjdC5rZXlzKHRoaXMuZXZlbnQpXG4gIGlmIChldmVudC5sZW5ndGgpIHtcbiAgICByZXN1bHQuZXZlbnQgPSBldmVudFxuICB9XG4gIGlmICh0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGgpIHtcbiAgICByZXN1bHQuY2hpbGRyZW4gPSB0aGlzLnB1cmVDaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZC50b0pTT04oKSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJzwnICsgdGhpcy50eXBlICtcbiAgICAnIGF0dHI9JyArIEpTT04uc3RyaW5naWZ5KHRoaXMuYXR0cikgK1xuICAgICcgc3R5bGU9JyArIEpTT04uc3RyaW5naWZ5KHRoaXMudG9TdHlsZSgpKSArICc+JyArXG4gICAgdGhpcy5wdXJlQ2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQudG9TdHJpbmcoKSkuam9pbignJykgK1xuICAgICc8LycgKyB0aGlzLnR5cGUgKyAnPidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbW1lbnQgKHZhbHVlKSB7XG4gIHRoaXMubm9kZVR5cGUgPSA4XG4gIHRoaXMubm9kZUlkID0gKG5leHROb2RlUmVmKyspLnRvU3RyaW5nKClcbiAgdGhpcy5yZWYgPSB0aGlzLm5vZGVJZFxuICB0aGlzLnR5cGUgPSAnY29tbWVudCdcbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIHRoaXMuY2hpbGRyZW4gPSBbXVxuICB0aGlzLnB1cmVDaGlsZHJlbiA9IFtdXG59XG5cbkNvbW1lbnQucHJvdG90eXBlID0gbmV3IE5vZGUoKVxuXG5Db21tZW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICc8IS0tICcgKyB0aGlzLnZhbHVlICsgJyAtLT4nXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL3Zkb20vaW5kZXguanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0ZW5lciAoaWQsIGhhbmRsZXIpIHtcbiAgdGhpcy5pZCA9IGlkXG4gIHRoaXMuYmF0Y2hlZCA9IGZhbHNlXG4gIHRoaXMudXBkYXRlcyA9IFtdXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXJcbiAgfVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuY3JlYXRlRmluaXNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXJcbiAgcmV0dXJuIGhhbmRsZXIoW2NyZWF0ZUFjdGlvbignY3JlYXRlRmluaXNoJywgW10pXSwgY2FsbGJhY2spXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS51cGRhdGVGaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICByZXR1cm4gaGFuZGxlcihbY3JlYXRlQWN0aW9uKCd1cGRhdGVGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnJlZnJlc2hGaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICByZXR1cm4gaGFuZGxlcihbY3JlYXRlQWN0aW9uKCdyZWZyZXNoRmluaXNoJywgW10pXSwgY2FsbGJhY2spXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5jcmVhdGVCb2R5ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgY29uc3QgYm9keSA9IGVsZW1lbnQudG9KU09OKClcbiAgY29uc3QgY2hpbGRyZW4gPSBib2R5LmNoaWxkcmVuXG4gIGRlbGV0ZSBib2R5LmNoaWxkcmVuXG4gIGNvbnN0IGFjdGlvbnMgPSBbY3JlYXRlQWN0aW9uKCdjcmVhdGVCb2R5JywgW2JvZHldKV1cbiAgaWYgKGNoaWxkcmVuKSB7XG4gICAgYWN0aW9ucy5wdXNoLmFwcGx5KGFjdGlvbnMsIGNoaWxkcmVuLm1hcChjaGlsZCA9PiB7XG4gICAgICByZXR1cm4gY3JlYXRlQWN0aW9uKCdhZGRFbGVtZW50JywgW2JvZHkucmVmLCBjaGlsZCwgLTFdKVxuICAgIH0pKVxuICB9XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoYWN0aW9ucylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmFkZEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcmVmLCBpbmRleCkge1xuICBpZiAoIShpbmRleCA+PSAwKSkge1xuICAgIGluZGV4ID0gLTFcbiAgfVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbignYWRkRWxlbWVudCcsIFtyZWYsIGVsZW1lbnQudG9KU09OKCksIGluZGV4XSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5yZW1vdmVFbGVtZW50ID0gZnVuY3Rpb24gKHJlZikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyZWYpKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IHJlZi5tYXAoKHIpID0+IGNyZWF0ZUFjdGlvbigncmVtb3ZlRWxlbWVudCcsIFtyXSkpXG4gICAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhhY3Rpb25zKVxuICB9XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdyZW1vdmVFbGVtZW50JywgW3JlZl0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUubW92ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFyZ2V0UmVmLCBwYXJlbnRSZWYsIGluZGV4KSB7XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdtb3ZlRWxlbWVudCcsIFt0YXJnZXRSZWYsIHBhcmVudFJlZiwgaW5kZXhdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnNldEF0dHIgPSBmdW5jdGlvbiAocmVmLCBrZXksIHZhbHVlKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9XG4gIHJlc3VsdFtrZXldID0gdmFsdWVcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3VwZGF0ZUF0dHJzJywgW3JlZiwgcmVzdWx0XSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIChyZWYsIGtleSwgdmFsdWUpIHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigndXBkYXRlU3R5bGUnLCBbcmVmLCByZXN1bHRdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnNldFN0eWxlcyA9IGZ1bmN0aW9uIChyZWYsIHN0eWxlKSB7XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCd1cGRhdGVTdHlsZScsIFtyZWYsIHN0eWxlXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5hZGRFdmVudCA9IGZ1bmN0aW9uIChyZWYsIHR5cGUpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ2FkZEV2ZW50JywgW3JlZiwgdHlwZV0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAocmVmLCB0eXBlKSB7XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdyZW1vdmVFdmVudCcsIFtyZWYsIHR5cGVdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmhhbmRsZXIgPSBmdW5jdGlvbiAoYWN0aW9ucywgY2IpIHtcbiAgcmV0dXJuIGNiICYmIGNiKClcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmFkZEFjdGlvbnMgPSBmdW5jdGlvbiAoYWN0aW9ucykge1xuICBjb25zdCB1cGRhdGVzID0gdGhpcy51cGRhdGVzXG4gIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXJcblxuICBpZiAoIUFycmF5LmlzQXJyYXkoYWN0aW9ucykpIHtcbiAgICBhY3Rpb25zID0gW2FjdGlvbnNdXG4gIH1cblxuICBpZiAodGhpcy5iYXRjaGVkKSB7XG4gICAgdXBkYXRlcy5wdXNoLmFwcGx5KHVwZGF0ZXMsIGFjdGlvbnMpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGhhbmRsZXIoYWN0aW9ucylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWN0aW9uIChuYW1lLCBhcmdzKSB7XG4gIHJldHVybiB7IG1vZHVsZTogJ2RvbScsIG1ldGhvZDogbmFtZSwgYXJnczogYXJncyB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL3Zkb20vbGlzdGVuZXIuanNcbiAqKi8iLCIvLyBidWlsdCBieSBucG0gcnVuIGJ1aWxkOmNvbmZpZ1xuXG5pbXBvcnQgKiBhcyBXZWV4IGZyb20gJy4uL2RlZmF1bHQnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgV2VleFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9ydW50aW1lL2NvbmZpZy5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlldyBXZWV4IGZyYW1ld29yayBlbnRyeS5cbiAqL1xuXG5leHBvcnQgeyBjcmVhdGVJbnN0YW5jZSB9IGZyb20gJy4vc3RhdGljL2NyZWF0ZSdcbmV4cG9ydCB7IGluaXQsIHJlZnJlc2hJbnN0YW5jZSwgZGVzdHJveUluc3RhbmNlIH0gZnJvbSAnLi9zdGF0aWMvbGlmZSdcbmV4cG9ydCB7IHJlZ2lzdGVyQ29tcG9uZW50cywgcmVnaXN0ZXJNb2R1bGVzLCByZWdpc3Rlck1ldGhvZHMgfSBmcm9tICcuL3N0YXRpYy9yZWdpc3RlcidcbmV4cG9ydCB7IHJlY2VpdmVUYXNrcyB9IGZyb20gJy4vc3RhdGljL2JyaWRnZSdcbmV4cG9ydCB7IGdldFJvb3QgfSBmcm9tICcuL3N0YXRpYy9taXNjJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IEFwcCBmcm9tICcuLi9hcHAnXG5pbXBvcnQgeyBpbnN0YW5jZU1hcCB9IGZyb20gJy4vbWFwJ1xuaW1wb3J0IHsgaW5pdCBhcyBpbml0QXBwIH0gZnJvbSAnLi4vYXBwL2N0cmwnXG5cbi8qKlxuICogQ3JlYXRlIGEgV2VleCBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNvZGVcbiAqIEBwYXJhbSAge29iamVjdH0gW29wdGlvbnNdIG9wdGlvbiBgSEFTX0xPR2AgZW5hYmxlIHByaW50IGxvZ1xuICogQHBhcmFtICB7b2JqZWN0fSBbZGF0YV1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlIChpZCwgY29kZSwgb3B0aW9ucywgZGF0YSkge1xuICBsZXQgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpZF1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgbGV0IHJlc3VsdFxuICBpZiAoIWluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UgPSBuZXcgQXBwKGlkLCBvcHRpb25zKVxuICAgIGluc3RhbmNlTWFwW2lkXSA9IGluc3RhbmNlXG4gICAgcmVzdWx0ID0gaW5pdEFwcChpbnN0YW5jZSwgY29kZSwgZGF0YSlcbiAgfVxuICBlbHNlIHtcbiAgICByZXN1bHQgPSBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvc3RhdGljL2NyZWF0ZS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogV2VleCBpbnN0YW5jZSBjb25zdHJ1Y3RvciAmIGRlZmluaXRpb25cbiAqL1xuXG5pbXBvcnQgeyByZXF1aXJlTW9kdWxlIH0gZnJvbSAnLi9yZWdpc3RlcidcbmltcG9ydCB7IHVwZGF0ZUFjdGlvbnMsIGNhbGxUYXNrcyB9IGZyb20gJy4vY3RybCdcbmltcG9ydCBBcHAgZnJvbSAnLi9pbnN0YW5jZSdcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5BcHAucHJvdG90eXBlLnJlcXVpcmVNb2R1bGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gcmVxdWlyZU1vZHVsZSh0aGlzLCBuYW1lKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkFwcC5wcm90b3R5cGUudXBkYXRlQWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgdXBkYXRlQWN0aW9ucyh0aGlzKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkFwcC5wcm90b3R5cGUuY2FsbFRhc2tzID0gZnVuY3Rpb24gKHRhc2tzKSB7XG4gIGNhbGxUYXNrcyh0aGlzLCB0YXNrcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2luZGV4LmpzXG4gKiovIiwibGV0IG5hdGl2ZU1vZHVsZXMgPSB7fVxuXG4vLyBmb3IgdGVzdGluZ1xuXG4vKipcbiAqIGZvciB0ZXN0aW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2R1bGUgKG1vZHVsZU5hbWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU1vZHVsZXNbbW9kdWxlTmFtZV1cbn1cblxuLyoqXG4gKiBmb3IgdGVzdGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJNb2R1bGVzICgpIHtcbiAgbmF0aXZlTW9kdWxlcyA9IHt9XG59XG5cbi8vIGZvciBmcmFtZXdvcmtcblxuLyoqXG4gKiBpbml0IG1vZHVsZXMgZm9yIGFuIGFwcCBpbnN0YW5jZVxuICogdGhlIHNlY29uZCBwYXJhbSBkZXRlcm1pbmVzIHdoZXRoZXIgdG8gcmVwbGFjZSBhbiBleGlzdGVkIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1vZHVsZXMgKG1vZHVsZXMsIGlmUmVwbGFjZSkge1xuICBmb3IgKGNvbnN0IG1vZHVsZU5hbWUgaW4gbW9kdWxlcykge1xuICAgIC8vIGluaXQgYG1vZHVsZXNbbW9kdWxlTmFtZV1bXWBcbiAgICBsZXQgbWV0aG9kcyA9IG5hdGl2ZU1vZHVsZXNbbW9kdWxlTmFtZV1cbiAgICBpZiAoIW1ldGhvZHMpIHtcbiAgICAgIG1ldGhvZHMgPSB7fVxuICAgICAgbmF0aXZlTW9kdWxlc1ttb2R1bGVOYW1lXSA9IG1ldGhvZHNcbiAgICB9XG5cbiAgICAvLyBwdXNoIGVhY2ggbm9uLWV4aXN0ZWQgbmV3IG1ldGhvZFxuICAgIG1vZHVsZXNbbW9kdWxlTmFtZV0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbWV0aG9kID0ge1xuICAgICAgICAgIG5hbWU6IG1ldGhvZFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghbWV0aG9kc1ttZXRob2QubmFtZV0gfHwgaWZSZXBsYWNlKSB7XG4gICAgICAgIG1ldGhvZHNbbWV0aG9kLm5hbWVdID0gbWV0aG9kXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIGluaXQgYXBwIG1ldGhvZHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRNZXRob2RzIChWbSwgYXBpcykge1xuICBjb25zdCBwID0gVm0ucHJvdG90eXBlXG5cbiAgZm9yIChjb25zdCBhcGlOYW1lIGluIGFwaXMpIHtcbiAgICBpZiAoIXAuaGFzT3duUHJvcGVydHkoYXBpTmFtZSkpIHtcbiAgICAgIHBbYXBpTmFtZV0gPSBhcGlzW2FwaU5hbWVdXG4gICAgfVxuICB9XG59XG5cbi8vIGZvciBhcHBcblxuLyoqXG4gKiBnZXQgYSBtb2R1bGUgb2YgbWV0aG9kcyBmb3IgYW4gYXBwIGluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlTW9kdWxlIChhcHAsIG5hbWUpIHtcbiAgY29uc3QgbWV0aG9kcyA9IG5hdGl2ZU1vZHVsZXNbbmFtZV1cbiAgY29uc3QgdGFyZ2V0ID0ge31cbiAgZm9yIChjb25zdCBtZXRob2ROYW1lIGluIG1ldGhvZHMpIHtcbiAgICB0YXJnZXRbbWV0aG9kTmFtZV0gPSAoLi4uYXJncykgPT4gYXBwLmNhbGxUYXNrcyh7XG4gICAgICBtb2R1bGU6IG5hbWUsXG4gICAgICBtZXRob2Q6IG1ldGhvZE5hbWUsXG4gICAgICBhcmdzOiBhcmdzXG4gICAgfSlcbiAgfVxuICByZXR1cm4gdGFyZ2V0XG59XG5cbi8qKlxuICogZ2V0IGEgY3VzdG9tIGNvbXBvbmVudCBvcHRpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlQ3VzdG9tQ29tcG9uZW50IChhcHAsIG5hbWUpIHtcbiAgY29uc3QgeyBjdXN0b21Db21wb25lbnRNYXAgfSA9IGFwcFxuICByZXR1cm4gY3VzdG9tQ29tcG9uZW50TWFwW25hbWVdXG59XG5cbi8qKlxuICogcmVnaXN0ZXIgYSBjdXN0b20gY29tcG9uZW50IG9wdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ3VzdG9tQ29tcG9uZW50IChhcHAsIG5hbWUsIGRlZikge1xuICBjb25zdCB7IGN1c3RvbUNvbXBvbmVudE1hcCB9ID0gYXBwXG5cbiAgaWYgKGN1c3RvbUNvbXBvbmVudE1hcFtuYW1lXSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtKUyBGcmFtZXdvcmtdIGRlZmluZSBhIGNvbXBvbmVudCgke25hbWV9KSB0aGF0IGFscmVhZHkgZXhpc3RzYClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGN1c3RvbUNvbXBvbmVudE1hcFtuYW1lXSA9IGRlZlxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9yZWdpc3Rlci5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogaW5zdGFuY2UgY29udHJvbHMgZnJvbSBuYXRpdmVcbiAqXG4gKiAtIGluaXQgYnVuZGxlXG4gKiAtIGZpcmUgZXZlbnRcbiAqIC0gY2FsbGJhY2tcbiAqIC0gZGVzdHJveVxuICpcbiAqIGNvcnJlc3BvbmRlZCB3aXRoIHRoZSBBUEkgb2YgaW5zdGFuY2UgbWFuYWdlciAoZnJhbWV3b3JrLmpzKVxuICovXG5leHBvcnQgeyBpbml0IH0gZnJvbSAnLi9pbml0J1xuXG5leHBvcnQge1xuXHRyZWZyZXNoLFxuICBkZXN0cm95LFxuICBnZXRSb290RWxlbWVudCxcbiAgZmlyZUV2ZW50LFxuICBjYWxsYmFjayxcbiAgdXBkYXRlQWN0aW9ucyxcblx0Y2FsbFRhc2tzXG59IGZyb20gJy4vbWlzYydcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvY3RybC9pbmRleC5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogaW5zdGFuY2UgY29udHJvbHMgZnJvbSBuYXRpdmVcbiAqXG4gKiAtIGluaXQgYnVuZGxlXG4gKlxuICogY29ycmVzcG9uZGVkIHdpdGggdGhlIEFQSSBvZiBpbnN0YW5jZSBtYW5hZ2VyIChmcmFtZXdvcmsuanMpXG4gKi9cblxuaW1wb3J0IHsgcmVtb3ZlV2VleFByZWZpeCB9IGZyb20gJy4uLy4uL3V0aWwnXG5pbXBvcnQge1xuICBkZWZpbmVGbixcbiAgYm9vdHN0cmFwLFxuICByZWdpc3RlclxufSBmcm9tICcuLi9idW5kbGUnXG5pbXBvcnQgeyB1cGRhdGVBY3Rpb25zIH0gZnJvbSAnLi9taXNjJ1xuXG4vKipcbiAqIEluaXQgYW4gYXBwIGJ5IHJ1biBjb2RlIHdpdGdoIGRhdGFcbiAqIEBwYXJhbSAge29iamVjdH0gYXBwXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNvZGVcbiAqIEBwYXJhbSAge29iamVjdH0gZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdCAoYXBwLCBjb2RlLCBkYXRhKSB7XG4gIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIEludGlhbGl6ZSBhbiBpbnN0YW5jZSB3aXRoOlxcbicsIGRhdGEpXG4gIGxldCByZXN1bHRcblxuICAvLyBwcmVwYXJlIGFwcCBlbnYgbWV0aG9kc1xuICBjb25zdCBidW5kbGVEZWZpbmUgPSAoLi4uYXJncykgPT4gZGVmaW5lRm4oYXBwLCAuLi5hcmdzKVxuICBjb25zdCBidW5kbGVCb290c3RyYXAgPSAobmFtZSwgY29uZmlnLCBfZGF0YSkgPT4ge1xuICAgIHJlc3VsdCA9IGJvb3RzdHJhcChhcHAsIG5hbWUsIGNvbmZpZywgX2RhdGEgfHwgZGF0YSlcbiAgICB1cGRhdGVBY3Rpb25zKGFwcClcbiAgICBhcHAuZG9jLmxpc3RlbmVyLmNyZWF0ZUZpbmlzaCgpXG4gICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gQWZ0ZXIgaW50aWFsaXplZCBhbiBpbnN0YW5jZSgke2FwcC5pZH0pYClcbiAgfVxuICBjb25zdCBidW5kbGVSZWdpc3RlciA9ICguLi5hcmdzKSA9PiByZWdpc3RlcihhcHAsIC4uLmFyZ3MpXG4gIGNvbnN0IGJ1bmRsZVJlbmRlciA9IChuYW1lLCBfZGF0YSkgPT4ge1xuICAgIHJlc3VsdCA9IGJvb3RzdHJhcChhcHAsIG5hbWUsIHt9LCBfZGF0YSlcbiAgfVxuICBjb25zdCBidW5kbGVSZXF1aXJlID0gbmFtZSA9PiBfZGF0YSA9PiB7XG4gICAgcmVzdWx0ID0gYm9vdHN0cmFwKGFwcCwgbmFtZSwge30sIF9kYXRhKVxuICB9XG4gIGNvbnN0IGJ1bmRsZURvY3VtZW50ID0gYXBwLmRvY1xuICBjb25zdCBidW5kbGVSZXF1aXJlTW9kdWxlID0gbmFtZSA9PiBhcHAucmVxdWlyZU1vZHVsZShyZW1vdmVXZWV4UHJlZml4KG5hbWUpKVxuXG4gIC8vIHByZXBhcmUgY29kZVxuICBsZXQgZnVuY3Rpb25Cb2R5XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIGNvZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBgZnVuY3Rpb24gKCkgey4uLn1gIC0+IGB7Li4ufWBcbiAgICAvLyBub3QgdmVyeSBzdHJpY3RcbiAgICBmdW5jdGlvbkJvZHkgPSBjb2RlLnRvU3RyaW5nKCkuc3Vic3RyKDEyKVxuICB9XG4gIGVsc2UgaWYgKGNvZGUpIHtcbiAgICBmdW5jdGlvbkJvZHkgPSBjb2RlLnRvU3RyaW5nKClcbiAgfVxuXG4gIC8vIHJ1biBjb2RlIGFuZCBnZXQgcmVzdWx0XG4gIGNvbnN0IHsgV1hFbnZpcm9ubWVudCB9ID0gZ2xvYmFsXG4gIGlmIChXWEVudmlyb25tZW50ICYmIFdYRW52aXJvbm1lbnQucGxhdGZvcm0gIT09ICdXZWInKSB7XG4gICAgLy8gdGltZXIgQVBJcyBwb2x5ZmlsbCBpbiBuYXRpdmVcbiAgICBjb25zdCB0aW1lciA9IGFwcC5yZXF1aXJlTW9kdWxlKCd0aW1lcicpXG4gICAgY29uc3QgdGltZXJBUElzID0ge1xuICAgICAgc2V0VGltZW91dDogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhcmdzWzBdKC4uLmFyZ3Muc2xpY2UoMikpXG4gICAgICAgIH1cbiAgICAgICAgdGltZXIuc2V0VGltZW91dChoYW5kbGVyLCBhcmdzWzFdKVxuICAgICAgICByZXR1cm4gYXBwLnVpZC50b1N0cmluZygpXG4gICAgICB9LFxuICAgICAgc2V0SW50ZXJ2YWw6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYXJnc1swXSguLi5hcmdzLnNsaWNlKDIpKVxuICAgICAgICB9XG4gICAgICAgIHRpbWVyLnNldEludGVydmFsKGhhbmRsZXIsIGFyZ3NbMV0pXG4gICAgICAgIHJldHVybiBhcHAudWlkLnRvU3RyaW5nKClcbiAgICAgIH0sXG4gICAgICBjbGVhclRpbWVvdXQ6IChuKSA9PiB7XG4gICAgICAgIHRpbWVyLmNsZWFyVGltZW91dChuKVxuICAgICAgfSxcbiAgICAgIGNsZWFySW50ZXJ2YWw6IChuKSA9PiB7XG4gICAgICAgIHRpbWVyLmNsZWFySW50ZXJ2YWwobilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmbiA9IG5ldyBGdW5jdGlvbihcbiAgICAgICdkZWZpbmUnLFxuICAgICAgJ3JlcXVpcmUnLFxuICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICdib290c3RyYXAnLFxuICAgICAgJ3JlZ2lzdGVyJyxcbiAgICAgICdyZW5kZXInLFxuICAgICAgJ19fd2VleF9kZWZpbmVfXycsIC8vIGFsaWFzIGZvciBkZWZpbmVcbiAgICAgICdfX3dlZXhfYm9vdHN0cmFwX18nLCAvLyBhbGlhcyBmb3IgYm9vdHN0cmFwXG4gICAgICAnX193ZWV4X2RvY3VtZW50X18nLCAvLyBhbGlhcyBmb3IgYm9vdHN0cmFwXG4gICAgICAnX193ZWV4X3JlcXVpcmVfXycsXG4gICAgICAnc2V0VGltZW91dCcsXG4gICAgICAnc2V0SW50ZXJ2YWwnLFxuICAgICAgJ2NsZWFyVGltZW91dCcsXG4gICAgICAnY2xlYXJJbnRlcnZhbCcsXG4gICAgICBmdW5jdGlvbkJvZHlcbiAgICApXG5cbiAgICBmbihcbiAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgIGJ1bmRsZVJlcXVpcmUsXG4gICAgICBidW5kbGVEb2N1bWVudCxcbiAgICAgIGJ1bmRsZUJvb3RzdHJhcCxcbiAgICAgIGJ1bmRsZVJlZ2lzdGVyLFxuICAgICAgYnVuZGxlUmVuZGVyLFxuICAgICAgYnVuZGxlRGVmaW5lLFxuICAgICAgYnVuZGxlQm9vdHN0cmFwLFxuICAgICAgYnVuZGxlRG9jdW1lbnQsXG4gICAgICBidW5kbGVSZXF1aXJlTW9kdWxlLFxuICAgICAgdGltZXJBUElzLnNldFRpbWVvdXQsXG4gICAgICB0aW1lckFQSXMuc2V0SW50ZXJ2YWwsXG4gICAgICB0aW1lckFQSXMuY2xlYXJUaW1lb3V0LFxuICAgICAgdGltZXJBUElzLmNsZWFySW50ZXJ2YWwpXG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgZm4gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAnZGVmaW5lJyxcbiAgICAgICdyZXF1aXJlJyxcbiAgICAgICdkb2N1bWVudCcsXG4gICAgICAnYm9vdHN0cmFwJyxcbiAgICAgICdyZWdpc3RlcicsXG4gICAgICAncmVuZGVyJyxcbiAgICAgICdfX3dlZXhfZGVmaW5lX18nLCAvLyBhbGlhcyBmb3IgZGVmaW5lXG4gICAgICAnX193ZWV4X2Jvb3RzdHJhcF9fJywgLy8gYWxpYXMgZm9yIGJvb3RzdHJhcFxuICAgICAgJ19fd2VleF9kb2N1bWVudF9fJywgLy8gYWxpYXMgZm9yIGJvb3RzdHJhcFxuICAgICAgJ19fd2VleF9yZXF1aXJlX18nLFxuICAgICAgZnVuY3Rpb25Cb2R5XG4gICAgKVxuXG4gICAgZm4oXG4gICAgICBidW5kbGVEZWZpbmUsXG4gICAgICBidW5kbGVSZXF1aXJlLFxuICAgICAgYnVuZGxlRG9jdW1lbnQsXG4gICAgICBidW5kbGVCb290c3RyYXAsXG4gICAgICBidW5kbGVSZWdpc3RlcixcbiAgICAgIGJ1bmRsZVJlbmRlcixcbiAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgIGJ1bmRsZUJvb3RzdHJhcCxcbiAgICAgIGJ1bmRsZURvY3VtZW50LFxuICAgICAgYnVuZGxlUmVxdWlyZU1vZHVsZSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvY3RybC9pbml0LmpzXG4gKiovIiwiZXhwb3J0IHtcbiAgZXh0ZW5kLFxuICBkZWYsXG4gIHJlbW92ZSxcbiAgaGFzT3duLFxuICBiaW5kLFxuICB0b0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdFxufSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMnXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzdHJpbmcgc3RhcnRzIHdpdGggJCBvciBfXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNlcnZlZCAoc3RyKSB7XG4gIGNvbnN0IGMgPSAoc3RyICsgJycpLmNoYXJDb2RlQXQoMClcbiAgcmV0dXJuIGMgPT09IDB4MjQgfHwgYyA9PT0gMHg1RlxufVxuXG4vLyBjYW4gd2UgdXNlIF9fcHJvdG9fXz9cbmV4cG9ydCBjb25zdCBoYXNQcm90byA9ICdfX3Byb3RvX18nIGluIHt9XG5cbmxldCBfU2V0XG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICh0eXBlb2YgU2V0ICE9PSAndW5kZWZpbmVkJyAmJiBTZXQudG9TdHJpbmcoKS5tYXRjaCgvbmF0aXZlIGNvZGUvKSkge1xuICAvLyB1c2UgbmF0aXZlIFNldCB3aGVuIGF2YWlsYWJsZS5cbiAgX1NldCA9IFNldFxufVxuZWxzZSB7XG4gIC8vIGEgbm9uLXN0YW5kYXJkIFNldCBwb2x5ZmlsbCB0aGF0IG9ubHkgd29ya3Mgd2l0aCBwcmltaXRpdmUga2V5cy5cbiAgX1NldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgfVxuICBfU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gIT09IHVuZGVmaW5lZFxuICB9XG4gIF9TZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0aGlzLnNldFtrZXldID0gMVxuICB9XG4gIF9TZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB9XG59XG5cbmV4cG9ydCB7IF9TZXQgfVxuXG4vKipcbiAqIFBvbHlmaWxsIGluIGlPUzcgYnkgbmF0aXZlIGJlY2F1c2UgdGhlIEphdmFTY3JpcHQgcG9seWZpbGwgaGFzIG1lbW9yeSBwcm9ibGVtLlxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdTZXQgKCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICBpZiAodHlwZW9mIG5hdGl2ZVNldCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbmF0aXZlU2V0LmNyZWF0ZSgpXG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuICByZXR1cm4gbmV3IF9TZXQoKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XG4gICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXVxuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxuICB9XG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsbWl0ZWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5jb25zdCBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nXG5leHBvcnQgY29uc3QgY2FtZWxpemUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIHRvVXBwZXIpXG59KVxuXG5mdW5jdGlvbiB0b1VwcGVyIChfLCBjKSB7XG4gIHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJydcbn1cblxuLyoqXG4gKiBIeXBoZW5hdGUgYSBjYW1lbENhc2Ugc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5jb25zdCBoeXBoZW5hdGVSRSA9IC8oW2EtelxcZF0pKFtBLVpdKS9nXG5leHBvcnQgY29uc3QgaHlwaGVuYXRlID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHJcbiAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAudG9Mb3dlckNhc2UoKVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cG9mICh2KSB7XG4gIGNvbnN0IHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSkudG9Mb3dlckNhc2UoKVxufVxuXG4vLyB3ZWV4IG5hbWUgcnVsZXNcblxuY29uc3QgV0VFWF9DT01QT05FTlRfUkVHID0gL15Ad2VleC1jb21wb25lbnRcXC8vXG5jb25zdCBXRUVYX01PRFVMRV9SRUcgPSAvXkB3ZWV4LW1vZHVsZVxcLy9cbmNvbnN0IE5PUk1BTF9NT0RVTEVfUkVHID0gL15cXC57MSwyfVxcLy9cbmNvbnN0IEpTX1NVUkZJWF9SRUcgPSAvXFwuanMkL1xuXG5leHBvcnQgY29uc3QgaXNXZWV4Q29tcG9uZW50ID0gbmFtZSA9PiAhIW5hbWUubWF0Y2goV0VFWF9DT01QT05FTlRfUkVHKVxuZXhwb3J0IGNvbnN0IGlzV2VleE1vZHVsZSA9IG5hbWUgPT4gISFuYW1lLm1hdGNoKFdFRVhfTU9EVUxFX1JFRylcbmV4cG9ydCBjb25zdCBpc05vcm1hbE1vZHVsZSA9IG5hbWUgPT4gISFuYW1lLm1hdGNoKE5PUk1BTF9NT0RVTEVfUkVHKVxuZXhwb3J0IGNvbnN0IGlzTnBtTW9kdWxlID0gbmFtZSA9PiAhaXNXZWV4Q29tcG9uZW50KG5hbWUpICYmICFpc1dlZXhNb2R1bGUobmFtZSkgJiYgIWlzTm9ybWFsTW9kdWxlKG5hbWUpXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVXZWV4UHJlZml4IChzdHIpIHtcbiAgY29uc3QgcmVzdWx0ID0gc3RyLnJlcGxhY2UoV0VFWF9DT01QT05FTlRfUkVHLCAnJykucmVwbGFjZShXRUVYX01PRFVMRV9SRUcsICcnKVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVKU1N1cmZpeCAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShKU19TVVJGSVhfUkVHLCAnJylcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC91dGlsL2luZGV4LmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBhcGkgdGhhdCBpbnZva2VkIGJ5IGpzIGJ1bmRsZSBjb2RlXG4gKlxuICogLSBkZWZpbmUobmFtZSwgZmFjdG9yeSk6IGRlZmluZSBhIG5ldyBjb21wb3NlZCBjb21wb25lbnQgdHlwZVxuICogLSBib290c3RyYXAodHlwZSwgY29uZmlnLCBkYXRhKTogcmVxdWlyZSBhIGNlcnRhaW4gdHlwZSAmXG4gKiAgICAgICAgIHJlbmRlciB3aXRoIChvcHRpb25hbCkgZGF0YVxuICpcbiAqIGRlcHJlY2F0ZWQ6XG4gKiAtIHJlZ2lzdGVyKHR5cGUsIG9wdGlvbnMpOiByZWdpc3RlciBhIG5ldyBjb21wb3NlZCBjb21wb25lbnQgdHlwZVxuICogLSByZW5kZXIodHlwZSwgZGF0YSk6IHJlbmRlciBieSBhIGNlcnRhaW4gdHlwZSB3aXRoIChvcHRpb25hbCkgZGF0YVxuICogLSByZXF1aXJlKHR5cGUpKGRhdGEpOiByZXF1aXJlIGEgdHlwZSB0aGVuIHJlbmRlciB3aXRoIGRhdGFcbiAqL1xuXG5leHBvcnQgeyBib290c3RyYXAgfSBmcm9tICcuL2Jvb3RzdHJhcCdcbmV4cG9ydCB7IGRlZmluZUZuLCByZWdpc3RlciB9IGZyb20gJy4vZGVmaW5lJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9idW5kbGUvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgc2VtdmVyIGZyb20gJ3NlbXZlcidcbmltcG9ydCBWbSBmcm9tICcuLi8uLi92bSdcbmltcG9ydCAqIGFzIGRvd25ncmFkZSBmcm9tICcuLi9kb3duZ3JhZGUnXG5pbXBvcnQge1xuICByZXF1aXJlQ3VzdG9tQ29tcG9uZW50XG59IGZyb20gJy4uL3JlZ2lzdGVyJ1xuaW1wb3J0IHtcbiAgaXNQbGFpbk9iamVjdCxcbiAgaXNXZWV4Q29tcG9uZW50LFxuICBpc05wbU1vZHVsZSxcbiAgcmVtb3ZlV2VleFByZWZpeCxcbiAgcmVtb3ZlSlNTdXJmaXhcbn0gZnJvbSAnLi4vLi4vdXRpbCdcblxuLyoqXG4gKiBib290c3RyYXAgYXBwIGZyb20gYSBjZXJ0YWluIGN1c3RvbSBjb21wb25lbnQgd2l0aCBjb25maWcgJiBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBib290c3RyYXAgKGFwcCwgbmFtZSwgY29uZmlnLCBkYXRhKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGJvb3RzdHJhcCBmb3IgJHtuYW1lfWApXG5cbiAgLy8gMS4gdmFsaWRhdGUgY3VzdG9tIGNvbXBvbmVudCBuYW1lIGZpcnN0XG4gIGxldCBjbGVhbk5hbWVcbiAgaWYgKGlzV2VleENvbXBvbmVudChuYW1lKSkge1xuICAgIGNsZWFuTmFtZSA9IHJlbW92ZVdlZXhQcmVmaXgobmFtZSlcbiAgfVxuICBlbHNlIGlmIChpc05wbU1vZHVsZShuYW1lKSkge1xuICAgIGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG4gICAgLy8gY2hlY2sgaWYgZGVmaW5lIGJ5IG9sZCAnZGVmaW5lJyBtZXRob2RcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXJlcXVpcmVDdXN0b21Db21wb25lbnQoYXBwLCBjbGVhbk5hbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBJdCdzIG5vdCBhIGNvbXBvbmVudDogJHtuYW1lfWApXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYFdyb25nIGNvbXBvbmVudCBuYW1lOiAke25hbWV9YClcbiAgfVxuXG4gIC8vIDIuIHZhbGlkYXRlIGNvbmZpZ3VyYXRpb25cbiAgY29uZmlnID0gaXNQbGFpbk9iamVjdChjb25maWcpID8gY29uZmlnIDoge31cbiAgLy8gMi4xIHRyYW5zZm9ybWVyIHZlcnNpb24gY2hlY2tcbiAgaWYgKHR5cGVvZiBjb25maWcudHJhbnNmb3JtZXJWZXJzaW9uID09PSAnc3RyaW5nJyAmJlxuICAgIHR5cGVvZiBnbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uID09PSAnc3RyaW5nJyAmJlxuICAgICFzZW12ZXIuc2F0aXNmaWVzKGNvbmZpZy50cmFuc2Zvcm1lclZlcnNpb24sXG4gICAgICBnbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYEpTIEJ1bmRsZSB2ZXJzaW9uOiAke2NvbmZpZy50cmFuc2Zvcm1lclZlcnNpb259IGAgK1xuICAgICAgYG5vdCBjb21wYXRpYmxlIHdpdGggJHtnbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9ufWApXG4gIH1cbiAgLy8gMi4yIGRvd25ncmFkZSB2ZXJzaW9uIGNoZWNrXG4gIGNvbnN0IGRvd25ncmFkZVJlc3VsdCA9IGRvd25ncmFkZS5jaGVjayhjb25maWcuZG93bmdyYWRlKVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGRvd25ncmFkZVJlc3VsdC5pc0Rvd25ncmFkZSkge1xuICAgIGFwcC5jYWxsVGFza3MoW3tcbiAgICAgIG1vZHVsZTogJ2luc3RhbmNlV3JhcCcsXG4gICAgICBtZXRob2Q6ICdlcnJvcicsXG4gICAgICBhcmdzOiBbXG4gICAgICAgIGRvd25ncmFkZVJlc3VsdC5lcnJvclR5cGUsXG4gICAgICAgIGRvd25ncmFkZVJlc3VsdC5jb2RlLFxuICAgICAgICBkb3duZ3JhZGVSZXN1bHQuZXJyb3JNZXNzYWdlXG4gICAgICBdXG4gICAgfV0pXG4gICAgcmV0dXJuIG5ldyBFcnJvcihgRG93bmdyYWRlWyR7ZG93bmdyYWRlUmVzdWx0LmNvZGV9XTogJHtkb3duZ3JhZGVSZXN1bHQuZXJyb3JNZXNzYWdlfWApXG4gIH1cblxuICAvLyAzLiBjcmVhdGUgYSBuZXcgVm0gd2l0aCBjdXN0b20gY29tcG9uZW50IG5hbWUgYW5kIGRhdGFcbiAgYXBwLnZtID0gbmV3IFZtKGNsZWFuTmFtZSwgbnVsbCwgeyBfYXBwOiBhcHAgfSwgbnVsbCwgZGF0YSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvYnVuZGxlL2Jvb3RzdHJhcC5qc1xuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFNlbVZlcjtcblxuLy8gVGhlIGRlYnVnIGZ1bmN0aW9uIGlzIGV4Y2x1ZGVkIGVudGlyZWx5IGZyb20gdGhlIG1pbmlmaWVkIHZlcnNpb24uXG4vKiBub21pbiAqLyB2YXIgZGVidWc7XG4vKiBub21pbiAqLyBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmXG4gICAgLyogbm9taW4gKi8gcHJvY2Vzcy5lbnYgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudi5OT0RFX0RFQlVHICYmXG4gICAgLyogbm9taW4gKi8gL1xcYnNlbXZlclxcYi9pLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRykpXG4gIC8qIG5vbWluICovIGRlYnVnID0gZnVuY3Rpb24oKSB7XG4gICAgLyogbm9taW4gKi8gdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIC8qIG5vbWluICovIGFyZ3MudW5zaGlmdCgnU0VNVkVSJyk7XG4gICAgLyogbm9taW4gKi8gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgLyogbm9taW4gKi8gfTtcbi8qIG5vbWluICovIGVsc2VcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHt9O1xuXG4vLyBOb3RlOiB0aGlzIGlzIHRoZSBzZW12ZXIub3JnIHZlcnNpb24gb2YgdGhlIHNwZWMgdGhhdCBpdCBpbXBsZW1lbnRzXG4vLyBOb3QgbmVjZXNzYXJpbHkgdGhlIHBhY2thZ2UgdmVyc2lvbiBvZiB0aGlzIGNvZGUuXG5leHBvcnRzLlNFTVZFUl9TUEVDX1ZFUlNJT04gPSAnMi4wLjAnO1xuXG52YXIgTUFYX0xFTkdUSCA9IDI1NjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgOTAwNzE5OTI1NDc0MDk5MTtcblxuLy8gVGhlIGFjdHVhbCByZWdleHBzIGdvIG9uIGV4cG9ydHMucmVcbnZhciByZSA9IGV4cG9ydHMucmUgPSBbXTtcbnZhciBzcmMgPSBleHBvcnRzLnNyYyA9IFtdO1xudmFyIFIgPSAwO1xuXG4vLyBUaGUgZm9sbG93aW5nIFJlZ3VsYXIgRXhwcmVzc2lvbnMgY2FuIGJlIHVzZWQgZm9yIHRva2VuaXppbmcsXG4vLyB2YWxpZGF0aW5nLCBhbmQgcGFyc2luZyBTZW1WZXIgdmVyc2lvbiBzdHJpbmdzLlxuXG4vLyAjIyBOdW1lcmljIElkZW50aWZpZXJcbi8vIEEgc2luZ2xlIGAwYCwgb3IgYSBub24temVybyBkaWdpdCBmb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgZGlnaXRzLlxuXG52YXIgTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJdID0gJzB8WzEtOV1cXFxcZConO1xudmFyIE5VTUVSSUNJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gPSAnWzAtOV0rJztcblxuXG4vLyAjIyBOb24tbnVtZXJpYyBJZGVudGlmaWVyXG4vLyBaZXJvIG9yIG1vcmUgZGlnaXRzLCBmb2xsb3dlZCBieSBhIGxldHRlciBvciBoeXBoZW4sIGFuZCB0aGVuIHplcm8gb3Jcbi8vIG1vcmUgbGV0dGVycywgZGlnaXRzLCBvciBoeXBoZW5zLlxuXG52YXIgTk9OTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdID0gJ1xcXFxkKlthLXpBLVotXVthLXpBLVowLTktXSonO1xuXG5cbi8vICMjIE1haW4gVmVyc2lvblxuLy8gVGhyZWUgZG90LXNlcGFyYXRlZCBudW1lcmljIGlkZW50aWZpZXJzLlxuXG52YXIgTUFJTlZFUlNJT04gPSBSKys7XG5zcmNbTUFJTlZFUlNJT05dID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBNQUlOVkVSU0lPTkxPT1NFID0gUisrO1xuc3JjW01BSU5WRVJTSU9OTE9PU0VdID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJyknO1xuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uIElkZW50aWZpZXJcbi8vIEEgbnVtZXJpYyBpZGVudGlmaWVyLCBvciBhIG5vbi1udW1lcmljIGlkZW50aWZpZXIuXG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUiA9IFIrKztcbnNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd8JyArIHNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdID0gJyg/OicgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uXG4vLyBIeXBoZW4sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGRvdC1zZXBhcmF0ZWQgcHJlLXJlbGVhc2UgdmVyc2lvblxuLy8gaWRlbnRpZmllcnMuXG5cbnZhciBQUkVSRUxFQVNFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VdID0gJyg/Oi0oJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gKyAnKSopKSc7XG5cbnZhciBQUkVSRUxFQVNFTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUxPT1NFXSA9ICcoPzotPygnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSArICcpKikpJztcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGEgSWRlbnRpZmllclxuLy8gQW55IGNvbWJpbmF0aW9uIG9mIGRpZ2l0cywgbGV0dGVycywgb3IgaHlwaGVucy5cblxudmFyIEJVSUxESURFTlRJRklFUiA9IFIrKztcbnNyY1tCVUlMRElERU5USUZJRVJdID0gJ1swLTlBLVphLXotXSsnO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YVxuLy8gUGx1cyBzaWduLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBwZXJpb2Qtc2VwYXJhdGVkIGJ1aWxkIG1ldGFkYXRhXG4vLyBpZGVudGlmaWVycy5cblxudmFyIEJVSUxEID0gUisrO1xuc3JjW0JVSUxEXSA9ICcoPzpcXFxcKygnICsgc3JjW0JVSUxESURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbQlVJTERJREVOVElGSUVSXSArICcpKikpJztcblxuXG4vLyAjIyBGdWxsIFZlcnNpb24gU3RyaW5nXG4vLyBBIG1haW4gdmVyc2lvbiwgZm9sbG93ZWQgb3B0aW9uYWxseSBieSBhIHByZS1yZWxlYXNlIHZlcnNpb24gYW5kXG4vLyBidWlsZCBtZXRhZGF0YS5cblxuLy8gTm90ZSB0aGF0IHRoZSBvbmx5IG1ham9yLCBtaW5vciwgcGF0Y2gsIGFuZCBwcmUtcmVsZWFzZSBzZWN0aW9ucyBvZlxuLy8gdGhlIHZlcnNpb24gc3RyaW5nIGFyZSBjYXB0dXJpbmcgZ3JvdXBzLiAgVGhlIGJ1aWxkIG1ldGFkYXRhIGlzIG5vdCBhXG4vLyBjYXB0dXJpbmcgZ3JvdXAsIGJlY2F1c2UgaXQgc2hvdWxkIG5vdCBldmVyIGJlIHVzZWQgaW4gdmVyc2lvblxuLy8gY29tcGFyaXNvbi5cblxudmFyIEZVTEwgPSBSKys7XG52YXIgRlVMTFBMQUlOID0gJ3Y/JyArIHNyY1tNQUlOVkVSU0lPTl0gK1xuICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFXSArICc/JyArXG4gICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/Jztcblxuc3JjW0ZVTExdID0gJ14nICsgRlVMTFBMQUlOICsgJyQnO1xuXG4vLyBsaWtlIGZ1bGwsIGJ1dCBhbGxvd3MgdjEuMi4zIGFuZCA9MS4yLjMsIHdoaWNoIHBlb3BsZSBkbyBzb21ldGltZXMuXG4vLyBhbHNvLCAxLjAuMGFscGhhMSAocHJlcmVsZWFzZSB3aXRob3V0IHRoZSBoeXBoZW4pIHdoaWNoIGlzIHByZXR0eVxuLy8gY29tbW9uIGluIHRoZSBucG0gcmVnaXN0cnkuXG52YXIgTE9PU0VQTEFJTiA9ICdbdj1cXFxcc10qJyArIHNyY1tNQUlOVkVSU0lPTkxPT1NFXSArXG4gICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JztcblxudmFyIExPT1NFID0gUisrO1xuc3JjW0xPT1NFXSA9ICdeJyArIExPT1NFUExBSU4gKyAnJCc7XG5cbnZhciBHVExUID0gUisrO1xuc3JjW0dUTFRdID0gJygoPzo8fD4pPz0/KSc7XG5cbi8vIFNvbWV0aGluZyBsaWtlIFwiMi4qXCIgb3IgXCIxLjIueFwiLlxuLy8gTm90ZSB0aGF0IFwieC54XCIgaXMgYSB2YWxpZCB4UmFuZ2UgaWRlbnRpZmVyLCBtZWFuaW5nIFwiYW55IHZlcnNpb25cIlxuLy8gT25seSB0aGUgZmlyc3QgaXRlbSBpcyBzdHJpY3RseSByZXF1aXJlZC5cbnZhciBYUkFOR0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSA9IHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICd8eHxYfFxcXFwqJztcbnZhciBYUkFOR0VJREVOVElGSUVSID0gUisrO1xuc3JjW1hSQU5HRUlERU5USUZJRVJdID0gc3JjW05VTUVSSUNJREVOVElGSUVSXSArICd8eHxYfFxcXFwqJztcblxudmFyIFhSQU5HRVBMQUlOID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOXSA9ICdbdj1cXFxcc10qKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OicgKyBzcmNbUFJFUkVMRUFTRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAnKT8pPyc7XG5cbnZhciBYUkFOR0VQTEFJTkxPT1NFID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOTE9PU0VdID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJyk/JyArXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRSA9IFIrKztcbnNyY1tYUkFOR0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFhSQU5HRUxPT1NFID0gUisrO1xuc3JjW1hSQU5HRUxPT1NFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyonICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBUaWxkZSByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwicmVhc29uYWJseSBhdCBvciBncmVhdGVyIHRoYW5cIlxudmFyIExPTkVUSUxERSA9IFIrKztcbnNyY1tMT05FVElMREVdID0gJyg/On4+PyknO1xuXG52YXIgVElMREVUUklNID0gUisrO1xuc3JjW1RJTERFVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVUSUxERV0gKyAnXFxcXHMrJztcbnJlW1RJTERFVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tUSUxERVRSSU1dLCAnZycpO1xudmFyIHRpbGRlVHJpbVJlcGxhY2UgPSAnJDF+JztcblxudmFyIFRJTERFID0gUisrO1xuc3JjW1RJTERFXSA9ICdeJyArIHNyY1tMT05FVElMREVdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBUSUxERUxPT1NFID0gUisrO1xuc3JjW1RJTERFTE9PU0VdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIENhcmV0IHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJhdCBsZWFzdCBhbmQgYmFja3dhcmRzIGNvbXBhdGlibGUgd2l0aFwiXG52YXIgTE9ORUNBUkVUID0gUisrO1xuc3JjW0xPTkVDQVJFVF0gPSAnKD86XFxcXF4pJztcblxudmFyIENBUkVUVFJJTSA9IFIrKztcbnNyY1tDQVJFVFRSSU1dID0gJyhcXFxccyopJyArIHNyY1tMT05FQ0FSRVRdICsgJ1xcXFxzKyc7XG5yZVtDQVJFVFRSSU1dID0gbmV3IFJlZ0V4cChzcmNbQ0FSRVRUUklNXSwgJ2cnKTtcbnZhciBjYXJldFRyaW1SZXBsYWNlID0gJyQxXic7XG5cbnZhciBDQVJFVCA9IFIrKztcbnNyY1tDQVJFVF0gPSAnXicgKyBzcmNbTE9ORUNBUkVUXSArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgQ0FSRVRMT09TRSA9IFIrKztcbnNyY1tDQVJFVExPT1NFXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBBIHNpbXBsZSBndC9sdC9lcSB0aGluZywgb3IganVzdCBcIlwiIHRvIGluZGljYXRlIFwiYW55IHZlcnNpb25cIlxudmFyIENPTVBBUkFUT1JMT09TRSA9IFIrKztcbnNyY1tDT01QQVJBVE9STE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgTE9PU0VQTEFJTiArICcpJHxeJCc7XG52YXIgQ09NUEFSQVRPUiA9IFIrKztcbnNyY1tDT01QQVJBVE9SXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyooJyArIEZVTExQTEFJTiArICcpJHxeJCc7XG5cblxuLy8gQW4gZXhwcmVzc2lvbiB0byBzdHJpcCBhbnkgd2hpdGVzcGFjZSBiZXR3ZWVuIHRoZSBndGx0IGFuZCB0aGUgdGhpbmdcbi8vIGl0IG1vZGlmaWVzLCBzbyB0aGF0IGA+IDEuMi4zYCA9PT4gYD4xLjIuM2BcbnZhciBDT01QQVJBVE9SVFJJTSA9IFIrKztcbnNyY1tDT01QQVJBVE9SVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0dUTFRdICtcbiAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJ3wnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJztcblxuLy8gdGhpcyBvbmUgaGFzIHRvIHVzZSB0aGUgL2cgZmxhZ1xucmVbQ09NUEFSQVRPUlRSSU1dID0gbmV3IFJlZ0V4cChzcmNbQ09NUEFSQVRPUlRSSU1dLCAnZycpO1xudmFyIGNvbXBhcmF0b3JUcmltUmVwbGFjZSA9ICckMSQyJDMnO1xuXG5cbi8vIFNvbWV0aGluZyBsaWtlIGAxLjIuMyAtIDEuMi40YFxuLy8gTm90ZSB0aGF0IHRoZXNlIGFsbCB1c2UgdGhlIGxvb3NlIGZvcm0sIGJlY2F1c2UgdGhleSdsbCBiZVxuLy8gY2hlY2tlZCBhZ2FpbnN0IGVpdGhlciB0aGUgc3RyaWN0IG9yIGxvb3NlIGNvbXBhcmF0b3IgZm9ybVxuLy8gbGF0ZXIuXG52YXIgSFlQSEVOUkFOR0UgPSBSKys7XG5zcmNbSFlQSEVOUkFOR0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICdcXFxccystXFxcXHMrJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKiQnO1xuXG52YXIgSFlQSEVOUkFOR0VMT09TRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRUxPT1NFXSA9ICdeXFxcXHMqKCcgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbi8vIFN0YXIgcmFuZ2VzIGJhc2ljYWxseSBqdXN0IGFsbG93IGFueXRoaW5nIGF0IGFsbC5cbnZhciBTVEFSID0gUisrO1xuc3JjW1NUQVJdID0gJyg8fD4pPz0/XFxcXHMqXFxcXConO1xuXG4vLyBDb21waWxlIHRvIGFjdHVhbCByZWdleHAgb2JqZWN0cy5cbi8vIEFsbCBhcmUgZmxhZy1mcmVlLCB1bmxlc3MgdGhleSB3ZXJlIGNyZWF0ZWQgYWJvdmUgd2l0aCBhIGZsYWcuXG5mb3IgKHZhciBpID0gMDsgaSA8IFI7IGkrKykge1xuICBkZWJ1ZyhpLCBzcmNbaV0pO1xuICBpZiAoIXJlW2ldKVxuICAgIHJlW2ldID0gbmV3IFJlZ0V4cChzcmNbaV0pO1xufVxuXG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5mdW5jdGlvbiBwYXJzZSh2ZXJzaW9uLCBsb29zZSkge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcilcbiAgICByZXR1cm4gdmVyc2lvbjtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKVxuICAgIHJldHVybiBudWxsO1xuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdmFyIHIgPSBsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdO1xuICBpZiAoIXIudGVzdCh2ZXJzaW9uKSlcbiAgICByZXR1cm4gbnVsbDtcblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnRzLnZhbGlkID0gdmFsaWQ7XG5mdW5jdGlvbiB2YWxpZCh2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgdiA9IHBhcnNlKHZlcnNpb24sIGxvb3NlKTtcbiAgcmV0dXJuIHYgPyB2LnZlcnNpb24gOiBudWxsO1xufVxuXG5cbmV4cG9ydHMuY2xlYW4gPSBjbGVhbjtcbmZ1bmN0aW9uIGNsZWFuKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciBzID0gcGFyc2UodmVyc2lvbi50cmltKCkucmVwbGFjZSgvXls9dl0rLywgJycpLCBsb29zZSk7XG4gIHJldHVybiBzID8gcy52ZXJzaW9uIDogbnVsbDtcbn1cblxuZXhwb3J0cy5TZW1WZXIgPSBTZW1WZXI7XG5cbmZ1bmN0aW9uIFNlbVZlcih2ZXJzaW9uLCBsb29zZSkge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgIGlmICh2ZXJzaW9uLmxvb3NlID09PSBsb29zZSlcbiAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgIGVsc2VcbiAgICAgIHZlcnNpb24gPSB2ZXJzaW9uLnZlcnNpb247XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG4gIH1cblxuICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZlcnNpb24gaXMgbG9uZ2VyIHRoYW4gJyArIE1BWF9MRU5HVEggKyAnIGNoYXJhY3RlcnMnKVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcblxuICBkZWJ1ZygnU2VtVmVyJywgdmVyc2lvbiwgbG9vc2UpO1xuICB0aGlzLmxvb3NlID0gbG9vc2U7XG4gIHZhciBtID0gdmVyc2lvbi50cmltKCkubWF0Y2gobG9vc2UgPyByZVtMT09TRV0gOiByZVtGVUxMXSk7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgVmVyc2lvbjogJyArIHZlcnNpb24pO1xuXG4gIHRoaXMucmF3ID0gdmVyc2lvbjtcblxuICAvLyB0aGVzZSBhcmUgYWN0dWFsbHkgbnVtYmVyc1xuICB0aGlzLm1ham9yID0gK21bMV07XG4gIHRoaXMubWlub3IgPSArbVsyXTtcbiAgdGhpcy5wYXRjaCA9ICttWzNdO1xuXG4gIGlmICh0aGlzLm1ham9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1ham9yIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1ham9yIHZlcnNpb24nKVxuXG4gIGlmICh0aGlzLm1pbm9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1pbm9yIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1pbm9yIHZlcnNpb24nKVxuXG4gIGlmICh0aGlzLnBhdGNoID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLnBhdGNoIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHBhdGNoIHZlcnNpb24nKVxuXG4gIC8vIG51bWJlcmlmeSBhbnkgcHJlcmVsZWFzZSBudW1lcmljIGlkc1xuICBpZiAoIW1bNF0pXG4gICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gIGVsc2VcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBtWzRdLnNwbGl0KCcuJykubWFwKGZ1bmN0aW9uKGlkKSB7XG4gICAgICBpZiAoL15bMC05XSskLy50ZXN0KGlkKSkge1xuICAgICAgICB2YXIgbnVtID0gK2lkO1xuICAgICAgICBpZiAobnVtID49IDAgJiYgbnVtIDwgTUFYX1NBRkVfSU5URUdFUilcbiAgICAgICAgICByZXR1cm4gbnVtO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlkO1xuICAgIH0pO1xuXG4gIHRoaXMuYnVpbGQgPSBtWzVdID8gbVs1XS5zcGxpdCgnLicpIDogW107XG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblNlbVZlci5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudmVyc2lvbiA9IHRoaXMubWFqb3IgKyAnLicgKyB0aGlzLm1pbm9yICsgJy4nICsgdGhpcy5wYXRjaDtcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgdGhpcy52ZXJzaW9uICs9ICctJyArIHRoaXMucHJlcmVsZWFzZS5qb2luKCcuJyk7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBkZWJ1ZygnU2VtVmVyLmNvbXBhcmUnLCB0aGlzLnZlcnNpb24sIHRoaXMubG9vc2UsIG90aGVyKTtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIHRoaXMuY29tcGFyZU1haW4ob3RoZXIpIHx8IHRoaXMuY29tcGFyZVByZShvdGhlcik7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVNYWluID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1ham9yLCBvdGhlci5tYWpvcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1pbm9yLCBvdGhlci5taW5vcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLnBhdGNoLCBvdGhlci5wYXRjaCk7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVQcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICAvLyBOT1QgaGF2aW5nIGEgcHJlcmVsZWFzZSBpcyA+IGhhdmluZyBvbmVcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAtMTtcbiAgZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIDE7XG4gIGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gMDtcblxuICB2YXIgaSA9IDA7XG4gIGRvIHtcbiAgICB2YXIgYSA9IHRoaXMucHJlcmVsZWFzZVtpXTtcbiAgICB2YXIgYiA9IG90aGVyLnByZXJlbGVhc2VbaV07XG4gICAgZGVidWcoJ3ByZXJlbGVhc2UgY29tcGFyZScsIGksIGEsIGIpO1xuICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDA7XG4gICAgZWxzZSBpZiAoYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIC0xO1xuICAgIGVsc2UgaWYgKGEgPT09IGIpXG4gICAgICBjb250aW51ZTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpO1xuICB9IHdoaWxlICgrK2kpO1xufTtcblxuLy8gcHJlbWlub3Igd2lsbCBidW1wIHRoZSB2ZXJzaW9uIHVwIHRvIHRoZSBuZXh0IG1pbm9yIHJlbGVhc2UsIGFuZCBpbW1lZGlhdGVseVxuLy8gZG93biB0byBwcmUtcmVsZWFzZS4gcHJlbWFqb3IgYW5kIHByZXBhdGNoIHdvcmsgdGhlIHNhbWUgd2F5LlxuU2VtVmVyLnByb3RvdHlwZS5pbmMgPSBmdW5jdGlvbihyZWxlYXNlLCBpZGVudGlmaWVyKSB7XG4gIHN3aXRjaCAocmVsZWFzZSkge1xuICAgIGNhc2UgJ3ByZW1ham9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yID0gMDtcbiAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZW1pbm9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIGFscmVhZHkgYSBwcmVyZWxlYXNlLCBpdCB3aWxsIGJ1bXAgdG8gdGhlIG5leHQgdmVyc2lvblxuICAgICAgLy8gZHJvcCBhbnkgcHJlcmVsZWFzZXMgdGhhdCBtaWdodCBhbHJlYWR5IGV4aXN0LCBzaW5jZSB0aGV5IGFyZSBub3RcbiAgICAgIC8vIHJlbGV2YW50IGF0IHRoaXMgcG9pbnQuXG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgLy8gSWYgdGhlIGlucHV0IGlzIGEgbm9uLXByZXJlbGVhc2UgdmVyc2lvbiwgdGhpcyBhY3RzIHRoZSBzYW1lIGFzXG4gICAgLy8gcHJlcGF0Y2guXG4gICAgY2FzZSAncHJlcmVsZWFzZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcik7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ21ham9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWFqb3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtYWpvciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtYWpvci5cbiAgICAgIC8vIDEuMC4wLTUgYnVtcHMgdG8gMS4wLjBcbiAgICAgIC8vIDEuMS4wIGJ1bXBzIHRvIDIuMC4wXG4gICAgICBpZiAodGhpcy5taW5vciAhPT0gMCB8fCB0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMubWlub3IgPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21pbm9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWlub3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtaW5vciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtaW5vci5cbiAgICAgIC8vIDEuMi4wLTUgYnVtcHMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4xIGJ1bXBzIHRvIDEuMy4wXG4gICAgICBpZiAodGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGF0Y2gnOlxuICAgICAgLy8gSWYgdGhpcyBpcyBub3QgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uLCBpdCB3aWxsIGluY3JlbWVudCB0aGUgcGF0Y2guXG4gICAgICAvLyBJZiBpdCBpcyBhIHByZS1yZWxlYXNlIGl0IHdpbGwgYnVtcCB1cCB0byB0aGUgc2FtZSBwYXRjaCB2ZXJzaW9uLlxuICAgICAgLy8gMS4yLjAtNSBwYXRjaGVzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMCBwYXRjaGVzIHRvIDEuMi4xXG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5wYXRjaCsrO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICAvLyBUaGlzIHByb2JhYmx5IHNob3VsZG4ndCBiZSB1c2VkIHB1YmxpY2x5LlxuICAgIC8vIDEuMC4wIFwicHJlXCIgd291bGQgYmVjb21lIDEuMC4wLTAgd2hpY2ggaXMgdGhlIHdyb25nIGRpcmVjdGlvbi5cbiAgICBjYXNlICdwcmUnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFswXTtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgaSA9IHRoaXMucHJlcmVsZWFzZS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVyZWxlYXNlW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlW2ldKys7XG4gICAgICAgICAgICBpID0gLTI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpID09PSAtMSkgLy8gZGlkbid0IGluY3JlbWVudCBhbnl0aGluZ1xuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZS5wdXNoKDApO1xuICAgICAgfVxuICAgICAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICAgICAgLy8gMS4yLjAtYmV0YS4xIGJ1bXBzIHRvIDEuMi4wLWJldGEuMixcbiAgICAgICAgLy8gMS4yLjAtYmV0YS5mb29ibHogb3IgMS4yLjAtYmV0YSBidW1wcyB0byAxLjIuMC1iZXRhLjBcbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZVswXSA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgIGlmIChpc05hTih0aGlzLnByZXJlbGVhc2VbMV0pKVxuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF07XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW5jcmVtZW50IGFyZ3VtZW50OiAnICsgcmVsZWFzZSk7XG4gIH1cbiAgdGhpcy5mb3JtYXQoKTtcbiAgdGhpcy5yYXcgPSB0aGlzLnZlcnNpb247XG4gIHJldHVybiB0aGlzO1xufTtcblxuZXhwb3J0cy5pbmMgPSBpbmM7XG5mdW5jdGlvbiBpbmModmVyc2lvbiwgcmVsZWFzZSwgbG9vc2UsIGlkZW50aWZpZXIpIHtcbiAgaWYgKHR5cGVvZihsb29zZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgaWRlbnRpZmllciA9IGxvb3NlO1xuICAgIGxvb3NlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSkuaW5jKHJlbGVhc2UsIGlkZW50aWZpZXIpLnZlcnNpb247XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy5kaWZmID0gZGlmZjtcbmZ1bmN0aW9uIGRpZmYodmVyc2lvbjEsIHZlcnNpb24yKSB7XG4gIGlmIChlcSh2ZXJzaW9uMSwgdmVyc2lvbjIpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHYxID0gcGFyc2UodmVyc2lvbjEpO1xuICAgIHZhciB2MiA9IHBhcnNlKHZlcnNpb24yKTtcbiAgICBpZiAodjEucHJlcmVsZWFzZS5sZW5ndGggfHwgdjIucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuICdwcmUnK2tleTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAncHJlcmVsZWFzZSc7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLmNvbXBhcmVJZGVudGlmaWVycyA9IGNvbXBhcmVJZGVudGlmaWVycztcblxudmFyIG51bWVyaWMgPSAvXlswLTldKyQvO1xuZnVuY3Rpb24gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpIHtcbiAgdmFyIGFudW0gPSBudW1lcmljLnRlc3QoYSk7XG4gIHZhciBibnVtID0gbnVtZXJpYy50ZXN0KGIpO1xuXG4gIGlmIChhbnVtICYmIGJudW0pIHtcbiAgICBhID0gK2E7XG4gICAgYiA9ICtiO1xuICB9XG5cbiAgcmV0dXJuIChhbnVtICYmICFibnVtKSA/IC0xIDpcbiAgICAgICAgIChibnVtICYmICFhbnVtKSA/IDEgOlxuICAgICAgICAgYSA8IGIgPyAtMSA6XG4gICAgICAgICBhID4gYiA/IDEgOlxuICAgICAgICAgMDtcbn1cblxuZXhwb3J0cy5yY29tcGFyZUlkZW50aWZpZXJzID0gcmNvbXBhcmVJZGVudGlmaWVycztcbmZ1bmN0aW9uIHJjb21wYXJlSWRlbnRpZmllcnMoYSwgYikge1xuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGIsIGEpO1xufVxuXG5leHBvcnRzLm1ham9yID0gbWFqb3I7XG5mdW5jdGlvbiBtYWpvcihhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWFqb3I7XG59XG5cbmV4cG9ydHMubWlub3IgPSBtaW5vcjtcbmZ1bmN0aW9uIG1pbm9yKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5taW5vcjtcbn1cblxuZXhwb3J0cy5wYXRjaCA9IHBhdGNoO1xuZnVuY3Rpb24gcGF0Y2goYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLnBhdGNoO1xufVxuXG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlO1xuZnVuY3Rpb24gY29tcGFyZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkuY29tcGFyZShiKTtcbn1cblxuZXhwb3J0cy5jb21wYXJlTG9vc2UgPSBjb21wYXJlTG9vc2U7XG5mdW5jdGlvbiBjb21wYXJlTG9vc2UoYSwgYikge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCB0cnVlKTtcbn1cblxuZXhwb3J0cy5yY29tcGFyZSA9IHJjb21wYXJlO1xuZnVuY3Rpb24gcmNvbXBhcmUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYiwgYSwgbG9vc2UpO1xufVxuXG5leHBvcnRzLnNvcnQgPSBzb3J0O1xuZnVuY3Rpb24gc29ydChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5jb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMucnNvcnQgPSByc29ydDtcbmZ1bmN0aW9uIHJzb3J0KGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLnJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMuZ3QgPSBndDtcbmZ1bmN0aW9uIGd0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+IDA7XG59XG5cbmV4cG9ydHMubHQgPSBsdDtcbmZ1bmN0aW9uIGx0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8IDA7XG59XG5cbmV4cG9ydHMuZXEgPSBlcTtcbmZ1bmN0aW9uIGVxKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA9PT0gMDtcbn1cblxuZXhwb3J0cy5uZXEgPSBuZXE7XG5mdW5jdGlvbiBuZXEoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpICE9PSAwO1xufVxuXG5leHBvcnRzLmd0ZSA9IGd0ZTtcbmZ1bmN0aW9uIGd0ZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPj0gMDtcbn1cblxuZXhwb3J0cy5sdGUgPSBsdGU7XG5mdW5jdGlvbiBsdGUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDw9IDA7XG59XG5cbmV4cG9ydHMuY21wID0gY21wO1xuZnVuY3Rpb24gY21wKGEsIG9wLCBiLCBsb29zZSkge1xuICB2YXIgcmV0O1xuICBzd2l0Y2ggKG9wKSB7XG4gICAgY2FzZSAnPT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIGEgPSBhLnZlcnNpb247XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSBiID0gYi52ZXJzaW9uO1xuICAgICAgcmV0ID0gYSA9PT0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyE9PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSBhID0gYS52ZXJzaW9uO1xuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JykgYiA9IGIudmVyc2lvbjtcbiAgICAgIHJldCA9IGEgIT09IGI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcnOiBjYXNlICc9JzogY2FzZSAnPT0nOiByZXQgPSBlcShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJyE9JzogcmV0ID0gbmVxKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPic6IHJldCA9IGd0KGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPj0nOiByZXQgPSBndGUoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8JzogcmV0ID0gbHQoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8PSc6IHJldCA9IGx0ZShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgb3BlcmF0b3I6ICcgKyBvcCk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0cy5Db21wYXJhdG9yID0gQ29tcGFyYXRvcjtcbmZ1bmN0aW9uIENvbXBhcmF0b3IoY29tcCwgbG9vc2UpIHtcbiAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgaWYgKGNvbXAubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIGNvbXA7XG4gICAgZWxzZVxuICAgICAgY29tcCA9IGNvbXAudmFsdWU7XG4gIH1cblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29tcGFyYXRvcikpXG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcblxuICBkZWJ1ZygnY29tcGFyYXRvcicsIGNvbXAsIGxvb3NlKTtcbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuICB0aGlzLnBhcnNlKGNvbXApO1xuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKVxuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgZWxzZVxuICAgIHRoaXMudmFsdWUgPSB0aGlzLm9wZXJhdG9yICsgdGhpcy5zZW12ZXIudmVyc2lvbjtcblxuICBkZWJ1ZygnY29tcCcsIHRoaXMpO1xufVxuXG52YXIgQU5ZID0ge307XG5Db21wYXJhdG9yLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKGNvbXApIHtcbiAgdmFyIHIgPSB0aGlzLmxvb3NlID8gcmVbQ09NUEFSQVRPUkxPT1NFXSA6IHJlW0NPTVBBUkFUT1JdO1xuICB2YXIgbSA9IGNvbXAubWF0Y2gocik7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY29tcGFyYXRvcjogJyArIGNvbXApO1xuXG4gIHRoaXMub3BlcmF0b3IgPSBtWzFdO1xuICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJz0nKVxuICAgIHRoaXMub3BlcmF0b3IgPSAnJztcblxuICAvLyBpZiBpdCBsaXRlcmFsbHkgaXMganVzdCAnPicgb3IgJycgdGhlbiBhbGxvdyBhbnl0aGluZy5cbiAgaWYgKCFtWzJdKVxuICAgIHRoaXMuc2VtdmVyID0gQU5ZO1xuICBlbHNlXG4gICAgdGhpcy5zZW12ZXIgPSBuZXcgU2VtVmVyKG1bMl0sIHRoaXMubG9vc2UpO1xufTtcblxuQ29tcGFyYXRvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24odmVyc2lvbikge1xuICBkZWJ1ZygnQ29tcGFyYXRvci50ZXN0JywgdmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpXG4gICAgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY21wKHZlcnNpb24sIHRoaXMub3BlcmF0b3IsIHRoaXMuc2VtdmVyLCB0aGlzLmxvb3NlKTtcbn07XG5cblxuZXhwb3J0cy5SYW5nZSA9IFJhbmdlO1xuZnVuY3Rpb24gUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIGlmICgocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkgJiYgcmFuZ2UubG9vc2UgPT09IGxvb3NlKVxuICAgIHJldHVybiByYW5nZTtcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmFuZ2UpKVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB0aGlzLmxvb3NlID0gbG9vc2U7XG5cbiAgLy8gRmlyc3QsIHNwbGl0IGJhc2VkIG9uIGJvb2xlYW4gb3IgfHxcbiAgdGhpcy5yYXcgPSByYW5nZTtcbiAgdGhpcy5zZXQgPSByYW5nZS5zcGxpdCgvXFxzKlxcfFxcfFxccyovKS5tYXAoZnVuY3Rpb24ocmFuZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVJhbmdlKHJhbmdlLnRyaW0oKSk7XG4gIH0sIHRoaXMpLmZpbHRlcihmdW5jdGlvbihjKSB7XG4gICAgLy8gdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgcmVsZXZhbnQgZm9yIHdoYXRldmVyIHJlYXNvblxuICAgIHJldHVybiBjLmxlbmd0aDtcbiAgfSk7XG5cbiAgaWYgKCF0aGlzLnNldC5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFNlbVZlciBSYW5nZTogJyArIHJhbmdlKTtcbiAgfVxuXG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblJhbmdlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yYW5nZSA9IHRoaXMuc2V0Lm1hcChmdW5jdGlvbihjb21wcykge1xuICAgIHJldHVybiBjb21wcy5qb2luKCcgJykudHJpbSgpO1xuICB9KS5qb2luKCd8fCcpLnRyaW0oKTtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUucGFyc2VSYW5nZSA9IGZ1bmN0aW9uKHJhbmdlKSB7XG4gIHZhciBsb29zZSA9IHRoaXMubG9vc2U7XG4gIHJhbmdlID0gcmFuZ2UudHJpbSgpO1xuICBkZWJ1ZygncmFuZ2UnLCByYW5nZSwgbG9vc2UpO1xuICAvLyBgMS4yLjMgLSAxLjIuNGAgPT4gYD49MS4yLjMgPD0xLjIuNGBcbiAgdmFyIGhyID0gbG9vc2UgPyByZVtIWVBIRU5SQU5HRUxPT1NFXSA6IHJlW0hZUEhFTlJBTkdFXTtcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKGhyLCBoeXBoZW5SZXBsYWNlKTtcbiAgZGVidWcoJ2h5cGhlbiByZXBsYWNlJywgcmFuZ2UpO1xuICAvLyBgPiAxLjIuMyA8IDEuMi41YCA9PiBgPjEuMi4zIDwxLjIuNWBcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NPTVBBUkFUT1JUUklNXSwgY29tcGFyYXRvclRyaW1SZXBsYWNlKTtcbiAgZGVidWcoJ2NvbXBhcmF0b3IgdHJpbScsIHJhbmdlLCByZVtDT01QQVJBVE9SVFJJTV0pO1xuXG4gIC8vIGB+IDEuMi4zYCA9PiBgfjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbVElMREVUUklNXSwgdGlsZGVUcmltUmVwbGFjZSk7XG5cbiAgLy8gYF4gMS4yLjNgID0+IGBeMS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtDQVJFVFRSSU1dLCBjYXJldFRyaW1SZXBsYWNlKTtcblxuICAvLyBub3JtYWxpemUgc3BhY2VzXG4gIHJhbmdlID0gcmFuZ2Uuc3BsaXQoL1xccysvKS5qb2luKCcgJyk7XG5cbiAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgdHJpbW1lZCBhbmRcbiAgLy8gcmVhZHkgdG8gYmUgc3BsaXQgaW50byBjb21wYXJhdG9ycy5cblxuICB2YXIgY29tcFJlID0gbG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl07XG4gIHZhciBzZXQgPSByYW5nZS5zcGxpdCgnICcpLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKS5zcGxpdCgvXFxzKy8pO1xuICBpZiAodGhpcy5sb29zZSkge1xuICAgIC8vIGluIGxvb3NlIG1vZGUsIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHZhbGlkIGNvbXBhcmF0b3JzXG4gICAgc2V0ID0gc2V0LmZpbHRlcihmdW5jdGlvbihjb21wKSB7XG4gICAgICByZXR1cm4gISFjb21wLm1hdGNoKGNvbXBSZSk7XG4gICAgfSk7XG4gIH1cbiAgc2V0ID0gc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNldDtcbn07XG5cbi8vIE1vc3RseSBqdXN0IGZvciB0ZXN0aW5nIGFuZCBsZWdhY3kgQVBJIHJlYXNvbnNcbmV4cG9ydHMudG9Db21wYXJhdG9ycyA9IHRvQ29tcGFyYXRvcnM7XG5mdW5jdGlvbiB0b0NvbXBhcmF0b3JzKHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSkuc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIGNvbXAubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgIHJldHVybiBjLnZhbHVlO1xuICAgIH0pLmpvaW4oJyAnKS50cmltKCkuc3BsaXQoJyAnKTtcbiAgfSk7XG59XG5cbi8vIGNvbXByaXNlZCBvZiB4cmFuZ2VzLCB0aWxkZXMsIHN0YXJzLCBhbmQgZ3RsdCdzIGF0IHRoaXMgcG9pbnQuXG4vLyBhbHJlYWR5IHJlcGxhY2VkIHRoZSBoeXBoZW4gcmFuZ2VzXG4vLyB0dXJuIGludG8gYSBzZXQgb2YgSlVTVCBjb21wYXJhdG9ycy5cbmZ1bmN0aW9uIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSkge1xuICBkZWJ1ZygnY29tcCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZUNhcmV0cyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVRpbGRlcyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCd0aWxkZXMnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VYUmFuZ2VzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3hyYW5nZScsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVN0YXJzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3N0YXJzJywgY29tcCk7XG4gIHJldHVybiBjb21wO1xufVxuXG5mdW5jdGlvbiBpc1goaWQpIHtcbiAgcmV0dXJuICFpZCB8fCBpZC50b0xvd2VyQ2FzZSgpID09PSAneCcgfHwgaWQgPT09ICcqJztcbn1cblxuLy8gfiwgfj4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyB+MiwgfjIueCwgfjIueC54LCB+PjIsIH4+Mi54IH4+Mi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyB+Mi4wLCB+Mi4wLngsIH4+Mi4wLCB+PjIuMC54IC0tPiA+PTIuMC4wIDwyLjEuMFxuLy8gfjEuMiwgfjEuMi54LCB+PjEuMiwgfj4xLjIueCAtLT4gPj0xLjIuMCA8MS4zLjBcbi8vIH4xLjIuMywgfj4xLjIuMyAtLT4gPj0xLjIuMyA8MS4zLjBcbi8vIH4xLjIuMCwgfj4xLjIuMCAtLT4gPj0xLjIuMCA8MS4zLjBcbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZXMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVRpbGRlKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVGlsZGUoY29tcCwgbG9vc2UpIHtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW1RJTERFTE9PU0VdIDogcmVbVElMREVdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3RpbGRlJywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSlcbiAgICAgIC8vIH4xLjIgPT0gPj0xLjIuMCA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlVGlsZGUgcHInLCBwcik7XG4gICAgICBpZiAocHIuY2hhckF0KDApICE9PSAnLScpXG4gICAgICAgIHByID0gJy0nICsgcHI7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfSBlbHNlXG4gICAgICAvLyB+MS4yLjMgPT0gPj0xLjIuMyA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG5cbiAgICBkZWJ1ZygndGlsZGUgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuLy8gXiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIF4yLCBeMi54LCBeMi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMi4wLCBeMi4wLnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMS4yLCBeMS4yLnggLS0+ID49MS4yLjAgPDIuMC4wXG4vLyBeMS4yLjMgLS0+ID49MS4yLjMgPDIuMC4wXG4vLyBeMS4yLjAgLS0+ID49MS4yLjAgPDIuMC4wXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXRzKGNvbXAsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VDYXJldChjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0KGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXAsIGxvb3NlKTtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW0NBUkVUTE9PU0VdIDogcmVbQ0FSRVRdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ2NhcmV0JywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSkge1xuICAgICAgaWYgKE0gPT09ICcwJylcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VDYXJldCBwcicsIHByKTtcbiAgICAgIGlmIChwci5jaGFyQXQoMCkgIT09ICctJylcbiAgICAgICAgcHIgPSAnLScgKyBwcjtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJylcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAnIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdubyBwcicpO1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9XG5cbiAgICBkZWJ1ZygnY2FyZXQgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZXMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VYUmFuZ2VzJywgY29tcCwgbG9vc2UpO1xuICByZXR1cm4gY29tcC5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpIHtcbiAgY29tcCA9IGNvbXAudHJpbSgpO1xuICB2YXIgciA9IGxvb3NlID8gcmVbWFJBTkdFTE9PU0VdIDogcmVbWFJBTkdFXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihyZXQsIGd0bHQsIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3hSYW5nZScsIGNvbXAsIHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpO1xuICAgIHZhciB4TSA9IGlzWChNKTtcbiAgICB2YXIgeG0gPSB4TSB8fCBpc1gobSk7XG4gICAgdmFyIHhwID0geG0gfHwgaXNYKHApO1xuICAgIHZhciBhbnlYID0geHA7XG5cbiAgICBpZiAoZ3RsdCA9PT0gJz0nICYmIGFueVgpXG4gICAgICBndGx0ID0gJyc7XG5cbiAgICBpZiAoeE0pIHtcbiAgICAgIGlmIChndGx0ID09PSAnPicgfHwgZ3RsdCA9PT0gJzwnKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgYWxsb3dlZFxuICAgICAgICByZXQgPSAnPDAuMC4wJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgZm9yYmlkZGVuXG4gICAgICAgIHJldCA9ICcqJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGd0bHQgJiYgYW55WCkge1xuICAgICAgLy8gcmVwbGFjZSBYIHdpdGggMFxuICAgICAgaWYgKHhtKVxuICAgICAgICBtID0gMDtcbiAgICAgIGlmICh4cClcbiAgICAgICAgcCA9IDA7XG5cbiAgICAgIGlmIChndGx0ID09PSAnPicpIHtcbiAgICAgICAgLy8gPjEgPT4gPj0yLjAuMFxuICAgICAgICAvLyA+MS4yID0+ID49MS4zLjBcbiAgICAgICAgLy8gPjEuMi4zID0+ID49IDEuMi40XG4gICAgICAgIGd0bHQgPSAnPj0nO1xuICAgICAgICBpZiAoeG0pIHtcbiAgICAgICAgICBNID0gK00gKyAxO1xuICAgICAgICAgIG0gPSAwO1xuICAgICAgICAgIHAgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICAgICAgbSA9ICttICsgMTtcbiAgICAgICAgICBwID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChndGx0ID09PSAnPD0nKSB7XG4gICAgICAgIC8vIDw9MC43LnggaXMgYWN0dWFsbHkgPDAuOC4wLCBzaW5jZSBhbnkgMC43Lnggc2hvdWxkXG4gICAgICAgIC8vIHBhc3MuICBTaW1pbGFybHksIDw9Ny54IGlzIGFjdHVhbGx5IDw4LjAuMCwgZXRjLlxuICAgICAgICBndGx0ID0gJzwnO1xuICAgICAgICBpZiAoeG0pXG4gICAgICAgICAgTSA9ICtNICsgMTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG0gPSArbSArIDE7XG4gICAgICB9XG5cbiAgICAgIHJldCA9IGd0bHQgKyBNICsgJy4nICsgbSArICcuJyArIHA7XG4gICAgfSBlbHNlIGlmICh4bSkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfVxuXG4gICAgZGVidWcoJ3hSYW5nZSByZXR1cm4nLCByZXQpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbi8vIEJlY2F1c2UgKiBpcyBBTkQtZWQgd2l0aCBldmVyeXRoaW5nIGVsc2UgaW4gdGhlIGNvbXBhcmF0b3IsXG4vLyBhbmQgJycgbWVhbnMgXCJhbnkgdmVyc2lvblwiLCBqdXN0IHJlbW92ZSB0aGUgKnMgZW50aXJlbHkuXG5mdW5jdGlvbiByZXBsYWNlU3RhcnMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VTdGFycycsIGNvbXAsIGxvb3NlKTtcbiAgLy8gTG9vc2VuZXNzIGlzIGlnbm9yZWQgaGVyZS4gIHN0YXIgaXMgYWx3YXlzIGFzIGxvb3NlIGFzIGl0IGdldHMhXG4gIHJldHVybiBjb21wLnRyaW0oKS5yZXBsYWNlKHJlW1NUQVJdLCAnJyk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgcGFzc2VkIHRvIHN0cmluZy5yZXBsYWNlKHJlW0hZUEhFTlJBTkdFXSlcbi8vIE0sIG0sIHBhdGNoLCBwcmVyZWxlYXNlLCBidWlsZFxuLy8gMS4yIC0gMy40LjUgPT4gPj0xLjIuMCA8PTMuNC41XG4vLyAxLjIuMyAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMCBBbnkgMy40Lnggd2lsbCBkb1xuLy8gMS4yIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wXG5mdW5jdGlvbiBoeXBoZW5SZXBsYWNlKCQwLFxuICAgICAgICAgICAgICAgICAgICAgICBmcm9tLCBmTSwgZm0sIGZwLCBmcHIsIGZiLFxuICAgICAgICAgICAgICAgICAgICAgICB0bywgdE0sIHRtLCB0cCwgdHByLCB0Yikge1xuXG4gIGlmIChpc1goZk0pKVxuICAgIGZyb20gPSAnJztcbiAgZWxzZSBpZiAoaXNYKGZtKSlcbiAgICBmcm9tID0gJz49JyArIGZNICsgJy4wLjAnO1xuICBlbHNlIGlmIChpc1goZnApKVxuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLicgKyBmbSArICcuMCc7XG4gIGVsc2VcbiAgICBmcm9tID0gJz49JyArIGZyb207XG5cbiAgaWYgKGlzWCh0TSkpXG4gICAgdG8gPSAnJztcbiAgZWxzZSBpZiAoaXNYKHRtKSlcbiAgICB0byA9ICc8JyArICgrdE0gKyAxKSArICcuMC4wJztcbiAgZWxzZSBpZiAoaXNYKHRwKSlcbiAgICB0byA9ICc8JyArIHRNICsgJy4nICsgKCt0bSArIDEpICsgJy4wJztcbiAgZWxzZSBpZiAodHByKVxuICAgIHRvID0gJzw9JyArIHRNICsgJy4nICsgdG0gKyAnLicgKyB0cCArICctJyArIHRwcjtcbiAgZWxzZVxuICAgIHRvID0gJzw9JyArIHRvO1xuXG4gIHJldHVybiAoZnJvbSArICcgJyArIHRvKS50cmltKCk7XG59XG5cblxuLy8gaWYgQU5ZIG9mIHRoZSBzZXRzIG1hdGNoIEFMTCBvZiBpdHMgY29tcGFyYXRvcnMsIHRoZW4gcGFzc1xuUmFuZ2UucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gIGlmICghdmVyc2lvbilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRlc3RTZXQodGhpcy5zZXRbaV0sIHZlcnNpb24pKVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZnVuY3Rpb24gdGVzdFNldChzZXQsIHZlcnNpb24pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXNldFtpXS50ZXN0KHZlcnNpb24pKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHZlcnNpb24ucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAvLyBGaW5kIHRoZSBzZXQgb2YgdmVyc2lvbnMgdGhhdCBhcmUgYWxsb3dlZCB0byBoYXZlIHByZXJlbGVhc2VzXG4gICAgLy8gRm9yIGV4YW1wbGUsIF4xLjIuMy1wci4xIGRlc3VnYXJzIHRvID49MS4yLjMtcHIuMSA8Mi4wLjBcbiAgICAvLyBUaGF0IHNob3VsZCBhbGxvdyBgMS4yLjMtcHIuMmAgdG8gcGFzcy5cbiAgICAvLyBIb3dldmVyLCBgMS4yLjQtYWxwaGEubm90cmVhZHlgIHNob3VsZCBOT1QgYmUgYWxsb3dlZCxcbiAgICAvLyBldmVuIHRob3VnaCBpdCdzIHdpdGhpbiB0aGUgcmFuZ2Ugc2V0IGJ5IHRoZSBjb21wYXJhdG9ycy5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoc2V0W2ldLnNlbXZlcik7XG4gICAgICBpZiAoc2V0W2ldLnNlbXZlciA9PT0gQU5ZKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgaWYgKHNldFtpXS5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBhbGxvd2VkID0gc2V0W2ldLnNlbXZlcjtcbiAgICAgICAgaWYgKGFsbG93ZWQubWFqb3IgPT09IHZlcnNpb24ubWFqb3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQubWlub3IgPT09IHZlcnNpb24ubWlub3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQucGF0Y2ggPT09IHZlcnNpb24ucGF0Y2gpXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVmVyc2lvbiBoYXMgYSAtcHJlLCBidXQgaXQncyBub3Qgb25lIG9mIHRoZSBvbmVzIHdlIGxpa2UuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMuc2F0aXNmaWVzID0gc2F0aXNmaWVzO1xuZnVuY3Rpb24gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICB0cnkge1xuICAgIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiByYW5nZS50ZXN0KHZlcnNpb24pO1xufVxuXG5leHBvcnRzLm1heFNhdGlzZnlpbmcgPSBtYXhTYXRpc2Z5aW5nO1xuZnVuY3Rpb24gbWF4U2F0aXNmeWluZyh2ZXJzaW9ucywgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiB2ZXJzaW9ucy5maWx0ZXIoZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKTtcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIHJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSlbMF0gfHwgbnVsbDtcbn1cblxuZXhwb3J0cy5taW5TYXRpc2Z5aW5nID0gbWluU2F0aXNmeWluZztcbmZ1bmN0aW9uIG1pblNhdGlzZnlpbmcodmVyc2lvbnMsIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gdmVyc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSlbMF0gfHwgbnVsbDtcbn1cblxuZXhwb3J0cy52YWxpZFJhbmdlID0gdmFsaWRSYW5nZTtcbmZ1bmN0aW9uIHZhbGlkUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIHRyeSB7XG4gICAgLy8gUmV0dXJuICcqJyBpbnN0ZWFkIG9mICcnIHNvIHRoYXQgdHJ1dGhpbmVzcyB3b3Jrcy5cbiAgICAvLyBUaGlzIHdpbGwgdGhyb3cgaWYgaXQncyBpbnZhbGlkIGFueXdheVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKS5yYW5nZSB8fCAnKic7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgbGVzcyB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlXG5leHBvcnRzLmx0ciA9IGx0cjtcbmZ1bmN0aW9uIGx0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc8JywgbG9vc2UpO1xufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2UuXG5leHBvcnRzLmd0ciA9IGd0cjtcbmZ1bmN0aW9uIGd0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc+JywgbG9vc2UpO1xufVxuXG5leHBvcnRzLm91dHNpZGUgPSBvdXRzaWRlO1xuZnVuY3Rpb24gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgaGlsbywgbG9vc2UpIHtcbiAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuXG4gIHZhciBndGZuLCBsdGVmbiwgbHRmbiwgY29tcCwgZWNvbXA7XG4gIHN3aXRjaCAoaGlsbykge1xuICAgIGNhc2UgJz4nOlxuICAgICAgZ3RmbiA9IGd0O1xuICAgICAgbHRlZm4gPSBsdGU7XG4gICAgICBsdGZuID0gbHQ7XG4gICAgICBjb21wID0gJz4nO1xuICAgICAgZWNvbXAgPSAnPj0nO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnPCc6XG4gICAgICBndGZuID0gbHQ7XG4gICAgICBsdGVmbiA9IGd0ZTtcbiAgICAgIGx0Zm4gPSBndDtcbiAgICAgIGNvbXAgPSAnPCc7XG4gICAgICBlY29tcCA9ICc8PSc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBwcm92aWRlIGEgaGlsbyB2YWwgb2YgXCI8XCIgb3IgXCI+XCInKTtcbiAgfVxuXG4gIC8vIElmIGl0IHNhdGlzaWZlcyB0aGUgcmFuZ2UgaXQgaXMgbm90IG91dHNpZGVcbiAgaWYgKHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRnJvbSBub3cgb24sIHZhcmlhYmxlIHRlcm1zIGFyZSBhcyBpZiB3ZSdyZSBpbiBcImd0clwiIG1vZGUuXG4gIC8vIGJ1dCBub3RlIHRoYXQgZXZlcnl0aGluZyBpcyBmbGlwcGVkIGZvciB0aGUgXCJsdHJcIiBmdW5jdGlvbi5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJhbmdlLnNldC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBjb21wYXJhdG9ycyA9IHJhbmdlLnNldFtpXTtcblxuICAgIHZhciBoaWdoID0gbnVsbDtcbiAgICB2YXIgbG93ID0gbnVsbDtcblxuICAgIGNvbXBhcmF0b3JzLmZvckVhY2goZnVuY3Rpb24oY29tcGFyYXRvcikge1xuICAgICAgaWYgKGNvbXBhcmF0b3Iuc2VtdmVyID09PSBBTlkpIHtcbiAgICAgICAgY29tcGFyYXRvciA9IG5ldyBDb21wYXJhdG9yKCc+PTAuMC4wJylcbiAgICAgIH1cbiAgICAgIGhpZ2ggPSBoaWdoIHx8IGNvbXBhcmF0b3I7XG4gICAgICBsb3cgPSBsb3cgfHwgY29tcGFyYXRvcjtcbiAgICAgIGlmIChndGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBoaWdoLnNlbXZlciwgbG9vc2UpKSB7XG4gICAgICAgIGhpZ2ggPSBjb21wYXJhdG9yO1xuICAgICAgfSBlbHNlIGlmIChsdGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBsb3cuc2VtdmVyLCBsb29zZSkpIHtcbiAgICAgICAgbG93ID0gY29tcGFyYXRvcjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIElmIHRoZSBlZGdlIHZlcnNpb24gY29tcGFyYXRvciBoYXMgYSBvcGVyYXRvciB0aGVuIG91ciB2ZXJzaW9uXG4gICAgLy8gaXNuJ3Qgb3V0c2lkZSBpdFxuICAgIGlmIChoaWdoLm9wZXJhdG9yID09PSBjb21wIHx8IGhpZ2gub3BlcmF0b3IgPT09IGVjb21wKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGxvd2VzdCB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGFuIG9wZXJhdG9yIGFuZCBvdXIgdmVyc2lvblxuICAgIC8vIGlzIGxlc3MgdGhhbiBpdCB0aGVuIGl0IGlzbid0IGhpZ2hlciB0aGFuIHRoZSByYW5nZVxuICAgIGlmICgoIWxvdy5vcGVyYXRvciB8fCBsb3cub3BlcmF0b3IgPT09IGNvbXApICYmXG4gICAgICAgIGx0ZWZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChsb3cub3BlcmF0b3IgPT09IGVjb21wICYmIGx0Zm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMucHJlcmVsZWFzZSA9IHByZXJlbGVhc2U7XG5mdW5jdGlvbiBwcmVyZWxlYXNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciBwYXJzZWQgPSBwYXJzZSh2ZXJzaW9uLCBsb29zZSk7XG4gIHJldHVybiAocGFyc2VkICYmIHBhcnNlZC5wcmVyZWxlYXNlLmxlbmd0aCkgPyBwYXJzZWQucHJlcmVsZWFzZSA6IG51bGw7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvfi9zZW12ZXIvc2VtdmVyLmpzXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqICh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBWaWV3TW9kZWwgQ29uc3RydWN0b3IgJiBkZWZpbml0aW9uXG4gKi9cblxuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCB7XG4gIGluaXRTdGF0ZVxufSBmcm9tICcuLi9jb3JlL3N0YXRlJ1xuaW1wb3J0IHtcbiAgYnVpbGRcbn0gZnJvbSAnLi9jb21waWxlcidcbmltcG9ydCB7XG4gIGluaXRFdmVudHMsXG4gIG1peGluRXZlbnRzXG59IGZyb20gJy4vZXZlbnRzJ1xuXG4vKipcbiAqIFZpZXdNb2RlbCBjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAgICBjb21wb25lbnQgb3B0aW9uc1xuICogQHBhcmFtIHtvYmplY3R9IHBhcmVudFZtICAgd2hpY2ggY29udGFpbnMgX2FwcFxuICogQHBhcmFtIHtvYmplY3R9IHBhcmVudEVsICAgcm9vdCBlbGVtZW50IG9yIGZyYWcgYmxvY2tcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXJnZWREYXRhIGV4dGVybmFsIGRhdGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBleHRlcm5hbEV2ZW50cyBleHRlcm5hbCBldmVudHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVm0gKFxuICB0eXBlLFxuICBvcHRpb25zLFxuICBwYXJlbnRWbSxcbiAgcGFyZW50RWwsXG4gIG1lcmdlZERhdGEsXG4gIGV4dGVybmFsRXZlbnRzXG4pIHtcbiAgdGhpcy5fcGFyZW50ID0gcGFyZW50Vm0uX3JlYWxQYXJlbnQgPyBwYXJlbnRWbS5fcmVhbFBhcmVudCA6IHBhcmVudFZtXG4gIHRoaXMuX2FwcCA9IHBhcmVudFZtLl9hcHBcbiAgcGFyZW50Vm0uX2NoaWxkcmVuVm1zICYmIHBhcmVudFZtLl9jaGlsZHJlblZtcy5wdXNoKHRoaXMpXG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHRoaXMuX2FwcC5jdXN0b21Db21wb25lbnRNYXBbdHlwZV0gfHwge31cbiAgfVxuICBjb25zdCBkYXRhID0gb3B0aW9ucy5kYXRhIHx8IHt9XG5cbiAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnNcbiAgdGhpcy5fbWV0aG9kcyA9IG9wdGlvbnMubWV0aG9kcyB8fCB7fVxuICB0aGlzLl9jb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwge31cbiAgdGhpcy5fY3NzID0gb3B0aW9ucy5zdHlsZSB8fCB7fVxuICB0aGlzLl9pZHMgPSB7fVxuICB0aGlzLl92bUV2ZW50cyA9IHt9XG4gIHRoaXMuX2NoaWxkcmVuVm1zID0gW11cbiAgdGhpcy5fdHlwZSA9IHR5cGVcblxuICAvLyBiaW5kIGV2ZW50cyBhbmQgbGlmZWN5Y2xlc1xuICBpbml0RXZlbnRzKHRoaXMsIGV4dGVybmFsRXZlbnRzKVxuXG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFwiaW5pdFwiIGxpZmVjeWNsZSBpbiBWbSgke3RoaXMuX3R5cGV9KWApXG4gIHRoaXMuJGVtaXQoJ2hvb2s6aW5pdCcpXG4gIHRoaXMuX2luaXRlZCA9IHRydWVcblxuICAvLyBwcm94eSBkYXRhIGFuZCBtZXRob2RzXG4gIC8vIG9ic2VydmUgZGF0YSBhbmQgYWRkIHRoaXMgdG8gdm1zXG4gIHRoaXMuX2RhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJyA/IGRhdGEoKSA6IGRhdGFcbiAgaWYgKG1lcmdlZERhdGEpIHtcbiAgICBleHRlbmQodGhpcy5fZGF0YSwgbWVyZ2VkRGF0YSlcbiAgfVxuICBpbml0U3RhdGUodGhpcylcblxuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBcImNyZWF0ZWRcIiBsaWZlY3ljbGUgaW4gVm0oJHt0aGlzLl90eXBlfSlgKVxuICB0aGlzLiRlbWl0KCdob29rOmNyZWF0ZWQnKVxuICB0aGlzLl9jcmVhdGVkID0gdHJ1ZVxuXG4gIC8vIGJhY2t3YXJkIG9sZCByZWFkeSBlbnRyeVxuICBpZiAob3B0aW9ucy5tZXRob2RzICYmIG9wdGlvbnMubWV0aG9kcy5yZWFkeSkge1xuICAgIGNvbnNvbGUud2FybignXCJleHBvcnRzLm1ldGhvZHMucmVhZHlcIiBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICdwbGVhc2UgdXNlIFwiZXhwb3J0cy5jcmVhdGVkXCIgaW5zdGVhZCcpXG4gICAgb3B0aW9ucy5tZXRob2RzLnJlYWR5LmNhbGwodGhpcylcbiAgfVxuXG4gIC8vIGlmIG5vIHBhcmVudEVsZW1lbnQgdGhlbiBzcGVjaWZ5IHRoZSBkb2N1bWVudEVsZW1lbnRcbiAgdGhpcy5fcGFyZW50RWwgPSBwYXJlbnRFbCB8fCB0aGlzLl9hcHAuZG9jLmRvY3VtZW50RWxlbWVudFxuICBidWlsZCh0aGlzKVxufVxuXG5taXhpbkV2ZW50cyhWbS5wcm90b3R5cGUpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvdm0vaW5kZXguanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgV2F0Y2hlciBmcm9tICcuL3dhdGNoZXInXG5pbXBvcnQgRGVwIGZyb20gJy4vZGVwJ1xuaW1wb3J0IHtcbiAgb2JzZXJ2ZSxcbiAgcHJveHksXG4gIHVucHJveHlcbn0gZnJvbSAnLi9vYnNlcnZlcidcbmltcG9ydCB7XG4gIGlzUGxhaW5PYmplY3QsXG4gIGJpbmRcbn0gZnJvbSAnLi4vdXRpbCdcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTdGF0ZSAodm0pIHtcbiAgdm0uX3dhdGNoZXJzID0gW11cbiAgaW5pdERhdGEodm0pXG4gIGluaXRDb21wdXRlZCh2bSlcbiAgaW5pdE1ldGhvZHModm0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RGF0YSAodm0pIHtcbiAgbGV0IGRhdGEgPSB2bS5fZGF0YVxuXG4gIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgIGRhdGEgPSB7fVxuICB9XG4gIC8vIHByb3h5IGRhdGEgb24gaW5zdGFuY2VcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gIGxldCBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIHByb3h5KHZtLCBrZXlzW2ldKVxuICB9XG4gIC8vIG9ic2VydmUgZGF0YVxuICBvYnNlcnZlKGRhdGEsIHZtKVxufVxuXG5mdW5jdGlvbiBub29wICgpIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb21wdXRlZCAodm0pIHtcbiAgY29uc3QgY29tcHV0ZWQgPSB2bS5fY29tcHV0ZWRcbiAgaWYgKGNvbXB1dGVkKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgICBjb25zdCB1c2VyRGVmID0gY29tcHV0ZWRba2V5XVxuICAgICAgY29uc3QgZGVmID0ge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdXNlckRlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkZWYuZ2V0ID0gbWFrZUNvbXB1dGVkR2V0dGVyKHVzZXJEZWYsIHZtKVxuICAgICAgICBkZWYuc2V0ID0gbm9vcFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmLmdldCA9IHVzZXJEZWYuZ2V0XG4gICAgICAgICAgPyB1c2VyRGVmLmNhY2hlICE9PSBmYWxzZVxuICAgICAgICAgICAgPyBtYWtlQ29tcHV0ZWRHZXR0ZXIodXNlckRlZi5nZXQsIHZtKVxuICAgICAgICAgICAgOiBiaW5kKHVzZXJEZWYuZ2V0LCB2bSlcbiAgICAgICAgICA6IG5vb3BcbiAgICAgICAgZGVmLnNldCA9IHVzZXJEZWYuc2V0XG4gICAgICAgICAgPyBiaW5kKHVzZXJEZWYuc2V0LCB2bSlcbiAgICAgICAgICA6IG5vb3BcbiAgICAgIH1cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2bSwga2V5LCBkZWYpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VDb21wdXRlZEdldHRlciAoZ2V0dGVyLCBvd25lcikge1xuICBjb25zdCB3YXRjaGVyID0gbmV3IFdhdGNoZXIob3duZXIsIGdldHRlciwgbnVsbCwge1xuICAgIGxhenk6IHRydWVcbiAgfSlcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXB1dGVkR2V0dGVyICgpIHtcbiAgICBpZiAod2F0Y2hlci5kaXJ0eSkge1xuICAgICAgd2F0Y2hlci5ldmFsdWF0ZSgpXG4gICAgfVxuICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICB3YXRjaGVyLmRlcGVuZCgpXG4gICAgfVxuICAgIHJldHVybiB3YXRjaGVyLnZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRNZXRob2RzICh2bSkge1xuICBjb25zdCBtZXRob2RzID0gdm0uX21ldGhvZHNcbiAgaWYgKG1ldGhvZHMpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gbWV0aG9kcykge1xuICAgICAgdm1ba2V5XSA9IG1ldGhvZHNba2V5XVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2NvcmUvc3RhdGUuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgRGVwLCB7IHB1c2hUYXJnZXQsIHBvcFRhcmdldCB9IGZyb20gJy4vZGVwJ1xuLy8gaW1wb3J0IHsgcHVzaFdhdGNoZXIgfSBmcm9tICcuL2JhdGNoZXInXG5pbXBvcnQge1xuICB3YXJuLFxuICByZW1vdmUsXG4gIGV4dGVuZCxcbiAgaXNPYmplY3QsXG4gIHBhcnNlUGF0aCxcbiAgY3JlYXRlTmV3U2V0XG4gIC8vIF9TZXQgYXMgU2V0XG59IGZyb20gJy4uL3V0aWwnXG5cbmxldCB1aWQgPSAwXG5cbi8qKlxuICogQSB3YXRjaGVyIHBhcnNlcyBhbiBleHByZXNzaW9uLCBjb2xsZWN0cyBkZXBlbmRlbmNpZXMsXG4gKiBhbmQgZmlyZXMgY2FsbGJhY2sgd2hlbiB0aGUgZXhwcmVzc2lvbiB2YWx1ZSBjaGFuZ2VzLlxuICogVGhpcyBpcyB1c2VkIGZvciBib3RoIHRoZSAkd2F0Y2goKSBhcGkgYW5kIGRpcmVjdGl2ZXMuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gZXhwT3JGblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiAgICAgICAgICAgICAgICAgLSB7QXJyYXl9IGZpbHRlcnNcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSB0d29XYXlcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBkZWVwXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gdXNlclxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHN5bmNcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBsYXp5XG4gKiAgICAgICAgICAgICAgICAgLSB7RnVuY3Rpb259IFtwcmVQcm9jZXNzXVxuICogICAgICAgICAgICAgICAgIC0ge0Z1bmN0aW9ufSBbcG9zdFByb2Nlc3NdXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYXRjaGVyICh2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpIHtcbiAgLy8gbWl4IGluIG9wdGlvbnNcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBleHRlbmQodGhpcywgb3B0aW9ucylcbiAgfVxuICBjb25zdCBpc0ZuID0gdHlwZW9mIGV4cE9yRm4gPT09ICdmdW5jdGlvbidcbiAgdGhpcy52bSA9IHZtXG4gIHZtLl93YXRjaGVycy5wdXNoKHRoaXMpXG4gIHRoaXMuZXhwcmVzc2lvbiA9IGV4cE9yRm5cbiAgdGhpcy5jYiA9IGNiXG4gIHRoaXMuaWQgPSArK3VpZCAvLyB1aWQgZm9yIGJhdGNoaW5nXG4gIHRoaXMuYWN0aXZlID0gdHJ1ZVxuICB0aGlzLmRpcnR5ID0gdGhpcy5sYXp5IC8vIGZvciBsYXp5IHdhdGNoZXJzXG4gIHRoaXMuZGVwcyA9IFtdXG4gIHRoaXMubmV3RGVwcyA9IFtdXG4gIHRoaXMuZGVwSWRzID0gY3JlYXRlTmV3U2V0KCkgLy8gbmV3IFNldCgpXG4gIHRoaXMubmV3RGVwSWRzID0gY3JlYXRlTmV3U2V0KCkgLy8gbmV3IFNldCgpXG4gIC8vIHBhcnNlIGV4cHJlc3Npb24gZm9yIGdldHRlclxuICBpZiAoaXNGbikge1xuICAgIHRoaXMuZ2V0dGVyID0gZXhwT3JGblxuICB9IGVsc2Uge1xuICAgIHRoaXMuZ2V0dGVyID0gcGFyc2VQYXRoKGV4cE9yRm4pXG4gICAgaWYgKCF0aGlzLmdldHRlcikge1xuICAgICAgdGhpcy5nZXR0ZXIgPSBmdW5jdGlvbiAoKSB7fVxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAnRmFpbGVkIHdhdGNoaW5nIHBhdGg6ICcgKyBleHBPckZuICtcbiAgICAgICAgJ1dhdGNoZXIgb25seSBhY2NlcHRzIHNpbXBsZSBkb3QtZGVsaW1pdGVkIHBhdGhzLiAnICtcbiAgICAgICAgJ0ZvciBmdWxsIGNvbnRyb2wsIHVzZSBhIGZ1bmN0aW9uIGluc3RlYWQuJyxcbiAgICAgICAgdm1cbiAgICAgIClcbiAgICB9XG4gIH1cbiAgdGhpcy52YWx1ZSA9IHRoaXMubGF6eVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiB0aGlzLmdldCgpXG4gIC8vIHN0YXRlIGZvciBhdm9pZGluZyBmYWxzZSB0cmlnZ2VycyBmb3IgZGVlcCBhbmQgQXJyYXlcbiAgLy8gd2F0Y2hlcnMgZHVyaW5nIHZtLl9kaWdlc3QoKVxuICB0aGlzLnF1ZXVlZCA9IHRoaXMuc2hhbGxvdyA9IGZhbHNlXG59XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIGdldHRlciwgYW5kIHJlLWNvbGxlY3QgZGVwZW5kZW5jaWVzLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcHVzaFRhcmdldCh0aGlzKVxuICBsZXQgdmFsdWUgPSB7fVxuICB0cnkge1xuICAgIHZhbHVlID0gdGhpcy5nZXR0ZXIuY2FsbCh0aGlzLnZtLCB0aGlzLnZtKVxuICB9IGNhdGNoKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICB9XG4gIFxuICAvLyBcInRvdWNoXCIgZXZlcnkgcHJvcGVydHkgc28gdGhleSBhcmUgYWxsIHRyYWNrZWQgYXNcbiAgLy8gZGVwZW5kZW5jaWVzIGZvciBkZWVwIHdhdGNoaW5nXG4gIGlmICh0aGlzLmRlZXApIHtcbiAgICB0cmF2ZXJzZSh2YWx1ZSlcbiAgfVxuICBwb3BUYXJnZXQoKVxuICB0aGlzLmNsZWFudXBEZXBzKClcbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogQWRkIGEgZGVwZW5kZW5jeSB0byB0aGlzIGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge0RlcH0gZGVwXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuYWRkRGVwID0gZnVuY3Rpb24gKGRlcCkge1xuICBjb25zdCBpZCA9IGRlcC5pZFxuICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhpZCkpIHtcbiAgICB0aGlzLm5ld0RlcElkcy5hZGQoaWQpXG4gICAgdGhpcy5uZXdEZXBzLnB1c2goZGVwKVxuICAgIGlmICghdGhpcy5kZXBJZHMuaGFzKGlkKSkge1xuICAgICAgZGVwLmFkZFN1Yih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENsZWFuIHVwIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuY2xlYW51cERlcHMgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBpID0gdGhpcy5kZXBzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgY29uc3QgZGVwID0gdGhpcy5kZXBzW2ldXG4gICAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoZGVwLmlkKSkge1xuICAgICAgZGVwLnJlbW92ZVN1Yih0aGlzKVxuICAgIH1cbiAgfVxuICBsZXQgdG1wID0gdGhpcy5kZXBJZHNcbiAgdGhpcy5kZXBJZHMgPSB0aGlzLm5ld0RlcElkc1xuICB0aGlzLm5ld0RlcElkcyA9IHRtcFxuICB0aGlzLm5ld0RlcElkcy5jbGVhcigpXG4gIHRtcCA9IHRoaXMuZGVwc1xuICB0aGlzLmRlcHMgPSB0aGlzLm5ld0RlcHNcbiAgdGhpcy5uZXdEZXBzID0gdG1wXG4gIHRoaXMubmV3RGVwcy5sZW5ndGggPSAwXG59XG5cbi8qKlxuICogU3Vic2NyaWJlciBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCB3aGVuIGEgZGVwZW5kZW5jeSBjaGFuZ2VzLlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc2hhbGxvd1xuICovXG5cbldhdGNoZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChzaGFsbG93KSB7XG4gIGlmICh0aGlzLmxhenkpIHtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIHRoaXMucnVuKClcbiAgfVxuICAvLyB9IGVsc2UgaWYgKHRoaXMuc3luYykge1xuICAvLyAgIHRoaXMucnVuKClcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICAvLyBpZiBxdWV1ZWQsIG9ubHkgb3ZlcndyaXRlIHNoYWxsb3cgd2l0aCBub24tc2hhbGxvdyxcbiAgLy8gICAvLyBidXQgbm90IHRoZSBvdGhlciB3YXkgYXJvdW5kLlxuICAvLyAgIHRoaXMuc2hhbGxvdyA9IHRoaXMucXVldWVkXG4gIC8vICAgICA/IHNoYWxsb3dcbiAgLy8gICAgICAgPyB0aGlzLnNoYWxsb3dcbiAgLy8gICAgICAgOiBmYWxzZVxuICAvLyAgICAgOiAhIXNoYWxsb3dcbiAgLy8gICB0aGlzLnF1ZXVlZCA9IHRydWVcbiAgLy8gICBwdXNoV2F0Y2hlcih0aGlzKVxuICAvLyB9XG59XG5cbi8qKlxuICogQmF0Y2hlciBqb2IgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgYnkgdGhlIGJhdGNoZXIuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KClcbiAgICBpZiAoXG4gICAgICB2YWx1ZSAhPT0gdGhpcy52YWx1ZSB8fFxuICAgICAgLy8gRGVlcCB3YXRjaGVycyBhbmQgd2F0Y2hlcnMgb24gT2JqZWN0L0FycmF5cyBzaG91bGQgZmlyZSBldmVuXG4gICAgICAvLyB3aGVuIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZSwgYmVjYXVzZSB0aGUgdmFsdWUgbWF5XG4gICAgICAvLyBoYXZlIG11dGF0ZWQ7IGJ1dCBvbmx5IGRvIHNvIGlmIHRoaXMgaXMgYVxuICAgICAgLy8gbm9uLXNoYWxsb3cgdXBkYXRlIChjYXVzZWQgYnkgYSB2bSBkaWdlc3QpLlxuICAgICAgKChpc09iamVjdCh2YWx1ZSkgfHwgdGhpcy5kZWVwKSAmJiAhdGhpcy5zaGFsbG93KVxuICAgICkge1xuICAgICAgLy8gc2V0IG5ldyB2YWx1ZVxuICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnZhbHVlXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpXG4gICAgfVxuICAgIHRoaXMucXVldWVkID0gdGhpcy5zaGFsbG93ID0gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSB2YWx1ZSBvZiB0aGUgd2F0Y2hlci5cbiAqIFRoaXMgb25seSBnZXRzIGNhbGxlZCBmb3IgbGF6eSB3YXRjaGVycy5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5ldmFsdWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0KClcbiAgdGhpcy5kaXJ0eSA9IGZhbHNlXG59XG5cbi8qKlxuICogRGVwZW5kIG9uIGFsbCBkZXBzIGNvbGxlY3RlZCBieSB0aGlzIHdhdGNoZXIuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gKCkge1xuICBsZXQgaSA9IHRoaXMuZGVwcy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIHRoaXMuZGVwc1tpXS5kZXBlbmQoKVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIHNlbGYgZnJvbSBhbGwgZGVwZW5kZW5jaWVzJyBzdWJjcmliZXIgbGlzdC5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSB2bSdzIHdhdGNoZXIgbGlzdFxuICAgIC8vIHRoaXMgaXMgYSBzb21ld2hhdCBleHBlbnNpdmUgb3BlcmF0aW9uIHNvIHdlIHNraXAgaXRcbiAgICAvLyBpZiB0aGUgdm0gaXMgYmVpbmcgZGVzdHJveWVkIG9yIGlzIHBlcmZvcm1pbmcgYSB2LWZvclxuICAgIC8vIHJlLXJlbmRlciAodGhlIHdhdGNoZXIgbGlzdCBpcyB0aGVuIGZpbHRlcmVkIGJ5IHYtZm9yKS5cbiAgICBpZiAoIXRoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWQgJiYgIXRoaXMudm0uX3ZGb3JSZW1vdmluZykge1xuICAgICAgcmVtb3ZlKHRoaXMudm0uX3dhdGNoZXJzLCB0aGlzKVxuICAgIH1cbiAgICBsZXQgaSA9IHRoaXMuZGVwcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLmRlcHNbaV0ucmVtb3ZlU3ViKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2VcbiAgICB0aGlzLnZtID0gdGhpcy5jYiA9IHRoaXMudmFsdWUgPSBudWxsXG4gIH1cbn1cblxuLyoqXG4gKiBSZWNydXNpdmVseSB0cmF2ZXJzZSBhbiBvYmplY3QgdG8gZXZva2UgYWxsIGNvbnZlcnRlZFxuICogZ2V0dGVycywgc28gdGhhdCBldmVyeSBuZXN0ZWQgcHJvcGVydHkgaW5zaWRlIHRoZSBvYmplY3RcbiAqIGlzIGNvbGxlY3RlZCBhcyBhIFwiZGVlcFwiIGRlcGVuZGVuY3kuXG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEBwYXJhbSB7U2V0fSBzZWVuXG4gKi9cblxuY29uc3Qgc2Vlbk9iamVjdHMgPSBjcmVhdGVOZXdTZXQoKSAvLyBuZXcgU2V0KClcbmZ1bmN0aW9uIHRyYXZlcnNlICh2YWwsIHNlZW4pIHtcbiAgbGV0IGksIGtleXMsIGlzQSwgaXNPXG4gIGlmICghc2Vlbikge1xuICAgIHNlZW4gPSBzZWVuT2JqZWN0c1xuICAgIHNlZW4uY2xlYXIoKVxuICB9XG4gIGlzQSA9IEFycmF5LmlzQXJyYXkodmFsKVxuICBpc08gPSBpc09iamVjdCh2YWwpXG4gIGlmIChpc0EgfHwgaXNPKSB7XG4gICAgaWYgKHZhbC5fX29iX18pIHtcbiAgICAgIGNvbnN0IGRlcElkID0gdmFsLl9fb2JfXy5kZXAuaWRcbiAgICAgIGlmIChzZWVuLmhhcyhkZXBJZCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWVuLmFkZChkZXBJZClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzQSkge1xuICAgICAgaSA9IHZhbC5sZW5ndGhcbiAgICAgIHdoaWxlIChpLS0pIHRyYXZlcnNlKHZhbFtpXSwgc2VlbilcbiAgICB9IGVsc2UgaWYgKGlzTykge1xuICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbClcbiAgICAgIGkgPSBrZXlzLmxlbmd0aFxuICAgICAgd2hpbGUgKGktLSkgdHJhdmVyc2UodmFsW2tleXNbaV1dLCBzZWVuKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2NvcmUvd2F0Y2hlci5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IHJlbW92ZSB9IGZyb20gJy4uL3V0aWwnXG5cbmxldCB1aWQgPSAwXG5cbi8qKlxuICogQSBkZXAgaXMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNhbiBoYXZlIG11bHRpcGxlXG4gKiBkaXJlY3RpdmVzIHN1YnNjcmliaW5nIHRvIGl0LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlcCAoKSB7XG4gIHRoaXMuaWQgPSB1aWQrK1xuICB0aGlzLnN1YnMgPSBbXVxufVxuXG4vLyB0aGUgY3VycmVudCB0YXJnZXQgd2F0Y2hlciBiZWluZyBldmFsdWF0ZWQuXG4vLyB0aGlzIGlzIGdsb2JhbGx5IHVuaXF1ZSBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG9ubHkgb25lXG4vLyB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZCBhdCBhbnkgdGltZS5cbkRlcC50YXJnZXQgPSBudWxsXG5jb25zdCB0YXJnZXRTdGFjayA9IFtdXG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoVGFyZ2V0IChfdGFyZ2V0KSB7XG4gIGlmIChEZXAudGFyZ2V0KSB0YXJnZXRTdGFjay5wdXNoKERlcC50YXJnZXQpXG4gIERlcC50YXJnZXQgPSBfdGFyZ2V0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BUYXJnZXQgKCkge1xuICBEZXAudGFyZ2V0ID0gdGFyZ2V0U3RhY2sucG9wKClcbn1cblxuLyoqXG4gKiBBZGQgYSBkaXJlY3RpdmUgc3Vic2NyaWJlci5cbiAqXG4gKiBAcGFyYW0ge0RpcmVjdGl2ZX0gc3ViXG4gKi9cblxuRGVwLnByb3RvdHlwZS5hZGRTdWIgPSBmdW5jdGlvbiAoc3ViKSB7XG4gIHRoaXMuc3Vicy5wdXNoKHN1Yilcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBkaXJlY3RpdmUgc3Vic2NyaWJlci5cbiAqXG4gKiBAcGFyYW0ge0RpcmVjdGl2ZX0gc3ViXG4gKi9cblxuRGVwLnByb3RvdHlwZS5yZW1vdmVTdWIgPSBmdW5jdGlvbiAoc3ViKSB7XG4gIHJlbW92ZSh0aGlzLnN1YnMsIHN1Yilcbn1cblxuLyoqXG4gKiBBZGQgc2VsZiBhcyBhIGRlcGVuZGVuY3kgdG8gdGhlIHRhcmdldCB3YXRjaGVyLlxuICovXG5cbkRlcC5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gKCkge1xuICBpZiAoRGVwLnRhcmdldCkge1xuICAgIERlcC50YXJnZXQuYWRkRGVwKHRoaXMpXG4gIH1cbn1cblxuLyoqXG4gKiBOb3RpZnkgYWxsIHN1YnNjcmliZXJzIG9mIGEgbmV3IHZhbHVlLlxuICovXG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAvLyBzdGFibGl6ZSB0aGUgc3Vic2NyaWJlciBsaXN0IGZpcnN0XG4gIGNvbnN0IHN1YnMgPSB0aGlzLnN1YnMuc2xpY2UoKVxuICBmb3IgKGxldCBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3Vic1tpXS51cGRhdGUoKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS9kZXAuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgRGVwIGZyb20gJy4vZGVwJ1xuaW1wb3J0IHsgYXJyYXlNZXRob2RzIH0gZnJvbSAnLi9hcnJheSdcbmltcG9ydCB7XG4gIGRlZixcbiAgcmVtb3ZlLFxuICBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdCxcbiAgaGFzUHJvdG8sXG4gIGhhc093bixcbiAgaXNSZXNlcnZlZFxufSBmcm9tICcuLi91dGlsJ1xuXG5jb25zdCBhcnJheUtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhcnJheU1ldGhvZHMpXG5cbi8qKlxuICogT2JzZXJ2ZXIgY2xhc3MgdGhhdCBhcmUgYXR0YWNoZWQgdG8gZWFjaCBvYnNlcnZlZFxuICogb2JqZWN0LiBPbmNlIGF0dGFjaGVkLCB0aGUgb2JzZXJ2ZXIgY29udmVydHMgdGFyZ2V0XG4gKiBvYmplY3QncyBwcm9wZXJ0eSBrZXlzIGludG8gZ2V0dGVyL3NldHRlcnMgdGhhdFxuICogY29sbGVjdCBkZXBlbmRlbmNpZXMgYW5kIGRpc3BhdGNoZXMgdXBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gdmFsdWVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBPYnNlcnZlciAodmFsdWUpIHtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIHRoaXMuZGVwID0gbmV3IERlcCgpXG4gIGRlZih2YWx1ZSwgJ19fb2JfXycsIHRoaXMpXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGNvbnN0IGF1Z21lbnQgPSBoYXNQcm90b1xuICAgICAgPyBwcm90b0F1Z21lbnRcbiAgICAgIDogY29weUF1Z21lbnRcbiAgICBhdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cylcbiAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSlcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhbGsodmFsdWUpXG4gIH1cbn1cblxuLy8gSW5zdGFuY2UgbWV0aG9kc1xuXG4vKipcbiAqIFdhbGsgdGhyb3VnaCBlYWNoIHByb3BlcnR5IGFuZCBjb252ZXJ0IHRoZW0gaW50b1xuICogZ2V0dGVyL3NldHRlcnMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuXG4gKiB2YWx1ZSB0eXBlIGlzIE9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLndhbGsgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICB0aGlzLmNvbnZlcnQoa2V5LCBvYmpba2V5XSlcbiAgfVxufVxuXG4vKipcbiAqIE9ic2VydmUgYSBsaXN0IG9mIEFycmF5IGl0ZW1zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmVBcnJheSA9IGZ1bmN0aW9uIChpdGVtcykge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIG9ic2VydmUoaXRlbXNbaV0pXG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgcHJvcGVydHkgaW50byBnZXR0ZXIvc2V0dGVyIHNvIHdlIGNhbiBlbWl0XG4gKiB0aGUgZXZlbnRzIHdoZW4gdGhlIHByb3BlcnR5IGlzIGFjY2Vzc2VkL2NoYW5nZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uIChrZXksIHZhbCkge1xuICBkZWZpbmVSZWFjdGl2ZSh0aGlzLnZhbHVlLCBrZXksIHZhbClcbn1cblxuLyoqXG4gKiBBZGQgYW4gb3duZXIgdm0sIHNvIHRoYXQgd2hlbiAkc2V0LyRkZWxldGUgbXV0YXRpb25zXG4gKiBoYXBwZW4gd2UgY2FuIG5vdGlmeSBvd25lciB2bXMgdG8gcHJveHkgdGhlIGtleXMgYW5kXG4gKiBkaWdlc3QgdGhlIHdhdGNoZXJzLiBUaGlzIGlzIG9ubHkgY2FsbGVkIHdoZW4gdGhlIG9iamVjdFxuICogaXMgb2JzZXJ2ZWQgYXMgYW4gaW5zdGFuY2UncyByb290ICRkYXRhLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5hZGRWbSA9IGZ1bmN0aW9uICh2bSkge1xuICAodGhpcy52bXMgfHwgKHRoaXMudm1zID0gW10pKS5wdXNoKHZtKVxufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBvd25lciB2bS4gVGhpcyBpcyBjYWxsZWQgd2hlbiB0aGUgb2JqZWN0IGlzXG4gKiBzd2FwcGVkIG91dCBhcyBhbiBpbnN0YW5jZSdzICRkYXRhIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUucmVtb3ZlVm0gPSBmdW5jdGlvbiAodm0pIHtcbiAgcmVtb3ZlKHRoaXMudm1zLCB2bSlcbn1cblxuLy8gaGVscGVyc1xuXG4vKipcbiAqIEF1Z21lbnQgYW4gdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBpbnRlcmNlcHRpbmdcbiAqIHRoZSBwcm90b3R5cGUgY2hhaW4gdXNpbmcgX19wcm90b19fXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3R9IHNyY1xuICovXG5cbmZ1bmN0aW9uIHByb3RvQXVnbWVudCAodGFyZ2V0LCBzcmMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgdGFyZ2V0Ll9fcHJvdG9fXyA9IHNyY1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXByb3RvICovXG59XG5cbi8qKlxuICogQXVnbWVudCBhbiB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGRlZmluaW5nXG4gKiBoaWRkZW4gcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gdGFyZ2V0XG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG9cbiAqL1xuXG5mdW5jdGlvbiBjb3B5QXVnbWVudCAodGFyZ2V0LCBzcmMsIGtleXMpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBkZWYodGFyZ2V0LCBrZXksIHNyY1trZXldKVxuICB9XG59XG5cbi8qKlxuICogQXR0ZW1wdCB0byBjcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgZm9yIGEgdmFsdWUsXG4gKiByZXR1cm5zIHRoZSBuZXcgb2JzZXJ2ZXIgaWYgc3VjY2Vzc2Z1bGx5IG9ic2VydmVkLFxuICogb3IgdGhlIGV4aXN0aW5nIG9ic2VydmVyIGlmIHRoZSB2YWx1ZSBhbHJlYWR5IGhhcyBvbmUuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtWdWV9IFt2bV1cbiAqIEByZXR1cm4ge09ic2VydmVyfHVuZGVmaW5lZH1cbiAqIEBzdGF0aWNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZSAodmFsdWUsIHZtKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgbGV0IG9iXG4gIGlmIChoYXNPd24odmFsdWUsICdfX29iX18nKSAmJiB2YWx1ZS5fX29iX18gaW5zdGFuY2VvZiBPYnNlcnZlcikge1xuICAgIG9iID0gdmFsdWUuX19vYl9fXG4gIH0gZWxzZSBpZiAoXG4gICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKSAmJlxuICAgIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpICYmXG4gICAgIXZhbHVlLl9pc1Z1ZVxuICApIHtcbiAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSlcbiAgfVxuICBpZiAob2IgJiYgdm0pIHtcbiAgICBvYi5hZGRWbSh2bSlcbiAgfVxuICByZXR1cm4gb2Jcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiBhbiBPYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lUmVhY3RpdmUgKG9iaiwga2V5LCB2YWwpIHtcbiAgY29uc3QgZGVwID0gbmV3IERlcCgpXG5cbiAgY29uc3QgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KVxuICBpZiAocHJvcGVydHkgJiYgcHJvcGVydHkuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gY2F0ZXIgZm9yIHByZS1kZWZpbmVkIGdldHRlci9zZXR0ZXJzXG4gIGNvbnN0IGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldFxuICBjb25zdCBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXRcblxuICBsZXQgY2hpbGRPYiA9IG9ic2VydmUodmFsKVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlR2V0dGVyICgpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbFxuICAgICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgICAgZGVwLmRlcGVuZCgpXG4gICAgICAgIGlmIChjaGlsZE9iKSB7XG4gICAgICAgICAgY2hpbGRPYi5kZXAuZGVwZW5kKClcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBmb3IgKGxldCBlLCBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgZSA9IHZhbHVlW2ldXG4gICAgICAgICAgICBlICYmIGUuX19vYl9fICYmIGUuX19vYl9fLmRlcC5kZXBlbmQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlU2V0dGVyIChuZXdWYWwpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbFxuICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gbmV3VmFsXG4gICAgICB9XG4gICAgICBjaGlsZE9iID0gb2JzZXJ2ZShuZXdWYWwpXG4gICAgICBkZXAubm90aWZ5KClcbiAgICB9XG4gIH0pXG59XG5cbi8qKlxuICogU2V0IGEgcHJvcGVydHkgb24gYW4gb2JqZWN0LiBBZGRzIHRoZSBuZXcgcHJvcGVydHkgYW5kXG4gKiB0cmlnZ2VycyBjaGFuZ2Ugbm90aWZpY2F0aW9uIGlmIHRoZSBwcm9wZXJ0eSBkb2Vzbid0XG4gKiBhbHJlYWR5IGV4aXN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcHVibGljXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldCAob2JqLCBrZXksIHZhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iai5zcGxpY2Uoa2V5LCAxLCB2YWwpXG4gIH1cbiAgaWYgKGhhc093bihvYmosIGtleSkpIHtcbiAgICBvYmpba2V5XSA9IHZhbFxuICAgIHJldHVyblxuICB9XG4gIGlmIChvYmouX2lzVnVlKSB7XG4gICAgc2V0KG9iai5fZGF0YSwga2V5LCB2YWwpXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qgb2IgPSBvYmouX19vYl9fXG4gIGlmICghb2IpIHtcbiAgICBvYmpba2V5XSA9IHZhbFxuICAgIHJldHVyblxuICB9XG4gIG9iLmNvbnZlcnQoa2V5LCB2YWwpXG4gIG9iLmRlcC5ub3RpZnkoKVxuICBpZiAob2Iudm1zKSB7XG4gICAgbGV0IGkgPSBvYi52bXMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY29uc3Qgdm0gPSBvYi52bXNbaV1cbiAgICAgIHByb3h5KHZtLCBrZXkpXG4gICAgICB2bS4kZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbi8qKlxuICogRGVsZXRlIGEgcHJvcGVydHkgYW5kIHRyaWdnZXIgY2hhbmdlIGlmIG5lY2Vzc2FyeS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbCAob2JqLCBrZXkpIHtcbiAgaWYgKCFoYXNPd24ob2JqLCBrZXkpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZGVsZXRlIG9ialtrZXldXG4gIGNvbnN0IG9iID0gb2JqLl9fb2JfX1xuXG4gIGlmICghb2IpIHtcbiAgICBpZiAob2JqLl9pc1Z1ZSkge1xuICAgICAgZGVsZXRlIG9iai5fZGF0YVtrZXldXG4gICAgICBvYmouJGZvcmNlVXBkYXRlKClcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgb2IuZGVwLm5vdGlmeSgpXG4gIGlmIChvYi52bXMpIHtcbiAgICBsZXQgaSA9IG9iLnZtcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjb25zdCB2bSA9IG9iLnZtc1tpXVxuICAgICAgdW5wcm94eSh2bSwga2V5KVxuICAgICAgdm0uJGZvcmNlVXBkYXRlKClcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgS0VZX1dPUkRTID0gWyckaW5kZXgnLCAnJHZhbHVlJywgJyRldmVudCddXG5leHBvcnQgZnVuY3Rpb24gcHJveHkgKHZtLCBrZXkpIHtcbiAgaWYgKEtFWV9XT1JEUy5pbmRleE9mKGtleSkgPiAtMSB8fCAhaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZtLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIHByb3h5R2V0dGVyICgpIHtcbiAgICAgICAgcmV0dXJuIHZtLl9kYXRhW2tleV1cbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHByb3h5U2V0dGVyICh2YWwpIHtcbiAgICAgICAgdm0uX2RhdGFba2V5XSA9IHZhbFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucHJveHkgKHZtLCBrZXkpIHtcbiAgaWYgKCFpc1Jlc2VydmVkKGtleSkpIHtcbiAgICBkZWxldGUgdm1ba2V5XVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS9vYnNlcnZlci5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IGRlZiB9IGZyb20gJy4uL3V0aWwnXG5cbmNvbnN0IGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGVcbmV4cG9ydCBjb25zdCBhcnJheU1ldGhvZHMgPSBPYmplY3QuY3JlYXRlKGFycmF5UHJvdG8pXG5cbi8qKlxuICogSW50ZXJjZXB0IG11dGF0aW5nIG1ldGhvZHMgYW5kIGVtaXQgZXZlbnRzXG4gKi9cblxuO1tcbiAgJ3B1c2gnLFxuICAncG9wJyxcbiAgJ3NoaWZ0JyxcbiAgJ3Vuc2hpZnQnLFxuICAnc3BsaWNlJyxcbiAgJ3NvcnQnLFxuICAncmV2ZXJzZSdcbl1cbi5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgLy8gY2FjaGUgb3JpZ2luYWwgbWV0aG9kXG4gIGNvbnN0IG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdXG4gIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwgZnVuY3Rpb24gbXV0YXRvciAoKSB7XG4gICAgLy8gYXZvaWQgbGVha2luZyBhcmd1bWVudHM6XG4gICAgLy8gaHR0cDovL2pzcGVyZi5jb20vY2xvc3VyZS13aXRoLWFyZ3VtZW50c1xuICAgIGxldCBpID0gYXJndW1lbnRzLmxlbmd0aFxuICAgIGNvbnN0IGFyZ3MgPSBuZXcgQXJyYXkoaSlcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldXG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgY29uc3Qgb2IgPSB0aGlzLl9fb2JfX1xuICAgIGxldCBpbnNlcnRlZFxuICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICBjYXNlICdwdXNoJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdzcGxpY2UnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3Muc2xpY2UoMilcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gICAgaWYgKGluc2VydGVkKSBvYi5vYnNlcnZlQXJyYXkoaW5zZXJ0ZWQpXG4gICAgLy8gbm90aWZ5IGNoYW5nZVxuICAgIG9iLmRlcC5ub3RpZnkoKVxuICAgIHJldHVybiByZXN1bHRcbiAgfSlcbn0pXG5cbi8qKlxuICogU3dhcCB0aGUgZWxlbWVudCBhdCB0aGUgZ2l2ZW4gaW5kZXggd2l0aCBhIG5ldyB2YWx1ZVxuICogYW5kIGVtaXRzIGNvcnJlc3BvbmRpbmcgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybiB7Kn0gLSByZXBsYWNlZCBlbGVtZW50XG4gKi9cblxuZGVmKFxuICBhcnJheVByb3RvLFxuICAnJHNldCcsXG4gIGZ1bmN0aW9uICRzZXQgKGluZGV4LCB2YWwpIHtcbiAgICBpZiAoaW5kZXggPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gaW5kZXggKyAxXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNwbGljZShpbmRleCwgMSwgdmFsKVswXVxuICB9XG4pXG5cbi8qKlxuICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHJlbW92ZSB0aGUgZWxlbWVudCBhdCBnaXZlbiBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuZGVmKFxuICBhcnJheVByb3RvLFxuICAnJHJlbW92ZScsXG4gIGZ1bmN0aW9uICRyZW1vdmUgKGluZGV4KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCF0aGlzLmxlbmd0aCkgcmV0dXJuXG4gICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5pbmRleE9mKGluZGV4KVxuICAgIH1cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG4pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS9hcnJheS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogVmlld01vZGVsIHRlbXBsYXRlIHBhcnNlciAmIGRhdGEtYmluZGluZyBwcm9jZXNzXG4gKi9cblxuaW1wb3J0IHtcbiAgZXh0ZW5kLFxuICBpc09iamVjdCxcbiAgYmluZFxufSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtcbiAgaW5pdERhdGEsXG4gIGluaXRDb21wdXRlZFxufSBmcm9tICcuLi9jb3JlL3N0YXRlJ1xuaW1wb3J0IHtcbiAgYmluZEVsZW1lbnQsXG4gIHNldElkLFxuICBiaW5kU3ViVm0sXG4gIGJpbmRTdWJWbUFmdGVySW5pdGlhbGl6ZWQsXG4gIGFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyxcbiAgd2F0Y2hcbn0gZnJvbSAnLi9kaXJlY3RpdmUnXG5pbXBvcnQge1xuICBjcmVhdGVCbG9jayxcbiAgY3JlYXRlQm9keSxcbiAgY3JlYXRlRWxlbWVudCxcbiAgYXR0YWNoVGFyZ2V0LFxuICBtb3ZlVGFyZ2V0LFxuICByZW1vdmVUYXJnZXRcbn0gZnJvbSAnLi9kb20taGVscGVyJ1xuXG4vKipcbiAqIGJ1aWxkKClcbiAqICAgY29tcGlsZSh0ZW1wbGF0ZSwgcGFyZW50Tm9kZSlcbiAqICAgICBpZiAodHlwZSBpcyBjb250ZW50KSBjcmVhdGUgY29udGVudE5vZGVcbiAqICAgICBlbHNlIGlmIChkaXJzIGhhdmUgdi1mb3IpIGZvcmVhY2ggLT4gY3JlYXRlIGNvbnRleHRcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0Rm9yLCBwYXJlbnROb2RlKTogZGlmZihsaXN0KSBvbmNoYW5nZVxuICogICAgIGVsc2UgaWYgKGRpcnMgaGF2ZSB2LWlmKSBhc3NlcnRcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0SWYsIHBhcmVudE5vZGUpOiB0b2dnbGUoc2hvd24pIG9uY2hhbmdlXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBkeW5hbWljKVxuICogICAgICAgLT4gY29tcGlsZSh0ZW1wbGF0ZVdpdGhvdXREeW5hbWljVHlwZSwgcGFyZW50Tm9kZSk6IHdhdGNoKHR5cGUpIG9uY2hhbmdlXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBjdXN0b20pXG4gKiAgICAgICBhZGRDaGlsZFZtKHZtLCBwYXJlbnRWbSlcbiAqICAgICAgIGJ1aWxkKGV4dGVybmFsRGlycylcbiAqICAgICAgIGZvcmVhY2ggY2hpbGROb2RlcyAtPiBjb21waWxlKGNoaWxkTm9kZSwgdGVtcGxhdGUpXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBuYXRpdmUpXG4gKiAgICAgICBzZXQoZGlycyk6IHVwZGF0ZShpZC9hdHRyL3N0eWxlL2NsYXNzKSBvbmNoYW5nZVxuICogICAgICAgYXBwZW5kKHRlbXBsYXRlLCBwYXJlbnROb2RlKVxuICogICAgICAgZm9yZWFjaCBjaGlsZE5vZGVzIC0+IGNvbXBpbGUoY2hpbGROb2RlLCB0ZW1wbGF0ZSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkICh2bSkge1xuICBjb25zdCBvcHQgPSB2bS5fb3B0aW9ucyB8fCB7fVxuICBjb25zdCB0ZW1wbGF0ZSA9IG9wdC50ZW1wbGF0ZSB8fCB7fVxuXG4gIGlmIChvcHQucmVwbGFjZSkge1xuICAgIGlmICh0ZW1wbGF0ZS5jaGlsZHJlbiAmJiB0ZW1wbGF0ZS5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbXBpbGUodm0sIHRlbXBsYXRlLmNoaWxkcmVuWzBdLCB2bS5fcGFyZW50RWwpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tcGlsZSh2bSwgdGVtcGxhdGUuY2hpbGRyZW4sIHZtLl9wYXJlbnRFbClcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgY29tcGlsZSh2bSwgdGVtcGxhdGUsIHZtLl9wYXJlbnRFbClcbiAgfVxuXG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFwicmVhZHlcIiBsaWZlY3ljbGUgaW4gVm0oJHt2bS5fdHlwZX0pYClcbiAgdm0uJGVtaXQoJ2hvb2s6cmVhZHknKVxuICB2bS5fcmVhZHkgPSB0cnVlXG59XG5cbi8qKlxuICogR2VuZXJhdGUgZWxlbWVudHMgYnkgY2hpbGQgb3IgY2hpbGRyZW4gYW5kIGFwcGVuZCB0byBwYXJlbnQgZWxlbWVudHMuXG4gKiBSb290IGVsZW1lbnQgaW5mbyB3b3VsZCBiZSBtZXJnZWQgaWYgaGFzLiBUaGUgZmlyc3QgYXJndW1lbnQgbWF5IGJlIGFuIGFycmF5XG4gKiBpZiB0aGUgcm9vdCBlbGVtZW50IHdpdGggb3B0aW9ucy5yZXBsYWNlIGhhcyBub3Qgb25seSBvbmUgY2hpbGQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9ICAgICAgIGRlc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSAgICAgICBtZXRhXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUgKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgY29uc3QgYXBwID0gdm0uX2FwcCB8fCB7fVxuXG4gIGlmIChhcHAubGFzdFNpZ25hbCA9PT0gLTEpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh0YXJnZXRJc0ZyYWdtZW50KHRhcmdldCkpIHtcbiAgICBjb21waWxlRnJhZ21lbnQodm0sIHRhcmdldCwgZGVzdCwgbWV0YSlcbiAgICByZXR1cm5cbiAgfVxuICBtZXRhID0gbWV0YSB8fCB7fVxuICBpZiAodGFyZ2V0SXNDb250ZW50KHRhcmdldCkpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIFwiY29udGVudFwiIGJsb2NrIGJ5JywgdGFyZ2V0KVxuICAgIHZtLl9jb250ZW50ID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodGFyZ2V0TmVlZENoZWNrUmVwZWF0KHRhcmdldCwgbWV0YSkpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIFwicmVwZWF0XCIgbG9naWMgYnknLCB0YXJnZXQpXG4gICAgaWYgKGRlc3QudHlwZSA9PT0gJ2RvY3VtZW50Jykge1xuICAgICAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBUaGUgcm9vdCBlbGVtZW50IGRvZXNcXCd0IHN1cHBvcnQgYHJlcGVhdGAgZGlyZWN0aXZlIScpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tcGlsZVJlcGVhdCh2bSwgdGFyZ2V0LCBkZXN0KVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBpZiAodGFyZ2V0TmVlZENoZWNrU2hvd24odGFyZ2V0LCBtZXRhKSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgXCJpZlwiIGxvZ2ljIGJ5JywgdGFyZ2V0KVxuICAgIGlmIChkZXN0LnR5cGUgPT09ICdkb2N1bWVudCcpIHtcbiAgICAgIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVGhlIHJvb3QgZWxlbWVudCBkb2VzXFwndCBzdXBwb3J0IGBpZmAgZGlyZWN0aXZlIScpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tcGlsZVNob3duKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpXG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHR5cGVHZXR0ZXIgPSBtZXRhLnR5cGUgfHwgdGFyZ2V0LnR5cGVcbiAgaWYgKHRhcmdldE5lZWRDaGVja1R5cGUodHlwZUdldHRlciwgbWV0YSkpIHtcbiAgICBjb21waWxlVHlwZSh2bSwgdGFyZ2V0LCBkZXN0LCB0eXBlR2V0dGVyLCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHR5cGUgPSB0eXBlR2V0dGVyXG4gIGNvbnN0IGNvbXBvbmVudCA9IHRhcmdldElzQ29tcG9zZWQodm0sIHRhcmdldCwgdHlwZSlcbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgY29tcG9zZWQgY29tcG9uZW50IGJ5JywgdGFyZ2V0KVxuICAgIGNvbXBpbGVDdXN0b21Db21wb25lbnQodm0sIGNvbXBvbmVudCwgdGFyZ2V0LCBkZXN0LCB0eXBlLCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgbmF0aXZlIGNvbXBvbmVudCBieScsIHRhcmdldClcbiAgY29tcGlsZU5hdGl2ZUNvbXBvbmVudCh2bSwgdGFyZ2V0LCBkZXN0LCB0eXBlKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBpcyBhIGZyYWdtZW50IChhbiBhcnJheSkuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXRJc0ZyYWdtZW50ICh0YXJnZXQpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCB0eXBlIGlzIGNvbnRlbnQvc2xvdC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldElzQ29udGVudCAodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQudHlwZSA9PT0gJ2NvbnRlbnQnIHx8IHRhcmdldC50eXBlID09PSAnc2xvdCdcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgbmVlZCB0byBjb21waWxlIGJ5IGEgbGlzdC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gIG1ldGFcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldE5lZWRDaGVja1JlcGVhdCAodGFyZ2V0LCBtZXRhKSB7XG4gIHJldHVybiAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgncmVwZWF0JykgJiYgdGFyZ2V0LnJlcGVhdFxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBuZWVkIHRvIGNvbXBpbGUgYnkgYSBib29sZWFuIHZhbHVlLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSAgbWV0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0TmVlZENoZWNrU2hvd24gKHRhcmdldCwgbWV0YSkge1xuICByZXR1cm4gIW1ldGEuaGFzT3duUHJvcGVydHkoJ3Nob3duJykgJiYgdGFyZ2V0LnNob3duXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IG5lZWQgdG8gY29tcGlsZSBieSBhIGR5bmFtaWMgdHlwZS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd8ZnVuY3Rpb259IHR5cGVHZXR0ZXJcbiAqIEBwYXJhbSAge29iamVjdH0gICAgICAgICAgbWV0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0TmVlZENoZWNrVHlwZSAodHlwZUdldHRlciwgbWV0YSkge1xuICByZXR1cm4gKHR5cGVvZiB0eXBlR2V0dGVyID09PSAnZnVuY3Rpb24nKSAmJiAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgndHlwZScpXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBraW5kIG9mIGNvbXBvbmVudCBpcyBjb21wb3NlZC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICB0eXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXRJc0NvbXBvc2VkICh2bSwgdGFyZ2V0LCB0eXBlKSB7XG4gIGxldCBjb21wb25lbnRcbiAgaWYgKHZtLl9hcHAgJiYgdm0uX2FwcC5jdXN0b21Db21wb25lbnRNYXApIHtcbiAgICBjb21wb25lbnQgPSB2bS5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcFt0eXBlXVxuICB9XG4gIGlmICh2bS5fb3B0aW9ucyAmJiB2bS5fb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgY29tcG9uZW50ID0gdm0uX29wdGlvbnMuY29tcG9uZW50c1t0eXBlXVxuICB9XG4gIGlmICh0YXJnZXQuY29tcG9uZW50KSB7XG4gICAgY29tcG9uZW50ID0gY29tcG9uZW50IHx8IHt9XG4gIH1cbiAgcmV0dXJuIGNvbXBvbmVudFxufVxuXG4vKipcbiAqIENvbXBpbGUgYSBsaXN0IG9mIHRhcmdldHMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVGcmFnbWVudCAodm0sIHRhcmdldCwgZGVzdCwgbWV0YSkge1xuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcbiAgdGFyZ2V0LmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgY29tcGlsZSh2bSwgY2hpbGQsIGZyYWdCbG9jaywgbWV0YSlcbiAgfSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggcmVwZWF0IGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICovXG5mdW5jdGlvbiBjb21waWxlUmVwZWF0ICh2bSwgdGFyZ2V0LCBkZXN0KSB7XG4gIGNvbnN0IHJlcGVhdCA9IHRhcmdldC5yZXBlYXRcbiAgY29uc3Qgb2xkU3R5bGUgPSB0eXBlb2YgcmVwZWF0ID09PSAnZnVuY3Rpb24nXG4gIGxldCBnZXR0ZXIgPSByZXBlYXQuZ2V0dGVyIHx8IHJlcGVhdC5leHByZXNzaW9uIHx8IHJlcGVhdFxuICBpZiAodHlwZW9mIGdldHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGdldHRlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdIH1cbiAgfVxuICBjb25zdCBrZXkgPSByZXBlYXQua2V5IHx8ICckaW5kZXgnXG4gIGNvbnN0IHZhbHVlID0gcmVwZWF0LnZhbHVlIHx8ICckdmFsdWUnXG4gIGNvbnN0IHRyYWNrQnkgPSByZXBlYXQudHJhY2tCeSB8fCB0YXJnZXQudHJhY2tCeSB8fFxuICAgICh0YXJnZXQuYXR0ciAmJiB0YXJnZXQuYXR0ci50cmFja0J5KVxuXG4gIGNvbnN0IGZyYWdCbG9jayA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuICBmcmFnQmxvY2suY2hpbGRyZW4gPSBbXVxuICBmcmFnQmxvY2suZGF0YSA9IFtdXG4gIGZyYWdCbG9jay52bXMgPSBbXVxuXG4gIGJpbmRSZXBlYXQodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCB7IGdldHRlciwga2V5LCB2YWx1ZSwgdHJhY2tCeSwgb2xkU3R5bGUgfSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggaWYgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gbWV0YVxuICovXG5mdW5jdGlvbiBjb21waWxlU2hvd24gKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgY29uc3QgbmV3TWV0YSA9IHsgc2hvd246IHRydWUgfVxuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcblxuICBpZiAoZGVzdC5lbGVtZW50ICYmIGRlc3QuY2hpbGRyZW4pIHtcbiAgICBkZXN0LmNoaWxkcmVuLnB1c2goZnJhZ0Jsb2NrKVxuICB9XG5cbiAgaWYgKG1ldGEucmVwZWF0KSB7XG4gICAgbmV3TWV0YS5yZXBlYXQgPSBtZXRhLnJlcGVhdFxuICB9XG5cbiAgYmluZFNob3duKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggZHluYW1pYyBjb21wb25lbnQgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gICB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIGRlc3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHR5cGVHZXR0ZXJcbiAqL1xuZnVuY3Rpb24gY29tcGlsZVR5cGUgKHZtLCB0YXJnZXQsIGRlc3QsIHR5cGVHZXR0ZXIsIG1ldGEpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVHZXR0ZXIuY2FsbCh2bSlcbiAgY29uc3QgbmV3TWV0YSA9IGV4dGVuZCh7IHR5cGUgfSwgbWV0YSlcbiAgY29uc3QgZnJhZ0Jsb2NrID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG5cbiAgaWYgKGRlc3QuZWxlbWVudCAmJiBkZXN0LmNoaWxkcmVuKSB7XG4gICAgZGVzdC5jaGlsZHJlbi5wdXNoKGZyYWdCbG9jaylcbiAgfVxuXG4gIHdhdGNoKHZtLCB0eXBlR2V0dGVyLCAodmFsdWUpID0+IHtcbiAgICBjb25zdCBuZXdNZXRhID0gZXh0ZW5kKHsgdHlwZTogdmFsdWUgfSwgbWV0YSlcbiAgICByZW1vdmVUYXJnZXQodm0sIGZyYWdCbG9jaywgdHJ1ZSlcbiAgICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbiAgfSlcblxuICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgY29tcG9zZWQgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICovXG5mdW5jdGlvbiBjb21waWxlQ3VzdG9tQ29tcG9uZW50ICh2bSwgY29tcG9uZW50LCB0YXJnZXQsIGRlc3QsIHR5cGUsIG1ldGEpIHtcbiAgY29uc3QgQ3RvciA9IHZtLmNvbnN0cnVjdG9yXG4gIGNvbnN0IHN1YlZtID0gbmV3IEN0b3IodHlwZSwgY29tcG9uZW50LCB2bSwgZGVzdCwgdW5kZWZpbmVkLCB7XG4gICAgJ2hvb2s6aW5pdCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldElkKHZtLCBudWxsLCB0YXJnZXQuaWQsIHRoaXMpXG4gICAgICAvLyBiaW5kIHRlbXBsYXRlIGVhcmxpZXIgYmVjYXVzZSBvZiBsaWZlY3ljbGUgaXNzdWVzXG4gICAgICB0aGlzLl9leHRlcm5hbEJpbmRpbmcgPSB7XG4gICAgICAgIHBhcmVudDogdm0sXG4gICAgICAgIHRlbXBsYXRlOiB0YXJnZXRcbiAgICAgIH1cbiAgICB9LFxuICAgICdob29rOmNyZWF0ZWQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICBiaW5kU3ViVm0odm0sIHRoaXMsIHRhcmdldCwgbWV0YS5yZXBlYXQpXG4gICAgfSxcbiAgICAnaG9vazpyZWFkeSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLl9jb250ZW50KSB7XG4gICAgICAgIGNvbXBpbGVDaGlsZHJlbih2bSwgdGFyZ2V0LCB0aGlzLl9jb250ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCh2bSwgc3ViVm0sIHRhcmdldClcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBlbGVtZW50IGZyb20gdGVtcGxhdGUgYW5kIGF0dGFjaCB0byB0aGUgZGVzdCBpZiBuZWVkZWQuXG4gKiBUaGUgdGltZSB0byBhdHRhY2ggZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBtb2RlIHN0YXR1cyBpcyBub2RlIG9yIHRyZWUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY29tcGlsZU5hdGl2ZUNvbXBvbmVudCAodm0sIHRlbXBsYXRlLCBkZXN0LCB0eXBlKSB7XG4gIGFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyh0ZW1wbGF0ZSlcblxuICBsZXQgZWxlbWVudFxuICBpZiAoZGVzdC5yZWYgPT09ICdfZG9jdW1lbnRFbGVtZW50Jykge1xuICAgIC8vIGlmIGl0cyBwYXJlbnQgaXMgZG9jdW1lbnRFbGVtZW50IHRoZW4gaXQncyBhIGJvZHlcbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGNyZWF0ZSBib2R5IGZvciAke3R5cGV9YClcbiAgICBlbGVtZW50ID0gY3JlYXRlQm9keSh2bSwgdHlwZSlcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGNyZWF0ZSBlbGVtZW50IGZvciAke3R5cGV9YClcbiAgICBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCh2bSwgdHlwZSlcbiAgfVxuXG4gIGlmICghdm0uX3Jvb3RFbCkge1xuICAgIHZtLl9yb290RWwgPSBlbGVtZW50XG4gICAgLy8gYmluZCBldmVudCBlYXJsaWVyIGJlY2F1c2Ugb2YgbGlmZWN5Y2xlIGlzc3Vlc1xuICAgIGNvbnN0IGJpbmRpbmcgPSB2bS5fZXh0ZXJuYWxCaW5kaW5nIHx8IHt9XG4gICAgY29uc3QgdGFyZ2V0ID0gYmluZGluZy50ZW1wbGF0ZVxuICAgIGNvbnN0IHBhcmVudFZtID0gYmluZGluZy5wYXJlbnRcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5ldmVudHMgJiYgcGFyZW50Vm0gJiYgZWxlbWVudCkge1xuICAgICAgZm9yIChjb25zdCB0eXBlIGluIHRhcmdldC5ldmVudHMpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHBhcmVudFZtW3RhcmdldC5ldmVudHNbdHlwZV1dXG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudCh0eXBlLCBiaW5kKGhhbmRsZXIsIHBhcmVudFZtKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJpbmRFbGVtZW50KHZtLCBlbGVtZW50LCB0ZW1wbGF0ZSlcblxuICBpZiAodGVtcGxhdGUuYXR0ciAmJiB0ZW1wbGF0ZS5hdHRyLmFwcGVuZCkgeyAvLyBiYWNrd2FyZCwgYXBwZW5kIHByb3AgaW4gYXR0clxuICAgIHRlbXBsYXRlLmFwcGVuZCA9IHRlbXBsYXRlLmF0dHIuYXBwZW5kXG4gIH1cblxuICBpZiAodGVtcGxhdGUuYXBwZW5kKSB7IC8vIGdpdmUgdGhlIGFwcGVuZCBhdHRyaWJ1dGUgZm9yIGlvcyBhZGFwdGF0aW9uXG4gICAgZWxlbWVudC5hdHRyID0gZWxlbWVudC5hdHRyIHx8IHt9XG4gICAgZWxlbWVudC5hdHRyLmFwcGVuZCA9IHRlbXBsYXRlLmFwcGVuZFxuICB9XG5cbiAgY29uc3QgdHJlZU1vZGUgPSB0ZW1wbGF0ZS5hcHBlbmQgPT09ICd0cmVlJ1xuICBjb25zdCBhcHAgPSB2bS5fYXBwIHx8IHt9XG4gIGlmIChhcHAubGFzdFNpZ25hbCAhPT0gLTEgJiYgIXRyZWVNb2RlKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBhcHBlbmQgc2luZ2xlIG5vZGUgZm9yJywgZWxlbWVudClcbiAgICBhcHAubGFzdFNpZ25hbCA9IGF0dGFjaFRhcmdldCh2bSwgZWxlbWVudCwgZGVzdClcbiAgfVxuICBpZiAoYXBwLmxhc3RTaWduYWwgIT09IC0xKSB7XG4gICAgY29tcGlsZUNoaWxkcmVuKHZtLCB0ZW1wbGF0ZSwgZWxlbWVudClcbiAgfVxuICBpZiAoYXBwLmxhc3RTaWduYWwgIT09IC0xICYmIHRyZWVNb2RlKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBhcHBlbmQgd2hvbGUgdHJlZSBmb3InLCBlbGVtZW50KVxuICAgIGFwcC5sYXN0U2lnbmFsID0gYXR0YWNoVGFyZ2V0KHZtLCBlbGVtZW50LCBkZXN0KVxuICB9XG59XG5cbi8qKlxuICogU2V0IGFsbCBjaGlsZHJlbiB0byBhIGNlcnRhaW4gcGFyZW50IGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICovXG5mdW5jdGlvbiBjb21waWxlQ2hpbGRyZW4gKHZtLCB0ZW1wbGF0ZSwgZGVzdCkge1xuICBjb25zdCBhcHAgPSB2bS5fYXBwIHx8IHt9XG4gIGNvbnN0IGNoaWxkcmVuID0gdGVtcGxhdGUuY2hpbGRyZW5cbiAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgIGNoaWxkcmVuLmV2ZXJ5KChjaGlsZCkgPT4ge1xuICAgICAgY29tcGlsZSh2bSwgY2hpbGQsIGRlc3QpXG4gICAgICByZXR1cm4gYXBwLmxhc3RTaWduYWwgIT09IC0xXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIFdhdGNoIHRoZSBsaXN0IHVwZGF0ZSBhbmQgcmVmcmVzaCB0aGUgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZnJhZ0Jsb2NrIHt2bXMsIGRhdGEsIGNoaWxkcmVufVxuICogQHBhcmFtIHtvYmplY3R9IGluZm8gICAgICB7Z2V0dGVyLCBrZXksIHZhbHVlLCB0cmFja0J5LCBvbGRTdHlsZX1cbiAqL1xuZnVuY3Rpb24gYmluZFJlcGVhdCAodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBpbmZvKSB7XG4gIGNvbnN0IHZtcyA9IGZyYWdCbG9jay52bXNcbiAgY29uc3QgY2hpbGRyZW4gPSBmcmFnQmxvY2suY2hpbGRyZW5cbiAgY29uc3QgeyBnZXR0ZXIsIHRyYWNrQnksIG9sZFN0eWxlIH0gPSBpbmZvXG4gIGNvbnN0IGtleU5hbWUgPSBpbmZvLmtleVxuICBjb25zdCB2YWx1ZU5hbWUgPSBpbmZvLnZhbHVlXG5cbiAgZnVuY3Rpb24gY29tcGlsZUl0ZW0gKGl0ZW0sIGluZGV4LCBjb250ZXh0KSB7XG4gICAgbGV0IG1lcmdlZERhdGFcbiAgICBpZiAob2xkU3R5bGUpIHtcbiAgICAgIG1lcmdlZERhdGEgPSBpdGVtXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgbWVyZ2VkRGF0YVtrZXlOYW1lXSA9IGluZGV4XG4gICAgICAgIGlmICghbWVyZ2VkRGF0YS5oYXNPd25Qcm9wZXJ0eSgnSU5ERVgnKSkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZXJnZWREYXRhLCAnSU5ERVgnLCB7XG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFwiSU5ERVhcIiBpbiByZXBlYXQgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgICAgICAgJ3BsZWFzZSB1c2UgXCIkaW5kZXhcIiBpbnN0ZWFkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBFYWNoIGxpc3QgaXRlbSBtdXN0IGJlIGFuIG9iamVjdCBpbiBvbGQtc3R5bGUgcmVwZWF0LCAnXG4gICAgICAgICAgKyAncGxlYXNlIHVzZSBgcmVwZWF0PXt7diBpbiBsaXN0fX1gIGluc3RlYWQuJylcbiAgICAgICAgbWVyZ2VkRGF0YSA9IHt9XG4gICAgICAgIG1lcmdlZERhdGFba2V5TmFtZV0gPSBpbmRleFxuICAgICAgICBtZXJnZWREYXRhW3ZhbHVlTmFtZV0gPSBpdGVtXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbWVyZ2VkRGF0YSA9IHt9XG4gICAgICBtZXJnZWREYXRhW2tleU5hbWVdID0gaW5kZXhcbiAgICAgIG1lcmdlZERhdGFbdmFsdWVOYW1lXSA9IGl0ZW1cbiAgICB9XG4gICAgY29uc3QgbmV3Q29udGV4dCA9IG1lcmdlQ29udGV4dChjb250ZXh0LCBtZXJnZWREYXRhKVxuICAgIHZtcy5wdXNoKG5ld0NvbnRleHQpXG4gICAgY29tcGlsZShuZXdDb250ZXh0LCB0YXJnZXQsIGZyYWdCbG9jaywgeyByZXBlYXQ6IGl0ZW0gfSlcbiAgfVxuXG4gIGNvbnN0IGxpc3QgPSB3YXRjaEJsb2NrKHZtLCBmcmFnQmxvY2ssIGdldHRlciwgJ3JlcGVhdCcsXG4gICAgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIHRoZSBcInJlcGVhdFwiIGl0ZW0gaGFzIGNoYW5nZWQnLCBkYXRhKVxuICAgICAgaWYgKCFmcmFnQmxvY2sgfHwgIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9sZENoaWxkcmVuID0gY2hpbGRyZW4uc2xpY2UoKVxuICAgICAgY29uc3Qgb2xkVm1zID0gdm1zLnNsaWNlKClcbiAgICAgIGNvbnN0IG9sZERhdGEgPSBmcmFnQmxvY2suZGF0YS5zbGljZSgpXG4gICAgICAvLyAxLiBjb2xsZWN0IGFsbCBuZXcgcmVmcyB0cmFjayBieVxuICAgICAgY29uc3QgdHJhY2tNYXAgPSB7fVxuICAgICAgY29uc3QgcmV1c2VkTWFwID0ge31cbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHJhY2tCeSA/IGl0ZW1bdHJhY2tCeV0gOiAob2xkU3R5bGUgPyBpdGVtW2tleU5hbWVdIDogaW5kZXgpXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoa2V5ID09IG51bGwgfHwga2V5ID09PSAnJykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRyYWNrTWFwW2tleV0gPSBpdGVtXG4gICAgICB9KVxuXG4gICAgICAvLyAyLiByZW1vdmUgdW51c2VkIGVsZW1lbnQgZm9yZWFjaCBvbGQgaXRlbVxuICAgICAgY29uc3QgcmV1c2VkTGlzdCA9IFtdXG4gICAgICBvbGREYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRyYWNrQnkgPyBpdGVtW3RyYWNrQnldIDogKG9sZFN0eWxlID8gaXRlbVtrZXlOYW1lXSA6IGluZGV4KVxuICAgICAgICBpZiAodHJhY2tNYXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHJldXNlZE1hcFtrZXldID0ge1xuICAgICAgICAgICAgaXRlbSwgaW5kZXgsIGtleSxcbiAgICAgICAgICAgIHRhcmdldDogb2xkQ2hpbGRyZW5baW5kZXhdLFxuICAgICAgICAgICAgdm06IG9sZFZtc1tpbmRleF1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV1c2VkTGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmVtb3ZlVGFyZ2V0KHZtLCBvbGRDaGlsZHJlbltpbmRleF0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIDMuIGNyZWF0ZSBuZXcgZWxlbWVudCBmb3JlYWNoIG5ldyBpdGVtXG4gICAgICBjaGlsZHJlbi5sZW5ndGggPSAwXG4gICAgICB2bXMubGVuZ3RoID0gMFxuICAgICAgZnJhZ0Jsb2NrLmRhdGEgPSBkYXRhLnNsaWNlKClcbiAgICAgIGZyYWdCbG9jay51cGRhdGVNYXJrID0gZnJhZ0Jsb2NrLnN0YXJ0XG5cbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHJhY2tCeSA/IGl0ZW1bdHJhY2tCeV0gOiAob2xkU3R5bGUgPyBpdGVtW2tleU5hbWVdIDogaW5kZXgpXG4gICAgICAgIGNvbnN0IHJldXNlZCA9IHJldXNlZE1hcFtrZXldXG4gICAgICAgIGlmIChyZXVzZWQpIHtcbiAgICAgICAgICBpZiAocmV1c2VkLml0ZW0gPT09IHJldXNlZExpc3RbMF0pIHtcbiAgICAgICAgICAgIHJldXNlZExpc3Quc2hpZnQoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldXNlZExpc3QuJHJlbW92ZShyZXVzZWQuaXRlbSlcbiAgICAgICAgICAgIG1vdmVUYXJnZXQodm0sIHJldXNlZC50YXJnZXQsIGZyYWdCbG9jay51cGRhdGVNYXJrLCB0cnVlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKHJldXNlZC50YXJnZXQpXG4gICAgICAgICAgdm1zLnB1c2gocmV1c2VkLnZtKVxuICAgICAgICAgIGlmIChvbGRTdHlsZSkge1xuICAgICAgICAgICAgcmV1c2VkLnZtID0gaXRlbVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldXNlZC52bVt2YWx1ZU5hbWVdID0gaXRlbVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXVzZWQudm1ba2V5TmFtZV0gPSBpbmRleFxuICAgICAgICAgIGZyYWdCbG9jay51cGRhdGVNYXJrID0gcmV1c2VkLnRhcmdldFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbXBpbGVJdGVtKGl0ZW0sIGluZGV4LCB2bSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgZGVsZXRlIGZyYWdCbG9jay51cGRhdGVNYXJrXG4gICAgfVxuICApXG5cbiAgZnJhZ0Jsb2NrLmRhdGEgPSBsaXN0LnNsaWNlKDApXG4gIGxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBjb21waWxlSXRlbShpdGVtLCBpbmRleCwgdm0pXG4gIH0pXG59XG5cbi8qKlxuICogV2F0Y2ggdGhlIGRpc3BsYXkgdXBkYXRlIGFuZCBhZGQvcmVtb3ZlIHRoZSBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9IGZyYWdCbG9ja1xuICogQHBhcmFtICB7b2JqZWN0fSBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGJpbmRTaG93biAodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKSB7XG4gIGNvbnN0IGRpc3BsYXkgPSB3YXRjaEJsb2NrKHZtLCBmcmFnQmxvY2ssIHRhcmdldC5zaG93biwgJ3Nob3duJyxcbiAgICAoZGlzcGxheSkgPT4ge1xuICAgICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gdGhlIFwiaWZcIiBpdGVtIHdhcyBjaGFuZ2VkJywgZGlzcGxheSlcblxuICAgICAgaWYgKCFmcmFnQmxvY2sgfHwgISFmcmFnQmxvY2suZGlzcGxheSA9PT0gISFkaXNwbGF5KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZnJhZ0Jsb2NrLmRpc3BsYXkgPSAhIWRpc3BsYXlcbiAgICAgIGlmIChkaXNwbGF5KSB7XG4gICAgICAgIGNvbXBpbGUodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlbW92ZVRhcmdldCh2bSwgZnJhZ0Jsb2NrLCB0cnVlKVxuICAgICAgfVxuICAgIH1cbiAgKVxuXG4gIGZyYWdCbG9jay5kaXNwbGF5ID0gISFkaXNwbGF5XG4gIGlmIChkaXNwbGF5KSB7XG4gICAgY29tcGlsZSh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG1ldGEpXG4gIH1cbn1cblxuLyoqXG4gKiBXYXRjaCBjYWxjIHZhbHVlIGNoYW5nZXMgYW5kIGFwcGVuZCBjZXJ0YWluIHR5cGUgYWN0aW9uIHRvIGRpZmZlci5cbiAqIEl0IGlzIHVzZWQgZm9yIGlmIG9yIHJlcGVhdCBkYXRhLWJpbmRpbmcgZ2VuZXJhdG9yLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gICBmcmFnQmxvY2tcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBjYWxjXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgdHlwZVxuICogQHBhcmFtICB7ZnVuY3Rpb259IGhhbmRsZXJcbiAqIEByZXR1cm4ge2FueX0gICAgICBpbml0IHZhbHVlIG9mIGNhbGNcbiAqL1xuZnVuY3Rpb24gd2F0Y2hCbG9jayAodm0sIGZyYWdCbG9jaywgY2FsYywgdHlwZSwgaGFuZGxlcikge1xuICBjb25zdCBkaWZmZXIgPSB2bSAmJiB2bS5fYXBwICYmIHZtLl9hcHAuZGlmZmVyXG4gIGNvbnN0IGNvbmZpZyA9IHt9XG4gIGNvbnN0IGRlcHRoID0gKGZyYWdCbG9jay5lbGVtZW50LmRlcHRoIHx8IDApICsgMVxuXG4gIHJldHVybiB3YXRjaCh2bSwgY2FsYywgKHZhbHVlKSA9PiB7XG4gICAgY29uZmlnLmxhdGVzdFZhbHVlID0gdmFsdWVcbiAgICBpZiAoZGlmZmVyICYmICFjb25maWcucmVjb3JkZWQpIHtcbiAgICAgIGRpZmZlci5hcHBlbmQodHlwZSwgZGVwdGgsIGZyYWdCbG9jay5ibG9ja0lkLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhdGVzdFZhbHVlID0gY29uZmlnLmxhdGVzdFZhbHVlXG4gICAgICAgIGhhbmRsZXIobGF0ZXN0VmFsdWUpXG4gICAgICAgIGNvbmZpZy5yZWNvcmRlZCA9IGZhbHNlXG4gICAgICAgIGNvbmZpZy5sYXRlc3RWYWx1ZSA9IHVuZGVmaW5lZFxuICAgICAgfSlcbiAgICB9XG4gICAgY29uZmlnLnJlY29yZGVkID0gdHJ1ZVxuICB9KVxufVxuXG4vKipcbiAqIENsb25lIGEgY29udGV4dCBhbmQgbWVyZ2UgY2VydGFpbiBkYXRhLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gbWVyZ2VkRGF0YVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5mdW5jdGlvbiBtZXJnZUNvbnRleHQgKGNvbnRleHQsIG1lcmdlZERhdGEpIHtcbiAgY29uc3QgbmV3Q29udGV4dCA9IE9iamVjdC5jcmVhdGUoY29udGV4dClcbiAgbmV3Q29udGV4dC5fZGF0YSA9IG1lcmdlZERhdGFcbiAgaW5pdERhdGEobmV3Q29udGV4dClcbiAgaW5pdENvbXB1dGVkKG5ld0NvbnRleHQpXG4gIG5ld0NvbnRleHQuX3JlYWxQYXJlbnQgPSBjb250ZXh0XG4gIHJldHVybiBuZXdDb250ZXh0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvdm0vY29tcGlsZXIuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIERpcmVjdGl2ZSBQYXJzZXJcbiAqL1xuXG5pbXBvcnQgeyBiaW5kLCB0eXBvZiB9IGZyb20gJy4uL3V0aWwnXG5cbmltcG9ydCBXYXRjaGVyIGZyb20gJy4uL2NvcmUvd2F0Y2hlcidcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuXG5jb25zdCB7IG5hdGl2ZUNvbXBvbmVudE1hcCB9ID0gY29uZmlnXG5cbmNvbnN0IFNFVFRFUlMgPSB7XG4gIGF0dHI6ICdzZXRBdHRyJyxcbiAgc3R5bGU6ICdzZXRTdHlsZScsXG4gIGV2ZW50OiAnYWRkRXZlbnQnXG59XG5cbi8qKlxuICogYXBwbHkgdGhlIG5hdGl2ZSBjb21wb25lbnQncyBvcHRpb25zKHNwZWNpZmllZCBieSB0ZW1wbGF0ZS50eXBlKVxuICogdG8gdGhlIHRlbXBsYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseU5haXR2ZUNvbXBvbmVudE9wdGlvbnMgKHRlbXBsYXRlKSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gdGVtcGxhdGVcbiAgY29uc3Qgb3B0aW9ucyA9IG5hdGl2ZUNvbXBvbmVudE1hcFt0eXBlXVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAodGVtcGxhdGVba2V5XSA9PSBudWxsKSB7XG4gICAgICAgIHRlbXBsYXRlW2tleV0gPSBvcHRpb25zW2tleV1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cG9mKHRlbXBsYXRlW2tleV0pID09PSAnb2JqZWN0JyAmJlxuICAgICAgICB0eXBvZihvcHRpb25zW2tleV0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKGNvbnN0IHN1YmtleSBpbiBvcHRpb25zW2tleV0pIHtcbiAgICAgICAgICBpZiAodGVtcGxhdGVba2V5XVtzdWJrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlW2tleV1bc3Via2V5XSA9IG9wdGlvbnNba2V5XVtzdWJrZXldXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogYmluZCBhbGwgaWQsIGF0dHIsIGNsYXNzbmFtZXMsIHN0eWxlLCBldmVudHMgdG8gYW4gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZEVsZW1lbnQgKHZtLCBlbCwgdGVtcGxhdGUpIHtcbiAgc2V0SWQodm0sIGVsLCB0ZW1wbGF0ZS5pZCwgdm0pXG4gIHNldEF0dHIodm0sIGVsLCB0ZW1wbGF0ZS5hdHRyKVxuICBzZXRDbGFzcyh2bSwgZWwsIHRlbXBsYXRlLmNsYXNzTGlzdClcbiAgc2V0U3R5bGUodm0sIGVsLCB0ZW1wbGF0ZS5zdHlsZSlcbiAgYmluZEV2ZW50cyh2bSwgZWwsIHRlbXBsYXRlLmV2ZW50cylcbn1cblxuLyoqXG4gKiBiaW5kIGFsbCBwcm9wcyB0byBzdWIgdm0gYW5kIGJpbmQgYWxsIHN0eWxlLCBldmVudHMgdG8gdGhlIHJvb3QgZWxlbWVudFxuICogb2YgdGhlIHN1YiB2bSBpZiBpdCBkb2Vzbid0IGhhdmUgYSByZXBsYWNlZCBtdWx0aS1ub2RlIGZyYWdtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kU3ViVm0gKHZtLCBzdWJWbSwgdGVtcGxhdGUsIHJlcGVhdEl0ZW0pIHtcbiAgc3ViVm0gPSBzdWJWbSB8fCB7fVxuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlIHx8IHt9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHN1YlZtLl9vcHRpb25zIHx8IHt9XG5cbiAgLy8gYmluZCBwcm9wc1xuICBsZXQgcHJvcHMgPSBvcHRpb25zLnByb3BzXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgcHJvcHMgPSBwcm9wcy5yZWR1Y2UoKHJlc3VsdCwgdmFsdWUpID0+IHtcbiAgICAgIHJlc3VsdFt2YWx1ZV0gPSB0cnVlXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSwge30pXG4gIH1cblxuICBtZXJnZVByb3BzKHJlcGVhdEl0ZW0sIHByb3BzLCB2bSwgc3ViVm0pXG4gIG1lcmdlUHJvcHModGVtcGxhdGUuYXR0ciwgcHJvcHMsIHZtLCBzdWJWbSlcbn1cblxuLyoqXG4gKiBtZXJnZSBjbGFzcyBhbmQgc3R5bGVzIGZyb20gdm0gdG8gc3ViIHZtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCAodm0sIHN1YlZtLCB0ZW1wbGF0ZSkge1xuICBtZXJnZUNsYXNzU3R5bGUodGVtcGxhdGUuY2xhc3NMaXN0LCB2bSwgc3ViVm0pXG4gIG1lcmdlU3R5bGUodGVtcGxhdGUuc3R5bGUsIHZtLCBzdWJWbSlcbn1cblxuLyoqXG4gKiBCaW5kIHByb3BzIGZyb20gdm0gdG8gc3ViIHZtIGFuZCB3YXRjaCB0aGVpciB1cGRhdGVzLlxuICovXG5mdW5jdGlvbiBtZXJnZVByb3BzICh0YXJnZXQsIHByb3BzLCB2bSwgc3ViVm0pIHtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm5cbiAgfVxuICBmb3IgKGNvbnN0IGtleSBpbiB0YXJnZXQpIHtcbiAgICBpZiAoIXByb3BzIHx8IHByb3BzW2tleV0pIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0W2tleV1cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSB3YXRjaCh2bSwgdmFsdWUsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgc3ViVm1ba2V5XSA9IHZcbiAgICAgICAgfSlcbiAgICAgICAgc3ViVm1ba2V5XSA9IHJldHVyblZhbHVlXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3ViVm1ba2V5XSA9IHZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQmluZCBzdHlsZSBmcm9tIHZtIHRvIHN1YiB2bSBhbmQgd2F0Y2ggdGhlaXIgdXBkYXRlcy5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VTdHlsZSAodGFyZ2V0LCB2bSwgc3ViVm0pIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXRba2V5XVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gd2F0Y2godm0sIHZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgICAgICBpZiAoc3ViVm0uX3Jvb3RFbCkge1xuICAgICAgICAgIHN1YlZtLl9yb290RWwuc2V0U3R5bGUoa2V5LCB2KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgc3ViVm0uX3Jvb3RFbC5zZXRTdHlsZShrZXksIHJldHVyblZhbHVlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChzdWJWbS5fcm9vdEVsKSB7XG4gICAgICAgIHN1YlZtLl9yb290RWwuc2V0U3R5bGUoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBCaW5kIGNsYXNzICYgc3R5bGUgZnJvbSB2bSB0byBzdWIgdm0gYW5kIHdhdGNoIHRoZWlyIHVwZGF0ZXMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlQ2xhc3NTdHlsZSAodGFyZ2V0LCB2bSwgc3ViVm0pIHtcbiAgY29uc3QgY3NzID0gdm0uX29wdGlvbnMgJiYgdm0uX29wdGlvbnMuc3R5bGUgfHwge31cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFzdWJWbS5fcm9vdEVsKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBjbGFzc05hbWUgPSAnQG9yaWdpbmFsUm9vdEVsJ1xuICBjc3NbY2xhc3NOYW1lXSA9IHN1YlZtLl9yb290RWwuY2xhc3NTdHlsZVxuXG4gIGZ1bmN0aW9uIGFkZENsYXNzTmFtZSAobGlzdCwgbmFtZSkge1xuICAgIGlmICh0eXBvZihsaXN0KSA9PT0gJ2FycmF5Jykge1xuICAgICAgbGlzdC51bnNoaWZ0KG5hbWUpXG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHdhdGNoKHZtLCB0YXJnZXQsIHYgPT4ge1xuICAgICAgYWRkQ2xhc3NOYW1lKHYsIGNsYXNzTmFtZSlcbiAgICAgIHNldENsYXNzU3R5bGUoc3ViVm0uX3Jvb3RFbCwgY3NzLCB2KVxuICAgIH0pXG4gICAgYWRkQ2xhc3NOYW1lKHZhbHVlLCBjbGFzc05hbWUpXG4gICAgc2V0Q2xhc3NTdHlsZShzdWJWbS5fcm9vdEVsLCBjc3MsIHZhbHVlKVxuICB9XG4gIGVsc2UgaWYgKHRhcmdldCAhPSBudWxsKSB7XG4gICAgYWRkQ2xhc3NOYW1lKHRhcmdldCwgY2xhc3NOYW1lKVxuICAgIHNldENsYXNzU3R5bGUoc3ViVm0uX3Jvb3RFbCwgY3NzLCB0YXJnZXQpXG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIGlkIHRvIGFuIGVsZW1lbnRcbiAqIGVhY2ggaWQgaXMgdW5pcXVlIGluIGEgd2hvbGUgdm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldElkICh2bSwgZWwsIGlkLCB0YXJnZXQpIHtcbiAgY29uc3QgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1hcCwge1xuICAgIHZtOiB7XG4gICAgICB2YWx1ZTogdGFyZ2V0LFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgIH0sXG4gICAgZWw6IHtcbiAgICAgIGdldDogKCkgPT4gZWwgfHwgdGFyZ2V0Ll9yb290RWwsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgfVxuICB9KVxuXG4gIGlmICh0eXBlb2YgaWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gaWRcbiAgICBpZCA9IGhhbmRsZXIuY2FsbCh2bSlcbiAgICBpZiAoaWQpIHtcbiAgICAgIHZtLl9pZHNbaWRdID0gbWFwXG4gICAgfVxuICAgIHdhdGNoKHZtLCBoYW5kbGVyLCAobmV3SWQpID0+IHtcbiAgICAgIGlmIChuZXdJZCkge1xuICAgICAgICB2bS5faWRzW25ld0lkXSA9IG1hcFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZWxzZSBpZiAoaWQgJiYgdHlwZW9mIGlkID09PSAnc3RyaW5nJykge1xuICAgIHZtLl9pZHNbaWRdID0gbWFwXG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIGF0dHIgdG8gYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRBdHRyICh2bSwgZWwsIGF0dHIpIHtcbiAgYmluZERpcih2bSwgZWwsICdhdHRyJywgYXR0cilcbn1cblxuZnVuY3Rpb24gc2V0Q2xhc3NTdHlsZSAoZWwsIGNzcywgY2xhc3NMaXN0KSB7XG4gIGNvbnN0IGNsYXNzU3R5bGUgPSB7fVxuICBjb25zdCBsZW5ndGggPSBjbGFzc0xpc3QubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHN0eWxlID0gY3NzW2NsYXNzTGlzdFtpXV1cbiAgICBpZiAoc3R5bGUpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlKSB7XG4gICAgICAgIGNsYXNzU3R5bGVba2V5XSA9IHN0eWxlW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWwuc2V0Q2xhc3NTdHlsZShjbGFzc1N0eWxlKVxufVxuXG4vKipcbiAqIGJpbmQgY2xhc3NuYW1lcyB0byBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHNldENsYXNzICh2bSwgZWwsIGNsYXNzTGlzdCkge1xuICBpZiAodHlwZW9mIGNsYXNzTGlzdCAhPT0gJ2Z1bmN0aW9uJyAmJiAhQXJyYXkuaXNBcnJheShjbGFzc0xpc3QpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NMaXN0KSAmJiAhY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgIGVsLnNldENsYXNzU3R5bGUoe30pXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBzdHlsZSA9IHZtLl9vcHRpb25zICYmIHZtLl9vcHRpb25zLnN0eWxlIHx8IHt9XG4gIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgdmFsdWUgPSB3YXRjaCh2bSwgY2xhc3NMaXN0LCB2ID0+IHtcbiAgICAgIHNldENsYXNzU3R5bGUoZWwsIHN0eWxlLCB2KVxuICAgIH0pXG4gICAgc2V0Q2xhc3NTdHlsZShlbCwgc3R5bGUsIHZhbHVlKVxuICB9XG4gIGVsc2Uge1xuICAgIHNldENsYXNzU3R5bGUoZWwsIHN0eWxlLCBjbGFzc0xpc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIHN0eWxlIHRvIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0U3R5bGUgKHZtLCBlbCwgc3R5bGUpIHtcbiAgYmluZERpcih2bSwgZWwsICdzdHlsZScsIHN0eWxlKVxufVxuXG4vKipcbiAqIGFkZCBhbiBldmVudCB0eXBlIGFuZCBoYW5kbGVyIHRvIGFuIGVsZW1lbnQgYW5kIGdlbmVyYXRlIGEgZG9tIHVwZGF0ZVxuICovXG5mdW5jdGlvbiBzZXRFdmVudCAodm0sIGVsLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGVsLmFkZEV2ZW50KHR5cGUsIGJpbmQoaGFuZGxlciwgdm0pKVxufVxuXG4vKipcbiAqIGFkZCBhbGwgZXZlbnRzIG9mIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gYmluZEV2ZW50cyAodm0sIGVsLCBldmVudHMpIHtcbiAgaWYgKCFldmVudHMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKVxuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgbGV0IGhhbmRsZXIgPSBldmVudHNba2V5XVxuICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGhhbmRsZXIgPSB2bVtoYW5kbGVyXVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gVGhlIG1ldGhvZCBcIiR7aGFuZGxlcn1cIiBpcyBub3QgZGVmaW5lZC5gKVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRFdmVudCh2bSwgZWwsIGtleSwgaGFuZGxlcilcbiAgfVxufVxuXG4vKipcbiAqIHNldCBhIHNlcmllcyBvZiBtZW1iZXJzIGFzIGEga2luZCBvZiBhbiBlbGVtZW50XG4gKiBmb3IgZXhhbXBsZTogc3R5bGUsIGF0dHIsIC4uLlxuICogaWYgdGhlIHZhbHVlIGlzIGEgZnVuY3Rpb24gdGhlbiBiaW5kIHRoZSBkYXRhIGNoYW5nZXNcbiAqL1xuZnVuY3Rpb24gYmluZERpciAodm0sIGVsLCBuYW1lLCBkYXRhKSB7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKVxuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgY29uc3QgdmFsdWUgPSBkYXRhW2tleV1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBiaW5kS2V5KHZtLCBlbCwgbmFtZSwga2V5LCB2YWx1ZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbFtTRVRURVJTW25hbWVdXShrZXksIHZhbHVlKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgZGF0YSBjaGFuZ2VzIHRvIGEgY2VydGFpbiBrZXkgdG8gYSBuYW1lIHNlcmllcyBpbiBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGJpbmRLZXkgKHZtLCBlbCwgbmFtZSwga2V5LCBjYWxjKSB7XG4gIGNvbnN0IG1ldGhvZE5hbWUgPSBTRVRURVJTW25hbWVdXG4gIC8vIHdhdGNoIHRoZSBjYWxjLCBhbmQgcmV0dXJucyBhIHZhbHVlIGJ5IGNhbGMuY2FsbCgpXG4gIGNvbnN0IHZhbHVlID0gd2F0Y2godm0sIGNhbGMsICh2YWx1ZSkgPT4ge1xuICAgIGZ1bmN0aW9uIGhhbmRsZXIgKCkge1xuICAgICAgZWxbbWV0aG9kTmFtZV0oa2V5LCB2YWx1ZSlcbiAgICB9XG4gICAgY29uc3QgZGlmZmVyID0gdm0gJiYgdm0uX2FwcCAmJiB2bS5fYXBwLmRpZmZlclxuICAgIGlmIChkaWZmZXIpIHtcbiAgICAgIGRpZmZlci5hcHBlbmQoJ2VsZW1lbnQnLCBlbC5kZXB0aCwgZWwucmVmLCBoYW5kbGVyKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGhhbmRsZXIoKVxuICAgIH1cbiAgfSlcblxuICBlbFttZXRob2ROYW1lXShrZXksIHZhbHVlKVxufVxuXG4vKipcbiAqIHdhdGNoIGEgY2FsYyBmdW5jdGlvbiBhbmQgY2FsbGJhY2sgaWYgdGhlIGNhbGMgdmFsdWUgY2hhbmdlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gd2F0Y2ggKHZtLCBjYWxjLCBjYWxsYmFjaykge1xuICBjb25zdCB3YXRjaGVyID0gbmV3IFdhdGNoZXIodm0sIGNhbGMsIGZ1bmN0aW9uICh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyAmJiB2YWx1ZSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjYWxsYmFjayh2YWx1ZSlcbiAgfSlcblxuICByZXR1cm4gd2F0Y2hlci52YWx1ZVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3ZtL2RpcmVjdGl2ZS5qc1xuICoqLyIsIi8vIEB0b2RvOiBJdCBzaG91bGQgYmUgcmVnaXN0ZXJlZCBieSBuYXRpdmUgZnJvbSBgcmVnaXN0ZXJDb21wb25lbnRzKClgLlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYXRpdmVDb21wb25lbnRNYXA6IHtcbiAgICB0ZXh0OiB0cnVlLFxuICAgIGltYWdlOiB0cnVlLFxuICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICBzbGlkZXI6IHtcbiAgICAgIHR5cGU6ICdzbGlkZXInLFxuICAgICAgYXBwZW5kOiAndHJlZSdcbiAgICB9LFxuICAgIGNlbGw6IHtcbiAgICAgIHR5cGU6ICdjZWxsJyxcbiAgICAgIGFwcGVuZDogJ3RyZWUnXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29uZmlnLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IERvY3VtZW50ICYgRWxlbWVudCBIZWxwZXJzLlxuICpcbiAqIHJlcXVpcmVkOlxuICogRG9jdW1lbnQjOiBjcmVhdGVFbGVtZW50LCBjcmVhdGVDb21tZW50LCBnZXRSZWZcbiAqIEVsZW1lbnQjOiBhcHBlbmRDaGlsZCwgaW5zZXJ0QmVmb3JlLCByZW1vdmVDaGlsZCwgbmV4dFNpYmxpbmdcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIGJvZHkgYnkgdHlwZVxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm9keSAodm0sIHR5cGUpIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgcmV0dXJuIGRvYy5jcmVhdGVCb2R5KHR5cGUpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGVsZW1lbnQgYnkgdHlwZVxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAodm0sIHR5cGUpIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgcmV0dXJuIGRvYy5jcmVhdGVFbGVtZW50KHR5cGUpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBmcmFnIGJsb2NrIGZvciBhbiBlbGVtZW50LlxuICogVGhlIGZyYWcgYmxvY2sgaGFzIGEgc3RhcnRlciwgZW5kZXIgYW5kIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJsb2NrICh2bSwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydCA9IGNyZWF0ZUJsb2NrU3RhcnQodm0pXG4gIGNvbnN0IGVuZCA9IGNyZWF0ZUJsb2NrRW5kKHZtKVxuICBjb25zdCBibG9ja0lkID0gbGFzdGVzdEJsb2NrSWQrK1xuICBpZiAoZWxlbWVudC5lbGVtZW50KSB7XG4gICAgbGV0IHVwZGF0ZU1hcmsgPSBlbGVtZW50LnVwZGF0ZU1hcmtcbiAgICBpZiAodXBkYXRlTWFyaykge1xuICAgICAgaWYgKHVwZGF0ZU1hcmsuZWxlbWVudCkge1xuICAgICAgICB1cGRhdGVNYXJrID0gdXBkYXRlTWFyay5lbmRcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRBZnRlcihlbmQsIHVwZGF0ZU1hcmspXG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QWZ0ZXIoc3RhcnQsIHVwZGF0ZU1hcmspXG4gICAgICBlbGVtZW50LnVwZGF0ZU1hcmsgPSBlbmRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHN0YXJ0LCBlbGVtZW50LmVuZClcbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRCZWZvcmUoZW5kLCBlbGVtZW50LmVuZClcbiAgICB9XG4gICAgZWxlbWVudCA9IGVsZW1lbnQuZWxlbWVudFxuICB9XG4gIGVsc2Uge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3RhcnQpXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbmQpXG4gIH1cbiAgcmV0dXJuIHsgc3RhcnQsIGVuZCwgZWxlbWVudCwgYmxvY2tJZCB9XG59XG5cbmxldCBsYXN0ZXN0QmxvY2tJZCA9IDFcblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGJsb2NrIHN0YXJ0ZXIuXG4gKiBVc2luZyB0aGlzLl9hcHAuZG9jXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrU3RhcnQgKHZtKSB7XG4gIGNvbnN0IGRvYyA9IHZtLl9hcHAuZG9jXG4gIGNvbnN0IGFuY2hvciA9IGRvYy5jcmVhdGVDb21tZW50KCdzdGFydCcpXG4gIHJldHVybiBhbmNob3Jcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGJsb2NrIGVuZGVyLlxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICovXG5mdW5jdGlvbiBjcmVhdGVCbG9ja0VuZCAodm0pIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgY29uc3QgYW5jaG9yID0gZG9jLmNyZWF0ZUNvbW1lbnQoJ2VuZCcpXG4gIHJldHVybiBhbmNob3Jcbn1cblxuLyoqXG4gKiBBdHRhY2ggdGFyZ2V0IHRvIGEgY2VydGFpbiBkZXN0IHVzaW5nIGFwcGVuZENoaWxkIGJ5IGRlZmF1bHQuXG4gKiBJZiB0aGUgZGVzdCBpcyBhIGZyYWcgYmxvY2sgdGhlbiBpbnNlcnQgYmVmb3JlIHRoZSBlbmRlci5cbiAqIElmIHRoZSB0YXJnZXQgaXMgYSBmcmFnIGJsb2NrIHRoZW4gYXR0YWNoIHRoZSBzdGFydGVyIGFuZCBlbmRlciBpbiBvcmRlci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBkZXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hUYXJnZXQgKHZtLCB0YXJnZXQsIGRlc3QpIHtcbiAgaWYgKGRlc3QuZWxlbWVudCkge1xuICAgIGNvbnN0IGJlZm9yZSA9IGRlc3QuZW5kXG4gICAgY29uc3QgYWZ0ZXIgPSBkZXN0LnVwZGF0ZU1hcmtcbiAgICAvLyBwdXNoIG5ldyB0YXJnZXQgZm9yIHdhdGNoIGxpc3QgdXBkYXRlIGxhdGVyXG4gICAgaWYgKGRlc3QuY2hpbGRyZW4pIHtcbiAgICAgIGRlc3QuY2hpbGRyZW4ucHVzaCh0YXJnZXQpXG4gICAgfVxuICAgIC8vIGZvciBjaGVjayByZXBlYXQgY2FzZVxuICAgIGlmIChhZnRlcikge1xuICAgICAgY29uc3Qgc2lnbmFsID0gbW92ZVRhcmdldCh2bSwgdGFyZ2V0LCBhZnRlcilcbiAgICAgIGRlc3QudXBkYXRlTWFyayA9IHRhcmdldC5lbGVtZW50ID8gdGFyZ2V0LmVuZCA6IHRhcmdldFxuICAgICAgcmV0dXJuIHNpZ25hbFxuICAgIH1cbiAgICBlbHNlIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgICAgZGVzdC5lbGVtZW50Lmluc2VydEJlZm9yZSh0YXJnZXQuc3RhcnQsIGJlZm9yZSlcbiAgICAgIGRlc3QuZWxlbWVudC5pbnNlcnRCZWZvcmUodGFyZ2V0LmVuZCwgYmVmb3JlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkZXN0LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRhcmdldCwgYmVmb3JlKVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICAgIGRlc3QuYXBwZW5kQ2hpbGQodGFyZ2V0LnN0YXJ0KVxuICAgICAgZGVzdC5hcHBlbmRDaGlsZCh0YXJnZXQuZW5kKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkZXN0LmFwcGVuZENoaWxkKHRhcmdldClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIHRhcmdldCBiZWZvcmUgYSBjZXJ0YWluIGVsZW1lbnQuIFRoZSB0YXJnZXQgbWF5YmUgYmxvY2sgb3IgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUYXJnZXQgKHZtLCB0YXJnZXQsIGFmdGVyKSB7XG4gIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgIHJldHVybiBtb3ZlQmxvY2sodGFyZ2V0LCBhZnRlcilcbiAgfVxuICByZXR1cm4gbW92ZUVsZW1lbnQodGFyZ2V0LCBhZnRlcilcbn1cblxuLyoqXG4gKiBNb3ZlIGVsZW1lbnQgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZnVuY3Rpb24gbW92ZUVsZW1lbnQgKGVsZW1lbnQsIGFmdGVyKSB7XG4gIGNvbnN0IHBhcmVudCA9IGFmdGVyLnBhcmVudE5vZGVcbiAgaWYgKHBhcmVudCkge1xuICAgIHJldHVybiBwYXJlbnQuaW5zZXJ0QWZ0ZXIoZWxlbWVudCwgYWZ0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIGFsbCBlbGVtZW50cyBvZiB0aGUgYmxvY2sgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtvYmplY3R9IGJlZm9yZVxuICovXG5mdW5jdGlvbiBtb3ZlQmxvY2sgKGZyYWdCbG9jaywgYWZ0ZXIpIHtcbiAgY29uc3QgcGFyZW50ID0gYWZ0ZXIucGFyZW50Tm9kZVxuXG4gIGlmIChwYXJlbnQpIHtcbiAgICBsZXQgZWwgPSBmcmFnQmxvY2suc3RhcnRcbiAgICBsZXQgc2lnbmFsXG4gICAgY29uc3QgZ3JvdXAgPSBbZWxdXG5cbiAgICB3aGlsZSAoZWwgJiYgZWwgIT09IGZyYWdCbG9jay5lbmQpIHtcbiAgICAgIGVsID0gZWwubmV4dFNpYmxpbmdcbiAgICAgIGdyb3VwLnB1c2goZWwpXG4gICAgfVxuXG4gICAgbGV0IHRlbXAgPSBhZnRlclxuICAgIGdyb3VwLmV2ZXJ5KChlbCkgPT4ge1xuICAgICAgc2lnbmFsID0gcGFyZW50Lmluc2VydEFmdGVyKGVsLCB0ZW1wKVxuICAgICAgdGVtcCA9IGVsXG4gICAgICByZXR1cm4gc2lnbmFsICE9PSAtMVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2lnbmFsXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGFyZ2V0IGZyb20gRE9NIHRyZWUuXG4gKiBJZiB0aGUgdGFyZ2V0IGlzIGEgZnJhZyBibG9jayB0aGVuIGNhbGwgX3JlbW92ZUJsb2NrXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhcmdldCAodm0sIHRhcmdldCwgcHJlc2VydmVCbG9jayA9IGZhbHNlKSB7XG4gIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgIHJlbW92ZUJsb2NrKHRhcmdldCwgcHJlc2VydmVCbG9jaylcbiAgfVxuICBlbHNlIHtcbiAgICByZW1vdmVFbGVtZW50KHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGNlcnRhaW4gZWxlbWVudC5cbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICovXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50ICh0YXJnZXQpIHtcbiAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGVcblxuICBpZiAocGFyZW50KSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGZyYWcgYmxvY2suXG4gKiBUaGUgc2Vjb25kIHBhcmFtIGRlY2lkZXMgd2hldGhlciB0aGUgYmxvY2sgc2VsZiBzaG91bGQgYmUgcmVtb3ZlZCB0b28uXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtCb29sZWFufSBwcmVzZXJ2ZUJsb2NrPWZhbHNlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUJsb2NrIChmcmFnQmxvY2ssIHByZXNlcnZlQmxvY2sgPSBmYWxzZSkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBsZXQgZWwgPSBmcmFnQmxvY2suc3RhcnQubmV4dFNpYmxpbmdcblxuICB3aGlsZSAoZWwgJiYgZWwgIT09IGZyYWdCbG9jay5lbmQpIHtcbiAgICByZXN1bHQucHVzaChlbClcbiAgICBlbCA9IGVsLm5leHRTaWJsaW5nXG4gIH1cblxuICBpZiAoIXByZXNlcnZlQmxvY2spIHtcbiAgICByZW1vdmVFbGVtZW50KGZyYWdCbG9jay5zdGFydClcbiAgfVxuICByZXN1bHQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICByZW1vdmVFbGVtZW50KGVsKVxuICB9KVxuICBpZiAoIXByZXNlcnZlQmxvY2spIHtcbiAgICByZW1vdmVFbGVtZW50KGZyYWdCbG9jay5lbmQpXG4gIH1cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3ZtL2RvbS1oZWxwZXIuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIEV2ZXJ5dGhpbmcgYWJvdXQgY29tcG9uZW50IGV2ZW50IHdoaWNoIGluY2x1ZGVzIGV2ZW50IG9iamVjdCwgZXZlbnQgbGlzdGVuZXIsXG4gKiBldmVudCBlbWl0dGVyIGFuZCBsaWZlY3ljbGUgaG9va3MuXG4gKi9cblxuLyoqXG4gKiBFdmVudCBvYmplY3QgZGVmaW5pdGlvbi4gQW4gZXZlbnQgb2JqZWN0IGhhcyBgdHlwZWAsIGB0aW1lc3RhbXBgIGFuZFxuICogYGRldGFpbGAgZnJvbSB3aGljaCBhIGNvbXBvbmVudCBlbWl0LiBUaGUgZXZlbnQgb2JqZWN0IGNvdWxkIGJlIGRpc3BhdGNoZWQgdG9cbiAqIHBhcmVudHMgb3IgYnJvYWRjYXN0ZWQgdG8gY2hpbGRyZW4gZXhjZXB0IGB0aGlzLnN0b3AoKWAgaXMgY2FsbGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7YW55fSAgICBkZXRhaWxcbiAqL1xuZnVuY3Rpb24gRXZ0ICh0eXBlLCBkZXRhaWwpIHtcbiAgaWYgKGRldGFpbCBpbnN0YW5jZW9mIEV2dCkge1xuICAgIHJldHVybiBkZXRhaWxcbiAgfVxuXG4gIHRoaXMudGltZXN0YW1wID0gRGF0ZS5ub3coKVxuICB0aGlzLmRldGFpbCA9IGRldGFpbFxuICB0aGlzLnR5cGUgPSB0eXBlXG5cbiAgbGV0IHNob3VsZFN0b3AgPSBmYWxzZVxuXG4gIC8qKlxuICAgKiBzdG9wIGRpc3BhdGNoIGFuZCBicm9hZGNhc3RcbiAgICovXG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzaG91bGRTdG9wID0gdHJ1ZVxuICB9XG5cbiAgLyoqXG4gICAqIGNoZWNrIGlmIGl0IGNhbid0IGJlIGRpc3BhdGNoZWQgb3IgYnJvYWRjYXN0ZWRcbiAgICovXG4gIHRoaXMuaGFzU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2hvdWxkU3RvcFxuICB9XG59XG5cbi8qKlxuICogRW1pdCBhbiBldmVudCBidXQgbm90IGJyb2FkY2FzdCBkb3duIG9yIGRpc3BhdGNoIHVwLlxuICogQHBhcmFtICB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0gIHthbnl9ICAgIGRldGFpbFxuICovXG5leHBvcnQgZnVuY3Rpb24gJGVtaXQgKHR5cGUsIGRldGFpbCkge1xuICBjb25zdCBldmVudHMgPSB0aGlzLl92bUV2ZW50c1xuICBjb25zdCBoYW5kbGVyTGlzdCA9IGV2ZW50c1t0eXBlXVxuICBpZiAoaGFuZGxlckxpc3QpIHtcbiAgICBjb25zdCBldnQgPSBuZXcgRXZ0KHR5cGUsIGRldGFpbClcbiAgICBoYW5kbGVyTGlzdC5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICBoYW5kbGVyLmNhbGwodGhpcywgZXZ0KVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBFbWl0IGFuIGV2ZW50IGFuZCBkaXNwYXRjaCBpdCB1cC5cbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICogQHBhcmFtICB7YW55fSAgICBkZXRhaWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRkaXNwYXRjaCAodHlwZSwgZGV0YWlsKSB7XG4gIGNvbnN0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICB0aGlzLiRlbWl0KHR5cGUsIGV2dClcblxuICBpZiAoIWV2dC5oYXNTdG9wcGVkKCkgJiYgdGhpcy5fcGFyZW50ICYmIHRoaXMuX3BhcmVudC4kZGlzcGF0Y2gpIHtcbiAgICB0aGlzLl9wYXJlbnQuJGRpc3BhdGNoKHR5cGUsIGV2dClcbiAgfVxufVxuXG4vKipcbiAqIEVtaXQgYW4gZXZlbnQgYW5kIGJyb2FkY2FzdCBpdCBkb3duLlxuICogQHBhcmFtICB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0gIHthbnl9ICAgIGRldGFpbFxuICovXG5leHBvcnQgZnVuY3Rpb24gJGJyb2FkY2FzdCAodHlwZSwgZGV0YWlsKSB7XG4gIGNvbnN0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICB0aGlzLiRlbWl0KHR5cGUsIGV2dClcblxuICBpZiAoIWV2dC5oYXNTdG9wcGVkKCkgJiYgdGhpcy5fY2hpbGRyZW5WbXMpIHtcbiAgICB0aGlzLl9jaGlsZHJlblZtcy5mb3JFYWNoKChzdWJWbSkgPT4ge1xuICAgICAgc3ViVm0uJGJyb2FkY2FzdCh0eXBlLCBldnQpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIEFkZCBldmVudCBsaXN0ZW5lci5cbiAqIEBwYXJhbSAge3N0cmluZ30gICB0eXBlXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gaGFuZGxlclxuICovXG5leHBvcnQgZnVuY3Rpb24gJG9uICh0eXBlLCBoYW5kbGVyKSB7XG4gIGlmICghdHlwZSB8fCB0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGV2ZW50cyA9IHRoaXMuX3ZtRXZlbnRzXG4gIGNvbnN0IGhhbmRsZXJMaXN0ID0gZXZlbnRzW3R5cGVdIHx8IFtdXG4gIGhhbmRsZXJMaXN0LnB1c2goaGFuZGxlcilcbiAgZXZlbnRzW3R5cGVdID0gaGFuZGxlckxpc3RcblxuICAvLyBmaXhlZCBvbGQgdmVyc2lvbiBsaWZlY3ljbGUgZGVzaWduXG4gIGlmICh0eXBlID09PSAnaG9vazpyZWFkeScgJiYgdGhpcy5fcmVhZHkpIHtcbiAgICB0aGlzLiRlbWl0KCdob29rOnJlYWR5JylcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBldmVudCBsaXN0ZW5lci5cbiAqIEBwYXJhbSAge3N0cmluZ30gICB0eXBlXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gaGFuZGxlclxuICovXG5leHBvcnQgZnVuY3Rpb24gJG9mZiAodHlwZSwgaGFuZGxlcikge1xuICBpZiAoIXR5cGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBldmVudHMgPSB0aGlzLl92bUV2ZW50c1xuICBpZiAoIWhhbmRsZXIpIHtcbiAgICBkZWxldGUgZXZlbnRzW3R5cGVdXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgaGFuZGxlckxpc3QgPSBldmVudHNbdHlwZV1cbiAgaWYgKCFoYW5kbGVyTGlzdCkge1xuICAgIHJldHVyblxuICB9XG4gIGhhbmRsZXJMaXN0LiRyZW1vdmUoaGFuZGxlcilcbn1cblxuY29uc3QgTElGRV9DWUNMRV9UWVBFUyA9IFsnaW5pdCcsICdjcmVhdGVkJywgJ3JlYWR5JywgJ2Rlc3Ryb3llZCddXG5cbi8qKlxuICogSW5pdCBldmVudHM6XG4gKiAxLiBsaXN0ZW4gYGV2ZW50c2AgaW4gY29tcG9uZW50IG9wdGlvbnMgJiBgZXh0ZXJuYWxFdmVudHNgLlxuICogMi4gYmluZCBsaWZlY3ljbGUgaG9va3MuXG4gKiBAcGFyYW0gIHtWbX0gICAgIHZtXG4gKiBAcGFyYW0gIHtvYmplY3R9IGV4dGVybmFsRXZlbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0RXZlbnRzICh2bSwgZXh0ZXJuYWxFdmVudHMpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHZtLl9vcHRpb25zIHx8IHt9XG4gIGNvbnN0IGV2ZW50cyA9IG9wdGlvbnMuZXZlbnRzIHx8IHt9XG4gIGZvciAoY29uc3QgdHlwZTEgaW4gZXZlbnRzKSB7XG4gICAgdm0uJG9uKHR5cGUxLCBldmVudHNbdHlwZTFdKVxuICB9XG4gIGZvciAoY29uc3QgdHlwZTIgaW4gZXh0ZXJuYWxFdmVudHMpIHtcbiAgICB2bS4kb24odHlwZTIsIGV4dGVybmFsRXZlbnRzW3R5cGUyXSlcbiAgfVxuICBMSUZFX0NZQ0xFX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICB2bS4kb24oYGhvb2s6JHt0eXBlfWAsIG9wdGlvbnNbdHlwZV0pXG4gIH0pXG59XG5cbi8qKlxuICogQmluZCBldmVudCByZWxhdGVkIG1ldGhvZHMgdG8gVmlld01vZGVsIGluc3RhbmNlLlxuICogQHBhcmFtICB7Vm19IHZtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkV2ZW50cyAodm0pIHtcbiAgdm0uJGVtaXQgPSAkZW1pdFxuICB2bS4kZGlzcGF0Y2ggPSAkZGlzcGF0Y2hcbiAgdm0uJGJyb2FkY2FzdCA9ICRicm9hZGNhc3RcbiAgdm0uJG9uID0gJG9uXG4gIHZtLiRvZmYgPSAkb2ZmXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvdm0vZXZlbnRzLmpzXG4gKiovIiwiaW1wb3J0IHNlbXZlciBmcm9tICdzZW12ZXInXG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0LCB0eXBvZiB9IGZyb20gJy4uL3V0aWwnXG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmVyc2lvbiBzdHJpbmcuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFZlcnNpb24uIGllOiAxLCAxLjAsIDEuMC4wXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFZlcnNpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVZlcnNpb24gKHYpIHtcbiAgY29uc3QgaXNWYWxpZCA9IHNlbXZlci52YWxpZCh2KVxuICBpZiAoaXNWYWxpZCkge1xuICAgIHJldHVybiB2XG4gIH1cblxuICB2ID0gdHlwZW9mICh2KSA9PT0gJ3N0cmluZycgPyB2IDogJydcbiAgY29uc3Qgc3BsaXQgPSB2LnNwbGl0KCcuJylcbiAgbGV0IGkgPSAwXG4gIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgd2hpbGUgKGkgPCAzKSB7XG4gICAgY29uc3QgcyA9IHR5cGVvZiAoc3BsaXRbaV0pID09PSAnc3RyaW5nJyAmJiBzcGxpdFtpXSA/IHNwbGl0W2ldIDogJzAnXG4gICAgcmVzdWx0LnB1c2gocylcbiAgICBpKytcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignLicpXG59XG5cbi8qKlxuICogR2V0IGluZm9ybWF0aW9ucyBmcm9tIGRpZmZlcmVudCBlcnJvciBrZXkuIExpa2U6XG4gKiAtIGNvZGVcbiAqIC0gZXJyb3JNZXNzYWdlXG4gKiAtIGVycm9yVHlwZVxuICogLSBpc0Rvd25ncmFkZVxuICogQHBhcmFtICB7c3RyaW5nfSBrZXlcbiAqIEBwYXJhbSAge3N0cmluZ30gdmFsXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNyaXRlcmlhXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFcnJvciAoa2V5LCB2YWwsIGNyaXRlcmlhKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBpc0Rvd25ncmFkZTogdHJ1ZSxcbiAgICBlcnJvclR5cGU6IDEsXG4gICAgY29kZTogMTAwMFxuICB9XG4gIGNvbnN0IGdldE1zZyA9IGZ1bmN0aW9uIChrZXksIHZhbCwgY3JpdGVyaWEpIHtcbiAgICByZXR1cm4gJ0Rvd25ncmFkZVsnICsga2V5ICsgJ10gOjogZGV2aWNlSW5mbyAnXG4gICAgICArIHZhbCArICcgbWF0Y2hlZCBjcml0ZXJpYSAnICsgY3JpdGVyaWFcbiAgfVxuICBjb25zdCBfa2V5ID0ga2V5LnRvTG93ZXJDYXNlKClcblxuICByZXN1bHQuZXJyb3JNZXNzYWdlID0gZ2V0TXNnKGtleSwgdmFsLCBjcml0ZXJpYSlcblxuICBpZiAoX2tleS5pbmRleE9mKCdvc3ZlcnNpb24nKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDAxXG4gIH1cbiAgZWxzZSBpZiAoX2tleS5pbmRleE9mKCdhcHB2ZXJzaW9uJykgPj0gMCkge1xuICAgIHJlc3VsdC5jb2RlID0gMTAwMlxuICB9XG4gIGVsc2UgaWYgKF9rZXkuaW5kZXhPZignd2VleHZlcnNpb24nKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDAzXG4gIH1cbiAgZWxzZSBpZiAoX2tleS5pbmRleE9mKCdkZXZpY2Vtb2RlbCcpID49IDApIHtcbiAgICByZXN1bHQuY29kZSA9IDEwMDRcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBXRUVYIGZyYW1ld29yayBpbnB1dChkZXZpY2VJbmZvKVxuICoge1xuICogICBwbGF0Zm9ybTogJ2lPUycgb3IgJ2FuZHJvaWQnXG4gKiAgIG9zVmVyc2lvbjogJzEuMC4wJyBvciAnMS4wJyBvciAnMSdcbiAqICAgYXBwVmVyc2lvbjogJzEuMC4wJyBvciAnMS4wJyBvciAnMSdcbiAqICAgd2VleFZlcnNpb246ICcxLjAuMCcgb3IgJzEuMCcgb3IgJzEnXG4gKiAgIGREZXZpY2VNb2RlbDogJ01PREVMX05BTUUnXG4gKiB9XG4gKlxuICogZG93bmdyYWRlIGNvbmZpZyhjb25maWcpXG4gKiB7XG4gKiAgIGlvczoge1xuICogICAgIG9zVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgYXBwVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgd2VleFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGRldmljZU1vZGVsOiBbJ21vZGVsQScsICdtb2RlbEInLCAuLi5dXG4gKiAgIH0sXG4gKiAgIGFuZHJvaWQ6IHtcbiAqICAgICBvc1ZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGFwcFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIHdlZXhWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICBkZXZpY2VNb2RlbDogWydtb2RlbEEnLCAnbW9kZWxCJywgLi4uXVxuICogICB9XG4gKiB9XG4gKlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZGV2aWNlSW5mbyBXZWV4IFNESyBmcmFtZXdvcmsgaW5wdXRcbiAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnICAgICB1c2VyIGlucHV0XG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgeyBpc0Rvd25ncmFkZTogdHJ1ZS9mYWxzZSwgZXJyb3JNZXNzYWdlLi4uIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrIChjb25maWcsIGRldmljZUluZm8pIHtcbiAgZGV2aWNlSW5mbyA9IGRldmljZUluZm8gfHwgZ2xvYmFsLldYRW52aXJvbm1lbnRcbiAgZGV2aWNlSW5mbyA9IGlzUGxhaW5PYmplY3QoZGV2aWNlSW5mbykgPyBkZXZpY2VJbmZvIDoge31cblxuICBsZXQgcmVzdWx0ID0ge1xuICAgIGlzRG93bmdyYWRlOiBmYWxzZSAvLyBkZWZhdXRsIGlzIHBhc3NcbiAgfVxuXG4gIGlmICh0eXBvZihjb25maWcpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbGV0IGN1c3RvbURvd25ncmFkZSA9IGNvbmZpZy5jYWxsKHRoaXMsIGRldmljZUluZm8sIHtcbiAgICAgIHNlbXZlcjogc2VtdmVyLFxuICAgICAgbm9ybWFsaXplVmVyc2lvbjogdGhpcy5ub3JtYWxpemVWZXJzaW9uXG4gICAgfSlcblxuICAgIGN1c3RvbURvd25ncmFkZSA9ICEhY3VzdG9tRG93bmdyYWRlXG5cbiAgICByZXN1bHQgPSBjdXN0b21Eb3duZ3JhZGUgPyB0aGlzLmdldEVycm9yKCdjdXN0b20nLCAnJywgJ2N1c3RvbSBwYXJhbXMnKSA6IHJlc3VsdFxuICB9XG4gIGVsc2Uge1xuICAgIGNvbmZpZyA9IGlzUGxhaW5PYmplY3QoY29uZmlnKSA/IGNvbmZpZyA6IHt9XG5cbiAgICBjb25zdCBwbGF0Zm9ybSA9IGRldmljZUluZm8ucGxhdGZvcm0gfHwgJ3Vua25vdydcbiAgICBjb25zdCBkUGxhdGZvcm0gPSBwbGF0Zm9ybS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgY09iaiA9IGNvbmZpZ1tkUGxhdGZvcm1dIHx8IHt9XG5cbiAgICBmb3IgKGNvbnN0IGkgaW4gZGV2aWNlSW5mbykge1xuICAgICAgY29uc3Qga2V5ID0gaVxuICAgICAgY29uc3Qga2V5TG93ZXIgPSBrZXkudG9Mb3dlckNhc2UoKVxuICAgICAgY29uc3QgdmFsID0gZGV2aWNlSW5mb1tpXVxuICAgICAgY29uc3QgaXNWZXJzaW9uID0ga2V5TG93ZXIuaW5kZXhPZigndmVyc2lvbicpID49IDBcbiAgICAgIGNvbnN0IGlzRGV2aWNlTW9kZWwgPSBrZXlMb3dlci5pbmRleE9mKCdkZXZpY2Vtb2RlbCcpID49IDBcbiAgICAgIGNvbnN0IGNyaXRlcmlhID0gY09ialtpXVxuXG4gICAgICBpZiAoY3JpdGVyaWEgJiYgaXNWZXJzaW9uKSB7XG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLm5vcm1hbGl6ZVZlcnNpb24oY3JpdGVyaWEpXG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLm5vcm1hbGl6ZVZlcnNpb24oZGV2aWNlSW5mb1tpXSlcblxuICAgICAgICBpZiAoc2VtdmVyLnNhdGlzZmllcyhkLCBjKSkge1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZ2V0RXJyb3Ioa2V5LCB2YWwsIGNyaXRlcmlhKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzRGV2aWNlTW9kZWwpIHtcbiAgICAgICAgY29uc3QgX2NyaXRlcmlhID0gdHlwb2YoY3JpdGVyaWEpID09PSAnYXJyYXknID8gY3JpdGVyaWEgOiBbY3JpdGVyaWFdXG4gICAgICAgIGlmIChfY3JpdGVyaWEuaW5kZXhPZih2YWwpID49IDApIHtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLmdldEVycm9yKGtleSwgdmFsLCBjcml0ZXJpYSlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9kb3duZ3JhZGUuanNcbiAqKi8iLCJpbXBvcnQge1xuICBpc1dlZXhDb21wb25lbnQsXG4gIGlzV2VleE1vZHVsZSxcbiAgaXNOb3JtYWxNb2R1bGUsXG4gIGlzTnBtTW9kdWxlLFxuICByZW1vdmVXZWV4UHJlZml4LFxuICByZW1vdmVKU1N1cmZpeFxufSBmcm9tICcuLi8uLi91dGlsJ1xuaW1wb3J0IHtcbiAgcmVnaXN0ZXJDdXN0b21Db21wb25lbnQsXG4gIHJlcXVpcmVDdXN0b21Db21wb25lbnQsXG4gIGluaXRNb2R1bGVzXG59IGZyb20gJy4uL3JlZ2lzdGVyJ1xuXG4vKipcbiAqIGRlZmluZShuYW1lLCBmYWN0b3J5KSBmb3IgcHJpbWFyeSB1c2FnZVxuICogb3JcbiAqIGRlZmluZShuYW1lLCBkZXBzLCBmYWN0b3J5KSBmb3IgY29tcGF0aWJpbGl0eVxuICogTm90aWNlOiBETyBOT1QgdXNlIGZ1bmN0aW9uIGRlZmluZSgpIHt9LFxuICogaXQgd2lsbCBjYXVzZSBlcnJvciBhZnRlciBidWlsZGVkIGJ5IHdlYnBhY2tcbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmluZUZuID0gZnVuY3Rpb24gKGFwcCwgbmFtZSwgLi4uYXJncykge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBkZWZpbmUgYSBjb21wb25lbnQgJHtuYW1lfWApXG5cbiAgLy8gYWRhcHQgYXJnczpcbiAgLy8gMS4gbmFtZSwgZGVwc1tdLCBmYWN0b3J5KClcbiAgLy8gMi4gbmFtZSwgZmFjdG9yeSgpXG4gIC8vIDMuIG5hbWUsIGRlZmluaXRpb257fVxuICBsZXQgZmFjdG9yeSwgZGVmaW5pdGlvblxuICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XG4gICAgZGVmaW5pdGlvbiA9IGFyZ3NbMV1cbiAgfVxuICBlbHNlIHtcbiAgICBkZWZpbml0aW9uID0gYXJnc1swXVxuICB9XG4gIGlmICh0eXBlb2YgZGVmaW5pdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZhY3RvcnkgPSBkZWZpbml0aW9uXG4gICAgZGVmaW5pdGlvbiA9IG51bGxcbiAgfVxuXG4gIC8vIHJlc29sdmUgZGVmaW5pdGlvbiBmcm9tIGZhY3RvcnlcbiAgaWYgKGZhY3RvcnkpIHtcbiAgICBjb25zdCByID0gKG5hbWUpID0+IHtcbiAgICAgIGlmIChpc1dlZXhDb21wb25lbnQobmFtZSkpIHtcbiAgICAgICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICAgICAgICByZXR1cm4gcmVxdWlyZUN1c3RvbUNvbXBvbmVudChhcHAsIGNsZWFuTmFtZSlcbiAgICAgIH1cbiAgICAgIGlmIChpc1dlZXhNb2R1bGUobmFtZSkpIHtcbiAgICAgICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICAgICAgICByZXR1cm4gYXBwLnJlcXVpcmVNb2R1bGUoY2xlYW5OYW1lKVxuICAgICAgfVxuICAgICAgaWYgKGlzTm9ybWFsTW9kdWxlKG5hbWUpIHx8IGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgICAgIGNvbnN0IGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG4gICAgICAgIHJldHVybiBhcHAuY29tbW9uTW9kdWxlc1tjbGVhbk5hbWVdXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG0gPSB7IGV4cG9ydHM6IHt9fVxuICAgIGZhY3RvcnkociwgbS5leHBvcnRzLCBtKVxuICAgIGRlZmluaXRpb24gPSBtLmV4cG9ydHNcbiAgfVxuXG4gIC8vIGFwcGx5IGRlZmluaXRpb25cbiAgaWYgKGlzV2VleENvbXBvbmVudChuYW1lKSkge1xuICAgIGNvbnN0IGNsZWFuTmFtZSA9IHJlbW92ZVdlZXhQcmVmaXgobmFtZSlcbiAgICByZWdpc3RlckN1c3RvbUNvbXBvbmVudChhcHAsIGNsZWFuTmFtZSwgZGVmaW5pdGlvbilcbiAgfVxuICBlbHNlIGlmIChpc1dlZXhNb2R1bGUobmFtZSkpIHtcbiAgICBjb25zdCBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gICAgaW5pdE1vZHVsZXMoeyBbY2xlYW5OYW1lXTogZGVmaW5pdGlvbiB9KVxuICB9XG4gIGVsc2UgaWYgKGlzTm9ybWFsTW9kdWxlKG5hbWUpKSB7XG4gICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICBhcHAuY29tbW9uTW9kdWxlc1tjbGVhbk5hbWVdID0gZGVmaW5pdGlvblxuICB9XG4gIGVsc2UgaWYgKGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICBpZiAoZGVmaW5pdGlvbi50ZW1wbGF0ZSB8fFxuICAgICAgICBkZWZpbml0aW9uLnN0eWxlIHx8XG4gICAgICAgIGRlZmluaXRpb24ubWV0aG9kcykge1xuICAgICAgLy8gZG93bmdyYWRlIHRvIG9sZCBkZWZpbmUgbWV0aG9kIChkZWZpbmUoJ2NvbXBvbmVudE5hbWUnLCBmYWN0b3J5KSlcbiAgICAgIC8vIHRoZSBleHBvcnRzIGNvbnRhaW4gb25lIGtleSBvZiB0ZW1wbGF0ZSwgc3R5bGUgb3IgbWV0aG9kc1xuICAgICAgLy8gYnV0IGl0IGhhcyByaXNrISEhXG4gICAgICByZWdpc3RlckN1c3RvbUNvbXBvbmVudChhcHAsIGNsZWFuTmFtZSwgZGVmaW5pdGlvbilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBhcHAuY29tbW9uTW9kdWxlc1tjbGVhbk5hbWVdID0gZGVmaW5pdGlvblxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlciAoYXBwLCB0eXBlLCBvcHRpb25zKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gUmVnaXN0ZXIgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIGluc3RhbGwgbGFzdGVzdCB0cmFuc2Zvcm1lci4nKVxuICByZWdpc3RlckN1c3RvbUNvbXBvbmVudChhcHAsIHR5cGUsIG9wdGlvbnMpXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2J1bmRsZS9kZWZpbmUuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIGluc3RhbmNlIGNvbnRyb2xzIGZyb20gbmF0aXZlXG4gKlxuICogLSBmaXJlIGV2ZW50XG4gKiAtIGNhbGxiYWNrXG4gKiAtIHJlZnJlc2hcbiAqIC0gZGVzdHJveVxuICpcbiAqIGNvcnJlc3BvbmRlZCB3aXRoIHRoZSBBUEkgb2YgaW5zdGFuY2UgbWFuYWdlciAoZnJhbWV3b3JrLmpzKVxuICovXG5pbXBvcnQgeyBleHRlbmQsIHR5cG9mIH0gZnJvbSAnLi4vLi4vdXRpbCdcbmltcG9ydCByZW5kZXJlciBmcm9tICcuLi8uLi9jb25maWcnXG5cbi8qKlxuICogUmVmcmVzaCBhbiBhcHAgd2l0aCBkYXRhIHRvIGl0cyByb290IGNvbXBvbmVudCBvcHRpb25zLlxuICogQHBhcmFtICB7b2JqZWN0fSBhcHBcbiAqIEBwYXJhbSAge2FueX0gICAgZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaCAoYXBwLCBkYXRhKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFJlZnJlc2ggd2l0aGAsIGRhdGEsXG4gICAgICAgICAgICBgaW4gaW5zdGFuY2VbJHthcHAuaWR9XWApXG4gIGNvbnN0IHZtID0gYXBwLnZtXG4gIGlmICh2bSAmJiBkYXRhKSB7XG4gICAgLy8gYXBwLmRvYy5jbG9zZSgpXG4gICAgaWYgKHR5cGVvZiB2bS5yZWZyZXNoRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdm0ucmVmcmVzaERhdGEoZGF0YSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBleHRlbmQodm0sIGRhdGEpXG4gICAgfVxuICAgIHVwZGF0ZUFjdGlvbnMoYXBwKVxuICAgIGFwcC5kb2MubGlzdGVuZXIucmVmcmVzaEZpbmlzaCgpXG4gICAgLy8gYXBwLmRvYy5vcGVuKClcbiAgICByZXR1cm5cbiAgfVxuICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGRhdGEgXCIke2RhdGF9XCJgKVxufVxuXG4vKipcbiAqIERlc3Ryb3kgYW4gYXBwLlxuICogQHBhcmFtICB7b2JqZWN0fSBhcHBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3kgKGFwcCkge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBEZXN0b3J5IGFuIGluc3RhbmNlKCR7YXBwLmlkfSlgKVxuXG4gIGlmIChhcHAudm0pIHtcbiAgICBkZXN0cm95Vm0oYXBwLnZtKVxuICB9XG5cbiAgYXBwLmlkID0gJydcbiAgYXBwLm9wdGlvbnMgPSBudWxsXG4gIGFwcC5ibG9ja3MgPSBudWxsXG4gIGFwcC52bSA9IG51bGxcbiAgYXBwLmRvYy5kZXN0cm95KClcbiAgYXBwLmRvYyA9IG51bGxcbiAgYXBwLmN1c3RvbUNvbXBvbmVudE1hcCA9IG51bGxcbiAgYXBwLmNvbW1vbk1vZHVsZXMgPSBudWxsXG4gIGFwcC5jYWxsYmFja3MgPSBudWxsXG59XG5cbi8qKlxuICogRGVzdHJveSBhbiBWbS5cbiAqIEBwYXJhbSB7b2JqZWN0fSB2bVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveVZtICh2bSkge1xuICBkZWxldGUgdm0uX2FwcFxuICBkZWxldGUgdm0uX2NvbXB1dGVkXG4gIGRlbGV0ZSB2bS5fY3NzXG4gIGRlbGV0ZSB2bS5fZGF0YVxuICBkZWxldGUgdm0uX2lkc1xuICBkZWxldGUgdm0uX21ldGhvZHNcbiAgZGVsZXRlIHZtLl9vcHRpb25zXG4gIGRlbGV0ZSB2bS5fcGFyZW50XG4gIGRlbGV0ZSB2bS5fcGFyZW50RWxcbiAgZGVsZXRlIHZtLl9yb290RWxcblxuICAvLyByZW1vdmUgYWxsIHdhdGNoZXJzXG4gIGlmICh2bS5fd2F0Y2hlcnMpIHtcbiAgICBsZXQgd2F0Y2hlckNvdW50ID0gdm0uX3dhdGNoZXJzLmxlbmd0aFxuICAgIHdoaWxlICh3YXRjaGVyQ291bnQtLSkge1xuICAgICAgdm0uX3dhdGNoZXJzW3dhdGNoZXJDb3VudF0udGVhcmRvd24oKVxuICAgIH1cbiAgICBkZWxldGUgdm0uX3dhdGNoZXJzXG4gIH1cblxuICAvLyBkZXN0cm95IGNoaWxkIHZtcyByZWN1cnNpdmVseVxuICBpZiAodm0uX2NoaWxkcmVuVm1zKSB7XG4gICAgbGV0IHZtQ291bnQgPSB2bS5fY2hpbGRyZW5WbXMubGVuZ3RoXG4gICAgd2hpbGUgKHZtQ291bnQtLSkge1xuICAgICAgZGVzdHJveVZtKHZtLl9jaGlsZHJlblZtc1t2bUNvdW50XSlcbiAgICB9XG4gICAgZGVsZXRlIHZtLl9jaGlsZHJlblZtc1xuICB9XG5cbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gXCJkZXN0cm95ZWRcIiBsaWZlY3ljbGUgaW4gVm0oJHt2bS5fdHlwZX0pYClcbiAgdm0uJGVtaXQoJ2hvb2s6ZGVzdHJveWVkJylcblxuICBkZWxldGUgdm0uX3R5cGVcbiAgZGVsZXRlIHZtLl92bUV2ZW50c1xufVxuXG4vKipcbiAqIEdldCBhIEpTT04gb2JqZWN0IHRvIGRlc2NyaWJlIHRoZSBkb2N1bWVudCBib2R5LlxuICogQHBhcmFtICB7b2JqZWN0fSBhcHBcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3RFbGVtZW50IChhcHApIHtcbiAgY29uc3QgZG9jID0gYXBwLmRvYyB8fCB7fVxuICBjb25zdCBib2R5ID0gZG9jLmJvZHkgfHwge31cbiAgcmV0dXJuIGJvZHkudG9KU09OID8gYm9keS50b0pTT04oKSA6IHt9XG59XG5cbi8qKlxuICogRmlyZSBhbiBldmVudCBmcm9tIHJlbmRlcmVyLiBUaGUgZXZlbnQgaGFzIHR5cGUsIGFuIGV2ZW50IG9iamVjdCBhbmQgYW5cbiAqIGVsZW1lbnQgcmVmLiBJZiB0aGUgZXZlbnQgY29tZXMgd2l0aCBzb21lIHZpcnR1YWwtRE9NIGNoYW5nZXMsIGl0IHNob3VsZFxuICogaGF2ZSBvbmUgbW9yZSBwYXJhbWV0ZXIgdG8gZGVzY3JpYmUgdGhlIGNoYW5nZXMuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwcFxuICogQHBhcmFtICB7c3RyaW5nfSByZWZcbiAqIEBwYXJhbSAge3R5cGV9ICAgdHlwZVxuICogQHBhcmFtICB7b2JqZWN0fSBlXG4gKiBAcGFyYW0gIHtvYmplY3R9IGRvbUNoYW5nZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpcmVFdmVudCAoYXBwLCByZWYsIHR5cGUsIGUsIGRvbUNoYW5nZXMpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gRmlyZSBhIFwiJHt0eXBlfVwiIGV2ZW50IG9uIGFuIGVsZW1lbnQoJHtyZWZ9KSBpbiBpbnN0YW5jZSgke2FwcC5pZH0pYClcbiAgaWYgKEFycmF5LmlzQXJyYXkocmVmKSkge1xuICAgIHJlZi5zb21lKChyZWYpID0+IHtcbiAgICAgIHJldHVybiBhcHAuZmlyZUV2ZW50KHJlZiwgdHlwZSwgZSkgIT09IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBlbCA9IGFwcC5kb2MuZ2V0UmVmKHJlZilcbiAgaWYgKGVsKSB7XG4gICAgLy8gYXBwLmRvYy5jbG9zZSgpXG4gICAgY29uc3QgcmVzdWx0ID0gYXBwLmRvYy5maXJlRXZlbnQoZWwsIHR5cGUsIGUsIGRvbUNoYW5nZXMpXG4gICAgdXBkYXRlQWN0aW9ucyhhcHApXG4gICAgYXBwLmRvYy5saXN0ZW5lci51cGRhdGVGaW5pc2goKVxuICAgIC8vIGFwcC5kb2Mub3BlbigpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgZWxlbWVudCByZWZlcmVuY2UgXCIke3JlZn1cImApXG59XG5cbi8qKlxuICogTWFrZSBhIGNhbGxiYWNrIGZvciBhIGNlcnRhaW4gYXBwLlxuICogQHBhcmFtICB7b2JqZWN0fSAgIGFwcFxuICogQHBhcmFtICB7bnVtYmVyfSAgIGNhbGxiYWNrSWRcbiAqIEBwYXJhbSAge2FueX0gICAgICBkYXRhXG4gKiBAcGFyYW0gIHtib29sZWFufSAgaWZLZWVwQWxpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGxiYWNrIChhcHAsIGNhbGxiYWNrSWQsIGRhdGEsIGlmS2VlcEFsaXZlKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIEludm9rZSBhIGNhbGxiYWNrKCR7Y2FsbGJhY2tJZH0pIHdpdGhgLCBkYXRhLFxuICAgICAgICAgICAgYGluIGluc3RhbmNlKCR7YXBwLmlkfSlgKVxuICBjb25zdCBjYWxsYmFjayA9IGFwcC5jYWxsYmFja3NbY2FsbGJhY2tJZF1cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGFwcC5kb2MuY2xvc2UoKVxuICAgIGNhbGxiYWNrKGRhdGEpXG4gICAgaWYgKHR5cGVvZiBpZktlZXBBbGl2ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgaWZLZWVwQWxpdmUgPT09IGZhbHNlKSB7XG4gICAgICBhcHAuY2FsbGJhY2tzW2NhbGxiYWNrSWRdID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIHVwZGF0ZUFjdGlvbnMoYXBwKVxuICAgIGFwcC5kb2MubGlzdGVuZXIudXBkYXRlRmluaXNoKClcbiAgICAvLyBhcHAuZG9jLm9wZW4oKVxuICAgIHJldHVyblxuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgY2FsbGJhY2sgaWQgXCIke2NhbGxiYWNrSWR9XCJgKVxufVxuXG4vKipcbiAqIENvbGxlY3QgYWxsIHZpcnR1YWwtRE9NIG11dGF0aW9ucyB0b2dldGhlciBhbmQgc2VuZCB0aGVtIHRvIHJlbmRlcmVyLlxuICogQHBhcmFtICB7b2JqZWN0fSBhcHBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFjdGlvbnMgKGFwcCkge1xuICBhcHAuZGlmZmVyLmZsdXNoKClcbiAgY29uc3QgdGFza3MgPSBbXVxuICBpZiAoYXBwLmRvYyAmJiBhcHAuZG9jLmxpc3RlbmVyICYmIGFwcC5kb2MubGlzdGVuZXIudXBkYXRlcy5sZW5ndGgpIHtcbiAgICB0YXNrcy5wdXNoKC4uLmFwcC5kb2MubGlzdGVuZXIudXBkYXRlcylcbiAgICBhcHAuZG9jLmxpc3RlbmVyLnVwZGF0ZXMgPSBbXVxuICB9XG4gIGlmICh0YXNrcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gY2FsbFRhc2tzKGFwcCwgdGFza3MpXG4gIH1cbn1cblxuLyoqXG4gKiBDYWxsIGFsbCB0YXNrcyBmcm9tIGFuIGFwcCB0byByZW5kZXJlciAobmF0aXZlKS5cbiAqIEBwYXJhbSAge29iamVjdH0gYXBwXG4gKiBAcGFyYW0gIHthcnJheX0gIHRhc2tzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxsVGFza3MgKGFwcCwgdGFza3MpIHtcbiAgaWYgKHR5cG9mKHRhc2tzKSAhPT0gJ2FycmF5Jykge1xuICAgIHRhc2tzID0gW3Rhc2tzXVxuICB9XG5cbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2suYXJncyA9IHRhc2suYXJncy5tYXAoYXJnID0+IG5vcm1hbGl6ZShhcmcsIGFwcCkpXG4gIH0pXG5cbiAgcmV0dXJuIHJlbmRlcmVyLnNlbmRUYXNrcyhhcHAuaWQsIHRhc2tzLCAnLTEnKVxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZhbHVlLiBTcGVjaWFsbHksIGlmIHRoZSB2YWx1ZSBpcyBhIGZ1bmN0aW9uLCB0aGVuIGdlbmVyYXRlIGEgZnVuY3Rpb24gaWRcbiAqIGFuZCBzYXZlIGl0IHRvIGBhcHAuY2FsbGJhY2tzYCwgYXQgbGFzdCByZXR1cm4gdGhlIGZ1bmN0aW9uIGlkLlxuICogQHBhcmFtICB7YW55fSAgICAgICAgdlxuICogQHBhcmFtICB7b2JqZWN0fSAgICAgYXBwXG4gKiBAcmV0dXJuIHtwcmltaXRpdmV9XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZSAodiwgYXBwKSB7XG4gIGNvbnN0IHR5cGUgPSB0eXBvZih2KVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgY2FzZSAnbnVsbCc6XG4gICAgICByZXR1cm4gJydcbiAgICBjYXNlICdyZWdleHAnOlxuICAgICAgcmV0dXJuIHYudG9TdHJpbmcoKVxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIHYudG9JU09TdHJpbmcoKVxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBjYXNlICdhcnJheSc6XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmICh2IGluc3RhbmNlb2YgcmVuZGVyZXIuRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdi5yZWZcbiAgICAgIH1cbiAgICAgIHJldHVybiB2XG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgYXBwLmNhbGxiYWNrc1srK2FwcC51aWRdID0gdlxuICAgICAgcmV0dXJuIGFwcC51aWQudG9TdHJpbmcoKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodilcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9jdHJsL21pc2MuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFdlZXggQXBwIGNvbnN0cnVjdG9yICYgZGVmaW5pdGlvblxuICovXG5cbmltcG9ydCBEaWZmZXIgZnJvbSAnLi9kaWZmZXInXG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAnLi4vY29uZmlnJ1xuXG4vKipcbiAqIEFwcCBjb25zdHJ1Y3RvciBmb3IgV2VleCBmcmFtZXdvcmsuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCAoaWQsIG9wdGlvbnMpIHtcbiAgdGhpcy5pZCA9IGlkXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgdGhpcy52bSA9IG51bGxcbiAgdGhpcy5jdXN0b21Db21wb25lbnRNYXAgPSB7fVxuICB0aGlzLmNvbW1vbk1vZHVsZXMgPSB7fVxuICB0aGlzLmNhbGxiYWNrcyA9IHt9XG4gIHRoaXMuZG9jID0gbmV3IHJlbmRlcmVyLkRvY3VtZW50KFxuICAgIGlkLFxuICAgIHRoaXMub3B0aW9ucy5idW5kbGVVcmwsXG4gICAgbnVsbCxcbiAgICByZW5kZXJlci5MaXN0ZW5lclxuICApXG4gIHRoaXMuZGlmZmVyID0gbmV3IERpZmZlcihpZClcbiAgdGhpcy51aWQgPSAwXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2luc3RhbmNlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlmZmVyIHtcbiAgY29uc3RydWN0b3IgKGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5tYXAgPSBbXVxuICAgIHRoaXMuaG9va3MgPSBbXVxuICB9XG4gIGlzRW1wdHkgKCkge1xuICAgIHJldHVybiB0aGlzLm1hcC5sZW5ndGggPT09IDBcbiAgfVxuICBhcHBlbmQgKHR5cGUsIGRlcHRoLCByZWYsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuaGFzVGltZXIpIHtcbiAgICAgIHRoaXMuaGFzVGltZXIgPSB0cnVlXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oYXNUaW1lciA9IGZhbHNlXG4gICAgICAgIHRoaXMuZmx1c2godHJ1ZSlcbiAgICAgIH0sIDApXG4gICAgfVxuICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwXG4gICAgaWYgKCFtYXBbZGVwdGhdKSB7XG4gICAgICBtYXBbZGVwdGhdID0ge31cbiAgICB9XG4gICAgY29uc3QgZ3JvdXAgPSBtYXBbZGVwdGhdXG4gICAgaWYgKCFncm91cFt0eXBlXSkge1xuICAgICAgZ3JvdXBbdHlwZV0gPSB7fVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgICBpZiAoIWdyb3VwW3R5cGVdW3JlZl0pIHtcbiAgICAgICAgZ3JvdXBbdHlwZV1bcmVmXSA9IFtdXG4gICAgICB9XG4gICAgICBncm91cFt0eXBlXVtyZWZdLnB1c2goaGFuZGxlcilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBncm91cFt0eXBlXVtyZWZdID0gaGFuZGxlclxuICAgIH1cbiAgfVxuICBmbHVzaCAoaXNUaW1lb3V0KSB7XG4gICAgY29uc3QgbWFwID0gdGhpcy5tYXAuc2xpY2UoKVxuICAgIHRoaXMubWFwLmxlbmd0aCA9IDBcbiAgICBtYXAuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgIGNhbGxUeXBlTWFwKGdyb3VwLCAncmVwZWF0JylcbiAgICAgIGNhbGxUeXBlTWFwKGdyb3VwLCAnc2hvd24nKVxuICAgICAgY2FsbFR5cGVMaXN0KGdyb3VwLCAnZWxlbWVudCcpXG4gICAgfSlcblxuICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5zbGljZSgpXG4gICAgdGhpcy5ob29rcy5sZW5ndGggPSAwXG4gICAgaG9va3MuZm9yRWFjaCgoZm4pID0+IHtcbiAgICAgIGZuKClcbiAgICB9KVxuXG4gICAgaWYgKCF0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgdGhpcy5mbHVzaCgpXG4gICAgfVxuICB9XG4gIHRoZW4gKGZuKSB7XG4gICAgdGhpcy5ob29rcy5wdXNoKGZuKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGxUeXBlTWFwIChncm91cCwgdHlwZSkge1xuICBjb25zdCBtYXAgPSBncm91cFt0eXBlXVxuICBmb3IgKGNvbnN0IHJlZiBpbiBtYXApIHtcbiAgICBtYXBbcmVmXSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbFR5cGVMaXN0IChncm91cCwgdHlwZSkge1xuICBjb25zdCBtYXAgPSBncm91cFt0eXBlXVxuICBmb3IgKGNvbnN0IHJlZiBpbiBtYXApIHtcbiAgICBjb25zdCBsaXN0ID0gbWFwW3JlZl1cbiAgICBsaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHsgaGFuZGxlcigpIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvZGlmZmVyLmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IGluc3RhbmNlTWFwID0ge31cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9zdGF0aWMvbWFwLmpzXG4gKiovIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQge1xuICByZWZyZXNoLFxuICBkZXN0cm95XG59IGZyb20gJy4uL2FwcC9jdHJsJ1xuaW1wb3J0IHsgaW5zdGFuY2VNYXAgfSBmcm9tICcuL21hcCdcblxuLyoqXG4gKiBJbml0IGNvbmZpZyBpbmZvcm1hdGlvbnMgZm9yIFdlZXggZnJhbWV3b3JrXG4gKiBAcGFyYW0gIHtvYmplY3R9IGNmZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdCAoY2ZnKSB7XG4gIGNvbmZpZy5Eb2N1bWVudCA9IGNmZy5Eb2N1bWVudFxuICBjb25maWcuRWxlbWVudCA9IGNmZy5FbGVtZW50XG4gIGNvbmZpZy5Db21tZW50ID0gY2ZnLkNvbW1lbnRcbiAgY29uZmlnLnNlbmRUYXNrcyA9IGNmZy5zZW5kVGFza3NcbiAgY29uZmlnLkxpc3RlbmVyID0gY2ZnLkxpc3RlbmVyXG59XG5cbi8qKlxuICogUmVmcmVzaCBhIFdlZXggaW5zdGFuY2Ugd2l0aCBkYXRhLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEBwYXJhbSAge29iamVjdH0gZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaEluc3RhbmNlIChpZCwgZGF0YSkge1xuICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2lkXVxuICBsZXQgcmVzdWx0XG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJlc3VsdCA9IHJlZnJlc2goaW5zdGFuY2UsIGRhdGEpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIERlc3Ryb3kgYSBXZWV4IGluc3RhbmNlLlxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveUluc3RhbmNlIChpZCkge1xuICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2lkXVxuICBpZiAoIWluc3RhbmNlKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxuICB9XG4gIGRlc3Ryb3koaW5zdGFuY2UpXG4gIGRlbGV0ZSBpbnN0YW5jZU1hcFtpZF1cbiAgcmV0dXJuIGluc3RhbmNlTWFwXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvc3RhdGljL2xpZmUuanNcbiAqKi8iLCJpbXBvcnQgVm0gZnJvbSAnLi4vdm0nXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7XG4gIGluaXRNb2R1bGVzLFxuICBpbml0TWV0aG9kc1xufSBmcm9tICcuLi9hcHAvcmVnaXN0ZXInXG5cbmNvbnN0IHtcbiAgbmF0aXZlQ29tcG9uZW50TWFwXG59ID0gY29uZmlnXG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIG5hbWUgb2YgZWFjaCBuYXRpdmUgY29tcG9uZW50LlxuICogQHBhcmFtICB7YXJyYXl9IGNvbXBvbmVudHMgYXJyYXkgb2YgbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnRzIChjb21wb25lbnRzKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGNvbXBvbmVudHMpKSB7XG4gICAgY29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIHJlZ2lzdGVyIChuYW1lKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghbmFtZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbmF0aXZlQ29tcG9uZW50TWFwW25hbWVdID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBuYW1lLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hdGl2ZUNvbXBvbmVudE1hcFtuYW1lLnR5cGVdID0gbmFtZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgbmFtZSBhbmQgbWV0aG9kcyBvZiBlYWNoIG1vZHVsZS5cbiAqIEBwYXJhbSAge29iamVjdH0gbW9kdWxlcyBhIG9iamVjdCBvZiBtb2R1bGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1vZHVsZXMgKG1vZHVsZXMpIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnb2JqZWN0Jykge1xuICAgIGluaXRNb2R1bGVzKG1vZHVsZXMpXG4gIH1cbn1cblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgbmFtZSBhbmQgbWV0aG9kcyBvZiBlYWNoIGFwaS5cbiAqIEBwYXJhbSAge29iamVjdH0gYXBpcyBhIG9iamVjdCBvZiBhcGlzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1ldGhvZHMgKG1ldGhvZHMpIHtcbiAgaWYgKHR5cGVvZiBtZXRob2RzID09PSAnb2JqZWN0Jykge1xuICAgIGluaXRNZXRob2RzKFZtLCBtZXRob2RzKVxuICB9XG59XG5cbi8vIEB0b2RvOiBIYWNrIGZvciB0aGlzIGZyYW1ld29yayBvbmx5LiBXaWxsIGJlIHJlLWRlc2lnbmVkIG9yIHJlbW92ZWQgbGF0ZXIuXG5nbG9iYWwucmVnaXN0ZXJNZXRob2RzID0gcmVnaXN0ZXJNZXRob2RzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvc3RhdGljL3JlZ2lzdGVyLmpzXG4gKiovIiwiaW1wb3J0IHsgaW5zdGFuY2VNYXAgfSBmcm9tICcuL21hcCdcbmltcG9ydCB7XG4gIGZpcmVFdmVudCxcbiAgY2FsbGJhY2tcbn0gZnJvbSAnLi4vYXBwL2N0cmwnXG5cbmNvbnN0IGpzSGFuZGxlcnMgPSB7XG4gIGZpcmVFdmVudDogKGlkLCAuLi5hcmdzKSA9PiB7XG4gICAgcmV0dXJuIGZpcmVFdmVudChpbnN0YW5jZU1hcFtpZF0sIC4uLmFyZ3MpXG4gIH0sXG4gIGNhbGxiYWNrOiAoaWQsIC4uLmFyZ3MpID0+IHtcbiAgICByZXR1cm4gY2FsbGJhY2soaW5zdGFuY2VNYXBbaWRdLCAuLi5hcmdzKVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0IGNhbGxzIGZyb20gbmF0aXZlIChldmVudCBvciBjYWxsYmFjaykuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHBhcmFtICB7YXJyYXl9IHRhc2tzIGxpc3Qgd2l0aCBgbWV0aG9kYCBhbmQgYGFyZ3NgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWNlaXZlVGFza3MgKGlkLCB0YXNrcykge1xuICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2lkXVxuICBpZiAoaW5zdGFuY2UgJiYgQXJyYXkuaXNBcnJheSh0YXNrcykpIHtcbiAgICBjb25zdCByZXN1bHRzID0gW11cbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBoYW5kbGVyID0ganNIYW5kbGVyc1t0YXNrLm1ldGhvZF1cbiAgICAgIGNvbnN0IGFyZ3MgPSBbLi4udGFzay5hcmdzXVxuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFyZ3MudW5zaGlmdChpZClcbiAgICAgICAgcmVzdWx0cy5wdXNoKGhhbmRsZXIoLi4uYXJncykpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiIG9yIHRhc2tzYClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9zdGF0aWMvYnJpZGdlLmpzXG4gKiovIiwiaW1wb3J0IHsgaW5zdGFuY2VNYXAgfSBmcm9tICcuL21hcCdcbmltcG9ydCB7XG4gIGdldFJvb3RFbGVtZW50XG59IGZyb20gJy4uL2FwcC9jdHJsJ1xuXG4vKipcbiAqIEdldCBhIHdob2xlIGVsZW1lbnQgdHJlZSBvZiBhbiBpbnN0YW5jZSBmb3IgZGVidWdnaW5nLlxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7b2JqZWN0fSBhIHZpcnR1YWwgZG9tIHRyZWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3QgKGlkKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaWRdXG4gIGxldCByZXN1bHRcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmVzdWx0ID0gZ2V0Um9vdEVsZW1lbnQoaW5zdGFuY2UpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9taXNjLmpzXG4gKiovIiwibGV0IGZyYW1ld29ya3NcblxuY29uc3QgdmVyc2lvblJlZ0V4cCA9IC9eXFwvXFwvICooXFx7W15cXH1dKlxcfSkgKlxccj9cXG4vXG5cbi8qKlxuICogRGV0ZWN0IGEgSlMgQnVuZGxlIGNvZGUgYW5kIG1ha2Ugc3VyZSB3aGljaCBmcmFtZXdvcmsgaXQncyBiYXNlZCB0by4gRWFjaCBKU1xuICogQnVuZGxlIHNob3VsZCBtYWtlIHN1cmUgdGhhdCBpdCBzdGFydHMgd2l0aCBhIGxpbmUgb2YgSlNPTiBjb21tZW50IGFuZCBpc1xuICogbW9yZSB0aGF0IG9uZSBsaW5lLlxuICogQHBhcmFtICB7c3RyaW5nfSBjb2RlXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGNoZWNrVmVyc2lvbiAoY29kZSkge1xuICBsZXQgaW5mb1xuICBjb25zdCByZXN1bHQgPSB2ZXJzaW9uUmVnRXhwLmV4ZWMoY29kZSlcbiAgaWYgKHJlc3VsdCkge1xuICAgIHRyeSB7XG4gICAgICBpbmZvID0gSlNPTi5wYXJzZShyZXN1bHRbMV0pXG4gICAgfVxuICAgIGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiBpbmZvXG59XG5cbmNvbnN0IGluc3RhbmNlTWFwID0ge31cblxuLyoqXG4gKiBDaGVjayB3aGljaCBmcmFtZXdvcmsgYSBjZXJ0YWluIEpTIEJ1bmRsZSBjb2RlIGJhc2VkIHRvLiBBbmQgY3JlYXRlIGluc3RhbmNlXG4gKiBieSB0aGlzIGZyYW1ld29yay5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHBhcmFtIHtzdHJpbmd9IGNvZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlIChpZCwgY29kZSwgY29uZmlnLCBkYXRhKSB7XG4gIGxldCBpbmZvID0gaW5zdGFuY2VNYXBbaWRdXG4gIGlmICghaW5mbykge1xuICAgIGluZm8gPSBjaGVja1ZlcnNpb24oY29kZSkgfHwge31cbiAgICBpZiAoIWZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdKSB7XG4gICAgICBpbmZvLmZyYW1ld29yayA9ICdXZWV4J1xuICAgIH1cbiAgICBpbnN0YW5jZU1hcFtpZF0gPSBpbmZvXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9XG4gICAgY29uZmlnLmJ1bmRsZVZlcnNpb24gPSBpbmZvLnZlcnNpb25cbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjcmVhdGUgYW4gJHtpbmZvLmZyYW1ld29ya31AJHtjb25maWcuYnVuZGxlVmVyc2lvbn0gaW5zdGFuY2UgZnJvbSAke2NvbmZpZy5idW5kbGVWZXJzaW9ufWApXG4gICAgcmV0dXJuIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdLmNyZWF0ZUluc3RhbmNlKGlkLCBjb2RlLCBjb25maWcsIGRhdGEpXG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxufVxuXG5jb25zdCBtZXRob2RzID0ge1xuICBjcmVhdGVJbnN0YW5jZVxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIG1ldGhvZHMgd2hpY2ggaW5pdCBlYWNoIGZyYW1ld29ya3MuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICovXG5mdW5jdGlvbiBnZW5Jbml0IChtZXRob2ROYW1lKSB7XG4gIG1ldGhvZHNbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiBmcmFtZXdvcmtzKSB7XG4gICAgICBjb25zdCBmcmFtZXdvcmsgPSBmcmFtZXdvcmtzW25hbWVdXG4gICAgICBpZiAoZnJhbWV3b3JrICYmIGZyYW1ld29ya1ttZXRob2ROYW1lXSkge1xuICAgICAgICBmcmFtZXdvcmtbbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZWdpc3RlciBtZXRob2RzIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGluc3RhbmNlLlxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAqL1xuZnVuY3Rpb24gZ2VuSW5zdGFuY2UgKG1ldGhvZE5hbWUpIHtcbiAgbWV0aG9kc1ttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgY29uc3QgaWQgPSBhcmdzWzBdXG4gICAgY29uc3QgaW5mbyA9IGluc3RhbmNlTWFwW2lkXVxuICAgIGlmIChpbmZvICYmIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdKSB7XG4gICAgICByZXR1cm4gZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya11bbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxuICB9XG59XG5cbi8qKlxuICogQWRhcHQgc29tZSBsZWdhY3kgbWV0aG9kKHMpIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGluc3RhbmNlLiBUaGVzZVxuICogbWV0aG9kcyBzaG91bGQgYmUgZGVwcmVjYXRlZCBhbmQgcmVtb3ZlZCBsYXRlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gbmF0aXZlTWV0aG9kTmFtZVxuICovXG5mdW5jdGlvbiBhZGFwdEluc3RhbmNlIChtZXRob2ROYW1lLCBuYXRpdmVNZXRob2ROYW1lKSB7XG4gIG1ldGhvZHNbbmF0aXZlTWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNvbnN0IGlkID0gYXJnc1swXVxuICAgIGNvbnN0IGluZm8gPSBpbnN0YW5jZU1hcFtpZF1cbiAgICBpZiAoaW5mbyAmJiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXSkge1xuICAgICAgcmV0dXJuIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0IChjb25maWcpIHtcbiAgZnJhbWV3b3JrcyA9IGNvbmZpZy5mcmFtZXdvcmtzIHx8IHt9XG5cbiAgLy8gSW5pdCBlYWNoIGZyYW1ld29yayBieSBgaW5pdGAgbWV0aG9kIGFuZCBgY29uZmlnYCB3aGljaCBjb250YWlucyB0aHJlZVxuICAvLyB2aXJ0dWFsLURPTSBDbGFzczogYERvY3VtZW50YCwgYEVsZW1lbnRgICYgYENvbW1lbnRgLCBhbmQgYSBKUyBicmlkZ2UgbWV0aG9kOlxuICAvLyBgc2VuZFRhc2tzKC4uLmFyZ3MpYC5cbiAgZm9yIChjb25zdCBuYW1lIGluIGZyYW1ld29ya3MpIHtcbiAgICBjb25zdCBmcmFtZXdvcmsgPSBmcmFtZXdvcmtzW25hbWVdXG4gICAgZnJhbWV3b3JrLmluaXQoY29uZmlnKVxuICB9XG5cbiAgLy8gQHRvZG86IFRoZSBtZXRob2QgYHJlZ2lzdGVyTWV0aG9kc2Agd2lsbCBiZSByZS1kZXNpZ25lZCBvciByZW1vdmVkIGxhdGVyLlxuICA7IFsncmVnaXN0ZXJDb21wb25lbnRzJywgJ3JlZ2lzdGVyTW9kdWxlcycsICdyZWdpc3Rlck1ldGhvZHMnXS5mb3JFYWNoKGdlbkluaXQpXG5cbiAgOyBbJ2Rlc3Ryb3lJbnN0YW5jZScsICdyZWZyZXNoSW5zdGFuY2UnLCAncmVjZWl2ZVRhc2tzJywgJ2dldFJvb3QnXS5mb3JFYWNoKGdlbkluc3RhbmNlKVxuXG4gIGFkYXB0SW5zdGFuY2UoJ3JlY2VpdmVUYXNrcycsICdjYWxsSlMnKVxuXG4gIHJldHVybiBtZXRob2RzXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL3J1bnRpbWUvaW5pdC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hbWVcIjogXCJ3ZWV4LWpzLWZyYW1ld29ya1wiLFxuXHRcInZlcnNpb25cIjogXCIwLjE1LjExXCIsXG5cdFwic3VidmVyc2lvblwiOiB7XG5cdFx0XCJmcmFtZXdvcmtcIjogXCIwLjE1LjExXCIsXG5cdFx0XCJ0cmFuc2Zvcm1lclwiOiBcIj49MC4xLjUgPDAuNFwiXG5cdH0sXG5cdFwiZGVzY3JpcHRpb25cIjogXCJXZWV4IEpTIEZyYW1ld29ya1wiLFxuXHRcImtleXdvcmRzXCI6IFtcblx0XHRcIndlZXhcIixcblx0XHRcIm12dm1cIixcblx0XHRcImphdmFzY3JpcHRcIixcblx0XHRcImh0bWw1XCJcblx0XSxcblx0XCJob21lcGFnZVwiOiBcImh0dHBzOi8vYWxpYmFiYS5naXRodWIuaW8vd2VleFwiLFxuXHRcImJ1Z3NcIjoge1xuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FsaWJhYmEvd2VleC9pc3N1ZXNcIlxuXHR9LFxuXHRcImxpY2Vuc2VcIjogXCJBcGFjaGUtMi4wXCIsXG5cdFwiYXV0aG9yXCI6IHtcblx0XHRcIm5hbWVcIjogXCJKaW5qaWFuZ1wiLFxuXHRcdFwiZW1haWxcIjogXCJ6aGFvamluamlhbmdAbWUuY29tXCJcblx0fSxcblx0XCJtYWludGFpbmVyc1wiOiBbXG5cdFx0e1xuXHRcdFx0XCJuYW1lXCI6IFwiZmt5c2x5XCIsXG5cdFx0XHRcImVtYWlsXCI6IFwiZmt5c2x5QGdtYWlsLmNvbVwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcIm5hbWVcIjogXCJoYW5rc1wiLFxuXHRcdFx0XCJlbWFpbFwiOiBcInpoYW5naGFuLm1lQGdtYWlsLmNvbVwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcIm5hbWVcIjogXCJqaW5qaWFuZ1wiLFxuXHRcdFx0XCJlbWFpbFwiOiBcInpoYW9qaW5qaWFuZ0BtZS5jb21cIlxuXHRcdH1cblx0XSxcblx0XCJtYWluXCI6IFwiaW5kZXguanNcIixcblx0XCJyZXBvc2l0b3J5XCI6IHtcblx0XHRcInR5cGVcIjogXCJnaXRcIixcblx0XHRcInVybFwiOiBcImdpdCtzc2g6Ly9naXRAZ2l0aHViLmNvbS9hbGliYWJhL3dlZXguZ2l0XCJcblx0fSxcblx0XCJzY3JpcHRzXCI6IHtcblx0XHRcInRlc3RcIjogXCJlY2hvIFxcXCJFcnJvcjogbm8gdGVzdCBzcGVjaWZpZWRcXFwiICYmIGV4aXQgMVwiXG5cdH0sXG5cdFwiZGVwZW5kZW5jaWVzXCI6IHtcblx0XHRcImNvcmUtanNcIjogXCJeMi40LjBcIixcblx0XHRcInNlbXZlclwiOiBcIl41LjEuMFwiXG5cdH0sXG5cdFwiX2lkXCI6IFwid2VleC1qcy1mcmFtZXdvcmtAMC4xNS4xMVwiLFxuXHRcIl9zaGFzdW1cIjogXCJhYzA0NDQ2NDU4Yjk1MDc0NGJhZDg0MzA0MDJlYTUwNTk5YTAxNWM3XCIsXG5cdFwiX2Zyb21cIjogXCJ3ZWV4LWpzLWZyYW1ld29ya0AwLjE1LjExXCIsXG5cdFwiX25wbVZlcnNpb25cIjogXCIzLjguNlwiLFxuXHRcIl9ub2RlVmVyc2lvblwiOiBcIjYuMC4wXCIsXG5cdFwiX25wbVVzZXJcIjoge1xuXHRcdFwibmFtZVwiOiBcImZreXNseVwiLFxuXHRcdFwiZW1haWxcIjogXCJma3lzbHlAZ21haWwuY29tXCJcblx0fSxcblx0XCJkaXN0XCI6IHtcblx0XHRcInNoYXN1bVwiOiBcImFjMDQ0NDY0NThiOTUwNzQ0YmFkODQzMDQwMmVhNTA1OTlhMDE1YzdcIixcblx0XHRcInNpemVcIjogMzcxNDYsXG5cdFx0XCJub2F0dGFjaG1lbnRcIjogZmFsc2UsXG5cdFx0XCJrZXlcIjogXCJ3ZWV4LWpzLWZyYW1ld29yay8tL3dlZXgtanMtZnJhbWV3b3JrLTAuMTUuMTEudGd6XCIsXG5cdFx0XCJ0YXJiYWxsXCI6IFwiaHR0cDovL3JlZ2lzdHJ5Lm5wbS5hbGliYWJhLWluYy5jb20vd2VleC1qcy1mcmFtZXdvcmsvZG93bmxvYWQvd2VleC1qcy1mcmFtZXdvcmstMC4xNS4xMS50Z3pcIlxuXHR9LFxuXHRcIl9ucG1PcGVyYXRpb25hbEludGVybmFsXCI6IHtcblx0XHRcImhvc3RcIjogXCJwYWNrYWdlcy0xNi1lYXN0LmludGVybmFsLm5wbWpzLmNvbVwiLFxuXHRcdFwidG1wXCI6IFwidG1wL3dlZXgtanMtZnJhbWV3b3JrLTAuMTUuMTEudGd6XzE0NzYxMjExMTAwNDFfMC4wMjk2MzE5NDYyMzU4OTUxNTdcIlxuXHR9LFxuXHRcImRpcmVjdG9yaWVzXCI6IHt9LFxuXHRcInB1Ymxpc2hfdGltZVwiOiAxNDc2MTIxMTExMTQyLFxuXHRcIl9jbnBtX3B1Ymxpc2hfdGltZVwiOiAxNDc2MTIxMTExMTQyLFxuXHRcIl9yZXNvbHZlZFwiOiBcImh0dHA6Ly9yZWdpc3RyeS5ucG0uYWxpYmFiYS1pbmMuY29tL3dlZXgtanMtZnJhbWV3b3JrL2Rvd25sb2FkL3dlZXgtanMtZnJhbWV3b3JrLTAuMTUuMTEudGd6XCIsXG5cdFwicmVhZG1lXCI6IFwiRVJST1I6IE5vIFJFQURNRSBkYXRhIGZvdW5kIVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3dlZXgtanMtZnJhbWV3b3JrL3BhY2thZ2UuanNvblxuICoqIG1vZHVsZSBpZCA9IDExNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IFRoZSBhcGkgZm9yIGludm9raW5nIHdpdGggXCIkXCIgcHJlZml4XG4gKi9cbmltcG9ydCB7IGV4dGVuZCwgdHlwb2YgfSBmcm9tICcuLi91dGlsJ1xuXG4vKipcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIGNvbW1vblxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgdXNlICR2bSBpbnN0ZWFkXG4gKiBmaW5kIHRoZSB2bSBieSBpZFxuICogTm90ZTogdGhlcmUgaXMgb25seSBvbmUgaWQgaW4gd2hvbGUgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtWbX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICQgKGlkKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJCBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIFZtIyR2bSBpbnN0ZWFkJylcbiAgY29uc3QgaW5mbyA9IHRoaXMuX2lkc1tpZF1cbiAgaWYgKGluZm8pIHtcbiAgICByZXR1cm4gaW5mby52bVxuICB9XG59XG5cbi8qKlxuICogZmluZCB0aGUgZWxlbWVudCBieSBpZFxuICogTm90ZTogdGhlcmUgaXMgb25seSBvbmUgaWQgaW4gd2hvbGUgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gJGVsIChpZCkge1xuICBjb25zdCBpbmZvID0gdGhpcy5faWRzW2lkXVxuICBpZiAoaW5mbykge1xuICAgIHJldHVybiBpbmZvLmVsXG4gIH1cbn1cblxuLyoqXG4gKiBmaW5kIHRoZSB2bSBvZiB0aGUgY3VzdG9tIGNvbXBvbmVudCBieSBpZFxuICogTm90ZTogdGhlcmUgaXMgb25seSBvbmUgaWQgaW4gd2hvbGUgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtWbX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICR2bSAoaWQpIHtcbiAgY29uc3QgaW5mbyA9IHRoaXMuX2lkc1tpZF1cbiAgaWYgKGluZm8pIHtcbiAgICByZXR1cm4gaW5mby52bVxuICB9XG59XG5cbi8qKlxuICogRmlyZSB3aGVuIGRpZmZlciByZW5kZXJpbmcgZmluaXNoZWRcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRyZW5kZXJUaGVuIChmbikge1xuICBjb25zdCBhcHAgPSB0aGlzLl9hcHBcbiAgY29uc3QgZGlmZmVyID0gYXBwLmRpZmZlclxuICByZXR1cm4gZGlmZmVyLnRoZW4oKCkgPT4ge1xuICAgIGZuKClcbiAgfSlcbn1cblxuLyoqXG4gKiBzY3JvbGwgYW4gZWxlbWVudCBzcGVjaWZpZWQgYnkgaWQgaW50byB2aWV3LFxuICogbW9yZW92ZXIgc3BlY2lmeSBhIG51bWJlciBvZiBvZmZzZXQgb3B0aW9uYWxseVxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHBhcmFtICB7bnVtYmVyfSBvZmZzZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzY3JvbGxUbyAoaWQsIG9mZnNldCkge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRzY3JvbGxUbyBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL2RvbVxcJyknICtcbiAgICAgICAgICAnLnNjcm9sbFRvKGVsLCBvcHRpb25zKVwiIGluc3RlYWQnKVxuICBjb25zdCBlbCA9IHRoaXMuJGVsKGlkKVxuICBpZiAoZWwpIHtcbiAgICBjb25zdCBkb20gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnZG9tJylcbiAgICBkb20uc2Nyb2xsVG9FbGVtZW50KGVsLnJlZiwgeyBvZmZzZXQ6IG9mZnNldCB9KVxuICB9XG59XG5cbi8qKlxuICogcGVyZm9ybSB0cmFuc2l0aW9uIGFuaW1hdGlvbiBvbiBhbiBlbGVtZW50IHNwZWNpZmllZCBieSBpZFxuICogQHBhcmFtICB7c3RyaW5nfSAgIGlkXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgb3B0aW9uc1xuICogQHBhcmFtICB7b2JqZWN0fSAgIG9wdGlvbnMuc3R5bGVzXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgb3B0aW9ucy5kdXJhdGlvbihtcylcbiAqIEBwYXJhbSAge29iamVjdH0gICBbb3B0aW9ucy50aW1pbmdGdW5jdGlvbl1cbiAqIEBwYXJhbSAge29iamVjdH0gICBbb3B0aW9ucy5kZWxheT0wKG1zKV1cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJHRyYW5zaXRpb24gKGlkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBjb25zdCBlbCA9IHRoaXMuJGVsKGlkKVxuICBpZiAoZWwgJiYgb3B0aW9ucyAmJiBvcHRpb25zLnN0eWxlcykge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdhbmltYXRpb24nKVxuICAgIGFuaW1hdGlvbi50cmFuc2l0aW9uKGVsLnJlZiwgb3B0aW9ucywgKC4uLmFyZ3MpID0+IHtcbiAgICAgIHRoaXMuX3NldFN0eWxlKGVsLCBvcHRpb25zLnN0eWxlcylcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKC4uLmFyZ3MpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIGdldCBzb21lIGNvbmZpZ1xuICogQHJldHVybiB7b2JqZWN0fSBzb21lIGNvbmZpZyBmb3IgYXBwIGluc3RhbmNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gYnVuZGxlVXJsXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGRlYnVnXG4gKiBAcHJvcGVydHkge29iamVjdH0gZW52XG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LndlZXhWZXJzaW9uKGV4LiAxLjAuMClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYuYXBwTmFtZShleC4gVEIvVE0pXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LmFwcFZlcnNpb24oZXguIDUuMC4wKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5wbGF0Zm9ybShleC4gaU9TL0FuZHJvaWQpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52Lm9zVmVyc2lvbihleC4gNy4wLjApXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LmRldmljZU1vZGVsICoqbmF0aXZlIG9ubHkqKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVudi5bZGV2aWNlV2lkdGg9NzUwXVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVudi5kZXZpY2VIZWlnaHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRnZXRDb25maWcgKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGNvbmZpZyA9IGV4dGVuZCh7XG4gICAgZW52OiBnbG9iYWwuV1hFbnZpcm9ubWVudCB8fCB7fVxuICB9LCB0aGlzLl9hcHAub3B0aW9ucylcbiAgaWYgKHR5cG9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gdGhlIGNhbGxiYWNrIG9mIFZtIyRnZXRDb25maWcoY2FsbGJhY2spIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgJ3RoaXMgYXBpIG5vdyBjYW4gZGlyZWN0bHkgUkVUVVJOIGNvbmZpZyBpbmZvLicpXG4gICAgY2FsbGJhY2soY29uZmlnKVxuICB9XG4gIHJldHVybiBjb25maWdcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogcmVxdWVzdCBuZXR3b3JrIHZpYSBodHRwIHByb3RvY29sXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgcGFyYW1zXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzZW5kSHR0cCAocGFyYW1zLCBjYWxsYmFjaykge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRzZW5kSHR0cCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3N0cmVhbVxcJyknICtcbiAgICAgICAgICAnLnNlbmRIdHRwKHBhcmFtcywgY2FsbGJhY2spXCIgaW5zdGVhZCcpXG4gIGNvbnN0IHN0cmVhbSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdzdHJlYW0nKVxuICBzdHJlYW0uc2VuZEh0dHAocGFyYW1zLCBjYWxsYmFjaylcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogb3BlbiBhIHVybFxuICogQHBhcmFtICB7c3RyaW5nfSB1cmxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRvcGVuVVJMICh1cmwpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkb3BlblVSTCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL2V2ZW50XFwnKScgK1xuICAgICAgICAgICcub3BlblVSTCh1cmwpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IGV2ZW50ID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ2V2ZW50JylcbiAgZXZlbnQub3BlblVSTCh1cmwpXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIHNldCBhIHRpdGxlIGZvciBwYWdlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRpdGxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkc2V0VGl0bGUgKHRpdGxlKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJHNldFRpdGxlIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvcGFnZUluZm9cXCcpJyArXG4gICAgICAgICAgJy5zZXRUaXRsZSh0aXRsZSlcIiBpbnN0ZWFkJylcbiAgY29uc3QgcGFnZUluZm8gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgncGFnZUluZm8nKVxuICBwYWdlSW5mby5zZXRUaXRsZSh0aXRsZSlcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXCJyZXF1aXJlKCdAd2VleC1tb2R1bGUvbW9kdWxlTmFtZScpIGluc3RlYWRcIlxuICogaW52b2tlIGEgbmF0aXZlIG1ldGhvZCBieSBzcGVjaWZpbmcgdGhlIG5hbWUgb2YgbW9kdWxlIGFuZCBtZXRob2RcbiAqIEBwYXJhbSAge3N0cmluZ30gbW9kdWxlTmFtZVxuICogQHBhcmFtICB7c3RyaW5nfSBtZXRob2ROYW1lXG4gKiBAcGFyYW0gIHsuLi4qfSB0aGUgcmVzdCBhcmd1bWVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRjYWxsIChtb2R1bGVOYW1lLCBtZXRob2ROYW1lLCAuLi5hcmdzKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJGNhbGwgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9tb2R1bGVOYW1lXFwnKVwiIGluc3RlYWQnKVxuICBjb25zdCBtb2R1bGUgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZShtb2R1bGVOYW1lKVxuICBpZiAobW9kdWxlICYmIG1vZHVsZVttZXRob2ROYW1lXSkge1xuICAgIG1vZHVsZVttZXRob2ROYW1lXSguLi5hcmdzKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBpL21ldGhvZHMuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgVGhlIGFwaSBmb3IgaW52b2tpbmcgd2l0aCBcIiRcIiBwcmVmaXhcbiAqL1xuXG4vKipcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIHByaXZhdGUgZm9yIGFsaVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qKlxuICogaW52b2tlIHVzZXItdHJhY2sgb24gVGFvYmFvIE1vYmxpZVxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGXvvJplbnRlciwgY2xpY2ssIGV4cG9zZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21OYW1lXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1cbiovXG5leHBvcnQgZnVuY3Rpb24gJHVzZXJUcmFjayh0eXBlLCBuYW1lLCBjb21OYW1lLCBwYXJhbSkge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyR1c2VyVHJhY2sgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS91c2VyVHJhY2tcXCcpJyArXG4gICAgICAgICAgJy5jb21taXQodHlwZSwgbmFtZSwgY29tTmFtZSwgcGFyYW0pXCIgaW5zdGVhZCcpXG4gIGNvbnN0IHVzZXJUcmFjayA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCd1c2VyVHJhY2snKVxuICB1c2VyVHJhY2suY29tbWl0KHR5cGUsIG5hbWUsIGNvbU5hbWUsIHBhcmFtKVxufVxuXG4vKipcbiAqIHJlcXVlc3QgYSByZXN0ZnVsbCBhcGkgdmlhIHRoZSBtdG9wIGdhdGV3YXlcbiAqIEBwYXJhbSAge29iamVjdH0gICBwYXJhbXNcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJHNlbmRNdG9wKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkc2VuZE10b3AgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9zdHJlYW1cXCcpJyArXG4gICAgICAgICAgJy5zZW5kTXRvcChwYXJhbXMsIGNhbGxiYWNrKVwiIGluc3RlYWQnKVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBpbiBuYXRpdmXvvIx1c2Ugd2luZHZhbmVcbiAgICBjb25zdCB3aW5kdmFuZSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCd3aW5kdmFuZScpXG4gICAgd2luZHZhbmUuY2FsbCh7XG4gICAgICBjbGFzczogJ010b3BXVlBsdWdpbicsXG4gICAgICBtZXRob2Q6ICdzZW5kJyxcbiAgICAgIGRhdGE6IHBhcmFtc1xuICAgIH0sIGNhbGxiYWNrKVxuICB9IGVsc2Uge1xuICAgIC8vIGluIHdlYiBicndvc2Vy77yMdXNlIHN0cmVhbS5zZW5kTXRvcFxuICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdzdHJlYW0nKVxuICAgIHN0cmVhbS5zZW5kTXRvcChwYXJhbXMsIGNhbGxiYWNrKVxuICB9XG59XG5cbi8qKlxuICogcmVxdWVzdCBhIG5hdGl2ZSBhcGkgdmlhIHdpbmR2YW5lIHByb3RvY29sXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgcGFyYW1zXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRjYWxsV2luZHZhbmUocGFyYW1zLCBjYWxsYmFjaykge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRjYWxsV2luZHZhbmUgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS93aW5kdmFuZVxcJyknICtcbiAgICAgICAgICAnLmNhbGwocGFyYW1zLCBjYWxsYmFjaylcIiBpbnN0ZWFkJylcbiAgY29uc3Qgd2luZHZhbmUgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnd2luZHZhbmUnKVxuICB3aW5kdmFuZS5jYWxsKHBhcmFtcywgY2FsbGJhY2spXG59XG5cbi8qKlxuICogc2V0IHNwbSBmb3IgdGhlIHBhZ2VcbiAqIEBwYXJhbSAge3N0cmluZ30gYVxuICogQHBhcmFtICB7c3RyaW5nfSBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkc2V0U3BtKGEsIGIpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkc2V0U3BtIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvcGFnZUluZm9cXCcpJyArXG4gICAgICAgICAgJy5zZXRTcG0oYSwgYilcIiBpbnN0ZWFkJylcbiAgY29uc3QgcGFnZUluZm8gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgncGFnZUluZm8nKVxuICBwYWdlSW5mby5zZXRTcG0oYSwgYilcbn1cblxuLyoqXG4gKiBnZXQgdGhlIGluZm9ybWF0aW9uIG9mIHRoZSBjdXJyZW50IGxvZ2luZWQgdXNlclxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkZ2V0VXNlckluZm8oY2FsbGJhY2spIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkZ2V0VXNlckluZm8gaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS91c2VyXFwnKScgK1xuICAgICAgICAgICcuZ2V0VXNlckluZm8oY2FsbGJhY2spXCIgaW5zdGVhZCcpXG4gIGNvbnN0IHVzZXIgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgndXNlcicpXG4gIHVzZXIuZ2V0VXNlckluZm8oY2FsbGJhY2spXG59XG5cbi8qKlxuICogcGVyZm9ybSBsb2dpblxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkbG9naW4oY2FsbGJhY2spIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkbG9naW4gaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS91c2VyXFwnKScgK1xuICAgICAgICAgICcubG9naW4oY2FsbGJhY2spXCIgaW5zdGVhZCcpXG4gIGNvbnN0IHVzZXIgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgndXNlcicpXG4gIHVzZXIubG9naW4oY2FsbGJhY2spXG59XG5cbi8qKlxuICogcGVyZm9ybSBsb2dvdXRcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJGxvZ291dChjYWxsYmFjaykge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRsb2dvdXQgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS91c2VyXFwnKScgK1xuICAgICAgICAgICcubG9nb3V0KGNhbGxiYWNrKVwiIGluc3RlYWQnKVxuICBjb25zdCB1c2VyID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3VzZXInKVxuICB1c2VyLmxvZ291dChjYWxsYmFjaylcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL2FwaS9tZXRob2RzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==