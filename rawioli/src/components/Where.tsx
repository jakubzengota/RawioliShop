import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import rawiolikasa from "../assets/paniwiolaprzykasie.png"

// Ustawienie ikony, ponieważ domyślna ikona Leaflet może nie działać poprawnie bez tej konfiguracji
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Where = () => {
  // Przykładowe współrzędne: Warszawa, Polska
  const position = [51.42017250174365, 6.146066459407041];

  return (
    <div className='where'>
        <div className='whereLeft'>
            <span>Gdzie jesteśmy</span>
            <span>Kloosterstraat 64, Grubbenvorst, Holandia</span>
             <div className="mainravioliDiv">
          <img className="rawiolikasa" src={rawiolikasa} alt="Owners of the shop" />
        </div>
        </div>
      <div className='whereRight'>
        <div className='map'>
            <MapContainer center={position} zoom={20} style={{ width: '100%', height: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution=''
            />
            <Marker position={position}>
                <Popup>
                Jesteśmy tutaj! <br /> Kloosterstraat 64, Grubbenvorst, Holandia.
                </Popup>
            </Marker>
            </MapContainer>
        </div>
      </div>
      
    </div>
  );
};

export default Where;