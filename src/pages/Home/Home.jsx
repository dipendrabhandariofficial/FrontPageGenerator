import React, { useState } from "react";
import "./Home.css";
import FrontPage from "../Front/FrontPage";

const Home = () => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = { name, roll };
    // setStudentList([...studentList, newStudent]);
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <FrontPage
          name={name || "No Name"}
          roll={roll || "No Roll"}
        />
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Student Form</legend>
              <div>
                Name:{" "}
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                Roll No:{" "}
                <input
                  type="number"
                  value={roll}
                  onChange={(e) => setRoll(e.target.value)}
                />
              </div>
              <div>
                <input type="submit" name="submit" value="Submit" />
              </div>
            </fieldset>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
