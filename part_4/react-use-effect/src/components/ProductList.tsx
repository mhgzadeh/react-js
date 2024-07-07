import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("Fetching Products", category);
    // setProducts(["Clothing", "Household"]);
  }, [category]);
  return <div>Productlist</div>;
};

export default ProductList;
