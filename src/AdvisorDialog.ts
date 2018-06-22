class AdvisorDialog extends ui.test.AdvisorDialogUI{

    constructor(skin:string,context1:string,context2:string) {
		super();
        this.image.skin = skin;
		this.desc1.text = context1;
        this.desc2.text = context2;
        this.btn_close.on(Laya.Event.CLICK,this,this.close);
    }



}