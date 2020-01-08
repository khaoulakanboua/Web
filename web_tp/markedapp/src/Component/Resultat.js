import React from 'react';


class Resultat extends React.Component {
    render(){
        return(
            <div className="Resultat">
                {this.props.dangerouslySetInnerHTML}
            </div>
        )
    }
}

export default Resultat;