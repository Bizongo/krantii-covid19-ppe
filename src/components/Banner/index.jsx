import {
  BannerContainer,
  BannerFooter,
  BannerImage,
  BannerLogoContainer,
  ImageConatiner,
  LinkImage,
  PartnerImage,
  PartnerInfoContainer,
  Text,
} from './BannerSC';

import BannerImageSvg from '../../images/Banner_v3.svg';
import Bizongo from '../../images/Logos/Bizongo.svg';
import Caruna from '../../images/Logos/Caruna.svg';
import { Col } from 'antd';
// import Twitter from '../../images/Logos/Twitter.svg';
// import Facebook from '../../images/Logos/Facebook.svg';
import GlobeStrat from '../../images/Logos/GlobeStrat.svg';
import Krantii from '../../images/Logos/Krantii.svg';
// import Linkedin from '../../images/Logos/Linkedin.svg';
import MapmyIndia from '../../images/Logos/MapmyIndia.svg';
import React from 'react';

const Banner = ({ mobileView, scrollToContent }) => {
  return (
    <BannerContainer gutter={16} mobileView={mobileView} align="middle">
      <Col sm={12} mobileView={mobileView}>
        <BannerLogoContainer mobileView={mobileView}>
          <LinkImage mobileView={mobileView} height={mobileView ? '52' : '104px'}>
            <img src={Krantii} alt="Krantii" />
          </LinkImage>
          <div />
          <LinkImage mobileView={mobileView} height={mobileView ? '45' : '90px'}>
            <img src={Caruna} alt="Caruna" />
          </LinkImage>
        </BannerLogoContainer>
        {/* <LinksCard mobileView={mobileView}>
            <LinkImage src={Krantii} alt="Krantii" />
            <VerticalDivider />
            <LinkImage src={Caruna} alt="Caruna" />
            {!mobileView && (
                <>
                  <LinkImage src={Twitter} alt="Twitter" small />
                  <LinkImage src={Linkedin} alt="Linkedin" small />
                  <LinkImage src={Facebook} alt="Facebook" small />
                </>
              )}
            {mobileView && (
              <SocialLinksContainer>
                <LinkImage src={Twitter} alt="Twitter" small mobileView />
                <LinkImage src={Linkedin} alt="Linkedin" small mobileView />
                <LinkImage src={Facebook} alt="Facebook" small mobileView />
              </SocialLinksContainer>
            )}
          </LinksCard> */}

        <Text>
          A joint initiative by KRANTII and CARUNA to connect the COVID-19 warriors and enablers in India’s fight to
          save humanity.
          {/* <br />
          <br /> */}
        </Text>
        {/* <SubText mobileView={mobileView}>
          Are you looking for customers to sell your medical products?{' '}
          <img src={Play} alt="" onClick={scrollToContent} />
        </SubText>
        <SubText mobileView={mobileView}>
          Are you looking for suppliers to buy needful medical products?{' '}
          <img src={Play} alt="" onClick={scrollToContent} />
        </SubText> */}
        <BannerFooter mobileView={mobileView}>
          Powered By
          <PartnerInfoContainer mobileView={mobileView}>
            <a href="https://bizongo.com" target="_blank" rel="noopener noreferrer">
              <PartnerImage alt="Bizongo" src={Bizongo} height={mobileView ? '60px' : '45px'} mobileView={mobileView} />
            </a>
            {/* TODO: update url */}
            <a href="https://mapmyindia.com" target="_blank" rel="noopener noreferrer">
              <PartnerImage
                alt="MapmyIndia"
                src={MapmyIndia}
                height={mobileView ? '32px' : '24px'}
                mobileView={mobileView}
              />
            </a>
            {/* TODO: update url */}
            {/* <a href="https://mapmyindia.com" target="_blank" rel="noopener noreferrer"> */}
            <PartnerImage
              alt="Globe-Strat Solutions"
              src={GlobeStrat}
              height={mobileView ? '60px' : '45px'}
              mobileView={mobileView}
            />
            {/* </a> */}
          </PartnerInfoContainer>
        </BannerFooter>
      </Col>
      {!mobileView && (
        <ImageConatiner sm={12}>
          <BannerImage src={BannerImageSvg} alt="" />
        </ImageConatiner>
      )}
    </BannerContainer>
  );
};

export default Banner;
