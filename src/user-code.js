import { $props, $ref } from "./velo";

export default function runUserCode() {
  let counter = 0;
  $props("#increment").onClick = () => {
    $props("#counter").text = ++counter;
    if (counter === 5) $ref("#input").focus();
  };
  $props("#decrement").onClick = () => {
    $props("#counter").text = --counter;
    if (counter === 5) $ref("#input").focus();
  };
}
