//判断是不是在游戏盒环境中
var isclient = 0;
var url = window.location.href;
if(url.indexOf('?client')!=-1 || is_weixn()){
	isclient = 1;
}
document.getElementById("gamename").innerHTML = gamename;
document.getElementById("gamelink").src = webServer+gameiframe;
var winWidth = 0;
var winHeight = 0;
var viewable_width = 0;
var viewable_height = 0;

function is_weixn(){  
	var ua = navigator.userAgent.toLowerCase();  
	if(ua.match(/MicroMessenger/i)=="micromessenger") {  
		return true;  
	}else {  
		return false;  
	}  
}

function check_mobile(){
	var ua = navigator.userAgent;ua = ua ? ua.toLowerCase().replace(/-/g, "") : "";
	if (ua.match(/(Android)/i)){return "android";}
	if (ua.match(/(iPhone|iPod)/i)){return "iphone";}
	if (ua.match(/(iPad)/i)){return "ipad";}
	//UC Browser
	if (ua.match(/(U;)/i)){if (ua.match(/(Adr)/i)){return "android";}}
	if (ua.match(/(U;)/i)){if (ua.match(/(iPh)/i)){return "iphone";}}
	if (ua.match(/(U;)/i)){if (ua.match(/(iPd)/i)){return "ipad";}}
}

function moregame(){
	if(check_mobile()=="android" || check_mobile()=="iphone" || check_mobile()=="ipad"){
		if(isclient==1 && !is_weixn()){
			window.location.href = "http://h.4399.com/client.htm";
		}else{	
			window.location.href = "http://h.4399.com/";
		}
	}
}

function findDimensions(){
	//获取窗口宽度
	if (window.innerWidth)
	winWidth = window.innerWidth;
	else if ((document.body) && (document.body.clientWidth))
	winWidth = document.body.clientWidth;
	//获取窗口高度
	if (window.innerHeight)
	winHeight = window.innerHeight;
	else if ((document.body) && (document.body.clientHeight))
	winHeight = document.body.clientHeight;
	if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth){
		winHeight = document.documentElement.clientHeight;
		winWidth = document.documentElement.clientWidth;
	}
	//可显示区域尺寸
	viewable_width = parseInt(winWidth);
	viewable_height = parseInt(winHeight);
	if(viewable_width>0 && viewable_height>0){
		document.getElementById("gamelink").width = viewable_width+"px";
		document.getElementById("gamelink").height = viewable_height+"px";
	}
	//弹层自适应
	if(hashtml5FinishTrip){
		var pop = document.getElementById('pop');
		if(pop.style.display=="block"){
			var shadow = document.getElementById('shadow');
			pop.style.left = parseInt((viewable_width - 280)/2)+"px";
			pop.style.top = parseInt((viewable_height - 160)/2)+"px";
		}
	}
}

//调用函数，获取数值
findDimensions();
window.onorientationchange = findDimensions;
window.onresize = findDimensions;

function WXshare(WXurl,WXmsg,WXimg){
	window.wxdata = {  
			"imgUrl": WXimg, 
			"timeLineLink": WXurl,
			"sendFriendLink": WXurl,
			"weiboLink": WXurl,
			"tTitle": WXmsg,
			"tContent": WXmsg,
			"fTitle": WXmsg,
			"fContent": WXmsg,
			"wContent": WXmsg 
	};
	document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
				"img_url": wxdata.imgUrl,
				"img_width": "640",
				"img_height": "640",
				"link": wxdata.sendFriendLink,
				"desc": wxdata.fContent,
				"title": wxdata.fTitle
			}, function (res) {
				closeshare();//分享后回调
			})
		});
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            WeixinJSBridge.invoke('shareTimeline', {
				"img_url": wxdata.imgUrl,
				"img_width": "640",
				"img_height": "640",
				"link": wxdata.timeLineLink,
				"desc": wxdata.tContent,
				"title": wxdata.tTitle
			}, function (res) {
				closeshare();//分享后回调
			});
		});
        WeixinJSBridge.on('menu:share:weibo', function(argv){
            WeixinJSBridge.invoke('shareWeibo',{
                "content":wxdata.wContent+' '+wxdata.weiboLink,
                "url":wxdata.weiboLink
            }, function(res){
				closeshare();//分享后回调
			});
        });
	}, false)
}
if(is_weixn() == true){WXshare(WXurl,WXmsg,WXimg);}

//游戏结束回调函数
function __4399finishgame(note){
	if(is_weixn() == true){//仅仅在微信中才有效
		// 游戏名使用{name},分数使用{score},排行名次使用{rank},战胜率使用{percent} 
		var html5FinishTrips = html5FinishTrip.replace('{name}',gamename).replace('{score}',note);
		openWin("show",html5FinishTrips);
		WXshare(WXurl,html5FinishTrips,WXimg);
	}
}

function openWin(flag,note) {
	var pop = document.getElementById('pop');
	var shadow = document.getElementById('shadow');
	if (flag == 'show') {
		pop.style.left = parseInt((viewable_width - 280)/2)+"px";
		pop.style.top = parseInt((viewable_height - 160)/2)+"px";
		pop.style.display = 'block';
		shadow.style.display = 'block';
	}else{
		pop.style.display = 'none';
		shadow.style.display = 'none';
	}
	if(note){
		note = '<center><img width="171" height="44" src="/images/word.png"></center>' + note;
		document.getElementById("html5FinishTrip").innerHTML = note;
	}
}

function showshare(){
	document.getElementById('share').style.display = 'block';
	document.getElementById('pop').style.display = 'none';
}

function closeshare(){
	document.getElementById('share').style.display = 'none';
	document.getElementById('shadow').style.display = 'none';
}
