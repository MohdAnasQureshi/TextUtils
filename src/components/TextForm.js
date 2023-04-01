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
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#254255" : "white",
  };

  // const [myStyle, setmyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });

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
        <div className="container" style={{display:"flex" , alignItems:"center",flexDirection: "row", alignContent: "center", justifyContent: "center", flexWrap:"wrap"}}>
          <button
            disabled={Text.length === 0}
            className="btn btn-primary mx-3 my-2"
            onClick={handleUpClick}
             
          >
            Convert to UpperCase
            {/* <img
              src="up.png"
              style={{
                height: "25px",
                width: "25px",
                background: "white",
                borderRadius: "5px",
                marginLeft: "10px",
              }}
              alt="img"
            ></img> */}
          </button>

          <button
            disabled={Text.length === 0}
            className="btn btn-primary mx-3 my-2 "
            onClick={handleLoClick}
          >
            Convert to Lowercase
            {/* <img
              src="lo.png"
              style={{
                height: "25px",
                width: "25px",
                background: "white",
                borderRadius: "5px",
                marginLeft: "10px",
              }}
              alt="img"
            ></img> */}
          </button>
          <button
            disabled={Text.length === 0}
            className="btn btn-primary mx-3 my-2"
            onClick={ClearText}
          >
            Clear Text
            {/* <img
              src="clear.png"
              style={{
                height: "25px",
                width: "25px",
                background: "white",
                borderRadius: "5px",
                marginLeft: "10px",
              }}
              alt="img"
            ></img> */}
          </button>

          <button
            disabled={Text.length === 0}
            className="btn btn-primary mx-3 my-2"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
            {/* <img
              src="space.png"
              style={{
                height: "25px",
                width: "28px",
                background: "white",
                borderRadius: "5px",
                marginLeft: "10px",
              }}
              alt="img"
            ></img> */}
          </button>
          <button
            disabled={Text.length === 0}
            className="btn btn-primary mx-3 my-2"
            onClick={CopyText}
          >
            Copy Text
            {/* <img
              src="copy.png"
              style={{
                height: "25px",
                width: "25px",
                background: "white",
                borderRadius: "5px",
                marginLeft: "10px",
              }}
              alt="img"
            ></img> */}
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div
          className="container my-4"
          style={{
            border:
              props.mode === "dark" ? "2px solid white" : "2px solid #dee2e6",
            borderRadius: "5px",
          }}
        >
          <h2 className="my-3">Your Text Summary</h2>

          <table
            className="table"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            <thead>
              <tr>
                <th scope="col" style={{ textAlign: "center" }}>
                  Words
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Characters
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Time to read
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "center" }}>
                  {
                    Text.split(/\s+/).filter((element) => {
                      return element.length !== 0;
                    }).length
                  }
                </td>
                <td style={{ textAlign: "center" }}>{Text.length}</td>
                <td style={{ textAlign: "center" }}>
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
        <div
          className="container"
          style={{
            border:
              props.mode === "dark" ? "2px solid white" : "2px solid #dee2e6",
            borderRadius: "5px",
          }}
        >
          <h2 className="my-4">Preview</h2>

          <p>{Text.length > 0 ? Text : "Nothing to preview!!"}</p>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                Analyze your Text
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Textutils gives you a way to analyze your text quickly and
                efficiently, be it word count, character count.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                Free to Use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Textutils is a free character counter tool that provides instant
                character count & word count statistics for a given text.
                Textutils reports the number of words and characters. Thus it is
                suitable for writing text with word/character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                Browser Compatible
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browser such as
                Chrome, Firefox, Internet Explorer, Safari, Opera.It suits to
                count characters in facebook, blog, books, excel document, pdf
                documents, essays etc.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                style={myStyle}
              >
                Created By - Mohd Anas Qureshi
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                An Aspiring Web App Developer, who has completed various
                playlists of infamous youtube channel codewithharry like web
                development course, javascript course and currently learning
                React.js.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
                style={myStyle}
              >
                Contact - qureshianas471@gmail.com | +91 790 6997 224
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Mobile No.: +91 790 6997 224 | email: qureshianas471@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
