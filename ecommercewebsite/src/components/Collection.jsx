import "./Collection.css";
import CollectionItems from "./CollectionItems";
import { items } from "./productData";

export default function Collection() {
  const pdId = ["M01", "M02", "F01", "F02"];

  // Filter the items array based on the pdId values
  const itemsToDisplay = items.filter((item) => pdId.includes(item.id));

  return (
    <>
      <div className="container my-5">
        <div className="row">
          {itemsToDisplay.map((item) => (
            <div className="col-3" key={item.id}>
              <CollectionItems
                category={item.category}
                name={item.itemname}
                price={item.price}
                imgsrc={item.imgsrc}
                address="/product"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
