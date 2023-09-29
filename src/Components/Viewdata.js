import React from 'react'
import { useState } from 'react'


export default function Viewdata() {
    const [tabVal,setTabval] = useState([])

    
const syncSheet = async() =>{
    try {
        
 let url = "https://bookread-ev5g.onrender.com/readexcel"
 let data = await fetch(url);
console.log(data)
let parsedData =await data.json();
setTabval(parsedData.values);
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div>
     
       <table>
         
        <tbody>
        

        {tabVal.map((element,i) => {
        return<tr key={i}>
            <td>{element[0]}</td>
            <td>{element[1]}</td>
            <td>{element[2]}</td>
            </tr>
          })}
            </tbody>
        </table>
     
     <button onClick={syncSheet}>CLICK ME</button>
      
    </div>
  )
}
