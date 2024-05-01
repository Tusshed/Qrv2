import "./App.css";
import { useState } from "react";
import QRCode from "qrcode";
function App() {
  const [url, setUrl] = useState("");
  const [dataUrl, setDataUrl] = useState("");

  const handleQRCodeGeneration = () => {
    QRCode.toDataURL(
      url,
      {
        width: 200,
        color: {
          dark: "#335383ff",
          light: "#000000ff",
        },
      },
      (err, dataUrl) => {
        if (err) return console.error(err);
        setDataUrl(dataUrl);
        console.log(url);
      }
    );
  };
  return (
    <div className="App">
      <h1>Tussh Qr Generator</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="url"
          placeholder="input link here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />

        <button type="submit" onClick={handleQRCodeGeneration}>
          Generate
        </button>
      </form>
      {dataUrl && (
        <div className="qr">
          <img src={dataUrl} alt="qrCode" />
          <div className="download">
            <a href={dataUrl} download="dataUrl.png" target="_blank">
              Download
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
