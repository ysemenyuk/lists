/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack://lists/./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n\n//# sourceURL=webpack://lists/./node_modules/lodash/_arrayMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack://lists/./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolToString = symbolProto ? symbolProto.toString : undefined;\n\n/**\n * The base implementation of `_.toString` which doesn't convert nullish\n * values to empty strings.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\nfunction baseToString(value) {\n  // Exit early for strings to avoid a performance hit in some environments.\n  if (typeof value == 'string') {\n    return value;\n  }\n  if (isArray(value)) {\n    // Recursively convert values (susceptible to call stack limits).\n    return arrayMap(value, baseToString) + '';\n  }\n  if (isSymbol(value)) {\n    return symbolToString ? symbolToString.call(value) : '';\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = baseToString;\n\n\n//# sourceURL=webpack://lists/./node_modules/lodash/_baseToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;\n\nmodule.exports = freeGlobal;\n\n\n//# sourceURL=webpack://lists/./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack://lists/./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://lists/./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack://lists/./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack://lists/./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack://lists/./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack://lists/./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseToString = __webpack_require__(/*! ./_baseToString */ \"./node_modules/lodash/_baseToString.js\");\n\n/**\n * Converts `value` to a string. An empty string is returned for `null`\n * and `undefined` values. The sign of `-0` is preserved.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n * @example\n *\n * _.toString(null);\n * // => ''\n *\n * _.toString(-0);\n * // => '-0'\n *\n * _.toString([1, 2, 3]);\n * // => '1,2,3'\n */\nfunction toString(value) {\n  return value == null ? '' : baseToString(value);\n}\n\nmodule.exports = toString;\n\n\n//# sourceURL=webpack://lists/./node_modules/lodash/toString.js?");

/***/ }),

/***/ "./node_modules/lodash/uniqueId.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/uniqueId.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/** Used to generate unique IDs. */\nvar idCounter = 0;\n\n/**\n * Generates a unique ID. If `prefix` is given, the ID is appended to it.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {string} [prefix=''] The value to prefix the ID with.\n * @returns {string} Returns the unique ID.\n * @example\n *\n * _.uniqueId('contact_');\n * // => 'contact_104'\n *\n * _.uniqueId();\n * // => '105'\n */\nfunction uniqueId(prefix) {\n  var id = ++idCounter;\n  return toString(prefix) + id;\n}\n\nmodule.exports = uniqueId;\n\n\n//# sourceURL=webpack://lists/./node_modules/lodash/uniqueId.js?");

/***/ }),

