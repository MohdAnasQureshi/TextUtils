// import { useState } from "react";

export default function About(props) {

  let myStyle={
    color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'#254255':'white'
  }

  // const [myStyle, setmyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });

  // const [btnText, setbtntext] = useState("Enable Dark Mode");

  // const togglestyle = () => {
  //   if (myStyle.color === "white") {
  //     setmyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });

  //     setbtntext("Enable Dark Mode");
  //   } else {
  //     setmyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setbtntext("Enable light Mode");
  //   }
  // };

  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
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
              Textutils gives you a way to analyze your text quickly and efficiently, be it word count, character count.
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
            Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.   
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
            This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera.It suits to count characters in facebook, blog, books, excel document, pdf documents, essays etc.
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
            An Aspiring Web App Developer, who has completed various playlists of infamous youtube channel codewithharry like web development course, javascript course and currently learning React.js.
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
            Mobile No.: +91 790 6997 224 | 
            email: qureshianas471@gmail.com 
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
