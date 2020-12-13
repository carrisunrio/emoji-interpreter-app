import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😞": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "⛑️": "Rescue Worker’s Helmet",
  "💄": "Lipstick",
  "💍": "Ring",
  "💼": "Briefcase",
  "🩸": "Drop of Blood"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database :(";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      {/* <div> Welcome {userInput} </div> */}
      <h1>Emoji Interpreter</h1>

      <input
        style={{ backgroundColor: "lightgray", height: "20px", width: "250px" }}
        onChange={emojiInputHandler}
      />

      <h2> {meaning} </h2>

      <h3> Emojis We Know </h3>
      <div id="list-emojis">
        {emojisWeKnow.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
