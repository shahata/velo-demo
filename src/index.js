import ReactDOM from "react-dom/client";
import { Button, Text, Container, TextInput } from "./components";
import { Velo, initProps } from "./velo";
import runUserCode from "./user-code";

initProps({
  "#title": { text: "Hello, World!" },
  "#increment": { label: "Increment Counter" },
  "#decrement": { label: "Decrement Counter" },
  "#counter": { text: "0" },
});
runUserCode();

function App() {
  return (
    <>
      <Velo selector="#container" element={Container}>
        <Velo selector="#title" element={Text} />
      </Velo>
      <Velo selector="#increment" element={Button} />
      <Velo selector="#decrement" element={Button} />
      <Velo selector="#counter" element={Text} />
      <Velo selector="#input" element={TextInput} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
