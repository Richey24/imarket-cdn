import { useState } from "react";
import Image from "next/image";
import slide1 from "../../../../assets/images/demoes/demo13/slider/slide-1.jpg";
import slide2 from "../../../../assets/images/demoes/demo13/slider/slide-2.jpg";
import banner1 from "../../../../assets/images/demoes/demo13/banners/banner-1.jpg";
import banner2 from "../../../../assets/images/demoes/demo13/banners/banner-2.jpg";
import banner3 from "../../../../assets/images/demoes/demo13/banners/banner-3.jpg";
import banner4 from "../../../../assets/images/demoes/demo13/banners/banner-4.jpg";
import banner5 from "../../../../assets/images/demoes/demo13/banners/banner-5.jpg";
import post3 from "../../../../assets/images/demoes/demo13/blog/home/post-3.jpg";
import post1 from "../../../../assets/images/demoes/demo13/blog/home/post-1.jpg";
import post2 from "../../../../assets/images/demoes/demo13/blog/home/post-2.jpg";

import product15two from "../../../../assets/images/demoes/demo13/products/product-15-2.jpg";
import client1 from "../../../../assets/images/clients/client-1.jpg";
import client2 from "../../../../assets/images/clients/client-2.jpg";
import client3 from "../../../../assets/images/clients/client-3.jpg";

export const SidebarHome = () => {
     // State for the accordion menu
     const [menuOpen, setMenuOpen] = useState(false);

     // State for the testimonials carousel
     const testimonials = [
          {
               client: client1,
               name: "John Smith",
               role: "CEO & Founder",
               content: "Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi.",
          },
          // Add more testimonials here
     ];

     // State for the posts carousel
     const posts = [
          {
               image: post1,
               date: { day: "29", month: "Jun" },
               title: "Post Format Standard",
               content: "Leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with...",
          },
          // Add more posts here
     ];

     const banners = [
          {
               title: "Sale Many Item",
               discount: "45",
               buttonText: "View Sale",
               buttonLink: "#",
          },
          // Add more banners here
     ];

     return (
          <aside className="sidebar-home col-lg-3 mobile-sidebar">
               <div className="side-menu-wrapper mb-3">
                    <h2 className="side-menu-title ls-n-25">Browse Categories</h2>
                    <ul className="side-menu px-3 mx-3">
                         <li>
                              <a href="demo13-shop.html">Fashion</a>
                              <span
                                   className="side-menu-toggle"
                                   onClick={() => setMenuOpen(!menuOpen)}
                              />
                              <ul style={{ display: menuOpen ? "block" : "none" }}>
                                   <li>
                                        <a href="#">Women Clothes</a>
                                   </li>
                                   <li>
                                        <a href="#">Men Clothes</a>
                                   </li>
                                   <li>
                                        <a href="#">Shoes</a>
                                   </li>
                                   <li>
                                        <a href="#">Accessories</a>
                                   </li>
                              </ul>
                         </li>
                         <li>
                              <a href="demo13-shop.html">Accessories</a>
                              <span
                                   className="side-menu-toggle"
                                   onClick={() => setMenuOpen(!menuOpen)}
                              />
                              <ul style={{ display: menuOpen ? "block" : "none" }}>
                                   <li>
                                        <a href="#">Watches</a>
                                   </li>
                                   <li>
                                        <a href="#">Caps</a>
                                   </li>
                              </ul>
                         </li>
                         <li>
                              <a href="demo13-shop.html">Electronics</a>
                              <span
                                   className="side-menu-toggle"
                                   onClick={() => setMenuOpen(!menuOpen)}
                              />
                              <ul style={{ display: menuOpen ? "block" : "none" }}>
                                   <li>
                                        <a href="#">Toys</a>
                                   </li>
                                   <li>
                                        <a href="#">Headphone</a>
                                   </li>
                              </ul>
                         </li>
                         <li>
                              <a href="demo13-shop.html">Dress</a>
                         </li>
                    </ul>
                    {/* End .side-menu */}
               </div>
               <div className="widget widget-banners px-5 text-center">
                    <div className="owl-carousel owl-theme dots-small">
                         {banners.map((banner, index) => (
                              <div
                                   className="banner d-flex flex-column align-items-center"
                                   key={index}
                              >
                                   <h3 className="badge-sale bg-secondary d-flex flex-column align-items-center justify-content-center text-uppercase">
                                        <em className="ls-0">Sale</em> {banner.title}
                                   </h3>
                                   <h4 className="sale-text font1 text-uppercase">
                                        <span>{banner.discount}</span>
                                        <sup>%</sup>
                                        <sub>off</sub>
                                   </h4>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                   <a
                                        href={banner.buttonLink}
                                        className="btn btn-primary btn-md font1"
                                   >
                                        {banner.buttonText}
                                   </a>
                              </div>
                         ))}
                    </div>
               </div>
               {/* End .widget */}
               <div className="widget widget-newsletters bg-gray text-center">
                    {/* Newsletter form */}
               </div>
               {/* End .widget */}
               <div className="widget widget-testimonials">
                    <div className="owl-carousel owl-theme dots-left dots-small">
                         {testimonials.map((testimonial, index) => (
                              <div className="testimonial" key={index}>
                                   <div className="testimonial-owner">
                                        <figure>
                                             <Image
                                                  src={testimonial.client}
                                                  alt="client"
                                                  width={100}
                                                  height={100}
                                             />
                                        </figure>
                                        <div>
                                             <h4 className="testimonial-title">
                                                  {testimonial.name}
                                             </h4>
                                             <span>{testimonial.role}</span>
                                        </div>
                                   </div>
                                   {/* End .testimonial-owner */}
                                   <blockquote>
                                        <p>{testimonial.content}</p>
                                   </blockquote>
                              </div>
                         ))}
                    </div>
               </div>
               {/* End .widget */}
               <div className="widget widget-posts post-date-in-media media-with-zoom">
                    <div
                         className="owl-carousel owl-theme dots-left dots-m-0 dots-small"
                         data-owl-options="{ 'margin' : 20, 'loop': false }"
                    >
                         {posts.map((post, index) => (
                              <article className="post" key={index}>
                                   <div className="post-media">
                                        <a href="single.html">
                                             <Image
                                                  src={post.image}
                                                  alt="Post"
                                                  width={400}
                                                  height={300}
                                                  data-zoom-image={post.image}
                                             />
                                        </a>
                                        <div className="post-date">
                                             <span className="day">{post.date.day}</span>
                                             <span className="month">{post.date.month}</span>
                                        </div>
                                        <span className="prod-full-screen">
                                             <i className="fas fa-search" />
                                        </span>
                                   </div>
                                   {/* End .post-media */}
                                   <div className="post-body">
                                        <h2 className="post-title">
                                             <a href="single.html">{post.title}</a>
                                        </h2>
                                        <div className="post-content">
                                             <p>{post.content}</p>
                                             <a href="single.html" className="read-more">
                                                  read more
                                                  <i className="icon-right-open" />
                                             </a>
                                        </div>
                                        {/* End .post-content */}
                                   </div>
                                   {/* End .post-body */}
                              </article>
                         ))}
                    </div>
               </div>
          </aside>
     );
};
