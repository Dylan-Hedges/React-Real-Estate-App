webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  name: "John Samson",
  postedDate: "04/03/2018",
  address: '97 Toronto Avenue',
  city: 'Toronto',
  state: 'ON',
  rooms: 0,
  price: 500000,
  floorSpace: 700,
  extras: ['elevator', 'gym'],
  homeType: 'Apartment',
  image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto389x286.jpeg',
  imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto1553x289.jpeg',
  userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/johnsamson50x50.jpeg',
  userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/johnsamson80x80.jpeg'
}, {
  name: "Nina Smith",
  postedDate: "06/08/2018",
  address: '540 New York Road',
  city: 'Ridgewood',
  state: 'NY',
  rooms: 1,
  price: 620000,
  floorSpace: 2000,
  extras: ['pool', 'gym'],
  homeType: 'Studio',
  image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto389x286.jpeg',
  imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto1553x289.jpeg',
  userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/ninasmith50x50.jpeg',
  userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/ninasmith80x80.jpeg'
}, {
  name: "Gary Arnold",
  postedDate: "03/09/2016",
  address: '82 San Francisco Road',
  city: 'San Francisco',
  state: 'CA',
  rooms: 4,
  price: 1220000,
  floorSpace: 4300,
  extras: ['garden', 'pool'],
  homeType: 'House',
  image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto389x286.jpeg',
  imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto1553x289.jpeg',
  userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/ninasmith50x50.jpeg',
  userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/ninasmith80x80.jpeg'
}, {
  name: "Rose Lucero",
  postedDate: "02/02/2017",
  address: '102 Vancouver Avenue',
  city: 'Vancouver',
  state: 'BC',
  rooms: 5,
  price: 2220000,
  floorSpace: 6000,
  extras: ['study', 'gym'],
  homeType: 'Studio',
  image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto389x286.jpeg',
  imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto1553x289.jpeg',
  userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/ninasmith50x50.jpeg',
  userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/ninasmith80x80.jpeg'
}, {
  name: "Cory Kirkpatrick",
  postedDate: "12/08/2017",
  address: '12 Chicago Road',
  city: 'Chicago',
  state: 'IL',
  rooms: 2,
  price: 350000,
  floorSpace: 1200,
  extras: ['garden', 'gym'],
  homeType: 'House',
  image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto389x286.jpeg',
  imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto1553x289.jpeg',
  userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/johnsamson50x50.jpeg',
  userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/johnsamson80x80.jpeg'
}, {
  name: "Martina Salter",
  postedDate: "05/23/2018",
  address: '1234 Miami Street',
  city: 'Miami',
  state: 'FL',
  rooms: 2,
  price: 320000,
  floorSpace: 1100,
  extras: ['pool', 'bar'],
  homeType: 'Apartment',
  image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto389x286.jpeg',
  imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto1553x289.jpeg',
  userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/ninasmith50x50.jpeg',
  userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/ninasmith80x80.jpeg'
}, {
  name: "Christian Gonzalez",
  postedDate: "28/01/2017",
  address: '95 Texas Road',
  city: 'Austin',
  state: 'TX',
  rooms: 6,
  price: 1500000,
  floorSpace: 5300,
  extras: ['gym', 'pool'],
  homeType: 'Ranch',
  image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto389x286.jpeg',
  imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto1553x289.jpeg',
  userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/johnsamson50x50.jpeg',
  userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/johnsamson80x80.jpeg'
}, {
  name: "Brandan Whitworth",
  postedDate: "11/06/2016",
  address: '567 Arizona Avenue',
  city: 'Pheonix',
  state: 'AZ',
  rooms: 3,
  price: 7220000,
  floorSpace: 6300,
  extras: ['garden', 'study'],
  homeType: 'Ranch',
  image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto389x286.jpeg',
  imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto1553x289.jpeg',
  userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/johnsamson50x50.jpeg',
  userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/johnsamson80x80.jpeg'
}];

