import { FullOffer } from "../types/offer";

 const offers: FullOffer[]=[
{
    id: "1",
    title: "Luxury Apartment in Downtown",
    type: "apartment",
    price: 250,
    city: {
        name: "New York",
        location: {
            latitue: 40.7128,
            longitude: -74.006,
            zoom: 12
        }
    },
    location: {
        latitue: 40.7128,
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
        avatarUrl: "img/avatar.svg",
        isPro: true
    },
    images: [
        "img/apartment-03.jpg"
    ],
    maxAdults: 4
}, {
    id: "2",
    title: "Cozy Cottage by the Lake",
    type: "house",
    price: 150,
    city: {
        name: "San Francisco",
        location: {
            latitue: 37.7749,
            longitude: -122.4194,
            zoom: 10
        }
    },
    location: {
        latitue: 37.7749,
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
        avatarUrl: "img/avatar-max.svg",
        isPro: false
    },
    images: [
        "img/apartment-02.jpg"
    ],
    maxAdults: 6
}, {
    id: "3",
    title: "Beachfront Villa with Ocean View",
    type: "villa",
    price: 500,
    city: {
        name: "Miami",
        location: {
            latitue: 25.7617,
            longitude: -80.1918,
            zoom: 13
        }
    },
    location: {
        latitue: 25.7617,
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
    images: [
        "img/apartment-01.jpg"
    ],
    maxAdults: 10
}
 ]

 export default offers;