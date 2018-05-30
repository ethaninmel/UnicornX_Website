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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var test;
    (function (test) {
        var ICOUI = /** @class */ (function (_super) {
            __extends(ICOUI, _super);
            function ICOUI() {
                return _super.call(this) || this;
            }
            ICOUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.test.ICOUI.uiView);
            };
            ICOUI.uiView = { "type": "View", "props": { "width": 1920, "height": 1080 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "page", "skin": "comp/page.png" } }, { "type": "Image", "props": { "y": -2, "x": 0, "var": "menu", "skin": "comp/title.PNG" } }, { "type": "Button", "props": { "y": 4, "x": 498, "width": 180, "var": "b1", "skin": "comp/button.png", "mousedown": "changeMouse", "label": "label", "height": 51, "alpha": 0 } }, { "type": "Button", "props": { "y": 5, "x": 697, "width": 180, "var": "b2", "skin": "comp/button.png", "label": "label", "height": 51, "alpha": 0 } }, { "type": "Button", "props": { "y": 4, "x": 899, "width": 127, "var": "b3", "skin": "comp/button.png", "label": "label", "height": 51, "alpha": 0 } }, { "type": "Button", "props": { "y": 4, "x": 1054, "width": 133, "var": "b4", "skin": "comp/button.png", "label": "label", "height": 51, "alpha": 0 } }, { "type": "Button", "props": { "y": 5, "x": 1246, "width": 89, "var": "b5", "skin": "comp/button.png", "label": "label", "height": 51, "alpha": 0 } }, { "type": "Button", "props": { "y": 3, "x": 1373, "width": 95, "var": "b6", "skin": "comp/button.png", "label": "label", "height": 51, "alpha": 0 } }] };
            return ICOUI;
        }(View));
        test.ICOUI = ICOUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map