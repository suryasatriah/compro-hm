import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAoH0kGHIwRwQjyEIvHj-5CTgmlHFN8qeA",
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
