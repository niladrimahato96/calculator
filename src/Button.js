import React from 'react';
import './Button.css';

const Button = props => {
  const keys = props.buttonNumbers.map(number => {
    return <input type="button" key={number} style={{ flexGrow: '1', flexBasis : '40px', height : '40px' }} onClick={() => {props.onClick(number)}}  value={number} />
  });
  const sKeys = props.buttonsSpecial.map(number => {
    return <input type="button" key={number.id} style={{ flexGrow: '1', flexBasis : '40px', height : '40px'  }}  onClick={() => {props.onClick(number.value)}}  value={number.value} />
  });
  return (
    <div style={{display:'flex'}}>
      <div className="numberKeys" style={{ display : 'flex', flexWrap : 'wrap'}}>
        {keys}
      </div>
      <div className="specialKeys" style={{ display : 'flex', flexWrap : 'wrap'}}>
        {sKeys}
      </div>
    </div>
  );
}

export default Button;
