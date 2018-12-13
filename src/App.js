import React from 'react';
import Screen from './Screen';
import Button from './Button';

class App extends React.Component{
  state = {
    queryString : null,
    total : 0,
    test : 0
  }
  buttonNumbers = ['C','+/-','%',1,2,3,4,5,6,7,8,9,0,'.'];
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
// NEED TO FIX THE LOGIC
    if(str === "="){
      this.setState({
        total : ""+Math.round(eval(this.state.queryString)*100)/100,
        queryString : ""+Math.round(eval(this.state.queryString)*100)/100
      });
    }else if(str === "C"){
      this.setState({
        queryString : null,
        total : 0
      });
    }else{
      if(this.state.queryString === null){
        this.setState({
          queryString : ""+str
        });
      }else{
        let c = this.state.queryString;
        //let spArray = ['+','-','*','/','%'];

        if(c.charAt(c.length-1) === str){
          this.setState({
            test : typeof(c)
          });
        }else{
          this.setState({
            queryString : ""+this.state.queryString+str,
            test : c.charAt(c.length-1)
          });
        }


      }
    }
  }
  render(){
    return(
        <div className="container" style={{ width : '16%', marginTop : '13%', marginBottom: '13%', paddingLeft : '0px', paddingRight : '0px', boxShadow : '0px 0px 11px #9c9c9c' }}>
          <Screen queryString={this.state.queryString} total={this.state.total}/>
          <Button buttonNumbers={this.buttonNumbers} onClick={this.makeString} buttonsSpecial={this.buttonsSpecial}/>
          {this.state.test}
        </div>
    );
  }
}

export default App;
