import React, {Component} from 'react';

import GifList from '../components/GifList';

import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
    state = {
        gifs: []
    }

    onSubmitHandler = (search) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=u0gEsx2mKd94Cg1PPuNBrc65uv4OpnQe&rating=g&limit=3`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then((data) => this.setState({gifs: data.data}))
    }


    render() {
        return (
            <div>
                <GifList gifArray = {this.state.gifs} />
                <GifSearch onSubmitHandler = {this.onSubmitHandler} />
            </div>
        )
    }
}

export default GifListContainer