import React, { createContext, useMemo, useState } from 'react';

export const AppContext = createContext(null);

export default function AppContextProvider({children}) {
  const [ratingAndCount, setRatingAndCount] = useState([]);
  const [name, setName] = useState('');

  const value = useMemo(() => {
    return ({
      ratingAndCount,
      name,
      setName,
      setRatingAndCount,
    })}, [ratingAndCount, name]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