/***/ "./node_modules/on-change/index.js":
/*!*****************************************!*\
  !*** ./node_modules/on-change/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nconst {TARGET, UNSUBSCRIBE} = __webpack_require__(/*! ./lib/constants */ \"./node_modules/on-change/lib/constants.js\");\nconst isBuiltin = __webpack_require__(/*! ./lib/is-builtin */ \"./node_modules/on-change/lib/is-builtin.js\");\nconst path = __webpack_require__(/*! ./lib/path */ \"./node_modules/on-change/lib/path.js\");\nconst isSymbol = __webpack_require__(/*! ./lib/is-symbol */ \"./node_modules/on-change/lib/is-symbol.js\");\nconst isIterator = __webpack_require__(/*! ./lib/is-iterator */ \"./node_modules/on-change/lib/is-iterator.js\");\nconst wrapIterator = __webpack_require__(/*! ./lib/wrap-iterator */ \"./node_modules/on-change/lib/wrap-iterator.js\");\nconst ignoreProperty = __webpack_require__(/*! ./lib/ignore-property */ \"./node_modules/on-change/lib/ignore-property.js\");\nconst Cache = __webpack_require__(/*! ./lib/cache */ \"./node_modules/on-change/lib/cache.js\");\nconst SmartClone = __webpack_require__(/*! ./lib/smart-clone */ \"./node_modules/on-change/lib/smart-clone.js\");\n\nconst defaultOptions = {\n\tequals: Object.is,\n\tisShallow: false,\n\tpathAsArray: false,\n\tignoreSymbols: false,\n\tignoreUnderscores: false,\n\tignoreDetached: false\n};\n\nconst onChange = (object, onChange, options = {}) => {\n\toptions = {\n\t\t...defaultOptions,\n\t\t...options\n\t};\n\tconst proxyTarget = Symbol('ProxyTarget');\n\tconst {equals, isShallow, ignoreDetached} = options;\n\tconst cache = new Cache(equals);\n\tconst smartClone = new SmartClone();\n\n\tconst handleChangeOnTarget = (target, property, previous, value) => {\n\t\tif (\n\t\t\t!ignoreProperty(cache, options, property) &&\n\t\t\t!(ignoreDetached && cache.isDetached(target, object))\n\t\t) {\n\t\t\thandleChange(cache.getPath(target), property, previous, value);\n\t\t}\n\t};\n\n\t// eslint-disable-next-line max-params\n\tconst handleChange = (changePath, property, previous, value, name) => {\n\t\tif (smartClone.isCloning) {\n\t\t\tsmartClone.update(changePath, property, previous);\n\t\t} else {\n\t\t\tonChange(path.concat(changePath, property), value, previous, name);\n\t\t}\n\t};\n\n\tconst getProxyTarget = value => {\n\t\tif (value) {\n\t\t\treturn value[proxyTarget] || value;\n\t\t}\n\n\t\treturn value;\n\t};\n\n\tconst prepareValue = (value, target, property, basePath) => {\n\t\tif (\n\t\t\tisBuiltin.withoutMutableMethods(value) ||\n\t\t\tproperty === 'constructor' ||\n\t\t\t(isShallow && !SmartClone.isHandledMethod(target, property)) ||\n\t\t\tignoreProperty(cache, options, property) ||\n\t\t\tcache.isGetInvariant(target, property) ||\n\t\t\t(ignoreDetached && cache.isDetached(target, object))\n\t\t) {\n\t\t\treturn value;\n\t\t}\n\n\t\tif (basePath === undefined) {\n\t\t\tbasePath = cache.getPath(target);\n\t\t}\n\n\t\treturn cache.getProxy(value, path.concat(basePath, property), handler, proxyTarget);\n\t};\n\n\tconst handler = {\n\t\tget(target, property, receiver) {\n\t\t\tif (isSymbol(property)) {\n\t\t\t\tif (property === proxyTarget || property === TARGET) {\n\t\t\t\t\treturn target;\n\t\t\t\t}\n\n\t\t\t\tif (\n\t\t\t\t\tproperty === UNSUBSCRIBE &&\n\t\t\t\t\t!cache.isUnsubscribed &&\n\t\t\t\t\tcache.getPath(target).length === 0\n\t\t\t\t) {\n\t\t\t\t\tcache.unsubscribe();\n\t\t\t\t\treturn target;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tconst value = isBuiltin.withMutableMethods(target) ?\n\t\t\t\tReflect.get(target, property) :\n\t\t\t\tReflect.get(target, property, receiver);\n\n\t\t\treturn prepareValue(value, target, property);\n\t\t},\n\n\t\tset(target, property, value, receiver) {\n\t\t\tvalue = getProxyTarget(value);\n\n\t\t\tconst reflectTarget = target[proxyTarget] || target;\n\t\t\tconst previous = reflectTarget[property];\n\t\t\tconst hasProperty = property in target;\n\n\t\t\tif (cache.setProperty(reflectTarget, property, value, receiver, previous)) {\n\t\t\t\tif (!equals(previous, value) || !hasProperty) {\n\t\t\t\t\thandleChangeOnTarget(target, property, previous, value);\n\t\t\t\t}\n\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\treturn false;\n\t\t},\n\n\t\tdefineProperty(target, property, descriptor) {\n\t\t\tif (!cache.isSameDescriptor(descriptor, target, property)) {\n\t\t\t\tif (!cache.defineProperty(target, property, descriptor)) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\n\t\t\t\thandleChangeOnTarget(target, property, undefined, descriptor.value);\n\t\t\t}\n\n\t\t\treturn true;\n\t\t},\n\n\t\tdeleteProperty(target, property) {\n\t\t\tif (!Reflect.has(target, property)) {\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\tconst previous = Reflect.get(target, property);\n\n\t\t\tif (cache.deleteProperty(target, property, previous)) {\n\t\t\t\thandleChangeOnTarget(target, property, previous);\n\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\treturn false;\n\t\t},\n\n\t\tapply(target, thisArg, argumentsList) {\n\t\t\tconst thisProxyTarget = thisArg[proxyTarget] || thisArg;\n\n\t\t\tif (cache.isUnsubscribed) {\n\t\t\t\treturn Reflect.apply(target, thisProxyTarget, argumentsList);\n\t\t\t}\n\n\t\t\tif (SmartClone.isHandledType(thisProxyTarget)) {\n\t\t\t\tconst applyPath = path.initial(cache.getPath(target));\n\t\t\t\tconst isHandledMethod = SmartClone.isHandledMethod(thisProxyTarget, target.name);\n\n\t\t\t\tsmartClone.start(thisProxyTarget, applyPath, argumentsList);\n\n\t\t\t\tconst result = Reflect.apply(\n\t\t\t\t\ttarget,\n\t\t\t\t\tsmartClone.preferredThisArg(target, thisArg, thisProxyTarget),\n\t\t\t\t\tisHandledMethod ?\n\t\t\t\t\t\targumentsList.map(argument => getProxyTarget(argument)) :\n\t\t\t\t\t\targumentsList\n\t\t\t\t);\n\n\t\t\t\tconst isChanged = smartClone.isChanged(thisProxyTarget, equals, argumentsList);\n\t\t\t\tconst clone = smartClone.stop();\n\n\t\t\t\tif (isChanged) {\n\t\t\t\t\tif (smartClone.isCloning) {\n\t\t\t\t\t\thandleChange(path.initial(applyPath), path.last(applyPath), clone, thisProxyTarget, target.name);\n\t\t\t\t\t} else {\n\t\t\t\t\t\thandleChange(applyPath, '', clone, thisProxyTarget, target.name);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tif (\n\t\t\t\t\t(thisArg instanceof Map || thisArg instanceof Set) &&\n\t\t\t\t\tisIterator(result)\n\t\t\t\t) {\n\t\t\t\t\treturn wrapIterator(result, target, thisArg, applyPath, prepareValue);\n\t\t\t\t}\n\n\t\t\t\treturn (SmartClone.isHandledType(result) && isHandledMethod) ?\n\t\t\t\t\tcache.getProxy(result, applyPath, handler, proxyTarget) :\n\t\t\t\t\tresult;\n\t\t\t}\n\n\t\t\treturn Reflect.apply(target, thisArg, argumentsList);\n\t\t}\n\t};\n\n\tconst proxy = cache.getProxy(object, options.pathAsArray ? [] : '', handler);\n\tonChange = onChange.bind(proxy);\n\n\treturn proxy;\n};\n\nonChange.target = proxy => proxy[TARGET] || proxy;\nonChange.unsubscribe = proxy => proxy[UNSUBSCRIBE] || proxy;\n\nmodule.exports = onChange;\n\n\n//# sourceURL=webpack://lists/./node_modules/on-change/index.js?");

