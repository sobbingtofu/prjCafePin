import { useQuery } from '@tanstack/react-query';
import CoffeeBean from '../common/Icon/CoffeeBean/CoffeeBean';
import {
  CardHashtagItem,
  CardHashtagSection,
  CardReviewText,
  CardTargetCafe,
  CardTargetCafeAddress,
  CardTopSection,
  ErrorDiv,
  LoadingDiv,
  MainPageCardContainer,
  MainPageCardItem,
  Rating,
  ReviewCreatedDate
} from './MainPageCardListSection.style';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchReviewsByLatest, fetchReviewsByOldest } from '../../apis/mainPage.api';
import GreyCoffeeBean from '../common/Icon/GreyCoffeeBean';

const MainPageCardListSection = () => {
  const HASHTAG_ARRAY = ['커피 맛집', '디저트 맛집', '분위기 좋은', '데이트 명소', '공부하기 좋은', '단체모임 가능'];

  const viewAll = useSelector((state) => {
    return state.map.viewAll;
  });

  const reviewsArrangeOption = useSelector((state) => {
    return state.arrangeOption.arrangeOption;
  });

  const idsOfCafesInMap = useSelector((state) => {
    return state.map.cafeList;
  });

  const hashtagObj = useSelector((state) => {
    return state.hashtag.hashtagStates;
  });

  const cafeSearchText = useSelector((state) => {
    return state.cafeSearchText.cafeSearchText;
  });

  const onlyTrueHashtagObj = {};

  Object.keys(hashtagObj).forEach((hashtag) => {
    if (hashtagObj[hashtag]) {
      onlyTrueHashtagObj[hashtag] = true;
    }
  });

  const {
    data: fetchedReviews,
    isPending,
    isError
  } = useQuery({
    queryKey:
      reviewsArrangeOption === 'latest'
        ? ['fetchReviewsByLatest', onlyTrueHashtagObj, idsOfCafesInMap, viewAll, cafeSearchText]
        : ['fetchReviewsByOldest', onlyTrueHashtagObj, idsOfCafesInMap, viewAll, cafeSearchText],
    queryFn:
      reviewsArrangeOption === 'latest'
        ? () => fetchReviewsByLatest(onlyTrueHashtagObj, idsOfCafesInMap, viewAll, cafeSearchText)
        : () => fetchReviewsByOldest(onlyTrueHashtagObj, idsOfCafesInMap, viewAll, cafeSearchText)
  });
  const navigate = useNavigate();

  if (isPending) {
    return <LoadingDiv>로딩 중...</LoadingDiv>;
  } else if (isError) {
    return <ErrorDiv>오류 발생</ErrorDiv>;
  } else {
    if (fetchedReviews.length === 0) {
      return <ErrorDiv></ErrorDiv>;
    } else {
      return (
        <MainPageCardContainer>
          {fetchedReviews.map((review) => {
            const createdAtDate = new Date(review.created_at);

            const year = createdAtDate.getFullYear(); // 년도
            const month = String(createdAtDate.getMonth() + 1).padStart(2, '0'); // 월 (0부터 시작하므로 +1)
            const day = String(createdAtDate.getDate()).padStart(2, '0'); // 일
            const hour = String(createdAtDate.getHours()).padStart(2, '0'); // 시
            const minute = String(createdAtDate.getMinutes()).padStart(2, '0'); // 분

            const formattedDate = `${year}-${month}-${day} ${hour}:${minute}`;

            const currentReviewItemHashtagObj = {
              '커피 맛집': false,
              '디저트 맛집': false,
              '분위기 좋은': false,
              '데이트 명소': false,
              '공부하기 좋은': false,
              '단체모임 가능': false,
              '해시태그 없음': true
            };

            HASHTAG_ARRAY.forEach((hashtag) => {
              if (review[hashtag]) {
                currentReviewItemHashtagObj[hashtag] = true;
                currentReviewItemHashtagObj['해시태그 없음'] = false;
              }
            });

            return (
              <MainPageCardItem
                key={review.id}
                onClick={() => {
                  navigate(`/post/${review.id}`);
                }}
              >
                <CardTopSection>
                  <CardTargetCafe>{review.cafe_name}</CardTargetCafe>
                  <CardTargetCafeAddress>{review.cafe_address}</CardTargetCafeAddress>
                  <ReviewCreatedDate>{formattedDate}</ReviewCreatedDate>
                  <Rating>
                    {Array.from({ length: 5 - review.rating }).map((unusedVar, i) => {
                      return (
                        <div key={i} id={i}>
                          <GreyCoffeeBean size={30} />
                        </div>
                      );
                    })}
                    {Array.from({ length: review.rating }).map((unusedVar, i) => {
                      return (
                        <div key={i} id={i}>
                          <CoffeeBean size={30} />
                        </div>
                      );
                    })}
                  </Rating>
                </CardTopSection>
                <CardHashtagSection>
                  {Object.entries(currentReviewItemHashtagObj).map(([hashtagKey, hashtagbool]) => {
                    if (hashtagbool == true) {
                      return (
                        <CardHashtagItem key={hashtagKey} $color={hashtagKey == '해시태그 없음' ? 'gray' : '#dbc5b1'}>
                          <p>{hashtagKey}</p>
                        </CardHashtagItem>
                      );
                    }
                  })}
                </CardHashtagSection>
                <CardReviewText>{review.content}.</CardReviewText>
              </MainPageCardItem>
            );
          })}
        </MainPageCardContainer>
      );
    }
  }
};

export default MainPageCardListSection;
