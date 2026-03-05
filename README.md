# OriginAI_demo_4_swap

OriginAI is a full-stack prototype designed for AI content detection and digital forensics. This tool helps users verify the authenticity of text, audio, images, and videos in an era of increasing synthetic media.

## Project Structure

- **frontend/**: Vanilla HTML, CSS, and JS interface.
- **backend/**: FastAPI powered Python server with simulated detection logic.
- **backend/detectors/**: Specialized modules for different media types.

## Features

1. **Text Detector**: Analyzes text for AI-generated patterns and plagiarism.
2. **Audio Detector**: Detects voice cloning and deepfake audio (supports live recording).
3. **Photo Detector**: Identifies GAN and Diffusion model signatures in images.
4. **Video Detector**: Scans videos for deepfake artifacts.

## How to Run

### Backend
1. Navigate to the `backend/` directory.
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the server:
   ```bash
   python main.py
   ```
   The API will be available at `http://127.0.0.1:8000`.

### Frontend
1. Open `frontend/index.html` in any modern web browser.
2. Ensure the backend is running to enable the detection features.

## Hackathon Explanation
This project serves as a **functional prototype** for hackathon demonstrations. The current "forensics" logic uses randomized simulation to represent detection results. 

## Future Upgrades
- **Real ML Models**: Integrate HuggingFace Transformers, OpenAI's Whisper, and specialized deepfake detection models (like MesoNet or EfficientNet).
- **Metadata Analysis**: Extract and verify EXIF data and digital signatures.
- **Blockchain Verification**: Store original content hashes on-chain for immutable proof of origin.
