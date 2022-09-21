import React, { useState, useEffect, createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import ProductDescription from './ProductComponents/ProductDescription.jsx';
import StyleSelector from './ProductComponents/StyleSelector.jsx';
import styled from 'styled-components';
import { ProductOverviewGrid, ProductDescriptionGrid, ProductInformationGrid, VerticalLine, BulletPointDescription } from '../Styles/ProductOverview/productOverview.styled.js'
import { AppContext } from '../../AppContext.jsx';
import { IDContext } from '../../IDContext.jsx';

export const ThemeContext = React.createContext({});

export default function ProductMain() {
  const [productDetails, setProductDetails] = useState({});
  const [productName, setProductName] = useState('Placeholder Name');
  const [categoryName, setCategoryName] = useState('CATEGORY');
  const [priceTag, setPriceTag] = useState('Placeholder Price');
  const { setName} = useContext(AppContext);
  const { product_id } = useContext(IDContext);

  const [isLoading, setIsLoading] = useState(true);

  const getDataFromProductId = (product_id) => {
    axios({
      method: 'get',
      url: `/products/${product_id}`,
    })
      .then((response) => {
        ReactDOM.unstable_batchedUpdates(() => {
          setProductDetails(response.data)
          setProductName(response.data.name);
          setCategoryName(response.data.category)
          setPriceTag(response.data.default_price);
          setName(response.data.name);
          setIsLoading(false);
        });
      })
      .catch((error) => {
        console.log('Error in getting data from getDataFromProductId', error);
      });
  }

  useEffect(() => {
    getDataFromProductId(product_id);
  }, [product_id]);

  if (isLoading) {
    return null;
  }

  return (
    <ProductOverviewGrid>
      <StyleSelector productName={productName} categoryName={categoryName} priceTag={priceTag} product_id={product_id}/>
      <ProductInformationGrid>
        <ProductDescription slogan={!isLoading ? productDetails.slogan : null} description={!isLoading ? productDetails.description : null} />
        <VerticalLine>
          <div></div>
        </VerticalLine>
        <BulletPointDescription>
          <div>
            100% organic material
          </div>
          <div>
            100% hand made
          </div>
          <div>
            100% size fit
          </div>
        </BulletPointDescription>
      </ProductInformationGrid>
    </ProductOverviewGrid>
  );
}
