import test = ui.test.ICOUI;
import Label = laya.ui.Label;
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;

class TestUI extends ui.test.ICOUI {

	constructor() {
		super();
		this.stage.on(Laya.Event.MOUSE_WHEEL, this, this.onMousewheel);
		this.b1.on(laya.events.Event.CLICK, this, this.onNavClick,["b1"]);
		this.b2.on(laya.events.Event.CLICK, this, this.onNavClick,["b2"]);
		this.b3.on(laya.events.Event.CLICK, this, this.onNavClick,["b3"]);
		this.b4.on(laya.events.Event.CLICK, this, this.onNavClick,["b4"]);
		this.b5.on(laya.events.Event.CLICK, this, this.onNavClick,["b5"]);
		this.b6.on(laya.events.Event.CLICK, this, this.onNavClick,["b6"]);
		
	}

	changeMouse(){
		Laya.Mouse.cursor='pointer';
		Laya.Mouse.show();
	}

	private onNavClick(item:string){
		var position:number = 0;
		switch(item){
			case "b1":
				position = 0;
				break;
			case "b2":
				position = -this.height;
				break;
			case "b3":
				position = -this.height*2;
				break;
			case "b4":
				position = -this.height*3;
				break;
			case "b5":
				position = -this.height*4;
				break;
			case "b6":
				position = -this.height*5;
				break;
			
		}



		Laya.timer.loop(10,this,this.onNav,[position]);
	}

	private onNav(position:number){
		
		console.log(this.page.y);
		console.log(position);
		if(Math.abs(this.page.y-position)<20){
			this.page.y -= this.page.y-position;
			Laya.timer.clear(this,this.onNav);
			console.log(1);
		}
		else if(this.page.y>position){
			this.page.y -= 20; 
			console.log(2);
		}
		else if(this.page.y<=position){
			this.page.y += 20; 
			console.log(3);
		}
		
	}

	private onMousewheel(e: laya.events.Event):void{
		var newy:number;
		if (e.delta>0){
			newy=this.page.y+10;
			if(newy>0)
				return;
			this.page.y=newy;
		}
		if (e.delta<0){
			newy=this.page.y-10;
			if(newy<-this.height*2)
				return;
			this.page.y=newy;
		}
		this.menu.y=-this.y;
	}

}

// 程序入口
Laya.init(1920, 1080);
Laya.stage.scaleMode = Laya.Stage.SCREEN_HORIZONTAL;
Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
Laya.loader.load([{ url: "res/atlas/comp.atlas", type: Loader.ATLAS }], Handler.create(this, this.onLoaded));

function onLoaded(): void {
	//实例UI界面
	var testUI: TestUI = new TestUI();
	Laya.stage.addChild(testUI);
}