/***/ }),

/***/ "./node_modules/on-change/lib/cache.js":
/*!*********************************************!*\
  !*** ./node_modules/on-change/lib/cache.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nconst path = __webpack_require__(/*! ./path */ \"./node_modules/on-change/lib/path.js\");\n\n/**\n * @class Cache\n * @private\n */\nclass Cache {\n\tconstructor(equals) {\n\t\tthis._equals = equals;\n\t\tthis._proxyCache = new WeakMap();\n\t\tthis._pathCache = new WeakMap();\n\t\tthis.isUnsubscribed = false;\n\t}\n\n\t_getDescriptorCache() {\n\t\tif (this._descriptorCache === undefined) {\n\t\t\tthis._descriptorCache = new WeakMap();\n\t\t}\n\n\t\treturn this._descriptorCache;\n\t}\n\n\t_getProperties(target) {\n\t\tconst descriptorCache = this._getDescriptorCache();\n\t\tlet properties = descriptorCache.get(target);\n\n\t\tif (properties === undefined) {\n\t\t\tproperties = {};\n\t\t\tdescriptorCache.set(target, properties);\n\t\t}\n\n\t\treturn properties;\n\t}\n\n\t_getOwnPropertyDescriptor(target, property) {\n\t\tif (this.isUnsubscribed) {\n\t\t\treturn Reflect.getOwnPropertyDescriptor(target, property);\n\t\t}\n\n\t\tconst properties = this._getProperties(target);\n\t\tlet descriptor = properties[property];\n\n\t\tif (descriptor === undefined) {\n\t\t\tdescriptor = Reflect.getOwnPropertyDescriptor(target, property);\n\t\t\tproperties[property] = descriptor;\n\t\t}\n\n\t\treturn descriptor;\n\t}\n\n\tgetProxy(target, path, handler, proxyTarget) {\n\t\tif (this.isUnsubscribed) {\n\t\t\treturn target;\n\t\t}\n\n\t\tthis._pathCache.set(target, path);\n\n\t\tlet proxy = this._proxyCache.get(target);\n\n\t\tif (proxy === undefined) {\n\t\t\tproxy = target[proxyTarget] === undefined ?\n\t\t\t\tnew Proxy(target, handler) :\n\t\t\t\ttarget;\n\n\t\t\tthis._proxyCache.set(target, proxy);\n\t\t}\n\n\t\treturn proxy;\n\t}\n\n\tgetPath(target) {\n\t\treturn this.isUnsubscribed ? undefined : this._pathCache.get(target);\n\t}\n\n\tisDetached(target, object) {\n\t\tpath.walk(this.getPath(target), key => {\n\t\t\tif (object) {\n\t\t\t\tobject = object[key];\n\t\t\t}\n\t\t});\n\n\t\treturn !Object.is(target, object);\n\t}\n\n\tdefineProperty(target, property, descriptor) {\n\t\tif (!Reflect.defineProperty(target, property, descriptor)) {\n\t\t\treturn false;\n\t\t}\n\n\t\tif (!this.isUnsubscribed) {\n\t\t\tthis._getProperties(target)[property] = descriptor;\n\t\t}\n\n\t\treturn true;\n\t}\n\n\tsetProperty(target, property, value, receiver, previous) { // eslint-disable-line max-params\n\t\tif (!this._equals(previous, value) || !(property in target)) {\n\t\t\tconst descriptor = this._getOwnPropertyDescriptor(target, property);\n\n\t\t\tif (descriptor !== undefined && 'set' in descriptor) {\n\t\t\t\treturn Reflect.set(target, property, value, receiver);\n\t\t\t}\n\n\t\t\treturn Reflect.set(target, property, value);\n\t\t}\n\n\t\treturn true;\n\t}\n\n\tdeleteProperty(target, property, previous) {\n\t\tif (Reflect.deleteProperty(target, property)) {\n\t\t\tif (!this.isUnsubscribed) {\n\t\t\t\tconst properties = this._getDescriptorCache().get(target);\n\n\t\t\t\tif (properties) {\n\t\t\t\t\tdelete properties[property];\n\t\t\t\t\tthis._pathCache.delete(previous);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn true;\n\t\t}\n\n\t\treturn false;\n\t}\n\n\tisSameDescriptor(a, target, property) {\n\t\tconst b = this._getOwnPropertyDescriptor(target, property);\n\n\t\treturn a !== undefined &&\n\t\t\tb !== undefined &&\n\t\t\tObject.is(a.value, b.value) &&\n\t\t\t(a.writable || false) === (b.writable || false) &&\n\t\t\t(a.enumerable || false) === (b.enumerable || false) &&\n\t\t\t(a.configurable || false) === (b.configurable || false) &&\n\t\t\ta.get === b.get &&\n\t\t\ta.set === b.set;\n\t}\n\n\tisGetInvariant(target, property) {\n\t\tconst descriptor = this._getOwnPropertyDescriptor(target, property);\n\n\t\treturn descriptor !== undefined &&\n\t\t\tdescriptor.configurable !== true &&\n\t\t\tdescriptor.writable !== true;\n\t}\n\n\tunsubscribe() {\n\t\tthis._descriptorCache = null;\n\t\tthis._pathCache = null;\n\t\tthis._proxyCache = null;\n\t\tthis.isUnsubscribed = true;\n\t}\n}\n\nmodule.exports = Cache;\n\n\n//# sourceURL=webpack://lists/./node_modules/on-change/lib/cache.js?");

