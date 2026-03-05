const API_URL = "http://127.0.0.1:8000";

// --- Text Detector ---
async function analyzeText() {
    const text = document.getElementById('textInput').value;
    if (!text || text.length < 10) {
        alert("Please enter more text for a valid analysis!");
        return;
    }

    showLoading(true);
    const formData = new FormData();
    formData.append("text", text);

    try {
        const response = await fetch(`${API_URL}/detect-text`, {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        
        document.getElementById('aiPerc').innerText = data.ai_generated_percentage + "%";
        document.getElementById('plagPerc').innerText = data.plagiarism_percentage + "%";
        document.getElementById('results').style.display = "block";
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to connect to backend. Make sure main.py is running on port 8000.");
    } finally {
        showLoading(false);
    }
}

// --- Audio Detector ---
let mediaRecorder;
let audioChunks = [];
let recordedBlob;

const recordBtn = document.getElementById('recordBtn');
if (recordBtn) {
    recordBtn.addEventListener('click', async () => {
        if (!mediaRecorder || mediaRecorder.state === "inactive") {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorder = new MediaRecorder(stream);
                audioChunks = [];
                
                mediaRecorder.ondataavailable = (event) => {
                    audioChunks.push(event.data);
                };

                mediaRecorder.onstop = () => {
                    recordedBlob = new Blob(audioChunks, { type: 'audio/wav' });
                    const audioUrl = URL.createObjectURL(recordedBlob);
                    const audio = document.getElementById('recordedAudio');
                    audio.src = audioUrl;
                    audio.style.display = "block";
                };

                mediaRecorder.start();
                recordBtn.innerText = "STOP RECORDING";
                document.getElementById('recordingStatus').style.display = "block";
            } catch (err) {
                alert("Microphone access denied or not available.");
            }
        } else {
            mediaRecorder.stop();
            recordBtn.innerText = "START RECORDING";
            document.getElementById('recordingStatus').style.display = "none";
        }
    });
}

async function analyzeAudio() {
    const audioFile = document.getElementById('audioUpload').files[0];
    const fileToUpload = audioFile || recordedBlob;

    if (!fileToUpload) {
        alert("Please upload or record an audio file!");
        return;
    }

    showLoading(true);
    const formData = new FormData();
    formData.append("file", fileToUpload, audioFile ? audioFile.name : "recorded_audio.wav");

    try {
        const response = await fetch(`${API_URL}/detect-audio`, {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        
        document.getElementById('aiStatus').innerText = data.ai_generated ? "YES (AI Detected)" : "NO (Likely Human)";
        document.getElementById('aiStatus').style.color = data.ai_generated ? "#ff4d4d" : "#00d4ff";
        document.getElementById('results').style.display = "block";
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to connect to backend.");
    } finally {
        showLoading(false);
    }
}

// --- Image Detector ---
async function analyzeImage() {
    const fileInput = document.getElementById('imageUpload');
    if (fileInput.files.length === 0) {
        alert("Please select an image!");
        return;
    }

    showLoading(true);
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    try {
        const response = await fetch(`${API_URL}/detect-image`, {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        
        document.getElementById('aiStatus').innerText = data.ai_generated ? "YES (AI Detected)" : "NO (Likely Real)";
        document.getElementById('aiStatus').style.color = data.ai_generated ? "#ff4d4d" : "#00d4ff";
        document.getElementById('results').style.display = "block";
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to connect to backend.");
    } finally {
        showLoading(false);
    }
}

// --- Video Detector ---
async function analyzeVideo() {

    const fileInput = document.getElementById("videoUpload");

    if (!fileInput.files.length) {
        alert("Please select a video!");
        return;
    }

    showLoading(true);

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    try {

        const response = await fetch(`${API_URL}/detect-video`, {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        console.log("FULL BACKEND RESPONSE:", data);

        const aiGenerated = data.result.ai_generated;
        const confidence = data.result.confidence;

        const status = document.getElementById("aiStatus");

        if (aiGenerated) {
            status.innerText = `AI Generated: YES (Confidence ${confidence}%)`;
            status.style.color = "#ff4d4d";
        } else {
            status.innerText = `AI Generated: NO (Confidence ${confidence}%)`;
            status.style.color = "#00d4ff";
        }

        document.getElementById("results").style.display = "block";

    } catch (error) {

        console.error("Error:", error);
        alert("Backend connection failed");

    } finally {

        showLoading(false);

    }
}

// --- Helpers ---
function showLoading(show) {
    const loading = document.getElementById('loading');
    if (loading) loading.style.display = show ? "block" : "none";
    const results = document.getElementById('results');
    if (results && show) results.style.display = "none";
}
