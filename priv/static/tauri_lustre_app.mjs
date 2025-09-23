var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js"(exports, module) {
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        // Latin Extended-A block.
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root3 = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array3, setter, iteratee, accumulator) {
        var index4 = -1, length3 = array3 == null ? 0 : array3.length;
        while (++index4 < length3) {
          var value2 = array3[index4];
          setter(accumulator, value2, iteratee(value2), array3);
        }
        return accumulator;
      }
      function arrayEach(array3, iteratee) {
        var index4 = -1, length3 = array3 == null ? 0 : array3.length;
        while (++index4 < length3) {
          if (iteratee(array3[index4], index4, array3) === false) {
            break;
          }
        }
        return array3;
      }
      function arrayEachRight(array3, iteratee) {
        var length3 = array3 == null ? 0 : array3.length;
        while (length3--) {
          if (iteratee(array3[length3], length3, array3) === false) {
            break;
          }
        }
        return array3;
      }
      function arrayEvery(array3, predicate) {
        var index4 = -1, length3 = array3 == null ? 0 : array3.length;
        while (++index4 < length3) {
          if (!predicate(array3[index4], index4, array3)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array3, predicate) {
        var index4 = -1, length3 = array3 == null ? 0 : array3.length, resIndex = 0, result = [];
        while (++index4 < length3) {
          var value2 = array3[index4];
          if (predicate(value2, index4, array3)) {
            result[resIndex++] = value2;
          }
        }
        return result;
      }
      function arrayIncludes(array3, value2) {
        var length3 = array3 == null ? 0 : array3.length;
        return !!length3 && baseIndexOf(array3, value2, 0) > -1;
      }
      function arrayIncludesWith(array3, value2, comparator) {
        var index4 = -1, length3 = array3 == null ? 0 : array3.length;
        while (++index4 < length3) {
          if (comparator(value2, array3[index4])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array3, iteratee) {
        var index4 = -1, length3 = array3 == null ? 0 : array3.length, result = Array(length3);
        while (++index4 < length3) {
          result[index4] = iteratee(array3[index4], index4, array3);
        }
        return result;
      }
      function arrayPush(array3, values3) {
        var index4 = -1, length3 = values3.length, offset = array3.length;
        while (++index4 < length3) {
          array3[offset + index4] = values3[index4];
        }
        return array3;
      }
      function arrayReduce(array3, iteratee, accumulator, initAccum) {
        var index4 = -1, length3 = array3 == null ? 0 : array3.length;
        if (initAccum && length3) {
          accumulator = array3[++index4];
        }
        while (++index4 < length3) {
          accumulator = iteratee(accumulator, array3[index4], index4, array3);
        }
        return accumulator;
      }
      function arrayReduceRight(array3, iteratee, accumulator, initAccum) {
        var length3 = array3 == null ? 0 : array3.length;
        if (initAccum && length3) {
          accumulator = array3[--length3];
        }
        while (length3--) {
          accumulator = iteratee(accumulator, array3[length3], length3, array3);
        }
        return accumulator;
      }
      function arraySome(array3, predicate) {
        var index4 = -1, length3 = array3 == null ? 0 : array3.length;
        while (++index4 < length3) {
          if (predicate(array3[index4], index4, array3)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string5) {
        return string5.split("");
      }
      function asciiWords(string5) {
        return string5.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value2, key, collection2) {
          if (predicate(value2, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array3, predicate, fromIndex, fromRight) {
        var length3 = array3.length, index4 = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index4-- : ++index4 < length3) {
          if (predicate(array3[index4], index4, array3)) {
            return index4;
          }
        }
        return -1;
      }
      function baseIndexOf(array3, value2, fromIndex) {
        return value2 === value2 ? strictIndexOf(array3, value2, fromIndex) : baseFindIndex(array3, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array3, value2, fromIndex, comparator) {
        var index4 = fromIndex - 1, length3 = array3.length;
        while (++index4 < length3) {
          if (comparator(array3[index4], value2)) {
            return index4;
          }
        }
        return -1;
      }
      function baseIsNaN(value2) {
        return value2 !== value2;
      }
      function baseMean(array3, iteratee) {
        var length3 = array3 == null ? 0 : array3.length;
        return length3 ? baseSum(array3, iteratee) / length3 : NAN;
      }
      function baseProperty(key) {
        return function(object4) {
          return object4 == null ? undefined2 : object4[key];
        };
      }
      function basePropertyOf(object4) {
        return function(key) {
          return object4 == null ? undefined2 : object4[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value2, index4, collection2) {
          accumulator = initAccum ? (initAccum = false, value2) : iteratee(accumulator, value2, index4, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array3, comparer) {
        var length3 = array3.length;
        array3.sort(comparer);
        while (length3--) {
          array3[length3] = array3[length3].value;
        }
        return array3;
      }
      function baseSum(array3, iteratee) {
        var result, index4 = -1, length3 = array3.length;
        while (++index4 < length3) {
          var current = iteratee(array3[index4]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index4 = -1, result = Array(n);
        while (++index4 < n) {
          result[index4] = iteratee(index4);
        }
        return result;
      }
      function baseToPairs(object4, props) {
        return arrayMap(props, function(key) {
          return [key, object4[key]];
        });
      }
      function baseTrim(string5) {
        return string5 ? string5.slice(0, trimmedEndIndex(string5) + 1).replace(reTrimStart, "") : string5;
      }
      function baseUnary(func) {
        return function(value2) {
          return func(value2);
        };
      }
      function baseValues(object4, props) {
        return arrayMap(props, function(key) {
          return object4[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index4 = -1, length3 = strSymbols.length;
        while (++index4 < length3 && baseIndexOf(chrSymbols, strSymbols[index4], 0) > -1) {
        }
        return index4;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index4 = strSymbols.length;
        while (index4-- && baseIndexOf(chrSymbols, strSymbols[index4], 0) > -1) {
        }
        return index4;
      }
      function countHolders(array3, placeholder) {
        var length3 = array3.length, result = 0;
        while (length3--) {
          if (array3[length3] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object4, key) {
        return object4 == null ? undefined2 : object4[key];
      }
      function hasUnicode(string5) {
        return reHasUnicode.test(string5);
      }
      function hasUnicodeWord(string5) {
        return reHasUnicodeWord.test(string5);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map5) {
        var index4 = -1, result = Array(map5.size);
        map5.forEach(function(value2, key) {
          result[++index4] = [key, value2];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array3, placeholder) {
        var index4 = -1, length3 = array3.length, resIndex = 0, result = [];
        while (++index4 < length3) {
          var value2 = array3[index4];
          if (value2 === placeholder || value2 === PLACEHOLDER) {
            array3[index4] = PLACEHOLDER;
            result[resIndex++] = index4;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index4 = -1, result = Array(set.size);
        set.forEach(function(value2) {
          result[++index4] = value2;
        });
        return result;
      }
      function setToPairs(set) {
        var index4 = -1, result = Array(set.size);
        set.forEach(function(value2) {
          result[++index4] = [value2, value2];
        });
        return result;
      }
      function strictIndexOf(array3, value2, fromIndex) {
        var index4 = fromIndex - 1, length3 = array3.length;
        while (++index4 < length3) {
          if (array3[index4] === value2) {
            return index4;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array3, value2, fromIndex) {
        var index4 = fromIndex + 1;
        while (index4--) {
          if (array3[index4] === value2) {
            return index4;
          }
        }
        return index4;
      }
      function stringSize(string5) {
        return hasUnicode(string5) ? unicodeSize(string5) : asciiSize(string5);
      }
      function stringToArray(string5) {
        return hasUnicode(string5) ? unicodeToArray(string5) : asciiToArray(string5);
      }
      function trimmedEndIndex(string5) {
        var index4 = string5.length;
        while (index4-- && reWhitespace.test(string5.charAt(index4))) {
        }
        return index4;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string5) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string5)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string5) {
        return string5.match(reUnicode) || [];
      }
      function unicodeWords(string5) {
        return string5.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root3 : _2.defaults(root3.Object(), context, _2.pick(root3, contextProps));
        var Array2 = context.Array, Date2 = context.Date, Error3 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root3._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root3.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root3.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root3.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView2 = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap2 && new WeakMap2();
        var realNames = {};
        var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value2) {
          if (isObjectLike(value2) && !isArray(value2) && !(value2 instanceof LazyWrapper)) {
            if (value2 instanceof LodashWrapper) {
              return value2;
            }
            if (hasOwnProperty.call(value2, "__wrapped__")) {
              return wrapperClone(value2);
            }
          }
          return new LodashWrapper(value2);
        }
        var baseCreate = /* @__PURE__ */ function() {
          function object4() {
          }
          return function(proto) {
            if (!isObject2(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object4.prototype = proto;
            var result2 = new object4();
            object4.prototype = undefined2;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value2, chainAll) {
          this.__wrapped__ = value2;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value2) {
          this.__wrapped__ = value2;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array3 = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array3), isRight = dir < 0, arrLength = isArr ? array3.length : 0, view3 = getView(0, arrLength, this.__views__), start4 = view3.start, end = view3.end, length3 = end - start4, index4 = isRight ? end : start4 - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length3, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length3 && takeCount == length3) {
            return baseWrapperValue(array3, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length3-- && resIndex < takeCount) {
              index4 += dir;
              var iterIndex = -1, value2 = array3[index4];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value2);
                if (type == LAZY_MAP_FLAG) {
                  value2 = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value2;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash2(entries) {
          var index4 = -1, length3 = entries == null ? 0 : entries.length;
          this.clear();
          while (++index4 < length3) {
            var entry = entries[index4];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value2) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value2 === undefined2 ? HASH_UNDEFINED : value2;
          return this;
        }
        Hash2.prototype.clear = hashClear;
        Hash2.prototype["delete"] = hashDelete;
        Hash2.prototype.get = hashGet;
        Hash2.prototype.has = hashHas;
        Hash2.prototype.set = hashSet;
        function ListCache(entries) {
          var index4 = -1, length3 = entries == null ? 0 : entries.length;
          this.clear();
          while (++index4 < length3) {
            var entry = entries[index4];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index4 = assocIndexOf(data, key);
          if (index4 < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index4 == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index4, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index4 = assocIndexOf(data, key);
          return index4 < 0 ? undefined2 : data[index4][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value2) {
          var data = this.__data__, index4 = assocIndexOf(data, key);
          if (index4 < 0) {
            ++this.size;
            data.push([key, value2]);
          } else {
            data[index4][1] = value2;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index4 = -1, length3 = entries == null ? 0 : entries.length;
          this.clear();
          while (++index4 < length3) {
            var entry = entries[index4];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash2(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash2()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value2) {
          var data = getMapData(this, key), size3 = data.size;
          data.set(key, value2);
          this.size += data.size == size3 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values4) {
          var index4 = -1, length3 = values4 == null ? 0 : values4.length;
          this.__data__ = new MapCache();
          while (++index4 < length3) {
            this.add(values4[index4]);
          }
        }
        function setCacheAdd(value2) {
          this.__data__.set(value2, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value2) {
          return this.__data__.has(value2);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value2) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value2]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value2);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value2, inherited) {
          var isArr = isArray(value2), isArg = !isArr && isArguments(value2), isBuff = !isArr && !isArg && isBuffer(value2), isType = !isArr && !isArg && !isBuff && isTypedArray(value2), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value2.length, String2) : [], length3 = result2.length;
          for (var key in value2) {
            if ((inherited || hasOwnProperty.call(value2, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length3)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array3) {
          var length3 = array3.length;
          return length3 ? array3[baseRandom(0, length3 - 1)] : undefined2;
        }
        function arraySampleSize(array3, n) {
          return shuffleSelf(copyArray(array3), baseClamp(n, 0, array3.length));
        }
        function arrayShuffle(array3) {
          return shuffleSelf(copyArray(array3));
        }
        function assignMergeValue(object4, key, value2) {
          if (value2 !== undefined2 && !eq(object4[key], value2) || value2 === undefined2 && !(key in object4)) {
            baseAssignValue(object4, key, value2);
          }
        }
        function assignValue(object4, key, value2) {
          var objValue = object4[key];
          if (!(hasOwnProperty.call(object4, key) && eq(objValue, value2)) || value2 === undefined2 && !(key in object4)) {
            baseAssignValue(object4, key, value2);
          }
        }
        function assocIndexOf(array3, key) {
          var length3 = array3.length;
          while (length3--) {
            if (eq(array3[length3][0], key)) {
              return length3;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value2, key, collection2) {
            setter(accumulator, value2, iteratee2(value2), collection2);
          });
          return accumulator;
        }
        function baseAssign(object4, source) {
          return object4 && copyObject(source, keys2(source), object4);
        }
        function baseAssignIn(object4, source) {
          return object4 && copyObject(source, keysIn(source), object4);
        }
        function baseAssignValue(object4, key, value2) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object4, key, {
              "configurable": true,
              "enumerable": true,
              "value": value2,
              "writable": true
            });
          } else {
            object4[key] = value2;
          }
        }
        function baseAt(object4, paths) {
          var index4 = -1, length3 = paths.length, result2 = Array2(length3), skip = object4 == null;
          while (++index4 < length3) {
            result2[index4] = skip ? undefined2 : get2(object4, paths[index4]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined2) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined2) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value2, bitmask, customizer, key, object4, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object4 ? customizer(value2, key, object4, stack) : customizer(value2);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject2(value2)) {
            return value2;
          }
          var isArr = isArray(value2);
          if (isArr) {
            result2 = initCloneArray(value2);
            if (!isDeep) {
              return copyArray(value2, result2);
            }
          } else {
            var tag = getTag(value2), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value2)) {
              return cloneBuffer(value2, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object4) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value2);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value2, baseAssignIn(result2, value2)) : copySymbols(value2, baseAssign(result2, value2));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object4 ? value2 : {};
              }
              result2 = initCloneByTag(value2, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value2);
          if (stacked) {
            return stacked;
          }
          stack.set(value2, result2);
          if (isSet(value2)) {
            value2.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value2, stack));
            });
          } else if (isMap(value2)) {
            value2.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value2, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys2;
          var props = isArr ? undefined2 : keysFunc(value2);
          arrayEach(props || value2, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value2[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value2, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys2(source);
          return function(object4) {
            return baseConformsTo(object4, source, props);
          };
        }
        function baseConformsTo(object4, source, props) {
          var length3 = props.length;
          if (object4 == null) {
            return !length3;
          }
          object4 = Object2(object4);
          while (length3--) {
            var key = props[length3], predicate = source[key], value2 = object4[key];
            if (value2 === undefined2 && !(key in object4) || !predicate(value2)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout3(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array3, values4, iteratee2, comparator) {
          var index4 = -1, includes2 = arrayIncludes, isCommon = true, length3 = array3.length, result2 = [], valuesLength = values4.length;
          if (!length3) {
            return result2;
          }
          if (iteratee2) {
            values4 = arrayMap(values4, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values4.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values4 = new SetCache(values4);
          }
          outer:
            while (++index4 < length3) {
              var value2 = array3[index4], computed = iteratee2 == null ? value2 : iteratee2(value2);
              value2 = comparator || value2 !== 0 ? value2 : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values4[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value2);
              } else if (!includes2(values4, computed, comparator)) {
                result2.push(value2);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value2, index4, collection2) {
            result2 = !!predicate(value2, index4, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array3, iteratee2, comparator) {
          var index4 = -1, length3 = array3.length;
          while (++index4 < length3) {
            var value2 = array3[index4], current = iteratee2(value2);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value2;
            }
          }
          return result2;
        }
        function baseFill(array3, value2, start4, end) {
          var length3 = array3.length;
          start4 = toInteger(start4);
          if (start4 < 0) {
            start4 = -start4 > length3 ? 0 : length3 + start4;
          }
          end = end === undefined2 || end > length3 ? length3 : toInteger(end);
          if (end < 0) {
            end += length3;
          }
          end = start4 > end ? 0 : toLength(end);
          while (start4 < end) {
            array3[start4++] = value2;
          }
          return array3;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value2, index4, collection2) {
            if (predicate(value2, index4, collection2)) {
              result2.push(value2);
            }
          });
          return result2;
        }
        function baseFlatten(array3, depth, predicate, isStrict, result2) {
          var index4 = -1, length3 = array3.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index4 < length3) {
            var value2 = array3[index4];
            if (depth > 0 && predicate(value2)) {
              if (depth > 1) {
                baseFlatten(value2, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value2);
              }
            } else if (!isStrict) {
              result2[result2.length] = value2;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object4, iteratee2) {
          return object4 && baseFor(object4, iteratee2, keys2);
        }
        function baseForOwnRight(object4, iteratee2) {
          return object4 && baseForRight(object4, iteratee2, keys2);
        }
        function baseFunctions(object4, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object4[key]);
          });
        }
        function baseGet(object4, path) {
          path = castPath(path, object4);
          var index4 = 0, length3 = path.length;
          while (object4 != null && index4 < length3) {
            object4 = object4[toKey(path[index4++])];
          }
          return index4 && index4 == length3 ? object4 : undefined2;
        }
        function baseGetAllKeys(object4, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object4);
          return isArray(object4) ? result2 : arrayPush(result2, symbolsFunc(object4));
        }
        function baseGetTag(value2) {
          if (value2 == null) {
            return value2 === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value2) ? getRawTag(value2) : objectToString(value2);
        }
        function baseGt(value2, other) {
          return value2 > other;
        }
        function baseHas(object4, key) {
          return object4 != null && hasOwnProperty.call(object4, key);
        }
        function baseHasIn(object4, key) {
          return object4 != null && key in Object2(object4);
        }
        function baseInRange(number, start4, end) {
          return number >= nativeMin(start4, end) && number < nativeMax(start4, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length3 = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array3 = arrays[othIndex];
            if (othIndex && iteratee2) {
              array3 = arrayMap(array3, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array3.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length3 >= 120 && array3.length >= 120) ? new SetCache(othIndex && array3) : undefined2;
          }
          array3 = arrays[0];
          var index4 = -1, seen = caches[0];
          outer:
            while (++index4 < length3 && result2.length < maxLength) {
              var value2 = array3[index4], computed = iteratee2 ? iteratee2(value2) : value2;
              value2 = comparator || value2 !== 0 ? value2 : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value2);
              }
            }
          return result2;
        }
        function baseInverter(object4, setter, iteratee2, accumulator) {
          baseForOwn(object4, function(value2, key, object5) {
            setter(accumulator, iteratee2(value2), key, object5);
          });
          return accumulator;
        }
        function baseInvoke(object4, path, args) {
          path = castPath(path, object4);
          object4 = parent(object4, path);
          var func = object4 == null ? object4 : object4[toKey(last(path))];
          return func == null ? undefined2 : apply(func, object4, args);
        }
        function baseIsArguments(value2) {
          return isObjectLike(value2) && baseGetTag(value2) == argsTag;
        }
        function baseIsArrayBuffer(value2) {
          return isObjectLike(value2) && baseGetTag(value2) == arrayBufferTag;
        }
        function baseIsDate(value2) {
          return isObjectLike(value2) && baseGetTag(value2) == dateTag;
        }
        function baseIsEqual(value2, other, bitmask, customizer, stack) {
          if (value2 === other) {
            return true;
          }
          if (value2 == null || other == null || !isObjectLike(value2) && !isObjectLike(other)) {
            return value2 !== value2 && other !== other;
          }
          return baseIsEqualDeep(value2, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object4, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object4), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object4), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object4)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object4) ? equalArrays(object4, other, bitmask, customizer, equalFunc, stack) : equalByTag(object4, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object4, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object4.value() : object4, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object4, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value2) {
          return isObjectLike(value2) && getTag(value2) == mapTag;
        }
        function baseIsMatch(object4, source, matchData, customizer) {
          var index4 = matchData.length, length3 = index4, noCustomizer = !customizer;
          if (object4 == null) {
            return !length3;
          }
          object4 = Object2(object4);
          while (index4--) {
            var data = matchData[index4];
            if (noCustomizer && data[2] ? data[1] !== object4[data[0]] : !(data[0] in object4)) {
              return false;
            }
          }
          while (++index4 < length3) {
            data = matchData[index4];
            var key = data[0], objValue = object4[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object4)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object4, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value2) {
          if (!isObject2(value2) || isMasked(value2)) {
            return false;
          }
          var pattern = isFunction(value2) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value2));
        }
        function baseIsRegExp(value2) {
          return isObjectLike(value2) && baseGetTag(value2) == regexpTag;
        }
        function baseIsSet(value2) {
          return isObjectLike(value2) && getTag(value2) == setTag;
        }
        function baseIsTypedArray(value2) {
          return isObjectLike(value2) && isLength(value2.length) && !!typedArrayTags[baseGetTag(value2)];
        }
        function baseIteratee(value2) {
          if (typeof value2 == "function") {
            return value2;
          }
          if (value2 == null) {
            return identity4;
          }
          if (typeof value2 == "object") {
            return isArray(value2) ? baseMatchesProperty(value2[0], value2[1]) : baseMatches(value2);
          }
          return property4(value2);
        }
        function baseKeys(object4) {
          if (!isPrototype(object4)) {
            return nativeKeys(object4);
          }
          var result2 = [];
          for (var key in Object2(object4)) {
            if (hasOwnProperty.call(object4, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object4) {
          if (!isObject2(object4)) {
            return nativeKeysIn(object4);
          }
          var isProto = isPrototype(object4), result2 = [];
          for (var key in object4) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object4, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value2, other) {
          return value2 < other;
        }
        function baseMap(collection, iteratee2) {
          var index4 = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value2, key, collection2) {
            result2[++index4] = iteratee2(value2, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object4) {
            return object4 === source || baseIsMatch(object4, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object4) {
            var objValue = get2(object4, path);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object4, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object4, source, srcIndex, customizer, stack) {
          if (object4 === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject2(srcValue)) {
              baseMergeDeep(object4, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object4, key), srcValue, key + "", object4, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object4, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object4, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object4, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object4, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object4, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject2(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object4, key, newValue);
        }
        function baseNth(array3, n) {
          var length3 = array3.length;
          if (!length3) {
            return;
          }
          n += n < 0 ? length3 : 0;
          return isIndex(n, length3) ? array3[n] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value2) {
                  return baseGet(value2, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity4];
          }
          var index4 = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value2, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value2);
            });
            return { "criteria": criteria, "index": ++index4, "value": value2 };
          });
          return baseSortBy(result2, function(object4, other) {
            return compareMultiple(object4, other, orders);
          });
        }
        function basePick(object4, paths) {
          return basePickBy(object4, paths, function(value2, path) {
            return hasIn(object4, path);
          });
        }
        function basePickBy(object4, paths, predicate) {
          var index4 = -1, length3 = paths.length, result2 = {};
          while (++index4 < length3) {
            var path = paths[index4], value2 = baseGet(object4, path);
            if (predicate(value2, path)) {
              baseSet(result2, castPath(path, object4), value2);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object4) {
            return baseGet(object4, path);
          };
        }
        function basePullAll(array3, values4, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index4 = -1, length3 = values4.length, seen = array3;
          if (array3 === values4) {
            values4 = copyArray(values4);
          }
          if (iteratee2) {
            seen = arrayMap(array3, baseUnary(iteratee2));
          }
          while (++index4 < length3) {
            var fromIndex = 0, value2 = values4[index4], computed = iteratee2 ? iteratee2(value2) : value2;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array3) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array3, fromIndex, 1);
            }
          }
          return array3;
        }
        function basePullAt(array3, indexes) {
          var length3 = array3 ? indexes.length : 0, lastIndex = length3 - 1;
          while (length3--) {
            var index4 = indexes[length3];
            if (length3 == lastIndex || index4 !== previous) {
              var previous = index4;
              if (isIndex(index4)) {
                splice.call(array3, index4, 1);
              } else {
                baseUnset(array3, index4);
              }
            }
          }
          return array3;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start4, end, step, fromRight) {
          var index4 = -1, length3 = nativeMax(nativeCeil((end - start4) / (step || 1)), 0), result2 = Array2(length3);
          while (length3--) {
            result2[fromRight ? length3 : ++index4] = start4;
            start4 += step;
          }
          return result2;
        }
        function baseRepeat(string5, n) {
          var result2 = "";
          if (!string5 || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string5;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string5 += string5;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start4) {
          return setToString(overRest(func, start4, identity4), func + "");
        }
        function baseSample(collection) {
          return arraySample(values3(collection));
        }
        function baseSampleSize(collection, n) {
          var array3 = values3(collection);
          return shuffleSelf(array3, baseClamp(n, 0, array3.length));
        }
        function baseSet(object4, path, value2, customizer) {
          if (!isObject2(object4)) {
            return object4;
          }
          path = castPath(path, object4);
          var index4 = -1, length3 = path.length, lastIndex = length3 - 1, nested = object4;
          while (nested != null && ++index4 < length3) {
            var key = toKey(path[index4]), newValue = value2;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object4;
            }
            if (index4 != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject2(objValue) ? objValue : isIndex(path[index4 + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object4;
        }
        var baseSetData = !metaMap ? identity4 : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity4 : function(func, string5) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string5),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values3(collection));
        }
        function baseSlice(array3, start4, end) {
          var index4 = -1, length3 = array3.length;
          if (start4 < 0) {
            start4 = -start4 > length3 ? 0 : length3 + start4;
          }
          end = end > length3 ? length3 : end;
          if (end < 0) {
            end += length3;
          }
          length3 = start4 > end ? 0 : end - start4 >>> 0;
          start4 >>>= 0;
          var result2 = Array2(length3);
          while (++index4 < length3) {
            result2[index4] = array3[index4 + start4];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value2, index4, collection2) {
            result2 = predicate(value2, index4, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array3, value2, retHighest) {
          var low = 0, high = array3 == null ? low : array3.length;
          if (typeof value2 == "number" && value2 === value2 && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array3[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value2 : computed < value2)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array3, value2, identity4, retHighest);
        }
        function baseSortedIndexBy(array3, value2, iteratee2, retHighest) {
          var low = 0, high = array3 == null ? 0 : array3.length;
          if (high === 0) {
            return 0;
          }
          value2 = iteratee2(value2);
          var valIsNaN = value2 !== value2, valIsNull = value2 === null, valIsSymbol = isSymbol(value2), valIsUndefined = value2 === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array3[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value2 : computed < value2;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array3, iteratee2) {
          var index4 = -1, length3 = array3.length, resIndex = 0, result2 = [];
          while (++index4 < length3) {
            var value2 = array3[index4], computed = iteratee2 ? iteratee2(value2) : value2;
            if (!index4 || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value2 === 0 ? 0 : value2;
            }
          }
          return result2;
        }
        function baseToNumber(value2) {
          if (typeof value2 == "number") {
            return value2;
          }
          if (isSymbol(value2)) {
            return NAN;
          }
          return +value2;
        }
        function baseToString(value2) {
          if (typeof value2 == "string") {
            return value2;
          }
          if (isArray(value2)) {
            return arrayMap(value2, baseToString) + "";
          }
          if (isSymbol(value2)) {
            return symbolToString ? symbolToString.call(value2) : "";
          }
          var result2 = value2 + "";
          return result2 == "0" && 1 / value2 == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array3, iteratee2, comparator) {
          var index4 = -1, includes2 = arrayIncludes, length3 = array3.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length3 >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array3);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index4 < length3) {
              var value2 = array3[index4], computed = iteratee2 ? iteratee2(value2) : value2;
              value2 = comparator || value2 !== 0 ? value2 : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value2);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value2);
              }
            }
          return result2;
        }
        function baseUnset(object4, path) {
          path = castPath(path, object4);
          object4 = parent(object4, path);
          return object4 == null || delete object4[toKey(last(path))];
        }
        function baseUpdate(object4, path, updater, customizer) {
          return baseSet(object4, path, updater(baseGet(object4, path)), customizer);
        }
        function baseWhile(array3, predicate, isDrop, fromRight) {
          var length3 = array3.length, index4 = fromRight ? length3 : -1;
          while ((fromRight ? index4-- : ++index4 < length3) && predicate(array3[index4], index4, array3)) {
          }
          return isDrop ? baseSlice(array3, fromRight ? 0 : index4, fromRight ? index4 + 1 : length3) : baseSlice(array3, fromRight ? index4 + 1 : 0, fromRight ? length3 : index4);
        }
        function baseWrapperValue(value2, actions) {
          var result2 = value2;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length3 = arrays.length;
          if (length3 < 2) {
            return length3 ? baseUniq(arrays[0]) : [];
          }
          var index4 = -1, result2 = Array2(length3);
          while (++index4 < length3) {
            var array3 = arrays[index4], othIndex = -1;
            while (++othIndex < length3) {
              if (othIndex != index4) {
                result2[index4] = baseDifference(result2[index4] || array3, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values4, assignFunc) {
          var index4 = -1, length3 = props.length, valsLength = values4.length, result2 = {};
          while (++index4 < length3) {
            var value2 = index4 < valsLength ? values4[index4] : undefined2;
            assignFunc(result2, props[index4], value2);
          }
          return result2;
        }
        function castArrayLikeObject(value2) {
          return isArrayLikeObject(value2) ? value2 : [];
        }
        function castFunction(value2) {
          return typeof value2 == "function" ? value2 : identity4;
        }
        function castPath(value2, object4) {
          if (isArray(value2)) {
            return value2;
          }
          return isKey(value2, object4) ? [value2] : stringToPath(toString(value2));
        }
        var castRest = baseRest;
        function castSlice(array3, start4, end) {
          var length3 = array3.length;
          end = end === undefined2 ? length3 : end;
          return !start4 && end >= length3 ? array3 : baseSlice(array3, start4, end);
        }
        var clearTimeout2 = ctxClearTimeout || function(id2) {
          return root3.clearTimeout(id2);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length3 = buffer.length, result2 = allocUnsafe ? allocUnsafe(length3) : new buffer.constructor(length3);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value2, other) {
          if (value2 !== other) {
            var valIsDefined = value2 !== undefined2, valIsNull = value2 === null, valIsReflexive = value2 === value2, valIsSymbol = isSymbol(value2);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value2 > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value2 < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object4, other, orders) {
          var index4 = -1, objCriteria = object4.criteria, othCriteria = other.criteria, length3 = objCriteria.length, ordersLength = orders.length;
          while (++index4 < length3) {
            var result2 = compareAscending(objCriteria[index4], othCriteria[index4]);
            if (result2) {
              if (index4 >= ordersLength) {
                return result2;
              }
              var order = orders[index4];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object4.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array3) {
          var index4 = -1, length3 = source.length;
          array3 || (array3 = Array2(length3));
          while (++index4 < length3) {
            array3[index4] = source[index4];
          }
          return array3;
        }
        function copyObject(source, props, object4, customizer) {
          var isNew = !object4;
          object4 || (object4 = {});
          var index4 = -1, length3 = props.length;
          while (++index4 < length3) {
            var key = props[index4];
            var newValue = customizer ? customizer(object4[key], source[key], key, object4, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object4, key, newValue);
            } else {
              assignValue(object4, key, newValue);
            }
          }
          return object4;
        }
        function copySymbols(source, object4) {
          return copyObject(source, getSymbols(source), object4);
        }
        function copySymbolsIn(source, object4) {
          return copyObject(source, getSymbolsIn(source), object4);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object4, sources) {
            var index4 = -1, length3 = sources.length, customizer = length3 > 1 ? sources[length3 - 1] : undefined2, guard2 = length3 > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length3--, customizer) : undefined2;
            if (guard2 && isIterateeCall(sources[0], sources[1], guard2)) {
              customizer = length3 < 3 ? undefined2 : customizer;
              length3 = 1;
            }
            object4 = Object2(object4);
            while (++index4 < length3) {
              var source = sources[index4];
              if (source) {
                assigner(object4, source, index4, customizer);
              }
            }
            return object4;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length3 = collection.length, index4 = fromRight ? length3 : -1, iterable = Object2(collection);
            while (fromRight ? index4-- : ++index4 < length3) {
              if (iteratee2(iterable[index4], index4, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object4, iteratee2, keysFunc) {
            var index4 = -1, iterable = Object2(object4), props = keysFunc(object4), length3 = props.length;
            while (length3--) {
              var key = props[fromRight ? length3 : ++index4];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object4;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root3 && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string5) {
            string5 = toString(string5);
            var strSymbols = hasUnicode(string5) ? stringToArray(string5) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string5.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string5.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string5) {
            return arrayReduce(words(deburr(string5).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject2(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length3 = arguments.length, args = Array2(length3), index4 = length3, placeholder = getHolder(wrapper);
            while (index4--) {
              args[index4] = arguments[index4];
            }
            var holders = length3 < 3 && args[0] !== placeholder && args[length3 - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length3 -= holders.length;
            if (length3 < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined2,
                args,
                holders,
                undefined2,
                undefined2,
                arity - length3
              );
            }
            var fn = this && this !== root3 && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys2(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index4 = findIndexFunc(collection, predicate, fromIndex);
            return index4 > -1 ? iterable[iteratee2 ? collection[index4] : index4] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length3 = funcs.length, index4 = length3, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index4--) {
              var func = funcs[index4];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index4 = wrapper ? index4 : length3;
            while (++index4 < length3) {
              func = funcs[index4];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value2 = args[0];
              if (wrapper && args.length == 1 && isArray(value2)) {
                return wrapper.plant(value2).value();
              }
              var index5 = 0, result2 = length3 ? funcs[index5].apply(this, args) : value2;
              while (++index5 < length3) {
                result2 = funcs[index5].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length3 = arguments.length, args = Array2(length3), index4 = length3;
            while (index4--) {
              args[index4] = arguments[index4];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length3 -= holdersCount;
            if (isCurried && length3 < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length3
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length3 = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length3 > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length3) {
              args.length = ary2;
            }
            if (this && this !== root3 && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object4, iteratee2) {
            return baseInverter(object4, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value2, other) {
            var result2;
            if (value2 === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value2 !== undefined2) {
              result2 = value2;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value2 == "string" || typeof other == "string") {
                value2 = baseToString(value2);
                other = baseToString(other);
              } else {
                value2 = baseToNumber(value2);
                other = baseToNumber(other);
              }
              result2 = operator(value2, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length3, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length3) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length3 / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length3).join("") : result2.slice(0, length3);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root3 && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start4, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start4, end, step)) {
              end = step = undefined2;
            }
            start4 = toFinite(start4);
            if (end === undefined2) {
              end = start4;
              start4 = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start4 < end ? 1 : -1 : toFinite(step);
            return baseRange(start4, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value2, other) {
            if (!(typeof value2 == "string" && typeof other == "string")) {
              value2 = toNumber(value2);
              other = toNumber(other);
            }
            return operator(value2, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData2(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value2 = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value2) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values4) {
          return new Set2(values4);
        };
        function createToPairs(keysFunc) {
          return function(object4) {
            var tag = getTag(object4);
            if (tag == mapTag) {
              return mapToArray(object4);
            }
            if (tag == setTag) {
              return setToPairs(object4);
            }
            return baseToPairs(object4, keysFunc(object4));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length3 = partials ? partials.length : 0;
          if (!length3) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length3 -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length3, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData2;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object4) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object4, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object4, source, stack) {
          if (isObject2(objValue) && isObject2(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value2) {
          return isPlainObject(value2) ? undefined2 : value2;
        }
        function equalArrays(array3, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array3.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array3);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array3;
          }
          var index4 = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array3, other);
          stack.set(other, array3);
          while (++index4 < arrLength) {
            var arrValue = array3[index4], othValue = other[index4];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index4, other, array3, stack) : customizer(arrValue, othValue, index4, array3, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array3);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object4, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object4.byteLength != other.byteLength || object4.byteOffset != other.byteOffset) {
                return false;
              }
              object4 = object4.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object4.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object4), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object4, +other);
            case errorTag:
              return object4.name == other.name && object4.message == other.message;
            case regexpTag:
            case stringTag:
              return object4 == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object4.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object4);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object4, other);
              var result2 = equalArrays(convert(object4), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object4);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object4) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object4, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object4), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index4 = objLength;
          while (index4--) {
            var key = objProps[index4];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object4);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object4;
          }
          var result2 = true;
          stack.set(object4, other);
          stack.set(other, object4);
          var skipCtor = isPartial;
          while (++index4 < objLength) {
            key = objProps[index4];
            var objValue = object4[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object4, stack) : customizer(objValue, othValue, key, object4, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object4.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object4 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object4);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten2), func + "");
        }
        function getAllKeys(object4) {
          return baseGetAllKeys(object4, keys2, getSymbols);
        }
        function getAllKeysIn(object4) {
          return baseGetAllKeys(object4, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array3 = realNames[result2], length3 = hasOwnProperty.call(realNames, result2) ? array3.length : 0;
          while (length3--) {
            var data = array3[length3], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object4 = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object4.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map6, key) {
          var data = map6.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object4) {
          var result2 = keys2(object4), length3 = result2.length;
          while (length3--) {
            var key = result2[length3], value2 = object4[key];
            result2[length3] = [key, value2, isStrictComparable(value2)];
          }
          return result2;
        }
        function getNative(object4, key) {
          var value2 = getValue(object4, key);
          return baseIsNative(value2) ? value2 : undefined2;
        }
        function getRawTag(value2) {
          var isOwn = hasOwnProperty.call(value2, symToStringTag), tag = value2[symToStringTag];
          try {
            value2[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value2);
          if (unmasked) {
            if (isOwn) {
              value2[symToStringTag] = tag;
            } else {
              delete value2[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object4) {
          if (object4 == null) {
            return [];
          }
          object4 = Object2(object4);
          return arrayFilter(nativeGetSymbols(object4), function(symbol) {
            return propertyIsEnumerable.call(object4, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object4) {
          var result2 = [];
          while (object4) {
            arrayPush(result2, getSymbols(object4));
            object4 = getPrototype(object4);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
          getTag = function(value2) {
            var result2 = baseGetTag(value2), Ctor = result2 == objectTag ? value2.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start4, end, transforms) {
          var index4 = -1, length3 = transforms.length;
          while (++index4 < length3) {
            var data = transforms[index4], size3 = data.size;
            switch (data.type) {
              case "drop":
                start4 += size3;
                break;
              case "dropRight":
                end -= size3;
                break;
              case "take":
                end = nativeMin(end, start4 + size3);
                break;
              case "takeRight":
                start4 = nativeMax(start4, end - size3);
                break;
            }
          }
          return { "start": start4, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object4, path, hasFunc) {
          path = castPath(path, object4);
          var index4 = -1, length3 = path.length, result2 = false;
          while (++index4 < length3) {
            var key = toKey(path[index4]);
            if (!(result2 = object4 != null && hasFunc(object4, key))) {
              break;
            }
            object4 = object4[key];
          }
          if (result2 || ++index4 != length3) {
            return result2;
          }
          length3 = object4 == null ? 0 : object4.length;
          return !!length3 && isLength(length3) && isIndex(key, length3) && (isArray(object4) || isArguments(object4));
        }
        function initCloneArray(array3) {
          var length3 = array3.length, result2 = new array3.constructor(length3);
          if (length3 && typeof array3[0] == "string" && hasOwnProperty.call(array3, "index")) {
            result2.index = array3.index;
            result2.input = array3.input;
          }
          return result2;
        }
        function initCloneObject(object4) {
          return typeof object4.constructor == "function" && !isPrototype(object4) ? baseCreate(getPrototype(object4)) : {};
        }
        function initCloneByTag(object4, tag, isDeep) {
          var Ctor = object4.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object4);
            case boolTag:
            case dateTag:
              return new Ctor(+object4);
            case dataViewTag:
              return cloneDataView(object4, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object4, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object4);
            case regexpTag:
              return cloneRegExp(object4);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object4);
          }
        }
        function insertWrapDetails(source, details) {
          var length3 = details.length;
          if (!length3) {
            return source;
          }
          var lastIndex = length3 - 1;
          details[lastIndex] = (length3 > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length3 > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value2) {
          return isArray(value2) || isArguments(value2) || !!(spreadableSymbol && value2 && value2[spreadableSymbol]);
        }
        function isIndex(value2, length3) {
          var type = typeof value2;
          length3 = length3 == null ? MAX_SAFE_INTEGER : length3;
          return !!length3 && (type == "number" || type != "symbol" && reIsUint.test(value2)) && (value2 > -1 && value2 % 1 == 0 && value2 < length3);
        }
        function isIterateeCall(value2, index4, object4) {
          if (!isObject2(object4)) {
            return false;
          }
          var type = typeof index4;
          if (type == "number" ? isArrayLike(object4) && isIndex(index4, object4.length) : type == "string" && index4 in object4) {
            return eq(object4[index4], value2);
          }
          return false;
        }
        function isKey(value2, object4) {
          if (isArray(value2)) {
            return false;
          }
          var type = typeof value2;
          if (type == "number" || type == "symbol" || type == "boolean" || value2 == null || isSymbol(value2)) {
            return true;
          }
          return reIsPlainProp.test(value2) || !reIsDeepProp.test(value2) || object4 != null && value2 in Object2(object4);
        }
        function isKeyable(value2) {
          var type = typeof value2;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value2 !== "__proto__" : value2 === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value2) {
          var Ctor = value2 && value2.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value2 === proto;
        }
        function isStrictComparable(value2) {
          return value2 === value2 && !isObject2(value2);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object4) {
            if (object4 == null) {
              return false;
            }
            return object4[key] === srcValue && (srcValue !== undefined2 || key in Object2(object4));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value2 = source[3];
          if (value2) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value2, source[4]) : value2;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value2 = source[5];
          if (value2) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value2, source[6]) : value2;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value2 = source[7];
          if (value2) {
            data[7] = value2;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object4) {
          var result2 = [];
          if (object4 != null) {
            for (var key in Object2(object4)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value2) {
          return nativeObjectToString.call(value2);
        }
        function overRest(func, start4, transform2) {
          start4 = nativeMax(start4 === undefined2 ? func.length - 1 : start4, 0);
          return function() {
            var args = arguments, index4 = -1, length3 = nativeMax(args.length - start4, 0), array3 = Array2(length3);
            while (++index4 < length3) {
              array3[index4] = args[start4 + index4];
            }
            index4 = -1;
            var otherArgs = Array2(start4 + 1);
            while (++index4 < start4) {
              otherArgs[index4] = args[index4];
            }
            otherArgs[start4] = transform2(array3);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object4, path) {
          return path.length < 2 ? object4 : baseGet(object4, baseSlice(path, 0, -1));
        }
        function reorder(array3, indexes) {
          var arrLength = array3.length, length3 = nativeMin(indexes.length, arrLength), oldArray = copyArray(array3);
          while (length3--) {
            var index4 = indexes[length3];
            array3[length3] = isIndex(index4, arrLength) ? oldArray[index4] : undefined2;
          }
          return array3;
        }
        function safeGet(object4, key) {
          if (key === "constructor" && typeof object4[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object4[key];
        }
        var setData2 = shortOut(baseSetData);
        var setTimeout3 = ctxSetTimeout || function(func, wait) {
          return root3.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array3, size3) {
          var index4 = -1, length3 = array3.length, lastIndex = length3 - 1;
          size3 = size3 === undefined2 ? length3 : size3;
          while (++index4 < size3) {
            var rand = baseRandom(index4, lastIndex), value2 = array3[rand];
            array3[rand] = array3[index4];
            array3[index4] = value2;
          }
          array3.length = size3;
          return array3;
        }
        var stringToPath = memoizeCapped(function(string5) {
          var result2 = [];
          if (string5.charCodeAt(0) === 46) {
            result2.push("");
          }
          string5.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value2) {
          if (typeof value2 == "string" || isSymbol(value2)) {
            return value2;
          }
          var result2 = value2 + "";
          return result2 == "0" && 1 / value2 == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value2 = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value2)) {
              details.push(value2);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array3, size3, guard2) {
          if (guard2 ? isIterateeCall(array3, size3, guard2) : size3 === undefined2) {
            size3 = 1;
          } else {
            size3 = nativeMax(toInteger(size3), 0);
          }
          var length3 = array3 == null ? 0 : array3.length;
          if (!length3 || size3 < 1) {
            return [];
          }
          var index4 = 0, resIndex = 0, result2 = Array2(nativeCeil(length3 / size3));
          while (index4 < length3) {
            result2[resIndex++] = baseSlice(array3, index4, index4 += size3);
          }
          return result2;
        }
        function compact(array3) {
          var index4 = -1, length3 = array3 == null ? 0 : array3.length, resIndex = 0, result2 = [];
          while (++index4 < length3) {
            var value2 = array3[index4];
            if (value2) {
              result2[resIndex++] = value2;
            }
          }
          return result2;
        }
        function concat3() {
          var length3 = arguments.length;
          if (!length3) {
            return [];
          }
          var args = Array2(length3 - 1), array3 = arguments[0], index4 = length3;
          while (index4--) {
            args[index4 - 1] = arguments[index4];
          }
          return arrayPush(isArray(array3) ? copyArray(array3) : [array3], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array3, values4) {
          return isArrayLikeObject(array3) ? baseDifference(array3, baseFlatten(values4, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array3, values4) {
          var iteratee2 = last(values4);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array3) ? baseDifference(array3, baseFlatten(values4, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array3, values4) {
          var comparator = last(values4);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array3) ? baseDifference(array3, baseFlatten(values4, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array3, n, guard2) {
          var length3 = array3 == null ? 0 : array3.length;
          if (!length3) {
            return [];
          }
          n = guard2 || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array3, n < 0 ? 0 : n, length3);
        }
        function dropRight(array3, n, guard2) {
          var length3 = array3 == null ? 0 : array3.length;
          if (!length3) {
            return [];
          }
          n = guard2 || n === undefined2 ? 1 : toInteger(n);
          n = length3 - n;
          return baseSlice(array3, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array3, predicate) {
          return array3 && array3.length ? baseWhile(array3, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array3, predicate) {
          return array3 && array3.length ? baseWhile(array3, getIteratee(predicate, 3), true) : [];
        }
        function fill(array3, value2, start4, end) {
          var length3 = array3 == null ? 0 : array3.length;
          if (!length3) {
            return [];
          }
          if (start4 && typeof start4 != "number" && isIterateeCall(array3, value2, start4)) {
            start4 = 0;
            end = length3;
          }
          return baseFill(array3, value2, start4, end);
        }
        function findIndex2(array3, predicate, fromIndex) {
          var length3 = array3 == null ? 0 : array3.length;
          if (!length3) {
            return -1;
          }
          var index4 = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index4 < 0) {
            index4 = nativeMax(length3 + index4, 0);
          }
          return baseFindIndex(array3, getIteratee(predicate, 3), index4);
        }
        function findLastIndex(array3, predicate, fromIndex) {
          var length3 = array3 == null ? 0 : array3.length;
          if (!length3) {
            return -1;
          }
          var index4 = length3 - 1;
          if (fromIndex !== undefined2) {
            index4 = toInteger(fromIndex);
            index4 = fromIndex < 0 ? nativeMax(length3 + index4, 0) : nativeMin(index4, length3 - 1);
          }
          return baseFindIndex(array3, getIteratee(predicate, 3), index4, true);
        }
        function flatten2(array3) {
          var length3 = array3 == null ? 0 : array3.length;
          return length3 ? baseFlatten(array3, 1) : [];
        }
        function flattenDeep(array3) {
          var length3 = array3 == null ? 0 : array3.length;
          return length3 ? baseFlatten(array3, INFINITY) : [];
        }
        function flattenDepth(array3, depth) {
          var length3 = array3 == null ? 0 : array3.length;
          if (!length3) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array3, depth);
        }
        function fromPairs(pairs) {
          var index4 = -1, length3 = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index4 < length3) {
            var pair = pairs[index4];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array3) {
          return array3 && array3.length ? array3[0] : undefined2;
        }
        function indexOf(array3, value2, fromIndex) {
          var length3 = array3 == null ? 0 : array3.length;
          if (!length3) {
            return -1;
          }
          var index4 = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index4 < 0) {
            index4 = nativeMax(length3 + index4, 0);
          }
          return baseIndexOf(array3, value2, index4);
        }
        function initial(array3) {
          var length3 = array3 == null ? 0 : array3.length;
          return length3 ? baseSlice(array3, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join2(array3, separator) {
          return array3 == null ? "" : nativeJoin.call(array3, separator);
        }
        function last(array3) {
          var length3 = array3 == null ? 0 : array3.length;
          return length3 ? array3[length3 - 1] : undefined2;
        }
        function lastIndexOf(array3, value2, fromIndex) {
          var length3 = array3 == null ? 0 : array3.length;
          if (!length3) {
            return -1;
          }
          var index4 = length3;
          if (fromIndex !== undefined2) {
            index4 = toInteger(fromIndex);
            index4 = index4 < 0 ? nativeMax(length3 + index4, 0) : nativeMin(index4, length3 - 1);
          }
          return value2 === value2 ? strictLastIndexOf(array3, value2, index4) : baseFindIndex(array3, baseIsNaN, index4, true);
        }
        function nth(array3, n) {
          return array3 && array3.length ? baseNth(array3, toInteger(n)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array3, values4) {
          return array3 && array3.length && values4 && values4.length ? basePullAll(array3, values4) : array3;
        }
        function pullAllBy(array3, values4, iteratee2) {
          return array3 && array3.length && values4 && values4.length ? basePullAll(array3, values4, getIteratee(iteratee2, 2)) : array3;
        }
        function pullAllWith(array3, values4, comparator) {
          return array3 && array3.length && values4 && values4.length ? basePullAll(array3, values4, undefined2, comparator) : array3;
        }
        var pullAt = flatRest(function(array3, indexes) {
          var length3 = array3 == null ? 0 : array3.length, result2 = baseAt(array3, indexes);
          basePullAt(array3, arrayMap(indexes, function(index4) {
            return isIndex(index4, length3) ? +index4 : index4;
          }).sort(compareAscending));
          return result2;
        });
        function remove3(array3, predicate) {
          var result2 = [];
          if (!(array3 && array3.length)) {
            return result2;
          }
          var index4 = -1, indexes = [], length3 = array3.length;
          predicate = getIteratee(predicate, 3);
          while (++index4 < length3) {
            var value2 = array3[index4];
            if (predicate(value2, index4, array3)) {
              result2.push(value2);
              indexes.push(index4);
            }
          }
          basePullAt(array3, indexes);
          return result2;
        }
        function reverse3(array3) {
          return array3 == null ? array3 : nativeReverse.call(array3);
        }
        function slice(array3, start4, end) {
          var length3 = array3 == null ? 0 : array3.length;
          if (!length3) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array3, start4, end)) {
            start4 = 0;
            end = length3;
          } else {
            start4 = start4 == null ? 0 : toInteger(start4);
            end = end === undefined2 ? length3 : toInteger(end);
          }
          return baseSlice(array3, start4, end);
        }
        function sortedIndex(array3, value2) {
          return baseSortedIndex(array3, value2);
        }
        function sortedIndexBy(array3, value2, iteratee2) {
          return baseSortedIndexBy(array3, value2, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array3, value2) {
          var length3 = array3 == null ? 0 : array3.length;
          if (length3) {
            var index4 = baseSortedIndex(array3, value2);
            if (index4 < length3 && eq(array3[index4], value2)) {
              return index4;
            }
          }
          return -1;
        }
        function sortedLastIndex(array3, value2) {
          return baseSortedIndex(array3, value2, true);
        }
        function sortedLastIndexBy(array3, value2, iteratee2) {
          return baseSortedIndexBy(array3, value2, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array3, value2) {
          var length3 = array3 == null ? 0 : array3.length;
          if (length3) {
            var index4 = baseSortedIndex(array3, value2, true) - 1;
            if (eq(array3[index4], value2)) {
              return index4;
            }
          }
          return -1;
        }
        function sortedUniq(array3) {
          return array3 && array3.length ? baseSortedUniq(array3) : [];
        }
        function sortedUniqBy(array3, iteratee2) {
          return array3 && array3.length ? baseSortedUniq(array3, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array3) {
          var length3 = array3 == null ? 0 : array3.length;
          return length3 ? baseSlice(array3, 1, length3) : [];
        }
        function take2(array3, n, guard2) {
          if (!(array3 && array3.length)) {
            return [];
          }
          n = guard2 || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array3, 0, n < 0 ? 0 : n);
        }
        function takeRight(array3, n, guard2) {
          var length3 = array3 == null ? 0 : array3.length;
          if (!length3) {
            return [];
          }
          n = guard2 || n === undefined2 ? 1 : toInteger(n);
          n = length3 - n;
          return baseSlice(array3, n < 0 ? 0 : n, length3);
        }
        function takeRightWhile(array3, predicate) {
          return array3 && array3.length ? baseWhile(array3, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array3, predicate) {
          return array3 && array3.length ? baseWhile(array3, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array3) {
          return array3 && array3.length ? baseUniq(array3) : [];
        }
        function uniqBy(array3, iteratee2) {
          return array3 && array3.length ? baseUniq(array3, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array3, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array3 && array3.length ? baseUniq(array3, undefined2, comparator) : [];
        }
        function unzip(array3) {
          if (!(array3 && array3.length)) {
            return [];
          }
          var length3 = 0;
          array3 = arrayFilter(array3, function(group) {
            if (isArrayLikeObject(group)) {
              length3 = nativeMax(group.length, length3);
              return true;
            }
          });
          return baseTimes(length3, function(index4) {
            return arrayMap(array3, baseProperty(index4));
          });
        }
        function unzipWith(array3, iteratee2) {
          if (!(array3 && array3.length)) {
            return [];
          }
          var result2 = unzip(array3);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without2 = baseRest(function(array3, values4) {
          return isArrayLikeObject(array3) ? baseDifference(array3, values4) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values4) {
          return baseZipObject(props || [], values4 || [], assignValue);
        }
        function zipObjectDeep(props, values4) {
          return baseZipObject(props || [], values4 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length3 = arrays.length, iteratee2 = length3 > 1 ? arrays[length3 - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value2) {
          var result2 = lodash(value2);
          result2.__chain__ = true;
          return result2;
        }
        function tap2(value2, interceptor) {
          interceptor(value2);
          return value2;
        }
        function thru(value2, interceptor) {
          return interceptor(value2);
        }
        var wrapperAt = flatRest(function(paths) {
          var length3 = paths.length, start4 = length3 ? paths[0] : 0, value2 = this.__wrapped__, interceptor = function(object4) {
            return baseAt(object4, paths);
          };
          if (length3 > 1 || this.__actions__.length || !(value2 instanceof LazyWrapper) || !isIndex(start4)) {
            return this.thru(interceptor);
          }
          value2 = value2.slice(start4, +start4 + (length3 ? 1 : 0));
          value2.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value2, this.__chain__).thru(function(array3) {
            if (length3 && !array3.length) {
              array3.push(undefined2);
            }
            return array3;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value2 = done ? undefined2 : this.__values__[this.__index__++];
          return { "done": done, "value": value2 };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value2) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value2;
          return result2;
        }
        function wrapperReverse() {
          var value2 = this.__wrapped__;
          if (value2 instanceof LazyWrapper) {
            var wrapped = value2;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse3],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse3);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value2, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard2) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard2 && isIterateeCall(collection, predicate, guard2)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter2(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find2 = createFind(findIndex2);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map5(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map5(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map5(collection, iteratee2), depth);
        }
        function forEach2(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value2, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value2);
          } else {
            baseAssignValue(result2, key, [value2]);
          }
        });
        function includes(collection, value2, fromIndex, guard2) {
          collection = isArrayLike(collection) ? collection : values3(collection);
          fromIndex = fromIndex && !guard2 ? toInteger(fromIndex) : 0;
          var length3 = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length3 + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length3 && collection.indexOf(value2, fromIndex) > -1 : !!length3 && baseIndexOf(collection, value2, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index4 = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value2) {
            result2[++index4] = isFunc ? apply(path, value2, args) : baseInvoke(value2, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value2, key) {
          baseAssignValue(result2, key, value2);
        });
        function map5(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard2) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard2 ? undefined2 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value2, key) {
          result2[key ? 0 : 1].push(value2);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard2) {
          if (guard2 ? isIterateeCall(collection, n, guard2) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size2(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard2) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard2 && isIterateeCall(collection, predicate, guard2)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length3 = iteratees.length;
          if (length3 > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length3 > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root3.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard2) {
          n = guard2 ? undefined2 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object4, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object4, partials, holders);
        });
        function curry(func, arity, guard2) {
          arity = guard2 ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard2) {
          arity = guard2 ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject2(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout3(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout3(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout2(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout2(timerId);
                timerId = setTimeout3(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout3(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index4 = -1, length3 = nativeMin(args.length, funcsLength);
            while (++index4 < length3) {
              args[index4] = transforms[index4].call(this, args[index4]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start4) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start4 = start4 === undefined2 ? start4 : toInteger(start4);
          return baseRest(func, start4);
        }
        function spread(func, start4) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start4 = start4 == null ? 0 : nativeMax(toInteger(start4), 0);
          return baseRest(function(args) {
            var array3 = args[start4], otherArgs = castSlice(args, 0, start4);
            if (array3) {
              arrayPush(otherArgs, array3);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject2(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value2, wrapper) {
          return partial(castFunction(wrapper), value2);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value2 = arguments[0];
          return isArray(value2) ? value2 : [value2];
        }
        function clone(value2) {
          return baseClone(value2, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value2, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value2, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value2) {
          return baseClone(value2, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value2, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value2, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object4, source) {
          return source == null || baseConformsTo(object4, source, keys2(source));
        }
        function eq(value2, other) {
          return value2 === other || value2 !== value2 && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value2, other) {
          return value2 >= other;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ function() {
          return arguments;
        }()) ? baseIsArguments : function(value2) {
          return isObjectLike(value2) && hasOwnProperty.call(value2, "callee") && !propertyIsEnumerable.call(value2, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value2) {
          return value2 != null && isLength(value2.length) && !isFunction(value2);
        }
        function isArrayLikeObject(value2) {
          return isObjectLike(value2) && isArrayLike(value2);
        }
        function isBoolean(value2) {
          return value2 === true || value2 === false || isObjectLike(value2) && baseGetTag(value2) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value2) {
          return isObjectLike(value2) && value2.nodeType === 1 && !isPlainObject(value2);
        }
        function isEmpty(value2) {
          if (value2 == null) {
            return true;
          }
          if (isArrayLike(value2) && (isArray(value2) || typeof value2 == "string" || typeof value2.splice == "function" || isBuffer(value2) || isTypedArray(value2) || isArguments(value2))) {
            return !value2.length;
          }
          var tag = getTag(value2);
          if (tag == mapTag || tag == setTag) {
            return !value2.size;
          }
          if (isPrototype(value2)) {
            return !baseKeys(value2).length;
          }
          for (var key in value2) {
            if (hasOwnProperty.call(value2, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual3(value2, other) {
          return baseIsEqual(value2, other);
        }
        function isEqualWith(value2, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value2, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value2, other, undefined2, customizer) : !!result2;
        }
        function isError(value2) {
          if (!isObjectLike(value2)) {
            return false;
          }
          var tag = baseGetTag(value2);
          return tag == errorTag || tag == domExcTag || typeof value2.message == "string" && typeof value2.name == "string" && !isPlainObject(value2);
        }
        function isFinite(value2) {
          return typeof value2 == "number" && nativeIsFinite(value2);
        }
        function isFunction(value2) {
          if (!isObject2(value2)) {
            return false;
          }
          var tag = baseGetTag(value2);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value2) {
          return typeof value2 == "number" && value2 == toInteger(value2);
        }
        function isLength(value2) {
          return typeof value2 == "number" && value2 > -1 && value2 % 1 == 0 && value2 <= MAX_SAFE_INTEGER;
        }
        function isObject2(value2) {
          var type = typeof value2;
          return value2 != null && (type == "object" || type == "function");
        }
        function isObjectLike(value2) {
          return value2 != null && typeof value2 == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object4, source) {
          return object4 === source || baseIsMatch(object4, source, getMatchData(source));
        }
        function isMatchWith(object4, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object4, source, getMatchData(source), customizer);
        }
        function isNaN2(value2) {
          return isNumber(value2) && value2 != +value2;
        }
        function isNative(value2) {
          if (isMaskable(value2)) {
            throw new Error3(CORE_ERROR_TEXT);
          }
          return baseIsNative(value2);
        }
        function isNull(value2) {
          return value2 === null;
        }
        function isNil(value2) {
          return value2 == null;
        }
        function isNumber(value2) {
          return typeof value2 == "number" || isObjectLike(value2) && baseGetTag(value2) == numberTag;
        }
        function isPlainObject(value2) {
          if (!isObjectLike(value2) || baseGetTag(value2) != objectTag) {
            return false;
          }
          var proto = getPrototype(value2);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value2) {
          return isInteger(value2) && value2 >= -MAX_SAFE_INTEGER && value2 <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value2) {
          return typeof value2 == "string" || !isArray(value2) && isObjectLike(value2) && baseGetTag(value2) == stringTag;
        }
        function isSymbol(value2) {
          return typeof value2 == "symbol" || isObjectLike(value2) && baseGetTag(value2) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value2) {
          return value2 === undefined2;
        }
        function isWeakMap(value2) {
          return isObjectLike(value2) && getTag(value2) == weakMapTag;
        }
        function isWeakSet(value2) {
          return isObjectLike(value2) && baseGetTag(value2) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value2, other) {
          return value2 <= other;
        });
        function toArray(value2) {
          if (!value2) {
            return [];
          }
          if (isArrayLike(value2)) {
            return isString(value2) ? stringToArray(value2) : copyArray(value2);
          }
          if (symIterator && value2[symIterator]) {
            return iteratorToArray(value2[symIterator]());
          }
          var tag = getTag(value2), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values3;
          return func(value2);
        }
        function toFinite(value2) {
          if (!value2) {
            return value2 === 0 ? value2 : 0;
          }
          value2 = toNumber(value2);
          if (value2 === INFINITY || value2 === -INFINITY) {
            var sign = value2 < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value2 === value2 ? value2 : 0;
        }
        function toInteger(value2) {
          var result2 = toFinite(value2), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value2) {
          return value2 ? baseClamp(toInteger(value2), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value2) {
          if (typeof value2 == "number") {
            return value2;
          }
          if (isSymbol(value2)) {
            return NAN;
          }
          if (isObject2(value2)) {
            var other = typeof value2.valueOf == "function" ? value2.valueOf() : value2;
            value2 = isObject2(other) ? other + "" : other;
          }
          if (typeof value2 != "string") {
            return value2 === 0 ? value2 : +value2;
          }
          value2 = baseTrim(value2);
          var isBinary = reIsBinary.test(value2);
          return isBinary || reIsOctal.test(value2) ? freeParseInt(value2.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value2) ? NAN : +value2;
        }
        function toPlainObject(value2) {
          return copyObject(value2, keysIn(value2));
        }
        function toSafeInteger(value2) {
          return value2 ? baseClamp(toInteger(value2), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value2 === 0 ? value2 : 0;
        }
        function toString(value2) {
          return value2 == null ? "" : baseToString(value2);
        }
        var assign = createAssigner(function(object4, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys2(source), object4);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object4, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object4, source) {
          copyObject(source, keysIn(source), object4);
        });
        var assignInWith = createAssigner(function(object4, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object4, customizer);
        });
        var assignWith = createAssigner(function(object4, source, srcIndex, customizer) {
          copyObject(source, keys2(source), object4, customizer);
        });
        var at2 = flatRest(baseAt);
        function create2(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object4, sources) {
          object4 = Object2(object4);
          var index4 = -1;
          var length3 = sources.length;
          var guard2 = length3 > 2 ? sources[2] : undefined2;
          if (guard2 && isIterateeCall(sources[0], sources[1], guard2)) {
            length3 = 1;
          }
          while (++index4 < length3) {
            var source = sources[index4];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value2 = object4[key];
              if (value2 === undefined2 || eq(value2, objectProto[key]) && !hasOwnProperty.call(object4, key)) {
                object4[key] = source[key];
              }
            }
          }
          return object4;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object4, predicate) {
          return baseFindKey(object4, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object4, predicate) {
          return baseFindKey(object4, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object4, iteratee2) {
          return object4 == null ? object4 : baseFor(object4, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object4, iteratee2) {
          return object4 == null ? object4 : baseForRight(object4, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object4, iteratee2) {
          return object4 && baseForOwn(object4, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object4, iteratee2) {
          return object4 && baseForOwnRight(object4, getIteratee(iteratee2, 3));
        }
        function functions(object4) {
          return object4 == null ? [] : baseFunctions(object4, keys2(object4));
        }
        function functionsIn(object4) {
          return object4 == null ? [] : baseFunctions(object4, keysIn(object4));
        }
        function get2(object4, path, defaultValue) {
          var result2 = object4 == null ? undefined2 : baseGet(object4, path);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object4, path) {
          return object4 != null && hasPath(object4, path, baseHas);
        }
        function hasIn(object4, path) {
          return object4 != null && hasPath(object4, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value2, key) {
          if (value2 != null && typeof value2.toString != "function") {
            value2 = nativeObjectToString.call(value2);
          }
          result2[value2] = key;
        }, constant(identity4));
        var invertBy = createInverter(function(result2, value2, key) {
          if (value2 != null && typeof value2.toString != "function") {
            value2 = nativeObjectToString.call(value2);
          }
          if (hasOwnProperty.call(result2, value2)) {
            result2[value2].push(key);
          } else {
            result2[value2] = [key];
          }
        }, getIteratee);
        var invoke3 = baseRest(baseInvoke);
        function keys2(object4) {
          return isArrayLike(object4) ? arrayLikeKeys(object4) : baseKeys(object4);
        }
        function keysIn(object4) {
          return isArrayLike(object4) ? arrayLikeKeys(object4, true) : baseKeysIn(object4);
        }
        function mapKeys(object4, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object4, function(value2, key, object5) {
            baseAssignValue(result2, iteratee2(value2, key, object5), value2);
          });
          return result2;
        }
        function mapValues(object4, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object4, function(value2, key, object5) {
            baseAssignValue(result2, key, iteratee2(value2, key, object5));
          });
          return result2;
        }
        var merge2 = createAssigner(function(object4, source, srcIndex) {
          baseMerge(object4, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object4, source, srcIndex, customizer) {
          baseMerge(object4, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object4, paths) {
          var result2 = {};
          if (object4 == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object4);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object4, getAllKeysIn(object4), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length3 = paths.length;
          while (length3--) {
            baseUnset(result2, paths[length3]);
          }
          return result2;
        });
        function omitBy(object4, predicate) {
          return pickBy(object4, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object4, paths) {
          return object4 == null ? {} : basePick(object4, paths);
        });
        function pickBy(object4, predicate) {
          if (object4 == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object4), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object4, props, function(value2, path) {
            return predicate(value2, path[0]);
          });
        }
        function result(object4, path, defaultValue) {
          path = castPath(path, object4);
          var index4 = -1, length3 = path.length;
          if (!length3) {
            length3 = 1;
            object4 = undefined2;
          }
          while (++index4 < length3) {
            var value2 = object4 == null ? undefined2 : object4[toKey(path[index4])];
            if (value2 === undefined2) {
              index4 = length3;
              value2 = defaultValue;
            }
            object4 = isFunction(value2) ? value2.call(object4) : value2;
          }
          return object4;
        }
        function set(object4, path, value2) {
          return object4 == null ? object4 : baseSet(object4, path, value2);
        }
        function setWith(object4, path, value2, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object4 == null ? object4 : baseSet(object4, path, value2, customizer);
        }
        var toPairs = createToPairs(keys2);
        var toPairsIn = createToPairs(keysIn);
        function transform(object4, iteratee2, accumulator) {
          var isArr = isArray(object4), isArrLike = isArr || isBuffer(object4) || isTypedArray(object4);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object4 && object4.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject2(object4)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object4)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object4, function(value2, index4, object5) {
            return iteratee2(accumulator, value2, index4, object5);
          });
          return accumulator;
        }
        function unset(object4, path) {
          return object4 == null ? true : baseUnset(object4, path);
        }
        function update3(object4, path, updater) {
          return object4 == null ? object4 : baseUpdate(object4, path, castFunction(updater));
        }
        function updateWith(object4, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object4 == null ? object4 : baseUpdate(object4, path, castFunction(updater), customizer);
        }
        function values3(object4) {
          return object4 == null ? [] : baseValues(object4, keys2(object4));
        }
        function valuesIn(object4) {
          return object4 == null ? [] : baseValues(object4, keysIn(object4));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start4, end) {
          start4 = toFinite(start4);
          if (end === undefined2) {
            end = start4;
            start4 = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start4, end);
        }
        function random2(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index4) {
          word = word.toLowerCase();
          return result2 + (index4 ? capitalize(word) : word);
        });
        function capitalize(string5) {
          return upperFirst(toString(string5).toLowerCase());
        }
        function deburr(string5) {
          string5 = toString(string5);
          return string5 && string5.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string5, target, position) {
          string5 = toString(string5);
          target = baseToString(target);
          var length3 = string5.length;
          position = position === undefined2 ? length3 : baseClamp(toInteger(position), 0, length3);
          var end = position;
          position -= target.length;
          return position >= 0 && string5.slice(position, end) == target;
        }
        function escape3(string5) {
          string5 = toString(string5);
          return string5 && reHasUnescapedHtml.test(string5) ? string5.replace(reUnescapedHtml, escapeHtmlChar) : string5;
        }
        function escapeRegExp(string5) {
          string5 = toString(string5);
          return string5 && reHasRegExpChar.test(string5) ? string5.replace(reRegExpChar, "\\$&") : string5;
        }
        var kebabCase = createCompounder(function(result2, word, index4) {
          return result2 + (index4 ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index4) {
          return result2 + (index4 ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string5, length3, chars) {
          string5 = toString(string5);
          length3 = toInteger(length3);
          var strLength = length3 ? stringSize(string5) : 0;
          if (!length3 || strLength >= length3) {
            return string5;
          }
          var mid = (length3 - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string5 + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string5, length3, chars) {
          string5 = toString(string5);
          length3 = toInteger(length3);
          var strLength = length3 ? stringSize(string5) : 0;
          return length3 && strLength < length3 ? string5 + createPadding(length3 - strLength, chars) : string5;
        }
        function padStart(string5, length3, chars) {
          string5 = toString(string5);
          length3 = toInteger(length3);
          var strLength = length3 ? stringSize(string5) : 0;
          return length3 && strLength < length3 ? createPadding(length3 - strLength, chars) + string5 : string5;
        }
        function parseInt2(string5, radix, guard2) {
          if (guard2 || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string5).replace(reTrimStart, ""), radix || 0);
        }
        function repeat2(string5, n, guard2) {
          if (guard2 ? isIterateeCall(string5, n, guard2) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string5), n);
        }
        function replace3() {
          var args = arguments, string5 = toString(args[0]);
          return args.length < 3 ? string5 : string5.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index4) {
          return result2 + (index4 ? "_" : "") + word.toLowerCase();
        });
        function split3(string5, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string5, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string5 = toString(string5);
          if (string5 && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string5)) {
              return castSlice(stringToArray(string5), 0, limit);
            }
          }
          return string5.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index4) {
          return result2 + (index4 ? " " : "") + upperFirst(word);
        });
        function startsWith(string5, target, position) {
          string5 = toString(string5);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string5.length);
          target = baseToString(target);
          return string5.slice(position, position + target.length) == target;
        }
        function template(string5, options, guard2) {
          var settings = lodash.templateSettings;
          if (guard2 && isIterateeCall(string5, options, guard2)) {
            options = undefined2;
          }
          string5 = toString(string5);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys2(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index4 = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string5.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string5.slice(index4, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index4 = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error3(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value2) {
          return toString(value2).toLowerCase();
        }
        function toUpper(value2) {
          return toString(value2).toUpperCase();
        }
        function trim(string5, chars, guard2) {
          string5 = toString(string5);
          if (string5 && (guard2 || chars === undefined2)) {
            return baseTrim(string5);
          }
          if (!string5 || !(chars = baseToString(chars))) {
            return string5;
          }
          var strSymbols = stringToArray(string5), chrSymbols = stringToArray(chars), start4 = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start4, end).join("");
        }
        function trimEnd(string5, chars, guard2) {
          string5 = toString(string5);
          if (string5 && (guard2 || chars === undefined2)) {
            return string5.slice(0, trimmedEndIndex(string5) + 1);
          }
          if (!string5 || !(chars = baseToString(chars))) {
            return string5;
          }
          var strSymbols = stringToArray(string5), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string5, chars, guard2) {
          string5 = toString(string5);
          if (string5 && (guard2 || chars === undefined2)) {
            return string5.replace(reTrimStart, "");
          }
          if (!string5 || !(chars = baseToString(chars))) {
            return string5;
          }
          var strSymbols = stringToArray(string5), start4 = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start4).join("");
        }
        function truncate2(string5, options) {
          var length3 = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject2(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length3 = "length" in options ? toInteger(options.length) : length3;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string5 = toString(string5);
          var strLength = string5.length;
          if (hasUnicode(string5)) {
            var strSymbols = stringToArray(string5);
            strLength = strSymbols.length;
          }
          if (length3 >= strLength) {
            return string5;
          }
          var end = length3 - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string5.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string5.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string5.indexOf(baseToString(separator), end) != end) {
            var index4 = result2.lastIndexOf(separator);
            if (index4 > -1) {
              result2 = result2.slice(0, index4);
            }
          }
          return result2 + omission;
        }
        function unescape(string5) {
          string5 = toString(string5);
          return string5 && reHasEscapedHtml.test(string5) ? string5.replace(reEscapedHtml, unescapeHtmlChar) : string5;
        }
        var upperCase2 = createCompounder(function(result2, word, index4) {
          return result2 + (index4 ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string5, pattern, guard2) {
          string5 = toString(string5);
          pattern = guard2 ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string5) ? unicodeWords(string5) : asciiWords(string5);
          }
          return string5.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e) {
            return isError(e) ? e : new Error3(e);
          }
        });
        var bindAll = flatRest(function(object4, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object4, key, bind(object4[key], object4));
          });
          return object4;
        });
        function cond(pairs) {
          var length3 = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length3 ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index4 = -1;
            while (++index4 < length3) {
              var pair = pairs[index4];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value2) {
          return function() {
            return value2;
          };
        }
        function defaultTo(value2, defaultValue) {
          return value2 == null || value2 !== value2 ? defaultValue : value2;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity4(value2) {
          return value2;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches2(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object4) {
            return baseInvoke(object4, path, args);
          };
        });
        var methodOf = baseRest(function(object4, args) {
          return function(path) {
            return baseInvoke(object4, path, args);
          };
        });
        function mixin(object4, source, options) {
          var props = keys2(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject2(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object4;
            object4 = this;
            methodNames = baseFunctions(source, keys2(source));
          }
          var chain2 = !(isObject2(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object4);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object4[methodName] = func;
            if (isFunc) {
              object4.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object4(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object4 });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object4, arrayPush([this.value()], arguments));
              };
            }
          });
          return object4;
        }
        function noConflict() {
          if (root3._ === this) {
            root3._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property4(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object4) {
          return function(path) {
            return object4 == null ? undefined2 : baseGet(object4, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index4 = MAX_ARRAY_LENGTH, length3 = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length3, iteratee2);
          while (++index4 < n) {
            iteratee2(index4);
          }
          return result2;
        }
        function toPath(value2) {
          if (isArray(value2)) {
            return arrayMap(value2, toKey);
          }
          return isSymbol(value2) ? [value2] : copyArray(stringToPath(toString(value2)));
        }
        function uniqueId2(prefix) {
          var id2 = ++idCounter;
          return toString(prefix) + id2;
        }
        var add4 = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor2 = createRound("floor");
        function max2(array3) {
          return array3 && array3.length ? baseExtremum(array3, identity4, baseGt) : undefined2;
        }
        function maxBy(array3, iteratee2) {
          return array3 && array3.length ? baseExtremum(array3, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array3) {
          return baseMean(array3, identity4);
        }
        function meanBy(array3, iteratee2) {
          return baseMean(array3, getIteratee(iteratee2, 2));
        }
        function min2(array3) {
          return array3 && array3.length ? baseExtremum(array3, identity4, baseLt) : undefined2;
        }
        function minBy(array3, iteratee2) {
          return array3 && array3.length ? baseExtremum(array3, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round3 = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array3) {
          return array3 && array3.length ? baseSum(array3, identity4) : 0;
        }
        function sumBy(array3, iteratee2) {
          return array3 && array3.length ? baseSum(array3, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at2;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat3;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create2;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter2;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten2;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys2;
        lodash.keysIn = keysIn;
        lodash.map = map5;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches2;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge2;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property4;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove3;
        lodash.rest = rest;
        lodash.reverse = reverse3;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split3;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take2;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap2;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update3;
        lodash.updateWith = updateWith;
        lodash.values = values3;
        lodash.valuesIn = valuesIn;
        lodash.without = without2;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add4;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape3;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find2;
        lodash.findIndex = findIndex2;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor2;
        lodash.forEach = forEach2;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get2;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity4;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke3;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual3;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN2;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject2;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join2;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max2;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min2;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random2;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat2;
        lodash.replace = replace3;
        lodash.result = result;
        lodash.round = round3;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size2;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate2;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId2;
        lodash.upperCase = upperCase2;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach2;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { "chain": false });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index4) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index4 ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index4) {
          var type = index4 + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index4) {
          var takeName = "take" + (index4 ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index4) {
          var dropName = "drop" + (index4 ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity4);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value2) {
            return baseInvoke(value2, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start4, end) {
          start4 = toInteger(start4);
          var result2 = this;
          if (result2.__filtered__ && (start4 > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start4 < 0) {
            result2 = result2.takeRight(-start4);
          } else if (start4) {
            result2 = result2.drop(start4);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start4);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value2 = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value2 instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value2);
            var interceptor = function(value3) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value3], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value2 = onlyLazy ? value2 : new LazyWrapper(this);
              var result2 = func.apply(value2, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value2 = this.value();
              return func.apply(isArray(value2) ? value2 : [], args);
            }
            return this[chainName](function(value3) {
              return func.apply(isArray(value3) ? value3 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      };
      var _2 = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root3._ = _2;
        define(function() {
          return _2;
        });
      } else if (freeModule) {
        (freeModule.exports = _2)._ = _2;
        freeExports._ = _2;
      } else {
        root3._ = _2;
      }
    }).call(exports);
  }
});

// build/dev/javascript/prelude.mjs
var CustomType = class {
  withFields(fields) {
    let properties = Object.keys(this).map(
      (label) => label in fields ? fields[label] : this[label]
    );
    return new this.constructor(...properties);
  }
};
var List = class {
  static fromArray(array3, tail) {
    let t = tail || new Empty();
    for (let i = array3.length - 1; i >= 0; --i) {
      t = new NonEmpty(array3[i], t);
    }
    return t;
  }
  [Symbol.iterator]() {
    return new ListIterator(this);
  }
  toArray() {
    return [...this];
  }
  // @internal
  atLeastLength(desired) {
    let current = this;
    while (desired-- > 0 && current) current = current.tail;
    return current !== void 0;
  }
  // @internal
  hasLength(desired) {
    let current = this;
    while (desired-- > 0 && current) current = current.tail;
    return desired === -1 && current instanceof Empty;
  }
  // @internal
  countLength() {
    let current = this;
    let length3 = 0;
    while (current) {
      current = current.tail;
      length3++;
    }
    return length3 - 1;
  }
};
function prepend(element5, tail) {
  return new NonEmpty(element5, tail);
}
function toList(elements, tail) {
  return List.fromArray(elements, tail);
}
var ListIterator = class {
  #current;
  constructor(current) {
    this.#current = current;
  }
  next() {
    if (this.#current instanceof Empty) {
      return { done: true };
    } else {
      let { head, tail } = this.#current;
      this.#current = tail;
      return { value: head, done: false };
    }
  }
};
var Empty = class extends List {
};
var NonEmpty = class extends List {
  constructor(head, tail) {
    super();
    this.head = head;
    this.tail = tail;
  }
};
var BitArray = class {
  /**
   * The size in bits of this bit array's data.
   *
   * @type {number}
   */
  bitSize;
  /**
   * The size in bytes of this bit array's data. If this bit array doesn't store
   * a whole number of bytes then this value is rounded up.
   *
   * @type {number}
   */
  byteSize;
  /**
   * The number of unused high bits in the first byte of this bit array's
   * buffer prior to the start of its data. The value of any unused high bits is
   * undefined.
   *
   * The bit offset will be in the range 0-7.
   *
   * @type {number}
   */
  bitOffset;
  /**
   * The raw bytes that hold this bit array's data.
   *
   * If `bitOffset` is not zero then there are unused high bits in the first
   * byte of this buffer.
   *
   * If `bitOffset + bitSize` is not a multiple of 8 then there are unused low
   * bits in the last byte of this buffer.
   *
   * @type {Uint8Array}
   */
  rawBuffer;
  /**
   * Constructs a new bit array from a `Uint8Array`, an optional size in
   * bits, and an optional bit offset.
   *
   * If no bit size is specified it is taken as `buffer.length * 8`, i.e. all
   * bytes in the buffer make up the new bit array's data.
   *
   * If no bit offset is specified it defaults to zero, i.e. there are no unused
   * high bits in the first byte of the buffer.
   *
   * @param {Uint8Array} buffer
   * @param {number} [bitSize]
   * @param {number} [bitOffset]
   */
  constructor(buffer, bitSize, bitOffset) {
    if (!(buffer instanceof Uint8Array)) {
      throw globalThis.Error(
        "BitArray can only be constructed from a Uint8Array"
      );
    }
    this.bitSize = bitSize ?? buffer.length * 8;
    this.byteSize = Math.trunc((this.bitSize + 7) / 8);
    this.bitOffset = bitOffset ?? 0;
    if (this.bitSize < 0) {
      throw globalThis.Error(`BitArray bit size is invalid: ${this.bitSize}`);
    }
    if (this.bitOffset < 0 || this.bitOffset > 7) {
      throw globalThis.Error(
        `BitArray bit offset is invalid: ${this.bitOffset}`
      );
    }
    if (buffer.length !== Math.trunc((this.bitOffset + this.bitSize + 7) / 8)) {
      throw globalThis.Error("BitArray buffer length is invalid");
    }
    this.rawBuffer = buffer;
  }
  /**
   * Returns a specific byte in this bit array. If the byte index is out of
   * range then `undefined` is returned.
   *
   * When returning the final byte of a bit array with a bit size that's not a
   * multiple of 8, the content of the unused low bits are undefined.
   *
   * @param {number} index
   * @returns {number | undefined}
   */
  byteAt(index4) {
    if (index4 < 0 || index4 >= this.byteSize) {
      return void 0;
    }
    return bitArrayByteAt(this.rawBuffer, this.bitOffset, index4);
  }
  /** @internal */
  equals(other) {
    if (this.bitSize !== other.bitSize) {
      return false;
    }
    const wholeByteCount = Math.trunc(this.bitSize / 8);
    if (this.bitOffset === 0 && other.bitOffset === 0) {
      for (let i = 0; i < wholeByteCount; i++) {
        if (this.rawBuffer[i] !== other.rawBuffer[i]) {
          return false;
        }
      }
      const trailingBitsCount = this.bitSize % 8;
      if (trailingBitsCount) {
        const unusedLowBitCount = 8 - trailingBitsCount;
        if (this.rawBuffer[wholeByteCount] >> unusedLowBitCount !== other.rawBuffer[wholeByteCount] >> unusedLowBitCount) {
          return false;
        }
      }
    } else {
      for (let i = 0; i < wholeByteCount; i++) {
        const a = bitArrayByteAt(this.rawBuffer, this.bitOffset, i);
        const b = bitArrayByteAt(other.rawBuffer, other.bitOffset, i);
        if (a !== b) {
          return false;
        }
      }
      const trailingBitsCount = this.bitSize % 8;
      if (trailingBitsCount) {
        const a = bitArrayByteAt(
          this.rawBuffer,
          this.bitOffset,
          wholeByteCount
        );
        const b = bitArrayByteAt(
          other.rawBuffer,
          other.bitOffset,
          wholeByteCount
        );
        const unusedLowBitCount = 8 - trailingBitsCount;
        if (a >> unusedLowBitCount !== b >> unusedLowBitCount) {
          return false;
        }
      }
    }
    return true;
  }
  /**
   * Returns this bit array's internal buffer.
   *
   * @deprecated Use `BitArray.byteAt()` or `BitArray.rawBuffer` instead.
   *
   * @returns {Uint8Array}
   */
  get buffer() {
    bitArrayPrintDeprecationWarning(
      "buffer",
      "Use BitArray.byteAt() or BitArray.rawBuffer instead"
    );
    if (this.bitOffset !== 0 || this.bitSize % 8 !== 0) {
      throw new globalThis.Error(
        "BitArray.buffer does not support unaligned bit arrays"
      );
    }
    return this.rawBuffer;
  }
  /**
   * Returns the length in bytes of this bit array's internal buffer.
   *
   * @deprecated Use `BitArray.bitSize` or `BitArray.byteSize` instead.
   *
   * @returns {number}
   */
  get length() {
    bitArrayPrintDeprecationWarning(
      "length",
      "Use BitArray.bitSize or BitArray.byteSize instead"
    );
    if (this.bitOffset !== 0 || this.bitSize % 8 !== 0) {
      throw new globalThis.Error(
        "BitArray.length does not support unaligned bit arrays"
      );
    }
    return this.rawBuffer.length;
  }
};
function bitArrayByteAt(buffer, bitOffset, index4) {
  if (bitOffset === 0) {
    return buffer[index4] ?? 0;
  } else {
    const a = buffer[index4] << bitOffset & 255;
    const b = buffer[index4 + 1] >> 8 - bitOffset;
    return a | b;
  }
}
var UtfCodepoint = class {
  constructor(value2) {
    this.value = value2;
  }
};
var isBitArrayDeprecationMessagePrinted = {};
function bitArrayPrintDeprecationWarning(name, message) {
  if (isBitArrayDeprecationMessagePrinted[name]) {
    return;
  }
  console.warn(
    `Deprecated BitArray.${name} property used in JavaScript FFI code. ${message}.`
  );
  isBitArrayDeprecationMessagePrinted[name] = true;
}
function toBitArray(segments) {
  if (segments.length === 0) {
    return new BitArray(new Uint8Array());
  }
  if (segments.length === 1) {
    const segment = segments[0];
    if (segment instanceof BitArray) {
      return segment;
    }
    if (segment instanceof Uint8Array) {
      return new BitArray(segment);
    }
    return new BitArray(new Uint8Array(
      /** @type {number[]} */
      segments
    ));
  }
  let bitSize = 0;
  let areAllSegmentsNumbers = true;
  for (const segment of segments) {
    if (segment instanceof BitArray) {
      bitSize += segment.bitSize;
      areAllSegmentsNumbers = false;
    } else if (segment instanceof Uint8Array) {
      bitSize += segment.byteLength * 8;
      areAllSegmentsNumbers = false;
    } else {
      bitSize += 8;
    }
  }
  if (areAllSegmentsNumbers) {
    return new BitArray(new Uint8Array(
      /** @type {number[]} */
      segments
    ));
  }
  const buffer = new Uint8Array(Math.trunc((bitSize + 7) / 8));
  let cursor2 = 0;
  for (let segment of segments) {
    const isCursorByteAligned = cursor2 % 8 === 0;
    if (segment instanceof BitArray) {
      if (isCursorByteAligned && segment.bitOffset === 0) {
        buffer.set(segment.rawBuffer, cursor2 / 8);
        cursor2 += segment.bitSize;
        const trailingBitsCount = segment.bitSize % 8;
        if (trailingBitsCount !== 0) {
          const lastByteIndex = Math.trunc(cursor2 / 8);
          buffer[lastByteIndex] >>= 8 - trailingBitsCount;
          buffer[lastByteIndex] <<= 8 - trailingBitsCount;
        }
      } else {
        appendUnalignedBits(
          segment.rawBuffer,
          segment.bitSize,
          segment.bitOffset
        );
      }
    } else if (segment instanceof Uint8Array) {
      if (isCursorByteAligned) {
        buffer.set(segment, cursor2 / 8);
        cursor2 += segment.byteLength * 8;
      } else {
        appendUnalignedBits(segment, segment.byteLength * 8, 0);
      }
    } else {
      if (isCursorByteAligned) {
        buffer[cursor2 / 8] = segment;
        cursor2 += 8;
      } else {
        appendUnalignedBits(new Uint8Array([segment]), 8, 0);
      }
    }
  }
  function appendUnalignedBits(unalignedBits, size2, offset) {
    if (size2 === 0) {
      return;
    }
    const byteSize = Math.trunc(size2 + 7 / 8);
    const highBitsCount = cursor2 % 8;
    const lowBitsCount = 8 - highBitsCount;
    let byteIndex = Math.trunc(cursor2 / 8);
    for (let i = 0; i < byteSize; i++) {
      let byte = bitArrayByteAt(unalignedBits, offset, i);
      if (size2 < 8) {
        byte >>= 8 - size2;
        byte <<= 8 - size2;
      }
      buffer[byteIndex] |= byte >> highBitsCount;
      let appendedBitsCount = size2 - Math.max(0, size2 - lowBitsCount);
      size2 -= appendedBitsCount;
      cursor2 += appendedBitsCount;
      if (size2 === 0) {
        break;
      }
      buffer[++byteIndex] = byte << lowBitsCount;
      appendedBitsCount = size2 - Math.max(0, size2 - highBitsCount);
      size2 -= appendedBitsCount;
      cursor2 += appendedBitsCount;
    }
  }
  return new BitArray(buffer, bitSize);
}
function sizedInt(value2, size2, isBigEndian) {
  if (size2 <= 0) {
    return new Uint8Array();
  }
  if (size2 === 8) {
    return new Uint8Array([value2]);
  }
  if (size2 < 8) {
    value2 <<= 8 - size2;
    return new BitArray(new Uint8Array([value2]), size2);
  }
  const buffer = new Uint8Array(Math.trunc((size2 + 7) / 8));
  const trailingBitsCount = size2 % 8;
  const unusedBitsCount = 8 - trailingBitsCount;
  if (size2 <= 32) {
    if (isBigEndian) {
      let i = buffer.length - 1;
      if (trailingBitsCount) {
        buffer[i--] = value2 << unusedBitsCount & 255;
        value2 >>= trailingBitsCount;
      }
      for (; i >= 0; i--) {
        buffer[i] = value2;
        value2 >>= 8;
      }
    } else {
      let i = 0;
      const wholeByteCount = Math.trunc(size2 / 8);
      for (; i < wholeByteCount; i++) {
        buffer[i] = value2;
        value2 >>= 8;
      }
      if (trailingBitsCount) {
        buffer[i] = value2 << unusedBitsCount;
      }
    }
  } else {
    const bigTrailingBitsCount = BigInt(trailingBitsCount);
    const bigUnusedBitsCount = BigInt(unusedBitsCount);
    let bigValue = BigInt(value2);
    if (isBigEndian) {
      let i = buffer.length - 1;
      if (trailingBitsCount) {
        buffer[i--] = Number(bigValue << bigUnusedBitsCount);
        bigValue >>= bigTrailingBitsCount;
      }
      for (; i >= 0; i--) {
        buffer[i] = Number(bigValue);
        bigValue >>= 8n;
      }
    } else {
      let i = 0;
      const wholeByteCount = Math.trunc(size2 / 8);
      for (; i < wholeByteCount; i++) {
        buffer[i] = Number(bigValue);
        bigValue >>= 8n;
      }
      if (trailingBitsCount) {
        buffer[i] = Number(bigValue << bigUnusedBitsCount);
      }
    }
  }
  if (trailingBitsCount) {
    return new BitArray(buffer, size2);
  }
  return buffer;
}
var Result = class _Result extends CustomType {
  // @internal
  static isResult(data) {
    return data instanceof _Result;
  }
};
var Ok = class extends Result {
  constructor(value2) {
    super();
    this[0] = value2;
  }
  // @internal
  isOk() {
    return true;
  }
};
var Error2 = class extends Result {
  constructor(detail) {
    super();
    this[0] = detail;
  }
  // @internal
  isOk() {
    return false;
  }
};
function isEqual(x, y) {
  let values3 = [x, y];
  while (values3.length) {
    let a = values3.pop();
    let b = values3.pop();
    if (a === b) continue;
    if (!isObject(a) || !isObject(b)) return false;
    let unequal = !structurallyCompatibleObjects(a, b) || unequalDates(a, b) || unequalBuffers(a, b) || unequalArrays(a, b) || unequalMaps(a, b) || unequalSets(a, b) || unequalRegExps(a, b);
    if (unequal) return false;
    const proto = Object.getPrototypeOf(a);
    if (proto !== null && typeof proto.equals === "function") {
      try {
        if (a.equals(b)) continue;
        else return false;
      } catch {
      }
    }
    let [keys2, get2] = getters(a);
    const ka = keys2(a);
    const kb = keys2(b);
    if (ka.length !== kb.length) return false;
    for (let k of ka) {
      values3.push(get2(a, k), get2(b, k));
    }
  }
  return true;
}
function getters(object4) {
  if (object4 instanceof Map) {
    return [(x) => x.keys(), (x, y) => x.get(y)];
  } else {
    let extra = object4 instanceof globalThis.Error ? ["message"] : [];
    return [(x) => [...extra, ...Object.keys(x)], (x, y) => x[y]];
  }
}
function unequalDates(a, b) {
  return a instanceof Date && (a > b || a < b);
}
function unequalBuffers(a, b) {
  return !(a instanceof BitArray) && a.buffer instanceof ArrayBuffer && a.BYTES_PER_ELEMENT && !(a.byteLength === b.byteLength && a.every((n, i) => n === b[i]));
}
function unequalArrays(a, b) {
  return Array.isArray(a) && a.length !== b.length;
}
function unequalMaps(a, b) {
  return a instanceof Map && a.size !== b.size;
}
function unequalSets(a, b) {
  return a instanceof Set && (a.size != b.size || [...a].some((e) => !b.has(e)));
}
function unequalRegExps(a, b) {
  return a instanceof RegExp && (a.source !== b.source || a.flags !== b.flags);
}
function isObject(a) {
  return typeof a === "object" && a !== null;
}
function structurallyCompatibleObjects(a, b) {
  if (typeof a !== "object" && typeof b !== "object" && (!a || !b))
    return false;
  let nonstructural = [Promise, WeakSet, WeakMap, Function];
  if (nonstructural.some((c) => a instanceof c)) return false;
  return a.constructor === b.constructor;
}
function makeError(variant, file, module, line, fn, message, extra) {
  let error = new globalThis.Error(message);
  error.gleam_error = variant;
  error.file = file;
  error.module = module;
  error.line = line;
  error.function = fn;
  error.fn = fn;
  for (let k in extra) error[k] = extra[k];
  return error;
}

// build/dev/javascript/gleam_stdlib/gleam/option.mjs
var Some = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var None = class extends CustomType {
};
function unwrap(option, default$) {
  if (option instanceof Some) {
    let x = option[0];
    return x;
  } else {
    return default$;
  }
}
function lazy_unwrap(option, default$) {
  if (option instanceof Some) {
    let x = option[0];
    return x;
  } else {
    return default$();
  }
}

// build/dev/javascript/gleam_stdlib/dict.mjs
var referenceMap = /* @__PURE__ */ new WeakMap();
var tempDataView = /* @__PURE__ */ new DataView(
  /* @__PURE__ */ new ArrayBuffer(8)
);
var referenceUID = 0;
function hashByReference(o) {
  const known = referenceMap.get(o);
  if (known !== void 0) {
    return known;
  }
  const hash = referenceUID++;
  if (referenceUID === 2147483647) {
    referenceUID = 0;
  }
  referenceMap.set(o, hash);
  return hash;
}
function hashMerge(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2) | 0;
}
function hashString(s) {
  let hash = 0;
  const len = s.length;
  for (let i = 0; i < len; i++) {
    hash = Math.imul(31, hash) + s.charCodeAt(i) | 0;
  }
  return hash;
}
function hashNumber(n) {
  tempDataView.setFloat64(0, n);
  const i = tempDataView.getInt32(0);
  const j = tempDataView.getInt32(4);
  return Math.imul(73244475, i >> 16 ^ i) ^ j;
}
function hashBigInt(n) {
  return hashString(n.toString());
}
function hashObject(o) {
  const proto = Object.getPrototypeOf(o);
  if (proto !== null && typeof proto.hashCode === "function") {
    try {
      const code = o.hashCode(o);
      if (typeof code === "number") {
        return code;
      }
    } catch {
    }
  }
  if (o instanceof Promise || o instanceof WeakSet || o instanceof WeakMap) {
    return hashByReference(o);
  }
  if (o instanceof Date) {
    return hashNumber(o.getTime());
  }
  let h = 0;
  if (o instanceof ArrayBuffer) {
    o = new Uint8Array(o);
  }
  if (Array.isArray(o) || o instanceof Uint8Array) {
    for (let i = 0; i < o.length; i++) {
      h = Math.imul(31, h) + getHash(o[i]) | 0;
    }
  } else if (o instanceof Set) {
    o.forEach((v) => {
      h = h + getHash(v) | 0;
    });
  } else if (o instanceof Map) {
    o.forEach((v, k) => {
      h = h + hashMerge(getHash(v), getHash(k)) | 0;
    });
  } else {
    const keys2 = Object.keys(o);
    for (let i = 0; i < keys2.length; i++) {
      const k = keys2[i];
      const v = o[k];
      h = h + hashMerge(getHash(v), hashString(k)) | 0;
    }
  }
  return h;
}
function getHash(u) {
  if (u === null) return 1108378658;
  if (u === void 0) return 1108378659;
  if (u === true) return 1108378657;
  if (u === false) return 1108378656;
  switch (typeof u) {
    case "number":
      return hashNumber(u);
    case "string":
      return hashString(u);
    case "bigint":
      return hashBigInt(u);
    case "object":
      return hashObject(u);
    case "symbol":
      return hashByReference(u);
    case "function":
      return hashByReference(u);
    default:
      return 0;
  }
}
var SHIFT = 5;
var BUCKET_SIZE = Math.pow(2, SHIFT);
var MASK = BUCKET_SIZE - 1;
var MAX_INDEX_NODE = BUCKET_SIZE / 2;
var MIN_ARRAY_NODE = BUCKET_SIZE / 4;
var ENTRY = 0;
var ARRAY_NODE = 1;
var INDEX_NODE = 2;
var COLLISION_NODE = 3;
var EMPTY = {
  type: INDEX_NODE,
  bitmap: 0,
  array: []
};
function mask(hash, shift) {
  return hash >>> shift & MASK;
}
function bitpos(hash, shift) {
  return 1 << mask(hash, shift);
}
function bitcount(x) {
  x -= x >> 1 & 1431655765;
  x = (x & 858993459) + (x >> 2 & 858993459);
  x = x + (x >> 4) & 252645135;
  x += x >> 8;
  x += x >> 16;
  return x & 127;
}
function index(bitmap, bit) {
  return bitcount(bitmap & bit - 1);
}
function cloneAndSet(arr, at2, val) {
  const len = arr.length;
  const out = new Array(len);
  for (let i = 0; i < len; ++i) {
    out[i] = arr[i];
  }
  out[at2] = val;
  return out;
}
function spliceIn(arr, at2, val) {
  const len = arr.length;
  const out = new Array(len + 1);
  let i = 0;
  let g = 0;
  while (i < at2) {
    out[g++] = arr[i++];
  }
  out[g++] = val;
  while (i < len) {
    out[g++] = arr[i++];
  }
  return out;
}
function spliceOut(arr, at2) {
  const len = arr.length;
  const out = new Array(len - 1);
  let i = 0;
  let g = 0;
  while (i < at2) {
    out[g++] = arr[i++];
  }
  ++i;
  while (i < len) {
    out[g++] = arr[i++];
  }
  return out;
}
function createNode(shift, key1, val1, key2hash, key2, val2) {
  const key1hash = getHash(key1);
  if (key1hash === key2hash) {
    return {
      type: COLLISION_NODE,
      hash: key1hash,
      array: [
        { type: ENTRY, k: key1, v: val1 },
        { type: ENTRY, k: key2, v: val2 }
      ]
    };
  }
  const addedLeaf = { val: false };
  return assoc(
    assocIndex(EMPTY, shift, key1hash, key1, val1, addedLeaf),
    shift,
    key2hash,
    key2,
    val2,
    addedLeaf
  );
}
function assoc(root3, shift, hash, key, val, addedLeaf) {
  switch (root3.type) {
    case ARRAY_NODE:
      return assocArray(root3, shift, hash, key, val, addedLeaf);
    case INDEX_NODE:
      return assocIndex(root3, shift, hash, key, val, addedLeaf);
    case COLLISION_NODE:
      return assocCollision(root3, shift, hash, key, val, addedLeaf);
  }
}
function assocArray(root3, shift, hash, key, val, addedLeaf) {
  const idx = mask(hash, shift);
  const node2 = root3.array[idx];
  if (node2 === void 0) {
    addedLeaf.val = true;
    return {
      type: ARRAY_NODE,
      size: root3.size + 1,
      array: cloneAndSet(root3.array, idx, { type: ENTRY, k: key, v: val })
    };
  }
  if (node2.type === ENTRY) {
    if (isEqual(key, node2.k)) {
      if (val === node2.v) {
        return root3;
      }
      return {
        type: ARRAY_NODE,
        size: root3.size,
        array: cloneAndSet(root3.array, idx, {
          type: ENTRY,
          k: key,
          v: val
        })
      };
    }
    addedLeaf.val = true;
    return {
      type: ARRAY_NODE,
      size: root3.size,
      array: cloneAndSet(
        root3.array,
        idx,
        createNode(shift + SHIFT, node2.k, node2.v, hash, key, val)
      )
    };
  }
  const n = assoc(node2, shift + SHIFT, hash, key, val, addedLeaf);
  if (n === node2) {
    return root3;
  }
  return {
    type: ARRAY_NODE,
    size: root3.size,
    array: cloneAndSet(root3.array, idx, n)
  };
}
function assocIndex(root3, shift, hash, key, val, addedLeaf) {
  const bit = bitpos(hash, shift);
  const idx = index(root3.bitmap, bit);
  if ((root3.bitmap & bit) !== 0) {
    const node2 = root3.array[idx];
    if (node2.type !== ENTRY) {
      const n = assoc(node2, shift + SHIFT, hash, key, val, addedLeaf);
      if (n === node2) {
        return root3;
      }
      return {
        type: INDEX_NODE,
        bitmap: root3.bitmap,
        array: cloneAndSet(root3.array, idx, n)
      };
    }
    const nodeKey = node2.k;
    if (isEqual(key, nodeKey)) {
      if (val === node2.v) {
        return root3;
      }
      return {
        type: INDEX_NODE,
        bitmap: root3.bitmap,
        array: cloneAndSet(root3.array, idx, {
          type: ENTRY,
          k: key,
          v: val
        })
      };
    }
    addedLeaf.val = true;
    return {
      type: INDEX_NODE,
      bitmap: root3.bitmap,
      array: cloneAndSet(
        root3.array,
        idx,
        createNode(shift + SHIFT, nodeKey, node2.v, hash, key, val)
      )
    };
  } else {
    const n = root3.array.length;
    if (n >= MAX_INDEX_NODE) {
      const nodes = new Array(32);
      const jdx = mask(hash, shift);
      nodes[jdx] = assocIndex(EMPTY, shift + SHIFT, hash, key, val, addedLeaf);
      let j = 0;
      let bitmap = root3.bitmap;
      for (let i = 0; i < 32; i++) {
        if ((bitmap & 1) !== 0) {
          const node2 = root3.array[j++];
          nodes[i] = node2;
        }
        bitmap = bitmap >>> 1;
      }
      return {
        type: ARRAY_NODE,
        size: n + 1,
        array: nodes
      };
    } else {
      const newArray = spliceIn(root3.array, idx, {
        type: ENTRY,
        k: key,
        v: val
      });
      addedLeaf.val = true;
      return {
        type: INDEX_NODE,
        bitmap: root3.bitmap | bit,
        array: newArray
      };
    }
  }
}
function assocCollision(root3, shift, hash, key, val, addedLeaf) {
  if (hash === root3.hash) {
    const idx = collisionIndexOf(root3, key);
    if (idx !== -1) {
      const entry = root3.array[idx];
      if (entry.v === val) {
        return root3;
      }
      return {
        type: COLLISION_NODE,
        hash,
        array: cloneAndSet(root3.array, idx, { type: ENTRY, k: key, v: val })
      };
    }
    const size2 = root3.array.length;
    addedLeaf.val = true;
    return {
      type: COLLISION_NODE,
      hash,
      array: cloneAndSet(root3.array, size2, { type: ENTRY, k: key, v: val })
    };
  }
  return assoc(
    {
      type: INDEX_NODE,
      bitmap: bitpos(root3.hash, shift),
      array: [root3]
    },
    shift,
    hash,
    key,
    val,
    addedLeaf
  );
}
function collisionIndexOf(root3, key) {
  const size2 = root3.array.length;
  for (let i = 0; i < size2; i++) {
    if (isEqual(key, root3.array[i].k)) {
      return i;
    }
  }
  return -1;
}
function find(root3, shift, hash, key) {
  switch (root3.type) {
    case ARRAY_NODE:
      return findArray(root3, shift, hash, key);
    case INDEX_NODE:
      return findIndex(root3, shift, hash, key);
    case COLLISION_NODE:
      return findCollision(root3, key);
  }
}
function findArray(root3, shift, hash, key) {
  const idx = mask(hash, shift);
  const node2 = root3.array[idx];
  if (node2 === void 0) {
    return void 0;
  }
  if (node2.type !== ENTRY) {
    return find(node2, shift + SHIFT, hash, key);
  }
  if (isEqual(key, node2.k)) {
    return node2;
  }
  return void 0;
}
function findIndex(root3, shift, hash, key) {
  const bit = bitpos(hash, shift);
  if ((root3.bitmap & bit) === 0) {
    return void 0;
  }
  const idx = index(root3.bitmap, bit);
  const node2 = root3.array[idx];
  if (node2.type !== ENTRY) {
    return find(node2, shift + SHIFT, hash, key);
  }
  if (isEqual(key, node2.k)) {
    return node2;
  }
  return void 0;
}
function findCollision(root3, key) {
  const idx = collisionIndexOf(root3, key);
  if (idx < 0) {
    return void 0;
  }
  return root3.array[idx];
}
function without(root3, shift, hash, key) {
  switch (root3.type) {
    case ARRAY_NODE:
      return withoutArray(root3, shift, hash, key);
    case INDEX_NODE:
      return withoutIndex(root3, shift, hash, key);
    case COLLISION_NODE:
      return withoutCollision(root3, key);
  }
}
function withoutArray(root3, shift, hash, key) {
  const idx = mask(hash, shift);
  const node2 = root3.array[idx];
  if (node2 === void 0) {
    return root3;
  }
  let n = void 0;
  if (node2.type === ENTRY) {
    if (!isEqual(node2.k, key)) {
      return root3;
    }
  } else {
    n = without(node2, shift + SHIFT, hash, key);
    if (n === node2) {
      return root3;
    }
  }
  if (n === void 0) {
    if (root3.size <= MIN_ARRAY_NODE) {
      const arr = root3.array;
      const out = new Array(root3.size - 1);
      let i = 0;
      let j = 0;
      let bitmap = 0;
      while (i < idx) {
        const nv = arr[i];
        if (nv !== void 0) {
          out[j] = nv;
          bitmap |= 1 << i;
          ++j;
        }
        ++i;
      }
      ++i;
      while (i < arr.length) {
        const nv = arr[i];
        if (nv !== void 0) {
          out[j] = nv;
          bitmap |= 1 << i;
          ++j;
        }
        ++i;
      }
      return {
        type: INDEX_NODE,
        bitmap,
        array: out
      };
    }
    return {
      type: ARRAY_NODE,
      size: root3.size - 1,
      array: cloneAndSet(root3.array, idx, n)
    };
  }
  return {
    type: ARRAY_NODE,
    size: root3.size,
    array: cloneAndSet(root3.array, idx, n)
  };
}
function withoutIndex(root3, shift, hash, key) {
  const bit = bitpos(hash, shift);
  if ((root3.bitmap & bit) === 0) {
    return root3;
  }
  const idx = index(root3.bitmap, bit);
  const node2 = root3.array[idx];
  if (node2.type !== ENTRY) {
    const n = without(node2, shift + SHIFT, hash, key);
    if (n === node2) {
      return root3;
    }
    if (n !== void 0) {
      return {
        type: INDEX_NODE,
        bitmap: root3.bitmap,
        array: cloneAndSet(root3.array, idx, n)
      };
    }
    if (root3.bitmap === bit) {
      return void 0;
    }
    return {
      type: INDEX_NODE,
      bitmap: root3.bitmap ^ bit,
      array: spliceOut(root3.array, idx)
    };
  }
  if (isEqual(key, node2.k)) {
    if (root3.bitmap === bit) {
      return void 0;
    }
    return {
      type: INDEX_NODE,
      bitmap: root3.bitmap ^ bit,
      array: spliceOut(root3.array, idx)
    };
  }
  return root3;
}
function withoutCollision(root3, key) {
  const idx = collisionIndexOf(root3, key);
  if (idx < 0) {
    return root3;
  }
  if (root3.array.length === 1) {
    return void 0;
  }
  return {
    type: COLLISION_NODE,
    hash: root3.hash,
    array: spliceOut(root3.array, idx)
  };
}
function forEach(root3, fn) {
  if (root3 === void 0) {
    return;
  }
  const items = root3.array;
  const size2 = items.length;
  for (let i = 0; i < size2; i++) {
    const item = items[i];
    if (item === void 0) {
      continue;
    }
    if (item.type === ENTRY) {
      fn(item.v, item.k);
      continue;
    }
    forEach(item, fn);
  }
}
var Dict = class _Dict {
  /**
   * @template V
   * @param {Record<string,V>} o
   * @returns {Dict<string,V>}
   */
  static fromObject(o) {
    const keys2 = Object.keys(o);
    let m = _Dict.new();
    for (let i = 0; i < keys2.length; i++) {
      const k = keys2[i];
      m = m.set(k, o[k]);
    }
    return m;
  }
  /**
   * @template K,V
   * @param {Map<K,V>} o
   * @returns {Dict<K,V>}
   */
  static fromMap(o) {
    let m = _Dict.new();
    o.forEach((v, k) => {
      m = m.set(k, v);
    });
    return m;
  }
  static new() {
    return new _Dict(void 0, 0);
  }
  /**
   * @param {undefined | Node<K,V>} root
   * @param {number} size
   */
  constructor(root3, size2) {
    this.root = root3;
    this.size = size2;
  }
  /**
   * @template NotFound
   * @param {K} key
   * @param {NotFound} notFound
   * @returns {NotFound | V}
   */
  get(key, notFound) {
    if (this.root === void 0) {
      return notFound;
    }
    const found = find(this.root, 0, getHash(key), key);
    if (found === void 0) {
      return notFound;
    }
    return found.v;
  }
  /**
   * @param {K} key
   * @param {V} val
   * @returns {Dict<K,V>}
   */
  set(key, val) {
    const addedLeaf = { val: false };
    const root3 = this.root === void 0 ? EMPTY : this.root;
    const newRoot = assoc(root3, 0, getHash(key), key, val, addedLeaf);
    if (newRoot === this.root) {
      return this;
    }
    return new _Dict(newRoot, addedLeaf.val ? this.size + 1 : this.size);
  }
  /**
   * @param {K} key
   * @returns {Dict<K,V>}
   */
  delete(key) {
    if (this.root === void 0) {
      return this;
    }
    const newRoot = without(this.root, 0, getHash(key), key);
    if (newRoot === this.root) {
      return this;
    }
    if (newRoot === void 0) {
      return _Dict.new();
    }
    return new _Dict(newRoot, this.size - 1);
  }
  /**
   * @param {K} key
   * @returns {boolean}
   */
  has(key) {
    if (this.root === void 0) {
      return false;
    }
    return find(this.root, 0, getHash(key), key) !== void 0;
  }
  /**
   * @returns {[K,V][]}
   */
  entries() {
    if (this.root === void 0) {
      return [];
    }
    const result = [];
    this.forEach((v, k) => result.push([k, v]));
    return result;
  }
  /**
   *
   * @param {(val:V,key:K)=>void} fn
   */
  forEach(fn) {
    forEach(this.root, fn);
  }
  hashCode() {
    let h = 0;
    this.forEach((v, k) => {
      h = h + hashMerge(getHash(v), getHash(k)) | 0;
    });
    return h;
  }
  /**
   * @param {unknown} o
   * @returns {boolean}
   */
  equals(o) {
    if (!(o instanceof _Dict) || this.size !== o.size) {
      return false;
    }
    try {
      this.forEach((v, k) => {
        if (!isEqual(o.get(k, !v), v)) {
          throw unequalDictSymbol;
        }
      });
      return true;
    } catch (e) {
      if (e === unequalDictSymbol) {
        return false;
      }
      throw e;
    }
  }
};
var unequalDictSymbol = /* @__PURE__ */ Symbol();

// build/dev/javascript/gleam_stdlib/gleam/dict.mjs
function insert(dict3, key, value2) {
  return map_insert(key, value2, dict3);
}
function reverse_and_concat(loop$remaining, loop$accumulator) {
  while (true) {
    let remaining = loop$remaining;
    let accumulator = loop$accumulator;
    if (remaining instanceof Empty) {
      return accumulator;
    } else {
      let first = remaining.head;
      let rest = remaining.tail;
      loop$remaining = rest;
      loop$accumulator = prepend(first, accumulator);
    }
  }
}
function do_values_loop(loop$list, loop$acc) {
  while (true) {
    let list4 = loop$list;
    let acc = loop$acc;
    if (list4 instanceof Empty) {
      return reverse_and_concat(acc, toList([]));
    } else {
      let rest = list4.tail;
      let value2 = list4.head[1];
      loop$list = rest;
      loop$acc = prepend(value2, acc);
    }
  }
}
function values(dict3) {
  let list_of_pairs = map_to_list(dict3);
  return do_values_loop(list_of_pairs, toList([]));
}

// build/dev/javascript/gleam_stdlib/gleam/order.mjs
var Lt = class extends CustomType {
};
var Eq = class extends CustomType {
};
var Gt = class extends CustomType {
};

// build/dev/javascript/gleam_stdlib/gleam/int.mjs
function add(a, b) {
  return a + b;
}

// build/dev/javascript/gleam_stdlib/gleam/list.mjs
var Ascending = class extends CustomType {
};
var Descending = class extends CustomType {
};
function length_loop(loop$list, loop$count) {
  while (true) {
    let list4 = loop$list;
    let count = loop$count;
    if (list4 instanceof Empty) {
      return count;
    } else {
      let list$1 = list4.tail;
      loop$list = list$1;
      loop$count = count + 1;
    }
  }
}
function length(list4) {
  return length_loop(list4, 0);
}
function reverse_and_prepend(loop$prefix, loop$suffix) {
  while (true) {
    let prefix = loop$prefix;
    let suffix = loop$suffix;
    if (prefix instanceof Empty) {
      return suffix;
    } else {
      let first$1 = prefix.head;
      let rest$1 = prefix.tail;
      loop$prefix = rest$1;
      loop$suffix = prepend(first$1, suffix);
    }
  }
}
function reverse(list4) {
  return reverse_and_prepend(list4, toList([]));
}
function is_empty2(list4) {
  return isEqual(list4, toList([]));
}
function map_loop(loop$list, loop$fun, loop$acc) {
  while (true) {
    let list4 = loop$list;
    let fun = loop$fun;
    let acc = loop$acc;
    if (list4 instanceof Empty) {
      return reverse(acc);
    } else {
      let first$1 = list4.head;
      let rest$1 = list4.tail;
      loop$list = rest$1;
      loop$fun = fun;
      loop$acc = prepend(fun(first$1), acc);
    }
  }
}
function map(list4, fun) {
  return map_loop(list4, fun, toList([]));
}
function append_loop(loop$first, loop$second) {
  while (true) {
    let first = loop$first;
    let second = loop$second;
    if (first instanceof Empty) {
      return second;
    } else {
      let first$1 = first.head;
      let rest$1 = first.tail;
      loop$first = rest$1;
      loop$second = prepend(first$1, second);
    }
  }
}
function append(first, second) {
  return append_loop(reverse(first), second);
}
function prepend2(list4, item) {
  return prepend(item, list4);
}
function flatten_loop(loop$lists, loop$acc) {
  while (true) {
    let lists = loop$lists;
    let acc = loop$acc;
    if (lists instanceof Empty) {
      return reverse(acc);
    } else {
      let list4 = lists.head;
      let further_lists = lists.tail;
      loop$lists = further_lists;
      loop$acc = reverse_and_prepend(list4, acc);
    }
  }
}
function flatten(lists) {
  return flatten_loop(lists, toList([]));
}
function flat_map(list4, fun) {
  return flatten(map(list4, fun));
}
function fold(loop$list, loop$initial, loop$fun) {
  while (true) {
    let list4 = loop$list;
    let initial = loop$initial;
    let fun = loop$fun;
    if (list4 instanceof Empty) {
      return initial;
    } else {
      let first$1 = list4.head;
      let rest$1 = list4.tail;
      loop$list = rest$1;
      loop$initial = fun(initial, first$1);
      loop$fun = fun;
    }
  }
}
function sequences(loop$list, loop$compare, loop$growing, loop$direction, loop$prev, loop$acc) {
  while (true) {
    let list4 = loop$list;
    let compare4 = loop$compare;
    let growing = loop$growing;
    let direction = loop$direction;
    let prev = loop$prev;
    let acc = loop$acc;
    let growing$1 = prepend(prev, growing);
    if (list4 instanceof Empty) {
      if (direction instanceof Ascending) {
        return prepend(reverse(growing$1), acc);
      } else {
        return prepend(growing$1, acc);
      }
    } else {
      let new$1 = list4.head;
      let rest$1 = list4.tail;
      let $ = compare4(prev, new$1);
      if (direction instanceof Ascending) {
        if ($ instanceof Lt) {
          loop$list = rest$1;
          loop$compare = compare4;
          loop$growing = growing$1;
          loop$direction = direction;
          loop$prev = new$1;
          loop$acc = acc;
        } else if ($ instanceof Eq) {
          loop$list = rest$1;
          loop$compare = compare4;
          loop$growing = growing$1;
          loop$direction = direction;
          loop$prev = new$1;
          loop$acc = acc;
        } else {
          let _block;
          if (direction instanceof Ascending) {
            _block = prepend(reverse(growing$1), acc);
          } else {
            _block = prepend(growing$1, acc);
          }
          let acc$1 = _block;
          if (rest$1 instanceof Empty) {
            return prepend(toList([new$1]), acc$1);
          } else {
            let next = rest$1.head;
            let rest$2 = rest$1.tail;
            let _block$1;
            let $1 = compare4(new$1, next);
            if ($1 instanceof Lt) {
              _block$1 = new Ascending();
            } else if ($1 instanceof Eq) {
              _block$1 = new Ascending();
            } else {
              _block$1 = new Descending();
            }
            let direction$1 = _block$1;
            loop$list = rest$2;
            loop$compare = compare4;
            loop$growing = toList([new$1]);
            loop$direction = direction$1;
            loop$prev = next;
            loop$acc = acc$1;
          }
        }
      } else if ($ instanceof Lt) {
        let _block;
        if (direction instanceof Ascending) {
          _block = prepend(reverse(growing$1), acc);
        } else {
          _block = prepend(growing$1, acc);
        }
        let acc$1 = _block;
        if (rest$1 instanceof Empty) {
          return prepend(toList([new$1]), acc$1);
        } else {
          let next = rest$1.head;
          let rest$2 = rest$1.tail;
          let _block$1;
          let $1 = compare4(new$1, next);
          if ($1 instanceof Lt) {
            _block$1 = new Ascending();
          } else if ($1 instanceof Eq) {
            _block$1 = new Ascending();
          } else {
            _block$1 = new Descending();
          }
          let direction$1 = _block$1;
          loop$list = rest$2;
          loop$compare = compare4;
          loop$growing = toList([new$1]);
          loop$direction = direction$1;
          loop$prev = next;
          loop$acc = acc$1;
        }
      } else if ($ instanceof Eq) {
        let _block;
        if (direction instanceof Ascending) {
          _block = prepend(reverse(growing$1), acc);
        } else {
          _block = prepend(growing$1, acc);
        }
        let acc$1 = _block;
        if (rest$1 instanceof Empty) {
          return prepend(toList([new$1]), acc$1);
        } else {
          let next = rest$1.head;
          let rest$2 = rest$1.tail;
          let _block$1;
          let $1 = compare4(new$1, next);
          if ($1 instanceof Lt) {
            _block$1 = new Ascending();
          } else if ($1 instanceof Eq) {
            _block$1 = new Ascending();
          } else {
            _block$1 = new Descending();
          }
          let direction$1 = _block$1;
          loop$list = rest$2;
          loop$compare = compare4;
          loop$growing = toList([new$1]);
          loop$direction = direction$1;
          loop$prev = next;
          loop$acc = acc$1;
        }
      } else {
        loop$list = rest$1;
        loop$compare = compare4;
        loop$growing = growing$1;
        loop$direction = direction;
        loop$prev = new$1;
        loop$acc = acc;
      }
    }
  }
}
function merge_ascendings(loop$list1, loop$list2, loop$compare, loop$acc) {
  while (true) {
    let list1 = loop$list1;
    let list22 = loop$list2;
    let compare4 = loop$compare;
    let acc = loop$acc;
    if (list1 instanceof Empty) {
      let list4 = list22;
      return reverse_and_prepend(list4, acc);
    } else if (list22 instanceof Empty) {
      let list4 = list1;
      return reverse_and_prepend(list4, acc);
    } else {
      let first1 = list1.head;
      let rest1 = list1.tail;
      let first2 = list22.head;
      let rest2 = list22.tail;
      let $ = compare4(first1, first2);
      if ($ instanceof Lt) {
        loop$list1 = rest1;
        loop$list2 = list22;
        loop$compare = compare4;
        loop$acc = prepend(first1, acc);
      } else if ($ instanceof Eq) {
        loop$list1 = list1;
        loop$list2 = rest2;
        loop$compare = compare4;
        loop$acc = prepend(first2, acc);
      } else {
        loop$list1 = list1;
        loop$list2 = rest2;
        loop$compare = compare4;
        loop$acc = prepend(first2, acc);
      }
    }
  }
}
function merge_ascending_pairs(loop$sequences, loop$compare, loop$acc) {
  while (true) {
    let sequences2 = loop$sequences;
    let compare4 = loop$compare;
    let acc = loop$acc;
    if (sequences2 instanceof Empty) {
      return reverse(acc);
    } else {
      let $ = sequences2.tail;
      if ($ instanceof Empty) {
        let sequence = sequences2.head;
        return reverse(prepend(reverse(sequence), acc));
      } else {
        let ascending1 = sequences2.head;
        let ascending2 = $.head;
        let rest$1 = $.tail;
        let descending = merge_ascendings(
          ascending1,
          ascending2,
          compare4,
          toList([])
        );
        loop$sequences = rest$1;
        loop$compare = compare4;
        loop$acc = prepend(descending, acc);
      }
    }
  }
}
function merge_descendings(loop$list1, loop$list2, loop$compare, loop$acc) {
  while (true) {
    let list1 = loop$list1;
    let list22 = loop$list2;
    let compare4 = loop$compare;
    let acc = loop$acc;
    if (list1 instanceof Empty) {
      let list4 = list22;
      return reverse_and_prepend(list4, acc);
    } else if (list22 instanceof Empty) {
      let list4 = list1;
      return reverse_and_prepend(list4, acc);
    } else {
      let first1 = list1.head;
      let rest1 = list1.tail;
      let first2 = list22.head;
      let rest2 = list22.tail;
      let $ = compare4(first1, first2);
      if ($ instanceof Lt) {
        loop$list1 = list1;
        loop$list2 = rest2;
        loop$compare = compare4;
        loop$acc = prepend(first2, acc);
      } else if ($ instanceof Eq) {
        loop$list1 = rest1;
        loop$list2 = list22;
        loop$compare = compare4;
        loop$acc = prepend(first1, acc);
      } else {
        loop$list1 = rest1;
        loop$list2 = list22;
        loop$compare = compare4;
        loop$acc = prepend(first1, acc);
      }
    }
  }
}
function merge_descending_pairs(loop$sequences, loop$compare, loop$acc) {
  while (true) {
    let sequences2 = loop$sequences;
    let compare4 = loop$compare;
    let acc = loop$acc;
    if (sequences2 instanceof Empty) {
      return reverse(acc);
    } else {
      let $ = sequences2.tail;
      if ($ instanceof Empty) {
        let sequence = sequences2.head;
        return reverse(prepend(reverse(sequence), acc));
      } else {
        let descending1 = sequences2.head;
        let descending2 = $.head;
        let rest$1 = $.tail;
        let ascending = merge_descendings(
          descending1,
          descending2,
          compare4,
          toList([])
        );
        loop$sequences = rest$1;
        loop$compare = compare4;
        loop$acc = prepend(ascending, acc);
      }
    }
  }
}
function merge_all(loop$sequences, loop$direction, loop$compare) {
  while (true) {
    let sequences2 = loop$sequences;
    let direction = loop$direction;
    let compare4 = loop$compare;
    if (sequences2 instanceof Empty) {
      return sequences2;
    } else if (direction instanceof Ascending) {
      let $ = sequences2.tail;
      if ($ instanceof Empty) {
        let sequence = sequences2.head;
        return sequence;
      } else {
        let sequences$1 = merge_ascending_pairs(sequences2, compare4, toList([]));
        loop$sequences = sequences$1;
        loop$direction = new Descending();
        loop$compare = compare4;
      }
    } else {
      let $ = sequences2.tail;
      if ($ instanceof Empty) {
        let sequence = sequences2.head;
        return reverse(sequence);
      } else {
        let sequences$1 = merge_descending_pairs(sequences2, compare4, toList([]));
        loop$sequences = sequences$1;
        loop$direction = new Ascending();
        loop$compare = compare4;
      }
    }
  }
}
function sort(list4, compare4) {
  if (list4 instanceof Empty) {
    return list4;
  } else {
    let $ = list4.tail;
    if ($ instanceof Empty) {
      return list4;
    } else {
      let x = list4.head;
      let y = $.head;
      let rest$1 = $.tail;
      let _block;
      let $1 = compare4(x, y);
      if ($1 instanceof Lt) {
        _block = new Ascending();
      } else if ($1 instanceof Eq) {
        _block = new Ascending();
      } else {
        _block = new Descending();
      }
      let direction = _block;
      let sequences$1 = sequences(
        rest$1,
        compare4,
        toList([x]),
        direction,
        y,
        toList([])
      );
      return merge_all(sequences$1, new Ascending(), compare4);
    }
  }
}

// build/dev/javascript/gleam_stdlib/gleam/string.mjs
function append2(first, second) {
  return first + second;
}
function concat_loop(loop$strings, loop$accumulator) {
  while (true) {
    let strings = loop$strings;
    let accumulator = loop$accumulator;
    if (strings instanceof Empty) {
      return accumulator;
    } else {
      let string5 = strings.head;
      let strings$1 = strings.tail;
      loop$strings = strings$1;
      loop$accumulator = accumulator + string5;
    }
  }
}
function concat2(strings) {
  return concat_loop(strings, "");
}
function repeat_loop(loop$string, loop$times, loop$acc) {
  while (true) {
    let string5 = loop$string;
    let times = loop$times;
    let acc = loop$acc;
    let $ = times <= 0;
    if ($) {
      return acc;
    } else {
      loop$string = string5;
      loop$times = times - 1;
      loop$acc = acc + string5;
    }
  }
}
function repeat(string5, times) {
  return repeat_loop(string5, times, "");
}
function join_loop(loop$strings, loop$separator, loop$accumulator) {
  while (true) {
    let strings = loop$strings;
    let separator = loop$separator;
    let accumulator = loop$accumulator;
    if (strings instanceof Empty) {
      return accumulator;
    } else {
      let string5 = strings.head;
      let strings$1 = strings.tail;
      loop$strings = strings$1;
      loop$separator = separator;
      loop$accumulator = accumulator + separator + string5;
    }
  }
}
function join(strings, separator) {
  if (strings instanceof Empty) {
    return "";
  } else {
    let first$1 = strings.head;
    let rest = strings.tail;
    return join_loop(rest, separator, first$1);
  }
}
function do_to_utf_codepoints(string5) {
  let _pipe = string5;
  let _pipe$1 = string_to_codepoint_integer_list(_pipe);
  return map(_pipe$1, codepoint);
}
function to_utf_codepoints(string5) {
  return do_to_utf_codepoints(string5);
}
function inspect2(term) {
  let _pipe = inspect(term);
  return identity(_pipe);
}

// build/dev/javascript/gleam_stdlib/gleam/dynamic/decode.mjs
var DecodeError = class extends CustomType {
  constructor(expected, found, path) {
    super();
    this.expected = expected;
    this.found = found;
    this.path = path;
  }
};
var Decoder = class extends CustomType {
  constructor(function$) {
    super();
    this.function = function$;
  }
};
function run(data, decoder) {
  let $ = decoder.function(data);
  let maybe_invalid_data;
  let errors;
  maybe_invalid_data = $[0];
  errors = $[1];
  if (errors instanceof Empty) {
    return new Ok(maybe_invalid_data);
  } else {
    return new Error2(errors);
  }
}
function success(data) {
  return new Decoder((_2) => {
    return [data, toList([])];
  });
}
function map2(decoder, transformer) {
  return new Decoder(
    (d) => {
      let $ = decoder.function(d);
      let data;
      let errors;
      data = $[0];
      errors = $[1];
      return [transformer(data), errors];
    }
  );
}
function run_decoders(loop$data, loop$failure, loop$decoders) {
  while (true) {
    let data = loop$data;
    let failure2 = loop$failure;
    let decoders = loop$decoders;
    if (decoders instanceof Empty) {
      return failure2;
    } else {
      let decoder = decoders.head;
      let decoders$1 = decoders.tail;
      let $ = decoder.function(data);
      let layer;
      let errors;
      layer = $;
      errors = $[1];
      if (errors instanceof Empty) {
        return layer;
      } else {
        loop$data = data;
        loop$failure = failure2;
        loop$decoders = decoders$1;
      }
    }
  }
}
function one_of(first, alternatives) {
  return new Decoder(
    (dynamic_data) => {
      let $ = first.function(dynamic_data);
      let layer;
      let errors;
      layer = $;
      errors = $[1];
      if (errors instanceof Empty) {
        return layer;
      } else {
        return run_decoders(dynamic_data, layer, alternatives);
      }
    }
  );
}
function run_dynamic_function(data, name, f) {
  let $ = f(data);
  if ($ instanceof Ok) {
    let data$1 = $[0];
    return [data$1, toList([])];
  } else {
    let zero = $[0];
    return [
      zero,
      toList([new DecodeError(name, classify_dynamic(data), toList([]))])
    ];
  }
}
function decode_int(data) {
  return run_dynamic_function(data, "Int", int);
}
var int2 = /* @__PURE__ */ new Decoder(decode_int);
function decode_string(data) {
  return run_dynamic_function(data, "String", string);
}
var string2 = /* @__PURE__ */ new Decoder(decode_string);
function push_path(layer, path) {
  let decoder = one_of(
    string2,
    toList([
      (() => {
        let _pipe = int2;
        return map2(_pipe, to_string);
      })()
    ])
  );
  let path$1 = map(
    path,
    (key) => {
      let key$1 = identity(key);
      let $ = run(key$1, decoder);
      if ($ instanceof Ok) {
        let key$2 = $[0];
        return key$2;
      } else {
        return "<" + classify_dynamic(key$1) + ">";
      }
    }
  );
  let errors = map(
    layer[1],
    (error) => {
      return new DecodeError(
        error.expected,
        error.found,
        append(path$1, error.path)
      );
    }
  );
  return [layer[0], errors];
}
function index3(loop$path, loop$position, loop$inner, loop$data, loop$handle_miss) {
  while (true) {
    let path = loop$path;
    let position = loop$position;
    let inner = loop$inner;
    let data = loop$data;
    let handle_miss = loop$handle_miss;
    if (path instanceof Empty) {
      let _pipe = inner(data);
      return push_path(_pipe, reverse(position));
    } else {
      let key = path.head;
      let path$1 = path.tail;
      let $ = index2(data, key);
      if ($ instanceof Ok) {
        let $1 = $[0];
        if ($1 instanceof Some) {
          let data$1 = $1[0];
          loop$path = path$1;
          loop$position = prepend(key, position);
          loop$inner = inner;
          loop$data = data$1;
          loop$handle_miss = handle_miss;
        } else {
          return handle_miss(data, prepend(key, position));
        }
      } else {
        let kind = $[0];
        let $1 = inner(data);
        let default$;
        default$ = $1[0];
        let _pipe = [
          default$,
          toList([new DecodeError(kind, classify_dynamic(data), toList([]))])
        ];
        return push_path(_pipe, reverse(position));
      }
    }
  }
}
function subfield(field_path, field_decoder, next) {
  return new Decoder(
    (data) => {
      let $ = index3(
        field_path,
        toList([]),
        field_decoder.function,
        data,
        (data2, position) => {
          let $12 = field_decoder.function(data2);
          let default$;
          default$ = $12[0];
          let _pipe = [
            default$,
            toList([new DecodeError("Field", "Nothing", toList([]))])
          ];
          return push_path(_pipe, reverse(position));
        }
      );
      let out;
      let errors1;
      out = $[0];
      errors1 = $[1];
      let $1 = next(out).function(data);
      let out$1;
      let errors2;
      out$1 = $1[0];
      errors2 = $1[1];
      return [out$1, append(errors1, errors2)];
    }
  );
}
function at(path, inner) {
  return new Decoder(
    (data) => {
      return index3(
        path,
        toList([]),
        inner.function,
        data,
        (data2, position) => {
          let $ = inner.function(data2);
          let default$;
          default$ = $[0];
          let _pipe = [
            default$,
            toList([new DecodeError("Field", "Nothing", toList([]))])
          ];
          return push_path(_pipe, reverse(position));
        }
      );
    }
  );
}

// build/dev/javascript/gleam_stdlib/gleam_stdlib.mjs
var Nil = void 0;
var NOT_FOUND = {};
function identity(x) {
  return x;
}
function to_string(term) {
  return term.toString();
}
function starts_with(haystack, needle) {
  return haystack.startsWith(needle);
}
var unicode_whitespaces = [
  " ",
  // Space
  "	",
  // Horizontal tab
  "\n",
  // Line feed
  "\v",
  // Vertical tab
  "\f",
  // Form feed
  "\r",
  // Carriage return
  "\x85",
  // Next line
  "\u2028",
  // Line separator
  "\u2029"
  // Paragraph separator
].join("");
var trim_start_regex = /* @__PURE__ */ new RegExp(
  `^[${unicode_whitespaces}]*`
);
var trim_end_regex = /* @__PURE__ */ new RegExp(`[${unicode_whitespaces}]*$`);
function console_log(term) {
  console.log(term);
}
function codepoint(int5) {
  return new UtfCodepoint(int5);
}
function string_to_codepoint_integer_list(string5) {
  return List.fromArray(Array.from(string5).map((item) => item.codePointAt(0)));
}
function utf_codepoint_to_int(utf_codepoint) {
  return utf_codepoint.value;
}
function new_map() {
  return Dict.new();
}
function map_to_list(map5) {
  return List.fromArray(map5.entries());
}
function map_get(map5, key) {
  const value2 = map5.get(key, NOT_FOUND);
  if (value2 === NOT_FOUND) {
    return new Error2(Nil);
  }
  return new Ok(value2);
}
function map_insert(key, value2, map5) {
  return map5.set(key, value2);
}
function classify_dynamic(data) {
  if (typeof data === "string") {
    return "String";
  } else if (typeof data === "boolean") {
    return "Bool";
  } else if (data instanceof Result) {
    return "Result";
  } else if (data instanceof List) {
    return "List";
  } else if (data instanceof BitArray) {
    return "BitArray";
  } else if (data instanceof Dict) {
    return "Dict";
  } else if (Number.isInteger(data)) {
    return "Int";
  } else if (Array.isArray(data)) {
    return `Array`;
  } else if (typeof data === "number") {
    return "Float";
  } else if (data === null) {
    return "Nil";
  } else if (data === void 0) {
    return "Nil";
  } else {
    const type = typeof data;
    return type.charAt(0).toUpperCase() + type.slice(1);
  }
}
function bitwise_and(x, y) {
  return Number(BigInt(x) & BigInt(y));
}
function bitwise_or(x, y) {
  return Number(BigInt(x) | BigInt(y));
}
function bitwise_exclusive_or(x, y) {
  return Number(BigInt(x) ^ BigInt(y));
}
function bitwise_shift_left(x, y) {
  return Number(BigInt(x) << BigInt(y));
}
function bitwise_shift_right(x, y) {
  return Number(BigInt(x) >> BigInt(y));
}
function inspect(v) {
  return new Inspector().inspect(v);
}
function float_to_string(float2) {
  const string5 = float2.toString().replace("+", "");
  if (string5.indexOf(".") >= 0) {
    return string5;
  } else {
    const index4 = string5.indexOf("e");
    if (index4 >= 0) {
      return string5.slice(0, index4) + ".0" + string5.slice(index4);
    } else {
      return string5 + ".0";
    }
  }
}
var Inspector = class {
  #references = /* @__PURE__ */ new Set();
  inspect(v) {
    const t = typeof v;
    if (v === true) return "True";
    if (v === false) return "False";
    if (v === null) return "//js(null)";
    if (v === void 0) return "Nil";
    if (t === "string") return this.#string(v);
    if (t === "bigint" || Number.isInteger(v)) return v.toString();
    if (t === "number") return float_to_string(v);
    if (v instanceof UtfCodepoint) return this.#utfCodepoint(v);
    if (v instanceof BitArray) return this.#bit_array(v);
    if (v instanceof RegExp) return `//js(${v})`;
    if (v instanceof Date) return `//js(Date("${v.toISOString()}"))`;
    if (v instanceof globalThis.Error) return `//js(${v.toString()})`;
    if (v instanceof Function) {
      const args = [];
      for (const i of Array(v.length).keys())
        args.push(String.fromCharCode(i + 97));
      return `//fn(${args.join(", ")}) { ... }`;
    }
    if (this.#references.size === this.#references.add(v).size) {
      return "//js(circular reference)";
    }
    let printed;
    if (Array.isArray(v)) {
      printed = `#(${v.map((v2) => this.inspect(v2)).join(", ")})`;
    } else if (v instanceof List) {
      printed = this.#list(v);
    } else if (v instanceof CustomType) {
      printed = this.#customType(v);
    } else if (v instanceof Dict) {
      printed = this.#dict(v);
    } else if (v instanceof Set) {
      return `//js(Set(${[...v].map((v2) => this.inspect(v2)).join(", ")}))`;
    } else {
      printed = this.#object(v);
    }
    this.#references.delete(v);
    return printed;
  }
  #object(v) {
    const name = Object.getPrototypeOf(v)?.constructor?.name || "Object";
    const props = [];
    for (const k of Object.keys(v)) {
      props.push(`${this.inspect(k)}: ${this.inspect(v[k])}`);
    }
    const body = props.length ? " " + props.join(", ") + " " : "";
    const head = name === "Object" ? "" : name + " ";
    return `//js(${head}{${body}})`;
  }
  #dict(map5) {
    let body = "dict.from_list([";
    let first = true;
    map5.forEach((value2, key) => {
      if (!first) body = body + ", ";
      body = body + "#(" + this.inspect(key) + ", " + this.inspect(value2) + ")";
      first = false;
    });
    return body + "])";
  }
  #customType(record) {
    const props = Object.keys(record).map((label) => {
      const value2 = this.inspect(record[label]);
      return isNaN(parseInt(label)) ? `${label}: ${value2}` : value2;
    }).join(", ");
    return props ? `${record.constructor.name}(${props})` : record.constructor.name;
  }
  #list(list4) {
    if (list4 instanceof Empty) {
      return "[]";
    }
    let char_out = 'charlist.from_string("';
    let list_out = "[";
    let current = list4;
    while (current instanceof NonEmpty) {
      let element5 = current.head;
      current = current.tail;
      if (list_out !== "[") {
        list_out += ", ";
      }
      list_out += this.inspect(element5);
      if (char_out) {
        if (Number.isInteger(element5) && element5 >= 32 && element5 <= 126) {
          char_out += String.fromCharCode(element5);
        } else {
          char_out = null;
        }
      }
    }
    if (char_out) {
      return char_out + '")';
    } else {
      return list_out + "]";
    }
  }
  #string(str) {
    let new_str = '"';
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      switch (char) {
        case "\n":
          new_str += "\\n";
          break;
        case "\r":
          new_str += "\\r";
          break;
        case "	":
          new_str += "\\t";
          break;
        case "\f":
          new_str += "\\f";
          break;
        case "\\":
          new_str += "\\\\";
          break;
        case '"':
          new_str += '\\"';
          break;
        default:
          if (char < " " || char > "~" && char < "\xA0") {
            new_str += "\\u{" + char.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0") + "}";
          } else {
            new_str += char;
          }
      }
    }
    new_str += '"';
    return new_str;
  }
  #utfCodepoint(codepoint2) {
    return `//utfcodepoint(${String.fromCodePoint(codepoint2.value)})`;
  }
  #bit_array(bits) {
    if (bits.bitSize === 0) {
      return "<<>>";
    }
    let acc = "<<";
    for (let i = 0; i < bits.byteSize - 1; i++) {
      acc += bits.byteAt(i).toString();
      acc += ", ";
    }
    if (bits.byteSize * 8 === bits.bitSize) {
      acc += bits.byteAt(bits.byteSize - 1).toString();
    } else {
      const trailingBitsCount = bits.bitSize % 8;
      acc += bits.byteAt(bits.byteSize - 1) >> 8 - trailingBitsCount;
      acc += `:size(${trailingBitsCount})`;
    }
    acc += ">>";
    return acc;
  }
};
function base16_encode(bit_array2) {
  const trailingBitsCount = bit_array2.bitSize % 8;
  let result = "";
  for (let i = 0; i < bit_array2.byteSize; i++) {
    let byte = bit_array2.byteAt(i);
    if (i === bit_array2.byteSize - 1 && trailingBitsCount !== 0) {
      const unusedBitsCount = 8 - trailingBitsCount;
      byte = byte >> unusedBitsCount << unusedBitsCount;
    }
    result += byte.toString(16).padStart(2, "0").toUpperCase();
  }
  return result;
}
function index2(data, key) {
  if (data instanceof Dict || data instanceof WeakMap || data instanceof Map) {
    const token = {};
    const entry = data.get(key, token);
    if (entry === token) return new Ok(new None());
    return new Ok(new Some(entry));
  }
  const key_is_int = Number.isInteger(key);
  if (key_is_int && key >= 0 && key < 8 && data instanceof List) {
    let i = 0;
    for (const value2 of data) {
      if (i === key) return new Ok(new Some(value2));
      i++;
    }
    return new Error2("Indexable");
  }
  if (key_is_int && Array.isArray(data) || data && typeof data === "object" || data && Object.getPrototypeOf(data) === Object.prototype) {
    if (key in data) return new Ok(new Some(data[key]));
    return new Ok(new None());
  }
  return new Error2(key_is_int ? "Indexable" : "Dict");
}
function int(data) {
  if (Number.isInteger(data)) return new Ok(data);
  return new Error2(0);
}
function string(data) {
  if (typeof data === "string") return new Ok(data);
  return new Error2("");
}

// build/dev/javascript/gleam_stdlib/gleam/bool.mjs
function guard(requirement, consequence, alternative) {
  if (requirement) {
    return consequence;
  } else {
    return alternative();
  }
}
function lazy_guard(requirement, consequence, alternative) {
  if (requirement) {
    return consequence();
  } else {
    return alternative();
  }
}

// build/dev/javascript/gleam_stdlib/gleam/function.mjs
function identity2(x) {
  return x;
}
function tap(arg, effect) {
  effect(arg);
  return arg;
}

// build/dev/javascript/gleam_json/gleam_json_ffi.mjs
function object(entries) {
  return Object.fromEntries(entries);
}
function identity3(x) {
  return x;
}

// build/dev/javascript/gleam_json/gleam/json.mjs
function string3(input2) {
  return identity3(input2);
}
function bool(input2) {
  return identity3(input2);
}
function object2(entries) {
  return object(entries);
}

// build/dev/javascript/lustre/lustre/internals/constants.ffi.mjs
var document2 = () => globalThis?.document;
var NAMESPACE_HTML = "http://www.w3.org/1999/xhtml";
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var SUPPORTS_MOVE_BEFORE = !!globalThis.HTMLElement?.prototype?.moveBefore;

// build/dev/javascript/lustre/lustre/internals/constants.mjs
var empty_list = /* @__PURE__ */ toList([]);
var option_none = /* @__PURE__ */ new None();

// build/dev/javascript/lustre/lustre/vdom/vattr.ffi.mjs
var GT = /* @__PURE__ */ new Gt();
var LT = /* @__PURE__ */ new Lt();
var EQ = /* @__PURE__ */ new Eq();
function compare3(a, b) {
  if (a.name === b.name) {
    return EQ;
  } else if (a.name < b.name) {
    return LT;
  } else {
    return GT;
  }
}

// build/dev/javascript/lustre/lustre/vdom/vattr.mjs
var Attribute = class extends CustomType {
  constructor(kind, name, value2) {
    super();
    this.kind = kind;
    this.name = name;
    this.value = value2;
  }
};
var Property = class extends CustomType {
  constructor(kind, name, value2) {
    super();
    this.kind = kind;
    this.name = name;
    this.value = value2;
  }
};
var Event2 = class extends CustomType {
  constructor(kind, name, handler, include, prevent_default, stop_propagation, immediate, debounce, throttle) {
    super();
    this.kind = kind;
    this.name = name;
    this.handler = handler;
    this.include = include;
    this.prevent_default = prevent_default;
    this.stop_propagation = stop_propagation;
    this.immediate = immediate;
    this.debounce = debounce;
    this.throttle = throttle;
  }
};
var Handler = class extends CustomType {
  constructor(prevent_default, stop_propagation, message) {
    super();
    this.prevent_default = prevent_default;
    this.stop_propagation = stop_propagation;
    this.message = message;
  }
};
var Never = class extends CustomType {
  constructor(kind) {
    super();
    this.kind = kind;
  }
};
function merge(loop$attributes, loop$merged) {
  while (true) {
    let attributes = loop$attributes;
    let merged = loop$merged;
    if (attributes instanceof Empty) {
      return merged;
    } else {
      let $ = attributes.head;
      if ($ instanceof Attribute) {
        let $1 = $.name;
        if ($1 === "") {
          let rest = attributes.tail;
          loop$attributes = rest;
          loop$merged = merged;
        } else if ($1 === "class") {
          let $2 = $.value;
          if ($2 === "") {
            let rest = attributes.tail;
            loop$attributes = rest;
            loop$merged = merged;
          } else {
            let $3 = attributes.tail;
            if ($3 instanceof Empty) {
              let attribute$1 = $;
              let rest = $3;
              loop$attributes = rest;
              loop$merged = prepend(attribute$1, merged);
            } else {
              let $4 = $3.head;
              if ($4 instanceof Attribute) {
                let $5 = $4.name;
                if ($5 === "class") {
                  let kind = $.kind;
                  let class1 = $2;
                  let rest = $3.tail;
                  let class2 = $4.value;
                  let value2 = class1 + " " + class2;
                  let attribute$1 = new Attribute(kind, "class", value2);
                  loop$attributes = prepend(attribute$1, rest);
                  loop$merged = merged;
                } else {
                  let attribute$1 = $;
                  let rest = $3;
                  loop$attributes = rest;
                  loop$merged = prepend(attribute$1, merged);
                }
              } else {
                let attribute$1 = $;
                let rest = $3;
                loop$attributes = rest;
                loop$merged = prepend(attribute$1, merged);
              }
            }
          }
        } else if ($1 === "style") {
          let $2 = $.value;
          if ($2 === "") {
            let rest = attributes.tail;
            loop$attributes = rest;
            loop$merged = merged;
          } else {
            let $3 = attributes.tail;
            if ($3 instanceof Empty) {
              let attribute$1 = $;
              let rest = $3;
              loop$attributes = rest;
              loop$merged = prepend(attribute$1, merged);
            } else {
              let $4 = $3.head;
              if ($4 instanceof Attribute) {
                let $5 = $4.name;
                if ($5 === "style") {
                  let kind = $.kind;
                  let style1 = $2;
                  let rest = $3.tail;
                  let style2 = $4.value;
                  let value2 = style1 + ";" + style2;
                  let attribute$1 = new Attribute(kind, "style", value2);
                  loop$attributes = prepend(attribute$1, rest);
                  loop$merged = merged;
                } else {
                  let attribute$1 = $;
                  let rest = $3;
                  loop$attributes = rest;
                  loop$merged = prepend(attribute$1, merged);
                }
              } else {
                let attribute$1 = $;
                let rest = $3;
                loop$attributes = rest;
                loop$merged = prepend(attribute$1, merged);
              }
            }
          }
        } else {
          let attribute$1 = $;
          let rest = attributes.tail;
          loop$attributes = rest;
          loop$merged = prepend(attribute$1, merged);
        }
      } else {
        let attribute$1 = $;
        let rest = attributes.tail;
        loop$attributes = rest;
        loop$merged = prepend(attribute$1, merged);
      }
    }
  }
}
function prepare(attributes) {
  if (attributes instanceof Empty) {
    return attributes;
  } else {
    let $ = attributes.tail;
    if ($ instanceof Empty) {
      return attributes;
    } else {
      let _pipe = attributes;
      let _pipe$1 = sort(_pipe, (a, b) => {
        return compare3(b, a);
      });
      return merge(_pipe$1, empty_list);
    }
  }
}
var attribute_kind = 0;
function attribute(name, value2) {
  return new Attribute(attribute_kind, name, value2);
}
var property_kind = 1;
function property(name, value2) {
  return new Property(property_kind, name, value2);
}
var event_kind = 2;
function event(name, handler, include, prevent_default, stop_propagation, immediate, debounce, throttle) {
  return new Event2(
    event_kind,
    name,
    handler,
    include,
    prevent_default,
    stop_propagation,
    immediate,
    debounce,
    throttle
  );
}
var never_kind = 0;
var never = /* @__PURE__ */ new Never(never_kind);
var always_kind = 2;

// build/dev/javascript/lustre/lustre/attribute.mjs
function attribute2(name, value2) {
  return attribute(name, value2);
}
function property2(name, value2) {
  return property(name, value2);
}
function boolean_attribute(name, value2) {
  if (value2) {
    return attribute2(name, "");
  } else {
    return property2(name, bool(false));
  }
}
function class$(name) {
  return attribute2("class", name);
}
function disabled(is_disabled) {
  return boolean_attribute("disabled", is_disabled);
}
function readonly(is_readonly) {
  return boolean_attribute("readonly", is_readonly);
}
function value(control_value) {
  return attribute2("value", control_value);
}

// build/dev/javascript/lustre/lustre/effect.mjs
var Effect = class extends CustomType {
  constructor(synchronous, before_paint2, after_paint) {
    super();
    this.synchronous = synchronous;
    this.before_paint = before_paint2;
    this.after_paint = after_paint;
  }
};
var empty = /* @__PURE__ */ new Effect(
  /* @__PURE__ */ toList([]),
  /* @__PURE__ */ toList([]),
  /* @__PURE__ */ toList([])
);
function none() {
  return empty;
}
function from(effect) {
  let task = (actions) => {
    let dispatch = actions.dispatch;
    return effect(dispatch);
  };
  return new Effect(toList([task]), empty.before_paint, empty.after_paint);
}

// build/dev/javascript/lustre/lustre/internals/mutable_map.ffi.mjs
function empty2() {
  return null;
}
function get(map5, key) {
  const value2 = map5?.get(key);
  if (value2 != null) {
    return new Ok(value2);
  } else {
    return new Error2(void 0);
  }
}
function has_key2(map5, key) {
  return map5 && map5.has(key);
}
function insert2(map5, key, value2) {
  map5 ??= /* @__PURE__ */ new Map();
  map5.set(key, value2);
  return map5;
}
function remove(map5, key) {
  map5?.delete(key);
  return map5;
}

// build/dev/javascript/lustre/lustre/vdom/path.mjs
var Root = class extends CustomType {
};
var Key = class extends CustomType {
  constructor(key, parent) {
    super();
    this.key = key;
    this.parent = parent;
  }
};
var Index = class extends CustomType {
  constructor(index4, parent) {
    super();
    this.index = index4;
    this.parent = parent;
  }
};
function do_matches(loop$path, loop$candidates) {
  while (true) {
    let path = loop$path;
    let candidates = loop$candidates;
    if (candidates instanceof Empty) {
      return false;
    } else {
      let candidate = candidates.head;
      let rest = candidates.tail;
      let $ = starts_with(path, candidate);
      if ($) {
        return $;
      } else {
        loop$path = path;
        loop$candidates = rest;
      }
    }
  }
}
function add3(parent, index4, key) {
  if (key === "") {
    return new Index(index4, parent);
  } else {
    return new Key(key, parent);
  }
}
var root2 = /* @__PURE__ */ new Root();
var separator_element = "	";
function do_to_string(loop$path, loop$acc) {
  while (true) {
    let path = loop$path;
    let acc = loop$acc;
    if (path instanceof Root) {
      if (acc instanceof Empty) {
        return "";
      } else {
        let segments = acc.tail;
        return concat2(segments);
      }
    } else if (path instanceof Key) {
      let key = path.key;
      let parent = path.parent;
      loop$path = parent;
      loop$acc = prepend(separator_element, prepend(key, acc));
    } else {
      let index4 = path.index;
      let parent = path.parent;
      loop$path = parent;
      loop$acc = prepend(
        separator_element,
        prepend(to_string(index4), acc)
      );
    }
  }
}
function to_string2(path) {
  return do_to_string(path, toList([]));
}
function matches(path, candidates) {
  if (candidates instanceof Empty) {
    return false;
  } else {
    return do_matches(to_string2(path), candidates);
  }
}
var separator_event = "\n";
function event2(path, event4) {
  return do_to_string(path, toList([separator_event, event4]));
}

// build/dev/javascript/lustre/lustre/vdom/vnode.mjs
var Fragment = class extends CustomType {
  constructor(kind, key, mapper, children, keyed_children) {
    super();
    this.kind = kind;
    this.key = key;
    this.mapper = mapper;
    this.children = children;
    this.keyed_children = keyed_children;
  }
};
var Element = class extends CustomType {
  constructor(kind, key, mapper, namespace, tag, attributes, children, keyed_children, self_closing, void$) {
    super();
    this.kind = kind;
    this.key = key;
    this.mapper = mapper;
    this.namespace = namespace;
    this.tag = tag;
    this.attributes = attributes;
    this.children = children;
    this.keyed_children = keyed_children;
    this.self_closing = self_closing;
    this.void = void$;
  }
};
var Text = class extends CustomType {
  constructor(kind, key, mapper, content) {
    super();
    this.kind = kind;
    this.key = key;
    this.mapper = mapper;
    this.content = content;
  }
};
var UnsafeInnerHtml = class extends CustomType {
  constructor(kind, key, mapper, namespace, tag, attributes, inner_html) {
    super();
    this.kind = kind;
    this.key = key;
    this.mapper = mapper;
    this.namespace = namespace;
    this.tag = tag;
    this.attributes = attributes;
    this.inner_html = inner_html;
  }
};
function is_void_element(tag, namespace) {
  if (namespace === "") {
    if (tag === "area") {
      return true;
    } else if (tag === "base") {
      return true;
    } else if (tag === "br") {
      return true;
    } else if (tag === "col") {
      return true;
    } else if (tag === "embed") {
      return true;
    } else if (tag === "hr") {
      return true;
    } else if (tag === "img") {
      return true;
    } else if (tag === "input") {
      return true;
    } else if (tag === "link") {
      return true;
    } else if (tag === "meta") {
      return true;
    } else if (tag === "param") {
      return true;
    } else if (tag === "source") {
      return true;
    } else if (tag === "track") {
      return true;
    } else if (tag === "wbr") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function to_keyed(key, node2) {
  if (node2 instanceof Fragment) {
    return new Fragment(
      node2.kind,
      key,
      node2.mapper,
      node2.children,
      node2.keyed_children
    );
  } else if (node2 instanceof Element) {
    return new Element(
      node2.kind,
      key,
      node2.mapper,
      node2.namespace,
      node2.tag,
      node2.attributes,
      node2.children,
      node2.keyed_children,
      node2.self_closing,
      node2.void
    );
  } else if (node2 instanceof Text) {
    return new Text(node2.kind, key, node2.mapper, node2.content);
  } else {
    return new UnsafeInnerHtml(
      node2.kind,
      key,
      node2.mapper,
      node2.namespace,
      node2.tag,
      node2.attributes,
      node2.inner_html
    );
  }
}
var fragment_kind = 0;
function fragment(key, mapper, children, keyed_children) {
  return new Fragment(fragment_kind, key, mapper, children, keyed_children);
}
var element_kind = 1;
function element(key, mapper, namespace, tag, attributes, children, keyed_children, self_closing, void$) {
  return new Element(
    element_kind,
    key,
    mapper,
    namespace,
    tag,
    prepare(attributes),
    children,
    keyed_children,
    self_closing,
    void$ || is_void_element(tag, namespace)
  );
}
var text_kind = 2;
function text(key, mapper, content) {
  return new Text(text_kind, key, mapper, content);
}
var unsafe_inner_html_kind = 3;
function unsafe_inner_html(key, mapper, namespace, tag, attributes, inner_html) {
  return new UnsafeInnerHtml(
    unsafe_inner_html_kind,
    key,
    mapper,
    namespace,
    tag,
    prepare(attributes),
    inner_html
  );
}

// build/dev/javascript/lustre/lustre/internals/equals.ffi.mjs
var isReferenceEqual = (a, b) => a === b;
var isEqual2 = (a, b) => {
  if (a === b) {
    return true;
  }
  if (a == null || b == null) {
    return false;
  }
  const type = typeof a;
  if (type !== typeof b) {
    return false;
  }
  if (type !== "object") {
    return false;
  }
  const ctor = a.constructor;
  if (ctor !== b.constructor) {
    return false;
  }
  if (Array.isArray(a)) {
    return areArraysEqual(a, b);
  }
  return areObjectsEqual(a, b);
};
var areArraysEqual = (a, b) => {
  let index4 = a.length;
  if (index4 !== b.length) {
    return false;
  }
  while (index4--) {
    if (!isEqual2(a[index4], b[index4])) {
      return false;
    }
  }
  return true;
};
var areObjectsEqual = (a, b) => {
  const properties = Object.keys(a);
  let index4 = properties.length;
  if (Object.keys(b).length !== index4) {
    return false;
  }
  while (index4--) {
    const property4 = properties[index4];
    if (!Object.hasOwn(b, property4)) {
      return false;
    }
    if (!isEqual2(a[property4], b[property4])) {
      return false;
    }
  }
  return true;
};

// build/dev/javascript/lustre/lustre/vdom/events.mjs
var Events = class extends CustomType {
  constructor(handlers, dispatched_paths, next_dispatched_paths) {
    super();
    this.handlers = handlers;
    this.dispatched_paths = dispatched_paths;
    this.next_dispatched_paths = next_dispatched_paths;
  }
};
function new$3() {
  return new Events(
    empty2(),
    empty_list,
    empty_list
  );
}
function tick(events) {
  return new Events(
    events.handlers,
    events.next_dispatched_paths,
    empty_list
  );
}
function do_remove_event(handlers, path, name) {
  return remove(handlers, event2(path, name));
}
function remove_event(events, path, name) {
  let handlers = do_remove_event(events.handlers, path, name);
  return new Events(
    handlers,
    events.dispatched_paths,
    events.next_dispatched_paths
  );
}
function remove_attributes(handlers, path, attributes) {
  return fold(
    attributes,
    handlers,
    (events, attribute3) => {
      if (attribute3 instanceof Event2) {
        let name = attribute3.name;
        return do_remove_event(events, path, name);
      } else {
        return events;
      }
    }
  );
}
function handle(events, path, name, event4) {
  let next_dispatched_paths = prepend(path, events.next_dispatched_paths);
  let events$1 = new Events(
    events.handlers,
    events.dispatched_paths,
    next_dispatched_paths
  );
  let $ = get(
    events$1.handlers,
    path + separator_event + name
  );
  if ($ instanceof Ok) {
    let handler = $[0];
    return [events$1, run(event4, handler)];
  } else {
    return [events$1, new Error2(toList([]))];
  }
}
function has_dispatched_events(events, path) {
  return matches(path, events.dispatched_paths);
}
function do_add_event(handlers, mapper, path, name, handler) {
  return insert2(
    handlers,
    event2(path, name),
    map2(
      handler,
      (handler2) => {
        return new Handler(
          handler2.prevent_default,
          handler2.stop_propagation,
          identity2(mapper)(handler2.message)
        );
      }
    )
  );
}
function add_event(events, mapper, path, name, handler) {
  let handlers = do_add_event(events.handlers, mapper, path, name, handler);
  return new Events(
    handlers,
    events.dispatched_paths,
    events.next_dispatched_paths
  );
}
function add_attributes(handlers, mapper, path, attributes) {
  return fold(
    attributes,
    handlers,
    (events, attribute3) => {
      if (attribute3 instanceof Event2) {
        let name = attribute3.name;
        let handler = attribute3.handler;
        return do_add_event(events, mapper, path, name, handler);
      } else {
        return events;
      }
    }
  );
}
function compose_mapper(mapper, child_mapper) {
  let $ = isReferenceEqual(mapper, identity2);
  let $1 = isReferenceEqual(child_mapper, identity2);
  if ($1) {
    return mapper;
  } else if ($) {
    return child_mapper;
  } else {
    return (msg) => {
      return mapper(child_mapper(msg));
    };
  }
}
function do_remove_children(loop$handlers, loop$path, loop$child_index, loop$children) {
  while (true) {
    let handlers = loop$handlers;
    let path = loop$path;
    let child_index = loop$child_index;
    let children = loop$children;
    if (children instanceof Empty) {
      return handlers;
    } else {
      let child = children.head;
      let rest = children.tail;
      let _pipe = handlers;
      let _pipe$1 = do_remove_child(_pipe, path, child_index, child);
      loop$handlers = _pipe$1;
      loop$path = path;
      loop$child_index = child_index + 1;
      loop$children = rest;
    }
  }
}
function do_remove_child(handlers, parent, child_index, child) {
  if (child instanceof Fragment) {
    let children = child.children;
    let path = add3(parent, child_index, child.key);
    return do_remove_children(handlers, path, 0, children);
  } else if (child instanceof Element) {
    let attributes = child.attributes;
    let children = child.children;
    let path = add3(parent, child_index, child.key);
    let _pipe = handlers;
    let _pipe$1 = remove_attributes(_pipe, path, attributes);
    return do_remove_children(_pipe$1, path, 0, children);
  } else if (child instanceof Text) {
    return handlers;
  } else {
    let attributes = child.attributes;
    let path = add3(parent, child_index, child.key);
    return remove_attributes(handlers, path, attributes);
  }
}
function remove_child(events, parent, child_index, child) {
  let handlers = do_remove_child(events.handlers, parent, child_index, child);
  return new Events(
    handlers,
    events.dispatched_paths,
    events.next_dispatched_paths
  );
}
function do_add_children(loop$handlers, loop$mapper, loop$path, loop$child_index, loop$children) {
  while (true) {
    let handlers = loop$handlers;
    let mapper = loop$mapper;
    let path = loop$path;
    let child_index = loop$child_index;
    let children = loop$children;
    if (children instanceof Empty) {
      return handlers;
    } else {
      let child = children.head;
      let rest = children.tail;
      let _pipe = handlers;
      let _pipe$1 = do_add_child(_pipe, mapper, path, child_index, child);
      loop$handlers = _pipe$1;
      loop$mapper = mapper;
      loop$path = path;
      loop$child_index = child_index + 1;
      loop$children = rest;
    }
  }
}
function do_add_child(handlers, mapper, parent, child_index, child) {
  if (child instanceof Fragment) {
    let children = child.children;
    let path = add3(parent, child_index, child.key);
    let composed_mapper = compose_mapper(mapper, child.mapper);
    return do_add_children(handlers, composed_mapper, path, 0, children);
  } else if (child instanceof Element) {
    let attributes = child.attributes;
    let children = child.children;
    let path = add3(parent, child_index, child.key);
    let composed_mapper = compose_mapper(mapper, child.mapper);
    let _pipe = handlers;
    let _pipe$1 = add_attributes(_pipe, composed_mapper, path, attributes);
    return do_add_children(_pipe$1, composed_mapper, path, 0, children);
  } else if (child instanceof Text) {
    return handlers;
  } else {
    let attributes = child.attributes;
    let path = add3(parent, child_index, child.key);
    let composed_mapper = compose_mapper(mapper, child.mapper);
    return add_attributes(handlers, composed_mapper, path, attributes);
  }
}
function add_child(events, mapper, parent, index4, child) {
  let handlers = do_add_child(events.handlers, mapper, parent, index4, child);
  return new Events(
    handlers,
    events.dispatched_paths,
    events.next_dispatched_paths
  );
}
function add_children(events, mapper, path, child_index, children) {
  let handlers = do_add_children(
    events.handlers,
    mapper,
    path,
    child_index,
    children
  );
  return new Events(
    handlers,
    events.dispatched_paths,
    events.next_dispatched_paths
  );
}

// build/dev/javascript/lustre/lustre/element.mjs
function element2(tag, attributes, children) {
  return element(
    "",
    identity2,
    "",
    tag,
    attributes,
    children,
    empty2(),
    false,
    false
  );
}
function text2(content) {
  return text("", identity2, content);
}
function none2() {
  return text("", identity2, "");
}
function fragment2(children) {
  return fragment("", identity2, children, empty2());
}
function unsafe_raw_html(namespace, tag, attributes, inner_html) {
  return unsafe_inner_html(
    "",
    identity2,
    namespace,
    tag,
    attributes,
    inner_html
  );
}

// build/dev/javascript/lustre/lustre/element/html.mjs
function style(attrs, css) {
  return unsafe_raw_html("", "style", attrs, css);
}

// build/dev/javascript/lustre/lustre/vdom/patch.mjs
var Patch = class extends CustomType {
  constructor(index4, removed, changes, children) {
    super();
    this.index = index4;
    this.removed = removed;
    this.changes = changes;
    this.children = children;
  }
};
var ReplaceText = class extends CustomType {
  constructor(kind, content) {
    super();
    this.kind = kind;
    this.content = content;
  }
};
var ReplaceInnerHtml = class extends CustomType {
  constructor(kind, inner_html) {
    super();
    this.kind = kind;
    this.inner_html = inner_html;
  }
};
var Update = class extends CustomType {
  constructor(kind, added, removed) {
    super();
    this.kind = kind;
    this.added = added;
    this.removed = removed;
  }
};
var Move = class extends CustomType {
  constructor(kind, key, before) {
    super();
    this.kind = kind;
    this.key = key;
    this.before = before;
  }
};
var Replace = class extends CustomType {
  constructor(kind, index4, with$) {
    super();
    this.kind = kind;
    this.index = index4;
    this.with = with$;
  }
};
var Remove = class extends CustomType {
  constructor(kind, index4) {
    super();
    this.kind = kind;
    this.index = index4;
  }
};
var Insert = class extends CustomType {
  constructor(kind, children, before) {
    super();
    this.kind = kind;
    this.children = children;
    this.before = before;
  }
};
function new$5(index4, removed, changes, children) {
  return new Patch(index4, removed, changes, children);
}
var replace_text_kind = 0;
function replace_text(content) {
  return new ReplaceText(replace_text_kind, content);
}
var replace_inner_html_kind = 1;
function replace_inner_html(inner_html) {
  return new ReplaceInnerHtml(replace_inner_html_kind, inner_html);
}
var update_kind = 2;
function update(added, removed) {
  return new Update(update_kind, added, removed);
}
var move_kind = 3;
function move(key, before) {
  return new Move(move_kind, key, before);
}
var remove_kind = 4;
function remove2(index4) {
  return new Remove(remove_kind, index4);
}
var replace_kind = 5;
function replace2(index4, with$) {
  return new Replace(replace_kind, index4, with$);
}
var insert_kind = 6;
function insert3(children, before) {
  return new Insert(insert_kind, children, before);
}

// build/dev/javascript/lustre/lustre/vdom/diff.mjs
var Diff = class extends CustomType {
  constructor(patch, events) {
    super();
    this.patch = patch;
    this.events = events;
  }
};
var AttributeChange = class extends CustomType {
  constructor(added, removed, events) {
    super();
    this.added = added;
    this.removed = removed;
    this.events = events;
  }
};
function is_controlled(events, namespace, tag, path) {
  if (tag === "input" && namespace === "") {
    return has_dispatched_events(events, path);
  } else if (tag === "select" && namespace === "") {
    return has_dispatched_events(events, path);
  } else if (tag === "textarea" && namespace === "") {
    return has_dispatched_events(events, path);
  } else {
    return false;
  }
}
function diff_attributes(loop$controlled, loop$path, loop$mapper, loop$events, loop$old, loop$new, loop$added, loop$removed) {
  while (true) {
    let controlled = loop$controlled;
    let path = loop$path;
    let mapper = loop$mapper;
    let events = loop$events;
    let old = loop$old;
    let new$9 = loop$new;
    let added = loop$added;
    let removed = loop$removed;
    if (new$9 instanceof Empty) {
      if (old instanceof Empty) {
        return new AttributeChange(added, removed, events);
      } else {
        let $ = old.head;
        if ($ instanceof Event2) {
          let prev = $;
          let old$1 = old.tail;
          let name = $.name;
          let removed$1 = prepend(prev, removed);
          let events$1 = remove_event(events, path, name);
          loop$controlled = controlled;
          loop$path = path;
          loop$mapper = mapper;
          loop$events = events$1;
          loop$old = old$1;
          loop$new = new$9;
          loop$added = added;
          loop$removed = removed$1;
        } else {
          let prev = $;
          let old$1 = old.tail;
          let removed$1 = prepend(prev, removed);
          loop$controlled = controlled;
          loop$path = path;
          loop$mapper = mapper;
          loop$events = events;
          loop$old = old$1;
          loop$new = new$9;
          loop$added = added;
          loop$removed = removed$1;
        }
      }
    } else if (old instanceof Empty) {
      let $ = new$9.head;
      if ($ instanceof Event2) {
        let next = $;
        let new$1 = new$9.tail;
        let name = $.name;
        let handler = $.handler;
        let added$1 = prepend(next, added);
        let events$1 = add_event(events, mapper, path, name, handler);
        loop$controlled = controlled;
        loop$path = path;
        loop$mapper = mapper;
        loop$events = events$1;
        loop$old = old;
        loop$new = new$1;
        loop$added = added$1;
        loop$removed = removed;
      } else {
        let next = $;
        let new$1 = new$9.tail;
        let added$1 = prepend(next, added);
        loop$controlled = controlled;
        loop$path = path;
        loop$mapper = mapper;
        loop$events = events;
        loop$old = old;
        loop$new = new$1;
        loop$added = added$1;
        loop$removed = removed;
      }
    } else {
      let next = new$9.head;
      let remaining_new = new$9.tail;
      let prev = old.head;
      let remaining_old = old.tail;
      let $ = compare3(prev, next);
      if ($ instanceof Lt) {
        if (prev instanceof Event2) {
          let name = prev.name;
          let removed$1 = prepend(prev, removed);
          let events$1 = remove_event(events, path, name);
          loop$controlled = controlled;
          loop$path = path;
          loop$mapper = mapper;
          loop$events = events$1;
          loop$old = remaining_old;
          loop$new = new$9;
          loop$added = added;
          loop$removed = removed$1;
        } else {
          let removed$1 = prepend(prev, removed);
          loop$controlled = controlled;
          loop$path = path;
          loop$mapper = mapper;
          loop$events = events;
          loop$old = remaining_old;
          loop$new = new$9;
          loop$added = added;
          loop$removed = removed$1;
        }
      } else if ($ instanceof Eq) {
        if (next instanceof Attribute) {
          if (prev instanceof Attribute) {
            let _block;
            let $1 = next.name;
            if ($1 === "value") {
              _block = controlled || prev.value !== next.value;
            } else if ($1 === "checked") {
              _block = controlled || prev.value !== next.value;
            } else if ($1 === "selected") {
              _block = controlled || prev.value !== next.value;
            } else {
              _block = prev.value !== next.value;
            }
            let has_changes = _block;
            let _block$1;
            if (has_changes) {
              _block$1 = prepend(next, added);
            } else {
              _block$1 = added;
            }
            let added$1 = _block$1;
            loop$controlled = controlled;
            loop$path = path;
            loop$mapper = mapper;
            loop$events = events;
            loop$old = remaining_old;
            loop$new = remaining_new;
            loop$added = added$1;
            loop$removed = removed;
          } else if (prev instanceof Event2) {
            let name = prev.name;
            let added$1 = prepend(next, added);
            let removed$1 = prepend(prev, removed);
            let events$1 = remove_event(events, path, name);
            loop$controlled = controlled;
            loop$path = path;
            loop$mapper = mapper;
            loop$events = events$1;
            loop$old = remaining_old;
            loop$new = remaining_new;
            loop$added = added$1;
            loop$removed = removed$1;
          } else {
            let added$1 = prepend(next, added);
            let removed$1 = prepend(prev, removed);
            loop$controlled = controlled;
            loop$path = path;
            loop$mapper = mapper;
            loop$events = events;
            loop$old = remaining_old;
            loop$new = remaining_new;
            loop$added = added$1;
            loop$removed = removed$1;
          }
        } else if (next instanceof Property) {
          if (prev instanceof Property) {
            let _block;
            let $1 = next.name;
            if ($1 === "scrollLeft") {
              _block = true;
            } else if ($1 === "scrollRight") {
              _block = true;
            } else if ($1 === "value") {
              _block = controlled || !isEqual2(
                prev.value,
                next.value
              );
            } else if ($1 === "checked") {
              _block = controlled || !isEqual2(
                prev.value,
                next.value
              );
            } else if ($1 === "selected") {
              _block = controlled || !isEqual2(
                prev.value,
                next.value
              );
            } else {
              _block = !isEqual2(prev.value, next.value);
            }
            let has_changes = _block;
            let _block$1;
            if (has_changes) {
              _block$1 = prepend(next, added);
            } else {
              _block$1 = added;
            }
            let added$1 = _block$1;
            loop$controlled = controlled;
            loop$path = path;
            loop$mapper = mapper;
            loop$events = events;
            loop$old = remaining_old;
            loop$new = remaining_new;
            loop$added = added$1;
            loop$removed = removed;
          } else if (prev instanceof Event2) {
            let name = prev.name;
            let added$1 = prepend(next, added);
            let removed$1 = prepend(prev, removed);
            let events$1 = remove_event(events, path, name);
            loop$controlled = controlled;
            loop$path = path;
            loop$mapper = mapper;
            loop$events = events$1;
            loop$old = remaining_old;
            loop$new = remaining_new;
            loop$added = added$1;
            loop$removed = removed$1;
          } else {
            let added$1 = prepend(next, added);
            let removed$1 = prepend(prev, removed);
            loop$controlled = controlled;
            loop$path = path;
            loop$mapper = mapper;
            loop$events = events;
            loop$old = remaining_old;
            loop$new = remaining_new;
            loop$added = added$1;
            loop$removed = removed$1;
          }
        } else if (prev instanceof Event2) {
          let name = next.name;
          let handler = next.handler;
          let has_changes = prev.prevent_default.kind !== next.prevent_default.kind || prev.stop_propagation.kind !== next.stop_propagation.kind || prev.immediate !== next.immediate || prev.debounce !== next.debounce || prev.throttle !== next.throttle;
          let _block;
          if (has_changes) {
            _block = prepend(next, added);
          } else {
            _block = added;
          }
          let added$1 = _block;
          let events$1 = add_event(events, mapper, path, name, handler);
          loop$controlled = controlled;
          loop$path = path;
          loop$mapper = mapper;
          loop$events = events$1;
          loop$old = remaining_old;
          loop$new = remaining_new;
          loop$added = added$1;
          loop$removed = removed;
        } else {
          let name = next.name;
          let handler = next.handler;
          let added$1 = prepend(next, added);
          let removed$1 = prepend(prev, removed);
          let events$1 = add_event(events, mapper, path, name, handler);
          loop$controlled = controlled;
          loop$path = path;
          loop$mapper = mapper;
          loop$events = events$1;
          loop$old = remaining_old;
          loop$new = remaining_new;
          loop$added = added$1;
          loop$removed = removed$1;
        }
      } else if (next instanceof Event2) {
        let name = next.name;
        let handler = next.handler;
        let added$1 = prepend(next, added);
        let events$1 = add_event(events, mapper, path, name, handler);
        loop$controlled = controlled;
        loop$path = path;
        loop$mapper = mapper;
        loop$events = events$1;
        loop$old = old;
        loop$new = remaining_new;
        loop$added = added$1;
        loop$removed = removed;
      } else {
        let added$1 = prepend(next, added);
        loop$controlled = controlled;
        loop$path = path;
        loop$mapper = mapper;
        loop$events = events;
        loop$old = old;
        loop$new = remaining_new;
        loop$added = added$1;
        loop$removed = removed;
      }
    }
  }
}
function do_diff(loop$old, loop$old_keyed, loop$new, loop$new_keyed, loop$moved, loop$moved_offset, loop$removed, loop$node_index, loop$patch_index, loop$path, loop$changes, loop$children, loop$mapper, loop$events) {
  while (true) {
    let old = loop$old;
    let old_keyed = loop$old_keyed;
    let new$9 = loop$new;
    let new_keyed = loop$new_keyed;
    let moved = loop$moved;
    let moved_offset = loop$moved_offset;
    let removed = loop$removed;
    let node_index = loop$node_index;
    let patch_index = loop$patch_index;
    let path = loop$path;
    let changes = loop$changes;
    let children = loop$children;
    let mapper = loop$mapper;
    let events = loop$events;
    if (new$9 instanceof Empty) {
      if (old instanceof Empty) {
        return new Diff(
          new Patch(patch_index, removed, changes, children),
          events
        );
      } else {
        let prev = old.head;
        let old$1 = old.tail;
        let _block;
        let $ = prev.key === "" || !has_key2(moved, prev.key);
        if ($) {
          _block = removed + 1;
        } else {
          _block = removed;
        }
        let removed$1 = _block;
        let events$1 = remove_child(events, path, node_index, prev);
        loop$old = old$1;
        loop$old_keyed = old_keyed;
        loop$new = new$9;
        loop$new_keyed = new_keyed;
        loop$moved = moved;
        loop$moved_offset = moved_offset;
        loop$removed = removed$1;
        loop$node_index = node_index;
        loop$patch_index = patch_index;
        loop$path = path;
        loop$changes = changes;
        loop$children = children;
        loop$mapper = mapper;
        loop$events = events$1;
      }
    } else if (old instanceof Empty) {
      let events$1 = add_children(
        events,
        mapper,
        path,
        node_index,
        new$9
      );
      let insert4 = insert3(new$9, node_index - moved_offset);
      let changes$1 = prepend(insert4, changes);
      return new Diff(
        new Patch(patch_index, removed, changes$1, children),
        events$1
      );
    } else {
      let next = new$9.head;
      let prev = old.head;
      if (prev.key !== next.key) {
        let new_remaining = new$9.tail;
        let old_remaining = old.tail;
        let next_did_exist = get(old_keyed, next.key);
        let prev_does_exist = has_key2(new_keyed, prev.key);
        if (next_did_exist instanceof Ok) {
          if (prev_does_exist) {
            let match = next_did_exist[0];
            let $ = has_key2(moved, prev.key);
            if ($) {
              loop$old = old_remaining;
              loop$old_keyed = old_keyed;
              loop$new = new$9;
              loop$new_keyed = new_keyed;
              loop$moved = moved;
              loop$moved_offset = moved_offset - 1;
              loop$removed = removed;
              loop$node_index = node_index;
              loop$patch_index = patch_index;
              loop$path = path;
              loop$changes = changes;
              loop$children = children;
              loop$mapper = mapper;
              loop$events = events;
            } else {
              let before = node_index - moved_offset;
              let changes$1 = prepend(
                move(next.key, before),
                changes
              );
              let moved$1 = insert2(moved, next.key, void 0);
              let moved_offset$1 = moved_offset + 1;
              loop$old = prepend(match, old);
              loop$old_keyed = old_keyed;
              loop$new = new$9;
              loop$new_keyed = new_keyed;
              loop$moved = moved$1;
              loop$moved_offset = moved_offset$1;
              loop$removed = removed;
              loop$node_index = node_index;
              loop$patch_index = patch_index;
              loop$path = path;
              loop$changes = changes$1;
              loop$children = children;
              loop$mapper = mapper;
              loop$events = events;
            }
          } else {
            let index4 = node_index - moved_offset;
            let changes$1 = prepend(remove2(index4), changes);
            let events$1 = remove_child(events, path, node_index, prev);
            let moved_offset$1 = moved_offset - 1;
            loop$old = old_remaining;
            loop$old_keyed = old_keyed;
            loop$new = new$9;
            loop$new_keyed = new_keyed;
            loop$moved = moved;
            loop$moved_offset = moved_offset$1;
            loop$removed = removed;
            loop$node_index = node_index;
            loop$patch_index = patch_index;
            loop$path = path;
            loop$changes = changes$1;
            loop$children = children;
            loop$mapper = mapper;
            loop$events = events$1;
          }
        } else if (prev_does_exist) {
          let before = node_index - moved_offset;
          let events$1 = add_child(
            events,
            mapper,
            path,
            node_index,
            next
          );
          let insert4 = insert3(toList([next]), before);
          let changes$1 = prepend(insert4, changes);
          loop$old = old;
          loop$old_keyed = old_keyed;
          loop$new = new_remaining;
          loop$new_keyed = new_keyed;
          loop$moved = moved;
          loop$moved_offset = moved_offset + 1;
          loop$removed = removed;
          loop$node_index = node_index + 1;
          loop$patch_index = patch_index;
          loop$path = path;
          loop$changes = changes$1;
          loop$children = children;
          loop$mapper = mapper;
          loop$events = events$1;
        } else {
          let change = replace2(node_index - moved_offset, next);
          let _block;
          let _pipe = events;
          let _pipe$1 = remove_child(_pipe, path, node_index, prev);
          _block = add_child(_pipe$1, mapper, path, node_index, next);
          let events$1 = _block;
          loop$old = old_remaining;
          loop$old_keyed = old_keyed;
          loop$new = new_remaining;
          loop$new_keyed = new_keyed;
          loop$moved = moved;
          loop$moved_offset = moved_offset;
          loop$removed = removed;
          loop$node_index = node_index + 1;
          loop$patch_index = patch_index;
          loop$path = path;
          loop$changes = prepend(change, changes);
          loop$children = children;
          loop$mapper = mapper;
          loop$events = events$1;
        }
      } else {
        let $ = old.head;
        if ($ instanceof Fragment) {
          let $1 = new$9.head;
          if ($1 instanceof Fragment) {
            let next$1 = $1;
            let new$1 = new$9.tail;
            let prev$1 = $;
            let old$1 = old.tail;
            let composed_mapper = compose_mapper(mapper, next$1.mapper);
            let child_path = add3(path, node_index, next$1.key);
            let child = do_diff(
              prev$1.children,
              prev$1.keyed_children,
              next$1.children,
              next$1.keyed_children,
              empty2(),
              0,
              0,
              0,
              node_index,
              child_path,
              empty_list,
              empty_list,
              composed_mapper,
              events
            );
            let _block;
            let $2 = child.patch;
            let $3 = $2.children;
            if ($3 instanceof Empty) {
              let $4 = $2.changes;
              if ($4 instanceof Empty) {
                let $5 = $2.removed;
                if ($5 === 0) {
                  _block = children;
                } else {
                  _block = prepend(child.patch, children);
                }
              } else {
                _block = prepend(child.patch, children);
              }
            } else {
              _block = prepend(child.patch, children);
            }
            let children$1 = _block;
            loop$old = old$1;
            loop$old_keyed = old_keyed;
            loop$new = new$1;
            loop$new_keyed = new_keyed;
            loop$moved = moved;
            loop$moved_offset = moved_offset;
            loop$removed = removed;
            loop$node_index = node_index + 1;
            loop$patch_index = patch_index;
            loop$path = path;
            loop$changes = changes;
            loop$children = children$1;
            loop$mapper = mapper;
            loop$events = child.events;
          } else {
            let next$1 = $1;
            let new_remaining = new$9.tail;
            let prev$1 = $;
            let old_remaining = old.tail;
            let change = replace2(node_index - moved_offset, next$1);
            let _block;
            let _pipe = events;
            let _pipe$1 = remove_child(_pipe, path, node_index, prev$1);
            _block = add_child(
              _pipe$1,
              mapper,
              path,
              node_index,
              next$1
            );
            let events$1 = _block;
            loop$old = old_remaining;
            loop$old_keyed = old_keyed;
            loop$new = new_remaining;
            loop$new_keyed = new_keyed;
            loop$moved = moved;
            loop$moved_offset = moved_offset;
            loop$removed = removed;
            loop$node_index = node_index + 1;
            loop$patch_index = patch_index;
            loop$path = path;
            loop$changes = prepend(change, changes);
            loop$children = children;
            loop$mapper = mapper;
            loop$events = events$1;
          }
        } else if ($ instanceof Element) {
          let $1 = new$9.head;
          if ($1 instanceof Element) {
            let next$1 = $1;
            let prev$1 = $;
            if (prev$1.namespace === next$1.namespace && prev$1.tag === next$1.tag) {
              let new$1 = new$9.tail;
              let old$1 = old.tail;
              let composed_mapper = compose_mapper(
                mapper,
                next$1.mapper
              );
              let child_path = add3(path, node_index, next$1.key);
              let controlled = is_controlled(
                events,
                next$1.namespace,
                next$1.tag,
                child_path
              );
              let $2 = diff_attributes(
                controlled,
                child_path,
                composed_mapper,
                events,
                prev$1.attributes,
                next$1.attributes,
                empty_list,
                empty_list
              );
              let added_attrs;
              let removed_attrs;
              let events$1;
              added_attrs = $2.added;
              removed_attrs = $2.removed;
              events$1 = $2.events;
              let _block;
              if (removed_attrs instanceof Empty && added_attrs instanceof Empty) {
                _block = empty_list;
              } else {
                _block = toList([update(added_attrs, removed_attrs)]);
              }
              let initial_child_changes = _block;
              let child = do_diff(
                prev$1.children,
                prev$1.keyed_children,
                next$1.children,
                next$1.keyed_children,
                empty2(),
                0,
                0,
                0,
                node_index,
                child_path,
                initial_child_changes,
                empty_list,
                composed_mapper,
                events$1
              );
              let _block$1;
              let $3 = child.patch;
              let $4 = $3.children;
              if ($4 instanceof Empty) {
                let $5 = $3.changes;
                if ($5 instanceof Empty) {
                  let $6 = $3.removed;
                  if ($6 === 0) {
                    _block$1 = children;
                  } else {
                    _block$1 = prepend(child.patch, children);
                  }
                } else {
                  _block$1 = prepend(child.patch, children);
                }
              } else {
                _block$1 = prepend(child.patch, children);
              }
              let children$1 = _block$1;
              loop$old = old$1;
              loop$old_keyed = old_keyed;
              loop$new = new$1;
              loop$new_keyed = new_keyed;
              loop$moved = moved;
              loop$moved_offset = moved_offset;
              loop$removed = removed;
              loop$node_index = node_index + 1;
              loop$patch_index = patch_index;
              loop$path = path;
              loop$changes = changes;
              loop$children = children$1;
              loop$mapper = mapper;
              loop$events = child.events;
            } else {
              let next$2 = $1;
              let new_remaining = new$9.tail;
              let prev$2 = $;
              let old_remaining = old.tail;
              let change = replace2(node_index - moved_offset, next$2);
              let _block;
              let _pipe = events;
              let _pipe$1 = remove_child(
                _pipe,
                path,
                node_index,
                prev$2
              );
              _block = add_child(
                _pipe$1,
                mapper,
                path,
                node_index,
                next$2
              );
              let events$1 = _block;
              loop$old = old_remaining;
              loop$old_keyed = old_keyed;
              loop$new = new_remaining;
              loop$new_keyed = new_keyed;
              loop$moved = moved;
              loop$moved_offset = moved_offset;
              loop$removed = removed;
              loop$node_index = node_index + 1;
              loop$patch_index = patch_index;
              loop$path = path;
              loop$changes = prepend(change, changes);
              loop$children = children;
              loop$mapper = mapper;
              loop$events = events$1;
            }
          } else {
            let next$1 = $1;
            let new_remaining = new$9.tail;
            let prev$1 = $;
            let old_remaining = old.tail;
            let change = replace2(node_index - moved_offset, next$1);
            let _block;
            let _pipe = events;
            let _pipe$1 = remove_child(_pipe, path, node_index, prev$1);
            _block = add_child(
              _pipe$1,
              mapper,
              path,
              node_index,
              next$1
            );
            let events$1 = _block;
            loop$old = old_remaining;
            loop$old_keyed = old_keyed;
            loop$new = new_remaining;
            loop$new_keyed = new_keyed;
            loop$moved = moved;
            loop$moved_offset = moved_offset;
            loop$removed = removed;
            loop$node_index = node_index + 1;
            loop$patch_index = patch_index;
            loop$path = path;
            loop$changes = prepend(change, changes);
            loop$children = children;
            loop$mapper = mapper;
            loop$events = events$1;
          }
        } else if ($ instanceof Text) {
          let $1 = new$9.head;
          if ($1 instanceof Text) {
            let next$1 = $1;
            let prev$1 = $;
            if (prev$1.content === next$1.content) {
              let new$1 = new$9.tail;
              let old$1 = old.tail;
              loop$old = old$1;
              loop$old_keyed = old_keyed;
              loop$new = new$1;
              loop$new_keyed = new_keyed;
              loop$moved = moved;
              loop$moved_offset = moved_offset;
              loop$removed = removed;
              loop$node_index = node_index + 1;
              loop$patch_index = patch_index;
              loop$path = path;
              loop$changes = changes;
              loop$children = children;
              loop$mapper = mapper;
              loop$events = events;
            } else {
              let next$2 = $1;
              let new$1 = new$9.tail;
              let old$1 = old.tail;
              let child = new$5(
                node_index,
                0,
                toList([replace_text(next$2.content)]),
                empty_list
              );
              loop$old = old$1;
              loop$old_keyed = old_keyed;
              loop$new = new$1;
              loop$new_keyed = new_keyed;
              loop$moved = moved;
              loop$moved_offset = moved_offset;
              loop$removed = removed;
              loop$node_index = node_index + 1;
              loop$patch_index = patch_index;
              loop$path = path;
              loop$changes = changes;
              loop$children = prepend(child, children);
              loop$mapper = mapper;
              loop$events = events;
            }
          } else {
            let next$1 = $1;
            let new_remaining = new$9.tail;
            let prev$1 = $;
            let old_remaining = old.tail;
            let change = replace2(node_index - moved_offset, next$1);
            let _block;
            let _pipe = events;
            let _pipe$1 = remove_child(_pipe, path, node_index, prev$1);
            _block = add_child(
              _pipe$1,
              mapper,
              path,
              node_index,
              next$1
            );
            let events$1 = _block;
            loop$old = old_remaining;
            loop$old_keyed = old_keyed;
            loop$new = new_remaining;
            loop$new_keyed = new_keyed;
            loop$moved = moved;
            loop$moved_offset = moved_offset;
            loop$removed = removed;
            loop$node_index = node_index + 1;
            loop$patch_index = patch_index;
            loop$path = path;
            loop$changes = prepend(change, changes);
            loop$children = children;
            loop$mapper = mapper;
            loop$events = events$1;
          }
        } else {
          let $1 = new$9.head;
          if ($1 instanceof UnsafeInnerHtml) {
            let next$1 = $1;
            let new$1 = new$9.tail;
            let prev$1 = $;
            let old$1 = old.tail;
            let composed_mapper = compose_mapper(mapper, next$1.mapper);
            let child_path = add3(path, node_index, next$1.key);
            let $2 = diff_attributes(
              false,
              child_path,
              composed_mapper,
              events,
              prev$1.attributes,
              next$1.attributes,
              empty_list,
              empty_list
            );
            let added_attrs;
            let removed_attrs;
            let events$1;
            added_attrs = $2.added;
            removed_attrs = $2.removed;
            events$1 = $2.events;
            let _block;
            if (removed_attrs instanceof Empty && added_attrs instanceof Empty) {
              _block = empty_list;
            } else {
              _block = toList([update(added_attrs, removed_attrs)]);
            }
            let child_changes = _block;
            let _block$1;
            let $3 = prev$1.inner_html === next$1.inner_html;
            if ($3) {
              _block$1 = child_changes;
            } else {
              _block$1 = prepend(
                replace_inner_html(next$1.inner_html),
                child_changes
              );
            }
            let child_changes$1 = _block$1;
            let _block$2;
            if (child_changes$1 instanceof Empty) {
              _block$2 = children;
            } else {
              _block$2 = prepend(
                new$5(node_index, 0, child_changes$1, toList([])),
                children
              );
            }
            let children$1 = _block$2;
            loop$old = old$1;
            loop$old_keyed = old_keyed;
            loop$new = new$1;
            loop$new_keyed = new_keyed;
            loop$moved = moved;
            loop$moved_offset = moved_offset;
            loop$removed = removed;
            loop$node_index = node_index + 1;
            loop$patch_index = patch_index;
            loop$path = path;
            loop$changes = changes;
            loop$children = children$1;
            loop$mapper = mapper;
            loop$events = events$1;
          } else {
            let next$1 = $1;
            let new_remaining = new$9.tail;
            let prev$1 = $;
            let old_remaining = old.tail;
            let change = replace2(node_index - moved_offset, next$1);
            let _block;
            let _pipe = events;
            let _pipe$1 = remove_child(_pipe, path, node_index, prev$1);
            _block = add_child(
              _pipe$1,
              mapper,
              path,
              node_index,
              next$1
            );
            let events$1 = _block;
            loop$old = old_remaining;
            loop$old_keyed = old_keyed;
            loop$new = new_remaining;
            loop$new_keyed = new_keyed;
            loop$moved = moved;
            loop$moved_offset = moved_offset;
            loop$removed = removed;
            loop$node_index = node_index + 1;
            loop$patch_index = patch_index;
            loop$path = path;
            loop$changes = prepend(change, changes);
            loop$children = children;
            loop$mapper = mapper;
            loop$events = events$1;
          }
        }
      }
    }
  }
}
function diff(events, old, new$9) {
  return do_diff(
    toList([old]),
    empty2(),
    toList([new$9]),
    empty2(),
    empty2(),
    0,
    0,
    0,
    0,
    root2,
    empty_list,
    empty_list,
    identity2,
    tick(events)
  );
}

// build/dev/javascript/lustre/lustre/vdom/reconciler.ffi.mjs
var setTimeout2 = globalThis.setTimeout;
var clearTimeout = globalThis.clearTimeout;
var createElementNS = (ns, name) => document2().createElementNS(ns, name);
var createTextNode = (data) => document2().createTextNode(data);
var createDocumentFragment = () => document2().createDocumentFragment();
var insertBefore = (parent, node2, reference) => parent.insertBefore(node2, reference);
var moveBefore = SUPPORTS_MOVE_BEFORE ? (parent, node2, reference) => parent.moveBefore(node2, reference) : insertBefore;
var removeChild = (parent, child) => parent.removeChild(child);
var getAttribute = (node2, name) => node2.getAttribute(name);
var setAttribute = (node2, name, value2) => node2.setAttribute(name, value2);
var removeAttribute = (node2, name) => node2.removeAttribute(name);
var addEventListener = (node2, name, handler, options) => node2.addEventListener(name, handler, options);
var removeEventListener = (node2, name, handler) => node2.removeEventListener(name, handler);
var setInnerHtml = (node2, innerHtml) => node2.innerHTML = innerHtml;
var setData = (node2, data) => node2.data = data;
var meta = Symbol("lustre");
var MetadataNode = class {
  constructor(kind, parent, node2, key) {
    this.kind = kind;
    this.key = key;
    this.parent = parent;
    this.children = [];
    this.node = node2;
    this.handlers = /* @__PURE__ */ new Map();
    this.throttles = /* @__PURE__ */ new Map();
    this.debouncers = /* @__PURE__ */ new Map();
  }
  get parentNode() {
    return this.kind === fragment_kind ? this.node.parentNode : this.node;
  }
};
var insertMetadataChild = (kind, parent, node2, index4, key) => {
  const child = new MetadataNode(kind, parent, node2, key);
  node2[meta] = child;
  parent?.children.splice(index4, 0, child);
  return child;
};
var getPath = (node2) => {
  let path = "";
  for (let current = node2[meta]; current.parent; current = current.parent) {
    if (current.key) {
      path = `${separator_element}${current.key}${path}`;
    } else {
      const index4 = current.parent.children.indexOf(current);
      path = `${separator_element}${index4}${path}`;
    }
  }
  return path.slice(1);
};
var Reconciler = class {
  #root = null;
  #dispatch = () => {
  };
  #useServerEvents = false;
  #exposeKeys = false;
  constructor(root3, dispatch, { useServerEvents = false, exposeKeys = false } = {}) {
    this.#root = root3;
    this.#dispatch = dispatch;
    this.#useServerEvents = useServerEvents;
    this.#exposeKeys = exposeKeys;
  }
  mount(vdom) {
    insertMetadataChild(element_kind, null, this.#root, 0, null);
    this.#insertChild(this.#root, null, this.#root[meta], 0, vdom);
  }
  push(patch) {
    this.#stack.push({ node: this.#root[meta], patch });
    this.#reconcile();
  }
  // PATCHING ------------------------------------------------------------------
  #stack = [];
  #reconcile() {
    const stack = this.#stack;
    while (stack.length) {
      const { node: node2, patch } = stack.pop();
      const { children: childNodes } = node2;
      const { changes, removed, children: childPatches } = patch;
      iterate(changes, (change) => this.#patch(node2, change));
      if (removed) {
        this.#removeChildren(node2, childNodes.length - removed, removed);
      }
      iterate(childPatches, (childPatch) => {
        const child = childNodes[childPatch.index | 0];
        this.#stack.push({ node: child, patch: childPatch });
      });
    }
  }
  #patch(node2, change) {
    switch (change.kind) {
      case replace_text_kind:
        this.#replaceText(node2, change);
        break;
      case replace_inner_html_kind:
        this.#replaceInnerHtml(node2, change);
        break;
      case update_kind:
        this.#update(node2, change);
        break;
      case move_kind:
        this.#move(node2, change);
        break;
      case remove_kind:
        this.#remove(node2, change);
        break;
      case replace_kind:
        this.#replace(node2, change);
        break;
      case insert_kind:
        this.#insert(node2, change);
        break;
    }
  }
  // CHANGES -------------------------------------------------------------------
  #insert(parent, { children, before }) {
    const fragment4 = createDocumentFragment();
    const beforeEl = this.#getReference(parent, before);
    this.#insertChildren(fragment4, null, parent, before | 0, children);
    insertBefore(parent.parentNode, fragment4, beforeEl);
  }
  #replace(parent, { index: index4, with: child }) {
    this.#removeChildren(parent, index4 | 0, 1);
    const beforeEl = this.#getReference(parent, index4);
    this.#insertChild(parent.parentNode, beforeEl, parent, index4 | 0, child);
  }
  #getReference(node2, index4) {
    index4 = index4 | 0;
    const { children } = node2;
    const childCount = children.length;
    if (index4 < childCount) {
      return children[index4].node;
    }
    let lastChild = children[childCount - 1];
    if (!lastChild && node2.kind !== fragment_kind) return null;
    if (!lastChild) lastChild = node2;
    while (lastChild.kind === fragment_kind && lastChild.children.length) {
      lastChild = lastChild.children[lastChild.children.length - 1];
    }
    return lastChild.node.nextSibling;
  }
  #move(parent, { key, before }) {
    before = before | 0;
    const { children, parentNode } = parent;
    const beforeEl = children[before].node;
    let prev = children[before];
    for (let i = before + 1; i < children.length; ++i) {
      const next = children[i];
      children[i] = prev;
      prev = next;
      if (next.key === key) {
        children[before] = next;
        break;
      }
    }
    const { kind, node: node2, children: prevChildren } = prev;
    moveBefore(parentNode, node2, beforeEl);
    if (kind === fragment_kind) {
      this.#moveChildren(parentNode, prevChildren, beforeEl);
    }
  }
  #moveChildren(domParent, children, beforeEl) {
    for (let i = 0; i < children.length; ++i) {
      const { kind, node: node2, children: nestedChildren } = children[i];
      moveBefore(domParent, node2, beforeEl);
      if (kind === fragment_kind) {
        this.#moveChildren(domParent, nestedChildren, beforeEl);
      }
    }
  }
  #remove(parent, { index: index4 }) {
    this.#removeChildren(parent, index4, 1);
  }
  #removeChildren(parent, index4, count) {
    const { children, parentNode } = parent;
    const deleted = children.splice(index4, count);
    for (let i = 0; i < deleted.length; ++i) {
      const { kind, node: node2, children: nestedChildren } = deleted[i];
      removeChild(parentNode, node2);
      this.#removeDebouncers(deleted[i]);
      if (kind === fragment_kind) {
        deleted.push(...nestedChildren);
      }
    }
  }
  #removeDebouncers(node2) {
    const { debouncers, children } = node2;
    for (const { timeout } of debouncers.values()) {
      if (timeout) {
        clearTimeout(timeout);
      }
    }
    debouncers.clear();
    iterate(children, (child) => this.#removeDebouncers(child));
  }
  #update({ node: node2, handlers, throttles, debouncers }, { added, removed }) {
    iterate(removed, ({ name }) => {
      if (handlers.delete(name)) {
        removeEventListener(node2, name, handleEvent);
        this.#updateDebounceThrottle(throttles, name, 0);
        this.#updateDebounceThrottle(debouncers, name, 0);
      } else {
        removeAttribute(node2, name);
        SYNCED_ATTRIBUTES[name]?.removed?.(node2, name);
      }
    });
    iterate(added, (attribute3) => this.#createAttribute(node2, attribute3));
  }
  #replaceText({ node: node2 }, { content }) {
    setData(node2, content ?? "");
  }
  #replaceInnerHtml({ node: node2 }, { inner_html }) {
    setInnerHtml(node2, inner_html ?? "");
  }
  // INSERT --------------------------------------------------------------------
  #insertChildren(domParent, beforeEl, metaParent, index4, children) {
    iterate(
      children,
      (child) => this.#insertChild(domParent, beforeEl, metaParent, index4++, child)
    );
  }
  #insertChild(domParent, beforeEl, metaParent, index4, vnode) {
    switch (vnode.kind) {
      case element_kind: {
        const node2 = this.#createElement(metaParent, index4, vnode);
        this.#insertChildren(node2, null, node2[meta], 0, vnode.children);
        insertBefore(domParent, node2, beforeEl);
        break;
      }
      case text_kind: {
        const node2 = this.#createTextNode(metaParent, index4, vnode);
        insertBefore(domParent, node2, beforeEl);
        break;
      }
      case fragment_kind: {
        const head = this.#createTextNode(metaParent, index4, vnode);
        insertBefore(domParent, head, beforeEl);
        this.#insertChildren(
          domParent,
          beforeEl,
          head[meta],
          0,
          vnode.children
        );
        break;
      }
      case unsafe_inner_html_kind: {
        const node2 = this.#createElement(metaParent, index4, vnode);
        this.#replaceInnerHtml({ node: node2 }, vnode);
        insertBefore(domParent, node2, beforeEl);
        break;
      }
    }
  }
  #createElement(parent, index4, { kind, key, tag, namespace, attributes }) {
    const node2 = createElementNS(namespace || NAMESPACE_HTML, tag);
    insertMetadataChild(kind, parent, node2, index4, key);
    if (this.#exposeKeys && key) {
      setAttribute(node2, "data-lustre-key", key);
    }
    iterate(attributes, (attribute3) => this.#createAttribute(node2, attribute3));
    return node2;
  }
  #createTextNode(parent, index4, { kind, key, content }) {
    const node2 = createTextNode(content ?? "");
    insertMetadataChild(kind, parent, node2, index4, key);
    return node2;
  }
  #createAttribute(node2, attribute3) {
    const { debouncers, handlers, throttles } = node2[meta];
    const {
      kind,
      name,
      value: value2,
      prevent_default: prevent,
      debounce: debounceDelay,
      throttle: throttleDelay
    } = attribute3;
    switch (kind) {
      case attribute_kind: {
        const valueOrDefault = value2 ?? "";
        if (name === "virtual:defaultValue") {
          node2.defaultValue = valueOrDefault;
          return;
        }
        if (valueOrDefault !== getAttribute(node2, name)) {
          setAttribute(node2, name, valueOrDefault);
        }
        SYNCED_ATTRIBUTES[name]?.added?.(node2, valueOrDefault);
        break;
      }
      case property_kind:
        node2[name] = value2;
        break;
      case event_kind: {
        if (handlers.has(name)) {
          removeEventListener(node2, name, handleEvent);
        }
        const passive = prevent.kind === never_kind;
        addEventListener(node2, name, handleEvent, { passive });
        this.#updateDebounceThrottle(throttles, name, throttleDelay);
        this.#updateDebounceThrottle(debouncers, name, debounceDelay);
        handlers.set(name, (event4) => this.#handleEvent(attribute3, event4));
        break;
      }
    }
  }
  #updateDebounceThrottle(map5, name, delay) {
    const debounceOrThrottle = map5.get(name);
    if (delay > 0) {
      if (debounceOrThrottle) {
        debounceOrThrottle.delay = delay;
      } else {
        map5.set(name, { delay });
      }
    } else if (debounceOrThrottle) {
      const { timeout } = debounceOrThrottle;
      if (timeout) {
        clearTimeout(timeout);
      }
      map5.delete(name);
    }
  }
  #handleEvent(attribute3, event4) {
    const { currentTarget, type } = event4;
    const { debouncers, throttles } = currentTarget[meta];
    const path = getPath(currentTarget);
    const {
      prevent_default: prevent,
      stop_propagation: stop,
      include,
      immediate
    } = attribute3;
    if (prevent.kind === always_kind) event4.preventDefault();
    if (stop.kind === always_kind) event4.stopPropagation();
    if (type === "submit") {
      event4.detail ??= {};
      event4.detail.formData = [
        ...new FormData(event4.target, event4.submitter).entries()
      ];
    }
    const data = this.#useServerEvents ? createServerEvent(event4, include ?? []) : event4;
    const throttle = throttles.get(type);
    if (throttle) {
      const now = Date.now();
      const last = throttle.last || 0;
      if (now > last + throttle.delay) {
        throttle.last = now;
        throttle.lastEvent = event4;
        this.#dispatch(data, path, type, immediate);
      }
    }
    const debounce = debouncers.get(type);
    if (debounce) {
      clearTimeout(debounce.timeout);
      debounce.timeout = setTimeout2(() => {
        if (event4 === throttles.get(type)?.lastEvent) return;
        this.#dispatch(data, path, type, immediate);
      }, debounce.delay);
    }
    if (!throttle && !debounce) {
      this.#dispatch(data, path, type, immediate);
    }
  }
};
var iterate = (list4, callback) => {
  if (Array.isArray(list4)) {
    for (let i = 0; i < list4.length; i++) {
      callback(list4[i]);
    }
  } else if (list4) {
    for (list4; list4.head; list4 = list4.tail) {
      callback(list4.head);
    }
  }
};
var handleEvent = (event4) => {
  const { currentTarget, type } = event4;
  const handler = currentTarget[meta].handlers.get(type);
  handler(event4);
};
var createServerEvent = (event4, include = []) => {
  const data = {};
  if (event4.type === "input" || event4.type === "change") {
    include.push("target.value");
  }
  if (event4.type === "submit") {
    include.push("detail.formData");
  }
  for (const property4 of include) {
    const path = property4.split(".");
    for (let i = 0, input2 = event4, output = data; i < path.length; i++) {
      if (i === path.length - 1) {
        output[path[i]] = input2[path[i]];
        break;
      }
      output = output[path[i]] ??= {};
      input2 = input2[path[i]];
    }
  }
  return data;
};
var syncedBooleanAttribute = /* @__NO_SIDE_EFFECTS__ */ (name) => {
  return {
    added(node2) {
      node2[name] = true;
    },
    removed(node2) {
      node2[name] = false;
    }
  };
};
var syncedAttribute = /* @__NO_SIDE_EFFECTS__ */ (name) => {
  return {
    added(node2, value2) {
      node2[name] = value2;
    }
  };
};
var SYNCED_ATTRIBUTES = {
  checked: /* @__PURE__ */ syncedBooleanAttribute("checked"),
  selected: /* @__PURE__ */ syncedBooleanAttribute("selected"),
  value: /* @__PURE__ */ syncedAttribute("value"),
  autofocus: {
    added(node2) {
      queueMicrotask(() => {
        node2.focus?.();
      });
    }
  },
  autoplay: {
    added(node2) {
      try {
        node2.play?.();
      } catch (e) {
        console.error(e);
      }
    }
  }
};

// build/dev/javascript/lustre/lustre/element/keyed.mjs
function do_extract_keyed_children(loop$key_children_pairs, loop$keyed_children, loop$children) {
  while (true) {
    let key_children_pairs = loop$key_children_pairs;
    let keyed_children = loop$keyed_children;
    let children = loop$children;
    if (key_children_pairs instanceof Empty) {
      return [keyed_children, reverse(children)];
    } else {
      let rest = key_children_pairs.tail;
      let key = key_children_pairs.head[0];
      let element$1 = key_children_pairs.head[1];
      let keyed_element = to_keyed(key, element$1);
      let _block;
      if (key === "") {
        _block = keyed_children;
      } else {
        _block = insert2(keyed_children, key, keyed_element);
      }
      let keyed_children$1 = _block;
      let children$1 = prepend(keyed_element, children);
      loop$key_children_pairs = rest;
      loop$keyed_children = keyed_children$1;
      loop$children = children$1;
    }
  }
}
function extract_keyed_children(children) {
  return do_extract_keyed_children(
    children,
    empty2(),
    empty_list
  );
}
function element3(tag, attributes, children) {
  let $ = extract_keyed_children(children);
  let keyed_children;
  let children$1;
  keyed_children = $[0];
  children$1 = $[1];
  return element(
    "",
    identity2,
    "",
    tag,
    attributes,
    children$1,
    keyed_children,
    false,
    false
  );
}
function namespaced2(namespace, tag, attributes, children) {
  let $ = extract_keyed_children(children);
  let keyed_children;
  let children$1;
  keyed_children = $[0];
  children$1 = $[1];
  return element(
    "",
    identity2,
    namespace,
    tag,
    attributes,
    children$1,
    keyed_children,
    false,
    false
  );
}
function fragment3(children) {
  let $ = extract_keyed_children(children);
  let keyed_children;
  let children$1;
  keyed_children = $[0];
  children$1 = $[1];
  return fragment("", identity2, children$1, keyed_children);
}

// build/dev/javascript/lustre/lustre/vdom/virtualise.ffi.mjs
var virtualise = (root3) => {
  const rootMeta = insertMetadataChild(element_kind, null, root3, 0, null);
  let virtualisableRootChildren = 0;
  for (let child = root3.firstChild; child; child = child.nextSibling) {
    if (canVirtualiseNode(child)) virtualisableRootChildren += 1;
  }
  if (virtualisableRootChildren === 0) {
    const placeholder = document2().createTextNode("");
    insertMetadataChild(text_kind, rootMeta, placeholder, 0, null);
    root3.replaceChildren(placeholder);
    return none2();
  }
  if (virtualisableRootChildren === 1) {
    const children2 = virtualiseChildNodes(rootMeta, root3);
    return children2.head[1];
  }
  const fragmentHead = document2().createTextNode("");
  const fragmentMeta = insertMetadataChild(fragment_kind, rootMeta, fragmentHead, 0, null);
  const children = virtualiseChildNodes(fragmentMeta, root3);
  root3.insertBefore(fragmentHead, root3.firstChild);
  return fragment3(children);
};
var canVirtualiseNode = (node2) => {
  switch (node2.nodeType) {
    case ELEMENT_NODE:
      return true;
    case TEXT_NODE:
      return !!node2.data;
    default:
      return false;
  }
};
var virtualiseNode = (meta2, node2, key, index4) => {
  if (!canVirtualiseNode(node2)) {
    return null;
  }
  switch (node2.nodeType) {
    case ELEMENT_NODE: {
      const childMeta = insertMetadataChild(element_kind, meta2, node2, index4, key);
      const tag = node2.localName;
      const namespace = node2.namespaceURI;
      const isHtmlElement = !namespace || namespace === NAMESPACE_HTML;
      if (isHtmlElement && INPUT_ELEMENTS.includes(tag)) {
        virtualiseInputEvents(tag, node2);
      }
      const attributes = virtualiseAttributes(node2);
      const children = virtualiseChildNodes(childMeta, node2);
      const vnode = isHtmlElement ? element3(tag, attributes, children) : namespaced2(namespace, tag, attributes, children);
      return vnode;
    }
    case TEXT_NODE:
      insertMetadataChild(text_kind, meta2, node2, index4, null);
      return text2(node2.data);
    default:
      return null;
  }
};
var INPUT_ELEMENTS = ["input", "select", "textarea"];
var virtualiseInputEvents = (tag, node2) => {
  const value2 = node2.value;
  const checked = node2.checked;
  if (tag === "input" && node2.type === "checkbox" && !checked) return;
  if (tag === "input" && node2.type === "radio" && !checked) return;
  if (node2.type !== "checkbox" && node2.type !== "radio" && !value2) return;
  queueMicrotask(() => {
    node2.value = value2;
    node2.checked = checked;
    node2.dispatchEvent(new Event("input", { bubbles: true }));
    node2.dispatchEvent(new Event("change", { bubbles: true }));
    if (document2().activeElement !== node2) {
      node2.dispatchEvent(new Event("blur", { bubbles: true }));
    }
  });
};
var virtualiseChildNodes = (meta2, node2) => {
  let children = null;
  let child = node2.firstChild;
  let ptr = null;
  let index4 = 0;
  while (child) {
    const key = child.nodeType === ELEMENT_NODE ? child.getAttribute("data-lustre-key") : null;
    if (key != null) {
      child.removeAttribute("data-lustre-key");
    }
    const vnode = virtualiseNode(meta2, child, key, index4);
    const next = child.nextSibling;
    if (vnode) {
      const list_node = new NonEmpty([key ?? "", vnode], null);
      if (ptr) {
        ptr = ptr.tail = list_node;
      } else {
        ptr = children = list_node;
      }
      index4 += 1;
    } else {
      node2.removeChild(child);
    }
    child = next;
  }
  if (!ptr) return empty_list;
  ptr.tail = empty_list;
  return children;
};
var virtualiseAttributes = (node2) => {
  let index4 = node2.attributes.length;
  let attributes = empty_list;
  while (index4-- > 0) {
    const attr = node2.attributes[index4];
    if (attr.name === "xmlns") {
      continue;
    }
    attributes = new NonEmpty(virtualiseAttribute(attr), attributes);
  }
  return attributes;
};
var virtualiseAttribute = (attr) => {
  const name = attr.localName;
  const value2 = attr.value;
  return attribute2(name, value2);
};

// build/dev/javascript/lustre/lustre/runtime/client/runtime.ffi.mjs
var is_browser = () => !!document2();
var Runtime = class {
  constructor(root3, [model, effects], view3, update3) {
    this.root = root3;
    this.#model = model;
    this.#view = view3;
    this.#update = update3;
    this.root.addEventListener("context-request", (event4) => {
      if (!(event4.context && event4.callback)) return;
      if (!this.#contexts.has(event4.context)) return;
      event4.stopImmediatePropagation();
      const context = this.#contexts.get(event4.context);
      if (event4.subscribe) {
        const callbackRef = new WeakRef(event4.callback);
        const unsubscribe = () => {
          context.subscribers = context.subscribers.filter(
            (subscriber) => subscriber !== callbackRef
          );
        };
        context.subscribers.push([callbackRef, unsubscribe]);
        event4.callback(context.value, unsubscribe);
      } else {
        event4.callback(context.value);
      }
    });
    this.#reconciler = new Reconciler(this.root, (event4, path, name) => {
      const [events, result] = handle(this.#events, path, name, event4);
      this.#events = events;
      if (result.isOk()) {
        const handler = result[0];
        if (handler.stop_propagation) event4.stopPropagation();
        if (handler.prevent_default) event4.preventDefault();
        this.dispatch(handler.message, false);
      }
    });
    this.#vdom = virtualise(this.root);
    this.#events = new$3();
    this.#shouldFlush = true;
    this.#tick(effects);
  }
  // PUBLIC API ----------------------------------------------------------------
  root = null;
  dispatch(msg, immediate = false) {
    this.#shouldFlush ||= immediate;
    if (this.#shouldQueue) {
      this.#queue.push(msg);
    } else {
      const [model, effects] = this.#update(this.#model, msg);
      this.#model = model;
      this.#tick(effects);
    }
  }
  emit(event4, data) {
    const target = this.root.host ?? this.root;
    target.dispatchEvent(
      new CustomEvent(event4, {
        detail: data,
        bubbles: true,
        composed: true
      })
    );
  }
  // Provide a context value for any child nodes that request it using the given
  // key. If the key already exists, any existing subscribers will be notified
  // of the change. Otherwise, we store the value and wait for any `context-request`
  // events to come in.
  provide(key, value2) {
    if (!this.#contexts.has(key)) {
      this.#contexts.set(key, { value: value2, subscribers: [] });
    } else {
      const context = this.#contexts.get(key);
      context.value = value2;
      for (let i = context.subscribers.length - 1; i >= 0; i--) {
        const [subscriberRef, unsubscribe] = context.subscribers[i];
        const subscriber = subscriberRef.deref();
        if (!subscriber) {
          context.subscribers.splice(i, 1);
          continue;
        }
        subscriber(value2, unsubscribe);
      }
    }
  }
  // PRIVATE API ---------------------------------------------------------------
  #model;
  #view;
  #update;
  #vdom;
  #events;
  #reconciler;
  #contexts = /* @__PURE__ */ new Map();
  #shouldQueue = false;
  #queue = [];
  #beforePaint = empty_list;
  #afterPaint = empty_list;
  #renderTimer = null;
  #shouldFlush = false;
  #actions = {
    dispatch: (msg, immediate) => this.dispatch(msg, immediate),
    emit: (event4, data) => this.emit(event4, data),
    select: () => {
    },
    root: () => this.root,
    provide: (key, value2) => this.provide(key, value2)
  };
  // A `#tick` is where we process effects and trigger any synchronous updates.
  // Once a tick has been processed a render will be scheduled if none is already.
  // p0
  #tick(effects) {
    this.#shouldQueue = true;
    while (true) {
      for (let list4 = effects.synchronous; list4.tail; list4 = list4.tail) {
        list4.head(this.#actions);
      }
      this.#beforePaint = listAppend(this.#beforePaint, effects.before_paint);
      this.#afterPaint = listAppend(this.#afterPaint, effects.after_paint);
      if (!this.#queue.length) break;
      [this.#model, effects] = this.#update(this.#model, this.#queue.shift());
    }
    this.#shouldQueue = false;
    if (this.#shouldFlush) {
      cancelAnimationFrame(this.#renderTimer);
      this.#render();
    } else if (!this.#renderTimer) {
      this.#renderTimer = requestAnimationFrame(() => {
        this.#render();
      });
    }
  }
  #render() {
    this.#shouldFlush = false;
    this.#renderTimer = null;
    const next = this.#view(this.#model);
    const { patch, events } = diff(this.#events, this.#vdom, next);
    this.#events = events;
    this.#vdom = next;
    this.#reconciler.push(patch);
    if (this.#beforePaint instanceof NonEmpty) {
      const effects = makeEffect(this.#beforePaint);
      this.#beforePaint = empty_list;
      queueMicrotask(() => {
        this.#shouldFlush = true;
        this.#tick(effects);
      });
    }
    if (this.#afterPaint instanceof NonEmpty) {
      const effects = makeEffect(this.#afterPaint);
      this.#afterPaint = empty_list;
      requestAnimationFrame(() => {
        this.#shouldFlush = true;
        this.#tick(effects);
      });
    }
  }
};
function makeEffect(synchronous) {
  return {
    synchronous,
    after_paint: empty_list,
    before_paint: empty_list
  };
}
function listAppend(a, b) {
  if (a instanceof Empty) {
    return b;
  } else if (b instanceof Empty) {
    return a;
  } else {
    return append(a, b);
  }
}

// build/dev/javascript/lustre/lustre/runtime/server/runtime.mjs
var EffectDispatchedMessage = class extends CustomType {
  constructor(message) {
    super();
    this.message = message;
  }
};
var EffectEmitEvent = class extends CustomType {
  constructor(name, data) {
    super();
    this.name = name;
    this.data = data;
  }
};
var SystemRequestedShutdown = class extends CustomType {
};

// build/dev/javascript/lustre/lustre/component.mjs
var Config2 = class extends CustomType {
  constructor(open_shadow_root, adopt_styles, delegates_focus, attributes, properties, contexts, is_form_associated, on_form_autofill, on_form_reset, on_form_restore) {
    super();
    this.open_shadow_root = open_shadow_root;
    this.adopt_styles = adopt_styles;
    this.delegates_focus = delegates_focus;
    this.attributes = attributes;
    this.properties = properties;
    this.contexts = contexts;
    this.is_form_associated = is_form_associated;
    this.on_form_autofill = on_form_autofill;
    this.on_form_reset = on_form_reset;
    this.on_form_restore = on_form_restore;
  }
};
function new$6(options) {
  let init2 = new Config2(
    true,
    true,
    false,
    empty_list,
    empty_list,
    empty_list,
    false,
    option_none,
    option_none,
    option_none
  );
  return fold(
    options,
    init2,
    (config, option) => {
      return option.apply(config);
    }
  );
}

// build/dev/javascript/lustre/lustre/runtime/client/spa.ffi.mjs
var Spa = class {
  #runtime;
  constructor(root3, [init2, effects], update3, view3) {
    this.#runtime = new Runtime(root3, [init2, effects], view3, update3);
  }
  send(message) {
    switch (message.constructor) {
      case EffectDispatchedMessage: {
        this.dispatch(message.message, false);
        break;
      }
      case EffectEmitEvent: {
        this.emit(message.name, message.data);
        break;
      }
      case SystemRequestedShutdown:
        break;
    }
  }
  dispatch(msg, immediate) {
    this.#runtime.dispatch(msg, immediate);
  }
  emit(event4, data) {
    this.#runtime.emit(event4, data);
  }
};
var start = ({ init: init2, update: update3, view: view3 }, selector2, flags) => {
  if (!is_browser()) return new Error2(new NotABrowser());
  const root3 = selector2 instanceof HTMLElement ? selector2 : document2().querySelector(selector2);
  if (!root3) return new Error2(new ElementNotFound(selector2));
  return new Ok(new Spa(root3, init2(flags), update3, view3));
};

// build/dev/javascript/lustre/lustre.mjs
var App = class extends CustomType {
  constructor(init2, update3, view3, config) {
    super();
    this.init = init2;
    this.update = update3;
    this.view = view3;
    this.config = config;
  }
};
var ElementNotFound = class extends CustomType {
  constructor(selector2) {
    super();
    this.selector = selector2;
  }
};
var NotABrowser = class extends CustomType {
};
function application(init2, update3, view3) {
  return new App(init2, update3, view3, new$6(empty_list));
}
function start3(app, selector2, start_args) {
  return guard(
    !is_browser(),
    new Error2(new NotABrowser()),
    () => {
      return start(app, selector2, start_args);
    }
  );
}

// build/dev/javascript/sketch/sketch.ffi.mjs
var id = 0;
function uniqueId() {
  return id++;
}

// build/dev/javascript/gleam_stdlib/gleam/pair.mjs
function map_second(pair, fun) {
  let a;
  let b;
  a = pair[0];
  b = pair[1];
  return [a, fun(b)];
}

// build/dev/javascript/murmur3a/murmur3a_ffi.mjs
var signed_multiply = Math.imul;

// build/dev/javascript/murmur3a/murmur3a.mjs
var Hash = class extends CustomType {
  constructor(seed, shift, state) {
    super();
    this.seed = seed;
    this.shift = shift;
    this.state = state;
  }
};
function int_digest(hash) {
  return hash.state;
}
function bit_array_digest(hash) {
  return toBitArray([sizedInt(int_digest(hash), 32, true)]);
}
function hex_digest(hash) {
  let _pipe = hash;
  let _pipe$1 = bit_array_digest(_pipe);
  return base16_encode(_pipe$1);
}
var c1 = 3432918353;
var c2 = 461845907;
var m1 = 4294967295;
function rotate_left(n, shift) {
  let n$1 = bitwise_and(n, m1);
  let _pipe = bitwise_shift_left(n$1, shift);
  let _pipe$1 = bitwise_and(_pipe, m1);
  return bitwise_or(_pipe$1, bitwise_shift_right(n$1, 32 - shift));
}
function mix(state, seed) {
  let _pipe = state;
  let _pipe$1 = signed_multiply(_pipe, c1);
  let _pipe$2 = rotate_left(_pipe$1, 15);
  let _pipe$3 = signed_multiply(_pipe$2, c2);
  let _pipe$4 = bitwise_exclusive_or(_pipe$3, seed);
  let _pipe$5 = rotate_left(_pipe$4, 13);
  let _pipe$6 = signed_multiply(_pipe$5, 5);
  return add(_pipe$6, 3864292196);
}
function hash_chunk(hash, chunk) {
  let _block;
  let _pipe = chunk;
  let _pipe$1 = bitwise_and(_pipe, 255);
  let _pipe$2 = bitwise_shift_left(_pipe$1, hash.shift);
  _block = bitwise_or(_pipe$2, hash.state);
  let state = _block;
  let $ = hash.shift;
  if ($ === 24) {
    return new Hash(mix(state, hash.seed), 0, 0);
  } else {
    return new Hash(hash.seed, hash.shift + 8, state);
  }
}
function finalize(hash, length3) {
  let _block;
  let _block$1;
  let $ = hash.state;
  if ($ === 0) {
    _block$1 = hash.seed;
  } else {
    let _pipe2 = hash.state;
    let _pipe$12 = signed_multiply(_pipe2, c1);
    let _pipe$22 = rotate_left(_pipe$12, 15);
    let _pipe$32 = signed_multiply(_pipe$22, c2);
    let _pipe$42 = bitwise_exclusive_or(_pipe$32, hash.seed);
    _block$1 = bitwise_and(_pipe$42, m1);
  }
  let _pipe = _block$1;
  _block = bitwise_exclusive_or(_pipe, length3);
  let state = _block;
  let _block$2;
  let _pipe$1 = bitwise_shift_right(state, 16);
  let _pipe$2 = bitwise_exclusive_or(_pipe$1, state);
  let _pipe$3 = signed_multiply(_pipe$2, 2246822507);
  _block$2 = bitwise_and(_pipe$3, m1);
  let state$1 = _block$2;
  let _block$3;
  let _pipe$4 = bitwise_shift_right(state$1, 13);
  let _pipe$5 = bitwise_exclusive_or(_pipe$4, state$1);
  _block$3 = signed_multiply(_pipe$5, 3266489909);
  let state$2 = _block$3;
  return new Hash(
    hash.seed,
    hash.shift,
    (() => {
      let _pipe$6 = bitwise_shift_right(state$2, 16);
      let _pipe$7 = bitwise_and(_pipe$6, 65535);
      return bitwise_exclusive_or(_pipe$7, state$2);
    })()
  );
}
function hash_ints(key, seed) {
  let _pipe = key;
  let _pipe$1 = fold(_pipe, new Hash(seed, 0, 0), hash_chunk);
  return finalize(_pipe$1, length(key));
}
function hash_string(key, seed) {
  let _pipe = key;
  let _pipe$1 = to_utf_codepoints(_pipe);
  let _pipe$2 = map(_pipe$1, utf_codepoint_to_int);
  return hash_ints(_pipe$2, seed);
}

// build/dev/javascript/sketch/sketch/internals/string.mjs
function indent(indent2) {
  return repeat(" ", indent2);
}
function wrap_class(id2, properties, indentation, pseudo) {
  let base_indent = indent(indentation);
  let pseudo_ = unwrap(pseudo, "");
  let _pipe = prepend(base_indent + id2 + pseudo_ + " {", properties);
  let _pipe$1 = join(_pipe, "\n");
  return append2(_pipe$1, "\n" + base_indent + "}");
}

// build/dev/javascript/sketch/sketch/internals/cache/cache.mjs
var FILEPATH = "src\\sketch\\internals\\cache\\cache.gleam";
var Class = class extends CustomType {
  constructor(as_string, content, name) {
    super();
    this.as_string = as_string;
    this.content = content;
    this.name = name;
  }
};
var Definitions = class extends CustomType {
  constructor(medias, selectors, class$5) {
    super();
    this.medias = medias;
    this.selectors = selectors;
    this.class = class$5;
  }
};
var ComputedClass = class extends CustomType {
  constructor(id2, name, class_name4, definitions) {
    super();
    this.id = id2;
    this.name = name;
    this.class_name = class_name4;
    this.definitions = definitions;
  }
};
var Cache = class extends CustomType {
  constructor(cache, at_rules) {
    super();
    this.cache = cache;
    this.at_rules = at_rules;
  }
};
var Global = class extends CustomType {
  constructor(class$5) {
    super();
    this.class = class$5;
  }
};
var ClassName = class extends CustomType {
  constructor(class$5) {
    super();
    this.class = class$5;
  }
};
var Media = class extends CustomType {
  constructor(query, styles) {
    super();
    this.query = query;
    this.styles = styles;
  }
};
var Selector = class extends CustomType {
  constructor(selector2, styles) {
    super();
    this.selector = selector2;
    this.styles = styles;
  }
};
var Combinator = class extends CustomType {
  constructor(selector2, class$5, styles) {
    super();
    this.selector = selector2;
    this.class = class$5;
    this.styles = styles;
  }
};
var Property2 = class extends CustomType {
  constructor(key, value2, important) {
    super();
    this.key = key;
    this.value = value2;
    this.important = important;
  }
};
var Properties = class extends CustomType {
  constructor(properties, medias, selectors, indentation) {
    super();
    this.properties = properties;
    this.medias = medias;
    this.selectors = selectors;
    this.indentation = indentation;
  }
};
var MediaProperty = class extends CustomType {
  constructor(query, properties, selectors) {
    super();
    this.query = query;
    this.properties = properties;
    this.selectors = selectors;
  }
};
var SelectorProperty = class extends CustomType {
  constructor(selector2, properties) {
    super();
    this.selector = selector2;
    this.properties = properties;
  }
};
function new$7() {
  return new Cache(new_map(), new_map());
}
function class$2(content) {
  let as_string = inspect2(content);
  return new Class(as_string, content, new None());
}
function named(name, content) {
  let as_string = inspect2(content);
  return new Class(as_string, content, new Some(name));
}
function empty_computed() {
  let definitions = new Definitions(toList([]), toList([]), "");
  return new ComputedClass("", "", "", definitions);
}
function compute_hash(to_hash) {
  let _pipe = hash_string(to_hash, 1);
  return hex_digest(_pipe);
}
function wrap_selectors(id2, indentation, selectors) {
  return map(
    selectors,
    (selector2) => {
      let selector$1;
      let properties;
      selector$1 = selector2.selector;
      properties = selector2.properties;
      return wrap_class(
        id2,
        properties,
        indentation,
        new Some(selector$1)
      );
    }
  );
}
function compute_classes(id2, name, properties) {
  let class_name$1 = lazy_unwrap(name, () => {
    return "css-" + id2;
  });
  let name$1 = lazy_unwrap(name, () => {
    return ".css-" + id2;
  });
  let properties$1;
  let medias;
  let selectors;
  properties$1 = properties.properties;
  medias = properties.medias;
  selectors = properties.selectors;
  let class$1 = wrap_class(name$1, properties$1, 0, new None());
  let selectors$1 = wrap_selectors(name$1, 0, selectors);
  return new ComputedClass(
    id2,
    name$1,
    class_name$1,
    new Definitions(
      map(
        medias,
        (_use0) => {
          let query;
          let properties$2;
          let selectors$2;
          query = _use0.query;
          properties$2 = _use0.properties;
          selectors$2 = _use0.selectors;
          let selectors$3 = wrap_selectors(name$1, 2, selectors$2);
          let _pipe = toList([
            query + " {",
            wrap_class(name$1, properties$2, 2, new None())
          ]);
          let _pipe$1 = ((_capture) => {
            return prepend2(toList([selectors$3, toList(["}"])]), _capture);
          })(_pipe);
          let _pipe$2 = flatten(_pipe$1);
          return join(_pipe$2, "\n");
        }
      ),
      selectors$1,
      class$1
    )
  );
}
function compute_property(indent2, key, value2, important) {
  let base_indent = indent(indent2);
  let _block;
  if (important) {
    _block = " !important";
  } else {
    _block = "";
  }
  let important$1 = _block;
  return base_indent + key + ": " + value2 + important$1 + ";";
}
function handle_property(props, property4) {
  let key;
  let value2;
  let important;
  if (property4 instanceof Property2) {
    key = property4.key;
    value2 = property4.value;
    important = property4.important;
  } else {
    throw makeError(
      "let_assert",
      FILEPATH,
      "sketch/internals/cache/cache",
      243,
      "handle_property",
      "Pattern match failed, no pattern matched the value.",
      {
        value: property4,
        start: 7133,
        end: 7189,
        pattern_start: 7144,
        pattern_end: 7178
      }
    );
  }
  let css_property = compute_property(props.indentation, key, value2, important);
  let properties = prepend(css_property, props.properties);
  return new Properties(
    properties,
    props.medias,
    props.selectors,
    props.indentation
  );
}
function merge_computed_properties(target, argument) {
  return new Properties(
    append(argument.properties, target.properties),
    append(argument.medias, target.medias),
    append(argument.selectors, target.selectors),
    target.indentation
  );
}
function get_definitions(class$5) {
  let $ = class$5.definitions;
  let medias;
  let selectors;
  let class$1;
  medias = $.medias;
  selectors = $.selectors;
  class$1 = $.class;
  let _pipe = toList([toList([class$1]), selectors, medias]);
  return flatten(_pipe);
}
function render_sheet(cache) {
  let _pipe = values(cache.at_rules);
  let _pipe$1 = append(
    _pipe,
    flat_map(
      values(cache.cache),
      (c) => {
        return get_definitions(c[0]);
      }
    )
  );
  return join(_pipe$1, "\n\n");
}
function handle_combinator(cache, props, combinator, existing_selector) {
  let selector2;
  let class$1;
  let styles;
  if (combinator instanceof Combinator) {
    selector2 = combinator.selector;
    class$1 = combinator.class;
    styles = combinator.styles;
  } else {
    throw makeError(
      "let_assert",
      FILEPATH,
      "sketch/internals/cache/cache",
      285,
      "handle_combinator",
      "Pattern match failed, no pattern matched the value.",
      {
        value: combinator,
        start: 8551,
        end: 8613,
        pattern_start: 8562,
        pattern_end: 8600
      }
    );
  }
  let indentation = props.indentation + 2;
  let $ = computed_class(class$1, cache);
  let cache$1;
  let class$22;
  cache$1 = $[0];
  class$22 = $[1];
  let selector$1 = existing_selector + selector2 + class$22.name;
  let $1 = compute_properties(cache$1, styles, indentation, selector$1);
  let cache$2;
  let properties;
  cache$2 = $1[0];
  properties = $1[1];
  let selector$2 = new SelectorProperty(selector$1, properties.properties);
  let selectors = prepend(selector$2, properties.selectors);
  let selectors$1 = append(selectors, props.selectors);
  return [
    cache$2,
    new Properties(
      props.properties,
      props.medias,
      selectors$1,
      props.indentation
    )
  ];
}
function compute_properties(cache, properties, indentation, existing_selector) {
  let init2 = new Properties(toList([]), toList([]), toList([]), indentation);
  return fold(
    reverse(properties),
    [cache, init2],
    (_use0, p2) => {
      let cache$1;
      let acc;
      cache$1 = _use0[0];
      acc = _use0[1];
      if (p2 instanceof ClassName) {
        let class$1 = p2.class;
        let $ = map_get(cache$1.cache, class$1.as_string);
        if ($ instanceof Ok) {
          let props = $[0][1];
          return [cache$1, merge_computed_properties(acc, props)];
        } else {
          let _pipe = compute_properties(
            cache$1,
            class$1.content,
            indentation,
            ""
          );
          return map_second(
            _pipe,
            (_capture) => {
              return merge_computed_properties(acc, _capture);
            }
          );
        }
      } else if (p2 instanceof Media) {
        return handle_media(cache$1, acc, p2);
      } else if (p2 instanceof Selector) {
        return handle_selector(cache$1, acc, p2, existing_selector);
      } else if (p2 instanceof Combinator) {
        return handle_combinator(cache$1, acc, p2, existing_selector);
      } else if (p2 instanceof Property2) {
        return [cache$1, handle_property(acc, p2)];
      } else {
        return [cache$1, acc];
      }
    }
  );
}
function insert_class_in_cache(cache, class$5) {
  let $ = compute_properties(cache, class$5.content, 2, "");
  let cache$1;
  let properties;
  cache$1 = $[0];
  properties = $[1];
  let hash = compute_hash(class$5.as_string);
  let class_ = compute_classes(hash, class$5.name, properties);
  let key = unwrap(class$5.name, class$5.as_string);
  let cache_ = insert(cache$1.cache, key, [class_, properties]);
  return [new Cache(cache_, cache$1.at_rules), class_];
}
function computed_class(class$5, cache) {
  return lazy_guard(
    is_empty2(class$5.content),
    () => {
      return [cache, empty_computed()];
    },
    () => {
      let existing_class = map_get(cache.cache, class$5.as_string);
      if (existing_class instanceof Ok) {
        let class$1 = existing_class[0][0];
        return [cache, class$1];
      } else {
        return insert_class_in_cache(cache, class$5);
      }
    }
  );
}
function class_name(class$5, cache) {
  return map_second(
    computed_class(class$5, cache),
    (class$6) => {
      return class$6.class_name;
    }
  );
}
function handle_media(cache, props, media) {
  let query;
  let styles;
  if (media instanceof Media) {
    query = media.query;
    styles = media.styles;
  } else {
    throw makeError(
      "let_assert",
      FILEPATH,
      "sketch/internals/cache/cache",
      254,
      "handle_media",
      "Pattern match failed, no pattern matched the value.",
      {
        value: media,
        start: 7462,
        end: 7503,
        pattern_start: 7473,
        pattern_end: 7495
      }
    );
  }
  let indentation = props.indentation + 2;
  let $ = compute_properties(cache, styles, indentation, "");
  let cache$1;
  let properties;
  cache$1 = $[0];
  properties = $[1];
  let properties$1;
  let selectors;
  properties$1 = properties.properties;
  selectors = properties.selectors;
  let medias = prepend(
    new MediaProperty(query, properties$1, selectors),
    props.medias
  );
  return [
    cache$1,
    new Properties(props.properties, medias, props.selectors, props.indentation)
  ];
}
function handle_selector(cache, props, selector2, existing_selector) {
  let selector$1;
  let styles;
  if (selector2 instanceof Selector) {
    selector$1 = selector2.selector;
    styles = selector2.styles;
  } else {
    throw makeError(
      "let_assert",
      FILEPATH,
      "sketch/internals/cache/cache",
      268,
      "handle_selector",
      "Pattern match failed, no pattern matched the value.",
      {
        value: selector2,
        start: 7944,
        end: 7994,
        pattern_start: 7955,
        pattern_end: 7983
      }
    );
  }
  let indentation = props.indentation + 2;
  let selector$2 = existing_selector + selector$1;
  let $ = compute_properties(cache, styles, indentation, selector$2);
  let cache$1;
  let properties;
  cache$1 = $[0];
  properties = $[1];
  let selector$3 = new SelectorProperty(selector$2, properties.properties);
  let selectors = prepend(selector$3, properties.selectors);
  let selectors$1 = append(selectors, props.selectors);
  return [
    cache$1,
    new Properties(
      props.properties,
      props.medias,
      selectors$1,
      props.indentation
    )
  ];
}

// build/dev/javascript/sketch/sketch/css/length.mjs
var Px = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Cm = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Mm = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Q = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var In = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Pc = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Pt = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Vh = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Vw = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Em = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Rem = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Lh = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Rlh = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Ch = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Pct = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Cap = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Ex = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Ic = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Rcap = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Rch = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Rex = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Ric = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Vmax = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Vmin = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Vb = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Vi = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Cqw = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Cqh = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Cqi = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Cqb = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Cqmin = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
function px(value2) {
  return new Px(identity(value2));
}
function cqw(value2) {
  return new Cqw(identity(value2));
}
function rem(value2) {
  return new Rem(value2);
}
function to_string4(size2) {
  if (size2 instanceof Px) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "px");
  } else if (size2 instanceof Cm) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "cm");
  } else if (size2 instanceof Mm) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "mm");
  } else if (size2 instanceof Q) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "q");
  } else if (size2 instanceof In) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "in");
  } else if (size2 instanceof Pc) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "pc");
  } else if (size2 instanceof Pt) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "pt");
  } else if (size2 instanceof Vh) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "vh");
  } else if (size2 instanceof Vw) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "vw");
  } else if (size2 instanceof Em) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "em");
  } else if (size2 instanceof Rem) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "rem");
  } else if (size2 instanceof Lh) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "lh");
  } else if (size2 instanceof Rlh) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "rlh");
  } else if (size2 instanceof Ch) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "ch");
  } else if (size2 instanceof Pct) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "%");
  } else if (size2 instanceof Cap) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "cap");
  } else if (size2 instanceof Ex) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "ex");
  } else if (size2 instanceof Ic) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "ic");
  } else if (size2 instanceof Rcap) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "rcap");
  } else if (size2 instanceof Rch) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "rch");
  } else if (size2 instanceof Rex) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "rex");
  } else if (size2 instanceof Ric) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "ric");
  } else if (size2 instanceof Vmax) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "vmax");
  } else if (size2 instanceof Vmin) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "vmin");
  } else if (size2 instanceof Vb) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "vb");
  } else if (size2 instanceof Vi) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "vi");
  } else if (size2 instanceof Cqw) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "cqw");
  } else if (size2 instanceof Cqh) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "cqh");
  } else if (size2 instanceof Cqi) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "cqi");
  } else if (size2 instanceof Cqb) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "cqb");
  } else if (size2 instanceof Cqmin) {
    let value2 = size2[0];
    return append2(float_to_string(value2), "cqmin");
  } else {
    let value2 = size2[0];
    return append2(float_to_string(value2), "cqmax");
  }
}

