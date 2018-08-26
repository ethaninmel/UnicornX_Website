
class VideoDialog extends ui.test.VideoUIUI
{
	constructor(){
		super();
	


		//播放媒体
		var videoSprite:Laya.Video = new Laya.Video(640,360);
		videoSprite.load("res/pitch.mp4");
		this.addChild(videoSprite);
		this.btn_close.zOrder=100;
		videoSprite.x = (this.width-videoSprite.width)/2;
		videoSprite.y = (this.height-videoSprite.height)/2;
		videoSprite.play();
		this.btn_close.on(Laya.Event.CLICK,this,this.closeVideoDialog,[videoSprite]);



		// var videoElement:any = Laya.Browser.createElement("video");
        // Laya.Browser.document.body.appendChild(videoElement);
        
		// Laya.Render.canvas.style.zIndex = -1;
        // // 设置Video元素地样式和属性
        // videoElement.style.zInddex = Laya.Render.canvas.style.zIndex + 1;
        // videoElement.src = "res/pitch.mp4";
        // videoElement.controls = true;
        // // 阻止IOS视频全屏
        // videoElement.setAttribute("webkit-playsinline", true);
        // videoElement.setAttribute("playsinline", true);
		//Laya.stage.on(Laya.Event.RESIZE, this, Laya.Utils.fitDOMElementInArea, [videoElement, this.reference, 0, 0, this.reference.width, this.reference.height]);
		//this.btn_close.on(Laya.Event.CLICK, this, this.closeDom,[videoElement]);

		// this.btn_close.zOrder=111;


		// var iframe = Laya.Browser.document.createElement("iframe");
		// iframe.style.position = "absolute";//设置布局定位。这个不能少。
		// iframe.style.zIndex = 100;//设置层级
		// iframe.style.left = 0;
		// iframe.style.top = 0;
		// iframe.style.margin = "auto"; 
		// iframe.style.width= "800px";
		// iframe.style.height="500px";
		// iframe.style.overflow="auto";
		// iframe.style.top = 0; 
		// iframe.style.left = 0; 
		// iframe.style.bottom = 0; 
		// iframe.style.right = 0;
		// iframe.src = "res/pitch.mp4";
		// Laya.Browser.document.body.appendChild(iframe);

		// this.btn_close.on(Laya.Event.CLICK, this, this.closeDom,[iframe]);
		
		// Laya.stage.on(Laya.Event.CLICK, this, this.closeDom,[iframe]);
		
	}

	closeDom(videoElement:any){
		
		Laya.Browser.document.body.removeChild(videoElement);
		this.close();
		
	}

	closeVideoDialog(videoSprite:Laya.Video):void{
		videoSprite.pause();
		videoSprite.destroy();
		this.close();
	}
}
