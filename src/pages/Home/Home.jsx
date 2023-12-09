import React, { useState } from "react";
import "./Home.css";
import FrontPage from "../Front/FrontPage";

const Home = () => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [subject, setSubject] = useState("");
  const [teacher,setTeacher]=useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic form validation
    if (!name.trim() || !roll.trim() || !subject.trim()) {
      setError("Please fill out all fields.");
      return;
    }

    if (!/^[A-Za-z ]*$/.test(name)) {
      setError("Name only contains characters");
      return;
    }
    if (subject === "Computer Security") {
      setTeacher("Ram bahadur chand");
    } else if (subject === "Software Engineering") {
      setTeacher("hari");
    }
    

    // Additional validation if needed...

    // If validation passes, submit the form
    setSubmitted(true);
  };
  

  return (
    <>
      {submitted ? (
        <FrontPage
          name={name || "No Name"}
          roll={roll || "No Roll"}
          subject={subject || "No Subject"}
          teacher={teacher||"No Teacher"}
        />
      ) : (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Student Form</legend>
            <ul>
              <li>
                <div>
                  Name:{" "}
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </li>
              <li>
                <div>
                  Roll No:{" "}
                  <input
                    type="number"
                    value={roll}
                    onChange={(e) => setRoll(e.target.value)}
                  />
                </div>
              </li>
              </ul>
              Subject:
              <br/>
              <input
                      type="radio"
                      value="Computer Security"
                      name="subject"
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  <label>
                    Computer Security
                    </label>

                    <br/>
                    <input
                      type="radio"
                      value="Software Engineering"
                      name="subject"
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  <label>
                    Software Engineering
                    </label>
                    
            {error && <p style={{ color: "red" }}>{error}</p>}

            <div>
              <input type="submit" name="submit" value="Submit" />
            </div>
          </fieldset>
        </form>
      )}
    </>
  );
};

export default Home;