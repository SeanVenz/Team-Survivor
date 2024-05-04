# # from flask import Flask, request, jsonify
# # from flask_cors import CORS
# # import speech_recognition as sr
# # from googletrans import Translator
# # from pydub import AudioSegment

# # app = Flask(__name__)
# # CORS(app)
# # translator = Translator()

# # @app.route('/translate', methods=['POST'])
# # def translate_audio():
# #     print(request.files)
# #     if 'audio' not in request.files:
# #         return jsonify({'error': 'No audio file provided'}), 400
    
# #     audio_file = request.files['audio']
# #     recognizer = sr.Recognizer()

# #     # Convert audio file to PCM WAV format
# #     try:
# #         audio = AudioSegment.from_file(audio_file)
# #         audio.export('converted_audio.wav', format='wav')
        
# #         with sr.AudioFile('converted_audio.wav') as source:
# #             audio = recognizer.record(source)  # Read the entire audio file

# #         transcription = recognizer.recognize_google(audio, language="ceb-PH")
# #         translation = translator.translate(transcription, src='ceb', dest='en').text
# #         return jsonify({'transcription': transcription, 'translation': translation}), 200
# #     except sr.UnknownValueError:
# #         return jsonify({'error': 'Google Speech Recognition could not understand the audio'}), 500
# #     except sr.RequestError as e:
# #         return jsonify({'error': f'Could not request results from Google Speech Recognition service; {e}'}), 500
# #     except Exception as e:
# #         return jsonify({'error': f'Error occurred: {e}'}), 500

# # if __name__ == '__main__':
# #     app.run(debug=True)


##2nd

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import speech_recognition as sr
# from googletrans import Translator
# from pydub import AudioSegment
# from mtranslate import translate as mtranslate

# app = Flask(__name__)
# CORS(app)
# translator = Translator()

# def translate_text(text, target_language='en'):
#     try:
#         translated_text = mtranslate(text, target_language)
#         return translated_text
#     except Exception as e:
#         print(f"Translation failed: {e}")
#         return None
    
# def transcribe_audio(audio_file):
#     recognizer = sr.Recognizer()

#     # Load audio file
#     with sr.AudioFile(audio_file) as source:
#         audio = recognizer.record(source)  # Read the entire audio file

#     # Transcribe audio using Google Speech Recognition
#     try:
#         transcription = recognizer.recognize_google(audio)
#         return transcription
#     except sr.UnknownValueError:
#         print("Google Speech Recognition could not understand the audio")
#     except sr.RequestError as e:
#         print(f"Could not request results from Google Speech Recognition service; {e}")

#     return None

# def transcribe_and_translate_folder(audio_file):
#     transcription = transcribe_audio(audio_file)
#     if transcription:
#         translation = translate_text(transcription)
#     return translation


# @app.route('/translate', methods=['POST'])
# def translate_audio():
#     print(request.files)
#     if 'audio' not in request.files:
#         return jsonify({'error': 'No audio file provided'}), 400
    
#     audio_file = request.files['audio']
#     translations = transcribe_and_translate_folder(audio_file)

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, request, jsonify
from flask_cors import CORS
import speech_recognition as sr
from pydub import AudioSegment
from mtranslate import translate as mtranslate

app = Flask(__name__)
CORS(app)

def translate_text(text, target_language='en'):
    try:
        translated_text = mtranslate(text, target_language)
        return translated_text
    except Exception as e:
        print(f"Translation failed: {e}")
        return None
    
def transcribe_audio(audio_file):
    recognizer = sr.Recognizer()
    audio = AudioSegment.from_file(audio_file)
    audio.export('converted_audio.wav', format='wav')
    
    with sr.AudioFile('converted_audio.wav') as source:
        audio = recognizer.record(source)  # Read the entire audio file

    # Transcribe audio using Google Speech Recognition
    try:
        transcription = recognizer.recognize_google(audio)
        return transcription
    except sr.UnknownValueError:
        print("Google Speech Recognition could not understand the audio")
    except sr.RequestError as e:
        print(f"Could not request results from Google Speech Recognition service; {e}")

    return None

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
