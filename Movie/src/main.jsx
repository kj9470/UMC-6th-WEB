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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);