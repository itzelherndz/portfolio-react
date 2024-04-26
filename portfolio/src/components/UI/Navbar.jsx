export default function Navbar({ links }) {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary bg-transparent">
        <div className="container-fluid">
          <div  id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link, index) => (
                    <li key={index} className="nav-item">{link}</li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  