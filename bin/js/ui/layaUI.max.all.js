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
        var TestPageUI = /** @class */ (function (_super) {
            __extends(TestPageUI, _super);
            function TestPageUI() {
                return _super.call(this) || this;
            }
            TestPageUI.prototype.createChildren = function () {
                View.regComponent("EffectAnimation", laya.display.EffectAnimation);
                View.regComponent("ui.test.shift_right_upUI", ui.test.shift_right_upUI);
                View.regComponent("ui.test.expand_rightUI", ui.test.expand_rightUI);
                View.regComponent("ui.test.collaspe_rightUI", ui.test.collaspe_rightUI);
                View.regComponent("ui.test.expand_leftUI", ui.test.expand_leftUI);
                View.regComponent("ui.test.collaspe_leftUI", ui.test.collaspe_leftUI);
                View.regComponent("ui.test.shift_left_disUI", ui.test.shift_left_disUI);
                View.regComponent("ui.test.moveupUI", ui.test.moveupUI);
                View.regComponent("ui.test.shift_right_disUI", ui.test.shift_right_disUI);
                View.regComponent("ui.test.shift_right_downUI", ui.test.shift_right_downUI);
                View.regComponent("ui.test.shift_left_appUI", ui.test.shift_left_appUI);
                View.regComponent("ui.test.shift_left_upUI", ui.test.shift_left_upUI);
                View.regComponent("ui.test.shift_right_appUI", ui.test.shift_right_appUI);
                View.regComponent("ui.test.shift_left_downUI", ui.test.shift_left_downUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.test.TestPageUI.uiView);
            };
            TestPageUI.uiView = { "type": "View", "props": { "width": 715, "height": 402 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "width": 715, "var": "background", "skin": "comp/bg_pure.png", "sizeGrid": "30,4,4,4", "height": 402 } }, { "type": "Image", "props": { "y": 60, "x": 371, "width": 130, "height": 99, "centerX": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 324, "width": 121, "visible": false, "stateNum": 1, "skin": "comp/btn.png", "labelFont": "labelfont", "labelColors": "#fff", "label": "Learn More", "height": 35, "centerX": 1, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 0, "x": 0, "width": 715, "var": "menu", "skin": "comp/menu_bar.png", "layoutEnabled": true, "height": 36, "disabled": false }, "child": [{ "type": "Image", "props": { "y": 13, "x": 110, "width": 124, "skin": "comp/lightpoint.png", "height": 24 } }, { "type": "Button", "props": { "y": 10, "x": 452, "width": 38, "var": "tab_roadmap", "stateNum": 2, "skin": "comp/btn_roadmap.png", "sizeGrid": "0,0,0,0", "height": 6 } }, { "type": "Button", "props": { "y": 10, "x": 516, "width": 47, "var": "tab_lan", "stateNum": 2, "skin": "comp/btn_tab1.png", "sizeGrid": "0,0,0,0", "height": 6 } }, { "type": "Button", "props": { "y": 10, "x": 394, "width": 32, "var": "tab_term", "stateNum": 2, "skin": "comp/btn_terms.png", "sizeGrid": "0,0,0,0", "height": 6 } }, { "type": "Button", "props": { "y": 10, "x": 307, "width": 70, "var": "tab_doc", "stateNum": 2, "skin": "comp/btn_doc.png", "sizeGrid": "0,0,0,0", "height": 6 } }, { "type": "Button", "props": { "y": 10, "x": 220, "width": 71, "var": "tab_why", "stateNum": 2, "skin": "comp/btn_why.png", "sizeGrid": "0,0,0,0", "height": 6 } }] }, { "type": "Box", "props": { "y": 804, "x": 0, "width": 715, "var": "language", "height": 402 }, "child": [{ "type": "Box", "props": { "width": 715, "height": 402 } }, { "type": "Script", "props": { "var": "move", "name": "move", "runtime": "ui.test.moveupUI" } }] }, { "type": "Box", "props": { "y": 804, "x": 0, "width": 715, "var": "roadmap", "height": 402 }, "child": [{ "type": "Box", "props": { "width": 715, "height": 402 } }, { "type": "Script", "props": { "var": "roadmapmove", "name": "move", "runtime": "ui.test.moveupUI" } }, { "type": "Image", "props": { "y": 62, "x": 356, "width": 21, "skin": "comp/roadmapbar.png", "height": 294 }, "child": [{ "type": "Tab", "props": { "y": 30, "var": "roadmap_bar", "space": 30, "selectedIndex": 0, "direction": "vertical", "centerX": 0.5 }, "child": [{ "type": "Button", "props": { "y": 0, "x": 4, "width": 30, "var": "road0", "stateNum": 2, "skin": "comp/btn_selection.png", "name": "item0", "height": 23 } }, { "type": "Button", "props": { "y": 42, "x": 4, "width": 30, "var": "road1", "stateNum": 2, "skin": "comp/btn_selection.png", "name": "item1", "height": 23 } }, { "type": "Button", "props": { "y": 84, "x": 4, "width": 30, "var": "road2", "stateNum": 2, "skin": "comp/btn_selection.png", "name": "item2", "height": 23 } }, { "type": "Button", "props": { "y": 126, "x": 4, "width": 30, "var": "road3", "stateNum": 2, "skin": "comp/btn_selection.png", "name": "item3", "height": 23 } }, { "type": "Button", "props": { "y": 168, "x": 4, "width": 30, "var": "road4", "stateNum": 2, "skin": "comp/btn_selection.png", "name": "item4", "height": 23 } }] }, { "type": "Image", "props": { "y": 11, "width": 32, "var": "roadmap_sec", "skin": "comp/selected_bg.png", "height": 62, "centerX": 0.5 } }] }, { "type": "Image", "props": { "y": 120, "x": 500, "width": 151, "skin": "comp/side_deco.png", "height": 188 } }] }, { "type": "Box", "props": { "y": 804, "x": 0, "width": 715, "var": "term", "height": 402 }, "child": [{ "type": "Image", "props": { "y": 130, "x": 552, "width": 121, "skin": "comp/side_deco.png", "height": 150 } }, { "type": "Box", "props": { "width": 715, "height": 402 } }, { "type": "Script", "props": { "var": "termmove", "name": "move", "runtime": "ui.test.moveupUI" } }, { "type": "Image", "props": { "y": 107, "x": 200, "width": 431, "skin": "comp/earth_bg.png", "height": 216 } }, { "type": "Image", "props": { "y": 23, "x": 1, "width": 105, "skin": "comp/sidebar.png", "height": 343 }, "child": [{ "type": "Image", "props": { "y": 71, "x": 8, "width": 83, "skin": "comp/sidebar_splitline.png", "height": 2 } }, { "type": "Image", "props": { "y": 123, "x": 8, "width": 83, "skin": "comp/sidebar_splitline.png", "height": 2 } }, { "type": "Image", "props": { "y": 175, "x": 8, "width": 83, "skin": "comp/sidebar_splitline.png", "height": 2 } }, { "type": "Image", "props": { "y": 227, "x": 8, "width": 83, "skin": "comp/sidebar_splitline.png", "height": 2 } }, { "type": "Image", "props": { "y": 279, "x": 8, "width": 83, "skin": "comp/sidebar_splitline.png", "height": 2 } }, { "type": "Image", "props": { "y": 126, "x": 0, "width": 104, "skin": "comp/selected_sidebar.png", "height": 49 } }] }] }, { "type": "Box", "props": { "y": 804, "x": 0, "width": 715, "var": "doc", "height": 402 }, "child": [{ "type": "Box", "props": { "width": 715, "height": 402 } }, { "type": "Script", "props": { "var": "docmove", "name": "move", "runtime": "ui.test.moveupUI" } }, { "type": "Image", "props": { "y": 23, "x": 1, "width": 105, "skin": "comp/sidebar.png", "height": 343 }, "child": [{ "type": "Image", "props": { "y": 71, "x": 8, "width": 83, "skin": "comp/sidebar_splitline.png", "height": 2 } }, { "type": "Image", "props": { "y": 123, "x": 8, "width": 83, "skin": "comp/sidebar_splitline.png", "height": 2 } }, { "type": "Image", "props": { "y": 175, "x": 8, "width": 83, "skin": "comp/sidebar_splitline.png", "height": 2 } }, { "type": "Image", "props": { "y": 227, "x": 8, "width": 83, "skin": "comp/sidebar_splitline.png", "height": 2 } }, { "type": "Image", "props": { "y": 279, "x": 8, "width": 83, "skin": "comp/sidebar_splitline.png", "height": 2 } }, { "type": "Image", "props": { "y": 126, "x": 0, "width": 104, "skin": "comp/selected_sidebar.png", "height": 49 } }] }, { "type": "Image", "props": { "y": 137, "x": 517, "width": 54, "skin": "comp/lower_circle.png", "skewX": 0, "pivotX": 0, "height": 232, "anchorY": 0 } }, { "type": "Image", "props": { "y": 137, "x": 260, "width": 54, "skin": "comp/lower_circle.png", "skewX": 0, "scaleX": -1, "pivotX": 0, "height": 232, "anchorY": 0 } }, { "type": "Image", "props": { "y": 166, "x": 271, "width": 46, "skin": "comp/message_box.png", "height": 20, "anchorY": 0.5 }, "child": [{ "type": "Script", "props": { "playEvent": "mouseover", "runtime": "ui.test.expand_rightUI" } }, { "type": "Script", "props": { "playEvent": "mouseout", "runtime": "ui.test.collaspe_rightUI" } }] }, { "type": "Image", "props": { "y": 246, "x": 506, "width": 46, "skin": "comp/message_box.png", "scaleX": -1, "pivotX": 0, "height": 20, "anchorY": 0.5 }, "child": [{ "type": "Script", "props": { "playEvent": "mouseover", "runtime": "ui.test.expand_leftUI" } }, { "type": "Script", "props": { "playEvent": "mouseout", "runtime": "ui.test.collaspe_leftUI" } }] }, { "type": "Image", "props": { "y": 332, "x": 267, "width": 46, "skin": "comp/message_box.png", "height": 20, "anchorY": 0.5 }, "child": [{ "type": "Script", "props": { "playEvent": "mouseover", "runtime": "ui.test.expand_rightUI" } }, { "type": "Script", "props": { "playEvent": "mouseout", "runtime": "ui.test.collaspe_rightUI" } }] }] }, { "type": "Box", "props": { "y": 804, "x": 0, "width": 715, "var": "why", "height": 402 }, "child": [{ "type": "Script", "props": { "var": "whymove", "name": "move", "runtime": "ui.test.moveupUI" } }, { "type": "Box", "props": { "y": 0, "x": 0, "width": 715, "height": 402 }, "child": [{ "type": "Button", "props": { "y": 191.5, "x": 524, "width": 32, "var": "right_arrow", "stateNum": 1, "skin": "comp/btn_arrow.png", "height": 75 } }, { "type": "Button", "props": { "y": 191.5, "x": 210, "width": 32, "var": "left_arrow", "stateNum": 1, "skin": "comp/btn_arrow.png", "scaleX": -1, "height": 75 } }, { "type": "Image", "props": { "y": 142, "x": 373, "width": 397, "skin": "comp/upper_circle.png", "height": 58, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 330, "x": 370, "width": 69, "skin": "comp/lower_circle.png", "rotation": 90, "height": 294, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 229, "x": 364, "width": 288, "var": "why_card0", "skin": "comp/container_panek.png", "height": 102, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Script", "props": { "y": 10, "x": 10, "var": "left_dis0", "name": "left_dis", "runtime": "ui.test.shift_left_disUI" } }, { "type": "Script", "props": { "y": 10, "x": 10, "var": "left_down0", "name": "left_down", "runtime": "ui.test.shift_left_downUI" } }, { "type": "Script", "props": { "y": 10, "x": 10, "var": "right_dis0", "name": "right_dis", "runtime": "ui.test.shift_right_disUI" } }, { "type": "Script", "props": { "y": 10, "x": 10, "var": "right_down0", "name": "right_down", "runtime": "ui.test.shift_right_downUI" } }, { "type": "Script", "props": { "var": "left_app0", "runtime": "ui.test.shift_left_appUI" } }, { "type": "Script", "props": { "var": "left_up0", "runtime": "ui.test.shift_left_upUI" } }, { "type": "Script", "props": { "var": "right_app0", "runtime": "ui.test.shift_right_appUI" } }, { "type": "Script", "props": { "var": "right_up0", "runtime": "ui.test.shift_right_upUI" } }, { "type": "TextArea", "props": { "y": 34, "x": 14, "width": 262, "text": "The game developers could publish their demos and whitepapers to users in Unicorn ecosystem to raise money by equity financing for their gaming projects.", "mouseEnabled": false, "height": 60, "fontSize": 12, "font": "Microsoft YaHei", "editable": false, "color": "#74d8e2", "align": "center" } }, { "type": "TextArea", "props": { "y": 8, "x": 16, "width": 262, "text": "Crowdfunding", "mouseEnabled": false, "height": 28, "fontSize": 22, "font": "Font_eng", "editable": false, "color": "#f4c753", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 229, "x": 508, "width": 288, "var": "why_card1", "skin": "comp/container_panek.png", "scaleY": 0.8, "scaleX": 0.8, "height": 102, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.1 }, "child": [{ "type": "Script", "props": { "var": "left_dis1", "name": "left_dis", "runtime": "ui.test.shift_left_disUI" } }, { "type": "Script", "props": { "var": "left_down1", "name": "left_down", "runtime": "ui.test.shift_left_downUI" } }, { "type": "Script", "props": { "var": "right_dis1", "name": "right_dis", "runtime": "ui.test.shift_right_disUI" } }, { "type": "Script", "props": { "var": "right_down1", "name": "right_down", "runtime": "ui.test.shift_right_downUI" } }, { "type": "Script", "props": { "var": "right_up1", "runtime": "ui.test.shift_right_upUI" } }, { "type": "Script", "props": { "var": "right_app1", "runtime": "ui.test.shift_right_appUI" } }, { "type": "Script", "props": { "var": "left_up1", "runtime": "ui.test.shift_left_upUI" } }, { "type": "Script", "props": { "var": "left_app1", "runtime": "ui.test.shift_left_appUI" } }, { "type": "TextArea", "props": { "y": 34, "x": 13, "width": 262, "text": "We provide a decentralized exchange for all game coins issued on our platform. Each game has their own cryptocurrency and could exchange on Unicorn Platform. ", "mouseEnabled": false, "height": 60, "fontSize": 12, "font": "Microsoft YaHei", "editable": false, "color": "#74d8e2", "align": "center" } }, { "type": "TextArea", "props": { "y": 8, "x": 15, "width": 262, "text": "Assets Exchange", "mouseEnabled": false, "height": 28, "fontSize": 22, "font": "Font_eng", "editable": false, "color": "#f4c753", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 229, "x": 652, "width": 288, "var": "why_card2", "skin": "comp/container_panek.png", "scaleY": 0.64, "scaleX": 0.64, "height": 102, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 }, "child": [{ "type": "Script", "props": { "y": 30, "x": 30, "var": "left_dis2", "name": "left_dis", "runtime": "ui.test.shift_left_disUI" } }, { "type": "Script", "props": { "y": 30, "x": 30, "var": "left_down2", "name": "left_down", "runtime": "ui.test.shift_left_downUI" } }, { "type": "Script", "props": { "y": 30, "x": 30, "var": "right_dis2", "name": "right_dis", "runtime": "ui.test.shift_right_disUI" } }, { "type": "Script", "props": { "y": 30, "x": 30, "var": "right_down2", "name": "right_down", "runtime": "ui.test.shift_right_downUI" } }, { "type": "Script", "props": { "var": "right_up2", "runtime": "ui.test.shift_right_upUI" } }, { "type": "Script", "props": { "var": "right_app2", "runtime": "ui.test.shift_right_appUI" } }, { "type": "Script", "props": { "var": "left_up2", "runtime": "ui.test.shift_left_upUI" } }, { "type": "Script", "props": { "var": "left_app2", "runtime": "ui.test.shift_left_appUI" } }, { "type": "TextArea", "props": { "y": 34, "x": 17, "width": 262, "text": "Different companies can look up their smart contracts and trust each other, which means they can collaborate better than before on Unicorn Platform.", "mouseEnabled": false, "height": 60, "fontSize": 12, "font": "Microsoft YaHei", "editable": false, "color": "#74d8e2", "align": "center" } }, { "type": "TextArea", "props": { "y": 8, "x": 19, "width": 262, "text": "Collaboration", "mouseEnabled": false, "height": 28, "fontSize": 22, "font": "Font_eng", "editable": false, "color": "#f4c753", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 229, "x": 220, "width": 288, "var": "why_card3", "skin": "comp/container_panek.png", "scaleY": 0.8, "scaleX": 0.8, "height": 102, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.1 }, "child": [{ "type": "Script", "props": { "var": "left_dis3", "name": "left_dis", "runtime": "ui.test.shift_left_disUI" } }, { "type": "Script", "props": { "var": "left_down3", "name": "left_down", "runtime": "ui.test.shift_left_downUI" } }, { "type": "Script", "props": { "var": "right_dis3", "name": "right_dis", "runtime": "ui.test.shift_right_disUI" } }, { "type": "Script", "props": { "var": "right_down3", "name": "right_down", "runtime": "ui.test.shift_right_downUI" } }, { "type": "Script", "props": { "var": "left_app3", "runtime": "ui.test.shift_left_appUI" } }, { "type": "Script", "props": { "var": "left_up3", "runtime": "ui.test.shift_left_upUI" } }, { "type": "Script", "props": { "var": "right_app3", "runtime": "ui.test.shift_right_appUI" } }, { "type": "Script", "props": { "var": "right_up3", "runtime": "ui.test.shift_right_upUI" } }, { "type": "TextArea", "props": { "y": 36, "x": 14, "width": 262, "text": "It gives game developers and small studios a chance to take advantages of cloud service from the blockchain system to build up their game in a fast way.", "mouseEnabled": false, "height": 60, "fontSize": 12, "font": "Microsoft YaHei", "editable": false, "color": "#74d8e2", "align": "center" } }, { "type": "TextArea", "props": { "y": 10, "x": 16, "width": 262, "text": "Framework", "mouseEnabled": false, "height": 28, "fontSize": 22, "font": "Font_eng", "editable": false, "color": "#f4c753", "bold": true, "align": "center" } }] }] }, { "type": "Box", "props": { "y": 0, "x": 0, "visible": false, "var": "loading", "alpha": 1 }, "child": [{ "type": "Rect", "props": { "y": 0, "x": 0, "width": 715, "lineWidth": 1, "height": 560, "fillColor": "#000000" } }, { "type": "Image", "props": { "y": 289, "x": 360, "skin": "comp/loading_pic.png", "anchorY": 0.5, "anchorX": 0.4 } }, { "type": "Image", "props": { "y": 265, "x": 236, "skin": "comp/Loading.png" } }] }, { "type": "Box", "props": { "y": 402, "x": 0, "var": "bottom" }, "child": [{ "type": "Image", "props": { "width": 715, "skin": "comp/links_container.png", "height": 158 } }, { "type": "Image", "props": { "y": 24, "x": 163, "width": 41, "skin": "comp/bitcointalk.png", "height": 31 } }, { "type": "Image", "props": { "y": 59, "x": 160, "width": 33, "skin": "comp/reddit.png", "height": 34 } }, { "type": "Image", "props": { "y": 103, "x": 159, "width": 37, "skin": "comp/weibo.png", "height": 35 } }, { "type": "Image", "props": { "y": 27, "x": 247, "width": 37, "skin": "comp/fb.png", "height": 27 } }, { "type": "Image", "props": { "y": 22, "x": 359, "width": 33, "skin": "comp/github.png", "height": 32, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 26, "x": 433, "width": 40, "skin": "comp/ig.png", "height": 30 } }, { "type": "Image", "props": { "y": 26, "x": 522, "width": 35, "skin": "comp/medium.png", "height": 32 } }, { "type": "Image", "props": { "y": 64, "x": 248, "width": 40, "skin": "comp/steemit.png", "height": 29 } }, { "type": "Image", "props": { "y": 69, "x": 359, "width": 38, "skin": "comp/telegram.png", "height": 28, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 67, "x": 436, "width": 31, "skin": "comp/twitter.png", "height": 29 } }, { "type": "Image", "props": { "y": 67, "x": 522, "width": 35, "skin": "comp/wechat.png", "height": 29 } }, { "type": "Image", "props": { "y": 109, "x": 249, "width": 37, "skin": "comp/yoku.png", "height": 27 } }, { "type": "Image", "props": { "y": 109, "x": 359, "width": 40, "skin": "comp/youtube.png", "height": 29, "anchorX": 0.5 } }] }] };
            return TestPageUI;
        }(View));
        test.TestPageUI = TestPageUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
(function (ui) {
    var test;
    (function (test) {
        var collaspe_leftUI = /** @class */ (function (_super) {
            __extends(collaspe_leftUI, _super);
            function collaspe_leftUI() {
                var _this = _super.call(this) || this;
                _this.effectData = ui.test.collaspe_leftUI.uiView;
                return _this;
            }
            collaspe_leftUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 11, "x": 0, "width": 51, "skin": "comp/message_box.png", "scaleY": 3.5, "scaleX": -3.5, "height": 22, "anchorY": 0.5 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "scaleY": [{ "value": 3.5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": -3.5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": -1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return collaspe_leftUI;
        }(laya.display.EffectAnimation));
        test.collaspe_leftUI = collaspe_leftUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
(function (ui) {
    var test;
    (function (test) {
        var collaspe_rightUI = /** @class */ (function (_super) {
            __extends(collaspe_rightUI, _super);
            function collaspe_rightUI() {
                var _this = _super.call(this) || this;
                _this.effectData = ui.test.collaspe_rightUI.uiView;
                return _this;
            }
            collaspe_rightUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 11, "x": 0, "width": 51, "skin": "comp/message_box.png", "scaleY": 3.5, "scaleX": 3.5, "height": 22, "anchorY": 0.5 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "scaleY": [{ "value": 3.5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 3.5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return collaspe_rightUI;
        }(laya.display.EffectAnimation));
        test.collaspe_rightUI = collaspe_rightUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
(function (ui) {
    var test;
    (function (test) {
        var expand_leftUI = /** @class */ (function (_super) {
            __extends(expand_leftUI, _super);
            function expand_leftUI() {
                var _this = _super.call(this) || this;
                _this.effectData = ui.test.expand_leftUI.uiView;
                return _this;
            }
            expand_leftUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 11, "x": 0, "width": 51, "skin": "comp/message_box.png", "height": 22, "anchorY": 0.5 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 3.5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": -1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": -3.5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return expand_leftUI;
        }(laya.display.EffectAnimation));
        test.expand_leftUI = expand_leftUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
(function (ui) {
    var test;
    (function (test) {
        var expand_rightUI = /** @class */ (function (_super) {
            __extends(expand_rightUI, _super);
            function expand_rightUI() {
                var _this = _super.call(this) || this;
                _this.effectData = ui.test.expand_rightUI.uiView;
                return _this;
            }
            expand_rightUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 11, "x": 0, "width": 51, "skin": "comp/message_box.png", "height": 22, "anchorY": 0.5 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 3.5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 3.5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return expand_rightUI;
        }(laya.display.EffectAnimation));
        test.expand_rightUI = expand_rightUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
(function (ui) {
    var test;
    (function (test) {
        var moveupUI = /** @class */ (function (_super) {
            __extends(moveupUI, _super);
            function moveupUI() {
                var _this = _super.call(this) || this;
                _this.effectData = ui.test.moveupUI.uiView;
                return _this;
            }
            moveupUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Panel", "props": { "y": 804, "x": 0 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "y": [{ "value": 804, "tweenMethod": "strongIn", "tween": true, "target": 2, "key": "y", "index": 0 }, { "value": -10, "tweenMethod": "strongOut", "tween": true, "target": 2, "key": "y", "index": 12 }, { "value": 0, "tweenMethod": "expoOut", "tween": true, "target": 2, "key": "y", "index": 20 }], "x": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 12 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 20 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return moveupUI;
        }(laya.display.EffectAnimation));
        test.moveupUI = moveupUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
(function (ui) {
    var test;
    (function (test) {
        var rotateUI = /** @class */ (function (_super) {
            __extends(rotateUI, _super);
            function rotateUI() {
                var _this = _super.call(this) || this;
                _this.effectData = ui.test.rotateUI.uiView;
                return _this;
            }
            rotateUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 0, "x": -10, "skin": "comp/loading_pic.png", "rotation": 0, "anchorY": 0.5, "anchorX": 0.45 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 0 }, { "value": 359, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 30 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return rotateUI;
        }(laya.display.EffectAnimation));
        test.rotateUI = rotateUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
(function (ui) {
    var test;
    (function (test) {
        var shift_left_appUI = /** @class */ (function (_super) {
            __extends(shift_left_appUI, _super);
            function shift_left_appUI() {
                var _this = _super.call(this) || this;
                _this.effectData = ui.test.shift_left_appUI.uiView;
                return _this;
            }
            shift_left_appUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 65, "x": 76, "width": 288, "skin": "comp/container_panek.png", "scaleY": 0.64, "scaleX": 0.64, "height": 102, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 76, "tweenMethod": "expoIn", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 220, "tweenMethod": "expoOut", "tween": true, "target": 2, "key": "x", "index": 15 }], "scaleY": [{ "value": 0.64, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 15 }], "scaleX": [{ "value": 0.64, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 15 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 15 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return shift_left_appUI;
        }(laya.display.EffectAnimation));
        test.shift_left_appUI = shift_left_appUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
(function (ui) {
    var test;
    (function (test) {
        var shift_left_disUI = /** @class */ (function (_super) {
            __extends(shift_left_disUI, _super);
            function shift_left_disUI() {
                var _this = _super.call(this) || this;
                _this.effectData = ui.test.shift_left_disUI.uiView;
                return _this;
            }
            shift_left_disUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 65, "x": 220, "width": 288, "skin": "comp/container_panek.png", "scaleY": 0.8, "scaleX": 0.8, "height": 102, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.3 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 220, "tweenMethod": "expoOut", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 76, "tweenMethod": "expoIn", "tween": true, "target": 2, "key": "x", "index": 15 }], "scaleY": [{ "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 0.64, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 15 }], "scaleX": [{ "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 0.64, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 15 }], "alpha": [{ "value": 0.3, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 15 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return shift_left_disUI;
        }(laya.display.EffectAnimation));
        test.shift_left_disUI = shift_left_disUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
(function (ui) {
    var test;
    (function (test) {
        var shift_left_downUI = /** @class */ (function (_super) {
            __extends(shift_left_downUI, _super);
            function shift_left_downUI() {
                var _this = _super.call(this) || this;
                _this.effectData = ui.test.shift_left_downUI.uiView;
                return _this;
            }
            shift_left_downUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 65, "x": 364, "width": 288, "skin": "comp/container_panek.png", "scaleY": 0.8, "scaleX": 0.8, "height": 102, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.3 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 364, "tweenMethod": "expoOut", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 220, "tweenMethod": "expoIn", "tween": true, "target": 2, "key": "x", "index": 15 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 15 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 15 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 15 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return shift_left_downUI;
        }(laya.display.EffectAnimation));
        test.shift_left_downUI = shift_left_downUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
(function (ui) {
    var test;
    (function (test) {
        var shift_left_upUI = /** @class */ (function (_super) {
            __extends(shift_left_upUI, _super);
            function shift_left_upUI() {
                var _this = _super.call(this) || this;
                _this.effectData = ui.test.shift_left_upUI.uiView;
                return _this;
            }
            shift_left_upUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 65, "x": 220, "width": 288, "skin": "comp/container_panek.png", "scaleY": 0.8, "scaleX": 0.8, "height": 102, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.3 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 220, "tweenMethod": "expoIn", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 364, "tweenMethod": "expoOut", "tween": true, "target": 2, "key": "x", "index": 15 }], "scaleY": [{ "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 15 }], "scaleX": [{ "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 15 }], "alpha": [{ "value": 0.3, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 15 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return shift_left_upUI;
        }(laya.display.EffectAnimation));
        test.shift_left_upUI = shift_left_upUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
(function (ui) {
    var test;
    (function (test) {
        var shift_right_appUI = /** @class */ (function (_super) {
            __extends(shift_right_appUI, _super);
            function shift_right_appUI() {
                var _this = _super.call(this) || this;
                _this.effectData = ui.test.shift_right_appUI.uiView;
                return _this;
            }
            shift_right_appUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 65, "x": 652, "width": 288, "skin": "comp/container_panek.png", "scaleY": 0.64, "scaleX": 0.64, "height": 102, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 652, "tweenMethod": "expoIn", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 508, "tweenMethod": "expoOut", "tween": true, "target": 2, "key": "x", "index": 15 }], "scaleY": [{ "value": 0.64, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 15 }], "scaleX": [{ "value": 0.64, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 15 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 15 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return shift_right_appUI;
        }(laya.display.EffectAnimation));
        test.shift_right_appUI = shift_right_appUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
(function (ui) {
    var test;
    (function (test) {
        var shift_right_disUI = /** @class */ (function (_super) {
            __extends(shift_right_disUI, _super);
            function shift_right_disUI() {
                var _this = _super.call(this) || this;
                _this.effectData = ui.test.shift_right_disUI.uiView;
                return _this;
            }
            shift_right_disUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 65, "x": 508, "width": 288, "skin": "comp/container_panek.png", "scaleY": 0.8, "scaleX": 0.8, "height": 102, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.3 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 508, "tweenMethod": "expoOut", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 364, "tweenMethod": "expoIn", "tween": true, "target": 2, "key": "x", "index": 15 }], "scaleY": [{ "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 0.64, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 15 }], "scaleX": [{ "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 0.64, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 15 }], "alpha": [{ "value": 0.3, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 15 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return shift_right_disUI;
        }(laya.display.EffectAnimation));
        test.shift_right_disUI = shift_right_disUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
(function (ui) {
    var test;
    (function (test) {
        var shift_right_downUI = /** @class */ (function (_super) {
            __extends(shift_right_downUI, _super);
            function shift_right_downUI() {
                var _this = _super.call(this) || this;
                _this.effectData = ui.test.shift_right_downUI.uiView;
                return _this;
            }
            shift_right_downUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 65, "x": 364, "width": 288, "skin": "comp/container_panek.png", "height": 102, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 364, "tweenMethod": "expoOut", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 508, "tweenMethod": "expoIn", "tween": true, "target": 2, "key": "x", "index": 15 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 15 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 15 }], "anchorX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "anchorX", "index": 0 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 15 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return shift_right_downUI;
        }(laya.display.EffectAnimation));
        test.shift_right_downUI = shift_right_downUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
(function (ui) {
    var test;
    (function (test) {
        var shift_right_upUI = /** @class */ (function (_super) {
            __extends(shift_right_upUI, _super);
            function shift_right_upUI() {
                var _this = _super.call(this) || this;
                _this.effectData = ui.test.shift_right_upUI.uiView;
                return _this;
            }
            shift_right_upUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 65, "x": 508, "width": 288, "skin": "comp/container_panek.png", "scaleY": 0.8, "scaleX": 0.8, "height": 102, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.3 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 508, "tweenMethod": "expoIn", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 364, "tweenMethod": "expoOut", "tween": true, "target": 2, "key": "x", "index": 15 }], "scaleY": [{ "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 15 }], "scaleX": [{ "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 15 }], "anchorX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "anchorX", "index": 0 }, { "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "anchorX", "index": 15 }], "alpha": [{ "value": 0.3, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 15 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return shift_right_upUI;
        }(laya.display.EffectAnimation));
        test.shift_right_upUI = shift_right_upUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map