// build/dev/javascript/sketch/sketch/css.mjs
function class$4(styles) {
  return class$2(styles);
}
function global2(name, styles) {
  return new Global(named(name, styles));
}
function property3(field2, content) {
  return new Property2(field2, content, false);
}
function background_color(value2) {
  return property3("background-color", value2);
}
function border(border2) {
  return property3("border", border2);
}
function border_radius(border_radius2) {
  return property3("border-radius", to_string4(border_radius2));
}
function color(color2) {
  return property3("color", color2);
}
function cursor(cursor2) {
  return property3("cursor", cursor2);
}
function display(display2) {
  return property3("display", display2);
}
function flex_wrap(flex_wrap2) {
  return property3("flex-wrap", flex_wrap2);
}
function font_size(font_size2) {
  return property3("font-size", to_string4(font_size2));
}
function gap(gap2) {
  return property3("gap", to_string4(gap2));
}
function grid_template_columns(grid_template_columns2) {
  return property3("grid-template-columns", grid_template_columns2);
}
function margin(margin2) {
  return property3("margin", to_string4(margin2));
}
function margin_bottom(margin2) {
  return property3("margin-bottom", to_string4(margin2));
}
function margin_right(margin2) {
  return property3("margin-right", to_string4(margin2));
}
function margin_top(margin2) {
  return property3("margin-top", to_string4(margin2));
}
function padding(padding2) {
  return property3("padding", to_string4(padding2));
}
function padding_bottom(padding2) {
  return property3("padding-bottom", to_string4(padding2));
}
function padding_left(padding2) {
  return property3("padding-left", to_string4(padding2));
}
function padding_right(padding2) {
  return property3("padding-right", to_string4(padding2));
}
function padding_top(padding2) {
  return property3("padding-top", to_string4(padding2));
}
function width(width2) {
  return property3("width", to_string4(width2));
}
function selector(value2, styles) {
  return new Selector(value2, styles);
}
function hover(styles) {
  return selector(":hover", styles);
}

