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
var test = ui.test.ICOUI;
var Label = laya.ui.Label;
var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
var TestUI = /** @class */ (function (_super) {
    __extends(TestUI, _super);
    function TestUI() {
        var _this = _super.call(this) || this;
        _this.stage.on(Laya.Event.MOUSE_WHEEL, _this, _this.onMousewheel);
        _this.b1.on(laya.events.Event.CLICK, _this, _this.onNavClick, ["b1"]);
        _this.b2.on(laya.events.Event.CLICK, _this, _this.onNavClick, ["b2"]);
        _this.b3.on(laya.events.Event.CLICK, _this, _this.onNavClick, ["b3"]);
        _this.b4.on(laya.events.Event.CLICK, _this, _this.onNavClick, ["b4"]);
        _this.b5.on(laya.events.Event.CLICK, _this, _this.onNavClick, ["b5"]);
        _this.b6.on(laya.events.Event.CLICK, _this, _this.onNavClick, ["b6"]);
        return _this;
    }
    TestUI.prototype.changeMouse = function () {
        Laya.Mouse.cursor = 'pointer';
        Laya.Mouse.show();
    };
    TestUI.prototype.onNavClick = function (item) {
        var position = 0;
        switch (item) {
            case "b1":
                position = 0;
                break;
            case "b2":
                position = -this.height;
                break;
            case "b3":
                position = -this.height * 2;
                break;
            case "b4":
                position = -this.height * 3;
                break;
            case "b5":
                position = -this.height * 4;
                break;
            case "b6":
                position = -this.height * 5;
                break;
        }
        Laya.timer.loop(10, this, this.onNav, [position]);
    };
    TestUI.prototype.onNav = function (position) {
        console.log(this.page.y);
        console.log(position);
        if (Math.abs(this.page.y - position) < 20) {
            this.page.y -= this.page.y - position;
            Laya.timer.clear(this, this.onNav);
            console.log(1);
        }
        else if (this.page.y > position) {
            this.page.y -= 20;
            console.log(2);
        }
        else if (this.page.y <= position) {
            this.page.y += 20;
            console.log(3);
        }
    };
    TestUI.prototype.onMousewheel = function (e) {
        var newy;
        if (e.delta > 0) {
            newy = this.page.y + 10;
            if (newy > 0)
                return;
            this.page.y = newy;
        }
        if (e.delta < 0) {
            newy = this.page.y - 10;
            if (newy < -this.height * 2)
                return;
            this.page.y = newy;
        }
        this.menu.y = -this.y;
    };
    return TestUI;
}(ui.test.ICOUI));
// 程序入口
Laya.init(1920, 1080);
Laya.stage.scaleMode = Laya.Stage.SCREEN_HORIZONTAL;
Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
Laya.loader.load([{ url: "res/atlas/comp.atlas", type: Loader.ATLAS }], Handler.create(this, this.onLoaded));
function onLoaded() {
    //实例UI界面
    var testUI = new TestUI();
    Laya.stage.addChild(testUI);
}
//# sourceMappingURL=LayaUISample.js.map