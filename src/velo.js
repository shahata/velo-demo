import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"
import { useRef } from "react";

let refStore = {};
let propStore;

export function initProps(props) {
  propStore = makeAutoObservable(props);
}

export const Velo = observer(function ({selector, element: Element, children}) {
  refStore[selector] = useRef(null);
  return <Element {...propStore[selector]} ref={refStore[selector]}>{children}</Element>;
});

export function $props(selector) {
  return propStore[selector];
}

export function $ref(selector) {
  return refStore[selector]?.current;
}
