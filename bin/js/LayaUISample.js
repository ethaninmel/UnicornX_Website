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
        _this.moveani = [_this.move, _this.termmove, _this.docmove, _this.whymove, _this.roadmapmove];
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
        Laya.init(715, 402, WebGL);
        //设置适配模式
        Laya.stage.width = 715;
        Laya.stage.height = 402;
        Laya.stage.scaleMode = "showall";
        //设置横竖屏
        Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
        //设置水平对齐
        Laya.stage.alignH = "center";
        //设置垂直对齐
        Laya.stage.alignV = "middle";
        _this.menu.zOrder = 1;
        _this.onBtnPageClick(_this.why, _this.whymove, "comp/bg.png");
        _this.stage.on(Laya.Event.MOUSE_WHEEL, _this, _this.onMousewheel);
        _this.tab_lan.on(Laya.Event.CLICK, _this, _this.onBtnPageClick, [_this.language, _this.move, "comp/bg.png"]);
        _this.tab_roadmap.on(Laya.Event.CLICK, _this, _this.onBtnPageClick, [_this.roadmap, _this.roadmapmove, "comp/bg_pure.png"]);
        _this.tab_term.on(Laya.Event.CLICK, _this, _this.onBtnPageClick, [_this.term, _this.termmove, "comp/bg_pure.png"]);
        _this.tab_why.on(Laya.Event.CLICK, _this, _this.onBtnPageClick, [_this.why, _this.whymove, "comp/bg.png"]);
        _this.tab_doc.on(Laya.Event.CLICK, _this, _this.onBtnPageClick, [_this.doc, _this.docmove, "comp/bg.png"]);
        _this.road0.on(Laya.Event.CLICK, _this, _this.onBtnRoadClick, [0]);
        _this.road1.on(Laya.Event.CLICK, _this, _this.onBtnRoadClick, [1]);
        _this.road2.on(Laya.Event.CLICK, _this, _this.onBtnRoadClick, [2]);
        _this.road3.on(Laya.Event.CLICK, _this, _this.onBtnRoadClick, [3]);
        _this.road4.on(Laya.Event.CLICK, _this, _this.onBtnRoadClick, [4]);
        _this.right_arrow.on(Laya.Event.CLICK, _this, _this.onBtnArrowClick, [1]);
        _this.left_arrow.on(Laya.Event.CLICK, _this, _this.onBtnArrowClick, [-1]);
        return _this;
        //this.testlink.on(Laya.Event.CLICK,this,this.onLink,["comp/bg_pure.png"]);
        //Laya.timer.once(2000,this,this.loadingScene);
    }
    TestUI.prototype.loadingScene = function () {
        this.loading.alpha = 0;
    };
    TestUI.prototype.onMousewheel = function (e) {
        var newy;
        if (e.delta > 0) {
            newy = this.y + 10;
            if (newy > 0)
                return;
            this.y = newy;
        }
        if (e.delta < 0) {
            newy = this.y - 10;
            if (newy < -this.height / 2)
                return;
            this.y = newy;
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
    TestUI.prototype.onBtnPageClick = function (page, pagemove, bg) {
        var i;
        for (i = 0; i < this.moveani.length; i++) {
            if (this.moveani[i] == pagemove) {
                continue;
            }
            if (this.moveani[i].isPlaying) {
                return;
            }
        }
        if (this.curtabpanel != page) {
            if (this.curtabpanel)
                this.curtabpanel.y = 804;
            pagemove.play(0, false);
        }
        this.curtabpanel = page;
        this.background.skin = bg;
    };
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
Laya.init(600, 400);
//激活资源版本控制
// Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
function onLoaded() {
    //实例UI界面
    var testUI = new TestUI();
    Laya.stage.addChild(testUI);
}
//# sourceMappingURL=LayaUISample.js.map