import React from 'react';
import { FooterDiv, FooterTitle, FooterText } from './FooterSC';
import { SpacingDiv } from '../SharedStyledComponents';
import FooterLogo from '../../images/Logos/FooterLogo.svg';

const Footer = (props) => {
  return (
    <>
      <FooterDiv>
        <FooterTitle>KRANTII CARUNA</FooterTitle>
        <FooterText>Unite to fight COVID-19</FooterText>
        <SpacingDiv height="12px" />
        <FooterText>Powered By</FooterText>
        <SpacingDiv height="12px" />
        <img src={FooterLogo} alt="Bizongo | MapmyIndia" />
      </FooterDiv>
    </>
  );
};

export default Footer;
