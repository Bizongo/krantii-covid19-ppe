import { Card, Col } from 'antd';

import { px2vw } from '../../helpers';
import styled from 'styled-components';

export const SubTitle = styled.h5`
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

export const ServiceCardTitle = styled.h5`
  font-size: ${(props) => px2vw(props.mobileView ? '20px' : '24px')};
  line-height: ${(props) => px2vw(props.mobileView ? '24px' : '29px')};
  text-align: ${(props) => props.mobileView && 'center'};
`;

export const ImageContainer = styled(Col)`
  text-align: center;
  img {
    height: ${px2vw('192px')};
  }
`;

export const LinkButtonContainer = styled.div`
  text-align: ${(props) => (props.mobileView ? 'center' : 'left')};
`;

export const LiveTrackingContainer = styled(Col)`
  height: 100%;
`;

export const LiveTrackingCard = styled(Card)`
  border: none;
  text-align: center;
  border-right: ${(props) => (!props.mobileView ? px2vw('1px') : 0)} solid var(--grey-4);
  :last-child {
    border-right: none;
    margin-top: ${(props) => props.mobileView && px2vw('40px')};
  }
  .ant-card-body {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    button {
      font-size: ${px2vw('16px')};
      line-height: ${px2vw('24px')};
    }
  }
`;

export const LiveTrackingTitle = styled.div`
  font-family: greycliffcf-bold;
  font-size: ${px2vw('16px')};
  line-height: ${px2vw('24px')};
  flex-grow: 1;
`;

export const LiveTrackingCounter = styled.div`
  font-size: ${px2vw('68px')};
  line-height: ${px2vw('58px')};
  margin: ${px2vw('32px 0')};
  color: var(--darkblue-5);
`;
