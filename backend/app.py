from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze_resume():
    resume = request.files.get('resume')
    job_desc = request.form.get('job_desc')

    print("FILES RECEIVED:", request.files)
    print("FORM RECEIVED:", request.form)
    print("Resume:", resume)
    print("Job Description:", job_desc)

    # Handle missing inputs safely
    if resume is None:
        return jsonify({"error": "Resume not uploaded"}), 400
    if not job_desc or job_desc.strip() == "":
        return jsonify({"error": "Job description is empty"}), 400

    # Simulated AI feedback
    return jsonify({"result": f"✅ Resume received for '{job_desc}'. We'll analyze it shortly."})

if __name__ == '__main__':
    app.run(debug=True)
