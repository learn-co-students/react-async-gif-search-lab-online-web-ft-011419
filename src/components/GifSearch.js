import React, { Component } from 'react'

export default class GifSearch extends Component {
  state = {
   search: ""
  }
  handleChange = (event) =>{
  this.setState(
    {search: event.target.value}

  )
   
}
  onsubmit = () =>{
    this.props.onsubmit(this.state.search)
  }

render (){
return (
<div>
    <input type="text" value={this.state.search} onChange={this.handleChange}></input> <br></br>
    <button onClick={this.onsubmit } > Find Gifs </button>
  </div>
)
////this.props.onsubmit


//<input type = "text"  value 
}
}