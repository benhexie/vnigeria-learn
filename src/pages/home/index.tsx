import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import "./home.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/data`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        if (!data.error) dispatch(setUser(data.data.user));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    })();
  });

  return (
    <>
      {loading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="home-page">
          <Navigation />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
