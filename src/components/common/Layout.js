import React from "react";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleMoveHomes = () => navigate("/");
  const handleMoveCreate = () => navigate("/create");
  const handleMoveItem = () => navigate("/product/:productId");
  const handleMovePurchase = () => navigate("/purchase/:productId");
  return (
    <>
      <ul>
        <li onClick={handleMoveHomes} style={{ cursor: "pointer" }}>
          홈으로
        </li>
        <li onClick={handleMoveCreate} style={{ cursor: "pointer" }}>
          상품 등록하기
        </li>
        <li onClick={handleMoveItem} style={{ cursor: "pointer" }}>
          상품 상세보기
        </li>
        <li onClick={handleMovePurchase} style={{ cursor: "pointer" }}>
          상품 구매하기
        </li>
      </ul>
      <div>{children}</div>
    </>
  );
};

export default Layout;
