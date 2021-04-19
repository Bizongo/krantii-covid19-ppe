import { Card } from 'antd';
import { px2vw } from '../../helpers';
import styled from 'styled-components';

export const Section = styled.div`
  margin-bottom: ${px2vw('110px')};
  margin-top: ${(props) => (props.marginTop || props.marginTop === 0) && px2vw(props.marginTop)};
  :first-child {
    margin-bottom: 0px;
  }
`;

export const Title = styled.h2`
  font-family: greycliffcf-bold;
  font-weight: 800;
  font-size: ${(props) => (props.mobileView ? px2vw('24px') : px2vw('32px'))};
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  border-bottom: ${(props) => !props.mobileView && px2vw('1px') + ' solid var(--grey-5)'};
  line-height: 1px;
  margin-bottom: ${(props) =>
    props.marginBottom || props.marginBottom === 0 ? px2vw(props.marginBottom) : px2vw('80px')};
  span {
    background: #fff;
    padding-left: ${px2vw('24px')};
    padding-right: ${px2vw('24px')};
  }
`;

export const SubTitle = styled.h3`
  font-weight: 500;
  font-size: ${(props) => (props.mobileView ? px2vw('20px') : px2vw('28px'))};
  line-height: ${(props) => (props.mobileView ? px2vw('24px') : px2vw('34px'))};
  text-transform: capitalize;
  margin-bottom: ${px2vw('40px')};
  text-align: ${(props) => (props.mobileView ? 'center' : 'left')};
  /* color: var(--grey-10); */
  font-family: greycliffcf-medium;
  font-style: normal;
`;

export const SpacingDiv = styled.div`
  height: ${(props) => px2vw(props.height) || px2vw('100px')};
  width: 100%;
`;

export const ElevatedCard = styled(Card)`
  box-shadow: ${(props) => (props.mobileView ? 'none' : px2vw('0px 4px 12px') + ' rgba(0, 0, 0, 0.15)')};
  border-radius: ${px2vw('4px')};
  margin-top: ${(props) => px2vw(props.marginTop) || 0};
  border: ${(props) => props.mobileView && 'none'};
  width: 100%;
  height: 100%;
  .ant-card-body {
    height: 100%;
    padding: ${(props) => props.mobileView && 0};
  }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
`;

export const VerticalDivider = styled.span`
  border-left: ${px2vw('1px')} solid var(--grey-7);
`;
