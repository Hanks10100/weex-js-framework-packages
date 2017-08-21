(this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK: 0.16.2 Build 20160909');(this.getJSFMVersion = function(){return "0.16.2"});
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
	var methods = __webpack_require__(120);
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
	
	var _package = __webpack_require__(118);
	
	var _methods = __webpack_require__(119);
	
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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
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
	
	var _init = __webpack_require__(117);
	
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
	exports.Document = Document;
	exports.Node = Node;
	exports.Element = Element;
	exports.Comment = Comment;
	
	var _utils = __webpack_require__(4);
	
	var DEFAULT_TAG_NAME = 'div'; /**
	                               * @fileOverview
	                               * A simple virtual dom implementation
	                               */
	// import { extend } from '../shared'
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
	      linkParent(node, documentElement);
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
	  if (this.attr[key] === value && silent !== false) {
	    return;
	  }
	  this.attr[key] = value;
	  if (!silent && this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setAttr(this.ref, key, value);
	  }
	};
	
	Element.prototype.setStyle = function (key, value, silent) {
	  if (this.style[key] === value && silent !== false) {
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
	
	var _weexRxFramework = __webpack_require__(81);
	
	var Rx = _interopRequireWildcard(_weexRxFramework);
	
	var _vanilla = __webpack_require__(84);
	
	var Vanilla = _interopRequireWildcard(_vanilla);
	
	var _default = __webpack_require__(85);
	
	var Weex = _interopRequireWildcard(_default);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = {
	  Rx: Rx,
	  Vanilla: Vanilla,
	  Weex: Weex
	}; // built by npm run build:config

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;_e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }return _arr;
	  }return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	exports.getInstance = getInstance;
	exports.init = init;
	exports.registerComponents = registerComponents;
	exports.registerMethods = registerMethods;
	exports.registerModules = registerModules;
	exports.createInstance = createInstance;
	exports.refreshInstance = refreshInstance;
	exports.destroyInstance = destroyInstance;
	exports.getRoot = getRoot;
	exports.receiveTasks = receiveTasks;
	
	var _babelHelpers = __webpack_require__(82);
	
	var _babelHelpers2 = _interopRequireDefault(_babelHelpers);
	
	var _builtinModulesCode = __webpack_require__(83);
	
	var _builtinModulesCode2 = _interopRequireDefault(_builtinModulesCode);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}
	
	var NativeComponents = {};
	var NativeModules = {};
	
	var Document = void 0;
	var Element = void 0;
	var Comment = void 0;
	var Listener = void 0;
	var sendTasks = void 0;
	
	var instances = {};
	var _global = global;
	var WXEnvironment = _global.WXEnvironment;
	function getInstance(instanceId) {
	  var instance = instances[instanceId];
	  if (!instance) {
	    throw new Error('Invalid instance id "' + instanceId + '"');
	  }
	  return instance;
	}
	
	function init(cfg) {
	  Document = cfg.Document;
	  Element = cfg.Element;
	  Comment = cfg.Comment;
	  Listener = cfg.Listener;
	  sendTasks = cfg.sendTasks;
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
	        NativeComponents[name] = true;
	      } else if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object' && typeof name.type === 'string') {
	        NativeComponents[name.type] = name;
	      }
	    });
	  }
	}
	
	/**
	 * register the name and methods of each api
	 * @param  {object} apis a object of apis
	 */
	function registerMethods(apis) {
	  if ((typeof apis === 'undefined' ? 'undefined' : _typeof(apis)) === 'object') {
	    // Noop
	  }
	}
	
	/**
	 * register the name and methods of each module
	 * @param  {object} modules a object of modules
	 */
	function registerModules(newModules) {
	  if ((typeof newModules === 'undefined' ? 'undefined' : _typeof(newModules)) === 'object') {
	    for (var name in newModules) {
	      if (Object.prototype.hasOwnProperty.call(newModules, name)) {
	        NativeModules[name] = newModules[name];
	      }
	    }
	  }
	}
	
	function genNativeModules(instanceId) {
	  var prefix = '@weex-module/';
	  var modules = {};
	
	  if ((typeof NativeModules === 'undefined' ? 'undefined' : _typeof(NativeModules)) === 'object') {
	    var _loop = function _loop(name) {
	      var moduleName = prefix + name;
	      modules[moduleName] = {
	        module: { exports: {} },
	        isInitialized: true
	      };
	
	      NativeModules[name].forEach(function (method) {
	
	        if (typeof method === 'string') {
	          method = {
	            name: method
	          };
	        }
	
	        var methodName = method.name;
	
	        modules[moduleName].module.exports[methodName] = function () {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }
	
	          var finalArgs = [];
	          args.forEach(function (arg, index) {
	            var value = args[index];
	            finalArgs[index] = normalize(value, getInstance(instanceId));
	          });
	
	          sendTasks(String(instanceId), [{
	            module: name,
	            method: methodName,
	            args: finalArgs
	          }]);
	        };
	      });
	    };
	
	    for (var name in NativeModules) {
	      _loop(name);
	    }
	  }
	
	  return modules;
	}
	
	/**
	 * create a Weex instance
	 *
	 * @param  {string} instanceId
	 * @param  {string} code
	 * @param  {object} [options] option `HAS_LOG` enable print log
	 * @param  {object} [data]
	 */
	function createInstance(instanceId, code, options /* {bundleUrl, debug} */, data) {
	  var instance = instances[instanceId];
	
	  if (instance == undefined) {
	    (function () {
	      var def = function def(id, deps, factory) {
	
	        if (deps instanceof Function) {
	          factory = deps;
	          deps = [];
	        }
	
	        modules[id] = {
	          factory: factory,
	          deps: deps,
	          module: { exports: {} },
	          isInitialized: false,
	          hasError: false
	        };
	      };
	
	      var req = function req(id) {
	
	        var mod = modules[id];
	
	        if (mod && mod.isInitialized) {
	          return mod.module.exports;
	        }
	
	        if (!mod) {
	          throw new Error('Requiring unknown module "' + id + '"');
	        }
	
	        if (mod.hasError) {
	          throw new Error('Requiring module "' + id + '" which threw an exception');
	        }
	
	        try {
	          mod.isInitialized = true;
	          mod.factory(req, mod.module.exports, mod.module);
	        } catch (e) {
	          mod.hasError = true;
	          mod.isInitialized = false;
	          throw e;
	        }
	
	        return mod.module.exports;
	      };
	
	      var document = new Document(instanceId, options.bundleUrl, null, Listener);
	      var modules = genNativeModules(instanceId);
	      instance = instances[instanceId] = {
	        document: document,
	        instanceId: instanceId,
	        modules: modules,
	        callbacks: [],
	        uid: 0
	      };
	
	      var timerAPIs = void 0;
	      if (WXEnvironment && WXEnvironment.platform !== 'Web') {
	        (function () {
	          var timer = req('@weex-module/timer');
	          timerAPIs = {
	            setTimeout: function setTimeout() {
	              for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                args[_key2] = arguments[_key2];
	              }
	
	              var handler = function handler() {
	                args[0].apply(args, _toConsumableArray(args.slice(2)));
	              };
	              timer.setTimeout(handler, args[1]);
	              return instance.uid.toString();
	            },
	            setInterval: function setInterval() {
	              for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	                args[_key3] = arguments[_key3];
	              }
	
	              var handler = function handler() {
	                args[0].apply(args, _toConsumableArray(args.slice(2)));
	              };
	              timer.setInterval(handler, args[1]);
	              return instance.uid.toString();
	            },
	            clearTimeout: function clearTimeout(n) {
	              timer.clearTimeout(n);
	            },
	            clearInterval: function clearInterval(n) {
	              timer.clearInterval(n);
	            }
	          };
	        })();
	      } else {
	        timerAPIs = {
	          setTimeout: setTimeout,
	          setInterval: setInterval,
	          clearTimeout: clearTimeout,
	          clearInterval: clearInterval
	        };
	      }
	
	      var init = new Function('define', 'require', '__d', '__r', '__DEV__', '__weex_options__', '__weex_data__', '__weex_document__', 'document', 'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval', 'babelHelpers', _builtinModulesCode2.default + code);
	
	      init(def, req, def, req, options.debug, options, data, document, document, timerAPIs.setTimeout, timerAPIs.clearTimeout, timerAPIs.setInterval, timerAPIs.clearInterval, _babelHelpers2.default);
	    })();
	  } else {
	    throw new Error('Instance id "' + instanceId + '" existed when create instance');
	  }
	}
	
	/**
	 * refresh a Weex instance
	 *
	 * @param  {string} instanceId
	 * @param  {object} data
	 */
	function refreshInstance(instanceId, data) {
	  var instance = getInstance(instanceId);
	  var document = instance.document;
	  document.documentElement.fireEvent('refresh', {
	    timestamp: Date.now(),
	    data: data
	  });
	}
	
	/**
	 * destroy a Weex instance
	 * @param  {string} instanceId
	 */
	function destroyInstance(instanceId) {
	  var instance = getInstance(instanceId);
	  var document = instance.document;
	  document.documentElement.fireEvent('destory', {
	    timestamp: Date.now()
	  });
	
	  if (document.destroy) {
	    document.destroy();
	  }
	
	  delete instances[instanceId];
	}
	
	/**
	 * get a whole element tree of an instance
	 * for debugging
	 * @param  {string} instanceId
	 * @return {object} a virtual dom tree
	 */
	function getRoot(instanceId) {
	  var instance = getInstance(instanceId);
	  var document = instance.document;
	  return document.toJSON ? document.toJSON() : {};
	}
	
	/**
	 * accept calls from native (event or callback)
	 *
	 * @param  {string} instanceId
	 * @param  {array} tasks list with `method` and `args`
	 */
	function receiveTasks(instanceId, tasks) {
	  var instance = getInstance(instanceId);
	  if (Array.isArray(tasks)) {
	    (function () {
	      var callbacks = instance.callbacks;
	      var document = instance.document;
	
	      tasks.forEach(function (task) {
	        if (task.method === 'fireEvent') {
	          var _task$args = _slicedToArray(task.args, 4);
	
	          var nodeId = _task$args[0];
	          var type = _task$args[1];
	          var e = _task$args[2];
	          var domChanges = _task$args[3];
	
	          var el = document.getRef(nodeId);
	          document.fireEvent(el, type, e, domChanges);
	        }
	        if (task.method === 'callback') {
	          var _task$args2 = _slicedToArray(task.args, 3);
	
	          var uid = _task$args2[0];
	          var data = _task$args2[1];
	          var ifKeepAlive = _task$args2[2];
	
	          var callback = callbacks[uid];
	          if (typeof callback === 'function') {
	            callback(data);
	            if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
	              callbacks[uid] = null;
	            }
	          }
	        }
	      });
	
	      sendTasks(String(instanceId), [{ module: 'dom', method: 'updateFinish', args: [] }]);
	    })();
	  }
	}
	
	function normalize(v, instance) {
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
	      if (v instanceof Element) {
	        return v.ref;
	      }
	      return v;
	    case 'function':
	      instance.callbacks[++instance.uid] = v;
	      return instance.uid.toString();
	    default:
	      return JSON.stringify(v);
	  }
	}
	
	function typof(v) {
	  var s = Object.prototype.toString.call(v);
	  return s.substring(8, s.length - 1).toLowerCase();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	(function (root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
	    factory(exports);
	  } else {
	    factory(root.babelHelpers = {});
	  }
	})(undefined, function (global) {
	  var babelHelpers = global;
	  babelHelpers.typeof = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	  };
	
	  babelHelpers.asyncToGenerator = function (fn) {
	    return function () {
	      var gen = fn.apply(this, arguments);
	      return new Promise(function (resolve, reject) {
	        function step(key, arg) {
	          try {
	            var info = gen[key](arg);
	            var value = info.value;
	          } catch (error) {
	            reject(error);
	            return;
	          }
	
	          if (info.done) {
	            resolve(value);
	          } else {
	            return Promise.resolve(value).then(function (value) {
	              return step("next", value);
	            }, function (err) {
	              return step("throw", err);
	            });
	          }
	        }
	
	        return step("next");
	      });
	    };
	  };
	
	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	
	  babelHelpers.createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();
	
	  babelHelpers.defineEnumerableProperties = function (obj, descs) {
	    for (var key in descs) {
	      var desc = descs[key];
	      desc.configurable = desc.enumerable = true;
	      if ("value" in desc) desc.writable = true;
	      Object.defineProperty(obj, key, desc);
	    }
	
	    return obj;
	  };
	
	  babelHelpers.defaults = function (obj, defaults) {
	    var keys = Object.getOwnPropertyNames(defaults);
	
	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];
	      var value = Object.getOwnPropertyDescriptor(defaults, key);
	
	      if (value && value.configurable && obj[key] === undefined) {
	        Object.defineProperty(obj, key, value);
	      }
	    }
	
	    return obj;
	  };
	
	  babelHelpers.defineProperty = function (obj, key, value) {
	    if (key in obj) {
	      Object.defineProperty(obj, key, {
	        value: value,
	        enumerable: true,
	        configurable: true,
	        writable: true
	      });
	    } else {
	      obj[key] = value;
	    }
	
	    return obj;
	  };
	
	  babelHelpers.extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];
	
	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }
	
	    return target;
	  };
	
	  babelHelpers.get = function get(object, property, receiver) {
	    if (object === null) object = Function.prototype;
	    var desc = Object.getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        return get(parent, property, receiver);
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  };
	
	  babelHelpers.inherits = function (subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }
	
	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  };
	
	  babelHelpers.instanceof = function (left, right) {
	    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
	      return right[Symbol.hasInstance](left);
	    } else {
	      return left instanceof right;
	    }
	  };
	
	  babelHelpers.interopRequireDefault = function (obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  };
	
	  babelHelpers.interopRequireWildcard = function (obj) {
	    if (obj && obj.__esModule) {
	      return obj;
	    } else {
	      var newObj = {};
	
	      if (obj != null) {
	        for (var key in obj) {
	          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	        }
	      }
	
	      newObj.default = obj;
	      return newObj;
	    }
	  };
	
	  babelHelpers.newArrowCheck = function (innerThis, boundThis) {
	    if (innerThis !== boundThis) {
	      throw new TypeError("Cannot instantiate an arrow function");
	    }
	  };
	
	  babelHelpers.objectDestructuringEmpty = function (obj) {
	    if (obj == null) throw new TypeError("Cannot destructure undefined");
	  };
	
	  babelHelpers.objectWithoutProperties = function (obj, keys) {
	    var target = {};
	
	    for (var i in obj) {
	      if (keys.indexOf(i) >= 0) continue;
	      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	      target[i] = obj[i];
	    }
	
	    return target;
	  };
	
	  babelHelpers.possibleConstructorReturn = function (self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }
	
	    return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	  };
	
	  babelHelpers.selfGlobal = typeof global === "undefined" ? self : global;
	
	  babelHelpers.set = function set(object, property, value, receiver) {
	    var desc = Object.getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent !== null) {
	        set(parent, property, value, receiver);
	      }
	    } else if ("value" in desc && desc.writable) {
	      desc.value = value;
	    } else {
	      var setter = desc.set;
	
	      if (setter !== undefined) {
	        setter.call(receiver, value);
	      }
	    }
	
	    return value;
	  };
	
	  babelHelpers.slicedToArray = function () {
	    function sliceIterator(arr, i) {
	      var _arr = [];
	      var _n = true;
	      var _d = false;
	      var _e = undefined;
	
	      try {
	        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	          _arr.push(_s.value);
	
	          if (i && _arr.length === i) break;
	        }
	      } catch (err) {
	        _d = true;
	        _e = err;
	      } finally {
	        try {
	          if (!_n && _i["return"]) _i["return"]();
	        } finally {
	          if (_d) throw _e;
	        }
	      }
	
	      return _arr;
	    }
	
	    return function (arr, i) {
	      if (Array.isArray(arr)) {
	        return arr;
	      } else if (Symbol.iterator in Object(arr)) {
	        return sliceIterator(arr, i);
	      } else {
	        throw new TypeError("Invalid attempt to destructure non-iterable instance");
	      }
	    };
	  }();
	
	  babelHelpers.slicedToArrayLoose = function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      var _arr = [];
	
	      for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
	        _arr.push(_step.value);
	
	        if (i && _arr.length === i) break;
	      }
	
	      return _arr;
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	
	  babelHelpers.taggedTemplateLiteral = function (strings, raw) {
	    return Object.freeze(Object.defineProperties(strings, {
	      raw: {
	        value: Object.freeze(raw)
	      }
	    }));
	  };
	
	  babelHelpers.taggedTemplateLiteralLoose = function (strings, raw) {
	    strings.raw = raw;
	    return strings;
	  };
	
	  babelHelpers.temporalRef = function (val, name, undef) {
	    if (val === undef) {
	      throw new ReferenceError(name + " is not defined - temporal dead zone");
	    } else {
	      return val;
	    }
	  };
	
	  babelHelpers.temporalUndefined = {};
	
	  babelHelpers.toArray = function (arr) {
	    return Array.isArray(arr) ? arr : Array.from(arr);
	  };
	
	  babelHelpers.toConsumableArray = function (arr) {
	    if (Array.isArray(arr)) {
	      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	        arr2[i] = arr[i];
	      }return arr2;
	    } else {
	      return Array.from(arr);
	    }
	  };
	});

