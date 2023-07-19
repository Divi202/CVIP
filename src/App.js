import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="my-3 text-center">Task Tracker </h1>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
