import React, { Component } from 'react'


export default class PigList extends Component {

showDetails = (e) => {
    let chosenDiv = e.target.nextSibling 
        if (chosenDiv.style.display === 'none') {
            chosenDiv.style.display = 'block'
        }
        else {
            chosenDiv.style.display = 'none'
        } 
}

hidePig = (e) => { 
    let chosenDiv = e.target.parent
    console.log(chosenDiv)
}



render() {

    return (
        <div className="ui grid container">
            {this.props.pigs.map( pig => 
                <div className="ui eight wide column">
                    <h1 onClick={this.showDetails}>{pig.name}</h1>
                    <div className="details" style={ {display: 'none'} } >
                        <span>{pig.specialty}</span><br/>
                        <span>{`Is greased? : ${pig.greased}`}</span>
                    </div>
                    <button onClick={ this.hidePig }>x</button>
                </div>
            )}
        </div>
    )
}

}