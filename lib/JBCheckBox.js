import React         from 'react'
import JBCheckBoxService from './JBCheckBoxService'
import { observer }            from 'mobx-react'
import './JBCheckBox.css'

@observer
 class JBCheckBox extends React.Component{
    constructor(props){
        super(props);
        this.service = new JBCheckBoxService(props)
    }
    componentDidUpdate(prevProps , prevStates){
        if(prevProps.value != this.props.value){
            this.service.value = this.props.value;
        }
    }
    render(){
        var renderDom = <div className="jb-check-box-component-wrapper" ref={(dom)=>{this.service.JBCheckBoxComponentDom = dom}} style={this.props.style}>
            <div className="svg-wrapper" onClick={(e)=>this.service.onClick(e)}>
                <svg className={"check-box-svg " + (this.props.value?'active':'')} viewBox="0 0 52 52" >
                    <defs>      
                    <filter xmlns="http://www.w3.org/2000/svg" id="dropshadow" height="150%"><feGaussianBlur in="SourceAlpha" stdDeviation="7"></feGaussianBlur><feOffset dx="0" dy="0" result="offsetblur"></feOffset><feComponentTransfer><feFuncA type="linear" slope="0.9"></feFuncA></feComponentTransfer><feMerge><feMergeNode></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter>
                    </defs>
                     
                    <rect className="checkmark__cube" x="0" y="0" width="52" height="52" rx="5" ry="5" />
                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
            </div>
            <div className={"caption "+  (this.props.value?'active':'')}>{this.props.title?this.props.title:''}</div>
        </div>
        return(renderDom);

    }
 }
 export default JBCheckBox