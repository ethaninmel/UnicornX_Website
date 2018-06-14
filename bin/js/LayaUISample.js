var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var test = ui.test.TestPageUI;
var Label = Laya.Label;
var Handler = Laya.Handler;
var Loader = Laya.Loader;
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Rectangle = Laya.Rectangle;
var TestUI = /** @class */ (function (_super) {
    __extends(TestUI, _super);
    function TestUI() {
        var _this = _super.call(this) || this;
        //public moveani:ui.test.moveupUI[]=[this.move,this.termmove,this.docmove,this.whymove,this.roadmapmove];
        _this.why_card_curindex = 0;
        _this.why_cards = [_this.why_card0, _this.why_card1, _this.why_card2, _this.why_card3];
        _this.leftdises = [_this.left_dis0, _this.left_dis1, _this.left_dis2, _this.left_dis3];
        _this.leftdowns = [_this.left_down0, _this.left_down1, _this.left_down2, _this.left_down3];
        _this.rightdises = [_this.right_dis0, _this.right_dis1, _this.right_dis2, _this.right_dis3];
        _this.rightdowns = [_this.right_down0, _this.right_down1, _this.right_down2, _this.right_down3];
        _this.leftapps = [_this.left_app0, _this.left_app1, _this.left_app2, _this.left_app3];
        _this.leftups = [_this.left_up0, _this.left_up1, _this.left_up2, _this.left_up3];
        _this.rightapps = [_this.right_app0, _this.right_app1, _this.right_app2, _this.right_app3];
        _this.rightups = [_this.right_up0, _this.right_up1, _this.right_up2, _this.right_up3];
        _this.currentTokensale = 1;
        Laya.init(1920, 1080, WebGL);
        //设置适配模式
        Laya.stage.width = 1920;
        Laya.stage.height = 1080;
        Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;
        //设置横竖屏
        Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
        //设置水平对齐
        Laya.stage.alignH = "center";
        //设置垂直对齐
        Laya.stage.alignV = "middle";
        _this.menu.zOrder = 1;
        //this.onBtnPageClick(this.why,this.whymove,"comp/bg.png");
        //console.log(this.mask.x);
        //console.log(this.bar_head.x);
        console.log();
        _this.stage.on(Laya.Event.MOUSE_WHEEL, _this, _this.onMousewheel);
        // this.tab_lan.on(Laya.Event.CLICK,this,this.onBtnPageClick,[this.language,this.move,"comp/bg.png"]);
        // this.tab_roadmap.on(Laya.Event.CLICK,this,this.onBtnPageClick,[this.roadmap,this.roadmapmove,"comp/bg_pure.png"]);
        // this.tab_term.on(Laya.Event.CLICK,this,this.onBtnPageClick,[this.term,this.termmove,"comp/bg_pure.png"]);
        // this.tab_why.on(Laya.Event.CLICK,this,this.onBtnPageClick,[this.why,this.whymove,"comp/bg.png"]);
        // this.tab_doc.on(Laya.Event.CLICK,this,this.onBtnPageClick,[this.doc,this.docmove,"comp/bg.png"]);
        _this.tab_why.on(Laya.Event.CLICK, _this, _this.onNavClick, ["why"]);
        _this.tab_tokensale.on(Laya.Event.CLICK, _this, _this.onNavClick, ["tokensale"]);
        _this.tab_roadmap.on(Laya.Event.CLICK, _this, _this.onNavClick, ["roadmap"]);
        _this.tab_founder.on(Laya.Event.CLICK, _this, _this.onNavClick, ["founder"]);
        _this.tab_advisor.on(Laya.Event.CLICK, _this, _this.onNavClick, ["advisor"]);
        //this.tab_term.on(Laya.Event.CLICK,this,this.onNavClick,["term"]);
        //this.tab_doc.on(Laya.Event.CLICK,this,this.onNavClick,["doc"]);
        // this.road0.on(Laya.Event.CLICK,this,this.onBtnRoadClick,[0]);
        // this.road1.on(Laya.Event.CLICK,this,this.onBtnRoadClick,[1]);
        // this.road2.on(Laya.Event.CLICK,this,this.onBtnRoadClick,[2]);
        // this.road3.on(Laya.Event.CLICK,this,this.onBtnRoadClick,[3]);
        // this.road4.on(Laya.Event.CLICK,this,this.onBtnRoadClick,[4]);
        // this.right_arrow.on(Laya.Event.CLICK,this,this.onBtnArrowClick,[1]);
        // this.left_arrow.on(Laya.Event.CLICK,this,this.onBtnArrowClick,[-1]);
        //this.testlink.on(Laya.Event.CLICK,this,this.onLink,["comp/bg_pure.png"]);
        //Laya.timer.once(2000,this,this.loadingScene);
        _this.phase1.on(Laya.Event.CLICK, _this, _this.switchTokensale, [1]);
        _this.phase2.on(Laya.Event.CLICK, _this, _this.switchTokensale, [2]);
        _this.phase3.on(Laya.Event.CLICK, _this, _this.switchTokensale, [3]);
        _this.phase4.on(Laya.Event.CLICK, _this, _this.switchTokensale, [4]);
        Laya.timer.loop(1000, _this, _this.countdown);
        _this.roadmap.on(Laya.Event.CLICK, _this, _this.roadmapAction);
        return _this;
    }
    TestUI.prototype.switchTokensale = function (clickNumber) {
        console.log("click" + clickNumber);
        if (!this.ani_1to2.isPlaying && !this.ani_2to3.isPlaying && !this.ani_3to4.isPlaying && !this.ani_4to3.isPlaying && !this.ani_3to2.isPlaying && !this.ani_2to1.isPlaying) {
            switch (clickNumber) {
                case 1:
                    if (this.currentTokensale == 2) {
                        this.ani_2to1.play(0, false);
                        this.currentTokensale = 1;
                        this.phase1.mouseEnabled = true;
                        this.phase2.mouseEnabled = true;
                        this.phase3.mouseEnabled = false;
                        this.phase4.mouseEnabled = false;
                    }
                    break;
                case 2:
                    if (this.currentTokensale == 1) {
                        this.ani_1to2.play(0, false);
                        this.currentTokensale = 2;
                        this.phase1.mouseEnabled = true;
                        this.phase2.mouseEnabled = true;
                        this.phase3.mouseEnabled = true;
                        this.phase4.mouseEnabled = false;
                    }
                    else if (this.currentTokensale == 3) {
                        this.ani_3to2.play(0, false);
                        this.currentTokensale = 2;
                        this.phase1.mouseEnabled = true;
                        this.phase2.mouseEnabled = true;
                        this.phase3.mouseEnabled = true;
                        this.phase4.mouseEnabled = false;
                    }
                    break;
                case 3:
                    if (this.currentTokensale == 4) {
                        this.ani_4to3.play(0, false);
                        this.currentTokensale = 3;
                        this.phase1.mouseEnabled = false;
                        this.phase2.mouseEnabled = true;
                        this.phase3.mouseEnabled = true;
                        this.phase4.mouseEnabled = true;
                    }
                    else if (this.currentTokensale == 2) {
                        this.ani_2to3.play(0, false);
                        this.currentTokensale = 3;
                        this.phase1.mouseEnabled = false;
                        this.phase2.mouseEnabled = true;
                        this.phase3.mouseEnabled = true;
                        this.phase4.mouseEnabled = true;
                    }
                    break;
                case 4:
                    if (this.currentTokensale == 3) {
                        this.ani_3to4.play(0, false);
                        this.phase1.mouseEnabled = false;
                        this.phase2.mouseEnabled = false;
                        this.phase3.mouseEnabled = true;
                        this.phase4.mouseEnabled = true;
                        this.currentTokensale = 4;
                    }
                    break;
            }
        }
    };
    TestUI.prototype.countdown = function () {
        var time = new Date("2018-06-30").valueOf() - new Date().valueOf();
        var day = Math.floor(time / 86400000);
        var hour = Math.floor((time - day * 86400000) / 3600000);
        var minute = Math.floor((time - day * 86400000 - hour * 3600000) / 60000);
        var second = Math.floor((time - day * 86400000 - hour * 3600000 - minute * 60000) / 1000);
        if (day >= 0 && day < 10) {
            this.day1.index = day;
        }
        if (day > 10) {
            this.day1.index = Math.floor(day % 10);
            this.day2.index = Math.floor(day / 10);
        }
        if (hour >= 0 && hour < 10) {
            this.hour1.index = Math.floor(hour);
        }
        if (hour > 10) {
            this.hour1.index = Math.floor(hour % 10);
            this.hour2.index = Math.floor(hour / 10);
        }
        if (minute >= 0 && minute < 10) {
            this.minute2.index = 0;
            this.minute1.index = Math.floor(minute);
        }
        if (minute > 10) {
            this.minute1.index = Math.floor(minute % 10);
            this.minute2.index = Math.floor(minute / 10);
        }
        if (second >= 0 && second < 10) {
            this.second2.index = 0;
            this.second1.index = Math.floor(second);
        }
        if (second > 10) {
            this.second1.index = Math.floor(second % 10);
            this.second2.index = Math.floor(second / 10);
        }
        this.mask_bar.graphics.drawRect(0, 0, ((100 - day) / 100) * 1110, 68, "#ffffff");
    };
    TestUI.prototype.roadmapAction = function () {
        this.ani3.stop();
        this.ani2.play(0, false);
        this.roadmap.mouseEnabled = false;
        Laya.timer.once(5000, this, this.playPoint1);
    };
    TestUI.prototype.playPoint1 = function () {
        this.ani_toPoint1.play(0, false);
        this.roadmap_point2.mouseEnabled = true;
        this.roadmap_point3.mouseEnabled = true;
        this.roadmap_point4.mouseEnabled = true;
    };
    TestUI.prototype.onNavClick = function (item) {
        var position = 0;
        switch (item) {
            case "why":
                position = 0;
                break;
            case "tokensale":
                position = -(this.height + 50) * 1;
                break;
            case "roadmap":
                position = -(this.height + 50) * 3;
                break;
            case "founder":
                position = -(this.height + 50) * 4;
                break;
            case "advisor":
                position = -(this.height + 50) * 5;
                break;
        }
        console.log(this.page.y);
        console.log(position);
        Laya.timer.loop(10, this, this.onNav, [position]);
    };
    TestUI.prototype.onNav = function (position) {
        console.log(this.page.y);
        console.log(position);
        if (Math.abs(this.page.y - position) < 70) {
            this.page.y -= this.page.y - position;
            Laya.timer.clear(this, this.onNav);
            console.log(1);
        }
        else if (this.page.y > position) {
            this.page.y -= 80;
            console.log(2);
        }
        else if (this.page.y <= position) {
            this.page.y += 80;
            console.log(3);
        }
    };
    TestUI.prototype.loadingScene = function () {
        this.loading.alpha = 0;
    };
    TestUI.prototype.onMousewheel = function (e) {
        var newy;
        if (e.delta > 0) {
            newy = this.page.y + (this.height + 50) / 10;
            if (newy > 0)
                return;
            this.page.y = newy;
        }
        if (e.delta < 0) {
            newy = this.page.y - (this.height + 50) / 10;
            if (newy < -(this.height + 50) * 5)
                return;
            this.page.y = newy;
        }
        this.menu.y = -this.y;
    };
    TestUI.prototype.rightcard = function (index) {
        if ((index + 1) == this.why_cards.length) {
            return 0;
        }
        else {
            return index + 1;
        }
    };
    TestUI.prototype.leftcard = function (index) {
        if ((index - 1) < 0) {
            return this.why_cards.length - 1;
        }
        else {
            return index - 1;
        }
    };
    TestUI.prototype.onLink = function (data) {
        // TODO Auto Generated method stub
        Laya.Browser.window.open(data);
        console.log("a");
    };
    TestUI.prototype.onBtnArrowClick = function (dir) {
        this.why_cards[this.why_card_curindex].mouseEnabled = false;
        if (dir == 1) {
            this.rightdowns[this.why_card_curindex].play(0, false);
            this.rightdises[this.rightcard(this.why_card_curindex)].play(0, false);
            this.leftups[this.leftcard(this.why_card_curindex)].play(0, false);
            var tempcurindex = this.leftcard(this.why_card_curindex);
            this.leftapps[this.leftcard(tempcurindex)].play(0, false);
            this.why_card_curindex = tempcurindex;
            this.why_cards[this.why_card_curindex].mouseEnabled = true;
        }
        else {
            this.leftdowns[this.why_card_curindex].play(0, false);
            this.leftdises[this.leftcard(this.why_card_curindex)].play(0, false);
            this.rightups[this.rightcard(this.why_card_curindex)].play(0, false);
            var tempcurindex = this.rightcard(this.why_card_curindex);
            this.rightapps[this.rightcard(tempcurindex)].play(0, false);
            this.why_card_curindex = tempcurindex;
            this.why_cards[this.why_card_curindex].mouseEnabled = true;
        }
    };
    TestUI.prototype.onBtnRoadClick = function (pos) {
        this.roadmap_sec.y = 11 + (this.roadmap_bar.space + this.road0.height) * pos;
    };
    // private onBtnPageClick(page:Laya.Box,pagemove:ui.test.moveupUI,bg:string):void{
    // 	var i:number;
    // 	for (i=0;i <this.moveani.length;i++){
    // 		if (this.moveani[i]==pagemove){
    // 			continue;
    // 		}
    // 		if (this.moveani[i].isPlaying){
    // 			return;
    // 		}
    // 	}
    // 	if (this.curtabpanel!=page){
    // 		if (this.curtabpanel)
    // 			this.curtabpanel.y=804;
    // 		pagemove.play(0,false);
    // 	}
    // 	this.curtabpanel=page;
    // 	this.background.skin=bg;
    // }
    TestUI.prototype.onListRender = function (item, index) {
        //自定义list的渲染方式
        var label = item.getChildByName("label");
        if (index % 2) {
            label.color = "#ff0000";
        }
        else {
            label.color = "#000000";
        }
    };
    return TestUI;
}(ui.test.TestPageUI));
//程序入口
Laya.init(1920, 1080);
//激活资源版本控制
// Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
function onLoaded() {
    //实例UI界面
    var testUI = new TestUI();
    Laya.stage.addChild(testUI);
}
//# sourceMappingURL=LayaUISample.js.map