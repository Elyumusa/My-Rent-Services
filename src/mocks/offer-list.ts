import { OffersList } from "../types/offer";


export const offersList: OffersList[] = [
 {
    id: "1",
    title: "Luxury Apartment in Downtown",
    type: "apartment",
    price: 250,
    city: {
        name: "Paris",
        location: {
            latitude: 48.8584,
            longitude: 2.2945,
            zoom: 12
        }
    },
    location: {
        latitude: 48.8584,
        longitude: 2.2945,
        zoom: 12
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: "/img/apartment-03.jpg"
}, {
    id: "2",
    title: "Cozy Cottage by the Lake",
    type: "house",
    price: 150,
    city: {
        name: "Brussels",
        location: {
            latitude: 50.8467,
            longitude: 4.3525,
            zoom: 10
        }
    },
    location: {
        latitude: 50.8467,
        longitude: 4.3525,
        zoom: 10
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    previewImage: "/img/apartment-02.jpg"
},{
    id: "3",
    title: "Beachfront Villa with Ocean View",
    type: "villa",
    price: 500,
    city: {
        name: "Cologne",
        location: {
            latitude: 50.9413,
            longitude: 6.9583,
            zoom: 13
        }
    },
    location: {
        latitude: 50.9413,
        longitude: 6.9583,
        zoom: 13
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    previewImage: "/img/apartment-01.jpg"
}, 
{
    id: "4",
    title: "Central Amsterdam Apartment",
    type: "apartment",
    price: 180,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    previewImage: "/img/amsterdam.jpg"
  },
  {
    id: "5",
    title: "Quaint Amsterdam Townhouse",
    type: "house",
    price: 220,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    previewImage: "/img/apartment-01.jpg"
  },
  {
    id: "6",
    title: "Modern Amsterdam Loft",
    type: "apartment",
    price: 195,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
    previewImage: "/img/apartment-01.jpg"
  },
  {
    id: "7",
    title: "Spacious Amsterdam Family Home",
    type: "house",
    price: 300,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 12
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    previewImage: "/img/apartment-03.jpg"
  },
  {
    id: "8",
    title: "Modern Hamburg Apartment Near the Harbor",
    type: "apartment",
    price: 220,
    city: {
      name: "Humburg",
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 12
      }
    },
    location: {
      latitude: 53.557834,
      longitude: 9.994579,
      zoom: 12
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    previewImage: "/img/amsterdam.jpg"
  },
  {
    id: "9",
    title: "Cozy Townhouse in St. Pauli",
    type: "house",
    price: 180,
    city: {
      name: "Humburg",
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 12
      }
    },
    location: {
      latitude: 53.554123,
      longitude: 9.978456,
      zoom: 12
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    previewImage: "/img/apartment-03.jpg"
  },
  {
    id: "10",
    title: "Luxury Penthouse with Alster Lake View",
    type: "apartment",
    price: 450,
    city: {
      name: "Humburg",
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 12
      }
    },
    location: {
      latitude: 53.560789,
      longitude: 9.987654,
      zoom: 12
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
    previewImage: "/img/apartment-01.jpg"
  },

]