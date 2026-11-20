"use strict";var l=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw r=0,t}}};var o=l(function(y,u){"use strict";var i=require("@stdlib/assert-is-collection"),a=require("@stdlib/array-base-mskreject"),s=require("@stdlib/array-base-count-falsy"),v=require("@stdlib/array-zeros"),c=require("@stdlib/array-dtype"),n=require("@stdlib/string-format");function g(e,r){var t;if(!i(e))throw new TypeError(n("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(!i(r))throw new TypeError(n("invalid argument. Second argument must be an array-like object. Value: `%s`.",r));if(e.length!==r.length)throw new Error("invalid arguments. Must provide equal length array-like objects.");return t=c(e),t==="generic"||t===null?a(e,r):a.assign(e,r,v(s(r),t),1,0)}u.exports=g});var q=o();module.exports=q;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
