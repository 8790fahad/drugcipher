import React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
export default function DrugsLocation() {
    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoieXNxdWFyZWltcGVyaWFsIiwiYSI6ImNsOThtemc0ZDA5cXgzcXF0ZTRtMTAzb3UifQ.q1j7HpXo902tSPv5LSAN1g'
    });
    return (
        <div>
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '31.8vh',
                    width: '100%'
                }}
            >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[9.0820, 8.6753]} />
                </Layer>
            </Map>
        </div>
    )
}
