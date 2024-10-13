import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './JBCheckbox.scss';
export function JBCheckbox(props:any) {
  const element = useRef<any>(null);
  const onClick = () => {
    const value = !props.value;
    const event = new CustomEvent("change", {
      detail: {
        oldValue: props.value,
        newValue: value
      },
      bubbles: true,
      cancelable: true
    });
    //@ts-ignore
    event.simulated = true;
    const tracker = element.current._valueTracker;
    if (tracker) {
      tracker.setValue(value);
    }
    element.current.value = value;
    element.current.onchange = (e) => props.onChange(e);
    element.current.dispatchEvent(event);
  };
  return (
    <div className="jb-check-box-component-wrapper" style={props.style} ref={element}>
      <div className="svg-wrapper" onClick={onClick}>
        <svg className={"check-box-svg " + (props.value ? 'active' : '')} viewBox="0 0 52 52">
          <defs>
            <filter xmlns="http://www.w3.org/2000/svg" id="dropshadow" height="150%"><feGaussianBlur in="SourceAlpha" stdDeviation="7"></feGaussianBlur><feOffset dx="0" dy="0" result="offsetblur"></feOffset><feComponentTransfer><feFuncA type="linear" slope="0.9"></feFuncA></feComponentTransfer><feMerge><feMergeNode></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter>
          </defs>

          <rect className="checkmark__cube" x="0" y="0" width="52" height="52" rx="5" ry="5" />
          <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>
      </div>
      <div className={"caption " + (props.value ? 'active' : '')}>{props.label ? props.label : ''}</div>
    </div>
  );
}
JBCheckbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

