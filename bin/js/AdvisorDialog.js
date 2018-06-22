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
var AdvisorDialog = /** @class */ (function (_super) {
    __extends(AdvisorDialog, _super);
    function AdvisorDialog(skin, context1, context2) {
        var _this = _super.call(this) || this;
        _this.image.skin = skin;
        _this.desc1.text = context1;
        _this.desc2.text = context2;
        _this.btn_close.on(Laya.Event.CLICK, _this, _this.close);
        return _this;
    }
    return AdvisorDialog;
}(ui.test.AdvisorDialogUI));
//# sourceMappingURL=AdvisorDialog.js.map