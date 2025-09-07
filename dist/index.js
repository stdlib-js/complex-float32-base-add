"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=u(function(B,o){
var d=require('@stdlib/number-float64-base-to-float32/dist'),R=require('@stdlib/complex-float32-ctor/dist'),c=require('@stdlib/complex-float32-real/dist'),l=require('@stdlib/complex-float32-imag/dist');function b(e,r){var i=d(c(e)+c(r)),a=d(l(e)+l(r));return new R(i,a)}o.exports=b
});var m=u(function(D,g){
var x=require('@stdlib/number-float64-base-to-float32/dist');function f(e,r,i,a,t,n,s){return t[s]=x(e+i),t[s+n]=x(r+a),t}g.exports=f
});var w=u(function(E,T){
var F=require('@stdlib/number-float64-base-to-float32/dist');function h(e,r,i,a,t,n,s,C,q){return s[q]=F(e[i]+a[n]),s[q+C]=F(e[i+r]+a[n+t]),s}T.exports=h
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=p(),j=m(),k=w();y(v,"assign",j);y(v,"strided",k);module.exports=v;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
