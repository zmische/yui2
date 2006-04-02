YAHOO.util.Dom=function(){var ua=navigator.userAgent.toLowerCase();var _2=0;return {get:function(el){if(typeof el!="string"&&!(el instanceof Array)){return el;}if(typeof el=="string"){return document.getElementById(el);}else{var _4=[];for(var i=0,len=el.length;i<len;++i){_4[_4.length]=this.get(el[i]);}return _4;}return null;},getStyle:function(el,_6){var f=function(el,_8){var _9=null;var dv=document.defaultView;if(_6=="opacity"&&el.filters){_9=1;try{_9=el.filters.item("DXImageTransform.Microsoft.Alpha").opacity/100;}catch(e){try{_9=el.filters.item("alpha").opacity/100;}catch(e){}}}else{if(el.style[_6]){_9=el.style[_6];}else{if(el.currentStyle&&el.currentStyle[_6]){_9=el.currentStyle[_6];}else{if(dv&&dv.getComputedStyle){var _11="";for(var i=0,len=_6.length;i<len;++i){if(_6.charAt(i)==_6.charAt(i).toUpperCase()){_11=_11+"-"+_6.charAt(i).toLowerCase();}else{_11=_11+_6.charAt(i);}}if(dv.getComputedStyle(el,"").getPropertyValue(_11)){_9=dv.getComputedStyle(el,"").getPropertyValue(_11);}}}}}return _9;};return this.batch(el,f,this);},setStyle:function(el,_12,val){var f=function(el,_14){switch(_12){case "opacity":if(el.filters){el.style.filter="alpha(opacity="+val*100+")";if(!el.currentStyle.hasLayout){el.style.zoom=1;}}else{el.style.opacity=val;el.style["-moz-opacity"]=val;el.style["-khtml-opacity"]=val;}break;default:el.style[_12]=val;}};this.batch(el,f,this);},getXY:function(el){var f=function(el,_15){if(el.parentNode===null||_15.getStyle(el,"display")=="none"){return false;}var _16=null;var pos=[];var box;if(el.getBoundingClientRect){box=el.getBoundingClientRect();Math.max(document.documentElement.scrollTop,document.body.scrollTop);var _19=Math.max(document.documentElement.scrollTop,document.body.scrollTop);var _20=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);return [box.left+_20,box.top+_19];}else{if(document.getBoxObjectFor){box=document.getBoxObjectFor(el);pos=[box.x,box.y];}else{pos=[el.offsetLeft,el.offsetTop];_16=el.offsetParent;if(_16!=el){while(_16){pos[0]+=_16.offsetLeft;pos[1]+=_16.offsetTop;_16=_16.offsetParent;}}if(ua.indexOf("opera")!=-1||(ua.indexOf("safari")!=-1&&_15.getStyle(el,"position")=="absolute")){pos[0]-=document.body.offsetLeft;pos[1]-=document.body.offsetTop;}}}if(el.parentNode){_16=el.parentNode;}else{_16=null;}while(_16&&_16.tagName!="BODY"&&_16.tagName!="HTML"){pos[0]-=_16.scrollLeft;pos[1]-=_16.scrollTop;if(_16.parentNode){_16=_16.parentNode;}else{_16=null;}}return pos;};return this.batch(el,f,this);},getX:function(el){return this.getXY(el)[0];},getY:function(el){return this.getXY(el)[1];},setXY:function(el,pos,_21){var f=function(el,_22){var _23=_22.getStyle(el,"position");if(_23=="static"){_22.setStyle(el,"position","relative");_23="relative";}var _24=YAHOO.util.Dom.getXY(el);if(_24===false){return false;}var _25=[parseInt(YAHOO.util.Dom.getStyle(el,"left"),10),parseInt(YAHOO.util.Dom.getStyle(el,"top"),10)];if(isNaN(_25[0])){_25[0]=(_23=="relative")?0:el.offsetLeft;}if(isNaN(_25[1])){_25[1]=(_23=="relative")?0:el.offsetTop;}if(pos[0]!==null){el.style.left=pos[0]-_24[0]+_25[0]+"px";}if(pos[1]!==null){el.style.top=pos[1]-_24[1]+_25[1]+"px";}var _26=_22.getXY(el);if(!_21&&(_26[0]!=pos[0]||_26[1]!=pos[1])){var _27=function(){YAHOO.util.Dom.setXY(el,pos,true);};setTimeout(_27,0);}};this.batch(el,f,this);},setX:function(el,x){this.setXY(el,[x,null]);},setY:function(el,y){this.setXY(el,[null,y]);},getRegion:function(el){var f=function(el,_30){return new YAHOO.util.Region.getRegion(el);};return this.batch(el,f,this);},getClientWidth:function(){return (document.documentElement.offsetWidth||document.body.offsetWidth);},getClientHeight:function(){return (self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight);},getElementsByClassName:function(_31,tag,_33){var re=new RegExp("(?:^|\\s+)"+_31+"(?:\\s+|$)");var _35=function(el){return re.test(el["className"]);};return this.getElementsBy(_35,tag,_33);},hasClass:function(el,_36){var f=function(el,_37){var re=new RegExp("(?:^|\\s+)"+_36+"(?:\\s+|$)");return re.test(el["className"]);};return this.batch(el,f,this);},addClass:function(el,_38){var f=function(el,_39){if(_39.hasClass(el,_38)){return;}el["className"]=[el["className"],_38].join(" ");};this.batch(el,f,this);},removeClass:function(el,_40){var f=function(el,_41){if(!_41.hasClass(el,_40)){return;}var re=new RegExp("(?:^|\\s+)"+_40+"(?:\\s+|$)","g");var c=el["className"];el["className"]=c.replace(re," ");};this.batch(el,f,this);},replaceClass:function(el,_43,_44){var f=function(el,_45){_45.removeClass(el,_43);_45.addClass(el,_44);};this.batch(el,f,this);},generateId:function(el,_46){_46=_46||"yui-gen";var f=function(el,_47){el=el||{};if(!el.id){el.id=_46+_2++;}return el.id;};return this.batch(el,f,this);},isAncestor:function(_48,_49){_48=this.get(_48);if(!_48||!_49){return false;}var f=function(_49,_50){if(_48.contains&&ua.indexOf("safari")<0){return _48.contains(_49);}else{if(_48.compareDocumentPosition){return !!(_48.compareDocumentPosition(_49)&16);}else{var _51=_49.parentNode;while(_51){if(_51==_48){return true;}else{if(_51.tagName=="HTML"){return false;}}_51=_51.parentNode;}return false;}}};return this.batch(needle,f,this);},inDocument:function(el){var f=function(el,_52){return _52.isAncestor(document.documentElement,el);};return this.batch(el,f,this);},getElementsBy:function(_53,tag,_54){tag=tag||"*";_54=this.get(_54)||document;var _55=[];var _56=_54.getElementsByTagName(tag);for(var i=0,len=_56.length;i<len;++i){if(_53(_56[i])){_55[_55.length]=_56[i];}}return _55;},batch:function(el,_57,o){el=this.get(el);if(!el||!el.length){return _57(el,o);}var _59=[];for(var i=0,len=el.length;i<len;++i){_59[_59.length]=_57(el[i],o);}return _59;}};}();YAHOO.util.Region=function(t,r,b,l){this.top=t;this.right=r;this.bottom=b;this.left=l;};YAHOO.util.Region.prototype.contains=function(_64){return (_64.left>=this.left&&_64.right<=this.right&&_64.top>=this.top&&_64.bottom<=this.bottom);};YAHOO.util.Region.prototype.getArea=function(){return ((this.bottom-this.top)*(this.right-this.left));};YAHOO.util.Region.prototype.intersect=function(_65){var t=Math.max(this.top,_65.top);var r=Math.min(this.right,_65.right);var b=Math.min(this.bottom,_65.bottom);var l=Math.max(this.left,_65.left);if(b>=t&&r>=l){return new YAHOO.util.Region(t,r,b,l);}else{return null;}};YAHOO.util.Region.prototype.union=function(_66){var t=Math.min(this.top,_66.top);var r=Math.max(this.right,_66.right);var b=Math.max(this.bottom,_66.bottom);var l=Math.min(this.left,_66.left);return new YAHOO.util.Region(t,r,b,l);};YAHOO.util.Region.prototype.toString=function(){return ("Region {"+"  t: "+this.top+", r: "+this.right+", b: "+this.bottom+", l: "+this.left+"}");};YAHOO.util.Region.getRegion=function(el){var p=YAHOO.util.Dom.getXY(el);var t=p[1];var r=p[0]+el.offsetWidth;var b=p[1]+el.offsetHeight;var l=p[0];return new YAHOO.util.Region(t,r,b,l);};YAHOO.util.Point=function(x,y){this.x=x;this.y=y;this.top=y;this.right=x;this.bottom=y;this.left=x;};YAHOO.util.Point.prototype=new YAHOO.util.Region();