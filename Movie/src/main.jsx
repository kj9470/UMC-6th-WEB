import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import MainPage from './pages/MainPage.jsx';
import SignInPage from './pages/SignInPage.jsx';
import NowPlayingPage from './pages/NowPlayingPage';
import PopularPage from './pages/PopularPage';
import TopRatedPage from './pages/TopRatedPage';
import UpComing from './pages/UpComing';
import SignupForm from './pages/SignupForm.jsx';
import MovieDetailPage from './pages/MovieDetailPage.jsx';
import NotFoundPage from './components/Common/NotFoundPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/sign-in',
        element: <SignInPage />,
      },
      {
        path: '/popular',
        element: <PopularPage />,
      },
      {
        path: '/now-playing',
        element: <NowPlayingPage />,
      },
      {
        path: '/top-rated',
        element: <TopRatedPage />,
      },
      {
        path: '/up-coming',
        element: <UpComing />,
      },
      {
        path: '/signup-form',
        element: <SignupForm />,
      },
      {
        path: '/movie/:title', // 영화 상세 페이지 
        element: <MovieDetailPage />,
      },
      {
        path: '*', // 모든 잘못된 경로
        element: <NotFoundPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
