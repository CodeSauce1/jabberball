/*!
 * Bootstrap-select v1.9.4 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2016 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery"],function(c){return(b(c))})}else{if(typeof exports==="object"){module.exports=b(require("jquery"))}else{b(jQuery)}}}(this,function(a){(function(e){if(!String.prototype.includes){(function(){var k={}.toString;var h=(function(){try{var o={};var n=Object.defineProperty;var l=n(o,o,o)&&n}catch(m){}return l}());var j="".indexOf;var i=function(q){if(this==null){throw new TypeError()}var o=String(this);if(q&&k.call(q)=="[object RegExp]"){throw new TypeError()}var m=o.length;var n=String(q);var p=n.length;var l=arguments.length>1?arguments[1]:undefined;var s=l?Number(l):0;if(s!=s){s=0}var r=Math.min(Math.max(s,0),m);if(p+r>m){return false}return j.call(o,n,s)!=-1};if(h){h(String.prototype,"includes",{value:i,configurable:true,writable:true})}else{String.prototype.includes=i}}())}if(!String.prototype.startsWith){(function(){var h=(function(){try{var n={};var m=Object.defineProperty;var k=m(n,n,n)&&m}catch(l){}return k}());var j={}.toString;var i=function(r){if(this==null){throw new TypeError()}var o=String(this);if(r&&j.call(r)=="[object RegExp]"){throw new TypeError()}var k=o.length;var s=String(r);var m=s.length;var n=arguments.length>1?arguments[1]:undefined;var q=n?Number(n):0;if(q!=q){q=0}var l=Math.min(Math.max(q,0),k);if(m+l>k){return false}var p=-1;while(++p<m){if(o.charCodeAt(l+p)!=s.charCodeAt(p)){return false}}return true};if(h){h(String.prototype,"startsWith",{value:i,configurable:true,writable:true})}else{String.prototype.startsWith=i}}())}if(!Object.keys){Object.keys=function(j,h,i){i=[];for(h in j){i.hasOwnProperty.call(j,h)&&i.push(h)}return i}}e.fn.triggerNative=function(h){var i=this[0],j;if(i.dispatchEvent){if(typeof Event==="function"){j=new Event(h,{bubbles:true})}else{j=document.createEvent("Event");j.initEvent(h,true,false)}i.dispatchEvent(j)}else{if(i.fireEvent){j=document.createEventObject();j.eventType=h;i.fireEvent("on"+h,j)}this.trigger(h)}};e.expr[":"].icontains=function(k,h,j){var l=e(k);var i=(l.data("tokens")||l.text()).toUpperCase();return i.includes(j[3].toUpperCase())};e.expr[":"].ibegins=function(k,h,j){var l=e(k);var i=(l.data("tokens")||l.text()).toUpperCase();return i.startsWith(j[3].toUpperCase())};e.expr[":"].aicontains=function(k,h,j){var l=e(k);var i=(l.data("tokens")||l.data("normalizedText")||l.text()).toUpperCase();return i.includes(j[3].toUpperCase())};e.expr[":"].aibegins=function(k,h,j){var l=e(k);var i=(l.data("tokens")||l.data("normalizedText")||l.text()).toUpperCase();return i.startsWith(j[3].toUpperCase())};function g(i){var h=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];e.each(h,function(){i=i.replace(this.re,this.ch)});return i}function f(i){var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};var m="(?:"+Object.keys(k).join("|")+")",l=new RegExp(m),j=new RegExp(m,"g"),h=i==null?"":""+i;return l.test(h)?h.replace(j,function(n){return k[n]}):h}var c=function(i,h,j){if(j){j.stopPropagation();j.preventDefault()}this.$element=e(i);this.$newElement=null;this.$button=null;this.$menu=null;this.$lis=null;this.options=h;if(this.options.title===null){this.options.title=this.$element.attr("title")}this.val=c.prototype.val;this.render=c.prototype.render;this.refresh=c.prototype.refresh;this.setStyle=c.prototype.setStyle;this.selectAll=c.prototype.selectAll;this.deselectAll=c.prototype.deselectAll;this.destroy=c.prototype.destroy;this.remove=c.prototype.remove;this.show=c.prototype.show;this.hide=c.prototype.hide;this.init()};c.VERSION="1.9.4";c.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(i,h){return(i==1)?"{0} item selected":"{0} items selected"},maxOptionsText:function(h,i){return[(h==1)?"Limit reached ({n} item max)":"Limit reached ({n} items max)",(i==1)?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:false,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:false,container:false,hideDisabled:false,showSubtext:false,showIcon:true,showContent:true,dropupAuto:true,header:false,liveSearch:false,liveSearchPlaceholder:null,liveSearchNormalize:false,liveSearchStyle:"contains",actionsBox:false,iconBase:"glyphicon",tickIcon:"glyphicon-ok",template:{caret:'<span class="caret"></span>'},maxOptions:false,mobile:false,selectOnTab:false,dropdownAlignRight:false};c.prototype={constructor:c,init:function(){var h=this,i=this.$element.attr("id");this.liObj={};this.multiple=this.$element.prop("multiple");this.autofocus=this.$element.prop("autofocus");this.$newElement=this.createView();this.$element.after(this.$newElement).appendTo(this.$newElement);this.$button=this.$newElement.children("button");this.$menu=this.$newElement.children(".dropdown-menu");this.$menuInner=this.$menu.children(".inner");this.$searchbox=this.$menu.find("input");if(this.options.dropdownAlignRight){this.$menu.addClass("dropdown-menu-right")}if(typeof i!=="undefined"){this.$button.attr("data-id",i);e('label[for="'+i+'"]').click(function(j){j.preventDefault();h.$button.focus()})}this.checkDisabled();this.clickListener();if(this.options.liveSearch){this.liveSearchListener()}this.render();this.setStyle();this.setWidth();if(this.options.container){this.selectPosition()}this.$menu.data("this",this);this.$newElement.data("this",this);if(this.options.mobile){this.mobile()}this.$newElement.on({"hide.bs.dropdown":function(j){h.$element.trigger("hide.bs.select",j)},"hidden.bs.dropdown":function(j){h.$element.trigger("hidden.bs.select",j)},"show.bs.dropdown":function(j){h.$element.trigger("show.bs.select",j)},"shown.bs.dropdown":function(j){h.$element.trigger("shown.bs.select",j)}});if(h.$element[0].hasAttribute("required")){this.$element.on("invalid",function(){h.$button.addClass("bs-invalid").focus();h.$element.on({"focus.bs.select":function(){h.$button.focus();h.$element.off("focus.bs.select")},"shown.bs.select":function(){h.$element.val(h.$element.val()).off("shown.bs.select")},"rendered.bs.select":function(){if(this.validity.valid){h.$button.removeClass("bs-invalid")}h.$element.off("rendered.bs.select")}})})}setTimeout(function(){h.$element.trigger("loaded.bs.select")})},createDropdown:function(){var i=this.multiple?" show-tick":"",j=this.$element.parent().hasClass("input-group")?" input-group-btn":"",o=this.autofocus?" autofocus":"";var n=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"";var m=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+f(this.options.liveSearchPlaceholder)+'"')+"></div>":"";var l=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"";var h=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"";var k='<div class="btn-group bootstrap-select'+i+j+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+o+'><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">'+this.options.template.caret+'</span></button><div class="dropdown-menu open">'+n+m+l+'<ul class="dropdown-menu inner" role="menu"></ul>'+h+"</div></div>";return e(k)},createView:function(){var i=this.createDropdown(),h=this.createLi();i.find("ul")[0].innerHTML=h;return i},reloadLi:function(){this.destroyLi();var h=this.createLi();this.$menuInner[0].innerHTML=h},destroyLi:function(){this.$menu.find("li").remove()},createLi:function(){var n=this,m=[],o=0,j=document.createElement("option"),i=-1;var h=function(s,q,r,p){return"<li"+((typeof r!=="undefined"&""!==r)?' class="'+r+'"':"")+((typeof q!=="undefined"&null!==q)?' data-original-index="'+q+'"':"")+((typeof p!=="undefined"&null!==p)?'data-optgroup="'+p+'"':"")+">"+s+"</li>"};var l=function(s,p,r,q){return'<a tabindex="0"'+(typeof p!=="undefined"?' class="'+p+'"':"")+(typeof r!=="undefined"?' style="'+r+'"':"")+(n.options.liveSearchNormalize?' data-normalized-text="'+g(f(s))+'"':"")+(typeof q!=="undefined"||q!==null?' data-tokens="'+q+'"':"")+">"+s+'<span class="'+n.options.iconBase+" "+n.options.tickIcon+' check-mark"></span></a>'};if(this.options.title&&!this.multiple){i--;if(!this.$element.find(".bs-title-option").length){var k=this.$element[0];j.className="bs-title-option";j.appendChild(document.createTextNode(this.options.title));j.value="";k.insertBefore(j,k.firstChild);if(e(k.options[k.selectedIndex]).attr("selected")===undefined){j.selected=true}}}this.$element.find("option").each(function(s){var u=e(this);i++;if(u.hasClass("bs-title-option")){return}var q=this.className||"",t=this.style.cssText,B=u.data("content")?u.data("content"):u.html(),v=u.data("tokens")?u.data("tokens"):null,y=typeof u.data("subtext")!=="undefined"?'<small class="text-muted">'+u.data("subtext")+"</small>":"",w=typeof u.data("icon")!=="undefined"?'<span class="'+n.options.iconBase+" "+u.data("icon")+'"></span> ':"",A=this.parentNode.tagName==="OPTGROUP",z=this.disabled||(A&&this.parentNode.disabled);if(w!==""&&z){w="<span>"+w+"</span>"}if(n.options.hideDisabled&&z&&!A){i--;return}if(!u.data("content")){B=w+'<span class="text">'+B+y+"</span>"}if(A&&u.data("divider")!==true){var r=" "+this.parentNode.className||"";if(u.index()===0){o+=1;var x=this.parentNode.label,C=typeof u.parent().data("subtext")!=="undefined"?'<small class="text-muted">'+u.parent().data("subtext")+"</small>":"",p=u.parent().data("icon")?'<span class="'+n.options.iconBase+" "+u.parent().data("icon")+'"></span> ':"";x=p+'<span class="text">'+x+C+"</span>";if(s!==0&&m.length>0){i++;m.push(h("",null,"divider",o+"div"))}i++;m.push(h(x,null,"dropdown-header"+r,o))}if(n.options.hideDisabled&&z){i--;return}m.push(h(l(B,"opt "+q+r,t,v),s,"",o))}else{if(u.data("divider")===true){m.push(h("",s,"divider"))}else{if(u.data("hidden")===true){m.push(h(l(B,q,t,v),s,"hidden is-hidden"))}else{if(this.previousElementSibling&&this.previousElementSibling.tagName==="OPTGROUP"){i++;m.push(h("",null,"divider",o+"div"))}m.push(h(l(B,q,t,v),s))}}}n.liObj[s]=i});if(!this.multiple&&this.$element.find("option:selected").length===0&&!this.options.title){this.$element.find("option").eq(0).prop("selected",true).attr("selected","selected")}return m.join("")},findLis:function(){if(this.$lis==null){this.$lis=this.$menu.find("li")}return this.$lis},render:function(k){var j=this,m;if(k!==false){this.$element.find("option").each(function(p){var q=j.findLis().eq(j.liObj[p]);j.setDisabled(p,this.disabled||this.parentNode.tagName==="OPTGROUP"&&this.parentNode.disabled,q);j.setSelected(p,this.selected,q)})}this.tabIndex();var o=this.$element.find("option").map(function(){if(this.selected){if(j.options.hideDisabled&&(this.disabled||this.parentNode.tagName==="OPTGROUP"&&this.parentNode.disabled)){return}var r=e(this),q=r.data("icon")&&j.options.showIcon?'<i class="'+j.options.iconBase+" "+r.data("icon")+'"></i> ':"",p;if(j.options.showSubtext&&r.data("subtext")&&!j.multiple){p=' <small class="text-muted">'+r.data("subtext")+"</small>"}else{p=""}if(typeof r.attr("title")!=="undefined"){return r.attr("title")}else{if(r.data("content")&&j.options.showContent){return r.data("content")}else{return q+r.html()+p}}}}).toArray();var l=!this.multiple?o[0]:o.join(this.options.multipleSeparator);if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var h=this.options.selectedTextFormat.split(">");if((h.length>1&&o.length>h[1])||(h.length==1&&o.length>=2)){m=this.options.hideDisabled?", [disabled]":"";var i=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+m).length,n=(typeof this.options.countSelectedText==="function")?this.options.countSelectedText(o.length,i):this.options.countSelectedText;l=n.replace("{0}",o.length.toString()).replace("{1}",i.toString())}}if(this.options.title==undefined){this.options.title=this.$element.attr("title")}if(this.options.selectedTextFormat=="static"){l=this.options.title}if(!l){l=typeof this.options.title!=="undefined"?this.options.title:this.options.noneSelectedText}this.$button.attr("title",e.trim(l.replace(/<[^>]*>?/g,"")));this.$button.children(".filter-option").html(l);this.$element.trigger("rendered.bs.select")},setStyle:function(j,i){if(this.$element.attr("class")){this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""))}var h=j?j:this.options.style;if(i=="add"){this.$button.addClass(h)}else{if(i=="remove"){this.$button.removeClass(h)}else{this.$button.removeClass(this.options.style);this.$button.addClass(h)}}},liHeight:function(n){if(!n&&(this.options.size===false||this.sizeInfo)){return}var l=document.createElement("div"),h=document.createElement("div"),r=document.createElement("ul"),z=document.createElement("li"),y=document.createElement("li"),D=document.createElement("a"),x=document.createElement("span"),C=this.options.header&&this.$menu.find(".popover-title").length>0?this.$menu.find(".popover-title")[0].cloneNode(true):null,s=this.options.liveSearch?document.createElement("div"):null,t=this.options.actionsBox&&this.multiple&&this.$menu.find(".bs-actionsbox").length>0?this.$menu.find(".bs-actionsbox")[0].cloneNode(true):null,k=this.options.doneButton&&this.multiple&&this.$menu.find(".bs-donebutton").length>0?this.$menu.find(".bs-donebutton")[0].cloneNode(true):null;x.className="text";l.className=this.$menu[0].parentNode.className+" open";h.className="dropdown-menu open";r.className="dropdown-menu inner";z.className="divider";x.appendChild(document.createTextNode("Inner text"));D.appendChild(x);y.appendChild(D);r.appendChild(y);r.appendChild(z);if(C){h.appendChild(C)}if(s){var v=document.createElement("span");s.className="bs-searchbox";v.className="form-control";s.appendChild(v);h.appendChild(s)}if(t){h.appendChild(t)}h.appendChild(r);if(k){h.appendChild(k)}l.appendChild(h);document.body.appendChild(l);var j=D.offsetHeight,B=C?C.offsetHeight:0,u=s?s.offsetHeight:0,q=t?t.offsetHeight:0,m=k?k.offsetHeight:0,w=e(z).outerHeight(true),i=typeof getComputedStyle==="function"?getComputedStyle(h):false,o=i?null:e(h),A=parseInt(i?i.paddingTop:o.css("paddingTop"))+parseInt(i?i.paddingBottom:o.css("paddingBottom"))+parseInt(i?i.borderTopWidth:o.css("borderTopWidth"))+parseInt(i?i.borderBottomWidth:o.css("borderBottomWidth")),p=A+parseInt(i?i.marginTop:o.css("marginTop"))+parseInt(i?i.marginBottom:o.css("marginBottom"))+2;document.body.removeChild(l);this.sizeInfo={liHeight:j,headerHeight:B,searchHeight:u,actionsHeight:q,doneButtonHeight:m,dividerHeight:w,menuPadding:A,menuExtras:p}},setSize:function(){this.findLis();this.liHeight();if(this.options.header){this.$menu.css("padding-top",0)}if(this.options.size===false){return}var p=this,m=this.$menu,j=this.$menuInner,v=e(window),B=this.$newElement[0].offsetHeight,k=this.sizeInfo.liHeight,z=this.sizeInfo.headerHeight,s=this.sizeInfo.searchHeight,o=this.sizeInfo.actionsHeight,l=this.sizeInfo.doneButtonHeight,r=this.sizeInfo.dividerHeight,y=this.sizeInfo.menuPadding,n=this.sizeInfo.menuExtras,w=this.options.hideDisabled?".disabled":"",x,t,C,A,q=function(){C=p.$newElement.offset().top-v.scrollTop();A=v.height()-C-B};q();if(this.options.size==="auto"){var i=function(){var G,F=function(J,I){return function(K){if(I){return(K.classList?K.classList.contains(J):e(K).hasClass(J))}else{return !(K.classList?K.classList.contains(J):e(K).hasClass(J))}}},E=p.$menuInner[0].getElementsByTagName("li"),D=Array.prototype.filter?Array.prototype.filter.call(E,F("hidden",false)):p.$lis.not(".hidden"),H=Array.prototype.filter?Array.prototype.filter.call(D,F("dropdown-header",true)):D.filter(".dropdown-header");q();x=A-n;if(p.options.container){if(!m.data("height")){m.data("height",m.height())}t=m.data("height")}else{t=m.height()}if(p.options.dropupAuto){p.$newElement.toggleClass("dropup",C>A&&(x-n)<t)}if(p.$newElement.hasClass("dropup")){x=C-n}if((D.length+H.length)>3){G=k*3+n-2}else{G=0}m.css({"max-height":x+"px",overflow:"hidden","min-height":G+z+s+o+l+"px"});j.css({"max-height":x-z-s-o-l-y+"px","overflow-y":"auto","min-height":Math.max(G-y,0)+"px"})};i();this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",i);v.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",i)}else{if(this.options.size&&this.options.size!="auto"&&this.$lis.not(w).length>this.options.size){var u=this.$lis.not(".divider").not(w).children().slice(0,this.options.size).last().parent().index(),h=this.$lis.slice(0,u+1).filter(".divider").length;x=k*this.options.size+h*r+y;if(p.options.container){if(!m.data("height")){m.data("height",m.height())}t=m.data("height")}else{t=m.height()}if(p.options.dropupAuto){this.$newElement.toggleClass("dropup",C>A&&(x-n)<t)}m.css({"max-height":x+z+s+o+l+"px",overflow:"hidden","min-height":""});j.css({"max-height":x-y+"px","overflow-y":"auto","min-height":""})}}},setWidth:function(){if(this.options.width==="auto"){this.$menu.css("min-width","0");var i=this.$menu.parent().clone().appendTo("body"),h=this.options.container?this.$newElement.clone().appendTo("body"):i,j=i.children(".dropdown-menu").outerWidth(),k=h.css("width","auto").children("button").outerWidth();i.remove();h.remove();this.$newElement.css("width",Math.max(j,k)+"px")}else{if(this.options.width==="fit"){this.$menu.css("min-width","");this.$newElement.css("width","").addClass("fit-width")}else{if(this.options.width){this.$menu.css("min-width","");this.$newElement.css("width",this.options.width)}else{this.$menu.css("min-width","");this.$newElement.css("width","")}}}if(this.$newElement.hasClass("fit-width")&&this.options.width!=="fit"){this.$newElement.removeClass("fit-width")}},selectPosition:function(){this.$bsContainer=e('<div class="bs-container" />');var i=this,k,j,h=function(l){i.$bsContainer.addClass(l.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",l.hasClass("dropup"));k=l.offset();j=l.hasClass("dropup")?0:l[0].offsetHeight;i.$bsContainer.css({top:k.top+j,left:k.left,width:l[0].offsetWidth})};this.$button.on("click",function(){var l=e(this);if(i.isDisabled()){return}h(i.$newElement);i.$bsContainer.appendTo(i.options.container).toggleClass("open",!l.hasClass("open")).append(i.$menu)});e(window).on("resize scroll",function(){h(i.$newElement)});this.$element.on("hide.bs.select",function(){i.$menu.data("height",i.$menu.height());i.$bsContainer.detach()})},setSelected:function(h,j,i){if(!i){i=this.findLis().eq(this.liObj[h])}i.toggleClass("selected",j)},setDisabled:function(h,j,i){if(!i){i=this.findLis().eq(this.liObj[h])}if(j){i.addClass("disabled").children("a").attr("href","#").attr("tabindex",-1)}else{i.removeClass("disabled").children("a").removeAttr("href").attr("tabindex",0)}},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){var h=this;if(this.isDisabled()){this.$newElement.addClass("disabled");this.$button.addClass("disabled").attr("tabindex",-1)}else{if(this.$button.hasClass("disabled")){this.$newElement.removeClass("disabled");this.$button.removeClass("disabled")}if(this.$button.attr("tabindex")==-1&&!this.$element.data("tabindex")){this.$button.removeAttr("tabindex")}}this.$button.click(function(){return !h.isDisabled()})},tabIndex:function(){if(this.$element.data("tabindex")!==this.$element.attr("tabindex")&&(this.$element.attr("tabindex")!==-98&&this.$element.attr("tabindex")!=="-98")){this.$element.data("tabindex",this.$element.attr("tabindex"));this.$button.attr("tabindex",this.$element.data("tabindex"))}this.$element.attr("tabindex",-98)},clickListener:function(){var h=this,i=e(document);this.$newElement.on("touchstart.dropdown",".dropdown-menu",function(j){j.stopPropagation()});i.data("spaceSelect",false);this.$button.on("keyup",function(j){if(/(32)/.test(j.keyCode.toString(10))&&i.data("spaceSelect")){j.preventDefault();i.data("spaceSelect",false)}});this.$button.on("click",function(){h.setSize();h.$element.on("shown.bs.select",function(){if(!h.options.liveSearch&&!h.multiple){h.$menuInner.find(".selected a").focus()}else{if(!h.multiple){var j=h.liObj[h.$element[0].selectedIndex];if(typeof j!=="number"||h.options.size===false){return}var k=h.$lis.eq(j)[0].offsetTop-h.$menuInner[0].offsetTop;k=k-h.$menuInner[0].offsetHeight/2+h.sizeInfo.liHeight/2;h.$menuInner[0].scrollTop=k}}})});this.$menuInner.on("click","li a",function(y){var o=e(this),j=o.parent().data("originalIndex"),w=h.$element.val(),q=h.$element.prop("selectedIndex");if(h.multiple){y.stopPropagation()}y.preventDefault();if(!h.isDisabled()&&!o.parent().hasClass("disabled")){var u=h.$element.find("option"),v=u.eq(j),l=v.prop("selected"),t=v.parent("optgroup"),A=h.options.maxOptions,r=t.data("maxOptions")||false;if(!h.multiple){u.prop("selected",false);v.prop("selected",true);h.$menuInner.find(".selected").removeClass("selected");h.setSelected(j,true)}else{v.prop("selected",!l);h.setSelected(j,!l);o.blur();if(A!==false||r!==false){var k=A<u.filter(":selected").length,n=r<t.find("option:selected").length;if((A&&k)||(r&&n)){if(A&&A==1){u.prop("selected",false);v.prop("selected",true);h.$menuInner.find(".selected").removeClass("selected");h.setSelected(j,true)}else{if(r&&r==1){t.find("option:selected").prop("selected",false);v.prop("selected",true);var x=o.parent().data("optgroup");h.$menuInner.find('[data-optgroup="'+x+'"]').removeClass("selected");h.setSelected(j,true)}else{var m=(typeof h.options.maxOptionsText==="function")?h.options.maxOptionsText(A,r):h.options.maxOptionsText,z=m[0].replace("{n}",A),p=m[1].replace("{n}",r),s=e('<div class="notify"></div>');if(m[2]){z=z.replace("{var}",m[2][A>1?0:1]);p=p.replace("{var}",m[2][r>1?0:1])}v.prop("selected",false);h.$menu.append(s);if(A&&k){s.append(e("<div>"+z+"</div>"));h.$element.trigger("maxReached.bs.select")}if(r&&n){s.append(e("<div>"+p+"</div>"));h.$element.trigger("maxReachedGrp.bs.select")}setTimeout(function(){h.setSelected(j,false)},10);s.delay(750).fadeOut(300,function(){e(this).remove()})}}}}}if(!h.multiple){h.$button.focus()}else{if(h.options.liveSearch){h.$searchbox.focus()}}if((w!=h.$element.val()&&h.multiple)||(q!=h.$element.prop("selectedIndex")&&!h.multiple)){h.$element.triggerNative("change");h.$element.trigger("changed.bs.select",[j,v.prop("selected"),l])}}});this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(j){if(j.currentTarget==this){j.preventDefault();j.stopPropagation();if(h.options.liveSearch&&!e(j.target).hasClass("close")){h.$searchbox.focus()}else{h.$button.focus()}}});this.$menuInner.on("click",".divider, .dropdown-header",function(j){j.preventDefault();j.stopPropagation();if(h.options.liveSearch){h.$searchbox.focus()}else{h.$button.focus()}});this.$menu.on("click",".popover-title .close",function(){h.$button.click()});this.$searchbox.on("click",function(j){j.stopPropagation()});this.$menu.on("click",".actions-btn",function(j){if(h.options.liveSearch){h.$searchbox.focus()}else{h.$button.focus()}j.preventDefault();j.stopPropagation();if(e(this).hasClass("bs-select-all")){h.selectAll()}else{h.deselectAll()}h.$element.triggerNative("change")});this.$element.change(function(){h.render(false)})},liveSearchListener:function(){var i=this,h=e('<li class="no-results"></li>');this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api",function(){i.$menuInner.find(".active").removeClass("active");if(!!i.$searchbox.val()){i.$searchbox.val("");i.$lis.not(".is-hidden").removeClass("hidden");if(!!h.parent().length){h.remove()}}if(!i.multiple){i.$menuInner.find(".selected").addClass("active")}setTimeout(function(){i.$searchbox.focus()},10)});this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(j){j.stopPropagation()});this.$searchbox.on("input propertychange",function(){if(i.$searchbox.val()){var j=i.$lis.not(".is-hidden").removeClass("hidden").children("a");if(i.options.liveSearchNormalize){j=j.not(":a"+i._searchStyle()+'("'+g(i.$searchbox.val())+'")')}else{j=j.not(":"+i._searchStyle()+'("'+i.$searchbox.val()+'")')}j.parent().addClass("hidden");i.$lis.filter(".dropdown-header").each(function(){var m=e(this),l=m.data("optgroup");if(i.$lis.filter("[data-optgroup="+l+"]").not(m).not(".hidden").length===0){m.addClass("hidden");i.$lis.filter("[data-optgroup="+l+"div]").addClass("hidden")}});var k=i.$lis.not(".hidden");k.each(function(l){var m=e(this);if(m.hasClass("divider")&&(m.index()===k.first().index()||m.index()===k.last().index()||k.eq(l+1).hasClass("divider"))){m.addClass("hidden")}});if(!i.$lis.not(".hidden, .no-results").length){if(!!h.parent().length){h.remove()}h.html(i.options.noneResultsText.replace("{0}",'"'+f(i.$searchbox.val())+'"')).show();i.$menuInner.append(h)}else{if(!!h.parent().length){h.remove()}}}else{i.$lis.not(".is-hidden").removeClass("hidden");if(!!h.parent().length){h.remove()}}i.$lis.filter(".active").removeClass("active");if(i.$searchbox.val()){i.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus()}e(this).focus()})},_searchStyle:function(){var h={begins:"ibegins",startsWith:"ibegins"};return h[this.options.liveSearchStyle]||"icontains"},val:function(h){if(typeof h!=="undefined"){this.$element.val(h);this.render();return this.$element}else{return this.$element.val()}},changeAll:function(j){if(typeof j==="undefined"){j=true}this.findLis();var h=this.$element.find("option"),o=this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected",j),k=o.length,n=[];for(var l=0;l<k;l++){var m=o[l].getAttribute("data-original-index");n[n.length]=h.eq(m)[0]}e(n).prop("selected",j);this.render(false)},selectAll:function(){return this.changeAll(true)},deselectAll:function(){return this.changeAll(false)},keydown:function(y){var j=e(this),s=j.is("input")?j.parent().parent():j.parent(),i,n=s.data("this"),k,u,m,q,t,h,o,w,v=":not(.disabled, .hidden, .dropdown-header, .divider)",r={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(n.options.liveSearch){s=j.parent().parent()}if(n.options.container){s=n.$menu}i=e("[role=menu] li",s);w=n.$newElement.hasClass("open");if(!w&&(y.keyCode>=48&&y.keyCode<=57||y.keyCode>=96&&y.keyCode<=105||y.keyCode>=65&&y.keyCode<=90)){if(!n.options.container){n.setSize();n.$menu.parent().addClass("open");w=true}else{n.$button.trigger("click")}n.$searchbox.focus()}if(n.options.liveSearch){if(/(^9$|27)/.test(y.keyCode.toString(10))&&w&&n.$menu.find(".active").length===0){y.preventDefault();n.$menu.parent().removeClass("open");if(n.options.container){n.$newElement.removeClass("open")}n.$button.focus()}i=e("[role=menu] li"+v,s);if(!j.val()&&!/(38|40)/.test(y.keyCode.toString(10))){if(i.filter(".active").length===0){i=n.$menuInner.find("li");if(n.options.liveSearchNormalize){i=i.filter(":a"+n._searchStyle()+"("+g(r[y.keyCode])+")")}else{i=i.filter(":"+n._searchStyle()+"("+r[y.keyCode]+")")}}}}if(!i.length){return}if(/(38|40)/.test(y.keyCode.toString(10))){k=i.index(i.find("a").filter(":focus").parent());m=i.filter(v).first().index();q=i.filter(v).last().index();u=i.eq(k).nextAll(v).eq(0).index();t=i.eq(k).prevAll(v).eq(0).index();h=i.eq(u).prevAll(v).eq(0).index();if(n.options.liveSearch){i.each(function(A){if(!e(this).hasClass("disabled")){e(this).data("index",A)}});k=i.index(i.filter(".active"));m=i.first().data("index");q=i.last().data("index");u=i.eq(k).nextAll().eq(0).data("index");t=i.eq(k).prevAll().eq(0).data("index");h=i.eq(u).prevAll().eq(0).data("index")}o=j.data("prevIndex");if(y.keyCode==38){if(n.options.liveSearch){k--}if(k!=h&&k>t){k=t}if(k<m){k=m}if(k==o){k=q}}else{if(y.keyCode==40){if(n.options.liveSearch){k++}if(k==-1){k=0}if(k!=h&&k<u){k=u}if(k>q){k=q}if(k==o){k=m}}}j.data("prevIndex",k);if(!n.options.liveSearch){i.eq(k).children("a").focus()}else{y.preventDefault();if(!j.hasClass("dropdown-toggle")){i.removeClass("active").eq(k).addClass("active").children("a").focus();j.focus()}}}else{if(!j.is("input")){var p=[],l,z;i.each(function(){if(!e(this).hasClass("disabled")){if(e.trim(e(this).children("a").text().toLowerCase()).substring(0,1)==r[y.keyCode]){p.push(e(this).index())}}});l=e(document).data("keycount");l++;e(document).data("keycount",l);z=e.trim(e(":focus").text().toLowerCase()).substring(0,1);if(z!=r[y.keyCode]){l=1;e(document).data("keycount",l)}else{if(l>=p.length){e(document).data("keycount",0);if(l>p.length){l=1}}}i.eq(p[l-1]).children("a").focus()}}if((/(13|32)/.test(y.keyCode.toString(10))||(/(^9$)/.test(y.keyCode.toString(10))&&n.options.selectOnTab))&&w){if(!/(32)/.test(y.keyCode.toString(10))){y.preventDefault()}if(!n.options.liveSearch){var x=e(":focus");x.click();x.focus();y.preventDefault();e(document).data("spaceSelect",true)}else{if(!/(32)/.test(y.keyCode.toString(10))){n.$menuInner.find(".active a").click();j.focus()}}e(document).data("keycount",0)}if((/(^9$|27)/.test(y.keyCode.toString(10))&&w&&(n.multiple||n.options.liveSearch))||(/(27)/.test(y.keyCode.toString(10))&&!w)){n.$menu.parent().removeClass("open");if(n.options.container){n.$newElement.removeClass("open")}n.$button.focus()}},mobile:function(){this.$element.addClass("mobile-device")},refresh:function(){this.$lis=null;this.liObj={};this.reloadLi();this.render();this.checkDisabled();this.liHeight(true);this.setStyle();this.setWidth();if(this.$lis){this.$searchbox.trigger("propertychange")}this.$element.trigger("refreshed.bs.select")},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove();this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove();if(this.$bsContainer){this.$bsContainer.remove()}else{this.$menu.remove()}this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")}};function d(k,l){var i=arguments;var n=k,h=l;[].shift.apply(i);var m;var j=this.each(function(){var s=e(this);if(s.is("select")){var r=s.data("selectpicker"),p=typeof n=="object"&&n;if(!r){var o=e.extend({},c.DEFAULTS,e.fn.selectpicker.defaults||{},s.data(),p);o.template=e.extend({},c.DEFAULTS.template,(e.fn.selectpicker.defaults?e.fn.selectpicker.defaults.template:{}),s.data().template,p.template);s.data("selectpicker",(r=new c(this,o,h)))}else{if(p){for(var q in p){if(p.hasOwnProperty(q)){r.options[q]=p[q]}}}}if(typeof n=="string"){if(r[n] instanceof Function){m=r[n].apply(r,i)}else{m=r.options[n]}}}});if(typeof m!=="undefined"){return m}else{return j}}var b=e.fn.selectpicker;e.fn.selectpicker=d;e.fn.selectpicker.Constructor=c;e.fn.selectpicker.noConflict=function(){e.fn.selectpicker=b;return this};e(document).data("keycount",0).on("keydown.bs.select",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',c.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',function(h){h.stopPropagation()});e(window).on("load.bs.select.data-api",function(){e(".selectpicker").each(function(){var h=e(this);d.call(h,h.data())})})})(a)}));