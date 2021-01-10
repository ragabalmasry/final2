(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var f="function",h="string",l,m=this||self;var n=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(typeof a===h)return typeof b!==h||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},p=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=typeof a===h?a.split(""):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)},q=function(a){return Array.prototype.concat.apply([],
arguments)},t=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var u;a:{var v=m.navigator;if(v){var w=v.userAgent;if(w){u=w;break a}}u=""}var x=function(a){return-1!=u.indexOf(a)};var y=function(){};y.prototype.h=function(){return this};(new y).h("");var z=function(){};z.prototype.h=function(){return this};(new z).h("");var A=function(){};A.prototype.h=function(){return this};(new A).h("");var B=function(){};B.prototype.h=function(){return this};(new B).h("<!DOCTYPE html>",0);(new B).h("",0);(new B).h("<br>",0);var C=x("Trident")||x("MSIE");var D=function(a,b){return typeof b===h?a.getElementById(b):b},E=function(a,b,c,d){a=d||a;var e=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?"."+c:""));if(c&&a.getElementsByClassName){b=a.getElementsByClassName(c);if(e){a={};for(var g=d=0,k;k=b[g];g++)e==k.nodeName&&(a[d++]=k);a.length=d;return a}return b}b=a.getElementsByTagName(e||"*");if(c){a={};for(g=d=0;k=b[g];g++){e=k.className;var r;if(r=typeof e.split==f)r=0<=n(e.split(/\s+/),
c);r&&(a[d++]=k)}a.length=d;return a}return b};var F=function(a){this.F=a};F.prototype.serialize=function(a){var b=[];this.I(a,b);return b.join("")};
F.prototype.I=function(a,b){if(null==a)b.push("null");else{if("object"==typeof a){if(Array.isArray(a)){this.serializeArray(a,b);return}if(a instanceof String||a instanceof Number||a instanceof Boolean)a=a.valueOf();else{this.aa(a,b);return}}switch(typeof a){case h:this.M(a,b);break;case "number":this.Z(a,b);break;case "boolean":b.push(String(a));break;case f:b.push("null");break;default:throw Error("Unknown type: "+typeof a);}}};
var G={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},H=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;F.prototype.M=function(a,b){b.push('"',a.replace(H,function(c){var d=G[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),G[c]=d);return d}),'"')};F.prototype.Z=function(a,b){b.push(isFinite(a)&&!isNaN(a)?String(a):"null")};
F.prototype.serializeArray=function(a,b){var c=a.length;b.push("[");for(var d="",e=0;e<c;e++)b.push(d),d=a[e],this.I(this.F?this.F.call(a,String(e),d):d,b),d=",";b.push("]")};F.prototype.aa=function(a,b){b.push("{");var c="",d;for(d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=a[d];typeof e!=f&&(b.push(c),this.M(d,b),b.push(":"),this.I(this.F?this.F.call(a,d,e):e,b),c=",")}b.push("}")};var I="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""},J=function(){};J.prototype.next=function(){throw I;};J.prototype.U=function(){return this};var K=function(a,b){this.g={};this.c=[];this.G=this.b=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};l=K.prototype;l.w=function(){this.B();for(var a=[],b=0;b<this.c.length;b++)a.push(this.g[this.c[b]]);return a};l.v=function(){this.B();return this.c.concat()};l.u=function(a){return L(this.g,a)};
l.remove=function(a){return L(this.g,a)?(delete this.g[a],this.b--,this.G++,this.c.length>2*this.b&&this.B(),!0):!1};l.B=function(){if(this.b!=this.c.length){for(var a=0,b=0;a<this.c.length;){var c=this.c[a];L(this.g,c)&&(this.c[b++]=c);a++}this.c.length=b}if(this.b!=this.c.length){var d={};for(b=a=0;a<this.c.length;)c=this.c[a],L(d,c)||(this.c[b++]=c,d[c]=1),a++;this.c.length=b}};l.get=function(a,b){return L(this.g,a)?this.g[a]:b};
l.set=function(a,b){L(this.g,a)||(this.b++,this.c.push(a),this.G++);this.g[a]=b};l.addAll=function(a){if(a instanceof K)for(var b=a.v(),c=0;c<b.length;c++)this.set(b[c],a.get(b[c]));else for(b in a)this.set(b,a[b])};l.forEach=function(a,b){for(var c=this.v(),d=0;d<c.length;d++){var e=c[d],g=this.get(e);a.call(b,g,e,this)}};l.clone=function(){return new K(this)};
l.U=function(a){this.B();var b=0,c=this.G,d=this,e=new J;e.next=function(){if(c!=d.G)throw Error("The map has changed since the iterator was created");if(b>=d.c.length)throw I;var g=d.c[b++];return a?g:d.g[g]};return e};var L=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var M=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,N=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var g=a[c].substring(0,d);e=a[c].substring(d+1)}else g=a[c];b(g,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};var O=function(a,b){this.C=this.K=this.s="";this.D=null;this.H=this.L="";this.f=this.Y=!1;var c;a instanceof O?(this.f=void 0!==b?b:a.f,this.S(a.s),this.T(a.K),this.N(a.C),this.P(a.D),this.setPath(a.getPath()),this.R(a.i.clone()),this.O(a.H)):a&&(c=String(a).match(M))?(this.f=!!b,this.S(c[1]||"",!0),this.T(c[2]||"",!0),this.N(c[3]||"",!0),this.P(c[4]),this.setPath(c[5]||"",!0),this.R(c[6]||"",!0),this.O(c[7]||"",!0)):(this.f=!!b,this.i=new P(null,this.f))};l=O.prototype;
l.toString=function(){var a=[],b=this.s;b&&a.push(Q(b,R,!0),":");var c=this.C;if(c||"file"==b)a.push("//"),(b=this.K)&&a.push(Q(b,R,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.D,null!=c&&a.push(":",String(c));if(c=this.getPath())this.X()&&"/"!=c.charAt(0)&&a.push("/"),a.push(Q(c,"/"==c.charAt(0)?aa:ba,!0));(c=this.V())&&a.push("?",c);(c=this.H)&&a.push("#",Q(c,ca));return a.join("")};l.clone=function(){return new O(this)};
l.S=function(a,b){this.l();if(this.s=b?S(a,!0):a)this.s=this.s.replace(/:$/,"");return this};l.T=function(a,b){this.l();this.K=b?S(a):a;return this};l.N=function(a,b){this.l();this.C=b?S(a,!0):a;return this};l.X=function(){return!!this.C};l.P=function(a){this.l();if(a){a=Number(a);if(isNaN(a)||0>a)throw Error("Bad port number "+a);this.D=a}else this.D=null;return this};l.getPath=function(){return this.L};l.setPath=function(a,b){this.l();this.L=b?S(a,!0):a;return this};
l.R=function(a,b){this.l();a instanceof P?(this.i=a,this.i.J(this.f)):(b||(a=Q(a,da)),this.i=new P(a,this.f));return this};l.V=function(){return this.i.toString()};l.ba=function(a,b){this.l();this.i.set(a,b);return this};l.W=function(a){return this.i.get(a)};l.O=function(a,b){this.l();this.H=b?S(a):a;return this};l.l=function(){if(this.Y)throw Error("Tried to modify a read-only Uri");};l.J=function(a){this.f=a;this.i&&this.i.J(a);return this};
var S=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},Q=function(a,b,c){return typeof a===h?(a=encodeURI(a).replace(b,ea),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},ea=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},R=/[#\/\?@]/g,ba=/[#\?:]/g,aa=/[#\?]/g,da=/[#\?@]/g,ca=/#/g,P=function(a,b){this.b=this.a=null;this.j=a||null;this.f=!!b};l=P.prototype;
l.m=function(){if(!this.a&&(this.a=new K,this.b=0,this.j)){var a=this;N(this.j,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)})}};l.add=function(a,b){this.m();this.A();a=this.o(a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};l.remove=function(a){this.m();a=this.o(a);return this.a.u(a)?(this.A(),this.b-=this.a.get(a).length,this.a.remove(a)):!1};l.u=function(a){this.m();a=this.o(a);return this.a.u(a)};
l.forEach=function(a,b){this.m();this.a.forEach(function(c,d){p(c,function(e){a.call(b,e,d,this)},this)},this)};l.v=function(){this.m();for(var a=this.a.w(),b=this.a.v(),c=[],d=0;d<b.length;d++)for(var e=a[d],g=0;g<e.length;g++)c.push(b[d]);return c};l.w=function(a){this.m();var b=[];if(typeof a===h)this.u(a)&&(b=q(b,this.a.get(this.o(a))));else{a=this.a.w();for(var c=0;c<a.length;c++)b=q(b,a[c])}return b};
l.set=function(a,b){this.m();this.A();a=this.o(a);this.u(a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};l.get=function(a,b){if(!a)return b;a=this.w(a);return 0<a.length?String(a[0]):b};l.setValues=function(a,b){this.remove(a);0<b.length&&(this.A(),this.a.set(this.o(a),t(b)),this.b+=b.length)};
l.toString=function(){if(this.j)return this.j;if(!this.a)return"";for(var a=[],b=this.a.v(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.w(d);for(var g=0;g<d.length;g++){var k=e;""!==d[g]&&(k+="="+encodeURIComponent(String(d[g])));a.push(k)}}return this.j=a.join("&")};l.A=function(){this.j=null};l.clone=function(){var a=new P;a.j=this.j;this.a&&(a.a=this.a.clone(),a.b=this.b);return a};l.o=function(a){a=String(a);this.f&&(a=a.toLowerCase());return a};
l.J=function(a){a&&!this.f&&(this.m(),this.A(),this.a.forEach(function(b,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.setValues(d,b))},this));this.f=a};var U=function(a,b,c){a:{var d=9==b.nodeType?b:b.ownerDocument||b.document;if(d.defaultView&&d.defaultView.getComputedStyle&&(d=d.defaultView.getComputedStyle(b,null))){d=d[a]||d.getPropertyValue(a)||"";break a}d=""}d=d||(b.currentStyle?b.currentStyle[a]:null)||b.style&&b.style[a];return null==d||"inherit"==d||"transparent"==d||"rgba(0, 0, 0, 0)"==d?b!=(9==b.nodeType?b:b.ownerDocument||b.document).body&&b.parentNode?T(a,b.parentNode):c:d},T=function(a,b){return U(a,b,"rgb(0, 0, 0)")},ha=function(){for(var a=
E(document,"iframe","blogger-iframe-colorize",void 0),b=0;b<a.length;b++){var c=a[b],d=D(document,c.id+"-src"),e=d.href;if(!(new O(e)).W("skin")){var g=T("color",c),k=T("backgroundColor",c),r=U("fontFamily",c,"serif");d.href="https://www.blogger.com/unvisited-link-"+(new Date).valueOf();var fa=T("color",d);d=d.href=e;e=encodeURIComponent;g=(new F(void 0)).serialize({color:g,backgroundColor:k,unvisitedLinkColor:fa,fontFamily:r});e=d+("#"+e(g))}c.src=e}};var ia=!C&&!(x("Safari")&&!((x("Chrome")||x("CriOS"))&&!x("Edge")||x("Coast")||x("Opera")||x("Edge")||x("Edg/")||x("OPR")||x("Firefox")||x("FxiOS")||x("Silk")||x("Android")));var V=-1;var W=function(){V=Math.floor(1E7*Math.random());for(var a=E(document,"iframe","blogger-comment-from-post",void 0),b=0;b<a.length;b++){var c=D(document,a[b].id+"-src"),d=new O(c.href);d.ba("blogspotRpcToken",V);c.href=d.toString()}ha();a=function(e){if(typeof e.data===h&&0==e.data.indexOf("set-comment-editor-height")){var g=document.getElementById("comment-editor");g.height=e.data.substring(26);if(ia&&g.dataset)g.dataset.resized=!0;else{if(/-[a-z]/.test("resized"))throw Error("");g.setAttribute("data-"+
"resized".replace(/([A-Z])/g,"-$1").toLowerCase(),!0)}}};window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a)},X=["BLOG_CMT_createIframe"],Y=m;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===W?Y=Y[Z]&&Y[Z]!==Object.prototype[Z]?Y[Z]:Y[Z]={}:Y[Z]=W;}).call(this);
