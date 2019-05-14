import React from 'react'
import './css/slide.css'

export default class Slide extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="slide">
            <div style={{ backgroundImage: `url(${this.props.image})`}}> </div>
                {/* <img src={this.props.image}/> */}
                <div className="desc">
                    <h3>{this.props.category}</h3>
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        )
    }
}