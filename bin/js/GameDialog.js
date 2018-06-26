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
var GameDialog = /** @class */ (function (_super) {
    __extends(GameDialog, _super);
    function GameDialog() {
        var _this = _super.call(this) || this;
        _this.moleNum = 9;
        _this.moles = new Array();
        _this.startBtn.on(Laya.Event.CLICK, _this, _this.onStart);
        _this.btn_close.on(Laya.Event.CLICK, _this, _this.onClose);
        return _this;
    }
    GameDialog.prototype.onClose = function () {
        this.close();
        Laya.Mouse.show();
    };
    GameDialog.prototype.onStart = function () {
        this.start.visible = false;
        this.inGame.visible = true;
        var hitCallBackHd = Laya.Handler.create(this, this.setScore, null, false);
        for (var i = 0; i < this.moleNum; i++) {
            var box = this.inGame.getChildByName("item" + i);
            var mole = new Mole(box.getChildByName("normal"), box.getChildByName("hit"), box.getChildByName("scoreImg"), 21, hitCallBackHd);
            this.moles.push(mole);
        }
        this.hammer = new Hammer(this.x, this.y);
        this.addChild(this.hammer);
        this.startGame();
    };
    GameDialog.prototype.onLoop = function () {
        this.timeBar.value -= (1 / 90);
        if (this.timeBar.value <= 0) {
            this.gameOver();
            return;
        }
        var index = Math.floor(Math.random() * this.moleNum);
        this.moles[index].show();
    };
    GameDialog.prototype.startGame = function () {
        this.timeBar.value = 1;
        this.score = 0;
        this.updateScoreUI();
        this.hammer.start();
        this.hammer.visible = true;
        Laya.timer.loop(100, this, this.onLoop);
    };
    GameDialog.prototype.gameOver = function () {
        Laya.timer.clear(this, this.onLoop);
        this.hammer.visible = false;
        this.hammer.end();
        this.setScoreUI(this.score);
        this.inGame.visible = false;
        this.gameover.visible = true;
        console.log("游戏结束！");
        this.restartBtn.on(Laya.Event.CLICK, this, this.restartGame);
    };
    GameDialog.prototype.restartGame = function () {
        this.gameover.visible = false;
        this.start.visible = true;
    };
    GameDialog.prototype.setScoreUI = function (score) {
        var data = {};
        var temp = score;
        for (var i = 9; i >= 0; i--) {
            data["item" + i] = { index: Math.floor(temp % 10) };
            temp /= 10;
        }
        this.scoreNums1.dataSource = data;
    };
    GameDialog.prototype.setScore = function (type) {
        this.score += (type == 1 ? -100 : 100);
        if (this.score < 0)
            this.score = 0;
        this.updateScoreUI();
    };
    GameDialog.prototype.updateScoreUI = function () {
        var data = {};
        var temp = this.score;
        for (var i = 9; i >= 0; i--) {
            data["item" + i] = { index: Math.floor(temp % 10) };
            temp /= 10;
        }
        this.scoreNums.dataSource = data;
    };
    return GameDialog;
}(ui.gameDialogUI));
//# sourceMappingURL=GameDialog.js.map