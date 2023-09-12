import Link from "next/link";

function PageLinks({
     staticProps,
     className,
}: {
     staticProps: any;
     className?: string;
}): JSX.Element {
     return (
          <nav className={`main-nav font2 ${className ? className : ""}`}>
               <ul className="menu">
                    {staticProps &&
                         staticProps?.pageLinks?.map(
                              (
                                   link: {
                                        subMenu?: { name: string; url: string }[];
                                        name: string;
                                        url: string;
                                   },
                                   idx: number,
                              ) => (
                                   <li key={link.name} className="tw-group">
                                        {/** TODO: add active links**/}
                                        <Link href={link.url}>{link.name}</Link>
                                        {link?.subMenu && (
                                             <div className="megamenu megamenu-fixed-width megamenu-3cols group-hover:tw-block tw-rounded">
                                                  <div className="row">
                                                       <ul className="submenu">
                                                            {link?.subMenu.map((subLink) => {
                                                                 return (
                                                                      <li key={subLink.name}>
                                                                           <Link
                                                                                key={subLink.name}
                                                                                href={subLink.url}
                                                                           >
                                                                                {subLink.name}
                                                                           </Link>
                                                                      </li>
                                                                 );
                                                            })}
                                                       </ul>
                                                  </div>
                                             </div>
                                        )}
                                        {/* End .megamenu */}
                                   </li>
                              ),
                         )}
               </ul>
          </nav>
     );
}

export default PageLinks;
