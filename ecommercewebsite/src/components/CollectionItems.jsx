import "./CollectionItems.css";

export default function CollectionItems(props) {
  return (
    <div className="card custom-card" style={{ width: "18rem" }}>
      <img src={props.imgsrc} className="card-img custom-card-img" alt="..." />
      <div className="card-body">
        <h6 className="category">{props.category}</h6>
        <h5
          className="product-name"
          onClick={() => props.onItemClick(props.id)}
        >
          {props.name}
        </h5>
        <h6 className="product-price">Rs.{props.price}</h6>
      </div>
    </div>
  );
}
