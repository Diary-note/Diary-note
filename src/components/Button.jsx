import React from 'react'
import styled from 'styled-components';

export default function Button(props) {
    const {label, styleClass, onClick, disabled} = props;
    return (
        <StyButton className={styleClass} onClick={onClick} disabled={disabled}>{label}</StyButton>
    )
}


const StyButton = styled.button`
  background-color: #655756;
  border-radius: 15px;
  border: 2px solid #655756;
  color: #adca49;
  margin-right: 1em;
  padding: 5px 30px;
  line-height:20px;
  display:inline-block;
  cursor: pointer;
  color: var(--button-color, #adca49);
  font-size: var(--button-font-size, 1rem);
  &:hover
  {
    background: var(--button-hover-bg-color, #adca49);
    color: var(--button-color, #655756);
  }
`;
