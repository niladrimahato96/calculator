import React from 'react';
import Screen from './Screen';
import Button from './Button';

class App extends React.Component{
  state = {
    queryString : null,
    total : 0
  }
  buttonNumbers = [1,2,3,4,5,6,7,8,9,0];
  buttonsSpecial = [
    {
      id : 10,
      value : '+'
    },
    {
      id : 11,
      value : '-'
    },
    {
      id : 12,
      value : '*'
    },
    {
      id : 13,
      value : '/'
    },
    {
      id : 14,
      value : '='
    }
  ];

  makeString = str => {
    if(str === "="){
      this.setState({
        total : eval(this.state.queryString)
      });
    }else{
      if(this.state.queryString === null){
        this.setState({
          queryString : str
        });
      }else{
        this.setState({
          queryString : ""+this.state.queryString+str
        });
      }
      setTimeout(()=>{
        console.log(this.state.queryString);
      },10);
    }
  }
  render(){
    return(
        <div className="col-md-2">
          <Screen queryString={this.state.queryString} total={this.state.total}/>
          <Button buttonNumbers={this.buttonNumbers} onClick={this.makeString} buttonsSpecial={this.buttonsSpecial}/>
        </div>
    );
  }
}

export default App;