/***/ }),

/***/ "./node_modules/on-change/lib/constants.js":
/*!*************************************************!*\
  !*** ./node_modules/on-change/lib/constants.js ***!
  \*************************************************/
/***/ ((module) => {

eval("module.exports = {\n\tPATH_SEPARATOR: '.',\n\tTARGET: Symbol('target'),\n\tUNSUBSCRIBE: Symbol('unsubscribe')\n};\n\n\n//# sourceURL=webpack://lists/./node_modules/on-change/lib/constants.js?");

/***/ }),

/***/ "./node_modules/on-change/lib/ignore-property.js":
/*!*******************************************************!*\
  !*** ./node_modules/on-change/lib/ignore-property.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nconst isSymbol = __webpack_require__(/*! ./is-symbol */ \"./node_modules/on-change/lib/is-symbol.js\");\n\nmodule.exports = (cache, options, property) => {\n\treturn cache.isUnsubscribed ||\n\t\t(options.ignoreSymbols && isSymbol(property)) ||\n\t\t(options.ignoreUnderscores && property.charAt(0) === '_') ||\n\t\t('ignoreKeys' in options && options.ignoreKeys.includes(property));\n};\n\n\n//# sourceURL=webpack://lists/./node_modules/on-change/lib/ignore-property.js?");

/***/ }),

/***/ "./node_modules/on-change/lib/is-array.js":
/*!************************************************!*\
  !*** ./node_modules/on-change/lib/is-array.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = Array.isArray;\n\n\n//# sourceURL=webpack://lists/./node_modules/on-change/lib/is-array.js?");

/***/ }),

/***/ "./node_modules/on-change/lib/is-builtin.js":
/*!**************************************************!*\
  !*** ./node_modules/on-change/lib/is-builtin.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nconst isBuiltin = {\n\twithMutableMethods: value => {\n\t\treturn value instanceof Date ||\n\t\t\tvalue instanceof Set ||\n\t\t\tvalue instanceof Map ||\n\t\t\tvalue instanceof WeakSet ||\n\t\t\tvalue instanceof WeakMap;\n\t},\n\twithoutMutableMethods: value => (typeof value === 'object' ? value === null : typeof value !== 'function') || value instanceof RegExp\n};\n\nmodule.exports = isBuiltin;\n\n\n//# sourceURL=webpack://lists/./node_modules/on-change/lib/is-builtin.js?");

/***/ }),

/***/ "./node_modules/on-change/lib/is-iterator.js":
/*!***************************************************!*\
  !*** ./node_modules/on-change/lib/is-iterator.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = value => typeof value === 'object' && typeof value.next === 'function';\n\n\n//# sourceURL=webpack://lists/./node_modules/on-change/lib/is-iterator.js?");

/***/ }),

/***/ "./node_modules/on-change/lib/is-object.js":
/*!*************************************************!*\
  !*** ./node_modules/on-change/lib/is-object.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = value => toString.call(value) === '[object Object]';\n\n\n//# sourceURL=webpack://lists/./node_modules/on-change/lib/is-object.js?");

/***/ }),

/***/ "./node_modules/on-change/lib/is-symbol.js":
/*!*************************************************!*\
  !*** ./node_modules/on-change/lib/is-symbol.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = value => typeof value === 'symbol';\n\n\n//# sourceURL=webpack://lists/./node_modules/on-change/lib/is-symbol.js?");

/***/ }),

