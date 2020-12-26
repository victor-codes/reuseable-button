import React from "react";
import { Icon } from "./assets/icon/Cart";

export default function Button(props) {
  return (
    <div className="group">
      <div>
        <p className={props.state}>{props.name}</p>
        <button
          className={`${props.variant} ${props.disabled} ${props.size} ${props.color}`}
          disabled={props.disabled}
        >
          {props.startIcon ? <Icon /> : false}
          {props.value ? props.value : "Default"}
          {props.endIcon ? <Icon /> : false}
        </button>
      </div>
    </div>
  );
}
