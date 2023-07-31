import "./Copywrite.css";
export default function Copywrite(props) {
  return (
    <div className=" container text-center copywrite">
      <h6>Copyright &copy; {props.year} TeeFusion | Powered by TeeFusion </h6>
    </div>
  );
}
