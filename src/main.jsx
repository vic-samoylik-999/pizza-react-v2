import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/cart',
//         element: <Cart />,
//       },
//     ],
//   },
//   {
//     path: '/pizza/:id',
//     element: <PizzaItself />,
//   },
//   {
//     path: '*',
//     element: <App />,
//     children: [
//       {
//         path: '*',
//         element: <NotFound />,
//         children: [
//           {
//             path: '*',
//             element: <NotFoundComponent />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
