import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddReview from "./components/add-review";
import Restaurant from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";
import Login from "./components/login";

function App() {
  const [user, setUser] = React.useState(null)

  async function login(user = null) {
    setUser(user);
  }
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-brand">
          Restaurant Reviews
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/restaurants"} className="nav-link">
              Restaurants
            </Link>
          </li>
          <li className="nav-item">
            { user ? ( // this happens if the user is logged in
              <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                Logout {user.name}
              </a>
            ) : ( //this happens if the user is not logged in
            <Link to={"/login"} className="nav-link">
              Login
            </Link> 
            )
            }
          </li>
        </div>
      </nav>
    </div>
  );
}
//This is where I am currently on 1:16:03
export default App;
