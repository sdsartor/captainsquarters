import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-primary">
      <div className="ui header">
        <div className="header-left">
          <Link className="text-light" to="/">
            <h1 className="m-0">Captains Quarters</h1>
          </Link>
          <p className="m-0">An easy start-up for Stargrave.</p>
        </div>
        <div className="header-right">
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2 ui primary button" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2 ui primary button" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