/***/ "./node_modules/on-change/lib/path.js":
/*!********************************************!*\
  !*** ./node_modules/on-change/lib/path.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nconst {PATH_SEPARATOR} = __webpack_require__(/*! ./constants */ \"./node_modules/on-change/lib/constants.js\");\nconst isArray = __webpack_require__(/*! ./is-array */ \"./node_modules/on-change/lib/is-array.js\");\nconst isSymbol = __webpack_require__(/*! ./is-symbol */ \"./node_modules/on-change/lib/is-symbol.js\");\n\nmodule.exports = {\n\tafter: (path, subPath) => {\n\t\tif (isArray(path)) {\n\t\t\treturn path.slice(subPath.length);\n\t\t}\n\n\t\tif (subPath === '') {\n\t\t\treturn path;\n\t\t}\n\n\t\treturn path.slice(subPath.length + 1);\n\t},\n\tconcat: (path, key) => {\n\t\tif (isArray(path)) {\n\t\t\tpath = path.slice();\n\n\t\t\tif (key) {\n\t\t\t\tpath.push(key);\n\t\t\t}\n\n\t\t\treturn path;\n\t\t}\n\n\t\tif (key && key.toString !== undefined) {\n\t\t\tif (path !== '') {\n\t\t\t\tpath += PATH_SEPARATOR;\n\t\t\t}\n\n\t\t\tif (isSymbol(key)) {\n\t\t\t\treturn path + key.toString();\n\t\t\t}\n\n\t\t\treturn path + key;\n\t\t}\n\n\t\treturn path;\n\t},\n\tinitial: path => {\n\t\tif (isArray(path)) {\n\t\t\treturn path.slice(0, -1);\n\t\t}\n\n\t\tif (path === '') {\n\t\t\treturn path;\n\t\t}\n\n\t\tconst index = path.lastIndexOf(PATH_SEPARATOR);\n\n\t\tif (index === -1) {\n\t\t\treturn '';\n\t\t}\n\n\t\treturn path.slice(0, index);\n\t},\n\tlast: path => {\n\t\tif (isArray(path)) {\n\t\t\treturn path[path.length - 1] || '';\n\t\t}\n\n\t\tif (path === '') {\n\t\t\treturn path;\n\t\t}\n\n\t\tconst index = path.lastIndexOf(PATH_SEPARATOR);\n\n\t\tif (index === -1) {\n\t\t\treturn path;\n\t\t}\n\n\t\treturn path.slice(index + 1);\n\t},\n\twalk: (path, callback) => {\n\t\tif (isArray(path)) {\n\t\t\tpath.forEach(key => callback(key));\n\t\t} else if (path !== '') {\n\t\t\tlet position = 0;\n\t\t\tlet index = path.indexOf(PATH_SEPARATOR);\n\n\t\t\tif (index === -1) {\n\t\t\t\tcallback(path);\n\t\t\t} else {\n\t\t\t\twhile (position < path.length) {\n\t\t\t\t\tif (index === -1) {\n\t\t\t\t\t\tindex = path.length;\n\t\t\t\t\t}\n\n\t\t\t\t\tcallback(path.slice(position, index));\n\n\t\t\t\t\tposition = index + 1;\n\t\t\t\t\tindex = path.indexOf(PATH_SEPARATOR, position);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n};\n\n\n//# sourceURL=webpack://lists/./node_modules/on-change/lib/path.js?");

