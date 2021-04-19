import {
  DetailsCardHeader,
  EmailButton,
  LeftToggleButton,
  MobileModal,
  MobileTitle,
  NameSubText,
  RightToggleButton,
  StyledTable,
} from './MapContainerSC';
import React, { useEffect, useState } from 'react';

import ExternalLink from '../../images/Icons/ExternalLink.svg';
import { FlexBox } from '../SharedStyledComponents';
import { Tag } from 'antd';
import moment from 'moment';

const DetailsTableMobile = ({
  supplyData,
  selectedProducts,
  demandData,
  view,
  setView,
  filteredList,
  filtersLoading,
  FilterToggle,
}) => {
  const [tableHeight, setTableHeight] = useState(400);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});

  useEffect(() => {
    updateTableHeight();
    window.addEventListener('resize', updateTableHeight);
    return () => window.removeEventListener('resize', updateTableHeight);
  }, []);

  const updateTableHeight = () => {
    // 500 = height of the table
    // 414 = height of reference screen
    setTableHeight((400 * window.innerWidth) / 414);
  };

  const supplierTag = (verified) => {
    return verified ? <Tag color="success">Verified Supplier</Tag> : <Tag color="default">Unverified Supplier</Tag>;
  };

  const timestamp = (timestamp) => {
    return <NameSubText>Demand Raised on {moment(timestamp).format('D MMM YYYY, h:mm a')}</NameSubText>;
  };

  const supplyColumns = [
    {
      title: 'Supplier Name',
      dataIndex: 'supplier',
      key: 'supplier',
      render: (cell, row) => (
        <div>
          <div>{cell}</div>
          {supplierTag(row.verified)}
        </div>
      ),
    },
    {
      title: 'Supply Quantity',
      dataIndex: 'supply',
      key: 'supply',
      align: 'center',
      sorter: (a, b) => a.supply - b.supply,
    },
    {
      title: null,
      dataIndex: 'modal',
      key: 'modal',
      width: '40px',
      align: 'right',
      render: (cell, row) => (
        <img
          src={ExternalLink}
          alt="Details"
          onClick={() => {
            setModalVisibility(true);
            setSelectedRow(row);
          }}
        />
      ),
    },
  ];

  const demandColumns = [
    {
      title: 'Establishment Name',
      dataIndex: 'buyer',
      key: 'buyer',
      render: (cell, row) => (
        <div>
          <div>{cell}</div>
          {row.timestamp && timestamp(row.timestamp)}
        </div>
      ),
    },
    {
      title: 'Demand Quantity',
      dataIndex: 'demand',
      key: 'demand',
      sorter: (a, b) => a.demand - b.demand,
      align: 'center',
    },
    {
      title: null,
      dataIndex: 'modal',
      key: 'modal',
      width: '40px',
      align: 'right',
      render: (cell, row) => (
        <img
          src={ExternalLink}
          alt="Details"
          onClick={() => {
            setModalVisibility(true);
            setSelectedRow(row);
          }}
        />
      ),
    },
  ];

  const productsColumn = [
    {
      title: 'Products',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Quantity',
      dataIndex: view === 'supply' ? 'supply' : 'demand',
      key: view === 'supply' ? 'supply' : 'demand',
      align: 'center',
    },
    {
      title: 'Price Per Unit',
      dataIndex: 'cost_per_unit',
      key: 'cost_per_unit',
      align: 'center',
      render: (cell) => cell && `₹ ${cell}`,
    },
  ];

  const supplierModalContent = (
    <>
      <DetailsCardHeader>
        <div>
          <h3>{selectedRow.supplier}</h3>
        </div>
        <div>{supplierTag(selectedRow.verified)}</div>
      </DetailsCardHeader>
      <StyledTable
        columns={productsColumn}
        dataSource={[{ product: selectedRow.product, supply: selectedRow.supply }]}
        pagination={false}
        mobileView
      />
      <a href={`mailto:${selectedRow.email}`} target="_blank" rel="noreferrer noopener">
        <EmailButton type={selectedRow.email ? 'primary' : 'default'} disabled={!selectedRow.email}>
          Connect With Buyer
        </EmailButton>
      </a>
    </>
  );

  const demandModalContent = (
    <>
      <DetailsCardHeader>
        <div>
          <h3>{selectedRow.buyer}</h3>
        </div>
        <div>{timestamp(selectedRow.timestamp)}</div>
      </DetailsCardHeader>
      <StyledTable
        columns={productsColumn}
        dataSource={[{ product: selectedRow.product, demand: selectedRow.demand }]}
        pagination={false}
        mobileView
      />
      <a href={`mailto:${selectedRow.email}`} target="_blank" rel="noreferrer noopener">
        <EmailButton type={selectedRow.email ? 'primary' : 'default'} disabled={!selectedRow.email}>
          Connect With Buyer
        </EmailButton>
      </a>
    </>
  );

  return (
    <>
      <MobileTitle marginTop="24px" mobileView>
        Demand Supply Data
      </MobileTitle>
      <FlexBox>
        <div>
          <LeftToggleButton
            type={view === 'demand' ? 'primary' : 'default'}
            onClick={() => setView('demand')}
            size="large"
          >
            Demand
          </LeftToggleButton>
          <RightToggleButton
            type={view === 'supply' ? 'primary' : 'default'}
            onClick={() => setView('supply')}
            size="large"
          >
            Supply
          </RightToggleButton>
        </div>
        {FilterToggle}
      </FlexBox>
      <MobileModal
        visible={modalVisibility}
        zIndex={1052}
        title={`${view === 'supply' ? 'Supplier' : 'Demand'} Details`}
        onCancel={() => setModalVisibility(false)}
        footer={null}
      >
        {view === 'supply' ? supplierModalContent : demandModalContent}
      </MobileModal>
      <StyledTable
        columns={view === 'supply' ? supplyColumns : demandColumns}
        dataSource={selectedProducts.length === 0 ? (view === 'supply' ? supplyData : demandData) : filteredList}
        pagination={false}
        loading={filtersLoading}
        scroll={{ y: tableHeight }}
        marginTop={0}
        mobileView
      />
    </>
  );
};

export default DetailsTableMobile;
