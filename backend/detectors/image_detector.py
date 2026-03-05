import hashlib
from PIL import Image
import io

def analyze_image(file_contents: bytes):

    try:
        image = Image.open(io.BytesIO(file_contents))
        exif = image.getexif()
        has_metadata = bool(exif)
    except:
        has_metadata = False

    file_size = len(file_contents)
    hash_val = int(hashlib.md5(file_contents).hexdigest(), 16)

    score = (hash_val % 100 + file_size % 100) / 2

    if not has_metadata:
        score += 10
    else:
        score -= 10

    score = max(0, min(score, 100))

    return {
        "ai_generated": score > 50,
        "confidence": round(score, 2),
        "metadata_present": has_metadata
    }