/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone.js":
/*!***************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nconst path = __webpack_require__(/*! ./path */ \"./node_modules/on-change/lib/path.js\");\nconst isArray = __webpack_require__(/*! ./is-array */ \"./node_modules/on-change/lib/is-array.js\");\nconst isBuiltin = __webpack_require__(/*! ./is-builtin */ \"./node_modules/on-change/lib/is-builtin.js\");\nconst isObject = __webpack_require__(/*! ./is-object */ \"./node_modules/on-change/lib/is-object.js\");\n\nconst certainChange = () => true;\n\nconst shallowEqualArrays = (clone, value) => {\n\treturn clone.length !== value.length || clone.some((item, index) => value[index] !== item);\n};\n\nconst shallowEqualSets = (clone, value) => {\n\tif (clone.size !== value.size) {\n\t\treturn true;\n\t}\n\n\tfor (const element of clone) {\n\t\tif (!value.has(element)) {\n\t\t\treturn true;\n\t\t}\n\t}\n\n\treturn false;\n};\n\nconst shallowEqualMaps = (clone, value) => {\n\tif (clone.size !== value.size) {\n\t\treturn true;\n\t}\n\n\tlet bValue;\n\tfor (const [key, aValue] of clone) {\n\t\tbValue = value.get(key);\n\n\t\tif (bValue !== aValue || (bValue === undefined && !value.has(key))) {\n\t\t\treturn true;\n\t\t}\n\t}\n\n\treturn false;\n};\n\nconst IMMUTABLE_OBJECT_METHODS = new Set([\n\t'hasOwnProperty',\n\t'isPrototypeOf',\n\t'propertyIsEnumerable',\n\t'toLocaleString',\n\t'toString',\n\t'valueOf'\n]);\n\nconst IMMUTABLE_ARRAY_METHODS = new Set([\n\t'concat',\n\t'includes',\n\t'indexOf',\n\t'join',\n\t'keys',\n\t'lastIndexOf'\n]);\n\nconst IMMUTABLE_SET_METHODS = new Set([\n\t'has',\n\t'toString'\n]);\n\nconst IMMUTABLE_MAP_METHODS = new Set([...IMMUTABLE_SET_METHODS].concat(['get']));\n\nconst SHALLOW_MUTABLE_ARRAY_METHODS = {\n\tpush: certainChange,\n\tpop: certainChange,\n\tshift: certainChange,\n\tunshift: certainChange,\n\tcopyWithin: shallowEqualArrays,\n\treverse: shallowEqualArrays,\n\tsort: shallowEqualArrays,\n\tsplice: shallowEqualArrays,\n\tflat: shallowEqualArrays,\n\tfill: shallowEqualArrays\n};\n\nconst SHALLOW_MUTABLE_SET_METHODS = {\n\tadd: shallowEqualSets,\n\tclear: shallowEqualSets,\n\tdelete: shallowEqualSets\n};\n\nconst COLLECTION_ITERATOR_METHODS = [\n\t'keys',\n\t'values',\n\t'entries'\n];\n\nconst SHALLOW_MUTABLE_MAP_METHODS = {\n\tset: shallowEqualMaps,\n\tclear: shallowEqualMaps,\n\tdelete: shallowEqualMaps\n};\n\nconst HANDLED_ARRAY_METHODS = new Set([...IMMUTABLE_OBJECT_METHODS]\n\t.concat([...IMMUTABLE_ARRAY_METHODS])\n\t.concat(Object.keys(SHALLOW_MUTABLE_ARRAY_METHODS)));\n\nconst HANDLED_SET_METHODS = new Set([...IMMUTABLE_SET_METHODS]\n\t.concat(Object.keys(SHALLOW_MUTABLE_SET_METHODS))\n\t.concat(COLLECTION_ITERATOR_METHODS));\n\nconst HANDLED_MAP_METHODS = new Set([...IMMUTABLE_MAP_METHODS]\n\t.concat(Object.keys(SHALLOW_MUTABLE_MAP_METHODS))\n\t.concat(COLLECTION_ITERATOR_METHODS));\n\nclass Clone {\n\tconstructor(value, path, argumentsList) {\n\t\tthis._path = path;\n\t\tthis._isChanged = false;\n\t\tthis._clonedCache = new Set();\n\n\t\tif (value instanceof WeakSet) {\n\t\t\tthis._weakValue = value.has(argumentsList[0]);\n\t\t} else if (value instanceof WeakMap) {\n\t\t\tthis._weakValue = value.get(argumentsList[0]);\n\t\t} else {\n\t\t\tthis.clone = path === undefined ? value : this._shallowClone(value);\n\t\t}\n\t}\n\n\t_shallowClone(value) {\n\t\tlet clone;\n\n\t\tif (isObject(value)) {\n\t\t\tclone = {...value};\n\t\t} else if (isArray(value)) {\n\t\t\tclone = [...value];\n\t\t} else if (value instanceof Date) {\n\t\t\tclone = new Date(value);\n\t\t} else if (value instanceof Set) {\n\t\t\tclone = new Set(value);\n\t\t} else if (value instanceof Map) {\n\t\t\tclone = new Map(value);\n\t\t}\n\n\t\tthis._clonedCache.add(clone);\n\n\t\treturn clone;\n\t}\n\n\tpreferredThisArg(target, thisArg, thisProxyTarget) {\n\t\tconst {name} = target;\n\n\t\tif (SmartClone.isHandledMethod(thisProxyTarget, name)) {\n\t\t\tif (isArray(thisProxyTarget)) {\n\t\t\t\tthis._onIsChanged = SHALLOW_MUTABLE_ARRAY_METHODS[name];\n\t\t\t} else if (thisProxyTarget instanceof Set) {\n\t\t\t\tthis._onIsChanged = SHALLOW_MUTABLE_SET_METHODS[name];\n\t\t\t} else if (thisProxyTarget instanceof Map) {\n\t\t\t\tthis._onIsChanged = SHALLOW_MUTABLE_MAP_METHODS[name];\n\t\t\t}\n\n\t\t\treturn thisProxyTarget;\n\t\t}\n\n\t\treturn thisArg;\n\t}\n\n\tupdate(fullPath, property, value) {\n\t\tif (value !== undefined && property !== 'length') {\n\t\t\tlet object = this.clone;\n\n\t\t\tpath.walk(path.after(fullPath, this._path), key => {\n\t\t\t\tif (!this._clonedCache.has(object[key])) {\n\t\t\t\t\tobject[key] = this._shallowClone(object[key]);\n\t\t\t\t}\n\n\t\t\t\tobject = object[key];\n\t\t\t});\n\n\t\t\tobject[property] = value;\n\t\t}\n\n\t\tthis._isChanged = true;\n\t}\n\n\tisChanged(value, equals, argumentsList) {\n\t\tif (value instanceof Date) {\n\t\t\treturn !equals(this.clone.valueOf(), value.valueOf());\n\t\t}\n\n\t\tif (value instanceof WeakSet) {\n\t\t\treturn this._weakValue !== value.has(argumentsList[0]);\n\t\t}\n\n\t\tif (value instanceof WeakMap) {\n\t\t\treturn this._weakValue !== value.get(argumentsList[0]);\n\t\t}\n\n\t\treturn this._onIsChanged === undefined ?\n\t\t\tthis._isChanged :\n\t\t\tthis._onIsChanged(this.clone, value);\n\t}\n}\n\nclass SmartClone {\n\tconstructor() {\n\t\tthis.stack = [];\n\t}\n\n\tstatic isHandledType(value) {\n\t\treturn isObject(value) ||\n\t\t\tisArray(value) ||\n\t\t\tisBuiltin.withMutableMethods(value);\n\t}\n\n\tstatic isHandledMethod(target, name) {\n\t\tif (isObject(target)) {\n\t\t\treturn IMMUTABLE_OBJECT_METHODS.has(name);\n\t\t}\n\n\t\tif (isArray(target)) {\n\t\t\treturn HANDLED_ARRAY_METHODS.has(name);\n\t\t}\n\n\t\tif (target instanceof Set) {\n\t\t\treturn HANDLED_SET_METHODS.has(name);\n\t\t}\n\n\t\tif (target instanceof Map) {\n\t\t\treturn HANDLED_MAP_METHODS.has(name);\n\t\t}\n\n\t\treturn isBuiltin.withMutableMethods(target);\n\t}\n\n\tget isCloning() {\n\t\treturn this.stack.length !== 0;\n\t}\n\n\tstart(value, path, argumentsList) {\n\t\tthis.stack.push(new Clone(value, path, argumentsList));\n\t}\n\n\tupdate(fullPath, property, value) {\n\t\tthis.stack[this.stack.length - 1].update(fullPath, property, value);\n\t}\n\n\tpreferredThisArg(target, thisArg, thisProxyTarget) {\n\t\treturn this.stack[this.stack.length - 1].preferredThisArg(target, thisArg, thisProxyTarget);\n\t}\n\n\tisChanged(isMutable, value, equals, argumentsList) {\n\t\treturn this.stack[this.stack.length - 1].isChanged(isMutable, value, equals, argumentsList);\n\t}\n\n\tstop() {\n\t\treturn this.stack.pop().clone;\n\t}\n}\n\nmodule.exports = SmartClone;\n\n\n//# sourceURL=webpack://lists/./node_modules/on-change/lib/smart-clone.js?");

