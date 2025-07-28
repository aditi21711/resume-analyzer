# resume-analyzer
# AI Resume Analyzer 

A simple web app that allows users to upload their resumes and get instant AI feedback based on a provided job description.

##  Tech Stack
- **Frontend:** React.js
- **Backend:** Flask (Python)
- **Libraries:** Flask-CORS, FormData API
- **Deployment:** Local (can be extended to Render/Heroku/Netlify)
  

##  Features
- Upload resume as PDF
- Paste job description
- Instant resume analysis (dummy feedback for now)
- Clean UI using React



##Backend setup
-cd backend
python -m venv .venv
.venv\Scripts\activate
Server runs at: http://localhost:5000


##Frontend setup
cd ../frontend
npm install
npm start
App runs at: http://localhost:3000


##  How to Run

1. Clone the repo
2. Navigate to `/backend`, create a virtual environment, and run `app.py`
3. Navigate to `/frontend` and run `npm start`
4. Open `http://localhost:3000` in your browser

##  Future Scope
- Integrate real resume parsing using NLP (e.g., spaCy or OpenAI)
- Add skill-matching score
- Deploy on cloud platforms

---

### 📄 License
MIT

