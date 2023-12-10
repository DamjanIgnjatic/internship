import { useState } from "react";
import Button from "../button/button";
import "./add.scss";

export default function Form({ handleProduct }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [newDate, setNewDate] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [newImage, setNewImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const formatedDate = new Date(newDate).toLocaleDateString("de-DE");

    if (!name || !description || !price || !newDate || !manufacturer) return;

    const newProduct = {
      name: name,
      description: description,
      price: price,
      id: crypto.randomUUID(),
      date: formatedDate,
      imageUrl: newImage,
      manufacturer: {
        name: manufacturer,
      },
    };
    handleProduct(newProduct);

    setName("");
    setDescription("");
    setPrice(0);
    setNewDate("");
    setManufacturer("");
  }

  return (
    <form className="form-add-product" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label>Name of the product</label>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Image Url</label>
        <input
          type="text"
          value={newImage ? newImage : ""}
          placeholder="Image url/adress"
          onChange={(e) => setNewImage(e.target.value)}
        />
      </div>

      <div>
        <label>Manufacturer</label>
        <input
          type="text"
          placeholder="Manufacturer"
          value={manufacturer ? manufacturer : ""}
          onChange={(e) => setManufacturer(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Price</label>
        <input
          type="number"
          placeholder="Price"
          value={price ? price : ""}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Date</label>
        <input
          type="date"
          min="01.12.1950"
          placeholder="dd/mm/yyyy"
          value={newDate ? newDate : ""}
          onChange={(e) => setNewDate(e.target.value)}
          required
        />
      </div>

      <Button size={1.6}>Add product</Button>
    </form>
  );
}
