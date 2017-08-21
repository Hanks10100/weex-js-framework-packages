(this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK: 0.15.9 Build 20160923');(this.getJSFMVersion = function(){return "0.15.9"});
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
	exports.clearCommonModules = clearCommonModules;
	exports.register = register;
	
	var _util = __webpack_require__(87);
	
	var _register = __webpack_require__(84);
	
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
	
	var _define = __webpack_require__(104);
	
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
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
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
		"version": "0.15.9",
		"subversion": {
			"framework": "0.15.9",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDQxNmZiNjc5NmE3OTY1OTFjZmUiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9uYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL2luZGV4LmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL3NoYXJlZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9zaGFyZWQvc2V0VGltZW91dC5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9zaGFyZWQvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3RvLWluZGV4LmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9zaGFyZWQvY29uc29sZS5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9zaGFyZWQvb2JqZWN0QXNzaWduLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy92ZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL3Zkb20vbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvcnVudGltZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvY3RybC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9jdHJsL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC91dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2J1bmRsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9idW5kbGUvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9zZW12ZXIvc2VtdmVyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3ZtL2luZGV4LmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2NvcmUvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2NvcmUvZGVwLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2NvcmUvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC92bS9jb21waWxlci5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3ZtL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3ZtL2RvbS1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC92bS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvZG93bmdyYWRlLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2J1bmRsZS9kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvY3RybC9taXNjLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2luc3RhbmNlLmpzIiwid2VicGFjazovLy8uLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2RpZmZlci5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9zdGF0aWMvbGlmZS5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9icmlkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9zdGF0aWMvbWlzYy5qcyIsIndlYnBhY2s6Ly8vLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9ydW50aW1lL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9wYWNrYWdlLmpzb24iLCJ3ZWJwYWNrOi8vLy4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcGkvbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvYXBpL21ldGhvZHMuanMiXSwibmFtZXMiOlsibWV0aG9kcyIsInJlcXVpcmUiLCJnbG9iYWwiLCJyZWdpc3Rlck1ldGhvZHMiLCJuYXRpdmUiLCJ0cmFuc2Zvcm1lciIsIm1ldGhvZE5hbWUiLCJyZXQiLCJFcnJvciIsImNvbnNvbGUiLCJlcnJvciIsInRvU3RyaW5nIiwiZnJhbWV3b3JrVmVyc2lvbiIsInRyYW5zZm9ybWVyVmVyc2lvbiIsImV4dGVuZCIsImRlZiIsInJlbW92ZSIsImhhc093biIsImJpbmQiLCJ0b0FycmF5IiwiaXNPYmplY3QiLCJpc1BsYWluT2JqZWN0IiwidGFyZ2V0Iiwic3JjIiwiT2JqZWN0IiwiYXNzaWduIiwiZmlyc3QiLCJzaGlmdCIsImtleSIsImxlbmd0aCIsIm9iaiIsInZhbCIsImVudW1lcmFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJhcnIiLCJpdGVtIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiaGFzT3duUHJvcGVydHkiLCJwcm90b3R5cGUiLCJjYWxsIiwiZm4iLCJjdHgiLCJhIiwibCIsImFyZ3VtZW50cyIsImFwcGx5IiwibGlzdCIsInN0YXJ0IiwiaSIsIkFycmF5IiwiT0JKRUNUX1NUUklORyIsInNldFRpbWVvdXQiLCJzZXRUaW1lb3V0TmF0aXZlIiwidGltZW91dE1hcCIsInRpbWVvdXRJZCIsImNiIiwidGltZSIsInNldFRpbWVvdXRDYWxsYmFjayIsImlkIiwiV1hFbnZpcm9ubWVudCIsInBsYXRmb3JtIiwiUHJvbWlzZSIsImNsYXNzb2YiLCJ0ZXN0IiwiY29mIiwiVEFHIiwiQVJHIiwidHJ5R2V0IiwiaXQiLCJlIiwibW9kdWxlIiwiZXhwb3J0cyIsIk8iLCJUIiwiQiIsInVuZGVmaW5lZCIsImNhbGxlZSIsInNsaWNlIiwic3RvcmUiLCJ1aWQiLCJTeW1ib2wiLCJVU0VfU1lNQk9MIiwiJGV4cG9ydHMiLCJuYW1lIiwiU0hBUkVEIiwid2luZG93IiwiTWF0aCIsInNlbGYiLCJGdW5jdGlvbiIsIl9fZyIsInB4IiwicmFuZG9tIiwiY29uY2F0IiwiaGlkZSIsImhhcyIsIlNSQyIsIlRPX1NUUklORyIsIiR0b1N0cmluZyIsIlRQTCIsInNwbGl0IiwiaW5zcGVjdFNvdXJjZSIsInNhZmUiLCJpc0Z1bmN0aW9uIiwiam9pbiIsIlN0cmluZyIsImRQIiwiY3JlYXRlRGVzYyIsIm9iamVjdCIsImYiLCJhbk9iamVjdCIsIklFOF9ET01fREVGSU5FIiwidG9QcmltaXRpdmUiLCJQIiwiQXR0cmlidXRlcyIsIlR5cGVFcnJvciIsImdldCIsImV4ZWMiLCJkb2N1bWVudCIsImlzIiwiY3JlYXRlRWxlbWVudCIsIlMiLCJ2YWx1ZU9mIiwiYml0bWFwIiwiY29yZSIsInZlcnNpb24iLCJfX2UiLCIkYXQiLCJpdGVyYXRlZCIsIl90IiwiX2kiLCJwb2ludCIsImRvbmUiLCJ0b0ludGVnZXIiLCJkZWZpbmVkIiwidGhhdCIsInBvcyIsInMiLCJiIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwiTElCUkFSWSIsIiRleHBvcnQiLCJyZWRlZmluZSIsIkl0ZXJhdG9ycyIsIiRpdGVyQ3JlYXRlIiwic2V0VG9TdHJpbmdUYWciLCJnZXRQcm90b3R5cGVPZiIsIklURVJBVE9SIiwiQlVHR1kiLCJrZXlzIiwiRkZfSVRFUkFUT1IiLCJLRVlTIiwiVkFMVUVTIiwicmV0dXJuVGhpcyIsIkJhc2UiLCJOQU1FIiwiQ29uc3RydWN0b3IiLCJuZXh0IiwiREVGQVVMVCIsIklTX1NFVCIsIkZPUkNFRCIsImdldE1ldGhvZCIsImtpbmQiLCJwcm90byIsInZhbHVlcyIsImVudHJpZXMiLCJERUZfVkFMVUVTIiwiVkFMVUVTX0JVRyIsIiRuYXRpdmUiLCIkZGVmYXVsdCIsIiRlbnRyaWVzIiwiJGFueU5hdGl2ZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiRiIsIlBST1RPVFlQRSIsInR5cGUiLCJzb3VyY2UiLCJJU19GT1JDRUQiLCJJU19HTE9CQUwiLCJHIiwiSVNfU1RBVElDIiwiSVNfUFJPVE8iLCJJU19CSU5EIiwiZXhwUHJvdG8iLCJvd24iLCJvdXQiLCJleHAiLCJVIiwiVyIsIlIiLCJhRnVuY3Rpb24iLCJjIiwiY3JlYXRlIiwiZGVzY3JpcHRvciIsImRQcyIsImVudW1CdWdLZXlzIiwiSUVfUFJPVE8iLCJFbXB0eSIsImNyZWF0ZURpY3QiLCJpZnJhbWUiLCJsdCIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsIlByb3BlcnRpZXMiLCJyZXN1bHQiLCJnZXRLZXlzIiwiZGVmaW5lUHJvcGVydGllcyIsIiRrZXlzIiwidG9JT2JqZWN0IiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCJwdXNoIiwiSU9iamVjdCIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9MZW5ndGgiLCJ0b0luZGV4IiwiSVNfSU5DTFVERVMiLCIkdGhpcyIsImVsIiwiZnJvbUluZGV4IiwibWluIiwibWF4Iiwic2hhcmVkIiwiZG9jdW1lbnRFbGVtZW50IiwidGFnIiwic3RhdCIsInRvT2JqZWN0IiwiT2JqZWN0UHJvdG8iLCJjb25zdHJ1Y3RvciIsIiRpdGVyYXRvcnMiLCJ3a3MiLCJUT19TVFJJTkdfVEFHIiwiQXJyYXlWYWx1ZXMiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb24iLCJhZGRUb1Vuc2NvcGFibGVzIiwic3RlcCIsIl9rIiwiQXJndW1lbnRzIiwiVU5TQ09QQUJMRVMiLCJBcnJheVByb3RvIiwiYW5JbnN0YW5jZSIsImZvck9mIiwic3BlY2llc0NvbnN0cnVjdG9yIiwidGFzayIsInNldCIsIm1pY3JvdGFzayIsIlBST01JU0UiLCJwcm9jZXNzIiwiJFByb21pc2UiLCJpc05vZGUiLCJlbXB0eSIsIkludGVybmFsIiwiR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5IiwiV3JhcHBlciIsIlVTRV9OQVRJVkUiLCJwcm9taXNlIiwicmVzb2x2ZSIsIkZha2VQcm9taXNlIiwiUHJvbWlzZVJlamVjdGlvbkV2ZW50IiwidGhlbiIsInNhbWVDb25zdHJ1Y3RvciIsImlzVGhlbmFibGUiLCJuZXdQcm9taXNlQ2FwYWJpbGl0eSIsIkMiLCJQcm9taXNlQ2FwYWJpbGl0eSIsInJlamVjdCIsIiQkcmVzb2x2ZSIsIiQkcmVqZWN0IiwicGVyZm9ybSIsIm5vdGlmeSIsImlzUmVqZWN0IiwiX24iLCJjaGFpbiIsIl9jIiwiX3YiLCJvayIsIl9zIiwicnVuIiwicmVhY3Rpb24iLCJoYW5kbGVyIiwiZmFpbCIsImRvbWFpbiIsIl9oIiwib25IYW5kbGVVbmhhbmRsZWQiLCJlbnRlciIsImV4aXQiLCJvblVuaGFuZGxlZCIsImFicnVwdCIsImlzVW5oYW5kbGVkIiwiZW1pdCIsIm9udW5oYW5kbGVkcmVqZWN0aW9uIiwicmVhc29uIiwiX2EiLCJvbnJlamVjdGlvbmhhbmRsZWQiLCIkcmVqZWN0IiwiX2QiLCJfdyIsIiRyZXNvbHZlIiwid3JhcHBlciIsImV4ZWN1dG9yIiwiZXJyIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwiciIsImNhcGFiaWxpdHkiLCJ4IiwiaXRlciIsImFsbCIsIml0ZXJhYmxlIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCJmb3JiaWRkZW5GaWVsZCIsImlzQXJyYXlJdGVyIiwiZ2V0SXRlckZuIiwiQlJFQUsiLCJSRVRVUk4iLCJpdGVyRm4iLCJpdGVyYXRvciIsImdldEl0ZXJhdG9yTWV0aG9kIiwiU1BFQ0lFUyIsIkQiLCJpbnZva2UiLCJodG1sIiwiY2VsIiwic2V0VGFzayIsInNldEltbWVkaWF0ZSIsImNsZWFyVGFzayIsImNsZWFySW1tZWRpYXRlIiwiTWVzc2FnZUNoYW5uZWwiLCJjb3VudGVyIiwicXVldWUiLCJPTlJFQURZU1RBVEVDSEFOR0UiLCJkZWZlciIsImNoYW5uZWwiLCJwb3J0IiwibGlzdGVuZXIiLCJldmVudCIsImRhdGEiLCJhcmdzIiwibmV4dFRpY2siLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiaW1wb3J0U2NyaXB0cyIsInJlbW92ZUNoaWxkIiwiY2xlYXIiLCJ1biIsIm1hY3JvdGFzayIsIk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYktpdE11dGF0aW9uT2JzZXJ2ZXIiLCJoZWFkIiwibGFzdCIsImZsdXNoIiwicGFyZW50IiwidG9nZ2xlIiwibm9kZSIsImNyZWF0ZVRleHROb2RlIiwib2JzZXJ2ZSIsImNoYXJhY3RlckRhdGEiLCJERVNDUklQVE9SUyIsIktFWSIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwibmF0aXZlTG9nIiwiTEVWRUxTIiwibGV2ZWxNYXAiLCJnZW5lcmF0ZUxldmVsTWFwIiwiZGVidWciLCJjaGVja0xldmVsIiwiZm9ybWF0IiwibG9nIiwiaW5mbyIsIndhcm4iLCJfX29yaV9fIiwiZm9yRWFjaCIsImxldmVsSW5kZXgiLCJsZXZlbCIsInR5cGVJbmRleCIsImxvZ0xldmVsIiwibWFwIiwidiIsInRvTG93ZXJDYXNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImdPUFMiLCJwSUUiLCIkYXNzaWduIiwiQSIsIksiLCJrIiwiYUxlbiIsImdldFN5bWJvbHMiLCJpc0VudW0iLCJqIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uZmlnIiwiRG9jdW1lbnQiLCJFbGVtZW50IiwiQ29tbWVudCIsIkxpc3RlbmVyIiwiZnJhbWV3b3JrcyIsInNlbmRUYXNrcyIsImNhbGxOYXRpdmUiLCJOb2RlIiwiREVGQVVMVF9UQUdfTkFNRSIsImluc3RhbmNlTWFwIiwibmV4dE5vZGVSZWYiLCJ1cmwiLCJVUkwiLCJub2RlTWFwIiwiZ2VuQ2FsbFRhc2tzIiwiY3JlYXRlRG9jdW1lbnRFbGVtZW50IiwidGFza3MiLCJpc0FycmF5IiwicmV0dXJuVmFsdWUiLCJtZXRob2QiLCJyZWYiLCJqc29uIiwiY2FsbEFkZEVsZW1lbnQiLCJkZXN0cm95IiwiYmF0Y2hlZCIsImRvY0lkIiwib3duZXJEb2N1bWVudCIsInJvbGUiLCJkZXB0aCIsIl9kb2N1bWVudEVsZW1lbnQiLCJhcHBlbmRCb2R5IiwiaW5zZXJ0QmVmb3JlIiwiYmVmb3JlIiwiZG9jIiwicHVyZUNoaWxkcmVuIiwicGFyZW50Tm9kZSIsImNoaWxkcmVuIiwiYmVmb3JlSW5kZXgiLCJub2RlVHlwZSIsImNoaWxkIiwic2V0Qm9keSIsImxpbmtQYXJlbnQiLCJub2RlSWQiLCJjcmVhdGVCb2R5IiwiX3Jvb3QiLCJib2R5IiwicHJvcHMiLCJ0YWdOYW1lIiwiY3JlYXRlQ29tbWVudCIsInRleHQiLCJmaXJlRXZlbnQiLCJkb21DaGFuZ2VzIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInVwZGF0ZUVsZW1lbnQiLCJnZXRSZWYiLCJjaGFuZ2VzIiwiYXR0cnMiLCJzZXRBdHRyIiwic2V0U3R5bGUiLCJuZXh0U2libGluZyIsInByZXZpb3VzU2libGluZyIsImF0dHIiLCJjbGFzc1N0eWxlIiwiaW5zZXJ0SW5kZXgiLCJyZWdpc3Rlck5vZGUiLCJhZGRFbGVtZW50IiwibW92ZUluZGV4IiwibW92ZUVsZW1lbnQiLCJwdXJlQmVmb3JlIiwibmV4dEVsZW1lbnQiLCJpbnNlcnRBZnRlciIsImFmdGVyIiwicHJldmlvdXNFbGVtZW50IiwicHJlc2VydmVkIiwicmVtb3ZlSW5kZXgiLCJyZW1vdmVFbGVtZW50IiwibmV3SW5kZXgiLCJjaGFuZ2VTaWJsaW5nIiwibmV3SW5kZXhBZnRlciIsImJlZm9yZU5ldyIsImFmdGVyTmV3Iiwic2lsZW50IiwicmVzZXRDbGFzc1N0eWxlIiwic2V0Q2xhc3NTdHlsZSIsInNldFN0eWxlcyIsInRvU3R5bGUiLCJhZGRFdmVudCIsInJlbW92ZUV2ZW50IiwidG9KU09OIiwiY3JlYXRlQWN0aW9uIiwidXBkYXRlcyIsImNyZWF0ZUZpbmlzaCIsImNhbGxiYWNrIiwidXBkYXRlRmluaXNoIiwicmVmcmVzaEZpbmlzaCIsImVsZW1lbnQiLCJhY3Rpb25zIiwiYWRkQWN0aW9ucyIsInRhcmdldFJlZiIsInBhcmVudFJlZiIsIldlZXgiLCJjcmVhdGVJbnN0YW5jZSIsImluaXQiLCJyZWZyZXNoSW5zdGFuY2UiLCJkZXN0cm95SW5zdGFuY2UiLCJyZWdpc3RlckNvbXBvbmVudHMiLCJyZWdpc3Rlck1vZHVsZXMiLCJyZWNlaXZlVGFza3MiLCJnZXRSb290IiwiY29kZSIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsInJlcXVpcmVNb2R1bGUiLCJ1cGRhdGVBY3Rpb25zIiwiY2FsbFRhc2tzIiwiZ2V0TW9kdWxlIiwiY2xlYXJNb2R1bGVzIiwiaW5pdE1vZHVsZXMiLCJpbml0TWV0aG9kcyIsInJlcXVpcmVDdXN0b21Db21wb25lbnQiLCJyZWdpc3RlckN1c3RvbUNvbXBvbmVudCIsIm5hdGl2ZU1vZHVsZXMiLCJtb2R1bGVOYW1lIiwibW9kdWxlcyIsImlmUmVwbGFjZSIsIlZtIiwiYXBpcyIsInAiLCJhcGlOYW1lIiwiYXBwIiwiY3VzdG9tQ29tcG9uZW50TWFwIiwicmVmcmVzaCIsImdldFJvb3RFbGVtZW50IiwiYnVuZGxlRGVmaW5lIiwiYnVuZGxlQm9vdHN0cmFwIiwiX2RhdGEiLCJidW5kbGVSZWdpc3RlciIsImJ1bmRsZVJlbmRlciIsImJ1bmRsZVJlcXVpcmUiLCJidW5kbGVEb2N1bWVudCIsImJ1bmRsZVJlcXVpcmVNb2R1bGUiLCJmdW5jdGlvbkJvZHkiLCJzdWJzdHIiLCJ0aW1lciIsInRpbWVyQVBJcyIsInNldEludGVydmFsIiwiY2xlYXJUaW1lb3V0IiwibiIsImNsZWFySW50ZXJ2YWwiLCJpc1Jlc2VydmVkIiwiY3JlYXRlTmV3U2V0IiwiY2FjaGVkIiwidHlwb2YiLCJyZW1vdmVXZWV4UHJlZml4IiwicmVtb3ZlSlNTdXJmaXgiLCJzdHIiLCJoYXNQcm90byIsIl9TZXQiLCJTZXQiLCJtYXRjaCIsImFkZCIsIm5hdGl2ZVNldCIsImNhY2hlIiwiY2FjaGVkRm4iLCJoaXQiLCJjYW1lbGl6ZVJFIiwiY2FtZWxpemUiLCJyZXBsYWNlIiwidG9VcHBlciIsIl8iLCJ0b1VwcGVyQ2FzZSIsImh5cGhlbmF0ZVJFIiwiaHlwaGVuYXRlIiwic3Vic3RyaW5nIiwiV0VFWF9DT01QT05FTlRfUkVHIiwiV0VFWF9NT0RVTEVfUkVHIiwiTk9STUFMX01PRFVMRV9SRUciLCJKU19TVVJGSVhfUkVHIiwiaXNXZWV4Q29tcG9uZW50IiwiaXNXZWV4TW9kdWxlIiwiaXNOb3JtYWxNb2R1bGUiLCJpc05wbU1vZHVsZSIsImJvb3RzdHJhcCIsImNsZWFyQ29tbW9uTW9kdWxlcyIsImRlZmluZUZuIiwicmVnaXN0ZXIiLCJkb3duZ3JhZGUiLCJjbGVhbk5hbWUiLCJzYXRpc2ZpZXMiLCJkb3duZ3JhZGVSZXN1bHQiLCJjaGVjayIsImlzRG93bmdyYWRlIiwiZXJyb3JUeXBlIiwiZXJyb3JNZXNzYWdlIiwidm0iLCJfYXBwIiwiU2VtVmVyIiwiZW52IiwiTk9ERV9ERUJVRyIsInVuc2hpZnQiLCJTRU1WRVJfU1BFQ19WRVJTSU9OIiwiTUFYX0xFTkdUSCIsIk1BWF9TQUZFX0lOVEVHRVIiLCJOdW1iZXIiLCJyZSIsIk5VTUVSSUNJREVOVElGSUVSIiwiTlVNRVJJQ0lERU5USUZJRVJMT09TRSIsIk5PTk5VTUVSSUNJREVOVElGSUVSIiwiTUFJTlZFUlNJT04iLCJNQUlOVkVSU0lPTkxPT1NFIiwiUFJFUkVMRUFTRUlERU5USUZJRVIiLCJQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFIiwiUFJFUkVMRUFTRSIsIlBSRVJFTEVBU0VMT09TRSIsIkJVSUxESURFTlRJRklFUiIsIkJVSUxEIiwiRlVMTCIsIkZVTExQTEFJTiIsIkxPT1NFUExBSU4iLCJMT09TRSIsIkdUTFQiLCJYUkFOR0VJREVOVElGSUVSTE9PU0UiLCJYUkFOR0VJREVOVElGSUVSIiwiWFJBTkdFUExBSU4iLCJYUkFOR0VQTEFJTkxPT1NFIiwiWFJBTkdFIiwiWFJBTkdFTE9PU0UiLCJMT05FVElMREUiLCJUSUxERVRSSU0iLCJSZWdFeHAiLCJ0aWxkZVRyaW1SZXBsYWNlIiwiVElMREUiLCJUSUxERUxPT1NFIiwiTE9ORUNBUkVUIiwiQ0FSRVRUUklNIiwiY2FyZXRUcmltUmVwbGFjZSIsIkNBUkVUIiwiQ0FSRVRMT09TRSIsIkNPTVBBUkFUT1JMT09TRSIsIkNPTVBBUkFUT1IiLCJDT01QQVJBVE9SVFJJTSIsImNvbXBhcmF0b3JUcmltUmVwbGFjZSIsIkhZUEhFTlJBTkdFIiwiSFlQSEVOUkFOR0VMT09TRSIsIlNUQVIiLCJwYXJzZSIsImxvb3NlIiwiZXIiLCJ2YWxpZCIsImNsZWFuIiwidHJpbSIsIm0iLCJyYXciLCJtYWpvciIsIm1pbm9yIiwicGF0Y2giLCJwcmVyZWxlYXNlIiwibnVtIiwiYnVpbGQiLCJjb21wYXJlIiwib3RoZXIiLCJjb21wYXJlTWFpbiIsImNvbXBhcmVQcmUiLCJjb21wYXJlSWRlbnRpZmllcnMiLCJpbmMiLCJyZWxlYXNlIiwiaWRlbnRpZmllciIsImRpZmYiLCJ2ZXJzaW9uMSIsInZlcnNpb24yIiwiZXEiLCJ2MSIsInYyIiwibnVtZXJpYyIsImFudW0iLCJibnVtIiwicmNvbXBhcmVJZGVudGlmaWVycyIsImNvbXBhcmVMb29zZSIsInJjb21wYXJlIiwic29ydCIsInJzb3J0IiwibmVxIiwiZ3RlIiwibHRlIiwiY21wIiwib3AiLCJDb21wYXJhdG9yIiwiY29tcCIsInNlbXZlciIsIkFOWSIsIm9wZXJhdG9yIiwiUmFuZ2UiLCJyYW5nZSIsInBhcnNlUmFuZ2UiLCJmaWx0ZXIiLCJjb21wcyIsImhyIiwiaHlwaGVuUmVwbGFjZSIsImNvbXBSZSIsInBhcnNlQ29tcGFyYXRvciIsInRvQ29tcGFyYXRvcnMiLCJyZXBsYWNlQ2FyZXRzIiwicmVwbGFjZVRpbGRlcyIsInJlcGxhY2VYUmFuZ2VzIiwicmVwbGFjZVN0YXJzIiwiaXNYIiwicmVwbGFjZVRpbGRlIiwiTSIsInByIiwicmVwbGFjZUNhcmV0IiwicmVwbGFjZVhSYW5nZSIsImd0bHQiLCJ4TSIsInhtIiwieHAiLCJhbnlYIiwiJDAiLCJmTSIsImZtIiwiZnAiLCJmcHIiLCJmYiIsInRvIiwidE0iLCJ0bSIsInRwIiwidHByIiwidGIiLCJ0ZXN0U2V0IiwiYWxsb3dlZCIsIm1heFNhdGlzZnlpbmciLCJ2ZXJzaW9ucyIsIm1pblNhdGlzZnlpbmciLCJ2YWxpZFJhbmdlIiwibHRyIiwib3V0c2lkZSIsImd0ciIsImhpbG8iLCJndGZuIiwibHRlZm4iLCJsdGZuIiwiZWNvbXAiLCJjb21wYXJhdG9ycyIsImhpZ2giLCJsb3ciLCJjb21wYXJhdG9yIiwicGFyc2VkIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwiSXRlbSIsImFycmF5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJwYXJlbnRWbSIsInBhcmVudEVsIiwibWVyZ2VkRGF0YSIsImV4dGVybmFsRXZlbnRzIiwiX3BhcmVudCIsIl9yZWFsUGFyZW50IiwiX2NoaWxkcmVuVm1zIiwiX29wdGlvbnMiLCJfbWV0aG9kcyIsIl9jb21wdXRlZCIsImNvbXB1dGVkIiwiX2NzcyIsIl9pZHMiLCJfdm1FdmVudHMiLCJfdHlwZSIsIiRlbWl0IiwiX2luaXRlZCIsIl9jcmVhdGVkIiwicmVhZHkiLCJfcGFyZW50RWwiLCJpbml0U3RhdGUiLCJpbml0RGF0YSIsImluaXRDb21wdXRlZCIsIl93YXRjaGVycyIsInVzZXJEZWYiLCJtYWtlQ29tcHV0ZWRHZXR0ZXIiLCJnZXR0ZXIiLCJvd25lciIsIndhdGNoZXIiLCJsYXp5IiwiY29tcHV0ZWRHZXR0ZXIiLCJkaXJ0eSIsImV2YWx1YXRlIiwiZGVwZW5kIiwiV2F0Y2hlciIsImV4cE9yRm4iLCJpc0ZuIiwiZXhwcmVzc2lvbiIsImFjdGl2ZSIsImRlcHMiLCJuZXdEZXBzIiwiZGVwSWRzIiwibmV3RGVwSWRzIiwiTk9ERV9FTlYiLCJxdWV1ZWQiLCJzaGFsbG93IiwiZGVlcCIsInRyYXZlcnNlIiwiY2xlYW51cERlcHMiLCJhZGREZXAiLCJkZXAiLCJhZGRTdWIiLCJyZW1vdmVTdWIiLCJ0bXAiLCJ1cGRhdGUiLCJvbGRWYWx1ZSIsInRlYXJkb3duIiwiX2lzQmVpbmdEZXN0cm95ZWQiLCJfdkZvclJlbW92aW5nIiwic2Vlbk9iamVjdHMiLCJzZWVuIiwiaXNBIiwiaXNPIiwiX19vYl9fIiwiZGVwSWQiLCJEZXAiLCJwdXNoVGFyZ2V0IiwicG9wVGFyZ2V0Iiwic3VicyIsInRhcmdldFN0YWNrIiwiX3RhcmdldCIsInBvcCIsInN1YiIsImRlZmluZVJlYWN0aXZlIiwiZGVsIiwicHJveHkiLCJ1bnByb3h5IiwiYXJyYXlLZXlzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImF1Z21lbnQiLCJwcm90b0F1Z21lbnQiLCJjb3B5QXVnbWVudCIsIm9ic2VydmVBcnJheSIsIndhbGsiLCJjb252ZXJ0IiwiaXRlbXMiLCJhZGRWbSIsInZtcyIsInJlbW92ZVZtIiwiX19wcm90b19fIiwib2IiLCJpc0V4dGVuc2libGUiLCJfaXNWdWUiLCJwcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInNldHRlciIsImNoaWxkT2IiLCJyZWFjdGl2ZUdldHRlciIsInJlYWN0aXZlU2V0dGVyIiwibmV3VmFsIiwiJGZvcmNlVXBkYXRlIiwiS0VZX1dPUkRTIiwicHJveHlHZXR0ZXIiLCJwcm94eVNldHRlciIsImFycmF5UHJvdG8iLCJhcnJheU1ldGhvZHMiLCJvcmlnaW5hbCIsIm11dGF0b3IiLCJpbnNlcnRlZCIsIiRzZXQiLCIkcmVtb3ZlIiwib3B0IiwidGVtcGxhdGUiLCJjb21waWxlIiwiX3JlYWR5IiwiZGVzdCIsIm1ldGEiLCJsYXN0U2lnbmFsIiwidGFyZ2V0SXNGcmFnbWVudCIsImNvbXBpbGVGcmFnbWVudCIsInRhcmdldElzQ29udGVudCIsIl9jb250ZW50IiwidGFyZ2V0TmVlZENoZWNrUmVwZWF0IiwiY29tcGlsZVJlcGVhdCIsInRhcmdldE5lZWRDaGVja1Nob3duIiwiY29tcGlsZVNob3duIiwidHlwZUdldHRlciIsInRhcmdldE5lZWRDaGVja1R5cGUiLCJjb21waWxlVHlwZSIsImNvbXBvbmVudCIsInRhcmdldElzQ29tcG9zZWQiLCJjb21waWxlQ3VzdG9tQ29tcG9uZW50IiwiY29tcGlsZU5hdGl2ZUNvbXBvbmVudCIsInJlcGVhdCIsInNob3duIiwiY29tcG9uZW50cyIsImZyYWdCbG9jayIsIm9sZFN0eWxlIiwidHJhY2tCeSIsImJpbmRSZXBlYXQiLCJuZXdNZXRhIiwiYmluZFNob3duIiwiQ3RvciIsInN1YlZtIiwiX2V4dGVybmFsQmluZGluZyIsImNvbXBpbGVDaGlsZHJlbiIsIl9yb290RWwiLCJldmVudHMiLCJhcHBlbmQiLCJ0cmVlTW9kZSIsImV2ZXJ5Iiwia2V5TmFtZSIsInZhbHVlTmFtZSIsImNvbXBpbGVJdGVtIiwiY29udGV4dCIsIm5ld0NvbnRleHQiLCJtZXJnZUNvbnRleHQiLCJ3YXRjaEJsb2NrIiwib2xkQ2hpbGRyZW4iLCJvbGRWbXMiLCJvbGREYXRhIiwidHJhY2tNYXAiLCJyZXVzZWRNYXAiLCJyZXVzZWRMaXN0IiwidXBkYXRlTWFyayIsInJldXNlZCIsImNhbGMiLCJkaWZmZXIiLCJsYXRlc3RWYWx1ZSIsInJlY29yZGVkIiwiYmxvY2tJZCIsImFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyIsImJpbmRFbGVtZW50IiwiYmluZFN1YlZtIiwiYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCIsInNldElkIiwid2F0Y2giLCJuYXRpdmVDb21wb25lbnRNYXAiLCJTRVRURVJTIiwic3Via2V5Iiwic2V0Q2xhc3MiLCJjbGFzc0xpc3QiLCJiaW5kRXZlbnRzIiwicmVwZWF0SXRlbSIsInJlZHVjZSIsIm1lcmdlUHJvcHMiLCJtZXJnZUNsYXNzU3R5bGUiLCJtZXJnZVN0eWxlIiwiY3NzIiwiY2xhc3NOYW1lIiwiYWRkQ2xhc3NOYW1lIiwibmV3SWQiLCJiaW5kRGlyIiwic2V0RXZlbnQiLCJiaW5kS2V5IiwiaW1hZ2UiLCJjb250YWluZXIiLCJzbGlkZXIiLCJjZWxsIiwiY3JlYXRlQmxvY2siLCJhdHRhY2hUYXJnZXQiLCJtb3ZlVGFyZ2V0IiwicmVtb3ZlVGFyZ2V0IiwiY3JlYXRlQmxvY2tTdGFydCIsImVuZCIsImNyZWF0ZUJsb2NrRW5kIiwibGFzdGVzdEJsb2NrSWQiLCJhbmNob3IiLCJzaWduYWwiLCJtb3ZlQmxvY2siLCJncm91cCIsInRlbXAiLCJwcmVzZXJ2ZUJsb2NrIiwicmVtb3ZlQmxvY2siLCIkZGlzcGF0Y2giLCIkYnJvYWRjYXN0IiwiJG9uIiwiJG9mZiIsImluaXRFdmVudHMiLCJtaXhpbkV2ZW50cyIsIkV2dCIsImRldGFpbCIsInNob3VsZFN0b3AiLCJzdG9wIiwiaGFzU3RvcHBlZCIsImhhbmRsZXJMaXN0IiwiZXZ0IiwiTElGRV9DWUNMRV9UWVBFUyIsInR5cGUxIiwidHlwZTIiLCJub3JtYWxpemVWZXJzaW9uIiwiZ2V0RXJyb3IiLCJpc1ZhbGlkIiwiY3JpdGVyaWEiLCJnZXRNc2ciLCJfa2V5IiwiZGV2aWNlSW5mbyIsImN1c3RvbURvd25ncmFkZSIsImRQbGF0Zm9ybSIsImNPYmoiLCJrZXlMb3dlciIsImlzVmVyc2lvbiIsImlzRGV2aWNlTW9kZWwiLCJkIiwiX2NyaXRlcmlhIiwiY29tbW9uTW9kdWxlcyIsImZhY3RvcnkiLCJkZWZpbml0aW9uIiwiZGVzdHJveVZtIiwicmVmcmVzaERhdGEiLCJibG9ja3MiLCJjYWxsYmFja3MiLCJ3YXRjaGVyQ291bnQiLCJ2bUNvdW50Iiwic29tZSIsImNhbGxiYWNrSWQiLCJpZktlZXBBbGl2ZSIsIm5vcm1hbGl6ZSIsImFyZyIsInRvSVNPU3RyaW5nIiwiQXBwIiwiYnVuZGxlVXJsIiwiRGlmZmVyIiwiaG9va3MiLCJoYXNUaW1lciIsImlzVGltZW91dCIsImNhbGxUeXBlTWFwIiwiY2FsbFR5cGVMaXN0IiwiaXNFbXB0eSIsImNmZyIsImpzSGFuZGxlcnMiLCJyZXN1bHRzIiwidmVyc2lvblJlZ0V4cCIsImNoZWNrVmVyc2lvbiIsImZyYW1ld29yayIsImJ1bmRsZVZlcnNpb24iLCJnZW5Jbml0IiwiZ2VuSW5zdGFuY2UiLCJhZGFwdEluc3RhbmNlIiwibmF0aXZlTWV0aG9kTmFtZSIsIiQiLCIkZWwiLCIkdm0iLCIkcmVuZGVyVGhlbiIsIiRzY3JvbGxUbyIsIiR0cmFuc2l0aW9uIiwiJGdldENvbmZpZyIsIiRzZW5kSHR0cCIsIiRvcGVuVVJMIiwiJHNldFRpdGxlIiwiJGNhbGwiLCJvZmZzZXQiLCJkb20iLCJzY3JvbGxUb0VsZW1lbnQiLCJzdHlsZXMiLCJhbmltYXRpb24iLCJ0cmFuc2l0aW9uIiwiX3NldFN0eWxlIiwicGFyYW1zIiwic3RyZWFtIiwic2VuZEh0dHAiLCJvcGVuVVJMIiwicGFnZUluZm8iLCJzZXRUaXRsZSIsIiR1c2VyVHJhY2siLCIkc2VuZE10b3AiLCIkY2FsbFdpbmR2YW5lIiwiJHNldFNwbSIsIiRnZXRVc2VySW5mbyIsIiRsb2dpbiIsIiRsb2dvdXQiLCJjb21OYW1lIiwicGFyYW0iLCJ1c2VyVHJhY2siLCJjb21taXQiLCJ3aW5kdmFuZSIsImNsYXNzIiwic2VuZE10b3AiLCJzZXRTcG0iLCJ1c2VyIiwiZ2V0VXNlckluZm8iLCJsb2dpbiIsImxvZ291dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7O0FBRUE7OztBQUdBLEtBQU1BLFVBQVUsbUJBQUFDLENBQVEsR0FBUixDQUFoQjtlQUMwQkMsTTtLQUFuQkMsZSxXQUFBQSxlOztBQUNQQSxpQkFBZ0JILE9BQWhCLEU7Ozs7Ozs7OztBQ1BBLHdCOzs7Ozs7OztBQ0FBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0tBQVlBLE87Ozs7OztLQUVKSSxNLHVCQUFBQSxNO0tBQVFDLFcsdUJBQUFBLFc7O0FBRWhCOzs0QkFDV0MsVTtBQUNUSixVQUFPSSxVQUFQLElBQXFCLFlBQWE7QUFDaEMsU0FBTUMsTUFBTSxrQkFBUUQsVUFBUixxQ0FBWjtBQUNBLFNBQUlDLGVBQWVDLEtBQW5CLEVBQTBCO0FBQ3hCQyxlQUFRQyxLQUFSLENBQWNILElBQUlJLFFBQUosRUFBZDtBQUNEO0FBQ0QsWUFBT0osR0FBUDtBQUNELElBTkQ7OztBQURGLE1BQUssSUFBTUQsVUFBWCx1QkFBa0M7QUFBQSxTQUF2QkEsVUFBdUI7QUFRakM7O0FBRUQ7QUFDQUosUUFBT1UsZ0JBQVAsR0FBMEJSLE1BQTFCO0FBQ0FGLFFBQU9XLGtCQUFQLEdBQTRCUixXQUE1Qjs7QUFFQTtBQUNBSCxRQUFPQyxlQUFQLENBQXVCSCxPQUF2QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQ2pCRWMsTTs7Ozs7O21CQUNBQyxHOzs7Ozs7bUJBQ0FDLE07Ozs7OzttQkFDQUMsTTs7Ozs7O21CQUNBQyxJOzs7Ozs7bUJBQ0FDLE87Ozs7OzttQkFDQUMsUTs7Ozs7O21C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Q0FBVW5GLGFBQVYsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBMGtCLFFBQUtFLEtBQUwsQ0FBV2htQixRQUFYO0FBQ0Q7O0FBRUQ7Ozs7QUFJTyxVQUFTcWxCLE9BQVQsQ0FBaUJybEIsUUFBakIsRUFBMkI7QUFDaEN4ZixXQUFRa1ksSUFBUixDQUFhLDhDQUNMLDRDQURLLEdBRUwsNEJBRlI7QUFHQSxPQUFNb3RCLE9BQU8sS0FBS3ZmLElBQUwsQ0FBVW5GLGFBQVYsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBMGtCLFFBQUtHLE1BQUwsQ0FBWWptQixRQUFaO0FBQ0QsRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZDQxNmZiNjc5NmE3OTY1OTFjZmVcbiAqKi8iLCJpbXBvcnQgJ3dlZXgtanMtZnJhbWV3b3JrJ1xuXG4vKipcbiAqIHJlZ2lzdGVyIG1ldGhvZHNcbiAqL1xuY29uc3QgbWV0aG9kcyA9IHJlcXVpcmUoJy4vbGliL2FwaS9tZXRob2RzJylcbmNvbnN0IHtyZWdpc3Rlck1ldGhvZHN9ID0gZ2xvYmFsXG5yZWdpc3Rlck1ldGhvZHMobWV0aG9kcylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJy4vc3JjL25hdGl2ZSdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9pbmRleC5qc1xuICoqLyIsImltcG9ydCAnLi4vc2hhcmVkJ1xuaW1wb3J0IHJ1bnRpbWUgZnJvbSAnLi4vcnVudGltZSdcbmltcG9ydCB7IHN1YnZlcnNpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgKiBhcyBtZXRob2RzIGZyb20gJy4uL2RlZmF1bHQvYXBpL21ldGhvZHMnXG5cbmNvbnN0IHsgbmF0aXZlLCB0cmFuc2Zvcm1lciB9ID0gc3VidmVyc2lvblxuXG4vLyByZWdpc3RlciBpbnN0YW5jZSBtYW5hZ2VtZW50IEFQSXNcbmZvciAoY29uc3QgbWV0aG9kTmFtZSBpbiBydW50aW1lKSB7XG4gIGdsb2JhbFttZXRob2ROYW1lXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgcmV0ID0gcnVudGltZVttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgIGlmIChyZXQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihyZXQudG9TdHJpbmcoKSlcbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9XG59XG5cbi8vIHJlZ2lzdGVyIGZyYW1ld29yayBtZXRhIGluZm9cbmdsb2JhbC5mcmFtZXdvcmtWZXJzaW9uID0gbmF0aXZlXG5nbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uID0gdHJhbnNmb3JtZXJcblxuLy8gcmVnaXN0ZXIgc3BlY2lhbCBtZXRob2RzIGZvciBXZWV4IGZyYW1ld29ya1xuZ2xvYmFsLnJlZ2lzdGVyTWV0aG9kcyhtZXRob2RzKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9uYXRpdmUvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJy4vc2V0VGltZW91dCdcbmltcG9ydCAnLi9wcm9taXNlJ1xuaW1wb3J0ICcuL2NvbnNvbGUnXG5pbXBvcnQgJy4vb2JqZWN0QXNzaWduJ1xuXG5leHBvcnQge1xuICBleHRlbmQsXG4gIGRlZixcbiAgcmVtb3ZlLFxuICBoYXNPd24sXG4gIGJpbmQsXG4gIHRvQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0XG59IGZyb20gJy4vdXRpbHMnXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL3NoYXJlZC9pbmRleC5qc1xuICoqLyIsIi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0b1xuICogQHBhcmFtIHtPYmplY3R9IGZyb21cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kICh0YXJnZXQsIC4uLnNyYykge1xuICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc3JjKVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGZpcnN0ID0gc3JjLnNoaWZ0KClcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmaXJzdCkge1xuICAgICAgdGFyZ2V0W2tleV0gPSBmaXJzdFtrZXldXG4gICAgfVxuICAgIGlmIChzcmMubGVuZ3RoKSB7XG4gICAgICBleHRlbmQodGFyZ2V0LCAuLi5zcmMpXG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXRcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBbZW51bWVyYWJsZV1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmIChvYmosIGtleSwgdmFsLCBlbnVtZXJhYmxlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIHZhbHVlOiB2YWwsXG4gICAgZW51bWVyYWJsZTogISFlbnVtZXJhYmxlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBpdGVtIGZyb20gYW4gYXJyYXlcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Kn0gaXRlbVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUgKGFyciwgaXRlbSkge1xuICBpZiAoYXJyLmxlbmd0aCkge1xuICAgIGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSlcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGhhcyB0aGUgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5leHBvcnQgZnVuY3Rpb24gaGFzT3duIChvYmosIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuLyoqXG4gKiBTaW1wbGUgYmluZCwgZmFzdGVyIHRoYW4gbmF0aXZlXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHhcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kIChmbiwgY3R4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgIGNvbnN0IGwgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgcmV0dXJuIGxcbiAgICAgID8gbCA+IDFcbiAgICAgICAgPyBmbi5hcHBseShjdHgsIGFyZ3VtZW50cylcbiAgICAgICAgOiBmbi5jYWxsKGN0eCwgYSlcbiAgICAgIDogZm4uY2FsbChjdHgpXG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIEFycmF5LWxpa2Ugb2JqZWN0IHRvIGEgcmVhbCBBcnJheS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5LWxpa2V9IGxpc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnRdIC0gc3RhcnQgaW5kZXhcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5IChsaXN0LCBzdGFydCkge1xuICBzdGFydCA9IHN0YXJ0IHx8IDBcbiAgbGV0IGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0XG4gIGNvbnN0IHJldCA9IG5ldyBBcnJheShpKVxuICB3aGlsZSAoaS0tKSB7XG4gICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuLyoqXG4gKiBTdHJpY3Qgb2JqZWN0IHR5cGUgY2hlY2suIE9ubHkgcmV0dXJucyB0cnVlXG4gKiBmb3IgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuY29uc3QgT0JKRUNUX1NUUklORyA9ICdbb2JqZWN0IE9iamVjdF0nXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09IE9CSkVDVF9TVFJJTkdcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL3V0aWxzLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBQb2x5ZmlsbCBgc2V0VGltZW91dGAgb24gQW5kcm9pZCBWOCB1c2luZyBuYXRpdmUgbWV0aG9kXG4gKiBgc2V0VGltZW91dE5hdGl2ZShjYWxsYmFja0lkLCB0aW1lKWAgYW5kIEpTIG1ldGhvZFxuICogYHNldFRpbWVvdXRDYWxsYmFjayhjYWxsYmFja0lkKWAuXG4gKiBUaGlzIHBvbHlmaWxsIGlzIG9ubHkgdXNlZCBpbiB2aXJ0dWFsLURPTSBkaWZmICYgZmx1c2ggYWdvcml0aG0uIE5vdFxuICogYWNjZXNzZWQgYnkgSlMgQnVuZGxlIGNvZGUgKFRoZSB0aW1lciBBUElzIHBvbHlmaWxsIGZvciBKUyBCdW5kbGUgaXMgaW5cbiAqIGBodG1sNS9kZWZhdWx0L2FwcC9jdHJsLmpzYCkuXG4gKi9cblxuY29uc3Qge1xuICBzZXRUaW1lb3V0LFxuICBzZXRUaW1lb3V0TmF0aXZlXG59ID0gZ2xvYmFsXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2Ygc2V0VGltZW91dE5hdGl2ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICBjb25zdCB0aW1lb3V0TWFwID0ge31cbiAgbGV0IHRpbWVvdXRJZCA9IDBcblxuICBnbG9iYWwuc2V0VGltZW91dCA9IChjYiwgdGltZSkgPT4ge1xuICAgIHRpbWVvdXRNYXBbKyt0aW1lb3V0SWRdID0gY2JcbiAgICBzZXRUaW1lb3V0TmF0aXZlKHRpbWVvdXRJZC50b1N0cmluZygpLCB0aW1lKVxuICB9XG5cbiAgZ2xvYmFsLnNldFRpbWVvdXRDYWxsYmFjayA9IChpZCkgPT4ge1xuICAgIGlmICh0eXBlb2YgdGltZW91dE1hcFtpZF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRpbWVvdXRNYXBbaWRdKClcbiAgICAgIGRlbGV0ZSB0aW1lb3V0TWFwW2lkXVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9zaGFyZWQvc2V0VGltZW91dC5qc1xuICoqLyIsIi8vIGZpeCBQcm9taXNlIFByb2JsZW0gb24gSlNDb250ZXh0IG9mIGlPUzd+OFxuLy8gQHNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM1ODY2XG5jb25zdCB7IFdYRW52aXJvbm1lbnQgfSA9IGdsb2JhbFxuaWYgKFdYRW52aXJvbm1lbnQgJiYgV1hFbnZpcm9ubWVudC5wbGF0Zm9ybSA9PT0gJ2lPUycpIHtcbiAgZ2xvYmFsLlByb21pc2UgPSBudWxsXG59XG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKVxucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKVxucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKVxucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlJylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL3Byb21pc2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgdGVzdCAgICA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZih0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKXtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzXG4gKiovIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanNcbiAqKi8iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fY29mLmpzXG4gKiovIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL193a3MuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzXG4gKiovIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL191aWQuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFNSQyAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKVxuICAsIFRPX1NUUklORyA9ICd0b1N0cmluZydcbiAgLCAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddXG4gICwgVFBMICAgICAgID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIGtleSwgdmFsLCBzYWZlKXtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZihPW2tleV0gPT09IHZhbClyZXR1cm47XG4gIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmKE8gPT09IGdsb2JhbCl7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGlmKCFzYWZlKXtcbiAgICAgIGRlbGV0ZSBPW2tleV07XG4gICAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoT1trZXldKU9ba2V5XSA9IHZhbDtcbiAgICAgIGVsc2UgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfVxuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzXG4gKiovIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faGlkZS5qc1xuICoqLyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanNcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuICoqLyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuICoqLyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuICoqLyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faGFzLmpzXG4gKiovIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fY29yZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qc1xuICoqLyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanNcbiAqKi8iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qc1xuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIHJlZGVmaW5lICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KVxuICAgICwga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmKHRhcmdldClyZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZihleHBvcnRzW2tleV0gIT0gb3V0KWhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KWV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzXG4gKiovIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2N0eC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4gKiovIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4gKiovIiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanNcbiAqKi8iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4gKiovIiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbiAqKi8iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qc1xuICoqLyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4gKiovIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanNcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanNcbiAqKi8iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbiAqKi8iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanNcbiAqKi8iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuICoqLyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4gKiovIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4gKiovIiwidmFyICRpdGVyYXRvcnMgICAgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpXG4gICwgcmVkZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgd2tzICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgSVRFUkFUT1IgICAgICA9IHdrcygnaXRlcmF0b3InKVxuICAsIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJylcbiAgLCBBcnJheVZhbHVlcyAgID0gSXRlcmF0b3JzLkFycmF5O1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGVcbiAgICAsIGtleTtcbiAgaWYocHJvdG8pe1xuICAgIGlmKCFwcm90b1tJVEVSQVRPUl0paGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZighcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgZm9yKGtleSBpbiAkaXRlcmF0b3JzKWlmKCFwcm90b1trZXldKXJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuICoqLyIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpXG4gICwgQXJyYXlQcm90byAgPSBBcnJheS5wcm90b3R5cGU7XG5pZihBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbiAqKi8iLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qc1xuICoqLyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4gKiovIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbiAqKi8iLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4gKiovIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbiAqKi8iLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2h0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190YXNrLmpzXG4gKiovIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanNcbiAqKi8iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYylyZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4gKiovIiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBUaGlzIGZpbGUgd2lsbCBoYWNrIGBjb25zb2xlYCBtZXRob2RzIGJ5IGBXWEVudmlyb25tZW50LmxvZ0xldmVsYC5cbiAqIFNvIHdlIGNhbiBjb250cm9sIGhvdyBtYW55IGFuZCB3aGljaCBtZXNzYWdlcyB3aWxsIGJlIHNlbnQgYnkgY2hhbmdlIHRoZSBsb2cgbGV2ZWwuXG4gKiBBZGRpdGlvbmFsbHkgaW4gbmF0aXZlIHBsYXRmb3JtIHRoZSBtZXNzYWdlIGNvbnRlbnQgbXVzdCBiZSBwcmltaXRpdmUgdmFsdWVzIGFuZFxuICogdXNpbmcgYG5hdGl2ZUxvZyguLi5hcmdzLCBsb2dMZXZlbE1hcmspYCBzbyB3ZSBjcmVhdGUgYSBuZXcgYGNvbnNvbGVgIG9iamVjdCBpblxuICogZ2xvYmFsIGFkZCBhIGZvcm1hdCBwcm9jZXNzIGZvciBpdHMgbWV0aG9kcy5cbiAqL1xuXG5jb25zdCB7IGNvbnNvbGUsIG5hdGl2ZUxvZyB9ID0gZ2xvYmFsXG5jb25zdCBMRVZFTFMgPSBbJ29mZicsICdlcnJvcicsICd3YXJuJywgJ2luZm8nLCAnbG9nJywgJ2RlYnVnJ11cbmNvbnN0IGxldmVsTWFwID0ge31cblxuZ2VuZXJhdGVMZXZlbE1hcCgpXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKFxuICB0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcgfHwgLy8gQW5kcm9pZFxuICAoZ2xvYmFsLldYRW52aXJvbm1lbnQgJiYgZ2xvYmFsLldYRW52aXJvbm1lbnQucGxhdGZvcm0gPT09ICdpT1MnKSAvLyBpT1Ncbikge1xuICBnbG9iYWwuY29uc29sZSA9IHtcbiAgICBkZWJ1ZzogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdkZWJ1ZycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0RFQlVHJykgfVxuICAgIH0sXG4gICAgbG9nOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ2xvZycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0xPRycpIH1cbiAgICB9LFxuICAgIGluZm86ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnaW5mbycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0lORk8nKSB9XG4gICAgfSxcbiAgICB3YXJuOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ3dhcm4nKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19XQVJOJykgfVxuICAgIH0sXG4gICAgZXJyb3I6ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnZXJyb3InKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19FUlJPUicpIH1cbiAgICB9XG4gIH1cbn1cbmVsc2UgeyAvLyBIVE1MNVxuICBjb25zdCB7IGRlYnVnLCBsb2csIGluZm8sIHdhcm4sIGVycm9yIH0gPSBjb25zb2xlXG4gIGNvbnNvbGUuX19vcmlfXyA9IHsgZGVidWcsIGxvZywgaW5mbywgd2FybiwgZXJyb3IgfVxuICBjb25zb2xlLmRlYnVnID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnZGVidWcnKSkgeyBjb25zb2xlLl9fb3JpX18uZGVidWcuYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUubG9nID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnbG9nJykpIHsgY29uc29sZS5fX29yaV9fLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbiAgY29uc29sZS5pbmZvID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnaW5mbycpKSB7IGNvbnNvbGUuX19vcmlfXy5pbmZvLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxuICBjb25zb2xlLndhcm4gPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCd3YXJuJykpIHsgY29uc29sZS5fX29yaV9fLndhcm4uYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUuZXJyb3IgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdlcnJvcicpKSB7IGNvbnNvbGUuX19vcmlfXy5lcnJvci5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBtYXAgZm9yIHdoaWNoIHR5cGVzIG9mIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IGluIGEgY2VydGFpbiBtZXNzYWdlIGxldmVsXG4gKiBhcyB0aGUgb3JkZXIgb2YgTEVWRUxTLlxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZUxldmVsTWFwICgpIHtcbiAgTEVWRUxTLmZvckVhY2gobGV2ZWwgPT4ge1xuICAgIGNvbnN0IGxldmVsSW5kZXggPSBMRVZFTFMuaW5kZXhPZihsZXZlbClcbiAgICBsZXZlbE1hcFtsZXZlbF0gPSB7fVxuICAgIExFVkVMUy5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICAgY29uc3QgdHlwZUluZGV4ID0gTEVWRUxTLmluZGV4T2YodHlwZSlcbiAgICAgIGlmICh0eXBlSW5kZXggPD0gbGV2ZWxJbmRleCkge1xuICAgICAgICBsZXZlbE1hcFtsZXZlbF1bdHlwZV0gPSB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGNlcnRhaW4gdHlwZSBvZiBtZXNzYWdlIHdpbGwgYmUgc2VudCBpbiBjdXJyZW50IGxvZyBsZXZlbCBvZiBlbnYuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNoZWNrTGV2ZWwgKHR5cGUpIHtcbiAgY29uc3QgbG9nTGV2ZWwgPSAoZ2xvYmFsLldYRW52aXJvbm1lbnQgJiYgZ2xvYmFsLldYRW52aXJvbm1lbnQubG9nTGV2ZWwpIHx8ICdsb2cnXG4gIHJldHVybiBsZXZlbE1hcFtsb2dMZXZlbF0gJiYgbGV2ZWxNYXBbbG9nTGV2ZWxdW3R5cGVdXG59XG5cbi8qKlxuICogQ29udmVydCBhbGwgbG9nIGFyZ3VtZW50cyBpbnRvIHByaW1pdGl2ZSB2YWx1ZXMuXG4gKiBAcGFyYW0gIHthcnJheX0gYXJnc1xuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGZvcm1hdCAoYXJncykge1xuICByZXR1cm4gYXJncy5tYXAoKHYpID0+IHtcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXG4gICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ1tvYmplY3Qgb2JqZWN0XScpIHtcbiAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHYgPSBTdHJpbmcodilcbiAgICB9XG4gICAgcmV0dXJuIHZcbiAgfSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL2NvbnNvbGUuanNcbiAqKi8iLCJpbXBvcnQgJ2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbidcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL29iamVjdEFzc2lnbi5qc1xuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9mbi9vYmplY3QvYXNzaWduLmpzXG4gKiovIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbiAqKi8iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbiAqKi8iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFJlZ2lzdGVyIGZyYW1ld29yayhzKSBpbiBKUyBydW50aW1lLiBXZWV4IHN1cHBseSB0d28gbGF5ZXJzIGZvciAzcmQtcGFydHlcbiAqIGZyYW1ld29yayhzKTogb25lIGlzIHRoZSBpbnN0YW5jZSBtYW5hZ2VtZW50IGxheWVyLCBhbm90aGVyIGlzIHRoZVxuICogdmlydHVhbC1ET00gbGF5ZXIuXG4gKi9cblxuLy8gVGhpcyBjb25maWcgaXMgZ2VuZXJhdGVkIGJ5IGBucG0gcnVuIGJ1aWxkOmNvbmZpZ2AuXG4vLyBJdCB3aWxsIGNvbGxlY3QgYWxsIGBydW50aW1lL2ZyYW1ld29yay0qLmpzYCBmaWxlcyBhbmQgaW1wb3J0IGVhY2ggb2YgdGhlbS5cbi8vIFRoZSBmaWxlbmFtZSBpcyBhbHNvIHRoZSBmcmFtZXdvcmsgbmFtZS5cbmltcG9ydCB7IERvY3VtZW50LCBFbGVtZW50LCBDb21tZW50IH0gZnJvbSAnLi4vdmRvbSdcbmltcG9ydCBMaXN0ZW5lciBmcm9tICcuLi92ZG9tL2xpc3RlbmVyJ1xuaW1wb3J0IGZyYW1ld29ya3MgZnJvbSAnLi9jb25maWcnXG5cbmltcG9ydCBpbml0IGZyb20gJy4vaW5pdCdcblxuY29uc3QgY29uZmlnID0ge1xuICBEb2N1bWVudCwgRWxlbWVudCwgQ29tbWVudCwgTGlzdGVuZXIsIGZyYW1ld29ya3MsXG4gIHNlbmRUYXNrcyAoLi4uYXJncykge1xuICAgIHJldHVybiBnbG9iYWwuY2FsbE5hdGl2ZSguLi5hcmdzKVxuICB9XG59XG5cbmNvbnN0IG1ldGhvZHMgPSBpbml0KGNvbmZpZylcblxuZXhwb3J0IGRlZmF1bHQgbWV0aG9kc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9ydW50aW1lL2luZGV4LmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBBIHNpbXBsZSB2aXJ0dWFsIGRvbSBpbXBsZW1lbnRhdGlvblxuICovXG4vLyBpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi9zaGFyZWQnXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMnXG5cbmNvbnN0IERFRkFVTFRfVEFHX05BTUUgPSAnZGl2J1xuXG5leHBvcnQgY29uc3QgaW5zdGFuY2VNYXAgPSB7fVxubGV0IG5leHROb2RlUmVmID0gMVxuXG5leHBvcnQgZnVuY3Rpb24gRG9jdW1lbnQgKGlkLCB1cmwsIGhhbmRsZXIsIExpc3RlbmVyKSB7XG4gIGlkID0gaWQgPyBpZC50b1N0cmluZygpIDogJydcbiAgdGhpcy5pZCA9IGlkXG4gIHRoaXMuVVJMID0gdXJsXG5cbiAgaW5zdGFuY2VNYXBbaWRdID0gdGhpc1xuICB0aGlzLm5vZGVNYXAgPSB7fVxuICBMaXN0ZW5lciAmJiAodGhpcy5saXN0ZW5lciA9IG5ldyBMaXN0ZW5lcihpZCwgaGFuZGxlciB8fCBnZW5DYWxsVGFza3MoaWQpKSlcbiAgdGhpcy5jcmVhdGVEb2N1bWVudEVsZW1lbnQoKVxufVxuXG5mdW5jdGlvbiBnZW5DYWxsVGFza3MgKGlkKSB7XG4gIHJldHVybiAodGFza3MpID0+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGFza3MpKSB7XG4gICAgICB0YXNrcyA9IFt0YXNrc11cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFzayA9IHRhc2tzW2ldXG4gICAgICBsZXQgcmV0dXJuVmFsdWVcbiAgICAgIGlmICh0YXNrLm1vZHVsZSA9PT0gJ2RvbScgJiYgdGFzay5tZXRob2QgPT09ICdhZGRFbGVtZW50Jykge1xuICAgICAgICBjb25zdCBbcmVmLCBqc29uLCBpbmRleF0gPSB0YXNrLmFyZ3NcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxsQWRkRWxlbWVudChpZCwgcmVmLCBqc29uLCBpbmRleCwgJy0xJylcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm5WYWx1ZSA9IGNhbGxOYXRpdmUoaWQsIFt0YXNrXSwgJy0xJylcbiAgICAgIH1cbiAgICAgIGlmIChyZXR1cm5WYWx1ZSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICBkZWxldGUgdGhpcy5saXN0ZW5lclxuICBkZWxldGUgdGhpcy5ub2RlTWFwXG4gIGRlbGV0ZSBpbnN0YW5jZU1hcFt0aGlzLmlkXVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5saXN0ZW5lci5iYXRjaGVkID0gZmFsc2Vcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmxpc3RlbmVyLmJhdGNoZWQgPSB0cnVlXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVEb2N1bWVudEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBlbCA9IG5ldyBFbGVtZW50KCdkb2N1bWVudCcpXG4gICAgZWwuZG9jSWQgPSB0aGlzLmlkXG4gICAgZWwub3duZXJEb2N1bWVudCA9IHRoaXNcbiAgICBlbC5yb2xlID0gJ2RvY3VtZW50RWxlbWVudCdcbiAgICBlbC5kZXB0aCA9IDBcbiAgICBlbC5yZWYgPSAnX2RvY3VtZW50RWxlbWVudCdcbiAgICB0aGlzLm5vZGVNYXAuX2RvY3VtZW50RWxlbWVudCA9IGVsXG4gICAgdGhpcy5kb2N1bWVudEVsZW1lbnQgPSBlbFxuICAgIGVsLmFwcGVuZENoaWxkID0gKG5vZGUpID0+IHtcbiAgICAgIGFwcGVuZEJvZHkodGhpcywgbm9kZSlcbiAgICB9XG4gICAgZWwuaW5zZXJ0QmVmb3JlID0gKG5vZGUsIGJlZm9yZSkgPT4ge1xuICAgICAgYXBwZW5kQm9keSh0aGlzLCBub2RlLCBiZWZvcmUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuZG9jdW1lbnRFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEJvZHkgKGRvYywgbm9kZSwgYmVmb3JlKSB7XG4gIGNvbnN0IHsgZG9jdW1lbnRFbGVtZW50IH0gPSBkb2NcblxuICBpZiAoZG9jdW1lbnRFbGVtZW50LnB1cmVDaGlsZHJlbi5sZW5ndGggPiAwIHx8IG5vZGUucGFyZW50Tm9kZSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGNoaWxkcmVuID0gZG9jdW1lbnRFbGVtZW50LmNoaWxkcmVuXG4gIGNvbnN0IGJlZm9yZUluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZihiZWZvcmUpXG4gIGlmIChiZWZvcmVJbmRleCA8IDApIHtcbiAgICBjaGlsZHJlbi5wdXNoKG5vZGUpXG4gIH1cbiAgZWxzZSB7XG4gICAgY2hpbGRyZW4uc3BsaWNlKGJlZm9yZUluZGV4LCAwLCBub2RlKVxuICB9XG5cbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICBpZiAobm9kZS5yb2xlID09PSAnYm9keScpIHtcbiAgICAgIG5vZGUuZG9jSWQgPSBkb2MuaWRcbiAgICAgIG5vZGUub3duZXJEb2N1bWVudCA9IGRvY1xuICAgICAgbm9kZS5wYXJlbnROb2RlID0gZG9jdW1lbnRFbGVtZW50XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IG5vZGVcbiAgICAgIH0pXG4gICAgICBzZXRCb2R5KGRvYywgbm9kZSlcbiAgICAgIG5vZGUuZG9jSWQgPSBkb2MuaWRcbiAgICAgIG5vZGUub3duZXJEb2N1bWVudCA9IGRvY1xuICAgICAgbGlua1BhcmVudChub2RlLCBkb2N1bWVudEVsZW1lbnQpXG4gICAgICBkZWxldGUgZG9jLm5vZGVNYXBbbm9kZS5ub2RlSWRdXG4gICAgfVxuICAgIGRvY3VtZW50RWxlbWVudC5wdXJlQ2hpbGRyZW4ucHVzaChub2RlKVxuICAgIGRvYy5saXN0ZW5lci5jcmVhdGVCb2R5KG5vZGUpXG4gIH1cbiAgZWxzZSB7XG4gICAgbm9kZS5wYXJlbnROb2RlID0gZG9jdW1lbnRFbGVtZW50XG4gICAgZG9jLm5vZGVNYXBbbm9kZS5yZWZdID0gbm9kZVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEJvZHkgKGRvYywgZWwpIHtcbiAgZWwucm9sZSA9ICdib2R5J1xuICBlbC5kZXB0aCA9IDFcbiAgZGVsZXRlIGRvYy5ub2RlTWFwW2VsLm5vZGVJZF1cbiAgZWwucmVmID0gJ19yb290J1xuICBkb2Mubm9kZU1hcC5fcm9vdCA9IGVsXG4gIGRvYy5ib2R5ID0gZWxcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUJvZHkgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMpIHtcbiAgaWYgKCF0aGlzLmJvZHkpIHtcbiAgICBjb25zdCBlbCA9IG5ldyBFbGVtZW50KHR5cGUsIHByb3BzKVxuICAgIHNldEJvZHkodGhpcywgZWwpXG4gIH1cblxuICByZXR1cm4gdGhpcy5ib2R5XG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZ05hbWUsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgRWxlbWVudCh0YWdOYW1lLCBwcm9wcylcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUNvbW1lbnQgPSBmdW5jdGlvbiAodGV4dCkge1xuICByZXR1cm4gbmV3IENvbW1lbnQodGV4dClcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmZpcmVFdmVudCA9IGZ1bmN0aW9uIChlbCwgdHlwZSwgZSwgZG9tQ2hhbmdlcykge1xuICBpZiAoIWVsKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZSA9IGUgfHwge31cbiAgZS50eXBlID0gdHlwZVxuICBlLnRhcmdldCA9IGVsXG4gIGUudGltZXN0YW1wID0gRGF0ZS5ub3coKVxuICBpZiAoZG9tQ2hhbmdlcykge1xuICAgIHVwZGF0ZUVsZW1lbnQoZWwsIGRvbUNoYW5nZXMpXG4gIH1cbiAgcmV0dXJuIGVsLmZpcmVFdmVudCh0eXBlLCBlKVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuZ2V0UmVmID0gZnVuY3Rpb24gKHJlZikge1xuICByZXR1cm4gdGhpcy5ub2RlTWFwW3JlZl1cbn1cblxuZnVuY3Rpb24gdXBkYXRlRWxlbWVudCAoZWwsIGNoYW5nZXMpIHtcbiAgY29uc3QgYXR0cnMgPSBjaGFuZ2VzLmF0dHJzIHx8IHt9XG4gIGZvciAoY29uc3QgbmFtZSBpbiBhdHRycykge1xuICAgIGVsLnNldEF0dHIobmFtZSwgYXR0cnNbbmFtZV0sIHRydWUpXG4gIH1cbiAgY29uc3Qgc3R5bGUgPSBjaGFuZ2VzLnN0eWxlIHx8IHt9XG4gIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZSkge1xuICAgIGVsLnNldFN0eWxlKG5hbWUsIHN0eWxlW25hbWVdLCB0cnVlKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOb2RlICgpIHtcbiAgdGhpcy5ub2RlSWQgPSAobmV4dE5vZGVSZWYrKykudG9TdHJpbmcoKVxuICB0aGlzLnJlZiA9IHRoaXMubm9kZUlkXG4gIHRoaXMuY2hpbGRyZW4gPSBbXVxuICB0aGlzLnB1cmVDaGlsZHJlbiA9IFtdXG4gIHRoaXMucGFyZW50Tm9kZSA9IG51bGxcbiAgdGhpcy5uZXh0U2libGluZyA9IG51bGxcbiAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsXG59XG5cbk5vZGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRvYyA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdXG4gIGlmIChkb2MpIHtcbiAgICBkZWxldGUgdGhpcy5kb2NJZFxuICAgIGRlbGV0ZSBkb2Mubm9kZU1hcFt0aGlzLm5vZGVJZF1cbiAgfVxuICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgIGNoaWxkLmRlc3Ryb3koKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRWxlbWVudCAodHlwZSA9IERFRkFVTFRfVEFHX05BTUUsIHByb3BzKSB7XG4gIHByb3BzID0gcHJvcHMgfHwge31cbiAgdGhpcy5ub2RlVHlwZSA9IDFcbiAgdGhpcy5ub2RlSWQgPSAobmV4dE5vZGVSZWYrKykudG9TdHJpbmcoKVxuICB0aGlzLnJlZiA9IHRoaXMubm9kZUlkXG4gIHRoaXMudHlwZSA9IHR5cGVcbiAgdGhpcy5hdHRyID0gcHJvcHMuYXR0ciB8fCB7fVxuICB0aGlzLmNsYXNzU3R5bGUgPSBwcm9wcy5jbGFzc1N0eWxlIHx8IHt9XG4gIHRoaXMuc3R5bGUgPSBwcm9wcy5zdHlsZSB8fCB7fVxuICB0aGlzLmV2ZW50ID0ge31cbiAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gIHRoaXMucHVyZUNoaWxkcmVuID0gW11cbn1cblxuRWxlbWVudC5wcm90b3R5cGUgPSBuZXcgTm9kZSgpXG5cbkVsZW1lbnQucHJvdG90eXBlLmFwcGVuZENoaWxkID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUgIT09IHRoaXMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgIGxpbmtQYXJlbnQobm9kZSwgdGhpcylcbiAgICBpbnNlcnRJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmxlbmd0aCwgdHJ1ZSlcbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgcmVnaXN0ZXJOb2RlKHRoaXMuZG9jSWQsIG5vZGUpXG4gICAgfVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBpbnNlcnRJbmRleChub2RlLCB0aGlzLnB1cmVDaGlsZHJlbiwgdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIuYWRkRWxlbWVudChub2RlLCB0aGlzLnJlZiwgLTEpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIG1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmxlbmd0aCwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBtb3ZlSW5kZXgobm9kZSwgdGhpcy5wdXJlQ2hpbGRyZW4sIHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aClcbiAgICAgIGlmICh0aGlzLmRvY0lkICYmIGluZGV4ID49IDApIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIubW92ZUVsZW1lbnQobm9kZS5yZWYsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlID0gZnVuY3Rpb24gKG5vZGUsIGJlZm9yZSkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZSAhPT0gdGhpcykge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChub2RlID09PSBiZWZvcmUgfHwgbm9kZS5uZXh0U2libGluZyA9PT0gYmVmb3JlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICBsaW5rUGFyZW50KG5vZGUsIHRoaXMpXG4gICAgaW5zZXJ0SW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5pbmRleE9mKGJlZm9yZSksIHRydWUpXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIHJlZ2lzdGVyTm9kZSh0aGlzLmRvY0lkLCBub2RlKVxuICAgIH1cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgcHVyZUJlZm9yZSA9IG5leHRFbGVtZW50KGJlZm9yZSlcbiAgICAgIGNvbnN0IGluZGV4ID0gaW5zZXJ0SW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICBwdXJlQmVmb3JlXG4gICAgICAgICAgPyB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHB1cmVCZWZvcmUpXG4gICAgICAgICAgOiB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGhcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmFkZEVsZW1lbnQobm9kZSwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBtb3ZlSW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5pbmRleE9mKGJlZm9yZSksIHRydWUpXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IHB1cmVCZWZvcmUgPSBuZXh0RWxlbWVudChiZWZvcmUpXG4gICAgICBjb25zdCBpbmRleCA9IG1vdmVJbmRleChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4sXG4gICAgICAgIHB1cmVCZWZvcmVcbiAgICAgICAgICA/IHRoaXMucHVyZUNoaWxkcmVuLmluZGV4T2YocHVyZUJlZm9yZSlcbiAgICAgICAgICA6IHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aFxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5tb3ZlRWxlbWVudChub2RlLnJlZiwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZnRlciA9IGZ1bmN0aW9uIChub2RlLCBhZnRlcikge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZSAhPT0gdGhpcykge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChub2RlID09PSBhZnRlciB8fCBub2RlLnByZXZpb3VzU2libGluZyA9PT0gYWZ0ZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgIGxpbmtQYXJlbnQobm9kZSwgdGhpcylcbiAgICBpbnNlcnRJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYWZ0ZXIpICsgMSwgdHJ1ZSlcbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgcmVnaXN0ZXJOb2RlKHRoaXMuZG9jSWQsIG5vZGUpXG4gICAgfVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGluc2VydEluZGV4KFxuICAgICAgICBub2RlLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4uaW5kZXhPZihwcmV2aW91c0VsZW1lbnQoYWZ0ZXIpKSArIDFcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmFkZEVsZW1lbnQobm9kZSwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBtb3ZlSW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5pbmRleE9mKGFmdGVyKSArIDEsIHRydWUpXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gbW92ZUluZGV4KFxuICAgICAgICBub2RlLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4uaW5kZXhPZihwcmV2aW91c0VsZW1lbnQoYWZ0ZXIpKSArIDFcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLmRvY0lkICYmIGluZGV4ID49IDApIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIubW92ZUVsZW1lbnQobm9kZS5yZWYsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQ2hpbGQgPSBmdW5jdGlvbiAobm9kZSwgcHJlc2VydmVkKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICByZW1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0cnVlKVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICByZW1vdmVJbmRleChub2RlLCB0aGlzLnB1cmVDaGlsZHJlbilcbiAgICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgbGlzdGVuZXIucmVtb3ZlRWxlbWVudChub2RlLnJlZilcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCFwcmVzZXJ2ZWQpIHtcbiAgICBub2RlLmRlc3Ryb3koKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5kb2NJZCkge1xuICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICB0aGlzLnB1cmVDaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgbGlzdGVuZXIucmVtb3ZlRWxlbWVudChub2RlLnJlZilcbiAgICB9KVxuICB9XG4gIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChub2RlID0+IHtcbiAgICBub2RlLmRlc3Ryb3koKVxuICB9KVxuICB0aGlzLmNoaWxkcmVuLmxlbmd0aCA9IDBcbiAgdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoID0gMFxufVxuXG5mdW5jdGlvbiBuZXh0RWxlbWVudCAobm9kZSkge1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICByZXR1cm4gbm9kZVxuICAgIH1cbiAgICBub2RlID0gbm9kZS5uZXh0U2libGluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHByZXZpb3VzRWxlbWVudCAobm9kZSkge1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICByZXR1cm4gbm9kZVxuICAgIH1cbiAgICBub2RlID0gbm9kZS5wcmV2aW91c1NpYmxpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBsaW5rUGFyZW50IChub2RlLCBwYXJlbnQpIHtcbiAgbm9kZS5wYXJlbnROb2RlID0gcGFyZW50XG4gIGlmIChwYXJlbnQuZG9jSWQpIHtcbiAgICBub2RlLmRvY0lkID0gcGFyZW50LmRvY0lkXG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gcGFyZW50Lm93bmVyRG9jdW1lbnRcbiAgICBub2RlLm93bmVyRG9jdW1lbnQubm9kZU1hcFtub2RlLm5vZGVJZF0gPSBub2RlXG4gICAgbm9kZS5kZXB0aCA9IHBhcmVudC5kZXB0aCArIDFcbiAgfVxuICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgIGxpbmtQYXJlbnQoY2hpbGQsIG5vZGUpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTm9kZSAoZG9jSWQsIG5vZGUpIHtcbiAgY29uc3QgZG9jID0gaW5zdGFuY2VNYXBbZG9jSWRdXG4gIGRvYy5ub2RlTWFwW25vZGUubm9kZUlkXSA9IG5vZGVcbn1cblxuZnVuY3Rpb24gaW5zZXJ0SW5kZXggKHRhcmdldCwgbGlzdCwgbmV3SW5kZXgsIGNoYW5nZVNpYmxpbmcpIHtcbiAgaWYgKG5ld0luZGV4IDwgMCkge1xuICAgIG5ld0luZGV4ID0gMFxuICB9XG4gIGNvbnN0IGJlZm9yZSA9IGxpc3RbbmV3SW5kZXggLSAxXVxuICBjb25zdCBhZnRlciA9IGxpc3RbbmV3SW5kZXhdXG4gIGxpc3Quc3BsaWNlKG5ld0luZGV4LCAwLCB0YXJnZXQpXG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgYmVmb3JlICYmIChiZWZvcmUubmV4dFNpYmxpbmcgPSB0YXJnZXQpXG4gICAgdGFyZ2V0LnByZXZpb3VzU2libGluZyA9IGJlZm9yZVxuICAgIHRhcmdldC5uZXh0U2libGluZyA9IGFmdGVyXG4gICAgYWZ0ZXIgJiYgKGFmdGVyLnByZXZpb3VzU2libGluZyA9IHRhcmdldClcbiAgfVxuICByZXR1cm4gbmV3SW5kZXhcbn1cblxuZnVuY3Rpb24gbW92ZUluZGV4ICh0YXJnZXQsIGxpc3QsIG5ld0luZGV4LCBjaGFuZ2VTaWJsaW5nKSB7XG4gIGNvbnN0IGluZGV4ID0gbGlzdC5pbmRleE9mKHRhcmdldClcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgY29uc3QgYmVmb3JlID0gbGlzdFtpbmRleCAtIDFdXG4gICAgY29uc3QgYWZ0ZXIgPSBsaXN0W2luZGV4ICsgMV1cbiAgICBiZWZvcmUgJiYgKGJlZm9yZS5uZXh0U2libGluZyA9IGFmdGVyKVxuICAgIGFmdGVyICYmIChhZnRlci5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmUpXG4gIH1cbiAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gIGxldCBuZXdJbmRleEFmdGVyID0gbmV3SW5kZXhcbiAgaWYgKGluZGV4IDw9IG5ld0luZGV4KSB7XG4gICAgbmV3SW5kZXhBZnRlciA9IG5ld0luZGV4IC0gMVxuICB9XG4gIGNvbnN0IGJlZm9yZU5ldyA9IGxpc3RbbmV3SW5kZXhBZnRlciAtIDFdXG4gIGNvbnN0IGFmdGVyTmV3ID0gbGlzdFtuZXdJbmRleEFmdGVyXVxuICBsaXN0LnNwbGljZShuZXdJbmRleEFmdGVyLCAwLCB0YXJnZXQpXG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgYmVmb3JlTmV3ICYmIChiZWZvcmVOZXcubmV4dFNpYmxpbmcgPSB0YXJnZXQpXG4gICAgdGFyZ2V0LnByZXZpb3VzU2libGluZyA9IGJlZm9yZU5ld1xuICAgIHRhcmdldC5uZXh0U2libGluZyA9IGFmdGVyTmV3XG4gICAgYWZ0ZXJOZXcgJiYgKGFmdGVyTmV3LnByZXZpb3VzU2libGluZyA9IHRhcmdldClcbiAgfVxuICBpZiAoaW5kZXggPT09IG5ld0luZGV4QWZ0ZXIpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gbmV3SW5kZXhcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSW5kZXggKHRhcmdldCwgbGlzdCwgY2hhbmdlU2libGluZykge1xuICBjb25zdCBpbmRleCA9IGxpc3QuaW5kZXhPZih0YXJnZXQpXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoY2hhbmdlU2libGluZykge1xuICAgIGNvbnN0IGJlZm9yZSA9IGxpc3RbaW5kZXggLSAxXVxuICAgIGNvbnN0IGFmdGVyID0gbGlzdFtpbmRleCArIDFdXG4gICAgYmVmb3JlICYmIChiZWZvcmUubmV4dFNpYmxpbmcgPSBhZnRlcilcbiAgICBhZnRlciAmJiAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlKVxuICB9XG4gIGxpc3Quc3BsaWNlKGluZGV4LCAxKVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIHNpbGVudCkge1xuICBpZiAodGhpcy5hdHRyW2tleV0gPT09IHZhbHVlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdGhpcy5hdHRyW2tleV0gPSB2YWx1ZVxuICBpZiAoIXNpbGVudCAmJiB0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldEF0dHIodGhpcy5yZWYsIGtleSwgdmFsdWUpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuc2V0U3R5bGUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgc2lsZW50KSB7XG4gIGlmICh0aGlzLnN0eWxlW2tleV0gPT09IHZhbHVlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdGhpcy5zdHlsZVtrZXldID0gdmFsdWVcbiAgaWYgKCFzaWxlbnQgJiYgdGhpcy5kb2NJZCkge1xuICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICBsaXN0ZW5lci5zZXRTdHlsZSh0aGlzLnJlZiwga2V5LCB2YWx1ZSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5yZXNldENsYXNzU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY2xhc3NTdHlsZSkge1xuICAgIHRoaXMuY2xhc3NTdHlsZVtrZXldID0gJydcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5zZXRDbGFzc1N0eWxlID0gZnVuY3Rpb24gKGNsYXNzU3R5bGUpIHtcbiAgdGhpcy5yZXNldENsYXNzU3R5bGUoKVxuICBleHRlbmQodGhpcy5jbGFzc1N0eWxlLCBjbGFzc1N0eWxlKVxuICBpZiAodGhpcy5kb2NJZCkge1xuICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICBsaXN0ZW5lci5zZXRTdHlsZXModGhpcy5yZWYsIHRoaXMudG9TdHlsZSgpKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24gKHR5cGUsIGhhbmRsZXIpIHtcbiAgaWYgKCF0aGlzLmV2ZW50W3R5cGVdKSB7XG4gICAgdGhpcy5ldmVudFt0eXBlXSA9IGhhbmRsZXJcbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgbGlzdGVuZXIuYWRkRXZlbnQodGhpcy5yZWYsIHR5cGUpXG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgaWYgKHRoaXMuZXZlbnRbdHlwZV0pIHtcbiAgICBkZWxldGUgdGhpcy5ldmVudFt0eXBlXVxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICBsaXN0ZW5lci5yZW1vdmVFdmVudCh0aGlzLnJlZiwgdHlwZSlcbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuZmlyZUV2ZW50ID0gZnVuY3Rpb24gKHR5cGUsIGUpIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuZXZlbnRbdHlwZV1cbiAgaWYgKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gaGFuZGxlci5jYWxsKHRoaXMsIGUpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUudG9TdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGV4dGVuZCh7fSwgdGhpcy5jbGFzc1N0eWxlLCB0aGlzLnN0eWxlKVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICByZWY6IHRoaXMucmVmLnRvU3RyaW5nKCksXG4gICAgdHlwZTogdGhpcy50eXBlLFxuICAgIGF0dHI6IHRoaXMuYXR0cixcbiAgICBzdHlsZTogdGhpcy50b1N0eWxlKClcbiAgfVxuICBjb25zdCBldmVudCA9IE9iamVjdC5rZXlzKHRoaXMuZXZlbnQpXG4gIGlmIChldmVudC5sZW5ndGgpIHtcbiAgICByZXN1bHQuZXZlbnQgPSBldmVudFxuICB9XG4gIGlmICh0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGgpIHtcbiAgICByZXN1bHQuY2hpbGRyZW4gPSB0aGlzLnB1cmVDaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZC50b0pTT04oKSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJzwnICsgdGhpcy50eXBlICtcbiAgICAnIGF0dHI9JyArIEpTT04uc3RyaW5naWZ5KHRoaXMuYXR0cikgK1xuICAgICcgc3R5bGU9JyArIEpTT04uc3RyaW5naWZ5KHRoaXMudG9TdHlsZSgpKSArICc+JyArXG4gICAgdGhpcy5wdXJlQ2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQudG9TdHJpbmcoKSkuam9pbignJykgK1xuICAgICc8LycgKyB0aGlzLnR5cGUgKyAnPidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbW1lbnQgKHZhbHVlKSB7XG4gIHRoaXMubm9kZVR5cGUgPSA4XG4gIHRoaXMubm9kZUlkID0gKG5leHROb2RlUmVmKyspLnRvU3RyaW5nKClcbiAgdGhpcy5yZWYgPSB0aGlzLm5vZGVJZFxuICB0aGlzLnR5cGUgPSAnY29tbWVudCdcbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIHRoaXMuY2hpbGRyZW4gPSBbXVxuICB0aGlzLnB1cmVDaGlsZHJlbiA9IFtdXG59XG5cbkNvbW1lbnQucHJvdG90eXBlID0gbmV3IE5vZGUoKVxuXG5Db21tZW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICc8IS0tICcgKyB0aGlzLnZhbHVlICsgJyAtLT4nXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL3Zkb20vaW5kZXguanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0ZW5lciAoaWQsIGhhbmRsZXIpIHtcbiAgdGhpcy5pZCA9IGlkXG4gIHRoaXMuYmF0Y2hlZCA9IGZhbHNlXG4gIHRoaXMudXBkYXRlcyA9IFtdXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXJcbiAgfVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuY3JlYXRlRmluaXNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXJcbiAgcmV0dXJuIGhhbmRsZXIoW2NyZWF0ZUFjdGlvbignY3JlYXRlRmluaXNoJywgW10pXSwgY2FsbGJhY2spXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS51cGRhdGVGaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICByZXR1cm4gaGFuZGxlcihbY3JlYXRlQWN0aW9uKCd1cGRhdGVGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnJlZnJlc2hGaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICByZXR1cm4gaGFuZGxlcihbY3JlYXRlQWN0aW9uKCdyZWZyZXNoRmluaXNoJywgW10pXSwgY2FsbGJhY2spXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5jcmVhdGVCb2R5ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgY29uc3QgYm9keSA9IGVsZW1lbnQudG9KU09OKClcbiAgY29uc3QgY2hpbGRyZW4gPSBib2R5LmNoaWxkcmVuXG4gIGRlbGV0ZSBib2R5LmNoaWxkcmVuXG4gIGNvbnN0IGFjdGlvbnMgPSBbY3JlYXRlQWN0aW9uKCdjcmVhdGVCb2R5JywgW2JvZHldKV1cbiAgaWYgKGNoaWxkcmVuKSB7XG4gICAgYWN0aW9ucy5wdXNoLmFwcGx5KGFjdGlvbnMsIGNoaWxkcmVuLm1hcChjaGlsZCA9PiB7XG4gICAgICByZXR1cm4gY3JlYXRlQWN0aW9uKCdhZGRFbGVtZW50JywgW2JvZHkucmVmLCBjaGlsZCwgLTFdKVxuICAgIH0pKVxuICB9XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoYWN0aW9ucylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmFkZEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcmVmLCBpbmRleCkge1xuICBpZiAoIShpbmRleCA+PSAwKSkge1xuICAgIGluZGV4ID0gLTFcbiAgfVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbignYWRkRWxlbWVudCcsIFtyZWYsIGVsZW1lbnQudG9KU09OKCksIGluZGV4XSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5yZW1vdmVFbGVtZW50ID0gZnVuY3Rpb24gKHJlZikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyZWYpKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IHJlZi5tYXAoKHIpID0+IGNyZWF0ZUFjdGlvbigncmVtb3ZlRWxlbWVudCcsIFtyXSkpXG4gICAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhhY3Rpb25zKVxuICB9XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdyZW1vdmVFbGVtZW50JywgW3JlZl0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUubW92ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFyZ2V0UmVmLCBwYXJlbnRSZWYsIGluZGV4KSB7XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdtb3ZlRWxlbWVudCcsIFt0YXJnZXRSZWYsIHBhcmVudFJlZiwgaW5kZXhdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnNldEF0dHIgPSBmdW5jdGlvbiAocmVmLCBrZXksIHZhbHVlKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9XG4gIHJlc3VsdFtrZXldID0gdmFsdWVcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3VwZGF0ZUF0dHJzJywgW3JlZiwgcmVzdWx0XSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIChyZWYsIGtleSwgdmFsdWUpIHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigndXBkYXRlU3R5bGUnLCBbcmVmLCByZXN1bHRdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnNldFN0eWxlcyA9IGZ1bmN0aW9uIChyZWYsIHN0eWxlKSB7XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCd1cGRhdGVTdHlsZScsIFtyZWYsIHN0eWxlXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5hZGRFdmVudCA9IGZ1bmN0aW9uIChyZWYsIHR5cGUpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ2FkZEV2ZW50JywgW3JlZiwgdHlwZV0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAocmVmLCB0eXBlKSB7XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdyZW1vdmVFdmVudCcsIFtyZWYsIHR5cGVdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmhhbmRsZXIgPSBmdW5jdGlvbiAoYWN0aW9ucywgY2IpIHtcbiAgcmV0dXJuIGNiICYmIGNiKClcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmFkZEFjdGlvbnMgPSBmdW5jdGlvbiAoYWN0aW9ucykge1xuICBjb25zdCB1cGRhdGVzID0gdGhpcy51cGRhdGVzXG4gIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXJcblxuICBpZiAoIUFycmF5LmlzQXJyYXkoYWN0aW9ucykpIHtcbiAgICBhY3Rpb25zID0gW2FjdGlvbnNdXG4gIH1cblxuICBpZiAodGhpcy5iYXRjaGVkKSB7XG4gICAgdXBkYXRlcy5wdXNoLmFwcGx5KHVwZGF0ZXMsIGFjdGlvbnMpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGhhbmRsZXIoYWN0aW9ucylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWN0aW9uIChuYW1lLCBhcmdzKSB7XG4gIHJldHVybiB7IG1vZHVsZTogJ2RvbScsIG1ldGhvZDogbmFtZSwgYXJnczogYXJncyB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL3Zkb20vbGlzdGVuZXIuanNcbiAqKi8iLCIvLyBidWlsdCBieSBucG0gcnVuIGJ1aWxkOmNvbmZpZ1xuXG5pbXBvcnQgKiBhcyBXZWV4IGZyb20gJy4uL2RlZmF1bHQnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgV2VleFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9ydW50aW1lL2NvbmZpZy5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlldyBXZWV4IGZyYW1ld29yayBlbnRyeS5cbiAqL1xuXG5leHBvcnQgeyBjcmVhdGVJbnN0YW5jZSB9IGZyb20gJy4vc3RhdGljL2NyZWF0ZSdcbmV4cG9ydCB7IGluaXQsIHJlZnJlc2hJbnN0YW5jZSwgZGVzdHJveUluc3RhbmNlIH0gZnJvbSAnLi9zdGF0aWMvbGlmZSdcbmV4cG9ydCB7IHJlZ2lzdGVyQ29tcG9uZW50cywgcmVnaXN0ZXJNb2R1bGVzLCByZWdpc3Rlck1ldGhvZHMgfSBmcm9tICcuL3N0YXRpYy9yZWdpc3RlcidcbmV4cG9ydCB7IHJlY2VpdmVUYXNrcyB9IGZyb20gJy4vc3RhdGljL2JyaWRnZSdcbmV4cG9ydCB7IGdldFJvb3QgfSBmcm9tICcuL3N0YXRpYy9taXNjJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IEFwcCBmcm9tICcuLi9hcHAnXG5pbXBvcnQgeyBpbnN0YW5jZU1hcCB9IGZyb20gJy4vbWFwJ1xuaW1wb3J0IHsgaW5pdCBhcyBpbml0QXBwIH0gZnJvbSAnLi4vYXBwL2N0cmwnXG5cbi8qKlxuICogQ3JlYXRlIGEgV2VleCBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNvZGVcbiAqIEBwYXJhbSAge29iamVjdH0gW29wdGlvbnNdIG9wdGlvbiBgSEFTX0xPR2AgZW5hYmxlIHByaW50IGxvZ1xuICogQHBhcmFtICB7b2JqZWN0fSBbZGF0YV1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlIChpZCwgY29kZSwgb3B0aW9ucywgZGF0YSkge1xuICBsZXQgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpZF1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgbGV0IHJlc3VsdFxuICBpZiAoIWluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UgPSBuZXcgQXBwKGlkLCBvcHRpb25zKVxuICAgIGluc3RhbmNlTWFwW2lkXSA9IGluc3RhbmNlXG4gICAgcmVzdWx0ID0gaW5pdEFwcChpbnN0YW5jZSwgY29kZSwgZGF0YSlcbiAgfVxuICBlbHNlIHtcbiAgICByZXN1bHQgPSBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvc3RhdGljL2NyZWF0ZS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogV2VleCBpbnN0YW5jZSBjb25zdHJ1Y3RvciAmIGRlZmluaXRpb25cbiAqL1xuXG5pbXBvcnQgeyByZXF1aXJlTW9kdWxlIH0gZnJvbSAnLi9yZWdpc3RlcidcbmltcG9ydCB7IHVwZGF0ZUFjdGlvbnMsIGNhbGxUYXNrcyB9IGZyb20gJy4vY3RybCdcbmltcG9ydCBBcHAgZnJvbSAnLi9pbnN0YW5jZSdcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5BcHAucHJvdG90eXBlLnJlcXVpcmVNb2R1bGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gcmVxdWlyZU1vZHVsZSh0aGlzLCBuYW1lKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkFwcC5wcm90b3R5cGUudXBkYXRlQWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgdXBkYXRlQWN0aW9ucyh0aGlzKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkFwcC5wcm90b3R5cGUuY2FsbFRhc2tzID0gZnVuY3Rpb24gKHRhc2tzKSB7XG4gIGNhbGxUYXNrcyh0aGlzLCB0YXNrcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2luZGV4LmpzXG4gKiovIiwibGV0IG5hdGl2ZU1vZHVsZXMgPSB7fVxuXG4vLyBmb3IgdGVzdGluZ1xuXG4vKipcbiAqIGZvciB0ZXN0aW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2R1bGUgKG1vZHVsZU5hbWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU1vZHVsZXNbbW9kdWxlTmFtZV1cbn1cblxuLyoqXG4gKiBmb3IgdGVzdGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJNb2R1bGVzICgpIHtcbiAgbmF0aXZlTW9kdWxlcyA9IHt9XG59XG5cbi8vIGZvciBmcmFtZXdvcmtcblxuLyoqXG4gKiBpbml0IG1vZHVsZXMgZm9yIGFuIGFwcCBpbnN0YW5jZVxuICogdGhlIHNlY29uZCBwYXJhbSBkZXRlcm1pbmVzIHdoZXRoZXIgdG8gcmVwbGFjZSBhbiBleGlzdGVkIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1vZHVsZXMgKG1vZHVsZXMsIGlmUmVwbGFjZSkge1xuICBmb3IgKGNvbnN0IG1vZHVsZU5hbWUgaW4gbW9kdWxlcykge1xuICAgIC8vIGluaXQgYG1vZHVsZXNbbW9kdWxlTmFtZV1bXWBcbiAgICBsZXQgbWV0aG9kcyA9IG5hdGl2ZU1vZHVsZXNbbW9kdWxlTmFtZV1cbiAgICBpZiAoIW1ldGhvZHMpIHtcbiAgICAgIG1ldGhvZHMgPSB7fVxuICAgICAgbmF0aXZlTW9kdWxlc1ttb2R1bGVOYW1lXSA9IG1ldGhvZHNcbiAgICB9XG5cbiAgICAvLyBwdXNoIGVhY2ggbm9uLWV4aXN0ZWQgbmV3IG1ldGhvZFxuICAgIG1vZHVsZXNbbW9kdWxlTmFtZV0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbWV0aG9kID0ge1xuICAgICAgICAgIG5hbWU6IG1ldGhvZFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghbWV0aG9kc1ttZXRob2QubmFtZV0gfHwgaWZSZXBsYWNlKSB7XG4gICAgICAgIG1ldGhvZHNbbWV0aG9kLm5hbWVdID0gbWV0aG9kXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIGluaXQgYXBwIG1ldGhvZHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRNZXRob2RzIChWbSwgYXBpcykge1xuICBjb25zdCBwID0gVm0ucHJvdG90eXBlXG5cbiAgZm9yIChjb25zdCBhcGlOYW1lIGluIGFwaXMpIHtcbiAgICBpZiAoIXAuaGFzT3duUHJvcGVydHkoYXBpTmFtZSkpIHtcbiAgICAgIHBbYXBpTmFtZV0gPSBhcGlzW2FwaU5hbWVdXG4gICAgfVxuICB9XG59XG5cbi8vIGZvciBhcHBcblxuLyoqXG4gKiBnZXQgYSBtb2R1bGUgb2YgbWV0aG9kcyBmb3IgYW4gYXBwIGluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlTW9kdWxlIChhcHAsIG5hbWUpIHtcbiAgY29uc3QgbWV0aG9kcyA9IG5hdGl2ZU1vZHVsZXNbbmFtZV1cbiAgY29uc3QgdGFyZ2V0ID0ge31cbiAgZm9yIChjb25zdCBtZXRob2ROYW1lIGluIG1ldGhvZHMpIHtcbiAgICB0YXJnZXRbbWV0aG9kTmFtZV0gPSAoLi4uYXJncykgPT4gYXBwLmNhbGxUYXNrcyh7XG4gICAgICBtb2R1bGU6IG5hbWUsXG4gICAgICBtZXRob2Q6IG1ldGhvZE5hbWUsXG4gICAgICBhcmdzOiBhcmdzXG4gICAgfSlcbiAgfVxuICByZXR1cm4gdGFyZ2V0XG59XG5cbi8qKlxuICogZ2V0IGEgY3VzdG9tIGNvbXBvbmVudCBvcHRpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlQ3VzdG9tQ29tcG9uZW50IChhcHAsIG5hbWUpIHtcbiAgY29uc3QgeyBjdXN0b21Db21wb25lbnRNYXAgfSA9IGFwcFxuICByZXR1cm4gY3VzdG9tQ29tcG9uZW50TWFwW25hbWVdXG59XG5cbi8qKlxuICogcmVnaXN0ZXIgYSBjdXN0b20gY29tcG9uZW50IG9wdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ3VzdG9tQ29tcG9uZW50IChhcHAsIG5hbWUsIGRlZikge1xuICBjb25zdCB7IGN1c3RvbUNvbXBvbmVudE1hcCB9ID0gYXBwXG5cbiAgaWYgKGN1c3RvbUNvbXBvbmVudE1hcFtuYW1lXSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtKUyBGcmFtZXdvcmtdIGRlZmluZSBhIGNvbXBvbmVudCgke25hbWV9KSB0aGF0IGFscmVhZHkgZXhpc3RzYClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGN1c3RvbUNvbXBvbmVudE1hcFtuYW1lXSA9IGRlZlxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9yZWdpc3Rlci5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogaW5zdGFuY2UgY29udHJvbHMgZnJvbSBuYXRpdmVcbiAqXG4gKiAtIGluaXQgYnVuZGxlXG4gKiAtIGZpcmUgZXZlbnRcbiAqIC0gY2FsbGJhY2tcbiAqIC0gZGVzdHJveVxuICpcbiAqIGNvcnJlc3BvbmRlZCB3aXRoIHRoZSBBUEkgb2YgaW5zdGFuY2UgbWFuYWdlciAoZnJhbWV3b3JrLmpzKVxuICovXG5leHBvcnQgeyBpbml0IH0gZnJvbSAnLi9pbml0J1xuXG5leHBvcnQge1xuXHRyZWZyZXNoLFxuICBkZXN0cm95LFxuICBnZXRSb290RWxlbWVudCxcbiAgZmlyZUV2ZW50LFxuICBjYWxsYmFjayxcbiAgdXBkYXRlQWN0aW9ucyxcblx0Y2FsbFRhc2tzXG59IGZyb20gJy4vbWlzYydcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvY3RybC9pbmRleC5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogaW5zdGFuY2UgY29udHJvbHMgZnJvbSBuYXRpdmVcbiAqXG4gKiAtIGluaXQgYnVuZGxlXG4gKlxuICogY29ycmVzcG9uZGVkIHdpdGggdGhlIEFQSSBvZiBpbnN0YW5jZSBtYW5hZ2VyIChmcmFtZXdvcmsuanMpXG4gKi9cblxuaW1wb3J0IHsgcmVtb3ZlV2VleFByZWZpeCB9IGZyb20gJy4uLy4uL3V0aWwnXG5pbXBvcnQge1xuICBkZWZpbmVGbixcbiAgYm9vdHN0cmFwLFxuICByZWdpc3RlclxufSBmcm9tICcuLi9idW5kbGUnXG5pbXBvcnQgeyB1cGRhdGVBY3Rpb25zIH0gZnJvbSAnLi9taXNjJ1xuXG4vKipcbiAqIEluaXQgYW4gYXBwIGJ5IHJ1biBjb2RlIHdpdGdoIGRhdGFcbiAqIEBwYXJhbSAge29iamVjdH0gYXBwXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNvZGVcbiAqIEBwYXJhbSAge29iamVjdH0gZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdCAoYXBwLCBjb2RlLCBkYXRhKSB7XG4gIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIEludGlhbGl6ZSBhbiBpbnN0YW5jZSB3aXRoOlxcbicsIGRhdGEpXG4gIGxldCByZXN1bHRcblxuICAvLyBwcmVwYXJlIGFwcCBlbnYgbWV0aG9kc1xuICBjb25zdCBidW5kbGVEZWZpbmUgPSAoLi4uYXJncykgPT4gZGVmaW5lRm4oYXBwLCAuLi5hcmdzKVxuICBjb25zdCBidW5kbGVCb290c3RyYXAgPSAobmFtZSwgY29uZmlnLCBfZGF0YSkgPT4ge1xuICAgIHJlc3VsdCA9IGJvb3RzdHJhcChhcHAsIG5hbWUsIGNvbmZpZywgX2RhdGEgfHwgZGF0YSlcbiAgICB1cGRhdGVBY3Rpb25zKGFwcClcbiAgICBhcHAuZG9jLmxpc3RlbmVyLmNyZWF0ZUZpbmlzaCgpXG4gICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gQWZ0ZXIgaW50aWFsaXplZCBhbiBpbnN0YW5jZSgke2FwcC5pZH0pYClcbiAgfVxuICBjb25zdCBidW5kbGVSZWdpc3RlciA9ICguLi5hcmdzKSA9PiByZWdpc3RlcihhcHAsIC4uLmFyZ3MpXG4gIGNvbnN0IGJ1bmRsZVJlbmRlciA9IChuYW1lLCBfZGF0YSkgPT4ge1xuICAgIHJlc3VsdCA9IGJvb3RzdHJhcChhcHAsIG5hbWUsIHt9LCBfZGF0YSlcbiAgfVxuICBjb25zdCBidW5kbGVSZXF1aXJlID0gbmFtZSA9PiBfZGF0YSA9PiB7XG4gICAgcmVzdWx0ID0gYm9vdHN0cmFwKGFwcCwgbmFtZSwge30sIF9kYXRhKVxuICB9XG4gIGNvbnN0IGJ1bmRsZURvY3VtZW50ID0gYXBwLmRvY1xuICBjb25zdCBidW5kbGVSZXF1aXJlTW9kdWxlID0gbmFtZSA9PiBhcHAucmVxdWlyZU1vZHVsZShyZW1vdmVXZWV4UHJlZml4KG5hbWUpKVxuXG4gIC8vIHByZXBhcmUgY29kZVxuICBsZXQgZnVuY3Rpb25Cb2R5XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIGNvZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBgZnVuY3Rpb24gKCkgey4uLn1gIC0+IGB7Li4ufWBcbiAgICAvLyBub3QgdmVyeSBzdHJpY3RcbiAgICBmdW5jdGlvbkJvZHkgPSBjb2RlLnRvU3RyaW5nKCkuc3Vic3RyKDEyKVxuICB9XG4gIGVsc2UgaWYgKGNvZGUpIHtcbiAgICBmdW5jdGlvbkJvZHkgPSBjb2RlLnRvU3RyaW5nKClcbiAgfVxuXG4gIC8vIHJ1biBjb2RlIGFuZCBnZXQgcmVzdWx0XG4gIGNvbnN0IHsgV1hFbnZpcm9ubWVudCB9ID0gZ2xvYmFsXG4gIGlmIChXWEVudmlyb25tZW50ICYmIFdYRW52aXJvbm1lbnQucGxhdGZvcm0gIT09ICdXZWInKSB7XG4gICAgLy8gdGltZXIgQVBJcyBwb2x5ZmlsbCBpbiBuYXRpdmVcbiAgICBjb25zdCB0aW1lciA9IGFwcC5yZXF1aXJlTW9kdWxlKCd0aW1lcicpXG4gICAgY29uc3QgdGltZXJBUElzID0ge1xuICAgICAgc2V0VGltZW91dDogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhcmdzWzBdKC4uLmFyZ3Muc2xpY2UoMikpXG4gICAgICAgIH1cbiAgICAgICAgdGltZXIuc2V0VGltZW91dChoYW5kbGVyLCBhcmdzWzFdKVxuICAgICAgICByZXR1cm4gYXBwLnVpZC50b1N0cmluZygpXG4gICAgICB9LFxuICAgICAgc2V0SW50ZXJ2YWw6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYXJnc1swXSguLi5hcmdzLnNsaWNlKDIpKVxuICAgICAgICB9XG4gICAgICAgIHRpbWVyLnNldEludGVydmFsKGhhbmRsZXIsIGFyZ3NbMV0pXG4gICAgICAgIHJldHVybiBhcHAudWlkLnRvU3RyaW5nKClcbiAgICAgIH0sXG4gICAgICBjbGVhclRpbWVvdXQ6IChuKSA9PiB7XG4gICAgICAgIHRpbWVyLmNsZWFyVGltZW91dChuKVxuICAgICAgfSxcbiAgICAgIGNsZWFySW50ZXJ2YWw6IChuKSA9PiB7XG4gICAgICAgIHRpbWVyLmNsZWFySW50ZXJ2YWwobilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmbiA9IG5ldyBGdW5jdGlvbihcbiAgICAgICdkZWZpbmUnLFxuICAgICAgJ3JlcXVpcmUnLFxuICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICdib290c3RyYXAnLFxuICAgICAgJ3JlZ2lzdGVyJyxcbiAgICAgICdyZW5kZXInLFxuICAgICAgJ19fd2VleF9kZWZpbmVfXycsIC8vIGFsaWFzIGZvciBkZWZpbmVcbiAgICAgICdfX3dlZXhfYm9vdHN0cmFwX18nLCAvLyBhbGlhcyBmb3IgYm9vdHN0cmFwXG4gICAgICAnX193ZWV4X2RvY3VtZW50X18nLCAvLyBhbGlhcyBmb3IgYm9vdHN0cmFwXG4gICAgICAnX193ZWV4X3JlcXVpcmVfXycsXG4gICAgICAnc2V0VGltZW91dCcsXG4gICAgICAnc2V0SW50ZXJ2YWwnLFxuICAgICAgJ2NsZWFyVGltZW91dCcsXG4gICAgICAnY2xlYXJJbnRlcnZhbCcsXG4gICAgICBmdW5jdGlvbkJvZHlcbiAgICApXG5cbiAgICBmbihcbiAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgIGJ1bmRsZVJlcXVpcmUsXG4gICAgICBidW5kbGVEb2N1bWVudCxcbiAgICAgIGJ1bmRsZUJvb3RzdHJhcCxcbiAgICAgIGJ1bmRsZVJlZ2lzdGVyLFxuICAgICAgYnVuZGxlUmVuZGVyLFxuICAgICAgYnVuZGxlRGVmaW5lLFxuICAgICAgYnVuZGxlQm9vdHN0cmFwLFxuICAgICAgYnVuZGxlRG9jdW1lbnQsXG4gICAgICBidW5kbGVSZXF1aXJlTW9kdWxlLFxuICAgICAgdGltZXJBUElzLnNldFRpbWVvdXQsXG4gICAgICB0aW1lckFQSXMuc2V0SW50ZXJ2YWwsXG4gICAgICB0aW1lckFQSXMuY2xlYXJUaW1lb3V0LFxuICAgICAgdGltZXJBUElzLmNsZWFySW50ZXJ2YWwpXG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgZm4gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAnZGVmaW5lJyxcbiAgICAgICdyZXF1aXJlJyxcbiAgICAgICdkb2N1bWVudCcsXG4gICAgICAnYm9vdHN0cmFwJyxcbiAgICAgICdyZWdpc3RlcicsXG4gICAgICAncmVuZGVyJyxcbiAgICAgICdfX3dlZXhfZGVmaW5lX18nLCAvLyBhbGlhcyBmb3IgZGVmaW5lXG4gICAgICAnX193ZWV4X2Jvb3RzdHJhcF9fJywgLy8gYWxpYXMgZm9yIGJvb3RzdHJhcFxuICAgICAgJ19fd2VleF9kb2N1bWVudF9fJywgLy8gYWxpYXMgZm9yIGJvb3RzdHJhcFxuICAgICAgJ19fd2VleF9yZXF1aXJlX18nLFxuICAgICAgZnVuY3Rpb25Cb2R5XG4gICAgKVxuXG4gICAgZm4oXG4gICAgICBidW5kbGVEZWZpbmUsXG4gICAgICBidW5kbGVSZXF1aXJlLFxuICAgICAgYnVuZGxlRG9jdW1lbnQsXG4gICAgICBidW5kbGVCb290c3RyYXAsXG4gICAgICBidW5kbGVSZWdpc3RlcixcbiAgICAgIGJ1bmRsZVJlbmRlcixcbiAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgIGJ1bmRsZUJvb3RzdHJhcCxcbiAgICAgIGJ1bmRsZURvY3VtZW50LFxuICAgICAgYnVuZGxlUmVxdWlyZU1vZHVsZSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvY3RybC9pbml0LmpzXG4gKiovIiwiZXhwb3J0IHtcbiAgZXh0ZW5kLFxuICBkZWYsXG4gIHJlbW92ZSxcbiAgaGFzT3duLFxuICBiaW5kLFxuICB0b0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdFxufSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMnXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzdHJpbmcgc3RhcnRzIHdpdGggJCBvciBfXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNlcnZlZCAoc3RyKSB7XG4gIGNvbnN0IGMgPSAoc3RyICsgJycpLmNoYXJDb2RlQXQoMClcbiAgcmV0dXJuIGMgPT09IDB4MjQgfHwgYyA9PT0gMHg1RlxufVxuXG4vLyBjYW4gd2UgdXNlIF9fcHJvdG9fXz9cbmV4cG9ydCBjb25zdCBoYXNQcm90byA9ICdfX3Byb3RvX18nIGluIHt9XG5cbmxldCBfU2V0XG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICh0eXBlb2YgU2V0ICE9PSAndW5kZWZpbmVkJyAmJiBTZXQudG9TdHJpbmcoKS5tYXRjaCgvbmF0aXZlIGNvZGUvKSkge1xuICAvLyB1c2UgbmF0aXZlIFNldCB3aGVuIGF2YWlsYWJsZS5cbiAgX1NldCA9IFNldFxufVxuZWxzZSB7XG4gIC8vIGEgbm9uLXN0YW5kYXJkIFNldCBwb2x5ZmlsbCB0aGF0IG9ubHkgd29ya3Mgd2l0aCBwcmltaXRpdmUga2V5cy5cbiAgX1NldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgfVxuICBfU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gIT09IHVuZGVmaW5lZFxuICB9XG4gIF9TZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0aGlzLnNldFtrZXldID0gMVxuICB9XG4gIF9TZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB9XG59XG5cbmV4cG9ydCB7IF9TZXQgfVxuXG4vKipcbiAqIFBvbHlmaWxsIGluIGlPUzcgYnkgbmF0aXZlIGJlY2F1c2UgdGhlIEphdmFTY3JpcHQgcG9seWZpbGwgaGFzIG1lbW9yeSBwcm9ibGVtLlxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdTZXQgKCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICBpZiAodHlwZW9mIG5hdGl2ZVNldCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbmF0aXZlU2V0LmNyZWF0ZSgpXG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuICByZXR1cm4gbmV3IF9TZXQoKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XG4gICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXVxuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxuICB9XG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsbWl0ZWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5jb25zdCBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nXG5leHBvcnQgY29uc3QgY2FtZWxpemUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIHRvVXBwZXIpXG59KVxuXG5mdW5jdGlvbiB0b1VwcGVyIChfLCBjKSB7XG4gIHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJydcbn1cblxuLyoqXG4gKiBIeXBoZW5hdGUgYSBjYW1lbENhc2Ugc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5jb25zdCBoeXBoZW5hdGVSRSA9IC8oW2EtelxcZF0pKFtBLVpdKS9nXG5leHBvcnQgY29uc3QgaHlwaGVuYXRlID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHJcbiAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAudG9Mb3dlckNhc2UoKVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cG9mICh2KSB7XG4gIGNvbnN0IHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSkudG9Mb3dlckNhc2UoKVxufVxuXG4vLyB3ZWV4IG5hbWUgcnVsZXNcblxuY29uc3QgV0VFWF9DT01QT05FTlRfUkVHID0gL15Ad2VleC1jb21wb25lbnRcXC8vXG5jb25zdCBXRUVYX01PRFVMRV9SRUcgPSAvXkB3ZWV4LW1vZHVsZVxcLy9cbmNvbnN0IE5PUk1BTF9NT0RVTEVfUkVHID0gL15cXC57MSwyfVxcLy9cbmNvbnN0IEpTX1NVUkZJWF9SRUcgPSAvXFwuanMkL1xuXG5leHBvcnQgY29uc3QgaXNXZWV4Q29tcG9uZW50ID0gbmFtZSA9PiAhIW5hbWUubWF0Y2goV0VFWF9DT01QT05FTlRfUkVHKVxuZXhwb3J0IGNvbnN0IGlzV2VleE1vZHVsZSA9IG5hbWUgPT4gISFuYW1lLm1hdGNoKFdFRVhfTU9EVUxFX1JFRylcbmV4cG9ydCBjb25zdCBpc05vcm1hbE1vZHVsZSA9IG5hbWUgPT4gISFuYW1lLm1hdGNoKE5PUk1BTF9NT0RVTEVfUkVHKVxuZXhwb3J0IGNvbnN0IGlzTnBtTW9kdWxlID0gbmFtZSA9PiAhaXNXZWV4Q29tcG9uZW50KG5hbWUpICYmICFpc1dlZXhNb2R1bGUobmFtZSkgJiYgIWlzTm9ybWFsTW9kdWxlKG5hbWUpXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVXZWV4UHJlZml4IChzdHIpIHtcbiAgY29uc3QgcmVzdWx0ID0gc3RyLnJlcGxhY2UoV0VFWF9DT01QT05FTlRfUkVHLCAnJykucmVwbGFjZShXRUVYX01PRFVMRV9SRUcsICcnKVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVKU1N1cmZpeCAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShKU19TVVJGSVhfUkVHLCAnJylcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC91dGlsL2luZGV4LmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBhcGkgdGhhdCBpbnZva2VkIGJ5IGpzIGJ1bmRsZSBjb2RlXG4gKlxuICogLSBkZWZpbmUobmFtZSwgZmFjdG9yeSk6IGRlZmluZSBhIG5ldyBjb21wb3NlZCBjb21wb25lbnQgdHlwZVxuICogLSBib290c3RyYXAodHlwZSwgY29uZmlnLCBkYXRhKTogcmVxdWlyZSBhIGNlcnRhaW4gdHlwZSAmXG4gKiAgICAgICAgIHJlbmRlciB3aXRoIChvcHRpb25hbCkgZGF0YVxuICpcbiAqIGRlcHJlY2F0ZWQ6XG4gKiAtIHJlZ2lzdGVyKHR5cGUsIG9wdGlvbnMpOiByZWdpc3RlciBhIG5ldyBjb21wb3NlZCBjb21wb25lbnQgdHlwZVxuICogLSByZW5kZXIodHlwZSwgZGF0YSk6IHJlbmRlciBieSBhIGNlcnRhaW4gdHlwZSB3aXRoIChvcHRpb25hbCkgZGF0YVxuICogLSByZXF1aXJlKHR5cGUpKGRhdGEpOiByZXF1aXJlIGEgdHlwZSB0aGVuIHJlbmRlciB3aXRoIGRhdGFcbiAqL1xuXG5leHBvcnQgeyBib290c3RyYXAgfSBmcm9tICcuL2Jvb3RzdHJhcCdcbmV4cG9ydCB7IGNsZWFyQ29tbW9uTW9kdWxlcywgZGVmaW5lRm4sIHJlZ2lzdGVyIH0gZnJvbSAnLi9kZWZpbmUnXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2J1bmRsZS9pbmRleC5qc1xuICoqLyIsImltcG9ydCBzZW12ZXIgZnJvbSAnc2VtdmVyJ1xuaW1wb3J0IFZtIGZyb20gJy4uLy4uL3ZtJ1xuaW1wb3J0ICogYXMgZG93bmdyYWRlIGZyb20gJy4uL2Rvd25ncmFkZSdcbmltcG9ydCB7XG4gIHJlcXVpcmVDdXN0b21Db21wb25lbnRcbn0gZnJvbSAnLi4vcmVnaXN0ZXInXG5pbXBvcnQge1xuICBpc1BsYWluT2JqZWN0LFxuICBpc1dlZXhDb21wb25lbnQsXG4gIGlzTnBtTW9kdWxlLFxuICByZW1vdmVXZWV4UHJlZml4LFxuICByZW1vdmVKU1N1cmZpeFxufSBmcm9tICcuLi8uLi91dGlsJ1xuXG4vKipcbiAqIGJvb3RzdHJhcCBhcHAgZnJvbSBhIGNlcnRhaW4gY3VzdG9tIGNvbXBvbmVudCB3aXRoIGNvbmZpZyAmIGRhdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJvb3RzdHJhcCAoYXBwLCBuYW1lLCBjb25maWcsIGRhdGEpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gYm9vdHN0cmFwIGZvciAke25hbWV9YClcblxuICAvLyAxLiB2YWxpZGF0ZSBjdXN0b20gY29tcG9uZW50IG5hbWUgZmlyc3RcbiAgbGV0IGNsZWFuTmFtZVxuICBpZiAoaXNXZWV4Q29tcG9uZW50KG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICB9XG4gIGVsc2UgaWYgKGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICAvLyBjaGVjayBpZiBkZWZpbmUgYnkgb2xkICdkZWZpbmUnIG1ldGhvZFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghcmVxdWlyZUN1c3RvbUNvbXBvbmVudChhcHAsIGNsZWFuTmFtZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoYEl0J3Mgbm90IGEgY29tcG9uZW50OiAke25hbWV9YClcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgV3JvbmcgY29tcG9uZW50IG5hbWU6ICR7bmFtZX1gKVxuICB9XG5cbiAgLy8gMi4gdmFsaWRhdGUgY29uZmlndXJhdGlvblxuICBjb25maWcgPSBpc1BsYWluT2JqZWN0KGNvbmZpZykgPyBjb25maWcgOiB7fVxuICAvLyAyLjEgdHJhbnNmb3JtZXIgdmVyc2lvbiBjaGVja1xuICBpZiAodHlwZW9mIGNvbmZpZy50cmFuc2Zvcm1lclZlcnNpb24gPT09ICdzdHJpbmcnICYmXG4gICAgdHlwZW9mIGdsb2JhbC50cmFuc2Zvcm1lclZlcnNpb24gPT09ICdzdHJpbmcnICYmXG4gICAgIXNlbXZlci5zYXRpc2ZpZXMoY29uZmlnLnRyYW5zZm9ybWVyVmVyc2lvbixcbiAgICAgIGdsb2JhbC50cmFuc2Zvcm1lclZlcnNpb24pKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgSlMgQnVuZGxlIHZlcnNpb246ICR7Y29uZmlnLnRyYW5zZm9ybWVyVmVyc2lvbn0gYCArXG4gICAgICBgbm90IGNvbXBhdGlibGUgd2l0aCAke2dsb2JhbC50cmFuc2Zvcm1lclZlcnNpb259YClcbiAgfVxuICAvLyAyLjIgZG93bmdyYWRlIHZlcnNpb24gY2hlY2tcbiAgY29uc3QgZG93bmdyYWRlUmVzdWx0ID0gZG93bmdyYWRlLmNoZWNrKGNvbmZpZy5kb3duZ3JhZGUpXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoZG93bmdyYWRlUmVzdWx0LmlzRG93bmdyYWRlKSB7XG4gICAgYXBwLmNhbGxUYXNrcyhbe1xuICAgICAgbW9kdWxlOiAnaW5zdGFuY2VXcmFwJyxcbiAgICAgIG1ldGhvZDogJ2Vycm9yJyxcbiAgICAgIGFyZ3M6IFtcbiAgICAgICAgZG93bmdyYWRlUmVzdWx0LmVycm9yVHlwZSxcbiAgICAgICAgZG93bmdyYWRlUmVzdWx0LmNvZGUsXG4gICAgICAgIGRvd25ncmFkZVJlc3VsdC5lcnJvck1lc3NhZ2VcbiAgICAgIF1cbiAgICB9XSlcbiAgICByZXR1cm4gbmV3IEVycm9yKGBEb3duZ3JhZGVbJHtkb3duZ3JhZGVSZXN1bHQuY29kZX1dOiAke2Rvd25ncmFkZVJlc3VsdC5lcnJvck1lc3NhZ2V9YClcbiAgfVxuXG4gIC8vIDMuIGNyZWF0ZSBhIG5ldyBWbSB3aXRoIGN1c3RvbSBjb21wb25lbnQgbmFtZSBhbmQgZGF0YVxuICBhcHAudm0gPSBuZXcgVm0oY2xlYW5OYW1lLCBudWxsLCB7IF9hcHA6IGFwcCB9LCBudWxsLCBkYXRhKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9idW5kbGUvYm9vdHN0cmFwLmpzXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gU2VtVmVyO1xuXG4vLyBUaGUgZGVidWcgZnVuY3Rpb24gaXMgZXhjbHVkZWQgZW50aXJlbHkgZnJvbSB0aGUgbWluaWZpZWQgdmVyc2lvbi5cbi8qIG5vbWluICovIHZhciBkZWJ1Zztcbi8qIG5vbWluICovIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudiAmJlxuICAgIC8qIG5vbWluICovIHByb2Nlc3MuZW52Lk5PREVfREVCVUcgJiZcbiAgICAvKiBub21pbiAqLyAvXFxic2VtdmVyXFxiL2kudGVzdChwcm9jZXNzLmVudi5OT0RFX0RFQlVHKSlcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHtcbiAgICAvKiBub21pbiAqLyB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgLyogbm9taW4gKi8gYXJncy51bnNoaWZ0KCdTRU1WRVInKTtcbiAgICAvKiBub21pbiAqLyBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICAvKiBub21pbiAqLyB9O1xuLyogbm9taW4gKi8gZWxzZVxuICAvKiBub21pbiAqLyBkZWJ1ZyA9IGZ1bmN0aW9uKCkge307XG5cbi8vIE5vdGU6IHRoaXMgaXMgdGhlIHNlbXZlci5vcmcgdmVyc2lvbiBvZiB0aGUgc3BlYyB0aGF0IGl0IGltcGxlbWVudHNcbi8vIE5vdCBuZWNlc3NhcmlseSB0aGUgcGFja2FnZSB2ZXJzaW9uIG9mIHRoaXMgY29kZS5cbmV4cG9ydHMuU0VNVkVSX1NQRUNfVkVSU0lPTiA9ICcyLjAuMCc7XG5cbnZhciBNQVhfTEVOR1RIID0gMjU2O1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fCA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vLyBUaGUgYWN0dWFsIHJlZ2V4cHMgZ28gb24gZXhwb3J0cy5yZVxudmFyIHJlID0gZXhwb3J0cy5yZSA9IFtdO1xudmFyIHNyYyA9IGV4cG9ydHMuc3JjID0gW107XG52YXIgUiA9IDA7XG5cbi8vIFRoZSBmb2xsb3dpbmcgUmVndWxhciBFeHByZXNzaW9ucyBjYW4gYmUgdXNlZCBmb3IgdG9rZW5pemluZyxcbi8vIHZhbGlkYXRpbmcsIGFuZCBwYXJzaW5nIFNlbVZlciB2ZXJzaW9uIHN0cmluZ3MuXG5cbi8vICMjIE51bWVyaWMgSWRlbnRpZmllclxuLy8gQSBzaW5nbGUgYDBgLCBvciBhIG5vbi16ZXJvIGRpZ2l0IGZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBkaWdpdHMuXG5cbnZhciBOVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUl0gPSAnMHxbMS05XVxcXFxkKic7XG52YXIgTlVNRVJJQ0lERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSA9ICdbMC05XSsnO1xuXG5cbi8vICMjIE5vbi1udW1lcmljIElkZW50aWZpZXJcbi8vIFplcm8gb3IgbW9yZSBkaWdpdHMsIGZvbGxvd2VkIGJ5IGEgbGV0dGVyIG9yIGh5cGhlbiwgYW5kIHRoZW4gemVybyBvclxuLy8gbW9yZSBsZXR0ZXJzLCBkaWdpdHMsIG9yIGh5cGhlbnMuXG5cbnZhciBOT05OVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gPSAnXFxcXGQqW2EtekEtWi1dW2EtekEtWjAtOS1dKic7XG5cblxuLy8gIyMgTWFpbiBWZXJzaW9uXG4vLyBUaHJlZSBkb3Qtc2VwYXJhdGVkIG51bWVyaWMgaWRlbnRpZmllcnMuXG5cbnZhciBNQUlOVkVSU0lPTiA9IFIrKztcbnNyY1tNQUlOVkVSU0lPTl0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIE1BSU5WRVJTSU9OTE9PU0UgPSBSKys7XG5zcmNbTUFJTlZFUlNJT05MT09TRV0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKSc7XG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb24gSWRlbnRpZmllclxuLy8gQSBudW1lcmljIGlkZW50aWZpZXIsIG9yIGEgbm9uLW51bWVyaWMgaWRlbnRpZmllci5cblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSA9ICcoPzonICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfCcgKyBzcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb25cbi8vIEh5cGhlbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgZG90LXNlcGFyYXRlZCBwcmUtcmVsZWFzZSB2ZXJzaW9uXG4vLyBpZGVudGlmaWVycy5cblxudmFyIFBSRVJFTEVBU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRV0gPSAnKD86LSgnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArICcpKikpJztcblxudmFyIFBSRVJFTEVBU0VMT09TRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFTE9PU0VdID0gJyg/Oi0/KCcgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICsgJykqKSknO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YSBJZGVudGlmaWVyXG4vLyBBbnkgY29tYmluYXRpb24gb2YgZGlnaXRzLCBsZXR0ZXJzLCBvciBoeXBoZW5zLlxuXG52YXIgQlVJTERJREVOVElGSUVSID0gUisrO1xuc3JjW0JVSUxESURFTlRJRklFUl0gPSAnWzAtOUEtWmEtei1dKyc7XG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhXG4vLyBQbHVzIHNpZ24sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIHBlcmlvZC1zZXBhcmF0ZWQgYnVpbGQgbWV0YWRhdGFcbi8vIGlkZW50aWZpZXJzLlxuXG52YXIgQlVJTEQgPSBSKys7XG5zcmNbQlVJTERdID0gJyg/OlxcXFwrKCcgKyBzcmNbQlVJTERJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tCVUlMRElERU5USUZJRVJdICsgJykqKSknO1xuXG5cbi8vICMjIEZ1bGwgVmVyc2lvbiBTdHJpbmdcbi8vIEEgbWFpbiB2ZXJzaW9uLCBmb2xsb3dlZCBvcHRpb25hbGx5IGJ5IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiBhbmRcbi8vIGJ1aWxkIG1ldGFkYXRhLlxuXG4vLyBOb3RlIHRoYXQgdGhlIG9ubHkgbWFqb3IsIG1pbm9yLCBwYXRjaCwgYW5kIHByZS1yZWxlYXNlIHNlY3Rpb25zIG9mXG4vLyB0aGUgdmVyc2lvbiBzdHJpbmcgYXJlIGNhcHR1cmluZyBncm91cHMuICBUaGUgYnVpbGQgbWV0YWRhdGEgaXMgbm90IGFcbi8vIGNhcHR1cmluZyBncm91cCwgYmVjYXVzZSBpdCBzaG91bGQgbm90IGV2ZXIgYmUgdXNlZCBpbiB2ZXJzaW9uXG4vLyBjb21wYXJpc29uLlxuXG52YXIgRlVMTCA9IFIrKztcbnZhciBGVUxMUExBSU4gPSAndj8nICsgc3JjW01BSU5WRVJTSU9OXSArXG4gICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG5zcmNbRlVMTF0gPSAnXicgKyBGVUxMUExBSU4gKyAnJCc7XG5cbi8vIGxpa2UgZnVsbCwgYnV0IGFsbG93cyB2MS4yLjMgYW5kID0xLjIuMywgd2hpY2ggcGVvcGxlIGRvIHNvbWV0aW1lcy5cbi8vIGFsc28sIDEuMC4wYWxwaGExIChwcmVyZWxlYXNlIHdpdGhvdXQgdGhlIGh5cGhlbikgd2hpY2ggaXMgcHJldHR5XG4vLyBjb21tb24gaW4gdGhlIG5wbSByZWdpc3RyeS5cbnZhciBMT09TRVBMQUlOID0gJ1t2PVxcXFxzXSonICsgc3JjW01BSU5WRVJTSU9OTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnPycgK1xuICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG52YXIgTE9PU0UgPSBSKys7XG5zcmNbTE9PU0VdID0gJ14nICsgTE9PU0VQTEFJTiArICckJztcblxudmFyIEdUTFQgPSBSKys7XG5zcmNbR1RMVF0gPSAnKCg/Ojx8Pik/PT8pJztcblxuLy8gU29tZXRoaW5nIGxpa2UgXCIyLipcIiBvciBcIjEuMi54XCIuXG4vLyBOb3RlIHRoYXQgXCJ4LnhcIiBpcyBhIHZhbGlkIHhSYW5nZSBpZGVudGlmZXIsIG1lYW5pbmcgXCJhbnkgdmVyc2lvblwiXG4vLyBPbmx5IHRoZSBmaXJzdCBpdGVtIGlzIHN0cmljdGx5IHJlcXVpcmVkLlxudmFyIFhSQU5HRUlERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdID0gc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJ3x4fFh8XFxcXConO1xudmFyIFhSQU5HRUlERU5USUZJRVIgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUl0gPSBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJ3x4fFh8XFxcXConO1xuXG52YXIgWFJBTkdFUExBSU4gPSBSKys7XG5zcmNbWFJBTkdFUExBSU5dID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFXSArICcpPycgK1xuICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRVBMQUlOTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFUExBSU5MT09TRV0gPSAnW3Y9XFxcXHNdKignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzonICsgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyk/KT8nO1xuXG52YXIgWFJBTkdFID0gUisrO1xuc3JjW1hSQU5HRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgWFJBTkdFTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFTE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIFRpbGRlIHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJyZWFzb25hYmx5IGF0IG9yIGdyZWF0ZXIgdGhhblwiXG52YXIgTE9ORVRJTERFID0gUisrO1xuc3JjW0xPTkVUSUxERV0gPSAnKD86fj4/KSc7XG5cbnZhciBUSUxERVRSSU0gPSBSKys7XG5zcmNbVElMREVUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbTE9ORVRJTERFXSArICdcXFxccysnO1xucmVbVElMREVUUklNXSA9IG5ldyBSZWdFeHAoc3JjW1RJTERFVFJJTV0sICdnJyk7XG52YXIgdGlsZGVUcmltUmVwbGFjZSA9ICckMX4nO1xuXG52YXIgVElMREUgPSBSKys7XG5zcmNbVElMREVdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFRJTERFTE9PU0UgPSBSKys7XG5zcmNbVElMREVMT09TRV0gPSAnXicgKyBzcmNbTE9ORVRJTERFXSArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gQ2FyZXQgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcImF0IGxlYXN0IGFuZCBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoXCJcbnZhciBMT05FQ0FSRVQgPSBSKys7XG5zcmNbTE9ORUNBUkVUXSA9ICcoPzpcXFxcXiknO1xuXG52YXIgQ0FSRVRUUklNID0gUisrO1xuc3JjW0NBUkVUVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVDQVJFVF0gKyAnXFxcXHMrJztcbnJlW0NBUkVUVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDQVJFVFRSSU1dLCAnZycpO1xudmFyIGNhcmV0VHJpbVJlcGxhY2UgPSAnJDFeJztcblxudmFyIENBUkVUID0gUisrO1xuc3JjW0NBUkVUXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBDQVJFVExPT1NFID0gUisrO1xuc3JjW0NBUkVUTE9PU0VdID0gJ14nICsgc3JjW0xPTkVDQVJFVF0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIEEgc2ltcGxlIGd0L2x0L2VxIHRoaW5nLCBvciBqdXN0IFwiXCIgdG8gaW5kaWNhdGUgXCJhbnkgdmVyc2lvblwiXG52YXIgQ09NUEFSQVRPUkxPT1NFID0gUisrO1xuc3JjW0NPTVBBUkFUT1JMT09TRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJykkfF4kJztcbnZhciBDT01QQVJBVE9SID0gUisrO1xuc3JjW0NPTVBBUkFUT1JdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgRlVMTFBMQUlOICsgJykkfF4kJztcblxuXG4vLyBBbiBleHByZXNzaW9uIHRvIHN0cmlwIGFueSB3aGl0ZXNwYWNlIGJldHdlZW4gdGhlIGd0bHQgYW5kIHRoZSB0aGluZ1xuLy8gaXQgbW9kaWZpZXMsIHNvIHRoYXQgYD4gMS4yLjNgID09PiBgPjEuMi4zYFxudmFyIENPTVBBUkFUT1JUUklNID0gUisrO1xuc3JjW0NPTVBBUkFUT1JUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbR1RMVF0gK1xuICAgICAgICAgICAgICAgICAgICAgICdcXFxccyooJyArIExPT1NFUExBSU4gKyAnfCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknO1xuXG4vLyB0aGlzIG9uZSBoYXMgdG8gdXNlIHRoZSAvZyBmbGFnXG5yZVtDT01QQVJBVE9SVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDT01QQVJBVE9SVFJJTV0sICdnJyk7XG52YXIgY29tcGFyYXRvclRyaW1SZXBsYWNlID0gJyQxJDIkMyc7XG5cblxuLy8gU29tZXRoaW5nIGxpa2UgYDEuMi4zIC0gMS4yLjRgXG4vLyBOb3RlIHRoYXQgdGhlc2UgYWxsIHVzZSB0aGUgbG9vc2UgZm9ybSwgYmVjYXVzZSB0aGV5J2xsIGJlXG4vLyBjaGVja2VkIGFnYWluc3QgZWl0aGVyIHRoZSBzdHJpY3Qgb3IgbG9vc2UgY29tcGFyYXRvciBmb3JtXG4vLyBsYXRlci5cbnZhciBIWVBIRU5SQU5HRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRV0gPSAnXlxcXFxzKignICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbnZhciBIWVBIRU5SQU5HRUxPT1NFID0gUisrO1xuc3JjW0hZUEhFTlJBTkdFTE9PU0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMrLVxcXFxzKycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxccyokJztcblxuLy8gU3RhciByYW5nZXMgYmFzaWNhbGx5IGp1c3QgYWxsb3cgYW55dGhpbmcgYXQgYWxsLlxudmFyIFNUQVIgPSBSKys7XG5zcmNbU1RBUl0gPSAnKDx8Pik/PT9cXFxccypcXFxcKic7XG5cbi8vIENvbXBpbGUgdG8gYWN0dWFsIHJlZ2V4cCBvYmplY3RzLlxuLy8gQWxsIGFyZSBmbGFnLWZyZWUsIHVubGVzcyB0aGV5IHdlcmUgY3JlYXRlZCBhYm92ZSB3aXRoIGEgZmxhZy5cbmZvciAodmFyIGkgPSAwOyBpIDwgUjsgaSsrKSB7XG4gIGRlYnVnKGksIHNyY1tpXSk7XG4gIGlmICghcmVbaV0pXG4gICAgcmVbaV0gPSBuZXcgUmVnRXhwKHNyY1tpXSk7XG59XG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmZ1bmN0aW9uIHBhcnNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKVxuICAgIHJldHVybiB2ZXJzaW9uO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSClcbiAgICByZXR1cm4gbnVsbDtcblxuICB2YXIgciA9IGxvb3NlID8gcmVbTE9PU0VdIDogcmVbRlVMTF07XG4gIGlmICghci50ZXN0KHZlcnNpb24pKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMudmFsaWQgPSB2YWxpZDtcbmZ1bmN0aW9uIHZhbGlkKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciB2ID0gcGFyc2UodmVyc2lvbiwgbG9vc2UpO1xuICByZXR1cm4gdiA/IHYudmVyc2lvbiA6IG51bGw7XG59XG5cblxuZXhwb3J0cy5jbGVhbiA9IGNsZWFuO1xuZnVuY3Rpb24gY2xlYW4odmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHMgPSBwYXJzZSh2ZXJzaW9uLnRyaW0oKS5yZXBsYWNlKC9eWz12XSsvLCAnJyksIGxvb3NlKTtcbiAgcmV0dXJuIHMgPyBzLnZlcnNpb24gOiBudWxsO1xufVxuXG5leHBvcnRzLlNlbVZlciA9IFNlbVZlcjtcblxuZnVuY3Rpb24gU2VtVmVyKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgaWYgKHZlcnNpb24ubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgZWxzZVxuICAgICAgdmVyc2lvbiA9IHZlcnNpb24udmVyc2lvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFZlcnNpb246ICcgKyB2ZXJzaW9uKTtcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmVyc2lvbiBpcyBsb25nZXIgdGhhbiAnICsgTUFYX0xFTkdUSCArICcgY2hhcmFjdGVycycpXG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuXG4gIGRlYnVnKCdTZW1WZXInLCB2ZXJzaW9uLCBsb29zZSk7XG4gIHRoaXMubG9vc2UgPSBsb29zZTtcbiAgdmFyIG0gPSB2ZXJzaW9uLnRyaW0oKS5tYXRjaChsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdKTtcblxuICBpZiAoIW0pXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG5cbiAgdGhpcy5yYXcgPSB2ZXJzaW9uO1xuXG4gIC8vIHRoZXNlIGFyZSBhY3R1YWxseSBudW1iZXJzXG4gIHRoaXMubWFqb3IgPSArbVsxXTtcbiAgdGhpcy5taW5vciA9ICttWzJdO1xuICB0aGlzLnBhdGNoID0gK21bM107XG5cbiAgaWYgKHRoaXMubWFqb3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWFqb3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWFqb3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMubWlub3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWlub3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWlub3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMucGF0Y2ggPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMucGF0Y2ggPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgcGF0Y2ggdmVyc2lvbicpXG5cbiAgLy8gbnVtYmVyaWZ5IGFueSBwcmVyZWxlYXNlIG51bWVyaWMgaWRzXG4gIGlmICghbVs0XSlcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgZWxzZVxuICAgIHRoaXMucHJlcmVsZWFzZSA9IG1bNF0uc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24oaWQpIHtcbiAgICAgIGlmICgvXlswLTldKyQvLnRlc3QoaWQpKSB7XG4gICAgICAgIHZhciBudW0gPSAraWQ7XG4gICAgICAgIGlmIChudW0gPj0gMCAmJiBudW0gPCBNQVhfU0FGRV9JTlRFR0VSKVxuICAgICAgICAgIHJldHVybiBudW07XG4gICAgICB9XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfSk7XG5cbiAgdGhpcy5idWlsZCA9IG1bNV0gPyBtWzVdLnNwbGl0KCcuJykgOiBbXTtcbiAgdGhpcy5mb3JtYXQoKTtcbn1cblxuU2VtVmVyLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy52ZXJzaW9uID0gdGhpcy5tYWpvciArICcuJyArIHRoaXMubWlub3IgKyAnLicgKyB0aGlzLnBhdGNoO1xuICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICB0aGlzLnZlcnNpb24gKz0gJy0nICsgdGhpcy5wcmVyZWxlYXNlLmpvaW4oJy4nKTtcbiAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbn07XG5cblNlbVZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGRlYnVnKCdTZW1WZXIuY29tcGFyZScsIHRoaXMudmVyc2lvbiwgdGhpcy5sb29zZSwgb3RoZXIpO1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gdGhpcy5jb21wYXJlTWFpbihvdGhlcikgfHwgdGhpcy5jb21wYXJlUHJlKG90aGVyKTtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZU1haW4gPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWFqb3IsIG90aGVyLm1ham9yKSB8fFxuICAgICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWlub3IsIG90aGVyLm1pbm9yKSB8fFxuICAgICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMucGF0Y2gsIG90aGVyLnBhdGNoKTtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZVByZSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIC8vIE5PVCBoYXZpbmcgYSBwcmVyZWxlYXNlIGlzID4gaGF2aW5nIG9uZVxuICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIC0xO1xuICBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiBvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gMTtcbiAgZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAwO1xuXG4gIHZhciBpID0gMDtcbiAgZG8ge1xuICAgIHZhciBhID0gdGhpcy5wcmVyZWxlYXNlW2ldO1xuICAgIHZhciBiID0gb3RoZXIucHJlcmVsZWFzZVtpXTtcbiAgICBkZWJ1ZygncHJlcmVsZWFzZSBjb21wYXJlJywgaSwgYSwgYik7XG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCAmJiBiID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gMDtcbiAgICBlbHNlIGlmIChiID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChhID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gLTE7XG4gICAgZWxzZSBpZiAoYSA9PT0gYilcbiAgICAgIGNvbnRpbnVlO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYik7XG4gIH0gd2hpbGUgKCsraSk7XG59O1xuXG4vLyBwcmVtaW5vciB3aWxsIGJ1bXAgdGhlIHZlcnNpb24gdXAgdG8gdGhlIG5leHQgbWlub3IgcmVsZWFzZSwgYW5kIGltbWVkaWF0ZWx5XG4vLyBkb3duIHRvIHByZS1yZWxlYXNlLiBwcmVtYWpvciBhbmQgcHJlcGF0Y2ggd29yayB0aGUgc2FtZSB3YXkuXG5TZW1WZXIucHJvdG90eXBlLmluYyA9IGZ1bmN0aW9uKHJlbGVhc2UsIGlkZW50aWZpZXIpIHtcbiAgc3dpdGNoIChyZWxlYXNlKSB7XG4gICAgY2FzZSAncHJlbWFqb3InOlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMubWlub3IgPSAwO1xuICAgICAgdGhpcy5tYWpvcisrO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJlbWlub3InOlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMubWlub3IrKztcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZXBhdGNoJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYWxyZWFkeSBhIHByZXJlbGVhc2UsIGl0IHdpbGwgYnVtcCB0byB0aGUgbmV4dCB2ZXJzaW9uXG4gICAgICAvLyBkcm9wIGFueSBwcmVyZWxlYXNlcyB0aGF0IG1pZ2h0IGFscmVhZHkgZXhpc3QsIHNpbmNlIHRoZXkgYXJlIG5vdFxuICAgICAgLy8gcmVsZXZhbnQgYXQgdGhpcyBwb2ludC5cbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcik7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICAvLyBJZiB0aGUgaW5wdXQgaXMgYSBub24tcHJlcmVsZWFzZSB2ZXJzaW9uLCB0aGlzIGFjdHMgdGhlIHNhbWUgYXNcbiAgICAvLyBwcmVwYXRjaC5cbiAgICBjYXNlICdwcmVyZWxlYXNlJzpcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKTtcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbWFqb3InOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1tYWpvciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1ham9yIHZlcnNpb24uXG4gICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1ham9yLlxuICAgICAgLy8gMS4wLjAtNSBidW1wcyB0byAxLjAuMFxuICAgICAgLy8gMS4xLjAgYnVtcHMgdG8gMi4wLjBcbiAgICAgIGlmICh0aGlzLm1pbm9yICE9PSAwIHx8IHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5tYWpvcisrO1xuICAgICAgdGhpcy5taW5vciA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWlub3InOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1taW5vciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1pbm9yIHZlcnNpb24uXG4gICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1pbm9yLlxuICAgICAgLy8gMS4yLjAtNSBidW1wcyB0byAxLjIuMFxuICAgICAgLy8gMS4yLjEgYnVtcHMgdG8gMS4zLjBcbiAgICAgIGlmICh0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMubWlub3IrKztcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIG5vdCBhIHByZS1yZWxlYXNlIHZlcnNpb24sIGl0IHdpbGwgaW5jcmVtZW50IHRoZSBwYXRjaC5cbiAgICAgIC8vIElmIGl0IGlzIGEgcHJlLXJlbGVhc2UgaXQgd2lsbCBidW1wIHVwIHRvIHRoZSBzYW1lIHBhdGNoIHZlcnNpb24uXG4gICAgICAvLyAxLjIuMC01IHBhdGNoZXMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4wIHBhdGNoZXMgdG8gMS4yLjFcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLnBhdGNoKys7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIFRoaXMgcHJvYmFibHkgc2hvdWxkbid0IGJlIHVzZWQgcHVibGljbHkuXG4gICAgLy8gMS4wLjAgXCJwcmVcIiB3b3VsZCBiZWNvbWUgMS4wLjAtMCB3aGljaCBpcyB0aGUgd3JvbmcgZGlyZWN0aW9uLlxuICAgIGNhc2UgJ3ByZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gWzBdO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5wcmVyZWxlYXNlLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByZXJlbGVhc2VbaV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2VbaV0rKztcbiAgICAgICAgICAgIGkgPSAtMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IC0xKSAvLyBkaWRuJ3QgaW5jcmVtZW50IGFueXRoaW5nXG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlLnB1c2goMCk7XG4gICAgICB9XG4gICAgICBpZiAoaWRlbnRpZmllcikge1xuICAgICAgICAvLyAxLjIuMC1iZXRhLjEgYnVtcHMgdG8gMS4yLjAtYmV0YS4yLFxuICAgICAgICAvLyAxLjIuMC1iZXRhLmZvb2JseiBvciAxLjIuMC1iZXRhIGJ1bXBzIHRvIDEuMi4wLWJldGEuMFxuICAgICAgICBpZiAodGhpcy5wcmVyZWxlYXNlWzBdID09PSBpZGVudGlmaWVyKSB7XG4gICAgICAgICAgaWYgKGlzTmFOKHRoaXMucHJlcmVsZWFzZVsxXSkpXG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF07XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBpbmNyZW1lbnQgYXJndW1lbnQ6ICcgKyByZWxlYXNlKTtcbiAgfVxuICB0aGlzLmZvcm1hdCgpO1xuICB0aGlzLnJhdyA9IHRoaXMudmVyc2lvbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5leHBvcnRzLmluYyA9IGluYztcbmZ1bmN0aW9uIGluYyh2ZXJzaW9uLCByZWxlYXNlLCBsb29zZSwgaWRlbnRpZmllcikge1xuICBpZiAodHlwZW9mKGxvb3NlKSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZGVudGlmaWVyID0gbG9vc2U7XG4gICAgbG9vc2UgPSB1bmRlZmluZWQ7XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKS5pbmMocmVsZWFzZSwgaWRlbnRpZmllcikudmVyc2lvbjtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnRzLmRpZmYgPSBkaWZmO1xuZnVuY3Rpb24gZGlmZih2ZXJzaW9uMSwgdmVyc2lvbjIpIHtcbiAgaWYgKGVxKHZlcnNpb24xLCB2ZXJzaW9uMikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdjEgPSBwYXJzZSh2ZXJzaW9uMSk7XG4gICAgdmFyIHYyID0gcGFyc2UodmVyc2lvbjIpO1xuICAgIGlmICh2MS5wcmVyZWxlYXNlLmxlbmd0aCB8fCB2Mi5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHYxKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdtYWpvcicgfHwga2V5ID09PSAnbWlub3InIHx8IGtleSA9PT0gJ3BhdGNoJykge1xuICAgICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ByZScra2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICdwcmVyZWxlYXNlJztcbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIHYxKSB7XG4gICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgaWYgKHYxW2tleV0gIT09IHYyW2tleV0pIHtcbiAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuY29tcGFyZUlkZW50aWZpZXJzID0gY29tcGFyZUlkZW50aWZpZXJzO1xuXG52YXIgbnVtZXJpYyA9IC9eWzAtOV0rJC87XG5mdW5jdGlvbiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYikge1xuICB2YXIgYW51bSA9IG51bWVyaWMudGVzdChhKTtcbiAgdmFyIGJudW0gPSBudW1lcmljLnRlc3QoYik7XG5cbiAgaWYgKGFudW0gJiYgYm51bSkge1xuICAgIGEgPSArYTtcbiAgICBiID0gK2I7XG4gIH1cblxuICByZXR1cm4gKGFudW0gJiYgIWJudW0pID8gLTEgOlxuICAgICAgICAgKGJudW0gJiYgIWFudW0pID8gMSA6XG4gICAgICAgICBhIDwgYiA/IC0xIDpcbiAgICAgICAgIGEgPiBiID8gMSA6XG4gICAgICAgICAwO1xufVxuXG5leHBvcnRzLnJjb21wYXJlSWRlbnRpZmllcnMgPSByY29tcGFyZUlkZW50aWZpZXJzO1xuZnVuY3Rpb24gcmNvbXBhcmVJZGVudGlmaWVycyhhLCBiKSB7XG4gIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYiwgYSk7XG59XG5cbmV4cG9ydHMubWFqb3IgPSBtYWpvcjtcbmZ1bmN0aW9uIG1ham9yKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5tYWpvcjtcbn1cblxuZXhwb3J0cy5taW5vciA9IG1pbm9yO1xuZnVuY3Rpb24gbWlub3IoYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1pbm9yO1xufVxuXG5leHBvcnRzLnBhdGNoID0gcGF0Y2g7XG5mdW5jdGlvbiBwYXRjaChhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkucGF0Y2g7XG59XG5cbmV4cG9ydHMuY29tcGFyZSA9IGNvbXBhcmU7XG5mdW5jdGlvbiBjb21wYXJlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5jb21wYXJlKGIpO1xufVxuXG5leHBvcnRzLmNvbXBhcmVMb29zZSA9IGNvbXBhcmVMb29zZTtcbmZ1bmN0aW9uIGNvbXBhcmVMb29zZShhLCBiKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIHRydWUpO1xufVxuXG5leHBvcnRzLnJjb21wYXJlID0gcmNvbXBhcmU7XG5mdW5jdGlvbiByY29tcGFyZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShiLCBhLCBsb29zZSk7XG59XG5cbmV4cG9ydHMuc29ydCA9IHNvcnQ7XG5mdW5jdGlvbiBzb3J0KGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KTtcbn1cblxuZXhwb3J0cy5yc29ydCA9IHJzb3J0O1xuZnVuY3Rpb24gcnNvcnQobGlzdCwgbG9vc2UpIHtcbiAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMucmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KTtcbn1cblxuZXhwb3J0cy5ndCA9IGd0O1xuZnVuY3Rpb24gZ3QoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID4gMDtcbn1cblxuZXhwb3J0cy5sdCA9IGx0O1xuZnVuY3Rpb24gbHQoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDwgMDtcbn1cblxuZXhwb3J0cy5lcSA9IGVxO1xuZnVuY3Rpb24gZXEoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID09PSAwO1xufVxuXG5leHBvcnRzLm5lcSA9IG5lcTtcbmZ1bmN0aW9uIG5lcShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgIT09IDA7XG59XG5cbmV4cG9ydHMuZ3RlID0gZ3RlO1xuZnVuY3Rpb24gZ3RlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+PSAwO1xufVxuXG5leHBvcnRzLmx0ZSA9IGx0ZTtcbmZ1bmN0aW9uIGx0ZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPD0gMDtcbn1cblxuZXhwb3J0cy5jbXAgPSBjbXA7XG5mdW5jdGlvbiBjbXAoYSwgb3AsIGIsIGxvb3NlKSB7XG4gIHZhciByZXQ7XG4gIHN3aXRjaCAob3ApIHtcbiAgICBjYXNlICc9PT0nOlxuICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0JykgYSA9IGEudmVyc2lvbjtcbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIGIgPSBiLnZlcnNpb247XG4gICAgICByZXQgPSBhID09PSBiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnIT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIGEgPSBhLnZlcnNpb247XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSBiID0gYi52ZXJzaW9uO1xuICAgICAgcmV0ID0gYSAhPT0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyc6IGNhc2UgJz0nOiBjYXNlICc9PSc6IHJldCA9IGVxKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnIT0nOiByZXQgPSBuZXEoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc+JzogcmV0ID0gZ3QoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc+PSc6IHJldCA9IGd0ZShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJzwnOiByZXQgPSBsdChhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJzw9JzogcmV0ID0gbHRlKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgZGVmYXVsdDogdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBvcGVyYXRvcjogJyArIG9wKTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnRzLkNvbXBhcmF0b3IgPSBDb21wYXJhdG9yO1xuZnVuY3Rpb24gQ29tcGFyYXRvcihjb21wLCBsb29zZSkge1xuICBpZiAoY29tcCBpbnN0YW5jZW9mIENvbXBhcmF0b3IpIHtcbiAgICBpZiAoY29tcC5sb29zZSA9PT0gbG9vc2UpXG4gICAgICByZXR1cm4gY29tcDtcbiAgICBlbHNlXG4gICAgICBjb21wID0gY29tcC52YWx1ZTtcbiAgfVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSlcbiAgICByZXR1cm4gbmV3IENvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuXG4gIGRlYnVnKCdjb21wYXJhdG9yJywgY29tcCwgbG9vc2UpO1xuICB0aGlzLmxvb3NlID0gbG9vc2U7XG4gIHRoaXMucGFyc2UoY29tcCk7XG5cbiAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpXG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICBlbHNlXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMub3BlcmF0b3IgKyB0aGlzLnNlbXZlci52ZXJzaW9uO1xuXG4gIGRlYnVnKCdjb21wJywgdGhpcyk7XG59XG5cbnZhciBBTlkgPSB7fTtcbkNvbXBhcmF0b3IucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24oY29tcCkge1xuICB2YXIgciA9IHRoaXMubG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl07XG4gIHZhciBtID0gY29tcC5tYXRjaChyKTtcblxuICBpZiAoIW0pXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjb21wYXJhdG9yOiAnICsgY29tcCk7XG5cbiAgdGhpcy5vcGVyYXRvciA9IG1bMV07XG4gIGlmICh0aGlzLm9wZXJhdG9yID09PSAnPScpXG4gICAgdGhpcy5vcGVyYXRvciA9ICcnO1xuXG4gIC8vIGlmIGl0IGxpdGVyYWxseSBpcyBqdXN0ICc+JyBvciAnJyB0aGVuIGFsbG93IGFueXRoaW5nLlxuICBpZiAoIW1bMl0pXG4gICAgdGhpcy5zZW12ZXIgPSBBTlk7XG4gIGVsc2VcbiAgICB0aGlzLnNlbXZlciA9IG5ldyBTZW1WZXIobVsyXSwgdGhpcy5sb29zZSk7XG59O1xuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy52YWx1ZTtcbn07XG5cbkNvbXBhcmF0b3IucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gIGRlYnVnKCdDb21wYXJhdG9yLnRlc3QnLCB2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSlcbiAgICByZXR1cm4gdHJ1ZTtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKVxuICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiBjbXAodmVyc2lvbiwgdGhpcy5vcGVyYXRvciwgdGhpcy5zZW12ZXIsIHRoaXMubG9vc2UpO1xufTtcblxuXG5leHBvcnRzLlJhbmdlID0gUmFuZ2U7XG5mdW5jdGlvbiBSYW5nZShyYW5nZSwgbG9vc2UpIHtcbiAgaWYgKChyYW5nZSBpbnN0YW5jZW9mIFJhbmdlKSAmJiByYW5nZS5sb29zZSA9PT0gbG9vc2UpXG4gICAgcmV0dXJuIHJhbmdlO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSYW5nZSkpXG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuXG4gIHRoaXMubG9vc2UgPSBsb29zZTtcblxuICAvLyBGaXJzdCwgc3BsaXQgYmFzZWQgb24gYm9vbGVhbiBvciB8fFxuICB0aGlzLnJhdyA9IHJhbmdlO1xuICB0aGlzLnNldCA9IHJhbmdlLnNwbGl0KC9cXHMqXFx8XFx8XFxzKi8pLm1hcChmdW5jdGlvbihyYW5nZSkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlUmFuZ2UocmFuZ2UudHJpbSgpKTtcbiAgfSwgdGhpcykuZmlsdGVyKGZ1bmN0aW9uKGMpIHtcbiAgICAvLyB0aHJvdyBvdXQgYW55IHRoYXQgYXJlIG5vdCByZWxldmFudCBmb3Igd2hhdGV2ZXIgcmVhc29uXG4gICAgcmV0dXJuIGMubGVuZ3RoO1xuICB9KTtcblxuICBpZiAoIXRoaXMuc2V0Lmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgU2VtVmVyIFJhbmdlOiAnICsgcmFuZ2UpO1xuICB9XG5cbiAgdGhpcy5mb3JtYXQoKTtcbn1cblxuUmFuZ2UucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJhbmdlID0gdGhpcy5zZXQubWFwKGZ1bmN0aW9uKGNvbXBzKSB7XG4gICAgcmV0dXJuIGNvbXBzLmpvaW4oJyAnKS50cmltKCk7XG4gIH0pLmpvaW4oJ3x8JykudHJpbSgpO1xuICByZXR1cm4gdGhpcy5yYW5nZTtcbn07XG5cblJhbmdlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5yYW5nZTtcbn07XG5cblJhbmdlLnByb3RvdHlwZS5wYXJzZVJhbmdlID0gZnVuY3Rpb24ocmFuZ2UpIHtcbiAgdmFyIGxvb3NlID0gdGhpcy5sb29zZTtcbiAgcmFuZ2UgPSByYW5nZS50cmltKCk7XG4gIGRlYnVnKCdyYW5nZScsIHJhbmdlLCBsb29zZSk7XG4gIC8vIGAxLjIuMyAtIDEuMi40YCA9PiBgPj0xLjIuMyA8PTEuMi40YFxuICB2YXIgaHIgPSBsb29zZSA/IHJlW0hZUEhFTlJBTkdFTE9PU0VdIDogcmVbSFlQSEVOUkFOR0VdO1xuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UoaHIsIGh5cGhlblJlcGxhY2UpO1xuICBkZWJ1ZygnaHlwaGVuIHJlcGxhY2UnLCByYW5nZSk7XG4gIC8vIGA+IDEuMi4zIDwgMS4yLjVgID0+IGA+MS4yLjMgPDEuMi41YFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbQ09NUEFSQVRPUlRSSU1dLCBjb21wYXJhdG9yVHJpbVJlcGxhY2UpO1xuICBkZWJ1ZygnY29tcGFyYXRvciB0cmltJywgcmFuZ2UsIHJlW0NPTVBBUkFUT1JUUklNXSk7XG5cbiAgLy8gYH4gMS4yLjNgID0+IGB+MS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtUSUxERVRSSU1dLCB0aWxkZVRyaW1SZXBsYWNlKTtcblxuICAvLyBgXiAxLjIuM2AgPT4gYF4xLjIuM2BcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NBUkVUVFJJTV0sIGNhcmV0VHJpbVJlcGxhY2UpO1xuXG4gIC8vIG5vcm1hbGl6ZSBzcGFjZXNcbiAgcmFuZ2UgPSByYW5nZS5zcGxpdCgvXFxzKy8pLmpvaW4oJyAnKTtcblxuICAvLyBBdCB0aGlzIHBvaW50LCB0aGUgcmFuZ2UgaXMgY29tcGxldGVseSB0cmltbWVkIGFuZFxuICAvLyByZWFkeSB0byBiZSBzcGxpdCBpbnRvIGNvbXBhcmF0b3JzLlxuXG4gIHZhciBjb21wUmUgPSBsb29zZSA/IHJlW0NPTVBBUkFUT1JMT09TRV0gOiByZVtDT01QQVJBVE9SXTtcbiAgdmFyIHNldCA9IHJhbmdlLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcGFyc2VDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpLnNwbGl0KC9cXHMrLyk7XG4gIGlmICh0aGlzLmxvb3NlKSB7XG4gICAgLy8gaW4gbG9vc2UgbW9kZSwgdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgdmFsaWQgY29tcGFyYXRvcnNcbiAgICBzZXQgPSBzZXQuZmlsdGVyKGZ1bmN0aW9uKGNvbXApIHtcbiAgICAgIHJldHVybiAhIWNvbXAubWF0Y2goY29tcFJlKTtcbiAgICB9KTtcbiAgfVxuICBzZXQgPSBzZXQubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gbmV3IENvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuICB9KTtcblxuICByZXR1cm4gc2V0O1xufTtcblxuLy8gTW9zdGx5IGp1c3QgZm9yIHRlc3RpbmcgYW5kIGxlZ2FjeSBBUEkgcmVhc29uc1xuZXhwb3J0cy50b0NvbXBhcmF0b3JzID0gdG9Db21wYXJhdG9ycztcbmZ1bmN0aW9uIHRvQ29tcGFyYXRvcnMocmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKS5zZXQubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gY29tcC5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgcmV0dXJuIGMudmFsdWU7XG4gICAgfSkuam9pbignICcpLnRyaW0oKS5zcGxpdCgnICcpO1xuICB9KTtcbn1cblxuLy8gY29tcHJpc2VkIG9mIHhyYW5nZXMsIHRpbGRlcywgc3RhcnMsIGFuZCBndGx0J3MgYXQgdGhpcyBwb2ludC5cbi8vIGFscmVhZHkgcmVwbGFjZWQgdGhlIGh5cGhlbiByYW5nZXNcbi8vIHR1cm4gaW50byBhIHNldCBvZiBKVVNUIGNvbXBhcmF0b3JzLlxuZnVuY3Rpb24gcGFyc2VDb21wYXJhdG9yKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdjb21wJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlQ2FyZXRzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlVGlsZGVzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3RpbGRlcycsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVhSYW5nZXMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygneHJhbmdlJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlU3RhcnMoY29tcCwgbG9vc2UpO1xuICBkZWJ1Zygnc3RhcnMnLCBjb21wKTtcbiAgcmV0dXJuIGNvbXA7XG59XG5cbmZ1bmN0aW9uIGlzWChpZCkge1xuICByZXR1cm4gIWlkIHx8IGlkLnRvTG93ZXJDYXNlKCkgPT09ICd4JyB8fCBpZCA9PT0gJyonO1xufVxuXG4vLyB+LCB+PiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIH4yLCB+Mi54LCB+Mi54LngsIH4+Miwgfj4yLnggfj4yLngueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIH4yLjAsIH4yLjAueCwgfj4yLjAsIH4+Mi4wLnggLS0+ID49Mi4wLjAgPDIuMS4wXG4vLyB+MS4yLCB+MS4yLngsIH4+MS4yLCB+PjEuMi54IC0tPiA+PTEuMi4wIDwxLjMuMFxuLy8gfjEuMi4zLCB+PjEuMi4zIC0tPiA+PTEuMi4zIDwxLjMuMFxuLy8gfjEuMi4wLCB+PjEuMi4wIC0tPiA+PTEuMi4wIDwxLjMuMFxuZnVuY3Rpb24gcmVwbGFjZVRpbGRlcyhjb21wLCBsb29zZSkge1xuICByZXR1cm4gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlVGlsZGUoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZShjb21wLCBsb29zZSkge1xuICB2YXIgciA9IGxvb3NlID8gcmVbVElMREVMT09TRV0gOiByZVtUSUxERV07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24oXywgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygndGlsZGUnLCBjb21wLCBfLCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHJldDtcblxuICAgIGlmIChpc1goTSkpXG4gICAgICByZXQgPSAnJztcbiAgICBlbHNlIGlmIChpc1gobSkpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgZWxzZSBpZiAoaXNYKHApKVxuICAgICAgLy8gfjEuMiA9PSA+PTEuMi4wIDwxLjMuMFxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VUaWxkZSBwcicsIHByKTtcbiAgICAgIGlmIChwci5jaGFyQXQoMCkgIT09ICctJylcbiAgICAgICAgcHIgPSAnLScgKyBwcjtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICB9IGVsc2VcbiAgICAgIC8vIH4xLjIuMyA9PSA+PTEuMi4zIDwxLjMuMFxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcblxuICAgIGRlYnVnKCd0aWxkZSByZXR1cm4nLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG4vLyBeIC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gXjIsIF4yLngsIF4yLngueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIF4yLjAsIF4yLjAueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIF4xLjIsIF4xLjIueCAtLT4gPj0xLjIuMCA8Mi4wLjBcbi8vIF4xLjIuMyAtLT4gPj0xLjIuMyA8Mi4wLjBcbi8vIF4xLjIuMCAtLT4gPj0xLjIuMCA8Mi4wLjBcbmZ1bmN0aW9uIHJlcGxhY2VDYXJldHMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZUNhcmV0KGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXQoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCwgbG9vc2UpO1xuICB2YXIgciA9IGxvb3NlID8gcmVbQ0FSRVRMT09TRV0gOiByZVtDQVJFVF07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24oXywgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBfLCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHJldDtcblxuICAgIGlmIChpc1goTSkpXG4gICAgICByZXQgPSAnJztcbiAgICBlbHNlIGlmIChpc1gobSkpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgZWxzZSBpZiAoaXNYKHApKSB7XG4gICAgICBpZiAoTSA9PT0gJzAnKVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZUNhcmV0IHByJywgcHIpO1xuICAgICAgaWYgKHByLmNoYXJBdCgwKSAhPT0gJy0nKVxuICAgICAgICBwciA9ICctJyArIHByO1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ25vIHByJyk7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgJyA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH1cblxuICAgIGRlYnVnKCdjYXJldCByZXR1cm4nLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlWFJhbmdlcyhjb21wLCBsb29zZSkge1xuICBkZWJ1ZygncmVwbGFjZVhSYW5nZXMnLCBjb21wLCBsb29zZSk7XG4gIHJldHVybiBjb21wLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVhSYW5nZShjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZShjb21wLCBsb29zZSkge1xuICBjb21wID0gY29tcC50cmltKCk7XG4gIHZhciByID0gbG9vc2UgPyByZVtYUkFOR0VMT09TRV0gOiByZVtYUkFOR0VdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygneFJhbmdlJywgY29tcCwgcmV0LCBndGx0LCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHhNID0gaXNYKE0pO1xuICAgIHZhciB4bSA9IHhNIHx8IGlzWChtKTtcbiAgICB2YXIgeHAgPSB4bSB8fCBpc1gocCk7XG4gICAgdmFyIGFueVggPSB4cDtcblxuICAgIGlmIChndGx0ID09PSAnPScgJiYgYW55WClcbiAgICAgIGd0bHQgPSAnJztcblxuICAgIGlmICh4TSkge1xuICAgICAgaWYgKGd0bHQgPT09ICc+JyB8fCBndGx0ID09PSAnPCcpIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBhbGxvd2VkXG4gICAgICAgIHJldCA9ICc8MC4wLjAnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBmb3JiaWRkZW5cbiAgICAgICAgcmV0ID0gJyonO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ3RsdCAmJiBhbnlYKSB7XG4gICAgICAvLyByZXBsYWNlIFggd2l0aCAwXG4gICAgICBpZiAoeG0pXG4gICAgICAgIG0gPSAwO1xuICAgICAgaWYgKHhwKVxuICAgICAgICBwID0gMDtcblxuICAgICAgaWYgKGd0bHQgPT09ICc+Jykge1xuICAgICAgICAvLyA+MSA9PiA+PTIuMC4wXG4gICAgICAgIC8vID4xLjIgPT4gPj0xLjMuMFxuICAgICAgICAvLyA+MS4yLjMgPT4gPj0gMS4yLjRcbiAgICAgICAgZ3RsdCA9ICc+PSc7XG4gICAgICAgIGlmICh4bSkge1xuICAgICAgICAgIE0gPSArTSArIDE7XG4gICAgICAgICAgbSA9IDA7XG4gICAgICAgICAgcCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgICAgICBtID0gK20gKyAxO1xuICAgICAgICAgIHAgPSAwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGd0bHQgPT09ICc8PScpIHtcbiAgICAgICAgLy8gPD0wLjcueCBpcyBhY3R1YWxseSA8MC44LjAsIHNpbmNlIGFueSAwLjcueCBzaG91bGRcbiAgICAgICAgLy8gcGFzcy4gIFNpbWlsYXJseSwgPD03LnggaXMgYWN0dWFsbHkgPDguMC4wLCBldGMuXG4gICAgICAgIGd0bHQgPSAnPCc7XG4gICAgICAgIGlmICh4bSlcbiAgICAgICAgICBNID0gK00gKyAxO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgbSA9ICttICsgMTtcbiAgICAgIH1cblxuICAgICAgcmV0ID0gZ3RsdCArIE0gKyAnLicgKyBtICsgJy4nICsgcDtcbiAgICB9IGVsc2UgaWYgKHhtKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICB9XG5cbiAgICBkZWJ1ZygneFJhbmdlIHJldHVybicsIHJldCk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuLy8gQmVjYXVzZSAqIGlzIEFORC1lZCB3aXRoIGV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgY29tcGFyYXRvcixcbi8vIGFuZCAnJyBtZWFucyBcImFueSB2ZXJzaW9uXCIsIGp1c3QgcmVtb3ZlIHRoZSAqcyBlbnRpcmVseS5cbmZ1bmN0aW9uIHJlcGxhY2VTdGFycyhjb21wLCBsb29zZSkge1xuICBkZWJ1ZygncmVwbGFjZVN0YXJzJywgY29tcCwgbG9vc2UpO1xuICAvLyBMb29zZW5lc3MgaXMgaWdub3JlZCBoZXJlLiAgc3RhciBpcyBhbHdheXMgYXMgbG9vc2UgYXMgaXQgZ2V0cyFcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnJlcGxhY2UocmVbU1RBUl0sICcnKTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgdG8gc3RyaW5nLnJlcGxhY2UocmVbSFlQSEVOUkFOR0VdKVxuLy8gTSwgbSwgcGF0Y2gsIHByZXJlbGVhc2UsIGJ1aWxkXG4vLyAxLjIgLSAzLjQuNSA9PiA+PTEuMi4wIDw9My40LjVcbi8vIDEuMi4zIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wIEFueSAzLjQueCB3aWxsIGRvXG4vLyAxLjIgLSAzLjQgPT4gPj0xLjIuMCA8My41LjBcbmZ1bmN0aW9uIGh5cGhlblJlcGxhY2UoJDAsXG4gICAgICAgICAgICAgICAgICAgICAgIGZyb20sIGZNLCBmbSwgZnAsIGZwciwgZmIsXG4gICAgICAgICAgICAgICAgICAgICAgIHRvLCB0TSwgdG0sIHRwLCB0cHIsIHRiKSB7XG5cbiAgaWYgKGlzWChmTSkpXG4gICAgZnJvbSA9ICcnO1xuICBlbHNlIGlmIChpc1goZm0pKVxuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLjAuMCc7XG4gIGVsc2UgaWYgKGlzWChmcCkpXG4gICAgZnJvbSA9ICc+PScgKyBmTSArICcuJyArIGZtICsgJy4wJztcbiAgZWxzZVxuICAgIGZyb20gPSAnPj0nICsgZnJvbTtcblxuICBpZiAoaXNYKHRNKSlcbiAgICB0byA9ICcnO1xuICBlbHNlIGlmIChpc1godG0pKVxuICAgIHRvID0gJzwnICsgKCt0TSArIDEpICsgJy4wLjAnO1xuICBlbHNlIGlmIChpc1godHApKVxuICAgIHRvID0gJzwnICsgdE0gKyAnLicgKyAoK3RtICsgMSkgKyAnLjAnO1xuICBlbHNlIGlmICh0cHIpXG4gICAgdG8gPSAnPD0nICsgdE0gKyAnLicgKyB0bSArICcuJyArIHRwICsgJy0nICsgdHByO1xuICBlbHNlXG4gICAgdG8gPSAnPD0nICsgdG87XG5cbiAgcmV0dXJuIChmcm9tICsgJyAnICsgdG8pLnRyaW0oKTtcbn1cblxuXG4vLyBpZiBBTlkgb2YgdGhlIHNldHMgbWF0Y2ggQUxMIG9mIGl0cyBjb21wYXJhdG9ycywgdGhlbiBwYXNzXG5SYW5nZS5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgaWYgKCF2ZXJzaW9uKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKVxuICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGVzdFNldCh0aGlzLnNldFtpXSwgdmVyc2lvbikpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5mdW5jdGlvbiB0ZXN0U2V0KHNldCwgdmVyc2lvbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICghc2V0W2ldLnRlc3QodmVyc2lvbikpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodmVyc2lvbi5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgIC8vIEZpbmQgdGhlIHNldCBvZiB2ZXJzaW9ucyB0aGF0IGFyZSBhbGxvd2VkIHRvIGhhdmUgcHJlcmVsZWFzZXNcbiAgICAvLyBGb3IgZXhhbXBsZSwgXjEuMi4zLXByLjEgZGVzdWdhcnMgdG8gPj0xLjIuMy1wci4xIDwyLjAuMFxuICAgIC8vIFRoYXQgc2hvdWxkIGFsbG93IGAxLjIuMy1wci4yYCB0byBwYXNzLlxuICAgIC8vIEhvd2V2ZXIsIGAxLjIuNC1hbHBoYS5ub3RyZWFkeWAgc2hvdWxkIE5PVCBiZSBhbGxvd2VkLFxuICAgIC8vIGV2ZW4gdGhvdWdoIGl0J3Mgd2l0aGluIHRoZSByYW5nZSBzZXQgYnkgdGhlIGNvbXBhcmF0b3JzLlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWJ1ZyhzZXRbaV0uc2VtdmVyKTtcbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyID09PSBBTlkpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoc2V0W2ldLnNlbXZlci5wcmVyZWxlYXNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGFsbG93ZWQgPSBzZXRbaV0uc2VtdmVyO1xuICAgICAgICBpZiAoYWxsb3dlZC5tYWpvciA9PT0gdmVyc2lvbi5tYWpvciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5taW5vciA9PT0gdmVyc2lvbi5taW5vciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5wYXRjaCA9PT0gdmVyc2lvbi5wYXRjaClcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBWZXJzaW9uIGhhcyBhIC1wcmUsIGJ1dCBpdCdzIG5vdCBvbmUgb2YgdGhlIG9uZXMgd2UgbGlrZS5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0cy5zYXRpc2ZpZXMgPSBzYXRpc2ZpZXM7XG5mdW5jdGlvbiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHRyeSB7XG4gICAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHJhbmdlLnRlc3QodmVyc2lvbik7XG59XG5cbmV4cG9ydHMubWF4U2F0aXNmeWluZyA9IG1heFNhdGlzZnlpbmc7XG5mdW5jdGlvbiBtYXhTYXRpc2Z5aW5nKHZlcnNpb25zLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIHZlcnNpb25zLmZpbHRlcihmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpO1xuICB9KS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gcmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KVswXSB8fCBudWxsO1xufVxuXG5leHBvcnRzLm1pblNhdGlzZnlpbmcgPSBtaW5TYXRpc2Z5aW5nO1xuZnVuY3Rpb24gbWluU2F0aXNmeWluZyh2ZXJzaW9ucywgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiB2ZXJzaW9ucy5maWx0ZXIoZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKTtcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KVswXSB8fCBudWxsO1xufVxuXG5leHBvcnRzLnZhbGlkUmFuZ2UgPSB2YWxpZFJhbmdlO1xuZnVuY3Rpb24gdmFsaWRSYW5nZShyYW5nZSwgbG9vc2UpIHtcbiAgdHJ5IHtcbiAgICAvLyBSZXR1cm4gJyonIGluc3RlYWQgb2YgJycgc28gdGhhdCB0cnV0aGluZXNzIHdvcmtzLlxuICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBpZiBpdCdzIGludmFsaWQgYW55d2F5XG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpLnJhbmdlIHx8ICcqJztcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBsZXNzIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2VcbmV4cG9ydHMubHRyID0gbHRyO1xuZnVuY3Rpb24gbHRyKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJzwnLCBsb29zZSk7XG59XG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGdyZWF0ZXIgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZS5cbmV4cG9ydHMuZ3RyID0gZ3RyO1xuZnVuY3Rpb24gZ3RyKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJz4nLCBsb29zZSk7XG59XG5cbmV4cG9ydHMub3V0c2lkZSA9IG91dHNpZGU7XG5mdW5jdGlvbiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCBoaWxvLCBsb29zZSkge1xuICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG4gIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG5cbiAgdmFyIGd0Zm4sIGx0ZWZuLCBsdGZuLCBjb21wLCBlY29tcDtcbiAgc3dpdGNoIChoaWxvKSB7XG4gICAgY2FzZSAnPic6XG4gICAgICBndGZuID0gZ3Q7XG4gICAgICBsdGVmbiA9IGx0ZTtcbiAgICAgIGx0Zm4gPSBsdDtcbiAgICAgIGNvbXAgPSAnPic7XG4gICAgICBlY29tcCA9ICc+PSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICc8JzpcbiAgICAgIGd0Zm4gPSBsdDtcbiAgICAgIGx0ZWZuID0gZ3RlO1xuICAgICAgbHRmbiA9IGd0O1xuICAgICAgY29tcCA9ICc8JztcbiAgICAgIGVjb21wID0gJzw9JztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IHByb3ZpZGUgYSBoaWxvIHZhbCBvZiBcIjxcIiBvciBcIj5cIicpO1xuICB9XG5cbiAgLy8gSWYgaXQgc2F0aXNpZmVzIHRoZSByYW5nZSBpdCBpcyBub3Qgb3V0c2lkZVxuICBpZiAoc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBGcm9tIG5vdyBvbiwgdmFyaWFibGUgdGVybXMgYXJlIGFzIGlmIHdlJ3JlIGluIFwiZ3RyXCIgbW9kZS5cbiAgLy8gYnV0IG5vdGUgdGhhdCBldmVyeXRoaW5nIGlzIGZsaXBwZWQgZm9yIHRoZSBcImx0clwiIGZ1bmN0aW9uLlxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmFuZ2Uuc2V0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGNvbXBhcmF0b3JzID0gcmFuZ2Uuc2V0W2ldO1xuXG4gICAgdmFyIGhpZ2ggPSBudWxsO1xuICAgIHZhciBsb3cgPSBudWxsO1xuXG4gICAgY29tcGFyYXRvcnMuZm9yRWFjaChmdW5jdGlvbihjb21wYXJhdG9yKSB7XG4gICAgICBpZiAoY29tcGFyYXRvci5zZW12ZXIgPT09IEFOWSkge1xuICAgICAgICBjb21wYXJhdG9yID0gbmV3IENvbXBhcmF0b3IoJz49MC4wLjAnKVxuICAgICAgfVxuICAgICAgaGlnaCA9IGhpZ2ggfHwgY29tcGFyYXRvcjtcbiAgICAgIGxvdyA9IGxvdyB8fCBjb21wYXJhdG9yO1xuICAgICAgaWYgKGd0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGhpZ2guc2VtdmVyLCBsb29zZSkpIHtcbiAgICAgICAgaGlnaCA9IGNvbXBhcmF0b3I7XG4gICAgICB9IGVsc2UgaWYgKGx0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGxvdy5zZW12ZXIsIGxvb3NlKSkge1xuICAgICAgICBsb3cgPSBjb21wYXJhdG9yO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSWYgdGhlIGVkZ2UgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhIG9wZXJhdG9yIHRoZW4gb3VyIHZlcnNpb25cbiAgICAvLyBpc24ndCBvdXRzaWRlIGl0XG4gICAgaWYgKGhpZ2gub3BlcmF0b3IgPT09IGNvbXAgfHwgaGlnaC5vcGVyYXRvciA9PT0gZWNvbXApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgbG93ZXN0IHZlcnNpb24gY29tcGFyYXRvciBoYXMgYW4gb3BlcmF0b3IgYW5kIG91ciB2ZXJzaW9uXG4gICAgLy8gaXMgbGVzcyB0aGFuIGl0IHRoZW4gaXQgaXNuJ3QgaGlnaGVyIHRoYW4gdGhlIHJhbmdlXG4gICAgaWYgKCghbG93Lm9wZXJhdG9yIHx8IGxvdy5vcGVyYXRvciA9PT0gY29tcCkgJiZcbiAgICAgICAgbHRlZm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGxvdy5vcGVyYXRvciA9PT0gZWNvbXAgJiYgbHRmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0cy5wcmVyZWxlYXNlID0gcHJlcmVsZWFzZTtcbmZ1bmN0aW9uIHByZXJlbGVhc2UodmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHBhcnNlZCA9IHBhcnNlKHZlcnNpb24sIGxvb3NlKTtcbiAgcmV0dXJuIChwYXJzZWQgJiYgcGFyc2VkLnByZXJlbGVhc2UubGVuZ3RoKSA/IHBhcnNlZC5wcmVyZWxlYXNlIDogbnVsbDtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L3NlbXZlci9zZW12ZXIuanNcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFZpZXdNb2RlbCBDb25zdHJ1Y3RvciAmIGRlZmluaXRpb25cbiAqL1xuXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtcbiAgaW5pdFN0YXRlXG59IGZyb20gJy4uL2NvcmUvc3RhdGUnXG5pbXBvcnQge1xuICBidWlsZFxufSBmcm9tICcuL2NvbXBpbGVyJ1xuaW1wb3J0IHtcbiAgaW5pdEV2ZW50cyxcbiAgbWl4aW5FdmVudHNcbn0gZnJvbSAnLi9ldmVudHMnXG5cbi8qKlxuICogVmlld01vZGVsIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zICAgIGNvbXBvbmVudCBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyZW50Vm0gICB3aGljaCBjb250YWlucyBfYXBwXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyZW50RWwgICByb290IGVsZW1lbnQgb3IgZnJhZyBibG9ja1xuICogQHBhcmFtIHtvYmplY3R9IG1lcmdlZERhdGEgZXh0ZXJuYWwgZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IGV4dGVybmFsRXZlbnRzIGV4dGVybmFsIGV2ZW50c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWbSAoXG4gIHR5cGUsXG4gIG9wdGlvbnMsXG4gIHBhcmVudFZtLFxuICBwYXJlbnRFbCxcbiAgbWVyZ2VkRGF0YSxcbiAgZXh0ZXJuYWxFdmVudHNcbikge1xuICB0aGlzLl9wYXJlbnQgPSBwYXJlbnRWbS5fcmVhbFBhcmVudCA/IHBhcmVudFZtLl9yZWFsUGFyZW50IDogcGFyZW50Vm1cbiAgdGhpcy5fYXBwID0gcGFyZW50Vm0uX2FwcFxuICBwYXJlbnRWbS5fY2hpbGRyZW5WbXMgJiYgcGFyZW50Vm0uX2NoaWxkcmVuVm1zLnB1c2godGhpcylcblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gdGhpcy5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcFt0eXBlXSB8fCB7fVxuICB9XG4gIGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGEgfHwge31cblxuICB0aGlzLl9vcHRpb25zID0gb3B0aW9uc1xuICB0aGlzLl9tZXRob2RzID0gb3B0aW9ucy5tZXRob2RzIHx8IHt9XG4gIHRoaXMuX2NvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCB7fVxuICB0aGlzLl9jc3MgPSBvcHRpb25zLnN0eWxlIHx8IHt9XG4gIHRoaXMuX2lkcyA9IHt9XG4gIHRoaXMuX3ZtRXZlbnRzID0ge31cbiAgdGhpcy5fY2hpbGRyZW5WbXMgPSBbXVxuICB0aGlzLl90eXBlID0gdHlwZVxuXG4gIC8vIGJpbmQgZXZlbnRzIGFuZCBsaWZlY3ljbGVzXG4gIGluaXRFdmVudHModGhpcywgZXh0ZXJuYWxFdmVudHMpXG5cbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gXCJpbml0XCIgbGlmZWN5Y2xlIGluIFZtKCR7dGhpcy5fdHlwZX0pYClcbiAgdGhpcy4kZW1pdCgnaG9vazppbml0JylcbiAgdGhpcy5faW5pdGVkID0gdHJ1ZVxuXG4gIC8vIHByb3h5IGRhdGEgYW5kIG1ldGhvZHNcbiAgLy8gb2JzZXJ2ZSBkYXRhIGFuZCBhZGQgdGhpcyB0byB2bXNcbiAgdGhpcy5fZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nID8gZGF0YSgpIDogZGF0YVxuICBpZiAobWVyZ2VkRGF0YSkge1xuICAgIGV4dGVuZCh0aGlzLl9kYXRhLCBtZXJnZWREYXRhKVxuICB9XG4gIGluaXRTdGF0ZSh0aGlzKVxuXG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFwiY3JlYXRlZFwiIGxpZmVjeWNsZSBpbiBWbSgke3RoaXMuX3R5cGV9KWApXG4gIHRoaXMuJGVtaXQoJ2hvb2s6Y3JlYXRlZCcpXG4gIHRoaXMuX2NyZWF0ZWQgPSB0cnVlXG5cbiAgLy8gYmFja3dhcmQgb2xkIHJlYWR5IGVudHJ5XG4gIGlmIChvcHRpb25zLm1ldGhvZHMgJiYgb3B0aW9ucy5tZXRob2RzLnJlYWR5KSB7XG4gICAgY29uc29sZS53YXJuKCdcImV4cG9ydHMubWV0aG9kcy5yZWFkeVwiIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgJ3BsZWFzZSB1c2UgXCJleHBvcnRzLmNyZWF0ZWRcIiBpbnN0ZWFkJylcbiAgICBvcHRpb25zLm1ldGhvZHMucmVhZHkuY2FsbCh0aGlzKVxuICB9XG5cbiAgLy8gaWYgbm8gcGFyZW50RWxlbWVudCB0aGVuIHNwZWNpZnkgdGhlIGRvY3VtZW50RWxlbWVudFxuICB0aGlzLl9wYXJlbnRFbCA9IHBhcmVudEVsIHx8IHRoaXMuX2FwcC5kb2MuZG9jdW1lbnRFbGVtZW50XG4gIGJ1aWxkKHRoaXMpXG59XG5cbm1peGluRXZlbnRzKFZtLnByb3RvdHlwZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC92bS9pbmRleC5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCBXYXRjaGVyIGZyb20gJy4vd2F0Y2hlcidcbmltcG9ydCBEZXAgZnJvbSAnLi9kZXAnXG5pbXBvcnQge1xuICBvYnNlcnZlLFxuICBwcm94eSxcbiAgdW5wcm94eVxufSBmcm9tICcuL29ic2VydmVyJ1xuaW1wb3J0IHtcbiAgaXNQbGFpbk9iamVjdCxcbiAgYmluZFxufSBmcm9tICcuLi91dGlsJ1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFN0YXRlICh2bSkge1xuICB2bS5fd2F0Y2hlcnMgPSBbXVxuICBpbml0RGF0YSh2bSlcbiAgaW5pdENvbXB1dGVkKHZtKVxuICBpbml0TWV0aG9kcyh2bSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXREYXRhICh2bSkge1xuICBsZXQgZGF0YSA9IHZtLl9kYXRhXG5cbiAgaWYgKCFpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgZGF0YSA9IHt9XG4gIH1cbiAgLy8gcHJveHkgZGF0YSBvbiBpbnN0YW5jZVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSlcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgcHJveHkodm0sIGtleXNbaV0pXG4gIH1cbiAgLy8gb2JzZXJ2ZSBkYXRhXG4gIG9ic2VydmUoZGF0YSwgdm0pXG59XG5cbmZ1bmN0aW9uIG5vb3AgKCkge1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdENvbXB1dGVkICh2bSkge1xuICBjb25zdCBjb21wdXRlZCA9IHZtLl9jb21wdXRlZFxuICBpZiAoY29tcHV0ZWQpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gY29tcHV0ZWQpIHtcbiAgICAgIGNvbnN0IHVzZXJEZWYgPSBjb21wdXRlZFtrZXldXG4gICAgICBjb25zdCBkZWYgPSB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRlZi5nZXQgPSBtYWtlQ29tcHV0ZWRHZXR0ZXIodXNlckRlZiwgdm0pXG4gICAgICAgIGRlZi5zZXQgPSBub29wXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWYuZ2V0ID0gdXNlckRlZi5nZXRcbiAgICAgICAgICA/IHVzZXJEZWYuY2FjaGUgIT09IGZhbHNlXG4gICAgICAgICAgICA/IG1ha2VDb21wdXRlZEdldHRlcih1c2VyRGVmLmdldCwgdm0pXG4gICAgICAgICAgICA6IGJpbmQodXNlckRlZi5nZXQsIHZtKVxuICAgICAgICAgIDogbm9vcFxuICAgICAgICBkZWYuc2V0ID0gdXNlckRlZi5zZXRcbiAgICAgICAgICA/IGJpbmQodXNlckRlZi5zZXQsIHZtKVxuICAgICAgICAgIDogbm9vcFxuICAgICAgfVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZtLCBrZXksIGRlZilcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZUNvbXB1dGVkR2V0dGVyIChnZXR0ZXIsIG93bmVyKSB7XG4gIGNvbnN0IHdhdGNoZXIgPSBuZXcgV2F0Y2hlcihvd25lciwgZ2V0dGVyLCBudWxsLCB7XG4gICAgbGF6eTogdHJ1ZVxuICB9KVxuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIGlmICh3YXRjaGVyLmRpcnR5KSB7XG4gICAgICB3YXRjaGVyLmV2YWx1YXRlKClcbiAgICB9XG4gICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgIHdhdGNoZXIuZGVwZW5kKClcbiAgICB9XG4gICAgcmV0dXJuIHdhdGNoZXIudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1ldGhvZHMgKHZtKSB7XG4gIGNvbnN0IG1ldGhvZHMgPSB2bS5fbWV0aG9kc1xuICBpZiAobWV0aG9kcykge1xuICAgIGZvciAobGV0IGtleSBpbiBtZXRob2RzKSB7XG4gICAgICB2bVtrZXldID0gbWV0aG9kc1trZXldXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS9zdGF0ZS5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCBEZXAsIHsgcHVzaFRhcmdldCwgcG9wVGFyZ2V0IH0gZnJvbSAnLi9kZXAnXG4vLyBpbXBvcnQgeyBwdXNoV2F0Y2hlciB9IGZyb20gJy4vYmF0Y2hlcidcbmltcG9ydCB7XG4gIHdhcm4sXG4gIHJlbW92ZSxcbiAgZXh0ZW5kLFxuICBpc09iamVjdCxcbiAgcGFyc2VQYXRoLFxuICBjcmVhdGVOZXdTZXRcbiAgLy8gX1NldCBhcyBTZXRcbn0gZnJvbSAnLi4vdXRpbCdcblxubGV0IHVpZCA9IDBcblxuLyoqXG4gKiBBIHdhdGNoZXIgcGFyc2VzIGFuIGV4cHJlc3Npb24sIGNvbGxlY3RzIGRlcGVuZGVuY2llcyxcbiAqIGFuZCBmaXJlcyBjYWxsYmFjayB3aGVuIHRoZSBleHByZXNzaW9uIHZhbHVlIGNoYW5nZXMuXG4gKiBUaGlzIGlzIHVzZWQgZm9yIGJvdGggdGhlICR3YXRjaCgpIGFwaSBhbmQgZGlyZWN0aXZlcy5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBleHBPckZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqICAgICAgICAgICAgICAgICAtIHtBcnJheX0gZmlsdGVyc1xuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHR3b1dheVxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IGRlZXBcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSB1c2VyXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gc3luY1xuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IGxhenlcbiAqICAgICAgICAgICAgICAgICAtIHtGdW5jdGlvbn0gW3ByZVByb2Nlc3NdXG4gKiAgICAgICAgICAgICAgICAgLSB7RnVuY3Rpb259IFtwb3N0UHJvY2Vzc11cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhdGNoZXIgKHZtLCBleHBPckZuLCBjYiwgb3B0aW9ucykge1xuICAvLyBtaXggaW4gb3B0aW9uc1xuICBpZiAob3B0aW9ucykge1xuICAgIGV4dGVuZCh0aGlzLCBvcHRpb25zKVxuICB9XG4gIGNvbnN0IGlzRm4gPSB0eXBlb2YgZXhwT3JGbiA9PT0gJ2Z1bmN0aW9uJ1xuICB0aGlzLnZtID0gdm1cbiAgdm0uX3dhdGNoZXJzLnB1c2godGhpcylcbiAgdGhpcy5leHByZXNzaW9uID0gZXhwT3JGblxuICB0aGlzLmNiID0gY2JcbiAgdGhpcy5pZCA9ICsrdWlkIC8vIHVpZCBmb3IgYmF0Y2hpbmdcbiAgdGhpcy5hY3RpdmUgPSB0cnVlXG4gIHRoaXMuZGlydHkgPSB0aGlzLmxhenkgLy8gZm9yIGxhenkgd2F0Y2hlcnNcbiAgdGhpcy5kZXBzID0gW11cbiAgdGhpcy5uZXdEZXBzID0gW11cbiAgdGhpcy5kZXBJZHMgPSBjcmVhdGVOZXdTZXQoKSAvLyBuZXcgU2V0KClcbiAgdGhpcy5uZXdEZXBJZHMgPSBjcmVhdGVOZXdTZXQoKSAvLyBuZXcgU2V0KClcbiAgLy8gcGFyc2UgZXhwcmVzc2lvbiBmb3IgZ2V0dGVyXG4gIGlmIChpc0ZuKSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBleHBPckZuXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBwYXJzZVBhdGgoZXhwT3JGbilcbiAgICBpZiAoIXRoaXMuZ2V0dGVyKSB7XG4gICAgICB0aGlzLmdldHRlciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICdGYWlsZWQgd2F0Y2hpbmcgcGF0aDogJyArIGV4cE9yRm4gK1xuICAgICAgICAnV2F0Y2hlciBvbmx5IGFjY2VwdHMgc2ltcGxlIGRvdC1kZWxpbWl0ZWQgcGF0aHMuICcgK1xuICAgICAgICAnRm9yIGZ1bGwgY29udHJvbCwgdXNlIGEgZnVuY3Rpb24gaW5zdGVhZC4nLFxuICAgICAgICB2bVxuICAgICAgKVxuICAgIH1cbiAgfVxuICB0aGlzLnZhbHVlID0gdGhpcy5sYXp5XG4gICAgPyB1bmRlZmluZWRcbiAgICA6IHRoaXMuZ2V0KClcbiAgLy8gc3RhdGUgZm9yIGF2b2lkaW5nIGZhbHNlIHRyaWdnZXJzIGZvciBkZWVwIGFuZCBBcnJheVxuICAvLyB3YXRjaGVycyBkdXJpbmcgdm0uX2RpZ2VzdCgpXG4gIHRoaXMucXVldWVkID0gdGhpcy5zaGFsbG93ID0gZmFsc2Vcbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgZ2V0dGVyLCBhbmQgcmUtY29sbGVjdCBkZXBlbmRlbmNpZXMuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICBwdXNoVGFyZ2V0KHRoaXMpXG4gIGNvbnN0IHZhbHVlID0gdGhpcy5nZXR0ZXIuY2FsbCh0aGlzLnZtLCB0aGlzLnZtKVxuICAvLyBcInRvdWNoXCIgZXZlcnkgcHJvcGVydHkgc28gdGhleSBhcmUgYWxsIHRyYWNrZWQgYXNcbiAgLy8gZGVwZW5kZW5jaWVzIGZvciBkZWVwIHdhdGNoaW5nXG4gIGlmICh0aGlzLmRlZXApIHtcbiAgICB0cmF2ZXJzZSh2YWx1ZSlcbiAgfVxuICBwb3BUYXJnZXQoKVxuICB0aGlzLmNsZWFudXBEZXBzKClcbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogQWRkIGEgZGVwZW5kZW5jeSB0byB0aGlzIGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge0RlcH0gZGVwXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuYWRkRGVwID0gZnVuY3Rpb24gKGRlcCkge1xuICBjb25zdCBpZCA9IGRlcC5pZFxuICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhpZCkpIHtcbiAgICB0aGlzLm5ld0RlcElkcy5hZGQoaWQpXG4gICAgdGhpcy5uZXdEZXBzLnB1c2goZGVwKVxuICAgIGlmICghdGhpcy5kZXBJZHMuaGFzKGlkKSkge1xuICAgICAgZGVwLmFkZFN1Yih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENsZWFuIHVwIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuY2xlYW51cERlcHMgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBpID0gdGhpcy5kZXBzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgY29uc3QgZGVwID0gdGhpcy5kZXBzW2ldXG4gICAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoZGVwLmlkKSkge1xuICAgICAgZGVwLnJlbW92ZVN1Yih0aGlzKVxuICAgIH1cbiAgfVxuICBsZXQgdG1wID0gdGhpcy5kZXBJZHNcbiAgdGhpcy5kZXBJZHMgPSB0aGlzLm5ld0RlcElkc1xuICB0aGlzLm5ld0RlcElkcyA9IHRtcFxuICB0aGlzLm5ld0RlcElkcy5jbGVhcigpXG4gIHRtcCA9IHRoaXMuZGVwc1xuICB0aGlzLmRlcHMgPSB0aGlzLm5ld0RlcHNcbiAgdGhpcy5uZXdEZXBzID0gdG1wXG4gIHRoaXMubmV3RGVwcy5sZW5ndGggPSAwXG59XG5cbi8qKlxuICogU3Vic2NyaWJlciBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCB3aGVuIGEgZGVwZW5kZW5jeSBjaGFuZ2VzLlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc2hhbGxvd1xuICovXG5cbldhdGNoZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChzaGFsbG93KSB7XG4gIGlmICh0aGlzLmxhenkpIHtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIHRoaXMucnVuKClcbiAgfVxuICAvLyB9IGVsc2UgaWYgKHRoaXMuc3luYykge1xuICAvLyAgIHRoaXMucnVuKClcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICAvLyBpZiBxdWV1ZWQsIG9ubHkgb3ZlcndyaXRlIHNoYWxsb3cgd2l0aCBub24tc2hhbGxvdyxcbiAgLy8gICAvLyBidXQgbm90IHRoZSBvdGhlciB3YXkgYXJvdW5kLlxuICAvLyAgIHRoaXMuc2hhbGxvdyA9IHRoaXMucXVldWVkXG4gIC8vICAgICA/IHNoYWxsb3dcbiAgLy8gICAgICAgPyB0aGlzLnNoYWxsb3dcbiAgLy8gICAgICAgOiBmYWxzZVxuICAvLyAgICAgOiAhIXNoYWxsb3dcbiAgLy8gICB0aGlzLnF1ZXVlZCA9IHRydWVcbiAgLy8gICBwdXNoV2F0Y2hlcih0aGlzKVxuICAvLyB9XG59XG5cbi8qKlxuICogQmF0Y2hlciBqb2IgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgYnkgdGhlIGJhdGNoZXIuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KClcbiAgICBpZiAoXG4gICAgICB2YWx1ZSAhPT0gdGhpcy52YWx1ZSB8fFxuICAgICAgLy8gRGVlcCB3YXRjaGVycyBhbmQgd2F0Y2hlcnMgb24gT2JqZWN0L0FycmF5cyBzaG91bGQgZmlyZSBldmVuXG4gICAgICAvLyB3aGVuIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZSwgYmVjYXVzZSB0aGUgdmFsdWUgbWF5XG4gICAgICAvLyBoYXZlIG11dGF0ZWQ7IGJ1dCBvbmx5IGRvIHNvIGlmIHRoaXMgaXMgYVxuICAgICAgLy8gbm9uLXNoYWxsb3cgdXBkYXRlIChjYXVzZWQgYnkgYSB2bSBkaWdlc3QpLlxuICAgICAgKChpc09iamVjdCh2YWx1ZSkgfHwgdGhpcy5kZWVwKSAmJiAhdGhpcy5zaGFsbG93KVxuICAgICkge1xuICAgICAgLy8gc2V0IG5ldyB2YWx1ZVxuICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnZhbHVlXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpXG4gICAgfVxuICAgIHRoaXMucXVldWVkID0gdGhpcy5zaGFsbG93ID0gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSB2YWx1ZSBvZiB0aGUgd2F0Y2hlci5cbiAqIFRoaXMgb25seSBnZXRzIGNhbGxlZCBmb3IgbGF6eSB3YXRjaGVycy5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5ldmFsdWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0KClcbiAgdGhpcy5kaXJ0eSA9IGZhbHNlXG59XG5cbi8qKlxuICogRGVwZW5kIG9uIGFsbCBkZXBzIGNvbGxlY3RlZCBieSB0aGlzIHdhdGNoZXIuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gKCkge1xuICBsZXQgaSA9IHRoaXMuZGVwcy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIHRoaXMuZGVwc1tpXS5kZXBlbmQoKVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIHNlbGYgZnJvbSBhbGwgZGVwZW5kZW5jaWVzJyBzdWJjcmliZXIgbGlzdC5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSB2bSdzIHdhdGNoZXIgbGlzdFxuICAgIC8vIHRoaXMgaXMgYSBzb21ld2hhdCBleHBlbnNpdmUgb3BlcmF0aW9uIHNvIHdlIHNraXAgaXRcbiAgICAvLyBpZiB0aGUgdm0gaXMgYmVpbmcgZGVzdHJveWVkIG9yIGlzIHBlcmZvcm1pbmcgYSB2LWZvclxuICAgIC8vIHJlLXJlbmRlciAodGhlIHdhdGNoZXIgbGlzdCBpcyB0aGVuIGZpbHRlcmVkIGJ5IHYtZm9yKS5cbiAgICBpZiAoIXRoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWQgJiYgIXRoaXMudm0uX3ZGb3JSZW1vdmluZykge1xuICAgICAgcmVtb3ZlKHRoaXMudm0uX3dhdGNoZXJzLCB0aGlzKVxuICAgIH1cbiAgICBsZXQgaSA9IHRoaXMuZGVwcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLmRlcHNbaV0ucmVtb3ZlU3ViKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2VcbiAgICB0aGlzLnZtID0gdGhpcy5jYiA9IHRoaXMudmFsdWUgPSBudWxsXG4gIH1cbn1cblxuLyoqXG4gKiBSZWNydXNpdmVseSB0cmF2ZXJzZSBhbiBvYmplY3QgdG8gZXZva2UgYWxsIGNvbnZlcnRlZFxuICogZ2V0dGVycywgc28gdGhhdCBldmVyeSBuZXN0ZWQgcHJvcGVydHkgaW5zaWRlIHRoZSBvYmplY3RcbiAqIGlzIGNvbGxlY3RlZCBhcyBhIFwiZGVlcFwiIGRlcGVuZGVuY3kuXG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEBwYXJhbSB7U2V0fSBzZWVuXG4gKi9cblxuY29uc3Qgc2Vlbk9iamVjdHMgPSBjcmVhdGVOZXdTZXQoKSAvLyBuZXcgU2V0KClcbmZ1bmN0aW9uIHRyYXZlcnNlICh2YWwsIHNlZW4pIHtcbiAgbGV0IGksIGtleXMsIGlzQSwgaXNPXG4gIGlmICghc2Vlbikge1xuICAgIHNlZW4gPSBzZWVuT2JqZWN0c1xuICAgIHNlZW4uY2xlYXIoKVxuICB9XG4gIGlzQSA9IEFycmF5LmlzQXJyYXkodmFsKVxuICBpc08gPSBpc09iamVjdCh2YWwpXG4gIGlmIChpc0EgfHwgaXNPKSB7XG4gICAgaWYgKHZhbC5fX29iX18pIHtcbiAgICAgIGNvbnN0IGRlcElkID0gdmFsLl9fb2JfXy5kZXAuaWRcbiAgICAgIGlmIChzZWVuLmhhcyhkZXBJZCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWVuLmFkZChkZXBJZClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzQSkge1xuICAgICAgaSA9IHZhbC5sZW5ndGhcbiAgICAgIHdoaWxlIChpLS0pIHRyYXZlcnNlKHZhbFtpXSwgc2VlbilcbiAgICB9IGVsc2UgaWYgKGlzTykge1xuICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbClcbiAgICAgIGkgPSBrZXlzLmxlbmd0aFxuICAgICAgd2hpbGUgKGktLSkgdHJhdmVyc2UodmFsW2tleXNbaV1dLCBzZWVuKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2NvcmUvd2F0Y2hlci5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IHJlbW92ZSB9IGZyb20gJy4uL3V0aWwnXG5cbmxldCB1aWQgPSAwXG5cbi8qKlxuICogQSBkZXAgaXMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNhbiBoYXZlIG11bHRpcGxlXG4gKiBkaXJlY3RpdmVzIHN1YnNjcmliaW5nIHRvIGl0LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlcCAoKSB7XG4gIHRoaXMuaWQgPSB1aWQrK1xuICB0aGlzLnN1YnMgPSBbXVxufVxuXG4vLyB0aGUgY3VycmVudCB0YXJnZXQgd2F0Y2hlciBiZWluZyBldmFsdWF0ZWQuXG4vLyB0aGlzIGlzIGdsb2JhbGx5IHVuaXF1ZSBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG9ubHkgb25lXG4vLyB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZCBhdCBhbnkgdGltZS5cbkRlcC50YXJnZXQgPSBudWxsXG5jb25zdCB0YXJnZXRTdGFjayA9IFtdXG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoVGFyZ2V0IChfdGFyZ2V0KSB7XG4gIGlmIChEZXAudGFyZ2V0KSB0YXJnZXRTdGFjay5wdXNoKERlcC50YXJnZXQpXG4gIERlcC50YXJnZXQgPSBfdGFyZ2V0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BUYXJnZXQgKCkge1xuICBEZXAudGFyZ2V0ID0gdGFyZ2V0U3RhY2sucG9wKClcbn1cblxuLyoqXG4gKiBBZGQgYSBkaXJlY3RpdmUgc3Vic2NyaWJlci5cbiAqXG4gKiBAcGFyYW0ge0RpcmVjdGl2ZX0gc3ViXG4gKi9cblxuRGVwLnByb3RvdHlwZS5hZGRTdWIgPSBmdW5jdGlvbiAoc3ViKSB7XG4gIHRoaXMuc3Vicy5wdXNoKHN1Yilcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBkaXJlY3RpdmUgc3Vic2NyaWJlci5cbiAqXG4gKiBAcGFyYW0ge0RpcmVjdGl2ZX0gc3ViXG4gKi9cblxuRGVwLnByb3RvdHlwZS5yZW1vdmVTdWIgPSBmdW5jdGlvbiAoc3ViKSB7XG4gIHJlbW92ZSh0aGlzLnN1YnMsIHN1Yilcbn1cblxuLyoqXG4gKiBBZGQgc2VsZiBhcyBhIGRlcGVuZGVuY3kgdG8gdGhlIHRhcmdldCB3YXRjaGVyLlxuICovXG5cbkRlcC5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gKCkge1xuICBpZiAoRGVwLnRhcmdldCkge1xuICAgIERlcC50YXJnZXQuYWRkRGVwKHRoaXMpXG4gIH1cbn1cblxuLyoqXG4gKiBOb3RpZnkgYWxsIHN1YnNjcmliZXJzIG9mIGEgbmV3IHZhbHVlLlxuICovXG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAvLyBzdGFibGl6ZSB0aGUgc3Vic2NyaWJlciBsaXN0IGZpcnN0XG4gIGNvbnN0IHN1YnMgPSB0aGlzLnN1YnMuc2xpY2UoKVxuICBmb3IgKGxldCBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3Vic1tpXS51cGRhdGUoKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS9kZXAuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgRGVwIGZyb20gJy4vZGVwJ1xuaW1wb3J0IHsgYXJyYXlNZXRob2RzIH0gZnJvbSAnLi9hcnJheSdcbmltcG9ydCB7XG4gIGRlZixcbiAgcmVtb3ZlLFxuICBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdCxcbiAgaGFzUHJvdG8sXG4gIGhhc093bixcbiAgaXNSZXNlcnZlZFxufSBmcm9tICcuLi91dGlsJ1xuXG5jb25zdCBhcnJheUtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhcnJheU1ldGhvZHMpXG5cbi8qKlxuICogT2JzZXJ2ZXIgY2xhc3MgdGhhdCBhcmUgYXR0YWNoZWQgdG8gZWFjaCBvYnNlcnZlZFxuICogb2JqZWN0LiBPbmNlIGF0dGFjaGVkLCB0aGUgb2JzZXJ2ZXIgY29udmVydHMgdGFyZ2V0XG4gKiBvYmplY3QncyBwcm9wZXJ0eSBrZXlzIGludG8gZ2V0dGVyL3NldHRlcnMgdGhhdFxuICogY29sbGVjdCBkZXBlbmRlbmNpZXMgYW5kIGRpc3BhdGNoZXMgdXBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gdmFsdWVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBPYnNlcnZlciAodmFsdWUpIHtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIHRoaXMuZGVwID0gbmV3IERlcCgpXG4gIGRlZih2YWx1ZSwgJ19fb2JfXycsIHRoaXMpXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGNvbnN0IGF1Z21lbnQgPSBoYXNQcm90b1xuICAgICAgPyBwcm90b0F1Z21lbnRcbiAgICAgIDogY29weUF1Z21lbnRcbiAgICBhdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cylcbiAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSlcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhbGsodmFsdWUpXG4gIH1cbn1cblxuLy8gSW5zdGFuY2UgbWV0aG9kc1xuXG4vKipcbiAqIFdhbGsgdGhyb3VnaCBlYWNoIHByb3BlcnR5IGFuZCBjb252ZXJ0IHRoZW0gaW50b1xuICogZ2V0dGVyL3NldHRlcnMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuXG4gKiB2YWx1ZSB0eXBlIGlzIE9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLndhbGsgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICB0aGlzLmNvbnZlcnQoa2V5LCBvYmpba2V5XSlcbiAgfVxufVxuXG4vKipcbiAqIE9ic2VydmUgYSBsaXN0IG9mIEFycmF5IGl0ZW1zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmVBcnJheSA9IGZ1bmN0aW9uIChpdGVtcykge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIG9ic2VydmUoaXRlbXNbaV0pXG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgcHJvcGVydHkgaW50byBnZXR0ZXIvc2V0dGVyIHNvIHdlIGNhbiBlbWl0XG4gKiB0aGUgZXZlbnRzIHdoZW4gdGhlIHByb3BlcnR5IGlzIGFjY2Vzc2VkL2NoYW5nZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uIChrZXksIHZhbCkge1xuICBkZWZpbmVSZWFjdGl2ZSh0aGlzLnZhbHVlLCBrZXksIHZhbClcbn1cblxuLyoqXG4gKiBBZGQgYW4gb3duZXIgdm0sIHNvIHRoYXQgd2hlbiAkc2V0LyRkZWxldGUgbXV0YXRpb25zXG4gKiBoYXBwZW4gd2UgY2FuIG5vdGlmeSBvd25lciB2bXMgdG8gcHJveHkgdGhlIGtleXMgYW5kXG4gKiBkaWdlc3QgdGhlIHdhdGNoZXJzLiBUaGlzIGlzIG9ubHkgY2FsbGVkIHdoZW4gdGhlIG9iamVjdFxuICogaXMgb2JzZXJ2ZWQgYXMgYW4gaW5zdGFuY2UncyByb290ICRkYXRhLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5hZGRWbSA9IGZ1bmN0aW9uICh2bSkge1xuICAodGhpcy52bXMgfHwgKHRoaXMudm1zID0gW10pKS5wdXNoKHZtKVxufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBvd25lciB2bS4gVGhpcyBpcyBjYWxsZWQgd2hlbiB0aGUgb2JqZWN0IGlzXG4gKiBzd2FwcGVkIG91dCBhcyBhbiBpbnN0YW5jZSdzICRkYXRhIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUucmVtb3ZlVm0gPSBmdW5jdGlvbiAodm0pIHtcbiAgcmVtb3ZlKHRoaXMudm1zLCB2bSlcbn1cblxuLy8gaGVscGVyc1xuXG4vKipcbiAqIEF1Z21lbnQgYW4gdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBpbnRlcmNlcHRpbmdcbiAqIHRoZSBwcm90b3R5cGUgY2hhaW4gdXNpbmcgX19wcm90b19fXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3R9IHNyY1xuICovXG5cbmZ1bmN0aW9uIHByb3RvQXVnbWVudCAodGFyZ2V0LCBzcmMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgdGFyZ2V0Ll9fcHJvdG9fXyA9IHNyY1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXByb3RvICovXG59XG5cbi8qKlxuICogQXVnbWVudCBhbiB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGRlZmluaW5nXG4gKiBoaWRkZW4gcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gdGFyZ2V0XG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG9cbiAqL1xuXG5mdW5jdGlvbiBjb3B5QXVnbWVudCAodGFyZ2V0LCBzcmMsIGtleXMpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBkZWYodGFyZ2V0LCBrZXksIHNyY1trZXldKVxuICB9XG59XG5cbi8qKlxuICogQXR0ZW1wdCB0byBjcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgZm9yIGEgdmFsdWUsXG4gKiByZXR1cm5zIHRoZSBuZXcgb2JzZXJ2ZXIgaWYgc3VjY2Vzc2Z1bGx5IG9ic2VydmVkLFxuICogb3IgdGhlIGV4aXN0aW5nIG9ic2VydmVyIGlmIHRoZSB2YWx1ZSBhbHJlYWR5IGhhcyBvbmUuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtWdWV9IFt2bV1cbiAqIEByZXR1cm4ge09ic2VydmVyfHVuZGVmaW5lZH1cbiAqIEBzdGF0aWNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZSAodmFsdWUsIHZtKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgbGV0IG9iXG4gIGlmIChoYXNPd24odmFsdWUsICdfX29iX18nKSAmJiB2YWx1ZS5fX29iX18gaW5zdGFuY2VvZiBPYnNlcnZlcikge1xuICAgIG9iID0gdmFsdWUuX19vYl9fXG4gIH0gZWxzZSBpZiAoXG4gICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKSAmJlxuICAgIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpICYmXG4gICAgIXZhbHVlLl9pc1Z1ZVxuICApIHtcbiAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSlcbiAgfVxuICBpZiAob2IgJiYgdm0pIHtcbiAgICBvYi5hZGRWbSh2bSlcbiAgfVxuICByZXR1cm4gb2Jcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiBhbiBPYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lUmVhY3RpdmUgKG9iaiwga2V5LCB2YWwpIHtcbiAgY29uc3QgZGVwID0gbmV3IERlcCgpXG5cbiAgY29uc3QgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KVxuICBpZiAocHJvcGVydHkgJiYgcHJvcGVydHkuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gY2F0ZXIgZm9yIHByZS1kZWZpbmVkIGdldHRlci9zZXR0ZXJzXG4gIGNvbnN0IGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldFxuICBjb25zdCBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXRcblxuICBsZXQgY2hpbGRPYiA9IG9ic2VydmUodmFsKVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlR2V0dGVyICgpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbFxuICAgICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgICAgZGVwLmRlcGVuZCgpXG4gICAgICAgIGlmIChjaGlsZE9iKSB7XG4gICAgICAgICAgY2hpbGRPYi5kZXAuZGVwZW5kKClcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBmb3IgKGxldCBlLCBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgZSA9IHZhbHVlW2ldXG4gICAgICAgICAgICBlICYmIGUuX19vYl9fICYmIGUuX19vYl9fLmRlcC5kZXBlbmQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlU2V0dGVyIChuZXdWYWwpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbFxuICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gbmV3VmFsXG4gICAgICB9XG4gICAgICBjaGlsZE9iID0gb2JzZXJ2ZShuZXdWYWwpXG4gICAgICBkZXAubm90aWZ5KClcbiAgICB9XG4gIH0pXG59XG5cbi8qKlxuICogU2V0IGEgcHJvcGVydHkgb24gYW4gb2JqZWN0LiBBZGRzIHRoZSBuZXcgcHJvcGVydHkgYW5kXG4gKiB0cmlnZ2VycyBjaGFuZ2Ugbm90aWZpY2F0aW9uIGlmIHRoZSBwcm9wZXJ0eSBkb2Vzbid0XG4gKiBhbHJlYWR5IGV4aXN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcHVibGljXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldCAob2JqLCBrZXksIHZhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iai5zcGxpY2Uoa2V5LCAxLCB2YWwpXG4gIH1cbiAgaWYgKGhhc093bihvYmosIGtleSkpIHtcbiAgICBvYmpba2V5XSA9IHZhbFxuICAgIHJldHVyblxuICB9XG4gIGlmIChvYmouX2lzVnVlKSB7XG4gICAgc2V0KG9iai5fZGF0YSwga2V5LCB2YWwpXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qgb2IgPSBvYmouX19vYl9fXG4gIGlmICghb2IpIHtcbiAgICBvYmpba2V5XSA9IHZhbFxuICAgIHJldHVyblxuICB9XG4gIG9iLmNvbnZlcnQoa2V5LCB2YWwpXG4gIG9iLmRlcC5ub3RpZnkoKVxuICBpZiAob2Iudm1zKSB7XG4gICAgbGV0IGkgPSBvYi52bXMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY29uc3Qgdm0gPSBvYi52bXNbaV1cbiAgICAgIHByb3h5KHZtLCBrZXkpXG4gICAgICB2bS4kZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbi8qKlxuICogRGVsZXRlIGEgcHJvcGVydHkgYW5kIHRyaWdnZXIgY2hhbmdlIGlmIG5lY2Vzc2FyeS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbCAob2JqLCBrZXkpIHtcbiAgaWYgKCFoYXNPd24ob2JqLCBrZXkpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZGVsZXRlIG9ialtrZXldXG4gIGNvbnN0IG9iID0gb2JqLl9fb2JfX1xuXG4gIGlmICghb2IpIHtcbiAgICBpZiAob2JqLl9pc1Z1ZSkge1xuICAgICAgZGVsZXRlIG9iai5fZGF0YVtrZXldXG4gICAgICBvYmouJGZvcmNlVXBkYXRlKClcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgb2IuZGVwLm5vdGlmeSgpXG4gIGlmIChvYi52bXMpIHtcbiAgICBsZXQgaSA9IG9iLnZtcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjb25zdCB2bSA9IG9iLnZtc1tpXVxuICAgICAgdW5wcm94eSh2bSwga2V5KVxuICAgICAgdm0uJGZvcmNlVXBkYXRlKClcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgS0VZX1dPUkRTID0gWyckaW5kZXgnLCAnJHZhbHVlJywgJyRldmVudCddXG5leHBvcnQgZnVuY3Rpb24gcHJveHkgKHZtLCBrZXkpIHtcbiAgaWYgKEtFWV9XT1JEUy5pbmRleE9mKGtleSkgPiAtMSB8fCAhaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZtLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIHByb3h5R2V0dGVyICgpIHtcbiAgICAgICAgcmV0dXJuIHZtLl9kYXRhW2tleV1cbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHByb3h5U2V0dGVyICh2YWwpIHtcbiAgICAgICAgdm0uX2RhdGFba2V5XSA9IHZhbFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucHJveHkgKHZtLCBrZXkpIHtcbiAgaWYgKCFpc1Jlc2VydmVkKGtleSkpIHtcbiAgICBkZWxldGUgdm1ba2V5XVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS9vYnNlcnZlci5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IGRlZiB9IGZyb20gJy4uL3V0aWwnXG5cbmNvbnN0IGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGVcbmV4cG9ydCBjb25zdCBhcnJheU1ldGhvZHMgPSBPYmplY3QuY3JlYXRlKGFycmF5UHJvdG8pXG5cbi8qKlxuICogSW50ZXJjZXB0IG11dGF0aW5nIG1ldGhvZHMgYW5kIGVtaXQgZXZlbnRzXG4gKi9cblxuO1tcbiAgJ3B1c2gnLFxuICAncG9wJyxcbiAgJ3NoaWZ0JyxcbiAgJ3Vuc2hpZnQnLFxuICAnc3BsaWNlJyxcbiAgJ3NvcnQnLFxuICAncmV2ZXJzZSdcbl1cbi5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgLy8gY2FjaGUgb3JpZ2luYWwgbWV0aG9kXG4gIGNvbnN0IG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdXG4gIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwgZnVuY3Rpb24gbXV0YXRvciAoKSB7XG4gICAgLy8gYXZvaWQgbGVha2luZyBhcmd1bWVudHM6XG4gICAgLy8gaHR0cDovL2pzcGVyZi5jb20vY2xvc3VyZS13aXRoLWFyZ3VtZW50c1xuICAgIGxldCBpID0gYXJndW1lbnRzLmxlbmd0aFxuICAgIGNvbnN0IGFyZ3MgPSBuZXcgQXJyYXkoaSlcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldXG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgY29uc3Qgb2IgPSB0aGlzLl9fb2JfX1xuICAgIGxldCBpbnNlcnRlZFxuICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICBjYXNlICdwdXNoJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdzcGxpY2UnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3Muc2xpY2UoMilcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gICAgaWYgKGluc2VydGVkKSBvYi5vYnNlcnZlQXJyYXkoaW5zZXJ0ZWQpXG4gICAgLy8gbm90aWZ5IGNoYW5nZVxuICAgIG9iLmRlcC5ub3RpZnkoKVxuICAgIHJldHVybiByZXN1bHRcbiAgfSlcbn0pXG5cbi8qKlxuICogU3dhcCB0aGUgZWxlbWVudCBhdCB0aGUgZ2l2ZW4gaW5kZXggd2l0aCBhIG5ldyB2YWx1ZVxuICogYW5kIGVtaXRzIGNvcnJlc3BvbmRpbmcgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybiB7Kn0gLSByZXBsYWNlZCBlbGVtZW50XG4gKi9cblxuZGVmKFxuICBhcnJheVByb3RvLFxuICAnJHNldCcsXG4gIGZ1bmN0aW9uICRzZXQgKGluZGV4LCB2YWwpIHtcbiAgICBpZiAoaW5kZXggPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gaW5kZXggKyAxXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNwbGljZShpbmRleCwgMSwgdmFsKVswXVxuICB9XG4pXG5cbi8qKlxuICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHJlbW92ZSB0aGUgZWxlbWVudCBhdCBnaXZlbiBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuZGVmKFxuICBhcnJheVByb3RvLFxuICAnJHJlbW92ZScsXG4gIGZ1bmN0aW9uICRyZW1vdmUgKGluZGV4KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCF0aGlzLmxlbmd0aCkgcmV0dXJuXG4gICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5pbmRleE9mKGluZGV4KVxuICAgIH1cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG4pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS9hcnJheS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogVmlld01vZGVsIHRlbXBsYXRlIHBhcnNlciAmIGRhdGEtYmluZGluZyBwcm9jZXNzXG4gKi9cblxuaW1wb3J0IHtcbiAgZXh0ZW5kLFxuICBpc09iamVjdCxcbiAgYmluZFxufSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtcbiAgaW5pdERhdGEsXG4gIGluaXRDb21wdXRlZFxufSBmcm9tICcuLi9jb3JlL3N0YXRlJ1xuaW1wb3J0IHtcbiAgYmluZEVsZW1lbnQsXG4gIHNldElkLFxuICBiaW5kU3ViVm0sXG4gIGJpbmRTdWJWbUFmdGVySW5pdGlhbGl6ZWQsXG4gIGFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyxcbiAgd2F0Y2hcbn0gZnJvbSAnLi9kaXJlY3RpdmUnXG5pbXBvcnQge1xuICBjcmVhdGVCbG9jayxcbiAgY3JlYXRlQm9keSxcbiAgY3JlYXRlRWxlbWVudCxcbiAgYXR0YWNoVGFyZ2V0LFxuICBtb3ZlVGFyZ2V0LFxuICByZW1vdmVUYXJnZXRcbn0gZnJvbSAnLi9kb20taGVscGVyJ1xuXG4vKipcbiAqIGJ1aWxkKClcbiAqICAgY29tcGlsZSh0ZW1wbGF0ZSwgcGFyZW50Tm9kZSlcbiAqICAgICBpZiAodHlwZSBpcyBjb250ZW50KSBjcmVhdGUgY29udGVudE5vZGVcbiAqICAgICBlbHNlIGlmIChkaXJzIGhhdmUgdi1mb3IpIGZvcmVhY2ggLT4gY3JlYXRlIGNvbnRleHRcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0Rm9yLCBwYXJlbnROb2RlKTogZGlmZihsaXN0KSBvbmNoYW5nZVxuICogICAgIGVsc2UgaWYgKGRpcnMgaGF2ZSB2LWlmKSBhc3NlcnRcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0SWYsIHBhcmVudE5vZGUpOiB0b2dnbGUoc2hvd24pIG9uY2hhbmdlXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBkeW5hbWljKVxuICogICAgICAgLT4gY29tcGlsZSh0ZW1wbGF0ZVdpdGhvdXREeW5hbWljVHlwZSwgcGFyZW50Tm9kZSk6IHdhdGNoKHR5cGUpIG9uY2hhbmdlXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBjdXN0b20pXG4gKiAgICAgICBhZGRDaGlsZFZtKHZtLCBwYXJlbnRWbSlcbiAqICAgICAgIGJ1aWxkKGV4dGVybmFsRGlycylcbiAqICAgICAgIGZvcmVhY2ggY2hpbGROb2RlcyAtPiBjb21waWxlKGNoaWxkTm9kZSwgdGVtcGxhdGUpXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBuYXRpdmUpXG4gKiAgICAgICBzZXQoZGlycyk6IHVwZGF0ZShpZC9hdHRyL3N0eWxlL2NsYXNzKSBvbmNoYW5nZVxuICogICAgICAgYXBwZW5kKHRlbXBsYXRlLCBwYXJlbnROb2RlKVxuICogICAgICAgZm9yZWFjaCBjaGlsZE5vZGVzIC0+IGNvbXBpbGUoY2hpbGROb2RlLCB0ZW1wbGF0ZSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkICh2bSkge1xuICBjb25zdCBvcHQgPSB2bS5fb3B0aW9ucyB8fCB7fVxuICBjb25zdCB0ZW1wbGF0ZSA9IG9wdC50ZW1wbGF0ZSB8fCB7fVxuXG4gIGlmIChvcHQucmVwbGFjZSkge1xuICAgIGlmICh0ZW1wbGF0ZS5jaGlsZHJlbiAmJiB0ZW1wbGF0ZS5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbXBpbGUodm0sIHRlbXBsYXRlLmNoaWxkcmVuWzBdLCB2bS5fcGFyZW50RWwpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tcGlsZSh2bSwgdGVtcGxhdGUuY2hpbGRyZW4sIHZtLl9wYXJlbnRFbClcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgY29tcGlsZSh2bSwgdGVtcGxhdGUsIHZtLl9wYXJlbnRFbClcbiAgfVxuXG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFwicmVhZHlcIiBsaWZlY3ljbGUgaW4gVm0oJHt2bS5fdHlwZX0pYClcbiAgdm0uJGVtaXQoJ2hvb2s6cmVhZHknKVxuICB2bS5fcmVhZHkgPSB0cnVlXG59XG5cbi8qKlxuICogR2VuZXJhdGUgZWxlbWVudHMgYnkgY2hpbGQgb3IgY2hpbGRyZW4gYW5kIGFwcGVuZCB0byBwYXJlbnQgZWxlbWVudHMuXG4gKiBSb290IGVsZW1lbnQgaW5mbyB3b3VsZCBiZSBtZXJnZWQgaWYgaGFzLiBUaGUgZmlyc3QgYXJndW1lbnQgbWF5IGJlIGFuIGFycmF5XG4gKiBpZiB0aGUgcm9vdCBlbGVtZW50IHdpdGggb3B0aW9ucy5yZXBsYWNlIGhhcyBub3Qgb25seSBvbmUgY2hpbGQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9ICAgICAgIGRlc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSAgICAgICBtZXRhXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUgKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgY29uc3QgYXBwID0gdm0uX2FwcCB8fCB7fVxuXG4gIGlmIChhcHAubGFzdFNpZ25hbCA9PT0gLTEpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh0YXJnZXRJc0ZyYWdtZW50KHRhcmdldCkpIHtcbiAgICBjb21waWxlRnJhZ21lbnQodm0sIHRhcmdldCwgZGVzdCwgbWV0YSlcbiAgICByZXR1cm5cbiAgfVxuICBtZXRhID0gbWV0YSB8fCB7fVxuICBpZiAodGFyZ2V0SXNDb250ZW50KHRhcmdldCkpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIFwiY29udGVudFwiIGJsb2NrIGJ5JywgdGFyZ2V0KVxuICAgIHZtLl9jb250ZW50ID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodGFyZ2V0TmVlZENoZWNrUmVwZWF0KHRhcmdldCwgbWV0YSkpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIFwicmVwZWF0XCIgbG9naWMgYnknLCB0YXJnZXQpXG4gICAgaWYgKGRlc3QudHlwZSA9PT0gJ2RvY3VtZW50Jykge1xuICAgICAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBUaGUgcm9vdCBlbGVtZW50IGRvZXNcXCd0IHN1cHBvcnQgYHJlcGVhdGAgZGlyZWN0aXZlIScpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tcGlsZVJlcGVhdCh2bSwgdGFyZ2V0LCBkZXN0KVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBpZiAodGFyZ2V0TmVlZENoZWNrU2hvd24odGFyZ2V0LCBtZXRhKSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgXCJpZlwiIGxvZ2ljIGJ5JywgdGFyZ2V0KVxuICAgIGlmIChkZXN0LnR5cGUgPT09ICdkb2N1bWVudCcpIHtcbiAgICAgIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVGhlIHJvb3QgZWxlbWVudCBkb2VzXFwndCBzdXBwb3J0IGBpZmAgZGlyZWN0aXZlIScpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tcGlsZVNob3duKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpXG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHR5cGVHZXR0ZXIgPSBtZXRhLnR5cGUgfHwgdGFyZ2V0LnR5cGVcbiAgaWYgKHRhcmdldE5lZWRDaGVja1R5cGUodHlwZUdldHRlciwgbWV0YSkpIHtcbiAgICBjb21waWxlVHlwZSh2bSwgdGFyZ2V0LCBkZXN0LCB0eXBlR2V0dGVyLCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHR5cGUgPSB0eXBlR2V0dGVyXG4gIGNvbnN0IGNvbXBvbmVudCA9IHRhcmdldElzQ29tcG9zZWQodm0sIHRhcmdldCwgdHlwZSlcbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgY29tcG9zZWQgY29tcG9uZW50IGJ5JywgdGFyZ2V0KVxuICAgIGNvbXBpbGVDdXN0b21Db21wb25lbnQodm0sIGNvbXBvbmVudCwgdGFyZ2V0LCBkZXN0LCB0eXBlLCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgbmF0aXZlIGNvbXBvbmVudCBieScsIHRhcmdldClcbiAgY29tcGlsZU5hdGl2ZUNvbXBvbmVudCh2bSwgdGFyZ2V0LCBkZXN0LCB0eXBlKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBpcyBhIGZyYWdtZW50IChhbiBhcnJheSkuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXRJc0ZyYWdtZW50ICh0YXJnZXQpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCB0eXBlIGlzIGNvbnRlbnQvc2xvdC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldElzQ29udGVudCAodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQudHlwZSA9PT0gJ2NvbnRlbnQnIHx8IHRhcmdldC50eXBlID09PSAnc2xvdCdcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgbmVlZCB0byBjb21waWxlIGJ5IGEgbGlzdC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gIG1ldGFcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldE5lZWRDaGVja1JlcGVhdCAodGFyZ2V0LCBtZXRhKSB7XG4gIHJldHVybiAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgncmVwZWF0JykgJiYgdGFyZ2V0LnJlcGVhdFxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBuZWVkIHRvIGNvbXBpbGUgYnkgYSBib29sZWFuIHZhbHVlLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSAgbWV0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0TmVlZENoZWNrU2hvd24gKHRhcmdldCwgbWV0YSkge1xuICByZXR1cm4gIW1ldGEuaGFzT3duUHJvcGVydHkoJ3Nob3duJykgJiYgdGFyZ2V0LnNob3duXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IG5lZWQgdG8gY29tcGlsZSBieSBhIGR5bmFtaWMgdHlwZS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd8ZnVuY3Rpb259IHR5cGVHZXR0ZXJcbiAqIEBwYXJhbSAge29iamVjdH0gICAgICAgICAgbWV0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0TmVlZENoZWNrVHlwZSAodHlwZUdldHRlciwgbWV0YSkge1xuICByZXR1cm4gKHR5cGVvZiB0eXBlR2V0dGVyID09PSAnZnVuY3Rpb24nKSAmJiAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgndHlwZScpXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBraW5kIG9mIGNvbXBvbmVudCBpcyBjb21wb3NlZC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICB0eXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXRJc0NvbXBvc2VkICh2bSwgdGFyZ2V0LCB0eXBlKSB7XG4gIGxldCBjb21wb25lbnRcbiAgaWYgKHZtLl9hcHAgJiYgdm0uX2FwcC5jdXN0b21Db21wb25lbnRNYXApIHtcbiAgICBjb21wb25lbnQgPSB2bS5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcFt0eXBlXVxuICB9XG4gIGlmICh2bS5fb3B0aW9ucyAmJiB2bS5fb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgY29tcG9uZW50ID0gdm0uX29wdGlvbnMuY29tcG9uZW50c1t0eXBlXVxuICB9XG4gIGlmICh0YXJnZXQuY29tcG9uZW50KSB7XG4gICAgY29tcG9uZW50ID0gY29tcG9uZW50IHx8IHt9XG4gIH1cbiAgcmV0dXJuIGNvbXBvbmVudFxufVxuXG4vKipcbiAqIENvbXBpbGUgYSBsaXN0IG9mIHRhcmdldHMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVGcmFnbWVudCAodm0sIHRhcmdldCwgZGVzdCwgbWV0YSkge1xuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcbiAgdGFyZ2V0LmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgY29tcGlsZSh2bSwgY2hpbGQsIGZyYWdCbG9jaywgbWV0YSlcbiAgfSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggcmVwZWF0IGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICovXG5mdW5jdGlvbiBjb21waWxlUmVwZWF0ICh2bSwgdGFyZ2V0LCBkZXN0KSB7XG4gIGNvbnN0IHJlcGVhdCA9IHRhcmdldC5yZXBlYXRcbiAgY29uc3Qgb2xkU3R5bGUgPSB0eXBlb2YgcmVwZWF0ID09PSAnZnVuY3Rpb24nXG4gIGxldCBnZXR0ZXIgPSByZXBlYXQuZ2V0dGVyIHx8IHJlcGVhdC5leHByZXNzaW9uIHx8IHJlcGVhdFxuICBpZiAodHlwZW9mIGdldHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGdldHRlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdIH1cbiAgfVxuICBjb25zdCBrZXkgPSByZXBlYXQua2V5IHx8ICckaW5kZXgnXG4gIGNvbnN0IHZhbHVlID0gcmVwZWF0LnZhbHVlIHx8ICckdmFsdWUnXG4gIGNvbnN0IHRyYWNrQnkgPSByZXBlYXQudHJhY2tCeSB8fCB0YXJnZXQudHJhY2tCeSB8fFxuICAgICh0YXJnZXQuYXR0ciAmJiB0YXJnZXQuYXR0ci50cmFja0J5KVxuXG4gIGNvbnN0IGZyYWdCbG9jayA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuICBmcmFnQmxvY2suY2hpbGRyZW4gPSBbXVxuICBmcmFnQmxvY2suZGF0YSA9IFtdXG4gIGZyYWdCbG9jay52bXMgPSBbXVxuXG4gIGJpbmRSZXBlYXQodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCB7IGdldHRlciwga2V5LCB2YWx1ZSwgdHJhY2tCeSwgb2xkU3R5bGUgfSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggaWYgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gbWV0YVxuICovXG5mdW5jdGlvbiBjb21waWxlU2hvd24gKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgY29uc3QgbmV3TWV0YSA9IHsgc2hvd246IHRydWUgfVxuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcblxuICBpZiAoZGVzdC5lbGVtZW50ICYmIGRlc3QuY2hpbGRyZW4pIHtcbiAgICBkZXN0LmNoaWxkcmVuLnB1c2goZnJhZ0Jsb2NrKVxuICB9XG5cbiAgaWYgKG1ldGEucmVwZWF0KSB7XG4gICAgbmV3TWV0YS5yZXBlYXQgPSBtZXRhLnJlcGVhdFxuICB9XG5cbiAgYmluZFNob3duKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggZHluYW1pYyBjb21wb25lbnQgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gICB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIGRlc3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHR5cGVHZXR0ZXJcbiAqL1xuZnVuY3Rpb24gY29tcGlsZVR5cGUgKHZtLCB0YXJnZXQsIGRlc3QsIHR5cGVHZXR0ZXIsIG1ldGEpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVHZXR0ZXIuY2FsbCh2bSlcbiAgY29uc3QgbmV3TWV0YSA9IGV4dGVuZCh7IHR5cGUgfSwgbWV0YSlcbiAgY29uc3QgZnJhZ0Jsb2NrID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG5cbiAgaWYgKGRlc3QuZWxlbWVudCAmJiBkZXN0LmNoaWxkcmVuKSB7XG4gICAgZGVzdC5jaGlsZHJlbi5wdXNoKGZyYWdCbG9jaylcbiAgfVxuXG4gIHdhdGNoKHZtLCB0eXBlR2V0dGVyLCAodmFsdWUpID0+IHtcbiAgICBjb25zdCBuZXdNZXRhID0gZXh0ZW5kKHsgdHlwZTogdmFsdWUgfSwgbWV0YSlcbiAgICByZW1vdmVUYXJnZXQodm0sIGZyYWdCbG9jaywgdHJ1ZSlcbiAgICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbiAgfSlcblxuICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgY29tcG9zZWQgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICovXG5mdW5jdGlvbiBjb21waWxlQ3VzdG9tQ29tcG9uZW50ICh2bSwgY29tcG9uZW50LCB0YXJnZXQsIGRlc3QsIHR5cGUsIG1ldGEpIHtcbiAgY29uc3QgQ3RvciA9IHZtLmNvbnN0cnVjdG9yXG4gIGNvbnN0IHN1YlZtID0gbmV3IEN0b3IodHlwZSwgY29tcG9uZW50LCB2bSwgZGVzdCwgdW5kZWZpbmVkLCB7XG4gICAgJ2hvb2s6aW5pdCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldElkKHZtLCBudWxsLCB0YXJnZXQuaWQsIHRoaXMpXG4gICAgICAvLyBiaW5kIHRlbXBsYXRlIGVhcmxpZXIgYmVjYXVzZSBvZiBsaWZlY3ljbGUgaXNzdWVzXG4gICAgICB0aGlzLl9leHRlcm5hbEJpbmRpbmcgPSB7XG4gICAgICAgIHBhcmVudDogdm0sXG4gICAgICAgIHRlbXBsYXRlOiB0YXJnZXRcbiAgICAgIH1cbiAgICB9LFxuICAgICdob29rOmNyZWF0ZWQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICBiaW5kU3ViVm0odm0sIHRoaXMsIHRhcmdldCwgbWV0YS5yZXBlYXQpXG4gICAgfSxcbiAgICAnaG9vazpyZWFkeSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLl9jb250ZW50KSB7XG4gICAgICAgIGNvbXBpbGVDaGlsZHJlbih2bSwgdGFyZ2V0LCB0aGlzLl9jb250ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCh2bSwgc3ViVm0sIHRhcmdldClcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBlbGVtZW50IGZyb20gdGVtcGxhdGUgYW5kIGF0dGFjaCB0byB0aGUgZGVzdCBpZiBuZWVkZWQuXG4gKiBUaGUgdGltZSB0byBhdHRhY2ggZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBtb2RlIHN0YXR1cyBpcyBub2RlIG9yIHRyZWUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY29tcGlsZU5hdGl2ZUNvbXBvbmVudCAodm0sIHRlbXBsYXRlLCBkZXN0LCB0eXBlKSB7XG4gIGFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyh0ZW1wbGF0ZSlcblxuICBsZXQgZWxlbWVudFxuICBpZiAoZGVzdC5yZWYgPT09ICdfZG9jdW1lbnRFbGVtZW50Jykge1xuICAgIC8vIGlmIGl0cyBwYXJlbnQgaXMgZG9jdW1lbnRFbGVtZW50IHRoZW4gaXQncyBhIGJvZHlcbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGNyZWF0ZSBib2R5IGZvciAke3R5cGV9YClcbiAgICBlbGVtZW50ID0gY3JlYXRlQm9keSh2bSwgdHlwZSlcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGNyZWF0ZSBlbGVtZW50IGZvciAke3R5cGV9YClcbiAgICBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCh2bSwgdHlwZSlcbiAgfVxuXG4gIGlmICghdm0uX3Jvb3RFbCkge1xuICAgIHZtLl9yb290RWwgPSBlbGVtZW50XG4gICAgLy8gYmluZCBldmVudCBlYXJsaWVyIGJlY2F1c2Ugb2YgbGlmZWN5Y2xlIGlzc3Vlc1xuICAgIGNvbnN0IGJpbmRpbmcgPSB2bS5fZXh0ZXJuYWxCaW5kaW5nIHx8IHt9XG4gICAgY29uc3QgdGFyZ2V0ID0gYmluZGluZy50ZW1wbGF0ZVxuICAgIGNvbnN0IHBhcmVudFZtID0gYmluZGluZy5wYXJlbnRcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5ldmVudHMgJiYgcGFyZW50Vm0gJiYgZWxlbWVudCkge1xuICAgICAgZm9yIChjb25zdCB0eXBlIGluIHRhcmdldC5ldmVudHMpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHBhcmVudFZtW3RhcmdldC5ldmVudHNbdHlwZV1dXG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudCh0eXBlLCBiaW5kKGhhbmRsZXIsIHBhcmVudFZtKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJpbmRFbGVtZW50KHZtLCBlbGVtZW50LCB0ZW1wbGF0ZSlcblxuICBpZiAodGVtcGxhdGUuYXR0ciAmJiB0ZW1wbGF0ZS5hdHRyLmFwcGVuZCkgeyAvLyBiYWNrd2FyZCwgYXBwZW5kIHByb3AgaW4gYXR0clxuICAgIHRlbXBsYXRlLmFwcGVuZCA9IHRlbXBsYXRlLmF0dHIuYXBwZW5kXG4gIH1cblxuICBpZiAodGVtcGxhdGUuYXBwZW5kKSB7IC8vIGdpdmUgdGhlIGFwcGVuZCBhdHRyaWJ1dGUgZm9yIGlvcyBhZGFwdGF0aW9uXG4gICAgZWxlbWVudC5hdHRyID0gZWxlbWVudC5hdHRyIHx8IHt9XG4gICAgZWxlbWVudC5hdHRyLmFwcGVuZCA9IHRlbXBsYXRlLmFwcGVuZFxuICB9XG5cbiAgY29uc3QgdHJlZU1vZGUgPSB0ZW1wbGF0ZS5hcHBlbmQgPT09ICd0cmVlJ1xuICBjb25zdCBhcHAgPSB2bS5fYXBwIHx8IHt9XG4gIGlmIChhcHAubGFzdFNpZ25hbCAhPT0gLTEgJiYgIXRyZWVNb2RlKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBhcHBlbmQgc2luZ2xlIG5vZGUgZm9yJywgZWxlbWVudClcbiAgICBhcHAubGFzdFNpZ25hbCA9IGF0dGFjaFRhcmdldCh2bSwgZWxlbWVudCwgZGVzdClcbiAgfVxuICBpZiAoYXBwLmxhc3RTaWduYWwgIT09IC0xKSB7XG4gICAgY29tcGlsZUNoaWxkcmVuKHZtLCB0ZW1wbGF0ZSwgZWxlbWVudClcbiAgfVxuICBpZiAoYXBwLmxhc3RTaWduYWwgIT09IC0xICYmIHRyZWVNb2RlKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBhcHBlbmQgd2hvbGUgdHJlZSBmb3InLCBlbGVtZW50KVxuICAgIGFwcC5sYXN0U2lnbmFsID0gYXR0YWNoVGFyZ2V0KHZtLCBlbGVtZW50LCBkZXN0KVxuICB9XG59XG5cbi8qKlxuICogU2V0IGFsbCBjaGlsZHJlbiB0byBhIGNlcnRhaW4gcGFyZW50IGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICovXG5mdW5jdGlvbiBjb21waWxlQ2hpbGRyZW4gKHZtLCB0ZW1wbGF0ZSwgZGVzdCkge1xuICBjb25zdCBhcHAgPSB2bS5fYXBwIHx8IHt9XG4gIGNvbnN0IGNoaWxkcmVuID0gdGVtcGxhdGUuY2hpbGRyZW5cbiAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgIGNoaWxkcmVuLmV2ZXJ5KChjaGlsZCkgPT4ge1xuICAgICAgY29tcGlsZSh2bSwgY2hpbGQsIGRlc3QpXG4gICAgICByZXR1cm4gYXBwLmxhc3RTaWduYWwgIT09IC0xXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIFdhdGNoIHRoZSBsaXN0IHVwZGF0ZSBhbmQgcmVmcmVzaCB0aGUgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZnJhZ0Jsb2NrIHt2bXMsIGRhdGEsIGNoaWxkcmVufVxuICogQHBhcmFtIHtvYmplY3R9IGluZm8gICAgICB7Z2V0dGVyLCBrZXksIHZhbHVlLCB0cmFja0J5LCBvbGRTdHlsZX1cbiAqL1xuZnVuY3Rpb24gYmluZFJlcGVhdCAodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBpbmZvKSB7XG4gIGNvbnN0IHZtcyA9IGZyYWdCbG9jay52bXNcbiAgY29uc3QgY2hpbGRyZW4gPSBmcmFnQmxvY2suY2hpbGRyZW5cbiAgY29uc3QgeyBnZXR0ZXIsIHRyYWNrQnksIG9sZFN0eWxlIH0gPSBpbmZvXG4gIGNvbnN0IGtleU5hbWUgPSBpbmZvLmtleVxuICBjb25zdCB2YWx1ZU5hbWUgPSBpbmZvLnZhbHVlXG5cbiAgZnVuY3Rpb24gY29tcGlsZUl0ZW0gKGl0ZW0sIGluZGV4LCBjb250ZXh0KSB7XG4gICAgbGV0IG1lcmdlZERhdGFcbiAgICBpZiAob2xkU3R5bGUpIHtcbiAgICAgIG1lcmdlZERhdGEgPSBpdGVtXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgbWVyZ2VkRGF0YVtrZXlOYW1lXSA9IGluZGV4XG4gICAgICAgIGlmICghbWVyZ2VkRGF0YS5oYXNPd25Qcm9wZXJ0eSgnSU5ERVgnKSkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZXJnZWREYXRhLCAnSU5ERVgnLCB7XG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFwiSU5ERVhcIiBpbiByZXBlYXQgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgICAgICAgJ3BsZWFzZSB1c2UgXCIkaW5kZXhcIiBpbnN0ZWFkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBFYWNoIGxpc3QgaXRlbSBtdXN0IGJlIGFuIG9iamVjdCBpbiBvbGQtc3R5bGUgcmVwZWF0LCAnXG4gICAgICAgICAgKyAncGxlYXNlIHVzZSBgcmVwZWF0PXt7diBpbiBsaXN0fX1gIGluc3RlYWQuJylcbiAgICAgICAgbWVyZ2VkRGF0YSA9IHt9XG4gICAgICAgIG1lcmdlZERhdGFba2V5TmFtZV0gPSBpbmRleFxuICAgICAgICBtZXJnZWREYXRhW3ZhbHVlTmFtZV0gPSBpdGVtXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbWVyZ2VkRGF0YSA9IHt9XG4gICAgICBtZXJnZWREYXRhW2tleU5hbWVdID0gaW5kZXhcbiAgICAgIG1lcmdlZERhdGFbdmFsdWVOYW1lXSA9IGl0ZW1cbiAgICB9XG4gICAgY29uc3QgbmV3Q29udGV4dCA9IG1lcmdlQ29udGV4dChjb250ZXh0LCBtZXJnZWREYXRhKVxuICAgIHZtcy5wdXNoKG5ld0NvbnRleHQpXG4gICAgY29tcGlsZShuZXdDb250ZXh0LCB0YXJnZXQsIGZyYWdCbG9jaywgeyByZXBlYXQ6IGl0ZW0gfSlcbiAgfVxuXG4gIGNvbnN0IGxpc3QgPSB3YXRjaEJsb2NrKHZtLCBmcmFnQmxvY2ssIGdldHRlciwgJ3JlcGVhdCcsXG4gICAgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIHRoZSBcInJlcGVhdFwiIGl0ZW0gaGFzIGNoYW5nZWQnLCBkYXRhKVxuICAgICAgaWYgKCFmcmFnQmxvY2sgfHwgIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9sZENoaWxkcmVuID0gY2hpbGRyZW4uc2xpY2UoKVxuICAgICAgY29uc3Qgb2xkVm1zID0gdm1zLnNsaWNlKClcbiAgICAgIGNvbnN0IG9sZERhdGEgPSBmcmFnQmxvY2suZGF0YS5zbGljZSgpXG4gICAgICAvLyAxLiBjb2xsZWN0IGFsbCBuZXcgcmVmcyB0cmFjayBieVxuICAgICAgY29uc3QgdHJhY2tNYXAgPSB7fVxuICAgICAgY29uc3QgcmV1c2VkTWFwID0ge31cbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHJhY2tCeSA/IGl0ZW1bdHJhY2tCeV0gOiAob2xkU3R5bGUgPyBpdGVtW2tleU5hbWVdIDogaW5kZXgpXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoa2V5ID09IG51bGwgfHwga2V5ID09PSAnJykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRyYWNrTWFwW2tleV0gPSBpdGVtXG4gICAgICB9KVxuXG4gICAgICAvLyAyLiByZW1vdmUgdW51c2VkIGVsZW1lbnQgZm9yZWFjaCBvbGQgaXRlbVxuICAgICAgY29uc3QgcmV1c2VkTGlzdCA9IFtdXG4gICAgICBvbGREYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRyYWNrQnkgPyBpdGVtW3RyYWNrQnldIDogKG9sZFN0eWxlID8gaXRlbVtrZXlOYW1lXSA6IGluZGV4KVxuICAgICAgICBpZiAodHJhY2tNYXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHJldXNlZE1hcFtrZXldID0ge1xuICAgICAgICAgICAgaXRlbSwgaW5kZXgsIGtleSxcbiAgICAgICAgICAgIHRhcmdldDogb2xkQ2hpbGRyZW5baW5kZXhdLFxuICAgICAgICAgICAgdm06IG9sZFZtc1tpbmRleF1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV1c2VkTGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmVtb3ZlVGFyZ2V0KHZtLCBvbGRDaGlsZHJlbltpbmRleF0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIDMuIGNyZWF0ZSBuZXcgZWxlbWVudCBmb3JlYWNoIG5ldyBpdGVtXG4gICAgICBjaGlsZHJlbi5sZW5ndGggPSAwXG4gICAgICB2bXMubGVuZ3RoID0gMFxuICAgICAgZnJhZ0Jsb2NrLmRhdGEgPSBkYXRhLnNsaWNlKClcbiAgICAgIGZyYWdCbG9jay51cGRhdGVNYXJrID0gZnJhZ0Jsb2NrLnN0YXJ0XG5cbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHJhY2tCeSA/IGl0ZW1bdHJhY2tCeV0gOiAob2xkU3R5bGUgPyBpdGVtW2tleU5hbWVdIDogaW5kZXgpXG4gICAgICAgIGNvbnN0IHJldXNlZCA9IHJldXNlZE1hcFtrZXldXG4gICAgICAgIGlmIChyZXVzZWQpIHtcbiAgICAgICAgICBpZiAocmV1c2VkLml0ZW0gPT09IHJldXNlZExpc3RbMF0pIHtcbiAgICAgICAgICAgIHJldXNlZExpc3Quc2hpZnQoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldXNlZExpc3QuJHJlbW92ZShyZXVzZWQuaXRlbSlcbiAgICAgICAgICAgIG1vdmVUYXJnZXQodm0sIHJldXNlZC50YXJnZXQsIGZyYWdCbG9jay51cGRhdGVNYXJrLCB0cnVlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKHJldXNlZC50YXJnZXQpXG4gICAgICAgICAgdm1zLnB1c2gocmV1c2VkLnZtKVxuICAgICAgICAgIGlmIChvbGRTdHlsZSkge1xuICAgICAgICAgICAgcmV1c2VkLnZtID0gaXRlbVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldXNlZC52bVt2YWx1ZU5hbWVdID0gaXRlbVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXVzZWQudm1ba2V5TmFtZV0gPSBpbmRleFxuICAgICAgICAgIGZyYWdCbG9jay51cGRhdGVNYXJrID0gcmV1c2VkLnRhcmdldFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbXBpbGVJdGVtKGl0ZW0sIGluZGV4LCB2bSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgZGVsZXRlIGZyYWdCbG9jay51cGRhdGVNYXJrXG4gICAgfVxuICApXG5cbiAgZnJhZ0Jsb2NrLmRhdGEgPSBsaXN0LnNsaWNlKDApXG4gIGxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBjb21waWxlSXRlbShpdGVtLCBpbmRleCwgdm0pXG4gIH0pXG59XG5cbi8qKlxuICogV2F0Y2ggdGhlIGRpc3BsYXkgdXBkYXRlIGFuZCBhZGQvcmVtb3ZlIHRoZSBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9IGZyYWdCbG9ja1xuICogQHBhcmFtICB7b2JqZWN0fSBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGJpbmRTaG93biAodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKSB7XG4gIGNvbnN0IGRpc3BsYXkgPSB3YXRjaEJsb2NrKHZtLCBmcmFnQmxvY2ssIHRhcmdldC5zaG93biwgJ3Nob3duJyxcbiAgICAoZGlzcGxheSkgPT4ge1xuICAgICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gdGhlIFwiaWZcIiBpdGVtIHdhcyBjaGFuZ2VkJywgZGlzcGxheSlcblxuICAgICAgaWYgKCFmcmFnQmxvY2sgfHwgISFmcmFnQmxvY2suZGlzcGxheSA9PT0gISFkaXNwbGF5KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZnJhZ0Jsb2NrLmRpc3BsYXkgPSAhIWRpc3BsYXlcbiAgICAgIGlmIChkaXNwbGF5KSB7XG4gICAgICAgIGNvbXBpbGUodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlbW92ZVRhcmdldCh2bSwgZnJhZ0Jsb2NrLCB0cnVlKVxuICAgICAgfVxuICAgIH1cbiAgKVxuXG4gIGZyYWdCbG9jay5kaXNwbGF5ID0gISFkaXNwbGF5XG4gIGlmIChkaXNwbGF5KSB7XG4gICAgY29tcGlsZSh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG1ldGEpXG4gIH1cbn1cblxuLyoqXG4gKiBXYXRjaCBjYWxjIHZhbHVlIGNoYW5nZXMgYW5kIGFwcGVuZCBjZXJ0YWluIHR5cGUgYWN0aW9uIHRvIGRpZmZlci5cbiAqIEl0IGlzIHVzZWQgZm9yIGlmIG9yIHJlcGVhdCBkYXRhLWJpbmRpbmcgZ2VuZXJhdG9yLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gICBmcmFnQmxvY2tcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBjYWxjXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgdHlwZVxuICogQHBhcmFtICB7ZnVuY3Rpb259IGhhbmRsZXJcbiAqIEByZXR1cm4ge2FueX0gICAgICBpbml0IHZhbHVlIG9mIGNhbGNcbiAqL1xuZnVuY3Rpb24gd2F0Y2hCbG9jayAodm0sIGZyYWdCbG9jaywgY2FsYywgdHlwZSwgaGFuZGxlcikge1xuICBjb25zdCBkaWZmZXIgPSB2bSAmJiB2bS5fYXBwICYmIHZtLl9hcHAuZGlmZmVyXG4gIGNvbnN0IGNvbmZpZyA9IHt9XG4gIGNvbnN0IGRlcHRoID0gKGZyYWdCbG9jay5lbGVtZW50LmRlcHRoIHx8IDApICsgMVxuXG4gIHJldHVybiB3YXRjaCh2bSwgY2FsYywgKHZhbHVlKSA9PiB7XG4gICAgY29uZmlnLmxhdGVzdFZhbHVlID0gdmFsdWVcbiAgICBpZiAoZGlmZmVyICYmICFjb25maWcucmVjb3JkZWQpIHtcbiAgICAgIGRpZmZlci5hcHBlbmQodHlwZSwgZGVwdGgsIGZyYWdCbG9jay5ibG9ja0lkLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhdGVzdFZhbHVlID0gY29uZmlnLmxhdGVzdFZhbHVlXG4gICAgICAgIGhhbmRsZXIobGF0ZXN0VmFsdWUpXG4gICAgICAgIGNvbmZpZy5yZWNvcmRlZCA9IGZhbHNlXG4gICAgICAgIGNvbmZpZy5sYXRlc3RWYWx1ZSA9IHVuZGVmaW5lZFxuICAgICAgfSlcbiAgICB9XG4gICAgY29uZmlnLnJlY29yZGVkID0gdHJ1ZVxuICB9KVxufVxuXG4vKipcbiAqIENsb25lIGEgY29udGV4dCBhbmQgbWVyZ2UgY2VydGFpbiBkYXRhLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gbWVyZ2VkRGF0YVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5mdW5jdGlvbiBtZXJnZUNvbnRleHQgKGNvbnRleHQsIG1lcmdlZERhdGEpIHtcbiAgY29uc3QgbmV3Q29udGV4dCA9IE9iamVjdC5jcmVhdGUoY29udGV4dClcbiAgbmV3Q29udGV4dC5fZGF0YSA9IG1lcmdlZERhdGFcbiAgaW5pdERhdGEobmV3Q29udGV4dClcbiAgaW5pdENvbXB1dGVkKG5ld0NvbnRleHQpXG4gIG5ld0NvbnRleHQuX3JlYWxQYXJlbnQgPSBjb250ZXh0XG4gIHJldHVybiBuZXdDb250ZXh0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvdm0vY29tcGlsZXIuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIERpcmVjdGl2ZSBQYXJzZXJcbiAqL1xuXG5pbXBvcnQgeyBiaW5kLCB0eXBvZiB9IGZyb20gJy4uL3V0aWwnXG5cbmltcG9ydCBXYXRjaGVyIGZyb20gJy4uL2NvcmUvd2F0Y2hlcidcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuXG5jb25zdCB7IG5hdGl2ZUNvbXBvbmVudE1hcCB9ID0gY29uZmlnXG5cbmNvbnN0IFNFVFRFUlMgPSB7XG4gIGF0dHI6ICdzZXRBdHRyJyxcbiAgc3R5bGU6ICdzZXRTdHlsZScsXG4gIGV2ZW50OiAnYWRkRXZlbnQnXG59XG5cbi8qKlxuICogYXBwbHkgdGhlIG5hdGl2ZSBjb21wb25lbnQncyBvcHRpb25zKHNwZWNpZmllZCBieSB0ZW1wbGF0ZS50eXBlKVxuICogdG8gdGhlIHRlbXBsYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseU5haXR2ZUNvbXBvbmVudE9wdGlvbnMgKHRlbXBsYXRlKSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gdGVtcGxhdGVcbiAgY29uc3Qgb3B0aW9ucyA9IG5hdGl2ZUNvbXBvbmVudE1hcFt0eXBlXVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAodGVtcGxhdGVba2V5XSA9PSBudWxsKSB7XG4gICAgICAgIHRlbXBsYXRlW2tleV0gPSBvcHRpb25zW2tleV1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cG9mKHRlbXBsYXRlW2tleV0pID09PSAnb2JqZWN0JyAmJlxuICAgICAgICB0eXBvZihvcHRpb25zW2tleV0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKGNvbnN0IHN1YmtleSBpbiBvcHRpb25zW2tleV0pIHtcbiAgICAgICAgICBpZiAodGVtcGxhdGVba2V5XVtzdWJrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlW2tleV1bc3Via2V5XSA9IG9wdGlvbnNba2V5XVtzdWJrZXldXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogYmluZCBhbGwgaWQsIGF0dHIsIGNsYXNzbmFtZXMsIHN0eWxlLCBldmVudHMgdG8gYW4gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZEVsZW1lbnQgKHZtLCBlbCwgdGVtcGxhdGUpIHtcbiAgc2V0SWQodm0sIGVsLCB0ZW1wbGF0ZS5pZCwgdm0pXG4gIHNldEF0dHIodm0sIGVsLCB0ZW1wbGF0ZS5hdHRyKVxuICBzZXRDbGFzcyh2bSwgZWwsIHRlbXBsYXRlLmNsYXNzTGlzdClcbiAgc2V0U3R5bGUodm0sIGVsLCB0ZW1wbGF0ZS5zdHlsZSlcbiAgYmluZEV2ZW50cyh2bSwgZWwsIHRlbXBsYXRlLmV2ZW50cylcbn1cblxuLyoqXG4gKiBiaW5kIGFsbCBwcm9wcyB0byBzdWIgdm0gYW5kIGJpbmQgYWxsIHN0eWxlLCBldmVudHMgdG8gdGhlIHJvb3QgZWxlbWVudFxuICogb2YgdGhlIHN1YiB2bSBpZiBpdCBkb2Vzbid0IGhhdmUgYSByZXBsYWNlZCBtdWx0aS1ub2RlIGZyYWdtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kU3ViVm0gKHZtLCBzdWJWbSwgdGVtcGxhdGUsIHJlcGVhdEl0ZW0pIHtcbiAgc3ViVm0gPSBzdWJWbSB8fCB7fVxuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlIHx8IHt9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHN1YlZtLl9vcHRpb25zIHx8IHt9XG5cbiAgLy8gYmluZCBwcm9wc1xuICBsZXQgcHJvcHMgPSBvcHRpb25zLnByb3BzXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgcHJvcHMgPSBwcm9wcy5yZWR1Y2UoKHJlc3VsdCwgdmFsdWUpID0+IHtcbiAgICAgIHJlc3VsdFt2YWx1ZV0gPSB0cnVlXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSwge30pXG4gIH1cblxuICBtZXJnZVByb3BzKHJlcGVhdEl0ZW0sIHByb3BzLCB2bSwgc3ViVm0pXG4gIG1lcmdlUHJvcHModGVtcGxhdGUuYXR0ciwgcHJvcHMsIHZtLCBzdWJWbSlcbn1cblxuLyoqXG4gKiBtZXJnZSBjbGFzcyBhbmQgc3R5bGVzIGZyb20gdm0gdG8gc3ViIHZtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCAodm0sIHN1YlZtLCB0ZW1wbGF0ZSkge1xuICBtZXJnZUNsYXNzU3R5bGUodGVtcGxhdGUuY2xhc3NMaXN0LCB2bSwgc3ViVm0pXG4gIG1lcmdlU3R5bGUodGVtcGxhdGUuc3R5bGUsIHZtLCBzdWJWbSlcbn1cblxuLyoqXG4gKiBCaW5kIHByb3BzIGZyb20gdm0gdG8gc3ViIHZtIGFuZCB3YXRjaCB0aGVpciB1cGRhdGVzLlxuICovXG5mdW5jdGlvbiBtZXJnZVByb3BzICh0YXJnZXQsIHByb3BzLCB2bSwgc3ViVm0pIHtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm5cbiAgfVxuICBmb3IgKGNvbnN0IGtleSBpbiB0YXJnZXQpIHtcbiAgICBpZiAoIXByb3BzIHx8IHByb3BzW2tleV0pIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0W2tleV1cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSB3YXRjaCh2bSwgdmFsdWUsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgc3ViVm1ba2V5XSA9IHZcbiAgICAgICAgfSlcbiAgICAgICAgc3ViVm1ba2V5XSA9IHJldHVyblZhbHVlXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3ViVm1ba2V5XSA9IHZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQmluZCBzdHlsZSBmcm9tIHZtIHRvIHN1YiB2bSBhbmQgd2F0Y2ggdGhlaXIgdXBkYXRlcy5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VTdHlsZSAodGFyZ2V0LCB2bSwgc3ViVm0pIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXRba2V5XVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gd2F0Y2godm0sIHZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgICAgICBpZiAoc3ViVm0uX3Jvb3RFbCkge1xuICAgICAgICAgIHN1YlZtLl9yb290RWwuc2V0U3R5bGUoa2V5LCB2KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgc3ViVm0uX3Jvb3RFbC5zZXRTdHlsZShrZXksIHJldHVyblZhbHVlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChzdWJWbS5fcm9vdEVsKSB7XG4gICAgICAgIHN1YlZtLl9yb290RWwuc2V0U3R5bGUoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBCaW5kIGNsYXNzICYgc3R5bGUgZnJvbSB2bSB0byBzdWIgdm0gYW5kIHdhdGNoIHRoZWlyIHVwZGF0ZXMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlQ2xhc3NTdHlsZSAodGFyZ2V0LCB2bSwgc3ViVm0pIHtcbiAgY29uc3QgY3NzID0gdm0uX29wdGlvbnMgJiYgdm0uX29wdGlvbnMuc3R5bGUgfHwge31cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFzdWJWbS5fcm9vdEVsKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBjbGFzc05hbWUgPSAnQG9yaWdpbmFsUm9vdEVsJ1xuICBjc3NbY2xhc3NOYW1lXSA9IHN1YlZtLl9yb290RWwuY2xhc3NTdHlsZVxuXG4gIGZ1bmN0aW9uIGFkZENsYXNzTmFtZSAobGlzdCwgbmFtZSkge1xuICAgIGlmICh0eXBvZihsaXN0KSA9PT0gJ2FycmF5Jykge1xuICAgICAgbGlzdC51bnNoaWZ0KG5hbWUpXG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHdhdGNoKHZtLCB0YXJnZXQsIHYgPT4ge1xuICAgICAgYWRkQ2xhc3NOYW1lKHYsIGNsYXNzTmFtZSlcbiAgICAgIHNldENsYXNzU3R5bGUoc3ViVm0uX3Jvb3RFbCwgY3NzLCB2KVxuICAgIH0pXG4gICAgYWRkQ2xhc3NOYW1lKHZhbHVlLCBjbGFzc05hbWUpXG4gICAgc2V0Q2xhc3NTdHlsZShzdWJWbS5fcm9vdEVsLCBjc3MsIHZhbHVlKVxuICB9XG4gIGVsc2UgaWYgKHRhcmdldCAhPSBudWxsKSB7XG4gICAgYWRkQ2xhc3NOYW1lKHRhcmdldCwgY2xhc3NOYW1lKVxuICAgIHNldENsYXNzU3R5bGUoc3ViVm0uX3Jvb3RFbCwgY3NzLCB0YXJnZXQpXG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIGlkIHRvIGFuIGVsZW1lbnRcbiAqIGVhY2ggaWQgaXMgdW5pcXVlIGluIGEgd2hvbGUgdm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldElkICh2bSwgZWwsIGlkLCB0YXJnZXQpIHtcbiAgY29uc3QgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1hcCwge1xuICAgIHZtOiB7XG4gICAgICB2YWx1ZTogdGFyZ2V0LFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgIH0sXG4gICAgZWw6IHtcbiAgICAgIGdldDogKCkgPT4gZWwgfHwgdGFyZ2V0Ll9yb290RWwsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgfVxuICB9KVxuXG4gIGlmICh0eXBlb2YgaWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gaWRcbiAgICBpZCA9IGhhbmRsZXIuY2FsbCh2bSlcbiAgICBpZiAoaWQpIHtcbiAgICAgIHZtLl9pZHNbaWRdID0gbWFwXG4gICAgfVxuICAgIHdhdGNoKHZtLCBoYW5kbGVyLCAobmV3SWQpID0+IHtcbiAgICAgIGlmIChuZXdJZCkge1xuICAgICAgICB2bS5faWRzW25ld0lkXSA9IG1hcFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZWxzZSBpZiAoaWQgJiYgdHlwZW9mIGlkID09PSAnc3RyaW5nJykge1xuICAgIHZtLl9pZHNbaWRdID0gbWFwXG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIGF0dHIgdG8gYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRBdHRyICh2bSwgZWwsIGF0dHIpIHtcbiAgYmluZERpcih2bSwgZWwsICdhdHRyJywgYXR0cilcbn1cblxuZnVuY3Rpb24gc2V0Q2xhc3NTdHlsZSAoZWwsIGNzcywgY2xhc3NMaXN0KSB7XG4gIGNvbnN0IGNsYXNzU3R5bGUgPSB7fVxuICBjb25zdCBsZW5ndGggPSBjbGFzc0xpc3QubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHN0eWxlID0gY3NzW2NsYXNzTGlzdFtpXV1cbiAgICBpZiAoc3R5bGUpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlKSB7XG4gICAgICAgIGNsYXNzU3R5bGVba2V5XSA9IHN0eWxlW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWwuc2V0Q2xhc3NTdHlsZShjbGFzc1N0eWxlKVxufVxuXG4vKipcbiAqIGJpbmQgY2xhc3NuYW1lcyB0byBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHNldENsYXNzICh2bSwgZWwsIGNsYXNzTGlzdCkge1xuICBpZiAodHlwZW9mIGNsYXNzTGlzdCAhPT0gJ2Z1bmN0aW9uJyAmJiAhQXJyYXkuaXNBcnJheShjbGFzc0xpc3QpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NMaXN0KSAmJiAhY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgIGVsLnNldENsYXNzU3R5bGUoe30pXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBzdHlsZSA9IHZtLl9vcHRpb25zICYmIHZtLl9vcHRpb25zLnN0eWxlIHx8IHt9XG4gIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgdmFsdWUgPSB3YXRjaCh2bSwgY2xhc3NMaXN0LCB2ID0+IHtcbiAgICAgIHNldENsYXNzU3R5bGUoZWwsIHN0eWxlLCB2KVxuICAgIH0pXG4gICAgc2V0Q2xhc3NTdHlsZShlbCwgc3R5bGUsIHZhbHVlKVxuICB9XG4gIGVsc2Uge1xuICAgIHNldENsYXNzU3R5bGUoZWwsIHN0eWxlLCBjbGFzc0xpc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIHN0eWxlIHRvIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0U3R5bGUgKHZtLCBlbCwgc3R5bGUpIHtcbiAgYmluZERpcih2bSwgZWwsICdzdHlsZScsIHN0eWxlKVxufVxuXG4vKipcbiAqIGFkZCBhbiBldmVudCB0eXBlIGFuZCBoYW5kbGVyIHRvIGFuIGVsZW1lbnQgYW5kIGdlbmVyYXRlIGEgZG9tIHVwZGF0ZVxuICovXG5mdW5jdGlvbiBzZXRFdmVudCAodm0sIGVsLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGVsLmFkZEV2ZW50KHR5cGUsIGJpbmQoaGFuZGxlciwgdm0pKVxufVxuXG4vKipcbiAqIGFkZCBhbGwgZXZlbnRzIG9mIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gYmluZEV2ZW50cyAodm0sIGVsLCBldmVudHMpIHtcbiAgaWYgKCFldmVudHMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKVxuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgbGV0IGhhbmRsZXIgPSBldmVudHNba2V5XVxuICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGhhbmRsZXIgPSB2bVtoYW5kbGVyXVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gVGhlIG1ldGhvZCBcIiR7aGFuZGxlcn1cIiBpcyBub3QgZGVmaW5lZC5gKVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRFdmVudCh2bSwgZWwsIGtleSwgaGFuZGxlcilcbiAgfVxufVxuXG4vKipcbiAqIHNldCBhIHNlcmllcyBvZiBtZW1iZXJzIGFzIGEga2luZCBvZiBhbiBlbGVtZW50XG4gKiBmb3IgZXhhbXBsZTogc3R5bGUsIGF0dHIsIC4uLlxuICogaWYgdGhlIHZhbHVlIGlzIGEgZnVuY3Rpb24gdGhlbiBiaW5kIHRoZSBkYXRhIGNoYW5nZXNcbiAqL1xuZnVuY3Rpb24gYmluZERpciAodm0sIGVsLCBuYW1lLCBkYXRhKSB7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKVxuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgY29uc3QgdmFsdWUgPSBkYXRhW2tleV1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBiaW5kS2V5KHZtLCBlbCwgbmFtZSwga2V5LCB2YWx1ZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbFtTRVRURVJTW25hbWVdXShrZXksIHZhbHVlKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgZGF0YSBjaGFuZ2VzIHRvIGEgY2VydGFpbiBrZXkgdG8gYSBuYW1lIHNlcmllcyBpbiBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGJpbmRLZXkgKHZtLCBlbCwgbmFtZSwga2V5LCBjYWxjKSB7XG4gIGNvbnN0IG1ldGhvZE5hbWUgPSBTRVRURVJTW25hbWVdXG4gIC8vIHdhdGNoIHRoZSBjYWxjLCBhbmQgcmV0dXJucyBhIHZhbHVlIGJ5IGNhbGMuY2FsbCgpXG4gIGNvbnN0IHZhbHVlID0gd2F0Y2godm0sIGNhbGMsICh2YWx1ZSkgPT4ge1xuICAgIGZ1bmN0aW9uIGhhbmRsZXIgKCkge1xuICAgICAgZWxbbWV0aG9kTmFtZV0oa2V5LCB2YWx1ZSlcbiAgICB9XG4gICAgY29uc3QgZGlmZmVyID0gdm0gJiYgdm0uX2FwcCAmJiB2bS5fYXBwLmRpZmZlclxuICAgIGlmIChkaWZmZXIpIHtcbiAgICAgIGRpZmZlci5hcHBlbmQoJ2VsZW1lbnQnLCBlbC5kZXB0aCwgZWwucmVmLCBoYW5kbGVyKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGhhbmRsZXIoKVxuICAgIH1cbiAgfSlcblxuICBlbFttZXRob2ROYW1lXShrZXksIHZhbHVlKVxufVxuXG4vKipcbiAqIHdhdGNoIGEgY2FsYyBmdW5jdGlvbiBhbmQgY2FsbGJhY2sgaWYgdGhlIGNhbGMgdmFsdWUgY2hhbmdlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gd2F0Y2ggKHZtLCBjYWxjLCBjYWxsYmFjaykge1xuICBjb25zdCB3YXRjaGVyID0gbmV3IFdhdGNoZXIodm0sIGNhbGMsIGZ1bmN0aW9uICh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyAmJiB2YWx1ZSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjYWxsYmFjayh2YWx1ZSlcbiAgfSlcblxuICByZXR1cm4gd2F0Y2hlci52YWx1ZVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3ZtL2RpcmVjdGl2ZS5qc1xuICoqLyIsIi8vIEB0b2RvOiBJdCBzaG91bGQgYmUgcmVnaXN0ZXJlZCBieSBuYXRpdmUgZnJvbSBgcmVnaXN0ZXJDb21wb25lbnRzKClgLlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYXRpdmVDb21wb25lbnRNYXA6IHtcbiAgICB0ZXh0OiB0cnVlLFxuICAgIGltYWdlOiB0cnVlLFxuICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICBzbGlkZXI6IHtcbiAgICAgIHR5cGU6ICdzbGlkZXInLFxuICAgICAgYXBwZW5kOiAndHJlZSdcbiAgICB9LFxuICAgIGNlbGw6IHtcbiAgICAgIHR5cGU6ICdjZWxsJyxcbiAgICAgIGFwcGVuZDogJ3RyZWUnXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29uZmlnLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IERvY3VtZW50ICYgRWxlbWVudCBIZWxwZXJzLlxuICpcbiAqIHJlcXVpcmVkOlxuICogRG9jdW1lbnQjOiBjcmVhdGVFbGVtZW50LCBjcmVhdGVDb21tZW50LCBnZXRSZWZcbiAqIEVsZW1lbnQjOiBhcHBlbmRDaGlsZCwgaW5zZXJ0QmVmb3JlLCByZW1vdmVDaGlsZCwgbmV4dFNpYmxpbmdcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIGJvZHkgYnkgdHlwZVxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm9keSAodm0sIHR5cGUpIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgcmV0dXJuIGRvYy5jcmVhdGVCb2R5KHR5cGUpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGVsZW1lbnQgYnkgdHlwZVxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAodm0sIHR5cGUpIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgcmV0dXJuIGRvYy5jcmVhdGVFbGVtZW50KHR5cGUpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBmcmFnIGJsb2NrIGZvciBhbiBlbGVtZW50LlxuICogVGhlIGZyYWcgYmxvY2sgaGFzIGEgc3RhcnRlciwgZW5kZXIgYW5kIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJsb2NrICh2bSwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydCA9IGNyZWF0ZUJsb2NrU3RhcnQodm0pXG4gIGNvbnN0IGVuZCA9IGNyZWF0ZUJsb2NrRW5kKHZtKVxuICBjb25zdCBibG9ja0lkID0gbGFzdGVzdEJsb2NrSWQrK1xuICBpZiAoZWxlbWVudC5lbGVtZW50KSB7XG4gICAgbGV0IHVwZGF0ZU1hcmsgPSBlbGVtZW50LnVwZGF0ZU1hcmtcbiAgICBpZiAodXBkYXRlTWFyaykge1xuICAgICAgaWYgKHVwZGF0ZU1hcmsuZWxlbWVudCkge1xuICAgICAgICB1cGRhdGVNYXJrID0gdXBkYXRlTWFyay5lbmRcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRBZnRlcihlbmQsIHVwZGF0ZU1hcmspXG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QWZ0ZXIoc3RhcnQsIHVwZGF0ZU1hcmspXG4gICAgICBlbGVtZW50LnVwZGF0ZU1hcmsgPSBlbmRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHN0YXJ0LCBlbGVtZW50LmVuZClcbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRCZWZvcmUoZW5kLCBlbGVtZW50LmVuZClcbiAgICB9XG4gICAgZWxlbWVudCA9IGVsZW1lbnQuZWxlbWVudFxuICB9XG4gIGVsc2Uge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3RhcnQpXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbmQpXG4gIH1cbiAgcmV0dXJuIHsgc3RhcnQsIGVuZCwgZWxlbWVudCwgYmxvY2tJZCB9XG59XG5cbmxldCBsYXN0ZXN0QmxvY2tJZCA9IDFcblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGJsb2NrIHN0YXJ0ZXIuXG4gKiBVc2luZyB0aGlzLl9hcHAuZG9jXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrU3RhcnQgKHZtKSB7XG4gIGNvbnN0IGRvYyA9IHZtLl9hcHAuZG9jXG4gIGNvbnN0IGFuY2hvciA9IGRvYy5jcmVhdGVDb21tZW50KCdzdGFydCcpXG4gIHJldHVybiBhbmNob3Jcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGJsb2NrIGVuZGVyLlxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICovXG5mdW5jdGlvbiBjcmVhdGVCbG9ja0VuZCAodm0pIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgY29uc3QgYW5jaG9yID0gZG9jLmNyZWF0ZUNvbW1lbnQoJ2VuZCcpXG4gIHJldHVybiBhbmNob3Jcbn1cblxuLyoqXG4gKiBBdHRhY2ggdGFyZ2V0IHRvIGEgY2VydGFpbiBkZXN0IHVzaW5nIGFwcGVuZENoaWxkIGJ5IGRlZmF1bHQuXG4gKiBJZiB0aGUgZGVzdCBpcyBhIGZyYWcgYmxvY2sgdGhlbiBpbnNlcnQgYmVmb3JlIHRoZSBlbmRlci5cbiAqIElmIHRoZSB0YXJnZXQgaXMgYSBmcmFnIGJsb2NrIHRoZW4gYXR0YWNoIHRoZSBzdGFydGVyIGFuZCBlbmRlciBpbiBvcmRlci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBkZXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hUYXJnZXQgKHZtLCB0YXJnZXQsIGRlc3QpIHtcbiAgaWYgKGRlc3QuZWxlbWVudCkge1xuICAgIGNvbnN0IGJlZm9yZSA9IGRlc3QuZW5kXG4gICAgY29uc3QgYWZ0ZXIgPSBkZXN0LnVwZGF0ZU1hcmtcbiAgICAvLyBwdXNoIG5ldyB0YXJnZXQgZm9yIHdhdGNoIGxpc3QgdXBkYXRlIGxhdGVyXG4gICAgaWYgKGRlc3QuY2hpbGRyZW4pIHtcbiAgICAgIGRlc3QuY2hpbGRyZW4ucHVzaCh0YXJnZXQpXG4gICAgfVxuICAgIC8vIGZvciBjaGVjayByZXBlYXQgY2FzZVxuICAgIGlmIChhZnRlcikge1xuICAgICAgY29uc3Qgc2lnbmFsID0gbW92ZVRhcmdldCh2bSwgdGFyZ2V0LCBhZnRlcilcbiAgICAgIGRlc3QudXBkYXRlTWFyayA9IHRhcmdldC5lbGVtZW50ID8gdGFyZ2V0LmVuZCA6IHRhcmdldFxuICAgICAgcmV0dXJuIHNpZ25hbFxuICAgIH1cbiAgICBlbHNlIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgICAgZGVzdC5lbGVtZW50Lmluc2VydEJlZm9yZSh0YXJnZXQuc3RhcnQsIGJlZm9yZSlcbiAgICAgIGRlc3QuZWxlbWVudC5pbnNlcnRCZWZvcmUodGFyZ2V0LmVuZCwgYmVmb3JlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkZXN0LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRhcmdldCwgYmVmb3JlKVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICAgIGRlc3QuYXBwZW5kQ2hpbGQodGFyZ2V0LnN0YXJ0KVxuICAgICAgZGVzdC5hcHBlbmRDaGlsZCh0YXJnZXQuZW5kKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkZXN0LmFwcGVuZENoaWxkKHRhcmdldClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIHRhcmdldCBiZWZvcmUgYSBjZXJ0YWluIGVsZW1lbnQuIFRoZSB0YXJnZXQgbWF5YmUgYmxvY2sgb3IgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUYXJnZXQgKHZtLCB0YXJnZXQsIGFmdGVyKSB7XG4gIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgIHJldHVybiBtb3ZlQmxvY2sodGFyZ2V0LCBhZnRlcilcbiAgfVxuICByZXR1cm4gbW92ZUVsZW1lbnQodGFyZ2V0LCBhZnRlcilcbn1cblxuLyoqXG4gKiBNb3ZlIGVsZW1lbnQgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZnVuY3Rpb24gbW92ZUVsZW1lbnQgKGVsZW1lbnQsIGFmdGVyKSB7XG4gIGNvbnN0IHBhcmVudCA9IGFmdGVyLnBhcmVudE5vZGVcbiAgaWYgKHBhcmVudCkge1xuICAgIHJldHVybiBwYXJlbnQuaW5zZXJ0QWZ0ZXIoZWxlbWVudCwgYWZ0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIGFsbCBlbGVtZW50cyBvZiB0aGUgYmxvY2sgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtvYmplY3R9IGJlZm9yZVxuICovXG5mdW5jdGlvbiBtb3ZlQmxvY2sgKGZyYWdCbG9jaywgYWZ0ZXIpIHtcbiAgY29uc3QgcGFyZW50ID0gYWZ0ZXIucGFyZW50Tm9kZVxuXG4gIGlmIChwYXJlbnQpIHtcbiAgICBsZXQgZWwgPSBmcmFnQmxvY2suc3RhcnRcbiAgICBsZXQgc2lnbmFsXG4gICAgY29uc3QgZ3JvdXAgPSBbZWxdXG5cbiAgICB3aGlsZSAoZWwgJiYgZWwgIT09IGZyYWdCbG9jay5lbmQpIHtcbiAgICAgIGVsID0gZWwubmV4dFNpYmxpbmdcbiAgICAgIGdyb3VwLnB1c2goZWwpXG4gICAgfVxuXG4gICAgbGV0IHRlbXAgPSBhZnRlclxuICAgIGdyb3VwLmV2ZXJ5KChlbCkgPT4ge1xuICAgICAgc2lnbmFsID0gcGFyZW50Lmluc2VydEFmdGVyKGVsLCB0ZW1wKVxuICAgICAgdGVtcCA9IGVsXG4gICAgICByZXR1cm4gc2lnbmFsICE9PSAtMVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2lnbmFsXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGFyZ2V0IGZyb20gRE9NIHRyZWUuXG4gKiBJZiB0aGUgdGFyZ2V0IGlzIGEgZnJhZyBibG9jayB0aGVuIGNhbGwgX3JlbW92ZUJsb2NrXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhcmdldCAodm0sIHRhcmdldCwgcHJlc2VydmVCbG9jayA9IGZhbHNlKSB7XG4gIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgIHJlbW92ZUJsb2NrKHRhcmdldCwgcHJlc2VydmVCbG9jaylcbiAgfVxuICBlbHNlIHtcbiAgICByZW1vdmVFbGVtZW50KHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGNlcnRhaW4gZWxlbWVudC5cbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICovXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50ICh0YXJnZXQpIHtcbiAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGVcblxuICBpZiAocGFyZW50KSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGZyYWcgYmxvY2suXG4gKiBUaGUgc2Vjb25kIHBhcmFtIGRlY2lkZXMgd2hldGhlciB0aGUgYmxvY2sgc2VsZiBzaG91bGQgYmUgcmVtb3ZlZCB0b28uXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtCb29sZWFufSBwcmVzZXJ2ZUJsb2NrPWZhbHNlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUJsb2NrIChmcmFnQmxvY2ssIHByZXNlcnZlQmxvY2sgPSBmYWxzZSkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBsZXQgZWwgPSBmcmFnQmxvY2suc3RhcnQubmV4dFNpYmxpbmdcblxuICB3aGlsZSAoZWwgJiYgZWwgIT09IGZyYWdCbG9jay5lbmQpIHtcbiAgICByZXN1bHQucHVzaChlbClcbiAgICBlbCA9IGVsLm5leHRTaWJsaW5nXG4gIH1cblxuICBpZiAoIXByZXNlcnZlQmxvY2spIHtcbiAgICByZW1vdmVFbGVtZW50KGZyYWdCbG9jay5zdGFydClcbiAgfVxuICByZXN1bHQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICByZW1vdmVFbGVtZW50KGVsKVxuICB9KVxuICBpZiAoIXByZXNlcnZlQmxvY2spIHtcbiAgICByZW1vdmVFbGVtZW50KGZyYWdCbG9jay5lbmQpXG4gIH1cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3ZtL2RvbS1oZWxwZXIuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIEV2ZXJ5dGhpbmcgYWJvdXQgY29tcG9uZW50IGV2ZW50IHdoaWNoIGluY2x1ZGVzIGV2ZW50IG9iamVjdCwgZXZlbnQgbGlzdGVuZXIsXG4gKiBldmVudCBlbWl0dGVyIGFuZCBsaWZlY3ljbGUgaG9va3MuXG4gKi9cblxuLyoqXG4gKiBFdmVudCBvYmplY3QgZGVmaW5pdGlvbi4gQW4gZXZlbnQgb2JqZWN0IGhhcyBgdHlwZWAsIGB0aW1lc3RhbXBgIGFuZFxuICogYGRldGFpbGAgZnJvbSB3aGljaCBhIGNvbXBvbmVudCBlbWl0LiBUaGUgZXZlbnQgb2JqZWN0IGNvdWxkIGJlIGRpc3BhdGNoZWQgdG9cbiAqIHBhcmVudHMgb3IgYnJvYWRjYXN0ZWQgdG8gY2hpbGRyZW4gZXhjZXB0IGB0aGlzLnN0b3AoKWAgaXMgY2FsbGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7YW55fSAgICBkZXRhaWxcbiAqL1xuZnVuY3Rpb24gRXZ0ICh0eXBlLCBkZXRhaWwpIHtcbiAgaWYgKGRldGFpbCBpbnN0YW5jZW9mIEV2dCkge1xuICAgIHJldHVybiBkZXRhaWxcbiAgfVxuXG4gIHRoaXMudGltZXN0YW1wID0gRGF0ZS5ub3coKVxuICB0aGlzLmRldGFpbCA9IGRldGFpbFxuICB0aGlzLnR5cGUgPSB0eXBlXG5cbiAgbGV0IHNob3VsZFN0b3AgPSBmYWxzZVxuXG4gIC8qKlxuICAgKiBzdG9wIGRpc3BhdGNoIGFuZCBicm9hZGNhc3RcbiAgICovXG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzaG91bGRTdG9wID0gdHJ1ZVxuICB9XG5cbiAgLyoqXG4gICAqIGNoZWNrIGlmIGl0IGNhbid0IGJlIGRpc3BhdGNoZWQgb3IgYnJvYWRjYXN0ZWRcbiAgICovXG4gIHRoaXMuaGFzU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2hvdWxkU3RvcFxuICB9XG59XG5cbi8qKlxuICogRW1pdCBhbiBldmVudCBidXQgbm90IGJyb2FkY2FzdCBkb3duIG9yIGRpc3BhdGNoIHVwLlxuICogQHBhcmFtICB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0gIHthbnl9ICAgIGRldGFpbFxuICovXG5leHBvcnQgZnVuY3Rpb24gJGVtaXQgKHR5cGUsIGRldGFpbCkge1xuICBjb25zdCBldmVudHMgPSB0aGlzLl92bUV2ZW50c1xuICBjb25zdCBoYW5kbGVyTGlzdCA9IGV2ZW50c1t0eXBlXVxuICBpZiAoaGFuZGxlckxpc3QpIHtcbiAgICBjb25zdCBldnQgPSBuZXcgRXZ0KHR5cGUsIGRldGFpbClcbiAgICBoYW5kbGVyTGlzdC5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICBoYW5kbGVyLmNhbGwodGhpcywgZXZ0KVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBFbWl0IGFuIGV2ZW50IGFuZCBkaXNwYXRjaCBpdCB1cC5cbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICogQHBhcmFtICB7YW55fSAgICBkZXRhaWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRkaXNwYXRjaCAodHlwZSwgZGV0YWlsKSB7XG4gIGNvbnN0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICB0aGlzLiRlbWl0KHR5cGUsIGV2dClcblxuICBpZiAoIWV2dC5oYXNTdG9wcGVkKCkgJiYgdGhpcy5fcGFyZW50ICYmIHRoaXMuX3BhcmVudC4kZGlzcGF0Y2gpIHtcbiAgICB0aGlzLl9wYXJlbnQuJGRpc3BhdGNoKHR5cGUsIGV2dClcbiAgfVxufVxuXG4vKipcbiAqIEVtaXQgYW4gZXZlbnQgYW5kIGJyb2FkY2FzdCBpdCBkb3duLlxuICogQHBhcmFtICB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0gIHthbnl9ICAgIGRldGFpbFxuICovXG5leHBvcnQgZnVuY3Rpb24gJGJyb2FkY2FzdCAodHlwZSwgZGV0YWlsKSB7XG4gIGNvbnN0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICB0aGlzLiRlbWl0KHR5cGUsIGV2dClcblxuICBpZiAoIWV2dC5oYXNTdG9wcGVkKCkgJiYgdGhpcy5fY2hpbGRyZW5WbXMpIHtcbiAgICB0aGlzLl9jaGlsZHJlblZtcy5mb3JFYWNoKChzdWJWbSkgPT4ge1xuICAgICAgc3ViVm0uJGJyb2FkY2FzdCh0eXBlLCBldnQpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIEFkZCBldmVudCBsaXN0ZW5lci5cbiAqIEBwYXJhbSAge3N0cmluZ30gICB0eXBlXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gaGFuZGxlclxuICovXG5leHBvcnQgZnVuY3Rpb24gJG9uICh0eXBlLCBoYW5kbGVyKSB7XG4gIGlmICghdHlwZSB8fCB0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGV2ZW50cyA9IHRoaXMuX3ZtRXZlbnRzXG4gIGNvbnN0IGhhbmRsZXJMaXN0ID0gZXZlbnRzW3R5cGVdIHx8IFtdXG4gIGhhbmRsZXJMaXN0LnB1c2goaGFuZGxlcilcbiAgZXZlbnRzW3R5cGVdID0gaGFuZGxlckxpc3RcblxuICAvLyBmaXhlZCBvbGQgdmVyc2lvbiBsaWZlY3ljbGUgZGVzaWduXG4gIGlmICh0eXBlID09PSAnaG9vazpyZWFkeScgJiYgdGhpcy5fcmVhZHkpIHtcbiAgICB0aGlzLiRlbWl0KCdob29rOnJlYWR5JylcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBldmVudCBsaXN0ZW5lci5cbiAqIEBwYXJhbSAge3N0cmluZ30gICB0eXBlXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gaGFuZGxlclxuICovXG5leHBvcnQgZnVuY3Rpb24gJG9mZiAodHlwZSwgaGFuZGxlcikge1xuICBpZiAoIXR5cGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBldmVudHMgPSB0aGlzLl92bUV2ZW50c1xuICBpZiAoIWhhbmRsZXIpIHtcbiAgICBkZWxldGUgZXZlbnRzW3R5cGVdXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgaGFuZGxlckxpc3QgPSBldmVudHNbdHlwZV1cbiAgaWYgKCFoYW5kbGVyTGlzdCkge1xuICAgIHJldHVyblxuICB9XG4gIGhhbmRsZXJMaXN0LiRyZW1vdmUoaGFuZGxlcilcbn1cblxuY29uc3QgTElGRV9DWUNMRV9UWVBFUyA9IFsnaW5pdCcsICdjcmVhdGVkJywgJ3JlYWR5JywgJ2Rlc3Ryb3llZCddXG5cbi8qKlxuICogSW5pdCBldmVudHM6XG4gKiAxLiBsaXN0ZW4gYGV2ZW50c2AgaW4gY29tcG9uZW50IG9wdGlvbnMgJiBgZXh0ZXJuYWxFdmVudHNgLlxuICogMi4gYmluZCBsaWZlY3ljbGUgaG9va3MuXG4gKiBAcGFyYW0gIHtWbX0gICAgIHZtXG4gKiBAcGFyYW0gIHtvYmplY3R9IGV4dGVybmFsRXZlbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0RXZlbnRzICh2bSwgZXh0ZXJuYWxFdmVudHMpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHZtLl9vcHRpb25zIHx8IHt9XG4gIGNvbnN0IGV2ZW50cyA9IG9wdGlvbnMuZXZlbnRzIHx8IHt9XG4gIGZvciAoY29uc3QgdHlwZTEgaW4gZXZlbnRzKSB7XG4gICAgdm0uJG9uKHR5cGUxLCBldmVudHNbdHlwZTFdKVxuICB9XG4gIGZvciAoY29uc3QgdHlwZTIgaW4gZXh0ZXJuYWxFdmVudHMpIHtcbiAgICB2bS4kb24odHlwZTIsIGV4dGVybmFsRXZlbnRzW3R5cGUyXSlcbiAgfVxuICBMSUZFX0NZQ0xFX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICB2bS4kb24oYGhvb2s6JHt0eXBlfWAsIG9wdGlvbnNbdHlwZV0pXG4gIH0pXG59XG5cbi8qKlxuICogQmluZCBldmVudCByZWxhdGVkIG1ldGhvZHMgdG8gVmlld01vZGVsIGluc3RhbmNlLlxuICogQHBhcmFtICB7Vm19IHZtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkV2ZW50cyAodm0pIHtcbiAgdm0uJGVtaXQgPSAkZW1pdFxuICB2bS4kZGlzcGF0Y2ggPSAkZGlzcGF0Y2hcbiAgdm0uJGJyb2FkY2FzdCA9ICRicm9hZGNhc3RcbiAgdm0uJG9uID0gJG9uXG4gIHZtLiRvZmYgPSAkb2ZmXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvdm0vZXZlbnRzLmpzXG4gKiovIiwiaW1wb3J0IHNlbXZlciBmcm9tICdzZW12ZXInXG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0LCB0eXBvZiB9IGZyb20gJy4uL3V0aWwnXG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmVyc2lvbiBzdHJpbmcuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFZlcnNpb24uIGllOiAxLCAxLjAsIDEuMC4wXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFZlcnNpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVZlcnNpb24gKHYpIHtcbiAgY29uc3QgaXNWYWxpZCA9IHNlbXZlci52YWxpZCh2KVxuICBpZiAoaXNWYWxpZCkge1xuICAgIHJldHVybiB2XG4gIH1cblxuICB2ID0gdHlwZW9mICh2KSA9PT0gJ3N0cmluZycgPyB2IDogJydcbiAgY29uc3Qgc3BsaXQgPSB2LnNwbGl0KCcuJylcbiAgbGV0IGkgPSAwXG4gIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgd2hpbGUgKGkgPCAzKSB7XG4gICAgY29uc3QgcyA9IHR5cGVvZiAoc3BsaXRbaV0pID09PSAnc3RyaW5nJyAmJiBzcGxpdFtpXSA/IHNwbGl0W2ldIDogJzAnXG4gICAgcmVzdWx0LnB1c2gocylcbiAgICBpKytcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignLicpXG59XG5cbi8qKlxuICogR2V0IGluZm9ybWF0aW9ucyBmcm9tIGRpZmZlcmVudCBlcnJvciBrZXkuIExpa2U6XG4gKiAtIGNvZGVcbiAqIC0gZXJyb3JNZXNzYWdlXG4gKiAtIGVycm9yVHlwZVxuICogLSBpc0Rvd25ncmFkZVxuICogQHBhcmFtICB7c3RyaW5nfSBrZXlcbiAqIEBwYXJhbSAge3N0cmluZ30gdmFsXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNyaXRlcmlhXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFcnJvciAoa2V5LCB2YWwsIGNyaXRlcmlhKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBpc0Rvd25ncmFkZTogdHJ1ZSxcbiAgICBlcnJvclR5cGU6IDEsXG4gICAgY29kZTogMTAwMFxuICB9XG4gIGNvbnN0IGdldE1zZyA9IGZ1bmN0aW9uIChrZXksIHZhbCwgY3JpdGVyaWEpIHtcbiAgICByZXR1cm4gJ0Rvd25ncmFkZVsnICsga2V5ICsgJ10gOjogZGV2aWNlSW5mbyAnXG4gICAgICArIHZhbCArICcgbWF0Y2hlZCBjcml0ZXJpYSAnICsgY3JpdGVyaWFcbiAgfVxuICBjb25zdCBfa2V5ID0ga2V5LnRvTG93ZXJDYXNlKClcblxuICByZXN1bHQuZXJyb3JNZXNzYWdlID0gZ2V0TXNnKGtleSwgdmFsLCBjcml0ZXJpYSlcblxuICBpZiAoX2tleS5pbmRleE9mKCdvc3ZlcnNpb24nKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDAxXG4gIH1cbiAgZWxzZSBpZiAoX2tleS5pbmRleE9mKCdhcHB2ZXJzaW9uJykgPj0gMCkge1xuICAgIHJlc3VsdC5jb2RlID0gMTAwMlxuICB9XG4gIGVsc2UgaWYgKF9rZXkuaW5kZXhPZignd2VleHZlcnNpb24nKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDAzXG4gIH1cbiAgZWxzZSBpZiAoX2tleS5pbmRleE9mKCdkZXZpY2Vtb2RlbCcpID49IDApIHtcbiAgICByZXN1bHQuY29kZSA9IDEwMDRcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBXRUVYIGZyYW1ld29yayBpbnB1dChkZXZpY2VJbmZvKVxuICoge1xuICogICBwbGF0Zm9ybTogJ2lPUycgb3IgJ2FuZHJvaWQnXG4gKiAgIG9zVmVyc2lvbjogJzEuMC4wJyBvciAnMS4wJyBvciAnMSdcbiAqICAgYXBwVmVyc2lvbjogJzEuMC4wJyBvciAnMS4wJyBvciAnMSdcbiAqICAgd2VleFZlcnNpb246ICcxLjAuMCcgb3IgJzEuMCcgb3IgJzEnXG4gKiAgIGREZXZpY2VNb2RlbDogJ01PREVMX05BTUUnXG4gKiB9XG4gKlxuICogZG93bmdyYWRlIGNvbmZpZyhjb25maWcpXG4gKiB7XG4gKiAgIGlvczoge1xuICogICAgIG9zVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgYXBwVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgd2VleFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGRldmljZU1vZGVsOiBbJ21vZGVsQScsICdtb2RlbEInLCAuLi5dXG4gKiAgIH0sXG4gKiAgIGFuZHJvaWQ6IHtcbiAqICAgICBvc1ZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGFwcFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIHdlZXhWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICBkZXZpY2VNb2RlbDogWydtb2RlbEEnLCAnbW9kZWxCJywgLi4uXVxuICogICB9XG4gKiB9XG4gKlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZGV2aWNlSW5mbyBXZWV4IFNESyBmcmFtZXdvcmsgaW5wdXRcbiAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnICAgICB1c2VyIGlucHV0XG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgeyBpc0Rvd25ncmFkZTogdHJ1ZS9mYWxzZSwgZXJyb3JNZXNzYWdlLi4uIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrIChjb25maWcsIGRldmljZUluZm8pIHtcbiAgZGV2aWNlSW5mbyA9IGRldmljZUluZm8gfHwgZ2xvYmFsLldYRW52aXJvbm1lbnRcbiAgZGV2aWNlSW5mbyA9IGlzUGxhaW5PYmplY3QoZGV2aWNlSW5mbykgPyBkZXZpY2VJbmZvIDoge31cblxuICBsZXQgcmVzdWx0ID0ge1xuICAgIGlzRG93bmdyYWRlOiBmYWxzZSAvLyBkZWZhdXRsIGlzIHBhc3NcbiAgfVxuXG4gIGlmICh0eXBvZihjb25maWcpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbGV0IGN1c3RvbURvd25ncmFkZSA9IGNvbmZpZy5jYWxsKHRoaXMsIGRldmljZUluZm8sIHtcbiAgICAgIHNlbXZlcjogc2VtdmVyLFxuICAgICAgbm9ybWFsaXplVmVyc2lvbjogdGhpcy5ub3JtYWxpemVWZXJzaW9uXG4gICAgfSlcblxuICAgIGN1c3RvbURvd25ncmFkZSA9ICEhY3VzdG9tRG93bmdyYWRlXG5cbiAgICByZXN1bHQgPSBjdXN0b21Eb3duZ3JhZGUgPyB0aGlzLmdldEVycm9yKCdjdXN0b20nLCAnJywgJ2N1c3RvbSBwYXJhbXMnKSA6IHJlc3VsdFxuICB9XG4gIGVsc2Uge1xuICAgIGNvbmZpZyA9IGlzUGxhaW5PYmplY3QoY29uZmlnKSA/IGNvbmZpZyA6IHt9XG5cbiAgICBjb25zdCBwbGF0Zm9ybSA9IGRldmljZUluZm8ucGxhdGZvcm0gfHwgJ3Vua25vdydcbiAgICBjb25zdCBkUGxhdGZvcm0gPSBwbGF0Zm9ybS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgY09iaiA9IGNvbmZpZ1tkUGxhdGZvcm1dIHx8IHt9XG5cbiAgICBmb3IgKGNvbnN0IGkgaW4gZGV2aWNlSW5mbykge1xuICAgICAgY29uc3Qga2V5ID0gaVxuICAgICAgY29uc3Qga2V5TG93ZXIgPSBrZXkudG9Mb3dlckNhc2UoKVxuICAgICAgY29uc3QgdmFsID0gZGV2aWNlSW5mb1tpXVxuICAgICAgY29uc3QgaXNWZXJzaW9uID0ga2V5TG93ZXIuaW5kZXhPZigndmVyc2lvbicpID49IDBcbiAgICAgIGNvbnN0IGlzRGV2aWNlTW9kZWwgPSBrZXlMb3dlci5pbmRleE9mKCdkZXZpY2Vtb2RlbCcpID49IDBcbiAgICAgIGNvbnN0IGNyaXRlcmlhID0gY09ialtpXVxuXG4gICAgICBpZiAoY3JpdGVyaWEgJiYgaXNWZXJzaW9uKSB7XG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLm5vcm1hbGl6ZVZlcnNpb24oY3JpdGVyaWEpXG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLm5vcm1hbGl6ZVZlcnNpb24oZGV2aWNlSW5mb1tpXSlcblxuICAgICAgICBpZiAoc2VtdmVyLnNhdGlzZmllcyhkLCBjKSkge1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZ2V0RXJyb3Ioa2V5LCB2YWwsIGNyaXRlcmlhKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzRGV2aWNlTW9kZWwpIHtcbiAgICAgICAgY29uc3QgX2NyaXRlcmlhID0gdHlwb2YoY3JpdGVyaWEpID09PSAnYXJyYXknID8gY3JpdGVyaWEgOiBbY3JpdGVyaWFdXG4gICAgICAgIGlmIChfY3JpdGVyaWEuaW5kZXhPZih2YWwpID49IDApIHtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLmdldEVycm9yKGtleSwgdmFsLCBjcml0ZXJpYSlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9kb3duZ3JhZGUuanNcbiAqKi8iLCJpbXBvcnQge1xuICBpc1dlZXhDb21wb25lbnQsXG4gIGlzV2VleE1vZHVsZSxcbiAgaXNOb3JtYWxNb2R1bGUsXG4gIGlzTnBtTW9kdWxlLFxuICByZW1vdmVXZWV4UHJlZml4LFxuICByZW1vdmVKU1N1cmZpeFxufSBmcm9tICcuLi8uLi91dGlsJ1xuaW1wb3J0IHtcbiAgcmVnaXN0ZXJDdXN0b21Db21wb25lbnQsXG4gIHJlcXVpcmVDdXN0b21Db21wb25lbnQsXG4gIGluaXRNb2R1bGVzXG59IGZyb20gJy4uL3JlZ2lzdGVyJ1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKlxuICogY29tbW9uIG1vZHVsZXMgYXJlIHNoYXJlZCB0byBhbGwgaW5zdGFuY2VzXG4gKiBpdCdzIHZlcnkgZGFuZ2Vyb3VzXG4gKi9cbmxldCBjb21tb25Nb2R1bGVzID0ge31cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDb21tb25Nb2R1bGVzICgpIHtcbiAgY29tbW9uTW9kdWxlcyA9IHt9XG59XG5cbi8qKlxuICogZGVmaW5lKG5hbWUsIGZhY3RvcnkpIGZvciBwcmltYXJ5IHVzYWdlXG4gKiBvclxuICogZGVmaW5lKG5hbWUsIGRlcHMsIGZhY3RvcnkpIGZvciBjb21wYXRpYmlsaXR5XG4gKiBOb3RpY2U6IERPIE5PVCB1c2UgZnVuY3Rpb24gZGVmaW5lKCkge30sXG4gKiBpdCB3aWxsIGNhdXNlIGVycm9yIGFmdGVyIGJ1aWxkZWQgYnkgd2VicGFja1xuICovXG5leHBvcnQgY29uc3QgZGVmaW5lRm4gPSBmdW5jdGlvbiAoYXBwLCBuYW1lLCAuLi5hcmdzKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGRlZmluZSBhIGNvbXBvbmVudCAke25hbWV9YClcblxuICAvLyBhZGFwdCBhcmdzOlxuICAvLyAxLiBuYW1lLCBkZXBzW10sIGZhY3RvcnkoKVxuICAvLyAyLiBuYW1lLCBmYWN0b3J5KClcbiAgLy8gMy4gbmFtZSwgZGVmaW5pdGlvbnt9XG4gIGxldCBmYWN0b3J5LCBkZWZpbml0aW9uXG4gIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICBkZWZpbml0aW9uID0gYXJnc1sxXVxuICB9XG4gIGVsc2Uge1xuICAgIGRlZmluaXRpb24gPSBhcmdzWzBdXG4gIH1cbiAgaWYgKHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZmFjdG9yeSA9IGRlZmluaXRpb25cbiAgICBkZWZpbml0aW9uID0gbnVsbFxuICB9XG5cbiAgLy8gcmVzb2x2ZSBkZWZpbml0aW9uIGZyb20gZmFjdG9yeVxuICBpZiAoZmFjdG9yeSkge1xuICAgIGNvbnN0IHIgPSAobmFtZSkgPT4ge1xuICAgICAgaWYgKGlzV2VleENvbXBvbmVudChuYW1lKSkge1xuICAgICAgICBjb25zdCBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gICAgICAgIHJldHVybiByZXF1aXJlQ3VzdG9tQ29tcG9uZW50KGFwcCwgY2xlYW5OYW1lKVxuICAgICAgfVxuICAgICAgaWYgKGlzV2VleE1vZHVsZShuYW1lKSkge1xuICAgICAgICBjb25zdCBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gICAgICAgIHJldHVybiBhcHAucmVxdWlyZU1vZHVsZShjbGVhbk5hbWUpXG4gICAgICB9XG4gICAgICBpZiAoaXNOb3JtYWxNb2R1bGUobmFtZSkgfHwgaXNOcG1Nb2R1bGUobmFtZSkpIHtcbiAgICAgICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICAgICAgcmV0dXJuIGNvbW1vbk1vZHVsZXNbY2xlYW5OYW1lXVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBtID0geyBleHBvcnRzOiB7fX1cbiAgICBmYWN0b3J5KHIsIG0uZXhwb3J0cywgbSlcbiAgICBkZWZpbml0aW9uID0gbS5leHBvcnRzXG4gIH1cblxuICAvLyBhcHBseSBkZWZpbml0aW9uXG4gIGlmIChpc1dlZXhDb21wb25lbnQobmFtZSkpIHtcbiAgICBjb25zdCBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gICAgcmVnaXN0ZXJDdXN0b21Db21wb25lbnQoYXBwLCBjbGVhbk5hbWUsIGRlZmluaXRpb24pXG4gIH1cbiAgZWxzZSBpZiAoaXNXZWV4TW9kdWxlKG5hbWUpKSB7XG4gICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICAgIGluaXRNb2R1bGVzKHsgW2NsZWFuTmFtZV06IGRlZmluaXRpb24gfSlcbiAgfVxuICBlbHNlIGlmIChpc05vcm1hbE1vZHVsZShuYW1lKSkge1xuICAgIGNvbnN0IGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG4gICAgY29tbW9uTW9kdWxlc1tjbGVhbk5hbWVdID0gZGVmaW5pdGlvblxuICB9XG4gIGVsc2UgaWYgKGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICBpZiAoZGVmaW5pdGlvbi50ZW1wbGF0ZSB8fFxuICAgICAgICBkZWZpbml0aW9uLnN0eWxlIHx8XG4gICAgICAgIGRlZmluaXRpb24ubWV0aG9kcykge1xuICAgICAgLy8gZG93bmdyYWRlIHRvIG9sZCBkZWZpbmUgbWV0aG9kIChkZWZpbmUoJ2NvbXBvbmVudE5hbWUnLCBmYWN0b3J5KSlcbiAgICAgIC8vIHRoZSBleHBvcnRzIGNvbnRhaW4gb25lIGtleSBvZiB0ZW1wbGF0ZSwgc3R5bGUgb3IgbWV0aG9kc1xuICAgICAgLy8gYnV0IGl0IGhhcyByaXNrISEhXG4gICAgICByZWdpc3RlckN1c3RvbUNvbXBvbmVudChhcHAsIGNsZWFuTmFtZSwgZGVmaW5pdGlvbilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb21tb25Nb2R1bGVzW2NsZWFuTmFtZV0gPSBkZWZpbml0aW9uXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyIChhcHAsIHR5cGUsIG9wdGlvbnMpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBSZWdpc3RlciBpcyBkZXByZWNhdGVkLCBwbGVhc2UgaW5zdGFsbCBsYXN0ZXN0IHRyYW5zZm9ybWVyLicpXG4gIHJlZ2lzdGVyQ3VzdG9tQ29tcG9uZW50KGFwcCwgdHlwZSwgb3B0aW9ucylcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvYnVuZGxlL2RlZmluZS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogaW5zdGFuY2UgY29udHJvbHMgZnJvbSBuYXRpdmVcbiAqXG4gKiAtIGZpcmUgZXZlbnRcbiAqIC0gY2FsbGJhY2tcbiAqIC0gcmVmcmVzaFxuICogLSBkZXN0cm95XG4gKlxuICogY29ycmVzcG9uZGVkIHdpdGggdGhlIEFQSSBvZiBpbnN0YW5jZSBtYW5hZ2VyIChmcmFtZXdvcmsuanMpXG4gKi9cbmltcG9ydCB7IGV4dGVuZCwgdHlwb2YgfSBmcm9tICcuLi8uLi91dGlsJ1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4uLy4uL2NvbmZpZydcblxuLyoqXG4gKiBSZWZyZXNoIGFuIGFwcCB3aXRoIGRhdGEgdG8gaXRzIHJvb3QgY29tcG9uZW50IG9wdGlvbnMuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwcFxuICogQHBhcmFtICB7YW55fSAgICBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoIChhcHAsIGRhdGEpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gUmVmcmVzaCB3aXRoYCwgZGF0YSxcbiAgICAgICAgICAgIGBpbiBpbnN0YW5jZVske2FwcC5pZH1dYClcbiAgY29uc3Qgdm0gPSBhcHAudm1cbiAgaWYgKHZtICYmIGRhdGEpIHtcbiAgICAvLyBhcHAuZG9jLmNsb3NlKClcbiAgICBpZiAodHlwZW9mIHZtLnJlZnJlc2hEYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2bS5yZWZyZXNoRGF0YShkYXRhKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGV4dGVuZCh2bSwgZGF0YSlcbiAgICB9XG4gICAgdXBkYXRlQWN0aW9ucyhhcHApXG4gICAgYXBwLmRvYy5saXN0ZW5lci5yZWZyZXNoRmluaXNoKClcbiAgICAvLyBhcHAuZG9jLm9wZW4oKVxuICAgIHJldHVyblxuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgZGF0YSBcIiR7ZGF0YX1cImApXG59XG5cbi8qKlxuICogRGVzdHJveSBhbiBhcHAuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwcFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveSAoYXBwKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIERlc3RvcnkgYW4gaW5zdGFuY2UoJHthcHAuaWR9KWApXG5cbiAgaWYgKGFwcC52bSkge1xuICAgIGRlc3Ryb3lWbShhcHAudm0pXG4gIH1cblxuICBhcHAuaWQgPSAnJ1xuICBhcHAub3B0aW9ucyA9IG51bGxcbiAgYXBwLmJsb2NrcyA9IG51bGxcbiAgYXBwLnZtID0gbnVsbFxuICBhcHAuZG9jLmRlc3Ryb3koKVxuICBhcHAuZG9jID0gbnVsbFxuICBhcHAuY3VzdG9tQ29tcG9uZW50TWFwID0gbnVsbFxuICBhcHAuY2FsbGJhY2tzID0gbnVsbFxufVxuXG4vKipcbiAqIERlc3Ryb3kgYW4gVm0uXG4gKiBAcGFyYW0ge29iamVjdH0gdm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lWbSAodm0pIHtcbiAgZGVsZXRlIHZtLl9hcHBcbiAgZGVsZXRlIHZtLl9jb21wdXRlZFxuICBkZWxldGUgdm0uX2Nzc1xuICBkZWxldGUgdm0uX2RhdGFcbiAgZGVsZXRlIHZtLl9pZHNcbiAgZGVsZXRlIHZtLl9tZXRob2RzXG4gIGRlbGV0ZSB2bS5fb3B0aW9uc1xuICBkZWxldGUgdm0uX3BhcmVudFxuICBkZWxldGUgdm0uX3BhcmVudEVsXG4gIGRlbGV0ZSB2bS5fcm9vdEVsXG5cbiAgLy8gcmVtb3ZlIGFsbCB3YXRjaGVyc1xuICBpZiAodm0uX3dhdGNoZXJzKSB7XG4gICAgbGV0IHdhdGNoZXJDb3VudCA9IHZtLl93YXRjaGVycy5sZW5ndGhcbiAgICB3aGlsZSAod2F0Y2hlckNvdW50LS0pIHtcbiAgICAgIHZtLl93YXRjaGVyc1t3YXRjaGVyQ291bnRdLnRlYXJkb3duKClcbiAgICB9XG4gICAgZGVsZXRlIHZtLl93YXRjaGVyc1xuICB9XG5cbiAgLy8gZGVzdHJveSBjaGlsZCB2bXMgcmVjdXJzaXZlbHlcbiAgaWYgKHZtLl9jaGlsZHJlblZtcykge1xuICAgIGxldCB2bUNvdW50ID0gdm0uX2NoaWxkcmVuVm1zLmxlbmd0aFxuICAgIHdoaWxlICh2bUNvdW50LS0pIHtcbiAgICAgIGRlc3Ryb3lWbSh2bS5fY2hpbGRyZW5WbXNbdm1Db3VudF0pXG4gICAgfVxuICAgIGRlbGV0ZSB2bS5fY2hpbGRyZW5WbXNcbiAgfVxuXG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFwiZGVzdHJveWVkXCIgbGlmZWN5Y2xlIGluIFZtKCR7dm0uX3R5cGV9KWApXG4gIHZtLiRlbWl0KCdob29rOmRlc3Ryb3llZCcpXG5cbiAgZGVsZXRlIHZtLl90eXBlXG4gIGRlbGV0ZSB2bS5fdm1FdmVudHNcbn1cblxuLyoqXG4gKiBHZXQgYSBKU09OIG9iamVjdCB0byBkZXNjcmliZSB0aGUgZG9jdW1lbnQgYm9keS5cbiAqIEBwYXJhbSAge29iamVjdH0gYXBwXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290RWxlbWVudCAoYXBwKSB7XG4gIGNvbnN0IGRvYyA9IGFwcC5kb2MgfHwge31cbiAgY29uc3QgYm9keSA9IGRvYy5ib2R5IHx8IHt9XG4gIHJldHVybiBib2R5LnRvSlNPTiA/IGJvZHkudG9KU09OKCkgOiB7fVxufVxuXG4vKipcbiAqIEZpcmUgYW4gZXZlbnQgZnJvbSByZW5kZXJlci4gVGhlIGV2ZW50IGhhcyB0eXBlLCBhbiBldmVudCBvYmplY3QgYW5kIGFuXG4gKiBlbGVtZW50IHJlZi4gSWYgdGhlIGV2ZW50IGNvbWVzIHdpdGggc29tZSB2aXJ0dWFsLURPTSBjaGFuZ2VzLCBpdCBzaG91bGRcbiAqIGhhdmUgb25lIG1vcmUgcGFyYW1ldGVyIHRvIGRlc2NyaWJlIHRoZSBjaGFuZ2VzLlxuICogQHBhcmFtICB7b2JqZWN0fSBhcHBcbiAqIEBwYXJhbSAge3N0cmluZ30gcmVmXG4gKiBAcGFyYW0gIHt0eXBlfSAgIHR5cGVcbiAqIEBwYXJhbSAge29iamVjdH0gZVxuICogQHBhcmFtICB7b2JqZWN0fSBkb21DaGFuZ2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaXJlRXZlbnQgKGFwcCwgcmVmLCB0eXBlLCBlLCBkb21DaGFuZ2VzKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIEZpcmUgYSBcIiR7dHlwZX1cIiBldmVudCBvbiBhbiBlbGVtZW50KCR7cmVmfSkgaW4gaW5zdGFuY2UoJHthcHAuaWR9KWApXG4gIGlmIChBcnJheS5pc0FycmF5KHJlZikpIHtcbiAgICByZWYuc29tZSgocmVmKSA9PiB7XG4gICAgICByZXR1cm4gYXBwLmZpcmVFdmVudChyZWYsIHR5cGUsIGUpICE9PSBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgZWwgPSBhcHAuZG9jLmdldFJlZihyZWYpXG4gIGlmIChlbCkge1xuICAgIC8vIGFwcC5kb2MuY2xvc2UoKVxuICAgIGNvbnN0IHJlc3VsdCA9IGFwcC5kb2MuZmlyZUV2ZW50KGVsLCB0eXBlLCBlLCBkb21DaGFuZ2VzKVxuICAgIHVwZGF0ZUFjdGlvbnMoYXBwKVxuICAgIGFwcC5kb2MubGlzdGVuZXIudXBkYXRlRmluaXNoKClcbiAgICAvLyBhcHAuZG9jLm9wZW4oKVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGVsZW1lbnQgcmVmZXJlbmNlIFwiJHtyZWZ9XCJgKVxufVxuXG4vKipcbiAqIE1ha2UgYSBjYWxsYmFjayBmb3IgYSBjZXJ0YWluIGFwcC5cbiAqIEBwYXJhbSAge29iamVjdH0gICBhcHBcbiAqIEBwYXJhbSAge251bWJlcn0gICBjYWxsYmFja0lkXG4gKiBAcGFyYW0gIHthbnl9ICAgICAgZGF0YVxuICogQHBhcmFtICB7Ym9vbGVhbn0gIGlmS2VlcEFsaXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxsYmFjayAoYXBwLCBjYWxsYmFja0lkLCBkYXRhLCBpZktlZXBBbGl2ZSkge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBJbnZva2UgYSBjYWxsYmFjaygke2NhbGxiYWNrSWR9KSB3aXRoYCwgZGF0YSxcbiAgICAgICAgICAgIGBpbiBpbnN0YW5jZSgke2FwcC5pZH0pYClcbiAgY29uc3QgY2FsbGJhY2sgPSBhcHAuY2FsbGJhY2tzW2NhbGxiYWNrSWRdXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBhcHAuZG9jLmNsb3NlKClcbiAgICBjYWxsYmFjayhkYXRhKVxuICAgIGlmICh0eXBlb2YgaWZLZWVwQWxpdmUgPT09ICd1bmRlZmluZWQnIHx8IGlmS2VlcEFsaXZlID09PSBmYWxzZSkge1xuICAgICAgYXBwLmNhbGxiYWNrc1tjYWxsYmFja0lkXSA9IHVuZGVmaW5lZFxuICAgIH1cbiAgICB1cGRhdGVBY3Rpb25zKGFwcClcbiAgICBhcHAuZG9jLmxpc3RlbmVyLnVwZGF0ZUZpbmlzaCgpXG4gICAgLy8gYXBwLmRvYy5vcGVuKClcbiAgICByZXR1cm5cbiAgfVxuICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGNhbGxiYWNrIGlkIFwiJHtjYWxsYmFja0lkfVwiYClcbn1cblxuLyoqXG4gKiBDb2xsZWN0IGFsbCB2aXJ0dWFsLURPTSBtdXRhdGlvbnMgdG9nZXRoZXIgYW5kIHNlbmQgdGhlbSB0byByZW5kZXJlci5cbiAqIEBwYXJhbSAge29iamVjdH0gYXBwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBY3Rpb25zIChhcHApIHtcbiAgYXBwLmRpZmZlci5mbHVzaCgpXG4gIGNvbnN0IHRhc2tzID0gW11cbiAgaWYgKGFwcC5kb2MgJiYgYXBwLmRvYy5saXN0ZW5lciAmJiBhcHAuZG9jLmxpc3RlbmVyLnVwZGF0ZXMubGVuZ3RoKSB7XG4gICAgdGFza3MucHVzaCguLi5hcHAuZG9jLmxpc3RlbmVyLnVwZGF0ZXMpXG4gICAgYXBwLmRvYy5saXN0ZW5lci51cGRhdGVzID0gW11cbiAgfVxuICBpZiAodGFza3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNhbGxUYXNrcyhhcHAsIHRhc2tzKVxuICB9XG59XG5cbi8qKlxuICogQ2FsbCBhbGwgdGFza3MgZnJvbSBhbiBhcHAgdG8gcmVuZGVyZXIgKG5hdGl2ZSkuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwcFxuICogQHBhcmFtICB7YXJyYXl9ICB0YXNrc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsbFRhc2tzIChhcHAsIHRhc2tzKSB7XG4gIGlmICh0eXBvZih0YXNrcykgIT09ICdhcnJheScpIHtcbiAgICB0YXNrcyA9IFt0YXNrc11cbiAgfVxuXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrLmFyZ3MgPSB0YXNrLmFyZ3MubWFwKGFyZyA9PiBub3JtYWxpemUoYXJnLCBhcHApKVxuICB9KVxuXG4gIHJldHVybiByZW5kZXJlci5zZW5kVGFza3MoYXBwLmlkLCB0YXNrcywgJy0xJylcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYSB2YWx1ZS4gU3BlY2lhbGx5LCBpZiB0aGUgdmFsdWUgaXMgYSBmdW5jdGlvbiwgdGhlbiBnZW5lcmF0ZSBhIGZ1bmN0aW9uIGlkXG4gKiBhbmQgc2F2ZSBpdCB0byBgYXBwLmNhbGxiYWNrc2AsIGF0IGxhc3QgcmV0dXJuIHRoZSBmdW5jdGlvbiBpZC5cbiAqIEBwYXJhbSAge2FueX0gICAgICAgIHZcbiAqIEBwYXJhbSAge29iamVjdH0gICAgIGFwcFxuICogQHJldHVybiB7cHJpbWl0aXZlfVxuICovXG5mdW5jdGlvbiBub3JtYWxpemUgKHYsIGFwcCkge1xuICBjb25zdCB0eXBlID0gdHlwb2YodilcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgIGNhc2UgJ251bGwnOlxuICAgICAgcmV0dXJuICcnXG4gICAgY2FzZSAncmVnZXhwJzpcbiAgICAgIHJldHVybiB2LnRvU3RyaW5nKClcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIHJldHVybiB2LnRvSVNPU3RyaW5nKClcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgY2FzZSAnYXJyYXknOlxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAodiBpbnN0YW5jZW9mIHJlbmRlcmVyLkVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHYucmVmXG4gICAgICB9XG4gICAgICByZXR1cm4gdlxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIGFwcC5jYWxsYmFja3NbKythcHAudWlkXSA9IHZcbiAgICAgIHJldHVybiBhcHAudWlkLnRvU3RyaW5nKClcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvY3RybC9taXNjLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBXZWV4IEFwcCBjb25zdHJ1Y3RvciAmIGRlZmluaXRpb25cbiAqL1xuXG5pbXBvcnQgRGlmZmVyIGZyb20gJy4vZGlmZmVyJ1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4uL2NvbmZpZydcblxuLyoqXG4gKiBBcHAgY29uc3RydWN0b3IgZm9yIFdlZXggZnJhbWV3b3JrLlxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAgKGlkLCBvcHRpb25zKSB7XG4gIHRoaXMuaWQgPSBpZFxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHRoaXMudm0gPSBudWxsXG4gIHRoaXMuY3VzdG9tQ29tcG9uZW50TWFwID0ge31cbiAgdGhpcy5jYWxsYmFja3MgPSB7fVxuICB0aGlzLmRvYyA9IG5ldyByZW5kZXJlci5Eb2N1bWVudChcbiAgICBpZCxcbiAgICB0aGlzLm9wdGlvbnMuYnVuZGxlVXJsLFxuICAgIG51bGwsXG4gICAgcmVuZGVyZXIuTGlzdGVuZXJcbiAgKVxuICB0aGlzLmRpZmZlciA9IG5ldyBEaWZmZXIoaWQpXG4gIHRoaXMudWlkID0gMFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9pbnN0YW5jZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpZmZlciB7XG4gIGNvbnN0cnVjdG9yIChpZCkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMubWFwID0gW11cbiAgICB0aGlzLmhvb2tzID0gW11cbiAgfVxuICBpc0VtcHR5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAubGVuZ3RoID09PSAwXG4gIH1cbiAgYXBwZW5kICh0eXBlLCBkZXB0aCwgcmVmLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLmhhc1RpbWVyKSB7XG4gICAgICB0aGlzLmhhc1RpbWVyID0gdHJ1ZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFzVGltZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLmZsdXNoKHRydWUpXG4gICAgICB9LCAwKVxuICAgIH1cbiAgICBjb25zdCBtYXAgPSB0aGlzLm1hcFxuICAgIGlmICghbWFwW2RlcHRoXSkge1xuICAgICAgbWFwW2RlcHRoXSA9IHt9XG4gICAgfVxuICAgIGNvbnN0IGdyb3VwID0gbWFwW2RlcHRoXVxuICAgIGlmICghZ3JvdXBbdHlwZV0pIHtcbiAgICAgIGdyb3VwW3R5cGVdID0ge31cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdlbGVtZW50Jykge1xuICAgICAgaWYgKCFncm91cFt0eXBlXVtyZWZdKSB7XG4gICAgICAgIGdyb3VwW3R5cGVdW3JlZl0gPSBbXVxuICAgICAgfVxuICAgICAgZ3JvdXBbdHlwZV1bcmVmXS5wdXNoKGhhbmRsZXIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZ3JvdXBbdHlwZV1bcmVmXSA9IGhhbmRsZXJcbiAgICB9XG4gIH1cbiAgZmx1c2ggKGlzVGltZW91dCkge1xuICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwLnNsaWNlKClcbiAgICB0aGlzLm1hcC5sZW5ndGggPSAwXG4gICAgbWFwLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICBjYWxsVHlwZU1hcChncm91cCwgJ3JlcGVhdCcpXG4gICAgICBjYWxsVHlwZU1hcChncm91cCwgJ3Nob3duJylcbiAgICAgIGNhbGxUeXBlTGlzdChncm91cCwgJ2VsZW1lbnQnKVxuICAgIH0pXG5cbiAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3Muc2xpY2UoKVxuICAgIHRoaXMuaG9va3MubGVuZ3RoID0gMFxuICAgIGhvb2tzLmZvckVhY2goKGZuKSA9PiB7XG4gICAgICBmbigpXG4gICAgfSlcblxuICAgIGlmICghdGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIHRoaXMuZmx1c2goKVxuICAgIH1cbiAgfVxuICB0aGVuIChmbikge1xuICAgIHRoaXMuaG9va3MucHVzaChmbilcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsVHlwZU1hcCAoZ3JvdXAsIHR5cGUpIHtcbiAgY29uc3QgbWFwID0gZ3JvdXBbdHlwZV1cbiAgZm9yIChjb25zdCByZWYgaW4gbWFwKSB7XG4gICAgbWFwW3JlZl0oKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGxUeXBlTGlzdCAoZ3JvdXAsIHR5cGUpIHtcbiAgY29uc3QgbWFwID0gZ3JvdXBbdHlwZV1cbiAgZm9yIChjb25zdCByZWYgaW4gbWFwKSB7XG4gICAgY29uc3QgbGlzdCA9IG1hcFtyZWZdXG4gICAgbGlzdC5mb3JFYWNoKChoYW5kbGVyKSA9PiB7IGhhbmRsZXIoKSB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2RpZmZlci5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBpbnN0YW5jZU1hcCA9IHt9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvc3RhdGljL21hcC5qc1xuICoqLyIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHtcbiAgcmVmcmVzaCxcbiAgZGVzdHJveVxufSBmcm9tICcuLi9hcHAvY3RybCdcbmltcG9ydCB7IGluc3RhbmNlTWFwIH0gZnJvbSAnLi9tYXAnXG5pbXBvcnQgeyBjbGVhckNvbW1vbk1vZHVsZXMgfSBmcm9tICcuLi9hcHAvYnVuZGxlL2RlZmluZSdcblxuLyoqXG4gKiBJbml0IGNvbmZpZyBpbmZvcm1hdGlvbnMgZm9yIFdlZXggZnJhbWV3b3JrXG4gKiBAcGFyYW0gIHtvYmplY3R9IGNmZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdCAoY2ZnKSB7XG4gIGNvbmZpZy5Eb2N1bWVudCA9IGNmZy5Eb2N1bWVudFxuICBjb25maWcuRWxlbWVudCA9IGNmZy5FbGVtZW50XG4gIGNvbmZpZy5Db21tZW50ID0gY2ZnLkNvbW1lbnRcbiAgY29uZmlnLnNlbmRUYXNrcyA9IGNmZy5zZW5kVGFza3NcbiAgY29uZmlnLkxpc3RlbmVyID0gY2ZnLkxpc3RlbmVyXG59XG5cbi8qKlxuICogUmVmcmVzaCBhIFdlZXggaW5zdGFuY2Ugd2l0aCBkYXRhLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEBwYXJhbSAge29iamVjdH0gZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaEluc3RhbmNlIChpZCwgZGF0YSkge1xuICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2lkXVxuICBsZXQgcmVzdWx0XG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJlc3VsdCA9IHJlZnJlc2goaW5zdGFuY2UsIGRhdGEpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIERlc3Ryb3kgYSBXZWV4IGluc3RhbmNlLlxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveUluc3RhbmNlIChpZCkge1xuICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2lkXVxuICBpZiAoIWluc3RhbmNlKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxuICB9XG4gIGRlc3Ryb3koaW5zdGFuY2UpXG4gIGNsZWFyQ29tbW9uTW9kdWxlcygpXG4gIGRlbGV0ZSBpbnN0YW5jZU1hcFtpZF1cbiAgcmV0dXJuIGluc3RhbmNlTWFwXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvc3RhdGljL2xpZmUuanNcbiAqKi8iLCJpbXBvcnQgVm0gZnJvbSAnLi4vdm0nXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7XG4gIGluaXRNb2R1bGVzLFxuICBpbml0TWV0aG9kc1xufSBmcm9tICcuLi9hcHAvcmVnaXN0ZXInXG5cbmNvbnN0IHtcbiAgbmF0aXZlQ29tcG9uZW50TWFwXG59ID0gY29uZmlnXG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIG5hbWUgb2YgZWFjaCBuYXRpdmUgY29tcG9uZW50LlxuICogQHBhcmFtICB7YXJyYXl9IGNvbXBvbmVudHMgYXJyYXkgb2YgbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnRzIChjb21wb25lbnRzKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGNvbXBvbmVudHMpKSB7XG4gICAgY29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIHJlZ2lzdGVyIChuYW1lKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghbmFtZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbmF0aXZlQ29tcG9uZW50TWFwW25hbWVdID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBuYW1lLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hdGl2ZUNvbXBvbmVudE1hcFtuYW1lLnR5cGVdID0gbmFtZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgbmFtZSBhbmQgbWV0aG9kcyBvZiBlYWNoIG1vZHVsZS5cbiAqIEBwYXJhbSAge29iamVjdH0gbW9kdWxlcyBhIG9iamVjdCBvZiBtb2R1bGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1vZHVsZXMgKG1vZHVsZXMpIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnb2JqZWN0Jykge1xuICAgIGluaXRNb2R1bGVzKG1vZHVsZXMpXG4gIH1cbn1cblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgbmFtZSBhbmQgbWV0aG9kcyBvZiBlYWNoIGFwaS5cbiAqIEBwYXJhbSAge29iamVjdH0gYXBpcyBhIG9iamVjdCBvZiBhcGlzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1ldGhvZHMgKG1ldGhvZHMpIHtcbiAgaWYgKHR5cGVvZiBtZXRob2RzID09PSAnb2JqZWN0Jykge1xuICAgIGluaXRNZXRob2RzKFZtLCBtZXRob2RzKVxuICB9XG59XG5cbi8vIEB0b2RvOiBIYWNrIGZvciB0aGlzIGZyYW1ld29yayBvbmx5LiBXaWxsIGJlIHJlLWRlc2lnbmVkIG9yIHJlbW92ZWQgbGF0ZXIuXG5nbG9iYWwucmVnaXN0ZXJNZXRob2RzID0gcmVnaXN0ZXJNZXRob2RzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvc3RhdGljL3JlZ2lzdGVyLmpzXG4gKiovIiwiaW1wb3J0IHsgaW5zdGFuY2VNYXAgfSBmcm9tICcuL21hcCdcbmltcG9ydCB7XG4gIGZpcmVFdmVudCxcbiAgY2FsbGJhY2tcbn0gZnJvbSAnLi4vYXBwL2N0cmwnXG5cbmNvbnN0IGpzSGFuZGxlcnMgPSB7XG4gIGZpcmVFdmVudDogKGlkLCAuLi5hcmdzKSA9PiB7XG4gICAgcmV0dXJuIGZpcmVFdmVudChpbnN0YW5jZU1hcFtpZF0sIC4uLmFyZ3MpXG4gIH0sXG4gIGNhbGxiYWNrOiAoaWQsIC4uLmFyZ3MpID0+IHtcbiAgICByZXR1cm4gY2FsbGJhY2soaW5zdGFuY2VNYXBbaWRdLCAuLi5hcmdzKVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0IGNhbGxzIGZyb20gbmF0aXZlIChldmVudCBvciBjYWxsYmFjaykuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHBhcmFtICB7YXJyYXl9IHRhc2tzIGxpc3Qgd2l0aCBgbWV0aG9kYCBhbmQgYGFyZ3NgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWNlaXZlVGFza3MgKGlkLCB0YXNrcykge1xuICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2lkXVxuICBpZiAoaW5zdGFuY2UgJiYgQXJyYXkuaXNBcnJheSh0YXNrcykpIHtcbiAgICBjb25zdCByZXN1bHRzID0gW11cbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBoYW5kbGVyID0ganNIYW5kbGVyc1t0YXNrLm1ldGhvZF1cbiAgICAgIGNvbnN0IGFyZ3MgPSBbLi4udGFzay5hcmdzXVxuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFyZ3MudW5zaGlmdChpZClcbiAgICAgICAgcmVzdWx0cy5wdXNoKGhhbmRsZXIoLi4uYXJncykpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiIG9yIHRhc2tzYClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9zdGF0aWMvYnJpZGdlLmpzXG4gKiovIiwiaW1wb3J0IHsgaW5zdGFuY2VNYXAgfSBmcm9tICcuL21hcCdcbmltcG9ydCB7XG4gIGdldFJvb3RFbGVtZW50XG59IGZyb20gJy4uL2FwcC9jdHJsJ1xuXG4vKipcbiAqIEdldCBhIHdob2xlIGVsZW1lbnQgdHJlZSBvZiBhbiBpbnN0YW5jZSBmb3IgZGVidWdnaW5nLlxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7b2JqZWN0fSBhIHZpcnR1YWwgZG9tIHRyZWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3QgKGlkKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaWRdXG4gIGxldCByZXN1bHRcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmVzdWx0ID0gZ2V0Um9vdEVsZW1lbnQoaW5zdGFuY2UpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdGFuY3kvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9taXNjLmpzXG4gKiovIiwibGV0IGZyYW1ld29ya3NcblxuY29uc3QgdmVyc2lvblJlZ0V4cCA9IC9eXFwvXFwvICooXFx7W15cXH1dKlxcfSkgKlxccj9cXG4vXG5cbi8qKlxuICogRGV0ZWN0IGEgSlMgQnVuZGxlIGNvZGUgYW5kIG1ha2Ugc3VyZSB3aGljaCBmcmFtZXdvcmsgaXQncyBiYXNlZCB0by4gRWFjaCBKU1xuICogQnVuZGxlIHNob3VsZCBtYWtlIHN1cmUgdGhhdCBpdCBzdGFydHMgd2l0aCBhIGxpbmUgb2YgSlNPTiBjb21tZW50IGFuZCBpc1xuICogbW9yZSB0aGF0IG9uZSBsaW5lLlxuICogQHBhcmFtICB7c3RyaW5nfSBjb2RlXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGNoZWNrVmVyc2lvbiAoY29kZSkge1xuICBsZXQgaW5mb1xuICBjb25zdCByZXN1bHQgPSB2ZXJzaW9uUmVnRXhwLmV4ZWMoY29kZSlcbiAgaWYgKHJlc3VsdCkge1xuICAgIHRyeSB7XG4gICAgICBpbmZvID0gSlNPTi5wYXJzZShyZXN1bHRbMV0pXG4gICAgfVxuICAgIGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiBpbmZvXG59XG5cbmNvbnN0IGluc3RhbmNlTWFwID0ge31cblxuLyoqXG4gKiBDaGVjayB3aGljaCBmcmFtZXdvcmsgYSBjZXJ0YWluIEpTIEJ1bmRsZSBjb2RlIGJhc2VkIHRvLiBBbmQgY3JlYXRlIGluc3RhbmNlXG4gKiBieSB0aGlzIGZyYW1ld29yay5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHBhcmFtIHtzdHJpbmd9IGNvZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlIChpZCwgY29kZSwgY29uZmlnLCBkYXRhKSB7XG4gIGxldCBpbmZvID0gaW5zdGFuY2VNYXBbaWRdXG4gIGlmICghaW5mbykge1xuICAgIGluZm8gPSBjaGVja1ZlcnNpb24oY29kZSkgfHwge31cbiAgICBpZiAoIWZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdKSB7XG4gICAgICBpbmZvLmZyYW1ld29yayA9ICdXZWV4J1xuICAgIH1cbiAgICBpbnN0YW5jZU1hcFtpZF0gPSBpbmZvXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9XG4gICAgY29uZmlnLmJ1bmRsZVZlcnNpb24gPSBpbmZvLnZlcnNpb25cbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjcmVhdGUgYW4gJHtpbmZvLmZyYW1ld29ya31AJHtjb25maWcuYnVuZGxlVmVyc2lvbn0gaW5zdGFuY2UgZnJvbSAke2NvbmZpZy5idW5kbGVWZXJzaW9ufWApXG4gICAgcmV0dXJuIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdLmNyZWF0ZUluc3RhbmNlKGlkLCBjb2RlLCBjb25maWcsIGRhdGEpXG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxufVxuXG5jb25zdCBtZXRob2RzID0ge1xuICBjcmVhdGVJbnN0YW5jZVxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIG1ldGhvZHMgd2hpY2ggaW5pdCBlYWNoIGZyYW1ld29ya3MuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICovXG5mdW5jdGlvbiBnZW5Jbml0IChtZXRob2ROYW1lKSB7XG4gIG1ldGhvZHNbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiBmcmFtZXdvcmtzKSB7XG4gICAgICBjb25zdCBmcmFtZXdvcmsgPSBmcmFtZXdvcmtzW25hbWVdXG4gICAgICBpZiAoZnJhbWV3b3JrICYmIGZyYW1ld29ya1ttZXRob2ROYW1lXSkge1xuICAgICAgICBmcmFtZXdvcmtbbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZWdpc3RlciBtZXRob2RzIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGluc3RhbmNlLlxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAqL1xuZnVuY3Rpb24gZ2VuSW5zdGFuY2UgKG1ldGhvZE5hbWUpIHtcbiAgbWV0aG9kc1ttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgY29uc3QgaWQgPSBhcmdzWzBdXG4gICAgY29uc3QgaW5mbyA9IGluc3RhbmNlTWFwW2lkXVxuICAgIGlmIChpbmZvICYmIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdKSB7XG4gICAgICByZXR1cm4gZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya11bbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxuICB9XG59XG5cbi8qKlxuICogQWRhcHQgc29tZSBsZWdhY3kgbWV0aG9kKHMpIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGluc3RhbmNlLiBUaGVzZVxuICogbWV0aG9kcyBzaG91bGQgYmUgZGVwcmVjYXRlZCBhbmQgcmVtb3ZlZCBsYXRlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gbmF0aXZlTWV0aG9kTmFtZVxuICovXG5mdW5jdGlvbiBhZGFwdEluc3RhbmNlIChtZXRob2ROYW1lLCBuYXRpdmVNZXRob2ROYW1lKSB7XG4gIG1ldGhvZHNbbmF0aXZlTWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNvbnN0IGlkID0gYXJnc1swXVxuICAgIGNvbnN0IGluZm8gPSBpbnN0YW5jZU1hcFtpZF1cbiAgICBpZiAoaW5mbyAmJiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXSkge1xuICAgICAgcmV0dXJuIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0IChjb25maWcpIHtcbiAgZnJhbWV3b3JrcyA9IGNvbmZpZy5mcmFtZXdvcmtzIHx8IHt9XG5cbiAgLy8gSW5pdCBlYWNoIGZyYW1ld29yayBieSBgaW5pdGAgbWV0aG9kIGFuZCBgY29uZmlnYCB3aGljaCBjb250YWlucyB0aHJlZVxuICAvLyB2aXJ0dWFsLURPTSBDbGFzczogYERvY3VtZW50YCwgYEVsZW1lbnRgICYgYENvbW1lbnRgLCBhbmQgYSBKUyBicmlkZ2UgbWV0aG9kOlxuICAvLyBgc2VuZFRhc2tzKC4uLmFyZ3MpYC5cbiAgZm9yIChjb25zdCBuYW1lIGluIGZyYW1ld29ya3MpIHtcbiAgICBjb25zdCBmcmFtZXdvcmsgPSBmcmFtZXdvcmtzW25hbWVdXG4gICAgZnJhbWV3b3JrLmluaXQoY29uZmlnKVxuICB9XG5cbiAgLy8gQHRvZG86IFRoZSBtZXRob2QgYHJlZ2lzdGVyTWV0aG9kc2Agd2lsbCBiZSByZS1kZXNpZ25lZCBvciByZW1vdmVkIGxhdGVyLlxuICA7IFsncmVnaXN0ZXJDb21wb25lbnRzJywgJ3JlZ2lzdGVyTW9kdWxlcycsICdyZWdpc3Rlck1ldGhvZHMnXS5mb3JFYWNoKGdlbkluaXQpXG5cbiAgOyBbJ2Rlc3Ryb3lJbnN0YW5jZScsICdyZWZyZXNoSW5zdGFuY2UnLCAncmVjZWl2ZVRhc2tzJywgJ2dldFJvb3QnXS5mb3JFYWNoKGdlbkluc3RhbmNlKVxuXG4gIGFkYXB0SW5zdGFuY2UoJ3JlY2VpdmVUYXNrcycsICdjYWxsSlMnKVxuXG4gIHJldHVybiBtZXRob2RzXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL3J1bnRpbWUvaW5pdC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hbWVcIjogXCJ3ZWV4LWpzLWZyYW1ld29ya1wiLFxuXHRcInZlcnNpb25cIjogXCIwLjE1LjlcIixcblx0XCJzdWJ2ZXJzaW9uXCI6IHtcblx0XHRcImZyYW1ld29ya1wiOiBcIjAuMTUuOVwiLFxuXHRcdFwidHJhbnNmb3JtZXJcIjogXCI+PTAuMS41IDwwLjRcIlxuXHR9LFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiV2VleCBKUyBGcmFtZXdvcmtcIixcblx0XCJrZXl3b3Jkc1wiOiBbXG5cdFx0XCJ3ZWV4XCIsXG5cdFx0XCJtdnZtXCIsXG5cdFx0XCJqYXZhc2NyaXB0XCIsXG5cdFx0XCJodG1sNVwiXG5cdF0sXG5cdFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2FsaWJhYmEuZ2l0aHViLmlvL3dlZXhcIixcblx0XCJidWdzXCI6IHtcblx0XHRcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbGliYWJhL3dlZXgvaXNzdWVzXCJcblx0fSxcblx0XCJsaWNlbnNlXCI6IFwiQXBhY2hlLTIuMFwiLFxuXHRcImF1dGhvclwiOiBcIkppbmppYW5nIDx6aGFvamluamlhbmdAbWUuY29tPlwiLFxuXHRcIm1haW50YWluZXJzXCI6IFtcblx0XHRcInRlcnJ5a2luZ2NoYSA8dGVycnlraW5nY2hhQGdtYWlsLmNvbT5cIixcblx0XHRcIklza2VuSHVhbmcgPGlza2VuaHVhbmdAZ21haWwuY29tPlwiLFxuXHRcdFwieXVhbnlhbiA8eXVhbnlhbi5jYW9AZ21haWwuY29tPlwiXG5cdF0sXG5cdFwibWFpblwiOiBcImluZGV4LmpzXCIsXG5cdFwicmVwb3NpdG9yeVwiOiB7XG5cdFx0XCJ0eXBlXCI6IFwiZ2l0XCIsXG5cdFx0XCJ1cmxcIjogXCJnaXRAZ2l0aHViLmNvbTphbGliYWJhL3dlZXguZ2l0XCJcblx0fSxcblx0XCJzY3JpcHRzXCI6IHtcblx0XHRcInRlc3RcIjogXCJlY2hvIFxcXCJFcnJvcjogbm8gdGVzdCBzcGVjaWZpZWRcXFwiICYmIGV4aXQgMVwiXG5cdH0sXG5cdFwiZGVwZW5kZW5jaWVzXCI6IHtcblx0XHRcImNvcmUtanNcIjogXCJeMi40LjBcIixcblx0XHRcInNlbXZlclwiOiBcIl41LjEuMFwiXG5cdH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi90YW5jeS93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvcGFja2FnZS5qc29uXG4gKiogbW9kdWxlIGlkID0gMTE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgVGhlIGFwaSBmb3IgaW52b2tpbmcgd2l0aCBcIiRcIiBwcmVmaXhcbiAqL1xuaW1wb3J0IHsgZXh0ZW5kLCB0eXBvZiB9IGZyb20gJy4uL3V0aWwnXG5cbi8qKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogY29tbW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgJHZtIGluc3RlYWRcbiAqIGZpbmQgdGhlIHZtIGJ5IGlkXG4gKiBOb3RlOiB0aGVyZSBpcyBvbmx5IG9uZSBpZCBpbiB3aG9sZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge1ZtfVxuICovXG5leHBvcnQgZnVuY3Rpb24gJCAoaWQpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgVm0jJHZtIGluc3RlYWQnKVxuICBjb25zdCBpbmZvID0gdGhpcy5faWRzW2lkXVxuICBpZiAoaW5mbykge1xuICAgIHJldHVybiBpbmZvLnZtXG4gIH1cbn1cblxuLyoqXG4gKiBmaW5kIHRoZSBlbGVtZW50IGJ5IGlkXG4gKiBOb3RlOiB0aGVyZSBpcyBvbmx5IG9uZSBpZCBpbiB3aG9sZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkZWwgKGlkKSB7XG4gIGNvbnN0IGluZm8gPSB0aGlzLl9pZHNbaWRdXG4gIGlmIChpbmZvKSB7XG4gICAgcmV0dXJuIGluZm8uZWxcbiAgfVxufVxuXG4vKipcbiAqIGZpbmQgdGhlIHZtIG9mIHRoZSBjdXN0b20gY29tcG9uZW50IGJ5IGlkXG4gKiBOb3RlOiB0aGVyZSBpcyBvbmx5IG9uZSBpZCBpbiB3aG9sZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge1ZtfVxuICovXG5leHBvcnQgZnVuY3Rpb24gJHZtIChpZCkge1xuICBjb25zdCBpbmZvID0gdGhpcy5faWRzW2lkXVxuICBpZiAoaW5mbykge1xuICAgIHJldHVybiBpbmZvLnZtXG4gIH1cbn1cblxuLyoqXG4gKiBGaXJlIHdoZW4gZGlmZmVyIHJlbmRlcmluZyBmaW5pc2hlZFxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmblxuICovXG5leHBvcnQgZnVuY3Rpb24gJHJlbmRlclRoZW4gKGZuKSB7XG4gIGNvbnN0IGFwcCA9IHRoaXMuX2FwcFxuICBjb25zdCBkaWZmZXIgPSBhcHAuZGlmZmVyXG4gIHJldHVybiBkaWZmZXIudGhlbigoKSA9PiB7XG4gICAgZm4oKVxuICB9KVxufVxuXG4vKipcbiAqIHNjcm9sbCBhbiBlbGVtZW50IHNwZWNpZmllZCBieSBpZCBpbnRvIHZpZXcsXG4gKiBtb3Jlb3ZlciBzcGVjaWZ5IGEgbnVtYmVyIG9mIG9mZnNldCBvcHRpb25hbGx5XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG9mZnNldFxuICovXG5leHBvcnQgZnVuY3Rpb24gJHNjcm9sbFRvIChpZCwgb2Zmc2V0KSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJHNjcm9sbFRvIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvZG9tXFwnKScgK1xuICAgICAgICAgICcuc2Nyb2xsVG8oZWwsIG9wdGlvbnMpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IGVsID0gdGhpcy4kZWwoaWQpXG4gIGlmIChlbCkge1xuICAgIGNvbnN0IGRvbSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdkb20nKVxuICAgIGRvbS5zY3JvbGxUb0VsZW1lbnQoZWwucmVmLCB7IG9mZnNldDogb2Zmc2V0IH0pXG4gIH1cbn1cblxuLyoqXG4gKiBwZXJmb3JtIHRyYW5zaXRpb24gYW5pbWF0aW9uIG9uIGFuIGVsZW1lbnQgc3BlY2lmaWVkIGJ5IGlkXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgaWRcbiAqIEBwYXJhbSAge29iamVjdH0gICBvcHRpb25zXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgb3B0aW9ucy5zdHlsZXNcbiAqIEBwYXJhbSAge29iamVjdH0gICBvcHRpb25zLmR1cmF0aW9uKG1zKVxuICogQHBhcmFtICB7b2JqZWN0fSAgIFtvcHRpb25zLnRpbWluZ0Z1bmN0aW9uXVxuICogQHBhcmFtICB7b2JqZWN0fSAgIFtvcHRpb25zLmRlbGF5PTAobXMpXVxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkdHJhbnNpdGlvbiAoaWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGVsID0gdGhpcy4kZWwoaWQpXG4gIGlmIChlbCAmJiBvcHRpb25zICYmIG9wdGlvbnMuc3R5bGVzKSB7XG4gICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ2FuaW1hdGlvbicpXG4gICAgYW5pbWF0aW9uLnRyYW5zaXRpb24oZWwucmVmLCBvcHRpb25zLCAoLi4uYXJncykgPT4ge1xuICAgICAgdGhpcy5fc2V0U3R5bGUoZWwsIG9wdGlvbnMuc3R5bGVzKVxuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soLi4uYXJncylcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogZ2V0IHNvbWUgY29uZmlnXG4gKiBAcmV0dXJuIHtvYmplY3R9IHNvbWUgY29uZmlnIGZvciBhcHAgaW5zdGFuY2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBidW5kbGVVcmxcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGVidWdcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBlbnZcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYud2VleFZlcnNpb24oZXguIDEuMC4wKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5hcHBOYW1lKGV4LiBUQi9UTSlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYuYXBwVmVyc2lvbihleC4gNS4wLjApXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LnBsYXRmb3JtKGV4LiBpT1MvQW5kcm9pZClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYub3NWZXJzaW9uKGV4LiA3LjAuMClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYuZGV2aWNlTW9kZWwgKipuYXRpdmUgb25seSoqXG4gKiBAcHJvcGVydHkge251bWJlcn0gZW52LltkZXZpY2VXaWR0aD03NTBdXG4gKiBAcHJvcGVydHkge251bWJlcn0gZW52LmRldmljZUhlaWdodFxuICovXG5leHBvcnQgZnVuY3Rpb24gJGdldENvbmZpZyAoY2FsbGJhY2spIHtcbiAgY29uc3QgY29uZmlnID0gZXh0ZW5kKHtcbiAgICBlbnY6IGdsb2JhbC5XWEVudmlyb25tZW50IHx8IHt9XG4gIH0sIHRoaXMuX2FwcC5vcHRpb25zKVxuICBpZiAodHlwb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSB0aGUgY2FsbGJhY2sgb2YgVm0jJGdldENvbmZpZyhjYWxsYmFjaykgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAndGhpcyBhcGkgbm93IGNhbiBkaXJlY3RseSBSRVRVUk4gY29uZmlnIGluZm8uJylcbiAgICBjYWxsYmFjayhjb25maWcpXG4gIH1cbiAgcmV0dXJuIGNvbmZpZ1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiByZXF1ZXN0IG5ldHdvcmsgdmlhIGh0dHAgcHJvdG9jb2xcbiAqIEBwYXJhbSAge29iamVjdH0gICBwYXJhbXNcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJHNlbmRIdHRwIChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJHNlbmRIdHRwIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvc3RyZWFtXFwnKScgK1xuICAgICAgICAgICcuc2VuZEh0dHAocGFyYW1zLCBjYWxsYmFjaylcIiBpbnN0ZWFkJylcbiAgY29uc3Qgc3RyZWFtID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpXG4gIHN0cmVhbS5zZW5kSHR0cChwYXJhbXMsIGNhbGxiYWNrKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiBvcGVuIGEgdXJsXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVybFxuICovXG5leHBvcnQgZnVuY3Rpb24gJG9wZW5VUkwgKHVybCkge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRvcGVuVVJMIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvZXZlbnRcXCcpJyArXG4gICAgICAgICAgJy5vcGVuVVJMKHVybClcIiBpbnN0ZWFkJylcbiAgY29uc3QgZXZlbnQgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnZXZlbnQnKVxuICBldmVudC5vcGVuVVJMKHVybClcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogc2V0IGEgdGl0bGUgZm9yIHBhZ2VcbiAqIEBwYXJhbSAge3N0cmluZ30gdGl0bGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzZXRUaXRsZSAodGl0bGUpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkc2V0VGl0bGUgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9wYWdlSW5mb1xcJyknICtcbiAgICAgICAgICAnLnNldFRpdGxlKHRpdGxlKVwiIGluc3RlYWQnKVxuICBjb25zdCBwYWdlSW5mbyA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdwYWdlSW5mbycpXG4gIHBhZ2VJbmZvLnNldFRpdGxlKHRpdGxlKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIHVzZSBcInJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9tb2R1bGVOYW1lJykgaW5zdGVhZFwiXG4gKiBpbnZva2UgYSBuYXRpdmUgbWV0aG9kIGJ5IHNwZWNpZmluZyB0aGUgbmFtZSBvZiBtb2R1bGUgYW5kIG1ldGhvZFxuICogQHBhcmFtICB7c3RyaW5nfSBtb2R1bGVOYW1lXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAqIEBwYXJhbSAgey4uLip9IHRoZSByZXN0IGFyZ3VtZW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gJGNhbGwgKG1vZHVsZU5hbWUsIG1ldGhvZE5hbWUsIC4uLmFyZ3MpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkY2FsbCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL21vZHVsZU5hbWVcXCcpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IG1vZHVsZSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKG1vZHVsZU5hbWUpXG4gIGlmIChtb2R1bGUgJiYgbW9kdWxlW21ldGhvZE5hbWVdKSB7XG4gICAgbW9kdWxlW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3RhbmN5L3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcGkvbWV0aG9kcy5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlldyBUaGUgYXBpIGZvciBpbnZva2luZyB3aXRoIFwiJFwiIHByZWZpeFxuICovXG5cbi8qKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogcHJpdmF0ZSBmb3IgYWxpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLyoqXG4gKiBpbnZva2UgdXNlci10cmFjayBvbiBUYW9iYW8gTW9ibGllXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZe+8mmVudGVyLCBjbGljaywgZXhwb3NlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGNvbU5hbWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbVxuKi9cbmV4cG9ydCBmdW5jdGlvbiAkdXNlclRyYWNrKHR5cGUsIG5hbWUsIGNvbU5hbWUsIHBhcmFtKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJHVzZXJUcmFjayBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3VzZXJUcmFja1xcJyknICtcbiAgICAgICAgICAnLmNvbW1pdCh0eXBlLCBuYW1lLCBjb21OYW1lLCBwYXJhbSlcIiBpbnN0ZWFkJylcbiAgY29uc3QgdXNlclRyYWNrID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3VzZXJUcmFjaycpXG4gIHVzZXJUcmFjay5jb21taXQodHlwZSwgbmFtZSwgY29tTmFtZSwgcGFyYW0pXG59XG5cbi8qKlxuICogcmVxdWVzdCBhIHJlc3RmdWxsIGFwaSB2aWEgdGhlIG10b3AgZ2F0ZXdheVxuICogQHBhcmFtICB7b2JqZWN0fSAgIHBhcmFtc1xuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkc2VuZE10b3AocGFyYW1zLCBjYWxsYmFjaykge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRzZW5kTXRvcCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3N0cmVhbVxcJyknICtcbiAgICAgICAgICAnLnNlbmRNdG9wKHBhcmFtcywgY2FsbGJhY2spXCIgaW5zdGVhZCcpXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIGluIG5hdGl2Ze+8jHVzZSB3aW5kdmFuZVxuICAgIGNvbnN0IHdpbmR2YW5lID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3dpbmR2YW5lJylcbiAgICB3aW5kdmFuZS5jYWxsKHtcbiAgICAgIGNsYXNzOiAnTXRvcFdWUGx1Z2luJyxcbiAgICAgIG1ldGhvZDogJ3NlbmQnLFxuICAgICAgZGF0YTogcGFyYW1zXG4gICAgfSwgY2FsbGJhY2spXG4gIH0gZWxzZSB7XG4gICAgLy8gaW4gd2ViIGJyd29zZXLvvIx1c2Ugc3RyZWFtLnNlbmRNdG9wXG4gICAgY29uc3Qgc3RyZWFtID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpXG4gICAgc3RyZWFtLnNlbmRNdG9wKHBhcmFtcywgY2FsbGJhY2spXG4gIH1cbn1cblxuLyoqXG4gKiByZXF1ZXN0IGEgbmF0aXZlIGFwaSB2aWEgd2luZHZhbmUgcHJvdG9jb2xcbiAqIEBwYXJhbSAge29iamVjdH0gICBwYXJhbXNcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJGNhbGxXaW5kdmFuZShwYXJhbXMsIGNhbGxiYWNrKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJGNhbGxXaW5kdmFuZSBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3dpbmR2YW5lXFwnKScgK1xuICAgICAgICAgICcuY2FsbChwYXJhbXMsIGNhbGxiYWNrKVwiIGluc3RlYWQnKVxuICBjb25zdCB3aW5kdmFuZSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCd3aW5kdmFuZScpXG4gIHdpbmR2YW5lLmNhbGwocGFyYW1zLCBjYWxsYmFjaylcbn1cblxuLyoqXG4gKiBzZXQgc3BtIGZvciB0aGUgcGFnZVxuICogQHBhcmFtICB7c3RyaW5nfSBhXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzZXRTcG0oYSwgYikge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRzZXRTcG0gaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9wYWdlSW5mb1xcJyknICtcbiAgICAgICAgICAnLnNldFNwbShhLCBiKVwiIGluc3RlYWQnKVxuICBjb25zdCBwYWdlSW5mbyA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdwYWdlSW5mbycpXG4gIHBhZ2VJbmZvLnNldFNwbShhLCBiKVxufVxuXG4vKipcbiAqIGdldCB0aGUgaW5mb3JtYXRpb24gb2YgdGhlIGN1cnJlbnQgbG9naW5lZCB1c2VyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRnZXRVc2VySW5mbyhjYWxsYmFjaykge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRnZXRVc2VySW5mbyBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3VzZXJcXCcpJyArXG4gICAgICAgICAgJy5nZXRVc2VySW5mbyhjYWxsYmFjaylcIiBpbnN0ZWFkJylcbiAgY29uc3QgdXNlciA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCd1c2VyJylcbiAgdXNlci5nZXRVc2VySW5mbyhjYWxsYmFjaylcbn1cblxuLyoqXG4gKiBwZXJmb3JtIGxvZ2luXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRsb2dpbihjYWxsYmFjaykge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRsb2dpbiBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3VzZXJcXCcpJyArXG4gICAgICAgICAgJy5sb2dpbihjYWxsYmFjaylcIiBpbnN0ZWFkJylcbiAgY29uc3QgdXNlciA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCd1c2VyJylcbiAgdXNlci5sb2dpbihjYWxsYmFjaylcbn1cblxuLyoqXG4gKiBwZXJmb3JtIGxvZ291dFxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkbG9nb3V0KGNhbGxiYWNrKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJGxvZ291dCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3VzZXJcXCcpJyArXG4gICAgICAgICAgJy5sb2dvdXQoY2FsbGJhY2spXCIgaW5zdGVhZCcpXG4gIGNvbnN0IHVzZXIgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgndXNlcicpXG4gIHVzZXIubG9nb3V0KGNhbGxiYWNrKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvYXBpL21ldGhvZHMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9