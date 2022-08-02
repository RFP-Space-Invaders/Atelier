import React, {useContext} from 'react';
import {CardContainerStyled, ImageStyled, ProductInfoStyled, PStyled} from '../Styles/RelatedProducts/related.styled.js';
import {IDContext} from '../../IDContext.jsx';


export default function ProductCard({product}) {
  const { changeProductId } = useContext(IDContext);
  return (
    <>
     { product === undefined ? null :
      <CardContainerStyled onClick={() => {changeProductId(product.id)}}>
        <ImageStyled src={product.photo_url}/>
        <ProductInfoStyled>

          <PStyled>{product.category}</PStyled><br/>
          <PStyled>{product.description.slice(0, 30) + '...'}</PStyled><br/>
          <PStyled>{product.default_price}</PStyled><br/>
        </ProductInfoStyled>
      </CardContainerStyled>}
    </>
  );
}