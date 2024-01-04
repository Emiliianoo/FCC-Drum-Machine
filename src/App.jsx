import { useState } from 'react'
import './App.css'
import audios from './audios'

function App() {

  const [currentAudio, setCurrentAudio] = useState('')

  function playSound(audio) {
    return () => {
      const audioElement = document.getElementById(audio.key)
      if(audioElement) {
        audioElement.play()
        setCurrentAudio(audio.name)
      }
    }
  }

  document.addEventListener('keydown', (e) => {
    const audio = audios.find(audio => audio.key === e.key.toUpperCase())
    if(audio) {
      const audioElement = document.getElementById(audio.key)
      if(audioElement) {
        audioElement.play()
        setCurrentAudio(audio.name)
      }
    }
  })

  return (
    <>
      <h1>Drum Machine</h1>
      <p>By Emiliano</p>
      <div id="drum-machine">
        <div id="display">
          <div className="pads">
          {audios.map((audio) => {
            return (
              <div className="drum-pad" id={audio.name} onClick={playSound(audio)}>
                {audio.key}
                <audio className="clip" id={audio.key} src={audio.clip}></audio>
              </div>
            )
          })}
          </div>
          <p className='current-note'>{currentAudio}</p>
        </div>
      </div>
    </>
  )
}

export default App
