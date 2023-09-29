import React, { useEffect } from "react";
import { useState } from "react";

export default function Viewdata() {
  useEffect(() => {
    syncSheet();
  }, []);
  const [tabVal, setTabval] = useState([]);

  const syncSheet = async () => {
    try {
      let url = "https://bookread-ev5g.onrender.com/readexcel";
      let data = await fetch(url);
      console.log(data);
      let parsedData = await data.json();
      setTabval(parsedData.values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-sm">
    <h6><strong>Click the Sync button below to refresh data</strong></h6>
      <table className="table table-striped table-dark">
        <tbody>
          {tabVal.map((element, i) => {
            return (
              <tr key={i}>
                <td>{element[0]}</td>
                <td>{element[1]}</td>
                <td>{element[2]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button className="btn btn-primary m-4" onClick={syncSheet}>
        Sync Data{" "}
      </button>
    </div>
  );
}
