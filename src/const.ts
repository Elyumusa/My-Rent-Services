const Setting = {
    rentOffersCount: 312
} as const;

const AppRoute = {
    Main: '/'
    ,Login: '/login',
    Favorites:'/favorites',
    Offer:'/offer/:id'

}

const AuthorizationStatus={
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unkown: 'UNKOWN'
}

export const URL_MARKER_DEFAULT = 
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';


export {Setting, AppRoute, AuthorizationStatus};