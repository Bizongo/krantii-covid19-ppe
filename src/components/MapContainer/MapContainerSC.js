import { Button, Card, Checkbox, Input, Modal, Radio, Select, Table, Tag } from 'antd';
import { ElevatedCard, FlexBox } from '../SharedStyledComponents';

import { px2vw } from '../../helpers';
import styled from 'styled-components';

export const SubSubTitle = styled.div`
  font-family: greycliffcf-demibold;
  font-weight: bold;
  font-size: ${px2vw('14px')};
  line-height: ${px2vw('17px')};
  color: var(--grey-8);
  margin-left: ${px2vw('16px')};
  text-align: center;
`;

export const ButtonContainer = styled.div`
  position: relative;
  top: ${px2vw('48px')};
  right: ${px2vw('24px')};
  z-index: 2;
`;

export const TotalCountCard = styled(ElevatedCard)`
  position: absolute;
  top: ${px2vw('56px')};
  right: ${px2vw('40px')};
  z-index: 2;
  width: ${px2vw('300px')};
  margin-left: auto;
  text-align: center;
  height: initial;
  button {
    width: 100%;
    font-size: ${px2vw('16px')};
    line-height: ${px2vw('24px')};
    min-height: ${px2vw('32px')};
    border-radius: ${px2vw('4px')};
  }
`;

export const LeftToggleButton = styled(Button)`
  border-radius: ${px2vw('6px 0 0 6px')};
  font-size: ${px2vw('16px')};
  line-height: ${px2vw('24px')};
  min-height: ${px2vw('32px')};
`;

export const RightToggleButton = styled(Button)`
  border-radius: ${px2vw('0 6px 6px 0')};
  font-size: ${px2vw('16px')};
  line-height: ${px2vw('24px')};
  min-height: ${px2vw('32px')};
`;

export const Dropdown = styled(Select)`
  width: ${(props) => (props.width ? px2vw(props.width) : '100%')};
  margin-right: ${px2vw('16px')};
  margin-bottom: ${(props) => props.mobileView && px2vw('8px')};
  :last-child {
    margin-bottom: 0;
    margin-right: 0;
  }
  min-height: ${px2vw('32px')};
  flex-grow: ${(props) => props.flexGrow && 1};
`;

export const MapWrapper = styled.div`
  margin-top: ${px2vw('24px')};
`;

export const FilterContainer = styled(Card)`
  .ant-card-body {
    display: ${(props) => !props.mobileView && 'flex'};
    justify-content: flex-start;
    flex-wrap: wrap;
    > div {
      margin-right: ${(props) => !props.mobileView && px2vw('24px')};
      margin-bottom: ${(props) => props.mobileView && px2vw('16px')};
      :last-child {
        margin-right: 0;
        margin-bottom: 0;
      }
    }
  }
  margin-top: ${px2vw('40px')};
  label {
    color: var(--grey-10);
    font-size: ${px2vw('12px')};
    line-height: ${px2vw('14px')};
    font-family: greycliffcf-bold;
  }
`;

export const Map = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: ${px2vw('500px')};
  z-index: 1;
  flex: 7;
  margin-top: ${px2vw('16px')};
  position: absolute;
  top: 0;
`;

export const MapDiv = styled(FlexBox)`
  height: ${px2vw('500px')};
  position: relative;
`;

export const PriceInputContainer = styled(FlexBox)`
  align-items: center;
`;

export const PriceInput = styled(Input)`
  width: ${px2vw('80px')};
  flex-grow: 1;
  .ant-input-group,
  input {
    font-size: ${px2vw('12px')};
    line-height: ${px2vw('16px')};
  }
`;

export const RadioGroup = styled(Radio.Group)`
  display: ${(props) => props.mobileView && 'flex'};
  label {
    color: var(--grey-8);
    font-family: greycliffcf-medium;
    flex-grow: 1;
  }
  .ant-radio-button-wrapper-disabled {
    color: var(--grey-15);
  }
