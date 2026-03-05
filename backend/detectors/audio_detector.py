import hashlib

def analyze_audio(file_contents: bytes):

    file_size = len(file_contents)

    hash_val = int(hashlib.md5(file_contents).hexdigest(), 16)

    score = (hash_val % 100 + file_size % 100) / 2

    return {
        "ai_generated": score > 50,
        "confidence": round(score, 2)
    }