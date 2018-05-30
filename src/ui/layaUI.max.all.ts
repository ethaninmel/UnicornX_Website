
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.test {
    export class ICOUI extends View {
		public page:Laya.Image;
		public menu:Laya.Image;
		public b1:Laya.Button;
		public b2:Laya.Button;
		public b3:Laya.Button;
		public b4:Laya.Button;
		public b5:Laya.Button;
		public b6:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1920,"height":1080},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"page","skin":"comp/page.png"}},{"type":"Image","props":{"y":-2,"x":0,"var":"menu","skin":"comp/title.PNG"}},{"type":"Button","props":{"y":4,"x":498,"width":180,"var":"b1","skin":"comp/button.png","mousedown":"changeMouse","label":"label","height":51,"alpha":0}},{"type":"Button","props":{"y":5,"x":697,"width":180,"var":"b2","skin":"comp/button.png","label":"label","height":51,"alpha":0}},{"type":"Button","props":{"y":4,"x":899,"width":127,"var":"b3","skin":"comp/button.png","label":"label","height":51,"alpha":0}},{"type":"Button","props":{"y":4,"x":1054,"width":133,"var":"b4","skin":"comp/button.png","label":"label","height":51,"alpha":0}},{"type":"Button","props":{"y":5,"x":1246,"width":89,"var":"b5","skin":"comp/button.png","label":"label","height":51,"alpha":0}},{"type":"Button","props":{"y":3,"x":1373,"width":95,"var":"b6","skin":"comp/button.png","label":"label","height":51,"alpha":0}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.ICOUI.uiView);

        }

    }
}
