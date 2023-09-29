import React, { useState } from 'react'




export default function Stordata() {
    const [id,setId] = useState("");
    const [avname,setAvname] = useState("");
    const [pscore,setPscore] = useState("");
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
        
            let url = "https://bookread-ev5g.onrender.com/writeexcel"
            
            let data = await fetch(url,{
                method: "POST",
                mode:"cors",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type" : 'application/json',
                    
                  },
                body: JSON.stringify({
                  id ,
                  avname,
                 pscore,
                }),
            });
           console.log(data)
               } catch (error) {
                   console.log(error)
               }
    }
  return (
    <div>
      <form id="form">
        <label>ID:</label><input id="id" name="id" type="text" onChange={(e) => setId(e.target.value)}/>
        <label>Avatar Name:</label><input id="name" name="avatar" type="text" onChange={(e) => setAvname(e.target.value)}/>
        <label>Performance Score:</label><input id="score" name="id" type="text" onChange={(e) => setPscore(e.target.value)}/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}
