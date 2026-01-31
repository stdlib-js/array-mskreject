"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=l(function(y,u){
var a=require('@stdlib/assert-is-collection/dist'),n=require('@stdlib/array-base-mskreject/dist'),s=require('@stdlib/array-base-count-falsy/dist'),v=require('@stdlib/array-zeros/dist'),c=require('@stdlib/array-dtype/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function g(e,r){var t;if(!a(e))throw new TypeError(i('1sF2O',e));if(!a(r))throw new TypeError(i('1sF2y',r));if(e.length!==r.length)throw new Error(i('1sFFd'));return t=c(e),t==="generic"||t===null?n(e,r):n.assign(e,r,v(s(r),t),1,0)}u.exports=g
});var q=o();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
