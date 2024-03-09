import "./App.css";
import Navbar from "./components/Navbar";
import TermDepositsBody from "./components/TermDepositsBody";
import Footer from "./components/Footer";
import figureRateLogo from "./assets/figure-rate-logo-1.png";
import figurerateLogoFooter from "./assets/figure-rate-logo-footer.png";
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

  const rows = {
    term: [
      "1-2",
      "3",
      "9",
      "12",
      "24",
      "36",
      "48",
      "60",
      "72",
      "84",
      "96",
      "108",
      "120",
    ],
    /*
    interestRates: {
      anz: [
        "0.05%",
        "0.05%",
        "0.05%",
        "0.15%",
        "0.25%",
        "0.25%",
        "0.25%",
        "0.25%",
        "0.25%",
        "0.25%",
        "-",
        "-",
        "-",
        "-",
      ],
      bankOfBaroda: [
        "1.00%",
        "1.00%",
        "1.50%",
        "2.00%",
        "2.25%",
        "2.25%",
        "2.50%",
        "2.75%",
        "3.00",
        "3.00",
        "3.00",
        "3.00",
        "3.00",
        "3.00",
      ],
      bsp: [
        "0.10%",
        "0.10%",
        "0.10%",
        "0.20%",
        "0.30%",
        "0.30%",
        "0.30%",
        "0.30%",
        "0.30%",
        "0.30%",
        "0.30%",
        "-",
        "-",
        "-",
      ],
      fdb: [
        "-",
        "-",
        "-",
        "-",
        "0.80%",
        "1.25%",
        "1.60%",
        "2.00",
        "2.25%",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
      hfc: [
        "0.25",
        "0.25",
        "0.50%",
        "0.75%",
        "1.00%",
        "1.00%",
        "1.00%",
        "1.00%",
        "1.00%",
        "1.00%",
        "1.00%",
        "1.00%",
        "1.00%",
        "1.00%",
      ],
      kontikiFinance: [
        "-",
        "0.20%",
        "0.35%",
        "0.50%",
        "1.75%",
        "1.75%",
        "2.00%",
        "2.25%",
        "2.50%",
        "3.00%",
        "3.25%",
        "3.50%",
        "3.75%",
        "4.00%",
      ],
      merchantFinance: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
      westpac: [
        "0.05%",
        "0.05%",
        "0.10%",
        "0.10%",
        "0.25%",
        "0.30%",
        "0.30%",
        "0.40%",
        "0.50%",
        "0.50%",
        "0.50%",
        "0.50%",
        "0.50%",
        "0.50%",
      ],
    },
    */
  };

  return (
    <>
      <Navbar imgSrcPath={figureRateLogo} navMenuItems={menuItems} />
      <TermDepositsBody
        tableHeadings={headingAndInstitutions}
        tableBody={rows}
      />
      <Footer figureRateLogoFilePath={figurerateLogoFooter} />
    </>
  );
}

export default App;
