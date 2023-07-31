import CollectionItems from "./CollectionItems";
import Products from "./Products";
import { useState } from "react";
import { items } from "./productData";

export default function Category(props) {
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = items.filter(
    (item) => item.category === props.categoryName
  );

  const onItemClick = (itemId) => {
    setSelectedItem(itemId);
  };

  return (
    <>
      {selectedItem === null ? (
        <div className="container-fluid">
          <div className="row ms-5">
            {filteredItems.map((item) => (
              <div className="col-3 mt-3 " key={item.id}>
                <CollectionItems
                  id={item.id}
                  category={item.category}
                  name={item.itemname}
                  price={item.price}
                  imgsrc={item.imgsrc}
                  onItemClick={onItemClick}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Products
          imgsrc={items.find((item) => item.id === selectedItem).imgsrc}
          name={items.find((item) => item.id === selectedItem).itemname}
          category={items.find((item) => item.id === selectedItem).category}
          price={items.find((item) => item.id === selectedItem).price}
        />
      )}
    </>
  );
}
