import "./style/style.css";
import Button from "./components/button/button";
import Form from "./components/new-product-form/add-form";
import Products from "./components/products/product";
import Sidebar from "./components/sidebar/sidebar";
import About from "./components/about/about";
import BarChart from "./components/bar-chart/barChart";
import PieChart from "./components/pie-chart/pieChart";
import { useState } from "react";

const initalData = [
  {
    id: crypto.randomUUID(),
    name: "Famotidin",
    price: "20",
    imageUrl: "images/macbook.jpg",
    description: "Medicine one Description",
    date: new Date().toLocaleDateString("de-DE"),
    manufacturer: {
      name: "hemofarm",
      id: crypto.randomUUID(),
    },
  },

  {
    id: crypto.randomUUID(),
    name: "Panklav",
    price: "50",
    imageUrl: "images/apple-watch.jpg",
    description: "Medicine two Description",
    date: new Date().toLocaleDateString("de-DE"),
    manufacturer: {
      name: "pfizer",
      id: crypto.randomUUID(),
    },
  },

  {
    id: crypto.randomUUID(),
    name: "Amoksicilin",
    price: "100",
    imageUrl: "images/apple-watch.jpg",
    description: "Medicine three Description",
    date: new Date().toLocaleDateString("de-DE"),
    manufacturer: {
      name: "bayer",
      id: crypto.randomUUID(),
    },
  },

  {
    id: crypto.randomUUID(),
    name: "Voltaren gel",
    price: "30",
    imageUrl: "images/apple-watch.jpg",
    description: "Medicine Four Description",
    date: new Date().toLocaleDateString("de-DE"),
    manufacturer: {
      name: "hemofarm",
      id: crypto.randomUUID(),
    },
  },

  {
    id: crypto.randomUUID(),
    name: "Probiotik",
    price: "10",
    imageUrl: "images/apple-watch.jpg",
    description: "Medicine Eight Description",
    date: new Date().toLocaleDateString("de-DE"),
    manufacturer: {
      name: "pfizer",
      id: crypto.randomUUID(),
    },
  },

  {
    id: crypto.randomUUID(),
    name: "Pantenol",
    price: "25",
    imageUrl: "images/apple-watch.jpg",
    description: "Medicine Five Description",
    date: new Date().toLocaleDateString("de-DE"),
    manufacturer: {
      name: "bayer",
      id: crypto.randomUUID(),
    },
  },

  {
    id: crypto.randomUUID(),
    name: "Tothema kapsule",
    price: "33",
    imageUrl: "images/apple-watch.jpg",
    description: "Medicine Six Description",
    date: new Date().toLocaleDateString("de-DE"),
    manufacturer: {
      name: "hemofarm",
      id: crypto.randomUUID(),
    },
  },

  {
    id: crypto.randomUUID(),
    name: "Klometol",
    price: "92",
    imageUrl: "images/apple-watch.jpg",
    description: "Medicine Seven Description",
    date: new Date().toLocaleDateString("de-DE"),
    manufacturer: {
      name: "pfizer",
      id: crypto.randomUUID(),
    },
  },

  {
    id: crypto.randomUUID(),
    name: "Smecta",
    price: "44",
    imageUrl: "images/apple-watch.jpg",
    description: "Drug Eight Description",
    date: new Date().toLocaleDateString("de-DE"),
    manufacturer: {
      name: "bayer",
      id: crypto.randomUUID(),
    },
  },

  {
    id: crypto.randomUUID(),
    name: "Bulardi",
    price: "31",
    imageUrl: "images/apple-watch.jpg",
    description: "Medicine Eight Description",
    date: new Date().toLocaleDateString("de-DE"),
    manufacturer: {
      name: "hemofarm",
      id: crypto.randomUUID(),
    },
  },
];

export default function App() {
  const [data, setData] = useState(initalData);
  const [addProduct, setAddProduct] = useState(false);
  const [activePage, setActivePage] = useState("products");
  const [choseChart, setChoseChart] = useState(true);

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

        {activePage === "statistics" && (
          <>
            {choseChart ? <BarChart data={data} /> : <PieChart data={data} />}

            <Button onClick={() => setChoseChart((a) => !a)}>
              {choseChart ? "Manufacturer Chart >" : "< Medicine Chart"}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
