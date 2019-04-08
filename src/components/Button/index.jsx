import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../config/theme.js';

const StyledButton = styled.button`
  border: none;
  outline: none;
  transition: all .2s;
  
  background: ${colors.grey_100};
  color: ${colors.grey_700};

  &:hover {
    background: ${colors.grey_200};
    color: ${colors.grey_700};
  }
  
  ${props =>
    props.size === 'small' &&
    css`
      font-size: 1rem;
      padding: 0.3rem 0.5rem;
    `}
  
  ${props =>
    props.size === 'medium' &&
    css`
      font-size: 1.5rem;
      padding: 0.5rem 0.75rem;
    `}
  
  ${props =>
    props.size === 'big' &&
    css`
      font-size: 2rem;
      padding: 0.75rem 1rem;
    `}
  
  ${props =>
    props.size === 'huge' &&
    css`
      font-size: 3rem;
      padding: 1rem 1.5rem;
    `}
  
  ${props =>
    props.rounded &&
    css`
      border-radius: 1rem;
    `}
    
  ${props =>
    props.primary &&
    css`
      background: ${colors.grey_600};
      color: ${colors.grey_050};

      &:hover {
        background: ${colors.grey_700};
        color: ${colors.grey_050};
      }
    `}
   
  ${props =>
    props.secondary &&
    css`
      background: ${colors.grey_200};
      color: ${colors.grey_700};

      &:hover {
        background: ${colors.grey_300};
        color: ${colors.grey_700};
      }
    `} 
  
  ${props =>
    props.negative &&
    css`
      background: ${colors.red_500};
      color: ${colors.grey_050};

      &:hover {
        background: ${colors.red_600};
        color: ${colors.grey_050};
      }
    `}
    
  ${props =>
    props.positive &&
    css`
      background: ${colors.cyan_500};
      color: ${colors.grey_050};

      &:hover {
        background: ${colors.cyan_600};
        color: ${colors.grey_050};
      }
    `}  
    
  ${props =>
    props.disabled &&
    css`
      background: ${colors.grey_100};
      color: ${colors.grey_300};

      &:hover {
        background: ${colors.grey_100};
        color: ${colors.grey_300};
      }
    `}
`;

export default function Button(props) {
  return (
    <StyledButton
      size={props.size}
      rounded={props.rounded}
      primary={props.primary}
      secondary={props.secondary}
      negative={props.negative}
      positive={props.positive}
      disabled={props.disabled}
      className={props.className}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  size: PropTypes.oneOf(['small', 'medium', 'big', 'huge']),
  rounded: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  negative: PropTypes.bool,
  positive: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};

Button.defaultProps = {
  children: 'Button',
  size: 'medium',
  rounded: true,
  primary: false,
  secondary: false,
  negative: false,
  positive: false,
  disabled: false,
  className: '',
  style: {},
  onClick: () => {}
};