exports.default = listingsData;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(25);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(98);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(99);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(100);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      listingsData: _listingsData2.default,
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
      filteredData: _listingsData2.default,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: ''
      //2. Bind it to the class
    };_this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.changeView = _this.changeView.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });
      this.setState({
        listingsData: listingsData
      });
    }
    //1.Create the method - triggers everytime a change happens (passed to Filter.js)

  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      //Take the name of what changed
      var name = event.target.name;
      //Take the value of what changed (if checkbox = true, then )
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      //Adds(or updates) App state - 1st change = adds K/V "name of field: value" (e.g "city: Maimai") to state, 2nd change = updates the states
      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
    }
  }, {
    key: 'changeView',
    value: function changeView(viewName) {
      this.setState({
        view: viewName
      });
    }
    //Filter - loops through every listing, compares to see if it is >= the filter number, if not it doesnt add it to the array (newData)

  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      //Filter price and floor space
      var newData = this.state.listingsData.filter(function (item) {
        //Can't put && on new line, causes filters not to work
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.rooms >= _this3.state.bedrooms;
      });
      //Filters city
      if (this.state.city != "All") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }
      //Filters house type
      if (this.state.homeType != "All") {
        newData = newData.filter(function (item) {
          return item.homeType == _this3.state.homeType;
        });
      }
      //Filters on price descending
      if (this.state.sortby == 'price-dsc') {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }
      //Filters on price ascending
      if (this.state.sortby == 'price-asc') {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }
      //Filters on search
      if (this.state.search != '') {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var n = city.match(searchText);
          if (n != null) {
            return true;
          }
        });
      }
      if (this.state.elevator === true) {
        var filter = 'elevator';
        newData = newData.filter(function (item) {
          return item.extras.indexOf(filter) >= 0;
        });
      }
      if (this.state.gym === true) {
        var _filter = 'gym';
        newData = newData.filter(function (item) {
          return item.extras.indexOf(_filter) >= 0;
        });
      }
      if (this.state.pool === true) {
        var _filter2 = 'pool';
        newData = newData.filter(function (item) {
          return item.extras.indexOf(_filter2) >= 0;
        });
      }
      if (this.state.study === true) {
        var _filter3 = 'study';
        newData = newData.filter(function (item) {
          return item.extras.indexOf(_filter3) >= 0;
        });
      }
      if (this.state.garden === true) {
        var _filter4 = 'garden';
        newData = newData.filter(function (item) {
          return item.extras.indexOf(_filter4) >= 0;
        });
      }
      //Updates the state and page
      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'populateForms',
    value: function populateForms() {
      var _this4 = this;

      //City - returns array with all the cities in the "cities" variable
      var cities = this.state.listingsData.map(function (item) {
        return item.city;
      });
      //Removes repeats - creates a Set (an object)
      cities = new Set(cities);
      //Turns the Set into an Array (using spread operator)
      cities = [].concat(_toConsumableArray(cities));
      cities = cities.sort();
      //homeType
      var homeTypes = this.state.listingsData.map(function (item) {
        return item.homeType;
      });
      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes));
      homeTypes = homeTypes.sort();
      //bedrooms
      var bedrooms = this.state.listingsData.map(function (item) {
        return item.rooms;
      });
      bedrooms = new Set(bedrooms);
      bedrooms = [].concat(_toConsumableArray(bedrooms));
      bedrooms = bedrooms.sort();
      this.setState({
        populateFormsData: {
          homeTypes: homeTypes,
          bedrooms: bedrooms,
          cities: cities
        }
      }, function () {
        console.log(_this4.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state, populateAction: this.populateForms }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData, globalState: this.state, change: this.change, changeView: this.changeView })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.cities = _this.cities.bind(_this);
    _this.homeTypes = _this.homeTypes.bind(_this);
    _this.bedrooms = _this.bedrooms.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: "cities",
    value: function cities() {
      if (this.props.globalState.populateFormsData.cities != undefined) {
        var cities = this.props.globalState.populateFormsData.cities;

        return cities.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "homeTypes",
    value: function homeTypes() {
      if (this.props.globalState.populateFormsData.homeTypes != undefined) {
        var homeTypes = this.props.globalState.populateFormsData.homeTypes;

        return homeTypes.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "bedrooms",
    value: function bedrooms() {
      if (this.props.globalState.populateFormsData.bedrooms != undefined) {
        var bedrooms = this.props.globalState.populateFormsData.bedrooms;

        return bedrooms.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item,
            "+ BR"
          );
        });
      }
    }

    //"onChange={this.props.change}" onChange is default JS method (do something on a change),in this case whenever the user makes a change execute the "change" method which is passed in as props from realEsate.js

  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "filter", className: "col-2 col-sm-2 col-md-2 col-lg-2" },
        _react2.default.createElement(
          "div",
          { className: "inside" },
          _react2.default.createElement(
            "label",
            { htmlFor: "city", className: "title" },
            "City"
          ),
          _react2.default.createElement(
            "select",
            { name: "city", className: "filters city", onChange: this.props.change },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All"
            ),
            this.cities()
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "homeType", className: "title" },
            "Home Type"
          ),
          _react2.default.createElement(
            "select",
            { name: "homeType", className: "filters homeType", onChange: this.props.change },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All Homes"
            ),
            this.homeTypes()
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "bedrooms", className: "title" },
            "Bedrooms"
          ),
          _react2.default.createElement(
            "select",
            { name: "bedrooms", className: "filters bedrooms", onChange: this.props.change },
            this.bedrooms()
          ),
          _react2.default.createElement(
            "div",
            { className: "filters price" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Price $"
            ),
            _react2.default.createElement("input", { type: "text", name: "min_price", className: "min-price", onChange: this.props.change, value: this.props.globalState.min_price }),
            _react2.default.createElement("input", { type: "text", name: "max_price", className: "max-price", onChange: this.props.change, value: this.props.globalState.max_price })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters floor-space" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Floor Space ft\xB2"
            ),
            _react2.default.createElement("input", { type: "text", name: "min_floor_space", className: "min-floor-space", onChange: this.props.change, value: this.props.globalState.min_floor_space }),
            _react2.default.createElement("input", { type: "text", name: "max_floor_space", className: "max-floor-space", onChange: this.props.change, value: this.props.globalState.max_floor_space })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters extras" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Extras"
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Elevators"
              ),
              _react2.default.createElement("input", { name: "elevator", value: "elevator", type: "checkbox", onChange: this.props.change })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Pool"
              ),
              _react2.default.createElement("input", { name: "pool", value: "pool", type: "checkbox", onChange: this.props.change })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Study"
              ),
              _react2.default.createElement("input", { name: "study", value: "study", type: "checkbox", onChange: this.props.change })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Gym"
              ),
              _react2.default.createElement("input", { name: "gym", value: "gym", type: "checkbox", onChange: this.props.change })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Garden"
              ),
              _react2.default.createElement("input", { name: "garden", value: "garden", type: "checkbox", onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(25);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'leftNav' },
          _react2.default.createElement(
            'a',
            { href: '#', className: 'logo' },
            _react2.default.createElement('i', { className: 'fa fa-home' })
          ),
          _react2.default.createElement(
            'p',
            null,
            'Everyday Homes'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'rightNav' },
          _react2.default.createElement(
            'nav',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Buy'
            ),
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Sell'
            ),
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Rent'
            ),
            _react2.default.createElement(
              'a',
              { href: '#' },
              'About'
            ),
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Contact'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    //Binds the loopListings method to the "Listings" class so we can use it (knows which "this we are talking about")
    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      var _this2 = this;

      var listingsData = this.props.listingsData;
      //"index" - passes in index number, used as the unique key for each element in the array (removes error, React uses it for updating)

      if (listingsData == undefined || listingsData.length == 0) {
        return "Sory your filter did not match any listings.";
      }
      return listingsData.map(function (listing, index) {
        if (_this2.props.globalState.view == 'box') {
          //Box view for properties
          return _react2.default.createElement(
            'div',
            { className: 'col-md-3', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("' + listing.userImage + '") no-repeat center center' } })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        listing.name
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        listing.postedDate
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'fa fa-square-o' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.floorSpace,
                          ' ft\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fa fa-bed' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rooms,
                          ' Bedrooms'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'Map View'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fa fa-map-marker' }),
                  ' ',
                  listing.city,
                  ' ',
                  listing.state
                )
              )
            )
          );
        } else {
          //Long view for properties
          return _react2.default.createElement(
            'div',
            { className: 'col-md-12 col-lg-12', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.imageLong + '") no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement('div', { className: 'user-img-long', style: { background: 'url("' + listing.userImageLong + '") no-repeat center center' } })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        listing.name
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        listing.postedDate
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'fa fa-square-o' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.floorSpace,
                          ' ft\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fa fa-bed' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rooms,
                          ' Bedrooms'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fa fa-map-marker' }),
                  ' ',
                  listing.city,
                  ' ',
                  listing.state
                )
              )
            )
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings', className: 'col-10 col-sm-10 col-md-10 col-lg-10' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', placeholder: 'Find your perfect home', onChange: this.props.change })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            this.props.globalState.filteredData.length,
            ' homes found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-list', onClick: this.props.changeView.bind(null, "long") }),
              _react2.default.createElement('i', { className: 'fa fa-th', onClick: this.props.changeView.bind(null, "box") })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          this.loopListings()
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'ul',
              { className: 'pages' },
              _react2.default.createElement(
                'li',
                null,
                'Prev'
              ),
              _react2.default.createElement(
                'li',
                { className: 'active' },
                '1'
              ),
              _react2.default.createElement(
                'li',
                null,
                '2'
              ),
              _react2.default.createElement(
                'li',
                null,
                '3'
              ),
              _react2.default.createElement(
                'li',
                null,
                '4'
              ),
              _react2.default.createElement(
                'li',
                null,
                '5'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Next'
              )
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ })

},[102]);