var listingsData = [
  {
    name:"John Samson",
    postedDate: "04/03/2018",
    address: '97 Toronto Avenue',
    city: 'Toronto',
    state: 'ON',
    rooms: 0,
    price: 500000,
    floorSpace: 700,
    extras: [
      'elevator',
      'gym'
    ],
    homeType: 'Apartment',
    image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto389x286.jpeg',
    imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto1553x289.jpeg',
    userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/johnsamson50x50.jpeg',
    userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/johnsamson80x80.jpeg'
  },
  {
    name:"Nina Smith",
    postedDate: "06/08/2018",
    address: '540 New York Road',
    city: 'Ridgewood',
    state: 'NY',
    rooms: 1,
    price: 620000,
    floorSpace: 2000,
    extras: [
      'pool',
      'gym'
    ],
    homeType: 'Studio',
    image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto389x286.jpeg',
    imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto1553x289.jpeg',
    userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/ninasmith50x50.jpeg',
    userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/ninasmith80x80.jpeg'
  },
  {
    name:"Gary Arnold",
    postedDate: "03/09/2016",
    address: '82 San Francisco Road',
    city: 'San Francisco',
    state: 'CA',
    rooms: 4,
    price: 1220000,
    floorSpace: 4300,
    extras: [
      'garden',
      'pool'
    ],
    homeType: 'House',
    image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto389x286.jpeg',
    imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto1553x289.jpeg',
    userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/ninasmith50x50.jpeg',
    userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/ninasmith80x80.jpeg'
  },
  {
    name:"Rose Lucero",
    postedDate: "02/02/2017",
    address: '102 Vancouver Avenue',
    city: 'Vancouver',
    state: 'BC',
    rooms: 5,
    price: 2220000,
    floorSpace: 6000,
    extras: [
      'study',
      'gym'
    ],
    homeType: 'Studio',
    image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto389x286.jpeg',
    imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto1553x289.jpeg',
    userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/ninasmith50x50.jpeg',
    userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/ninasmith80x80.jpeg'
  },
  {
    name:"Cory Kirkpatrick",
    postedDate: "12/08/2017",
    address: '12 Chicago Road',
    city: 'Chicago',
    state: 'IL',
    rooms: 2,
    price: 350000,
    floorSpace: 1200,
    extras: [
      'garden',
      'gym'
    ],
    homeType: 'House',
    image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto389x286.jpeg',
    imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto1553x289.jpeg',
    userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/johnsamson50x50.jpeg',
    userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/johnsamson80x80.jpeg'
  },
  {
    name:"Martina Salter",
    postedDate: "05/23/2018",
    address: '1234 Miami Street',
    city: 'Miami',
    state: 'FL',
    rooms: 2,
    price: 320000,
    floorSpace: 1100,
    extras: [
      'pool',
      'bar'
    ],
    homeType: 'Apartment',
    image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto389x286.jpeg',
    imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto1553x289.jpeg',
    userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/ninasmith50x50.jpeg',
    userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/ninasmith80x80.jpeg'
  },
  {
    name:"Christian Gonzalez",
    postedDate: "28/01/2017",
    address: '95 Texas Road',
    city: 'Austin',
    state: 'TX',
    rooms: 6,
    price: 1500000,
    floorSpace: 5300,
    extras: [
      'gym',
      'pool'
    ],
    homeType: 'Ranch',
    image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto389x286.jpeg',
    imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto1553x289.jpeg',
    userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/johnsamson50x50.jpeg',
    userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/johnsamson80x80.jpeg'
  },
  {
    name:"Brandan Whitworth",
    postedDate: "11/06/2016",
    address: '567 Arizona Avenue',
    city: 'Pheonix',
    state: 'AZ',
    rooms: 3,
    price: 7220000,
    floorSpace: 6300,
    extras: [
      'garden',
      'study'
    ],
    homeType: 'Ranch',
    image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto389x286.jpeg',
    imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto1553x289.jpeg',
    userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/johnsamson50x50.jpeg',
    userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/johnsamson80x80.jpeg'
  }
]

export default listingsData;
