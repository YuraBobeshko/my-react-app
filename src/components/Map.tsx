import {FC} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const Map: FC = () => {
    return (
        <div>
            {/* Container for the map */}
            <div style={{width: '100%', height: '600px'}}>
                {/* The MapContainer component is the root of the map */}
                <MapContainer
                    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                    /*@ts-expect-error  */
                    center={[52.2297, 21.0122]} // Initial map center position (latitude and longitude)
                    zoom={12} // Initial zoom level
                    scrollWheelZoom={true} // Enable scroll wheel zoom
                    style={{width: '100%', height: '100%'}} // Set the map container size
                >
                    {/* The TileLayer component provides the tile layer for the map */}
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // OpenStreetMap tile layer URL
                    />

                    {/* Adding markers with popups */}
                    <Marker position={[52.23, 21.01]}>
                        <Popup>A sample marker with popup.</Popup>
                    </Marker>

                    <Marker position={[52.24, 21.02]}>
                        <Popup>Another sample marker with popup.</Popup>
                    </Marker>

                    {/* Add more markers as needed */}
                </MapContainer>
            </div>
        </div>
    );
};

export default Map;
