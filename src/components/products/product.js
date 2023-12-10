import Product from "./products-list";
import "./products.scss";

export default function Products({ data, onDelete }) {
  return (
    <ul id="products" className="list">
      {data.map((data) => (
        <Product data={data} key={data.id} onDelete={onDelete} />
      ))}
    </ul>
  );
}
