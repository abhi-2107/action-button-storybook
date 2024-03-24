import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./mybutton.css";

function MyButton({ children, type, icon, display, size, disable,onClick }) {
  return (
    <button
      type="button"
      className={classNames(
        "btn",
        { [`btn-${type}`]: true },
        {[`size-${size}`]: true},
        {[`btn-${type}-disabled`] : disable == true},
      )}
      onClick={onClick}
      disabled = {disable}
    >
      {display == "text only" || (
        <i
          className={classNames(
            "ph",
            "mr-2",
            { [`${icon}`]: true },
            { [`icon-${size}`] : true }
          )}
        ></i>
      )}
      {display == "icon only" || children}
    </button>
  );
}

export default MyButton;

