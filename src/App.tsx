import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ForgotPassword from "./pages/auth/forgot-password";
import Plans from "./pages/plans";
import Home from "./pages/home";
import Payment from "./pages/payment";

function App() {
  return (
    <div className="App">
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
            <Route path="*" element={<Auth />}>
              <Route index element={<Login />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
