/* eslint-disable react/no-unknown-property */
import { useNavigate } from 'react-router-dom';
import {
  CafeSearchInputSection,
  MainPageSearchSectionContainer,
  MapIconContainer,
  SearchIconContainer
} from './MainPageSearchSection.style';
import MainPageAddReviewButton from '../MainPageAddReviewButton';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { SET_CAFE_SEARCH_TEXT } from '../../redux/slices/cafeSearchTextSlice';
import MapIcon from '../common/Icon/MapIcon/MapIcon';
import SearchIcon from '../common/Icon/SearchIcon/SearchIcon';

const MainPageSearchSection = () => {
  const inputValueRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEnterKeyOnInput = (event) => {
    if (event.key === 'Enter') {
      dispatch(SET_CAFE_SEARCH_TEXT(inputValueRef.current.value));
    }
  };
  return (
    <MainPageSearchSectionContainer>
      <MapIconContainer
        onClick={() => {
          navigate('/search');
        }}
      >
        <MapIcon size="64" />
      </MapIconContainer>

      <CafeSearchInputSection>
        <input placeholder="리뷰를 볼 카페를 검색!" onKeyDown={handleEnterKeyOnInput} ref={inputValueRef} />
        <SearchIconContainer>
          <SearchIcon
            onClick={() => {
              dispatch(SET_CAFE_SEARCH_TEXT(inputValueRef.current.value));
            }}
          />
        </SearchIconContainer>
      </CafeSearchInputSection>
      <MainPageAddReviewButton></MainPageAddReviewButton>
    </MainPageSearchSectionContainer>
  );
};

export default MainPageSearchSection;
