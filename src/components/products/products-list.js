import Button from "../button/button";

export default function Product({ data, onDelete, setEdit }) {
  const formattedPrice = new Intl.NumberFormat("en-de", {
    style: "currency",
    currency: "EUR",
  });

  return (
    <li className="list-item">
      <div className="product-image">
        {data.imageUrl ? (
          <img src={data.imageUrl} alt={data.name} />
        ) : (
          <p className="no-image">No image for this product</p>
        )}
      </div>
      <div className="list-item--information">
        <p className="product-name">{data.name}</p>
        <p className="product-description">{data.description}</p>

        <div className="category-date">
          {data.manufacturer?.name && (
            <p className="product-manufacturer">{data.manufacturer.name}</p>
          )}

          <p className={`date ${"active"}`}>{data.date}</p>
        </div>
        <div className="product-price">
          <p>{formattedPrice.format(data.price)}</p>
          <Button>Edit Product</Button>
          <Button
            onClick={() => onDelete(data.id)}
            color="#f8f8f8"
            bgColor="#7C0A02"
            borderColor="#7C0A02"
          >
            Delete Product
          </Button>
        </div>
      </div>
    </li>
  );
}
