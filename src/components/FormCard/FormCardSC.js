import { Button, Card } from 'antd';

import { px2vw } from '../../helpers';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  width: 100%;
  height: ${(props) => props.maxHeight && '100%'};
  background-color: var(--blue-1);
  text-align: center;
  box-shadow: var(--${(props) => (props.mobileView ? 'mobile' : 'web')}-elevation-2);
  border-radius: ${px2vw('6px')};
  .ant-card-body {
    width: 100%;
    height: 100%;
  }
`;

export const InfoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoImage = styled.img`
  width: ${(props) => props.mobileView && px2vw('80px')};
  height: ${(props) => px2vw(props.mobileView ? '72px' : '100px')};
  margin-right: ${(props) => px2vw(props.mobileView ? '16px' : '32px')};
`;

export const ButtonContainer = styled.div`
  font-family: greycliffcf-demibold;
  font-size: ${(props) => px2vw(props.mobileView ? '16px' : '24px')};
  line-height: ${(props) => px2vw(props.mobileView ? '20px' : '30px')};
  text-align: center;
  color: #fff;
`;

export const LinkButton = styled(Button)`
  border: ${px2vw('1px')} solid #fff;
  color: #fff;
  background-color: transparent;
  font-weight: ${(props) => props.boldButton && 'bolder'};
`;
