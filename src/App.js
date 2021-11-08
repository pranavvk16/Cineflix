import { React, useState } from 'react';
import axios from 'axios'
import "./App.css"


function App() {
  const [querry, getquerry] = useState("")
  const [result, getresult] = useState("")
  const [iD, getiD] = useState(0)
  const [image, getimage] = useState("")

  let url = `https://vidclouds.us/${iD}.html`
  let imgurl=`http://img.omdbapi.com/?i=${iD}&apikey=35a08f2c`
  const thecall = async (querry) => {
    const response = await axios.get(`https://www.omdbapi.com/?t=${querry}&apikey=35a08f2c`);

    getresult(response.data)
    getiD(response.data.imdbID)

    console.log(result);

    const imgresponse = await axios.get(`http://img.omdbapi.com/?i=${iD}&apikey=35a08f2c`);
    getimage(imgresponse)
    // getvideo();
    console.log(image);
  }
  const cardcontent = () => {
    return (<div className="card">
      <div className="poster"><img src={imgurl} alt="poster" /></div>
      <h3>{result.Title}</h3>
      <button className="watchnow"><a href={url}>Play</a></button>
    </div>)
  }

  return (
    <div className="container"><h1>Find Your Movie</h1>
      <center><div className="search">
        <input type="text" onChange={(e) => {
          getquerry(e.target.value);
          console.log(querry);
        }} />
        <button className="searchbtn" onClick={() => thecall(querry)}>Search</button></div>
        {iD ? cardcontent() : <></>}
      </center>
    </div >
  );
}

export default App;
