import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { API_KEY, BASE_URL } from './constants'
import Content from './components/Content'
import Info from './components/Info'
import styled, { keyframes } from 'styled-components'

const StyledApp = styled.div`
  background-color: lightgrey;
`


function App() {

  const [photoData, setPhotoData] = useState({});

  useEffect(() => {
    axios.get(`${BASE_URL}?date=2019-10-28&api_key=${API_KEY}`)
      .then(res => {
        setPhotoData(res.data)
      })
      .catch(err => {
        debugger
      })
  }, [])

  console.log(photoData);

  return (
    <StyledApp className="App">
      <h1>NASA PHOTO OF THE DAY</h1>
      {
        <Info date={photoData.date} title={photoData.title}/>
      }
      {
        <Content url={photoData.url} explanation={photoData.explanation} copyright={photoData.copyright}/>
      }
    </StyledApp>
  );
}

export default App;
