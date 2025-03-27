import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
  {
    id: "1",
    title: "Luxury Apartment in Downtown",
    type: "apartment",
    price: 250,
    city: {
      name: "New York",
      location: {
        latitude: 40.7128,
        longitude: -74.006,
        zoom: 12
      }
    },
    location: {
      latitude: 40.7128,
      longitude: -74.006,
      zoom: 12
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    description: "A modern apartment located in the heart of downtown New York, close to all major attractions.",
    bedrooms: 2,
    goods: ["Wi-Fi", "Air conditioning", "Kitchen", "TV"],
    host: {
      name: "Elyumusa Njobvu",
      avatarUrl: "../public/img/avatar-max.jpg",
      isPro: true
    },
    images: ["img/apartment-03.jpg"],
    maxAdults: 4,
    previewImage: "img/apartment-03.jpg"
  },
  {
    id: "2",
    title: "Cozy Cottage by the Lake",
    type: "house",
    price: 150,
    city: {
      name: "San Francisco",
      location: {
        latitude: 37.7749,
        longitude: -122.4194,
        zoom: 10
      }
    },
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
      zoom: 10
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    description: "A charming cottage surrounded by nature, perfect for a peaceful getaway.",
    bedrooms: 3,
    goods: ["Parking", "Garden", "Fireplace", "Wi-Fi"],
    host: {
      name: "Jane Smith",
      avatarUrl: "../public/img/img/avatar-max.jpg",
      isPro: false
    },
    images: ["img/apartment-02.jpg"],
    maxAdults: 6,
    previewImage: "img/apartment-02.jpg"
  },
  {
    id: "3",
    title: "Beachfront Villa with Ocean View",
    type: "villa",
    price: 500,
    city: {
      name: "Miami",
      location: {
        latitude: 25.7617,
        longitude: -80.1918,
        zoom: 13
      }
    },
    location: {
      latitude: 25.7617,
      longitude: -80.1918,
      zoom: 13
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    description: "A luxurious beachfront villa offering stunning ocean views and direct access to the beach.",
    bedrooms: 5,
    goods: ["Private pool", "Wi-Fi", "Jacuzzi", "Beach access"],
    host: {
      name: "Alice Johnson",
      avatarUrl: "img/avatar-angelina.jpg",
      isPro: true
    },
    images: ["img/apartment-01.jpg"],
    maxAdults: 10,
    previewImage: "img/apartment-01.jpg"
  },
  // New Amsterdam properties
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
    description: "Beautiful apartment in the heart of Amsterdam, close to museums and canals.",
    bedrooms: 1,
    goods: ["Wi-Fi", "Kitchen", "Washing machine", "TV"],
    host: {
      name: "Pieter van Dijk",
      avatarUrl: "img/avatar.svg",
      isPro: true
    },
    images: ["img/amsterdam.jpg", "img/apartment-01.jpg"],
    maxAdults: 2,
    previewImage: "img/amsterdam.jpg"
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
    description: "Charming townhouse in a quiet Amsterdam neighborhood with canal views.",
    bedrooms: 2,
    goods: ["Wi-Fi", "Kitchen", "Bike rental", "Coffee maker"],
    host: {
      name: "Anna de Vries",
      avatarUrl: "img/avatar-angelina.jpg",
      isPro: false
    },
    images: ["img/amsterdam-02.jpg"],
    maxAdults: 4,
    previewImage: "img/apartment-01.jpg"
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
    description: "Stylish loft with modern amenities in Amsterdam's vibrant district.",
    bedrooms: 1,
    goods: ["Wi-Fi", "Air conditioning", "Workspace", "Sound system"],
    host: {
      name: "Mark Janssen",
      avatarUrl: "img/avatar-max.jpg",
      isPro: true
    },
    images: ["img/amsterdam-03.jpg"],
    maxAdults: 2,
    previewImage: "img/apartment-01.jpg"
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
    description: "Large family home with garden in a residential area of Amsterdam.",
    bedrooms: 3,
    goods: ["Wi-Fi", "Kitchen", "Garden", "Washing machine", "Parking"],
    host: {
      name: "Angelina Bakker",
      avatarUrl: "img/avatar-angelina.jpg",
      isPro: false
    },
    images: ["img/amsterdam.jpg"],
    maxAdults: 6,
    previewImage: "img/apartment-03.jpg"
  }
];

export default offers;