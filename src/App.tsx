//@ts-nocheck

import "./App.css";
import Navbar from "./components/Navbar";
import Disclaimer from "./components/Disclaimer";
import HeadingOne from "./components/HeadingOne";
import TableNavbarTabs from "./components/TableNavbarTabs";
import PersonalTermDepositRatesTable from "./components/PersonalTermDepositRatesTable/PersonalTermDepositRatesTable";
import PersonalTermDepositRequirementsTable from "./components/PersonalTermDepositRequirementsTable/PersonalTermDepositRequirementsTable";
import PersonalTermDepositMoreInfoTable from "./components/PersonalTermDepositMoreInfoTable/PersonalTermDepositMoreInfoTable";
import Footer from "./components/Footer";
import figureRateLogo from "./assets/figure-rate-logo-1.png";
import figureRateLogoFooter from "./assets/figure-rate-logo-footer.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";

function App() {
  //let currentYear = new Date().getFullYear();

  let menuItems = {
    items: ["Personal Term Deposit", "About", "Contact"],
    menuFilePath: [
      "./components/TermDeposits.tsx",
      "./components/About.tsx",
      "./components/Contact.tsx",
    ],
  };

  const tableNavbarTabsItems = [
    ["#termdeposit", "Interest rates"],
    ["#minimumrequirements", "Minimum requirements"],
    ["#moreinfo", "More info"],
  ];

  const footerColumns = [
    [
      "about",
      "#about",
      "About us",
      "#privacypolicy",
      "Privacy Policy",
      "#termsandconditions",
      "Terms & Conditions",
    ],
    ["contact", "#contactus", "Contact us"],
    [
      "legal",
      "#privacypolicy",
      "Privacy Policy",
      "#termsofuse",
      "Terms of use",
    ],
  ];

  const [tableNavbarTabIndex, setTableNavbarTabIndex] = useState(0);

  return (
    <>
      <Navbar imgSrcPath={figureRateLogo} navMenuItems={menuItems} />
      <Disclaimer currentYear={currentYear} />
      <HeadingOne />
      <TableNavbarTabs
        navbarTabs={tableNavbarTabsItems}
        onSelectItem={(index) => {
          setTableNavbarTabIndex(index);
        }}
      />
      {tableNavbarTabIndex === 0 && (
        <PersonalTermDepositRatesTable currentYear={currentYear} />
      )}
      {tableNavbarTabIndex === 1 && (
        <PersonalTermDepositRequirementsTable currentYear={currentYear} />
      )}
      {tableNavbarTabIndex === 2 && (
        <PersonalTermDepositMoreInfoTable currentYear={currentYear} />
      )}
      <Footer
        footerColumns={footerColumns}
        figureRateLogoFilePath={figureRateLogoFooter}
        currentYear={currentYear}
      />
    </>
  );
}

export default App;
