import SocialIcons from "../SocialIcons";

function ContactInfo({ staticProps, company }) {
     return (
          <div className="widget">
               <h4 className="widget-title font-weight-bold">Contact Info</h4>
               <ul className="contact-info">
                    <li>
                         <span className="contact-info-label">Address:</span>
                         {company?.city + " " + company?.country}
                    </li>
                    <li>
                         <span className="contact-info-label">Phone:</span>
                         <a href="tel:">{company?.phone}</a>
                    </li>
                    <li>
                         <span className="contact-info-label">Email:</span>{" "}
                         <a href={`mailto:${company?.user_id?.email}`}>{company?.user_id?.email}</a>
                    </li>
                    <li>
                         <span className="contact-info-label">Working Days/Hours:</span> Mon - Sun /
                         9:00 AM - 8:00 PM
                    </li>
               </ul>
               <SocialIcons links={staticProps?.socials} />
          </div>
     );
}

export default ContactInfo;
