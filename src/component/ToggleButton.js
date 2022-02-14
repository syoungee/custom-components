import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        defaultChecked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && "#401ac6" }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

const Toggle = () => {
  const [isOn, setIsOn] = useState(true);

  return (
    <div>
      <ToggleButton isOn={isOn} handleToggle={() => setIsOn(!isOn)} />
      <>{isOn ? "Toggle Switch ON" : "Toggle Switch OFF"}</>
    </div>
  );
};

export default Toggle;
