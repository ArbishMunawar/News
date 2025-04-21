import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; // Import RouterProvider

import './index.css';
import App from './App.jsx';
import HomePage from './ui/Pages/HomePage/index.jsx';
import CategoryPage from './ui/Pages/CategoryPage/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: "/category", Component: CategoryPage },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
);
