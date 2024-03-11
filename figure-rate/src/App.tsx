import "./App.css";
import Navbar from "./components/Navbar";
import TermDepositsBody from "./components/TermDepositsBody";
import Footer from "./components/Footer";
import figureRateLogo from "./assets/figure-rate-logo-1.png";
import figureRateLogoFooter from "./assets/figure-rate-logo-footer.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  let menuItems = {
    items: ["Term Deposits", "About", "Contact"],
    menuFilePath: [
      "./components/TermDeposits.tsx",
      "./components/About.tsx",
      "./components/Contact.tsx",
    ],
  };

  const headingAndInstitutions = [
    "Term",
    "ANZ",
    "Bank of Baroda",
    "BSP",
    "FDB",
    "HFC",
    "Kontiki Finance",
    "Merchant Finance",
    "Westpac",
  ];

  const rows = [
    ["1-2", "0.05%", "0.25%", "0.10%", "N/A", "0.25%", "N/A", "N/A", "0.05%"],
    ["3", "0.05%", "0.25%", "0.10%", "N/A", "0.25%", "0.20%", "N/A", "0.05%"],
    ["6", "0.05%", "0.25%", "0.10%", "N/A", "0.50%", "0.35%", "N/A", "0.10%"],
    ["9", "0.15%", "0.35%", "0.20%", "N/A", "0.75%", "0.50%", "N/A", "0.10%"],
    [
      "12",
      "0.25%",
      "0.60%",
      "0.30%",
      "0.80%",
      "1.00%",
      "1.75%",
      "N/A",
      "0.25%",
    ],
    [
      "12 months to 398 days/approx. 13",
      "0.25%",
      "0.60%",
      "0.30%",
      "0.80%",
      "1.00%",
      "1.75%",
      "N/A",
      "0.25%",
    ],
    [
      "399 days/approx. 13",
      "0.25%",
      "0.60%",
      "0.30%",
      "0.80%",
      "1.00%",
      "1.75%",
      "N/A",
      "0.25%",
    ],
    [
      "15",
      "0.25%",
      "0.60%",
      "0.30%",
      "0.80%",
      "1.00%",
      "1.75%",
      "N/A",
      "0.25%",
    ],
    [
      "18",
      "0.25%",
      "0.60%",
      "0.30%",
      "0.80%",
      "1.00%",
      "1.75%",
      "N/A",
      "0.30%",
    ],
    [
      "24",
      "0.25%",
      "0.60%",
      "0.30%",
      "1.25%",
      "1.00%",
      "2.00%",
      "N/A",
      "0.30%",
    ],
    [
      "36",
      "0.25%",
      "0.60%",
      "0.30%",
      "1.60%",
      "1.00%",
      "2.25%",
      "N/A",
      "0.40%",
    ],
    [
      "48",
      "0.25%",
      "0.60%",
      "0.30%",
      "2.00%",
      "1.00%",
      "2.50%",
      "N/A",
      "0.50%",
    ],
    [
      "60",
      "0.25%",
      "0.60%",
      "0.30%",
      "2.25%",
      "1.00%",
      "3.00%",
      "N/A",
      "0.50%",
    ],
    ["72", "N/A", "0.60%", "N/A", "N/A", "1.00%", "3.25%", "N/A", "0.50%"],
    ["84", "N/A", "0.60%", "N/A", "N/A", "1.00%", "3.50%", "N/A", "0.50%"],
    ["96", "N/A", "0.60%", "N/A", "N/A", "1.00%", "3.75%", "N/A", "0.50%"],
    ["108", "N/A", "0.60%", "N/A", "N/A", "1.00%", "3.75%", "N/A", "0.50%"],
    ["120", "N/A", "0.60%", "N/A", "N/A", "1.00%", "4.00%", "N/A", "0.50%"],
  ];

  /*
  const footerColumns = {
    footerColumns: [
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
    ],
  };
  */

  return (
    <>
      <Navbar imgSrcPath={figureRateLogo} navMenuItems={menuItems} />
      <TermDepositsBody
        tableHeadings={headingAndInstitutions}
        tableBody={rows}
      />
      <Footer figureRateLogoFilePath={figureRateLogoFooter} />
    </>
  );
}

export default App;
