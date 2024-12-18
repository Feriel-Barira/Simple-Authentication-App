import { Link } from "react-router-dom";

export function Navbar(props) {
  let ul = (
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          to="/#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Administrator
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="/admin/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/">
              Orders
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/">
              Users
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/admin/messages">
              Messages
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/#"
              onClick={() => {
                props.setToken("");
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
              }}
            >
              Logout
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
  if (!props.token) {
    ul = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="btn btn-outline-primary me-2" to="/Auth/Register">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-primary" to="/Auth/Login">
            Login
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <nav className="navbar navbar-expand-md py-3 mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
        IdentityHub
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bstoggle="collapse"
          data-bs-target="#navbarNavDropdown"
          ariacontrols="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav flex-grow-1">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
          {ul}
        </div>
      </div>
    </nav>
  );
}
