import React, { Component } from 'react'

export default class Colorinput extends Component {
  constructor(props) {
    super(props)
    this.inputField = React.createRef()
    this.state = {
       colorValue : ""
    }
  }
  changeColor = (e) =>{
    this.setState({
        colorValue : e.target.value
    })
  }

  componentDidMount(){
    this.inputField.current.focus()
  }
  render() {
    return (
      <div style={{backgroundColor:this.state.colorValue}} className='input-area'>
        <h1>Konsa Color</h1>
        <h1>{this.state.colorValue}</h1>
        <input onChange={this.changeColor} type="text"  ref={this.inputField}  />
      </div>
    )
  }
}
