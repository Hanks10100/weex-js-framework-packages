(this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK: 0.13.20 special Build 20160706');
/******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};
/******/
/******/  // The require function
/******/  function __webpack_require__(moduleId) {
/******/
/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;
/******/
/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      exports: {},
/******/      id: moduleId,
/******/      loaded: false
/******/    };
/******/
/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/    // Flag the module as loaded
/******/    module.loaded = true;
/******/
/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }
/******/
/******/
/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;
/******/
/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;
/******/
/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";
/******/
/******/  // Load entry module and return exports
/******/  return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  __webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(global) {'use strict';
  
  // fix Promise Problem on JSContext of iOS7~8
  // @see https://bugs.webkit.org/show_bug.cgi?id=135866
  global.Promise = null;
  __webpack_require__(3);
  __webpack_require__(23);
  __webpack_require__(49);
  __webpack_require__(53);
  /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 19.1.3.6 Object.prototype.toString()
  
  var classof = __webpack_require__(4),
      test = {};
  test[__webpack_require__(6)('toStringTag')] = 'z';
  if (test + '' != '[object z]') {
    __webpack_require__(10)(Object.prototype, 'toString', function toString() {
      return '[object ' + classof(this) + ']';
    }, true);
  }

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  // getting tag from 19.1.3.6 Object.prototype.toString()
  var cof = __webpack_require__(5),
      TAG = __webpack_require__(6)('toStringTag')
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
/* 5 */
/***/ function(module, exports) {

  "use strict";
  
  var toString = {}.toString;
  
  module.exports = function (it) {
    return toString.call(it).slice(8, -1);
  };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var store = __webpack_require__(7)('wks'),
      uid = __webpack_require__(9),
      _Symbol = __webpack_require__(8).Symbol,
      USE_SYMBOL = typeof _Symbol == 'function';
  
  var $exports = module.exports = function (name) {
    return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
  };
  
  $exports.store = store;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var global = __webpack_require__(8),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function (key) {
    return store[key] || (store[key] = {});
  };

/***/ },
/* 8 */
/***/ function(module, exports) {

  'use strict';
  
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports) {

  'use strict';
  
  var id = 0,
      px = Math.random();
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var global = __webpack_require__(8),
      hide = __webpack_require__(11),
      has = __webpack_require__(21),
      SRC = __webpack_require__(9)('src'),
      TO_STRING = 'toString',
      $toString = Function[TO_STRING],
      TPL = ('' + $toString).split(TO_STRING);
  
  __webpack_require__(22).inspectSource = function (it) {
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var dP = __webpack_require__(12),
      createDesc = __webpack_require__(20);
  module.exports = __webpack_require__(16) ? function (object, key, value) {
    return dP.f(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var anObject = __webpack_require__(13),
      IE8_DOM_DEFINE = __webpack_require__(15),
      toPrimitive = __webpack_require__(19),
      dP = Object.defineProperty;
  
  exports.f = __webpack_require__(16) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var isObject = __webpack_require__(14);
  module.exports = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

/***/ },
/* 14 */
/***/ function(module, exports) {

  'use strict';
  
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
  
  module.exports = function (it) {
    return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
  };

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  module.exports = !__webpack_require__(16) && !__webpack_require__(17)(function () {
    return Object.defineProperty(__webpack_require__(18)('div'), 'a', { get: function get() {
        return 7;
      } }).a != 7;
  });

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  // Thank's IE8 for his funny defineProperty
  module.exports = !__webpack_require__(17)(function () {
    return Object.defineProperty({}, 'a', { get: function get() {
        return 7;
      } }).a != 7;
  });

/***/ },
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var isObject = __webpack_require__(14),
      document = __webpack_require__(8).document
  // in old IE typeof document.createElement is 'object'
  ,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function (it) {
    return is ? document.createElement(it) : {};
  };

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  // 7.1.1 ToPrimitive(input [, PreferredType])
  var isObject = __webpack_require__(14);
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
/* 20 */
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
/* 21 */
/***/ function(module, exports) {

  "use strict";
  
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

/***/ },
/* 22 */
/***/ function(module, exports) {

  'use strict';
  
  var core = module.exports = { version: '2.4.0' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var $at = __webpack_require__(24)(true);
  
  // 21.1.3.27 String.prototype[@@iterator]()
  __webpack_require__(27)(String, 'String', function (iterated) {
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var toInteger = __webpack_require__(25),
      defined = __webpack_require__(26);
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
/* 25 */
/***/ function(module, exports) {

  "use strict";
  
  // 7.1.4 ToInteger
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

/***/ },
/* 26 */
/***/ function(module, exports) {

  "use strict";
  
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var LIBRARY = __webpack_require__(28),
      $export = __webpack_require__(29),
      redefine = __webpack_require__(10),
      hide = __webpack_require__(11),
      has = __webpack_require__(21),
      Iterators = __webpack_require__(32),
      $iterCreate = __webpack_require__(33),
      setToStringTag = __webpack_require__(46),
      getPrototypeOf = __webpack_require__(47),
      ITERATOR = __webpack_require__(6)('iterator'),
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
/* 28 */
/***/ function(module, exports) {

  "use strict";
  
  module.exports = false;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var global = __webpack_require__(8),
      core = __webpack_require__(22),
      hide = __webpack_require__(11),
      redefine = __webpack_require__(10),
      ctx = __webpack_require__(30),
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  // optional / simple context binding
  var aFunction = __webpack_require__(31);
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
/* 31 */
/***/ function(module, exports) {

  'use strict';
  
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

/***/ },
/* 32 */
/***/ function(module, exports) {

  "use strict";
  
  module.exports = {};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var create = __webpack_require__(34),
      descriptor = __webpack_require__(20),
      setToStringTag = __webpack_require__(46),
      IteratorPrototype = {};
  
  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  __webpack_require__(11)(IteratorPrototype, __webpack_require__(6)('iterator'), function () {
    return this;
  });
  
  module.exports = function (Constructor, NAME, next) {
    Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  var anObject = __webpack_require__(13),
      dPs = __webpack_require__(35),
      enumBugKeys = __webpack_require__(44),
      IE_PROTO = __webpack_require__(43)('IE_PROTO'),
      Empty = function Empty() {/* empty */},
      PROTOTYPE = 'prototype';
  
  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var _createDict = function createDict() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = __webpack_require__(18)('iframe'),
        i = enumBugKeys.length,
        gt = '>',
        iframeDocument;
    iframe.style.display = 'none';
    __webpack_require__(45).appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write('<script>document.F=Object</script' + gt);
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var dP = __webpack_require__(12),
      anObject = __webpack_require__(13),
      getKeys = __webpack_require__(36);
  
  module.exports = __webpack_require__(16) ? Object.defineProperties : function defineProperties(O, Properties) {
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
  var $keys = __webpack_require__(37),
      enumBugKeys = __webpack_require__(44);
  
  module.exports = Object.keys || function keys(O) {
    return $keys(O, enumBugKeys);
  };

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var has = __webpack_require__(21),
      toIObject = __webpack_require__(38),
      arrayIndexOf = __webpack_require__(40)(false),
      IE_PROTO = __webpack_require__(43)('IE_PROTO');
  
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  // to indexed object, toObject with fallback for non-array-like ES3 strings
  var IObject = __webpack_require__(39),
      defined = __webpack_require__(26);
  module.exports = function (it) {
    return IObject(defined(it));
  };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var cof = __webpack_require__(5);
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  // false -> Array#indexOf
  // true  -> Array#includes
  var toIObject = __webpack_require__(38),
      toLength = __webpack_require__(41),
      toIndex = __webpack_require__(42);
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  // 7.1.15 ToLength
  var toInteger = __webpack_require__(25),
      min = Math.min;
  module.exports = function (it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var toInteger = __webpack_require__(25),
      max = Math.max,
      min = Math.min;
  module.exports = function (index, length) {
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  };

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var shared = __webpack_require__(7)('keys'),
      uid = __webpack_require__(9);
  module.exports = function (key) {
    return shared[key] || (shared[key] = uid(key));
  };

/***/ },
/* 44 */
/***/ function(module, exports) {

  'use strict';
  
  // IE 8- don't enum bug keys
  module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  module.exports = __webpack_require__(8).document && document.documentElement;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var def = __webpack_require__(12).f,
      has = __webpack_require__(21),
      TAG = __webpack_require__(6)('toStringTag');
  
  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
  };

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
  var has = __webpack_require__(21),
      toObject = __webpack_require__(48),
      IE_PROTO = __webpack_require__(43)('IE_PROTO'),
      ObjectProto = Object.prototype;
  
  module.exports = Object.getPrototypeOf || function (O) {
    O = toObject(O);
    if (has(O, IE_PROTO)) return O[IE_PROTO];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }return O instanceof Object ? ObjectProto : null;
  };

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  // 7.1.13 ToObject(argument)
  var defined = __webpack_require__(26);
  module.exports = function (it) {
    return Object(defined(it));
  };

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var $iterators = __webpack_require__(50),
      redefine = __webpack_require__(10),
      global = __webpack_require__(8),
      hide = __webpack_require__(11),
      Iterators = __webpack_require__(32),
      wks = __webpack_require__(6),
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var addToUnscopables = __webpack_require__(51),
      step = __webpack_require__(52),
      Iterators = __webpack_require__(32),
      toIObject = __webpack_require__(38);
  
  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  module.exports = __webpack_require__(27)(Array, 'Array', function (iterated, kind) {
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = __webpack_require__(6)('unscopables'),
      ArrayProto = Array.prototype;
  if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(11)(ArrayProto, UNSCOPABLES, {});
  module.exports = function (key) {
    ArrayProto[UNSCOPABLES][key] = true;
  };

/***/ },
/* 52 */
/***/ function(module, exports) {

  "use strict";
  
  module.exports = function (done, value) {
    return { value: value, done: !!done };
  };

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var LIBRARY = __webpack_require__(28),
      global = __webpack_require__(8),
      ctx = __webpack_require__(30),
      classof = __webpack_require__(4),
      $export = __webpack_require__(29),
      isObject = __webpack_require__(14),
      anObject = __webpack_require__(13),
      aFunction = __webpack_require__(31),
      anInstance = __webpack_require__(54),
      forOf = __webpack_require__(55),
      setProto = __webpack_require__(59).set,
      speciesConstructor = __webpack_require__(62),
      task = __webpack_require__(63).set,
      microtask = __webpack_require__(65)(),
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
          FakePromise = (promise.constructor = {})[__webpack_require__(6)('species')] = function (exec) {
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
    Internal.prototype = __webpack_require__(66)($Promise.prototype, {
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
  __webpack_require__(46)($Promise, PROMISE);
  __webpack_require__(67)(PROMISE);
  Wrapper = __webpack_require__(22)[PROMISE];
  
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
  $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(68)(function (iter) {
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
/* 54 */
/***/ function(module, exports) {

  'use strict';
  
  module.exports = function (it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
      throw TypeError(name + ': incorrect invocation!');
    }return it;
  };

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var ctx = __webpack_require__(30),
      call = __webpack_require__(56),
      isArrayIter = __webpack_require__(57),
      anObject = __webpack_require__(13),
      toLength = __webpack_require__(41),
      getIterFn = __webpack_require__(58),
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  // call something on iterator step with safe closing on error
  var anObject = __webpack_require__(13);
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  // check on default Array iterator
  var Iterators = __webpack_require__(32),
      ITERATOR = __webpack_require__(6)('iterator'),
      ArrayProto = Array.prototype;
  
  module.exports = function (it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var classof = __webpack_require__(4),
      ITERATOR = __webpack_require__(6)('iterator'),
      Iterators = __webpack_require__(32);
  module.exports = __webpack_require__(22).getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  var isObject = __webpack_require__(14),
      anObject = __webpack_require__(13);
  var check = function check(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(30)(Function.call, __webpack_require__(60).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var pIE = __webpack_require__(61),
      createDesc = __webpack_require__(20),
      toIObject = __webpack_require__(38),
      toPrimitive = __webpack_require__(19),
      has = __webpack_require__(21),
      IE8_DOM_DEFINE = __webpack_require__(15),
      gOPD = Object.getOwnPropertyDescriptor;
  
  exports.f = __webpack_require__(16) ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = toIObject(O);
    P = toPrimitive(P, true);
    if (IE8_DOM_DEFINE) try {
      return gOPD(O, P);
    } catch (e) {/* empty */}
    if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
  };

/***/ },
/* 61 */
/***/ function(module, exports) {

  "use strict";
  
  exports.f = {}.propertyIsEnumerable;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  // 7.3.20 SpeciesConstructor(O, defaultConstructor)
  var anObject = __webpack_require__(13),
      aFunction = __webpack_require__(31),
      SPECIES = __webpack_require__(6)('species');
  module.exports = function (O, D) {
    var C = anObject(O).constructor,
        S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var ctx = __webpack_require__(30),
      invoke = __webpack_require__(64),
      html = __webpack_require__(45),
      cel = __webpack_require__(18),
      global = __webpack_require__(8),
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
    if (__webpack_require__(5)(process) == 'process') {
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
/* 64 */
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var global = __webpack_require__(8),
      macrotask = __webpack_require__(63).set,
      Observer = global.MutationObserver || global.WebKitMutationObserver,
      process = global.process,
      Promise = global.Promise,
      isNode = __webpack_require__(5)(process) == 'process';
  
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var redefine = __webpack_require__(10);
  module.exports = function (target, src, safe) {
    for (var key in src) {
      redefine(target, key, src[key], safe);
    }return target;
  };

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var global = __webpack_require__(8),
      dP = __webpack_require__(12),
      DESCRIPTORS = __webpack_require__(16),
      SPECIES = __webpack_require__(6)('species');
  
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var ITERATOR = __webpack_require__(6)('iterator'),
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

/***/ }
/******/ ]);




// (this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK: 0.13.10 Build 20160602');
/******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};
/******/
/******/  // The require function
/******/  function __webpack_require__(moduleId) {
/******/
/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;
/******/
/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      exports: {},
/******/      id: moduleId,
/******/      loaded: false
/******/    };
/******/
/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/    // Flag the module as loaded
/******/    module.loaded = true;
/******/
/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }
/******/
/******/
/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;
/******/
/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;
/******/
/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";
/******/
/******/  // Load entry module and return exports
/******/  return __webpack_require__(0);
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
    "version": "0.13.20",
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
