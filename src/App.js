import "./App.css";
import Navebar from "./component/Navebar";
import Body from "./component/Body";

function App() {
  return (
    <>
      <Navebar />
      <div className="container">
        <Body />
      </div>
    </>
  );
}

export default App;
