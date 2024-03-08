import "./App.css";
import Navbar from "./components/Navbar";
import figureRateLogo from "./assets/figure-rate-logo-1.png";
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

  return (
    <>
      <Navbar imgSrcPath={figureRateLogo} navMenuItems={menuItems} />
    </>
  );
}

export default App;
