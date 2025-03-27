import { OffersList } from "../types/offer";


export const offersList: OffersList[] = [
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
    previewImage: "img/apartment-03.jpg"
}, {
    id: "2",
    title: "Cozy Cottage by the Lake",
    type: "house",
    price: 150,
    city: {
        name: "New York",
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
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    previewImage: "img/apartment-02.jpg"
},{
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
    previewImage: "img/apartment-01.jpg"
}, 

]