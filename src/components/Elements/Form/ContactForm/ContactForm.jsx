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

const ContactForm = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const serviceId = "service_jwjp3vx";
  const templateId = "contact_form";
  const publicKey = "zRbxX2_tn2fo_dS-_";

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = "Input field cannot be empty";
      } else if (values.firstName.length < 3) {
        errors.firstName = "First name input field mjust not be empty";
      }

      if (!values.lastName) {
        errors.lastName = "Input field cannot be empty";
      } else if (values.lastName.length < 3) {
        errors.lastName = "Last name input field mjust not be empty";
      }

      if (!values.email) {
        errors.email = "Input field cannot be empty";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.message) {
        errors.message = "Input field cannot be empty";
      } else if (values.message.length < 50) {
        errors.message = "Must be 50 characters or more";
      }

      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      const templateParams = {
        from_name: values.firstName,
        from_email: values.email,
        user_email: values.email,
        reply_to: values.email,
        to_name: "Climax Green Agriculture",
        message: values.message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email was sent successfully", response);
          resetForm();
          toast.success(
            <Msg dynamicMesssage={`Your message was sent successfully`} />
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
      <ToastContainer />
      <form
        onSubmit={formik.handleSubmit}
        className={`flex flex-col justify-center py-20 px-5 md:px-16 font-josefinsansRegular`}
      >
        <div className={`grid md:grid-cols-2 gap-14`}>
          <div className={` flex flex-col gap-3`}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className={`py-3 px-5 w-full text-base font-josefinsansRegular rounded border-2  outline-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className={`bg-red-300 text-red-900 py-1 px-2 my-2 text-xs`}>
                {formik.errors.firstName}
              </div>
            ) : null}

            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className={`py-3 px-5 w-full text-base font-josefinsansRegular rounded border-2  outline-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className={`bg-red-300 text-red-900 py-1 px-2 my-2 text-xs`}>
                {formik.errors.lastName}
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
          <div className={`flex flex-col`}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className={`py-3 px-5 w-full text-base font-josefinsansRegular rounded border-2  outline-none resize-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            >
              Message
            </textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className={`bg-red-300 text-red-900 py-1 px-2 my-2 text-xs`}>
                {formik.errors.message}
              </div>
            ) : null}
          </div>
        </div>

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

export default ContactForm;
