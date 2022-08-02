import React, { useState, createContext, useEffect, useContext, useMemo, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import ProductMain from './Components/ProductOverview/ProductMain.jsx';
import Header from './Header.jsx';
// import QuestionListContainer from './Components/Q&A/questions.jsx';
//import ReviewMain from './Components/Ratings&Reviews/reviewMain.jsx';
import AppContextProvider, { AppContext } from './AppContext.jsx';
import IDContextProvider, { IDContext } from './IDContext.jsx';
import GlobalCSS from './Components/Styles/globalstyle.styled.js';
const QuestionListContainer = lazy(() => import ('./Components/Q&A/questions.jsx'))
const ReviewMain = lazy(() => import ('./Components/Ratings&Reviews/reviewMain.jsx'))
const RelatedProducts = lazy(() => import('./Components/RelatedProducts/relatedMain.jsx'))

// const RatingContext = createContext(null);

export default function App() {
  // const { product_id, changeProductId } = useContext(IDContext);
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    console.log('here is useEffect');
  }, [refresh]);

  return (
    <AppContextProvider>
      <IDContextProvider>
        <GlobalCSS/>
        <Header />
        <ProductMain />
        <Suspense fallback={<div>Loading...</div>}>
        <RelatedProducts />
        <QuestionListContainer/>
        {/* <QuestionListContainer /> */}
        <ReviewMain />
        </Suspense>
      </IDContextProvider>
    </AppContextProvider>
  );
}
// don't use 40347
// App.defaultProps = {
//   product_id: 40348,
// };

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
