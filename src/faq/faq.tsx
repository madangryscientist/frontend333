import { useQuery } from "react-query";
import { Layout } from "../layout/layout";
import { Loading } from "../loading/loading";
import { FaqDbModel } from "../models/FaqModel";

const fetcher = () =>
  fetch("https://localhost:7072/Faq").then((res) => res.json());

const Faq = () => {
  const { data, isLoading } = useQuery<FaqDbModel[]>("/api/faq", fetcher);
  if (!data) return <Loading></Loading>;
  return (
    <Layout>
      <div>
        <h2>FAQ</h2>
        <div>
          {data.map((element) => {
            return (
              <div key={element.id}>
                <h2>{element.question}</h2>
                <p>{element.answer}</p>
              </div>
            );
          })}
        </div>
        <div>
          <textarea
            className="faqQuestions"
            id="questions"
            name="questions"
            rows={4}
          />
        </div>
      </div>
    </Layout>
  );
};
export default Faq;
