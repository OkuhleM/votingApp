import React, { Component } from 'react'

export default class Delete extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     data: [  
        //     {id:1, name: '', place: '', vote: ''},
        //     {id:2, name: '', place: '', vote: ''},
        //     {id:3, name: '', place: '', vote: ''},
        //     {id:4, name: '', place: '', vote: ''},
        //     {id:5, name: '', place: '', vote: ''},
        //     {id:6, name: '', place: '', vote: ''}]
        // }
        // this.handleRemove = this.handleRemove.bind(this)
    }


    render() {
        return (
            <div className="Delete">
                <button onClick={this.props.onClick}>Delete</button>
            </div>
        )
    }
}
