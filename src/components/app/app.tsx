import { JSX } from "react";
import MainPage from "../../pages/main-page/main-page";
import FavoritesPage from "../../pages/favorites/favorites-page";
import LoginPage from "../../pages/login/login-page";
import OfferPage from "../../pages/offer/offer-page";
import NotFound from "../../pages/404-page/404-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { PrivateRoute } from "../private-route/private-route";

type AppMainPageProps ={
    rentalOffersCount: number;
}
function App({rentalOffersCount}:AppMainPageProps): JSX.Element {
    return (
        <BrowserRouter>
        <Routes>
            <Route
            path={AppRoute.Main}
            element={<MainPage rentalOffersCount={rentalOffersCount}/>}
            />
            <Route
            path={AppRoute.Favorites}
            element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><FavoritesPage/></PrivateRoute>
            }
            />
            <Route
            path={AppRoute.Login}
            element={<LoginPage/>}
            />
            <Route
            path={AppRoute.Offer}
            element={<OfferPage/>}
            />
            <Route
            path="*"
            element={<NotFound/>}
            />
        </Routes>
        </BrowserRouter>
        // <MainPage rentalOffersCount={rentalOffersCount}/>
    );
}

export default App;