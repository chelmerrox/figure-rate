import { useState } from "react";

interface TableNavbarTabsProps {
  navbarTabs: string[][];
  onSelectItem: (item: Number) => void;
}

function TableNavbarTabs({ navbarTabs, onSelectItem }: TableNavbarTabsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <div className="container my-5">
        <ul className="nav nav-pills nav-fill border-purple-rounded">
          {navbarTabs.map((navbarTab, i) => (
            <li key={i} className={"navbar-tab-" + (i + 1) + " nav-item"}>
              <a
                className={selectedIndex === i ? "nav-link active" : "nav-link"}
                aria-current="page"
                href={navbarTab[0]}
                onClick={() => {
                  setSelectedIndex(i);
                  onSelectItem(i);
                }}
              >
                {navbarTab[1]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TableNavbarTabs;

/*
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">
      Interest rates
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">
      Minimum Requirements
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">
      More info
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true">
      Disabled
    </a>
  </li>
*/
