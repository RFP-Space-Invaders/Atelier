import React, { useState, createContext, useEffect, useContext, useMemo, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import ProductMain from './Components/ProductOverview/ProductMain.jsx';
import Header from './Header.jsx';
import AppContextProvider, { AppContext } from './AppContext.jsx';
import IDContextProvider, { IDContext } from './IDContext.jsx';
import GlobalCSS from './Components/Styles/globalstyle.styled.js';
const QuestionListContainer = lazy(() => import ('./Components/Q&A/questions.jsx'))
const ReviewMain = lazy(() => import ('./Components/Ratings&Reviews/reviewMain.jsx'))
const RelatedProducts = lazy(() => import('./Components/RelatedProducts/relatedMain.jsx'))

export default function App() {

  return (
    <AppContextProvider>
      <IDContextProvider>
        <GlobalCSS/>
        <Header />
        <ProductMain />
        <Suspense fallback={<div>Loading...</div>}>
        <RelatedProducts />
        <QuestionListContainer/>
        <ReviewMain />
        </Suspense>
      </IDContextProvider>
    </AppContextProvider>
  );
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
