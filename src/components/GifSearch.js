import React from 'react'

export default class GifSearch extends React.Component {
    state= {
        find: []
    }

    handleChange = event => {
        this.setState({ find: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault()
        this.props.searchHandler(this.target.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" id="search" 
                value={ this.state.find } 
                onChange={this.handleChange}
                />
            </form>
        )
    }
};