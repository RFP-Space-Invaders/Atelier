import React, { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import StylePhoto from './StylePhoto.jsx';
import Carousel from './Carousel.jsx';
import SizeQuantitySelector from './SizeQuantitySelector.jsx';
import Share from './Share.jsx';
import {
  StyleSelectorLayout, StylePhotoGrid, RatingCartGrid, CartLogoContainer, PriceStyleContainer, StyleText, CategoryNameContainer, CategoryContainer, ProductNameContainer, ShareGrid, RatingContainer
} from '../../Styles/ProductOverview/styleSelector.styled.js';
import { ProductDescriptionGrid } from '../../Styles/ProductOverview/productOverview.styled.js';
import { FaShoppingCart } from 'react-icons/fa';
import StarRating from '../../Ratings&Reviews/subcomponents/stars.jsx';
import { AppContext } from '../../../AppContext.jsx';
import { IDContext } from '../../../IDContext.jsx';

export default function StyleSelector({ productName, categoryName, priceTag }) {
  const [currentStyleArray, setCurrentStyleArray] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({ photos: [0], skus: {} });
  const [currentPrice, setCurrentPrice] = useState(priceTag);
  const [checkmarkStatus, setCheckmarkStatus] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cartArray, setCartArray] = useState([])
  const [totalItemCount, setTotalItemCount] = useState(0)
  const [refreshState, setRefreshState] = useState(false);
  const { ratingAndCount } = useContext(AppContext);
  const {  product_id } = useContext(IDContext);

  const [isLoading, setIsLoading] = useState(true);

  const getTotal = (arr) => {
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
      count += Number(arr[i].count);
    }
    return count;
  }

  useEffect(() => {
    axios({
      method: 'get',
      url:  '/cart',
    })
      .then((response) => {
        ReactDOM.unstable_batchedUpdates(() => {
          setCartArray(response.data);
          setTotalItemCount(getTotal(response.data));
        });
      })
      .catch((error) => {
        console.log('Error getting cart data', error);
      });
  }, [refreshState])

    useEffect(() => {
      getStyleFromProductId(product_id);
    }, [product_id]);


  const getStyleFromProductId = (product_id) => {
    axios({
      method: 'get',
      url:  `products/${product_id}/styles`,
    })
      .then((response) => {
        let current = response.data.results[0];
        ReactDOM.unstable_batchedUpdates(() => {
          setCurrentStyleArray(response.data.results);
          setCurrentStyle(response.data.results[0]);
          setRefreshState(!refreshState);
          setCurrentPrice(current.sale_price ? current.sale_price : current.original_price);
          setIsLoading(false);
        });

      })
      .catch((error) => {
        console.log('Error in getting data from getStyleFromProductId', error);
      });

  };

  if (isLoading) {
    return null;
  }

  return (
    <ProductDescriptionGrid id='productDescriptionGrid'>
      <Carousel currentStyle={currentStyle} productId={product_id} />
      <StyleSelectorLayout id='styleSelectorLayout'>
        <RatingCartGrid>
          <RatingContainer>
            <a href="#review" style={{textDecoration: 'none'}}>
              <StarRating review_id={product_id + 'starOverview'} rating={ratingAndCount[0]} />
              &nbsp;
              &nbsp;
              <span style={{color: 'black'}}>{ratingAndCount[1]} Reviews</span>
            </a>
          </RatingContainer>
          <CartLogoContainer onClick={() => {setRefreshState(!refreshState)}}>
            {totalItemCount}
            <FaShoppingCart />
          </CartLogoContainer>
        </RatingCartGrid>
        <CategoryNameContainer>
          <CategoryContainer>{categoryName}</CategoryContainer>
          <ProductNameContainer>{productName}</ProductNameContainer>
        </CategoryNameContainer>
        <PriceStyleContainer>
          <div>
            <StyleText>
            ${currentPrice}
            <br></br>
            STYLE: {currentStyle.name}
            </StyleText>
          </div>
        </PriceStyleContainer>
        <StylePhotoGrid>
          {currentStyleArray.map((style, index) => {
            return <StylePhoto
              key={style.photos[0].url + index}
              currentStyle={style}
              setCurrentStyle={setCurrentStyle}
              index={index}
              setIndex={setCurrentIndex}
              currentIndex={currentIndex}
            />
            }
          )}
        </StylePhotoGrid>
        <SizeQuantitySelector currentStyleSkus={currentStyle.skus} refreshState={refreshState} setRefreshState={setRefreshState}/>

        <Share/>
      </StyleSelectorLayout>
    </ProductDescriptionGrid>
  );
}
