import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.definition.meanings) {
    return (
      <div className="Results">
        <section className="main">
          <h2>{props.definition.word}</h2>
          <p>/{props.definition.phonetic}/</p>
        </section>
        <div>
          {props.definition.meanings.map(function (meaning, index) {
            return (
              <section className="definition" key={index}>
                <p>
                  <Meaning meaning={meaning} />
                </p>
              </section>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
