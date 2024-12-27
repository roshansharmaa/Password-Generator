import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [ele, setele] = useState("RO@7h?kUPWq/");

  let [olspasslen, newpasslen] = useState("");

  let hndonchange = (event) => {
    let inputValue = event.target.value;
    if (inputValue > 20) {
      alert("Max Limit is 20");
      newpasslen(10);
    } else {
      newpasslen(inputValue);
    }

    var demo = inputValue;
  };

  let uppercaseChars = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );
  let lowercaseChars = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );
  let numbers = Array.from({ length: 10 }, (_, i) => i.toString());
  let specialChars = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    ";",
    ":",
    '"',
    "'",
    "<",
    ">",
    ",",
    ".",
    "?",
    "/",
    "\\",
    "|",
    "`",
    "~",
  ];

  let combinedList = [
    ...uppercaseChars,
    ...specialChars,
    ...numbers,
    ...lowercaseChars,
  ];

  let status = document.querySelector(".status");
  let btn = document.querySelector("button");

  let password = "";
  let generate = () => {
    let passlen = olspasslen;

    while (passlen > password.length) {
      password += combinedList[Math.floor(Math.random() * combinedList.length)];
      if (password.length == olspasslen) {
        setele(password);
      }
    }
    let crtele = document.createElement("h4");
    crtele.innerText = "Password Generated";
    // status.append(crtele);

    if (status) {
      status.append(crtele);
    } else {
      return;
    }

    btn.disabled = true;
    setTimeout(() => {
      crtele.innerText = "";
      btn.disabled = false;
    }, 3000);
  };
  function copy() {
    var copyText = document.querySelector("#inptxt");

    copyText.select();  
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    alert("Copied the password: " + copyText.value);
  }

  return (
    <>
      <div className="container">
        <h2>Password Generator</h2>
        <div className="inps">
          <input
            type="number"
            className="inpt"
            id="inpint"
            value={olspasslen}
            onChange={hndonchange}
            placeholder="Enter Passw... Length"
          />{" "}
          <input
            type="text"
            id="inptxt"
            placeholder="Enter Some Text"
            className="inpt"
            value={ele}
            disabled
          />
        </div>

        <div className="status"></div>
        <div className="grp">
          <button onClick={generate}>Generate New</button>
          <a download>
            <button onClick={copy}>
              <i className="fa-regular fa-copy"></i>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
