import "./home.css";
type SocialNetworkType = "instagram" | "twitter";
interface SocialButtonProps {
  href: string;
  socialNetworkType: SocialNetworkType;
  text: string;
}
const socialNetworkSrc = (val: SocialNetworkType) => {
  switch (val) {
    case "instagram":
      return "../instagram.svg";
    case "twitter":
      return "../twitter.svg";
  }
};
export const SocialButton = ({
  href,
  socialNetworkType,
  text,
}: SocialButtonProps) => {
  return (
    <a className="socialButton" href={href} target="blank">
      <img
        src={socialNetworkSrc(socialNetworkType)}
        alt={socialNetworkType}
        width="24px"
        height="24px"
      />
      <span className="socialButtonText">{text}</span>
    </a>
  );
};
