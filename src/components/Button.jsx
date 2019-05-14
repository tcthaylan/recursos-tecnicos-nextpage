import React from 'react'
import './css/button.css'

export default class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    // static getDerivedStateFromProps(props, state){
    // }
  
    render() {
        return(
            <button onClick={this.props.btn} className={this.props.btnClass}>{this.props.btnArrow}</button>
        )
    }
}