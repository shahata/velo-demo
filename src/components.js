import { forwardRef } from "react";

export const Button = (props) => {
  return <button onClick={props.onClick}>{props.label}</button>;
}

export const Text = (props) => {
  return <span>{props.text}</span>;
}

export const Container = (props) => {
  return <div>{props.children}</div>;
}

export const TextInput = forwardRef((props, ref) => {
  return <input type="text" value={props.value} onChange={props.onChange} ref={ref} />;
});
