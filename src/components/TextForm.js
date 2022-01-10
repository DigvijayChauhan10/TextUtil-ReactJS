import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleUpCase = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
  };
  const handleLoCase = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };
  const handleClear = () => {
    let clearText = "";
    setText(clearText);
  };
  const handleCopy = () => {
    var Text = document.getElementById("myBox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
  };
  const handleRemoveSp = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3 my-2">
          <textarea
            id="myBox"
            value={text}
            onChange={handleOnChange}
            className="form-control"
            rows="8"
            placeholder="Enter Your Text Here..."
          ></textarea>
        </div>
        <button onClick={handleUpCase} className="btn btn-primary mx-1">
          Convert To UpparCase
        </button>
        <button onClick={handleLoCase} className="btn btn-primary mx-1">
          Convert To LowerCase
        </button>
        <button onClick={handleClear} className="btn btn-primary mx-1">
          Clear
        </button>
        <button onClick={handleCopy} className="btn btn-primary mx-1">
          Copy To Clipboard
        </button>
        <button onClick={handleRemoveSp} className="btn btn-primary mx-1">
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-5">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words {text.length} Characters.
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read.</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
