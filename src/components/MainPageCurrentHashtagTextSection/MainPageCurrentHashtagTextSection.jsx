import { useDispatch, useSelector } from 'react-redux';
import {
  AddressText,
  CurrentHashtagTextContainer,
  ExitIconContainer,
  PlainText,
  PlainTextExitIconContainer
} from './MainPageCurrentHashtagTextSection.style';
import { ViewAllRegion } from '../../redux/slices/mapSlice';
import ExitIcon from '../common/Icon/ExitIcon/ExitIcon';

const MainPageRegionFilterTextSection = () => {
  const dispatch = useDispatch();

  const viewAll = useSelector((state) => {
    return state.map.viewAll;
  });

  const currentPositionAddress = useSelector((state) => {
    return state.map.address;
  });

  const handleClickExitRegionFilterIcon = () => {
    dispatch(ViewAllRegion());
  };

  return (
    <>
      <CurrentHashtagTextContainer>
        <AddressText>{viewAll ? '전체보기' : `${currentPositionAddress}`}</AddressText>
        <PlainTextExitIconContainer>
          <PlainText>{viewAll ? '' : `에서 검색 중`}</PlainText>
          <ExitIconContainer onClick={handleClickExitRegionFilterIcon}>
            {viewAll ? <></> : <ExitIcon size="20" />}
          </ExitIconContainer>
        </PlainTextExitIconContainer>
      </CurrentHashtagTextContainer>
    </>
  );
};

export default MainPageRegionFilterTextSection;
