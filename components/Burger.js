import React from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../styles/tokens';

const StyledBurger = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 40px;
  height: 40px;
  
  div {
    width: 24px;
    height: 2px;
    background: ${colors.neutral.n40};
    margin: 3px 0;
    transition: all 0.1s ease-in-out;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
    	width: 16px;
      opacity: ${({ open }) => open ? '0' : '1'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = (props) => {
	return (
		<StyledBurger open={props.open}>
			<div />
			<div />
			<div />
		</StyledBurger>
	);
}

export default Burger;