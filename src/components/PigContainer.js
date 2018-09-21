import React, { Component } from 'react'
import PigList from './PigList.js'
import UserControl from './UserControl.js'


export default class PigContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            pigs: props.pigData
        }
    }

    filterPigs = () => {
        let filtered = this.state.pigs.filter( pig => pig.greased === true)
        this.setState({ pigs : filtered })
    }

    filterPigsbyWeight = () => {
        let filtered = this.state.pigs.sort( (a, b)  => 
        b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - 
        a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        )
    
        this.setState({ pigs : filtered })
    }

    hideHog = (chosenPig) => {
        console.log(chosenPig)
        let filtered = this.state.pigs.filter( pig => pig !== chosenPig)
        this.setState({ pigs : filtered })
    }

    render () {
        // console.log(this.state.pigs)
        return (
            <div>
                <UserControl filterGreased={this.filterPigs} filterByWeight ={this.filterPigsbyWeight}/>
                <p></p>
                <PigList pigs={this.state.pigs} hidePig={this.hideHog}/>
            </div>
        )
    }
}

