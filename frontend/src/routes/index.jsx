import React from 'react';
import Home from '../components/pages/web/Home/Home';
import Cart from '../components/pages/web/Cart/Cart';
import PlaceOrder from '../components/pages/web/PlaceOrder/PlaceOrder';
import HomeAdmin from '../components/pages/admin/Home/HomeAdmin';
import Add from '../components/pages/admin/Add/Add';
import List from '../components/pages/admin/List/List';
import Orders from '../components/pages/admin/Orders/Order';

const RoutesConfig = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/order',
    element: <PlaceOrder />
  },
  {
    path: '/admin',
    element: <HomeAdmin />,
    children: [
      {
        path: 'add',
        element: <Add />
      },
      {
        path: 'list',
        element: <List />
      },
      {
        path: 'orders',
        element: <Orders />
      },
    ]
  }
];

export default RoutesConfig;
