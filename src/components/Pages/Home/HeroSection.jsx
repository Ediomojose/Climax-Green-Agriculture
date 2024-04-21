import React from "react";
import { NavLink } from "react-router-dom";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Farmer from "../../../assets/media/images/countryside-man-disinfecting-field.jpg";
import FarmerOnBike from "../../../assets/media/images/countryside-people-working-field.jpg";
import Cassava from "../../../assets/media/images/3.png";
import Plantation from "../../../assets/media/images/Hero_Image.png";
import ContactForm from "../../Elements/Form/NewsletterForm/NewsletterForm";

const HeroSection = () => {
  return (
    <>
      <motion.main
        
        className={`grid grid-cols-1 justify-center items-center lg:grid-cols-2 gap-5 py-16`}
      >
        <header
          className={`flex flex-col justify-center items-start w-full px-5 md:px-10`}
        >
          <h1
            className={`text-sm md:text-md font-centurygothicBlack text-brandBrown2x`}
          >
            Rooted in Sustainability:
          </h1>
          <h1
            className={`text-4xl md:text-5xl lg:text-5xl font-remBlack text-brandGreen1x font-bold`}
          >
            {" "}
            Empowering Farmers, Nourishing Communities
          </h1>
          <p
            className={`text-base md:text-lg py-5 font-remRegular leading-snug`}
          >
            Welcome to Climax Green, where innovation meets tradition in
            agriculture. We specialize in the agricultural sector with a primary
            focus on the cultivation and processing of cassava into essential
            staple food products.
          </p>
          <div className={`w-full flex justify-start items-start`}>
            <NavLink to="/contact">
              <button
                type="button"
                className={`px-7 py-2 bg-brandBrown2x rounded shadow-xl font-remMedium text-brandWhite1x`}
              >
                Explore Our Marketplace
              </button>
            </NavLink>
          </div>
        </header>
        <section
          className={`grid grid-cols-2 gap-2 px-5 md:px-10`}
        >
          <div className={` `}>
            <img
              src={Farmer}
              alt="Climax Green Agriculture: Farmer peeling cassava"
              className={` `}
            />
          </div>
          <div className={``}>
            <img
              src={FarmerOnBike}
              alt="Climax Green Agriculture: Farmer carrying cassava on bike"
              className={` `}
            />
          </div>
          <div className={``}>
            <img
              src={Cassava}
              alt="Climax Green Agriculture: Farmer peeling cassava"
              className={``}
            />
          </div>
          <div className={``}>
            <img
              src={Farmer}
              alt="Climax Green Agriculture: Farmer carrying cassava on bike"
              className={``}
            />
          </div>
        </section>
      </motion.main>
    </>
  );
};

export default HeroSection;
