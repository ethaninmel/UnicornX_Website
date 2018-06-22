/**
 * Hammer
 */
class Hammer extends ui.HammerUI {
    x_position:number;
    y_position:number;
    constructor(x:number,y:number) {
        super();
        this.x_position = x;
        this.y_position = y;
    }
    //开始使用
    start():void
    {
        Laya.Mouse.hide();
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);
        Laya.stage.on(Laya.Event.CLICK,this,this.onMouseMove);
        this.onMouseMove();
    }
    //结束使用
    end():void{
        Laya.Mouse.show();
        Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
        Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);
    }

    onMouseDown():void{
        this.hit.play(0,false);
    }
    onMouseMove():void{

        this.pos(Laya.stage.mouseX-this.x_position-this.width/2,Laya.stage.mouseY-this.y_position-this.height/3);
    }
}