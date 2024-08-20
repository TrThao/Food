import React, { useEffect } from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  useEffect(() => {
    // Hàm khởi tạo bản đồ
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 20.99828321815709, lng: 105.82772511168409 },
        zoom: 15, // Độ zoom
      });

      // Thêm marker vào bản đồ
      new window.google.maps.Marker({
        position: { lat: 20.99828321815709, lng: 105.82772511168409 },
        map: map,
        title: "Vị trí của bạn",
      });
    };

    // Kiểm tra xem Google Maps API đã được tải chưa
    if (!window.google) {
      console.error("Google Maps API not loaded.");
    } else {
      initMap();
    }
  }, []);

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>abc</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>0388943861</li>
            <li>thaotranit.hubt@gmail.com</li>
          </ul>
        </div>
        <div className="footer-map">
          <h2>OUR LOCATION</h2>
          <div id="map"></div> {/* Div chứa bản đồ */}
        </div>
      </div>
      <hr />
      <p className="footer-copyrigt">abc</p>
    </div>
  );
};

export default Footer;
