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
    imageUrl: "images/nike-lifestyle.jpg",
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
    imageUrl: "images/nike-running.jpg",
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
    imageUrl: "images/nike-lifestyle.jpg",
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
    imageUrl: "images/nike-lifestyle.jpg",
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
    imageUrl: "images/macbook.jpg",
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
    imageUrl: "images/nike-running.jpg",
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
  const [sortBy, setSortBy] = useState("alphabetically");

  function handleProduct(newProduct) {
    setData((data) => [...data, newProduct]);
    setAddProduct(false);
  }

  function handleDeleteProduct(id) {
    setData((data) => data.filter((product) => product.id !== id));
  }

  let sortedData;
  if (sortBy === "alphabetically") {
    sortedData = data.slice().sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "price-down") {
    sortedData = data.slice().sort((a, b) => Number(b.price) - Number(a.price));
  }

  if (sortBy === "price-up") {
    sortedData = data.slice().sort((a, b) => Number(a.price) - Number(b.price));
  }

  return (
    <div className="app">
      <Sidebar setActivePage={setActivePage} activePage={activePage} />

      <div className="products">
        {activePage === "products" && addProduct && (
          <Form handleProduct={handleProduct} />
        )}

        {activePage === "products" && !addProduct && (
          <>
            <div className="filter">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="price-down">Price Down</option>
                <option value="price-up">Price Up</option>
                <option value="alphabetically">A-Z</option>
              </select>
            </div>

            <Products data={sortedData} onDelete={handleDeleteProduct} />
          </>
        )}

        {activePage === "about" && <About />}

        {activePage === "statistics" && (
          <>
            {choseChart ? (
              <BarChart data={sortedData} />
            ) : (
              <PieChart data={sortedData} />
            )}

            <Button onClick={() => setChoseChart((a) => !a)}>
              {choseChart ? "Manufacturer Chart >" : "< Medicine Chart"}
            </Button>
          </>
        )}

        {activePage === "products" && (
          <Button
            size="1.6"
            bgColor="rgba(102, 255, 117, 0.50)"
            borderColor="rgba(0, 202, 20, 0.50)"
            onClick={() => setAddProduct(!addProduct)}
          >
            {addProduct ? "Close" : "Add New Product"}
          </Button>
        )}
      </div>
    </div>
  );
}
