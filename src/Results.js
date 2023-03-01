import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.definition.meanings) {
    return (
      <div className="Results">
        <section className="main">
          <h2>{props.definition.word}</h2>
          <p>{props.definition.phonetic}</p>
        </section>
        <section className="definition">
          {props.definition.meanings.map(function (meaning, index) {
            return (
              <p key={index}>
                <Meaning meaning={meaning} />
              </p>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
