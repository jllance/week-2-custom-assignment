import React, { Component } from 'react'

export default class Team extends Component {
    render() {
        const directory = this.props.someData.map(teamMember => {
            return (
                <div>
                    <p>{teamMember.name} is from {teamMember.location}</p>
                </div>
            )
        })
        return (
            <div>
              {directory}  
            </div>
        )
    }
}
