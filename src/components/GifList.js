import React, { Component } from 'react'

export default class Giflist extends Component {

//  { this.props.results.map(gif => <img src={gif.images.original["url"]} alt="text" />) }

render (){
  console.log(this.props.result)
  return (
    < ul>
      {this.props.results.map(gif => <img src={gif.images.original["url"]} alt="text" />)}
    
     
        </ul>
       
  )
}

  
}