import React from "react";
import { Link } from "react-router-dom";
 
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/items/new" className="item">
        Create
      </Link>
      <Link to="/items/delete" className="item">
        Delete
      </Link>

    </div>
  );
};
 
export default Header;