import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./mybutton.css";

function MyButton({ children, type, icon, display, size, hover, disable }) {
  return (
    <button
      type="button"
      className={classNames(
        "btn",
        { [`btn-${type}`]: true },
        {[`size-${size}`]: true},
        {[`btn-${type}-hover`] : hover == true},
        {[`btn-${type}-disabled`] : disable == true},
      )}
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

// MyButton.PropTypes = {
//   children: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   type: PropTypes.oneOf(["small", "medium", "large"]),
//   icon: PropTypes.bool,

//   size: PropTypes.oneOf(["small", "medium", "large"]),
//   color: PropTypes.string,
// };
