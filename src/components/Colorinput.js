import React, { Component } from 'react'

export default class Colorinput extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       colorValue : ""
    }
  }
  changeColor = (e) =>{
    this.setState({
        colorValue : e.target.value
    })
  }
  render() {
    return (
      <div style={{backgroundColor:this.state.colorValue}} className='input-area'>
        <h1>{this.state.colorValue}</h1>
        <input onChange={this.changeColor} type="text" />
        <h2>{this.state.colorValue}</h2>
      </div>
    )
  }
}
