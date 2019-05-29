import React from 'react';

const GifList = (props) => {
    return (
        <ul>
            {props.gifArray.map(gif => <img src={gif.images.original["url"]} alt="gif" />)}
        </ul>
    )
}

export default GifList