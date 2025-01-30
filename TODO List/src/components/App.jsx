import React from "react";

function App() {
  const [input, setInput] = React.useState("");
  const [items, setItems] = React.useState([]);

  function addInput(event) {
    setInput(event.target.value);
  }
  function addItem() {
    setItems((prev) => {
      return [...prev, input];
    });
    setInput("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={addInput} type="text" value={input} />
        <button>
          <span onClick={addItem}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
