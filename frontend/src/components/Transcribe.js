import React, { useState, useRef } from "react";
import axios from "axios";

function Transcribe() {
  const [translation, setTranslation] = useState("");
  const [transcription, setTranscription] = useState("");
  const mediaRecorder = useRef(null);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorder.current = new MediaRecorder(stream);
        const chunks = [];

        mediaRecorder.current.addEventListener("dataavailable", (event) => {
          chunks.push(event.data);
        });

        mediaRecorder.current.addEventListener("stop", () => {
          const blob = new Blob(chunks, { type: "audio/wav" });
          sendAudioToBackend(blob); // Send the audio blob to the backend
        });

        mediaRecorder.current.start();
      })
      .catch((error) => {
        console.error("Error accessing microphone:", error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === "recording") {
      mediaRecorder.current.stop();
    }
  };

  const sendAudioToBackend = async (audioBlob) => {
    try {
      const formData = new FormData();
      formData.append("audio", audioBlob, "recording.wav");

      const response = await axios.post(
        "http://127.0.0.1:5000/translate",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setTranscription(response.data.transcription);
      setTranslation(response.data.translation);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("audio", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/translate",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setTranscription(response.data.transcription);
      setTranslation(response.data.translation);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <input type="file" accept="audio/*" onChange={handleFileUpload} />
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      {transcription && <p>Transcription: {transcription}</p>}
      {translation && <p>Translation: {translation}</p>}
    </div>
  );
}

export default Transcribe;
