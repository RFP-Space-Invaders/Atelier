import React, {useState, useEffect, useContext} from 'react';
import ProductCarousel from './productcarousel.jsx';
import axios from 'axios';
import {IDContext} from '../../IDContext.jsx';

export default function RelatedProducts() {
  const [products, setProducts] = useState([]);
  const { product_id } = useContext(IDContext);

  useEffect(() => {
    getProducts();
  }, [product_id])

  const getProducts = () => {
    axios({
      method: 'get',
      url: `/products/${product_id}/related`
    })
      .then((response) => {
        let data = response.data;
        return Promise.all(data.map((product) => {
          return axios.get(`/products/${product}`)
            .then((response) => {
              return {
                category: response.data.category,
                description: response.data.description,
                default_price: response.data.default_price,
                id: response.data.id,
              }
            })
            .then((productDescriptionObj) => {

              axios.get(`/products/${product}/styles`)
                .then((response) => {
                  let photo_url = response.data.results[0].photos[0].thumbnail_url;
                  productDescriptionObj.photo_url = photo_url;
                })
                .catch((err) => console.log(err));

              return productDescriptionObj;
            })
            .catch((err) => console.log(err))
        }))
      })
      .then((ProductData) => {
        setProducts(ProductData);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <ProductCarousel products={products} />
    </div>
  );
}