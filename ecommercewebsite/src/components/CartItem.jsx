import ButtonIncDec from "./buttonIncDec";

export default function CartItem(props) {
  return (
    <tr style={{ borderBottom: "1px solid #ccc" }}>
      <th scope="row">
        <img
          src={props.imgsrc}
          className=""
          alt={props.itemname}
          style={{ width: "6em", height: "6em" }}
        />
      </th>
      <td style={{ padding: "1rem" }}>
        {props.itemname}- {props.color}
      </td>
      <td style={{ padding: "1rem" }}>{props.price}</td>
      <td style={{ padding: "1rem" }}>
        <ButtonIncDec />
      </td>
      <td style={{ padding: "1rem" }}>
        {props.subtotal}
        <button
          type="button"
          className="btn-close ms-5"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </td>
    </tr>
  );
}
