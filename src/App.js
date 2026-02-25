import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

function App() {
  const [exercise, setExercise] = useState(null);
  const [type, setType] = useState(null);

  if (type === "repetition") {
    return <RepetitionExercise name={exercise} />;
  }

  if (type === "duration") {
    return <DurationExercise name={exercise} />;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Exercise Menu</h1>

      <br />

      <button onClick={() => {
        setExercise("Push Ups");
        setType("repetition");
      }}>
        Push Ups
      </button>

      <br /><br />

      <button onClick={() => {
        setExercise("Running");
        setType("duration");
      }}>
        Running
      </button>

      <br /><br />

      <button onClick={() => {
        setExercise("Plank");
        setType("duration");
      }}>
        Plank
      </button>
    </div>
  );
}

export default App;