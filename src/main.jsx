import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';

import App from './App.jsx';
import NotFound from './Pages/NotFound.jsx';
import Cart from './Pages/Cart.jsx';
import Home from './Pages/Home.jsx';
import NotFoundComponent from './components/NotFoundComponent/index.jsx';
import PizzaItself from './Pages/PizzaItself.jsx';
import PizzaItselfComponent from './components/PizzaItselfComponent/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
  {
    path: '/pizza/:id',
    element: <PizzaItself />,
  },
  {
    path: '*',
    element: <App />,
    children: [
      {
        path: '*',
        element: <NotFound />,
        children: [
          {
            path: '*',
            element: <NotFoundComponent />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
