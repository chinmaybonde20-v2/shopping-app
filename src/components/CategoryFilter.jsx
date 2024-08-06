import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../redux/slices/productsSlice";

export const CategoryFilter = () => {
  const dispatch = useDispatch();

  const categories = [
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];

  const selectCategory = (category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <div>
      <h1>Categories</h1>
      {categories.map((category) => (
        <button key={category} onClick={() => selectCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};
