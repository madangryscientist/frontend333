import { FormikErrors, useFormik } from "formik";
import { useState } from "react";
import { Layout } from "../layout/layout";
import { ListQuestions } from "./listOfQuestions";
import "./community.scss";
interface CommunicationForm {
  question: string;
}
const Community = () => {
  const [message, setMessage] = useState("");
  const [messageClass, setMessageClass] = useState("");
  const formik = useFormik<CommunicationForm>({
    initialValues: {
      question: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const result = await fetch("https://localhost:7072/Community/Community", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(values),
      });

      const response = await result.json();
      resetForm();
      setMessage(response.message);
      setMessageClass("Success");
    },

    validate: (values) => {
      console.log(values);
      const errors = {} as FormikErrors<CommunicationForm>;
      if (values.question.length > 500) {
        errors.question = "Question Should be 500 Characters or Less";
      }
      return errors;
    },
  });

  return (
    <Layout>
      <ListQuestions />
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>
            <label htmlFor="question">Question</label>
          </div>
          <textarea
            className="communityInput"
            id="question"
            name="question"
            rows={4}
            onChange={formik.handleChange}
            value={formik.values.question}
          />

          {formik.errors.question}
        </div>
        <div className="onSubmit">
          <button type="submit">Submit</button>
          <div className={messageClass}>{message}</div>
        </div>
      </form>
    </Layout>
  );
};
export default Community;
