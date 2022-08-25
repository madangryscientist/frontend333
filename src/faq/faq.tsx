import { useFormik } from "formik";
import { useState } from "react";
import { useQuery } from "react-query";
import { Layout } from "../layout/layout";
import { Loading } from "../loading/loading";
import { FaqDbModel } from "../models/FaqModel";
import "./faq.scss";
import { Helmet } from "react-helmet";

const fetcher = () =>
  fetch("https://backend333.azurewebsites.net/Faq").then((res) => res.json());

const Faq = () => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { data, isLoading } = useQuery<FaqDbModel[]>("/api/faq", fetcher);

  const formik = useFormik<FaqDbModel>({
    initialValues: {
     
      question: "",
      answer: "",
      active: false,
      email: "",
      name: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const result = await fetch("https://localhost:7072/Faq/FaqInput", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(values),
      });
      await result.json();
      resetForm();
      setMessage("Saved");
      setSubmitted(true);

      setTimeout(() => {
        console.log("effect", formik.values, submitted);
        setSubmitted(false);
        setMessage("");
      }, 2000);
    },
  });
  if (isLoading) return <Loading></Loading>;
  return (
    <Layout>
      <Helmet>
        <title>Faq</title>
        <link rel="canonical" href="/faq" />
        <meta
          name="description"
          content="3rdHarmonicRecords faq page is a general information page `database` concerning all you need to know about music"
        />
        <meta
          name="keywords"
          content="3rdHarmonicRecords, faq, music, hiphop, beats, music production, purchase, how to, can i, what is, why do, available, details, questions, answers, producer, artist, beat maker, composer, ranger, melody, drums, mixing, mastering, recording, distribution, music videos, videos, cover art, design"
        />
      </Helmet>
      <div>
        <div className="askUs">
          <h6>ASK US ANYTHING!</h6>
        </div>
        <div className="outerFaqForm">
          {!isLoading &&
            data?.map((element) => {
              return (
                <div key={element.id}>
                  <div className="questionFaq">
                    <p className="qFaq">Q</p>
                    <h2 className="question">{element.question}</h2>
                  </div>
                  <div className="answerFaq">
                    <p className="aFaq">A</p>
                    <p className="answer">{element.answer}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="faqForm">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <div className="faqLabel">
                <label htmlFor="name">Name</label>
              </div>
              <div>
                <input
                  className="faqInput"
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </div>
              {formik.errors.name}
            </div>
            <div>
              <div className="faqLabel">
                <label htmlFor="email">Email</label>
              </div>
              <input
                className="faqInput"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            {formik.errors.email}
            <div>
              <div className="faqLabel">
                <label htmlFor="question">Question</label>
              </div>
              <input
                className="faqInput"
                id="question"
                name="question"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.question}
              />
            </div>
            {formik.errors.question}
            <div className="submitButton">
              <button className="onSubmit" type="submit">
                Submit
              </button>
              <div>{message}</div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Faq;
