import ButtonIncDec from "./buttonIncDec";

export default function SmallCartItem(props) {
  return (
    <>
      <tr>
        <th scope="row" rowSpan="2">
          <img
            src={props.imgsrc}
            className=""
            alt={props.itemname}
            style={{ width: "5em", height: "5em" }}
          />
        </th>
        <td>{props.itemname}</td>
        <td>
          {" "}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </td>
      </tr>
      <tr>
        <td>
          <ButtonIncDec />
        </td>
        <td>price</td>
      </tr>
    </>
  );
}
