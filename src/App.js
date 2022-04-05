import React from "react";
import "./App.css";
import AddTask from "./component/AddTask";
import list from "./img/li.svg";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  // const [title, setTitle] = useState("");
  // const onChangeState = (e) => {
  //   setTitle(e.target.value);
  // };

  let text = "";

  const addNote = (e) => {
    // data.push(title);
    if (/\w/.test(text)) {
      setData([...data, text]);
    }
    document.querySelector(".note").value = "";

    // setTitle("");
  };

  const delNote = (e) => {
    // console.log(e.target.id);

    const newData = data.filter((value) => {
      return value != e.target.id;
    });
    setData(newData);
    document.querySelector(".note").value = "";
  };
  // function clear() {
  //   document.querySelector(".note").value = "";
  // }

  const addClass = () => {
    document.querySelector("#body").classList.toggle("change");
    document.querySelector(".sidearea").classList.toggle("sidemode");
    document.querySelector(".content").classList.toggle("contentmode");
  };

  return (
    <div id="body">
      <select
        className="mode"
        onChange={(e) => {
          addClass();
        }}
      >
        <option value={"Light mode"}>Light mode</option>
        <option value={"Dark mode"}>Dark mode</option>
      </select>
      <div className="main">
        <div className="sidearea">
          <div className="span">
            <u>Add Task</u>
          </div>
          <textarea
            className="note"
            onChange={(e) => {
              text = e.target.value;
            }}
          ></textarea>
          <br />
          <button
            className="positive ui button "
            onClick={(e) => {
              addNote(text);
            }}
          >
            Add : <i className="edit icon"></i>
          </button>
          <img className="img" src={list} alt="hello!!"></img>
        </div>
        <div className="content">
          <div className="span">
            <u>Task List</u>
            <div className="list">
              <AddTask notes={data} del={delNote} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
