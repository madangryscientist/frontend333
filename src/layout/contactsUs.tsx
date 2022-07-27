import "./contactUs.scss";

type SocialNetworkType = "instagram" | "email";
interface ContactUsProps {
  href: string;
  socialNetworkType: SocialNetworkType;
  text: string;
}
const socialNetworkSrc = (val: SocialNetworkType) => {
  switch (val) {
    case "instagram":
      return "../instagram.svg";
    case "email":
      return "../email.svg";
  }
};
export const ContactUsButton = ({
  href,
  socialNetworkType,
  text,
}: ContactUsProps) => {
  return (
    <div>
      <a className="contactUsText" href={href} target="blank">
        <div className="contactIcon">
          <img
            src={socialNetworkSrc(socialNetworkType)}
            alt={socialNetworkType}
            width="30px"
            height="30px"
          />
        </div>

        <div className="padText">{text}</div>
      </a>
    </div>
  );
};
