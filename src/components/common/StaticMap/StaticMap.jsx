import React from 'react';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';

function StaticMap(data) {
  useKakaoLoader();
  return (
    <Map
      id="map"
      center={{
        lat: data.y,
        lng: data.x
      }}
      style={{
        width: `${data.width}`,
        height: `${data.height}`
      }}
      draggable={false}
      level={3}
    >
      <MapMarker
        position={{
          lat: data.y,
          lng: data.x
        }}
        clickable={false}
      ></MapMarker>
    </Map>
  );
}

export default StaticMap;
