import { motion } from "framer-motion";
import ContactForm from "../Form/NewsletterForm/NewsletterForm";
import { NavLink } from "react-router-dom";
import NavBarData from "../../../data/navigationData/NavBarData";
import SocialMediaData from "../../../data/socialMediaData/SocialMediaData";

const WebFooter = () => {
  return (
    <>
      <motion.footer className={``}>
        <div
          className={`bg-brandLightGreen2x py-8 flex justify-center items-center`}
        >
          <ContactForm />
        </div>
        <section
          className={`bg-brandLightGreen1x py-14 md:py-24 px-10 md:px-20 flex flex-col justify-center items-center`}
        >
          <nav className={`flex items-center`}>
            <ul className={`flex `}>
              {NavBarData.map((item, idx) => {
                return (
                  <motion.li
                    key={idx}
                    className={`flex items-center gap-2 px-2 md:px-5 text-brandGreen2x`}
                  >
                    <NavLink end={item.end} to={item.link} className={``}>
                      {item.pageName}
                    </NavLink>
                  </motion.li>
                );
              })}
            </ul>
          </nav>
          <div className={`py-10`}>
            <ul className={`flex gap-4`}>
              {SocialMediaData.map((item, idx) => {
                return (
                  <li key={idx}>
                    <a href={item.link}>{item.svg}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className={`text-xs md:text-sm font-remItalic`}>
            &#169; Copyright 2024 - Climax Green Agriculture{" "}
          </p>
        </section>
      </motion.footer>
    </>
  );
};

export default WebFooter;
