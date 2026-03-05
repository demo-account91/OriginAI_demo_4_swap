# OriginAI_demo_4_swap

OriginAI is a **full-stack prototype for AI content detection and digital forensics**.
It allows users to verify whether **text, audio, images, or videos are AI-generated**, helping combat deepfakes, synthetic media, and AI-based scams.

---

# Project Structure

```
OriginAI_demo_4_swap/
│
├── backend/
│   ├── main.py
│   ├── detectors/
│   │   ├── text_detector.py
│   │   ├── audio_detector.py
│   │   ├── image_detector.py
│   │   ├── video_detector.py
│   ├── requirements.txt
│
├── frontend/
│   ├── assets/
│   │   ├── Images/
│   │   │   └── BACKGROUND_IMAGE.png
│   │   │
│   │   ├── Logos/
│   │   │   ├── ORIGINAI.png
│   │   │   ├── TEXT_DETECTOR.jpeg
│   │   │   ├── AUDIO_DETECTOR.jpeg
│   │   │   ├── PHOTO_DETECTOR.jpeg
│   │   │   └── VIDEO_DETECTOR.jpeg
│   │
│   ├── index.html
│   ├── text.html
│   ├── audio.html
│   ├── photo.html
│   ├── video.html
│   ├── style.css
│   ├── script.js
│
└── README.md
```

---

# Features

### Text Detector

* Paste or type text
* Detects **AI-generated probability**
* Returns **plagiarism percentage**

### Audio Detector

* Upload audio file or record audio
* Detects **AI voice cloning / synthetic speech**

### Photo Detector

* Upload images
* Detects **GAN or diffusion generated images**

### Video Detector

* Upload videos
* Detects **deepfake manipulation artifacts**

---

# How to Run the Project

## 1. Start the Backend

Open terminal and navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the FastAPI server:

```bash
python main.py
```

The backend API will run at:

```
http://127.0.0.1:8000
```

---

# 2. Start the Frontend

Navigate to the frontend folder:

```bash
cd frontend
```

Run a local server:

```bash
python -m http.server 5500
```

Open in browser:

```
http://localhost:5500
```

Then open:

```
index.html
```

⚠️ Make sure the **backend server is running** before using the detectors.

---

# Hackathon Prototype Note

OriginAI is built as a **hackathon demonstration prototype**.

The current detectors simulate AI detection logic to demonstrate:

* Multi-modal AI forensics
* Content verification workflows
* Scalable architecture for real AI models

---

# Future Improvements

* Integration of **real deepfake detection models**
* **Audio deepfake detection using ML**
* **Image GAN detection models**
* **Metadata & EXIF analysis**
* **AI scam detection module**
* **Blockchain proof of content origin**

---

# Built For

**AI Forensics | Deepfake Detection | Hackathon Prototype**

OriginAI demonstrates how AI can help **protect digital authenticity in the era of generative media.**
