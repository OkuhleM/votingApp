import React, { Component } from 'react'

export default class Delete extends Component {
    constructor(){
        super()
        this.state = {
            data: [  
            {id:1, name: '', place: '', vote: ''},
            {id:2, name: '', place: '', vote: ''},
            {id:3, name: '', place: '', vote: ''},
            {id:4, name: '', place: '', vote: ''},
            {id:5, name: '', place: '', vote: ''},
            {id:6, name: '', place: '', vote: ''}]
        }
        this.handleRemove = this.handleRemove.bind(this)
    }

 handleRemove = (index) => {
     console.log(index)
     alert('this data will be deleted')
     var itemToBeDeleted = this.state.data.filter((item) => item !== index)
     this.setState({
            data: itemToBeDeleted
     })
     };
 
    render() {
        return (
            <div className="Delete">
                <button onClick={()=> this.handleRemove()}>Delete</button>
            </div>
        )
    }
}
