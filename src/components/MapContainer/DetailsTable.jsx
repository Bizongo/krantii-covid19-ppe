import {
  CardTitle,
  Dropdown,
  DropdownText,
  GreenSpan,
  GreySpan,
  LeftToggleButton,
  NameSubText,
  ProductTagsContainer,
  ProductsCard,
  ProductsCardHeader,
  RightToggleButton,
  StyledCheckbox,
  StyledTable,
} from './MapContainerSC';
import React, { useEffect, useState } from 'react';
import { Select, Tag } from 'antd';

import ProductsList from './ProductsList.json';
import StatesList from './StatesList.json';
import moment from 'moment';

const { Option } = Select;
const DetailsTable = ({
  selectedState,
  setSelectedState,
  mobileView,
  setSelectedProducts,
  supplyData,
  selectedProducts,
  demandData,
  view,
  setView,
  filtersDisabled,
  hideUnverified,
  setHideUnverified,
  filteredList,
  supplyPriceRange,
  demandPriceRange,
  timeDiff,
  setTimeDiff,
  filtersLoading,
  productTags,
  supplyProducts,
  demandProducts,
}) => {
  const [tableHeight, setTableHeight] = useState(500);
  const [openProductsList, setOpenProductsList] = useState(false);

  useEffect(() => {
    updateTableHeight();
    window.addEventListener('resize', updateTableHeight);
    return () => window.removeEventListener('resize', updateTableHeight);
  }, []);

  const updateTableHeight = () => {
    // 500 = height of the table
    // 1440 = height of reference screen
    // 55 = height of the header
    setTableHeight((500 * window.innerWidth) / 1440);
  };

  let supplyColumns = [
    {
      title: 'Supplier Name',
      dataIndex: 'supplier',
      key: 'supplier',
      render: (cell, row) => (
        <div>
          <div>{cell}</div>
          {row.verified ? (
            <Tag color="success">Verified Medical Supplier</Tag>
          ) : (
            <Tag color="default">Unverified Medical Supplier</Tag>
          )}
        </div>
      ),
    },
    {
      title: 'Products Manufactured',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Supply Quantity',
      dataIndex: 'supply',
      key: 'supply',
      align: 'center',
      sorter: (a, b) => a.supply - b.supply,
    },
    {
      title: 'Price Range',
      dataIndex: 'price_rating',
      key: 'price_rating',
      align: 'center',
      sorter: (a, b) => a.price_rating - b.price_rating,
      render: (cell) => {
        if (cell === 0) {
          return null;
        } else {
          let counter = 0;
          const result = [];
          while (counter < 5) {
            result.push(
              counter < parseInt(cell) ? <GreenSpan key={counter}>₹</GreenSpan> : <GreySpan key={counter}>₹</GreySpan>
            );
            counter += 1;
          }

          return result;
        }
      },
    },
    {
      title: 'Action',
      dataIndex: 'email',
      key: 'email',
      align: 'center',
      render: (cell) =>
        cell && (
          <a href={`mailto:${cell}`} target="_blank" rel="noopener noreferrer">
            Connect With Supplier
          </a>
        ),
    },
  ];

  let demandColumns = [
    {
      title: 'Establishment Name',
      dataIndex: 'buyer',
      key: 'buyer',
      render: (cell, row) => (
        <div>
          <div>{cell}</div>
          {row.timestamp && (
            <NameSubText>Demand Raised on {moment(row.timestamp).format('D MMM YYYY, h:mm a')}</NameSubText>
          )}
        </div>
      ),
    },
    {
      title: 'Products Required',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Demand Quantity',
      dataIndex: 'demand',
      key: 'demand',
      sorter: (a, b) => a.demand - b.demand,
      align: 'center',
    },
    {
      title: 'Preferences',
      dataIndex: 'preferences',
      key: 'preferences',
      align: 'center',
    },
    {
      title: 'Action',
      dataIndex: 'email',
      key: 'email',
      align: 'center',
      render: (cell) =>
        cell && (
          <a href={`mailto:${cell}`} target="_blank" rel="noopener noreferrer">
            Connect With Buyer
          </a>
        ),
    },
  ];

  return (
    <ProductsCard>
      <ProductsCardHeader mobileView={mobileView}>
        <CardTitle>Demand Supply Data</CardTitle>
        <div>
          <Dropdown
            value={selectedState}
            onChange={setSelectedState}
            loading={filtersLoading}
            disabled={filtersLoading}
            mobileView={mobileView}
            width="236px"
            size="large"
          >
            <>
              <Option value="All India" key="All India">
                All India
              </Option>
              {StatesList.map((state) => (
                <Option value={state.key} key={state.key}>
                  {state.label}
                </Option>
              ))}
            </>
          </Dropdown>
        </div>
        <div>
          <Dropdown
            value={selectedProducts}
            onChange={setSelectedProducts}
            loading={filtersLoading}
            disabled={filtersLoading}
            placeholder="Select a product"
            mobileView={mobileView}
            mode="multiple"
            width="180px"
            size="large"
            onFocus={() => setOpenProductsList(true)}
            onBlur={() => setOpenProductsList(false)}
            open={openProductsList}
            tagRender={({ value }) =>
              value === selectedProducts[0] && (
                <DropdownText>
                  {`(${selectedProducts.length}) Product${selectedProducts.length > 1 ? 's' : ''} Selected`}
                </DropdownText>
              )
            }
          >
            {ProductsList.map((product) => (
              <Option
                value={product.key}
                key={product.key}
                className={
                  view === 'supply'
                    ? !supplyProducts.includes(product.key) && 'no-supply'
                    : !demandProducts.includes(product.key) && 'no-demand'
                }
              >
                {product.label}
              </Option>
            ))}
          </Dropdown>
        </div>
        {view === 'supply' ? (
          <div>
            <StyledCheckbox
              disabled={filtersDisabled}
              checked={hideUnverified}
              onChange={({ target: { checked } }) => setHideUnverified(checked)}
            >
              Verified Establishment
            </StyledCheckbox>
          </div>
        ) : (
          <div>
            <Dropdown
              value={timeDiff}
              onChange={setTimeDiff}
              loading={filtersLoading}
              disabled={filtersDisabled}
              mobileView={mobileView}
              placeholder="Requested on"
              width="236px"
              size="large"
            >
              <>
                <Option value={24}>Last 24 Hrs</Option>
                <Option value={48}>Last 48 Hrs</Option>
                <Option value={168}>Last 1 Week</Option>
                <Option value={720}>Last 1 Month</Option>
              </>
            </Dropdown>
          </div>
        )}
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
        {!mobileView && (
          <ProductTagsContainer>
            {selectedProducts.length > 0 && (
              <span>
                <label>Products Selected: </label>
                {productTags}
              </span>
            )}
          </ProductTagsContainer>
        )}
      </ProductsCardHeader>
      <StyledTable
        columns={view === 'supply' ? supplyColumns : demandColumns}
        dataSource={selectedProducts.length === 0 ? (view === 'supply' ? supplyData : demandData) : filteredList}
        pagination={false}
        loading={filtersLoading}
        scroll={{ y: tableHeight, x: 0 }}
      />
    </ProductsCard>
  );
};

export default DetailsTable;
