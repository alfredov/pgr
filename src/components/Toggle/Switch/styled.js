import styled from 'react-emotion';

export const CheckBox = styled('input')`
  display: none
`;

export const ToggleBtn = styled('button')`
  box-sizing: initial;
  display: inline-block;
  outline: 0;
  width: 8em;
  height: 4em;
  position: relative;
  cursor: pointer;
  user-select: none;
  background: #fbfbfb;
  border-radius: 4em;
  padding: 4px;
  transition: all 0.4s ease;
  border: 2px solid #e8eae9;
  &::after {
    left: ${props => props.on ? '50' : '0'}%;
    position: relative;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
    border-radius: 4em;
    background: #fbfbfb;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      padding 0.3s ease, margin 0.3s ease;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
  }
  &:active {
    ${props => props.on && 'box-shadow: none'}
  }
  &:focus::after,
  &:active::after {
    ${props => props.on && 'margin-left: -1.6em'}
    box-sizing: initial;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08),
      inset 0px 0px 0px 3px #9c9c9c;
  }
  &:active::after {
    padding-right: 1.6em;
  }
  ${props => props.on && 'background: #86d993'}
`;
