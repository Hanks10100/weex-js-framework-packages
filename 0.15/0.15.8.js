(this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK: 0.15.8 Build 20160923');(this.getJSFMVersion = function(){return "0.15.8"});
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
	
	    // const addElementTask = tasks.filter(task => {
	    //   return task.module === 'dom' && task.method === 'addElement'
	    // });
	    //
	    // const otherTasks = tasks.filter(task => {
	    //   return task.module !== 'dom' || task.method !== 'addElement'
	    // });
	
	    // console.log('====>', addElementTask)
	    // console.log('----->', otherTasks)
	
	    tasks.forEach(function (task) {
	      if (task.module === 'dom' && task.method === 'addElement') {
	        var _task$args = _slicedToArray(task.args, 3);
	
	        var ref = _task$args[0];
	        var json = _task$args[1];
	        var index = _task$args[2];
	
	        callAddElement(id, ref, json, index, '-1');
	      } else {
	        callNative(id, [task], '-1');
	      }
	    });
	
	    // let returnValue;
	    // if (otherTasks && otherTasks.length) {
	    //   returnValue = callNative(id, otherTasks, '-1')
	    // }
	    //
	    // if (addElementTask && addElementTask.length) {       // dom.addElement
	    // // if (false) {
	    //   addElementTask.forEach(task => {
	    //     const [ref, json, index] = task.args
	    //     callAddElement(id, ref, json, index, -1)
	    //   });
	    // }
	    //
	    // return returnValue;
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
		"version": "0.15.8",
		"subversion": {
			"framework": "0.15.8",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTJhZTIxYzI2ZDRiOTAyZjdhY2IiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvbmF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL3NldFRpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9zaGFyZWQvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL3NoYXJlZC9jb25zb2xlLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL29iamVjdEFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL3J1bnRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy92ZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvdmRvbS9saXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL3J1bnRpbWUvY29uZmlnLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvc3RhdGljL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9jdHJsL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvY3RybC9pbml0LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC91dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvYnVuZGxlL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvYnVuZGxlL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9zZW12ZXIvc2VtdmVyLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvcHJvY2Vzcy8wLjExLjkvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC92bS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS93YXRjaGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9jb3JlL2RlcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS9hcnJheS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvdm0vY29tcGlsZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3ZtL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29uZmlnLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC92bS9kb20taGVscGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC92bS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9kb3duZ3JhZGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9idW5kbGUvZGVmaW5lLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvY3RybC9taXNjLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9kaWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9saWZlLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9zdGF0aWMvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9icmlkZ2UuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9taXNjLmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvcnVudGltZS9pbml0LmpzIiwid2VicGFjazovLy8vVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9wYWNrYWdlLmpzb24iLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwaS9tZXRob2RzLmpzIiwid2VicGFjazovLy8uL2xpYi9hcGkvbWV0aG9kcy5qcyJdLCJuYW1lcyI6WyJtZXRob2RzIiwicmVxdWlyZSIsImdsb2JhbCIsInJlZ2lzdGVyTWV0aG9kcyIsIm5hdGl2ZSIsInRyYW5zZm9ybWVyIiwibWV0aG9kTmFtZSIsInJldCIsIkVycm9yIiwiY29uc29sZSIsImVycm9yIiwidG9TdHJpbmciLCJmcmFtZXdvcmtWZXJzaW9uIiwidHJhbnNmb3JtZXJWZXJzaW9uIiwiZXh0ZW5kIiwiZGVmIiwicmVtb3ZlIiwiaGFzT3duIiwiYmluZCIsInRvQXJyYXkiLCJpc09iamVjdCIsImlzUGxhaW5PYmplY3QiLCJ0YXJnZXQiLCJzcmMiLCJPYmplY3QiLCJhc3NpZ24iLCJmaXJzdCIsInNoaWZ0Iiwia2V5IiwibGVuZ3RoIiwib2JqIiwidmFsIiwiZW51bWVyYWJsZSIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImFyciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3RvdHlwZSIsImNhbGwiLCJmbiIsImN0eCIsImEiLCJsIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJsaXN0Iiwic3RhcnQiLCJpIiwiQXJyYXkiLCJPQkpFQ1RfU1RSSU5HIiwic2V0VGltZW91dCIsInNldFRpbWVvdXROYXRpdmUiLCJ0aW1lb3V0TWFwIiwidGltZW91dElkIiwiY2IiLCJ0aW1lIiwic2V0VGltZW91dENhbGxiYWNrIiwiaWQiLCJXWEVudmlyb25tZW50IiwicGxhdGZvcm0iLCJQcm9taXNlIiwiY2xhc3NvZiIsInRlc3QiLCJjb2YiLCJUQUciLCJBUkciLCJ0cnlHZXQiLCJpdCIsImUiLCJtb2R1bGUiLCJleHBvcnRzIiwiTyIsIlQiLCJCIiwidW5kZWZpbmVkIiwiY2FsbGVlIiwic2xpY2UiLCJzdG9yZSIsInVpZCIsIlN5bWJvbCIsIlVTRV9TWU1CT0wiLCIkZXhwb3J0cyIsIm5hbWUiLCJTSEFSRUQiLCJ3aW5kb3ciLCJNYXRoIiwic2VsZiIsIkZ1bmN0aW9uIiwiX19nIiwicHgiLCJyYW5kb20iLCJjb25jYXQiLCJoaWRlIiwiaGFzIiwiU1JDIiwiVE9fU1RSSU5HIiwiJHRvU3RyaW5nIiwiVFBMIiwic3BsaXQiLCJpbnNwZWN0U291cmNlIiwic2FmZSIsImlzRnVuY3Rpb24iLCJqb2luIiwiU3RyaW5nIiwiZFAiLCJjcmVhdGVEZXNjIiwib2JqZWN0IiwiZiIsImFuT2JqZWN0IiwiSUU4X0RPTV9ERUZJTkUiLCJ0b1ByaW1pdGl2ZSIsIlAiLCJBdHRyaWJ1dGVzIiwiVHlwZUVycm9yIiwiZ2V0IiwiZXhlYyIsImRvY3VtZW50IiwiaXMiLCJjcmVhdGVFbGVtZW50IiwiUyIsInZhbHVlT2YiLCJiaXRtYXAiLCJjb3JlIiwidmVyc2lvbiIsIl9fZSIsIiRhdCIsIml0ZXJhdGVkIiwiX3QiLCJfaSIsInBvaW50IiwiZG9uZSIsInRvSW50ZWdlciIsImRlZmluZWQiLCJ0aGF0IiwicG9zIiwicyIsImIiLCJjaGFyQ29kZUF0IiwiY2hhckF0IiwiY2VpbCIsImZsb29yIiwiaXNOYU4iLCJMSUJSQVJZIiwiJGV4cG9ydCIsInJlZGVmaW5lIiwiSXRlcmF0b3JzIiwiJGl0ZXJDcmVhdGUiLCJzZXRUb1N0cmluZ1RhZyIsImdldFByb3RvdHlwZU9mIiwiSVRFUkFUT1IiLCJCVUdHWSIsImtleXMiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiQmFzZSIsIk5BTUUiLCJDb25zdHJ1Y3RvciIsIm5leHQiLCJERUZBVUxUIiwiSVNfU0VUIiwiRk9SQ0VEIiwiZ2V0TWV0aG9kIiwia2luZCIsInByb3RvIiwidmFsdWVzIiwiZW50cmllcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJGIiwiUFJPVE9UWVBFIiwidHlwZSIsInNvdXJjZSIsIklTX0ZPUkNFRCIsIklTX0dMT0JBTCIsIkciLCJJU19TVEFUSUMiLCJJU19QUk9UTyIsIklTX0JJTkQiLCJleHBQcm90byIsIm93biIsIm91dCIsImV4cCIsIlUiLCJXIiwiUiIsImFGdW5jdGlvbiIsImMiLCJjcmVhdGUiLCJkZXNjcmlwdG9yIiwiZFBzIiwiZW51bUJ1Z0tleXMiLCJJRV9QUk9UTyIsIkVtcHR5IiwiY3JlYXRlRGljdCIsImlmcmFtZSIsImx0IiwiZ3QiLCJpZnJhbWVEb2N1bWVudCIsInN0eWxlIiwiZGlzcGxheSIsImFwcGVuZENoaWxkIiwiY29udGVudFdpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiUHJvcGVydGllcyIsInJlc3VsdCIsImdldEtleXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiJGtleXMiLCJ0b0lPYmplY3QiLCJhcnJheUluZGV4T2YiLCJuYW1lcyIsInB1c2giLCJJT2JqZWN0IiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ0b0xlbmd0aCIsInRvSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJtaW4iLCJtYXgiLCJzaGFyZWQiLCJkb2N1bWVudEVsZW1lbnQiLCJ0YWciLCJzdGF0IiwidG9PYmplY3QiLCJPYmplY3RQcm90byIsImNvbnN0cnVjdG9yIiwiJGl0ZXJhdG9ycyIsIndrcyIsIlRPX1NUUklOR19UQUciLCJBcnJheVZhbHVlcyIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbiIsImFkZFRvVW5zY29wYWJsZXMiLCJzdGVwIiwiX2siLCJBcmd1bWVudHMiLCJVTlNDT1BBQkxFUyIsIkFycmF5UHJvdG8iLCJhbkluc3RhbmNlIiwiZm9yT2YiLCJzcGVjaWVzQ29uc3RydWN0b3IiLCJ0YXNrIiwic2V0IiwibWljcm90YXNrIiwiUFJPTUlTRSIsInByb2Nlc3MiLCIkUHJvbWlzZSIsImlzTm9kZSIsImVtcHR5IiwiSW50ZXJuYWwiLCJHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkiLCJXcmFwcGVyIiwiVVNFX05BVElWRSIsInByb21pc2UiLCJyZXNvbHZlIiwiRmFrZVByb21pc2UiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJ0aGVuIiwic2FtZUNvbnN0cnVjdG9yIiwiaXNUaGVuYWJsZSIsIm5ld1Byb21pc2VDYXBhYmlsaXR5IiwiQyIsIlByb21pc2VDYXBhYmlsaXR5IiwicmVqZWN0IiwiJCRyZXNvbHZlIiwiJCRyZWplY3QiLCJwZXJmb3JtIiwibm90aWZ5IiwiaXNSZWplY3QiLCJfbiIsImNoYWluIiwiX2MiLCJfdiIsIm9rIiwiX3MiLCJydW4iLCJyZWFjdGlvbiIsImhhbmRsZXIiLCJmYWlsIiwiZG9tYWluIiwiX2giLCJvbkhhbmRsZVVuaGFuZGxlZCIsImVudGVyIiwiZXhpdCIsIm9uVW5oYW5kbGVkIiwiYWJydXB0IiwiaXNVbmhhbmRsZWQiLCJlbWl0Iiwib251bmhhbmRsZWRyZWplY3Rpb24iLCJyZWFzb24iLCJfYSIsIm9ucmVqZWN0aW9uaGFuZGxlZCIsIiRyZWplY3QiLCJfZCIsIl93IiwiJHJlc29sdmUiLCJ3cmFwcGVyIiwiZXhlY3V0b3IiLCJlcnIiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJyIiwiY2FwYWJpbGl0eSIsIngiLCJpdGVyIiwiYWxsIiwiaXRlcmFibGUiLCJyZW1haW5pbmciLCIkaW5kZXgiLCJhbHJlYWR5Q2FsbGVkIiwicmFjZSIsImZvcmJpZGRlbkZpZWxkIiwiaXNBcnJheUl0ZXIiLCJnZXRJdGVyRm4iLCJCUkVBSyIsIlJFVFVSTiIsIml0ZXJGbiIsIml0ZXJhdG9yIiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJTUEVDSUVTIiwiRCIsImludm9rZSIsImh0bWwiLCJjZWwiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsImNvdW50ZXIiLCJxdWV1ZSIsIk9OUkVBRFlTVEFURUNIQU5HRSIsImRlZmVyIiwiY2hhbm5lbCIsInBvcnQiLCJsaXN0ZW5lciIsImV2ZW50IiwiZGF0YSIsImFyZ3MiLCJuZXh0VGljayIsInBvcnQyIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbXBvcnRTY3JpcHRzIiwicmVtb3ZlQ2hpbGQiLCJjbGVhciIsInVuIiwibWFjcm90YXNrIiwiT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiV2ViS2l0TXV0YXRpb25PYnNlcnZlciIsImhlYWQiLCJsYXN0IiwiZmx1c2giLCJwYXJlbnQiLCJ0b2dnbGUiLCJub2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJvYnNlcnZlIiwiY2hhcmFjdGVyRGF0YSIsIkRFU0NSSVBUT1JTIiwiS0VZIiwiU0FGRV9DTE9TSU5HIiwicml0ZXIiLCJmcm9tIiwic2tpcENsb3NpbmciLCJuYXRpdmVMb2ciLCJMRVZFTFMiLCJsZXZlbE1hcCIsImdlbmVyYXRlTGV2ZWxNYXAiLCJkZWJ1ZyIsImNoZWNrTGV2ZWwiLCJmb3JtYXQiLCJsb2ciLCJpbmZvIiwid2FybiIsIl9fb3JpX18iLCJmb3JFYWNoIiwibGV2ZWxJbmRleCIsImxldmVsIiwidHlwZUluZGV4IiwibG9nTGV2ZWwiLCJtYXAiLCJ2IiwidG9Mb3dlckNhc2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZ09QUyIsInBJRSIsIiRhc3NpZ24iLCJBIiwiSyIsImsiLCJhTGVuIiwiZ2V0U3ltYm9scyIsImlzRW51bSIsImoiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25maWciLCJEb2N1bWVudCIsIkVsZW1lbnQiLCJDb21tZW50IiwiTGlzdGVuZXIiLCJmcmFtZXdvcmtzIiwic2VuZFRhc2tzIiwiY2FsbE5hdGl2ZSIsIk5vZGUiLCJERUZBVUxUX1RBR19OQU1FIiwiaW5zdGFuY2VNYXAiLCJuZXh0Tm9kZVJlZiIsInVybCIsIlVSTCIsIm5vZGVNYXAiLCJnZW5DYWxsVGFza3MiLCJjcmVhdGVEb2N1bWVudEVsZW1lbnQiLCJ0YXNrcyIsImlzQXJyYXkiLCJtZXRob2QiLCJyZWYiLCJqc29uIiwiY2FsbEFkZEVsZW1lbnQiLCJkZXN0cm95IiwiYmF0Y2hlZCIsImRvY0lkIiwib3duZXJEb2N1bWVudCIsInJvbGUiLCJkZXB0aCIsIl9kb2N1bWVudEVsZW1lbnQiLCJhcHBlbmRCb2R5IiwiaW5zZXJ0QmVmb3JlIiwiYmVmb3JlIiwiZG9jIiwicHVyZUNoaWxkcmVuIiwicGFyZW50Tm9kZSIsImNoaWxkcmVuIiwiYmVmb3JlSW5kZXgiLCJub2RlVHlwZSIsImNoaWxkIiwic2V0Qm9keSIsImxpbmtQYXJlbnQiLCJub2RlSWQiLCJjcmVhdGVCb2R5IiwiX3Jvb3QiLCJib2R5IiwicHJvcHMiLCJ0YWdOYW1lIiwiY3JlYXRlQ29tbWVudCIsInRleHQiLCJmaXJlRXZlbnQiLCJkb21DaGFuZ2VzIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInVwZGF0ZUVsZW1lbnQiLCJnZXRSZWYiLCJjaGFuZ2VzIiwiYXR0cnMiLCJzZXRBdHRyIiwic2V0U3R5bGUiLCJuZXh0U2libGluZyIsInByZXZpb3VzU2libGluZyIsImF0dHIiLCJjbGFzc1N0eWxlIiwiaW5zZXJ0SW5kZXgiLCJyZWdpc3Rlck5vZGUiLCJhZGRFbGVtZW50IiwibW92ZUluZGV4IiwibW92ZUVsZW1lbnQiLCJwdXJlQmVmb3JlIiwibmV4dEVsZW1lbnQiLCJpbnNlcnRBZnRlciIsImFmdGVyIiwicHJldmlvdXNFbGVtZW50IiwicHJlc2VydmVkIiwicmVtb3ZlSW5kZXgiLCJyZW1vdmVFbGVtZW50IiwibmV3SW5kZXgiLCJjaGFuZ2VTaWJsaW5nIiwibmV3SW5kZXhBZnRlciIsImJlZm9yZU5ldyIsImFmdGVyTmV3Iiwic2lsZW50IiwicmVzZXRDbGFzc1N0eWxlIiwic2V0Q2xhc3NTdHlsZSIsInNldFN0eWxlcyIsInRvU3R5bGUiLCJhZGRFdmVudCIsInJlbW92ZUV2ZW50IiwidG9KU09OIiwiY3JlYXRlQWN0aW9uIiwidXBkYXRlcyIsImNyZWF0ZUZpbmlzaCIsImNhbGxiYWNrIiwidXBkYXRlRmluaXNoIiwicmVmcmVzaEZpbmlzaCIsImVsZW1lbnQiLCJhY3Rpb25zIiwiYWRkQWN0aW9ucyIsInRhcmdldFJlZiIsInBhcmVudFJlZiIsIldlZXgiLCJjcmVhdGVJbnN0YW5jZSIsImluaXQiLCJyZWZyZXNoSW5zdGFuY2UiLCJkZXN0cm95SW5zdGFuY2UiLCJyZWdpc3RlckNvbXBvbmVudHMiLCJyZWdpc3Rlck1vZHVsZXMiLCJyZWNlaXZlVGFza3MiLCJnZXRSb290IiwiY29kZSIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsInJlcXVpcmVNb2R1bGUiLCJ1cGRhdGVBY3Rpb25zIiwiY2FsbFRhc2tzIiwiZ2V0TW9kdWxlIiwiY2xlYXJNb2R1bGVzIiwiaW5pdE1vZHVsZXMiLCJpbml0TWV0aG9kcyIsInJlcXVpcmVDdXN0b21Db21wb25lbnQiLCJyZWdpc3RlckN1c3RvbUNvbXBvbmVudCIsIm5hdGl2ZU1vZHVsZXMiLCJtb2R1bGVOYW1lIiwibW9kdWxlcyIsImlmUmVwbGFjZSIsIlZtIiwiYXBpcyIsInAiLCJhcGlOYW1lIiwiYXBwIiwiY3VzdG9tQ29tcG9uZW50TWFwIiwicmVmcmVzaCIsImdldFJvb3RFbGVtZW50IiwiYnVuZGxlRGVmaW5lIiwiYnVuZGxlQm9vdHN0cmFwIiwiX2RhdGEiLCJidW5kbGVSZWdpc3RlciIsImJ1bmRsZVJlbmRlciIsImJ1bmRsZVJlcXVpcmUiLCJidW5kbGVEb2N1bWVudCIsImJ1bmRsZVJlcXVpcmVNb2R1bGUiLCJmdW5jdGlvbkJvZHkiLCJzdWJzdHIiLCJ0aW1lciIsInRpbWVyQVBJcyIsInNldEludGVydmFsIiwiY2xlYXJUaW1lb3V0IiwibiIsImNsZWFySW50ZXJ2YWwiLCJpc1Jlc2VydmVkIiwiY3JlYXRlTmV3U2V0IiwiY2FjaGVkIiwidHlwb2YiLCJyZW1vdmVXZWV4UHJlZml4IiwicmVtb3ZlSlNTdXJmaXgiLCJzdHIiLCJoYXNQcm90byIsIl9TZXQiLCJTZXQiLCJtYXRjaCIsImFkZCIsIm5hdGl2ZVNldCIsImNhY2hlIiwiY2FjaGVkRm4iLCJoaXQiLCJjYW1lbGl6ZVJFIiwiY2FtZWxpemUiLCJyZXBsYWNlIiwidG9VcHBlciIsIl8iLCJ0b1VwcGVyQ2FzZSIsImh5cGhlbmF0ZVJFIiwiaHlwaGVuYXRlIiwic3Vic3RyaW5nIiwiV0VFWF9DT01QT05FTlRfUkVHIiwiV0VFWF9NT0RVTEVfUkVHIiwiTk9STUFMX01PRFVMRV9SRUciLCJKU19TVVJGSVhfUkVHIiwiaXNXZWV4Q29tcG9uZW50IiwiaXNXZWV4TW9kdWxlIiwiaXNOb3JtYWxNb2R1bGUiLCJpc05wbU1vZHVsZSIsImJvb3RzdHJhcCIsImNsZWFyQ29tbW9uTW9kdWxlcyIsImRlZmluZUZuIiwicmVnaXN0ZXIiLCJkb3duZ3JhZGUiLCJjbGVhbk5hbWUiLCJzYXRpc2ZpZXMiLCJkb3duZ3JhZGVSZXN1bHQiLCJjaGVjayIsImlzRG93bmdyYWRlIiwiZXJyb3JUeXBlIiwiZXJyb3JNZXNzYWdlIiwidm0iLCJfYXBwIiwiU2VtVmVyIiwiZW52IiwiTk9ERV9ERUJVRyIsInVuc2hpZnQiLCJTRU1WRVJfU1BFQ19WRVJTSU9OIiwiTUFYX0xFTkdUSCIsIk1BWF9TQUZFX0lOVEVHRVIiLCJOdW1iZXIiLCJyZSIsIk5VTUVSSUNJREVOVElGSUVSIiwiTlVNRVJJQ0lERU5USUZJRVJMT09TRSIsIk5PTk5VTUVSSUNJREVOVElGSUVSIiwiTUFJTlZFUlNJT04iLCJNQUlOVkVSU0lPTkxPT1NFIiwiUFJFUkVMRUFTRUlERU5USUZJRVIiLCJQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFIiwiUFJFUkVMRUFTRSIsIlBSRVJFTEVBU0VMT09TRSIsIkJVSUxESURFTlRJRklFUiIsIkJVSUxEIiwiRlVMTCIsIkZVTExQTEFJTiIsIkxPT1NFUExBSU4iLCJMT09TRSIsIkdUTFQiLCJYUkFOR0VJREVOVElGSUVSTE9PU0UiLCJYUkFOR0VJREVOVElGSUVSIiwiWFJBTkdFUExBSU4iLCJYUkFOR0VQTEFJTkxPT1NFIiwiWFJBTkdFIiwiWFJBTkdFTE9PU0UiLCJMT05FVElMREUiLCJUSUxERVRSSU0iLCJSZWdFeHAiLCJ0aWxkZVRyaW1SZXBsYWNlIiwiVElMREUiLCJUSUxERUxPT1NFIiwiTE9ORUNBUkVUIiwiQ0FSRVRUUklNIiwiY2FyZXRUcmltUmVwbGFjZSIsIkNBUkVUIiwiQ0FSRVRMT09TRSIsIkNPTVBBUkFUT1JMT09TRSIsIkNPTVBBUkFUT1IiLCJDT01QQVJBVE9SVFJJTSIsImNvbXBhcmF0b3JUcmltUmVwbGFjZSIsIkhZUEhFTlJBTkdFIiwiSFlQSEVOUkFOR0VMT09TRSIsIlNUQVIiLCJwYXJzZSIsImxvb3NlIiwiZXIiLCJ2YWxpZCIsImNsZWFuIiwidHJpbSIsIm0iLCJyYXciLCJtYWpvciIsIm1pbm9yIiwicGF0Y2giLCJwcmVyZWxlYXNlIiwibnVtIiwiYnVpbGQiLCJjb21wYXJlIiwib3RoZXIiLCJjb21wYXJlTWFpbiIsImNvbXBhcmVQcmUiLCJjb21wYXJlSWRlbnRpZmllcnMiLCJpbmMiLCJyZWxlYXNlIiwiaWRlbnRpZmllciIsImRpZmYiLCJ2ZXJzaW9uMSIsInZlcnNpb24yIiwiZXEiLCJ2MSIsInYyIiwibnVtZXJpYyIsImFudW0iLCJibnVtIiwicmNvbXBhcmVJZGVudGlmaWVycyIsImNvbXBhcmVMb29zZSIsInJjb21wYXJlIiwic29ydCIsInJzb3J0IiwibmVxIiwiZ3RlIiwibHRlIiwiY21wIiwib3AiLCJDb21wYXJhdG9yIiwiY29tcCIsInNlbXZlciIsIkFOWSIsIm9wZXJhdG9yIiwiUmFuZ2UiLCJyYW5nZSIsInBhcnNlUmFuZ2UiLCJmaWx0ZXIiLCJjb21wcyIsImhyIiwiaHlwaGVuUmVwbGFjZSIsImNvbXBSZSIsInBhcnNlQ29tcGFyYXRvciIsInRvQ29tcGFyYXRvcnMiLCJyZXBsYWNlQ2FyZXRzIiwicmVwbGFjZVRpbGRlcyIsInJlcGxhY2VYUmFuZ2VzIiwicmVwbGFjZVN0YXJzIiwiaXNYIiwicmVwbGFjZVRpbGRlIiwiTSIsInByIiwicmVwbGFjZUNhcmV0IiwicmVwbGFjZVhSYW5nZSIsImd0bHQiLCJ4TSIsInhtIiwieHAiLCJhbnlYIiwiJDAiLCJmTSIsImZtIiwiZnAiLCJmcHIiLCJmYiIsInRvIiwidE0iLCJ0bSIsInRwIiwidHByIiwidGIiLCJ0ZXN0U2V0IiwiYWxsb3dlZCIsIm1heFNhdGlzZnlpbmciLCJ2ZXJzaW9ucyIsIm1pblNhdGlzZnlpbmciLCJ2YWxpZFJhbmdlIiwibHRyIiwib3V0c2lkZSIsImd0ciIsImhpbG8iLCJndGZuIiwibHRlZm4iLCJsdGZuIiwiZWNvbXAiLCJjb21wYXJhdG9ycyIsImhpZ2giLCJsb3ciLCJjb21wYXJhdG9yIiwicGFyc2VkIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwiSXRlbSIsImFycmF5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJwYXJlbnRWbSIsInBhcmVudEVsIiwibWVyZ2VkRGF0YSIsImV4dGVybmFsRXZlbnRzIiwiX3BhcmVudCIsIl9yZWFsUGFyZW50IiwiX2NoaWxkcmVuVm1zIiwiX29wdGlvbnMiLCJfbWV0aG9kcyIsIl9jb21wdXRlZCIsImNvbXB1dGVkIiwiX2NzcyIsIl9pZHMiLCJfdm1FdmVudHMiLCJfdHlwZSIsIiRlbWl0IiwiX2luaXRlZCIsIl9jcmVhdGVkIiwicmVhZHkiLCJfcGFyZW50RWwiLCJpbml0U3RhdGUiLCJpbml0RGF0YSIsImluaXRDb21wdXRlZCIsIl93YXRjaGVycyIsInVzZXJEZWYiLCJtYWtlQ29tcHV0ZWRHZXR0ZXIiLCJnZXR0ZXIiLCJvd25lciIsIndhdGNoZXIiLCJsYXp5IiwiY29tcHV0ZWRHZXR0ZXIiLCJkaXJ0eSIsImV2YWx1YXRlIiwiZGVwZW5kIiwiV2F0Y2hlciIsImV4cE9yRm4iLCJpc0ZuIiwiZXhwcmVzc2lvbiIsImFjdGl2ZSIsImRlcHMiLCJuZXdEZXBzIiwiZGVwSWRzIiwibmV3RGVwSWRzIiwiTk9ERV9FTlYiLCJxdWV1ZWQiLCJzaGFsbG93IiwiZGVlcCIsInRyYXZlcnNlIiwiY2xlYW51cERlcHMiLCJhZGREZXAiLCJkZXAiLCJhZGRTdWIiLCJyZW1vdmVTdWIiLCJ0bXAiLCJ1cGRhdGUiLCJvbGRWYWx1ZSIsInRlYXJkb3duIiwiX2lzQmVpbmdEZXN0cm95ZWQiLCJfdkZvclJlbW92aW5nIiwic2Vlbk9iamVjdHMiLCJzZWVuIiwiaXNBIiwiaXNPIiwiX19vYl9fIiwiZGVwSWQiLCJEZXAiLCJwdXNoVGFyZ2V0IiwicG9wVGFyZ2V0Iiwic3VicyIsInRhcmdldFN0YWNrIiwiX3RhcmdldCIsInBvcCIsInN1YiIsImRlZmluZVJlYWN0aXZlIiwiZGVsIiwicHJveHkiLCJ1bnByb3h5IiwiYXJyYXlLZXlzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImF1Z21lbnQiLCJwcm90b0F1Z21lbnQiLCJjb3B5QXVnbWVudCIsIm9ic2VydmVBcnJheSIsIndhbGsiLCJjb252ZXJ0IiwiaXRlbXMiLCJhZGRWbSIsInZtcyIsInJlbW92ZVZtIiwiX19wcm90b19fIiwib2IiLCJpc0V4dGVuc2libGUiLCJfaXNWdWUiLCJwcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInNldHRlciIsImNoaWxkT2IiLCJyZWFjdGl2ZUdldHRlciIsInJlYWN0aXZlU2V0dGVyIiwibmV3VmFsIiwiJGZvcmNlVXBkYXRlIiwiS0VZX1dPUkRTIiwicHJveHlHZXR0ZXIiLCJwcm94eVNldHRlciIsImFycmF5UHJvdG8iLCJhcnJheU1ldGhvZHMiLCJvcmlnaW5hbCIsIm11dGF0b3IiLCJpbnNlcnRlZCIsIiRzZXQiLCIkcmVtb3ZlIiwib3B0IiwidGVtcGxhdGUiLCJjb21waWxlIiwiX3JlYWR5IiwiZGVzdCIsIm1ldGEiLCJsYXN0U2lnbmFsIiwidGFyZ2V0SXNGcmFnbWVudCIsImNvbXBpbGVGcmFnbWVudCIsInRhcmdldElzQ29udGVudCIsIl9jb250ZW50IiwidGFyZ2V0TmVlZENoZWNrUmVwZWF0IiwiY29tcGlsZVJlcGVhdCIsInRhcmdldE5lZWRDaGVja1Nob3duIiwiY29tcGlsZVNob3duIiwidHlwZUdldHRlciIsInRhcmdldE5lZWRDaGVja1R5cGUiLCJjb21waWxlVHlwZSIsImNvbXBvbmVudCIsInRhcmdldElzQ29tcG9zZWQiLCJjb21waWxlQ3VzdG9tQ29tcG9uZW50IiwiY29tcGlsZU5hdGl2ZUNvbXBvbmVudCIsInJlcGVhdCIsInNob3duIiwiY29tcG9uZW50cyIsImZyYWdCbG9jayIsIm9sZFN0eWxlIiwidHJhY2tCeSIsImJpbmRSZXBlYXQiLCJuZXdNZXRhIiwiYmluZFNob3duIiwiQ3RvciIsInN1YlZtIiwiX2V4dGVybmFsQmluZGluZyIsImNvbXBpbGVDaGlsZHJlbiIsIl9yb290RWwiLCJldmVudHMiLCJhcHBlbmQiLCJ0cmVlTW9kZSIsImV2ZXJ5Iiwia2V5TmFtZSIsInZhbHVlTmFtZSIsImNvbXBpbGVJdGVtIiwiY29udGV4dCIsIm5ld0NvbnRleHQiLCJtZXJnZUNvbnRleHQiLCJ3YXRjaEJsb2NrIiwib2xkQ2hpbGRyZW4iLCJvbGRWbXMiLCJvbGREYXRhIiwidHJhY2tNYXAiLCJyZXVzZWRNYXAiLCJyZXVzZWRMaXN0IiwidXBkYXRlTWFyayIsInJldXNlZCIsImNhbGMiLCJkaWZmZXIiLCJsYXRlc3RWYWx1ZSIsInJlY29yZGVkIiwiYmxvY2tJZCIsImFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyIsImJpbmRFbGVtZW50IiwiYmluZFN1YlZtIiwiYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCIsInNldElkIiwid2F0Y2giLCJuYXRpdmVDb21wb25lbnRNYXAiLCJTRVRURVJTIiwic3Via2V5Iiwic2V0Q2xhc3MiLCJjbGFzc0xpc3QiLCJiaW5kRXZlbnRzIiwicmVwZWF0SXRlbSIsInJlZHVjZSIsIm1lcmdlUHJvcHMiLCJtZXJnZUNsYXNzU3R5bGUiLCJtZXJnZVN0eWxlIiwicmV0dXJuVmFsdWUiLCJjc3MiLCJjbGFzc05hbWUiLCJhZGRDbGFzc05hbWUiLCJuZXdJZCIsImJpbmREaXIiLCJzZXRFdmVudCIsImJpbmRLZXkiLCJpbWFnZSIsImNvbnRhaW5lciIsInNsaWRlciIsImNlbGwiLCJjcmVhdGVCbG9jayIsImF0dGFjaFRhcmdldCIsIm1vdmVUYXJnZXQiLCJyZW1vdmVUYXJnZXQiLCJjcmVhdGVCbG9ja1N0YXJ0IiwiZW5kIiwiY3JlYXRlQmxvY2tFbmQiLCJsYXN0ZXN0QmxvY2tJZCIsImFuY2hvciIsInNpZ25hbCIsIm1vdmVCbG9jayIsImdyb3VwIiwidGVtcCIsInByZXNlcnZlQmxvY2siLCJyZW1vdmVCbG9jayIsIiRkaXNwYXRjaCIsIiRicm9hZGNhc3QiLCIkb24iLCIkb2ZmIiwiaW5pdEV2ZW50cyIsIm1peGluRXZlbnRzIiwiRXZ0IiwiZGV0YWlsIiwic2hvdWxkU3RvcCIsInN0b3AiLCJoYXNTdG9wcGVkIiwiaGFuZGxlckxpc3QiLCJldnQiLCJMSUZFX0NZQ0xFX1RZUEVTIiwidHlwZTEiLCJ0eXBlMiIsIm5vcm1hbGl6ZVZlcnNpb24iLCJnZXRFcnJvciIsImlzVmFsaWQiLCJjcml0ZXJpYSIsImdldE1zZyIsIl9rZXkiLCJkZXZpY2VJbmZvIiwiY3VzdG9tRG93bmdyYWRlIiwiZFBsYXRmb3JtIiwiY09iaiIsImtleUxvd2VyIiwiaXNWZXJzaW9uIiwiaXNEZXZpY2VNb2RlbCIsImQiLCJfY3JpdGVyaWEiLCJjb21tb25Nb2R1bGVzIiwiZmFjdG9yeSIsImRlZmluaXRpb24iLCJkZXN0cm95Vm0iLCJyZWZyZXNoRGF0YSIsImJsb2NrcyIsImNhbGxiYWNrcyIsIndhdGNoZXJDb3VudCIsInZtQ291bnQiLCJzb21lIiwiY2FsbGJhY2tJZCIsImlmS2VlcEFsaXZlIiwibm9ybWFsaXplIiwiYXJnIiwidG9JU09TdHJpbmciLCJBcHAiLCJidW5kbGVVcmwiLCJEaWZmZXIiLCJob29rcyIsImhhc1RpbWVyIiwiaXNUaW1lb3V0IiwiY2FsbFR5cGVNYXAiLCJjYWxsVHlwZUxpc3QiLCJpc0VtcHR5IiwiY2ZnIiwianNIYW5kbGVycyIsInJlc3VsdHMiLCJ2ZXJzaW9uUmVnRXhwIiwiY2hlY2tWZXJzaW9uIiwiZnJhbWV3b3JrIiwiYnVuZGxlVmVyc2lvbiIsImdlbkluaXQiLCJnZW5JbnN0YW5jZSIsImFkYXB0SW5zdGFuY2UiLCJuYXRpdmVNZXRob2ROYW1lIiwiJCIsIiRlbCIsIiR2bSIsIiRyZW5kZXJUaGVuIiwiJHNjcm9sbFRvIiwiJHRyYW5zaXRpb24iLCIkZ2V0Q29uZmlnIiwiJHNlbmRIdHRwIiwiJG9wZW5VUkwiLCIkc2V0VGl0bGUiLCIkY2FsbCIsIm9mZnNldCIsImRvbSIsInNjcm9sbFRvRWxlbWVudCIsInN0eWxlcyIsImFuaW1hdGlvbiIsInRyYW5zaXRpb24iLCJfc2V0U3R5bGUiLCJwYXJhbXMiLCJzdHJlYW0iLCJzZW5kSHR0cCIsIm9wZW5VUkwiLCJwYWdlSW5mbyIsInNldFRpdGxlIiwiJHVzZXJUcmFjayIsIiRzZW5kTXRvcCIsIiRjYWxsV2luZHZhbmUiLCIkc2V0U3BtIiwiJGdldFVzZXJJbmZvIiwiJGxvZ2luIiwiJGxvZ291dCIsImNvbU5hbWUiLCJwYXJhbSIsInVzZXJUcmFjayIsImNvbW1pdCIsIndpbmR2YW5lIiwiY2xhc3MiLCJzZW5kTXRvcCIsInNldFNwbSIsInVzZXIiLCJnZXRVc2VySW5mbyIsImxvZ2luIiwibG9nb3V0Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7QUFFQTs7O0FBR0EsS0FBTUEsVUFBVSxtQkFBQUMsQ0FBUSxHQUFSLENBQWhCO2VBQzBCQyxNO0tBQW5CQyxlLFdBQUFBLGU7O0FBQ1BBLGlCQUFnQkgsT0FBaEIsRTs7Ozs7Ozs7O0FDUEEsd0I7Ozs7Ozs7O0FDQUE7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7S0FBWUEsTzs7Ozs7O0tBRUpJLE0sdUJBQUFBLE07S0FBUUMsVyx1QkFBQUEsVzs7QUFFaEI7OzRCQUNXQyxVO0FBQ1RKLFVBQU9JLFVBQVAsSUFBcUIsWUFBYTtBQUNoQyxTQUFNQyxNQUFNLGtCQUFRRCxVQUFSLHFDQUFaO0FBQ0EsU0FBSUMsZUFBZUMsS0FBbkIsRUFBMEI7QUFDeEJDLGVBQVFDLEtBQVIsQ0FBY0gsSUFBSUksUUFBSixFQUFkO0FBQ0Q7QUFDRCxZQUFPSixHQUFQO0FBQ0QsSUFORDs7O0FBREYsTUFBSyxJQUFNRCxVQUFYLHVCQUFrQztBQUFBLFNBQXZCQSxVQUF1QjtBQVFqQzs7QUFFRDtBQUNBSixRQUFPVSxnQkFBUCxHQUEwQlIsTUFBMUI7QUFDQUYsUUFBT1csa0JBQVAsR0FBNEJSLFdBQTVCOztBQUVBO0FBQ0FILFFBQU9DLGVB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QUFSLENBQWEsNkNBQ0wsNENBREssR0FFTCwyQkFGUjtBQUdBLE9BQU1vdEIsT0FBTyxLQUFLeGYsSUFBTCxDQUFVbkYsYUFBVixDQUF3QixNQUF4QixDQUFiO0FBQ0Eya0IsUUFBS0UsS0FBTCxDQUFXam1CLFFBQVg7QUFDRDs7QUFFRDs7OztBQUlPLFVBQVNzbEIsT0FBVCxDQUFpQnRsQixRQUFqQixFQUEyQjtBQUNoQ3ZmLFdBQVFrWSxJQUFSLENBQWEsOENBQ0wsNENBREssR0FFTCw0QkFGUjtBQUdBLE9BQU1vdEIsT0FBTyxLQUFLeGYsSUFBTCxDQUFVbkYsYUFBVixDQUF3QixNQUF4QixDQUFiO0FBQ0Eya0IsUUFBS0csTUFBTCxDQUFZbG1CLFFBQVo7QUFDRCxFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBhMmFlMjFjMjZkNGI5MDJmN2FjYlxuICoqLyIsImltcG9ydCAnd2VleC1qcy1mcmFtZXdvcmsnXG5cbi8qKlxuICogcmVnaXN0ZXIgbWV0aG9kc1xuICovXG5jb25zdCBtZXRob2RzID0gcmVxdWlyZSgnLi9saWIvYXBpL21ldGhvZHMnKVxuY29uc3Qge3JlZ2lzdGVyTWV0aG9kc30gPSBnbG9iYWxcbnJlZ2lzdGVyTWV0aG9kcyhtZXRob2RzKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5qc1xuICoqLyIsImltcG9ydCAnLi9zcmMvbmF0aXZlJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJy4uL3NoYXJlZCdcbmltcG9ydCBydW50aW1lIGZyb20gJy4uL3J1bnRpbWUnXG5pbXBvcnQgeyBzdWJ2ZXJzaW9uIH0gZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJ1xuaW1wb3J0ICogYXMgbWV0aG9kcyBmcm9tICcuLi9kZWZhdWx0L2FwaS9tZXRob2RzJ1xuXG5jb25zdCB7IG5hdGl2ZSwgdHJhbnNmb3JtZXIgfSA9IHN1YnZlcnNpb25cblxuLy8gcmVnaXN0ZXIgaW5zdGFuY2UgbWFuYWdlbWVudCBBUElzXG5mb3IgKGNvbnN0IG1ldGhvZE5hbWUgaW4gcnVudGltZSkge1xuICBnbG9iYWxbbWV0aG9kTmFtZV0gPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IHJldCA9IHJ1bnRpbWVbbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgICBpZiAocmV0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IocmV0LnRvU3RyaW5nKCkpXG4gICAgfVxuICAgIHJldHVybiByZXRcbiAgfVxufVxuXG4vLyByZWdpc3RlciBmcmFtZXdvcmsgbWV0YSBpbmZvXG5nbG9iYWwuZnJhbWV3b3JrVmVyc2lvbiA9IG5hdGl2ZVxuZ2xvYmFsLnRyYW5zZm9ybWVyVmVyc2lvbiA9IHRyYW5zZm9ybWVyXG5cbi8vIHJlZ2lzdGVyIHNwZWNpYWwgbWV0aG9kcyBmb3IgV2VleCBmcmFtZXdvcmtcbmdsb2JhbC5yZWdpc3Rlck1ldGhvZHMobWV0aG9kcylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9uYXRpdmUvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJy4vc2V0VGltZW91dCdcbmltcG9ydCAnLi9wcm9taXNlJ1xuaW1wb3J0ICcuL2NvbnNvbGUnXG5pbXBvcnQgJy4vb2JqZWN0QXNzaWduJ1xuXG5leHBvcnQge1xuICBleHRlbmQsXG4gIGRlZixcbiAgcmVtb3ZlLFxuICBoYXNPd24sXG4gIGJpbmQsXG4gIHRvQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0XG59IGZyb20gJy4vdXRpbHMnXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL2luZGV4LmpzXG4gKiovIiwiLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRvXG4gKiBAcGFyYW0ge09iamVjdH0gZnJvbVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQgKHRhcmdldCwgLi4uc3JjKSB7XG4gIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zcmMpXG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgZmlyc3QgPSBzcmMuc2hpZnQoKVxuICAgIGZvciAoY29uc3Qga2V5IGluIGZpcnN0KSB7XG4gICAgICB0YXJnZXRba2V5XSA9IGZpcnN0W2tleV1cbiAgICB9XG4gICAgaWYgKHNyYy5sZW5ndGgpIHtcbiAgICAgIGV4dGVuZCh0YXJnZXQsIC4uLnNyYylcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldFxufVxuXG4vKipcbiAqIERlZmluZSBhIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtlbnVtZXJhYmxlXVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWYgKG9iaiwga2V5LCB2YWwsIGVudW1lcmFibGUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgdmFsdWU6IHZhbCxcbiAgICBlbnVtZXJhYmxlOiAhIWVudW1lcmFibGUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pXG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIGl0ZW0gZnJvbSBhbiBhcnJheVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHsqfSBpdGVtXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZSAoYXJyLCBpdGVtKSB7XG4gIGlmIChhcnIubGVuZ3RoKSB7XG4gICAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24gKG9iaiwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KVxufVxuXG4vKipcbiAqIFNpbXBsZSBiaW5kLCBmYXN0ZXIgdGhhbiBuYXRpdmVcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtPYmplY3R9IGN0eFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmQgKGZuLCBjdHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgY29uc3QgbCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICByZXR1cm4gbFxuICAgICAgPyBsID4gMVxuICAgICAgICA/IGZuLmFwcGx5KGN0eCwgYXJndW1lbnRzKVxuICAgICAgICA6IGZuLmNhbGwoY3R4LCBhKVxuICAgICAgOiBmbi5jYWxsKGN0eClcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gQXJyYXktbGlrZSBvYmplY3QgdG8gYSByZWFsIEFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXktbGlrZX0gbGlzdFxuICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydF0gLSBzdGFydCBpbmRleFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXkgKGxpc3QsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgMFxuICBsZXQgaSA9IGxpc3QubGVuZ3RoIC0gc3RhcnRcbiAgY29uc3QgcmV0ID0gbmV3IEFycmF5KGkpXG4gIHdoaWxlIChpLS0pIHtcbiAgICByZXRbaV0gPSBsaXN0W2kgKyBzdGFydF1cbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogUXVpY2sgb2JqZWN0IGNoZWNrIC0gdGhpcyBpcyBwcmltYXJpbHkgdXNlZCB0byB0ZWxsXG4gKiBPYmplY3RzIGZyb20gcHJpbWl0aXZlIHZhbHVlcyB3aGVuIHdlIGtub3cgdGhlIHZhbHVlXG4gKiBpcyBhIEpTT04tY29tcGxpYW50IHR5cGUuXG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0J1xufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5jb25zdCBPQkpFQ1RfU1RSSU5HID0gJ1tvYmplY3QgT2JqZWN0XSdcbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gT0JKRUNUX1NUUklOR1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL3NoYXJlZC91dGlscy5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogUG9seWZpbGwgYHNldFRpbWVvdXRgIG9uIEFuZHJvaWQgVjggdXNpbmcgbmF0aXZlIG1ldGhvZFxuICogYHNldFRpbWVvdXROYXRpdmUoY2FsbGJhY2tJZCwgdGltZSlgIGFuZCBKUyBtZXRob2RcbiAqIGBzZXRUaW1lb3V0Q2FsbGJhY2soY2FsbGJhY2tJZClgLlxuICogVGhpcyBwb2x5ZmlsbCBpcyBvbmx5IHVzZWQgaW4gdmlydHVhbC1ET00gZGlmZiAmIGZsdXNoIGFnb3JpdGhtLiBOb3RcbiAqIGFjY2Vzc2VkIGJ5IEpTIEJ1bmRsZSBjb2RlIChUaGUgdGltZXIgQVBJcyBwb2x5ZmlsbCBmb3IgSlMgQnVuZGxlIGlzIGluXG4gKiBgaHRtbDUvZGVmYXVsdC9hcHAvY3RybC5qc2ApLlxuICovXG5cbmNvbnN0IHtcbiAgc2V0VGltZW91dCxcbiAgc2V0VGltZW91dE5hdGl2ZVxufSA9IGdsb2JhbFxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIHNldFRpbWVvdXROYXRpdmUgPT09ICdmdW5jdGlvbicpIHtcbiAgY29uc3QgdGltZW91dE1hcCA9IHt9XG4gIGxldCB0aW1lb3V0SWQgPSAwXG5cbiAgZ2xvYmFsLnNldFRpbWVvdXQgPSAoY2IsIHRpbWUpID0+IHtcbiAgICB0aW1lb3V0TWFwWysrdGltZW91dElkXSA9IGNiXG4gICAgc2V0VGltZW91dE5hdGl2ZSh0aW1lb3V0SWQudG9TdHJpbmcoKSwgdGltZSlcbiAgfVxuXG4gIGdsb2JhbC5zZXRUaW1lb3V0Q2FsbGJhY2sgPSAoaWQpID0+IHtcbiAgICBpZiAodHlwZW9mIHRpbWVvdXRNYXBbaWRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aW1lb3V0TWFwW2lkXSgpXG4gICAgICBkZWxldGUgdGltZW91dE1hcFtpZF1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9zaGFyZWQvc2V0VGltZW91dC5qc1xuICoqLyIsIi8vIGZpeCBQcm9taXNlIFByb2JsZW0gb24gSlNDb250ZXh0IG9mIGlPUzd+OFxuLy8gQHNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM1ODY2XG5jb25zdCB7IFdYRW52aXJvbm1lbnQgfSA9IGdsb2JhbFxuaWYgKFdYRW52aXJvbm1lbnQgJiYgV1hFbnZpcm9ubWVudC5wbGF0Zm9ybSA9PT0gJ2lPUycpIHtcbiAgZ2xvYmFsLlByb21pc2UgPSBudWxsXG59XG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKVxucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKVxucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKVxucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlJylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9zaGFyZWQvcHJvbWlzZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCB0ZXN0ICAgID0ge307XG50ZXN0W3JlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpe1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xuICB9LCB0cnVlKTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qc1xuICoqLyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanNcbiAqKi8iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19jb2YuanNcbiAqKi8iLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzXG4gKiovIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanNcbiAqKi8iLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBTUkMgICAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJylcbiAgLCBUT19TVFJJTkcgPSAndG9TdHJpbmcnXG4gICwgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXVxuICAsIFRQTCAgICAgICA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBrZXksIHZhbCwgc2FmZSl7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYoT1trZXldID09PSB2YWwpcmV0dXJuO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZihPID09PSBnbG9iYWwpe1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBpZighc2FmZSl7XG4gICAgICBkZWxldGUgT1trZXldO1xuICAgICAgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKE9ba2V5XSlPW2tleV0gPSB2YWw7XG4gICAgICBlbHNlIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH1cbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzXG4gKiovIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzXG4gKiovIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbiAqKi8iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanNcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbiAqKi8iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4gKiovIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2hhcy5qc1xuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fY29yZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanNcbiAqKi8iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanNcbiAqKi8iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qc1xuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIHJlZGVmaW5lICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KVxuICAgICwga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmKHRhcmdldClyZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZihleHBvcnRzW2tleV0gIT0gb3V0KWhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KWV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanNcbiAqKi8iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19jdHguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuICoqLyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4gKiovIiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuICoqLyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuICoqLyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbiAqKi8iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4gKiovIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanNcbiAqKi8iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4gKiovIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3RvLWluZGV4LmpzXG4gKiovIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbiAqKi8iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19odG1sLmpzXG4gKiovIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuICoqLyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanNcbiAqKi8iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qc1xuICoqLyIsInZhciAkaXRlcmF0b3JzICAgID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKVxuICAsIHJlZGVmaW5lICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHdrcyAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIElURVJBVE9SICAgICAgPSB3a3MoJ2l0ZXJhdG9yJylcbiAgLCBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpXG4gICwgQXJyYXlWYWx1ZXMgICA9IEl0ZXJhdG9ycy5BcnJheTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlXG4gICAgLCBrZXk7XG4gIGlmKHByb3RvKXtcbiAgICBpZighcHJvdG9bSVRFUkFUT1JdKWhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYoIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGZvcihrZXkgaW4gJGl0ZXJhdG9ycylpZighcHJvdG9ba2V5XSlyZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4gKiovIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJylcbiAgLCBBcnJheVByb3RvICA9IEFycmF5LnByb3RvdHlwZTtcbmlmKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZClyZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4gKiovIiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qc1xuICoqLyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanNcbiAqKi8iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4gKiovIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4gKiovIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuICoqLyIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9fdGFzay5qc1xuICoqLyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qc1xuICoqLyIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4gKiovIiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFRoaXMgZmlsZSB3aWxsIGhhY2sgYGNvbnNvbGVgIG1ldGhvZHMgYnkgYFdYRW52aXJvbm1lbnQubG9nTGV2ZWxgLlxuICogU28gd2UgY2FuIGNvbnRyb2wgaG93IG1hbnkgYW5kIHdoaWNoIG1lc3NhZ2VzIHdpbGwgYmUgc2VudCBieSBjaGFuZ2UgdGhlIGxvZyBsZXZlbC5cbiAqIEFkZGl0aW9uYWxseSBpbiBuYXRpdmUgcGxhdGZvcm0gdGhlIG1lc3NhZ2UgY29udGVudCBtdXN0IGJlIHByaW1pdGl2ZSB2YWx1ZXMgYW5kXG4gKiB1c2luZyBgbmF0aXZlTG9nKC4uLmFyZ3MsIGxvZ0xldmVsTWFyaylgIHNvIHdlIGNyZWF0ZSBhIG5ldyBgY29uc29sZWAgb2JqZWN0IGluXG4gKiBnbG9iYWwgYWRkIGEgZm9ybWF0IHByb2Nlc3MgZm9yIGl0cyBtZXRob2RzLlxuICovXG5cbmNvbnN0IHsgY29uc29sZSwgbmF0aXZlTG9nIH0gPSBnbG9iYWxcbmNvbnN0IExFVkVMUyA9IFsnb2ZmJywgJ2Vycm9yJywgJ3dhcm4nLCAnaW5mbycsICdsb2cnLCAnZGVidWcnXVxuY29uc3QgbGV2ZWxNYXAgPSB7fVxuXG5nZW5lcmF0ZUxldmVsTWFwKClcblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAoXG4gIHR5cGVvZiBjb25zb2xlID09PSAndW5kZWZpbmVkJyB8fCAvLyBBbmRyb2lkXG4gIChnbG9iYWwuV1hFbnZpcm9ubWVudCAmJiBnbG9iYWwuV1hFbnZpcm9ubWVudC5wbGF0Zm9ybSA9PT0gJ2lPUycpIC8vIGlPU1xuKSB7XG4gIGdsb2JhbC5jb25zb2xlID0ge1xuICAgIGRlYnVnOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ2RlYnVnJykpIHsgbmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fREVCVUcnKSB9XG4gICAgfSxcbiAgICBsb2c6ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnbG9nJykpIHsgbmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fTE9HJykgfVxuICAgIH0sXG4gICAgaW5mbzogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdpbmZvJykpIHsgbmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fSU5GTycpIH1cbiAgICB9LFxuICAgIHdhcm46ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnd2FybicpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX1dBUk4nKSB9XG4gICAgfSxcbiAgICBlcnJvcjogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdlcnJvcicpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0VSUk9SJykgfVxuICAgIH1cbiAgfVxufVxuZWxzZSB7IC8vIEhUTUw1XG4gIGNvbnN0IHsgZGVidWcsIGxvZywgaW5mbywgd2FybiwgZXJyb3IgfSA9IGNvbnNvbGVcbiAgY29uc29sZS5fX29yaV9fID0geyBkZWJ1ZywgbG9nLCBpbmZvLCB3YXJuLCBlcnJvciB9XG4gIGNvbnNvbGUuZGVidWcgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdkZWJ1ZycpKSB7IGNvbnNvbGUuX19vcmlfXy5kZWJ1Zy5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbiAgY29uc29sZS5sb2cgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdsb2cnKSkgeyBjb25zb2xlLl9fb3JpX18ubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxuICBjb25zb2xlLmluZm8gPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdpbmZvJykpIHsgY29uc29sZS5fX29yaV9fLmluZm8uYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUud2FybiA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGNoZWNrTGV2ZWwoJ3dhcm4nKSkgeyBjb25zb2xlLl9fb3JpX18ud2Fybi5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbiAgY29uc29sZS5lcnJvciA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGNoZWNrTGV2ZWwoJ2Vycm9yJykpIHsgY29uc29sZS5fX29yaV9fLmVycm9yLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIG1hcCBmb3Igd2hpY2ggdHlwZXMgb2YgbWVzc2FnZSB3aWxsIGJlIHNlbnQgaW4gYSBjZXJ0YWluIG1lc3NhZ2UgbGV2ZWxcbiAqIGFzIHRoZSBvcmRlciBvZiBMRVZFTFMuXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlTGV2ZWxNYXAgKCkge1xuICBMRVZFTFMuZm9yRWFjaChsZXZlbCA9PiB7XG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IExFVkVMUy5pbmRleE9mKGxldmVsKVxuICAgIGxldmVsTWFwW2xldmVsXSA9IHt9XG4gICAgTEVWRUxTLmZvckVhY2godHlwZSA9PiB7XG4gICAgICBjb25zdCB0eXBlSW5kZXggPSBMRVZFTFMuaW5kZXhPZih0eXBlKVxuICAgICAgaWYgKHR5cGVJbmRleCA8PSBsZXZlbEluZGV4KSB7XG4gICAgICAgIGxldmVsTWFwW2xldmVsXVt0eXBlXSA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgY2VydGFpbiB0eXBlIG9mIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IGluIGN1cnJlbnQgbG9nIGxldmVsIG9mIGVudi5cbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY2hlY2tMZXZlbCAodHlwZSkge1xuICBjb25zdCBsb2dMZXZlbCA9IChnbG9iYWwuV1hFbnZpcm9ubWVudCAmJiBnbG9iYWwuV1hFbnZpcm9ubWVudC5sb2dMZXZlbCkgfHwgJ2xvZydcbiAgcmV0dXJuIGxldmVsTWFwW2xvZ0xldmVsXSAmJiBsZXZlbE1hcFtsb2dMZXZlbF1bdHlwZV1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFsbCBsb2cgYXJndW1lbnRzIGludG8gcHJpbWl0aXZlIHZhbHVlcy5cbiAqIEBwYXJhbSAge2FycmF5fSBhcmdzXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gZm9ybWF0IChhcmdzKSB7XG4gIHJldHVybiBhcmdzLm1hcCgodikgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcbiAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09PSAnW29iamVjdCBvYmplY3RdJykge1xuICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdiA9IFN0cmluZyh2KVxuICAgIH1cbiAgICByZXR1cm4gdlxuICB9KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL3NoYXJlZC9jb25zb2xlLmpzXG4gKiovIiwiaW1wb3J0ICdjb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvc2hhcmVkL29iamVjdEFzc2lnbi5qc1xuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24uanNcbiAqKi8iLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbiAqKi8iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuICoqLyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBSZWdpc3RlciBmcmFtZXdvcmsocykgaW4gSlMgcnVudGltZS4gV2VleCBzdXBwbHkgdHdvIGxheWVycyBmb3IgM3JkLXBhcnR5XG4gKiBmcmFtZXdvcmsocyk6IG9uZSBpcyB0aGUgaW5zdGFuY2UgbWFuYWdlbWVudCBsYXllciwgYW5vdGhlciBpcyB0aGVcbiAqIHZpcnR1YWwtRE9NIGxheWVyLlxuICovXG5cbi8vIFRoaXMgY29uZmlnIGlzIGdlbmVyYXRlZCBieSBgbnBtIHJ1biBidWlsZDpjb25maWdgLlxuLy8gSXQgd2lsbCBjb2xsZWN0IGFsbCBgcnVudGltZS9mcmFtZXdvcmstKi5qc2AgZmlsZXMgYW5kIGltcG9ydCBlYWNoIG9mIHRoZW0uXG4vLyBUaGUgZmlsZW5hbWUgaXMgYWxzbyB0aGUgZnJhbWV3b3JrIG5hbWUuXG5pbXBvcnQgeyBEb2N1bWVudCwgRWxlbWVudCwgQ29tbWVudCB9IGZyb20gJy4uL3Zkb20nXG5pbXBvcnQgTGlzdGVuZXIgZnJvbSAnLi4vdmRvbS9saXN0ZW5lcidcbmltcG9ydCBmcmFtZXdvcmtzIGZyb20gJy4vY29uZmlnJ1xuXG5pbXBvcnQgaW5pdCBmcm9tICcuL2luaXQnXG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgRG9jdW1lbnQsIEVsZW1lbnQsIENvbW1lbnQsIExpc3RlbmVyLCBmcmFtZXdvcmtzLFxuICBzZW5kVGFza3MgKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gZ2xvYmFsLmNhbGxOYXRpdmUoLi4uYXJncylcbiAgfVxufVxuXG5jb25zdCBtZXRob2RzID0gaW5pdChjb25maWcpXG5cbmV4cG9ydCBkZWZhdWx0IG1ldGhvZHNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9ydW50aW1lL2luZGV4LmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBBIHNpbXBsZSB2aXJ0dWFsIGRvbSBpbXBsZW1lbnRhdGlvblxuICovXG4vLyBpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi9zaGFyZWQnXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMnXG5cbmNvbnN0IERFRkFVTFRfVEFHX05BTUUgPSAnZGl2J1xuXG5leHBvcnQgY29uc3QgaW5zdGFuY2VNYXAgPSB7fVxubGV0IG5leHROb2RlUmVmID0gMVxuXG5leHBvcnQgZnVuY3Rpb24gRG9jdW1lbnQgKGlkLCB1cmwsIGhhbmRsZXIsIExpc3RlbmVyKSB7XG4gIGlkID0gaWQgPyBpZC50b1N0cmluZygpIDogJydcbiAgdGhpcy5pZCA9IGlkXG4gIHRoaXMuVVJMID0gdXJsXG5cbiAgaW5zdGFuY2VNYXBbaWRdID0gdGhpc1xuICB0aGlzLm5vZGVNYXAgPSB7fVxuICBMaXN0ZW5lciAmJiAodGhpcy5saXN0ZW5lciA9IG5ldyBMaXN0ZW5lcihpZCwgaGFuZGxlciB8fCBnZW5DYWxsVGFza3MoaWQpKSlcbiAgdGhpcy5jcmVhdGVEb2N1bWVudEVsZW1lbnQoKVxufVxuXG5mdW5jdGlvbiBnZW5DYWxsVGFza3MgKGlkKSB7XG4gIHJldHVybiAodGFza3MpID0+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGFza3MpKSB7XG4gICAgICB0YXNrcyA9IFt0YXNrc11cbiAgICB9XG5cbiAgICAvLyBjb25zdCBhZGRFbGVtZW50VGFzayA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHtcbiAgICAvLyAgIHJldHVybiB0YXNrLm1vZHVsZSA9PT0gJ2RvbScgJiYgdGFzay5tZXRob2QgPT09ICdhZGRFbGVtZW50J1xuICAgIC8vIH0pO1xuICAgIC8vXG4gICAgLy8gY29uc3Qgb3RoZXJUYXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHtcbiAgICAvLyAgIHJldHVybiB0YXNrLm1vZHVsZSAhPT0gJ2RvbScgfHwgdGFzay5tZXRob2QgIT09ICdhZGRFbGVtZW50J1xuICAgIC8vIH0pO1xuXG4gICAgLy8gY29uc29sZS5sb2coJz09PT0+JywgYWRkRWxlbWVudFRhc2spXG4gICAgLy8gY29uc29sZS5sb2coJy0tLS0tPicsIG90aGVyVGFza3MpXG5cbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgaWYgKHRhc2subW9kdWxlID09PSAnZG9tJyAmJiB0YXNrLm1ldGhvZCA9PT0gJ2FkZEVsZW1lbnQnKSB7XG4gICAgICAgIGNvbnN0IFtyZWYsIGpzb24sIGluZGV4XSA9IHRhc2suYXJnc1xuICAgICAgICBjYWxsQWRkRWxlbWVudChpZCwgcmVmLCBqc29uLCBpbmRleCwgJy0xJylcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjYWxsTmF0aXZlKGlkLCBbdGFza10sICctMScpXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIGxldCByZXR1cm5WYWx1ZTtcbiAgICAvLyBpZiAob3RoZXJUYXNrcyAmJiBvdGhlclRhc2tzLmxlbmd0aCkge1xuICAgIC8vICAgcmV0dXJuVmFsdWUgPSBjYWxsTmF0aXZlKGlkLCBvdGhlclRhc2tzLCAnLTEnKVxuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGlmIChhZGRFbGVtZW50VGFzayAmJiBhZGRFbGVtZW50VGFzay5sZW5ndGgpIHsgICAgICAgLy8gZG9tLmFkZEVsZW1lbnRcbiAgICAvLyAvLyBpZiAoZmFsc2UpIHtcbiAgICAvLyAgIGFkZEVsZW1lbnRUYXNrLmZvckVhY2godGFzayA9PiB7XG4gICAgLy8gICAgIGNvbnN0IFtyZWYsIGpzb24sIGluZGV4XSA9IHRhc2suYXJnc1xuICAgIC8vICAgICBjYWxsQWRkRWxlbWVudChpZCwgcmVmLCBqc29uLCBpbmRleCwgLTEpXG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyByZXR1cm4gcmV0dXJuVmFsdWU7XG4gIH1cbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGRlbGV0ZSB0aGlzLmxpc3RlbmVyXG4gIGRlbGV0ZSB0aGlzLm5vZGVNYXBcbiAgZGVsZXRlIGluc3RhbmNlTWFwW3RoaXMuaWRdXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmxpc3RlbmVyLmJhdGNoZWQgPSBmYWxzZVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGlzdGVuZXIuYmF0Y2hlZCA9IHRydWVcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZURvY3VtZW50RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmRvY3VtZW50RWxlbWVudCkge1xuICAgIGNvbnN0IGVsID0gbmV3IEVsZW1lbnQoJ2RvY3VtZW50JylcbiAgICBlbC5kb2NJZCA9IHRoaXMuaWRcbiAgICBlbC5vd25lckRvY3VtZW50ID0gdGhpc1xuICAgIGVsLnJvbGUgPSAnZG9jdW1lbnRFbGVtZW50J1xuICAgIGVsLmRlcHRoID0gMFxuICAgIGVsLnJlZiA9ICdfZG9jdW1lbnRFbGVtZW50J1xuICAgIHRoaXMubm9kZU1hcC5fZG9jdW1lbnRFbGVtZW50ID0gZWxcbiAgICB0aGlzLmRvY3VtZW50RWxlbWVudCA9IGVsXG4gICAgZWwuYXBwZW5kQ2hpbGQgPSAobm9kZSkgPT4ge1xuICAgICAgYXBwZW5kQm9keSh0aGlzLCBub2RlKVxuICAgIH1cbiAgICBlbC5pbnNlcnRCZWZvcmUgPSAobm9kZSwgYmVmb3JlKSA9PiB7XG4gICAgICBhcHBlbmRCb2R5KHRoaXMsIG5vZGUsIGJlZm9yZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5kb2N1bWVudEVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYXBwZW5kQm9keSAoZG9jLCBub2RlLCBiZWZvcmUpIHtcbiAgY29uc3QgeyBkb2N1bWVudEVsZW1lbnQgfSA9IGRvY1xuXG4gIGlmIChkb2N1bWVudEVsZW1lbnQucHVyZUNoaWxkcmVuLmxlbmd0aCA+IDAgfHwgbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgY2hpbGRyZW4gPSBkb2N1bWVudEVsZW1lbnQuY2hpbGRyZW5cbiAgY29uc3QgYmVmb3JlSW5kZXggPSBjaGlsZHJlbi5pbmRleE9mKGJlZm9yZSlcbiAgaWYgKGJlZm9yZUluZGV4IDwgMCkge1xuICAgIGNoaWxkcmVuLnB1c2gobm9kZSlcbiAgfVxuICBlbHNlIHtcbiAgICBjaGlsZHJlbi5zcGxpY2UoYmVmb3JlSW5kZXgsIDAsIG5vZGUpXG4gIH1cblxuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgIGlmIChub2RlLnJvbGUgPT09ICdib2R5Jykge1xuICAgICAgbm9kZS5kb2NJZCA9IGRvYy5pZFxuICAgICAgbm9kZS5vd25lckRvY3VtZW50ID0gZG9jXG4gICAgICBub2RlLnBhcmVudE5vZGUgPSBkb2N1bWVudEVsZW1lbnRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gbm9kZVxuICAgICAgfSlcbiAgICAgIHNldEJvZHkoZG9jLCBub2RlKVxuICAgICAgbm9kZS5kb2NJZCA9IGRvYy5pZFxuICAgICAgbm9kZS5vd25lckRvY3VtZW50ID0gZG9jXG4gICAgICBsaW5rUGFyZW50KG5vZGUsIGRvY3VtZW50RWxlbWVudClcbiAgICAgIGRlbGV0ZSBkb2Mubm9kZU1hcFtub2RlLm5vZGVJZF1cbiAgICB9XG4gICAgZG9jdW1lbnRFbGVtZW50LnB1cmVDaGlsZHJlbi5wdXNoKG5vZGUpXG4gICAgZG9jLmxpc3RlbmVyLmNyZWF0ZUJvZHkobm9kZSlcbiAgfVxuICBlbHNlIHtcbiAgICBub2RlLnBhcmVudE5vZGUgPSBkb2N1bWVudEVsZW1lbnRcbiAgICBkb2Mubm9kZU1hcFtub2RlLnJlZl0gPSBub2RlXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Qm9keSAoZG9jLCBlbCkge1xuICBlbC5yb2xlID0gJ2JvZHknXG4gIGVsLmRlcHRoID0gMVxuICBkZWxldGUgZG9jLm5vZGVNYXBbZWwubm9kZUlkXVxuICBlbC5yZWYgPSAnX3Jvb3QnXG4gIGRvYy5ub2RlTWFwLl9yb290ID0gZWxcbiAgZG9jLmJvZHkgPSBlbFxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlQm9keSA9IGZ1bmN0aW9uICh0eXBlLCBwcm9wcykge1xuICBpZiAoIXRoaXMuYm9keSkge1xuICAgIGNvbnN0IGVsID0gbmV3IEVsZW1lbnQodHlwZSwgcHJvcHMpXG4gICAgc2V0Qm9keSh0aGlzLCBlbClcbiAgfVxuXG4gIHJldHVybiB0aGlzLmJvZHlcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnTmFtZSwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBFbGVtZW50KHRhZ05hbWUsIHByb3BzKVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlQ29tbWVudCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gIHJldHVybiBuZXcgQ29tbWVudCh0ZXh0KVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuZmlyZUV2ZW50ID0gZnVuY3Rpb24gKGVsLCB0eXBlLCBlLCBkb21DaGFuZ2VzKSB7XG4gIGlmICghZWwpIHtcbiAgICByZXR1cm5cbiAgfVxuICBlID0gZSB8fCB7fVxuICBlLnR5cGUgPSB0eXBlXG4gIGUudGFyZ2V0ID0gZWxcbiAgZS50aW1lc3RhbXAgPSBEYXRlLm5vdygpXG4gIGlmIChkb21DaGFuZ2VzKSB7XG4gICAgdXBkYXRlRWxlbWVudChlbCwgZG9tQ2hhbmdlcylcbiAgfVxuICByZXR1cm4gZWwuZmlyZUV2ZW50KHR5cGUsIGUpXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5nZXRSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gIHJldHVybiB0aGlzLm5vZGVNYXBbcmVmXVxufVxuXG5mdW5jdGlvbiB1cGRhdGVFbGVtZW50IChlbCwgY2hhbmdlcykge1xuICBjb25zdCBhdHRycyA9IGNoYW5nZXMuYXR0cnMgfHwge31cbiAgZm9yIChjb25zdCBuYW1lIGluIGF0dHJzKSB7XG4gICAgZWwuc2V0QXR0cihuYW1lLCBhdHRyc1tuYW1lXSwgdHJ1ZSlcbiAgfVxuICBjb25zdCBzdHlsZSA9IGNoYW5nZXMuc3R5bGUgfHwge31cbiAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlKSB7XG4gICAgZWwuc2V0U3R5bGUobmFtZSwgc3R5bGVbbmFtZV0sIHRydWUpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5vZGUgKCkge1xuICB0aGlzLm5vZGVJZCA9IChuZXh0Tm9kZVJlZisrKS50b1N0cmluZygpXG4gIHRoaXMucmVmID0gdGhpcy5ub2RlSWRcbiAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gIHRoaXMucHVyZUNoaWxkcmVuID0gW11cbiAgdGhpcy5wYXJlbnROb2RlID0gbnVsbFxuICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbFxuICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGxcbn1cblxuTm9kZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZG9jID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF1cbiAgaWYgKGRvYykge1xuICAgIGRlbGV0ZSB0aGlzLmRvY0lkXG4gICAgZGVsZXRlIGRvYy5ub2RlTWFwW3RoaXMubm9kZUlkXVxuICB9XG4gIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgY2hpbGQuZGVzdHJveSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFbGVtZW50ICh0eXBlID0gREVGQVVMVF9UQUdfTkFNRSwgcHJvcHMpIHtcbiAgcHJvcHMgPSBwcm9wcyB8fCB7fVxuICB0aGlzLm5vZGVUeXBlID0gMVxuICB0aGlzLm5vZGVJZCA9IChuZXh0Tm9kZVJlZisrKS50b1N0cmluZygpXG4gIHRoaXMucmVmID0gdGhpcy5ub2RlSWRcbiAgdGhpcy50eXBlID0gdHlwZVxuICB0aGlzLmF0dHIgPSBwcm9wcy5hdHRyIHx8IHt9XG4gIHRoaXMuY2xhc3NTdHlsZSA9IHByb3BzLmNsYXNzU3R5bGUgfHwge31cbiAgdGhpcy5zdHlsZSA9IHByb3BzLnN0eWxlIHx8IHt9XG4gIHRoaXMuZXZlbnQgPSB7fVxuICB0aGlzLmNoaWxkcmVuID0gW11cbiAgdGhpcy5wdXJlQ2hpbGRyZW4gPSBbXVxufVxuXG5FbGVtZW50LnByb3RvdHlwZSA9IG5ldyBOb2RlKClcblxuRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAobm9kZSkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZSAhPT0gdGhpcykge1xuICAgIHJldHVyblxuICB9XG4gIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgbGlua1BhcmVudChub2RlLCB0aGlzKVxuICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLCB0cnVlKVxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICByZWdpc3Rlck5vZGUodGhpcy5kb2NJZCwgbm9kZSlcbiAgICB9XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMucHVyZUNoaWxkcmVuLCB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGgpXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5hZGRFbGVtZW50KG5vZGUsIHRoaXMucmVmLCAtMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLCB0cnVlKVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG1vdmVJbmRleChub2RlLCB0aGlzLnB1cmVDaGlsZHJlbiwgdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgaWYgKHRoaXMuZG9jSWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5tb3ZlRWxlbWVudChub2RlLnJlZiwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRCZWZvcmUgPSBmdW5jdGlvbiAobm9kZSwgYmVmb3JlKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKG5vZGUgPT09IGJlZm9yZSB8fCBub2RlLm5leHRTaWJsaW5nID09PSBiZWZvcmUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgIGxpbmtQYXJlbnQobm9kZSwgdGhpcylcbiAgICBpbnNlcnRJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYmVmb3JlKSwgdHJ1ZSlcbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgcmVnaXN0ZXJOb2RlKHRoaXMuZG9jSWQsIG5vZGUpXG4gICAgfVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBwdXJlQmVmb3JlID0gbmV4dEVsZW1lbnQoYmVmb3JlKVxuICAgICAgY29uc3QgaW5kZXggPSBpbnNlcnRJbmRleChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4sXG4gICAgICAgIHB1cmVCZWZvcmVcbiAgICAgICAgICA/IHRoaXMucHVyZUNoaWxkcmVuLmluZGV4T2YocHVyZUJlZm9yZSlcbiAgICAgICAgICA6IHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aFxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIuYWRkRWxlbWVudChub2RlLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIG1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYmVmb3JlKSwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgcHVyZUJlZm9yZSA9IG5leHRFbGVtZW50KGJlZm9yZSlcbiAgICAgIGNvbnN0IGluZGV4ID0gbW92ZUluZGV4KFxuICAgICAgICBub2RlLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgcHVyZUJlZm9yZVxuICAgICAgICAgID8gdGhpcy5wdXJlQ2hpbGRyZW4uaW5kZXhPZihwdXJlQmVmb3JlKVxuICAgICAgICAgIDogdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoXG4gICAgICApXG4gICAgICBpZiAodGhpcy5kb2NJZCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLm1vdmVFbGVtZW50KG5vZGUucmVmLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmluc2VydEFmdGVyID0gZnVuY3Rpb24gKG5vZGUsIGFmdGVyKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKG5vZGUgPT09IGFmdGVyIHx8IG5vZGUucHJldmlvdXNTaWJsaW5nID09PSBhZnRlcikge1xuICAgIHJldHVyblxuICB9XG4gIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgbGlua1BhcmVudChub2RlLCB0aGlzKVxuICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihhZnRlcikgKyAxLCB0cnVlKVxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICByZWdpc3Rlck5vZGUodGhpcy5kb2NJZCwgbm9kZSlcbiAgICB9XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaW5zZXJ0SW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHByZXZpb3VzRWxlbWVudChhZnRlcikpICsgMVxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIuYWRkRWxlbWVudChub2RlLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIG1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYWZ0ZXIpICsgMSwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBtb3ZlSW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHByZXZpb3VzRWxlbWVudChhZnRlcikpICsgMVxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5tb3ZlRWxlbWVudChub2RlLnJlZiwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChub2RlLCBwcmVzZXJ2ZWQpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgIHJlbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRydWUpXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJlbW92ZUluZGV4KG5vZGUsIHRoaXMucHVyZUNoaWxkcmVuKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICBsaXN0ZW5lci5yZW1vdmVFbGVtZW50KG5vZGUucmVmKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIXByZXNlcnZlZCkge1xuICAgIG5vZGUuZGVzdHJveSgpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIHRoaXMucHVyZUNoaWxkcmVuLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBsaXN0ZW5lci5yZW1vdmVFbGVtZW50KG5vZGUucmVmKVxuICAgIH0pXG4gIH1cbiAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIG5vZGUuZGVzdHJveSgpXG4gIH0pXG4gIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID0gMFxuICB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGggPSAwXG59XG5cbmZ1bmN0aW9uIG5leHRFbGVtZW50IChub2RlKSB7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuICAgIG5vZGUgPSBub2RlLm5leHRTaWJsaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJldmlvdXNFbGVtZW50IChub2RlKSB7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnByZXZpb3VzU2libGluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIGxpbmtQYXJlbnQgKG5vZGUsIHBhcmVudCkge1xuICBub2RlLnBhcmVudE5vZGUgPSBwYXJlbnRcbiAgaWYgKHBhcmVudC5kb2NJZCkge1xuICAgIG5vZGUuZG9jSWQgPSBwYXJlbnQuZG9jSWRcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSBwYXJlbnQub3duZXJEb2N1bWVudFxuICAgIG5vZGUub3duZXJEb2N1bWVudC5ub2RlTWFwW25vZGUubm9kZUlkXSA9IG5vZGVcbiAgICBub2RlLmRlcHRoID0gcGFyZW50LmRlcHRoICsgMVxuICB9XG4gIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgbGlua1BhcmVudChjaGlsZCwgbm9kZSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJOb2RlIChkb2NJZCwgbm9kZSkge1xuICBjb25zdCBkb2MgPSBpbnN0YW5jZU1hcFtkb2NJZF1cbiAgZG9jLm5vZGVNYXBbbm9kZS5ub2RlSWRdID0gbm9kZVxufVxuXG5mdW5jdGlvbiBpbnNlcnRJbmRleCAodGFyZ2V0LCBsaXN0LCBuZXdJbmRleCwgY2hhbmdlU2libGluZykge1xuICBpZiAobmV3SW5kZXggPCAwKSB7XG4gICAgbmV3SW5kZXggPSAwXG4gIH1cbiAgY29uc3QgYmVmb3JlID0gbGlzdFtuZXdJbmRleCAtIDFdXG4gIGNvbnN0IGFmdGVyID0gbGlzdFtuZXdJbmRleF1cbiAgbGlzdC5zcGxpY2UobmV3SW5kZXgsIDAsIHRhcmdldClcbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBiZWZvcmUgJiYgKGJlZm9yZS5uZXh0U2libGluZyA9IHRhcmdldClcbiAgICB0YXJnZXQucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlXG4gICAgdGFyZ2V0Lm5leHRTaWJsaW5nID0gYWZ0ZXJcbiAgICBhZnRlciAmJiAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nID0gdGFyZ2V0KVxuICB9XG4gIHJldHVybiBuZXdJbmRleFxufVxuXG5mdW5jdGlvbiBtb3ZlSW5kZXggKHRhcmdldCwgbGlzdCwgbmV3SW5kZXgsIGNoYW5nZVNpYmxpbmcpIHtcbiAgY29uc3QgaW5kZXggPSBsaXN0LmluZGV4T2YodGFyZ2V0KVxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBjb25zdCBiZWZvcmUgPSBsaXN0W2luZGV4IC0gMV1cbiAgICBjb25zdCBhZnRlciA9IGxpc3RbaW5kZXggKyAxXVxuICAgIGJlZm9yZSAmJiAoYmVmb3JlLm5leHRTaWJsaW5nID0gYWZ0ZXIpXG4gICAgYWZ0ZXIgJiYgKGFmdGVyLnByZXZpb3VzU2libGluZyA9IGJlZm9yZSlcbiAgfVxuICBsaXN0LnNwbGljZShpbmRleCwgMSlcbiAgbGV0IG5ld0luZGV4QWZ0ZXIgPSBuZXdJbmRleFxuICBpZiAoaW5kZXggPD0gbmV3SW5kZXgpIHtcbiAgICBuZXdJbmRleEFmdGVyID0gbmV3SW5kZXggLSAxXG4gIH1cbiAgY29uc3QgYmVmb3JlTmV3ID0gbGlzdFtuZXdJbmRleEFmdGVyIC0gMV1cbiAgY29uc3QgYWZ0ZXJOZXcgPSBsaXN0W25ld0luZGV4QWZ0ZXJdXG4gIGxpc3Quc3BsaWNlKG5ld0luZGV4QWZ0ZXIsIDAsIHRhcmdldClcbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBiZWZvcmVOZXcgJiYgKGJlZm9yZU5ldy5uZXh0U2libGluZyA9IHRhcmdldClcbiAgICB0YXJnZXQucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlTmV3XG4gICAgdGFyZ2V0Lm5leHRTaWJsaW5nID0gYWZ0ZXJOZXdcbiAgICBhZnRlck5ldyAmJiAoYWZ0ZXJOZXcucHJldmlvdXNTaWJsaW5nID0gdGFyZ2V0KVxuICB9XG4gIGlmIChpbmRleCA9PT0gbmV3SW5kZXhBZnRlcikge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHJldHVybiBuZXdJbmRleFxufVxuXG5mdW5jdGlvbiByZW1vdmVJbmRleCAodGFyZ2V0LCBsaXN0LCBjaGFuZ2VTaWJsaW5nKSB7XG4gIGNvbnN0IGluZGV4ID0gbGlzdC5pbmRleE9mKHRhcmdldClcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgY29uc3QgYmVmb3JlID0gbGlzdFtpbmRleCAtIDFdXG4gICAgY29uc3QgYWZ0ZXIgPSBsaXN0W2luZGV4ICsgMV1cbiAgICBiZWZvcmUgJiYgKGJlZm9yZS5uZXh0U2libGluZyA9IGFmdGVyKVxuICAgIGFmdGVyICYmIChhZnRlci5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmUpXG4gIH1cbiAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpXG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgc2lsZW50KSB7XG4gIGlmICh0aGlzLmF0dHJba2V5XSA9PT0gdmFsdWUpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLmF0dHJba2V5XSA9IHZhbHVlXG4gIGlmICghc2lsZW50ICYmIHRoaXMuZG9jSWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgbGlzdGVuZXIuc2V0QXR0cih0aGlzLnJlZiwga2V5LCB2YWx1ZSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBzaWxlbnQpIHtcbiAgaWYgKHRoaXMuc3R5bGVba2V5XSA9PT0gdmFsdWUpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLnN0eWxlW2tleV0gPSB2YWx1ZVxuICBpZiAoIXNpbGVudCAmJiB0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldFN0eWxlKHRoaXMucmVmLCBrZXksIHZhbHVlKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnJlc2V0Q2xhc3NTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jbGFzc1N0eWxlKSB7XG4gICAgdGhpcy5jbGFzc1N0eWxlW2tleV0gPSAnJ1xuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldENsYXNzU3R5bGUgPSBmdW5jdGlvbiAoY2xhc3NTdHlsZSkge1xuICB0aGlzLnJlc2V0Q2xhc3NTdHlsZSgpXG4gIGV4dGVuZCh0aGlzLmNsYXNzU3R5bGUsIGNsYXNzU3R5bGUpXG4gIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldFN0eWxlcyh0aGlzLnJlZiwgdGhpcy50b1N0eWxlKCkpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgaGFuZGxlcikge1xuICBpZiAoIXRoaXMuZXZlbnRbdHlwZV0pIHtcbiAgICB0aGlzLmV2ZW50W3R5cGVdID0gaGFuZGxlclxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICBsaXN0ZW5lci5hZGRFdmVudCh0aGlzLnJlZiwgdHlwZSlcbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAodHlwZSkge1xuICBpZiAodGhpcy5ldmVudFt0eXBlXSkge1xuICAgIGRlbGV0ZSB0aGlzLmV2ZW50W3R5cGVdXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgIGxpc3RlbmVyLnJlbW92ZUV2ZW50KHRoaXMucmVmLCB0eXBlKVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5maXJlRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgZSkge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5ldmVudFt0eXBlXVxuICBpZiAoaGFuZGxlcikge1xuICAgIHJldHVybiBoYW5kbGVyLmNhbGwodGhpcywgZSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS50b1N0eWxlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZXh0ZW5kKHt9LCB0aGlzLmNsYXNzU3R5bGUsIHRoaXMuc3R5bGUpXG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHJlZjogdGhpcy5yZWYudG9TdHJpbmcoKSxcbiAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgYXR0cjogdGhpcy5hdHRyLFxuICAgIHN0eWxlOiB0aGlzLnRvU3R5bGUoKVxuICB9XG4gIGNvbnN0IGV2ZW50ID0gT2JqZWN0LmtleXModGhpcy5ldmVudClcbiAgaWYgKGV2ZW50Lmxlbmd0aCkge1xuICAgIHJlc3VsdC5ldmVudCA9IGV2ZW50XG4gIH1cbiAgaWYgKHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aCkge1xuICAgIHJlc3VsdC5jaGlsZHJlbiA9IHRoaXMucHVyZUNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLnRvSlNPTigpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuRWxlbWVudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnPCcgKyB0aGlzLnR5cGUgK1xuICAgICcgYXR0cj0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5hdHRyKSArXG4gICAgJyBzdHlsZT0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy50b1N0eWxlKCkpICsgJz4nICtcbiAgICB0aGlzLnB1cmVDaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZC50b1N0cmluZygpKS5qb2luKCcnKSArXG4gICAgJzwvJyArIHRoaXMudHlwZSArICc+J1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29tbWVudCAodmFsdWUpIHtcbiAgdGhpcy5ub2RlVHlwZSA9IDhcbiAgdGhpcy5ub2RlSWQgPSAobmV4dE5vZGVSZWYrKykudG9TdHJpbmcoKVxuICB0aGlzLnJlZiA9IHRoaXMubm9kZUlkXG4gIHRoaXMudHlwZSA9ICdjb21tZW50J1xuICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gIHRoaXMucHVyZUNoaWxkcmVuID0gW11cbn1cblxuQ29tbWVudC5wcm90b3R5cGUgPSBuZXcgTm9kZSgpXG5cbkNvbW1lbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJzwhLS0gJyArIHRoaXMudmFsdWUgKyAnIC0tPidcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy92ZG9tL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdGVuZXIgKGlkLCBoYW5kbGVyKSB7XG4gIHRoaXMuaWQgPSBpZFxuICB0aGlzLmJhdGNoZWQgPSBmYWxzZVxuICB0aGlzLnVwZGF0ZXMgPSBbXVxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyXG4gIH1cbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmNyZWF0ZUZpbmlzaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyXG4gIHJldHVybiBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ2NyZWF0ZUZpbmlzaCcsIFtdKV0sIGNhbGxiYWNrKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUudXBkYXRlRmluaXNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXJcbiAgcmV0dXJuIGhhbmRsZXIoW2NyZWF0ZUFjdGlvbigndXBkYXRlRmluaXNoJywgW10pXSwgY2FsbGJhY2spXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5yZWZyZXNoRmluaXNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXJcbiAgcmV0dXJuIGhhbmRsZXIoW2NyZWF0ZUFjdGlvbigncmVmcmVzaEZpbmlzaCcsIFtdKV0sIGNhbGxiYWNrKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuY3JlYXRlQm9keSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIGNvbnN0IGJvZHkgPSBlbGVtZW50LnRvSlNPTigpXG4gIGNvbnN0IGNoaWxkcmVuID0gYm9keS5jaGlsZHJlblxuICBkZWxldGUgYm9keS5jaGlsZHJlblxuICBjb25zdCBhY3Rpb25zID0gW2NyZWF0ZUFjdGlvbignY3JlYXRlQm9keScsIFtib2R5XSldXG4gIGlmIChjaGlsZHJlbikge1xuICAgIGFjdGlvbnMucHVzaC5hcHBseShhY3Rpb25zLCBjaGlsZHJlbi5tYXAoY2hpbGQgPT4ge1xuICAgICAgcmV0dXJuIGNyZWF0ZUFjdGlvbignYWRkRWxlbWVudCcsIFtib2R5LnJlZiwgY2hpbGQsIC0xXSlcbiAgICB9KSlcbiAgfVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGFjdGlvbnMpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5hZGRFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHJlZiwgaW5kZXgpIHtcbiAgaWYgKCEoaW5kZXggPj0gMCkpIHtcbiAgICBpbmRleCA9IC0xXG4gIH1cbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ2FkZEVsZW1lbnQnLCBbcmVmLCBlbGVtZW50LnRvSlNPTigpLCBpbmRleF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUucmVtb3ZlRWxlbWVudCA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocmVmKSkge1xuICAgIGNvbnN0IGFjdGlvbnMgPSByZWYubWFwKChyKSA9PiBjcmVhdGVBY3Rpb24oJ3JlbW92ZUVsZW1lbnQnLCBbcl0pKVxuICAgIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoYWN0aW9ucylcbiAgfVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigncmVtb3ZlRWxlbWVudCcsIFtyZWZdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLm1vdmVFbGVtZW50ID0gZnVuY3Rpb24gKHRhcmdldFJlZiwgcGFyZW50UmVmLCBpbmRleCkge1xuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbignbW92ZUVsZW1lbnQnLCBbdGFyZ2V0UmVmLCBwYXJlbnRSZWYsIGluZGV4XSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5zZXRBdHRyID0gZnVuY3Rpb24gKHJlZiwga2V5LCB2YWx1ZSkge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICByZXN1bHRba2V5XSA9IHZhbHVlXG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCd1cGRhdGVBdHRycycsIFtyZWYsIHJlc3VsdF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuc2V0U3R5bGUgPSBmdW5jdGlvbiAocmVmLCBrZXksIHZhbHVlKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9XG4gIHJlc3VsdFtrZXldID0gdmFsdWVcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3VwZGF0ZVN0eWxlJywgW3JlZiwgcmVzdWx0XSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5zZXRTdHlsZXMgPSBmdW5jdGlvbiAocmVmLCBzdHlsZSkge1xuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigndXBkYXRlU3R5bGUnLCBbcmVmLCBzdHlsZV0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuYWRkRXZlbnQgPSBmdW5jdGlvbiAocmVmLCB0eXBlKSB7XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdhZGRFdmVudCcsIFtyZWYsIHR5cGVdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKHJlZiwgdHlwZSkge1xuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigncmVtb3ZlRXZlbnQnLCBbcmVmLCB0eXBlXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5oYW5kbGVyID0gZnVuY3Rpb24gKGFjdGlvbnMsIGNiKSB7XG4gIHJldHVybiBjYiAmJiBjYigpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5hZGRBY3Rpb25zID0gZnVuY3Rpb24gKGFjdGlvbnMpIHtcbiAgY29uc3QgdXBkYXRlcyA9IHRoaXMudXBkYXRlc1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyXG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGFjdGlvbnMpKSB7XG4gICAgYWN0aW9ucyA9IFthY3Rpb25zXVxuICB9XG5cbiAgaWYgKHRoaXMuYmF0Y2hlZCkge1xuICAgIHVwZGF0ZXMucHVzaC5hcHBseSh1cGRhdGVzLCBhY3Rpb25zKVxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBoYW5kbGVyKGFjdGlvbnMpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFjdGlvbiAobmFtZSwgYXJncykge1xuICByZXR1cm4geyBtb2R1bGU6ICdkb20nLCBtZXRob2Q6IG5hbWUsIGFyZ3M6IGFyZ3MgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL3Zkb20vbGlzdGVuZXIuanNcbiAqKi8iLCIvLyBidWlsdCBieSBucG0gcnVuIGJ1aWxkOmNvbmZpZ1xuXG5pbXBvcnQgKiBhcyBXZWV4IGZyb20gJy4uL2RlZmF1bHQnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgV2VleFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL3J1bnRpbWUvY29uZmlnLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IFdlZXggZnJhbWV3b3JrIGVudHJ5LlxuICovXG5cbmV4cG9ydCB7IGNyZWF0ZUluc3RhbmNlIH0gZnJvbSAnLi9zdGF0aWMvY3JlYXRlJ1xuZXhwb3J0IHsgaW5pdCwgcmVmcmVzaEluc3RhbmNlLCBkZXN0cm95SW5zdGFuY2UgfSBmcm9tICcuL3N0YXRpYy9saWZlJ1xuZXhwb3J0IHsgcmVnaXN0ZXJDb21wb25lbnRzLCByZWdpc3Rlck1vZHVsZXMsIHJlZ2lzdGVyTWV0aG9kcyB9IGZyb20gJy4vc3RhdGljL3JlZ2lzdGVyJ1xuZXhwb3J0IHsgcmVjZWl2ZVRhc2tzIH0gZnJvbSAnLi9zdGF0aWMvYnJpZGdlJ1xuZXhwb3J0IHsgZ2V0Um9vdCB9IGZyb20gJy4vc3RhdGljL21pc2MnXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9pbmRleC5qc1xuICoqLyIsImltcG9ydCBBcHAgZnJvbSAnLi4vYXBwJ1xuaW1wb3J0IHsgaW5zdGFuY2VNYXAgfSBmcm9tICcuL21hcCdcbmltcG9ydCB7IGluaXQgYXMgaW5pdEFwcCB9IGZyb20gJy4uL2FwcC9jdHJsJ1xuXG4vKipcbiAqIENyZWF0ZSBhIFdlZXggaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHBhcmFtICB7c3RyaW5nfSBjb2RlXG4gKiBAcGFyYW0gIHtvYmplY3R9IFtvcHRpb25zXSBvcHRpb24gYEhBU19MT0dgIGVuYWJsZSBwcmludCBsb2dcbiAqIEBwYXJhbSAge29iamVjdH0gW2RhdGFdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZSAoaWQsIGNvZGUsIG9wdGlvbnMsIGRhdGEpIHtcbiAgbGV0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaWRdXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIGxldCByZXN1bHRcbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlID0gbmV3IEFwcChpZCwgb3B0aW9ucylcbiAgICBpbnN0YW5jZU1hcFtpZF0gPSBpbnN0YW5jZVxuICAgIHJlc3VsdCA9IGluaXRBcHAoaW5zdGFuY2UsIGNvZGUsIGRhdGEpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvc3RhdGljL2NyZWF0ZS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogV2VleCBpbnN0YW5jZSBjb25zdHJ1Y3RvciAmIGRlZmluaXRpb25cbiAqL1xuXG5pbXBvcnQgeyByZXF1aXJlTW9kdWxlIH0gZnJvbSAnLi9yZWdpc3RlcidcbmltcG9ydCB7IHVwZGF0ZUFjdGlvbnMsIGNhbGxUYXNrcyB9IGZyb20gJy4vY3RybCdcbmltcG9ydCBBcHAgZnJvbSAnLi9pbnN0YW5jZSdcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5BcHAucHJvdG90eXBlLnJlcXVpcmVNb2R1bGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gcmVxdWlyZU1vZHVsZSh0aGlzLCBuYW1lKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkFwcC5wcm90b3R5cGUudXBkYXRlQWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgdXBkYXRlQWN0aW9ucyh0aGlzKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkFwcC5wcm90b3R5cGUuY2FsbFRhc2tzID0gZnVuY3Rpb24gKHRhc2tzKSB7XG4gIGNhbGxUYXNrcyh0aGlzLCB0YXNrcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvaW5kZXguanNcbiAqKi8iLCJsZXQgbmF0aXZlTW9kdWxlcyA9IHt9XG5cbi8vIGZvciB0ZXN0aW5nXG5cbi8qKlxuICogZm9yIHRlc3RpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZHVsZSAobW9kdWxlTmFtZSkge1xuICByZXR1cm4gbmF0aXZlTW9kdWxlc1ttb2R1bGVOYW1lXVxufVxuXG4vKipcbiAqIGZvciB0ZXN0aW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhck1vZHVsZXMgKCkge1xuICBuYXRpdmVNb2R1bGVzID0ge31cbn1cblxuLy8gZm9yIGZyYW1ld29ya1xuXG4vKipcbiAqIGluaXQgbW9kdWxlcyBmb3IgYW4gYXBwIGluc3RhbmNlXG4gKiB0aGUgc2Vjb25kIHBhcmFtIGRldGVybWluZXMgd2hldGhlciB0byByZXBsYWNlIGFuIGV4aXN0ZWQgbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0TW9kdWxlcyAobW9kdWxlcywgaWZSZXBsYWNlKSB7XG4gIGZvciAoY29uc3QgbW9kdWxlTmFtZSBpbiBtb2R1bGVzKSB7XG4gICAgLy8gaW5pdCBgbW9kdWxlc1ttb2R1bGVOYW1lXVtdYFxuICAgIGxldCBtZXRob2RzID0gbmF0aXZlTW9kdWxlc1ttb2R1bGVOYW1lXVxuICAgIGlmICghbWV0aG9kcykge1xuICAgICAgbWV0aG9kcyA9IHt9XG4gICAgICBuYXRpdmVNb2R1bGVzW21vZHVsZU5hbWVdID0gbWV0aG9kc1xuICAgIH1cblxuICAgIC8vIHB1c2ggZWFjaCBub24tZXhpc3RlZCBuZXcgbWV0aG9kXG4gICAgbW9kdWxlc1ttb2R1bGVOYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJykge1xuICAgICAgICBtZXRob2QgPSB7XG4gICAgICAgICAgbmFtZTogbWV0aG9kXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFtZXRob2RzW21ldGhvZC5uYW1lXSB8fCBpZlJlcGxhY2UpIHtcbiAgICAgICAgbWV0aG9kc1ttZXRob2QubmFtZV0gPSBtZXRob2RcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogaW5pdCBhcHAgbWV0aG9kc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1ldGhvZHMgKFZtLCBhcGlzKSB7XG4gIGNvbnN0IHAgPSBWbS5wcm90b3R5cGVcblxuICBmb3IgKGNvbnN0IGFwaU5hbWUgaW4gYXBpcykge1xuICAgIGlmICghcC5oYXNPd25Qcm9wZXJ0eShhcGlOYW1lKSkge1xuICAgICAgcFthcGlOYW1lXSA9IGFwaXNbYXBpTmFtZV1cbiAgICB9XG4gIH1cbn1cblxuLy8gZm9yIGFwcFxuXG4vKipcbiAqIGdldCBhIG1vZHVsZSBvZiBtZXRob2RzIGZvciBhbiBhcHAgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVNb2R1bGUgKGFwcCwgbmFtZSkge1xuICBjb25zdCBtZXRob2RzID0gbmF0aXZlTW9kdWxlc1tuYW1lXVxuICBjb25zdCB0YXJnZXQgPSB7fVxuICBmb3IgKGNvbnN0IG1ldGhvZE5hbWUgaW4gbWV0aG9kcykge1xuICAgIHRhcmdldFttZXRob2ROYW1lXSA9ICguLi5hcmdzKSA9PiBhcHAuY2FsbFRhc2tzKHtcbiAgICAgIG1vZHVsZTogbmFtZSxcbiAgICAgIG1ldGhvZDogbWV0aG9kTmFtZSxcbiAgICAgIGFyZ3M6IGFyZ3NcbiAgICB9KVxuICB9XG4gIHJldHVybiB0YXJnZXRcbn1cblxuLyoqXG4gKiBnZXQgYSBjdXN0b20gY29tcG9uZW50IG9wdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVDdXN0b21Db21wb25lbnQgKGFwcCwgbmFtZSkge1xuICBjb25zdCB7IGN1c3RvbUNvbXBvbmVudE1hcCB9ID0gYXBwXG4gIHJldHVybiBjdXN0b21Db21wb25lbnRNYXBbbmFtZV1cbn1cblxuLyoqXG4gKiByZWdpc3RlciBhIGN1c3RvbSBjb21wb25lbnQgb3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDdXN0b21Db21wb25lbnQgKGFwcCwgbmFtZSwgZGVmKSB7XG4gIGNvbnN0IHsgY3VzdG9tQ29tcG9uZW50TWFwIH0gPSBhcHBcblxuICBpZiAoY3VzdG9tQ29tcG9uZW50TWFwW25hbWVdKSB7XG4gICAgY29uc29sZS5lcnJvcihgW0pTIEZyYW1ld29ya10gZGVmaW5lIGEgY29tcG9uZW50KCR7bmFtZX0pIHRoYXQgYWxyZWFkeSBleGlzdHNgKVxuICAgIHJldHVyblxuICB9XG5cbiAgY3VzdG9tQ29tcG9uZW50TWFwW25hbWVdID0gZGVmXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvcmVnaXN0ZXIuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIGluc3RhbmNlIGNvbnRyb2xzIGZyb20gbmF0aXZlXG4gKlxuICogLSBpbml0IGJ1bmRsZVxuICogLSBmaXJlIGV2ZW50XG4gKiAtIGNhbGxiYWNrXG4gKiAtIGRlc3Ryb3lcbiAqXG4gKiBjb3JyZXNwb25kZWQgd2l0aCB0aGUgQVBJIG9mIGluc3RhbmNlIG1hbmFnZXIgKGZyYW1ld29yay5qcylcbiAqL1xuZXhwb3J0IHsgaW5pdCB9IGZyb20gJy4vaW5pdCdcblxuZXhwb3J0IHtcblx0cmVmcmVzaCxcbiAgZGVzdHJveSxcbiAgZ2V0Um9vdEVsZW1lbnQsXG4gIGZpcmVFdmVudCxcbiAgY2FsbGJhY2ssXG4gIHVwZGF0ZUFjdGlvbnMsXG5cdGNhbGxUYXNrc1xufSBmcm9tICcuL21pc2MnXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvY3RybC9pbmRleC5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogaW5zdGFuY2UgY29udHJvbHMgZnJvbSBuYXRpdmVcbiAqXG4gKiAtIGluaXQgYnVuZGxlXG4gKlxuICogY29ycmVzcG9uZGVkIHdpdGggdGhlIEFQSSBvZiBpbnN0YW5jZSBtYW5hZ2VyIChmcmFtZXdvcmsuanMpXG4gKi9cblxuaW1wb3J0IHsgcmVtb3ZlV2VleFByZWZpeCB9IGZyb20gJy4uLy4uL3V0aWwnXG5pbXBvcnQge1xuICBkZWZpbmVGbixcbiAgYm9vdHN0cmFwLFxuICByZWdpc3RlclxufSBmcm9tICcuLi9idW5kbGUnXG5pbXBvcnQgeyB1cGRhdGVBY3Rpb25zIH0gZnJvbSAnLi9taXNjJ1xuXG4vKipcbiAqIEluaXQgYW4gYXBwIGJ5IHJ1biBjb2RlIHdpdGdoIGRhdGFcbiAqIEBwYXJhbSAge29iamVjdH0gYXBwXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNvZGVcbiAqIEBwYXJhbSAge29iamVjdH0gZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdCAoYXBwLCBjb2RlLCBkYXRhKSB7XG4gIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIEludGlhbGl6ZSBhbiBpbnN0YW5jZSB3aXRoOlxcbicsIGRhdGEpXG4gIGxldCByZXN1bHRcblxuICAvLyBwcmVwYXJlIGFwcCBlbnYgbWV0aG9kc1xuICBjb25zdCBidW5kbGVEZWZpbmUgPSAoLi4uYXJncykgPT4gZGVmaW5lRm4oYXBwLCAuLi5hcmdzKVxuICBjb25zdCBidW5kbGVCb290c3RyYXAgPSAobmFtZSwgY29uZmlnLCBfZGF0YSkgPT4ge1xuICAgIHJlc3VsdCA9IGJvb3RzdHJhcChhcHAsIG5hbWUsIGNvbmZpZywgX2RhdGEgfHwgZGF0YSlcbiAgICB1cGRhdGVBY3Rpb25zKGFwcClcbiAgICBhcHAuZG9jLmxpc3RlbmVyLmNyZWF0ZUZpbmlzaCgpXG4gICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gQWZ0ZXIgaW50aWFsaXplZCBhbiBpbnN0YW5jZSgke2FwcC5pZH0pYClcbiAgfVxuICBjb25zdCBidW5kbGVSZWdpc3RlciA9ICguLi5hcmdzKSA9PiByZWdpc3RlcihhcHAsIC4uLmFyZ3MpXG4gIGNvbnN0IGJ1bmRsZVJlbmRlciA9IChuYW1lLCBfZGF0YSkgPT4ge1xuICAgIHJlc3VsdCA9IGJvb3RzdHJhcChhcHAsIG5hbWUsIHt9LCBfZGF0YSlcbiAgfVxuICBjb25zdCBidW5kbGVSZXF1aXJlID0gbmFtZSA9PiBfZGF0YSA9PiB7XG4gICAgcmVzdWx0ID0gYm9vdHN0cmFwKGFwcCwgbmFtZSwge30sIF9kYXRhKVxuICB9XG4gIGNvbnN0IGJ1bmRsZURvY3VtZW50ID0gYXBwLmRvY1xuICBjb25zdCBidW5kbGVSZXF1aXJlTW9kdWxlID0gbmFtZSA9PiBhcHAucmVxdWlyZU1vZHVsZShyZW1vdmVXZWV4UHJlZml4KG5hbWUpKVxuXG4gIC8vIHByZXBhcmUgY29kZVxuICBsZXQgZnVuY3Rpb25Cb2R5XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIGNvZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBgZnVuY3Rpb24gKCkgey4uLn1gIC0+IGB7Li4ufWBcbiAgICAvLyBub3QgdmVyeSBzdHJpY3RcbiAgICBmdW5jdGlvbkJvZHkgPSBjb2RlLnRvU3RyaW5nKCkuc3Vic3RyKDEyKVxuICB9XG4gIGVsc2UgaWYgKGNvZGUpIHtcbiAgICBmdW5jdGlvbkJvZHkgPSBjb2RlLnRvU3RyaW5nKClcbiAgfVxuXG4gIC8vIHJ1biBjb2RlIGFuZCBnZXQgcmVzdWx0XG4gIGNvbnN0IHsgV1hFbnZpcm9ubWVudCB9ID0gZ2xvYmFsXG4gIGlmIChXWEVudmlyb25tZW50ICYmIFdYRW52aXJvbm1lbnQucGxhdGZvcm0gIT09ICdXZWInKSB7XG4gICAgLy8gdGltZXIgQVBJcyBwb2x5ZmlsbCBpbiBuYXRpdmVcbiAgICBjb25zdCB0aW1lciA9IGFwcC5yZXF1aXJlTW9kdWxlKCd0aW1lcicpXG4gICAgY29uc3QgdGltZXJBUElzID0ge1xuICAgICAgc2V0VGltZW91dDogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhcmdzWzBdKC4uLmFyZ3Muc2xpY2UoMikpXG4gICAgICAgIH1cbiAgICAgICAgdGltZXIuc2V0VGltZW91dChoYW5kbGVyLCBhcmdzWzFdKVxuICAgICAgICByZXR1cm4gYXBwLnVpZC50b1N0cmluZygpXG4gICAgICB9LFxuICAgICAgc2V0SW50ZXJ2YWw6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYXJnc1swXSguLi5hcmdzLnNsaWNlKDIpKVxuICAgICAgICB9XG4gICAgICAgIHRpbWVyLnNldEludGVydmFsKGhhbmRsZXIsIGFyZ3NbMV0pXG4gICAgICAgIHJldHVybiBhcHAudWlkLnRvU3RyaW5nKClcbiAgICAgIH0sXG4gICAgICBjbGVhclRpbWVvdXQ6IChuKSA9PiB7XG4gICAgICAgIHRpbWVyLmNsZWFyVGltZW91dChuKVxuICAgICAgfSxcbiAgICAgIGNsZWFySW50ZXJ2YWw6IChuKSA9PiB7XG4gICAgICAgIHRpbWVyLmNsZWFySW50ZXJ2YWwobilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmbiA9IG5ldyBGdW5jdGlvbihcbiAgICAgICdkZWZpbmUnLFxuICAgICAgJ3JlcXVpcmUnLFxuICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICdib290c3RyYXAnLFxuICAgICAgJ3JlZ2lzdGVyJyxcbiAgICAgICdyZW5kZXInLFxuICAgICAgJ19fd2VleF9kZWZpbmVfXycsIC8vIGFsaWFzIGZvciBkZWZpbmVcbiAgICAgICdfX3dlZXhfYm9vdHN0cmFwX18nLCAvLyBhbGlhcyBmb3IgYm9vdHN0cmFwXG4gICAgICAnX193ZWV4X2RvY3VtZW50X18nLCAvLyBhbGlhcyBmb3IgYm9vdHN0cmFwXG4gICAgICAnX193ZWV4X3JlcXVpcmVfXycsXG4gICAgICAnc2V0VGltZW91dCcsXG4gICAgICAnc2V0SW50ZXJ2YWwnLFxuICAgICAgJ2NsZWFyVGltZW91dCcsXG4gICAgICAnY2xlYXJJbnRlcnZhbCcsXG4gICAgICBmdW5jdGlvbkJvZHlcbiAgICApXG5cbiAgICBmbihcbiAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgIGJ1bmRsZVJlcXVpcmUsXG4gICAgICBidW5kbGVEb2N1bWVudCxcbiAgICAgIGJ1bmRsZUJvb3RzdHJhcCxcbiAgICAgIGJ1bmRsZVJlZ2lzdGVyLFxuICAgICAgYnVuZGxlUmVuZGVyLFxuICAgICAgYnVuZGxlRGVmaW5lLFxuICAgICAgYnVuZGxlQm9vdHN0cmFwLFxuICAgICAgYnVuZGxlRG9jdW1lbnQsXG4gICAgICBidW5kbGVSZXF1aXJlTW9kdWxlLFxuICAgICAgdGltZXJBUElzLnNldFRpbWVvdXQsXG4gICAgICB0aW1lckFQSXMuc2V0SW50ZXJ2YWwsXG4gICAgICB0aW1lckFQSXMuY2xlYXJUaW1lb3V0LFxuICAgICAgdGltZXJBUElzLmNsZWFySW50ZXJ2YWwpXG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgZm4gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAnZGVmaW5lJyxcbiAgICAgICdyZXF1aXJlJyxcbiAgICAgICdkb2N1bWVudCcsXG4gICAgICAnYm9vdHN0cmFwJyxcbiAgICAgICdyZWdpc3RlcicsXG4gICAgICAncmVuZGVyJyxcbiAgICAgICdfX3dlZXhfZGVmaW5lX18nLCAvLyBhbGlhcyBmb3IgZGVmaW5lXG4gICAgICAnX193ZWV4X2Jvb3RzdHJhcF9fJywgLy8gYWxpYXMgZm9yIGJvb3RzdHJhcFxuICAgICAgJ19fd2VleF9kb2N1bWVudF9fJywgLy8gYWxpYXMgZm9yIGJvb3RzdHJhcFxuICAgICAgJ19fd2VleF9yZXF1aXJlX18nLFxuICAgICAgZnVuY3Rpb25Cb2R5XG4gICAgKVxuXG4gICAgZm4oXG4gICAgICBidW5kbGVEZWZpbmUsXG4gICAgICBidW5kbGVSZXF1aXJlLFxuICAgICAgYnVuZGxlRG9jdW1lbnQsXG4gICAgICBidW5kbGVCb290c3RyYXAsXG4gICAgICBidW5kbGVSZWdpc3RlcixcbiAgICAgIGJ1bmRsZVJlbmRlcixcbiAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgIGJ1bmRsZUJvb3RzdHJhcCxcbiAgICAgIGJ1bmRsZURvY3VtZW50LFxuICAgICAgYnVuZGxlUmVxdWlyZU1vZHVsZSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9jdHJsL2luaXQuanNcbiAqKi8iLCJleHBvcnQge1xuICBleHRlbmQsXG4gIGRlZixcbiAgcmVtb3ZlLFxuICBoYXNPd24sXG4gIGJpbmQsXG4gIHRvQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0XG59IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscydcblxuLyoqXG4gKiBDaGVjayBpZiBhIHN0cmluZyBzdGFydHMgd2l0aCAkIG9yIF9cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc2VydmVkIChzdHIpIHtcbiAgY29uc3QgYyA9IChzdHIgKyAnJykuY2hhckNvZGVBdCgwKVxuICByZXR1cm4gYyA9PT0gMHgyNCB8fCBjID09PSAweDVGXG59XG5cbi8vIGNhbiB3ZSB1c2UgX19wcm90b19fP1xuZXhwb3J0IGNvbnN0IGhhc1Byb3RvID0gJ19fcHJvdG9fXycgaW4ge31cblxubGV0IF9TZXRcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKHR5cGVvZiBTZXQgIT09ICd1bmRlZmluZWQnICYmIFNldC50b1N0cmluZygpLm1hdGNoKC9uYXRpdmUgY29kZS8pKSB7XG4gIC8vIHVzZSBuYXRpdmUgU2V0IHdoZW4gYXZhaWxhYmxlLlxuICBfU2V0ID0gU2V0XG59XG5lbHNlIHtcbiAgLy8gYSBub24tc3RhbmRhcmQgU2V0IHBvbHlmaWxsIHRoYXQgb25seSB3b3JrcyB3aXRoIHByaW1pdGl2ZSBrZXlzLlxuICBfU2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB9XG4gIF9TZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRba2V5XSAhPT0gdW5kZWZpbmVkXG4gIH1cbiAgX1NldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHRoaXMuc2V0W2tleV0gPSAxXG4gIH1cbiAgX1NldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIH1cbn1cblxuZXhwb3J0IHsgX1NldCB9XG5cbi8qKlxuICogUG9seWZpbGwgaW4gaU9TNyBieSBuYXRpdmUgYmVjYXVzZSB0aGUgSmF2YVNjcmlwdCBwb2x5ZmlsbCBoYXMgbWVtb3J5IHByb2JsZW0uXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1NldCAoKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gIGlmICh0eXBlb2YgbmF0aXZlU2V0ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBuYXRpdmVTZXQuY3JlYXRlKClcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlICovXG4gIHJldHVybiBuZXcgX1NldCgpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVkIChmbikge1xuICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuIChzdHIpIHtcbiAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdXG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXG4gIH1cbn1cblxuLyoqXG4gKiBDYW1lbGl6ZSBhIGh5cGhlbi1kZWxtaXRlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmNvbnN0IGNhbWVsaXplUkUgPSAvLShcXHcpL2dcbmV4cG9ydCBjb25zdCBjYW1lbGl6ZSA9IGNhY2hlZChzdHIgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgdG9VcHBlcilcbn0pXG5cbmZ1bmN0aW9uIHRvVXBwZXIgKF8sIGMpIHtcbiAgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJ1xufVxuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmNvbnN0IGh5cGhlbmF0ZVJFID0gLyhbYS16XFxkXSkoW0EtWl0pL2dcbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgIC50b0xvd2VyQ2FzZSgpXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwb2YgKHYpIHtcbiAgY29uc3QgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxuICByZXR1cm4gcy5zdWJzdHJpbmcoOCwgcy5sZW5ndGggLSAxKS50b0xvd2VyQ2FzZSgpXG59XG5cbi8vIHdlZXggbmFtZSBydWxlc1xuXG5jb25zdCBXRUVYX0NPTVBPTkVOVF9SRUcgPSAvXkB3ZWV4LWNvbXBvbmVudFxcLy9cbmNvbnN0IFdFRVhfTU9EVUxFX1JFRyA9IC9eQHdlZXgtbW9kdWxlXFwvL1xuY29uc3QgTk9STUFMX01PRFVMRV9SRUcgPSAvXlxcLnsxLDJ9XFwvL1xuY29uc3QgSlNfU1VSRklYX1JFRyA9IC9cXC5qcyQvXG5cbmV4cG9ydCBjb25zdCBpc1dlZXhDb21wb25lbnQgPSBuYW1lID0+ICEhbmFtZS5tYXRjaChXRUVYX0NPTVBPTkVOVF9SRUcpXG5leHBvcnQgY29uc3QgaXNXZWV4TW9kdWxlID0gbmFtZSA9PiAhIW5hbWUubWF0Y2goV0VFWF9NT0RVTEVfUkVHKVxuZXhwb3J0IGNvbnN0IGlzTm9ybWFsTW9kdWxlID0gbmFtZSA9PiAhIW5hbWUubWF0Y2goTk9STUFMX01PRFVMRV9SRUcpXG5leHBvcnQgY29uc3QgaXNOcG1Nb2R1bGUgPSBuYW1lID0+ICFpc1dlZXhDb21wb25lbnQobmFtZSkgJiYgIWlzV2VleE1vZHVsZShuYW1lKSAmJiAhaXNOb3JtYWxNb2R1bGUobmFtZSlcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVdlZXhQcmVmaXggKHN0cikge1xuICBjb25zdCByZXN1bHQgPSBzdHIucmVwbGFjZShXRUVYX0NPTVBPTkVOVF9SRUcsICcnKS5yZXBsYWNlKFdFRVhfTU9EVUxFX1JFRywgJycpXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUpTU3VyZml4IChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKEpTX1NVUkZJWF9SRUcsICcnKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvdXRpbC9pbmRleC5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogYXBpIHRoYXQgaW52b2tlZCBieSBqcyBidW5kbGUgY29kZVxuICpcbiAqIC0gZGVmaW5lKG5hbWUsIGZhY3RvcnkpOiBkZWZpbmUgYSBuZXcgY29tcG9zZWQgY29tcG9uZW50IHR5cGVcbiAqIC0gYm9vdHN0cmFwKHR5cGUsIGNvbmZpZywgZGF0YSk6IHJlcXVpcmUgYSBjZXJ0YWluIHR5cGUgJlxuICogICAgICAgICByZW5kZXIgd2l0aCAob3B0aW9uYWwpIGRhdGFcbiAqXG4gKiBkZXByZWNhdGVkOlxuICogLSByZWdpc3Rlcih0eXBlLCBvcHRpb25zKTogcmVnaXN0ZXIgYSBuZXcgY29tcG9zZWQgY29tcG9uZW50IHR5cGVcbiAqIC0gcmVuZGVyKHR5cGUsIGRhdGEpOiByZW5kZXIgYnkgYSBjZXJ0YWluIHR5cGUgd2l0aCAob3B0aW9uYWwpIGRhdGFcbiAqIC0gcmVxdWlyZSh0eXBlKShkYXRhKTogcmVxdWlyZSBhIHR5cGUgdGhlbiByZW5kZXIgd2l0aCBkYXRhXG4gKi9cblxuZXhwb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSAnLi9ib290c3RyYXAnXG5leHBvcnQgeyBjbGVhckNvbW1vbk1vZHVsZXMsIGRlZmluZUZuLCByZWdpc3RlciB9IGZyb20gJy4vZGVmaW5lJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2J1bmRsZS9pbmRleC5qc1xuICoqLyIsImltcG9ydCBzZW12ZXIgZnJvbSAnc2VtdmVyJ1xuaW1wb3J0IFZtIGZyb20gJy4uLy4uL3ZtJ1xuaW1wb3J0ICogYXMgZG93bmdyYWRlIGZyb20gJy4uL2Rvd25ncmFkZSdcbmltcG9ydCB7XG4gIHJlcXVpcmVDdXN0b21Db21wb25lbnRcbn0gZnJvbSAnLi4vcmVnaXN0ZXInXG5pbXBvcnQge1xuICBpc1BsYWluT2JqZWN0LFxuICBpc1dlZXhDb21wb25lbnQsXG4gIGlzTnBtTW9kdWxlLFxuICByZW1vdmVXZWV4UHJlZml4LFxuICByZW1vdmVKU1N1cmZpeFxufSBmcm9tICcuLi8uLi91dGlsJ1xuXG4vKipcbiAqIGJvb3RzdHJhcCBhcHAgZnJvbSBhIGNlcnRhaW4gY3VzdG9tIGNvbXBvbmVudCB3aXRoIGNvbmZpZyAmIGRhdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJvb3RzdHJhcCAoYXBwLCBuYW1lLCBjb25maWcsIGRhdGEpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gYm9vdHN0cmFwIGZvciAke25hbWV9YClcblxuICAvLyAxLiB2YWxpZGF0ZSBjdXN0b20gY29tcG9uZW50IG5hbWUgZmlyc3RcbiAgbGV0IGNsZWFuTmFtZVxuICBpZiAoaXNXZWV4Q29tcG9uZW50KG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICB9XG4gIGVsc2UgaWYgKGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICAvLyBjaGVjayBpZiBkZWZpbmUgYnkgb2xkICdkZWZpbmUnIG1ldGhvZFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghcmVxdWlyZUN1c3RvbUNvbXBvbmVudChhcHAsIGNsZWFuTmFtZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoYEl0J3Mgbm90IGEgY29tcG9uZW50OiAke25hbWV9YClcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgV3JvbmcgY29tcG9uZW50IG5hbWU6ICR7bmFtZX1gKVxuICB9XG5cbiAgLy8gMi4gdmFsaWRhdGUgY29uZmlndXJhdGlvblxuICBjb25maWcgPSBpc1BsYWluT2JqZWN0KGNvbmZpZykgPyBjb25maWcgOiB7fVxuICAvLyAyLjEgdHJhbnNmb3JtZXIgdmVyc2lvbiBjaGVja1xuICBpZiAodHlwZW9mIGNvbmZpZy50cmFuc2Zvcm1lclZlcnNpb24gPT09ICdzdHJpbmcnICYmXG4gICAgdHlwZW9mIGdsb2JhbC50cmFuc2Zvcm1lclZlcnNpb24gPT09ICdzdHJpbmcnICYmXG4gICAgIXNlbXZlci5zYXRpc2ZpZXMoY29uZmlnLnRyYW5zZm9ybWVyVmVyc2lvbixcbiAgICAgIGdsb2JhbC50cmFuc2Zvcm1lclZlcnNpb24pKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgSlMgQnVuZGxlIHZlcnNpb246ICR7Y29uZmlnLnRyYW5zZm9ybWVyVmVyc2lvbn0gYCArXG4gICAgICBgbm90IGNvbXBhdGlibGUgd2l0aCAke2dsb2JhbC50cmFuc2Zvcm1lclZlcnNpb259YClcbiAgfVxuICAvLyAyLjIgZG93bmdyYWRlIHZlcnNpb24gY2hlY2tcbiAgY29uc3QgZG93bmdyYWRlUmVzdWx0ID0gZG93bmdyYWRlLmNoZWNrKGNvbmZpZy5kb3duZ3JhZGUpXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoZG93bmdyYWRlUmVzdWx0LmlzRG93bmdyYWRlKSB7XG4gICAgYXBwLmNhbGxUYXNrcyhbe1xuICAgICAgbW9kdWxlOiAnaW5zdGFuY2VXcmFwJyxcbiAgICAgIG1ldGhvZDogJ2Vycm9yJyxcbiAgICAgIGFyZ3M6IFtcbiAgICAgICAgZG93bmdyYWRlUmVzdWx0LmVycm9yVHlwZSxcbiAgICAgICAgZG93bmdyYWRlUmVzdWx0LmNvZGUsXG4gICAgICAgIGRvd25ncmFkZVJlc3VsdC5lcnJvck1lc3NhZ2VcbiAgICAgIF1cbiAgICB9XSlcbiAgICByZXR1cm4gbmV3IEVycm9yKGBEb3duZ3JhZGVbJHtkb3duZ3JhZGVSZXN1bHQuY29kZX1dOiAke2Rvd25ncmFkZVJlc3VsdC5lcnJvck1lc3NhZ2V9YClcbiAgfVxuXG4gIC8vIDMuIGNyZWF0ZSBhIG5ldyBWbSB3aXRoIGN1c3RvbSBjb21wb25lbnQgbmFtZSBhbmQgZGF0YVxuICBhcHAudm0gPSBuZXcgVm0oY2xlYW5OYW1lLCBudWxsLCB7IF9hcHA6IGFwcCB9LCBudWxsLCBkYXRhKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2J1bmRsZS9ib290c3RyYXAuanNcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBTZW1WZXI7XG5cbi8vIFRoZSBkZWJ1ZyBmdW5jdGlvbiBpcyBleGNsdWRlZCBlbnRpcmVseSBmcm9tIHRoZSBtaW5pZmllZCB2ZXJzaW9uLlxuLyogbm9taW4gKi8gdmFyIGRlYnVnO1xuLyogbm9taW4gKi8gaWYgKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JyAmJlxuICAgIC8qIG5vbWluICovIHByb2Nlc3MuZW52ICYmXG4gICAgLyogbm9taW4gKi8gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyAmJlxuICAgIC8qIG5vbWluICovIC9cXGJzZW12ZXJcXGIvaS50ZXN0KHByb2Nlc3MuZW52Lk5PREVfREVCVUcpKVxuICAvKiBub21pbiAqLyBkZWJ1ZyA9IGZ1bmN0aW9uKCkge1xuICAgIC8qIG5vbWluICovIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAvKiBub21pbiAqLyBhcmdzLnVuc2hpZnQoJ1NFTVZFUicpO1xuICAgIC8qIG5vbWluICovIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgIC8qIG5vbWluICovIH07XG4vKiBub21pbiAqLyBlbHNlXG4gIC8qIG5vbWluICovIGRlYnVnID0gZnVuY3Rpb24oKSB7fTtcblxuLy8gTm90ZTogdGhpcyBpcyB0aGUgc2VtdmVyLm9yZyB2ZXJzaW9uIG9mIHRoZSBzcGVjIHRoYXQgaXQgaW1wbGVtZW50c1xuLy8gTm90IG5lY2Vzc2FyaWx5IHRoZSBwYWNrYWdlIHZlcnNpb24gb2YgdGhpcyBjb2RlLlxuZXhwb3J0cy5TRU1WRVJfU1BFQ19WRVJTSU9OID0gJzIuMC4wJztcblxudmFyIE1BWF9MRU5HVEggPSAyNTY7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8vIFRoZSBhY3R1YWwgcmVnZXhwcyBnbyBvbiBleHBvcnRzLnJlXG52YXIgcmUgPSBleHBvcnRzLnJlID0gW107XG52YXIgc3JjID0gZXhwb3J0cy5zcmMgPSBbXTtcbnZhciBSID0gMDtcblxuLy8gVGhlIGZvbGxvd2luZyBSZWd1bGFyIEV4cHJlc3Npb25zIGNhbiBiZSB1c2VkIGZvciB0b2tlbml6aW5nLFxuLy8gdmFsaWRhdGluZywgYW5kIHBhcnNpbmcgU2VtVmVyIHZlcnNpb24gc3RyaW5ncy5cblxuLy8gIyMgTnVtZXJpYyBJZGVudGlmaWVyXG4vLyBBIHNpbmdsZSBgMGAsIG9yIGEgbm9uLXplcm8gZGlnaXQgZm9sbG93ZWQgYnkgemVybyBvciBtb3JlIGRpZ2l0cy5cblxudmFyIE5VTUVSSUNJREVOVElGSUVSID0gUisrO1xuc3JjW05VTUVSSUNJREVOVElGSUVSXSA9ICcwfFsxLTldXFxcXGQqJztcbnZhciBOVU1FUklDSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdID0gJ1swLTldKyc7XG5cblxuLy8gIyMgTm9uLW51bWVyaWMgSWRlbnRpZmllclxuLy8gWmVybyBvciBtb3JlIGRpZ2l0cywgZm9sbG93ZWQgYnkgYSBsZXR0ZXIgb3IgaHlwaGVuLCBhbmQgdGhlbiB6ZXJvIG9yXG4vLyBtb3JlIGxldHRlcnMsIGRpZ2l0cywgb3IgaHlwaGVucy5cblxudmFyIE5PTk5VTUVSSUNJREVOVElGSUVSID0gUisrO1xuc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSA9ICdcXFxcZCpbYS16QS1aLV1bYS16QS1aMC05LV0qJztcblxuXG4vLyAjIyBNYWluIFZlcnNpb25cbi8vIFRocmVlIGRvdC1zZXBhcmF0ZWQgbnVtZXJpYyBpZGVudGlmaWVycy5cblxudmFyIE1BSU5WRVJTSU9OID0gUisrO1xuc3JjW01BSU5WRVJTSU9OXSA9ICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG52YXIgTUFJTlZFUlNJT05MT09TRSA9IFIrKztcbnNyY1tNQUlOVkVSU0lPTkxPT1NFXSA9ICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpJztcblxuLy8gIyMgUHJlLXJlbGVhc2UgVmVyc2lvbiBJZGVudGlmaWVyXG4vLyBBIG51bWVyaWMgaWRlbnRpZmllciwgb3IgYSBub24tbnVtZXJpYyBpZGVudGlmaWVyLlxuXG52YXIgUFJFUkVMRUFTRUlERU5USUZJRVIgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUlERU5USUZJRVJdID0gJyg/OicgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfCcgKyBzcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG52YXIgUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSA9ICcoPzonICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd8JyArIHNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cblxuLy8gIyMgUHJlLXJlbGVhc2UgVmVyc2lvblxuLy8gSHlwaGVuLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBkb3Qtc2VwYXJhdGVkIHByZS1yZWxlYXNlIHZlcnNpb25cbi8vIGlkZW50aWZpZXJzLlxuXG52YXIgUFJFUkVMRUFTRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFXSA9ICcoPzotKCcgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJdICtcbiAgICAgICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJdICsgJykqKSknO1xuXG52YXIgUFJFUkVMRUFTRUxPT1NFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VMT09TRV0gPSAnKD86LT8oJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSArXG4gICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gKyAnKSopKSc7XG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhIElkZW50aWZpZXJcbi8vIEFueSBjb21iaW5hdGlvbiBvZiBkaWdpdHMsIGxldHRlcnMsIG9yIGh5cGhlbnMuXG5cbnZhciBCVUlMRElERU5USUZJRVIgPSBSKys7XG5zcmNbQlVJTERJREVOVElGSUVSXSA9ICdbMC05QS1aYS16LV0rJztcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGFcbi8vIFBsdXMgc2lnbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgcGVyaW9kLXNlcGFyYXRlZCBidWlsZCBtZXRhZGF0YVxuLy8gaWRlbnRpZmllcnMuXG5cbnZhciBCVUlMRCA9IFIrKztcbnNyY1tCVUlMRF0gPSAnKD86XFxcXCsoJyArIHNyY1tCVUlMRElERU5USUZJRVJdICtcbiAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW0JVSUxESURFTlRJRklFUl0gKyAnKSopKSc7XG5cblxuLy8gIyMgRnVsbCBWZXJzaW9uIFN0cmluZ1xuLy8gQSBtYWluIHZlcnNpb24sIGZvbGxvd2VkIG9wdGlvbmFsbHkgYnkgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uIGFuZFxuLy8gYnVpbGQgbWV0YWRhdGEuXG5cbi8vIE5vdGUgdGhhdCB0aGUgb25seSBtYWpvciwgbWlub3IsIHBhdGNoLCBhbmQgcHJlLXJlbGVhc2Ugc2VjdGlvbnMgb2Zcbi8vIHRoZSB2ZXJzaW9uIHN0cmluZyBhcmUgY2FwdHVyaW5nIGdyb3Vwcy4gIFRoZSBidWlsZCBtZXRhZGF0YSBpcyBub3QgYVxuLy8gY2FwdHVyaW5nIGdyb3VwLCBiZWNhdXNlIGl0IHNob3VsZCBub3QgZXZlciBiZSB1c2VkIGluIHZlcnNpb25cbi8vIGNvbXBhcmlzb24uXG5cbnZhciBGVUxMID0gUisrO1xudmFyIEZVTExQTEFJTiA9ICd2PycgKyBzcmNbTUFJTlZFUlNJT05dICtcbiAgICAgICAgICAgICAgICBzcmNbUFJFUkVMRUFTRV0gKyAnPycgK1xuICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPyc7XG5cbnNyY1tGVUxMXSA9ICdeJyArIEZVTExQTEFJTiArICckJztcblxuLy8gbGlrZSBmdWxsLCBidXQgYWxsb3dzIHYxLjIuMyBhbmQgPTEuMi4zLCB3aGljaCBwZW9wbGUgZG8gc29tZXRpbWVzLlxuLy8gYWxzbywgMS4wLjBhbHBoYTEgKHByZXJlbGVhc2Ugd2l0aG91dCB0aGUgaHlwaGVuKSB3aGljaCBpcyBwcmV0dHlcbi8vIGNvbW1vbiBpbiB0aGUgbnBtIHJlZ2lzdHJ5LlxudmFyIExPT1NFUExBSU4gPSAnW3Y9XFxcXHNdKicgKyBzcmNbTUFJTlZFUlNJT05MT09TRV0gK1xuICAgICAgICAgICAgICAgICBzcmNbUFJFUkVMRUFTRUxPT1NFXSArICc/JyArXG4gICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPyc7XG5cbnZhciBMT09TRSA9IFIrKztcbnNyY1tMT09TRV0gPSAnXicgKyBMT09TRVBMQUlOICsgJyQnO1xuXG52YXIgR1RMVCA9IFIrKztcbnNyY1tHVExUXSA9ICcoKD86PHw+KT89PyknO1xuXG4vLyBTb21ldGhpbmcgbGlrZSBcIjIuKlwiIG9yIFwiMS4yLnhcIi5cbi8vIE5vdGUgdGhhdCBcIngueFwiIGlzIGEgdmFsaWQgeFJhbmdlIGlkZW50aWZlciwgbWVhbmluZyBcImFueSB2ZXJzaW9uXCJcbi8vIE9ubHkgdGhlIGZpcnN0IGl0ZW0gaXMgc3RyaWN0bHkgcmVxdWlyZWQuXG52YXIgWFJBTkdFSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gPSBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnfHh8WHxcXFxcKic7XG52YXIgWFJBTkdFSURFTlRJRklFUiA9IFIrKztcbnNyY1tYUkFOR0VJREVOVElGSUVSXSA9IHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnfHh8WHxcXFxcKic7XG5cbnZhciBYUkFOR0VQTEFJTiA9IFIrKztcbnNyY1tYUkFOR0VQTEFJTl0gPSAnW3Y9XFxcXHNdKignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzonICsgc3JjW1BSRVJFTEVBU0VdICsgJyk/JyArXG4gICAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JyArXG4gICAgICAgICAgICAgICAgICAgJyk/KT8nO1xuXG52YXIgWFJBTkdFUExBSU5MT09TRSA9IFIrKztcbnNyY1tYUkFOR0VQTEFJTkxPT1NFXSA9ICdbdj1cXFxcc10qKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OicgKyBzcmNbUFJFUkVMRUFTRUxPT1NFXSArICcpPycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKT8pPyc7XG5cbnZhciBYUkFOR0UgPSBSKys7XG5zcmNbWFJBTkdFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyonICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBYUkFOR0VMT09TRSA9IFIrKztcbnNyY1tYUkFOR0VMT09TRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gVGlsZGUgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcInJlYXNvbmFibHkgYXQgb3IgZ3JlYXRlciB0aGFuXCJcbnZhciBMT05FVElMREUgPSBSKys7XG5zcmNbTE9ORVRJTERFXSA9ICcoPzp+Pj8pJztcblxudmFyIFRJTERFVFJJTSA9IFIrKztcbnNyY1tUSUxERVRSSU1dID0gJyhcXFxccyopJyArIHNyY1tMT05FVElMREVdICsgJ1xcXFxzKyc7XG5yZVtUSUxERVRSSU1dID0gbmV3IFJlZ0V4cChzcmNbVElMREVUUklNXSwgJ2cnKTtcbnZhciB0aWxkZVRyaW1SZXBsYWNlID0gJyQxfic7XG5cbnZhciBUSUxERSA9IFIrKztcbnNyY1tUSUxERV0gPSAnXicgKyBzcmNbTE9ORVRJTERFXSArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgVElMREVMT09TRSA9IFIrKztcbnNyY1tUSUxERUxPT1NFXSA9ICdeJyArIHNyY1tMT05FVElMREVdICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBDYXJldCByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwiYXQgbGVhc3QgYW5kIGJhY2t3YXJkcyBjb21wYXRpYmxlIHdpdGhcIlxudmFyIExPTkVDQVJFVCA9IFIrKztcbnNyY1tMT05FQ0FSRVRdID0gJyg/OlxcXFxeKSc7XG5cbnZhciBDQVJFVFRSSU0gPSBSKys7XG5zcmNbQ0FSRVRUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbTE9ORUNBUkVUXSArICdcXFxccysnO1xucmVbQ0FSRVRUUklNXSA9IG5ldyBSZWdFeHAoc3JjW0NBUkVUVFJJTV0sICdnJyk7XG52YXIgY2FyZXRUcmltUmVwbGFjZSA9ICckMV4nO1xuXG52YXIgQ0FSRVQgPSBSKys7XG5zcmNbQ0FSRVRdID0gJ14nICsgc3JjW0xPTkVDQVJFVF0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIENBUkVUTE9PU0UgPSBSKys7XG5zcmNbQ0FSRVRMT09TRV0gPSAnXicgKyBzcmNbTE9ORUNBUkVUXSArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gQSBzaW1wbGUgZ3QvbHQvZXEgdGhpbmcsIG9yIGp1c3QgXCJcIiB0byBpbmRpY2F0ZSBcImFueSB2ZXJzaW9uXCJcbnZhciBDT01QQVJBVE9STE9PU0UgPSBSKys7XG5zcmNbQ09NUEFSQVRPUkxPT1NFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyooJyArIExPT1NFUExBSU4gKyAnKSR8XiQnO1xudmFyIENPTVBBUkFUT1IgPSBSKys7XG5zcmNbQ09NUEFSQVRPUl0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqKCcgKyBGVUxMUExBSU4gKyAnKSR8XiQnO1xuXG5cbi8vIEFuIGV4cHJlc3Npb24gdG8gc3RyaXAgYW55IHdoaXRlc3BhY2UgYmV0d2VlbiB0aGUgZ3RsdCBhbmQgdGhlIHRoaW5nXG4vLyBpdCBtb2RpZmllcywgc28gdGhhdCBgPiAxLjIuM2AgPT0+IGA+MS4yLjNgXG52YXIgQ09NUEFSQVRPUlRSSU0gPSBSKys7XG5zcmNbQ09NUEFSQVRPUlRSSU1dID0gJyhcXFxccyopJyArIHNyY1tHVExUXSArXG4gICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKignICsgTE9PU0VQTEFJTiArICd8JyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKSc7XG5cbi8vIHRoaXMgb25lIGhhcyB0byB1c2UgdGhlIC9nIGZsYWdcbnJlW0NPTVBBUkFUT1JUUklNXSA9IG5ldyBSZWdFeHAoc3JjW0NPTVBBUkFUT1JUUklNXSwgJ2cnKTtcbnZhciBjb21wYXJhdG9yVHJpbVJlcGxhY2UgPSAnJDEkMiQzJztcblxuXG4vLyBTb21ldGhpbmcgbGlrZSBgMS4yLjMgLSAxLjIuNGBcbi8vIE5vdGUgdGhhdCB0aGVzZSBhbGwgdXNlIHRoZSBsb29zZSBmb3JtLCBiZWNhdXNlIHRoZXknbGwgYmVcbi8vIGNoZWNrZWQgYWdhaW5zdCBlaXRoZXIgdGhlIHN0cmljdCBvciBsb29zZSBjb21wYXJhdG9yIGZvcm1cbi8vIGxhdGVyLlxudmFyIEhZUEhFTlJBTkdFID0gUisrO1xuc3JjW0hZUEhFTlJBTkdFXSA9ICdeXFxcXHMqKCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnXFxcXHMrLVxcXFxzKycgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICdcXFxccyokJztcblxudmFyIEhZUEhFTlJBTkdFTE9PU0UgPSBSKys7XG5zcmNbSFlQSEVOUkFOR0VMT09TRV0gPSAnXlxcXFxzKignICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxccystXFxcXHMrJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKiQnO1xuXG4vLyBTdGFyIHJhbmdlcyBiYXNpY2FsbHkganVzdCBhbGxvdyBhbnl0aGluZyBhdCBhbGwuXG52YXIgU1RBUiA9IFIrKztcbnNyY1tTVEFSXSA9ICcoPHw+KT89P1xcXFxzKlxcXFwqJztcblxuLy8gQ29tcGlsZSB0byBhY3R1YWwgcmVnZXhwIG9iamVjdHMuXG4vLyBBbGwgYXJlIGZsYWctZnJlZSwgdW5sZXNzIHRoZXkgd2VyZSBjcmVhdGVkIGFib3ZlIHdpdGggYSBmbGFnLlxuZm9yICh2YXIgaSA9IDA7IGkgPCBSOyBpKyspIHtcbiAgZGVidWcoaSwgc3JjW2ldKTtcbiAgaWYgKCFyZVtpXSlcbiAgICByZVtpXSA9IG5ldyBSZWdFeHAoc3JjW2ldKTtcbn1cblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuZnVuY3Rpb24gcGFyc2UodmVyc2lvbiwgbG9vc2UpIHtcbiAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpXG4gICAgcmV0dXJuIHZlcnNpb247XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJylcbiAgICByZXR1cm4gbnVsbDtcblxuICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHZhciByID0gbG9vc2UgPyByZVtMT09TRV0gOiByZVtGVUxMXTtcbiAgaWYgKCFyLnRlc3QodmVyc2lvbikpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy52YWxpZCA9IHZhbGlkO1xuZnVuY3Rpb24gdmFsaWQodmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHYgPSBwYXJzZSh2ZXJzaW9uLCBsb29zZSk7XG4gIHJldHVybiB2ID8gdi52ZXJzaW9uIDogbnVsbDtcbn1cblxuXG5leHBvcnRzLmNsZWFuID0gY2xlYW47XG5mdW5jdGlvbiBjbGVhbih2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgcyA9IHBhcnNlKHZlcnNpb24udHJpbSgpLnJlcGxhY2UoL15bPXZdKy8sICcnKSwgbG9vc2UpO1xuICByZXR1cm4gcyA/IHMudmVyc2lvbiA6IG51bGw7XG59XG5cbmV4cG9ydHMuU2VtVmVyID0gU2VtVmVyO1xuXG5mdW5jdGlvbiBTZW1WZXIodmVyc2lvbiwgbG9vc2UpIHtcbiAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpIHtcbiAgICBpZiAodmVyc2lvbi5sb29zZSA9PT0gbG9vc2UpXG4gICAgICByZXR1cm4gdmVyc2lvbjtcbiAgICBlbHNlXG4gICAgICB2ZXJzaW9uID0gdmVyc2lvbi52ZXJzaW9uO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgVmVyc2lvbjogJyArIHZlcnNpb24pO1xuICB9XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2ZXJzaW9uIGlzIGxvbmdlciB0aGFuICcgKyBNQVhfTEVOR1RIICsgJyBjaGFyYWN0ZXJzJylcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG5cbiAgZGVidWcoJ1NlbVZlcicsIHZlcnNpb24sIGxvb3NlKTtcbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuICB2YXIgbSA9IHZlcnNpb24udHJpbSgpLm1hdGNoKGxvb3NlID8gcmVbTE9PU0VdIDogcmVbRlVMTF0pO1xuXG4gIGlmICghbSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFZlcnNpb246ICcgKyB2ZXJzaW9uKTtcblxuICB0aGlzLnJhdyA9IHZlcnNpb247XG5cbiAgLy8gdGhlc2UgYXJlIGFjdHVhbGx5IG51bWJlcnNcbiAgdGhpcy5tYWpvciA9ICttWzFdO1xuICB0aGlzLm1pbm9yID0gK21bMl07XG4gIHRoaXMucGF0Y2ggPSArbVszXTtcblxuICBpZiAodGhpcy5tYWpvciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5tYWpvciA8IDApXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtYWpvciB2ZXJzaW9uJylcblxuICBpZiAodGhpcy5taW5vciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5taW5vciA8IDApXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtaW5vciB2ZXJzaW9uJylcblxuICBpZiAodGhpcy5wYXRjaCA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5wYXRjaCA8IDApXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBwYXRjaCB2ZXJzaW9uJylcblxuICAvLyBudW1iZXJpZnkgYW55IHByZXJlbGVhc2UgbnVtZXJpYyBpZHNcbiAgaWYgKCFtWzRdKVxuICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICBlbHNlXG4gICAgdGhpcy5wcmVyZWxlYXNlID0gbVs0XS5zcGxpdCgnLicpLm1hcChmdW5jdGlvbihpZCkge1xuICAgICAgaWYgKC9eWzAtOV0rJC8udGVzdChpZCkpIHtcbiAgICAgICAgdmFyIG51bSA9ICtpZDtcbiAgICAgICAgaWYgKG51bSA+PSAwICYmIG51bSA8IE1BWF9TQUZFX0lOVEVHRVIpXG4gICAgICAgICAgcmV0dXJuIG51bTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpZDtcbiAgICB9KTtcblxuICB0aGlzLmJ1aWxkID0gbVs1XSA/IG1bNV0uc3BsaXQoJy4nKSA6IFtdO1xuICB0aGlzLmZvcm1hdCgpO1xufVxuXG5TZW1WZXIucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnZlcnNpb24gPSB0aGlzLm1ham9yICsgJy4nICsgdGhpcy5taW5vciArICcuJyArIHRoaXMucGF0Y2g7XG4gIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHRoaXMudmVyc2lvbiArPSAnLScgKyB0aGlzLnByZXJlbGVhc2Uuam9pbignLicpO1xuICByZXR1cm4gdGhpcy52ZXJzaW9uO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy52ZXJzaW9uO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgZGVidWcoJ1NlbVZlci5jb21wYXJlJywgdGhpcy52ZXJzaW9uLCB0aGlzLmxvb3NlLCBvdGhlcik7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiB0aGlzLmNvbXBhcmVNYWluKG90aGVyKSB8fCB0aGlzLmNvbXBhcmVQcmUob3RoZXIpO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlTWFpbiA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnModGhpcy5tYWpvciwgb3RoZXIubWFqb3IpIHx8XG4gICAgICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5taW5vciwgb3RoZXIubWlub3IpIHx8XG4gICAgICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5wYXRjaCwgb3RoZXIucGF0Y2gpO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlUHJlID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgLy8gTk9UIGhhdmluZyBhIHByZXJlbGVhc2UgaXMgPiBoYXZpbmcgb25lXG4gIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gLTE7XG4gIGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmIG90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAxO1xuICBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIDA7XG5cbiAgdmFyIGkgPSAwO1xuICBkbyB7XG4gICAgdmFyIGEgPSB0aGlzLnByZXJlbGVhc2VbaV07XG4gICAgdmFyIGIgPSBvdGhlci5wcmVyZWxlYXNlW2ldO1xuICAgIGRlYnVnKCdwcmVyZWxlYXNlIGNvbXBhcmUnLCBpLCBhLCBiKTtcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkICYmIGIgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAwO1xuICAgIGVsc2UgaWYgKGIgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKGEgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAtMTtcbiAgICBlbHNlIGlmIChhID09PSBiKVxuICAgICAgY29udGludWU7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhhLCBiKTtcbiAgfSB3aGlsZSAoKytpKTtcbn07XG5cbi8vIHByZW1pbm9yIHdpbGwgYnVtcCB0aGUgdmVyc2lvbiB1cCB0byB0aGUgbmV4dCBtaW5vciByZWxlYXNlLCBhbmQgaW1tZWRpYXRlbHlcbi8vIGRvd24gdG8gcHJlLXJlbGVhc2UuIHByZW1ham9yIGFuZCBwcmVwYXRjaCB3b3JrIHRoZSBzYW1lIHdheS5cblNlbVZlci5wcm90b3R5cGUuaW5jID0gZnVuY3Rpb24ocmVsZWFzZSwgaWRlbnRpZmllcikge1xuICBzd2l0Y2ggKHJlbGVhc2UpIHtcbiAgICBjYXNlICdwcmVtYWpvcic6XG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5taW5vciA9IDA7XG4gICAgICB0aGlzLm1ham9yKys7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVtaW5vcic6XG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5taW5vcisrO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJlcGF0Y2gnOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhbHJlYWR5IGEgcHJlcmVsZWFzZSwgaXQgd2lsbCBidW1wIHRvIHRoZSBuZXh0IHZlcnNpb25cbiAgICAgIC8vIGRyb3AgYW55IHByZXJlbGVhc2VzIHRoYXQgbWlnaHQgYWxyZWFkeSBleGlzdCwgc2luY2UgdGhleSBhcmUgbm90XG4gICAgICAvLyByZWxldmFudCBhdCB0aGlzIHBvaW50LlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKTtcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIElmIHRoZSBpbnB1dCBpcyBhIG5vbi1wcmVyZWxlYXNlIHZlcnNpb24sIHRoaXMgYWN0cyB0aGUgc2FtZSBhc1xuICAgIC8vIHByZXBhdGNoLlxuICAgIGNhc2UgJ3ByZXJlbGVhc2UnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdtYWpvcic6XG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1ham9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWFqb3IgdmVyc2lvbi5cbiAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWFqb3IuXG4gICAgICAvLyAxLjAuMC01IGJ1bXBzIHRvIDEuMC4wXG4gICAgICAvLyAxLjEuMCBidW1wcyB0byAyLjAuMFxuICAgICAgaWYgKHRoaXMubWlub3IgIT09IDAgfHwgdGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLm1ham9yKys7XG4gICAgICB0aGlzLm1pbm9yID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaW5vcic6XG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1pbm9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWlub3IgdmVyc2lvbi5cbiAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWlub3IuXG4gICAgICAvLyAxLjIuMC01IGJ1bXBzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMSBidW1wcyB0byAxLjMuMFxuICAgICAgaWYgKHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5taW5vcisrO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3BhdGNoJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgbm90IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiwgaXQgd2lsbCBpbmNyZW1lbnQgdGhlIHBhdGNoLlxuICAgICAgLy8gSWYgaXQgaXMgYSBwcmUtcmVsZWFzZSBpdCB3aWxsIGJ1bXAgdXAgdG8gdGhlIHNhbWUgcGF0Y2ggdmVyc2lvbi5cbiAgICAgIC8vIDEuMi4wLTUgcGF0Y2hlcyB0byAxLjIuMFxuICAgICAgLy8gMS4yLjAgcGF0Y2hlcyB0byAxLjIuMVxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMucGF0Y2grKztcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgLy8gVGhpcyBwcm9iYWJseSBzaG91bGRuJ3QgYmUgdXNlZCBwdWJsaWNseS5cbiAgICAvLyAxLjAuMCBcInByZVwiIHdvdWxkIGJlY29tZSAxLjAuMC0wIHdoaWNoIGlzIHRoZSB3cm9uZyBkaXJlY3Rpb24uXG4gICAgY2FzZSAncHJlJzpcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbMF07XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnByZXJlbGVhc2UubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJlcmVsZWFzZVtpXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZVtpXSsrO1xuICAgICAgICAgICAgaSA9IC0yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gLTEpIC8vIGRpZG4ndCBpbmNyZW1lbnQgYW55dGhpbmdcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UucHVzaCgwKTtcbiAgICAgIH1cbiAgICAgIGlmIChpZGVudGlmaWVyKSB7XG4gICAgICAgIC8vIDEuMi4wLWJldGEuMSBidW1wcyB0byAxLjIuMC1iZXRhLjIsXG4gICAgICAgIC8vIDEuMi4wLWJldGEuZm9vYmx6IG9yIDEuMi4wLWJldGEgYnVtcHMgdG8gMS4yLjAtYmV0YS4wXG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2VbMF0gPT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgICBpZiAoaXNOYU4odGhpcy5wcmVyZWxlYXNlWzFdKSlcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGluY3JlbWVudCBhcmd1bWVudDogJyArIHJlbGVhc2UpO1xuICB9XG4gIHRoaXMuZm9ybWF0KCk7XG4gIHRoaXMucmF3ID0gdGhpcy52ZXJzaW9uO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmV4cG9ydHMuaW5jID0gaW5jO1xuZnVuY3Rpb24gaW5jKHZlcnNpb24sIHJlbGVhc2UsIGxvb3NlLCBpZGVudGlmaWVyKSB7XG4gIGlmICh0eXBlb2YobG9vc2UpID09PSAnc3RyaW5nJykge1xuICAgIGlkZW50aWZpZXIgPSBsb29zZTtcbiAgICBsb29zZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpLmluYyhyZWxlYXNlLCBpZGVudGlmaWVyKS52ZXJzaW9uO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMuZGlmZiA9IGRpZmY7XG5mdW5jdGlvbiBkaWZmKHZlcnNpb24xLCB2ZXJzaW9uMikge1xuICBpZiAoZXEodmVyc2lvbjEsIHZlcnNpb24yKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHZhciB2MSA9IHBhcnNlKHZlcnNpb24xKTtcbiAgICB2YXIgdjIgPSBwYXJzZSh2ZXJzaW9uMik7XG4gICAgaWYgKHYxLnByZXJlbGVhc2UubGVuZ3RoIHx8IHYyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdjEpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgICAgaWYgKHYxW2tleV0gIT09IHYyW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiAncHJlJytrZXk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJ3ByZXJlbGVhc2UnO1xuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gdjEpIHtcbiAgICAgIGlmIChrZXkgPT09ICdtYWpvcicgfHwga2V5ID09PSAnbWlub3InIHx8IGtleSA9PT0gJ3BhdGNoJykge1xuICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5jb21wYXJlSWRlbnRpZmllcnMgPSBjb21wYXJlSWRlbnRpZmllcnM7XG5cbnZhciBudW1lcmljID0gL15bMC05XSskLztcbmZ1bmN0aW9uIGNvbXBhcmVJZGVudGlmaWVycyhhLCBiKSB7XG4gIHZhciBhbnVtID0gbnVtZXJpYy50ZXN0KGEpO1xuICB2YXIgYm51bSA9IG51bWVyaWMudGVzdChiKTtcblxuICBpZiAoYW51bSAmJiBibnVtKSB7XG4gICAgYSA9ICthO1xuICAgIGIgPSArYjtcbiAgfVxuXG4gIHJldHVybiAoYW51bSAmJiAhYm51bSkgPyAtMSA6XG4gICAgICAgICAoYm51bSAmJiAhYW51bSkgPyAxIDpcbiAgICAgICAgIGEgPCBiID8gLTEgOlxuICAgICAgICAgYSA+IGIgPyAxIDpcbiAgICAgICAgIDA7XG59XG5cbmV4cG9ydHMucmNvbXBhcmVJZGVudGlmaWVycyA9IHJjb21wYXJlSWRlbnRpZmllcnM7XG5mdW5jdGlvbiByY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpIHtcbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhiLCBhKTtcbn1cblxuZXhwb3J0cy5tYWpvciA9IG1ham9yO1xuZnVuY3Rpb24gbWFqb3IoYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1ham9yO1xufVxuXG5leHBvcnRzLm1pbm9yID0gbWlub3I7XG5mdW5jdGlvbiBtaW5vcihhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWlub3I7XG59XG5cbmV4cG9ydHMucGF0Y2ggPSBwYXRjaDtcbmZ1bmN0aW9uIHBhdGNoKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5wYXRjaDtcbn1cblxuZXhwb3J0cy5jb21wYXJlID0gY29tcGFyZTtcbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLmNvbXBhcmUoYik7XG59XG5cbmV4cG9ydHMuY29tcGFyZUxvb3NlID0gY29tcGFyZUxvb3NlO1xuZnVuY3Rpb24gY29tcGFyZUxvb3NlKGEsIGIpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgdHJ1ZSk7XG59XG5cbmV4cG9ydHMucmNvbXBhcmUgPSByY29tcGFyZTtcbmZ1bmN0aW9uIHJjb21wYXJlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGIsIGEsIGxvb3NlKTtcbn1cblxuZXhwb3J0cy5zb3J0ID0gc29ydDtcbmZ1bmN0aW9uIHNvcnQobGlzdCwgbG9vc2UpIHtcbiAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pO1xufVxuXG5leHBvcnRzLnJzb3J0ID0gcnNvcnQ7XG5mdW5jdGlvbiByc29ydChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5yY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pO1xufVxuXG5leHBvcnRzLmd0ID0gZ3Q7XG5mdW5jdGlvbiBndChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPiAwO1xufVxuXG5leHBvcnRzLmx0ID0gbHQ7XG5mdW5jdGlvbiBsdChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPCAwO1xufVxuXG5leHBvcnRzLmVxID0gZXE7XG5mdW5jdGlvbiBlcShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPT09IDA7XG59XG5cbmV4cG9ydHMubmVxID0gbmVxO1xuZnVuY3Rpb24gbmVxKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSAhPT0gMDtcbn1cblxuZXhwb3J0cy5ndGUgPSBndGU7XG5mdW5jdGlvbiBndGUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID49IDA7XG59XG5cbmV4cG9ydHMubHRlID0gbHRlO1xuZnVuY3Rpb24gbHRlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8PSAwO1xufVxuXG5leHBvcnRzLmNtcCA9IGNtcDtcbmZ1bmN0aW9uIGNtcChhLCBvcCwgYiwgbG9vc2UpIHtcbiAgdmFyIHJldDtcbiAgc3dpdGNoIChvcCkge1xuICAgIGNhc2UgJz09PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSBhID0gYS52ZXJzaW9uO1xuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JykgYiA9IGIudmVyc2lvbjtcbiAgICAgIHJldCA9IGEgPT09IGI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICchPT0nOlxuICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0JykgYSA9IGEudmVyc2lvbjtcbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIGIgPSBiLnZlcnNpb247XG4gICAgICByZXQgPSBhICE9PSBiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnJzogY2FzZSAnPSc6IGNhc2UgJz09JzogcmV0ID0gZXEoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICchPSc6IHJldCA9IG5lcShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJz4nOiByZXQgPSBndChhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJz49JzogcmV0ID0gZ3RlKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPCc6IHJldCA9IGx0KGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPD0nOiByZXQgPSBsdGUoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBkZWZhdWx0OiB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG9wZXJhdG9yOiAnICsgb3ApO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydHMuQ29tcGFyYXRvciA9IENvbXBhcmF0b3I7XG5mdW5jdGlvbiBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKSB7XG4gIGlmIChjb21wIGluc3RhbmNlb2YgQ29tcGFyYXRvcikge1xuICAgIGlmIChjb21wLmxvb3NlID09PSBsb29zZSlcbiAgICAgIHJldHVybiBjb21wO1xuICAgIGVsc2VcbiAgICAgIGNvbXAgPSBjb21wLnZhbHVlO1xuICB9XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENvbXBhcmF0b3IpKVxuICAgIHJldHVybiBuZXcgQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG5cbiAgZGVidWcoJ2NvbXBhcmF0b3InLCBjb21wLCBsb29zZSk7XG4gIHRoaXMubG9vc2UgPSBsb29zZTtcbiAgdGhpcy5wYXJzZShjb21wKTtcblxuICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSlcbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gIGVsc2VcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5vcGVyYXRvciArIHRoaXMuc2VtdmVyLnZlcnNpb247XG5cbiAgZGVidWcoJ2NvbXAnLCB0aGlzKTtcbn1cblxudmFyIEFOWSA9IHt9O1xuQ29tcGFyYXRvci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbihjb21wKSB7XG4gIHZhciByID0gdGhpcy5sb29zZSA/IHJlW0NPTVBBUkFUT1JMT09TRV0gOiByZVtDT01QQVJBVE9SXTtcbiAgdmFyIG0gPSBjb21wLm1hdGNoKHIpO1xuXG4gIGlmICghbSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNvbXBhcmF0b3I6ICcgKyBjb21wKTtcblxuICB0aGlzLm9wZXJhdG9yID0gbVsxXTtcbiAgaWYgKHRoaXMub3BlcmF0b3IgPT09ICc9JylcbiAgICB0aGlzLm9wZXJhdG9yID0gJyc7XG5cbiAgLy8gaWYgaXQgbGl0ZXJhbGx5IGlzIGp1c3QgJz4nIG9yICcnIHRoZW4gYWxsb3cgYW55dGhpbmcuXG4gIGlmICghbVsyXSlcbiAgICB0aGlzLnNlbXZlciA9IEFOWTtcbiAgZWxzZVxuICAgIHRoaXMuc2VtdmVyID0gbmV3IFNlbVZlcihtWzJdLCB0aGlzLmxvb3NlKTtcbn07XG5cbkNvbXBhcmF0b3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZhbHVlO1xufTtcblxuQ29tcGFyYXRvci5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgZGVidWcoJ0NvbXBhcmF0b3IudGVzdCcsIHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKVxuICAgIHJldHVybiB0cnVlO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpXG4gICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIGNtcCh2ZXJzaW9uLCB0aGlzLm9wZXJhdG9yLCB0aGlzLnNlbXZlciwgdGhpcy5sb29zZSk7XG59O1xuXG5cbmV4cG9ydHMuUmFuZ2UgPSBSYW5nZTtcbmZ1bmN0aW9uIFJhbmdlKHJhbmdlLCBsb29zZSkge1xuICBpZiAoKHJhbmdlIGluc3RhbmNlb2YgUmFuZ2UpICYmIHJhbmdlLmxvb3NlID09PSBsb29zZSlcbiAgICByZXR1cm4gcmFuZ2U7XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJhbmdlKSlcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG5cbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuXG4gIC8vIEZpcnN0LCBzcGxpdCBiYXNlZCBvbiBib29sZWFuIG9yIHx8XG4gIHRoaXMucmF3ID0gcmFuZ2U7XG4gIHRoaXMuc2V0ID0gcmFuZ2Uuc3BsaXQoL1xccypcXHxcXHxcXHMqLykubWFwKGZ1bmN0aW9uKHJhbmdlKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VSYW5nZShyYW5nZS50cmltKCkpO1xuICB9LCB0aGlzKS5maWx0ZXIoZnVuY3Rpb24oYykge1xuICAgIC8vIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHJlbGV2YW50IGZvciB3aGF0ZXZlciByZWFzb25cbiAgICByZXR1cm4gYy5sZW5ndGg7XG4gIH0pO1xuXG4gIGlmICghdGhpcy5zZXQubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBTZW1WZXIgUmFuZ2U6ICcgKyByYW5nZSk7XG4gIH1cblxuICB0aGlzLmZvcm1hdCgpO1xufVxuXG5SYW5nZS5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmFuZ2UgPSB0aGlzLnNldC5tYXAoZnVuY3Rpb24oY29tcHMpIHtcbiAgICByZXR1cm4gY29tcHMuam9pbignICcpLnRyaW0oKTtcbiAgfSkuam9pbignfHwnKS50cmltKCk7XG4gIHJldHVybiB0aGlzLnJhbmdlO1xufTtcblxuUmFuZ2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnJhbmdlO1xufTtcblxuUmFuZ2UucHJvdG90eXBlLnBhcnNlUmFuZ2UgPSBmdW5jdGlvbihyYW5nZSkge1xuICB2YXIgbG9vc2UgPSB0aGlzLmxvb3NlO1xuICByYW5nZSA9IHJhbmdlLnRyaW0oKTtcbiAgZGVidWcoJ3JhbmdlJywgcmFuZ2UsIGxvb3NlKTtcbiAgLy8gYDEuMi4zIC0gMS4yLjRgID0+IGA+PTEuMi4zIDw9MS4yLjRgXG4gIHZhciBociA9IGxvb3NlID8gcmVbSFlQSEVOUkFOR0VMT09TRV0gOiByZVtIWVBIRU5SQU5HRV07XG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShociwgaHlwaGVuUmVwbGFjZSk7XG4gIGRlYnVnKCdoeXBoZW4gcmVwbGFjZScsIHJhbmdlKTtcbiAgLy8gYD4gMS4yLjMgPCAxLjIuNWAgPT4gYD4xLjIuMyA8MS4yLjVgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtDT01QQVJBVE9SVFJJTV0sIGNvbXBhcmF0b3JUcmltUmVwbGFjZSk7XG4gIGRlYnVnKCdjb21wYXJhdG9yIHRyaW0nLCByYW5nZSwgcmVbQ09NUEFSQVRPUlRSSU1dKTtcblxuICAvLyBgfiAxLjIuM2AgPT4gYH4xLjIuM2BcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW1RJTERFVFJJTV0sIHRpbGRlVHJpbVJlcGxhY2UpO1xuXG4gIC8vIGBeIDEuMi4zYCA9PiBgXjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbQ0FSRVRUUklNXSwgY2FyZXRUcmltUmVwbGFjZSk7XG5cbiAgLy8gbm9ybWFsaXplIHNwYWNlc1xuICByYW5nZSA9IHJhbmdlLnNwbGl0KC9cXHMrLykuam9pbignICcpO1xuXG4gIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSByYW5nZSBpcyBjb21wbGV0ZWx5IHRyaW1tZWQgYW5kXG4gIC8vIHJlYWR5IHRvIGJlIHNwbGl0IGludG8gY29tcGFyYXRvcnMuXG5cbiAgdmFyIGNvbXBSZSA9IGxvb3NlID8gcmVbQ09NUEFSQVRPUkxPT1NFXSA6IHJlW0NPTVBBUkFUT1JdO1xuICB2YXIgc2V0ID0gcmFuZ2Uuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBwYXJzZUNvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJykuc3BsaXQoL1xccysvKTtcbiAgaWYgKHRoaXMubG9vc2UpIHtcbiAgICAvLyBpbiBsb29zZSBtb2RlLCB0aHJvdyBvdXQgYW55IHRoYXQgYXJlIG5vdCB2YWxpZCBjb21wYXJhdG9yc1xuICAgIHNldCA9IHNldC5maWx0ZXIoZnVuY3Rpb24oY29tcCkge1xuICAgICAgcmV0dXJuICEhY29tcC5tYXRjaChjb21wUmUpO1xuICAgIH0pO1xuICB9XG4gIHNldCA9IHNldC5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBuZXcgQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG4gIH0pO1xuXG4gIHJldHVybiBzZXQ7XG59O1xuXG4vLyBNb3N0bHkganVzdCBmb3IgdGVzdGluZyBhbmQgbGVnYWN5IEFQSSByZWFzb25zXG5leHBvcnRzLnRvQ29tcGFyYXRvcnMgPSB0b0NvbXBhcmF0b3JzO1xuZnVuY3Rpb24gdG9Db21wYXJhdG9ycyhyYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpLnNldC5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBjb21wLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICByZXR1cm4gYy52YWx1ZTtcbiAgICB9KS5qb2luKCcgJykudHJpbSgpLnNwbGl0KCcgJyk7XG4gIH0pO1xufVxuXG4vLyBjb21wcmlzZWQgb2YgeHJhbmdlcywgdGlsZGVzLCBzdGFycywgYW5kIGd0bHQncyBhdCB0aGlzIHBvaW50LlxuLy8gYWxyZWFkeSByZXBsYWNlZCB0aGUgaHlwaGVuIHJhbmdlc1xuLy8gdHVybiBpbnRvIGEgc2V0IG9mIEpVU1QgY29tcGFyYXRvcnMuXG5mdW5jdGlvbiBwYXJzZUNvbXBhcmF0b3IoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ2NvbXAnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VDYXJldHMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygnY2FyZXQnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VUaWxkZXMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygndGlsZGVzJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlWFJhbmdlcyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCd4cmFuZ2UnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VTdGFycyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCdzdGFycycsIGNvbXApO1xuICByZXR1cm4gY29tcDtcbn1cblxuZnVuY3Rpb24gaXNYKGlkKSB7XG4gIHJldHVybiAhaWQgfHwgaWQudG9Mb3dlckNhc2UoKSA9PT0gJ3gnIHx8IGlkID09PSAnKic7XG59XG5cbi8vIH4sIH4+IC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gfjIsIH4yLngsIH4yLngueCwgfj4yLCB+PjIueCB+PjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gfjIuMCwgfjIuMC54LCB+PjIuMCwgfj4yLjAueCAtLT4gPj0yLjAuMCA8Mi4xLjBcbi8vIH4xLjIsIH4xLjIueCwgfj4xLjIsIH4+MS4yLnggLS0+ID49MS4yLjAgPDEuMy4wXG4vLyB+MS4yLjMsIH4+MS4yLjMgLS0+ID49MS4yLjMgPDEuMy4wXG4vLyB+MS4yLjAsIH4+MS4yLjAgLS0+ID49MS4yLjAgPDEuMy4wXG5mdW5jdGlvbiByZXBsYWNlVGlsZGVzKGNvbXAsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VUaWxkZShjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVRpbGRlKGNvbXAsIGxvb3NlKSB7XG4gIHZhciByID0gbG9vc2UgPyByZVtUSUxERUxPT1NFXSA6IHJlW1RJTERFXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihfLCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCd0aWxkZScsIGNvbXAsIF8sIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgcmV0O1xuXG4gICAgaWYgKGlzWChNKSlcbiAgICAgIHJldCA9ICcnO1xuICAgIGVsc2UgaWYgKGlzWChtKSlcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICBlbHNlIGlmIChpc1gocCkpXG4gICAgICAvLyB+MS4yID09ID49MS4yLjAgPDEuMy4wXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZVRpbGRlIHByJywgcHIpO1xuICAgICAgaWYgKHByLmNoYXJBdCgwKSAhPT0gJy0nKVxuICAgICAgICBwciA9ICctJyArIHByO1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIH0gZWxzZVxuICAgICAgLy8gfjEuMi4zID09ID49MS4yLjMgPDEuMy4wXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuXG4gICAgZGVidWcoJ3RpbGRlIHJldHVybicsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbi8vIF4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyBeMiwgXjIueCwgXjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjIuMCwgXjIuMC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjEuMiwgXjEuMi54IC0tPiA+PTEuMi4wIDwyLjAuMFxuLy8gXjEuMi4zIC0tPiA+PTEuMi4zIDwyLjAuMFxuLy8gXjEuMi4wIC0tPiA+PTEuMi4wIDwyLjAuMFxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0cyhjb21wLCBsb29zZSkge1xuICByZXR1cm4gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlQ2FyZXQoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDYXJldChjb21wLCBsb29zZSkge1xuICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBsb29zZSk7XG4gIHZhciByID0gbG9vc2UgPyByZVtDQVJFVExPT1NFXSA6IHJlW0NBUkVUXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihfLCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCdjYXJldCcsIGNvbXAsIF8sIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgcmV0O1xuXG4gICAgaWYgKGlzWChNKSlcbiAgICAgIHJldCA9ICcnO1xuICAgIGVsc2UgaWYgKGlzWChtKSlcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICBlbHNlIGlmIChpc1gocCkpIHtcbiAgICAgIGlmIChNID09PSAnMCcpXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlQ2FyZXQgcHInLCBwcik7XG4gICAgICBpZiAocHIuY2hhckF0KDApICE9PSAnLScpXG4gICAgICAgIHByID0gJy0nICsgcHI7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArIG0gKyAnLicgKyAoK3AgKyAxKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgJyA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Zygnbm8gcHInKTtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJylcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArIG0gKyAnLicgKyAoK3AgKyAxKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAnIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfVxuXG4gICAgZGVidWcoJ2NhcmV0IHJldHVybicsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VYUmFuZ2VzKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdyZXBsYWNlWFJhbmdlcycsIGNvbXAsIGxvb3NlKTtcbiAgcmV0dXJuIGNvbXAuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlWFJhbmdlKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlWFJhbmdlKGNvbXAsIGxvb3NlKSB7XG4gIGNvbXAgPSBjb21wLnRyaW0oKTtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW1hSQU5HRUxPT1NFXSA6IHJlW1hSQU5HRV07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24ocmV0LCBndGx0LCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCd4UmFuZ2UnLCBjb21wLCByZXQsIGd0bHQsIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgeE0gPSBpc1goTSk7XG4gICAgdmFyIHhtID0geE0gfHwgaXNYKG0pO1xuICAgIHZhciB4cCA9IHhtIHx8IGlzWChwKTtcbiAgICB2YXIgYW55WCA9IHhwO1xuXG4gICAgaWYgKGd0bHQgPT09ICc9JyAmJiBhbnlYKVxuICAgICAgZ3RsdCA9ICcnO1xuXG4gICAgaWYgKHhNKSB7XG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nIHx8IGd0bHQgPT09ICc8Jykge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGFsbG93ZWRcbiAgICAgICAgcmV0ID0gJzwwLjAuMCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGZvcmJpZGRlblxuICAgICAgICByZXQgPSAnKic7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChndGx0ICYmIGFueVgpIHtcbiAgICAgIC8vIHJlcGxhY2UgWCB3aXRoIDBcbiAgICAgIGlmICh4bSlcbiAgICAgICAgbSA9IDA7XG4gICAgICBpZiAoeHApXG4gICAgICAgIHAgPSAwO1xuXG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nKSB7XG4gICAgICAgIC8vID4xID0+ID49Mi4wLjBcbiAgICAgICAgLy8gPjEuMiA9PiA+PTEuMy4wXG4gICAgICAgIC8vID4xLjIuMyA9PiA+PSAxLjIuNFxuICAgICAgICBndGx0ID0gJz49JztcbiAgICAgICAgaWYgKHhtKSB7XG4gICAgICAgICAgTSA9ICtNICsgMTtcbiAgICAgICAgICBtID0gMDtcbiAgICAgICAgICBwID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgICAgIG0gPSArbSArIDE7XG4gICAgICAgICAgcCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ3RsdCA9PT0gJzw9Jykge1xuICAgICAgICAvLyA8PTAuNy54IGlzIGFjdHVhbGx5IDwwLjguMCwgc2luY2UgYW55IDAuNy54IHNob3VsZFxuICAgICAgICAvLyBwYXNzLiAgU2ltaWxhcmx5LCA8PTcueCBpcyBhY3R1YWxseSA8OC4wLjAsIGV0Yy5cbiAgICAgICAgZ3RsdCA9ICc8JztcbiAgICAgICAgaWYgKHhtKVxuICAgICAgICAgIE0gPSArTSArIDE7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBtID0gK20gKyAxO1xuICAgICAgfVxuXG4gICAgICByZXQgPSBndGx0ICsgTSArICcuJyArIG0gKyAnLicgKyBwO1xuICAgIH0gZWxzZSBpZiAoeG0pIHtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIH1cblxuICAgIGRlYnVnKCd4UmFuZ2UgcmV0dXJuJywgcmV0KTtcblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG4vLyBCZWNhdXNlICogaXMgQU5ELWVkIHdpdGggZXZlcnl0aGluZyBlbHNlIGluIHRoZSBjb21wYXJhdG9yLFxuLy8gYW5kICcnIG1lYW5zIFwiYW55IHZlcnNpb25cIiwganVzdCByZW1vdmUgdGhlICpzIGVudGlyZWx5LlxuZnVuY3Rpb24gcmVwbGFjZVN0YXJzKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdyZXBsYWNlU3RhcnMnLCBjb21wLCBsb29zZSk7XG4gIC8vIExvb3NlbmVzcyBpcyBpZ25vcmVkIGhlcmUuICBzdGFyIGlzIGFsd2F5cyBhcyBsb29zZSBhcyBpdCBnZXRzIVxuICByZXR1cm4gY29tcC50cmltKCkucmVwbGFjZShyZVtTVEFSXSwgJycpO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCB0byBzdHJpbmcucmVwbGFjZShyZVtIWVBIRU5SQU5HRV0pXG4vLyBNLCBtLCBwYXRjaCwgcHJlcmVsZWFzZSwgYnVpbGRcbi8vIDEuMiAtIDMuNC41ID0+ID49MS4yLjAgPD0zLjQuNVxuLy8gMS4yLjMgLSAzLjQgPT4gPj0xLjIuMCA8My41LjAgQW55IDMuNC54IHdpbGwgZG9cbi8vIDEuMiAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMFxuZnVuY3Rpb24gaHlwaGVuUmVwbGFjZSgkMCxcbiAgICAgICAgICAgICAgICAgICAgICAgZnJvbSwgZk0sIGZtLCBmcCwgZnByLCBmYixcbiAgICAgICAgICAgICAgICAgICAgICAgdG8sIHRNLCB0bSwgdHAsIHRwciwgdGIpIHtcblxuICBpZiAoaXNYKGZNKSlcbiAgICBmcm9tID0gJyc7XG4gIGVsc2UgaWYgKGlzWChmbSkpXG4gICAgZnJvbSA9ICc+PScgKyBmTSArICcuMC4wJztcbiAgZWxzZSBpZiAoaXNYKGZwKSlcbiAgICBmcm9tID0gJz49JyArIGZNICsgJy4nICsgZm0gKyAnLjAnO1xuICBlbHNlXG4gICAgZnJvbSA9ICc+PScgKyBmcm9tO1xuXG4gIGlmIChpc1godE0pKVxuICAgIHRvID0gJyc7XG4gIGVsc2UgaWYgKGlzWCh0bSkpXG4gICAgdG8gPSAnPCcgKyAoK3RNICsgMSkgKyAnLjAuMCc7XG4gIGVsc2UgaWYgKGlzWCh0cCkpXG4gICAgdG8gPSAnPCcgKyB0TSArICcuJyArICgrdG0gKyAxKSArICcuMCc7XG4gIGVsc2UgaWYgKHRwcilcbiAgICB0byA9ICc8PScgKyB0TSArICcuJyArIHRtICsgJy4nICsgdHAgKyAnLScgKyB0cHI7XG4gIGVsc2VcbiAgICB0byA9ICc8PScgKyB0bztcblxuICByZXR1cm4gKGZyb20gKyAnICcgKyB0bykudHJpbSgpO1xufVxuXG5cbi8vIGlmIEFOWSBvZiB0aGUgc2V0cyBtYXRjaCBBTEwgb2YgaXRzIGNvbXBhcmF0b3JzLCB0aGVuIHBhc3NcblJhbmdlLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24odmVyc2lvbikge1xuICBpZiAoIXZlcnNpb24pXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpXG4gICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0ZXN0U2V0KHRoaXMuc2V0W2ldLCB2ZXJzaW9uKSlcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmZ1bmN0aW9uIHRlc3RTZXQoc2V0LCB2ZXJzaW9uKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFzZXRbaV0udGVzdCh2ZXJzaW9uKSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgLy8gRmluZCB0aGUgc2V0IG9mIHZlcnNpb25zIHRoYXQgYXJlIGFsbG93ZWQgdG8gaGF2ZSBwcmVyZWxlYXNlc1xuICAgIC8vIEZvciBleGFtcGxlLCBeMS4yLjMtcHIuMSBkZXN1Z2FycyB0byA+PTEuMi4zLXByLjEgPDIuMC4wXG4gICAgLy8gVGhhdCBzaG91bGQgYWxsb3cgYDEuMi4zLXByLjJgIHRvIHBhc3MuXG4gICAgLy8gSG93ZXZlciwgYDEuMi40LWFscGhhLm5vdHJlYWR5YCBzaG91bGQgTk9UIGJlIGFsbG93ZWQsXG4gICAgLy8gZXZlbiB0aG91Z2ggaXQncyB3aXRoaW4gdGhlIHJhbmdlIHNldCBieSB0aGUgY29tcGFyYXRvcnMuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYnVnKHNldFtpXS5zZW12ZXIpO1xuICAgICAgaWYgKHNldFtpXS5zZW12ZXIgPT09IEFOWSlcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgYWxsb3dlZCA9IHNldFtpXS5zZW12ZXI7XG4gICAgICAgIGlmIChhbGxvd2VkLm1ham9yID09PSB2ZXJzaW9uLm1ham9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLm1pbm9yID09PSB2ZXJzaW9uLm1pbm9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLnBhdGNoID09PSB2ZXJzaW9uLnBhdGNoKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFZlcnNpb24gaGFzIGEgLXByZSwgYnV0IGl0J3Mgbm90IG9uZSBvZiB0aGUgb25lcyB3ZSBsaWtlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnRzLnNhdGlzZmllcyA9IHNhdGlzZmllcztcbmZ1bmN0aW9uIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgdHJ5IHtcbiAgICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gcmFuZ2UudGVzdCh2ZXJzaW9uKTtcbn1cblxuZXhwb3J0cy5tYXhTYXRpc2Z5aW5nID0gbWF4U2F0aXNmeWluZztcbmZ1bmN0aW9uIG1heFNhdGlzZnlpbmcodmVyc2lvbnMsIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gdmVyc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiByY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pWzBdIHx8IG51bGw7XG59XG5cbmV4cG9ydHMubWluU2F0aXNmeWluZyA9IG1pblNhdGlzZnlpbmc7XG5mdW5jdGlvbiBtaW5TYXRpc2Z5aW5nKHZlcnNpb25zLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIHZlcnNpb25zLmZpbHRlcihmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpO1xuICB9KS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pWzBdIHx8IG51bGw7XG59XG5cbmV4cG9ydHMudmFsaWRSYW5nZSA9IHZhbGlkUmFuZ2U7XG5mdW5jdGlvbiB2YWxpZFJhbmdlKHJhbmdlLCBsb29zZSkge1xuICB0cnkge1xuICAgIC8vIFJldHVybiAnKicgaW5zdGVhZCBvZiAnJyBzbyB0aGF0IHRydXRoaW5lc3Mgd29ya3MuXG4gICAgLy8gVGhpcyB3aWxsIHRocm93IGlmIGl0J3MgaW52YWxpZCBhbnl3YXlcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSkucmFuZ2UgfHwgJyonO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGxlc3MgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZVxuZXhwb3J0cy5sdHIgPSBsdHI7XG5mdW5jdGlvbiBsdHIodmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPCcsIGxvb3NlKTtcbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlLlxuZXhwb3J0cy5ndHIgPSBndHI7XG5mdW5jdGlvbiBndHIodmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPicsIGxvb3NlKTtcbn1cblxuZXhwb3J0cy5vdXRzaWRlID0gb3V0c2lkZTtcbmZ1bmN0aW9uIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsIGhpbG8sIGxvb3NlKSB7XG4gIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcbiAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB2YXIgZ3RmbiwgbHRlZm4sIGx0Zm4sIGNvbXAsIGVjb21wO1xuICBzd2l0Y2ggKGhpbG8pIHtcbiAgICBjYXNlICc+JzpcbiAgICAgIGd0Zm4gPSBndDtcbiAgICAgIGx0ZWZuID0gbHRlO1xuICAgICAgbHRmbiA9IGx0O1xuICAgICAgY29tcCA9ICc+JztcbiAgICAgIGVjb21wID0gJz49JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJzwnOlxuICAgICAgZ3RmbiA9IGx0O1xuICAgICAgbHRlZm4gPSBndGU7XG4gICAgICBsdGZuID0gZ3Q7XG4gICAgICBjb21wID0gJzwnO1xuICAgICAgZWNvbXAgPSAnPD0nO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3QgcHJvdmlkZSBhIGhpbG8gdmFsIG9mIFwiPFwiIG9yIFwiPlwiJyk7XG4gIH1cblxuICAvLyBJZiBpdCBzYXRpc2lmZXMgdGhlIHJhbmdlIGl0IGlzIG5vdCBvdXRzaWRlXG4gIGlmIChzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEZyb20gbm93IG9uLCB2YXJpYWJsZSB0ZXJtcyBhcmUgYXMgaWYgd2UncmUgaW4gXCJndHJcIiBtb2RlLlxuICAvLyBidXQgbm90ZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgZmxpcHBlZCBmb3IgdGhlIFwibHRyXCIgZnVuY3Rpb24uXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByYW5nZS5zZXQubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgY29tcGFyYXRvcnMgPSByYW5nZS5zZXRbaV07XG5cbiAgICB2YXIgaGlnaCA9IG51bGw7XG4gICAgdmFyIGxvdyA9IG51bGw7XG5cbiAgICBjb21wYXJhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBhcmF0b3IpIHtcbiAgICAgIGlmIChjb21wYXJhdG9yLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgICAgIGNvbXBhcmF0b3IgPSBuZXcgQ29tcGFyYXRvcignPj0wLjAuMCcpXG4gICAgICB9XG4gICAgICBoaWdoID0gaGlnaCB8fCBjb21wYXJhdG9yO1xuICAgICAgbG93ID0gbG93IHx8IGNvbXBhcmF0b3I7XG4gICAgICBpZiAoZ3Rmbihjb21wYXJhdG9yLnNlbXZlciwgaGlnaC5zZW12ZXIsIGxvb3NlKSkge1xuICAgICAgICBoaWdoID0gY29tcGFyYXRvcjtcbiAgICAgIH0gZWxzZSBpZiAobHRmbihjb21wYXJhdG9yLnNlbXZlciwgbG93LnNlbXZlciwgbG9vc2UpKSB7XG4gICAgICAgIGxvdyA9IGNvbXBhcmF0b3I7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGUgZWRnZSB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGEgb3BlcmF0b3IgdGhlbiBvdXIgdmVyc2lvblxuICAgIC8vIGlzbid0IG91dHNpZGUgaXRcbiAgICBpZiAoaGlnaC5vcGVyYXRvciA9PT0gY29tcCB8fCBoaWdoLm9wZXJhdG9yID09PSBlY29tcCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBsb3dlc3QgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhbiBvcGVyYXRvciBhbmQgb3VyIHZlcnNpb25cbiAgICAvLyBpcyBsZXNzIHRoYW4gaXQgdGhlbiBpdCBpc24ndCBoaWdoZXIgdGhhbiB0aGUgcmFuZ2VcbiAgICBpZiAoKCFsb3cub3BlcmF0b3IgfHwgbG93Lm9wZXJhdG9yID09PSBjb21wKSAmJlxuICAgICAgICBsdGVmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAobG93Lm9wZXJhdG9yID09PSBlY29tcCAmJiBsdGZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnRzLnByZXJlbGVhc2UgPSBwcmVyZWxlYXNlO1xuZnVuY3Rpb24gcHJlcmVsZWFzZSh2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgcGFyc2VkID0gcGFyc2UodmVyc2lvbiwgbG9vc2UpO1xuICByZXR1cm4gKHBhcnNlZCAmJiBwYXJzZWQucHJlcmVsZWFzZS5sZW5ndGgpID8gcGFyc2VkLnByZXJlbGVhc2UgOiBudWxsO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvfi9zZW12ZXIvc2VtdmVyLmpzXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9wcm9jZXNzLzAuMTEuOS9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFZpZXdNb2RlbCBDb25zdHJ1Y3RvciAmIGRlZmluaXRpb25cbiAqL1xuXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtcbiAgaW5pdFN0YXRlXG59IGZyb20gJy4uL2NvcmUvc3RhdGUnXG5pbXBvcnQge1xuICBidWlsZFxufSBmcm9tICcuL2NvbXBpbGVyJ1xuaW1wb3J0IHtcbiAgaW5pdEV2ZW50cyxcbiAgbWl4aW5FdmVudHNcbn0gZnJvbSAnLi9ldmVudHMnXG5cbi8qKlxuICogVmlld01vZGVsIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zICAgIGNvbXBvbmVudCBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyZW50Vm0gICB3aGljaCBjb250YWlucyBfYXBwXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyZW50RWwgICByb290IGVsZW1lbnQgb3IgZnJhZyBibG9ja1xuICogQHBhcmFtIHtvYmplY3R9IG1lcmdlZERhdGEgZXh0ZXJuYWwgZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IGV4dGVybmFsRXZlbnRzIGV4dGVybmFsIGV2ZW50c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWbSAoXG4gIHR5cGUsXG4gIG9wdGlvbnMsXG4gIHBhcmVudFZtLFxuICBwYXJlbnRFbCxcbiAgbWVyZ2VkRGF0YSxcbiAgZXh0ZXJuYWxFdmVudHNcbikge1xuICB0aGlzLl9wYXJlbnQgPSBwYXJlbnRWbS5fcmVhbFBhcmVudCA/IHBhcmVudFZtLl9yZWFsUGFyZW50IDogcGFyZW50Vm1cbiAgdGhpcy5fYXBwID0gcGFyZW50Vm0uX2FwcFxuICBwYXJlbnRWbS5fY2hpbGRyZW5WbXMgJiYgcGFyZW50Vm0uX2NoaWxkcmVuVm1zLnB1c2godGhpcylcblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gdGhpcy5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcFt0eXBlXSB8fCB7fVxuICB9XG4gIGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGEgfHwge31cblxuICB0aGlzLl9vcHRpb25zID0gb3B0aW9uc1xuICB0aGlzLl9tZXRob2RzID0gb3B0aW9ucy5tZXRob2RzIHx8IHt9XG4gIHRoaXMuX2NvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCB7fVxuICB0aGlzLl9jc3MgPSBvcHRpb25zLnN0eWxlIHx8IHt9XG4gIHRoaXMuX2lkcyA9IHt9XG4gIHRoaXMuX3ZtRXZlbnRzID0ge31cbiAgdGhpcy5fY2hpbGRyZW5WbXMgPSBbXVxuICB0aGlzLl90eXBlID0gdHlwZVxuXG4gIC8vIGJpbmQgZXZlbnRzIGFuZCBsaWZlY3ljbGVzXG4gIGluaXRFdmVudHModGhpcywgZXh0ZXJuYWxFdmVudHMpXG5cbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gXCJpbml0XCIgbGlmZWN5Y2xlIGluIFZtKCR7dGhpcy5fdHlwZX0pYClcbiAgdGhpcy4kZW1pdCgnaG9vazppbml0JylcbiAgdGhpcy5faW5pdGVkID0gdHJ1ZVxuXG4gIC8vIHByb3h5IGRhdGEgYW5kIG1ldGhvZHNcbiAgLy8gb2JzZXJ2ZSBkYXRhIGFuZCBhZGQgdGhpcyB0byB2bXNcbiAgdGhpcy5fZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nID8gZGF0YSgpIDogZGF0YVxuICBpZiAobWVyZ2VkRGF0YSkge1xuICAgIGV4dGVuZCh0aGlzLl9kYXRhLCBtZXJnZWREYXRhKVxuICB9XG4gIGluaXRTdGF0ZSh0aGlzKVxuXG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFwiY3JlYXRlZFwiIGxpZmVjeWNsZSBpbiBWbSgke3RoaXMuX3R5cGV9KWApXG4gIHRoaXMuJGVtaXQoJ2hvb2s6Y3JlYXRlZCcpXG4gIHRoaXMuX2NyZWF0ZWQgPSB0cnVlXG5cbiAgLy8gYmFja3dhcmQgb2xkIHJlYWR5IGVudHJ5XG4gIGlmIChvcHRpb25zLm1ldGhvZHMgJiYgb3B0aW9ucy5tZXRob2RzLnJlYWR5KSB7XG4gICAgY29uc29sZS53YXJuKCdcImV4cG9ydHMubWV0aG9kcy5yZWFkeVwiIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgJ3BsZWFzZSB1c2UgXCJleHBvcnRzLmNyZWF0ZWRcIiBpbnN0ZWFkJylcbiAgICBvcHRpb25zLm1ldGhvZHMucmVhZHkuY2FsbCh0aGlzKVxuICB9XG5cbiAgLy8gaWYgbm8gcGFyZW50RWxlbWVudCB0aGVuIHNwZWNpZnkgdGhlIGRvY3VtZW50RWxlbWVudFxuICB0aGlzLl9wYXJlbnRFbCA9IHBhcmVudEVsIHx8IHRoaXMuX2FwcC5kb2MuZG9jdW1lbnRFbGVtZW50XG4gIGJ1aWxkKHRoaXMpXG59XG5cbm1peGluRXZlbnRzKFZtLnByb3RvdHlwZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3ZtL2luZGV4LmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IFdhdGNoZXIgZnJvbSAnLi93YXRjaGVyJ1xuaW1wb3J0IERlcCBmcm9tICcuL2RlcCdcbmltcG9ydCB7XG4gIG9ic2VydmUsXG4gIHByb3h5LFxuICB1bnByb3h5XG59IGZyb20gJy4vb2JzZXJ2ZXInXG5pbXBvcnQge1xuICBpc1BsYWluT2JqZWN0LFxuICBiaW5kXG59IGZyb20gJy4uL3V0aWwnXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RhdGUgKHZtKSB7XG4gIHZtLl93YXRjaGVycyA9IFtdXG4gIGluaXREYXRhKHZtKVxuICBpbml0Q29tcHV0ZWQodm0pXG4gIGluaXRNZXRob2RzKHZtKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdERhdGEgKHZtKSB7XG4gIGxldCBkYXRhID0gdm0uX2RhdGFcblxuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICBkYXRhID0ge31cbiAgfVxuICAvLyBwcm94eSBkYXRhIG9uIGluc3RhbmNlXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKVxuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBwcm94eSh2bSwga2V5c1tpXSlcbiAgfVxuICAvLyBvYnNlcnZlIGRhdGFcbiAgb2JzZXJ2ZShkYXRhLCB2bSlcbn1cblxuZnVuY3Rpb24gbm9vcCAoKSB7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Q29tcHV0ZWQgKHZtKSB7XG4gIGNvbnN0IGNvbXB1dGVkID0gdm0uX2NvbXB1dGVkXG4gIGlmIChjb21wdXRlZCkge1xuICAgIGZvciAobGV0IGtleSBpbiBjb21wdXRlZCkge1xuICAgICAgY29uc3QgdXNlckRlZiA9IGNvbXB1dGVkW2tleV1cbiAgICAgIGNvbnN0IGRlZiA9IHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGVmLmdldCA9IG1ha2VDb21wdXRlZEdldHRlcih1c2VyRGVmLCB2bSlcbiAgICAgICAgZGVmLnNldCA9IG5vb3BcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZi5nZXQgPSB1c2VyRGVmLmdldFxuICAgICAgICAgID8gdXNlckRlZi5jYWNoZSAhPT0gZmFsc2VcbiAgICAgICAgICAgID8gbWFrZUNvbXB1dGVkR2V0dGVyKHVzZXJEZWYuZ2V0LCB2bSlcbiAgICAgICAgICAgIDogYmluZCh1c2VyRGVmLmdldCwgdm0pXG4gICAgICAgICAgOiBub29wXG4gICAgICAgIGRlZi5zZXQgPSB1c2VyRGVmLnNldFxuICAgICAgICAgID8gYmluZCh1c2VyRGVmLnNldCwgdm0pXG4gICAgICAgICAgOiBub29wXG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodm0sIGtleSwgZGVmKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlQ29tcHV0ZWRHZXR0ZXIgKGdldHRlciwgb3duZXIpIHtcbiAgY29uc3Qgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKG93bmVyLCBnZXR0ZXIsIG51bGwsIHtcbiAgICBsYXp5OiB0cnVlXG4gIH0pXG4gIHJldHVybiBmdW5jdGlvbiBjb21wdXRlZEdldHRlciAoKSB7XG4gICAgaWYgKHdhdGNoZXIuZGlydHkpIHtcbiAgICAgIHdhdGNoZXIuZXZhbHVhdGUoKVxuICAgIH1cbiAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgd2F0Y2hlci5kZXBlbmQoKVxuICAgIH1cbiAgICByZXR1cm4gd2F0Y2hlci52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0TWV0aG9kcyAodm0pIHtcbiAgY29uc3QgbWV0aG9kcyA9IHZtLl9tZXRob2RzXG4gIGlmIChtZXRob2RzKSB7XG4gICAgZm9yIChsZXQga2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIHZtW2tleV0gPSBtZXRob2RzW2tleV1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2NvcmUvc3RhdGUuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgRGVwLCB7IHB1c2hUYXJnZXQsIHBvcFRhcmdldCB9IGZyb20gJy4vZGVwJ1xuLy8gaW1wb3J0IHsgcHVzaFdhdGNoZXIgfSBmcm9tICcuL2JhdGNoZXInXG5pbXBvcnQge1xuICB3YXJuLFxuICByZW1vdmUsXG4gIGV4dGVuZCxcbiAgaXNPYmplY3QsXG4gIHBhcnNlUGF0aCxcbiAgY3JlYXRlTmV3U2V0XG4gIC8vIF9TZXQgYXMgU2V0XG59IGZyb20gJy4uL3V0aWwnXG5cbmxldCB1aWQgPSAwXG5cbi8qKlxuICogQSB3YXRjaGVyIHBhcnNlcyBhbiBleHByZXNzaW9uLCBjb2xsZWN0cyBkZXBlbmRlbmNpZXMsXG4gKiBhbmQgZmlyZXMgY2FsbGJhY2sgd2hlbiB0aGUgZXhwcmVzc2lvbiB2YWx1ZSBjaGFuZ2VzLlxuICogVGhpcyBpcyB1c2VkIGZvciBib3RoIHRoZSAkd2F0Y2goKSBhcGkgYW5kIGRpcmVjdGl2ZXMuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gZXhwT3JGblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiAgICAgICAgICAgICAgICAgLSB7QXJyYXl9IGZpbHRlcnNcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSB0d29XYXlcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBkZWVwXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gdXNlclxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHN5bmNcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBsYXp5XG4gKiAgICAgICAgICAgICAgICAgLSB7RnVuY3Rpb259IFtwcmVQcm9jZXNzXVxuICogICAgICAgICAgICAgICAgIC0ge0Z1bmN0aW9ufSBbcG9zdFByb2Nlc3NdXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYXRjaGVyICh2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpIHtcbiAgLy8gbWl4IGluIG9wdGlvbnNcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBleHRlbmQodGhpcywgb3B0aW9ucylcbiAgfVxuICBjb25zdCBpc0ZuID0gdHlwZW9mIGV4cE9yRm4gPT09ICdmdW5jdGlvbidcbiAgdGhpcy52bSA9IHZtXG4gIHZtLl93YXRjaGVycy5wdXNoKHRoaXMpXG4gIHRoaXMuZXhwcmVzc2lvbiA9IGV4cE9yRm5cbiAgdGhpcy5jYiA9IGNiXG4gIHRoaXMuaWQgPSArK3VpZCAvLyB1aWQgZm9yIGJhdGNoaW5nXG4gIHRoaXMuYWN0aXZlID0gdHJ1ZVxuICB0aGlzLmRpcnR5ID0gdGhpcy5sYXp5IC8vIGZvciBsYXp5IHdhdGNoZXJzXG4gIHRoaXMuZGVwcyA9IFtdXG4gIHRoaXMubmV3RGVwcyA9IFtdXG4gIHRoaXMuZGVwSWRzID0gY3JlYXRlTmV3U2V0KCkgLy8gbmV3IFNldCgpXG4gIHRoaXMubmV3RGVwSWRzID0gY3JlYXRlTmV3U2V0KCkgLy8gbmV3IFNldCgpXG4gIC8vIHBhcnNlIGV4cHJlc3Npb24gZm9yIGdldHRlclxuICBpZiAoaXNGbikge1xuICAgIHRoaXMuZ2V0dGVyID0gZXhwT3JGblxuICB9IGVsc2Uge1xuICAgIHRoaXMuZ2V0dGVyID0gcGFyc2VQYXRoKGV4cE9yRm4pXG4gICAgaWYgKCF0aGlzLmdldHRlcikge1xuICAgICAgdGhpcy5nZXR0ZXIgPSBmdW5jdGlvbiAoKSB7fVxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAnRmFpbGVkIHdhdGNoaW5nIHBhdGg6ICcgKyBleHBPckZuICtcbiAgICAgICAgJ1dhdGNoZXIgb25seSBhY2NlcHRzIHNpbXBsZSBkb3QtZGVsaW1pdGVkIHBhdGhzLiAnICtcbiAgICAgICAgJ0ZvciBmdWxsIGNvbnRyb2wsIHVzZSBhIGZ1bmN0aW9uIGluc3RlYWQuJyxcbiAgICAgICAgdm1cbiAgICAgIClcbiAgICB9XG4gIH1cbiAgdGhpcy52YWx1ZSA9IHRoaXMubGF6eVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiB0aGlzLmdldCgpXG4gIC8vIHN0YXRlIGZvciBhdm9pZGluZyBmYWxzZSB0cmlnZ2VycyBmb3IgZGVlcCBhbmQgQXJyYXlcbiAgLy8gd2F0Y2hlcnMgZHVyaW5nIHZtLl9kaWdlc3QoKVxuICB0aGlzLnF1ZXVlZCA9IHRoaXMuc2hhbGxvdyA9IGZhbHNlXG59XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIGdldHRlciwgYW5kIHJlLWNvbGxlY3QgZGVwZW5kZW5jaWVzLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcHVzaFRhcmdldCh0aGlzKVxuICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0dGVyLmNhbGwodGhpcy52bSwgdGhpcy52bSlcbiAgLy8gXCJ0b3VjaFwiIGV2ZXJ5IHByb3BlcnR5IHNvIHRoZXkgYXJlIGFsbCB0cmFja2VkIGFzXG4gIC8vIGRlcGVuZGVuY2llcyBmb3IgZGVlcCB3YXRjaGluZ1xuICBpZiAodGhpcy5kZWVwKSB7XG4gICAgdHJhdmVyc2UodmFsdWUpXG4gIH1cbiAgcG9wVGFyZ2V0KClcbiAgdGhpcy5jbGVhbnVwRGVwcygpXG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKipcbiAqIEFkZCBhIGRlcGVuZGVuY3kgdG8gdGhpcyBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtEZXB9IGRlcFxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmFkZERlcCA9IGZ1bmN0aW9uIChkZXApIHtcbiAgY29uc3QgaWQgPSBkZXAuaWRcbiAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoaWQpKSB7XG4gICAgdGhpcy5uZXdEZXBJZHMuYWRkKGlkKVxuICAgIHRoaXMubmV3RGVwcy5wdXNoKGRlcClcbiAgICBpZiAoIXRoaXMuZGVwSWRzLmhhcyhpZCkpIHtcbiAgICAgIGRlcC5hZGRTdWIodGhpcylcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDbGVhbiB1cCBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmNsZWFudXBEZXBzID0gZnVuY3Rpb24gKCkge1xuICBsZXQgaSA9IHRoaXMuZGVwcy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGRlcCA9IHRoaXMuZGVwc1tpXVxuICAgIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGRlcC5pZCkpIHtcbiAgICAgIGRlcC5yZW1vdmVTdWIodGhpcylcbiAgICB9XG4gIH1cbiAgbGV0IHRtcCA9IHRoaXMuZGVwSWRzXG4gIHRoaXMuZGVwSWRzID0gdGhpcy5uZXdEZXBJZHNcbiAgdGhpcy5uZXdEZXBJZHMgPSB0bXBcbiAgdGhpcy5uZXdEZXBJZHMuY2xlYXIoKVxuICB0bXAgPSB0aGlzLmRlcHNcbiAgdGhpcy5kZXBzID0gdGhpcy5uZXdEZXBzXG4gIHRoaXMubmV3RGVwcyA9IHRtcFxuICB0aGlzLm5ld0RlcHMubGVuZ3RoID0gMFxufVxuXG4vKipcbiAqIFN1YnNjcmliZXIgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgd2hlbiBhIGRlcGVuZGVuY3kgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNoYWxsb3dcbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoc2hhbGxvdykge1xuICBpZiAodGhpcy5sYXp5KSB7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWVcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJ1bigpXG4gIH1cbiAgLy8gfSBlbHNlIGlmICh0aGlzLnN5bmMpIHtcbiAgLy8gICB0aGlzLnJ1bigpXG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgLy8gaWYgcXVldWVkLCBvbmx5IG92ZXJ3cml0ZSBzaGFsbG93IHdpdGggbm9uLXNoYWxsb3csXG4gIC8vICAgLy8gYnV0IG5vdCB0aGUgb3RoZXIgd2F5IGFyb3VuZC5cbiAgLy8gICB0aGlzLnNoYWxsb3cgPSB0aGlzLnF1ZXVlZFxuICAvLyAgICAgPyBzaGFsbG93XG4gIC8vICAgICAgID8gdGhpcy5zaGFsbG93XG4gIC8vICAgICAgIDogZmFsc2VcbiAgLy8gICAgIDogISFzaGFsbG93XG4gIC8vICAgdGhpcy5xdWV1ZWQgPSB0cnVlXG4gIC8vICAgcHVzaFdhdGNoZXIodGhpcylcbiAgLy8gfVxufVxuXG4vKipcbiAqIEJhdGNoZXIgam9iIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBiYXRjaGVyLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldCgpXG4gICAgaWYgKFxuICAgICAgdmFsdWUgIT09IHRoaXMudmFsdWUgfHxcbiAgICAgIC8vIERlZXAgd2F0Y2hlcnMgYW5kIHdhdGNoZXJzIG9uIE9iamVjdC9BcnJheXMgc2hvdWxkIGZpcmUgZXZlblxuICAgICAgLy8gd2hlbiB0aGUgdmFsdWUgaXMgdGhlIHNhbWUsIGJlY2F1c2UgdGhlIHZhbHVlIG1heVxuICAgICAgLy8gaGF2ZSBtdXRhdGVkOyBidXQgb25seSBkbyBzbyBpZiB0aGlzIGlzIGFcbiAgICAgIC8vIG5vbi1zaGFsbG93IHVwZGF0ZSAoY2F1c2VkIGJ5IGEgdm0gZGlnZXN0KS5cbiAgICAgICgoaXNPYmplY3QodmFsdWUpIHx8IHRoaXMuZGVlcCkgJiYgIXRoaXMuc2hhbGxvdylcbiAgICApIHtcbiAgICAgIC8vIHNldCBuZXcgdmFsdWVcbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy52YWx1ZVxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKVxuICAgIH1cbiAgICB0aGlzLnF1ZXVlZCA9IHRoaXMuc2hhbGxvdyA9IGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdmFsdWUgb2YgdGhlIHdhdGNoZXIuXG4gKiBUaGlzIG9ubHkgZ2V0cyBjYWxsZWQgZm9yIGxhenkgd2F0Y2hlcnMuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZXZhbHVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMudmFsdWUgPSB0aGlzLmdldCgpXG4gIHRoaXMuZGlydHkgPSBmYWxzZVxufVxuXG4vKipcbiAqIERlcGVuZCBvbiBhbGwgZGVwcyBjb2xsZWN0ZWQgYnkgdGhpcyB3YXRjaGVyLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGkgPSB0aGlzLmRlcHMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICB0aGlzLmRlcHNbaV0uZGVwZW5kKClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBzZWxmIGZyb20gYWxsIGRlcGVuZGVuY2llcycgc3ViY3JpYmVyIGxpc3QuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gdm0ncyB3YXRjaGVyIGxpc3RcbiAgICAvLyB0aGlzIGlzIGEgc29tZXdoYXQgZXhwZW5zaXZlIG9wZXJhdGlvbiBzbyB3ZSBza2lwIGl0XG4gICAgLy8gaWYgdGhlIHZtIGlzIGJlaW5nIGRlc3Ryb3llZCBvciBpcyBwZXJmb3JtaW5nIGEgdi1mb3JcbiAgICAvLyByZS1yZW5kZXIgKHRoZSB3YXRjaGVyIGxpc3QgaXMgdGhlbiBmaWx0ZXJlZCBieSB2LWZvcikuXG4gICAgaWYgKCF0aGlzLnZtLl9pc0JlaW5nRGVzdHJveWVkICYmICF0aGlzLnZtLl92Rm9yUmVtb3ZpbmcpIHtcbiAgICAgIHJlbW92ZSh0aGlzLnZtLl93YXRjaGVycywgdGhpcylcbiAgICB9XG4gICAgbGV0IGkgPSB0aGlzLmRlcHMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5kZXBzW2ldLnJlbW92ZVN1Yih0aGlzKVxuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlXG4gICAgdGhpcy52bSA9IHRoaXMuY2IgPSB0aGlzLnZhbHVlID0gbnVsbFxuICB9XG59XG5cbi8qKlxuICogUmVjcnVzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcbiAqIGdldHRlcnMsIHNvIHRoYXQgZXZlcnkgbmVzdGVkIHByb3BlcnR5IGluc2lkZSB0aGUgb2JqZWN0XG4gKiBpcyBjb2xsZWN0ZWQgYXMgYSBcImRlZXBcIiBkZXBlbmRlbmN5LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcGFyYW0ge1NldH0gc2VlblxuICovXG5cbmNvbnN0IHNlZW5PYmplY3RzID0gY3JlYXRlTmV3U2V0KCkgLy8gbmV3IFNldCgpXG5mdW5jdGlvbiB0cmF2ZXJzZSAodmFsLCBzZWVuKSB7XG4gIGxldCBpLCBrZXlzLCBpc0EsIGlzT1xuICBpZiAoIXNlZW4pIHtcbiAgICBzZWVuID0gc2Vlbk9iamVjdHNcbiAgICBzZWVuLmNsZWFyKClcbiAgfVxuICBpc0EgPSBBcnJheS5pc0FycmF5KHZhbClcbiAgaXNPID0gaXNPYmplY3QodmFsKVxuICBpZiAoaXNBIHx8IGlzTykge1xuICAgIGlmICh2YWwuX19vYl9fKSB7XG4gICAgICBjb25zdCBkZXBJZCA9IHZhbC5fX29iX18uZGVwLmlkXG4gICAgICBpZiAoc2Vlbi5oYXMoZGVwSWQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vlbi5hZGQoZGVwSWQpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0EpIHtcbiAgICAgIGkgPSB2YWwubGVuZ3RoXG4gICAgICB3aGlsZSAoaS0tKSB0cmF2ZXJzZSh2YWxbaV0sIHNlZW4pXG4gICAgfSBlbHNlIGlmIChpc08pIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpXG4gICAgICBpID0ga2V5cy5sZW5ndGhcbiAgICAgIHdoaWxlIChpLS0pIHRyYXZlcnNlKHZhbFtrZXlzW2ldXSwgc2VlbilcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2NvcmUvd2F0Y2hlci5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IHJlbW92ZSB9IGZyb20gJy4uL3V0aWwnXG5cbmxldCB1aWQgPSAwXG5cbi8qKlxuICogQSBkZXAgaXMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNhbiBoYXZlIG11bHRpcGxlXG4gKiBkaXJlY3RpdmVzIHN1YnNjcmliaW5nIHRvIGl0LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlcCAoKSB7XG4gIHRoaXMuaWQgPSB1aWQrK1xuICB0aGlzLnN1YnMgPSBbXVxufVxuXG4vLyB0aGUgY3VycmVudCB0YXJnZXQgd2F0Y2hlciBiZWluZyBldmFsdWF0ZWQuXG4vLyB0aGlzIGlzIGdsb2JhbGx5IHVuaXF1ZSBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG9ubHkgb25lXG4vLyB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZCBhdCBhbnkgdGltZS5cbkRlcC50YXJnZXQgPSBudWxsXG5jb25zdCB0YXJnZXRTdGFjayA9IFtdXG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoVGFyZ2V0IChfdGFyZ2V0KSB7XG4gIGlmIChEZXAudGFyZ2V0KSB0YXJnZXRTdGFjay5wdXNoKERlcC50YXJnZXQpXG4gIERlcC50YXJnZXQgPSBfdGFyZ2V0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BUYXJnZXQgKCkge1xuICBEZXAudGFyZ2V0ID0gdGFyZ2V0U3RhY2sucG9wKClcbn1cblxuLyoqXG4gKiBBZGQgYSBkaXJlY3RpdmUgc3Vic2NyaWJlci5cbiAqXG4gKiBAcGFyYW0ge0RpcmVjdGl2ZX0gc3ViXG4gKi9cblxuRGVwLnByb3RvdHlwZS5hZGRTdWIgPSBmdW5jdGlvbiAoc3ViKSB7XG4gIHRoaXMuc3Vicy5wdXNoKHN1Yilcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBkaXJlY3RpdmUgc3Vic2NyaWJlci5cbiAqXG4gKiBAcGFyYW0ge0RpcmVjdGl2ZX0gc3ViXG4gKi9cblxuRGVwLnByb3RvdHlwZS5yZW1vdmVTdWIgPSBmdW5jdGlvbiAoc3ViKSB7XG4gIHJlbW92ZSh0aGlzLnN1YnMsIHN1Yilcbn1cblxuLyoqXG4gKiBBZGQgc2VsZiBhcyBhIGRlcGVuZGVuY3kgdG8gdGhlIHRhcmdldCB3YXRjaGVyLlxuICovXG5cbkRlcC5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gKCkge1xuICBpZiAoRGVwLnRhcmdldCkge1xuICAgIERlcC50YXJnZXQuYWRkRGVwKHRoaXMpXG4gIH1cbn1cblxuLyoqXG4gKiBOb3RpZnkgYWxsIHN1YnNjcmliZXJzIG9mIGEgbmV3IHZhbHVlLlxuICovXG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAvLyBzdGFibGl6ZSB0aGUgc3Vic2NyaWJlciBsaXN0IGZpcnN0XG4gIGNvbnN0IHN1YnMgPSB0aGlzLnN1YnMuc2xpY2UoKVxuICBmb3IgKGxldCBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3Vic1tpXS51cGRhdGUoKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9jb3JlL2RlcC5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCBEZXAgZnJvbSAnLi9kZXAnXG5pbXBvcnQgeyBhcnJheU1ldGhvZHMgfSBmcm9tICcuL2FycmF5J1xuaW1wb3J0IHtcbiAgZGVmLFxuICByZW1vdmUsXG4gIGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0LFxuICBoYXNQcm90byxcbiAgaGFzT3duLFxuICBpc1Jlc2VydmVkXG59IGZyb20gJy4uL3V0aWwnXG5cbmNvbnN0IGFycmF5S2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFycmF5TWV0aG9kcylcblxuLyoqXG4gKiBPYnNlcnZlciBjbGFzcyB0aGF0IGFyZSBhdHRhY2hlZCB0byBlYWNoIG9ic2VydmVkXG4gKiBvYmplY3QuIE9uY2UgYXR0YWNoZWQsIHRoZSBvYnNlcnZlciBjb252ZXJ0cyB0YXJnZXRcbiAqIG9iamVjdCdzIHByb3BlcnR5IGtleXMgaW50byBnZXR0ZXIvc2V0dGVycyB0aGF0XG4gKiBjb2xsZWN0IGRlcGVuZGVuY2llcyBhbmQgZGlzcGF0Y2hlcyB1cGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSB2YWx1ZVxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIE9ic2VydmVyICh2YWx1ZSkge1xuICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgdGhpcy5kZXAgPSBuZXcgRGVwKClcbiAgZGVmKHZhbHVlLCAnX19vYl9fJywgdGhpcylcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgY29uc3QgYXVnbWVudCA9IGhhc1Byb3RvXG4gICAgICA/IHByb3RvQXVnbWVudFxuICAgICAgOiBjb3B5QXVnbWVudFxuICAgIGF1Z21lbnQodmFsdWUsIGFycmF5TWV0aG9kcywgYXJyYXlLZXlzKVxuICAgIHRoaXMub2JzZXJ2ZUFycmF5KHZhbHVlKVxuICB9IGVsc2Uge1xuICAgIHRoaXMud2Fsayh2YWx1ZSlcbiAgfVxufVxuXG4vLyBJbnN0YW5jZSBtZXRob2RzXG5cbi8qKlxuICogV2FsayB0aHJvdWdoIGVhY2ggcHJvcGVydHkgYW5kIGNvbnZlcnQgdGhlbSBpbnRvXG4gKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cbiAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uIChvYmopIHtcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgIHRoaXMuY29udmVydChrZXksIG9ialtrZXldKVxuICB9XG59XG5cbi8qKlxuICogT2JzZXJ2ZSBhIGxpc3Qgb2YgQXJyYXkgaXRlbXMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZUFycmF5ID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gaXRlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgb2JzZXJ2ZShpdGVtc1tpXSlcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBwcm9wZXJ0eSBpbnRvIGdldHRlci9zZXR0ZXIgc28gd2UgY2FuIGVtaXRcbiAqIHRoZSBldmVudHMgd2hlbiB0aGUgcHJvcGVydHkgaXMgYWNjZXNzZWQvY2hhbmdlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5jb252ZXJ0ID0gZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gIGRlZmluZVJlYWN0aXZlKHRoaXMudmFsdWUsIGtleSwgdmFsKVxufVxuXG4vKipcbiAqIEFkZCBhbiBvd25lciB2bSwgc28gdGhhdCB3aGVuICRzZXQvJGRlbGV0ZSBtdXRhdGlvbnNcbiAqIGhhcHBlbiB3ZSBjYW4gbm90aWZ5IG93bmVyIHZtcyB0byBwcm94eSB0aGUga2V5cyBhbmRcbiAqIGRpZ2VzdCB0aGUgd2F0Y2hlcnMuIFRoaXMgaXMgb25seSBjYWxsZWQgd2hlbiB0aGUgb2JqZWN0XG4gKiBpcyBvYnNlcnZlZCBhcyBhbiBpbnN0YW5jZSdzIHJvb3QgJGRhdGEuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLmFkZFZtID0gZnVuY3Rpb24gKHZtKSB7XG4gICh0aGlzLnZtcyB8fCAodGhpcy52bXMgPSBbXSkpLnB1c2godm0pXG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIG93bmVyIHZtLiBUaGlzIGlzIGNhbGxlZCB3aGVuIHRoZSBvYmplY3QgaXNcbiAqIHN3YXBwZWQgb3V0IGFzIGFuIGluc3RhbmNlJ3MgJGRhdGEgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5yZW1vdmVWbSA9IGZ1bmN0aW9uICh2bSkge1xuICByZW1vdmUodGhpcy52bXMsIHZtKVxufVxuXG4vLyBoZWxwZXJzXG5cbi8qKlxuICogQXVnbWVudCBhbiB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGludGVyY2VwdGluZ1xuICogdGhlIHByb3RvdHlwZSBjaGFpbiB1c2luZyBfX3Byb3RvX19cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gdGFyZ2V0XG4gKiBAcGFyYW0ge09iamVjdH0gc3JjXG4gKi9cblxuZnVuY3Rpb24gcHJvdG9BdWdtZW50ICh0YXJnZXQsIHNyYykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuICB0YXJnZXQuX19wcm90b19fID0gc3JjXG4gIC8qIGVzbGludC1lbmFibGUgbm8tcHJvdG8gKi9cbn1cblxuLyoqXG4gKiBBdWdtZW50IGFuIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgZGVmaW5pbmdcbiAqIGhpZGRlbiBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSB0YXJnZXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90b1xuICovXG5cbmZ1bmN0aW9uIGNvcHlBdWdtZW50ICh0YXJnZXQsIHNyYywga2V5cykge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0ga2V5c1tpXVxuICAgIGRlZih0YXJnZXQsIGtleSwgc3JjW2tleV0pXG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0IHRvIGNyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBmb3IgYSB2YWx1ZSxcbiAqIHJldHVybnMgdGhlIG5ldyBvYnNlcnZlciBpZiBzdWNjZXNzZnVsbHkgb2JzZXJ2ZWQsXG4gKiBvciB0aGUgZXhpc3Rpbmcgb2JzZXJ2ZXIgaWYgdGhlIHZhbHVlIGFscmVhZHkgaGFzIG9uZS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge1Z1ZX0gW3ZtXVxuICogQHJldHVybiB7T2JzZXJ2ZXJ8dW5kZWZpbmVkfVxuICogQHN0YXRpY1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlICh2YWx1ZSwgdm0pIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBsZXQgb2JcbiAgaWYgKGhhc093bih2YWx1ZSwgJ19fb2JfXycpICYmIHZhbHVlLl9fb2JfXyBpbnN0YW5jZW9mIE9ic2VydmVyKSB7XG4gICAgb2IgPSB2YWx1ZS5fX29iX19cbiAgfSBlbHNlIGlmIChcbiAgICAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpICYmXG4gICAgT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSkgJiZcbiAgICAhdmFsdWUuX2lzVnVlXG4gICkge1xuICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlKVxuICB9XG4gIGlmIChvYiAmJiB2bSkge1xuICAgIG9iLmFkZFZtKHZtKVxuICB9XG4gIHJldHVybiBvYlxufVxuXG4vKipcbiAqIERlZmluZSBhIHJlYWN0aXZlIHByb3BlcnR5IG9uIGFuIE9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVSZWFjdGl2ZSAob2JqLCBrZXksIHZhbCkge1xuICBjb25zdCBkZXAgPSBuZXcgRGVwKClcblxuICBjb25zdCBwcm9wZXJ0eSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpXG4gIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBjYXRlciBmb3IgcHJlLWRlZmluZWQgZ2V0dGVyL3NldHRlcnNcbiAgY29uc3QgZ2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuZ2V0XG4gIGNvbnN0IHNldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LnNldFxuXG4gIGxldCBjaGlsZE9iID0gb2JzZXJ2ZSh2YWwpXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gcmVhY3RpdmVHZXR0ZXIgKCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsXG4gICAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgICBkZXAuZGVwZW5kKClcbiAgICAgICAgaWYgKGNoaWxkT2IpIHtcbiAgICAgICAgICBjaGlsZE9iLmRlcC5kZXBlbmQoKVxuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIGZvciAobGV0IGUsIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBlID0gdmFsdWVbaV1cbiAgICAgICAgICAgIGUgJiYgZS5fX29iX18gJiYgZS5fX29iX18uZGVwLmRlcGVuZCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gcmVhY3RpdmVTZXR0ZXIgKG5ld1ZhbCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsXG4gICAgICBpZiAobmV3VmFsID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgICAgc2V0dGVyLmNhbGwob2JqLCBuZXdWYWwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBuZXdWYWxcbiAgICAgIH1cbiAgICAgIGNoaWxkT2IgPSBvYnNlcnZlKG5ld1ZhbClcbiAgICAgIGRlcC5ub3RpZnkoKVxuICAgIH1cbiAgfSlcbn1cblxuLyoqXG4gKiBTZXQgYSBwcm9wZXJ0eSBvbiBhbiBvYmplY3QuIEFkZHMgdGhlIG5ldyBwcm9wZXJ0eSBhbmRcbiAqIHRyaWdnZXJzIGNoYW5nZSBub3RpZmljYXRpb24gaWYgdGhlIHByb3BlcnR5IGRvZXNuJ3RcbiAqIGFscmVhZHkgZXhpc3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEBwdWJsaWNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0IChvYmosIGtleSwgdmFsKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqLnNwbGljZShrZXksIDEsIHZhbClcbiAgfVxuICBpZiAoaGFzT3duKG9iaiwga2V5KSkge1xuICAgIG9ialtrZXldID0gdmFsXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKG9iai5faXNWdWUpIHtcbiAgICBzZXQob2JqLl9kYXRhLCBrZXksIHZhbClcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBvYiA9IG9iai5fX29iX19cbiAgaWYgKCFvYikge1xuICAgIG9ialtrZXldID0gdmFsXG4gICAgcmV0dXJuXG4gIH1cbiAgb2IuY29udmVydChrZXksIHZhbClcbiAgb2IuZGVwLm5vdGlmeSgpXG4gIGlmIChvYi52bXMpIHtcbiAgICBsZXQgaSA9IG9iLnZtcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjb25zdCB2bSA9IG9iLnZtc1tpXVxuICAgICAgcHJveHkodm0sIGtleSlcbiAgICAgIHZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuLyoqXG4gKiBEZWxldGUgYSBwcm9wZXJ0eSBhbmQgdHJpZ2dlciBjaGFuZ2UgaWYgbmVjZXNzYXJ5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsIChvYmosIGtleSkge1xuICBpZiAoIWhhc093bihvYmosIGtleSkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBkZWxldGUgb2JqW2tleV1cbiAgY29uc3Qgb2IgPSBvYmouX19vYl9fXG5cbiAgaWYgKCFvYikge1xuICAgIGlmIChvYmouX2lzVnVlKSB7XG4gICAgICBkZWxldGUgb2JqLl9kYXRhW2tleV1cbiAgICAgIG9iai4kZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBvYi5kZXAubm90aWZ5KClcbiAgaWYgKG9iLnZtcykge1xuICAgIGxldCBpID0gb2Iudm1zLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNvbnN0IHZtID0gb2Iudm1zW2ldXG4gICAgICB1bnByb3h5KHZtLCBrZXkpXG4gICAgICB2bS4kZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBLRVlfV09SRFMgPSBbJyRpbmRleCcsICckdmFsdWUnLCAnJGV2ZW50J11cbmV4cG9ydCBmdW5jdGlvbiBwcm94eSAodm0sIGtleSkge1xuICBpZiAoS0VZX1dPUkRTLmluZGV4T2Yoa2V5KSA+IC0xIHx8ICFpc1Jlc2VydmVkKGtleSkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodm0sIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gcHJveHlHZXR0ZXIgKCkge1xuICAgICAgICByZXR1cm4gdm0uX2RhdGFba2V5XVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gcHJveHlTZXR0ZXIgKHZhbCkge1xuICAgICAgICB2bS5fZGF0YVtrZXldID0gdmFsXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5wcm94eSAodm0sIGtleSkge1xuICBpZiAoIWlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgIGRlbGV0ZSB2bVtrZXldXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2NvcmUvb2JzZXJ2ZXIuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgeyBkZWYgfSBmcm9tICcuLi91dGlsJ1xuXG5jb25zdCBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlXG5leHBvcnQgY29uc3QgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKVxuXG4vKipcbiAqIEludGVyY2VwdCBtdXRhdGluZyBtZXRob2RzIGFuZCBlbWl0IGV2ZW50c1xuICovXG5cbjtbXG4gICdwdXNoJyxcbiAgJ3BvcCcsXG4gICdzaGlmdCcsXG4gICd1bnNoaWZ0JyxcbiAgJ3NwbGljZScsXG4gICdzb3J0JyxcbiAgJ3JldmVyc2UnXG5dXG4uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICBjb25zdCBvcmlnaW5hbCA9IGFycmF5UHJvdG9bbWV0aG9kXVxuICBkZWYoYXJyYXlNZXRob2RzLCBtZXRob2QsIGZ1bmN0aW9uIG11dGF0b3IgKCkge1xuICAgIC8vIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzOlxuICAgIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2Nsb3N1cmUtd2l0aC1hcmd1bWVudHNcbiAgICBsZXQgaSA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICBjb25zdCBhcmdzID0gbmV3IEFycmF5KGkpXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgIGNvbnN0IG9iID0gdGhpcy5fX29iX19cbiAgICBsZXQgaW5zZXJ0ZWRcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgIGluc2VydGVkID0gYXJnc1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgIGluc2VydGVkID0gYXJnc1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICAgIGlmIChpbnNlcnRlZCkgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKVxuICAgIC8vIG5vdGlmeSBjaGFuZ2VcbiAgICBvYi5kZXAubm90aWZ5KClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pXG59KVxuXG4vKipcbiAqIFN3YXAgdGhlIGVsZW1lbnQgYXQgdGhlIGdpdmVuIGluZGV4IHdpdGggYSBuZXcgdmFsdWVcbiAqIGFuZCBlbWl0cyBjb3JyZXNwb25kaW5nIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm4geyp9IC0gcmVwbGFjZWQgZWxlbWVudFxuICovXG5cbmRlZihcbiAgYXJyYXlQcm90byxcbiAgJyRzZXQnLFxuICBmdW5jdGlvbiAkc2V0IChpbmRleCwgdmFsKSB7XG4gICAgaWYgKGluZGV4ID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IGluZGV4ICsgMVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDEsIHZhbClbMF1cbiAgfVxuKVxuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCB0byByZW1vdmUgdGhlIGVsZW1lbnQgYXQgZ2l2ZW4gaW5kZXguXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbmRlZihcbiAgYXJyYXlQcm90byxcbiAgJyRyZW1vdmUnLFxuICBmdW5jdGlvbiAkcmVtb3ZlIChpbmRleCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICBpbmRleCA9IHRoaXMuaW5kZXhPZihpbmRleClcbiAgICB9XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29yZS9hcnJheS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogVmlld01vZGVsIHRlbXBsYXRlIHBhcnNlciAmIGRhdGEtYmluZGluZyBwcm9jZXNzXG4gKi9cblxuaW1wb3J0IHtcbiAgZXh0ZW5kLFxuICBpc09iamVjdCxcbiAgYmluZFxufSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtcbiAgaW5pdERhdGEsXG4gIGluaXRDb21wdXRlZFxufSBmcm9tICcuLi9jb3JlL3N0YXRlJ1xuaW1wb3J0IHtcbiAgYmluZEVsZW1lbnQsXG4gIHNldElkLFxuICBiaW5kU3ViVm0sXG4gIGJpbmRTdWJWbUFmdGVySW5pdGlhbGl6ZWQsXG4gIGFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyxcbiAgd2F0Y2hcbn0gZnJvbSAnLi9kaXJlY3RpdmUnXG5pbXBvcnQge1xuICBjcmVhdGVCbG9jayxcbiAgY3JlYXRlQm9keSxcbiAgY3JlYXRlRWxlbWVudCxcbiAgYXR0YWNoVGFyZ2V0LFxuICBtb3ZlVGFyZ2V0LFxuICByZW1vdmVUYXJnZXRcbn0gZnJvbSAnLi9kb20taGVscGVyJ1xuXG4vKipcbiAqIGJ1aWxkKClcbiAqICAgY29tcGlsZSh0ZW1wbGF0ZSwgcGFyZW50Tm9kZSlcbiAqICAgICBpZiAodHlwZSBpcyBjb250ZW50KSBjcmVhdGUgY29udGVudE5vZGVcbiAqICAgICBlbHNlIGlmIChkaXJzIGhhdmUgdi1mb3IpIGZvcmVhY2ggLT4gY3JlYXRlIGNvbnRleHRcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0Rm9yLCBwYXJlbnROb2RlKTogZGlmZihsaXN0KSBvbmNoYW5nZVxuICogICAgIGVsc2UgaWYgKGRpcnMgaGF2ZSB2LWlmKSBhc3NlcnRcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0SWYsIHBhcmVudE5vZGUpOiB0b2dnbGUoc2hvd24pIG9uY2hhbmdlXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBkeW5hbWljKVxuICogICAgICAgLT4gY29tcGlsZSh0ZW1wbGF0ZVdpdGhvdXREeW5hbWljVHlwZSwgcGFyZW50Tm9kZSk6IHdhdGNoKHR5cGUpIG9uY2hhbmdlXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBjdXN0b20pXG4gKiAgICAgICBhZGRDaGlsZFZtKHZtLCBwYXJlbnRWbSlcbiAqICAgICAgIGJ1aWxkKGV4dGVybmFsRGlycylcbiAqICAgICAgIGZvcmVhY2ggY2hpbGROb2RlcyAtPiBjb21waWxlKGNoaWxkTm9kZSwgdGVtcGxhdGUpXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBuYXRpdmUpXG4gKiAgICAgICBzZXQoZGlycyk6IHVwZGF0ZShpZC9hdHRyL3N0eWxlL2NsYXNzKSBvbmNoYW5nZVxuICogICAgICAgYXBwZW5kKHRlbXBsYXRlLCBwYXJlbnROb2RlKVxuICogICAgICAgZm9yZWFjaCBjaGlsZE5vZGVzIC0+IGNvbXBpbGUoY2hpbGROb2RlLCB0ZW1wbGF0ZSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkICh2bSkge1xuICBjb25zdCBvcHQgPSB2bS5fb3B0aW9ucyB8fCB7fVxuICBjb25zdCB0ZW1wbGF0ZSA9IG9wdC50ZW1wbGF0ZSB8fCB7fVxuXG4gIGlmIChvcHQucmVwbGFjZSkge1xuICAgIGlmICh0ZW1wbGF0ZS5jaGlsZHJlbiAmJiB0ZW1wbGF0ZS5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbXBpbGUodm0sIHRlbXBsYXRlLmNoaWxkcmVuWzBdLCB2bS5fcGFyZW50RWwpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tcGlsZSh2bSwgdGVtcGxhdGUuY2hpbGRyZW4sIHZtLl9wYXJlbnRFbClcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgY29tcGlsZSh2bSwgdGVtcGxhdGUsIHZtLl9wYXJlbnRFbClcbiAgfVxuXG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFwicmVhZHlcIiBsaWZlY3ljbGUgaW4gVm0oJHt2bS5fdHlwZX0pYClcbiAgdm0uJGVtaXQoJ2hvb2s6cmVhZHknKVxuICB2bS5fcmVhZHkgPSB0cnVlXG59XG5cbi8qKlxuICogR2VuZXJhdGUgZWxlbWVudHMgYnkgY2hpbGQgb3IgY2hpbGRyZW4gYW5kIGFwcGVuZCB0byBwYXJlbnQgZWxlbWVudHMuXG4gKiBSb290IGVsZW1lbnQgaW5mbyB3b3VsZCBiZSBtZXJnZWQgaWYgaGFzLiBUaGUgZmlyc3QgYXJndW1lbnQgbWF5IGJlIGFuIGFycmF5XG4gKiBpZiB0aGUgcm9vdCBlbGVtZW50IHdpdGggb3B0aW9ucy5yZXBsYWNlIGhhcyBub3Qgb25seSBvbmUgY2hpbGQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9ICAgICAgIGRlc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSAgICAgICBtZXRhXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUgKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgY29uc3QgYXBwID0gdm0uX2FwcCB8fCB7fVxuXG4gIGlmIChhcHAubGFzdFNpZ25hbCA9PT0gLTEpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh0YXJnZXRJc0ZyYWdtZW50KHRhcmdldCkpIHtcbiAgICBjb21waWxlRnJhZ21lbnQodm0sIHRhcmdldCwgZGVzdCwgbWV0YSlcbiAgICByZXR1cm5cbiAgfVxuICBtZXRhID0gbWV0YSB8fCB7fVxuICBpZiAodGFyZ2V0SXNDb250ZW50KHRhcmdldCkpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIFwiY29udGVudFwiIGJsb2NrIGJ5JywgdGFyZ2V0KVxuICAgIHZtLl9jb250ZW50ID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodGFyZ2V0TmVlZENoZWNrUmVwZWF0KHRhcmdldCwgbWV0YSkpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIFwicmVwZWF0XCIgbG9naWMgYnknLCB0YXJnZXQpXG4gICAgaWYgKGRlc3QudHlwZSA9PT0gJ2RvY3VtZW50Jykge1xuICAgICAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBUaGUgcm9vdCBlbGVtZW50IGRvZXNcXCd0IHN1cHBvcnQgYHJlcGVhdGAgZGlyZWN0aXZlIScpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tcGlsZVJlcGVhdCh2bSwgdGFyZ2V0LCBkZXN0KVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBpZiAodGFyZ2V0TmVlZENoZWNrU2hvd24odGFyZ2V0LCBtZXRhKSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgXCJpZlwiIGxvZ2ljIGJ5JywgdGFyZ2V0KVxuICAgIGlmIChkZXN0LnR5cGUgPT09ICdkb2N1bWVudCcpIHtcbiAgICAgIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVGhlIHJvb3QgZWxlbWVudCBkb2VzXFwndCBzdXBwb3J0IGBpZmAgZGlyZWN0aXZlIScpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tcGlsZVNob3duKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpXG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHR5cGVHZXR0ZXIgPSBtZXRhLnR5cGUgfHwgdGFyZ2V0LnR5cGVcbiAgaWYgKHRhcmdldE5lZWRDaGVja1R5cGUodHlwZUdldHRlciwgbWV0YSkpIHtcbiAgICBjb21waWxlVHlwZSh2bSwgdGFyZ2V0LCBkZXN0LCB0eXBlR2V0dGVyLCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHR5cGUgPSB0eXBlR2V0dGVyXG4gIGNvbnN0IGNvbXBvbmVudCA9IHRhcmdldElzQ29tcG9zZWQodm0sIHRhcmdldCwgdHlwZSlcbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgY29tcG9zZWQgY29tcG9uZW50IGJ5JywgdGFyZ2V0KVxuICAgIGNvbXBpbGVDdXN0b21Db21wb25lbnQodm0sIGNvbXBvbmVudCwgdGFyZ2V0LCBkZXN0LCB0eXBlLCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgbmF0aXZlIGNvbXBvbmVudCBieScsIHRhcmdldClcbiAgY29tcGlsZU5hdGl2ZUNvbXBvbmVudCh2bSwgdGFyZ2V0LCBkZXN0LCB0eXBlKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBpcyBhIGZyYWdtZW50IChhbiBhcnJheSkuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXRJc0ZyYWdtZW50ICh0YXJnZXQpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCB0eXBlIGlzIGNvbnRlbnQvc2xvdC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldElzQ29udGVudCAodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQudHlwZSA9PT0gJ2NvbnRlbnQnIHx8IHRhcmdldC50eXBlID09PSAnc2xvdCdcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgbmVlZCB0byBjb21waWxlIGJ5IGEgbGlzdC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gIG1ldGFcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldE5lZWRDaGVja1JlcGVhdCAodGFyZ2V0LCBtZXRhKSB7XG4gIHJldHVybiAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgncmVwZWF0JykgJiYgdGFyZ2V0LnJlcGVhdFxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBuZWVkIHRvIGNvbXBpbGUgYnkgYSBib29sZWFuIHZhbHVlLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSAgbWV0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0TmVlZENoZWNrU2hvd24gKHRhcmdldCwgbWV0YSkge1xuICByZXR1cm4gIW1ldGEuaGFzT3duUHJvcGVydHkoJ3Nob3duJykgJiYgdGFyZ2V0LnNob3duXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IG5lZWQgdG8gY29tcGlsZSBieSBhIGR5bmFtaWMgdHlwZS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd8ZnVuY3Rpb259IHR5cGVHZXR0ZXJcbiAqIEBwYXJhbSAge29iamVjdH0gICAgICAgICAgbWV0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0TmVlZENoZWNrVHlwZSAodHlwZUdldHRlciwgbWV0YSkge1xuICByZXR1cm4gKHR5cGVvZiB0eXBlR2V0dGVyID09PSAnZnVuY3Rpb24nKSAmJiAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgndHlwZScpXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBraW5kIG9mIGNvbXBvbmVudCBpcyBjb21wb3NlZC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICB0eXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXRJc0NvbXBvc2VkICh2bSwgdGFyZ2V0LCB0eXBlKSB7XG4gIGxldCBjb21wb25lbnRcbiAgaWYgKHZtLl9hcHAgJiYgdm0uX2FwcC5jdXN0b21Db21wb25lbnRNYXApIHtcbiAgICBjb21wb25lbnQgPSB2bS5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcFt0eXBlXVxuICB9XG4gIGlmICh2bS5fb3B0aW9ucyAmJiB2bS5fb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgY29tcG9uZW50ID0gdm0uX29wdGlvbnMuY29tcG9uZW50c1t0eXBlXVxuICB9XG4gIGlmICh0YXJnZXQuY29tcG9uZW50KSB7XG4gICAgY29tcG9uZW50ID0gY29tcG9uZW50IHx8IHt9XG4gIH1cbiAgcmV0dXJuIGNvbXBvbmVudFxufVxuXG4vKipcbiAqIENvbXBpbGUgYSBsaXN0IG9mIHRhcmdldHMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVGcmFnbWVudCAodm0sIHRhcmdldCwgZGVzdCwgbWV0YSkge1xuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcbiAgdGFyZ2V0LmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgY29tcGlsZSh2bSwgY2hpbGQsIGZyYWdCbG9jaywgbWV0YSlcbiAgfSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggcmVwZWF0IGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICovXG5mdW5jdGlvbiBjb21waWxlUmVwZWF0ICh2bSwgdGFyZ2V0LCBkZXN0KSB7XG4gIGNvbnN0IHJlcGVhdCA9IHRhcmdldC5yZXBlYXRcbiAgY29uc3Qgb2xkU3R5bGUgPSB0eXBlb2YgcmVwZWF0ID09PSAnZnVuY3Rpb24nXG4gIGxldCBnZXR0ZXIgPSByZXBlYXQuZ2V0dGVyIHx8IHJlcGVhdC5leHByZXNzaW9uIHx8IHJlcGVhdFxuICBpZiAodHlwZW9mIGdldHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGdldHRlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdIH1cbiAgfVxuICBjb25zdCBrZXkgPSByZXBlYXQua2V5IHx8ICckaW5kZXgnXG4gIGNvbnN0IHZhbHVlID0gcmVwZWF0LnZhbHVlIHx8ICckdmFsdWUnXG4gIGNvbnN0IHRyYWNrQnkgPSByZXBlYXQudHJhY2tCeSB8fCB0YXJnZXQudHJhY2tCeSB8fFxuICAgICh0YXJnZXQuYXR0ciAmJiB0YXJnZXQuYXR0ci50cmFja0J5KVxuXG4gIGNvbnN0IGZyYWdCbG9jayA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuICBmcmFnQmxvY2suY2hpbGRyZW4gPSBbXVxuICBmcmFnQmxvY2suZGF0YSA9IFtdXG4gIGZyYWdCbG9jay52bXMgPSBbXVxuXG4gIGJpbmRSZXBlYXQodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCB7IGdldHRlciwga2V5LCB2YWx1ZSwgdHJhY2tCeSwgb2xkU3R5bGUgfSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggaWYgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gbWV0YVxuICovXG5mdW5jdGlvbiBjb21waWxlU2hvd24gKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgY29uc3QgbmV3TWV0YSA9IHsgc2hvd246IHRydWUgfVxuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcblxuICBpZiAoZGVzdC5lbGVtZW50ICYmIGRlc3QuY2hpbGRyZW4pIHtcbiAgICBkZXN0LmNoaWxkcmVuLnB1c2goZnJhZ0Jsb2NrKVxuICB9XG5cbiAgaWYgKG1ldGEucmVwZWF0KSB7XG4gICAgbmV3TWV0YS5yZXBlYXQgPSBtZXRhLnJlcGVhdFxuICB9XG5cbiAgYmluZFNob3duKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggZHluYW1pYyBjb21wb25lbnQgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gICB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIGRlc3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHR5cGVHZXR0ZXJcbiAqL1xuZnVuY3Rpb24gY29tcGlsZVR5cGUgKHZtLCB0YXJnZXQsIGRlc3QsIHR5cGVHZXR0ZXIsIG1ldGEpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVHZXR0ZXIuY2FsbCh2bSlcbiAgY29uc3QgbmV3TWV0YSA9IGV4dGVuZCh7IHR5cGUgfSwgbWV0YSlcbiAgY29uc3QgZnJhZ0Jsb2NrID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG5cbiAgaWYgKGRlc3QuZWxlbWVudCAmJiBkZXN0LmNoaWxkcmVuKSB7XG4gICAgZGVzdC5jaGlsZHJlbi5wdXNoKGZyYWdCbG9jaylcbiAgfVxuXG4gIHdhdGNoKHZtLCB0eXBlR2V0dGVyLCAodmFsdWUpID0+IHtcbiAgICBjb25zdCBuZXdNZXRhID0gZXh0ZW5kKHsgdHlwZTogdmFsdWUgfSwgbWV0YSlcbiAgICByZW1vdmVUYXJnZXQodm0sIGZyYWdCbG9jaywgdHJ1ZSlcbiAgICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbiAgfSlcblxuICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgY29tcG9zZWQgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICovXG5mdW5jdGlvbiBjb21waWxlQ3VzdG9tQ29tcG9uZW50ICh2bSwgY29tcG9uZW50LCB0YXJnZXQsIGRlc3QsIHR5cGUsIG1ldGEpIHtcbiAgY29uc3QgQ3RvciA9IHZtLmNvbnN0cnVjdG9yXG4gIGNvbnN0IHN1YlZtID0gbmV3IEN0b3IodHlwZSwgY29tcG9uZW50LCB2bSwgZGVzdCwgdW5kZWZpbmVkLCB7XG4gICAgJ2hvb2s6aW5pdCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldElkKHZtLCBudWxsLCB0YXJnZXQuaWQsIHRoaXMpXG4gICAgICAvLyBiaW5kIHRlbXBsYXRlIGVhcmxpZXIgYmVjYXVzZSBvZiBsaWZlY3ljbGUgaXNzdWVzXG4gICAgICB0aGlzLl9leHRlcm5hbEJpbmRpbmcgPSB7XG4gICAgICAgIHBhcmVudDogdm0sXG4gICAgICAgIHRlbXBsYXRlOiB0YXJnZXRcbiAgICAgIH1cbiAgICB9LFxuICAgICdob29rOmNyZWF0ZWQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICBiaW5kU3ViVm0odm0sIHRoaXMsIHRhcmdldCwgbWV0YS5yZXBlYXQpXG4gICAgfSxcbiAgICAnaG9vazpyZWFkeSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLl9jb250ZW50KSB7XG4gICAgICAgIGNvbXBpbGVDaGlsZHJlbih2bSwgdGFyZ2V0LCB0aGlzLl9jb250ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCh2bSwgc3ViVm0sIHRhcmdldClcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBlbGVtZW50IGZyb20gdGVtcGxhdGUgYW5kIGF0dGFjaCB0byB0aGUgZGVzdCBpZiBuZWVkZWQuXG4gKiBUaGUgdGltZSB0byBhdHRhY2ggZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBtb2RlIHN0YXR1cyBpcyBub2RlIG9yIHRyZWUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY29tcGlsZU5hdGl2ZUNvbXBvbmVudCAodm0sIHRlbXBsYXRlLCBkZXN0LCB0eXBlKSB7XG4gIGFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyh0ZW1wbGF0ZSlcblxuICBsZXQgZWxlbWVudFxuICBpZiAoZGVzdC5yZWYgPT09ICdfZG9jdW1lbnRFbGVtZW50Jykge1xuICAgIC8vIGlmIGl0cyBwYXJlbnQgaXMgZG9jdW1lbnRFbGVtZW50IHRoZW4gaXQncyBhIGJvZHlcbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGNyZWF0ZSBib2R5IGZvciAke3R5cGV9YClcbiAgICBlbGVtZW50ID0gY3JlYXRlQm9keSh2bSwgdHlwZSlcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGNyZWF0ZSBlbGVtZW50IGZvciAke3R5cGV9YClcbiAgICBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCh2bSwgdHlwZSlcbiAgfVxuXG4gIGlmICghdm0uX3Jvb3RFbCkge1xuICAgIHZtLl9yb290RWwgPSBlbGVtZW50XG4gICAgLy8gYmluZCBldmVudCBlYXJsaWVyIGJlY2F1c2Ugb2YgbGlmZWN5Y2xlIGlzc3Vlc1xuICAgIGNvbnN0IGJpbmRpbmcgPSB2bS5fZXh0ZXJuYWxCaW5kaW5nIHx8IHt9XG4gICAgY29uc3QgdGFyZ2V0ID0gYmluZGluZy50ZW1wbGF0ZVxuICAgIGNvbnN0IHBhcmVudFZtID0gYmluZGluZy5wYXJlbnRcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5ldmVudHMgJiYgcGFyZW50Vm0gJiYgZWxlbWVudCkge1xuICAgICAgZm9yIChjb25zdCB0eXBlIGluIHRhcmdldC5ldmVudHMpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHBhcmVudFZtW3RhcmdldC5ldmVudHNbdHlwZV1dXG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudCh0eXBlLCBiaW5kKGhhbmRsZXIsIHBhcmVudFZtKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJpbmRFbGVtZW50KHZtLCBlbGVtZW50LCB0ZW1wbGF0ZSlcblxuICBpZiAodGVtcGxhdGUuYXR0ciAmJiB0ZW1wbGF0ZS5hdHRyLmFwcGVuZCkgeyAvLyBiYWNrd2FyZCwgYXBwZW5kIHByb3AgaW4gYXR0clxuICAgIHRlbXBsYXRlLmFwcGVuZCA9IHRlbXBsYXRlLmF0dHIuYXBwZW5kXG4gIH1cblxuICBpZiAodGVtcGxhdGUuYXBwZW5kKSB7IC8vIGdpdmUgdGhlIGFwcGVuZCBhdHRyaWJ1dGUgZm9yIGlvcyBhZGFwdGF0aW9uXG4gICAgZWxlbWVudC5hdHRyID0gZWxlbWVudC5hdHRyIHx8IHt9XG4gICAgZWxlbWVudC5hdHRyLmFwcGVuZCA9IHRlbXBsYXRlLmFwcGVuZFxuICB9XG5cbiAgY29uc3QgdHJlZU1vZGUgPSB0ZW1wbGF0ZS5hcHBlbmQgPT09ICd0cmVlJ1xuICBjb25zdCBhcHAgPSB2bS5fYXBwIHx8IHt9XG4gIGlmIChhcHAubGFzdFNpZ25hbCAhPT0gLTEgJiYgIXRyZWVNb2RlKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBhcHBlbmQgc2luZ2xlIG5vZGUgZm9yJywgZWxlbWVudClcbiAgICBhcHAubGFzdFNpZ25hbCA9IGF0dGFjaFRhcmdldCh2bSwgZWxlbWVudCwgZGVzdClcbiAgfVxuICBpZiAoYXBwLmxhc3RTaWduYWwgIT09IC0xKSB7XG4gICAgY29tcGlsZUNoaWxkcmVuKHZtLCB0ZW1wbGF0ZSwgZWxlbWVudClcbiAgfVxuICBpZiAoYXBwLmxhc3RTaWduYWwgIT09IC0xICYmIHRyZWVNb2RlKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBhcHBlbmQgd2hvbGUgdHJlZSBmb3InLCBlbGVtZW50KVxuICAgIGFwcC5sYXN0U2lnbmFsID0gYXR0YWNoVGFyZ2V0KHZtLCBlbGVtZW50LCBkZXN0KVxuICB9XG59XG5cbi8qKlxuICogU2V0IGFsbCBjaGlsZHJlbiB0byBhIGNlcnRhaW4gcGFyZW50IGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICovXG5mdW5jdGlvbiBjb21waWxlQ2hpbGRyZW4gKHZtLCB0ZW1wbGF0ZSwgZGVzdCkge1xuICBjb25zdCBhcHAgPSB2bS5fYXBwIHx8IHt9XG4gIGNvbnN0IGNoaWxkcmVuID0gdGVtcGxhdGUuY2hpbGRyZW5cbiAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgIGNoaWxkcmVuLmV2ZXJ5KChjaGlsZCkgPT4ge1xuICAgICAgY29tcGlsZSh2bSwgY2hpbGQsIGRlc3QpXG4gICAgICByZXR1cm4gYXBwLmxhc3RTaWduYWwgIT09IC0xXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIFdhdGNoIHRoZSBsaXN0IHVwZGF0ZSBhbmQgcmVmcmVzaCB0aGUgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZnJhZ0Jsb2NrIHt2bXMsIGRhdGEsIGNoaWxkcmVufVxuICogQHBhcmFtIHtvYmplY3R9IGluZm8gICAgICB7Z2V0dGVyLCBrZXksIHZhbHVlLCB0cmFja0J5LCBvbGRTdHlsZX1cbiAqL1xuZnVuY3Rpb24gYmluZFJlcGVhdCAodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBpbmZvKSB7XG4gIGNvbnN0IHZtcyA9IGZyYWdCbG9jay52bXNcbiAgY29uc3QgY2hpbGRyZW4gPSBmcmFnQmxvY2suY2hpbGRyZW5cbiAgY29uc3QgeyBnZXR0ZXIsIHRyYWNrQnksIG9sZFN0eWxlIH0gPSBpbmZvXG4gIGNvbnN0IGtleU5hbWUgPSBpbmZvLmtleVxuICBjb25zdCB2YWx1ZU5hbWUgPSBpbmZvLnZhbHVlXG5cbiAgZnVuY3Rpb24gY29tcGlsZUl0ZW0gKGl0ZW0sIGluZGV4LCBjb250ZXh0KSB7XG4gICAgbGV0IG1lcmdlZERhdGFcbiAgICBpZiAob2xkU3R5bGUpIHtcbiAgICAgIG1lcmdlZERhdGEgPSBpdGVtXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgbWVyZ2VkRGF0YVtrZXlOYW1lXSA9IGluZGV4XG4gICAgICAgIGlmICghbWVyZ2VkRGF0YS5oYXNPd25Qcm9wZXJ0eSgnSU5ERVgnKSkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZXJnZWREYXRhLCAnSU5ERVgnLCB7XG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFwiSU5ERVhcIiBpbiByZXBlYXQgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgICAgICAgJ3BsZWFzZSB1c2UgXCIkaW5kZXhcIiBpbnN0ZWFkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBFYWNoIGxpc3QgaXRlbSBtdXN0IGJlIGFuIG9iamVjdCBpbiBvbGQtc3R5bGUgcmVwZWF0LCAnXG4gICAgICAgICAgKyAncGxlYXNlIHVzZSBgcmVwZWF0PXt7diBpbiBsaXN0fX1gIGluc3RlYWQuJylcbiAgICAgICAgbWVyZ2VkRGF0YSA9IHt9XG4gICAgICAgIG1lcmdlZERhdGFba2V5TmFtZV0gPSBpbmRleFxuICAgICAgICBtZXJnZWREYXRhW3ZhbHVlTmFtZV0gPSBpdGVtXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbWVyZ2VkRGF0YSA9IHt9XG4gICAgICBtZXJnZWREYXRhW2tleU5hbWVdID0gaW5kZXhcbiAgICAgIG1lcmdlZERhdGFbdmFsdWVOYW1lXSA9IGl0ZW1cbiAgICB9XG4gICAgY29uc3QgbmV3Q29udGV4dCA9IG1lcmdlQ29udGV4dChjb250ZXh0LCBtZXJnZWREYXRhKVxuICAgIHZtcy5wdXNoKG5ld0NvbnRleHQpXG4gICAgY29tcGlsZShuZXdDb250ZXh0LCB0YXJnZXQsIGZyYWdCbG9jaywgeyByZXBlYXQ6IGl0ZW0gfSlcbiAgfVxuXG4gIGNvbnN0IGxpc3QgPSB3YXRjaEJsb2NrKHZtLCBmcmFnQmxvY2ssIGdldHRlciwgJ3JlcGVhdCcsXG4gICAgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIHRoZSBcInJlcGVhdFwiIGl0ZW0gaGFzIGNoYW5nZWQnLCBkYXRhKVxuICAgICAgaWYgKCFmcmFnQmxvY2sgfHwgIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9sZENoaWxkcmVuID0gY2hpbGRyZW4uc2xpY2UoKVxuICAgICAgY29uc3Qgb2xkVm1zID0gdm1zLnNsaWNlKClcbiAgICAgIGNvbnN0IG9sZERhdGEgPSBmcmFnQmxvY2suZGF0YS5zbGljZSgpXG4gICAgICAvLyAxLiBjb2xsZWN0IGFsbCBuZXcgcmVmcyB0cmFjayBieVxuICAgICAgY29uc3QgdHJhY2tNYXAgPSB7fVxuICAgICAgY29uc3QgcmV1c2VkTWFwID0ge31cbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHJhY2tCeSA/IGl0ZW1bdHJhY2tCeV0gOiAob2xkU3R5bGUgPyBpdGVtW2tleU5hbWVdIDogaW5kZXgpXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoa2V5ID09IG51bGwgfHwga2V5ID09PSAnJykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRyYWNrTWFwW2tleV0gPSBpdGVtXG4gICAgICB9KVxuXG4gICAgICAvLyAyLiByZW1vdmUgdW51c2VkIGVsZW1lbnQgZm9yZWFjaCBvbGQgaXRlbVxuICAgICAgY29uc3QgcmV1c2VkTGlzdCA9IFtdXG4gICAgICBvbGREYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRyYWNrQnkgPyBpdGVtW3RyYWNrQnldIDogKG9sZFN0eWxlID8gaXRlbVtrZXlOYW1lXSA6IGluZGV4KVxuICAgICAgICBpZiAodHJhY2tNYXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHJldXNlZE1hcFtrZXldID0ge1xuICAgICAgICAgICAgaXRlbSwgaW5kZXgsIGtleSxcbiAgICAgICAgICAgIHRhcmdldDogb2xkQ2hpbGRyZW5baW5kZXhdLFxuICAgICAgICAgICAgdm06IG9sZFZtc1tpbmRleF1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV1c2VkTGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmVtb3ZlVGFyZ2V0KHZtLCBvbGRDaGlsZHJlbltpbmRleF0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIDMuIGNyZWF0ZSBuZXcgZWxlbWVudCBmb3JlYWNoIG5ldyBpdGVtXG4gICAgICBjaGlsZHJlbi5sZW5ndGggPSAwXG4gICAgICB2bXMubGVuZ3RoID0gMFxuICAgICAgZnJhZ0Jsb2NrLmRhdGEgPSBkYXRhLnNsaWNlKClcbiAgICAgIGZyYWdCbG9jay51cGRhdGVNYXJrID0gZnJhZ0Jsb2NrLnN0YXJ0XG5cbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHJhY2tCeSA/IGl0ZW1bdHJhY2tCeV0gOiAob2xkU3R5bGUgPyBpdGVtW2tleU5hbWVdIDogaW5kZXgpXG4gICAgICAgIGNvbnN0IHJldXNlZCA9IHJldXNlZE1hcFtrZXldXG4gICAgICAgIGlmIChyZXVzZWQpIHtcbiAgICAgICAgICBpZiAocmV1c2VkLml0ZW0gPT09IHJldXNlZExpc3RbMF0pIHtcbiAgICAgICAgICAgIHJldXNlZExpc3Quc2hpZnQoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldXNlZExpc3QuJHJlbW92ZShyZXVzZWQuaXRlbSlcbiAgICAgICAgICAgIG1vdmVUYXJnZXQodm0sIHJldXNlZC50YXJnZXQsIGZyYWdCbG9jay51cGRhdGVNYXJrLCB0cnVlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKHJldXNlZC50YXJnZXQpXG4gICAgICAgICAgdm1zLnB1c2gocmV1c2VkLnZtKVxuICAgICAgICAgIGlmIChvbGRTdHlsZSkge1xuICAgICAgICAgICAgcmV1c2VkLnZtID0gaXRlbVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldXNlZC52bVt2YWx1ZU5hbWVdID0gaXRlbVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXVzZWQudm1ba2V5TmFtZV0gPSBpbmRleFxuICAgICAgICAgIGZyYWdCbG9jay51cGRhdGVNYXJrID0gcmV1c2VkLnRhcmdldFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbXBpbGVJdGVtKGl0ZW0sIGluZGV4LCB2bSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgZGVsZXRlIGZyYWdCbG9jay51cGRhdGVNYXJrXG4gICAgfVxuICApXG5cbiAgZnJhZ0Jsb2NrLmRhdGEgPSBsaXN0LnNsaWNlKDApXG4gIGxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBjb21waWxlSXRlbShpdGVtLCBpbmRleCwgdm0pXG4gIH0pXG59XG5cbi8qKlxuICogV2F0Y2ggdGhlIGRpc3BsYXkgdXBkYXRlIGFuZCBhZGQvcmVtb3ZlIHRoZSBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9IGZyYWdCbG9ja1xuICogQHBhcmFtICB7b2JqZWN0fSBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGJpbmRTaG93biAodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKSB7XG4gIGNvbnN0IGRpc3BsYXkgPSB3YXRjaEJsb2NrKHZtLCBmcmFnQmxvY2ssIHRhcmdldC5zaG93biwgJ3Nob3duJyxcbiAgICAoZGlzcGxheSkgPT4ge1xuICAgICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gdGhlIFwiaWZcIiBpdGVtIHdhcyBjaGFuZ2VkJywgZGlzcGxheSlcblxuICAgICAgaWYgKCFmcmFnQmxvY2sgfHwgISFmcmFnQmxvY2suZGlzcGxheSA9PT0gISFkaXNwbGF5KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZnJhZ0Jsb2NrLmRpc3BsYXkgPSAhIWRpc3BsYXlcbiAgICAgIGlmIChkaXNwbGF5KSB7XG4gICAgICAgIGNvbXBpbGUodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlbW92ZVRhcmdldCh2bSwgZnJhZ0Jsb2NrLCB0cnVlKVxuICAgICAgfVxuICAgIH1cbiAgKVxuXG4gIGZyYWdCbG9jay5kaXNwbGF5ID0gISFkaXNwbGF5XG4gIGlmIChkaXNwbGF5KSB7XG4gICAgY29tcGlsZSh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG1ldGEpXG4gIH1cbn1cblxuLyoqXG4gKiBXYXRjaCBjYWxjIHZhbHVlIGNoYW5nZXMgYW5kIGFwcGVuZCBjZXJ0YWluIHR5cGUgYWN0aW9uIHRvIGRpZmZlci5cbiAqIEl0IGlzIHVzZWQgZm9yIGlmIG9yIHJlcGVhdCBkYXRhLWJpbmRpbmcgZ2VuZXJhdG9yLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gICBmcmFnQmxvY2tcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBjYWxjXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgdHlwZVxuICogQHBhcmFtICB7ZnVuY3Rpb259IGhhbmRsZXJcbiAqIEByZXR1cm4ge2FueX0gICAgICBpbml0IHZhbHVlIG9mIGNhbGNcbiAqL1xuZnVuY3Rpb24gd2F0Y2hCbG9jayAodm0sIGZyYWdCbG9jaywgY2FsYywgdHlwZSwgaGFuZGxlcikge1xuICBjb25zdCBkaWZmZXIgPSB2bSAmJiB2bS5fYXBwICYmIHZtLl9hcHAuZGlmZmVyXG4gIGNvbnN0IGNvbmZpZyA9IHt9XG4gIGNvbnN0IGRlcHRoID0gKGZyYWdCbG9jay5lbGVtZW50LmRlcHRoIHx8IDApICsgMVxuXG4gIHJldHVybiB3YXRjaCh2bSwgY2FsYywgKHZhbHVlKSA9PiB7XG4gICAgY29uZmlnLmxhdGVzdFZhbHVlID0gdmFsdWVcbiAgICBpZiAoZGlmZmVyICYmICFjb25maWcucmVjb3JkZWQpIHtcbiAgICAgIGRpZmZlci5hcHBlbmQodHlwZSwgZGVwdGgsIGZyYWdCbG9jay5ibG9ja0lkLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhdGVzdFZhbHVlID0gY29uZmlnLmxhdGVzdFZhbHVlXG4gICAgICAgIGhhbmRsZXIobGF0ZXN0VmFsdWUpXG4gICAgICAgIGNvbmZpZy5yZWNvcmRlZCA9IGZhbHNlXG4gICAgICAgIGNvbmZpZy5sYXRlc3RWYWx1ZSA9IHVuZGVmaW5lZFxuICAgICAgfSlcbiAgICB9XG4gICAgY29uZmlnLnJlY29yZGVkID0gdHJ1ZVxuICB9KVxufVxuXG4vKipcbiAqIENsb25lIGEgY29udGV4dCBhbmQgbWVyZ2UgY2VydGFpbiBkYXRhLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gbWVyZ2VkRGF0YVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5mdW5jdGlvbiBtZXJnZUNvbnRleHQgKGNvbnRleHQsIG1lcmdlZERhdGEpIHtcbiAgY29uc3QgbmV3Q29udGV4dCA9IE9iamVjdC5jcmVhdGUoY29udGV4dClcbiAgbmV3Q29udGV4dC5fZGF0YSA9IG1lcmdlZERhdGFcbiAgaW5pdERhdGEobmV3Q29udGV4dClcbiAgaW5pdENvbXB1dGVkKG5ld0NvbnRleHQpXG4gIG5ld0NvbnRleHQuX3JlYWxQYXJlbnQgPSBjb250ZXh0XG4gIHJldHVybiBuZXdDb250ZXh0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC92bS9jb21waWxlci5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogRGlyZWN0aXZlIFBhcnNlclxuICovXG5cbmltcG9ydCB7IGJpbmQsIHR5cG9mIH0gZnJvbSAnLi4vdXRpbCdcblxuaW1wb3J0IFdhdGNoZXIgZnJvbSAnLi4vY29yZS93YXRjaGVyJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5cbmNvbnN0IHsgbmF0aXZlQ29tcG9uZW50TWFwIH0gPSBjb25maWdcblxuY29uc3QgU0VUVEVSUyA9IHtcbiAgYXR0cjogJ3NldEF0dHInLFxuICBzdHlsZTogJ3NldFN0eWxlJyxcbiAgZXZlbnQ6ICdhZGRFdmVudCdcbn1cblxuLyoqXG4gKiBhcHBseSB0aGUgbmF0aXZlIGNvbXBvbmVudCdzIG9wdGlvbnMoc3BlY2lmaWVkIGJ5IHRlbXBsYXRlLnR5cGUpXG4gKiB0byB0aGUgdGVtcGxhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyAodGVtcGxhdGUpIHtcbiAgY29uc3QgeyB0eXBlIH0gPSB0ZW1wbGF0ZVxuICBjb25zdCBvcHRpb25zID0gbmF0aXZlQ29tcG9uZW50TWFwW3R5cGVdXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbnMpIHtcbiAgICAgIGlmICh0ZW1wbGF0ZVtrZXldID09IG51bGwpIHtcbiAgICAgICAgdGVtcGxhdGVba2V5XSA9IG9wdGlvbnNba2V5XVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwb2YodGVtcGxhdGVba2V5XSkgPT09ICdvYmplY3QnICYmXG4gICAgICAgIHR5cG9mKG9wdGlvbnNba2V5XSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAoY29uc3Qgc3Via2V5IGluIG9wdGlvbnNba2V5XSkge1xuICAgICAgICAgIGlmICh0ZW1wbGF0ZVtrZXldW3N1YmtleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgdGVtcGxhdGVba2V5XVtzdWJrZXldID0gb3B0aW9uc1trZXldW3N1YmtleV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIGFsbCBpZCwgYXR0ciwgY2xhc3NuYW1lcywgc3R5bGUsIGV2ZW50cyB0byBhbiBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kRWxlbWVudCAodm0sIGVsLCB0ZW1wbGF0ZSkge1xuICBzZXRJZCh2bSwgZWwsIHRlbXBsYXRlLmlkLCB2bSlcbiAgc2V0QXR0cih2bSwgZWwsIHRlbXBsYXRlLmF0dHIpXG4gIHNldENsYXNzKHZtLCBlbCwgdGVtcGxhdGUuY2xhc3NMaXN0KVxuICBzZXRTdHlsZSh2bSwgZWwsIHRlbXBsYXRlLnN0eWxlKVxuICBiaW5kRXZlbnRzKHZtLCBlbCwgdGVtcGxhdGUuZXZlbnRzKVxufVxuXG4vKipcbiAqIGJpbmQgYWxsIHByb3BzIHRvIHN1YiB2bSBhbmQgYmluZCBhbGwgc3R5bGUsIGV2ZW50cyB0byB0aGUgcm9vdCBlbGVtZW50XG4gKiBvZiB0aGUgc3ViIHZtIGlmIGl0IGRvZXNuJ3QgaGF2ZSBhIHJlcGxhY2VkIG11bHRpLW5vZGUgZnJhZ21lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmRTdWJWbSAodm0sIHN1YlZtLCB0ZW1wbGF0ZSwgcmVwZWF0SXRlbSkge1xuICBzdWJWbSA9IHN1YlZtIHx8IHt9XG4gIHRlbXBsYXRlID0gdGVtcGxhdGUgfHwge31cblxuICBjb25zdCBvcHRpb25zID0gc3ViVm0uX29wdGlvbnMgfHwge31cblxuICAvLyBiaW5kIHByb3BzXG4gIGxldCBwcm9wcyA9IG9wdGlvbnMucHJvcHNcblxuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wcykpIHtcbiAgICBwcm9wcyA9IHByb3BzLnJlZHVjZSgocmVzdWx0LCB2YWx1ZSkgPT4ge1xuICAgICAgcmVzdWx0W3ZhbHVlXSA9IHRydWVcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9LCB7fSlcbiAgfVxuXG4gIG1lcmdlUHJvcHMocmVwZWF0SXRlbSwgcHJvcHMsIHZtLCBzdWJWbSlcbiAgbWVyZ2VQcm9wcyh0ZW1wbGF0ZS5hdHRyLCBwcm9wcywgdm0sIHN1YlZtKVxufVxuXG4vKipcbiAqIG1lcmdlIGNsYXNzIGFuZCBzdHlsZXMgZnJvbSB2bSB0byBzdWIgdm0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kU3ViVm1BZnRlckluaXRpYWxpemVkICh2bSwgc3ViVm0sIHRlbXBsYXRlKSB7XG4gIG1lcmdlQ2xhc3NTdHlsZSh0ZW1wbGF0ZS5jbGFzc0xpc3QsIHZtLCBzdWJWbSlcbiAgbWVyZ2VTdHlsZSh0ZW1wbGF0ZS5zdHlsZSwgdm0sIHN1YlZtKVxufVxuXG4vKipcbiAqIEJpbmQgcHJvcHMgZnJvbSB2bSB0byBzdWIgdm0gYW5kIHdhdGNoIHRoZWlyIHVwZGF0ZXMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlUHJvcHMgKHRhcmdldCwgcHJvcHMsIHZtLCBzdWJWbSkge1xuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVyblxuICB9XG4gIGZvciAoY29uc3Qga2V5IGluIHRhcmdldCkge1xuICAgIGlmICghcHJvcHMgfHwgcHJvcHNba2V5XSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXRba2V5XVxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHdhdGNoKHZtLCB2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBzdWJWbVtrZXldID0gdlxuICAgICAgICB9KVxuICAgICAgICBzdWJWbVtrZXldID0gcmV0dXJuVmFsdWVcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdWJWbVtrZXldID0gdmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBCaW5kIHN0eWxlIGZyb20gdm0gdG8gc3ViIHZtIGFuZCB3YXRjaCB0aGVpciB1cGRhdGVzLlxuICovXG5mdW5jdGlvbiBtZXJnZVN0eWxlICh0YXJnZXQsIHZtLCBzdWJWbSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiB0YXJnZXQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldFtrZXldXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSB3YXRjaCh2bSwgdmFsdWUsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlmIChzdWJWbS5fcm9vdEVsKSB7XG4gICAgICAgICAgc3ViVm0uX3Jvb3RFbC5zZXRTdHlsZShrZXksIHYpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBzdWJWbS5fcm9vdEVsLnNldFN0eWxlKGtleSwgcmV0dXJuVmFsdWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHN1YlZtLl9yb290RWwpIHtcbiAgICAgICAgc3ViVm0uX3Jvb3RFbC5zZXRTdHlsZShrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEJpbmQgY2xhc3MgJiBzdHlsZSBmcm9tIHZtIHRvIHN1YiB2bSBhbmQgd2F0Y2ggdGhlaXIgdXBkYXRlcy5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VDbGFzc1N0eWxlICh0YXJnZXQsIHZtLCBzdWJWbSkge1xuICBjb25zdCBjc3MgPSB2bS5fb3B0aW9ucyAmJiB2bS5fb3B0aW9ucy5zdHlsZSB8fCB7fVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIXN1YlZtLl9yb290RWwpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGNsYXNzTmFtZSA9ICdAb3JpZ2luYWxSb290RWwnXG4gIGNzc1tjbGFzc05hbWVdID0gc3ViVm0uX3Jvb3RFbC5jbGFzc1N0eWxlXG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3NOYW1lIChsaXN0LCBuYW1lKSB7XG4gICAgaWYgKHR5cG9mKGxpc3QpID09PSAnYXJyYXknKSB7XG4gICAgICBsaXN0LnVuc2hpZnQobmFtZSlcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHZhbHVlID0gd2F0Y2godm0sIHRhcmdldCwgdiA9PiB7XG4gICAgICBhZGRDbGFzc05hbWUodiwgY2xhc3NOYW1lKVxuICAgICAgc2V0Q2xhc3NTdHlsZShzdWJWbS5fcm9vdEVsLCBjc3MsIHYpXG4gICAgfSlcbiAgICBhZGRDbGFzc05hbWUodmFsdWUsIGNsYXNzTmFtZSlcbiAgICBzZXRDbGFzc1N0eWxlKHN1YlZtLl9yb290RWwsIGNzcywgdmFsdWUpXG4gIH1cbiAgZWxzZSBpZiAodGFyZ2V0ICE9IG51bGwpIHtcbiAgICBhZGRDbGFzc05hbWUodGFyZ2V0LCBjbGFzc05hbWUpXG4gICAgc2V0Q2xhc3NTdHlsZShzdWJWbS5fcm9vdEVsLCBjc3MsIHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgaWQgdG8gYW4gZWxlbWVudFxuICogZWFjaCBpZCBpcyB1bmlxdWUgaW4gYSB3aG9sZSB2bVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0SWQgKHZtLCBlbCwgaWQsIHRhcmdldCkge1xuICBjb25zdCBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobWFwLCB7XG4gICAgdm06IHtcbiAgICAgIHZhbHVlOiB0YXJnZXQsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgfSxcbiAgICBlbDoge1xuICAgICAgZ2V0OiAoKSA9PiBlbCB8fCB0YXJnZXQuX3Jvb3RFbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICB9XG4gIH0pXG5cbiAgaWYgKHR5cGVvZiBpZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBpZFxuICAgIGlkID0gaGFuZGxlci5jYWxsKHZtKVxuICAgIGlmIChpZCkge1xuICAgICAgdm0uX2lkc1tpZF0gPSBtYXBcbiAgICB9XG4gICAgd2F0Y2godm0sIGhhbmRsZXIsIChuZXdJZCkgPT4ge1xuICAgICAgaWYgKG5ld0lkKSB7XG4gICAgICAgIHZtLl9pZHNbbmV3SWRdID0gbWFwXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBlbHNlIGlmIChpZCAmJiB0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgdm0uX2lkc1tpZF0gPSBtYXBcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgYXR0ciB0byBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHNldEF0dHIgKHZtLCBlbCwgYXR0cikge1xuICBiaW5kRGlyKHZtLCBlbCwgJ2F0dHInLCBhdHRyKVxufVxuXG5mdW5jdGlvbiBzZXRDbGFzc1N0eWxlIChlbCwgY3NzLCBjbGFzc0xpc3QpIHtcbiAgY29uc3QgY2xhc3NTdHlsZSA9IHt9XG4gIGNvbnN0IGxlbmd0aCA9IGNsYXNzTGlzdC5sZW5ndGhcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBjc3NbY2xhc3NMaXN0W2ldXVxuICAgIGlmIChzdHlsZSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICAgICAgY2xhc3NTdHlsZVtrZXldID0gc3R5bGVba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbC5zZXRDbGFzc1N0eWxlKGNsYXNzU3R5bGUpXG59XG5cbi8qKlxuICogYmluZCBjbGFzc25hbWVzIHRvIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0Q2xhc3MgKHZtLCBlbCwgY2xhc3NMaXN0KSB7XG4gIGlmICh0eXBlb2YgY2xhc3NMaXN0ICE9PSAnZnVuY3Rpb24nICYmICFBcnJheS5pc0FycmF5KGNsYXNzTGlzdCkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc0xpc3QpICYmICFjbGFzc0xpc3QubGVuZ3RoKSB7XG4gICAgZWwuc2V0Q2xhc3NTdHlsZSh7fSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHN0eWxlID0gdm0uX29wdGlvbnMgJiYgdm0uX29wdGlvbnMuc3R5bGUgfHwge31cbiAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHdhdGNoKHZtLCBjbGFzc0xpc3QsIHYgPT4ge1xuICAgICAgc2V0Q2xhc3NTdHlsZShlbCwgc3R5bGUsIHYpXG4gICAgfSlcbiAgICBzZXRDbGFzc1N0eWxlKGVsLCBzdHlsZSwgdmFsdWUpXG4gIH1cbiAgZWxzZSB7XG4gICAgc2V0Q2xhc3NTdHlsZShlbCwgc3R5bGUsIGNsYXNzTGlzdClcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgc3R5bGUgdG8gYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRTdHlsZSAodm0sIGVsLCBzdHlsZSkge1xuICBiaW5kRGlyKHZtLCBlbCwgJ3N0eWxlJywgc3R5bGUpXG59XG5cbi8qKlxuICogYWRkIGFuIGV2ZW50IHR5cGUgYW5kIGhhbmRsZXIgdG8gYW4gZWxlbWVudCBhbmQgZ2VuZXJhdGUgYSBkb20gdXBkYXRlXG4gKi9cbmZ1bmN0aW9uIHNldEV2ZW50ICh2bSwgZWwsIHR5cGUsIGhhbmRsZXIpIHtcbiAgZWwuYWRkRXZlbnQodHlwZSwgYmluZChoYW5kbGVyLCB2bSkpXG59XG5cbi8qKlxuICogYWRkIGFsbCBldmVudHMgb2YgYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBiaW5kRXZlbnRzICh2bSwgZWwsIGV2ZW50cykge1xuICBpZiAoIWV2ZW50cykge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpXG4gIGxldCBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBsZXQgaGFuZGxlciA9IGV2ZW50c1trZXldXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgaGFuZGxlciA9IHZtW2hhbmRsZXJdXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBUaGUgbWV0aG9kIFwiJHtoYW5kbGVyfVwiIGlzIG5vdCBkZWZpbmVkLmApXG4gICAgICB9XG4gICAgfVxuICAgIHNldEV2ZW50KHZtLCBlbCwga2V5LCBoYW5kbGVyKVxuICB9XG59XG5cbi8qKlxuICogc2V0IGEgc2VyaWVzIG9mIG1lbWJlcnMgYXMgYSBraW5kIG9mIGFuIGVsZW1lbnRcbiAqIGZvciBleGFtcGxlOiBzdHlsZSwgYXR0ciwgLi4uXG4gKiBpZiB0aGUgdmFsdWUgaXMgYSBmdW5jdGlvbiB0aGVuIGJpbmQgdGhlIGRhdGEgY2hhbmdlc1xuICovXG5mdW5jdGlvbiBiaW5kRGlyICh2bSwgZWwsIG5hbWUsIGRhdGEpIHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gIGxldCBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBjb25zdCB2YWx1ZSA9IGRhdGFba2V5XVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJpbmRLZXkodm0sIGVsLCBuYW1lLCBrZXksIHZhbHVlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVsW1NFVFRFUlNbbmFtZV1dKGtleSwgdmFsdWUpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogYmluZCBkYXRhIGNoYW5nZXMgdG8gYSBjZXJ0YWluIGtleSB0byBhIG5hbWUgc2VyaWVzIGluIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gYmluZEtleSAodm0sIGVsLCBuYW1lLCBrZXksIGNhbGMpIHtcbiAgY29uc3QgbWV0aG9kTmFtZSA9IFNFVFRFUlNbbmFtZV1cbiAgLy8gd2F0Y2ggdGhlIGNhbGMsIGFuZCByZXR1cm5zIGEgdmFsdWUgYnkgY2FsYy5jYWxsKClcbiAgY29uc3QgdmFsdWUgPSB3YXRjaCh2bSwgY2FsYywgKHZhbHVlKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlciAoKSB7XG4gICAgICBlbFttZXRob2ROYW1lXShrZXksIHZhbHVlKVxuICAgIH1cbiAgICBjb25zdCBkaWZmZXIgPSB2bSAmJiB2bS5fYXBwICYmIHZtLl9hcHAuZGlmZmVyXG4gICAgaWYgKGRpZmZlcikge1xuICAgICAgZGlmZmVyLmFwcGVuZCgnZWxlbWVudCcsIGVsLmRlcHRoLCBlbC5yZWYsIGhhbmRsZXIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaGFuZGxlcigpXG4gICAgfVxuICB9KVxuXG4gIGVsW21ldGhvZE5hbWVdKGtleSwgdmFsdWUpXG59XG5cbi8qKlxuICogd2F0Y2ggYSBjYWxjIGZ1bmN0aW9uIGFuZCBjYWxsYmFjayBpZiB0aGUgY2FsYyB2YWx1ZSBjaGFuZ2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXRjaCAodm0sIGNhbGMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgY2FsYywgZnVuY3Rpb24gKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnICYmIHZhbHVlID09PSBvbGRWYWx1ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNhbGxiYWNrKHZhbHVlKVxuICB9KVxuXG4gIHJldHVybiB3YXRjaGVyLnZhbHVlXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC92bS9kaXJlY3RpdmUuanNcbiAqKi8iLCIvLyBAdG9kbzogSXQgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgYnkgbmF0aXZlIGZyb20gYHJlZ2lzdGVyQ29tcG9uZW50cygpYC5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmF0aXZlQ29tcG9uZW50TWFwOiB7XG4gICAgdGV4dDogdHJ1ZSxcbiAgICBpbWFnZTogdHJ1ZSxcbiAgICBjb250YWluZXI6IHRydWUsXG4gICAgc2xpZGVyOiB7XG4gICAgICB0eXBlOiAnc2xpZGVyJyxcbiAgICAgIGFwcGVuZDogJ3RyZWUnXG4gICAgfSxcbiAgICBjZWxsOiB7XG4gICAgICB0eXBlOiAnY2VsbCcsXG4gICAgICBhcHBlbmQ6ICd0cmVlJ1xuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvY29uZmlnLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IERvY3VtZW50ICYgRWxlbWVudCBIZWxwZXJzLlxuICpcbiAqIHJlcXVpcmVkOlxuICogRG9jdW1lbnQjOiBjcmVhdGVFbGVtZW50LCBjcmVhdGVDb21tZW50LCBnZXRSZWZcbiAqIEVsZW1lbnQjOiBhcHBlbmRDaGlsZCwgaW5zZXJ0QmVmb3JlLCByZW1vdmVDaGlsZCwgbmV4dFNpYmxpbmdcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIGJvZHkgYnkgdHlwZVxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm9keSAodm0sIHR5cGUpIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgcmV0dXJuIGRvYy5jcmVhdGVCb2R5KHR5cGUpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGVsZW1lbnQgYnkgdHlwZVxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAodm0sIHR5cGUpIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgcmV0dXJuIGRvYy5jcmVhdGVFbGVtZW50KHR5cGUpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBmcmFnIGJsb2NrIGZvciBhbiBlbGVtZW50LlxuICogVGhlIGZyYWcgYmxvY2sgaGFzIGEgc3RhcnRlciwgZW5kZXIgYW5kIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJsb2NrICh2bSwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydCA9IGNyZWF0ZUJsb2NrU3RhcnQodm0pXG4gIGNvbnN0IGVuZCA9IGNyZWF0ZUJsb2NrRW5kKHZtKVxuICBjb25zdCBibG9ja0lkID0gbGFzdGVzdEJsb2NrSWQrK1xuICBpZiAoZWxlbWVudC5lbGVtZW50KSB7XG4gICAgbGV0IHVwZGF0ZU1hcmsgPSBlbGVtZW50LnVwZGF0ZU1hcmtcbiAgICBpZiAodXBkYXRlTWFyaykge1xuICAgICAgaWYgKHVwZGF0ZU1hcmsuZWxlbWVudCkge1xuICAgICAgICB1cGRhdGVNYXJrID0gdXBkYXRlTWFyay5lbmRcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRBZnRlcihlbmQsIHVwZGF0ZU1hcmspXG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QWZ0ZXIoc3RhcnQsIHVwZGF0ZU1hcmspXG4gICAgICBlbGVtZW50LnVwZGF0ZU1hcmsgPSBlbmRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHN0YXJ0LCBlbGVtZW50LmVuZClcbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRCZWZvcmUoZW5kLCBlbGVtZW50LmVuZClcbiAgICB9XG4gICAgZWxlbWVudCA9IGVsZW1lbnQuZWxlbWVudFxuICB9XG4gIGVsc2Uge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3RhcnQpXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbmQpXG4gIH1cbiAgcmV0dXJuIHsgc3RhcnQsIGVuZCwgZWxlbWVudCwgYmxvY2tJZCB9XG59XG5cbmxldCBsYXN0ZXN0QmxvY2tJZCA9IDFcblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGJsb2NrIHN0YXJ0ZXIuXG4gKiBVc2luZyB0aGlzLl9hcHAuZG9jXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrU3RhcnQgKHZtKSB7XG4gIGNvbnN0IGRvYyA9IHZtLl9hcHAuZG9jXG4gIGNvbnN0IGFuY2hvciA9IGRvYy5jcmVhdGVDb21tZW50KCdzdGFydCcpXG4gIHJldHVybiBhbmNob3Jcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGJsb2NrIGVuZGVyLlxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICovXG5mdW5jdGlvbiBjcmVhdGVCbG9ja0VuZCAodm0pIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgY29uc3QgYW5jaG9yID0gZG9jLmNyZWF0ZUNvbW1lbnQoJ2VuZCcpXG4gIHJldHVybiBhbmNob3Jcbn1cblxuLyoqXG4gKiBBdHRhY2ggdGFyZ2V0IHRvIGEgY2VydGFpbiBkZXN0IHVzaW5nIGFwcGVuZENoaWxkIGJ5IGRlZmF1bHQuXG4gKiBJZiB0aGUgZGVzdCBpcyBhIGZyYWcgYmxvY2sgdGhlbiBpbnNlcnQgYmVmb3JlIHRoZSBlbmRlci5cbiAqIElmIHRoZSB0YXJnZXQgaXMgYSBmcmFnIGJsb2NrIHRoZW4gYXR0YWNoIHRoZSBzdGFydGVyIGFuZCBlbmRlciBpbiBvcmRlci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBkZXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hUYXJnZXQgKHZtLCB0YXJnZXQsIGRlc3QpIHtcbiAgaWYgKGRlc3QuZWxlbWVudCkge1xuICAgIGNvbnN0IGJlZm9yZSA9IGRlc3QuZW5kXG4gICAgY29uc3QgYWZ0ZXIgPSBkZXN0LnVwZGF0ZU1hcmtcbiAgICAvLyBwdXNoIG5ldyB0YXJnZXQgZm9yIHdhdGNoIGxpc3QgdXBkYXRlIGxhdGVyXG4gICAgaWYgKGRlc3QuY2hpbGRyZW4pIHtcbiAgICAgIGRlc3QuY2hpbGRyZW4ucHVzaCh0YXJnZXQpXG4gICAgfVxuICAgIC8vIGZvciBjaGVjayByZXBlYXQgY2FzZVxuICAgIGlmIChhZnRlcikge1xuICAgICAgY29uc3Qgc2lnbmFsID0gbW92ZVRhcmdldCh2bSwgdGFyZ2V0LCBhZnRlcilcbiAgICAgIGRlc3QudXBkYXRlTWFyayA9IHRhcmdldC5lbGVtZW50ID8gdGFyZ2V0LmVuZCA6IHRhcmdldFxuICAgICAgcmV0dXJuIHNpZ25hbFxuICAgIH1cbiAgICBlbHNlIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgICAgZGVzdC5lbGVtZW50Lmluc2VydEJlZm9yZSh0YXJnZXQuc3RhcnQsIGJlZm9yZSlcbiAgICAgIGRlc3QuZWxlbWVudC5pbnNlcnRCZWZvcmUodGFyZ2V0LmVuZCwgYmVmb3JlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkZXN0LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRhcmdldCwgYmVmb3JlKVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICAgIGRlc3QuYXBwZW5kQ2hpbGQodGFyZ2V0LnN0YXJ0KVxuICAgICAgZGVzdC5hcHBlbmRDaGlsZCh0YXJnZXQuZW5kKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkZXN0LmFwcGVuZENoaWxkKHRhcmdldClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIHRhcmdldCBiZWZvcmUgYSBjZXJ0YWluIGVsZW1lbnQuIFRoZSB0YXJnZXQgbWF5YmUgYmxvY2sgb3IgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUYXJnZXQgKHZtLCB0YXJnZXQsIGFmdGVyKSB7XG4gIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgIHJldHVybiBtb3ZlQmxvY2sodGFyZ2V0LCBhZnRlcilcbiAgfVxuICByZXR1cm4gbW92ZUVsZW1lbnQodGFyZ2V0LCBhZnRlcilcbn1cblxuLyoqXG4gKiBNb3ZlIGVsZW1lbnQgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZnVuY3Rpb24gbW92ZUVsZW1lbnQgKGVsZW1lbnQsIGFmdGVyKSB7XG4gIGNvbnN0IHBhcmVudCA9IGFmdGVyLnBhcmVudE5vZGVcbiAgaWYgKHBhcmVudCkge1xuICAgIHJldHVybiBwYXJlbnQuaW5zZXJ0QWZ0ZXIoZWxlbWVudCwgYWZ0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIGFsbCBlbGVtZW50cyBvZiB0aGUgYmxvY2sgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtvYmplY3R9IGJlZm9yZVxuICovXG5mdW5jdGlvbiBtb3ZlQmxvY2sgKGZyYWdCbG9jaywgYWZ0ZXIpIHtcbiAgY29uc3QgcGFyZW50ID0gYWZ0ZXIucGFyZW50Tm9kZVxuXG4gIGlmIChwYXJlbnQpIHtcbiAgICBsZXQgZWwgPSBmcmFnQmxvY2suc3RhcnRcbiAgICBsZXQgc2lnbmFsXG4gICAgY29uc3QgZ3JvdXAgPSBbZWxdXG5cbiAgICB3aGlsZSAoZWwgJiYgZWwgIT09IGZyYWdCbG9jay5lbmQpIHtcbiAgICAgIGVsID0gZWwubmV4dFNpYmxpbmdcbiAgICAgIGdyb3VwLnB1c2goZWwpXG4gICAgfVxuXG4gICAgbGV0IHRlbXAgPSBhZnRlclxuICAgIGdyb3VwLmV2ZXJ5KChlbCkgPT4ge1xuICAgICAgc2lnbmFsID0gcGFyZW50Lmluc2VydEFmdGVyKGVsLCB0ZW1wKVxuICAgICAgdGVtcCA9IGVsXG4gICAgICByZXR1cm4gc2lnbmFsICE9PSAtMVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2lnbmFsXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGFyZ2V0IGZyb20gRE9NIHRyZWUuXG4gKiBJZiB0aGUgdGFyZ2V0IGlzIGEgZnJhZyBibG9jayB0aGVuIGNhbGwgX3JlbW92ZUJsb2NrXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhcmdldCAodm0sIHRhcmdldCwgcHJlc2VydmVCbG9jayA9IGZhbHNlKSB7XG4gIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgIHJlbW92ZUJsb2NrKHRhcmdldCwgcHJlc2VydmVCbG9jaylcbiAgfVxuICBlbHNlIHtcbiAgICByZW1vdmVFbGVtZW50KHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGNlcnRhaW4gZWxlbWVudC5cbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICovXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50ICh0YXJnZXQpIHtcbiAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGVcblxuICBpZiAocGFyZW50KSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGZyYWcgYmxvY2suXG4gKiBUaGUgc2Vjb25kIHBhcmFtIGRlY2lkZXMgd2hldGhlciB0aGUgYmxvY2sgc2VsZiBzaG91bGQgYmUgcmVtb3ZlZCB0b28uXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtCb29sZWFufSBwcmVzZXJ2ZUJsb2NrPWZhbHNlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUJsb2NrIChmcmFnQmxvY2ssIHByZXNlcnZlQmxvY2sgPSBmYWxzZSkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBsZXQgZWwgPSBmcmFnQmxvY2suc3RhcnQubmV4dFNpYmxpbmdcblxuICB3aGlsZSAoZWwgJiYgZWwgIT09IGZyYWdCbG9jay5lbmQpIHtcbiAgICByZXN1bHQucHVzaChlbClcbiAgICBlbCA9IGVsLm5leHRTaWJsaW5nXG4gIH1cblxuICBpZiAoIXByZXNlcnZlQmxvY2spIHtcbiAgICByZW1vdmVFbGVtZW50KGZyYWdCbG9jay5zdGFydClcbiAgfVxuICByZXN1bHQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICByZW1vdmVFbGVtZW50KGVsKVxuICB9KVxuICBpZiAoIXByZXNlcnZlQmxvY2spIHtcbiAgICByZW1vdmVFbGVtZW50KGZyYWdCbG9jay5lbmQpXG4gIH1cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvdm0vZG9tLWhlbHBlci5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogRXZlcnl0aGluZyBhYm91dCBjb21wb25lbnQgZXZlbnQgd2hpY2ggaW5jbHVkZXMgZXZlbnQgb2JqZWN0LCBldmVudCBsaXN0ZW5lcixcbiAqIGV2ZW50IGVtaXR0ZXIgYW5kIGxpZmVjeWNsZSBob29rcy5cbiAqL1xuXG4vKipcbiAqIEV2ZW50IG9iamVjdCBkZWZpbml0aW9uLiBBbiBldmVudCBvYmplY3QgaGFzIGB0eXBlYCwgYHRpbWVzdGFtcGAgYW5kXG4gKiBgZGV0YWlsYCBmcm9tIHdoaWNoIGEgY29tcG9uZW50IGVtaXQuIFRoZSBldmVudCBvYmplY3QgY291bGQgYmUgZGlzcGF0Y2hlZCB0b1xuICogcGFyZW50cyBvciBicm9hZGNhc3RlZCB0byBjaGlsZHJlbiBleGNlcHQgYHRoaXMuc3RvcCgpYCBpcyBjYWxsZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHthbnl9ICAgIGRldGFpbFxuICovXG5mdW5jdGlvbiBFdnQgKHR5cGUsIGRldGFpbCkge1xuICBpZiAoZGV0YWlsIGluc3RhbmNlb2YgRXZ0KSB7XG4gICAgcmV0dXJuIGRldGFpbFxuICB9XG5cbiAgdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpXG4gIHRoaXMuZGV0YWlsID0gZGV0YWlsXG4gIHRoaXMudHlwZSA9IHR5cGVcblxuICBsZXQgc2hvdWxkU3RvcCA9IGZhbHNlXG5cbiAgLyoqXG4gICAqIHN0b3AgZGlzcGF0Y2ggYW5kIGJyb2FkY2FzdFxuICAgKi9cbiAgdGhpcy5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHNob3VsZFN0b3AgPSB0cnVlXG4gIH1cblxuICAvKipcbiAgICogY2hlY2sgaWYgaXQgY2FuJ3QgYmUgZGlzcGF0Y2hlZCBvciBicm9hZGNhc3RlZFxuICAgKi9cbiAgdGhpcy5oYXNTdG9wcGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzaG91bGRTdG9wXG4gIH1cbn1cblxuLyoqXG4gKiBFbWl0IGFuIGV2ZW50IGJ1dCBub3QgYnJvYWRjYXN0IGRvd24gb3IgZGlzcGF0Y2ggdXAuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSAge2FueX0gICAgZGV0YWlsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkZW1pdCAodHlwZSwgZGV0YWlsKSB7XG4gIGNvbnN0IGV2ZW50cyA9IHRoaXMuX3ZtRXZlbnRzXG4gIGNvbnN0IGhhbmRsZXJMaXN0ID0gZXZlbnRzW3R5cGVdXG4gIGlmIChoYW5kbGVyTGlzdCkge1xuICAgIGNvbnN0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICAgIGhhbmRsZXJMaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBldnQpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIEVtaXQgYW4gZXZlbnQgYW5kIGRpc3BhdGNoIGl0IHVwLlxuICogQHBhcmFtICB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0gIHthbnl9ICAgIGRldGFpbFxuICovXG5leHBvcnQgZnVuY3Rpb24gJGRpc3BhdGNoICh0eXBlLCBkZXRhaWwpIHtcbiAgY29uc3QgZXZ0ID0gbmV3IEV2dCh0eXBlLCBkZXRhaWwpXG4gIHRoaXMuJGVtaXQodHlwZSwgZXZ0KVxuXG4gIGlmICghZXZ0Lmhhc1N0b3BwZWQoKSAmJiB0aGlzLl9wYXJlbnQgJiYgdGhpcy5fcGFyZW50LiRkaXNwYXRjaCkge1xuICAgIHRoaXMuX3BhcmVudC4kZGlzcGF0Y2godHlwZSwgZXZ0KVxuICB9XG59XG5cbi8qKlxuICogRW1pdCBhbiBldmVudCBhbmQgYnJvYWRjYXN0IGl0IGRvd24uXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSAge2FueX0gICAgZGV0YWlsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkYnJvYWRjYXN0ICh0eXBlLCBkZXRhaWwpIHtcbiAgY29uc3QgZXZ0ID0gbmV3IEV2dCh0eXBlLCBkZXRhaWwpXG4gIHRoaXMuJGVtaXQodHlwZSwgZXZ0KVxuXG4gIGlmICghZXZ0Lmhhc1N0b3BwZWQoKSAmJiB0aGlzLl9jaGlsZHJlblZtcykge1xuICAgIHRoaXMuX2NoaWxkcmVuVm1zLmZvckVhY2goKHN1YlZtKSA9PiB7XG4gICAgICBzdWJWbS4kYnJvYWRjYXN0KHR5cGUsIGV2dClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogQWRkIGV2ZW50IGxpc3RlbmVyLlxuICogQHBhcmFtICB7c3RyaW5nfSAgIHR5cGVcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBoYW5kbGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkb24gKHR5cGUsIGhhbmRsZXIpIHtcbiAgaWYgKCF0eXBlIHx8IHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgZXZlbnRzID0gdGhpcy5fdm1FdmVudHNcbiAgY29uc3QgaGFuZGxlckxpc3QgPSBldmVudHNbdHlwZV0gfHwgW11cbiAgaGFuZGxlckxpc3QucHVzaChoYW5kbGVyKVxuICBldmVudHNbdHlwZV0gPSBoYW5kbGVyTGlzdFxuXG4gIC8vIGZpeGVkIG9sZCB2ZXJzaW9uIGxpZmVjeWNsZSBkZXNpZ25cbiAgaWYgKHR5cGUgPT09ICdob29rOnJlYWR5JyAmJiB0aGlzLl9yZWFkeSkge1xuICAgIHRoaXMuJGVtaXQoJ2hvb2s6cmVhZHknKVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVyLlxuICogQHBhcmFtICB7c3RyaW5nfSAgIHR5cGVcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBoYW5kbGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkb2ZmICh0eXBlLCBoYW5kbGVyKSB7XG4gIGlmICghdHlwZSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGV2ZW50cyA9IHRoaXMuX3ZtRXZlbnRzXG4gIGlmICghaGFuZGxlcikge1xuICAgIGRlbGV0ZSBldmVudHNbdHlwZV1cbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBoYW5kbGVyTGlzdCA9IGV2ZW50c1t0eXBlXVxuICBpZiAoIWhhbmRsZXJMaXN0KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaGFuZGxlckxpc3QuJHJlbW92ZShoYW5kbGVyKVxufVxuXG5jb25zdCBMSUZFX0NZQ0xFX1RZUEVTID0gWydpbml0JywgJ2NyZWF0ZWQnLCAncmVhZHknLCAnZGVzdHJveWVkJ11cblxuLyoqXG4gKiBJbml0IGV2ZW50czpcbiAqIDEuIGxpc3RlbiBgZXZlbnRzYCBpbiBjb21wb25lbnQgb3B0aW9ucyAmIGBleHRlcm5hbEV2ZW50c2AuXG4gKiAyLiBiaW5kIGxpZmVjeWNsZSBob29rcy5cbiAqIEBwYXJhbSAge1ZtfSAgICAgdm1cbiAqIEBwYXJhbSAge29iamVjdH0gZXh0ZXJuYWxFdmVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRFdmVudHMgKHZtLCBleHRlcm5hbEV2ZW50cykge1xuICBjb25zdCBvcHRpb25zID0gdm0uX29wdGlvbnMgfHwge31cbiAgY29uc3QgZXZlbnRzID0gb3B0aW9ucy5ldmVudHMgfHwge31cbiAgZm9yIChjb25zdCB0eXBlMSBpbiBldmVudHMpIHtcbiAgICB2bS4kb24odHlwZTEsIGV2ZW50c1t0eXBlMV0pXG4gIH1cbiAgZm9yIChjb25zdCB0eXBlMiBpbiBleHRlcm5hbEV2ZW50cykge1xuICAgIHZtLiRvbih0eXBlMiwgZXh0ZXJuYWxFdmVudHNbdHlwZTJdKVxuICB9XG4gIExJRkVfQ1lDTEVfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgIHZtLiRvbihgaG9vazoke3R5cGV9YCwgb3B0aW9uc1t0eXBlXSlcbiAgfSlcbn1cblxuLyoqXG4gKiBCaW5kIGV2ZW50IHJlbGF0ZWQgbWV0aG9kcyB0byBWaWV3TW9kZWwgaW5zdGFuY2UuXG4gKiBAcGFyYW0gIHtWbX0gdm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1peGluRXZlbnRzICh2bSkge1xuICB2bS4kZW1pdCA9ICRlbWl0XG4gIHZtLiRkaXNwYXRjaCA9ICRkaXNwYXRjaFxuICB2bS4kYnJvYWRjYXN0ID0gJGJyb2FkY2FzdFxuICB2bS4kb24gPSAkb25cbiAgdm0uJG9mZiA9ICRvZmZcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3ZtL2V2ZW50cy5qc1xuICoqLyIsImltcG9ydCBzZW12ZXIgZnJvbSAnc2VtdmVyJ1xuaW1wb3J0IHsgaXNQbGFpbk9iamVjdCwgdHlwb2YgfSBmcm9tICcuLi91dGlsJ1xuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlcnNpb24gc3RyaW5nLlxuICogQHBhcmFtICB7U3RyaW5nfSBWZXJzaW9uLiBpZTogMSwgMS4wLCAxLjAuMFxuICogQHJldHVybiB7U3RyaW5nfSBWZXJzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVWZXJzaW9uICh2KSB7XG4gIGNvbnN0IGlzVmFsaWQgPSBzZW12ZXIudmFsaWQodilcbiAgaWYgKGlzVmFsaWQpIHtcbiAgICByZXR1cm4gdlxuICB9XG5cbiAgdiA9IHR5cGVvZiAodikgPT09ICdzdHJpbmcnID8gdiA6ICcnXG4gIGNvbnN0IHNwbGl0ID0gdi5zcGxpdCgnLicpXG4gIGxldCBpID0gMFxuICBjb25zdCByZXN1bHQgPSBbXVxuXG4gIHdoaWxlIChpIDwgMykge1xuICAgIGNvbnN0IHMgPSB0eXBlb2YgKHNwbGl0W2ldKSA9PT0gJ3N0cmluZycgJiYgc3BsaXRbaV0gPyBzcGxpdFtpXSA6ICcwJ1xuICAgIHJlc3VsdC5wdXNoKHMpXG4gICAgaSsrXG4gIH1cblxuICByZXR1cm4gcmVzdWx0LmpvaW4oJy4nKVxufVxuXG4vKipcbiAqIEdldCBpbmZvcm1hdGlvbnMgZnJvbSBkaWZmZXJlbnQgZXJyb3Iga2V5LiBMaWtlOlxuICogLSBjb2RlXG4gKiAtIGVycm9yTWVzc2FnZVxuICogLSBlcnJvclR5cGVcbiAqIC0gaXNEb3duZ3JhZGVcbiAqIEBwYXJhbSAge3N0cmluZ30ga2V5XG4gKiBAcGFyYW0gIHtzdHJpbmd9IHZhbFxuICogQHBhcmFtICB7c3RyaW5nfSBjcml0ZXJpYVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3IgKGtleSwgdmFsLCBjcml0ZXJpYSkge1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgaXNEb3duZ3JhZGU6IHRydWUsXG4gICAgZXJyb3JUeXBlOiAxLFxuICAgIGNvZGU6IDEwMDBcbiAgfVxuICBjb25zdCBnZXRNc2cgPSBmdW5jdGlvbiAoa2V5LCB2YWwsIGNyaXRlcmlhKSB7XG4gICAgcmV0dXJuICdEb3duZ3JhZGVbJyArIGtleSArICddIDo6IGRldmljZUluZm8gJ1xuICAgICAgKyB2YWwgKyAnIG1hdGNoZWQgY3JpdGVyaWEgJyArIGNyaXRlcmlhXG4gIH1cbiAgY29uc3QgX2tleSA9IGtleS50b0xvd2VyQ2FzZSgpXG5cbiAgcmVzdWx0LmVycm9yTWVzc2FnZSA9IGdldE1zZyhrZXksIHZhbCwgY3JpdGVyaWEpXG5cbiAgaWYgKF9rZXkuaW5kZXhPZignb3N2ZXJzaW9uJykgPj0gMCkge1xuICAgIHJlc3VsdC5jb2RlID0gMTAwMVxuICB9XG4gIGVsc2UgaWYgKF9rZXkuaW5kZXhPZignYXBwdmVyc2lvbicpID49IDApIHtcbiAgICByZXN1bHQuY29kZSA9IDEwMDJcbiAgfVxuICBlbHNlIGlmIChfa2V5LmluZGV4T2YoJ3dlZXh2ZXJzaW9uJykgPj0gMCkge1xuICAgIHJlc3VsdC5jb2RlID0gMTAwM1xuICB9XG4gIGVsc2UgaWYgKF9rZXkuaW5kZXhPZignZGV2aWNlbW9kZWwnKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDA0XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogV0VFWCBmcmFtZXdvcmsgaW5wdXQoZGV2aWNlSW5mbylcbiAqIHtcbiAqICAgcGxhdGZvcm06ICdpT1MnIG9yICdhbmRyb2lkJ1xuICogICBvc1ZlcnNpb246ICcxLjAuMCcgb3IgJzEuMCcgb3IgJzEnXG4gKiAgIGFwcFZlcnNpb246ICcxLjAuMCcgb3IgJzEuMCcgb3IgJzEnXG4gKiAgIHdlZXhWZXJzaW9uOiAnMS4wLjAnIG9yICcxLjAnIG9yICcxJ1xuICogICBkRGV2aWNlTW9kZWw6ICdNT0RFTF9OQU1FJ1xuICogfVxuICpcbiAqIGRvd25ncmFkZSBjb25maWcoY29uZmlnKVxuICoge1xuICogICBpb3M6IHtcbiAqICAgICBvc1ZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGFwcFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIHdlZXhWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICBkZXZpY2VNb2RlbDogWydtb2RlbEEnLCAnbW9kZWxCJywgLi4uXVxuICogICB9LFxuICogICBhbmRyb2lkOiB7XG4gKiAgICAgb3NWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICBhcHBWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICB3ZWV4VmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgZGV2aWNlTW9kZWw6IFsnbW9kZWxBJywgJ21vZGVsQicsIC4uLl1cbiAqICAgfVxuICogfVxuICpcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGRldmljZUluZm8gV2VleCBTREsgZnJhbWV3b3JrIGlucHV0XG4gKiBAcGFyYW0gIHtvYmplY3R9IGNvbmZpZyAgICAgdXNlciBpbnB1dFxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgIHsgaXNEb3duZ3JhZGU6IHRydWUvZmFsc2UsIGVycm9yTWVzc2FnZS4uLiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVjayAoY29uZmlnLCBkZXZpY2VJbmZvKSB7XG4gIGRldmljZUluZm8gPSBkZXZpY2VJbmZvIHx8IGdsb2JhbC5XWEVudmlyb25tZW50XG4gIGRldmljZUluZm8gPSBpc1BsYWluT2JqZWN0KGRldmljZUluZm8pID8gZGV2aWNlSW5mbyA6IHt9XG5cbiAgbGV0IHJlc3VsdCA9IHtcbiAgICBpc0Rvd25ncmFkZTogZmFsc2UgLy8gZGVmYXV0bCBpcyBwYXNzXG4gIH1cblxuICBpZiAodHlwb2YoY29uZmlnKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGxldCBjdXN0b21Eb3duZ3JhZGUgPSBjb25maWcuY2FsbCh0aGlzLCBkZXZpY2VJbmZvLCB7XG4gICAgICBzZW12ZXI6IHNlbXZlcixcbiAgICAgIG5vcm1hbGl6ZVZlcnNpb246IHRoaXMubm9ybWFsaXplVmVyc2lvblxuICAgIH0pXG5cbiAgICBjdXN0b21Eb3duZ3JhZGUgPSAhIWN1c3RvbURvd25ncmFkZVxuXG4gICAgcmVzdWx0ID0gY3VzdG9tRG93bmdyYWRlID8gdGhpcy5nZXRFcnJvcignY3VzdG9tJywgJycsICdjdXN0b20gcGFyYW1zJykgOiByZXN1bHRcbiAgfVxuICBlbHNlIHtcbiAgICBjb25maWcgPSBpc1BsYWluT2JqZWN0KGNvbmZpZykgPyBjb25maWcgOiB7fVxuXG4gICAgY29uc3QgcGxhdGZvcm0gPSBkZXZpY2VJbmZvLnBsYXRmb3JtIHx8ICd1bmtub3cnXG4gICAgY29uc3QgZFBsYXRmb3JtID0gcGxhdGZvcm0udG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGNPYmogPSBjb25maWdbZFBsYXRmb3JtXSB8fCB7fVxuXG4gICAgZm9yIChjb25zdCBpIGluIGRldmljZUluZm8pIHtcbiAgICAgIGNvbnN0IGtleSA9IGlcbiAgICAgIGNvbnN0IGtleUxvd2VyID0ga2V5LnRvTG93ZXJDYXNlKClcbiAgICAgIGNvbnN0IHZhbCA9IGRldmljZUluZm9baV1cbiAgICAgIGNvbnN0IGlzVmVyc2lvbiA9IGtleUxvd2VyLmluZGV4T2YoJ3ZlcnNpb24nKSA+PSAwXG4gICAgICBjb25zdCBpc0RldmljZU1vZGVsID0ga2V5TG93ZXIuaW5kZXhPZignZGV2aWNlbW9kZWwnKSA+PSAwXG4gICAgICBjb25zdCBjcml0ZXJpYSA9IGNPYmpbaV1cblxuICAgICAgaWYgKGNyaXRlcmlhICYmIGlzVmVyc2lvbikge1xuICAgICAgICBjb25zdCBjID0gdGhpcy5ub3JtYWxpemVWZXJzaW9uKGNyaXRlcmlhKVxuICAgICAgICBjb25zdCBkID0gdGhpcy5ub3JtYWxpemVWZXJzaW9uKGRldmljZUluZm9baV0pXG5cbiAgICAgICAgaWYgKHNlbXZlci5zYXRpc2ZpZXMoZCwgYykpIHtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLmdldEVycm9yKGtleSwgdmFsLCBjcml0ZXJpYSlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0RldmljZU1vZGVsKSB7XG4gICAgICAgIGNvbnN0IF9jcml0ZXJpYSA9IHR5cG9mKGNyaXRlcmlhKSA9PT0gJ2FycmF5JyA/IGNyaXRlcmlhIDogW2NyaXRlcmlhXVxuICAgICAgICBpZiAoX2NyaXRlcmlhLmluZGV4T2YodmFsKSA+PSAwKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5nZXRFcnJvcihrZXksIHZhbCwgY3JpdGVyaWEpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9kb3duZ3JhZGUuanNcbiAqKi8iLCJpbXBvcnQge1xuICBpc1dlZXhDb21wb25lbnQsXG4gIGlzV2VleE1vZHVsZSxcbiAgaXNOb3JtYWxNb2R1bGUsXG4gIGlzTnBtTW9kdWxlLFxuICByZW1vdmVXZWV4UHJlZml4LFxuICByZW1vdmVKU1N1cmZpeFxufSBmcm9tICcuLi8uLi91dGlsJ1xuaW1wb3J0IHtcbiAgcmVnaXN0ZXJDdXN0b21Db21wb25lbnQsXG4gIHJlcXVpcmVDdXN0b21Db21wb25lbnQsXG4gIGluaXRNb2R1bGVzXG59IGZyb20gJy4uL3JlZ2lzdGVyJ1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKlxuICogY29tbW9uIG1vZHVsZXMgYXJlIHNoYXJlZCB0byBhbGwgaW5zdGFuY2VzXG4gKiBpdCdzIHZlcnkgZGFuZ2Vyb3VzXG4gKi9cbmxldCBjb21tb25Nb2R1bGVzID0ge31cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDb21tb25Nb2R1bGVzICgpIHtcbiAgY29tbW9uTW9kdWxlcyA9IHt9XG59XG5cbi8qKlxuICogZGVmaW5lKG5hbWUsIGZhY3RvcnkpIGZvciBwcmltYXJ5IHVzYWdlXG4gKiBvclxuICogZGVmaW5lKG5hbWUsIGRlcHMsIGZhY3RvcnkpIGZvciBjb21wYXRpYmlsaXR5XG4gKiBOb3RpY2U6IERPIE5PVCB1c2UgZnVuY3Rpb24gZGVmaW5lKCkge30sXG4gKiBpdCB3aWxsIGNhdXNlIGVycm9yIGFmdGVyIGJ1aWxkZWQgYnkgd2VicGFja1xuICovXG5leHBvcnQgY29uc3QgZGVmaW5lRm4gPSBmdW5jdGlvbiAoYXBwLCBuYW1lLCAuLi5hcmdzKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGRlZmluZSBhIGNvbXBvbmVudCAke25hbWV9YClcblxuICAvLyBhZGFwdCBhcmdzOlxuICAvLyAxLiBuYW1lLCBkZXBzW10sIGZhY3RvcnkoKVxuICAvLyAyLiBuYW1lLCBmYWN0b3J5KClcbiAgLy8gMy4gbmFtZSwgZGVmaW5pdGlvbnt9XG4gIGxldCBmYWN0b3J5LCBkZWZpbml0aW9uXG4gIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICBkZWZpbml0aW9uID0gYXJnc1sxXVxuICB9XG4gIGVsc2Uge1xuICAgIGRlZmluaXRpb24gPSBhcmdzWzBdXG4gIH1cbiAgaWYgKHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZmFjdG9yeSA9IGRlZmluaXRpb25cbiAgICBkZWZpbml0aW9uID0gbnVsbFxuICB9XG5cbiAgLy8gcmVzb2x2ZSBkZWZpbml0aW9uIGZyb20gZmFjdG9yeVxuICBpZiAoZmFjdG9yeSkge1xuICAgIGNvbnN0IHIgPSAobmFtZSkgPT4ge1xuICAgICAgaWYgKGlzV2VleENvbXBvbmVudChuYW1lKSkge1xuICAgICAgICBjb25zdCBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gICAgICAgIHJldHVybiByZXF1aXJlQ3VzdG9tQ29tcG9uZW50KGFwcCwgY2xlYW5OYW1lKVxuICAgICAgfVxuICAgICAgaWYgKGlzV2VleE1vZHVsZShuYW1lKSkge1xuICAgICAgICBjb25zdCBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gICAgICAgIHJldHVybiBhcHAucmVxdWlyZU1vZHVsZShjbGVhbk5hbWUpXG4gICAgICB9XG4gICAgICBpZiAoaXNOb3JtYWxNb2R1bGUobmFtZSkgfHwgaXNOcG1Nb2R1bGUobmFtZSkpIHtcbiAgICAgICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICAgICAgcmV0dXJuIGNvbW1vbk1vZHVsZXNbY2xlYW5OYW1lXVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBtID0geyBleHBvcnRzOiB7fX1cbiAgICBmYWN0b3J5KHIsIG0uZXhwb3J0cywgbSlcbiAgICBkZWZpbml0aW9uID0gbS5leHBvcnRzXG4gIH1cblxuICAvLyBhcHBseSBkZWZpbml0aW9uXG4gIGlmIChpc1dlZXhDb21wb25lbnQobmFtZSkpIHtcbiAgICBjb25zdCBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gICAgcmVnaXN0ZXJDdXN0b21Db21wb25lbnQoYXBwLCBjbGVhbk5hbWUsIGRlZmluaXRpb24pXG4gIH1cbiAgZWxzZSBpZiAoaXNXZWV4TW9kdWxlKG5hbWUpKSB7XG4gICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICAgIGluaXRNb2R1bGVzKHsgW2NsZWFuTmFtZV06IGRlZmluaXRpb24gfSlcbiAgfVxuICBlbHNlIGlmIChpc05vcm1hbE1vZHVsZShuYW1lKSkge1xuICAgIGNvbnN0IGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG4gICAgY29tbW9uTW9kdWxlc1tjbGVhbk5hbWVdID0gZGVmaW5pdGlvblxuICB9XG4gIGVsc2UgaWYgKGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICBpZiAoZGVmaW5pdGlvbi50ZW1wbGF0ZSB8fFxuICAgICAgICBkZWZpbml0aW9uLnN0eWxlIHx8XG4gICAgICAgIGRlZmluaXRpb24ubWV0aG9kcykge1xuICAgICAgLy8gZG93bmdyYWRlIHRvIG9sZCBkZWZpbmUgbWV0aG9kIChkZWZpbmUoJ2NvbXBvbmVudE5hbWUnLCBmYWN0b3J5KSlcbiAgICAgIC8vIHRoZSBleHBvcnRzIGNvbnRhaW4gb25lIGtleSBvZiB0ZW1wbGF0ZSwgc3R5bGUgb3IgbWV0aG9kc1xuICAgICAgLy8gYnV0IGl0IGhhcyByaXNrISEhXG4gICAgICByZWdpc3RlckN1c3RvbUNvbXBvbmVudChhcHAsIGNsZWFuTmFtZSwgZGVmaW5pdGlvbilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb21tb25Nb2R1bGVzW2NsZWFuTmFtZV0gPSBkZWZpbml0aW9uXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyIChhcHAsIHR5cGUsIG9wdGlvbnMpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBSZWdpc3RlciBpcyBkZXByZWNhdGVkLCBwbGVhc2UgaW5zdGFsbCBsYXN0ZXN0IHRyYW5zZm9ybWVyLicpXG4gIHJlZ2lzdGVyQ3VzdG9tQ29tcG9uZW50KGFwcCwgdHlwZSwgb3B0aW9ucylcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9idW5kbGUvZGVmaW5lLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBpbnN0YW5jZSBjb250cm9scyBmcm9tIG5hdGl2ZVxuICpcbiAqIC0gZmlyZSBldmVudFxuICogLSBjYWxsYmFja1xuICogLSByZWZyZXNoXG4gKiAtIGRlc3Ryb3lcbiAqXG4gKiBjb3JyZXNwb25kZWQgd2l0aCB0aGUgQVBJIG9mIGluc3RhbmNlIG1hbmFnZXIgKGZyYW1ld29yay5qcylcbiAqL1xuaW1wb3J0IHsgZXh0ZW5kLCB0eXBvZiB9IGZyb20gJy4uLy4uL3V0aWwnXG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAnLi4vLi4vY29uZmlnJ1xuXG4vKipcbiAqIFJlZnJlc2ggYW4gYXBwIHdpdGggZGF0YSB0byBpdHMgcm9vdCBjb21wb25lbnQgb3B0aW9ucy5cbiAqIEBwYXJhbSAge29iamVjdH0gYXBwXG4gKiBAcGFyYW0gIHthbnl9ICAgIGRhdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2ggKGFwcCwgZGF0YSkge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBSZWZyZXNoIHdpdGhgLCBkYXRhLFxuICAgICAgICAgICAgYGluIGluc3RhbmNlWyR7YXBwLmlkfV1gKVxuICBjb25zdCB2bSA9IGFwcC52bVxuICBpZiAodm0gJiYgZGF0YSkge1xuICAgIC8vIGFwcC5kb2MuY2xvc2UoKVxuICAgIGlmICh0eXBlb2Ygdm0ucmVmcmVzaERhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZtLnJlZnJlc2hEYXRhKGRhdGEpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZXh0ZW5kKHZtLCBkYXRhKVxuICAgIH1cbiAgICB1cGRhdGVBY3Rpb25zKGFwcClcbiAgICBhcHAuZG9jLmxpc3RlbmVyLnJlZnJlc2hGaW5pc2goKVxuICAgIC8vIGFwcC5kb2Mub3BlbigpXG4gICAgcmV0dXJuXG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBkYXRhIFwiJHtkYXRhfVwiYClcbn1cblxuLyoqXG4gKiBEZXN0cm95IGFuIGFwcC5cbiAqIEBwYXJhbSAge29iamVjdH0gYXBwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95IChhcHApIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gRGVzdG9yeSBhbiBpbnN0YW5jZSgke2FwcC5pZH0pYClcblxuICBpZiAoYXBwLnZtKSB7XG4gICAgZGVzdHJveVZtKGFwcC52bSlcbiAgfVxuXG4gIGFwcC5pZCA9ICcnXG4gIGFwcC5vcHRpb25zID0gbnVsbFxuICBhcHAuYmxvY2tzID0gbnVsbFxuICBhcHAudm0gPSBudWxsXG4gIGFwcC5kb2MuZGVzdHJveSgpXG4gIGFwcC5kb2MgPSBudWxsXG4gIGFwcC5jdXN0b21Db21wb25lbnRNYXAgPSBudWxsXG4gIGFwcC5jYWxsYmFja3MgPSBudWxsXG59XG5cbi8qKlxuICogRGVzdHJveSBhbiBWbS5cbiAqIEBwYXJhbSB7b2JqZWN0fSB2bVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveVZtICh2bSkge1xuICBkZWxldGUgdm0uX2FwcFxuICBkZWxldGUgdm0uX2NvbXB1dGVkXG4gIGRlbGV0ZSB2bS5fY3NzXG4gIGRlbGV0ZSB2bS5fZGF0YVxuICBkZWxldGUgdm0uX2lkc1xuICBkZWxldGUgdm0uX21ldGhvZHNcbiAgZGVsZXRlIHZtLl9vcHRpb25zXG4gIGRlbGV0ZSB2bS5fcGFyZW50XG4gIGRlbGV0ZSB2bS5fcGFyZW50RWxcbiAgZGVsZXRlIHZtLl9yb290RWxcblxuICAvLyByZW1vdmUgYWxsIHdhdGNoZXJzXG4gIGlmICh2bS5fd2F0Y2hlcnMpIHtcbiAgICBsZXQgd2F0Y2hlckNvdW50ID0gdm0uX3dhdGNoZXJzLmxlbmd0aFxuICAgIHdoaWxlICh3YXRjaGVyQ291bnQtLSkge1xuICAgICAgdm0uX3dhdGNoZXJzW3dhdGNoZXJDb3VudF0udGVhcmRvd24oKVxuICAgIH1cbiAgICBkZWxldGUgdm0uX3dhdGNoZXJzXG4gIH1cblxuICAvLyBkZXN0cm95IGNoaWxkIHZtcyByZWN1cnNpdmVseVxuICBpZiAodm0uX2NoaWxkcmVuVm1zKSB7XG4gICAgbGV0IHZtQ291bnQgPSB2bS5fY2hpbGRyZW5WbXMubGVuZ3RoXG4gICAgd2hpbGUgKHZtQ291bnQtLSkge1xuICAgICAgZGVzdHJveVZtKHZtLl9jaGlsZHJlblZtc1t2bUNvdW50XSlcbiAgICB9XG4gICAgZGVsZXRlIHZtLl9jaGlsZHJlblZtc1xuICB9XG5cbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gXCJkZXN0cm95ZWRcIiBsaWZlY3ljbGUgaW4gVm0oJHt2bS5fdHlwZX0pYClcbiAgdm0uJGVtaXQoJ2hvb2s6ZGVzdHJveWVkJylcblxuICBkZWxldGUgdm0uX3R5cGVcbiAgZGVsZXRlIHZtLl92bUV2ZW50c1xufVxuXG4vKipcbiAqIEdldCBhIEpTT04gb2JqZWN0IHRvIGRlc2NyaWJlIHRoZSBkb2N1bWVudCBib2R5LlxuICogQHBhcmFtICB7b2JqZWN0fSBhcHBcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3RFbGVtZW50IChhcHApIHtcbiAgY29uc3QgZG9jID0gYXBwLmRvYyB8fCB7fVxuICBjb25zdCBib2R5ID0gZG9jLmJvZHkgfHwge31cbiAgcmV0dXJuIGJvZHkudG9KU09OID8gYm9keS50b0pTT04oKSA6IHt9XG59XG5cbi8qKlxuICogRmlyZSBhbiBldmVudCBmcm9tIHJlbmRlcmVyLiBUaGUgZXZlbnQgaGFzIHR5cGUsIGFuIGV2ZW50IG9iamVjdCBhbmQgYW5cbiAqIGVsZW1lbnQgcmVmLiBJZiB0aGUgZXZlbnQgY29tZXMgd2l0aCBzb21lIHZpcnR1YWwtRE9NIGNoYW5nZXMsIGl0IHNob3VsZFxuICogaGF2ZSBvbmUgbW9yZSBwYXJhbWV0ZXIgdG8gZGVzY3JpYmUgdGhlIGNoYW5nZXMuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwcFxuICogQHBhcmFtICB7c3RyaW5nfSByZWZcbiAqIEBwYXJhbSAge3R5cGV9ICAgdHlwZVxuICogQHBhcmFtICB7b2JqZWN0fSBlXG4gKiBAcGFyYW0gIHtvYmplY3R9IGRvbUNoYW5nZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpcmVFdmVudCAoYXBwLCByZWYsIHR5cGUsIGUsIGRvbUNoYW5nZXMpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gRmlyZSBhIFwiJHt0eXBlfVwiIGV2ZW50IG9uIGFuIGVsZW1lbnQoJHtyZWZ9KSBpbiBpbnN0YW5jZSgke2FwcC5pZH0pYClcbiAgaWYgKEFycmF5LmlzQXJyYXkocmVmKSkge1xuICAgIHJlZi5zb21lKChyZWYpID0+IHtcbiAgICAgIHJldHVybiBhcHAuZmlyZUV2ZW50KHJlZiwgdHlwZSwgZSkgIT09IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBlbCA9IGFwcC5kb2MuZ2V0UmVmKHJlZilcbiAgaWYgKGVsKSB7XG4gICAgLy8gYXBwLmRvYy5jbG9zZSgpXG4gICAgY29uc3QgcmVzdWx0ID0gYXBwLmRvYy5maXJlRXZlbnQoZWwsIHR5cGUsIGUsIGRvbUNoYW5nZXMpXG4gICAgdXBkYXRlQWN0aW9ucyhhcHApXG4gICAgYXBwLmRvYy5saXN0ZW5lci51cGRhdGVGaW5pc2goKVxuICAgIC8vIGFwcC5kb2Mub3BlbigpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgZWxlbWVudCByZWZlcmVuY2UgXCIke3JlZn1cImApXG59XG5cbi8qKlxuICogTWFrZSBhIGNhbGxiYWNrIGZvciBhIGNlcnRhaW4gYXBwLlxuICogQHBhcmFtICB7b2JqZWN0fSAgIGFwcFxuICogQHBhcmFtICB7bnVtYmVyfSAgIGNhbGxiYWNrSWRcbiAqIEBwYXJhbSAge2FueX0gICAgICBkYXRhXG4gKiBAcGFyYW0gIHtib29sZWFufSAgaWZLZWVwQWxpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGxiYWNrIChhcHAsIGNhbGxiYWNrSWQsIGRhdGEsIGlmS2VlcEFsaXZlKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIEludm9rZSBhIGNhbGxiYWNrKCR7Y2FsbGJhY2tJZH0pIHdpdGhgLCBkYXRhLFxuICAgICAgICAgICAgYGluIGluc3RhbmNlKCR7YXBwLmlkfSlgKVxuICBjb25zdCBjYWxsYmFjayA9IGFwcC5jYWxsYmFja3NbY2FsbGJhY2tJZF1cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGFwcC5kb2MuY2xvc2UoKVxuICAgIGNhbGxiYWNrKGRhdGEpXG4gICAgaWYgKHR5cGVvZiBpZktlZXBBbGl2ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgaWZLZWVwQWxpdmUgPT09IGZhbHNlKSB7XG4gICAgICBhcHAuY2FsbGJhY2tzW2NhbGxiYWNrSWRdID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIHVwZGF0ZUFjdGlvbnMoYXBwKVxuICAgIGFwcC5kb2MubGlzdGVuZXIudXBkYXRlRmluaXNoKClcbiAgICAvLyBhcHAuZG9jLm9wZW4oKVxuICAgIHJldHVyblxuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgY2FsbGJhY2sgaWQgXCIke2NhbGxiYWNrSWR9XCJgKVxufVxuXG4vKipcbiAqIENvbGxlY3QgYWxsIHZpcnR1YWwtRE9NIG11dGF0aW9ucyB0b2dldGhlciBhbmQgc2VuZCB0aGVtIHRvIHJlbmRlcmVyLlxuICogQHBhcmFtICB7b2JqZWN0fSBhcHBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFjdGlvbnMgKGFwcCkge1xuICBhcHAuZGlmZmVyLmZsdXNoKClcbiAgY29uc3QgdGFza3MgPSBbXVxuICBpZiAoYXBwLmRvYyAmJiBhcHAuZG9jLmxpc3RlbmVyICYmIGFwcC5kb2MubGlzdGVuZXIudXBkYXRlcy5sZW5ndGgpIHtcbiAgICB0YXNrcy5wdXNoKC4uLmFwcC5kb2MubGlzdGVuZXIudXBkYXRlcylcbiAgICBhcHAuZG9jLmxpc3RlbmVyLnVwZGF0ZXMgPSBbXVxuICB9XG4gIGlmICh0YXNrcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gY2FsbFRhc2tzKGFwcCwgdGFza3MpXG4gIH1cbn1cblxuLyoqXG4gKiBDYWxsIGFsbCB0YXNrcyBmcm9tIGFuIGFwcCB0byByZW5kZXJlciAobmF0aXZlKS5cbiAqIEBwYXJhbSAge29iamVjdH0gYXBwXG4gKiBAcGFyYW0gIHthcnJheX0gIHRhc2tzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxsVGFza3MgKGFwcCwgdGFza3MpIHtcbiAgaWYgKHR5cG9mKHRhc2tzKSAhPT0gJ2FycmF5Jykge1xuICAgIHRhc2tzID0gW3Rhc2tzXVxuICB9XG5cbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2suYXJncyA9IHRhc2suYXJncy5tYXAoYXJnID0+IG5vcm1hbGl6ZShhcmcsIGFwcCkpXG4gIH0pXG5cbiAgcmV0dXJuIHJlbmRlcmVyLnNlbmRUYXNrcyhhcHAuaWQsIHRhc2tzLCAnLTEnKVxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZhbHVlLiBTcGVjaWFsbHksIGlmIHRoZSB2YWx1ZSBpcyBhIGZ1bmN0aW9uLCB0aGVuIGdlbmVyYXRlIGEgZnVuY3Rpb24gaWRcbiAqIGFuZCBzYXZlIGl0IHRvIGBhcHAuY2FsbGJhY2tzYCwgYXQgbGFzdCByZXR1cm4gdGhlIGZ1bmN0aW9uIGlkLlxuICogQHBhcmFtICB7YW55fSAgICAgICAgdlxuICogQHBhcmFtICB7b2JqZWN0fSAgICAgYXBwXG4gKiBAcmV0dXJuIHtwcmltaXRpdmV9XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZSAodiwgYXBwKSB7XG4gIGNvbnN0IHR5cGUgPSB0eXBvZih2KVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgY2FzZSAnbnVsbCc6XG4gICAgICByZXR1cm4gJydcbiAgICBjYXNlICdyZWdleHAnOlxuICAgICAgcmV0dXJuIHYudG9TdHJpbmcoKVxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIHYudG9JU09TdHJpbmcoKVxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBjYXNlICdhcnJheSc6XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmICh2IGluc3RhbmNlb2YgcmVuZGVyZXIuRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdi5yZWZcbiAgICAgIH1cbiAgICAgIHJldHVybiB2XG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgYXBwLmNhbGxiYWNrc1srK2FwcC51aWRdID0gdlxuICAgICAgcmV0dXJuIGFwcC51aWQudG9TdHJpbmcoKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodilcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvYXBwL2N0cmwvbWlzYy5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogV2VleCBBcHAgY29uc3RydWN0b3IgJiBkZWZpbml0aW9uXG4gKi9cblxuaW1wb3J0IERpZmZlciBmcm9tICcuL2RpZmZlcidcbmltcG9ydCByZW5kZXJlciBmcm9tICcuLi9jb25maWcnXG5cbi8qKlxuICogQXBwIGNvbnN0cnVjdG9yIGZvciBXZWV4IGZyYW1ld29yay5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwIChpZCwgb3B0aW9ucykge1xuICB0aGlzLmlkID0gaWRcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICB0aGlzLnZtID0gbnVsbFxuICB0aGlzLmN1c3RvbUNvbXBvbmVudE1hcCA9IHt9XG4gIHRoaXMuY2FsbGJhY2tzID0ge31cbiAgdGhpcy5kb2MgPSBuZXcgcmVuZGVyZXIuRG9jdW1lbnQoXG4gICAgaWQsXG4gICAgdGhpcy5vcHRpb25zLmJ1bmRsZVVybCxcbiAgICBudWxsLFxuICAgIHJlbmRlcmVyLkxpc3RlbmVyXG4gIClcbiAgdGhpcy5kaWZmZXIgPSBuZXcgRGlmZmVyKGlkKVxuICB0aGlzLnVpZCA9IDBcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L2FwcC9pbnN0YW5jZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpZmZlciB7XG4gIGNvbnN0cnVjdG9yIChpZCkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMubWFwID0gW11cbiAgICB0aGlzLmhvb2tzID0gW11cbiAgfVxuICBpc0VtcHR5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAubGVuZ3RoID09PSAwXG4gIH1cbiAgYXBwZW5kICh0eXBlLCBkZXB0aCwgcmVmLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLmhhc1RpbWVyKSB7XG4gICAgICB0aGlzLmhhc1RpbWVyID0gdHJ1ZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFzVGltZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLmZsdXNoKHRydWUpXG4gICAgICB9LCAwKVxuICAgIH1cbiAgICBjb25zdCBtYXAgPSB0aGlzLm1hcFxuICAgIGlmICghbWFwW2RlcHRoXSkge1xuICAgICAgbWFwW2RlcHRoXSA9IHt9XG4gICAgfVxuICAgIGNvbnN0IGdyb3VwID0gbWFwW2RlcHRoXVxuICAgIGlmICghZ3JvdXBbdHlwZV0pIHtcbiAgICAgIGdyb3VwW3R5cGVdID0ge31cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdlbGVtZW50Jykge1xuICAgICAgaWYgKCFncm91cFt0eXBlXVtyZWZdKSB7XG4gICAgICAgIGdyb3VwW3R5cGVdW3JlZl0gPSBbXVxuICAgICAgfVxuICAgICAgZ3JvdXBbdHlwZV1bcmVmXS5wdXNoKGhhbmRsZXIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZ3JvdXBbdHlwZV1bcmVmXSA9IGhhbmRsZXJcbiAgICB9XG4gIH1cbiAgZmx1c2ggKGlzVGltZW91dCkge1xuICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwLnNsaWNlKClcbiAgICB0aGlzLm1hcC5sZW5ndGggPSAwXG4gICAgbWFwLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICBjYWxsVHlwZU1hcChncm91cCwgJ3JlcGVhdCcpXG4gICAgICBjYWxsVHlwZU1hcChncm91cCwgJ3Nob3duJylcbiAgICAgIGNhbGxUeXBlTGlzdChncm91cCwgJ2VsZW1lbnQnKVxuICAgIH0pXG5cbiAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3Muc2xpY2UoKVxuICAgIHRoaXMuaG9va3MubGVuZ3RoID0gMFxuICAgIGhvb2tzLmZvckVhY2goKGZuKSA9PiB7XG4gICAgICBmbigpXG4gICAgfSlcblxuICAgIGlmICghdGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIHRoaXMuZmx1c2goKVxuICAgIH1cbiAgfVxuICB0aGVuIChmbikge1xuICAgIHRoaXMuaG9va3MucHVzaChmbilcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsVHlwZU1hcCAoZ3JvdXAsIHR5cGUpIHtcbiAgY29uc3QgbWFwID0gZ3JvdXBbdHlwZV1cbiAgZm9yIChjb25zdCByZWYgaW4gbWFwKSB7XG4gICAgbWFwW3JlZl0oKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGxUeXBlTGlzdCAoZ3JvdXAsIHR5cGUpIHtcbiAgY29uc3QgbWFwID0gZ3JvdXBbdHlwZV1cbiAgZm9yIChjb25zdCByZWYgaW4gbWFwKSB7XG4gICAgY29uc3QgbGlzdCA9IG1hcFtyZWZdXG4gICAgbGlzdC5mb3JFYWNoKChoYW5kbGVyKSA9PiB7IGhhbmRsZXIoKSB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcHAvZGlmZmVyLmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IGluc3RhbmNlTWFwID0ge31cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9tYXAuanNcbiAqKi8iLCJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7XG4gIHJlZnJlc2gsXG4gIGRlc3Ryb3lcbn0gZnJvbSAnLi4vYXBwL2N0cmwnXG5pbXBvcnQgeyBpbnN0YW5jZU1hcCB9IGZyb20gJy4vbWFwJ1xuaW1wb3J0IHsgY2xlYXJDb21tb25Nb2R1bGVzIH0gZnJvbSAnLi4vYXBwL2J1bmRsZS9kZWZpbmUnXG5cbi8qKlxuICogSW5pdCBjb25maWcgaW5mb3JtYXRpb25zIGZvciBXZWV4IGZyYW1ld29ya1xuICogQHBhcmFtICB7b2JqZWN0fSBjZmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQgKGNmZykge1xuICBjb25maWcuRG9jdW1lbnQgPSBjZmcuRG9jdW1lbnRcbiAgY29uZmlnLkVsZW1lbnQgPSBjZmcuRWxlbWVudFxuICBjb25maWcuQ29tbWVudCA9IGNmZy5Db21tZW50XG4gIGNvbmZpZy5zZW5kVGFza3MgPSBjZmcuc2VuZFRhc2tzXG4gIGNvbmZpZy5MaXN0ZW5lciA9IGNmZy5MaXN0ZW5lclxufVxuXG4vKipcbiAqIFJlZnJlc2ggYSBXZWV4IGluc3RhbmNlIHdpdGggZGF0YS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0gIHtvYmplY3R9IGRhdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hJbnN0YW5jZSAoaWQsIGRhdGEpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpZF1cbiAgbGV0IHJlc3VsdFxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXN1bHQgPSByZWZyZXNoKGluc3RhbmNlLCBkYXRhKVxuICB9XG4gIGVsc2Uge1xuICAgIHJlc3VsdCA9IG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBEZXN0cm95IGEgV2VleCBpbnN0YW5jZS5cbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lJbnN0YW5jZSAoaWQpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpZF1cbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxuICBkZXN0cm95KGluc3RhbmNlKVxuICBjbGVhckNvbW1vbk1vZHVsZXMoKVxuICBkZWxldGUgaW5zdGFuY2VNYXBbaWRdXG4gIHJldHVybiBpbnN0YW5jZU1hcFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvc3RhdGljL2xpZmUuanNcbiAqKi8iLCJpbXBvcnQgVm0gZnJvbSAnLi4vdm0nXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7XG4gIGluaXRNb2R1bGVzLFxuICBpbml0TWV0aG9kc1xufSBmcm9tICcuLi9hcHAvcmVnaXN0ZXInXG5cbmNvbnN0IHtcbiAgbmF0aXZlQ29tcG9uZW50TWFwXG59ID0gY29uZmlnXG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIG5hbWUgb2YgZWFjaCBuYXRpdmUgY29tcG9uZW50LlxuICogQHBhcmFtICB7YXJyYXl9IGNvbXBvbmVudHMgYXJyYXkgb2YgbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnRzIChjb21wb25lbnRzKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGNvbXBvbmVudHMpKSB7XG4gICAgY29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIHJlZ2lzdGVyIChuYW1lKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghbmFtZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbmF0aXZlQ29tcG9uZW50TWFwW25hbWVdID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBuYW1lLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hdGl2ZUNvbXBvbmVudE1hcFtuYW1lLnR5cGVdID0gbmFtZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgbmFtZSBhbmQgbWV0aG9kcyBvZiBlYWNoIG1vZHVsZS5cbiAqIEBwYXJhbSAge29iamVjdH0gbW9kdWxlcyBhIG9iamVjdCBvZiBtb2R1bGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1vZHVsZXMgKG1vZHVsZXMpIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnb2JqZWN0Jykge1xuICAgIGluaXRNb2R1bGVzKG1vZHVsZXMpXG4gIH1cbn1cblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgbmFtZSBhbmQgbWV0aG9kcyBvZiBlYWNoIGFwaS5cbiAqIEBwYXJhbSAge29iamVjdH0gYXBpcyBhIG9iamVjdCBvZiBhcGlzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1ldGhvZHMgKG1ldGhvZHMpIHtcbiAgaWYgKHR5cGVvZiBtZXRob2RzID09PSAnb2JqZWN0Jykge1xuICAgIGluaXRNZXRob2RzKFZtLCBtZXRob2RzKVxuICB9XG59XG5cbi8vIEB0b2RvOiBIYWNrIGZvciB0aGlzIGZyYW1ld29yayBvbmx5LiBXaWxsIGJlIHJlLWRlc2lnbmVkIG9yIHJlbW92ZWQgbGF0ZXIuXG5nbG9iYWwucmVnaXN0ZXJNZXRob2RzID0gcmVnaXN0ZXJNZXRob2RzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9zdGF0aWMvcmVnaXN0ZXIuanNcbiAqKi8iLCJpbXBvcnQgeyBpbnN0YW5jZU1hcCB9IGZyb20gJy4vbWFwJ1xuaW1wb3J0IHtcbiAgZmlyZUV2ZW50LFxuICBjYWxsYmFja1xufSBmcm9tICcuLi9hcHAvY3RybCdcblxuY29uc3QganNIYW5kbGVycyA9IHtcbiAgZmlyZUV2ZW50OiAoaWQsIC4uLmFyZ3MpID0+IHtcbiAgICByZXR1cm4gZmlyZUV2ZW50KGluc3RhbmNlTWFwW2lkXSwgLi4uYXJncylcbiAgfSxcbiAgY2FsbGJhY2s6IChpZCwgLi4uYXJncykgPT4ge1xuICAgIHJldHVybiBjYWxsYmFjayhpbnN0YW5jZU1hcFtpZF0sIC4uLmFyZ3MpXG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHQgY2FsbHMgZnJvbSBuYXRpdmUgKGV2ZW50IG9yIGNhbGxiYWNrKS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0gIHthcnJheX0gdGFza3MgbGlzdCB3aXRoIGBtZXRob2RgIGFuZCBgYXJnc2BcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlY2VpdmVUYXNrcyAoaWQsIHRhc2tzKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaWRdXG4gIGlmIChpbnN0YW5jZSAmJiBBcnJheS5pc0FycmF5KHRhc2tzKSkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXVxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBqc0hhbmRsZXJzW3Rhc2subWV0aG9kXVxuICAgICAgY29uc3QgYXJncyA9IFsuLi50YXNrLmFyZ3NdXG4gICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYXJncy51bnNoaWZ0KGlkKVxuICAgICAgICByZXN1bHRzLnB1c2goaGFuZGxlciguLi5hcmdzKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCIgb3IgdGFza3NgKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL0hhbmtzL0NvZGVzL2dpdGh1Yi93ZWV4L2Rpc3Qvd2VleC1qcy1mcmFtZXdvcmsvc3JjL2RlZmF1bHQvc3RhdGljL2JyaWRnZS5qc1xuICoqLyIsImltcG9ydCB7IGluc3RhbmNlTWFwIH0gZnJvbSAnLi9tYXAnXG5pbXBvcnQge1xuICBnZXRSb290RWxlbWVudFxufSBmcm9tICcuLi9hcHAvY3RybCdcblxuLyoqXG4gKiBHZXQgYSB3aG9sZSBlbGVtZW50IHRyZWUgb2YgYW4gaW5zdGFuY2UgZm9yIGRlYnVnZ2luZy5cbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge29iamVjdH0gYSB2aXJ0dWFsIGRvbSB0cmVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290IChpZCkge1xuICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2lkXVxuICBsZXQgcmVzdWx0XG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJlc3VsdCA9IGdldFJvb3RFbGVtZW50KGluc3RhbmNlKVxuICB9XG4gIGVsc2Uge1xuICAgIHJlc3VsdCA9IG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3NyYy9kZWZhdWx0L3N0YXRpYy9taXNjLmpzXG4gKiovIiwibGV0IGZyYW1ld29ya3NcblxuY29uc3QgdmVyc2lvblJlZ0V4cCA9IC9eXFwvXFwvICooXFx7W15cXH1dKlxcfSkgKlxccj9cXG4vXG5cbi8qKlxuICogRGV0ZWN0IGEgSlMgQnVuZGxlIGNvZGUgYW5kIG1ha2Ugc3VyZSB3aGljaCBmcmFtZXdvcmsgaXQncyBiYXNlZCB0by4gRWFjaCBKU1xuICogQnVuZGxlIHNob3VsZCBtYWtlIHN1cmUgdGhhdCBpdCBzdGFydHMgd2l0aCBhIGxpbmUgb2YgSlNPTiBjb21tZW50IGFuZCBpc1xuICogbW9yZSB0aGF0IG9uZSBsaW5lLlxuICogQHBhcmFtICB7c3RyaW5nfSBjb2RlXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGNoZWNrVmVyc2lvbiAoY29kZSkge1xuICBsZXQgaW5mb1xuICBjb25zdCByZXN1bHQgPSB2ZXJzaW9uUmVnRXhwLmV4ZWMoY29kZSlcbiAgaWYgKHJlc3VsdCkge1xuICAgIHRyeSB7XG4gICAgICBpbmZvID0gSlNPTi5wYXJzZShyZXN1bHRbMV0pXG4gICAgfVxuICAgIGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiBpbmZvXG59XG5cbmNvbnN0IGluc3RhbmNlTWFwID0ge31cblxuLyoqXG4gKiBDaGVjayB3aGljaCBmcmFtZXdvcmsgYSBjZXJ0YWluIEpTIEJ1bmRsZSBjb2RlIGJhc2VkIHRvLiBBbmQgY3JlYXRlIGluc3RhbmNlXG4gKiBieSB0aGlzIGZyYW1ld29yay5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHBhcmFtIHtzdHJpbmd9IGNvZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlIChpZCwgY29kZSwgY29uZmlnLCBkYXRhKSB7XG4gIGxldCBpbmZvID0gaW5zdGFuY2VNYXBbaWRdXG4gIGlmICghaW5mbykge1xuICAgIGluZm8gPSBjaGVja1ZlcnNpb24oY29kZSkgfHwge31cbiAgICBpZiAoIWZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdKSB7XG4gICAgICBpbmZvLmZyYW1ld29yayA9ICdXZWV4J1xuICAgIH1cbiAgICBpbnN0YW5jZU1hcFtpZF0gPSBpbmZvXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9XG4gICAgY29uZmlnLmJ1bmRsZVZlcnNpb24gPSBpbmZvLnZlcnNpb25cbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjcmVhdGUgYW4gJHtpbmZvLmZyYW1ld29ya31AJHtjb25maWcuYnVuZGxlVmVyc2lvbn0gaW5zdGFuY2UgZnJvbSAke2NvbmZpZy5idW5kbGVWZXJzaW9ufWApXG4gICAgcmV0dXJuIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdLmNyZWF0ZUluc3RhbmNlKGlkLCBjb2RlLCBjb25maWcsIGRhdGEpXG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxufVxuXG5jb25zdCBtZXRob2RzID0ge1xuICBjcmVhdGVJbnN0YW5jZVxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIG1ldGhvZHMgd2hpY2ggaW5pdCBlYWNoIGZyYW1ld29ya3MuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICovXG5mdW5jdGlvbiBnZW5Jbml0IChtZXRob2ROYW1lKSB7XG4gIG1ldGhvZHNbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiBmcmFtZXdvcmtzKSB7XG4gICAgICBjb25zdCBmcmFtZXdvcmsgPSBmcmFtZXdvcmtzW25hbWVdXG4gICAgICBpZiAoZnJhbWV3b3JrICYmIGZyYW1ld29ya1ttZXRob2ROYW1lXSkge1xuICAgICAgICBmcmFtZXdvcmtbbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZWdpc3RlciBtZXRob2RzIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGluc3RhbmNlLlxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAqL1xuZnVuY3Rpb24gZ2VuSW5zdGFuY2UgKG1ldGhvZE5hbWUpIHtcbiAgbWV0aG9kc1ttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgY29uc3QgaWQgPSBhcmdzWzBdXG4gICAgY29uc3QgaW5mbyA9IGluc3RhbmNlTWFwW2lkXVxuICAgIGlmIChpbmZvICYmIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdKSB7XG4gICAgICByZXR1cm4gZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya11bbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxuICB9XG59XG5cbi8qKlxuICogQWRhcHQgc29tZSBsZWdhY3kgbWV0aG9kKHMpIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGluc3RhbmNlLiBUaGVzZVxuICogbWV0aG9kcyBzaG91bGQgYmUgZGVwcmVjYXRlZCBhbmQgcmVtb3ZlZCBsYXRlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gbmF0aXZlTWV0aG9kTmFtZVxuICovXG5mdW5jdGlvbiBhZGFwdEluc3RhbmNlIChtZXRob2ROYW1lLCBuYXRpdmVNZXRob2ROYW1lKSB7XG4gIG1ldGhvZHNbbmF0aXZlTWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNvbnN0IGlkID0gYXJnc1swXVxuICAgIGNvbnN0IGluZm8gPSBpbnN0YW5jZU1hcFtpZF1cbiAgICBpZiAoaW5mbyAmJiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXSkge1xuICAgICAgcmV0dXJuIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0IChjb25maWcpIHtcbiAgZnJhbWV3b3JrcyA9IGNvbmZpZy5mcmFtZXdvcmtzIHx8IHt9XG5cbiAgLy8gSW5pdCBlYWNoIGZyYW1ld29yayBieSBgaW5pdGAgbWV0aG9kIGFuZCBgY29uZmlnYCB3aGljaCBjb250YWlucyB0aHJlZVxuICAvLyB2aXJ0dWFsLURPTSBDbGFzczogYERvY3VtZW50YCwgYEVsZW1lbnRgICYgYENvbW1lbnRgLCBhbmQgYSBKUyBicmlkZ2UgbWV0aG9kOlxuICAvLyBgc2VuZFRhc2tzKC4uLmFyZ3MpYC5cbiAgZm9yIChjb25zdCBuYW1lIGluIGZyYW1ld29ya3MpIHtcbiAgICBjb25zdCBmcmFtZXdvcmsgPSBmcmFtZXdvcmtzW25hbWVdXG4gICAgZnJhbWV3b3JrLmluaXQoY29uZmlnKVxuICB9XG5cbiAgLy8gQHRvZG86IFRoZSBtZXRob2QgYHJlZ2lzdGVyTWV0aG9kc2Agd2lsbCBiZSByZS1kZXNpZ25lZCBvciByZW1vdmVkIGxhdGVyLlxuICA7IFsncmVnaXN0ZXJDb21wb25lbnRzJywgJ3JlZ2lzdGVyTW9kdWxlcycsICdyZWdpc3Rlck1ldGhvZHMnXS5mb3JFYWNoKGdlbkluaXQpXG5cbiAgOyBbJ2Rlc3Ryb3lJbnN0YW5jZScsICdyZWZyZXNoSW5zdGFuY2UnLCAncmVjZWl2ZVRhc2tzJywgJ2dldFJvb3QnXS5mb3JFYWNoKGdlbkluc3RhbmNlKVxuXG4gIGFkYXB0SW5zdGFuY2UoJ3JlY2VpdmVUYXNrcycsICdjYWxsSlMnKVxuXG4gIHJldHVybiBtZXRob2RzXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvcnVudGltZS9pbml0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmFtZVwiOiBcIndlZXgtanMtZnJhbWV3b3JrXCIsXG5cdFwidmVyc2lvblwiOiBcIjAuMTUuOFwiLFxuXHRcInN1YnZlcnNpb25cIjoge1xuXHRcdFwiZnJhbWV3b3JrXCI6IFwiMC4xNS44XCIsXG5cdFx0XCJ0cmFuc2Zvcm1lclwiOiBcIj49MC4xLjUgPDAuNFwiXG5cdH0sXG5cdFwiZGVzY3JpcHRpb25cIjogXCJXZWV4IEpTIEZyYW1ld29ya1wiLFxuXHRcImtleXdvcmRzXCI6IFtcblx0XHRcIndlZXhcIixcblx0XHRcIm12dm1cIixcblx0XHRcImphdmFzY3JpcHRcIixcblx0XHRcImh0bWw1XCJcblx0XSxcblx0XCJob21lcGFnZVwiOiBcImh0dHBzOi8vYWxpYmFiYS5naXRodWIuaW8vd2VleFwiLFxuXHRcImJ1Z3NcIjoge1xuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FsaWJhYmEvd2VleC9pc3N1ZXNcIlxuXHR9LFxuXHRcImxpY2Vuc2VcIjogXCJBcGFjaGUtMi4wXCIsXG5cdFwiYXV0aG9yXCI6IFwiSmluamlhbmcgPHpoYW9qaW5qaWFuZ0BtZS5jb20+XCIsXG5cdFwibWFpbnRhaW5lcnNcIjogW1xuXHRcdFwidGVycnlraW5nY2hhIDx0ZXJyeWtpbmdjaGFAZ21haWwuY29tPlwiLFxuXHRcdFwiSXNrZW5IdWFuZyA8aXNrZW5odWFuZ0BnbWFpbC5jb20+XCIsXG5cdFx0XCJ5dWFueWFuIDx5dWFueWFuLmNhb0BnbWFpbC5jb20+XCJcblx0XSxcblx0XCJtYWluXCI6IFwiaW5kZXguanNcIixcblx0XCJyZXBvc2l0b3J5XCI6IHtcblx0XHRcInR5cGVcIjogXCJnaXRcIixcblx0XHRcInVybFwiOiBcImdpdEBnaXRodWIuY29tOmFsaWJhYmEvd2VleC5naXRcIlxuXHR9LFxuXHRcInNjcmlwdHNcIjoge1xuXHRcdFwidGVzdFwiOiBcImVjaG8gXFxcIkVycm9yOiBubyB0ZXN0IHNwZWNpZmllZFxcXCIgJiYgZXhpdCAxXCJcblx0fSxcblx0XCJkZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwiY29yZS1qc1wiOiBcIl4yLjQuMFwiLFxuXHRcdFwic2VtdmVyXCI6IFwiXjUuMS4wXCJcblx0fVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9IYW5rcy9Db2Rlcy9naXRodWIvd2VleC9kaXN0L3dlZXgtanMtZnJhbWV3b3JrL3BhY2thZ2UuanNvblxuICoqIG1vZHVsZSBpZCA9IDExNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IFRoZSBhcGkgZm9yIGludm9raW5nIHdpdGggXCIkXCIgcHJlZml4XG4gKi9cbmltcG9ydCB7IGV4dGVuZCwgdHlwb2YgfSBmcm9tICcuLi91dGlsJ1xuXG4vKipcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIGNvbW1vblxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgdXNlICR2bSBpbnN0ZWFkXG4gKiBmaW5kIHRoZSB2bSBieSBpZFxuICogTm90ZTogdGhlcmUgaXMgb25seSBvbmUgaWQgaW4gd2hvbGUgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtWbX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICQgKGlkKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJCBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIFZtIyR2bSBpbnN0ZWFkJylcbiAgY29uc3QgaW5mbyA9IHRoaXMuX2lkc1tpZF1cbiAgaWYgKGluZm8pIHtcbiAgICByZXR1cm4gaW5mby52bVxuICB9XG59XG5cbi8qKlxuICogZmluZCB0aGUgZWxlbWVudCBieSBpZFxuICogTm90ZTogdGhlcmUgaXMgb25seSBvbmUgaWQgaW4gd2hvbGUgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gJGVsIChpZCkge1xuICBjb25zdCBpbmZvID0gdGhpcy5faWRzW2lkXVxuICBpZiAoaW5mbykge1xuICAgIHJldHVybiBpbmZvLmVsXG4gIH1cbn1cblxuLyoqXG4gKiBmaW5kIHRoZSB2bSBvZiB0aGUgY3VzdG9tIGNvbXBvbmVudCBieSBpZFxuICogTm90ZTogdGhlcmUgaXMgb25seSBvbmUgaWQgaW4gd2hvbGUgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtWbX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICR2bSAoaWQpIHtcbiAgY29uc3QgaW5mbyA9IHRoaXMuX2lkc1tpZF1cbiAgaWYgKGluZm8pIHtcbiAgICByZXR1cm4gaW5mby52bVxuICB9XG59XG5cbi8qKlxuICogRmlyZSB3aGVuIGRpZmZlciByZW5kZXJpbmcgZmluaXNoZWRcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRyZW5kZXJUaGVuIChmbikge1xuICBjb25zdCBhcHAgPSB0aGlzLl9hcHBcbiAgY29uc3QgZGlmZmVyID0gYXBwLmRpZmZlclxuICByZXR1cm4gZGlmZmVyLnRoZW4oKCkgPT4ge1xuICAgIGZuKClcbiAgfSlcbn1cblxuLyoqXG4gKiBzY3JvbGwgYW4gZWxlbWVudCBzcGVjaWZpZWQgYnkgaWQgaW50byB2aWV3LFxuICogbW9yZW92ZXIgc3BlY2lmeSBhIG51bWJlciBvZiBvZmZzZXQgb3B0aW9uYWxseVxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHBhcmFtICB7bnVtYmVyfSBvZmZzZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzY3JvbGxUbyAoaWQsIG9mZnNldCkge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRzY3JvbGxUbyBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL2RvbVxcJyknICtcbiAgICAgICAgICAnLnNjcm9sbFRvKGVsLCBvcHRpb25zKVwiIGluc3RlYWQnKVxuICBjb25zdCBlbCA9IHRoaXMuJGVsKGlkKVxuICBpZiAoZWwpIHtcbiAgICBjb25zdCBkb20gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnZG9tJylcbiAgICBkb20uc2Nyb2xsVG9FbGVtZW50KGVsLnJlZiwgeyBvZmZzZXQ6IG9mZnNldCB9KVxuICB9XG59XG5cbi8qKlxuICogcGVyZm9ybSB0cmFuc2l0aW9uIGFuaW1hdGlvbiBvbiBhbiBlbGVtZW50IHNwZWNpZmllZCBieSBpZFxuICogQHBhcmFtICB7c3RyaW5nfSAgIGlkXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgb3B0aW9uc1xuICogQHBhcmFtICB7b2JqZWN0fSAgIG9wdGlvbnMuc3R5bGVzXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgb3B0aW9ucy5kdXJhdGlvbihtcylcbiAqIEBwYXJhbSAge29iamVjdH0gICBbb3B0aW9ucy50aW1pbmdGdW5jdGlvbl1cbiAqIEBwYXJhbSAge29iamVjdH0gICBbb3B0aW9ucy5kZWxheT0wKG1zKV1cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJHRyYW5zaXRpb24gKGlkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBjb25zdCBlbCA9IHRoaXMuJGVsKGlkKVxuICBpZiAoZWwgJiYgb3B0aW9ucyAmJiBvcHRpb25zLnN0eWxlcykge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdhbmltYXRpb24nKVxuICAgIGFuaW1hdGlvbi50cmFuc2l0aW9uKGVsLnJlZiwgb3B0aW9ucywgKC4uLmFyZ3MpID0+IHtcbiAgICAgIHRoaXMuX3NldFN0eWxlKGVsLCBvcHRpb25zLnN0eWxlcylcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKC4uLmFyZ3MpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIGdldCBzb21lIGNvbmZpZ1xuICogQHJldHVybiB7b2JqZWN0fSBzb21lIGNvbmZpZyBmb3IgYXBwIGluc3RhbmNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gYnVuZGxlVXJsXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGRlYnVnXG4gKiBAcHJvcGVydHkge29iamVjdH0gZW52XG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LndlZXhWZXJzaW9uKGV4LiAxLjAuMClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYuYXBwTmFtZShleC4gVEIvVE0pXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LmFwcFZlcnNpb24oZXguIDUuMC4wKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5wbGF0Zm9ybShleC4gaU9TL0FuZHJvaWQpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52Lm9zVmVyc2lvbihleC4gNy4wLjApXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LmRldmljZU1vZGVsICoqbmF0aXZlIG9ubHkqKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVudi5bZGV2aWNlV2lkdGg9NzUwXVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVudi5kZXZpY2VIZWlnaHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRnZXRDb25maWcgKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGNvbmZpZyA9IGV4dGVuZCh7XG4gICAgZW52OiBnbG9iYWwuV1hFbnZpcm9ubWVudCB8fCB7fVxuICB9LCB0aGlzLl9hcHAub3B0aW9ucylcbiAgaWYgKHR5cG9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gdGhlIGNhbGxiYWNrIG9mIFZtIyRnZXRDb25maWcoY2FsbGJhY2spIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgJ3RoaXMgYXBpIG5vdyBjYW4gZGlyZWN0bHkgUkVUVVJOIGNvbmZpZyBpbmZvLicpXG4gICAgY2FsbGJhY2soY29uZmlnKVxuICB9XG4gIHJldHVybiBjb25maWdcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogcmVxdWVzdCBuZXR3b3JrIHZpYSBodHRwIHByb3RvY29sXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgcGFyYW1zXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzZW5kSHR0cCAocGFyYW1zLCBjYWxsYmFjaykge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRzZW5kSHR0cCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3N0cmVhbVxcJyknICtcbiAgICAgICAgICAnLnNlbmRIdHRwKHBhcmFtcywgY2FsbGJhY2spXCIgaW5zdGVhZCcpXG4gIGNvbnN0IHN0cmVhbSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdzdHJlYW0nKVxuICBzdHJlYW0uc2VuZEh0dHAocGFyYW1zLCBjYWxsYmFjaylcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogb3BlbiBhIHVybFxuICogQHBhcmFtICB7c3RyaW5nfSB1cmxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRvcGVuVVJMICh1cmwpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkb3BlblVSTCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL2V2ZW50XFwnKScgK1xuICAgICAgICAgICcub3BlblVSTCh1cmwpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IGV2ZW50ID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ2V2ZW50JylcbiAgZXZlbnQub3BlblVSTCh1cmwpXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIHNldCBhIHRpdGxlIGZvciBwYWdlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRpdGxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkc2V0VGl0bGUgKHRpdGxlKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJHNldFRpdGxlIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvcGFnZUluZm9cXCcpJyArXG4gICAgICAgICAgJy5zZXRUaXRsZSh0aXRsZSlcIiBpbnN0ZWFkJylcbiAgY29uc3QgcGFnZUluZm8gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgncGFnZUluZm8nKVxuICBwYWdlSW5mby5zZXRUaXRsZSh0aXRsZSlcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXCJyZXF1aXJlKCdAd2VleC1tb2R1bGUvbW9kdWxlTmFtZScpIGluc3RlYWRcIlxuICogaW52b2tlIGEgbmF0aXZlIG1ldGhvZCBieSBzcGVjaWZpbmcgdGhlIG5hbWUgb2YgbW9kdWxlIGFuZCBtZXRob2RcbiAqIEBwYXJhbSAge3N0cmluZ30gbW9kdWxlTmFtZVxuICogQHBhcmFtICB7c3RyaW5nfSBtZXRob2ROYW1lXG4gKiBAcGFyYW0gIHsuLi4qfSB0aGUgcmVzdCBhcmd1bWVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRjYWxsIChtb2R1bGVOYW1lLCBtZXRob2ROYW1lLCAuLi5hcmdzKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJGNhbGwgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9tb2R1bGVOYW1lXFwnKVwiIGluc3RlYWQnKVxuICBjb25zdCBtb2R1bGUgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZShtb2R1bGVOYW1lKVxuICBpZiAobW9kdWxlICYmIG1vZHVsZVttZXRob2ROYW1lXSkge1xuICAgIG1vZHVsZVttZXRob2ROYW1lXSguLi5hcmdzKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvSGFua3MvQ29kZXMvZ2l0aHViL3dlZXgvZGlzdC93ZWV4LWpzLWZyYW1ld29yay9zcmMvZGVmYXVsdC9hcGkvbWV0aG9kcy5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlldyBUaGUgYXBpIGZvciBpbnZva2luZyB3aXRoIFwiJFwiIHByZWZpeFxuICovXG5cbi8qKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogcHJpdmF0ZSBmb3IgYWxpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLyoqXG4gKiBpbnZva2UgdXNlci10cmFjayBvbiBUYW9iYW8gTW9ibGllXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZe+8mmVudGVyLCBjbGljaywgZXhwb3NlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGNvbU5hbWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbVxuKi9cbmV4cG9ydCBmdW5jdGlvbiAkdXNlclRyYWNrKHR5cGUsIG5hbWUsIGNvbU5hbWUsIHBhcmFtKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJHVzZXJUcmFjayBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3VzZXJUcmFja1xcJyknICtcbiAgICAgICAgICAnLmNvbW1pdCh0eXBlLCBuYW1lLCBjb21OYW1lLCBwYXJhbSlcIiBpbnN0ZWFkJylcbiAgY29uc3QgdXNlclRyYWNrID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3VzZXJUcmFjaycpXG4gIHVzZXJUcmFjay5jb21taXQodHlwZSwgbmFtZSwgY29tTmFtZSwgcGFyYW0pXG59XG5cbi8qKlxuICogcmVxdWVzdCBhIHJlc3RmdWxsIGFwaSB2aWEgdGhlIG10b3AgZ2F0ZXdheVxuICogQHBhcmFtICB7b2JqZWN0fSAgIHBhcmFtc1xuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkc2VuZE10b3AocGFyYW1zLCBjYWxsYmFjaykge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRzZW5kTXRvcCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3N0cmVhbVxcJyknICtcbiAgICAgICAgICAnLnNlbmRNdG9wKHBhcmFtcywgY2FsbGJhY2spXCIgaW5zdGVhZCcpXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIGluIG5hdGl2Ze+8jHVzZSB3aW5kdmFuZVxuICAgIGNvbnN0IHdpbmR2YW5lID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3dpbmR2YW5lJylcbiAgICB3aW5kdmFuZS5jYWxsKHtcbiAgICAgIGNsYXNzOiAnTXRvcFdWUGx1Z2luJyxcbiAgICAgIG1ldGhvZDogJ3NlbmQnLFxuICAgICAgZGF0YTogcGFyYW1zXG4gICAgfSwgY2FsbGJhY2spXG4gIH0gZWxzZSB7XG4gICAgLy8gaW4gd2ViIGJyd29zZXLvvIx1c2Ugc3RyZWFtLnNlbmRNdG9wXG4gICAgY29uc3Qgc3RyZWFtID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpXG4gICAgc3RyZWFtLnNlbmRNdG9wKHBhcmFtcywgY2FsbGJhY2spXG4gIH1cbn1cblxuLyoqXG4gKiByZXF1ZXN0IGEgbmF0aXZlIGFwaSB2aWEgd2luZHZhbmUgcHJvdG9jb2xcbiAqIEBwYXJhbSAge29iamVjdH0gICBwYXJhbXNcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJGNhbGxXaW5kdmFuZShwYXJhbXMsIGNhbGxiYWNrKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJGNhbGxXaW5kdmFuZSBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3dpbmR2YW5lXFwnKScgK1xuICAgICAgICAgICcuY2FsbChwYXJhbXMsIGNhbGxiYWNrKVwiIGluc3RlYWQnKVxuICBjb25zdCB3aW5kdmFuZSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCd3aW5kdmFuZScpXG4gIHdpbmR2YW5lLmNhbGwocGFyYW1zLCBjYWxsYmFjaylcbn1cblxuLyoqXG4gKiBzZXQgc3BtIGZvciB0aGUgcGFnZVxuICogQHBhcmFtICB7c3RyaW5nfSBhXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzZXRTcG0oYSwgYikge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRzZXRTcG0gaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9wYWdlSW5mb1xcJyknICtcbiAgICAgICAgICAnLnNldFNwbShhLCBiKVwiIGluc3RlYWQnKVxuICBjb25zdCBwYWdlSW5mbyA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdwYWdlSW5mbycpXG4gIHBhZ2VJbmZvLnNldFNwbShhLCBiKVxufVxuXG4vKipcbiAqIGdldCB0aGUgaW5mb3JtYXRpb24gb2YgdGhlIGN1cnJlbnQgbG9naW5lZCB1c2VyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRnZXRVc2VySW5mbyhjYWxsYmFjaykge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRnZXRVc2VySW5mbyBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3VzZXJcXCcpJyArXG4gICAgICAgICAgJy5nZXRVc2VySW5mbyhjYWxsYmFjaylcIiBpbnN0ZWFkJylcbiAgY29uc3QgdXNlciA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCd1c2VyJylcbiAgdXNlci5nZXRVc2VySW5mbyhjYWxsYmFjaylcbn1cblxuLyoqXG4gKiBwZXJmb3JtIGxvZ2luXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRsb2dpbihjYWxsYmFjaykge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRsb2dpbiBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3VzZXJcXCcpJyArXG4gICAgICAgICAgJy5sb2dpbihjYWxsYmFjaylcIiBpbnN0ZWFkJylcbiAgY29uc3QgdXNlciA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCd1c2VyJylcbiAgdXNlci5sb2dpbihjYWxsYmFjaylcbn1cblxuLyoqXG4gKiBwZXJmb3JtIGxvZ291dFxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkbG9nb3V0KGNhbGxiYWNrKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJGxvZ291dCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3VzZXJcXCcpJyArXG4gICAgICAgICAgJy5sb2dvdXQoY2FsbGJhY2spXCIgaW5zdGVhZCcpXG4gIGNvbnN0IHVzZXIgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgndXNlcicpXG4gIHVzZXIubG9nb3V0KGNhbGxiYWNrKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvYXBpL21ldGhvZHMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9