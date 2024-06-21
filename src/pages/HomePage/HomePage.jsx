import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, getCurrentUser } from '../../apis/user.api';
import MainPageCardArrangeDropdown from '../../components/MainPageCardArrangeDropdown';
import MainPageCardListSection from '../../components/MainPageCardListSection';
import MainPageCurrentHashtagTextSection from '../../components/MainPageCurrentHashtagTextSection';
import { MainPageHashtagDropdownContainer } from '../../components/MainPageCurrentHashtagTextSection/MainPageCurrentHashtagTextSection.style';
import MainPageHashtagSelectionSection from '../../components/MainPageHashtagSelectionSection';
import MainPageSearchSection from '../../components/MainPageSearchSection';
import { fetchUserData } from '../../redux/slices/userSlice';

function HomePage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);

  useEffect(() => {
    (async () => {
      const userId = await getCurrentUser();
      if (userId) {
        const userData = await fetchUser(userId);
        dispatch(fetchUserData(userData));
      }
    })();
  }, [dispatch]);

  return (
    <>
      <MainPageSearchSection />
      <MainPageHashtagSelectionSection />
      <MainPageHashtagDropdownContainer>
        <MainPageCurrentHashtagTextSection />
        <MainPageCardArrangeDropdown />
      </MainPageHashtagDropdownContainer>
      <MainPageCardListSection />
    </>
  );
}

export default HomePage;