// build/dev/javascript/sketch/sketch.mjs
var StyleSheet = class extends CustomType {
  constructor(cache, id2, is_persistent) {
    super();
    this.cache = cache;
    this.id = id2;
    this.is_persistent = is_persistent;
  }
};
var Ephemeral = class extends CustomType {
};
var Persistent = class extends CustomType {
};
function render(cache) {
  return render_sheet(cache.cache);
}
function class_name2(class$5, stylesheet2) {
  let $ = class_name(class$5, stylesheet2.cache);
  let cache;
  let class_name$1;
  cache = $[0];
  class_name$1 = $[1];
  return [
    new StyleSheet(cache, stylesheet2.id, stylesheet2.is_persistent),
    class_name$1
  ];
}
function global3(stylesheet2, global4) {
  let $ = class_name(global4.class, stylesheet2.cache);
  let cache;
  cache = $[0];
  return new StyleSheet(cache, stylesheet2.id, stylesheet2.is_persistent);
}
function stylesheet(strategy) {
  let id2 = uniqueId();
  return new Ok(
    (() => {
      if (strategy instanceof Ephemeral) {
        return new StyleSheet(new$7(), id2, false);
      } else {
        return new StyleSheet(new$7(), id2, true);
      }
    })()
  );
}

// build/dev/javascript/sketch_lustre/sketch/lustre/internals/css-stylesheet.ffi.mjs
function replaceSync(content, stylesheet2) {
  stylesheet2.replaceSync(content);
}

