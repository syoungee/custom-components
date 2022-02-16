import "./App.css";
import Toggle from "./component/ToggleButton.js";
import Modal from "./component/Modal.js";

function App() {
  return (
    <>
      <div className="App">안녕!</div>
      <Toggle />
      <div>토글 다음 모달!</div>
      <Modal />
    </>
  );
}

export default App;