`;

export const CheckboxContainer = styled.div`
  width: ${px2vw('162px')};
  /* margin-left: ${px2vw('16px')}; */
  label:not(:first-child) {
    font-family: greycliffcf-medium;
    font-size: ${px2vw('12px')};
    line-height: ${px2vw('24px')};
    color: var(--grey-8);
    margin-left: 0 !important;
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  font-family: greycliffcf-medium;
  font-size: ${px2vw('12px')};
  line-height: ${px2vw('24px')};
  color: var(--grey-8);
  margin-left: 0 !important;
`;

export const ProductsCard = styled(Card)`
  margin-top: ${px2vw('40px')};
`;

export const CardTitle = styled.h2`
  font-size: ${px2vw('24px')};
  line-height: ${px2vw('29px')};
  color: var(--grey-10);
  flex-grow: 1;
  margin-top: ${(props) => props.marginTop && px2vw(props.marginTop)};
`;

export const ProductsCardHeader = styled(FlexBox)`
  justify-content: ${(props) => (props.mobileView ? 'space-between' : 'flex-end')};
  align-items: center;
  flex-wrap: wrap;
  > div {
    margin-left: ${px2vw('24px')};
    margin-top: ${(props) => props.mobileView && px2vw('16px')};
  }
`;

export const GreenSpan = styled.span`
  color: var(--green-6);
`;

export const GreySpan = styled.span`
  color: var(--grey-11);
`;

export const StyledTable = styled(Table)`
  margin-top: ${(props) => px2vw(props.marginTop || props.marginTop === 0 ? props.marginTop : '64px')};
  th {
    border-bottom-width: 0 !important;
    background: transparent !important;
    font-size: ${(props) => px2vw(props.mobileView ? '12px' : '16px')};
    line-height: ${(props) => px2vw(props.mobileView ? '14px' : '19px')};
    color: var(--grey-8) !important;
    padding: ${(props) => props.mobileView && px2vw('0 8px')} !important;
    :first-child {
      padding-left: 0 !important;
    }
    :last-child {
      padding-right: 0 !important;
    }
  }
  td {
    font-family: greycliffcf-bold;
    font-size: ${(props) => px2vw(props.mobileView ? '12px' : '16px')};
    line-height: ${(props) => px2vw(props.mobileView ? '16px' : '24px')};
    padding: ${(props) => props.mobileView && px2vw('16px 8px')} !important;
    :first-child {
      padding-left: 0 !important;
    }
    :last-child {
      padding-right: 0 !important;
    }
  }
`;

export const MapTitle = styled(FlexBox)`
  justify-content: flex-end;
  align-items: center;
  h2 {
    flex-grow: 1;
    font-family: greycliffcf-bold;
    font-size: ${px2vw('24px')};
    line-height: ${px2vw('29px')};
    color: var(--grey-10);
  }
`;

export const FilterIcon = styled.div`
  flex-grow: 1;
  text-align: right;
  .ant-scroll-number-only-unit {
    color: #fff;
  }
`;

export const TotalCardTitle = styled.p`
  font-size: ${px2vw('16px')};
  line-height: ${px2vw('19px')};
  margin-bottom: ${px2vw('8px')};
`;

export const Counter = styled.p`
  font-size: ${px2vw('41px')};
  line-height: ${px2vw('58px')};
  color: var(--darkblue-5);
  margin-bottom: ${px2vw('16px')};
`;

export const NameSubText = styled.div`
  font-size: ${px2vw('12px')};
  line-height: ${px2vw('14px')};
  color: var(--grey-8);
`;

export const MobileModal = styled(Modal)`
  min-width: 100vw;
  top: 0;
  margin: 0;
  .ant-modal-header {
    box-shadow: var(--mobile-elevation-1);
  }
  .ant-modal-title {
    font-size: ${px2vw('20px')};
    line-height: ${px2vw('24px')};
    font-family: greycliffcf-bold;
  }
  .ant-modal-body {
    > div {
      margin-top: ${px2vw('32px')};
      :first-child {
        margin-top: 0;
      }
    }
  }
  label {
    color: var(--grey-10);
    font-size: ${px2vw('14px')};
    line-height: ${px2vw('17px')};
    font-family: greycliffcf-bold;
  }
`;

export const MobileTitle = styled.h2`
  font-size: ${px2vw('17px')};
  line-height: ${px2vw('20px')};
  margin-top: ${(props) => props.marginTop && px2vw(props.marginTop)};
  text-align: ${(props) => props.mobileView && 'center'};
`;

export const MapElevatedCard = styled(ElevatedCard)`
  padding: ${(props) => props.mobileView && 0};
`;

export const DetailsCardHeader = styled(FlexBox)`
  flex-wrap: wrap;
  > div {
    flex: 1;
  }
`;

export const EmailButton = styled(Button)`
  width: 100%;
`;

export const ProductTagsContainer = styled.div`
  width: 100%;
  flex-basis: 100%;
  margin-left: 0 !important;
  margin-top: ${px2vw('16px')};
  label {
    color: var(--grey-6);
  }
`;

export const DropdownText = styled.span`
  font-size: ${px2vw('14px')};
  line-height: ${px2vw('22px')};
`;

export const ProductTag = styled(Tag)`
  margin-bottom: ${px2vw('8px')};
`;
