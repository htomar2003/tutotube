import '../App.css';
import React, { useState } from 'react'
import Workflow from './Workflow';
import Error from './Error';
import Card from './Card';
import Sdata from './Sdata';
import Footer from './Footer';
import { CircularProgress } from "@mui/material";

function Home({ isLoggedIn, user }) {

  const [link, setlink] = useState();
  const [query, setquery] = useState();
  const [answer, setanswer] = useState("")
  const answerdiv = document.querySelector('.answer')
  const [messages, setMessages] = useState([
    "Loading...",
    "Transcription fetched..",
    "Processing...",
    "Fetching answer of query...",
    "Please wait...",
  ]);
  const [valid, setvalid] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [img, setimg] = useState(true);


  const main = () => {
    window.scrollTo({
      top: 400
    });
  }

  const showquery = async (e) => {
    e.preventDefault();
    if (!validateYoutubeLink(link)) {
      console.log("Link is not valid")
      setlink("");
      setvalid(true);
      setInterval(() => {
        setvalid(false);
      }, 5000)
    }
    else {
      console.log("Link is valid")
      setvalid(false);
      const querydiv = document.querySelector('.query');
      querydiv.style.display = 'flex';
    }
  }

  const handleform2 = async (e) => {
    console.log(link, query);
    e.preventDefault();
    setimg(false)
    let intervalId = setInterval(() => {
      setCurrentMessageIndex((index) => (index + 1) % messages.length);
    }, 5000);

    setTimeout(() => {
      clearInterval(intervalId);
      setanswer("Apologies for any inconvenience caused. Please refresh the webpage as we are currently working on resolving the issue you encountered.")
      console.log("Interval stopped after 15 seconds.");
      setimg(true)
    }, 25000);
    try {
      answerdiv.style.display = "flex";
      const response = await fetch("https://tutotube-backend.onrender.com/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ link, query }),
      })
      const data = await response.json();
      clearInterval(intervalId);
      setanswer(data.correctans);
      setquery("");
      setimg(true);
    } catch (error) {
      console.log(error);
      clearInterval(intervalId);
      setanswer("Error fetching answer.");
    }
  }

  function validateYoutubeLink(link) {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?youtube.com\/watch\?v=([a-zA-Z0-9_-]{11})$/;
    return youtubeRegex.test(link);
  }

  return (
    <div className="app">
      {
        valid ? (<div className='error-m'><Error message={"Youtube link is not valid"} /></div>) : (<></>)
      }
      <div className="container">
        {user ? (
          <h1 style={{ marginTop: "20px" }}>Hi, {user.name}</h1>
        ) : (
          <p></p>
        )}
        <h1 className="head">
          Meet <span style={{ color: "#ed00eb" }}>Tutotube</span>
          , your AI
          to QA with Youtube Videos<span style={{ color: "#ed00eb" }}>.</span>
        </h1>
        <button className="btn" onClick={main}>
          Try Tutotube
        </button>
      </div>
      <div className="main" id='main'>
        <p className="main-p">Paste the Youtube Video link Here</p>
        <form action="" method="get" className='main' onSubmit={showquery}>
          <input type="text" name="ytdlink" id="" value={link} className="input" placeholder="Paste the Youtube Video link here...." onChange={(e) => setlink(e.target.value)} autoComplete='off' />
          <button className='main-img'></button>
        </form>
        <div className="result">
          <div className="query">
            <p className="main-p">Enter the question from the video</p>
            <form className="form" onSubmit={handleform2}>
              <input type="text" name="query" value={query} id="" className="input" placeholder="Enter a question.... " onChange={(e) => setquery(e.target.value)} autoComplete='off' />
              {
                img ? (<button className='query-img'></button>) : (<CircularProgress color="secondary" className='query-img1' />)
              }
            </form>
          </div>
          <div className="answer">
            {
              answer ? (<div>{answer}</div>) : (<div>{messages[currentMessageIndex]}</div>)
            }
          </div>
        </div>
      </div>
      <Workflow />
      <h1 className='card-head'>Features</h1>
      <div className="card-div">
        {
          Sdata.map((val, index) => {
            return <Card
              key={index}
              imgsrc={val.img}
              heading={val.heading}
              para={val.para}
            />
          })
        }
      </div>
      <div className="head experience">
        Unleash knowledge's power with Tutuotube
        <button className="btn" onClick={main}>
          Try Tutotube
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
