import { FlexBox } from '../SharedStyledComponents';
import { Row } from 'antd';
import { px2vw } from '../../helpers';
import styled from 'styled-components';

export const SubSubTitle = styled.h5`
  font-weight: 500;
  font-size: ${(props) => px2vw(props.mobileView ? '14px' : '20px')};
  line-height: ${(props) => px2vw(props.mobileView ? '17px' : '24px')};
  margin: 0;
  text-align: ${(props) => (props.mobileView ? 'left' : 'center')};
`;

export const AboutCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${px2vw('14px')};
  line-height: ${px2vw('17px')};
  height: 100%;
`;

export const VericalAboutCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${px2vw('14px')};
  line-height: ${px2vw('17px')};
`;

export const CompanyLogo = styled.img`
  margin-left: ${(props) => px2vw(props.mobileView ? '20px' : '0')};
  margin-right: ${(props) => px2vw(props.mobileView ? '20px' : '20px')};
  align-self: ${(props) => props.mobileView && 'flex-start'};
  height: ${(props) => props.height && px2vw(props.height)};
  width: ${(props) => props.width && px2vw(props.width)};
  margin-top: auto;
  margin-bottom: auto;
`;

export const VerticalCompanyLogo = styled.img`
  height: ${px2vw('120px')};
  margin-bottom: ${px2vw('32px')};
  height: ${(props) => props.height && px2vw(props.height)};
`;

export const ImageContainer = styled(FlexBox)`
  justify-content: center;
  align-items: center;
  height: ${(props) => !props.mobileView && px2vw('192px')};
  min-width: ${(props) => props.mobileView && px2vw('120px')};
  margin-right: ${(props) => props.mobileView && px2vw('16px')};
`;

export const CompanyRow = styled(Row)`
  margin-top: ${px2vw('40px')};
`;

export const CompanyLogoMobile = styled.img`
  align-self: ${(props) => props.mobileView && 'flex-start'};
  height: ${(props) => props.height && px2vw(props.height)};
`;

export const LogosContainer = styled(FlexBox)`
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  img {
    height: ${(props) => props.height && px2vw(props.height)};
    width: ${(props) => props.width && px2vw(props.width)};
    margin: ${px2vw('20px 0')};
  }
`;
