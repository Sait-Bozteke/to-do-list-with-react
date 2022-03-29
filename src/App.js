import "./App.css";
import { useState } from "react";

function App() {
  const [input, setinput] = useState("");
  const [list, setlist] = useState([]);

  const inputEventHandler = (e) => {
    setinput(e.target.value);
  };

  const listShowEvent = (e) => {
    setlist((prevVal) => {
      return [input, ...prevVal];
    });
    setinput("");
  };
  const deleteItems = (id) => {
    alert("Are you sure you want to delete?");
    setlist((prevVal) => {
      return prevVal.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <div className="box">
        <br />
        <h1>TODO List</h1>

        <input
          type="text"
          placeholder="add an item"
          onChange={inputEventHandler}
        />
        <button onClick={listShowEvent}>+</button>
      </div>
      {list.map((item, index) => {
        return (
          <div className="result" id={index} key={index}>
            <button
              onClick={() => {
                deleteItems(index);
              }}
            >
              x
            </button>
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
