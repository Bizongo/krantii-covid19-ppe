import { ContactContainer, MailContainer } from './ContactUs';

import Mail from '../../images/Icons/Mail.svg';
// import Phone from '../../images/Icons/Phone.svg';
import React from 'react';
import { Title } from '../SharedStyledComponents';

// const phoneNumer = '+91 8888888888';
const email = 'krantii4action@rediffmail.com';

const ContactUs = ({ mobileView }) => {
  return (
    <>
      <Title mobileView={mobileView}>
        <span>Contact Us</span>
      </Title>
      <ContactContainer>
        {/* <a href={`tel:${phoneNumer}`}>
          <img src={Phone} alt="Call: " /> {phoneNumer}
        </a> */}
        <MailContainer mobileView={mobileView} href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
          <img src={Mail} alt="E-mail: " /> {email}
        </MailContainer>
      </ContactContainer>
    </>
  );
};

export default ContactUs;
