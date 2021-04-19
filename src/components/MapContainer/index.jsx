import { Badge, Button, Radio, Select, Spin } from 'antd';
import {
  CheckboxContainer,
  Counter,
  Dropdown,
  DropdownText,
  FilterContainer,
  FilterIcon,
  LeftToggleButton,
  Map,
  MapDiv,
  MapElevatedCard,
  MapTitle,
  MapWrapper,
  MobileModal,
  MobileTitle,
  PriceInput,
  PriceInputContainer,
  ProductTag,
  ProductTagsContainer,
  RadioGroup,
  RightToggleButton,
  StyledCheckbox,
  TotalCardTitle,
  TotalCountCard,
} from './MapContainerSC';
import React, { useContext, useEffect, useState } from 'react';

import DetailsTable from './DetailsTable';
import DetailsTableMobile from './DetailsTableMobile';
import Filter from '../../images/Icons/Filter.svg';
import { FlexBox } from '../SharedStyledComponents';
import ProductsList from './ProductsList.json';
import StatesList from './StatesList.json';
import { get } from '../../fetch';
import moment from 'moment';
import { store } from '../../stores';

const { Option } = Select;

var map;

const defaultRangeObject = {
  lowerLimit: null,
  upperLimit: null,
  minLowerLimit: 0,
  maxUpperLimit: 0,
};

const defaultFilterValues = {
  selectedState: 'All India',
  selectedProducts: [],
  hideUnverified: false,
  hideUncertified: false,
  costRange: defaultRangeObject,
  currentStockRange: defaultRangeObject,
};

