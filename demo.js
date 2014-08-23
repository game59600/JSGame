/** 
 * -------------------------------------------------------------
 * Copyright (c) 2014 ZYGames All rights reserved. 
 * http://zygames.sinaapp.com/ 
 *  
 * @author: zygames123@163.com 
 * @description: 不死鸟 
 * ------------------------------------------------------------- 
 */
function qipaLog() {
    QIPA_DEBUG && console.log(arguments)
}
function qipaUi_showPopup(a) {
    qipaLog("showPopup url: " + a), window.scroll(0, 0);
    var b = document.body.scrollWidth, c = document.body.scrollHeight;
    void 0 == window.popup && (window.popup = $('<iframe id="popup" class="app-popup">'), $("body").append(window.popup)), window.popup.attr("src", a), window.popup.css({
        width: b,
        height: c
    }).fadeIn()
}
function MyProgressBar(a, b, c) {
    this.initialize(), this.w = a, this.h = b, this.lastCount = 0;
    var d = b / 2;
    this.progress = new createjs.Shape;
    var e = this.progress.graphics;
    e.setStrokeStyle(1), e.beginStroke("black"), e.rect(76, d-4, 488, 48), e.endStroke(), this.addChild(this.progress), this.progressText = new createjs.Text("0%", "bold 24px Arial", "black"), this.progressText.x = a / 2, this.progressText.y = d + 20, this.progressText.textAlign = "center", this.progressText.textBaseline = "middle", this.addChild(this.progressText), void 0 == c && (c = "掌云游戏"), c = new createjs.Text(c, "bold 66px Arial", "black"), c.x = a / 2, c.y = 150, c.textAlign = "center", this.addChild(c), c = new createjs.Text("微信公众号: 掌云游戏", "38px Arial", "black"), c.x = a / 2, c.y = 260, c.textAlign = "center", this.addChild(c), c = new createjs.Text("©2014 掌云游戏\nzygames.sinaapp.com", "32px Arial", "black"), c.x = a / 2, c.y = b-100, c.textAlign = "center", this.addChild(c)
}
function RepeatedImgLayer(a, b, c, d) {
    this.initialize(), d = a.width + d, b += d, this.graphics.bf(a).r(0, 0, b, a.height), this.setBounds(0, 0, b, a.height), this.animation = createjs.Tween.get(this, {
        loop: !0
    }).to({
        x: - d
    }, d / c * 1e3), this.do_cache()
}
function Qp_s() {
    this.initialize();
    var a = Qp_s.origin.clone();
    this.addChild(a);
    var b = Qp_s.origin.clone();
    b.y = a.image.height + Qp_s.qp_t, this.addChild(b), this.regX = Qp_s.qp_u, this.regY = a.image.height + Qp_s.qp_t / 2, this.do_cache()
}
function Qp_z() {
    this.initialize(), this.qp_y = [], this.qp_A = [], this.qp_B = 0;
    var a = new createjs.Bitmap(qipaStage.queue.getResult("bg"));
    this.addChild(a), a = {
        framerate: 10,
        images: [qipaStage.queue.getResult("main")],
        frames: {
            width: 78,
            height: 72,
            regX: 39,
            regY: 40
        },
        animations: {
            flap: [0, 3, !0]
        }
    }, a = new createjs.SpriteSheet(a), a = this.bird = new createjs.Sprite(a), a.x = qp_c;
    var b = this.tree = new RepeatedImgLayer(qipaStage.queue.getResult("far"), W, .3 * qp_k, 0);
    b.regY = b.getBounds().height;
    var c = this.ground = new RepeatedImgLayer(qipaStage.queue.getResult("ground"), W, qp_k, 0);
    c.name = "ground", c.y = H, c.regY = c.getBounds().height, b.y = H - c.regY + 40, b.setPaused(!0), c.setPaused(!0), this.addChild(b, a, c), b = this.scoreText = new Qp_C, this.addChild(b), b.visible=!1, this.reset(), b = qp_i / qp_j * 1e3, a.shake = createjs.Tween.get(a, {
        loop: !0,
        paused: !0
    }).to({
        y: a.y + qp_i
    }, b).to({
        y: a.y
    }, b), a = this.mask = new createjs.Shape, a.graphics.f("white").r(0, 0, W, H), a.visible=!1, this.addChild(a), this.bird.size = .4 * this.bird.getBounds().height, this.GROUND_Y = H - this.ground.getBounds().height + 18, this.HIT_GROUND_Y = this.GROUND_Y - this.bird.size, Qp_s.setup(this.GROUND_Y)
}
function Qp_C() {
    this.initialize();
    var a = new createjs.Bitmap(qipaStage.queue.getResult("score"));
    a.x = a.y = 12, this.addChild(a), this.scoreText = new createjs.Text("0", "bold 48px Arial", "#ff9d36"), this.scoreText.stroke = "white", this.scoreText.textBaseline = "middle", this.scoreText.x = a.image.width + a.x + 12, this.scoreText.y = a.y + a.image.height / 2, this.addChild(this.scoreText), this.do_cache()
}
function Qp_E(a, b) {
    if (this.initialize(), b) {
        var c = new createjs.Bitmap(b);
        c.regX = b.width / 2, c.regY = b.height / 2, this.addChild(c)
    }
    c = new createjs.Bitmap(a), c.regX = a.width / 2, c.regY = a.height / 2, this.addChild(c)
}
function Qp_F() {
    this.initialize();
    var a = new createjs.Bitmap(qipaStage.queue.getResult("gameOver"));
    this.addChild(a);
    var a = this.score = new createjs.Text(0, "bold 60px Arial", "#5f9d2e"), b = this.best = new createjs.Text(0, "bold 60px Arial", "#5f9d2e");
    a.textAlign = b.textAlign = "center", a.x = b.x = 320, a.y = 230, b.y = 410, this.addChild(a, b)
}
function Qp_G() {
    var a = new createjs.Bitmap(qipaStage.queue.getResult("logo"));
    a.name = "logo", a.x = (W - a.image.width) / 2, a.y = .24 * H, this.addChild(a), a = this.gameOver = new Qp_F, a.regX = a.getBounds().width / 2, a.x = W / 2, a.y = .05 * H, a.visible=!1, this.addChild(a), a = new Qp_E(qipaStage.queue.getResult("start"), qipaStage.queue.getResult("tag")), a.on("click", qp_H);
    var b = new Qp_E(qipaStage.queue.getResult("top"), qipaStage.queue.getResult("tag"));
    b.on("click", function() {
        _czc.push(["_trackEvent", "Btn", "Rank"]), window.open(APP_LIST_URL)
    });
    var c = .3 * W;
    a.x = c, b.x = W - c, a.y = b.y = .72 * H, this.addChild(a, b), a = new createjs.Bitmap(qipaStage.queue.getResult("share")), a.name = "share", a.regX = a.image.width / 2, a.regY = a.image.height, a.x = W / 2, a.y = H-80, a.on("click", function(a) {
        IS_TOUCH && a.nativeEvent instanceof MouseEvent || qipaStage.showShareTip()
    }), a.visible=!1, this.addChild(a), this.do_cache()
}
function qp_I() {
    IS_ANDROID && (createjs.Sound.registMySound("hit", 0), createjs.Sound.registMySound("ding", 2), createjs.Sound.registMySound("flap", 4), createjs.Sound.registMySound("over", 6)), qp_p = new Qp_z, qp_p.setShowMask(!0), qipaStage.stage.addChild(qp_p), qp_q = new Qp_G, qipaStage.stage.addChild(qp_q), qipaStage.stage.addEventListener("stagemousedown", click), qp_J()
}
function update(a) {
    qp_p.update(a.delta / 1e3)
}
function click(a) {
    if (!(IS_TOUCH && a.nativeEvent instanceof MouseEvent))
        switch (qp_r) {
        case qp_h:
            qp_K();
            break;
        case qp_f:
            qp_p.flap()
        }
}
function qp_K() {
    qp_r = qp_f, qp_p.bird.shake.setPaused(!0), qp_p.flap(), createjs.Ticker.addEventListener("tick", window.update)
}
function qp_H() {
    qp_r = qp_h, qipaApp.score = 0, qipaApp.newRecord=!1, qp_q.startGame(), qp_p.ready(), qipaApp.onGameStarted()
}
function qp_D() {
    createjs.Ticker.off("tick", window.update), qp_r = qp_e, createjs.Sound.play("over"), qp_q.gameover(), qipaApp.onNewScore(qipaApp.score), qipaApp.onGameOver(), qp_J()
}
function qp_J() {
    if (qipaShare.title = "【不死鸟】虐心小游戏重磅来袭！赶紧来玩玩看~", 0 == qipaApp.score)
        qipaShare.desc = qipaShare.title;
    else {
        console.log("游戏分数：", qipaApp.score);
        var a = parseInt(Math.sqrt(1e4 * qipaApp.score / 50));
        a > 99 && (a = "99.9"), document.title = "【不死鸟】，我蹦了" + qipaApp.score + "个，击败了" + a + "%的玩家，不服来战！", qipaShare.desc = "【不死鸟】，我蹦了" + qipaApp.score + "个，击败了" + a + "%的玩家，不服来战！"
    }
}
if (void 0 == QIPA_DEBUG)
    var QIPA_DEBUG=!1;
