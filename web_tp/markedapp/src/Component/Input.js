import React from 'react';

class Input extends React.Component {
    render(){
        return(
            <div className="Input">
                <input type="textarea" onChange={this.props.onHandleChange}></input>
            </div>
        )
    }
}

export default Input;