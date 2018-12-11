import React from 'react';

const Screen = props => {
  return (
    <div>
      <div className="form-group">
        <div className="form-control" style={{height: '66px', position : 'relative', borderRadius:'4px 4px 0px 0px'}} rows="5" id="comment" >
          <div style={{wordBreak : 'break-all', position : 'absolute', textAlign : 'right', bottom : '4px', right : '6px' }}>{props.queryString}
          </div>
        </div>
        <div className="form-control" style={{ borderTop: '0px', borderRadius:'0px 0px 4px 4px', position : 'relative' }}>
          Total:<span style={{right:'10px', position : 'absolute'}}>{props.total}</span>
        </div>
      </div>
    </div>
  );
}

export default Screen;
