import React from "react";
import TemplateWrapper from "../../../widget/TemplateWrapper";
import ServiceHeroHeader from "./ServiceHeroHeader";
import BenefitContainer from "./BenefitContainer";
import { Helmet } from "react-helmet-async";

const ServicePage = () => {
  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Climax Green Agriculture - Our Services</title>
        <meta name="title" content="Climax Green Agriculture" />
        <meta
          name="description"
          content="We specialize in the agricultural sector with a primary focus on the cultivation and processing of cassava into essential staple food products."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://climaxgreen.com/services" />
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
          content="https://climaxgreen.com/services"
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
        <link rel="canonical" href="https://climaxgreen.com/services" />
      </Helmet>
      <TemplateWrapper>
        <ServiceHeroHeader />
        <BenefitContainer />
      </TemplateWrapper>
    </>
  );
};

export default ServicePage;
