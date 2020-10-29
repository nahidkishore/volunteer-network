import React, { useContext } from "react";
import { UserContext } from "../../App";
import Sidebar from "../AdminPanel/Sidebar/Sidebar";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import carousel1 from '../../resource/images/babySit.png';
import carousel2 from '../../resource/images/birdHouse.png';
import carousel3 from '../../resource/images/childSupport.png';
import carousel4 from '../../resource/images/cleanWater.png';
import carousel5 from '../../resource/images/driveSafety.png';
import Header from "../Home/Header";
import Footer from "../Home/Footer/Footer";


const Dashboard = () => {

  const options = {
    rewind: true,
    autoplay: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1024: {
        items: 3,
      },
    },
  };


  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <section>
      <div className="container">
<Header></Header>
  {/* <h2 className="text-center mt-5"><span className="text-brand">{loggedInUser.name}</span></h2> */}
        <div className="row">
          <div className="col-md-4 col-12 col-sm-6 mt-5">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-8 col-12 col-sm-6">
          <div className="text-center mt-5 mb-5">
        <h2 /* style={{ color: "#FFFFFF" }} */>
          Here are some of <span className="text-brand">Our Volunteer Works</span>
        </h2>
        <div className="mt-5 ml-5">
          <OwlCarousel options={options}>
            <div>
              <img
                src={carousel1}
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div>
              <img
                src={carousel2}
                alt=""
                style={{ height:"100%", width: "100%" }}
              />
            </div>
            <div>
              <img
                src={carousel3}
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div>
              <img
                src={carousel4}
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div>
              <img
                src={carousel5}
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </OwlCarousel>
        </div>
      </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </section>
  );
};

export default Dashboard;
