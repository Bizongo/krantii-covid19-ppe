import { ButtonContainer, InfoContainer, InfoImage, StyledCard } from './FormCardSC';

import React from 'react';

const FormCard = ({ imageSrc, buttonLink, buttonText, mobileView, maxHeight, boldButton }) => {
  return (
    <a href={buttonLink} target="_blank" rel="noopener noreferrer">
      <StyledCard maxHeight={!!maxHeight} mobileView={mobileView}>
        <InfoContainer>
          <InfoImage src={imageSrc} alt={buttonText} mobileView={mobileView} />
          <ButtonContainer mobileView={mobileView}>{buttonText}</ButtonContainer>
          {/* {buttonText && buttonLink && (
          <ButtonContainer>
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
              <LinkButton size="large" mobileView={mobileView} boldButton={boldButton}>
                {buttonText}
              </LinkButton>
            </a>
          </ButtonContainer>
        )} */}
        </InfoContainer>
      </StyledCard>
    </a>
  );
};

export default FormCard;
