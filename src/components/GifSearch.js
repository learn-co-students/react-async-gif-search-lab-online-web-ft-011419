import React from 'react';

class GifSearch extends React.Component {

    constructor() {
        super()
        this.state = {
            search: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.search)
        this.props.onSubmitHandler(this.state.search)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Search:
                    <input type="text" id="search" value={this.state.search} onChange={event => this.handleChange(event)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default GifSearch