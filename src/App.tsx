import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container m-auto">
      <Header />
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      <Footer />
    </div>
  )
}

export default App;
