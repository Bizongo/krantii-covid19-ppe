import { px2vw } from '../../helpers';
import styled from 'styled-components';

export const ContactContainer = styled.div`
  text-align: center;
  font-size: ${(props) => (props.mobileView ? px2vw('12px') : px2vw('18px'))};
  line-height: ${(props) => (props.mobileView ? px2vw('15px') : px2vw('22px'))};
`;

export const MailContainer = styled.a`
  /* margin-left: ${(props) => (props.mobileView ? '24px' : '80px')}; */
`;
