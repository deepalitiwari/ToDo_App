import { useState } from "react";
import "./App.css";
import { RxCross2 } from "react-icons/rx";
import { LiaEditSolid } from "react-icons/lia";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [uId, setUId] = useState(); //store id for updation
  const [toggleBtn, setToggleBtn] = useState(true); //handle button toggle

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleTask = () => {
    setList([...list, input]);
    setInput("");
  };

  //on the basis of index i we will remove item from the list
  const handleDelete = (i) => {
    const filterList = list.filter((elm) => elm !== list[i]);
    console.log(filterList);
    setList(filterList);
  };

  const handleEdit = (i) => {
    const filterList = list.filter((ele) => ele === list[i]);
    // console.log(filterList);
    setInput(filterList[0]);
    setUId(i);
    setToggleBtn(false);
  };

  const handleUpdate = () => {
    list.splice(uId, 1, input);
    setList([...list]);
    setInput("");
    setToggleBtn(true);
  };

  return (
    <div className="app">
      <div className="container">
        <h2>To Do List</h2>
        <div className="input-box">
          <input
            type="text"
            value={input}
            onChange={(e) => handleInput(e)}
            placeholder="Enter here.."
          />
          {toggleBtn ? (
            <button onClick={() => handleTask()}>Add Task</button>
          ) : (
            <button onClick={() => handleUpdate()}> Update</button>
          )}
        </div>
        <div className="list">
          <ul>
            <li>harsh</li>
          </ul>
          <ul>
            {list.map((item, i) => (
              <li key={i}>
                {item}
                <div className="icons">
                  <div className="editIcon">
                    <LiaEditSolid onClick={() => handleEdit(i)} />
                  </div>
                  <div className="deleteIcon">
                    <RxCross2 onClick={() => handleDelete(i)} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
