interface TableNavbarTabsProps {
  navbarTabs: string[][];
}

function TableNavbarTabs({ navbarTabs }: TableNavbarTabsProps) {
  return (
    <>
      <ul className="nav nav-pills nav-fill border-purple-rounded mx-5">
        {navbarTabs.map((tabs, i) => (
          <li key={i} className={"navbar-tab-" + (i + 1) + " nav-item"}>
            <a
              className={i === 0 ? "nav-link active" : "nav-link"}
              aria-current="page"
              href={tabs[0]}
            >
              {tabs[1]}
            </a>
          </li>
        ))}
      </ul>
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
