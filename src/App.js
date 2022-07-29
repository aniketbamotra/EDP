import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [predictData, setPredictData] = useState({
    input: [32, 76],
    prediction: 5.34,
  });

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    try {
      const response = await axios.get(
        "https://script.google.com/macros/s/AKfycby3HH-Xlm62kFHF5JOtlKQPozTQX-9IeeKbLNo7XcVj-u4MOuQeXxSPWQO4744XMGI3Vw/exec"
      );
      console.log(response);
      setPredictData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header>
        <h1 className="logo serif">Orange's Shelf-life Predictor.</h1>
        <div className="divider"></div>
      </header>
      <div className="prediction">
        <h4 className="desc-text sans">Remaining shelf-life of orange</h4>
        <h1 className="ml-data serif">
          {predictData.prediction.toFixed(2)} Days
        </h1>
      </div>
      <div className="collected-data">
        <div className="temp">
          <h4 className="cd-text sans">Current Temperature</h4>
          <h1 className="cd-data serif">{predictData.input[0]} &#x2103;</h1>
        </div>
        <div className="humid">
          <h4 className="cd-text sans">Relative Humidity</h4>
          <h1 className="cd-data serif">{predictData.input[1]}%</h1>
        </div>
      </div>
      <footer>
        <div className="ft-text sans">Designed by Aniket Bamotra.</div>
      </footer>
    </div>
  );
}

export default App;
