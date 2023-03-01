import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="./">
          <img src={logo} alt="logo" className="img-fluid" />{" "}
        </a>
      </header>
      <main>
        <Dictionary defaultWord="dictionary" />
      </main>
      <footer className="text-center mt-4">
        Coded by Maja Piszczek,{" "}
        <a
          href="https://github.com/majapiszczek/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          open source
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
