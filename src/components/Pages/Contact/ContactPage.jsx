import React from "react";
import TemplateWrapper from "../../../widget/TemplateWrapper";
import FormWrapper from "./FormWrapper";
import AddressContainer from "./AddressContainer";

const ContactPage = () => {
  return (
    <TemplateWrapper>
      <FormWrapper/>
      <AddressContainer/>
    </TemplateWrapper>
  );
};

export default ContactPage;
