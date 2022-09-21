import React, { createContext, useMemo, useState, useEffect } from 'react';

export const IDContext = createContext({});

export default function IDContextProvider({children}) {
  const [product_id, setProductID] = useState(40348);
  const [refresh, setRefresh] =  useState(0)
  const changeProductId = (newProductId) => {
      setProductID(newProductId);
      setRefresh(prevCount => prevCount + 1);
    };

  return <IDContext.Provider value={{product_id, changeProductId}}>{children}</IDContext.Provider>;
}
