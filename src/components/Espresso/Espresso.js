import React, { Component } from 'react';
import './Espresso.css';

class Espresso extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  static propTypes = {
    //
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  handleButtonClick = () => {
    this.setState(prevState => ({}));

    // console.log(value)
    // console.log(target);
  };

  render() {
    return (
      <div className="Feedback">
        <h1>Please leave your feedback</h1>
        <button type="button" onClick={this.handleButtonClick}>
          Good
        </button>
        <button type="button" onClick={this.handleButtonClick}>
          Neutral
        </button>
        <button type="button" onClick={this.handleButtonClick}>
          Bad
        </button>

        <h2>Statistics</h2>
        <ul>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
        </ul>
      </div>
    );
  }
}

export default Espresso;
