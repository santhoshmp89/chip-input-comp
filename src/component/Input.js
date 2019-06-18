import React, {Component} from 'react';

export default class Input extends Component {
  handleClick = e => {
    this.props.handleInputValue (e.target.value);
  };
  handleKey = e => {
    this.props.handleKeyUp (e.keyCode);
  };
  render () {
    return (
      <input
        className="chip-input"
        type="text"
        value={this.props.inputValue}
        onChange={this.handleClick}
        onKeyUp={this.handleKey}
      />
    );
  }
}
