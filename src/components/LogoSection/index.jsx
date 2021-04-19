import React from 'react';
import { SubTitle } from '../SharedStyledComponents';
import Bizongo from '../../images/Logos/Bizongo.svg';
import Caruna from '../../images/Logos/Caruna.svg';
import Krantii from '../../images/Logos/Krantii.svg';
import MapmyIndia from '../../images/Logos/MapmyIndia.svg';
import { Row } from 'antd';
import { LogoContainer, CompanyLogo } from './LogoSectionSC';

const LogoSection = ({ mobileView }) => {
  return (
    <>
      <SubTitle mobileView={mobileView}>Know more about us</SubTitle>
      <Row gutter={40} align="middle">
        <LogoContainer xs={12} sm={6}>
          {/* TODO: update url */}
          <a href="bizongo.com" target="_blank" rel="noopener noreferrer">
            <CompanyLogo mobileView={mobileView} src={Krantii} alt="Krantii" />
          </a>
        </LogoContainer>
        <LogoContainer xs={12} sm={6}>
          {/* TODO: update url */}
          <a href="bizongo.com" target="_blank" rel="noopener noreferrer">
            <CompanyLogo mobileView={mobileView} src={Caruna} alt="Caruna" />
          </a>
        </LogoContainer>
        <LogoContainer xs={12} sm={6}>
          <a href="https://bizongo.com" target="_blank" rel="noopener noreferrer">
            <CompanyLogo mobileView={mobileView} src={Bizongo} alt="Bizongo" />
          </a>
        </LogoContainer>
        <LogoContainer xs={12} sm={6}>
          {/* TODO: update url */}
          <a href="https://mapmyindia.com" target="_blank" rel="noopener noreferrer">
            <CompanyLogo mobileView={mobileView} src={MapmyIndia} alt="MapmyIndia" />
          </a>
        </LogoContainer>
      </Row>
    </>
  );
};

export default LogoSection;
