import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };
  // show = () => {
  //   this.setState({ visible: true });
  // };
  // hide = () => {
  //   this.setState({ visible: false });
  // };

  render() {
    return (
      <div className="Dropdown">
        <button type="button" className="Dropdown__togle" onClick={this.toggle}>
          {this.state.visible ? 'hide' : 'show'}
        </button>
        {/* <button type="button" className="Dropdown__togle" onClick={this.hide}>
          {' '}
          Скрити */}
        {/* </button> */}
        {this.state.visible && <div className="Dropdown__menu">випадалка</div>}
      </div>
    );
  }
}
export default Dropdown;

// class Dropdown extends Component {
//   state = {
//     visible: false,
//   };

//   toggle = () => {
//     this.setState(prevState => ({
//       visible: !prevState.visible,
//     }));
//   };

//   render() {
//     const { visible } = this.state;

//     return (
//       <div className="Dropdown">
//         <button
//           type="button"
//           className="Dropdown__toggle"
//           onClick={this.toggle}
//         >
//           {visible ? 'Скрыть' : 'Показать'}
//         </button>

//         {visible && <div className="Dropdown__menu">Выпадающее меню</div>}
//       </div>
//     );
//   }
// }

// export default Dropdown;
