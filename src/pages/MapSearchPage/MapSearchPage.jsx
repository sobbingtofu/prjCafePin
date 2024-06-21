import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Location from '../../components/common/Icon/Location';
import KaKaoMap from '../../components/common/KaKaoMap/KaKaoMap';
import { ViewSpecificRegionRange, changeCenter, searchThisText } from '../../redux/slices/mapSlice';
import { MyLocationBtn, SearchDiv, SearchInput, SettingBtn, SubmitBtn, TitleDiv, Wrapper } from './MapSearchPage.style';

function MapSearchPage() {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();
  const location = useSelector((state) => state.map.position);
  const level = useSelector((state) => state.map.level);
  const cafeList = useSelector((state) => state.map.cafeList);

  //내 위치를 불러와주는 함수
  const handleLocationClick = () => {
    //내 위치 불러오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        dispatch(
          changeCenter({
            level: level,
            position: {
              lat: pos.coords.latitude,
              lng: pos.coords.longitude
            }
          })
        );
      });
    }
  };

  //검색한 결과를 저장
  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  //검색한 결과 보내기
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(searchThisText(searchText));
  };

  //주변 카페 리스트 저장
  const handleSetLocationClick = () => {
    dispatch(ViewSpecificRegionRange());
    navigate('/');
  };

  return (
    <Wrapper>
      <TitleDiv>
        <p>리뷰를 보고싶은 지역을 찾아보세요!</p>
      </TitleDiv>
      <SearchDiv>
        <MyLocationBtn onClick={handleLocationClick}>
          <Location />내 위치 중심
        </MyLocationBtn>
        <form onSubmit={handleSearchSubmit}>
          <SearchInput onChange={handleSearchInput} value={searchText} />
          <SubmitBtn>검색</SubmitBtn>
        </form>
      </SearchDiv>
      <KaKaoMap
        x={location.lat}
        y={location.lng}
        width={`135dvh`}
        height={`60dvh`}
        draggable={true}
        radius={true}
        clickable={false}
      />
      <SettingBtn onClick={handleSetLocationClick}>이 지역으로 설정</SettingBtn>
    </Wrapper>
  );
}

export default MapSearchPage;
