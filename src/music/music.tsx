import { Layout } from "../layout/layout";
import "./music.scss";
import { Helmet } from "react-helmet";
export const Music = () => {
  return (
    <div>
      <Layout>
        <Helmet>
          <title>Music</title>
          <link rel="canonical" href="/music" />
          <meta
            name="description"
            content="3rdHarmonicRecords music page is the main portal to everything created by the label or their collaborators"
          />
          <meta
            name="keywords"
            content="3rdHarmonicRecords, music, hiphop, beats, music production, new song, new release, release, latest, artists, collaborations, music videos, new music, news, updates, bios, hat3trick, hattrick, hatrick, lil roley, roley, dof, drop out factory, glock, glock challed, captain, captain ivy "
          />
        </Helmet>
        <h3 className="comingSoon">Coming Soon...</h3>
      </Layout>
    </div>
  );
};
