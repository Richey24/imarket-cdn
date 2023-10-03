import Image from "next/image"
import mapbox from 'mapbox-gl';
import "../theme43.css"
import { useEffect, useRef, useState } from "react"

mapbox.accessToken = "pk.eyJ1IjoicmljaGV5MjQiLCJhIjoiY2xuYWc2dTV0MDRlZDJranltZHRiNmxwcCJ9.7jKP-hioFwTRtfVYDtQ0Fg"


const Home = () => {
    const [activeInfo, setActiveInfo] = useState("info1")
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapbox.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    }, [lat, lng, zoom])


    return (
        <div>
            <div className="trustUs">
                <Image unoptimized={true} width={100} height={100} src="https://absa7kzimnaf.blob.core.windows.net/templates-images/service/hand.jpg" alt="" />
                <div>
                    <h1>Trust With Your Business We Will Guard.</h1>
                    <p>Security companies are working all around the world to protect homes offices and other buildings. Many
                        security
                        companies are using slogan taglines to distinguishs themselves from their competitors and tell the
                        public they are the
                        best & why they should hire them for their security Thinking a slogan or tagline for a security.</p>
                    <button>GET IN NOW</button>
                </div>
            </div>
            <div className="theInfo">
                <h1>How it Works</h1>
                <h6>Security companies are working all around the world to protect homes, offices and other buildings. Many
                    security
                    companies are using slogans and taglines to distinguish themselves from their competitors and to tell the
                    public why
                    they are the best and why they should hire them for their security. Thinking a slogan or tagline for a
                    security company
                    can be very hard. In this post, we have gathered</h6>
                <h2 onClick={() => setActiveInfo("info1")}><span>+</span>Wait! What is VPN Service?</h2>
                <p className={activeInfo === "info1" ? "activeInfo" : ""}>Security companies are working all around the world to protect homes, offices and other buildings. Many
                    security
                    companies are using slogans and taglines to distinguish themselves from their competitors and to tell the
                    public why
                    they are the best & why they should hire them for their security Thinking a slogan or tagline for a security
                    company can
                    be very hard. In this post, we have gathered</p>
                <h2 onClick={() => setActiveInfo("info2")}><span>+</span>Why you need security service before start a new business?</h2>
                <p className={activeInfo === "info2" ? "activeInfo" : ""}>Security companies are working all around the world to protect homes, offices and other buildings. Many
                    security
                    companies are using slogans and taglines to distinguish themselves from their competitors and to tell the
                    public why
                    they are the best & why they should hire them for their security Thinking a slogan or tagline for a security
                    company
                    can
                    be very hard. In this post, we have gathered</p>
                <h2 onClick={() => setActiveInfo("info3")}><span>+</span>How to be more benighted on business now-a-days?</h2>
                <p className={activeInfo === "info3" ? "activeInfo" : ""}>Security companies are working all around the world to protect homes, offices and other buildings. Many
                    security
                    companies are using slogans and taglines to distinguish themselves from their competitors and to tell the
                    public why
                    they are the best & why they should hire them for their security Thinking a slogan or tagline for a security
                    company
                    can
                    be very hard. In this post, we have gathered</p>
                <h2 onClick={() => setActiveInfo("info4")}><span>+</span>Our business is protecting yours?</h2>
                <p className={activeInfo === "info4" ? "activeInfo" : ""}>Security companies are working all around the world to protect homes, offices and other buildings. Many
                    security
                    companies are using slogans and taglines to distinguish themselves from their competitors and to tell the
                    public why
                    they are the best & why they should hire them for their security Thinking a slogan or tagline for a security
                    company
                    can
                    be very hard. In this post, we have gathered</p>
            </div>
            <div className="gigabit">
                <h1>Gigabit Service, Fastest Always</h1>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.98" height="9.7" viewBox="0 0 11.98 9.7">
                        <g id="right-arrow" transform="translate(-2.65 -85.983)">
                            <g id="Group_192" data-name="Group 192" transform="translate(3 86.333)">
                                <path id="Path_564" data-name="Path 564"
                                    d="M14.165,90.594,9.839,86.432a.26.26,0,0,0-.408,0,.379.379,0,0,0,0,.477L13.265,90.5H3.288a.342.342,0,0,0,0,.675h9.977L9.431,94.757a.379.379,0,0,0,0,.477.26.26,0,0,0,.408,0l4.327-4.162A.379.379,0,0,0,14.165,90.594Z"
                                    transform="translate(-3 -86.333)" fill="#5551ef" stroke="#5551ef" stroke-width="0.7" />
                            </g>
                        </g>
                    </svg>
                    The result of employees, over detailers and engineers
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.98" height="9.7" viewBox="0 0 11.98 9.7">
                        <g id="right-arrow" transform="translate(-2.65 -85.983)">
                            <g id="Group_192" data-name="Group 192" transform="translate(3 86.333)">
                                <path id="Path_564" data-name="Path 564"
                                    d="M14.165,90.594,9.839,86.432a.26.26,0,0,0-.408,0,.379.379,0,0,0,0,.477L13.265,90.5H3.288a.342.342,0,0,0,0,.675h9.977L9.431,94.757a.379.379,0,0,0,0,.477.26.26,0,0,0,.408,0l4.327-4.162A.379.379,0,0,0,14.165,90.594Z"
                                    transform="translate(-3 -86.333)" fill="#5551ef" stroke="#5551ef" stroke-width="0.7" />
                            </g>
                        </g>
                    </svg>
                    All coming together to solve problem before.
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.98" height="9.7" viewBox="0 0 11.98 9.7">
                        <g id="right-arrow" transform="translate(-2.65 -85.983)">
                            <g id="Group_192" data-name="Group 192" transform="translate(3 86.333)">
                                <path id="Path_564" data-name="Path 564"
                                    d="M14.165,90.594,9.839,86.432a.26.26,0,0,0-.408,0,.379.379,0,0,0,0,.477L13.265,90.5H3.288a.342.342,0,0,0,0,.675h9.977L9.431,94.757a.379.379,0,0,0,0,.477.26.26,0,0,0,.408,0l4.327-4.162A.379.379,0,0,0,14.165,90.594Z"
                                    transform="translate(-3 -86.333)" fill="#5551ef" stroke="#5551ef" stroke-width="0.7" />
                            </g>
                        </g>
                    </svg>
                    Teamwork it demonstrates both internally and externally
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.98" height="9.7" viewBox="0 0 11.98 9.7">
                        <g id="right-arrow" transform="translate(-2.65 -85.983)">
                            <g id="Group_192" data-name="Group 192" transform="translate(3 86.333)">
                                <path id="Path_564" data-name="Path 564"
                                    d="M14.165,90.594,9.839,86.432a.26.26,0,0,0-.408,0,.379.379,0,0,0,0,.477L13.265,90.5H3.288a.342.342,0,0,0,0,.675h9.977L9.431,94.757a.379.379,0,0,0,0,.477.26.26,0,0,0,.408,0l4.327-4.162A.379.379,0,0,0,14.165,90.594Z"
                                    transform="translate(-3 -86.333)" fill="#5551ef" stroke="#5551ef" stroke-width="0.7" />
                            </g>
                        </g>
                    </svg>
                    Outstanding in the creation of landmark buildings
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.98" height="9.7" viewBox="0 0 11.98 9.7">
                        <g id="right-arrow" transform="translate(-2.65 -85.983)">
                            <g id="Group_192" data-name="Group 192" transform="translate(3 86.333)">
                                <path id="Path_564" data-name="Path 564"
                                    d="M14.165,90.594,9.839,86.432a.26.26,0,0,0-.408,0,.379.379,0,0,0,0,.477L13.265,90.5H3.288a.342.342,0,0,0,0,.675h9.977L9.431,94.757a.379.379,0,0,0,0,.477.26.26,0,0,0,.408,0l4.327-4.162A.379.379,0,0,0,14.165,90.594Z"
                                    transform="translate(-3 -86.333)" fill="#5551ef" stroke="#5551ef" stroke-width="0.7" />
                            </g>
                        </g>
                    </svg>
                    The result of employees, over detailers and engineers
                </li>
            </div>
            <div style={{ position: "relative" }}>
                <div className="map-sidebar">
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
                <div ref={mapContainer} className="map-container" id="serviceMap">
                </div>
            </div>
            <div className="pricingPlan">
                <div className="divBorder">
                    <div></div>
                    <div></div>
                </div>
                <h1>Pricing Plan</h1>
                <p>These speeds are excellent. It’s rare that a fast connection safety Internet leading speeds across its
                    network.</p>
                <div className="workCard">
                    <div className="wordCardDiv1" data-content="01">
                        <h3>Monthly</h3>
                        <div className="price">
                            <span className="currency">$</span>
                            <span className="value">3.66</span>
                            <span className="duration">/MO</span>
                        </div>
                        <h5>Save 42%</h5>
                        <hr />
                        <span><del>$83.88</del> <strong>$143.88</strong></span>
                        <p>build payment every years</p>
                        <p>24/7 active support</p>
                        <button>GET IT NOW</button>
                    </div>
                    <div className="wordCardDiv2" data-content="02">
                        <h4 className="ribbon">Best Deal</h4>
                        <h3>Yearly</h3>
                        <div className="price">
                            <span className="currency">$</span>
                            <span className="value">4.66</span>
                            <span className="duration">/MO</span>
                        </div>
                        <h5>Save 58%</h5>
                        <hr />
                        <span><del>$143.88</del> <strong>$220.88</strong></span>
                        <p>build payment every years</p>
                        <p>24/7 active support</p>
                        <button>GET IT NOW</button>
                    </div>
                    <div className="wordCardDiv3" data-content="03">
                        <h3>Lifetime</h3>
                        <div className="price">
                            <span className="currency">$</span>
                            <span className="value">6.66</span>
                            <span className="duration">/MO</span>
                        </div>
                        <h5>Save 78%</h5>
                        <hr />
                        <span><del>$333.88</del> <strong>$560.69</strong></span>
                        <p>build payment every years</p>
                        <p>24/7 active support</p>
                        <button>GET IT NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home