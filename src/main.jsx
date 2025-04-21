// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'; // Import RouterProvider

// import './index.css';
// import App from './App.jsx';
// import HomePage from './ui/Pages/HomePage/index.jsx';
// import CategoryPage from './ui/Pages/CategoryPage/index.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: App,
//     children: [
//       { index: true, Component: HomePage },
//       { path: "category/:categoryName", Component: CategoryPage },

//     ],
//   },
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} /> 
//   </StrictMode>,
// );


// index.jsx or main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import Root from './App.jsx'; // assuming App.jsx is your layout file
import HomePage from './ui/Pages/HomePage/index.jsx';
import CategoryPage from './ui/Pages/CategoryPage/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // layout (must include <Outlet /> inside)
    children: [
      { index: true, element: <HomePage /> },
      { path: "category/", element: <CategoryPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
