import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ForgotPassword from "./pages/auth/forgot-password";
import Plans from "./pages/plans";
import Home from "./pages/home";
import Payment from "./pages/payment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="auth" element={<Auth />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Register />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>
            <Route path="plans" element={<Plans />} />
            <Route path="payment/:plan" element={<Payment />} />
          </Route>
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<Home />}>
            <Route element={<Auth />}>
              <Route index element={<Login />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
