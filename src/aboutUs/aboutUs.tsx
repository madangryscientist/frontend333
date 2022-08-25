import { Layout } from "../layout/layout";
import "./aboutUs.scss";
import { Helmet } from "react-helmet";
export const AboutUS = () => {
  return (
    <div>
      <Layout>
        <Helmet>
          <title>aboutUs</title>
          <link rel="canonical" href="/aboutUs" />
          <meta
            name="description"
            content="3rdHarmonicRecords about us is a page that details the background and history of the record label and its artists"
          />
          <meta
            name="keywords"
            content="3rdHarmonicRecords, music, artist, producer, collaborations, release music, chat page, drum kits, promotion, history, background, started, origin, founders, location, contributions, projects, future goals, goals, about, story, lessons, discography, start up, studio, home studio, sound, unique, introduction, aspiration, inspiration, johannesburg, south africa, ideas "
          />
        </Helmet>
        <h3 className="comingSoon">Coming Soon...</h3>
      </Layout>
    </div>
  );
};
