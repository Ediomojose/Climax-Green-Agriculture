import React from "react";
import TemplateWrapper from "../../../widget/TemplateWrapper";
import FormWrapper from "./FormWrapper";
import AddressContainer from "./AddressContainer";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  return (
    <>
    <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Climax Green Agriculture - Contact Us</title>
        <meta name="title" content="Climax Green Agriculture" />
        <meta
          name="description"
          content="We specialize in the agricultural sector with a primary focus on the cultivation and processing of cassava into essential staple food products."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://climaxgreen.com/contact" />
        <meta property="og:title" content="Climax Green Agriculture" />
        <meta
          property="og:description"
          content="We specialize in the agricultural sector with a primary focus on the cultivation and processing of cassava into essential staple food products."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtiqegodx/image/upload/v1713576826/20220807_191731_0000_-_eluba_emmanuel_ckedob.png"
        />

        {/* <!-- Twitter --> */}
        <meta
          property="twitter:card"
          content="https://res.cloudinary.com/dtiqegodx/image/upload/v1713576826/20220807_191731_0000_-_eluba_emmanuel_ckedob.png"
        />
        <meta
          property="twitter:url"
          content="https://climaxgreen.com/contact"
        />
        <meta property="twitter:title" content="Climax Green Agriculture" />
        <meta
          property="twitter:description"
          content="We specialize in the agricultural sector with a primary focus on the cultivation and processing of cassava into essential staple food products."
        />
        <meta
          property="twitter:image"
          content="hhttps://res.cloudinary.com/dtiqegodx/image/upload/v1713576826/20220807_191731_0000_-_eluba_emmanuel_ckedob.png"
        />
        <link rel="canonical" href="https://climaxgreen.com/contact" />
      </Helmet>
    <TemplateWrapper>
      <FormWrapper/>
      <AddressContainer/>
    </TemplateWrapper>
    </>
  );
};

export default ContactPage;
