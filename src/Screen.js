import React from 'react';
import './Screen.css';

const Screen = props => {
  return (
    <div>
      <div className="form-group">
        <div className="form-control" style={{height: '66px', position : 'relative', borderRadius:'4px 4px 0px 0px', background : 'rgb(183, 148, 89)', color : 'black', fontWeight : '600', border : 'none', overflow : 'hidden'}} rows="5" id="comment" >
          <div style={{wordBreak : 'break-all', position : 'absolute', textAlign : 'right', bottom : '4px', right : '6px' }}>{props.queryString}
          </div>
        </div>
        <div className="form-control" style={{     border: '0px', borderRadius: '0px',position: 'relative',background: '#7f653a',color: 'white',fontWeight: '600' }}>
          Total:<span style={{right:'10px', position : 'absolute'}}>{props.total}</span>
        </div>
      </div>
    </div>
  );
}

export default Screen;
