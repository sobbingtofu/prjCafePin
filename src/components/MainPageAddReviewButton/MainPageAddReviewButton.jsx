import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddReviewButton } from './MainPageAddReviewButton.style';

const MainPageAddReviewButton = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);

  const handleReviewCreate = () => {
    if (userData.id) {
      navigate('/select-cafe');
    } else {
      alert('로그인이 필요한 작업입니다.');
      navigate('/auth/login');
    }
  };

  return <AddReviewButton onClick={handleReviewCreate}>{`+ 리뷰 작성`}</AddReviewButton>;
};

export default MainPageAddReviewButton;
