import React from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Input field cannot be empty";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "ReInput field cannot be emptyquired";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "ReqInput field cannot be emptyuired";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.message) {
    errors.message = "RequInput field cannot be emptyired";
  } else if (values.lastName.length > 50) {
    errors.message = "Must be 50 characters or more";
  }

  return errors;
};

const ContactForm = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`flex flex-col pt-28 px-5 md:px-16 font-josefinsansRegular`}
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
            <div className={`bg-red-300 text-red-900 py-1 px-2 my-2 text-xs`}>{formik.errors.firstName}</div>
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
            <div className={`bg-red-300 text-red-900 py-1 px-2 my-2 text-xs`}>{formik.errors.lastName}</div>
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
            <div className={`bg-red-300 text-red-900 py-1 px-2 my-2 text-xs`}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className={`flex flex-col`}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className={`py-3 px-5 w-full text-base font-josefinsansRegular rounded border-2  outline-none`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          >
            Message
          </textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className={`bg-red-300 text-red-900 py-1 px-2 my-2 text-xs`}>{formik.errors.message}</div>
          ) : null}
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
