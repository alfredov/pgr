import React from 'react';
import PropTypes from 'prop-types';
import { CheckBox, ToggleBtn } from './styled';

const Switch = ({ on, className, ...rest }) => 
  <div>
    <CheckBox
      type="checkbox"
      checked={on}
      onClick={() => {}}
    />
    <ToggleBtn on={on} aria-label="Toggle" {...rest} />
  </div>;

Switch.propTypes = {
  on: PropTypes.bool.isRequired,
  className: PropTypes.string
};

Switch.defaultProps = {
  className: ''
};

export default Switch;
