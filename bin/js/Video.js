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
var Media = Laya.Media;
var Video = Laya.Video;
var Text = Laya.Text;
var Browser = Laya.Browser;
var Handler = Laya.Handler;
var InputDevice_Media = /** @class */ (function (_super) {
    __extends(InputDevice_Media, _super);
    function InputDevice_Media() {
        var _this = _super.call(this) || this;
        if (Media.supported() === false)
            alert("当前浏览器不支持");
        else {
            var options = {
                audio: true,
                video: {
                    width: Browser.width,
                    height: Browser.height
                }
            };
            Media.getMedia(options, Handler.create(_this, _this.onSuccess, ["https://youtu.be/ss3RslEJ-Gg"]), Handler.create(_this, _this.onError));
        }
        return _this;
    }
    InputDevice_Media.prototype.onSuccess = function (url) {
        var video = Browser.document.createElement("video");
        video.width = Browser.clientWidth;
        video.height = Browser.clientHeight;
        video.style.zIndex = 1E5;
        Browser.document.body.appendChild(video);
        video.controls = true;
        video.src = url;
        video.play();
    };
    InputDevice_Media.prototype.onError = function (error) {
        alert(error.message);
    };
    return InputDevice_Media;
}(ui.test.VideoUI));
//# sourceMappingURL=Video.js.map