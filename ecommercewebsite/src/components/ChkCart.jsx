import { useLocation } from "react-router-dom";
export default function ChkCart() {
  const location = useLocation();
  const { addedItem, itemDetails } = location.state;
  console.log(addedItem);
  console.log(itemDetails);
  return (
    <tr style={{ borderBottom: "1px solid #ccc" }}>
      <td scope="row">
        <img
          src={itemDetails.imgsrc}
          className=""
          alt=""
          style={{ width: "5em", height: "5em" }}
        />
        <p style={{ padding: "1rem", display: "inline" }}>
          {itemDetails.itemname} - {addedItem.color} x 2
        </p>
      </td>

      <td style={{ padding: "1rem" }}>{itemDetails.price}</td>
    </tr>
  );
}
