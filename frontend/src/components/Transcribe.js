import React, { useState, useRef } from "react";
import axios from "axios";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { FaMicrophoneSlash } from "react-icons/fa";

function Transcribe() {
  const [recording, setRecording] = useState(false);
  const [translation, setTranslation] = useState("tete");
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
    <div className="transcribe">
      <div className="insert-container">
        <div className="audio-insert">
          <div>
            <label for="file" class="labelFile">
              <p className="flex-col items-center">
                <span>
                  drag and drop your file here or click to select a file!
                </span>
                <MdOutlineFileUpload className="uploadIcon" />
              </p>
            </label>

            <input
              class="input"
              name="text"
              id="file"
              type="file"
              accept="audio/*, video/*"
              onChange={handleFileUpload}
            />
          </div>
          <div className="button-container">
            <button
              className="audio-button"
              onClick={() => {
                recording ? stopRecording() : startRecording();
                setRecording(!recording);
              }}
            >
              {recording ? (
                <>
                  <FaMicrophone className="record-button" /> Record
                </>
              ) : (
                <>
                  <FaMicrophoneSlash className="record-button" />
                  Stop Recording
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="translate-container">
        <p className="translation-output">
          {translation && <p>{translation}</p>}
        </p>
        <div className="button-container">
          <button className="audio-button" onClick={() => setTranslation("")}>
            Clear
          </button>
        </div>
      </div>
      {/* <span>Test2</span>
      {transcription && <p>Transcription: {transcription}</p>} */}
    </div>
  );
}

export default Transcribe;
