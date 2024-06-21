import { useEffect, useRef, useState } from 'react';
import { Circle, Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import { useDispatch, useSelector } from 'react-redux';
import {
  ResetPositionToDefault,
  changeCenter,
  mapCafeList,
  setCafeData,
  setCurrentPositionAddress,
  setMarkerOpen
} from '../../../redux/slices/mapSlice';
import { Address, CloseBtn, MapContainer, MarkerDiv, Phone, RoadAdd, Title } from './KaKaoMap.style';

function KaKaoMap(data) {
  useKakaoLoader();
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  const text = useSelector((state) => state.map.searchText);
  const position = useSelector((state) => state.map.position);
  const level = useSelector((state) => state.map.level);
  const cafeData = useSelector((state) => state.map.selectedCafeData);
  const isOpen = useSelector((state) => state.map.isMarkerOpen);

  const [address, setAddress] = useState('');
  const [length, setLength] = useState(500);

  //원 범위
  useEffect(() => {
    dispatch(ResetPositionToDefault());
    switch (level) {
      case 1:
        setLength(75);
        break;
      case 2:
        setLength(150);
        break;
      case 3:
        setLength(300);
        break;
      case 4:
        setLength(600);
        break;
      case 5:
        setLength(1200);
        break;
      case 6:
        setLength(2400);
        break;
      case 7:
        setLength(4700);
        break;
    }
  }, [level]);

  //맵을 클릭하여 위치 이동
  const handleCenterClick = (map) => {
    const latlng = map.getCenter();
    const changeData = {
      level: map.getLevel(),
      position: {
        lat: latlng.getLat(),
        lng: latlng.getLng()
      }
    };
    dispatch(changeCenter(changeData));
  };

  //검색한 결과로 이동
  useEffect(() => {
    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch(text, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const changeData = {
          level: level,
          position: {
            lat: data[0].y,
            lng: data[0].x
          }
        };
        return dispatch(changeCenter(changeData));
      } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색결과가 존재하지 않습니다.');
        return;
      } else if (status === window.kakao.maps.services.Status.ERROR) {
        alert('에러가 발생했습니다. 다시 시도해주세요');
      }
    });
  }, [text]);

  /** MapSearchPage에서 사용하는 기능 */

  //원 반경안에 있는 모든 카페를 리스트로
  const makeCafeList = () => {
    const list = [];
    const ps = new window.kakao.maps.services.Places();
    ps.categorySearch(
      'CE7',
      (data, status, pagination) => {
        if (status === window.kakao.maps.services.Status.OK) {
          if (pagination.hasNextPage) {
            pagination.nextPage();
          }
          data.map((cafe) => {
            list.push(cafe.id);
          });
          if (!pagination.hasNextPage) {
            return dispatch(mapCafeList(list));
          }
        }
      },
      {
        radius: length,
        location: new window.kakao.maps.LatLng(position.lat, position.lng)
      }
    );
  };

  //위치가 바뀔때마다 리스트 업데이트
  useEffect(() => {
    dispatch(setMarkerOpen(false));
    const debouncing = setTimeout(() => {
      makeCafeList();
    }, 300);
    getAddressData();
    return () => clearTimeout(debouncing);
  }, [position]);

  /** SelectCafePage에서 다루는 기능   */

  //마커 클릭 이벤트
  const handleClickMarker = () => {
    getCafeData();
    dispatch(setMarkerOpen(!isOpen));
  };

  //좌표로 주소 나타내기
  const getAddressData = () => {
    const geocoder = new window.kakao.maps.services.Geocoder();

    const coord = new window.kakao.maps.LatLng(position.lat, position.lng);
    const callback = function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        setAddress(result[0].address.address_name);
        dispatch(setCurrentPositionAddress(result[0].address.address_name));
      } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
        console.log('결과가 존재하지 않습니다.');
        return;
      } else if (status === window.kakao.maps.services.Status.ERROR) {
        console.log('에러가 발생했습니다. 다시 시도해주세요');
      }
    };

    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };

  //주소로 가게 정보 받아오기
  const getCafeData = () => {
    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch(address, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const cafe = data.find((store) => {
          return store.category_group_code === 'CE7';
        });
        if (cafe) {
          dispatch(setCafeData(cafe));
        } else {
          dispatch(setCafeData(data[0]));
        }
      } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
        alert('장소가 불분명합니다');
        dispatch(setMarkerOpen(false));
      } else if (status === window.kakao.maps.services.Status.ERROR) {
        alert('에러가 발생했습니다. 다시 시도해주세요');
      }
    });
  };

  const handleCloseMarker = () => {
    dispatch(setMarkerOpen(false));
  };

  return (
    <MapContainer>
      <Map
        id="map"
        center={{
          lat: `${position.lat}`,
          lng: `${position.lng}`
        }}
        style={{
          width: `${data.width}`,
          height: `${data.height}`
        }}
        ref={mapRef}
        level={3}
        draggable={data.draggable}
        onCenterChanged={handleCenterClick}
      >
        {data.radius ? (
          <Circle
            center={{
              lat: position.lat,
              lng: position.lng
            }}
            radius={length}
            fillColor={'#DBC5B1'}
            fillOpacity={0.3}
            strokeOpacity={0}
          />
        ) : (
          false
        )}
        <MapMarker
          position={{
            lat: position.lat,
            lng: position.lng
          }}
          clickable={data.clickable}
          onClick={handleClickMarker}
        >
          {isOpen && (
            <MarkerDiv>
              <div>
                <Title>{cafeData.place_name}</Title>
                <Address>(주소) {address}</Address>
                <RoadAdd>(도로명) {cafeData.road_address_name}</RoadAdd>
                <Phone>{cafeData.phone}</Phone>
              </div>
              <CloseBtn onClick={handleCloseMarker}>X</CloseBtn>
            </MarkerDiv>
          )}
        </MapMarker>
      </Map>
    </MapContainer>
  );
}

export default KaKaoMap;
