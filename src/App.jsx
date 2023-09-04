import "./App.css";

import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
function App() {
  return (
    <div className="App">
      <ButtonComponent btnText="clicca qui" />
      <ImageComponent src="https://images7.alphacoders.com/352/352490.jpg" alt="Tramonto img" />
    </div>
  );
}

export default App;
