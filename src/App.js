import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import DogsPage from "./pages/DogsPage";
import ContactPage from "./pages/ContactPage";
import ScrollTop from "./components/ScrollTop";
import './App.css'


import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";



function App() {

  return (
    <BrowserRouter>
      <ScrollTop />
          <div> 
            <Header />
            <Routes>
              <Route path="/mini-mate" element={<Navigate replace to="/" />} />
              <Route path="/" element={<Homepage />} />
              <Route path="dogs" element={<DogsPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Routes>
            <Footer />
          </div>
    </BrowserRouter>
  );
}
export default App;