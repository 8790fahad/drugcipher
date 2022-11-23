import React from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin } from "react-feather";
import { ZoomControl } from "react-mapbox-gl/lib";
// import { Marker } from 'react-mapbox-gl/lib';
export default function DrugsLocation({ location = [] }) {
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoieXNxdWFyZWltcGVyaWFsIiwiYSI6ImNsOThtemc0ZDA5cXgzcXF0ZTRtMTAzb3UifQ.q1j7HpXo902tSPv5LSAN1g",
  });
  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "67.5vh",
          width: "100%",
        }}
        center={[12.011171324972095, 8.542933227726762]}
        zoom={[1]}
      >
        {location.length && location[0] === null
          ? location.map((state) => (
              <Marker coordinates={[state?.latitude, state?.longitude]}>
                <MapPin />
              </Marker>
            ))
          : null}

        <ZoomControl />
      </Map>
    </div>
  );
}
