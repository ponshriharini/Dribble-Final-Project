import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from "./Pages/Homepage/Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './CommonComponents/Navbar/Navbar';
import FooterLinks from './CommonComponents/Footer/FooterLinks';
import "./CommonComponents/FontStyles.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <FooterLinks />
      </BrowserRouter>
    </div>
  );
}

export default App;
