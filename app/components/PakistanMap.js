"use client";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import events from "../../public/data/events.json";
import pakistanGeoJSON from "@/public/data/pakistan.json";
import L from "leaflet";
import { useRef } from "react";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
});

export default function PakistanMap() {
  const mapRef = useRef();

  const onEachFeature = (feature, layer) => {
    layer.setStyle({
      fillColor: "#00b894",
      fillOpacity: 0.4,
      color: "#00695c",
      weight: 2,
    });
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-md bg-white/20 shadow-lg">
      <MapContainer
        ref={mapRef}
        center={[30.3753, 69.3451]}
        zoom={5}
        style={{
          height: "350px",
          maxHeight: "500px",
          width: "100%",
          borderRadius: "20px",
          overflow: "hidden",
        }}
        zoomControl={false}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON data={pakistanGeoJSON} onEachFeature={onEachFeature} />
        {events.map((item) => (
          <Marker key={item.id} position={[item.latitude, item.longitude]}>
            <Popup className="max-w-xs sm:max-w-sm md:max-w-md">
              <h3 className="font-semibold mb-2 text-green-700">{item.title}</h3>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-lg mb-2 object-cover"
                />
              )}
              <p className="text-gray-700 text-sm sm:text-base">{item.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
