import { Col, Row } from 'antd';
import { SubSubTitle, Text } from './PPEDetailsSC';
import { SubTitle, Title } from '../SharedStyledComponents';

import InfoCard from '../InfoCard';
import PPE from '../../images/PPE.svg';
import React from 'react';

const PPEDetails = ({ mobileView }) => {
  return (
    <>
      <Title mobileView={mobileView}>
        <span>Resources</span>
      </Title>
      <Row gutter={40}>
        <Col xs={24} sm={16}>
          <SubTitle mobileView={mobileView}>Know your PPE</SubTitle>
          <SubSubTitle mobileView={mobileView}>
            Personal Protective Equipment or PPEs are protective gears designed to safeguard the health of workers by
            minimizing the exposure to a biological agent.
          </SubSubTitle>
          <Text mobileView={mobileView}>
            PPEs, Masks and consumables need to be replenished for all Frontline Responders such as Health Care workers
            in the ICU as well as for other services that would include, health care staff; security forces; sanitation;
            administration; technical support etc. who operate in high risk zones.
          </Text>
        </Col>
        {!mobileView && (
          <Col xs={24} sm={8}>
            {/* TODO: update url */}
            <InfoCard
              imageSrc={PPE}
              // buttonText="Know More About PPE"
              // buttonLink="https://forms.gle/Jfh4wasUthuYgw5y8"
              mobileView={mobileView}
              marginTop="40px"
            />
          </Col>
        )}
      </Row>
    </>
  );
};

export default PPEDetails;
