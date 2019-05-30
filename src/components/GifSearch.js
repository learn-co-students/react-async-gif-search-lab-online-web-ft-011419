import React from 'react'

class GifSearch extends React.Component {

  state = {}


render() {
  return (
    <div>
      <form onSubmit={this.props.submitQuery}>
        <input type="text" name="query" placeholder="Search Gifs"/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  )
}
}
export default GifSearch
