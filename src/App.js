import { React, useState } from 'react';
import axios from 'axios'

function App() {
  const [querry, getquerry] = useState("")
  const [result, getresult] = useState("")
  const [iD, getiD] = useState("")

  let url = `https://vidclouds.us/${iD}.html`
  const thecall = async (querry) => {
    const response = await axios.get(`https://www.omdbapi.com/?t=${querry}&apikey=35a08f2c`);
    getresult(response.data)
    getiD(response.data.imdbID)
    console.log(result);
    // getvideo();

  }

  return (
    <div className="App">
      <center><h1>Find Your Movie</h1>
        <input type="text" onChange={(e) => {
          getquerry(e.target.value);
          console.log(querry);
        }} />
        <button onClick={() => thecall(querry)}>Search</button>
        <h2><a href={url}>{result.Title}</a></h2>
      </center>
    </div>
  );
}

export default App;
