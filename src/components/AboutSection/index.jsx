import Bizongo from '../../images/Logos/Bizongo.svg';
import Caruna from '../../images/Logos/Caruna.svg';
import GlobeStrat from '../../images/Logos/GlobeStrat.svg';
import Krantii from '../../images/Logos/Krantii.svg';
import { LogosContainer } from './AboutSectionSC';
import MapmyIndia from '../../images/Logos/MapmyIndia.svg';
import React from 'react';
import { Title } from '../SharedStyledComponents';

const content = [
  {
    image: Krantii,
    name: 'Krantii',
    imageWidthWeb: '205px',
    imageWidthMobile: '153.75px',
    url: false,
  },
  {
    image: Caruna,
    name: 'Caruna',
    imageWidthWeb: '273px',
    imageWidthMobile: '203.75px',
    url: false,
  },
  {
    image: Bizongo,
    name: 'Bizongo',
    imageWidthWeb: '84px',
    imageWidthMobile: '50.4px',
    url: 'https://bizongo.com',
  },
  {
    image: MapmyIndia,
    name: 'MapmyIndia',
    imageWidthWeb: '277px',
    imageWidthMobile: '166.2px',
    url: 'https://mapmyindia.com',
  },
  {
    image: GlobeStrat,
    name: 'Globe-Strat Solutions',
    imageWidthWeb: '140px',
    imageWidthMobile: '84',
    url: false,
  },
];

const AboutSection = ({ mobileView }) => {
  return (
    <>
      <Title mobileView={mobileView}>
        <span>About Us</span>
      </Title>
      <LogosContainer>
        {content.map((company) => (
          <a href={company.url} target="_blank" rel="noopener noreferrer" key={company.name}>
            <img
              src={company.image}
              alt={company.name}
              width={mobileView ? company.imageWidthMobile : company.imageWidthWeb}
            />
          </a>
        ))}
      </LogosContainer>
    </>
  );
};

export default AboutSection;
