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
      city: 'All',
      homeType: 'All',
      bedrooms: 0,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      gym: false,
      filteredData: listingsData,
      populateFormsData: ''
    }
    //2. Bind it to the class
    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.populateForms = this.populateForms.bind(this);
  }
  //1.Create the method - triggers everytime a change happens (passed to Filter.js)
  change(event){
    //Take the name of what changed
    var name = event.target.name;
    //Take the value of what changed
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
    //Adds(or updates) App state - 1st change = adds K/V "name of field: value" (e.g "city: Maimai") to state, 2nd change = updates the states
    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })
  }
  //Filter - loops through every listing, compares to see if it is >= the filter number, if not it doesnt add it to the array (newData)
  filteredData(){
    //Filter price and floor space
    var newData = this.state.listingsData.filter((item) => {
      //Can't put && on new line, causes filters not to work
      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.bedrooms
    })
    //Filters city
    if(this.state.city != "All"){
      newData = newData.filter((item) => {
        return item.city == this.state.city
      })
    }
    //Filters house type
    if(this.state.homeType != "All"){
      newData = newData.filter((item) => {
        return item.homeType == this.state.homeType
      })
    }
    //Updates the state and page
    this.setState({
      filteredData: newData
    });
  }
  populateForms(){
    //City - returns array with all the cities in the "cities" variable
    var cities = this.state.listingsData.map((item) =>{
      return item.city
    })
    //Removes repeats - creates a Set (an object)
    cities = new Set(cities)
    //Turns the Set into an Array (using spread operator)
    cities = [...cities]
    console.log(cities)

    //homeType
    var homeTypes = this.state.listingsData.map((item) =>{
      return item.homeType
    })
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]
    //bedrooms
    var bedrooms = this.state.listingsData.map((item) =>{
      return item.rooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]
    this.setState({
      populateFormsData: {
        homeTypes,
        bedrooms,
        cities
      }
    }, () => {
      console.log(this.state)
    })
  }
  render () {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} populateAction={this.populateForms}/>
          <Listings listingsData={this.state.filteredData}/>
        </section>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
