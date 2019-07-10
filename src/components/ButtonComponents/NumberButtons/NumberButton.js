import React from "react";

const NumberButton = props => {
  console.log(props.changeDisplay)
  return (
    <button 
      value={props.number}
      onClick={() => props.changeDisplay(props.number)}
      style={{ 
        background: "#113c78", 
        color: "white", 
        borderRadius: "50%", 
        height: "76px", 
        width: "76px", 
        marginLeft: "31px", 
        marginTop: "30px", 
        fontSize: "2rem", 
        border: "none",  
      }}
    >
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number}
    </button>
  );
};

export default NumberButton;