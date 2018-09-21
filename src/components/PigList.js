import React, { Component } from 'react'

// import '../hog-imgs'

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


render() {

    const url = pig => {
        const fileName = pig.name
        .toLowerCase()
        .replace(/\s/g, '_')

        const imageUrl = require(`../hog-imgs/${fileName}.jpg`)
    
        return imageUrl
    }

    return (
        <div className="ui grid container">
            {this.props.pigs.map( pig => 
                <div className="ui eight wide column">
                    <img src={ url(pig) } onClick={() => this.props.hidePig(pig)}/>
                    <h1 onClick={this.showDetails}>{pig.name}</h1>
                    <div className="details" style={ {display: 'none'} } >
                        <span>{pig.specialty}</span><br/>
                        <span>{`Is greased? : ${pig.greased}`}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

}