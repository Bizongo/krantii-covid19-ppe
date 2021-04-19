import { InfoContainer, InfoImage, LinkButton, LinkButtonContainer, StyledCard } from './InfoCardSC';

import React from 'react';

const InfoCard = ({ imageSrc, buttonLink, buttonText, mobileView }) => {
  return (
    <StyledCard>
      <InfoContainer mobileView={mobileView}>
        <InfoImage src={imageSrc} alt={buttonText} mobileView={mobileView} />
        {buttonLink && buttonText && (
          <LinkButtonContainer mobileView={mobileView}>
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
              <LinkButton size="large" mobileView={mobileView}>
                {buttonText}
              </LinkButton>
            </a>
          </LinkButtonContainer>
        )}
      </InfoContainer>
    </StyledCard>
  );
};

export default InfoCard;
