import React, { useEffect, useState } from "react";
import { FormikErrors, useFormik } from "formik";
import { Layout } from "../layout/layout";
import { ContactDbModel } from "../models/ContactModel";
import "./contact.scss";
const Contact = () => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [messageClass, setMessageClass] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const formik = useFormik<ContactDbModel>({
    initialValues: {
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      instagram: "",
      twitter: "",
      soundcloud: "",
      artist: false,
      producer: false,
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
      setTimeout(() => {
        console.log("effect", formik.values, submitted);

        setMessageClass("");
        setSubmitted(false);
        setMessage("");
      }, 2000);
    },

    validate: (values) => {
      const errors = {} as FormikErrors<ContactDbModel>;
      if (values.firstName.length == 0) {
        errors.firstName = "First Name is Required";
      }
      return errors;
    },
  });

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
            <label htmlFor="instagram">Instagram</label>
          </div>
          <div>
            <input
              className="contactInput"
              id="instagram"
              name="instagram"
              type="url"
              onChange={formik.handleChange}
              value={formik.values.instagram}
            />
          </div>
          <div className="contactLabel">
            <label htmlFor="twitter">Twitter</label>
          </div>
          <div>
            <input
              className="contactInput"
              id="twitter"
              name="twitter"
              type="url"
              onChange={formik.handleChange}
              value={formik.values.twitter}
            />
          </div>
          <div className="contactLabel">
            <label htmlFor="soundcloud">SoundCloud</label>
          </div>
          <div>
            <input
              className="contactInput"
              id="soundcloud"
              name="soundcloud"
              type="url"
              onChange={formik.handleChange}
              value={formik.values.soundcloud}
            />
          </div>
          <div className="checkBoxes">
            <label>Artist</label>
            <input
              type="checkbox"
              id="artistBox"
              name="artistBox"
              value="artist"
              onChange={() => {
                formik.setFieldValue("artist", !formik.values.artist);
              }}
            />
            <label>Producer</label>
            <input
              type="checkbox"
              id="producerBox"
              name="producerBox"
              onChange={() => {
                formik.setFieldValue("producer", !formik.values.producer);
              }}
              value="producer"
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
