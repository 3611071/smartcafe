import "./style.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { HeaderTitle } from "./components/header/headerTitle";
import Header from "./components/header/header";
import Profile from "./components/smartcafe/profile/profile";
import Footer from "./components/footer/footer";
import Orders from "./components/smartcafe/orders/orders";
import Complex from "./components/smartcafe/complex/complex";
import Complex_this_week from "./components/smartcafe/complex/complex_this_week/complex_this_week"
import Complex_next_week from "./components/smartcafe/complex/complex_next_week/complex_next_week"
import Settings from "./components/smartcafe/settings/settings";
import ChPass from "./components/smartcafe/settings/chPass/chPass";
import Help from "./components/smartcafe/help/help";




function App(props) {
  return (
    <div className="App">
      <Router>
        <div className="main_container">
          <Header title = "2" />
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/complex" element={<Complex />} />
              <Route path="/complex/complex_this_week" element={<Complex_this_week />} />
              <Route path="/complex/complex_next_week" element={<Complex_next_week />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/chPass" element={<ChPass />} />
              <Route path="/help" element={<Help />} />

              <Route path="/gg/:tyr" element={<HeaderTitle />} />

            </Routes>
            <Footer />
        </div>
      </Router>

    </div>
  );
}

export default App;