/***/ }),

/***/ "./node_modules/on-change/lib/wrap-iterator.js":
/*!*****************************************************!*\
  !*** ./node_modules/on-change/lib/wrap-iterator.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nconst {TARGET} = __webpack_require__(/*! ./constants */ \"./node_modules/on-change/lib/constants.js\");\n\n// eslint-disable-next-line max-params\nmodule.exports = (iterator, target, thisArg, applyPath, prepareValue) => {\n\tconst originalNext = iterator.next;\n\n\tif (target.name === 'entries') {\n\t\titerator.next = function () {\n\t\t\tconst result = originalNext.call(this);\n\n\t\t\tif (result.done === false) {\n\t\t\t\tresult.value[0] = prepareValue(\n\t\t\t\t\tresult.value[0],\n\t\t\t\t\ttarget,\n\t\t\t\t\tresult.value[0],\n\t\t\t\t\tapplyPath\n\t\t\t\t);\n\t\t\t\tresult.value[1] = prepareValue(\n\t\t\t\t\tresult.value[1],\n\t\t\t\t\ttarget,\n\t\t\t\t\tresult.value[0],\n\t\t\t\t\tapplyPath\n\t\t\t\t);\n\t\t\t}\n\n\t\t\treturn result;\n\t\t};\n\t} else if (target.name === 'values') {\n\t\tconst keyIterator = thisArg[TARGET].keys();\n\n\t\titerator.next = function () {\n\t\t\tconst result = originalNext.call(this);\n\n\t\t\tif (result.done === false) {\n\t\t\t\tresult.value = prepareValue(\n\t\t\t\t\tresult.value,\n\t\t\t\t\ttarget,\n\t\t\t\t\tkeyIterator.next().value,\n\t\t\t\t\tapplyPath\n\t\t\t\t);\n\t\t\t}\n\n\t\t\treturn result;\n\t\t};\n\t} else {\n\t\titerator.next = function () {\n\t\t\tconst result = originalNext.call(this);\n\n\t\t\tif (result.done === false) {\n\t\t\t\tresult.value = prepareValue(\n\t\t\t\t\tresult.value,\n\t\t\t\t\ttarget,\n\t\t\t\t\tresult.value,\n\t\t\t\t\tapplyPath\n\t\t\t\t);\n\t\t\t}\n\n\t\t\treturn result;\n\t\t};\n\t}\n\n\treturn iterator;\n};\n\n\n//# sourceURL=webpack://lists/./node_modules/on-change/lib/wrap-iterator.js?");

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listsFormHandler\": () => (/* binding */ listsFormHandler),\n/* harmony export */   \"tasksFormHandler\": () => (/* binding */ tasksFormHandler),\n/* harmony export */   \"listHandler\": () => (/* binding */ listHandler),\n/* harmony export */   \"taskHandler\": () => (/* binding */ taskHandler)\n/* harmony export */ });\n/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/uniqueId */ \"./node_modules/lodash/uniqueId.js\");\n/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst listsFormHandler = (e, state) => {\n  e.preventDefault();\n  const formData = new FormData(e.target);\n  const value = formData.get('name');\n\n  if(value.trim().length) {\n    const newList = { name: value, id: lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()() }\n    state.activeListId = newList.id;\n    state.lists.push(newList)\n  }\n};\n\nconst tasksFormHandler = (e, state) => {\n  e.preventDefault();\n  const formData = new FormData(e.target);\n  const value = formData.get('name');\n\n  if(value.trim().length) {\n    const newTask = { name: value, listId: state.activeListId, id: lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()() }\n    state.tasks.push(newTask)\n  }\n};\n\nconst listHandler = (e, state, list) => {\n  e.preventDefault();\n  state.activeListId = list.id;\n};\n\nconst taskHandler = (e, state, task) => {\n  e.preventDefault();\n  state.tasks.forEach(item => {\n    if (task.id === item.id) {\n      item.status = 'done';\n    }\n  });\n};\n\n\n//# sourceURL=webpack://lists/./src/handlers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var on_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! on-change */ \"./node_modules/on-change/index.js\");\n/* harmony import */ var on_change__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(on_change__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqueId */ \"./node_modules/lodash/uniqueId.js\");\n/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _renders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renders */ \"./src/renders.js\");\n\n\n\n\n\nconst app = () => {\n\n  const list1Id = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()();\n  const task1Id = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()();\n  const task2Id = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()();\n\n  const state = {\n    activeListId: list1Id,\n    lists: [{ name: 'list1', id: list1Id }],\n    tasks: [{ name: 'task11', listId: list1Id, id: task1Id }, { name: 'task12', listId: list1Id, id: task2Id }],\n    stateUi: [{ id: task1Id, satus: 'done' }, { id: task2Id }],\n  };\n\n  const watched = on_change__WEBPACK_IMPORTED_MODULE_0___default()(state, (path, value) => {\n    if (path === 'lists') {\n      (0,_renders__WEBPACK_IMPORTED_MODULE_2__.renderLists)(watched);\n    } else if (path === 'tasks') {\n      (0,_renders__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(watched);\n    } else if (path === 'activeListId') {\n      (0,_renders__WEBPACK_IMPORTED_MODULE_2__.renderLists)(watched);\n      (0,_renders__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(watched);\n    }\n  });\n\n  (0,_renders__WEBPACK_IMPORTED_MODULE_2__.initial)(watched);\n};\n\napp();\n\n\n//# sourceURL=webpack://lists/./src/index.js?");

