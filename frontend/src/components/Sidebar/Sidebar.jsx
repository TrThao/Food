import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/admin/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-options'>
                <NavLink to='/admin/add' className='sidebar-option'>
                    <img src={assets.add_icon} alt='Add Item'/>
                    <p>Add Item</p>
                </NavLink>
                <NavLink to='/admin/list' className='sidebar-option'>
                    <img src={assets.order_icon} alt='List Item'/>
                    <p>List Item</p>
                </NavLink>
                <NavLink to='/admin/orders' className='sidebar-option'>
                    <img src={assets.order_icon} alt='Order'/>
                    <p>Order</p>
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
