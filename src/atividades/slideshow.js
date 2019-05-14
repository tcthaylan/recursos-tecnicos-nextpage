import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {position:0}

        this.images = ['slide01.jpg', 'slide02.jpg', 'slide03.jpg', 'slide04.jpg', 'slide05.jpg']
        this.prev = this.prev.bind(this)
        this.next = this.next.bind(this)
    }

    prev() {
        let pos = this.state.position

        if (pos == 0) {
			pos = 5
		}

        this.setState({
            position: pos -= 1   
        })
    }

    next() {
        let pos = this.state.position
        
        if (pos == this.images.length - 1) {
            pos = -1
        }

        this.setState({
            position: pos += 1   
        })
    }

    render() {
        return (
        <div className="App">
            <div className="slide-container">
                <div className="slide">
                    {console.log(this.state.position)}
                    <img src={this.images[this.state.position]}/>
                </div>
                <button onClick={this.prev} className="prev">&#10094;</button>
                <button onClick={this.next} className="next">&#10095;</button>
            </div>
        </div>
        )
    }
}

export default App