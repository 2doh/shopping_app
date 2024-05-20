import { Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductItemPage from "./pages/ProductItemPage";
import ProductPurchasePage from "./pages/ProductPurchasePage";
import ProductCreatePage from "./pages/ProductCreatePage";
import ProductModifyPage from "./pages/ProductModifyPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/common/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product" element={<ProductListPage />} />
        <Route path="/product/:productId" element={<ProductItemPage />} />
        <Route path="/purchase/:productId" element={<ProductPurchasePage />} />
        <Route path="/create" element={<ProductCreatePage />} />
        <Route path="/modify" element={<ProductModifyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
