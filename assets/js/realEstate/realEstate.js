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
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: ''
    }
    //2. Bind it to the class
    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.populateForms = this.populateForms.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  componentWillMount(){
    var listingsData = this.state.listingsData.sort((a , b) =>{
      return a.price - b.price
    })
    this.setState({
      listingsData
    })
  }
  //1.Create the method - triggers everytime a change happens (passed to Filter.js)
  change(event){
    //Take the name of what changed
    var name = event.target.name;
    //Take the value of what changed (if checkbox = true, then )
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
    //Adds(or updates) App state - 1st change = adds K/V "name of field: value" (e.g "city: Maimai") to state, 2nd change = updates the states
    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })
  }
  changeView(viewName){
    this.setState({
      view: viewName
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
    //Filters on price descending
    if(this.state.sortby == 'price-dsc'){
      newData = newData.sort((a, b) => {
        return a.price - b.price
      })
    }
    //Filters on price ascending
    if(this.state.sortby == 'price-asc'){
      newData = newData.sort((a, b) => {
        return b.price - a.price
      })
    }
    //Filters on search
    if(this.state.search != ''){
      newData = newData.filter((item)=>{
        var city = item.city.toLowerCase()
        var searchText = this.state.search.toLowerCase()
        var n = city.match(searchText)
        if(n != null){
          return true
        }
      })
    }
    if(this.state.elevator === true){
      const filter = 'elevator';
      newData = newData.filter((item) => {
        return (item.extras.indexOf(filter) >= 0)
      })
    }
    if(this.state.gym=== true){
      const filter = 'gym';
      newData = newData.filter((item) => {
        return (item.extras.indexOf(filter) >= 0)
      })
    }
    if(this.state.pool === true){
      const filter = 'pool';
      newData = newData.filter((item) => {
        return (item.extras.indexOf(filter) >= 0)
      })
    }
    if(this.state.study === true){
      const filter = 'study';
      newData = newData.filter((item) => {
        return (item.extras.indexOf(filter) >= 0)
      })
    }
    if(this.state.garden === true){
      const filter = 'garden';
      newData = newData.filter((item) => {
        return (item.extras.indexOf(filter) >= 0)
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
    cities = cities.sort()
    //homeType
    var homeTypes = this.state.listingsData.map((item) =>{
      return item.homeType
    })
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]
    homeTypes = homeTypes.sort()
    //bedrooms
    var bedrooms = this.state.listingsData.map((item) =>{
      return item.rooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]
    bedrooms = bedrooms.sort()
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
          <Listings listingsData={this.state.filteredData} globalState={this.state} change={this.change} changeView={this.changeView}/>
        </section>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
