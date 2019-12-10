import React from 'react';
import './css/button.component.css';

class ButtonComponent extends React.Component {
  render() {
    return React.createElement("button", {
      className: "sample-button",
      onClick: this.props.actionClick
    }, this.props.label);
  }

}

export default ButtonComponent;