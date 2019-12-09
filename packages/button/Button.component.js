import React from 'react';
import './css/button.component.css';

class ButtonComponent extends React.Component {
    render() {
        return <button>{this.props.label}</button>;
    }
}

export default ButtonComponent;