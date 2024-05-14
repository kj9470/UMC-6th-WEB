import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from './pages/MainPage';
import SignInPage from "./pages/SignInPage";
import NowPlaying from './pages/NowPlayingPage';
import Popular from './pages/PopularPage';
import TopRated from './pages/TopRatedPage';
import UpComing from './pages/UpComing';

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/now-playing" element={<NowPlaying />} />
                    <Route path="/popular" element={<Popular />} />
                    <Route path="/top-rated" element={<TopRated />} />
                    <Route path="/up-coming" element={<UpComing />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Router;