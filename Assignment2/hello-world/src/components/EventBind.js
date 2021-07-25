import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props){
        super(props)
    }
    clickHandler() {
        console.log('Clicked the button')
    }

    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default EventBind