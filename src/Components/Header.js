import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "./../firebase";

function Header() {
  const [{ cart, user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__navOption">
          <span className="header__navOptionLineOne">
            {user ? user.email : "Hello Guest"}
          </span>
          <Link to={!user && "/login"}>
            <span
              className="header__navOptionLineTwo"
              onClick={handleAuthentication}
            >
              {user ? "Sign Out" : "Sign In"}
            </span>
          </Link>
        </div>
        <div className="header__navOption">
          <span className="header__navOptionLineOne">Returns</span>
          <span className="header__navOptionLineTwo">
            &amp; <Link to="/orders">Orders</Link>
          </span>
        </div>
        <div className="header__navOption">
          <span className="header__navOptionLineOne">Your</span>
          <span className="header__navOptionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__navOptionBasket">
            <span>
              <ShoppingCartIcon />
              <sub className="header__navOptionLineTwo header__basketCount">
                {cart?.length}
              </sub>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
