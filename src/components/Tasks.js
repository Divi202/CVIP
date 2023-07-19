import React, { useState } from "react";
export default function Tasks(props) {
  
  const [isChecked, setIsChecked] = useState(false);

  const handleRemove = (event) => {
    console.log("Removing:", props.td);
    const taskItem = event.currentTarget.closest(".taskitems");
    if (taskItem) {
      const parent = taskItem.parentElement;
      parent.removeChild(taskItem);
    }
  };

  const handleChange = (event) => {
    if (event.target.checked) {
      console.log(props.td+": ✅ Checkbox is checked");
      <del>props.td</del>
    } else {
      console.log(props.td+":⛔️ Checkbox is NOT checked");
    }
    setIsChecked((current) => !current);
  };

  return (
    <ul className="list-group mb-0 taskitems">
      <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
        <div className="d-flex align-items-center ">
          <input
            className="form-check-input me-2"
            type="checkbox"
            onChange={handleChange}
            value={isChecked}
            aria-label="..."
          />
          {isChecked ? <del>{props.td}</del> : props.td}
        </div>
        <a
          href="#!"
          data-mdb-toggle="tooltip"
          title="Remove item"
          onClick={handleRemove}
        >
          <i className="fas fa-times text-primary"></i>
        </a>
      </li>
    </ul>
  );
}
