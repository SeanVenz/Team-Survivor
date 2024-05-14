from transformers import BertTokenizer, BertForSequenceClassification
from torch.utils.data import DataLoader, Dataset
import speech_recognition as sr
import pandas as pd
import torch.nn as nn
from sklearn.model_selection import train_test_split
from torch.nn.utils.rnn import pad_sequence
from flask import Flask, request, jsonify
from flask_cors import CORS
import speech_recognition as sr
from pydub import AudioSegment
from mtranslate import translate as mtranslate

app = Flask(__name__)
CORS(app)

# Load the fine-tuned BERT tokenizer for Cebuano to English translation (uncomment after training)
# tokenizer = BertTokenizer.from_pretrained("./fine_tuned_bert_modelCeb-Eng")

# Load the fine-tuned BERT model for Cebuano to English translation
# model = BertForSequenceClassification.from_pretrained("./fine_tuned_bert_modelCeb-Eng")

#translate the bisaya audio to english
def translate_text(text, target_language='en'):
    try:
        translated_text = mtranslate(text, target_language)
        return translated_text
    except Exception as e:
        print(f"Translation failed: {e}")
        return None

#transcribe the audio received from file
def transcribe_audio(audio_file):
    recognizer = sr.Recognizer()
    audio = AudioSegment.from_file(audio_file)
    audio.export('converted_audio.wav', format='wav')
    
    with sr.AudioFile('converted_audio.wav') as source:
        audio = recognizer.record(source)  # Read the entire audio file
    try:
        transcription = recognizer.recognize_google(audio)
        return transcription
    except sr.UnknownValueError:
        print("Could not understand the audio")
    except sr.RequestError as e:
        print(f"Could not request results {e}")

    return None

#API to connect to frontend
@app.route('/translate', methods=['POST'])
def translate_audio():
    if 'audio' not in request.files:
        return jsonify({'error': 'No audio file provided'}), 400
    
    audio_file = request.files['audio']
    transcription = transcribe_audio(audio_file)
    if not transcription:
        return jsonify({'error': 'Transcription failed'}), 500

    translation = translate_text(transcription)
    if not translation:
        return jsonify({'error': 'Translation failed'}), 500

    return jsonify({'transcription': transcription, 'translation': translation}), 200

if __name__ == '__main__':
    app.run(debug=True)
