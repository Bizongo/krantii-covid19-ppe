import { Button, Col, Row } from 'antd';
import { ElevatedCard, FlexBox, Title } from '../SharedStyledComponents';
import {
  ImageContainer,
  LinkButtonContainer,
  LiveTrackingCard,
  LiveTrackingContainer,
  LiveTrackingCounter,
  LiveTrackingTitle,
  ServiceCardTitle,
  Text,
} from './FormsSectionSC';
import React, { useContext } from 'react';

import Donation from '../../images/Donation.svg';
import Logistics from '../../images/Logistics.svg';
import { store } from '../../stores';

const FormsSection = ({ mobileView }) => {
  const {
    state: { totalDemand, totalSupply },
  } = useContext(store);

  return (
    <>
      <Title mobileView={mobileView}>
        <span>Services</span>
      </Title>
      <Row>
        <ElevatedCard marginTop="40px" mobileView={mobileView}>
          <Row gutter={24} align="middle">
            <Col xs={24} sm={12}>
              <ServiceCardTitle mobileView={mobileView}>How We Help You Fight COVID19</ServiceCardTitle>
              <Text mobileView={mobileView}>
                This is a KRANTII and CARUNA joint initiative to connect the COVID-19 warriors and enablers in India’s
                fight to save humanity. We enable Demand and Supply meet across India.
                <br />
                <br />
                Join this initiative by registering a Demand or as a Supplier.
              </Text>
            </Col>
            <LiveTrackingContainer xs={24} sm={12}>
              <FlexBox direction={mobileView ? 'column' : 'row'}>
                <LiveTrackingCard mobileView={mobileView}>
                  <LiveTrackingTitle>LIVE MEDICAL SUPPLIES DEMANDS (ALL INDIA)</LiveTrackingTitle>
                  <LiveTrackingCounter>{totalDemand}</LiveTrackingCounter>
                  <a
                    href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSeMYEiXvMY8c0Dbr8CpO97mSil3hnPqNBVgvf6quajlBcznpw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button type="primary" size="large">
                      Register As Medical Supplier
                    </Button>
                  </a>
                </LiveTrackingCard>
                <LiveTrackingCard mobileView={mobileView}>
                  <LiveTrackingTitle>REGISTERED MEDICAL SUPPLIES SUPPLIERS (ALL INDIA)</LiveTrackingTitle>
                  <LiveTrackingCounter>{totalSupply}</LiveTrackingCounter>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScy1_2IUtCzCAdsenuEesTHYh1rKrEQOkDCITaJFzT5QjjHUg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button type="primary" size="large">
                      Demand For Medical Supplies
                    </Button>
                  </a>
                </LiveTrackingCard>
              </FlexBox>
            </LiveTrackingContainer>
          </Row>
        </ElevatedCard>
      </Row>
      <Row>
        <ElevatedCard marginTop="40px" mobileView={mobileView}>
          <Row gutter={40} align="middle">
            {!mobileView && (
              <ImageContainer xs={24} sm={12}>
                <img src={Logistics} alt="" />
              </ImageContainer>
            )}
            <Col xs={24} sm={12}>
              <ServiceCardTitle mobileView={mobileView}>
                Facing issues regarding logistics or raw materials?
              </ServiceCardTitle>
              <Text mobileView={mobileView}>
                Raise issues regarding{' '}
                <b>state permit, entry to red alert areas, lack of raw materials, safety of goods</b> and so on to us.
                Our team could help you resolve these genuine issues for you.
              </Text>
              <LinkButtonContainer mobileView={mobileView}>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfx75hcJmG9CM0NgWnxliXY4Xai1iZgmCOxwAHWcc1_nktSAA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button type="primary" size="large">
                    Report an Issue
                  </Button>
                </a>
              </LinkButtonContainer>
            </Col>
          </Row>
        </ElevatedCard>
      </Row>
      <Row>
        <ElevatedCard marginTop="40px" mobileView={mobileView}>
          <Row gutter={40} align="middle">
            <Col xs={24} sm={12}>
              <ServiceCardTitle mobileView={mobileView}>Willing To Make a Donation For The Cause?</ServiceCardTitle>
              <Text mobileView={mobileView}>
                Your donations will help out hundreds of families who cannot afford essential protective equipments.
                Even though you’re far away, you could help create change in someone’s life!
              </Text>
              <LinkButtonContainer mobileView={mobileView}>
                <Button type="primary" size="large">
                  Make a Donation
                </Button>
              </LinkButtonContainer>
            </Col>
            {!mobileView && (
              <ImageContainer xs={24} sm={12}>
                <img src={Donation} alt="" />
              </ImageContainer>
            )}
          </Row>
        </ElevatedCard>
      </Row>
    </>
  );
};

export default FormsSection;
