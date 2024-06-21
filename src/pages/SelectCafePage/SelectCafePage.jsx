import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Location from '../../components/common/Icon/Location';
import KaKaoMap from '../../components/common/KaKaoMap/KaKaoMap';
import { changeCenter, searchThisText } from '../../redux/slices/mapSlice';
import {
  MyLocationBtn,
  SearchDiv,
  SearchInput,
  SettingBtn,
  SubmitBtn,
  TitleDiv,
  Wrapper
} from './SelectCafePage.style';

function SelectCafePage() {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();
  const location = useSelector((state) => state.map.position);
  const level = useSelector((state) => state.map.level);
  const cafeData = useSelector((state) => state.map.selectedCafeData);
  const isOpen = useSelector((state) => state.map.isMarkerOpen);

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

  //마커로 표시된 위치의 카페 정보 저장
  const handleSelectCafe = () => {
    if (Object.keys(cafeData).length === 0) {
      return alert('마커를 클릭해 장소를 지정해주세요!');
    } else if (!isOpen) {
      return alert('마커를 클릭해 장소를 지정해주세요');
    } else if (cafeData.category_group_code !== 'CE7') {
      return alert('선택하신 장소가 카페가 아닙니다. 다시 시도해주세요');
    }
    navigate('/write');
  };

  return (
    <Wrapper>
      <TitleDiv>
        <p>리뷰하실 카페를 찾아보세요!</p>
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
        radius={false}
        clickable={true}
      />
      <SettingBtn onClick={handleSelectCafe}>현재 표시된 장소를 선택</SettingBtn>
    </Wrapper>
  );
}

export default SelectCafePage;
