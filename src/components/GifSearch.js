import React from 'react'

class GifSearch extends React.Component {

  state = {
    search: []
  }

  handleChange = event => {
    this.setState({ search: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.searchHandler(this.state.search)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' id='search' value={this.state.search} onChange={this.handleChange} />
      </form>
    )
  }
}

export default GifSearch
