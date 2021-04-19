import { Flag, HeaderDiv, HeaderSubTitle, HeaderTitle, Link, LogoContainer } from './HeaderSC';

import IndianFlag from '../../images/IndianFlag.svg';
import React from 'react';
// import User from '../../images/Icons/User.svg';
import { VerticalDivider } from '../SharedStyledComponents';

// import React, { useContext } from 'react';

// import { store } from '../../stores';

const Header = ({ scrollTo, mobileView }) => {
  // const {
  //   state: {
  //     user: { userName, isLoggedIn },
  //   },
  //   dispatch,
  // } = useContext(store);

  // const handleLogin = () => {
  //   dispatch({ type: 'USER_LOGGED_IN', payload: { userName: 'Smaran', isLoggedIn: true } });
  // };

  return (
    <HeaderDiv mobileView={mobileView}>
      <LogoContainer onClick={() => scrollTo('top')}>
        <Flag src={IndianFlag} alt="" />
        <div>
          <HeaderTitle mobileView={mobileView}>
            KRANTII <VerticalDivider />
            &nbsp;CARUNA
          </HeaderTitle>
          <HeaderSubTitle>Unite to fight COVID-19</HeaderSubTitle>
        </div>
      </LogoContainer>
      {!mobileView && (
        <>
          <Link onClick={() => scrollTo('services')}>Services</Link>
          <Link onClick={() => scrollTo('aboutUs')}>About Us</Link>
          <Link onClick={() => scrollTo('contactUs')}>Contact Us</Link>
          {/* <Link onClick={handleLogin}>{isLoggedIn ? `Hi ${userName}` : 'Sign In'}</Link>
          <Link>
            <img src={User} alt="" />
          </Link> */}
        </>
      )}
    </HeaderDiv>
  );
};

export default Header;
