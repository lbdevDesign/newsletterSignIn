import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './style/index.scss';
import StayUpdate from './pages/stayUpdate/StayUpdate';
import Success from './pages/success/success';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../src/redux/store';

// Création du routeur avec react-router-dom
const router = createHashRouter([
  {
    path: "/",
    element: <StayUpdate />,
  },
  {
    path: "/success",
    element: <Success/>,
  },
]);


// Récupération de l'élément racine du DOM pour l'application React
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rendu de l'application React
root.render(
  // Fournisseur Redux pour gérer l'état global de l'application
  <Provider store={ store }>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

