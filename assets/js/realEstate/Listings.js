import React, { Component} from 'react'

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    //Binds the loopListings method to the "Listings" class so we can use it (knows which "this we are talking about")
    this.loopListings = this.loopListings.bind(this);
  }

  loopListings () {
    var {listingsData} = this.props;
    //"index" - passes in index number, used as the unique key for each element in the array (removes error, React uses it for updating)
    if(listingsData == undefined || listingsData.length == 0) {
      return "Sory your filter did not match any listings."
    }
    return listingsData.map((listing, index) => {
      if(this.props.globalState.view == 'box'){
        //Box view for properties
          return (
            <div className="col-md-3" key={index}>
             <div className="listing">
               <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`} }>
                 <span className="address">{listing.address}</span>
                   <div className="details">
                     <div className="col-md-3">
                       <div className="user-img"></div>
                     </div>
                     <div className="col-md-9">
                       <div className="user-details">
                         <span className="user-name">Nina Smith</span>
                         <span className="post-date">05/08/2017</span>
                       </div>
                       <div className="listing-details">
                         <div className="floor-space">
                           <i className="fa fa-square-o"></i>
                           <span>1000 ft&sup2;</span>
                        </div>
                        <div className="bedrooms">
                           <i className="fa fa-bed"></i>
                           <span>{listing.bedrooms} Bedrooms</span>
                        </div>
                       </div>
                       <div className="view-btn">
                         View Listing
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="bottom-info">
                   <span className="price">{listing.price}</span>
                   <span className="location">
                     <i className="fa fa-map-marker"></i> {listing.city} {listing.state}
                   </span>
                 </div>
             </div>
            </div>
          )
      }else{
        //Long view for properties
        return (
          <div className="col-md-12 col-lg-12" key={index}>
           <div className="listing">
             <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`} }>
               <span className="address">{listing.address}</span>
                 <div className="details">
                   <div className="col-md-3">
                     <div className="user-img"></div>
                   </div>
                   <div className="col-md-9">
                     <div className="user-details">
                       <span className="user-name">Nina Smith</span>
                       <span className="post-date">05/08/2017</span>
                     </div>
                     <div className="listing-details">
                       <div className="floor-space">
                         <i className="fa fa-square-o"></i>
                         <span>1000 ft&sup2;</span>
                      </div>
                      <div className="bedrooms">
                         <i className="fa fa-bed"></i>
                         <span>{listing.bedrooms} Bedrooms</span>
                      </div>
                     </div>
                     <div className="view-btn">
                       View Listing
                     </div>
                   </div>
                 </div>
               </div>
               <div className="bottom-info">
                 <span className="price">{listing.price}</span>
                 <span className="location">
                   <i className="fa fa-map-marker"></i> {listing.city} {listing.state}
                 </span>
               </div>
           </div>
          </div>
        )
      }
    })
  }

  render () {
    return (
      <section id="listings">
        <section className="search-area">
          <input type="text" name="search" onChange={this.props.change}/>
        </section>
        <section className="sortby-area">
          <div className="results">390 results found</div>
          <div className="sort-options">
            <select name="sortby" className="sortby" onChange={this.props.change}>
              <option value="price-dsc">Lowest Price</option>
              <option value="price-asc">Highest Price</option>
            </select>
            <div className="view">
              <i className="fa fa-list" onClick={this.props.changeView.bind(null, "long")}></i>
              <i className="fa fa-th" onClick={this.props.changeView.bind(null, "box")}></i>
            </div>
          </div>
        </section>
        <section className="listings-results">
          {this.loopListings()}
        </section>
        <section id="pagination">
          <ul className="pages">
            <li>Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    )
  }
}
