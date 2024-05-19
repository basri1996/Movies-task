import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { defaultTheme } from './defaultTheme';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import ContentDetail from './page/ContentDetail';
import Home from './page/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import ContentPage from './page/ContentPage';
import SearchResult from './page/SearchResult';
import { ExpandedSearchContextProvider } from './context/ExpandedSearchContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Rose:wght@300..700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contentdetail/:type/:id" element={<ContentDetail />} />
        <Route path="/search/:title" element={<SearchResult />} />
        <Route
          path="/:mediaType/:category"
          element={
            <ExpandedSearchContextProvider>
              <ContentPage />
            </ExpandedSearchContextProvider>
          }
        />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