// build/dev/javascript/sketch_lustre/sketch/lustre/internals/global.ffi.mjs
var currentStylesheet = null;
var stylesheets = {};
function setStyleSheet(stylesheet2) {
  stylesheets[stylesheet2.id] = stylesheet2;
  return new Ok(stylesheet2);
}
function setCurrentStylesheet(stylesheet2) {
  currentStylesheet = stylesheet2.id;
  return new Ok(stylesheet2);
}
function getStyleSheet() {
  const stylesheet2 = stylesheets[currentStylesheet];
  if (!stylesheet2) return new Error2();
  return new Ok(stylesheet2);
}
function dismissCurrentStylesheet() {
  currentStylesheet = null;
  return new Ok(void 0);
}

// build/dev/javascript/sketch_lustre/sketch/lustre.mjs
var FILEPATH2 = "src\\sketch\\lustre.gleam";
var Document2 = class extends CustomType {
  constructor(css_stylesheet) {
    super();
    this.css_stylesheet = css_stylesheet;
  }
};
var Shadow = class extends CustomType {
  constructor(css_stylesheet) {
    super();
    this.css_stylesheet = css_stylesheet;
  }
};
var Node = class extends CustomType {
};
function setup() {
  let $ = stylesheet(new Persistent());
  if ($ instanceof Ok) {
    let stylesheet2 = $[0];
    return setStyleSheet(stylesheet2);
  } else {
    return new Error2(void 0);
  }
}
function render2(stylesheet2, outputs, view3) {
  let $ = setCurrentStylesheet(stylesheet2);
  if (!($ instanceof Ok)) {
    throw makeError(
      "let_assert",
      FILEPATH2,
      "sketch/lustre",
      117,
      "render",
      "Pattern match failed, no pattern matched the value.",
      {
        value: $,
        start: 3944,
        end: 4004,
        pattern_start: 3955,
        pattern_end: 3960
      }
    );
  }
  let new_view = view3();
  let $1 = getStyleSheet();
  if ($1 instanceof Ok) {
    let stylesheet$1 = $1[0];
    let content = render(stylesheet$1);
    return fold(
      outputs,
      new_view,
      (view4, stylesheet3) => {
        if (stylesheet3 instanceof Document2) {
          let css_stylesheet = stylesheet3.css_stylesheet;
          return tap(
            view4,
            (_2) => {
              let $2 = dismissCurrentStylesheet();
              return replaceSync(content, css_stylesheet);
            }
          );
        } else if (stylesheet3 instanceof Shadow) {
          let css_stylesheet = stylesheet3.css_stylesheet;
          return tap(
            view4,
            (_2) => {
              let $2 = dismissCurrentStylesheet();
              return replaceSync(content, css_stylesheet);
            }
          );
        } else {
          return fragment2(toList([style(toList([]), content), view4]));
        }
      }
    );
  } else {
    return new_view;
  }
}
function node() {
  return new Node();
}

