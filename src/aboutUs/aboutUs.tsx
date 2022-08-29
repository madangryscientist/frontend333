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
        <div className="outerAbout">
          <h3 className="aboutUsHead">ABOUT US</h3>
          <p className="aboutUsText">
            We are an Independent Record Label and Entertainment conglomerate
            founded and established in Johannesburg, South Africa in 2020 by
            Hat3trick (currently Executive producer, Head Engineer and song
            writer) and is focused on everything HipHop related.
          </p>
          <p className="aboutUsText">
            The inspiration and motive for creating this company was and always
            will be the discovery of unknown, up and coming artists with
            extraordinary talent and provide them with the resources and support
            necessary enabling them to achieve their full artistic potential.
          </p>
          <p className="aboutUsText">
            The first of the 3rd Hamonic Recording Studios was built slowly and
            steadily from the ground up starting in early 2017 by Hat3trick
            without any outside help or funding in a small flat on his uncle's
            property. 2 years later it had evolved into a professional home
            studio with all the equipment needed to produce high quality music
            that could compete with industry standards.{" "}
          </p>
          <p className="aboutUsText">
            The first Artists to sign with us was a group known as "Drop Out
            Factory" aka DOF consisting of 2 recording artists known as Captain
            Ivy and Glock Challed specialising in Trap and Alternative Trap
            hailing from Hillbrow in Johannesburg. The first contract was signed
            in January of 2021, and signified the unofficial launch of the
            Record label. Today we have an additional artist signed known as Lil
            Roley specialising in Trap, alternative Trap and RnB as well as a
            plethora of talented independent artists who we work with closely.
          </p>
          <p className="aboutUsText">
            The Official Launch of 3rd Harmonic Records will be marked by the
            debut drop of the Single "Clientele" by DOF and will be accompanied
            by a Music Video in the last quarter of 2022.{" "}
          </p>
          <p className="aboutUsText">
            Services offered by us include but are not limited to Full Record
            deals for independent artists, Production deals for beatmakers and
            composers, Graphic design and exclusive Music distribution and
            promoting services for artists that wish to stay independent but
            want to take advantage of a Record Labels resources. we also offer
            freelance Production, Mixing and Mastering services to the public.
            Flexibility is everything and Expertise is the creator.
          </p>
        </div>
      </Layout>
    </div>
  );
};
