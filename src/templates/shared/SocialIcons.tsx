import Link from "next/link";
import PropTypes, { InferProps } from "prop-types";
import { socialMap } from "@/utils/helper";

const socialIconsProps = {
     links: PropTypes.arrayOf(
          PropTypes.shape({ name: PropTypes.string.isRequired, link: PropTypes.string.isRequired }),
     ).isRequired,
     className: PropTypes.string,
};

function SocialIcons({ links, className }: InferProps<typeof socialIconsProps>): JSX.Element {
     return (
          <div className="social-icons">
               {links &&
                    links.length > 0 &&
                    links.map((social) => {
                         return (
                              <Link
                                   key={social.name}
                                   href={social.link}
                                   className={`social-icon ml-0${socialMap[social.name]} ${
                                        className && className
                                   }`}
                                   target="_blank"
                                   title={social.name}
                              ></Link>
                         );
                    })}
          </div>
     );
}

export default SocialIcons;
