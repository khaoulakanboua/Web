import React,{Component} from 'react';
import Header from './Component/Header';
import Input from './Component/Input';
import Marked from 'marked';


class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        text:""
      };
    };

    onHandleChange = (e) =>{
        let val = e.target.value;
        const newVal = {
          text:val
        };
        this.setState(newVal);
    }

    getMarkedownText(text){
      var textMarkup = Marked(text);
      return {__html: textMarkup};
    }

    render(){
        
        return(
          <div className="container">
            <Header />
            <Input onHandleChange={(e)=>this.onHandleChange(e)} />
            <div dangerouslySetInnerHTML = {this.getMarkedownText(this.state.text)} />
          </div>
            
        );
    }
}

export default App;