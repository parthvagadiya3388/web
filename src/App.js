import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import AboutUs from "./Components/AboutUs";
import Forbuissness from "./Components/Forbuissness";
import Footer from "./Components/Footer";
import ForworkSpace from "./Components/forworkSpace";
import Customer_page from "./Components/customer_page";
import Employe_page from "./Components/employe_page";
import List_item_page from "./Components/list_item_page";
import Profile from "./login_Components/profile";
import Employe_list from "./login_Components/employe_list";
import Order_Conform from "./Components/order_Conform";
import Payment_method from "./Components/payment_method";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>

        {/* <section> */}
          <Routes>
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/Welcome" element={<Welcome />} />
            <Route path="/Aboutus" element={<AboutUs />} />
            <Route path="/Forbussiness" element={<Forbuissness />} />
            <Route path="/ForWorkSpace" element={<ForworkSpace />} />
            <Route path="/yourCostomer" element={<Customer_page />} />
            <Route path="/yourEmployee" element={<Employe_page />} />
            <Route path="/search" element={<List_item_page />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/emplist" element={<Employe_list />} />
            <Route path="/order" element={<Order_Conform />} />
            <Route path="/payment" element={<Payment_method />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        {/* </section> */}
      </div>

      <footer className="bg-dark text-secondary">
        
        {/* <Footer /> */}
      </footer>
    </Router>
  );  
}

export default App;
