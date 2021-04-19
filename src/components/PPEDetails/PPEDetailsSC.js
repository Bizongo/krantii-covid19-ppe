import { Col } from 'antd';
import { px2vw } from '../../helpers';
import styled from 'styled-components';

export const SubSubTitle = styled.h5`
  font-weight: bold;
  font-size: ${(props) => px2vw(props.mobileView ? '14px' : '20px')};
  line-height: ${(props) => px2vw(props.mobileView ? '17px' : '24px')};
`;

export const Text = styled.p`
  font-size: ${(props) => px2vw(props.mobileView ? '14px' : '20px')};
  line-height: ${(props) => px2vw(props.mobileView ? '17px' : '24px')};
  margin-top: ${(props) => px2vw(props.mobileView ? '17px' : '24px')};
  margin-bottom: ${(props) => px2vw(props.mobileView ? '17px' : '24px')};
`;

export const LogisticsTitle = styled.h5`
  font-size: ${(props) => px2vw(props.mobileView ? '20px' : '24px')};
  line-height: ${(props) => px2vw(props.mobileView ? '24px' : '29px')};
  text-align: ${(props) => props.mobileView && 'center'};
`;

export const LogisticsImageContainer = styled(Col)`
  text-align: center;
`;

export const LinkButtonContainer = styled.div`
  text-align: ${(props) => (props.mobileView ? 'center' : 'left')};
`;
