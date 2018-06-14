import test = ui.test.TestPageUI;
import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;
import Stage = Laya.Stage;
import WebGL = Laya.WebGL;
import Rectangle=Laya.Rectangle;

class TestUI extends ui.test.TestPageUI {
	public curtabpanel:Laya.Box;
	//public moveani:ui.test.moveupUI[]=[this.move,this.termmove,this.docmove,this.whymove,this.roadmapmove];
	public why_card_curindex=0;
	public why_cards:Laya.Image[]=[this.why_card0,this.why_card1,this.why_card2,this.why_card3];
	public leftdises:ui.test.shift_left_disUI[]=[this.left_dis0,this.left_dis1,this.left_dis2,this.left_dis3];
	public leftdowns:ui.test.shift_left_downUI[]=[this.left_down0,this.left_down1,this.left_down2,this.left_down3];
	public rightdises:ui.test.shift_right_disUI[]=[this.right_dis0,this.right_dis1,this.right_dis2,this.right_dis3];
	public rightdowns:ui.test.shift_left_disUI[]=[this.right_down0,this.right_down1,this.right_down2,this.right_down3];
	public leftapps:ui.test.shift_left_disUI[]=[this.left_app0,this.left_app1,this.left_app2,this.left_app3];
	public leftups:ui.test.shift_left_downUI[]=[this.left_up0,this.left_up1,this.left_up2,this.left_up3];
	public rightapps:ui.test.shift_right_disUI[]=[this.right_app0,this.right_app1,this.right_app2,this.right_app3];
	public rightups:ui.test.shift_left_disUI[]=[this.right_up0,this.right_up1,this.right_up2,this.right_up3];

	public currentTokensale:number = 1;
	
	constructor() {
		super();
		Laya.init(1920, 1080, WebGL);
			//设置适配模式
			Laya.stage.width=1920;
			Laya.stage.height=1080;
			Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;
			//设置横竖屏
			Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
			//设置水平对齐
			Laya.stage.alignH = "center";
			//设置垂直对齐
			Laya.stage.alignV = "middle";
		this.menu.zOrder=1;
		//this.onBtnPageClick(this.why,this.whymove,"comp/bg.png");
		//console.log(this.mask.x);
		//console.log(this.bar_head.x);
		console.log();
		
		this.stage.on(Laya.Event.MOUSE_WHEEL, this, this.onMousewheel);
		// this.tab_lan.on(Laya.Event.CLICK,this,this.onBtnPageClick,[this.language,this.move,"comp/bg.png"]);
		// this.tab_roadmap.on(Laya.Event.CLICK,this,this.onBtnPageClick,[this.roadmap,this.roadmapmove,"comp/bg_pure.png"]);
		// this.tab_term.on(Laya.Event.CLICK,this,this.onBtnPageClick,[this.term,this.termmove,"comp/bg_pure.png"]);
		// this.tab_why.on(Laya.Event.CLICK,this,this.onBtnPageClick,[this.why,this.whymove,"comp/bg.png"]);
		// this.tab_doc.on(Laya.Event.CLICK,this,this.onBtnPageClick,[this.doc,this.docmove,"comp/bg.png"]);


		this.tab_why.on(Laya.Event.CLICK,this,this.onNavClick,["why"]);
		this.tab_tokensale.on(Laya.Event.CLICK,this,this.onNavClick,["tokensale"]);		
		this.tab_roadmap.on(Laya.Event.CLICK,this,this.onNavClick,["roadmap"]);
		this.tab_founder.on(Laya.Event.CLICK,this,this.onNavClick,["founder"]);
		this.tab_advisor.on(Laya.Event.CLICK,this,this.onNavClick,["advisor"]);
		//this.tab_term.on(Laya.Event.CLICK,this,this.onNavClick,["term"]);
		//this.tab_doc.on(Laya.Event.CLICK,this,this.onNavClick,["doc"]);
		// this.road0.on(Laya.Event.CLICK,this,this.onBtnRoadClick,[0]);
		// this.road1.on(Laya.Event.CLICK,this,this.onBtnRoadClick,[1]);
		// this.road2.on(Laya.Event.CLICK,this,this.onBtnRoadClick,[2]);
		// this.road3.on(Laya.Event.CLICK,this,this.onBtnRoadClick,[3]);
		// this.road4.on(Laya.Event.CLICK,this,this.onBtnRoadClick,[4]);
		// this.right_arrow.on(Laya.Event.CLICK,this,this.onBtnArrowClick,[1]);
		// this.left_arrow.on(Laya.Event.CLICK,this,this.onBtnArrowClick,[-1]);
		//this.testlink.on(Laya.Event.CLICK,this,this.onLink,["comp/bg_pure.png"]);
		//Laya.timer.once(2000,this,this.loadingScene);


		this.phase1.on(Laya.Event.CLICK,this,this.switchTokensale,[1]);
		this.phase2.on(Laya.Event.CLICK,this,this.switchTokensale,[2]);
		this.phase3.on(Laya.Event.CLICK,this,this.switchTokensale,[3]);
		this.phase4.on(Laya.Event.CLICK,this,this.switchTokensale,[4]);

		

		
		Laya.timer.loop(1000,this,this.countdown);
		
		this.roadmap.on(Laya.Event.CLICK,this,this.roadmapAction);
	}

