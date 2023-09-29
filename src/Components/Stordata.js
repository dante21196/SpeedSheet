import React, { useState } from "react";

export default function Stordata() {
  const [id, setId] = useState("");
  const [avname, setAvname] = useState("");
  const [pscore, setPscore] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let url = "https://bookread-ev5g.onrender.com/writeexcel";
      await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          avname,
          pscore,
        }),
      });
      setId("");
      setAvname("");
      setPscore("");
      alert("User added Successfully!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container" style={{height:"100%"}}>
    <h6><strong>Fill the details to be entered </strong></h6>
      <form id="form">
        <div className="mb-3">
          <label className="form-label">Enter ID:</label>
          <input
            id="id"
            name="id"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Avatar Name:</label>
          <input
            id="name"
            name="avatar"
            type="text"
            value={avname}
            onChange={(e) => setAvname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Performance Score:</label>
          <input
            id="score"
            name="id"
            type="text"
            value={pscore}
            onChange={(e) => setPscore(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <br/><br/><br/><br/>
    </div>
  );
}