/***/ }),

/***/ "./src/renders.js":
/*!************************!*\
  !*** ./src/renders.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderLists\": () => (/* binding */ renderLists),\n/* harmony export */   \"renderTasks\": () => (/* binding */ renderTasks),\n/* harmony export */   \"initial\": () => (/* binding */ initial)\n/* harmony export */ });\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers */ \"./src/handlers.js\");\n\n\nconst renderLists = (state) => {\n  const listsContainer = document.querySelector('[data-container=\"lists\"]');\n  const listsForm = document.querySelector('[data-container=\"new-list-form\"]');\n\n  const ulForLists = document.createElement('ul');\n\n  state.lists\n    .forEach((list) => {\n      const li = document.createElement('li');\n      const nameContainer = document.createElement('a');\n      nameContainer.setAttribute('href', `#`);\n      nameContainer.innerHTML = list.name;\n\n      if (list.id === state.activeListId) {\n        nameContainer.classList.add('text-secondary')\n      }\n\n      nameContainer.addEventListener('click', (e) => (0,_handlers__WEBPACK_IMPORTED_MODULE_0__.listHandler)(e, state, list));\n      li.appendChild(nameContainer);\n      ulForLists.appendChild(li);\n    });\n\n  listsContainer.innerHTML = '';\n  listsContainer.appendChild(ulForLists);\n  listsForm.reset();\n}\n\nconst renderTasks = (state) => {\n  const tasksContainer = document.querySelector('[data-container=\"tasks\"]');\n  const tasksForm = document.querySelector('[data-container=\"new-task-form\"]');\n\n  const ulForTasks = document.createElement('ul');\n\n  state.tasks\n    .filter(({ listId }) => listId === state.activeListId)\n    .forEach((task) => {\n      const li = document.createElement('li');\n      const nameContainer = document.createElement('a');\n      nameContainer.setAttribute('href', `#`);\n\n      if (task.status ==='done') {\n        nameContainer.innerHTML = `<del>${task.name}</del>`;\n      } else {\n        nameContainer.innerHTML = task.name;\n      }\n           \n      nameContainer.addEventListener('click', (e) => (0,_handlers__WEBPACK_IMPORTED_MODULE_0__.taskHandler)(e, state, task));\n      li.appendChild(nameContainer);\n      ulForTasks.appendChild(li);\n    });\n\n  tasksContainer.innerHTML = '';\n  tasksContainer.appendChild(ulForTasks);\n  tasksForm.reset();\n}\n\nconst initial = (state) => {\n  const listsForm = document.querySelector('[data-container=\"new-list-form\"]');\n  const tasksForm = document.querySelector('[data-container=\"new-task-form\"]');\n\n  listsForm.addEventListener('submit', (e) => (0,_handlers__WEBPACK_IMPORTED_MODULE_0__.listsFormHandler)(e, state));\n  tasksForm.addEventListener('submit', (e) => (0,_handlers__WEBPACK_IMPORTED_MODULE_0__.tasksFormHandler)(e, state))\n\n  renderLists(state);\n  renderTasks(state);\n};\n\n\n//# sourceURL=webpack://lists/./src/renders.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;