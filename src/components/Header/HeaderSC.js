import { px2vw } from '../../helpers';
import styled from 'styled-components';

export const HeaderDiv = styled.div`
  width: 100%;
  box-shadow: var(--${(props) => (props.mobileView ? 'mobile' : 'web')}-elevation-1);
  background-color: #ffffff;
  height: ${px2vw('64px')};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${px2vw('8px')} var(--${(props) => (props.mobileView ? 'mobile' : 'web')}-margin);
  position: sticky;
  top: 0;
  z-index: 1051;
`;

export const Flag = styled.img`
  width: ${px2vw('42px')};
  margin-right: ${px2vw('8px')};
`;

export const HeaderTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => px2vw(props.mobileView ? '16px' : '18px')};
  line-height: ${(props) => px2vw(props.mobileView ? '22px' : '25px')};
  text-transform: uppercase;
  color: var(--grey-10);
  margin-bottom: 0;
  margin-top: ${px2vw('4px')};
`;

export const HeaderSubTitle = styled.p`
  font-size: ${px2vw('9px')};
  line-height: ${px2vw('12px')};
  color: var(--grey-10);
`;

export const Link = styled.div`
  font-weight: 500;
  font-size: ${px2vw('16px')};
  line-height: ${px2vw('19px')};
  color: var(--grey-10);
  margin: 0 ${px2vw('16px')};
  padding: 0 ${px2vw('8px')};
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  cursor: pointer;
`;
