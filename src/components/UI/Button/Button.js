// import React from 'react';
import styled from 'styled-components';

// import './Button.css';

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 8px;
  color: white;
  background: radial-gradient(circle at 10% 41%, rgb(188 122 32) 0%, rgb(201 125 48) 90%);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

&:focus {
  outline: none;
}

&:hover,
&:active {
  background: radial-gradient(circle at 10% 41%, rgb(188 122 32) 0%, rgb(201 125 48) 90%);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}
`;

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
