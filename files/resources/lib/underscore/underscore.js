(function(){var a=this,b=a._,c=Array.prototype,d=Object.prototype,e=Function.prototype,f=c.push,g=c.slice,h=c.concat,i=d.toString,j=d.hasOwnProperty,k=Array.isArray,l=Object.keys,m=e.bind,n=function(a){return a instanceof n?a:this instanceof n?void(this._wrapped=a):new n(a)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=n),exports._=n):a._=n,n.VERSION="1.7.0";var o=function(a,b,c){if(void 0===b)return a;switch(null==c?3:c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)};case 4:return function(c,d,e,f){return a.call(b,c,d,e,f)}}return function(){return a.apply(b,arguments)}};n.iteratee=function(a,b,c){return null==a?n.identity:n.isFunction(a)?o(a,b,c):n.isObject(a)?n.matches(a):n.property(a)},n.each=n.forEach=function(a,b,c){if(null==a)return a;b=o(b,c);var d,e=a.length;if(e===+e)for(d=0;e>d;d++)b(a[d],d,a);else{var f=n.keys(a);for(d=0,e=f.length;e>d;d++)b(a[f[d]],f[d],a)}return a},n.map=n.collect=function(a,b,c){if(null==a)return[];b=n.iteratee(b,c);for(var d,e=a.length!==+a.length&&n.keys(a),f=(e||a).length,g=Array(f),h=0;f>h;h++)d=e?e[h]:h,g[h]=b(a[d],d,a);return g};var p="Reduce of empty array with no initial value";n.reduce=n.foldl=n.inject=function(a,b,c,d){null==a&&(a=[]),b=o(b,d,4);var e,f=a.length!==+a.length&&n.keys(a),g=(f||a).length,h=0;if(arguments.length<3){if(!g)throw new TypeError(p);c=a[f?f[h++]:h++]}for(;g>h;h++)e=f?f[h]:h,c=b(c,a[e],e,a);return c},n.reduceRight=n.foldr=function(a,b,c,d){null==a&&(a=[]),b=o(b,d,4);var e,f=a.length!==+a.length&&n.keys(a),g=(f||a).length;if(arguments.length<3){if(!g)throw new TypeError(p);c=a[f?f[--g]:--g]}for(;g--;)e=f?f[g]:g,c=b(c,a[e],e,a);return c},n.find=n.detect=function(a,b,c){var d;return b=n.iteratee(b,c),n.some(a,function(a,c,e){return b(a,c,e)?(d=a,!0):void 0}),d},n.filter=n.select=function(a,b,c){var d=[];return null==a?d:(b=n.iteratee(b,c),n.each(a,function(a,c,e){b(a,c,e)&&d.push(a)}),d)},n.reject=function(a,b,c){return n.filter(a,n.negate(n.iteratee(b)),c)},n.every=n.all=function(a,b,c){if(null==a)return!0;b=n.iteratee(b,c);var d,e,f=a.length!==+a.length&&n.keys(a),g=(f||a).length;for(d=0;g>d;d++)if(e=f?f[d]:d,!b(a[e],e,a))return!1;return!0},n.some=n.any=function(a,b,c){if(null==a)return!1;b=n.iteratee(b,c);var d,e,f=a.length!==+a.length&&n.keys(a),g=(f||a).length;for(d=0;g>d;d++)if(e=f?f[d]:d,b(a[e],e,a))return!0;return!1},n.contains=n.include=function(a,b){return null==a?!1:(a.length!==+a.length&&(a=n.values(a)),n.indexOf(a,b)>=0)},n.invoke=function(a,b){var c=g.call(arguments,2),d=n.isFunction(b);return n.map(a,function(a){return(d?b:a[b]).apply(a,c)})},n.pluck=function(a,b){return n.map(a,n.property(b))},n.where=function(a,b){return n.filter(a,n.matches(b))},n.findWhere=function(a,b){return n.find(a,n.matches(b))},n.max=function(a,b,c){var d,e,f=-(1/0),g=-(1/0);if(null==b&&null!=a){a=a.length===+a.length?a:n.values(a);for(var h=0,i=a.length;i>h;h++)d=a[h],d>f&&(f=d)}else b=n.iteratee(b,c),n.each(a,function(a,c,d){e=b(a,c,d),(e>g||e===-(1/0)&&f===-(1/0))&&(f=a,g=e)});return f},n.min=function(a,b,c){var d,e,f=1/0,g=1/0;if(null==b&&null!=a){a=a.length===+a.length?a:n.values(a);for(var h=0,i=a.length;i>h;h++)d=a[h],f>d&&(f=d)}else b=n.iteratee(b,c),n.each(a,function(a,c,d){e=b(a,c,d),(g>e||e===1/0&&f===1/0)&&(f=a,g=e)});return f},n.shuffle=function(a){for(var b,c=a&&a.length===+a.length?a:n.values(a),d=c.length,e=Array(d),f=0;d>f;f++)b=n.random(0,f),b!==f&&(e[f]=e[b]),e[b]=c[f];return e},n.sample=function(a,b,c){return null==b||c?(a.length!==+a.length&&(a=n.values(a)),a[n.random(a.length-1)]):n.shuffle(a).slice(0,Math.max(0,b))},n.sortBy=function(a,b,c){return b=n.iteratee(b,c),n.pluck(n.map(a,function(a,c,d){return{value:a,index:c,criteria:b(a,c,d)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;if(c!==d){if(c>d||void 0===c)return 1;if(d>c||void 0===d)return-1}return a.index-b.index}),"value")};var q=function(a){return function(b,c,d){var e={};return c=n.iteratee(c,d),n.each(b,function(d,f){var g=c(d,f,b);a(e,d,g)}),e}};n.groupBy=q(function(a,b,c){n.has(a,c)?a[c].push(b):a[c]=[b]}),n.indexBy=q(function(a,b,c){a[c]=b}),n.countBy=q(function(a,b,c){n.has(a,c)?a[c]++:a[c]=1}),n.sortedIndex=function(a,b,c,d){c=n.iteratee(c,d,1);for(var e=c(b),f=0,g=a.length;g>f;){var h=f+g>>>1;c(a[h])<e?f=h+1:g=h}return f},n.toArray=function(a){return a?n.isArray(a)?g.call(a):a.length===+a.length?n.map(a,n.identity):n.values(a):[]},n.size=function(a){return null==a?0:a.length===+a.length?a.length:n.keys(a).length},n.partition=function(a,b,c){b=n.iteratee(b,c);var d=[],e=[];return n.each(a,function(a,c,f){(b(a,c,f)?d:e).push(a)}),[d,e]},n.first=n.head=n.take=function(a,b,c){return null!=a?null==b||c?a[0]:0>b?[]:g.call(a,0,b):void 0},n.initial=function(a,b,c){return g.call(a,0,Math.max(0,a.length-(null==b||c?1:b)))},n.last=function(a,b,c){return null!=a?null==b||c?a[a.length-1]:g.call(a,Math.max(a.length-b,0)):void 0},n.rest=n.tail=n.drop=function(a,b,c){return g.call(a,null==b||c?1:b)},n.compact=function(a){return n.filter(a,n.identity)};var r=function(a,b,c,d){if(b&&n.every(a,n.isArray))return h.apply(d,a);for(var e=0,g=a.length;g>e;e++){var i=a[e];n.isArray(i)||n.isArguments(i)?b?f.apply(d,i):r(i,b,c,d):c||d.push(i)}return d};n.flatten=function(a,b){return r(a,b,!1,[])},n.without=function(a){return n.difference(a,g.call(arguments,1))},n.uniq=n.unique=function(a,b,c,d){if(null==a)return[];n.isBoolean(b)||(d=c,c=b,b=!1),null!=c&&(c=n.iteratee(c,d));for(var e=[],f=[],g=0,h=a.length;h>g;g++){var i=a[g];if(b)g&&f===i||e.push(i),f=i;else if(c){var j=c(i,g,a);n.indexOf(f,j)<0&&(f.push(j),e.push(i))}else n.indexOf(e,i)<0&&e.push(i)}return e},n.union=function(){return n.uniq(r(arguments,!0,!0,[]))},n.intersection=function(a){if(null==a)return[];for(var b=[],c=arguments.length,d=0,e=a.length;e>d;d++){var f=a[d];if(!n.contains(b,f)){for(var g=1;c>g&&n.contains(arguments[g],f);g++);g===c&&b.push(f)}}return b},n.difference=function(a){var b=r(g.call(arguments,1),!0,!0,[]);return n.filter(a,function(a){return!n.contains(b,a)})},n.zip=function(a){if(null==a)return[];for(var b=n.max(arguments,"length").length,c=Array(b),d=0;b>d;d++)c[d]=n.pluck(arguments,d);return c},n.object=function(a,b){if(null==a)return{};for(var c={},d=0,e=a.length;e>d;d++)b?c[a[d]]=b[d]:c[a[d][0]]=a[d][1];return c},n.indexOf=function(a,b,c){if(null==a)return-1;var d=0,e=a.length;if(c){if("number"!=typeof c)return d=n.sortedIndex(a,b),a[d]===b?d:-1;d=0>c?Math.max(0,e+c):c}for(;e>d;d++)if(a[d]===b)return d;return-1},n.lastIndexOf=function(a,b,c){if(null==a)return-1;var d=a.length;for("number"==typeof c&&(d=0>c?d+c+1:Math.min(d,c+1));--d>=0;)if(a[d]===b)return d;return-1},n.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0),c=c||1;for(var d=Math.max(Math.ceil((b-a)/c),0),e=Array(d),f=0;d>f;f++,a+=c)e[f]=a;return e};var s=function(){};n.bind=function(a,b){var c,d;if(m&&a.bind===m)return m.apply(a,g.call(arguments,1));if(!n.isFunction(a))throw new TypeError("Bind must be called on a function");return c=g.call(arguments,2),d=function(){if(!(this instanceof d))return a.apply(b,c.concat(g.call(arguments)));s.prototype=a.prototype;var e=new s;s.prototype=null;var f=a.apply(e,c.concat(g.call(arguments)));return n.isObject(f)?f:e}},n.partial=function(a){var b=g.call(arguments,1);return function(){for(var c=0,d=b.slice(),e=0,f=d.length;f>e;e++)d[e]===n&&(d[e]=arguments[c++]);for(;c<arguments.length;)d.push(arguments[c++]);return a.apply(this,d)}},n.bindAll=function(a){var b,c,d=arguments.length;if(1>=d)throw new Error("bindAll must be passed function names");for(b=1;d>b;b++)c=arguments[b],a[c]=n.bind(a[c],a);return a},n.memoize=function(a,b){var c=function(d){var e=c.cache,f=b?b.apply(this,arguments):d;return n.has(e,f)||(e[f]=a.apply(this,arguments)),e[f]};return c.cache={},c},n.delay=function(a,b){var c=g.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)},n.defer=function(a){return n.delay.apply(n,[a,1].concat(g.call(arguments,1)))},n.throttle=function(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function(){h=c.leading===!1?0:n.now(),g=null,f=a.apply(d,e),g||(d=e=null)};return function(){var j=n.now();h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,0>=k||k>b?(clearTimeout(g),g=null,h=j,f=a.apply(d,e),g||(d=e=null)):g||c.trailing===!1||(g=setTimeout(i,k)),f}},n.debounce=function(a,b,c){var d,e,f,g,h,i=function(){var j=n.now()-g;b>j&&j>0?d=setTimeout(i,b-j):(d=null,c||(h=a.apply(f,e),d||(f=e=null)))};return function(){f=this,e=arguments,g=n.now();var j=c&&!d;return d||(d=setTimeout(i,b)),j&&(h=a.apply(f,e),f=e=null),h}},n.wrap=function(a,b){return n.partial(b,a)},n.negate=function(a){return function(){return!a.apply(this,arguments)}},n.compose=function(){var a=arguments,b=a.length-1;return function(){for(var c=b,d=a[b].apply(this,arguments);c--;)d=a[c].call(this,d);return d}},n.after=function(a,b){return function(){return--a<1?b.apply(this,arguments):void 0}},n.before=function(a,b){var c;return function(){return--a>0?c=b.apply(this,arguments):b=null,c}},n.once=n.partial(n.before,2),n.keys=function(a){if(!n.isObject(a))return[];if(l)return l(a);var b=[];for(var c in a)n.has(a,c)&&b.push(c);return b},n.values=function(a){for(var b=n.keys(a),c=b.length,d=Array(c),e=0;c>e;e++)d[e]=a[b[e]];return d},n.pairs=function(a){for(var b=n.keys(a),c=b.length,d=Array(c),e=0;c>e;e++)d[e]=[b[e],a[b[e]]];return d},n.invert=function(a){for(var b={},c=n.keys(a),d=0,e=c.length;e>d;d++)b[a[c[d]]]=c[d];return b},n.functions=n.methods=function(a){var b=[];for(var c in a)n.isFunction(a[c])&&b.push(c);return b.sort()},n.extend=function(a){if(!n.isObject(a))return a;for(var b,c,d=1,e=arguments.length;e>d;d++){b=arguments[d];for(c in b)j.call(b,c)&&(a[c]=b[c])}return a},n.pick=function(a,b,c){var d,e={};if(null==a)return e;if(n.isFunction(b)){b=o(b,c);for(d in a){var f=a[d];b(f,d,a)&&(e[d]=f)}}else{var i=h.apply([],g.call(arguments,1));a=new Object(a);for(var j=0,k=i.length;k>j;j++)d=i[j],d in a&&(e[d]=a[d])}return e},n.omit=function(a,b,c){if(n.isFunction(b))b=n.negate(b);else{var d=n.map(h.apply([],g.call(arguments,1)),String);b=function(a,b){return!n.contains(d,b)}}return n.pick(a,b,c)},n.defaults=function(a){if(!n.isObject(a))return a;for(var b=1,c=arguments.length;c>b;b++){var d=arguments[b];for(var e in d)void 0===a[e]&&(a[e]=d[e])}return a},n.clone=function(a){return n.isObject(a)?n.isArray(a)?a.slice():n.extend({},a):a},n.tap=function(a,b){return b(a),a};var t=function(a,b,c,d){if(a===b)return 0!==a||1/a===1/b;if(null==a||null==b)return a===b;a instanceof n&&(a=a._wrapped),b instanceof n&&(b=b._wrapped);var e=i.call(a);if(e!==i.call(b))return!1;switch(e){case"[object RegExp]":case"[object String]":return""+a==""+b;case"[object Number]":return+a!==+a?+b!==+b:0===+a?1/+a===1/b:+a===+b;case"[object Date]":case"[object Boolean]":return+a===+b}if("object"!=typeof a||"object"!=typeof b)return!1;for(var f=c.length;f--;)if(c[f]===a)return d[f]===b;var g=a.constructor,h=b.constructor;if(g!==h&&"constructor"in a&&"constructor"in b&&!(n.isFunction(g)&&g instanceof g&&n.isFunction(h)&&h instanceof h))return!1;c.push(a),d.push(b);var j,k;if("[object Array]"===e){if(j=a.length,k=j===b.length)for(;j--&&(k=t(a[j],b[j],c,d)););}else{var l,m=n.keys(a);if(j=m.length,k=n.keys(b).length===j)for(;j--&&(l=m[j],k=n.has(b,l)&&t(a[l],b[l],c,d)););}return c.pop(),d.pop(),k};n.isEqual=function(a,b){return t(a,b,[],[])},n.isEmpty=function(a){if(null==a)return!0;if(n.isArray(a)||n.isString(a)||n.isArguments(a))return 0===a.length;for(var b in a)if(n.has(a,b))return!1;return!0},n.isElement=function(a){return!(!a||1!==a.nodeType)},n.isArray=k||function(a){return"[object Array]"===i.call(a)},n.isObject=function(a){var b=typeof a;return"function"===b||"object"===b&&!!a},n.each(["Arguments","Function","String","Number","Date","RegExp"],function(a){n["is"+a]=function(b){return i.call(b)==="[object "+a+"]"}}),n.isArguments(arguments)||(n.isArguments=function(a){return n.has(a,"callee")}),"function"!=typeof/./&&(n.isFunction=function(a){return"function"==typeof a||!1}),n.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))},n.isNaN=function(a){return n.isNumber(a)&&a!==+a},n.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"===i.call(a)},n.isNull=function(a){return null===a},n.isUndefined=function(a){return void 0===a},n.has=function(a,b){return null!=a&&j.call(a,b)},n.noConflict=function(){return a._=b,this},n.identity=function(a){return a},n.constant=function(a){return function(){return a}},n.noop=function(){},n.property=function(a){return function(b){return b[a]}},n.matches=function(a){var b=n.pairs(a),c=b.length;return function(a){if(null==a)return!c;a=new Object(a);for(var d=0;c>d;d++){var e=b[d],f=e[0];if(e[1]!==a[f]||!(f in a))return!1}return!0}},n.times=function(a,b,c){var d=Array(Math.max(0,a));b=o(b,c,1);for(var e=0;a>e;e++)d[e]=b(e);return d},n.random=function(a,b){return null==b&&(b=a,a=0),a+Math.floor(Math.random()*(b-a+1))},n.now=Date.now||function(){return(new Date).getTime()};var u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},v=n.invert(u),w=function(a){var b=function(b){return a[b]},c="(?:"+n.keys(a).join("|")+")",d=RegExp(c),e=RegExp(c,"g");return function(a){return a=null==a?"":""+a,d.test(a)?a.replace(e,b):a}};n.escape=w(u),n.unescape=w(v),n.result=function(a,b){if(null!=a){var c=a[b];return n.isFunction(c)?a[b]():c}};var x=0;n.uniqueId=function(a){var b=++x+"";return a?a+b:b},n.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var y=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},A=/\\|'|\r|\n|\u2028|\u2029/g,B=function(a){return"\\"+z[a]};n.template=function(a,b,c){!b&&c&&(b=c),b=n.defaults({},b,n.templateSettings);var d=RegExp([(b.escape||y).source,(b.interpolate||y).source,(b.evaluate||y).source].join("|")+"|$","g"),e=0,f="__p+='";a.replace(d,function(b,c,d,g,h){return f+=a.slice(e,h).replace(A,B),e=h+b.length,c?f+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'":d?f+="'+\n((__t=("+d+"))==null?'':__t)+\n'":g&&(f+="';\n"+g+"\n__p+='"),b}),f+="';\n",b.variable||(f="with(obj||{}){\n"+f+"}\n"),f="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+f+"return __p;\n";try{var g=new Function(b.variable||"obj","_",f)}catch(h){throw h.source=f,h}var i=function(a){return g.call(this,a,n)},j=b.variable||"obj";return i.source="function("+j+"){\n"+f+"}",i},n.chain=function(a){var b=n(a);return b._chain=!0,b};var C=function(a){return this._chain?n(a).chain():a};n.mixin=function(a){n.each(n.functions(a),function(b){var c=n[b]=a[b];n.prototype[b]=function(){var a=[this._wrapped];return f.apply(a,arguments),C.call(this,c.apply(n,a))}})},n.mixin(n),n.each(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=c[a];n.prototype[a]=function(){var c=this._wrapped;return b.apply(c,arguments),"shift"!==a&&"splice"!==a||0!==c.length||delete c[0],C.call(this,c)}}),n.each(["concat","join","slice"],function(a){var b=c[a];n.prototype[a]=function(){return C.call(this,b.apply(this._wrapped,arguments))}}),n.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return n})}).call(this);