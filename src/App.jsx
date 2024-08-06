import { ProductList } from "./components/ProductList";
import { CategoryFilter } from "./components/CategoryFilter.jsx";
import "./assets/style.css";

export const App = () => {
  return (
    <div>
      <h1>Shopping Website</h1>
      <div className="cotainer">
        <div className="section">
          <CategoryFilter />
        </div>
        <div className="section">
          <ProductList />
        </div>
      </div>
    </div>
  );
};
