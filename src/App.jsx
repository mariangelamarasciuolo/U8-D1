import "./App.css";

import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import ImageClassComponent from "./components/ImageClassComponent";
function App() {
  return (
    <div className="App">
      <ButtonComponent btnText="clicca qui" />
      <ImageComponent
        src="https://images7.alphacoders.com/352/352490.jpg"
        alt="Tramonto img"
        title="tramonto"
        btnText="click here"
      />
      <ImageClassComponent
        src="https://th.bing.com/th/id/OIP.xaBOZBHYnT26JMSev9FH7AHaEK?pid=ImgDet&rs=1"
        alt="Bel bosco"
        className="imgBosco"
      />
    </div>
  );
}

export default App;
