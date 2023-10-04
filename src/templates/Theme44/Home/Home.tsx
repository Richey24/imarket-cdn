import Image from "next/image"
import "../theme44.css"

const Home = () => {
    return (
        <div>
            <main className="minMain">
                <div className="minMainFirst">
                    <h1>Categories.</h1>
                    <ul className="minMainCat">
                        <li>Finance Management</li>
                        <li>Banking Investigation</li>
                        <li>Business Insurance</li>
                        <li>Car Insurance</li>
                        <li>Market Research</li>
                        <li>Home Insurance</li>
                        <li>Life Insurance</li>
                        <li>Health Insurance</li>
                    </ul>
                    <div className="minFirstContact">
                        <h1>Contact Us</h1>
                        <div>
                            <div>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                                    </path>
                                </svg>
                            </div>
                            <span>(202) 255 5421</span>
                        </div>
                        <div>
                            <div>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                                    </path>
                                </svg>
                            </div>
                            <span>Your@gmail.com</span>
                        </div>
                        <div>
                            <div>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                    </path>
                                </svg>
                            </div>
                            <span>1st Avenue, Boston</span>
                        </div>
                    </div>
                    <h1>Brochures</h1>
                    <p className="minFirstView">View our 2020 financial prospectus brochure for an easy to read guide on all of the
                        services offer.</p>
                    <button className="minFirstPres">
                        Company Presentation
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                            stroke-linejoin="round" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </button>
                    <h1>Follow & Connect On.</h1>
                    <div className="minFirstIcons">
                        <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em"
                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em"
                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em"
                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em"
                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="minMainSecond">
                    <Image unoptimized={true} width={100} height={100} className="minMainSecondHand" src="https://absa7kzimnaf.blob.core.windows.net/templates-images/service/hand.jpg" alt="" />
                    <h1>International Business Opportunities.</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera
                        tion in some form,
                        by injected humour, or randomised words which don’t look even slightly believable. If you are going to
                        use a passage of
                        Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden.</p>
                    <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this
                        the first true
                        generator on the Internet.</p>
                    <div className="minSecondPeople">
                        <ul>
                            <li>
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                    stroke-linecap="round" stroke-linejoin="round" className="icon" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                Seed do eiusmod tempor incididunt ut
                            </li>
                            <li>
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                    stroke-linecap="round" stroke-linejoin="round" className="icon" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                Exercitation ullamco laboris nis.
                            </li>
                            <li>
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                    stroke-linecap="round" stroke-linejoin="round" className="icon" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                Quis nostrud exerc citation.
                            </li>
                            <li>
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                    stroke-linecap="round" stroke-linejoin="round" className="icon" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                Andomised words which {"don't"} look
                            </li>
                            <li>
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                    stroke-linecap="round" stroke-linejoin="round" className="icon" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                Commodo consequat duis autex.
                            </li>
                            <li>
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                    stroke-linecap="round" stroke-linejoin="round" className="icon" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                Andomised words which {"don't"} look
                            </li>
                            <li>
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                    stroke-linecap="round" stroke-linejoin="round" className="icon" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                Andomised words which {"don't"} look
                            </li>
                        </ul>
                        <Image unoptimized={true} width={100} height={100} src="https://absa7kzimnaf.blob.core.windows.net/templates-images/service/workers.jpg" alt="" />
                    </div>
                    <div className="minSecondButton">
                        <button className="minSecondButtonActive">Audit</button>
                        <button>Strategy</button>
                        <button>Sustainability</button>
                    </div>
                    <p className="minSecondToggle">There are many variations of passages of Lorem Ipsum available, but the majority
                        have suffered alteration
                        in some form,
                        by injected humour, or randomised words which {"don't"} look even slightly believable. If you are going to
                        use a passage of
                        Lorem Ipsum, you need to be sure there {"isn't"} anything embarrassing hidden in the middle of text. All the
                        Lorem Ipsum
                        generators on the Internet</p>
                    <div className="minSecondFemale">
                        <Image unoptimized={true} width={100} height={100} src="https://absa7kzimnaf.blob.core.windows.net/templates-images/service/female.jpg" alt="" />
                        <div>
                            <h1>Planning Strategy</h1>
                            <p>Adipisicing elit, sed do eiusmod tempor incididunt ul labore et dolore magna aliqua</p>
                            <li>
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                    stroke-linecap="round" stroke-linejoin="round" className="icon" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                research beyond the business plan
                            </li>
                            <li>
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                    stroke-linecap="round" stroke-linejoin="round" className="icon" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                marketing options and rates.
                            </li>
                            <li>
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                    stroke-linecap="round" stroke-linejoin="round" className="icon" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                the ability to turnaround consulting.
                            </li>
                        </div>
                    </div>
                    <div className="projectResult">
                        <div>
                            <h1>Project Results.</h1>
                            <p>There are many variations of passages of Lorem ipsum available, but the majority have suffered
                                altera tion in some form,
                                by injected,</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. eu fugiat nulla
                                pariatur.</p>
                            <p>Enim minim veniam quis nostrud. exercitation ullamco laboris nisi aliquip</p>
                        </div>
                        <Image unoptimized={true} width={100} height={100} src="https://absa7kzimnaf.blob.core.windows.net/templates-images/service/graph.png" alt="" />
                    </div>
                </div>
            </main>
            <div className="minInfo">
                <div className="firstMinInfo">
                    <h5>Call To Action</h5>
                    <h1>Get Advice From Our Professionals.</h1>
                    <div>
                        <div>
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                                stroke-linejoin="round" className="icon" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                </path>
                            </svg>
                            <p>Direct Line Numbers</p>
                            <span>+11 (0) 123 456 7890 / +11 (0) 593 458 2394</span>
                        </div>
                        <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="icon"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z">
                                </path>
                            </svg>
                            <p>Our Email</p>
                            <span>info@minzel.com/ example@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="secondMinInfo">
                    <div>
                        <input placeholder="Name" type="text" name="name" />
                        <input placeholder="Email" type="email" name="email" />
                    </div>
                    <div>
                        <input placeholder="Subject" type="text" name="subject" />
                    </div>
                    <div>
                        <textarea placeholder="Message" name="message" cols={30} rows={7}></textarea>
                    </div>
                    <br />
                    <button>Send Us A Message</button>
                </div>
            </div>
        </div>
    )
}

export default Home