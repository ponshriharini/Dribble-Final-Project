import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from "./Pages/Homepage/Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Components/FontStyles.css";
import SignUpFront from './Pages/Auth/Components/SignUpFront';
import Login from './Pages/Auth/Components/Login';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './Contexts/AuthContext';
import UserFeed from './Pages/UserFeed/Components/UserFeed';
import ProtectedRoute from './Components/Routing/ProtectedRoute';
import ProfileLikedPosts from './Pages/Profile/Components/ProfileLikedPosts';

function App() {
  return (
    <AuthProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Signup" element={<SignUpFront />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/UserFeed" element={<ProtectedRoute><UserFeed /></ProtectedRoute>} />
              <Route path="*" element={<Home />} />
              <Route path="/Profile/LikedShots" element={<ProtectedRoute><ProfileLikedPosts /></ProtectedRoute>} ></Route>
            </Routes>
          </BrowserRouter>
        </div>
    </AuthProvider>
  );
}

export default App;
