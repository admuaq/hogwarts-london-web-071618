import React, { Component } from 'react'

export default class UserControl extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.filterGreased}>Filter Greased</button>
                <button onClick={this.props.filterByWeight}>Sort by Weight</button>
            </div>
        )
    }

}