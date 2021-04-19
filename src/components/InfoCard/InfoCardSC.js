import { Button, Card } from 'antd';

import { px2vw } from '../../helpers';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
  background-color: var(--blue-1);
  text-align: center;
  box-shadow: var(--${(props) => (props.mobileView ? 'mobile' : 'web')}-elevation-2);
  border-radius: ${px2vw('6px')};
  display: flex;
  flex-direction: ${(props) => (props.mobileView ? 'row' : 'column')};
  .ant-card-body {
    height: 100%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  /* flex-direction: ${(props) => (props.mobileView ? 'row' : 'column')}; */
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const InfoImage = styled.img`
  width: ${(props) => px2vw(props.mobileView ? '80px' : '232px')};
  height: ${(props) => px2vw(props.mobileView ? '72px' : '129.57px')};
`;

export const LinkButtonContainer = styled.div`
  flex-grow: 1;
  padding-left: ${(props) => px2vw(props.mobileView ? '24px' : '0')};
`;

export const LinkButton = styled(Button)`
  border: ${px2vw('1px')} solid #fff;
  color: #fff;
  background-color: transparent;
  margin-top: ${px2vw('16px')};
  width: ${(props) => (props.mobileView ? '100%' : 'initial')};
`;
