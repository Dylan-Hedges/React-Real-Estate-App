import React, { Component} from 'react'

export default class Listings extends Component {
  constructor () {
    super()
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
                      <div className="user-img" style={{background: `url("${listing.userImage}") no-repeat center center`} }></div>
                     </div>
                     <div className="col-md-9">
                       <div className="user-details">
                       <span className="user-name">{listing.name}</span>
                       <span className="post-date">{listing.postedDate}</span>
                       </div>
                       <div className="listing-details">
                         <div className="floor-space">
                           <i className="fa fa-square-o"></i>
                           <span>{listing.floorSpace} ft&sup2;</span>
                        </div>
                        <div className="bedrooms">
                           <i className="fa fa-bed"></i>
                           <span>{listing.rooms} Bedrooms</span>
                        </div>
                       </div>
                       <div className="view-btn">
                         Map View
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="bottom-info">
                   <span className="price">${listing.price}</span>
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
             <div className="listing-img" style={{background: `url("${listing.imageLong}") no-repeat center center`} }>
               <span className="address">{listing.address}</span>
                 <div className="details">
                   <div className="col-md-3">
                   <div className="user-img-long" style={{background: `url("${listing.userImageLong}") no-repeat center center`} }></div>
                   </div>
                   <div className="col-md-9">
                     <div className="user-details">
                       <span className="user-name">{listing.name}</span>
                       <span className="post-date">{listing.postedDate}</span>
                     </div>
                     <div className="listing-details">
                       <div className="floor-space">
                         <i className="fa fa-square-o"></i>
                         <span>{listing.floorSpace} ft&sup2;</span>
                      </div>
                      <div className="bedrooms">
                         <i className="fa fa-bed"></i>
                         <span>{listing.rooms} Bedrooms</span>
                      </div>
                     </div>
                     <div className="view-btn">
                       View Listing
                     </div>
                   </div>
                 </div>
               </div>
               <div className="bottom-info">
                 <span className="price">${listing.price}</span>
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
      <section id="listings" className="col-10 col-sm-10 col-md-10 col-lg-10">
        <section className="search-area">
          <input type="text" name="search" placeholder="Find your perfect home" onChange={this.props.change}/>
        </section>
        <section className="sortby-area">
          <div className="results">{this.props.globalState.filteredData.length} homes found</div>
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
        <div className="row">
          <ul className="pages">
            <li>Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </div>
        </section>
      </section>
    )
  }
}
