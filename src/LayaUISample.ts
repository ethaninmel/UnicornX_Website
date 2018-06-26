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
	

	public pageLength:number = -9330;

	public startY:number;

	public sp: Laya.Particle2D;
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
		UIConfig.closeDialogOnSide = false;


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
		this.tab_team.on(Laya.Event.CLICK,this,this.onNavClick,["team"]);
		this.tab_partner.on(Laya.Event.CLICK,this,this.onNavClick,["partner"]);

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



		this.page.on(Laya.Event.CLICK,this,this.dragStart);
		this.page.on(Laya.Event.CLICK,this,this.dragStop);



		this.button1.on(Laya.Event.CLICK,this,this.HtmlDemo);



		this.Aaron.on(Laya.Event.CLICK,this,this.openDesc,[0]);
		this.Anouk.on(Laya.Event.CLICK,this,this.openDesc,[1]);
		this.Jason.on(Laya.Event.CLICK,this,this.openDesc,[2]);
		this.Kieran.on(Laya.Event.CLICK,this,this.openDesc,[3]);
		this.Udaya.on(Laya.Event.CLICK,this,this.openDesc,[4]);
		this.Zhang.on(Laya.Event.CLICK,this,this.openDesc,[5]);

		// this.Anouk.on(Laya.Event.MOUSE_OVER,this,this.openDesc,[0]);
		// this.Kieran.on(Laya.Event.MOUSE_OVER,this,this.openDesc,[1]);
		// this.Zhang.on(Laya.Event.MOUSE_OVER,this,this.openDesc,[2]);


		//this.stage.on(Laya.Event.MOUSE_DOWN, this, this.onDragDown);
		if(laya.utils.Browser.onMobile){
			this.stage.on(Laya.Event.MOUSE_DOWN, this, this.onDrag);
		}

		

		Laya.loader.load("test/effect.part",Laya.Handler.create(this, this.onAssetsLoaded), null, Laya.Loader.JSON);
		
    }

 
    onAssetsLoaded(settings):void{
        this.sp = new Laya.Particle2D(settings);
		this.sp.emitter.start();
		this.sp.play();
        Laya.stage.addChild(this.sp);
        this.sp.name = "particle";
		this.sp.x = Laya.stage.width / 2;
		this.sp.y = Laya.stage.height / 2;
    }
	


	private onDrag(start:number):void{
		this.startY = Laya.stage.mouseY;
		this.stage.on(Laya.Event.MOUSE_MOVE, this, this.onDragComplete);
		Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
        Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp);
	}

	private onDragComplete():void{
		var position:number = this.page.y +(Laya.stage.mouseY - this.startY)/10;
		if(position>=this.pageLength && position<=0){
			 this.page.y = position;
		}
		else if(position>0){
			this.page.y = 0;
		}
		else if(position<this.pageLength){
			this.page.y = this.pageLength;
		}
		
	}

	private onMouseUp():void{
		this.stage.off(Laya.Event.MOUSE_MOVE, this, this.onDragComplete);
		Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp);
        Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseUp);
	}

	private onDragDown():void{
		if(laya.utils.Browser.onMobile){
			this.stage.on(Laya.Event.MOUSE_UP, this, this.onDragUp, [Laya.stage.mouseY]);
		}
		
	}

	private onDragUp(start:number):void{
		var move:number = Laya.stage.mouseY-start;
		
		if(move>0){
			if(this.page.y+move<=0){
				this.page.y += move;
			}
			else{
				this.page.y = 0;
			}
		}
		else if(move<0){
			if(this.page.y-move<=this.pageLength){
				this.page.y += move;
			}
			else{
				this.page.y = this.pageLength;
			}
		}

		
	}

	private openDesc(index:number):void{
		var desc1: string;
		var desc2: string;
		var image: string;
		switch (index){
			case 0:
				image = "comp/AaronHarwood.PNG";
				desc1 = "Dr Aaron Harwood is a Senior Lecturer in the Department of Computer Science and Software Engineering at The University of Melbourne.\n\n"
				desc2 =	"His Research interests\n" + "  Parallel and Distributed Computing (Peer-to-Peer, GPU Computing)\n  Smart Mobile Systems (Streaming Data, Mobility Analysis)\n  Social Networking (Event Detection, Topic Tracking, Influence)";
				break;

			case 1:
				image = "comp/AnoukPinchetti.PNG";
				desc1 = "Blockchain Educator and Business Strategy Consultant. Leading workshops and consulting on the application of Blockchain technology to a range of corporate and community issues.\n\n"
				desc2 =	"Technologist with a wealth of experience throughout the IT Industry, having worked on three continents for government, banking, mining, NFP and community sectors.\nTwo decades of experience "
					+ "in the IT industry, having trained to perform in disciplines ranging from network administration to software development to business analysis, service delivery management and project management. "
					+ "A broad researcher and activist in the community currencies space since the '90s. Currently a Trainer for The New Money Institute, an Education Consultant for the Melbourne Blockchain Centre, and "
					+ "Educator and Business Strategy Consultant for Intraverse Blockchain Technologies.";
				break;

			case 2:
				image = "comp/Jason.PNG";
				desc1 = ".\n\n"
				desc2 =	"";
				break;

			case 3:
				image = "comp/KieranNolan.png";
				desc1 ="I’m a Melbourne-based Educational Technologist, International Speaker, CoderDojo Mentor, and Blockchain Expert";
				desc2 =	"I am driven by three tenets: innovation, disruption, and lifelong learning—and it is these key values that empower me to play my part in revolutionising the EdTech space as we know it. "
					+"Over the course of a decade, I have gained extensive industry experience, specialising in education, technology, and blockchain application.";
				break;

			case 4:
				image = "comp/UdayaParampalli.PNG";
				desc1 = "\n\n"
				desc2 =	"Since February 2000, Dr Udaya Parampalli has been working in the Department of Computer Science and Software Engineering at the University of Melbourne, Australia. In 2008, he was a visiting "
					+ "professor at Department of Computer Science, University of Calgary, Canada. His research interests are in the area of cryptography and sequences over finite fields and rings for communications "
					+ "and information security.";

				break;


			case 5:
				image = "comp/Zhangshuai.png";
				desc1 = "Freelance Screenwriter\nFilm Producer\nE-sports Professional Player\nWCG Runner-up\nOnline Video Contributor";
				desc2 =	"";
				break;

		}

		new AdvisorDialog(image,desc1,desc2).popup();
	}

	private HtmlDemo():void{
			//window.open("http://google.com", "myWindow","width=800,height=600,top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no");
			
            var div:GameDialog=new GameDialog();
			div.popup(true);
	}


			
		
	
	private dragStart(){

	}

	private dragStop(){

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
		var time = new Date("2018-07-15").valueOf() - new Date().valueOf();		
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
		Laya.timer.once(4000,this,this.playPoint1);
		
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
			case "team":
				position = -(this.height+50)*5;
				break;
			case "advisor":
				position = -7860;
				break;
			case "partner":
				position = -8990;
				break;
			
		}

		console.log(this.page.y);
		console.log(position);

		Laya.timer.loop(10,this,this.onNav,[position]);
	}

	private onNav(position:number){
		
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
			if(newy<this.pageLength)
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


 var resArray:Array<any>=[
            {url:"res/atlas/ui.atlas",type:Laya.Loader.ATLAS},
			{url:"res/atlas/comp.atlas",type:Laya.Loader.ATLAS}
            
        ];
        Laya.loader.load(resArray,Laya.Handler.create(this,this.onLoad),null);


function onLoaded(): void {
	//实例UI界面
	var testUI: TestUI = new TestUI();
	Laya.stage.addChild(testUI);
}


