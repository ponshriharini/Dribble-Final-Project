import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from "./Pages/Homepage/Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./CommonComponents/FontStyles.css";
import SignUpFront from './Pages/Auth/Components/SignUpFront';
import Login from './Pages/Auth/Components/Login';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './Contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Signup" element={<SignUpFront />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </div>
    </AuthProvider>
  );
}

export default App;
