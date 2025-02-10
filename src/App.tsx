import "./App.css";
import stickerGif from "./assets/sticker.gif";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <div className="gif-container">
        <img src={stickerGif} alt="sticker" />
      </div>
    </div>
  );
}

export default App;
