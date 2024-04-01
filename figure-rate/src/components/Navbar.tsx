import { useState } from "react";

interface NavbarProps {
  imgSrcPath: string;
  navMenuItems: {
    items: string[];
    menuFilePath: string[];
  };
}

function Navbar({ imgSrcPath, navMenuItems }: NavbarProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container-fluid">
          <a className="navbar-sitename" href="#">
            <img
              src={imgSrcPath}
              width="100"
              height="90"
              alt="Figure Rate logo"
              className="d-inline-block align-top"
            />
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse align-items-start flex-column flex-lg-row"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navMenuItems.items.map((item, index) => (
                <li
                  key={index}
                  className="nav-item"
                  onClick={() => setSelectedIndex(index)}
                >
                  <a
                    href={navMenuItems.menuFilePath[index]}
                    className={
                      selectedIndex === index ? "nav-link active" : "nav-link"
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <form className="d-flex me-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-purple nav-search-btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
