import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;
console.log( REACT_APP_GOOGLE_MAPS_API_KEY);

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey : { REACT_APP_GOOGLE_MAPS_API_KEY }
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Gmaps />;
}

const containerStyle = {
  width: "300px",
  height: "250px",
};

function Gmaps() {
  return (
    <div className="w-60 h-60">
      <GoogleMap
        zoom={13}
        center={{ lat: -6.299363, lng: 106.840069 }}
        mapContainerStyle={containerStyle}
      >
        <MarkerF position={{ lat: -6.299363, lng: 106}}/>
      </GoogleMap>
    </div>
  );
}
