import React from "react";
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid black;
`

const OperatorButton = props => {
  return (
    <Button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operator.char}
    </Button>
  );
};

export default OperatorButton;