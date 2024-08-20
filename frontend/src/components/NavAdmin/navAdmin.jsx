import React from "react"
import './NavAdmin.css'
import { assets } from "../../assets/admin/assets"
const NavAdmin = () => {
    return (
        <div className="navbar">
            <img className="logo" src={assets.logo} alt=""/>
            <img className="profile" src={assets.profile_image} alt=""/>
        </div>
    )
}

export default NavAdmin