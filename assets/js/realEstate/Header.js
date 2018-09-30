import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <header>
      <div>
        <a href="#" className="logo">
          Everyday Homes
        </a>
      </div>
        <nav>
          <a href="#">Buy</a>
          <a href="#">Sell</a>
          <a href="#">Rent</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>)
  }
}
