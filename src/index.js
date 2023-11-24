import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './style/index.scss';
import StayUpdate from './pages/stayUpdate/StayUpdate';
import Success from './pages/success/success';

const router = createBrowserRouter([
  {
    path: "/",
    element: <StayUpdate />,
  },
  {
    path: "/success",
    element: <Success/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

