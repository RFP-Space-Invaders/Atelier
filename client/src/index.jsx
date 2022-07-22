import React, { useState, createContext, useMemo, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import ProductMain from './Components/ProductOverview/ProductMain.jsx';
//import QuestionListContainer from './Components/Q&A/questions.jsx';
//import ReviewMain from './Components/Ratings&Reviews/reviewMain.jsx';
import AppContextProvider, { AppContext } from './AppContext.jsx';
import GlobalCSS from './Components/Styles/globalstyle.styled.js';
const QuestionListContainer = lazy(() => import ('./Components/Q&A/questions.jsx'))
const ReviewMain = lazy(() => import ('./Components/Ratings&Reviews/reviewMain.jsx'))

// const RatingContext = createContext(null);

export default function App({ product_id }) {
  return (
    <AppContextProvider>
      <GlobalCSS/>
      <ProductMain product_id={product_id}/>
      <Suspense fallback={<div>Loading...</div>}>
      <QuestionListContainer />
      <ReviewMain product_id={product_id} />
      </Suspense>
    </AppContextProvider>
  );
}
// don't use 40347
App.defaultProps = {
  product_id: 40348,
};
const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
