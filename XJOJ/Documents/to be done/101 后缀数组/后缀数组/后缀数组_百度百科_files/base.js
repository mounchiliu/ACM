var G=baidu.G;String.prototype.byteLength=function(){return this.replace(/[^\u0000-\u007f]/g,"\u0061\u0061").length};String.prototype.subByte=function(E,D){if(this.byteLength()<=E){return this}for(var B=Math.floor((E=E-2)/2),A=this.length;B<A;B++){var C=this.substring(0,B);if(C.byteLength()>=E){return C+(D!=undefined?D:"...")}}return this};baidu.proxy=function(C,A){var B=Array.prototype.slice.call(arguments,1);return function(){C.apply(null,B)}};if(!window.console||!console.firebug){var names=["log","debug","info","warn","error","assert","dir","dirxml","group","groupEnd","time","timeEnd","count","trace","profile","profileEnd"];window.console=(typeof window.loadFirebugConsole=="function")?window.loadFirebugConsole():{};for(var i=0;i<names.length;++i){window.console[names[i]]=function(){}}}function nslog(B,D,A){var C=(new Date()).getTime();var E=["http://nsclick.baidu.com/v.gif?pid="+nslog.pid,"url="+encodeURIComponent(B),"type="+D,"t="+C];for(k in A){E.push(k+"="+A[k])}for(k in nslog.log_params){E.push(k+"="+nslog.log_params[k])}nslog.req(E.join("&"))}nslog.pid=103;nslog.log_params={};nslog.set=function(A,B){nslog.log_params[A]=B};nslog.sid=((new Date()).getTime()+"_"+Math.round(Math.random()*2147483637));nslog.stat=function(A){nslog.req("/js/blank.js?func="+A+"&sid="+nslog.sid+"&t="+(new Date()).getTime())};nslog.req=function(A){var C="iknowlog_"+(new Date()).getTime();var B=window[C]=new Image();B.onload=B.onerror=function(){window[C]=null};B.src=A;B=null};function baidumessage(){if(baidu.G("mnum")){baidu.sio.callByBrowser("http://msg.baidu.com/ms?ct=18&cm=3&tn=bmSelfUsrStat&mpn=13227114&un="+baidu.G("login-user-name").innerHTML,function(){if(redmsg){redmsg=redmsg.replace(/\u6211\u7684/g,"");redmsg=redmsg.replace(/\/\d+\)/,")");if(/>0<\/span>/g.test(redmsg)||/\(0\)/g.test(redmsg)){redmsg=redmsg.replace(/\([^\)]+\)/g,"")}baidu.G("mnum").innerHTML="<span class='usrbar-split'>|</span>"+redmsg}})}}var lemma=lemma||{};lemma.imageResize=function(B,H,F,C){if(B.width<=H&&B.height<=F){return }if(B.width>0&&B.height>0){var A=B.width;var E=B.height;var D=Math.min(H/A,F/E);B.style.height="";B.style.width="";B.height=Math.ceil(E*D);B.width=Math.ceil(A*D);if(C){B.style.marginTop=((F-B.height)/2)+"px"}}else{B.style.height="";B.style.width="";B.style.width=H;B.style.height=F}};lemma.adjustImage=function(B,D,E,A,C){lemma.imageResize(B,E,A,C);var F=baidu.G(D);setTimeout(function(){if(F){if(F.innerHTML.length<=0){F.parentNode.removeChild(F)}else{F.style.width=B.width+"px"}}},40)};lemma.cutText=function(B,I,C,J,D){if(J){if(!baidu.browser.firefox||baidu.browser.firefox<1){return }}var A=baidu.G(B).getElementsByTagName(I);if(D&&D.className){var H=[];baidu.each(A,function(L,K){if(L.className==D.className){H.push(L)}});A=H}for(var E=A.length-1;E>=0;E--){if(A[E].scrollWidth>C){A[E].innerHTML+="..."}var F=A[E].innerHTML;while(A[E].scrollWidth>C){F=F.substr(0,F.length-4)+"...";A[E].innerHTML=F}}};function addURLParam(C,B,A){C+=(C.indexOf("?")==-1?"?":"&");C+=B+"="+A;return C}function setParamURL(B){if(B.indexOf("id=")!=-1){var A=(B.match(/id=\d+/).toString().substr(3));return A}}function getCookie(C){var B="(?:; )?"+C+"=([^;]*);?";var A=new RegExp(B);if(A.test(document.cookie)){return decodeURIComponent(RegExp["$1"])}else{return null}}function setCookie(F,H,B,C,A,E){var D=F+"="+encodeURIComponent(H);if(B){D+="; expires="+B.toGMTString()}if(C){D+="; path="+C}if(A){D+="; domain="+A}if(E){D+="; secure"}document.cookie=D}function setSug(){pop.show("设置",{url:"/page/suggestion.html",width:300,height:150})}setTimeout(function(){if(baidu.G("usrbar")){var H=baidu.G("usrbar").getElementsByTagName("a");for(var D=0,A=H.length;D<A;D++){var F=H[D].href;if(F.indexOf("http://passport.baidu.com/center")!=-1){H[D].onmousedown=function(){nslog(F,80,{name:"userId"})}}else{if(F.indexOf("http://baike.baidu.com/uc/draft")!=-1){H[D].onmousedown=function(){nslog(F,81,{name:"myBaike"})}}else{if(F.indexOf("http://baike.baidu.com/uc/effort")!=-1){H[D].onmousedown=function(){nslog(F,82,{name:"myContri"})}}else{if(F.indexOf("http://baike.baidu.com/uc/draft")!=-1){H[D].onmousedown=function(){nslog(F,83,{name:"myDraft"})}}else{if(F.indexOf("http://z.baidu.com/q?ct=24&cm=16&tn=ikusercenter#uscore")!=-1||F.indexOf("http://zhidao.baidu.com/q?ct=24&cm=16&tn=ikusercenter#uscore")!=-1){H[D].onmousedown=function(){nslog(F,84,{name:"myIknow"})}}else{if(F.indexOf("http://msg.baidu.com/")!=-1){H[D].onmousedown=function(){nslog(F,85,{name:"myMsg"})}}else{if(F.indexOf("http://hi.baidu.com/sys/checkuser/")!=-1&&F.indexOf("/3")!=-1){H[D].onmousedown=function(){nslog(F,86,{name:"mySpace"})}}else{if(F.indexOf("http://www.baidu.com")!=-1){H[D].onmousedown=function(){nslog(F,87,{name:"baiduIndex"})}}else{if(F.indexOf("baidu.com/?logout&u=")!=-1){H[D].onmousedown=function(){nslog(F,89,{name:"logOut"})}}}}}}}}}}}}if(baidu.G("nav_extra")){var E=baidu.G("nav_extra").getElementsByTagName("a");for(var C=0,B=E.length;C<B;C++){var F=E[C].href;if(F.indexOf("http://baike.baidu.com/uc/draft")!=-1){E[C].onmousedown=function(){nslog(F,81,{name:"myBaike"})}}else{if(F.indexOf("http://baike.baidu.com/uc/effort")!=-1){E[C].onmousedown=function(){nslog(F,82,{name:"myContri"})}}else{if(F.indexOf("http://baike.baidu.com/uc/draft")!=-1){E[C].onmousedown=function(){nslog(F,83,{name:"myDraft"})}}}}}}},1000);function imageResize(B,H,F,C){if(B.width<=H&&B.height<=F){return }if(B.width>0&&B.height>0){var A=B.width;var E=B.height;var D=Math.min(H/A,F/E);B.style.height="";B.style.width="";B.height=Math.ceil(E*D);B.width=Math.ceil(A*D);if(C){B.style.marginTop=((F-B.height)/2)+"px"}}else{B.style.height="";B.style.width="";B.style.width=H;B.style.height=F}}function picLoaded(B,A){if(B.height>A){var D=A/B.height;var C=B.width;B.width=C*D;B.height=A}if(B.width>0){B.parentNode.parentNode.style.width=(B.width+6)+"px"}}function formatonlinpic(E,D,C){var F=document.getElementsByName(E);for(var A=0;A<F.length;A++){if(F[A].width>0&&F[A].height>0){var B=(D/F[A].width<C/F[A].height)?D/F[A].width:C/F[A].height;if(B<=1){F[A].width=F[A].width*B}}}}function formatPic(A){for(var B in A){var J=A[B].width;var K=A[B].height;var H=A[B].valign;var C=document.getElementsByName(B);for(var D=0;D<C.length;D++){var I=C[D].width;var E=C[D].height;if(I>0&&E>0){var F=Math.min(J/I,K/E);if(F<=1){C[D].width=I*F;C[D].height=E*F}if(H==1){C[D].style.marginTop=(K-C[D].height)/2+"px"}}}}}function imageFullSize(A){A.style.height="auto";A.style.width="auto"}lemma.catalog=(function(){var A={};A.init=function(){this.holder1=document.getElementById("holder1");this.holder2=document.getElementById("holder2");this.temp=null;this.data=null;this.mT=null;this.fadeT=null;this.mItems=this.holder1.getElementsByTagName("DD");this.mItemNum=this.holder1.getElementsByTagName("DD").length;this.mSubItems=null;this.mSubItemNum=0;this.mSub=this.holder1.getElementsByTagName("OL");this.mSubNum=this.mSub.length;this.mShowNum=8;this.h=0;this.dataH=0;this.fade=0};A.start=function(){if(!baidu.G("catalog")){return }A.init();if(A.mItemNum<=A.mShowNum&&A.mSubNum==0){return }var B="";var E="";for(var D=0;D<A.mSubNum;D++){A.mSub[D].style.display="inline"}var C=A.holder1.offsetWidth;for(var D=0;D<A.mSubNum;D++){A.mSub[D].style.display="none"}if(A.mItemNum>A.mShowNum){for(var D=0;D<A.mShowNum;D++){B+="<dd>"+A.mItems[D].innerHTML+"</dd>"}E="<dd id='temp' class='temp'><ul id='data' class='data'>";for(var D=A.mShowNum;D<A.mItemNum;D++){E+="<li>"+A.mItems[D].innerHTML+"</li>"}E+="</ul></dd>";A.holder2.innerHTML=B+E;for(var D=A.mShowNum;D<A.mItemNum;D++){A.mItems[D].style.display="none"}A.temp=document.getElementById("temp");A.data=document.getElementById("data");A.holder2.style.display="block";A.temp.style.height=0+"px";A.dataH=A.data.offsetHeight}else{A.holder2.innerHTML=A.holder1.innerHTML}A.holder1.style.width=C+"px";A.holder2.style.width=C+"px";A.holder1.style.visibility="hidden";A.holder2.style.display="block";A.holder2.className="arr";A.mSubItems=A.holder2.getElementsByTagName("OL");A.mSubItemNum=A.mSubItems.length;A.holder2.onmouseover=function(){clearTimeout(A.mT);A.mT=setTimeout(A.maxM,100)};A.holder2.onmouseout=function(){clearTimeout(A.mT);if(A.mSubNum>0){A.mT=setTimeout(A.hideSecondTitle,400)}else{A.mT=setTimeout(A.minM,100)}}};A.maxM=function(){if(A.h<A.dataH){A.h+=10;A.temp.style.height=A.h+"px";A.data.style.marginTop=(A.h-A.dataH)+"px";A.holder2.className="";A.mT=setTimeout(A.maxM,10)}else{A.showSecondTitle()}};A.minM=function(){if(A.h>0){A.h-=10;A.temp.style.height=A.h+"px";A.data.style.marginTop=(A.h-A.dataH)+"px";A.mT=setTimeout(A.minM,10)}else{A.holder2.className="arr"}};A.fadeIn=function(){clearTimeout(A.fadeT);if(A.fade>=100){return }A.fade+=5;for(var B=0;B<A.mSubItemNum;B++){A.mSubItems[B].style.filter="Alpha(Opacity="+A.fade+")";A.mSubItems[B].style.opacity=A.fade/100}A.fadeT=setTimeout(A.fadeIn,20)};A.fadeOut=function(){clearTimeout(A.fadeT);if(A.fade<=15){for(var B=0;B<A.mSubItemNum;B++){A.mSubItems[B].style.display="none"}if(A.mItemNum>A.mShowNum){A.h=A.data.offsetHeight;A.temp.style.height=A.h+"px"}A.mT=setTimeout(A.minM,20);return }A.fade-=5;for(var B=0;B<A.mSubItemNum;B++){A.mSubItems[B].style.filter="Alpha(Opacity="+A.fade+")";A.mSubItems[B].style.opacity=A.fade/100}A.fadeT=setTimeout(A.fadeOut,20)};A.showSecondTitle=function(){for(var B=0;B<A.mSubItemNum;B++){A.mSubItems[B].style.display="block"}if(A.mItemNum>A.mShowNum){A.h=A.data.offsetHeight;A.temp.style.height=A.h+"px"}else{A.holder2.className=""}A.fadeT=setTimeout(A.fadeIn,10)};A.hideSecondTitle=function(){A.fadeT=setTimeout(A.fadeOut,10)};A.showCatalog=function(){var B=A.holder1.style.display=="none";A.holder1.style.display=B?"block":"none";if(A.mItemNum<=A.mShowNum&&A.mSubNum==0){A.holder2.style.display="none"}else{A.holder2.style.display=B?"block":"none"}document.getElementById("dir_alt").innerHTML=B?"\u9690\u85cf":"\u663E\u793A"};return{start:A.start,showCatalog:A.showCatalog}})();var autoScroll=(function(){var C;var F;var A;function E(H){var J=H||window.event;var I=J.target||J.srcElement;if(I.id=="hotWordRefresh"){return }F=setInterval(D,40)}function D(){C=document.documentElement.scrollTop||document.body.scrollTop;C++;window.scroll(0,C);A=document.documentElement.scrollTop||document.body.scrollTop;if(C!=A){B()}}function B(){clearInterval(F)}return{start:E,stop:B}})();lemma.imageTitleInit=function(D){var C=D.getElementsByTagName("h3")[0];var B=D.getElementsByTagName("img")[0];if(!!C){var A=C.innerHTML;if(/^\s*$/.test(A)){D.removeChild(C)}else{D.style.paddingBottom="3px";C.innerHTML=baidu.string.wbr(A);C.style.width=B.offsetWidth+"px"}}D.style.visibility="visible"};lemma.contentImageInit=function(){baidu.each(baidu.Q("text_pic",baidu.G("lemmaContent")),function(A){lemma.imageTitleInit(A)})};lemma.editRelated=function(){baidu.sio.callByBrowser("/js/Dialog/Dialog.js",function(){var A="/api/editcheck?lemmaId="+baikeViewInfo.id;baidu.ajax.get(A,function(D,C){if(C=="12"){Detect.content="<center><h2>词条受保护！</h2></center>您好，本词条已达到较高质量，故采取保护措施。<br />当您达到4级，通过率85%以上时，才能编辑该词条。";var B=formatDetect_privcheck({title:"编辑提示",width:"388px",height:"138px",buttonbar:true,buttonAccept:true,buttonCancel:false,contentType:"HTMLUrl",locked:true})}else{var E="/relatedEdit/?id="+baikeViewInfo.id+"&title="+G("titleVal").value;pop.show("完善相关词条",{url:E,width:480,height:500})}})})};lemma.editLemma=function(D,A,B){Detect.url=D+"id="+A+(B?"&dl="+B:"");if(location.href.indexOf("fr=")!=-1){var E=location.search.split("&");var C="";baidu.each(E,function(F,H){if(F.indexOf("fr=")!=-1){C=F}});Detect.url+="&"+C}Detect.id=A;userlogin.check(Detect.detecting,false,"edit")};editLemmaPara=lemma.editLemma;lemma.vote=function(){var A="/view/getLemmaCountAsc/lemmaid="+baikeViewInfo.id+"&random="+Math.random();baidu.sio.callByBrowser(A)};var Detect={detecting:function(){handle_doDetect()},url:"",id:"",uptime:"",upnum:"",upst:"",content:"",latestid:""};function formatDetect(B){var A=Fe.Dialog.open("/page/detect.html",B);return A}Detect.callback=function(A){if(A[1]>=A[6]){if(A[6]){var B;if(baidu.G("BkLogUser")){B="func=editdeny&username="+baidu.G("BkLogUser").innerHTML+"&lid="+baikeViewInfo.id}else{B="func=editdeny&lid="+baikeViewInfo.id}nslog.stat(B);Detect.content="很抱歉，该词条已有多个版本正在提交中，您当前无法编<br>辑该词条：（<br><br>百科建议您晚些时候再尝试编辑该词条，或尝试编辑其他<br>词条。";var C=formatDetect({title:"编辑提示",width:"388px",height:"190px",buttonbar:true,buttonAccept:false,buttonCancel:true,contentType:"HTMLUrl",locked:true,buttonCancelValue:"返回"})}else{if(A[5]==1){Detect.content='您当前的编辑时间属百科<a href="http://www.baidu.com/search/baike_help.html#n22" target="_blank">特殊编辑时段</a>。<br><br>为保证您的编辑成果在提交后的最短时间内生效，百科建<br>议您选择其他时间进行编辑：）<br><br>仍然要继续编辑吗？';var C=formatDetect({title:"编辑提示",width:"388px",height:"190px",buttonbar:true,buttonAccept:true,buttonCancel:true,contentType:"HTMLUrl",locked:true});C.onaccept=function(){window.location=Detect.url}}else{window.location=Detect.url}}}else{if((A[2]==1)||(A[2]==2)){Detect.content="该词条当前已有其他版本正在等待审核。<br><br>为了保障您的编辑能得到及时审核，建议您稍后再编辑<br>本词条：）<br><br>仍然要继续吗？";var C=formatDetect({title:"编辑提示",width:"388px",height:"190px",buttonbar:true,buttonAccept:true,buttonCancel:true,contentType:"HTMLUrl",locked:true});C.onaccept=function(){window.location=Detect.url}}else{if(A[5]==1){Detect.content='您当前的编辑时间属百科<a href="http://www.baidu.com/search/baike_help.html#n22" target="_blank">特殊编辑时段</a>。<br><br>为保证您的编辑成果在提交后的最短时间内生效，百科建<br>议您选择其他时间进行编辑：）<br><br>仍然要继续编辑吗？';var C=formatDetect({title:"编辑提示",width:"388px",height:"190px",buttonbar:true,buttonAccept:true,buttonCancel:true,contentType:"HTMLUrl",locked:true});C.onaccept=function(){window.location=Detect.url}}else{window.location=Detect.url}}}};Detect.doDetect=function(){var _str="tp=0&r="+Math.random()+"&lemmaid="+Detect.id+"&lemmaVersionId=0";var _url="/getConflictInfo/?"+_str;baidu.ajax.get(_url,function(xhr){Detect.callback(eval(xhr.responseText))})};function formatDetect_privcheck(B){var A=Fe.Dialog.open("/page/privcheck.html",B);return A}function handle_doDetect(){baidu.sio.callByBrowser("/js/Dialog/Dialog.js",function(){var A="/api/editcheck?lemmaId="+baikeViewInfo.id;baidu.ajax.get(A,function(D,C){if(C=="12"){Detect.content="<center><h2>词条受保护！</h2></center>您好，本词条已达到较高质量，故采取保护措施。<br /> 当您达到4级，通过率85%以上时，才能编辑该词条。";var B=formatDetect_privcheck({title:"编辑提示",width:"388px",height:"138px",buttonbar:true,buttonAccept:true,buttonCancel:false,contentType:"HTMLUrl",locked:true})}else{Detect.doDetect()}})})}function gotoRef(B){if(!B){return false}var D=B.innerHTML.replace(/\[/g,"").replace(/\]/g,"");var D=parseInt(D);if(D>=0){var A=baidu.G("refIndex_"+D);if(A&&A.parentNode){var C=baidu.dom.getPosition(A.parentNode).top-0;if(C>0){window.scrollTo(0,C)}}}}lemma.showMoreRelated=function(){var B=baidu.G("word_more");var A=baidu.G("word_more_con");if(A.style.display=="none"){B.className="word_more2";A.style.display=""}else{B.className="word_more1";A.style.display="none"}};lemma.relatedInit=function(){if(!baidu.G("word_more")){return false}var H=baidu.G("word_more_con").getElementsByTagName("a");var C=baidu.G("oneLineSpan");var B=baidu.G("oneLineDiv");var A=baidu.G("word_more");var F=H.length;for(var D=0;D<F;D++){var E=H[0];C.appendChild(E);if(C.offsetWidth>(B.offsetWidth-A.offsetWidth)){if(D<(F-1)){baidu.G("word_more_con").insertBefore(E,H[0]);A.style.visibility="visible"}else{if(D==(F-1)){baidu.G("word_more_con").appendChild(E);A.style.visibility="visible"}}B.style.visibility="visible";return }}B.style.visibility="visible"};lemma.coEditorInit=function(){var A=baidu.G("co-editors");if(!A){return }if(A.offsetHeight>25){baidu.show("more-coeditor");var B=A.getElementsByTagName("span");while(A.offsetHeight>25&&B.length>0){A.removeChild(B[B.length-1])}}};lemma.getDays=function(C){if(!C){return""}var A=C.match(/(\d{2,4})-(\d{1,2})-(\d{1,2})/);A[2]=parseInt(A[2],10)-1;var F=new Date(A[1],A[2],A[3]);var B=new Date();var D=new Date(B.getFullYear(),B.getMonth(),B.getDate()-1);var E=parseInt((F-D)/(1000*3600*24));switch(E){case 1:return"今天";case 0:return"昨天";case -1:return"2天前";case -2:return"3天前"}return C};var pop={onOk:function(){},onclosed:function(){},onshow:function(){},create:function(){if(!baidu.G("pop-main")){var B=document.createElement("div");B.id="pop-shadow";var C=document.createElement("div");C.id="pop-main";C.style.width="500px";var A=document.createElement("iframe");A.id="pop-shadow-iframe";var D=[,'<div class="p-bg">','<div class="p-top">','<div class="p-title"><div id="pop-close"></div><p id="pop-title">信息提示</p></div>','<div class="p-r1"></div><div class="p-r2"></div>',"</div>",'<div class="p-body"><div class="p-body-inner">','<iframe id="pop-iframe-content" name="pop-iframe-content" width="100%" frameborder="0" scrolling="no" src="about:blank"></iframe>','<div id="pop-text-content"></div>',"</div></div>",'<div class="p-bottom"><div class="p-r3"></div><div class="p-r4"></div><div class="clear"></div></div>','</div><div id="pop-shadow-bg"></div>'];C.innerHTML=D.join("");document.body.insertBefore(A,document.body.firstChild);document.body.insertBefore(C,document.body.firstChild);document.body.insertBefore(B,document.body.firstChild)}},resize:function(B,A,L){var D=baidu.page;var P=D.getScrollTop();var M=D.getWidth()||500;var E=D.getHeight()||500;var O=baidu.G("pop-shadow");var C=baidu.G("pop-shadow-bg");var J=baidu.G("pop-main");var I=baidu.G("pop-shadow-iframe");var N=A||parseInt(J.style.width,10)||500;var F=L||J.offsetHeight||parseInt(J.style.height,10)||500;O.style.width=M+"px";O.style.height=E+"px";O.style.left=O.style.top="0px";I.style.width=(M-20)+"px";I.style.height=(E-20)+"px";I.style.top=I.style.left="5px";var K=(D.getViewWidth()-N)/2;var H=(D.getViewHeight()-F)/2+P;if(K<1){K=P}if(H<1){H="20"}J.style.left=K+"px";J.style.top=H+"px";J.style.width=N+"px";C.style.height=F+"px";if(L&&baidu.G("pop-iframe-content").style.display=="block"){baidu.G("pop-iframe-content").style.height=L+"px"}},hide:function(){pop.onclosed();var A=function(E){E=baidu.G(E);if(E){baidu.hide(E)}};try{A("pop-main");A("pop-shadow");A("pop-shadow-iframe");var D=baidu.G("pop-iframe-content");try{D.src="about:blank"}catch(C){try{D.location="about:blank"}catch(C){}}}catch(B){}baidu.un(window,"resize",pop.resize);baidu.un(document,"onkeydown",pop.keyListener)},keyListener:function(B){B=window.event||B;var A=B.which||B.keyCode;if(27==A){pop.hide()}},config:function(H,A){pop.create();if(H){baidu.G("pop-title").innerHTML=H}pop.onclosed=A.onclosed||function(){};pop.onshow=A.onshow||function(){};var I=baidu.G("pop-iframe-content");var C=baidu.G("pop-text-content");if(A.url){if(A.url!=true){C.innerHTML="";baidu.hide(C);I.style.display="block";try{I.src=A.url}catch(E){try{document.frames["pop-iframe-content"].location=A.url}catch(E){}}}if(A.scrollX){I.style.overflowX=A.scrollX}if(A.scrollY){I.style.overflowY=A.scrollY}if(A.scroll){I.style.overflow=A.scroll}}else{if(A.info){baidu.hide(I);C.style.display="block";C.innerHTML=A.info}}var B=A.width||450;var F=A.height||400;var D=baidu.G("pop-main");D.style.width=B+"px";if(A.url&&I.style.display=="block"){I.style.height=F+"px";I.style.width=(B-30)+"px"}},show:function(B,A){pop.create();pop.config(B,A);baidu.G("pop-close").onclick=pop.hide;baidu.G("pop-main").style.display="block";baidu.G("pop-shadow").style.display="block";baidu.G("pop-shadow-iframe").style.display="block";baidu.G("pop-title").onselectstart=function(){return false};pop.resize();baidu.on(window,"resize",pop.resize);baidu.on(document,"onkeydown",pop.keyListener)}};function userlogin(C,B){userlogin.onLoginSuccess=C||userlogin.defalutLoginSuccess;B=B||"login";B="?"+B+"&t="+(new Date()).getTime();var A="https://passport.baidu.com/?login&psp_tt=2&tpl=wk&fu="+escape("http://baike.baidu.com/page/logincallback.html"+B)+"&u="+escape(window.location);pop.show("登录到百度百科",{url:A,width:400,height:300})}userlogin.defalutLoginSuccess=userlogin.onLoginSuccess=function(){window.location=window.location};userlogin.onLoginFailed=function(){window.location="http://passport.baidu.com/?login&tpl=wk&u="+escape("http://baike.baidu.com/")};userlogin.check=function(D,A,C){function B(F,H,E){if(baidu.trim(F.responseText)=="0"){if(E){E()}else{userlogin(H,C)}return false}if(H){H()}return true}baidu.ajax.get("/api/login/?t="+(new Date()).getTime(),function(E){B(E,D,A)})};userlogin.userbarinit=function(){var A=baidu.G("logout");if(A&&(A.className!="goto-index")){A.href="https://passport.baidu.com/?logout&u="+escape(location.href)}};baidu.dom.ready(userlogin.userbarinit);function ascUpdateData(A){if(A.length==1){if(A[0]>=0){baidu.G("vote_num").innerHTML=A[0];baidu.G("vote_txt").innerHTML="您已评价，谢谢！"}else{if(A[0]==-1){baidu.G("vote_txt").innerHTML="您已评价，谢谢！"}}}}lemma.getDynamicData=function(){baidu.sio.callByBrowser("/template/baikeDynamicData.js?random="+Math.random())};function ctrlBKDynamic(){if(typeof bkDynamic!="undefined"){var A=bkDynamic[0];baidu.G("profileTitle").innerHTML=A;if(!!bkDynamic[1][0]){baidu.G("task").innerHTML="<dt><strong>"+bkDynamic[1][0]+'</strong>：<a href="'+bkDynamic[1][1][1]+'" target="_blank">'+bkDynamic[1][1][0]+'</a></dt> <dd><a href="'+bkDynamic[1][1][1]+'" target="_blank"><img src="'+bkDynamic[1][1][2]+'" width="160" height="81"></a></dd>';baidu.show("task")}if(!!bkDynamic[2][0]){baidu.G("notice").innerHTML="<dt><strong>"+bkDynamic[2][0]+"</strong>：</dt>"+bkDynamic[2][1];baidu.show("task")}baidu.show("bkDynamic");baidu.each(baidu.G("bkDynamic").getElementsByTagName("a"),function(C,B){baidu.on(C,"click",function(){nslog(this.href,235,{index:B})})})}}function getUserInfoAsc(){var A="/api/personalmesg?date="+new Date().getTime();baidu.ajax.get(A,function(B){showUserInfo(B)})}function showUserInfo(xhr){var json=eval("("+xhr.responseText+")");baidu.G("userPic").src=json.base.avatar;var unLen=24;if(json.base.odp){unLen-=4;baidu.G("kedoutuanPic").style.display="inline"}if(json.base.admin){unLen-=6;baidu.G("masterPic").style.display="inline"}var highVersionLink=baidu.G("highVersionLink");baidu.G("highVersionNum").innerHTML=json.base.hqVerNum;var goodVersionLink=baidu.G("goodVersionLink");baidu.G("goodVersionNum").innerHTML=json.base.goodVerNum;if(json.base.hqVerNum>0){highVersionLink.href="/uc/effort/#8"}if(json.base.goodVerNum>0){goodVersionLink.href="/uc/effort/#7"}var userTitleLink=baidu.G("userTitleLink");userTitleLink.innerHTML=json.base.username.subByte(unLen);baidu.G("userTitlePic").className="usertitle level"+json.base.level;baidu.G("userProcess").style.width=json.base.scorept+"%";if(json.hotword&&json.hotword.suc){words=json.hotword.data.words;showHotwords();baidu.G("hotWord").style.display="block"}var effortObj={notpassed:["未通过版本","/uc/effort/#3"],HQVersion:["高质量版本","/uc/effort/#8"],goodVersion:["优质版本","/uc/effort/#7"],passVersion:["已通过版本","/uc/effort"]};if(json.effort&&json.effort.suc){var data=json.effort.data;for(var i in data){var flag=true;break}if(flag){var effArr=[];for(var i in data){var len=32-effortObj[i][0].byteLength();effArr.push("<li>·");effArr.push('<a class="ef-type" href="');effArr.push(effortObj[i][1]);effArr.push('" target="_blank" onclick="nslog(this.href,242);">');effArr.push(effortObj[i][0]);effArr.push("</a><span>：</span>");effArr.push('<a href="http://baike.baidu.com/history/id=');effArr.push(data[i].versionid);effArr.push('" target="_blank">');effArr.push(data[i].title.subByte(len));effArr.push("</a>");effArr.push("</li>")}baidu.G("efforts").innerHTML=effArr.join("");baidu.G("effort").style.display="block";nslog(location.href,244);baidu.each(baidu.G("effort").getElementsByTagName("a"),function(ele){baidu.on(ele,"mousedown",function(){nslog(this.href,243)})})}}baidu.G("userInfoDiv").style.display="block";var userTip=baidu.G("userTip");var hotHelpTip=baidu.G("hotHelpTip");var startPos=58;var endPos=215;baidu.G("userTipArrow").style.left=Math.round(startPos+(endPos-startPos)*json.base.scorept/100)-4+"px";var userProcessBack=baidu.G("userProcessBack");baidu.on(userProcessBack,"mouseover",showTip(baidu.G("userTip")));baidu.on(userProcessBack,"mouseout",hideTip(baidu.G("userTip")));baidu.G("userLevel").innerHTML=json.base.level;baidu.G("totalscore").innerHTML=json.base.totalscore;baidu.G("scorediff").innerHTML=json.base.scorediff;baidu.G("nextlevel").innerHTML=json.base.nextlevel;var hotHelpE=baidu.G("hotHelp");baidu.on(hotHelpE,"mouseover",showTip(hotHelpTip));baidu.on(hotHelpE,"mouseout",hideTip(hotHelpTip))}function showHotwords(){var C=words.length||0;var M=4;var F=[];while(F.length!=4){var D=Math.round(Math.random()*(C-1));var L=false;for(var A=0;A<F.length;A++){if(F[A]==D){L=true;break}}if(L){continue}F.push(D);if(F.length==words.length){break}}var E="";var K=[];for(var A=0;A<4&&A<F.length;A++){var J=baidu.string.decodeHTML(words[F[A]].title);var I=baidu.string.decodeHTML(words[F[A]].perfectpoints);var B=baidu.string.decodeHTML(words[F[A]].reason);var H=J.subByte(10);K.push("<li>");K.push('·<a onclick="nslog(this.href,226);"  target="_blank" href="');K.push(words[F[A]].link+'"');K.push(' onmouseout="hideCompleteTip();"');K.push(' onmouseover="showCompleteTip('+A+", '"+baidu.string.encodeHTML(J).replace(/'/g,"&acute;")+"', '"+baidu.string.encodeHTML(I).replace(/'/g,"&acute;")+"');\">");K.push(baidu.string.encodeHTML(H));K.push("</a>");K.push("<span");K.push(' onmouseout="hideHotReasonTip();"');K.push(' onmouseover="showHotReasonTip('+A+",'"+baidu.string.encodeHTML(B).replace(/'/g,"&acute;")+"');\"");K.push(">：");K.push(baidu.string.encodeHTML(B.subByte(32-H.byteLength())));K.push("</span>");K.push("</li>")}baidu.G("hotWords").innerHTML=K.join("")}function showTip(A){return function(){if(timeout){clearTimeout(timeout);baidu.G("completeTip").style.display="none"}A.style.display="block"}}function hideTip(A){return function(){A.style.display="none"}}function hideHotReasonTip(){baidu.G("hotReasonTip").style.display="none"}var timeout;function hideCompleteTip(){timeout=setTimeout(function(){baidu.G("completeTip").style.display="none"},1000)}function showHotReasonTip(B,C){C=baidu.string.encodeHTML(C);if(timeout){clearTimeout(timeout);baidu.G("completeTip").style.display="none"}var A=baidu.G("hotReasonTip");baidu.G("hotReasonTipMain").innerHTML="<p>"+C+"</p>";A.style.top=54+B*20+"px";A.style.display="block"}function showCompleteTip(D,E,B){E=baidu.string.encodeHTML(E);B=baidu.string.encodeHTML(B);if(timeout){clearTimeout(timeout)}var C=baidu.G("completeTip");baidu.G("completeTipMain").innerHTML="<p>"+E+"</p><p><span>完善点：</span>"+B+"</p>";C.style.display="block";var A=C.scrollHeight;C.style.top=54+D*20-A-21+"px"}baidu.dom.ready(baidumessage);baidu.dom.ready(function(){if(baidu.G("search")){baidu.sio.callByBrowser("/js/sug.js")}});function userbarEvent(){var E,D,B;function A(I,H){I.style.display=B?"none":"block";I.style.left=H+"px"}function F(H){B&&userbarHover(H)}function C(){E=null;D=null;baidu.un(window,"unload",C)}baidu.on(window,"resize",F);baidu.on(document,"click",F);baidu.on(window,"unload",C);return function(I){(I||window.event).cancelBubble=true;E=E||baidu.G("usrbar");D=D||baidu.G("nav_extra");var J=baidu.G("my_home"),K=E.scrollHeight,H=J.offsetLeft;H=H-6;A(D,H);baidu.G("usrbar").scrollWidth;B=!B}}baidu.dom.ready(function(){window.userbarHover=userbarEvent();var A=baidu.G("my_home_container");var B=baidu.G("nav_extra");if(A){baidu.on(A,"mouseover",userbarHover)}if(B){baidu.on(B,"mouseout",function(E){var D=baidu.event.getPageX(E);var H=baidu.event.getPageY(E);var F=baidu.dom.getPosition(B);var C=baidu.q("body",B,"div");var C=C&&C[0];if(C){if(D<F.left+3||D>=F.left+parseInt(baidu.getStyle(B,"width"),10)-3||H<F.top+3||H>=baidu.dom.getPosition(C).top+C.offsetHeight-3){if(B.style.display=="block"){userbarHover(E)}}}})}});var g_pop=pop;g_pop.close=pop.hide;