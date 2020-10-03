import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const get = async () => {
    try {
      const response = await axios.get(
        "http://49.142.51.60:8000/consignment/hello",
        null,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      console.log(response.headers);
    } catch (error) {
      console.error(error);
    }
  };
  // useEffect(() => {
  //   document.cookie = "team=혁훈님 ㅎㅇ";
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and sㅁㄴㅇㅇㅁㅇㄴave to reload.
        </p>
        <button onClick={() => get()}>페치</button>
      </header>
    </div>
  );
}

export default App;
