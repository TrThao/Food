import React from 'react';
import Home from '../pages/web/Home/Home';
import Cart from '../pages/web/Cart/Cart';
import PlaceOrder from '../pages/web/PlaceOrder/PlaceOrder';
import Add from '../pages/admin/Add/Add';
import List from '../pages/admin/List/List';
import Orders from '../pages/admin/Orders/Order';
import AdminLayout from '../layouts/adminlayout';
import WebLayout from "../layouts/weblayout";

const RoutesConfig = [
  {
    path: '/',
    element: <WebLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'cart', element: <Cart /> },
      { path: 'order', element: <PlaceOrder /> }
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: 'add', element: <Add /> },
      { path: 'list', element: <List /> },
      { path: 'orders', element: <Orders /> }
    ]
  }
];

export default RoutesConfig;
