import { useEffect } from 'react';
import './Map.css';
declare global {
  interface Window {
    geolonia: any;
  }
}

const Component = () => {

  useEffect(() => {
    const map = new window.geolonia.Map({
      container: '#map',
      center: [139.767, 35.681],
      zoom: 10,
      hash: true,
      style: "geolonia/gsi",
    })

    map.on('load', () => {

    })
    
  });

  return (
    <>
      <div id="map" />
    </>
  );
}

export default Component;