import React, { createContext, useMemo, useState } from 'react';

export const AppContext = createContext(null);

export default function AppContextProvider({children}) {
  const [ratingAndCount, setRatingAndCount] = useState([]);
  // const [countRatings, setCountRatings] = useState([]);
  const [name, setName] = useState('');
  // const [product_id, setProductID] = useState(40348);

  const value = useMemo(() => {
    // console.log('here is appcontext: ', product_id);
    return ({
      ratingAndCount,
      name,
      // product_id,
      setName,
      setRatingAndCount,
      // setProductID,
    })}, [ratingAndCount, name]);

    // const value = {
    //   ratingAndCount,
    //   name,
    //   setName,
    //   setRatingAndCount,
    // }


  // const changeProductId = (newProductId) => {
  //   setProductID(newProductId);
  // }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
