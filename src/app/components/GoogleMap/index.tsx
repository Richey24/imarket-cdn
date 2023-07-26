"use client";
import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
     width: "100%",
     height: "30rem",
};

export default function GoogleMapComponent() {
     const center = {
          lat: -34.398,
          lng: 150.884,
     };
     const { isLoaded } = useJsApiLoader({
          id: "google-map-script",
          googleMapsApiKey: "AIzaSyDc3LRykbLB-y8MuomRUIY0qH5S6xgBLX4",
     });

     const [map, setMap] = React.useState(null);

     const onLoad = React.useCallback(function callback(map: any) {
          // This is just an example of getting and using the map instance!!! don't just blindly copy!
          const bounds = new window.google.maps.LatLngBounds(center);
          map.fitBounds(bounds);

          setMap(map);
     }, []);

     const onUnmount = React.useCallback(function callback(map: any) {
          setMap(null);
     }, []);
     return (
          <>
               {isLoaded ? (
                    <GoogleMap
                         mapContainerStyle={containerStyle}
                         center={center}
                         zoom={10}
                         onLoad={onLoad}
                         onUnmount={onUnmount}
                    >
                         {/* Child components, such as markers, info windows, etc. */}
                         <></>
                    </GoogleMap>
               ) : (
                    <></>
               )}
          </>
     );
}
