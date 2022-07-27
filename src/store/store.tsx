import { useQuery } from "react-query";
import { Layout } from "../layout/layout";
import { StoreItems } from "./storeItems";
import "./store.scss";

const fetcher = () =>
  fetch("https://localhost:7072/Store").then((res) => res.json());
const Store = () => {
  const { data } = useQuery("https://localhost:7072/Store", fetcher);
  console.log("store", data);
  return (
    <Layout>
      <div className="outerStore">
        <div>
          {data?.map((item) => (
            <div className="outerStoreBox">
              <StoreItems
                key={item._id}
                itemColumnNumber={1}
                heading={item.heading}
                mainText={item.mainText}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Store;
