import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"
import { useRef } from "react";

let refStore = {};
let propStore;

export function initProps(props) {
  propStore = makeAutoObservable(props);
}

export const Velo = observer(function ({selector, element, children}) {
  const Element = element;
  const props = propStore[selector];
  const ref = useRef(null);
  refStore[selector] = ref;
  return <Element {...props} ref={ref}>{children}</Element>;
});

export function $props(selector) {
  return propStore[selector];
}

export function $ref(selector) {
  return refStore[selector]?.current;
}
