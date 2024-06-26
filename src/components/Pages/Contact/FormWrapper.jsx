import React from "react";
import ContactForm from "../../Elements/Form/ContactForm/ContactForm";
import CassavaSVG from "../../../assets/media/images/cassava-flour-with-root-e1622183629603 1.svg";
import CassavaLeaf from "../../../assets/media/images/Cassava-leaf-landscape.png";

const FormWrapper = () => {
  return (
    <>
      <header className={`flex flex-col justify-center items-center pt-42`}>
        <img
          src="https://res.cloudinary.com/drkfpblmu/image/upload/v1712340930/Climax%20Green%20Agriculture/Cassava-leaf-landscape_kzllwc.png"
          alt="cassava leaf cassava plantation climax green agriculture"
          loading="lazy"
        />
        <div className={`pb-3 flex flex-col justify-center items-center pt-5`}>
          <p className={`font-centurygothicBold text-lg text-brandBrown2x`}>
            Get in Touch With Us
          </p>
        </div>
        <div
          className={`flex flex-col justify-center items-center text-2xl md:text-4xl lg:text-5xl font-remBlack text-brandGreen1x`}
        >
          <h1 className="">Do You’ve Any Question?</h1>
          <h1 className="">Write us a Message</h1>
        </div>
      </header>
      <ContactForm />
    </>
  );
};

export default FormWrapper;
