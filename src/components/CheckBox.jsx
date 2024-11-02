import React from "react";

export default function CheckBox({ label, ...props }) {
  return (
    <div className="form-check">
      <label>Check this</label> &nbsp;
      <input type="checkbox" {...props} />
    </div>
  );
}
