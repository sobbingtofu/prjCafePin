import { useDispatch, useSelector } from 'react-redux';
import { HashtagSelectionSection, HashtagSelectionItem } from './MainPageHashtagSelectionSection.style';
import { INITIAL_SWITCH_HASHTAG_ONOFF, SWITCH_HASHTAG_ONOFF } from '../../redux/slices/hashtagSlice';

const MainPageHashtagSelectionSection = () => {
  const dispatch = useDispatch();

  const isFirstClick = useSelector((state) => {
    return state.hashtag.firstHashtagClick;
  });

  const hashtagState = useSelector((state) => {
    return state.hashtag.hashtagStates;
  });

  const hashtags = Object.keys(hashtagState);

  const handleHashtagClick = (event) => {
    if (isFirstClick) {
      dispatch(INITIAL_SWITCH_HASHTAG_ONOFF(event.target.id));
    } else {
      dispatch(SWITCH_HASHTAG_ONOFF(event.target.id));
    }
  };
  return (
    <>
      <HashtagSelectionSection>
        {hashtags.map((hashtag) => (
          <HashtagSelectionItem key={hashtag} id={hashtag} $onOff={hashtagState[hashtag]} onClick={handleHashtagClick}>
            {hashtag}
          </HashtagSelectionItem>
        ))}
      </HashtagSelectionSection>
    </>
  );
};

export default MainPageHashtagSelectionSection;
