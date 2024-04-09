import React from "react";
import { motion } from "framer-motion";
import Farmer from "../../../assets/media/images/countryside-man-disinfecting-field.jpg";
import FarmerOnBike from "../../../assets/media/images/countryside-people-working-field.jpg";
import Cassava from "../../../assets/media/images/3.png";
import Plantation from "../../../assets/media/images/Hero_Image.png";
import ContactForm from "../../Elements/Form/NewsletterForm/NewsletterForm";

const HeroSection = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <main className={`grid grid-cols-1 justify-center items-center lg:grid-cols-2 gap-5 py-28`}>
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
          <p className={`text-base md:text-lg py-5 font-remRegular leading-snug`}>
            Welcome to Climax Green, where innovation meets tradition in
            agriculture. We specialize in the agricultural sector with a primary
            focus on the cultivation and processing of cassava into essential
            staple food products.
          </p>
          <div className={`w-full flex justify-start items-start`}>
            
          </div>
        </header>
        <motion.section
          className={`grid grid-cols-2 gap-2 px-5 md:px-10`}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className={` `}>
            <img
              src={Farmer}
              alt="Climax Green Agriculture: Farmer peeling cassava"
              className={` `}
              variants={item}
            />
          </div>
          <div className={``}>
            <img
              src={FarmerOnBike}
              alt="Climax Green Agriculture: Farmer carrying cassava on bike"
              className={` `}
              variants={item}
            />
          </div>
          <div className={``}>
            <img
              src={Cassava}
              alt="Climax Green Agriculture: Farmer peeling cassava"
              className={``}
              variants={item}
            />
          </div>
          <div className={``}>
            <img
              src={Farmer}
              alt="Climax Green Agriculture: Farmer carrying cassava on bike"
              className={``}
              variants={item}
            />
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default HeroSection;
