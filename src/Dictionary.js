import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [definition, setDefinition] = useState({});
  const [loaded, setLoaded] = useState(false);

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiKey = "8a74ad5eo45tde558fe05997d33ec4b6";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setDefinition(response.data);
  }

  function findWord(event) {
    event.preventDefault();
    search();
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="header">
          <h1>
            <a href="./">DICTIONARY</a>
          </h1>
          <p>What definition are you looking for?</p>
          <form onSubmit={findWord}>
            <input
              className="searchbar"
              type="search"
              placeholder="e.g. water"
              onChange={updateWord}
            />
            <input type="submit" value="Search" />
          </form>
        </section>
        <Results definition={definition} />
      </div>
    );
  } else {
    load();
    return "loading..";
  }
}
