import React, { Component } from 'react'

export default class Delete extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }

 handleRemove = (index) => {
     alert('this item will be deleted')
     var itemToBeDeleted = this.state.items.filter((_item)=>{
         return _item != index
     });
     this.setState({
         items: itemToBeDeleted
     })
 }
    render() {
        return (
            <div className="Delete">
                <button onClick={()=> this.handleRemove()}>Delete</button>
            </div>
        )
    }
}
