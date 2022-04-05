import React from "react";

const AddTask = (props) => {
  return props.notes.length !== 0 ? (
    props.notes.map((note, i) => {
      return (
        <div
          className="ui segment"
          id={i}
          key={i}
          style={{ backgroundColor: `${!(i % 2) ? "#fecaca" : "#0ea5e9"}` }}
        >
          {note}
          <button onClick={props.del}>
            <i className="trash icon" id={note}></i>
          </button>
        </div>
      );
    })
  ) : (
    <div>
      <div style={{ color: "#F6F7F2", textAlign: "center" }}>
        You don't have any tasks!
      </div>
    </div>
  );
};

export default AddTask;
