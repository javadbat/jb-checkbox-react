class JBCheckBoxService{
    JBCheckBoxComponentDom = null;
    value = null;
    constructor(props){
        this.value = props.value;
        this.onChange = props.onChange;
    }

    onClick(){
        //call onChange callback
        //temporary we do it ourself
        //we dont make it reacive
        var value = !this.value
        var event = new CustomEvent("change",{
            detail: {
                oldValue:this.value,
                newValue:value
			},
			bubbles: true,
			cancelable: true
        });
        event.simulated = true;
        let tracker = this.JBCheckBoxComponentDom._valueTracker;
        if (tracker) {
            tracker.setValue(value);
        }
        this.JBCheckBoxComponentDom.value = value;
        this.JBCheckBoxComponentDom.onchange = (e)=>this.onChange(e);

        this.JBCheckBoxComponentDom.dispatchEvent(event);
    }
}
export default JBCheckBoxService