// your Bomb code here!
import React, {Component} from 'react';

export default class Bomb extends Component{

    constructor (props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render(){
        return(
            this.state.secondsLeft !== 0 ? <div>{this.state.secondsLeft} seconds left beforeI go boom!</div>: <div>BOOM!</div>
        )
    }
}