if (void 0 == GID)
    var GID = "qipa";
if (void 0 == APP_API_URL)
    var APP_API_URL = /localhost/.test(location.host) ? "http://localhost:8000/": "http://zygames.sinaapp.com/?from=TheSecularBird";
if (void 0 == APP_LIST_URL)
    var APP_LIST_URL = "http://zygames.sinaapp.com/?from=TheSecularBird";
if (void 0 == APP_FOLLOW_URL)
    var APP_FOLLOW_URL = "http://mp.weixin.qq.com/s?__biz=MzA5Mjk5NDcwOQ==&mid=200385035&idx=1&sn=935a0a699d3fca37a243e6b64c9dc85a#rd";
if (void 0 == ENABLE_SHARE)
    var ENABLE_SHARE=!0;
if (void 0 == ENABLE_LB)
    var ENABLE_LB=!0;
var APP_DEPLOYMENT = "WX", IS_IOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?!0 : !1, IS_ANDROID =- 1 < navigator.userAgent.indexOf("Android"), KEY_MY_ID = "myid", KEY_FOLLOWED = "flw", KEY_BEST_SUFFIX = ":best";
qipaShare = {
    title: GID,
    desc: GID,
    link: "http://zygames.sinaapp.com/?from=share",
    imgUrl: "http://zygames.sinaapp.com/the-secular-bird/logo.png"
}, document.addEventListener("WeixinJSBridgeReady", function() {
    APP_DEPLOYMENT = "WX", WeixinJSBridge.call("showOptionMenu"), WeixinJSBridge.call("hideToolbar"), WeixinJSBridge.on("menu:share:appmessage", function() {
        WeixinJSBridge.invoke("sendAppMessage", {
            title: qipaShare.title,
            desc: qipaShare.desc,
            link: qipaShare.link,
            img_url: qipaShare.imgUrl
        }, function() {
            _czc.push(["_trackEvent", "User", "ShareToSomebody", "Score", qipaApp.score])
        })
    }), WeixinJSBridge.on("menu:share:timeline", function() {
        WeixinJSBridge.invoke("shareTimeline", {
            title: qipaShare.desc,
            desc: qipaShare.desc,
            link: qipaShare.link,
            img_url: qipaShare.imgUrl
        }, function() {
            _czc.push(["_trackEvent", "User", "ShareToCircle", "Score", qipaApp.score])
        })
    }), WeixinJSBridge.on("menu:share:weibo", function() {
        WeixinJSBridge.invoke("shareWeibo", {
            content: qipaShare.desc,
            url: qipaShare.link
        }, function() {
            _czc.push(["_trackEvent", "User", "ShareToWeibo", "Score", qipaApp.score])
        })
    })
}), function(a) {
    var b = APP_API_URL + "social/", c = location.search ? location.search + "&callback=?": "?callback=?", d = GID + KEY_BEST_SUFFIX;
    a.myPid = function() {
        return a.storage.get(KEY_MY_ID)
    }, a.isFollowed = function() {
        return a.storage.get(KEY_FOLLOWED)
    }, a.updateLoginInfo = function(b, c) {
        qipaLog("updateLoginInfo"), qipaLog("pid: " + b), qipaLog("followed: " + c), b && b != a.storage.get(KEY_MY_ID) && a.storage.set(KEY_MY_ID, b), b && b != a.storage.get(KEY_FOLLOWED) && a.storage.set(KEY_FOLLOWED, c)
    }, a.onNewScore = function(b) {
        ENABLE_LB && (b > a.best && (newRecord=!0, b > a.best && (a.best = b, a.storage.set(d, a.best))), b > SCORE_LIMIT && a.uploadScore(b))
    }, a.storage = a.storage || {}, a.storage.get = function(a) {
        try {
            if (a in localStorage)
                return localStorage[a]
        } catch (b) {}
        return $.cookie(a)
    }, a.storage.set = function(a, b) {
        try {
            return localStorage[a] = b, !0
        } catch (c) {}
        return $.cookie(a, b, {
            expires: 365
        }), !0
    }, a.score = 0, a.best = a.storage.get(d) || 0, a.newRecord=!1, a.newscore_wxoauth = function(b) {
        b = APP_API_URL + "wxoauth/newscore/" + GID + "/?score=" + b + "&callback=?", qipaLog(b), $.getJSON(b).done(function(b) {
            "wxoauth_needed" == b.error ? qipaLog("upload score failed. wxoauth_needed.") : a.updateLoginInfo(b.pid, b.subscribed)
        })
    }, a.uploadScore = function(b) {
        b = APP_API_URL + "newscore/" + GID + "/" + b + "/?callback=?", qipaLog(b), $.getJSON(b).done(function(b) {
            qipaLog(b), "wxoauth_needed" == b.error ? qipaLog("upload score failed. wxoauth_needed.") : a.updateLoginInfo(b.pid, b.subscribed)
        })
    }, a.startOAuth = function() {
        qipaLog(APP_API_URL + "wxoauth_start"), window.open(APP_API_URL + "wxoauth_start")
    }, a.leaderboard = function(a, b, c) {
        qipaLog(APP_API_URL + "leaderboard/" + b + "/" + c + "?callback=?"), $.getJSON(APP_API_URL + "leaderboard/" + b + "/" + c + "?callback=?", a)
    }, a.onGameInit = function() {}, a.onGameStarted = function() {
        console.log("开始游戏..."), _czc.push(["_trackEvent", "Btn", "StartGame"]), qipaStage.showFollowAnim(!1)
    }, a.onGameOver = function() {
        console.log("游戏结束..."), console.log("游戏分数：", qipaApp.score), _czc.push(["_trackEvent", "Game", "Over", "Score", qipaApp.score]), qipaStage.showFollowAnim(!0)
    }, a.social = a.social || {}, a.social.chongzhi = function(a) {
        qipaLog(b + "chongzhi" + c), $.getJSON(b + "chongzhi" + c, a)
    }, a.social.startOAuth = function(a) {
        a = encodeURIComponent(a), qipaLog(b + "wxoauth_start/?ret=" + a), window.open(b + "wxoauth_start/?ret=" + a)
    }, a.social.viewMe = function(a) {
        qipaLog(b + "me" + c), $.getJSON(b + "me" + c, a)
    }, a.social.viewPlayer = function(a, d) {
        qipaLog(b + "view" + c + "&pid=" + d), $.getJSON(b + "view" + c + "&pid=" + d, a)
    }, a.social.searchPlayer = function(a, d) {
        qipaLog(b + "search" + c + "&qstr=" + encodeURIComponent(d)), $.getJSON(b + "search" + c + "&qstr=" + encodeURIComponent(d), a)
    }, a.social.friendList = function(a) {
        qipaLog(b + "frdlist" + c), $.getJSON(b + "frdlist" + c, a)
    }, a.social.mywall = function(a) {
        qipaLog(b + "mywall" + c), $.getJSON(b + "mywall" + c, a)
    }, a.social.peerwall = function(a, d) {
        qipaLog(b + "wall" + c + "&pid=" + d), $.getJSON(b + "wall" + c + "&pid=" + d, a)
    }, a.social.conversation = function(a, d) {
        qipaLog(b + "conversation" + c + "&pid=" + d), $.getJSON(b + "conversation" + c + "&pid=" + d, a)
    }, a.social.wallAdd = function(a, d, e) {
        qipaLog(b + "walladd" + c + "&pid=" + e), $.getJSON(b + "walladd" + c + "&pid=" + e + "&msg=" + encodeURIComponent(d), a)
    }, a.social.wallDel = function(a, d) {
        qipaLog(b + "walldel" + c + "&msgid=" + d), $.getJSON(b + "walldel" + c + "&msgid=" + d, a)
    }, a.social.friendDel = function(a, d) {
        qipaLog(b + "frddel" + c + "&pid=" + d), $.getJSON(b + "frddel" + c + "&pid=" + d, a)
    }, a.social.friendAdd = function(a, d) {
        qipaLog(b + "frdadd" + c + "&pid=" + d), $.getJSON(b + "frdadd" + c + "&pid=" + d, a)
    }, a.social.friendBlack = function(a, d) {
        qipaLog(b + "frdblack" + c + "&pid=" + d), $.getJSON(b + "frdblack" + c + "&pid=" + d, a)
    }, a.leaderboard = function(a, b, c) {
        qipaLog(APP_API_URL + "leaderboard/" + b + "/" + c + "?callback=?"), $.getJSON(APP_API_URL + "leaderboard/" + b + "/" + c + "?callback=?", a)
    }
}(window.qipaApp = window.qipaApp || {});
var W = 640, H = 1e3, IS_TOUCH, SCREEN_SHOW_ALL=!0;
!function(a, b) {
    function c() {
        var b = a.stage.canvas, c = window.innerWidth, d = window.innerHeight;
        if (SCREEN_SHOW_ALL)
            c / d > W / H ? c = W * d / H : d = H * c / W, b.style.marginTop = 0;
        else {
            var e = W * d / H;
            c >= e ? (c = e, stage.x = 0) : stage.x = (c - e) / 2
        }
        b.width = W, b.height = H, b.style.width = c + "px", b.style.height = d + "px"
    }
    var d = null, e = null, f = null, g = null, h = null;
    a.stage = null, a.queue = null, a.init = function(c) {
        h = c, IS_ANDROID && (createjs.Sound.play = function(c, e) {
            var f = a.queue.getResult("sound");
            f.currentTime = this.soundSprite[c], f.play(), e != b && 1 == e && (null != d && (clearTimeout(d), d = null), d = setTimeout(function() {
                createjs.Sound.play("silenttail")
            }, 1e3))
        }, createjs.Sound.registMySound = function(a, b) {
            this.soundSprite || (this.soundSprite = {}), this.soundSprite[a] = b
        })
    }, window.onload = function() {
        if (a.stage = new createjs.Stage("stage"), a.queue = new createjs.LoadQueue(!1)
            , a.queue.setMaxConnections(30), IS_TOUCH = createjs.Touch.isSupported()) {
            createjs.Touch.enable(a.stage, !0), a.stage.mouseEnabled=!1;
            var b = new createjs.Shape;
            b.graphics.f("white").r(0, 0, W, H), a.stage.addChild(b)
        }
        createjs.Ticker.setFPS(60), setTimeout(c, 100), createjs.Ticker.on("tick", a.stage), b = new MyProgressBar(W, H), a.stage.addChild(b), a.queue.on("complete", h.startFunc, null, !0), h.img && a.queue.loadManifest(h.img, !1), h.audio && (IS_ANDROID ? a.queue.loadFile({
            id: "sound",
            src: "assets_201408191300/audio/all.mp3"
        }) : (createjs.Sound.alternateExtensions = ["ogg"], a.queue.installPlugin(createjs.Sound), a.queue.loadManifest(h.audio, !1))), h.noshare || a.queue.loadManifest({
            path: "assets_201408191300/images/",
            manifest: [{
                src: "share_tip.png",
                id: "share_tip"
            }
            ]
        }, !1), h.followed || a.queue.loadManifest({
            path: "assets_201408191300/images/",
            manifest: [{
                src: "follow_anim.png",
                id: "follow"
            }
            ]
        }, !1), b.forQueue(a.queue), a.queue.load()
    }, window.onresize = c, createjs.DisplayObject.prototype.do_cache = function() {
        var a = this.getBounds();
        this.cache(a.x, a.y, a.width, a.height)
    }, a.showShareTip = function() {
        if (!h.noshare) {
            if (null == e) {
                e = new createjs.Container;
                var b = new createjs.Shape;
                b.graphics.f("#000").r(0, 0, W, H).ef(), b.alpha = .9, e.addChild(b), b = new createjs.Bitmap(a.queue.getResult("share_tip")), b.x = W - b.getBounds().width, b.y = 0, e.addChild(b), e.on("click", function(b) {
                    _czc.push(["_trackEvent", "Btn", "ShowShareTips"]), IS_TOUCH && b.nativeEvent instanceof MouseEvent || a.stage.removeChild(e)
                })
            }
            a.stage.addChild(e)
        }
    }, a.showFollowAnim = function(b) {
        if (a.showMoreGames(b), !h.followed) {
            if (null == f) {
                var c = new createjs.SpriteSheet({
                    framerate: 10,
                    images: [a.queue.getResult("follow")],
                    frames: {
                        width: 170,
                        height: 150
                    },
                    animations: {
                        show: [0, 4, !0]
                    }
                });
                f = new createjs.Sprite(c), f.y = H, f.name = "follow", f.on("click", function(a) {
                    _czc.push(["_trackEvent", "Btn", "PleaseFocus"]), a.stopImmediatePropagation(), IS_TOUCH && a.nativeEvent instanceof MouseEvent || window.open(APP_FOLLOW_URL)
                })
            } else 
                a.stage.removeChild(f);
            a.stage.addChild(f), c = f.getBounds(), b ? (f.play(), createjs.Tween.get(f).to({
                regX: c.width,
                regY: 0,
                visible: !0
            }).to({
                regX: 0,
                regY: c.height
            }, 200)) : createjs.Tween.get(f).to({
                regX: c.width,
                regY: 0
            }, 200).to({
                visible: !1
            }).call(function() {
                f.stop()
            })
        }
    }, a.showMoreGames = function(b) {
        if (null == g) {
            g = new createjs.Text("【更多掌云游戏】", "28px Arial", "#404040"), g.textAlign = "right", g.textBaseline = "bottom", g.x = W-15, g.y = H-15;
            var c = new createjs.Shape, d = g.getBounds();
            c.graphics.beginFill("#000").rect(0, 0, - d.width, - d.height), g.hitArea = c, g.on("click", function(a) {
                _czc.push(["_trackEvent", "Btn", "ShowMoreGames"]), a.stopImmediatePropagation(), IS_TOUCH && a.nativeEvent instanceof MouseEvent || window.open(APP_LIST_URL)
            }), g.name = "moreGames"
        } else 
            a.stage.removeChild(g);
        a.stage.addChild(g), g.visible = b
    }
}(window.qipaStage = window.qipaStage || {}), MyProgressBar.prototype = new createjs.Container, MyProgressBar.prototype.completeCallback = function() {
    this.parent.removeChild(this)
}, MyProgressBar.prototype.progressCallback = function(a) {
    var b = this.progress.graphics;
    b.setStrokeStyle(0), b.beginStroke("#008000"), b.beginFill("#008000"), b.rect(80, this.h / 2, 480 * a.progress, 40), b.endFill(), b.endStroke(), this.progressText.text = "" + parseInt(100 * a.progress) + "%"
}, MyProgressBar.prototype.forQueue = function(a) {
    this.errorList = [], a.on("complete", this.completeCallback, this, !0), a.on("progress", this.progressCallback, this), a.on("error", function() {
        console.log("部分资源加载失败!")
    }, null, !0), a.on("error", function(a) {
        this.errorList.push(a.item.src)
    }, this)
};
var qp_a = 180 / 3.14, qp_b = H / 2, qp_c = W / 4, qp_h = 1, qp_f = 2, qp_g =- 2, qp_e =- 1, qp_d =- 10, qp_i = 10, qp_j = 20, qp_k = 240, qp_m = 2314, qp_l =- 772, qp_n = 360, qp_o = qp_n / qp_k, qp_p, qp_q, qp_r = qp_d;
RepeatedImgLayer.prototype = new createjs.Shape, RepeatedImgLayer.prototype.setPaused = function(a) {
    this.animation.setPaused(a)
}, Qp_s.setup = function(a) {
    this.origin = new createjs.Bitmap(qipaStage.queue.getResult("piller")), this.qp_u = this.origin.image.width / 2, this.qp_t = a / 3.5, this.qp_v = a / 7, this.qp_w = a - this.qp_t-2 * this.qp_v
}, Qp_s.prototype = new createjs.Container, Qp_s.prototype.init = function(a) {
    this.x = W + Qp_s.qp_u - a, this.y = Math.random() * Qp_s.qp_w + Qp_s.qp_v + Qp_s.qp_t / 2
}, Qp_s.prototype.qp_x = function(a) {
    return Math.abs(this.x - qp_c) < a.size + Qp_s.qp_u-4 && Math.abs(this.y - a.y) > Qp_s.qp_t / 2 - a.size + 8
}, Qp_z.prototype = new createjs.Container, Qp_z.prototype.reset = function() {
    this.qp_B = 0;
    for (var a in this.qp_y) {
        var b = this.qp_y[a];
        this.qp_A.push(), this.removeChild(b)
    }
    this.qp_y = [], this.bird.v = 0, this.bird.rotation = 0, this.bird.y = qp_b
}, Qp_z.prototype.flap = function() {
    0 < this.bird.y && (this.bird.v = qp_l, createjs.Sound.play("flap"))
}, Qp_z.prototype.ready = function() {
    this.bird.play(), this.scoreText.visible=!0, this.reset(), this.scoreText.setScore(qipaApp.score), this.setShowMask(!1), this.bird.shake.setPaused(!1), this.ground.setPaused(!1), this.tree.setPaused(!1)
}, Qp_z.prototype.update = function(a) {
    var b = qp_m * a;
    if (this.bird.y += this.bird.v * a, this.bird.v += b, b = Math.atan(this.bird.v / qp_k) * qp_a * .5, this.bird.rotation = b, b=!1, qp_r == qp_f) {
        if (this.qp_B >= qp_o) {
            this.qp_B -= qp_o;
            var c = 0 < this.qp_A.length ? this.qp_A.pop(): new Qp_s;
            c.init(this.qp_B * qp_k), this.qp_y.push(c), this.addChildAt(c, 2)
        }
        var d, e = a * qp_k, f=!1;
        for (d in this.qp_y) {
            var c = this.qp_y[d], g = c.x >= qp_c;
            c.x -= e, g && c.x < qp_c && this.getPoint(), 0 == d && c.x<=-Qp_s.qp_u ? (this.removeChild(c), f=!0) : b || (b = c.qp_x(this.bird))
        }
        f && this.qp_A.push(this.qp_y.shift()), this.qp_B += a
    }
    b ? this.hit() : this.bird.y > this.HIT_GROUND_Y && this.gameover()
}, Qp_z.prototype.hit = function() {
    qp_r = qp_g, this.bird.v = 0, createjs.Sound.play("hit"), this.ground.setPaused(!0), this.tree.setPaused(!0), this.bird.stop()
}, Qp_z.prototype.gameover = function() {
    this.scoreText.visible=!1, this.bird.y = this.HIT_GROUND_Y, this.ground.setPaused(!0), this.tree.setPaused(!0), this.bird.stop(), this.setShowMask(!0), qp_D()
}, Qp_z.prototype.setShowMask = function(a) {
    a&&!this.mask.visible ? createjs.Tween.get(this.mask).to({
        visible: !0,
        alpha: .2
    }).to({
        alpha: .7
    }, 300) : !a && this.mask.visible && createjs.Tween.get(this.mask).to({
        alpha: 0,
        visible: !1
    }, 300)
}, Qp_z.prototype.getPoint = function() {
    createjs.Sound.play("ding"), qipaApp.score++, this.scoreText.setScore(qipaApp.score)
}, Qp_C.prototype = new createjs.Container, Qp_C.prototype.setScore = function(a) {
    this.scoreText.text = a + "", this.uncache(), this.do_cache()
}, Qp_E.prototype = new createjs.Container, Qp_F.prototype = new createjs.Container, Qp_F.prototype.gameover = function() {
    this.score.text = qipaApp.score, this.best.text = qipaApp.best
}, Qp_G.prototype = new createjs.Container, Qp_G.prototype.startGame = function() {
    if (this.visible=!1, !this.gameOver.visible) {
        var a = this.getChildByName("logo");
        this.removeChild(a), this.getChildByName("share").visible=!0, this.gameOver.visible=!0, this.uncache(), this.do_cache()
    }
}, Qp_G.prototype.gameover = function() {
    this.visible=!0, this.gameOver.gameover(), this.updateCache()
};
var _cfg = {
    startFunc: qp_I,
    followed: !1,
    img: {
        path: "assets_201408191300/images/",
        manifest: [{
            src: "1.png",
            id: "main"
        }, {
            src: "bg_pure.jpg",
            id: "bg"
        }, {
            src: "far.png",
            id: "far"
        }, {
            src: "game_over.png",
            id: "gameOver"
        }, {
            src: "ground.png",
            id: "ground"
        }, {
            src: "logo.png",
            id: "logo"
        }, {
            src: "piller.png",
            id: "piller"
        }, {
            src: "share.png",
            id: "share"
        }, {
            src: "start.png",
            id: "start"
        }, {
            src: "top.png",
            id: "top"
        }, {
            src: "tag.png",
            id: "tag"
        }, {
            src: "score.png",
            id: "score"
        }
        ]
    },
    audio: {
        path: "assets_201408191300/audio/",
        manifest: [{
            src: "Ding1.mp3",
            id: "ding"
        }, {
            src: "Flap3.mp3",
            id: "flap"
        }, {
            src: "GameOver_lose.mp3",
            id: "over"
        }, {
            src: "Hit.mp3",
            id: "hit"
        }
        ]
    }
};
qipaStage.init(_cfg);
