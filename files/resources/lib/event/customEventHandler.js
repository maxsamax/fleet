function str2Bool(a){"use strict";if("string"!=typeof a)return a;switch(a.toLowerCase()){case"true":case"checked":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1;default:return Boolean(!1)}}function toggle(a,b,c,d){"use strict";var e,f;if("html"!==b){if(e=$(document).find('[id="'+a+'"]')){if("marker"===e.attr("apperytype")){if(e.attr("rendered",c),1===e.find("[reRender]").size()){var g=Apperyio(e.find("[reRender]").attr("reRender"));void 0!==g&&void 0!==g.refresh&&g.refresh()}return}if(void 0!==d&&(e=e.find(d),0===e.size()))return;switch(e.prop("tagName")){case"INPUT":e="radio"===e.attr("type")||"checkbox"===e.attr("type")?e.parent().parent():e.closest("div[data-role='fieldcontain']");break;case"SELECT":case"TEXTAREA":e=e.closest(".ui-field-contain");break;case"A":(e.hasClass("ui-link-inherit")||e.hasClass("ui-icon-carat-r"))&&(e=e.closest("li"))}}}else if(e=$(document).find('[id="'+a+'_comp"]'),0===e.size()&&(e=$(document).find('[id="'+a+'"]'),f=e.prop("tagName").toLowerCase(),"div"===f&&-1!==e.prop("class").indexOf("tabpanel")&&-1===e.prop("class").indexOf("tabs-top"))){var h=e.parent().find("[href=#"+a+"]");if(void 0===c||""===c?h.toggle():h.toggle(str2Bool(c)),"block"===e.css("display")&&!str2Bool(c)&&-1===e.prop("class").indexOf("ui-tabs-hide")){var i=e.parent(),j=i.tabs("option","selected");j++,j=j===i.tabs("length")?0:j,i.tabs("select",j)}}e&&(void 0===c||""===c?e.toggle():e.is("a")&&"button"===e.attr("data-role")?e.hasClass("ui-btn-inline")?e.css("display",str2Bool(c)?"inline-block":"none"):e.css("display",str2Bool(c)?"block":"none"):e.is("iframe")?e.css("display",str2Bool(c)?"block":"none"):e.toggle(str2Bool(c)))}function setText(a,b,c){"use strict";var d=$("#"+a);if(d.length){var e="value",f=d.prop("tagName").toLowerCase();jQuery.inArray(f,__GLOBAL_INNERHTML_TAGS)>-1?e="innerHTML":"img"===f?e="src":"input"===f&&jQuery.inArray(d.prop("type").toLowerCase(),__GLOBAL_CHECKED_TAGS)>-1&&(e="innerHTML",d=$("#"+a+"_label")),$("#"+a+" .ui-btn-text:first").length?$("#"+a+" .ui-btn-text:first").text(b):$("#"+a+" .ui-collapsible-heading-toggle:first").length?$("#"+a+" .ui-collapsible-heading-toggle:first").text(b):d.prop(e,b)}}function getText(a,b){var c=$(document).find("[id="+a+"]");if(0!==c.size()){var d="value",e=c.prop("tagName").toLowerCase();return jQuery.inArray(e,__GLOBAL_INNERHTML_TAGS)>-1?(d="innerHTML","div"===e&&-1!==c.prop("class").indexOf("titledpanel")?c=$("[id="+a+"_title]"):"div"===e&&-1!==c.prop("class").indexOf("ui-tabs-panel")?c=c.parent().find("[href=#"+a+"]"):"a"===e&&"li"==c.parent().parent().parent().prop("tagName").toLowerCase()&&"listview"==c.parent().parent().parent().parent().attr("data-role")&&(c=c.find(".ui-li-heading"))):"img"===e?d="src":"input"===e&&jQuery.inArray(c.prop("type").toLowerCase(),__GLOBAL_CHECKED_TAGS)>-1&&(c="html"===b?$("[id="+a+"_label]"):$("[id="+a+"_label] .ui-btn-text"),d="innerHTML"),"collapsible"===c.attr("data-role")?$("[id="+a+"] .ui-btn-text:first").text():$("[id="+a+"] .ui-btn-text").size()>0?$("[id="+a+"] .ui-btn-text").text():"innerHTML"===d?$("<div />").html(c.prop(d)).text():c.prop(d)}}function setEnabled(a,b){"use strict";var c=$(document).find("[id="+a+"]");if(0!==c.size()){var d=c.prop("tagName").toLowerCase();$(c).find("[id]").each(function(){__setEnabled__($(this),b)}),__setEnabled__(c,b),"input"===d&&jQuery.inArray(c.prop("type").toLowerCase(),__GLOBAL_CHECKED_TAGS)>-1&&__setEnabled__($(document).find("[id="+a+"_label]"),b)}}function __setEnabled__(a,b){"use strict";if(0!==a.size()){var c="disabled",d=a.prop("tagName").toLowerCase();b=str2Bool(b)?"":"disabled",a.prop(c,b),"disabled"===b?a.addClass("disabled-cntrl"):a.removeClass("disabled-cntrl"),("input"===d&&"text"===a.prop("type").toLowerCase()||"div"===d)&&-1!==a.prop("class").toLowerCase().indexOf("hasdatepick")&&("disabled"===b?a.datepick("disable"):a.datepick("enable"))}}function setChecked(a,b){"use strict";var c=$(document).find("[id="+a+"]");if(0!==c.size()){var d="checked",e=c.prop("tagName").toLowerCase();"input"===e&&jQuery.inArray(c.prop("type").toLowerCase(),__GLOBAL_CHECKED_TAGS)>-1&&(b=str2Bool(b)?"checked":""),c.prop(d,b)}}function closePopup(){$.mobile.back()}function format(a){"use strict";for(var b=1;b<arguments.length;b++)a=a.replace("{"+(b-1)+"}",arguments[b]);return a}function setAttribute_(a,b,c){"use strict";var d=$(document).find('[id="'+a+'"]');if(0!==d.size())if("object"===d.attr("apperytype"))void 0!==d.attr("name")&&void 0!==Apperyio&&(Apperyio(d.attr("name")).attr(b,c),void 0!==Apperyio(d.attr("name")).refresh&&Apperyio(d.attr("name")).refresh());else if("marker"===d.attr("apperytype"))d.attr(b,c),void 0!==Apperyio(d.attr("reRender"))&&void 0!==Apperyio(d.attr("reRender")).refresh&&Apperyio(d.attr("reRender")).refresh();else if("flipswitch"===d.data("role")&&"toggled"===b)d.val("true"===c?"on":"off"),d.flipswitch("refresh");else if("OPTION"===d[0].tagName&&"label"===b)d.text(c).parent().refresh(),void 0!==Apperyio(d.attr("reRender"))&&void 0!==Apperyio(d.attr("reRender")).refresh&&Apperyio(d.attr("reRender")).refresh();else if(jQuery.inArray(b,__GLOBAL_ATTRIBUTES)>-1||jQuery.inArray(b,__JQM_DATA_ATTRIBUTES)>-1)d.attr(b,c),void 0!=Apperyio(d.attr("reRender"))&&void 0!==Apperyio(d.attr("reRender")).refresh&&Apperyio(d.attr("reRender")).refresh();else if("A"===d[0].tagName&&"src"===b&&d.find("img:first"))d.find("img:first").prop(b,c);else if("checked"!==b||"INPUT"!==d.prop("tagName")||"radio"!==d.prop("type")&&"checkbox"!==d.prop("type"))if("selectedOption"===b&&"fieldcontain"===d.data("role")){var e=[];try{e=JSON.parse(c),"[object Array]"!=={}.toString.call(e)&&(e=[c])}catch(f){e=[c]}d.find(".ui-controlgroup-controls input").each(function(){var a=$(this),b=jQuery.inArray(a.val(),e)>=0;a.closest(".ui-controlgroup-controls > span").setAttr("checked",b)})}else if("IFRAME"==d[0].tagName&&$(document).find('[id="'+a+'"]').data("youtube-player-object")){var d=$(document).find('[id="'+a+'"]'),g=d.data("youtube-player-object");switch(b){case"videoId":g.cueVideoById?g.cueVideoById(c):d.prop(b,c);break;default:d.prop(b,c)}}else d.prop(b,c);else d.parent().parent().setAttr(b,str2Bool(c))}var __GLOBAL_INNERHTML_TAGS=["a","div","td","th","li"],__GLOBAL_CHECKED_TAGS=["checkbox","radio"],__GLOBAL_ATTRIBUTES=["style","onclick","ondblclick","onmouseout","onblur","onchange","onkeydown","onkeypress","onkeyup","onmousedown","onmousemove","onmouseover","onmouseup"],__JQM_DATA_ATTRIBUTES=["data-title","data-image-url"];!function(a){"use strict";a.fn.getType=function(){try{if(this.prop("type"))switch(a(this).prop("type")){case"radio":case"checkbox":return"checkboxradio";case"button":return"button"}if(a(this).attr("data-type"))switch(this.attr("data-type")){case"range":return"slider"}if(this.attr("data-role"))switch(a(this).attr("data-role")){case"slider":return"slider"}return"SELECT"===a(this).prop("tagName")?"selectmenu":null}catch(b){return null}}}(jQuery),function($){"use strict";$.fn.setEnabled=function(value){if(""!==value){var method=str2Bool(value)?"enable":"disable",text=str2Bool(value)?"":"disabled",s="$(this).{0}('"+method+"');";this.each(function(){var type;try{type=$(this).getType(),null!=type?eval(format(s,type)):"DIV"===$(this).prop("tagName")||"OL"===$(this).prop("tagName")?(("collapsible"===$(this).attr("data-role")||"appery_label"===$(this).attr("data-role"))&&("disabled"===text?($(this).addClass("ui-state-disabled"),this.onclick=function(a){return a.stopPropagation(),a.preventDefault(),!1}):($(this).removeClass("ui-state-disabled"),this.onclick=null)),$(this).find("[id]").setEnabled(value)):("disabled"===text?($(this).addClass("ui-state-disabled"),$(this).closest("li")&&$(this).closest("li").addClass("ui-state-disabled")):($(this).removeClass("ui-state-disabled"),$(this).closest("li")&&$(this).closest("li").removeClass("ui-state-disabled")),$(this).prop("disabled",text))}catch(e){}})}}}(jQuery),function($){"use strict";$.fn.refresh=function(action){return null==action&&(action="refresh"),this.each(function(){var s="$(this).{0}('refresh');",type;try{switch(action){case"refresh":type=$(this).getType(),null!=type&&eval(format(s,type));break;case"checkedRefresh":$(this).click()}}catch(e){}})}}(jQuery);