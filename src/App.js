import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from "./Components/navbar";
import Welcome from "./Components/welcome-page";
import AboutUs from "./Components/about-us";
import Forbuissness from "./Components/for-buissness";
import ForworkSpace from "./Components/for-workspace";
import Customer_page from "./Components/customer-page";
import Employe_page from "./Components/employe-page";
import List_item_page from "./Components/searching-page";
import Profile from "./login_Components/profile";
import Employe_list from "./login_Components/employe_list";
import Order_Conform from "./Components/order-conform";
import Payment_method from "./Components/payment-method";
import { AuthProvider } from "./login_Components/AuthContext";
import Footer from "./Components/footer";
import { ProductProvider } from "./login_Components/ProductContext";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          {/* <Navbar /> */}
        </header>

        {/* <section> */}
        <ProductProvider>
        <AuthProvider>
            <Routes>
              <Route path="/" element={<Welcome />} />
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
          </AuthProvider> 
          </ProductProvider>
        {/* </section> */}
      </div>

      <footer className="bg-dark text-secondary">
        
        {/* <Footer /> */}
      </footer>
    </Router>
  );  
}

export default App;
