import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {

class App extends React.Component {
  constructor(props){
    super(props);
    // this.state = {soma:0} //state
    // this.somar = this.somar.bind(this)//funcao
    // this.state = {
    //   valores: []
    // }
    // this.armazenar = this.armazenar.bind(this)
    // this.listar = this.listar.bind(this)
  }

  // somar() {
  //   let a = Number(document.querySelector('#a').value)
  //   let b = Number(document.querySelector('#b').value)

  //   let resultado = a + b

  //   this.setState({
  //     soma: resultado
  //   })
  // }

  // armazenar() {
  //   let texto = document.querySelector('#texto').value
  //   let lista = this.state.valores
  //   lista.push(texto)

  //   this.setState({
  //     valores: lista
  //   })
  //   console.log(this.state.valores)
  // }

  // listar() {
  //   let lista = this.state.valores.map(item => (
  //     <li>{item}</li>
  //   ))
  //   return lista
  // }

  render(){
    return (
      <div className="App">
        {/* <input id="inputId" onChange={(e) => {
          // let state = this.state
          // state.title = e.target.value
          // this.setState(state)

          this.setState({
            title: e.target.value
          })
          
        }} type="text"/>
        <p>{this.state.title}</p> */}

        {/* <input id="a" type="number"/>
        <input id="b" type="number"/>
        <button onClick={this.somar}>Somar</button>
        <p id="resultado">{this.state.soma}</p> */}

        {/* <input id="texto" type="text"/>
        <button onClick={this.armazenar}>Enviar</button>
        <ul>
          {this.listar()}
        </ul> */}
      </div>
    );
  }
}

export default App;