import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from "./components";
import { Home, About, Contact, Products, Distributors, RegisterPatient, Admin, AdminDistributors, AddDistributor } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/distributors',
        element: <Distributors />
      },
      {
        path: '/register',
        element: <RegisterPatient />
      }
    ]
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: '/admin',
        element: <AdminDistributors />,
        index: true
      },
      {
        path: '/admin/add-distributor',
        element: <AddDistributor />
      }
    ]
  }
])

export default router;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
