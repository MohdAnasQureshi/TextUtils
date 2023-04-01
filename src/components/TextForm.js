import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showalert("Converted to upper case", "success");
  };
  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showalert("Converted to lower case", "success");
  };

  const ClearText = () => {
    let newText = "";
    setText(newText);
    props.showalert("Text cleared", "success");
  };

  const CopyText = () => {
    navigator.clipboard.writeText(Text);
    // document.getSelection().removeAllRanges(); to deselect the text
    props.showalert("Copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("Extra spaces removed", "success");
  };

  const [Text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#254255",
              color: props.mode === "dark" ? "white" : "#042783",
            }}
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className="container" style={{ margin: "auto" }}>
          <button
            disabled={Text.length === 0}
            className="btn btn-primary mx-3 my-2"
            onClick={handleUpClick}
          >
            Convert to UpperCase
            <img
              src="up.png"
              style={{
                height: "25px",
                width: "25px",
                background: "white",
                borderRadius: "5px",
                marginLeft: "10px",
              }}
              alt="img"
            ></img>
          </button>

          <button
            disabled={Text.length === 0}
            className="btn btn-primary mx-3 my-2 "
            onClick={handleLoClick}
          >
            Convert to Lowercase
            <img
              src="lo.png"
              style={{
                height: "25px",
                width: "25px",
                background: "white",
                borderRadius: "5px",
                marginLeft: "10px",
              }}
              alt="img"
            ></img>
          </button>
          <button
            disabled={Text.length === 0}
            className="btn btn-primary mx-3 my-2"
            onClick={ClearText}
          >
            Clear Text
            <img
              src="clear.png"
              style={{
                height: "25px",
                width: "25px",
                background: "white",
                borderRadius: "5px",
                marginLeft: "10px",
              }}
              alt="img"
            ></img>
          </button>

          <button
            disabled={Text.length === 0}
            className="btn btn-primary mx-3 my-2"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
            <img
              src="space.png"
              style={{
                height: "25px",
                width: "28px",
                background: "white",
                borderRadius: "5px",
                marginLeft: "10px",
              }}
              alt="img"
            ></img>
          </button>
          <button
            disabled={Text.length === 0}
            className="btn btn-primary mx-3 my-2"
            onClick={CopyText}
          >
            Copy Text
            <img
              src="copy.png"
              style={{
                height: "25px",
                width: "25px",
                background: "white",
                borderRadius: "5px",
                marginLeft: "10px",
              }}
              alt="img"
            ></img>
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black"}}
      >
        <div className="container my-4" style={{border: props.mode==='dark'?'2px solid white':'2px solid #dee2e6',borderRadius:'5px'}} >
        <h2 className="my-3" >Your Text Summary</h2>

        <table className="table" style={{ color: props.mode === "dark" ? "white" : "black" }}>
          <thead>
            <tr>
              <th scope="col"style={{textAlign:'center'}} >Words</th>
              <th scope="col" style={{textAlign:'center'}} >Characters</th>
              <th scope="col" style={{textAlign:'center'}} >Time to read</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{textAlign:'center'}}>
                {
                  Text.split(/\s+/).filter((element) => {
                    return element.length !== 0;
                  }).length
                }
              </td>
              <td style={{textAlign:'center'}}>{Text.length}</td>
              <td style={{textAlign:'center'}}>
                {0.008 *
                  Text.split(/\s+/).filter((element) => {
                    return element.length !== 0;
                  }).length *
                  60}{" "}
                seconds
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className="container" style={{border: props.mode==='dark'?'2px solid white':'2px solid #dee2e6',borderRadius:'5px'}}>
        <h2 className="my-4">Preview</h2>

        <p>{Text.length > 0 ? Text : "Nothing to preview!!"}</p></div>
      </div>
    </>
  );
}
