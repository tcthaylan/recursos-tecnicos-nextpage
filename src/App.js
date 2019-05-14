import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import CheckBox from './components/checkbox'
import Titulo from './components/Titulo';
import Slide from './components/Slide';
import Button from './components/Button'
import FormCheckbox from './components/FormCheckbox';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            position:0, 
            res: [],
            catogories: [],
            currentCheckBox: ''
        }
        this.lista = []
        this.prev = this.prev.bind(this)
        this.next = this.next.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.renderCheckBox = this.renderCheckBox.bind(this)
    }

    async componentDidMount() {
        try {
            const response = await axios.get('http://localhost:3000/')

            let categories = []
            response.data.forEach(item => {
                if (!categories.includes(item.category)) {
                    categories.push(item.category)
                }
            })
            this.lista = response.data
            this.setState({
                res: response,
                categories
            })
        } catch (error) {
            console.log(error)
        }
    }

    next() {
        // url
        // console.log(this.state.res.data[this.state.position].url)
        
        let pos = this.state.position
        
        if (pos == this.state.res.data.length - 1) {
            pos = -1
        }

        this.setState({
            position: pos += 1   
        })
    }

    prev() {
        
        let pos = this.state.position

        if (pos == 0) {
			pos = this.state.res.data.length
		}

        this.setState({
            position: pos -= 1   
        })
    }

    filter() {
        // let dataCategory = this.getAttribute('data-category')

        // console.log(dataCategory)

        // this.setState({
        //     categorySelected: dataCategory
        // })
    }

    handleCheck(e){
       let state = this.state
       console.log(this.state.res)
        let category =  document.getElementById(e.target.id).getAttribute('data-category')
       
        let teste = {data: this.state.res.data.filter(item => category == item.category)}
     
        // state.res.data = teste

        this.setState({
            res: teste,
            position:0
        })
        // this.setState({currentCheckBox :category})
    }

    renderCheckBox(){
        const { categories } = this.state
        if(categories !== undefined){
           return categories.map(item => (
               <CheckBox name={item} handleCheck={this.handleCheck}/>
           ))
        }
    }

    render() {
        let image = this.state.res.data === undefined ? '' : this.state.res.data[this.state.position] 
        console.log(this.state.res)
        return (
        <div className="App">
              <Titulo pos={this.state.position}/> 
            <div className="slide-container">
                {this.renderCheckBox()}
                {/* <FormCheckbox categories={this.state.categories} filter={this.filter}/> */}
                
                <Slide image={image.url} title={image.title} category={image.category}/>

                <Button btn={this.prev} pos={this.state.position} btnClass="prev" btnArrow="&#10094;"/>

                <Button btn={this.next} images={this.images} pos={this.state.position} btnClass="next" btnArrow="&#10095;"/>
            </div>
        </div>
        )
    }
}

export default App