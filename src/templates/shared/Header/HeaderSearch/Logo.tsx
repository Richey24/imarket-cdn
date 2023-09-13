import Image from "next/image";
import Link from "next/link";

function Logo({ company }) {
     return (
          <Link href="/" className="logo">
               {company?.logo ? (
                    <Image
                         src={company?.logo}
                         className="black-logo"
                         alt="Porto Logo"
                         width={202}
                         height={100}
                    />
               ) : (
                    <h3>{company?.company_name || "Tester"}</h3>
               )}
          </Link>
     );
}

export default Logo;