	private switchTokensale(clickNumber:number){
		console.log("click" + clickNumber);
		if(!this.ani_1to2.isPlaying&&!this.ani_2to3.isPlaying&&!this.ani_3to4.isPlaying&&!this.ani_4to3.isPlaying&&!this.ani_3to2.isPlaying&&!this.ani_2to1.isPlaying){
			switch (clickNumber){
				case 1:
					if(this.currentTokensale==2){
						this.ani_2to1.play(0,false);
						this.currentTokensale=1;
						this.phase1.mouseEnabled = true;
						this.phase2.mouseEnabled = true;
						this.phase3.mouseEnabled = false;
						this.phase4.mouseEnabled = false;
					}
					break;

				case 2:
					if(this.currentTokensale==1){
						this.ani_1to2.play(0,false);
						this.currentTokensale=2;
						this.phase1.mouseEnabled = true;
						this.phase2.mouseEnabled = true;
						this.phase3.mouseEnabled = true;	
						this.phase4.mouseEnabled = false;
					}
					else if(this.currentTokensale==3){
						this.ani_3to2.play(0,false);
						this.currentTokensale=2;	
						this.phase1.mouseEnabled = true;
						this.phase2.mouseEnabled = true;
						this.phase3.mouseEnabled = true;	
						this.phase4.mouseEnabled = false;					
					}					
					break;

				case 3:
					if(this.currentTokensale==4){
						this.ani_4to3.play(0,false);
						this.currentTokensale=3;
						this.phase1.mouseEnabled = false;
						this.phase2.mouseEnabled = true;
						this.phase3.mouseEnabled = true;	
						this.phase4.mouseEnabled = true;						
					}
					else if(this.currentTokensale==2){
						this.ani_2to3.play(0,false);
						this.currentTokensale=3;
						this.phase1.mouseEnabled = false;
						this.phase2.mouseEnabled = true;
						this.phase3.mouseEnabled = true;	
						this.phase4.mouseEnabled = true;						
					}
					
					break;

				case 4:
					if(this.currentTokensale==3){
						this.ani_3to4.play(0,false);
						this.phase1.mouseEnabled = false;
						this.phase2.mouseEnabled = false;
						this.phase3.mouseEnabled = true;
						this.phase4.mouseEnabled = true;
						this.currentTokensale=4;
					}
					
					break;



			}
		}

	}

	private countdown() {
		var time = new Date("2018-06-30").valueOf() - new Date().valueOf();		
		var day = Math.floor(time/86400000);
		var hour = Math.floor((time-day*86400000)/3600000);
		var minute = Math.floor((time-day*86400000-hour*3600000)/60000);
		var second =  Math.floor((time-day*86400000-hour*3600000-minute*60000)/1000);
		if(day>=0&&day<10){
			this.day1.index=day;
		}
		if(day>10){
			this.day1.index = Math.floor(day%10);
			this.day2.index = Math.floor(day/10);
		}
		if(hour>=0&&hour<10){
			this.hour1.index = Math.floor(hour);
		}
		if(hour>10){
			this.hour1.index = Math.floor(hour%10);
			this.hour2.index = Math.floor(hour/10);
		}
		if(minute>=0&&minute<10){
			this.minute2.index = 0;
			this.minute1.index = Math.floor(minute);
		}
		if(minute>10){
			this.minute1.index = Math.floor(minute%10);
			this.minute2.index = Math.floor(minute/10);
		}
		if(second>=0&&second<10){
			this.second2.index = 0;
			this.second1.index = Math.floor(second);
		}
		if(second>10){
			this.second1.index = Math.floor(second%10);
			this.second2.index = Math.floor(second/10);
		}


		this.mask_bar.graphics.drawRect(0,0,((100-day)/100)*1110,68,"#ffffff");


	}
	private roadmapAction(){
		this.ani3.stop();
		this.ani2.play(0,false);
		this.roadmap.mouseEnabled = false;
		Laya.timer.once(5000,this,this.playPoint1);
		
	}

