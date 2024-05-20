# <b> Transcribing Bisaya Spoken Words into English: Fine-tuning BERT Model for Translated Video Transcription </b>

Transcription plays a crucial role in various fields such as language research, education, and accessibility. However, transcribing spoken words from one language to another accurately and efficiently remains a challenging task, especially for languages with limited available resources. In this research, we propose a methodology for transcribing Bisaya spoken words into English by simply fine-tuning BERT Model. 

## <b> BERT Model </b>

The BERT, which stands for Bidirectional Encoder Representations from Transformers, is a pretraining approach that uses an LM goal and a Transformer encoder architecture. BERT's full potential can only be realized using a pretraining-fine-tuning paradigm, in which the model is first trained on a large-scale unlabeled text dataset, and then all/some parameters are fine-tuned on a labeled dataset for the downstream job.

The BERT model was first used primarily for NLP tasks, such as token-level and sequence-level categorization, question answering, document summarization, information retrieval, machine translation, and so on. There have also been attempts to merge BERT into ASR including restoring and creating soft labels for training. This section covers the fundamentals of BERT.

### <b> Fine-Tuning BERT MODEL </b>

![image](https://github.com/SeanVenz/Team-Survivor/assets/111742763/81c39e7a-a19c-4b44-be59-6c35c2efe9ed)

Since BERT can mimic many downstream tasks—whether they entail a single text or text pairs—by swapping out the necessary inputs and outputs, fine-tuning is simple thanks to the Transformer's self-attention mechanism. It is typical practice for text pair applications—like those of Parikh et al. (2016) and Seo et al. (2017)—to individually encode text pairs before implementing bidirectional cross-attention. As encoding a concatenated text pair with self-attention effectively incorporates bidirectional cross-attention between two sentences, BERT instead uses the self-attention mechanism to unify these two stages

## <b> Result and Discussion </b>
The experimental methodology facilitated a comprehensive assessment of three models—BERT, Distil-Whisper, and Helsinki-NLP—for transcribing Bisaya speech into English within video contexts. After rigorous data collection, model fine-tuning, and evaluation, the BERT model demonstrated the highest accuracy, exceeding 85%, compared to Distil-Whisper and Helsinki-NLP, which were below 50%. This superior performance is attributed to the robust fine-tuning process tailored to capture the nuances of Bisaya speech. An API was developed using Python to incorporate the trained BERT model, providing a streamlined mechanism for transcribing Bisaya speech into English and offering flexibility in input methods. Additionally, a user-friendly frontend interface was created to complement the API, enabling users to upload audio or video files for transcription or initiate a recording directly within the interface. Upon completion of the recording, users receive the translated transcription promptly, enhancing the overall user experience.

![image](https://github.com/SeanVenz/Team-Survivor/assets/111742763/177431c5-09ab-4efb-a4c3-08857cc1f4df)

The provided spreadsheet contains valuable linguistic data, including file names, transcriptions, and translations. Each row corresponds to a unique file, identified by a specific name, which likely contains audio recordings or written texts. Central to the spreadsheet is the transcription column, which features text in a non-English language. 

![image](https://github.com/SeanVenz/Team-Survivor/assets/111742763/5f52f58a-e2f7-4160-8932-add7d16b27e3)

This website is dedicated to improving the translation of Bisaya spoken words into English by leveraging advanced BERT models. The goal is to make videos containing Bisaya speech more accessible and comprehensible to a wider audience by ensuring accurate translations. The content on the webpage emphasizes the importance of accurate translation in bridging language gaps, particularly in educational and professional contexts where understanding spoken Bisaya is crucial. It serves as a platform for both linguistic research and practical application, helping users to transcribe and translate spoken Bisaya into English efficiently. 

## <b> Running the website </b>
To set up the project, follow these steps:

1. <b> Make sure to Install Required Python Packages </b>
  ```
  pip install transformers torch pandas scikit-learn flask flask-cors SpeechRecognition pydub
  ```
2. <b> Set up the Frontend </b>
  ```
  cd frontend
  npm install
  npm start
  ```
3. <b> Run the Flask Application </b>
  ```
  python3 -u "/home/sean/Desktop/Repositories/Team-Survivor/app.py"
  ```


## Helpful Sources
Link for Helsinki Model: https://github.com/Helsinki-NLP/Tatoeba-Challenge

Link for Whisper Model: https://huggingface.co/specccccc/whisper-small-hi

Link for another repository: https://github.com/EstrellaAbueva/TeamSurvivor_research

Link for the Audio Files: https://huggingface.co/datasets/ahoka/ceb-eng
