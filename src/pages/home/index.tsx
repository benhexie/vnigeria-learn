import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
