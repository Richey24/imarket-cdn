"use client";
import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
     width: "100%",
     height: "30rem",
};
const geocodeAddress = async (address: string): Promise<{ lat: number; lng: number }> => {
     const geocoder = new window.google.maps.Geocoder();

     return new Promise<{ lat: number; lng: number }>((resolve, reject) => {
          geocoder.geocode({ address }, (results, status) => {
               if (
                    status === window.google.maps.GeocoderStatus.OK &&
                    results &&
                    results.length > 0
               ) {
                    const { lat, lng } = results[0].geometry.location;
                    resolve({ lat: lat(), lng: lng() });
               } else {
                    reject(
                         new Error(
                              "Geocode was not successful for the following reason: " + status,
                         ),
                    );
               }
          });
     });
};

export default function GoogleMapComponent({ address }) {
     const [map, setMap] = useState(null);
     const [center, setCenter] = useState({ lat: 0, lng: 0 });

     const { isLoaded } = useJsApiLoader({
          id: "google-map-script",
          googleMapsApiKey: "AIzaSyDc3LRykbLB-y8MuomRUIY0qH5S6xgBLX4",
     });
     useEffect(() => {
          (async () => {
               if (isLoaded) {
                    try {
                         const coordinates = await geocodeAddress(address);
                         setCenter(coordinates);
                    } catch (error) {
                         console.error("Error geocoding address:", error);
                    }
               }
          })();
     }, [isLoaded, address]);

     // const onLoad = React.useCallback(function callback(map: any) {
     //      // This is just an example of getting and using the map instance!!! don't just blindly copy!
     //      const bounds = new window.google.maps.LatLngBounds(center);
     //      map.fitBounds(bounds);

     //      setMap(map);
     // }, []);

     const onLoad = (map) => {
          setMap(map);
     };
     const onUnmount = () => {
          setMap(null);
     };
     // const onUnmount = React.useCallback(function callback(map: any) {
     //      setMap(null);
     // }, []);
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
                         {/* <></> */}
                         <Marker position={center} />
                    </GoogleMap>
               ) : (
                    <></>
               )}
          </>
     );
}
