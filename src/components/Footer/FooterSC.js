import { px2vw } from '../../helpers';
import styled from 'styled-components';

export const FooterDiv = styled.div`
  background: #000;
  width: 100%;
  text-align: center;
  color: #fff;
  padding: ${px2vw('24px 0 32px')};
`;

export const FooterTitle = styled.div`
  font-weight: 800;
  font-size: ${px2vw('18px')};
  line-height: ${px2vw('25px')};
  text-transform: uppercase;
`;

export const FooterText = styled.div`
  font-size: ${px2vw('9px')};
  line-height: ${px2vw('12px')};
  color: var(--grey-6);
`;
