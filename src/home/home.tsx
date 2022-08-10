import { SocialButton } from "./socialButton";
import { Layout } from "../layout/layout";
import "./home.css";

export function HomePage() {
  return (
    <div>
      <head>
        <title>3rdHarmonicRecords</title>
      </head>
      <Layout showAnimation={true}>
        <div className="row flex-m-col flex-d-row">
          <div className="col column1">
            <h3 className="headingHome">Who We Are</h3>
            <p className="bodyHome">
              We are a HipHop/RnB Alternative Trap Record Label based in South
              Africa founded in 2021 and aimed at youth empowerment in the
              entertainment industry.
            </p>
          </div>
          <div className="col column2">
            <h3 className="headingHome">Mission</h3>
            <p className="bodyHome">
              Our mission is to discover and seek out undiscovered talented
              young artists and provide them with the platform to prosper,
              nurtured by an environment of freedom and creativity.
            </p>
          </div>
          <div className="col column3">
            <div>
              <h3 className="headingHome">Values</h3>
              <p className="bodyHome">
                Transparency <br />
                Integrity <br />
                Quality
              </p>
            </div>
          </div>
        </div>
        <div className="links">
          <SocialButton
            href="https://www.instagram.com/3rdharmonicrecords"
            socialNetworkType="instagram"
            text="3RD HARMONIC RECORDS"
          />
          <SocialButton
            href="https://www.instagram.com/dropoutfactory"
            socialNetworkType="instagram"
            text="DROP OUT FACTORY"
          />
          <SocialButton
            href="https://www.instagram.com/r_meo7230/"
            socialNetworkType="instagram"
            text="LIL ROLEY"
          />
          <SocialButton
            href="https://www.instagram.com/iamhat3trick"
            socialNetworkType="instagram"
            text="HAT3TRICK"
          />
        </div>
        <div className="links">
          <SocialButton
            href="https://twitter.com/the3rdharmonic"
            socialNetworkType="twitter"
            text="3RD HARMONIC RECORDS"
          />
          <SocialButton
            href="https://twitter.com/dofbfg"
            socialNetworkType="twitter"
            text="DROP OUT FACTORY"
          />
          <SocialButton
            href="https://twitter.com/hat3trick"
            socialNetworkType="twitter"
            text="HAT3TRICK"
          />
        </div>
      </Layout>
    </div>
  );
}
