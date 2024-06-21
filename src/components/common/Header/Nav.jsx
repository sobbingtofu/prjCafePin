import React from 'react';
import { Link } from 'react-router-dom';
import CoffeeBean from '../Icon/CoffeeBean';
import ProfilePerson from '../Icon/ProfilePerson';
import { Logo, ProfileDiv, User, Wrapper } from './Header.style';

function Nav() {
  return (
    <Wrapper>
      <Logo>
        <Link>
          <CoffeeBean size={50} />
          <p className="logo-text">Cafe Pin</p>
        </Link>
      </Logo>
      <User>
        <p className="user-name">loading... 님</p>
        <ProfileDiv className="user-img">
          <ProfilePerson />
        </ProfileDiv>
      </User>
    </Wrapper>
  );
}

export default Nav;
