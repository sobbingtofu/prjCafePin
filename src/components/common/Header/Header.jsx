import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../../apis/user.api';
import SelectBox from '../../SelectBox/SelectBox';
import CoffeeBean from '../Icon/CoffeeBean';
import ProfilePerson from '../Icon/ProfilePerson';
import { Logo, ProfileDiv, ProfileImg, User, Wrapper } from './Header.style';
import Nav from './Nav';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user.userData);

  const { data: userData, isPending } = useQuery({
    queryKey: ['user', user.id],
    queryFn: () => {
      if (user.id) {
        return fetchUser(user.id);
      }
    }
  });

  const handleProfileClick = () => {
    setIsOpen(!isOpen);
  };

  if (isPending) return <Nav />;

  return (
    <Wrapper>
      <Logo>
        <Link>
          <CoffeeBean size={50} />
          <p className="logo-text">Cafe Pin</p>
        </Link>
      </Logo>
      {user.id ? (
        <User>
          <p className="user-name"> {userData.nickname}님</p>
          {userData.profile_url ? (
            <ProfileImg src={userData.profile_url} className="user-img" onClick={handleProfileClick}></ProfileImg>
          ) : (
            <ProfileDiv onClick={handleProfileClick}>
              <ProfilePerson />
            </ProfileDiv>
          )}
        </User>
      ) : (
        <User>
          <p className="user-name">Guest 님</p>
          <ProfileDiv onClick={handleProfileClick}>
            <ProfilePerson />
          </ProfileDiv>
        </User>
      )}

      {isOpen && <SelectBox />}
    </Wrapper>
  );
}

export default Header;
