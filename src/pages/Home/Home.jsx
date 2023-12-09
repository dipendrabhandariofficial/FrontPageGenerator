import React, { useState } from "react";
import "./Home.css";
import FrontPage from "../Front/FrontPage";

const Home = () => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [subject, setSubject]= useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic form validation
    if (!name.trim() || !roll.trim()) {
      setError("Please fill out all fields.");
      return;
    }

    // Additional validation if needed...

    // If validation passes, submit the form
    setSubmitted(true);
  };

  return (
    <>
      {submitted ? (
        <FrontPage name={name || "No Name"} roll={roll || "No Roll"} subject={subject || "no subject"} />
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
              <li>
      <div>
        <label>
          Subject: Computer Security
          <input
            type="radio"
            value="Computer Security"
            name="subject"
            //checked={selectedSubject === 'Computer Security'}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Software Engineering
          <input
            type="radio"
            value="Software Engineering"
            name="subject"
            //checked={selectedSubject === 'Software Engineering'}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
      </div>
    </li>
            </ul>

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
