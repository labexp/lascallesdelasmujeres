// https://github.com/parcel-bundler/parcel/issues/1128
// import mapboxgl from 'mapbox-gl';

export default class MyMap {
  constructor(initCenter = [-39.11133, 36.66842], style = 'mapbox://styles/mapbox/dark-v9') {
    mapboxgl.accessToken = process.env.MAPBOX_TOKEN || 'pk.eyJ1IjoieWVyZ3VlcnJlcm8iLCJhIjoiY2tudWs1YWgyMGJwdTJxcnF2a3RrNXJxZCJ9.MqMJE2PNtDB0o1nZKfnf_w';

    this.map = new mapboxgl.Map({
      container: 'map',
      style,
      center: initCenter, // [lng, lat]
      zoom: 1,
    });

  }

  mapTo(center, zoom = 13) {
    this.map.flyTo({
      center,
      zoom,
    });
  }
}
