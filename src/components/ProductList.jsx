import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsThunk } from "../redux/slices/productsSlice";

export const ProductList = () => {
  const dispatch = useDispatch();
  const { products, selectedCategory } = useSelector((state) => state.products);

  const [searchedProduct, setSearchedProduct] = useState("");

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  const handleSearch = (event) => {
    setSearchedProduct(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const matchCategory = selectedCategory
      ? product.category === selectedCategory
      : true;

    const matchesSearchTerm = product.title
      .toLowerCase()
      .includes(searchedProduct.toLowerCase());
    return matchCategory && matchesSearchTerm;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchedProduct}
        onChange={handleSearch}
      />

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.image} alt={product.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
