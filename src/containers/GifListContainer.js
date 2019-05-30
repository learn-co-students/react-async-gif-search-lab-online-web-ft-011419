import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{
  state={
    gifs: [],
    query: ''
  }

  componentDidMount = () => {
    console.log ('GifListContainer mounted')
    this.fetchGifs()
  }

  fetchGifs = () => {
    fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
    .then(res => res.json())
    .then(json => {
      this.setState({
        gifs: json.data
      })
    })
  }
  submitQuery = (e) => {
    e.preventDefault()
    console.dir(e.target.query.value)
    this.setState({
      query: e.target.query.value
    }, () => {
      this.fetchGifs()
    })
  }

  render() {
    return (
      <div>
      <GifSearch submitQuery={this.submitQuery}/>
      <GifList gifs={this.state.gifs} query={this.state.query}/>
      </div>
    )
  }
}
export default GifListContainer
