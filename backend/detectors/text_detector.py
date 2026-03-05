import hashlib
import random

def analyze_text(text: str):
    if not text:
        return {"ai_generated_percentage": 0.0, "plagiarism_percentage": 0.0}

    text_hash = hashlib.md5(text.encode()).hexdigest()
    seed = int(text_hash[:8], 16)
    random.seed(seed)

    ai_generated_percentage = round(random.uniform(10.0, 95.0), 2)
    plagiarism_percentage = round(random.uniform(5.0, 50.0), 2)

    return {
        "ai_generated_percentage": ai_generated_percentage,
        "plagiarism_percentage": plagiarism_percentage
    }