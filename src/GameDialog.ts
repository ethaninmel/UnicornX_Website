class GameDialog extends ui.gameDialogUI{


    private moles:Array<Mole>;
    private moleNum:number =9;
    private score:number;
    private hammer:Hammer;
   

	constructor() {
		super();
		
       
        this.moles = new Array<Mole>();
        this.startBtn.on(Laya.Event.CLICK,this,this.onStart);
        this.btn_close.on(Laya.Event.CLICK,this,this.onClose);
         
    }

    onClose():void{       
        this.close();
        Laya.Mouse.show();
    }

    onStart():void{
        
        this.start.visible = false;
        this.inGame.visible = true;
        var hitCallBackHd:Laya.Handler = Laya.Handler.create(this,this.setScore,null,false);
        for(var i:number=0;i<this.moleNum;i++){
            var box:Laya.Box = this.inGame.getChildByName("item"+i) as Laya.Box;
            var mole:Mole = new Mole(box.getChildByName("normal") as Laya.Image,
                box.getChildByName("hit") as Laya.Image ,
                box.getChildByName("scoreImg") as Laya.Image,21,hitCallBackHd);
            this.moles.push(mole);
        }
       
   
       this.hammer = new Hammer(this.x,this.y);
       this.addChild(this.hammer);
        this.startGame();
    }
    
	onLoop():void{
        this.timeBar.value -= (1/90);
        if(this.timeBar.value<=0){
            this.gameOver();
            return;
        }
        var index:number = Math.floor(Math.random()*this.moleNum);
        this.moles[index].show();
    }
    startGame():void{
        this.timeBar.value = 1;
        this.score = 0;
        this.updateScoreUI();
        this.hammer.start();
        this.hammer.visible = true;
        Laya.timer.loop(100,this,this.onLoop);
    }
    gameOver():void{
        Laya.timer.clear(this,this.onLoop);
        this.hammer.visible = false;
        this.hammer.end();
        this.setScoreUI(this.score);
        this.inGame.visible = false;
        this.gameover.visible = true;
        console.log("游戏结束！");

        this.restartBtn.on(Laya.Event.CLICK,this,this.restartGame);


        
    }
    restartGame():void{
        this.gameover.visible = false;
        this.start.visible = true;
    }
    setScoreUI(score:number):void{
        var data:any ={};
        var temp:number = score;
        for(var i:number=9;i>=0;i--){
            data["item"+i]={index:Math.floor(temp%10)};
            temp/=10;
        }
        this.scoreNums1.dataSource = data;
    }


    setScore(type:number):void{
        this.score += (type==1?-100:100);
        if(this.score<0)this.score=0;
        this.updateScoreUI();
    }
    updateScoreUI():void{
        var data:any ={};
        var temp:number = this.score;
        for(var i:number=9;i>=0;i--){
            data["item"+i]={index:Math.floor(temp%10)};
            temp/=10;
        }
        this.scoreNums.dataSource = data;
    }


    //  start1():void
    // {
    //     Laya.Mouse.hide();
    //     Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
    //     Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);
    //     this.onMouseMove();
    // }
    // //结束使用
    // end1():void{
    //     Laya.Mouse.show();
    //     Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
    //     Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);
    // }

    // onMouseDown():void{
    //     this.hammer.hit.play(0,false);
    //     console.log(this.hammer.x+" "+this.hammer.y);
    // }
    // onMouseMove():void{
    //     console.log("------------------------");
    //     console.log("Stage mouse:" + Laya.stage.mouseX+", "+Laya.stage.mouseY);
    //     console.log("THIS mouse:" + this.mouseX +", "+this.mouseY);
    //     this.hammer.pos(this.mouseX-this.width/2,this.mouseY-this.height/3);
    // }


}