import { templateImages } from "@/appProvider/templateImages";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import Image from "next/image";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = (props: any) => {
     const { company, static: staticProps, categories } = props.props;

     const showCanvas = () => {
          document.getElementById("cartCanvas").classList.toggle("showCanvas");
     };

     return (
          <header className="header" id="top">
               <div className="header-middle sticky-header">
                    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                         <Container>
                              <Navbar.Brand href="#home">
                                   <Logo company={company} />
                              </Navbar.Brand>
                              <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                              <Navbar.Collapse id="responsive-navbar-nav">
                                   <Nav className="me-auto">
                                        {/* <Nav.Link href="#features">Features</Nav.Link> */}
                                        {staticProps &&
                                             staticProps?.pageLinks?.map(
                                                  (
                                                       link: {
                                                            subMenu?: {
                                                                 name: string;
                                                                 url: string;
                                                            }[];
                                                            name: string;
                                                            url: string;
                                                       },
                                                       idx: number,
                                                  ) => {
                                                       return (
                                                            <Nav.Link
                                                                 key={link.name}
                                                                 href="#features"
                                                            >
                                                                 {link.name}
                                                            </Nav.Link>
                                                       );
                                                  },
                                             )}
                                        <NavDropdown title="USD" id="collapsible-nav-dropdown">
                                             <NavDropdown.Item href="#action/3.1">
                                                  EUR
                                             </NavDropdown.Item>
                                             <NavDropdown.Item href="#action/3.2">
                                                  USD
                                             </NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="ENG" id="collapsible-nav-dropdown">
                                             <NavDropdown.Item href="#action/3.1">
                                                  ENG
                                             </NavDropdown.Item>
                                             <NavDropdown.Item href="#action/3.2">
                                                  FRA
                                             </NavDropdown.Item>
                                        </NavDropdown>
                                   </Nav>
                              </Navbar.Collapse>
                         </Container>
                    </Navbar>
               </div>
          </header>
          /* <div>
           <header className="header" id="top">
                <div className="header-middle sticky-header">
                    <div className="container">
                        <div className="header-left">
                            <a href="demo28.html" className="logo">
                                <Image src={templateImages.logoImage.logo2} className="black-logo" alt="Porto Logo" width="202"
                                    height="80" />
                            </a>
                            <ul className="header-links scrolling-box" id="caty-list">
                                <li>
                                    <a href="#intro" className="nav-link active">intro</a>
                                </li>
                                <li>
                                    <a href="#feature" className="nav-link">features</a>
                                </li>
                                <li>
                                    <a href="#tour" className="nav-link">tour</a>
                                </li>
                                <li>
                                    <a href="#specific" className="nav-link">specifications</a>
                                </li>
                                <li>
                                    <a href="#testimonial" className="nav-link">testimonials</a>
                                </li>
                            </ul>
                        </div>
                        <div className="header-right header-dropdowns">
                            <div className="header-dropdown">
                                <a href="#">USD</a>
                                <div className="header-menu">
                                    <ul>
                                        <li>
                                            <a href="#">EUR</a>
                                        </li>
                                        <li>
                                            <a href="#">USD</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="header-dropdown lang-menu">
                                <a href="#">
                                    <i className="flag-us flag"></i>ENG</a>
                                <div className="header-menu">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="flag-us flag mr-2"></i>ENG</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="flag-fr flag mr-2"></i>FRA</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="dropdown cart-dropdown">
                                <a onClick={showCanvas} href="#" title="Cart"
                                    className="dropdown-toggle dropdown-arrow cart-toggle d-flex align-items-center"
                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                    data-display="static">
                                    <i className="minicart-icon"></i>
                                    <span className="cart-count badge-circle">3</span>
                                </a>

                              
                            </div>
                            <a href="#widget-mobile" className="mobile-btn text-white" data-toggle="collapse">
                                <i className="fas fa-bars"></i>
                            </a>
                            <div className="mobile-slide d-lg-none">
                                <ul className="mobile-body scrolling-box bg-white collapse" id="widget-mobile">
                                    <li>
                                        <a href="#intro" className="active">intro</a>
                                    </li>
                                    <li>
                                        <a href="#feature">features</a>
                                    </li>
                                    <li>
                                        <a href="#tour">tour</a>
                                    </li>
                                    <li>
                                        <a href="#specific">specifications</a>
                                    </li>
                                    <li>
                                        <a href="#testimonial">testimonials</a>
                                    </li>

                                    <li>
                                        <a href="#widget-link-2" data-toggle="collapse" role="button" aria-expanded="true"
                                            aria-controls="widget-link-2">USD
                                            <span className="toggle"></span>
                                        </a>
                                        <div className="collapse" id="widget-link-2">
                                            <ul className="sub-link">
                                                <li>
                                                    <a href="#">EUR</a>
                                                </li>
                                                <li>
                                                    <a href="#">USD</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#widget-link-3" data-toggle="collapse" role="button" aria-expanded="true"
                                            aria-controls="widget-link-3">
                                            <i className="flag-us flag"></i>ENG
                                            <span className="toggle"></span>
                                        </a>
                                        <div className="collapse" id="widget-link-3">
                                            <ul className="sub-link">
                                                <li>
                                                    <a href="#">
                                                        <i className="flag-us flag mr-2"></i>ENG</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="flag-fr flag mr-2"></i>ENG</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header> 
          </div>*/
     );
};

export default Header;
