import React from "react";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import "./style.css";

export default function App() {
  const firstName = useRef();
  const button = useRef();
  const [input, setInput] = useState();
  const [data, setData] = useState();
  const [loading, setLoader] = useState();

  const onKeyDown = e => {
    if (e.key === "Enter") {
      button.current.focus();
    }
  };

  const onCallAPI = () => {
    setLoader(true);
    axios.get("https://random-data-api.com/api/users/random_user").then(res => {
      setData(res.data);
      setLoader(false);
    });
  };

  useEffect(() => {
    // firstName.current.focus();
  }, []);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      <input
        type="text"
        value={input}
        onChange={e => {
          const i = e.target.value;
          setInput(i);
        }}
        ref={firstName}
        onKeyDown={onKeyDown}
      />
      <button ref={button} onClick={onCallAPI} type="button">
        Submit
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
