import "./App.css";
import Notificationbar from "./Component/Notificationbar";
import Header from "./Component/Header";
import Homepage from "./Component/Homepage";
import Team from "./Component/Team";
import Blog from "./Component/Blog";
import Newsletter from "./Component/Newsletter";
import Footer from "./Component/Footer";
import Maintanance from "./Assets/Maintanance";
import PrivacyCookiesPolicy from "./Component/Privacy&CookiesPolicy";
import Disclaimer from "./Component/Disclaimer";
import PartyHall from "./Component/PartyHall";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Notificationbar />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Homepage />
                <PartyHall/>
                <Team />
                <Blog />
                <Newsletter />
              </>
            }
          />
          <Route path="/team" element={<Team />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/maintanance" element={<Maintanance />} />
          <Route path="/PrivacyCookiesPolicy" element={<PrivacyCookiesPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
