import React from 'react';
import '../css/button.component.css';

class ButtonComponent extends React.Component {
    render() {
        return <button className='sample-button' onClick={this.props.actionClick}>{this.props.label}</button>;
    }
}

export default ButtonComponent;