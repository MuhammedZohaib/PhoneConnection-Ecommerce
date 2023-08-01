import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  return (
    <MapContainer
      center={[31.5160935, 74.3428981]}
      zoom={16}
      style={{ height: "200px", width: "320px", borderRadius: "20px" }}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
      />
      <Marker position={[31.5160935, 74.3428981]}>
        <Popup>
          <b>Hafeez Centre, Lahore</b>
          <br />
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
