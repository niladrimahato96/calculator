import React from 'react';

const Button = props => {
  const keys = props.buttonNumbers.map(number => {
    return <input type="button" key={number} style={{ flexGrow: '1',flexBasis: '60px' }} onClick={() => {props.onClick(number)}}  value={number} />
  });
  const sKeys = props.buttonsSpecial.map(number => {
    return <input type="button" key={number.id} style={{ flexGrow: '1',flexBasis: '60px' }}  onClick={() => {props.onClick(number.value)}}  value={number.value} />
  });
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {keys}
      {sKeys}
    </div>
  );
}

export default Button;
