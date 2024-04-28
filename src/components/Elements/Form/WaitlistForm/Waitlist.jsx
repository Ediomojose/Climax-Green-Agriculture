import React, { useState } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const [firstName, setFirstName] = useState("");
// const [LastName, setLastName] = useState("");
// const [email, setEmail] = useState("");
// const [message, setMessage] = useState("");

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
// const validate = (values) => {

// };

const Msg = ({ closeToast, toastProps, dynamicMesssage }) => (
  <div>
    {dynamicMesssage}

    <button onClick={closeToast}></button>
  </div>
);

const Waitlist = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const serviceId = "service_jwjp3vx";
  const templateId = "waitlist_form";
  const publicKey = "zRbxX2_tn2fo_dS-_";

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      lastName: "",
      address: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.fullName) {
        errors.fullName = "Input field cannot be empty";
      } else if (values.fullName.length >= 40) {
        errors.fullName = "Must be 15 characters or less";
      }

      if (!values.email) {
        errors.email = "Input field cannot be empty";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.address) {
        errors.address = "Input field cannot be empty";
      } else if (values.lastName.length >= 20) {
        errors.address = "Must be 20 characters or less";
      }

      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      const templateParams = {
        from_name: values.fullName,
        from_email: values.email,
        user_email: values.email,
        reply_to: values.email,
        to_name: "Climax Green Agriculture",
        operation_mode: values.radioGroup,
        business_name: values.businessName,
        address: values.address,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email was sent successfully", response);
          resetForm();
          toast.success(
            <Msg
              dynamicMesssage={`Your request to join our waitlist has been sucessfully sent`}
            />
          );
        })
        .catch((error) => {
          console.log("There was an error sending message", error);
          toast.error(
            <Msg dynamicMesssage={`There was an error sending message`} />
          );
        });
    },
  });

  return (
    <>
    <ToastContainer/>
      <form
        onSubmit={formik.handleSubmit}
        className={`flex flex-col justify-center py-10 px-5 md:px-10 lg-px-14 font-josefinsansRegular`}
      >
        <div className={` flex flex-col gap-3`}>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className={`py-3 px-5 w-full text-base font-josefinsansRegular rounded border-2  outline-none`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className={`bg-red-300 text-red-900 py-1 px-2 my-2 text-xs`}>
              {formik.errors.fullName}
            </div>
          ) : null}

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className={`py-3 px-5 w-full text-base font-josefinsansRegular rounded border-2  outline-none`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={`bg-red-300 text-red-900 py-1 px-2 my-2 text-xs`}>
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <fieldset
          id="radioGroup"
          label=" What is your mode of opearation in the agricultural landscape?"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.radioGroup}
          error={formik.errors.radioGroup}
        >
          <label htmlFor="mode_operation" className={``}>
            Mode of operation
            <p className={`text-xs font-remRegular pb-4`}>
              What is your mode of opearation in the agricultural landscape?
            </p>
          </label>
          <div className="">
            <input
              id="farmer"
              name="radioGroup"
              type="radio"
              className={``}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value="Farmer"
            />
            <label htmlFor="farmer" className={`px-3`}>
              Farmer{" "}
            </label>{" "}
          </div>
          <div className="">
            <input
              id="buyer"
              name="radioGroup"
              type="radio"
              className={``}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value="Buyer"
            />
            <label htmlFor="buyer" className={`px-3`}>
              Buyer{" "}
            </label>
          </div>
        </fieldset>

        <label htmlFor="businessName">
          Business Name <small className={`text-red-500`}>* Optional</small>
        </label>
        <input
          id="businessName"
          name="businessName"
          type="text"
          className={`py-3 px-5 w-full text-base font-josefinsansRegular rounded border-2  outline-none`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.businessName}
        />

        <label htmlFor="Address">Address</label>
        <input
          id="address"
          name="address"
          type="text"
          className={`py-3 px-5 w-full text-base font-josefinsansRegular rounded border-2  outline-none`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
        />
        {formik.touched.address && formik.errors.address ? (
          <div className={`bg-red-300 text-red-900 py-1 px-2 my-2 text-xs`}>
            {formik.errors.address}
          </div>
        ) : null}

        <button
          type="submit"
          className={`bg-brandGreen3x py-3 my-5 mx-auto rounded-md font-josefinsansBold text-brandWhite1x w-1/4`}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Waitlist;
