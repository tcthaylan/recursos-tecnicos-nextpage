import React from 'react'

export default class FormCheckbox extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let formElement = document.querySelector('form')
        let radios = document.querySelectorAll('input')

        if (this.props.categories !== undefined && radios.length < this.props.categories.length) {
            for (let i = 0; i < this.props.categories.length; i++) {
                // Text radio
                let checkboxText = document.createTextNode(this.props.categories[i])
    
                // Radio
                let checkboxElement = document.createElement('input')
                checkboxElement.setAttribute('type', 'radio') 
                checkboxElement.setAttribute('name', 'category') 
                checkboxElement.setAttribute('data-category', this.props.categories[i])

                checkboxElement.onclick = this.props.filter
    
                // add elements
                formElement.appendChild(checkboxText)
                formElement.appendChild(checkboxElement)
            }
        }

        return (
            <form>
                
            </form>
        )
    }
}