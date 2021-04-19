import { Col } from 'antd';
import { px2vw } from '../../helpers';
import styled from 'styled-components';

export const LogoContainer = styled(Col)`
  text-align: center;
  :last-child {
    padding-right: ${px2vw('80px')} !important;
  }
`;

export const CompanyLogo = styled.img`
  max-width: calc(50vw - ${px2vw('40px')});
  margin-bottom: ${(props) => props.mobileView && px2vw('16px')};
`;
