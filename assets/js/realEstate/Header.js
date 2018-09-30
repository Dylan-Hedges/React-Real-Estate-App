import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor () {
    super()
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <header>
        <div className="leftNav">
          <a href="#" className="logo">
            <i className="fa fa-home"></i>
          </a>
          <p>Everyday Homes</p>
        </div>
        <div className="rightNav">
          <nav>
            <a href="#">Buy</a>
            <a href="#">Sell</a>
            <a href="#">Rent</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>
    )
  }
}
