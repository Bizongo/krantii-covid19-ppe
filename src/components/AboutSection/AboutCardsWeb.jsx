import {
  AboutCardContainer,
  CompanyLogo,
  CompanyRow,
  ImageContainer,
  VericalAboutCardContainer,
  VerticalCompanyLogo,
} from './AboutSectionSC';

import { Col } from 'antd';
import { ElevatedCard } from '../SharedStyledComponents';
import React from 'react';

const AboutCardsWeb = ({ content }) => {
  return (
    <>
      <CompanyRow gutter={40}>
        {content.slice(0, 2).map((companyInfo) => (
          <Col sm={12} xs={24} key={companyInfo.name}>
            <ElevatedCard>
              <AboutCardContainer>
                <CompanyLogo src={companyInfo.image} alt={companyInfo.name} width={companyInfo.imageWidthWeb} />
                <div>{companyInfo.details}</div>
              </AboutCardContainer>
            </ElevatedCard>
          </Col>
        ))}
      </CompanyRow>
      <CompanyRow gutter={40}>
        {content.slice(2).map((companyInfo) => (
          <Col sm={8} xs={24} key={companyInfo.name}>
            <ElevatedCard>
              <VericalAboutCardContainer>
                <ImageContainer>
                  <VerticalCompanyLogo
                    src={companyInfo.image}
                    alt={companyInfo.name}
                    height={companyInfo.imageHeightWeb}
                  />
                </ImageContainer>
                <div>{companyInfo.details}</div>
              </VericalAboutCardContainer>
            </ElevatedCard>
          </Col>
        ))}
      </CompanyRow>
    </>
  );
};

export default AboutCardsWeb;
