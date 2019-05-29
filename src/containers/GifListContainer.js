import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {

  state = {
    gifs: []
  }

  render() {
    return (
      <div>
        < GifSearch getGifs={this.getGifs} />
        < GifList gifs={this.state.gifs} />
      </div>
    )
  }



  getGifs = (query = 'puppies') => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(response => response.json())
      .then(({ data }) => {
        this.setState({
          gifs: data.map(gif => ({ url: gif.images.original.url }))
        })
      })
  }

  componentDidMount() {
    this.getGifs()
  }
}

export default GifListContainer