const MapContainer = ({ mobileView }) => {
  const [supplyData, setSupplyData] = useState([]);
  const [demandData, setDemandData] = useState([]);
  const [demandLoading, setDemandLoading] = useState(true);
  const [supplyLoading, setSupplyLoading] = useState(true);
  const [supplyPriceRange, setSupplyPriceRange] = useState([]);
  const [demandPriceRange, setDemandPriceRange] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedState, setSelectedState] = useState('All India');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [markersArray, setMarkersArray] = useState([]);
  const [view, setView] = useState('supply');
  const [hideUnverified, setHideUnverified] = useState(false);
  const [hideUncertified, setHideUncertified] = useState(false);
  const [costRange, setCostRange] = useState(defaultRangeObject);
  const [currentStockRange, setCurrentStockRange] = useState(defaultRangeObject);
  const [timeDiff, setTimeDiff] = useState(undefined);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [demandProducts, setDemandProducts] = useState([]);
  const [supplyProducts, setSupplyProducts] = useState([]);
  const [openProductsList, setOpenProductsList] = useState(false);
  const { dispatch } = useContext(store);

  useEffect(() => resetFilters(), [view]);

  useEffect(() => {
    try {
      if (map === undefined) {
        // eslint-disable-next-line no-undef
        map = new MapmyIndia.Map('mapid', {
          zoomControl: false,
          hybrid: true,
          search: false,
          fullscreen: false,
          center: [23, 78.96],
        });
        window['map'] = map;

        const params = { map: map, expand: false, multiple: true };
        // eslint-disable-next-line no-undef
        new MapmyIndia.covidLayer(params);
        document.getElementById('corona_btn').innerHTML = 'Covid-19 Info layers';
      }
    } catch (e) {
      // console.log(e);
    }
    getSupplierData();
    getDemandData();
  }, []);

  useEffect(() => {
    const masterData = view === 'supply' ? supplyData : demandData;
    let costLowerLimit = null;
    let costUpperLimit = null;
    let stockLowerLimit = null;
    let stockUpperLimit = null;

    setFilteredList(
      masterData.filter((item) => {
        let select = true;

        const costPerUnit = parseFloat(item.cost_per_unit);
        const stock = parseFloat(view === 'supply' ? item.stock : item.demand);

        if (selectedState && selectedState !== 'All India') {
          select = item.state.toUpperCase() === selectedState.toUpperCase();
        }

        select = select && selectedProducts.length > 0 && selectedProducts.includes(item.product.toUpperCase());

        select = select && (!hideUnverified || item.verified === true);

        select = select && (!hideUncertified || item.certified === true);

        select =
          select &&
          (costRange.lowerLimit === null || costPerUnit >= costRange.lowerLimit) &&
          (costRange.upperLimit === null || costPerUnit <= costRange.upperLimit);

        select =
          select &&
          (currentStockRange.lowerLimit === null ||
            currentStockRange.upperLimit === null ||
            (!isNaN(stock) && stock >= currentStockRange.lowerLimit && stock <= currentStockRange.upperLimit));

        if (!isNaN(costPerUnit)) {
          costLowerLimit = Math.min(costLowerLimit, costPerUnit);
          costUpperLimit = Math.max(costUpperLimit, costPerUnit);
        }

        if (!isNaN(stock)) {
          stockLowerLimit = Math.min(stockLowerLimit, stock);
          stockUpperLimit = Math.max(stockUpperLimit, stock);
        }

        if (select && view === 'demand' && timeDiff) {
          select = item.timestamp ? moment().subtract(timeDiff, 'hour').isBefore(moment(item.timestamp)) : false;
        }

        return select;
      })
    );

    if (costRange.minLowerLimit !== costLowerLimit || costRange.maxUpperLimit !== costUpperLimit) {
      setCostRange({ ...costRange, minLowerLimit: costLowerLimit || 0, maxUpperLimit: costUpperLimit || 0 });
    }

    if (currentStockRange.minLowerLimit !== stockLowerLimit || currentStockRange.maxUpperLimit !== stockUpperLimit) {
      setCurrentStockRange({
        ...currentStockRange,
        minLowerLimit: stockLowerLimit || 0,
        maxUpperLimit: costUpperLimit || 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    demandData,
    supplyData,
    selectedState,
    selectedProducts,
    view,
    hideUnverified,
    hideUncertified,
    costRange.lowerLimit,
    costRange.upperLimit,
    currentStockRange.lowerLimit,
    currentStockRange.upperLimit,
    timeDiff,
  ]);

  useEffect(() => {
    if (map) {
      const stateDetails = StatesList.find((state) => state.key === selectedState);
      // Bounds for India
      let maxLat = 37.087766;
      let maxLong = 97.411443;
      let minLat = 10.827901;
      let minLong = 68.135701;
      if (stateDetails && stateDetails.minLat && stateDetails.minLong && stateDetails.maxLat && stateDetails.maxLong) {
        maxLat = stateDetails.maxLat;
        maxLong = stateDetails.maxLong;
        minLat = stateDetails.minLat;
        minLong = stateDetails.minLong;
      }
      // eslint-disable-next-line no-undef
      const northEast = L.latLng(maxLat, maxLong);
      // eslint-disable-next-line no-undef
      const southWest = L.latLng(minLat, minLong);
      // eslint-disable-next-line no-undef
      map.fitBounds(L.latLngBounds(northEast, southWest));
    }
  }, [selectedState]);

  useEffect(() => {
    markersArray.forEach((marker) => {
      // eslint-disable-next-line no-undef
      map.removeLayer(marker);
    });

    // eslint-disable-next-line no-undef
    const verifiedIcon = new L.Icon({
      iconUrl: 'https://covid19.krantii.in/VerifiedMarker.svg',
      iconAnchor: [20 / 2, 34],
      iconSize: [20, 34],
    });

    // eslint-disable-next-line no-undef
    const unverifiedIcon = new L.Icon({
      iconUrl: 'https://covid19.krantii.in/UnverifiedMarker.svg',
      iconAnchor: [20 / 2, 34],
      iconSize: [20, 34],
    });

    const markerArray = filteredList.map((item) => {
      // eslint-disable-next-line no-undef
      const position = new L.LatLng(item.latitude, item.longitude);
      // eslint-disable-next-line no-undef
      const marker = new L.Marker(position, {
        title: item.supplier,
        icon: item.verified || view === 'demand' ? verifiedIcon : unverifiedIcon,
      });
      // eslint-disable-next-line no-undef
      var popup = L.popup({ Width: 'auto', autoClose: false }).setContent(getPopupContent(item));
      marker.bindPopup(popup, { offset: [0, -18], className: 'semi-transparent-info' });
      return marker;
    });

    setMarkersArray(markerArray);
    markerArray.forEach((marker) => {
      map.addLayer(marker);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredList]);

  useEffect(() => dispatch({ type: 'TOTAL_SUPPLY_UPDATED', payload: supplyData.length }), [supplyData, dispatch]);
  useEffect(() => dispatch({ type: 'TOTAL_DEMAND_UPDATED', payload: demandData.length }), [demandData, dispatch]);

  const resetFilters = () => {
    setCostRange(defaultFilterValues.costRange);
    setCurrentStockRange(defaultFilterValues.currentStockRange);
    setSelectedState(defaultFilterValues.selectedState);
    setSelectedProducts(defaultFilterValues.selectedProducts);
    setHideUnverified(defaultFilterValues.hideUnverified);
    setHideUncertified(defaultFilterValues.hideUncertified);
  };

  const activeFilters = () => {
    let count = 0;

    if (selectedState !== defaultFilterValues.selectedState) {
      count += 1;
    }
    if (selectedProducts.length > 0) {
      if (
        costRange.lowerLimit !== defaultFilterValues.costRange.lowerLimit ||
        costRange.upperLimit !== defaultFilterValues.costRange.upperLimit
      ) {
        count += 1;
      }
      if (
        currentStockRange.lowerLimit !== defaultFilterValues.currentStockRange.lowerLimit ||
        currentStockRange.upperLimit !== defaultFilterValues.currentStockRange.upperLimit
      ) {
        count += 1;
      }
      if (selectedProducts !== defaultFilterValues.selectedProducts) {
        count += 1;
      }
      if (hideUnverified !== defaultFilterValues.hideUnverified) {
        count += 1;
      }
      if (hideUncertified !== defaultFilterValues.hideUncertified) {
        count += 1;
      }
    }

    return count;
  };

  const getSupplierData = () => {
    get('supplier-data').then((response) => {
      let productsPrice = [];
      const availableProducts = [];
      response.supplier_details.forEach((supplyDetails) => {
        const product = supplyDetails.product.toUpperCase();
        if (!availableProducts.includes(product)) {
          availableProducts.push(product);
        }
        if (productsPrice[product]) {
          productsPrice[product].max = Math.max(supplyDetails.cost_per_unit, productsPrice[product].max);
          productsPrice[product].min = Math.min(supplyDetails.cost_per_unit, productsPrice[product].min);
          productsPrice[product].step = (productsPrice[product].max - productsPrice[product].min) / 5 || 1;
        } else {
          productsPrice[product] = {
            max: supplyDetails.cost_per_unit,
            min: supplyDetails.cost_per_unit,
            step: 1,
          };
        }
      });
      setSupplyPriceRange(productsPrice);
      setSupplyData(
        response.supplier_details.map((supplyDetails) => {
          const product = supplyDetails.product.toUpperCase();
          let price_rating = 0;
          if (productsPrice[product]) {
            price_rating = Math.floor(
              (supplyDetails.cost_per_unit - productsPrice[product].min) / productsPrice[product].step
            );
            price_rating > 5 && console.log(product, price_rating, productsPrice[product], supplyDetails.supply);
          }
          return { ...supplyDetails, price_rating };
        })
      );
      setSupplyProducts(availableProducts);
      setSupplyLoading(false);
    });
  };

  const getDemandData = () => {
    get('demand-data').then((response) => {
      let productsPrice = [];
      const availableProducts = [];
      response.demand_details.forEach((demandDetails) => {
        const product = demandDetails.product.toUpperCase();
        if (!availableProducts.includes(product)) {
          availableProducts.push(product);
        }
        if (productsPrice[product]) {
          productsPrice[product].max = Math.max(demandDetails.cost_per_unit, productsPrice[product].max);
          productsPrice[product].min = Math.min(demandDetails.cost_per_unit, productsPrice[product].min);
          productsPrice[product].step = (productsPrice[product].max - productsPrice[product].min) / 5 || 1;
        } else {
          productsPrice[product] = {
            max: demandDetails.cost_per_unit,
            min: demandDetails.cost_per_unit,
            step: 1,
          };
        }
      });
      setDemandPriceRange(productsPrice);
      setDemandData(
        response.demand_details.map((demandDetails) => {
          const product = demandDetails.product.toUpperCase();
          let price_rating = 0;
          if (productsPrice[product]) {
            price_rating = Math.floor(
              (demandDetails.cost_per_unit - productsPrice[product].min) / productsPrice[product].step
            );
          }
          return { ...demandDetails, price_rating };
        })
      );
      setDemandProducts(availableProducts);
      setDemandLoading(false);
    });
  };

  const popProduct = (product) => {
    const index = selectedProducts.indexOf(product);
    if (index >= 0) {
      let newProductList = [...selectedProducts];
      newProductList.splice(index, 1);
      setSelectedProducts(newProductList);
    }
  };

  const productTags = selectedProducts.map((product) => (
    <ProductTag closable onClose={() => popProduct(product)} key={product}>
      {product}
    </ProductTag>
  ));

  const getPopupContent = ({
    supplier,
    buyer,
    name,
    mobile,
    supply,
    demand,
    email,
    address,
    pincode,
    gstn,
    cost_per_unit,
    lead_time,
    capacity,
  }) => {
    let popupHtml = '<div>';
    if (supplier) {
      popupHtml += `<h3>${supplier}</h3>`;
    }
    if (buyer) {
      popupHtml += `<h3>${buyer}</h3>`;
    }
    if (supply) {
      popupHtml += `<p><b>Current Stock: ${supply}</b></p>`;
    }
    if (demand) {
      popupHtml += `<p><b>Requirement: ${demand}</b></p>`;
    }
    if (name) {
      popupHtml += `<p>Name: <b>${name}</b></p>`;
    }
    if (mobile) {
      popupHtml += `<p>Contact: ${mobile}</p>`;
    }
    if (email) {
      popupHtml += `<p>Email: ${email}</p>`;
    }
    if (cost_per_unit) {
      popupHtml += `<p>Cost Per Unit: ₹ ${cost_per_unit}</p>`;
    }
    if (lead_time) {
      popupHtml += `<p>Lead Time: ${lead_time} days</p>`;
    }
    if (capacity) {
      popupHtml += `<p>Daily Capacity: ${capacity}</p>`;
    }
    if (address) {
      popupHtml += `<p>Address: ${address}</p>`;
    }
    if (pincode) {
      popupHtml += `<p>Pincode: ${pincode}</p>`;
    }
    if (gstn) {
      popupHtml += `<p>GSTN: ${gstn}</p>`;
    }
    popupHtml += `</div>`;

    return popupHtml;
  };

  const filtersLoading = view === 'supply' ? supplyLoading : demandLoading;
  const filtersDisabled = filtersLoading || selectedProducts.length === 0;

  const filters = (
    <>
      <div>
        <div>
          <label>Area / State / UT</label>
        </div>
        <Dropdown
          value={selectedState}
          onChange={setSelectedState}
          loading={filtersLoading}
          disabled={filtersLoading}
          mobileView={mobileView}
          width={!mobileView && '236px'}
          size="large"
          getPopupContainer={(node) => node.parentNode}
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
        <div>
          <label>Products</label>
        </div>
        <Dropdown
          value={selectedProducts}
          onChange={setSelectedProducts}
          loading={filtersLoading}
          disabled={filtersLoading}
          placeholder="Select a product"
          mobileView={mobileView}
          mode="multiple"
          width={!mobileView && '180px'}
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
          size="large"
          getPopupContainer={(node) => node.parentNode}
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
        {mobileView && <div>{productTags}</div>}
      </div>
      <div>
        <div>
          <label>{`${view === 'supply' ? 'Supplied' : 'Required'} Quantiy`}</label>
        </div>
        <RadioGroup
          onChange={({
            target: {
              value: { lowerLimit, upperLimit },
            },
          }) => setCurrentStockRange({ ...currentStockRange, lowerLimit, upperLimit })}
          buttonStyle="solid"
          disabled={filtersDisabled}
          size="large"
          mobileView={mobileView}
        >
          <Radio.Button
            value={{ lowerLimit: 0, upperLimit: 99 }}
            checked={currentStockRange.lowerLimit === 0 && currentStockRange.upperLimit === 99}
          >
            0-99
          </Radio.Button>
          <Radio.Button
            value={{ lowerLimit: 100, upperLimit: 500 }}
            checked={currentStockRange.lowerLimit === 100 && currentStockRange.upperLimit === 500}
          >
            100-500
          </Radio.Button>
          <Radio.Button
            value={{ lowerLimit: 501, upperLimit: currentStockRange.maxUpperLimit }}
            checked={
              currentStockRange.lowerLimit === 501 && currentStockRange.upperLimit === currentStockRange.maxUpperLimit
            }
          >
            >500
          </Radio.Button>
        </RadioGroup>
      </div>
      <div>
        <div>
          <label>Price Per Unit Range</label>
        </div>
        <PriceInputContainer>
          <PriceInput
            prefix="₹"
            placeholder="Min"
            disabled={filtersDisabled}
            size="large"
            onChange={({ target: { value } }) =>
              setCostRange({
                ...costRange,
                lowerLimit: isNaN(value) || isNaN(parseFloat(value)) ? null : parseFloat(value),
              })
            }
          />
          &nbsp;-&nbsp;
          <PriceInput
            prefix="₹"
            placeholder="Max"
            disabled={filtersDisabled}
            size="large"
            onChange={({ target: { value } }) =>
              setCostRange({
                ...costRange,
                upperLimit: isNaN(value) || isNaN(parseFloat(value)) ? null : parseFloat(value),
              })
            }
          />
        </PriceInputContainer>
      </div>
      {mobileView && view === 'demand' && (
        <div>
          <div>
            <label>Requested on</label>
          </div>
          <Dropdown
            value={timeDiff}
            onChange={setTimeDiff}
            loading={filtersLoading}
            disabled={filtersDisabled}
            mobileView={mobileView}
            placeholder="Requested on"
            size="large"
            getPopupContainer={(node) => node.parentNode}
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
      <FlexBox>
        <CheckboxContainer>
          <label>Preferences</label>
          <StyledCheckbox
            disabled={filtersDisabled}
            checked={hideUnverified}
            onChange={({ target: { checked } }) => setHideUnverified(checked)}
          >
            Verified Establishment
          </StyledCheckbox>
          <StyledCheckbox
            disabled={filtersDisabled}
            checked={hideUncertified}
            onChange={({ target: { checked } }) => setHideUncertified(checked)}
          >
            Certified Products
          </StyledCheckbox>
        </CheckboxContainer>
      </FlexBox>
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
    </>
  );

  const FilterToggle = (
    <FilterIcon>
      <Badge count={activeFilters()} showZero>
        <img src={Filter} alt="Filters" onClick={() => setModalVisibility(true)} />
      </Badge>
    </FilterIcon>
  );

  return (
    <>
      {mobileView && <MobileTitle>MEDICAL DEMAND AND SUPPLY LIVE TRACKER</MobileTitle>}
      <MapElevatedCard mobileView={mobileView}>
        <MapTitle>
          {!mobileView && <h2>MEDICAL DEMAND AND SUPPLY LIVE TRACKER</h2>}
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
          {mobileView && FilterToggle}
        </MapTitle>
        <MapWrapper>
          {!mobileView && (
            <div>
              <FilterContainer>{filters}</FilterContainer>
            </div>
          )}
          <MapDiv>
            {!mobileView && (
              <TotalCountCard>
                <TotalCardTitle>{`Total ${view === 'supply' ? 'Suppliers' : 'Demand'} (in this area)`}</TotalCardTitle>
                <Counter>
                  {filtersLoading ? (
                    <Spin />
                  ) : selectedProducts.length === 0 ? (
                    view === 'supply' ? (
                      supplyData.length
                    ) : (
                      demandData.length
                    )
                  ) : (
                    filteredList.length
                  )}
                </Counter>
                <a
                  href={
                    view === 'supply'
                      ? 'https://docs.google.com/forms/d/e/1FAIpQLScy1_2IUtCzCAdsenuEesTHYh1rKrEQOkDCITaJFzT5QjjHUg/viewform'
                      : 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSeMYEiXvMY8c0Dbr8CpO97mSil3hnPqNBVgvf6quajlBcznpw/viewform'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button type="primary" size="large">
                    {view === 'supply' ? 'Demand For Medical Supplies' : 'Register As Supplier'}
                  </Button>
                </a>
              </TotalCountCard>
            )}
            <Map id="mapid" mobileView={mobileView} />
          </MapDiv>
          {mobileView ? (
            <DetailsTableMobile
              FilterToggle={FilterToggle}
              view={view}
              setView={setView}
              selectedProducts={selectedProducts}
              supplyData={supplyData}
              demandData={demandData}
              filtersDisabled={filtersDisabled}
              filtersLoading={filtersLoading}
              filteredList={filteredList}
            />
          ) : (
            <DetailsTable
              selectedState={selectedState}
              setSelectedState={setSelectedState}
              mobileView={mobileView}
              setSelectedProducts={setSelectedProducts}
              view={view}
              setView={setView}
              supplyData={supplyData}
              demandData={demandData}
              filtersDisabled={filtersDisabled}
              filtersLoading={filtersLoading}
              hideUnverified={hideUnverified}
              setHideUnverified={setHideUnverified}
              selectedProducts={selectedProducts}
              filteredList={filteredList}
              supplyPriceRange={supplyPriceRange}
              demandPriceRange={demandPriceRange}
              timeDiff={timeDiff}
              setTimeDiff={setTimeDiff}
              productTags={productTags}
              supplyProducts={supplyProducts}
              demandProducts={demandProducts}
            />
          )}
        </MapWrapper>
        <MobileModal
          visible={modalVisibility}
          zIndex={1052}
          title="Filters"
          onCancel={() => setModalVisibility(false)}
          footer={null}
        >
          {filters}
        </MobileModal>
      </MapElevatedCard>
    </>
  );
};

export default MapContainer;
