import React, { useState } from "react";
import { API_HOST } from "../../api/config";

const ProductCreateForm = () => {
  const [name, setName] = useState("");
  const [explanation, setExplanation] = useState("");
  const [price, setPrice] = useState(0);

  const handleCreate = newProduct => {
    fetch(`${API_HOST}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleCreate({
          name,
          explanation,
          price,
        });
      }}
    >
      <input
        type="text"
        placeholder="상품 이름을 입력하세요"
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="상품 설명을 입력하세요"
        onChange={e => setExplanation(e.target.value)}
      />
      <input
        type="number"
        placeholder="상품 가격을 입력하세요"
        onChange={e => setPrice(parseInt(e.target.value, 10))}
      />
      <input type="submit" value="상품 등록하기" />
    </form>
  );
};

export default ProductCreateForm;
