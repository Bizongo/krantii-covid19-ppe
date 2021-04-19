import { AboutCardContainer, CompanyLogoMobile, ImageContainer } from './AboutSectionSC';
import { Col, Row } from 'antd';

import { ElevatedCard } from '../SharedStyledComponents';
import React from 'react';

const AboutCardsMobile = ({ content }) => {
  return (
    <>
      <Row gutter={40}>
        {content.map((companyInfo) => (
          <Col sm={12} xs={24} key={companyInfo.name}>
            <ElevatedCard marginTop="40px" mobileView>
              <AboutCardContainer>
                <ImageContainer mobileView>
                  <CompanyLogoMobile
                    src={companyInfo.image}
                    alt={companyInfo.name}
                    height={companyInfo.imageHeightMobile}
                    mobileView
                  />
                </ImageContainer>
                <div>{companyInfo.details}</div>
              </AboutCardContainer>
            </ElevatedCard>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AboutCardsMobile;
