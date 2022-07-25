import React, { useEffect, useState } from "react";
import { FormikErrors, useFormik } from "formik";
import { Layout } from "../layout/layout";
import { ContactDbModel } from "../models/ContactModel";
import "./contact.scss";
const Contact = () => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [messageClass, setMessageClass] = useState("");
  const formik = useFormik<ContactDbModel>({
    initialValues: {
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      socialMedia: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const result = await fetch(
        "https://localhost:7072/ContactUs/ContactUsInput",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(values),
        }
      );
      const response = await result.json();
      resetForm();
      setMessage("Saved");
      setSubmitted(true);
      setMessageClass("Success");
    },

    validate: (values) => {
      // console.log(values);
      const errors = {} as FormikErrors<ContactDbModel>;
      if (values.firstName.length == 0) {
        errors.firstName = "First Name is Required";
      }
      return errors;
    },
  });
  // useEffect(() => {
  //   console.log("effect", formik.values, submitted);
  //   if (submitted) {
  //     setMessageClass("");
  //     setSubmitted(false);
  //     setMessage("");
  //   }
  // }, [formik.values]);
  return (
    <Layout>
      <form onSubmit={formik.handleSubmit}>
        <div className="contactBox">
          <div>
            <div className="contactLabel">
              <label htmlFor="firstName">First Name</label>
            </div>
            <div>
              <input
                className="contactInput"
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </div>
            {formik.errors.firstName}
          </div>
          <div>
            <div className="contactLabel">
              <label htmlFor="lastName">Last Name</label>
            </div>
            <input
              className="contactInput"
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </div>
          <div>
            <div className="contactLabel">
              <label htmlFor="email">Email Address</label>
            </div>
            <input
              className="contactInput"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="contactLabel">
            <label htmlFor="socialMedia">Social Media Links</label>
          </div>
          <div>
            <input
              className="contactInput"
              id="socialMedia"
              name="socialMedia"
              type="socialMedial"
              onChange={formik.handleChange}
              value={formik.values.socialMedia}
            />
          </div>
          <div className="submitButton">
            <button className="onSubmit" type="submit">
              Submit
            </button>
            <div className={messageClass}>{message}</div>
          </div>
        </div>
      </form>
    </Layout>
  );
};
export default Contact;