/***/ },
/* 83 */
/***/ function(module, exports) {

	"use strict";module.exports="define(\"kg/rx/index\",[],function(e,t,n){var r,o,u,i,l,a,f,d,c,s,p,v,y,h,m,_,b,g,C,w,x,O,E,N,P,j,k,S,M,A,I,R;r=function(e){e={},Object.defineProperty(e,\"__esModule\",{value:!0});var t=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol?\"symbol\":typeof e};return e[\"default\"]={component:null,driver:null,document:\"object\"===(\"undefined\"==typeof document?\"undefined\":t(document))?document:{},mountID:1,scheduler:function(e){return e()},roots:{}},e=e[\"default\"]}(),o=function(e){e={},Object.defineProperty(e,\"__esModule\",{value:!0});var t=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol?\"symbol\":typeof e};e.isWeex=\"function\"==typeof callNative,e.isWeb=\"object\"===(\"undefined\"==typeof window?\"undefined\":t(window))&&\"object\"===t(window.document)&&\"object\"===(\"undefined\"==typeof navigator?\"undefined\":t(navigator))&&\"string\"==typeof navigator.userAgent;return e}(),u=function(e){\"use strict\";\"undefined\"==typeof Object.assign&&(Object.assign=function(e,t){for(var n=1;n<arguments.length;n++){var r=arguments[n];if(null!=r)for(var o in r)e[o]=r[o]}return e});var t=Object.prototype.hasOwnProperty;return\"function\"!=typeof Object.entries&&(Object.entries=function(e){if(null==e)throw new TypeError(\"Object.entries called on non-object\");var n=[];for(var r in e)t.call(e,r)&&n.push([r,e[r]]);return n}),\"function\"!=typeof Object.values&&(Object.values=function(e){if(null==e)throw new TypeError(\"Object.values called on non-object\");var n=[];for(var r in e)t.call(e,r)&&n.push(e[r]);return n}),e}(),i=function(e){function t(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(){function e(n,r,o){t(this,e),this.props=n,this.context=r,this.refs={},this.updater=o}return n(e,[{key:\"isComponentClass\",value:function(){}},{key:\"setState\",value:function(e,t){this.updater.setState(this,e,t)}},{key:\"forceUpdate\",value:function(e){this.updater.forceUpdate(this,e)}}]),e}();return e[\"default\"]=r,e=e[\"default\"]}(),l=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function r(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}function o(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=i,a=t(l),f=function(e){function t(e,o){return n(this,t),r(this,Object.getPrototypeOf(t).call(this,e,o))}return o(t,e),u(t,[{key:\"isPureComponentClass\",value:function(){}}]),t}(a[\"default\"]);return e[\"default\"]=f,e=e[\"default\"]}(),a=function(e){function t(e){function t(e,t,n,r,o,u){}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function n(e){function n(e,t,n,r,o){}return t(n)}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var r=n();return e[\"default\"]={array:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,element:r,node:r,any:r,arrayOf:r,instanceOf:r,objectOf:r,oneOf:r,oneOfType:r,shape:r},e=e[\"default\"]}(),f=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(e){var t=void 0;if(void 0===e||null===e||e===!1||e===!0)t=new i[\"default\"].EmptyComponent;else if(\"object\"===(\"undefined\"==typeof e?\"undefined\":o(e))&&e.type)t=\"string\"==typeof e.type?new i[\"default\"].NativeComponent(e):new i[\"default\"].CompositeComponent(e);else{if(\"string\"!=typeof e&&\"number\"!=typeof e)throw Error(\"Invalid element type \"+JSON.stringify(e));t=new i[\"default\"].TextComponent(e)}return t._mountIndex=0,t}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var o=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol?\"symbol\":typeof e},u=r,i=t(u);return e[\"default\"]=n,e=e[\"default\"]}(),d=function(e){function t(e,t){var r=null===e,o=null===t;if(r||o)return r===o;var u=\"undefined\"==typeof e?\"undefined\":n(e),i=\"undefined\"==typeof t?\"undefined\":n(t);return\"string\"===u||\"number\"===u?\"string\"===i||\"number\"===i:\"object\"===u&&\"object\"===i&&e.type===t.type&&e.key===t.key}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var n=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol?\"symbol\":typeof e};return e[\"default\"]=t,e=e[\"default\"]}(),c=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=r,i=t(u),l=function(){function e(){n(this,e),this._currentElement=null}return o(e,[{key:\"mountComponent\",value:function(e,t,n){this._parent=e,this._context=t;var r={_internal:this},o=this.getNativeNode();return n?n(o,e):i[\"default\"].driver.appendChild(o,e),r}},{key:\"unmountComponent\",value:function(e){this._nativeNode&&!e&&i[\"default\"].driver.removeChild(this._nativeNode,this._parent),this._nativeNode=null,this._parent=null,this._context=null}},{key:\"updateComponent\",value:function(){}},{key:\"getNativeNode\",value:function(){return null==this._nativeNode&&(this._nativeNode=i[\"default\"].driver.createEmpty()),this._nativeNode}}]),e}();return e[\"default\"]=l,e=e[\"default\"]}(),s=function(e){return e={},Object.defineProperty(e,\"__esModule\",{value:!0}),e[\"default\"]={update:function(e,t,n){var r=null!=e&&e.ref,o=null!=t&&t.ref;r!==o&&(null!=r&&this.detach(e._owner,r,n),null!=o&&this.attach(t._owner,o,n))},attach:function(e,t,n){if(!e)throw new Error(\"You might be adding a ref to a component that was not created inside a component's `render` method, or you have multiple copies of Rx loaded.\");var r=n.getPublicInstance();\"function\"==typeof t?t(r):e._instance.refs[t]=r},detach:function(e,t,n){if(\"function\"==typeof t)t(null);else{var r=n.getPublicInstance();e._instance.refs[t]===r&&delete e._instance.refs[t]}}},e=e[\"default\"]}(),p=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var n=r,o=t(n),u=\"$$instance\";return e[\"default\"]={set:function(e,t){e[u]||(e[u]=t,t.rootID&&(o[\"default\"].roots[t.rootID]=t))},get:function(e){return e[u]},remove:function(e){var t=this.get(e);t&&(e[u]=null,t.rootID&&delete o[\"default\"].roots[t.rootID])}},e=e[\"default\"]}(),v=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=r,i=t(u),l=function(){function e(t){n(this,e),this._currentElement=t,this._text=\"\"+t}return o(e,[{key:\"mountComponent\",value:function(e,t,n){this._parent=e,this._context=t,this._mountID=i[\"default\"].mountID++;var r=this.getNativeNode();n?n(r,e):i[\"default\"].driver.appendChild(r,e);var o={_internal:this};return o}},{key:\"unmountComponent\",value:function(e){this._nativeNode&&!e&&i[\"default\"].driver.removeChild(this._nativeNode,this._parent),this._currentElement=null,this._nativeNode=null,this._parent=null,this._context=null,this._text=null}},{key:\"updateComponent\",value:function(e,t,n){this._currentElement=t,i[\"default\"].driver.updateText(this.getNativeNode(),t)}},{key:\"getNativeNode\",value:function(){return null==this._nativeNode&&(this._nativeNode=i[\"default\"].driver.createText(this._text)),this._nativeNode}}]),e}();return e[\"default\"]=l,e=e[\"default\"]}(),y=function(e){function t(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(){function e(n){t(this,e),this.pureRender=n}return n(e,[{key:\"render\",value:function(){return this.pureRender(this.props,this.context)}}]),e}();return e[\"default\"]=r,e=e[\"default\"]}(),h=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(e,t){if(t){var n=e._pendingCallbacks||(e._pendingCallbacks=[]);n.push(t)}}function o(e,t){if(t){var n=e._pendingStateQueue||(e._pendingStateQueue=[]);n.push(t)}}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var u=r,i=t(u),l=[],a={setState:function(e,t,r){var u=e._internal;u&&(o(u,t),n(u,r),l.push(e),i[\"default\"].scheduler(this.runUpdates))},forceUpdate:function(e,t){var r=e._internal;r&&(r._pendingForceUpdate=!0,n(r,t),l.push(e),i[\"default\"].scheduler(this.runUpdates))},runUpdates:function(){l.sort(function(e,t){return e._mountID-t._mountID});for(var e=void 0;e=l.shift();){var t=e._internal;if(t&&t._renderedComponent){var n=t._pendingCallbacks;t._pendingCallbacks=null;var r=t._currentElement,o=t._context;(t._pendingStateQueue||t._pendingForceUpdate)&&t.updateComponent(r,r,o,o),n&&n.forEach(function(e){return e()})}}}};return e[\"default\"]=a,e=e[\"default\"]}(),m=function(e){function t(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function n(e,n){if(t(e,n))return!0;if(\"object\"!==(\"undefined\"==typeof e?\"undefined\":r(e))||null===e||\"object\"!==(\"undefined\"==typeof n?\"undefined\":r(n))||null===n)return!1;var u=Object.keys(e),i=Object.keys(n);if(u.length!==i.length)return!1;for(var l=0;l<u.length;l++)if(!o.call(n,u[l])||!t(e[u[l]],n[u[l]]))return!1;return!0}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var r=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol?\"symbol\":typeof e},o=Object.prototype.hasOwnProperty;return e[\"default\"]=n,e=e[\"default\"]}(),_=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(e){var t=o[\"default\"].get(e);return!!t&&(o[\"default\"].remove(e),t._internal.unmountComponent(),!0)}e={},Object.defineProperty(e,\"__esModule\",{value:!0}),e[\"default\"]=n;var r=p,o=t(r);return e=e[\"default\"]}(),b=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function r(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}function o(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=i,a=t(l),f=1,d=function(e){function t(){var e,o,u,i;n(this,t);for(var l=arguments.length,a=Array(l),d=0;d<l;d++)a[d]=arguments[d];return o=u=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),u.rootID=f++,i=o,r(u,i)}return o(t,e),u(t,[{key:\"isRootComponent\",value:function(){}},{key:\"render\",value:function(){return this.props.children}},{key:\"getPublicInstance\",value:function(){return this.getRenderedComponent().getPublicInstance()}},{key:\"getRenderedComponent\",value:function(){return this._internal._renderedComponent}}]),t}(a[\"default\"]);return e[\"default\"]=d,e=e[\"default\"]}(),g=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(e){if(null==e)return null;if(e.ownerDocument||e.nodeType)return e;if(e._nativeNode)return e._nativeNode;if(\"string\"==typeof e)return u[\"default\"].driver.getElementById(e);if(\"function\"!=typeof e.render)throw new Error(\"Appears to be neither Component nor DOMNode.\");var t=e._internal;if(t){for(;!t._nativeNode;)if(t=t._renderedComponent,null==t)return null;return t._nativeNode}throw new Error(\"findDOMNode was called on an unmounted component.\")}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var o=r,u=t(o);return e[\"default\"]=n,e=e[\"default\"]}(),C=function(e){function t(e){return\"string\"==typeof e&&e.indexOf(a)!==-1}function n(e){var t=arguments.length<=1||void 0===arguments[1]?d:arguments[1];return e.replace(f,function(e){return parseFloat(e)*t+\"px\"})}function r(){return d}function o(e){d=e}function u(e,t){return\"number\"==typeof e&&!l[t]}function i(e,r){return r&&u(e,r)?e*d+\"px\":t(e)?n(e):e}e={},Object.defineProperty(e,\"__esModule\",{value:!0}),e.isRem=t,e.calcRem=n,e.getRem=r,e.setRem=o,e.isUnitNumber=u,e.convertUnit=i;var l={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,lines:!0},a=\"rem\",f=/[-+]?\\d*\\.?\\d+rem/g,d=void 0;return e}(),w=function(e){e={},Object.defineProperty(e,\"__esModule\",{value:!0});var t={stretch:\"stretch\",\"flex-start\":\"start\",\"flex-end\":\"end\",center:\"center\"},n={row:\"horizontal\",column:\"vertical\"},r={\"flex-start\":\"start\",\"flex-end\":\"end\",center:\"center\",\"space-between\":\"justify\",\"space-around\":\"justify\"},o={display:!0,flex:!0,alignItems:!0,alignSelf:!0,flexDirection:!0,justifyContent:!0,flexWrap:!0},u={isFlexProp:function(e){return o[e]},display:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return\"flex\"===e?(t.display=\"-webkit-box\",t.display=\"-webkit-flex\",t.display=\"flex\"):t.display=e,t},flex:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return t.webkitBoxFlex=e,t.webkitFlex=e,t.flex=e,t},flexWrap:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return t.flexWrap=e,t},alignItems:function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.webkitBoxAlign=t[e],n.webkitAlignItems=e,n.alignItems=e,n},alignSelf:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return t.webkitAlignSelf=e,t.alignSelf=e,t},flexDirection:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return t.webkitBoxOrient=n[e],t.webkitFlexDirection=e,t.flexDirection=e,t},justifyContent:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return t.webkitBoxPack=r[e],t.webkitJustifyContent=e,t.justifyContent=e,t}};return e[\"default\"]=u,e=e[\"default\"]}(),x=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(e){return null==e?null:o[\"default\"].get(e)}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var r=p,o=t(r);return e[\"default\"]=n,e=e[\"default\"]}(),O=function(e){return e={},Object.defineProperty(e,\"__esModule\",{value:!0}),e[\"default\"]=\"0.1.18\",e=e[\"default\"]}(),E=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(e,t){if(Array.isArray(e))for(var r=0,o=e.length;r<o;r++)n(e[r],t);else t.push(e)}function u(e){if(null==e)return e;var t=[];return n(e,t),1===t.length&&(t=t[0]),t}function i(e){if(e){if(Array.isArray(e)){for(var t={},n=0;n<e.length;++n){var r=i(e[n]);if(r)for(var o in r)t[o]=r[o]}return t}return e}}function l(e,t){if(y.isWeex&&\"text\"===e){var n=t.children;n&&(Array.isArray(n)&&(n=n.join(\"\")),t.children=null,t.value=n)}return t}function a(e,t){if(null==e)throw Error(\"Component type is null\");var n={},r=void 0,o=null,l=null;if(null!=t){l=void 0===t.ref?null:t.ref,o=void 0===t.key?null:String(t.key);for(r in t)t.hasOwnProperty(r)&&!h.hasOwnProperty(r)&&(n[r]=t[r])}for(var a=arguments.length,f=Array(a>2?a-2:0),d=2;d<a;d++)f[d-2]=arguments[d];if(f.length&&(n.children=u(f)),e&&e.defaultProps){var c=e.defaultProps;for(r in c)void 0===n[r]&&(n[r]=c[r])}return n.style&&(Array.isArray(n.style)||\"object\"===s(n.style))&&(n.style=i(n.style)),new m(e,o,l,n,v[\"default\"].component)}function f(e){var t=a.bind(null,e);return t.type=e,t}function d(e,t){var n=Object.assign({},e.props),r=e.key,o=e.ref,i=e._owner;if(t){void 0!==t.ref&&(o=t.ref,i=v[\"default\"].component),void 0!==t.key&&(r=String(t.key));var l=void 0;e.type&&e.type.defaultProps&&(l=e.type.defaultProps);var a=void 0;for(a in t)t.hasOwnProperty(a)&&!h.hasOwnProperty(a)&&(void 0===t[a]&&void 0!==l?n[a]=l[a]:n[a]=t[a])}for(var f=arguments.length,d=Array(f>2?f-2:0),c=2;c<f;c++)d[c-2]=arguments[c];return d.length&&(n.children=u(d)),new m(e.type,r,o,n,i)}function c(e){return\"object\"===(\"undefined\"==typeof e?\"undefined\":s(e))&&null!==e&&e.type&&e.props}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var s=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol?\"symbol\":typeof e};e.createElement=a,e.createFactory=f,e.cloneElement=d,e.isValidElement=c;var p=r,v=t(p),y=o,h={key:!0,ref:!0},m=function(e,t,n,r,o){return r=l(e,r),{type:e,key:t,ref:n,props:r,_owner:o}};return e[\"default\"]=m,e}(),N=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function o(e,t,n){var r=t&&t.key,o=\"string\"==typeof r?\"$\"+r:\".\"+n.toString(36),u=void 0===e[o];return u||console.warn('Encountered two children with the same key \"'+r+'\".'),o}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=r,l=t(i),a=s,c=t(a),v=f,y=t(v),h=d,m=t(h),_=p,b=t(_),g=\"style\",C=\"children\",w=\"tree\",x=function(){function e(t){n(this,e),this._currentElement=t}return u(e,[{key:\"mountComponent\",value:function(e,t,n){this._parent=e,this._context=t,this._mountID=l[\"default\"].mountID++;var r=this._currentElement.props,o=this._currentElement.type,u={_internal:this,type:o,props:r},i=r.append;this._instance=u,this._prevStyleCopy=Object.assign({},r.style);var a=this.getNativeNode();i!==w&&(n?n(a,e):l[\"default\"].driver.appendChild(a,e)),this._currentElement&&this._currentElement.ref&&c[\"default\"].attach(this._currentElement._owner,this._currentElement.ref,this);var f=r.children;return null!=f&&this.mountChildren(f,t),i===w&&(n?n(a,e):l[\"default\"].driver.appendChild(a,e)),u}},{key:\"mountChildren\",value:function(e,t){var n=this;Array.isArray(e)||(e=[e]);var r={},u=e.map(function(e,u){var i=(0,y[\"default\"])(e),l=o(r,e,u);r[l]=i,i._mountIndex=u;var a=i.mountComponent(n.getNativeNode(),t);return a});return this._renderedChildren=r,u}},{key:\"unmountChildren\",value:function(){var e=this._renderedChildren;if(e){for(var t in e){var n=e[t];n.unmountComponent()}this._renderedChildren=null}}},{key:\"unmountComponent\",value:function(e){if(this._nativeNode){var t=this._currentElement.ref;t&&c[\"default\"].detach(this._currentElement._owner,t,this),b[\"default\"].remove(this._nativeNode),e||l[\"default\"].driver.removeChild(this._nativeNode,this._parent),l[\"default\"].driver.removeAllEventListeners(this._nativeNode)}this.unmountChildren(),this._currentElement=null,this._nativeNode=null,this._parent=null,this._context=null,this._instance=null,this._prevStyleCopy=null}},{key:\"updateComponent\",value:function(e,t,n,r){this._currentElement=t,c[\"default\"].update(e,t,this);var o=e.props,u=t.props;this.updateProperties(o,u),this.updateChildren(u.children,r)}},{key:\"updateProperties\",value:function(e,t){var n=void 0,r=void 0,o=void 0;for(n in e)if(n!==C&&!t.hasOwnProperty(n)&&e.hasOwnProperty(n)&&null!=e[n])if(n===g){var u=this._prevStyleCopy;for(r in u)u.hasOwnProperty(r)&&(o=o||{},o[r]=\"\");this._prevStyleCopy=null}else\"on\"===n.substring(0,2)?e[n]&&l[\"default\"].driver.removeEventListener(this.getNativeNode(),n.slice(2).toLowerCase(),e[n]):l[\"default\"].driver.removeAttribute(this.getNativeNode(),n,e[n]);for(n in t){var i=t[n],a=n===g?this._prevStyleCopy:null!=e?e[n]:void 0;if(n!==C&&t.hasOwnProperty(n)&&i!==a&&(null!=i||null!=a))if(n===g)if(i?i=this._prevStyleCopy=Object.assign({},i):this._prevStyleCopy=null,null!=a){for(r in a)!a.hasOwnProperty(r)||i&&i.hasOwnProperty(r)||(o=o||{},o[r]=\"\");for(r in i)i.hasOwnProperty(r)&&a[r]!==i[r]&&(o=o||{},o[r]=i[r])}else o=i;else\"on\"===n.substring(0,2)?(null!=a&&l[\"default\"].driver.removeEventListener(this.getNativeNode(),n.slice(2).toLowerCase(),a),null!=i&&l[\"default\"].driver.addEventListener(this.getNativeNode(),n.slice(2).toLowerCase(),i)):null!=i?l[\"default\"].driver.setAttribute(this.getNativeNode(),n,i):l[\"default\"].driver.removeAttribute(this.getNativeNode(),n,e[n])}o&&l[\"default\"].driver.setStyles(this.getNativeNode(),o)}},{key:\"updateChildren\",value:function(e,t){var n=this,r=this._renderedChildren;if(null!=e||null!=r){var u={},i={};if(null!=e&&(Array.isArray(e)||(e=[e]),e.forEach(function(e,n){var l=o(u,e,n),a=r&&r[l],f=a&&a._currentElement;if(null!=a&&(0,m[\"default\"])(f,e))a.updateComponent(f,e,t,t),u[l]=a;else{if(a){var d=a.getNativeNode();a.unmountComponent(!0),i[l]=d}u[l]=(0,y[\"default\"])(e)}})),null!=r)for(var a in r)if(r.hasOwnProperty(a)){var f=r[a];u[a]||f.unmountComponent()}null!=u&&!function(){var e=0,o=0,a=null,f=function(f){if(!u.hasOwnProperty(f))return\"continue\";var d=u[f],c=r&&r[f];c===d?(c._mountIndex<e&&l[\"default\"].driver.insertAfter(c.getNativeNode(),n.getNativeNode(),a),e=Math.max(c._mountIndex,e),c._mountIndex=o):(null!=c&&(e=Math.max(c._mountIndex,e)),d.mountComponent(n.getNativeNode(),t,function(e,t){var n=i[f];n?l[\"default\"].driver.replaceChild(e,n,t):a?l[\"default\"].driver.insertAfter(e,t,a):l[\"default\"].driver.appendChild(e,t)}),d._mountIndex=o),o++,a=d.getNativeNode()};for(var d in u){f(d)}}(),this._renderedChildren=u}}},{key:\"getNativeNode\",value:function(){return null==this._nativeNode&&(this._nativeNode=l[\"default\"].driver.createElement(this._instance),b[\"default\"].set(this._nativeNode,this._instance)),this._nativeNode}},{key:\"getPublicInstance\",value:function(){return this.getNativeNode()}},{key:\"getName\",value:function(){return this._currentElement.type}}]),e}();return e[\"default\"]=x,e=e[\"default\"]}(),P=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=y,i=t(u),l=h,a=t(l),c=r,p=t(c),v=s,_=t(v),b=f,g=t(b),C=d,w=t(C),x=m,O=t(x),E=function(){function e(t){n(this,e),this._currentElement=t}return o(e,[{key:\"getName\",value:function(){var e=this._currentElement.type,t=this._instance&&this._instance.constructor;return e.displayName||t&&t.displayName||e.name||t&&t.name||null}},{key:\"mountComponent\",value:function(e,t,n){this._parent=e,this._context=t,this._mountID=p[\"default\"].mountID++,this._updateCount=0;var r=this._currentElement.type,o=this._currentElement.props,u=r.prototype&&r.prototype.isComponentClass,l=r.prototype.render,f=this._processContext(t),d=void 0,c=void 0;if(u||l)d=new r(o,f,a[\"default\"]);else{if(\"function\"!=typeof r)throw Error(\"Invalid component type \"+JSON.stringify(r));d=new i[\"default\"](r)}d.props=o,d.context=f,d.refs={},d.updater=a[\"default\"],d._internal=this,this._instance=d;var s=d.state;if(void 0===s&&(d.state=s=null),d.componentWillMount&&d.componentWillMount(),null==c){p[\"default\"].component=this,d.state=this._processPendingState(o,f);try{c=d.render(),Array.isArray(c)&&(c=c[0])}finally{p[\"default\"].component=null}}return this._renderedComponent=(0,g[\"default\"])(c),this._renderedComponent.mountComponent(this._parent,this._processChildContext(t),n),this._currentElement&&this._currentElement.ref&&_[\"default\"].attach(this._currentElement._owner,this._currentElement.ref,this),d.componentDidMount&&d.componentDidMount(),d}},{key:\"unmountComponent\",value:function(e){var t=this._instance;if(t.componentWillUnmount&&t.componentWillUnmount(),t._internal=null,null!=this._renderedComponent){var n=this._currentElement.ref;n&&_[\"default\"].detach(this._currentElement._owner,n,this),this._renderedComponent.unmountComponent(e),this._renderedComponent=null,this._instance=null}this._currentElement=null,this._pendingStateQueue=null,this._pendingForceUpdate=!1,this._context=null}},{key:\"_processContext\",value:function(e){var t=this._currentElement.type,n=t.contextTypes;if(!n)return{};var r={};for(var o in n)r[o]=e[o];return r}},{key:\"_processChildContext\",value:function(e){var t=this._instance,n=t.getChildContext&&t.getChildContext();return n?Object.assign({},e,n):e}},{key:\"_processPendingState\",value:function(e,t){var n=this._instance,r=this._pendingStateQueue;if(!r)return n.state;this._pendingStateQueue=null;for(var o=Object.assign({},n.state),u=0;u<r.length;u++){var i=r[u];Object.assign(o,\"function\"==typeof i?i.call(n,o,e,t):i)}return o}},{key:\"updateComponent\",value:function(e,t,n,r){var o=this._instance;o||console.error(\"Update component '\"+this.getName()+\"' that has already been unmounted (or failed to mount).\");var u=!1,i=void 0,l=void 0;this._context===r?i=o.context:(i=this._processContext(r),u=!0),e===t?l=t.props:(l=t.props,u=!0),u&&o.componentWillReceiveProps&&o.componentWillReceiveProps(l,i),_[\"default\"].update(e,t,this);var a=!0,f=o.props,d=o.state,c=this._processPendingState(l,i);if(this._pendingForceUpdate||(o.shouldComponentUpdate?a=o.shouldComponentUpdate(l,c,i):o.isPureComponentClass&&(a=!(0,O[\"default\"])(f,l)||!(0,O[\"default\"])(d,c))),a){this._pendingForceUpdate=!1;var s=o.context;o.componentWillUpdate&&o.componentWillUpdate(l,c,i),this._currentElement=t,this._context=r,o.props=l,o.state=c,o.context=i,this._updateRenderedComponent(r),o.componentDidUpdate&&o.componentDidUpdate(f,d,s),this._updateCount++}else this._currentElement=t,this._context=r,o.props=l,o.state=c,o.context=i}},{key:\"_updateRenderedComponent\",value:function(e){var t=this,n=this._renderedComponent,r=n._currentElement,o=this._instance,u=void 0;p[\"default\"].component=this;try{u=o.render(),Array.isArray(u)&&(u=u[0])}finally{p[\"default\"].component=null}(0,w[\"default\"])(r,u)?n.updateComponent(r,u,n._context,this._processChildContext(e)):!function(){var r=n.getNativeNode();n.unmountComponent(!0),t._renderedComponent=(0,g[\"default\"])(u),t._renderedComponent.mountComponent(t._parent,t._processChildContext(e),function(e,t){p[\"default\"].driver.replaceChild(e,r,t)})}()}},{key:\"getNativeNode\",value:function(){return this._renderedComponent.getNativeNode()}},{key:\"getPublicInstance\",value:function(){var e=this._instance;return e instanceof i[\"default\"]?null:e}}]),e}();return e[\"default\"]=E,e=e[\"default\"]}(),j=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(e,t,n){e=(0,l[\"default\"])(e);for(var r in t){var o=t[r];if(r!==f&&null!=o)if(r===a){if(n)continue;u[\"default\"].driver.setStyles(e,o)}else if(\"on\"===r.substring(0,2)){var i=r.slice(2).toLowerCase();u[\"default\"].driver.addEventListener(e,i,o)}else u[\"default\"].driver.setAttribute(e,r,o)}}e={},Object.defineProperty(e,\"__esModule\",{value:!0}),e[\"default\"]=n;var o=r,u=t(o),i=g,l=t(i),a=\"style\",f=\"children\";return e=e[\"default\"]}(),k=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var n=r,o=t(n),u=j,i=t(u),l=C,a=w,f=t(a),d=\"dangerouslySetInnerHTML\",c={getElementById:function(e){return o[\"default\"].document.getElementById(e)},createBody:function(){return o[\"default\"].document.body},createEmpty:function(){return o[\"default\"].document.createComment(\" empty \")},createText:function(e){return o[\"default\"].document.createTextNode(e)},updateText:function(e,t){var n=\"textContent\"in o[\"default\"].document?\"textContent\":\"nodeValue\";e[n]=t},createElement:function(e){var t=o[\"default\"].document.createElement(e.type),n=e.props;return(0,i[\"default\"])(t,n),t},appendChild:function(e,t){return t.appendChild(e)},removeChild:function(e,t){e.parentNode===t&&t.removeChild(e)},replaceChild:function(e,t,n){n.replaceChild(e,t)},insertAfter:function(e,t,n){var r=n.nextSibling;r?t.insertBefore(e,r):t.appendChild(e)},insertBefore:function(e,t,n){t.insertBefore(e,n)},nextSibling:function(e){return e.nextSibling},addEventListener:function(e,t,n){return e.addEventListener(t,n)},removeEventListener:function(e,t,n){return e.removeEventListener(t,n)},removeAllEventListeners:function(e){},removeAttribute:function(e,t){\"className\"===t&&(t=\"class\"),\"input\"!=e.nodeName.toLowerCase()||(\"checked\"!=t||\"checkbox\"!==e.type&&\"radio\"!==e.type)&&\"value\"!=t?t===d?e.innerHTML=null:e.removeAttribute(t):e[t]=null},setAttribute:function(e,t,n){\"className\"===t&&(t=\"class\"),\"input\"!=e.nodeName.toLowerCase()||(\"checked\"!=t||\"checkbox\"!==e.type&&\"radio\"!==e.type)&&\"value\"!=t?t===d?e.innerHTML=n.__html:null!=n&&e.setAttribute(t,n):e[t]=n},setStyles:function(e,t){for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];f[\"default\"].isFlexProp(n)?f[\"default\"][n](r,e.style):e.style[n]=(0,l.convertUnit)(r,n)}},getWindowWidth:function(){return o[\"default\"].document.documentElement.clientWidth}};return e[\"default\"]=c,e=e[\"default\"]}(),S=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(){u[\"default\"].EmptyComponent=l[\"default\"],u[\"default\"].NativeComponent=f[\"default\"],u[\"default\"].TextComponent=s[\"default\"],u[\"default\"].CompositeComponent=y[\"default\"]}e={},Object.defineProperty(e,\"__esModule\",{value:!0}),e[\"default\"]=n;var o=r,u=t(o),i=c,l=t(i),a=N,f=t(a),d=v,s=t(d),p=P,y=t(p);return e=e[\"default\"]}(),M=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var n=r,o=t(n),u=j,i=t(u),l=C,a=\"style\",f=\"id\",d=\"text\",c=750,s={},p={getElementById:function(e){return s[e]},createBody:function(){if(o[\"default\"].document.body)return o[\"default\"].document.body;var e=o[\"default\"].document.documentElement,t=o[\"default\"].document.createBody();return e.appendChild(t),t},createEmpty:function(){return o[\"default\"].document.createComment(\" empty \")},createText:function(e){return p.createElement({type:d,props:{value:e}})},updateText:function(e,t){p.setAttribute(e,\"value\",t)},createElement:function(e){var t=e.props,n={},r=t[a];for(var u in r)n[u]=(0,l.convertUnit)(r[u],u);\nvar f=o[\"default\"].document.createElement(e.type,{style:n});return(0,i[\"default\"])(f,t,!0),f},appendChild:function(e,t){return t.appendChild(e)},removeChild:function(e,t){var n=e.attr&&e.attr[f];return null!=n&&(s[n]=null),t.removeChild(e)},replaceChild:function(e,t,n){var r=t.previousSibling,o=t.nextSibling;this.removeChild(t,n),r?this.insertAfter(e,n,r):o?this.insertBefore(e,n,o):this.appendChild(e,n)},insertAfter:function(e,t,n){return t.insertAfter(e,n)},insertBefore:function(e,t,n){return t.insertBefore(e,n)},nextSibling:function(e){return e.nextSibling},addEventListener:function(e,t,n){return e.addEvent(t,n)},removeEventListener:function(e,t,n){return e.removeEvent(t,n)},removeAllEventListeners:function(e){},removeAttribute:function(e,t,n){return t==f&&(s[n]=null),e.setAttr(t,void 0)},setAttribute:function(e,t,n){return t==f&&(s[n]=e),e.setAttr(t,n)},setStyles:function(e,t){for(var n in t){var r=t[n];r=(0,l.convertUnit)(r,n),e.setStyle(n,r)}},afterRender:function(){o[\"default\"].document&&o[\"default\"].document.listener&&o[\"default\"].document.listener.createFinish&&o[\"default\"].document.listener.createFinish(function(){})},getWindowWidth:function(){return c}};return e[\"default\"]=p,e=e[\"default\"]}(),A=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(){var e=void 0;if(D.isWeex)e=I[\"default\"];else{if(!D.isWeb)throw Error(\"Encountered unknown container\");e=T[\"default\"]}return e}function u(e){e&&e.getWindowWidth&&(0,W.setRem)(e.getWindowWidth()/U)}function i(e,t,r){if((0,h[\"default\"])(),!x[\"default\"].driver){var o=n();x[\"default\"].driver=o}x[\"default\"].driver.beforeRender&&x[\"default\"].driver.beforeRender(e,t),u(x[\"default\"].driver),null!=t&&t!==x[\"default\"].document||(t=x[\"default\"].driver.createBody());var i=j[\"default\"].get(t),a=i&&i.isRootComponent;if(a){var f=i.getRenderedComponent(),d=f._currentElement;if((0,v[\"default\"])(d,e)){var s=f._context;return f.updateComponent(d,e,s,s),r&&r.call(b),i.getPublicInstance()}(0,g[\"default\"])(t)}var p=(0,l.createElement)(N[\"default\"],null,e),y=(0,c[\"default\"])(p),m={},_=y.mountComponent(t,m),b=_.getPublicInstance();return j[\"default\"].set(t,_),r&&r.call(b),x[\"default\"].driver.afterRender&&x[\"default\"].driver.afterRender(b),b}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var l=E,a=f,c=t(a),s=d,v=t(s),y=S,h=t(y),m=_,g=t(m),w=r,x=t(w),O=b,N=t(O),P=p,j=t(P),A=M,I=t(A),R=k,T=t(R),W=C,D=o,U=750;return e[\"default\"]=i,e=e[\"default\"]}(),I=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}e={},Object.defineProperty(e,\"__esModule\",{value:!0}),e.version=e.setNativeProps=e.findComponentInstance=e.unmountComponentAtNode=e.findDOMNode=e.render=e.PropTypes=e.PureComponent=e.Component=e.createFactory=e.isValidElement=e.cloneElement=e.createElement=void 0;var n=E;Object.defineProperty(e,\"createElement\",{enumerable:!0,get:function(){return n.createElement}}),Object.defineProperty(e,\"cloneElement\",{enumerable:!0,get:function(){return n.cloneElement}}),Object.defineProperty(e,\"isValidElement\",{enumerable:!0,get:function(){return n.isValidElement}}),Object.defineProperty(e,\"createFactory\",{enumerable:!0,get:function(){return n.createFactory}});var r=o,u=i,f=t(u),d=l,c=t(d),s=a,p=t(s),v=A,y=t(v),h=g,m=t(h),b=_,C=t(b),w=x,N=t(w),P=j,k=t(P),S=O,M=t(S);return r.isWeb&&(window.__RX__?console.warn(\"Multiple (conflicting) copies of Rx loaded, make sure to use only one.\"):window.__RX__=!0),e.Component=f[\"default\"],e.PureComponent=c[\"default\"],e.PropTypes=p[\"default\"],e.render=y[\"default\"],e.findDOMNode=m[\"default\"],e.unmountComponentAtNode=C[\"default\"],e.findComponentInstance=N[\"default\"],e.setNativeProps=k[\"default\"],e.version=M[\"default\"],e}(),R=function(e){\"use strict\";return e=I}(),n.exports=R});\ndefine(\"kg/rx-env/index\",[],function(e,n,o){var t,i;t=function(e){e={},Object.defineProperty(e,\"__esModule\",{value:!0});var n=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol?\"symbol\":typeof e},o=\"function\"==typeof callNative,t=\"object\"===(\"undefined\"==typeof window?\"undefined\":n(window))&&\"object\"===n(window.document),i=!1,r=!1,c=992;return t&&(e.isWidescreen=i=document.documentElement.clientWidth>=c,e.isDesktop=r=!/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent)),e.isWeex=o,e.isWeb=t,e.isWidescreen=i,e.isDesktop=r,e}(),i=function(e){\"use strict\";return e=t}(),o.exports=i});\ndefine(\"kg/rx-dimensions/index\",[\"kg/rx-env/index\"],function(e,n,t){var i,r,c=e(\"kg/rx-env/index\");i=function(e){function n(e,n){if(!(e instanceof n))throw new TypeError(\"Cannot call a class as a function\")}function t(){var e={};if(r.isWeex){var n=\"undefined\"!=typeof WXEnvironment?WXEnvironment:{};e={window:{width:o,height:n.deviceHeight*o/n.deviceWidth-u*o/n.deviceWidth,scale:1,fontScale:1},screen:{width:n.deviceWidth,height:n.deviceHeight}}}else if(r.isWeb){var t=document.documentElement;e={window:{width:o,height:t.clientHeight*o/t.clientWidth,scale:window.devicePixelRatio||1,fontScale:1},screen:screen}}return e}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,\"value\"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),r=c,o=750,u=128,a=function(){function e(){n(this,e)}return i(e,null,[{key:\"get\",value:function(e){return t()[e]}}]),e}();return e[\"default\"]=a,e=e[\"default\"]}(),r=function(e){\"use strict\";return e=i}(),t.exports=r});\ndefine(\"kg/rx-fetch/index\",[\"@weex-module/stream\"],function(t,e,n){var o,r,i,s,a,u,d=t(\"@weex-module/stream\");o=function(t){function e(){}function n(t,e){return function(){t.apply(e,arguments)}}function o(t){if(\"object\"!==f(this))throw new TypeError(\"Promises must be constructed via new\");if(\"function\"!=typeof t)throw new TypeError(\"not a function\");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(t,this)}function r(t,e){for(;3===t._state;)t=t._value;return 0===t._state?void t._deferreds.push(e):(t._handled=!0,void c(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?i:s)(e.promise,t._value);var o;try{o=n(t._value)}catch(r){return void s(e.promise,r)}i(e.promise,o)}))}function i(t,e){try{if(e===t)throw new TypeError(\"A promise cannot be resolved with itself.\");if(e&&(\"object\"===(\"undefined\"==typeof e?\"undefined\":f(e))||\"function\"==typeof e)){var r=e.then;if(e instanceof o)return t._state=3,t._value=e,void a(t);if(\"function\"==typeof r)return void d(n(r,e),t)}t._state=1,t._value=e,a(t)}catch(i){s(t,i)}}function s(t,e){t._state=2,t._value=e,a(t)}function a(t){2===t._state&&0===t._deferreds.length&&c(function(){t._handled||h(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)r(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled=\"function\"==typeof t?t:null,this.onRejected=\"function\"==typeof e?e:null,this.promise=n}function d(t,e){var n=!1;try{t(function(t){n||(n=!0,i(e,t))},function(t){n||(n=!0,s(e,t))})}catch(o){if(n)return;n=!0,s(e,o)}}t={},Object.defineProperty(t,\"__esModule\",{value:!0});var f=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol?\"symbol\":typeof t},l=setTimeout,c=\"function\"==typeof setImmediate&&setImmediate||function(t){l(t,0)},h=function(t){\"undefined\"!=typeof console&&console&&console.log(\"Possible Unhandled Promise Rejection:\",t)};return o.prototype[\"catch\"]=function(t){return this.then(null,t)},o.prototype.then=function(t,n){var o=new this.constructor(e);return r(this,new u(t,n,o)),o},o.all=function(t){var e=Array.prototype.slice.call(t);return new o(function(t,n){function o(i,s){try{if(s&&(\"object\"===(\"undefined\"==typeof s?\"undefined\":f(s))||\"function\"==typeof s)){var a=s.then;if(\"function\"==typeof a)return void a.call(s,function(t){o(i,t)},n)}e[i]=s,0===--r&&t(e)}catch(u){n(u)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},o.resolve=function(t){return t&&\"object\"===(\"undefined\"==typeof t?\"undefined\":f(t))&&t.constructor===o?t:new o(function(e){e(t)})},o.reject=function(t){return new o(function(e,n){n(t)})},o.race=function(t){return new o(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},o._setImmediateFn=function(t){c=t},o._setUnhandledRejectionFn=function(t){h=t},t[\"default\"]=o,t=t[\"default\"]}(),r=function(t){function e(t){return t&&t.__esModule?t:{\"default\":t}}t={},Object.defineProperty(t,\"__esModule\",{value:!0});var n=o,r=e(n),i=\"undefined\"!=typeof callNative,s=r[\"default\"];return i||\"undefined\"==typeof Promise||(s=Promise),t[\"default\"]=s,t=t[\"default\"]}(),i=function(t){function e(t){return t&&t.__esModule?t:{\"default\":t}}function n(){return\"jsonp_\"+Date.now()+\"_\"+Math.ceil(1e5*Math.random())}function o(t){try{delete window[t]}catch(e){window[t]=void 0}}function i(t){document.getElementsByTagName(\"head\")[0].removeChild(t)}t={},Object.defineProperty(t,\"__esModule\",{value:!0});var s=r,a=e(s),u=\"undefined\"!=typeof callNative,f={timeout:5e3,jsonpCallback:\"callback\"},l=function(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=void 0;return u&&(r=d).fetch?new a[\"default\"](function(e,n){var o={url:t,method:\"GET\",type:\"jsonp\"};r.fetch(o,function(t){try{if(\"string\"==typeof t&&(t=JSON.parse(t),t.data&&\"string\"==typeof t.data&&t.ok))try{t.data=JSON.parse(t.data)}catch(o){throw\"the response.data in not valid json\"}e({ok:t.ok,status:t.status,statusText:t.statusText,data:t.data,json:function(){return a[\"default\"].resolve(t.data)}})}catch(o){n(o)}},function(t){})}):u&&(r=d).sendHttp?new a[\"default\"](function(e,n){r.sendHttp({url:t,method:\"GET\"},function(t){\"string\"==typeof t&&(t=JSON.parse(t)),e({status:200,json:function(){return a[\"default\"].resolve(t)}})})}):u?a[\"default\"].reject(\"no fetch or sendhttp service\"):new a[\"default\"](function(r,s){var u=null!=e.timeout?e.timeout:f.timeout,d=null!=e.jsonpCallback?e.jsonpCallback:f.jsonpCallback,l=void 0,c=n(),h=document.createElement(\"script\");window[c]=function(t){r({ok:!0,json:function(){return a[\"default\"].resolve(t)}}),l&&clearTimeout(l),i(h),o(c)},t+=t.indexOf(\"?\")===-1?\"?\":\"&\",h.setAttribute(\"src\",t+d+\"=\"+c),document.getElementsByTagName(\"head\")[0].appendChild(h),l=setTimeout(function(){s(new Error(\"JSONP request to \"+t+\" timed out\")),o(c),i(h)},u)})};return t[\"default\"]=l,t=t[\"default\"]}(),s=function(t){function e(t){return t&&t.__esModule?t:{\"default\":t}}function n(t){if(\"string\"!=typeof t&&(t=String(t)),/[^a-z0-9\\-#$%&'*+.\\^_`|~]/i.test(t))throw new TypeError(\"Invalid character in header field name\");return t.toLowerCase()}function o(t){return\"string\"!=typeof t&&(t=String(t)),t}function i(t){this.originHeaders=t,this.map={},t instanceof i?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function s(t){return t.bodyUsed?w[\"default\"].reject(new TypeError(\"Already read\")):void(t.bodyUsed=!0)}function a(t){return new w[\"default\"](function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function u(t){var e=new FileReader;return e.readAsArrayBuffer(t),a(e)}function f(t,e){var n=new FileReader,o=e.headers.map[\"content-type\"]?e.headers.map[\"content-type\"].toString():\"\",r=/charset\\=[0-9a-zA-Z\\-\\_]*;?/,i=t.type.match(r)||o.match(r),s=[t];return i&&s.push(i[0].replace(/^charset\\=/,\"\").replace(/;$/,\"\")),n.readAsText.apply(n,s),a(n)}function l(){return this.bodyUsed=!1,this._initBody=function(t,e){if(this._bodyInit=t,\"string\"==typeof t)this._bodyText=t;else if(T.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t,this._options=e;else if(T.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(t){if(!T.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t))throw new Error(\"unsupported BodyInit type\")}else this._bodyText=\"\"},T.blob?(this.blob=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return w[\"default\"].resolve(this._bodyBlob);if(this._bodyFormData)throw new Error(\"could not read FormData body as blob\");return w[\"default\"].resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(u)},this.text=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return f(this._bodyBlob,this._options);if(this._bodyFormData)throw new Error(\"could not read FormData body as text\");return w[\"default\"].resolve(this._bodyText)}):this.text=function(){var t=s(this);return t?t:w[\"default\"].resolve(this._bodyText)},T.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function c(t){var e=t.toUpperCase();return g.indexOf(e)>-1?e:t}function h(t,e){e=e||{};var n=e.body;if(h.prototype.isPrototypeOf(t)){if(t.bodyUsed)throw new TypeError(\"Already read\");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new i(t.headers)),this.method=t.method,this.mode=t.mode,n||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=t;if(this.credentials=e.credentials||this.credentials||\"omit\",!e.headers&&this.headers||(this.headers=new i(e.headers)),this.method=c(e.method||this.method||\"GET\"),this.mode=e.mode||this.mode||null,this.referrer=null,(\"GET\"===this.method||\"HEAD\"===this.method)&&n)throw new TypeError(\"Body not allowed for GET or HEAD requests\");this._initBody(n,e)}function p(t){var e=new FormData;return t.trim().split(\"&\").forEach(function(t){if(t){var n=t.split(\"=\"),o=n.shift().replace(/\\+/g,\" \"),r=n.join(\"=\").replace(/\\+/g,\" \");e.append(decodeURIComponent(o),decodeURIComponent(r))}}),e}function y(t){var e=new i,n=t.getAllResponseHeaders().trim().split(\"\\n\");return n.forEach(function(t){var n=t.trim().split(\":\"),o=n.shift().trim(),r=n.join(\":\").trim();e.append(o,r)}),e}function m(t,e){e||(e={}),this._initBody(t,e),this.type=\"default\",this.status=e.status,this.ok=this.status>=200&&this.status<300,this.statusText=e.statusText,this.headers=e.headers instanceof i?e.headers:new i(e.headers),this.url=e.url||\"\"}t={},Object.defineProperty(t,\"__esModule\",{value:!0});var v=r,w=e(v),b=\"undefined\"!=typeof b?b:\"undefined\"!=typeof global?global:\"undefined\"!=typeof window?window:void 0,_=\"undefined\"!=typeof callNative;i.prototype.append=function(t,e){t=n(t),e=o(e);var r=this.map[t];r||(r=[],this.map[t]=r),r.push(e)},i.prototype[\"delete\"]=function(t){delete this.map[n(t)]},i.prototype.get=function(t){var e=this.map[n(t)];return e?e[0]:null},i.prototype.getAll=function(t){return this.map[n(t)]||[]},i.prototype.has=function(t){return this.map.hasOwnProperty(n(t))},i.prototype.set=function(t,e){this.map[n(t)]=[o(e)]},i.prototype.forEach=function(t,e){Object.getOwnPropertyNames(this.map).forEach(function(n){this.map[n].forEach(function(o){t.call(e,o,n,this)},this)},this)};var T={blob:\"FileReader\"in b&&\"Blob\"in b&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:\"FormData\"in b,arrayBuffer:\"ArrayBuffer\"in b},g=[\"DELETE\",\"GET\",\"HEAD\",\"OPTIONS\",\"POST\",\"PUT\"];h.prototype.clone=function(){return new h(this)},l.call(h.prototype),l.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},m.error=function(){var t=new m(null,{status:0,statusText:\"\"});return t.type=\"error\",t};var E=[301,302,303,307,308];m.redirect=function(t,e){if(E.indexOf(e)===-1)throw new RangeError(\"Invalid status code\");return new m(null,{status:e,headers:{location:t}})};var j=function(t,e){return new w[\"default\"](function(n,o){var r;r=h.prototype.isPrototypeOf(t)&&!e?t:new h(t,e);var i=void 0;if(_&&(i=d).fetch){if(i.fetch){var s={url:r.url,method:r.method,header:r.headers&&r.headers.originHeaders,body:r.body};s.type=e&&e.dataType?e.dataType:\"json\",i.fetch(s,function(t){try{\"string\"==typeof t&&(t=JSON.parse(t));var e=\"string\"==typeof t.data?t.data:JSON.stringify(t.data),i=new m(e,{status:t.status,statusText:t.statusText,headers:t.headers,url:r.url});n(i)}catch(s){o(s)}},function(t){})}}else if(_&&(i=d).sendHttp)i.sendHttp({url:r.url,method:r.method,header:r.headers&&r.headers.originHeaders,body:r.body},function(t){n(new m(t,{status:200}))});else{var a,u;!function(){var t=function(){return\"responseURL\"in a?a.responseURL:/^X-Request-URL:/m.test(a.getAllResponseHeaders())?a.getResponseHeader(\"X-Request-URL\"):void 0},e=function(){if(4===a.readyState){var e=1223===a.status?204:a.status;if(e<100||e>599){if(u)return;return u=!0,void o(new TypeError(\"Network request failed\"))}var r={status:e,statusText:a.statusText,headers:y(a),url:t()},i=\"response\"in a?a.response:a.responseText;u||(u=!0,n(new m(i,r)))}};a=new XMLHttpRequest,u=!1,a.onreadystatechange=e,a.onload=e,a.onerror=function(){u||(u=!0,o(new TypeError(\"Network request failed\")))},a.open(r.method,r.url,!0);try{\"include\"===r.credentials&&(\"withCredentials\"in a?a.withCredentials=!0:console&&console.warn&&console.warn(\"withCredentials is not supported, you can ignore this warning\"))}catch(i){console&&console.warn&&console.warn(\"set withCredentials error:\"+i)}\"responseType\"in a&&T.blob&&(a.responseType=\"blob\"),r.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),a.send(\"undefined\"==typeof r._bodyInit?null:r._bodyInit)}()}})};return t[\"default\"]=j,t=t[\"default\"]}(),a=function(t){function e(t){return t&&t.__esModule?t:{\"default\":t}}t={},Object.defineProperty(t,\"__esModule\",{value:!0});var n=s,o=e(n),r=i,a=e(r),u=function(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=void 0;return n=\"jsonp\"===e.mode?(0,a[\"default\"])(t,e):\"undefined\"!=typeof fetch?fetch(t,e):(0,o[\"default\"])(t,e)};return t[\"default\"]=u,t=t[\"default\"]}(),u=function(t){\"use strict\";return t=a}(),n.exports=u});\ndefine(\"kg/rx-downgrade/index\",[\"@weex-module/instanceWrap\"],function(e,r,n){var t,o,i,a=e(\"@weex-module/instanceWrap\");t=function(e){e={},Object.defineProperty(e,\"__esModule\",{value:!0});var r=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol?\"symbol\":typeof e};return e[\"default\"]={satisfies:function(e,n){var t=/(\\W+)?([\\d|.]+)/;if((\"undefined\"==typeof e?\"undefined\":r(e))+(\"undefined\"==typeof n?\"undefined\":r(n))!=\"stringstring\")return!1;if(\"*\"==n)return!0;for(var o=n.match(t),i=e.split(\".\"),a=o[2].split(\".\"),f=Math.max(i.length,a.length),u=0,d=0;d<f;d++){if(i[d]&&!a[d]&&parseInt(i[d])>0||parseInt(i[d])>parseInt(a[d])){u=1;break}if(a[d]&&!i[d]&&parseInt(a[d])>0||parseInt(i[d])<parseInt(a[d])){u=-1;break}}switch(o[1]){case\"<\":if(u===-1)return!0;break;case\"<=\":if(1!==u)return!0;break;case\">\":if(1===u)return!0;break;case\">=\":if(u!==-1)return!0;break;default:if(0===u)return!0}return!1}},e=e[\"default\"]}(),o=function(e){function r(e){return e&&e.__esModule?e:{\"default\":e}}function n(e){if(\"*\"==e)return e;e=\"string\"==typeof e?e:\"\";for(var r=e.split(\".\"),n=0,t=[];n<3;){var o=\"string\"==typeof r[n]&&r[n]?r[n]:\"0\";t.push(o),n++}return t.join(\".\")}function o(e,r,n){var t={isDowngrade:!0,errorType:1,code:1e3},o=function(e,r,n){return\"Downgrade[\"+e+\"] :: deviceInfo \"+r+\" matched criteria \"+n},i=e.toLowerCase();return i.indexOf(\"osversion\")>=0?t.code=1001:i.indexOf(\"appversion\")>=0?t.code=1002:i.indexOf(\"weexversion\")>=0?t.code=1003:i.indexOf(\"devicemodel\")>=0&&(t.code=1004),t.errorMessage=o(e,r,n),t}function i(e){var r={isDowngrade:!1};if(!d)return r;var t=global.WXEnvironment,i=t.platform||\"unknow\",a=i.toLowerCase(),f=e[a]||{};for(var s in t){var c=s,l=c.toLowerCase(),p=t[s],v=l.indexOf(\"version\")>=0,y=l.indexOf(\"devicemodel\")>=0,b=f[s];if(b&&v){var g=n(b),m=n(t[s]);if(u[\"default\"].satisfies(m,g)){r=o(c,p,b);break}}else if(y){var w=\"array\"==typeof b?b:[b];if(w.indexOf(p)>=0){r=o(c,p,b);break}}}return r}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var f=t,u=r(f),d=\"undefined\"!=typeof callNative;return e[\"default\"]={setting:function(e){if(d){var r=i(e.downgrade);if(r.isDowngrade){var n=a;return n.error(r.errorType,r.code,r.errorMessage),!0}}return!1}},e=e[\"default\"]}(),i=function(e){function r(e){return e&&e.__esModule?e:{\"default\":e}}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var n=o,t=r(n);return e[\"default\"]=t[\"default\"],e=e[\"default\"]}(),n.exports=i});\ndefine(\"kg/rx-animated/index\",[\"kg/rx/index\",\"kg/rx-components/index\"],function(t,e,n){var r,i,o,a,u,s,c,l,f,h,p,_,y,v,d,b,m,g,w,k,O,j,V,P,x,E,T,C,A,R,F,M,S,I,U,L,q=t(\"kg/rx/index\"),D=t(\"kg/rx-components/index\");r=function(t){\"use strict\";var e=function(t,e,n,r,i,o,a,u){if(!t){var s;if(void 0===e)s=new Error(\"Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.\");else{var c=[n,r,i,o,a,u],l=0;s=new Error(e.replace(/%s/g,function(){return c[l++]})),s.name=\"Invariant Violation\"}throw s.framesToPop=1,s}};return t=e}(),i=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=function(){function t(){e(this,t)}return n(t,[{key:\"__attach\",value:function(){}},{key:\"__detach\",value:function(){}},{key:\"__getValue\",value:function(){}},{key:\"__getAnimatedValue\",value:function(){return this.__getValue()}},{key:\"__addChild\",value:function(t){}},{key:\"__removeChild\",value:function(t){}},{key:\"__getChildren\",value:function(){return[]}}]),t}();return t=r}(),o=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function n(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function r(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=i,u=function(t){function i(){e(this,i);var t=n(this,Object.getPrototypeOf(i).call(this));return t._children=[],t}return r(i,t),o(i,[{key:\"__addChild\",value:function(t){0===this._children.length&&this.__attach(),this._children.push(t)}},{key:\"__removeChild\",value:function(t){var e=this._children.indexOf(t);return e===-1?void console.warn(\"Trying to remove a child that doesn't exist\"):(this._children.splice(e,1),void(0===this._children.length&&this.__detach()))}},{key:\"__getChildren\",value:function(){return this._children}}]),i}(a);return t=u}(),a=function(t){\"use strict\";var e={current:{createInteractionHandle:function(){},clearInteractionHandle:function(){}},inject:function(t){e.current=t}};return t=e}(),u=function(t){\"use strict\";function e(t){var e;return\"number\"==typeof t?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=f.hex6.exec(t))?parseInt(e[1]+\"ff\",16)>>>0:h.hasOwnProperty(t)?h[t]:(e=f.rgb.exec(t))?(o(e[1])<<24|o(e[2])<<16|o(e[3])<<8|255)>>>0:(e=f.rgba.exec(t))?(o(e[1])<<24|o(e[2])<<16|o(e[3])<<8|u(e[4]))>>>0:(e=f.hex3.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+\"ff\",16)>>>0:(e=f.hex8.exec(t))?parseInt(e[1],16)>>>0:(e=f.hex4.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=f.hsl.exec(t))?(255|r(a(e[1]),s(e[2]),s(e[3])))>>>0:(e=f.hsla.exec(t))?(r(a(e[1]),s(e[2]),s(e[3]))|u(e[4]))>>>0:null}function n(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function r(t,e,r){var i=r<.5?r*(1+e):r+e-r*e,o=2*r-i,a=n(o,i,t+1/3),u=n(o,i,t),s=n(o,i,t-1/3);return Math.round(255*a)<<24|Math.round(255*u)<<16|Math.round(255*s)<<8}function i(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return\"\\\\(\\\\s*(\"+e.join(\")\\\\s*,\\\\s*(\")+\")\\\\s*\\\\)\"}function o(t){var e=parseInt(t,10);return e<0?0:e>255?255:e}function a(t){var e=parseFloat(t);return(e%360+360)%360/360}function u(t){var e=parseFloat(t);return e<0?0:e>1?255:Math.round(255*e)}function s(t){var e=parseFloat(t,10);return e<0?0:e>100?1:e/100}var c=\"[-+]?\\\\d*\\\\.?\\\\d+\",l=c+\"%\",f={rgb:new RegExp(\"rgb\"+i(c,c,c)),rgba:new RegExp(\"rgba\"+i(c,c,c,c)),hsl:new RegExp(\"hsl\"+i(c,l,l)),hsla:new RegExp(\"hsla\"+i(c,l,l,c)),hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex4:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{6})$/,hex8:/^#([0-9a-fA-F]{8})$/},h={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199};return t=e}(),s=function(t){\"use strict\";var e=0;return t=function(){return String(e++)}}(),c=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=function(){function t(){e(this,t)}return n(t,[{key:\"start\",value:function(t,e,n,r){}},{key:\"stop\",value:function(){}},{key:\"__debouncedOnEnd\",value:function(t){var e=this.__onEnd;this.__onEnd=null,e&&e(t)}}]),t}();return t=r}(),l=function(t){\"use strict\";function e(){this._cache=[]}return e.prototype.add=function(t){this._cache.indexOf(t)===-1&&this._cache.push(t)},e.prototype.forEach=function(t){this._cache.forEach(t)},t=e}(),f=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function n(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function r(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=i,s=o,c=function(t){function i(t,r){e(this,i);var o=n(this,Object.getPrototypeOf(i).call(this));return o._strings=t,o._values=r,o}return r(i,t),a(i,[{key:\"__transformValue\",value:function(t){return t instanceof u?t.__getValue():t}},{key:\"__getValue\",value:function(){for(var t=this._strings[0],e=0;e<this._values.length;++e)t+=this.__transformValue(this._values[e])+this._strings[1+e];return t}},{key:\"__attach\",value:function(){for(var t=0;t<this._values.length;++t)this._values[t]instanceof u&&this._values[t].__addChild(this)}},{key:\"__detach\",value:function(){for(var t=0;t<this._values.length;++t)this._values[t]instanceof u&&this._values[t].__removeChild(this)}}]),i}(s);return t=c}(),h=function(t){\"use strict\";function e(t){return t instanceof n}var n=i;return t=e}(),p=function(t){\"use strict\";function e(t,e){return 1-3*e+3*t}function n(t,e){return 3*e-6*t}function r(t){return 3*t}function i(t,i,o){return((e(i,o)*t+n(i,o))*t+r(i))*t}function o(t,i,o){return 3*e(i,o)*t*t+2*n(i,o)*t+r(i)}function a(t,e,n,r,o){var a,u,s=0;do u=e+(n-e)/2,a=i(u,r,o)-t,a>0?n=u:e=u;while(Math.abs(a)>l&&++s<f);return u}function u(t,e,n,r){for(var a=0;a<s;++a){var u=o(e,n,r);if(0===u)return e;var c=i(e,n,r)-t;e-=c/u}return e}var s=4,c=.001,l=1e-7,f=10,h=11,p=1/(h-1),_=\"function\"==typeof Float32Array;return t=function(t,e,n,r){function s(e){for(var r=0,i=1,s=h-1;i!==s&&l[i]<=e;++i)r+=p;--i;var f=(e-l[i])/(l[i+1]-l[i]),_=r+f*p,y=o(_,t,n);return y>=c?u(e,_,t,n):0===y?_:a(e,r,r+p,t,n)}if(!(0<=t&&t<=1&&0<=n&&n<=1))throw new Error(\"bezier x values must be in [0, 1] range\");var l=_?new Float32Array(h):new Array(h);if(t!==e||n!==r)for(var f=0;f<h;++f)l[f]=i(f*p,t,n);return function(o){return t===e&&n===r?o:0===o?0:1===o?1:i(s(o),e,r)}}}(),_=function(t){\"use strict\";var e={current:function(t){return global.requestAnimationFrame(t)},inject:function(t){e.current=t}};return t=e}(),y=function(t){\"use strict\";var e={current:function(t){return global.cancelAnimationFrame(t)},inject:function(t){e.current=t}};return t=e}(),v=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function n(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function r(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=c,a=_,u=y,s=function(t){function o(t){e(this,o);var r=n(this,Object.getPrototypeOf(o).call(this));return r._deceleration=void 0!==t.deceleration?t.deceleration:.998,r._velocity=t.velocity,r.__isInteraction=void 0===t.isInteraction||t.isInteraction,r}return r(o,t),i(o,[{key:\"start\",value:function(t,e,n){this.__active=!0,this._lastValue=t,this._fromValue=t,this._onUpdate=e,this.__onEnd=n,this._startTime=Date.now(),this._animationFrame=a.current(this.onUpdate.bind(this))}},{key:\"onUpdate\",value:function(){var t=Date.now(),e=this._fromValue+this._velocity/(1-this._deceleration)*(1-Math.exp(-(1-this._deceleration)*(t-this._startTime)));return this._onUpdate(e),Math.abs(this._lastValue-e)<.1?void this.__debouncedOnEnd({finished:!0}):(this._lastValue=e,void(this.__active&&(this._animationFrame=a.current(this.onUpdate.bind(this)))))}},{key:\"stop\",value:function(){this.__active=!1,u.current(this._animationFrame),this.__debouncedOnEnd({finished:!1})}}]),o}(o);return t=s}(),d=function(t){\"use strict\";function e(t){return 3.62*(t-30)+194}function n(t){return 3*(t-8)+25}function r(t,r){return{tension:e(t),friction:n(r)}}function i(t,r){function i(t,e,n){return(t-e)/(n-e)}function o(t,e,n){return e+t*(n-e)}function a(t,e,n){return t*n+(1-t)*e}function u(t,e,n){return a(2*t-t*t,e,n)}function s(t){return 7e-4*Math.pow(t,3)-.031*Math.pow(t,2)+.64*t+1.28}function c(t){return 44e-6*Math.pow(t,3)-.006*Math.pow(t,2)+.36*t+2}function l(t){return 4.5e-7*Math.pow(t,3)-332e-6*Math.pow(t,2)+.1078*t+5.84}function f(t){return t<=18?s(t):t>18&&t<=44?c(t):l(t)}var h=i(t/1.7,0,20);h=o(h,0,.8);var p=i(r/1.7,0,20),_=o(p,.5,200),y=u(h,f(_),.01);return{tension:e(_),friction:n(y)}}return t={fromOrigamiTensionAndFriction:r,fromBouncinessAndSpeed:i}}(),b=function(t){function e(t){var e=Object.keys(t)[0],n=\"\";return 0===e.indexOf(\"translate\")&&(n=\"rem\"),e+\"(\"+t[e]+n+\")\"}function n(t){return t&&t.transform&&\"string\"!=typeof t.transform&&(t.transform=t.transform.map(e).join(\" \")),t}return t={},Object.defineProperty(t,\"__esModule\",{value:!0}),t[\"default\"]=n,t=t[\"default\"]}(),m=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function n(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function r(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=i,s=o,c=function(t){function i(t){e(this,i);var r=n(this,Object.getPrototypeOf(i).call(this));return r._transforms=t,r}return r(i,t),a(i,[{key:\"__getValue\",value:function(){return this._transforms.map(function(t){var e={};for(var n in t){var r=t[n];r instanceof u?e[n]=r.__getValue():e[n]=r}return e})}},{key:\"__getAnimatedValue\",value:function(){return this._transforms.map(function(t){var e={};for(var n in t){var r=t[n];r instanceof u?e[n]=r.__getAnimatedValue():e[n]=r}return e})}},{key:\"__attach\",value:function(){var t=this;this._transforms.forEach(function(e){for(var n in e){var r=e[n];r instanceof u&&r.__addChild(t)}})}},{key:\"__detach\",value:function(){var t=this;this._transforms.forEach(function(e){for(var n in e){var r=e[n];r instanceof u&&r.__removeChild(t)}})}}]),i}(s);return t=c}(),g=function(t){\"use strict\";var e={current:function(t){return t},inject:function(t){e.current=t}};return t=e}(),w=function(t){\"use strict\";var e={current:function(t,e){return!!t.setNativeProps&&void t.setNativeProps(e)},inject:function(t){e.current=t}};return t=e}(),k=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function n(t,e,n,r,i,o,a,u){var s=t;if(s<e){if(\"identity\"===a)return s;\"clamp\"===a&&(s=e)}if(s>n){if(\"identity\"===u)return s;\"clamp\"===u&&(s=n)}return r===i?r:e===n?t<=e?r:i:(e===-(1/0)?s=-s:n===1/0?s-=e:s=(s-e)/(n-e),s=o(s),r===-(1/0)?s=-s:i===1/0?s+=r:s=s*(i-r)+r,s)}function i(t){var e=p(t);if(null===e)return t;e=e||0;var n=(4278190080&e)>>>24,r=(16711680&e)>>>16,i=(65280&e)>>>8,o=(255&e)/255;return\"rgba(\"+n+\", \"+r+\", \"+i+\", \"+o+\")\"}function o(t){var e=t.outputRange;_(e.length>=2,\"Bad output range\"),e=e.map(i),a(e);var n=e[0].match(d).map(function(){return[]});e.forEach(function(t){t.match(d).forEach(function(t,e){n[e].push(+t)})});var r=e[0].match(d).map(function(e,r){return v.create(f({},t,{outputRange:n[r]}))}),o=/^rgb/.test(e[0]);return function(t){var n=0;return e[0].replace(d,function(){var e=r[n++](t);return String(o&&n<4?Math.round(e):e)})}}function a(t){for(var e=t[0].replace(d,\"\"),n=1;n<t.length;++n)_(e===t[n].replace(d,\"\"),\"invalid pattern \"+t[0]+\" and \"+t[n])}function s(t,e){for(var n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}function c(t){_(t.length>=2,\"inputRange must have at least 2 elements\");for(var e=1;e<t.length;++e)_(t[e]>=t[e-1],\"inputRange must be monotonically increasing \"+t)}function l(t,e){_(e.length>=2,t+\" must have at least 2 elements\"),_(2!==e.length||e[0]!==-(1/0)||e[1]!==1/0,t+\"cannot be ]-infinity;+infinity[ \"+e)}var f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),p=u,_=r,y=function(t){return t},v=function(){function t(){e(this,t)}return h(t,null,[{key:\"create\",value:function(t){if(t.outputRange&&\"string\"==typeof t.outputRange[0])return o(t);var e=t.outputRange;l(\"outputRange\",e);var r=t.inputRange;l(\"inputRange\",r),c(r),_(r.length===e.length,\"inputRange (\"+r.length+\") and outputRange (\"+e.length+\") must have the same length\");var i=t.easing||y,a=\"extend\";void 0!==t.extrapolateLeft?a=t.extrapolateLeft:void 0!==t.extrapolate&&(a=t.extrapolate);var u=\"extend\";return void 0!==t.extrapolateRight?u=t.extrapolateRight:void 0!==t.extrapolate&&(u=t.extrapolate),function(t){_(\"number\"==typeof t,\"Cannot interpolation an input which is not a number\");var o=s(t,r);return n(t,r[o],r[o+1],e[o],e[o+1],i,a,u)}}}]),t}(),d=/[0-9\\.-]+/g;return t=v}(),O=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=p,i=function(){function t(){e(this,t)}return n(t,null,[{key:\"step0\",value:function(t){return t>0?1:0}},{key:\"step1\",value:function(t){return t>=1?1:0}},{key:\"linear\",value:function(t){return t}},{key:\"ease\",value:function(t){return o(t)}},{key:\"quad\",value:function(t){return t*t}},{key:\"cubic\",value:function(t){return t*t*t}},{key:\"poly\",value:function(t){return function(e){return Math.pow(e,t)}}},{key:\"sin\",value:function(t){return 1-Math.cos(t*Math.PI/2)}},{key:\"circle\",value:function(t){return 1-Math.sqrt(1-t*t)}},{key:\"exp\",value:function(t){return Math.pow(2,10*(t-1))}},{key:\"elastic\",value:function(){var t=arguments.length<=0||void 0===arguments[0]?1:arguments[0],e=t*Math.PI;return function(t){return 1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*e)}}},{key:\"back\",value:function(t){return void 0===t&&(t=1.70158),function(e){return e*e*((t+1)*e-t)}}},{key:\"bounce\",value:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?(t-=1.5/2.75,7.5625*t*t+.75):t<2.5/2.75?(t-=2.25/2.75,7.5625*t*t+.9375):(t-=2.625/2.75,7.5625*t*t+.984375)}},{key:\"bezier\",value:function(t,e,n,i){return r(t,e,n,i)}},{key:\"in\",value:function(t){return t}},{key:\"out\",value:function(t){return function(e){return 1-t(1-e)}}},{key:\"inOut\",value:function(t){return function(e){return e<.5?t(2*e)/2:1-t(2*(1-e))/2}}}]),t}(),o=i.bezier(.42,0,1,1);return t=i}(),j=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function n(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function r(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=i,c=o,l=m,f=g,h=function(t){function i(t){e(this,i);var r=n(this,Object.getPrototypeOf(i).call(this));return t=f.current(t)||{},!t.transform||t.transform instanceof s||(t=a({},t,{transform:new l(t.transform)})),r._style=t,r}return r(i,t),u(i,[{key:\"__getValue\",value:function(){var t={};for(var e in this._style){var n=this._style[e];n instanceof s?t[e]=n.__getValue():t[e]=n}return t}},{key:\"__getAnimatedValue\",value:function(){var t={};for(var e in this._style){var n=this._style[e];n instanceof s&&(t[e]=n.__getAnimatedValue())}return t}},{key:\"__attach\",value:function(){for(var t in this._style){var e=this._style[t];e instanceof s&&e.__addChild(this)}}},{key:\"__detach\",value:function(){for(var t in this._style){var e=this._style[t];e instanceof s&&e.__removeChild(this)}}}]),i}(c);return t=h}(),V=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function n(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function i(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=o,c=r,l=k,f=s,h=function(t){function r(t,i){e(this,r);var o=n(this,Object.getPrototypeOf(r).call(this));return o._parent=t,o._interpolation=i,o._listeners={},o}return i(r,t),a(r,[{key:\"__getValue\",value:function(){var t=this._parent.__getValue();return c(\"number\"==typeof t,\"Cannot interpolate an input which is not a number.\"),this._interpolation(t)}},{key:\"addListener\",value:function(t){var e=this;this._parentListener||(this._parentListener=this._parent.addListener(function(){for(var t in e._listeners)e._listeners[t]({value:e.__getValue()})}));var n=f();return this._listeners[n]=t,n}},{key:\"removeListener\",value:function(t){delete this._listeners[t]}},{key:\"interpolate\",value:function(t){return new r(this,l.create(t))}},{key:\"__attach\",value:function(){this._parent.__addChild(this)}},{key:\"__detach\",value:function(){this._parent.__removeChild(this),this._parentListener=this._parent.removeListener(this._parentListener)}}]),r}(u);return t=h}(),P=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function n(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function r(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=o,u=V,s=k,c=function(t){function o(t,r){e(this,o);var i=n(this,Object.getPrototypeOf(o).call(this));return i._a=t,i._modulus=r,i}return r(o,t),i(o,[{key:\"__getValue\",value:function(){return(this._a.__getValue()%this._modulus+this._modulus)%this._modulus}},{key:\"interpolate\",value:function(t){return new u(this,s.create(t))}},{key:\"__attach\",value:function(){this._a.__addChild(this)}},{key:\"__detach\",value:function(){this._a.__removeChild(this)}}]),o}(a);return t=c}(),x=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function n(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function r(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=i,s=j,c=function(t){function i(t,r){e(this,i);var a=n(this,Object.getPrototypeOf(i).call(this));return t.style&&(t=o({},t,{style:new s(t.style)})),a._props=t,a._callback=r,a.__attach(),a}return r(i,t),a(i,[{key:\"__getValue\",value:function(){var t={};for(var e in this._props){var n=this._props[e];n instanceof u?t[e]=n.__getValue():t[e]=n}return t}},{key:\"__getAnimatedValue\",value:function(){var t={};for(var e in this._props){var n=this._props[e];n instanceof u&&(t[e]=n.__getAnimatedValue())}return t}},{key:\"__attach\",value:function(){for(var t in this._props){var e=this._props[t];e instanceof u&&e.__addChild(this)}}},{key:\"__detach\",value:function(){for(var t in this._props){var e=this._props[t];e instanceof u&&e.__removeChild(this)}}},{key:\"update\",value:function(){this._callback()}}]),i}(u);return t=c}(),E=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function n(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function r(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t){function e(t){\"function\"==typeof t.update?n.add(t):t.__getChildren().forEach(e)}var n=new y;e(t),n.forEach(function(t){return t.update()})}var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=o,f=a,h=V,p=k,_=s,y=l,v=function(t){function o(t){e(this,o);var r=n(this,Object.getPrototypeOf(o).call(this));return r._value=t,r._offset=0,r._animation=null,r._listeners={},r}return r(o,t),u(o,[{key:\"__detach\",value:function(){this.stopAnimation()}},{key:\"__getValue\",value:function(){return this._value+this._offset}},{key:\"setValue\",value:function(t){this._animation&&(this._animation.stop(),this._animation=null),this._updateValue(t)}},{key:\"setOffset\",value:function(t){this._offset=t}},{key:\"flattenOffset\",value:function(){this._value+=this._offset,this._offset=0}},{key:\"addListener\",value:function(t){var e=_();return this._listeners[e]=t,e}},{key:\"removeListener\",value:function(t){delete this._listeners[t]}},{key:\"removeAllListeners\",value:function(){this._listeners={}}},{key:\"stopAnimation\",value:function(t){this.stopTracking(),this._animation&&this._animation.stop(),this._animation=null,t&&t(this.__getValue())}},{key:\"interpolate\",value:function(t){return new h(this,p.create(t))}},{key:\"animate\",value:function(t,e){var n=this,r=null;t.__isInteraction&&(r=f.current.createInteractionHandle());var i=this._animation;this._animation&&this._animation.stop(),this._animation=t,t.start(this._value,function(t){n._updateValue(t)},function(t){n._animation=null,null!==r&&f.current.clearInteractionHandle(r),e&&e(t)},i)}},{key:\"stopTracking\",value:function(){this._tracking&&this._tracking.__detach(),this._tracking=null}},{key:\"track\",value:function(t){this.stopTracking(),this._tracking=t}},{key:\"_updateValue\",value:function(t){this._value=t,i(this);for(var e in this._listeners)this._listeners[e]({value:this.__getValue()})}}]),o}(c);return t=v}(),T=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function n(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function i(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=E,c=o,l=r,f=s,h=function(t){function r(t){e(this,r);var i=n(this,Object.getPrototypeOf(r).call(this)),o=t||{x:0,y:0};return\"number\"==typeof o.x&&\"number\"==typeof o.y?(i.x=new u(o.x),i.y=new u(o.y)):(l(o.x instanceof u&&o.y instanceof u,\"AnimatedValueXY must be initalized with an object of numbers or AnimatedValues.\"),i.x=o.x,i.y=o.y),i._listeners={},i}return i(r,t),a(r,[{key:\"setValue\",value:function(t){this.x.setValue(t.x),this.y.setValue(t.y)}},{key:\"setOffset\",value:function(t){this.x.setOffset(t.x),this.y.setOffset(t.y)}},{key:\"flattenOffset\",value:function(){this.x.flattenOffset(),this.y.flattenOffset()}},{key:\"__getValue\",value:function(){return{x:this.x.__getValue(),y:this.y.__getValue()}}},{key:\"stopAnimation\",value:function(t){this.x.stopAnimation(),this.y.stopAnimation(),t&&t(this.__getValue())}},{key:\"addListener\",value:function(t){var e=this,n=f(),r=function(n){n.value;t(e.__getValue())};return this._listeners[n]={x:this.x.addListener(r),y:this.y.addListener(r)},n}},{key:\"removeListener\",value:function(t){this.x.removeListener(this._listeners[t].x),this.y.removeListener(this._listeners[t].y),\ndelete this._listeners[t]}},{key:\"getLayout\",value:function(){return{left:this.x,top:this.y}}},{key:\"getTranslateTransform\",value:function(){return[{translateX:this.x},{translateY:this.y}]}}]),r}(c);return t=h}(),C=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function n(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function r(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=o,u=E,s=k,c=V,l=function(t){function o(t,r){e(this,o);var i=n(this,Object.getPrototypeOf(o).call(this));return i._a=\"number\"==typeof t?new u(t):t,i._b=\"number\"==typeof r?new u(r):r,i}return r(o,t),i(o,[{key:\"__getValue\",value:function(){return this._a.__getValue()+this._b.__getValue()}},{key:\"interpolate\",value:function(t){return new c(this,s.create(t))}},{key:\"__attach\",value:function(){this._a.__addChild(this),this._b.__addChild(this)}},{key:\"__detach\",value:function(){this._a.__removeChild(this),this._b.__removeChild(this)}}]),o}(a);return t=l}(),A=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function n(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function r(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=o,u=E,s=V,c=k,l=function(t){function o(t,r){e(this,o);var i=n(this,Object.getPrototypeOf(o).call(this));return i._a=\"number\"==typeof t?new u(t):t,i._b=\"number\"==typeof r?new u(r):r,i}return r(o,t),i(o,[{key:\"__getValue\",value:function(){return this._a.__getValue()*this._b.__getValue()}},{key:\"interpolate\",value:function(t){return new s(this,c.create(t))}},{key:\"__attach\",value:function(){this._a.__addChild(this),this._b.__addChild(this)}},{key:\"__detach\",value:function(){this._a.__removeChild(this),this._b.__removeChild(this)}}]),o}(a);return t=l}(),R=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function n(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function r(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=i,s=function(t){function i(t,r,o,a,u){e(this,i);var s=n(this,Object.getPrototypeOf(i).call(this));return s._value=t,s._parent=r,s._animationClass=o,s._animationConfig=a,s._callback=u,s.__attach(),s}return r(i,t),a(i,[{key:\"__getValue\",value:function(){return this._parent.__getValue()}},{key:\"__attach\",value:function(){this._parent.__addChild(this)}},{key:\"__detach\",value:function(){this._parent.__removeChild(this)}},{key:\"update\",value:function(){this._value.animate(new this._animationClass(o({},this._animationConfig,{toValue:this._animationConfig.toValue.__getValue()})),this._callback)}}]),i}(u);return t=s}(),F=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function n(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function r(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=c,a=O,u=_,s=y,l=a.inOut(a.ease),f=function(t){function o(t){e(this,o);var r=n(this,Object.getPrototypeOf(o).call(this));return r._toValue=t.toValue,r._easing=void 0!==t.easing?t.easing:l,r._duration=void 0!==t.duration?t.duration:500,r._delay=void 0!==t.delay?t.delay:0,r.__isInteraction=void 0===t.isInteraction||t.isInteraction,r}return r(o,t),i(o,[{key:\"start\",value:function a(t,e,n){var r=this;this.__active=!0,this._fromValue=t,this._onUpdate=e,this.__onEnd=n;var a=function(){0===r._duration?(r._onUpdate(r._toValue),r.__debouncedOnEnd({finished:!0})):(r._startTime=Date.now(),r._animationFrame=u.current(r.onUpdate.bind(r)))};this._delay?this._timeout=setTimeout(a,this._delay):a()}},{key:\"onUpdate\",value:function(){var t=Date.now();return t>=this._startTime+this._duration?(0===this._duration?this._onUpdate(this._toValue):this._onUpdate(this._fromValue+this._easing(1)*(this._toValue-this._fromValue)),void this.__debouncedOnEnd({finished:!0})):(this._onUpdate(this._fromValue+this._easing((t-this._startTime)/this._duration)*(this._toValue-this._fromValue)),void(this.__active&&(this._animationFrame=u.current(this.onUpdate.bind(this)))))}},{key:\"stop\",value:function(){this.__active=!1,clearTimeout(this._timeout),s.current(this._animationFrame),this.__debouncedOnEnd({finished:!1})}}]),o}(o);return t=f}(),M=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function n(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function i(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function o(t,e){return void 0===t||null===t?e:t}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=c,s=_,l=y,f=r,h=d,p=function(t){function r(t){e(this,r);var i=n(this,Object.getPrototypeOf(r).call(this));i._overshootClamping=o(t.overshootClamping,!1),i._restDisplacementThreshold=o(t.restDisplacementThreshold,.001),i._restSpeedThreshold=o(t.restSpeedThreshold,.001),i._initialVelocity=t.velocity,i._lastVelocity=o(t.velocity,0),i._toValue=t.toValue,i.__isInteraction=void 0===t.isInteraction||t.isInteraction;var a;return void 0!==t.bounciness||void 0!==t.speed?(f(void 0===t.tension&&void 0===t.friction,\"You can only define bounciness/speed or tension/friction but not both\"),a=h.fromBouncinessAndSpeed(o(t.bounciness,8),o(t.speed,12))):a=h.fromOrigamiTensionAndFriction(o(t.tension,40),o(t.friction,7)),i._tension=a.tension,i._friction=a.friction,i}return i(r,t),a(r,[{key:\"start\",value:function(t,e,n,i){if(this.__active=!0,this._startPosition=t,this._lastPosition=this._startPosition,this._onUpdate=e,this.__onEnd=n,this._lastTime=Date.now(),i instanceof r){var o=i.getInternalState();this._lastPosition=o.lastPosition,this._lastVelocity=o.lastVelocity,this._lastTime=o.lastTime}void 0!==this._initialVelocity&&null!==this._initialVelocity&&(this._lastVelocity=this._initialVelocity),this.onUpdate()}},{key:\"getInternalState\",value:function(){return{lastPosition:this._lastPosition,lastVelocity:this._lastVelocity,lastTime:this._lastTime}}},{key:\"onUpdate\",value:function(){var t=this._lastPosition,e=this._lastVelocity,n=this._lastPosition,r=this._lastVelocity,i=64,o=Date.now();o>this._lastTime+i&&(o=this._lastTime+i);for(var a=1,u=Math.floor((o-this._lastTime)/a),c=0;c<u;++c){var l=a/1e3,f=e,h=this._tension*(this._toValue-n)-this._friction*r,n=t+f*l/2,r=e+h*l/2,p=r,_=this._tension*(this._toValue-n)-this._friction*r;n=t+p*l/2,r=e+_*l/2;var y=r,v=this._tension*(this._toValue-n)-this._friction*r;n=t+y*l/2,r=e+v*l/2;var d=r,b=this._tension*(this._toValue-n)-this._friction*r;n=t+y*l/2,r=e+v*l/2;var m=(f+2*(p+y)+d)/6,g=(h+2*(_+v)+b)/6;t+=m*l,e+=g*l}if(this._lastTime=o,this._lastPosition=t,this._lastVelocity=e,this._onUpdate(t),this.__active){var w=!1;this._overshootClamping&&0!==this._tension&&(w=this._startPosition<this._toValue?t>this._toValue:t<this._toValue);var k=Math.abs(e)<=this._restSpeedThreshold,O=!0;return 0!==this._tension&&(O=Math.abs(this._toValue-t)<=this._restDisplacementThreshold),w||k&&O?(0!==this._tension&&this._onUpdate(this._toValue),void this.__debouncedOnEnd({finished:!0})):void(this._animationFrame=s.current(this.onUpdate.bind(this)))}}},{key:\"stop\",value:function(){this.__active=!1,l.current(this._animationFrame),this.__debouncedOnEnd({finished:!1})}}]),r}(u);return t=p}(),S=function(t){\"use strict\";function e(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function n(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function r(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t){var i=\"node\",u=function(u){function c(){return e(this,c),n(this,Object.getPrototypeOf(c).apply(this,arguments))}return r(c,u),a(c,[{key:\"componentWillUnmount\",value:function(){this._propsAnimated&&this._propsAnimated.__detach()}},{key:\"setNativeProps\",value:function(t){var e=h.current(this.refs[i],t);e===!1&&this.forceUpdate()}},{key:\"componentWillMount\",value:function(){this.attachProps(this.props)}},{key:\"attachProps\",value:function(t){var e=this,n=this._propsAnimated,r=function(){var t=h.current(e.refs[i],e._propsAnimated.__getAnimatedValue());t===!1&&e.forceUpdate()};this._propsAnimated=new f(t,r),n&&n.__detach()}},{key:\"componentWillReceiveProps\",value:function(t){this.attachProps(t)}},{key:\"render\",value:function(){var e=this._propsAnimated.__getValue(),n=l(e.style);return s(t,o({},e,{style:n,ref:i}))}}]),c}(c);return u.propTypes={style:function(t,e,n){!c.propTypes}},u}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=q,s=u.createElement,c=u.Component,l=b,f=x,h=w;return t=i}(),I=function(t){\"use strict\";var e=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol?\"symbol\":typeof t},n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=r,u=i,s=E,c=T,l=C,p=A,d=P,b=f,m=R,k=h,O=F,j=v,V=M,I=function(t,e,r){if(t instanceof c){var i=n({},e),o=n({},e);for(var a in e){var u=e[a],s=u.x,l=u.y;void 0!==s&&void 0!==l&&(i[a]=s,o[a]=l)}var f=r(t.x,i),h=r(t.y,o);return B([f,h],{stopTogether:!1})}return null},U=function Y(t,e){return I(t,e,Y)||{start:function(n){var r=t,i=e;r.stopTracking(),e.toValue instanceof u?r.track(new m(r,e.toValue,V,i,n)):r.animate(new V(i),n)},stop:function(){t.stopAnimation()}}},L=function $(t,e){return I(t,e,$)||{start:function(n){var r=t,i=e;r.stopTracking(),e.toValue instanceof u?r.track(new m(r,e.toValue,O,i,n)):r.animate(new O(i),n)},stop:function(){t.stopAnimation()}}},q=function W(t,e){return I(t,e,W)||{start:function(n){var r=t,i=e;r.stopTracking(),r.animate(new j(i),n)},stop:function(){t.stopAnimation()}}},D=function(t){var e=0;return{start:function(n){var r=function i(r){return r.finished?(e++,e===t.length?void(n&&n(r)):void t[e].start(i)):void(n&&n(r))};0===t.length?n&&n({finished:!0}):t[e].start(r)},stop:function(){e<t.length&&t[e].stop()}}},B=function(t,e){var n=0,r={},i=!(e&&e.stopTogether===!1),o={start:function(e){return n===t.length?void(e&&e({finished:!0})):void t.forEach(function(a,u){var s=function(a){return r[u]=!0,n++,n===t.length?(n=0,void(e&&e(a))):void(!a.finished&&i&&o.stop())};a?a.start(s):s({finished:!0})})},stop:function(){t.forEach(function(t,e){!r[e]&&t.stop(),r[e]=!0})}};return o},z=function(t){return L(new s(0),{toValue:0,delay:t,duration:0})},H=function(t,e){return B(e.map(function(e,n){return D([z(t*n),e])}))},N=function(t,n){return function(){for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];var u=function c(t,n,r){if(\"number\"==typeof n)return o(t instanceof s,\"Bad mapping of type \"+(\"undefined\"==typeof t?\"undefined\":e(t))+\" for key \"+r+\", event value must map to AnimatedValue\"),void t.setValue(n);o(\"object\"===(\"undefined\"==typeof t?\"undefined\":e(t)),\"Bad mapping of type \"+(\"undefined\"==typeof t?\"undefined\":e(t))+\" for key \"+r),o(\"object\"===(\"undefined\"==typeof n?\"undefined\":e(n)),\"Bad event of type \"+(\"undefined\"==typeof n?\"undefined\":e(n))+\" for key \"+r);for(var r in t)c(t[r],n[r],r)};t.forEach(function(t,e){u(t,i[e],\"arg\"+e)}),n&&n.listener&&n.listener.apply(null,i)}};return t={Value:s,ValueXY:c,decay:q,timing:L,spring:U,add:function(t,e){return new l(t,e)},multiply:function(t,e){return new p(t,e)},modulo:function(t,e){return new d(t,e)},_template:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return new b(t,n)},delay:z,sequence:D,parallel:B,stagger:H,event:N,isAnimated:k,createAnimatedComponent:S,inject:{ApplyAnimatedValues:w.inject,InteractionManager:a.inject,FlattenStyle:g.inject,RequestAnimationFrame:_.inject,CancelAnimationFrame:y.inject},__PropsOnlyForTests:x}}(),U=function(t){function e(t){return t&&t.__esModule?t:{\"default\":t}}function n(t,e){(0,a.setNativeProps)(t,{style:(0,c[\"default\"])(e.style)})}t={},Object.defineProperty(t,\"__esModule\",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=I,o=e(i),a=q,u=D,s=b,c=e(s),l=o[\"default\"].inject.ApplyAnimatedValues;l(n);var f,h;if(\"undefined\"!=typeof requestAnimationFrame)f=function(t){return requestAnimationFrame(t)},h=function(t){return cancelAnimationFrame(t)},requestAnimationFrame(function(){});else{var p=0;f=function(t){var e=Date.now(),n=Math.max(0,16-(e-p));return p=e+n,setTimeout(function(){t(Date.now())},n)},h=function(t){clearTimeout(t)}}var _=o[\"default\"].inject.RequestAnimationFrame;_(f);var y=o[\"default\"].inject.CancelAnimationFrame;return y(h),t[\"default\"]=r({},o[\"default\"],{View:o[\"default\"].createAnimatedComponent(u.View),Text:o[\"default\"].createAnimatedComponent(u.Text),Image:o[\"default\"].createAnimatedComponent(u.Image)}),t=t[\"default\"]}(),L=function(t){\"use strict\";return t=U}(),n.exports=L});\ndefine(\"kg/rx-panresponder/index\",[],function(e,n,t){var o,r,i,a;o=function(e){\"use strict\";var n={centroidDimension:function(e,t,o,r){var i=e.touchBank,a=0,u=0,c=1===e.numberActiveTouches?e.touchBank[e.indexOfSingleActiveTouch]:null;if(null!==c)c.touchActive&&c.currentTimeStamp>t&&(a+=r&&o?c.currentPageX:r&&!o?c.currentPageY:!r&&o?c.previousPageX:c.previousPageY,u=1);else for(var s in i){var p=i[s];if(null!==p&&void 0!==p&&p.touchActive&&p.currentTimeStamp>=t){var d;d=r&&o?p.currentPageX:r&&!o?p.currentPageY:!r&&o?p.previousPageX:p.previousPageY,a+=d,u++}}return u>0?a/u:n.noCentroid},currentCentroidXOfTouchesChangedAfter:function(e,t){return n.centroidDimension(e,t,!0,!0)},currentCentroidYOfTouchesChangedAfter:function(e,t){return n.centroidDimension(e,t,!1,!0)},previousCentroidXOfTouchesChangedAfter:function(e,t){return n.centroidDimension(e,t,!0,!1)},previousCentroidYOfTouchesChangedAfter:function(e,t){return n.centroidDimension(e,t,!1,!1)},currentCentroidX:function(e){return n.centroidDimension(e,0,!0,!0)},currentCentroidY:function(e){return n.centroidDimension(e,0,!1,!0)},noCentroid:-1};return e=n}(),r=function(e){\"use strict\";function n(e){return e&&Array.prototype.slice.call(e)||[]}function t(e,t){var o=t.timeStamp||t.timestamp;return n(e).map(function(e){return{clientX:e.clientX,clientY:e.clientY,force:e.force,pageX:e.pageX,pageY:e.pageY,radiusX:e.radiusX,radiusY:e.radiusY,rotationAngle:e.rotationAngle,screenX:e.screenX,screenY:e.screenY,target:e.target||t.target,timestamp:o,identifier:e.identifier||1}})}var o={touchBank:{},numberActiveTouches:0,indexOfSingleActiveTouch:-1,mostRecentTimeStamp:0},r=function(e){return{touchActive:!0,startTimeStamp:e.timestamp,startPageX:e.pageX,startPageY:e.pageY,currentPageX:e.pageX,currentPageY:e.pageY,currentTimeStamp:e.timestamp,previousPageX:e.pageX,previousPageY:e.pageY,previousTimeStamp:e.timestamp}},i=function(e,n){e.touchActive=!0,e.startTimeStamp=n.timestamp,e.startPageX=n.pageX,e.startPageY=n.pageY,e.currentPageX=n.pageX,e.currentPageY=n.pageY,e.currentTimeStamp=n.timestamp,e.previousPageX=n.pageX,e.previousPageY=n.pageY,e.previousTimeStamp=n.timestamp},a=function(e){var n=o.touchBank,t=e.identifier,a=n[t];a?i(a,e):n[e.identifier]=r(e),o.mostRecentTimeStamp=e.timestamp},u=function(e){var n=o.touchBank,t=n[e.identifier];t.touchActive=!0,t.previousPageX=t.currentPageX,t.previousPageY=t.currentPageY,t.previousTimeStamp=t.currentTimeStamp,t.currentPageX=e.pageX,t.currentPageY=e.pageY,t.currentTimeStamp=e.timestamp,o.mostRecentTimeStamp=e.timestamp},c=function(e){var n=o.touchBank,t=n[e.identifier];t.previousPageX=t.currentPageX,t.previousPageY=t.currentPageY,t.previousTimeStamp=t.currentTimeStamp,t.currentPageX=e.pageX,t.currentPageY=e.pageY,t.currentTimeStamp=e.timestamp,t.touchActive=!1,o.mostRecentTimeStamp=e.timestamp},s={recordTouchTrack:function(e,n){var r=o.touchBank,i=t(n.changedTouches||[n],n);if(\"move\"===e)i.forEach(u);else if(\"start\"===e)i.forEach(a),o.numberActiveTouches=i.length,1===o.numberActiveTouches&&(o.indexOfSingleActiveTouch=i[0].identifier);else if(\"end\"===e&&(i.forEach(c),o.numberActiveTouches=i.length,1===o.numberActiveTouches))for(var s in r){var p=r[s];if(null!=p&&p.touchActive){o.indexOfSingleActiveTouch=s;break}}},touchHistory:o};return e=s}(),i=function(e){\"use strict\";var n=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol?\"symbol\":typeof e},t=o,i=r,a=t.currentCentroidXOfTouchesChangedAfter,u=t.currentCentroidYOfTouchesChangedAfter,c=t.previousCentroidXOfTouchesChangedAfter,s=t.previousCentroidYOfTouchesChangedAfter,p=t.currentCentroidX,d=t.currentCentroidY,m={_initializeGestureState:function(e){e.moveX=0,e.moveY=0,e.x0=0,e.y0=0,e.dx=0,e.dy=0,e.vx=0,e.vy=0,e.numberActiveTouches=0,e._accountsForMovesUpTo=0},_updateGestureStateOnMove:function(e,n){e.numberActiveTouches=n.numberActiveTouches,e.moveX=a(n,e._accountsForMovesUpTo),e.moveY=u(n,e._accountsForMovesUpTo);var t=e._accountsForMovesUpTo,o=c(n,t),r=a(n,t),i=s(n,t),p=u(n,t),d=e.dx+(r-o),m=e.dy+(p-i),v=n.mostRecentTimeStamp-e._accountsForMovesUpTo;e.vx=(d-e.dx)/v,e.vy=(m-e.dy)/v,e.dx=d,e.dy=m,e._accountsForMovesUpTo=n.mostRecentTimeStamp},create:function(e){var t={stateID:Math.random()};m._initializeGestureState(t);var o={onStartShouldSetResponder:function(n){return void 0!==e.onStartShouldSetPanResponder&&e.onStartShouldSetPanResponder(n,t)},onMoveShouldSetResponder:function(n){return void 0!==e.onMoveShouldSetPanResponder&&e.onMoveShouldSetPanResponder(n,t)},onStartShouldSetResponderCapture:function(n){return 1===n.nativeEvent.touches.length&&m._initializeGestureState(t),t.numberActiveTouches=i.touchHistory.numberActiveTouches,void 0!==e.onStartShouldSetPanResponderCapture&&e.onStartShouldSetPanResponderCapture(n,t)},onMoveShouldSetResponderCapture:function(n){var o=i.touchHistory;return t._accountsForMovesUpTo!==o.mostRecentTimeStamp&&(m._updateGestureStateOnMove(t,o),!!e.onMoveShouldSetPanResponderCapture&&e.onMoveShouldSetPanResponderCapture(n,t))}},r={onResponderGrant:function(n){return t.x0=p(i.touchHistory),t.y0=d(i.touchHistory),t.dx=0,t.dy=0,e.onPanResponderGrant&&e.onPanResponderGrant(n,t),void 0===e.onShouldBlockNativeResponder||e.onShouldBlockNativeResponder()},onResponderReject:function(n){e.onPanResponderReject&&e.onPanResponderReject(n,t)},onResponderRelease:function(n){e.onPanResponderRelease&&e.onPanResponderRelease(n,t),m._initializeGestureState(t)},onResponderTerminate:function(n){e.onPanResponderTerminate&&e.onPanResponderTerminate(n,t),m._initializeGestureState(t)},onResponderTerminationRequest:function(n){return void 0===e.onPanResponderTerminationRequest||e.onPanResponderTerminationRequest(n,t)}},a=!1,u={onPanStart:function(n){if(a=!0,i.recordTouchTrack(\"start\",n),!o.onStartShouldSetResponder(n))return r.onResponderReject(n);r.onResponderGrant(n);var u=i.touchHistory;t.numberActiveTouches=u.numberActiveTouches,e.onPanResponderStart&&e.onPanResponderStart(n,t)},onPanMove:function(n){if(a&&(i.recordTouchTrack(\"move\",n),o.onMoveShouldSetResponder(n))){var r=i.touchHistory;t._accountsForMovesUpTo!==r.mostRecentTimeStamp&&(m._updateGestureStateOnMove(t,r),e.onPanResponderMove&&e.onPanResponderMove(n,t))}},onPanEnd:function(n){a=!1,i.recordTouchTrack(\"end\",n);var o=i.touchHistory;t.numberActiveTouches=o.numberActiveTouches,e.onPanResponderEnd&&e.onPanResponderEnd(n,t),r.onResponderRelease(n)}};return\"undefined\"==typeof callNative&&\"object\"===(\"undefined\"==typeof window?\"undefined\":n(window))&&(u=\"ontouchstart\"in window?{onTouchStart:u.onPanStart,onTouchMove:u.onPanMove,onTouchEnd:u.onPanEnd}:{onMouseDown:u.onPanStart,onMouseMove:u.onPanMove,onMouseUp:u.onPanEnd}),{panHandlers:u}}};return e=m}(),a=function(e){\"use strict\";return e=i}(),t.exports=a});\ndefine(\"kg/rx-toast/index\",[\"kg/rx/index\",\"@weex-module/modal\"],function(e,t,n){var o,i,a=(e(\"kg/rx/index\"),e(\"@weex-module/modal\"));o=function(e){function t(e){if(!f){f=document.createElement(\"div\");for(var t in c.container)f.style[t]=c.container[t];document.body.appendChild(f)}f.innerHTML=e,setTimeout(function(){f.style.opacity=.6},0)}function n(){f&&(f.style.opacity=0)}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var o=3500,i=2e3,r=\"function\"==typeof callNative,s=[],u=!1,f=void 0,l={push:function(e,t){s.push({message:e,duration:t}),this.show()},show:function(){var e=this;if(!s.length)return f&&f.parentNode.removeChild(f),void(f=null);if(!u){u=!0;var o=s.shift();t(o.message),setTimeout(function(){n(),u=!1,setTimeout(function(){return e.show()},400)},o.duration)}}},d={SHORT:i,LONG:o,show:function(e){var t=arguments.length<=1||void 0===arguments[1]?i:arguments[1],n=arguments[2];if(Object.assign(c.container,n),r){var o=a;o.toast&&o.toast({message:e,duration:Number(t)/1e3})}else l.push(e,t)}},c={container:{backgroundColor:\"#000000\",boxSizing:\"border-box\",maxWidth:\"80%\",opacity:0,color:\"#ffffff\",padding:\"4px 8px\",position:\"fixed\",left:\"50%\",bottom:\"50%\",fontSize:\"14px\",lineHeight:\"18px\",borderRadius:\"2px\",textAlign:\"center\",transition:\"all 0.4s ease-in-out\",webkitTransition:\"all 0.4s ease-in-out\",transform:\"translateX(-50%)\",webkitTransform:\"translateX(-50%)\",zIndex:9999}};return e[\"default\"]=d,e=e[\"default\"]}(),i=function(e){\"use strict\";return e=o}(),n.exports=i});\ndefine(\"kg/rx-alert/index\",[\"@weex-module/modal\"],function(n,t,e){var o,r,i=n(\"@weex-module/modal\");o=function(n){function t(n,t){if(!(n instanceof t))throw new TypeError(\"Cannot call a class as a function\")}n={},Object.defineProperty(n,\"__esModule\",{value:!0});var e=function(){function n(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,\"value\"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}}(),o=\"function\"==typeof callNative,r=function(){function n(){t(this,n)}return e(n,null,[{key:\"alert\",value:function(n){function t(t,e,o){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}(function(n,t,e){2===arguments.length&&\"function\"==typeof t&&(e=t);var r=void 0,u=void 0,f=void 0,a=void 0;if(\"function\"==typeof e?u=e:e instanceof Array&&buttons.forEach(function(n,t){var e=n.onPress,o=n.text;0===t?(r=o,u=e):(a=o,f=e)}),o){var c=i;c.alert&&c.alert({message:n,okTitle:r,cancelTitle:a},u)}else alert(n),u&&u()})},{key:\"confirm\",value:function(n){function t(t,e,o){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}(function(n,t,e){2===arguments.length&&\"function\"==typeof t&&(e=t);var r=void 0,u=void 0,f=void 0,a=void 0;if(\"function\"==typeof e?u=e:e instanceof Array&&buttons.forEach(function(n,t){var e=n.onPress,o=n.text;0===t?(r=o,u=e):(a=o,f=e)}),o){var c=i;c.confirm&&c.confirm({message:n,okTitle:r,cancelTitle:a},function(n){u&&u(n)})}else{var l=confirm(n);l?u&&u(l):f&&f()}})},{key:\"prompt\",value:function(n){function t(t,e,o){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}(function(n,t,e){2===arguments.length&&\"function\"==typeof t&&(e=t);var r=void 0,u=void 0,f=void 0,a=void 0;if(\"function\"==typeof e?u=e:e instanceof Array&&buttons.forEach(function(n,t){var e=n.onPress,o=n.text;0===t?(r=o,u=e):(a=o,f=e)}),o){var c=i;c.prompt&&c.prompt({title:n,okTitle:r,cancelTitle:a},function(n){u&&u(n)})}else{var l=prompt(n);l?u&&u(l):f&&f()}})}]),n}();return n[\"default\"]=r,n=n[\"default\"]}(),r=function(n){\"use strict\";return n=o}(),e.exports=r});\ndefine(\"kg/rx-location/index\",[\"kg/rx-env/index\"],function(t,n,e){var r,i,o,s=t(\"kg/rx-env/index\");r=function(t){\"use strict\";function n(t,n){if(!(t instanceof n))throw new TypeError(\"Cannot call a class as a function\")}var e=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}(),r=/(?:([^\\:]*)\\:\\/\\/)?(?:([^\\:\\@]*)(?:\\:([^\\@]*))?\\@)?(?:([^\\/\\:]*)\\.(?=[^\\.\\/\\:]*\\.[^\\.\\/\\:]*))?([^\\.\\/\\:]*)(?:\\.([^\\/\\.\\:]*))?(?:\\:([0-9]*))?(\\/[^\\?#]*(?=.*?\\/)\\/)?([^\\?#]*)?(?:\\?([^#]*))?(?:#(.*))?/,i=function(){function t(e){n(this,t),this.parse(e)}return e(t,[{key:\"parse\",value:function(t){var n=t.match(r);this.protocol=n[1]+\":\";var e=[];n[4]&&e.push(n[4]),n[5]&&e.push(n[5]),n[6]&&e.push(n[6]),this.hostname=e.join(\".\"),this.port=n[7]||\"\",this.host=this.hostname+(this.port?\":\"+this.port:\"\"),this.origin=this.protocol+\"//\"+this.host,this.username=n[2],this.password=n[3],this.pathname=(n[8]||\"\")+(n[9]||\"\"),this.search=n[10]?\"?\"+n[10]:\"\",this.hash=n[11]?\"#\"+n[11]:\"\",this.href=n[0]}},{key:\"toString\",value:function(){return this.href}}]),t}();return t=i}(),i=function(t){\"use strict\";function n(t){return t&&t.__esModule?t:{\"default\":t}}var e=r,i=n(e),o=s,u=void 0;return u=o.isWeex?new i[\"default\"](document.URL||\"\"):o.isWeb?location:new i[\"default\"](\"\"),t=u}(),o=function(t){\"use strict\";return t=i}(),e.exports=o});\ndefine(\"kg/rx-mtop/index\",[\"@weex-module/windvane\"],function(e,t,n){var i,o,r=e(\"@weex-module/windvane\");i=function(e){e={},Object.defineProperty(e,\"__esModule\",{value:!0});var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},n=\"undefined\"!=typeof callNative,i={ERROR:-1,SUCCESS:0,TOKEN_EXPIRED:1,SESSION_EXPIRED:2};return e[\"default\"]={request:function(e,t,o){if(o=o||t,n){e.param=e.data||e.param;var f=r;f.call&&f.call({\"class\":\"MtopWVPlugin\",method:\"send\",data:e},function(e){\"string\"==typeof e&&(e=JSON.parse(e)),e.retType===i.SUCCESS||e.ret&&e.ret[0].indexOf(\"SUCCESS\")>-1?t&&t(e):o&&o(e)})}else if(\"undefined\"!=typeof lib&&lib.mtop)return lib.mtop.request(e,t,o)},config:function(e,i){n||\"undefined\"!=typeof lib&&lib.mtop&&(\"string\"==typeof e?lib.mtop.config[e]=i:lib.mtop.config=t({},lib.mtop.config,conf))},RESPONSE_TYPE:i},e=e[\"default\"]}(),o=function(e){\"use strict\";return e=i}(),n.exports=o});\ndefine(\"kg/rx-user/index\",[\"@weex-module/user\"],function(i,e,n){var o,l,t=i(\"@weex-module/user\");o=function(i){i={},Object.defineProperty(i,\"__esModule\",{value:!0});var e=\"undefined\"!=typeof callNative;return i[\"default\"]={getUserInfo:function(i){if(e){var n=t;n.getUserInfo&&n.getUserInfo(function(e){\"string\"==typeof e&&(e=JSON.parse(e)),i(e)})}else\"undefined\"!=typeof lib&&lib.login&&lib.login.isLogin(function(e,n){var o=n?n.data||{}:{};i({isLogin:e,info:{userId:o.userNumId,nick:o.nick}})})},login:function(i){if(e){var n=t;n.login&&n.login(i)}else\"undefined\"!=typeof lib&&lib.login&&(lib.login.isLogin()?i&&i():lib.login.goLogin())},logout:function(i){if(e){var n=t;n.logout&&n.logout(i)}else\"undefined\"!=typeof lib&&lib.login&&(lib.login.isLogin()?lib.login.goLogout():i&&i())}},i=i[\"default\"]}(),l=function(i){\"use strict\";return i=o}(),n.exports=l});\ndefine(\"kg/rx-windvane/index\",[\"@weex-module/windvane\"],function(e,n,a){var i,l,d=e(\"@weex-module/windvane\");i=function(e){e={},Object.defineProperty(e,\"__esModule\",{value:!0});var n=\"undefined\"!=typeof callNative,a=\"undefined\"!=typeof WindVane,i={};return i.call=function(e,l,t,u,f){if(n){var r=d;r.call&&r.call({\"class\":e,method:l,data:t},u)}else a&&WindVane.isAvailable?(i.isAvailable=WindVane.isAvailable,WindVane.call(e,l,t,u,f)):f&&f({msg:\"\\u6d4f\\u89c8\\u5668\\u4e0d\\u652f\\u6301 windvane\",ret:[\"HY_NOT_SUPPORT_DEVICE\"]})},e[\"default\"]=i,e=e[\"default\"]}(),l=function(e){\"use strict\";return e=i}(),a.exports=l});\ndefine(\"kg/rx-spm/index\",[\"@weex-module/pageInfo\"],function(e,n,o){var t,d,l=e(\"@weex-module/pageInfo\");t=function(e){e={},Object.defineProperty(e,\"__esModule\",{value:!0});var n=\"undefined\"!=typeof callNative,o=(\"undefined\"!=typeof WindVane,\"undefined\"!=typeof window),t=[\"0\",\"0\"];return e[\"default\"]={getPageSPM:function(){return n||o&&window.goldlog&&(t=goldlog.spm_ab||t),t},setPageSPM:function(e,d){if(t[0]=e,t[1]=d,n){var f=l;f.setSpm&&f.setSpm(e,d)}else o&&window.goldlog&&goldlog.setPageSPM&&goldlog.setPageSPM(e,d)}},e=e[\"default\"]}(),d=function(e){\"use strict\";return e=t}(),o.exports=d});\ndefine(\"kg/rx-goldlog/index\",[\"kg/rx-spm/index\",\"@weex-module/userTrack\"],function(e,n,r){var t,o,u=e(\"kg/rx-spm/index\"),i=e(\"@weex-module/userTrack\");t=function(e){function n(e){return e&&e.__esModule?e:{\"default\":e}}function r(e){e=\"string\"==typeof e?e:\"\";for(var n={},r=e.split(\"&\"),t=0;t<r.length;t++){var o=r[t],u=o.split(\"=\"),i=u[0],l=u[1];i&&(n[i]=l)}return n}function t(e){var n=[];for(var r in e){var t=r,o=e[r];n.push(t+\"=\"+o)}return n.join(\"&\")}function o(e){var n=\"0.0.0.0\",r=e.split(\"?\")[1]||\"\";return r.split(\"&\").forEach(function(e){0===e.indexOf(\"spm=\")&&(n=e.substr(4))}),n}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var l=u,a=n(l),d=\"undefined\"!=typeof callNative,c=(\"undefined\"!=typeof WindVane,\"undefined\"!=typeof window);return e[\"default\"]={record:function(e,n,o,u){if(d){var l=r(o);l.weex=l.weex?l.weex:\"1\",l.autosend=\"1\";var a={logkey:e,logkeyargs:t(l),urlpagename:\"\",url:document.URL||\"\",cna:\"\",extendargs:JSON.stringify({}),isonepage:0},f=i;f.commit&&f.commit(\"click\",e,e,a)}else c&&window.goldlog&&goldlog.record(e,n,o,u)},launch:function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if(a[\"default\"].setPageSPM(e[0],e[1]),d){var r=i;n.url=document.URL||\"\",n[\"spm-cnt\"]=a[\"default\"].getPageSPM(),n[\"spm-url\"]=o(n.url),n.cna=\"\";var t=n.name||\"weex_page_\"+n.url;r.enterEvent?r.enterEvent(t,n):r.commit&&r.commit(\"enter\",t,\"\",n)}else c&&window.goldlog&&goldlog.launch(n)}},e=e[\"default\"]}(),o=function(e){\"use strict\";return e=t}(),r.exports=o});\ndefine(\"kg/rx-window/index\",[\"kg/rx/index\",\"@weex-module/event\",\"@weex-module/dom\",\"@weex-module/pageInfo\",\"@weex-module/windvane\"],function(e,n,o){var l,i,t=e(\"kg/rx/index\"),d=e(\"@weex-module/event\"),a=e(\"@weex-module/dom\"),u=e(\"@weex-module/pageInfo\"),f=e(\"@weex-module/windvane\");l=function(e){e={},Object.defineProperty(e,\"__esModule\",{value:!0});var n=t,o=\"undefined\"!=typeof callNative,l=\"undefined\"!=typeof WindVane,i=\"undefined\"!=typeof window;return e[\"default\"]={openWindow:function(e){if(o){var n=d;n.openURL&&n.openURL(e)}else l&&WindVane.isAvailable?WindVane.call(\"Base\",\"openWindow\",{url:e},function(){},function(){window.open(e)}):i&&window.open(e)},scrollToElement:function(e,l){var t=(0,n.findDOMNode)(e);if(o){var d=a;d.scrollToElement&&d.scrollToElement(t.ref,{offset:l})}else if(i){var u=t.getBoundingClientRect().top+document.body.scrollTop,l=Number(l)||0;window.scrollTo(0,u+l)}},setTitle:function(e){if(o){var n=u;n.setTitle&&n.setTitle(e)}else if(i){try{e=decodeURIComponent(e)}catch(t){}l&&WindVane.isAvailable?WindVane.call(\"WebAppInterface\",\"setCustomPageTitle\",{title:e}):document.title=e}},callWindvane:function(e,n){if(o){var i=f;i.call&&i.call(e,n)}else l&&WindVane.isAvailable&&WindVane.call(e[\"class\"],e.method,e.data,n,n)}},e=e[\"default\"]}(),i=function(e){\"use strict\";return e=l}(),o.exports=i});\ndefine(\"kg/rx-mounter/index\",[\"kg/rx/index\"],function(e,n,o){var t,u,d=e(\"kg/rx/index\");t=function(e){function n(e,n){var o=void 0;if(n==u?\"undefined\"!=typeof document?o=document:\"undefined\"!=typeof __weex_document__&&(o=__weex_document__):o=(0,t.findDOMNode)(n),null==o)throw Error('Target mount node \"'+n+'\" not found.');return(0,t.render)(e,o)}function o(e){var n=void 0;if(e==u?\"undefined\"!=typeof document?n=document.body:\"undefined\"!=typeof __weex_document__&&(n=__weex_document__.body):n=(0,t.findDOMNode)(e),null==n)throw Error('Target unmount node \"'+e+'\" not found.');return(0,t.unmountComponentAtNode)(n)}e={},Object.defineProperty(e,\"__esModule\",{value:!0}),e.mount=n,e.unmount=o;var t=d,u=\"body\";return e}(),u=function(e){\"use strict\";return e=t}(),o.exports=u});\ndefine(\"kg/rx-components/index\",[\"kg/rx/index\",\"kg/rx-env/index\"],function(require,exports,module){var aliRx=require(\"kg/rx/index\"),aliRxEnv=require(\"kg/rx-env/index\"),kgRxComponents013LibView,kgRxComponents013LibText,kgRxComponents013LibImage,kgRxComponents013LibLink,kgRxComponents013LibTextInput,kgRxComponents013LibTouchableHighlight,kgRxComponents013LibSwitch,kgRxComponents013LibVideo,kgRxComponents013LibScrollView,kgRxComponents013LibSlider,kgRxComponents013LibRecyclerView,kgRxComponents013LibRefreshControl,kgRxComponents013LibButton,kgRxComponents013LibListView,kgRxComponents013Index;kgRxComponents013LibView=function(e){function t(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function n(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}function r(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=aliRx,a=aliRxEnv,s=function(e){function s(){return t(this,s),n(this,Object.getPrototypeOf(s).apply(this,arguments))}return r(s,e),i(s,[{key:\"render\",value:function(){var e=this.props;if(a.isWeex)return(0,l.createElement)(\"div\",e);var t=o({},c.initial,e.style);return(0,l.createElement)(\"div\",o({},e,{style:t}))}}]),s}(l.Component),c={initial:{border:\"0 solid black\",position:\"relative\",boxSizing:\"border-box\",display:\"flex\",flexDirection:\"column\",alignContent:\"flex-start\",flexShrink:0}};return e[\"default\"]=s,e=e[\"default\"]}(),kgRxComponents013LibText=function(e){function t(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function n(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}function r(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=aliRx,a=aliRxEnv,s=function(e){function s(){var e,r,o,i;t(this,s);for(var a=arguments.length,c=Array(a),u=0;u<a;u++)c[u]=arguments[u];return r=o=n(this,(e=Object.getPrototypeOf(s)).call.apply(e,[this].concat(c))),o.contextTypes={isInAParentText:l.PropTypes.bool},o.childContextTypes={isInAParentText:l.PropTypes.bool},i=r,n(o,i)}return r(s,e),i(s,[{key:\"getChildContext\",value:function(){return{isInAParentText:!0}}},{key:\"render\",value:function(){var e=this.props,t={style:e.style||{},id:e.id,className:e.className},n=\"\";if(null!=e.children&&(n=Array.isArray(e.children)?e.children.join(\"\"):e.children.toString()),e.onPress&&(t.onClick=e.onPress),a.isWeex)return e.numberOfLines&&(t.style.lines=e.numberOfLines),t.value=n,(0,l.createElement)(\"text\",t);var r=o({},c.initial,t.style),i=e.numberOfLines;return i&&(1===parseInt(i)?r.whiteSpace=\"nowrap\":(r.display=\"-webkit-box\",r.webkitBoxOrient=\"vertical\",r.webkitLineClamp=String(i)),r.overflow=\"hidden\"),(0,l.createElement)(\"span\",o({},t,{style:r}),n)}}]),s}(l.Component),c={initial:{border:\"0 solid black\",position:\"relative\",boxSizing:\"border-box\",display:\"block\",flexDirection:\"column\",alignContent:\"flex-start\",flexShrink:0,fontSize:32}};return e[\"default\"]=s,e=e[\"default\"]}(),kgRxComponents013LibImage=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function r(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}function o(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=aliRx,s=aliRxEnv,c=kgRxComponents013LibView,u=t(c),p=function(e){function t(){return n(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),l(t,[{key:\"render\",value:function(){var e=i({},this.props),t=e.source;if(t&&t.uri){var n=t.width,r=t.height,o=t.uri;e.style=i({display:\"flex\",width:n||0,height:r||0},e.style),e.src=o,delete e.source;var l=void 0;l=s.isWeex?\"image\":\"img\";var c=e.resizeMode||e.style.resizeMode;return c&&(s.isWeex?(e.resize=c,e.style.resizeMode=c):e.style.objectFit=c),this.props.children?(e.children=null,(0,a.createElement)(u[\"default\"],{style:e.style},(0,a.createElement)(l,e),(0,a.createElement)(u[\"default\"],{style:f.absoluteImage},this.props.children))):(0,a.createElement)(l,e)}return null}}]),t}(a.Component);p.resizeMode={contain:\"contain\",cover:\"cover\",stretch:\"stretch\",center:\"center\",repeat:\"repeat\"};var f={absoluteImage:{left:0,top:0,position:\"absolute\"}};return e[\"default\"]=p,e=e[\"default\"]}(),kgRxComponents013LibLink=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function r(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}function o(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=aliRx,s=aliRxEnv,c=kgRxComponents013LibText,u=t(c),p=function(e){function t(){return n(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),l(t,[{key:\"render\",value:function(){var e=this.props,t=e.children,n={style:e.style||{},href:e.href,id:e.id,className:e.className};e.onPress&&(n.onClick=e.onPress);var r=t;if(\"string\"==typeof t&&(r=(0,a.createElement)(u[\"default\"],null,t)),s.isWeex)return(0,a.createElement)(\"a\",n,r);var o=i({},f.initial,n.style);return(0,a.createElement)(\"a\",i({},n,{style:o}),r)}}]),t}(a.Component),f={initial:{textDecoration:\"none\"}};return e[\"default\"]=p,e=e[\"default\"]}(),kgRxComponents013LibTextInput=function(e){function t(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function n(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}function r(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=aliRx,a=aliRxEnv,s={\"default\":\"text\",\"ascii-capable\":\"text\",\"numbers-and-punctuation\":\"number\",url:\"url\",\"number-pad\":\"number\",\"phone-pad\":\"tel\",\"name-phone-pad\":\"text\",\"email-address\":\"email\",\"decimal-pad\":\"number\",twitter:\"text\",\"web-search\":\"search\",numeric:\"number\"},c=function(e){function c(){var e,r,o,i;t(this,c);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return r=o=n(this,(e=Object.getPrototypeOf(c)).call.apply(e,[this].concat(s))),o.handleInput=function(e){var t=e.value;a.isWeex&&(e={nativeEvent:{text:t},value:t}),o.props.onInput(e)},o.handleChange=function(e){var t=e.value;a.isWeex&&(e={nativeEvent:{text:t},value:t}),o.props.onChange&&o.props.onChange(e),o.props.onChangeText&&o.props.onChangeText(t)},o.handleFocus=function(e){return o.props.onFocus(e)},o.handleBlur=function(e){return o.props.onBlur(e)},i=r,n(o,i)}return r(c,e),i(c,[{key:\"render\",value:function(){var e=this.props,t=e.accessibilityLabel,n=e.autoComplete,r=e.autoFocus,i=e.editable,c=e.keyboardType,p=e.maxLength,f=e.maxNumberOfLines,h=e.multiline,d=e.numberOfLines,b=e.onBlur,y=e.onFocus,m=e.onChange,v=e.onChangeText,_=e.onInput,x=e.placeholder,g=e.password,w=e.secureTextEntry,O=e.style,C=e.value,R=e.id,k={\"aria-label\":t,autoComplete:n&&\"on\",autoFocus:r,maxLength:p,onChange:(m||v)&&this.handleChange,onInput:_&&this.handleInput,onBlur:b&&this.handleBlur,onFocus:y&&this.handleFocus,placeholder:x,style:o({},u.initial,O),value:C,id:R};\"undefined\"==typeof i||i||(k.readOnly=!0);var E=s[c];if((g||w)&&(E=\"password\"),a.isWeex)return h?(0,l.createElement)(\"textarea\",o({},k,{rows:20,disabled:k.readOnly})):(0,l.createElement)(\"input\",o({},k,{type:E,disabled:k.readOnly}));var j=void 0;if(h){var S={maxRows:f||d,minRows:d};j=(0,l.createElement)(\"textarea\",o({},k,S),k.value)}else j=(0,l.createElement)(\"input\",o({},k,{type:E}));return j}}]),c}(l.Component),u={initial:{appearance:\"none\",backgroundColor:\"transparent\",borderColor:\"#000000\",borderWidth:0,boxSizing:\"border-box\",color:\"#000000\",padding:0,paddingLeft:\"8rem\",lineHeight:\"24rem\",fontSize:\"24rem\",height:\"36rem\"}};return e[\"default\"]=c,e=e[\"default\"]}(),kgRxComponents013LibTouchableHighlight=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function r(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}function o(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=aliRx,s=kgRxComponents013LibView,c=t(s),u=function(e){function t(){return n(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),l(t,[{key:\"render\",value:function(){var e=this.props,t=i({},e,{style:i({},p.initial,e.style),onClick:e.onPress});return delete t.onPress,(0,a.createElement)(c[\"default\"],t)}}]),t}(a.Component),p={initial:{cursor:\"pointer\"}};return e[\"default\"]=u,e=e[\"default\"]}(),kgRxComponents013LibSwitch=function(e){function t(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function n(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}function r(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=aliRx,a=aliRxEnv,s=\"100rem\",c=\"60rem\",u=function(e){function u(){var e,r,o,i;t(this,u);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return r=o=n(this,(e=Object.getPrototypeOf(u)).call.apply(e,[this].concat(a))),o.state={value:o.props.value},o.handleClick=function(e){if(o.props.disabled)return null;var t=!o.state.value;o.props.onValueChange&&o.props.onValueChange.call(o,t),o.setState({value:t});var n=o.props.value;setTimeout(function(){o.props.value==n&&o.setState({value:o.props.value})},200)},i=r,n(o,i)}return r(u,e),i(u,[{key:\"getStyles\",value:function(){return{span:{width:s,height:c,borderRadius:\"40rem\",position:\"relative\",display:\"inline-block\",margin:\"4rem\",cursor:\"default\",verticalAlign:\"middle\",borderColor:\"#dfdfdf\",borderWidth:\"1px\",borderStyle:\"solid\",WebkitUserSelect:\"none\",WebkitBoxSizing:\"content-box\",WebkitBackfaceVisibility:\"hidden\"},checkedSpan:{borderColor:this.props.onTintColor,backgroundColor:this.props.onTintColor,boxShadow:this.props.onTintColor+\" 0 0 0 16px inset\",WebkitTransition:\"border 0.2s, box-shadow 0.2s, background-color 1s\"},uncheckedSpan:{borderColor:\"#dfdfdf\",backgroundColor:this.props.tintColor,boxShadow:\"#dfdfdf 0 0 0 0 inset\",WebkitTransition:\"border 0.2s, box-shadow 0.2s\"},disabledSpan:{opacity:.5,cursor:\"not-allowed\",boxShadow:\"none\"},small:{position:\"absolute\",top:0,width:\"60rem\",height:\"60rem\",backgroundColor:this.props.thumbTintColor,borderRadius:\"100%\",boxShadow:\"0 1px 3px rgba(0,0,0,0.4)\",WebkitTransition:\"-webkit-transform 0.2s ease-in\"},checkedSmall:{WebkitTransform:\"translateX(40rem)\"},uncheckedSmall:{WebkitTransform:\"translateX(0)\"}}}},{key:\"render\",value:function(){var e=this;if(a.isWeex){var t={style:o({},p.initial,this.props.style),checked:this.state.value,disabled:this.props.disabled,onChange:function(t){var n=t.value;return e.props.onValueChange(n)}};return(0,l.createElement)(\"switch\",t)}var n=this.getStyles(),r=this.state.value?o({},n.span,n.checkedSpan):o({},n.span,n.uncheckedSpan),i=this.state.value?o({},n.small,n.checkedSmall):o({},n.small,n.uncheckedSmall);return r=this.props.disabled?o({},r,n.disabledSpan):r,(0,l.createElement)(\"span\",{onClick:this.handleClick,style:r},(0,l.createElement)(\"small\",{style:i}))}}]),u}(l.Component);u.defaultProps={onTintColor:\"#00e158\",thumbTintColor:\"#fff\",tintColor:\"#fff\"};var p={initial:{width:s,height:c}};return e[\"default\"]=u,e=e[\"default\"]}(),kgRxComponents013LibVideo=function(e){function t(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function n(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}function r(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=aliRx,a=aliRxEnv,s=function(e){function s(){return t(this,s),n(this,Object.getPrototypeOf(s).apply(this,arguments))}return r(s,e),i(s,[{key:\"render\",value:function(){var e=this.props;if(a.isWeex)return(0,l.createElement)(\"video\",e);var t=o({},e,{controls:!0});delete t.autoPlay,delete t.src,e.autoPlay&&(t.autoPlay=e.autoPlay);var n=e.src;return(0,l.createElement)(\"video\",o({},t,{\"webkit-playsinline\":!0}),(0,l.createElement)(\"source\",{src:n}))}}]),s}(l.Component);return e[\"default\"]=s,e=e[\"default\"]}(),kgRxComponents013LibScrollView=function(exports){function _interopRequireDefault(e){return e&&e.__esModule?e:{\"default\":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}function _inherits(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function throttle(e,t){function n(){l=0,a=+new Date,i=e.apply(r,o),r=null,o=null}var r,o,i,l,a=0;return function(){r=this,o=arguments;var e=new Date-a;return l||(e>=t?n():l=setTimeout(n,t-e)),i}}exports={},Object.defineProperty(exports,\"__esModule\",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_rx=aliRx,_rxEnv=aliRxEnv,_View=kgRxComponents013LibView,_View2=_interopRequireDefault(_View),DEFAULT_END_REACHED_THRESHOLD=500,DEFAULT_SCROLL_CALLBACK_THROTTLE=50,FULL_WIDTH=750,ScrollView=function(_Component){function ScrollView(){var _Object$getPrototypeO,_temp,_this,_ret;_classCallCheck(this,ScrollView);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _temp=_this=_possibleConstructorReturn(this,(_Object$getPrototypeO=Object.getPrototypeOf(ScrollView)).call.apply(_Object$getPrototypeO,[this].concat(args))),_this.lastScrollDistance=0,_this.lastScrollContentSize=0,_this.handleScroll=function(e){if(_rxEnv.isWeb&&(_this.props.onScroll&&_this.props.onScroll(e),_this.props.onEndReached)){_this.scrollerNode||(_this.scrollerNode=(0,_rx.findDOMNode)(_this.refs.scroller),_this.scrollerContentNode=(0,_rx.findDOMNode)(_this.refs.contentContainer),_this.scrollerNodeSize=_this.props.horizontal?_this.scrollerNode.offsetWidth:_this.scrollerNode.offsetHeight);var t=_this.props.horizontal?_this.scrollerContentNode.offsetWidth:_this.scrollerContentNode.offsetHeight,n=_this.props.horizontal?_this.scrollerNode.scrollLeft:_this.scrollerNode.scrollTop,r=t-n-_this.scrollerNodeSize<_this.props.onEndReachedThreshold,o=n>_this.lastScrollDistance,i=t!=_this.lastScrollContentSize;r&&o&&i&&(_this.lastScrollContentSize=t,_this.props.onEndReached(e)),_this.lastScrollDistance=n}},_this.resetScroll=function(e){_rxEnv.isWeb&&(_this.lastScrollContentSize=0,_this.lastScrollDistance=0)},_this.scrollTo=function(options){var x=parseInt(options.x),y=parseInt(options.y);if(_rxEnv.isWeex){var dom=eval('require(\"@weex-module/dom\")'),contentContainer=(0,_rx.findDOMNode)(_this.refs.contentContainer);dom.scrollToElement(contentContainer.ref,{offset:x||y||0})}else{var pixelRatio=document.documentElement.clientWidth/FULL_WIDTH;x>=0&&((0,_rx.findDOMNode)(_this.refs.scroller).scrollLeft=pixelRatio*x),y>=0&&((0,_rx.findDOMNode)(_this.refs.scroller).scrollTop=pixelRatio*y)}},_ret=_temp,_possibleConstructorReturn(_this,_ret)}return _inherits(ScrollView,_Component),_createClass(ScrollView,[{key:\"render\",value:function(){var e=this,t=this.props,n=t.id,r=(t.style,t.scrollEventThrottle),o=t.showsHorizontalScrollIndicator,i=t.showsVerticalScrollIndicator,l=t.onEndReached,a=t.onEndReachedThreshold;a=parseInt(a,10);var s=[this.props.horizontal&&styles.contentContainerHorizontal,this.props.contentContainerStyle];if(this.props.style){var c=[\"alignItems\",\"justifyContent\"].filter(function(t){return void 0!==e.props.style[t]});0!==c.length&&console.warn(\"ScrollView child layout (\"+JSON.stringify(c)+\") must be applied through the contentContainerStyle prop.\")}var u=(0,_rx.createElement)(_View2[\"default\"],{ref:\"contentContainer\",style:s},this.props.children),p=this.props.horizontal?styles.baseHorizontal:styles.baseVertical,f=_extends({},p,this.props.style),h=this.props.horizontal?o:i;if(_rxEnv.isWeex)return(0,_rx.createElement)(\"scroller\",{id:n,style:f,showScrollbar:h,onLoadmore:l,loadmoreoffset:String(a),scrollDirection:this.props.horizontal?\"horizontal\":\"vertical\"},u);var d=this.handleScroll;if(r&&(d=throttle(d,r)),!h&&!document.getElementById(\"rx-scrollview-style\")){var b=document.createElement(\"style\");b.id=\"rx-scrollview-style\",document.head.appendChild(b),b.innerHTML=\".\"+this.props.className+\"::-webkit-scrollbar{display: none;}\"}return f.webkitOverflowScrolling=\"touch\",f.overflow=\"scroll\",(0,_rx.createElement)(_View2[\"default\"],_extends({},this.props,{ref:\"scroller\",style:f,onScroll:d}),u)}}]),ScrollView}(_rx.Component);ScrollView.defaultProps={scrollEventThrottle:DEFAULT_SCROLL_CALLBACK_THROTTLE,onEndReachedThreshold:DEFAULT_END_REACHED_THRESHOLD,showsHorizontalScrollIndicator:!0,showsVerticalScrollIndicator:!0,className:\"rx-scrollview\"};var styles={baseVertical:{flex:1,flexDirection:\"column\"},baseHorizontal:{flex:1,flexDirection:\"row\"},contentContainerHorizontal:{flexDirection:\"row\"}};return exports[\"default\"]=ScrollView,exports=exports[\"default\"]}(),kgRxComponents013LibSlider=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function r(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}function o(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=aliRx,a=aliRxEnv,s=kgRxComponents013LibView,c=(t(s),function(e){function t(){return n(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),i(t,[{key:\"render\",value:function(){if(a.isWeex)return(0,l.createElement)(\"slider\",this.props)}}]),t}(l.Component));return e[\"default\"]=c,e=e[\"default\"]}(),kgRxComponents013LibRecyclerView=function(exports){function _interopRequireDefault(e){return e&&e.__esModule?e:{\"default\":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}function _inherits(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}exports={},Object.defineProperty(exports,\"__esModule\",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_rx=aliRx,_rxEnv=aliRxEnv,_View=kgRxComponents013LibView,_View2=_interopRequireDefault(_View),_ScrollView=kgRxComponents013LibScrollView,_ScrollView2=_interopRequireDefault(_ScrollView),DEFAULT_END_REACHED_THRESHOLD=500,RecyclerView=function(_Component){function RecyclerView(){var _Object$getPrototypeO,_temp,_this,_ret;_classCallCheck(this,RecyclerView);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _temp=_this=_possibleConstructorReturn(this,(_Object$getPrototypeO=Object.getPrototypeOf(RecyclerView)).call.apply(_Object$getPrototypeO,[this].concat(args))),_this.scrollTo=function(options){var x=parseInt(options.x),y=parseInt(options.y);if(_rxEnv.isWeex){var dom=eval('require(\"@weex-module/dom\")'),firstCell=(0,_rx.findDOMNode)(_this.refs.cell0);dom.scrollToElement(firstCell.ref,{offset:x||y||0})}else _this.refs.scrollview.scrollTo(options)},_ret=_temp,_possibleConstructorReturn(_this,_ret)}return _inherits(RecyclerView,_Component),_createClass(RecyclerView,[{key:\"render\",value:function(){var e=this.props;if(_rxEnv.isWeex){var t=e.children.map(function(e,t){return(0,_rx.createElement)(\"cell\",{ref:\"cell\"+t,append:\"tree\"},e)});return(0,_rx.createElement)(\"list\",{id:e.id,style:e.style,onLoadmore:e.onEndReached,loadmoreoffset:String(e.onEndReachedThreshold)},t)}return(0,_rx.createElement)(_ScrollView2[\"default\"],_extends({},e,{ref:\"scrollview\"}))}}]),RecyclerView}(_rx.Component);return RecyclerView.defaultProps={onEndReachedThreshold:DEFAULT_END_REACHED_THRESHOLD},exports[\"default\"]=RecyclerView,exports=exports[\"default\"]}(),kgRxComponents013LibRefreshControl=function(e){function t(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function n(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}function r(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=aliRx,l=aliRxEnv,a=function(e){function a(){return t(this,a),n(this,Object.getPrototypeOf(a).apply(this,arguments))}return r(a,e),o(a,[{key:\"render\",value:function(){if(l.isWeex){var e=this.props.refreshing?\"show\":\"hide\";return(0,i.createElement)(\"refresh\",{id:this.props.id,style:this.props.style,display:e,onRefresh:this.props.onRefresh},this.props.children)}return null}}]),a}(i.Component);return e[\"default\"]=a,e=e[\"default\"]}(),kgRxComponents013LibButton=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function r(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}function o(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=aliRx,s=kgRxComponents013LibText,c=t(s),u=kgRxComponents013LibTouchableHighlight,p=t(u),f=function(e){function t(){return n(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),l(t,[{key:\"render\",value:function(){var e=this.props,t=e.children,n=i({},h.initial,e.style),r=t;return\"string\"==typeof t&&(r=(0,a.createElement)(c[\"default\"],null,t)),(0,a.createElement)(p[\"default\"],i({},e,{style:n}),r)}}]),t}(a.Component),h={initial:{flex:1,alignItems:\"center\",justifyContent:\"center\",flexDirection:\"row\",height:\"60rem\",paddingTop:\"12rem\",paddingBottom:\"12rem\",paddingLeft:\"25rem\",paddingRight:\"25rem\",borderWidth:\"1px\",borderStyle:\"solid\",borderColor:\"#666666\"}};return e[\"default\"]=f,e=e[\"default\"]}(),kgRxComponents013LibListView=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}function n(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function r(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}function o(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}e={},Object.defineProperty(e,\"__esModule\",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=aliRx,a=kgRxComponents013LibView,s=(t(a),kgRxComponents013LibRecyclerView),c=t(s),u=\"scrollview\",p=function(e){\nfunction t(){var e,o,i,l;n(this,t);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return o=i=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.scrollTo=function(e){i.refs[u]&&i.refs[u].scrollTo(e)},l=o,r(i,l)}return o(t,e),i(t,[{key:\"render\",value:function(){var e=this.props,t=e.renderScrollComponent,n=e.renderHeader,r=e.renderFooter,o=e.renderRow,i=e.dataSource,l=e.onEndReached,a=e.onEndReachedThreshold,s=e.id,c=e.className,p=e.style,f=\"function\"==typeof n?n():null,h=\"function\"==typeof r?r():null,d=i.map(function(e,t){return o(e,t)}),b={id:s,className:c,ref:u,style:p,children:[].concat(f,d,h),onEndReached:l,onEndReachedThreshold:a};return t(b)}}]),t}(l.Component);return p.defaultProps={renderScrollComponent:function(e){return(0,l.createElement)(c[\"default\"],e)},dataSource:[]},e[\"default\"]=p,e=e[\"default\"]}(),kgRxComponents013Index=function(e){function t(e){return e&&e.__esModule?e:{\"default\":e}}e={},Object.defineProperty(e,\"__esModule\",{value:!0}),e.TouchableNativeFeedback=e.TouchableWithoutFeedback=e.TouchableOpacity=e.TouchableHighlight=e.RefreshControl=e.RecyclerView=e.ListView=e.Slider=e.ScrollView=e.Video=e.Switch=e.Button=e.TextInput=e.Link=e.Image=e.Text=e.View=void 0;var n=kgRxComponents013LibView,r=t(n),o=kgRxComponents013LibText,i=t(o),l=kgRxComponents013LibImage,a=t(l),s=kgRxComponents013LibLink,c=t(s),u=kgRxComponents013LibTextInput,p=t(u),f=kgRxComponents013LibButton,h=t(f),d=kgRxComponents013LibSwitch,b=t(d),y=kgRxComponents013LibVideo,m=t(y),v=kgRxComponents013LibScrollView,_=t(v),x=kgRxComponents013LibSlider,g=t(x),w=kgRxComponents013LibListView,O=t(w),C=kgRxComponents013LibRecyclerView,R=t(C),k=kgRxComponents013LibRefreshControl,E=t(k),j=kgRxComponents013LibTouchableHighlight,S=t(j);return e.View=r[\"default\"],e.Text=i[\"default\"],e.Image=a[\"default\"],e.Link=c[\"default\"],e.TextInput=p[\"default\"],e.Button=h[\"default\"],e.Switch=b[\"default\"],e.Video=m[\"default\"],e.ScrollView=_[\"default\"],e.Slider=g[\"default\"],e.ListView=O[\"default\"],e.RecyclerView=R[\"default\"],e.RefreshControl=E[\"default\"],e.TouchableHighlight=S[\"default\"],e.TouchableOpacity=S[\"default\"],e.TouchableWithoutFeedback=S[\"default\"],e.TouchableNativeFeedback=S[\"default\"],e}(),module.exports=kgRxComponents013Index});";

/***/ },
/* 84 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.init = init;
	exports.registerComponents = registerComponents;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	exports.prepareInstance = prepareInstance;
	exports.createInstance = createInstance;
	exports.refreshInstance = refreshInstance;
	exports.destroyInstance = destroyInstance;
	exports.getRoot = getRoot;
	exports.receiveTasks = receiveTasks;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var config = {};
	
	var instanceMap = {};
	
	function init(cfg) {
	  config.Document = cfg.Document;
	  config.Element = cfg.Element;
	  config.Comment = cfg.Comment;
	  config.sendTasks = cfg.sendTasks;
	}
	
	function registerComponents(components) {}
	
	function registerModules(modules) {}
	
	function registerMethods(apis) {}
	
	function prepareInstance(id, options, data) {}
	
	function createInstance(id, code, options, data) {
	  var document = new config.Document(id, options.bundleUrl);
	  var callbacks = {};
	  var lastCallbackId = 0;
	  document.addCallback = function (func) {
	    lastCallbackId++;
	    callbacks[lastCallbackId] = func;
	    return lastCallbackId;
	  };
	  document.handleCallback = function (funcId, data, ifLast) {
	    var callback = callbacks[funcId];
	    if (ifLast) {
	      delete callbacks[funcId];
	    }
	    return callback(data);
	  };
	  instanceMap[id] = document;
	  var result = new Function('Document', 'Element', 'Comment', 'sendTasks', 'id', 'options', 'data', 'document', code);
	  return result(config.Document, config.Element, config.Comment, config.sendTasks, id, options, data, document);
	}
	
	function refreshInstance(id, data) {}
	
	function destroyInstance(id) {
	  delete instanceMap[id];
	}
	
	function getRoot(id) {
	  return instanceMap[id].body.toJSON();
	}
	
	function receiveTasks(id, tasks) {
	  var jsHandlers = {
	    fireEvent: function fireEvent(id, ref, type, data, domChanges) {
	      var document = instanceMap[id];
	      var el = document.getRef(ref);
	      return document.fireEvent(el, type, data, domChanges);
	    },
	
	    callback: function callback(id, funcId, data, ifLast) {
	      var document = instanceMap[id];
	      return document.handleCallback(funcId, data, ifLast);
	    }
	  };
	
	  var document = instanceMap[id];
	  if (document && Array.isArray(tasks)) {
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
	}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _create = __webpack_require__(86);
	
	Object.defineProperty(exports, 'createInstance', {
	  enumerable: true,
	  get: function get() {
	    return _create.createInstance;
	  }
	});
	
	var _life = __webpack_require__(113);
	
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
	
	var _register = __webpack_require__(114);
	
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
	
	var _bridge = __webpack_require__(115);
	
	Object.defineProperty(exports, 'receiveTasks', {
	  enumerable: true,
	  get: function get() {
	    return _bridge.receiveTasks;
	  }
	});
	
	var _misc = __webpack_require__(116);
	
	Object.defineProperty(exports, 'getRoot', {
	  enumerable: true,
	  get: function get() {
	    return _misc.getRoot;
	  }
	});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createInstance = createInstance;
	
	var _app = __webpack_require__(87);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _map = __webpack_require__(112);
	
	var _ctrl = __webpack_require__(89);
	
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
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _register = __webpack_require__(88);
	
	var _ctrl = __webpack_require__(89);
	
	var _instance = __webpack_require__(110);
	
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
/* 88 */
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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _init = __webpack_require__(90);
	
	Object.defineProperty(exports, 'init', {
	  enumerable: true,
	  get: function get() {
	    return _init.init;
	  }
	});
	
	var _misc = __webpack_require__(109);
	
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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = init;
	
	var _vm = __webpack_require__(91);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _util = __webpack_require__(92);
	
	var _bundle = __webpack_require__(104);
	
	var _misc = __webpack_require__(109);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	  var bundleVm = _vm2.default;
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
	      '__weex_require__', '__weex_viewmodel__', 'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval', functionBody);
	
	      fn(bundleDefine, bundleRequire, bundleDocument, bundleBootstrap, bundleRegister, bundleRender, bundleDefine, bundleBootstrap, bundleDocument, bundleRequireModule, bundleVm, timerAPIs.setTimeout, timerAPIs.setInterval, timerAPIs.clearTimeout, timerAPIs.clearInterval);
	    })();
	  } else {
	    var _fn = new Function('define', 'require', 'document', 'bootstrap', 'register', 'render', '__weex_define__', // alias for define
	    '__weex_bootstrap__', // alias for bootstrap
	    '__weex_document__', // alias for bootstrap
	    '__weex_require__', '__weex_viewmodel__', functionBody);
	
	    _fn(bundleDefine, bundleRequire, bundleDocument, bundleBootstrap, bundleRegister, bundleRender, bundleDefine, bundleBootstrap, bundleDocument, bundleRequireModule, bundleVm);
	  }
	
	  return result;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Vm;
	
	var _util = __webpack_require__(92);
	
	var _state = __webpack_require__(93);
	
	var _compiler = __webpack_require__(99);
	
	var _observer = __webpack_require__(97);
	
	var _directive = __webpack_require__(100);
	
	var _events = __webpack_require__(103);
	
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
	  parentVm = parentVm || {};
	  this._parent = parentVm._realParent ? parentVm._realParent : parentVm;
	  this._app = parentVm._app || {};
	  parentVm._childrenVms && parentVm._childrenVms.push(this);
	
	  if (!options && this._app.customComponentMap) {
	    options = this._app.customComponentMap[type];
	  }
	  options = options || {};
	
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
	
	  if (!this._app.doc) {
	    return;
	  }
	
	  // if no parentElement then specify the documentElement
	  this._parentEl = parentEl || this._app.doc.documentElement;
	  (0, _compiler.build)(this);
	}
	
	(0, _events.mixinEvents)(Vm.prototype);
	
	/**
	 * Watch an function and bind all the data appeared in it. When the related
	 * data changes, the callback will be called with new value as 1st param.
	 *
	 * @param {Function} fn
	 * @param {Function} callback
	 */
	Vm.prototype.$watch = function (fn, callback) {
	  (0, _directive.watch)(this, fn, callback);
	};
	
	Vm.set = _observer.set;
	Vm.delete = _observer.del;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
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
	
	var _dep = __webpack_require__(96);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _observer = __webpack_require__(97);
	
	var _util = __webpack_require__(92);
	
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
	
	var _dep = __webpack_require__(96);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _util = __webpack_require__(92);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(95)))

