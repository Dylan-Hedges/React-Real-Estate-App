import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js';
import Filter from './Filter.js';
import Listings from './Listings.js';
import listingsData from './data/listingsData.js';


class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      listingsData,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      gym: false
    }
    //2. Bind it to the class
    this.change = this.change.bind(this);
  }
  //1.Create the method - triggers everytime a change happens (passed to Filter.js)
  change(event){
    //Take the name of what changed
    var name = event.target.name;
    //Take the value of what changed
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
    //Adds(or updates) App state - 1st change = adds K/V "name of field: value" (e.g "neighbourhood: Maimai") to state, 2nd change = updates the states
    this.setState({
      [name]: value
    }, () => {
      console.log(this.state);
    })
  }
  render () {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter change={this.change} globalState={this.state}/>
          <Listings listingsData={this.state.listingsData}/>
        </section>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
