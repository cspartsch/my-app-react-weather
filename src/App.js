import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer className="footer">
          This project was coded by Carolyn Partsch and is open-sourced on{" "}
          <a href="https://github.com/cspartsch/react-weather" target="#blank">
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
