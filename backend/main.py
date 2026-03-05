from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from detectors import text_detector, audio_detector, image_detector, video_detector

app = FastAPI(title="OriginAI API - AI Forensics Prototype")

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "OriginAI Backend Running"}

@app.post("/detect-text")
async def detect_text_endpoint(text: str = Form(...)):
    """
    Endpoint for AI text detection.
    Accepts text input and returns simulated AI vs human generated percentages.
    """
    result = text_detector.analyze_text(text)
    return result

@app.post("/detect-audio")
async def detect_audio_endpoint(file: UploadFile = File(...)):
    """
    Endpoint for AI audio detection.
    Accepts an audio file and returns whether it's AI generated.
    """
    file_contents = await file.read()
    result = audio_detector.analyze_audio(file_contents)
    return result

@app.post("/detect-image")
async def detect_image_endpoint(file: UploadFile = File(...)):
    """
    Endpoint for AI image detection.
    Accepts an image file and returns whether it's AI generated.
    """
    file_contents = await file.read()
    result = image_detector.analyze_image(file_contents)
    return result

@app.post("/detect-video")
async def detect_video_endpoint(file: UploadFile = File(...)):
    """
    Endpoint for AI video detection.
    Accepts a video file and returns whether it's AI generated.
    """
    file_contents = await file.read()

    result = video_detector.analyze_video(file_contents)

    return {
        "filename": file.filename,
        "result": result
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)