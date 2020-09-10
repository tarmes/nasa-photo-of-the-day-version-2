import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { API_KEY, BASE_URL } from './constants'
import Content from './components/Content'
import Info from './components/Info'

function App() {

  const [photoData, setPhotoData] = useState({});

  useEffect(() => {
    axios.get(`${BASE_URL}?date=2020-07-16&api_key=${API_KEY}`)
      .then(res => {
        setPhotoData(res.data)
      })
      .catch(err => {
        debugger
      })
  }, [])

  console.log(photoData);

  return (
    <div className="App">
      <h1>NASA PHOTO OF THE DAY</h1>
      {
        <Info />
      }
      {
        <Content />
      }
    </div>
  );
}

export default App;
