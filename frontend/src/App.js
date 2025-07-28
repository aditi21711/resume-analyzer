import React, { useState } from "react";

function App() {
  const [file, setFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [response, setResponse] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file || !jobDesc.trim()) {
      alert("Please select a file and enter the job description.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("job_desc", "data analyst");

    try {
      const res = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      // ✅ Use `data.result` not `data.text` (your backend sends { result: ... })
      setResponse(data.result || "No feedback received.");
    } catch (error) {
      console.error("Error uploading file:", error);
      setResponse("An error occurred. Please try again.");
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>AI Resume Analyzer</h1>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />
        <br /><br />
        <textarea
          placeholder="Paste Job Description here..."
          rows="5"
          cols="60"
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
        />
        <br /><br />
        <button type="submit">Upload</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h3>Analysis Result:</h3>
        <pre>{response}</pre>
      </div>
    </div>
  );
}

export default App;
