import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.cities = this.cities.bind(this)
    this.homeTypes = this.homeTypes.bind(this)
    this.bedrooms = this.bedrooms.bind(this)
  }
  componentWillMount(){
    this.props.populateAction()
  }
  cities(){
    if(this.props.globalState.populateFormsData.cities != undefined){
      var { cities } = this.props.globalState.populateFormsData
      return cities.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  homeTypes(){
    if(this.props.globalState.populateFormsData.homeTypes != undefined){
      var { homeTypes } = this.props.globalState.populateFormsData
      return homeTypes.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  bedrooms(){
    if(this.props.globalState.populateFormsData.bedrooms != undefined){
      var { bedrooms } = this.props.globalState.populateFormsData
      return bedrooms.map((item) => {
        return (
          <option key={item} value={item}>{item}+ BR</option>
        )
      })
    }
  }

  //"onChange={this.props.change}" onChange is default JS method (do something on a change),in this case whenever the user makes a change execute the "change" method which is passed in as props from realEsate.js
  render () {
    return (
      <section id="filter" className="col-2 col-sm-2 col-md-2 col-lg-2">
        <div className="inside">
        <label htmlFor="city" className="title">City</label>
        <select name="city" className="filters city" onChange={this.props.change}>
          <option value="All">All</option>
          {this.cities()}
        </select>
        <label htmlFor="homeType" className="title">Home Type</label>
        <select name="homeType" className="filters homeType" onChange={this.props.change}>
          <option value="All">All Homes</option>
          {this.homeTypes()}
        </select>
        <label htmlFor="bedrooms"className="title">Bedrooms</label>
        <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
          {this.bedrooms()}
        </select>
        <div className="filters price">
          <span className="title">Price $</span>
          <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price}/>
          <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price}/>
        </div>
        <div className="filters floor-space">
          <span className="title">Floor Space ft&sup2;</span>
          <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space}/>
          <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space}/>
        </div>
        <div className="filters extras">
          <span className="title">
            Extras
          </span>
          <label htmlFor="extras">
            <span>Elevators</span>
            <input name="elevator" value="elevator" type="checkbox" onChange={this.props.change}/>
          </label>
          <label htmlFor="extras">
            <span>Pool</span>
            <input name="pool" value="pool" type="checkbox" onChange={this.props.change}/>
          </label>
          <label htmlFor="extras">
            <span>Study</span>
            <input name="study" value="study" type="checkbox" onChange={this.props.change}/>
          </label>
          <label htmlFor="extras">
            <span>Gym</span>
            <input name="gym" value="gym" type="checkbox" onChange={this.props.change}/>
          </label>
          <label htmlFor="extras">
            <span>Garden</span>
            <input name="garden" value="garden" type="checkbox" onChange={this.props.change}/>
          </label>
        </div>
        </div>
      </section>
    )
  }
}
