
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { defaultTheme } from "./defaultTheme";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";

import ProductDetail from "./page/ProductDetail";
import Home from "./page/Home";

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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contentdetail :id" element={<ProductDetail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
