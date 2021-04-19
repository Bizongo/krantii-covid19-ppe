import { Col, Row } from 'antd';

import BannerBackground from '../../images/BannerBackground.svg';
import { FlexBox } from '../SharedStyledComponents';
import { px2vw } from '../../helpers';
import styled from 'styled-components';

export const Text = styled.p`
  font-family: greycliffcf-bold;
  font-size: ${(props) => px2vw(props.mobileView ? '14px' : '20px')};
  line-height: ${(props) => px2vw(props.mobileView ? '18px' : '28px')};
  margin: ${(props) => px2vw('24px 0 ' + (props.mobileView ? '16px' : '32px'))};
`;

export const SubText = styled.p`
  font-family: greycliffcf-bold;
  font-size: ${(props) => px2vw(props.mobileView ? '14px' : '17px')};
  line-height: ${(props) => px2vw(props.mobileView ? '17px' : '20px')};
  img {
    cursor: pointer;
  }
`;

export const BannerFooter = styled.div`
  margin-top: ${px2vw('40px')};
  color: var(--dark-text);
  text-align: ${(props) => props.mobileView && 'center'};
  font-size: ${px2vw('12px')};
  line-height: ${px2vw('14px')};
`;

export const PartnerInfoContainer = styled(FlexBox)`
  margin-top: ${px2vw('32px')};
  align-items: center;
  justify-content: ${(props) => props.mobileView && 'space-evenly'};
`;

export const PartnerInfoWeb = styled.img`
  max-height: ${px2vw('50px')};
  max-width: ${px2vw('90px')};
  margin-right: ${px2vw('24px')};
`;

export const PartnerInfo = styled(Col)`
  img {
    max-height: ${px2vw('80px')};
    max-width: 100%;
  }
  :last-child {
    text-align: right;
  }
`;

export const PartnerInfoText = styled.div`
  margin-bottom: ${px2vw('16px')};
`;

export const PartnerImage = styled.img`
  height: ${(props) => px2vw(props.height)};
  width: ${(props) => props.width && px2vw(props.width)};
  margin-right: ${(props) => px2vw(props.marginRight || (props.mobileView ? 0 : '40px'))};
`;

export const ImageConatiner = styled(Col)`
  text-align: center;
`;

export const BannerImage = styled.img`
  max-width: 100%;
  width: ${px2vw('321.42px')};
`;

export const LinkImage = styled(FlexBox)`
  /* height: ${(props) => props.small && px2vw(props.mobileView ? '100px' : '72px')}; */
  padding: ${(props) =>
    props.small &&
    px2vw(
      (props.mobileView ? '24px ' : '8px ') + (props.mobileView ? '16px ' : '8px ') + (props.mobileView ? 0 : '8px')
    )};
  border-left: ${px2vw('1px')} solid var(--grey-5);
  padding-left: ${px2vw('20px')};
  align-items: center;
  justify-content: center;
  :first-child {
    border-left: none;
    padding-left: 0;
    padding-right: ${px2vw('20px')};
  }
  img {
    width: ${(props) => props.width && px2vw(props.width)};
    height: ${(props) => props.height && px2vw(props.height)};
  }
`;

export const SocialLinksContainer = styled.div`
  text-align: center;
`;

export const BannerContainer = styled(Row)`
  background: url(${BannerBackground});
  width: 100vw;
  margin-left: calc(-1 * var(--${(props) => (props.mobileView ? 'mobile' : 'web')}-margin)) !important;
  margin-right: calc(-1 * var(--${(props) => (props.mobileView ? 'mobile' : 'web')}-margin)) !important;
  padding: var(--${(props) => (props.mobileView ? 'mobile' : 'web')}-margin);
  padding-bottom: ${px2vw('64px')};
  padding-top: ${px2vw('32px')};
  .ant-col {
    padding: 0 !important;
  }
`;

export const BannerLogoContainer = styled(FlexBox)`
  justify-content: ${(props) => props.mobileView && 'center'};
`;
