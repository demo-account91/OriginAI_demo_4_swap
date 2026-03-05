import hashlib

def analyze_video(file_contents: bytes):
    """
    Prototype AI video detection.

    Logic:
    0 - 30  -> Real Video
    31 - 99 -> AI Generated
    """

    # Create hash of video
    video_hash = hashlib.sha256(file_contents).hexdigest()

    # Convert part of hash to number
    value = int(video_hash[:8], 16)

    # Confidence score (0-99)
    confidence = value % 100

    # AI decision
    if confidence <= 30:
        ai_generated = False
        label = "Likely Real"
    else:
        ai_generated = True
        label = "Likely AI Generated"

    return {
        "prediction": label,
        "ai_generated": ai_generated,
        "confidence": confidence
    }