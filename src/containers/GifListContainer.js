import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends Component {

  state = {
   gifs: []
  }
  render() {
    return (
      
      <div>
      
        <GifList results ={this.state.gifs} />
        <GifSearch onsubmit={this.onsubmit} />
      </div>
    )
  }
  onsubmit = (QUERY) =>{

  // console.log(event)
   fetch(`http://api.giphy.com/v1/gifs/search?q=${QUERY}&api_key=u0gEsx2mKd94Cg1PPuNBrc65uv4OpnQe&rating=g&limit=3`)
     .then(response => response.json())
     .then(res=> {

      this.setState({
        gifs: res.data 
      })
       console.log(res.data)
     })
 }
 
 

   

}
  




