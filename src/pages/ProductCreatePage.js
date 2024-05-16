import React, { useState } from "react";
import ProductCreateForm from "../components/create/ProductCreateForm";
import { API_HOST } from "../api/config";

const ProductCreatePage = () => {
  return (
    <div>
      <h1>상품 등록 페이지입니다.</h1>
      <ProductCreateForm />
    </div>
  );
};

export default ProductCreatePage;