// build/dev/javascript/tauri_lustre_app/lodash_ffi.mjs
var import_lodash = __toESM(require_lodash(), 1);
function upperCase(str) {
  return import_lodash.default.upperCase(str);
}

// node_modules/.pnpm/@tauri-apps+api@2.8.0/node_modules/@tauri-apps/api/external/tslib/tslib.es6.js
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value2, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value2) : f ? f.value = value2 : state.set(receiver, value2), value2;
}

// node_modules/.pnpm/@tauri-apps+api@2.8.0/node_modules/@tauri-apps/api/core.js
var _Channel_onmessage;
var _Channel_nextMessageIndex;
var _Channel_pendingMessages;
var _Channel_messageEndIndex;
var _Resource_rid;
var SERIALIZE_TO_IPC_FN = "__TAURI_TO_IPC_KEY__";
function transformCallback(callback, once = false) {
  return window.__TAURI_INTERNALS__.transformCallback(callback, once);
}
var Channel = class {
  constructor(onmessage) {
    _Channel_onmessage.set(this, void 0);
    _Channel_nextMessageIndex.set(this, 0);
    _Channel_pendingMessages.set(this, []);
    _Channel_messageEndIndex.set(this, void 0);
    __classPrivateFieldSet(this, _Channel_onmessage, onmessage || (() => {
    }), "f");
    this.id = transformCallback((rawMessage) => {
      const index4 = rawMessage.index;
      if ("end" in rawMessage) {
        if (index4 == __classPrivateFieldGet(this, _Channel_nextMessageIndex, "f")) {
          this.cleanupCallback();
        } else {
          __classPrivateFieldSet(this, _Channel_messageEndIndex, index4, "f");
        }
        return;
      }
      const message = rawMessage.message;
      if (index4 == __classPrivateFieldGet(this, _Channel_nextMessageIndex, "f")) {
        __classPrivateFieldGet(this, _Channel_onmessage, "f").call(this, message);
        __classPrivateFieldSet(this, _Channel_nextMessageIndex, __classPrivateFieldGet(this, _Channel_nextMessageIndex, "f") + 1, "f");
        while (__classPrivateFieldGet(this, _Channel_nextMessageIndex, "f") in __classPrivateFieldGet(this, _Channel_pendingMessages, "f")) {
          const message2 = __classPrivateFieldGet(this, _Channel_pendingMessages, "f")[__classPrivateFieldGet(this, _Channel_nextMessageIndex, "f")];
          __classPrivateFieldGet(this, _Channel_onmessage, "f").call(this, message2);
          delete __classPrivateFieldGet(this, _Channel_pendingMessages, "f")[__classPrivateFieldGet(this, _Channel_nextMessageIndex, "f")];
          __classPrivateFieldSet(this, _Channel_nextMessageIndex, __classPrivateFieldGet(this, _Channel_nextMessageIndex, "f") + 1, "f");
        }
        if (__classPrivateFieldGet(this, _Channel_nextMessageIndex, "f") === __classPrivateFieldGet(this, _Channel_messageEndIndex, "f")) {
          this.cleanupCallback();
        }
      } else {
        __classPrivateFieldGet(this, _Channel_pendingMessages, "f")[index4] = message;
      }
    });
  }
  cleanupCallback() {
    window.__TAURI_INTERNALS__.unregisterCallback(this.id);
  }
  set onmessage(handler) {
    __classPrivateFieldSet(this, _Channel_onmessage, handler, "f");
  }
  get onmessage() {
    return __classPrivateFieldGet(this, _Channel_onmessage, "f");
  }
  [(_Channel_onmessage = /* @__PURE__ */ new WeakMap(), _Channel_nextMessageIndex = /* @__PURE__ */ new WeakMap(), _Channel_pendingMessages = /* @__PURE__ */ new WeakMap(), _Channel_messageEndIndex = /* @__PURE__ */ new WeakMap(), SERIALIZE_TO_IPC_FN)]() {
    return `__CHANNEL__:${this.id}`;
  }
  toJSON() {
    return this[SERIALIZE_TO_IPC_FN]();
  }
};
async function invoke(cmd, args = {}, options) {
  return window.__TAURI_INTERNALS__.invoke(cmd, args, options);
}
_Resource_rid = /* @__PURE__ */ new WeakMap();

