import React, { Component } from 'react';
// import Controls from './Controls';
// import Value from './Value';
import './Counter.css';

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     value: 0,
  //   };
  // }

  state = {
    value: 5,
  };

  handleIncrement = () => {
    // this.setState({ value: 10 });
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });

    console.log('click on +1');
  };
  handleDecrement = () => {
    console.log('click on +1');
  };
  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}
//   static defaultProps = {
//     initialValue: 0,
//   };

//   static propTypes = {
//     //
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   handleIncrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value + 1,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     const { value } = this.state;

//     return (
//       <div className="Counter">
//         <Value value={value} />

//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//         />
//       </div>
//     );
//   }
// }

export default Counter;
