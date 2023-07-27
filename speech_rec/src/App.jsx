import React, { useState } from "react";
import './App.css'
import SpeechRecognition , {useSpeechRecognition} from 'react-speech-recognition'
import useClipboard from 'react-use-clipboard'


function App() {
  const [textToCopy, setTextToCopy] = useState()
  const [isCopied, setCopied] = useClipboard(textToCopy)
  const startListening = () => SpeechRecognition.startListening({continuous:true, language: 'en-IN'})
  const {transcript, browserSupportsSpeechRecognition} = useSpeechRecognition()
  if(!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <div className="container">
      <h2>Talk 2 Text</h2>
      <br />
      <p>
        An application that converts speech from the microphone to text and makes
        it available for you to copy. To copy, just click on the white note-box after
        you finish speaking and then click on "Copy to Clipboard" button. Click on browser refresh button 
        if you want to restart the process. Use Google Chrome for best experience.
      </p>

      <div className="main-content" onClick={()=>setTextToCopy(transcript)}>
        {transcript}
      </div>
      <div className="btn-style">
        <button onClick ={setCopied}>
          {isCopied ? "Copy to Clipboard" : "Copy to Clipboard"} </button>
        <button onClick={startListening}>Start Listening</button>
        <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
      </div>
    </div>
  );
}

export default App;
