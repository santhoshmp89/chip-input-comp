import React, {Component} from 'react';

export default class ChipComp extends Component {
  handleClose = data => {
    this.props.handleRemove (data);
  };
  render () {
    return (
      <span className="chip-item">
        {this.props.data}
        {' '}
        <span className="item" onClick={this.handleClose}>X</span>
      </span>
    );
  }
}