// node_modules/.pnpm/@tauri-apps+plugin-notification@2.3.1/node_modules/@tauri-apps/plugin-notification/dist-js/index.js
var ScheduleEvery;
(function(ScheduleEvery2) {
  ScheduleEvery2["Year"] = "year";
  ScheduleEvery2["Month"] = "month";
  ScheduleEvery2["TwoWeeks"] = "twoWeeks";
  ScheduleEvery2["Week"] = "week";
  ScheduleEvery2["Day"] = "day";
  ScheduleEvery2["Hour"] = "hour";
  ScheduleEvery2["Minute"] = "minute";
  ScheduleEvery2["Second"] = "second";
})(ScheduleEvery || (ScheduleEvery = {}));
var Importance;
(function(Importance2) {
  Importance2[Importance2["None"] = 0] = "None";
  Importance2[Importance2["Min"] = 1] = "Min";
  Importance2[Importance2["Low"] = 2] = "Low";
  Importance2[Importance2["Default"] = 3] = "Default";
  Importance2[Importance2["High"] = 4] = "High";
})(Importance || (Importance = {}));
var Visibility;
(function(Visibility2) {
  Visibility2[Visibility2["Secret"] = -1] = "Secret";
  Visibility2[Visibility2["Private"] = 0] = "Private";
  Visibility2[Visibility2["Public"] = 1] = "Public";
})(Visibility || (Visibility = {}));
async function isPermissionGranted() {
  if (window.Notification.permission !== "default") {
    return await Promise.resolve(window.Notification.permission === "granted");
  }
  return await invoke("plugin:notification|is_permission_granted");
}
async function requestPermission() {
  return await window.Notification.requestPermission();
}
function sendNotification(options) {
  if (typeof options === "string") {
    new window.Notification(options);
  } else {
    new window.Notification(options.title, options);
  }
}

