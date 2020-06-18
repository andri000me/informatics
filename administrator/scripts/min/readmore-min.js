/*!
 * @preserve
 *
 * Readmore.js jQuery plugin
 * Author: @jed_foster
 * Project home: http://jedfoster.github.io/Readmore.js
 * Licensed under the MIT license
 *
 * Debounce function from http://davidwalsh.name/javascript-debounce-function
 */
!function($){"use strict";function e(e,t,a){var i;return function(){var n=this,o=arguments,r=function(){i=null,a||e.apply(n,o)},s=a&&!i;clearTimeout(i),i=setTimeout(r,t),s&&e.apply(n,o)}}function t(e){var t=++d;return String(null==e?"rmjs-":e)+t}function a(e){var t=e.clone().css({height:"auto",width:e.width(),maxHeight:"none",overflow:"hidden"}).insertAfter(e),a=t.outerHeight(),i=parseInt(t.css({maxHeight:""}).css("max-height").replace(/[^-\d\.]/g,""),10),n=e.data("defaultHeight");t.remove();var o=i||e.data("collapsedHeight")||n;e.data({expandedHeight:a,maxHeight:i,collapsedHeight:o}).css({maxHeight:"none"})}function i(e){if(!s[e.selector]){var t=" ";e.embedCSS&&""!==e.blockCSS&&(t+=e.selector+" + [data-readmore-toggle], "+e.selector+"[data-readmore]{"+e.blockCSS+"}"),t+=e.selector+"[data-readmore]{transition: height "+e.speed+"ms;overflow: hidden;}",function(e,t){var a=e.createElement("style");a.type="text/css",a.styleSheet?a.styleSheet.cssText=t:a.appendChild(e.createTextNode(t)),e.getElementsByTagName("head")[0].appendChild(a)}(document,t),s[e.selector]=!0}}function n(e,t){var a=this;this.element=e,this.options=$.extend({},r,t),i(this.options),this._defaults=r,this._name=o,this.init(),window.addEventListener?(window.addEventListener("load",h),window.addEventListener("resize",h)):(window.attachEvent("load",h),window.attachEvent("resize",h))}var o="readmore",r={speed:100,collapsedHeight:200,heightMargin:16,moreLink:'<a href="#">Read More</a>',lessLink:'<a href="#">Close</a>',embedCSS:!0,blockCSS:"display: block; width: 100%;",startOpen:!1,beforeToggle:function(){},afterToggle:function(){}},s={},d=0,h=e(function(){$("[data-readmore]").each(function(){var e=$(this),t="true"===e.attr("aria-expanded");a(e),e.css({height:e.data(t?"expandedHeight":"collapsedHeight")})})},100);n.prototype={init:function(){var e=this,i=$(this.element);i.data({defaultHeight:this.options.collapsedHeight,heightMargin:this.options.heightMargin}),a(i);var n=i.data("collapsedHeight"),o=i.data("heightMargin");if(i.outerHeight(!0)<=n+o)return!0;var r=i.attr("id")||t(),s=e.options.startOpen?e.options.lessLink:e.options.moreLink;i.attr({"data-readmore":"","aria-expanded":!1,id:r}),i.after($(s).on("click",function(t){e.toggle(this,i[0],t)}).attr({"data-readmore-toggle":"","aria-controls":r})),e.options.startOpen||i.css({height:n})},toggle:function(e,t,a){a&&a.preventDefault(),e||(e=$('[aria-controls="'+this.element.id+'"]')[0]),t||(t=this.element);var i=this,n=$(t),o="",r="",s=!1,d=n.data("collapsedHeight");n.height()<=d?(o=n.data("expandedHeight")+"px",r="lessLink",s=!0):(o=d,r="moreLink"),i.options.beforeToggle(e,t,!s),n.css({height:o}),n.on("transitionend",function(){i.options.afterToggle(e,t,s),$(this).attr({"aria-expanded":s}).off("transitionend")}),$(e).replaceWith($(i.options[r]).on("click",function(e){i.toggle(this,t,e)}).attr({"data-readmore-toggle":"","aria-controls":n.attr("id")}))},destroy:function(){$(this.element).each(function(){var e=$(this);e.attr({"data-readmore":null,"aria-expanded":null}).css({maxHeight:"",height:""}).next("[data-readmore-toggle]").remove(),e.removeData()})}},$.fn.readmore=function(e){var t=arguments,a=this.selector;return e=e||{},"object"==typeof e?this.each(function(){if($.data(this,"plugin_"+o)){var t=$.data(this,"plugin_"+o);t.destroy.apply(t)}e.selector=a,$.data(this,"plugin_"+o,new n(this,e))}):"string"==typeof e&&"_"!==e[0]&&"init"!==e?this.each(function(){var a=$.data(this,"plugin_"+o);a instanceof n&&"function"==typeof a[e]&&a[e].apply(a,Array.prototype.slice.call(t,1))}):void 0}}(jQuery);