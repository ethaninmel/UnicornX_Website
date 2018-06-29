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
var VideoDialog = /** @class */ (function (_super) {
    __extends(VideoDialog, _super);
    function VideoDialog() {
        var _this = _super.call(this) || this;
        var videoSprite = new Laya.Video(640, 360);
        videoSprite.load("res/pitch.mp4");
        _this.addChild(videoSprite);
        _this.btn_close.zOrder = 10;
        videoSprite.x = (_this.width - videoSprite.width) / 2;
        videoSprite.y = (_this.height - videoSprite.height) / 2;
        videoSprite.play();
        _this.btn_close.on(Laya.Event.CLICK, _this, _this.closeDialog, [videoSprite]);
        return _this;
    }
    VideoDialog.prototype.closeDialog = function (videoSprite) {
        videoSprite.pause();
        videoSprite.destroy();
        this.close();
    };
    return VideoDialog;
}(ui.test.VideoUIUI));
//# sourceMappingURL=VideoDialog.js.map