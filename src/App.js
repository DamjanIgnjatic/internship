import "./style/style.css";
import Button from "./components/button/button";
import Form from "./components/new-product-form/add-form";
import Products from "./components/products/product";
import Sidebar from "./components/sidebar/sidebar";
import About from "./components/about/about";
import { useState } from "react";

const initalData = [
  {
    id: crypto.randomUUID(),
    name: "Apple Watch - series 8",
    price: "9.99",
    imageUrl: "images/apple-watch.jpg",
    description: "Midnight Alumium Case with Sports Band",
    date: new Date().toLocaleDateString("de-DE"),
    manufacturer: {
      name: "pfizer",
      id: crypto.randomUUID(),
    },
  },
];

export default function App() {
  const [data, setData] = useState(initalData);
  const [addProduct, setAddProduct] = useState(false);
  const [activePage, setActivePage] = useState("products");

  function handleProduct(newProduct) {
    setData((data) => [...data, newProduct]);
    setAddProduct(false);
  }

  function handleDeleteProduct(id) {
    setData((data) => data.filter((product) => product.id !== id));
  }

  return (
    <div className="app">
      <Sidebar setActivePage={setActivePage} activePage={activePage} />
      <div className="products">
        {activePage === "products" && (
          <>
            <Products data={data} onDelete={handleDeleteProduct} />

            <Button
              size="1.6"
              bgColor="rgba(102, 255, 117, 0.50)"
              borderColor="rgba(0, 202, 20, 0.50)"
              onClick={() => setAddProduct(!addProduct)}
            >
              {addProduct ? "Close" : "Add New Product"}
            </Button>

            {addProduct && <Form handleProduct={handleProduct} />}
          </>
        )}

        {activePage === "about" && <About />}
      </div>
    </div>
  );
}
