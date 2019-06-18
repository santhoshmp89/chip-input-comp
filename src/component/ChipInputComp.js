import React, {Component} from 'react';
import Input from './Input';
import ChipComp from './ChipComp';

export default class ChipInputComp extends Component {
  state = {
    inputValue: '',
    chipLists: ['Santhosh', 'Kumar', 'Shraya'],
  };

  handleInputValue = text => {
    this.setState ({
      inputValue: text,
    });
  };

  handleKeyUp = keyCode => {
    console.log (keyCode);
    if (keyCode === 13 || keyCode === '13') {
      this.setState (
        {
          chipLists: [...this.state.chipLists, this.state.inputValue],
        },
        function () {
          this.setState ({
            inputValue: '',
          });
        }
      );
    }

    if (keyCode === 8 || keyCode === '8') {
      this.setState (function (prevState, props) {
        return {
          chipLists: prevState.chipLists.slice (
            0,
            prevState.chipLists.length - 1
          ),
        };
      });
    }
  };

  handleRemove = data => {
    this.setState ({
      chipLists: this.state.chipLists.filter (d => d !== data),
    });
  };

  render () {
    const {inputValue} = this.state;
    return (
      <div className="chips-component-wrapper">
        {this.state.chipLists.length > 0 &&
          <div className="chip-comp">
            {this.state.chipLists.map (data => (
              <ChipComp
                data={data}
                handleRemove={() => this.handleRemove (data)}
              />
            ))}
          </div>}

        <Input
          inputValue={inputValue}
          handleInputValue={this.handleInputValue}
          handleKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}