	private playPoint1(){
		this.ani_toPoint1.play(0,false);
		this.roadmap_point2.mouseEnabled = true;
		this.roadmap_point3.mouseEnabled = true;
		this.roadmap_point4.mouseEnabled = true;
	}

	private onNavClick(item:string){
		var position:number = 0;
		switch(item){
			case "why":
				position = 0;
				break;
			case "tokensale":
				position = -(this.height+50)*1;
				break;
			case "roadmap":
				position = -(this.height+50)*3;
				break;
			case "founder":
				position = -(this.height+50)*4;
				break;
			case "advisor":
				position = -(this.height+50)*5;
				break;
			
		}

		console.log(this.page.y);
		console.log(position);

		Laya.timer.loop(10,this,this.onNav,[position]);
	}

	private onNav(position:number){
		
		console.log(this.page.y);
		console.log(position);
		if(Math.abs(this.page.y-position)<70){
			this.page.y -= this.page.y-position;
			Laya.timer.clear(this,this.onNav);
			console.log(1);
		}
		else if(this.page.y>position){
			this.page.y -= 80; 
			console.log(2);
		}
		else if(this.page.y<=position){
			this.page.y += 80; 
			console.log(3);
		}
		
	}

	private loadingScene(){
		this.loading.alpha=0;
	}
	private onMousewheel(e: laya.events.Event):void{
		var newy:number;
		if (e.delta>0){
			newy=this.page.y+(this.height+50)/10;
			if(newy>0)
				return;
			this.page.y=newy;
		}
		if (e.delta<0){
			newy=this.page.y-(this.height+50)/10;
			if(newy<-(this.height+50)*5)
				return;
			this.page.y=newy;
		}
		this.menu.y=-this.y;
	}
	private rightcard(index:number):number{
		if ((index+1)==this.why_cards.length){
			return 0;
		} else{
			return index+1;
		}

	}
	private leftcard(index:number):number{
		if ((index-1)<0){
			return this.why_cards.length-1;
		} else{
			return index-1;
		}

	}
    private  onLink(data:any):void{
            // TODO Auto Generated method stub
        Laya.Browser.window.open(data);
		console.log("a");
    }
	private onBtnArrowClick(dir:number):void{
		this.why_cards[this.why_card_curindex].mouseEnabled=false;
		if (dir==1){
			this.rightdowns[this.why_card_curindex].play(0,false);
			this.rightdises[this.rightcard(this.why_card_curindex)].play(0,false);
			this.leftups[this.leftcard(this.why_card_curindex)].play(0,false);
			var tempcurindex=this.leftcard(this.why_card_curindex);
			this.leftapps[this.leftcard(tempcurindex)].play(0,false);
			this.why_card_curindex=tempcurindex;
			this.why_cards[this.why_card_curindex].mouseEnabled=true;
		}else{
			this.leftdowns[this.why_card_curindex].play(0,false);
			this.leftdises[this.leftcard(this.why_card_curindex)].play(0,false);
			this.rightups[this.rightcard(this.why_card_curindex)].play(0,false);
			var tempcurindex=this.rightcard(this.why_card_curindex);
			this.rightapps[this.rightcard(tempcurindex)].play(0,false);
			this.why_card_curindex=tempcurindex;
			this.why_cards[this.why_card_curindex].mouseEnabled=true;
		}
	}
	private onBtnRoadClick(pos:number):void{
		this.roadmap_sec.y=11+(this.roadmap_bar.space+this.road0.height)*pos;
	}
	// private onBtnPageClick(page:Laya.Box,pagemove:ui.test.moveupUI,bg:string):void{
	// 	var i:number;
	// 	for (i=0;i <this.moveani.length;i++){
	// 		if (this.moveani[i]==pagemove){
	// 			continue;
	// 		}
	// 		if (this.moveani[i].isPlaying){
	// 			return;
	// 		}
	// 	}
	// 	if (this.curtabpanel!=page){
	// 		if (this.curtabpanel)
	// 			this.curtabpanel.y=804;
	// 		pagemove.play(0,false);
	// 	}
	// 	this.curtabpanel=page;
	// 	this.background.skin=bg;
	// }
	
	
	private onListRender(item: Laya.Box, index: number): void {
		//自定义list的渲染方式
		var label: Label = item.getChildByName("label") as Label;
		if (index % 2) {
			label.color = "#ff0000";
		} else {
			label.color = "#000000";
		}
	}
}

//程序入口
Laya.init(1920, 1080);
//激活资源版本控制
// Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));

function onLoaded(): void {
	//实例UI界面
	var testUI: TestUI = new TestUI();
	Laya.stage.addChild(testUI);
	
}
