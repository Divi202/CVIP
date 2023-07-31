import { Link } from "react-router-dom";

export default function NavbarItems(props) {
  return (
    <li className="nav-item">
      <Link
        className={`nav-link active${
          props.itemName === "Cart" ? "bi bi-bag-fill" : " "
        }`}
        aria-current="page"
        to={props.address}
      >
        {props.itemName === "Cart" ? "" : props.itemName}
      </Link>
    </li>
  );
}
