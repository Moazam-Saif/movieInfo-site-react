import "./footer.css";
import { NavLink } from "react-router";

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-container">
    
             <div className="footer-left">
                <img src="logo.png" alt="Logo" className="footer-logo"/>
                <p>Welcome to FlaxFlux</p>
                <div className="payment-icons">
                    <img src="visa.png" alt="Visa"/>
                    <img src="mastercard.png" alt="Mastercard"/>
                    <img src="paypal.png" alt="PayPal"/>
                </div>
            </div>

            <div className="footer-column">
                <h3>SHOPPING</h3>
                <ul>
                    <li><NavLink to="#">Computer Store</NavLink></li>
                    <li><NavLink to="#">Laptop Store</NavLink></li>
                    <li><NavLink to="#">Accessories</NavLink></li>
                    <li><NavLink to="#">Sales & Discounts</NavLink></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3>EXPERIENCE</h3>
                <ul>
                    <li><NavLink to="#">Contact Us</NavLink></li>
                    <li><NavLink to="#">Payment Method</NavLink></li>
                    <li><NavLink to="#">Delivery</NavLink></li>
                    <li><NavLink to="#">Return and Exchange</NavLink></li>
                </ul>
            </div>

    
            <div className="footer-column">
                <h3>NEWSLETTER</h3>
                <p>Be the first to know about new arrivals, sales & promos!</p>
                <input type="email" placeholder="Your Email"/>
            </div>
        </div>

        <div className="footer-bottom">
            <p>By Moazam Saif</p>
        </div>
    </footer>
    )
}