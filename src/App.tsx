import { useRef, useState } from 'react';
import './App.css' 
import './Main.scss'; //@ts-ignore
import MusicAudio from './assets/to-someday-being-near-again.m4a';
import Cover from './assets/Cover-1.png';

function App() {
  const audio = useRef<HTMLAudioElement | null>(null);

  const [ paused, setPaused ] = useState(true);

  // Event handler for the play event
  const handlePlay = () => {
    setPaused(false);
  }

  // Event handler for the pause event
  const handlePause = () => {
      setPaused(true);
  }

  return (
    <>
      <div id="Main">
        <div id="PlayerWrapper">
          <div id="Disk">
            <h2>to someday being near again</h2>
            <img className={`${paused ? '' : 'spin'}`} src={Cover} alt="Cover image - girl and boy sitting back-to-back in a grassy area." />
          </div>
          <div id="Controls">
              <span>a polyphonic mixtape by adam davis</span>
              <div style={{marginBottom: "1rem"}}></div>
              <audio ref={audio} controls onPlay={handlePlay} onPause={handlePause}>
                <source src={MusicAudio} type="audio/mp4" />
              </audio>
          </div>
        </div>

        <div id="Back">
          <h3 style={{margin: 0}}>Thanks for listening</h3>
            <p style={{margin: 0, marginTop: ".5rem"}}>Back to <a href="https://adams.land">adams.land</a>?</p>
        </div>
      </div>
    </>
  )
}

export default App
