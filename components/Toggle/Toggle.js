import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from './Switch';

class Toggle extends Component {
  state = { on: false }
  toggle = () => {
    this.setState(({ on }) => ({ on: !on }), () => { this.props.onToggle(this.state.on ) });
  }
  render() {
    const { on } = this.state;
    return <Switch on={on} onClick={this.toggle} />
  }
}

Toggle.propTypes = {
  onToggle: PropTypes.func
};

Toggle.defaultProps = {
  onToggle: () => {}
};

export default Toggle;