// build/dev/javascript/tauri_lustre_app/notification_ffi.mjs
async function init_notifications() {
  try {
    console.log("\u{1F514} Initializing notifications...");
    let permissionGranted = await isPermissionGranted();
    console.log("\u{1F4CB} Initial permission status:", permissionGranted);
    if (!permissionGranted) {
      console.log("\u{1F510} Requesting notification permission...");
      const permission = await requestPermission();
      permissionGranted = permission === "granted";
      console.log("\u{1F4CB} Permission after request:", permissionGranted);
    }
    if (permissionGranted) {
      console.log("\u2705 Sending welcome notification...");
      await sendNotification({
        title: "\u{1F680} Gleam + Tauri App",
        body: "Notification system initialized successfully!"
      });
    } else {
      console.log("\u274C Notification permission denied");
    }
  } catch (error) {
    console.error("\u{1F4A5} Error initializing notifications:", error);
  }
}
async function send_notification(title, body) {
  try {
    let permissionGranted = await isPermissionGranted();
    if (!permissionGranted) {
      const permission = await requestPermission();
      permissionGranted = permission === "granted";
    }
    if (permissionGranted) {
      await sendNotification({ title, body });
      console.log(`\u{1F4E8} Notification sent: ${title} - ${body}`);
      return true;
    }
    console.log("\u{1F6AB} Notification permission denied");
    return false;
  } catch (error) {
    console.error("\u{1F4A5} Error sending notification:", error);
    return false;
  }
}
async function send_test_now() {
  console.log("\u{1F9EA} Sending immediate test notification...");
  const timestamp = (/* @__PURE__ */ new Date()).toLocaleTimeString();
  return await send_notification(
    "\u26A1 Instant Test",
    `Test notification sent at ${timestamp}`
  );
}
function send_timed_notification(delayMs, callback) {
  console.log(`\u23F0 Scheduling notification for ${delayMs}ms...`);
  setTimeout(async () => {
    console.log("\u23F0 Sending timed notification...");
    const timestamp = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    const success2 = await send_notification(
      "\u23F0 Timed Notification",
      `This notification was scheduled and sent at ${timestamp}`
    );
    callback(success2);
  }, delayMs);
}
function test_notification() {
  console.log("\u{1F9EA} Starting test notification sequence...");
  setTimeout(async () => {
    console.log("\u{1F9EA} Sending first test notification...");
    await send_notification("\u{1F9EA} Test #1", "First automated test notification");
  }, 2e3);
  setTimeout(async () => {
    console.log("\u{1F9EA} Sending second test notification...");
    await send_notification(
      "\u{1F9EA} Test #2",
      "Second automated test notification with more details!"
    );
  }, 5e3);
  setTimeout(async () => {
    console.log("\u{1F9EA} Sending final test notification...");
    await send_notification(
      "\u{1F389} Test Complete",
      "All test notifications have been sent successfully!"
    );
  }, 8e3);
}

