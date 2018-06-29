
class VideoDialog extends ui.test.VideoUIUI
{
	constructor(){
		super();
	



		var videoSprite:Laya.Video = new Laya.Video(640,360);
		videoSprite.load("res/pitch.mp4");
		this.addChild(videoSprite);
		this.btn_close.zOrder=10;
		videoSprite.x = (this.width-videoSprite.width)/2;
		videoSprite.y = (this.height-videoSprite.height)/2;
		videoSprite.play();


		this.btn_close.on(Laya.Event.CLICK,this,this.closeDialog,[videoSprite]);

	}

	closeDialog(videoSprite:Laya.Video):void{
		videoSprite.pause();
		videoSprite.destroy();
		this.close();
	}
}
