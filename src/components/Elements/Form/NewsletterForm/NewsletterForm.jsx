import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Msg = ({ closeToast, toastProps, dynamicMesssage }) => (
  <div>
    {dynamicMesssage}

    <button onClick={closeToast}></button>
  </div>
);

const NewsletterForm = ({ placeholder }) => {
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
      if (!values.email) {
        errors.email = "Input field cannot be empty";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      const templateParams = {
        from_name: values.email,
        from_email: values.email,
        reply_to: values.email,
        to_name: "Climax Green Agriculture",
        message: `${values.email}  is interested to joining the waitlist for our decentralized agricultural marketplace `,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          resetForm();
          toast.success(
            <Msg dynamicMesssage={`Your message was sent successfully`} />
          );
        })
        .catch((error) => {
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
      className={`w-full mx-5 md:mx-0 flex flex-col justify-center items-center `}
    >
      <label htmlFor="email"></label>
      <div className={`w-full flex justify-center items-center`}>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Input your email to join the waitlist for our decentalized marketplace"
          className={`py-3 px-5 w-full md:w-1/2 text-sm font-josefinsansMediumItalic flex justify-center items-center rounded shadow-2xl outline-none`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <button
          type="submit"
          className={`bg-brandGreen3x w-10 flex justify-center py-2`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9943 2C10.0165 2 8.08312 2.58649 6.43863 3.6853C4.79413 4.78412 3.51241 6.3459 2.75553 8.17317C1.99866 10.0004 1.80062 12.0111 2.18648 13.9509C2.57233 15.8907 3.52474 17.6725 4.92326 19.0711C6.32179 20.4696 8.10362 21.422 10.0434 21.8079C11.9832 22.1937 13.9939 21.9957 15.8212 21.2388C17.6484 20.4819 19.2102 19.2002 20.309 17.5557C21.4078 15.9112 21.9943 13.9778 21.9943 12C21.9944 10.6868 21.7359 9.38634 21.2333 8.17304C20.7308 6.95973 19.9942 5.8573 19.0656 4.92869C18.137 4.00008 17.0346 3.26349 15.8213 2.76098C14.608 2.25847 13.3076 1.99989 11.9943 2ZM15.1738 17.1525C15.1364 17.2458 15.0795 17.33 15.0068 17.3996C14.9342 17.4691 14.8475 17.5223 14.7526 17.5556C14.6577 17.5889 14.5568 17.6015 14.4566 17.5926C14.3565 17.5837 14.2594 17.5535 14.1718 17.504L11.4572 15.3946L9.71485 17.002C9.67442 17.0319 9.62713 17.0511 9.57733 17.0579C9.52752 17.0647 9.47681 17.0589 9.42985 17.0409L9.76385 14.0525L9.77454 14.061L9.78137 14.002C9.78137 14.002 14.6664 9.55445 14.8654 9.36496C15.0668 9.17596 15.0004 9.13496 15.0004 9.13496C15.0118 8.90443 14.6388 9.13496 14.6388 9.13496L8.16633 13.299L5.47084 12.381C5.47084 12.381 5.05684 12.2325 5.01784 11.906C4.97684 11.582 5.48433 11.406 5.48433 11.406L16.2013 7.14849C16.2013 7.14849 17.0823 6.75597 17.0823 7.406L15.1738 17.1525Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      {formik.touched.email && formik.errors.email ? (
        <div className={`bg-red-300 text-red-900 py-1 px-2 my-2 text-xs`}>
          {formik.errors.email}
        </div>
      ) : null}
    </form>
    </>
  );
};

export default NewsletterForm;