// build/dev/javascript/tauri_lustre_app/tauri_ffi.mjs
var isTauri = typeof window !== "undefined" && window.__TAURI_INTERNALS__;
var gleamCallback = null;
function setCallback(cb) {
  gleamCallback = cb;
}
async function invoke2(cmd, args) {
  try {
    let result;
    if (typeof window !== "undefined" && window.__TAURI_INTERNALS__) {
      result = await window.__TAURI_INTERNALS__.invoke(cmd, args);
    } else if (typeof window !== "undefined" && window.__TAURI__) {
      result = await window.__TAURI__.core.invoke(cmd, args);
    } else {
      throw new Error("Tauri globals not found");
    }
    if (gleamCallback) gleamCallback(cmd, result);
    return result;
  } catch (error) {
    console.log("Tauri not available, using simulation:", error.message);
    const simulatedResult = cmd === "create_greet" ? { id: 1, name: "Chouaib", message: "Hello, Chouaib!" } : `Hello, ${args.name || "World"}!`;
    if (gleamCallback) gleamCallback(cmd, simulatedResult);
    return simulatedResult;
  }
}

// build/dev/javascript/tauri_lustre_app/types.mjs
var Model = class extends CustomType {
  constructor(greeting, name, loading, notification_status, notification_count) {
    super();
    this.greeting = greeting;
    this.name = name;
    this.loading = loading;
    this.notification_status = notification_status;
    this.notification_count = notification_count;
  }
};
var CallCommand = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var CommandResult = class extends CustomType {
  constructor($0, $1) {
    super();
    this[0] = $0;
    this[1] = $1;
  }
};
var CreateGreet = class extends CustomType {
};
var SendTestNotification = class extends CustomType {
};
var SendTimedNotification = class extends CustomType {
};
var NotificationSent = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var UpdateName = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Command = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Notification = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};
var Ui = class extends CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
};

// build/dev/javascript/tauri_lustre_app/commands.mjs
function handle_call_command(model, cmd) {
  let _block;
  if (cmd === "greet") {
    _block = object2(toList([["name", string3("Chouaib")]]));
  } else if (cmd === "create_greet") {
    _block = object2(toList([["name", string3("Chouaib1")]]));
  } else {
    _block = object2(toList([]));
  }
  let args = _block;
  let effect = from(
    (dispatch) => {
      setCallback(
        (cmd2, result) => {
          return dispatch(new Command(new CommandResult(cmd2, result)));
        }
      );
      return invoke2(cmd, args);
    }
  );
  return [
    new Model(
      model.greeting,
      model.name,
      true,
      model.notification_status,
      model.notification_count
    ),
    effect
  ];
}
function handle_create_greet(model) {
  let args = object2(toList([["name", string3(model.name)]]));
  let effect = from(
    (dispatch) => {
      setCallback(
        (cmd, result) => {
          return dispatch(new Command(new CommandResult(cmd, result)));
        }
      );
      return invoke2("create_greet", args);
    }
  );
  return [
    new Model(
      model.greeting,
      model.name,
      true,
      model.notification_status,
      model.notification_count
    ),
    effect
  ];
}
function decode_greet_result(result) {
  let $ = run(result, string2);
  if ($ instanceof Ok) {
    let message = $[0];
    return message;
  } else {
    return "Error: Expected string result";
  }
}
function decode_create_greet_result(result) {
  let $ = run(result, string2);
  if ($ instanceof Ok) {
    let error_message = $[0];
    return "Error: " + error_message;
  } else {
    let $1 = run(
      result,
      at(toList(["message"]), string2)
    );
    if ($1 instanceof Ok) {
      let message = $1[0];
      return message;
    } else {
      return "Error: Unexpected result format";
    }
  }
}
function handle_command_result(model, cmd, dynamic_result) {
  let _block;
  if (cmd === "greet") {
    _block = decode_greet_result(dynamic_result);
  } else if (cmd === "create_greet") {
    _block = decode_create_greet_result(dynamic_result);
  } else {
    _block = "Unknown command: " + cmd;
  }
  let result = _block;
  return [
    new Model(
      "Command " + cmd + " \u2192 " + result,
      model.name,
      false,
      model.notification_status,
      model.notification_count
    ),
    none()
  ];
}
function update_command(model, msg) {
  if (msg instanceof CallCommand) {
    let cmd = msg[0];
    return handle_call_command(model, cmd);
  } else if (msg instanceof CommandResult) {
    let cmd = msg[0];
    let result = msg[1];
    return handle_command_result(model, cmd, result);
  } else {
    return handle_create_greet(model);
  }
}

// build/dev/javascript/tauri_lustre_app/notifications.mjs
function handle_send_test_notification(model) {
  let effect = from(
    (dispatch) => {
      let success2 = send_test_now();
      return dispatch(new Notification(new NotificationSent(success2)));
    }
  );
  return [
    new Model(
      model.greeting,
      model.name,
      model.loading,
      "Sending notification...",
      model.notification_count
    ),
    effect
  ];
}
function handle_send_timed_notification(model) {
  let effect = from(
    (dispatch) => {
      return send_timed_notification(
        3e3,
        (success2) => {
          return dispatch(new Notification(new NotificationSent(success2)));
        }
      );
    }
  );
  return [
    new Model(
      model.greeting,
      model.name,
      model.loading,
      "Timed notification scheduled (3s)...",
      model.notification_count
    ),
    effect
  ];
}
function handle_notification_sent(model, success2) {
  let _block;
  if (success2) {
    _block = model.notification_count + 1;
  } else {
    _block = model.notification_count;
  }
  let new_count = _block;
  let _block$1;
  if (success2) {
    _block$1 = "Notification sent successfully!";
  } else {
    _block$1 = "Failed to send notification";
  }
  let status = _block$1;
  return [
    new Model(model.greeting, model.name, model.loading, status, new_count),
    none()
  ];
}
function update_notification(model, msg) {
  if (msg instanceof SendTestNotification) {
    return handle_send_test_notification(model);
  } else if (msg instanceof SendTimedNotification) {
    return handle_send_timed_notification(model);
  } else {
    let success2 = msg[0];
    return handle_notification_sent(model, success2);
  }
}

// build/dev/javascript/tauri_lustre_app/ui.mjs
function update_ui(model, msg) {
  let new_name = msg[0];
  return [
    new Model(
      model.greeting,
      new_name,
      model.loading,
      model.notification_status,
      model.notification_count
    ),
    none()
  ];
}

// build/dev/javascript/lustre/lustre/event.mjs
function is_immediate_event(name) {
  if (name === "input") {
    return true;
  } else if (name === "change") {
    return true;
  } else if (name === "focus") {
    return true;
  } else if (name === "focusin") {
    return true;
  } else if (name === "focusout") {
    return true;
  } else if (name === "blur") {
    return true;
  } else if (name === "select") {
    return true;
  } else {
    return false;
  }
}
function on(name, handler) {
  return event(
    name,
    map2(handler, (msg) => {
      return new Handler(false, false, msg);
    }),
    empty_list,
    never,
    never,
    is_immediate_event(name),
    0,
    0
  );
}
function on_click(msg) {
  return on("click", success(msg));
}
function on_input(msg) {
  return on(
    "input",
    subfield(
      toList(["target", "value"]),
      string2,
      (value2) => {
        return success(msg(value2));
      }
    )
  );
}

// build/dev/javascript/sketch_lustre/sketch/lustre/element.mjs
var FILEPATH3 = "src\\sketch\\lustre\\element.gleam";
var text3 = text2;
var error_msg = "Stylesheet is not initialized in your application. Please, initialize a stylesheet before rendering some nodes.";
function class_name3(class$5) {
  let $ = getStyleSheet();
  if ($ instanceof Ok) {
    let stylesheet2 = $[0];
    let $1 = class_name2(class$5, stylesheet2);
    let stylesheet$1;
    let class_name$1;
    stylesheet$1 = $1[0];
    class_name$1 = $1[1];
    let $2 = setStyleSheet(stylesheet$1);
    return class_name$1;
  } else {
    throw makeError(
      "panic",
      FILEPATH3,
      "sketch/lustre/element",
      77,
      "class_name",
      error_msg,
      {}
    );
  }
}
function element4(tag, class$5, attributes, children) {
  let class_name$1 = class_name3(class$5);
  let attributes$1 = prepend(class$(class_name$1), attributes);
  return element2(tag, attributes$1, children);
}

// build/dev/javascript/sketch_lustre/sketch/lustre/element/html.mjs
function text4(content) {
  return text3(content);
}
function button(class$5, attributes, children) {
  return element4("button", class$5, attributes, children);
}
function div(class$5, attributes, children) {
  return element4("div", class$5, attributes, children);
}
function h1(class$5, attributes, children) {
  return element4("h1", class$5, attributes, children);
}
function h2(class$5, attributes, children) {
  return element4("h2", class$5, attributes, children);
}
function input(class$5, attributes) {
  return element4("input", class$5, attributes, toList([]));
}
function p(class$5, attributes, children) {
  return element4("p", class$5, attributes, children);
}

// build/dev/javascript/tauri_lustre_app/styles.mjs
function container_style() {
  return class$4(toList([padding(px(20))]));
}
function greeting_style() {
  return class$4(
    toList([margin_top(px(20)), margin_bottom(px(20))])
  );
}
function input_style() {
  return class$4(
    toList([
      padding(px(10)),
      font_size(px(16)),
      margin_right(px(10)),
      border_radius(px(4)),
      border("1px solid #ccc"),
      width(cqw(100))
    ])
  );
}
function button_style() {
  return class$4(
    toList([
      padding_top(px(10)),
      padding_bottom(px(10)),
      padding_left(px(20)),
      padding_right(px(20)),
      font_size(px(16)),
      cursor("pointer")
    ])
  );
}
function button_loading_style() {
  return class$4(
    toList([
      padding_top(px(10)),
      padding_bottom(px(10)),
      padding_left(px(20)),
      padding_right(px(20)),
      font_size(px(16)),
      cursor("wait")
    ])
  );
}
function section_style() {
  return class$4(
    toList([
      display("grid"),
      grid_template_columns("1fr"),
      margin_bottom(px(30)),
      padding(px(20)),
      border_radius(px(8)),
      background_color("#fafafa")
    ])
  );
}
function status_style() {
  return class$4(
    toList([
      padding(px(10)),
      margin_bottom(px(15)),
      background_color("#e7f3ff"),
      border_radius(px(6))
    ])
  );
}
function notification_button_style() {
  return class$4(
    toList([
      padding(px(12)),
      margin(px(5)),
      background_color("#28a745"),
      color("white"),
      border_radius(px(6)),
      cursor("pointer"),
      font_size(rem(1)),
      hover(toList([background_color("#1e7e34")]))
    ])
  );
}
function notification_button_secondary_style() {
  return class$4(
    toList([
      padding(px(12)),
      margin(px(5)),
      background_color("#ffc107"),
      color("#212529"),
      border_radius(px(6)),
      cursor("pointer"),
      font_size(rem(1)),
      hover(toList([background_color("#e0a800")]))
    ])
  );
}
function button_group_style() {
  return class$4(
    toList([display("flex"), flex_wrap("wrap"), gap(px(10))])
  );
}

// build/dev/javascript/tauri_lustre_app/view.mjs
function view(model, stylesheet2) {
  return render2(
    stylesheet2,
    toList([node()]),
    () => {
      return div(
        container_style(),
        toList([]),
        toList([
          h1(
            class$4(toList([])),
            toList([]),
            toList([text4("Lustre + Tauri + Notifications")])
          ),
          div(
            section_style(),
            toList([]),
            toList([
              h2(
                class$4(toList([])),
                toList([]),
                toList([text4("Tauri Commands")])
              ),
              div(
                greeting_style(),
                toList([]),
                toList([text4(model.greeting)])
              ),
              button(
                (() => {
                  let $ = model.loading;
                  if ($) {
                    return button_loading_style();
                  } else {
                    return button_style();
                  }
                })(),
                toList([
                  on_click(new Command(new CallCommand("greet"))),
                  disabled(model.loading)
                ]),
                toList([
                  text4(
                    (() => {
                      let $ = model.loading;
                      if ($) {
                        return "Loading...";
                      } else {
                        return "Run Tauri Command!";
                      }
                    })()
                  )
                ])
              ),
              input(
                input_style(),
                toList([
                  readonly(false),
                  value(model.name),
                  on_input(
                    (name) => {
                      return new Ui(new UpdateName(name));
                    }
                  )
                ])
              ),
              button(
                (() => {
                  let $ = model.loading;
                  if ($) {
                    return button_loading_style();
                  } else {
                    return button_style();
                  }
                })(),
                toList([
                  on_click(new Command(new CreateGreet())),
                  disabled(model.loading)
                ]),
                toList([
                  text4(
                    (() => {
                      let $ = model.loading;
                      if ($) {
                        return "Loading...";
                      } else {
                        return "Create greeting!";
                      }
                    })()
                  )
                ])
              )
            ])
          ),
          div(
            section_style(),
            toList([]),
            toList([
              h2(
                class$4(toList([])),
                toList([]),
                toList([text4("Notification Tests")])
              ),
              div(
                status_style(),
                toList([]),
                toList([
                  p(
                    class$4(toList([])),
                    toList([]),
                    toList([text4("Status: " + model.notification_status)])
                  ),
                  p(
                    class$4(toList([])),
                    toList([]),
                    toList([
                      text4(
                        "Notifications sent: " + to_string(
                          model.notification_count
                        )
                      )
                    ])
                  )
                ])
              ),
              div(
                button_group_style(),
                toList([]),
                toList([
                  button(
                    notification_button_style(),
                    toList([
                      on_click(
                        new Notification(new SendTestNotification())
                      )
                    ]),
                    toList([text4("Send Instant Notification")])
                  ),
                  button(
                    notification_button_secondary_style(),
                    toList([
                      on_click(
                        new Notification(new SendTestNotification())
                      )
                    ]),
                    toList([text4("Send Timed Notification (3s)")])
                  )
                ])
              )
            ])
          )
        ])
      );
    }
  );
}

// build/dev/javascript/tauri_lustre_app/app.mjs
function init(_2) {
  init_notifications();
  return [
    new Model(
      "Click the button to greet!",
      "Chouaib",
      false,
      "Notifications initialized",
      0
    ),
    none()
  ];
}
function update2(model, msg) {
  if (msg instanceof Command) {
    let cmd_msg = msg[0];
    return update_command(model, cmd_msg);
  } else if (msg instanceof Notification) {
    let notif_msg = msg[0];
    return update_notification(model, notif_msg);
  } else {
    let ui_msg = msg[0];
    return update_ui(model, ui_msg);
  }
}
function view2(model, stylesheet2) {
  return view(model, stylesheet2);
}

// build/dev/javascript/tauri_lustre_app/tauri_lustre_app.mjs
var FILEPATH4 = "src\\tauri_lustre_app.gleam";
function main() {
  let $ = setup();
  let stylesheet2;
  if ($ instanceof Ok) {
    stylesheet2 = $[0];
  } else {
    throw makeError(
      "let_assert",
      FILEPATH4,
      "tauri_lustre_app",
      11,
      "main",
      "Pattern match failed, no pattern matched the value.",
      { value: $, start: 171, end: 220, pattern_start: 182, pattern_end: 196 }
    );
  }
  let result = upperCase("hello world");
  console_log(result);
  init_notifications();
  test_notification();
  global3(stylesheet2, global2("body", toList([margin(px(0))])));
  let lustre_app = application(
    init,
    update2,
    (_capture) => {
      return view2(_capture, stylesheet2);
    }
  );
  let $1 = start3(lustre_app, "#app", void 0);
  if (!($1 instanceof Ok)) {
    throw makeError(
      "let_assert",
      FILEPATH4,
      "tauri_lustre_app",
      18,
      "main",
      "Pattern match failed, no pattern matched the value.",
      { value: $1, start: 496, end: 552, pattern_start: 507, pattern_end: 512 }
    );
  }
  return void 0;
}

// build/.lustre/entry.mjs
main();
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
