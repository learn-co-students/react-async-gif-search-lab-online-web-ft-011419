import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  searchHandler = (search) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=u0gEsx2mKd94Cg1PPuNBrc65uv4OpnQe&rating=g&limit=3`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          gifs: data.data.map(gif => ({ url: gif.images.original.url }))
        })
      })
  }

  render() {
    return (
      <div>
          < GifList gifs={this.state.gifs} />
          < GifSearch searchHandler={this.searchHandler} />
      </div>
    )
  }

}
