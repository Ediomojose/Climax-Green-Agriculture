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
      <main className={`grid grid-cols-1 lg:grid-cols-2 gap-5 py-28`}>
        <header
          className={`flex flex-col justify-center items-start w-full px-5 md:px-10`}
        >
          <h1
            className={`text-sm md:text-md font-centurygothicBlack text-brandBrown2x`}
          >
            Rooted in Sustainability:
          </h1>
          <h1
            className={`text-4xl md:text-5xl lg:text-5xl font-remBlack text-brandGreen3x font-bold`}
          >
            {" "}
            Empowering Farmers, Nourishing Communities
          </h1>
          <p
            className={`text-sm md:text-md py-5 font-centurygothicRegular leading-snug`}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia unde
            iusto totam nisi doloremque nulla? Facere, error magnam ratione qui
            inventore molestias praesentium iusto doloribus architecto hic vitae
            optio accusantium.
          </p>
          <div className={`w-full flex justify-start items-start`}>
            <ContactForm
              placeholder={`Let's get in touch, input your email address`}
            />
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