/***/ },
/* 95 */
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
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Dep;
	exports.pushTarget = pushTarget;
	exports.popTarget = popTarget;
	
	var _util = __webpack_require__(92);
	
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
/* 97 */
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
	
	var _dep = __webpack_require__(96);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _array = __webpack_require__(98);
	
	var _util = __webpack_require__(92);
	
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
	      // vm.$forceUpdate()
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
	      // obj.$forceUpdate()
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      unproxy(vm, key);
	      // vm.$forceUpdate()
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
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.arrayMethods = undefined;
	
	var _util = __webpack_require__(92);
	
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
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.build = build;
	
	var _util = __webpack_require__(92);
	
	var _state = __webpack_require__(93);
	
	var _directive = __webpack_require__(100);
	
	var _domHelper = __webpack_require__(102);
	
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
	  (0, _directive.bindSubVmAfterInitialized)(vm, subVm, target, dest);
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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * @fileOverview
	                                                                                                                                                                                                                                                   * Directive Parser
	                                                                                                                                                                                                                                                   */
	
	exports.applyNaitveComponentOptions = applyNaitveComponentOptions;
	exports.bindElement = bindElement;
	exports.bindSubVm = bindSubVm;
	exports.bindSubVmAfterInitialized = bindSubVmAfterInitialized;
	exports.setId = setId;
	exports.watch = watch;
	
	var _util = __webpack_require__(92);
	
	var _watcher = __webpack_require__(94);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _config = __webpack_require__(101);
	
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
	  var target = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	  mergeClassStyle(template.classList, vm, subVm);
	  mergeStyle(template.style, vm, subVm);
	
	  // bind subVm to the target element
	  if (target.children) {
	    target.children[target.children.length - 1]._vm = subVm;
	  } else {
	    target._vm = subVm;
	  }
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
/* 101 */
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
/* 102 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
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
	  var preserveBlock = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	  if (target.element) {
	    removeBlock(target, preserveBlock);
	  } else {
	    removeElement(target);
	  }
	  if (target._vm) {
	    target._vm.$emit('hook:destroyed');
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
	  var preserveBlock = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
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
/* 103 */
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
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _bootstrap = __webpack_require__(105);
	
	Object.defineProperty(exports, 'bootstrap', {
	  enumerable: true,
	  get: function get() {
	    return _bootstrap.bootstrap;
	  }
	});
	
	var _define = __webpack_require__(108);
	
	Object.defineProperty(exports, 'clearCommonModules', {
	  enumerable: true,
	  get: function get() {
	    return _define.clearCommonModules;
	  }
	});
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
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bootstrap = bootstrap;
	
	var _semver = __webpack_require__(106);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _vm = __webpack_require__(91);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _downgrade = __webpack_require__(107);
	
	var downgrade = _interopRequireWildcard(_downgrade);
	
	var _register = __webpack_require__(88);
	
	var _util = __webpack_require__(92);
	
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
/* 106 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(95)))

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.normalizeVersion = normalizeVersion;
	exports.getError = getError;
	exports.check = check;
	
	var _semver = __webpack_require__(106);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _util = __webpack_require__(92);
	
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
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defineFn = undefined;
	exports.clearCommonModules = clearCommonModules;
	exports.register = register;
	
	var _util = __webpack_require__(92);
	
	var _register = __webpack_require__(88);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @deprecated
	 *
	 * common modules are shared to all instances
	 * it's very dangerous
	 */
	var commonModules = {};
	
	/**
	 * @deprecated
	 */
	function clearCommonModules() {
	  commonModules = {};
	}
	
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
	        return commonModules[_cleanName2];
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
	    commonModules[_cleanName4] = definition;
	  } else if ((0, _util.isNpmModule)(name)) {
	    var _cleanName5 = (0, _util.removeJSSurfix)(name);
	    if (definition.template || definition.style || definition.methods) {
	      // downgrade to old define method (define('componentName', factory))
	      // the exports contain one key of template, style or methods
	      // but it has risk!!!
	      (0, _register.registerCustomComponent)(app, _cleanName5, definition);
	    } else {
	      commonModules[_cleanName5] = definition;
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
/* 109 */
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
	
	var _util = __webpack_require__(92);
	
	var _config = __webpack_require__(101);
	
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
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = App;
	
	var _differ = __webpack_require__(111);
	
	var _differ2 = _interopRequireDefault(_differ);
	
	var _config = __webpack_require__(101);
	
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
	  this.callbacks = {};
	  this.doc = new _config2.default.Document(id, this.options.bundleUrl, null, _config2.default.Listener);
	  this.differ = new _differ2.default(id);
	  this.uid = 0;
	}

/***/ },
/* 111 */
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
/* 112 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var instanceMap = exports.instanceMap = {};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = init;
	exports.refreshInstance = refreshInstance;
	exports.destroyInstance = destroyInstance;
	
	var _config = __webpack_require__(101);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _ctrl = __webpack_require__(89);
	
	var _map = __webpack_require__(112);
	
	var _define = __webpack_require__(108);
	
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
	  (0, _define.clearCommonModules)();
	  delete _map.instanceMap[id];
	  return _map.instanceMap;
	}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.registerComponents = registerComponents;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	
	var _vm = __webpack_require__(91);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _config = __webpack_require__(101);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _register = __webpack_require__(88);
	
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
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.receiveTasks = receiveTasks;
	
	var _map = __webpack_require__(112);
	
	var _ctrl = __webpack_require__(89);
	
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
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRoot = getRoot;
	
	var _map = __webpack_require__(112);
	
	var _ctrl = __webpack_require__(89);
	
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
/* 117 */
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
/* 118 */
/***/ function(module, exports) {

	module.exports = {
		"name": "weex-js-framework",
		"version": "0.16.2",
		"subversion": {
			"framework": "0.16.2",
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
/* 119 */
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
	
	var _util = __webpack_require__(92);
	
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
/* 120 */
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