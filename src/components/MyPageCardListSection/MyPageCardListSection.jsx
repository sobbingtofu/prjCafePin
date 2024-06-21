import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../apis/supabase';
import CoffeeBean from '../common/Icon/CoffeeBean/CoffeeBean';
import GreyCoffeeBean from '../common/Icon/GreyCoffeeBean';
import Modal from 'react-modal';

import {
  ReviewsSection,
  ReviewsHeader,
  Reviews,
  Review,
  ReviewDetails,
  ReviewContent,
  ReviewRating,
  ReviewDate,
  Rating,
  NoReviewsMessage,
  EditButton,
  DeleteButton
} from './MyPageCardListSection.style';

import {
  CustomModal,
  ModalHeader,
  ModalContent,
  ModalActions,
  ModalButton,
  ModalInput,
  ModalTextArea,
  Container
} from './ModalStyles';

const MyPageCardListSection = ({ userId }) => {
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (userId) {
      fetchUserReviews();
    }
  }, [userId]);

  const fetchUserReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('id, cafe_name, content, rating, created_at')
        .eq('user_id', userId);

      if (error) {
        console.error('리뷰를 가져오는데에 실패했습니다:', error.message);
        return;
      }

      if (data) {
        setReviews(data);
      }
    } catch (error) {
      console.error('리뷰를 가져오는 중 오류가 발생했습니다:', error.message);
    }
  };

  const deleteReview = async (reviewId) => {
    try {
      const confirmDelete = window.confirm('이 리뷰를 삭제하시겠습니까?');

      if (!confirmDelete) {
        return;
      }

      const { error } = await supabase.from('reviews').delete().eq('id', reviewId);

      if (error) {
        console.error('리뷰를 삭제하는데 실패했습니다:', error.message);
        return;
      }

      setReviews(reviews.filter((review) => review.id !== reviewId));
    } catch (error) {
      console.error('리뷰를 삭제하는 중 오류가 발생했습니다:', error.message);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('ko-KR', options);
  };

  const handleReviewClick = (reviewId) => {
    navigate(`/post/${reviewId}`);
  };

  const handleEditReview = (review) => {
    setSelectedReview(review);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedReview(null);
  };

  const handleSaveChanges = async () => {
    try {
      if (!selectedReview) return;

      const { id, rating, content } = selectedReview;

      const { error } = await supabase.from('reviews').update({ rating, content }).eq('id', id);

      if (error) {
        console.error('리뷰를 수정하는데 실패했습니다:', error.message);
        return;
      }

      setReviews(reviews.map((review) => (review.id === id ? { ...review, rating, content } : review)));

      setModalOpen(false);
      setSelectedReview(null);
    } catch (error) {
      console.error('리뷰를 수정하는 중 오류가 발생했습니다:', error.message);
    }
  };

  return (
    <ReviewsSection>
      <ReviewsHeader>내가 작성한 리뷰</ReviewsHeader>
      {reviews.length > 0 ? (
        <Reviews>
          {reviews.map((review, index) => (
            <Review key={index}>
              <div
                onClick={() => handleReviewClick(review.id)}
                style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
              >
                <ReviewRating>
                  <Rating>
                    <ReviewDate>{formatDate(review.created_at)}</ReviewDate>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <CoffeeBean key={i} size={30} />
                    ))}
                    {Array.from({ length: 5 - review.rating }).map((_, i) => (
                      <GreyCoffeeBean key={i} size={30} />
                    ))}
                  </Rating>
                </ReviewRating>
                <ReviewDetails>
                  <div>{review.cafe_name}</div>
                </ReviewDetails>
                <ReviewContent>{review.content}</ReviewContent>
              </div>
              <EditButton onClick={() => handleEditReview(review)}>수정</EditButton>
              <DeleteButton onClick={() => deleteReview(review.id)}>삭제</DeleteButton>
            </Review>
          ))}
        </Reviews>
      ) : (
        <NoReviewsMessage>아직 내가 작성한 리뷰가 없습니다</NoReviewsMessage>
      )}

      {selectedReview && (
        <CustomModal isOpen={modalOpen} onRequestClose={handleCloseModal} contentLabel="리뷰 수정">
          <ModalHeader>리뷰 수정</ModalHeader>
          <ModalContent>
            <Container>
              <p>별점:</p>
              <ModalInput
                type="number"
                value={selectedReview.rating}
                onChange={(e) => setSelectedReview({ ...selectedReview, rating: parseInt(e.target.value) })}
              />
            </Container>
            <Container>
              <p>리뷰 내용:</p>
              <ModalTextArea
                value={selectedReview.content}
                onChange={(e) => setSelectedReview({ ...selectedReview, content: e.target.value })}
                rows={5}
              />
            </Container>
          </ModalContent>
          <ModalActions>
            <ModalButton onClick={handleSaveChanges}>저장</ModalButton>
            <ModalButton onClick={handleCloseModal}>취소</ModalButton>
          </ModalActions>
        </CustomModal>
      )}
    </ReviewsSection>
  );
};

export default MyPageCardListSection;
